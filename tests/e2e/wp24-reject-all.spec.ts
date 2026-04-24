import { expect, test } from '@playwright/test';

// WP24 TASK-4-009 — Reject non-essential: solo technical=true.
// DoD: scope analytics=false, marketing=false, technical=true; banner dismesso.

const BANNER_SELECTOR = '[role="dialog"][aria-labelledby="cookie-banner-title"]';

test.describe('@wp24 reject non-essential flow', () => {
  test('click "Reject non-essential" sets technical-only scope and dismisses banner', async ({ page, context }) => {
    await context.clearCookies();

    await page.goto('/en/');
    const banner = page.locator(BANNER_SELECTOR);
    await expect(banner).toBeVisible();

    await page.getByRole('button', { name: 'Reject non-essential', exact: true }).click();

    await expect(banner).toHaveCount(0);

    const cookies = await context.cookies();
    const consent = cookies.find((c) => c.name === 'lolsensei_consent');
    expect(consent).toBeTruthy();

    const parsed = JSON.parse(decodeURIComponent(consent!.value));
    expect(parsed.scope.technical).toBe(true);
    expect(parsed.scope.analytics).toBe(false);
    expect(parsed.scope.marketing).toBe(false);
  });
});
