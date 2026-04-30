export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  /**
   * Static HTML content authored in src/data/blog/*.ts. Rendered via innerHTML.
   * @security Source is internal-only and reviewed via PR; if you ever wire this
   * to external/user input, re-introduce build-time sanitization (see
   * scripts/compile-content.mjs rehype-sanitize pattern used for champion guides).
   */
  content: string;
  date: string; // ISO date
  /**
   * ISO date. REQUIRED for WP19 6 target posts (REQ-F-019-005).
   * Defaults to `date` for legacy/non-target posts.
   */
  dateModified?: string;
  /** WP19 target posts: 'Fabrizio Di Pietro'. JSON-LD builder maps to Person @id, ignoring string value. */
  author: string;
  tags: string[];
  readingTime: number; // minutes
  image?: string; // Featured image URL
  /** Short inline bio (1-2 lines) rendered in AuthorBio box. WP19: EN+IT only (REQ-F-019-001). */
  authorBio?: string;
  /** HowTo steps for slugs how-to-climb-ranked-lol + how-to-stop-tilting-lol (REQ-F-019-003). */
  howToSteps?: Array<{ name: string; text: string }>;
}
