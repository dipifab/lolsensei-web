import { expect, test, type Request } from '@playwright/test';

// WP24 TASK-4-014 — Nessun cookie analytics/marketing pre-consent.
// DoD:
//  (1) pre-consent: solo `lolsensei_anon` e' tollerato (cookie tecnico).
//      Nessun cookie analytics/marketing (es. CF beacon) deve essere settato.
//  (2) post Accept all: `lolsensei_consent` + `lolsensei_anon` presenti;
//      CF Insights beacon wiring e' runtime-dependent (enabled solo se il
//      token e' iniettato dal bundle prod), quindi la verifica del request
//      network viene annotata come informativa e non e' gate del test.

const BANNER_SELECTOR = '[role="dialog"][aria-labelledby="cookie-banner-title"]';
const ALLOWED_PRE_CONSENT = new Set(['lolsensei_anon']);
const ANALYTICS_HINTS = /(^_ga|^_gid|^_gcl|^_fbp|^_hjSession|cloudflareinsights|beacon)/i;

test.describe('@wp24 no tracking cookies pre-consent', () => {
  test('pre-consent state has no analytics/marketing cookies', async ({ page, context }) => {
    await context.clearCookies();

    await page.goto('/en/');
    await page.waitForLoadState('networkidle');

    await expect(page.locator(BANNER_SELECTOR)).toBeVisible();

    const cookies = await context.cookies();

    // `lolsensei_consent` non deve esistere pre-consent.
    expect(cookies.find((c) => c.name === 'lolsensei_consent')).toBeUndefined();

    // Cookie tracker noti: hard fail.
    const trackers = cookies.filter((c) => ANALYTICS_HINTS.test(c.name));
    expect(trackers, `tracker cookies pre-consent: ${trackers.map((c) => c.name).join(', ')}`).toHaveLength(0);

    // Cookie non in allow-list (diversi da lolsensei_consent/anon): diagnostica.
    const nonAllowListed = cookies.filter(
      (c) => !ALLOWED_PRE_CONSENT.has(c.name) && c.name !== 'lolsensei_consent',
    );
    if (nonAllowListed.length > 0) {
      test.info().annotations.push({
        type: 'info',
        description: `non-allow-listed cookies pre-consent: ${nonAllowListed.map((c) => c.name).join(', ')}`,
      });
    }
  });

  test('post accept all: analytics beacon wiring (informational)', async ({ page, context }) => {
    await context.clearCookies();

    const insightsRequests: string[] = [];
    const record = (req: Request) => {
      const url = req.url();
      if (/cloudflareinsights|beacon\.min\.js/i.test(url)) {
        insightsRequests.push(url);
      }
    };
    page.on('request', record);

    await page.goto('/en/');
    await expect(page.locator(BANNER_SELECTOR)).toBeVisible();

    await page.getByRole('button', { name: /Accept all/i }).click();
    await expect(page.locator(BANNER_SELECTOR)).toHaveCount(0);

    await page.waitForLoadState('networkidle');

    const cookies = await context.cookies();
    expect(cookies.find((c) => c.name === 'lolsensei_consent')).toBeTruthy();
    expect(cookies.find((c) => c.name === 'lolsensei_anon')).toBeTruthy();

    // CF Insights wiring dipende dall'environment (token iniettato solo in
    // prod bundle con analytics abilitato). Annotiamo senza far fallire.
    test.info().annotations.push({
      type: 'info',
      description:
        insightsRequests.length > 0
          ? `CF Insights beacon requests: ${insightsRequests.length}`
          : 'CF Insights beacon non osservato in questo env (runtime dependent).',
    });
  });
});
