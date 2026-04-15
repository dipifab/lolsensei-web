import type { BlogPost } from './types';
import { enPosts } from './en';

// All languages fall back to English posts for now.
// Translations can be added as separate files (e.g. ./it.ts, ./de.ts)
// and registered in the map below.
const postsByLang: Record<string, BlogPost[]> = {
  en: enPosts,
};

export function getBlogPosts(lang: string): BlogPost[] {
  return postsByLang[lang] ?? postsByLang.en;
}

export function getBlogPost(lang: string, slug: string): BlogPost | undefined {
  const posts = getBlogPosts(lang);
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return enPosts.map((p) => p.slug);
}

export type { BlogPost } from './types';
