import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Metodología",
  description:
    "Cómo elaboramos los resúmenes de Libros Resumidos: enfoque editorial, fuentes y límites.",
};

export default function MethodologyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
      <nav className="text-sm text-muted mb-6 flex items-center gap-1.5">
        <Link href="/" className="hover:text-foreground transition-colors">
          Inicio
        </Link>
        <span>/</span>
        <span className="text-foreground">Metodología</span>
      </nav>

      <h1 className="font-serif text-3xl font-bold text-foreground mb-6">
        Cómo elaboramos los resúmenes
      </h1>

      <div className="space-y-6 text-stone-700 leading-relaxed">
        <section>
          <h2 className="font-serif text-xl font-bold text-foreground mb-3">
            Enfoque editorial
          </h2>
          <p>
            Cada resumen se elabora con el objetivo de ser genuinamente útil.
            No seguimos una plantilla rígida que se repite igual en todos los
            libros. Adaptamos la estructura al tipo de obra: ficción, no
            ficción, teatro, narrativa juvenil, etc.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold text-foreground mb-3">
            Qué incluimos
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Resumen:</strong> una síntesis clara de la obra, sin
              enrollarse ni omitir lo esencial.
            </li>
            <li>
              <strong>Contexto:</strong> por qué importa este libro, cuándo se
              publicó, qué posición ocupa.
            </li>
            <li>
              <strong>Personajes</strong> (ficción): los principales, con una
              descripción que ayude a identificarlos.
            </li>
            <li>
              <strong>Ideas clave</strong> (no ficción): las enseñanzas o
              conceptos fundamentales del libro.
            </li>
            <li>
              <strong>Temas:</strong> los ejes temáticos del libro.
            </li>
            <li>
              <strong>Para quién es:</strong> a qué tipo de lector le puede
              servir.
            </li>
            <li>
              <strong>Libros parecidos:</strong> recomendaciones de obras
              relacionadas.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold text-foreground mb-3">
            Fuentes
          </h2>
          <p>
            Los resúmenes se basan en la lectura y análisis de las obras
            originales, complementados con material crítico y editorial
            publicado. Cuando existe consenso académico sobre una obra, lo
            reflejamos. Cuando no, presentamos la información de forma
            equilibrada.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold text-foreground mb-3">
            Límites
          </h2>
          <p>
            Un resumen es una herramienta de orientación. No sustituye la
            lectura completa de la obra cuando lo que buscas es la experiencia
            literaria o un conocimiento profundo del texto. Si un libro te
            interesa de verdad, léelo.
          </p>
        </section>
      </div>
    </div>
  );
}
