/**
 * WP30 TASK-WP30-F5-05 — i18n EN/IT parity render (REQ-F-030-011).
 *
 * Verifica che le pagine WP30 rendano stringhe localizzate distinte in EN e
 * IT. Un drift tipico di un'i18n key mancante e' che la chiave letterale
 * (es. `wp30.tier_list.heading`) appaia nel DOM. Questo test cattura quel
 * pattern e verifica anche la presenza di stringhe IT-specific quando si
 * naviga su `/it/...`.
 *
 * Coverage:
 *   1. /en/tier-list -> contiene "Tier List" (EN body intro_body keyword)
 *      + NESSUNA chiave letterale `wp30.*` nel DOM
 *      + NESSUNA stringa IT-specific (es. "Classifiche", "Aggiornato")
 *   2. /it/tier-list -> contiene "Classifiche" (IT intro_body keyword)
 *      + NESSUNA chiave letterale `wp30.*` nel DOM
 *      + NESSUNA stringa EN-specific (es. "Rankings", "challenger-tier")
 *   3. /en/summoner/xx99/foo-bar (region invalid 404) -> EN 404 heading
 *      "We couldn't find" (apostrofo tollerato)
 *   4. /it/summoner/xx99/foo-bar -> IT 404 heading "Non abbiamo trovato"
 */

import { expect, test } from '@playwright/test';

const I18N_KEY_LITERAL_RE = /wp30\.[a-z_]+(?:\.[a-z_]+)+/i;

function bodyHasUnresolvedI18nKey(html: string): boolean {
  // Strip the inline JSON-LD and meta — those legitimately may mention
  // "wp30" only in the rendered hreflang URLs (which are paths, not keys).
  // The match here is ".keys.with.dots", which doesn't appear in URLs.
  return I18N_KEY_LITERAL_RE.test(html);
}

test.describe('@wp30 i18n render parity EN/IT', () => {
  test('/en/tier-list renders EN body, no IT strings, no unresolved keys', async ({
    request,
  }) => {
    const res = await request.get('/en/tier-list');
    if (res.status() === 503) {
      test.skip(true, 'Tier list backend unavailable; skipping i18n assertion.');
      return;
    }
    expect(res.status()).toBe(200);

    const html = await res.text();

    // EN-specific marker (intro_body keyword "Rankings" or "challenger-tier")
    expect(html).toMatch(/Rankings based on challenger-tier|Updated daily at 04:00 UTC/);

    // No unresolved i18n keys
    expect(
      bodyHasUnresolvedI18nKey(html),
      'EN body must not contain unresolved i18n key literals',
    ).toBe(false);

    // No IT-specific markers (intro_body uses "Classifiche")
    expect(html).not.toMatch(/Classifiche basate su partite tier/);
  });

  test('/it/tier-list renders IT body, no EN strings, no unresolved keys', async ({
    request,
  }) => {
    const res = await request.get('/it/tier-list');
    if (res.status() === 503) {
      test.skip(true, 'Tier list backend unavailable; skipping i18n assertion.');
      return;
    }
    expect(res.status()).toBe(200);

    const html = await res.text();

    // IT-specific marker
    expect(html).toMatch(/Classifiche basate su partite tier|Aggiornato ogni giorno/);

    expect(
      bodyHasUnresolvedI18nKey(html),
      'IT body must not contain unresolved i18n key literals',
    ).toBe(false);

    // No EN-specific markers
    expect(html).not.toMatch(/Rankings based on challenger-tier matches/);
  });

  test('/en/summoner 404 region invalid uses EN heading', async ({ request }) => {
    const res = await request.get('/en/summoner/xx99/foo-bar');
    expect(res.status()).toBe(404);
    const html = await res.text();
    // EN heading: "We couldn't find this summoner" (apostrofo curly o ASCII)
    expect(html).toMatch(/We couldn[’']?t find this summoner/);
    // No unresolved keys
    expect(bodyHasUnresolvedI18nKey(html)).toBe(false);
  });

  test('/it/summoner 404 region invalid uses IT heading', async ({ request }) => {
    const res = await request.get('/it/summoner/xx99/foo-bar');
    expect(res.status()).toBe(404);
    const html = await res.text();
    // IT heading
    expect(html).toMatch(/Non abbiamo trovato questo evocatore/);
    expect(bodyHasUnresolvedI18nKey(html)).toBe(false);
  });
});
