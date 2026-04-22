import { expect, test } from '@playwright/test';

// WP24 TASK-4-017 — Cross-user safety per DSR export.
// Garanzie verificate lato frontend:
//  1) Il payload scaricato contiene esclusivamente il profilo dello user target
//     (nessun altro user_id trapela nei campi serializzati).
//  2) La request HTTP al backend NON trasporta user_id esterni: lo user e' identificato
//     via JWT (Authorization: Bearer). Nessun query-string ne' body con user_id estranei.

const TARGET_USER_ID = '11111111-1111-4111-8111-111111111111';

const EXPORT_PAYLOAD = {
  export_id: '33333333-3333-4333-8333-333333333333',
  generated_at: '2026-04-22T10:00:00Z',
  policy_version: '2026-04-01',
  profile: {
    user_id: TARGET_USER_ID,
    email: 'target@test.com',
    display_name: 'Target User',
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

test.describe('@wp24 DSR cross-user safety', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      try {
        localStorage.setItem('jwt', 'fake.jwt.token');
      } catch {
        // ignora
      }
    });
  });

  test('download payload contains only target user data, no foreign user_ids', async ({ page }) => {
    await page.route('**/api/user/data-export', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(EXPORT_PAYLOAD),
      });
    });

    await page.goto('/en/settings/privacy');

    const downloadPromise = page.waitForEvent('download', { timeout: 10_000 });
    await page.getByRole('button', { name: /Export my data/i }).click();
    const download = await downloadPromise;

    const path = await download.path();
    expect(path).toBeTruthy();

    // Leggiamo il JSON scaricato via fs (sync import top-level non supportato in Playwright,
    // usiamo dynamic import per TypeScript-friendliness).
    const { readFile } = await import('node:fs/promises');
    const raw = await readFile(path, 'utf-8');
    const parsed = JSON.parse(raw) as typeof EXPORT_PAYLOAD;

    expect(parsed.profile.user_id).toBe(TARGET_USER_ID);

    // Nessun altro user_id UUID deve apparire nel testo serializzato.
    // Regex UUID v4 generica; filtriamo fuori quello target e verifichiamo che non
    // ci siano altri UUID "user_id-like". (consent_id/export_id sono entita' separate,
    // quindi cerchiamo specificamente occorrenze testuali di "user_id":"<uuid>").
    const userIdRefs = [...raw.matchAll(/"user_id"\s*:\s*"([0-9a-f-]+)"/gi)].map((m) => m[1]);
    expect(userIdRefs.every((u) => u === TARGET_USER_ID)).toBe(true);
  });

  test('export request carries JWT and no foreign user_id in URL/body', async ({ page }) => {
    await page.route('**/api/user/data-export', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(EXPORT_PAYLOAD),
      });
    });

    await page.goto('/en/settings/privacy');

    const reqPromise = page.waitForRequest(
      (req) => /\/api\/user\/data-export/.test(req.url()),
      { timeout: 10_000 },
    );
    await page.getByRole('button', { name: /Export my data/i }).click();
    const req = await reqPromise;

    // GET non ha body applicativo.
    expect(req.method()).toBe('GET');
    expect(req.postData()).toBeNull();

    // URL pulito: path /api/user/data-export senza query string contenente user_id.
    const url = new URL(req.url());
    expect(url.pathname).toMatch(/\/api\/user\/data-export$/);
    expect(url.searchParams.has('user_id')).toBe(false);

    // Autenticazione via JWT, non via user_id esterno.
    expect(req.headers()['authorization']).toBe('Bearer fake.jwt.token');
  });
});
