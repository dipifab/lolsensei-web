---
title: "Ezreal Bot Build & Guida — Patch 16.9"
slug: "ezreal-bot"
language: "it"
patch: "16.9"
champion: "ezreal"
role: "bot"
last_updated: "2026-04-29"
description: "Guida Ezreal bot lane per League of Legends Patch 16.9: starter kit, build AD core, matchup chiave, power spike, errori comuni e una tip avanzata finale."
quick_learn:
  champion_dd_id: "Ezreal"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Skirmisher"
  abilities:
    - key: "P"
      name: "Rising Spell Force"
      description: "Ogni abilità che colpisce un nemico carica uno stack di attack speed (max 5). È il motore della DPS auto-attack di Ezreal."
      dd_spell_id: "Ezreal_Passive"
    - key: "Q"
      name: "Mystic Shot"
      description: "Skillshot lineare a lungo raggio, danno fisico. Riduce i cooldown se colpisce e applica gli effetti on-hit — il tuo bottone principale di poke e DPS."
      dd_spell_id: "EzrealMysticShot"
    - key: "W"
      name: "Essence Flux"
      description: "Orbo magico che si attacca a un campione o obiettivo. Detona al prossimo attacco o abilità dando danno bonus e refund di mana."
      dd_spell_id: "EzrealEssenceFlux"
    - key: "E"
      name: "Arcane Shift"
      description: "Blink corto + bolt automatico. Cooldown lungo — è la tua unica via di fuga, non sprecarlo per fare danno nei primi livelli."
      dd_spell_id: "EzrealArcaneShift"
    - key: "R"
      name: "Trueshot Barrage"
      description: "Raggio globale lineare che fa danno pesante al primo bersaglio non-minion. Per pickoff (eliminare un nemico isolato fuori dal teamfight), execute o waveclear di emergenza."
      dd_spell_id: "EzrealTrueshotBarrage"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "6675", name: "Navori Flickerblade" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "contro CC duro single-target da rimuovere (Malzahar R, Skarner R, Warwick R) — l'attivo toglie il lock-down e continui a kitare"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contro CC a proiettile telegrafato (Morgana Q, Ashe R, Blitzcrank Q) — lo spell shield blocca un'abilità ostile e salva il posizionamento"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "contro lane di poke (Caitlyn, Varus, Xerath support) dove serve sustain da lifesteal e uno scudo per sopravvivere ai trade"
    - dd_id: "3091"
      name: "Wit's End"
      against: "contro burst AP pesante (LeBlanc mid, Syndra, Brand support) — magic resist e danno on-hit magico in più su ogni Q"
  base_combo: ["W", "Q", "AA", "E", "AA"]
  win_condition: "Stacka la passive di attack speed lanciando Q a ogni cooldown, kita da max range con auto-attack più Q, e snowballa la bot lane fino al power spike a 3 item (minuto 25-30) dove sovrasti in DPS il carry avversario."
  weakness: "Fragile e senza fuga oltre la E (cooldown lungo). Vulnerabile a engage forti e CC a lungo raggio; se sbagli Q in lane resti indietro: gli stack passive decadono dopo 6 secondi senza un hit."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 8005, name: "Press the Attack", icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png" }
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["draven", "kalista", "samira"]
      archetype: "Marksman a corto raggio iper-aggressivi"
      reason: "La Q di Ezreal supera il loro raggio di auto-attack (1150 contro ~525-550). Li poke fuori dalla wave da distanza sicura; loro devono fare all-in (scambio totale fino alla kill) per vincere e la tua E è un panic button contro il dive."
    - examples: ["sivir", "varus", "kog-maw"]
      archetype: "Marksman immobili senza dash"
      reason: "Ezreal può sidesteppare una Q lenta (Sivir Boomerang, Varus Q) mentre piazza la sua. Loro non possono punire il suo waveclear lento perché non riescono a chiudere la distanza quando lui fa step up."
    - examples: ["aphelios", "kai-sa"]
      archetype: "Marksman da scaling con laning debole"
      reason: "Lo spike di Ezreal fra livello 2 e 6 è più forte del loro. Il poke con Q li spinge fuori dalla wave, così arrivano agli item core indietro e perdono il loro vantaggio scaling."
  counterpicks:
    - examples: ["miss-fortune", "jhin"]
      archetype: "Marksman con burst pre-6 frontloaded"
      reason: "Il loro pattern di trade ai livelli 1-3 (auto reset di Jhin, Double Up di MF) supera Ezreal in danno prima che lui carichi la passive. Ti costringono a backare presto e a perdere tempo su Manaflow Band."
    - examples: ["caitlyn", "xerath", "ziggs"]
      archetype: "Artiglieria a lungo raggio (poke lane)"
      reason: "Il loro range Q o di trap supera i 1150 di Ezreal. Lui non può rispondere senza entrare nella loro zona di minaccia, quindi la lane gli scava HP senza dargli modo di fare all-in di ritorno."
    - examples: ["leona", "nautilus", "thresh"]
      archetype: "Tank support da hard engage"
      reason: "Il loro engage point-and-click (Leona E, Naut Q, Thresh Q hook) bypassa il punto di forza di Ezreal, cioè il poke a distanza. Una volta locked, la sua E spesso non basta a uscire dal follow-up."
---

## Panoramica

Ezreal è un AD carry a lungo raggio che baratta DPS auto-attack pura per sicurezza e poke a skillshot. Il suo kit ruota intorno a piazzare **Mystic Shot (Q)** a ogni cooldown — ogni colpo a segno rimborsa una parte dei suoi cooldown, accumula la passive **Rising Spell Force** per attack speed (fino a 5 stack, circa +50% AS al massimo) e applica gli effetti on-hit di item come Kraken Slayer. Ha lo strumento di fuga migliore di tutti gli ADC tradizionali con **Arcane Shift (E)**, ma il prezzo è un sustain in lane fragile e una curva di scaling più lenta rispetto a ADC come Jinx o Aphelios.

Il game plan è paziente: poke con **Q** da max range (1150 unità, più del raggio di auto-attack di qualsiasi altro ADC), spingi le wave con combo **W**-**Q** quando il nemico fa step back, e roma in mid con **R** per fare pickoff in giro per la mappa. La skill expression sta nella prediction di **Q** (anticipa il vettore di movimento del bersaglio — colpire le auto-attack è più facile perché si rallentano da soli per last-hittare) e nella disciplina di **E** (non blinkare per fare danno; tienila per scappare dall'engage che arriverà comunque).

## Build Consigliata

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Doran's dà l'AD e il lifesteal che servono per tradare con **Q** senza restare indietro di HP.

**Core items (in ordine):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — primo spike DPS. Ogni terza auto fa danno true (danno che ignora armor e magic resist) e la **Q** conta come applicazione on-hit. È il primo acquisto incondizionato.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — boots da attack speed che si moltiplicano con gli stack della passive. Compri dopo il primo componente di Kraken.
3. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — estende il raggio di auto-attack di ~150 unità quando energizzato, allineandosi col raggio della **Q**. Ti permette di kitare (muoversi all'indietro mentre attacchi, mantenendo distanza) da max range senza fare step forward.
4. ![Navori Flickerblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6675.png) **Navori Flickerblade** — gli auto-attack riducono i cooldown delle abilità non-ulti. Combinato col refund proprio di **Q**, riesci a lanciare una **Q** ogni ~2 secondi.
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — armor penetration per il late game quando i tank della frontline hanno stackato armor.

**Situational items:**

- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — contro CC duro single-target da rimuovere (Malzahar R, Skarner R, Warwick R). L'attivo toglie il lock-down e ti permette di continuare a kitare.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contro CC a proiettile telegrafato (Morgana Q, Ashe R, Blitzcrank Q). Lo spell shield blocca un'abilità ostile e salva il tuo posizionamento.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — contro lane di poke (Caitlyn, Varus, Xerath support). Il lifesteal ti fa sopravvivere all'harass e l'overheal shield ti dà un buffer di HP.
- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — contro burst AP pesante (LeBlanc mid, Syndra, Brand support). Magic resist più danno on-hit magico bonus su ogni auto e su ogni **Q**.

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** è la default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** è accettabile se ti serve più uptime di **R** per snipe cross-map.

**Skill order:** Maxa **Q** per prima (è il tuo motore di danno e DPS), **W** per seconda (burst extra sui target stuckati), **E** per ultima (non fa mai abbastanza danno da meritare il max — resta un blink). Prendi un punto in **R** ai livelli 6, 11, 16.

**Runes:** Primaria **Precision** con **Lethal Tempo** (o **Press the Attack** in lane più squishy), **Presence of Mind** (mana sustain), **Legend: Bloodline** (lifesteal scaling), **Coup de Grace**. Secondaria **Sorcery** con **Manaflow Band** (essenziale — i costi mana di Ezreal sono punitivi senza) e **Transcendence**.

## Matchup chiave

- **Caitlyn:** Lei supera il tuo range di **Q** con l'auto-attack (650 vs i tuoi 550 melee, ma le sue trap fanno zoning fuori). Resta dietro i minion, mai sopra una trap, e farma con **Q**. Cerca l'all-in quando usa **Net (E)** per scappare da una wave — il suo cooldown è up.
- **Draven:** Vuole trade (scambi brevi di colpi) a corto raggio. Usa **Q** per spingere la wave, freezala (last-hitta i minion senza uccidere la wave, così resta sotto la tua torre) se sei indietro, e chiama gank dal jungle presto. Evita le sue Spinning Axes — se ne ha 2 in rotazione, non auto-attaccarlo.
- **Lucian:** Mirror match per il trade tempo. Tieni la **E** per quando lui usa il **Dash (E)** in modo offensivo — quello è il momento in cui è committed (impegnato totalmente, senza modo di tirarsi indietro), e puoi o baitarlo sotto torre o seguire con il tuo burst di **Q**.
- **Jhin:** Il suo 4° colpo auto fa critico enorme; tieni il conto dei suoi proiettili (1, 2, 3, poi backa prima del 4). Punisci nel lungo reload animation facendo step up e piazzando **Q**.
- **Sivir:** Matchup neutro fino al livello 6. Il suo **Spell Shield (E)** blocca la tua **Q** — baitalo prima con un orbo di **W** (costa poco ed è veloce), poi tira **Q** durante il down window.

## Power spike & condizioni di vittoria

- **Livello 2:** Prima finestra di trade. Con **Q** + **W** detonati con **Q**, fai un chunk di danno che vince quasi ogni trade breve.
- **Livello 6:** Il primo **Trueshot Barrage** sblocca i roam e l'execute pressure (uso della R per finire nemici a basso HP che fuggono in giro per la mappa). **R** sul mid laner avversario se backa low; il range globale trasforma errori di posizione in kill.
- ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer completato (~ minuto 12-14):** La tua DPS quasi raddoppia. Forza un dive 2v2 a questo punto — ogni 3a auto fa danno true che il support avversario non può itemizzare contro.
- **Spike a 3 item (~ minuto 25-30):** ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** + ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** + ![Navori Flickerblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6675.png) **Navori Flickerblade** è il momento in cui sovrasti in DPS la maggior parte dei carry da una distanza più sicura. Spingi per Baron e drake fight qui.

## Errori comuni

- **Tenere la Q per il colpo perfetto.** Gli stack della passive (il buff di AS sull'hit) decadono dopo 6 secondi senza un'abilità andata a segno. Tira **Q** sui minion per rinfrescare gli stack e refundare il cooldown — anche una **Q** mancata sul campione che colpisce un minion vale il mana speso.
- **Usare la E offensivamente in lane.** **Arcane Shift** ha cooldown 14-26 secondi; una volta blinkato dentro non hai più nulla se il support engagia. Tienila solo per fughe finché non hai ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** e un lead di kill.
- **Stare a max range della R nei teamfight.** Il tuo range di **Q** è 1150; stare a 1500+ per fare snipe con **R** ti mette fuori dal peel del support (la protezione che il support ti dà contro chi ti dive). Stai nella seconda posizione più lontana, così un flank non ti delete istantaneamente.
- **Pokare con Q quando sei mana-starved.** Sotto il 30% di mana, spingi la wave e backa. Un Ezreal scaling senza mana è inutile perché ogni pezzo del kit (compresa la E per scappare) costa almeno 28 mana.
- **Ignorare la W sugli obiettivi.** **Essence Flux** si attacca a drake e Baron. Piazza **W** poi **Q** per detonarla e fai ~250 danni bonus sul contest dello smite — un chunk di danno gratis che vince lo steal.

## Suggerimento avanzato

Allenati la combo W-stick sui campioni: tira **W** su un nemico low-HP attraverso la fog of war (se hai vision), poi subito **Q** per detonare. La detonazione rimborsa il costo mana di **W** più mana extra, quindi la combo è essenzialmente gratis se va a segno. Nei teamfight, attaccare la **W** sul carry avversario fa sì che ogni auto-attack del tuo team la deton, trasformando un orbo da 50 mana in un chunk di circa 400 danni in 4 secondi distribuiti su più sorgenti. La chiave è tirare **W** *prima* che parta l'engage, non durante — la sua velocità di travel di 0.25s è troppo lenta per prendere un bersaglio già in movimento.
