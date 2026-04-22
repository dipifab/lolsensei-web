import { expect, test } from '@playwright/test';

// WP24 TASK-4-016 — Age gate E2E.
// Mock PATCH /api/user/age-confirmation. JWT via localStorage.

test.describe('@wp24 age gate', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      try {
        localStorage.setItem('jwt', 'fake.jwt.token');
      } catch {
        // ignora ambienti privacy-restricted
      }
    });
  });

  test('accepts confirmation, sends PATCH with Authorization, redirects home', async ({ page }) => {
    await page.route('**/api/user/age-confirmation', async (route) => {
      if (route.request().method() === 'PATCH') {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ requires_age_confirmation: false }),
        });
        return;
      }
      await route.continue();
    });

    await page.goto('/en/onboarding/confirm-age');

    await expect(page.getByRole('heading', { level: 1, name: /Before you continue/i })).toBeVisible();

    const patchRequest = page.waitForRequest(
      (req) => /\/api\/user\/age-confirmation$/.test(req.url()) && req.method() === 'PATCH',
      { timeout: 10_000 },
    );

    await page.getByRole('checkbox').check();
    await page.getByRole('button', { name: /Continue/i }).click();

    const req = await patchRequest;
    expect(req.headers()['authorization']).toBe('Bearer fake.jwt.token');
    expect(req.postData()).toBe(JSON.stringify({ confirmed: true }));

    await page.waitForURL(/\/en\/?$/, { timeout: 5_000 });
  });

  test('submit without checkbox shows error and does not call API', async ({ page }) => {
    let patchCount = 0;
    await page.route('**/api/user/age-confirmation', async (route) => {
      if (route.request().method() === 'PATCH') {
        patchCount += 1;
      }
      await route.fulfill({ status: 200, contentType: 'application/json', body: '{}' });
    });

    await page.goto('/en/onboarding/confirm-age');

    await page.getByRole('button', { name: /Continue/i }).click();

    // L'AgeGateCheckbox renderizza un <p role="alert"> col messaggio i18n.
    const alert = page.locator('[role="alert"]');
    await expect(alert).toBeVisible();
    await expect(alert).toContainText(/You must confirm your age/i);

    // Nessuna chiamata PATCH perche' la validazione client-side ha bloccato il submit.
    // Piccola attesa per catturare eventuali chiamate in flight.
    await page.waitForTimeout(500);
    expect(patchCount).toBe(0);

    // Nessun redirect: rimaniamo sulla pagina confirm-age.
    expect(page.url()).toMatch(/\/en\/onboarding\/confirm-age/);
  });
});
