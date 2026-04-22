import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif font-bold text-foreground mb-3">
              Explorar
            </h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/genero/juvenil" className="hover:text-foreground transition-colors">
                  Juvenil / Escolar
                </Link>
              </li>
              <li>
                <Link href="/genero/clasicos" className="hover:text-foreground transition-colors">
                  Clásicos
                </Link>
              </li>
              <li>
                <Link href="/genero/narrativa" className="hover:text-foreground transition-colors">
                  Narrativa
                </Link>
              </li>
              <li>
                <Link href="/genero/desarrollo-personal" className="hover:text-foreground transition-colors">
                  Desarrollo personal
                </Link>
              </li>
              <li>
                <Link href="/genero/teatro" className="hover:text-foreground transition-colors">
                  Teatro
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-bold text-foreground mb-3">
              Descubrir
            </h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/autores" className="hover:text-foreground transition-colors">
                  Autores
                </Link>
              </li>
              <li>
                <Link href="/generos" className="hover:text-foreground transition-colors">
                  Géneros
                </Link>
              </li>
              <li>
                <Link href="/buscar" className="hover:text-foreground transition-colors">
                  Buscar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-bold text-foreground mb-3">
              Información
            </h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/sobre-nosotros" className="hover:text-foreground transition-colors">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="/metodologia" className="hover:text-foreground transition-colors">
                  Metodología
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-foreground transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-bold text-foreground mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/privacidad" className="hover:text-foreground transition-colors">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="hover:text-foreground transition-colors">
                  Términos de uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted">
          <p>
            Libros Resumidos es una biblioteca editorial de resúmenes en
            español. Los resúmenes no sustituyen la lectura completa de las
            obras.
          </p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} librosresumidos.net
          </p>
        </div>
      </div>
    </footer>
  );
}
