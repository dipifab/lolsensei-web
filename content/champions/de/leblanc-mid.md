---
title: "LeBlanc Mid Build & Guide — Patch 16.9"
slug: "leblanc-mid"
language: "de"
patch: "16.9"
champion: "leblanc"
role: "mid"
last_updated: "2026-05-05"
description: "LeBlanc Mid Guide für League of Legends Patch 16.9: AP Burst Assassin Build, Sigil-Double-Tap-Combos, wichtige Matchups, Spike auf Stufe 6 und häufige Fehler."
quick_learn:
  champion_dd_id: "Leblanc"
  difficulty: 4
  damage_type: "magic"
  champion_class: "AP Assassin / Burst Mage"
  abilities:
    - key: "P"
      name: "Mirror Image"
      description: "Fällt LeBlanc unter 40% HP, wird sie 1 Sekunde unsichtbar und erzeugt einen Klon, der ihre Bewegung bis zu 8s nachahmt. Defensives Bait-Tool, kein Schaden."
      dd_spell_id: "Leblanc_Passive"
    - key: "Q"
      name: "Sigil of Malice"
      description: "Single-Target-Spell, der trifft und das Ziel 3,5s markiert. Eine zweite Schadensquelle auf der Markierung zündet das Sigil für den echten Burst. Erstattet Mana und Teil-Cooldown, wenn Q tötet."
      dd_spell_id: "LeblancQ"
    - key: "W"
      name: "Distortion"
      description: "Dash zu einer Position, Schaden bei Ankunft. Innerhalb von 4s recasten, um zum Startpunkt zurückzukehren. Engage mit W1, Escape mit W2 — den Recast zu timen trennt einen sauberen Pick von einem Throw."
      dd_spell_id: "LeblancW"
    - key: "E"
      name: "Ethereal Chains"
      description: "Skillshot-Kette, die den ersten Gegner fesselt. Bleibt er 1,5s gefesselt (kein Flash, kein Dash, kein Minion-Break), wird er rooted und nimmt Bonusschaden. Hauptsetup für die Q-Detonation."
      dd_spell_id: "LeblancE"
    - key: "R"
      name: "Mimic"
      description: "Recast der zuletzt genutzten Grundfähigkeit mit verstärktem Schaden. Erlaubt Doppel-Q für vollen Burst, Doppel-W für sichereren Engage oder Doppel-E zum Locken. R resettet keine CDs, fügt einen extra Cast hinzu."
      dd_spell_id: "LeblancR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
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
    - { dd_id: "4646", name: "Stormsurge" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3135", name: "Void Staff" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "gegen Diver und Assassins (Zed, Diana, Talon, Akali) — die Stasis lässt dich ihren Burst aussitzen und dann mit Mimic-Q killen"
    - dd_id: "3152"
      name: "Hextech Rocketbelt"
      against: "alternatives erstes Item für einen dritten Gap-Closer neben W — extra Burst und ein Dash, der mit W stackt für Engages aus dem Fog"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "gegen Single-Target-Magic-CC, das deinen Engage tötet (Annie Stun, Lissandra R, Ahri Charm, TF Stun): der Spell Shield frisst die erste"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "Tausch für Void Staff gegen Teams mit 2+ MR-Items (Mercury's Treads + Banshee's oder jede Anti-AP-Comp)"
  base_combo: ["W", "Q", "AA", "E", "R-Q"]
  win_condition: "Snowballe Mid mit Q-Poke vor Stufe 6, dann konvertiere Stufe 6 in einen Single-Target-Kill auf einen Squishy mit W-Q-AA-R-Q. Roame Side Lanes, sobald R up ist; Pickoff mit W rein / W raus."
  weakness: "Squishy ohne Defensive außer dem W-Rückkehr. Falloff im Late: skalierende Mages mit Sustain (Kassadin, Cassiopeia) ziehen ab Minute 25 vorbei. Lock sie mit Hard CC vor dem Burst und sie stirbt sofort."
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
    primary_rationale: "Domination primary: Electrocute proct bei jeder Q-AA-E-Folge (3 Hits in 3s) und liefert Gratis-Burst über die Sigil-Detonation hinaus. Sudden Impact gibt Magic Pen nach jedem W, und Ultimate Hunter kürzt Sekunden vom R, damit das Doppel-Q zwischen Roams schneller zurückkommt."
    secondary_rationale: "Sorcery secondary: Manaflow Band fixt LeBlancs knappes Early-Mana-Budget, sodass du Q ohne Recall spammen kannst, und Transcendence drückt die Ability Haste über 40% für niedrigere W- und R-Cooldowns bei wiederholten kurzen Trades."
    secondary_alternative: "Gegen Lanes, die dich out-poken (Xerath, Vel'Koz), Sorcery durch Inspiration tauschen mit Magical Footwear (Gratis-Boots ~Min 12) + Cosmic Insight (Extra-Summoner-Haste auf Flash für engere W-Flash-Combos)."
matchup_draft:
  pick_into:
    - examples: ["veigar", "annie", "twisted-fate"]
      archetype: "Immobile Mages ohne zuverlässigen Dash"
      reason: "Ohne Movement-Ability entkommen sie deiner W-Q-AA-Detonation nicht, und Veigars Cage ist ein Kreis, den du mit W einfach umgehst."
    - examples: ["lux", "syndra"]
      archetype: "Squishy Artillery-Mages mit hohen Cooldowns"
      reason: "Überlebst du das erste Q-Poke, all-inst du, sobald ihr langer Setup-Spell down ist — Lux Q und Syndra E sind 12-13s Fenster zum Bestrafen."
    - examples: ["seraphine", "karma"]
      archetype: "Enchanter-Mids ohne harten Escape"
      reason: "Ihre Shields verzögern, stoppen aber nicht die zweite Q-Detonation; W rein über den Shield, Q nochmal mit R, Kill bestätigt vor dem Sustain."
  counterpicks:
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "Long-Range Artillery-Mages"
      reason: "Ihre Fähigkeiten reichen 1100-1500 Units, weit über deiner Q-Reichweite von 700; sie shoven dich aus der XP-Range und du kannst nicht hinter ihren CC-Setups all-innen."
    - examples: ["kassadin", "cassiopeia"]
      archetype: "Late-Game-Mids, die dich überskalieren"
      reason: "Überleben sie deinen Stufe-6-9-Spike, ziehen sie bei rohem Schaden und Mobilität vorbei; Kassadins R ab 11 weicht deinem W-Q-R-Fenster aus, Cassiopeias Grounded-Zone schaltet die W-Rückkehr ab."
    - examples: ["lissandra", "galio"]
      archetype: "Mid Laner mit zuverlässigem Lockdown"
      reason: "Lissandras Q-W oder Galios W-Taunt fixieren dich während des Sprungs; LeBlanc hat kein Cleanse, und ihre HP schmelzen, sobald sie stehenbleibt."
---

## Überblick

LeBlanc ist ein AP Burst Assassin: ein Champion, der darauf gebaut ist, ein einzelnes Squishy-Ziel in 1-2 Sekunden zu zerlegen (dieses kurze Fenster mit hohem Schaden heißt "Burst"). Jeder Kampf dreht sich um ihre Passive **Sigil of Malice (Q)** — Q landet einen kleinen Hit und markiert das Ziel, dann zündet jede zweite Schadensquelle auf der Markierung das Sigil für den echten Burst. Der klassische "Double-Tap"-Rhythmus ist Q zum Markieren, dann Auto-Attack oder **E** zum Zünden.

Der Game Plan: Pokeen mit Q in der Lane (6-Sekunden-CD lässt dich spammen), Squishy auf Stufe 6 mit W-Q-AA-R-Q sprengen, dann roamen (die eigene Lane verlassen, um woanders eine Play zu machen) zu Side Lanes, sobald R up ist. LeBlanc ist von Minute 8 bis Minute 25 am stärksten; danach holen skalierende Mages und Bruiser auf. Plane immer den Ausgang — **Distortion (W)** lässt sich für Engage *und* Disengage nutzen, aber nur, wenn du den Recast für die Flucht aufsparst, nicht nur für die Kill-Bestätigung.

## Empfohlener Build

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 Health Potions. Der Ring fixt die Mana-Regen für Q-Spam in der Lane.

**Core items (in Reihenfolge):**

1. ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — Burst-Spike mit zusätzlichem On-Hit-Magicschaden und Movement-Speed-Proc bei einem Takedown. Passt perfekt zur Q-AA-E-Combo: Jede Detonation triggert auch Stormsurge.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flache Magic Penetration (dein Spellschaden ignoriert einen Teil der gegnerischen Magic Resist). Direkter Schadensupgrade gegen Squishies.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — extra Burst, wenn der Gegner unter ~40% HP ist (eine HP-Threshold-Passive: aktiviert sich erst, wenn das Ziel unter diese Linie fällt). Stackt mit dem Mimic Q, um ADCs one-shot zu legen.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — Late-Game-Multiplikator auf deine gesamte AP. Dein größter einzelner Schadens-Slot.
5. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — prozentuale Magic Penetration, wenn Gegner anfangen MR zu kaufen; hält dein Schadens-Scaling gegen tankigere Ziele.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — gegen Diver und Assassins (Zed, Diana, Talon, Akali). Der Stasis-Active macht dich ~2,5 Sekunden unverwundbar, du wartest ihren Burst aus und finishst dann mit dem Mimic Q.
- ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** — alternatives erstes Item, wenn du einen Extra-Dash willst; stackt mit W für längere Engage-Reichweite aus dem Fog of War (Bereiche der Map ohne Vision).
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — gegen Single-Target-Magic-CC (Annie Stun, Lissandra R, Ahri Charm, Twisted Fate Stun). Der Spell Shield blockt die erste Fähigkeit, die auf dich gecastet wird.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — Alternative zu ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff**, wenn dein Team die Heal-Aura mehr braucht als rohen Burst.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** sind Standard. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** sind richtig gegen 2+ Hard-CC-Threats (Annie + Galio, Lissandra + Leona).

**Skill order:** Maxe **Q** zuerst (Hauptpoke und -schaden), **W** als zweites (geringerer Cooldown auf dem Engage/Escape-Dash und mehr Schaden bei Impact), **E** zuletzt (die Root-Dauer skaliert mit Rang, aber der CD zählt im Burst weniger). Punkt in **R** auf Stufe 6, 11, 16.

**Runes:** Runen sind passive Boni, die du vor dem Match wählst; du nimmst einen Primary Tree (5 Runen) und einen Secondary Tree (2 Runen). Primary **Domination** mit **Electrocute** als Keystone — proct (der Runeneffekt aktiviert sich), wenn du ein Ziel mit drei Fähigkeiten oder Auto-Attacks innerhalb von 3 Sekunden triffst, was Q-AA-E mühelos abdeckt. Dazu **Sudden Impact** (mehr Magic Pen nach einem W-Dash), **Sixth Sense** für Vision-Druck beim Roamen und **Ultimate Hunter** für niedrigeren R-CD, damit das Doppel-Q schneller zurückkommt. Secondary **Sorcery** mit **Manaflow Band** (Mana-Sustain für Q-Spam) und **Transcendence** (Ability Haste — deine Fähigkeiten kommen schneller wieder). Stat shards: zwei Adaptive Force + Health Scaling.

## Wichtige Matchups

- **Annie:** Vor Stufe 6 out-tradest du sie mit Q-Poke. Nach 6 hat sie ihren Stun bereit (ihre Passive blinkt "Pyromania" auf ihrem Portrait bei 4 Stacks) und eine Tibbers-Chain killt dich. Kauf ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** als drittes Item, wenn sie früh snowballt (baut einen kleinen Vorteil zu einem viel größeren aus).
- **Twisted Fate:** Ein Roam-Wettrennen. Er sucht sich seine Lane mit **R**, verliert aber die Lane direkt — Q jedes Mal, wenn er für ein Last-Hit vorgeht, und zone ihn (kontrolliere den Raum um ihn herum) von der Wave weg. Track seine **R**-Windups mit Vision Wards (platzierbare Items, die in einem Bereich Vision geben) am River.
- **Kassadin:** Hard Counter im Scaling. Vor 6 pokest du ihn mit Q (er hat keine Antwort bis Stufe 6); nach Stufe 11 dasht sein **R** schneller als deine W-Rückkehr und er out-tradet dich. Gewinne die Lane vor Minute 14 oder ruf den Jungler zweimal.
- **Xerath:** Out-rangt dich. Sein **Q** reicht 1500 Units (deins 700). Bleib hinter deiner Minion-Wave, weiche seinem **Q** seitlich aus und commit nur, wenn er low Mana ist — sein Q kostet 80-100 Mana, 5 verfehlte Q und er ist trocken.
- **Diana:** Ausgeglichen vor 6 (du out-pokest), losing nach 6, wenn sie ihr **R** landet. Kauf ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** nach ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge**, wenn sie 2+ Kills hat; die Stasis verschwendet ihre Ulti-Combo.

## Power Spikes & Siegbedingungen

- **Stufe 2 (Q + W):** Erster echter Spike. Q-AA-W2 ist ein Poke-and-Leave-Pattern: dash rein mit W, Q, Auto-Attack zum Zünden des Sigil, Recast W zum Fliehen. Damit zonest du den Gegner aus der zweiten Wave.
- **Stufe 6:** Dein erstes **R** ist der größte Einzelspike des Spiels. Mimic-Q auf ein markiertes Ziel fügt rund 200-250 Schaden auf Stufe 6 mit einem Item hinzu; gegen einen Squishy bei 65% HP bestätigt die volle W-Q-AA-R-Q-Combo den Kill, bevor er Flashen kann.
- **![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) Stormsurge fertig (~ Minute 11-13):** Burst-Schwelle steigt um weitere 80-100 Schaden pro Treffer. Roame zu Side Lanes mit W, sobald deine Wave unter den gegnerischen Mid-Tower geschoben ist.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ Minute 23-26):** Multiplikator auf jedes andere AP-Item. Danach legst du jeden Squishy durch Banshee's Veil mit W-Q-R-Q-E one-shot. Erzwinge Fights um Objectives (Drake, Baron) und such nach Backline-Picks (gegnerischen Carry isoliert vom Team eliminieren).

## Häufige Fehler

- **W rein für die Kill ohne W2 zu sparen.** Distortions Recast-Fenster ist nur 4 Sekunden. Wenn du deine ganze Combo in einer Sekunde verfeuerst und dann 3 Sekunden mitten im gegnerischen Team stehst, fängt dich ihr Support und du stirbst. Plane immer: W rein, Schaden, W raus — die Rückkehr ist der Unterschied zwischen sauberem Pick und Throw (vermeidbarer Tod, der dem Gegner Momentum gibt).
- **Sigil mit einem weiteren Q zünden.** Q zündet die eigene Markierung nicht — nur eine *zweite* Schadensquelle zündet. Neue LeBlancs casten Q zweimal in der Erwartung großer Zahlen; du brauchst Q + Auto-Attack, oder Q + E, oder Q + R-Q. Das Pattern ist markieren-dann-zünden, nie markieren-dann-markieren.
- **R-W als ersten Reflex.** Mimic-W hat doppelte Dash-Reichweite, bringt dich aber doppelt so tief in Gefahr. Mimic Q auf ein markiertes Ziel ist fast immer der Kill-Knopf; Mimic W ist nur für Chases und Escapes.
- **Sinnlos die Lane pushen ohne zu roamen.** Sobald du ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** und **R** hast, liegt dein Wert in den Side Lanes. Wenn du Mid weiterfarmst, während eine Side Lane stirbt, verschwendest du den Champion. Push die Wave rein, ping "auf dem Weg" und nutze **W** durch den Fog of War, um den Side Laner zu picken.
- **Bruiser-Items gegen ein Squishy-Team bauen.** LeBlanc hat keinen built-in Sustain — Items, die Burst gegen Durability tauschen, verschwenden ihr Kit. Bleib bei ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** + ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap**, außer das gegnerische Team hat 3+ Tanks.

## Fortgeschrittener Tipp

Die "W-Flash"-Combo ist LeBlancs Signature-Surprise-Engage. Cast **W** Richtung Ziel, und im winzigen Dash-Fenster drück **Flash** — Flash trägt dich weitere 400 Units über deinen W-Landepunkt hinaus, und der W-Schaden trifft an der neuen Position. Die Gesamtreichweite W + Flash schlägt die meisten Counter-CC-Setups (Annies Stun, Lux' Binding, Galios W-Taunt), weil du den Gap schneller schließt, als sie reagieren können. Spar **R** für den zweiten Cast: Bist du auf Punkt-blank-Range, beendet R-Q auf dem markierten Ziel den Kill, bevor ihr Support peelen (ihren Carry schützen) kann. Der Trick ist das Buffer-Timing: Drück Flash ganz am Anfang von Ws Dash, nicht am Ende, sonst bricht W ab und der Burst ist verschwendet.
