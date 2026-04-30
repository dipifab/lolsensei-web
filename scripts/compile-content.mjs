#!/usr/bin/env node
// WP35 — Champion guide content compile pipeline (DEC-OP-005).
//
// Walks `content/champions/{en,it}/*.md`, parses YAML frontmatter via
// remark-frontmatter (already installed), validates with the shared Zod
// schema (`src/lib/content/champion-schema.ts`), renders Markdown body
// to sanitized HTML via remark-html, computes derived fields
// (available_patches, is_latest, related_champions, word_count) and
// emits `src/data/champions/{en,it}.ts` typed arrays.
//
// Idempotent: re-run produces byte-identical output (deterministic JSON
// stringify + sorted patches + sorted related slug list).
//
// Entry point: `node scripts/compile-content.mjs`. Exit 0 on success,
// 1 on validation error. Empty content/ directories are tolerated -> emits
// empty arrays (preserves typecheck during F0->F4 transition).
//
// Note re: zod import. The Zod schema lives in TypeScript; mjs cannot
// import .ts directly without a loader. We re-implement the validation
// inline here using the same rules — duplicating only the value-shape
// check, the enum bounds, and the regex constraints. The single source
// of truth remains the .ts file (used by the editor + lint via tsx).

import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import yaml from 'js-yaml';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import remarkRehype from 'remark-rehype';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');
const CONTENT_ROOT = resolve(REPO_ROOT, 'content/champions');
const META_TOP50 = resolve(REPO_ROOT, 'content/_meta/top-50-champions.json');
const META_CHAMPION_KEYS = resolve(REPO_ROOT, 'content/_meta/champion-keys.json');
const OUTPUT_DIR = resolve(REPO_ROOT, 'src/data/champions');
const LANGS = ['en', 'it'];
const ROLES = ['top', 'jungle', 'mid', 'bot', 'support'];

// Lazy-load Riot numeric champion keys (synced via scripts/sync-champion-keys.mjs).
// Optional: build still succeeds without the file (champion_key emits null and
// the hub falls back to the slug-based CDragon path + DDragon fallback).
async function loadChampionKeys() {
  if (!existsSync(META_CHAMPION_KEYS)) {
    console.warn(`[compile-content] champion-keys.json missing — run \`node scripts/sync-champion-keys.mjs\` to enable numeric-id splash URLs`);
    return new Map();
  }
  const raw = await readFile(META_CHAMPION_KEYS, 'utf8');
  const parsed = JSON.parse(raw);
  const map = new Map(Object.entries(parsed.keys ?? {}));
  return map;
}

// ---------------------------------------------------------------------------
// Frontmatter validation (mirror of src/lib/content/champion-schema.ts).
// ---------------------------------------------------------------------------

const PATCH_RE = /^\d{1,2}\.\d{1,2}$/;
const SLUG_FRONTMATTER_RE = /^[a-z0-9-]+-(top|jungle|mid|bot|support)$/;
const SLUG_CHAMPION_RE = /^[a-z0-9-]+$/;
const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function validateFrontmatter(fm, file) {
  const errs = [];
  if (typeof fm.title !== 'string' || fm.title.length < 10 || fm.title.length > 120) {
    errs.push(`title: required string in [10, 120] chars`);
  }
  if (typeof fm.slug !== 'string' || !SLUG_FRONTMATTER_RE.test(fm.slug)) {
    errs.push(`slug: must match /^[a-z0-9-]+-(top|jungle|mid|bot|support)$/`);
  }
  if (!LANGS.includes(fm.language)) {
    errs.push(`language: must be one of ${LANGS.join(', ')}`);
  }
  if (typeof fm.patch !== 'string' || !PATCH_RE.test(fm.patch)) {
    errs.push(`patch: must be major.minor (e.g. 14.10)`);
  }
  if (typeof fm.champion !== 'string' || !SLUG_CHAMPION_RE.test(fm.champion)) {
    errs.push(`champion: must be lowercase kebab-case`);
  }
  if (!ROLES.includes(fm.role)) {
    errs.push(`role: must be one of ${ROLES.join(', ')}`);
  }
  if (typeof fm.last_updated !== 'string' || !ISO_DATE_RE.test(fm.last_updated)) {
    errs.push(`last_updated: must be ISO date YYYY-MM-DD`);
  }
  if (typeof fm.description !== 'string' || fm.description.length < 100 || fm.description.length > 200) {
    errs.push(`description: must be in [100, 200] chars`);
  }
  // Cross-field consistency checks (DEC-OP-021).
  if (
    typeof fm.slug === 'string' &&
    typeof fm.champion === 'string' &&
    typeof fm.role === 'string' &&
    fm.slug !== `${fm.champion}-${fm.role}`
  ) {
    errs.push(`slug must equal "<champion>-<role>" (got ${fm.slug} vs ${fm.champion}-${fm.role})`);
  }
  // Quick Learn block (CR-053). Optional. If present, validate shape.
  if (fm.quick_learn !== undefined) {
    validateQuickLearn(fm.quick_learn, errs);
  }
  // Matchup Draft block (CR-057). Optional. If present, validate shape.
  if (fm.matchup_draft !== undefined) {
    validateMatchupDraft(fm.matchup_draft, errs);
  }
  if (errs.length) {
    throw new ValidationError(file, errs);
  }
  return fm;
}

const ABILITY_KEYS = ['P', 'Q', 'W', 'E', 'R'];
const SKILL_LEVEL_KEYS = ['Q', 'W', 'E', 'R'];
const DAMAGE_TYPES = ['magic', 'physical', 'mixed', 'true'];

// CR-058 (WP35.6) — Stat shards canonical enum (D-3). Mirror manuale di
// `StatShardEnum` in `src/lib/content/champion-schema.ts`. Riot non espone
// gli shards in runesReforged.json: l'enum hardcoded e' la scelta robusta.
const STAT_SHARDS_CANONICAL = [
  'Adaptive Force',
  'Attack Speed',
  'Ability Haste',
  'Movement Speed',
  'Health Scaling',
  'Health',
  'Tenacity and Slow Resist',
  'Magic Resist',
  'Armor',
];

function validateQuickLearn(ql, errs) {
  if (typeof ql !== 'object' || ql === null) {
    errs.push(`quick_learn: must be an object`);
    return;
  }
  if (typeof ql.champion_dd_id !== 'string' || ql.champion_dd_id.length < 2) {
    errs.push(`quick_learn.champion_dd_id: required string min 2 chars`);
  }
  if (
    typeof ql.difficulty !== 'number' ||
    !Number.isInteger(ql.difficulty) ||
    ql.difficulty < 1 ||
    ql.difficulty > 5
  ) {
    errs.push(`quick_learn.difficulty: integer in [1, 5]`);
  }
  if (!DAMAGE_TYPES.includes(ql.damage_type)) {
    errs.push(`quick_learn.damage_type: must be one of ${DAMAGE_TYPES.join(', ')}`);
  }
  if (typeof ql.champion_class !== 'string' || ql.champion_class.length < 3) {
    errs.push(`quick_learn.champion_class: required string min 3 chars`);
  }
  if (!Array.isArray(ql.abilities) || ql.abilities.length !== 5) {
    errs.push(`quick_learn.abilities: must have exactly 5 entries (P/Q/W/E/R)`);
  } else {
    for (let i = 0; i < ql.abilities.length; i++) {
      const a = ql.abilities[i];
      if (!ABILITY_KEYS.includes(a?.key)) {
        errs.push(`quick_learn.abilities[${i}].key: must be one of ${ABILITY_KEYS.join('/')}`);
      }
      if (typeof a?.name !== 'string' || a.name.length < 2 || a.name.length > 40) {
        errs.push(`quick_learn.abilities[${i}].name: string in [2, 40]`);
      }
      if (typeof a?.description !== 'string' || a.description.length < 10 || a.description.length > 240) {
        errs.push(`quick_learn.abilities[${i}].description: string in [10, 240]`);
      }
    }
  }
  if (!Array.isArray(ql.skill_order) || ql.skill_order.length !== 18) {
    errs.push(`quick_learn.skill_order: must have exactly 18 entries (levels 1..18)`);
  } else {
    for (let i = 0; i < ql.skill_order.length; i++) {
      const e = ql.skill_order[i];
      if (!Number.isInteger(e?.level) || e.level !== i + 1) {
        errs.push(`quick_learn.skill_order[${i}].level: must be ${i + 1}`);
      }
      if (!SKILL_LEVEL_KEYS.includes(e?.key)) {
        errs.push(`quick_learn.skill_order[${i}].key: must be one of ${SKILL_LEVEL_KEYS.join('/')}`);
      }
    }
  }
  if (!Array.isArray(ql.core_items) || ql.core_items.length < 3 || ql.core_items.length > 6) {
    errs.push(`quick_learn.core_items: array of [3, 6] entries`);
  } else {
    for (let i = 0; i < ql.core_items.length; i++) {
      const it = ql.core_items[i];
      if (typeof it?.dd_id !== 'string' || !/^\d{3,5}$/.test(it.dd_id)) {
        errs.push(`quick_learn.core_items[${i}].dd_id: numeric string 3-5 digits`);
      }
      if (typeof it?.name !== 'string' || it.name.length < 2 || it.name.length > 40) {
        errs.push(`quick_learn.core_items[${i}].name: string in [2, 40]`);
      }
    }
  }
  if (ql.situational_items !== undefined) {
    if (!Array.isArray(ql.situational_items) || ql.situational_items.length < 2 || ql.situational_items.length > 6) {
      errs.push(`quick_learn.situational_items: array of [2, 6] entries`);
    } else {
      for (let i = 0; i < ql.situational_items.length; i++) {
        const it = ql.situational_items[i];
        if (typeof it?.dd_id !== 'string' || !/^\d{3,5}$/.test(it.dd_id)) {
          errs.push(`quick_learn.situational_items[${i}].dd_id: numeric string 3-5 digits`);
        }
        if (typeof it?.name !== 'string' || it.name.length < 2 || it.name.length > 40) {
          errs.push(`quick_learn.situational_items[${i}].name: string in [2, 40]`);
        }
        if (typeof it?.against !== 'string' || it.against.length < 5 || it.against.length > 140) {
          errs.push(`quick_learn.situational_items[${i}].against: string in [5, 140]`);
        }
      }
    }
  }
  if (!Array.isArray(ql.base_combo) || ql.base_combo.length < 2 || ql.base_combo.length > 8) {
    errs.push(`quick_learn.base_combo: array of [2, 8] short tokens`);
  } else {
    for (let i = 0; i < ql.base_combo.length; i++) {
      const t = ql.base_combo[i];
      if (typeof t !== 'string' || t.length < 1 || t.length > 8) {
        errs.push(`quick_learn.base_combo[${i}]: string in [1, 8]`);
      }
    }
  }
  if (typeof ql.win_condition !== 'string' || ql.win_condition.length < 20 || ql.win_condition.length > 220) {
    errs.push(`quick_learn.win_condition: string in [20, 220]`);
  }
  if (typeof ql.weakness !== 'string' || ql.weakness.length < 20 || ql.weakness.length > 220) {
    errs.push(`quick_learn.weakness: string in [20, 220]`);
  }
  // CR-058 (WP35.6) — Runes block. Optional. Backward-compat.
  if (ql.runes !== undefined) {
    validateRunes(ql.runes, errs);
  }
}

// CR-058 (WP35.6) — Mirror di `RunesSchema` Zod in
// `src/lib/content/champion-schema.ts`. Hard-fail su:
// - tipo non-object;
// - missing keys richieste;
// - primary_slots length != 3, secondary_slots length != 2;
// - stat_shards length != 3 o valore non-canonical;
// - dd_id (tree o slot) fuori [8000, 99999];
// - tree name fuori [3, 20];
// - RuneSlot: dd_id fuori range, name fuori [2, 40], icon_path fuori [5, 120].
function validateRunes(runes, errs) {
  if (typeof runes !== 'object' || runes === null || Array.isArray(runes)) {
    errs.push(`quick_learn.runes: must be an object`);
    return;
  }
  if (
    typeof runes.primary_tree !== 'string' ||
    runes.primary_tree.length < 3 ||
    runes.primary_tree.length > 20
  ) {
    errs.push(`quick_learn.runes.primary_tree: string in [3, 20]`);
  }
  if (
    !Number.isInteger(runes.primary_tree_dd_id) ||
    runes.primary_tree_dd_id < 8000 ||
    runes.primary_tree_dd_id > 99999
  ) {
    errs.push(`quick_learn.runes.primary_tree_dd_id: integer in [8000, 99999]`);
  }
  if (runes.keystone === undefined) {
    errs.push(`quick_learn.runes.keystone: required RuneSlot`);
  } else {
    validateRuneSlot(runes.keystone, `quick_learn.runes.keystone`, errs);
  }
  if (!Array.isArray(runes.primary_slots) || runes.primary_slots.length !== 3) {
    errs.push(
      `quick_learn.runes.primary_slots: array of length 3 (got ${
        Array.isArray(runes.primary_slots) ? runes.primary_slots.length : typeof runes.primary_slots
      })`,
    );
  } else {
    for (let i = 0; i < runes.primary_slots.length; i++) {
      validateRuneSlot(runes.primary_slots[i], `quick_learn.runes.primary_slots[${i}]`, errs);
    }
  }
  if (
    typeof runes.secondary_tree !== 'string' ||
    runes.secondary_tree.length < 3 ||
    runes.secondary_tree.length > 20
  ) {
    errs.push(`quick_learn.runes.secondary_tree: string in [3, 20]`);
  }
  if (
    !Number.isInteger(runes.secondary_tree_dd_id) ||
    runes.secondary_tree_dd_id < 8000 ||
    runes.secondary_tree_dd_id > 99999
  ) {
    errs.push(`quick_learn.runes.secondary_tree_dd_id: integer in [8000, 99999]`);
  }
  if (!Array.isArray(runes.secondary_slots) || runes.secondary_slots.length !== 2) {
    errs.push(
      `quick_learn.runes.secondary_slots: array of length 2 (got ${
        Array.isArray(runes.secondary_slots) ? runes.secondary_slots.length : typeof runes.secondary_slots
      })`,
    );
  } else {
    for (let i = 0; i < runes.secondary_slots.length; i++) {
      validateRuneSlot(runes.secondary_slots[i], `quick_learn.runes.secondary_slots[${i}]`, errs);
    }
  }
  if (!Array.isArray(runes.stat_shards) || runes.stat_shards.length !== 3) {
    errs.push(
      `quick_learn.runes.stat_shards: array of length 3 (got ${
        Array.isArray(runes.stat_shards) ? runes.stat_shards.length : typeof runes.stat_shards
      })`,
    );
  } else {
    for (let i = 0; i < runes.stat_shards.length; i++) {
      const s = runes.stat_shards[i];
      if (typeof s !== 'string' || !STAT_SHARDS_CANONICAL.includes(s)) {
        errs.push(
          `quick_learn.runes.stat_shards[${i}]: must be one of canonical enum (got ${JSON.stringify(s)}); allowed: ${STAT_SHARDS_CANONICAL.join(' | ')}`,
        );
      }
    }
  }
  // CR-058 v2 — rationale contestuali opzionali, length [20, 280]. Hard-fail
  // se presenti ma fuori range; assenti = backward-compat con guide v1.
  for (const key of ['primary_rationale', 'secondary_rationale', 'secondary_alternative']) {
    if (runes[key] !== undefined) {
      const v = runes[key];
      if (typeof v !== 'string' || v.length < 20 || v.length > 280) {
        errs.push(`quick_learn.runes.${key}: string in [20, 280] (got length=${typeof v === 'string' ? v.length : typeof v})`);
      }
    }
  }
}

// CR-058 (WP35.6) — Mirror di `RuneSlotSchema` Zod.
function validateRuneSlot(slot, path, errs) {
  if (typeof slot !== 'object' || slot === null || Array.isArray(slot)) {
    errs.push(`${path}: must be an object`);
    return;
  }
  if (
    !Number.isInteger(slot.dd_id) ||
    slot.dd_id < 8000 ||
    slot.dd_id > 99999
  ) {
    errs.push(`${path}.dd_id: integer in [8000, 99999]`);
  }
  if (typeof slot.name !== 'string' || slot.name.length < 2 || slot.name.length > 40) {
    errs.push(`${path}.name: string in [2, 40]`);
  }
  if (
    typeof slot.icon_path !== 'string' ||
    slot.icon_path.length < 5 ||
    slot.icon_path.length > 120
  ) {
    errs.push(`${path}.icon_path: string in [5, 120]`);
  }
  // CR-058 v2 — rationale opzionale per slot (per ora usato solo sul keystone).
  if (slot.rationale !== undefined) {
    const v = slot.rationale;
    if (typeof v !== 'string' || v.length < 20 || v.length > 280) {
      errs.push(`${path}.rationale: string in [20, 280] (got length=${typeof v === 'string' ? v.length : typeof v})`);
    }
  }
}

// CR-057: Matchup Draft block. Optional. If present, validates shape mirror
// of MatchupDraftSchema in src/lib/content/champion-schema.ts.
function validateMatchupDraft(md, errs) {
  if (typeof md !== 'object' || md === null) {
    errs.push(`matchup_draft: must be an object`);
    return;
  }
  for (const block of ['pick_into', 'counterpicks']) {
    const arr = md[block];
    if (!Array.isArray(arr) || arr.length < 2 || arr.length > 5) {
      errs.push(`matchup_draft.${block}: array of [2, 5] entries`);
      continue;
    }
    arr.forEach((entry, i) => {
      const path = `matchup_draft.${block}[${i}]`;
      if (typeof entry !== 'object' || entry === null) {
        errs.push(`${path}: must be an object`);
        return;
      }
      if (
        !Array.isArray(entry.examples) ||
        entry.examples.length < 1 ||
        entry.examples.length > 5
      ) {
        errs.push(`${path}.examples: array of [1, 5] champion slugs`);
      } else {
        entry.examples.forEach((slug, j) => {
          if (typeof slug !== 'string' || !SLUG_CHAMPION_RE.test(slug)) {
            errs.push(`${path}.examples[${j}]: must be lowercase kebab-case slug`);
          }
        });
      }
      if (
        typeof entry.archetype !== 'string' ||
        entry.archetype.length < 5 ||
        entry.archetype.length > 80
      ) {
        errs.push(`${path}.archetype: string in [5, 80]`);
      }
      if (
        typeof entry.reason !== 'string' ||
        entry.reason.length < 20 ||
        entry.reason.length > 280
      ) {
        errs.push(`${path}.reason: string in [20, 280]`);
      }
    });
  }
}

class ValidationError extends Error {
  constructor(file, issues) {
    super(`[${file}] ${issues.join('; ')}`);
    this.file = file;
    this.issues = issues;
  }
}

// ---------------------------------------------------------------------------
// Frontmatter extraction (raw YAML block -> object). CR-053: full YAML parse
// via js-yaml — supporta strutture nidificate (quick_learn block).
// ---------------------------------------------------------------------------

function extractFrontmatter(rawMarkdown) {
  const m = rawMarkdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { frontmatter: null, body: rawMarkdown };
  const yamlBlock = m[1];
  const body = rawMarkdown.slice(m[0].length);
  const frontmatter = yaml.load(yamlBlock, { schema: yaml.JSON_SCHEMA });
  return { frontmatter, body };
}

// ---------------------------------------------------------------------------
// Markdown -> sanitized HTML.
// ---------------------------------------------------------------------------

const renderer = unified()
  .use(remarkParse)
  .use(remarkFrontmatter, ['yaml'])
  .use(remarkRehype)
  .use(rehypeSanitize)
  .use(rehypeStringify);

async function renderHtml(markdownBody) {
  const file = await renderer.process(markdownBody);
  return String(file);
}

// CR-057: split del body markdown sull'header H2 di "Key matchups". Quando la
// guida ha `matchup_draft` nel frontmatter il componente <MatchupDraft /> va
// renderizzato tra Recommended Build e Key matchups, quindi il body viene
// splittato in due parti che il client renderizza prima/dopo del componente.
//
// EN guides: marker `## Key matchups`. IT guides: `## Matchup chiave`.
// Caso di errore: matchup_draft presente ma marker non trovato. Il compile
// fallisce con un errore esplicito (l'autore deve avere la sezione body H2
// per dare la posizione di split).
const MATCHUP_SPLIT_MARKERS = {
  en: /^## Key matchups\s*$/m,
  it: /^## Matchup chiave\s*$/m,
};

function splitBodyForMatchupDraft(body, lang) {
  const re = MATCHUP_SPLIT_MARKERS[lang];
  if (!re) {
    throw new Error(`splitBodyForMatchupDraft: unsupported lang ${lang}`);
  }
  const m = body.match(re);
  if (!m) {
    throw new Error(
      `body has no "${re.source.replace(/[/^$\\]/g, '')}" header — required when matchup_draft is set`,
    );
  }
  const idx = m.index;
  return {
    pre: body.slice(0, idx),
    post: body.slice(idx),
  };
}

function countWords(text) {
  const stripped = text.replace(/<[^>]+>/g, ' ').replace(/[\s ]+/g, ' ').trim();
  if (!stripped) return 0;
  return stripped.split(' ').length;
}

// ---------------------------------------------------------------------------
// Patch comparator (mirror of src/lib/content/patch-version.ts).
// ---------------------------------------------------------------------------

function compareVersions(a, b) {
  const pa = a.match(PATCH_RE);
  const pb = b.match(PATCH_RE);
  if (!pa || !pb) {
    throw new Error(`compareVersions: invalid input ${a} / ${b}`);
  }
  const aMajor = Number(a.split('.')[0]);
  const aMinor = Number(a.split('.')[1]);
  const bMajor = Number(b.split('.')[0]);
  const bMinor = Number(b.split('.')[1]);
  if (aMajor !== bMajor) return aMajor < bMajor ? -1 : 1;
  if (aMinor !== bMinor) return aMinor < bMinor ? -1 : 1;
  return 0;
}

// ---------------------------------------------------------------------------
// Related champions (DEC-OP-017): 3-5 same-role siblings from top-50.
// ---------------------------------------------------------------------------

async function loadTop50() {
  if (!existsSync(META_TOP50)) {
    return { byRole: new Map(), bySlug: new Map() };
  }
  const raw = await readFile(META_TOP50, 'utf8');
  const parsed = JSON.parse(raw);
  const champions = parsed.champions ?? [];
  if (!Array.isArray(champions) || champions.length !== 50) {
    throw new Error(
      `top-50-champions.json must contain exactly 50 entries, got ${champions.length}`,
    );
  }
  const byRole = new Map();
  const bySlug = new Map();
  for (const c of champions) {
    bySlug.set(c.slug, c);
    if (!byRole.has(c.primary_role)) byRole.set(c.primary_role, []);
    byRole.get(c.primary_role).push(c);
  }
  return { byRole, bySlug };
}

function pickRelated(guide, top50, max = 5) {
  const candidates = top50.byRole.get(guide.role) ?? [];
  const filtered = candidates
    .filter((c) => c.slug !== guide.champion)
    .slice(0, max)
    .map((c) => ({
      slug: `${c.slug}-${c.primary_role}`,
      champion: c.slug,
      role: c.primary_role,
    }));
  // Deterministic order: alphabetical by champion slug.
  filtered.sort((a, b) => a.champion.localeCompare(b.champion));
  return filtered;
}

// ---------------------------------------------------------------------------
// Compile pipeline.
// ---------------------------------------------------------------------------

async function compileLanguage(lang, top50, championKeys) {
  const dir = resolve(CONTENT_ROOT, lang);
  if (!existsSync(dir)) {
    return [];
  }
  const files = (await readdir(dir)).filter((f) => f.endsWith('.md'));
  const parsed = [];
  for (const file of files) {
    const path = resolve(dir, file);
    const raw = await readFile(path, 'utf8');
    const { frontmatter, body } = extractFrontmatter(raw);
    if (!frontmatter) {
      throw new ValidationError(path, ['missing YAML frontmatter block']);
    }
    const fm = validateFrontmatter(frontmatter, path);
    if (fm.language !== lang) {
      throw new ValidationError(path, [
        `frontmatter language=${fm.language} but file is under content/champions/${lang}/`,
      ]);
    }
    let content_html;
    let content_html_pre = null;
    let content_html_post = null;
    if (fm.matchup_draft) {
      try {
        const { pre, post } = splitBodyForMatchupDraft(body, lang);
        content_html_pre = await renderHtml(pre);
        content_html_post = await renderHtml(post);
        // content_html resta come fallback / single-block per consumer legacy.
        content_html = await renderHtml(body);
      } catch (e) {
        throw new ValidationError(path, [e.message]);
      }
    } else {
      content_html = await renderHtml(body);
    }
    parsed.push({
      ...fm,
      content_html,
      content_html_pre,
      content_html_post,
      word_count: countWords(content_html),
      _filename: file,
      _path: path,
    });
  }
  // Group by (champion, role) to compute available_patches + is_latest.
  const groups = new Map();
  for (const guide of parsed) {
    const key = `${guide.champion}|${guide.role}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(guide);
  }
  const enriched = parsed.map((guide) => {
    const key = `${guide.champion}|${guide.role}`;
    const siblings = groups.get(key);
    const allPatches = siblings.map((g) => g.patch).sort(compareVersions);
    const latestPatch = allPatches[allPatches.length - 1];
    const isLatest = guide.patch === latestPatch;
    const related = pickRelated(guide, top50);
    const ddId = guide.quick_learn?.champion_dd_id ?? null;
    const championKey = ddId ? championKeys.get(ddId) ?? null : null;
    // Emit shape coerente con ChampionGuide TS interface.
    return {
      slug: guide.slug,
      title: guide.title,
      language: guide.language,
      patch: guide.patch,
      champion: guide.champion,
      role: guide.role,
      last_updated: guide.last_updated,
      description: guide.description,
      ...(guide.quick_learn ? { quick_learn: guide.quick_learn } : {}),
      ...(guide.matchup_draft ? { matchup_draft: guide.matchup_draft } : {}),
      content_html: guide.content_html,
      ...(guide.content_html_pre !== null
        ? { content_html_pre: guide.content_html_pre }
        : {}),
      ...(guide.content_html_post !== null
        ? { content_html_post: guide.content_html_post }
        : {}),
      word_count: guide.word_count,
      available_patches: allPatches,
      is_latest: isLatest,
      related_champions: related,
      champion_key: championKey,
    };
  });
  // Stable order: by champion, then by patch desc (latest first).
  enriched.sort((a, b) => {
    if (a.champion !== b.champion) return a.champion.localeCompare(b.champion);
    if (a.role !== b.role) return a.role.localeCompare(b.role);
    return compareVersions(b.patch, a.patch); // desc
  });
  return enriched;
}

function emitTsModule(lang, guides) {
  const constName = `${lang}Champions`;
  return [
    `// AUTO-GENERATED by scripts/compile-content.mjs — DO NOT EDIT`,
    `// Source: content/champions/${lang}/*.md`,
    `// Run \`npm run prebuild\` to regenerate.`,
    `import type { ChampionGuide } from './types';`,
    ``,
    `export const ${constName}: ChampionGuide[] = ${JSON.stringify(guides, null, 2)};`,
    ``,
  ].join('\n');
}

// WP35.2 (CR-054): hub index. Flat list of unique (champion, role) tuples
// with per-locale metadata. Consumed by ChampionGuidesHub for client-side
// search + filters. Emits a deterministic JSON (sorted entries, sorted keys)
// so re-runs are byte-identical.
function buildHubIndex(guidesByLang) {
  const map = new Map(); // key `${champion}-${role}` → entry
  for (const lang of LANGS) {
    const guides = guidesByLang[lang] ?? [];
    for (const g of guides) {
      const key = `${g.champion}-${g.role}`;
      if (!map.has(key)) {
        map.set(key, {
          slug: key,
          champion: g.champion,
          role: g.role,
          locales: {},
        });
      }
      const entry = map.get(key);
      entry.locales[lang] = {
        title: g.title,
        description: g.description,
        patch: g.patch,
        last_updated: g.last_updated,
        // CR-053 Quick Learn fields, all optional. Hub uses these for
        // filters; absent values fall into the "unknown" filter bucket so
        // pre-CR-053 guides still surface in the hub.
        champion_class: g.quick_learn?.champion_class ?? null,
        difficulty: g.quick_learn?.difficulty ?? null,
        damage_type: g.quick_learn?.damage_type ?? null,
        champion_dd_id: g.quick_learn?.champion_dd_id ?? null,
        champion_key: g.champion_key ?? null,
      };
    }
  }
  const entries = [...map.values()].sort((a, b) => {
    if (a.champion !== b.champion) return a.champion.localeCompare(b.champion);
    return a.role.localeCompare(b.role);
  });
  return {
    generated_at: new Date().toISOString().slice(0, 10),
    guides: entries,
  };
}

// CR-057: counter index. Indice inverso costruito da matchup_draft.* di tutte
// le guide. Forma: { [target_slug]: [{ publisher: {champion, role, lang},
// archetype, reason, via }] }. Usato a runtime dalla feature champ-select
// ("avversario picka X → chi e' forte contro X?"). Output in JSON
// deterministico (sorted by target, sorted by publisher slug).
function buildCounterIndex(guidesByLang) {
  const index = {}; // target slug → array di entry
  for (const lang of LANGS) {
    const guides = guidesByLang[lang] ?? [];
    for (const g of guides) {
      if (!g.matchup_draft) continue;
      const publisher = {
        champion: g.champion,
        role: g.role,
        lang,
      };
      // pick_into: questa guida e' forte contro `target`. La feature lookup
      // su `target` dovrebbe mostrare questa guida come "pick into target".
      for (const entry of g.matchup_draft.pick_into) {
        for (const target of entry.examples) {
          if (!index[target]) index[target] = [];
          index[target].push({
            publisher,
            archetype: entry.archetype,
            reason: entry.reason,
            via: 'pick_into',
          });
        }
      }
      // counterpicks: `target` e' counter di questa guida — semantica inversa.
      // Manteniamo un campo distinto cosi' la UI puo' decidere come mostrarlo
      // (es. "avversario ha pickato X = counter di questo champion").
      for (const entry of g.matchup_draft.counterpicks) {
        for (const target of entry.examples) {
          if (!index[target]) index[target] = [];
          index[target].push({
            publisher,
            archetype: entry.archetype,
            reason: entry.reason,
            via: 'counterpick',
          });
        }
      }
    }
  }
  // Sort deterministico: target alfabetico, entry per publisher slug+lang+via.
  const sorted = {};
  for (const target of Object.keys(index).sort()) {
    sorted[target] = index[target].slice().sort((a, b) => {
      const aKey = `${a.publisher.champion}-${a.publisher.role}|${a.publisher.lang}|${a.via}`;
      const bKey = `${b.publisher.champion}-${b.publisher.role}|${b.publisher.lang}|${b.via}`;
      return aKey.localeCompare(bKey);
    });
  }
  return {
    generated_at: new Date().toISOString().slice(0, 10),
    targets: sorted,
  };
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });
  const top50 = await loadTop50();
  const championKeys = await loadChampionKeys();
  let totalGuides = 0;
  const guidesByLang = {};
  for (const lang of LANGS) {
    const guides = await compileLanguage(lang, top50, championKeys);
    const out = emitTsModule(lang, guides);
    await writeFile(resolve(OUTPUT_DIR, `${lang}.ts`), out, 'utf8');
    console.log(`[compile-content] ${lang}: ${guides.length} guide(s) emitted`);
    guidesByLang[lang] = guides;
    totalGuides += guides.length;
  }
  // CR-054: hub index. JSON instead of TS because consumed at runtime by
  // hub component and at build-time by sitemap script — JSON is portable.
  const hubIndex = buildHubIndex(guidesByLang);
  await writeFile(
    resolve(OUTPUT_DIR, 'index.json'),
    JSON.stringify(hubIndex, null, 2),
    'utf8',
  );
  console.log(
    `[compile-content] hub index: ${hubIndex.guides.length} unique (champion, role) entr(y/ies) emitted`,
  );
  // CR-057: counter index (inverso da matchup_draft).
  const counterIndex = buildCounterIndex(guidesByLang);
  const counterTargets = Object.keys(counterIndex.targets).length;
  await writeFile(
    resolve(OUTPUT_DIR, 'counter-by-target.json'),
    JSON.stringify(counterIndex, null, 2),
    'utf8',
  );
  console.log(
    `[compile-content] counter index: ${counterTargets} target champion(s) covered`,
  );
  console.log(`[compile-content] done: ${totalGuides} total guide(s).`);
}

main().catch((err) => {
  if (err instanceof ValidationError) {
    console.error(`[compile-content][FAIL] ${err.message}`);
  } else {
    console.error(`[compile-content][ERROR] ${err.stack ?? err.message}`);
  }
  process.exit(1);
});
