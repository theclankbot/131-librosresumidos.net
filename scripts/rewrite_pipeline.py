#!/usr/bin/env python3
from __future__ import annotations

import argparse
import csv
import json
import re
import shutil
from collections import defaultdict
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
BOOKS_PATH = ROOT / "src" / "data" / "books.ts"
EXPANSION_BOOKS_PATH = ROOT / "src" / "data" / "expansion-books.json"
OVERRIDES_PATH = ROOT / "src" / "data" / "editorial-overrides.json"
MIGRATION_DIR = ROOT / "Migration"
WORK_ROOT = ROOT / ".work" / "rewrite-batches"
PENDING_DIR = WORK_ROOT / "pending"
IN_PROGRESS_DIR = WORK_ROOT / "in-progress"
COMPLETED_DIR = WORK_ROOT / "completed"
APPLIED_DIR = WORK_ROOT / "applied"
REJECTED_DIR = WORK_ROOT / "rejected"
TEMPLATE_PATH = ROOT / "templates" / "rewrite-batch-template.json"


def ensure_dirs() -> None:
    for path in [PENDING_DIR, IN_PROGRESS_DIR, COMPLETED_DIR, APPLIED_DIR, REJECTED_DIR, TEMPLATE_PATH.parent]:
        path.mkdir(parents=True, exist_ok=True)


def now_iso() -> str:
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")


def today_str() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%d")


def extract_book_blocks(text: str) -> list[str]:
    start = text.find("[")
    end = text.rfind("]")
    if start == -1 or end == -1:
        raise SystemExit("No se pudo localizar el array de books en books.ts")
    body = text[start + 1 : end]
    blocks: list[str] = []
    depth = 0
    in_string = False
    escaped = False
    current: list[str] = []
    for ch in body:
        if in_string:
            current.append(ch)
            if escaped:
                escaped = False
            elif ch == "\\":
                escaped = True
            elif ch == '"':
                in_string = False
            continue
        if ch == '"':
            in_string = True
            current.append(ch)
            continue
        if ch == "{":
            depth += 1
            current.append(ch)
            continue
        if ch == "}":
            depth -= 1
            current.append(ch)
            if depth == 0 and current:
                blocks.append("".join(current).strip().rstrip(","))
                current = []
            continue
        if depth > 0:
            current.append(ch)
    return blocks


def unescape_ts_string(value: str) -> str:
    return (
        value.replace("\\n", "\n")
        .replace('\\"', '"')
        .replace("\\'", "'")
        .replace("\\\\", "\\")
    )


def parse_string(block: str, field: str) -> str | None:
    m = re.search(rf"\b{re.escape(field)}:\s*\"((?:\\.|[^\"])*)\"", block, re.S)
    if not m:
        return None
    return unescape_ts_string(m.group(1))


def parse_bool(block: str, field: str) -> bool | None:
    m = re.search(rf"\b{re.escape(field)}:\s*(true|false)", block)
    return None if not m else m.group(1) == "true"


def parse_number(block: str, field: str) -> int | None:
    m = re.search(rf"\b{re.escape(field)}:\s*(\d+)", block)
    return None if not m else int(m.group(1))


def parse_string_array(block: str, field: str) -> list[str]:
    m = re.search(rf"\b{re.escape(field)}:\s*\[(.*?)\]", block, re.S)
    if not m:
        return []
    return [unescape_ts_string(x) for x in re.findall(r'\"((?:\\.|[^\"])*)\"', m.group(1))]


def normalize_book_entry(entry: dict[str, Any]) -> dict[str, Any]:
    return {
        "slug": entry.get("slug") or "",
        "title": entry.get("title") or entry.get("slug") or "",
        "authorSlug": entry.get("authorSlug") or "",
        "authorName": entry.get("authorName") or "",
        "type": entry.get("type") or "ficcion",
        "audience": entry.get("audience") or "todos",
        "summary": entry.get("summary") or "",
        "aboutThisBook": entry.get("aboutThisBook") or "",
        "forWhom": entry.get("forWhom") or "",
        "whyItMatters": entry.get("whyItMatters") or "",
        "centralConflict": entry.get("centralConflict") or "",
        "tone": entry.get("tone") or "",
        "year": entry.get("year"),
        "pages": entry.get("pages"),
        "genres": entry.get("genres") or ["narrativa"],
        "themes": entry.get("themes") or [],
        "keyIdeas": entry.get("keyIdeas") or [],
        "relatedSlugs": entry.get("relatedSlugs") or [],
        "escpilar": bool(entry.get("escpilar") or False),
    }


def load_books() -> list[dict[str, Any]]:
    text = BOOKS_PATH.read_text(encoding="utf-8")
    books: list[dict[str, Any]] = []
    for block in extract_book_blocks(text):
        slug = parse_string(block, "slug")
        if not slug:
            continue
        books.append(
            normalize_book_entry(
                {
                    "slug": slug,
                    "title": parse_string(block, "title") or slug,
                    "authorSlug": parse_string(block, "authorSlug") or "",
                    "authorName": parse_string(block, "authorName") or "",
                    "type": parse_string(block, "type") or "ficcion",
                    "audience": parse_string(block, "audience") or "todos",
                    "summary": parse_string(block, "summary") or "",
                    "aboutThisBook": parse_string(block, "aboutThisBook") or "",
                    "forWhom": parse_string(block, "forWhom") or "",
                    "whyItMatters": parse_string(block, "whyItMatters") or "",
                    "centralConflict": parse_string(block, "centralConflict") or "",
                    "tone": parse_string(block, "tone") or "",
                    "year": parse_number(block, "year"),
                    "pages": parse_number(block, "pages"),
                    "genres": parse_string_array(block, "genres"),
                    "themes": parse_string_array(block, "themes"),
                    "keyIdeas": parse_string_array(block, "keyIdeas"),
                    "relatedSlugs": parse_string_array(block, "relatedSlugs"),
                    "escpilar": parse_bool(block, "escpilar") or False,
                }
            )
        )
    if EXPANSION_BOOKS_PATH.exists():
        extra = json.loads(EXPANSION_BOOKS_PATH.read_text(encoding="utf-8"))
        for entry in extra:
            if entry.get("slug"):
                books.append(normalize_book_entry(entry))
    return books


def aggregate_clicks() -> dict[str, dict[str, float]]:
    stats: dict[str, dict[str, float]] = defaultdict(lambda: {"clicks": 0.0, "impressions": 0.0, "sources": 0.0})
    page_files = [
        MIGRATION_DIR / "gsc_pages_2025-01-01_2026-04-15.csv",
        MIGRATION_DIR / "bing_pages_2025-01-01_2026-04-15.csv",
    ]
    for path in page_files:
        if not path.exists():
            continue
        with path.open(encoding="utf-8-sig", newline="") as fh:
            for row in csv.DictReader(fh):
                try:
                    clicks = float(row.get("clicks") or 0)
                    impressions = float(row.get("impressions") or 0)
                except ValueError:
                    continue
                if clicks <= 0:
                    continue
                page = (row.get("page") or "").strip().rstrip("/")
                if not page or page == "https://librosresumidos.net":
                    continue
                slug = page.split("/")[-1]
                stats[slug]["clicks"] += clicks
                stats[slug]["impressions"] += impressions
                stats[slug]["sources"] += 1
    return stats


def load_overrides() -> dict[str, Any]:
    if not OVERRIDES_PATH.exists():
        return {}
    return json.loads(OVERRIDES_PATH.read_text(encoding="utf-8"))


def load_expansion_books() -> list[dict[str, Any]]:
    if not EXPANSION_BOOKS_PATH.exists():
        return []
    return json.loads(EXPANSION_BOOKS_PATH.read_text(encoding="utf-8"))


def historical_missing_slugs() -> list[dict[str, Any]]:
    books = {book["slug"] for book in load_books()}
    clicks = aggregate_clicks()
    items: list[dict[str, Any]] = []
    for slug, stat in clicks.items():
        if slug in books:
            continue
        items.append({"slug": slug, "clicks": int(stat["clicks"]), "impressions": int(stat["impressions"])})
    items.sort(key=lambda x: (-x["clicks"], -x["impressions"], x["slug"]))
    return items


def guess_stub_from_slug(slug: str) -> dict[str, Any]:
    title_part = slug
    author_part = "autor-desconocido"
    if "-de-" in slug:
        title_part, author_part = slug.rsplit("-de-", 1)
    title = title_part.replace("-", " ").strip().title()
    author_name = author_part.replace("-", " ").strip().title()
    author_slug = author_part.strip()
    return normalize_book_entry(
        {
            "slug": slug,
            "title": title,
            "authorSlug": author_slug,
            "authorName": author_name,
            "type": "ficcion",
            "audience": "todos",
            "genres": ["narrativa"],
            "summary": "Pendiente de desarrollo editorial.",
            "aboutThisBook": "Ficha en expansión a partir de señal histórica de clicks.",
            "forWhom": "Pendiente de revisión editorial.",
            "whyItMatters": "Pendiente de revisión editorial.",
            "themes": [],
            "keyIdeas": [],
            "relatedSlugs": [],
        }
    )


def reserved_slugs() -> set[str]:
    slugs: set[str] = set()
    for folder in [PENDING_DIR, IN_PROGRESS_DIR, COMPLETED_DIR, APPLIED_DIR]:
        if not folder.exists():
            continue
        for path in folder.glob("*.json"):
            try:
                payload = json.loads(path.read_text(encoding="utf-8"))
            except Exception:
                continue
            for item in payload.get("items", []):
                slug = item.get("slug")
                if slug:
                    slugs.add(slug)
    return slugs


def candidate_items(include_done: bool = False) -> list[dict[str, Any]]:
    books = {book["slug"]: book for book in load_books()}
    clicks = aggregate_clicks()
    overrides = load_overrides()
    reserved = reserved_slugs()
    items: list[dict[str, Any]] = []
    for slug, book in books.items():
        if slug not in clicks:
            continue
        if slug in reserved:
            continue
        if (not include_done) and slug in overrides:
            continue
        stat = clicks[slug]
        items.append(
            {
                **book,
                "clicks": int(stat["clicks"]),
                "impressions": int(stat["impressions"]),
                "alreadyRewritten": slug in overrides,
            }
        )
    items.sort(key=lambda x: (-x["clicks"], -x["impressions"], x["slug"]))
    return items


def blank_rewrite_item(book: dict[str, Any], priority: int) -> dict[str, Any]:
    return {
        "slug": book["slug"],
        "title": book["title"],
        "authorName": book["authorName"],
        "authorSlug": book["authorSlug"],
        "type": book["type"],
        "audience": book["audience"],
        "genres": book["genres"],
        "year": book["year"],
        "pages": book["pages"],
        "clicks": book["clicks"],
        "impressions": book["impressions"],
        "priority": priority,
        "current": {
            "summary": book["summary"],
            "aboutThisBook": book["aboutThisBook"],
            "centralConflict": book["centralConflict"],
            "themes": book["themes"],
            "keyIdeas": book["keyIdeas"],
            "forWhom": book["forWhom"],
            "whyItMatters": book["whyItMatters"],
            "tone": book["tone"],
            "escpilar": book["escpilar"],
        },
        "rewritten": {
            "title": "",
            "authorName": "",
            "authorSlug": "",
            "type": "",
            "audience": "",
            "genres": [],
            "year": None,
            "pages": None,
            "summary": "",
            "aboutThisBook": "",
            "forWhom": "",
            "whyItMatters": "",
            "editorialIntro": "",
            "readingLevel": "",
            "whyReadToday": "",
            "studyNotes": [],
            "chapterSummaries": [],
            "analysisSections": [],
            "faqs": [],
            "reviewedAt": "",
            "sources": [],
        },
    }


def write_json(path: Path, data: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def cmd_status(_: argparse.Namespace) -> None:
    ensure_dirs()
    books = load_books()
    clicks = aggregate_clicks()
    overrides = load_overrides()
    candidates = candidate_items(include_done=False)
    missing = historical_missing_slugs()
    pending = sorted(p.name for p in PENDING_DIR.glob("*.json"))
    in_progress = sorted(p.name for p in IN_PROGRESS_DIR.glob("*.json"))
    completed = sorted(p.name for p in COMPLETED_DIR.glob("*.json"))
    applied = sorted(p.name for p in APPLIED_DIR.glob("*.json"))
    payload = {
        "books_total": len(books),
        "books_with_clicks": len([b for b in books if b["slug"] in clicks]),
        "books_with_editorial_override": len(overrides),
        "eligible_pending_rewrite": len(candidates),
        "historical_missing_clicked_slugs": len(missing),
        "pending_batches": pending,
        "in_progress_batches": in_progress,
        "completed_batches": completed,
        "applied_batches": applied,
        "next_candidates": [
            {
                "slug": item["slug"],
                "title": item["title"],
                "clicks": item["clicks"],
                "impressions": item["impressions"],
            }
            for item in candidates[:12]
        ],
        "next_missing_clicked_slugs": missing[:12],
    }
    print(json.dumps(payload, indent=2, ensure_ascii=False))


def cmd_make_batch(args: argparse.Namespace) -> None:
    ensure_dirs()
    items = candidate_items(include_done=args.include_done)
    if not items:
        raise SystemExit("No hay candidatos disponibles para batch")
    chosen = items[: args.size]
    payload = {
        "batchName": args.name,
        "createdAt": now_iso(),
        "source": "clicked-current-books",
        "instructions": {
            "goal": "Convertir cada ficha en un resumen editorial profundo, útil para estudio y lectura real.",
            "rules": [
                "No tocar slug, autor ni métricas.",
                "Escribir en español natural, sin tono robótico.",
                "Si no hay capítulos claros, usar partes o momentos clave equivalentes.",
                "No inventar datos bibliográficos dudosos.",
                "Cada item debe incluir 3-5 FAQs y 3-5 fuentes útiles.",
            ],
            "minimums": {
                "summary_words": 90,
                "about_words": 60,
                "chapter_items": 3,
                "analysis_items": 3,
                "study_notes": 3,
                "faqs": 3,
                "sources": 3,
            },
        },
        "items": [blank_rewrite_item(book, i + 1) for i, book in enumerate(chosen)],
    }
    out = PENDING_DIR / f"{args.name}.json"
    if out.exists():
        raise SystemExit(f"Ya existe {out}")
    write_json(out, payload)
    print(str(out))


def cmd_make_wave(args: argparse.Namespace) -> None:
    ensure_dirs()
    remaining = candidate_items(include_done=args.include_done)
    if not remaining:
        raise SystemExit("No hay candidatos para esa wave")
    created: list[str] = []
    for idx in range(args.count):
        remaining = candidate_items(include_done=args.include_done)
        if not remaining:
            break
        name = f"{args.prefix}-{idx + 1:02d}"
        ns = argparse.Namespace(name=name, size=args.size, include_done=args.include_done)
        cmd_make_batch(ns)
        created.append(name)
    print(json.dumps(created, indent=2, ensure_ascii=False))


def cmd_seed_expansion(args: argparse.Namespace) -> None:
    ensure_dirs()
    existing = load_expansion_books()
    existing_slugs = {item.get("slug") for item in existing}
    reserved = reserved_slugs()
    seeded = []
    for item in historical_missing_slugs():
        slug = item["slug"]
        if slug in existing_slugs or slug in reserved:
            continue
        stub = guess_stub_from_slug(slug)
        existing.append(stub)
        existing_slugs.add(slug)
        seeded.append({"slug": slug, "clicks": item["clicks"], "impressions": item["impressions"]})
        if len(seeded) >= args.size:
            break
    write_json(EXPANSION_BOOKS_PATH, existing)
    print(json.dumps(seeded, indent=2, ensure_ascii=False))


def validate_item(item: dict[str, Any]) -> list[str]:
    rewritten = item.get("rewritten", {})
    errors: list[str] = []
    for key, min_words in [("summary", 90), ("aboutThisBook", 60), ("forWhom", 18), ("whyItMatters", 25), ("editorialIntro", 40), ("readingLevel", 12), ("whyReadToday", 20)]:
        text = (rewritten.get(key) or "").strip()
        if len(re.findall(r"\w+", text, re.U)) < min_words:
            errors.append(f"{key} demasiado corto")
    if len(rewritten.get("studyNotes") or []) < 3:
        errors.append("studyNotes insuficiente")
    if len(rewritten.get("chapterSummaries") or []) < 3:
        errors.append("chapterSummaries insuficiente")
    if len(rewritten.get("analysisSections") or []) < 3:
        errors.append("analysisSections insuficiente")
    if len(rewritten.get("faqs") or []) < 3:
        errors.append("faqs insuficiente")
    if len(rewritten.get("sources") or []) < 3:
        errors.append("sources insuficiente")
    reviewed_at = rewritten.get("reviewedAt") or ""
    if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", reviewed_at):
        errors.append("reviewedAt inválido")
    for section in rewritten.get("chapterSummaries") or []:
        if not section.get("title") or not section.get("summary"):
            errors.append("chapterSummaries incompleto")
            break
    for section in rewritten.get("analysisSections") or []:
        if not section.get("heading") or not section.get("content"):
            errors.append("analysisSections incompleto")
            break
    for faq in rewritten.get("faqs") or []:
        if not faq.get("question") or not faq.get("answer"):
            errors.append("faqs incompleto")
            break
    source_list = rewritten.get("sources") or []
    for src in source_list:
        if not isinstance(src, dict) or not src.get("label") or not src.get("url"):
            errors.append("sources incompleto")
            break
    weak_patterns = ["/search?q=", "goodreads.com/search", "openlibrary.org/search", "search.worldcat.org/search"]
    strong_sources = [src for src in source_list if not any(p in (src.get("url") or "") for p in weak_patterns)]
    if len(strong_sources) < 2:
        errors.append("sources demasiado débil: hacen falta al menos 2 fuentes no genéricas")
    return errors


def cmd_claim_batch(_: argparse.Namespace) -> None:
    ensure_dirs()
    candidates = sorted(PENDING_DIR.glob('*.json'))
    if not candidates:
        raise SystemExit('No hay batches pendientes para reclamar')
    src = candidates[0]
    dest = IN_PROGRESS_DIR / src.name
    src.rename(dest)
    print(str(dest))


def cmd_complete_batch(args: argparse.Namespace) -> None:
    ensure_dirs()
    src = Path(args.path)
    if not src.exists():
        raise SystemExit(f"No existe {src}")
    dest = COMPLETED_DIR / src.name
    shutil.move(str(src), dest)
    print(str(dest))


def cmd_apply(args: argparse.Namespace) -> None:
    ensure_dirs()
    src = Path(args.path).resolve()
    if not src.exists():
        raise SystemExit(f"No existe {src}")
    payload = json.loads(src.read_text(encoding="utf-8"))
    rejected: dict[str, list[str]] = {}
    merged = load_overrides()
    for item in payload.get("items", []):
        errors = validate_item(item)
        if errors:
            rejected[item.get("slug", "sin-slug")] = errors
            continue
        rw = item["rewritten"]
        merged_item = {
            "summary": rw["summary"].strip(),
            "aboutThisBook": rw["aboutThisBook"].strip(),
            "forWhom": rw["forWhom"].strip(),
            "whyItMatters": rw["whyItMatters"].strip(),
            "editorialIntro": rw["editorialIntro"].strip(),
            "readingLevel": rw["readingLevel"].strip(),
            "whyReadToday": rw["whyReadToday"].strip(),
            "studyNotes": rw["studyNotes"],
            "chapterSummaries": rw["chapterSummaries"],
            "analysisSections": rw["analysisSections"],
            "faqs": rw["faqs"],
            "sources": rw["sources"],
            "reviewedAt": rw["reviewedAt"],
        }
        for key in ["title", "authorName", "authorSlug", "type", "audience"]:
            if isinstance(rw.get(key), str) and rw.get(key).strip():
                merged_item[key] = rw[key].strip()
        if isinstance(rw.get("genres"), list) and rw.get("genres"):
            merged_item["genres"] = rw["genres"]
        if isinstance(rw.get("year"), int):
            merged_item["year"] = rw["year"]
        if isinstance(rw.get("pages"), int):
            merged_item["pages"] = rw["pages"]
        merged[item["slug"]] = merged_item
    if rejected:
        out = REJECTED_DIR / src.name
        write_json(out, {"rejectedAt": now_iso(), "errors": rejected, "batch": payload})
        raise SystemExit(json.dumps(rejected, indent=2, ensure_ascii=False))
    write_json(OVERRIDES_PATH, merged)
    payload["appliedAt"] = now_iso()
    write_json(APPLIED_DIR / src.name, payload)
    if src.parent in [PENDING_DIR, COMPLETED_DIR]:
        src.unlink()
    print(f"Aplicado {src.name} a {OVERRIDES_PATH}")


def cmd_init_template(_: argparse.Namespace) -> None:
    ensure_dirs()
    template = {
        "batchName": "sample-batch",
        "createdAt": now_iso(),
        "source": "clicked-current-books",
        "instructions": {
            "goal": "Reescribir cada ficha como un resumen serio, útil para estudio, con profundidad real.",
            "rules": [
                "Usa español natural y claro.",
                "Puedes usar capítulos o partes equivalentes.",
                "No inventes datos dudosos.",
            ],
        },
        "items": [
            {
                "slug": "ejemplo-libro",
                "title": "Libro de ejemplo",
                "authorName": "Autora Ejemplo",
                "clicks": 100,
                "impressions": 2000,
                "current": {
                    "summary": "Resumen actual corto",
                    "aboutThisBook": "Contexto breve",
                },
                "rewritten": {
                    "summary": "",
                    "aboutThisBook": "",
                    "forWhom": "",
                    "whyItMatters": "",
                    "editorialIntro": "",
                    "readingLevel": "",
                    "whyReadToday": "",
                    "studyNotes": [],
                    "chapterSummaries": [],
                    "analysisSections": [],
                    "faqs": [],
                    "reviewedAt": today_str(),
                    "sources": [],
                },
            }
        ],
    }
    write_json(TEMPLATE_PATH, template)
    print(str(TEMPLATE_PATH))


def build_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(description="Pipeline editorial por batches para librosresumidos.net")
    sub = p.add_subparsers(dest="cmd", required=True)

    s = sub.add_parser("status")
    s.set_defaults(func=cmd_status)

    s = sub.add_parser("make-batch")
    s.add_argument("--name", required=True)
    s.add_argument("--size", type=int, default=6)
    s.add_argument("--include-done", action="store_true")
    s.set_defaults(func=cmd_make_batch)

    s = sub.add_parser("make-wave")
    s.add_argument("--prefix", required=True)
    s.add_argument("--count", type=int, default=3)
    s.add_argument("--size", type=int, default=4)
    s.add_argument("--include-done", action="store_true")
    s.set_defaults(func=cmd_make_wave)

    s = sub.add_parser("seed-expansion")
    s.add_argument("--size", type=int, default=4)
    s.set_defaults(func=cmd_seed_expansion)

    s = sub.add_parser("claim-batch")
    s.set_defaults(func=cmd_claim_batch)

    s = sub.add_parser("complete-batch")
    s.add_argument("path")
    s.set_defaults(func=cmd_complete_batch)

    s = sub.add_parser("apply")
    s.add_argument("path")
    s.set_defaults(func=cmd_apply)

    s = sub.add_parser("init-template")
    s.set_defaults(func=cmd_init_template)

    return p


if __name__ == "__main__":
    parser = build_parser()
    args = parser.parse_args()
    args.func(args)
