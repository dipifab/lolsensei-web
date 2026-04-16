export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML string
  date: string; // ISO date
  dateModified?: string; // ISO date, defaults to date if not set
  author: string;
  tags: string[];
  readingTime: number; // minutes
  image?: string; // Featured image URL
}
