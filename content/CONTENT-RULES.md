# Content Rules — LoL Sensei Guides

Convenzioni editoriali per **tutte** le guide pubblicate su `lolsensei.com`
(`content/champions/`, `content/counters/`, `content/pro-builds/`).

Vale per autori umani e per pipeline di generazione automatica (Claude Code,
prompt v2 WP35.1 e successivi). Ogni guida nuova **deve** rispettare queste
regole prima di essere committata. La pipeline di lint (`scripts/content-lint.mjs`)
applica i bound tecnici come hard fail; le regole editoriali qui sotto sono
la spec che il prompt deve seguire.

---

## 1. Source of truth (cosa è ammesso citare)

**Ammesse**:
- Riot Data Dragon (`https://ddragon.leagueoflegends.com/cdn/<patch>.1/...`):
  champion stats, abilities, scaling, items, runes, sommoner spells.
- Riot patch notes ufficiali (`https://www.leagueoflegends.com/<locale>/news/tags/patch-notes/`).
- Riot Universe (`https://universe.leagueoflegends.com/`) per lore/identità.
- Leaguepedia (`https://lol.fandom.com/`) per esports, statistiche aggregate, voice lines.
- Riot dev portal docs per termini tecnici ufficiali.

**Vietate**:
- Riformulare guide o build di **qualsiasi sito terzo** (op.gg, u.gg, Blitz, Mobalytics,
  Porofessor, ProBuilds, ecc.). Anche se "rielaborate testualmente per copyright",
  rimane derivative work e viola sia il diritto d'autore sia la regola progetto
  "no competitor mentions".
- Citare risultati di partite o tier list di siti terzi.
- Inventare dati. Se un dato non è verificabile da una source ammessa: **omettilo**.
  Mai mock, mai filler statistici fittizi.

**Verifica fattuale obbligatoria**:
prima di scrivere prosa che descrive una meccanica (ability behavior, scaling,
range, cooldown, damage type), la pipeline deve avere accesso al groundtruth
Data Dragon `champion/<Champion>.json` per quella patch. Senza groundtruth,
**non scrivere quel blocco**. L'errore storico "piazza una Q per ogni wave" su
Lux è esattamente il caso che questa regola previene: la Q di Lux è uno
skillshot lineare di setup (cooldown lungo, max 2 target), non waveclear —
era una frase derivata da pattern lessicali generici, non da meccaniche reali.

---

## 2. Lingua: cosa va in inglese, cosa va in italiano

Le frasi sono in **italiano**. Cambiano solo i nomi propri di gioco e i
tecnicismi tattici, che restano in **inglese** quando non esiste una
traduzione perfetta documentata.

### 2.1 Nomi propri di gioco — sempre in inglese (default safe)

Items, abilities, runes, summoner spells, mostri, obiettivi.

| Categoria | Sempre EN | Esempi |
|-----------|-----------|--------|
| Items | ✅ | Luden's Companion, Sorcerer's Shoes, Shadowflame, Rabadon's Deathcap, Banshee's Veil, Zhonya's Hourglass, Void Staff, Doran's Ring, Health Potion, Corrupting Potion, Ionian Boots of Lucidity |
| Abilities | ✅ | Light Binding, Prismatic Barrier, Lucent Singularity, Final Spark, Illumination |
| Runes | ✅ | Sorcery, Arcane Comet, Manaflow Band, Transcendence, Scorch, Inspiration, Biscuit Delivery, Cosmic Insight, Precision, Presence of Mind, Coup de Grace |
| Summoner Spells | ✅ | Flash, Ignite, Teleport, Heal, Barrier, Cleanse, Exhaust, Ghost, Smite |
| Mostri/obiettivi | ✅ | Scuttle (Crab), Drake, Baron, Rift Herald, Voidgrubs, Atakhan, Plate, Inhibitor, Nexus |

**Eccezione**: nomi di champion sempre nella loro forma ufficiale Riot
(es. "Twisted Fate", "Lee Sin", "Master Yi"). Mai abbreviazioni colloquiali
("TF" o "MF" sono accettabili **solo** in nickname-link tra parentesi, mai come
nome principale).

### 2.2 Termini tattici di gameplay — sempre in inglese

La community italiana di LoL usa l'inglese per i tecnicismi. Tradurli
letteralmente suona innaturale o, peggio, ambiguo.

**Inglese obbligatorio**:

- **Ruoli sotto-classi**: diver (non "tuffatore"), tank, fighter, juggernaut, marksman, mage, burst mage, battlemage, artillery, assassin, enchanter, catcher, vanguard, warden, specialist
- **Azioni di lane**: kite, peel, snowball, gank, counter-gank, freeze, slow-push, fast-push, shove, push, hold, dive, all-in, trade, poke, harass, zone, roam
- **Mappa/vision**: ward, vision, fog of war (o "fog"), tri-bush, river, lane, jungle, side lane, mid lane, top lane, bot lane, support
- **Macro**: splitpush (o "split"), rotation, prio (priority), ace, pick, teamfight (o "tf"), skirmish, baron call, drake fight, objective trade
- **Stats/build**: scaling, AP, AD, MR, HP, CD/CDR, AOE, DPS, CC (crowd control), magic pen, armor pen, lethality, lifesteal, omnivamp, true damage
- **Meccaniche**: skillshot, hitbox, dash, blink, channel, projectile, autoattack (o "AA"), critical strike (o "crit"), proc, on-hit
- **Composizione**: frontline, backline, carry, peeler, engage, disengage, pick comp, wombo combo
- **Risultato**: tilt, throw, comeback, snowball lead, lead

### 2.3 Cosa va in italiano

- **Frasi e sintassi connettiva**: "se", "quando", "fino a che", "il prima possibile", "evita di", "compra dopo che", "punta a", "piazza", "tieni", "rilancia"
- **Aggettivi qualificativi**: "veloce", "lento", "facile", "difficile", "rischioso"
- **Numeri/livelli**: "Livello 6", "minuto 12", "primo back", "secondo item"
- **Strutture grammaticali**: il dive è dell'avversario, non "il dive degli avversari" (mai italianizzazioni gergali tipo "diveare", "shovare", "ganckare")

### 2.4 Quando una traduzione italiana è ammissibile

Solo se:
1. È la stringa **letterale** che appare nel client italiano ufficiale di League
   (verificabile su Data Dragon `it_IT/<entity>.json`), **e**
2. È riconoscibile dalla community IT (test: la trovi su YouTube IT, su forum
   IT, in stream IT? Se solo nel client e nessuno la usa parlando, **resta in EN**).

Esempio in cui italiano va bene: "front line" (anche "front line" è OK in
inglese, ma "frontline" come singola parola è più formale; entrambe accettate).

Esempio in cui italiano è **vietato**: "tuffatore" per "diver", "movimento di
fuga" per "kite", "respinta" per "peel", "imbuto" per "funnel", "controllo di
visione" per "vision control".

### 2.5 Inglese da evitare anche in EN

Queste forme colloquiali della community US sono ambigue per audience SEO/i18n:
- "ulti" → usa "ultimate" o "R"
- "low elo" / "high elo" → preferisci "low ranks" / "high ranks" o un range concreto
- "feed" / "fed" → ammesso ma chiarisci ("the enemy carry is fed = has 8+ kills")
- "smurf" → ammesso ma usalo nel senso letterale (account secondario di alto MMR)

---

## 3. Non menzionare competitor

Mai citare per nome strumenti, siti o servizi concorrenti, in nessuna sezione
(prosa, frontmatter, immagini, link, alt text). Lista esemplificativa **non**
esaustiva di nomi vietati: op.gg, u.gg, Blitz.gg, Porofessor, Mobalytics,
ProBuilds.net, lolalytics, championgg, lolking, esportsone.

Quando devi descrivere la categoria, usa termini generici:
- "stat tracking tools"
- "overlay apps"
- "tier list websites"
- "build aggregators"
- "pro player build trackers"

Lo script `scripts/check-competitors.sh` fa hard-fail in CI se rileva una
menzione nel body markdown o nei campi `title` / `description` del frontmatter.

---

## 4. Schema frontmatter (riepilogo)

Single source of truth: `src/lib/content/champion-schema.ts` (Zod).
Il parser YAML è **js-yaml** full schema → strutture nidificate ammesse.

Hard fail (lint blocca il build):
- `title` 10-120 char
- `slug` regex `^[a-z0-9-]+-(top|jungle|mid|bot|support)$` e deve coincidere
  con `<champion>-<role>`
- `language` enum `en|it` (oggi MVP: solo EN+IT generano contenuto, vedi
  DEC-7 in `architecture-repository`)
- `patch` regex `^\d{1,2}\.\d{1,2}$` (es. `14.10`)
- `champion` kebab-case (es. `lux`, `lee-sin`, `kog-maw`)
- `role` enum `top|jungle|mid|bot|support`
- `last_updated` ISO date `YYYY-MM-DD`
- `description` 100-200 char (soft warn fuori range 150-170)

Body word count: soft warn fuori range **600-1500**.

### 4.1 Quick Learn block (opzionale)

Se presente, **tutti** i sotto-campi sono required. Backward-compat: guide
senza `quick_learn:` restano valide.

| Campo | Tipo | Vincoli |
|-------|------|---------|
| `champion_dd_id` | string | DD PascalCase (es. `Lux`, `LeeSin`) |
| `difficulty` | int | [1, 5] |
| `damage_type` | enum | `magic | physical | mixed | true` |
| `champion_class` | string | `[3, 40]` — NB: free text, non usato per logica, solo per display. Per theming visuale userai `archetype` quando lo aggiungeremo. |
| `abilities` | array length 5 | P/Q/W/E/R nell'ordine. Ogni: `key`, `name [2,40]`, `description [10,140]`, `dd_spell_id?` |
| `skill_order` | array length 18 | levels 1..18 esatti, key `Q|W|E|R` |
| `core_items` | array `[3, 6]` | `dd_id` regex `\d{3,5}`, `name [2,40]`, in **ordine di acquisto** |
| `situational_items?` | array `[2, 6]` | come core_items + `against [5, 140]` (trigger di acquisto) |
| `base_combo` | array `[2, 8]` | token brevi `[1, 8]` (es. `["E", "Q", "AA", "R"]`) |
| `win_condition` | string | `[20, 220]`, asciutto e azionabile |
| `weakness` | string | `[20, 220]`, asciutto e azionabile |

Convenzioni per `dd_spell_id`:
- Q/W/E/R: nome PascalCase Riot (es. `LuxLightBinding`, `LuxR`)
- P (passive): per ora resta letter-only nel render (manca filename DD).
  Iterazione futura: fetch `champion.json` al build per estrarre `passive.image.full`.

---

## 5. Struttura body (sezioni ricorrenti)

Le 6 sezioni canoniche di una champion guide sono:

1. **## Overview** — 2 paragrafi: identità del champ + game plan in una frase
2. **## Recommended Build** — starting items, core (in ordine), situational
   (con trigger), boots, skill order, runes
3. **## Key matchups** — 5 matchup tipici (mix favorevoli/neutri/sfavorevoli)
4. **## Power spikes & win conditions** — 3-4 momenti chiave (livelli + item completion)
5. **## Common mistakes** — 3-5 errori frequenti, ognuno con la correzione
6. **## Advanced tip** — UNA tecnica avanzata, non un elenco

Lunghezza target body: **800-1200 parole**. Sotto i 600 il lint warna; sopra
i 1500 anche.

---

## 6. Patch hygiene

- Quando esce una nuova patch, **non** sovrascrivere il file della patch
  precedente. Crea un nuovo file `<champion>-<role>.md` per la patch nuova
  (oppure usa il suffisso supportato dal compile script — vedi
  `scripts/compile-content.mjs` `available_patches`).
- Aggiorna `last_updated` solo se il contenuto è effettivamente cambiato.
- Per cambi puramente di lingua/typo, non cambiare `last_updated`.

---

## 7. Stile prosa

- **Verbi all'imperativo** quando dai consigli ("Compra Zhonya's...", non
  "Si dovrebbe comprare").
- **Numeri concreti** quando possibile ("a livello 6", "intorno al minuto 12-14",
  "con 2 item", "sotto il 30% HP").
- **Niente disclaimer fluffy**: evita "ricorda che ogni partita è diversa",
  "dipende dalla situazione", "in linea di massima". Sono filler.
- **Niente meta-commento**: non scrivere "in questa guida vedremo", "ora
  parleremo di"; vai dritto al contenuto.
- **Neutralità di gender**: in IT preferisci la forma neutra ("il giocatore",
  "chi gioca") al maschile generico ostentato.

---

## 8. Asset visivi

- **Icone Data Dragon**: caricate runtime da `https://ddragon.leagueoflegends.com/cdn/<patch>.1/...`.
  CSP del progetto già permissiva (`img-src 'self' data: https:`).
- **Pattern fallback**: il componente sovrappone `<img>` a una lettera/placeholder.
  Se il caricamento riesce copre il placeholder; in 404 si auto-rimuove e il
  placeholder resta visibile. Zero broken images.
- **Splash art**: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/<ChampDdId>_0.jpg`
  (skin index 0 = base). Da usare blurred come background dell'hero banner
  quando lo aggiungeremo.
- **Niente upload manuale di immagini Riot** in `public/`. Hotlinking dal CDN
  Riot è il pattern compliance-friendly e nelle Riot API policies.

---

## 9. Quality gate (eseguiti dal CI prima del deploy)

```bash
npm run content:lint    # hard fail su frontmatter invalido / competitor mention
npm run content:compile # genera src/data/champions/{en,it}.ts dal markdown
npm run typecheck       # TypeScript no-emit
npm run check:i18n      # parità chiavi (wp35.* esente per locales non-MVP)
```

Tutti devono essere verdi prima del push.

---

## 10. Reference rapida — naming examples corretti

```yaml
# ✅ Frontmatter EN/IT (item names sempre EN, descrizioni libere nella lingua)
core_items:
  - { dd_id: "6655", name: "Luden's Companion" }
  - { dd_id: "3020", name: "Sorcerer's Shoes" }

situational_items:
  - dd_id: "3157"
    name: "Zhonya's Hourglass"
    against: "vs divers and assassins (Zed, Diana, Talon, Akali) — stasis saves your R combo follow-up"   # EN
  - dd_id: "3157"
    name: "Zhonya's Hourglass"
    against: "contro diver e assassini (Zed, Diana, Talon, Akali) — la stasi salva il follow-up della R"   # IT
```

```markdown
# ✅ Prosa IT corretta
**Diana / Akali:** Minacce di dive. Compra Zhonya's Hourglass dopo Luden's Companion;
non usare **Flash** in modo offensivo in lane contro di loro.

# ❌ Prosa IT sbagliata
**Diana / Akali:** Minacce di tuffo. Compra Clessidra di Zhonya dopo Compagno di Luden;
non usare **Flash** offensivamente.
```

---

## Storico modifiche

- **2026-04-27**: Documento creato durante CR-053 (WP35.1 Quick Learn block +
  Lux pilot). Regole estratte dal feedback utente sul pilot Lux:
  - Verifica fattuale Riot obbligatoria (errore "Q per ogni wave" su Lux Q skillshot)
  - Items/abilities/runes sempre in inglese se non hai traduzione perfetta certificata
  - Termini tattici (diver, dive, kite, peel, ecc.) sempre in inglese in IT
  - "Tuffatore" → "diver" è il caso emblematico
