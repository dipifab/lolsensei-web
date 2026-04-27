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
const OUTPUT_DIR = resolve(REPO_ROOT, 'src/data/champions');
const LANGS = ['en', 'it'];
const ROLES = ['top', 'jungle', 'mid', 'bot', 'support'];

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
  if (errs.length) {
    throw new ValidationError(file, errs);
  }
  return fm;
}

const ABILITY_KEYS = ['P', 'Q', 'W', 'E', 'R'];
const SKILL_LEVEL_KEYS = ['Q', 'W', 'E', 'R'];
const DAMAGE_TYPES = ['magic', 'physical', 'mixed', 'true'];

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
      if (typeof a?.description !== 'string' || a.description.length < 10 || a.description.length > 140) {
        errs.push(`quick_learn.abilities[${i}].description: string in [10, 140]`);
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

function countWords(text) {
  const stripped = text.replace(/<[^>]+>/g, ' ').replace(/[\s ]+/g, ' ').trim();
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

async function compileLanguage(lang, top50) {
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
    const html = await renderHtml(body);
    parsed.push({
      ...fm,
      content_html: html,
      word_count: countWords(html),
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
      content_html: guide.content_html,
      word_count: guide.word_count,
      available_patches: allPatches,
      is_latest: isLatest,
      related_champions: related,
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

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });
  const top50 = await loadTop50();
  let totalGuides = 0;
  for (const lang of LANGS) {
    const guides = await compileLanguage(lang, top50);
    const out = emitTsModule(lang, guides);
    await writeFile(resolve(OUTPUT_DIR, `${lang}.ts`), out, 'utf8');
    console.log(`[compile-content] ${lang}: ${guides.length} guide(s) emitted`);
    totalGuides += guides.length;
  }
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
