---
title: "Draven Bot Build & Guide — Patch 16.9"
slug: "draven-bot"
language: "de"
patch: "16.9"
champion: "draven"
role: "bot"
last_updated: "2026-04-29"
description: "Draven Bot-Lane Guide für League of Legends Patch 16.9: Axt-Catch-Basics, Snowball-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Draven"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Marksman / Snowball"
  abilities:
    - key: "P"
      name: "League of Draven"
      description: "Eine Spinning Axe zu fangen oder eine Einheit zu töten gibt Adoration-Stacks. Champion-Takedowns wandeln Stacks in Bonus-Gold um — Dravens Snowball-Motor."
      dd_spell_id: "Draven_Passive"
    - key: "Q"
      name: "Spinning Axe"
      description: "Lädt die nächste Auto mit physischem Bonus-Schaden. Die Axt prallt nach dem Treffer hoch: fangen lädt eine weitere Q nach, bis zu zwei gleichzeitig stapelbar."
      dd_spell_id: "DravenSpinning"
    - key: "W"
      name: "Blood Rush"
      description: "Kurzer Move-Speed- und Attack-Speed-Buff. Eine Spinning Axe zu fangen resettet den Cooldown — deine Mobility skaliert mit der Catch-Qualität."
      dd_spell_id: "DravenFury"
    - key: "E"
      name: "Stand Aside"
      description: "Lineare Axt, die Gegner zur Seite stößt und verlangsamt. Hauptwerkzeug für Peel und Disengage; positioniert auch Ziele für das Support-Follow-up."
      dd_spell_id: "DravenDoubleShot"
    - key: "R"
      name: "Whirling Death"
      description: "Zwei riesige Äxte fliegen über die Map, durch Recast zurückrufbar. Schaden sinkt pro getroffenem Gegner, exekutiert aber Ziele unter einer Adoration-basierten HP-Schwelle."
      dd_spell_id: "DravenRCast"
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
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3072", name: "Bloodthirster" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "gegen Comps mit viel Healing (Soraka, Yuumi, Aatrox, Vladimir) — appliziert Grievous Wounds und halbiert das Healing"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "gegen schweren AP-Burst (Syndra mid + Doppel-Mage) — Schild unter 50% HP und Magic Resist"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "gegen Assassinen-Dives (Zed, Talon, Rengar) — die Revive lässt dich Adoration-Stacks vor dem zweiten Tod einkassieren"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "gegen Single-Target-Lockdown-CC (Morgana Q, Lux Q, Ashe R) — das Spell Shield blockt den ersten Hard CC"
  base_combo: ["Q", "AA", "W", "AA"]
  win_condition: "Stacke Adoration durch Catches und Last-Hits, kassiere dann beim ersten Kill für einen 600+ Gold Spike. Wandle den Vorsprung in schnellere Items und snowballe jede Skirmish, bevor der gegnerische ADC skaliert."
  weakness: "Kein Dash, kein Escape, und das Axe-Catch-Pattern zwingt dich in vorhersehbare Bögen. Hard CC auf Level 1-3 killt dich vor dem W-Reset, und Adoration zu verlieren ruiniert deine Gold-Kurve."
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
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["aphelios", "kog-maw", "twitch"]
      archetype: "Hyper-scaling Marksmen mit schwachem Early"
      reason: "Ihre Level 1-3 sind reines Farmen; Dravens Q gibt riesigen Bonus-Schaden bei jedem Catch und W resettet beim Catch, also kann er sie überrennen, bevor sie zwei Items haben."
    - examples: ["jinx", "sivir", "ashe"]
      archetype: "Immobile Marksmen ohne Dash"
      reason: "Dravens E stößt zur Seite und slowt, W gibt Burst-Move-Speed: diese ADCs können nicht disengagen, wenn er aufrückt. Sie verlieren jeden All-In pre-6."
    - examples: ["soraka", "yuumi", "karma"]
      archetype: "Enchanter-Supports, die in der Lane heal-traden"
      reason: "Dravens Q-Schaden stackt zu schnell für Poke-and-Heal-Lanes. Zwei gefangene Äxte hintereinander brechen einen Soraka-Heal-Cycle, und sein Snowball wandelt jeden Kill in 200+ Gold Vorsprung."
  counterpicks:
    - examples: ["caitlyn", "ezreal", "varus"]
      archetype: "Long-Range-Poke-Marksmen"
      reason: "Sie poken außerhalb von Dravens 550 Attack Range, während er in seinen Catch-Bögen feststeckt. Jede Minute ohne Engage zerfallen seine Adoration-Stacks ins Nichts."
    - examples: ["leona", "nautilus", "blitzcrank"]
      archetype: "Hard-Engage-CC-Supports"
      reason: "Draven hat keinen Dash und keine Immunität. Eine CC-Kette auf Level 2 löscht ihn aus, während seine Äxte nutzlos in der Lane abprallen. Pre-6 kann er buchstäblich nichts zurückgeben."
    - examples: ["thresh", "morgana", "rakan"]
      archetype: "Lockdown- / Pick-Supports"
      reason: "Ein einziger Thresh-Hook oder Morgana-Q stoppt Draven mitten im Axe-Catch. Ohne Catch fallen seine Q-Resets aus, das W-Tempo bricht weg, und er wird ein stationärer ADC ohne Escape."
---

## Überblick

Draven ist ein Snowball-Marksman, gebaut um eine Mechanik: das Fangen seiner eigenen rotierenden Äxte. Jede Auto-Attack mit geladener **Spinning Axe (Q)** geht als springende Axt raus, die in die Luft prallt — wenn Draven unter den Landepunkt läuft, fängt er sie, landet einen riesigen Bonus-Schaden-Treffer und lädt eine weitere Q nach. Er kann bis zu zwei Spinning Axes gleichzeitig halten. Seine Passive **League of Draven** wandelt diese Catches in Gold um: jeder Catch und jeder gekillte Minion baut Adoration-Stacks auf, und der erste Champion-Takedown nach einer Stack-Schwelle kassiert sie als Bonus-Gold-Klumpen ein (oft 100-500 Extra-Gold pro Kill).

Der Gameplan ist brutal und direkt: ab Level 1 die Bot-Lane bullien, vor Minute 8 einen Kill erzwingen, den Adoration-Spike einkassieren und dann in einen Snowball-Lead farmen (ein früher Vorsprung, der sich aufschichtet: Kill → Gold → Item → mehr Kills). Skill Expression liegt im Catch-Positioning (vorhersehen, wo die Axt landet, ohne dich Skillshots auszusetzen) und in der **Blood Rush (W)**-Uptime — jeder Catch resettet W, also ist ein flüssiger Draven dauerhaft schneller als ein Draven, der zwei Äxte hintereinander verfehlt.

## Empfohlener Build

**Starter-Items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 1 Health Potion. Doran's Blade ist der Standard-Marksman-Starter: kleiner Attack-Damage- (AD) Boost, etwas HP und Lifesteal (du heilst einen Prozentsatz des Schadens, den du mit Auto-Attacks austeilst). Draven braucht jeden AD-Punkt, weil seine Q mit dem Basic-Attack-Damage skaliert, und das Axe-Catch-Trade-Pattern ist brutal für deine HP, wenn du nicht via Lifesteal zurückheilst.

**Core Items (in Reihenfolge):**

1. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — der erste Item-Pick für den Snowball. Lethality (eine Form von Rüstungsdurchdringung, die einen Teil der Rüstung des Ziels ignoriert, besonders nützlich gegen squishy Ziele — Champions mit niedriger Defensive wie ADCs und Mages) plus eine Exekution unter 5% HP macht aus jeder Q-geladenen Auto eine Kill-Bedrohung. Passt zu Adoration: mehr Kills bedeutet mehr Stacks, mehr Stacks bedeutet größere Gold-Spikes pro Takedown.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — Attack-Speed-Schuhe (mehr Autos pro Sekunde). Default für Draven, weil mehr Autos mehr Axe-Catch-Chancen pro Sekunde bedeuten und W bei jedem Catch resettet.
3. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — Krit-Schaden-Multiplikator. Nach zwei Krit-Items (Collector zählt als pseudo-Krit-Quelle für AD-Scaling, IE ist die zweite) schaltet Infinity Edge 175% Krit-Schaden frei. Spinning-Axe-Schaden skaliert mit deiner AD, und ein Axe-Catch-Krit one-shottet zu diesem Zeitpunkt die meisten squishy Ziele.
4. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — Lifesteal (du heilst einen Prozentsatz des Schadens, den du mit Auto-Attacks austeilst) plus ein Schild bei voller HP. Draven stirbt an Assassinen, weil er keinen Escape hat; das Schild gibt dir einen Extra-Fight pro Teamfight.
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — Last-Slot Rüstungsdurchdringung, skaliert mit der Bonus-HP des Gegners (effektiver gegen größere Tanks). Ersetze durch Mortal Reminder, wenn das gegnerische Team viel Healing hat.

**Situative Swaps:**

- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — gleicher Slot wie Lord Dominik's, nimm diese Variante, wenn das gegnerische Team viel Healing hat (Soraka, Yuumi, Aatrox, Vladimir): appliziert Grievous Wounds, was das gegnerische Healing halbiert.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — Late-Slot gegen schwere AP-Burst-Comps (Syndra + Veigar + Annie). Das Schild triggert unter HP-Schwelle — also wenn du unter 50% HP fällst — und absorbiert magischen Schaden.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — Final-Slot gegen Assassinen-Dive (Zed, Talon, Rengar). Die Revive gibt dir 4 Sekunden, um zu fliehen oder den Adoration-Cash-In zu beenden, und der Armor-Wert reduziert Dive-Schaden um ~20%.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — ersetzt Bloodthirster gegen Single-Target-Lockdown-CC (Morgana Q Binding, Lux Q Root, Ashe R Stun). Das Spell Shield blockt den ersten Hard CC alle 40 Sekunden — die gewonnene Zeit nutzt du für Autos statt gechained zu werden.

**Skill Order:** Maxe **Q** zuerst (roher Axt-Schaden, deine Snowball-Achse), **W** als zweites (mehr Move Speed und Attack Speed für den Catch-Flow), **E** zuletzt (reine Utility — ein Punkt auf Level 3 reicht bis Late Game). **R** auf Level 6, 11, 16 wie üblich.

**Runen:** Primärer Baum **Precision** (auf Auto-Attacks ausgelegt): **Conqueror** als Keystone (stackt auf Auto-Treffern und wandelt einen Teil des Schadens in Healing in längeren Fights um — perfekt für Dravens All-In-Pattern), dann **Triumph** (Heal und Bonus-Gold auf Takedowns — passt zum Adoration-Cash-In), **Legend: Alacrity** (mehr Attack Speed pro gestacktem Takedown), **Coup de Grace** (Extra-Schaden gegen Ziele mit niedrigem HP). Sekundärer Baum **Domination** mit **Sudden Impact** (Extra-Lethality nach einem Dash oder Buff — Draven holt es über W) und **Treasure Hunter** (Extra-Gold pro einzigartigem Takedown — passt zur Snowball-Identität).

## Wichtige Matchups

- **Caitlyn:** Die härteste Lane auf dem Board. Ihre 650 Attack Range out-poket (chippt deine HP von außerhalb deiner eigenen Reichweite) Dravens 550 in jedem Trade. Tritt nur vor, wenn sie animation-locked auf einem Last-Hit ist, und lauf niemals durch eine Trap, um eine Axt zu fangen — lass die Axt fallen, wenn sie auf einer Trap landet.
- **Aphelios:** Kostenlose Lane pre-6. Aphelios' Q hat 9 Sekunden Cooldown und seine Waffen haben begrenzte Munition; Dravens Q ist permanent. Push Level 2 hart (zwing die Wave dazu, zuerst auf seiner Seite zu crashen), engage auf seiner schwächsten Waffe (Severum oder Crescendum — beides Melee-Range-Main-Hands) und brenn seinen Flash vor Minute 5.
- **Lucian:** Spiegel-Tier-Early-Game-ADC. Er out-tradet dich in einem 1-Sekunden-Fenster mit seinem Q-AA-AA-Passive-Combo; du out-tradest ihn in einem 4-Sekunden-Fenster mit gestapelten Äxten. Lehn Short Trades ab (engage gar nicht), commit dich zu Extended Trades (ein "Trade" = ein kurzer Schlagabtausch, ein "Extended Trade" = ein anhaltender Fight von 3+ Sekunden, in dem Dravens gestapelte Qs Lucians Burst out-damagen).
- **Jhin:** Er out-poket pre-6 (sein Range-Schaden chippt dein HP aus der Ferne in den frühen Levels), verliert aber im All-In (ein Vollkommitment-Fight, in dem du auf den Kill gehst, ohne Fallback) auf seinem 4.-Schuss-Reload. Tracke seinen Schuss-Counter; engage auf "0/4" oder direkt nachdem er einen Schuss auf einen Minion verschwendet hat. Sein W-Root ist 1 Sekunde freier Schaden auf einen Draven, der keinen Dash zum Ausweichen hat.
- **Samira:** Sie will in der Lane Passive-S-Grade für die **R** stacken. Trade nicht mit ihr, sobald sie S-Rank hat: lauf weg, recall (zurück zur Basis) und re-engage nur bei voller HP. Ihre **R** out-DPSt dich auf Melee-Range, aber eine Draven-E (Stand Aside) schlägt sie aus der Channel-Reichweite und resettet den Fight.

## Power Spikes & Siegbedingungen

- **Level 2:** Dravens Q gibt schon auf Rank 1 riesigen Bonus-Schaden. Mit einem Punkt in **W** für Move Speed und Attack Speed ist der Level-2-All-In einer der stärksten im Spiel — die meisten Draven-Spiele entscheiden sich daran, wer den Level-2-Trade landet.
- **Level 6 mit erstem Kill:** Whirling Death **R** wird zum Kill-Button auf niedriger HP — exekutiert (tötet sofort) jedes Ziel unter einer HP-Schwelle, die an deine Adoration-Stacks gekoppelt ist. Wenn du 6 Level lang Äxte gefangen hast, ist die Schwelle hoch genug, um einen flüchtenden Gegner über die ganze Map zu finishen.
- **![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) The Collector fertig (~ Minute 11-13):** First-Item-Spike (ein klarer Power-Sprung, an einen Level- oder Item-Meilenstein gebunden). Lethality plus die 5%-HP-Exekution heißt: jede Q-geladene Auto droht einen Kill auf einem chip-damaged Ziel. Erzwing einen Fight zu diesem Timing — ein Adoration-Cash-In hier finanziert oft das zweite Item 3 Minuten früher.
- **3-Item-Spike (Collector + Berserker's + Infinity Edge um Minute 22-24):** Dravens Burst (der Schaden, den du in einem 1-2-Sekunden-Fenster austeilst) wird der höchste aller Marksmen. Spiel um Objectives (Dragon, Baron, Rift Herald — neutrale Ziele, die Team-Buffs oder Map-Pressure geben) zu diesem Zeitpunkt und such Picks (einen isolierten Gegner außerhalb des Teamfights eliminieren) auf isolierten Zielen in den Side-Lanes.

## Häufige Fehler

- **Äxte in gefährlichen Positionen fangen.** Ein Draven, der 400 Units in die Wave läuft, um eine Q zu fangen, ist ein Draven, der eine Caitlyn-Trap oder einen Leona-Engage frisst. Wenn die Axt schlecht landet, **lass sie fallen** — eine Q zu verlieren ist okay, einen Kill durch Overextension (über die Sicherheitsgrenze treten, um eine Play zu jagen) zu verlieren nicht.
- **Adoration-Stacks horten.** Stacks zerfallen, wenn du sie nicht innerhalb ~30 Sekunden nach einem Takedown-Versuch einkassierst. Wenn du 100+ Stacks hast, erzwing einen Fight oder nimm eine Scuttle-Skirmish (kleine Fights von 2-4 Spielern im River um den Scuttle-Krabben-Crab) — auf Stacks farmend zu sitzen ist verschenktes Gold.
- **R für Schaden statt für Exekution nutzen.** Whirling Deaths Schaden sinkt stark pro getroffenem Gegner. Sie durch eine Wave zu werfen ist Verschwendung; sie als zweite Axt (der Return-Cast) auf ein flüchtendes Low-HP-Ziel zu werfen ist eine 1500-Gold-Play. Behandle R wie ein Scharfschützengewehr, nicht wie ein Clearing-Tool.
- **Stillstehen in Teamfights.** Draven hat keinen Dash. Zwei Sekunden am gleichen Spot gegen jede mobile Bedrohung (Zed, Diana, Camille) und du bist tot. Strafe (bewege dich seitwärts, während du angreifst) zwischen jeder Auto-Attack — kurze Schritte, aber konstante Bewegung. Der Catch-Bogen drängt dich nach vorn; W-Speed lässt dich die Position direkt danach resetten.
- **Stand Aside (E) als Peel ignorieren.** Dravens E stößt Gegner zur Seite und slowt sie. In Teamfights ist das nicht nur Poke — es ist der Disengage (eine Fähigkeit, die einen committeten Fight bricht und das All-In-Commitment des Gegners zerlegt), der dir 1.5 Sekunden freie Auto-Attacks erkauft, während eine Camille oder ein Hecarim sich vom Knockback erholt.

## Fortgeschrittener Tipp

Übe den **W-into-fountain-axe-bounce**-Trick auf Side-Lanes: wirf eine leere Q gegen eine Wand oder dünne Cover, dann lauf direkt mit W durch die Bounce-Zone. Da Blood Rushs Move Speed schnell zerfällt, lässt sie das Casten während des Axt-Bogens dich eine Catch-Position erreichen, die du ohne nicht erreichst, und dann fängst du die Axt, um den W-Cooldown für die nächste Play zu resetten. Diese eine Mechanik ist es, die einen casual Draven, der eine Axt von dreien verfehlt, von einem flüssigen Draven trennt, der jede geworfene Q fängt.
