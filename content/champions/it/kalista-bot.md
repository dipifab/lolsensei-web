---
title: "Kalista Bot Build & Guida — Patch 16.9"
slug: "kalista-bot"
language: "it"
patch: "16.9"
champion: "kalista"
role: "bot"
last_updated: "2026-05-05"
description: "Guida Kalista bot lane per League of Legends Patch 16.9: build on-hit, meccanica Soulbound col support, matchup chiave, power spike, errori comuni e tip finale."
quick_learn:
  champion_dd_id: "Kalista"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Marksman / On-hit Skirmisher"
  abilities:
    - key: "P"
      name: "Martial Poise"
      description: "Ogni auto-attack e ogni Pierce concedono un piccolo hop durante il wind-up. Un click di movimento prima che il colpo parta sceglie la direzione del salto."
      dd_spell_id: "Kalista_Passive"
    - key: "Q"
      name: "Pierce"
      description: "Skillshot lineare. Se uccide il primo bersaglio, la lancia continua e trasferisce tutti gli stack di Rend sul nemico successivo colpito."
      dd_spell_id: "KalistaMysticShot"
    - key: "W"
      name: "Sentinel"
      description: "Passiva Soulbound: lega Kalista a un alleato. Quando entrambi colpiscono lo stesso target, danno magico extra basato sull'HP massimo."
      dd_spell_id: "KalistaW"
    - key: "E"
      name: "Rend"
      description: "Ogni auto-attack e ogni Pierce piantano una lancia nel target. L'attivazione le strappa: il danno scala con il numero di stack, slow ai nemici vicini."
      dd_spell_id: "KalistaExpungeWrapper"
    - key: "R"
      name: "Fate's Call"
      description: "Mette il Soulbound in stasi e lo trascina su Kalista. L'alleato puo' ri-attivare per lanciarsi come dash con knockback che si ferma sul primo champion colpito."
      dd_spell_id: "KalistaRx"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "E" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "E" }
    - { level: 11, key: "R" }
    - { level: 12, key: "E" }
    - { level: 13, key: "E" }
    - { level: 14, key: "W" }
    - { level: 15, key: "W" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "3091", name: "Wit's End" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3153", name: "Blade of The Ruined King" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contro tank/bruiser con 2500+ HP (Sion, Ornn, Cho'Gath): l'armor pen scala col loro vantaggio HP su di te"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contro comp di healing (Soraka support, Aatrox, Dr. Mundo): Grievous Wounds dimezza le cure"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "contro assassini/burst comp (Zed, Talon, Kha'Zix): la seconda vita lascia spazio al follow-up del Soulbound dopo R"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contro hard CC single-target (Ashe arrow, Morgana Q, Blitzcrank hook): blocca un'abilita', l'hop reset sopravvive"
  base_combo: ["Q", "AA", "E", "AA", "R"]
  win_condition: "Stacka Rend a 6+ sul target prioritario in teamfight, poi Q reset sul secondo bersaglio. Con Wit's End e Blade of The Ruined King online, batti gli altri marksman nelle scaglie estese."
  weakness: "Scali col tuo support: un Soulbound che non riesce a fissare un target ti lascia senza engage. Hook support (Blitzcrank, Thresh) afferrano il tuo partner fuori dal raggio dei tuoi salti e il fight finisce prima dell'R."
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
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8139, name: "Taste of Blood", icon_path: "perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png" }
      - { dd_id: 8105, name: "Relentless Hunter", icon_path: "perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision con Press the Attack: tre hop sullo stesso target proccano PtA per +12% danno bonus mentre Rend si stacka in fretta. Triumph premia lo skirmish continuo, Legend: Alacrity nutre la curva on-hit di AS, Coup de Grace finisce target sotto il 40% HP."
    secondary_rationale: "Domination secondary: Taste of Blood da' sustain dopo ogni trade breve in lane (le hop window ti permettono di scappare puliti), Relentless Hunter stacka sui takedown e aggiunge la movement speed out-of-combat che ti serve per roamare mid col Soulbound."
    secondary_alternative: "Contro lane di poke pesante (Caitlyn + Lux, Varus + Brand) swap Domination su Resolve con Bone Plating (-30/-60 danno sui primi 3 colpi entro 1.5s) e Second Wind (HP regen sale sotto il 50% HP), per sopravvivere ai primi 6 livelli."
matchup_draft:
  pick_into:
    - examples: ["aphelios", "kog-maw", "sivir"]
      archetype: "ADC late-game immobili senza dash"
      reason: "La loro unica safety e' il posizionamento. Kalista hopa ad ogni auto-attack, quindi tradea in melee senza mai stare ferma: non hanno risposta tranne Flash, e tu stacki Rend piu' veloce di quanto loro resettino il trade."
    - examples: ["jinx", "varus", "ashe"]
      archetype: "Marksman a posizionamento statico dipendenti dal support per il lockdown"
      reason: "Se il loro support engagga per primo, la tua R per riposizionarti e Wit's End on-hit battono la loro curva di AS. Non possono kitare un campione che chiude 350 unita' per ogni auto."
    - examples: ["caitlyn"]
      archetype: "ADC artiglieria long-range in lane phase"
      reason: "Caitlyn ti pokea livelli 1-3, ma la sua trap-and-net e' un dash unico su CD lungo: una volta online boots e Wit's End, la cammini al livello 6."
  counterpicks:
    - examples: ["draven", "samira", "lucian"]
      archetype: "Lane-bully marksman con forte all-in livelli 1-3"
      reason: "Il loro early damage supera il tuo hop spacing (la distanza di sicurezza che tieni saltando con ogni auto) prima che tu abbia AS per stackare Press the Attack. Una Q sbagliata al lvl 2 e prendono una kill prima che il support risponda."
    - examples: ["blitzcrank", "thresh", "nautilus"]
      archetype: "Hook support pickati contro il tuo Soulbound partner"
      reason: "Se hookano il tuo support, il link Soulbound diventa irrilevante: non puoi R-arlo fuori dalla linea del grab, e l'engage avviene 800+ unita' fuori dalla tua hop window."
    - examples: ["tristana", "vayne"]
      archetype: "Hypercarry mobili con self-peel"
      reason: "Tristana W esce dal tuo dive, Vayne tumble cancella il timer dello stack di Press the Attack. Entrambe scalano in item che battono il tuo core on-hit in 1v1 dopo il minuto 25."
---

## Panoramica

Kalista e' un marksman skirmisher on-hit ("on-hit" = item i cui effetti scattano ad ogni auto-attack, non dalle abilita'; "skirmisher" = champion che vince in scambi corti e ripetuti, non in un grande all-in) definito da **Martial Poise (P)**: ogni auto-attack e ogni **Pierce (Q)** le concedono un piccolo hop durante il wind-up. Quel salto trasforma gli auto-attack in mobility: cammina addosso ai nemici fermi e disengaga dai melee senza mai fermarsi a sparare. Il prezzo e' un early game fragile (AD basso, niente shield) e una skill floor altissima per un marksman: l'hop va comandato con click di movimento frame-per-frame.

Il game plan ruota attorno agli stack di **Rend (E)**. Ogni auto-attack pianta una lancia nel target; l'attiva le strappa per danno crescente. Stacka 6-8 lance su un tank, poi E per cancellare il squishy (champion ad alto danno e poche difese, tipico degli ADC) accanto a lui, e hai chiuso il teamfight. Il meccanico Soulbound su **Sentinel (W)** la lega per tutta la partita a un alleato (di norma il support), e **Fate's Call (R)** lancia quell'alleato come dash a knockback. Con un engage support tipo Thresh o Leona, l'R di Kalista trasforma un flank Soulbound in un pick garantito (eliminare un nemico isolato fuori dal teamfight). Con un poke support scali peggio e la R diventa un panic disengage piuttosto che engage tool.

## Build Consigliata

**Starting items:** Doran's Blade + 1 Health Potion. Salta Doran's Shield anche contro lane ranged: Kalista ha bisogno dell'AD extra per convertire l'hop spacing in kill threat.

**Core items (in order):**

1. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — primo item: il tuo spike di attack speed (AS), cioe' il primo grande salto in velocita' di colpo. Aggiunge danno magico ad ogni auto-attack, scala perfettamente con la frequenza dell'hop, e l'MR conta contro la combo support AP + mid mage.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed extra per gli stack di Press the Attack e per applicare Rend piu' velocemente.
3. ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** — danno pari a una percentuale degli HP correnti del target ad ogni auto-attack, piu' un active che applica slow. Chiude lo scambio in melee ed e' il miglior secondo item contro qualsiasi frontline (i tank/bruiser che aprono il teamfight).
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — i bolt applicano Rend a due target extra. E' quello che trasforma la E in spike AOE da teamfight (area of effect: danno che colpisce piu' di un bersaglio insieme).
5. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — quinto item: AD piu' lo shield di lifesteal per gli scambi estesi late.

**Situational items:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contro tank/bruiser con 2500+ HP (Sion, Ornn, Cho'Gath): l'armor pen scala col loro vantaggio HP su di te.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contro comp di healing (Soraka support, Aatrox, Dr. Mundo). Grievous Wounds dimezza le cure.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — contro burst/assassin comp (Zed, Talon, Kha'Zix): la seconda vita da' tempo al Soulbound di seguire dopo l'R.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contro hard CC single-target (CC = crowd control: stun, root, knock-up che ti bloccano sul posto). Blocca una freccia di Ashe o un hook di Blitzcrank, l'hop reset sopravvive.

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** di default. Switcha a ![Boots of Swiftness](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3009.png) **Boots of Swiftness** se il team avversario ha 4+ slow che non puoi schivare con l'hop.

**Skill order:** Maxa **Q** per primo (danno principale + meccanica di transfer Rend), **E** secondo, **W** ultimo. Punto in **R** ai livelli 6, 11, 16. Apri **Q** al livello 1 per avere poke affidabile su invade level 1.

**Runes:** Primary **Precision** con **Press the Attack**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secondary **Domination** con **Taste of Blood** e **Relentless Hunter**. Contro lane di poke pesante (Caitlyn + Lux, Varus + Brand) swap Domination su Resolve con **Bone Plating** e **Second Wind** per sopravvivere ai livelli 1-6.

## Matchup chiave

- **Aphelios:** Kalista vince post-6 se centra l'hop spacing. I damage spike di Aphelios variano per arma, quindi step-uppa solo quando la sua off-hand e' Severum (lifesteal) o Crescendum (turret), entrambe corte di range: lo cammini.
- **Caitlyn:** Lane perdente livelli 1-5: trap e 650 di auto-range puniscono il fatto che devi camminare in avanti per stackare Rend. Prendi **Bone Plating** secondary, chiedi al support di tankare una trap, poi cerca livello 6 con **R** + gank jungle.
- **Draven:** Lane bully. Evita i trade quando ha **Spinning Axe** attiva: il suo auto-reset incatena il tuo hop in una kill garantita se stai fermo. Stacka un Rend per ogni auto su minion, salva E per quando ti centra una Q, poi ri-engaga quando l'asse e' down.
- **Jinx:** Pari pre-6, scali meglio post-6. L'hop di Kalista counterea lo slow della **W** di Jinx perche' il dash parte prima che il proiettile atterri. Dopo livello 9 all-ini ogni wave che Jinx e' costretta a clearare.
- **Vayne:** Matchup di scaling perdente dopo il minuto 25. Uccidila nei primi due item: Wit's End online prima che lei finisca Kraken Slayer e' l'unica finestra in cui Kalista vince in 1v1 puro.

## Power spike & condizioni di vittoria

- **Livello 2:** Con **Q** + un punto in **E**, hai un trade pattern affidabile: AA, AA, E con stack pieno. Le altre lane perdono questo scambio.
- **Livello 6:** Prima **Fate's Call** sblocca il flank Soulbound (entrare nel fight da un lato che i nemici non stanno guardando): piazza il support in side-bush, R-allo addosso al support nemico, e segui con la tua Rend stackata.
- **![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) Wit's End completion (~ minuto 11-13):** La curva di AS decolla. Cammini quasi tutti i marksman nei livelli 6-9 e diventi il leader DPS auto-attack di mappa bot side.
- **![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) Blade of The Ruined King online (~ minuto 18-21):** % max HP on-hit shredda il frontline. Forza un drake o un Rift Herald qui: la tua E stackata sul tank cancella l'ADC nemico in piedi accanto a lui.

## Errori comuni

- **Castare Rend a 1-2 stack per chip damage.** Rend scala forte col numero di stack: spammare E presto svuota la pila prima della kill threshold. Tieni E finche' non hai 5+ stack sul target prioritario, oppure finche' la kill non si chiude (E rimborsa il CD su una kill, quindi un cast da finisher resetta il ciclo).
- **Dimenticare che l'hop e' un comando di movimento.** I novizi su Kalista auto-attaccano e stanno fermi. L'hop si attiva solo se clicchi una direzione di movimento durante il frame del wind-up. Allena click + attack alternati in custom prima di andare in lane.
- **Usare R come engage offensivo con un poke support (Karma, Lulu).** I loro kit non hanno follow-up CC dopo il knockback. Salva la R come panic save: stasis sul support per schivare una freccia di Ashe o un hook di Blitzcrank, poi disengaga.
- **Saltare Wit's End contro comp AD.** Anche cosi', Wit's End e' lo spike di AS piu' veloce e il danno magico applica indipendentemente dall'armor. Compra prima quello, gli item di AD pen vanno in slot 4 o 5.
- **Restare in fight con 0 hop disponibili.** L'hop c'e' su ogni auto-attack, ma se nessun nemico e' nel raggio di attacco, sei costretta a camminare. Tieni d'occhio quando finiscono i target attaccabili e back off: Kalista senza hop e' un marksman a 580 MS senza dash, mobility piu' bassa di Caitlyn.

## Suggerimento avanzato

Allena il **Q reset su minion per scappare in jungle**. Quando fai un wall jump vicino al river o al tri-bush, queue una **Q (Pierce)** sull'ondata di minion dietro il muro: se la Q uccide il minion, la lancia continua e ti permette di hopare il muro nello stesso frame. Il trick ti fa scappare da un gank che ti ha tagliato la via fluviale, perche' il frame dell'hop conta come movimento e bypassa la hitbox del muro. Bind di un quick-cast **Q** abbassa il tempo di reazione necessario.
