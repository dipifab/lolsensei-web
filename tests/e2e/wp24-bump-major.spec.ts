import { expect, test } from '@playwright/test';

// WP24 TASK-4-013 — Re-prompt su bump MAJOR di privacy_version.
// DoD:
//  - cookie con stessa MAJOR del runtime => banner NON visibile;
//  - cookie con MAJOR diversa (storedMajor=0 vs currentMajor=1) => banner
//    riappare al reload.
// Nota: non alteriamo `VITE_PRIVACY_POLICY_VERSION` a runtime (fuori scope
// del test E2E). Validiamo la logica di comparazione lato client invertendo
// il payload del cookie: il risultato equivale a un bump MAJOR server-side.

const BANNER_SELECTOR = '[role="dialog"][aria-labelledby="cookie-banner-title"]';

type ConsentCookie = {
  scope: { technical: boolean; analytics: boolean; marketing: boolean };
  privacy_version: string;
  last_updated_at: string;
};

function buildConsentCookie(version: string): ConsentCookie {
  return {
    scope: { technical: true, analytics: true, marketing: true },
    privacy_version: version,
    last_updated_at: new Date().toISOString(),
  };
}

test.describe('@wp24 privacy version MAJOR bump', () => {
  test('banner hidden on matching MAJOR, re-appears on MAJOR mismatch', async ({ page, context }) => {
    await context.clearCookies();

    // 1) Stessa MAJOR del runtime (default "1.0.0") => nessun banner.
    await context.addCookies([
      {
        name: 'lolsensei_consent',
        value: encodeURIComponent(JSON.stringify(buildConsentCookie('1.0.0'))),
        domain: '127.0.0.1',
        path: '/',
      },
      {
        name: 'lolsensei_anon',
        value: '11111111-2222-4333-8444-555555555555',
        domain: '127.0.0.1',
        path: '/',
      },
    ]);

    await page.goto('/en/');
    await page.waitForLoadState('networkidle');
    await expect(page.locator(BANNER_SELECTOR)).toHaveCount(0);

    // 2) Simuliamo un bump MAJOR lato server ribaltando la situazione:
    //    storedMajor=0 < currentMajor=1 => client deve ri-prompt.
    await context.clearCookies();
    await context.addCookies([
      {
        name: 'lolsensei_consent',
        value: encodeURIComponent(JSON.stringify(buildConsentCookie('0.9.0'))),
        domain: '127.0.0.1',
        path: '/',
      },
      {
        name: 'lolsensei_anon',
        value: '11111111-2222-4333-8444-555555555555',
        domain: '127.0.0.1',
        path: '/',
      },
    ]);

    await page.reload();
    await page.waitForLoadState('networkidle');
    await expect(page.locator(BANNER_SELECTOR)).toBeVisible();
  });
});
