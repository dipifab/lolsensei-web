import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright config — WP10 base + WP19 P2 mobile-first + WP18 Fase 7 prod-bundle smoke.
 *
 * - `baseURL` defaults to local wrangler dev (8787) serving the production bundle;
 *   CI overrides via PLAYWRIGHT_BASE_URL.
 * - Two projects cover the responsive matrix required by P2 specs:
 *   - `mobile-chrome` — iPhone 13 viewport (390x844) for tap-target + H1 readability E2E.
 *   - `desktop-chrome` — 1280x800 desktop baseline kept for backwards-compat with wp10.spec.ts.
 *
 * WP18 Task 27 note: the smoke suite in `tests/e2e/wp18-smoke.spec.ts` exercises raw
 * HTTP behaviour (status codes, redirects, X-Robots-Tag) which require the production
 * nitro bundle (cloudflare-module preset) served by wrangler dev — the Vite dev
 * server does NOT produce the same output. Run `VITE_PUBLIC_PAGES_ENABLED=true npm
 * run build` before `npm run test:e2e`.
 */
export default defineConfig({
  testDir: './tests/e2e',
  timeout: 30_000,
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  reporter: 'html',
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? 'http://127.0.0.1:8787',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'mobile-chrome',
      use: {
        ...devices['iPhone 13'],
      },
    },
    {
      name: 'desktop-chrome',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 800 },
      },
    },
  ],
  webServer: {
    // When PLAYWRIGHT_BASE_URL is set (e.g. CI hitting a preview server), skip boot.
    // Requires a prior `npm run build` so .output/ exists.
    command:
      'cross-env VITE_PUBLIC_PAGES_ENABLED=true npx wrangler dev .output/server/index.mjs --assets .output/public --port 8787',
    url: process.env.PLAYWRIGHT_BASE_URL ?? 'http://127.0.0.1:8787/en/',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
