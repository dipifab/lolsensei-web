---
title: "Guida a Udyr Jungle — Build e matchup, Patch 16.9"
slug: "udyr-jungle"
language: "it"
patch: "16.9"
champion: "udyr"
role: "jungle"
last_updated: "2026-04-29"
description: "Guida a Udyr jungle per League of Legends patch 16.9: starter kit, build da bruiser, matchup chiave, power spike, errori frequenti e una nota di chiusura."
quick_learn:
  champion_dd_id: "Udyr"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Fighter / Diver Jungle"
  abilities:
    - key: "P"
      name: "Bridge Between"
      description: "Ogni abilità è una stance. Recast entro la finestra per la versione empowered. Dopo ogni stance i 2 AA successivi hanno più attack speed."
      dd_spell_id: "Udyr_Passive"
    - key: "Q"
      name: "Wilding Claw"
      description: "Buff di attack speed; i 2 AA successivi infliggono danno fisico bonus. Recast: più attack speed e fulmini sul bersaglio."
      dd_spell_id: "UdyrQ"
    - key: "W"
      name: "Iron Mantle"
      description: "Scudo e i 2 AA successivi ti curano. Recast: scudo più grande e cura nel tempo legata agli HP massimi. Tool principale di sustain."
      dd_spell_id: "UdyrW"
    - key: "E"
      name: "Blazing Stampede"
      description: "Buff di movement speed; il primo AA su ogni nemico stunna. Recast: più velocità e immunità agli effetti di immobilizzo (stun, root)."
      dd_spell_id: "UdyrE"
    - key: "R"
      name: "Wingborne Storm"
      description: "Tempesta AOE che danneggia e rallenta i nemici intorno. Recast: la tempesta insegue i bersagli ed esplode. Si livella a 6/11/16."
      dd_spell_id: "UdyrR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3053", name: "Sterak's Gage" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contro 3+ champion con CC duro (es. Leona + Sejuani + Lissandra) — la tenacity riduce stun e root, così arrivi alla back line"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "contro squadre con due forti damage dealer fisici (es. Yasuo + Caitlyn) — trasforma il burst AD in un sanguinamento sostenibile"
    - dd_id: "3065"
      name: "Spirit Visage"
      against: "contro minacce AP forti (Brand jungle, Karthus, Lillia) — amplifica del 25% la cura della W e regala magic resist"
    - dd_id: "3091"
      name: "Wit's End"
      against: "contro carry AP mobili (Akali, Diana, Ekko) — magic resist e danno magico on-hit puniscono chi dive sulla back line"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "quando puoi splitpush una side lane (spingere da solo mentre 4 nemici tengono mid) — bonus HP e danno per prendere torri"
    - dd_id: "3161"
      name: "Spear of Shojin"
      against: "quando il team chiede più DPS in skirmish — ability haste per ciclare le stance più volte negli scambi prolungati"
  base_combo: ["E", "AA", "Q", "AA", "W", "R"]
  win_condition: "Snowball con i gank a livello 3 e un clear della jungle pulito. Quando arriva Trinity Force (~minuto 14), cerca skirmish sugli obiettivi: la cura della W e lo stun di E ti tengono vivo nei 1v1."
  weakness: "Range corto, niente dash, niente disengage nel kit. Comp che fanno kite (Caitlyn, Vayne, Yasuo Wind Wall) ti tengono fuori, e quando la W è in cooldown non hai un secondo livello di sopravvivenza."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8446, name: "Demolish", icon_path: "perk-images/Styles/Resolve/Demolish/Demolish.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
---

## Panoramica

Udyr è un jungler corpo a corpo che cambia forma fra quattro stance — **Q**, **W**, **E**, **R** — e può fare il recast di ognuna entro una breve finestra per attivarne la versione empowered. Nel kit non ci sono skillshot: ogni abilità è point-and-click, quindi la skill expression sta nell'ordine delle stance, nel timing dei recast e nella scelta della finestra giusta per gankare. Pulisce la jungle in fretta, gankа in modo affidabile da livello 3 grazie allo stun della **E** sul primo attacco, e nei duelli tiene testa alla maggior parte degli altri jungler una volta arrivata Trinity Force.

Il game plan è semplice da descrivere: full clear della jungle, gank a livello 3, scaling fino a Trinity Force, poi cerca skirmish sugli obiettivi dove la cura della **W** ti fa durare più a lungo del jungler avversario. Non hai un dash né un disengage a lungo raggio: l'all-in (impegno totale fino alla kill, senza tornare indietro) è quasi sempre la scelta giusta una volta che la **E** è pronta.

## Build Consigliata

**Starting items:** jungle pet Gustwalker Hatchling più Refillable Potion. Gustwalker dà movement speed fuori combattimento per clear più rapidi e gank più veloci; scegli Mosstomper Seedling solo se ti aspetti invasion costanti.

**Core items (in ordine di acquisto):**

1. **Trinity Force** — il core da bruiser. Ti dà danno on-hit, attack speed, ability haste e il proc di Spellblade che si sposa perfettamente con il pattern stance-poi-attacco di Udyr.
2. **Plated Steelcaps** — armor e -12% danno dagli auto-attack. Default contro la maggior parte dei jungler avversari e contro qualsiasi team AD-pesante.
3. **Sundered Sky** — il primo attacco contro un bersaglio sotto il 35% HP diventa un colpo critico che ti cura. Ottima sinergia con lo stun della **E** (anche il primo attacco su ogni nemico stunna), trasforma i 1v1 tirati in kill.
4. **Sterak's Gage** — HP più uno scudo "lifeline" che si attiva quando incassi un burst. Ti compra il tempo per fare il recast della **W** e sopravvivere alla finestra di danno.

**Situational items:**

- **Mercury's Treads** — al posto di Plated Steelcaps quando affronti 3+ champion con CC duro (es. Leona + Sejuani + Lissandra). La tenacity accorcia stun e root.
- **Death's Dance** — contro squadre con due forti damage dealer fisici (es. Yasuo + Caitlyn). Trasforma il burst AD in un sanguinamento (danno spalmato nei secondi successivi) che riesci a sopravvivere.
- **Spirit Visage** — contro minacce AP forti (Brand jungle, Karthus, Lillia). Amplifica del 25% la cura della **W** e aggiunge magic resist.
- **Wit's End** — contro carry AP mobili (Akali, Diana, Ekko). Magic resist e danno magico on-hit puniscono i loro dive (ingressi in mezzo alla tua squadra) sulla back line.
- **Hullbreaker** — quando puoi splitpush (spingere una side lane da solo mentre 4 nemici tengono mid). Il bonus HP e danno in solo ti permette di prendere torri sotto pressione.

**Skill order:** maxa **Q** per primo per il clear della jungle e per il danno on-hit, **E** per seconda per il cooldown dello stun, **W** per ultima. Prendi **R** ai livelli 6/11/16.

**Runes:** primary **Resolve** con **Grasp of the Undying** (HP free per stack), **Demolish**, **Conditioning**, **Overgrowth**. Secondary **Precision** con **Triumph** (cura sui takedown) e **Legend: Alacrity** (scaling di attack speed). Shards: attack speed, adaptive force, scaling HP.

## Matchup chiave

- **Lee Sin:** corsa di skirmish. A livello 2 vince lui, a livello 3 vinci tu una volta online lo stun della **E**. Tracka i suoi cooldown: se la **Q** è giù, il duello è tuo.
- **Master Yi:** scala più di te ma è fragile prima di 3 item. Invadi il suo red buff al secondo clear, gankа la sua lane ogni volta che la **E** è pronta, e negagli farm. Se arriva a Bork + Phantom Dancer con gold pari, la partita è persa.
- **Hecarim:** ti supera in velocità con la sua **R** (Onslaught of Shadows). Non inseguirlo nella fog of war (zona non visibile della mappa). Aspetta che engage sulla tua squadra, poi **E**-stunnalo e bruscialo mentre la sua **R** è in cooldown.
- **Graves:** matchup early difficile — la sua **R** ti fa kite (lui si muove indietro mentre attacca) e la **W** smoke screen ti nega gli auto-attack. Aspetta livello 6, schiva la **R**, poi committi con **E** stun e **R** AOE.
- **Warwick:** specchio fra bruiser, decide chi gestisce meglio la **W**. Il tuo scudo più cura batte il suo sustain. Salva la **W** *dopo* il fear, non prima — se la consumi senza pressione, il valore del recast va sprecato.

## Power spike & condizioni di vittoria

- **Livello 3 (dopo il primo clear):** tutte e quattro le stance sono attive. La **E** ha lo stun sul primo attacco contro ogni nemico — è la prima finestra di gank. Path: raptor → red → primo scuttle → gank mid o top.
- **Livello 6:** si sblocca **Wingborne Storm (R)**. Danno AOE in skirmish e un recast che insegue i bersagli. Adesso puoi fare dive (entrare sotto torre per chiudere una kill) in 2v1 perché la tempesta chunk-а entrambi i target.
- **Trinity Force completato (~minuto 14):** spike enorme. Spellblade procca a ogni cambio di stance, e il movement speed ti fa stare attaccato ai bersagli che provano a kite. Forza i fight sugli obiettivi qui.
- **Sundered Sky online (~minuto 21-23):** con Trinity + Sundered + Sterak's diventi quasi inuccidibile nei 1v1. Cerca pick (eliminare un nemico isolato fuori dal teamfight) sulle side lane intorno ai timer di drake e baron.

## Errori comuni

- **Dimenticare il recast.** Ogni stance ha una finestra di recast in cui la versione empowered parte gratis. Senza i recast giochi 4 abilità; con i recast ne giochi 8. Allena il ritmo: cast → 2 AA → recast → altri 2 AA.
- **Gank avidi prima di Trinity Force.** Senza il primo item sei uno stat-stick senza burst. Se la lane non è pre-freezata vicino alla tua torre, lasciala perdere. Path verso obiettivi o counter-jungle.
- **Sprecare lo stun della E sulla wave.** Il primo attacco della **E** su ogni bersaglio stunna. Se entri in lane e prendi prima un minion, hai sprecato lo stun su una creatura da 50 gold. Apri sempre con **E** sul champion che vuoi uccidere.
- **Buildare full tank.** Udyr vuole lo stat sheet da bruiser (HP + AD + ability haste + on-hit). Stack puri di armor come Frozen Heart ti rendono resistente ma inutile nei 1v1 — non uccidi nessuno.
- **Ultare un singolo bersaglio senza piano di recast.** La **R** più il suo recast è la finestra di danno più grande. Premere **R** una volta e allontanarsi lascia metà del danno sul tavolo.

## Suggerimento avanzato

Allena il **doppio recast Q-W** nei fight prolungati. Apri con **Q** sul bersaglio, intervalla due AA, fai il recast della **Q** per i fulmini; nella stessa finestra attiva la **W** prima che il recast scada, intervalla altri due AA, fai il recast della **W** per la cura nel tempo. Questo pattern incolla circa quattro secondi di danno on-hit empowered con una barra HP intera di sustain — la maggior parte dei jungler non vince questo scambio, anche con un piccolo lead di gold su di te.
