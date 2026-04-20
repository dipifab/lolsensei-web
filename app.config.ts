import { defineConfig } from '@solidjs/start/config';
import tailwindcss from '@tailwindcss/vite';

const PUBLIC_PAGES_ENABLED = process.env.VITE_PUBLIC_PAGES_ENABLED === 'true';

const SUPPORTED_LOCALES = ['en', 'it', 'es', 'fr', 'de', 'pt-br', 'ko', 'zh-Hans'] as const;
const BLOG_LOCALES = ['en', 'it'] as const;
const PUBLIC_ROUTES = ['/', '/pricing', '/faq', '/privacy', '/terms', '/contact'];
const GATED_ROUTES = ['/features', '/community', '/about', '/blog'];

function buildPrerenderRoutes(): string[] {
  const base: string[] = [];
  for (const lang of SUPPORTED_LOCALES) {
    for (const r of PUBLIC_ROUTES) {
      base.push(`/${lang}${r === '/' ? '/' : r}`);
    }
    if (PUBLIC_PAGES_ENABLED) {
      for (const r of GATED_ROUTES) {
        if (r === '/blog' && !BLOG_LOCALES.includes(lang as (typeof BLOG_LOCALES)[number])) continue;
        base.push(`/${lang}${r}`);
      }
    }
  }
  return base;
}

export default defineConfig({
  ssr: true,
  server: {
    preset: 'cloudflare-module',
    middleware: './src/middleware.ts',
    prerender: {
      routes: buildPrerenderRoutes(),
      crawlLinks: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
