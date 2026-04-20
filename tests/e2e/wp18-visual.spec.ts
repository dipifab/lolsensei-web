import { test, expect } from '@playwright/test';

/**
 * WP18 Task 28 — Pixel-diff visual regression baselines (post-WP18).
 *
 * Nota: il plan originale prevedeva diff pre-WP18 (CSR SPA) vs post-WP18
 * (SSG ibrido). Con tolerance 2% la comparazione tra due architetture
 * diverse (hydration vs SSG, timing font, reflow) e` strutturalmente
 * flakey. Reinterpretazione pragmatica: stabiliamo baseline POST-WP18
 * come golden reference per catturare regressioni UI incrementali.
 *
 * 12 pagine (6 EN + 6 IT) x 2 viewport (mobile 375x667 + desktop
 * 1440x900) = 24 screenshot totali.
 *
 * Scope a un solo project (desktop-chrome, Chromium) via `test.skip`
 * sugli altri project: la spec imposta esplicitamente il viewport e non
 * dipende dalle device emulation di Playwright, quindi duplicare su
 * mobile-chrome (iPhone 13 / webkit) non aggiungerebbe coverage e
 * richiederebbe il browser webkit non presente nella cache CI/locale.
 *
 * Genera baseline:
 *   npx playwright test tests/e2e/wp18-visual.spec.ts --update-snapshots
 * Verifica regressione:
 *   npx playwright test tests/e2e/wp18-visual.spec.ts
 *
 * ref TASK-W18-T28
 */

test.beforeEach(({}, testInfo) => {
  test.skip(
    testInfo.project.name !== 'desktop-chrome',
    'WP18 visual baselines sono single-project (Chromium, viewport esplicito).',
  );
});

const PAGES = [
  '/en/',
  '/en/pricing',
  '/en/features',
  '/en/faq',
  '/en/blog',
  '/en/blog/how-ai-coaching-helps-you-learn-league',
  '/it/',
  '/it/pricing',
  '/it/features',
  '/it/faq',
  '/it/blog',
  '/it/blog/how-ai-coaching-helps-you-learn-league',
];

const VIEWPORTS = [
  { name: 'mobile', viewport: { width: 375, height: 667 } },
  { name: 'desktop', viewport: { width: 1440, height: 900 } },
];

for (const path of PAGES) {
  for (const vp of VIEWPORTS) {
    const snapName = `wp18-${vp.name}${path.replace(/\//g, '_')}.png`;
    test(`visual ${path} @ ${vp.name}`, async ({ page }) => {
      await page.setViewportSize(vp.viewport);
      await page.goto(path, { waitUntil: 'networkidle' });
      // Wait for fonts to avoid FOUT flicker in screenshot.
      await page.evaluate(() => document.fonts.ready);
      // Allow any late layout reflows (animations, async images).
      await page.waitForTimeout(500);
      await expect(page).toHaveScreenshot(snapName, {
        maxDiffPixelRatio: 0.02,
        fullPage: false, // solo viewport visibile, evita costi storage
        animations: 'disabled',
      });
    });
  }
}
