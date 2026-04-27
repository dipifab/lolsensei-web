#!/usr/bin/env node
// scripts/check-seo-hreflang.mjs
//
// Valida hreflang sugli HTML prerendered sotto il target build (default: .output/public).
// Due set attesi:
//   - EXPECTED_HREFLANGS_PUBLIC  -> 9 entries: en, it, es, fr, de, pt-BR, ko, zh-Hans, x-default
//                                  (set OP-W18-001: pagine tradotte in tutti i locale)
//   - EXPECTED_HREFLANGS_TWO_LOCALE -> 3 entries: en, it, x-default
//                                  (set OP-W18-008 + WP30 design 7.1: pagine pubblicate
//                                  solo in EN+IT — blog index/post, /tier-list, /summoner/...)
//
// Ogni HTML / sitemap URL viene classificato in base al path:
//   - contiene `/blog`, `/tier-list`, `/summoner/`  -> set TWO_LOCALE
//   - altrimenti                                    -> set PUBLIC
//
// Fallback retrocompatibile: se il target è (o contiene) `sitemap.xml`, il checker
// esegue la validazione storica sul sitemap (bidirezionalità + hreflang per-URL).
//
// CLI:
//   node scripts/check-seo-hreflang.mjs [--target <path>]
//
// `--target` può essere:
//   - una directory (scan ricorsivo *.html)
//   - un file sitemap.xml (legacy mode)

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { resolve, dirname, join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SUPPORTED_LOCALES, BLOG_LOCALES, HREFLANG_MAP } from './locales.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

function parseArgs(argv) {
  const args = { target: null };
  for (let i = 2; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--target') {
      args.target = argv[i + 1];
      i += 1;
    } else if (arg.startsWith('--target=')) {
      args.target = arg.slice('--target='.length);
    }
  }
  return args;
}

const EXPECTED_HREFLANGS_PUBLIC = [
  ...SUPPORTED_LOCALES.map((l) => HREFLANG_MAP[l] ?? l),
  'x-default',
];
// BLOG_LOCALES = ['en', 'it'] is the canonical "two-locale" set for routes
// translated only to EN+IT. Reused by WP30 (tier-list, summoner) per design 7.1.
const EXPECTED_HREFLANGS_TWO_LOCALE = [
  ...BLOG_LOCALES.map((l) => HREFLANG_MAP[l] ?? l),
  'x-default',
];

function walkHtml(dir) {
  const out = [];
  const entries = readdirSync(dir);
  for (const name of entries) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) {
      // Skip build internals e artefatti compressi irrilevanti
      if (name === '_server' || name === '_build' || name === 'assets' || name === 'fonts' || name === 'images' || name === 'previews') {
        continue;
      }
      out.push(...walkHtml(full));
    } else if (st.isFile() && name.endsWith('.html')) {
      out.push(full);
    }
  }
  return out;
}

/**
 * True for routes translated only to EN+IT. These advertise the 3-entry
 * hreflang triplet (en, it, x-default). Other locales fall back to EN
 * content, so emitting 9 hreflangs there would create duplicate-content
 * signals across crawlers.
 *
 * Members:
 *   - blog index (`/{lang}/blog`) and blog posts (`/{lang}/blog/...`).
 *   - WP30 tier list (`/{lang}/tier-list[?...]`).
 *   - WP30 summoner pages (`/{lang}/summoner/{region}/...`).
 */
function isTwoLocaleRoute(pathLike) {
  const p = pathLike.split(sep).join('/');
  // Match `/blog`, `/blog/`, `/blog?...`, `/blog.html` and any nested `/blog/...`
  if (/\/blog(\/|\.html|\?|$)/.test(p)) return true;
  // Match `/tier-list`, `/tier-list/`, `/tier-list?...`, `/tier-list.html`
  if (/\/tier-list(\/|\.html|\?|$)/.test(p)) return true;
  // Match `/summoner/...` (always nested, region segment follows)
  if (p.includes('/summoner/')) return true;
  // WP35 (CR-053): champion guides EN+IT only per DEC-7 (other locales fall
  // back to default landing). Match `/champion/<slug>/<page>` nested routes.
  if (p.includes('/champion/')) return true;
  // CR-054 (WP35.2): hub root `/<lang>/champion` (no trailing slash) is also
  // EN+IT only. Match `/champion`, `/champion/`, `/champion?...`, `/champion.html`.
  if (/\/champion(\/|\.html|\?|$)/.test(p)) return true;
  return false;
}

function extractHreflangs(html) {
  // match sia attributi in ordine hreflang prima di href, sia viceversa
  const alternates = [];
  const linkRe = /<link\b[^>]*\brel=["']alternate["'][^>]*>/gi;
  const links = html.match(linkRe) ?? [];
  for (const tag of links) {
    const hrefMatch = /\bhref=["']([^"']+)["']/i.exec(tag);
    const langMatch = /\bhreflang=["']([^"']+)["']/i.exec(tag);
    if (langMatch && hrefMatch) {
      alternates.push({ lang: langMatch[1], href: hrefMatch[1] });
    }
  }
  return alternates;
}

function runHtmlChecker(targetDir) {
  const files = walkHtml(targetDir);
  if (files.length === 0) {
    console.error(`[hreflang] no HTML found under ${targetDir}`);
    process.exit(1);
  }
  let errors = 0;
  let publicCount = 0;
  let twoLocaleCount = 0;
  let skipped404 = 0;

  for (const file of files) {
    const rel = relative(targetDir, file);
    // 404.html e altri file top-level senza locale non hanno hreflang: skip
    const topLevel = !rel.includes(sep);
    if (topLevel) {
      skipped404 += 1;
      continue;
    }
    const html = readFileSync(file, 'utf8');
    const alternates = extractHreflangs(html);
    const present = new Set(alternates.map((a) => a.lang));
    const twoLocale = isTwoLocaleRoute(rel);
    const expected = twoLocale ? EXPECTED_HREFLANGS_TWO_LOCALE : EXPECTED_HREFLANGS_PUBLIC;
    if (twoLocale) twoLocaleCount += 1;
    else publicCount += 1;

    const missing = expected.filter((l) => !present.has(l));
    const extra = [...present].filter((l) => !expected.includes(l));

    if (missing.length > 0) {
      console.error(`[hreflang] ${rel} [${twoLocale ? 'TWO_LOCALE' : 'PUBLIC'}] missing: ${missing.join(', ')}`);
      errors += missing.length;
    }
    if (extra.length > 0) {
      console.error(`[hreflang] ${rel} [${twoLocale ? 'TWO_LOCALE' : 'PUBLIC'}] unexpected: ${extra.join(', ')}`);
      errors += extra.length;
    }
  }

  if (errors === 0) {
    console.log(
      `[hreflang] OK — scanned ${files.length - skipped404} HTML (${publicCount} public × ${EXPECTED_HREFLANGS_PUBLIC.length}, ${twoLocaleCount} two-locale × ${EXPECTED_HREFLANGS_TWO_LOCALE.length}); skipped ${skipped404} top-level`,
    );
  } else {
    console.error(`[hreflang] FAIL with ${errors} errors across ${publicCount + twoLocaleCount} pages`);
    process.exit(1);
  }
}

function runSitemapChecker(sitemapPath) {
  // Legacy mode: valida sitemap.xml con bidirezionalità.
  const xml = readFileSync(sitemapPath, 'utf8');
  const urlBlocks = xml.match(/<url>[\s\S]*?<\/url>/g) ?? [];

  let errors = 0;
  const urlMap = new Map();

  for (const block of urlBlocks) {
    const loc = /<loc>([^<]+)<\/loc>/.exec(block)?.[1];
    if (!loc) continue;
    const alternates = [...block.matchAll(/hreflang="([^"]+)"[^>]*href="([^"]+)"/g)].map((m) => ({
      lang: m[1],
      href: m[2],
    }));
    urlMap.set(loc, alternates);

    const twoLocale = isTwoLocaleRoute(loc);
    const expected = twoLocale ? EXPECTED_HREFLANGS_TWO_LOCALE : EXPECTED_HREFLANGS_PUBLIC;
    const present = new Set(alternates.map((a) => a.lang));
    for (const lang of expected) {
      if (!present.has(lang)) {
        console.error(`[hreflang] ${loc} missing hreflang="${lang}"`);
        errors += 1;
      }
    }
  }

  for (const [loc, alternates] of urlMap) {
    for (const alt of alternates) {
      if (alt.lang === 'x-default') continue;
      const reverse = urlMap.get(alt.href);
      if (!reverse) {
        console.error(`[hreflang] ${loc} references ${alt.href} (${alt.lang}) but target not in sitemap`);
        errors += 1;
        continue;
      }
      const reverseHasLoc = reverse.some((a) => a.href === loc);
      if (!reverseHasLoc) {
        console.error(`[hreflang] bidirectional broken: ${loc} -> ${alt.href} but reverse missing`);
        errors += 1;
      }
    }
  }

  if (errors === 0) {
    console.log(`[hreflang] OK (${urlMap.size} URLs in sitemap)`);
  } else {
    console.error(`[hreflang] FAIL with ${errors} errors`);
    process.exit(1);
  }
}

const args = parseArgs(process.argv);
const target = args.target
  ? resolve(process.cwd(), args.target)
  : resolve(ROOT, 'public', 'sitemap.xml');

if (!existsSync(target)) {
  console.error(`[hreflang] target not found: ${target}`);
  process.exit(1);
}

const st = statSync(target);
if (st.isDirectory()) {
  runHtmlChecker(target);
} else if (target.endsWith('.xml')) {
  runSitemapChecker(target);
} else {
  console.error(`[hreflang] unsupported target: ${target}`);
  process.exit(1);
}
