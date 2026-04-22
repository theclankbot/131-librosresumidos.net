import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta con el equipo de Libros Resumidos.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
      <nav className="text-sm text-muted mb-6 flex items-center gap-1.5">
        <Link href="/" className="hover:text-foreground transition-colors">
          Inicio
        </Link>
        <span>/</span>
        <span className="text-foreground">Contacto</span>
      </nav>

      <h1 className="font-serif text-3xl font-bold text-foreground mb-6">
        Contacto
      </h1>

      <div className="space-y-4 text-stone-700 leading-relaxed">
        <p>
          Si tienes alguna pregunta, sugerencia o quieres reportar un error en
          algún resumen, puedes escribirnos a:
        </p>

        <p className="bg-card border border-border rounded-lg p-5 text-center">
          <a
            href="mailto:contacto@librosresumidos.net"
            className="text-accent font-medium hover:underline text-lg"
          >
            contacto@librosresumidos.net
          </a>
        </p>

        <p>Intentamos responder en un plazo de 48 horas.</p>

        <h2 className="font-serif text-xl font-bold text-foreground mt-8 mb-3">
          Sugerencias de libros
        </h2>
        <p>
          Si hay un libro que te gustaría ver resumido en la web, escríbenos
          con el título y el autor. Priorizamos las sugerencias de los lectores
          para decidir qué obras incorporar.
        </p>
      </div>
    </div>
  );
}
