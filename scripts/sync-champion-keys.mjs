#!/usr/bin/env node
// Sync the Riot numeric champion key map from Data Dragon and write
// `content/_meta/champion-keys.json`. Run this when a new champion is added
// or once per major patch — Riot keys are stable, so the file rarely changes.
//
// Output shape: { generated_at, dd_version, keys: { DdId: "<numeric>" } }.
// Sorted by DdId for git-diff stability.
//
// Usage:
//   node scripts/sync-champion-keys.mjs           # uses current DD version
//   DD_VERSION=16.9.1 node scripts/sync-champion-keys.mjs

import { writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');
const OUTPUT = resolve(REPO_ROOT, 'content/_meta/champion-keys.json');

async function fetchJson(url) {
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`HTTP ${resp.status} on ${url}`);
  return resp.json();
}

async function main() {
  let ddVersion = process.env.DD_VERSION;
  if (!ddVersion) {
    const versions = await fetchJson('https://ddragon.leagueoflegends.com/api/versions.json');
    ddVersion = versions[0];
  }
  console.log(`[sync-champion-keys] using DD ${ddVersion}`);
  const data = await fetchJson(
    `https://ddragon.leagueoflegends.com/cdn/${ddVersion}/data/en_US/champion.json`,
  );
  const keys = {};
  for (const [ddId, champ] of Object.entries(data.data)) {
    if (typeof champ.key !== 'string' || !/^\d+$/.test(champ.key)) {
      throw new Error(`unexpected key shape on ${ddId}: ${champ.key}`);
    }
    keys[ddId] = champ.key;
  }
  // Sort keys deterministically.
  const sortedKeys = {};
  for (const k of Object.keys(keys).sort()) sortedKeys[k] = keys[k];

  await mkdir(dirname(OUTPUT), { recursive: true });
  const payload = {
    generated_at: new Date().toISOString().slice(0, 10),
    dd_version: ddVersion,
    keys: sortedKeys,
  };
  await writeFile(OUTPUT, JSON.stringify(payload, null, 2) + '\n', 'utf8');
  console.log(`[sync-champion-keys] wrote ${Object.keys(sortedKeys).length} entries -> ${OUTPUT}`);
}

main().catch((err) => {
  console.error(`[sync-champion-keys][ERROR] ${err.stack ?? err.message}`);
  process.exit(1);
});
