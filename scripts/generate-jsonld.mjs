#!/usr/bin/env node
/**
 * WP19 — Build-time JSON-LD generator (REQ-F-019-006 AC5).
 *
 * Reads `src/lib/jsonld-data.ts` (single source of truth), builds a @graph
 * with ORG + SITE + SOFTWARE + FOUNDER, and replaces the sentinel block
 * `<!-- JSONLD:START -->...<!-- JSONLD:END -->` in `index.html` with a single
 * `<script type="application/ld+json">` tag.
 *
 * Must be invoked via `tsx` (TS import). Configured as npm `prebuild` hook.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const INDEX_PATH = resolve(ROOT, 'index.html');
const SENTINEL_RE = /<!-- JSONLD:START -->[\s\S]*?<!-- JSONLD:END -->/;

const dataModule = await import(resolve(ROOT, 'src/lib/jsonld-data.ts'));
const { ORG, SITE, SOFTWARE } = dataModule;

if (!ORG || !SITE || !SOFTWARE) {
  console.error('[generate-jsonld] Missing one of ORG/SITE/SOFTWARE exports.');
  process.exit(1);
}

const graph = {
  '@context': 'https://schema.org',
  '@graph': [ORG, SITE, SOFTWARE],
};

const json = JSON.stringify(graph);
const block = `<!-- JSONLD:START -->\n    <script type="application/ld+json">${json}</script>\n    <!-- JSONLD:END -->`;

const html = readFileSync(INDEX_PATH, 'utf-8');
if (!SENTINEL_RE.test(html)) {
  console.error(
    '[generate-jsonld] Sentinel "<!-- JSONLD:START -->...<!-- JSONLD:END -->" not found in index.html.',
  );
  process.exit(1);
}

const updated = html.replace(SENTINEL_RE, block);
if (updated === html) {
  console.log('[generate-jsonld] index.html unchanged (bit-identical).');
} else {
  writeFileSync(INDEX_PATH, updated);
  console.log(
    `[generate-jsonld] index.html updated (@graph with ${graph['@graph'].length} entities).`,
  );
}
