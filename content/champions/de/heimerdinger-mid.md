---
title: "Heimerdinger Mid Build & Guide — Patch 16.9"
slug: "heimerdinger-mid"
language: "de"
patch: "16.9"
champion: "heimerdinger"
role: "mid"
last_updated: "2026-05-02"
description: "Heimerdinger Mid Guide für Patch 16.9: optimaler Build, Runen, Türmchen-Platzierung, wichtige Matchups, Power Spikes und fortgeschrittene Tipps zur Lane-Dominanz."
quick_learn:
  champion_dd_id: "Heimerdinger"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Artillery"
  abilities:
    - key: "P"
      name: "Hextech Affinity"
      description: "Gain bonus Move Speed while near allied towers or your own deployed turrets."
      dd_spell_id: "Heimerdinger_Passive"
    - key: "Q"
      name: "H-28 G Evolution Turret"
      description: "Deploy a turret (max 3 active). Turrets build charge; at max charge fire a beam. Charges reset on Q cast. Range 350."
      dd_spell_id: "HeimerdingerQ"
    - key: "W"
      name: "Hextech Micro-Rockets"
      description: "Long-range rocket barrage (1325 range) converging on cursor. Extra hits deal reduced damage. Each rocket hitting a champion grants nearby turrets 20% charge."
      dd_spell_id: "HeimerdingerW"
    - key: "E"
      name: "CH-2 Electron Storm Grenade"
      description: "Lob a grenade (970 range): slows enemies in the area, stuns enemies in the center. Fully charges nearby turrets on hit."
      dd_spell_id: "HeimerdingerE"
    - key: "R"
      name: "UPGRADE!!!"
      description: "Empowers next non-ultimate ability. R+Q: 8s mega-turret with AOE splash and slow. R+W: 4 rocket waves. R+E: larger stun zone with knockup in center."
      dd_spell_id: "HeimerdingerR"
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
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3118", name: "Malignance" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "gegen Assassinen und Diver (Zed, Akali, Diana) — Stasis verschafft Türmchen Reaktionszeit"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "gegen Comps mit viel Healing (Vladimir, Soraka mid, Sylas)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "sobald ein Prio-Ziel ein Magic-Resist-Item kauft"
  base_combo: ["Q", "Q", "Q", "E", "W", "R+Q"]
  win_condition: "Baue das Türmchen-Nest, stunne mit E, zerlege mit W. Auf Level 6 zwingst du Gegner mit R+Q Mega-Türmchen weg — eine unverrückbare Todeszone."
  weakness: "Keine Mobilität und sehr kurze Platzierungs-Range (350). Mobile Assassinen schließen die Lücke vor dem Schuss; Türmchen sterben sofort an AOE Waveclear."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8229
      name: "Arcane Comet"
      icon_path: "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Arcane Comet proct über E (Slow fixiert das Ziel) und W und addiert Burst zum Türmchen-DPS. Manaflow Band verhindert leeres Mana beim Nachsetzen. Transcendence verkürzt E und W. Gathering Storm skaliert AP im Late Game."
    secondary_rationale: "Biscuit Delivery trägt durch die mana-hungrigen Anfangslevel und Cosmic Insight reduziert alle Cooldowns inklusive UPGRADE!!! — häufigere R+Q Mega-Rotationen prägen das Mid Game."
    secondary_alternative: "Gegen Lanes mit hohem Poke (Xerath, Vel'Koz) tausche Inspiration gegen Resolve mit Second Wind (regeneriert HP nach Schaden) und Bone Plating (reduziert Burst aus Multi-Hit-Combos), um länger zu überleben."
matchup_draft:
  pick_into:
    - examples: ["syndra", "veigar", "anivia"]
      archetype: "Immobile Burst-Mages ohne Dash"
      reason: "Sie können nicht in ein Drei-Türmchen-Nest spazieren ohne dauerhaft DPS zu fressen. Ihr Burst verlangt das Schließen der Distanz, und der E-Stun plus Türmchen-Beam bestraft den Anlauf, bevor sie zurückschlagen."
    - examples: ["annie", "malphite", "galio"]
      archetype: "Nahkampf-Mages oder Tanks, die in die Türmchen-Range laufen müssen"
      reason: "Ihr Engage ist Nahkampf oder kurze Reichweite. Drei platzierte Türmchen machen den Anlauf tödlich — ein voll geladener Beam trifft, bevor die Engage-Animation endet."
  counterpicks:
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "Long-Range Artillery-Mages, die außerhalb der Türmchen-Range poken"
      reason: "Türmchen decken nur einen Radius um Heimerdinger. Artillery-Mages stehen auf 1000+ Range, sicher außerhalb des Nests, und chippen ihn auf null, ohne je in seine Zone zu kommen."
    - examples: ["zed", "akali", "katarina"]
      archetype: "Mobile Assassinen, die die Distanz vor der Türmchen-Reaktion schließen"
      reason: "Türmchen haben einen langsamen Angriffszyklus. Ein Triple-Dash-Assassin betritt das Nest und tötet Heimerdinger vor dem ersten Beam; der Cooldown ist zu kurz, um ihn zu retten."
    - examples: ["twisted-fate", "ryze"]
      archetype: "Globale Roamer, die das Türmchen-Nest komplett umgehen"
      reason: "Heimerdinger kann nicht roamen — das Versetzen der Türmchen kostet drei Q-Investments. Der Gegner holt sich Free Kills auf den Side Lanes, während Heimerdinger ein Nest optimiert, das nie umkämpft wird."
---

## Überblick

Heimerdinger ist ein Zone-Control-Mage, der seine Lane gewinnt, indem er sie für den Gegner unbewohnbar macht. Seine **H-28 G Evolution Turrets (Q)** — bis zu drei gleichzeitig aktiv — erzeugen ein dauerhaftes Schadensfeld, das jeden Gegner bestraft, der in Nahkampf- oder Cast-Range tritt. Bei voller Aufladung feuert jedes Türmchen einen mächtigen Beam; die **CH-2 Electron Storm Grenade (E)** stunnt oder verlangsamt Gegner in dieser Zone, und die **Hextech Micro-Rockets (W)** zermürben Ziele bis 1325 Range. Das Ergebnis ist ein Champion, dessen Stärke ausschließlich vom Positioning abhängt: Steht das Türmchen-Nest, ist er im direkten Schlagabtausch fast nicht zu töten; steht es nicht, gehört er zu den verwundbarsten Champions im Spiel.

Sein **UPGRADE!!! (R)** ändert die Rechnung komplett. **R+Q** platziert ein verstärktes Mega-Türmchen — es macht AOE-Splash-Schaden, slowt und hält 8 Sekunden, unabhängig von weiteren **Q**-Casts. Stell es dir als autonome Zone-Denial-Maschine vor. Der Game Plan in der Mid-Lane: Bis Level 6 ein Nest aufbauen und halten, dann mit **R+Q** den Gegner von der Tier-1-Tower zwingen und ins Mid Game snowballen (snowball = einen frühen Vorsprung schaffen, der sich progressiv vergrößert).

## Empfohlener Build

**Startgegenstände:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) Doran's Ring + 2 Health Potions. Mana ist kritisch: Jedes Türmchen kostet 20 Mana und du wirst sie ständig nachsetzen.

**Core Items (in Reihenfolge):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — Burst-Spike auf dem ersten Item, Mana-Regen für den Türmchen-Nachschub und Magic Penetration (die Fähigkeit, einen Teil der gegnerischen Magieresistenz zu ignorieren), die W-Poke spürbar macht.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flache Magic Penetration, um Squishies zu bestrafen, die in Türmchen-Range treten.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — verstärkt den Burst, sobald der Gegner unter einer HP-Schwelle ist; passt zu R+E-in-W-Follow-up-Combos.
4. ![Malignance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3118.png) **Malignance** — senkt den Cooldown von **UPGRADE!!!** und boostet AP, während die Ulti aktiv ist; häufigere Mega-Türmchen-Rotationen definieren das Mid Game.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — Late-Game-AP-Multiplikator; jeder Türmchen-Beam und jede Rakete wird für sich allein zur Bedrohung.

**Situative Items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — gegen Assassinen und Diver (Zed, Akali, Diana). Stasis (ein kurzer eingefrorener Unverwundbarkeits-Zustand) lässt die Türmchen drei Sekunden lang den Burst absorbieren, während du ihre Cooldowns aussitzt.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — gegen Heal-lastige Comps (Vladimir, Sylas). Wendet Grievous Wounds (ein Debuff, der Heilung um 40% senkt) über Türmchen-Treffer an.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — sobald ein Prio-Ziel (Prio-Ziel = der gegnerische Champion, dessen Tod dein Team am meisten bedroht, meist der gefütterte Carry) ein MR-Item kauft; ersetzt Rabadon's, wenn das ganze Team MR stackt.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes ist Standard. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) Ionian Boots of Lucidity sind okay, wenn du extra Cooldown Reduction brauchst, um **UPGRADE!!!** schneller zu zyklen.

**Skill Order:** Maxe **Q** zuerst (Hauptschadensquelle und Türmchen-Power), **W** als Zweites (Poke und Türmchen-Charge), **E** zuletzt. **R** auf Level 6, 11, 16.

**Runen:** Primär **Sorcery** mit **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Gathering Storm**. Sekundär **Inspiration** mit **Biscuit Delivery** und **Cosmic Insight**.

## Wichtige Matchups

- **Syndra:** Sie wirft Sphären auf Distanz, muss aber aus fester Position casten. Setze drei Türmchen unter deine Tier-1-Tower, halte die Wave slow-pushed (Minions in der Lane-Mitte stapeln, damit die nächste Welle größer ankommt) und unterbreche mit **E** das Sphären-Aufsammeln. Ab Level 6 gewinnst du den All-In (volles Commitment in einen Kampf mit Tötungsabsicht) mit **R+Q** auf umkämpftem Boden.
- **Zed:** Das härteste Matchup im Pool. Er dasht durch deine Türmchen, bevor sie feuern. Respektiere seine Power auf Level 3 und Level 6; kaufe ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) Zhonya's Hourglass als zweites Item. Wenn er **Death Mark (R)** zündet, sofort Stasis auslösen — die Türmchen haben dann drei Sekunden Zeit zum Schießen.
- **Orianna:** Ausgewogenes Poke-Matchup. Sie kann deine Türmchen mit **Command: Shockwave (R)** in Teamfights wegschieben. In der Lane platziere die Türmchen auf der Seite der Wave, von der sie kommen muss. Vermeide Gruppieren am Nest, wenn ihr Ball in der Nähe ist.
- **Twisted Fate:** Er ignoriert dein Nest und roamt. Schiebe die Wave unter seinen Turm, bevor er geht, ward den Fluss und such nach **R+E** (Knockup) in **W**, falls er per Teleport zurückkommt. Sein Macro Game (übergeordnete Map-Strategie) kannst du nicht stoppen, aber seine Base-Tower bestrafen.
- **Viktor:** Immobiler Mage, der zum Schaden machen still stehen muss. Ein Drei-Türmchen-Nest lockt seinen **Death Ray (E)** heraus, während du mit **W** hinter dem Cluster pokest. Nach Level 6 zwingt das **R+Q** Mega-Türmchen ihn ganz von der Wave oder verbrennt seinen Flash.

## Power Spikes & Siegbedingungen

- **Level 1:** Setze zwei Türmchen in die Minion-Wave, bevor der erste Cannon spawnt. Gegner, die in Auto-Attack-Range laufen, kassieren überraschend hohen DPS (Damage Per Second — der dauerhafte Schaden, den die Türmchen pro Sekunde anrichten) und ziehen sich zurück — du hast First Push (Wave-Vorteil: Deine Minions drücken zum gegnerischen Turm, sodass du die Lane für Drake oder Mid-Hilfe verlassen kannst), ohne Mana auf Poke zu verschwenden.
- **Level 6:** **UPGRADE!!!** unlocked. Das **R+Q** Mega-Türmchen hält 8 Sekunden und ist immun gegen CC (Stun, Slow oder jegliche Crowd Control); es macht aus Heimerdingers Zone eine Todesfalle. Erzwinge sofort einen Fight oder einen Tower Trade.
- **Luden's Echo fertig (etwa Minute 11-13):** W-Poke critet (kritischer Treffer: zufällig verstärkter Schlag mit 175% Schaden) jetzt Squishies für relevanten Schaden. Kombiniere mit E + W, um Kills durch das Nest zu bestätigen.
- **Malignance online (etwa Minute 18-20):** Der UPGRADE!!! Cooldown sinkt bei hoher CDR (Cooldown Reduction — die Stat, die die Wartezeit zwischen Fähigkeiten verkürzt) auf etwa 60 Sekunden. Du kannst pro Rotations-Fight ein Mega-Türmchen setzen, also fast bei jedem Objective Spawn (Objective Spawns = Erscheinen von Baron Nashor oder Drake auf der Map, meist alle 5-6 Minuten).

## Häufige Fehler

- **Türmchen in einer Linie platzieren.** Stell sie im Dreieck oder auf den Pfad, den der Gegner zum Anlauf nehmen muss. Eine Linie aus drei Türmchen feuert nur, wenn der Gegner geradeaus kommt — ein Dreieck schießt aus mehreren Winkeln und ist viel schwerer zu dodgen.
- **R+Q im offenen Feld nutzen.** Das Mega-Türmchen ist ein Zonen-Tool, kein Solo-Kill-Tool. Setze es in einen Chokepoint (eine Engstelle wie Baron Pit, Dragon Pit oder den Bush an der Tier-2-Tower), damit der Gegner durch den Schadensradius muss.
- **Q recasten, während Türmchen noch Ladung haben.** Ein neues Q setzt ein Türmchen mit null Ladung und resettet die Ladungen ALLER Türmchen. Warte, bis das älteste Türmchen seinen Beam abgefeuert hat, bevor du es ersetzt — sonst wirfst du einen voll geladenen Schuss weg.
- **Passive Move Speed vergessen.** **Hextech Affinity** gibt dir Bonus-Move-Speed in Türmchen-Nähe. Nutze das Nest als Kite-Pad (Kiten = rückwärts laufen, während du weiter Schaden machst): Lauf in den Cluster hinein, um Ganks zu entkommen, nicht weg.

## Fortgeschrittener Tipp

Beherrsche die **R+E** Knockup in **W** Follow-up-Combo. Wenn UPGRADE!!! verfügbar ist, caste **R** und werfe sofort **E**: Sie landet als größere Zone und Gegner im Zentrum werden geknockuppt (in die Luft geschleudert, kurz handlungsunfähig) statt nur gestunnt. Die Airtime entspricht ungefähr einem Stun, aber der Knockup unterbricht Channels (etwa Katarinas Ulti oder Zeds Recall), und die größere Zone fängt fliehende Ziele, die dem normalen E-Stun ausgewichen wären. Während sie in der Luft sind, feure das volle **W**-Raketen-Barrage — alle fünf Raketen konvergieren und treffen das CC-Ziel, bevor es landet, und richten nahezu maximalen Schaden an, bevor irgendeine Defensiv-Aktion möglich wäre.
