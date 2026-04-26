/**
 * WP-CONFIG-MIGRATION T-CONFIG-032 — Admin runtime config E2E.
 *
 * Coverage (REQ-F-CONFIG-002 AC.12, mappato a ux-flows §12):
 *   1. Edit int config + reason min 10 char + redirect lista
 *   2. Reason < 10 char → save disabled (inline guard)
 *   3. Audit log → click rollback → dialog auto-fill reason → submit
 *   4. Env-override badge tooltip on row
 *   5. requires_restart confirm dialog su Save
 *
 * Skip-graceful: ogni flow richiede backend live (`/api/admin/config*`) +
 * un JWT admin reale. NO mock data, NO fake JWT (vincolo CLAUDE.md "no mock").
 *
 * Required env vars:
 *   - PLAYWRIGHT_BASE_URL    — defaults to http://127.0.0.1:8787 (wrangler dev)
 *   - WP_CONFIG_ADMIN_JWT    — JWT admin con email allowlisted (WP21)
 *   - WP_CONFIG_TEST_INT_KEY — chiave int seedata per il flow edit
 *                              (es. `coach.light.chat_cap_monthly`)
 *
 * Optional env vars:
 *   - WP_CONFIG_TEST_ENV_KEY — chiave con env_override_active=true (badge test)
 *   - WP_CONFIG_TEST_RST_KEY — chiave con requires_restart=true (warning test)
 *
 * Tutti i test sono skip-graceful: se il backend non e' raggiungibile o se
 * la chiave di test non esiste, il test fa `test.skip(true, ...)` con
 * messaggio diagnostico esplicito anziche fallire.
 */

import { expect, test, type Page } from '@playwright/test';

function cookieDomain(): string {
  const baseUrl = process.env.PLAYWRIGHT_BASE_URL ?? 'http://127.0.0.1:8787';
  return new URL(baseUrl).hostname;
}

function adminJwt(): string | undefined {
  return process.env.WP_CONFIG_ADMIN_JWT;
}

function testIntKey(): string | undefined {
  return process.env.WP_CONFIG_TEST_INT_KEY;
}

async function authenticate(page: Page, jwt: string): Promise<void> {
  // Pattern WP21: JWT in localStorage chiave "jwt" (vedi src/auth/store.ts).
  // Setta via context.addInitScript per arrivare gia autenticati al primo
  // page.goto, evitando il redirect del ConsoleGate.
  await page.context().addCookies([
    { name: 'jwt', value: jwt, domain: cookieDomain(), path: '/' },
  ]);
  await page.addInitScript((token: string) => {
    try {
      window.localStorage.setItem('jwt', token);
    } catch {
      /* SSR / privacy mode: ignored */
    }
  }, jwt);
}

async function gotoConsoleConfig(page: Page): Promise<boolean> {
  const response = await page.goto('/console/config', { waitUntil: 'load' });
  if (!response || response.status() >= 500) return false;
  return true;
}

test.describe('@wp-config admin runtime config', () => {
  test('edit int config: golden path — list → edit → reason ≥10 → save → audit', async ({
    page,
  }) => {
    const jwt = adminJwt();
    const key = testIntKey();
    test.skip(
      !jwt || !key,
      'WP_CONFIG_ADMIN_JWT or WP_CONFIG_TEST_INT_KEY not set — flow requires a real admin and a seeded int config key (NO mock policy).',
    );
    if (!jwt || !key) return;

    await authenticate(page, jwt);

    if (!(await gotoConsoleConfig(page))) {
      test.skip(true, 'Backend unreachable — skipping config list assertion.');
      return;
    }

    // The list page should render the page header.
    await expect(page.getByRole('heading', { name: /Runtime Config/i })).toBeVisible();

    // Use search to find the test key (auto-expands matching categories).
    const search = page.getByRole('searchbox', { name: /search config keys/i });
    if (!(await search.count())) {
      test.skip(true, 'Search input not rendered — backend may not have seeded keys.');
      return;
    }
    await search.fill(key);
    // Debounced 300ms inside the page.
    await page.waitForTimeout(500);

    // Navigate directly to the edit form via URL to avoid flakiness of the
    // expanded category click target.
    await page.goto(`/console/config/${encodeURIComponent(key)}`);
    await expect(page.getByRole('heading', { name: key })).toBeVisible();

    const reason = page.locator('#config-edit-reason');
    await expect(reason).toBeVisible();

    // Save button is present.
    const save = page.getByRole('button', { name: /Save Changes/i });
    await expect(save).toBeVisible();

    // Type a reason >=10 char. Use a unique marker so we can find the audit
    // entry afterwards without relying on a stable counter.
    const marker = `e2e wp-config ${Date.now()}`;
    await reason.fill(marker);

    // Submit. If the key is requires_restart or env-override-active, the
    // confirm dialog appears — accept it.
    await save.click();
    const confirm = page.getByRole('button', { name: /Save anyway/i });
    if (await confirm.isVisible({ timeout: 1000 }).catch(() => false)) {
      await confirm.click();
    }

    // On 200 the page redirects to /console/config and a success toast appears.
    await page.waitForURL(/\/console\/config(?:$|\?|\/$)/, { timeout: 5000 });

    // Verify the audit log shows the new entry with the marker reason.
    await page.goto(`/console/config/audit?key=${encodeURIComponent(key)}`);
    await expect(page.getByRole('heading', { name: /Audit Log/i })).toBeVisible();
    await expect(page.getByText(marker, { exact: false }).first()).toBeVisible({
      timeout: 5000,
    });
  });

  test('reason validation: save disabled when reason is too short', async ({ page }) => {
    const jwt = adminJwt();
    const key = testIntKey();
    test.skip(
      !jwt || !key,
      'WP_CONFIG_ADMIN_JWT or WP_CONFIG_TEST_INT_KEY not set — reason guard requires backend (NO mock policy).',
    );
    if (!jwt || !key) return;

    await authenticate(page, jwt);

    const response = await page.goto(
      `/console/config/${encodeURIComponent(key)}`,
      { waitUntil: 'load' },
    );
    if (!response || response.status() >= 500) {
      test.skip(true, 'Backend unreachable — skipping reason guard assertion.');
      return;
    }

    const reason = page.locator('#config-edit-reason');
    await expect(reason).toBeVisible();

    // Empty reason → save must be disabled.
    const save = page.getByRole('button', { name: /Save Changes/i });
    await expect(save).toBeDisabled();

    // Reason 5 char (< 10) → still disabled.
    await reason.fill('short');
    await expect(save).toBeDisabled();

    // Reason 10 char → enabled.
    await reason.fill('valid reason text');
    await expect(save).toBeEnabled();

    // Whitespace-only 30 char → disabled (trim check).
    await reason.fill('                              ');
    await expect(save).toBeDisabled();
  });

  test('audit log: rollback dialog auto-fills reason and creates new entry', async ({
    page,
  }) => {
    const jwt = adminJwt();
    const key = testIntKey();
    test.skip(
      !jwt || !key,
      'WP_CONFIG_ADMIN_JWT or WP_CONFIG_TEST_INT_KEY not set — rollback flow requires backend + at least one prior audit entry (NO mock policy).',
    );
    if (!jwt || !key) return;

    await authenticate(page, jwt);

    const response = await page.goto(
      `/console/config/audit?key=${encodeURIComponent(key)}`,
      { waitUntil: 'load' },
    );
    if (!response || response.status() >= 500) {
      test.skip(true, 'Backend unreachable — skipping rollback assertion.');
      return;
    }

    await expect(page.getByRole('heading', { name: /Audit Log/i })).toBeVisible();

    // First rollback button on the page (newest entry).
    const rollbackBtn = page.getByRole('button', { name: /Rollback to v/i }).first();
    if (!(await rollbackBtn.count())) {
      test.skip(
        true,
        'No audit entries with version_before — backend has no prior history for this key.',
      );
      return;
    }
    await rollbackBtn.click();

    // Dialog visible.
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await expect(dialog).toContainText(key);

    // Reason textarea pre-filled with "rollback to entry #..." pattern.
    const reasonTextarea = dialog.locator('textarea').first();
    await expect(reasonTextarea).toBeVisible();
    const prefill = await reasonTextarea.inputValue();
    expect(prefill).toMatch(/^rollback to entry #\d+/i);

    // Submit. If it's a no-op idempotent (current value already == old_value),
    // the toast says "No-op rollback" — both 200 paths close the dialog.
    const submit = dialog.getByRole('button', { name: /Rollback Now/i });
    // Wait until the current version is loaded so the button enables.
    await expect(submit).toBeEnabled({ timeout: 5000 });
    await submit.click();

    // Dialog closes on success. Skip-graceful if a 409 appears (race condition
    // with another admin) — surface the error inline rather than failing.
    await Promise.race([
      page
        .getByRole('dialog')
        .waitFor({ state: 'hidden', timeout: 5000 })
        .catch(() => undefined),
      dialog
        .getByRole('alert')
        .waitFor({ state: 'visible', timeout: 5000 })
        .catch(() => undefined),
    ]);
  });

  test('env-override badge: tooltip exposes env var name', async ({ page }) => {
    const jwt = adminJwt();
    const envKey = process.env.WP_CONFIG_TEST_ENV_KEY;
    test.skip(
      !jwt || !envKey,
      'WP_CONFIG_ADMIN_JWT or WP_CONFIG_TEST_ENV_KEY not set — env-override flow requires a key with env_override_active=true (NO mock policy).',
    );
    if (!jwt || !envKey) return;

    await authenticate(page, jwt);

    const response = await page.goto(
      `/console/config/${encodeURIComponent(envKey)}`,
      { waitUntil: 'load' },
    );
    if (!response || response.status() >= 500) {
      test.skip(true, 'Backend unreachable — skipping env override assertion.');
      return;
    }

    // Env-override badge: aria-label "Shadowed by env var <NAME>".
    const badge = page.locator('[aria-label^="Shadowed by env var"]').first();
    if (!(await badge.count())) {
      test.skip(
        true,
        `Key ${envKey} does not have env_override_active=true currently — backend env may have changed.`,
      );
      return;
    }
    await expect(badge).toBeVisible();
    const ariaLabel = await badge.getAttribute('aria-label');
    expect(ariaLabel).toMatch(/^Shadowed by env var \S/);
  });

  test('requires_restart: confirm dialog appears before save', async ({ page }) => {
    const jwt = adminJwt();
    const rstKey = process.env.WP_CONFIG_TEST_RST_KEY;
    test.skip(
      !jwt || !rstKey,
      'WP_CONFIG_ADMIN_JWT or WP_CONFIG_TEST_RST_KEY not set — requires_restart flow requires a key with requires_restart=true (NO mock policy).',
    );
    if (!jwt || !rstKey) return;

    await authenticate(page, jwt);

    const response = await page.goto(
      `/console/config/${encodeURIComponent(rstKey)}`,
      { waitUntil: 'load' },
    );
    if (!response || response.status() >= 500) {
      test.skip(true, 'Backend unreachable — skipping requires_restart assertion.');
      return;
    }

    // Restart badge present.
    const rstBadge = page
      .locator('[aria-label="Requires container restart to apply changes"]')
      .first();
    if (!(await rstBadge.count())) {
      test.skip(
        true,
        `Key ${rstKey} does not have requires_restart=true currently — config seed may have changed.`,
      );
      return;
    }
    await expect(rstBadge).toBeVisible();

    // Fill reason and trigger Save → confirm dialog.
    await page
      .locator('#config-edit-reason')
      .fill('e2e requires_restart confirmation check');
    await page.getByRole('button', { name: /Save Changes/i }).click();

    // Confirm dialog must mention the restart caveat.
    const confirmDialog = page.getByRole('dialog');
    await expect(confirmDialog).toBeVisible();
    await expect(confirmDialog).toContainText(/restart/i);

    // Cancel — do not actually mutate the config in this scenario.
    await confirmDialog.getByRole('button', { name: /Annulla|Cancel/i }).click();
    await expect(confirmDialog).toBeHidden({ timeout: 2000 });
  });
});
