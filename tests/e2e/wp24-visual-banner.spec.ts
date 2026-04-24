/**
 * WP24 TASK-4-021 — Visual regression sui 3 bottoni del banner.
 *
 * DoD: stesso peso visivo (bg-primary-container paritetico) per Accept /
 * Reject / Customize. Cattura screenshot del banner in viewport desktop e
 * confronta con baseline. Update snapshot: `--update-snapshots`.
 *
 * Scope: single-project (desktop-chrome). Pattern coerente con
 * wp18-visual.spec.ts.
 */

import { expect, test } from '@playwright/test';

test.beforeEach(({}, testInfo) => {
  test.skip(
    testInfo.project.name !== 'desktop-chrome',
    'WP24 visual regression e single-project (desktop-chrome).',
  );
});

test.describe('@wp24 visual — banner 3-button parity', () => {
  test('banner screenshot matches baseline', async ({ page, context }) => {
    await context.clearCookies();
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/en/');
    await page.waitForLoadState('networkidle');

    const banner = page.locator('[role="dialog"][aria-labelledby="cookie-banner-title"]');
    await banner.waitFor({ state: 'visible', timeout: 5000 });

    // Attendi stabilita' rendering (font+layout)
    await page.waitForTimeout(300);

    await expect(banner).toHaveScreenshot('wp24-banner-desktop.png', {
      maxDiffPixelRatio: 0.01,
    });
  });

  test('three buttons equal bg/font weight', async ({ page, context }) => {
    await context.clearCookies();
    await page.goto('/en/');
    await page.waitForLoadState('networkidle');

    const banner = page.locator('[role="dialog"][aria-labelledby="cookie-banner-title"]');
    await banner.waitFor({ state: 'visible', timeout: 5000 });

    const acceptBtn = banner.getByRole('button', { name: 'Accept all', exact: true });
    const rejectBtn = banner.getByRole('button', { name: 'Reject non-essential', exact: true });
    const customizeBtn = banner.getByRole('button', { name: 'Customize', exact: true });

    // Confronta gli stili computati chiave: background-color, font-weight,
    // min-height. I 3 bottoni usano classe `bg-primary-container` + classi
    // font identiche, quindi questi valori devono coincidere.
    const extract = async (btn: ReturnType<typeof banner.getByRole>) =>
      btn.evaluate((el) => {
        const cs = window.getComputedStyle(el as HTMLElement);
        return {
          bg: cs.backgroundColor,
          fw: cs.fontWeight,
          minH: cs.minHeight,
          text: cs.color,
          tracking: cs.letterSpacing,
        };
      });

    const [a, r, c] = await Promise.all([extract(acceptBtn), extract(rejectBtn), extract(customizeBtn)]);
    expect(r).toEqual(a);
    expect(c).toEqual(a);
  });
});
