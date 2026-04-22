"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox({
  size = "default",
  placeholder = "Buscar libro, autor o tema...",
}: {
  size?: "default" | "large";
  placeholder?: string;
}) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/buscar?q=${encodeURIComponent(query.trim())}`);
    }
  }

  const inputClass =
    size === "large"
      ? "w-full pl-12 pr-4 py-4 text-lg rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
      : "w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all";

  const iconClass = size === "large" ? "left-4 top-4.5" : "left-3 top-2.5";

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size === "large" ? 22 : 18}
        height={size === "large" ? 22 : 18}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`absolute ${iconClass} text-muted pointer-events-none`}
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className={inputClass}
      />
    </form>
  );
}
