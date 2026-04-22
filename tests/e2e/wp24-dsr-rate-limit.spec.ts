import { expect, test } from '@playwright/test';

// WP24 TASK-4-018 — DSR rate limit UX.
// Prima export: 200 + download ok. Seconda export: 429 con Retry-After: 420.
// Il client formatta "Rate limited. Retry in N min." dove N = ceil(retry_after_sec / 60).

const EXPORT_PAYLOAD = {
  export_id: '33333333-3333-4333-8333-333333333333',
  generated_at: '2026-04-22T10:00:00Z',
  policy_version: '2026-04-01',
  profile: {
    user_id: '11111111-1111-4111-8111-111111111111',
    email: 'test@test.com',
    display_name: 'Test User',
    google_id: 'google-oauth2|111111111',
    region: 'EUW',
    riot_puuid: null,
    subscription_tier: 'free',
    age_confirmed_at: '2026-01-02T00:00:00Z',
    created_at: '2026-01-01T00:00:00Z',
  },
  subscriptions: [],
  consent_history: [],
  ai_usage_aggregate: {
    total_requests: 0,
    period_start: '2026-04-01T00:00:00Z',
    period_end: '2026-04-22T00:00:00Z',
    by_model: {},
  },
};

test.describe('@wp24 DSR rate limit', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      try {
        localStorage.setItem('jwt', 'fake.jwt.token');
      } catch {
        // ignora
      }
    });
  });

  test('second export within window shows rate-limit toast with formatted minutes', async ({ page }) => {
    let callCount = 0;
    await page.route('**/api/user/data-export', async (route) => {
      callCount += 1;
      if (callCount === 1) {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify(EXPORT_PAYLOAD),
        });
        return;
      }
      // Seconda chiamata: 429 con Retry-After.
      await route.fulfill({
        status: 429,
        contentType: 'application/json',
        headers: { 'Retry-After': '420' },
        body: JSON.stringify({
          detail: 'Export rate limit reached. Try again later.',
          error_code: 'DSR_EXPORT_RATE_LIMIT',
        }),
      });
    });

    await page.goto('/en/settings/privacy');

    // Primo click: download ok.
    const firstDownload = page.waitForEvent('download', { timeout: 10_000 });
    await page.getByRole('button', { name: /Export my data/i }).click();
    await firstDownload;

    // Secondo click: 429 -> toast di errore con messaggio formattato.
    // ceil(420 / 60) = 7 -> "Rate limited. Retry in 7 min."
    await page.getByRole('button', { name: /Export my data/i }).click();

    const errorToast = page.locator('[role="alert"]').filter({ hasText: /Rate limited\. Retry in 7 min\./ });
    await expect(errorToast).toBeVisible({ timeout: 5_000 });

    expect(callCount).toBe(2);
  });
});
