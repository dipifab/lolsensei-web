/**
 * WP-AI-LOGS-VIEWER (CR-061) — TASK-10-002 — A11y axe-core gate
 *
 * Coverage (REQ-F-AILV-005 AC-005.5.bis WCAG 2.1 AA):
 *   1. Modal "View prompt" passes axe-core scan with 0 critical+serious
 *      violations on tags wcag2a + wcag2aa + best-practice.
 *   2. Focus trap: Tab cycles inside the dialog (no escape to body).
 *   3. Esc closes modal.
 *
 * Strategy
 * --------
 * Backend mocked via `page.route()`; admin auth via JWT in localStorage
 * + `/api/admin/me` stub. axe-core scoped to `[role="dialog"]` so
 * pre-existing console-shell violations (out of scope here) don't
 * interfere. Pattern allineato a tests/e2e/wp24-a11y.spec.ts.
 */

import { expect, test, type Page } from '@playwright/test';
import { expectNoCriticalViolations } from './helpers/a11y';

// ---------------------------------------------------------------------------
// Synthetic fixtures (mock SOLO nei test)
// ---------------------------------------------------------------------------

const ADMIN_ME_PAYLOAD = {
  user_id: '11111111-1111-4111-8111-111111111111',
  email: 'admin@lolsensei.com',
  is_admin: true,
};

const GROUP_FIXTURE = {
  riot_match_id: 'EUW1_7000000001',
  user_id: '22222222-2222-4222-8222-222222222222',
  user_email: 'player1@example.com',
  user_email_hashed: false,
  user_riot_id: 'Sample#EUW',
  total_cost_usd: '0.0123',
  total_calls: 1,
  total_input_tokens: 300,
  total_output_tokens: 100,
  first_call_at: '2026-04-30T10:00:00Z',
  last_call_at: '2026-04-30T10:00:00Z',
  request_types: ['champion_select'],
};

const LIST_RESPONSE = {
  groups: [GROUP_FIXTURE],
  pagination: { limit: 50, offset: 0, total: 1 },
};

const CALL_FIXTURE = {
  ai_usage_log_id: '44444444-4444-4444-8444-444444444444',
  user_id: GROUP_FIXTURE.user_id,
  request_type: 'champion_select',
  model_used: 'claude-haiku',
  cost_usd: '0.0030',
  latency_ms: 250,
  input_tokens: 300,
  output_tokens: 100,
  status: 'success',
  aborted: false,
  created_at: '2026-04-30T10:00:00Z',
  prompt_system: 'You are an AI coach helping with champion select.',
  prompt_user: 'I picked Yasuo against Yone, mid lane.',
  response_raw: 'Focus on early roams and trade windows.',
  has_prompt_log: true,
};

const DETAIL_RESPONSE = {
  match: {
    riot_match_id: GROUP_FIXTURE.riot_match_id,
    user_id: GROUP_FIXTURE.user_id,
    user_email: GROUP_FIXTURE.user_email,
    user_email_hashed: false,
    user_riot_id: GROUP_FIXTURE.user_riot_id,
    total_cost_usd: GROUP_FIXTURE.total_cost_usd,
    total_calls: GROUP_FIXTURE.total_calls,
    total_input_tokens: GROUP_FIXTURE.total_input_tokens,
    total_output_tokens: GROUP_FIXTURE.total_output_tokens,
    first_call_at: GROUP_FIXTURE.first_call_at,
    last_call_at: GROUP_FIXTURE.last_call_at,
    request_types: GROUP_FIXTURE.request_types,
  },
  calls: [CALL_FIXTURE],
  is_synthetic_unlinked: false,
  call_pagination: { offset: 0, limit: 200, total: 1 },
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

async function setupAdminContext(page: Page): Promise<void> {
  await page.addInitScript(() => {
    try {
      window.localStorage.setItem('jwt', 'fake.admin.jwt.token');
    } catch {
      // ignore
    }
  });

  await page.route('**/api/admin/me', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(ADMIN_ME_PAYLOAD),
    });
  });

  await page.route('**/api/admin/ai-logs/by-match*', async (route) => {
    const url = route.request().url();
    const isDetail = /\/by-match\/[^?]+/.test(url);
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(isDetail ? DETAIL_RESPONSE : LIST_RESPONSE),
    });
  });
}

async function openPromptModal(page: Page): Promise<void> {
  await setupAdminContext(page);
  const navResp = await page.goto('/console/ai-logs');
  if (!navResp || navResp.status() >= 500) {
    test.skip(true, 'Backend bundle unavailable — skipping a11y.');
    return;
  }

  await expect(
    page.getByRole('heading', { name: /AI Logs by Match/i }),
  ).toBeVisible({ timeout: 10_000 });

  // Expand first row to surface "View prompt" button.
  await page.getByRole('button', { name: /Expand calls/i }).first().click();
  await page.getByRole('button', { name: /View prompt/i }).first().click();

  await expect(page.getByRole('dialog')).toBeVisible();
}

// ---------------------------------------------------------------------------
// Tests — desktop-chrome single-project (allineato a wp24-a11y).
// ---------------------------------------------------------------------------

test.beforeEach(({}, testInfo) => {
  test.skip(
    testInfo.project.name !== 'desktop-chrome',
    'a11y scan is single-project (desktop-chrome Chromium).',
  );
});

test.describe('@ai-logs a11y — WCAG 2.1 AA', () => {
  test('Vedi prompt modal: 0 critical+serious axe-core violations', async ({
    page,
  }) => {
    await openPromptModal(page);

    await expectNoCriticalViolations(page, {
      include: '[role="dialog"]',
    });
  });

  test('Vedi prompt modal: Esc closes and Tab stays inside the dialog', async ({
    page,
  }) => {
    await openPromptModal(page);

    const modal = page.getByRole('dialog');

    // Cycle Tab a few times: focused element must remain inside the dialog.
    for (let i = 0; i < 5; i += 1) {
      await page.keyboard.press('Tab');
      const insideDialog = await page.evaluate(() => {
        const active = document.activeElement;
        if (!active) return false;
        const dlg = document.querySelector('[role="dialog"]');
        return Boolean(dlg && dlg.contains(active));
      });
      expect(insideDialog, `Tab #${i + 1} escaped the dialog`).toBe(true);
    }

    // Esc closes modal and returns focus to (some element on) page body.
    await page.keyboard.press('Escape');
    await expect(modal).toBeHidden({ timeout: 2_000 });
  });
});
