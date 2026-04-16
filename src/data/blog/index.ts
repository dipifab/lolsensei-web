import type { BlogPost } from './types';
import { enPosts } from './en';
import { itPosts } from './it';

const postsByLang: Record<string, BlogPost[]> = {
  en: enPosts,
  it: itPosts,
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
