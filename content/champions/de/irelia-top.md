---
title: "Irelia Top Build & Guide — Patch 16.9"
slug: "irelia-top"
language: "de"
patch: "16.9"
champion: "irelia"
role: "top"
last_updated: "2026-04-29"
description: "Irelia Top Lane Guide für League of Legends Patch 16.9: Starter-Kit, Trinity Force Core-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Irelia"
  difficulty: 5
  damage_type: "mixed"
  champion_class: "Fighter / Skirmisher"
  abilities:
    - key: "P"
      name: "Ionian Fervor"
      description: "Einen Gegner mit einem Zauber zu treffen gibt Attack-Speed-Stacks (max 4). Bei vollen Stacks fügt Irelia zusätzlich on-hit magischen Schaden zu."
      dd_spell_id: "Irelia_Passive"
    - key: "Q"
      name: "Bladesurge"
      description: "Dash, der ein Ziel trifft und heilt. Cooldown reset, wenn das Ziel stirbt oder Marked ist — der Q reset (Dash-Kette von Minion zu Minion)."
      dd_spell_id: "IreliaQ"
    - key: "W"
      name: "Defiant Dance"
      description: "Channel eines aufgeladenen Schlags, der Schaden über Zeit aufbaut und während der Aufladung physischen und magischen Schaden reduziert (channel = halten zum Aufladen)."
      dd_spell_id: "IreliaW"
    - key: "E"
      name: "Flawless Duet"
      description: "Platziere eine Klinge, recast für die zweite. Sie fliegen aufeinander zu, stunnen und Marken alles dazwischen. Hauptsetup-Tool."
      dd_spell_id: "IreliaE"
    - key: "R"
      name: "Vanguard's Edge"
      description: "Klingensalve mit langer Reichweite, die getroffene Champions Marked, dann formt sich eine Wand um den ersten Champion, die Schaden und Slow verteilt. Engage und Zoning."
      dd_spell_id: "IreliaR"
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "gegen schweren magischen Schaden oder verkettetes CC (Lissandra, Ryze, Malphite — Tenacity verkürzt Stuns und Slows)"
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "gegen Kiter und ranged Tops (Vayne, Gnar, Kennen) — Dash + Slow on-cast helfen, an mobilen Zielen zu sticken"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "gegen Tanks mit Armor-Stacking (Malphite, Ornn, Sion) — Armor Shred verstärkt wiederholte Q-Treffer und Team-Follow-up"
    - dd_id: "3074"
      name: "Ravenous Hydra"
      against: "gegen Splitpush-Comps mit Bedarf an Waveclear und 1v1-Sustain (Lifesteal auf AOE = Flächen-Cleave + Heilung)"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "Lande E für den Stun, Q-reset durch die Wave, um an einem Ziel zu sticken, dann trade mit aktiven Passive-Stacks. Snowball die Lane (verwandle einen Early-Vorsprung in einen größeren) bis in die Mid-Game-Skirmishes."
  weakness: "Ohne gelandetes E kein verlässlicher Engage. Long-Range-Poke und Disengage schalten dich ab, bevor du die Frontline erreichst. Ohne Trinity Force oder Stridebreaker wirst du übel gekitet."
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
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["malphite", "ornn", "sion"]
      archetype: "Langsame, immobile Tanks ohne ranged Poke"
      reason: "Sie haben keinen Disengage gegen den E-Stun und keine Antwort auf Q resets durch die Wave; du out-tradest sie auf jedem Level, sobald Conqueror stackt."
    - examples: ["nasus", "garen", "darius"]
      archetype: "Melee Juggernauts ohne Dash"
      reason: "E + Q geben dir den Gap-Close, W-Schadensreduktion deckt ihr Burst-Window; sie können dich weder kiten noch dem Stun entkommen."
    - examples: ["azir", "ryze"]
      archetype: "Mid-Range Mages, top geflext"
      reason: "Squishys mit kurzer Reichweite (wenig HP, wenig Defenses) ohne Dash werden one-shotted, sobald Trinity Force steht und du ihnen volle Passive-Stacks aufdrückst."
  counterpicks:
    - examples: ["vayne", "kennen", "gnar"]
      archetype: "Ranged oder kitende Tops"
      reason: "Sie auto-attacken dich außerhalb der E-Reichweite, kiten Q mit eigenem Dash oder Transformation, und bestrafen jede Annäherung. Du brauchst Stridebreaker nur zum Engagen."
    - examples: ["fiora", "camille", "jax"]
      archetype: "Duelists mit Point-and-Click-Counter oder True Damage"
      reason: "Fiora pariert E oder R, Camilles E-Hookshot stunt durch deinen Dash, Jax E stunt und outscaled deine AS-Passive in langen Trades."
    - examples: ["malzahar", "renekton"]
      archetype: "Lane Bullies mit Anti-Skirmisher-Tools"
      reason: "Malzahars Suppress (Point-and-Click-Silence + Lockdown) cancelt deine Q resets; Renektons Fury-empowered W stunt durch dein W-Charge und beendet den Trade, bevor du scaled."
---

## Überblick

Irelia ist eine Melee-Skirmisher (ein Fighter, der über kurze, wiederholte Trades gewinnt statt über einen großen Burst). Sie lebt oder stirbt mit ihren **Bladesurge (Q)**-Dashes. Die Q hat einen langen Base-Cooldown, aber sie **resettet** (Cooldown sofort wiederhergestellt) jedes Mal, wenn sie einen Minion tötet oder ein Ziel mit dem Mark-Debuff trifft (ein kleines Icon, das Irelias Spells auf Gegnern hinterlassen). Eine einzige Skirmish kann vier oder fünf Dashes hintereinander verketten. Ihre Passive **Ionian Fervor** stackt Attack Speed bis zu vier Mal, wenn sie Spells landet (jeder Spell-Treffer fügt einen Stack hinzu, bis zu vier), und der fünfte Stack gibt Bonusschaden und Crowd-Control-Reduktion.

Der Top-Lane-Game-Plan ist einfach beschrieben und anspruchsvoll umzusetzen. Nutze **Flawless Duet (E)**, um den Stun zu landen (es braucht ein kleines Setup-Window), folge mit **Q** auf das gestunnte Ziel, **W** zum Mitigieren des Rückschadens, und Q-reset durch die Wave, um zu disengagen oder zu verfolgen. Ab Level 6 verwandelt **Vanguard's Edge (R)** Lane-Skirmishes in Kills, indem es Zone Control und einen zweiten Mark für Gratis-Q-Resets liefert. Im Mid-Game roamst du durch die Wave mit Q-Resets, um Pickoffs zu finden (einen isolierten Gegner außerhalb des Teamfights eliminieren) und auf Objectives zu rotieren.

## Empfohlener Build

**Starter-Items:** Doran's Blade + 1 Health Potion. Nimm Doran's Shield nur in ranged Harass-Lanes (Kennen, Quinn, Vayne), wo du die Regen brauchst.

**Core-Items (in Reihenfolge):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — dein Haupt-Spike. Die Sheen-Passive (eingebauter Effekt, der auf der nächsten Basic Attack nach einem Spell auslöst, im Jargon "proc") combot mit jedem Q-Dash; Ability Haste senkt den Q-Cooldown; Attack Speed rundet das Passive-Stacking ab.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — Default-Boots gegen AD-lastige Teams. Kauf nach Trinity, wenn deine Lane melee oder AD-ranged ist.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP, AD-Scaling und ein Low-HP-Shield, der deine Dive-Windows überlebbar macht.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — verwandelt erlittenen physischen Schaden in einen langsamen Bleed über mehrere Sekunden (Schaden über Zeit verteilt, nicht sofort). Kauf gegen Teams mit zwei starken physischen Damage-Dealern (z.B. Yasuo + Caitlyn): du überlebst das Burst-Window lang genug zum Q-out.
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — garantierter Crit auf der ersten Basic Attack gegen einen Champion, plus Heal. Passt perfekt in die Sheen + Q reset-Zyklen.

**Situative Items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — gegen schweren magischen Schaden oder verkettetes Crowd Control (Lissandra, Ryze, Malphite). Tenacity verkürzt Stun- und Slow-Dauern.
- ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — alternativer Mythic gegen Kiter und ranged Tops (Vayne, Gnar, Kennen). Der Active Dash + Slow gibt dir einen Non-Q-Gap-Closer.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — gegen Tanks mit Armor-Stacking (Malphite, Ornn, Sion). Armor Shred verstärkt wiederholte Q-Treffer und Team-Follow-up.
- ![Ravenous Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3074.png) **Ravenous Hydra** — wenn du splitpushst (eine Side-Lane allein pushen, um eine Antwort zu erzwingen). AOE-Cleave plus Lifesteal machen 1v1s und Waveclear trivial.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** ist Default. Wechsle zu ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**, wenn das Gegnerteam 2+ Quellen für verkettetes CC hat.

**Skill-Order:** Maxe **Q** zuerst (niedrigerer Cooldown = mehr Resets, mehr Schaden), **E** als zweites (Stun-Setup), **W** zuletzt. R auf Level 6, 11, 16.

**Runen:** Primärbaum **Precision** mit **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Sekundär **Resolve** mit **Bone Plating** und **Revitalize**. Nimm **Press the Attack** statt Conqueror gegen Burst-Lanes, in denen kurze Trades die Lane gewinnen (z.B. Pantheon, Renekton early): Press the Attack belohnt 3 Treffer in 4 Sekunden mit einem Schadens-Spike, statt über einen langen Fight zu stacken.

## Wichtige Matchups

- **Renekton:** Lane Bully. Bleib safe pre-3, dodge seinen W-Stun und farme unter Tower. Power Swing zu dir auf Level 6 mit der R; trade erst, wenn **W** sein Combo absorbieren kann.
- **Fiora:** Sie pariert deinen E-Stun und den R-Mark mit ihrer **Riposte (W)**. Bait die Parry, indem du eine E-Klinge als Fake flickst, dann commit Q nur, wenn ihr W on Cooldown ist.
- **Malphite:** Free Lane pre-6: dodge seinen E-Slow und Q-reset durch die Wave zum Harass. Nach 6 kann er flash-R auf dein Team — group dich mit Allies an Objectives und extend nicht (über den River pushen ohne Backup) ohne Vision Wards.
- **Vayne:** Hard Counter, außer sie misplayed. Sie kitet dich (bewegt sich rückwärts beim Angreifen, hält Distanz) die Q mit **Tumble (Q)** und kaut dein HP mit **Silver Bolts (W)** weg. Build Stridebreaker zuerst, freeze die Wave nahe der Tower (halte die Wave still in Towernähe, sodass sie nicht safe last-hitten kann), und call Jungle-Ganks vor Level 6.
- **Camille:** Ungefähr ausgeglichen. Ihr **Hookshot (E)** stunt durch deinen Dash; spar **Flawless Duet** auf, um sie mid-Hookshot zu stunnen. Wer das Setup-CC zuerst landet, gewinnt den Trade.

## Power Spikes & Siegbedingungen

- **Level 3:** Alle drei Basic-Abilities online. Du kannst E-Stun + Q + Auto-Attack + W landen für ein vollständiges Passive-Stacking-Trade-Window.
- **Level 6:** **Vanguard's Edge (R)** schaltet ein All-in-Window frei (volle Kill-Verpflichtung). Der R-Mark gibt dir einen Gratis-Q-Reset durch die Cage; ulte ein Low-HP-Ziel, sobald dein Jungler auftaucht.
- **Trinity Force fertig (~ Minute 14-16):** Dein Schaden pro Q steigt durch Sheen-Procs. Wave-Kontrolle kippt: du kannst shoven und mit Q-Resets durch die Side-Wave auf Objectives roamen.
- **3 Items (Sterak's online, ~ Minute 24-28):** Du wirst zur Teamfight-Skirmisher: dive die Backline (die squishy Carries hinter ihren Tanks) durch Q-Resets, überlebe ihren Burst mit Sterak's Shield + W, und räume mit der R-Cage auf.

## Häufige Fehler

- **Q ohne Setup spammen.** Nackte Q auf einem Ziel ohne Mark frisst den langen Base-Cooldown für einen einzigen Dash. Lande immer zuerst den **E**-Stun oder kette Q auf einem Low-HP-Minion, um den Reset-Zyklus am Leben zu halten.
- **W zu lange während eines Stuns halten.** **Defiant Dance** ist ein Channel: du kannst dich beim Aufladen weder bewegen noch angreifen. Tap-cancel nach dem Damage-Reduction-Window, wenn der Gegner disengaged — bleib nicht für den Max-Damage-Release im Channel, wenn niemand in Reichweite ist.
- **Engage durch eine Parry.** Fiora **W**, Sivir Spell Shield, Olaf R: alle fressen deinen E-Stun gratis. Bait diese Abilities zuerst, dann commit dein CC.
- **Splitpush pre-Trinity.** Ohne Trinity ist dein Schaden auf Towers und Waves schwach; du tradest Tempo für nichts. Halte die Wave nahe der Tower, bis Trinity online ist, dann push die Side-Lane.
- **Auf ein Ziel ulten, während das Team zusammensteht.** **R**-Cage auf einem einzelnen Squishy ist verschwendet, wenn ihr Tank body-blocken kann. Ziel R, um 2-3 Gegner durch ein Choke (einen schmalen Jungle-Korridor) zu clippen, und lass die Cage die Backline aus dem Fight zonen.

## Fortgeschrittener Tipp

Übe das **R-Flash**-Combo: caste **Vanguard's Edge** in eine Richtung, dann sofort **Flash** in eine andere, um die Klingensalve umzulenken. Die Klingen folgen Irelias Position, also erlaubt dir ein Flash senkrecht zur Cast-Linie, einen Champion zu cagen, der sich sicher außerhalb der R-Reichweite glaubte. Nutz das als Engage-Tool, wenn dein Team einen Pickoff (einen isolierten Gegner eliminieren) auf einem fliehenden Carry am Drake- oder Baron-Pit braucht.
