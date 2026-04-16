import type { BlogPost } from './types';

const loaders: Record<string, () => Promise<BlogPost[]>> = {
  en: async () => (await import('./en')).enPosts,
  it: async () => (await import('./it')).itPosts,
};

export async function getBlogPosts(lang: string): Promise<BlogPost[]> {
  const loader = loaders[lang] ?? loaders.en;
  return loader();
}

export async function getBlogPost(lang: string, slug: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts(lang);
  return posts.find((p) => p.slug === slug);
}

export type { BlogPost } from './types';
