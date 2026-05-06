---
title: "Caitlyn Bot Build & Guide — Patch 16.9"
slug: "caitlyn-bot"
language: "de"
patch: "16.9"
champion: "caitlyn"
role: "bot"
last_updated: "2026-04-29"
description: "Caitlyn Bot Lane Guide für League of Legends Patch 16.9: Starter-Kit, Lane-Bully-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein Pro-Tipp."
quick_learn:
  champion_dd_id: "Caitlyn"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Lane Bully"
  abilities:
    - key: "P"
      name: "Headshot"
      description: "Alle paar Angriffe schießt Caitlyn einen Bonus-Schuss, der mit Crit-Chance skaliert. Reichweite verdoppelt gegen gefangene oder genettete Ziele."
      dd_spell_id: "Caitlyn_Passive"
    - key: "Q"
      name: "Piltover Peacemaker"
      description: "Linearer Skillshot mit langer Reichweite und Initial-Channel. Trifft in einer Linie; spätere Ziele bekommen reduzierten Schaden. Haupt-DPS und Waveclear."
      dd_spell_id: "CaitlynQ"
    - key: "W"
      name: "Yordle Snap Trap"
      description: "Legt eine Falle. Beim Auslösen wird der Champion 1.5s aufgedeckt und gerooted und gewährt einen verstärkten Headshot."
      dd_spell_id: "CaitlynW"
    - key: "E"
      name: "90 Caliber Net"
      description: "Gezieltes Netz, das den Gegner verlangsamt und Caitlyn zurückstößt. Es ist ein Escape gegen Diver, kein Engage-Tool."
      dd_spell_id: "CaitlynE"
    - key: "R"
      name: "Ace in the Hole"
      description: "Channel + globaler Single-Target-Execute. Verbündete des Ziels können die Kugel body-blocken — du brauchst Isolation."
      dd_spell_id: "CaitlynR"
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
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "gegen Tank-Frontlines oder HP-Stack-Comps (Sion, Cho'Gath, Dr. Mundo) — Bonus-Armor-Pen skaliert mit gegnerischen Max-HP"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "gegen heftige Heal-Comps (Soraka, Vladimir, Aatrox) — appliziert Grievous Wounds, kappt Heilung beim Tag"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "gegen Assassin- oder Diver-Druck (Zed, Samira, Yasuo flank) — Movement Speed plus Schwellen-Shield-Passive"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "gegen Hook- oder Pick-Comps (Blitzcrank, Thresh, Morgana Q) — Spell Shield frisst einen Priority-CC vor dem Burst"
  base_combo: ["W", "Q", "AA"]
  win_condition: "Domiere die Bot Lane mit Q-Reichweite und Trap-Setups, snowball Headshot-Procs durch The Collector und Infinity Edge, schließe Fights hinter deiner Frontline, kite mit E und finishe Low-HP-Runner mit R."
  weakness: "Kein echter Escape, sobald E auf Cooldown. Hard-countered von Divern und Assassinen (Samira, Yasuo, Zed flank). Ohne Early Lead in Mid-Game-Picks ziehen Hyperscaler wie Jinx oder Vayne vorbei."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8021
      name: "Fleet Footwork"
      icon_path: "perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
---

## Überblick

Caitlyn ist die Marksman mit der höchsten Grundreichweite im Spiel und der Archetyp des **Lane Bully** (ein Champion, der die Lane von den ersten Minuten an dominiert und vom Lead lebt, den er in der Laning Phase aufbaut). Ihre ganze Identität dreht sich darum, dem gegnerischen Duo die ersten 12 Minuten zur Hölle zu machen und diesen Vorsprung dann in Objectives umzumünzen. Ihre **Piltover Peacemaker (Q)** überreicht den Basic Attack fast jedes anderen ADC, ihre **Yordle Snap Trap (W)** verwandelt Chokepoints in Damage Zones und die Passive **Headshot** bestraft jeden, der sich rund um die Traps oder das Netz schlecht positioniert. Im Gegenzug hat sie mit die niedrigsten Armor- und HP-Werte aller ADCs: Der Preis ihrer Lane-Diktatur ist, dass sie sofort wegschmilzt, sobald ein Gegner sie aus der Position fischt.

Der Game Plan ist einfach zu beschreiben und schwer auszuführen: poke (gegnerische HP aus sicherer Distanz auslaugen) die Lane mit der **Q**, lege Traps in den Bushes und am Tri-Bush, um das Combo **W → verstärkter Headshot** zu drohen, und wandle den Lead vom ersten Recall in Turret-Plate-Gold um. Nach **The Collector** und **Infinity Edge** verschiebt sich deine Rolle: Du wirst zur Back Line Carry (die Carry, die ihren Schaden aus dem hinteren Teamfight-Slot bringt). Steh auf der zweithintersten Position, kite mit **E**, wenn ein Diver auf dich springt, und nutze **R** als Execute (Hinrichtung unter HP-Schwelle) auf Low-HP-Runner — niemals als Poke-Tool.

## Empfohlener Build

**Starter-Items:** Doran's Blade + 2 Health Potions. Selbst wenn du deine Lane gewinnst, skip das zweite Doran's — das Gold ist in einer Pickaxe-Component für The Collector deutlich besser angelegt.

**Core-Items (in Reihenfolge):**

1. **The Collector** — First-Item-Rush. Die Execute-Passive triggert unter 5% HP und löscht genau die Sorte Low-HP-Runner, die deine **R** sowieso erledigen will. Lethality ist Early ideal, weil gegnerische ADCs noch kaum Armor haben.
2. **Berserker's Greaves** — Attack-Speed-Boots. Mercury's Treads nur, wenn das Gegnerteam 3+ Hard-CC-Bedrohungen (Crowd Control: Stun, Root, Knockup) hat.
3. **Infinity Edge** — dein größter Damage Spike. Caitlyns Headshot skaliert mit Critical Strike Chance, und IE macht aus jedem Headshot einen Beinahe-One-Shot auf Backline-Ziele.
4. **Rapid Firecannon** — extra Auto-Attack-Reichweite (über 700 base + RFC + IE macht dich zum längsten AA-Champ in der Lobby) und ein Energized-Proc, der natürlich mit dem Headshot-Timing zusammenpasst.

**Situative Items:**

- **Lord Dominik's Regards** — gegen Tank-Frontlines oder HP-Stack-Comps (Sion, Cho'Gath, Dr. Mundo). Ersetzt Rapid Firecannon, wenn das Gegnerteam 3+ Tanks hat.
- **Mortal Reminder** — gegen Heal-schwere Comps (Soraka, Vladimir, Aatrox). Appliziert Grievous Wounds (kappt erhaltene Heilung), sobald du eine Ziel taggst.
- **Phantom Dancer** — gegen Assassin- oder Diver-Druck. Die HP-Threshold-Passive (ein Schild, der unter Schwelle ausgelöst wird) plus Movement Speed gibt dir die halbe Sekunde, die du brauchst, um mit **E** rauszukommen.
- **Edge of Night** — gegen Hook- oder Pick-Comps (Blitzcrank, Thresh, Morgana Q). Der Spell Shield frisst einen Priority-CC, bevor du gebursted wirst — das ist in solchen Matchups der Unterschied zwischen Leben und Tod.

**Boots:** Berserker's Greaves ist Default. Mercury's Treads nur gegen schweren AP-CC wie Brand Support oder Zyra Support.

**Skill-Order:** Maxe **Q** zuerst (Waveclear und Haupt-DPS), **E** als zweites (reduziert den Cooldown deines einzigen Escapes), **W** zuletzt (Trap-Schaden skaliert, aber der Trap-Timer nicht). Punkt in **R** auf Level 6, 11, 16.

**Runen:** Primärbaum **Precision** mit **Fleet Footwork**, **Presence of Mind**, **Legend: Alacrity**, **Coup de Grace**. Sekundär **Sorcery** mit **Manaflow Band** und **Gathering Storm**, oder swap auf **Inspiration** mit **Magical Footwear** und **Cosmic Insight**, wenn du Extra-Gold beim Boots-Upgrade willst.

## Wichtige Matchups

- **Draven:** Leicht ungünstig auf Level 1-3, weil der Burst (geballter Schaden in 1-2 Sekunden) seiner Spinning Axe deinen Trade übertrumpft. Kein Fight pre-3 — freeze die Wave (halte sie nahe deinem Turret eingefroren) unter Tower, erreich Level 3 mit allen drei Abilities, und trade (kurzer Schlagabtausch in der Lane) erst, wenn eine **W** im Lane-Bush liegt. Bestraf seine Mana-Leerlauf-Fenster nach Q-Q-Q.
- **Ezreal:** Even, leicht Caitlyn-favored, wenn der Support dich committen lässt. Du outranges seine **Q** deutlich. Jedes Mal wenn er einen Minion Q'd, bekommst du eine freie **Q** durch die Lane. Nicht **in** seine **W**-Bahn dodgen.
- **Jhin:** Even-Matchup, entschieden durch **R**-Snipe-Disziplin. Respektiere seine vierte Kugel (riesiger Schaden). Wenn seine **W** unten ist, lauf vor und trade. Nutze deine **E**, um seine **W**-Root zu dodgen, falls er sie telegrafiert.
- **Vayne:** Stark Caitlyn-favored vor Level 9, Albtraum nach Level 11. Das ist deine Goldmine: shove die Wave hart pre-3 (push die Lane konsequent), zwing sie mit **Q**-Poke aus der Lane, und halt deinen Jungler über Dive-Chancen (unter Tower gehen, um sie trotz Tower-Schüssen zu töten) auf Level 6 informiert. Überlebt sie zwei Items, ist die Lane vorbei und du musst in den Back-Line-Modus wechseln.
- **Samira:** Sie will einen All-In (vollkompletter Trade bis zum Kill) im Nahkampf, sobald sie die W hat. Lege Traps in den Lane-Bush, um ihren Engage-Pfad zuzustellen, halte **E** als Knockback für genau den Moment, in dem sie reindasht (nicht in Poke verbraten), und fight nie gegen sie ohne Phantom Dancer Shield aktiv.

## Power Spikes & Siegbedingungen

- **Level 2:** Mit einem Punkt in **Q** und einem in **E** chunkt das Q-AA-AA-Combo 30-40% des HP des gegnerischen ADC, wenn er zum Last-Hit vorgeht. Halt die Wave Lane-Mittig und such dieses Fenster.
- **Level 6:** Erste **Ace in the Hole** schaltet Pick-Druck (einen isolierten Gegner außerhalb des Teamfights eliminieren) frei. Cast sie aus einem Tri-Bush, damit der Reveal der Kugel deine Position nicht verrät. Nicht als Poke verschwenden — warte auf einen Low-HP-Runner ohne Verbündete in der Nähe.
- **The Collector fertig (~ Minute 8-10):** Erster Execute-Breakpoint. Die meisten Squishies (Champs mit wenig Defense) unter 5% HP sterben sofort an der Passive, also wird eine **Q**, die durch eine Low-HP-Minionlinie auf einen Champion durchcleavt, zum Free Kill.
- **Infinity Edge online (~ Minute 18-22):** Dein größter Damage Spike. Headshot-Procs gehen von "tut weh" zu "löscht den ADC". Erzwing hier Objective-Fights — Drake oder Rift Herald — und bau Vision rund um deine Win-Condition-Zonen.

## Häufige Fehler

- **Q für Waveclear spammen, ohne Mana zu managen.** Caitlyn ist Early mana-hungry. Q die Wave nur, wenn sie zwei Melee-Minions plus einen Caster aufreiht, sonst kommst du leer ins nächste Trade-Fenster.
- **W-Traps als Poke werfen.** Traps sind ein Setup-Tool, kein Damage-Tool. Leg sie in Chokepoints (Lane-Bush, Tri-Bush, River-Eingang), wo der Gegner zwangsläufig zum Last-Hit oder Rotaten durchläuft. Eine nackte Trap zu Füßen des gegnerischen ADC verschwendet eine Sekunde Lane-Prio (priority — der Lane-Vorteil, der dir erlaubt, die Lane ohne Ressourcen-Verlust zu verlassen).
- **Im Teamfight automatisch auf Maximum-AA-Range stehen.** Maximale AA-Reichweite stellt dich außerhalb des Peels (der Schutz, den deine Verbündeten aufbringen) deines Teams. Steh auf der zweithintersten Position, damit ein flankender Assassin (Eintritt von einer ungedeckten Seite) dich nicht löscht, bevor dein Support reagieren kann.
- **R als Poke vom anderen Map-Ende einsetzen.** **Ace in the Hole** hat einen langen Channel, und jeder nahe Verbündete body-blockt die Kugel. Heb sie für **isolierte** Low-HP-Runner auf — Ziele, bei denen kein Verbündeter innerhalb 350 Units stehen kann.
- **E verbrennen, um einen Kill zu chasen.** **90 Caliber Net** ist dein einziger Escape. Ist sie auf Cooldown, bist du eine Glass Cannon (Champion mit hohem Schaden und niedriger Defense, typisch für ADCs) ohne Antwort auf einen Diver. Nutz sie zum Fliehen, nicht zum Schließen der Distanz.

## Fortgeschrittener Tipp

Übe die Sequenz **"Trap → Q → verstärkter Headshot"** in Chokepoints. Lauf bis an einen Tri-Bush oder Jungle-Eingang, leg die **W** hinter die gegnerische Linie auf der Seite, zu der sie sich zurückziehen würden, und schieb sie dann mit **Q**-Poke. In dem Moment, in dem sie auf die Trap treten, garantiert dir der 1.5s-Root einen Follow-up **Q** plus einen verstärkten Headshot — und der verstärkte Schuss hat **doppelte Reichweite** gegen gefangene Ziele, das heißt du feuerst ihn aus einer Distanz, aus der die meisten ADCs nicht mal Auto-Attacks setzen können. In der Praxis macht das aus einem 2v2-Lane einen 1.5v2: Der gegnerische ADC muss zwischen Lane-Prio verlieren (priority — die Lane verlassen, ohne CS zu sichern) und in ein garantiertes Combo treten wählen. So oder so gewinnst du den Trade.
