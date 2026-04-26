/**
 * WP30 TASK-WP30-F5-04 — Tier list page behavioural E2E.
 *
 * Verifica REQ-F-030-002, REQ-F-030-013, REQ-NF-030-008.
 *
 * Coverage:
 *   1. /en/tier-list default -> 200 (success or insufficient_sample) + filter
 *      form GET (DEC-OP-024) presente.
 *   2. /en/tier-list?role=mid -> 200 + filtro applicato (URL param consumato
 *      dal route handler, body riflette la role).
 *   3. /en/tier-list?role=mid&patch=0.0 -> 200 + insufficient_sample branch
 *      (patch impossibile -> backend risponde insufficient_sample=true) o 503
 *      service_unavailable (BE giu); in entrambi i casi noindex.
 *   4. JSON-LD ItemList presente solo su sufficient (NON insufficient).
 *
 * Strategia: NO mock, no fixture. Il backend di test/preview deve essere
 * raggiungibile. In wrangler dev senza BE -> 503 ovunque, accettato come skip.
 */

import { expect, test, type APIResponse } from '@playwright/test';

function bodyContainsItemList(html: string): boolean {
  return /<script[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?"@type"\s*:\s*"ItemList"/i.test(
    html,
  );
}

function hasFilterForm(html: string): boolean {
  // The route renders `<TierListFilters>` which uses <form method="GET">.
  // We look for any form with method=get on the page.
  return /<form[^>]*method="get"/i.test(html) || /<form[^>]*method="GET"/i.test(html);
}

function metaRobotsHasNoindex(html: string): boolean {
  const m = html.match(/<meta[^>]*name="robots"[^>]*content="([^"]*)"/i);
  return m?.[1]?.includes('noindex') ?? false;
}

function xRobotsHasNoindex(res: APIResponse): boolean {
  return (res.headers()['x-robots-tag'] ?? '').includes('noindex');
}

test.describe('@wp30 tier list E2E', () => {
  test('default /en/tier-list: 200 with filter form GET visible', async ({ request }) => {
    const res = await request.get('/en/tier-list');
    // 200 (success/insufficient) is the happy path; 503 means BE unreachable
    // and we skip-graceful.
    if (res.status() === 503) {
      test.skip(true, 'Tier list backend unavailable (503); skipping behavioural assertions.');
      return;
    }
    expect(res.status()).toBe(200);

    const html = await res.text();
    expect(hasFilterForm(html), 'Expected filter form with method=GET').toBe(true);
  });

  test('role=mid filter applied: URL param consumed', async ({ request }) => {
    const res = await request.get('/en/tier-list?role=mid');
    if (res.status() === 503) {
      test.skip(true, 'Tier list backend unavailable; skipping.');
      return;
    }
    expect(res.status()).toBe(200);
    const html = await res.text();
    // Canonical reflects role=mid (canonicalQs builder).
    const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/i)?.[1];
    expect(canonical, 'Expected canonical with role=mid').toBeTruthy();
    if (canonical) {
      const url = new URL(canonical);
      expect(url.searchParams.get('role')).toBe('mid');
    }
  });

  test('insufficient_sample branch: noindex + NO ItemList JSON-LD', async ({ request }) => {
    // patch=0.0 is structurally valid (^\d+\.\d+$) but cannot match a real
    // dataset -> backend returns insufficient_sample=true. The route stamps
    // X-Robots-Tag noindex AND skips the JSON-LD ItemList (caller-gated).
    const res = await request.get('/en/tier-list?role=mid&patch=0.0');
    if (res.status() === 503) {
      // BE 5xx / network failure (no stale cache): tier-list-api surfaces
      // service_unavailable -> route stamps 503 + noindex. Distinct from
      // PATCH_NOT_FOUND which now (MINOR-5) renders 200 + noindex + empty
      // state via the `patch_not_found` discriminant.
      expect(xRobotsHasNoindex(res)).toBe(true);
      return;
    }
    expect(res.status()).toBe(200);

    const html = await res.text();
    // Either via header OR via meta — accept both (the route stamps both on
    // insufficient_sample).
    const noindex = xRobotsHasNoindex(res) || metaRobotsHasNoindex(html);
    expect(noindex, 'Expected noindex on insufficient_sample').toBe(true);

    // ItemList must NOT be emitted on insufficient_sample.
    expect(
      bodyContainsItemList(html),
      'JSON-LD ItemList must NOT be emitted on insufficient_sample',
    ).toBe(false);
  });

  test('sufficient default: ItemList JSON-LD present (when backend has data)', async ({
    request,
  }) => {
    const res = await request.get('/en/tier-list');
    if (res.status() !== 200) {
      test.skip(true, `Tier list returned ${res.status()}; cannot validate sufficient branch.`);
      return;
    }
    const html = await res.text();
    // If the backend returned sufficient data, ItemList must be present.
    // If insufficient_sample, this test skips (the previous test covers it).
    if (metaRobotsHasNoindex(html) || xRobotsHasNoindex(res)) {
      test.skip(
        true,
        'Tier list returned insufficient_sample; covered by other test in this spec.',
      );
      return;
    }
    expect(bodyContainsItemList(html), 'JSON-LD ItemList must be emitted on sufficient').toBe(
      true,
    );
  });
});
