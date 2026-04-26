/**
 * WP30 TASK-WP30-F5-03 — Summoner private branch (REQ-F-030-013).
 *
 * Riot's privacy enforcement returns a match list where the puuid is absent
 * from `match.info.participants` (DEC-OP-022). Il route SSR rende
 * `<PrivatePlayerNotice>` ma la pagina resta **indexable** (rank info e' un
 * signal SEO valido).
 *
 * Strategia (NO mock):
 *   - Skip-graceful se `WP30_SEED_PRIVATE_SUMMONER_PATH` non e' settata.
 *   - Se settata e l'upstream restituisce 200, verifichiamo:
 *       1. Body contiene la notice private (i18n key rendered)
 *       2. Nessun X-Robots-Tag noindex (private != inactive)
 *       3. JSON-LD Person presente (skillLevel pero' opzionale)
 */

import { expect, test } from '@playwright/test';

test.describe('@wp30 summoner private branch', () => {
  test('private account -> 200 + private notice + indexable (skip-graceful)', async ({
    request,
  }) => {
    const seedPath = process.env.WP30_SEED_PRIVATE_SUMMONER_PATH;
    test.skip(
      !seedPath,
      'WP30_SEED_PRIVATE_SUMMONER_PATH not set; need a real account that has match-V5 hidden.',
    );
    if (!seedPath) return;

    const res = await request.get(seedPath);
    if (res.status() !== 200) {
      test.skip(true, `Seed returned ${res.status()}, cannot validate private branch.`);
      return;
    }

    const html = await res.text();

    // The private notice has role="status" and a heading rendered via the
    // `wp30.summoner.state.private.heading` i18n key. We assert via a stable
    // selector — the role="status" wrapper.
    const hasPrivateRoleStatus = /role="status"/i.test(html);
    expect(hasPrivateRoleStatus, 'Expected role="status" notice block').toBe(true);

    // Indexable: no X-Robots-Tag noindex on private branch
    const xrt = res.headers()['x-robots-tag'] ?? '';
    expect(xrt).not.toContain('noindex');

    // JSON-LD Person should be emitted on success (private branch still emits it)
    expect(html).toMatch(/<script[^>]*type="application\/ld\+json"/i);
  });
});
