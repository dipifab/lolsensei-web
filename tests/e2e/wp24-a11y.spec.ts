/**
 * WP24 TASK-4-019 — Accessibility: 0 critical+serious violations.
 *
 * Copre 3 schermate chiave:
 *   1. Banner cookie (visible pre-consent)
 *   2. PreferenceCenter (modal aperto)
 *   3. Settings privacy page (DSR dashboard JWT-gated)
 *
 * Scope: single-project (desktop-chrome) per evitare duplicazione su webkit
 * che non e' in cache CI/local, coerente con wp18-visual.spec.ts pattern.
 *
 * Policy triage: violazioni pre-esistenti (non WP24) vengono escluse via
 * `exclude` selectors sui componenti WP24 target. Se la suite trova blocker
 * NON WP24, tracciare come debt (MN-05) invece di fixare in scope Fase 4.
 */

import { test } from '@playwright/test';
import { expectNoCriticalViolations } from './helpers/a11y';

test.beforeEach(({}, testInfo) => {
  test.skip(
    testInfo.project.name !== 'desktop-chrome',
    'WP24 a11y tests sono single-project (desktop-chrome Chromium).',
  );
});

test.describe('@wp24 a11y — WCAG 2.1 AA', () => {
  test('banner cookie post-hydration: 0 critical+serious', async ({ page, context }) => {
    await context.clearCookies();
    await page.goto('/en/');
    await page.waitForLoadState('networkidle');
    // Aspetta che il banner sia mounted
    await page.locator('[role="dialog"][aria-labelledby="cookie-banner-title"]').waitFor({
      state: 'visible',
      timeout: 5000,
    });

    await expectNoCriticalViolations(page, {
      include: '[role="dialog"][aria-labelledby="cookie-banner-title"]',
    });
  });

  test('PreferenceCenter modale: 0 critical+serious', async ({ page, context }) => {
    await context.clearCookies();
    await page.goto('/en/');
    await page.waitForLoadState('networkidle');

    // Apre il PreferenceCenter via Customize
    await page.getByRole('button', { name: /Customize/i }).click();
    await page.locator('[role="dialog"][aria-modal="true"]').waitFor({
      state: 'visible',
      timeout: 5000,
    });

    await expectNoCriticalViolations(page, {
      include: '[role="dialog"][aria-modal="true"]',
    });
  });

  test('settings/privacy DSR dashboard: 0 critical+serious', async ({ page }) => {
    // JWT stub per bypassare redirect /en/
    await page.addInitScript(() => {
      try {
        localStorage.setItem('jwt', 'fake.jwt.token');
      } catch {
        // SSR-safe guard
      }
    });
    // Mock endpoint DSR per evitare chiamate backend reali al mount
    await page.route('**/api/user/data-export', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ profile: {}, subscriptions: [], consent_history: [], ai_usage: [] }),
      });
    });

    await page.goto('/en/settings/privacy');
    await page.waitForLoadState('networkidle');
    // Page ha h1 con title settings.privacy
    await page.locator('main h1').first().waitFor({ state: 'visible', timeout: 5000 });

    await expectNoCriticalViolations(page, { include: 'main' });
  });
});
