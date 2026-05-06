---
title: "Garen Top Build & Guide — Patch 16.9"
slug: "garen-top"
language: "de"
patch: "16.9"
champion: "garen"
role: "top"
last_updated: "2026-04-29"
description: "Garen Top Guide für League of Legends Patch 16.9: Starter-Items, Juggernaut-Bruiser-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Garen"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Juggernaut / Bruiser"
  abilities:
    - key: "P"
      name: "Perseverance"
      description: "Regeneriert HP außerhalb des Kampfes, solange du ein paar Sekunden keinen Schaden oder Fähigkeiten kassierst. Definiert das Hit-and-Retreat-Pattern."
      dd_spell_id: "Garen_Passive"
    - key: "Q"
      name: "Decisive Strike"
      description: "Movement-Speed-Burst und Cleanse von Slows. Die nächste Auto silenced das Ziel 1,5s und macht Bonus-Damage."
      dd_spell_id: "GarenQ"
    - key: "W"
      name: "Courage"
      description: "Passiv: Armor/MR-Stacks durch Kills. Aktiv: Shield + Tenacity, danach Fenster für Resterschadensreduktion."
      dd_spell_id: "GarenW"
    - key: "E"
      name: "Judgment"
      description: "AOE-Spin, der Gegnern in der Nähe 3s lang physischen Schaden zufügt. Sein wichtigstes Waveclear- und Sustained-DPS-Tool."
      dd_spell_id: "GarenE"
    - key: "R"
      name: "Demacian Justice"
      description: "Führt einen feindlichen Champion abhängig von fehlenden HP hin. Bonus-True-Damage gegen den kill-fedsten Gegner."
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
      against: "gegen AP-Top (Mordekaiser, Rumble, Vladimir) — Magic-Shield-Passiv rettet lange Trades"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "gegen Double-AD-Comps; entschärft das Bleed, das Glass Cannons im Teamfight bestraft"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "gegen 3+ AP-Threats; Movement-Speed-Passiv bringt dich zu den Fights"
    - dd_id: "3161"
      name: "Spear of Shojin"
      against: "Top-Tier-3rd-Item offensiv, wenn du massiv vorne bist und den Q-Ability-Haste-Cycle willst"
  base_combo: ["W", "Q", "AA", "E", "R"]
  win_condition: "Überlebe die Lane Phase mit Doran's Shield + Passiv-Sustain, scale bis Stridebreaker, dann flanke in Sidelane und nutze R, um kill-fed Carries im Teamfight zu exekutieren."
  weakness: "Kein Dash oder Blink, kein Range-Hard-CC. Anfällig gegen Kite (Quinn, Vayne) und Long-Range-Root (Lissandra, Mordekaiser-Pull). Verliert Lane, wenn du ohne W-Stacks overextendest."
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

## Überblick

Garen ist ein Melee-Juggernaut, dessen Wert aus anhaltender Präsenz kommt: Das Passiv **Perseverance** regeneriert Leben außerhalb des Kampfes, **Decisive Strike (Q)** schließt Distanzen und cleansed Slows, **Courage (W)** liefert ein flaches Tankiness-Fenster plus passive Resistenz-Stacks, **Judgment (E)** ist sein AOE-Schaden und Waveclear, und **Demacian Justice (R)** exekutiert Squishies basierend auf fehlenden HP, mit True-Damage-Scaling gegen den kill-fedsten Gegner. Er gehört zu den mechanisch einfachsten Champions, was bedeutet, dass das gesamte Skill Ceiling in **Map Awareness** und **Wave Management** liegt — nicht in der Combo-Ausführung.

In der Top Lane will er kurze Trades während des W-Aktivs und volle Wellen auf seiner Seite der Lane. Er ist ab Level 1 stark, aber nicht unsterblich; ohne Dash und ohne Hard-CC gewinnt jedes Matchup, das jederzeit disengagen kann (Quinn, Vayne) oder ihn aus der Distanz rooten kann (Lissandra, Mordekaiser-Pull), die Lane Phase, sobald du overextendest.

## Empfohlener Build

**Start-Items:** Doran's Shield + 1 Health Potion. Doran's Blade nur gegen Ranged-Tops, bei denen du früh all-innen musst, um CS zu denyen.

**Core-Items (in Reihenfolge):**

1. **Stridebreaker** — Slow auf **Q**, AOE-Aktiv zum Kleben an gekiteten Zielen, AD + HP beides nützlich.
2. **Plated Steelcaps** — die meisten Top Lanes sind Auto-Attack-lastig. Mercury's Treads nur gegen 3+ CC-Champions im gegnerischen Team.
3. **Dead Man's Plate** — Synergie mit dem Movement-Speed-Bonus von **Q**, die Impact-Passiv proct in deinem üblichen All-in-Pattern.
4. **Sterak's Gage** — Lebensretter gegen Burst-Fenster, AD-Scaling, das **R** später als die Basis-Schwelle exekutieren lässt.

**Situative Items:**

- **Maw of Malmortius** — gegen AP-Top (Mordekaiser, Rumble, Vladimir).
- **Death's Dance** — gegen Double-AD-Comps (entschärft das Bleed, das Glass Cannons bestraft).
- **Force of Nature** — gegen 3+ AP-Threats; das Movement-Speed-Passiv hilft dir, die Fights zu erreichen.
- **Spear of Shojin** — Top-Tier-3rd-Item offensiv, wenn du massiv vorne bist und den Ability-Haste-Cycle willst.

**Stiefel:** Plated Steelcaps standardmäßig. Mercury's Treads gegen Renekton+Lissandra+schweres CC.

**Skill Order:** Maxe **E** zuerst (DPS und Waveclear), **Q** als Zweites (Slow + Utility), **W** zuletzt (Passiv skaliert auch ohne Punkte). **R** auf 6, 11, 16.

**Runen:** Primär **Precision** mit **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Sekundär **Resolve** mit **Second Wind** + **Unflinching**, oder **Inspiration** mit **Magical Footwear** + **Cosmic Insight** für Stiefel-Timing auf Rotation-Maps.

## Wichtige Matchups

- **Darius:** Du verlierst Level 1, gewinnst nach Stridebreaker, wenn du seinen **E**-Pull vermeidest. Kauf Doran's Shield, spiel um den Q-Level für den Cleanse.
- **Fiora:** Hard-Counter gegen sie bis Level 6, solange du nicht vital'd wirst. Trade mit **W** aktiv, um den Wert ihrer Parry zu negieren, dann disengage.
- **Quinn:** Skill-Matchup; sie kited mit **Q**-Blind + **E**-Vault. Nimm Teleport, gib die erste Welle CS auf und roame ab Welle 4 mid.
- **Vayne Top:** Dein gefühlt schlimmstes Matchup. Bau Plated Steelcaps Level 1, nimm Doran's Shield + Second Wind, und spiel für den Jungler — du kannst nach Level 6 keine 1v1-Trades mehr gewinnen.
- **Mordekaiser:** Langsame Lane bis zum Death-Realm-Spike. Trade kurz, schlag **Q** + **E** an, wenn sein **W** auf Cooldown ist, und kauf Maw of Malmortius vor seinem zweiten Item.

## Power Spikes & Siegbedingungen

- **Level 2:** **Q** + **E** schaltet einen echten All-in frei. Wenn sie die Welle zu dir pushen und dein Jungler Top Side ist, ist das dein Kill-Window.
- **Level 6:** **Demacian Justice** lässt dich Low-HP-Ziele finishen, die vorher weggegangen wären. Track die gegnerischen Summoner; ohne Flash ist jeder Melee-Top in Execute-Reichweite.
- **Stridebreaker-Timing (~ 11 Minuten):** Wave-Kontrolle kippt zu deinen Gunsten. Slow-Shoven, Freeze oder Splitpush je nach Map-Stand. **Q** + Aktiv ist Gap-Close-Versicherung gegen Ganks.
- **Late-Game-Ace-Bedingung:** Mit dem **R**-Scaling gegen den kill-fedsten Gegner und Sterak's Gage wirst du zur Flank-Bedrohung, die Carries solo killed. Dein Job ist es, **E** im Fog aufzuladen und **R** zu casten, bevor sie gepeelt werden.

## Häufige Fehler

- **Mit wenigen W-Stacks vorlaufen.** Das **Courage**-Passiv gibt Resistenzen pro Stack; bei 0 Stacks (z. B. nach Respawn) meide lange Trades, bis du an Minions nachgeladen hast.
- **R als Eröffnung benutzen.** **R** ist zum Exekutieren da, nicht zum Setup. Eröffnest du damit, warnt die Cast Time den Gegner und du verlierst den Kill-Timer.
- **E auf statischer Welle.** Spin auf 3 Minions, die du in 2 Autos legst, verbrennt Mana und verrät der Lane deine Cooldown-Rotation. Heb **E** für Trades auf.
- **Den Silence von Q vergessen.** **Q** silenced 1,5 Sekunden. Q-engage immer auf einen Champion mid-cast (Lulu Polymorph, Karma Shield, Lissandra R) — der Silence unterbricht den Cast.

## Fortgeschrittener Tipp

Wenn eine fed gegnerische Carry deine **R**-Zielpriorität auslöst, kannst du sie mitten im Teamfight per Flash-**R** treffen, selbst wenn ihr Support einen Shield popt: Der Execute-Schaden von **R** ist True Damage auf das Prioritätsziel, und die meisten Shield-Budgets sind durch den Teamburst schon verbraucht, bevor dein Cast resolved. Heb Flash für diesen Play auf; das daraus entstehende Ace ist 2 Drake-Fights wert.
