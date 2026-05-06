---
title: "Lee Sin Jungle Build & Guide — Patch 16.9"
slug: "lee-sin-jungle"
language: "de"
patch: "16.9"
champion: "lee-sin"
role: "jungle"
last_updated: "2026-04-29"
description: "Lee Sin Jungle Guide für League of Legends Patch 16.9: Starter-Items, Skirmisher-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein Abschluss-Tipp."
quick_learn:
  champion_dd_id: "LeeSin"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Fighter / Skirmisher Jungle"
  abilities:
    - key: "P"
      name: "Flurry"
      description: "Nach einem Spell erhalten Lee Sins nächste 2 Auto-Attacks Attack Speed und geben Energie zurück. Rhythmus Spell — Auto — Auto."
      dd_spell_id: "LeeSin_Passive"
    - key: "Q"
      name: "Sonic Wave / Resonating Strike"
      description: "Linearer Skillshot. Bei Treffer dasht der Recast zum Ziel mit physischem Schaden auf fehlende HP. Dein Haupt-Gap-Close."
      dd_spell_id: "LeeSinQOne"
    - key: "W"
      name: "Safeguard / Iron Will"
      description: "Dash zu Verbündetem, Ward oder dir selbst mit Shield. Recast gibt Lifesteal und Spell Vamp. Mobilität plus Sustain."
      dd_spell_id: "LeeSinWOne"
    - key: "E"
      name: "Tempest / Cripple"
      description: "AOE-Schaden, der Gegner aufdeckt. Recast verlangsamt Getroffene. Clear-Tool, Anti-Stealth und Slow-Quelle."
      dd_spell_id: "LeeSinEOne"
    - key: "R"
      name: "Dragon's Rage"
      description: "Drehkick, der das Ziel zurückstößt und Gegner dahinter trifft. Pickoff-Finisher und Disruption-Tool."
      dd_spell_id: "LeeSinR"
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3084", name: "Heartsteel" }
    - { dd_id: "3071", name: "Black Cleaver" }
  situational_items:
    - dd_id: "6333"
      name: "Death's Dance"
      against: "gegen Teams mit zwei starken AD-Dealern (Yasuo + Caitlyn): wandelt physischen Schaden in langsames Bluten statt Sofortschlag"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "gegen AP-Burst (Diana, Syndra, Lux mid): Lifeline-Shield macht aus One-Shots überlebbare Trades"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "gegen 3+ Hard-CC-Champions (Leona + Lissandra + Sejuani): Tenacity kürzt Stuns und Roots"
    - dd_id: "3053"
      name: "Sterak's Gage"
      against: "wenn du diven musst (unter Gegnerturm rein für Kill): Lifeline-Shield zündet nach erstem großem Treffer"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "Late-Game-Flank-Versicherung: wenn du R verzögerst, gleicht die Wiederbelebung den Trade aus"
  base_combo: ["Q1", "AA", "E", "AA", "Q2", "R"]
  win_condition: "Gewinne die ersten 14 Minuten mit Invades und Ganks. Mit Eclipse fertig kontestest du jedes Objective und ziehst mit R einen Schlüsselgegner aus der Position. Late Game: Flank suchen, squishy Carry ins Team kicken."
  weakness: "Fällt nach Minute 25 stark gegen skalierende Carries ab. Kein verlässlicher Dash, wenn Q1 verfehlt oder W kein Ziel hat. Hard-CC-Ketten beenden den Engage sofort."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
---

## Überblick

Lee Sin ist ein Early-Game-Jungler — ein Skirmisher, also ein Champion, der kurze Kämpfe zwischen zwei oder drei Spielern gewinnt. Stell dir einen Kampfsportler mit einer Kette aus Dashes vor: er trifft dich mit einer Schallwelle, dasht auf dich, kickt dich in sein Team, und seine Auto-Attacks tragen nach jedem Spell einen eingebauten Attack-Speed-Bonus. Das gesamte Kit dreht sich um eine Idee: in den ersten 15 Minuten der stärkste Kämpfer auf der Map zu sein und diesen Vorsprung dann in Kills, Objectives und Tempo umzusetzen, bevor die gegnerischen Carries skalieren.

Sein Game Plan ist direkt. In den ersten 8 Minuten machst du Invade — du läufst in den gegnerischen Jungle, um Camps zu klauen und den gegnerischen Jungler zu jagen. Danach gankst du Lanes, sobald deine **Q** bereit ist. Im Late Game versuchst du keine 1v1 mehr (die verlierst du) und suchst stattdessen Flanks: du läufst um die Map herum, versteckst dich in einem unwarded Busch und **R**est dann die gegnerische Carry in dein Team. Wenn du **Q1** nicht konstant triffst, funktioniert nichts davon — der Rest des Kits hängt am ersten Skillshot.

## Empfohlener Build

**Starter-Items:** Smite + **Hailblade** für einen schnelleren Jungle Clear mit AOE-Schaden beim zweiten Hit, plus **Refillable Potion**. Nimm Emberknife nur, wenn du maximalen Sustain auf einem langsameren Full Clear mit mehr Solo-Dueling willst.

**Core-Items (in Reihenfolge):**

1. **Eclipse** — Burst, Shield und Omnivamp. Der Zwei-Hit-Shield greift perfekt in deinen Cast → AA → AA-Rhythmus der Passive. Sauberstes Erstes-Item für Skirmishes.
2. **Plated Steelcaps** vs AD-lastige Gegner / **Mercury's Treads** vs 3+ Hard-CC-Champs. Standard ist Plated.
3. **Heartsteel** — HP und ein aufgeladener Auto-Attack, der lange Skirmishes bestraft. Lässt dich über den klassischen "Ich sterbe bei 2 Items"-Timer hinaus brawlen.
4. **Black Cleaver** — Armor Shred, das mit deinem Q-AA-Q-Rhythmus skaliert. Macht auch den physischen Schaden deines Teams zur Kill-Bedrohung.

**Situational Items:**

- **Death's Dance** — gegen Teams mit zwei starken AD-Dealern (z. B. Yasuo + Caitlyn). Verteilt eingehenden physischen Schaden als langsames Bluten, statt sofortigem Schlag.
- **Maw of Malmortius** — gegen AP-Burst-Lanes (Diana, Syndra, Lux mid).
- **Sterak's Gage** — wenn du diven musst (unter den Gegnerturm rein, um zu killen). Der Lifeline-Shield kauft dir die Sekunde, die dein Team zum Follow-up braucht.
- **Guardian Angel** — Late-Game-Flank-Versicherung nach 4 Items.

**Stiefel:** Plated Steelcaps standardmäßig. Boots of Mobility nur auf gank-lastigen Maps ohne frühe CC-Bedrohungen — Nische, kein Standard.

**Skill Order:** **Q** zuerst maxen (Schaden und Gap Close), **E** als zweites (Clear und Slow-Uptime), **W** zuletzt (Utility skaliert auf Rang 1 problemlos). **R** auf Stufe 6, 11, 16.

**Runen:** Primär **Precision** mit **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Sekundär **Domination** mit **Sudden Impact** + **Treasure Hunter** für einen Snowball Lead (früher Vorsprung, der mit der Zeit wächst: Kill → Gold → Item → mehr Kills), oder **Resolve** mit **Second Wind** + **Revitalize**, wenn du eine lange, skalierende Partie erwartest.

## Wichtige Matchups

- **Vi:** Sie verliert Skirmishes pre-6, wenn du ihren **Q**-Charge baitest. Lande deine **Q1** auf ihr, **E** zum Slow, dann dash auf den Support nach dem Kick — peele für deine Carry, während sie auf Cooldown ist.
- **Hecarim:** Skaliert dich nach 3 Items aus, verliert aber Fights pre-9 Minuten. Setze ihn früh unter Druck; wenn du Stufe 6 vor ihm erreichst, gank top oder mid gnadenlos. Kein 1v1 nach seinem ersten Item.
- **Master Yi:** Skill-Matchup. Dein **E** deckt ihn auf, während sein **Q** aktiv ist, und bricht damit seinen Target Lock. Übe das, bis es Reflex ist. Speichere **R**, um ihn aus deiner Back Line in Team Fights zu kicken.
- **Kha'Zix:** Invade bis Stufe 6. Nach seinem evolved **R** kann er dich solo killen, wenn du allein bist — laufe nach Minute 12 nie ohne Team-Coverage allein in den gegnerischen Jungle.
- **Graves:** Spiegel-Tempo-Matchup. Beide Jungler gewinnen die ersten 6 Stufen. Welche Seite mehr gankt, gewinnt. Tracke seine **E**-Charges; wenn beide weg sind, gewinnst du das Duell.

## Power Spikes & Siegbedingungen

- **Stufe 3:** Volles Kit freigeschaltet. Dein Gank-Pattern ist **Q1 → auf Ally-CC oder Flash warten → Q2 → E-Slow → Auto Reset**. Ohne gegnerischen Flash killt das jeden Squishy bei 60% HP.
- **Stufe 6:** **Dragon's Rage** schaltet das Kick-Play frei. Pre-6 hat **R** keinen Wert — ein First Blood pre-6 ist dein höchster Hebel im Spiel.
- **Eclipse-Timing (~ Minute 9):** Du gewinnst lange Skirmishes. Erzwinge Fights auf Scuttle, Drake und Voidgrubs in diesem Fenster.
- **Late Game (~ Minute 30):** Lee fällt gegenüber skalierenden Carries (Vayne, Kog'Maw, Master Yi) ab. Deine verbleibende Siegbedingung ist der Ace-Flank: hol dir Vision im gegnerischen Jungle, finde eine Seitenposition, **R** ihre Carry quer über die Map, follow-up mit **Q-E-W**.

## Häufige Fehler

- **Q1 auf einem Low-HP-Minion in einem Fight verschwenden.** Deine **Q** hat zwei Teile: den Skillshot und den Dash. Wenn du Q1 auf einen Minion castest, um ihn zu finishen, hast du die ganze Ability für 12 Sekunden verbrannt und keinen Gap Close mehr. Speichere Q1 für den All-In (volles Trade-Commitment bis zum Tod).
- **W-Jumping mitten im Skirmish für Sustain.** Der Lifesteal von **W** ist real, aber wenn du auf eine Ward W zum Heal machst, gibst du den Gap Close auf. Wenn der Trade gewinnbar ist, speichere **W** für einen Insec (den Rückwärts-Kick — siehe Tipp) oder zum Sprung auf den Support nach **R**.
- **R-into-Tower ohne Follow-up.** Eine Low-HP-Carry zu deinem Team zu kicken, funktioniert nur, wenn das Team in Reichweite und bereit ist. **R** allein, off-screen, ist ein 100g-Münzwurf.
- **Auto-Leashen der Red Side auf Stufe 1.** Mit Hailblade kannst du Full-Clear von Bot Side ohne Hilfe machen. Das Leash gibt das Scuttle-Race auf. Sag der Bot Lane: nur das erste Attack-and-Go leashen, dann weg.
- **Lee in eine Comp ohne Pickoff-Plan picken.** Lee glänzt, wenn das Team einen einzelnen isolierten Kill verwerten kann (ein "Pickoff": einen Gegner außerhalb des Teamfights ausschalten). Hat dein Team kein Follow-up-CC, ist **R** nur ein Peel-Tool — passe die Build Richtung Death's Dance und Sterak's an statt All-In-Items.

## Fortgeschrittener Tipp

Der "Insec"-Kick: laufe an deinem Ziel vorbei, **W** zu einer hinter ihm platzierten Ward, dann **R** beim Aufkommen — der Kick feuert von hinten und schickt das Ziel in dein Team statt weg. Die volle Sequenz lautet **Q1 Treffer → Q2 Dash → Ward dahinter → W zur Ward → R**. Übe das im Practice Tool, bis du das Timing ohne Nachdenken triffst. Das Fenster zwischen W-Landung und R-Cast beträgt rund 0,3 Sekunden — zu langsam und das Ziel dreht sich zu dir, zu schnell und die W-Animation frisst den R-Cast. Wenn du es unter Druck verkettest, springt Lee in deinen Händen zwei Tiers hoch.
