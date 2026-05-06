---
title: "Kennen Top Build & Guide — Patch 16.9"
slug: "kennen-top"
language: "de"
patch: "16.9"
champion: "kennen"
role: "top"
last_updated: "2026-05-05"
description: "Kennen Top Lane Guide für League of Legends Patch 16.9: Starter, AP-Bruiser-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein fortgeschrittener Tipp."
quick_learn:
  champion_dd_id: "Kennen"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Teamfight Engager"
  abilities:
    - key: "P"
      name: "Mark of the Storm"
      description: "Jede Fähigkeit von Kennen legt einen Mark-Stack auf das Ziel. Drei Stacks stunnen es. Das ist der Motor des Kits — jede Combo zielt auf den Triple-Stack."
      dd_spell_id: "Kennen_Passive"
    - key: "Q"
      name: "Thundering Shuriken"
      description: "Linearer Skillshot mit magischem Schaden, legt einen Mark-Stack. Der Range-Poke und der einfache erste Stack auf einem Ziel."
      dd_spell_id: "KennenShurikenHurlMissile1"
    - key: "W"
      name: "Electrical Surge"
      description: "Passiv on-hit (Effekt beim Treffer): jede 5. Auto macht magischen Bonusschaden plus einen Mark. Aktiv: detoniert einen magischen Burst auf jeden nahen Gegner mit Mark."
      dd_spell_id: "KennenBringTheLight"
    - key: "E"
      name: "Lightning Rush"
      description: "Kurzer Dash durch Einheiten, legt einen Mark und gibt Energy bei Treffer zurück. Am Ende erhält Kennen ein paar Sekunden Attack Speed. Mobilitäts- und Repositionierungs-Tool."
      dd_spell_id: "KennenLightningRush"
    - key: "R"
      name: "Slicing Maelstrom"
      description: "Channel-AOE um Kennen herum. Jeder Tick macht magischen Schaden und legt einen Mark auf Gegner darin. Bei gruppierten Gegnern stunnt es das ganze Team in 2 Sekunden."
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
      against: "gegen lange Fights und Bruiser Top (Sett, Darius, Mordekaiser): Sustain im Fight plus True Damage"
    - dd_id: "4645"
      name: "Shadowflame"
      against: "gegen squishy Backline ohne Magic Resist: extra Magic Pen unter 35% HP passt zu R-Finishern"
    - dd_id: "3135"
      name: "Void Staff"
      against: "sobald ein Priority Target des Gegners ein Magic-Resist-Item kauft"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "gegen Healing-stackende Gegner (Vladimir Top, Dr. Mundo, Yorick)"
  base_combo: ["Q", "E", "R", "W", "AA"]
  win_condition: "Flash + R in die gegnerische Back Line (die Reihe der gegnerischen ADCs und Mages) im Teamfight, um die Passive auf mehrere Ziele gleichzeitig dreifach zu stacken. AOE-Stun + W-Detonate gewinnt den Fight."
  weakness: "Kein verlässliches hartes CC außer R, und R ist ein Channel, auf den du dich festlegen musst — Point-and-Click-Stuns oder Knock-ups (Pantheon W, Camille E2) brechen die Ulti, bevor die Stacks landen."
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
    primary_rationale: "Domination Primary: Electrocute proct mit Q + W-Detonate + Auto, Burst auf jeden Triple-Stack. Taste of Blood gibt Lane-Sustain, Sixth Sense pingt versteckte Wards in Side Lanes (essenziell für Flank-Engages), Ultimate Hunter senkt R-Cooldown."
    secondary_rationale: "Resolve Secondary: Kennen will mit R im Nahkampf reintauchen, also heilt Second Wind dich beim Poke in der Lane und Bone Plating absorbiert die ersten drei Treffer beim All-In (voller Trade bis zum Kill)."
    secondary_alternative: "Gegen harten Ranged-Poke (Vladimir, Lillia Top), tausche Resolve gegen Sorcery mit Nimbus Cloak (extra Movement Speed nach Summoner Spell, um R schneller zu landen) und Transcendence für Ability Haste."
matchup_draft:
  pick_into:
    - examples: ["garen", "sett", "darius"]
      archetype: "Melee-Bruiser ohne Gap-Closer"
      reason: "Kennens Auto-Attack-Range (~550) übertrifft ihre Laufgeschwindigkeit. Q-Poke und E-Repositionierung farmen sicher außerhalb ihrer Threat Range bis zum Power Spike auf Level 6."
    - examples: ["tryndamere", "yorick"]
      archetype: "Splitpusher ohne verlässliches CC"
      reason: "Sie können dich nicht festsetzen, um den R-Channel zu verhindern. Sobald Kennen ein bis zwei Items hat, ist jeder Teamfight, in dem er flankt, ein 3-Stack-Stun auf mehrere Gegner — kein Splitpusher allein in einer Side Lane gleicht das aus."
    - examples: ["udyr", "olaf"]
      archetype: "Kurzdistanz-Juggernauts"
      reason: "Du kitest sie mit dem E-Dash und der on-hit-W-Passive. Ihre Stickiness hängt davon ab, jeden Schritt an dir zu kleben, und deine Range plus Dash-Refresh halten sie außerhalb ihrer Auto-Attack-Range."
  counterpicks:
    - examples: ["pantheon", "camille"]
      archetype: "Bruiser mit Point-and-Click Hard CC"
      reason: "Pantheons W-Stun (Single Target, instant) oder Camilles E-Second-Cast-Root brechen deinen R-Channel mitten im Cast — du verlierst den AOE-Stun, bevor ein einziger Stack landet, und der Engage wird zur verschwendeten Ulti."
    - examples: ["vladimir", "lillia"]
      archetype: "Ranged Top-Laner mit Sustain"
      reason: "Sie überreichen deinen Q in den ersten 6 Leveln und heilen sich vom Poke. Ohne Gap-Closer zieht Kennen in jedem kurzen Trade den Kürzeren und liegt bis Minute 8 in CS zurück."
    - examples: ["sion", "galio"]
      archetype: "Tanks mit Magic Resist und Cleanse-Passives"
      reason: "Sions Tod-Passive und Galios W-Magic-Damage-Shield neutralisieren deine Burst-Fenster. Drei Mark-Stacks stunnen weiterhin, aber die W-Detonate macht halben Schaden, sobald sie MR stacken."
---

## Überblick

Kennen ist ein Ranged-AP-Yordle, der Top Lane als Flank-Engager spielt (der Spieler, der um den Fight herumläuft, um aus einer Richtung zu kommen, die die Gegner nicht beobachten). Das ganze Kit dreht sich um eine Mechanik: die Passive **Mark of the Storm (P)** stackt dreimal und stunnt. Jede Fähigkeit — **Q**, **W** aktiv, **E**-Dash, jeder Tick von **R** — legt einen Stack, also stunnt ein sauberer Engage das ganze gegnerische Team in zwei Sekunden. Er hat eine ordentliche Lane Phase dank einer Auto-Attack-Range von ~550, die die meisten Bruiser überreicht, aber seine Identität schaltet sich auf Level 6 frei: Er ist DER Top-Lane-Flank-Engager, der Mid-Late-Teamfights auf den Kopf stellt.

Sein Game Plan ist einfach zu beschreiben und anspruchsvoll auszuführen: sicher farmen mit **Q**-Poke (Range-Schaden, um die HP zu drücken, ohne sich auf einen Fight festzulegen) und der on-hit-**W**-Passive (zusätzlicher Effekt alle paar Auto-Attacks), Druck für Objectives halten, dann **Flash + R** in die gegnerische Back Line (die Reihe der squishy Carries — hoher Schaden, wenig HP wie ADC und Mages — hinter den Tanks). Die Skill Expression liegt an zwei Stellen: Energy-Management (Kennen verbrennt Energy schnell und kann ohne sie nicht casten) und die Wahl des richtigen Teamfight-Winkels, damit dein **R**-Channel nicht von einem Point-and-Click-Stun unterbrochen wird (ein Stun, den der Gegner per Klick auf dich anwendet, ohne Zielen).

## Empfohlener Build

**Starting Items:** Doran's Shield + 2 Health Potions. Doran's Ring ist akzeptabel, wenn die Lane null Auto-Attack-Harass hat und du frühe Energy-Regen willst.

**Core Items (in order):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — der Burn (Schaden über die folgenden Sekunden, nicht sofort) skaliert mit der Multi-Target-Natur von **R**. Jeder Tick auf jeden Gegner proct den Burn und schmilzt Tank-HP-Pools.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flache Magic Penetration für die squishy Back Line, die du am liebsten stunnen und löschen willst.
3. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — kauft dir eine Stasis nach **Flash + R**, das gegnerische Team verbrennt seine Cooldowns auf einem eingefrorenen Ziel, während deine Stun-Stacks fertig landen.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — Late-Game-AP-Multiplikator. Der **R**-Burst, den er produziert, one-shottet Squishies, die kein Magic Resist gekauft haben.

**Situational Items:**

- ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — ersetzt Liandry's gegen Bruiser-Top-Lanes (Sett, Darius, Mordekaiser). Sustain im Fight (Heilung/Regen während des Kampfes) plus True-Damage-Konversion lassen dich die unvermeidliche zweite Welle Melees auf dir überleben.
- ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — gegen squishy Back Line ohne Magic Resist. Die HP-Threshold-Passive (extra Magic Pen unter 35% HP) passt zu **R**-Finishern.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — sobald irgendein Priority Target ein Magic-Resist-Item kauft.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — gegen Healing-stackende Gegner (Vladimir Top, Dr. Mundo, Yorick).

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** ist Default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** ist akzeptabel gegen 2+ Magic-Damage-Threats mit Hard CC.

**Skill Order:** Maxe **Q** zuerst (höchster Base Damage, niedrigster Cooldown — dein Haupt-Poke und Stack-Tool), **W** als zweites (besserer In-Fight-Burst), **E** zuletzt. Setze einen Punkt in **R** auf Level 6, 11 und 16.

**Runen:** Primary **Domination** mit **Electrocute**, **Taste of Blood**, **Sixth Sense**, **Ultimate Hunter**. Secondary **Resolve** mit **Second Wind** und **Bone Plating** für Lane-Durability.

## Wichtige Matchups

- **Garen:** Du überreichst seine Auto-Attacks. Poke mit **Q**, lass seine **E** (das Spinning) niemals an dich kommen, und nutze den **E**-Dash durch ihn, wenn er die **Q**-Silence committet. Lane gewinnbar ab Level 3.
- **Sett:** Bleib außerhalb seiner **W**-Ladebar — jede Auto, die du fängst, füllt sie. Trade nur, wenn seine **W** leer ist; dashe durch ihn, um sein Facing zu brechen, falls er die **E**-Stun landet.
- **Pantheon:** Das härteste Matchup. Seine **W** ist Point-and-Click und canceltt deine **R** in jedem Fight. Bau ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** vor dem zweiten Item, und engage nie mit **R**, solange seine **W** nicht im Cooldown ist.
- **Vladimir:** Lange Lane, du fällst in CS zurück. Nimm Doran's Shield + Second Wind, halte **Q** als Punish für seinen Pool, und ruf Jungle-Druck vor Level 6, weil du keinen langen Trade gewinnst.
- **Mordekaiser:** Ausgeglichenes Matchup, das auf der **R** kippt: sein Death Realm cancelt das Peel deines Teams, aber du bringst AOE-Stun mit. Ist seine **R** up, engage nicht; ist sie unten, kannst du deine in seine Back Line werfen.

## Power Spikes & Siegbedingungen

- **Level 6:** Erstes **Slicing Maelstrom**. Kombiniert mit **Flash** ist das der Moment, in dem Kennen ein Champion wird, der Spiele entscheidet — Flash + R in ein gruppiertes gegnerisches Team stunnt alle in Reichweite.
- **Level 9 (Q gemaxt):** **Thundering Shuriken** hat 4 Sekunden Cooldown auf Rank 5. Lane Phase und Side-Lane-Farm werden trivial; du kannst sogar Türme mit sicheren **Q**-Harass runterpoken.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ Minute 14-16):** Erster Teamfight-Item-Spike. Gruppe dich mit deinem Team für jeden Drake-Fight; deine **R** mit 2 Items löscht squishy Supports und ADCs.
- **Drei Items + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ Minute 24-28):** Burst-Schwelle gekippt. Deine **R** + **W**-Detonate-Combo one-shottet jede Back Line, die kein Magic Resist gebaut hat. Erzwing Baron und Late-Game-Objective-Fights.

## Häufige Fehler

- **R engagen ohne Flash up.** Kennen hat keinen Gap-Closer zu einer Back Line. Ohne **Flash + R** erwischt du nur die Front Line (die Tanks und Bruiser, die den Fight öffnen) — und ihren Tank zu stunnen bringt dir nichts, während ihre Carries dich kiten (rückwärtslaufen beim Angreifen, dich außerhalb ihrer Auto-Range halten) bis zum Tod.
- **Deine ganze Energy in der Lane verbrennen.** Kennen hat kein Mana, aber Energy, die langsam regeneriert. Spamme **Q** auf der Wave, und wenn der gegnerische Jungler kommt, bist du leer. Halt immer ~50 Energy für den **E**-Dash zur Flucht bereit.
- **W zuerst maxen.** Der aktive Schaden der **W** ist größer als der von **Q**, aber **Q** hat 4 Sekunden Cooldown auf Rank 5 gegenüber 6 bei **W**. **Q** zuerst gemaxt heißt mehr Stacks pro Minute und mehr nachhaltigen Poke; **W** bleibt bis Level 8 auf Rank 1.
- **Sich selbst die R cancelen, indem man den Ring verlässt.** **R** ist ein Channel, der an deinem Champion verankert ist. Verlässt du die Teamfight-Reichweite, treffen die Ticks die Gegner nicht mehr. Steh in der Mitte des Fights, nicht am Rand — Zhonya's existiert genau dafür.
- **Die on-hit-W-Passive vergessen.** Jede 5. Auto triggert magischen Bonusschaden plus einen kostenlosen Mark-Stack. In einem 1v1-Trade webe 2 Autos zwischen **Q** und **E** ein, um den Gegner in einen unerwarteten Stun zu locken.

## Fortgeschrittener Tipp

Der stärkste Kennen-Flank ist das, was High-Level-Spieler den "Blind Ult" nennen: aus dem Fog of War (nicht einsehbarer Bereich) Flashst du direkt in den größten gegnerischen Cluster und castest **R**, bevor sie dein Modell sehen. Ihr Reaktionsfenster ist der Audio-Cue der **R** plus dein Charakter-Render — etwa 0,4 Sekunden — kürzer als die Zeit, um aus der Channel-Reichweite zu treten. Um das aufzubauen, muss dein Team bereits in einem Fight sein (oder so tun), damit die Gegner nach vorne schauen, während du sie durch die unwarded Jungle herum umgehst. Üb das in Drake-Fights bei Minute 14-16: überquer den River, versteck dich im gegnerischen Raptor-Camp, warte, bis die Front Line auf dein Team engaget, dann Flash + R in die Back Line. Eine saubere Ausführung gewinnt ein 4v5-Objective in Unterzahl.
