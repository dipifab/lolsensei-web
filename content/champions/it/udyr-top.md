---
title: "Udyr Top — Build e Guida — Patch 16.9"
slug: "udyr-top"
language: "it"
patch: "16.9"
champion: "udyr"
role: "top"
last_updated: "2026-04-29"
description: "Guida Udyr top per League of Legends Patch 16.9: starter kit, build path bruiser, matchup chiave, power spike, errori frequenti e una tecnica avanzata."
quick_learn:
  champion_dd_id: "Udyr"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Fighter / Bruiser Top"
  abilities:
    - key: "P"
      name: "Bridge Between"
      description: "Ogni abilità è una stance. Ricasta in finestra per la versione empowered. I 2 attacchi successivi prendono attack speed."
      dd_spell_id: "Udyr_Passive"
    - key: "Q"
      name: "Wilding Claw"
      description: "Buff di attack speed; i prossimi due attacchi infliggono danno fisico bonus. Recast: più attack speed e fulmini sul bersaglio."
      dd_spell_id: "UdyrQ"
    - key: "W"
      name: "Iron Mantle"
      description: "Shield più cura sui prossimi due attacchi. Recast: shield più grande e heal-over-time legato all'HP massimo. Sustain principale in lane."
      dd_spell_id: "UdyrW"
    - key: "E"
      name: "Blazing Stampede"
      description: "Movement speed; il primo attacco su ogni nemico stunna. Recast: più move speed e immunità al CC immobilizzante (stun, root)."
      dd_spell_id: "UdyrE"
    - key: "R"
      name: "Wingborne Storm"
      description: "Tempesta AOE che danneggia e rallenta i nemici vicini. Recast: segue il bersaglio ed esplode per danno extra. Si potenzia a 6/11/16."
      dd_spell_id: "UdyrR"
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
    - { dd_id: "1054", name: "Doran's Shield" }
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3053", name: "Sterak's Gage" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contro 3+ champion con hard CC (es. Lissandra + Sejuani + Leona): la tenacity accorcia stun e root, raggiungi la back line"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "quando puoi splitpushare una side lane (spingere da solo mentre quattro nemici tengono mid): HP e danno bonus ti fanno prendere torri"
    - dd_id: "3065"
      name: "Spirit Visage"
      against: "contro top laner AP (Mordekaiser, Rumble, Vladimir): aumenta del 25% la cura della W e aggiunge magic resist"
    - dd_id: "3091"
      name: "Wit's End"
      against: "contro AP mobili (Akali, Gwen, Sylas): magic resist e danno magico on-hit puniscono il loro dive sulla back line"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "contro squadre con due forti damage dealer fisici (es. Yasuo + Caitlyn): trasforma il burst AD in un sanguinamento spalmato a cui sopravvivi"
    - dd_id: "3742"
      name: "Dead Man's Plate"
      against: "quando ti serve presenza in mappa per roam o splitpush: lo stack di move speed chiude il gap su bersagli che ti kitano naturalmente"
  base_combo: ["E", "AA", "Q", "AA", "W", "R"]
  win_condition: "Sopravvivi alla lane col sustain di W, scala fino a Trinity Force intorno al minuto 14, poi snowballa (trasforma i lead di gold in kill) andando in side lane e forzando duelli 1v1 — la cura della W batte i top laner."
  weakness: "Range corto, no dash, no disengage interno. Il kite duro (Quinn, Vayne, Teemo) ti supera, e quando la W è in cooldown non hai un secondo strato di sopravvivenza."
---

## Panoramica

Udyr è uno shapeshifter melee da top lane che alterna quattro stance — **Q**, **W**, **E**, **R** — e può ricastare ognuna entro una breve finestra per la versione empowered. Nel kit non ci sono skillshot: ogni abilità è point-and-click, quindi la skill expression sta nell'ordine delle stance, nel timing dei recast e nella scelta della finestra di trade. In top gioca da bruiser sustain: **Iron Mantle (W)** dà shield più heal-over-time che ti fanno reggere la maggior parte dei trade pre-6, **Blazing Stampede (E)** stunna sul primo attacco contro ogni nemico e dà move speed per chiudere il gap, e **Trinity Force** è l'item che trasforma il kit in vera kill pressure.

Il game plan è lineare: trade brevi durante l'attivazione di **W**, scaling fino a Trinity Force intorno al minuto 14, poi cerca finestre di splitpush (spingi una side lane da solo mentre quattro nemici tengono mid) e duelli 1v1 — il tuo sustain vince la maggior parte dei combattimenti estesi contro altri bruiser. Non hai dash né disengage a lungo raggio, quindi committare totalmente ("all-in" — niente esitazione, niente piano di fuga) è di solito la scelta giusta una volta che la **E** è disponibile.

## Build Consigliata

**Starting items:** Doran's Shield + 1 Health Potion. Doran's Blade solo contro top range dove vuoi all-inare presto per negare CS — e anche lì lo shield è di solito la scelta più sicura, perché Udyr non ha modo di scappare se l'all-in fallisce.

**Core items (in order):**

1. **Trinity Force** — core bruiser. Dà danno on-hit, attack speed, ability haste e la proc Spellblade che parte ogni volta che cambi stance. Il ritmo stance-poi-attacco di Udyr legge questo item come se fosse stato disegnato per lui.
2. **Plated Steelcaps** — armor più 12% di danno ridotto dagli auto-attack. Default contro la maggior parte dei top laner e contro qualsiasi team a base AD.
3. **Sundered Sky** — il primo attacco su un bersaglio sotto il 35% di HP diventa un critical strike che ti cura. Sinergia con lo stun di **E** (anche il tuo primo attacco su ogni bersaglio stunna) e trasforma gli 1v1 stretti in kill.
4. **Sterak's Gage** — HP più uno shield-lifeline (passiva che si attiva quando subisci danno pesante). Ti compra il tempo per piazzare un recast di **W** e sopravvivere a una finestra di burst.

**Situational items:**

- **Mercury's Treads** — swap dai Plated Steelcaps quando affronti 3+ champion con hard CC (es. Lissandra + Sejuani + Leona). La tenacity accorcia stun e root.
- **Hullbreaker** — quando puoi splitpushare una side lane senza contestazione. HP e danno solo bonus ti fanno prendere torri sotto pressione.
- **Spirit Visage** — contro top laner AP (Mordekaiser, Rumble, Vladimir). Aumenta del 25% la cura della **W** e aggiunge magic resist.
- **Wit's End** — contro AP mobili (Akali, Gwen, Sylas). Magic resist e danno magico on-hit puniscono il loro dive sulla back line.
- **Death's Dance** — contro squadre con due forti damage dealer fisici (Yasuo + Caitlyn). Trasforma il burst AD in un sanguinamento spalmato (danno distribuito su qualche secondo) a cui sopravvivi.

**Boots:** Plated Steelcaps di default. Mercury's Treads solo contro 3+ champion con CC nel team avversario.

**Skill order:** Maxa **Q** per prima per il danno on-hit e il trade pattern, **W** per seconda per il sustain in lane, **E** per ultima (lo stun è sul primo attacco indipendentemente dai punti; i ranghi in più riducono solo il cooldown). Punto in **R** ai livelli 6/11/16.

**Runes:** Primaria **Resolve** con **Grasp of the Undying** (HP gratis e danno bonus su ogni attacco empowered), **Demolish**, **Conditioning**, **Overgrowth**. Secondaria **Precision** con **Triumph** (cura sui takedown) e **Legend: Alacrity** (attack speed che scala). Stat shard: attack speed, adaptive force, HP scaling.

## Matchup chiave

- **Darius:** Lane bully early. Ti out-trada ai livelli 1-2; sopravvivi con Doran's Shield, salva la **W** per dopo che la sua **W** è atterrata (così il recast cura attraverso il suo bleed). Dopo Trinity Force lo out-sostieni 1v1.
- **Fiora:** Skill matchup deciso dal timing della **W**. La sua parry counterа ogni stance che casti per prima, quindi apri con un auto-attack per baitare il parry, poi **E**-stun e **W** per sopravvivere ai suoi vital.
- **Mordekaiser:** Lane lenta fino al power spike a 6 nel death realm. Trade brevi, salva il recast di **E** per la sua **R** così il dash CC-immune ti tira fuori dal realm. Rusha Spirit Visage come secondo item.
- **Quinn:** Il matchup peggiore da giocare. Ti kita con il blind della **Q** e il vault della **E**. Prendi **Teleport** (al posto di **Ghost**), regala il primo wave di CS e roma a mid ogni volta che la wave crasha — non puoi vincere 1v1 estesi contro di lei.
- **Camille:** Battaglia di scaling. Pre-6 vinci col sustain di **W**; appena ha Divine Sunderer ti out-trada con lo stun della **E**. Evita scontri estesi dopo il minuto 12 a meno che il recast di **E** non sia disponibile per spezzare la sua stun chain.

## Power spike & condizioni di vittoria

- **Livello 3 (Q + W + E):** Le quattro stance sono tutte sbloccate. La **E** ha lo stun sul primo attacco contro ogni nemico — è la tua prima finestra di all-in se la wave è dalla tua parte e il jungler è top-side.
- **Livello 6:** Si sblocca **Wingborne Storm (R)**. Danno AOE nelle skirmish e un recast che segue il bersaglio. Da qui puoi divare (andare sotto torre per la kill) quando il nemico è sotto metà HP, perché la tempesta continua a ticchettare anche se ti tiri brevemente indietro.
- **Trinity Force completato (~ minuto 14):** Power spike enorme. Spellblade procca a ogni cambio di stance, e la move speed ti fa stare incollato ai bersagli kited. Forza un combattimento in side lane o freezza vicino alla tua torre a seconda di dov'è il jungler.
- **Sundered Sky online (~ minuto 21-23):** Con Trinity + Sundered + Sterak's diventi quasi inkillabile negli 1v1. Cerca picks (eliminare un nemico isolato fuori dal teamfight) sulle side lane intorno ai timer di drake e baron.

## Errori comuni

- **Dimenticare i recast.** Ogni stance ha una finestra di recast in cui la versione empowered parte gratis. Senza recast stai giocando 4 abilità; coi recast ne stai giocando 8. Allena il ritmo: cast → 2 attacchi → recast → altri 2 attacchi.
- **Bruciare lo stun della E sulla wave.** Il primo attacco della **E** su ogni bersaglio stunna. Se entri in lane e auto-attacchi prima un minion, sprechi lo stun su una creatura da 50 gold. Apri sempre con la **E** sul champion che vuoi uccidere.
- **All-in greedy pre-Trinity Force.** Prima del primo item sei uno stat-stick senza burst. Se la wave non è già pre-freezzata sotto la tua torre, tieni il trade e farma. Lo spike al minuto 14 è quello che ti fa vincere il matchup, non un cheese al livello 3.
- **Buildare pure tank.** Udyr vuole lo statline da bruiser (HP + attack damage + ability haste + on-hit). Stack di pura armor tipo Frozen Heart ti rendono tanky ma inutile in 1v1 — non riesci a uccidere niente in un duello in side lane.
- **Splitpush senza vision.** Senza ward su river e tri-bush, un collapse 4-man della squadra avversaria trasforma il tuo splitpush in una kill gratis per loro. Piazza sempre un Control Ward sul lato nemico della lane prima di committare al push.

## Suggerimento avanzato

Allena il **bait W-into-E recast**. Apri il trade con la prima stance di **W** per assorbire il burst di apertura del nemico, poi casta subito **E** e ricastala nel momento esatto in cui il nemico spara il suo CC su di te — il recast dà immunità al CC immobilizzante per la sua durata, e la move speed ti fa restare incollato a lui mentre la sua finestra di burst è in cooldown. La maggior parte dei top laner committa stun o root aspettandosi di bloccarti sul posto; mangiarne il cast attraverso la finestra del recast sposta il trade di circa una rotazione completa di abilità a tuo favore.
