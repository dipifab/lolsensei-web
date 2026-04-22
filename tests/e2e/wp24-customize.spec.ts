import { expect, test, type Request } from '@playwright/test';

// WP24 TASK-4-010 — Customize flow + lazy loading PreferenceCenter.
// DoD:
//  - click "Customize" apre modale (role="dialog" aria-modal="true");
//  - chunk PreferenceCenter caricato SOLO post-click (lazy import);
//  - toggle analytics=ON, marketing=OFF, "Save preferences" scrive cookie
//    coerente con la selezione.

const BANNER_SELECTOR = '[role="dialog"][aria-labelledby="cookie-banner-title"]';
// Matcher conservativo sul nome chunk: Vite usa il nome del componente nel
// filename del chunk emesso (es. PreferenceCenter-XXXX.js). Se il progetto
// dovesse cambiare strategia di chunking, aggiornare qui.
const PREF_CENTER_CHUNK_RE = /PreferenceCenter[^/]*\.js($|\?)/i;

test.describe('@wp24 customize flow', () => {
  test('Customize opens lazy-loaded PreferenceCenter and saves granular scope', async ({ page, context }) => {
    await context.clearCookies();

    // Traccia le request JS per verificare il lazy loading del chunk.
    const jsRequests: string[] = [];
    const recordJs = (req: Request) => {
      const url = req.url();
      if (url.endsWith('.js') || url.includes('.js?')) {
        jsRequests.push(url);
      }
    };
    page.on('request', recordJs);

    await page.goto('/en/');
    await page.waitForLoadState('networkidle');

    const banner = page.locator(BANNER_SELECTOR);
    await expect(banner).toBeVisible();

    // Pre-condition: chunk PreferenceCenter NON ancora caricato.
    const preClickChunks = jsRequests.filter((u) => PREF_CENTER_CHUNK_RE.test(u));
    expect(preClickChunks, `PreferenceCenter chunk non deve essere caricato pre-click: ${preClickChunks.join(', ')}`).toHaveLength(0);

    await page.getByRole('button', { name: /Customize/i }).click();

    const modal = page.locator('[role="dialog"][aria-modal="true"]');
    await expect(modal).toBeVisible();

    // Dopo l'apertura, il chunk deve essere stato richiesto.
    await expect
      .poll(() => jsRequests.filter((u) => PREF_CENTER_CHUNK_RE.test(u)).length, { timeout: 5_000 })
      .toBeGreaterThan(0);

    // Toggle: analytics ON, marketing OFF. I toggle sono input role="switch".
    const switches = modal.getByRole('switch');

    // Strategia conservativa: individuiamo i singoli switch tramite il loro
    // accessible name. I label i18n EN contengono "Analytics" e "Marketing".
    const analyticsSwitch = switches.filter({ hasText: /./ }).and(modal.getByRole('switch', { name: /analytics/i }));
    const marketingSwitch = modal.getByRole('switch', { name: /marketing/i });

    // Portiamo analytics a ON se non lo e' gia'.
    if ((await analyticsSwitch.getAttribute('aria-checked')) !== 'true') {
      await analyticsSwitch.click();
    }
    // Portiamo marketing a OFF se risulta ON.
    if ((await marketingSwitch.getAttribute('aria-checked')) === 'true') {
      await marketingSwitch.click();
    }

    await modal.getByRole('button', { name: /Save preferences/i }).click();

    await expect(modal).toHaveCount(0);
    await expect(banner).toHaveCount(0);

    const cookies = await context.cookies();
    const consent = cookies.find((c) => c.name === 'lolsensei_consent');
    expect(consent).toBeTruthy();

    const parsed = JSON.parse(decodeURIComponent(consent!.value));
    expect(parsed.scope.technical).toBe(true);
    expect(parsed.scope.analytics).toBe(true);
    expect(parsed.scope.marketing).toBe(false);
  });
});
