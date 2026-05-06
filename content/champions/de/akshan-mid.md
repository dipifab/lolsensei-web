---
title: "Akshan Mid Build & Guide — Patch 16.9"
slug: "akshan-mid"
language: "de"
patch: "16.9"
champion: "akshan"
role: "mid"
last_updated: "2026-04-29"
description: "Akshan Mid Lane Guide für League of Legends Patch 16.9: Lethality-Core-Build, Press the Attack Runen, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Akshan"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Lethality-Assassine"
  abilities:
    - key: "P"
      name: "Dirty Fighting"
      description: "Jeder 3. Treffer macht Bonusschaden und gibt Akshan einen Schild, wenn er einen Champion trifft. Der Auto-Attack feuert einen zweiten reduzierten Schuss, den man für Move Speed canceln kann."
      dd_spell_id: "Akshan_Passive"
    - key: "Q"
      name: "Avengerang"
      description: "Bumerang-Skillshot mit physischem Schaden auf Hin- und Rückweg. Reichweite verlängert sich pro getroffenem Gegner — eine saubere Linie durch Minions fliegt weiter, als man denkt."
      dd_spell_id: "AkshanQ"
    - key: "W"
      name: "Going Rogue"
      description: "Passiv: Gegner, die Verbündete töten, werden als Scoundrels markiert. Einen zu töten erweckt die Toten und gibt Bonusgold. Aktiv: Camouflage und Move Speed Richtung Scoundrels (bricht außerhalb von Brush/Terrain)."
      dd_spell_id: "AkshanW"
    - key: "E"
      name: "Heroic Swing"
      description: "Enterhaken auf Terrain; Akshan schwingt herum und schießt auf den nächsten Gegner, springt auf Knopfdruck oder bei Aufprall ab. Cooldown reset bei Takedowns — chaint einen zweiten Swing."
      dd_spell_id: "AkshanE"
    - key: "R"
      name: "Comeuppance"
      description: "Visiert einen Champion an und lädt ~5 Sekunden lang Kugeln. Recast feuert alle gespeicherten Kugeln auf das erste getroffene Ziel; Schaden skaliert mit fehlenden HP — Execute-Tool."
      dd_spell_id: "AkshanR"
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
    - { dd_id: "3142", name: "Youmuu's Ghostblade" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "6698", name: "Profane Hydra" }
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3814"
      name: "Edge of Night"
      against: "gegen Single-Target-Point-and-Click-CC (Lissandra R, Malzahar R, TF Goldkarte) — Spellshield blockt 1 Cast / 30s"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "gegen schweren AP-Burst (Annie, Veigar, Syndra) — Magic Shield + Lifeline gegen eine Delete-Rotation"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "gegen Heal-Stacking-Comps (Soraka mid, Vladimir, Aatrox top) — Grievous Wounds auf Autos und R-Kugeln"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "gegen assassinen-lastige Comps (Talon + Zed Double AD) — zweites Leben für den Carry, der R offen channeln muss"
    - dd_id: "6699"
      name: "Voltaic Cyclosword"
      against: "alternatives First Item gegen squishy Comps zum Snowball mit Pickoffs: der Energized-Auto-Slow lockt Carries fest, die R sonst verfehlt"
  base_combo: ["Q", "AA", "E", "AA", "R"]
  win_condition: "Snowball die Lane mit Press-the-Attack-3-Hit-Trades und Q-Max-Range-Pokes, konvertiere den Lead ab Minute 6 mit E-Roams und execute Squishies mit R in Objective-Fights."
  weakness: "Sein E hookt nur an Terrain — offene Lane-Positionen lassen ihn ohne Swing-Reset. Single-Target-Point-and-Click-CC und Wind Wall canceln seinen R-Channel und Q-Poke hart."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8233, name: "Absolute Focus", icon_path: "perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "xerath", "vel-koz"]
      archetype: "Immobile Artillery Mages ohne Dash"
      reason: "Diese Champions stehen still zum Scalen oder Outpoken; Akshans E rund um die Mid-Wand schließt die Distanz und chained Q + 3-Hit-Passive in R-Execute, bevor sie einen Cast beenden."
    - examples: ["annie", "lux", "ahri"]
      archetype: "Mages mit einzelnem telegrafiertem Escape"
      reason: "Akshan baitet Annies Stun, Lux' Q oder Ahris R, dann E-Swing in der Recovery-Frame für einen kostenlosen 3-Hit-Trade samt geschütztem Passiv-Proc."
    - examples: ["senna", "ziggs"]
      archetype: "Backline-Scaler mit schwachem Self-Peel"
      reason: "Akshans R lockt auf 2500 Reichweite und ignoriert das meiste Peel; sobald das Ziel unter 50% HP fällt, executen die Kugeln durch ihr Kit, selbst über den River."
  counterpicks:
    - examples: ["lissandra", "malzahar", "twisted-fate"]
      archetype: "Point-and-Click-CC-Mages"
      reason: "Ihr Lock-on-Stun oder Suppress cancelt Akshans R-Channel, bricht den E-Swing mid-rotation und outet sein W-Camouflage — Edge of Night blockt 1 Cast / 30s, rettet aber nicht zweimal."
    - examples: ["yasuo", "yone"]
      archetype: "Wind-Wall-Champions"
      reason: "Wind Wall blockt Akshans Q-Bumerang, jeden Auto-Attack im E-Swing und jede Kugel von R; eine einzige getimte Wand kippt den ganzen Trade und erlaubt ihnen einen Schadensfreien All-in."
    - examples: ["akali", "fizz", "diana"]
      archetype: "Multi-Dash-Nahkampfassassinen"
      reason: "Akshans E hookt nur an Terrain — durch einen fed Assassinen im Open kann er nicht swingen. Akalis Shroud bricht sein Targeting, Fizz E-springt über seine Autos, Dianas R kettet ihn mid-channel."
---

## Überblick

Akshan ist ein Marksman/Assassinen-Hybrid mit einem Enterhaken zur Repositionierung, einem Stealth, der an Vergeltungsmarkierungen gebunden ist, und einem Missing-HP-Execute-Ultimate (eine Fähigkeit, die Gegner unter einer HP-Schwelle automatisch tötet). Sein Kit zahlt sich in Mid Lane aus, weil die Wandgeometrie um River und Tri-Bush ![Heroic Swing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/AkshanE.png) **Heroic Swing** konstantes Terrain zum Anhaken bietet, und weil ![Avengerang](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/AkshanQ.png) **Avengerang** die meisten Mages im Push überholt, sobald es leveled. Auf offenem Feld ist er ein Low-Mobility-Champion, in Wandnähe High-Mobility — die ganze Partie dreht sich darum, Fights zu wählen, in denen die Map für dich arbeitet.

Er scaled mit **Lethality**-Items — Equipment, das physischen Schaden in zusätzliche Armor-Penetration umwandelt, ideal um Squishy-Ziele wie Mages und Ranged Carries zu löschen, aber wenig effektiv gegen Full Tanks. Sein Schaden ist primär physisch (AD), nicht magisch.

Sein Game Plan ist einfach in der Form, aber anspruchsvoll im Timing: shove die Wave (drücke deine Minions in den gegnerischen Tower) mit **Q**, such einen 3-Hit-Trade (ein kurzer Schadensaustausch, in dem du dich auf ein paar Hits committst und zurückziehst — kein voller Killversuch) durch den Schild von ![Dirty Fighting](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/champion/Akshan.png) **Dirty Fighting**, dann roame (verlasse deine Lane, um Bot oder Top zu helfen) zwischen Minute 6 und 12, um Lane-Prio (die Freiheit, deine Lane ohne Verlust von Minions oder Tower zu verlassen) in Kills zu konvertieren, die **E** zurücksetzen. Skill Expression sitzt an zwei Stellen: (1) **Q** an einem Frontline-Tank (den Bruisern/Tanks, die Fights eröffnen) auf ein Backline-Ziel (die Squishy-Carries dahinter) prallen lassen, sodass der Bumerang seine Reichweite über die Kette ausdehnt, und (2) den richtigen Moment für den **R**-Channel lesen — zu früh fängst du einen Stun mid-channel, zu spät hat das Ziel über die Execute-Schwelle gehealt.

## Empfohlener Build

**Starter-Items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 1 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Standardöffnung — der AD plus Lifesteal füttert den Schild der Passive in 3-Hit-Trades.

**Core-Items (in Reihenfolge):**

1. ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — First-Item Lethality plus aktiver Move-Speed-Buff, der Sidelane-Roams in Kills verwandelt. Der größte Power Spike (ein Moment, in dem deine Stärke einen scharfen Sprung macht) deines Builds.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — Attack-Speed-Boots: die Passive (jeder 3. Treffer) proct schneller und der **R**-Kugelstrom wird enger.
3. ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — bringt AOE-Waveclear (ein Schwung schadet der ganzen Minion-Wave gleichzeitig), einen aktiven Dash, den du nach **E** chainen kannst, und mehr Lethality. Bestes Second-Item-Lethality diese Patch.
4. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — die Passive killt jeden Champion unter 5% HP, perfekt aligniert mit dem Missing-HP-Scaling von **R**: Ziele, die deine R sonst auf 1 HP zurücklassen würde, sterben trotzdem.
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — Armor-Pen-Finisher gegen den Late-Game-Tank in der gegnerischen Frontline. Kauf das statt eines defensiven Items, wenn die Partie über 35 Minuten läuft.

**Situative Items:**

- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — gegen Single-Target-Point-and-Click-CC (Lock-on-Disables, denen man nicht ausweichen kann: Lissandra R, Malzahar R, Twisted Fate Goldkarte). Das Spellshield (eine Einmal-Barriere, die den nächsten gegnerischen Spell auf dich absorbiert) blockt 1 Cast pro 30 Sekunden.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — gegen schweren AP-Burst (One-Rotation-Magieschaden, der dich in einer Sekunde löscht: Annie, Veigar, Syndra). Der Magic Shield + Lifeline (ein Heal-und-Attack-Buff, der unter ~30% HP triggert) hält dich lange genug am Leben, um mit **R** zurückzuschlagen.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — gegen Heal-stacking-Compositions (Soraka mid, Vladimir top, Aatrox top). Wendet Grievous Wounds (ein Debuff, der Heilung um ~50% reduziert) auf Auto-Attacks und auf jede **R**-Kugel an.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — gegen assassinen-lastige Comps (Talon + Zed Double AD = zwei starke Physical-Damage-Burst-Threats). Ein zweites Leben ist mehr wert als jeder DPS-Slot, wenn du der Hauptcarry bist, der **R** im Open channelt.
- ![Voltaic Cyclosword](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6699.png) **Voltaic Cyclosword** — alternatives First Item gegen Squishy-Comps, die du mit Solo-Pickoffs (einzelne isolierte Gegner einsammeln) snowballen willst (einen Kill-Lead aufbauen, der sich in mehr Kills aufaddiert). Der Energized-Auto klebt einen harten Slow auf, der einen fliehenden Carry festhält, den deine **R** sonst verfehlen würde.

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** Default für die Attack Speed. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** nur gegen Teams mit 3+ Hard-CC-Quellen (Stuns, Roots, Knock-Ups, die dich aus deinen Buttons aussperren).

**Skill-Order:** Maxe **Q** zuerst (Waveclear und Haupt-DPS), **E** als zweites (für den Per-Shot-Schaden des Swings im All-in), **W** zuletzt. Punkt in **R** auf Level 6, 11, 16.

**Runen:** Primärbaum **Precision** mit **Press the Attack** (nach 3 Treffern auf einem Champion wird dein nächster Schaden verstärkt — perfekt für den Passiv-Proc), **Presence of Mind** (Mana-Refund auf Takedown), **Legend: Alacrity** (Bonus-Attack-Speed), **Coup de Grace** (mehr Schaden gegen Gegner unter 40% HP). Sekundär **Sorcery** mit **Absolute Focus** + **Gathering Storm**, oder **Inspiration** mit **Magical Footwear** (kostenlose Boots auf Minute 12) + **Cosmic Insight**, wenn du das gesparte Gold in einen früheren First-Item-Spike investieren willst.

## Wichtige Matchups

- **Yasuo / Yone:** Hartes Matchup. Ihre **W** Wind Wall (eine vertikale Windwand, die alle eingehenden Non-Melee-Projektile für ~4 Sekunden blockt) blockt **Q**, die Autos während deines **E**-Swings und jede Kugel von **R**. Halte **Q** zurück, bis sie Wind Wall auf einen Minion oder deinen Jungler verbrennen, dann committe. Speichere ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** als Third-Item-Swap gegen Yasuo (vs seinen **Q**-Knock-up — ein Spell, der dich kurz in die Luft wirft und deine Inputs sperrt).
- **Zed:** Even bis leicht favorabel in Lane. Dein 3-Hit-Trade übertrifft seinen Q-W-Poke pre-6, aber seine **R** macht ihn untargetable (nicht selektierbar von Spells oder Autos) für einen Moment und dodget den Lock-on deiner R. Speichere **E** für seinen Shadow Swap und nutze sie als Counter-Jump.
- **Lissandra:** Hard Counter. Ihre **R** ist Point-and-Click und cancelt deinen **R**-Channel mid-rotation. Kaufe ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** vor dem Second Item, niemals **R** in ihrem Gesicht ohne Spellshield up.
- **Annie:** Aufpassen auf Level 6. Ihr Stun-All-in schlägt den Windup deiner **R**, wenn sie dich in Lane catcht. ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** als Third Item verwandelt einen 1-Rotation-Kill in einen überlebbaren Trade.
- **Veigar:** Favorabel. Sein Cage ist langsam genug, dass **E** sauber rausswingt, und er hat keinen Escape, wenn du nach Level 6 all-in gehst. Speichere **R** für nach seinem **E**-Cage auf einer Wave.

## Power Spikes & Siegbedingungen

- **Level 2:** Mit **Q** + **E** hast du deinen ersten All-in: **Q** auf die Wave für die Reichweitenverlängerung, **E** an eine Seitenwand, Swing für die Autos, **Q**-Return auf dem Weg raus. Der größte Level-2-Spike der Mid Lane diese Patch.
- **Level 6:** Erste **Comeuppance** schaltet Sidelane-Execute-Druck frei. Allein mit ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** ist ein unwarded River-Fight gegen ein Ziel unter 50% HP ein sicherer Kill.
- **![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) Youmuu's Ghostblade fertig (~ Minute 9-11):** Wave-Kontrolle kippt. Aktiviere das Ghostblade auf Cooldown bei jedem Roam — ein Sidelane-Gank mit **E** + **Q** + 3-Hit-Schild-Trade konvertiert fast immer auf einen Champion ohne MR.
- **![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) The Collector online (~ Minute 22-26):** Ziele bei 6% HP sterben am Item-Passiv, selbst wenn deine **R** sie auf 1 HP zurückgelassen hätte. Erzwinge Objective-Fights hier und channel **R**, sobald ein Backline in Vision auftaucht.

## Häufige Fehler

- **E in die offene Mid Lane.** Deine **E** hookt nur an Terrain — wenn du Heroic Swing Richtung Champion ohne Wand in der Linie cast, schlägt der Cast fehl oder hookt dich an die falsche Wand und wirft dich in deren Team. Plane immer die Wand vor dem Knopfdruck.
- **R vor dem gegnerischen Team channeln.** 5 Sekunden Windup (die Zeit, die du channelst, bevor der Release startet) in Sichtlinie sind 5 Sekunden Schießbude für jeden Point-and-Click-CC. Channel **R** aus der Fog of War (der dunkle, unwarded Teil der Map, in den Gegner nicht sehen können) oder hinter einer Wand, dann lauf raus, um die Kugeln im letzten Frame zu releasen.
- **Den Bonusschuss canceln, wenn er feuern sollte.** Der zweite Auto der Passive macht ~50% reduzierten Schaden, zählt aber trotzdem für den 3-Hit-Counter. Im Kill-Trade nicht canceln — die Move Speed ist weniger wert als das Abschließen des Schild-Procs.
- **Nackter Q-Poke ohne Minion-Bounce.** Eine **Q** auf Max-Range ohne nichts dazwischen ist die schwächste Version des Spells. Schick sie immer durch eine Wave oder einen Low-HP-Minion, damit die Reichweite sich verlängert und der Rückweg auf den nächsten Champion ausgerichtet bleibt.
- **Going Rogue Camouflage im Open.** Der Active bricht in ~1 Sekunde, wenn du nicht im Brush oder an einer Wand bist. In der offenen Lane macht er fast nichts — speichere ihn für einen Flank (von einer Seite in einen Fight kommen, die der Gegner nicht beobachtet) durch Tri-Bush oder River-Brush.

## Fortgeschrittener Tipp

Lass die ![Avengerang](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/AkshanQ.png) **Q** an einem Frontline-Tank abprallen, um den Backline-Carry zu erreichen. Jeder vom Bumerang getroffene Champion verlängert die verbleibende Reichweite, also reist eine **Q**, die am Frontline-Bruiser am Sichtrand startet, weiter durch den Carry und zurück zu dir und macht doppelten Schaden am selben Ziel auf dem Rückweg. Übe den Winkel im Custom-Game gegen Bots: positioniere dich so, dass der Bumerang aus dem ersten Champion im gewünschten Winkel für das zweite Ziel austritt — die gechainte Reichweite erreicht eine Backline, die sich hinter ihrem Team in Sicherheit wähnte.
