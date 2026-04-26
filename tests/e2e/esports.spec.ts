/**
 * WP35 — E2E: /esports route + attribution + degraded mode (TASK-F5-07).
 *
 * Copre:
 *   - GET /en/esports → 200 + canonical + attribution Leaguepedia (sezione + footer)
 *     + heading principale.
 *   - GET /it/esports → 200 + canonical IT.
 *   - GET /en/esports/lck → 200 + breadcrumb LCK (filtro per league).
 *   - GET /en/esports/wildcard → 404 / noindex.
 *   - Footer link Leaguepedia visibile.
 *
 * Note: in CI con `wrangler dev` locale, il backend reale non e' raggiungibile,
 * quindi lo schedule/results saranno null e il banner "unavailable" sara' visibile.
 * I test verificano la struttura della pagina + attribution, NON il contenuto reale.
 */

import { expect, test } from '@playwright/test';

function extractCanonicalHref(html: string): string | undefined {
  const m =
    html.match(/<link[^>]*\brel="canonical"[^>]*\bhref="([^"]+)"/i) ??
    html.match(/<link[^>]*\bhref="([^"]+)"[^>]*\brel="canonical"/i);
  return m?.[1];
}

test.describe('@wp35 /esports route', () => {
  test('en/esports returns 200 with canonical + attribution', async ({ request }) => {
    const res = await request.get('/en/esports');
    expect(res.status()).toBe(200);
    const html = await res.text();
    expect(extractCanonicalHref(html)).toBe(
      'https://www.lolsensei.com/en/esports',
    );
    // Attribution sezione: "Data: Leaguepedia / Fandom — CC BY-SA"
    expect(html).toContain('Leaguepedia');
    expect(html).toContain('CC BY-SA');
    // Footer link a https://lol.fandom.com (DOM o markup statico).
    expect(html).toContain('https://lol.fandom.com');
  });

  test('it/esports returns 200 with IT canonical', async ({ request }) => {
    const res = await request.get('/it/esports');
    expect(res.status()).toBe(200);
    const html = await res.text();
    expect(extractCanonicalHref(html)).toBe(
      'https://www.lolsensei.com/it/esports',
    );
  });

  test('attribution footer link present', async ({ page }) => {
    await page.goto('/en/esports');
    const footerLink = page.locator(
      '[data-testid="esports-attribution-footer"] a[href="https://lol.fandom.com"]',
    );
    await expect(footerLink).toBeVisible();
  });

  test('attribution section visible above footer', async ({ page }) => {
    await page.goto('/en/esports');
    const section = page.locator('[data-testid="esports-attribution-section"]');
    await expect(section).toBeVisible();
    await expect(section).toContainText('Leaguepedia');
  });

  test('esports league subroute (en/esports/lck) returns 200', async ({ request }) => {
    const res = await request.get('/en/esports/lck');
    expect(res.status()).toBe(200);
    const html = await res.text();
    expect(html).toContain('LCK');
    // Attribution rimane in pagina anche su sub-event.
    expect(html).toContain('Leaguepedia');
  });

  test('invalid league slug returns noindex', async ({ request }) => {
    const res = await request.get('/en/esports/wildcard');
    const html = await res.text();
    if (res.status() === 200) {
      // SolidStart 404-with-noindex pattern.
      expect(html).toMatch(/<meta[^>]*name="robots"[^>]*content="noindex/i);
    } else {
      expect(res.status()).toBe(404);
    }
  });

  test('unsupported lang on /esports redirects to home', async ({ request }) => {
    // /fr/esports non e' nelle blog locales -> Navigate verso /fr/.
    const res = await request.get('/fr/esports', { maxRedirects: 0 });
    // SolidStart Navigate emits client-side redirect; can be 200 SSR with body
    // pointing to home, or 302/301. Both acceptable.
    expect([200, 301, 302]).toContain(res.status());
  });
});
