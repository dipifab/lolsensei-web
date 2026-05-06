---
title: "Elise Support Build & Guide — Patch 16.9"
slug: "elise-support"
language: "de"
patch: "16.9"
champion: "elise"
role: "support"
last_updated: "2026-05-02"
description: "Elise Support Guide für League of Legends Patch 16.9: Cocoon-Engage-Winkel, Build-Path über Bloodsong, wichtige Matchups, Power Spikes und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Elise"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Burst Mage / Engage"
  abilities:
    - key: "P"
      name: "Spider Queen"
      description: "Zwei Formen. Human: jeder Ability-Treffer speichert einen schlafenden Spiderling. Spider: AAs verursachen bonus magic damage und heilen Elise."
      dd_spell_id: "Elise_Passive"
    - key: "Q"
      name: "Neurotoxin / Venomous Bite"
      description: "Human: gezielter Poke, der mit aktuellem HP des Gegners skaliert (Anti-Tank). Spider: Sprung, der mit fehlendem HP skaliert (executet Low-HP-Ziele)."
      dd_spell_id: "EliseHumanQ"
    - key: "W"
      name: "Volatile Spiderling / Skittering Frenzy"
      description: "Human: wirft einen Spiderling, der vorwärts läuft und in Gegnernähe explodiert (Slow + AOE-Schaden). Spider: Elise und ihre Pets gewinnen Attack Speed für anhaltendes DPS."
      dd_spell_id: "EliseHumanW"
    - key: "E"
      name: "Cocoon / Rappel"
      description: "Human: linearer Skillshot, der den ersten getroffenen Gegner stunnt. Dein Engage-Tool. Spider: Rappel — kurzer untargetbarer Lift, dann Drop auf ein Ziel mit bonus damage."
      dd_spell_id: "EliseHumanE"
    - key: "R"
      name: "Spider Form"
      description: "Toggle-Ultimate zwischen Human (Ranged Caster) und Spider (Melee-Skirmisher mit Movement Speed und Spiderling-Schwarm). Free Swap ohne Cooldown."
      dd_spell_id: "EliseR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "E" }
    - { level: 9, key: "Q" }
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
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
  situational_items:
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "gegen Single-Target Magic CC (Ahri Charm, Lissandra R) — Spell Shield blockt einen Engage und du kannst neu cocoonen"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "gegen schweres Hard CC (Stuns, Knock-ups) — Boots-Swap mit Tenacity (verkürzt CC-Dauer)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "gegen Comps mit AOE-Burst (Yasuo + Malphite, Orianna Wombo) — Active shielded das ganze Team"
    - dd_id: "3041"
      name: "Mejai's Soulstealer"
      against: "kaufen bei 10+ Kills/Assists Vorsprung ohne Tode — verwandelt den Snowball in pure AP-Skalierung"
  base_combo: ["E", "W", "Q", "R", "Q"]
  win_condition: "Engage mit E-Cocoon aus dem Fog of War, um den All-in deines ADC zu öffnen. Bleib im Late relevant, indem du den gegnerischen Carry im Aftershock- und Liandry's-Torment-Burst-Fenster stunnst."
  weakness: "Alles hängt am Cocoon-Treffer: ein verfehlter Skillshot lässt dich in Melee-Range ohne Escape. Outranged von Hook-Supports, die dich grabben, bevor du castest."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primär: Aftershock triggert auf den Cocoon-Stun mit Armor + MR plus eine verzögerte AOE-Welle — dein Überlebensfenster nach dem Melee-Engage. Font of Life heilt deinen ADC bei jedem Cocoon, Bone Plating polstert frühe All-ins ab, Revitalize verstärkt Heal/Shield."
    secondary_rationale: "Sorcery sekundär: Manaflow Band hält das Mana in der frühen Laning-Phase stabil (Cocoon kostet 50-90 Mana pro Cast), Transcendence drückt Ability Haste über 40%, damit Cocoon in langen Fights schneller zurückkommt."
    secondary_alternative: "Gegen Poke- oder All-in-Lanes (Lucian + Nami, Draven + Thresh), swap Sorcery zu Inspiration mit Magical Footwear (8304, freie Boots ab Min 10) und Cosmic Insight (8347, CD-Reduktion auf Summoner Spells); die extra Flash-Uptime rettet vor verfehlten Engages."
matchup_draft:
  pick_into:
    - examples: ["soraka", "lulu", "karma"]
      archetype: "Squishy Enchanter-Supports ohne Tenacity"
      reason: "Der lange Cocoon-Stun ignoriert ihr Utility-Kit. Sie haben keinen Flash-ähnlichen Escape, und Liandry's Torment Burn (Schaden über mehrere Sekunden) bestraft ihre Shields und Heals."
    - examples: ["senna", "caitlyn", "ashe"]
      archetype: "Immobile Ranged Carries ohne Dash"
      reason: "Cocoon aus einem Bush erwischt sie mit beiden Beinen am Boden. Einmal gestunnt killt Level-3 W (Slow) + Q (Anti-HP) + ADC-Burst, bevor Flash reagieren kann."
    - examples: ["draven", "samira"]
      archetype: "Aggressive Carries, die für Kills nach vorn treten"
      reason: "Ihr Kill-Druck zwingt sie über das Wave-Equilibrium (die Safe Lane Line). Cocoon bestraft den Schritt nach vorn, Aftershock dreht ihren All-in (Full Commit Trade) zu deinen Gunsten."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "Hook-Supports, die Cocoon outrangen"
      reason: "Blitzcranks Hook-Range (~1100) übersteigt die E-Cast-Range (1075). Sie engagen zuerst auf dich, nehmen dir das Engage-Tool und lassen dich melee in Spider Form ohne Escape."
    - examples: ["sivir", "morgana"]
      archetype: "Spell Shields, die Cocoon blocken"
      reason: "Eine einzige Spell-Shield-Charge frisst deinen Stun komplett. Ohne Cocoon kein Setup, und das Team-Follow-up stallt bis zum Cooldown-Reset."
    - examples: ["leona", "nautilus", "rell"]
      archetype: "Tanky Engage-Supports mit Point-and-Click-CC"
      reason: "Ihr Engage ist gezielt (kein Skillshot zum Dodgen). Sie kleben länger an deinem ADC, als du sie halten kannst, und dein Magic Damage killt sie nicht durch ihren Armor."
---

## Überblick

> **Mini-Glossar (einmal lesen):** **ADC** = Attack Damage Carry, der Bot-Laner mit physischem Schaden (Caitlyn, Jinx). **AP** = Ability Power, der Stat, der magische Abilities skaliert. **MR** = Magic Resist, Verteidigung gegen Magie. **CS** = Creep Score, Anzahl getöteter Minions. **CC** = Crowd Control, jeder Effekt, der einen Champion stoppt (Stun, Slow). **Engage** = Fight starten. **Disengage** = Fight abbrechen. **Trade** = kurzer Schadensaustausch. **All-in** = volles Commit. **Peel** = den eigenen Carry beschützen. **Kite** = rückwärts laufen während man angreift.

Elise Support ist ein Engage-Mage-Hybrid: Sie landet **Cocoon (E)** aus einem Bush oder dem Fog of War (der unwarded Teil der Map), um den gegnerischen Carry zu rooten, und commitet dann mit **Spider Form (R)** für Follow-up-Schaden und untargetbares Disengage über **Rappel**. Sie tauscht die Sicherheit eines Enchanters gegen harten Kill-Druck — jeder erfolgreiche Cocoon zwischen Level 3 und 6 sollte einen Kill oder einen verbrannten Flash produzieren. Ihre Schwäche ist die Kehrseite ihrer Stärke: ohne gelandeten Cocoon hat sie keinen Engage und keine Heals als Rückfallnetz.

Der Game Plan ist es, die Bot Lane in den ersten 6 Leveln zu bullyen, Bloodsong und **Sorcerer's Shoes** bis Minute 12-14 zu schließen und dann mit dem Movement-Speed-Boost von **Spider Form** zur Mid Lane zu roamen. Im Late Game wechselt der Job: sie wird zur Flank-Assassin, die wartet, bis der gegnerische Carry aus der Position tritt, Cocoon aus einem Seitenwinkel landet und das Team finishen lässt.

## Empfohlener Build

**Starter-Items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (Support-Quest-Item: gibt dir mit der Zeit Support-Gold, solange du Minions nicht selbst last-hittest) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**.

**Core-Items (in Reihenfolge):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — finales Upgrade der Support-Quest-Linie (World Atlas → Runic Compass → Bounty of Worlds → Bloodsong). Die AP-Variante: jeder vierte AA gegen einen Champion verursacht bonus magic damage. Natürliche Synergie mit den schnellen Autos von Spider Form im Dive.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flache Magic Penetration. Entscheidend, weil du als Support weniger Gold als der Mid Laner hast — Penetration ist im Early effizienter als pures AP.
3. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — erstes großes AP-Item. Der HP-basierte Burn (Schaden, der mit dem Max-HP des Ziels skaliert, über mehrere Sekunden verteilt) bestraft tanky Frontlines, die deinen Cocoon-Stun absorbieren wollen.
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — jede Ability slowt. Macht **W** zum Chase-Tool und stackt mit dem Cocoon-Stun für Follow-up-Verlässlichkeit.
5. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — Survival-Item. Nach dem Engage in Melee-Range gibt dir das Active 2,5 Sekunden Stasis (du kannst dich nicht bewegen, keinen Schaden nehmen, nicht angegriffen werden) — die Zeit, die das Team braucht, um aufzuräumen.

**Situative Items:**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — gegen Single-Target Magic CC (Ahri Charm, Lissandra R).
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — Boots-Swap, wenn das Gegnerteam schweres Hard CC hat.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — gegen Comps mit AOE-Burst (Yasuo + Malphite Combo, Orianna Wombo).
- ![Mejai's Soulstealer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3041.png) **Mejai's Soulstealer** — nur bei 10+ Kills/Assists Vorsprung mit null Toden. Stack-Verlust-Risiko ist real; nicht kaufen, wenn du hinten liegst.

**Boots:** Sorcerer's Shoes ist Standard. Mercury's Treads, wenn das Gegnerteam drei oder mehr Quellen für Hard CC hat (Stuns, Knock-ups).

**Skill-Order:** Maxe **E** zuerst (der Cocoon-Stun ist dein Job), **Q** als zweites (Damage), **W** zuletzt. Punkt in **R** auf Level 6, 11, 16.

**Runen:** Primär **Resolve** mit **Aftershock**, **Font of Life**, **Bone Plating**, **Revitalize**. Sekundär **Sorcery** mit **Manaflow Band** und **Transcendence**.

## Wichtige Matchups

- **Blitzcrank:** Schlechtestes Lane-Matchup. Seine Q outranget deine E um ~25 Einheiten. Steh hinter deinem ADC, tritt nie nach vorn, um Cocoon zu werfen — er hooked dich in dem Moment, wo du commitest.
- **Thresh:** Hook-Duell, das du überleben aber selten gewinnen kannst. Warte, bis er seine Q wirft und verfehlt, dann lauf vor, um Cocoon im Recovery-Window zu landen. Tritt nicht in den Lantern-Bogen, wenn er auf deinen ADC engaged.
- **Soraka:** Kostenlose Lane. Ihr Silence ist kurzreichweitig und ihr Heal wird vom Cocoon unterbrochen. Engage auf Level 3 mit vollem Mana; der Trade verbrennt ihre HP-Bar schneller, als sie sie heilen kann.
- **Leona:** Sie gewinnt den All-in, verliert aber den Poke-Krieg. Steh auf Max-Cocoon-Range, wirf E, um die Animation ihrer **W** (Eclipse) zu unterbrechen, dann geh zurück. Commit nicht ohne ersten Cocoon-Hit.
- **Sivir:** Ihre **E** (Spell Shield) blockt Cocoon komplett. Bait den Shield, indem du zuerst **W** Spiderling wirfst; sobald sie die W shieldet, landet dein Cocoon sauber für die Dauer des Shield-Cooldowns (~12 Sekunden).

## Power Spikes & Siegbedingungen

- **Level 2:** Mit **E** + **Q** hast du ein All-in-Setup. Pushe Level 2 zuerst gegen Melee-Supports und engage auf den ersten gelandeten Cocoon.
- **Level 6:** Erste **Spider Form (R)**. Disengage- und Re-Engage-Potenzial verdoppelt sich; du kannst einen Low-HP-Gegner unter Tower mit Rappel als Re-Positioning-Tool diven.
- ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ Minute 13-15):** Roam-Window. Geh nach Mid für ein 3v2, wenn deine Wave unter den Gegner-Tower gepusht ist. Der Mid-Snipe mit **Cocoon (E)** + **Spider Q** Finish killt fast jeden squishy Mid Laner.
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment online (~ Minute 18-20):** Teamfight-bereit. Dein Job ist jetzt, die Backline durch Seitenbushes zu flanken; Cocoon auf den gegnerischen ADC, **Aftershock** triggert auf den Stun, dein Team räumt auf.

## Häufige Fehler

- **E-Cocoon als Poke werfen.** Gleiche Regel wie Elise Jungle: Cocoon ist Engage, kein Harass. Warte, bis der Carry nach vorn tritt; ein verfehlter Cocoon lässt dich 12 Sekunden lang wehrlos.
- **Auto-Attacks auf Minions in Lane.** Support-Items bestrafen Minion-CS — Last-Hits canceln das World-Atlas-Gold-Income und lassen deinen ADC verhungern. Nutze **W** auf der Wave nur, wenn die nächste Wave zurückkommt.
- **Ohne ADC-Follow-up engagen.** Schau auf Mana-Bar und Cooldowns deines ADC, bevor du den Cocoon-Trigger ziehst. Bei leerem Mana oder ohne **Flash** nicht engagen; bestenfalls trade'st du 1-zu-1.
- **Vergessen, ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) Wards bei jedem Back zu kaufen.** Als Support setzt du die Vision auf der Map. Bush-Wards an der River kontrollieren die Engage-Winkel deines Junglers. Nutze ![Oracle Lens](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3364.png) Oracle Lens, um vor Objectives versteckte Gegner-Wards zu sweepen.
- **Mit R diven, wenn kein Escape verfügbar ist.** Spider Form hat keinen eingebauten Escape. Wenn **Flash** und **Rappel** beide down sind, commit nicht zum Dive unter Tower; der gegnerische ADC kited dich (rückwärts laufen während er angreift), bis der Tower dich killt.

## Fortgeschrittener Tipp

Bau dir Cocoon-Winkel mit Vision, bevor der Fight startet. Eine ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) **Stealth Ward** im Seitenbush gibt dir einen kostenlosen Engage-Winkel: lauf aus dem Fog in den Bush, wirf Cocoon, während der gegnerische ADC nach vorn tritt, um last-zu-hitten, dann **Spider R** + Rappel-Drop. Die ganze Sequenz ist aus gegnerischer Sicht unsichtbar, bis der Cocoon landet. Es ist die Spielzug mit dem höchsten Impact, den Elise Support fahren kann, und die meisten Low-Rank-Elise-Spieler ignorieren ihn, weil sie direkt aus der Lane engagen statt aus vorbereiteten Winkeln.
