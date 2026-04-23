#!/usr/bin/env node
// Pre-build guard: garantisce che .env.production contenga SOLO variabili VITE_*.
//
// Una variabile senza prefisso VITE_ in .env.production e' un red flag:
// - Non verrebbe comunque iniettata nel bundle (Vite filtra per prefisso)
// - Ma potrebbe essere un tentativo (o errore) di committare un secret
//
// Questo check viene eseguito automaticamente prima di `npm run build`.
// Fallisce con exit 1 se trova violazioni, bloccando il deploy.

import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = resolve(__dirname, '..', '.env.production');

if (!existsSync(envPath)) {
  console.error('[check-env-production] ERROR: .env.production missing at repo root.');
  console.error('  This file is committed and required for production builds.');
  console.error('  Restore it from git history or .env.example.');
  process.exit(1);
}

const content = readFileSync(envPath, 'utf8');
const violations = [];

content.split('\n').forEach((rawLine, idx) => {
  const line = rawLine.trim();
  if (!line || line.startsWith('#')) return;

  const match = line.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*=/);
  if (!match) return;

  const varName = match[1];
  if (!varName.startsWith('VITE_')) {
    violations.push({ line: idx + 1, name: varName, raw: line });
  }
});

if (violations.length > 0) {
  console.error('[check-env-production] FAIL: non-VITE_ variables in .env.production');
  console.error('');
  console.error('  .env.production is committed to git and injected into the browser bundle.');
  console.error('  Only VITE_* variables (build-time, public) are allowed.');
  console.error('  Non-VITE_ variables may indicate a secret leak attempt.');
  console.error('');
  violations.forEach(v => {
    console.error(`  line ${v.line}: ${v.name}  →  ${v.raw}`);
  });
  console.error('');
  console.error('  Fix: rename the variable with VITE_ prefix (only if it is safe to expose),');
  console.error('       or move it to backend env (DigitalOcean App Platform) / Cloudflare Worker secret.');
  process.exit(1);
}

console.log('[check-env-production] OK: all variables are VITE_* prefixed.');
