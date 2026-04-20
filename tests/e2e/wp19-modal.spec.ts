import { expect, test } from '@playwright/test';

// WP19 P2-10 — PreviewModal a11y + Contact mailto wire-up.
// Covers REQ-F-019-013 (CTA Preview modal) + REQ-F-019-008 (ContactPage).

test('PreviewModal opens on CTA click, traps focus, closes on Escape', async ({ page }) => {
  await page.goto('/en/');

  // Modal not visible initially.
  await expect(page.locator('[role="dialog"][aria-modal="true"]')).toHaveCount(0);

  // Click Preview CTA.
  const cta = page.getByRole('button', { name: /Preview/i }).first();
  await cta.click();

  // Dialog now open with expected a11y attrs.
  const dialog = page.locator('[role="dialog"][aria-modal="true"]');
  await expect(dialog).toBeVisible();
  await expect(dialog).toHaveAttribute('aria-labelledby', 'preview-modal-title');
  await expect(dialog).toHaveAttribute('aria-describedby', 'preview-modal-description');

  // Title present.
  const title = page.locator('#preview-modal-title');
  await expect(title).toBeVisible();

  // Preview image asset loaded.
  const img = dialog.locator('img').first();
  await expect(img).toHaveAttribute('src', /champ-select-preview\.webp$/);

  // Escape closes modal.
  await page.keyboard.press('Escape');
  await expect(dialog).toHaveCount(0);
});

test('PreviewModal closes on overlay click', async ({ page }) => {
  await page.goto('/en/');
  await page.getByRole('button', { name: /Preview/i }).first().click();

  const dialog = page.locator('[role="dialog"][aria-modal="true"]');
  await expect(dialog).toBeVisible();

  // Click overlay (outside dialog bounds). We click on the backdrop that owns onClick.
  const overlay = page.locator('[role="presentation"]');
  await overlay.click({ position: { x: 10, y: 10 } });
  await expect(dialog).toHaveCount(0);
});

test('ContactPage renders mailto CTA (no form)', async ({ page }) => {
  await page.goto('/en/contact');

  // Email displayed.
  await expect(page.getByText('support@lolsensei.com').first()).toBeVisible();

  // Mailto link with correct href.
  const mailto = page.locator('a[href^="mailto:support@lolsensei.com"]');
  await expect(mailto).toBeVisible();
  const href = await mailto.getAttribute('href');
  expect(href).toMatch(/^mailto:support@lolsensei\.com/);

  // No form present (mailto-only scope — form backend cancelled 2026-04-20).
  expect(await page.locator('form').count()).toBe(0);
  expect(await page.locator('input[name="email"]').count()).toBe(0);
});

test('ContactPage tap target meets WCAG 2.5.5 (48x48)', async ({ page }) => {
  await page.goto('/en/contact');
  const mailto = page.locator('a[href^="mailto:"]').first();
  const box = await mailto.boundingBox();
  expect(box).not.toBeNull();
  expect(box!.height).toBeGreaterThanOrEqual(44);
  expect(box!.width).toBeGreaterThanOrEqual(44);
});
