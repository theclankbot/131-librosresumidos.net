import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookGrid from "@/components/BookGrid";
import { getAllGenres, getGenreBySlug, getBooksByGenre } from "@/lib/data";
import { Genre } from "@/data/types";

export async function generateStaticParams() {
  return getAllGenres().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const genre = getGenreBySlug(slug);
  if (!genre) return { title: "Género no encontrado" };
  return {
    title: `${genre.name} — Resúmenes`,
    description: `Resúmenes de libros de ${genre.name.toLowerCase()}. ${genre.description}`,
  };
}

export default async function GenrePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const genre = getGenreBySlug(slug);
  if (!genre) notFound();

  const genreBooks = getBooksByGenre(slug as Genre);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <nav className="text-sm text-muted mb-6 flex items-center gap-1.5">
        <Link href="/" className="hover:text-foreground transition-colors">
          Inicio
        </Link>
        <span>/</span>
        <Link
          href="/generos"
          className="hover:text-foreground transition-colors"
        >
          Géneros
        </Link>
        <span>/</span>
        <span className="text-foreground">{genre.name}</span>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">{genre.icon}</span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            {genre.name}
          </h1>
        </div>
        <p className="text-stone-600 text-lg mt-2 max-w-2xl">
          {genre.description}
        </p>
        <p className="text-sm text-muted mt-2">
          {genreBooks.length}{" "}
          {genreBooks.length === 1 ? "resumen disponible" : "resúmenes disponibles"}
        </p>
      </header>

      <BookGrid books={genreBooks} />
    </div>
  );
}
