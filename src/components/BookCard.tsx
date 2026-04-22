import Link from "next/link";
import { Book } from "@/data/types";

const genreColors: Record<string, string> = {
  juvenil: "bg-blue-50 text-blue-700",
  clasicos: "bg-amber-50 text-amber-700",
  narrativa: "bg-emerald-50 text-emerald-700",
  "desarrollo-personal": "bg-violet-50 text-violet-700",
  "novela-historica": "bg-orange-50 text-orange-700",
  fantasia: "bg-purple-50 text-purple-700",
  thriller: "bg-red-50 text-red-700",
  infantil: "bg-pink-50 text-pink-700",
  teatro: "bg-yellow-50 text-yellow-700",
  romance: "bg-rose-50 text-rose-700",
  ensayo: "bg-slate-50 text-slate-700",
  aventura: "bg-teal-50 text-teal-700",
  "ciencia-ficcion": "bg-cyan-50 text-cyan-700",
  poesia: "bg-indigo-50 text-indigo-700",
};

export default function BookCard({ book }: { book: Book }) {
  const firstGenre = book.genres[0];
  const genreLabel =
    firstGenre.charAt(0).toUpperCase() + firstGenre.slice(1).replace("-", " ");

  return (
    <Link href={`/${book.slug}`} className="group block">
      <article className="bg-card border border-border rounded-lg p-5 h-full flex flex-col transition-all hover:shadow-md hover:border-stone-300">
        <div className="flex items-start justify-between gap-2 mb-3">
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-full ${genreColors[firstGenre] || "bg-stone-100 text-stone-600"}`}
          >
            {genreLabel}
          </span>
          {book.escpilar && (
            <span className="text-xs text-amber-600 font-medium">
              Lectura escolar
            </span>
          )}
        </div>

        <h3 className="font-serif font-bold text-foreground text-lg leading-snug group-hover:text-accent transition-colors">
          {book.title}
        </h3>

        <p className="text-sm text-muted mt-1">{book.authorName}</p>

        <p className="text-sm text-stone-600 mt-3 line-clamp-3 flex-1">
          {book.summary.slice(0, 160)}...
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {book.themes.slice(0, 3).map((theme) => (
            <span
              key={theme}
              className="text-xs text-muted bg-stone-100 px-2 py-0.5 rounded"
            >
              {theme}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}
