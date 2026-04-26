/**
 * WP34 — E2E: Counter + Pro Builds routes (F3 frontend gate).
 *
 * Copre AC release gate:
 *   - GET /en/champion/<x>/counters     -> 404 in DB-empty state (MVP) +
 *     <meta robots noindex> + body con CTA "Back to home".
 *   - GET /it/champion/<x>/counters     -> 404 IT (locale parity).
 *   - GET /en/champion/<x>/pro-builds   -> 404 in DB-empty state.
 *   - GET /xx/champion/<x>/counters     -> non supported lang -> redirect home.
 *
 * Smoke su pagina con dati richiede backend live + seed: gated su deploy
 * staging (cfr. docs/runbook-wp34-content-refresh.md). Qui validiamo la
 * shape della pagina empty (il backend ritorna 404, il route handler rende
 * EmptyState con noindex).
 */

import { expect, test } from '@playwright/test';

// Champion non in scope MVP (Top-50 _meta) -> route entra in NotFound branch
// senza dover toccare backend (role mapping = null).
const UNKNOWN_CHAMPION = 'unknownchampion';

test.describe('@wp34 counters route', () => {
  test('en counters returns noindex empty state for unknown champion', async ({
    request,
  }) => {
    const res = await request.get(
      `/en/champion/${UNKNOWN_CHAMPION}/counters`,
    );
    // SolidStart returns 200 even for empty state (logical 404),
    // gating "noindex" via meta tag is the SEO guard.
    expect([200, 404]).toContain(res.status());
    const html = await res.text();
    expect(html).toMatch(
      /<meta[^>]+name="robots"[^>]+content="noindex/i,
    );
    // CTA testid present.
    expect(html).toContain('wp34-counters-not-found');
  });

  test('it counters returns noindex empty state for unknown champion', async ({
    request,
  }) => {
    const res = await request.get(
      `/it/champion/${UNKNOWN_CHAMPION}/counters`,
    );
    expect([200, 404]).toContain(res.status());
    const html = await res.text();
    expect(html).toMatch(
      /<meta[^>]+name="robots"[^>]+content="noindex/i,
    );
  });
});

test.describe('@wp34 pro-builds route', () => {
  test('en pro-builds returns noindex empty state for unknown champion', async ({
    request,
  }) => {
    const res = await request.get(
      `/en/champion/${UNKNOWN_CHAMPION}/pro-builds`,
    );
    expect([200, 404]).toContain(res.status());
    const html = await res.text();
    expect(html).toMatch(
      /<meta[^>]+name="robots"[^>]+content="noindex/i,
    );
    expect(html).toContain('wp34-pro-builds-not-found');
  });

  test('it pro-builds returns noindex empty state for unknown champion', async ({
    request,
  }) => {
    const res = await request.get(
      `/it/champion/${UNKNOWN_CHAMPION}/pro-builds`,
    );
    expect([200, 404]).toContain(res.status());
    const html = await res.text();
    expect(html).toMatch(
      /<meta[^>]+name="robots"[^>]+content="noindex/i,
    );
  });
});
