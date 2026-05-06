---
title: "Diana Jungle Build & Guide — Patch 16.9"
slug: "diana-jungle"
language: "de"
patch: "16.9"
champion: "diana"
role: "jungle"
last_updated: "2026-04-29"
description: "Diana Jungle Guide für League of Legends Patch 16.9: Clear-Pfad, Scuttle- und Drake-Timings, Gank-Routen, AP-Burst-Build, wichtige Matchups, Power Spikes und häufige Fehler."
quick_learn:
  champion_dd_id: "Diana"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Moonsilver Blade"
      description: "Jeder dritte Basic Attack trifft umliegende Gegner im Kegel mit magischem Bonusschaden. Jeder Zauberwurf gibt 5 Sekunden Attack Speed — Hauptmotor des Jungle-Clears."
      dd_spell_id: "Diana_Passive"
    - key: "Q"
      name: "Crescent Strike"
      description: "Skillshot im Bogen, der Ziele 3 Sekunden mit Moonlight markiert. Die Markierung schaltet den E-Reset frei und ist dein Setup für Ganks."
      dd_spell_id: "DianaQ"
    - key: "W"
      name: "Pale Cascade"
      description: "Drei Orbs, die bei Berührung magischen Schaden verursachen und einen Schild geben. Stark im Duell und beim Camp-Clear ohne HP-Verlust."
      dd_spell_id: "DianaOrbs"
    - key: "E"
      name: "Lunar Rush"
      description: "Gezielter Dash mit magischem Schaden. Cooldown wird bei Q-markiertem Ziel zurückgesetzt — der Motor deines Gap-Close."
      dd_spell_id: "DianaTeleport"
    - key: "R"
      name: "Moonfall"
      description: "Zieht Gegner heran und slowt sie, dann Explosion auf Diana mit magischem Flächenschaden. Einziges CC im Kit (CC = Crowd Control, Bewegungs- oder Aktionssperren): kurze Reichweite."
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
      against: "gegen Hard-Engage-Tanks (Malphite, Sejuani, Leona) — Stasis dodgt ihre CC-Chain nach deiner R"
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "gegen Comps mit zwei oder mehr HP-starken Frontlines (Cho'Gath, Ornn): Burn skaliert mit HP"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap, sobald ein Priority-Target Magic Resist baut (Mercury's Treads, Spirit Visage)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "gegen Comps mit gestapeltem Healing (Soraka, Vladimir, Dr. Mundo, Aatrox)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "gegen magisches Single-Target-CC (Ahri Charm, Lissandra R, Twisted Fate Stun)"
  base_combo: ["Q", "E", "R", "W", "AA"]
  win_condition: "Lande Q aus dem Fog, dashe mit E auf das markierte Ziel, R um es vom Team zu trennen, dann W und Basic-Attack-Reset mit dem Follow-up des Teams. Erzwinge ab Level 6 Fights um Objectives."
  weakness: "Kurze effektive Reichweite (E nur 825 Units). Champions mit starkem Disengage (Janna R) oder Peel reißen dich vom Carry; ohne Q-Mark kein zweiter Dash zum Entkommen."
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
      reason: "Diana gewinnt verlängerte Duelle in ihrer Jungle: Pale Cascade schildet eine Schadensrotation, dann resettet Lunar Rush auf der Q-Mark für ein Re-Engage, das sie nicht kiten können."
    - examples: ["nidalee", "elise", "shaco"]
      archetype: "Early-game gank-focused junglers"
      reason: "Ihr Power dippt hart bei Level 6, während Dianas R Mid-Game-Druck freischaltet. Match ihren First-Clear-Tempo und trade Objectives, bis Luden's Echo das Spiel kippt."
    - examples: ["amumu", "warwick"]
      archetype: "Slow-clearing low-mobility junglers"
      reason: "Diana cleart schneller mit Passive-Resets und ist als Erste am Scuttle Crab. Counter-jungle die hinteren Camps nach jedem Drake — sie können nicht rechtzeitig rotieren."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "vi"]
      archetype: "Front-loaded burst junglers with hard CC"
      reason: "Sie invaden Level 3, bevor Diana E hat, und brechen ihren Clear. Ihr CC bypasst den Pale-Cascade-Schild: ein 1v1 in ihrer Jungle pre-6 ist ein gratis Kill für sie."
    - examples: ["jarvan-iv", "sejuani", "rammus"]
      archetype: "Tank junglers with built-in disengage or knock-up"
      reason: "Dianas R wirkt nur in Melee-Reichweite — diese Counter-Engage-Tools werfen sie aus der Pull-Window, bevor Moonfall den Channel beendet, und verschwenden ihr einziges CC."
    - examples: ["udyr", "olaf"]
      archetype: "Sustained-damage bruisers with cleanse or unstoppable"
      reason: "Sie laufen durch Moonfall durch (Olaf R cleanst CC, Udyr R ignoriert den Pull) und out-DPSen Diana, sobald ihr Schild bricht — sie hat keine zweite Escape."
---

## Überblick

Diana ist ein Diver mit magischem Schaden: Melee-Assassin mit eingebautem Schild, kostenlosem Dash auf markierte Ziele und einem der stärksten Ein-Knopf-Engages im Spiel (ein Engage = die Aktion, die einen Fight startet). In der Jungle tauscht sie frühe Ganks gegen schnelles Clearen und snowballt ab Level 6 — ein Snowball ist der frühe Vorsprung, der mit der Zeit wächst (Kill → Gold → Item → mehr Kills). Sobald **Lunar Rush (E)** einen Kill in einen zweiten Dash verkettet, wird sie zum ultimativen "drück R, lösch den Carry"-Pick. (Ein Diver ist ein Melee-Champion, der auf die Back Line des Gegnerteams springt.)

Ihr Game Plan als Junglerin: ersten Clear mit **Pale Cascade (W)** und dem On-Hit von **Moonsilver Blade (P)** durchziehen, gegen 3:30 den **Scuttle Crab** holen (das Flusskrabb, das Vision und einen kleinen Speed-Shrine gibt), dann mit Vision-Setup Lanes ganken. Ab Level 6 ist jeder Fight nahe Drake oder Rift Herald eine Teamfight-Win-Condition — **Moonfall (R)** zieht Priority Targets rein und dein Team räumt auf.

## Empfohlener Build

**Starter-Items:** ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** + Refillable Potion. Das Gustwalker-Pet gibt Movement Speed außerhalb des Kampfes — perfekt für Dianas gank-lastiges Mid Game. Skip Mosstomper (Sustain-Pet): deine **W** schildet bereits einen Clear-Cycle.

**Core items (in order):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — erster Burst-Spike (Burst = hoher Schaden in 1-2 Sekunden), AP und Ability Haste. Die Bolts shredden squishy Ziele in dem Moment, in dem du E auf sie bringst.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat Magic Penetration. Standard-Boots in 95% der Spiele.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — extra Burst, der HP-Threshold-Passive (Passive, der aktiviert, wenn der Gegner unter eine HP-Schwelle fällt, hier 35%) passt perfekt zu deinem R-into-E-Finisher.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — Late-Game-Scaling-Multiplikator. Dein höchster AP-Slot in einem einzelnen Item.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — gegen Hard-Engage-Tanks (Malphite, Sejuani, Leona). Zünde den Stasis-Active (du wirst unverwundbar, kannst dich aber 2,5 Sekunden weder bewegen noch handeln) direkt nach R, sodass das gegnerische Follow-up-CC ins Leere geht.
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — wenn das Gegnerteam zwei oder mehr HP-starke Frontlines hat (Cho'Gath, Ornn): der Burn skaliert mit deren HP-Pool und tickt, während du repositionierst.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — sobald ein Priority Target ein Magic-Resist-Item baut (Mercury's Treads, Spirit Visage).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — gegen Comps mit gestapeltem Healing (Soraka, Vladimir, Dr. Mundo, Aatrox).
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — gegen magisches Single-Target-CC (Crowd Control: Stuns, Roots, Charms) wie Ahri Charm oder Lissandra R.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** ist der Default. Wechsle zu ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** gegen schwere AD-Comps mit zwei AD Threats, oder Mercury's Treads gegen viel magisches CC.

**Skill order:** Maxe **Q** zuerst (Waveclear, extra Q-Schaden, längere Moonlight-Mark-Window). Maxe **W** als Zweites (Schildwert und Clear Speed). **E** zuletzt — sie gewinnt zwar Reichweite pro Rang, aber was zählt ist der Cooldown-Reset auf Moonlight, nicht das rohe Scaling. Nimm **R** auf Level 6, 11, 16.

**Runes:** Primär **Domination** mit **Electrocute**, **Sudden Impact**, **Sixth Sense**, **Ultimate Hunter**. Sekundär **Sorcery** mit **Manaflow Band** und **Transcendence**. Stat Shards: Adaptive Force / Adaptive Force / Magic Resist (oder Health gegen viel Poke).

## Wichtige Matchups

- **Lee Sin:** Vermeide Level-2-Invades — sein Q-Q-Follow-up schlägt deinen W-Schild. Warde dein Top-Side Blue Buff und cleare bot-to-top, sodass du ihn am Scuttle mit ready Passive-Procs triffst.
- **Graves:** Du out-duellierst ihn nach Level 6. Engage aus dem Fog (der unwardete Teil der Jungle, Fog of War) mit **Q**, sodass die Reichweite seines Dashs die Mark nicht dodgen kann; ist Moonlight auf ihm, ist **E** ein garantierter Gap-Close (Gap-Close = Fähigkeit, die Distanz zum Gegner schließt).
- **Elise:** Power-Spike-Race. Sie gewinnt die Level-3-Ganks; du gewinnst den Level-6-Fight. Match ihren First-Clear-Tempo, hover Drake mit Vision, sodass sie ihn nicht solo nehmen kann.
- **Jarvan IV:** Hartes Matchup. Sein E-Q-Knock-up cancelt deinen **R**-Channel. Warte, bis er seine Combo zuerst commitet, dann E auf ihn für den Trade. Kaufe ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** früher als üblich.
- **Kha'Zix:** Gleiches Matchup, das ab Item 2 zu deinen Gunsten kippt. Er burstet dich in Melee-Reichweite; baite den Isolation-Jump bei niedriger HP, **W**-schilde seine Q, dann E-R-Reset. Laufe nie ohne Ward-Control durch deine eigene Jungle, sonst frisst du einen freien Isolated Jump.

## Power Spikes & Siegbedingungen

- **Level 3 (Q + W + E):** Vollständiges Kit. Erster Clear endet um 3:15 — rushe Scuttle Crab vor dem gegnerischen Jungler. Die River-Vision plus 50-HP-Shrine setzt den Rest deiner Map auf.
- **Level 6 (erste Moonfall):** Skirmish-Power am Mid-River (ein Skirmish ist ein kleiner Fight, meist 2v2 oder 3v3, kein voller Teamfight). Q aus einem Busch, E auf das markierte Ziel, R um beide ihrer Carries zusammenzuziehen — deine Laner bursten den Rest. Der stärkste Level-6-Pull-Effekt im Jungler-Pool.
- **![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Echo Completion (~ Minute 9-11):** Burst-Spike. Eine saubere Q-E-Combo auf ein squishy Ziel (Champion mit niedrigen Defenses, etwa ADCs und die meisten Mages) löscht 60-70% seiner HP, bevor sein Team reagieren kann. Erzwinge Fights um den zweiten Drake.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ Minute 22-25):** One-Shot-Schwelle gegen jede Squishy ohne Magic-Resist-Item. Suche Picks (Eliminieren eines isolierten Gegners außerhalb des Teamfights) beim Vision-Setup für Baron oder Elder Dragon.

## Häufige Fehler

- **Beim Gank-Approach in Wards laufen.** Dianas einziges Sneak-Tool ist der Fog. Pathe durch den Fluss oder zurück durch die eigene Jungle, und lass deinen Laner die Bush-Ward räumen, bevor du commitest.
- **R auf die Front Line werfen.** Deine R zieht alle in einem 475er-Radius — den Tank Richtung deines Teams zu ziehen ist genau das, was sie wollten. Warte, bis sich der Engage entwickelt, dann R die Back Line (Back Line = die Carries, die aus sicherer Position Schaden machen).
- **E auf Cooldown ohne Q-Mark nutzen.** Ohne Moonlight hat **E** 14 Sekunden Cooldown und kurze Reichweite. Immer erst Q: der Reset auf einem markierten Ziel ist das, was Diana mobil wirken lässt.
- **Beim ersten Clear das dritte Camp gierig nehmen.** Ist der gegnerische Jungler schneller (Graves, Shyvana, Karthus), verlierst du das Level-3-Invade-Race. Cross-Map-Check der gegnerischen Laner: ist Mid Missing, ist Full-Clear eine Falle.
- **Sich ohne Ausgang in einen Gank reincommiten.** Diana hat nach E keine eingebaute Escape. Hat die Lane keinen Slow oder Follow-up-CC, wird dein Engage zum 1v3, sobald die gegnerischen Summoners zurück sind.

## Fortgeschrittener Tipp

Übe die Combo **Q-Flash-E-R** als Teamfight-Starter. Während deine Q noch fliegt, Flashe im Moment des Impacts vorwärts: das markierte Ziel erscheint neben dir, **E** chained sofort über den Moonlight-Reset, und deine **R** fängt ihre gesamte Back Line, gedrängt um den Carry. Die Combo gewinnt Fights, die du gar nicht gewinnen dürftest — aber sie verlangt die Muscle Memory, mitten in der Q-Animation zu Flashen, nicht nachdem das Projektil landet. Drille das im Practice Tool gegen einen stehenden Dummy, bis die Eingabereihenfolge automatisch sitzt.
