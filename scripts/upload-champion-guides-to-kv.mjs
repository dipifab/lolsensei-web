#!/usr/bin/env node
// Upload dei file generati da `compile-content.mjs` (in dist/kv-uploads/champions)
// nel KV namespace `CHAMPION_GUIDES`. Idempotente: ri-runnabile a ogni cambio
// contenuto. Usa `wrangler kv bulk put` per una sola chiamata API per lingua
// invece di N call singole.
//
// Layout chiavi KV:
//   guides:<lang>:<slug>   →  JSON array di ChampionGuide
//
// Pre-requisito: `npx wrangler whoami` deve essere autenticato (`wrangler login`).
//
// Flag:
//   --dry-run    stampa cosa caricherebbe senza colpire l'API
//   --preview    usa il preview namespace (CHAMPION_GUIDES preview_id)
//   --lang=<l>   uploada solo la lingua indicata (default: tutte)

import { readdir, readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');
const SOURCE_DIR = resolve(REPO_ROOT, 'dist/kv-uploads/champions');
const TMP_DIR = resolve(REPO_ROOT, 'dist/kv-uploads/_bulk');

const args = new Map();
for (const a of process.argv.slice(2)) {
  if (a.startsWith('--')) {
    const [k, v] = a.slice(2).split('=');
    args.set(k, v ?? true);
  }
}

const DRY_RUN = args.get('dry-run') === true;
const PREVIEW = args.get('preview') === true;
const ONLY_LANG = typeof args.get('lang') === 'string' ? args.get('lang') : null;

async function listLangs() {
  const entries = await readdir(SOURCE_DIR, { withFileTypes: true });
  return entries.filter((e) => e.isDirectory()).map((e) => e.name);
}

async function buildBulkPayload(lang) {
  const langDir = resolve(SOURCE_DIR, lang);
  const files = await readdir(langDir);
  const payload = [];
  for (const f of files) {
    if (!f.endsWith('.json')) continue;
    const slug = f.replace(/\.json$/, '');
    const value = await readFile(resolve(langDir, f), 'utf8');
    payload.push({
      key: `guides:${lang}:${slug}`,
      value,
    });
  }
  return payload;
}

async function main() {
  if (!existsSync(SOURCE_DIR)) {
    console.error(
      `[kv-upload][ERROR] ${SOURCE_DIR} non esiste — esegui prima \`npm run prebuild\` (o node scripts/compile-content.mjs).`,
    );
    process.exit(1);
  }
  await mkdir(TMP_DIR, { recursive: true });

  const langs = await listLangs();
  const targets = ONLY_LANG ? langs.filter((l) => l === ONLY_LANG) : langs;
  if (targets.length === 0) {
    console.error(`[kv-upload][ERROR] nessuna lingua matcha --lang=${ONLY_LANG}`);
    process.exit(1);
  }

  for (const lang of targets) {
    const payload = await buildBulkPayload(lang);
    if (payload.length === 0) {
      console.log(`[kv-upload] ${lang}: skipped (0 entries)`);
      continue;
    }
    if (DRY_RUN) {
      console.log(`[kv-upload] ${lang}: DRY RUN — ${payload.length} entries`);
      continue;
    }
    const tmpFile = resolve(TMP_DIR, `${lang}.json`);
    await writeFile(tmpFile, JSON.stringify(payload), 'utf8');
    const cmd = [
      'wrangler',
      'kv',
      'bulk',
      'put',
      '--binding',
      'CHAMPION_GUIDES',
      '--remote',
      ...(PREVIEW ? ['--preview'] : ['--preview', 'false']),
      tmpFile,
    ];
    console.log(`[kv-upload] ${lang}: uploading ${payload.length} entries...`);
    const proc = spawnSync('npx', cmd, {
      cwd: REPO_ROOT,
      stdio: 'inherit',
    });
    if (proc.status !== 0) {
      throw new Error(
        `wrangler kv bulk put failed for ${lang} (exit ${proc.status})`,
      );
    }
  }

  // Pulisci payload temporanei a fine corsa.
  if (!DRY_RUN) {
    await rm(TMP_DIR, { recursive: true, force: true });
  }
  console.log('[kv-upload] done.');
}

main().catch((err) => {
  console.error('[kv-upload][ERROR]', err.stack ?? err.message);
  process.exit(1);
});
