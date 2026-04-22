import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Libros Resumidos — Resúmenes de libros en español",
    template: "%s | Libros Resumidos",
  },
  description:
    "Biblioteca editorial de resúmenes de libros en español. Entiende rápido de qué va un libro, sus temas, personajes y para quién es. Útil para estudiantes, lectores y curiosos.",
  metadataBase: new URL("https://librosresumidos.net"),
  openGraph: {
    siteName: "Libros Resumidos",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
