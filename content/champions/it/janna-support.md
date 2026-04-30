---
title: "Janna Support Build & Guide — Patch 16.9"
slug: "janna-support"
language: "it"
patch: "16.9"
champion: "janna"
role: "support"
last_updated: "2026-04-29"
description: "Guida Janna support per League of Legends Patch 16.9: build enchanter, matchup di lane, power spike, errori comuni e una tecnica avanzata di chiusura."
quick_learn:
  champion_dd_id: "Janna"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Enchanter / Disengage"
  abilities:
    - key: "P"
      name: "Tailwind"
      description: "Gli alleati che si muovono verso Janna ottengono Move Speed bonus. Una parte della Move Speed bonus di Janna diventa danno magico extra in autoattacco."
      dd_spell_id: "Janna_Passive"
    - key: "Q"
      name: "Howling Gale"
      description: "Carica un tornado, poi lancialo per farlo volare in linea, knock-up sui nemici. Più carichi più cresce range, danno e durata del knock-up."
      dd_spell_id: "HowlingGale"
    - key: "W"
      name: "Zephyr"
      description: "Passive: bonus Move Speed e attraversi le unità. Attiva: danno magico e slow su un nemico (consuma il bonus passive)."
      dd_spell_id: "SowTheWind"
    - key: "E"
      name: "Eye of the Storm"
      description: "Shield mirato su un campione alleato o su una torre, con bonus Attack Damage all'alleato per la durata."
      dd_spell_id: "EyeOfTheStorm"
    - key: "R"
      name: "Monsoon"
      description: "Channel che spinge via tutti i nemici vicini, poi cura gli alleati nei dintorni per il resto della durata. Disengage e recupero in un unico tasto."
      dd_spell_id: "ReapTheWhirlwind"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "W" }
    - { level: 15, key: "W" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "3222", name: "Mikael's Blessing" }
  situational_items:
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contro burst AOE pesante (Yone R, Kennen R, Orianna R) — l'attivo dà uno shield istantaneo a tutta la squadra"
    - dd_id: "3107"
      name: "Redemption"
      against: "quando la squadra ha bisogno di heal di gruppo nei fight lunghi o per contendere obiettivi (Drake, Baron)"
    - dd_id: "6616"
      name: "Staff of Flowing Water"
      against: "contro AP carry che scalano con Ability Haste (Hwei, Ezreal AP) — bonus Ability Power all'alleato che shieldi"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "contro engage comp con un AD carry chiaro (Aphelios, Kai'Sa) — il legame combina con la R per uno slow garantito"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "Tieni l'AD carry vivo oltre la fase di skirmish iniziale, accumula peel via Move Speed e usa la R per spezzare gli engage nemici sugli obiettivi."
  weakness: "Poco danno solitario e range corto sulla E. Se il nemico ti landa hard CC prima della R, non puoi peelare nessuno, nemmeno te stessa."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8214
      name: "Summon Aery"
      icon_path: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8233, name: "Absolute Focus", icon_path: "perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["leona", "rakan", "nautilus", "rell"]
      archetype: "Hard engage support"
      reason: "La R di Janna cancella il dive a mezz'aria: nel momento in cui saltano sull'AD carry, il channel li spinge via e annulla il tentativo di engage."
    - examples: ["jhin", "caitlyn", "ashe"]
      archetype: "AD carry immobili con autoattacchi forti"
      reason: "Tailwind più E shield più Ardent Censer trasformano un marksman fermo in una fortezza di peel: aumenta danno e Move Speed senza dover riposizionare."
    - examples: ["zac", "hecarim", "warwick"]
      archetype: "Diver junglers vistosi"
      reason: "La loro gank è un solo salto telegrafato — la Q li knock-uppa a mezz'aria e la R li rispedisce indietro da dove sono partiti, sprecando il cooldown."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "Hook support a lungo range"
      reason: "Janna non ha gap-closer e nessun hard CC al level 1: un hook landato prima del 6 cancella l'AD carry prima che la R sia pronta per disengage."
    - examples: ["xerath", "brand", "vel-koz"]
      archetype: "Mage support a lungo range"
      reason: "Pokano fuori dagli 800 unit di range della E shield: lei può shieldare il colpo ma non può rispondere — l'attrito di HP vince la lane sui tempi lunghi."
    - examples: ["soraka", "yuumi", "milio"]
      archetype: "Enchanter sustain che out-healano il poke"
      reason: "L'unico tool di danno in lane di Janna è la Q, telegrafata da una carica lunga — questi enchanter out-healano il trade e la battono sullo scaling team-fight."
---

## Panoramica

Janna è un enchanter support costruita su un solo verbo: **peel** (proteggere un alleato, di solito l'AD carry — il marksman della bot lane che scala con gli item — da chi lo sta attaccando). La passive **Tailwind** dà Move Speed agli alleati che si muovono verso di lei, **Howling Gale (Q)** knock-uppa chi prova a divare la back line (il carry ranged squishy che sta in fondo nei teamfight), **Zephyr (W)** logora e slowa la minaccia più vicina, **Eye of the Storm (E)** è uno shield con dentro un buff di Attack Damage per l'alleato che lo riceve, e **Monsoon (R)** è uno dei tool di disengage più puliti del gioco (un'abilità che spezza il tentativo di engage avversario — quando saltano dentro, tu li butti fuori).

Il game plan è calmo e meccanico: l'AD carry non muore mai. Stai tra le minacce e il carry, lancia lo shield ogni volta che è pronto, carica la **Q** dietro un muro così esce a dimensione massima, e tieni la **R** come "panic button" per quando il team nemico committa tutto sulla tua back line. Su Janna non vuoi quasi mai engagiare — il tuo lavoro è vincere i fight rifiutandoti di perderli.

## Build Consigliata

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (lo starter da support che si evolve dando più gold) più 2 Health Potion. Salta gli starter da danno: Janna non snowballa sulle kill di lane, scala sull'utility nei teamfight.

**Core items (in ordine):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — si evolve in Bounty of Worlds e poi in un legendary support. Accumula gold e cariche ward in automatico.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — l'Ability Haste ti permette di spammare **E** shield e **W** slow su cooldown ridotti; boot di default per gli enchanter.
3. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — passiva di heal-on-shield che cresce nei fight lunghi. Combinato con la **E** spammata, l'AD carry quasi non subisce danno netto.
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — aumenta danno on-hit e Attack Speed dell'alleato che shieldi. È il miglior item del gioco accanto a un AD carry da autoattacco.
5. ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — pulisce l'hard CC da un alleato. Obbligatorio se il nemico ha uno stun single-target o un hook sul tuo carry.

**Situational items:**

- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contro burst AOE pesante (danno su area, tipo Yone R o Kennen R). L'attivo dà uno shield istantaneo a tutta la squadra.
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — quando i fight si trascinano (Drake, Baron, teamfight lunghi). Heal AOE ritardato che puoi droppare da metà mappa.
- ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** — contro AP carry che scalano con Ability Haste (Hwei, Ezreal AP). Buffa l'alleato che shieldi con Ability Power extra.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — contro engage comp dove al tuo AD carry serve uno slow garantito sul target durante la **R**.

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** è il default. Boots of Swiftness le sostituiscono contro comp con tanti slow da cui devi scappare.

**Skill order:** Maxa **E** per prima (valore shield e bonus Attack Damage scalano per livello), **Q** seconda (più knock-up e danno), **W** ultima. Metti **R** ai livelli 6, 11, 16. Parti **W** al level 1 per la Move Speed in arrivo in lane, poi **E** al 2 per shieldare il primo all-in.

**Runes:** Albero primario **Sorcery** con **Summon Aery** (attacca un piccolo proc di danno e shield alle tue spell), **Manaflow Band** (mana sustain per shieldare e **W** ogni wave), **Absolute Focus** (AP bonus sopra il 70% HP, facile su Janna che resta safe), **Scorch** (più poke con la **Q**). Secondario **Resolve** con **Font of Life** (slowi un target con **W** → tutti gli alleati che lo colpiscono curano) e **Overgrowth** (HP scalanti permanenti). Stat shards: Ability Haste, Adaptive Force, Health Scaling.

## Matchup chiave

- **Leona / Rakan:** Hard engage support. Tieni la **R** per il momento in cui committano sull'AD carry; non bruciarla mai per cercare la Q. Carica la **Q** dietro un muro così non vedono il windup.
- **Blitzcrank / Thresh:** Support hook. Stai dietro ai minion ogni volta che attraversi il river. L'hook landa una volta e l'AD carry è morto — non puoi **R**-are fuori da uno stun da 1.75 secondi.
- **Xerath / Brand:** Mage support fuori dal range della **E** shield. Stai attaccato alla wave, non scambiare auto, e fatti hard-sidare la lane dal jungler. Compra ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** prima del solito.
- **Soraka:** Specchio di sustain. La out-shieldi al costo di meno heal grezzo. Forza un all-in al level 2: **W** in faccia, **E** sull'AD carry, spingila fuori dalla wave prima del suo spike sulla **R**.
- **Pyke:** Minaccia da roam. Trackalo con vision in tri-bush e ingresso river; se lascia bot lane, ping mid subito. La **R** di Janna ferma la sua execute solo se committa in melee — sull'hook a distanza è incatturabile.

## Power spike & condizioni di vittoria

- **Level 2:** Con **W** a 1 e **E** a 2 puoi shield-engagiare un trade corto (uno scambio breve di colpi in lane, non un all-in). Quasi tutte le lane perdono questo trade perché il loro spike di livello 2 (il momento in cui un campione ottiene un boost improvviso di potenza) è più debole del tuo.
- **Level 6:** Si sblocca **Monsoon**. Ogni tentativo di 2v2 dei nemici da qui diventa vincibile — engagiano, tu channeli, finiscono knock-uppati indietro sotto la tua torre.
- **Moonstone Renewer + Ardent Censer (~ minuto 16-20):** È lo spike teamfight in cui smetti di essere un support da lane e diventi un moltiplicatore di squadra. L'HP effettivo dell'AD carry quasi raddoppia se shield-spammi durante un fight.
- **Tre legendary online (~ minuto 25):** Con Mikael's aggiunto, pulisci l'unica abilità CC che cancellerebbe il tuo carry. Da qui ogni fight su un obiettivo è un 5v4 se il nemico committa hard CC.

## Errori comuni

- **Lanciare Q senza caricarla in lane.** Un tornado da 0.5 secondi non fa quasi nulla. Carica la **Q** per i 3 secondi pieni dietro un muro o nel fog of war (il bush non wardato vicino al river bot), poi rilasciala mentre il nemico cammina dentro una wave.
- **Bruciare la R per una kill.** La **R** di Janna è il miglior disengage del team. Ogni volta che la usi per chiudere una kill che l'AD carry avrebbe finito comunque, lasci la squadra senza panic button per i 100+ secondi successivi.
- **Shieldare te stessa.** ![Eye of the Storm](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **E** può targettare anche te, ma il bonus Attack Damage su Janna è sprecato. Default: shield sull'AD carry; auto-shield solo se ti hanno locked uno skillshot (un proiettile mirato che si può schivare) e il carry è già al sicuro.
- **Stare troppo indietro nei fight.** La **E** ha un range corto (800 unit). Se peeki da dietro il team non puoi shieldare nessuno. Stai a portata shield dell'AD carry, second-line — più vicina di quanto ti dica l'istinto.
- **Fare auto sui minion per danno.** Tailwind si triggera solo sugli hit ai campioni. Pushare la wave con le auto regala al nemico un trade window gratis senza alcun beneficio di danno per te.

## Suggerimento avanzato

Allenati alla **Q-Flash**. Inizia a caricare **Howling Gale** dietro un muro, poi Flasha avanti e rilascia il tornado nello stesso movimento: il knock-up landa su un target che non ha visto il windup. Questa giocata trasforma Janna da enchanter difensiva a one-shot disengage su un nemico fed (un campione in vantaggio di kill e gold) che ha pushato troppo. Il costo è il **Flash** per i 5 minuti successivi — spendilo solo se la kill, o la sopravvivenza dell'AD carry, è blindata.
