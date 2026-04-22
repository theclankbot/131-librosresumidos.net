import { Book } from "@/data/types";
import BookCard from "./BookCard";

export default function BookGrid({
  books,
  columns = 3,
}: {
  books: Book[];
  columns?: 2 | 3;
}) {
  const gridClass =
    columns === 2
      ? "grid grid-cols-1 md:grid-cols-2 gap-5"
      : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5";

  return (
    <div className={gridClass}>
      {books.map((book) => (
        <BookCard key={book.slug} book={book} />
      ))}
    </div>
  );
}
