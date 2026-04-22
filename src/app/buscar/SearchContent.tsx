"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import BookCard from "@/components/BookCard";
import { getAllBooks } from "@/lib/data";
import { Book } from "@/data/types";

function filterBooks(books: Book[], query: string): Book[] {
  const q = query.toLowerCase().trim();
  if (!q) return books;
  return books.filter(
    (b) =>
      b.title.toLowerCase().includes(q) ||
      b.authorName.toLowerCase().includes(q) ||
      b.themes.some((t) => t.toLowerCase().includes(q)) ||
      b.genres.some((g) => g.includes(q)) ||
      b.summary.toLowerCase().includes(q)
  );
}

export default function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const allBooks = useMemo(() => getAllBooks(), []);
  const results = useMemo(() => filterBooks(allBooks, query), [allBooks, query]);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <nav className="text-sm text-muted mb-6 flex items-center gap-1.5">
        <Link href="/" className="hover:text-foreground transition-colors">
          Inicio
        </Link>
        <span>/</span>
        <span className="text-foreground">Buscar</span>
      </nav>

      <h1 className="font-serif text-3xl font-bold text-foreground mb-6">
        Buscar libros
      </h1>

      <div className="relative mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute left-4 top-4 text-muted pointer-events-none"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por título, autor, tema o género..."
          className="w-full pl-12 pr-4 py-4 text-lg rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
          autoFocus
        />
      </div>

      <p className="text-sm text-muted mb-6">
        {query.trim()
          ? `${results.length} resultado${results.length !== 1 ? "s" : ""} para "${query}"`
          : `${allBooks.length} libros disponibles`}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {results.map((book) => (
          <BookCard key={book.slug} book={book} />
        ))}
      </div>

      {results.length === 0 && query.trim() && (
        <div className="text-center py-16">
          <p className="text-lg text-muted">
            No encontramos resultados para &ldquo;{query}&rdquo;
          </p>
          <p className="text-sm text-muted mt-2">
            Prueba con otro título, autor o tema
          </p>
        </div>
      )}
    </div>
  );
}
