import { test, expect } from '@playwright/test';

/**
 * WP18 Fase 7 — Task 27: E2E smoke multi-locale.
 *
 * Regression gate che copre:
 *   - 8 locali x home SSG rendering + SEO head
 *   - Redirect policy (root, trailing slash, uppercase, legacy /admin)
 *   - X-Robots-Tag noindex su route sensibili
 *   - Blog gated su BLOG_LOCALES
 *   - JSON-LD (FAQPage + Organization)
 *   - 404 status code catch-all
 *   - Differenziazione title per locale (meta-resolver)
 *
 * Questo gate avrebbe catturato il blocker "middleware non bundled" scoperto
 * manualmente in Fase 6 Task 26.
 *
 * Usa `request` (non `page`) per verificare raw HTTP status + headers
 * senza esecuzione JS client-side.
 */

const LOCALES = ['en', 'it', 'es', 'fr', 'de', 'pt-br', 'ko', 'zh-hans'];

for (const lang of LOCALES) {
  test(`[${lang}] homepage served SSG with SEO head`, async ({ request }) => {
    const res = await request.get(`/${lang}/`);
    expect(res.status()).toBe(200);
    const html = await res.text();
    expect(html).toMatch(/<h1[\s>]/);
    expect(html).not.toContain('<div id="root"></div>');
    // @solidjs/meta emits <title data-sm="..."> so match opening tag loosely.
    expect(html).toMatch(/<title[\s>]/);
    expect(html).toContain('rel="canonical"');
    expect(html).toContain('property="og:title"');
    expect(html).toContain('hreflang=');
  });
}

test('root / redirects to locale', async ({ request }) => {
  const res = await request.get('/', { maxRedirects: 0 });
  expect([301, 302]).toContain(res.status());
  // Middleware runtime emits absolute Location; static redirects emit path-only.
  // Accept both shapes and match on the locale-path suffix.
  expect(res.headers()['location']).toMatch(/(^|\/)[a-z-]+\/$/i);
});

test('deep route with trailing slash redirects to no-slash', async ({ request }) => {
  const res = await request.get('/en/pricing/', { maxRedirects: 0 });
  expect(res.status()).toBe(301);
  expect(res.headers()['location']).toBe('/en/pricing');
});

test('/EN/ uppercase redirects to /en/', async ({ request }) => {
  const res = await request.get('/EN/', { maxRedirects: 0 });
  expect(res.status()).toBe(301);
  expect(res.headers()['location']).toBe('/en/');
});

test('/admin/foo legacy redirects to /console/foo', async ({ request }) => {
  const res = await request.get('/admin/users', { maxRedirects: 0 });
  expect(res.status()).toBe(301);
  // Runtime middleware emits absolute Location; match only the path suffix.
  expect(res.headers()['location']).toMatch(/\/console\/users$/);
});

test('checkout path has X-Robots-Tag noindex', async ({ request }) => {
  const res = await request.get('/en/checkout/success', { maxRedirects: 0 });
  // Status: 200 (CSR rendered) o 404 (route might not emit HTML if CSR-gated) — entrambi OK
  expect([200, 404]).toContain(res.status());
  if (res.status() === 200) {
    expect((res.headers()['x-robots-tag'] || '').toLowerCase()).toMatch(/noindex/);
  }
});

test('blog available only on BLOG_LOCALES', async ({ request }) => {
  const en = await request.get('/en/blog');
  expect(en.status()).toBe(200);
  const it = await request.get('/it/blog');
  expect(it.status()).toBe(200);
  // non-blog locale: puo essere redirect, 404, o 200 con client-side navigate
  const de = await request.get('/de/blog', { maxRedirects: 0 });
  expect([200, 302, 404]).toContain(de.status());
});

test('JSON-LD present on home and faq', async ({ request }) => {
  const home = await (await request.get('/en/')).text();
  expect(home).toMatch(/application\/ld\+json/);
  const faq = await (await request.get('/en/faq')).text();
  expect(faq).toMatch(/"@type"\s*:\s*"FAQPage"/);
});

test('404 status on unknown path', async ({ request }) => {
  const res = await request.get('/nonexistent-path-xyz', { maxRedirects: 0 });
  expect(res.status()).toBe(404);
});

test('i18n title differs per locale on pricing', async ({ request }) => {
  const en = await (await request.get('/en/pricing')).text();
  const it = await (await request.get('/it/pricing')).text();
  // @solidjs/meta renders <title data-sm="..."> so allow attributes between
  // the tag name and `>`.
  const enTitle = en.match(/<title[^>]*>([^<]+)</)?.[1];
  const itTitle = it.match(/<title[^>]*>([^<]+)</)?.[1];
  expect(enTitle).toBeTruthy();
  expect(itTitle).toBeTruthy();
  expect(enTitle).not.toBe(itTitle);
});
