import { books } from "@/data/books";
import expansionBooks from "@/data/expansion-books.json";
import { authors } from "@/data/authors";
import { genres } from "@/data/genres";
import editorialOverrides from "@/data/editorial-overrides.json";
import bookMetadata from "@/data/book-metadata.json";
import { Book, Author, GenreInfo, Genre } from "@/data/types";

const overrides = editorialOverrides as Record<string, Partial<Book>>;
const rawMetadataBySlug = bookMetadata as Record<string, Record<string, string | number | null>>;
const metadataBySlug: Record<string, Partial<Book>> = Object.fromEntries(
  Object.entries(rawMetadataBySlug).map(([slug, meta]) => [
    slug,
    Object.fromEntries(
      Object.entries(meta).filter(
        ([key, value]) => value !== null && key !== "metadataMatchMethod"
      )
    ),
  ])
);
const extraBooks: Book[] = expansionBooks.map((book) => ({
  ...book,
  year: book.year ?? undefined,
  pages: book.pages ?? undefined,
})) as Book[];
const allBooks = [...books, ...extraBooks];
const canonicalGenres = new Set<Genre>(genres.map((genre) => genre.slug));

function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function mapGenreLabelToCanonical(label: string): Genre | undefined {
  const normalized = normalizeText(label);

  if (canonicalGenres.has(normalized as Genre)) {
    return normalized as Genre;
  }

  if (
    normalized.includes("ciencia-ficcion") ||
    normalized.includes("ficcion-cientifica") ||
    normalized.includes("distopia") ||
    normalized.includes("distop") ||
    normalized.includes("utopia")
  ) {
    return "ciencia-ficcion";
  }

  if (
    normalized.includes("novela-historica") ||
    normalized.includes("ficcion-historica") ||
    normalized.includes("memoria-historica") ||
    normalized.includes("saga-familiar")
  ) {
    return "novela-historica";
  }

  if (
    normalized.includes("juvenil") ||
    normalized.includes("young-adult") ||
    normalized.includes("coming-of-age") ||
    normalized.includes("novela-de-aprendizaje")
  ) {
    return "juvenil";
  }

  if (
    normalized.includes("infantil") ||
    normalized.includes("fabula") ||
    normalized.includes("album-ilustrado")
  ) {
    return "infantil";
  }

  if (
    normalized.includes("thriller") ||
    normalized.includes("novela-negra") ||
    normalized.includes("novela-policial") ||
    normalized.includes("policial") ||
    normalized.includes("misterio") ||
    normalized.includes("intriga") ||
    normalized.includes("suspense") ||
    normalized.includes("terror")
  ) {
    return "thriller";
  }

  if (
    normalized.includes("fantasia") ||
    normalized.includes("magia") ||
    normalized.includes("gotico") ||
    normalized.includes("maravilloso")
  ) {
    return "fantasia";
  }

  if (
    normalized.includes("romance") ||
    normalized.includes("romant") ||
    normalized.includes("amor") ||
    normalized.includes("erot")
  ) {
    return "romance";
  }

  if (
    normalized.includes("poesia") ||
    normalized.includes("poem") ||
    normalized.includes("verso")
  ) {
    return "poesia";
  }

  if (
    normalized.includes("teatro") ||
    normalized.includes("drama") ||
    normalized.includes("tragedia") ||
    normalized.includes("comedia") ||
    normalized.includes("tragicomedia")
  ) {
    return "teatro";
  }

  if (
    normalized.includes("ensayo") ||
    normalized.includes("historia") ||
    normalized.includes("filosof") ||
    normalized.includes("politic") ||
    normalized.includes("feminismo") ||
    normalized.includes("psicolog") ||
    normalized.includes("divulgacion") ||
    normalized.includes("ciencia") ||
    normalized.includes("periodismo") ||
    normalized.includes("cronica")
  ) {
    return "ensayo";
  }

  if (
    normalized.includes("autoayuda") ||
    normalized.includes("desarrollo-personal") ||
    normalized.includes("superacion-personal") ||
    normalized.includes("bienestar") ||
    normalized.includes("espiritualidad") ||
    normalized.includes("habitos") ||
    normalized.includes("liderazgo") ||
    normalized.includes("productividad")
  ) {
    return "desarrollo-personal";
  }

  if (
    normalized.includes("aventura") ||
    normalized.includes("viaje") ||
    normalized.includes("exploracion")
  ) {
    return "aventura";
  }

  if (
    normalized.includes("clasico") ||
    normalized.includes("literatura-espanola") ||
    normalized.includes("literatura-francesa") ||
    normalized.includes("literatura-rusa") ||
    normalized.includes("literatura-latinoamericana") ||
    normalized.includes("literatura-hispanoamericana") ||
    normalized.includes("realismo-decimononico") ||
    normalized.includes("siglo-de-oro")
  ) {
    return "clasicos";
  }

  if (
    normalized.includes("narrativa") ||
    normalized.includes("novela") ||
    normalized.includes("cuento") ||
    normalized.includes("cuentos") ||
    normalized.includes("relato") ||
    normalized.includes("relatos") ||
    normalized.includes("autoficcion") ||
    normalized.includes("ficcion-contemporanea") ||
    normalized.includes("realismo")
  ) {
    return "narrativa";
  }

  return undefined;
}

function normalizeGenres(book: Book): Genre[] {
  const mapped = (book.genres ?? [])
    .map((genre) => mapGenreLabelToCanonical(genre))
    .filter((genre): genre is Genre => Boolean(genre));

  const uniqueGenres = [...new Set(mapped)];

  if (uniqueGenres.length > 0) {
    return uniqueGenres;
  }

  if (book.audience === "infantil") return ["infantil"];
  if (book.audience === "juvenil") return ["juvenil"];
  if (book.type === "no-ficcion") return ["ensayo"];
  return ["narrativa"];
}

const mergedBooks: Book[] = allBooks.map((book) => {
  const mergedBook = {
    ...book,
    ...(metadataBySlug[book.slug] ?? {}),
    ...(overrides[book.slug] ?? {}),
  } as Book;

  return {
    ...mergedBook,
    genres: normalizeGenres(mergedBook),
  };
});

// Books
export function getAllBooks(): Book[] {
  return mergedBooks;
}

export function getBookBySlug(slug: string): Book | undefined {
  return mergedBooks.find((b) => b.slug === slug);
}

export function getBooksByGenre(genre: Genre): Book[] {
  return mergedBooks.filter((b) => b.genres.includes(genre));
}

export function getBooksByAuthor(authorSlug: string): Book[] {
  return mergedBooks.filter((b) => b.authorSlug === authorSlug);
}

export function getSchoolBooks(): Book[] {
  return mergedBooks.filter((b) => b.escpilar);
}

export function getPopularBooks(): Book[] {
  return mergedBooks.slice(0, 12);
}

export function getRelatedBooks(book: Book): Book[] {
  return book.relatedSlugs
    .map((slug) => mergedBooks.find((b) => b.slug === slug))
    .filter((b): b is Book => b !== undefined);
}

export function searchBooks(query: string): Book[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return mergedBooks.filter(
    (b) =>
      b.title.toLowerCase().includes(q) ||
      b.authorName.toLowerCase().includes(q) ||
      b.themes.some((t) => t.toLowerCase().includes(q)) ||
      b.genres.some((g) => g.includes(q))
  );
}

// Authors
export function getAllAuthors(): Author[] {
  return authors;
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}

// Genres
export function getAllGenres(): GenreInfo[] {
  return genres;
}

export function getGenreBySlug(slug: string): GenreInfo | undefined {
  return genres.find((g) => g.slug === slug);
}

export function getGenresWithBooks(): (GenreInfo & { count: number })[] {
  return genres
    .map((g) => ({
      ...g,
      count: mergedBooks.filter((b) => b.genres.includes(g.slug)).length,
    }))
    .filter((g) => g.count > 0)
    .sort((a, b) => b.count - a.count);
}
