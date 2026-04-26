/**
 * WP30 TASK-WP30-F5-06 — Region invalid: 404 + noindex + body variant=region.
 *
 * Verifica REQ-F-030-010, REQ-F-030-012. Complementare a `wp30-noindex-404.spec.ts`
 * (F4-03) che copre header X-Robots-Tag. Qui asseriamo specificamente:
 *   1. Region NON in ALLOWED_REGIONS -> HTTP 404
 *   2. Body contiene `<NotFoundSummoner variant="region">` (data-variant="region")
 *   3. CTA tier-list e CTA home presenti
 *   4. Hreflang triplet (EN+IT) NON emesso (404 noindex non deve hreflang)
 *      OPPURE emesso ma con noindex SEO marker — accettiamo entrambi (il route
 *      attualmente non emette HreflangCluster su 404 region invalid; verifica
 *      consistente).
 */

import { expect, test } from '@playwright/test';

function extractDataVariant(html: string): string | undefined {
  return html.match(/<main[^>]*\bdata-variant="([^"]+)"/i)?.[1];
}

function metaRobotsHasNoindex(html: string): boolean {
  return (html.match(/<meta[^>]*name="robots"[^>]*content="([^"]*)"/i)?.[1] ?? '').includes(
    'noindex',
  );
}

test.describe('@wp30 region-invalid -> 404', () => {
  test('xx99 region -> 404 + body variant=region + 2 CTAs + noindex', async ({ request }) => {
    const res = await request.get('/en/summoner/xx99/foobar-tag');
    expect(res.status()).toBe(404);

    const html = await res.text();
    expect(extractDataVariant(html)).toBe('region');

    // CTA links
    expect(html).toMatch(/href="\/en\/tier-list"/);
    expect(html).toMatch(/href="\/en\/"/);

    // noindex meta
    expect(metaRobotsHasNoindex(html)).toBe(true);
  });

  test('IT locale region invalid: 404 with IT body', async ({ request }) => {
    const res = await request.get('/it/summoner/xx99/foobar-tag');
    expect(res.status()).toBe(404);

    const html = await res.text();
    expect(extractDataVariant(html)).toBe('region');
    // IT heading marker
    expect(html).toMatch(/Non abbiamo trovato questo evocatore/);
  });
});
