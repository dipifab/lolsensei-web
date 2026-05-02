#!/usr/bin/env node
import { writeFileSync, readdirSync, readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';
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
  { path: '/methodology', key: 'methodology' },
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

// REQ-SEO-016: real per-file lastmod via git log; fallback today if untracked.
function gitLastModified(filePath) {
  try {
    const out = execSync(`git log -1 --format=%cI -- "${filePath}"`, {
      cwd: resolve(__dirname, '..'),
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    if (out) return out.slice(0, 10);
  } catch {
    /* untracked or no git context */
  }
  return today;
}

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

function buildTierListEntry(locale, query) {
  const loc = tierListUrl(locale, query);
  const alternates = WP30_TIER_LIST_LOCALES.map(
    (l) => `    <xhtml:link rel="alternate" hreflang="${hreflangFor(l)}" href="${tierListUrl(l, query)}" />`,
  ).join('\n');
  const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${tierListUrl(DEFAULT_LOCALE, query)}" />`;
  const tag = query ? `tier-list-${query}` : 'tier-list-root';
  return `  <!-- ${tag}: ${locale} -->\n  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n${alternates}\n${xDefault}\n  </url>`;
}

if (PUBLIC_PAGES_ENABLED) {
  for (const locale of WP30_TIER_LIST_LOCALES) {
    entries.push(buildTierListEntry(locale, null));
  }
  for (const role of WP30_TIER_LIST_ROLES) {
    for (const locale of WP30_TIER_LIST_LOCALES) {
      entries.push(buildTierListEntry(locale, `role=${role}`));
    }
  }
}

// ---------------------------------------------------------------------------
// CR-054 (WP35.2) — Champion Guides Hub.
//
// Two-locale (EN+IT) page that lists all guide cards with search and filters.
// Same locale set as champion-guide detail pages (DEC-7) and tier-list root.
// `<priority>` 0.8 (peer of tier-list root), `<changefreq>weekly</changefreq>`
// since the underlying dataset grows as new guides are produced.
// ---------------------------------------------------------------------------

const WP35_HUB_LOCALES = ['en', 'it'];

function championHubUrl(locale) {
  return `${BASE}/${locale}/champion`;
}

function buildChampionHubEntry(locale) {
  const loc = championHubUrl(locale);
  const alternates = WP35_HUB_LOCALES.map(
    (l) => `    <xhtml:link rel="alternate" hreflang="${hreflangFor(l)}" href="${championHubUrl(l)}" />`,
  ).join('\n');
  const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${championHubUrl(DEFAULT_LOCALE)}" />`;
  return `  <!-- champion-hub: ${locale} -->\n  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n${alternates}\n${xDefault}\n  </url>`;
}

if (PUBLIC_PAGES_ENABLED) {
  for (const locale of WP35_HUB_LOCALES) {
    entries.push(buildChampionHubEntry(locale));
  }
}

// ---------------------------------------------------------------------------
// WP35.1 (CR-053) — Champion guides entries.
//
// Auto-discovery: scansiona `content/champions/{en,it}/*.md` ed emette per
// ogni guida l'URL `/<lang>/champion/<slug>/guide` con hreflang triplet
// (en, it, x-default → en). Solo le guide effettivamente presenti vengono
// indicizzate (per-locale: una guida solo IT non emette l'URL EN).
// `<priority>` 0.7 (sotto pricing/home, sopra blog post).
// `<changefreq>weekly</changefreq>` (le guide cambiano per patch ~weekly).
//
// Pattern filename: `<slug>-<role>.md` con role in {top,jungle,mid,bot,support}.
// Cardinalita prevista al rollout WP35.1: 50 champion top × 1-3 ruoli ≈ 80-120
// URL × 2 locales = 160-240 entry.
// ---------------------------------------------------------------------------

const CHAMPION_GUIDE_LOCALES = ['en', 'it'];
const CHAMPION_GUIDE_ROLES = ['top', 'jungle', 'mid', 'bot', 'support'];
const CONTENT_CHAMPIONS_ROOT = resolve(__dirname, '..', 'content', 'champions');
const CHAMPION_FILENAME_RE = /^([a-z0-9-]+)-(top|jungle|mid|bot|support)\.md$/;

function discoverChampionGuides() {
  // Map: "<slug>-<role>" -> Set di locale che hanno la guida
  const map = new Map();
  for (const locale of CHAMPION_GUIDE_LOCALES) {
    const dir = resolve(CONTENT_CHAMPIONS_ROOT, locale);
    if (!existsSync(dir)) continue;
    const files = readdirSync(dir);
    for (const file of files) {
      const m = file.match(CHAMPION_FILENAME_RE);
      if (!m) continue;
      const [, slug, role] = m;
      if (!CHAMPION_GUIDE_ROLES.includes(role)) continue;
      const key = `${slug}-${role}`;
      if (!map.has(key)) map.set(key, { slug, role, locales: new Set() });
      map.get(key).locales.add(locale);
    }
  }
  return [...map.values()].sort((a, b) =>
    a.slug.localeCompare(b.slug) || a.role.localeCompare(b.role),
  );
}

// CR-056: URL role-explicit. Una entry per (champion, role, locale).
function championGuideUrl(locale, slug, role) {
  return `${BASE}/${locale}/champion/${slug}/${role}/guide`;
}

function buildChampionGuideEntry(locale, guide) {
  const loc = championGuideUrl(locale, guide.slug, guide.role);
  // hreflang alternates: solo locales dove la guida (slug, role) esiste fisicamente
  const presentLocales = [...guide.locales].sort();
  const alternates = presentLocales.map(
    (l) => `    <xhtml:link rel="alternate" hreflang="${hreflangFor(l)}" href="${championGuideUrl(l, guide.slug, guide.role)}" />`,
  ).join('\n');
  // x-default punta a EN se presente, altrimenti al primo locale disponibile
  const defaultLocale = guide.locales.has(DEFAULT_LOCALE) ? DEFAULT_LOCALE : presentLocales[0];
  const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${championGuideUrl(defaultLocale, guide.slug, guide.role)}" />`;
  // REQ-SEO-016: lastmod from git log of source markdown (per locale).
  const sourceMd = resolve(CONTENT_CHAMPIONS_ROOT, locale, `${guide.slug}-${guide.role}.md`);
  const lastmod = gitLastModified(sourceMd);
  return `  <!-- champion-guide/${guide.slug}/${guide.role}: ${locale} -->\n  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n${alternates}\n${xDefault}\n  </url>`;
}

if (PUBLIC_PAGES_ENABLED) {
  const guides = discoverChampionGuides();
  for (const guide of guides) {
    for (const locale of [...guide.locales].sort()) {
      entries.push(buildChampionGuideEntry(locale, guide));
    }
  }
}

// ---------------------------------------------------------------------------
// WP-COUNTER-PICKER (CR-063) — Counter-pick search + detail entries.
//
// Auto-discovery: legge `public/counter-index/<lang>.json` (prodotto da
// scripts/build-counter-index.mjs nello step prebuild precedente). Emette:
//   - 1 root URL `/<lang>/counter/` per locale (lingua con asset presente);
//   - 1 URL `/<lang>/counter/<slug>` per ogni champion con `has_guide=true`
//     (i champion senza guida non hanno pagina detail con contenuto, vedi
//     REQ-NF-CP-008 AC-008.2 e EP5 nel execution-plan).
//
// Skip graceful se gli asset non esistono ancora (es. prima run o prebuild
// invocato senza counter-index): nessun crash, solo warning.
// ---------------------------------------------------------------------------

const COUNTER_LOCALES = ['en', 'it'];
const COUNTER_INDEX_DIR = resolve(__dirname, '..', 'public', 'counter-index');

function counterRootUrl(locale) {
  return `${BASE}/${locale}/counter/`;
}

function counterDetailUrl(locale, slug) {
  return `${BASE}/${locale}/counter/${slug}`;
}

function buildCounterRootEntry(locale) {
  const loc = counterRootUrl(locale);
  const alternates = COUNTER_LOCALES.map(
    (l) => `    <xhtml:link rel="alternate" hreflang="${hreflangFor(l)}" href="${counterRootUrl(l)}" />`,
  ).join('\n');
  const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${counterRootUrl(DEFAULT_LOCALE)}" />`;
  return `  <!-- counter-root: ${locale} -->\n  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n${alternates}\n${xDefault}\n  </url>`;
}

function buildCounterDetailEntry(locale, slug) {
  const loc = counterDetailUrl(locale, slug);
  const alternates = COUNTER_LOCALES.map(
    (l) => `    <xhtml:link rel="alternate" hreflang="${hreflangFor(l)}" href="${counterDetailUrl(l, slug)}" />`,
  ).join('\n');
  const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${counterDetailUrl(DEFAULT_LOCALE, slug)}" />`;
  return `  <!-- counter-detail/${slug}: ${locale} -->\n  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n${alternates}\n${xDefault}\n  </url>`;
}

if (PUBLIC_PAGES_ENABLED) {
  for (const locale of COUNTER_LOCALES) {
    const indexPath = resolve(COUNTER_INDEX_DIR, `${locale}.json`);
    if (!existsSync(indexPath)) {
      console.warn(`[sitemap] counter-index missing for ${locale} (${indexPath}); skipping counter URLs for this locale`);
      continue;
    }
    let parsed;
    try {
      parsed = JSON.parse(readFileSync(indexPath, 'utf8'));
    } catch (e) {
      console.warn(`[sitemap] failed to parse counter-index for ${locale}: ${e.message}; skipping counter URLs`);
      continue;
    }
    entries.push(buildCounterRootEntry(locale));
    // Schema v2 (CR-063 Phase 2 fix OI2): champions e' Record<slug, ChampionMeta>.
    // Per backward-compat con eventuali asset v1 stale, accetta anche array.
    const championsField = parsed.champions ?? {};
    if (Array.isArray(championsField)) {
      for (const champion of championsField) {
        if (champion?.has_guide) {
          entries.push(buildCounterDetailEntry(locale, champion.slug));
        }
      }
    } else {
      for (const [slug, meta] of Object.entries(championsField)) {
        if (meta?.has_guide) {
          entries.push(buildCounterDetailEntry(locale, slug));
        }
      }
    }
  }
}


const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
  entries.join('\n') +
  '\n</urlset>\n';

writeFileSync(OUT_PATH, xml, 'utf8');
console.log(`[sitemap] wrote ${entries.length} URLs to ${OUT_PATH} (publicPagesEnabled=${PUBLIC_PAGES_ENABLED})`);
