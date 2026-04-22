import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos de uso",
  description: "Términos y condiciones de uso de Libros Resumidos.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
      <nav className="text-sm text-muted mb-6 flex items-center gap-1.5">
        <Link href="/" className="hover:text-foreground transition-colors">
          Inicio
        </Link>
        <span>/</span>
        <span className="text-foreground">Términos de uso</span>
      </nav>

      <h1 className="font-serif text-3xl font-bold text-foreground mb-6">
        Términos de uso
      </h1>

      <div className="space-y-5 text-stone-700 leading-relaxed text-sm">
        <p>Última actualización: abril de 2026</p>

        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-2">
            Uso de la web
          </h2>
          <p>
            Libros Resumidos es un servicio gratuito de consulta. Los
            contenidos están disponibles para uso personal y educativo. No está
            permitida la reproducción masiva o automatizada de los contenidos
            sin autorización.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-2">
            Naturaleza de los contenidos
          </h2>
          <p>
            Los resúmenes publicados en esta web son trabajos editoriales
            originales de síntesis y análisis. No reproducen el texto original
            de las obras resumidas. Son herramientas de orientación y estudio
            que no sustituyen la lectura completa.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-2">
            Propiedad intelectual
          </h2>
          <p>
            Los textos, diseño y estructura de librosresumidos.net son
            propiedad de sus titulares. Las marcas, títulos y nombres de
            autores mencionados pertenecen a sus respectivos propietarios.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-2">
            Limitación de responsabilidad
          </h2>
          <p>
            Los resúmenes se ofrecen como referencia y sin garantía de
            exhaustividad. El usuario es responsable de contrastar la
            información con las fuentes originales cuando lo considere
            necesario.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-2">
            Contacto
          </h2>
          <p>
            Para cualquier cuestión relacionada con estos términos, puedes
            escribirnos a{" "}
            <a
              href="mailto:contacto@librosresumidos.net"
              className="text-accent hover:underline"
            >
              contacto@librosresumidos.net
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
