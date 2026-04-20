#!/usr/bin/env node
/**
 * WP19 P4-002 — Worker allowlist generator.
 *
 * Reads the built `dist/` tree and emits `public/allowlist.json`
 * consumed by `src/worker.ts` at compile time. Running this script
 * before `vite build` is safe: the routes come from `public/sitemap.xml`
 * (committed), and the asset globs are static.
 *
 * Usage:
 *   node scripts/generate-allowlist.mjs
 *
 * Shape (see data-model-wp19.md §5):
 *   { static: string[], routes: string[], assetsGlob: string[] }
 */

import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DIST = resolve(ROOT, 'dist');
const PUBLIC = resolve(ROOT, 'public');
const SITEMAP_DIST = resolve(DIST, 'sitemap.xml');
const SITEMAP_PUBLIC = resolve(PUBLIC, 'sitemap.xml');
const OUT = resolve(PUBLIC, 'allowlist.json');

const STATIC_PATHS = [
  '/robots.txt',
  '/sitemap.xml',
  '/llms.txt',
  '/favicon.ico',
  '/apple-touch-icon.png',
  '/manifest.json',
  '/og-image.png',
  '/404.html',
];

const ASSETS_GLOB = [
  '/assets/**',
  '/fonts/**',
  '/images/**',
  '/favicon-16.png',
  '/favicon-32.png',
  '/favicon-48.png',
  '/og-image.svg',
  '/riot.txt',
];

function readSitemap() {
  const source = existsSync(SITEMAP_DIST)
    ? SITEMAP_DIST
    : existsSync(SITEMAP_PUBLIC)
      ? SITEMAP_PUBLIC
      : null;
  if (!source) {
    console.warn('[allowlist] sitemap.xml not found in dist/ or public/ — routes will be empty');
    return { routes: [], source: null };
  }
  const xml = readFileSync(source, 'utf8');
  const routes = new Set();
  const re = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = re.exec(xml)) !== null) {
    try {
      const url = new URL(m[1].trim());
      // Preserve both the canonical trailing-slash path and the stripped
      // form so the Worker accepts either one before normalization.
      const p = url.pathname;
      routes.add(p);
      if (p !== '/' && p.endsWith('/')) {
        routes.add(p.slice(0, -1));
      }
    } catch {
      // ignore malformed <loc>
    }
  }
  return { routes: [...routes].sort(), source };
}

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir)) {
    const p = resolve(dir, entry);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

function scanDistAssets() {
  if (!existsSync(DIST)) {
    console.warn('[allowlist] dist/ not found — skipping asset scan');
    return [];
  }
  const EXTS = new Set(['.css', '.js', '.mjs', '.woff2', '.webp', '.png', '.svg', '.ico', '.jpg', '.jpeg', '.avif']);
  const files = walk(DIST)
    .map((p) => '/' + relative(DIST, p).split(/[\\/]/).join('/'))
    .filter((p) => {
      const dot = p.lastIndexOf('.');
      if (dot < 0) return false;
      return EXTS.has(p.slice(dot).toLowerCase());
    });
  return files;
}

function main() {
  const { routes, source } = readSitemap();
  const assets = scanDistAssets();

  const allowlist = {
    static: [...STATIC_PATHS].sort(),
    routes,
    assetsGlob: [...ASSETS_GLOB].sort(),
    // Not consumed by the Worker (it matches via assetsGlob) but kept for
    // auditing / link checks. Key name prefixed with `_` to signal opt-in.
    _assetsScanned: assets.length,
  };

  writeFileSync(OUT, JSON.stringify(allowlist, null, 2) + '\n', 'utf8');
  console.log(
    `[allowlist] wrote ${OUT}`
      + ` — routes=${routes.length}`
      + ` static=${allowlist.static.length}`
      + ` assetsGlob=${allowlist.assetsGlob.length}`
      + ` assetsScanned=${assets.length}`
      + ` sitemapSource=${source ? relative(ROOT, source) : 'none'}`,
  );
}

main();
