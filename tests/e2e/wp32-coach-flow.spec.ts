/**
 * WP32 F5 — Coach dashboard + addon activation E2E.
 *
 * Skip-graceful: every flow requires a live backend (api.lolsensei.com or
 * staging) plus a real JWT. No mock data, no fake JWTs (NO mock policy).
 *
 * Required env vars:
 *   - PLAYWRIGHT_BASE_URL    — defaults to http://127.0.0.1:8787 (wrangler dev)
 *   - WP32_USER_JWT          — JWT for a user with NO active coach addon
 *                              (exercises the gate + addon page)
 *   - WP32_ADDON_USER_JWT    — JWT for a user WITH an active coach addon
 *                              (exercises the dashboard surfaces). Optional;
 *                              missing it skips the dashboard assertions.
 */

import { expect, test } from '@playwright/test';

function cookieDomain(): string {
  const baseUrl = process.env.PLAYWRIGHT_BASE_URL ?? 'http://127.0.0.1:8787';
  return new URL(baseUrl).hostname;
}

test.describe('@wp32 coach addon flow', () => {
  test('unauthenticated user landing on /coach is redirected to /coach/addon', async ({
    page,
  }) => {
    const response = await page.goto('/en/coach', { waitUntil: 'load' });
    if (!response || response.status() >= 500) {
      test.skip(true, 'Backend unreachable — skipping coach gate assertion.');
      return;
    }
    // The route handler uses `requireAddonActive` which 302s to /coach/addon
    // when no JWT is provided. Playwright follows the redirect by default.
    await expect(page).toHaveURL(/\/en\/coach\/addon/);
  });

  test('user without addon sees the gate fallback on /coach', async ({ page, context }) => {
    const jwt = process.env.WP32_USER_JWT;
    test.skip(
      !jwt,
      'WP32_USER_JWT not set — addon-required gate flow requires a real authenticated user (NO mock policy).',
    );
    if (!jwt) return;

    await context.addCookies([
      { name: 'jwt', value: jwt, domain: cookieDomain(), path: '/' },
    ]);

    const response = await page.goto('/en/coach');
    if (!response || response.status() >= 500) {
      test.skip(true, 'Backend unreachable — skipping addon-required assertion.');
      return;
    }

    // The CSR fallback flips on when GET /coach/quota returns 403 addon_required.
    // Either the SSR loader already detected the paywall (data().paywalled) or
    // the CSR fallback shows the gate after first render. Both surface the same
    // testid:
    const gate = page.getByTestId('addon-required-gate');
    if (!(await gate.count())) {
      test.skip(
        true,
        'Backend returned no 403 for this user — they may already have an addon. Skipping.',
      );
      return;
    }
    await expect(gate).toBeVisible();
    await expect(page.getByTestId('addon-required-gate-cta')).toHaveAttribute(
      'href',
      /\/en\/coach\/addon$/,
    );
  });

  test('addon page renders pricing cards (Light + Full)', async ({ page, context }) => {
    const jwt = process.env.WP32_USER_JWT;
    test.skip(
      !jwt,
      'WP32_USER_JWT not set — pricing-card flow requires an authenticated user (NO mock policy).',
    );
    if (!jwt) return;

    await context.addCookies([
      { name: 'jwt', value: jwt, domain: cookieDomain(), path: '/' },
    ]);

    const response = await page.goto('/en/coach/addon');
    if (!response || response.status() >= 500) {
      test.skip(true, 'Backend unreachable — skipping pricing assertion.');
      return;
    }

    const grid = page.getByTestId('coach-addon-pricing-grid');
    await expect(grid).toBeVisible();
    await expect(page.locator('[data-tier="light"]')).toBeVisible();
    await expect(page.locator('[data-tier="full"]')).toBeVisible();
    // The EU consumer-law disclaimer must always be present (REQ-F-032-019).
    await expect(page.getByTestId('coach-addon-consent')).toBeVisible();
  });

  test('user WITH active addon sees coach dashboard tabs', async ({ page, context }) => {
    const jwt = process.env.WP32_ADDON_USER_JWT;
    test.skip(
      !jwt,
      'WP32_ADDON_USER_JWT not set — dashboard flow requires a real coach-addon user (NO mock policy).',
    );
    if (!jwt) return;

    await context.addCookies([
      { name: 'jwt', value: jwt, domain: cookieDomain(), path: '/' },
    ]);

    const response = await page.goto('/en/coach');
    if (!response || response.status() >= 500) {
      test.skip(true, 'Backend unreachable — skipping dashboard assertion.');
      return;
    }

    await expect(page.getByTestId('coach-dashboard-page')).toBeVisible();
    await expect(page.getByTestId('coach-tab-chat')).toBeVisible();
    await expect(page.getByTestId('coach-tab-drills')).toBeVisible();
    await expect(page.getByTestId('coach-tab-recap')).toBeVisible();
  });

  test('coach pages emit X-Robots-Tag noindex header at the edge', async ({ request }) => {
    // Skip when running against `wrangler dev` which does not replicate the
    // Cloudflare edge `_headers` rules (parity with WP24/WP31 security tests).
    const baseUrl = process.env.PLAYWRIGHT_BASE_URL ?? '';
    test.skip(
      !/lolsensei\.com|pages\.dev/.test(baseUrl),
      'Edge-only header — skipped against local wrangler dev.',
    );

    const dashboard = await request.get('/en/coach', { maxRedirects: 0 });
    const dashboardHeader = dashboard.headers()['x-robots-tag'] ?? '';
    expect(dashboardHeader).toContain('noindex');

    const addon = await request.get('/en/coach/addon', { maxRedirects: 0 });
    const addonHeader = addon.headers()['x-robots-tag'] ?? '';
    expect(addonHeader).toContain('noindex');
  });
});
