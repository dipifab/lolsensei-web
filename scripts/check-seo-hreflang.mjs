#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITEMAP = resolve(__dirname, '..', 'public', 'sitemap.xml');

const EXPECTED_HREFLANGS = ['en', 'it', 'ko', 'zh-Hans', 'pt-BR', 'es', 'fr', 'de', 'x-default'];

const xml = readFileSync(SITEMAP, 'utf8');
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

  const present = new Set(alternates.map((a) => a.lang));
  for (const lang of EXPECTED_HREFLANGS) {
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
  console.log(`[hreflang] OK (${urlMap.size} URLs, ${EXPECTED_HREFLANGS.length} hreflangs each)`);
} else {
  console.error(`[hreflang] FAIL with ${errors} errors`);
  process.exit(1);
}
