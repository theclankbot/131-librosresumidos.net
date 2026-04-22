import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookCard from "@/components/BookCard";
import {
  getAllBooks,
  getBookBySlug,
  getRelatedBooks,
  getBooksByAuthor,
} from "@/lib/data";

export async function generateStaticParams() {
  return getAllBooks().map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) return { title: "Libro no encontrado" };

  return {
    title: `${book.title} — Resumen`,
    description: `Resumen de ${book.title} de ${book.authorName}. ${book.summary.slice(0, 150)}...`,
  };
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) notFound();

  const related = getRelatedBooks(book);
  const moreByAuthor = getBooksByAuthor(book.authorSlug).filter(
    (b) => b.slug !== book.slug
  );

  const genreLabels = book.genres.map(
    (g) => g.charAt(0).toUpperCase() + g.slice(1).replace("-", " ")
  );

  return (
    <article className="mx-auto max-w-4xl px-4 sm:px-6 py-10">
      {/* Breadcrumbs */}
      <nav className="text-sm text-muted mb-6 flex items-center gap-1.5">
        <Link href="/" className="hover:text-foreground transition-colors">
          Inicio
        </Link>
        <span>/</span>
        <Link
          href={`/genero/${book.genres[0]}`}
          className="hover:text-foreground transition-colors"
        >
          {genreLabels[0]}
        </Link>
        <span>/</span>
        <span className="text-foreground truncate max-w-[200px]">
          {book.title}
        </span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {genreLabels.map((label, i) => (
            <Link
              key={book.genres[i]}
              href={`/genero/${book.genres[i]}`}
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors"
            >
              {label}
            </Link>
          ))}
          {book.escpilar && (
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700">
              Lectura escolar
            </span>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-[220px_minmax(0,1fr)] items-start">
          <div className="mx-auto md:mx-0 w-full max-w-[220px]">
            <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-border bg-stone-100 shadow-sm">
              {book.coverImageUrl ? (
                <img
                  src={book.coverImageUrl}
                  alt={`Portada de ${book.title}`}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-sm text-muted">
                  Portada no disponible
                </div>
              )}
            </div>
          </div>

          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">
              {book.title}
            </h1>
            <p className="mt-2 text-lg text-muted">
              <Link
                href={`/autor/${book.authorSlug}`}
                className="hover:text-accent transition-colors"
              >
                {book.authorName}
              </Link>
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-card border border-border rounded-lg p-4">
                <span className="text-xs text-muted block mb-1">Autor</span>
                <span className="text-sm font-medium text-foreground">{book.authorName}</span>
              </div>
              {book.year && (
                <div className="bg-card border border-border rounded-lg p-4">
                  <span className="text-xs text-muted block mb-1">Año</span>
                  <span className="text-sm font-medium text-foreground">{book.year}</span>
                </div>
              )}
              {book.publisher && (
                <div className="bg-card border border-border rounded-lg p-4">
                  <span className="text-xs text-muted block mb-1">Editorial</span>
                  <span className="text-sm font-medium text-foreground">{book.publisher}</span>
                </div>
              )}
              {book.externalGenreLabel && (
                <div className="bg-card border border-border rounded-lg p-4">
                  <span className="text-xs text-muted block mb-1">Género</span>
                  <span className="text-sm font-medium text-foreground">{book.externalGenreLabel}</span>
                </div>
              )}
              {book.pages && (
                <div className="bg-card border border-border rounded-lg p-4">
                  <span className="text-xs text-muted block mb-1">Páginas</span>
                  <span className="text-sm font-medium text-foreground">{book.pages}</span>
                </div>
              )}
              {book.isbn && (
                <div className="bg-card border border-border rounded-lg p-4">
                  <span className="text-xs text-muted block mb-1">ISBN</span>
                  <span className="text-sm font-medium text-foreground break-all">{book.isbn}</span>
                </div>
              )}
              {book.isbnDigital && (
                <div className="bg-card border border-border rounded-lg p-4">
                  <span className="text-xs text-muted block mb-1">ISBN digital</span>
                  <span className="text-sm font-medium text-foreground break-all">{book.isbnDigital}</span>
                </div>
              )}
            </div>

            {(book.amazonUrl || book.amazonEbookUrl) && (
              <div className="mt-5 flex flex-wrap gap-3">
                {book.amazonUrl && (
                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90 transition-opacity"
                  >
                    Ver libro
                  </a>
                )}
                {book.amazonEbookUrl && (
                  <a
                    href={book.amazonEbookUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-stone-50 transition-colors"
                  >
                    Ver ebook
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Quick info */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="bg-card border border-border rounded-lg p-4">
          <span className="text-xs text-muted block mb-1">Tipo</span>
          <span className="text-sm font-medium text-foreground">
            {book.type === "ficcion" ? "Ficción" : "No ficción"}
          </span>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <span className="text-xs text-muted block mb-1">Para quién</span>
          <span className="text-sm font-medium text-foreground capitalize">
            {book.audience === "todos" ? "Todos los públicos" : book.audience}
          </span>
        </div>
        {book.pages && (
          <div className="bg-card border border-border rounded-lg p-4">
            <span className="text-xs text-muted block mb-1">Extensión</span>
            <span className="text-sm font-medium text-foreground">
              {book.pages < 100
                ? "Breve"
                : book.pages < 250
                  ? "Media"
                  : book.pages < 400
                    ? "Larga"
                    : "Muy larga"}
            </span>
          </div>
        )}
        {book.tone && (
          <div className="bg-card border border-border rounded-lg p-4">
            <span className="text-xs text-muted block mb-1">Tono</span>
            <span className="text-sm font-medium text-foreground">
              {book.tone}
            </span>
          </div>
        )}
      </div>

      {/* Resumen */}
      <section className="mb-10">
        <h2 className="font-serif text-xl font-bold text-foreground mb-3">
          Resumen
        </h2>
        <p className="text-stone-700 leading-relaxed text-[17px]">
          {book.summary}
        </p>
      </section>

      {book.editorialIntro && (
        <section className="mb-10 bg-stone-50 border border-border rounded-lg p-6">
          <h2 className="font-serif text-xl font-bold text-foreground mb-3">
            Qué conviene saber antes de leer este resumen
          </h2>
          <p className="text-stone-700 leading-relaxed">{book.editorialIntro}</p>
        </section>
      )}

      {/* Sobre este libro */}
      <section className="mb-10 bg-card border border-border rounded-lg p-6">
        <h2 className="font-serif text-xl font-bold text-foreground mb-3">
          Sobre este libro
        </h2>
        <p className="text-stone-700 leading-relaxed">{book.aboutThisBook}</p>
      </section>

      {/* Characters (fiction) */}
      {book.characters && book.characters.length > 0 && (
        <section className="mb-10">
          <h2 className="font-serif text-xl font-bold text-foreground mb-4">
            Personajes principales
          </h2>
          <div className="space-y-3">
            {book.characters.map((char) => (
              <div
                key={char.name}
                className="bg-card border border-border rounded-lg p-4"
              >
                <span className="font-medium text-foreground">
                  {char.name}
                </span>
                <p className="text-sm text-stone-600 mt-1">
                  {char.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Central conflict */}
      {book.centralConflict && (
        <section className="mb-10">
          <h2 className="font-serif text-xl font-bold text-foreground mb-3">
            Conflicto central
          </h2>
          <p className="text-stone-700 leading-relaxed italic border-l-4 border-accent/30 pl-4">
            {book.centralConflict}
          </p>
        </section>
      )}

      {/* Key ideas (non-fiction) */}
      {book.keyIdeas && book.keyIdeas.length > 0 && (
        <section className="mb-10">
          <h2 className="font-serif text-xl font-bold text-foreground mb-4">
            Ideas clave
          </h2>
          <ul className="space-y-2">
            {book.keyIdeas.map((idea, i) => (
              <li
                key={i}
                className="flex gap-3 text-stone-700 leading-relaxed"
              >
                <span className="text-accent font-bold mt-0.5 shrink-0">
                  {i + 1}.
                </span>
                {idea}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Themes */}
      <section className="mb-10">
        <h2 className="font-serif text-xl font-bold text-foreground mb-3">
          Temas
        </h2>
        <div className="flex flex-wrap gap-2">
          {book.themes.map((theme) => (
            <span
              key={theme}
              className="text-sm px-3 py-1.5 rounded-full bg-stone-100 text-stone-700"
            >
              {theme}
            </span>
          ))}
        </div>
      </section>

      {/* Why it matters */}
      <section className="mb-10 bg-amber-50 border border-amber-200 rounded-lg p-6">
        <h2 className="font-serif text-xl font-bold text-amber-900 mb-3">
          Por qué importa este libro
        </h2>
        <p className="text-amber-800 leading-relaxed">{book.whyItMatters}</p>
      </section>

      {book.chapterSummaries && book.chapterSummaries.length > 0 && (
        <section className="mb-10">
          <h2 className="font-serif text-xl font-bold text-foreground mb-4">
            Resumen por capítulos o partes
          </h2>
          <div className="space-y-4">
            {book.chapterSummaries.map((chapter) => (
              <div key={chapter.title} className="bg-card border border-border rounded-lg p-5">
                <h3 className="font-medium text-foreground mb-2">{chapter.title}</h3>
                <p className="text-stone-700 leading-relaxed text-sm">{chapter.summary}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {book.analysisSections && book.analysisSections.length > 0 && (
        <section className="mb-10">
          <h2 className="font-serif text-xl font-bold text-foreground mb-4">
            Análisis
          </h2>
          <div className="space-y-5">
            {book.analysisSections.map((section) => (
              <div key={section.heading} className="bg-stone-50 border border-border rounded-lg p-5">
                <h3 className="font-medium text-foreground mb-2">{section.heading}</h3>
                <p className="text-stone-700 leading-relaxed text-sm">{section.content}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* For whom */}
      <section className="mb-10">
        <h2 className="font-serif text-xl font-bold text-foreground mb-3">
          Para quién es
        </h2>
        <p className="text-stone-700 leading-relaxed">{book.forWhom}</p>
      </section>

      {(book.readingLevel || book.whyReadToday || (book.studyNotes && book.studyNotes.length > 0)) && (
        <section className="mb-10 bg-card border border-border rounded-lg p-6">
          <h2 className="font-serif text-xl font-bold text-foreground mb-4">
            Claves para estudiar o situar el libro
          </h2>
          <div className="space-y-4">
            {book.readingLevel && (
              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">Nivel de lectura</h3>
                <p className="text-sm text-stone-700 leading-relaxed">{book.readingLevel}</p>
              </div>
            )}
            {book.whyReadToday && (
              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">Por qué leerlo hoy</h3>
                <p className="text-sm text-stone-700 leading-relaxed">{book.whyReadToday}</p>
              </div>
            )}
            {book.studyNotes && book.studyNotes.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">Pistas rápidas para clase o repaso</h3>
                <ul className="space-y-2">
                  {book.studyNotes.map((note) => (
                    <li key={note} className="text-sm text-stone-700 leading-relaxed flex gap-2">
                      <span className="text-accent">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {book.faqs && book.faqs.length > 0 && (
        <section className="mb-10">
          <h2 className="font-serif text-xl font-bold text-foreground mb-4">
            Preguntas frecuentes
          </h2>
          <div className="space-y-4">
            {book.faqs.map((faq) => (
              <div key={faq.question} className="bg-card border border-border rounded-lg p-5">
                <h3 className="font-medium text-foreground mb-2">{faq.question}</h3>
                <p className="text-sm text-stone-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {book.reviewedAt && (
        <section className="mb-10 bg-stone-50 border border-border rounded-lg p-6">
          <p className="text-xs text-muted">Revisado editorialmente: {book.reviewedAt}</p>
        </section>
      )}

      {/* Related books */}
      {related.length > 0 && (
        <section className="mb-10">
          <h2 className="font-serif text-xl font-bold text-foreground mb-4">
            Libros parecidos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {related.map((b) => (
              <BookCard key={b.slug} book={b} />
            ))}
          </div>
        </section>
      )}

      {/* More by author */}
      {moreByAuthor.length > 0 && (
        <section className="mb-10">
          <h2 className="font-serif text-xl font-bold text-foreground mb-4">
            Más de {book.authorName}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {moreByAuthor.map((b) => (
              <BookCard key={b.slug} book={b} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
