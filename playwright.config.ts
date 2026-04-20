import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright config — WP10 base + WP19 P2 mobile-first projects.
 *
 * - `baseURL` defaults to Vite dev server (5173); CI overrides via PLAYWRIGHT_BASE_URL.
 * - Two projects cover the responsive matrix required by P2 specs:
 *   - `mobile-chrome` — iPhone 13 viewport (390x844) for tap-target + H1 readability E2E.
 *   - `desktop-chrome` — 1280x800 desktop baseline kept for backwards-compat with wp10.spec.ts.
 */
export default defineConfig({
  testDir: './tests/e2e',
  timeout: 30_000,
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  reporter: 'html',
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? 'http://localhost:5173',
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
    command: 'npm run dev -- --port 5173',
    url: process.env.PLAYWRIGHT_BASE_URL ?? 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
