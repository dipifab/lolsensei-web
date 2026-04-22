import { expect, test } from '@playwright/test';

// WP24 TASK-4-015 — DSR flow E2E (export + delete).
// Pattern: backend mockato via page.route() per isolare il test dalla disponibilita'
// del backend reale in CI. JWT iniettato in localStorage key "jwt" via addInitScript.

const EXAMPLE_EXPORT_PAYLOAD = {
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
  consent_history: [
    {
      consent_id: '22222222-2222-4222-8222-222222222222',
      consent_type: 'site_cookies',
      scope: { technical: true, analytics: false, marketing: false },
      granted: true,
      privacy_version: '2026-04-01',
      client_platform: 'web',
      created_at: '2026-04-20T10:00:00Z',
    },
  ],
  ai_usage_aggregate: {
    total_requests: 0,
    period_start: '2026-04-01T00:00:00Z',
    period_end: '2026-04-22T00:00:00Z',
    by_model: {},
  },
};

test.describe('@wp24 DSR flow', () => {
  test.beforeEach(async ({ page }) => {
    // JWT deve essere presente prima dell'onMount() della route, che controlla getJwt()
    // e fa redirect a /en/ se assente. addInitScript garantisce esecuzione pre-bundle.
    await page.addInitScript(() => {
      try {
        localStorage.setItem('jwt', 'fake.jwt.token');
      } catch {
        // ignora ambienti privacy-restricted
      }
    });
  });

  test('export data triggers JSON download and success toast', async ({ page }) => {
    await page.route('**/api/user/data-export', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(EXAMPLE_EXPORT_PAYLOAD),
      });
    });

    await page.goto('/en/settings/privacy');

    await expect(page.getByRole('heading', { level: 1, name: /Privacy & Data/i })).toBeVisible();

    // Il client usa Blob + a.click() per scaricare il JSON.
    const downloadPromise = page.waitForEvent('download', { timeout: 10_000 });
    await page.getByRole('button', { name: /Export my data/i }).click();
    const download = await downloadPromise;

    expect(download.suggestedFilename()).toMatch(/\.json$/);

    // Toast success (role="status" per varianti non-error).
    await expect(page.locator('[role="status"]').first()).toBeVisible({ timeout: 5_000 });
  });

  test('delete flow posts DELETE, shows success toast and redirects to homepage', async ({ page }) => {
    let deleteCalled = false;
    await page.route('**/api/user/data', async (route) => {
      if (route.request().method() === 'DELETE') {
        deleteCalled = true;
        await route.fulfill({ status: 204, body: '' });
        return;
      }
      await route.continue();
    });

    await page.goto('/en/settings/privacy');

    await page.getByRole('button', { name: /Delete my account/i }).click();

    // La modal ha role="dialog" aria-modal="true" (Modal component).
    const modal = page.locator('[role="dialog"][aria-modal="true"]');
    await expect(modal).toBeVisible();

    // Input text unico dentro la modal (digita la frase di conferma).
    const confirmInput = modal.locator('input[type="text"]');
    await confirmInput.fill('DELETE_MY_ACCOUNT');

    const deleteRequest = page.waitForRequest(
      (req) => /\/api\/user\/data$/.test(req.url()) && req.method() === 'DELETE',
      { timeout: 10_000 },
    );

    // Bottone submit della modal = secondo "Delete my account" (dentro la modal).
    await modal.getByRole('button', { name: /Delete my account/i }).click();

    const req = await deleteRequest;
    expect(deleteCalled).toBe(true);
    // Il client invia Authorization Bearer col JWT di localStorage.
    expect(req.headers()['authorization']).toBe('Bearer fake.jwt.token');

    // Toast "Account anonymized." con role="status".
    await expect(page.getByText(/Account anonymized/i)).toBeVisible({ timeout: 5_000 });

    // Redirect alla homepage EN.
    await page.waitForURL(/\/en\/?$/, { timeout: 5_000 });
  });
});
