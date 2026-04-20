// scripts/compute-csp-hashes.mjs
//
// Post-build step: scansiona gli HTML prerendered (SSG) alla ricerca di
// script inline, calcola SHA-256 base64 per ciascun body, e aggiorna
// .output/public/_headers iniettando gli hash nella direttiva script-src.
//
// Sostituisce 'unsafe-inline' con una whitelist hash-based conforme a
// CSP3 (compatibile con 'strict-dynamic' per script esterni).
//
// ref TASK-W18-T21, REQ-NF-018-002, OP-W18-002

import { readFile, writeFile, glob } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const HTML_GLOB = '.output/public/**/*.html';
const HEADERS_PATH = '.output/public/_headers';

function sha256base64(content) {
  return createHash('sha256').update(content, 'utf8').digest('base64');
}

async function extractInlineScriptHashes() {
  const hashes = new Set();
  for await (const file of glob(HTML_GLOB)) {
    const html = await readFile(file, 'utf8');
    // Match <script ...> senza attributo src=...
    // Il gruppo catturato 1 e il body dello script (contenuto inline)
    const matches = html.matchAll(
      /<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g,
    );
    for (const m of matches) {
      const body = m[1];
      if (body.trim().length > 0) {
        hashes.add(`'sha256-${sha256base64(body)}'`);
      }
    }
  }
  return Array.from(hashes);
}

async function augmentHeaders(hashes) {
  const current = await readFile(HEADERS_PATH, 'utf8');
  const hashList = hashes.join(' ');
  // Pattern: cerca "script-src 'self' 'strict-dynamic'" e aggiunge gli hash
  // prima di 'strict-dynamic'. Il pattern effettivo nel _headers sorgente e
  // "script-src 'self' 'strict-dynamic' https://..." — il replace e ancorato
  // sulla parte iniziale esatta che condividono source e output.
  const replaced = current.replace(
    /script-src 'self' 'strict-dynamic'/,
    `script-src 'self' ${hashList} 'strict-dynamic'`,
  );
  if (replaced === current) {
    console.warn(
      '[csp] script-src pattern not found in _headers — no hashes injected',
    );
    return;
  }
  await writeFile(HEADERS_PATH, replaced, 'utf8');
  console.log(
    `[csp] added ${hashes.length} inline script hashes to _headers`,
  );
}

const hashes = await extractInlineScriptHashes();
if (hashes.length === 0) {
  console.log('[csp] no inline scripts detected in .output/public');
} else {
  await augmentHeaders(hashes);
}
