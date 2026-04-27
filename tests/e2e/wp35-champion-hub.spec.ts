/**
 * CR-054 (WP35.2) — E2E smoke tests for the Champion Guides Hub.
 *
 * Smoke coverage (not exhaustive):
 *   - GET /en/champion → 200 + canonical + hreflang triplet + CollectionPage JSON-LD.
 *   - GET /it/champion → 200 + IT canonical.
 *   - Hub renders at least one card and the page counter.
 *   - Search input typing "lux" narrows the displayed grid.
 *   - Role filter chip Mid restricts grid to mid-lane guides.
 *   - Card click navigates to the corresponding /champion/<slug>/guide.
 *   - Other locales (es/fr/de/pt-br/ko/zh-Hans) hit /champion → redirect home.
 *
 * Pre-req: `npm run prebuild` populates the per-language datasets and at
 * least one mid-lane guide (Lux mid is the F4 baseline).
 */

import { expect, test } from '@playwright/test';

function extractCanonical(html: string): string | undefined {
  const m =
    html.match(/<link[^>]*\brel="canonical"[^>]*\bhref="([^"]+)"/i) ??
    html.match(/<link[^>]*\bhref="([^"]+)"[^>]*\brel="canonical"/i);
  return m?.[1];
}

function extractHreflangs(html: string): string[] {
  const out: string[] = [];
  const re = /<link[^>]*\brel="alternate"[^>]*\bhreflang="([^"]+)"/gi;
  let m;
  while ((m = re.exec(html)) !== null) out.push(m[1]);
  return out;
}

function extractCollectionPageJsonLd(html: string): unknown | null {
  const matches = [
    ...html.matchAll(
      /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi,
    ),
  ];
  for (const m of matches) {
    try {
      const parsed = JSON.parse(m[1]);
      if (
        parsed &&
        typeof parsed === 'object' &&
        (parsed as { '@type'?: string })['@type'] === 'CollectionPage'
      ) {
        return parsed;
      }
    } catch {
      continue;
    }
  }
  return null;
}

test.describe('@wp35.2 champion guides hub', () => {
  test('en hub returns 200 with canonical + hreflang triplet + CollectionPage JSON-LD', async ({
    request,
  }) => {
    const res = await request.get('/en/champion');
    expect(res.status()).toBe(200);
    const html = await res.text();
    expect(extractCanonical(html)).toBe(
      'https://www.lolsensei.com/en/champion',
    );
    const langs = extractHreflangs(html);
    expect(langs).toContain('en');
    expect(langs).toContain('it');
    expect(langs).toContain('x-default');

    const jsonld = extractCollectionPageJsonLd(html);
    expect(jsonld).not.toBeNull();
    const obj = jsonld as {
      '@type': string;
      mainEntity: { '@type': string };
    };
    expect(obj.mainEntity?.['@type']).toBe('ItemList');
  });

  test('it hub returns 200 with IT canonical', async ({ request }) => {
    const res = await request.get('/it/champion');
    expect(res.status()).toBe(200);
    const html = await res.text();
    expect(extractCanonical(html)).toBe(
      'https://www.lolsensei.com/it/champion',
    );
  });

  test('hub renders the search input + filter rail + at least one card', async ({
    page,
  }) => {
    await page.goto('/en/champion');
    await expect(page.getByTestId('champion-search-input')).toBeVisible();
    await expect(page.getByTestId('guide-filters')).toBeVisible();
    await expect(page.getByTestId('hub-counter')).toBeVisible();
    const cards = page.getByTestId('guide-card');
    await expect(cards.first()).toBeVisible({ timeout: 5000 });
  });

  test('search input "lux" filters the grid', async ({ page }) => {
    await page.goto('/en/champion');
    const cards = page.getByTestId('guide-card');
    const totalBefore = await cards.count();
    await page.getByTestId('champion-search-input').fill('lux');
    // Debounce 150ms — wait a beat then assert URL sync.
    await page.waitForURL(/[?&]q=lux/, { timeout: 1500 });
    const totalAfter = await page.getByTestId('guide-card').count();
    // Strictly fewer cards (or equal if the dataset has only Lux). Either
    // way the count must include Lux mid.
    expect(totalAfter).toBeLessThanOrEqual(totalBefore);
    expect(totalAfter).toBeGreaterThan(0);
    const luxCard = page
      .getByTestId('guide-card')
      .filter({ has: page.locator('[data-champion="lux"]') });
    await expect(luxCard.first()).toBeVisible();
  });

  test('role filter chip narrows the grid', async ({ page }) => {
    await page.goto('/en/champion');
    await page.getByTestId('filter-chip-role-mid').click();
    await page.waitForURL(/[?&]role=mid/, { timeout: 1500 });
    const remaining = page.getByTestId('guide-card');
    const count = await remaining.count();
    expect(count).toBeGreaterThan(0);
    // Every remaining card has data-role="mid".
    const roles = await remaining.evaluateAll((els) =>
      els.map((e) => e.getAttribute('data-role')),
    );
    for (const r of roles) expect(r).toBe('mid');
  });

  test('clicking a guide card navigates to the guide page', async ({
    page,
  }) => {
    await page.goto('/en/champion');
    const card = page
      .getByTestId('guide-card')
      .filter({ has: page.locator('[data-champion="lux"]') })
      .first();
    await card.click();
    await page.waitForURL(/\/en\/champion\/lux\/guide/, { timeout: 5000 });
  });

  test('non-en/it locales redirect to the home', async ({ page }) => {
    await page.goto('/fr/champion');
    // Either Navigate to /fr/ home (200 home) or 404; both are acceptable
    // — the URL must NOT remain on /fr/champion as a real hub page.
    await page.waitForLoadState('networkidle');
    const url = page.url();
    expect(url).not.toContain('/fr/champion');
  });
});
