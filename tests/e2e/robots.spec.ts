/**
 * WP30 TASK-WP30-F5-06 — robots.txt allow rules + sitemap reference.
 *
 * Verifica REQ-F-030-010 (DEC-OP-019). Il file `public/robots.txt` viene
 * servito as-is da SolidStart static assets. Asseriamo:
 *   1. /robots.txt -> 200
 *   2. Contiene `Allow: /*\/summoner/*`
 *   3. Contiene `Allow: /*\/tier-list`
 *   4. Contiene la riga `Sitemap: https://www.lolsensei.com/sitemap.xml`
 *
 * Il sitemap stesso e' validato da `scripts/check-seo-hreflang.mjs` (gate CI).
 */

import { expect, test } from '@playwright/test';

test.describe('@wp30 robots.txt allow rules', () => {
  test('GET /robots.txt -> 200 with WP30 allow rules + sitemap', async ({ request }) => {
    const res = await request.get('/robots.txt');
    expect(res.status()).toBe(200);

    const text = await res.text();
    expect(text).toContain('Allow: /*/summoner/*');
    expect(text).toContain('Allow: /*/tier-list');
    // Sitemap reference (absolute URL required by spec)
    expect(text).toMatch(/Sitemap:\s*https:\/\/www\.lolsensei\.com\/sitemap\.xml/);
  });

  test('robots.txt content-type is text/plain', async ({ request }) => {
    const res = await request.get('/robots.txt');
    expect(res.status()).toBe(200);
    const ct = res.headers()['content-type'] ?? '';
    expect(ct).toMatch(/text\/plain/i);
  });
});
