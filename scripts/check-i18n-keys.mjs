#!/usr/bin/env node
// WP24 TASK-4-024 — Il dizionario per-locale e' ora splittato in base
// (src/i18n/<lang>.ts) e legal lazy (src/i18n/legal/<lang>.ts). Il check
// mergea virtualmente le due sorgenti e verifica la parita' di chiavi vs EN.
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const LOCALES_DIR = resolve(__dirname, '..', 'src', 'i18n');
const LEGAL_DIR = resolve(LOCALES_DIR, 'legal');
const BASE = 'en';
const TARGETS = ['it', 'es', 'fr', 'de', 'pt-br', 'ko', 'zh-Hans'];

function extractKeys(filePath) {
  if (!existsSync(filePath)) return new Set();
  const src = readFileSync(filePath, 'utf8');
  const keys = new Set();
  const re = /^\s*'([^']+)'\s*:/gm;
  let m;
  while ((m = re.exec(src)) !== null) {
    keys.add(m[1]);
  }
  return keys;
}

function collectKeys(locale) {
  const base = extractKeys(resolve(LOCALES_DIR, `${locale}.ts`));
  const legal = extractKeys(resolve(LEGAL_DIR, `${locale}.ts`));
  // Sanity: nessuna chiave dovrebbe comparire in entrambi i file. Se capita
  // (dup key da refactor manuale), il set union le dedup comunque ma vale
  // la pena segnalare.
  const overlap = [...base].filter((k) => legal.has(k));
  if (overlap.length) {
    console.warn(
      `[i18n] WARN ${locale}: ${overlap.length} keys present in BOTH base and legal: ${overlap
        .slice(0, 5)
        .join(', ')}${overlap.length > 5 ? '...' : ''}`,
    );
  }
  return new Set([...base, ...legal]);
}

function diff(baseKeys, targetKeys) {
  const missing = [...baseKeys].filter((k) => !targetKeys.has(k));
  const extra = [...targetKeys].filter((k) => !baseKeys.has(k));
  return { missing, extra };
}

const baseKeys = collectKeys(BASE);
let hasError = false;

for (const locale of TARGETS) {
  const keys = collectKeys(locale);
  const { missing, extra } = diff(baseKeys, keys);
  if (missing.length === 0 && extra.length === 0) {
    console.log(`[i18n] ${locale}: OK (${keys.size} keys)`);
    continue;
  }
  hasError = true;
  console.error(`[i18n] locale ${locale} mismatch vs ${BASE}:`);
  if (missing.length)
    console.error(
      `  missing (${missing.length}): ${missing.slice(0, 20).join(', ')}${
        missing.length > 20 ? '...' : ''
      }`,
    );
  if (extra.length)
    console.error(
      `  extra (${extra.length}): ${extra.slice(0, 20).join(', ')}${extra.length > 20 ? '...' : ''}`,
    );
}

process.exit(hasError ? 1 : 0);
