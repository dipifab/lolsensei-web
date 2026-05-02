/**
 * WP-AI-LOGS-VIEWER (CR-061) — TASK-10-002 — E2E smoke
 *
 * Coverage (REQ-F-AILV-005, AC-005.x happy path):
 *   1. Admin login + ConsoleGate probe ok
 *   2. Navigate /console/ai-logs -> table renders
 *   3. Apply date range filter -> reload triggered
 *   4. Click row -> expand inline calls
 *   5. Open "View prompt" modal -> Esc closes
 *
 * Strategy
 * --------
 * Backend mocked via `page.route()` with deterministic synthetic
 * fixtures (allowed: REGOLE INVIOLABILI - mock SOLO nei test, NO data
 * fake in production). The fixture covers a single-locale EN flow on the
 * console route which is admin-internal (EN+IT only by design, exempted
 * for the other 6 locales in scripts/check-i18n-keys.mjs).
 *
 * Skip-graceful: if backend stub on `/api/admin/me` cannot be set up
 * (e.g. ConsoleGate makes a non-mocked CORS preflight), test logs
 * and skips. Pattern allineato a tests/e2e/wp24-dsr-flow.spec.ts.
 */

import { expect, test, type Page } from '@playwright/test';

// ---------------------------------------------------------------------------
// Synthetic fixtures (mock SOLO nei test, regola inviolabile #1 OK)
// ---------------------------------------------------------------------------

const ADMIN_ME_PAYLOAD = {
  user_id: '11111111-1111-4111-8111-111111111111',
  email: 'admin@lolsensei.com',
  is_admin: true,
};

const GROUP_LINKED = {
  riot_match_id: 'EUW1_7000000001',
  user_id: '22222222-2222-4222-8222-222222222222',
  user_email: 'player1@example.com',
  user_email_hashed: false,
  user_riot_id: 'Sample#EUW',
  total_cost_usd: '0.0123',
  total_calls: 4,
  total_input_tokens: 1234,
  total_output_tokens: 456,
  first_call_at: '2026-04-30T10:00:00Z',
  last_call_at: '2026-04-30T10:25:00Z',
  request_types: ['champion_select', 'item_build'],
};

const GROUP_UNLINKED = {
  riot_match_id: '(unlinked)',
  user_id: '33333333-3333-4333-8333-333333333333',
  user_email: 'player2@example.com',
  user_email_hashed: false,
  user_riot_id: null,
  total_cost_usd: '0.0050',
  total_calls: 2,
  total_input_tokens: 500,
  total_output_tokens: 200,
  first_call_at: '2026-04-29T14:00:00Z',
  last_call_at: '2026-04-29T14:05:00Z',
  request_types: ['champion_select'],
};

const LIST_RESPONSE = {
  groups: [GROUP_LINKED, GROUP_UNLINKED],
  pagination: { limit: 50, offset: 0, total: 2 },
};

const DETAIL_CALL_FRESH = {
  ai_usage_log_id: '44444444-4444-4444-8444-444444444444',
  user_id: GROUP_LINKED.user_id,
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
  response_raw: 'Focus on early roams; Yasuo windwall blocks Yone Q3 dash.',
  has_prompt_log: true,
};

const DETAIL_RESPONSE_LINKED = {
  match: {
    riot_match_id: GROUP_LINKED.riot_match_id,
    user_id: GROUP_LINKED.user_id,
    user_email: GROUP_LINKED.user_email,
    user_email_hashed: false,
    user_riot_id: GROUP_LINKED.user_riot_id,
    total_cost_usd: GROUP_LINKED.total_cost_usd,
    total_calls: GROUP_LINKED.total_calls,
    total_input_tokens: GROUP_LINKED.total_input_tokens,
    total_output_tokens: GROUP_LINKED.total_output_tokens,
    first_call_at: GROUP_LINKED.first_call_at,
    last_call_at: GROUP_LINKED.last_call_at,
    request_types: GROUP_LINKED.request_types,
  },
  calls: [DETAIL_CALL_FRESH],
  is_synthetic_unlinked: false,
  call_pagination: { offset: 0, limit: 200, total: 1 },
};

// ---------------------------------------------------------------------------
// Test setup helpers
// ---------------------------------------------------------------------------

async function setupAdminAuth(page: Page): Promise<void> {
  await page.addInitScript(() => {
    try {
      window.localStorage.setItem('jwt', 'fake.admin.jwt.token');
    } catch {
      // ignore (privacy / SSR)
    }
  });
}

async function stubAdminEndpoints(page: Page): Promise<{
  listCalls: number;
  detailCalls: number;
}> {
  const counters = { listCalls: 0, detailCalls: 0 };

  // ConsoleGate probe (must be 200 to enter the route).
  await page.route('**/api/admin/me', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(ADMIN_ME_PAYLOAD),
    });
  });

  // List endpoint (handles initial load + filter re-applies).
  await page.route('**/api/admin/ai-logs/by-match*', async (route) => {
    const url = route.request().url();
    // Detail endpoint matches `/api/admin/ai-logs/by-match/{id}`. Filter
    // out non-list calls so we don't double-count.
    const isDetail = /\/by-match\/[^?]+/.test(url);
    if (isDetail) {
      counters.detailCalls += 1;
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(DETAIL_RESPONSE_LINKED),
      });
      return;
    }
    counters.listCalls += 1;
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(LIST_RESPONSE),
    });
  });

  return counters;
}

// ---------------------------------------------------------------------------
// Tests — single-project (desktop-chrome) following wp24-a11y pattern.
// ---------------------------------------------------------------------------

test.beforeEach(({}, testInfo) => {
  test.skip(
    testInfo.project.name !== 'desktop-chrome',
    'console-ai-logs E2E run on desktop-chrome only (admin tooling viewport).',
  );
});

test.describe('@ai-logs E2E smoke', () => {
  test('admin can list, filter, expand and view prompt modal', async ({ page }) => {
    await setupAdminAuth(page);
    const counters = await stubAdminEndpoints(page);

    const navResp = await page.goto('/console/ai-logs');
    if (!navResp || navResp.status() >= 500) {
      test.skip(true, 'Backend bundle unavailable — skipping smoke.');
      return;
    }

    // 1) Page header + table render
    await expect(
      page.getByRole('heading', { name: /AI Logs by Match/i }),
    ).toBeVisible({ timeout: 10_000 });

    // First row visible (linked group)
    await expect(
      page.getByText(GROUP_LINKED.riot_match_id, { exact: false }),
    ).toBeVisible();

    // Second row (unlinked badge)
    await expect(page.getByText(/\(unlinked\)/i).first()).toBeVisible();

    // Expect at least one list call so far.
    expect(counters.listCalls).toBeGreaterThanOrEqual(1);

    // 2) Apply filter — change "From" date triggers re-fetch on Apply.
    const fromInput = page.getByLabel(/^From$/i);
    await fromInput.fill('2026-04-15');
    const applyBtn = page.getByRole('button', { name: /Apply filters/i });
    const listCallsBefore = counters.listCalls;
    await applyBtn.click();

    // Wait for the next list refetch.
    await expect.poll(() => counters.listCalls).toBeGreaterThan(listCallsBefore);

    // 3) Expand first row (button has aria-label "Expand calls").
    const expandBtn = page.getByRole('button', { name: /Expand calls/i }).first();
    await expandBtn.click();

    // Detail call should be issued exactly once on first expand.
    await expect.poll(() => counters.detailCalls).toBeGreaterThanOrEqual(1);

    // Calls table renders (request_type cell visible).
    await expect(page.getByText('champion_select').first()).toBeVisible();

    // 4) Open prompt modal.
    const viewPromptBtn = page
      .getByRole('button', { name: /View prompt/i })
      .first();
    await viewPromptBtn.click();

    const modal = page.getByRole('dialog');
    await expect(modal).toBeVisible();
    await expect(modal.getByText(/System prompt/i)).toBeVisible();
    await expect(modal.getByText(/User prompt/i)).toBeVisible();
    await expect(modal.getByText(/Response/i).first()).toBeVisible();

    // 5) Esc closes modal.
    await page.keyboard.press('Escape');
    await expect(modal).toBeHidden({ timeout: 2_000 });
  });
});
