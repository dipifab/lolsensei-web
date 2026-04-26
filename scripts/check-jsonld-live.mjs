#!/usr/bin/env node
//
// scripts/check-jsonld-live.mjs
//
// Visits a curated list of production URLs and dumps the JSON-LD payloads
// they emit. Used as a smoke gate to confirm:
//   - the build pipeline reaches Cloudflare with JSON-LD intact,
//   - no CSP rule strips inline `<script type="application/ld+json">` tags,
//   - `JSON.parse` succeeds on every payload (catches accidental escaping).
//
// WP30 extension (TASK-WP30-F3-04, REQ-F-030-008):
//   - tier-list pages (en, it) are always probed (route is public, no PII).
//   - the summoner page is probed only when `WP30_SEED_SUMMONER_URL`
//     environment variable is provided. Per the NO-MOCK policy we never
//     hard-code a Riot ID; the variable is meant to point at a real public
//     summoner URL provided by staff/founder. Skip-graceful otherwise.

import { chromium } from 'playwright';

const URLS = [
  'https://www.lolsensei.com/en/blog/how-to-climb-ranked-lol',
  'https://www.lolsensei.com/en/blog/how-to-stop-tilting-lol',
  'https://www.lolsensei.com/en/',
  // WP30 tier-list — exercises Schema.org `ItemList` (DEC-OP-025 gating).
  'https://www.lolsensei.com/en/tier-list',
  'https://www.lolsensei.com/it/tier-list',
];

// Optional WP30 summoner probe — only when env points at a real URL.
const SEED_SUMMONER_URL = process.env.WP30_SEED_SUMMONER_URL;
if (SEED_SUMMONER_URL) {
  if (!/^https?:\/\//.test(SEED_SUMMONER_URL)) {
    console.error(
      `[check-jsonld-live] WP30_SEED_SUMMONER_URL is not an absolute URL: ${SEED_SUMMONER_URL}`,
    );
    process.exit(1);
  }
  URLS.push(SEED_SUMMONER_URL);
} else {
  console.log(
    '[check-jsonld-live] skip: WP30_SEED_SUMMONER_URL not set (no mock, summoner probe skipped)',
  );
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newContext().then(c => c.newPage());

let parseErrors = 0;
let typeMissing = 0;

for (const url of URLS) {
  console.log(`\n=== ${url} ===`);
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(5000);

  const scripts = await page.$$eval(
    'script[type="application/ld+json"]',
    (els) => els.map((el) => el.textContent || '')
  );
  console.log(`found ${scripts.length} ld+json scripts`);
  for (const [i, s] of scripts.entries()) {
    try {
      const parsed = JSON.parse(s);
      if (parsed['@graph']) {
        const types = parsed['@graph'].map((e) => e['@type']);
        console.log(`  [${i}] @graph types: ${types.join(', ')}`);
        const missing = parsed['@graph'].filter((e) => !e['@type']);
        if (missing.length > 0) typeMissing += missing.length;
      } else {
        const t = parsed['@type'];
        console.log(`  [${i}] @type: ${t ?? 'MISSING'}, @id: ${parsed['@id'] || 'n/a'}`);
        if (!t) typeMissing += 1;
        if (t === 'HowTo') {
          console.log(`      step count: ${parsed.step?.length ?? 0}`);
        }
        if (t === 'ItemList') {
          console.log(`      itemListElement count: ${parsed.itemListElement?.length ?? 0}`);
        }
        if (t === 'Person') {
          console.log(`      identifier: ${parsed.identifier ?? 'n/a'}, skillLevel: ${parsed.skillLevel ?? 'omitted'}`);
        }
      }
    } catch (e) {
      console.log(`  [${i}] parse error: ${e.message}`);
      parseErrors += 1;
    }
  }
}

await browser.close();

if (parseErrors > 0 || typeMissing > 0) {
  console.error(
    `[check-jsonld-live] FAIL — parseErrors=${parseErrors} typeMissing=${typeMissing}`,
  );
  process.exit(1);
}
console.log('\n[check-jsonld-live] OK — all JSON-LD payloads parsed and typed');
