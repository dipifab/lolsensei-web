---
description: Genera una nuova guida champion (EN + IT) seguendo CONTENT-RULES.md, con groundtruth Data Dragon, Quick Learn block, body 6 sezioni canoniche, gate di qualità.
argument-hint: <champion-slug> <role> [patch]
---

# Nuova guida champion: $ARGUMENTS

Genera una guida completa per il champion specificato seguendo le regole
editoriali del progetto. **NON committare e non pushare** alla fine: mostra
diff e chiedi conferma in linguaggio naturale.

## Step 1 — Parse argomenti e pre-flight

1. Parsa `$ARGUMENTS`. Formato atteso: `<champion-slug> <role> [patch]`.
   - `<champion-slug>`: kebab-case lowercase (es. `lee-sin`, `kog-maw`, `master-yi`).
   - `<role>`: uno tra `top|jungle|mid|bot|support`.
   - `[patch]`: opzionale, formato `major.minor` (es. `14.10`). Se assente,
     usa la patch della guida più recente in `content/champions/en/`.

2. Se mancano `<champion-slug>` o `<role>`, FERMA e chiedi all'utente di
   ripassarli in linguaggio naturale.

3. Verifica che i file di destinazione **non** esistano già:
   - `content/champions/en/<slug>-<role>.md`
   - `content/champions/it/<slug>-<role>.md`

   Se esistono, FERMA e chiedi: "Esiste già una guida per <champion> <role>
   patch X. Vuoi sovrascriverla, generare per una patch nuova, o annullare?"
   Non procedere senza risposta esplicita.

4. Determina il **Data Dragon ID** del champion (PascalCase Riot):
   - `lee-sin` → `LeeSin`
   - `kog-maw` → `KogMaw`
   - `master-yi` → `MasterYi`
   - `twisted-fate` → `TwistedFate`
   - `lux` → `Lux`
   - Regola: ogni segmento dopo `-` diventa PascalCase, niente apostrofi.
     Per ambigui (es. Wukong) usa lookup nei dati DD.

## Step 2 — Carica regole e schema

5. Leggi **integralmente** `content/CONTENT-RULES.md`. È la spec editoriale,
   priorità massima. In particolare §2 (lingua: nomi propri sempre EN, termini
   tattici sempre EN anche in IT — diver, dive, kite, peel, gank, ecc.) e §1
   (source of truth: solo Riot, mai competitor).

6. Leggi `src/lib/content/champion-schema.ts` per il contratto Zod del
   frontmatter (in particolare `QuickLearnSchema` e i suoi bound di lunghezza).

## Step 3 — Fetch groundtruth Data Dragon

7. Costruisci la full DD version come `<patch>.1` (es. patch `14.10` →
   `14.10.1`). Verifica che esista con un HEAD su:
   `https://ddragon.leagueoflegends.com/cdn/<full-version>/img/champion/<DdId>.png`

   Se 404, prova `<patch>.2` poi `<patch>.3`. Se nessuna risponde 200, FERMA
   e segnala all'utente che la patch non è disponibile su DD.

8. Fetch JSON champion EN:
   `https://ddragon.leagueoflegends.com/cdn/<full-version>/data/en_US/champion/<DdId>.json`

   Estrai e annota:
   - `passive.name`, `passive.description` (HTML — strippa tag), `passive.image.full`
   - Per ogni `spells[i]` (i=0..3 → Q/W/E/R):
     `id`, `name`, `description`, `range`, `cost`, `cooldown`, `tooltip`
   - `info.attack`, `info.defense`, `info.magic`, `info.difficulty` (per
     stimare difficulty 1-5 nel quick_learn)
   - `tags` (es. ["Mage", "Support"]) per `champion_class`

9. Fetch JSON champion IT:
   `https://ddragon.leagueoflegends.com/cdn/<full-version>/data/it_IT/champion/<DdId>.json`

   Estrai gli stessi campi per l'eventuale verifica delle traduzioni IT.
   **NON usare i nomi tradotti** per items/abilities/runes nei file IT (vedi
   CONTENT-RULES.md §2: default safe = English).

10. **NON inventare meccaniche**. Se una fetch fallisce, FERMA e chiedi
    all'utente se vuole riprovare con un'altra patch o annullare. Mai mock.

## Step 4 — Genera frontmatter EN

11. Compila il frontmatter `lux-mid.md` style. Riferimento:
    `content/champions/en/lux-mid.md` (template del pilot WP35.1).

    - `title`: `"<Champion> <Role> Build & Guide — Patch <patch>"` (10-120 char)
    - `slug`: `<champion>-<role>`
    - `language`: `en`
    - `patch`: `<patch>` (NON la full version)
    - `champion`: `<slug>`
    - `role`: `<role>`
    - `last_updated`: data di oggi `YYYY-MM-DD`
    - `description`: 100-200 char, target 150-170. SEO-friendly: cita
      champion + role + patch + 3-4 keyword (build, matchups, power spikes, mistakes).

12. Compila `quick_learn:` block:

    - `champion_dd_id`: PascalCase Riot
    - `difficulty`: 1-5. Mappa da `info.difficulty` (DD usa 1-10 o 1-3 a
      seconda della patch — normalizza a 1-5)
    - `damage_type`: `magic | physical | mixed | true`. Inferisci dai tags:
      Mage/Enchanter → magic; Marksman/Assassin (most) → physical;
      Fighter/Bruiser misto → mixed; speciali (Vladimir) magic.
    - `champion_class`: stringa breve `[3, 40]`, es. `"Mage / Burst"`,
      `"Fighter / Diver"`, `"Tank / Vanguard"`, `"Marksman / Hypercarry"`.
    - `abilities` (5, ordine P/Q/W/E/R):
      - `name`: nome ufficiale **EN** dal DD
      - `description`: 10-140 char. Sintesi meccanica asciutta (cosa fa,
        come va usata). NIENTE prosa fiorita. Esempio Lux Q:
        `"Linear skillshot that roots up to two enemies hit. Long cooldown — use as setup, not poke."`
      - `dd_spell_id`: per Q/W/E/R = `spells[i].id` dal DD; per P =
        `<DdId>_Passive` (placeholder convenzionale, il render fa fallback a lettera)
    - `skill_order` (18 entries esatte, levels 1..18):
      - Levels 6/11/16 = R sempre.
      - Resto: applica priorità di max in base al ruolo dell'abilità.
        Tipico: max E first se waveclear è E (controlla DD spell description),
        altrimenti la abilità con miglior scaling AP/AD per livello.
      - I primi 3 livelli: 1 punto in ognuna delle non-max (es. E-Q-W standard),
        poi maxa la priorità.
    - `core_items` (3-6, in ordine di acquisto): `dd_id` numeric string,
      `name` ufficiale **EN**.
    - `situational_items` (opzionale, 2-6): swap legati a counter specifici.
      Ogni: `dd_id`, `name` EN, `against` (5-140 char) = trigger di acquisto.
    - `base_combo` (2-8 token brevi 1-8 char): es. `["E", "Q", "AA", "R"]`.
    - `win_condition` (20-220 char): cosa devi fare per vincere, asciutto.
    - `weakness` (20-220 char): cosa ti fa perdere, asciutto.

## Step 5 — Genera body EN (6 sezioni canoniche)

13. Le sezioni in ordine:

    ```markdown
    ## Overview
    [2 paragrafi: identità del champ + game plan in una frase]

    ## Recommended Build
    **Starting items:** ...
    **Core items (in order):**
    1. **<Item EN>** — ...
    2. ...
    **Situational items:**
    - **<Item EN>** — vs ...
    **Boots:** ...
    **Skill order:** ...
    **Runes:** ...

    ## Key matchups
    - **<Champ EN>:** ...
    [5 matchup, mix favorevoli/neutri/sfavorevoli]

    ## Power spikes & win conditions
    - **Level 2/6/X:** ...
    - **<Item> completion (~ minute Y):** ...
    [3-4 spike]

    ## Common mistakes
    - **<Errore tipico>.** <Correzione>.
    [3-5 errori]

    ## Advanced tip
    [UNA tecnica avanzata, niente elenco]
    ```

14. Target word count totale body: **800-1200 parole**. Sotto i 600 il lint
    warna; sopra i 1500 anche.

15. Stile (CONTENT-RULES.md §7):
    - Verbi all'imperativo nei consigli ("Buy Zhonya's...", non "you should buy...")
    - Numeri concreti ("at level 6", "around minute 12-14", "with 2 items")
    - Niente filler ("remember that every game is different", "it depends")
    - Niente meta-commento ("in this guide we'll cover...")

16. Salva in `content/champions/en/<slug>-<role>.md`.

## Step 6 — Genera frontmatter + body IT

17. Stesso schema, traduci frasi in italiano. **Nomi propri di gioco
    (items, abilities, runes, summoner spells) restano in inglese**.
    **Termini tattici restano in inglese**: diver, dive, kite, peel, gank,
    counter-gank, freeze, slow-push, fast-push, shove, push, hold,
    splitpush (split), rotation, prio, ace, pick, teamfight, skirmish,
    snowball, all-in, trade, poke, harass, zone, roam, ward, vision,
    fog, river, jungle, lane, side lane, mid/top/bot lane, AP/AD/MR/HP/CD,
    AOE, DPS, CC, scaling, crit, proc, on-hit, frontline, backline,
    carry, peeler, engage, disengage, pick comp, wombo, tilt, throw,
    comeback, lead, dive (verb), peel (verb).

    Vedi CONTENT-RULES.md §2 per la lista completa.

18. `description` IT: 100-200 char (target 150-170). NON traduzione letterale
    dell'EN: riformulazione idiomatica.

19. Esempi corretti vs sbagliati:
    - ✅ `**Diana / Akali:** Minacce di dive. Compra Zhonya's Hourglass dopo Luden's Companion;`
    - ❌ `**Diana / Akali:** Minacce di tuffo. Compra Clessidra di Zhonya dopo Compagno di Luden;`

20. Salva in `content/champions/it/<slug>-<role>.md`.

## Step 7 — Quality gate

21. Esegui dalla root del progetto:

    ```bash
    npm run content:lint
    npm run content:compile
    npm run typecheck
    npm run check:i18n
    ```

22. Tutti devono essere **verdi**. Se uno fallisce:
    - Hard fail di content-lint → fixa il frontmatter o il body fino a passare
    - Soft warn di description length o word count → fixa fino a stare nel range
    - Typecheck fail → controlla che il blocco quick_learn sia conforme
    - i18n fail → improbabile (non stai aggiungendo chiavi i18n nuove); se
      capita, segnala all'utente

23. Se il lint segnala duplicati con guide esistenti per altre patch dello
    stesso `(champion, role)`, è atteso (multi-patch support tramite
    `available_patches`).

## Step 8 — Conferma utente in linguaggio naturale

24. **NON committare e non pushare automaticamente**. Mostra all'utente:

    - I 2 path generati: `content/champions/en/<slug>-<role>.md` +
      `content/champions/it/<slug>-<role>.md`
    - Output dei 4 gate (one-liner ciascuno: ✓ o errore)
    - Una sintesi in 2-3 frasi: cosa è stato generato, da quali source DD,
      quanto è lungo il body
    - URL preview (`/en/champion/<slug>/<role>` e `/it/...`)

25. Chiedi conferma in linguaggio naturale. Esempio:

    > "Ho generato la guida <Champion> <Role> per la patch <patch> in EN e IT,
    > usando come source il Data Dragon ufficiale. Il body è di circa <N>
    > parole. Tutti i gate sono verdi.
    >
    > Vuoi che committo e pusho su `main`? Il push triggera il deploy
    > Cloudflare Workers, quindi la guida andrà live entro pochi minuti.
    > Se preferisci verifico prima visivamente in `npm run dev`, dimmelo."

26. Procedi con commit + push **solo** dopo OK esplicito.

## Note operative

- **Path attesi**: il comando va eseguito da `/Users/fdipietro/Projects/lolsensei-web/`.
  Se sei in `lolai`, fai `cd ../lolsensei-web` prima dei gate.
- **Patch fallback**: se l'utente non specifica patch e nessuna guida esiste
  in `content/champions/en/`, usa `14.10` come default e segnalalo.
- **Champion name resolution**: se non sei certo del DD ID PascalCase, fai
  fetch di `https://ddragon.leagueoflegends.com/cdn/<full-version>/data/en_US/champion.json`
  e cerca per `name` o `id`.
- **Errori HTTP**: per ogni fetch DD, gestisci timeout/404 fermandoti e
  chiedendo all'utente, mai inventando dati.
- **Multi-patch**: se la guida esiste già per una patch precedente, **NON**
  sovrascriverla. Crea il file della patch nuova accanto a quello vecchio
  (il compile script popola `available_patches[]` automaticamente).
