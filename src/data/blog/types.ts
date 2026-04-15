export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML string
  date: string; // ISO date
  author: string;
  tags: string[];
  readingTime: number; // minutes
}
