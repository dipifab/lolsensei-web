---
title: "Elise Jungle Build & Guide — Patch 16.9"
slug: "elise-jungle"
language: "de"
patch: "16.9"
champion: "elise"
role: "jungle"
last_updated: "2026-05-02"
description: "Elise Jungle Guide für League of Legends Patch 16.9: Spider-Form-Gankrouten, Cocoon-Setups, Item-Prioritäten, wichtige Matchups, Power Spikes und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Elise"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Burst Mage / Diver"
  abilities:
    - key: "P"
      name: "Spider Queen"
      description: "Zwei Formen. Human: jeder Ability-Treffer speichert ein schlafendes Spiderling. Spider: AAs verursachen bonus magic damage und heilen Elise."
      dd_spell_id: "Elise_Passive"
    - key: "Q"
      name: "Neurotoxin / Venomous Bite"
      description: "Human: zielsuchender Poke, skaliert mit aktuellem HP des Gegners (anti-tank). Spider: Sprung, skaliert mit fehlendem HP (executed Low-HP-Ziele)."
      dd_spell_id: "EliseHumanQ"
    - key: "W"
      name: "Volatile Spiderling / Skittering Frenzy"
      description: "Human: wirft ein Spiderling, das vorwärts läuft und nahe am Gegner explodiert (slow + AOE-Schaden). Spider: Elise und ihre Pets gewinnen attack speed für DPS."
      dd_spell_id: "EliseHumanW"
    - key: "E"
      name: "Cocoon / Rappel"
      description: "Human: linearer Skillshot, betäubt den ersten getroffenen Gegner. Spider: Rappel — Elise hebt sich unangreifbar in die Luft und fällt auf ein Ziel mit Bonus-Schaden und Heal."
      dd_spell_id: "EliseHumanE"
    - key: "R"
      name: "Spider Form"
      description: "Toggle-Ultimate, wechselt zwischen Human (Range-Caster, mehr Reichweite) und Spider (Melee-Skirmisher, mehr move speed plus Spiderling-Schwarm). Free Swap am Cooldown."
      dd_spell_id: "EliseR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "gegen single-target magic CC (Ahri charm, Lissandra R, Twisted Fate stun) — der Spell Shield frisst eine Ulti und rettet deine Rappel"
    - dd_id: "3135"
      name: "Void Staff"
      against: "Swap, wenn 2+ Gegner ein Magic-Resist-Item bauen; ersetzt Rylai's oder Banshee's im Late"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "gegen schweres hard CC (Stuns, Knock-ups) — Boot-Swap mit Tenacity (CC-Dauer-Reduktion)"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "gegen Heal-Stack-Comps (Soraka, Vladimir, Dr. Mundo); zählt zugleich als Magic Penetration"
  base_combo: ["W", "E", "Q", "R", "Q", "AA"]
  win_condition: "Snowball mit Early-Ganks via E cocoon Stuns auf Level 3-6, dann Pivot auf Objective-Dives mit Rappel sobald Liandry's und Rylai's online sind. Pick Squishy-Backliner im Mid Game."
  weakness: "Fällt im Late Game ab, sobald Frontlines Magic Resist und HP stacken. Kein zuverlässiges Disengage in Spider Form: ein verfehlter Cocoon im Dive endet meist mit einer toten Elise."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
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
    primary_rationale: "Domination Primary: Electrocute proct in jedem Gank, weil W slow + E stun + Q burst drei eigenständige Ability-Treffer sind (Keystone-Trigger). Sudden Impact belohnt den Rappel-Dash, Treasure Hunter gibt Gold auf Takedowns, Ultimate Hunter senkt R-Cooldown."
    secondary_rationale: "Sorcery Secondary: Manaflow Band fixt frühe Mana-Probleme (Cocoon ist teuer), Transcendence pusht Ability Haste über das 40%-Soft-Cap und refunded Cooldowns auf Takedowns."
    secondary_alternative: "Gegen schwere Poke- oder Counter-Jungle-Kompositionen (Lee Sin, Graves, Nidalee), Sorcery zu Resolve mit Bone Plating (8473, Schadensreduktion nach 3 Treffern) und Revitalize (8453, Heal- und Shield-Verstärker) für früheres Sustain."
matchup_draft:
  pick_into:
    - examples: ["lux", "veigar", "karthus", "twisted-fate"]
      archetype: "Squishy Laner ohne Dash oder Stealth"
      reason: "E cocoon auf Level 3-4 landet auf flachen Zielen ohne Escape. Rappel (Spider E) bestätigt den Dive auch bei Flash, weil du mid-cast unangreifbar bist."
    - examples: ["master-yi", "kayn", "shyvana"]
      archetype: "Jungler mit schwacher Pre-Level-6-Form"
      reason: "Master Yi duelliert nicht vor Level 6, Kayn ist form-locked bis zur Quest, Shyvana hat kein zuverlässiges CC. Elise nimmt Scuttle Crab gratis und counter-junglet sie ins Gold-Defizit."
    - examples: ["draven", "kalista", "samira"]
      archetype: "Aggressive ADCs, die für Kills overextenden"
      reason: "Ihre Forward-Position liefert dir Cocoon-Winkel. Ein Level-3-Gank auf einer geschobenen Lane (Wave hinter dem River) bringt meist die Kill, sobald W slow + E stun ins Support-CC chained."
  counterpicks:
    - examples: ["sejuani", "maokai", "rammus"]
      archetype: "Tankige Engager mit Hard-CC-Counter-Engage"
      reason: "Ihr AOE-CC fängt Elise im Rappel-Abstieg oder nach dem Dive-Commit. Mit 2 Items schmilzt dein Magic Burst sie nicht mehr, und du hast kein Disengage in Spider Form."
    - examples: ["lee-sin", "xin-zhao", "vi"]
      archetype: "Starke Early-Game-Duellisten mit Gap-Closer"
      reason: "Sie schlagen Elise im 1v1 auf Level 3, wenn Cocoon-Mana ausgeht oder Rappel-Timing daneben liegt. Invadiere ihren River nicht: ihre Dashes fressen deine einzige Escape."
    - examples: ["olaf", "garen"]
      archetype: "CC-immune Diver (Cleanse-Passives oder Ult-Immunity)"
      reason: "Olaf R und Garen Q brechen Stun-Ketten und ignorieren dein einziges Setup. Wenn der Cocoon nicht mehr landet, kollabiert Elises All-in (voller Trade-Commit) und sie wird ohne Escape totgeduellt."
---

## Überblick

> **Mini-Glossar (einmal lesen):** **ADC** = Attack Damage Carry, der Bot-Laner mit physischem Schaden (Caitlyn, Jinx). **AP** = Ability Power, der Stat, der magische Abilitys skaliert. **MR** = Magic Resist, magische Verteidigung. **CS** = Creep Score, getötete Minions. **CC** = Crowd Control, jeder Effekt, der einen Champion stoppt (Stun, Slow, Knock-up). **Gank** = Jungler-Hinterhalt in einer Lane. **Dive** = unter Turm gehen, um zu töten. **Trade** = kurzer Schadensaustausch. **All-in** = voller Commit zum Kampf. **Snowball** = wachsender Vorsprung (Kills → Gold → Items → mehr Kills).

Elise ist ein Burst-Mage-Diver — ein Champion, der aus Range pokt und dann voll auf die gegnerische Backline committet. Ihr Kit dreht sich um das Landen von **Cocoon (E)** in Human Form für einen Stun, dann Swap in **Spider Form (R)** für **Rappel (E)**-Dives und Execute-Schaden. Sie hat die stärkste Pre-Level-6-Jungle im Spiel: auf Level 3 hat sie schon alle vier Schaden-Abilitys und schlägt fast jeden Jungler im 1v1. Der Preis: hohe mechanische Komplexität (Form-Swap-Timing, Skillshot-Präzision) und ein schwaches Late Game, sobald Tanks Magic Resist bauen.

Der Game Plan: Invadiere die gegnerischen Jungle-Camps auf Level 3, wenn das Matchup es zulässt, und snowballe (Vorsprung, der wächst) über Ganks auf Lanes mit der höchsten Kill-Pressure (squishy ADC, Mid-Laner mit niedrigem HP). Sobald **Liandry's Torment** um Minute 11-13 online ist, pivot vom Gank-fokussierten Pathing zur Objective-Kontrolle — Tower-Dives mit Rappel als "Blink" (kurzer sofortiger Teleport), Pickoffs auf Prio-Ziele und Drake oder Rift Herald forcieren.

## Empfohlener Build

**Starting items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** (Ranged-Jungle-Starter) + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**Core items (in Reihenfolge):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — Quest-Upgrade aus Hailblade (auto-evolved um Minute 3-4, sobald genug XP gesammelt). Der Companion für AP-Burst-Champions: fügt deinem nächsten AA nach einer Ability einen Magic-Damage-Proc (Trigger-Effekt) hinzu, was perfekt mit **Spider Q** in Skirmishes harmoniert.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — erstes komplettes Item. Fügt jedem Spell einen HP-Burn (Schaden über mehrere Sekunden) hinzu, stackt mit **Rylai's** später für unschlagbaren Single-Target-Sustained-Damage.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration, damit deine Q und E härter auf squishy Ziele knallen (Champions mit niedriger Defense, ADCs und Mages).
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — jede Ability slowt das Ziel. Massive Synergie mit **W** (bereits Slow) und **Spider Q**-Sprüngen.
5. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — Survival-Item. Active macht dich 2,5 Sekunden unangreifbar nach einem Rappel-Dive, sodass dein Team nachziehen kann, bevor du stirbst.
6. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — Late-Game-Scaling-Multiplier. Als Letztes kaufen, um auf 1000+ AP zu kommen.

**Situational items:**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — gegen single-target magic crowd control (Ahri charm, Lissandra R, Twisted Fate stun).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — wenn zwei oder mehr Gegner ein Magic-Resist-Item bauen.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — Boot-Swap, wenn das gegnerische Team schweres Hard-CC hat (Stuns, Knock-ups).
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — gegen Heal-Stack-Kompositionen (Soraka, Vladimir, Dr. Mundo); fungiert auch als Magic Penetration.

**Boots:** Sorcerer's Shoes als Standard. Wechsle zu Mercury's Treads, wenn das gegnerische Team drei oder mehr Hard-CC-Quellen hat.

**Skill order:** Maxe **Q** zuerst (Schaden und Execute), **E** als zweites (Cocoon-Cooldown — weniger Cooldown = mehr Stuns), **W** zuletzt. Setze einen Punkt in **R** auf Level 6, 11, 16.

**Runes:** Primary **Domination** mit **Electrocute**, **Sudden Impact**, **Treasure Hunter**, **Ultimate Hunter**. Secondary **Sorcery** mit **Manaflow Band** und **Transcendence**.

## Wichtige Matchups

- **Lee Sin:** Duelliert dich nach Level 3 besser, wenn du auf den Camps greedy bist. Tracke sein Pathing — wenn er Bot Side ist, invadiere sein Red oder Blue Camp Top Side. Niemals Fog face-checken (River-Bushes ohne Ward), wenn er missing ist.
- **Graves:** Verliert gegen Elise pre-6, weil sein kurzes E (Quickdraw) deinem Cocoon nicht entkommt, skaliert aber stärker. Dive seine Lane zweimal vor Minute 10, sonst hat er zwei Items und outscaled dich.
- **Master Yi:** Kostenloses Matchup early. Invadiere sein zweites Camp (das er als drittes clearet), Kill, wiederholen. Mit Wit's End plus Botrk gewinnt er die 1v1, daher ist die Win-Condition, das Spiel vor Minute 25 zu beenden.
- **Sejuani / Maokai:** Hard Counter-Engage. Spare Rappel auf, bis sie ihr AOE-CC verbraucht haben, niemals zuerst engagen. Im Teamfight flank die Backline, statt durch die Tank-Wall zu engagen.
- **Olaf:** Sein R (Ragnarok) cleansed deinen Cocoon-Stun mid-flight. Warte, bis er es im Dive nutzt, und re-engage in den nächsten 6 Sekunden, während es auf Cooldown ist.

## Power Spikes & Siegbedingungen

- **Level 3:** Erstes Spider-Form-Unlock und volles Ability-Kit. Du hast den stärksten 1v1-Schaden aller Jungler im Spiel in diesem Fenster — invadiere oder ganke sofort eine overextended Lane.
- **Level 6:** Free **R** Swap auf Anforderung. Gank-Pressure verdoppelt sich, weil du in Spider Form durch Wände disengagen kannst (gibt einen kleinen Movement-Speed-Boost).
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment fertig (~ Minute 11-13):** Erster großer Scaling-Spike. Single-Target-Dives töten jetzt ADCs und Mages in zwei Spell-Rotationen. Forciere Drake oder Rift Herald, sobald es fertig ist.
- **Zwei komplette Items + Boots (~ Minute 16-18):** Peak-Fenster. Danach verlierst du an relativer Stärke, sobald Gegner Magic Resist bauen; deine Aufgabe ist, diesen Lead in Baron- oder Elder-Drake-Calls umzusetzen.

## Häufige Fehler

- **E cocoon als Poke-Tool werfen.** Cocoon ist dein einziges Setup — verfehlst du, gibt es kein Follow-up. Warte, bis das Ziel committed ist (low HP, Flash benutzt, geslowt durch dein **W**), bevor du castest.
- **In Spider Form diven ohne Flash oder R.** Spider Form hat kein Escape (kein Dash, kein Shield, nicht unangreifbar). Wenn deine **R** auf Cooldown ist, nicht committen; rückzugsbereit warten, bis sie nach 3 Sekunden zurück ist.
- **W als zweites maxen statt E.** W gibt etwas mehr Clear-Speed, fügt aber nichts zur Gank-Zuverlässigkeit hinzu. E-Rank-ups senken direkt den Cocoon-Cooldown und erhöhen Rappel-Schaden — das ist dein Damage und CC.
- **Scuttle Crab früh smiten statt Smite für Objectives sparen.** Spare Smite für Drake- und Rift-Herald-Contests. Die 70 Gold und der Movement-Speed-Buff von Scuttle sind keinen Drake-Verlust gegen einen Gegner mit Smite up wert.
- **In Teamfights in Spider Form in Melee-Range bleiben, wenn du vorne bist.** Ist die Backline tot, swap zurück in Human Form, um Cocoon zu werfen und aufzuräumen. Spider Form hat Melee-Auto-Attack-Range — als gefütterte (kill-snowballed) Elise dort zu bleiben, gibt deine Kills wieder ab.

## Fortgeschrittener Tipp

Nutze **Rappel (Spider E)** als *defensiven* Blink, nicht nur als offensiven. Wenn ein Duellist auf dich committed, caste Rappel auf einen Low-HP-Minion oder einen weit hinten stehenden Minion in deiner Jungle: Elise wird für die Dauer des Lifts unangreifbar (~2 Sekunden), genug, um eine Ulti wie Lee Sin R oder Vi Q zu dodgen. Der Cooldown ist kurz (10 Sekunden auf Rank 5) — sie für Survival aufzugeben, rettet meist mehr Kills, als sie offensiv einzusetzen.
