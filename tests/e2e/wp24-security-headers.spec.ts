/**
 * WP24 TASK-4-023 — E2E assertion security headers post-enforce.
 *
 * Da eseguire post TASK-4-022 (48h Report-Only + enforce). Copre:
 * - Content-Security-Policy (enforce, non Report-Only) con script-src +
 *   connect-src corretti
 * - Strict-Transport-Security: max-age>=31536000 (1 anno)
 * - Referrer-Policy: strict-origin-when-cross-origin
 * - Permissions-Policy: interest-cohort=(), browsing-topics=(), payment=(self),
 *   fullscreen=(self)
 *
 * Nota: HSTS e' stampato da Cloudflare a livello edge (non dal middleware
 * SolidStart). In staging/preview potrebbe essere assente; il test diventa
 * pass sotto un flag env `SKIP_HSTS_CHECK=true` per permettere il run
 * locale senza HTTPS termination.
 */

import { expect, test } from '@playwright/test';

test.describe('@wp24 security headers — enforce', () => {
  test('Content-Security-Policy present and enforce-mode', async ({ request }) => {
    const res = await request.get('/en/');
    const csp = res.headers()['content-security-policy'];
    const cspRO = res.headers()['content-security-policy-report-only'];

    expect(csp, 'CSP enforce header should be present').toBeTruthy();
    expect(cspRO, 'CSP Report-Only should NOT be present post-enforce').toBeFalsy();

    expect(csp).toContain("default-src 'self'");
    expect(csp).toContain('script-src');
    expect(csp).toContain('connect-src');
    expect(csp).toContain('static.cloudflareinsights.com');
    expect(csp).toContain('report-uri /csp-report');
  });

  test('HSTS max-age >= 31536000', async ({ request }) => {
    if (process.env.SKIP_HSTS_CHECK === 'true') {
      test.skip(true, 'SKIP_HSTS_CHECK=true — HSTS e edge-level, non testabile locale');
      return;
    }
    const res = await request.get('/en/');
    const hsts = res.headers()['strict-transport-security'] ?? '';
    expect(hsts).toMatch(/max-age=(\d+)/);
    const match = hsts.match(/max-age=(\d+)/);
    const maxAge = match ? Number(match[1]) : 0;
    expect(maxAge).toBeGreaterThanOrEqual(31_536_000);
  });

  test('Referrer-Policy strict-origin', async ({ request }) => {
    const res = await request.get('/en/');
    const referrer = res.headers()['referrer-policy'] ?? '';
    expect(referrer).toContain('strict-origin');
  });

  test('Permissions-Policy locks down sensible features', async ({ request }) => {
    const res = await request.get('/en/');
    const permissions = res.headers()['permissions-policy'] ?? '';

    expect(permissions).toMatch(/camera=\(\)/);
    expect(permissions).toMatch(/microphone=\(\)/);
    expect(permissions).toMatch(/geolocation=\(\)/);
    // FLoC / Topics opt-out — WP24 Garante default privacy
    expect(permissions).toMatch(/interest-cohort=\(\)/);
    expect(permissions).toMatch(/browsing-topics=\(\)/);
    // WP24 additions
    expect(permissions).toMatch(/payment=\(self\)/);
    expect(permissions).toMatch(/fullscreen=\(self\)/);
  });
});
