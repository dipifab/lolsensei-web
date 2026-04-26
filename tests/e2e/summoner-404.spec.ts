/**
 * WP30 TASK-WP30-F5-02 — Summoner 404 body + CTA + meta robots.
 *
 * Verifica REQ-F-030-014, REQ-NF-030-008. Complementare a
 * `wp30-noindex-404.spec.ts` (F4-03) che copre header X-Robots-Tag e <meta>
 * sui branch region invalid / handle malformed. Qui ci concentriamo sui
 * **contenuti del body** del 404 (variant data-attr, CTA tier-list, CTA home,
 * `<NotFoundSummoner>` rendered) e su un caso Riot 404 quando seed disponibile.
 *
 * Scenari deterministici (no Riot upstream):
 *   1. region invalid -> 404 + body data-variant="region" + 2 CTA + meta noindex
 *   2. handle malformed -> 404 + body data-variant="malformed" + 2 CTA
 *
 * Scenario opzionale (NO mock; skip-graceful):
 *   3. Riot 404 (account non esistente) -> 404 + body data-variant="riot404"
 *      Richiede `WP30_SEED_NOT_FOUND_PATH` env (path completo verso un Riot ID
 *      garantito non-existing).
 */

import { expect, test } from '@playwright/test';

function extractDataVariant(html: string): string | undefined {
  const m = html.match(/<main[^>]*\bdata-variant="([^"]+)"/i);
  return m?.[1];
}

function metaRobotsHasNoindex(html: string): boolean {
  const m = html.match(/<meta[^>]*name="robots"[^>]*content="([^"]*)"/i);
  return m?.[1]?.includes('noindex') ?? false;
}

test.describe('@wp30 summoner 404 body', () => {
  test('region invalid -> 404, body variant=region, 2 CTAs, meta noindex', async ({
    request,
  }) => {
    const res = await request.get('/en/summoner/xx99/anyhandle-tag');
    expect(res.status()).toBe(404);

    const html = await res.text();
    expect(extractDataVariant(html)).toBe('region');

    // CTA: tier-list link + home link (both present in EN+IT body)
    expect(html).toMatch(/href="\/en\/tier-list"/);
    expect(html).toMatch(/href="\/en\/"/);

    // Defensive: noindex meta also present (header check is in F4-03 spec)
    expect(metaRobotsHasNoindex(html)).toBe(true);
  });

  test('handle malformed -> 404, body variant=malformed, 2 CTAs', async ({ request }) => {
    const res = await request.get('/en/summoner/euw1/handlewithoutdash');
    expect(res.status()).toBe(404);

    const html = await res.text();
    expect(extractDataVariant(html)).toBe('malformed');

    expect(html).toMatch(/href="\/en\/tier-list"/);
    expect(html).toMatch(/href="\/en\/"/);
    expect(metaRobotsHasNoindex(html)).toBe(true);
  });

  test('Riot 404 -> body variant=riot404 (skip-graceful)', async ({ request }) => {
    const seedPath = process.env.WP30_SEED_NOT_FOUND_PATH;
    test.skip(
      !seedPath,
      'WP30_SEED_NOT_FOUND_PATH not set; need a real-but-non-existing Riot ID. NO mock.',
    );
    if (!seedPath) return;

    const res = await request.get(seedPath);
    if (res.status() !== 404) {
      test.skip(
        true,
        `Expected 404 from seed, got ${res.status()}. The Riot ID may have been registered since seed config; cannot validate riot404 branch.`,
      );
      return;
    }
    const html = await res.text();
    expect(extractDataVariant(html)).toBe('riot404');
    expect(metaRobotsHasNoindex(html)).toBe(true);
  });
});
