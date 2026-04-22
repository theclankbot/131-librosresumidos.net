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

const mergedBooks: Book[] = allBooks.map((book) => ({
  ...book,
  ...(metadataBySlug[book.slug] ?? {}),
  ...(overrides[book.slug] ?? {}),
}));

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
