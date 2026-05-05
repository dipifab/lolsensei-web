---
title: "Kennen Top Build & Guida — Patch 16.9"
slug: "kennen-top"
language: "it"
patch: "16.9"
champion: "kennen"
role: "top"
last_updated: "2026-05-05"
description: "Guida a Kennen top lane per League of Legends Patch 16.9: starter, build AP da bruiser, matchup chiave, power spike, errori comuni e una tecnica avanzata."
quick_learn:
  champion_dd_id: "Kennen"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Teamfight Engager"
  abilities:
    - key: "P"
      name: "Mark of the Storm"
      description: "Ogni abilità di Kennen mette uno stack di Mark sul bersaglio. A 3 stack lo stunna. È il motore del kit: ogni combo punta a triplo stack."
      dd_spell_id: "Kennen_Passive"
    - key: "Q"
      name: "Thundering Shuriken"
      description: "Skillshot lineare che fa danno magico e applica 1 stack di Mark. Il poke a distanza e il primo stack facile sul bersaglio."
      dd_spell_id: "KennenShurikenHurlMissile1"
    - key: "W"
      name: "Electrical Surge"
      description: "Passive on-hit (effetto al colpo): ogni 5 auto fa danno magico bonus e applica 1 stack di Mark. Active: detona un burst magico su tutti i nemici vicini che hanno già almeno 1 Mark."
      dd_spell_id: "KennenBringTheLight"
    - key: "E"
      name: "Lightning Rush"
      description: "Dash breve che attraversa unità, applica 1 Mark e restituisce energy on hit. Quando termina, Kennen guadagna attack speed per qualche secondo. Tool di movement e di reposizionamento."
      dd_spell_id: "KennenLightningRush"
    - key: "R"
      name: "Slicing Maelstrom"
      description: "Channel AOE intorno a Kennen. Ogni tick fa danno magico e applica 1 stack di Mark a chi è dentro. Con i nemici raggruppati stunna la squadra intera in 2 secondi."
      dd_spell_id: "KennenShurikenStorm"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "4633"
      name: "Riftmaker"
      against: "contro fight prolungati e bruiser top (Sett, Darius, Mordekaiser): sustain in fight più true damage"
    - dd_id: "4645"
      name: "Shadowflame"
      against: "contro backline squishy senza Magic Resist: la passive HP-threshold (extra penetrazione magica sotto 35% HP) si allinea con i finisher di R"
    - dd_id: "3135"
      name: "Void Staff"
      against: "appena un priority target avversario compra un item di Magic Resist"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contro nemici con tanto healing (Vladimir top, Dr. Mundo, Yorick)"
  base_combo: ["Q", "E", "R", "W", "AA"]
  win_condition: "Lanciare Flash + R nel back line (la fila degli ADC/mage avversari) durante i teamfight per triplo-stackare la passive su più target insieme. Stun AOE + W detonate decide il fight."
  weakness: "Niente CC point-and-click se non R, e R è un channel a cui devi committarti — stun istantanei o knock-up (Pantheon W, Camille E2) ti cancellano la ulti prima che gli stack atterrino."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8139, name: "Taste of Blood", icon_path: "perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination primary: Electrocute procca con Q + W detonate + auto, burst su ogni triplo stack. Taste of Blood dà sustain in lane, Sixth Sense segnala le ward nemiche nelle side lane (essenziale per il flank), Ultimate Hunter accorcia il cooldown della R."
    secondary_rationale: "Resolve secondary: Kennen vuole tuffarsi in mischia con la R, quindi Second Wind ti rigenera HP mentre incassi poke in lane e Bone Plating assorbe i primi tre colpi quando committi un all-in (scambio totale fino alla kill)."
    secondary_alternative: "Contro top a poke ranged forte (Vladimir, Lillia top), swap Resolve → Sorcery con Nimbus Cloak (extra movement speed dopo un summoner spell, per lanciare R più veloce) e Transcendence per ability haste sul cooldown della R."
matchup_draft:
  pick_into:
    - examples: ["garen", "sett", "darius"]
      archetype: "Bruiser melee senza gap-closer"
      reason: "L'auto-attack range di Kennen (~550) supera la velocità di camminata di questi champion. Q poke e E reposition farmano da fuori threat range fino al power spike di livello 6."
    - examples: ["tryndamere", "yorick"]
      archetype: "Splitpusher senza CC affidabile"
      reason: "Non hanno modo di lockarti per impedire il channel della R. Una volta che Kennen ha 1-2 item, ogni teamfight in cui flanka è uno stun a 3 stack su più nemici: nessun split può eguagliare quell'impatto da solo in side lane."
    - examples: ["udyr", "olaf"]
      archetype: "Juggernaut a corto raggio"
      reason: "Li kiti col dash di E e con la passive on-hit di W. La loro stickiness dipende dal restarti incollato, e il tuo range più il refresh del dash li tengono fuori dal range delle loro auto."
  counterpicks:
    - examples: ["pantheon", "camille"]
      archetype: "Bruiser con CC point-and-click"
      reason: "Lo stun di Pantheon W (bersaglio singolo, instant) o il root di Camille E2 ti cancellano la R a metà channel — perdi lo stun AOE prima che landi un singolo stack, trasformando l'engage in una ulti sprecata."
    - examples: ["vladimir", "lillia"]
      archetype: "Top a sustain ranged"
      reason: "Hanno range superiore al tuo Q nei primi 6 livelli e si curano dei tuoi poke. Senza gap-closer, Kennen prende la peggio in ogni trade breve e resta indietro di CS al minuto 8."
    - examples: ["sion", "galio"]
      archetype: "Tank con Magic Resist e passive di cleanse"
      reason: "La passive death di Sion e lo shield magic damage della W di Galio neutralizzano le tue burst window. I 3 stack di Mark stunnano comunque, ma la W detonate fa metà danno appena stackano MR."
---

## Panoramica

Kennen è uno yordle ranged AP che gioca top come flank engager nei teamfight (il giocatore che gira intorno al fight per entrare da un lato non coperto dai nemici). Tutto il kit ruota su una meccanica: la passive **Mark of the Storm (P)** stacka tre volte e stunna. Ogni abilità — **Q**, **W** active, dash di **E**, ogni tick di **R** — mette 1 stack, quindi un engage pulito stunna la squadra intera in 2 secondi. Ha una lane phase decente grazie all'auto-attack range ~550 che batte la maggior parte dei bruiser, ma la sua identità si attiva al livello 6: è IL flank engager top che ribalta i teamfight mid-late.

Il game plan è semplice da descrivere e impegnativo da eseguire: farmare in sicurezza in lane con il poke della **Q** (danno a distanza per logorare l'HP senza committare al fight) e la passive on-hit della **W** (effetto che si attiva ogni tot auto-attack), tenere prio per gli obiettivi (vantaggio in lane che ti permette di lasciarla senza perdere risorse), poi **Flash + R** dentro il back line (la fila degli ADC e dei mage squishy — alti danni e poca difesa — schierati dietro i tank). La skill expression sta in due punti: gestione dell'energy (Kennen brucia energy in fretta e senza non casta) e scelta dell'angolo giusto per il teamfight, in modo che il channel della R non venga interrotto da uno stun point-and-click (uno stun istantaneo che il nemico ti applica cliccandoti, senza skillshot).

## Build Consigliata

**Starting items:** Doran's Shield + 2 Health Potions. Doran's Ring è accettabile se la lane non ha auto-attack harass e vuoi più rigenerazione di energy.

**Core items (in order):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — il burn (danno spalmato nei secondi successivi, non istantaneo) scala con la natura multi-target di **R**. Ogni tick su ogni nemico procca il burn, sciogliendo le pool HP dei tank.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — penetrazione magica flat per i target squishy del back line che vuoi stunnare e cancellare.
3. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — ti compra una stasis dopo **Flash + R**, così l'enemy team brucia i cooldown su un bersaglio congelato mentre i tuoi stack di stun finiscono di atterrare.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — moltiplicatore AP late game. Il burst di **R** che produce one-shotta gli squishy che non hanno comprato Magic Resist.

**Situational items:**

- ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — sostituisci Liandry's contro top da bruiser (Sett, Darius, Mordekaiser). Il sustain in fight (cura nei secondi del teamfight) più la conversione in true damage ti permette di sopravvivere alla seconda ondata di melee inevitabilmente addosso a te.
- ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — contro back line squishy senza Magic Resist. La passive HP-threshold (extra penetrazione magica sotto il 35% HP) si allinea con i finisher di **R**.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — appena un priority target avversario compra un item di Magic Resist.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contro nemici con tanto healing (Vladimir top, Dr. Mundo, Yorick).

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** è il default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** è accettabile contro 2+ minacce magiche con hard CC.

**Skill order:** Maxa **Q** per primo (massimo base damage, cooldown più basso — è il tuo poke principale e il primo stack a ogni combo), **W** per secondo (più burst dentro il fight), **E** per ultimo. Metti un punto in **R** ai livelli 6, 11, 16.

**Runes:** Primary **Domination** con **Electrocute**, **Taste of Blood**, **Sixth Sense**, **Ultimate Hunter**. Secondary **Resolve** con **Second Wind** e **Bone Plating** per durabilità in lane.

## Matchup chiave

- **Garen:** Lo superi col range delle auto. Poke con **Q**, non lasciarti mai colpire dalla sua **E** (la spinning), e usa il dash di **E** attraverso di lui quando committa la **Q** silence. Lane vincibile dal livello 3 in poi.
- **Sett:** Stai fuori dal raggio della sua barra di carica **W** — ogni auto che incassi la riempie. Trade solo quando la sua **W** è scarica, dasha attraverso di lui per spezzargli il facing se ti landa la **E** stun.
- **Pantheon:** Matchup più duro. La sua **W** è point-and-click e ti cancellerà la **R** in ogni fight. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** prima del second item, e non engagiare con **R** finché la sua **W** non è in cooldown.
- **Vladimir:** Lane lunga, vai indietro di CS. Prendi Doran's Shield + Second Wind, tieni la **Q** come punish per quando entra in pool, e chiama pressione del jungle prima del 6 perché in trade prolungato non vinci.
- **Mordekaiser:** Matchup pari che si gioca sulla **R**: il suo death realm cancella il peel della tua squadra, ma tu porti AOE stun. Se la sua **R** è up, non engagiare; se è in cooldown, puoi piazzare la tua nel suo back line.

## Power spike & condizioni di vittoria

- **Livello 6:** Prima **Slicing Maelstrom**. Insieme al **Flash**, è il momento in cui Kennen diventa un champion che decide le partite — Flash + R su un team raggruppato stunna tutti dentro il raggio.
- **Livello 9 (Q maxed):** **Thundering Shuriken** ha 4 secondi di cooldown a rank 5. Lane phase e farm in side lane diventano triviali, e puoi anche pokare le torri in sicurezza con la **Q**.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minuto 14-16):** Primo spike da teamfight. Raggruppati con la squadra per ogni drake; la tua **R** a 2 item cancella support e ADC squishy.
- **Tre item + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ minuto 24-28):** Soglia di burst superata. Combo **R** + **W** detonate one-shotta qualunque back line che non abbia costruito Magic Resist. Forza Baron e i fight per gli obiettivi late.

## Errori comuni

- **Engagiare la R senza Flash up.** Kennen non ha modo di chiudere la distanza sul back line. Senza **Flash + R** prendi solo la front line — e stunnare il loro tank non ti porta nulla mentre i loro carry ti kitano (si muovono indietro mentre attaccano) fino a farti morire.
- **Bruciare tutta l'energy in lane.** Kennen non ha mana ma ha energy che rigenera lenta. Spammi **Q** sull'onda e quando arriva il jungler avversario sei a secco. Tieni sempre ~50 energy di riserva per la **E** in fuga.
- **Maxare la W per prima.** Il danno active della **W** è più alto della **Q**, ma la **Q** ha 4 secondi di cooldown a rank 5 contro 6 della **W**. **Q** maxata per prima = più stack al minuto e più poke continuo; la **W** resta a rank 1 fino al livello 8.
- **Auto-cancellare la R uscendo dal raggio.** La **R** è un channel ancorato al tuo champion. Se esci dal raggio del teamfight, i tick smettono di colpire i nemici. Stai al centro del fight, non sul bordo — Zhonya's serve esattamente per questo.
- **Dimenticare la passive on-hit della W.** Ogni 5 auto fa danno magico bonus più 1 Mark gratis. In un trade 1v1, intervalla 2 auto fra **Q** ed **E** per baitare il nemico in uno stun che non si aspettava.

## Suggerimento avanzato

Il flank più forte di Kennen è quello che i pro chiamano "blind ult": dalla fog of war (zona non vista), Flashi direttamente dentro il cluster nemico più grosso e lanci la **R** prima che vedano il tuo modello. La loro reaction window è il cue audio della **R** più il render del personaggio — circa 0.4 secondi — più corto del tempo necessario per uscire dal channel range. Per impostarlo, la tua squadra deve essere già in fight (o fingerlo), così i nemici guardano avanti e tu giri intorno passando per la jungla unwarded. Allenati sui drake al minuto 14-16: attraversa il river, nasconditi nel raptor camp avversario, aspetta che la tua front line engagi, poi Flash + R nel back line. Una sola esecuzione pulita vince un obiettivo 4v5 in inferiorità numerica.
