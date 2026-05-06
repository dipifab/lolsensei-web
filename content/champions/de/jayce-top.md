---
title: "Jayce Top Build & Guide — Patch 16.9"
slug: "jayce-top"
language: "de"
patch: "16.9"
champion: "jayce"
role: "top"
last_updated: "2026-05-04"
description: "Jayce Top Guide für League of Legends Patch 16.9: Weapon-Swap-Mechanik, Lethality-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein Profi-Tipp."
quick_learn:
  champion_dd_id: "Jayce"
  difficulty: 4
  damage_type: "mixed"
  champion_class: "Fighter / Skirmisher"
  abilities:
    - key: "P"
      name: "Hextech Capacitor"
      description: "Jeder Weapon Swap (R) gibt Jayce einen kurzen Movement-Speed-Burst und lässt ihn kurzzeitig die Kollision mit Einheiten ignorieren."
      dd_spell_id: "Jayce_Passive"
    - key: "Q"
      name: "To the Skies! / Shock Blast"
      description: "Hammer: Sprung zum Ziel, physischer Schaden und verlangsamt nahe Gegner. Cannon: AOE-Skillshot mit großer Reichweite — Haupt-Poke-Tool."
      dd_spell_id: "JayceToTheSkies"
    - key: "W"
      name: "Lightning Field / Hyper Charge"
      description: "Hammer: passive Mana-Rückgabe auf Autos, aktive Schadensaura um Jayce. Cannon: maximale Attack Speed auf den nächsten 3 Angriffen — Burst-Fenster."
      dd_spell_id: "JayceStaticField"
    - key: "E"
      name: "Thundering Blow / Acceleration Gate"
      description: "Hammer: kurzer Knockback mit magischem Schaden in % max HP — Execute und Disengage. Cannon: setzt ein Gate, das Verbündete beschleunigt und eine Q (Shock Blast) durchverstärkt."
      dd_spell_id: "JayceThunderingBlow"
    - key: "R"
      name: "Mercury Cannon / Mercury Hammer"
      description: "Stance Swap (Cooldown 6s). Wechselt zwischen Hammer (Engage, Sustain, Knockback) und Cannon (Poke, AOE Waveclear). Der erste Angriff nach dem Wechsel zu Cannon reduziert Armor und Magic Resist des Ziels."
      dd_spell_id: "JayceStanceHtG"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6697", name: "Hubris" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "gegen starke AP-Bedrohungen (Vladimir, Rumble, Kennen): Magic Shield rettet beim Burst und gibt AD"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "gegen Single-Target Hard CC Engage (Camille E, Sett W, Malphite R): Spellshield blockt den Lockdown"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "wenn vorne und fokussiert: Wiederbelebung erlaubt mehr Commit in Skirmishes"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "Wechsel von Plated Steelcaps wenn Gegner 3+ AP/CC-Bedrohungen haben; Tenacity verkürzt Stuns und Slows"
  base_combo: ["Q", "AA", "R", "Q", "AA", "E"]
  win_condition: "Cannon Q für Poke vor Level 6, dann All-in mit Hammer Q Sprung, W Aura, E Knockback unter 50%. Wandle Lane-Vorsprung in Splitpush-Druck auf Side Waves um."
  weakness: "Mana hungry: ein verfehlter Q-Poke ruiniert den Trade. Harte Gap-Closer (Camille E, Malphite R) schließen Distanz vor dem Swap. Schwächelt im Late vs MR-Stacking."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Press the Attack proct durch das Trade-Pattern Cannon Q + AA + Hammer Q-AA-E und gibt +8% Schaden pro Skirmish. Triumph regeneriert HP bei Multi-Takedowns, Legend: Alacrity bringt AS in W (Hyper Charge) ans Cap, Coup de Grace finisht Kills unter 40% HP."
    secondary_rationale: "Sorcery sekundär: Manaflow Band verhindert leeres Mana beim Cannon-Q-Spam in langen Lanes. Transcendence gibt Ability Haste, damit das Weapon-Swap-Fenster schneller zurückkommt — jedes zusätzliche Q in der Lane ist HP weniger für den Gegner."
    secondary_alternative: "Gegen Ranged-Top-Poker (Vladimir, Kennen, Quinn) Sorcery zu Resolve mit Bone Plating (reduziert Schaden der ersten 3 Treffer) und Second Wind (passive HP-Regen unter 50%) für Lane-Sustain wechseln."
matchup_draft:
  pick_into:
    - examples: ["nasus", "garen", "sett"]
      archetype: "Immobile Melee-Bruiser ohne Ranged-Antwort"
      reason: "Sie haben keine Möglichkeit, mit der Cannon-Q-Reichweite zu interagieren. Pokes sie für die ersten 6 Level von der Wave weg: Nasus verliert Q-Stacks, Garen kommt nie zur Q, Sett füllt seine W (Haymaker) Bar nie."
    - examples: ["yorick", "tryndamere"]
      archetype: "Langsame Scaler ohne Lane-Harass"
      reason: "Ihr Kill-Threat braucht Items. Cannon Q nimmt Minuten an Farm vor dem Power Spike weg, und Hammer E Knockback verweigert das All-in-Fenster, wenn sie endlich committen wollen."
  counterpicks:
    - examples: ["malphite", "maokai"]
      archetype: "Tanks mit Item-MR und Engage-Ult"
      reason: "Sie itemizen gegen Cannon Poke (Bramble Vest, Negatron Cloak), und ihre Ult (Malphite R, Maokai R) Flash-engagt über Hammer E Knockback hinweg. Jayce schwächelt, wenn die Lane ohne Kill lange läuft."
    - examples: ["vladimir", "kennen"]
      archetype: "Ranged-Top-Scaler mit Sustain oder gleicher Range"
      reason: "Vladimirs Q (Transfusion) heilt durch den Poke; Kennens W (Electrical Surge) übertrifft die Cannon-Q-Reichweite. Beide erzwingen einen Poke-Trade, den Jayce ohne All-in-Option verliert."
    - examples: ["camille", "renekton"]
      archetype: "Hard-CC-Bruiser mit schnellem Gap-Close"
      reason: "Camille E (Hookshot) und Renekton W (Ruthless Predator) schließen die Distanz innerhalb des Cannon-Q-Cast-Windows und locken Jayce ein, bevor er zu Hammer E swappen kann. Kein Dash zum Peel."
---

## Überblick

Jayce ist ein Ranged-Melee-Hybrid-Skirmisher, der mit seinem Weapon Swap (R) lebt oder stirbt. In **Cannon Stance** ist er ein Long-Range-Poke-Spezialist mit AOE-Skillshot Q und einem Movement-Speed-Gate (E), das die Q durchverstärkt. In **Hammer Stance** wird er ein Melee-Bruiser mit Leap-Q, Aura-W und einem Knockback (E) mit magischem Schaden in % max HP. Die R hat 6 Sekunden Cooldown, und der erste Angriff nach dem Wechsel zu Cannon reduziert Armor und Magic Resist — der Eingangs-Trigger für jedes All-in.

Top Lane Jayce will lange Lanes. Erodiere HP mit **Cannon Q + E Gate** (Poke aus Distanz), zieh dich auf sichere Reichweite zurück, wiederhole. Wenn der Gegner unter halbem HP ist, swap zu Hammer, spring mit **Q**, droppe **W** für Aura-Schaden und Mana-on-Hit-Passive, finish mit **E** Knockback falls er überlebt. Wandle jeden Lane-Vorsprung in Splitpush-Druck — eine Side Lane allein pushen und den Gegner zur Antwort zwingen. Cannon-Q-Reichweite in Side ist einer der sichersten Splits im Spiel, und Eclipse plus Hubris geben den Burst (hoher Schaden in 1-2 Sekunden) für 1v1-Skirmish-Siege gegen die meisten Top-Laner.

## Empfohlener Build

**Starting Items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** in poke-freundlichen Matchups. Wechsel zu ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** gegen einen Ranged Top (Vladimir, Quinn, Kennen) für Survival in den frühen Cannon-Q-Trades.

**Core Items (in Reihenfolge):**

1. ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — erster Spike. Der Schild proct durch zwei Fähigkeiten in 1.5s, was Jayce mit Cannon Q + Hammer Q nach Swap natürlich trifft. Gibt AD, Omnivamp (Life-Leech auf allen Schaden) und Ability Haste.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — Standard-Boots gegen einen AD-Top-Laner (das meiste Meta).
3. ![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) **Hubris** — Lethality (Stat, der einen festen Teil der gegnerischen Rüstung ignoriert) plus eine Passive (Eminence), die mit Takedowns (Kill oder Assist) Stacks sammelt und so Schaden von einem Kill auf den nächsten skaliert. Ideal als zweites Item, wenn du vorne bist.
4. ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — Lethality und Slow on Damage. Der Slow auf Cannon Q macht fliehende Gegner zu Catch-Targets für Hammer Q.

**Situational Items:**

- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — gegen AP-Bedrohungen (Vladimir, Rumble, Kennen). Der Magic Shield rettet beim Burst und gibt AD.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — gegen Single-Target Hard CC Engage (Camille E, Sett W, Malphite R). Der Spellshield lädt sich außerhalb des Kampfes auf und blockt die nächste Lockdown-Fähigkeit (Hard CC, das dich immobilisiert).
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — wenn du vorne bist und fokussiert wirst. Die Wiederbelebung erlaubt härteres Committen in Skirmishes; wenn du dein Leben für zwei tauschst, kommst du zurück und holst dir das dritte.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — Wechsel von Plated Steelcaps, wenn das gegnerische Team 3+ AP- oder CC-Bedrohungen hat; die Tenacity-Passive verkürzt Stuns und Slows.

**Boots:** Plated Steelcaps Standard. Mercury's Treads gegen viel Magic Damage oder Chain CC.

**Skill Order:** Maxe **Q** zuerst (die Hauptschadensquelle in beiden Stances), **E** als zweites (Knockback für Execute, Gate für Poke-Verstärkung), **W** zuletzt. Setze **R** auf Level 6, 11, 16.

**Runes:** Primär **Precision** mit **Press the Attack**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Sekundär **Sorcery** mit **Manaflow Band** und **Transcendence**. Gegen Ranged-Top-Poker wechsel zu **Resolve** mit **Bone Plating** + **Second Wind**.

## Wichtige Matchups

- **Darius:** Vor 6 kite ihn (rückwärts bewegen während du angreifst, außerhalb seiner Reichweite) mit Cannon Q und betrete nie den äußeren Ring seiner Q (Decimate). Hammer E Knockback canceled das Reset seiner W (Crippling Strike) bei richtigem Timing; einmal unter Turm geschoben, verliert er allen Kill-Threat.
- **Camille:** Sie gewinnt nach 6, wenn ihre E (Hookshot) up ist. Tracke den E-Cooldown: wenn down, freeze die Wave (halte die Minion-Linie vor deinem Turm ohne sie weiterzuschieben) und chip ihre HP mit Cannon Q. Wenn up, halte ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** geladen.
- **Malphite:** Lane gewinnbar bis er ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** plus ein einzelnes Armor-Item hat, danach kitzelt Cannon Q ihn nur. Gewinne die Lane in den ersten 12 Minuten oder akzeptiere einen Scaling-Loss; erwäge Teamfight-Items für die Side-Lane-Skirmishes zu rushen.
- **Fiora:** Bait ihre W (Riposte) mit gefaktem Hammer Q — starte die Sprung-Animation, dann stop. Wenn ihre W auf Cooldown ist, all-in mit der vollen Hammer-Combo. Wenn du sie mit Q in W triffst, verlierst du eine Fähigkeit mit 16s Cooldown für nichts.
- **Vladimir:** Das härteste Matchup im Standard-Pool. Seine Q heilt durch deinen Cannon-Poke und seine W (Sanguine Pool) dodget den Hammer-E-Knockback. Frag den Jungler früh nach Ganks bevor er 2 Items hat, dann meide Teamfights und splitpushe (eine Side Lane allein pushen, um den Gegner zur Antwort zu zwingen) statt zu groupen.

## Power Spikes & Siegbedingungen

- **Level 2 (Q + W oder Q + E):** Cannon Q + AA + Swap zu Hammer Q ist ein 35-40% HP Trade auf den meisten Squishies. Wenn der Gegner für ein Melee-Minion-Last-Hit hochläuft, drop die Combo und back off; der passive Move Speed beim Swap bringt dich raus, bevor er antworten kann.
- **Level 6 (erster R-Rank):** Beide Stances unlocken voll. Der Cannon-zu-Hammer All-in ist jetzt ein Kill-Threat bei 40% HP statt nur ein Chunk-Trade.
- **![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) Eclipse Completion (~ Minute 11-13):** Erster großer Spike. Schild + Omnivamp erlauben Commits in längeren Trades; du musst nicht mehr nach einem einzelnen Cannon-Hammer-Zyklus zurückziehen.
- **![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) Hubris online (~ Minute 19-22):** Eminence-Stacks (die Takedown-Bonus-AD-Passive) starten zu snowballen (wachsender Vorteil: Kill → AD-Bonus → mehr Kills). Erzwinge eine Side-Lane-Skirmish um Eminence zu stacken, dann rotiere mit vollem Schaden auf Objectives.

## Häufige Fehler

- **Cannon Q ohne Setup werfen.** Nackte Q kostet viel Mana und ist leicht zu dodgen. Drop zuerst die **E** (Acceleration Gate) Richtung Gegner; das Gate verstärkt die durchgehende Q (mehr Reichweite, mehr Schaden), und das leichte Delay zwingt den Gegner zu einer Bewegungsrichtung, bevor du feuerst.
- **Zu früh zu Hammer swappen.** Wenn du swappst bevor der Gegner unter ~50% HP ist, committest du zu einem Melee-Fight ohne Burst zum Finishen. Bleib Cannon bis die Chip-Damage-Schwelle erreicht ist, dann swap und all-in.
- **Den R-Cannon-Shred auf dem ersten Angriff vergessen.** Wenn du zu Cannon (R) swappst, reduziert dein erster AA Armor und Magic Resist. Diesen Proc auf einem Minion zu verbrennen ist verschenkter Schaden; spar ihn immer für einen Champion auf.
- **Splitpush ohne R verfügbar.** R hat 6 Sekunden Cooldown, ist aber dein einziges Escape-Tool — der Speed Boost beim Swap. Splitpush in einen 4v1 Gank mit R auf Cooldown bedeutet Tod. Behandle R wie einen Dash mit langem Cooldown bei der Risikobewertung.
- **Mana-Kosten in langen Trades ignorieren.** Hammer W hat eine Passive, die Mana auf Autos zurückgibt; wenn du Cannon in einem langen Trade bleibst, leert sich dein Mana-Pool. Swap zu Hammer für 2-3 Autos mitten im Trade zum Auffüllen, dann zurück zum Finishen in Cannon.

## Fortgeschrittener Tipp

Beherrsche den **R-Cancel** am Ende von Hyper Charge (Cannon W). Wenn du Cannon W drückst, bekommst du maximale Attack Speed für 3 Angriffe — aber wenn du sofort nach Landung des dritten Angriffs zu Hammer (R) swappst, überspringst du die Auto-Recovery-Animation und startest deinen Hammer-Q-Sprung eine Viertelsekunde früher. Das ist der Unterschied zwischen einem geflashten Ziel einholen und es mit 5 HP entkommen sehen. Übe es im Practice Tool gegen einen Target Dummy bis das Timing zum Muskelgedächtnis wird, bevor du es in Ranked bringst.
