import type { Locale, BlogLocale } from '../i18n/locales';
import { getBlogPost as loadBlogPost, getBlogPosts } from '../../data/blog';
import type { BlogPost } from '../../data/blog/types';
import { FAQ_CATEGORIES, FAQ_ITEMS } from '../../data/faq';
import type { FAQItem } from '../../data/types';

/**
 * Content helpers for SSG/prerender data loaders (WP18 T14 rework, T19 unblock).
 *
 * Rationale:
 * - Originally these were `query()` wrappers with `'use server'`, which aborted
 *   the SSG prerender on Cloudflare Workers (cloudflare-module bundle was
 *   never produced; only 1/74 route processed).
 * - Blog/FAQ content is fully static filesystem data (no DB, no secrets), so
 *   we can delegate directly to the static-import APIs in `src/data/`.
 * - Functions remain `async` for stable consumer signatures (`createAsync` +
 *   `preload` accept both sync and async return types).
 */

export async function getBlogIndex(lang: BlogLocale): Promise<BlogPost[]> {
  return getBlogPosts(lang);
}

export async function getBlogPost(
  lang: BlogLocale,
  slug: string,
): Promise<BlogPost | undefined> {
  return loadBlogPost(lang, slug);
}

export interface FaqEntries {
  categories: typeof FAQ_CATEGORIES;
  items: FAQItem[];
}

export async function getFaqEntries(_lang: Locale): Promise<FaqEntries> {
  return { categories: FAQ_CATEGORIES, items: FAQ_ITEMS };
}
