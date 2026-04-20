import { describe, it, expect } from 'vitest';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

/**
 * Guard post-build per scripts/compute-csp-hashes.mjs.
 *
 * Motivazione: lo script emette la whitelist degli hash SHA-256 degli script
 * inline nel modulo TS `src/generated/csp-hashes.ts`, che il middleware
 * (`src/middleware.ts`) importa per costruire la direttiva CSP al runtime.
 *
 * Storia: prima di WP18-T31 la direttiva CSP viveva in `_headers`, ma con 79
 * hash superava il limite di 2000 char/riga di Cloudflare. Ora il file
 * `_headers` NON contiene piu' CSP; l'header e' emesso dal Worker. Vedi
 * docs/wp18-canary-verification.md.
 *
 * Comportamento del test:
 * - Verifica SEMPRE il contenuto del modulo TS (commesso/generato).
 * - Se `.output/public/_headers` esiste (post-build), verifica anche che
 *   non ci sia piu' la direttiva CSP li' dentro — backstop contro
 *   regressioni della pipeline.
 */
const GENERATED_PATH = 'src/generated/csp-hashes.ts';
const HEADERS_PATH = '.output/public/_headers';
const hasHeadersArtifact = existsSync(HEADERS_PATH);

describe('build pipeline — CSP hash injection', () => {
  it('generates a TS module with INLINE_SCRIPT_HASHES export', async () => {
    const content = await readFile(GENERATED_PATH, 'utf8');
    expect(content).toMatch(/export const INLINE_SCRIPT_HASHES/);
  });

  it('module is a valid sha256 whitelist (or stub)', async () => {
    const content = await readFile(GENERATED_PATH, 'utf8');
    const hashes = content.match(/'sha256-[A-Za-z0-9+/=]+'/g) || [];
    // Stub committato: zero hash. Post-build: >= 1. Mai parole-chiave rotte.
    for (const h of hashes) {
      expect(h).toMatch(/^'sha256-[A-Za-z0-9+/=]+='?/);
    }
  });

  describe.skipIf(!hasHeadersArtifact)('post-build _headers state', () => {
    it('does NOT contain a Content-Security-Policy line (moved to Worker)', async () => {
      const content = await readFile(HEADERS_PATH, 'utf8');
      // Il Worker middleware e' l'unico emettitore di CSP. _headers non deve piu'
      // portarla: se compare, il file supera il limite 2000 char di CF.
      expect(content).not.toMatch(/^\s*Content-Security-Policy:/m);
    });

    it('keeps other security headers as static backstop', async () => {
      const content = await readFile(HEADERS_PATH, 'utf8');
      expect(content).toMatch(/Strict-Transport-Security:/);
      expect(content).toMatch(/X-Content-Type-Options:\s*nosniff/);
      expect(content).toMatch(/Referrer-Policy:/);
      expect(content).toMatch(/Permissions-Policy:/);
    });

    it('has no line exceeding Cloudflare 2000-char limit', async () => {
      const content = await readFile(HEADERS_PATH, 'utf8');
      const maxLen = content
        .split('\n')
        .reduce((m, l) => (l.length > m ? l.length : m), 0);
      expect(maxLen).toBeLessThan(2000);
    });
  });
});
