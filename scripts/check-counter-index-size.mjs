#!/usr/bin/env node
// WPCP-016 — Asset size guard per counter-index/<lang>.json (CR-063).
//
// NFR-CP-006 AC-006.2: l'asset gz non deve superare 25KB per lingua, perche'
// l'utente lo scarica al primo ingresso su /counter/* e va contato nel budget
// TTFR (200ms p95).
//
// Comportamento:
//   - >=20KB gz -> warning su stderr (early-warning: il refactor schema va programmato).
//   - >25KB gz  -> exit 1 (gate CI bloccante).
//   - file mancante -> exit 1 (devi aver girato `npm run build:counter-index` prima).
//
// Riferimento: design/build-pipeline.md §2 (esempio script) e §7 (perf budget).

import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { gzipSync } from 'node:zlib';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');
const ASSET_DIR = resolve(REPO_ROOT, 'public/counter-index');

import { SUPPORTED_LOCALES } from './locales.mjs';

const LIMIT_GZ = 25 * 1024; // 25KB
const WARN_GZ = 20 * 1024; // 20KB
// WP35.1 — esteso da EN+IT a tutte le 8 lingue del sito.
const LANGS = SUPPORTED_LOCALES;

let failed = false;

for (const lang of LANGS) {
  const path = resolve(ASSET_DIR, `${lang}.json`);
  if (!existsSync(path)) {
    console.error(
      `[check-counter-index-size][FAIL] ${path} not found. Run: npm run build:counter-index`,
    );
    failed = true;
    continue;
  }
  const buf = await readFile(path);
  const gz = gzipSync(buf, { level: 9 }).length;
  const status = gz <= LIMIT_GZ ? 'OK' : 'FAIL';
  const warn = gz > WARN_GZ && gz <= LIMIT_GZ ? ' (warning: approaching 25KB limit)' : '';
  const msg = `[check-counter-index-size][${status}] ${path}: ${gz} bytes gz (limit ${LIMIT_GZ}, raw ${buf.length})${warn}`;
  if (status === 'FAIL') {
    console.error(msg);
    failed = true;
  } else {
    console.log(msg);
  }
}

process.exit(failed ? 1 : 0);
