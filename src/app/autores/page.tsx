import { Metadata } from "next";
import Link from "next/link";
import { getAllAuthors } from "@/lib/data";

export const metadata: Metadata = {
  title: "Autores",
  description:
    "Todos los autores con resúmenes disponibles en Libros Resumidos. Encuentra resúmenes por autor.",
};

export default function AuthorsPage() {
  const authors = getAllAuthors().sort((a, b) =>
    a.name.localeCompare(b.name, "es")
  );

  const grouped = authors.reduce(
    (acc, author) => {
      const letter = author.name.charAt(0).toUpperCase();
      if (!acc[letter]) acc[letter] = [];
      acc[letter].push(author);
      return acc;
    },
    {} as Record<string, typeof authors>
  );

  const letters = Object.keys(grouped).sort((a, b) =>
    a.localeCompare(b, "es")
  );

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10">
      <nav className="text-sm text-muted mb-6 flex items-center gap-1.5">
        <Link href="/" className="hover:text-foreground transition-colors">
          Inicio
        </Link>
        <span>/</span>
        <span className="text-foreground">Autores</span>
      </nav>

      <h1 className="font-serif text-3xl font-bold text-foreground mb-2">
        Autores
      </h1>
      <p className="text-muted mb-8">
        {authors.length} autores con resúmenes disponibles
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {letters.map((letter) => (
          <a
            key={letter}
            href={`#${letter}`}
            className="w-8 h-8 flex items-center justify-center rounded bg-stone-100 text-sm font-medium text-stone-600 hover:bg-accent hover:text-white transition-colors"
          >
            {letter}
          </a>
        ))}
      </div>

      <div className="space-y-8">
        {letters.map((letter) => (
          <div key={letter} id={letter}>
            <h2 className="font-serif text-xl font-bold text-foreground border-b border-border pb-2 mb-4">
              {letter}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {grouped[letter].map((author) => (
                <Link
                  key={author.slug}
                  href={`/autor/${author.slug}`}
                  className="flex flex-col p-4 bg-card border border-border rounded-lg hover:shadow-md hover:border-stone-300 transition-all group"
                >
                  <span className="font-medium text-foreground group-hover:text-accent transition-colors">
                    {author.name}
                  </span>
                  <span className="text-xs text-muted mt-1 line-clamp-1">
                    {author.bio.slice(0, 80)}...
                  </span>
                  <span className="text-xs text-muted mt-1">
                    {author.bookSlugs.length}{" "}
                    {author.bookSlugs.length === 1
                      ? "resumen"
                      : "resúmenes"}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
