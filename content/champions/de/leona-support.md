---
title: "Leona Support Build & Guide — Patch 16.9"
slug: "leona-support"
language: "de"
patch: "16.9"
champion: "leona"
role: "support"
last_updated: "2026-04-29"
description: "Leona Support Guide für League of Legends Patch 16.9: Starter-Kit, Tank-Engage-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Leona"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Vanguard"
  abilities:
    - key: "P"
      name: "Sunlight"
      description: "Leonas Zauber markieren getroffene Gegner für 1,5 s mit dem Sunlight-Debuff. Der nächste Verbündete, der diesem Ziel Schaden zufügt, verbraucht die Markierung für magischen Bonusschaden. Gratis-Damage auf jedem Engage."
      dd_spell_id: "Leona_Passive"
    - key: "Q"
      name: "Shield of Daybreak"
      description: "Leonas nächster Auto-Attack betäubt das Ziel kurz und verursacht magischen Bonusschaden. Auto-targeted (kein Zielen nötig) aber Melee-Range — du musst direkt am Gegner stehen. Der zweite zuverlässige Crowd Control nach E oder R."
      dd_spell_id: "LeonaShieldOfDaybreak"
    - key: "W"
      name: "Eclipse"
      description: "Leona bekommt Damage Reduction plus Bonus-Rüstung und Magieresistenz für ein paar Sekunden. Endet sie, kommt AOE-Schaden (Flächenschaden, trifft alle nahen Gegner); bei Treffer halten die Resistenzen länger. Vor dem Engage zünden."
      dd_spell_id: "LeonaSolarBarrier"
    - key: "E"
      name: "Zenith Blade"
      description: "Leona projiziert ein Schwertbild in einer Linie: der zuletzt getroffene Champion wird kurz gerootet (festgesetzt) und Leona dasht zu ihm. Skillshot (gezielte Fähigkeit, fliegt linear, dodgebar). Hauptengage, Auftakt der E-zu-Q-Kette."
      dd_spell_id: "LeonaZenithBlade"
    - key: "R"
      name: "Solar Flare"
      description: "Verzögerte AOE mit langer Reichweite: Gegner im Zentrum werden gestunnt, am Rand verlangsamt. Lange Cast-Verzögerung — öffnet Fights aus der Distanz, lockt fliehende Ziele oder setzt Teamfights jenseits der E-Reichweite auf."
      dd_spell_id: "LeonaSolarFlare"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "W" }
    - { level: 9, key: "E" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3109", name: "Knight's Vow" }
    - { dd_id: "3877", name: "Bloodsong" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "swap von Mercury's vs auto-attack-lastige Bot Lanes (Caitlyn, Draven, Tristana), wenn der Harass mehr weh tut als CC"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "vs Comps mit Melee-Carry (Yasuo, Yone, Master Yi), auf den du zuverlässig ultst — die R gibt seinen Attacks magischen Bonusschaden"
    - dd_id: "3211"
      name: "Kaenic Rookern"
      against: "vs AP-Burst-Comps (Doppelmage wie Syndra mid + Brand Support) — passiver Magieschild, der außerhalb des Kampfs regeneriert"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Lande E aus dem Fog (unwarded Brush), dashe auf den gegnerischen ADC, ketten Q-Stun und AA mit Sunlight-Markierung. Dein ADC verdoppelt Damage auf dem Proc und der Carry stirbt, bevor sein Support reagiert."
  weakness: "E ist ein langsamer Skillshot, leicht zu dodgen oder sidesteppen auf flachem Boden. Null Range-Poke — bleibt die Bot Lane außerhalb der E-Reichweite, gibst du die Lane auf und musst roamen. Mana-hungrig im Early."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8306, name: "Hextech Flashtraption", icon_path: "perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["soraka", "sona", "yuumi", "janna"]
      archetype: "Squishy Enchanter ohne eigenen Hard CC"
      reason: "Sie haben keine Tools, um deinen E-Dash zu unterbrechen. Sobald E auf dem ADC landet, stirbt er im Q-Stun, bevor der Enchanter shielden oder peelen kann. Yuumi schafft es nicht mal, sich rechtzeitig abzukoppeln."
    - examples: ["caitlyn", "jhin", "senna"]
      archetype: "Immobile ADCs ohne Dash"
      reason: "E hat 875 Range und dasht auf den zuletzt getroffenen Champion: ADCs ohne Blink fressen die volle E-zu-Q-Kette, sobald sie zum Last-Hitten vortreten. Sie können dem Engage nicht entkommen, sobald du committest."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "Stationäre Mage-Supports ohne Escape"
      reason: "Ihr Poke kostet sie Positioning: ein Flash plus E hookt sie, und Ws Resistenzen fressen ihren Counter-Burst. Sie müssen stillstehen, um lange Skillshots zu casten — genau dann landet E sauber."
  counterpicks:
    - examples: ["morgana", "milio", "lulu"]
      archetype: "Hard-CC-Blocker und Disengage-Enchanter"
      reason: "Morganas Black Shield blockt den E-Root komplett — du flashst rein für nichts. Milios R cleansed deine Stun-Kette aus großer Distanz. Lulus Polymorph cancelt deinen Dash mitten im Cast. Dein einziger committed Engage wird gratis gekontert."
    - examples: ["nami", "lux", "zyra"]
      archetype: "Long-Range-Poker mit Sustain oder Roots"
      reason: "Sie chippen dein HP gratis auf 800-plus Range, während du keine Antwort hast. Lux Q bindet dich mitten im Engage und Namis Bubble unterbricht deinen Dash; du frisst Poke, ohne je in Range zu kommen."
    - examples: ["thresh", "blitzcrank", "pyke"]
      archetype: "Hook-Supports, die dich aus der Position ziehen"
      reason: "Ihr Hook landet vor deiner E (Thresh Q ~1100 vs E 875). Du frisst den Pull, wirst alleine in ihrem Team fokussiert, und dein ADC bleibt ungeschützt ohne Engage-Tool zum Folgen."
---

## Überblick

Leona ist ein **Vanguard Support** (ein Support der Tank-Klasse, dessen Aufgabe es ist, Fights zu öffnen, nicht Verbündete zu heilen) — sie rennt auf den gegnerischen Carry zu, kettet ihn in Crowd Control und lässt ihre Teamkameraden den Kill machen. Ihr Kit stapelt zwei Crowd Controls auf ein Ziel: **Zenith Blade (E)** ist ein langer Skillshot-Dash, der den zuletzt getroffenen Champion rootet, **Shield of Daybreak (Q)** ist ein Auto-Attack-Stun, und ihre Passive **Sunlight** markiert jedes Ziel, das sie verletzt, sodass der nächste Verbündete, der trifft, magischen Bonusschaden verursacht. **Eclipse (W)** ist die Defensiv-Schicht, die sie *vor* dem Engage zündet: Damage Reduction plus Rüstung und Magieresistenz, die länger halten, wenn sie bei Ablauf einen Gegner trifft. **Solar Flare (R)** ist ein verzögerter AOE-Stun, der aus größerer Reichweite als E nutzbar ist — zum Engagen aus dem Fog of War oder zum Locken eines fliehenden Kills.

Game Plan: in der Lane am Brush-Rand sitzen, bis der gegnerische ADC zum Last-Hitten vortritt, dann E aus dem Fog (unwardeter Brush) casten, damit er nicht sidesteppen kann, Q ketten und den ADC konvertieren lassen. Im Mid-Game **roamen** (Bot Lane verlassen, um Mid oder Jungle zu helfen) mit R für Cross-Lane-Picks. Im Late-Game den Fight auf das Priority-Target öffnen — meist gegnerischer ADC oder Mid-Mage — und lange genug am Leben bleiben, um zu **peelen** (deinen eigenen Carry beschützen).

## Empfohlener Build

**Starter-Items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (der vereinheitlichte Support-Starter) plus 2 Health Potions. Last-Hitte keine Minions: lass das Gold dem ADC. World Atlas zahlt dir das Gold separat über seine Quest Progression.

**Core-Items (in Reihenfolge):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — Starter. Entwickelt sich automatisch durch Quest-Progress über ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** und ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds** bis zum Endgame-Upgrade deiner Wahl.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — Magieresistenz plus **Tenacity** (Stat, der die Dauer von Crowd Control auf dir verkürzt). Ein kürzerer Stun bedeutet, dass du dein Q noch landest, nachdem der gegnerische Support versucht zu unterbrechen.
3. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — Rüstung, Magieresistenz und ein Aktiv, das alle nahen Verbündeten shieldet. Zünd es in dem Moment, in dem du E machst, damit dein Team den ersten **Burst** absorbiert (hoher Schaden in den ersten 1-2 Sekunden).
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — bindet dich an deinen **ADC** (Attack Damage Carry — der Auto-Attack-Bot-Lane-Teamkamerad): ein Teil des Schadens, den er bekommt, wird auf dich umgeleitet, und du heilst ihn dafür.
5. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — das engage-fokussierte Endgame-Upgrade deines Support-Items. Trägt eine **Spellblade**-Passive: nach jedem Cast macht dein nächster Auto-Attack Bonusschaden, und das Ziel nimmt 4 Sekunden lang verstärkten Schaden. Pattern: "Fähigkeit → AA → Fähigkeit → AA".

**Situational Items:**

- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — Rüstungsboots, die Auto-Attack-Schaden reduzieren. Swap von Mercury's, wenn die gegnerische Bot Lane auto-attack-lastig ist (Caitlyn, Draven, Tristana) und ihr **Harass** (Poke und Chip-Schaden) mehr weh tut als später CC.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — bindet dich an einen Verbündeten; wenn du ultst, bekommt dieser Verbündete magischen Bonusschaden auf seine Attacks. Pick gegen Comps mit Melee-Carry (Yasuo, Yone, Master Yi), auf den du zuverlässig ultst.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3211.png) **Kaenic Rookern** — passiver Magieschild, der außerhalb des Kampfs regeneriert. Pick vs AP-Burst-Comps (Doppelmage wie Syndra + Brand) — der Schild frisst eine ganze Ult.

**Boots:** Standardmäßig ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** wegen der Tenacity — ein 1,25s Thresh-Hook wird zu 0,85s, genug, um Q noch zu casten. Wechsle nur gegen AA-lastige Bot Lanes auf ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**.

**Skill Order:** Maxe **E** (Zenith Blade) zuerst — niedrigerer Cooldown bedeutet mehr Engage-Fenster, und E ist dein einziges Range-Tool. Maxe **W** als Zweites für längere Damage Reduction. Maxe **Q** als Letztes (Rank-Up ändert kaum den Stun, hauptsächlich Schaden). Nimm **R** auf Level 6, 11, 16.

**Runes:** Primary **Resolve** (der Defensive-Rune-Tree — Durability) mit **Aftershock** (gratis Rüstung und Magieresistenz, wenn du jemanden CCst, triggert auf jedem Q-Stun und E-Root), **Font of Life** (dein CC markiert das Ziel; Verbündete, die es angreifen, heilen), **Conditioning** vs late-skalierende Lanes oder **Bone Plating** vs Early-Burst, **Unflinching** (extra **Tenacity**, wenn du einen Summoner Spell benutzt). Secondary **Inspiration** mit **Hextech Flashtraption** (Backup-Flash auf langem Cooldown) und **Cosmic Insight** (kürzere Cooldowns auf Summoners und Item-Aktiven). **Stat Shards**: Adaptive Force / Adaptive Force / Health.

## Wichtige Matchups

- **Nautilus:** Mirror-**Engage**-Matchup. Sein Q-Hook outranged deine E (~1100 vs 875), also lauf nicht vor, solange sein Hook up ist. Dodge ihn, dann flash-E auf seinen ADC, während er kein Follow-up hat.
- **Pyke:** Skill-Matchup. Er outpoked dich mit Q und outroamt dich mit **Stealth** (unsichtbar beim Brush-Durchqueren). Halt Vision tief im River und erzwinge Fights in der Lane, wo seine R nicht auf dem Kill resettet.
- **Morgana:** Hard Counter gegen deinen **All-In** (vollen Kill-Commit). Black Shield blockt deinen E-Root komplett — du flashst rein für nichts. Tracke ihren 18-Sekunden-Cooldown und erzwinge Fights nur im Fenster, in dem er down ist.
- **Soraka:** Reine **Sustain-Enchanter** (Heal-fokussierter Support, der gewinnt, indem er den ADC am Leben hält, nicht durch Fight-Open). Flash-E auf sie, wann immer ihr Flash down ist — sie stirbt in deiner Combo, bevor ihr ADC reagiert.
- **Caitlyn:** Long-Range-**Poke**-Matchup (Chip-Schaden auf Distanz). Sie bullyt dein HP unter Tower. Schlag nicht zurück, akzeptier die schlechte Lane, roame mid oder invade mit Mobility Boots — Leona verliert die Lane, gewinnt aber das Macro-Game.

## Power Spikes & Siegbedingungen

- **Level 2 (E + W):** Erster Spike. Die volle E-zu-Q-Kette schaltet auf Level 3 frei, aber mit E plus W kannst du schon hart **traden** (ein kurzer Schadensaustausch, kein voller Kill-Commit). Ein over-extendender gegnerischer ADC (über die erste **Welle** hinaus — die Reihe der ankommenden Minions) ist ein freier Kill, wenn du E mit **Flash** up landest.
- **Level 6 (R schaltet frei):** Engage-Potenzial explodiert. **Solar Flare** lässt dich Fights aus dem Fog of War öffnen: cast es aus dem River-Brush, ohne dich zu zeigen. R funktioniert auch als **Peel** (Carry beschützen) — drop es auf jemanden, der deinen ADC divet.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari Completion (~ Minute 14-16):** Erstes Teamfight-Item. Dein Engage droppt einen freien Team-Shield. Gruppiert für **Drake** (Drachen-Objective im unteren River — Kills geben permanente Stat-Buffs) oder **Voidgrubs** (kleine Monster im oberen River — das Team, das sie tötet, bekommt Bonusschaden auf Strukturen).
- **![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) Bloodsong Endgame (~ Minute 24-30):** Spellblade-Proc plus 4-Sekunden-Damage-Amp auf Champions verwandeln deine Rotation in echten Schaden. E → AA → Q → AA reißt persönlich 20-25% HP von einem **Squishy** runter (Champion mit niedriger Defense, wie ADC oder Mage).

## Häufige Fehler

- **E vom offenen Boden.** Zenith Blade ist ein langsames Projektil, leicht zu sidesteppen auf flacher Lane. Cast E aus einem Brush oder von einem unwardeten Winkel — das Projektil überquert die halbe Sekunde Vision, die der Gegner zum Reagieren braucht. Auf offenem Boden cast E nur, wenn das Ziel bereits aus anderer Quelle CC hat.
- **Engage ohne Follow-up.** Leonas E commitet dich nach vorne, und du kannst nicht zurück. Wenn dein ADC in der Base oder dein Jungler auf der anderen Map-Seite ist, halte E. Ein Solo-Engage in 4v5 feedet dich nur und brennt deinen R-Cooldown für nichts.
- **W nach dem Engage statt davor casten.** Eclipse gibt Damage Reduction in dem *Moment*, in dem du sie castet, nicht wenn die Explosion zündet. Pop W zuerst, *dann* E. Wenn du E machst und erst dann merkst, dass du die Resistenzen brauchst, läuft der W-Bonus oft ab, bevor du das Ziel erreichst.
- **R reaktiv aus kurzer Range.** Solar Flare hat lange Cast-Verzögerung und Travel-Time — auf Melee-Range rutscht selbst ein stillstehendes Ziel aus der zentralen Stun-Zone. Heb R auf zum Fight-Öffnen aus dem Fog of War oder Finishen eines Low-HP-Runners.
- **Sunlight-Passive vergessen.** Jeder Zauber, den du landest, markiert das Ziel für 1,5 Sekunden; der erste Verbündete, der trifft, verbraucht sie für Bonusschaden. Time dein Q so, dass dein ADC schon in Auto-Attack-Range ist — die Kette sollte klingen wie "Q-Stun, ADC-AA, Sunlight zündet, Ziel tot".

## Fortgeschrittener Tipp

Die **Fog-of-War-R-Flash-E-Combo**. Sitz unsichtbar im gegnerseitigen River-Brush auf Level 6. Cast **R** auf den gegnerischen ADC, während er farmt — er sieht den Indikator am Boden, aber nicht die Quelle. In dem Moment, in dem er sich zum Dodgen bewegt, **Flash** nach vorne, **E** während des Flash (der Dash erweitert sich aus deiner geflashten Position), und **Q** beim Ankommen. Richtig gemacht, frisst das Ziel R-Stun, E-Root und Q-Stun — drei Crowd Controls in zwei Sekunden ohne Counter-Play. Übe das Timing im **Practice Tool**, bis R-Flash-E-Q eine flüssige Sequenz in einer halben Sekunde ist.
