/**
 * Single source of truth JSON-LD schema.org entities (WP19).
 * Consumers: scripts/generate-jsonld.mjs (build-time) + src/components/JsonLd.tsx (runtime).
 * Data-model ref: dev-repository/design/data-model-wp19.md §1-§3.
 */

import type { FAQItem } from '../data/types';
import type { BlogPost } from '../data/blog/types';

export const BASE_URL = 'https://www.lolsensei.com';

export interface ImageObjectRef {
  '@type': 'ImageObject';
  url: string;
  width: number;
  height: number;
}

export interface IdRef {
  '@id': string;
}

export interface OrganizationData {
  '@context'?: 'https://schema.org';
  '@type': 'Organization';
  '@id': string;
  name: string;
  url: string;
  logo: ImageObjectRef;
  sameAs: string[];
  description: string;
}

export interface WebSiteData {
  '@context'?: 'https://schema.org';
  '@type': 'WebSite';
  '@id': string;
  name: string;
  url: string;
  inLanguage: string[];
  publisher: IdRef;
  description: string;
}

export interface OfferRef {
  '@type': 'Offer';
  name: string;
  price: string;
  priceCurrency: string;
  availability: 'https://schema.org/InStock' | 'https://schema.org/PreOrder';
}

export interface SoftwareApplicationData {
  '@context'?: 'https://schema.org';
  '@type': 'SoftwareApplication';
  '@id': string;
  name: string;
  applicationCategory: 'GameApplication';
  applicationSubCategory: 'League of Legends Coaching Assistant';
  operatingSystem: string;
  screenshot: string[];
  description: string;
  url: string;
  downloadUrl: string;
  image: string;
  publisher: IdRef;
  offers: OfferRef[];
}

export interface FAQQuestion {
  '@type': 'Question';
  name: string;
  acceptedAnswer: { '@type': 'Answer'; text: string };
}

export interface FAQPageData {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  '@id': string;
  mainEntity: FAQQuestion[];
}

export interface HowToStep {
  '@type': 'HowToStep';
  name: string;
  text: string;
  position: number;
}

export interface HowToData {
  '@context': 'https://schema.org';
  '@type': 'HowTo';
  '@id': string;
  name: string;
  description: string;
  step: HowToStep[];
}

export interface BlogPostingData {
  '@context': 'https://schema.org';
  '@type': 'BlogPosting';
  '@id': string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  image: string;
  author: IdRef;
  publisher: IdRef;
  mainEntityOfPage: { '@type': 'WebPage'; '@id': string };
  wordCount: number;
  articleSection: string[];
  inLanguage: string;
}

export const ORG: OrganizationData = {
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'LoL Sensei',
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/images/logo-512.webp`,
    width: 512,
    height: 512,
  },
  sameAs: [],
  description: 'AI coaching application for League of Legends that helps players learn the game through real-time guidance.',
};

export const SITE: WebSiteData = {
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: 'LoL Sensei',
  url: BASE_URL,
  inLanguage: ['en', 'it', 'es', 'fr', 'de', 'pt-BR', 'ko', 'zh-Hans'],
  publisher: { '@id': ORG['@id'] },
  description: 'AI coaching for League of Legends.',
};

export const SOFTWARE: SoftwareApplicationData = {
  '@type': 'SoftwareApplication',
  '@id': `${BASE_URL}/#software`,
  name: 'LoL Sensei',
  applicationCategory: 'GameApplication',
  applicationSubCategory: 'League of Legends Coaching Assistant',
  operatingSystem: 'Windows 10, Windows 11',
  screenshot: [],
  description: 'Real-time AI coaching for League of Legends. Learn champion select, builds, and game strategy.',
  url: BASE_URL,
  downloadUrl: `${BASE_URL}/downloads/LoLSensei-Setup.exe`,
  image: `${BASE_URL}/og-image.png`,
  publisher: { '@id': ORG['@id'] },
  offers: [
    {
      '@type': 'Offer',
      name: 'Free',
      price: '0',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
    {
      '@type': 'Offer',
      name: 'Ad-Free',
      price: '2.99',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
    {
      '@type': 'Offer',
      name: 'Pro',
      price: '7.99',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/PreOrder',
    },
  ],
};

// ----- Builders -----

/**
 * Build FAQPage schema resolving i18n keys via `t`. REQ-F-019-002.
 */
export function buildFAQPage(
  items: FAQItem[],
  t: (key: string) => string,
): FAQPageData {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${BASE_URL}/#faqpage`,
    mainEntity: items.map<FAQQuestion>((item) => ({
      '@type': 'Question',
      name: t(item.questionKey),
      acceptedAnswer: {
        '@type': 'Answer',
        text: t(item.answerKey),
      },
    })),
  };
}

/**
 * Build HowTo schema from BlogPost.howToSteps (explicit array, no HTML parsing). REQ-F-019-003.
 * Returns empty step[] if howToSteps missing; caller should skip render via no-op pattern.
 */
export function buildHowTo(post: BlogPost, locale: string): HowToData {
  const steps = post.howToSteps ?? [];
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${BASE_URL}/${locale}/blog/${post.slug}#howto`,
    name: post.title,
    description: post.excerpt,
    step: steps.map<HowToStep>((s, idx) => ({
      '@type': 'HowToStep',
      name: s.name,
      text: s.text,
      position: idx + 1,
    })),
  };
}

function countWords(html: string): number {
  return html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
}

/**
 * Build BlogPosting schema. author + publisher both point to Organization (no personal data).
 * REQ-F-019-005 (dateModified mandatory, fallback to datePublished).
 */
export function buildBlogPosting(post: BlogPost, locale: string): BlogPostingData {
  const urlPath = `${BASE_URL}/${locale}/blog/${post.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${urlPath}#blogposting`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.dateModified ?? post.date,
    image: post.image ?? `${BASE_URL}/og-image.png`,
    author: { '@id': ORG['@id'] },
    publisher: { '@id': ORG['@id'] },
    mainEntityOfPage: { '@type': 'WebPage', '@id': urlPath },
    wordCount: countWords(post.content),
    articleSection: post.tags.length > 0 ? post.tags : ['Coaching'],
    inLanguage: locale,
  };
}
