#!/usr/bin/env node
// WP24 TASK-4-024 — Il dizionario per-locale e' ora splittato in base
// (src/i18n/<lang>.ts) e legal lazy (src/i18n/legal/<lang>.ts). Il check
// mergea virtualmente le due sorgenti e verifica la parita' di chiavi vs EN.
//
// WP35 (CR-045 DEC-7) — il namespace `wp35.*` (champion guides + esports) e'
// MVP EN+IT only. Le route `/<lang>/champion/...` sono whitelisted ai due
// locales: gli altri (es/fr/de/pt-br/ko/zh-hans) non devono ricevere queste
// chiavi. Il check applica una `LOCALE_NAMESPACE_EXEMPTIONS` map per
// escludere selettivamente prefissi di chiave dal parity check.
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const LOCALES_DIR = resolve(__dirname, '..', 'src', 'i18n');
const LEGAL_DIR = resolve(LOCALES_DIR, 'legal');
const BASE = 'en';
const TARGETS = ['it', 'es', 'fr', 'de', 'pt-br', 'ko', 'zh-hans'];

// Per-locale namespace exemptions: prefixes that are allowed to be missing
// in the target locale. Used for feature-gated locales (e.g. WP35 EN+IT only).
//
// `console.` covers WP-AI-LOGS-VIEWER (CR-061): admin console pages are
// EN+IT only by design — they target a small internal audience and do not
// need to be translated for the public locales. IT has full parity vs EN,
// the 6 below are exempted from the `console.*` namespace.
const LOCALE_NAMESPACE_EXEMPTIONS = {
  es: ['wp35.', 'wp34.', 'console.'],
  fr: ['wp35.', 'wp34.', 'console.'],
  de: ['wp35.', 'wp34.', 'console.'],
  'pt-br': ['wp35.', 'wp34.', 'console.'],
  ko: ['wp35.', 'wp34.', 'console.'],
  'zh-hans': ['wp35.', 'wp34.', 'console.'],
};

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

function isExempted(key, exemptions) {
  if (!exemptions || exemptions.length === 0) return false;
  return exemptions.some((prefix) => key.startsWith(prefix));
}

function diff(baseKeys, targetKeys, exemptions) {
  const missing = [...baseKeys].filter(
    (k) => !targetKeys.has(k) && !isExempted(k, exemptions),
  );
  // `extra` rimane sempre hard-fail: nessun locale deve avere chiavi orfane.
  const extra = [...targetKeys].filter((k) => !baseKeys.has(k));
  return { missing, extra };
}

const baseKeys = collectKeys(BASE);
let hasError = false;

for (const locale of TARGETS) {
  const keys = collectKeys(locale);
  const exemptions = LOCALE_NAMESPACE_EXEMPTIONS[locale] ?? [];
  const { missing, extra } = diff(baseKeys, keys, exemptions);
  if (missing.length === 0 && extra.length === 0) {
    const note = exemptions.length
      ? ` (exempt: ${exemptions.join(', ')})`
      : '';
    console.log(`[i18n] ${locale}: OK (${keys.size} keys)${note}`);
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
