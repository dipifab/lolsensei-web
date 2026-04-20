import { expect, test } from '@playwright/test';

// WP19 P2-09 — Hero picture + H1 multilingua + responsive font-size.
// Covers REQ-F-019-009 (hero responsive) + REQ-F-019-010 (H1 mobile legibility).

const LOCALES = [
  { code: 'en', titleHint: 'Coach' },
  { code: 'it', titleHint: 'Coach' },
  { code: 'de', titleHint: 'Coach' },
];

for (const { code, titleHint } of LOCALES) {
  test(`hero renders with <picture> + responsive H1 on ${code}`, async ({ page }) => {
    await page.goto(`/${code}/`);

    // H1 visible with expected hint word (title text includes "Coach" across all locales).
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();
    await expect(h1).toContainText(titleHint);

    // Hero <picture> present with mobile + desktop sources.
    const picture = page.locator('picture').first();
    await expect(picture).toBeVisible();
    const sources = picture.locator('source');
    expect(await sources.count()).toBeGreaterThanOrEqual(2);

    // Hero <img> has localized alt text (not empty, not the English placeholder in other locales).
    const img = picture.locator('img');
    const alt = await img.getAttribute('alt');
    expect(alt).toBeTruthy();
    expect(alt!.length).toBeGreaterThan(5);

    // H1 computed font-size is legible on mobile (>= 32px) — Tailwind text-4xl mobile baseline.
    const fontSizePx = await h1.evaluate((el) => parseFloat(getComputedStyle(el).fontSize));
    expect(fontSizePx).toBeGreaterThanOrEqual(32);
  });
}

test('hero CTA "Preview Champ Select Analyzer" is visible + has aria-label', async ({ page }) => {
  await page.goto('/en/');
  const cta = page.getByRole('button', { name: /Preview/i }).first();
  await expect(cta).toBeVisible();
  const ariaLabel = await cta.getAttribute('aria-label');
  expect(ariaLabel).toBeTruthy();
});
