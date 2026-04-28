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
//     - missing YAML frontmatter block.
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

function lintFile(filePath, lang, blockRe) {
  const raw = readFileSync(filePath, 'utf8');
  const { frontmatter, body } = extractFrontmatter(raw);
  if (frontmatter === null) {
    fail(filePath, `missing YAML frontmatter block (expected --- ... ---)`);
    return;
  }
  lintFrontmatter(filePath, frontmatter, lang);
  lintBlocklist(filePath, frontmatter, body, blockRe);
  lintWordCount(filePath, body);
}

function scanRoot(root, blockRe) {
  if (!existsSync(root)) return 0;
  let scanned = 0;
  for (const lang of LANGS) {
    const dir = resolve(root, lang);
    if (!existsSync(dir)) continue;
    for (const file of readdirSync(dir)) {
      if (!file.endsWith('.md')) continue;
      lintFile(resolve(dir, file), lang, blockRe);
      scanned++;
    }
  }
  return scanned;
}

function main() {
  const blockRe = loadBlocklist();
  // WP35 + WP34 multi-root scan: champions (WP35), counters (WP34),
  // pro-builds (WP34). Empty roots tolerated (pre-F4 gate).
  const championsScanned = scanRoot(CONTENT_ROOT, blockRe);
  const countersScanned = scanRoot(CONTENT_ROOT_COUNTERS, blockRe);
  const proBuildsScanned = scanRoot(CONTENT_ROOT_PRO_BUILDS, blockRe);
  const scanned = championsScanned + countersScanned + proBuildsScanned;
  if (scanned === 0) {
    console.log(
      `[content-lint] no content directories present — nothing to lint.`,
    );
    process.exit(0);
  }
  console.log(
    `[content-lint] champions=${championsScanned} counters=${countersScanned} pro_builds=${proBuildsScanned} hard_fails=${hardFails} soft_warns=${softWarns}`,
  );
  process.exit(hardFails > 0 ? 1 : 0);
}

try {
  main();
} catch (err) {
  console.error(`[content-lint][ERROR] ${err.stack ?? err.message}`);
  process.exit(2);
}
