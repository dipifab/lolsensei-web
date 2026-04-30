#!/usr/bin/env node
// WP35.6 Phase 5 — Batch retrofit `runes:` block per le guide champion EN+IT.
//
// Scopo:
//   Inserire un blocco `runes:` strutturato (1 keystone + 3 primary + 2
//   secondary + 3 stat shards) come ultimo campo dentro `quick_learn:` per
//   tutte le guide che NON lo hanno ancora. La fonte verita' e' la prosa
//   body della guida (riga `**Runes:**` o `**Rune:**`), riconciliata con il
//   `runesReforged.json` Data Dragon live della patch corrente.
//
// Comportamento:
//   1. Dry-run pass su TUTTI i file: verifica che ogni nome runa estratto
//      dalla prosa body si risolva nel runesReforged DD live. Niente scritture.
//   2. Se almeno UN file fallisce -> hard-fail TOTALE, nessun file e'
//      modificato (conformita' al requisito Phase 5).
//   3. Se dry-run e' interamente verde -> write pass: modifica il
//      frontmatter di tutti i file in-place.
//
// Politica rationale (Opzione 1 conservativa, decisione utente 2026-04-29):
//   `primary_rationale`, `secondary_rationale`, `secondary_alternative` e
//   `keystone.rationale` vengono popolati SOLO se estraibili in modo
//   affidabile dalla prosa body. Quando non sono estraibili, restano
//   omessi (sono `.optional()` nello schema). NIENTE rationale autogenerati.
//
// Anti-mock: tutti i `dd_id` e `icon_path` provengono da DD live.
// Body invariato (D-7): solo il frontmatter viene modificato.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import https from 'node:https';
import yaml from 'js-yaml';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');
const CONTENT_ROOT = resolve(REPO_ROOT, 'content/champions');
const LANGS = ['en', 'it'];
const TODAY_ISO = '2026-04-29';

// --- HTTP fetch helper -----------------------------------------------------

function httpsGetJson(url) {
  return new Promise((resolveP, rejectP) => {
    https
      .get(url, (res) => {
        if (res.statusCode !== 200) {
          rejectP(new Error(`GET ${url} -> HTTP ${res.statusCode}`));
          res.resume();
          return;
        }
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => {
          try {
            resolveP(JSON.parse(Buffer.concat(chunks).toString('utf8')));
          } catch (err) {
            rejectP(err);
          }
        });
      })
      .on('error', rejectP);
  });
}

// --- DD live data ----------------------------------------------------------

async function fetchDDPatch() {
  const versions = await httpsGetJson(
    'https://ddragon.leagueoflegends.com/api/versions.json',
  );
  // versions[0] e' "<major>.<minor>.<patch>" (es. "16.9.1"). Per matchare il
  // campo `patch:` nel frontmatter (che e' "<major>.<minor>") estraggo le
  // prime due componenti.
  const full = versions[0];
  const [major, minor] = full.split('.');
  return { full, short: `${major}.${minor}` };
}

async function fetchRunesReforged(patchFull) {
  return httpsGetJson(
    `https://ddragon.leagueoflegends.com/cdn/${patchFull}/data/en_US/runesReforged.json`,
  );
}

// Costruisce la mappa lookup: name (lowercase) -> { dd_id, icon_path,
// tree_id, tree_name, slot_index }. Inoltre alberi: tree name (lowercase) ->
// { tree_id, tree_name }.
function buildRuneLookup(treesData) {
  const runeByName = new Map();
  const treeByName = new Map();
  for (const tree of treesData) {
    treeByName.set(tree.name.toLowerCase(), {
      tree_id: tree.id,
      tree_name: tree.name,
    });
    for (let slotIdx = 0; slotIdx < tree.slots.length; slotIdx++) {
      const slot = tree.slots[slotIdx];
      for (const rune of slot.runes) {
        runeByName.set(rune.name.toLowerCase(), {
          dd_id: rune.id,
          name: rune.name,
          icon_path: rune.icon,
          tree_id: tree.id,
          tree_name: tree.name,
          slot_index: slotIdx,
        });
      }
    }
  }
  return { runeByName, treeByName };
}

// Suggerisce fuzzy-match candidati per un nome runa non risolto.
function suggestFuzzy(name, runeByName) {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const candidates = [];
  for (const [knownLc, info] of runeByName.entries()) {
    const knownNorm = knownLc.replace(/[^a-z0-9]/g, '');
    if (
      knownNorm.includes(normalized) ||
      normalized.includes(knownNorm) ||
      knownLc.split(' ')[0] === name.toLowerCase().split(' ')[0]
    ) {
      candidates.push(info.name);
    }
  }
  return candidates.slice(0, 5);
}

// --- Frontmatter parsing ---------------------------------------------------

function splitFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    throw new Error('No frontmatter block found');
  }
  return { fm: match[1], body: match[2] };
}

// --- Body Runes block extraction -------------------------------------------
//
// Estrae il "blocco runes" dalla prosa body: dalla prima riga che inizia
// con `**Runes:**` o `**Rune:**` (case-insensitive) fino alla prossima
// riga di header H2 (`## `) o fine documento.
//
// La struttura puo' essere:
//   - paragrafo singolo (Lux, Ahri, Lee Sin, Aatrox, ...)
//   - preamble + bullet list (Bard, alcuni altri)
function extractRunesParagraph(body) {
  const lines = body.split(/\r?\n/);
  const labelRe = /^\*\*Runes?:\*\*\s+/i;
  for (let i = 0; i < lines.length; i++) {
    if (labelRe.test(lines[i])) {
      const blockLines = [lines[i]];
      for (let j = i + 1; j < lines.length; j++) {
        if (/^##\s/.test(lines[j])) break; // next H2 -> stop
        blockLines.push(lines[j]);
      }
      return blockLines.join(' ');
    }
  }
  return null;
}

// Estrae nomi runa in grassetto markdown (`**Name**`) dal paragrafo. Filtra
// matchando contro il lookup DD: solo i nomi che risolvono ad albero o runa
// vengono restituiti, nell'ordine di apparizione, con il loro tipo.
function tokenizeRuneParagraph(para, runeByName, treeByName) {
  const tokens = [];
  const re = /\*\*([^*]+?)\*\*/g;
  let m;
  while ((m = re.exec(para)) !== null) {
    const raw = m[1].trim();
    const lc = raw.toLowerCase();
    if (treeByName.has(lc)) {
      tokens.push({
        kind: 'tree',
        name: treeByName.get(lc).tree_name,
        info: treeByName.get(lc),
        raw,
      });
    } else if (runeByName.has(lc)) {
      tokens.push({
        kind: 'rune',
        name: runeByName.get(lc).name,
        info: runeByName.get(lc),
        raw,
      });
    }
  }
  return tokens;
}

// Estrae i campi runes dai token. Strategia:
//   1. Trova il primo token `tree` -> primary tree.
//   2. Cerca i successivi 4 token `rune` che appartengono al primary tree.
//      Il primo e' la keystone (slot 0), i 3 successivi sono i primary perks.
//   3. Cerca il prossimo token `tree` !== primary -> secondary tree.
//   4. Cerca i prossimi 2 token `rune` che appartengono al secondary tree.
function extractRunesFromTokens(tokens) {
  const primaryTreeIdx = tokens.findIndex((t) => t.kind === 'tree');
  if (primaryTreeIdx === -1) {
    return { ok: false, error: 'no_primary_tree' };
  }
  const primaryTree = tokens[primaryTreeIdx];

  const primaryPerks = [];
  let cursor = primaryTreeIdx + 1;
  for (
    ;
    cursor < tokens.length && primaryPerks.length < 4;
    cursor++
  ) {
    const t = tokens[cursor];
    if (t.kind === 'tree') {
      if (primaryPerks.length === 0) {
        return { ok: false, error: 'primary_tree_followed_by_tree' };
      }
      break;
    }
    if (t.info.tree_id !== primaryTree.info.tree_id) {
      return {
        ok: false,
        error: `primary_perk_wrong_tree:${t.name}(want=${primaryTree.name},got=${t.info.tree_name})`,
      };
    }
    primaryPerks.push(t);
  }
  if (primaryPerks.length < 4) {
    return {
      ok: false,
      error: `primary_perks_insufficient:found=${primaryPerks.length}_expected=4`,
    };
  }

  let secondaryTree = null;
  for (; cursor < tokens.length; cursor++) {
    const t = tokens[cursor];
    if (
      t.kind === 'tree' &&
      t.info.tree_id !== primaryTree.info.tree_id
    ) {
      secondaryTree = t;
      cursor++;
      break;
    }
  }
  if (!secondaryTree) {
    return { ok: false, error: 'no_secondary_tree' };
  }

  const secondaryPerks = [];
  for (
    ;
    cursor < tokens.length && secondaryPerks.length < 2;
    cursor++
  ) {
    const t = tokens[cursor];
    if (t.kind === 'tree') {
      // "or **OtherTree** with ..." -> ci fermiamo: la prima coppia trovata
      // dopo il secondary tree e' canonica.
      break;
    }
    if (t.info.tree_id !== secondaryTree.info.tree_id) {
      return {
        ok: false,
        error: `secondary_perk_wrong_tree:${t.name}(want=${secondaryTree.name},got=${t.info.tree_name})`,
      };
    }
    secondaryPerks.push(t);
  }
  if (secondaryPerks.length < 2) {
    return {
      ok: false,
      error: `secondary_perks_insufficient:found=${secondaryPerks.length}_expected=2`,
    };
  }

  return {
    ok: true,
    primaryTree,
    keystone: primaryPerks[0],
    primarySlots: primaryPerks.slice(1),
    secondaryTree,
    secondarySlots: secondaryPerks,
  };
}

// Trova nomi-grassetto NON risolti che potrebbero essere rune (per
// suggerimento fuzzy-match in caso di hard-fail).
function findUnresolvedRuneCandidates(para, runeByName, treeByName) {
  const found = new Set();
  const re = /\*\*([^*]+?)\*\*/g;
  let m;
  // Hint testuali: parole che plausibilmente sono nomi runa.
  const RUNE_HINT = /^(legend:|.*hunter|eyeball|zombie|aery|comet|conqueror|electrocute|grasp|aftershock|guardian|press|fleet|lethal|hail|dark|sudden|cheap|taste|treasure|relentless|ultimate|second|magical|cosmic|biscuit|transcendence|scorch|gathering|presence|coup|cut|last|absolute|absorb|axiom|nimbus|celerity|waterwalking|first|glacial|unsealed|hextech|cash|triple|time|approach|jack|sixth|grisly|deep|font|shield|conditioning|bone|overgrowth|revitalize|unflinching|demolish|stormraider|deathfire|alacrity|haste|bloodline|tenacity|footwear|manaflow)/i;
  while ((m = re.exec(para)) !== null) {
    const raw = m[1].trim();
    const lc = raw.toLowerCase();
    if (treeByName.has(lc) || runeByName.has(lc)) continue;
    if (RUNE_HINT.test(lc)) {
      found.add(raw);
    }
  }
  return Array.from(found);
}

// --- AP/AD detection per stat shards default -------------------------------

function defaultStatShards(damageType) {
  // Decisione utente Phase 5: shards di default conservativi per AP/AD.
  // Il body delle guide raramente specifica shards; questo default copre la
  // maggior parte dei casi. La revisione editoriale post-batch potra' tunare.
  if (damageType === 'magic') {
    return ['Adaptive Force', 'Adaptive Force', 'Health Scaling'];
  }
  if (damageType === 'physical' || damageType === 'mixed') {
    return ['Adaptive Force', 'Attack Speed', 'Health Scaling'];
  }
  return ['Adaptive Force', 'Adaptive Force', 'Health Scaling'];
}

// --- Rationale extraction (Opzione 1: solo se estraibili dalla prosa) ------
//
// Decisione utente 2026-04-29: NON inventare. Estrarre rationale di qualita'
// richiede NLP. La consegna esplicita "meglio campi mancanti che rationale
// autogenerati con frasi superficiali" -> ritorno null per default. La
// popolazione manuale e' rinviata alla revisione editoriale post-batch.
function extractRationale(_body, _result) {
  return {
    primary_rationale: null,
    secondary_rationale: null,
    secondary_alternative: null,
    keystone_rationale: null,
  };
}

// --- YAML emission ---------------------------------------------------------

function emitRunesYaml(result, statShards, rationale) {
  const lines = [];
  lines.push('  runes:');
  lines.push(`    primary_tree: "${result.primaryTree.name}"`);
  lines.push(`    primary_tree_dd_id: ${result.primaryTree.info.tree_id}`);
  lines.push('    keystone:');
  lines.push(`      dd_id: ${result.keystone.info.dd_id}`);
  lines.push(`      name: "${escapeYamlString(result.keystone.info.name)}"`);
  lines.push(`      icon_path: "${result.keystone.info.icon_path}"`);
  if (rationale.keystone_rationale) {
    lines.push(
      `      rationale: "${escapeYamlString(rationale.keystone_rationale)}"`,
    );
  }
  lines.push('    primary_slots:');
  for (const slot of result.primarySlots) {
    lines.push(
      `      - { dd_id: ${slot.info.dd_id}, name: "${escapeYamlString(slot.info.name)}", icon_path: "${slot.info.icon_path}" }`,
    );
  }
  lines.push(`    secondary_tree: "${result.secondaryTree.name}"`);
  lines.push(
    `    secondary_tree_dd_id: ${result.secondaryTree.info.tree_id}`,
  );
  lines.push('    secondary_slots:');
  for (const slot of result.secondarySlots) {
    lines.push(
      `      - { dd_id: ${slot.info.dd_id}, name: "${escapeYamlString(slot.info.name)}", icon_path: "${slot.info.icon_path}" }`,
    );
  }
  lines.push('    stat_shards:');
  for (const sh of statShards) {
    lines.push(`      - "${escapeYamlString(sh)}"`);
  }
  if (rationale.primary_rationale) {
    lines.push(
      `    primary_rationale: "${escapeYamlString(rationale.primary_rationale)}"`,
    );
  }
  if (rationale.secondary_rationale) {
    lines.push(
      `    secondary_rationale: "${escapeYamlString(rationale.secondary_rationale)}"`,
    );
  }
  if (rationale.secondary_alternative) {
    lines.push(
      `    secondary_alternative: "${escapeYamlString(rationale.secondary_alternative)}"`,
    );
  }
  return lines.join('\n');
}

function escapeYamlString(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

// --- Frontmatter mutation --------------------------------------------------
//
// Inserisce il blocco runes come ultimo campo dentro `quick_learn:` (ovvero
// prima del prossimo top-level field, es. `matchup_draft:`).
function injectRunesIntoFrontmatter(fm, runesYaml) {
  const lines = fm.split(/\r?\n/);
  const qlIdx = lines.findIndex((l) => /^quick_learn:\s*$/.test(l));
  if (qlIdx === -1) {
    throw new Error('quick_learn: not found in frontmatter');
  }
  let insertAt = lines.length;
  for (let i = qlIdx + 1; i < lines.length; i++) {
    const line = lines[i];
    if (line === '') continue;
    if (!/^\s/.test(line)) {
      insertAt = i;
      break;
    }
  }
  const before = lines.slice(0, insertAt);
  const after = lines.slice(insertAt);
  return [...before, runesYaml, ...after].join('\n');
}

function updateLastUpdated(fm, isoDate) {
  const re = /^last_updated:\s*"[^"]*"\s*$/m;
  if (!re.test(fm)) return fm;
  return fm.replace(re, `last_updated: "${isoDate}"`);
}

// --- Main pipeline ---------------------------------------------------------

async function main() {
  const startMs = Date.now();
  console.log('[wp35-retrofit-runes] Phase 5 batch retrofit start');

  const patch = await fetchDDPatch();
  console.log(
    `[wp35-retrofit-runes] DD patch live: ${patch.full} (short=${patch.short})`,
  );
  const trees = await fetchRunesReforged(patch.full);
  const { runeByName, treeByName } = buildRuneLookup(trees);
  console.log(
    `[wp35-retrofit-runes] runesReforged loaded: ${trees.length} trees, ${runeByName.size} runes, ${treeByName.size} tree-aliases`,
  );

  const candidates = [];
  for (const lang of LANGS) {
    const dir = resolve(CONTENT_ROOT, lang);
    const files = readdirSync(dir).filter((f) => f.endsWith('.md'));
    for (const f of files) {
      const path = resolve(dir, f);
      const content = readFileSync(path, 'utf8');
      const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
      if (!fmMatch) {
        candidates.push({
          path,
          lang,
          file: f,
          status: 'no_frontmatter',
          content,
        });
        continue;
      }
      const fm = fmMatch[1];
      if (/^\s{2}runes:\s*$/m.test(fm)) {
        continue; // gia' retrofit
      }
      candidates.push({ path, lang, file: f, content, fm });
    }
  }
  console.log(
    `[wp35-retrofit-runes] candidates: ${candidates.length} files to retrofit`,
  );

  const results = [];
  for (const c of candidates) {
    if (c.status === 'no_frontmatter') {
      results.push({
        ...c,
        ok: false,
        error: 'no_frontmatter',
        unresolved: [],
      });
      continue;
    }
    let split;
    try {
      split = splitFrontmatter(c.content);
    } catch (err) {
      results.push({
        ...c,
        ok: false,
        error: err.message,
        unresolved: [],
      });
      continue;
    }
    let fmParsed;
    try {
      fmParsed = yaml.load(split.fm);
    } catch (err) {
      results.push({
        ...c,
        ok: false,
        error: `yaml_parse_error:${err.message}`,
        unresolved: [],
      });
      continue;
    }
    const damageType = fmParsed?.quick_learn?.damage_type ?? null;
    const runesPara = extractRunesParagraph(split.body);
    if (!runesPara) {
      results.push({
        ...c,
        ok: false,
        error: 'no_runes_paragraph_in_body',
        unresolved: [],
      });
      continue;
    }
    const tokens = tokenizeRuneParagraph(runesPara, runeByName, treeByName);
    const extracted = extractRunesFromTokens(tokens);
    if (!extracted.ok) {
      const unresolved = findUnresolvedRuneCandidates(
        runesPara,
        runeByName,
        treeByName,
      );
      const suggestions = unresolved.map((u) => ({
        raw: u,
        suggestions: suggestFuzzy(u, runeByName),
      }));
      results.push({
        ...c,
        ok: false,
        error: `extract_failed:${extracted.error}`,
        unresolved: suggestions,
      });
      continue;
    }
    const statShards = defaultStatShards(damageType);
    const rationale = extractRationale(split.body, extracted);
    const runesYaml = emitRunesYaml(extracted, statShards, rationale);
    results.push({
      ...c,
      ok: true,
      runesYaml,
      damageType,
      statShards,
      rationale,
      split,
    });
  }

  const failed = results.filter((r) => !r.ok);
  const ok = results.filter((r) => r.ok);

  console.log('');
  console.log('=== DRY-RUN REPORT ===');
  for (const r of results) {
    if (r.ok) {
      const rationaleCount = [
        r.rationale.primary_rationale,
        r.rationale.secondary_rationale,
        r.rationale.secondary_alternative,
      ].filter(Boolean).length;
      console.log(
        `  OK  ${r.lang}/${r.file}  rationale=${rationaleCount}/3`,
      );
    } else {
      console.log(`  FAIL ${r.lang}/${r.file}  error=${r.error}`);
      if (r.unresolved && r.unresolved.length > 0) {
        for (const u of r.unresolved) {
          console.log(
            `       unresolved: "${u.raw}" -> suggestions: ${
              u.suggestions.length > 0
                ? u.suggestions.join(', ')
                : '(none)'
            }`,
          );
        }
      }
    }
  }
  console.log('');
  console.log(
    `[wp35-retrofit-runes] dry-run summary: ${ok.length} ok, ${failed.length} failed (of ${results.length} candidates)`,
  );

  if (failed.length > 0) {
    console.error('');
    console.error('[wp35-retrofit-runes] HARD-FAIL: at least one file failed');
    console.error(
      '  Per requisito Phase 5: nessun file e\' stato modificato. Risolvi i fail',
    );
    console.error('  (probabili rune obsolete nel body) e ri-esegui.');
    process.exit(1);
  }

  console.log('');
  console.log('=== WRITE PASS ===');
  let writeOk = 0;
  for (const r of ok) {
    let fm = r.split.fm;
    fm = injectRunesIntoFrontmatter(fm, r.runesYaml);
    fm = updateLastUpdated(fm, TODAY_ISO);
    const newContent = `---\n${fm}\n---\n${r.split.body}`;
    writeFileSync(r.path, newContent, 'utf8');
    writeOk++;
    console.log(`  WROTE ${r.lang}/${r.file}`);
  }
  console.log('');
  console.log(
    `[wp35-retrofit-runes] write-pass: ${writeOk} files updated. Done in ${Date.now() - startMs}ms.`,
  );
  console.log(
    `[wp35-retrofit-runes] rationale extracted (Opzione 1 conservativa): 0/${writeOk * 3} (left empty for editorial review).`,
  );
  process.exit(0);
}

main().catch((err) => {
  console.error('[wp35-retrofit-runes] FATAL:', err);
  process.exit(2);
});
