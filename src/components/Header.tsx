import Link from "next/link";

const navLinks = [
  { href: "/genero/juvenil", label: "Escolar / Juvenil" },
  { href: "/genero/clasicos", label: "Clásicos" },
  { href: "/genero/narrativa", label: "Narrativa" },
  { href: "/genero/desarrollo-personal", label: "No ficción" },
  { href: "/autores", label: "Autores" },
  { href: "/buscar", label: "Buscar" },
];

export default function Header() {
  return (
    <header className="border-b border-border bg-card sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-foreground font-serif">
              Libros Resumidos
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-muted hover:text-foreground transition-colors rounded-md hover:bg-stone-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/buscar"
            className="md:hidden p-2 text-muted hover:text-foreground"
            aria-label="Buscar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </Link>
        </div>

        {/* Mobile nav */}
        <nav className="md:hidden flex items-center gap-1 pb-3 overflow-x-auto scrollbar-hide">
          {navLinks.slice(0, -1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs text-muted hover:text-foreground whitespace-nowrap rounded-full border border-border hover:border-stone-300 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
