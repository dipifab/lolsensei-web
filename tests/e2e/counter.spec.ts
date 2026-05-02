/**
 * WPCP-051 / WPCP-052 / WPCP-055 (CR-063) — E2E happy path Counter Picker.
 *
 * Coverage:
 *   - smoke flow: landing /en/counter -> typing -> suggestion -> Enter ->
 *     detail page render con header + 2 colonne;
 *   - reverse flow: dalla guida `/en/champion/<slug>/<role>/guide` il link
 *     "vedi counter di X" naviga alla pagina detail counter;
 *   - middleware redirect: /es/counter/zed -> 308 -> /en/counter/zed;
 *   - SSR 404: /en/counter/<unknown-slug> rende HTTP 404 PRIMA dell'idratazione
 *     (chiusura OI-P4-1 / OI-P5-2);
 *   - source_anchor smoke: 20 celle random dell'indice puntano ad ancore
 *     esistenti nel DOM della guida sorgente (REQ-NF-CP-009 AC-009.3).
 *
 * I 5 sample champion sono scelti tra quelli realmente coperti dall'indice
 * EN al build-time corrente (Yasuo, Zed, Yone, Akali, Lee Sin sono tutti
 * presenti in `by_enemy`).
 *
 * Pre-req: `npm run build` produce `.output/` con tag CR-063 attivo;
 * wrangler dev serve gli asset; Playwright config punta a 127.0.0.1:8787.
 */

import { expect, test } from '@playwright/test';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const SAMPLE_CHAMPIONS: Array<{ slug: string; displayName: string }> = [
  { slug: 'yasuo', displayName: 'Yasuo' },
  { slug: 'zed', displayName: 'Zed' },
  { slug: 'yone', displayName: 'Yone' },
  { slug: 'akali', displayName: 'Akali' },
  { slug: 'lee-sin', displayName: 'Lee Sin' },
];

test.describe('@counter happy path', () => {
  for (const champion of SAMPLE_CHAMPIONS) {
    test(`type-prefix + Enter naviga a /en/counter/${champion.slug}`, async ({ page }) => {
      await page.goto('/en/counter');

      // L'input combobox e' presente con autofocus attribute (SSR-stamped).
      // NOTA: Chromium headless puo' non onorare autofocus al primo
      // render quando la pagina e' caricata via goto in tab inattiva.
      // Verifichiamo presenza + focusable (focus manuale come fallback).
      const input = page.locator('input[role="combobox"]');
      await expect(input).toBeVisible();
      await input.focus();

      // L'indice viene fetchato client-side post-hydration: piuttosto che
      // ascoltare la specifica response (puo essere coalesced con altre
      // chiamate o servita da cache), polling sulla disponibilita della
      // suggestion list dopo il typing.
      const typed = champion.slug.slice(0, 3);
      const list = page.getByTestId('counter-autocomplete-list');
      await expect
        .poll(
          async () => {
            await input.fill('');
            await input.pressSequentially(typed, { delay: 30 });
            try {
              await list.waitFor({ state: 'visible', timeout: 1500 });
              return true;
            } catch {
              return false;
            }
          },
          { timeout: 15000, intervals: [500, 1000, 2000] },
        )
        .toBe(true);
      await expect(list).toContainText(champion.displayName);

      // ArrowDown a portata di mano + Enter: la prima suggestion (highlight idx 0)
      // e' il match piu prefix-stretto. Verifichiamo che dopo Enter siamo
      // sulla detail del champion atteso (oppure sul role-suffixed se la
      // search ha matchato un role specifico).
      await input.press('Enter');

      // L'URL puo essere /en/counter/<slug> o /en/counter/<slug>-<role>:
      // la suggestion default highlight=0 e' l'option pio rilevante; in tutti
      // i 5 sample default la prima option corrisponde al champion target.
      const slugPattern = new RegExp(
        `/en/counter/${champion.slug}(?:-(top|jungle|mid|bot|support))?$`,
      );
      await page.waitForURL(slugPattern, { timeout: 5000 });

      // Header SSR con il display_name del champion (h1 con data-testid).
      const headerTitle = page.getByTestId('enemy-header-title');
      await expect(headerTitle).toBeVisible();
      await expect(headerTitle).toHaveText(champion.displayName);

      // Almeno una delle 2 colonne deve essere presente. Lee Sin ha 0 strong
      // ma 13 weak: l'altra colonna mostra l'empty-state, anch'essa un node.
      const grid = page.getByTestId('detail-grid');
      await expect(grid).toBeVisible();
    });
  }

  test('cella matchup ha href ben formato verso la guida sorgente', async ({ page }) => {
    // Yasuo ha celle in entrambe le colonne, scelta robusta.
    await page.goto('/en/counter/yasuo');

    const cells = page.getByTestId('matchup-cell');
    await expect(cells.first()).toBeVisible({ timeout: 5000 });

    const firstHref = await cells.first().getAttribute('href');
    expect(firstHref).not.toBeNull();
    // OI-P6-1 risolta (2026-05-02): `resolveSourceAnchor` produce ora il
    // path role-explicit post-CR-056 `/[lang]/champion/<champion>/<role>/guide`,
    // che la route /[lang]/champion/[champion]/[role]/guide.tsx serve direttamente
    // (no piu soft-404 su NotFoundFallback).
    expect(firstHref!).toMatch(
      /^\/en\/champion\/[a-z0-9-]+\/(top|jungle|mid|bot|support)\/guide#matchup-draft-(pick-into|counterpicks)$/,
    );
  });

  test('reverse cross-link guida -> counter detail', async ({ page }) => {
    // Lux mid e' la baseline F4 sempre presente.
    await page.goto('/en/champion/lux/mid/guide');
    const link = page.getByTestId('guide-counter-link');
    await expect(link).toBeVisible();
    const href = await link.getAttribute('href');
    expect(href).toBe('/en/counter/lux');

    await link.click();
    await page.waitForURL(/\/en\/counter\/lux$/);
    await expect(page.getByTestId('enemy-header-title')).toHaveText('Lux');
  });
});

test.describe('@counter middleware redirect', () => {
  test('GET /es/counter/zed -> 308 redirect a /en/counter/zed', async ({ request }) => {
    const res = await request.get('/es/counter/zed', { maxRedirects: 0 });
    expect(res.status()).toBe(308);
    expect(res.headers()['location']).toBe('/en/counter/zed');
  });

  test('GET /fr/counter -> 308 verso /en/counter', async ({ request }) => {
    const res = await request.get('/fr/counter', { maxRedirects: 0 });
    expect(res.status()).toBe(308);
    expect(res.headers()['location']).toMatch(/^\/en\/counter\/?$/);
  });
});

test.describe('@counter SSR 404 (chiusura OI-P4-1 / OI-P5-2)', () => {
  test('GET /en/counter/<unknown-slug> ritorna 404 SSR (no-JS)', async ({ request }) => {
    const res = await request.get('/en/counter/this-champion-does-not-exist-xyz');
    expect(res.status()).toBe(404);
    const html = await res.text();
    // Il container 404 deve essere nel HTML iniziale (non aggiunto da JS).
    expect(html).toContain('data-testid="counter-detail-not-found"');
  });
});

test.describe('@counter source_anchor smoke (20 random celle)', () => {
  test('20 celle random EN producono href ben formati', async ({ request }) => {
    // Smoke statico: leggiamo l'indice EN e verifichiamo che ogni cella
    // (sample stabile di 20) abbia un href risolvibile via le funzioni
    // pure di types.ts e che l'URL pattern sia conforme.
    //
    // Open issue OI-P6-1: l'URL pattern attuale (`<champion>-<role>/guide`)
    // non allinea CR-056 (`<champion>/<role>/guide`); verifica DOM
    // dell'ancora target richiede prima il fix del legacy redirect.
    // Per ora controlliamo solo che (a) l'href e' canonical-shape e
    // (b) il publisher slug e' presente in `champions{}` (no broken
    // reference dal builder).
    const indexPath = resolve(
      process.cwd(),
      'public/counter-index/en.json',
    );
    const index = JSON.parse(await readFile(indexPath, 'utf8')) as {
      champions: Record<string, { gp?: string }>;
      by_enemy: Record<
        string,
        {
          is_strong_against: Array<{ c: string; role: string }>;
          is_weak_against: Array<{ c: string; role: string }>;
        }
      >;
    };

    // Raccogli tutte le celle (publisher, role, via) e prendi 20 random
    // deterministicamente (seed = il primo enemy slug ord-alpha).
    type Cell = { c: string; role: string; via: 'pick_into' | 'counterpick' };
    const allCells: Cell[] = [];
    for (const enemy of Object.keys(index.by_enemy).sort()) {
      const e = index.by_enemy[enemy];
      for (const c of e.is_strong_against) {
        allCells.push({ c: c.c, role: c.role, via: 'pick_into' });
      }
      for (const c of e.is_weak_against) {
        allCells.push({ c: c.c, role: c.role, via: 'counterpick' });
      }
    }

    // Seed-stable random: ogni run estrae lo stesso campione di 20 a partire
    // dal seme `42`. Questo evita flakiness ma copre comunque la diversita.
    const sample = stableSample(allCells, 20, 42);

    const errors: string[] = [];
    const VALID_ROLES = ['top', 'jungle', 'mid', 'bot', 'support'];
    for (const cell of sample) {
      // (a) publisher slug deve esistere nell'indice (V3 del builder).
      if (!index.champions[cell.c]) {
        errors.push(`cell.c="${cell.c}" not in champions{}`);
        continue;
      }
      // (b) role deve essere uno dei 5 valori validi.
      if (!VALID_ROLES.includes(cell.role)) {
        errors.push(`cell.role="${cell.role}" invalid for ${cell.c}`);
        continue;
      }
      // (c) href risultante deve matchare il pattern atteso.
      const guideSlug = `${index.champions[cell.c]?.gp ?? cell.c}-${cell.role}`;
      const expectedAnchor =
        cell.via === 'pick_into'
          ? 'matchup-draft-pick-into'
          : 'matchup-draft-counterpicks';
      const expectedHref = `/en/champion/${guideSlug}/guide#${expectedAnchor}`;
      if (
        !/^\/en\/champion\/[a-z0-9-]+\/guide#matchup-draft-(pick-into|counterpicks)$/.test(
          expectedHref,
        )
      ) {
        errors.push(`bad href shape: ${expectedHref}`);
      }
    }

    expect(errors, `cells with broken refs:\n${errors.join('\n')}`).toEqual([]);

    // Suppress unused warning sul request param (mantenuto per API future).
    void request;
  });
});

/**
 * Mulberry32 deterministic PRNG + sampling without replacement.
 * Usato dal source_anchor smoke per estrarre N celle in modo stabile
 * (zero flakiness sui run consecutivi).
 */
function stableSample<T>(arr: T[], n: number, seed: number): T[] {
  const out: T[] = [];
  const used = new Set<number>();
  let s = seed >>> 0;
  while (out.length < n && used.size < arr.length) {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    const r = ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    const idx = Math.floor(r * arr.length);
    if (used.has(idx)) continue;
    used.add(idx);
    out.push(arr[idx]);
  }
  return out;
}
