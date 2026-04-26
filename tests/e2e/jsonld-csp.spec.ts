/**
 * WP30 TASK-WP30-F4-02 — JSON-LD inline scripts coverage by CSP (DEC-OP-007).
 *
 * Verifica empirica REQ-F-030-008 / REQ-NF-030-004:
 *   - Le pagine WP30 (summoner + tier list) emettono `<script type="application/ld+json">`.
 *   - Lo script post-build `compute-csp-hashes.mjs` cattura quegli script via
 *     regex `SCRIPT_INLINE_RE` (r.42) e calcola hash SHA-256.
 *   - L'hash viene injected in `INLINE_SCRIPT_HASHES` (`generated/csp-hashes.ts`)
 *     -> consumed da `middleware.ts` -> spread in `script-src`.
 *   - Risultato: CSP enforce non blocca i JSON-LD inline.
 *
 * Strategia test:
 *   1. Tier list (`/en/tier-list`, `/it/tier-list`): sempre disponibile (route
 *      pubblica, no PII, nessuna seed handle richiesta).
 *   2. Summoner page (`/{lang}/summoner/<region>/<handle>`): richiede una
 *      handle reale (NO mock — REQ-NF inviolabile). Skip-graceful se la env
 *      `WP30_SEED_SUMMONER_URL` non e' settata.
 *
 * Compat:
 *   - Si legge ENTRAMBI gli header (`Content-Security-Policy` enforce E
 *     `Content-Security-Policy-Report-Only`); il test passa se almeno uno
 *     contiene gli hash. Pattern allineato a security-design.md §3.2.
 *   - Header CSP e' stampato dal middleware SolidStart, quindi presente
 *     anche su `wrangler dev` (no skip-on-localdev come fa wp24-security-headers).
 */

import { expect, test, type APIResponse } from '@playwright/test';
import { createHash } from 'node:crypto';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function readCspHeader(res: APIResponse): string {
  const enforce = res.headers()['content-security-policy'];
  const reportOnly = res.headers()['content-security-policy-report-only'];
  // Concatena entrambi: il test cerca substring, quindi la presenza in
  // uno qualsiasi dei due e' sufficiente. Se nessuno e' presente, ritorna
  // stringa vuota e la successiva expect() fallisce esplicitamente.
  return [enforce ?? '', reportOnly ?? ''].join(' || ');
}

function computeSha256Base64(body: string): string {
  return createHash('sha256').update(body, 'utf-8').digest('base64');
}

const INLINE_LDJSON_RE = /<script\b[^>]*\btype="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;

function extractInlineLdJson(html: string): string[] {
  const out: string[] = [];
  let m: RegExpExecArray | null;
  // Reset lastIndex to be safe across reuses.
  INLINE_LDJSON_RE.lastIndex = 0;
  while ((m = INLINE_LDJSON_RE.exec(html)) !== null) {
    out.push(m[1] ?? '');
  }
  return out;
}

// ---------------------------------------------------------------------------
// Fixtures (always-on tier list)
// ---------------------------------------------------------------------------

const TIER_LIST_URLS = ['/en/tier-list', '/it/tier-list'] as const;

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

test.describe('@wp30 jsonld-csp coverage', () => {
  for (const path of TIER_LIST_URLS) {
    test(`tier list ${path}: every JSON-LD inline script has hash in CSP`, async ({ request }) => {
      const res = await request.get(path);
      // Tier list may emit 200 (success) or 503 (insufficient_sample is still
      // 200 — only a true upstream failure yields 503). In both cases CSP must
      // be present and any JSON-LD must be hashed.
      expect([200, 503]).toContain(res.status());

      const csp = readCspHeader(res);
      expect(csp, `CSP header missing on ${path}`).toContain('script-src');

      const html = await res.text();
      const scripts = extractInlineLdJson(html);
      // 503 (service_unavailable) doesn't render JSON-LD; success+sufficient
      // does. insufficient_sample also skips JSON-LD (caller-gated, see route).
      // The test only asserts on the scripts that ARE present.
      for (const body of scripts) {
        const hash = computeSha256Base64(body);
        expect(
          csp,
          `Inline JSON-LD on ${path} not allowlisted in CSP. Hash: sha256-${hash}.`,
        ).toContain(`'sha256-${hash}'`);
      }
    });
  }

  // Optional summoner probe — only when env points at a real URL.
  // Mirrors the `WP30_SEED_SUMMONER_URL` contract used by
  // `scripts/check-jsonld-live.mjs`.
  test('summoner page: every JSON-LD inline script has hash in CSP', async ({ request }) => {
    const seedPath = process.env.WP30_SEED_SUMMONER_PATH;
    test.skip(
      !seedPath,
      'WP30_SEED_SUMMONER_PATH not set — no mock allowed; skipping summoner JSON-LD CSP probe.',
    );

    // SAFETY: explicit assert so TS narrowing keeps `seedPath` non-undefined
    // below. Playwright `test.skip(...)` does not assert at the type level.
    if (!seedPath) return;

    const res = await request.get(seedPath);
    // Summoner page may legitimately return 200 (success/private/inactive)
    // or 404 (Riot not_found / region invalid) or 503 (Riot unreachable).
    // Only when status is 200 we expect JSON-LD; for 404/503 the test just
    // verifies CSP header presence.
    const csp = readCspHeader(res);
    expect(csp, `CSP header missing on ${seedPath}`).toContain('script-src');

    if (res.status() === 200) {
      const html = await res.text();
      const scripts = extractInlineLdJson(html);
      for (const body of scripts) {
        const hash = computeSha256Base64(body);
        expect(
          csp,
          `Inline JSON-LD on ${seedPath} not allowlisted in CSP. Hash: sha256-${hash}.`,
        ).toContain(`'sha256-${hash}'`);
      }
    }
  });
});
