#!/usr/bin/env node
// WPCP-050 — Bundle size guard per la route /counter/* (CR-063).
//
// REQ-NF-CP-006 AC-006.1 / AC-006.4: il payload JS scaricato dall'utente
// quando atterra su /[lang]/counter/ o /[lang]/counter/<slug> non deve
// eccedere 30KB gz (al netto delle chunk gia presenti per la chrome di
// pagina come Navbar/Footer/Breadcrumbs, che vengono contate solo se sono
// diventate counter-specific).
//
// Strategia di calcolo (conservativa):
//
//   1. Trova le 2 chunk "entry" della route counter analizzando il bundle:
//      - search entry: chunk che contiene il marker "counter-search-list"
//        (id DOM dell'autocomplete listbox di CounterSearchInput).
//      - detail entry: chunk che contiene il marker "enemy-header-title"
//        (data-testid di EnemyHeader).
//   2. Risolvi tutti gli import statici ricorsivi di queste 2 chunk
//      (transitive closure), ESCLUDENDO le chunk "global" che fanno
//      gia parte del payload di qualsiasi altra pagina (web runtime,
//      router, layout shell). La lista esclude e' calibrata sulla
//      build attuale; nuove chunk globali vanno aggiunte qui.
//   3. Calcola la somma gz dei chunk transitive-closure non globali
//      (con fallback gzip on-the-fly dove il `.gz` precompresso manca).
//   4. Fail con exit 1 se > 30KB. Warn a 25KB.
//
// La metodologia copre lo "scenario peggiore" di deep-link (cold cache):
// l'utente atterra su /counter/zed senza aver mai visitato altre route
// counter. Il global runtime e' gia in cache da home/hub. Per la search
// page si applica la stessa logica.
//
// Riferimenti:
//   - dev-repository/wp-counter-picker/design/accessibility-perf.md §4
//   - dev-repository/wp-counter-picker/tasks/backlog.md WPCP-050

import { readFile, readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { gzipSync } from 'node:zlib';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');
const ASSETS_DIR = resolve(REPO_ROOT, '.output/public/_build/assets');

const LIMIT_GZ = 30 * 1024; // 30KB
const WARN_GZ = 25 * 1024; // 25KB

// Marker testuali univoci per identificare le chunk entry. Sono stringhe
// che appaiono SOLO nelle route counter (non nel resto dell'app).
const SEARCH_ENTRY_MARKER = 'counter-search-list'; // id dell'<ul> autocomplete
const DETAIL_ENTRY_MARKER = 'enemy-header-title'; // testid di EnemyHeader

// Chunk globali da escludere dal conto: payload runtime gia condiviso
// con il resto delle pagine (Navbar/Footer/Breadcrumbs/router/web).
// Pattern matching su prefisso del basename (senza hash).
//
// NOTA: il prefisso `index-` matcha sia la chunk entry della search route
// (index-XXX.js, prodotta da SolidStart per /counter/index.tsx) sia
// chunk shared come index-loader-XXX.js (counter-specific!) e
// index-tnNu5zz2.js (Title/Meta/Link from @solidjs/meta -- global).
// Per disambiguare usiamo un marker counter-specific list piu in basso.
const GLOBAL_CHUNK_PREFIXES = [
  'web-',
  'routes-',
  'Footer-',
  'Navbar-',
  'Breadcrumbs-',
  'HreflangCluster-',
  'JsonLd-',
  'Icon-',
  'index-',
  'routing-',
  'store-',
  'components-',
  'preload-helper-',
  'NotificationItem-',
  'community-notifications-api-',
  'toastStore-',
  'datetime-',
  'ChampionPortrait-',
];

// Marker counter-specifici: chunk che, anche se hanno prefisso "index-",
// vanno comunque contate perche servono solo alla feature counter.
// Identificate dal contenuto:
//   - "by_enemy" → index-loader (zod schema + loader counter)
//   - SEARCH_ENTRY_MARKER → entry route search
const COUNTER_SPECIFIC_MARKERS = [
  'by_enemy',
  SEARCH_ENTRY_MARKER,
  DETAIL_ENTRY_MARKER,
  'is_strong_against',
  'rationale_excerpt',
];

function isGlobalPrefix(chunkBasename) {
  return GLOBAL_CHUNK_PREFIXES.some((p) => chunkBasename.startsWith(p));
}

async function isCounterSpecific(chunkBasename) {
  const code = await readChunk(chunkBasename);
  return COUNTER_SPECIFIC_MARKERS.some((m) => code.includes(m));
}

async function listChunks(dir) {
  if (!existsSync(dir)) {
    throw new Error(`Assets dir not found: ${dir}. Run 'npm run build' first.`);
  }
  const entries = await readdir(dir);
  return entries.filter((f) => f.endsWith('.js'));
}

async function readChunk(name) {
  const buf = await readFile(resolve(ASSETS_DIR, name));
  return buf.toString('utf8');
}

async function chunkGzSize(name) {
  const gzPath = resolve(ASSETS_DIR, name + '.gz');
  if (existsSync(gzPath)) {
    const s = await stat(gzPath);
    return s.size;
  }
  // Fallback on-the-fly: vinxi non precomprime chunk piccoli.
  const buf = await readFile(resolve(ASSETS_DIR, name));
  return gzipSync(buf, { level: 9 }).length;
}

function extractImports(code) {
  // Match `from"./<name>.js"` e `import"./<name>.js"`. Vinxi/Rollup
  // inlina i path relativi nello stesso bundle dir.
  const out = new Set();
  const re = /(?:from|import)\s*"\.\/([^"]+\.js)"/g;
  let m;
  while ((m = re.exec(code)) !== null) {
    out.add(m[1]);
  }
  return Array.from(out);
}

async function findEntryChunk(allChunks, marker) {
  for (const name of allChunks) {
    const code = await readChunk(name);
    if (code.includes(marker)) return name;
  }
  return null;
}

async function transitiveClosure(entry, allChunks) {
  const visited = new Set();
  const queue = [entry];
  while (queue.length > 0) {
    const cur = queue.shift();
    if (visited.has(cur)) continue;
    visited.add(cur);
    if (!allChunks.includes(cur)) continue;
    const code = await readChunk(cur);
    for (const imp of extractImports(code)) {
      if (!visited.has(imp)) queue.push(imp);
    }
  }
  return visited;
}

async function filterCounterRelevant(closure, entry) {
  const out = [];
  for (const c of closure) {
    // L'entry stessa va sempre contata.
    if (c === entry) {
      out.push(c);
      continue;
    }
    // Chunk con prefisso non-global → conta sempre.
    if (!isGlobalPrefix(c)) {
      out.push(c);
      continue;
    }
    // Prefisso global: conta solo se contiene marker counter-specific.
    if (await isCounterSpecific(c)) {
      out.push(c);
    }
  }
  return out;
}

async function measureRoute(label, entry, allChunks) {
  if (!entry) {
    console.error(`[counter-bundle][FAIL] ${label}: entry chunk not found in build.`);
    return { label, totalGz: -1, chunks: [] };
  }
  const closure = await transitiveClosure(entry, allChunks);
  const relevant = await filterCounterRelevant(closure, entry);
  const sizes = await Promise.all(
    relevant.map(async (c) => ({
      name: c,
      gz: await chunkGzSize(c),
    })),
  );
  const totalGz = sizes.reduce((s, x) => s + x.gz, 0);
  return { label, entry, totalGz, chunks: sizes };
}

function fmt(report) {
  const head = `\n[counter-bundle] ${report.label}: total ${report.totalGz} bytes gz (limit ${LIMIT_GZ})`;
  const lines = report.chunks
    .sort((a, b) => b.gz - a.gz)
    .map((c) => `    ${String(c.gz).padStart(6)} gz  ${c.name}`);
  return [head, ...lines].join('\n');
}

async function main() {
  const allChunks = await listChunks(ASSETS_DIR);

  const searchEntry = await findEntryChunk(allChunks, SEARCH_ENTRY_MARKER);
  const detailEntry = await findEntryChunk(allChunks, DETAIL_ENTRY_MARKER);

  const searchReport = await measureRoute(
    '/[lang]/counter/ (search)',
    searchEntry,
    allChunks,
  );
  const detailReport = await measureRoute(
    '/[lang]/counter/<slug> (detail)',
    detailEntry,
    allChunks,
  );

  let failed = false;
  for (const r of [searchReport, detailReport]) {
    if (r.totalGz < 0) {
      failed = true;
      continue;
    }
    console.log(fmt(r));
    if (r.totalGz > LIMIT_GZ) {
      console.error(
        `[counter-bundle][FAIL] ${r.label} exceeds ${LIMIT_GZ} bytes gz (got ${r.totalGz}).`,
      );
      failed = true;
    } else if (r.totalGz > WARN_GZ) {
      console.warn(
        `[counter-bundle][WARN] ${r.label} approaching limit: ${r.totalGz} bytes gz (limit ${LIMIT_GZ}, warn ${WARN_GZ}).`,
      );
    }
  }

  if (failed) {
    console.error('\n[counter-bundle] FAIL.');
    process.exit(1);
  }
  console.log('\n[counter-bundle] OK.');
}

main().catch((err) => {
  console.error('[counter-bundle] unexpected error:', err);
  process.exit(2);
});
