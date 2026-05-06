---
title: "Fiddlesticks Jungle Build & Guide — Patch 16.9"
slug: "fiddlesticks-jungle"
language: "de"
patch: "16.9"
champion: "fiddlesticks"
role: "jungle"
last_updated: "2026-05-02"
description: "Fiddlesticks Jungle Guide für League of Legends Patch 16.9: AP-Build, Crowstorm-Engages, Schlüssel-Matchups, Power Spikes, häufige Fehler und ein Profitipp."
quick_learn:
  champion_dd_id: "Fiddlesticks"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Specialist"
  abilities:
    - key: "P"
      name: "A Harmless Scarecrow"
      description: "Der Trinket-Slot wird zu Effigy-Ladungen. Platziere falsche Vogelscheuchen für Vision; wer sie sieht, bekommt einen kurzen Fear, dann explodiert die Effigy."
      dd_spell_id: "Fiddlesticks_Passive"
    - key: "Q"
      name: "Terrify"
      description: "Zielt auf einen einzelnen Gegner. Schaden mit einem Spell während du unseen bist löst den Terrify automatisch aus. Lässt ihn 1-2.5s von dir wegrennen."
      dd_spell_id: "FiddleSticksQ"
    - key: "W"
      name: "Bountiful Harvest"
      description: "Channel, der nahen Gegnern HP entzieht (heilt dich). Am Ende Bonus-Hinrichtungsschaden. Hauptwerkzeug für Jungle-Clear und Sustain."
      dd_spell_id: "FiddleSticksW"
    - key: "E"
      name: "Reap"
      description: "Bumerang-Sense im weiten Kegel: verlangsamt alle Getroffenen und silenced wer in der Mittellinie steht. Hin und zurück, trifft zweimal."
      dd_spell_id: "FiddleSticksE"
    - key: "R"
      name: "Crowstorm"
      description: "1.5s Channel, dann Blink zur Zielposition mit AOE-Schaden pro Sekunde um Fiddle für 5s. Am besten aus dem Fog of War oder hinter Mauern wirken."
      dd_spell_id: "FiddleSticksR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "E" }
    - { level: 9, key: "W" }
    - { level: 10, key: "E" }
    - { level: 11, key: "R" }
    - { level: 12, key: "E" }
    - { level: 13, key: "E" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "gegen Single-Target-Magie-CC, das deinen R-Channel unterbricht (Lissandra R, Veigar E, Twisted Fate Stun)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "Swap wenn 2+ Gegner ein Magic-Resist-Item bauen (Schwelle ~200+ MR)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "gegen Heal-Stacking-Comps (Aatrox, Soraka, Vladimir, Dr. Mundo) — wendet Grievous Wounds an"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "wenn du extra Movement Speed brauchst, um zu chasen oder aus dem Fog in Crowstorm-Range zu laufen"
  base_combo: ["R", "Q", "E", "W"]
  win_condition: "Lande Crowstorm aus dem Fog of War auf 2+ gruppierten Gegnern an einem Objective. Bountiful Harvest beendet die Überlebenden während der Reap-Silence den Counter-Engage verhindert."
  weakness: "Der 1.5s R-Channel ist durch Single-Target-Hard-CC, Dashes und Cleanse/QSS unterbrechbar. Ohne Fog-Überraschung wird der Engage telegrafiert und das Team kitet dich raus."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8128
      name: "Dark Harvest"
      icon_path: "perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Dark Harvest stackt schnell in gruppierten Fights über Crowstorm-AOE. Sudden Impact procct beim R-Blink für extra Magic Penetration. Treasure Hunter beschleunigt Liandry's. Ultimate Hunter senkt den Crowstorm-Cooldown, um Ults zwischen Objectives zu verketten."
    secondary_rationale: "Sorcery sekundär: Manaflow Band fixt frühe Mana-Probleme im Jungle beim W-Spam; Gathering Storm scalet in einen Late-Game-Power-Spike, der mit Rabadon's Deathcap harmoniert."
    secondary_alternative: "Gegen schweren Single-Target-CC-Engage (Lissandra, Malzahar, Veigar) tausche Sorcery gegen Resolve mit Bone Plating (5s Schadensreduktion nach erstem Treffer) und Revitalize (+5% auf den Bountiful-Harvest-Heal)."
matchup_draft:
  pick_into:
    - examples: ["udyr", "warwick", "master-yi"]
      archetype: "Farm-Jungler ohne Flank-Tools"
      reason: "Sie scalen linear mit Farm, können aber deine Level-1-3-Invade nicht bestrafen. Ab Level 6 schlägt dein Crowstorm aus dem Fog ihre Face-Tank-Engages, weil sie keinen Pre-Cast-Escape haben."
    - examples: ["karthus", "ziggs", "xerath"]
      archetype: "Immobile Artillery-Teams, die sich gruppieren"
      reason: "Backline-Mages ohne Escape werden von einem Flank-Crowstorm one-shottet, weil sie nicht aus der AOE dashen können, bevor der Channel tickt."
    - examples: ["azir", "orianna", "viktor"]
      archetype: "Control-Mages ohne Dash"
      reason: "Deine R blinkt durch ihre Zone-Control, bevor sie ihr Setup-CC landen können. Wenn du aus dem Fog erscheinst, haben sie kein Tool zum Rauskommen."
  counterpicks:
    - examples: ["lee-sin", "elise", "kha-zix"]
      archetype: "Early-Game-Invader mit Tracking-Druck"
      reason: "Sie bedrohen deinen Jungle auf Level 2-3 und zwingen dich defensiv zu spielen. Fiddle hat keinen Pre-6-Escape: invadiert kann er nicht fliehen, und der Clear ist langsam ohne Effigy-Vision-Setup."
    - examples: ["yasuo", "samira"]
      archetype: "Carries mit Wind Wall / Projektil-Block"
      reason: "Wind Wall blockt deine Q (Einzelprojektil) und das meiste von Reap. Sie negieren deinen Engage-Cast im schlechtesten Moment und lassen dich Crowstorm channeln ohne Follow-up."
    - examples: ["lissandra", "malzahar", "veigar"]
      archetype: "Point-and-Click-Hard-CC-Mages"
      reason: "Sie unterbrechen deinen 1.5s Crowstorm-Channel ohne Skill — Lissandra R, Malzahar R, Veigar E machen aus deinem Engage verschwendete Ult und Sofort-Tod."
---

## Überblick

Fiddlesticks ist ein Hinterhalt-Jungler, dessen ganzes Kit um eine einzige Bewegung gebaut ist: aus dem Fog of War mit **Crowstorm (R)** in einen Fight blinken und das gegnerische Team in AOE wegbursten, solange es noch gruppiert steht. Außerhalb dieses Fensters ist er ein langsamer, immobiler Mage mit schwachem Duell und langer Channel-Ulti, also liegt der Unterschied zwischen Sieg und Niederlage fast komplett am *Vision-Setup* und am *Engage-Timing* (wann und wo du R drückst).

Der Spielplan: cleare den Jungle schnell mit **Bountiful Harvest (W)**, platziere Effigies am River und um den gegnerischen Jungle für Vision (und kurze Fears auf alle, die sie sehen), suche dann eine versteckte Flank-Position nahe des nächsten Objectives (Drake oder Baron). Wenn 2+ Gegner am Objective gruppiert stehen, blinke mit **R** rein, droppe **E** für Slow + Silence, dann **W** und **Q** um Fliehende zu finishen. Ohne den Überraschungsfaktor underperformt das Kit — Fiddle ist binär: Setup-Ace oder verschwendete Ulti.

## Empfohlener Build

**Startitems:** ![Emberknife](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1035.png) **Emberknife** (der Melee-Jungle-Starter, der Smite einen Schadens-Boost auf Monster gibt und die Pet-Quest startet) + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**Core-Items (in dieser Reihenfolge):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — Quest-Upgrade von Emberknife (entwickelt sich automatisch um Minute 3-4, sobald genug XP von Jungle-Camps gesammelt ist). Companion für AP (Ability Power, der Stat, der Magieschaden scalet) Burst: fügt einen Magieschaden-Effekt hinzu, der auf der Auto-Attack direkt nach einem Spell auslöst (ein "Proc"), passend zum Liandry's-Burn.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — erstes volles Item. Der prozentuale HP-Burn beim Treffer (Schaden, der mit Max-HP des Ziels scalet) stackt mit jedem Crowstorm-AOE-Tick auf Tanks und macht deine Ulti zum Teamwipe-Tool.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat Magic Penetration. Günstig, sofort, der Default für jeden AP-Champ vor dem Mid-Game.
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — geh in Stasis, sobald die Crowstorm-AOE-Ticks fertig sind, das rettet dich vor dem Focus, den du direkt nach dem Engage frisst. Pflicht, wenn der Gegner einen Diver oder Assassin hat.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — Late-Game-Multiplikator (+35% Bonus-AP). Dein höchster AP-Slot, lässt Crowstorm Squishies one-shotten.

**Situative Items:**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — gegen Single-Target-Magic-CC, das deinen R-Channel unterbricht (Lissandra R, Veigar E, Twisted Fate Stun). Der Schild blockt eine Fähigkeit, bevor sie deine Ulti stoppen können.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — wenn 2+ Gegner irgendein Magic-Resist-Item bauen.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — gegen Heal-Stacking-Comps (Aatrox, Soraka, Vladimir, Dr. Mundo). Wendet Grievous Wounds an (schneidet 40% gegnerische Heals).
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — wenn du extra Movement Speed brauchst, um zu chasen oder aus dem Fog in R-Range zu laufen.

**Stiefel:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** ist Default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** wenn 2+ Gegner Hard-CC haben und Banshee's allein nicht reicht.

**Skill-Order:** Maxe **W** zuerst (Jungle-Clear und Sustain), **E** als zweites (Slow + Silence im Fight), **Q** zuletzt. Setze Punkt in **R** auf Level 6, 11, 16.

**Runen:** Primärbaum **Domination** mit **Dark Harvest**, **Sudden Impact**, **Treasure Hunter**, **Ultimate Hunter**. Sekundär **Sorcery** mit **Manaflow Band** und **Gathering Storm**. Gegen schweren Single-Target-CC-Engage (Lissandra, Malzahar, Veigar) tausche Sorcery gegen **Resolve** mit **Bone Plating** und **Revitalize**.

## Wichtige Matchups

- **Lee Sin / Elise:** Early-Invade-Jungler. Bestreite deine eigene Buff-Seite auf Level 1 nicht; cross-map und starte den gegenüberliegenden Buff mit Leash (deine Laner helfen das Camp anzufangen, indem sie es ein paar Sekunden treffen, damit du weniger Schaden frisst), dann pathe zur Scuttle Crab am River. Droppe eine Effigy am River, um den Gank zu spotten, und warde deine Jungle-Eingänge bis Minute 3.
- **Karthus:** Scaling-vs-Scaling-Race. Er out-cleart und out-scalet dich. Du musst einen Level-6-Gank forcen oder mit Vision in seinen Jungle invaden; lässt du ihn 11 erreichen, schlägt seine globale Ulti deine Single-Objective-Wins.
- **Yasuo bot oder mid:** Wind Wall blockt das **Q**-Projektil und die zentrale Silence-Linie von **E**. Engage Crowstorm aus einem Seitenwinkel, damit er nicht das Team wallen kann; flanke aus einem nicht offensichtlichen Lane-Busch.
- **Zac:** Spiegel-Engage-Tank mit E-Gap-Close. Dein **E**-Silence killt sein W-Detonations-Timing, wenn du es während seines Channels triffst; in einem Coin-Flip-Teamfight gewinnt das Team, das zuerst **R** + Silence landet.
- **Master Yi:** Er ist CC-immune gegen deinen **E**-Silence durch **Q**-Dash und Highlander-Ulti. Spare **Q** um ihn aus dem Highlander-Fenster zu fearen; ohne den Fear macht sein Late-Game-Cleanup deinen Engage zu einem 1-für-3.

## Power Spikes & Siegbedingungen

- **Level 6 (erster Crowstorm):** Dein erstes Gank-Fenster. Setze 30s vorher Vision im River-Fog auf, dann lauf rein. Ein sauberes R + E auf 2 Gegner unter Tower ist ein garantierter Double Kill.
- **Level 9 (W gemaxt):** Dein Jungle-Clear erreicht Spitzentempo und dein Sustain im Fight schnellt hoch. Force hier einen Drake-Fight.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ Minute 16-18):** Deine Crowstorm-AOE schneidet jetzt durch Tanks. Force Baron/Drake-Fights und such Cross-Map-Flanks.
- **Level 16 + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ Minute 28):** Crowstorm one-shottet jeden Squishy, der kein Magic-Resist-Item gebaut hat. Gruppiere mit dem Team und force das nächste große Objective.

## Häufige Fehler

- **R ohne Fog-of-War-Setup nutzen.** Ein sichtbarer Fiddle mit angezeigtem Channel-Bar ist ein freier Dodge fürs Gegnerteam. Wirke immer aus Busch, hinter Mauer oder aus einem ungewardeten Jungle-Camp. Wenn sie den Bar sehen, laufen sie 1.5s weg und du verschwendest 80 Mana plus dein einziges Engage-Tool.
- **Solo engagen, wenn das Team weit hinter dir ist.** Crowstorm ist ein Team-Engage-Tool, kein Assassin-Pick. Ist dein Team 2+ Bildschirme weg, trifft die Ulti 1 Gegner und du stirbst im Follow-up. Check Teammate-Positionen vor dem R-Drücken.
- **Effigy-Platzierung ignorieren.** Effigies geben Vision und kurze Fears. Ungenutzte Trinket-Ladungen sind freie Vision, für deren Lösung der Gegner *nicht* zahlt. Droppe eine am River vor jedem Objective.
- **Q für Last-Hits auf Jungle-Camps nutzen.** Q ist dein einziges Single-Target-Setup für Fight-Time-Fears. Spare es für Fights — W und E clearen Camps gut genug.

## Fortgeschrittener Tipp

Der 1.5s **Crowstorm**-Channel wird durch alles unterbrochen, was dich verschiebt oder stunnt, aber wenn du **R** im selben Moment drückst, in dem ein Ziel in einen Busch tritt, in dem du sitzt, gibt der kurze Vision-Cut keine Reaktionszeit, bevor der Blink landet. Trainiere das Timing in Customs: versteck dich im Busch, warte, bis ein Gegner danebenläuft, drück R aus seinem Personal Space heraus. Der Blink hält dich die ganze AOE-Dauer auf ihm, und die Panik vor einem Face-of-Fog-Fiddle kostet ihn mehr Flashes als jeder andere Engage im Spiel.
