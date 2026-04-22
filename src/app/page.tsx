import Link from "next/link";
import SearchBox from "@/components/SearchBox";
import BookCard from "@/components/BookCard";
import {
  getPopularBooks,
  getSchoolBooks,
  getGenresWithBooks,
} from "@/lib/data";

export default function Home() {
  const popular = getPopularBooks();
  const school = getSchoolBooks().slice(0, 6);
  const genresWithBooks = getGenresWithBooks().slice(0, 8);

  return (
    <>
      {/* Hero */}
      <section className="bg-card border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-foreground max-w-2xl mx-auto leading-tight">
            Entiende rápido de qué va un libro
          </h1>
          <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
            Resúmenes claros, temas, personajes y contexto. Una biblioteca
            editorial en español para estudiantes, lectores y curiosos.
          </p>
          <div className="mt-8 max-w-lg mx-auto">
            <SearchBox size="large" />
          </div>
          <p className="mt-3 text-xs text-muted">
            Prueba: &ldquo;Papelucho&rdquo;, &ldquo;Saint-Exupéry&rdquo;,
            &ldquo;novela histórica&rdquo;
          </p>
        </div>
      </section>

      {/* Browse by genre */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
          Explorar por género
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {genresWithBooks.map((genre) => (
            <Link
              key={genre.slug}
              href={`/genero/${genre.slug}`}
              className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:shadow-md hover:border-stone-300 transition-all group"
            >
              <span className="text-2xl">{genre.icon}</span>
              <div>
                <span className="font-medium text-foreground text-sm group-hover:text-accent transition-colors">
                  {genre.name}
                </span>
                <span className="block text-xs text-muted">
                  {genre.count}{" "}
                  {genre.count === 1 ? "libro" : "libros"}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular books */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="flex items-end justify-between mb-6">
          <h2 className="font-serif text-2xl font-bold text-foreground">
            Los más consultados
          </h2>
          <Link
            href="/buscar"
            className="text-sm text-accent hover:underline"
          >
            Ver todos
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {popular.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </section>

      {/* School readings */}
      <section className="bg-card border-y border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Para estudiar
              </h2>
              <p className="text-sm text-muted mt-1">
                Lecturas escolares y juveniles que más se consultan
              </p>
            </div>
            <Link
              href="/genero/juvenil"
              className="text-sm text-accent hover:underline"
            >
              Ver todas
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {school.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 text-center">
        <h2 className="font-serif text-2xl font-bold text-foreground">
          ¿Buscas un libro concreto?
        </h2>
        <p className="mt-2 text-muted max-w-md mx-auto">
          Usa el buscador para encontrar el resumen que necesitas por
          título, autor o tema.
        </p>
        <div className="mt-6 max-w-md mx-auto">
          <SearchBox />
        </div>
      </section>
    </>
  );
}
