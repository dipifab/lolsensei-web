---
title: "Graves Jungle Build & Guide — Patch 16.9"
slug: "graves-jungle"
language: "de"
patch: "16.9"
champion: "graves"
role: "jungle"
last_updated: "2026-04-29"
description: "Graves Jungle Guide für League of Legends Patch 16.9: Starter-Kit, Lethality-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Graves"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Marksman / Skirmisher Jungle"
  abilities:
    - key: "P"
      name: "New Destiny"
      description: "Schrotflinten-Mechanik mit Nachladen. Jeder Schuss feuert 4 kegelförmige Kugeln, die keine Minions durchdringen; mehrere Treffer auf Nicht-Champions stoßen sie zurück."
      dd_spell_id: "Graves_Passive"
    - key: "Q"
      name: "End of the Line"
      description: "Lineares Geschoss, das nach 2s explodiert oder sofort an Terrain — prallt von Wänden ab. Hauptwerkzeug für Clear und Angle-Shots."
      dd_spell_id: "GravesQLineSpell"
    - key: "W"
      name: "Smoke Screen"
      description: "Wirft eine Rauchwolke, die Sicht blockiert und Gegner beim Aufprall verlangsamt. Für Disengage, Wards verweigern oder Gank-Pfade vernebeln."
      dd_spell_id: "GravesSmokeGrenade"
    - key: "E"
      name: "Quickdraw"
      description: "Kurzer Vorwärts-Dash mit Rüstungs-Buff, der sich Richtung Champion stapelt. Auto-Attacks senken den CD und erfrischen den Buff. Hält 2 Ladungen."
      dd_spell_id: "GravesMove"
    - key: "R"
      name: "Collateral Damage"
      description: "Explosiver Schuss auf große Distanz: trifft den ersten Champion und explodiert dann in einem Kegel dahinter. Burst-Spike auf Level 6/11/16."
      dd_spell_id: "GravesChargeShot"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3142", name: "Youmuu's Ghostblade" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "3814"
      name: "Edge of Night"
      against: "vs Single-Target Hard CC (Malzahar R, Skarner R, Warwick R) — der Spell Shield blockt das Lock-on"
    - dd_id: "6676"
      name: "The Collector"
      against: "wenn du vorne bist und das Gegnerteam früh keine Rüstung stackt — Execute unter 5% HP schließt Leads"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs starken AP-Burst (Diana, Syndra, Lux mid) — der Lifeline-Shield macht aus One-Shots überlebbare Trades"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "vs zwei starke AD-Dealer (z. B. Yasuo + Caitlyn) — der Bleed verteilt den Schaden, kein One-Shot"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs 3+ Hard-CC-Champions (z. B. Leona + Lissandra + Sejuani) — Tenacity kürzt Stuns und Roots"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Snowballe Lethality über Invades und Ganks vor Minute 14. Sobald Eclipse steht, kontestiere jedes Objective — die Schrotflinte schmilzt einen Squishy in zwei Volleys, und E gibt dir das Trade-Fenster zurück."
  weakness: "Mana-hungrig im Early. Das Reload-Fenster bestraft gieriges Positionieren, und du schmilzt unter Hard-CC-Ketten, weil du außer dem Rüstungs-Buff von E keine Safety hast."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 9923
      name: "Hail of Blades"
      icon_path: "perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
---

## Überblick

Graves ist ein Marksman, der in der Jungle lebt, nicht in der Bot Lane. Seine Schrotflinten-Auto-Attacks und der Rüstungs-Buff von **Quickdraw (E)** lassen ihn Tanks und Brawler frontal angreifen, während er mit Lethality immer noch Squishies wegbursten kann. Das gesamte Kit dreht sich um **Tempo**: schneller Clear, Invades sobald die Cooldowns up sind, und deine Jungle-Priority gegen Kills tauschen, bevor die gegnerischen Carries skalieren.

Der Game Plan ist simpel: in den ersten 8 Minuten bist du der stärkste Duellist auf der Map — also nutz das. Power-farme einen sauberen Clear, schau auf die Map und lauf in die Lane, wo **Flash** unten oder die HP niedrig sind. Nach Eclipse kontestierst du Objectives; nach drei Items bist du ein Teamfight-Skirmisher, der die Backline aus dem Flank löscht — aber du **splitpushst nicht** im Late, weil ein allein erwischter Graves in Minute 30 nur eine CC-Kette vom Tod entfernt ist.

## Empfohlener Build

**Start-Items:** Smite + **Hailblade** für schnelleren Clear und AOE-Schaden auf der **R**, dazu **Refillable Potion**. Nimm Emberknife nur, wenn dein Team Counter-Jungle-Druck im gegnerischen Red Side braucht (langsamerer Clear, mehr Sustain).

**Core-Items (in Reihenfolge):**

1. **Eclipse** — Burst+Shield+Omnivamp, das sauberste erste Item für Skirmisher-Jungler. Der Shield procced nach zwei Treffern, was zum Rhythmus deiner Schrotflinte passt.
2. **Plated Steelcaps** vs AD-lastige Teams / **Mercury's Treads** vs 3+ Hard CC. Default ist Plated.
3. **Youmuu's Ghostblade** — Movement-Speed-Aktiv und Lethality, dein Werkzeug für Gap-Close und Gank-Finisher.
4. **Serylda's Grudge** — Armor-Pen-Scaling fürs Late Game, wenn die Gegner anfangen, Rüstung zu stacken; der Slow auf beschädigte Ziele hält dich in Reichweite.

**Situative Items:**

- **Edge of Night** — vs Single-Target-Lock-on-Ults (Malzahar, Skarner, Warwick).
- **The Collector** — wenn du vorne bist und Execute-Druck auf Squishies willst.
- **Maw of Malmortius** — vs starken AP-Burst (Diana, Syndra, Lux mid).
- **Death's Dance** — vs Teams mit zwei starken physischen Damage Dealern (z. B. Yasuo + Caitlyn). Der Schaden, den du kassierst, wird als langsamer Bleed verteilt, statt sofort anzukommen.
- **Bloodthirster** — Late Game, wenn du ein fünftes Damage-Item mit eingebautem Shield und Lifesteal brauchst.

**Stiefel:** Plated Steelcaps default. Berserker's Greaves nur, wenn das Gegnerteam null CC-Bedrohungen hat und du gezielt Attack-Speed-Scaling willst — Nischen-Pick auf Graves.

**Skill Order:** Maxe **Q** zuerst (Clear und Schaden), **E** als Zweites (mehr Dashes durch geringeren CD pro Rang), **W** zuletzt (der Slow skaliert schon auf Rang 1 fein). **R** auf 6, 11, 16.

**Runen:** Primärer Baum **Domination** mit **Hail of Blades**, **Sudden Impact**, **Sixth Sense**, **Treasure Hunter**. Sekundär **Precision** mit **Triumph** + **Coup de Grace** für Snowball-Druck, oder **Resolve** mit **Second Wind** + **Revitalize**, wenn du Poke in deiner Jungle erwartest.

## Wichtige Matchups

- **Hecarim:** Skaliert dich nach 3 Items raus, verliert aber Skirmishes vor Level 6, wenn du E-rollst und ein Pattern aus distanzierten Autos fährst. Bestrafe ihn vor Minute 9, dann zieh dich zurück — duelliere ihn nicht nach seinem ersten Item.
- **Lee Sin:** Gespiegeltes Tempo-Matchup. Ihr beide gewinnt die ersten 6 Level; der Jungler mit mehr Ganks gewinnt. Tracke den Cooldown seines **Q** und seine W-Jump-Fenster; ist sein Q unten, gewinnt deine Schrotflinte den Trade glatt.
- **Master Yi:** Muss vor seinem Level 6 + erstem Item sterben. **W** über ihm während sein **Q** aktiv ist blockt seine Sicht und er verliert das Lock — übe das im Übungsmodus, bis es ein Reflex ist.
- **Vi:** Tanky und gank-stark. Sie verliert lange Skirmishes, wenn du E-Ladungen hast; lass dich nicht von ihrem **Q** in der Luft erwischen — das ist ein garantierter All-in für ihre Seite.
- **Diana:** Snowballt brutal nach Level 6. Halte **W** für ihren **R**-Windup zurück (bricht den Engage nicht, aber der Slow beim Aufprall verlängert ihren Commit und gibt deinem Team Zeit zum Peelen). Baue **Maw of Malmortius** als zweites Damage-Item.

## Power Spikes & Siegbedingungen

- **Level 3:** Volles Kit unlocked. Dein Gank-Pattern ist **E in Range -> Q auf die Wand hinter ihnen -> Auto-Reset -> W-Slow auf den Rückzugspfad**. Mit Hail-of-Blades-Runen killt das jeden Squishy auf 60% HP ohne Flash.
- **Level 6:** **Collateral Damage** unlocked die lange Execute. Das Geschoss trifft den ersten Champion und explodiert dann im Kegel — flashe ein Ziel in eine Wand und du garantierst sowohl den Direkttreffer als auch den Kegelschaden.
- **Eclipse-Timing (~ Minute 9):** Du gewinnst jeden umkämpften Objective-Fight. Erzwinge einen Fight um Scuttle, Drake oder Voidgrubs in diesem Fenster — nach Minute 12 fangen skalierende Jungler (Hecarim, Master Yi) an, dein Tempo zu matchen.
- **3 Items (~ Minute 22):** Du wirst zum Teamfight-Flanker. Dein Job ist, die gegnerische Backline zu flanken (die squishy Carry, am weitesten weg vom Tank) und sie wegzubursten, bevor sie reagiert. Engage nie von vorne.

## Häufige Fehler

- **E-Ladungen verschwenden, um aus dem Clear zu fliehen.** **E** hat 2 Ladungen und der Cooldown sinkt mit jeder Auto-Attack. Beide Ladungen für einen einzelnen Skillshot zu verbrennen lässt dich für die nächsten 12 Sekunden ohne Gap-Close. Spare immer mindestens eine.
- **Q aus Versehen in die Wand hinter dir.** **End of the Line** explodiert sofort an Terrain. Wenn du Q mit dem Rücken zur Wand cassst, explodiert das Geschoss hinter dir für null Schaden. Prüfe immer deine Ausrichtung vor dem Cast.
- **Smoke Screen auf dich selbst für Sustain.** **W** heilt nicht. Der Wert ist der Slow beim Aufprall — wirf sie auf den Rückzugspfad der gegnerischen Carry, nicht über dich selbst.
- **R aus voller Range ohne Setup.** Das Geschoss ist auf große Distanz ausweichbar. Nutze **R** auf Tuchfühlung nach einem Flash oder pre-fired als Finisher, wenn der Gegner schon Flash committet hat. Eröffne keine Fights damit, außer sie laufen in gerader Linie durch die Fog.
- **Splitpush in Minute 30.** Late-Game-Graves hat keine Escape, wenn ein Skarner/Warwick/Malzahar seine R landet. Gruppe dich nach Minute 25 mit deinem Team und spiele Flanken aus Teamfight-Distanz, kein 1v1 in einer Side Lane.

## Fortgeschrittener Tipp

Die **E-Buffer-Roll**-Technik: während du im Q-Windup oder Auto-Attack-Windup bist, queue einen **Quickdraw**-Input. Der Dash feuert in dem Moment, in dem der Windup endet, also bekommst du den Auto/Q-Schaden **und** repositionierst dich im selben Animationszyklus — du behältst DPS-Uptime beim Ausweichen oder Verfolgen. Das Recovery-Fenster, in dem du dich nicht bewegen kannst, beträgt ohne diesen Trick rund 0,4 Sekunden; mit dem Buffer Roll ist es fast null. Übe es an den Trainings-Dummies, bis dein Stutter-Step-Rhythmus Auto-Attack → E → Auto-Attack ohne Pausen ist.
