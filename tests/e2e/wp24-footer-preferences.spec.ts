import { expect, test } from '@playwright/test';

// WP24 TASK-4-012 — Riapertura preferenze dal footer.
// DoD: con consent gia' dato (cookie pre-seedato), il banner non appare al
// load; il click su "Cookie preferences" nel footer riapre il PreferenceCenter.

const BANNER_SELECTOR = '[role="dialog"][aria-labelledby="cookie-banner-title"]';

test.describe('@wp24 footer preferences link', () => {
  test('footer "Cookie preferences" reopens PreferenceCenter when consent exists', async ({ page, context }) => {
    await context.clearCookies();

    const consentPayload = {
      scope: { technical: true, analytics: true, marketing: true },
      privacy_version: '1.0.0',
      last_updated_at: new Date().toISOString(),
    };

    await context.addCookies([
      {
        name: 'lolsensei_consent',
        value: encodeURIComponent(JSON.stringify(consentPayload)),
        domain: '127.0.0.1',
        path: '/',
      },
      {
        name: 'lolsensei_anon',
        value: '11111111-2222-4333-8444-555555555555',
        domain: '127.0.0.1',
        path: '/',
      },
    ]);

    await page.goto('/en/');
    await page.waitForLoadState('networkidle');

    // Banner non deve apparire per un utente con consent valido.
    await expect(page.locator(BANNER_SELECTOR)).toHaveCount(0);

    const footerButton = page.locator('footer button:has-text("Cookie preferences")');
    await expect(footerButton).toBeVisible();
    await footerButton.click();

    const modal = page.locator('[role="dialog"][aria-modal="true"]');
    await expect(modal).toBeVisible();
  });
});
