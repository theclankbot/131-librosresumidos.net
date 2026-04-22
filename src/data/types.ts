export type BookType = "ficcion" | "no-ficcion";

export type Genre =
  | "juvenil"
  | "clasicos"
  | "narrativa"
  | "desarrollo-personal"
  | "novela-historica"
  | "fantasia"
  | "thriller"
  | "infantil"
  | "teatro"
  | "ciencia-ficcion"
  | "poesia"
  | "ensayo"
  | "aventura"
  | "romance";

export type AudienceLevel = "infantil" | "juvenil" | "adulto" | "todos";

export interface Character {
  name: string;
  description: string;
}

export interface ChapterSummary {
  title: string;
  summary: string;
}

export interface AnalysisSection {
  heading: string;
  content: string;
}

export interface BookFaq {
  question: string;
  answer: string;
}

export interface BookSource {
  label: string;
  url: string;
}

export interface Book {
  slug: string;
  title: string;
  authorSlug: string;
  authorName: string;
  type: BookType;
  genres: Genre[];
  audience: AudienceLevel;
  year?: number;
  pages?: number;
  summary: string;
  aboutThisBook: string;
  characters?: Character[];
  centralConflict?: string;
  themes: string[];
  tone?: string;
  keyIdeas?: string[];
  forWhom: string;
  whyItMatters: string;
  relatedSlugs: string[];
  escpilar?: boolean; // es lectura escolar
  editorialIntro?: string;
  chapterSummaries?: ChapterSummary[];
  analysisSections?: AnalysisSection[];
  faqs?: BookFaq[];
  studyNotes?: string[];
  readingLevel?: string;
  whyReadToday?: string;
  sources?: BookSource[];
  reviewedAt?: string;
}

export interface Author {
  slug: string;
  name: string;
  bio: string;
  style: string;
  forWhom: string;
  recurringThemes: string[];
  bookSlugs: string[];
}

export interface GenreInfo {
  slug: Genre;
  name: string;
  description: string;
  icon: string;
}
