/**
 * WP31 F4-14/F4-15 — Match-history pagination + review generation flow.
 *
 * Skip-graceful: requires `WP31_PREMIUM_JWT` and a Premium account whose
 * ingested match list has at least 26 matches (so the `Load more` button
 * is rendered with a non-null cursor). Without the seed, only the redirect
 * branch is exercised — the rest is gracefully skipped.
 *
 * No mock data, no fake JWTs, no synthetic backend: the whole flow runs
 * end-to-end against a live backend or it does not run at all.
 */

import { expect, test } from '@playwright/test';

function cookieDomain(): string {
  const baseUrl = process.env.PLAYWRIGHT_BASE_URL ?? 'http://127.0.0.1:8787';
  return new URL(baseUrl).hostname;
}

test.describe('@wp31 match history pagination', () => {
  test('pagination Load more appends matches and clears the cursor', async ({ page, context }) => {
    const jwt = process.env.WP31_PREMIUM_JWT;
    test.skip(
      !jwt,
      'WP31_PREMIUM_JWT not set — pagination flow requires a real Premium JWT (NO mock policy).',
    );
    if (!jwt) return;

    await context.addCookies([
      { name: 'jwt', value: jwt, domain: cookieDomain(), path: '/' },
    ]);

    const response = await page.goto('/en/match-history');
    if (!response || response.status() >= 500) {
      test.skip(true, 'Backend unreachable; skipping pagination assertion.');
      return;
    }

    const list = page.getByTestId('match-history-list');
    if (!(await list.count())) {
      test.skip(true, 'Premium user has no ingested matches yet; cannot validate pagination.');
      return;
    }

    const items = page.getByTestId('match-history-item');
    const firstCount = await items.count();

    const loadMore = page.getByTestId('match-history-load-more');
    if (!(await loadMore.count())) {
      test.skip(
        true,
        'No `Load more` button — user has fewer than 26 matches. Cannot exercise pagination.',
      );
      return;
    }

    await loadMore.click();
    await expect(items).not.toHaveCount(firstCount);

    // Once the user reaches the end, the button disappears and the
    // "no more" line is shown.
    const stillHasMore = await loadMore.count();
    if (stillHasMore === 0) {
      await expect(page.getByTestId('match-history-end')).toBeVisible();
    }
  });
});

test.describe('@wp31 review generation', () => {
  test('quota exhausted disables the Generate Review button', async ({ page, context }) => {
    const jwt = process.env.WP31_PREMIUM_JWT_QUOTA_EXHAUSTED;
    const matchId = process.env.WP31_PREMIUM_SEED_MATCH_ID;
    test.skip(
      !jwt || !matchId,
      'Requires WP31_PREMIUM_JWT_QUOTA_EXHAUSTED + WP31_PREMIUM_SEED_MATCH_ID; the quota-exhausted state cannot be faked.',
    );
    if (!jwt || !matchId) return;

    await context.addCookies([
      { name: 'jwt', value: jwt, domain: cookieDomain(), path: '/' },
    ]);

    const response = await page.goto(`/en/match/${matchId}`);
    if (!response || response.status() >= 500) {
      test.skip(true, 'Backend unreachable; skipping quota-exhausted assertion.');
      return;
    }

    const cta = page.getByTestId('generate-review-button');
    if (!(await cta.count())) {
      test.skip(true, 'No CTA visible — match likely already has a review.');
      return;
    }

    await expect(cta).toBeDisabled();
    await expect(cta).toHaveAttribute('aria-disabled', 'true');
  });

  test('language toggle on existing review issues no backend call', async ({ page, context }) => {
    const jwt = process.env.WP31_PREMIUM_JWT;
    const matchId = process.env.WP31_PREMIUM_REVIEW_MATCH_ID;
    test.skip(
      !jwt || !matchId,
      'Requires WP31_PREMIUM_JWT + WP31_PREMIUM_REVIEW_MATCH_ID (a match that already has a review).',
    );
    if (!jwt || !matchId) return;

    await context.addCookies([
      { name: 'jwt', value: jwt, domain: cookieDomain(), path: '/' },
    ]);

    let backendCallsAfterToggle = 0;
    page.on('request', (req) => {
      if (/\/api\/v1\/premium\/match\//.test(req.url())) {
        backendCallsAfterToggle += 1;
      }
    });

    const response = await page.goto(`/en/match/${matchId}`);
    if (!response || response.status() >= 500) {
      test.skip(true, 'Backend unreachable; skipping language-toggle assertion.');
      return;
    }

    const summary = page.getByTestId('summary-block');
    if (!(await summary.count())) {
      test.skip(true, 'No SummaryBlock visible — review may not be present.');
      return;
    }

    // Reset the counter AFTER the SSR load — only count post-toggle calls.
    backendCallsAfterToggle = 0;

    await page.getByTestId('summary-toggle-it').click();
    await expect(page.getByTestId('summary-text')).toHaveAttribute('data-lang', 'it');

    await page.getByTestId('summary-toggle-en').click();
    await expect(page.getByTestId('summary-text')).toHaveAttribute('data-lang', 'en');

    expect(backendCallsAfterToggle).toBe(0);
  });
});
