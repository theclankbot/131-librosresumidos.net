import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Qué es Libros Resumidos, por qué existe y qué puedes esperar de esta biblioteca editorial de resúmenes en español.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
      <nav className="text-sm text-muted mb-6 flex items-center gap-1.5">
        <Link href="/" className="hover:text-foreground transition-colors">
          Inicio
        </Link>
        <span>/</span>
        <span className="text-foreground">Sobre nosotros</span>
      </nav>

      <h1 className="font-serif text-3xl font-bold text-foreground mb-6">
        Sobre Libros Resumidos
      </h1>

      <div className="prose prose-stone max-w-none space-y-5 text-stone-700 leading-relaxed">
        <p className="text-lg">
          Libros Resumidos es una biblioteca editorial de resúmenes de libros en
          español. Nuestro objetivo es ayudarte a entender rápido de qué trata
          un libro, sus temas, personajes y para quién es.
        </p>

        <h2 className="font-serif text-xl font-bold text-foreground mt-8">
          Para qué sirve
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Entender de qué va un libro antes de leerlo</li>
          <li>Preparar una lectura escolar o universitaria</li>
          <li>Refrescar un libro que leíste hace tiempo</li>
          <li>Descubrir libros parecidos al que te gustó</li>
          <li>Decidir si merece la pena leerlo completo</li>
        </ul>

        <h2 className="font-serif text-xl font-bold text-foreground mt-8">
          Qué no es
        </h2>
        <p>
          Un resumen no sustituye la lectura completa de un libro. Si buscas la
          experiencia literaria completa, siempre recomendamos leer la obra
          original. Nuestros resúmenes son una herramienta de orientación,
          estudio y descubrimiento.
        </p>

        <h2 className="font-serif text-xl font-bold text-foreground mt-8">
          Nuestro enfoque
        </h2>
        <p>
          Cada ficha de libro está pensada para ser realmente útil. No hacemos
          resúmenes genéricos copiados de una plantilla. Cada obra se trata con
          el contexto, la información y el nivel de detalle que merece.
        </p>
        <p>
          Incluimos resumen, contexto del libro, personajes principales (si
          aplica), temas clave, para qué tipo de lector encaja, y libros
          parecidos que podrían interesarte.
        </p>
      </div>
    </div>
  );
}
