---
title: "Akali Mid Build & Guide — Patch 16.9"
slug: "akali-mid"
language: "de"
patch: "16.9"
champion: "akali"
role: "mid"
last_updated: "2026-04-29"
description: "Akali Mid Lane Guide für League of Legends Patch 16.9: AP-Assassin-Build, wichtige Matchups, Power Spike auf Level 6, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Akali"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Assassin / Burst"
  abilities:
    - key: "P"
      name: "Assassin's Mark"
      description: "Trifft Akali einen Champion mit einer Ability, markiert sie ihn. Verlässt sie den Ring, wird ihr nächster Auto-Attack mit zusätzlicher Reichweite und Schaden verstärkt."
      dd_spell_id: "Akali_Passive"
    - key: "Q"
      name: "Five Point Strike"
      description: "Kunai-Kegel, der Schaden anrichtet und verlangsamt. Haupt-Tool für Poke und Trades. Kostet Energie, kurzer Cooldown — im Trade on-cooldown spammen."
      dd_spell_id: "AkaliQ"
    - key: "W"
      name: "Twilight Shroud"
      description: "Rauchzone, die Akali für Targeting unsichtbar macht und bis zu +80 max Energie gewährt. Aktion drinnen enttarnt kurz. Drop W mitten im Combo, nicht nur zum Disengage — der Energiebonus ermöglicht ein zusätzliches Q in der Rotation."
      dd_spell_id: "AkaliW"
    - key: "E"
      name: "Shuriken Flip"
      description: "Sprung zurück, feuert Shuriken, der den ersten getroffenen Gegner markiert. Recast für Dash zum markierten Ziel. Markiere nur Champions, niemals einen Minion."
      dd_spell_id: "AkaliE"
    - key: "R"
      name: "Perfect Execution"
      description: "Zweiteilige Ulti. R1 springt und macht Schaden; R2 dasht durch und exekutiert Gegner mit niedrigem HP. Die Execute skaliert mit fehlendem HP des Ziels."
      dd_spell_id: "AkaliR"
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
    - { dd_id: "3152", name: "Hextech Rocketbelt" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "gegen hohen Single-Target-Burst (Zed R, Veigar Combo, LeBlanc): die Stasis lässt dich überleben, bevor R2 finisht"
    - dd_id: "3135"
      name: "Void Staff"
      against: "sobald ein Priority-Target ein Magic-Resist-Item baut — hält den Schaden deiner Abilities gegen tankigere Gegner stabil"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "gegen magische Single-Target-CC, die deinen Engage abschießt (Ahri Charm, Lissandra R, TF Stun) — Spell-Shield schluckt den ersten Hit"
    - dd_id: "4633"
      name: "Riftmaker"
      against: "in längeren Fights und Bruiser-lastigen Comps, in denen Heal und Durability wichtiger sind als reiner Burst"
  base_combo: ["E1", "Q", "AA", "R1", "AA", "E2", "R2"]
  win_condition: "Erwische isolierte Squishy-Ziele mit dem E1+E2 Dash, kette Q + empowered Auto-Attack + R-Combo zur Execute. Roame in die Side-Lanes, wann immer R verfügbar ist."
  weakness: "Schwacher Waveclear und kurze Reichweite vor Level 6: anfällig für ranged Poke und Jungle-Ganks. Kein hardes CC und kein Escape, wenn W down ist — du wirst gelockt und gebursted, bevor dein Combo landet."
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
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
---

## Überblick

Akali ist eine AP-Burst-Assassin: eine Championin, gebaut für sehr hohen Schaden in 1-2 Sekunden ("Burst", Schadensspitze auf einem einzelnen Ziel) gegen ein einziges Target. Ihr Kit ist eine Kette aus Dashes — **Shuriken Flip (E)**, **Perfect Execution (R)** — gewickelt um das Unsichtbarkeitsfenster von **Twilight Shroud (W)**. Sie hat keine Mana-Leiste, sie nutzt Energie: kurze Cooldowns zählen mehr als das Ressourcenbudget. Mid-Lane passt zu ihr, weil der River kurze Wege zum Roamen (deine Lane verlassen, um in einer anderen Lane zu agieren) in die Side-Lanes bietet, und **R** auf Level 6 verwandelt jeden Fight ohne gegnerische Vision Wards (platzierbare Items, die einen Bereich aufdecken) in einen Pickoff (Eliminierung eines Gegners isoliert von seinem Team).

Der Game Plan: überlebe eine schwache Laning Phase (schwacher Waveclear — ihre Abilities clearen die Minionwave langsam, und keine frühe Kill Threat) bis Level 6, dann konvertiere jeden kleinen Lead in Roams und Tower Dives. Der Trick des Champions liegt im **E**-Placement: Akalis E feuert zuerst einen Shuriken; nur der erste getroffene Gegnerchampion wird zum Dash-Ziel. Markierst du versehentlich einen Minion, verlierst du den Dash für die ganze Ability-Rotation (der Zyklus aus Q + W + E + R, jeweils einmal gecastet).

## Empfohlener Build

**Starter-Items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 Health Potions. Doran's Ring gibt AP und Mana Regen, die Akali nicht braucht, aber der Bonus Damage gegen Minions repariert ihren schwachen Early Waveclear. Skip ![Corrupting Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2033.png) **Corrupting Potion**, außer die Lane ist ein heavy Auto-Attack-Harass-Matchup.

**Core-Items (in Reihenfolge):**

1. ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** — Gap-Closer (Aktiv-Effekt, der dich in einen Dash auf den Gegner schickt) plus Burst Damage; kombiniert mit **E** und **R**, um aus Range zu engagen (den Fight zu eröffnen).
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flache Magic Penetration (dein Spell Damage ignoriert einen Teil der gegnerischen Magic Resist). Direktes Damage-Upgrade fürs Killen von Squishy-Targets.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — extra Burst mit Bonus Damage, wenn der Gegner unter ~40% HP ist, perfekt abgestimmt auf den Execute der **R2**.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — Late-Game-Multiplikator auf dein gesamtes AP. Dein höchster AP-Slot.

**Situative Items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — gegen Zed, Veigar, LeBlanc oder jeden Gegner, dessen Burst im selben Fenster wie deiner ankommt. Der Stasis-Aktiv macht dich für ~2.5 Sekunden unverwundbar und unbeweglich, sodass du ihren Damage aussitzt und mit **R2** finisht.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — swap, sobald ein Priority-Target ein Magic-Resist-Item baut; hält dein Damage-Scaling.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — gegen magische Single-Target-CC (Ahri Charm, Lissandra R, Twisted Fate Stun); der Spell Shield frisst ihren Setup.
- ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — alternatives Erstitem in längeren Fights gegen Bruiser-lastige Comps; tauscht Burst gegen Sustained Damage und Healing.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** sind Default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** sind okay gegen heavy CC (Lissandra, Ahri, Galio).

**Skill-Order:** Maxe **Q** zuerst (Hauptschaden und Energie-Refund, also Energie, die du nach dem Cast zurückbekommst), **E** als zweites (kürzerer Cooldown auf dem Dash), **W** zuletzt. Setz einen Punkt in **R** auf Level 6, 11, 16.

**Runen:** Runen sind passive Boni, die du vor dem Match wählst; ein Primärbaum (5 Runen) und ein Sekundärbaum (2 Runen). Primär **Domination** mit **Electrocute** (extra Burst, wenn du ein Ziel mit drei Abilities in Folge triffst), **Sudden Impact** (mehr Magic Pen nach einem Dash), **Sixth Sense** für Vision-Druck und **Ultimate Hunter** (kürzerer **R**-Cooldown). Sekundär **Sorcery** mit **Transcendence** (Ability Haste — deine Abilities kommen schneller wieder) und **Gathering Storm** (Late-Game-AP-Scaling). Akali nutzt Energie, kein Mana — also kein **Manaflow Band**.

## Wichtige Matchups

- **Galio:** Hard Counter pre-6. Seine Passive empowered Auto-Attacks und sein **W** taunt dich und blockt deinen Dive mit **R**. Farm safe bis Level 6, ping den Jungler und committe nur, wenn sein **W** auf Cooldown ist.
- **Yasuo:** Sein **Wind Wall** blockt **Q** und den **E**-Shuriken. Open mit dem ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt**-Dash oder mit **E**, halte **Q**, bis seine Wind Wall down ist.
- **Lux:** Du outscalest sie im 1v1. Dodge ihre **Q** (linearer, langer und langsamer Skillshot — eine nicht zielbare Ability, die du seitwärts laufend ausweichst, wenn sie castet) mit **E**, dann dive sie auf 6. Kauf ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass**, falls sie ihren ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** vor dir fertigstellt.
- **Twisted Fate:** Roam-Race. Er hat das bessere Roam-Tool (seine **R** teleportiert ihn quer über die Map), also musst du deine Wave pushen (die Minion-Linie zum gegnerischen Turm drücken) schneller, als er Lane verlassen kann. Track seine **R** mit Vision Wards (platzierbare Items, die in einem Bereich Sicht geben) auf River und Tri-Bush (die drei Büsche neben Mid).
- **Zed:** Ausgeglichenes Matchup. Er gewinnt kurze Trades vor 6; nach 6 finisht deine **R** ihn auf niedrigem HP. Geh nicht all-in (kompletter Kill-Exchange ohne Rückzug), wenn er seine **W**-Schatten nicht verbraucht hat; sonst entkommt er deiner **R2**.

## Power Spikes & Siegbedingungen

- **Level 3:** Volles Basis-Kit (Q + W + E). Endlich hast du die Dash-plus-Unsichtbarkeit-Combo zum Traden (kurzer Ability-Austausch in Lane, kein voller Killversuch) oder Disengagen (aus einem Fight raus). Such einen kurzen Trade, um Lane-Prio (wenn deine Wave näher am gegnerischen Turm steht als an deinem, du kannst Lane verlassen, ohne Ressourcen zu verlieren) zu holen, vor dem ersten Jungle-Gank (Überraschungsangriff vom gegnerischen Jungler in deine Lane).
- **Level 6:** Die erste **R** ist der größte Single-Spike der Partie. Du gewinnst ein Kill Threshold gegen jedes Squishy-Target (Champions mit hohem Damage und niedriger Defense, wie ADCs). Wenn der River nicht warded ist (von gegnerischen Vision Wards abgedeckt), sind Mid-River-Fights Free Kills.
- **![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) Hextech Rocketbelt fertig (~ Minute 12-14):** Voller All-in-Damage one-shotted Squishy-Targets jetzt durch den R2-Execute (R2 finisht sie, wenn ihr HP unter den Schwellenwert fällt). Roam in Side-Lanes, sobald deine Wave unter den gegnerischen Turm gepusht ist.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ Minute 24-28):** Burst-Damage skaliert massiv. Erzwing Fights um Objectives (Drake, Baron, Türme) und such Backline-Picks (Eliminierung eines Gegners isoliert vom Team) mit **W** zum Flanken — vom Fight aus einer Seite reingehen, die sie nicht beobachten, meist durch unwarded Fog of War (Bereiche der Map ohne Sicht).

## Häufige Fehler

- **All-in vor Level 6 ohne Jungle-Setup.** Akalis Pre-6 Trade Damage ist mittelmäßig — Q + Auto-Attack alleine killen keinen aufmerksamen Gegner. Farm safe, ping den Jungler, committe auf 6.
- **E1 auf einem Minion verschwenden.** Der erste Hit des Shuriken Flip markiert alles, was er trifft, inklusive Minion. Landet dein Shuriken auf einem Creep, verlierst du den Dash auf den Champion dahinter. Winkle **E** immer so, dass der Champion das Erste ist, was der Shuriken berührt.
- **Im W auto-attacken.** Aktion (jeder Spell oder Auto-Attack) enttarnt dich für ~0.5s. Im **Twilight Shroud** stehen und rauspoken hält dich nicht unsichtbar — nutze **W**, um einem einzelnen Skillshot (gezielte Ability, der man durch seitliches Ausweichen entgeht) auszuweichen oder Vision zu brechen, bevor du dich repositionierst.
- **R1 ohne Plan für R2 verbrennen.** R1 alleine pflanzt dich mitten ins gegnerische Team. Hab immer ein R2-Ziel parat — entweder als Killing Blow oder als Escape-Dash.
- **Bruiser-Items gegen ein Squishy-Team bauen.** Items wie ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** tauschen Burst gegen Sustain. Gegen ein Team aus zerbrechlichen Carrys willst du puren Burst (![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** + ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame**), keine Durability.

## Fortgeschrittener Tipp

Drop **Twilight Shroud (W)** in dem Moment, in dem **R1** landet. Der Shroud öffnet sich an deinen Füßen genau dann, wenn du mitten im gegnerischen Team ankommst, und bricht ihren Target Lock (zwingt die Gegner, dich neu anzuklicken, weil du für einen Moment nicht zielbar wirst) für die halbe Sekunde, bevor sie dich wieder anvisieren können. Gut eingesetzt erlaubt dir das, dich für den **R2**-Execute neu zu positionieren oder den All-in zu canceln, falls der Trade verloren wirkt — und die Peel-Ability des gegnerischen Supports (der Spell, der seinen Carry schützt) landet oft im Leeren, weil du mitten im Engage nicht-zielbar geworden bist.
