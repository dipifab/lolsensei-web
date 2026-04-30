#!/usr/bin/env node
// WP35 — Content lint hybrid (Node) (DEC-OP-004 / DEC-OP-018).
//
// Validates `content/champions/{en,it}/*.md` files BEFORE the build:
//
//   HARD failures (exit 1):
//     - frontmatter Zod-equivalent validation (8 fields, regex bounds);
//     - file path lang segment must match frontmatter `language`;
//     - frontmatter `slug` must equal `<champion>-<role>`;
//     - competitor blocklist boundary match in body OR frontmatter;
//     - missing YAML frontmatter block;
//     - quick_learn item dd_id not shoppable on Summoner's Rift on the
//       guide's patch (NOT_IN_JSON / NOT_PURCHASABLE / NOT_IN_STORE /
//       NOT_ON_SR — items removed from shop or moved to other maps);
//     - H2 section headers do not match the canonical 6-section set per
//       locale (Panoramica/Overview, Build Consigliata/Recommended Build,
//       Matchup chiave/Key matchups, Power spike & condizioni di vittoria/
//       Power spikes & win conditions, Errori comuni/Common mistakes,
//       Suggerimento avanzato/Advanced tip).
//
//   SOFT warnings (exit 0):
//     - description length outside [150, 170] (recommended UX/SEO range);
//     - body word count outside [600, 1500] (DEC-OP-024).
//
// Single source of truth for the blocklist:
//   `scripts/competitor-blocklist.txt` (also consumed by check-competitors.sh).
//   Comment lines (`#`) and empty lines ignored. Patterns are ERE regex
//   already escaped (e.g. `op\.gg`).
//
// Shop-availability data is fetched live from Data Dragon
// (`item.json` per patch). Results cached in-process across files of the
// same patch. Network failure = exit 2 (preserves existing semantics:
// hard fail = 1, runtime error = 2). Skip the check by setting
// `LOLAI_SKIP_SHOP_CHECK=1` in the environment (offline dev / CI without
// outbound DNS).
//
// Empty content/ trees are tolerated -> exit 0 (pre-F4 gate).

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import yaml from 'js-yaml';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');
const CONTENT_ROOT = resolve(REPO_ROOT, 'content/champions');
// WP34 — extension to counter/pro-builds editorial content (DEC-OP-W34-014).
// Both directories lint with the same competitor blocklist + frontmatter
// rules. Empty trees tolerated (pre-F4 gate).
const CONTENT_ROOT_COUNTERS = resolve(REPO_ROOT, 'content/counters');
const CONTENT_ROOT_PRO_BUILDS = resolve(REPO_ROOT, 'content/pro-builds');
const BLOCKLIST_FILE = resolve(__dirname, 'competitor-blocklist.txt');

const LANGS = ['en', 'it'];
const ROLES = ['top', 'jungle', 'mid', 'bot', 'support'];
const PATCH_RE = /^\d{1,2}\.\d{1,2}$/;
const SLUG_FRONTMATTER_RE = /^[a-z0-9-]+-(top|jungle|mid|bot|support)$/;
const SLUG_CHAMPION_RE = /^[a-z0-9-]+$/;
const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const DESC_SOFT_MIN = 150;
const DESC_SOFT_MAX = 170;
const WORD_SOFT_MIN = 600;
const WORD_SOFT_MAX = 1500;

let hardFails = 0;
let softWarns = 0;

function loadBlocklist() {
  const raw = readFileSync(BLOCKLIST_FILE, 'utf8');
  const terms = raw
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0 && !l.startsWith('#'));
  if (terms.length === 0) {
    throw new Error(`competitor blocklist is empty: ${BLOCKLIST_FILE}`);
  }
  // Boundary-aware match. Patterns are already regex-escaped (e.g. `op\.gg`).
  return new RegExp(`\\b(?:${terms.join('|')})\\b`, 'i');
}

function fail(file, message) {
  console.error(`[FAIL] ${file}: ${message}`);
  hardFails++;
}

function warn(file, message) {
  console.warn(`[WARN] ${file}: ${message}`);
  softWarns++;
}

function extractFrontmatter(rawMarkdown) {
  const m = rawMarkdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { frontmatter: null, body: rawMarkdown };
  const yamlBlock = m[1];
  const body = rawMarkdown.slice(m[0].length);
  // CR-053: full YAML parse (was a flat trim-based parser that broke on
  // nested blocks like `quick_learn`, leaking nested keys into top-level).
  const fm = yaml.load(yamlBlock, { schema: yaml.JSON_SCHEMA }) ?? {};
  return { frontmatter: fm, body };
}

function lintFrontmatter(file, fm, lang) {
  if (typeof fm.title !== 'string' || fm.title.length < 10 || fm.title.length > 120) {
    fail(file, `frontmatter.title required, length [10, 120]`);
  }
  if (typeof fm.slug !== 'string' || !SLUG_FRONTMATTER_RE.test(fm.slug)) {
    fail(file, `frontmatter.slug must match <champion>-<role>`);
  }
  if (!LANGS.includes(fm.language)) {
    fail(file, `frontmatter.language must be one of ${LANGS.join(', ')}`);
  }
  if (typeof fm.patch !== 'string' || !PATCH_RE.test(fm.patch)) {
    fail(file, `frontmatter.patch must be major.minor (e.g. 14.10)`);
  }
  if (typeof fm.champion !== 'string' || !SLUG_CHAMPION_RE.test(fm.champion)) {
    fail(file, `frontmatter.champion must be lowercase kebab-case`);
  }
  if (!ROLES.includes(fm.role)) {
    fail(file, `frontmatter.role must be one of ${ROLES.join(', ')}`);
  }
  if (typeof fm.last_updated !== 'string' || !ISO_DATE_RE.test(fm.last_updated)) {
    fail(file, `frontmatter.last_updated must be ISO date YYYY-MM-DD`);
  }
  if (typeof fm.description !== 'string' || fm.description.length < 100 || fm.description.length > 200) {
    fail(file, `frontmatter.description length must be [100, 200]`);
  }
  // Cross-field checks.
  if (
    typeof fm.slug === 'string' &&
    typeof fm.champion === 'string' &&
    typeof fm.role === 'string' &&
    fm.slug !== `${fm.champion}-${fm.role}`
  ) {
    fail(file, `slug "${fm.slug}" must equal "${fm.champion}-${fm.role}"`);
  }
  if (typeof fm.language === 'string' && fm.language !== lang) {
    fail(file, `path lang "${lang}" mismatch with frontmatter language "${fm.language}"`);
  }
  // Soft warns (only if frontmatter passed hard checks).
  if (typeof fm.description === 'string' && fm.description.length >= 100) {
    if (fm.description.length < DESC_SOFT_MIN || fm.description.length > DESC_SOFT_MAX) {
      warn(
        file,
        `description.length=${fm.description.length} outside recommended [${DESC_SOFT_MIN}, ${DESC_SOFT_MAX}]`,
      );
    }
  }
  // Quick Learn block (CR-053). Optional. If present, validate shape.
  if (fm.quick_learn !== undefined) {
    lintQuickLearn(file, fm.quick_learn);
  }
}

const ABILITY_KEYS = ['P', 'Q', 'W', 'E', 'R'];
const SKILL_LEVEL_KEYS = ['Q', 'W', 'E', 'R'];
const DAMAGE_TYPES = ['magic', 'physical', 'mixed', 'true'];

// CR-058 (WP35.6) — Stat shards canonical enum (D-3).
// Riot non espone gli shards in runesReforged.json — l'enum hardcoded e' la
// scelta piu' robusta. Mirror manuale di `StatShardEnum` in
// `src/lib/content/champion-schema.ts`. Single source of truth resta lo Zod
// schema TS; questo array deve restare in sync (entrambi sono toccati dallo
// stesso commit).
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

function lintQuickLearn(file, ql) {
  if (typeof ql !== 'object' || ql === null || Array.isArray(ql)) {
    fail(file, `quick_learn: must be an object`);
    return;
  }
  if (typeof ql.champion_dd_id !== 'string' || ql.champion_dd_id.length < 2) {
    fail(file, `quick_learn.champion_dd_id: required string min 2 chars`);
  }
  if (
    typeof ql.difficulty !== 'number' ||
    !Number.isInteger(ql.difficulty) ||
    ql.difficulty < 1 ||
    ql.difficulty > 5
  ) {
    fail(file, `quick_learn.difficulty: integer in [1, 5]`);
  }
  if (!DAMAGE_TYPES.includes(ql.damage_type)) {
    fail(file, `quick_learn.damage_type: one of ${DAMAGE_TYPES.join('/')}`);
  }
  if (typeof ql.champion_class !== 'string' || ql.champion_class.length < 3) {
    fail(file, `quick_learn.champion_class: required string min 3 chars`);
  }
  if (!Array.isArray(ql.abilities) || ql.abilities.length !== 5) {
    fail(file, `quick_learn.abilities: must have exactly 5 entries (P/Q/W/E/R)`);
  } else {
    for (let i = 0; i < ql.abilities.length; i++) {
      const a = ql.abilities[i];
      if (!ABILITY_KEYS.includes(a?.key)) {
        fail(file, `quick_learn.abilities[${i}].key: one of ${ABILITY_KEYS.join('/')}`);
      }
      if (typeof a?.name !== 'string' || a.name.length < 2 || a.name.length > 40) {
        fail(file, `quick_learn.abilities[${i}].name: string in [2, 40]`);
      }
      if (typeof a?.description !== 'string' || a.description.length < 10 || a.description.length > 240) {
        fail(file, `quick_learn.abilities[${i}].description: string in [10, 240]`);
      }
    }
  }
  if (!Array.isArray(ql.skill_order) || ql.skill_order.length !== 18) {
    fail(file, `quick_learn.skill_order: must have exactly 18 entries`);
  } else {
    for (let i = 0; i < ql.skill_order.length; i++) {
      const e = ql.skill_order[i];
      if (!Number.isInteger(e?.level) || e.level !== i + 1) {
        fail(file, `quick_learn.skill_order[${i}].level must be ${i + 1}`);
      }
      if (!SKILL_LEVEL_KEYS.includes(e?.key)) {
        fail(file, `quick_learn.skill_order[${i}].key: one of ${SKILL_LEVEL_KEYS.join('/')}`);
      }
    }
  }
  if (!Array.isArray(ql.core_items) || ql.core_items.length < 3 || ql.core_items.length > 6) {
    fail(file, `quick_learn.core_items: array of [3, 6] entries`);
  } else {
    for (let i = 0; i < ql.core_items.length; i++) {
      const it = ql.core_items[i];
      if (typeof it?.dd_id !== 'string' || !/^\d{3,5}$/.test(it.dd_id)) {
        fail(file, `quick_learn.core_items[${i}].dd_id: numeric string 3-5 digits`);
      }
      if (typeof it?.name !== 'string' || it.name.length < 2 || it.name.length > 40) {
        fail(file, `quick_learn.core_items[${i}].name: string in [2, 40]`);
      }
    }
  }
  if (ql.situational_items !== undefined) {
    if (!Array.isArray(ql.situational_items) || ql.situational_items.length < 2 || ql.situational_items.length > 6) {
      fail(file, `quick_learn.situational_items: array of [2, 6] entries`);
    } else {
      for (let i = 0; i < ql.situational_items.length; i++) {
        const it = ql.situational_items[i];
        if (typeof it?.dd_id !== 'string' || !/^\d{3,5}$/.test(it.dd_id)) {
          fail(file, `quick_learn.situational_items[${i}].dd_id: numeric string 3-5 digits`);
        }
        if (typeof it?.name !== 'string' || it.name.length < 2 || it.name.length > 40) {
          fail(file, `quick_learn.situational_items[${i}].name: string in [2, 40]`);
        }
        if (typeof it?.against !== 'string' || it.against.length < 5 || it.against.length > 140) {
          fail(file, `quick_learn.situational_items[${i}].against: string in [5, 140]`);
        }
      }
    }
  }
  if (!Array.isArray(ql.base_combo) || ql.base_combo.length < 2 || ql.base_combo.length > 8) {
    fail(file, `quick_learn.base_combo: array of [2, 8] short tokens`);
  } else {
    for (let i = 0; i < ql.base_combo.length; i++) {
      const t = ql.base_combo[i];
      if (typeof t !== 'string' || t.length < 1 || t.length > 8) {
        fail(file, `quick_learn.base_combo[${i}]: string in [1, 8]`);
      }
    }
  }
  if (typeof ql.win_condition !== 'string' || ql.win_condition.length < 20 || ql.win_condition.length > 220) {
    fail(file, `quick_learn.win_condition: string in [20, 220]`);
  }
  if (typeof ql.weakness !== 'string' || ql.weakness.length < 20 || ql.weakness.length > 220) {
    fail(file, `quick_learn.weakness: string in [20, 220]`);
  }
  // CR-058 (WP35.6) — Runes block. Optional. Backward-compat con guide
  // pre-CR-058: campo assente -> nessun check.
  if (ql.runes !== undefined) {
    lintRunes(file, ql.runes);
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
function lintRunes(file, runes) {
  if (typeof runes !== 'object' || runes === null || Array.isArray(runes)) {
    fail(file, `quick_learn.runes: must be an object`);
    return;
  }
  // primary_tree
  if (
    typeof runes.primary_tree !== 'string' ||
    runes.primary_tree.length < 3 ||
    runes.primary_tree.length > 20
  ) {
    fail(file, `quick_learn.runes.primary_tree: string in [3, 20]`);
  }
  // primary_tree_dd_id
  if (
    !Number.isInteger(runes.primary_tree_dd_id) ||
    runes.primary_tree_dd_id < 8000 ||
    runes.primary_tree_dd_id > 99999
  ) {
    fail(file, `quick_learn.runes.primary_tree_dd_id: integer in [8000, 99999]`);
  }
  // keystone (1 RuneSlot)
  if (runes.keystone === undefined) {
    fail(file, `quick_learn.runes.keystone: required RuneSlot`);
  } else {
    lintRuneSlot(file, runes.keystone, `quick_learn.runes.keystone`);
  }
  // primary_slots length 3
  if (!Array.isArray(runes.primary_slots) || runes.primary_slots.length !== 3) {
    fail(
      file,
      `quick_learn.runes.primary_slots: array of length 3 (got ${
        Array.isArray(runes.primary_slots) ? runes.primary_slots.length : typeof runes.primary_slots
      })`,
    );
  } else {
    for (let i = 0; i < runes.primary_slots.length; i++) {
      lintRuneSlot(file, runes.primary_slots[i], `quick_learn.runes.primary_slots[${i}]`);
    }
  }
  // secondary_tree
  if (
    typeof runes.secondary_tree !== 'string' ||
    runes.secondary_tree.length < 3 ||
    runes.secondary_tree.length > 20
  ) {
    fail(file, `quick_learn.runes.secondary_tree: string in [3, 20]`);
  }
  // secondary_tree_dd_id
  if (
    !Number.isInteger(runes.secondary_tree_dd_id) ||
    runes.secondary_tree_dd_id < 8000 ||
    runes.secondary_tree_dd_id > 99999
  ) {
    fail(file, `quick_learn.runes.secondary_tree_dd_id: integer in [8000, 99999]`);
  }
  // secondary_slots length 2
  if (!Array.isArray(runes.secondary_slots) || runes.secondary_slots.length !== 2) {
    fail(
      file,
      `quick_learn.runes.secondary_slots: array of length 2 (got ${
        Array.isArray(runes.secondary_slots) ? runes.secondary_slots.length : typeof runes.secondary_slots
      })`,
    );
  } else {
    for (let i = 0; i < runes.secondary_slots.length; i++) {
      lintRuneSlot(file, runes.secondary_slots[i], `quick_learn.runes.secondary_slots[${i}]`);
    }
  }
  // stat_shards length 3, each in canonical enum
  if (!Array.isArray(runes.stat_shards) || runes.stat_shards.length !== 3) {
    fail(
      file,
      `quick_learn.runes.stat_shards: array of length 3 (got ${
        Array.isArray(runes.stat_shards) ? runes.stat_shards.length : typeof runes.stat_shards
      })`,
    );
  } else {
    for (let i = 0; i < runes.stat_shards.length; i++) {
      const s = runes.stat_shards[i];
      if (typeof s !== 'string' || !STAT_SHARDS_CANONICAL.includes(s)) {
        fail(
          file,
          `quick_learn.runes.stat_shards[${i}]: must be one of canonical enum (got ${JSON.stringify(s)}); allowed: ${STAT_SHARDS_CANONICAL.join(' | ')}`,
        );
      }
    }
  }
  // CR-058 v2 — rationale contestuali opzionali, length [20, 280] hard-fail
  // se presenti ma fuori range. Backward-compat: assenti = no-op.
  for (const key of ['primary_rationale', 'secondary_rationale', 'secondary_alternative']) {
    if (runes[key] !== undefined) {
      const v = runes[key];
      if (typeof v !== 'string' || v.length < 20 || v.length > 280) {
        fail(file, `quick_learn.runes.${key}: string in [20, 280] (got length=${typeof v === 'string' ? v.length : typeof v})`);
      }
    }
  }
}

// CR-058 (WP35.6) — Mirror di `RuneSlotSchema` Zod.
function lintRuneSlot(file, slot, path) {
  if (typeof slot !== 'object' || slot === null || Array.isArray(slot)) {
    fail(file, `${path}: must be an object`);
    return;
  }
  if (
    !Number.isInteger(slot.dd_id) ||
    slot.dd_id < 8000 ||
    slot.dd_id > 99999
  ) {
    fail(file, `${path}.dd_id: integer in [8000, 99999]`);
  }
  if (typeof slot.name !== 'string' || slot.name.length < 2 || slot.name.length > 40) {
    fail(file, `${path}.name: string in [2, 40]`);
  }
  if (
    typeof slot.icon_path !== 'string' ||
    slot.icon_path.length < 5 ||
    slot.icon_path.length > 120
  ) {
    fail(file, `${path}.icon_path: string in [5, 120]`);
  }
  // CR-058 v2 — rationale opzionale per slot (per ora usato solo sul keystone).
  if (slot.rationale !== undefined) {
    const v = slot.rationale;
    if (typeof v !== 'string' || v.length < 20 || v.length > 280) {
      fail(file, `${path}.rationale: string in [20, 280] (got length=${typeof v === 'string' ? v.length : typeof v})`);
    }
  }
}

function lintBlocklist(file, fm, body, blockRe) {
  const bodyMatch = body.match(blockRe);
  if (bodyMatch) {
    fail(file, `competitor mention "${bodyMatch[0]}" in body`);
  }
  for (const field of ['title', 'description']) {
    const val = fm[field];
    if (typeof val === 'string') {
      const m = val.match(blockRe);
      if (m) {
        fail(file, `competitor mention "${m[0]}" in frontmatter.${field}`);
      }
    }
  }
}

// Canonical H2 section headers per locale. Body must contain exactly these
// 6 H2s (set equality). Order is not enforced — too brittle for early
// editorial iteration, and the rendering looks fine in any reasonable order.
const CANONICAL_H2 = {
  en: [
    'Overview',
    'Recommended Build',
    'Key matchups',
    'Power spikes & win conditions',
    'Common mistakes',
    'Advanced tip',
  ],
  it: [
    'Panoramica',
    'Build Consigliata',
    'Matchup chiave',
    'Power spike & condizioni di vittoria',
    'Errori comuni',
    'Suggerimento avanzato',
  ],
};

function lintH2Headers(file, body, lang) {
  const expected = CANONICAL_H2[lang];
  if (!expected) return;
  const found = [];
  for (const line of body.split(/\r?\n/)) {
    const m = line.match(/^##\s+(.+?)\s*$/);
    if (m) found.push(m[1]);
  }
  const expectedSet = new Set(expected);
  const foundSet = new Set(found);
  const missing = expected.filter((h) => !foundSet.has(h));
  const extra = found.filter((h) => !expectedSet.has(h));
  if (missing.length || extra.length) {
    const parts = [];
    if (missing.length) parts.push(`missing=[${missing.join(' | ')}]`);
    if (extra.length) parts.push(`unexpected=[${extra.join(' | ')}]`);
    fail(file, `H2 sections do not match canonical ${lang} set: ${parts.join(' ')}`);
  }
}

function lintWordCount(file, body) {
  const stripped = body.replace(/[\s ]+/g, ' ').trim();
  if (!stripped) {
    warn(file, `empty body`);
    return;
  }
  const wordCount = stripped.split(' ').length;
  if (wordCount < WORD_SOFT_MIN || wordCount > WORD_SOFT_MAX) {
    warn(file, `word_count=${wordCount} outside recommended [${WORD_SOFT_MIN}, ${WORD_SOFT_MAX}]`);
  }
}

// In-process cache of item.json per patch (e.g. "16.9" -> { full: "16.9.1",
// items: { "3117": {...}, ... } }). Avoid one fetch per file.
const itemMapCache = new Map();
const SKIP_SHOP_CHECK = process.env.LOLAI_SKIP_SHOP_CHECK === '1';

async function loadItemMap(patch) {
  if (itemMapCache.has(patch)) return itemMapCache.get(patch);
  const versionsResp = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');
  if (!versionsResp.ok) {
    throw new Error(`DD versions.json fetch failed: HTTP ${versionsResp.status}`);
  }
  const versions = await versionsResp.json();
  let full = versions.find((v) => v.startsWith(patch + '.'));
  if (!full) {
    // Older patch: probe likely fix versions until one responds.
    for (const fix of ['.1', '.2', '.3']) {
      const candidate = patch + fix;
      const head = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/${candidate}/data/en_US/item.json`,
        { method: 'HEAD' },
      );
      if (head.ok) { full = candidate; break; }
    }
  }
  if (!full) throw new Error(`Cannot resolve full DD version for patch ${patch}`);
  const r = await fetch(`https://ddragon.leagueoflegends.com/cdn/${full}/data/en_US/item.json`);
  if (!r.ok) throw new Error(`DD item.json fetch failed for ${full}: HTTP ${r.status}`);
  const data = await r.json();
  const entry = { full, items: data.data };
  itemMapCache.set(patch, entry);
  return entry;
}

function shopCheckOne(items, ddId) {
  const it = items[ddId];
  if (!it) return { ok: false, reason: 'NOT_IN_JSON' };
  const g = it.gold ?? {};
  if (!g.purchasable) return { ok: false, reason: 'NOT_PURCHASABLE', name: it.name };
  if (it.inStore === false) return { ok: false, reason: 'NOT_IN_STORE', name: it.name };
  if (it.maps && it.maps['11'] === false) return { ok: false, reason: 'NOT_ON_SR', name: it.name };
  return { ok: true, name: it.name };
}

async function lintShopAvailability(file, fm) {
  const ql = fm.quick_learn;
  if (!ql || typeof fm.patch !== 'string') return;
  let items;
  try {
    ({ items } = await loadItemMap(fm.patch));
  } catch (err) {
    fail(file, `shop-availability check unavailable: ${err.message}`);
    return;
  }
  const check = (slot, idx, entry) => {
    if (typeof entry?.dd_id !== 'string') return; // already flagged by frontmatter validation
    const r = shopCheckOne(items, entry.dd_id);
    if (!r.ok) {
      const ddName = r.name ? ` (DD: ${r.name})` : '';
      fail(
        file,
        `quick_learn.${slot}[${idx}] dd_id=${entry.dd_id} "${entry.name ?? '?'}" not shoppable on SR — ${r.reason}${ddName}`,
      );
    }
  };
  if (Array.isArray(ql.core_items)) {
    ql.core_items.forEach((e, i) => check('core_items', i, e));
  }
  if (Array.isArray(ql.situational_items)) {
    ql.situational_items.forEach((e, i) => check('situational_items', i, e));
  }
}

async function lintFile(filePath, lang, blockRe) {
  const raw = readFileSync(filePath, 'utf8');
  const { frontmatter, body } = extractFrontmatter(raw);
  if (frontmatter === null) {
    fail(filePath, `missing YAML frontmatter block (expected --- ... ---)`);
    return;
  }
  lintFrontmatter(filePath, frontmatter, lang);
  lintBlocklist(filePath, frontmatter, body, blockRe);
  lintH2Headers(filePath, body, lang);
  lintWordCount(filePath, body);
  if (!SKIP_SHOP_CHECK) {
    await lintShopAvailability(filePath, frontmatter);
  }
}

async function scanRoot(root, blockRe) {
  if (!existsSync(root)) return 0;
  let scanned = 0;
  for (const lang of LANGS) {
    const dir = resolve(root, lang);
    if (!existsSync(dir)) continue;
    for (const file of readdirSync(dir)) {
      if (!file.endsWith('.md')) continue;
      await lintFile(resolve(dir, file), lang, blockRe);
      scanned++;
    }
  }
  return scanned;
}

async function main() {
  const blockRe = loadBlocklist();
  // WP35 + WP34 multi-root scan: champions (WP35), counters (WP34),
  // pro-builds (WP34). Empty roots tolerated (pre-F4 gate).
  const championsScanned = await scanRoot(CONTENT_ROOT, blockRe);
  const countersScanned = await scanRoot(CONTENT_ROOT_COUNTERS, blockRe);
  const proBuildsScanned = await scanRoot(CONTENT_ROOT_PRO_BUILDS, blockRe);
  const scanned = championsScanned + countersScanned + proBuildsScanned;
  if (scanned === 0) {
    console.log(
      `[content-lint] no content directories present — nothing to lint.`,
    );
    process.exit(0);
  }
  const shopNote = SKIP_SHOP_CHECK ? ' shop_check=SKIPPED' : '';
  console.log(
    `[content-lint] champions=${championsScanned} counters=${countersScanned} pro_builds=${proBuildsScanned} hard_fails=${hardFails} soft_warns=${softWarns}${shopNote}`,
  );
  process.exit(hardFails > 0 ? 1 : 0);
}

try {
  await main();
} catch (err) {
  console.error(`[content-lint][ERROR] ${err.stack ?? err.message}`);
  process.exit(2);
}
