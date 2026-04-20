import { describe, it, expect } from 'vitest';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

/**
 * Guard post-build per scripts/compute-csp-hashes.mjs.
 *
 * Motivazione: lo script oggi ritorna exit 0 anche se il pattern di replace
 * sul `_headers` non matcha (emette warning, non errore). In caso di regressione
 * silente il build pubblicherebbe una CSP priva di hash `sha256-...`, lasciando
 * solo `strict-dynamic` senza whitelist per i browser legacy.
 *
 * Comportamento:
 * - Se `.output/public/_headers` non esiste (test eseguito senza `npm run build`),
 *   il suite è SKIPPATO — evita fail spurio in dev.
 * - In CI post-build, il suite gira e blocca la regressione.
 */
const HEADERS_PATH = '.output/public/_headers';
const hasArtifacts = existsSync(HEADERS_PATH);

describe.skipIf(!hasArtifacts)('build pipeline — CSP hash injection', () => {
  it('includes at least 1 sha256 hash in script-src', async () => {
    const content = await readFile(HEADERS_PATH, 'utf8');
    const scriptSrcLine = content.split('\n').find((l) => l.includes('script-src'));
    expect(scriptSrcLine).toBeTruthy();
    const hashCount = (scriptSrcLine?.match(/'sha256-[A-Za-z0-9+/=]+'/g) || []).length;
    expect(hashCount).toBeGreaterThan(0);
  });

  it('still contains strict-dynamic directive', async () => {
    const content = await readFile(HEADERS_PATH, 'utf8');
    expect(content).toMatch(/'strict-dynamic'/);
  });
});
