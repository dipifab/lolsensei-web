import { defineConfig } from '@solidjs/start/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import { config as dotenvConfig } from 'dotenv';
import { resolve } from 'node:path';

// `app.config.ts` e' eseguito da Node prima che Vite carichi `.env.{mode}`.
// Carichiamo esplicitamente `.env.production` quando NODE_ENV=production cosi'
// `process.env.VITE_PUBLIC_PAGES_ENABLED` (usato sotto) e' coerente con i
// valori che Vite iniettera' nel bundle client. Vite continua poi a leggere
// `.env.production` nativamente per la sostituzione di `import.meta.env.*`.
if (process.env.NODE_ENV === 'production') {
  dotenvConfig({ path: resolve(process.cwd(), '.env.production') });
}

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
  middleware: './src/middleware.ts',
  server: {
    preset: 'cloudflare-module',
    prerender: {
      routes: buildPrerenderRoutes(),
      crawlLinks: false,
      autoSubfolderIndex: false,
    },
  },
  extensions: ['mdx', 'md', 'ts', 'tsx', 'js', 'jsx'],
  vite: {
    plugins: [
      {
        // WP24 TASK-3-026 — MDX plugin enforced-pre so Vinxi route loader
        // recognises `.mdx` files before SolidJS/TS transforms.
        enforce: 'pre',
        ...mdx({
          jsx: true,
          jsxImportSource: 'solid-js',
          providerImportSource: undefined,
          remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
        }),
      },
      tailwindcss(),
    ],
  },
});
