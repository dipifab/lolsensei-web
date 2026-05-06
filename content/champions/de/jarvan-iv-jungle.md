---
title: "Jarvan IV Jungle Build & Guide — Patch 16.9"
slug: "jarvan-iv-jungle"
language: "de"
patch: "16.9"
champion: "jarvan-iv"
role: "jungle"
last_updated: "2026-05-05"
description: "Jarvan IV Jungle Guide für League of Legends Patch 16.9: Starter-Kit, Bruiser-Core-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "JarvanIV"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Martial Cadence"
      description: "Der erste Auto-Attack auf ein Ziel verursacht Bonus-Physical-Damage basierend auf dessen aktuellen HP. Lädt alle paar Sekunden pro Ziel nach: in Combos einbauen."
      dd_spell_id: "JarvanIV_Passive"
    - key: "Q"
      name: "Dragon Strike"
      description: "Linien-Lanze, die Schaden macht und Rüstung shreddet. Trifft sie eine aktive E-Flag, zieht Jarvan zur Flag und knockt Gegner auf der Bahn hoch."
      dd_spell_id: "JarvanIVDragonStrike"
    - key: "W"
      name: "Golden Aegis"
      description: "Eigenschild (skaliert mit getroffenen gegnerischen Champions) und Slow auf Gegner in der Nähe. Drücke W VOR dem E-Q, nicht danach."
      dd_spell_id: "JarvanIVGoldenAegis"
    - key: "E"
      name: "Demacian Standard"
      description: "Wirft eine Flag, die beim Aufprall Magie-Schaden macht und Verbündeten Attack Speed gibt. Setup für das E-Q-Knockup-Combo."
      dd_spell_id: "JarvanIVDemacianStandard"
    - key: "R"
      name: "Cataclysm"
      description: "Springt auf einen Champion, schadet Gegnern in der Nähe und erzeugt eine Arena aus undurchdringlichen Mauern. R erneut drücken, um die Mauern früher fallen zu lassen."
      dd_spell_id: "JarvanIVCataclysm"
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3071", name: "Black Cleaver" }
    - { dd_id: "6665", name: "Jak'Sho, The Protean" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "gegen viel CC oder AP-lastige Teams (3+ Stuns/Roots oder zwei AP-Threats): Steelcaps tauschen, wenn CC schlimmer ist als physischer Schaden"
    - dd_id: "3742"
      name: "Dead Man's Plate"
      against: "gegen kite-lastige Comps (Caitlyn, Senna, Kog'Maw, Jinx): MS und Slow on Hit halten dich nach R am Carry kleben"
    - dd_id: "6664"
      name: "Hollow Radiance"
      against: "gegen Heal-stacking Comps (Aatrox top, Yone bot, Soraka): Burn schneidet Heals und hilft beim Waveclear zwischen Objectives"
    - dd_id: "3053"
      name: "Sterak's Gage"
      against: "gegen Teams, die dich focussen (2+ drehen auf dich, sobald du R reingehst): HP-Schild proct unter Burst, Tenacity verkürzt CC"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "gegen Comps mit zwei starken AD-Dealern (z.B. Yasuo + Caitlyn): wandelt physischen Schaden in langsames Bluten statt One-Shot-Burst"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Lande das E-Q-Knockup auf einem Prio-Target (Carry oder Enemy Jungler), dann R, um es in deiner Arena einzusperren, während dein Team nachsetzt. Wiederhole es auf jedem Cooldown rund um Objectives."
  weakness: "Verfehlst du E oder Q, hast du dein einziges Hard-CC und Gap-Close verbraucht. Du bist ein Melee-Bruiser ohne Burst, leicht zu kiten von Ranged Marksmen mit Self-Peel."
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
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Conqueror stackt auf jedem Treffer des E-Q-AA-R-Combos: beim Knockup sind die Stacks voll für Schaden und Healing. Triumph belohnt Takedowns an Objectives, Alacrity beschleunigt Autos für Martial-Cadence-Procs, Coup de Grace finisht Low-HP-Targets in Cataclysm."
    secondary_rationale: "Resolve sekundär: Bone Plating absorbiert den ersten Burst, wenn du mit R reingehst und das Enemy Team auf dich dreht; Revitalize stärkt das Golden-Aegis-Schild, deine einzige aktive Defense mid-fight."
    secondary_alternative: "Gegen Poke-lastige Teams (Varus, Xerath, Karma-Poke-Comps) Resolve gegen Inspiration tauschen: Magical Footwear (kostenlose Boots, Gold sparen) und Cosmic Insight (öfter Flash für den E-Q-Flash-Trick)."
matchup_draft:
  pick_into:
    - examples: ["lee-sin", "graves", "kha-zix", "viego", "rengar"]
      archetype: "Early-Game Skirmisher Jungler"
      reason: "Jarvan tradet auf Level 3 mit Q Armor Shred plus E Attack Speed gleichauf und out-scaled die meisten Early-Game-Jungler, sobald Sundered Sky um Minute 12-14 online ist."
    - examples: ["caitlyn", "ezreal", "lulu", "soraka"]
      archetype: "Immobile Bot Lanes, die Peel brauchen"
      reason: "Cataclysm-Mauern sperren einen positions-abhängigen Carry in einer Arena ein, in die der Support nicht reicht; das Enemy Team kann das Lockdown meist nicht rechtzeitig kontern."
    - examples: ["azir", "aurelion-sol", "anivia"]
      archetype: "Stationäre Mid-Lane-Scaler"
      reason: "Der E-Q-Gap-Close aus dem Fog plus die R-Mauer nehmen ihnen den Raum, den ihr Kit braucht; sie haben keinen Dash, um die Arena zu verlassen, bevor dein Team konvertiert."
  counterpicks:
    - examples: ["fiddlesticks", "amumu", "zac"]
      archetype: "AOE-Engage-Jungler mit längerer CC-Range"
      reason: "Sie engagen außerhalb deiner E-Q-Range und chain-CCen dich, bevor du die Backline erreichst; die Mauern retten dich nicht, wenn du mitten im Sprung gestunnt wirst."
    - examples: ["nasus", "vladimir", "mordekaiser"]
      archetype: "Late-Game-Scaler mit eingebautem Sustain"
      reason: "Jarvans Power Spike liegt bei Items 1-3 (um Minute 20-25). Danach fällt er ab, während diese Targets nur stärker werden und seine einzige Rotation überleben."
    - examples: ["olaf", "tryndamere"]
      archetype: "CC-immune Duellisten"
      reason: "Olaf R und Tryndamere R ignorieren das Cataclysm-Lockdown: sie laufen mit vollem Schaden aus der Arena, während dein einziger Engage auf Cooldown ist."
---

## Überblick

Jarvan IV ist ein Melee-Fighter / Diver — also ein Champion, der die Distanz mit einem Dash schließt und sich im Teamfight committed, um ein Schlüssel-Target zu locken — aufgebaut um ein Signature-Combo: wirf eine **E**-Flag, schieße die **Q** durch die Flag, du wirst zur Flag gezogen und knockst alle in der Bahn hoch. Ab Level 6 kommt **R** Cataclysm dazu, eine Mauer-Arena, die einen einzelnen Gegner mit ihm einsperrt, während sein Team den Kill konvertiert. Er ist einer der einfachsten Jungler zum Lernen (Schwierigkeit 2/5 in unserer Skala), weil das Kit immer dasselbe will: E-Q auf einem Prio-Target landen, R, Fight gewinnen.

Sein Game Plan: Jungle-Camps schnell mit aktiver **E** und Q Armor Shred clearen, dann ganken (in eine Lane springen, um den Gegner mitzukillen), indem er Lanes mit nutzbarem Engage-Winkel ausnutzt — Mid Lane durch die Tri-Bush (das dreieckige Gebüsch zwischen Mid und Side Lane) oder Top Lane durch den River-Bush. Um jeden Objective-Spawn herum nach einem Carry-Dive suchen (auf den Hochschadens-/Niedrig-Defense-Gegner in der Backline springen). Skill Expression liegt im **E-Q-Flash**-Trick — Flag legen, Flash nach vorn, Q durch für ein nicht-reagierbares Knockup — und in der Entscheidung, **wann** die **R** zu zünden ist (du hast nur eine pro Fight, also nicht auf den Frontline-Tank verschwenden).

## Empfohlener Build

**Starting Items:** Hailblade + Refillable Potion. Standard-Junglecam-Pet-Quest-Path. Sowohl Hailblade als auch Emberknife evolven in einen von drei Companions; wir wollen das AD-Skirmisher-Pet, siehe unten.

**Core Items (in Reihenfolge):**

1. ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** — Quest-Upgrade aus Hailblade (auto-evolved um Minute 3-4, sobald genug XP da ist). Der AD-Skirmisher-Companion: gibt dir nach jedem Camp einen Movement-Speed-Sprint, was sich in schnellere Ganks über die Map übersetzt.
2. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — dein erstes großes Item. Der garantierte Crit auf den ersten Hit und der On-Hit-Heal landen perfekt auf Martial Cadence: in dem Moment, in dem du ein Target hochknockst, critest du es und heilst den Schaden zurück, den du beim Anrennen genommen hast.
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — Default-Boots gegen die meisten Enemy Teams (die Bot Lane sind meist zwei physische Damage Dealer). Wechsel zu Mercury's Treads, wenn die Enemy Comp überwiegend AP und CC ist.
4. ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — Armor Shred stackt mit der Q-Passive, plus HP und Ability Haste, damit dein E-Q schneller wieder bereit ist.
5. ![Jak'Sho, The Protean](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6665.png) **Jak'Sho, The Protean** — Late-Game-Tank-Spike. Die Stacking-Armor-und-Magic-Resist-Passive verwandelt dich vom Diver in eine Frontline, die im Teamfight die volle Dauer aushält.

**Situational Items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — gegen Heavy-CC- oder AP-lastige Teams. Steelcaps tauschen, wenn Crowd Control das größere Problem ist als physischer Schaden.
- ![Dead Man's Plate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Dead Man's Plate** — gegen kite-lastige Comps (Caitlyn, Senna, Kog'Maw — Gegner, die rückwärts laufen, während sie dich angreifen, um außerhalb der Melee-Range zu bleiben). MS und Slow on Hit halten dich nach **R** an der Backline kleben (die Hochschadens-Carries hinter ihren Tanks).
- ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — gegen Heal-stacking Comps (Aatrox top, Yone bot, Soraka support). Die Burn-Passive schneidet gegnerische Heals.
- ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — wenn 2+ Gegner dich focussen (ihren Schaden auf dich drehen), sobald du mit R reingehst. Der HP-Schild proct (wird auto-getriggert) unter Burst (hoher Schaden in 1-2 Sekunden) und die Tenacity-Passive verkürzt Crowd Control (Stuns, Roots, Slows).
- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — gegen Comps mit zwei starken physischen Damage Dealern (z.B. Yasuo + Caitlyn). Wandelt erlittenen physischen Schaden in langsames Bluten (Schaden über die nächsten Sekunden verteilt, nicht instant), damit du Zeit zum Reagieren hast, statt gelöscht zu werden.

**Boots:** Plated Steelcaps default. Mercury's Treads, wenn das Enemy Team 3+ Stuns/Roots oder zwei AP-Threats hat.

**Skill Order:** Maxe **Q** zuerst (Hauptschaden und Armor Shred), **E** als zweites (niedrigerer Cooldown = mehr Gank-Versuche und mehr Flag-Optionen), **W** zuletzt. Punkte in **R** auf Level 6, 11, 16.

**Runes:** Primary **Precision** mit **Conqueror**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secondary **Resolve** mit **Bone Plating** und **Revitalize**. Stat Shards: Attack Speed, Adaptive Force, Health Scaling.

## Wichtige Matchups

- **Lee Sin / Graves:** Ausgeglichenes Matchup im Early-Jungle. Tracke ihren ersten Clear; starten sie Red-Side, contestere ihren zweiten Buff mit E-Q. Beide können dich auf Level 3 zurückschlagen, also invade nicht ohne Lane Prio (ein Mate, der die Gegner unter Turm gepusht hat und rotieren kann, um zu helfen) im Rücken.
- **Fiddlesticks / Amumu:** Vermeide es, im Mid-Game mit Allies gruppiert zu sein. Ihre AOE-Engage-Range übersteigt deine **E-Q**-Initiate-Distanz — sie ulten dich, während du noch zur Flag läufst. Warde deine Jungle-Eingänge und face-checke keine Bushes (in einen Bush blind ohne Vision laufen, wo ein Gegner versteckt sein könnte).
- **Kha'Zix / Rengar:** Assassin-Jungler, die einen Carry one-shotten wollen. Counter-ganke (in derselben Lane auftauchen, um den Fight zu drehen), statt Full-Clear zu machen: du tradest auf Level 3 gleichauf mit ihnen, und deine **R** ist ein Peel-Tool (eine Ability, mit der du deinen Carry vor jemandem rettest, der ihn dive't), wenn sie auf deinen Carry springen — mauere sie weg vom Kill.
- **Olaf:** Seine R macht ihn CC-immun, was bedeutet, dass **Cataclysm-Mauern ihn nicht stoppen**. Ulst du ihn, läuft er aus der Arena und schlägt dich. Spare die **R** für seine Mates auf, nachdem er das Ult verbrannt hat, oder pick ihn nur als Target, wenn dein Team kiten kann (rückwärts laufen und dabei attacken, um Distanz zu halten), während er eingesperrt ist.
- **Sejuani / Maokai:** Tankigere Engage-Jungler. Du out-damagest sie 1v1 early, aber ihr wollt beide dieselbe Rolle im Teamfight (einen Carry locken). Die Lane, die zuerst snowballt, gewinnt (ein Early-Kill, der zu einem Gold-Lead wird, der zu mehr Kills wird); committe dich Ganks, bevor sie ihr erstes Item beenden.

## Power Spikes & Siegbedingungen

- **Level 3:** Mit einem Punkt in **Q**, **E** und **W** hast du das volle E-Q-W-Combo für Ganks. Das ist dein erstes echtes Gank-Window, vor allem Mid Lane durch die Tri-Bush.
- **Level 6:** **Cataclysm** unlockt. Jeder unwarded Carry nahe deinem River ist eine Dive-Gelegenheit. Der Trick: Flag (E) knapp dahinter, R nach innen, Q für das Knockup — ohne **Flash** und Cleanse können sie das Lockdown nicht beantworten.
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky fertig (~ Minute 12-14):** Dein erster Crit auf Martial Cadence one-shottet Squishies (Champions mit hohem Schaden und niedriger Defense, wie der ADC) nach E-Q. In diesem Window solltest du auf Cooldown ganken und Drache-Trades forcieren.
- **3-Item-Spike (Sundered Sky + Boots + Black Cleaver, ~ Minute 22-25):** Teamfight-Peak. Dein R + Q allein löscht einen Backline-Carry, und du hast genug HP, um den Focus danach zu überleben.

## Häufige Fehler

- **Die E auf dich selbst werfen für das Standard-„Knockup wo ich bin"-Combo.** Funktioniert für Ganks, aber in einem Fight, in dem der Gegner sich entfernt, zieht dich die Q rückwärts. Wirf die Flag *hinter* den Gegner, damit der Q-Pull dich nach vorn zu ihm trägt, nicht weg.
- **W nach dem Engage drücken.** Golden Aegis ist ein Schild, das mit der Anzahl getroffener gegnerischer Champions beim Cast skaliert — aktiviere ihn *vor* dem E-Q, damit der Schild-Wert maximal ist und der Slow die Leute trifft, auf denen du gleich landen wirst, nicht das Nichts.
- **Den Frontline-Tank ulten.** Cataclysm sperrt *einen* Gegner mit dir ein. Nutze es auf dem Carry (Caitlyn, Aphelios, Azir), nicht auf dem Sion, der gerne mit dir in einer geschlossenen Arena kämpft.
- **Den ganzen Jungle vor dem Gank clearen.** Du out-tempost die meisten Jungler mit E-Q-Ganks auf Level 3-4. Machst du Full-Clear vor dem ersten Gank, gibst du deinen größten Vorteil auf. Tax 2-3 Camps, dann suche einen Winkel.
- **R zu früh erneut drücken, um die Mauer zu brechen.** Die Mauern sind auch ein Peel-Tool: gewinnt dein Team den Fight außerhalb der Arena, lass die Mauern stehen, damit der eingesperrte Carry nicht beitreten kann. R nur zum Verfolgen eines Fliehenden erneut drücken.

## Fortgeschrittener Tipp

Übe das **E-Q-Flash**-Combo: wirf die Flag, schieße die Q hindurch und Flashe *während* der Q-Animation. Das Knockup wirkt an deinem Ziel, du knockst also Gegner in einem 600-Unit-Bereich hoch, der weiter geht, als sie erwartet hätten — eingesetzt, um aus dem Fog zu engagen, ist das eine der zuverlässigsten Initiationen im Spiel. Trade-off: du gibst Flash aus, also spare den Trick für Ganks, die einen Kill oder einen verlorenen Ward sichern. Übe ihn ein Dutzend Mal im Practice Tool, bevor du ihn in einem Ranked-Game versuchst; das Timing-Window ist kurz.
