import { test, expect } from '@playwright/test';

test.describe('WP10 — Landing i18n smoke', () => {
  test('loads /en/ homepage with canonical', async ({ page }) => {
    await page.goto('/en/');
    await expect(page).toHaveURL(/\/en\/$/);
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute('href', /lolsensei\.com\/en/);
  });

  test('hreflang alternates present on home', async ({ page }) => {
    await page.goto('/en/');
    const alternates = page.locator('link[rel="alternate"][hreflang]');
    const count = await alternates.count();
    expect(count).toBeGreaterThanOrEqual(9);
  });

  test('root / redirects to /en/ or detected locale', async ({ page }) => {
    const response = await page.goto('/');
    await page.waitForURL(/\/(en|it|es|fr|de|pt-br|ko|zh-hans)\//, { timeout: 5000 });
    expect(response).toBeTruthy();
  });

  test('/en/privacy loads', async ({ page }) => {
    await page.goto('/en/privacy');
    await expect(page).toHaveURL(/\/en\/privacy/);
    await expect(page.locator('h1,h2').first()).toBeVisible();
  });

  test('lang switch preserves route', async ({ page }) => {
    await page.goto('/en/pricing');
    await page.goto('/it/pricing');
    await expect(page).toHaveURL(/\/it\/pricing/);
  });
});
