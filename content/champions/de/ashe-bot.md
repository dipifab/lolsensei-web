---
title: "Ashe ADC Build & Guide — Patch 16.9"
slug: "ashe-bot"
language: "de"
patch: "16.9"
champion: "ashe"
role: "bot"
last_updated: "2026-04-29"
description: "Ashe ADC Bot Lane Guide für League of Legends Patch 16.9: Frost-Shot-Kiting-Setup, Marksman-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Ashe"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Marksman / Utility"
  abilities:
    - key: "P"
      name: "Frost Shot"
      description: "Jeder Auto-Attack slowed das Ziel. Crits machen keinen Bonus-Schaden, applizieren stattdessen einen stärkeren Slow. Fundament von Ashes Kiting (rückwärts gehen während du angreifst)."
      dd_spell_id: "Ashe_Passive"
    - key: "Q"
      name: "Ranger's Focus"
      description: "Stacks via Auto-Attacks aufladen. Bei Max-Stacks aktivieren für Bonus-Attack-Speed und jede AA wird zu einem Mehrpfeil-Salvo mit Bonus-Schaden. Haupt-DPS-Knopf."
      dd_spell_id: "AsheQ"
    - key: "W"
      name: "Volley"
      description: "Pfeilkegel mit 1200 Reichweite nach vorn. Jeder Gegner wird nur von einem Pfeil getroffen und kassiert den Frost-Shot-Slow. Hauptwerkzeug für Poke und Trade in der Lane."
      dd_spell_id: "Volley"
    - key: "E"
      name: "Hawkshot"
      description: "Schickt einen Falken überall auf der Map für 5 Sekunden Vision (die Fähigkeit, im Fog of War zu sehen). 2 Charges. Für Objective-Scouting nutzen, nicht für Schaden."
      dd_spell_id: "AsheSpiritOfTheHawk"
    - key: "R"
      name: "Enchanted Crystal Arrow"
      description: "Globaler Skillshot (nicht-zielgerichtete Fähigkeit, die in einer geraden Linie fliegt). Stunt den ersten getroffenen Champion; längere Flugzeit = längerer Stun (bis ~3.5s)."
      dd_spell_id: "EnchantedCrystalArrow"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "E" }
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
    - { dd_id: "3087", name: "Statikk Shiv" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3031", name: "Infinity Edge" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "gegen HP/Armor-Stacker (Cho'Gath, Sion, Malphite, Ornn) — % Armor Pen wandelt AA wieder in echten Schaden um"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "gegen Healing-Comps (Soraka, Vladimir, Aatrox) — appliziert Grievous Wounds (halbiert den gegnerischen Heal)"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "gegen Assassinen oder Diver (Zed, Kha'Zix, Talon) — Ghost-Passive lässt dich beim Kiten durch Einheiten laufen"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "gegen schweren Poke oder Burst — großer Lifesteal-Heal + Overshield-Puffer"
  base_combo: ["W", "AA", "Q", "AA"]
  win_condition: "Stack Frost-Shot-Slows in Teamfights, kite hinter deine Frontline mit Q-geboosteten AA und finishe isolierte Ziele mit Cross-Map R für Free-Objective-Control."
  weakness: "Langsamste Auto-Attack-Base-Movement-Speed aller Marksmen. Kein Dash, kein Reposition Tool — Diver und Assassinen, die in Melee-Range kommen, löschen sie, wenn ihr Support nicht peelen kann."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["vayne", "twitch", "kalista"]
      archetype: "Kurzreichweiten-Marksmen ohne Early-Poke"
      reason: "Ashes W hat 1200 Reichweite und Frost-Shot-Slow; sie pokt sie aus deren 500-550 AA-Range raus und macht jede Annäherung zum gewonnenen Trade."
    - examples: ["kog-maw", "senna"]
      archetype: "Immobile Scaling-Carries"
      reason: "Cross-Map R löscht sie auf Objective-Spawns oder bei Fountain-Reset-Fenstern. Ihr Kit hat keinen Dash, um dem Pfeil aus dem Fog of War zu entkommen."
    - examples: ["ornn", "sejuani"]
      archetype: "Langsame Tank-Frontlines ohne Mobile Dive"
      reason: "Ashe slowt die Frontline mit W + Auto-Attacks dauerhaft und zwingt Fights, lange genug zu dauern, damit ihre DPS-Items die Backline finishen. Die Tanks erreichen sie nicht, wenn sie mit ihrem Support kitet."
  counterpicks:
    - examples: ["caitlyn", "jhin", "varus"]
      archetype: "Langreichweiten-Marksmen mit Poke"
      reason: "Caitlyn 650 AA, Jhin 4. Schuss auf 750, Varus W stackt auf 925 — sie outpoken Ashes 600 AA und kratzen ihr jede Wave HP runter, ohne je in W-Reichweite zu kommen."
    - examples: ["lucian", "tristana"]
      archetype: "Hochmobile Marksmen mit Dashes"
      reason: "Lucians E und Tristanas W ignorieren Ashes Slow durch Sofort-Repositioning. Sie schließen die Distanz, ohne die Kiting-Steuer zu zahlen, die jeden anderen ADC trifft."
    - examples: ["pyke", "leona", "nautilus"]
      archetype: "Burst-Engage-Supports mit Hard CC"
      reason: "Ashe hat weder Dash noch Shield, um aus Lock-down-Ketten zu entkommen. Ein erfolgreiches Leona-Q oder Nautilus-Q nimmt sie aus dem Trade, bevor sie W zurückwerfen kann, und der Slow nützt nichts, wenn sie gestunt ist."
---

## Überblick

Ashe ist der einfachste Marksman in League — eine Champion-Rolle namens "ADC" (Attack Damage Carry: ein Ranged-Auto-Attacker, der ins Late-Game zur Hauptschadensquelle skaliert). Sie hat keinen Dash, kein Reposition Tool und die langsamste Auto-Attack-Base-Movement-Speed der Rolle. Im Gegenzug bekommt sie das zuverlässigste Utility-Kit aller ADC: jeder Auto-Attack slowt das Ziel, ihr **W** pokt (verteilt Chip-Schaden auf Distanz, um HP abzubauen, ohne sich auf einen Fight festzulegen) aus 1200 Spieleinheiten Reichweite (etwa eine halbe Bildschirmbreite) mit angehängtem Slow, und ihr **R** ist ein globaler Skillshot-Stun, der ihrem Team Free-Engages auf Objectives überall auf der Map gibt. Sie ist gebaut zum **Kiten** — rückwärts laufen während du angreifst, um Gegner auf Distanz zu halten — und um Picks (Eliminierung eines isolierten Gegners außerhalb eines Teamfights) für den Rest des Teams zu ermöglichen.

Ihr Lane-Plan: lande **W** auf den gegnerischen ADC bei jedem Cooldown, um ihn zu slowen und HP abzubauen, farme sicher mit Auto-Attacks und such nach Level-6-Plays mit **R**, sobald dein Support ein CC bereit hat (Crowd Control: Stuns, Slows, Roots, die den Gegner an Ort und Stelle festhalten). In Teamfights (5v5-Kämpfe, die Objectives wie Drake oder Baron entscheiden — neutrale Monster, die dem Team Buffs geben, das sie tötet) bleibt sie auf maximaler AA-Reichweite hinter ihrer Frontline (die Tanks/Bruiser, die den Fight eröffnen), aktiviert **Q** mit 4 Stacks (Q-Charges, die sich aus Auto-Attacks aufladen; der Counter ist unter ihrem Portrait) und kettet Slows auf jeden, der ihre Frontline berührt. Die schwerste Skill auf Ashe ist **R**-Prediction — Snipen mit einer Sekunde Pfeilflugzeit ist der Unterschied zwischen einem Free-Pick und einer verschwendeten Ult.

## Empfohlener Build

**Starter-Items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** (etwas AD + Lifesteal — heilt einen Anteil des verursachten Schadens) + 1 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**.

**Core-Items (in Reihenfolge):**

1. ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv** — First-Item-Power-Spike (der Moment, in dem ein Champion nach Fertigstellung eines Items spürbar stärker wird). Ashes häufige Auto-Attacks proccen (triggern) die Energized-Passive (Stack-Effekt, der Bonus-Magic-Damage auf einer aufgeladenen AA freisetzt) extrem schnell.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — Attack-Speed-Boots. Ashes geboostete Q skaliert mit Attack Speed, also helfen sie in jedem Fight ab Minute 8.
3. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — fügt jedem Auto-Attack zwei Seitenpfeile hinzu. Die Seitenpfeile applizieren Frost-Shot-Slow auf nahe Ziele, also slowt Ashe das gesamte Gegnerteam in einem Teamfight, indem sie nur den Frontline-Tank angreift.
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — Late-Game-Crit (Critical Strike: Chance, dass eine AA ~175% Schaden macht) Multiplikator. Hier wird Ashes geboostete Q von "macht ordentlich weh" zu "löscht Squishys in 2 Sekunden" (Squishy: Champion mit niedrigen Defenses).

**Situative Items:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — gegen HP/Armor-Stacker (Cho'Gath, Sion, Malphite, Ornn). Prozentuale Armor-Penetration ignoriert einen festen Anteil der gegnerischen Armor, also sterben Tanks gleich schnell wie Squishys.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — gegen Healing-Stacking-Comps (Soraka, Vladimir, Aatrox). Appliziert Grievous Wounds (Statuseffekt, der das vom Gegner empfangene Healing halbiert).
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — gegen Assassinen oder Diver (Zed, Kha'Zix, Talon — Champions, die dafür gemacht sind, in die Backline zu springen). Die Ghost-Passive lässt dich beim Kiten durch gegnerische Minions und Champions laufen.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — gegen schweren Poke (langreichweitiger Chip-Schaden von Artillery Mages) oder gegen Burst-Comps. Lifesteal heilt dich mitten im Fight; bei Overheal speichert er HP als Schild.

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** ist die einzig korrekte Wahl auf Ashe. Die Attack Speed wandelt sich direkt in geboosteten Q-DPS um.

**Skill-Order:** Maxe **Q** zuerst (mehr Bonus-AD pro geboosteter AA + längere Aktivdauer). Maxe **W** als zweites (Cooldown fällt von 18s rank 1 auf 4s rank 5 — das ist der Lane-Poke-Spam). Maxe **E** zuletzt (nur Utility). Punkt in **R** auf Level 6, 11, 16.

**Runen:** Primärbaum **Precision** (der AA-skalierende Baum) mit **Lethal Tempo** (extra Attack Speed, wenn du einen Champion durchgehend auto-attackst), **Triumph** (heilt auf Takedown), **Legend: Alacrity** (mehr Attack-Speed-Scaling pro Stack), **Coup de Grace** (extra Schaden gegen Gegner unter 40% HP). Sekundärbaum **Inspiration** mit **Biscuit Delivery** (kostenlose Mana/HP-Biscuits in der Lane) und **Cosmic Insight** (mehr **Flash**- und **R**-Uptime).

## Wichtige Matchups

- **Caitlyn:** Härtestes Lane-Matchup. Sie hat 650 AA-Reichweite gegen deine 600, längere Trap (W) und einen Hook (E) auf 1300. Versteck dich hinter Minions, wenn sie Traps platziert; lass deinen Support nur dann auf sie engagen, wenn sie overextend (zu weit über ihre eigenen Minions hinauslaufen, kein Escape bei Ganks). Power-farme sicher (konzentrier dich nur aufs Sammeln von Minion-Gold ohne Risiken) bis ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv** online geht, dann such nach Cross-Map-**R**-Picks.
- **Lucian:** Verliert gegen Ashe auf Level 1, kippt aber auf Level 2 mit Q + E Combo. Spar **W** für den Moment, wenn er Double-AA in dich rein macht (zwei Auto-Attacks hintereinander), und lauf dann weg, während er mitten im Combo feststeckt. Tradee niemals nach seinem **E** — sein Dash macht ihn unfangbar, bis er wieder im Cooldown ist.
- **Vayne:** Pre-6 Free-Farm: sie hat 550 Reichweite und keinen Slow. Push die Wave (schick deine Minions zu ihrem Turm), harasse (verteil kleinen Chip-Schaden, um ihre HP abzubauen) mit **W** bei jedem Cooldown. Nach Level 6 gibt ihr Ult ihr Unsichtbarkeit auf dem Q-Dash; jag sie nicht in die Bushes (kleine Geländeflächen, die Sicht blockieren).
- **Jhin:** Outgepokt auf lange Distanz von seinem W (Poke-Skillshot). Bleib hinter deiner Front-Minion-Line; sein W slowt ihn selbst, wenn er einen Minion zuerst trifft. Bestrafe ihn während seines Reload (4-Schuss-Magazin + manuelles Reload-Fenster von 2.5 Sekunden).
- **Draven:** Verliert einen AA-Krieg direkt — seine Q-Äxte machen pro AA viel mehr Schaden als deine Basis. Vermeide 1-für-1-Trades; commit nur, wenn seine Äxte nicht in seinen Händen sind. Bau ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** früher als gewohnt, wenn er eine 3-Kill-Lead nimmt.

## Power Spikes & Siegbedingungen

- **Level 1:** Stark mit **W**. Der 1200-Reichweite-Cone ist das beste Lvl-1-Trade-Tool aller ADC (ein "Trade" ist ein kurzer Schadenswechsel in der Lane, kein voller Kill-Versuch). Nimm einen Free-Trade auf den gegnerischen ADC, wenn er für ein cs (Creep Score: Last-Hit eines Minions, um sein Gold zu nehmen) hochläuft.
- **Level 6:** Erste **R** schaltet Lane-Kills mit jedem CC-Support frei. Hat dein Leona / Nautilus / Pyke Ult, ist R + ihr Engage = garantierter Kill auf den gegnerischen ADC, falls er nicht mit voller HP unter dem Turm steht.
- **![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) Statikk Shiv komplett (~ Minute 11-13):** Waveclear (das Säubern der gegnerischen Minion-Wave mit AOE-Schaden) kippt. Du kannst die Wave mit W + 2 AAs shoven und dann roamen (die Lane verlassen, um Verbündeten zu helfen) für Cross-Map-**R**-Plays auf Drake oder Mid-Skirmishes (kleine Kämpfe zwischen 2-3 Spielern im River oder im Jungle).
- **![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge online (~ Minute 26-30):** Geboostete Q mit Crits schmilzt die Backline in 2-3 Sekunden. Erzwing ab hier einen Teamfight an jedem Objective.

## Häufige Fehler

- **Q bei niedrigen Focus-Stacks aktivieren.** **Q** macht nur Schaden, wenn du 4 Stacks hast (sichtbar unter deinem Portrait). Frühere Aktivierung verschwendet 30 Mana für eine schwache Q. Auto-attack erst 4-mal, dann drück Q.
- **R on-Cooldown in der Lane werfen.** **R** ist das wertvollste Tool deines Teams (Cross-Map-Stun für Drake-Fights, Baron-Setups). Sie für Objective-Fights aufzusparen ist fast immer wertvoller, als sie für einen Lane-Trade zu verbrennen. Ausnahme: ein letales Kill-Window, in dem R den Kill garantiert.
- **Im Fight beim Auto-Attacken stehenbleiben.** Ashe ist zum Kiten gebaut; stehenbleiben heißt, Skillshots zu fressen, die du sonst dodgen würdest. Geh einen Schritt zwischen jeder AA, um das gegnerische Timing zu verwirren.
- **Wave ohne Vision overpushen.** Ashe hat keinen Escape. Pushst du am Mid-River vorbei, ohne dass dein Support Tribush und River wardet, killt der gegnerische Jungler dich gratis. Immer **W** in den Bush, den du nicht siehst, bevor du vorgehst.
- **W on-Cooldown auf Minions.** **W** kostet 75/70/65/60/55 Mana und der Slow ist das stärkste Lane-Harass-Tool. Spar **W** für den gegnerischen ADC, nicht für die Wave.

## Fortgeschrittener Tipp

Übe das **Flash R** — wenn ein Gegner gerade in den Fog of War mit niedriger HP fliehen will, **Flash** in die Richtung, in die er läuft, dann sofort **R** abfeuern. Der Flash repositioniert dich 400 Einheiten nach vorn, das heißt **R** legt 400 Einheiten weniger zurück, bevor sie trifft — aber die Stundauer skaliert mit der zurückgelegten Distanz, also funktioniert das nur als Finisher auf Near-Execute-Targets (Gegner schon niedrig genug, dass jeder zusätzliche Hit sie killt). Die Win-Condition: der Gegner glaubt, er sei mit 200 HP entkommen, weil Ashe noch 1500 Einheiten weit weg ist, und sieht nie das Flash + R, das die Verfolgung beendet.
