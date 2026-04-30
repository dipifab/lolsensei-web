---
title: "Garen Top Build & Guida — Patch 16.9"
slug: "garen-top"
language: "it"
patch: "16.9"
champion: "garen"
role: "top"
last_updated: "2026-04-29"
description: "Guida Garen top per League of Legends Patch 16.9: starter kit, build juggernaut bruiser, matchup chiave, power spike, errori comuni e una chiusura tecnica."
quick_learn:
  champion_dd_id: "Garen"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Juggernaut / Bruiser"
  abilities:
    - key: "P"
      name: "Perseverance"
      description: "Rigenera HP fuori combattimento se non subisci danno o ability per qualche secondo. Definisce il pattern hit-and-retreat."
      dd_spell_id: "Garen_Passive"
    - key: "Q"
      name: "Decisive Strike"
      description: "Burst di movement speed e cleanse degli slow. Prossima auto silenzia il target per 1.5s e infligge danno bonus."
      dd_spell_id: "GarenQ"
    - key: "W"
      name: "Courage"
      description: "Passiva: stack di armor/MR uccidendo nemici. Active: shield + tenacity, poi finestra di mitigazione residuale."
      dd_spell_id: "GarenW"
    - key: "E"
      name: "Judgment"
      description: "Spin AOE che infligge physical damage ai nemici vicini per 3s. Strumento principale di waveclear e DPS sostenuto."
      dd_spell_id: "GarenE"
    - key: "R"
      name: "Demacian Justice"
      description: "Esegue un campione nemico in base agli HP mancanti. True damage bonus contro il nemico più kill-fed."
      dd_spell_id: "GarenR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3742", name: "Dead Man's Plate" }
    - { dd_id: "3053", name: "Sterak's Gage" }
  situational_items:
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contro top AP (Mordekaiser, Rumble, Vladimir) — la passiva di scudo magico salva i trade prolungati"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "contro composizioni a doppio AD; gestisce il bleed e punisce i glass cannon nei teamfight"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "contro 3+ minacce AP; la passiva di movement speed aiuta a posizionarsi nei fight"
    - dd_id: "3161"
      name: "Spear of Shojin"
      against: "terzo item offensivo se sei pesantemente avanti e vuoi il ciclo di ability haste sulla Q"
  base_combo: ["W", "Q", "AA", "E", "R"]
  win_condition: "Sopravvivi alla lane phase con Doran's Shield + passive sustain, scala fino a Stridebreaker, poi flank in side lane e usa R per eseguire le carry kill-fed nemiche nei teamfight."
  weakness: "Niente dash o blink, niente CC duro a distanza. Vulnerabile a kite (Quinn, Vayne) e root long-range (Lissandra, pull di Mordekaiser). Cade in lane se overextendi senza stack di W."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8242, name: "Unflinching", icon_path: "perk-images/Styles/Sorcery/Unflinching/Unflinching.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
---

## Panoramica

Garen è un juggernaut melee il cui valore deriva dalla presenza prolungata: la passiva **Perseverance** rigenera vita fuori combattimento, **Decisive Strike (Q)** chiude le distanze e fa cleanse degli slow, **Courage (W)** offre una finestra piatta di tankiness più una passiva di stack di resistenze, **Judgment (E)** è il danno AOE e waveclear, e **Demacian Justice (R)** esegue gli squishy in base all'HP mancante con scaling true damage contro il nemico più kill-fed. È uno dei campioni più semplici da eseguire meccanicamente, il che significa che lo skill ceiling sta tutto in **map awareness** e **wave management** — non nell'esecuzione del combo.

In top vuole trade brevi durante l'active di **W** e wave piene dalla sua parte della lane. È forte dal livello 1 ma non immortale; non ha dash e non ha CC duro, quindi qualunque matchup che può disengage a piacere (Quinn, Vayne) o radicarlo da lontano (Lissandra, pull di Mordekaiser) supererà la sua lane phase se overextendi.

## Build Consigliata

**Item iniziali:** Doran's Shield + 1 Health Potion. Doran's Blade solo contro top ranged dove devi all-in prima per negare i CS.

**Item core (nell'ordine):**

1. **Stridebreaker** — slow su **Q**, active AOE per restare incollato a target che kitano, AD + HP utili entrambi.
2. **Plated Steelcaps** — la maggior parte delle top lane è ad auto-attack pesanti. Mercury's Treads solo contro 3+ campioni con CC.
3. **Dead Man's Plate** — sinergia con il bonus di velocità di **Q**, la passiva d'impatto procca nel pattern di all-in classico.
4. **Sterak's Gage** — salvavita contro burst, lo scaling AD permette a **R** di eseguire oltre la soglia base.

**Item situazionali:**

- **Maw of Malmortius** — contro top AP (Mordekaiser, Rumble, Vladimir).
- **Death's Dance** — contro composizioni a doppio AD (gestisce il bleed che punisce i glass cannon).
- **Force of Nature** — contro 3+ minacce AP; la passiva di movement speed aiuta a posizionarsi nei fight.
- **Spear of Shojin** — terzo item offensivo top-tier se sei pesantemente avanti e vuoi il ciclo di ability haste.

**Stivali:** Plated Steelcaps di default. Mercury's Treads contro Renekton+Lissandra+CC pesante.

**Skill order:** Massimizza **E** per primo (DPS e waveclear), **Q** per secondo (slow + utility), **W** per ultimo (la passiva scala anche senza punti). **R** ai livelli 6, 11, 16.

**Rune:** Albero primario **Precision** con **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Secondario **Resolve** con **Second Wind** + **Unflinching**, oppure **Inspiration** con **Magical Footwear** + **Cosmic Insight** per il timing degli stivali nelle mappe a rotation.

## Matchup chiave

- **Darius:** Perdi al livello 1, vinci dopo Stridebreaker se eviti il pull di **E**. Compra Doran's Shield, gioca attorno al livello di **Q** per il cleanse.
- **Fiora:** Counter forte fino al 6 se non ti vital'a. Trade con **W** attiva per negare il valore della parry, poi disengage.
- **Quinn:** Skill matchup; lei kite con **Q** blind + **E** vault. Prendi Teleport, lascia perdere i CS della prima wave e fai roam mid da wave 4 in poi.
- **Vayne top:** Il matchup peggiore da giocare. Plated Steelcaps al livello 1, Doran's Shield + Second Wind, e gioca per il jungler — non puoi vincere trade 1v1 dopo il 6.
- **Mordekaiser:** Lane lenta verso lo spike del death realm. Trade brevi, tira **Q** + **E** quando la sua **W** è in cooldown, e arriva a Maw of Malmortius prima del suo secondo item.

## Power spike & condizioni di vittoria

- **Livello 2:** **Q** + **E** sblocca un vero all-in. Se ti pushano la wave e il tuo jungler è in top side, questa è la tua kill window.
- **Livello 6:** **Demacian Justice** ti permette di finire i target low HP che prima si allontanavano. Tieni traccia delle Summoner Spells nemiche; senza Flash, ogni top melee è a portata di esecuzione.
- **Stridebreaker timing (~ 11 minuti):** Il controllo della wave passa a tuo favore. Slow shove, freeze, o split push a seconda dello stato della mappa. **Q** + active è assicurazione gap-close contro i gank.
- **Condizione di ace late game:** Con lo scaling di **R** sul nemico più kill-fed e Sterak's Gage, diventi una minaccia di flank che solo-killa le carry. Il tuo lavoro è caricare **E** in fog e **R** prima che le peelino.

## Errori comuni

- **Camminare in avanti con pochi stack di W.** La passiva di **Courage** dà resistenze per stack; se hai 0 stack (e.g. appena respawnato), evita trade prolungati finché non ricarichi sui minion.
- **Usare R come apertura.** **R** è per l'execute, non per il setup. Se apri con essa, il cast time avvisa il nemico di disengage, e perdi il timer kill.
- **E su una wave ferma.** Spinnare con 3 minion quando li droppi in 2 auto brucia mana e segnala la rotation di cooldown alla lane. Salva **E** per i trade.
- **Dimenticare il silenzio di Q.** **Q** silenzia per 1.5 secondi. Q-engage sempre su un campione mid-cast (polymorph di Lulu, scudo di Karma, R di Lissandra) — il silenzio interrompe il cast.

## Suggerimento avanzato

Quando una carry nemica fed innesca la priorità target di **R**, puoi flash-**R** in mezzo al teamfight anche se il loro support droppa uno scudo: il danno di execute di **R** è true damage sul target prioritario, e la maggior parte del budget di scudi è già esausto dal burst del team prima che il tuo cast risolva. Risparmia Flash per questa giocata; l'ace che genera vale 2 fight di drake.
