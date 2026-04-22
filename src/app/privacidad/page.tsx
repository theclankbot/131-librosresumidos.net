import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Política de privacidad de Libros Resumidos.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
      <nav className="text-sm text-muted mb-6 flex items-center gap-1.5">
        <Link href="/" className="hover:text-foreground transition-colors">
          Inicio
        </Link>
        <span>/</span>
        <span className="text-foreground">Privacidad</span>
      </nav>

      <h1 className="font-serif text-3xl font-bold text-foreground mb-6">
        Política de privacidad
      </h1>

      <div className="space-y-5 text-stone-700 leading-relaxed text-sm">
        <p>Última actualización: abril de 2026</p>

        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-2">
            Responsable
          </h2>
          <p>
            El responsable de esta web es el titular de librosresumidos.net.
            Puedes contactarnos en{" "}
            <a
              href="mailto:contacto@librosresumidos.net"
              className="text-accent hover:underline"
            >
              contacto@librosresumidos.net
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-2">
            Datos que recopilamos
          </h2>
          <p>
            Esta web no requiere registro ni recopila datos personales de los
            usuarios. No utilizamos cookies de seguimiento propias. Si en el
            futuro incorporamos herramientas de analítica, lo indicaremos
            expresamente aquí.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-2">
            Servicios de terceros
          </h2>
          <p>
            La web está alojada en Vercel. Vercel puede procesar datos
            técnicos de conexión (dirección IP, tipo de navegador) según su
            propia política de privacidad.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-bold text-foreground mb-2">
            Tus derechos
          </h2>
          <p>
            Puedes ejercer tus derechos de acceso, rectificación, supresión y
            oposición escribiéndonos a{" "}
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
