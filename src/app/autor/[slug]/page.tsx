import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookCard from "@/components/BookCard";
import { getAllAuthors, getAuthorBySlug, getBooksByAuthor } from "@/lib/data";

export async function generateStaticParams() {
  return getAllAuthors().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) return { title: "Autor no encontrado" };
  return {
    title: `${author.name} — Libros y resúmenes`,
    description: `Resúmenes de libros de ${author.name}. ${author.bio.slice(0, 140)}`,
  };
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) notFound();

  const authorBooks = getBooksByAuthor(author.slug);

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10">
      <nav className="text-sm text-muted mb-6 flex items-center gap-1.5">
        <Link href="/" className="hover:text-foreground transition-colors">
          Inicio
        </Link>
        <span>/</span>
        <Link
          href="/autores"
          className="hover:text-foreground transition-colors"
        >
          Autores
        </Link>
        <span>/</span>
        <span className="text-foreground">{author.name}</span>
      </nav>

      <header className="mb-10">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
          {author.name}
        </h1>
        <p className="mt-4 text-stone-700 leading-relaxed text-lg">
          {author.bio}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-card border border-border rounded-lg p-5">
          <h2 className="font-serif font-bold text-foreground mb-2">Estilo</h2>
          <p className="text-stone-600 text-sm">{author.style}</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-5">
          <h2 className="font-serif font-bold text-foreground mb-2">
            Para qué lector
          </h2>
          <p className="text-stone-600 text-sm">{author.forWhom}</p>
        </div>
      </div>

      {author.recurringThemes.length > 0 && (
        <section className="mb-10">
          <h2 className="font-serif text-xl font-bold text-foreground mb-3">
            Temas recurrentes
          </h2>
          <div className="flex flex-wrap gap-2">
            {author.recurringThemes.map((t) => (
              <span
                key={t}
                className="text-sm px-3 py-1.5 rounded-full bg-stone-100 text-stone-700"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="font-serif text-xl font-bold text-foreground mb-4">
          Libros de {author.name}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {authorBooks.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
}
