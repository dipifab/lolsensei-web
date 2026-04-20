import { query } from '@solidjs/router';
import type { Locale, BlogLocale } from '../i18n/locales';
import { getBlogPost as loadBlogPost, getBlogPosts } from '../../data/blog';
import type { BlogPost } from '../../data/blog/types';
import { FAQ_CATEGORIES, FAQ_ITEMS } from '../../data/faq';
import type { FAQItem } from '../../data/types';

/**
 * SolidStart query() helpers for SSG/prerender data loaders (WP18 T14).
 *
 * Rationale for adaptations vs original task template:
 * - `src/data/blog/index.ts` already exposes `getBlogPosts(lang)` +
 *   `getBlogPost(lang, slug)`; helpers wrap those instead of re-doing dynamic
 *   imports per slug.
 * - `src/data/faq.ts` is a single flat module keyed by i18n message keys
 *   (questionKey / answerKey). Per-locale copy lives in the i18n dictionary,
 *   so `getFaqEntries(lang)` returns the canonical items+categories tuple.
 *   The `lang` parameter is retained for API symmetry and future per-locale
 *   overrides (currently ignored by data, resolved client-side via i18n).
 */

export const getBlogIndex = query(async (lang: BlogLocale): Promise<BlogPost[]> => {
  'use server';
  return getBlogPosts(lang);
}, 'blog-index');

export const getBlogPost = query(
  async (lang: BlogLocale, slug: string): Promise<BlogPost | undefined> => {
    'use server';
    return loadBlogPost(lang, slug);
  },
  'blog-post',
);

export interface FaqEntries {
  categories: typeof FAQ_CATEGORIES;
  items: FAQItem[];
}

export const getFaqEntries = query(async (_lang: Locale): Promise<FaqEntries> => {
  'use server';
  return { categories: FAQ_CATEGORIES, items: FAQ_ITEMS };
}, 'faq-entries');
