---
title: "Diana Jungle Build & Guide — Patch 16.9"
slug: "diana-jungle"
language: "it"
patch: "16.9"
champion: "diana"
role: "jungle"
last_updated: "2026-04-29"
description: "Guida Diana jungle per League of Legends Patch 16.9: clear iniziale, timing Scuttle e Drake, gank, build AP burst, matchup chiave, power spike e errori comuni."
quick_learn:
  champion_dd_id: "Diana"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Moonsilver Blade"
      description: "Ogni terzo basic attack colpisce a cono i nemici vicini per danno magico bonus. Lanciare un'abilità dà attack speed per 5 secondi: motore principale del clear in jungle."
      dd_spell_id: "Diana_Passive"
    - key: "Q"
      name: "Crescent Strike"
      description: "Skillshot ad arco che marca i bersagli con Moonlight per 3 secondi. Il mark sblocca il reset di E ed è il tuo strumento di setup per i gank."
      dd_spell_id: "DianaQ"
    - key: "W"
      name: "Pale Cascade"
      description: "Tre orbi che danno danno magico al contatto e uno scudo. Ottimo per duelli e per fare i camp di jungle senza calare di HP."
      dd_spell_id: "DianaOrbs"
    - key: "E"
      name: "Lunar Rush"
      description: "Dash a target con danno magico. Il cooldown si resetta su un bersaglio marcato da Q: è il motore del tuo gap-close."
      dd_spell_id: "DianaTeleport"
    - key: "R"
      name: "Moonfall"
      description: "Tira a sé e rallenta i nemici vicini, poi esplode su Diana per danno magico ad area. Unico CC del kit (CC = crowd control, abilità che bloccano il movimento o le azioni del nemico): range corto."
      dd_spell_id: "DianaR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "W" }
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
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contro tank engage (Malphite, Sejuani, Leona): la stasi schiva la loro CC chain dopo la tua R"
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "contro comp con due o più frontline ad alto HP (Cho'Gath, Ornn): il burn scala con gli HP"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap appena un priority target compra Magic Resist (Mercury's Treads, Spirit Visage)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contro comp con tanto healing (Soraka, Vladimir, Dr. Mundo, Aatrox)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contro CC magico single-target (charm di Ahri, R di Lissandra, stun di Twisted Fate)"
  base_combo: ["Q", "E", "R", "W", "AA"]
  win_condition: "Lancia Q dal fog, dasha sul target marcato con E, R per separarlo dal team, poi W e basic-attack reset con il follow-up del tuo team. Forza fight a livello 6 sugli obiettivi."
  weakness: "Range effettivo corto (E è solo 825 unità). Champion con disengage forte (R di Janna) o peel ti staccano dal carry; senza Q mark non hai un secondo dash per scappare."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["graves", "kindred", "kha-zix"]
      archetype: "Squishy carry junglers without hard CC"
      reason: "Diana vince i duelli prolungati nella loro jungle: Pale Cascade scherma una rotazione di danno, poi Lunar Rush si resetta sul Q mark per un re-engage che non possono kitare."
    - examples: ["nidalee", "elise", "shaco"]
      archetype: "Early-game gank-focused junglers"
      reason: "La loro power dip arriva a livello 6 mentre la R di Diana sblocca pressione mid-game. Pareggia il loro tempo di first-clear e tradeа obiettivi finché Luden's Echo gira la partita."
    - examples: ["amumu", "rammus", "warwick"]
      archetype: "Slow-clearing low-mobility junglers"
      reason: "Diana clearа più veloce con i passive reset e arriva prima allo Scuttle Crab. Counter-jungla i camp di backup dopo ogni Drake: non rotanо in tempo."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "vi"]
      archetype: "Front-loaded burst junglers with hard CC"
      reason: "Invadono a livello 3 prima che Diana abbia la E e le rompono il clear. La loro CC bypassa lo scudo di Pale Cascade: un 1v1 nella loro jungle pre-6 è una kill gratis per loro."
    - examples: ["jarvan-iv", "sejuani", "rammus"]
      archetype: "Tank junglers with built-in disengage or knock-up"
      reason: "La R di Diana funziona solo a melee range: queste tool di counter-engage la sbalzano fuori dalla pull window prima che Moonfall finisca il channel, sprecando l'unico CC."
    - examples: ["udyr", "olaf"]
      archetype: "Sustained-damage bruisers with cleanse or unstoppable"
      reason: "Camminano dentro Moonfall (R di Olaf cleansa la CC, R di Udyr bypassa la pull) e fanno più DPS di Diana una volta scaduto lo scudo: lei non ha una seconda escape."
---

## Panoramica

Diana è un diver a danno magico: assassina melee con scudo integrato, dash gratuito su bersaglio marcato e uno degli engage a un tasto più forti del gioco (engage = l'azione che apre il fight). In jungle baratta i gank early con un clear veloce e snowballa a livello 6 — snowball è il vantaggio iniziale che cresce nel tempo (kill → gold → item → più kill). Quando **Lunar Rush (E)** può concatenare una kill in un secondo dash, diventa il pick "premi R, cancella il carry" per eccellenza. (Un diver è un melee che salta sulla back line del team avversario.)

Il game plan da jungler è spingere il primo clear con **Pale Cascade (W)** e l'on-hit di **Moonsilver Blade (P)**, prendere lo **Scuttle Crab** (il granchio del fiume che dà visione e un piccolo speed shrine) intorno a 3:30, poi iniziare a ganckare le lane con vision setup. Dopo il livello 6, ogni teamfight vicino a un Drake o al Rift Herald è una win condition: **Moonfall (R)** tira dentro i target prioritari e il tuo team finisce il lavoro.

## Build Consigliata

**Starting items:** ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** + Refillable Potion. Il pet Gustwalker dà movement speed fuori combattimento, perfetto per il mid game gank-heavy di Diana. Salta Mosstomper (pet di sustain): la **W** già scherma un ciclo di clear.

**Core items (in order):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — primo spike di burst (burst = danno alto concentrato in 1-2 secondi), AP e ability haste. I bolt fanno a pezzi i target squishy non appena E su di loro.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat. Boots di default nel 95% delle partite.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra, la passiva HP-threshold (passiva di un item che si attiva quando il nemico è sotto soglia HP, qui 35%) si lega perfettamente al finisher R-into-E.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — moltiplicatore di scaling late-game. Lo slot di item con più AP singolo che hai.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contro tank engage (Malphite, Sejuani, Leona). Apri l'attivo di stasi (diventi invulnerabile ma non puoi muoverti né agire per 2.5 secondi) subito dopo la R: la CC follow-up nemica buca a vuoto.
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — quando la comp avversaria ha due o più frontline ad alto HP (Cho'Gath, Ornn): il burn scala con il loro pool di HP e ticka mentre repositioni.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — appena un priority target compra Magic Resist (Mercury's Treads, Spirit Visage).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contro comp con tanto healing (Soraka, Vladimir, Dr. Mundo, Aatrox).
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contro CC magico single-target (stun, root, charm) come il charm di Ahri o la R di Lissandra.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** è il default. Passa a ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** contro comp AD-pesanti con due AD threat, o Mercury's Treads contro CC magico abbondante.

**Skill order:** Maxa **Q** per primo (waveclear, danno extra, finestra del Moonlight più lunga). Maxa **W** per secondo (valore scudo e clear speed). **E** per ultima: scala in range ma quello che conta è il reset del cooldown su Moonlight, non lo scaling grezzo. Prendi **R** ai livelli 6, 11, 16.

**Runes:** Primario **Domination** con **Electrocute**, **Sudden Impact**, **Sixth Sense**, **Ultimate Hunter**. Secondario **Sorcery** con **Manaflow Band** e **Transcendence**. Stat shards: Adaptive Force / Adaptive Force / Magic Resist (oppure Health contro tanto poke).

## Matchup chiave

- **Lee Sin:** Evita le invade a livello 2: il suo follow-up Q-Q batte il tuo W shield. Warda il blue buff top-side e clearа bot-to-top così lo incontri allo Scuttle con i passive proc pronti.
- **Graves:** Lo out-dueli dopo il livello 6. Engageа dal fog (la parte non wardata della jungle, fog of war) con **Q** così il range del suo dash non può schivare il mark; una volta che il Moonlight è su di lui, **E** è gap-close garantito (gap-close = abilità che chiude la distanza con il nemico).
- **Elise:** Gara di power spike. Lei vince i gank a livello 3, tu il fight a livello 6. Pareggiа il suo tempo di first-clear, hoverа il Drake con visione così non può soloarlo.
- **Jarvan IV:** Matchup duro. Il suo knock-up E-Q cancella il channel della tua **R**. Aspetta che committi prima la sua combo, poi E su di lui per il trade. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** prima del solito.
- **Kha'Zix:** Matchup pari che gira a tuo favore al secondo item. Ti brusta in melee range; bait il jump da isolato a HP basso, **W**-scherma la sua Q, poi E-R reset. Non passare mai dalla tua jungle senza ward control o ti becchi un isolated jump gratis.

## Power spike & condizioni di vittoria

- **Livello 3 (Q + W + E):** Kit completo. Il primo clear finisce intorno a 3:15: rusha lo Scuttle Crab prima del jungler avversario. La visione del fiume più lo shrine da 50 HP imposta il resto della tua mappa.
- **Livello 6 (prima Moonfall):** Skirmish del fiume (skirmish = piccolo scontro 2v2 o 3v3, non un teamfight pieno). Q da una brush, E sul target marcato, R per tirare insieme i loro due carry: i tuoi laner brustano il resto. L'effetto pull a livello 6 più forte del pool jungler.
- **![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Echo completion (~ minuto 9-11):** Spike di burst. Una combo Q-E pulita su un target squishy (champion con poche difese, tipo gli ADC e la maggior parte dei mage) cancella il 60-70% degli HP prima che il loro team reagisca. Forza fight sul secondo Drake.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 22-25):** Soglia di one-shot contro qualsiasi squishy senza item di Magic Resist. Cerca pickoff (eliminare un nemico isolato fuori dal teamfight) sul setup di vision per Baron o Elder Dragon.

## Errori comuni

- **Camminare dentro le ward all'approccio del gank.** L'unico stealth tool di Diana è il fog. Passa dal fiume o di ritorno dalla tua jungle, e fai pulire la ward della bush dal tuo laner prima di committare.
- **Lanciare R sulla front line.** La R tira dentro tutti in raggio 475: trascinare il tank verso il tuo team è esattamente quello che volevano. Aspetta che l'engage si sviluppi, poi R sulla back line (back line = i carry che fanno danno da posizione sicura).
- **Usare E in cooldown senza Q mark.** Senza Moonlight, **E** ha 14 secondi di cooldown e range corto. Sempre Q prima: il reset sul target marcato è quello che fa sentire Diana mobile.
- **Fare il greed del terzo camp al primo clear.** Se il jungler avversario è più veloce (Graves, Shyvana, Karthus), perdi la gara di invade a livello 3. Cross-mappa i loro laner: se mid è missing, il full-clear è una trappola.
- **Over-committare un gank senza via d'uscita.** Diana non ha escape integrata dopo la E. Se la lane non ha slow o follow-up CC, l'engage diventa 1v3 appena tornano i loro summoner.

## Suggerimento avanzato

Allena la combo **Q-Flash-E-R** come engage di teamfight. Con la tua Q in volo, Flasha in avanti al momento dell'impact: il target marcato ti compare di fianco, **E** chaina subito sul reset Moonlight, e la **R** prende tutta la loro back line ammassata sul carry. La combo vince fight che non avresti diritto di vincere — ma serve la muscle memory per Flashare a metà animazione di Q, non dopo che il proiettile è atterrato. Allenala in practice tool su un dummy fermo finché l'ordine degli input diventa automatico.
