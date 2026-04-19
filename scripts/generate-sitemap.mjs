#!/usr/bin/env node
import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH = resolve(__dirname, '..', 'public', 'sitemap.xml');

const BASE = 'https://www.lolsensei.com';
const LOCALES = ['en', 'it', 'ko', 'zh-Hans', 'pt-br', 'es', 'fr', 'de'];
const HREFLANG_MAP = { 'pt-br': 'pt-BR' };

const PAGES = [
  { path: '/', key: 'home' },
  { path: '/features', key: 'features' },
  { path: '/pricing', key: 'pricing' },
  { path: '/faq', key: 'faq' },
  { path: '/community', key: 'community' },
  { path: '/about', key: 'about' },
  { path: '/blog', key: 'blog' },
  { path: '/privacy', key: 'privacy' },
  { path: '/terms', key: 'terms' },
];

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

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
  entries.join('\n') +
  '\n</urlset>\n';

writeFileSync(OUT_PATH, xml, 'utf8');
console.log(`[sitemap] wrote ${entries.length} URLs to ${OUT_PATH}`);
