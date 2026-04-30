// WP35 — JSON-LD Article emitter (DEC-OP-010, REQ-F-035-007).
//
// Emette `<script type="application/ld+json">` con schema.org Article +
// Organization (author/publisher). NESSUN dato personale (REQ-NF-035-011):
// author = Organization "LoL Sensei", non founder.
//
// Riferimento: dev-repository/wp-35/design/component-design.md §1.8.

import type { JSX } from 'solid-js';
import { BASE_URL, ORG } from '../../lib/jsonld-data';

export interface JsonLdArticleProps {
  /** Page <h1>. */
  headline: string;
  /** Meta description / OG description (frontmatter `description`). */
  description: string;
  /** Frontmatter `last_updated` ISO date YYYY-MM-DD. */
  datePublished: string;
  /** Mirror di datePublished MVP (no revisioni multiple). */
  dateModified: string;
  /** Canonical URL (output di `getChampionCanonical`). */
  url: string;
  /** "en" | "it" — frontmatter language. */
  inLanguage: 'en' | 'it';
  /** Optional override for unique article image (1200px+ wide preferred). */
  image?: string;
  /** Optional keywords array (champion, role, archetype). */
  keywords?: string[];
  /** Optional article section (e.g., "Champion Guide", "Mid Lane"). */
  articleSection?: string;
}

export function JsonLdArticle(props: JsonLdArticleProps): JSX.Element {
  const data = () => {
    const base: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${props.url}#article`,
      headline: props.headline,
      description: props.description,
      datePublished: props.datePublished,
      dateModified: props.dateModified,
      inLanguage: props.inLanguage,
      url: props.url,
      mainEntityOfPage: { '@type': 'WebPage', '@id': props.url },
      author: { '@id': ORG['@id'] },
      publisher: { '@id': ORG['@id'] },
      image: props.image ?? `${BASE_URL}/og/default.png`,
    };
    if (props.keywords && props.keywords.length > 0) base.keywords = props.keywords.join(', ');
    if (props.articleSection) base.articleSection = props.articleSection;
    return base;
  };

  return (
    <script
      type="application/ld+json"
      innerHTML={JSON.stringify(data())}
    />
  );
}

export default JsonLdArticle;
