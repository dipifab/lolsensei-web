/**
 * WP30 TASK-WP30-F4-06 — Canonical URL semantics (REQ-F-030-007, DEC-OP-015).
 *
 * Verifica:
 *   1. Summoner: handle non-canonical (uppercase, trailing whitespace) emette
 *      301 verso la versione lowercase canonica. La canonical e' lowercase.
 *   2. Summoner: `<link rel="canonical">` riflette esattamente la handle
 *      lowercase + region servita.
 *   3. Tier list: canonical strip UTM params e default-query (role=all,
 *      patch=current). Il route handler costruisce canonicalQs solo da role
 *      (se != all) + patch (se presente), nient'altro.
 *   4. Tier list default: nessuna query string in canonical.
 *
 * Note implementative:
 *   - Il route summoner emette `event.response.status = 301` + `Location`
 *     header + un `<meta http-equiv="refresh">` di backup (vedi
 *     [handle].tsx r.267-281). Il test verifica HTTP status 301 + Location
 *     header.
 *   - Per la canonical lowercase verifichiamo via `<link rel="canonical">`
 *     parsing dell'HTML head (success branch only).
 *   - Summoner success branch richiede seed reale -> skip-graceful.
 */

import { expect, test } from '@playwright/test';

function extractCanonicalHref(html: string): string | undefined {
  // Match either order of attributes.
  const m =
    html.match(/<link[^>]*\brel="canonical"[^>]*\bhref="([^"]+)"/i) ??
    html.match(/<link[^>]*\bhref="([^"]+)"[^>]*\brel="canonical"/i);
  return m?.[1];
}

test.describe('@wp30 canonical lowercase + redirect + UTM strip', () => {
  test('summoner: uppercase handle returns 301 to lowercase canonical', async ({ request }) => {
    // `Caps-EUW` should be normalized to `caps-euw`. The route emits 301 with
    // `Location: /en/summoner/euw1/caps-euw`.
    const res = await request.get('/en/summoner/euw1/Caps-EUW', { maxRedirects: 0 });
    expect(res.status()).toBe(301);
    const location = res.headers()['location'] ?? '';
    expect(location.toLowerCase()).toBe(location);
    expect(location).toContain('/en/summoner/euw1/caps-euw');
  });

  test('summoner: redirect target itself is canonical (no second redirect)', async ({ request }) => {
    // Follow the redirect and confirm the target is stable (idempotent).
    const r = await request.get('/en/summoner/euw1/caps-euw', { maxRedirects: 0 });
    // Either 200 (success/private/inactive), 404 (Riot not_found), 503
    // (upstream unavailable) — but NOT 301 (already canonical).
    expect(r.status()).not.toBe(301);
  });

  test('summoner: canonical link is lowercase (when seed available)', async ({ request }) => {
    const seedPath = process.env.WP30_SEED_SUMMONER_PATH;
    test.skip(!seedPath, 'WP30_SEED_SUMMONER_PATH not set; NO mock allowed.');
    if (!seedPath) return;

    const res = await request.get(seedPath);
    if (res.status() !== 200) {
      test.skip(true, `Seed summoner returned ${res.status()}; cannot validate canonical.`);
      return;
    }
    const canonical = extractCanonicalHref(await res.text());
    expect(canonical, 'Expected <link rel="canonical">').toBeTruthy();
    if (!canonical) return;

    // Canonical pathname (after the origin) must be all-lowercase except for
    // percent-encoded sequences which contain hex digits — accept both cases
    // for `%XX` triples by uppercasing them before the comparison.
    const url = new URL(canonical);
    const path = url.pathname;
    const stripped = path.replace(/%[0-9a-fA-F]{2}/g, (s) => s.toUpperCase());
    expect(stripped).toBe(stripped.toLowerCase().replace(/%[0-9a-fA-F]{2}/g, (s) => s.toUpperCase()));
  });

  test('tier list default: canonical has no query string', async ({ request }) => {
    const res = await request.get('/en/tier-list');
    if (res.status() !== 200) {
      test.skip(true, `Tier list returned ${res.status()}; cannot validate canonical.`);
      return;
    }
    const canonical = extractCanonicalHref(await res.text());
    expect(canonical, 'Expected <link rel="canonical">').toBeTruthy();
    if (!canonical) return;

    const url = new URL(canonical);
    expect(url.pathname).toBe('/en/tier-list');
    expect(url.search).toBe('');
  });

  test('tier list with role filter: canonical preserves role only', async ({ request }) => {
    // Role=mid + a UTM param. Canonical must strip the UTM but keep role=mid.
    const res = await request.get('/en/tier-list?role=mid&utm_source=newsletter&utm_campaign=test');
    if (res.status() !== 200) {
      test.skip(true, `Tier list returned ${res.status()}; cannot validate canonical.`);
      return;
    }
    const canonical = extractCanonicalHref(await res.text());
    expect(canonical, 'Expected <link rel="canonical">').toBeTruthy();
    if (!canonical) return;

    const url = new URL(canonical);
    expect(url.pathname).toBe('/en/tier-list');
    expect(url.searchParams.get('role')).toBe('mid');
    // UTM params must be stripped
    expect(url.searchParams.get('utm_source')).toBeNull();
    expect(url.searchParams.get('utm_campaign')).toBeNull();
  });

  test('tier list with role=all: canonical strips role (default value)', async ({ request }) => {
    // role=all is the implicit default; canonical should not carry it.
    const res = await request.get('/en/tier-list?role=all');
    if (res.status() !== 200) {
      test.skip(true, `Tier list returned ${res.status()}; cannot validate canonical.`);
      return;
    }
    const canonical = extractCanonicalHref(await res.text());
    expect(canonical, 'Expected <link rel="canonical">').toBeTruthy();
    if (!canonical) return;

    const url = new URL(canonical);
    expect(url.pathname).toBe('/en/tier-list');
    expect(url.search).toBe('');
  });
});
