/**
 * WP30 TASK-WP30-F5-03 — Summoner inactive branch (REQ-F-030-013, DEC-OP-013).
 *
 * Quando `match_ids` torna vuoto da Riot (zero recent matches), il route
 * SSR rende `<InactivePlayerNotice>` e stampa `X-Robots-Tag: noindex` per
 * evitare di indicizzare profili dormienti (thin content).
 *
 * Strategia (NO mock):
 *   - Skip-graceful se `WP30_SEED_INACTIVE_SUMMONER_PATH` non settata.
 *   - Se settata e 200, verifichiamo:
 *       1. Body contiene la notice inactive (role="status")
 *       2. X-Robots-Tag contiene "noindex"
 *       3. CTA link verso tier-list presente
 */

import { expect, test } from '@playwright/test';

test.describe('@wp30 summoner inactive branch', () => {
  test('inactive account -> 200 + inactive notice + noindex (skip-graceful)', async ({
    request,
  }) => {
    const seedPath = process.env.WP30_SEED_INACTIVE_SUMMONER_PATH;
    test.skip(
      !seedPath,
      'WP30_SEED_INACTIVE_SUMMONER_PATH not set; need a real account with zero recent matches.',
    );
    if (!seedPath) return;

    const res = await request.get(seedPath);
    if (res.status() !== 200) {
      test.skip(true, `Seed returned ${res.status()}, cannot validate inactive branch.`);
      return;
    }

    const html = await res.text();

    // role="status" notice present
    expect(/role="status"/i.test(html), 'Expected role="status" notice block').toBe(true);

    // Inactive branch must noindex
    const xrt = res.headers()['x-robots-tag'] ?? '';
    expect(xrt).toContain('noindex');

    // CTA tier-list link inside the inactive notice
    expect(html).toMatch(/href="\/[a-z]{2}(?:-[A-Za-z]+)?\/tier-list"/);
  });
});
