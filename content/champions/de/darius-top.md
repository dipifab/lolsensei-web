---
title: "Darius Top Build & Guide — Patch 16.9"
slug: "darius-top"
language: "de"
patch: "16.9"
champion: "darius"
role: "top"
last_updated: "2026-04-29"
description: "Darius Top Guide für League of Legends Patch 16.9: Juggernaut-Build, Hemorrhage-Stack-Druck, wichtige Matchups, Power Spikes, häufige Fehler und ein Schlusstipp."
quick_learn:
  champion_dd_id: "Darius"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Juggernaut / Bruiser"
  abilities:
    - key: "P"
      name: "Hemorrhage"
      description: "Auto-Attacks und Schadensfähigkeiten setzen einen Blutungs-Stack. Bei 5 Stacks gerät Darius in Wut, bekommt für ein paar Sekunden viel Bonus-AD und der Bleed tickt für massiven Schaden."
      dd_spell_id: "Darius_Passive"
    - key: "Q"
      name: "Decimate"
      description: "Aufgeladener Axthieb in breitem Ring. Trefft ihr mit der äußeren Klinge, gibt es vollen Schaden, einen Bleed-Stack und Heilung. Der innere Griff macht halben Schaden, kein Stack."
      dd_spell_id: "DariusCleave"
    - key: "W"
      name: "Crippling Strike"
      description: "Verstärkte nächste Auto-Attack: Bonusschaden und schwerer Slow. Resettet den Auto-Attack-Timer: zwischen zwei normale Autos einbauen, um den DPS zu maximieren."
      dd_spell_id: "DariusNoxianTacticsONH"
    - key: "E"
      name: "Apprehend"
      description: "Passiv: flache Armor-Pen. Aktiv: kurzer Axt-Hook, der Gegner im Kegel zieht und verlangsamt. Einziger Gap-Closer im Kit."
      dd_spell_id: "DariusAxeGrabCone"
    - key: "R"
      name: "Noxian Guillotine"
      description: "Sprung auf einen Champion mit True Damage, der mit den schon vorhandenen Bleed-Stacks skaliert. Tötet sie, wird der Cooldown resettet und ihr könnt sie auf ein neues Ziel werfen."
      dd_spell_id: "DariusExecute"
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
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "Swap von Plated Steelcaps gegen viel Magieschaden oder CC-Ketten (Lissandra, Malphite-Ult, Sett-Pull)"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "gegen Frontlines mit gestapelter Armor (Malphite, Rammus, Shen) — jedes Q raspelt Armor für das ganze Team"
    - dd_id: "3065"
      name: "Spirit Visage"
      against: "gegen schwere AP-Comps, wenn ihr MR und Healing-Amp über Death's Dance und R-Lifesteal braucht"
    - dd_id: "6694"
      name: "Serylda's Grudge"
      against: "gegen Squads mit viel Armor und Tenacity (Rammus, Tahm Kench, Malphite) — Armor-Pen plus Slow-Proc"
    - dd_id: "3742"
      name: "Dead Man's Plate"
      against: "wenn ihr Move Speed braucht, um Kiter (Quinn, Vayne top, Gnar) einzuholen und in R-Reichweite zu kommen"
  base_combo: ["E", "AA", "W", "Q", "AA", "R"]
  win_condition: "Stackt Hemorrhage auf 5, nutzt das Enrage-Fenster für Bonus-AD und beendet mit R für True Damage. Wandelt frühe Kills in ein Stridebreaker-Timing, das Side-Lane-1v1s snowballt und Bot dived."
  weakness: "Keine Mobility außer dem kurzen E-Pull und dem One-Shot-R-Sprung. Long-Range-Kiter, Ranged-Tops und Champions, die Distanz halten (Quinn, Vayne, Teemo, Gnar), nehmen ihm Stacks und Trades."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["sett", "garen", "volibear"]
      archetype: "Kurzreichweitige Melee-Bruiser ohne starkes Disengage"
      reason: "Darius gewinnt verlängerte Trades, weil jeder Auto und jedes Q einen Bleed-Stack setzt: bis der Gegner desengagen will, hat das 5-Stack-Enrage-Fenster den Trade schon zu seinen Gunsten gedreht."
    - examples: ["nasus", "kayle"]
      archetype: "Late-Game-Scaling-Melees mit schwacher Early-Lane"
      reason: "Ihre ersten 6 Level sind passiv — Darius kann sie mit E + W wiederholt aus der Wave drücken und tötet sie, bevor sie die Items erreichen, die sie gefährlich machen."
    - examples: ["yasuo", "yone"]
      archetype: "Melee-Carries, die in Q-Reichweite kämpfen"
      reason: "Sie müssen in Q-Edge-Reichweite gehen, um Schaden zu machen. Wind Wall blockt Projektile, aber keinen Melee-Schwung — eine saubere Q-Außenklinge setzt also weiterhin den Bleed-Stack und startet das Snowball."
  counterpicks:
    - examples: ["quinn", "teemo", "vayne"]
      archetype: "Ranged- oder kitende Tops"
      reason: "Sie bleiben außerhalb der E-Reichweite und chippen Darius umsonst HP weg. Ohne Gap-Closer jenseits von E (kurzer Hook) oder R (One-Shot-Sprung) landet er nie Stacks und verliert die Lane-Prio."
    - examples: ["fiora", "camille"]
      archetype: "True-Damage-Duellanten mit Parry oder Shield"
      reason: "Fioras W parriert den Q-Knock-up und ihre Vitals (kleine Markierungen, die sie für True Damage autoattackt — Schaden, der Armor und MR ignoriert) umgehen den HP-Build; Camilles R isoliert Darius vom Team und outscaled ihn in langen Fights."
    - examples: ["gnar", "kennen"]
      archetype: "Ranged-Tops mit eingebautem CC"
      reason: "Beide poken außerhalb der Q-Reichweite und haben Ranged-Stuns: Gnars Mega-Form-Wurf, Kennens W-Stun. Sie halten Darius mit niedrigem HP, ohne je in sein Trade-Fenster zu kommen."
---

## Überblick

Darius ist ein **Juggernaut** (langsamer, immobiler Melee-Champion, der sehr hart zuschlägt und Schaden im direkten Schlagabtausch tankt), gebaut um das Stacken seiner Passive **Hemorrhage** auf einem Ziel. Jede Auto-Attack und jedes Q, das mit der **äußeren Klinge** trifft, setzt einen Bleed-Stack. Bei **5 Stacks** gerät er für ein paar Sekunden in Wut und bekommt massiven Bonus-AD — das ist das Fenster, in dem er den Gegner tötet oder zerlegt. Sein Kit gibt ihm genau einen kurzen Gap-Closer (**E**, ein 535-Einheiten-Hook) und einen Long-Cooldown-Sprung (**R**, eine True-Damage-Hinrichtung, die bei jedem Kill resettet). Außerhalb dieser zwei Tools läuft er mit Basis-Move-Speed und stirbt gegen jeden, der Distanz halten kann.

Sein Game Plan ist simpel: **am Ziel kleben, bis es stirbt**. In der Lane trefft Q mit der **äußeren Klinge** (nicht mit dem inneren Griff — der Griff macht halben Schaden und keinen Bleed-Stack), um HP zu chippen und euch hochzuheilen, baut den All-In mit **E** (Pull, Knock-up, Slow), wenn der Gegner schon 2-3 Stacks hat, und detoniert mit **W** + Auto-Attack-Ketten. Ab dem Mid-Game ist **R** ein Kill-Button: selbst bei 0 Stacks macht es viel **True Damage** (Schaden, der sowohl Armor als auch MR ignoriert — keine Defensiv-Stat reduziert ihn), und der Cooldown resettet bei jedem Kill, sodass ein sauberer Teamfight in 2 oder 3 R-Recasts kettet. Er ist einer der stärksten **Bruiser** (Melee-Kämpfer, die Schaden mit Überlebensfähigkeit mischen), sobald Stridebreaker fertig ist.

## Empfohlener Build

**Starting Items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Die HP-Regen-Passive federt gegnerischen Poke ab (günstiger Ranged-Schaden, der HP wegchippt, ohne in einen Fight zu gehen) bis zum Level-2-Power-Spike. Nehmt ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** nur in eine Melee-Lane, in der ihr fest mit Level-1-2-All-In rechnet (z. B. Mirror Darius).

**Core Items (in Reihenfolge):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — First-Item-Spike (der Moment, in dem Schaden und **Stickiness** — eure Fähigkeit, an einem fliehenden Ziel zu kleben — am stärksten springen). Das Aktiv ist ein kurzer Dash, der alles im Kegel slowed — exakt der zweite Gap-Closer (Tool, um Distanz schnell zu schließen), den Darius vermisst. AD, HP und Ability Haste (Stat, der Cooldowns senkt) passen genau zum Kit.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — Standard-Boots, wenn der Gegner euch hauptsächlich mit Auto-Attacks weh tut. Sie reduzieren diesen Schaden in verlängerten Trades (Hin-und-her-Schadenstausch in der Lane).
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP plus ein **Lifeline-Shield**: fällt euer HP unter ~30%, triggert ein automatischer Shield. Dieses Fenster ist genau dann, wenn ihr Extra-Zeit braucht, um R für den Reset zu landen.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — verwandelt **Burst**-AD (hoher Schaden in 1-2 Sekunden, wie eine Assassinen-Combo) in einen langsamen **Bleed** (Schaden über die nächsten Sekunden gestreckt statt alles auf einmal). Beim Kill wird der restliche Bleed gecleant — perfekte Synergy mit R-Reset-Ketten.
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — alternatives First- oder Fourth-Item je nach Start: jede erste Auto-Attack auf einen Champion in einem Fight crittet und heilt. Kombiniert mit dem W-Auto-Reset kommt dieser Crit fast auf Befehl.

**Situational Items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — Swap von ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**, wenn das gegnerische Team viel Magieschaden oder verkettetes **CC** (Crowd Control: Stuns, Roots, Knockbacks — alles, was euch festsetzt, sodass ihr nicht agieren könnt) hat. Tenacity (Stat, der CC-Dauer auf euch verkürzt) ist kritisch gegen Teams, die euch vom Carry fernhalten können.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — gegen Frontlines mit gestapelter Armor (Malphite, Rammus, Shen). Jeder Q-Treffer raspelt Armor-Stacks vom Ziel für das ganze Team.
- ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — gegen schweres **AP** (Ability Power, die Stat hinter Magieschaden). Gibt MR (Magic Resistance) plus eine Healing-Amp-Passive, die Q-Heal, Death's-Dance-Bleed-Clean und R-Lifesteal-Effekte boostet.
- ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — gegen Tank-Squads mit Armor und Tenacity. Armor-Penetration plus eine Slow-Proc (Passive, die automatisch bei jedem Hit triggert) auf jeder Schadensfähigkeit — Q, W und R inklusive.
- ![Dead Man's Plate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Dead Man's Plate** — wenn ihr die gestackte Move-Speed-Passive braucht, um Kiter (Quinn, Vayne top, Gnar) einzuholen und in R-Reichweite zu kommen, bevor sie sich neu positionieren.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** sind der Standard. Wechselt zu ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**, wenn das Gegnerteam drei oder mehr CC-Quellen oder schweren Magieschaden hat.

**Skill Order:** Maxt **Q** zuerst (Waveclear, Healing, Hauptschadensquelle). Maxt **W** als Zweites (die Slow-Dauer skaliert pro Rang, der Auto-Reset ist euer Sticky-Tool). Setzt auf Level 1 und 2 Punkte in **E** für die Armor-Pen-Passive, maxt aber weiter W; **E** wird zuletzt gemaxt, weil das Aktiv-Scaling klein ist. Nehmt **R** auf Level 6, 11, 16.

**Runes:** Primärbaum **Precision** mit dem Keystone (der Hauptrune des Baums) **Conqueror** — Passive, die Bonus-AD aufstockt, solange ihr gegen Champions kämpft, gecapt nach 5 Sekunden anhaltendem Combat. Paart mit **Triumph** (kleiner Heal und Gold-Burst beim Takedown), **Legend: Bloodline** (Lifesteal-Stacks bei Takedowns) und **Last Stand** (mehr Schaden unter 60% HP). Sekundärbaum **Resolve** mit **Bone Plating** (Schadensreduktion auf den nächsten 3 Hits, nachdem ihr Schaden bekommt) plus **Overgrowth** (HP-Scaling mit Tod nahegelegener Minions, perfekt für einen Top-Laner, der 8+ Minions pro Wave farmt). Stat Shards: **Adaptive Force** + **Adaptive Force** + **Health Scaling**.

## Wichtige Matchups

- **Garen:** Skill-Matchup (der bessere Spieler gewinnt, unabhängig vom Pick). Sein **W** (4-Sekunden-Damage-Reduction-Shield) negiert einen Bleed-Stack, aber sein Q-Silence ist durch Seitwärtslaufen ausweichbar. Trefft Q am Rand, wenn sein W down ist; unter R out-tradet ihr ihn mit mindestens einem Item-Vorsprung.
- **Sett:** Favorisierte Lane. Seine Q-W-Combo ist telegrafiert (das Wind-up ist sichtbar genug, um zu reagieren). Pullt ihn mit E, nachdem er W committet hat, und stackt dann Bleed, bevor er per Recast desengagen kann. Tradet nicht, wenn er Grit (sein Shield-Balken) voll hat.
- **Fiora:** Härtestes Melee-Matchup. Ihr **W** ist ein Parry (kurzer Shield, der die nächste Fähigkeit blockt und kontert) — baited es mit einem Q, bevor ihr E committet. Ihre Vitals machen True Damage, also ist Death's Dance Pflicht; rusht ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** nur, wenn sie früh Kills holt.
- **Quinn / Teemo:** Sehr hartes Ranged-Matchup. Sie blenden euch (canceln eure Auto-Attacks für kurze Zeit) oder kiten euch außer Reichweite. **Freezt** die Wave nahe eurer Tower (hört auf zu pushen, haltet die Wave auf eurer Seite der Lane), um ihnen den Farm zu nehmen (Gold und XP von Minions), und ruft euren Jungler — Darius gewinnt dieses 1v1 nicht alleine.
- **Mordekaiser:** Ausgeglichenes Matchup, vom R-Timing entschieden. Sein R isoliert euch in einem 1v1-Realm; ihr out-duellt ihn bei 5 Stacks, wenn ihr E aufhebt, um ihn nahe zu pullen, nachdem er sein E zum Rooten benutzt hat. Kauft ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** früh, wenn sein R euch tötet.

## Power Spikes & Siegbedingungen

- **Level 2:** Mit Q + E freigeschaltet hat Darius ein echtes All-In-Fenster (ein Fenster, in dem ihr voll auf den Kill committen könnt, ohne Fallback). E-Pull, Q am Rand für Schaden und Heal, zwei Auto-Attacks, und der Gegner ist schon auf 3 Bleed-Stacks, bevor er reagieren kann.
- **Level 6:** Erste **R** schaltet frei. Schon mit 3 Stacks auf dem Gegner trifft R für genug True Damage, um ab ~40% HP zu killen. Sucht ein Level-6-All-In, sobald euer Jungler Top zeigt.
- **![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) Stridebreaker fertig (~ Minute 11-13):** Der Aktiv-Dash + Slow gibt Darius den zweiten Gap-Closer, der dem Kit fehlt. Erzwingt Side-Lane-1v1s und roamt (verlasst eure Lane, um Mid oder Bot zu helfen), um Picks zu holen (isolierte Kills auf out-of-Position-Gegnern).
- **Zwei Items + R online (~ Minute 18-22):** Peak-Teamfight-Fenster. Lauft in die Back Line (die squishy Carries, die hinter ihren Tanks stehen), R auf das Ziel mit dem niedrigsten HP, Recast auf den nächsten Squishy. Zwei R-Resets können einen Teamfight im Alleingang beenden.

## Häufige Fehler

- **Q mit dem inneren Griff treffen.** Der Griff macht halben Schaden und setzt **keinen Bleed-Stack**. Tretet kurz vor dem Animationsende einen Schritt zurück, damit die **äußere Klinge** das Ziel clippt — das ist der einzige Q-Treffer, der zählt.
- **E als Bewegungstool benutzen.** E ist euer einziger zuverlässiger Gap-Closer; wenn ihr es verbrennt, um die Wave schneller zu überqueren, habt ihr für die nächsten 16-26 Sekunden nichts zum Engagen. Spart es für den All-In-Start.
- **R zu früh drücken.** R macht True Damage skaliert pro Bleed-Stack. Bei 0 Stacks ist der Schaden mittelmäßig; bei 5 Stacks ist es One-Shot-Territorium. Baut mindestens 3 Stacks mit Autos und Q auf, bevor ihr R drückt — außer als Finisher auf einem sterbenden Gegner.
- **Kiter über die T2-Tower hinaus jagen.** Darius hat keinen Escape. Ohne R oder E up ist jeder Schritt hinter die Tower ein gratis Gank für den gegnerischen Jungler — und sein langsamer Basis-Move-Speed bedeutet, dass ihr nicht sauber desengagen könnt.
- **Reine Tank-Items stapeln.** Darius skaliert mit **AD**, nicht nur mit HP. Sunfire + Warmog's killt euren Schaden komplett; ihr one-shottet keine Squishies mehr und werdet zu einem langsamen laufenden Minion. Bleibt beim AD-Bruiser-Core.

## Fortgeschrittener Tipp

Übt den **W-Animation-Cancel**: Crippling Strike resettet den Auto-Attack-Timer, ihr könnt also einen Auto abfeuern, sofort W drücken und gleich danach den verstärkten W-Auto abfeuern — zwei volle-Schaden-Hits in der Zeit eines Hits. Der gleiche Trick geht rückwärts: castet W *während* eines laufenden Q-Wind-ups, und der verstärkte Auto landet, sobald Q auflöst. Im echten Spiel ist die Anwendung mit höchstem Impact im 5-Stack-Enrage-Fenster: AA → W → AA → Q-Edge kettet vier Bleed-applizierende Hits in unter 2 Sekunden, was reicht, um fast jeden Squishy ab 70% HP zu töten. Testet es im Custom-Game an einem Target Dummy, bis der Rhythmus automatisch sitzt.
