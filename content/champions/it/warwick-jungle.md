---
title: "Warwick Jungle Build & Guida — Patch 16.9"
slug: "warwick-jungle"
language: "it"
patch: "16.9"
champion: "warwick"
role: "jungle"
last_updated: "2026-04-29"
description: "Guida Warwick jungle per LoL Patch 16.9: clear con sustain passivo, build AD bruiser, pattern di gank con Q + E, matchup chiave, power spike, errori comuni novizi."
quick_learn:
  champion_dd_id: "Warwick"
  difficulty: 2
  damage_type: "mixed"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Eternal Hunger"
      description: "Le auto-attack infliggono danno magico bonus. Sotto il 50% HP Warwick si cura per la stessa quantità; sotto il 25% la cura triplica."
      dd_spell_id: "Warwick_Passive"
    - key: "Q"
      name: "Jaws of the Beast"
      description: "Tap: scatta in avanti e morde per danno magico % HP max + cura. Hold: salta dietro al target e resta agganciato durante il channel."
      dd_spell_id: "WarwickQ"
    - key: "W"
      name: "Blood Hunt"
      description: "Passiva: bonus Move Speed e Attack Speed contro nemici sotto il 50% HP, triplicato sotto il 25%. Attiva: rivela brevemente tutti i nemici."
      dd_spell_id: "WarwickW"
    - key: "E"
      name: "Primal Howl"
      description: "Damage reduction (riduzione danno: una percentuale viene ignorata) per 2.5s, poi Fear (i nemici scappano) sui vicini. Rilancia per anticipare."
      dd_spell_id: "WarwickE"
    - key: "R"
      name: "Infinite Duress"
      description: "Salto a lunga distanza che scala con Move Speed; Suppress (lock totale, non può fare nulla) sul primo champion colpito per 1.5s."
      dd_spell_id: "WarwickR"
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "3053", name: "Sterak's Gage" }
  situational_items:
    - dd_id: "6610"
      name: "Sundered Sky"
      against: "primo item alternativo contro top side bruiser/tank — il crit garantito al primo colpo dopo una spell sincronizza con la Q"
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "contro comp che kitano tanto (Caitlyn, Vayne, Janna): l'attivo dash + slow AOE non li lascia respirare"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contro tanto crowd control (CC: stun, fear, charm) — Leona, Lux, Ahri impilati. La Tenacity riduce la durata"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "contro doppio AD (es. Yasuo + Caitlyn): converte il burst fisico in bleed spalmato sui secondi successivi"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "contro front line che impila armor (Malphite, Ornn): la passiva di shred aiuta la squadra a chunkare il tank"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Clear pulito entro 3:15, due gank prima del minuto 6 con Q + E, poi snowball (vantaggio iniziale che cresce: kill > gold > item > più kill) un lane e usa la R nei teamfight per togliere il loro carry."
  weakness: "Ti puniscono i champion che out-rangeano il gap close (Caitlyn, Lillia) o che CC-ano la R a metà salto (Janna tornado, Alistar headbutt). Waveclear early scarso, debole nei sieges lunghi."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["yasuo", "yone", "tryndamere"]
      archetype: "Bruiser mobili senza hard CC su sé stessi"
      reason: "La R di Warwick (Infinite Duress) è un Suppress — il lock totale che ignora la Tenacity (riduzione CC) e non si può rimuovere con QSS. Non hanno modo di disimpegnarsi una volta saltati."
    - examples: ["kayn", "shaco", "evelynn"]
      archetype: "Jungler squishy da snowball"
      reason: "Il clear di Warwick è uno dei più forti pre-form grazie al sustain passivo (heal della Q + Eternal Hunger): li incrocia al level 3 con full HP mentre loro hanno dovuto backare."
    - examples: ["zed", "akali", "talon"]
      archetype: "Assassini mid che gankano le side"
      reason: "Il loro kit è pensato per pickare bersagli isolati, ma il suppress della R li prende a metà catena di dash. Un salto = una kill, e la passiva della W (sotto il 50% HP) ti accelera proprio quando provano a scappare."
  counterpicks:
    - examples: ["lillia", "kindred", "graves"]
      archetype: "Jungler ranged che out-tradano in jungle"
      reason: "Ti pokano mentre clearri e kitano (si muovono indietro mentre attaccano) il tuo gap close. Warwick non ha tool ranged — la Q ha range 365, praticamente melee."
    - examples: ["udyr", "olaf", "nocturne"]
      archetype: "Altri duellanti early-clear con cleanse o unstoppable"
      reason: "La R di Olaf rimuove il tuo suppress a metà salto. La R di Nocturne oscura la visione e rende fallimentare la tua invade. Udyr regge il sustain e ti out-DPSa nel 1v1 fermo."
    - examples: ["janna", "alistar", "thresh"]
      archetype: "Support engage/disengage con peel point-and-click"
      reason: "Il tornado di Janna interrompe la R a metà channel, l'headbutt di Alistar ti spinge fuori dal frame di suppress, l'hook di Thresh tira via il target. La tua ult è rumorosa (cue audio) e facile da reagire."
---

## Panoramica


Warwick è un diver jungler novizio-friendly (un champion che salta sulla back line nemica) costruito su due idee semplici: curarsi ogni volta che subisce danno, e bloccare un singolo bersaglio con il Suppress single-target più lungo del gioco. **Eternal Hunger** rigenera HP automaticamente sotto il 50% e tripla sotto il 25%, quindi a differenza di altri jungler early non devi backare dopo il primo clear. **Q (Jaws of the Beast)** è un gap close corto che morde e cura; **E (Primal Howl)** dà damage reduction (DR: una percentuale del danno entrante viene ignorata); **R (Infinite Duress)** è un salto di distanza globale che scala con Move Speed e Suppress (lock totale) il primo champion colpito per 1.5 secondi.

Il game plan: full-clear con sustain passivo (zero pozioni sprecate), due gank tra il minuto 4 e il 6 usando **Q** + **E** come gap close in due tempi, snowball (costruisci un vantaggio che si compone: kill > gold > item > altre kill) una lane, poi usa **R** nei teamfight per togliere il loro carry dall'equazione. Sei il jungler economico e affidabile che vince partite essendo fastidioso e tanky — non con outplay 1v9.

## Build Consigliata

**Starting items:** Hailblade + Refillable Potion. Scegli ![Mosstomper Seedling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1103.png) **Mosstomper Seedling** come jungle pet per uno scudo extra negli obiettivi, o ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** se vuoi un pathing più veloce tra i camp.

**Core items (in ordine):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — miglior bruiser item all-round: AD, AS, HP, Move Speed, ability haste. La passiva Spellblade (un'auto rinforzata dopo aver lanciato una spell) sincronizza con la **Q** per un morso devastante.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots di default contro squadre nemiche con tante auto-attack.
3. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — conversione bleed (danno AD in entrata spalmato su 2-3 secondi invece che tutto subito), heal gratuito al takedown. Critico per dive e sopravvivenza.
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — scudo HP bonus quando scendi sotto il 30% — combo perfetta con il triplo heal di **Eternal Hunger**.

**Situational items:**

- ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — primo item alternativo contro top side bruiser/tank. Crit garantito al primo colpo dopo una spell + cura — perfetto sulla **Q**.
- ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — contro comp che kitano (Caitlyn, Vayne con Janna). L'attivo è un dash di Move Speed + slow AOE (area of effect: colpisce tutti in un cerchio, non un singolo bersaglio).
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — boots contro tanto CC (stun, fear, charm). La Tenacity riduce quanto a lungo i loro CC ti tengono fermo.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — contro chi impila armor (Malphite, Ornn). La passiva di shred aiuta tutta la squadra a uccidere il tank.

**Boots:** Plated Steelcaps di default; Mercury's Treads se la loro squadra ha 3+ fonti di CC.

**Skill order:** Maxa la **Q** per prima (cooldown più basso = più burst e più heal), la **W** seconda (Move Speed + Attack Speed sotto il 50% HP), la **E** per ultima. Punto in **R** ai livelli 6, 11, 16.

**Runes:** Primaria **Precision** con **Press the Attack** (il terzo colpo sullo stesso target infligge danno bonus e amplifica i danni successivi), **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secondaria **Resolve** con **Second Wind** e **Overgrowth**. Stat shards: Attack Speed / Adaptive Force / Health Scaling.

## Matchup chiave

- **Lillia:** Matchup più duro. Kita il tuo gap close col range lungo della Q e la sua **R** sleep blocca la tua **R** a metà channel se la prende. Non invadere al level 2 — full clear e cerca i gank dove puoi usare il terreno per chiudere la distanza.
- **Kayn:** Forte per te pre-6. Il suo clear è più lento del tuo e i suoi HP bassi triggerano la sense della tua **W** dall'altra parte della mappa. Minaccia la sua red-side intorno al minuto 4-5 prima che si trasformi.
- **Lee Sin:** Skill matchup. La sua **Q** sonic wave ti tracka in fog of war. Resta sopra il 50% HP così non può fare il combo W safe ward-hop in una Q lunga. Fai sprecare la sua **R** prima di committare la tua.
- **Caitlyn (target di gank):** Range auto-attack lungo + una trappola che snara. Ganka dal tri-bush, non dal river. Usa la **E** damage reduction nel momento in cui piazza la trappola e **R** se Flasha — la tua R segue il dash di Flash.
- **Janna (target di gank):** Hard counterpick alla tua **R**. Il suo tornado interrompe il salto e la sua **R** è un knockback AOE (sbalza tutti via in un cerchio) che spezza il suppress. Ganka quando la **Q** di Janna è in cooldown — tracka i lanci sul wave-clear.

## Power spike & condizioni di vittoria

- **Level 3 (Q + W + E):** Prima finestra di gank. **Q** + auto + **E** basta per chunkare un laner squishy; l'attiva della **W** rivela la posizione se si nascondono in un cespuglio.
- **Level 6 (R sbloccata):** Spike che cambia partita. La **R** ha range 25000 internamente — di fatto metà mappa a Move Speed pieno. Cerca ult gank cross-jungle sulle side lane.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completata (~ minuto 12-14):** L'auto Spellblade dopo la **Q** raddoppia il danno del gank. Da qui ogni gank riuscito converte in kill, non solo in flash bruciato.
- **Level 11 + ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) Death's Dance (~ minuto 18-20):** Diventi quasi impossibile da uccidere nei 1v1. Prendi dragon, prendi Rift Herald, forza i fight obiettivo — il jungler nemico non può duellarti.

## Errori comuni

- **Premere R appena è up.** La **R** è un suppress single-target: sbagliarla su un tank butta 90 secondi di cooldown. Aspetta che il carry faccia un passo avanti, oppure Flash + R se ce l'hai.
- **Ignorare l'attiva della W fuori combat.** L'attiva rivela tutti i nemici vicini per 8 secondi. Usala prima di invadere la jungle nemica, prima di contestare lo Scuttle e attorno ai muri degli obiettivi — la vision vince i fight gratis.
- **Full-clear senza gankare.** Il tuo clear è veloce e sano, ma se non lasci mai la jungle i laner avversari scalano indisturbati. Forza almeno un gank tra il minuto 4 e il 6, anche solo per bruciare un Flash.
- **Dive in torre senza E.** I tower dive (andare sotto torre per uccidere un nemico nonostante i colpi della torre) richiedono la **E** attiva per la damage reduction. Senza, la torre ti cancella in 3 colpi — la passiva di heal non basta.
- **Usare Q on cooldown per poke.** La **Q** è il tuo gap close e il tuo heal in combat. Se mordi un minion fuori da un fight non hai più tool di follow-up quando il gank arriva davvero.

## Suggerimento avanzato

Usa la **R** offensivamente come strumento di traversata mappa a lunga distanza, non solo come finisher. Se una side lane è sotto pressione 2v1, ulta dalla tua jungle: il salto copre metà mappa a Move Speed pieno (circa 2500 unità). Anche se manchi il suppress iniziale perché il bersaglio dasha, arrivi al fight con full HP grazie a **Eternal Hunger**, mentre il nemico ti dava per fermo a farmare dall'altra parte. Questa singola giocata vince più partite del rincorrere kill 1v1.
