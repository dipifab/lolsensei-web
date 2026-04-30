/**
 * WP30 TASK-WP30-F4-04 — Hreflang reciprocity on WP30 routes (REQ-F-030-009).
 *
 * Verifica che:
 *   - `/en/tier-list` emette `<link rel="alternate" hreflang="it" href=".../it/tier-list">`.
 *   - `/it/tier-list` emette il reciproco verso EN.
 *   - x-default punta a EN (DEC-OP-030, default locale = en).
 *   - Le URL hreflang risolvono 200 (no broken alternates).
 *
 * Note implementative:
 *   - `<HreflangCluster>` emette tutti i SUPPORTED_LOCALES (8 lingue) +
 *     `x-default`. Il test si limita alla coppia EN/IT che e' il required
 *     reciproco a livello business per WP30 (le altre 6 sono EN-fallback i18n).
 *   - Per la summoner page la verifica reciproca richiede una seed handle
 *     reale; skip-graceful via WP30_SEED_SUMMONER_PATH (NO mock).
 *   - Tier list e' deterministica (route pubblica, no Riot call necessario);
 *     in branch `service_unavailable` (HTTP 503) il `<HreflangCluster>` NON
 *     viene renderizzato, quindi il test accetta solo 200 e altrimenti
 *     skip-graceful.
 */

import { expect, test } from '@playwright/test';

const HREFLANG_RE = /<link[^>]*\brel="alternate"[^>]*\bhreflang="([^"]*)"[^>]*\bhref="([^"]*)"/gi;
const HREFLANG_REVERSED_RE = /<link[^>]*\bhref="([^"]*)"[^>]*\bhreflang="([^"]*)"/gi;

function extractHreflang(html: string): Map<string, string> {
  const map = new Map<string, string>();

  HREFLANG_RE.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = HREFLANG_RE.exec(html)) !== null) {
    map.set(m[1]!, m[2]!);
  }

  // Some renderers emit attributes in the opposite order; cover hreflang-after-href too.
  HREFLANG_REVERSED_RE.lastIndex = 0;
  while ((m = HREFLANG_REVERSED_RE.exec(html)) !== null) {
    if (!map.has(m[2]!)) map.set(m[2]!, m[1]!);
  }
  return map;
}

test.describe('@wp30 seo-hreflang reciprocity', () => {
  test('tier list: EN <-> IT reciprocal hreflang + x-default -> EN', async ({ request }) => {
    const enRes = await request.get('/en/tier-list');
    const itRes = await request.get('/it/tier-list');

    if (enRes.status() !== 200 || itRes.status() !== 200) {
      test.skip(
        true,
        `Tier list backend unreachable (en=${enRes.status()}, it=${itRes.status()}); cannot validate hreflang.`,
      );
      return;
    }

    const enHtml = await enRes.text();
    const itHtml = await itRes.text();

    const enLinks = extractHreflang(enHtml);
    const itLinks = extractHreflang(itHtml);

    // Reciprocity EN -> IT
    expect(enLinks.has('it'), 'EN page must link to IT alternate').toBe(true);
    expect(enLinks.get('it')).toContain('/it/tier-list');

    // Reciprocity IT -> EN
    expect(itLinks.has('en'), 'IT page must link to EN alternate').toBe(true);
    expect(itLinks.get('en')).toContain('/en/tier-list');

    // x-default -> EN (DEC-OP-030)
    expect(enLinks.has('x-default')).toBe(true);
    expect(enLinks.get('x-default')).toContain('/en/tier-list');
    expect(itLinks.has('x-default')).toBe(true);
    expect(itLinks.get('x-default')).toContain('/en/tier-list');
  });

  test('tier list: hreflang URL resolves 200 (no broken alternates)', async ({ request }) => {
    const enRes = await request.get('/en/tier-list');
    if (enRes.status() !== 200) {
      test.skip(true, `Tier list EN returned ${enRes.status()}; cannot validate alternates.`);
      return;
    }
    const html = await enRes.text();
    const links = extractHreflang(html);
    const itHref = links.get('it');
    expect(itHref).toBeTruthy();
    if (!itHref) return;

    // Convert absolute URL back to path for the test request
    // (playwright baseURL may differ from production BASE_URL).
    const itUrl = new URL(itHref);
    const itPath = itUrl.pathname + itUrl.search;
    const r = await request.get(itPath);
    expect(r.status()).toBe(200);
  });

  test('summoner page: EN <-> IT reciprocal hreflang (when seed available)', async ({ request }) => {
    const seedPath = process.env.WP30_SEED_SUMMONER_PATH;
    test.skip(
      !seedPath,
      'WP30_SEED_SUMMONER_PATH not set — cannot validate summoner hreflang without real handle.',
    );
    if (!seedPath) return;

    // The seed path is `/<lang>/summoner/<region>/<handle>`. Construct the
    // EN/IT counterparts by swapping the locale prefix.
    const m = seedPath.match(/^\/(en|it|es|fr|de|pt-br|ko|zh-hans)\/summoner\/([^/]+)\/([^/?#]+)/);
    test.skip(!m, 'WP30_SEED_SUMMONER_PATH does not match summoner route shape.');
    if (!m) return;

    const region = m[2];
    const handle = m[3];
    const enPath = `/en/summoner/${region}/${handle}`;
    const itPath = `/it/summoner/${region}/${handle}`;

    const enRes = await request.get(enPath);
    const itRes = await request.get(itPath);
    if (enRes.status() !== 200 || itRes.status() !== 200) {
      test.skip(
        true,
        `Summoner backend unreachable (en=${enRes.status()}, it=${itRes.status()}); cannot validate hreflang.`,
      );
      return;
    }

    const enLinks = extractHreflang(await enRes.text());
    const itLinks = extractHreflang(await itRes.text());

    expect(enLinks.has('it')).toBe(true);
    expect(enLinks.get('it')).toContain(itPath);
    expect(itLinks.has('en')).toBe(true);
    expect(itLinks.get('en')).toContain(enPath);
  });
});
