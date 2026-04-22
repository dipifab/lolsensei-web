/**
 * WP24 TASK-4-006 — Accessibility helper per E2E Playwright.
 *
 * Wrappa `@axe-core/playwright` con tre helper:
 *
 * - `runAxe(page, options)` — scan completo della pagina; filtra i findings per
 *   severita' (default: blocca solo `critical` + `serious` secondo
 *   REQ-NF-024-002 / G4).
 * - `expectNoCriticalViolations(page, options)` — `expect.soft()` a 0 violazioni
 *   critical+serious e fallisce il test se ce ne sono.
 * - `formatViolations(results)` — formattatore leggibile per i report.
 *
 * Uso in spec:
 *   import { expectNoCriticalViolations } from './helpers/a11y';
 *   test('banner a11y', async ({ page }) => {
 *     await page.goto('/en');
 *     await expectNoCriticalViolations(page, { include: '[role="dialog"]' });
 *   });
 */

import AxeBuilder from '@axe-core/playwright';
import { expect, type Page } from '@playwright/test';

export type A11ySeverity = 'minor' | 'moderate' | 'serious' | 'critical';

export interface AxeRunOptions {
  /** CSS selector(s) da includere nello scan. Omettere = intera pagina. */
  include?: string | string[];
  /** CSS selector(s) da escludere. */
  exclude?: string | string[];
  /** Severita' minima da considerare fallimento. Default: 'serious'. */
  minSeverity?: A11ySeverity;
  /** Tag WCAG da attivare. Default: wcag2a + wcag2aa + best-practice. */
  tags?: string[];
  /** Disabilita regole specifiche (whitelist temporanea). */
  disableRules?: string[];
}

const SEVERITY_ORDER: Record<A11ySeverity, number> = {
  minor: 1,
  moderate: 2,
  serious: 3,
  critical: 4,
};

const DEFAULT_TAGS = ['wcag2a', 'wcag2aa', 'best-practice'];

export async function runAxe(page: Page, options: AxeRunOptions = {}) {
  let builder = new AxeBuilder({ page }).withTags(options.tags ?? DEFAULT_TAGS);

  if (options.include) {
    const inc = Array.isArray(options.include) ? options.include : [options.include];
    inc.forEach((sel) => (builder = builder.include(sel)));
  }
  if (options.exclude) {
    const exc = Array.isArray(options.exclude) ? options.exclude : [options.exclude];
    exc.forEach((sel) => (builder = builder.exclude(sel)));
  }
  if (options.disableRules?.length) {
    builder = builder.disableRules(options.disableRules);
  }

  const results = await builder.analyze();

  const threshold = SEVERITY_ORDER[options.minSeverity ?? 'serious'];
  const blocking = results.violations.filter((v) => {
    const sev = (v.impact ?? 'minor') as A11ySeverity;
    return (SEVERITY_ORDER[sev] ?? 0) >= threshold;
  });

  return { results, blocking };
}

export async function expectNoCriticalViolations(page: Page, options: AxeRunOptions = {}) {
  const { blocking, results } = await runAxe(page, options);
  if (blocking.length > 0) {
    console.error('A11y violations (critical/serious):\n' + formatViolations(blocking));
  }
  expect(blocking, formatViolations(blocking)).toEqual([]);
  return results;
}

export function formatViolations(violations: { id: string; impact?: string | null; description: string; nodes: { target: unknown[] }[] }[]): string {
  if (!violations.length) return 'no critical/serious violations';
  return violations
    .map((v) => {
      const targets = v.nodes.map((n) => JSON.stringify(n.target)).join(', ');
      return `  [${v.impact}] ${v.id}: ${v.description} — ${targets}`;
    })
    .join('\n');
}
