import { Suspense } from "react";
import SearchContent from "./SearchContent";

export const metadata = {
  title: "Buscar libros",
  description:
    "Busca resúmenes de libros por título, autor, tema o género en Libros Resumidos.",
};

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">Cargando...</div>}>
      <SearchContent />
    </Suspense>
  );
}
