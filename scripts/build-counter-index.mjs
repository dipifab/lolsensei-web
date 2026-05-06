#!/usr/bin/env node
// WP-COUNTER-PICKER (CR-063) — Counter index builder GC34.
//
// Build-time Node script: legge le guide markdown da
// `content/champions/{en,it}/*.md`, estrae il blocco `matchup_draft` dal
// frontmatter YAML (gia' validato da CR-057), valida i vincoli aggiuntivi
// V1..V6 (ADR-036 enforcement, design/data-model.md §6) e produce
// `public/counter-index/<lang>.json`: un reverse index `enemy_slug ->
// (is_strong_against[], is_weak_against[])` con ratione_excerpt e
// source_anchor pre-calcolati.
//
// Single source of truth: il markdown sorgente (ADR-036 MATCHUP-DERIVED-ONLY).
// Output deterministico: stesso input -> stesso JSON byte-identico
// (sort alfabetico stabile + JSON.stringify indent 2).
//
// Usage:
//   node scripts/build-counter-index.mjs
//   COUNTER_INDEX_FROZEN_DATE=1 node scripts/build-counter-index.mjs   # generated_at=1970-01-01
//
// Esporta:
//   - buildLang(lang, registry, contentDir, opts?) -> CounterIndex object
//   - buildExcerpt(reason) -> string (max EXCERPT_MAX chars, currently 120)
//   - loadRegistry(path) -> Map<slug, { dd_id, key, display_name }>
//   - ValidationError class (per try/catch nei test)
//
// Riferimenti:
//   - design/data-model.md §3 (shape) + §5 (algoritmo) + §6 (V1..V6) + §10 (idempotenza)
//   - design/components.md §1 (pseudocodice)
//   - design/build-pipeline.md §1 (integrazione vinxi)

import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import yaml from 'js-yaml';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');
const DEFAULT_CONTENT_ROOT = resolve(REPO_ROOT, 'content');
const DEFAULT_REGISTRY_PATH = resolve(REPO_ROOT, 'content/_meta/champion-keys.json');
const DEFAULT_OUTPUT_DIR = resolve(REPO_ROOT, 'public/counter-index');

// WP35.1 — esteso da EN+IT a tutte le 8 lingue del sito. Per le lingue senza
// guide il builder produce indice vuoto valido (vedi `emptyIndex` sotto).
import { SUPPORTED_LOCALES } from './locales.mjs';
const LANGS = /** @type {const} */ (SUPPORTED_LOCALES);
const ROLES = /** @type {const} */ (['top', 'jungle', 'mid', 'bot', 'support']);
const SCHEMA_VERSION = 2;
const EXCERPT_MAX = 120;
const EXCERPT_LAST_SPACE_MIN = 70;

// ---------------------------------------------------------------------------
// Errori
// ---------------------------------------------------------------------------

export class ValidationError extends Error {
  /**
   * @param {string} code  Codice rule (V1..V6).
   * @param {string} file  Path file sorgente o "<excerpt>" per helper standalone.
   * @param {string} detail  Messaggio human-readable.
   */
  constructor(code, file, detail) {
    super(`[counter-index][FAIL] ${code} ${file}: ${detail}`);
    this.name = 'ValidationError';
    this.code = code;
    this.file = file;
    this.detail = detail;
  }
}

// ---------------------------------------------------------------------------
// Frontmatter extraction (riusa il pattern di compile-content.mjs)
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
// Validation helpers
// ---------------------------------------------------------------------------

const SLUG_RE = /^[a-z0-9-]+$/;
const SLUG_FRONTMATTER_RE = /^[a-z0-9-]+-(top|jungle|mid|bot|support)$/;

// Alias slug per i champion il cui DdId Riot non rispecchia il nome
// canonico usato dalle guide (apostrofi rimossi, spazi -> trattini, accentate
// normalizzate). Es. Riot DdId "Velkoz" -> nome "Vel'Koz" -> slug guide
// "vel-koz". L'algoritmo `ddIdToSlug` non puo' inferire la separazione di
// "Velkoz" senza un boundary uppercase, quindi serve una mappa esplicita.
//
// Chiave = DdId PascalCase del registry, valore = slug usato dalle guide.
// Lista canonica derivata dai contenuti reali in `content/champions/{en,it}/`.
const SLUG_ALIASES_BY_DDID = Object.freeze({
  AurelionSol: 'aurelion-sol',
  Belveth: 'bel-veth',
  Chogath: 'cho-gath',
  DrMundo: 'dr-mundo',
  JarvanIV: 'jarvan-iv',
  Kaisa: 'kai-sa',
  Khazix: 'kha-zix',
  KogMaw: 'kog-maw',
  KSante: 'k-sante',
  Leblanc: 'leblanc',
  LeeSin: 'lee-sin',
  MasterYi: 'master-yi',
  MissFortune: 'miss-fortune',
  MonkeyKing: 'wukong',
  Nunu: 'nunu-willump',
  RekSai: 'rek-sai',
  Renata: 'renata-glasc',
  TahmKench: 'tahm-kench',
  TwistedFate: 'twisted-fate',
  Velkoz: 'vel-koz',
  XinZhao: 'xin-zhao',
});

/** Convert PascalCase Riot DD ID to kebab-case slug, applicando alias
 *  espliciti (gestisce apostrofi e parole composte non separate da uppercase).
 *  Esempi: "Aatrox" -> "aatrox", "MissFortune" -> "miss-fortune",
 *  "Velkoz" -> "vel-koz" (via alias), "KogMaw" -> "kog-maw" (via alias).
 *
 *  Il `loadRegistry()` indicizza il map per slug canonical aliased E per
 *  slug compressa (`ddId.toLowerCase()`), cosi' guide storiche con subject
 *  "chogath" / "velkoz" / "kogmaw" continuano a risolvere senza V3.
 */
function ddIdToSlug(ddId) {
  if (Object.prototype.hasOwnProperty.call(SLUG_ALIASES_BY_DDID, ddId)) {
    return SLUG_ALIASES_BY_DDID[ddId];
  }
  // Fallback algoritmico: insert hyphen before each uppercase boundary.
  return ddId
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

/** Canonicalizza una slug-input (subject o example) al canonical slug usato
 *  come chiave nell'indice. Il registry contiene sia la slug canonical
 *  aliased che quella compressa per backward-compat. Ritorna `null` se la
 *  slug non e' nel registry (caller solleva V3). */
function canonicalSlug(slug, registry) {
  const entry = registry.get(slug);
  if (!entry) return null;
  return ddIdToSlug(entry.dd_id);
}

// ---------------------------------------------------------------------------
// Registry loader (champion-keys.json)
// ---------------------------------------------------------------------------

/**
 * Carica `content/_meta/champion-keys.json` e produce un Map indicizzato per
 * slug kebab-case. Il file mappa DdId PascalCase -> numeric key. Per il
 * builder serve anche il senso opposto, da slug -> {dd_id, key, display_name}.
 *
 * @param {string} registryPath
 * @returns {Promise<Map<string, { dd_id: string, key: string, display_name: string }>>}
 */
export async function loadRegistry(registryPath = DEFAULT_REGISTRY_PATH) {
  if (!existsSync(registryPath)) {
    throw new Error(
      `[counter-index][ERROR] champion-keys registry not found at ${registryPath}. ` +
        `Run: npm run sync:champion-keys`,
    );
  }
  const raw = await readFile(registryPath, 'utf8');
  const parsed = JSON.parse(raw);
  if (!parsed.keys || typeof parsed.keys !== 'object') {
    throw new Error(`[counter-index][ERROR] malformed registry at ${registryPath}: missing "keys" object`);
  }
  /** @type {Map<string, { dd_id: string, key: string, display_name: string }>} */
  const map = new Map();
  for (const [ddId, key] of Object.entries(parsed.keys)) {
    const canonicalSlug = ddIdToSlug(ddId);
    // Display name = ddId con spazi inseriti agli stessi punti del slug.
    // E' una euristica robusta in EN; per IT viene comunque sovrascritta dal
    // display_name del subject (frontmatter) per i champion che hanno una
    // guida IT. Per gli enemy-only champion, il display name resta l'EN.
    const displayName = ddIdToDisplayName(ddId);
    const entry = {
      dd_id: ddId,
      key: String(key),
      display_name: displayName,
    };
    map.set(canonicalSlug, entry);
    // Alias compressa: per i ddId con alias canonical (es. Velkoz -> vel-koz),
    // registriamo anche la forma compressa (ddIdToSlug fallback algoritmico
    // sulla "raw" ddId.toLowerCase()) cosi' guide storiche che usano
    // "chogath" / "velkoz" / "kogmaw" come subject slug nel frontmatter
    // continuano a risolvere senza V3. Il canonical resta la slug aliased.
    const compressed = ddId.toLowerCase();
    if (compressed !== canonicalSlug && !map.has(compressed)) {
      map.set(compressed, entry);
    }
  }
  return map;
}

function ddIdToDisplayName(ddId) {
  // Casi speciali: i Riot dd_id non rispecchiano sempre il nome canonico.
  const overrides = {
    Belveth: "Bel'Veth",
    Chogath: "Cho'Gath",
    KaiSa: "Kai'Sa",
    Kaisa: "Kai'Sa",
    Khazix: "Kha'Zix",
    KogMaw: "Kog'Maw",
    KSante: "K'Sante",
    Leblanc: 'LeBlanc',
    MonkeyKing: 'Wukong',
    Nunu: 'Nunu & Willump',
    RekSai: "Rek'Sai",
    Renata: 'Renata Glasc',
    Velkoz: "Vel'Koz",
  };
  if (Object.prototype.hasOwnProperty.call(overrides, ddId)) {
    return overrides[ddId];
  }
  return ddId.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
}

// ---------------------------------------------------------------------------
// Frontmatter inline validation (subset di compile-content.mjs)
//
// Ci basta verificare i campi che il builder usa. La validazione completa
// gira gia' in compile-content.mjs nello stesso prebuild step (fail-fast
// upstream). Qui valida solo la presenza/forma dei campi che ci servono e
// la shape di matchup_draft (V2).
// ---------------------------------------------------------------------------

function validateMinimalFrontmatter(fm, file) {
  if (typeof fm.slug !== 'string' || !SLUG_FRONTMATTER_RE.test(fm.slug)) {
    throw new ValidationError(
      'V2',
      file,
      `frontmatter slug invalid (must match <champion>-<role>): ${JSON.stringify(fm.slug)}`,
    );
  }
  if (typeof fm.champion !== 'string' || !SLUG_RE.test(fm.champion)) {
    throw new ValidationError(
      'V2',
      file,
      `frontmatter champion invalid (kebab-case required): ${JSON.stringify(fm.champion)}`,
    );
  }
  if (!ROLES.includes(fm.role)) {
    throw new ValidationError('V2', file, `frontmatter role invalid: ${JSON.stringify(fm.role)}`);
  }
  if (typeof fm.language !== 'string' || !LANGS.includes(fm.language)) {
    throw new ValidationError('V2', file, `frontmatter language invalid: ${JSON.stringify(fm.language)}`);
  }
}

function validateMatchupDraftShape(md, file) {
  if (typeof md !== 'object' || md === null) {
    throw new ValidationError('V2', file, `matchup_draft must be an object`);
  }
  for (const block of ['pick_into', 'counterpicks']) {
    const arr = md[block];
    if (!Array.isArray(arr) || arr.length < 2 || arr.length > 5) {
      throw new ValidationError(
        'V2',
        file,
        `matchup_draft.${block} must be array of [2, 5] entries (got ${
          Array.isArray(arr) ? arr.length : typeof arr
        })`,
      );
    }
    arr.forEach((entry, i) => {
      const path = `matchup_draft.${block}[${i}]`;
      if (typeof entry !== 'object' || entry === null) {
        throw new ValidationError('V2', file, `${path} must be an object`);
      }
      if (
        !Array.isArray(entry.examples) ||
        entry.examples.length < 1 ||
        entry.examples.length > 5
      ) {
        throw new ValidationError(
          'V2',
          file,
          `${path}.examples must be array of [1, 5] champion slugs`,
        );
      }
      entry.examples.forEach((slug, j) => {
        if (typeof slug !== 'string' || !SLUG_RE.test(slug)) {
          throw new ValidationError(
            'V2',
            file,
            `${path}.examples[${j}] must be lowercase kebab-case slug (got ${JSON.stringify(slug)})`,
          );
        }
      });
      if (
        typeof entry.archetype !== 'string' ||
        entry.archetype.length < 5 ||
        entry.archetype.length > 80
      ) {
        throw new ValidationError(
          'V2',
          file,
          `${path}.archetype must be string in [5, 80] (got ${
            typeof entry.archetype === 'string' ? `length=${entry.archetype.length}` : typeof entry.archetype
          })`,
        );
      }
      if (
        typeof entry.reason !== 'string' ||
        entry.reason.length < 20 ||
        entry.reason.length > 280
      ) {
        throw new ValidationError(
          'V2',
          file,
          `${path}.reason must be string in [20, 280] (got ${
            typeof entry.reason === 'string' ? `length=${entry.reason.length}` : typeof entry.reason
          })`,
        );
      }
    });
  }
}

// ---------------------------------------------------------------------------
// V3 / V4 / V5 — semantic validation per-guide
// ---------------------------------------------------------------------------

function validateV3UnknownSlug(md, registry, file) {
  for (const block of ['pick_into', 'counterpicks']) {
    md[block].forEach((entry, i) => {
      entry.examples.forEach((slug) => {
        if (!registry.has(slug)) {
          throw new ValidationError(
            'V3',
            file,
            `unknown champion slug "${slug}" in ${block}[${i}].examples (run npm run sync:champion-keys if Riot added a new champion)`,
          );
        }
      });
    });
  }
}

function validateV4SelfRef(md, subjectCanonical, file, registry, opts = {}) {
  for (const block of ['pick_into', 'counterpicks']) {
    md[block].forEach((entry, i) => {
      entry.examples.forEach((slug) => {
        const canon = canonicalSlug(slug, registry);
        if (canon !== null && canon === subjectCanonical) {
          const err = new ValidationError(
            'V4',
            file,
            `${subjectCanonical} cites itself in ${block}[${i}].examples (self-reference forbidden, alias "${slug}" resolves to subject)`,
          );
          if (opts.lenient) {
            console.warn(`[counter-index][WARN] ${err.message}`);
          } else {
            throw err;
          }
        }
      });
    });
  }
}

function validateV5Contradiction(md, file, registry, opts = {}) {
  const inPickInto = new Set();
  for (const entry of md.pick_into) {
    for (const slug of entry.examples) {
      const canon = canonicalSlug(slug, registry) ?? slug;
      inPickInto.add(canon);
    }
  }
  for (const entry of md.counterpicks) {
    for (const slug of entry.examples) {
      const canon = canonicalSlug(slug, registry) ?? slug;
      if (inPickInto.has(canon)) {
        const err = new ValidationError(
          'V5',
          file,
          `contradictory: "${slug}" (canonical "${canon}") appears in both pick_into and counterpicks`,
        );
        if (opts.lenient) {
          console.warn(`[counter-index][WARN] ${err.message}`);
          continue;
        }
        throw err;
      }
    }
  }
}

// ---------------------------------------------------------------------------
// buildExcerpt + V6
// ---------------------------------------------------------------------------

/**
 * Algoritmo (design/data-model.md §5):
 *   - input <=EXCERPT_MAX trimmed: passthrough
 *   - input >EXCERPT_MAX con frase terminata (.!?) entro EXCERPT_MAX: tronca a fine frase
 *   - altrimenti: tronca a ultimo spazio se >EXCERPT_LAST_SPACE_MIN, altrimenti
 *     hard-truncate a (EXCERPT_MAX-3) + "…"
 * EXCERPT_MAX=120 (era 140 nella prima versione del design data-model.md;
 * ridotto per stare nel budget NFR-CP-006 25KB gz, tradeoff approvato in
 * fase implement Phase 2 fix OI2).
 *
 * V6: throw se input vuoto o whitespace-only (reason malformato).
 *
 * @param {string} reason
 * @returns {string}
 */
export function buildExcerpt(reason) {
  if (typeof reason !== 'string') {
    throw new ValidationError('V6', '<excerpt>', `reason must be a string (got ${typeof reason})`);
  }
  const trimmed = reason.trim();
  if (trimmed.length === 0) {
    throw new ValidationError('V6', '<excerpt>', 'empty rationale_excerpt (reason is empty/whitespace)');
  }
  if (trimmed.length <= EXCERPT_MAX) return trimmed;

  // Tronca a fine frase entro EXCERPT_MAX chars: prima occorrenza di [.!?]
  // seguita da spazio o fine stringa. Cerchiamo il match piu' lungo che
  // termina dentro lo slice di EXCERPT_MAX.
  const sliced = trimmed.slice(0, EXCERPT_MAX);
  const sentenceMatch = sliced.match(/^.*?[.!?](?=\s|$)/);
  if (sentenceMatch) {
    const candidate = sentenceMatch[0].trim();
    if (candidate.length > 0) return candidate;
  }

  // Fallback: tronca all'ultimo spazio se >80, altrimenti hard-truncate.
  const lastSpace = sliced.lastIndexOf(' ');
  if (lastSpace > EXCERPT_LAST_SPACE_MIN) {
    return sliced.slice(0, lastSpace).trim() + '…';
  }
  return sliced.slice(0, EXCERPT_MAX - 3).trim() + '…';
}

// ---------------------------------------------------------------------------
// Build per lingua
// ---------------------------------------------------------------------------

/**
 * @typedef {Object} BuildLangOpts
 * @property {boolean} [frozenDate=false]  Se true, generated_at = "1970-01-01"
 *   (per test deterministici / cache CI). Se false, today UTC ISO date.
 * @property {boolean} [lenient=false]  Se true, V4 (self-ref) e V5
 *   (contradiction) emettono warning invece di throw. Default strict (design
 *   ADR-036). Override anche via env COUNTER_INDEX_LENIENT=1. Da usare solo
 *   per migrazioni di contenuto storico: in CI deve restare strict.
 */

/**
 * Costruisce il CounterIndex per la lingua specificata. NON scrive su disco.
 *
 * @param {'en'|'it'} lang
 * @param {Map<string, { dd_id: string, key: string, display_name: string }>} registry
 * @param {string} contentDir  Directory radice che contiene `champions/<lang>/*.md`.
 * @param {BuildLangOpts} [opts]
 */
export async function buildLang(lang, registry, contentDir, opts = {}) {
  const langDir = resolve(contentDir, 'champions', lang);
  if (!existsSync(langDir)) {
    // Lingua senza guide: ritorna indice vuoto valido.
    return emptyIndex(lang, opts);
  }
  const files = (await readdir(langDir)).filter((f) => f.endsWith('.md'));

  /** @type {Array<{file: string, fm: any}>} */
  const guides = [];
  for (const filename of files) {
    const path = resolve(langDir, filename);
    const raw = await readFile(path, 'utf8');
    const { frontmatter } = extractFrontmatter(raw);
    if (!frontmatter || typeof frontmatter !== 'object') {
      throw new ValidationError('V1', path, 'missing or malformed YAML frontmatter');
    }
    validateMinimalFrontmatter(frontmatter, path);
    if (frontmatter.language !== lang) {
      throw new ValidationError(
        'V2',
        path,
        `frontmatter language="${frontmatter.language}" but file is under content/champions/${lang}/`,
      );
    }
    if (!frontmatter.matchup_draft) {
      // Skip silenzioso: la guida non e' ancora stata aggiornata a CR-057.
      // Il file resta valido — semplicemente non contribuisce all'indice.
      continue;
    }
    validateMatchupDraftShape(frontmatter.matchup_draft, path);
    validateV3UnknownSlug(frontmatter.matchup_draft, registry, path);
    // Subject canonical: il frontmatter.champion potrebbe essere la forma
    // compressa (es. "chogath"); risolviamo al canonical (es. "cho-gath") per
    // confronti coerenti V4 e per indicizzazione.
    const subjectCanonical = canonicalSlug(frontmatter.champion, registry);
    if (subjectCanonical === null) {
      throw new ValidationError(
        'V3',
        path,
        `unknown subject champion slug "${frontmatter.champion}" in frontmatter.champion (run npm run sync:champion-keys)`,
      );
    }
    const lenient = opts.lenient === true || process.env.COUNTER_INDEX_LENIENT === '1';
    validateV4SelfRef(frontmatter.matchup_draft, subjectCanonical, path, registry, { lenient });
    validateV5Contradiction(frontmatter.matchup_draft, path, registry, { lenient });
    guides.push({ file: path, fm: frontmatter, subjectCanonical });
  }

  // Subject champions = unione (champion, role) delle guide pubblicate in lingua.
  // Display name in lingua = title del champion dal frontmatter (extract dal title
  // o fallback al display name registry). Per ora usiamo il display name del registry
  // che e' EN-derived: i fixture mostrano che IT non traduce i nomi dei champion
  // (Aatrox = Aatrox in IT), quindi e' coerente.
  // Indicizziamo i subject per canonical slug (post-alias resolution) per
  // unire correttamente "chogath" e "cho-gath" come stesso champion.
  const subjectInfo = new Map(); // canonicalSlug -> { roles: Set<role>, display_name? }
  for (const { fm, subjectCanonical } of guides) {
    const info = subjectInfo.get(subjectCanonical) ?? { roles: new Set(), display_name: null };
    info.roles.add(fm.role);
    // display_name dal quick_learn.champion_dd_id se disponibile (override
    // canonical via tabella speciale per apostrofi), altrimenti registry.
    if (!info.display_name && fm.quick_learn?.champion_dd_id) {
      info.display_name = ddIdToDisplayName(fm.quick_learn.champion_dd_id);
    }
    if (!info.display_name) {
      info.display_name = registry.get(subjectCanonical)?.display_name ?? subjectCanonical;
    }
    subjectInfo.set(subjectCanonical, info);
  }

  // Reverse index intermedio: enemy_slug -> { is_strong_against[], is_weak_against[] }
  // Le celle sono nello shape v2 compatto: { c, role, r (idx), n }.
  /** @type {Map<string, { is_strong_against: any[], is_weak_against: any[] }>} */
  const byEnemy = new Map();

  // Tabella rationale dedupata: text -> idx. Inseriamo in ordine di prima
  // apparizione per mantenere idempotency (ordine deterministico delle
  // guide -> ordine deterministico della tabella). NB: gli idx sono validi
  // solo per quel specifico build; il client non deve fare assunzioni sul
  // valore dell'idx, solo dereference su `index.rationales[r]`.
  /** @type {Map<string, number>} */
  const rationaleIdx = new Map();
  /** @type {string[]} */
  const rationalesOut = [];
  const internRationale = (text) => {
    let idx = rationaleIdx.get(text);
    if (idx === undefined) {
      idx = rationalesOut.length;
      rationaleIdx.set(text, idx);
      rationalesOut.push(text);
    }
    return idx;
  };

  // Tracker per `gp` (guide_prefix) sui champion subject il cui filename
  // markdown usa una slug compressa diversa dalla canonical (es. "chogath"
  // vs "cho-gath"). canonicalSlug('chogath') === 'cho-gath' ma il guide
  // slug del frontmatter resta "chogath-top".
  /** @type {Map<string, string>} */
  const guidePrefixBySubject = new Map();

  // Itera le guide IN ORDINE ALFABETICO di subjectCanonical poi role per
  // garantire idempotency dell'ordine di intern dei rationale (qualsiasi
  // permutazione del filesystem readdir() produce la stessa tabella).
  const guidesSorted = [...guides].sort((a, b) => {
    if (a.subjectCanonical !== b.subjectCanonical) {
      return a.subjectCanonical.localeCompare(b.subjectCanonical);
    }
    return a.fm.role.localeCompare(b.fm.role);
  });

  for (const { fm, subjectCanonical } of guidesSorted) {
    const publisherSlug = subjectCanonical;
    const publisherRole = fm.role;
    const guideSlug = fm.slug; // <champion>-<role> dal filename/frontmatter (NON canonical)
    // Se guideSlug differisce da `${subjectCanonical}-${role}` registriamo
    // il prefix originale per ricostruzione client-side via `gp`.
    const expectedGuideSlug = `${subjectCanonical}-${publisherRole}`;
    if (guideSlug !== expectedGuideSlug) {
      // Estrai il prefix (tutto prima dell'ultimo "-<role>")
      const guidePrefix = guideSlug.slice(0, guideSlug.length - publisherRole.length - 1);
      guidePrefixBySubject.set(subjectCanonical, guidePrefix);
    }

    /** @param {'pick_into'|'counterpicks'} block */
    const processBlock = (block) => {
      const targetList = block === 'pick_into' ? 'is_strong_against' : 'is_weak_against';

      for (const entry of fm.matchup_draft[block]) {
        const rIdx = internRationale(buildExcerpt(entry.reason));
        for (const enemyRaw of entry.examples) {
          // Canonicalizza enemy slug (es. "chogath" -> "cho-gath") per
          // garantire una sola entry per champion in by_enemy.
          const enemySlug = canonicalSlug(enemyRaw, registry) ?? enemyRaw;
          const cell = {
            c: publisherSlug,
            role: publisherRole,
            r: rIdx,
            n: 0, // computed dopo
          };
          const node = byEnemy.get(enemySlug) ?? {
            is_strong_against: [],
            is_weak_against: [],
          };
          node[targetList].push(cell);
          byEnemy.set(enemySlug, node);
        }
      }
    };

    processBlock('pick_into');
    processBlock('counterpicks');
  }

  // Compute recurrence (n): per ogni enemy + via, conta quante guide
  // distinte (publisher_slug+role unico) cita lo stesso enemy. La semantica
  // e' "quante guide distinte di publisher diverso citano questo enemy nella
  // stessa via" — vedi data-model.md §5. La cella stessa contribuisce con 1
  // alla propria entry.
  for (const node of byEnemy.values()) {
    for (const arr of [node.is_strong_against, node.is_weak_against]) {
      const groups = new Map(); // publisher_slug -> count
      for (const cell of arr) {
        groups.set(cell.c, (groups.get(cell.c) ?? 0) + 1);
      }
      for (const cell of arr) {
        cell.n = groups.get(cell.c);
      }
      // Sort: n desc, c asc, role asc.
      arr.sort((a, b) => {
        if (b.n !== a.n) return b.n - a.n;
        if (a.c !== b.c) return a.c.localeCompare(b.c);
        return a.role.localeCompare(b.role);
      });
    }
  }

  // Costruisce champions: union(subject ∪ enemy) tutti citati nell'indice,
  // emessi come Record<slug, ChampionMeta> (table normalizzata, lookup O(1)
  // dal client durante il rendering delle celle).
  /** @type {Map<string, { roles: Set<string>, has_guide: boolean }>} */
  const championsAcc = new Map();
  for (const [slug, info] of subjectInfo) {
    championsAcc.set(slug, { roles: new Set(info.roles), has_guide: true });
  }
  // cited_in_roles: ruoli per cui ESISTE una guida che CITA lo champion (come enemy).
  for (const [enemySlug, node] of byEnemy) {
    const acc = championsAcc.get(enemySlug) ?? { roles: new Set(), has_guide: false };
    for (const cell of [...node.is_strong_against, ...node.is_weak_against]) {
      acc.roles.add(cell.role);
    }
    championsAcc.set(enemySlug, acc);
  }

  // Build champions Record ordinato alfabetico per chiave (idempotency).
  /** @type {Record<string, any>} */
  const championsOut = {};
  for (const slug of [...championsAcc.keys()].sort()) {
    const info = championsAcc.get(slug);
    const reg = registry.get(slug);
    // V3 al volo per slug non noti al registry (gia' coperto sopra per
    // examples; qui per subject champion). I fixture controllati
    // garantiscono che TUTTI i subject siano nel registry.
    if (!reg) {
      throw new ValidationError(
        'V3',
        `<champions>`,
        `unknown champion slug "${slug}" not in registry (subject or enemy)`,
      );
    }
    // display_name canonical: subject info ha priorita' (proviene dal frontmatter).
    const subjectDn = subjectInfo.get(slug)?.display_name;
    /** @type {Record<string, any>} */
    const meta = {
      display_name: subjectDn ?? reg.display_name,
      dd_id: reg.dd_id,
      key: reg.key,
      cited_in_roles: [...info.roles].sort(),
      has_guide: info.has_guide,
    };
    if (guidePrefixBySubject.has(slug)) {
      meta.gp = guidePrefixBySubject.get(slug);
    }
    championsOut[slug] = meta;
  }

  // by_enemy: object ordinato per chiave (idempotency). Schema v2: niente
  // enemy_slug ridondante (la chiave e' la slug stessa).
  /** @type {Record<string, any>} */
  const byEnemyOut = {};
  for (const enemySlug of [...byEnemy.keys()].sort()) {
    const node = byEnemy.get(enemySlug);
    byEnemyOut[enemySlug] = {
      is_strong_against: node.is_strong_against,
      is_weak_against: node.is_weak_against,
    };
  }

  return {
    schema_version: SCHEMA_VERSION,
    lang,
    generated_at: resolveGeneratedAt(opts),
    rationales: rationalesOut,
    champions: championsOut,
    by_enemy: byEnemyOut,
  };
}

function emptyIndex(lang, opts) {
  return {
    schema_version: SCHEMA_VERSION,
    lang,
    generated_at: resolveGeneratedAt(opts),
    rationales: [],
    champions: {},
    by_enemy: {},
  };
}

function resolveGeneratedAt(opts) {
  if (opts.frozenDate || process.env.COUNTER_INDEX_FROZEN_DATE === '1') {
    return '1970-01-01';
  }
  return new Date().toISOString().slice(0, 10);
}

// ---------------------------------------------------------------------------
// Main entrypoint (CLI)
// ---------------------------------------------------------------------------

async function main() {
  const t0 = Date.now();
  await mkdir(DEFAULT_OUTPUT_DIR, { recursive: true });
  const registry = await loadRegistry();
  let totalEnemies = 0;
  let totalChampions = 0;
  for (const lang of LANGS) {
    const tLang = Date.now();
    const out = await buildLang(lang, registry, DEFAULT_CONTENT_ROOT);
    // Compact JSON (no indent) per minimizzare gz: l'asset e' machine-read,
    // l'indentazione e' inutile e costa ~10% di gz su file di centinaia di KB.
    const json = JSON.stringify(out);
    const outPath = resolve(DEFAULT_OUTPUT_DIR, `${lang}.json`);
    await writeFile(outPath, json, 'utf8');
    const elapsed = Date.now() - tLang;
    const enemies = Object.keys(out.by_enemy).length;
    totalEnemies += enemies;
    totalChampions = Math.max(totalChampions, Object.keys(out.champions).length);
    console.log(
      `[counter-index] ${lang}: ${Object.keys(out.champions).length} champion(s), ${enemies} enemy entr(y/ies), ${elapsed}ms -> ${outPath}`,
    );
  }
  const totalElapsed = Date.now() - t0;
  console.log(
    `[counter-index] done in ${totalElapsed}ms (max ${totalChampions} champions union, ${totalEnemies} enemy entries across langs)`,
  );
}

// Esegui main solo se invocato come script (non come import nei test).
const invokedAsScript =
  import.meta.url === `file://${process.argv[1]}` ||
  process.argv[1]?.endsWith('build-counter-index.mjs');

if (invokedAsScript) {
  main().catch((err) => {
    if (err instanceof ValidationError) {
      console.error(err.message);
    } else {
      console.error(`[counter-index][ERROR] ${err.stack ?? err.message}`);
    }
    process.exit(1);
  });
}
