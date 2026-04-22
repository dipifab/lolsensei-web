import { expect, test } from '@playwright/test';

// WP24 TASK-3-033 — Smoke E2E: banner post-hydration + security headers.
// Le 12 E2E complete (Accept/Reject/Customize/ESC/Footer/MAJOR-bump/no-cookie-pre-consent)
// sono in TASK-4-007..014 (Fase 4). Qui copriamo:
//  - Banner post-hydration visibile con 3 bottoni paritetici
//  - Link privacy + cookies nel footer
//  - Security headers Permissions-Policy + Referrer-Policy via _headers

test.describe('WP24 smoke', () => {
  test('cookie banner appears after hydration with 3 equal-weight buttons', async ({ page }) => {
    await page.goto('/en/');

    // Wait for hydration: banner dialog with aria-labelledby="cookie-banner-title"
    const banner = page.locator('[role="dialog"][aria-labelledby="cookie-banner-title"]');
    await expect(banner).toBeVisible({ timeout: 5000 });

    await expect(page.getByRole('button', { name: /Accept all/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Reject non-essential/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Customize/i })).toBeVisible();
  });

  test('banner disappears after accepting and sets lolsensei_consent cookie', async ({ page, context }) => {
    await page.goto('/en/');
    await page.getByRole('button', { name: /Accept all/i }).click();

    const banner = page.locator('[role="dialog"][aria-labelledby="cookie-banner-title"]');
    await expect(banner).toHaveCount(0);

    const cookies = await context.cookies();
    const consent = cookies.find((c) => c.name === 'lolsensei_consent');
    expect(consent).toBeTruthy();
  });

  test('security headers — Permissions-Policy + Referrer-Policy present', async ({ request }) => {
    const res = await request.get('/en/');
    const permissions = res.headers()['permissions-policy'] ?? '';
    expect(permissions).toContain('camera=()');
    // WP24 additions
    expect(permissions).toMatch(/payment=\(self\)/);
    expect(permissions).toMatch(/fullscreen=\(self\)/);

    const referrer = res.headers()['referrer-policy'] ?? '';
    expect(referrer).toContain('strict-origin');
  });

  test('CSP from middleware includes cloudflareinsights', async ({ request }) => {
    const res = await request.get('/en/');
    const csp = res.headers()['content-security-policy'] ?? '';
    expect(csp).toContain('static.cloudflareinsights.com');
    expect(csp).toContain('cloudflareinsights.com');
  });
});
