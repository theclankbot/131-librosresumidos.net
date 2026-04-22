import { Metadata } from "next";
import Link from "next/link";
import { getGenresWithBooks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Géneros",
  description:
    "Explora resúmenes de libros por género: juvenil, clásicos, narrativa, desarrollo personal, teatro y más.",
};

export default function GenresPage() {
  const genresWithBooks = getGenresWithBooks();

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10">
      <nav className="text-sm text-muted mb-6 flex items-center gap-1.5">
        <Link href="/" className="hover:text-foreground transition-colors">
          Inicio
        </Link>
        <span>/</span>
        <span className="text-foreground">Géneros</span>
      </nav>

      <h1 className="font-serif text-3xl font-bold text-foreground mb-2">
        Géneros
      </h1>
      <p className="text-muted mb-8">
        Explora resúmenes de libros por categoría
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {genresWithBooks.map((genre) => (
          <Link
            key={genre.slug}
            href={`/genero/${genre.slug}`}
            className="flex items-start gap-4 p-5 bg-card border border-border rounded-lg hover:shadow-md hover:border-stone-300 transition-all group"
          >
            <span className="text-3xl mt-0.5">{genre.icon}</span>
            <div>
              <h2 className="font-serif font-bold text-foreground group-hover:text-accent transition-colors">
                {genre.name}
              </h2>
              <p className="text-sm text-stone-600 mt-1 line-clamp-2">
                {genre.description}
              </p>
              <p className="text-xs text-muted mt-2">
                {genre.count}{" "}
                {genre.count === 1 ? "resumen" : "resúmenes"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
