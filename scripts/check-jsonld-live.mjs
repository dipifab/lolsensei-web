#!/usr/bin/env node
import { chromium } from 'playwright';

const URLS = [
  'https://www.lolsensei.com/en/blog/how-to-climb-ranked-lol',
  'https://www.lolsensei.com/en/blog/how-to-stop-tilting-lol',
  'https://www.lolsensei.com/en/',
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newContext().then(c => c.newPage());

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
      } else {
        console.log(`  [${i}] @type: ${parsed['@type']}, @id: ${parsed['@id'] || 'n/a'}`);
        if (parsed['@type'] === 'HowTo') {
          console.log(`      step count: ${parsed.step?.length ?? 0}`);
        }
      }
    } catch (e) {
      console.log(`  [${i}] parse error: ${e.message}`);
    }
  }
}

await browser.close();
