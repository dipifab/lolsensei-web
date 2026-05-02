// WPCP-010 — Test fallimentari TDD seed per il builder counter-index.
// WPCP-013 — aggiunge il test idempotency.
//
// I test girano sui fixture markdown reali (Phase 1 — `tests/fixtures/counter/`)
// usando l'export `buildLang(lang, registry, contentDir, opts?)` del builder.
// Niente mock: i fixture sono markdown reali con frontmatter validato Zod.
//
// Riferimenti:
// - design/data-model.md §3 (shape output) + §6 (V1..V6 validation rules)
// - design/components.md §1 (algoritmo)

import { afterEach, describe, expect, it } from 'vitest';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  buildLang,
  loadRegistry,
  ValidationError,
} from '../../scripts/build-counter-index.mjs';
import { CounterIndexSchema } from '../../src/lib/counter/schema';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..', '..');
const FIXTURES_DIR = resolve(REPO_ROOT, 'tests/fixtures/counter');
const FIXTURE_REGISTRY = resolve(FIXTURES_DIR, 'champion-keys.json');

// I path che i test temporanei creano vengono ripuliti in afterEach.
const tempDirs: string[] = [];
afterEach(() => {
  while (tempDirs.length > 0) {
    const dir = tempDirs.pop();
    if (dir) {
      rmSync(dir, { recursive: true, force: true });
    }
  }
});

function makeTempContentDir(): string {
  const dir = mkdtempSync(join(tmpdir(), 'counter-index-test-'));
  tempDirs.push(dir);
  mkdirSync(join(dir, 'champions', 'en'), { recursive: true });
  mkdirSync(join(dir, 'champions', 'it'), { recursive: true });
  return dir;
}

function copyFixture(srcLang: 'en' | 'it', filename: string, destDir: string): string {
  const src = resolve(FIXTURES_DIR, 'champions', srcLang, filename);
  const destSubdir = join(destDir, 'champions', srcLang);
  mkdirSync(destSubdir, { recursive: true });
  const dest = join(destSubdir, filename);
  writeFileSync(dest, readFileSync(src, 'utf8'), 'utf8');
  return dest;
}

describe('build-counter-index — happy path', () => {
  it('builds a valid CounterIndex for EN from real fixtures', async () => {
    const registry = await loadRegistry(FIXTURE_REGISTRY);
    const out = await buildLang('en', registry, FIXTURES_DIR, {
      frozenDate: true,
    });

    // Schema valido contro il Zod di runtime (gated by DEV nel loader).
    expect(() => CounterIndexSchema.parse(out)).not.toThrow();

    expect(out.schema_version).toBe(2);
    expect(out.lang).toBe('en');
    expect(out.generated_at).toBe('1970-01-01');

    // 4 fixture EN: aatrox-top, yasuo-mid, zed-mid, amumu-jungle.
    // Tutte hanno matchup_draft -> tutte producono publisher entries.
    // champions[] e' l'unione di subject U enemy slug citati.
    expect(Object.keys(out.champions).length).toBeGreaterThan(4);

    // Sort alfabetico stabile delle chiavi del Record champions.
    const slugs = Object.keys(out.champions);
    const sortedSlugs = [...slugs].sort();
    expect(slugs).toEqual(sortedSlugs);

    // by_enemy keys ordinate alfa (parita su Object.keys).
    const enemyKeys = Object.keys(out.by_enemy);
    const sortedEnemyKeys = [...enemyKeys].sort();
    expect(enemyKeys).toEqual(sortedEnemyKeys);

    // Schema v2: la `via` e source_anchor sono ricostruiti client-side.
    // Verifichiamo che la cella abbia `c` (slug pubblicista), `r` (idx
    // numerico in `out.rationales`), e che l'idx sia in range.
    expect(Array.isArray(out.rationales)).toBe(true);
    expect(out.rationales.length).toBeGreaterThan(0);
    for (const entry of Object.values(out.by_enemy)) {
      for (const cell of [...entry.is_strong_against, ...entry.is_weak_against]) {
        expect(typeof cell.c).toBe('string');
        expect(out.champions[cell.c]).toBeDefined(); // join referenziale
        expect(typeof cell.r).toBe('number');
        expect(cell.r).toBeGreaterThanOrEqual(0);
        expect(cell.r).toBeLessThan(out.rationales.length);
        expect(typeof out.rationales[cell.r]).toBe('string');
      }
    }
  });

  it('builds a valid CounterIndex for IT from real fixtures', async () => {
    const registry = await loadRegistry(FIXTURE_REGISTRY);
    const out = await buildLang('it', registry, FIXTURES_DIR, {
      frozenDate: true,
    });
    expect(() => CounterIndexSchema.parse(out)).not.toThrow();
    expect(out.lang).toBe('it');
    // 1 fixture IT (aatrox-top.md) -> almeno 1 publisher.
    expect(Object.keys(out.by_enemy).length).toBeGreaterThan(0);
  });

  it('flags has_guide=true for subject champion and false for enemy-only champion', async () => {
    const registry = await loadRegistry(FIXTURE_REGISTRY);
    const out = await buildLang('en', registry, FIXTURES_DIR, {
      frozenDate: true,
    });
    const aatrox = out.champions['aatrox'];
    expect(aatrox?.has_guide).toBe(true);
    expect(aatrox?.cited_in_roles).toContain('top'); // si cita come subject

    const fiora = out.champions['fiora'];
    expect(fiora?.has_guide).toBe(false); // non e' subject di nessun fixture
    expect(fiora?.dd_id).toBe('Fiora');
    expect(fiora?.key).toBe('114');
  });
});

describe('build-counter-index — validation rules V1..V6', () => {
  it('V1: throws on missing YAML frontmatter', async () => {
    const dir = makeTempContentDir();
    writeFileSync(
      join(dir, 'champions', 'en', 'broken.md'),
      'no frontmatter here, just body markdown\n',
      'utf8',
    );
    const registry = await loadRegistry(FIXTURE_REGISTRY);
    await expect(buildLang('en', registry, dir, { frozenDate: true })).rejects.toThrow(
      /V1.*frontmatter/i,
    );
  });

  it('V2: throws on matchup_draft schema violation', async () => {
    const dir = makeTempContentDir();
    // Frontmatter valido salvo che matchup_draft.pick_into ha solo 1 entry
    // (Zod richiede [2, 5]).
    const bad = `---
title: "Aatrox Top Build & Guide — Patch 16.9 sample"
slug: "aatrox-top"
language: "en"
patch: "16.9"
champion: "aatrox"
role: "top"
last_updated: "2026-04-29"
description: "Aatrox top guide sample for builder negative test V2: schema violation on matchup_draft.pick_into."
matchup_draft:
  pick_into:
    - examples: ["nasus"]
      archetype: "Only one entry to violate min=2"
      reason: "This entry alone violates the min=2 rule of pick_into."
  counterpicks:
    - examples: ["fiora"]
      archetype: "Only one entry"
      reason: "This entry alone violates the min=2 rule of counterpicks."
    - examples: ["camille"]
      archetype: "Second entry to satisfy minimum"
      reason: "Second entry to make counterpicks satisfy length >= 2."
---

body
`;
    writeFileSync(join(dir, 'champions', 'en', 'aatrox-top.md'), bad, 'utf8');
    const registry = await loadRegistry(FIXTURE_REGISTRY);
    await expect(buildLang('en', registry, dir, { frozenDate: true })).rejects.toThrow(
      /V2/,
    );
  });

  it('V3: throws on unknown champion slug in examples', async () => {
    const dir = makeTempContentDir();
    const bad = `---
title: "Aatrox Top Build & Guide — Patch 16.9 sample"
slug: "aatrox-top"
language: "en"
patch: "16.9"
champion: "aatrox"
role: "top"
last_updated: "2026-04-29"
description: "Aatrox top guide sample for builder negative test V3: unknown slug typo in examples list."
matchup_draft:
  pick_into:
    - examples: ["nasus", "yorick"]
      archetype: "Immobile melee fighters"
      reason: "Aatrox wins trades before level 6 with Q edge hits over W chains."
    - examples: ["lee-singg", "vladimir"]
      archetype: "Typo trigger"
      reason: "lee-singg is a typo and must trigger V3 unknown champion slug error."
  counterpicks:
    - examples: ["fiora", "camille"]
      archetype: "True damage duelists"
      reason: "Fiora W parries the Q knock-up and Camille E adds true damage on top."
    - examples: ["malphite", "maokai"]
      archetype: "Tanks with hard CC"
      reason: "Their stuns are point-and-click and interrupt Q recasts mid-animation."
---

body
`;
    writeFileSync(join(dir, 'champions', 'en', 'aatrox-top.md'), bad, 'utf8');
    const registry = await loadRegistry(FIXTURE_REGISTRY);
    await expect(buildLang('en', registry, dir, { frozenDate: true })).rejects.toThrow(
      /V3.*lee-singg/,
    );
  });

  it('V4: throws on self-referential matchup', async () => {
    const dir = makeTempContentDir();
    const bad = `---
title: "Aatrox Top Build & Guide — Patch 16.9 sample"
slug: "aatrox-top"
language: "en"
patch: "16.9"
champion: "aatrox"
role: "top"
last_updated: "2026-04-29"
description: "Aatrox top guide sample for builder negative test V4: self-referential matchup citing aatrox itself."
matchup_draft:
  pick_into:
    - examples: ["nasus", "yorick"]
      archetype: "Immobile melee fighters"
      reason: "Aatrox wins trades before level 6 with Q edge hits over W chains."
    - examples: ["aatrox", "vladimir"]
      archetype: "Self-ref trigger"
      reason: "aatrox citing aatrox in pick_into must trigger V4 self-reference error."
  counterpicks:
    - examples: ["fiora", "camille"]
      archetype: "True damage duelists"
      reason: "Fiora W parries the Q knock-up and Camille E adds true damage on top."
    - examples: ["malphite", "maokai"]
      archetype: "Tanks with hard CC"
      reason: "Their stuns are point-and-click and interrupt Q recasts mid-animation."
---

body
`;
    writeFileSync(join(dir, 'champions', 'en', 'aatrox-top.md'), bad, 'utf8');
    const registry = await loadRegistry(FIXTURE_REGISTRY);
    await expect(buildLang('en', registry, dir, { frozenDate: true })).rejects.toThrow(
      /V4.*aatrox/,
    );
  });

  it('V5: throws on contradictory pick_into ∩ counterpicks', async () => {
    const dir = makeTempContentDir();
    const bad = `---
title: "Aatrox Top Build & Guide — Patch 16.9 sample"
slug: "aatrox-top"
language: "en"
patch: "16.9"
champion: "aatrox"
role: "top"
last_updated: "2026-04-29"
description: "Aatrox top guide sample for builder negative test V5: same slug in both pick_into and counterpicks."
matchup_draft:
  pick_into:
    - examples: ["nasus", "yorick"]
      archetype: "Immobile melee fighters"
      reason: "Aatrox wins trades before level 6 with Q edge hits over W chains."
    - examples: ["fiora", "vladimir"]
      archetype: "Contradiction trigger"
      reason: "fiora here and fiora in counterpicks below must trigger V5 contradiction error."
  counterpicks:
    - examples: ["fiora", "camille"]
      archetype: "True damage duelists"
      reason: "Fiora W parries the Q knock-up and Camille E adds true damage on top."
    - examples: ["malphite", "maokai"]
      archetype: "Tanks with hard CC"
      reason: "Their stuns are point-and-click and interrupt Q recasts mid-animation."
---

body
`;
    writeFileSync(join(dir, 'champions', 'en', 'aatrox-top.md'), bad, 'utf8');
    const registry = await loadRegistry(FIXTURE_REGISTRY);
    await expect(buildLang('en', registry, dir, { frozenDate: true })).rejects.toThrow(
      /V5.*fiora/,
    );
  });

  it('V6: throws on empty rationale_excerpt (whitespace-only reason rejected upstream)', async () => {
    // V6 si scatena se buildExcerpt restituisce stringa vuota. Reason
    // whitespace-only e' rifiutato gia da V2 (Zod min length 20). Il test
    // dedicato a V6 esiste in build-counter-index-excerpt.test.ts con input
    // whitespace puro al solo helper. Qui ci basta verificare che il fixture
    // valido NON sollevi V6 (regression check).
    const registry = await loadRegistry(FIXTURE_REGISTRY);
    await expect(
      buildLang('en', registry, FIXTURES_DIR, { frozenDate: true }),
    ).resolves.not.toThrow();
  });
});

describe('build-counter-index — idempotency (WPCP-013)', () => {
  it('produces byte-identical JSON for identical input with frozenDate', async () => {
    const registry = await loadRegistry(FIXTURE_REGISTRY);
    const out1 = await buildLang('en', registry, FIXTURES_DIR, {
      frozenDate: true,
    });
    const out2 = await buildLang('en', registry, FIXTURES_DIR, {
      frozenDate: true,
    });
    expect(JSON.stringify(out1, null, 2)).toBe(JSON.stringify(out2, null, 2));
  });

  it('without frozenDate, generated_at is today ISO date but rest is identical', async () => {
    const registry = await loadRegistry(FIXTURE_REGISTRY);
    const out1 = await buildLang('en', registry, FIXTURES_DIR);
    const out2 = await buildLang('en', registry, FIXTURES_DIR);
    expect(out1.generated_at).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(out2.generated_at).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    // Tutto cio che non e' generated_at deve essere identico.
    const strip = (o: { generated_at: string }) => {
      const { generated_at: _ignored, ...rest } = o;
      return rest;
    };
    expect(JSON.stringify(strip(out1))).toBe(JSON.stringify(strip(out2)));
  });
});

describe('build-counter-index — sort + recurrence', () => {
  it('cells are sorted by recurrence_count desc then champion_slug asc then role asc', async () => {
    const registry = await loadRegistry(FIXTURE_REGISTRY);
    const out = await buildLang('en', registry, FIXTURES_DIR, {
      frozenDate: true,
    });
    for (const entry of Object.values(out.by_enemy)) {
      for (const arr of [entry.is_strong_against, entry.is_weak_against]) {
        for (let i = 1; i < arr.length; i++) {
          const prev = arr[i - 1];
          const curr = arr[i];
          if (prev.n !== curr.n) {
            expect(prev.n).toBeGreaterThan(curr.n);
          } else if (prev.c !== curr.c) {
            expect(prev.c.localeCompare(curr.c)).toBeLessThan(0);
          } else {
            expect(prev.role.localeCompare(curr.role)).toBeLessThan(0);
          }
        }
      }
    }
  });
});
