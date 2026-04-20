#!/usr/bin/env node
import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH = resolve(__dirname, '..', 'public', 'sitemap.xml');

const BASE = 'https://www.lolsensei.com';
const LOCALES = ['en', 'it', 'ko', 'zh-Hans', 'pt-br', 'es', 'fr', 'de'];
const HREFLANG_MAP = { 'pt-br': 'pt-BR' };

// m-6 arch review: sitemap deve rispecchiare il feature flag VITE_PUBLIC_PAGES_ENABLED.
// Quando false, escludiamo le pagine pubbliche opzionali dal sitemap per evitare 404 indicizzati.
const PUBLIC_PAGES_ENABLED = (process.env.VITE_PUBLIC_PAGES_ENABLED ?? 'true').toLowerCase() === 'true';

const CORE_PAGES = [
  { path: '/', key: 'home' },
  { path: '/pricing', key: 'pricing' },
  { path: '/faq', key: 'faq' },
  { path: '/privacy', key: 'privacy' },
  { path: '/terms', key: 'terms' },
  { path: '/contact', key: 'contact' },
];

const OPTIONAL_PAGES = [
  { path: '/features', key: 'features' },
  { path: '/community', key: 'community' },
  { path: '/about', key: 'about' },
  { path: '/blog', key: 'blog' },
];

// Blog post slugs (WP19 — EN+IT content only; other locales ship without per-post pages for now).
const BLOG_POSTS = [
  'how-ai-coaching-helps-you-learn-league',
  'understanding-champion-select',
  'why-copying-builds-doesnt-help',
  'how-to-climb-ranked-lol',
  'how-to-stop-tilting-lol',
  'best-lol-ai-coach-2026',
];
const BLOG_LOCALES = ['en', 'it'];

const PAGES = PUBLIC_PAGES_ENABLED ? [...CORE_PAGES, ...OPTIONAL_PAGES] : CORE_PAGES;

const today = new Date().toISOString().slice(0, 10);

function hreflangFor(loc) {
  return HREFLANG_MAP[loc] ?? loc;
}

function urlPath(locale, path) {
  const trailing = path === '/' ? '/' : path;
  return `${BASE}/${locale}${trailing === '/' ? '/' : trailing}`;
}

function buildUrlEntry(locale, page) {
  const loc = urlPath(locale, page.path);
  const alternates = LOCALES.map(
    (l) => `    <xhtml:link rel="alternate" hreflang="${hreflangFor(l)}" href="${urlPath(l, page.path)}" />`,
  ).join('\n');
  const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${urlPath('en', page.path)}" />`;
  return `  <!-- ${page.key}: ${locale} -->\n  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n${alternates}\n${xDefault}\n  </url>`;
}

const entries = [];
for (const page of PAGES) {
  for (const locale of LOCALES) {
    entries.push(buildUrlEntry(locale, page));
  }
}

// Blog post entries — EN+IT only. Per-post hreflang points just to locales
// where the post actually exists to avoid 404 for crawlers.
function buildBlogEntry(locale, slug) {
  const path = `/blog/${slug}`;
  const loc = urlPath(locale, path);
  const alternates = BLOG_LOCALES.map(
    (l) => `    <xhtml:link rel="alternate" hreflang="${hreflangFor(l)}" href="${urlPath(l, path)}" />`,
  ).join('\n');
  const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${urlPath('en', path)}" />`;
  return `  <!-- blog/${slug}: ${locale} -->\n  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n${alternates}\n${xDefault}\n  </url>`;
}

if (PUBLIC_PAGES_ENABLED) {
  for (const slug of BLOG_POSTS) {
    for (const locale of BLOG_LOCALES) {
      entries.push(buildBlogEntry(locale, slug));
    }
  }
}

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
  entries.join('\n') +
  '\n</urlset>\n';

writeFileSync(OUT_PATH, xml, 'utf8');
console.log(`[sitemap] wrote ${entries.length} URLs to ${OUT_PATH} (publicPagesEnabled=${PUBLIC_PAGES_ENABLED})`);
