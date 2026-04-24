import { expect, test } from '@playwright/test';

// WP24 TASK-4-008 — Accept all: cookies scritti + POST /api/consent/site.
// DoD: scope completo (technical+analytics+marketing=true), anon_id UUID v4,
// banner dismesso, registrazione backend ok (status 200 o 201).
//
// Il backend reale (api.lolsensei.com) non e' raggiungibile dai runner CI
// (rete isolata, CORS preflight) e il Vite/wrangler preview non monta il
// backend: mocchiamo la route via page.route() + route.fulfill, come fanno
// gli altri test wp24-dsr-*.

const BANNER_SELECTOR = '[role="dialog"][aria-labelledby="cookie-banner-title"]';
const UUID_V4_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const MOCK_CONSENT_RESPONSE = {
  consent_id: '44444444-4444-4444-8444-444444444444',
  anonymous_id: '55555555-5555-4555-8555-555555555555',
  privacy_version: '2026-04-01',
  recorded_at: '2026-04-22T10:00:00Z',
};

test.describe('@wp24 accept all flow', () => {
  test('click "Accept all" sets cookies, dismisses banner, posts consent', async ({ page, context }) => {
    await context.clearCookies();

    // Mock del backend consent (vedi commento a inizio file).
    await page.route('**/api/consent/site', async (route) => {
      if (route.request().method() === 'POST') {
        await route.fulfill({
          status: 201,
          contentType: 'application/json',
          body: JSON.stringify(MOCK_CONSENT_RESPONSE),
        });
        return;
      }
      await route.continue();
    });

    await page.goto('/en/');
    const banner = page.locator(BANNER_SELECTOR);
    await expect(banner).toBeVisible();

    // Pre-condition: nessun cookie di consent.
    const pre = await context.cookies();
    expect(pre.find((c) => c.name === 'lolsensei_consent')).toBeUndefined();

    // Attendiamo la POST al backend in parallelo al click.
    const consentPost = page.waitForResponse(
      (r) => /\/api\/consent\/site$/.test(r.url()) && r.request().method() === 'POST',
      { timeout: 10_000 },
    );

    await page.getByRole('button', { name: /Accept all/i }).click();

    const response = await consentPost;
    expect([200, 201]).toContain(response.status());

    // Banner dismesso.
    await expect(banner).toHaveCount(0);

    // Cookie presenti e coerenti.
    const cookies = await context.cookies();
    const consent = cookies.find((c) => c.name === 'lolsensei_consent');
    const anon = cookies.find((c) => c.name === 'lolsensei_anon');

    expect(consent).toBeTruthy();
    expect(anon).toBeTruthy();
    expect(anon!.value).toMatch(UUID_V4_RE);

    const parsed = JSON.parse(decodeURIComponent(consent!.value));
    expect(parsed.scope.technical).toBe(true);
    expect(parsed.scope.analytics).toBe(true);
    expect(parsed.scope.marketing).toBe(true);
  });
});
