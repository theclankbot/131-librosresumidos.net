import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-24 text-center">
      <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
        Página no encontrada
      </h1>
      <p className="text-muted text-lg mb-8">
        No hemos encontrado lo que buscas. Puede que la página se haya movido o
        que la dirección no sea correcta.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/"
          className="px-5 py-2.5 bg-accent text-white rounded-lg hover:bg-amber-800 transition-colors text-sm font-medium"
        >
          Ir al inicio
        </Link>
        <Link
          href="/buscar"
          className="px-5 py-2.5 border border-border rounded-lg hover:bg-stone-100 transition-colors text-sm font-medium"
        >
          Buscar un libro
        </Link>
      </div>
    </div>
  );
}
