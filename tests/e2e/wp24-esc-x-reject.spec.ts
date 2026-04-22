import { expect, test } from '@playwright/test';

// WP24 TASK-4-011 — Dismissal tramite X button (banner) e ESC (PreferenceCenter).
// DoD:
//  (1) click sulla X nel banner => trattato come rejectAll (scope technical-only);
//  (2) ESC sul PreferenceCenter modale chiude il modal (banner non supporta ESC
//      come reject implicito — e' un nudge pattern conservativo, WP24 SPEC §5).

const BANNER_SELECTOR = '[role="dialog"][aria-labelledby="cookie-banner-title"]';

test.describe('@wp24 dismissal via X and ESC', () => {
  test('X button in banner rejects non-essential and dismisses banner', async ({ page, context }) => {
    await context.clearCookies();

    await page.goto('/en/');
    const banner = page.locator(BANNER_SELECTOR);
    await expect(banner).toBeVisible();

    // Il primo button con aria-label dentro il banner e' la X di chiusura.
    // I link "Privacy"/"Cookies" sono <a>, quindi button[aria-label] isola la X.
    const closeButton = banner.locator('button[aria-label]').first();
    await expect(closeButton).toBeVisible();
    await closeButton.click();

    await expect(banner).toHaveCount(0);

    const cookies = await context.cookies();
    const consent = cookies.find((c) => c.name === 'lolsensei_consent');
    expect(consent).toBeTruthy();

    const parsed = JSON.parse(decodeURIComponent(consent!.value));
    expect(parsed.scope.technical).toBe(true);
    expect(parsed.scope.analytics).toBe(false);
    expect(parsed.scope.marketing).toBe(false);
  });

  test('ESC closes PreferenceCenter modal without persisting changes', async ({ page, context }) => {
    await context.clearCookies();

    await page.goto('/en/');
    const banner = page.locator(BANNER_SELECTOR);
    await expect(banner).toBeVisible();

    await page.getByRole('button', { name: /Customize/i }).click();

    const modal = page.locator('[role="dialog"][aria-modal="true"]');
    await expect(modal).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(modal).toHaveCount(0);

    // Nessun consent persistito: il banner resta visibile.
    await expect(banner).toBeVisible();
    const cookies = await context.cookies();
    expect(cookies.find((c) => c.name === 'lolsensei_consent')).toBeUndefined();
  });
});
