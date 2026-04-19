#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const LOCALES_DIR = resolve(__dirname, '..', 'src', 'i18n');
const BASE = 'en';
const TARGETS = ['it', 'es', 'fr', 'de', 'pt-br', 'ko', 'zh-Hans'];

function extractKeys(filePath) {
  const src = readFileSync(filePath, 'utf8');
  const keys = new Set();
  const re = /^\s*'([^']+)'\s*:/gm;
  let m;
  while ((m = re.exec(src)) !== null) {
    keys.add(m[1]);
  }
  return keys;
}

function diff(baseKeys, targetKeys) {
  const missing = [...baseKeys].filter((k) => !targetKeys.has(k));
  const extra = [...targetKeys].filter((k) => !baseKeys.has(k));
  return { missing, extra };
}

const baseKeys = extractKeys(resolve(LOCALES_DIR, `${BASE}.ts`));
let hasError = false;

for (const locale of TARGETS) {
  const path = resolve(LOCALES_DIR, `${locale}.ts`);
  const keys = extractKeys(path);
  const { missing, extra } = diff(baseKeys, keys);
  if (missing.length === 0 && extra.length === 0) {
    console.log(`[i18n] ${locale}: OK (${keys.size} keys)`);
    continue;
  }
  hasError = true;
  console.error(`[i18n] locale ${locale} mismatch vs ${BASE}:`);
  if (missing.length) console.error(`  missing (${missing.length}): ${missing.slice(0, 20).join(', ')}${missing.length > 20 ? '...' : ''}`);
  if (extra.length) console.error(`  extra (${extra.length}): ${extra.slice(0, 20).join(', ')}${extra.length > 20 ? '...' : ''}`);
}

process.exit(hasError ? 1 : 0);
