export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  /**
   * HTML content. MUST be sanitized with DOMPurify before rendering via innerHTML.
   * @security Rendering without sanitization is a stored XSS vulnerability.
   */
  content: string;
  date: string; // ISO date
  dateModified?: string; // ISO date, defaults to date if not set
  author: string;
  tags: string[];
  readingTime: number; // minutes
  image?: string; // Featured image URL
}
