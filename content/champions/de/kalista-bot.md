---
title: "Kalista Bot Build & Guide — Patch 16.9"
slug: "kalista-bot"
language: "de"
patch: "16.9"
champion: "kalista"
role: "bot"
last_updated: "2026-05-05"
description: "Kalista Bot Lane Guide für League of Legends Patch 16.9: On-hit Build, Soulbound-Mechanik mit dem Support, Schlüsselmatchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Kalista"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Marksman / On-hit Skirmisher"
  abilities:
    - key: "P"
      name: "Martial Poise"
      description: "Jeder Auto-Attack und jeder Pierce gibt Kalista während des Wind-ups einen kleinen Hop. Ein Move-Klick vor dem Treffer setzt die Sprungrichtung."
      dd_spell_id: "Kalista_Passive"
    - key: "Q"
      name: "Pierce"
      description: "Linearer Skillshot. Tötet sie das erste Ziel, fliegt der Speer weiter und überträgt alle Rend-Stacks auf das nächste getroffene Ziel."
      dd_spell_id: "KalistaMysticShot"
    - key: "W"
      name: "Sentinel"
      description: "Soulbound-Passive: bindet Kalista an einen Verbündeten. Treffen beide dasselbe Ziel, gibt es Bonus-Magieschaden basierend auf Max-HP."
      dd_spell_id: "KalistaW"
    - key: "E"
      name: "Rend"
      description: "Jeder Auto-Attack und jeder Pierce stecken einen Speer ins Ziel. Die Aktivierung reißt sie heraus: Schaden skaliert mit Stack-Zahl, Slow im Umkreis."
      dd_spell_id: "KalistaExpungeWrapper"
    - key: "R"
      name: "Fate's Call"
      description: "Setzt den Soulbound in Stasis und zieht ihn zu Kalista. Der Verbündete kann recasten und als Knockback-Dash starten, der am ersten Champion stoppt."
      dd_spell_id: "KalistaRx"
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
    - { dd_id: "3091", name: "Wit's End" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3153", name: "Blade of The Ruined King" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "gegen Tanks/Bruiser mit 2500+ HP (Sion, Ornn, Cho'Gath): Armor Pen skaliert mit ihrem HP-Vorteil über dir"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "gegen Heal-stackende Comps (Soraka Support, Aatrox, Dr. Mundo): Grievous Wounds halbiert die Heilung"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "gegen Burst/Assassin-Comps (Zed, Talon, Kha'Zix): das zweite Leben lässt Soulbound nach deinem R nachsetzen"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "gegen Single-Target Hard-CC (Ashe-Pfeil, Morgana Q, Blitzcrank-Hook): blockt einen Skill, dein Hop-Reset überlebt"
  base_combo: ["Q", "AA", "E", "AA", "R"]
  win_condition: "Stacke Rend im Teamfight auf 6+ am Priority-Target, dann Q-Reset auf ein zweites Ziel. Mit Wit's End plus Blade of The Ruined King online schlägst du andere Marksmen in langen Fights."
  weakness: "Du skalierst mit deinem Support: ein Soulbound ohne Lockdown lässt dich ohne Engage stehen. Hook-Supports (Blitzcrank, Thresh) ziehen deinen Partner aus der Hop-Reichweite und der Fight ist vor dem R vorbei."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8139, name: "Taste of Blood", icon_path: "perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png" }
      - { dd_id: 8105, name: "Relentless Hunter", icon_path: "perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision mit Press the Attack: drei Hops aufs gleiche Ziel proccen PtA für +12% Bonusschaden, während Rend schnell stackt. Triumph belohnt den Dauer-Skirmish, Legend: Alacrity füttert die On-hit-AS, Coup de Grace finished unter 40% HP."
    secondary_rationale: "Domination Sekundär: Taste of Blood gibt Sustain nach jedem kurzen Trade in Lane (Hop-Windows lassen dich sauber rauswalken), Relentless Hunter stackt auf Takedowns und liefert die Out-of-Combat MS, die du fürs Mid-Roam mit dem Soulbound brauchst."
    secondary_alternative: "Gegen heftige Poke-Lanes (Caitlyn + Lux, Varus + Brand) Domination gegen Resolve mit Bone Plating (-30 bis -60 Schaden auf den ersten 3 Hits) und Second Wind (HP-Regen steigt unter 50% HP) tauschen, um Level 1-6 zu überleben."
matchup_draft:
  pick_into:
    - examples: ["aphelios", "kog-maw", "sivir"]
      archetype: "Immobile Late-Game-ADCs ohne Dash"
      reason: "Ihre einzige Sicherheit ist Positioning. Kalista hop bei jedem Auto, also tradet sie in Melee ohne stehenzubleiben — keine Antwort außer Flash, und du stackst Rend schneller, als sie den Trade resetten."
    - examples: ["jinx", "varus", "ashe"]
      archetype: "Statisch positionierte Marksmen, abhängig vom Lockdown ihres Supports"
      reason: "Engaged ihr Support zuerst, schlagen dein R-Reposition und Wit's End On-hit Magic ihre AS-Kurve. Sie können keinen Champion kiten, der pro Auto 350 Units schließt."
    - examples: ["caitlyn"]
      archetype: "Long-range Artillery-ADCs in der Lane Phase"
      reason: "Caitlyn poked dich auf Level 1-3 raus, aber ihr Trap-and-Net-Combo ist ein einzelner Dash auf langem Cooldown — sobald Boots und Wit's End online sind, läufst du sie auf Level 6 nieder."
  counterpicks:
    - examples: ["draven", "samira", "lucian"]
      archetype: "Lane-Bully-Marksmen mit starkem Level 1-3 All-In"
      reason: "Ihr Early-Damage überholt dein Hop-Spacing (die Sicherheitsdistanz mit Auto-Sprüngen), bevor du genug AS für Press the Attack hast. Eine schlechte Q auf Level 2 und sie holen den Kill, bevor dein Support reagieren kann."
    - examples: ["blitzcrank", "thresh", "nautilus"]
      archetype: "Hook-Supports, die das Gegnerteam gegen deinen Soulbound pickt"
      reason: "Hooken sie deinen Support, ist der Soulbound-Link wertlos: du kannst ihn nicht aus der Grab-Linie R-en, und der Engage passiert 800+ Units außerhalb deiner Hop-Window."
    - examples: ["tristana", "vayne"]
      archetype: "Mobile Self-Peel-Hypercarries"
      reason: "Tristana W aus deinem Dive raus, Vayne Tumble cancelt den Stack-Timer von Press the Attack. Beide skalieren in Items, die deinen On-hit-Core nach Minute 25 im 1v1 schlagen."
---

## Überblick

Kalista ist ein On-hit Skirmisher Marksman ("on-hit" = Items, deren Effekte bei jedem Auto-Attack auslösen, nicht durch Skills; "skirmisher" = Champion, der in wiederholten kurzen Trades gewinnt, nicht in einem großen All-In) und wird durch **Martial Poise (P)** definiert: jeder Auto-Attack und jeder **Pierce (Q)** gewährt ihr während des Wind-ups einen kleinen Hop. Dieser Sprung verwandelt Auto-Attacks in Mobility: sie läuft Gegner nieder, die stehenbleiben, und disengaged von Melee-Bedrohungen, ohne mit dem Schießen aufzuhören. Der Preis ist ein fragiles Early Game (niedriger Base-AD, keine Shields) und einer der höchsten Skill Floors unter den Marksmen: der Hop muss frame für frame mit Move-Klicks kommandiert werden.

Ihr Game Plan dreht sich um **Rend (E)**-Stacks. Jeder Auto-Attack steckt einen Speer ins Ziel; die Aktivierung reißt alle für eskalierenden Schaden heraus. Stacke 6-8 Speere auf einen Tank, dann E, um den Squishy (Champion mit hohem Schaden und wenig Defenses, typisch für ADCs) daneben zu löschen, und du hast den Teamfight beendet. Die Soulbound-Mechanik auf **Sentinel (W)** bindet sie für die ganze Partie an einen Verbündeten — meist den Support — und **Fate's Call (R)** katapultiert diesen Verbündeten als Knockback-Dash. Mit einem Engage-Support wie Thresh oder Leona verwandelt Kalistas R einen Soulbound-Flank in einen garantierten Pick (einen isolierten Gegner außerhalb des Teamfights eliminieren). Mit einem Poke-Support skaliert sie schlechter, und das R wird zum Panic-Disengage statt zum Engage-Tool.

## Empfohlener Build

**Starter Items:** Doran's Blade plus 1 Health Potion. Skip Doran's Shield auch gegen Ranged-Lanes — Kalista braucht den extra AD, um Hop-Spacing in Kill-Threats umzuwandeln.

**Core Items (in Reihenfolge):**

1. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — erstes Item: dein Attack-Speed-Spike (AS), also der erste große Sprung in Schlaggeschwindigkeit. Fügt Magieschaden bei jedem Auto-Attack hinzu, skaliert perfekt mit deiner Hop-Frequenz, und der Magic Resist zählt gegen AP-Support- + AP-Mid-Combos.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — extra Attack Speed für Press-the-Attack-Stacks und schnellere Rend-Application.
3. ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** — verursacht bei jedem Auto Schaden in Höhe eines Prozentsatzes der aktuellen Max-HP des Ziels, plus einen Active-Slow. Macht den Trade in Melee dicht und ist das beste zweite Item gegen jede Frontline (die Tanks/Bruiser, die Teamfights eröffnen).
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — die Bolts applizieren Rend auf zwei zusätzliche Ziele. Das verwandelt Kalistas E in einen Teamfight-AOE-Spike (Area of Effect: Schaden, der mehrere Ziele gleichzeitig trifft).
5. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — fünftes Item: AD plus der Lifesteal-Shield für lange Late-Game-Fights.

**Situative Items:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — gegen Tanks mit 2500+ HP (Sion, Ornn, Cho'Gath); Armor Pen skaliert mit ihrem HP-Vorteil über dir.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — gegen Heal-lastige Comps (Soraka Support, Aatrox, Dr. Mundo). Grievous Wounds halbiert die Heilung.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — gegen Burst-Assassin-Comps (Zed, Talon, Kha'Zix); das zweite Leben lässt deinem Soulbound Zeit für das Follow-up nach dem R.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — gegen Single-Target Hard-CC (Crowd Control: Stuns, Roots, Knock-ups, die dich festsetzen). Blockt einen Ashe-Pfeil oder Blitzcrank-Hook, dein Hop-Reset überlebt.

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** als Default. Wechsel zu ![Boots of Swiftness](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3009.png) **Boots of Swiftness**, wenn das Gegnerteam 4+ Slows hat, die du mit dem Hop nicht dodgen kannst.

**Skill Order:** Maxe **Q** zuerst (Hauptschaden + Rend-Transfer-Mechanik), **E** zweites, **W** zuletzt. Punkt in **R** auf Level 6, 11, 16. Starte **Q** auf Level 1 für verlässlichen Poke in Invade-Fights.

**Runes:** Primary **Precision** mit **Press the Attack**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secondary **Domination** mit **Taste of Blood** und **Relentless Hunter**. Gegen schwere Poke-Lanes (Caitlyn + Lux, Varus + Brand) Domination gegen Resolve mit **Bone Plating** und **Second Wind** tauschen, um Level 1-6 zu überleben.

## Wichtige Matchups

- **Aphelios:** Kalista gewinnt post-6, wenn sie ihr Hop-Spacing trifft. Aphelios' Damage-Spikes variieren nach Waffe, also step-up nur, wenn seine Off-hand Severum (Lifesteal) oder Crescendum (Turret) ist — beide sind Short-Range und du läufst ihn nieder.
- **Caitlyn:** Hart verlierende Lane Level 1-5: ihre Traps und 650 Auto-Range bestrafen, dass du für Rend-Stacks nach vorn laufen musst. Nimm **Bone Plating** secondary, lass den Support eine Trap tanken, dann ziel auf Level 6 mit **R** + Jungle-Gank.
- **Draven:** Lane-Bully. Vermeide Trades, solange seine **Spinning Axe** up ist; sein Auto-Reset kettet deinen Hop in einen garantierten Kill, wenn du stehenbleibst. Stacke einen Rend pro Minion-Auto, halte E, bis er eine Q auf dich landet, dann re-engage, wenn die Axt down ist.
- **Jinx:** Pari pre-6, du skalierst besser post-6. Kalistas Hop countert Jinx' **W**-Slow, weil der Dash startet, bevor das Projektil landet. Nach Level 9 all-in jede Wave, die Jinx clearen muss.
- **Vayne:** Verlorenes Scaling-Matchup nach Minute 25. Töte sie in den ersten zwei Items — Wit's End online, bevor sie Kraken Slayer fertig hat, ist die einzige Window, in der Kalista im 1v1 sauber gewinnt.

## Power Spikes & Siegbedingungen

- **Level 2:** Mit **Q** plus einem Punkt in **E** hast du ein verlässliches Trade-Pattern: AA, AA, E für Stack-Schaden. Die meisten Lanes verlieren diesen Austausch.
- **Level 6:** Das erste **Fate's Call** unlockt den Soulbound-Flank (von einer Seite in den Fight kommen, die die Gegner nicht beobachten): positioniere deinen Support im Side-Bush, R ihn auf den gegnerischen Support, kette mit deinem Stack-Rend.
- **![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) Wit's End fertig (~Minute 11-13):** Deine AS-Kurve hebt ab. Du läufst die meisten Marksmen Level 6-9 nieder und wirst zum Auto-Attack-DPS-Leader im Bot Side.
- **![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) Blade of The Ruined King online (~Minute 18-21):** % Max-HP On-hit shreddert Frontlines. Forciere hier einen Drake- oder Rift-Herald-Fight — dein Stack-E auf dem Tank löscht den ADC daneben.

## Häufige Fehler

- **Rend bei 1-2 Stacks für Chip-Damage casten.** Rend skaliert hart mit der Stack-Zahl: E früh zu spammen leert den Speer-Stack vor der Kill-Schwelle. Halte E, bis du 5+ Stacks am Priority-Target hast oder bis der Kill sicher ist (E refunded auf Kill den Cooldown, ein Kill-Cast resettet also den Cycle).
- **Vergessen, dass der Hop ein Bewegungsbefehl ist.** Neue Kalista-Spieler auto-attacken und stehen still. Der Hop triggert nur, wenn du im Wind-up-Frame in eine Bewegungsrichtung klickst. Übe Klick-und-Attack im Wechsel in Custom Games, bevor du in die Lane gehst.
- **R als offensiven Engage mit Poke-Support (Karma, Lulu) nutzen.** Deren Kits haben kein Follow-up-CC nach dem Knockback. Halte R als Panic-Save: Stasis auf den Support, um einen Ashe-Pfeil oder Blitzcrank-Hook zu dodgen, dann disengage.
- **Wit's End gegen AD-lastige Comps skippen.** Selbst dann ist Wit's End dein schnellster AS-Spike, und der Magieschaden appliziert unabhängig vom Armor. Bau es zuerst; AD-Pen-Items gehören in Slot 4 oder 5.
- **Mit 0 Hop-Optionen im Fight bleiben.** Der Hop liegt auf jedem Auto, aber wenn kein Gegner in Auto-Range ist, läufst du nur. Tracke, wann dir Auto-Targets ausgehen, und back off — Kalista ohne Hop ist ein 580-MS-Marksman ohne Dash, weniger Mobility als Caitlyn.

## Fortgeschrittener Tipp

Übe das **Q-Reset auf Minions für Jungle-Escapes**. Wenn du in der Nähe vom River oder Tri-Bush einen Wall-Jump machst, queue eine **Q (Pierce)** auf die Minion-Wave hinter der Wand: tötet der Speer den Minion, fliegt der Speer weiter und lässt dich im selben Frame über die Wand hopen. Der Trick lässt dich aus einem Gank entkommen, der dir den River-Path abgeschnitten hat, weil das Hop-Frame als Bewegung zählt und die Wand-Hitbox umgeht. Bind eine Quick-Cast-**Q**-Taste, um Reaktionszeit zu sparen.
