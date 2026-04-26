#!/usr/bin/env node
import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  SUPPORTED_LOCALES,
  BLOG_LOCALES,
  DEFAULT_LOCALE,
  HREFLANG_MAP,
} from './locales.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH = resolve(__dirname, '..', 'public', 'sitemap.xml');

const BASE = 'https://www.lolsensei.com';
const LOCALES = SUPPORTED_LOCALES;

// m-6 arch review: sitemap deve rispecchiare il feature flag VITE_PUBLIC_PAGES_ENABLED.
// Quando false, escludiamo le pagine pubbliche opzionali dal sitemap per evitare 404 indicizzati.
const PUBLIC_PAGES_ENABLED = (process.env.VITE_PUBLIC_PAGES_ENABLED ?? 'true').toLowerCase() === 'true';

// WP30 (DEC-OP-004 / REQ-F-030-010): include only tier-list URLs in the sitemap MVP.
// Summoner pages have unbounded cardinality and are deferred to WP35.
// Per design §4.1, the WP30 hreflang cluster is restricted to EN + IT (same set as the blog),
// because all other locales fall back to EN content; advertising 9 hreflangs would create
// duplicate-content signals across crawlers.
const WP30_TIER_LIST_LOCALES = ['en', 'it'];
const WP30_TIER_LIST_ROLES = ['top', 'jungle', 'mid', 'bot', 'support'];

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

const PAGES = PUBLIC_PAGES_ENABLED ? [...CORE_PAGES, ...OPTIONAL_PAGES] : CORE_PAGES;

const today = new Date().toISOString().slice(0, 10);

function hreflangFor(loc) {
  return HREFLANG_MAP[loc] ?? loc;
}

// Le route che iniziano con `/blog` sono pubblicate solo in BLOG_LOCALES (OP-W18-008).
function localesForPage(page) {
  return page.path.startsWith('/blog') ? BLOG_LOCALES : LOCALES;
}

function urlPath(locale, path) {
  const trailing = path === '/' ? '/' : path;
  return `${BASE}/${locale}${trailing === '/' ? '/' : trailing}`;
}

function buildUrlEntry(locale, page) {
  const loc = urlPath(locale, page.path);
  const pageLocales = localesForPage(page);
  const alternates = pageLocales.map(
    (l) => `    <xhtml:link rel="alternate" hreflang="${hreflangFor(l)}" href="${urlPath(l, page.path)}" />`,
  ).join('\n');
  const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${urlPath(DEFAULT_LOCALE, page.path)}" />`;
  return `  <!-- ${page.key}: ${locale} -->\n  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n${alternates}\n${xDefault}\n  </url>`;
}

const entries = [];
for (const page of PAGES) {
  for (const locale of localesForPage(page)) {
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
  const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${urlPath(DEFAULT_LOCALE, path)}" />`;
  return `  <!-- blog/${slug}: ${locale} -->\n  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n${alternates}\n${xDefault}\n  </url>`;
}

if (PUBLIC_PAGES_ENABLED) {
  for (const slug of BLOG_POSTS) {
    for (const locale of BLOG_LOCALES) {
      entries.push(buildBlogEntry(locale, slug));
    }
  }
}

// ---------------------------------------------------------------------------
// WP30 — Tier list entries (DEC-OP-004 / REQ-F-030-010).
//
// Total: 12 URLs = 2 root (en, it) + 10 role-filtered (5 roles × 2 locales).
// Each entry advertises the WP30 hreflang triplet (en, it, x-default → en).
// `<priority>` 0.8 for root, 0.6 for filters; `<changefreq>daily</changefreq>`
// matches the cron `tier_list_refresh` cadence (04:00 UTC, app/jobs/).
// ---------------------------------------------------------------------------

function tierListUrl(locale, query) {
  // Cloudflare Workers serves both `/en/tier-list` and `/en/tier-list?...`;
  // the canonical sitemap form keeps the path WITHOUT trailing slash to match
  // the route handler (no normalization redirects in tier-list).
  const base = `${BASE}/${locale}/tier-list`;
  return query ? `${base}?${query}` : base;
}

function buildTierListEntry(locale, query, priority) {
  const loc = tierListUrl(locale, query);
  const alternates = WP30_TIER_LIST_LOCALES.map(
    (l) => `    <xhtml:link rel="alternate" hreflang="${hreflangFor(l)}" href="${tierListUrl(l, query)}" />`,
  ).join('\n');
  const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${tierListUrl(DEFAULT_LOCALE, query)}" />`;
  const tag = query ? `tier-list-${query}` : 'tier-list-root';
  return `  <!-- ${tag}: ${locale} -->\n  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>${priority}</priority>\n${alternates}\n${xDefault}\n  </url>`;
}

if (PUBLIC_PAGES_ENABLED) {
  for (const locale of WP30_TIER_LIST_LOCALES) {
    entries.push(buildTierListEntry(locale, null, '0.8'));
  }
  for (const role of WP30_TIER_LIST_ROLES) {
    for (const locale of WP30_TIER_LIST_LOCALES) {
      entries.push(buildTierListEntry(locale, `role=${role}`, '0.6'));
    }
  }
}

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
  entries.join('\n') +
  '\n</urlset>\n';

writeFileSync(OUT_PATH, xml, 'utf8');
console.log(`[sitemap] wrote ${entries.length} URLs to ${OUT_PATH} (publicPagesEnabled=${PUBLIC_PAGES_ENABLED})`);
