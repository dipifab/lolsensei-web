---
title: "Kayn Jungle Build & Guide — Patch 16.9"
slug: "kayn-jungle"
language: "de"
patch: "16.9"
champion: "kayn"
role: "jungle"
last_updated: "2026-04-29"
description: "Kayn Jungle Guide für League of Legends Patch 16.9: Wahl zwischen Rhaast und Shadow Assassin, Jungle Clear, Gank Timing, wichtige Matchups und Power Spikes."
quick_learn:
  champion_dd_id: "Kayn"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Fighter / Assassin"
  abilities:
    - key: "P"
      name: "The Darkin Scythe"
      description: "Treffer auf Gegner füllen Orbs in zwei Farben: rot durch Melee/Fighter, blau durch Ranged/Mage. Eine Leiste auf 100% gefüllt verwandelt Kayn auf Level 6 in Rhaast (rot) oder Shadow Assassin (blau)."
      dd_spell_id: "Kayn_Passive"
    - key: "Q"
      name: "Reaping Slash"
      description: "Kurzer Dash, der Gegner auf der Bahn trifft, dann ein AOE-Slash. Hauptmobilität und Waveclear-Tool. Rhaasts Slash macht Schaden in % max-HP."
      dd_spell_id: "KaynQ"
    - key: "W"
      name: "Blade's Reach"
      description: "Linearer Slow mit großer Reichweite. Rhaast-Version macht Knock-up. Shadow Assassin kann sie in Bewegung casten und hat mehr Range."
      dd_spell_id: "KaynW"
    - key: "E"
      name: "Shadow Step"
      description: "Geht durch Wände mit Move-Speed-Bonus und kleinem Heal beim Eintritt ins Terrain. Shadow Assassin bekommt längere Dauer, Slow Immunity und reduzierten Cooldown."
      dd_spell_id: "KaynE"
    - key: "R"
      name: "Umbral Trespass"
      description: "Versteckt sich in einem markierten Champion (Mark hält 3.15s nach Schaden) für ein paar Sekunden, dann Burst-Ausstieg. Macht dich untargetable: nutze es, um CC zu dodgen."
      dd_spell_id: "KaynR"
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
    - { dd_id: "1103", name: "Mosstomper Seedling" }
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
  situational_items:
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "vs Comps mit mehreren Ranged Carries die kiten — Active Slow hält Rhaast nach E + Q dran"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "vs Doppel-AD (Yasuo + Caitlyn) — Bleed verteilt physischen Burst über Zeit"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs ability-basierten magischen Burst (Syndra, Veigar, Annie) — MR plus Lifeline-Shield"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "Shadow Assassin vs Single-Target-CC (Morgana Q, Ashe R) — Spellshield blockt den Hook vor Engage"
    - dd_id: "6694"
      name: "Serylda's Grudge"
      against: "Shadow Assassin vs Targets mit Armor (Tabi Tank, Bramble Vest) — Armor Pen plus Slow on-damage"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "Rhaast vs Armor-Stack (Sion, Malphite) — schreddert Armor pro Treffer und gibt Bonus-HP"
  base_combo: ["E", "Q", "W", "AA", "R"]
  win_condition: "Überlebe bis Level 6 für die Transformation: Rhaast gegen Frontline-Tanks, Shadow Assassin gegen squishy Backline. Bestrafe gegnerische Jungler-Timings und snowballe mit R-Picks."
  weakness: "Pre-form Kayn (Level 1-5) ist einer der schwächsten Jungler im Spiel: langsamer Clear, kein Sustain, leicht zu invaden. Bleibst du zurück vor der Form, kollabiert das Scaling."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8105, name: "Relentless Hunter", icon_path: "perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["sett", "darius", "garen", "ornn"]
      archetype: "Tanky Melee-Bruiser und Frontline-Juggernauts"
      reason: "Rhaasts max-HP-Q-Schaden und der W-Knock-up zerlegen Targets mit hoher HP, die andere Assassins nicht töten, und du füllst die roten Orbs natürlich beim Skirmish-Fight gegen sie."
    - examples: ["jinx", "caitlyn", "ashe", "vayne"]
      archetype: "Immobile Ranged Carries (ADCs ohne Dash)"
      reason: "Shadow Assassins R lässt dich in ihrer Position erscheinen und sie durch die Frontline bursten — sie haben kein Escape-Tool, um den Channel zu dodgen, während du untargetable bist."
    - examples: ["lulu", "soraka", "yuumi"]
      archetype: "Squishy Enchanter Supports"
      reason: "Shadow Assassin one-shottet sie in 1-2 Abilities durch E-Wallwalks, entfernt Peel und Disengage des Teams, bevor der Fight überhaupt beginnt."
  counterpicks:
    - examples: ["lee-sin", "elise", "graves"]
      archetype: "Starke Early-Game-Jungler mit Invade-Druck"
      reason: "Sie bedrohen Kayns erste drei Camps vor der Transformation. Ein erfolgreicher Invade auf Level 2-3 deckelt das Scaling, weil er seine Side ohne starken Clear nicht verteidigen kann."
    - examples: ["malphite", "rammus", "maokai"]
      archetype: "Hard-CC-Tanks mit Point-and-Click-Lockdown"
      reason: "Rammus' Q-Taunt oder Malphite-R erwischen Kayn außerhalb von E und sperren ihn aus seiner Combo. Selbst die Untargetability der Shadow-Assassin-R rettet nicht, wenn du vor dem Cast gestunnt wirst."
    - examples: ["xin-zhao", "warwick"]
      archetype: "Jungler mit starkem Dueling und Counter-Gank-Tools"
      reason: "Sie schlagen Kayn 1v1 in seiner schwachen Early-Phase und können ihn vor der Form invaden. Campen sie deine Jungle, kannst du erst auf Level 6 antworten."
---

## Überblick

Kayn ist ein Melee-Assassin/Fighter-Jungler mit einer einzigartigen Transformations-Mechanik: auf Level 6 wird er entweder zu **Rhaast** (rote Form, Hybrid-Bruiser, der durch Ability-Schaden heilt und gegen Melee-Tanks glänzt) oder zu **Shadow Assassin** (blaue Form, AD-Assassin, der squishy Carries auslöscht — "squishy" bedeutet Champions mit hohem Schaden und niedriger Defense, wie ADCs). Welche Form du bekommst, hängt davon ab, welche "Orbs" du im Early Game gefüllt hast — kämpfe gegen Melee/Fighter für rote Orbs, gegen Ranged/Mages für blaue. Die erste Leiste, die 100% erreicht, lockt die Form.

Dein Game Plan hat zwei Phasen. **Pre-Transformation (Level 1-5)** bist du schwach: clear effizient mit **Q** + **W**, vermeide Skirmishes (kleine Kämpfe zwischen 2-4 Spielern, keine vollen Teamfights), die du verlieren kannst, und versuche bis Level 6 zu power-farmen. **Post-Transformation** wirst du zur echten Bedrohung: Rhaast sucht ausgedehnte Fights und divet auf Frontliner, Shadow Assassin sucht **R**-Picks (Dive = auf einen Gegner unter Turm oder im offenen Feld springen, um ihn zu töten) auf isolierte Carries, bevor das Team gruppiert.

## Empfohlener Build

**Starting Items:** ![Mosstomper Seedling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1103.png) **Mosstomper Seedling** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Mosstomper gibt Tenacity (Crowd-Control-Resistenz) bei Objective-Fights, was Kayn in beiden Formen braucht. Nimm ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling**, wenn du dich auf Shadow Assassin festlegst und Move Speed für Picks willst.

**Core Items (in Reihenfolge):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — Rhaasts erstes Item. AD, Attack Speed, Active Slow. Kombiniert gut mit dem **Q**-Dash, um an kitenden Carries dranzubleiben (Kite = beim Angreifen rückwärts laufen, um Distanz zu Melee zu halten).
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — Default-Boots gegen jedes Team mit Stuns oder Roots. Wechsle zu ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** gegen schweren Auto-Attack-Schaden (zwei AD Carries).
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP, AD-Scaling, Lifeline-Shield (HP-Threshold-Passive: Shield, der unter einer HP-Schwelle triggert). Pflicht auf Rhaast, um die langen Fights zu überleben, die du starten willst.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — Rhaasts Standard. AD, Armor, Ability Haste, plus Bleed-Effekt (Schaden über mehrere Sekunden verteilt statt sofort komplett). Bestes Item gegen Squads mit zwei starken physischen Damage Dealern.

**Shadow Assassin Core Path** (ersetzt Items 1, 3, 4 oben):

1. ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — erstes Lethality-Item (flat Armor Pen, das gegen High-Armor-Targets nach unten skaliert) für Shadow Assassin. AD, Lethality, Ability Haste, plus Active-Cleave, der den Clear unterstützt UND angeschlagene Targets nach **R**-Exit finisht.
2. ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — Burst plus Active mit Move Speed für Picks über die Map.
3. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — Execute-Passive, die Targets unter 5% HP finisht, perfekt nach **R**-Burst.

**Situational Items:**

- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — vs ability-basierten magischen Burst (Syndra, Veigar, Annie). Magic Resist plus Lifeline-Shield unter HP-Schwelle.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — Shadow Assassin vs Single-Target-CC (Morgana Q, Ashe R). Der Spellshield (Passive, die die nächste Gegner-Ability blockt) rettet deinen Engage.
- ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — Shadow Assassin vs Armor-Stack (Tabi Tank, Bramble Vest). Armor Pen plus Slow beim Schaden.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — Rhaast vs Sion, Malphite oder jede Frontline, die Armor stackt. Schreddert Armor pro Treffer und gibt Bonus-HP.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — vs schweren Poke einer magischen Backline (Xerath, Vel'Koz). Viel HP plus magischer Shield, der out-of-combat regeneriert.

**Boots:** ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** sind der Default für Tenacity (reduzierte Dauer von Stuns und Slows). Wechsle zu ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** gegen zwei AD Carries.

**Skill Order:** Maxe **Q** zuerst (Reset auf Jungle Camps und Hauptschaden). Maxe **E** als Zweites (reduzierter Cooldown für Repositionierung und Wall-Plays). Maxe **W** zuletzt. Setze einen Punkt in **R** auf Level 6, 11, 16.

**Runes:** Primär **Precision** mit **Conqueror** (stackt Adaptive Force in ausgedehnten Fights, Peak für Rhaasts lange Dives), **Triumph**, **Legend Alacrity**, **Coup de Grace**. Sekundär **Domination** mit **Sudden Impact** (extra Lethality nach **E**-Wandeintritt oder **Q**-Dash) und **Relentless Hunter** (Out-of-combat Move Speed für Jungle-Pathing). Für Shadow Assassin One-Shot-Setup ist **Hail of Blades** in Domination die Alternative — kurzer Attack-Speed-Burst direkt nach **R**-Exit.

## Wichtige Matchups

- **Lee Sin / Elise:** Early-Game-Bullies. Starte deine Top-Side-Camps, wenn dein Top-Laner CC zur Hilfe hat (Counter-Gank), und warde Raptor-/Red-Eingänge bei Minute 1:30. Contestet den River Scuttle Crab NICHT, wenn dein Top nicht mit dir mitläuft — du verlierst das 1v1 vor der Form.
- **Sett / Darius (Top):** Free Rhaast-Feed-Targets, wenn du Top gankst. Ihr Kit zwingt sie in Melee-Range, was deine roten Orbs schnell füllt. Warte, bis sie ihre Hauptability (Setts W, Darius' Pull) nutzen, und engage mit **E** durch Wand + **Q** + **W** Knock-up als Rhaast.
- **Vayne / Caitlyn (Bot):** Shadow-Assassin-Prioritätsziele. Sie haben keinen Dash, um **R** zu dodgen, und füllen die blauen Orbs, weil sie auf Range fighten. Nach der Form gankst du Bot-Lane on Cooldown.
- **Malphite / Rammus (Top-Jungle-Counter):** Ihr hartes Point-and-Click-CC sperrt dich aus deiner Combo. Baue ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** früh und engage nie ohne den CC deines Supports zuerst bereit.
- **Yuumi / Lulu (gegnerischer Support):** Free Shadow-Assassin-Targets in Late-Game-Teamfights. **R** sie aus Flank-Position, sobald sie sich vom Carry lösen — sie haben keinen Peel für sich selbst.

## Power Spikes & Siegbedingungen

- **Level 6 + Form-Transformation:** Das ist der Spike (ein "Spike" ist der Moment, in dem dein Champion durch ein Level oder Item viel stärker wird). Vor der Transformation bist du unterdurchschnittlich; danach Top-3-Jungler. Time deine erste Big Play (Gank oder **R**-Pick) auf die Sekunde, in der du dich verwandelst, während das gegnerische Team dich noch für schwach hält.
- **Crab-Kontrolle (Minute 3:15 und Minute 6:00):** Crab gibt XP und Vision. Als Pre-form Kayn kannst du nicht darum dueln; bring deinen Top- oder Mid-Laner zum Contest, oder gib ihn sauber ab und farme Camps statt zu sterben.
- **Erster Drake Fight (Minute 6-9):** Pre-form Kayn ist schlecht in 5v5-Brawls. Kann dein Team Drake ohne dich nehmen, vereinbart einen Voidgrubs-Trade (die kleinen Würmer im Top-River, die eine Passive für den geben, der sie killt) auf der gegenüberliegenden Seite und farme deine Jungle, während sie fighten.
- **Erstes Item fertig (~ Minute 13-15):** ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** für Rhaast oder ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** für Shadow Assassin: hier wechselt deine Gank-Conversion-Rate von "braucht perfektes Setup" zu "Kill mit nur einem Flash vom Laner".
- **Drei-Item-Shadow-Assassin (~ Minute 22-25):** Mit ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** online one-shottet deine **R**-Combo jeden Squishy unter 5% HP. Erzwinge Pickoffs (Kills auf isolierte Targets) vor Objective-Fights.

## Häufige Fehler

- **Falsche Form für die Team-Comp locken.** Pick nicht jedes Game automatisch Shadow Assassin, weil es flashy ist. Schau auf das gegnerische Team: 3+ Tanks/Bruiser = Rhaast (max-HP-Schaden und Sustain zählen). 2+ squishy Carries ohne Dash = Shadow Assassin. Die falsche Orb-Leiste zu füllen ist deine Schuld: kämpfe gegen die passenden Gegner, bis die richtige Leiste lockt.
- **Ganken vor Level 6.** Pre-form Kayn-Ganks machen fast keinen Schaden. Es sei denn, der gegnerische Laner ist unter 30% HP oder hard-CC-gelockt, ist dein Gank verschwendete Zeit, die du für Farm nutzen solltest. Gank nur auf Overkill-Setups (klarer Flash + Ulti-Setup vom Laner), bis du dich verwandelst.
- **R defensiv ohne Exit nutzen.** **Umbral Trespass** macht dich untargetable, während du im Gegner bist, aber du kommst an derselben Stelle raus, von der du gecastet hast. Ultest du in einen 5er-Fight, um CC zu dodgen, und dein Team gewinnt nicht, kommst du in genau den Tod raus, den du vermeiden wolltest. Nutze **R**, wenn du den Kill abschließen kannst oder Teammates ankommen — nicht als Panik-Flash.
- **Mit E durch die Wand ins gegnerische Team.** **Shadow Step**-Wallwalks sind flashy, aber der Cooldown ist lang. Engage durch eine Wand ohne Escape dahinter committet dich voll. Geh nicht all-in (voll committen ohne Rückzug) über eine Wand, außer **R** ist up und du hast ein klares Target.
- **Rote-Orb-Fights als Rhaast ignorieren.** Hast du dich für Rhaast entschieden, füllt jeder Fight gegen ein Melee-Target deine Leiste schneller. Lauf nicht aus einem Skirmish mit dem Top-Laner weg: dive rein, fülle die Leiste und erzwinge die Form bis Minute 5-6 statt Minute 8.

## Fortgeschrittener Tipp

Nutze **E** offensiv als Vision-Tool, nicht nur als Escape. In die Wand der gegnerischen Jungle laufen und 1.5 Sekunden im Terrain warten zeigt, ob ihr Jungler auf der anderen Seite ist, ohne dass du dich committest — Kayn ist für sie unsichtbar, während er in der Wand ist. Ist das Camp weg, weißt du, dass der Gegner auf deiner Seite der Map ist, und rotierst zurück. Steht das Camp noch, kannst du durch die Wand für Invade mit **Q** + **W** Combo aus einem unerwarteten Winkel. Dieser eine Trick wandelt Kayn vom "Scaling Jungler" zum "Information Jungler" im Mid-Game.
