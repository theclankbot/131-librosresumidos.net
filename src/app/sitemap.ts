import { MetadataRoute } from "next";
import { getAllAuthors, getAllBooks, getAllGenres } from "@/lib/data";

const BASE_URL = "https://librosresumidos.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const books = getAllBooks();
  const authors = getAllAuthors();
  const genres = getAllGenres();

  return [
    { url: `${BASE_URL}/`, changeFrequency: "daily", priority: 1 },
    { url: `${BASE_URL}/autores`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/generos`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/buscar`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/metodologia`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE_URL}/sobre-nosotros`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE_URL}/contacto`, changeFrequency: "monthly", priority: 0.3 },
    ...books.map((book) => ({
      url: `${BASE_URL}/${book.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...authors.map((author) => ({
      url: `${BASE_URL}/autor/${author.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...genres.map((genre) => ({
      url: `${BASE_URL}/genero/${genre.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];
}
