import { expect, test } from '@playwright/test';

// WP24 TASK-4-007 — Banner post-hydration + assenza nel markup SSR.
// Verifichiamo due proprieta' complementari:
//  (a) dopo hydration il banner e' visibile entro networkidle;
//  (b) l'HTML emesso dal server (raw request, pre-hydration) NON contiene gia'
//      il dialog del banner: il client-only store decide se mostrarlo in base
//      allo stato dei cookie. Evita FOUC su utenti che hanno gia' consentito.

const BANNER_SELECTOR = '[role="dialog"][aria-labelledby="cookie-banner-title"]';

test.describe('@wp24 banner post-hydration', () => {
  test('banner is visible shortly after hydration (networkidle)', async ({ page, context }) => {
    await context.clearCookies();

    await page.goto('/en/');
    await page.waitForLoadState('networkidle');

    const banner = page.locator(BANNER_SELECTOR);
    await expect(banner).toBeVisible({ timeout: 500 });
  });

  test('SSR HTML response does not already contain the banner markup', async ({ request }) => {
    const res = await request.get('/en/');
    expect(res.ok()).toBeTruthy();

    const body = await res.text();
    // Il banner e' montato client-side. Il markup SSR non deve contenere
    // l'aria-labelledby target, altrimenti significherebbe che il dialog e'
    // renderizzato lato server anche per utenti con consenso gia' valido.
    expect(body).not.toContain('cookie-banner-title');
  });
});
