---
title: "Fizz Mid Build & Guide — Patch 16.9"
slug: "fizz-mid"
language: "de"
patch: "16.9"
champion: "fizz"
role: "mid"
last_updated: "2026-04-29"
description: "Fizz Mid Guide für League of Legends Patch 16.9: AP-Assassin-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein fortgeschrittener Tipp zum E-Timing."
quick_learn:
  champion_dd_id: "Fizz"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Assassin / AP Melee"
  abilities:
    - key: "P"
      name: "Nimble Fighter"
      description: "Geht durch Einheiten (Minions blocken nicht) und nimmt einen festen Schadensbetrag aus jeder Quelle weniger. Hilft beim Disengage, indem er die eigene Welle durchschneidet."
      dd_spell_id: "Fizz_Passive"
    - key: "Q"
      name: "Urchin Strike"
      description: "Gezielter Dash über 550 Reichweite durch einen Gegner. Macht magischen Schaden und löst On-Hit-Effekte aus (Item-Passives, die bei jedem Auto-Attack triggern, etwa Lich Bane Spellblade). Haupt-Gap-Close, kurzer Cooldown."
      dd_spell_id: "FizzQ"
    - key: "W"
      name: "Seastone Trident"
      description: "Passiv: Deine Auto-Attacks lassen Gegner für 3 Sekunden magisch bluten. Aktiv: stärkt deinen nächsten Auto für magischen Bonusschaden. Ein Kill mit aktivem W resettet den Cooldown auf 1 Sekunde."
      dd_spell_id: "FizzW"
    - key: "E"
      name: "Playful / Trickster"
      description: "Springt aufs Trident: 0,75s untargettable, dann Slam für AOE-Magieschaden und einen Slow. Recast für einen weiteren Dash statt Slam (kein Slow, kleinere Fläche). Einzige Escape und Herz des Combos."
      dd_spell_id: "FizzE"
    - key: "R"
      name: "Chum the Waters"
      description: "Lineare Long-Range-Skillshot (1300). Heftet sich am ersten getroffenen Champion an, slowt ihn, dann eruptiert ein Hai und schleudert ihn in die Luft. Schaden und Slow skalieren mit der zurückgelegten Strecke."
      dd_spell_id: "FizzR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "W" }
    - { level: 15, key: "W" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "3100", name: "Lich Bane" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3152"
      name: "Hextech Rocketbelt"
      against: "alternatives First Item gegen Ranged-Poke-Comps, wenn ein zusätzlicher Dash zur Backline nötig ist"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "gegen schweres CC-Lockdown (Lissandra R, Rell Ult): Stasis lässt R fish detonieren, bevor du stirbst"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "gegen Single-Target Magic CC (Annie Stun, Twisted Fate Gold Card, Malzahar Suppression)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "Swap, sobald ein Priority Target ein Magic-Resist-Item kauft"
  base_combo: ["R", "Q", "W", "AA", "E"]
  win_condition: "Such isolierte Squishies in Side Lanes nach Lich Bane. Wirf R fish auf Max-Range, dann Q + W + AA Spellblade zum Auslöschen. Roame mit der Welle auf der Gegnerseite."
  weakness: "Squishy Melee mit nur einem Engage-Zyklus. Sind E oder R im Cooldown, hast du keine Escape und keinen zweiten Commit; fokussiertes CC bricht den Combo, bevor R fish landet."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8126, name: "Cheap Shot", icon_path: "perk-images/Styles/Domination/CheapShot/CheapShot.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "anivia", "twisted-fate"]
      archetype: "Immobile Mages ohne Dash"
      reason: "Fizz' Q dasht instinktiv durch sie und das E gibt 0,75s Untargettability, um ihren Schlüsselzauber zu dodgen. Ohne Escape-Dash können sie auf den All-in nicht reagieren, sobald R fish anhaftet."
    - examples: ["lux", "xerath", "ziggs"]
      archetype: "Long-Range-Artillerie ohne Mobilität"
      reason: "R fish reicht 1300 Units: bestraft Max-Range-Positioning. Sobald Fizz mit Q + E commitet, haben sie keinen Dash, um die Distanz zu resetten, und müssen das ganze Burst-Window absorbieren."
    - examples: ["annie", "syndra"]
      archetype: "Close-Range-Mages mit telegrafiertem Engage"
      reason: "Ihr Burst verlangt langsames Vorlaufen mit klarem Tell (Annie-Stun-Buffer, Syndra-E-Setup). Fizz E im Cast-Window macht ihn untargettable und der Combo verpufft."
  counterpicks:
    - examples: ["malphite", "galio"]
      archetype: "Tanky Mids mit hartem Engage"
      reason: "Ihre Resistenzen halbieren Fizz' Burst (Galios W reduziert ~50% magischen Schaden, Malphites Passive-Shield blockt den W-Proc). Beide haben harten Engage auf 6, der Fizz beim Erstcommit bestraft."
    - examples: ["lissandra", "malzahar"]
      archetype: "Mages mit Point-and-Click-CC"
      reason: "Lissandras R ist Point-and-Click-Stasis (kein Skillshot, der mit E zu dodgen wäre), Malzahars R suppressed durch den E-Recast hindurch. Beide waveclearen, daher kann Fizz sie in Lane nicht zonen."
    - examples: ["pantheon", "talon"]
      archetype: "Early-Game-Lane-Bullies"
      reason: "Sie out-traden Fizz auf Stufen 1-3, bevor er den Spike auf Stufe 6 erreicht. Pantheons W-Stun und sein shielded Q poken jeden Schritt nach vorn; Talons Q hat dieselbe Reichweite wie Fizz' Q bei geringeren Manakosten."
---

## Überblick

Fizz ist ein AP-Assassin-Melee, der auf dem Timing seiner **Playful / Trickster (E)** lebt oder stirbt. Sein Kit ist kurze Reichweite, hoher Burst (Schaden geballt in 1-2 Sekunden statt über Zeit verteilt) und glitschig: ein 0,75-Sekunden-Fenster, in dem er nicht targetbar ist, ein Dash mit niedrigem Cooldown und eine Long-Range-Fisch-Ult, die ein Priority Target locked. Mid lane passt zu ihm, weil der River kurz ist — er kann ab Stufe 6 mit **Q-E** in **R** engagen, mitten im Combo Counter-CC dodgen und dann mit dem **E**-Recast wieder rauskommen.

Sein Game Plan ist es, in Lane bis zum Zwei-Item-Spike (Lich Bane + Sorcerer's Shoes) zu überleben, dann Picks (einen isolierten Gegner außerhalb von Teamfights ausschalten) auf squishy Targets (Champions mit niedriger HP und ohne Defense-Stats — sie sterben schnell unter Burst) in Side Lanes zu suchen. Er selbst ist squishy, hat keinen Waveclear, und seine einzige Escape (**E**) startet auf 16 Sekunden Cooldown auf Rang 1 — sie ohne Mehrwert zu verbrauchen, bestraft ihn hart. Fizz bevorzugt einzelne Targets zum Auslöschen statt 5v5-Teamfights, in denen fokussiertes CC den Combo bricht, bevor R fish landet.

## Empfohlener Build

**Start-Items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Nimm stattdessen ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** gegen schweren Ranged Poke (Distanz-Harass, der HP wegnagt) wie Xerath oder Vel'Koz.

**Core-Items (in Reihenfolge):**

1. ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** — dein Haupt-Power-Spike (der Moment, in dem dein Schaden eine Stufe hochspringt und du aus Stärke kämpfen kannst). Synergiert mit dem Q-AA-Pattern: jedes **Q** triggert den Spellblade-Effekt auf der nächsten Auto-Attack und verdoppelt deinen Burst fast.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flache Magic Pen für die squishy Targets, die du am liebsten auslöschst.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — extra Burst plus eine HP-Threshold-Passive (Item-Effekt, der nur greift, wenn das Target unter ~35% HP ist), die zu R-fish-Executes passt.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — Late-Game-Scaling-Multiplikator. Dein höchster AP-Slot und das Item, das Squishies in One-Shot-Targets verwandelt.

**Situative Items:**

- ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** — alternatives First Item, wenn du einen extra Gap-Close brauchst (Mittel, um die Distanz zum Gegner zu überbrücken), um eine Ranged-Poke-Backline zu erreichen, die das **Q** allein nicht überbrückt.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — gegen schweres CC-Lockdown (Lissandra R, Rell Ult): Stasis lässt R fish detonieren, bevor du stirbst.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — gegen Single-Target Magic CC (Annie Stun, Twisted Fate Gold Card, Malzahar Suppression).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — sobald ein Priority Target ein Magic-Resist-Item kauft.

**Schuhe:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** sind Default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** sind okay, wenn **E** zu deinem wichtigsten Cooldown wird (stark combo-abhängige Matchups).

**Skill Order:** Max **E** zuerst (Untargettability + AOE-Schaden-Scaling — AOE heißt *area of effect*, der Spell trifft alles in einer Zone), **Q** als Zweites (Cooldown Reduction = mehr Dashes pro Fight), **W** zuletzt. Punkt in **R** auf Stufen 6, 11, 16.

**Runen:** Primärbaum **Domination** mit **Electrocute**, **Cheap Shot**, **Sixth Sense**, **Ultimate Hunter**. Sekundär **Sorcery** mit **Manaflow Band** und **Scorch**. Electrocute passt perfekt ins Drei-Hit-Fenster Q-AA-W: jeder All-in (vollständiger Combo-Commit bis Kill oder Escape) procct sie.

## Wichtige Matchups

- **Annie:** Telegrafierter Engage. Annies Passive stunnt den nächsten Spell nach jeweils vier gewirkten Spells — du siehst vier kleine blaue Marken um sie aufladen. In dem Moment, in dem die vier Marken erscheinen, lädt sie einen All-in. Spring mit **E**, während der Stun rausgeht; wenn du landest, ist ihr Haupt-Combo verschwendet und der Trade gehört dir.
- **Yasuo / Yone:** Yasuos Wind Wall (eine Wand, die Ranged-Spells blockt, die durchfliegen) stoppt Projektile, aber Fizz **Q**, **E** und **R** sind keine blockbaren Projektile. Out-trade sie (geh aus dem Trade im Vorteil raus) mit **W** aktiv auf deinen Auto-Attacks; ihre Wand ist gegen dich eine verschwendete Mechanik.
- **Lissandra:** Hard Counter. Ihr **W** ist ein Point-Blank-AOE (area of effect — trifft alles in einer Zone) Root, und ihr **R** ist Point-and-Click-Stasis (ein Spell ohne Skillshot zum Dodgen: sie klickt dich, der Spell landet). Keiner ist ein Skillshot (nicht-zielsuchender Spell, der in Linie oder Fläche fliegt und ausgewichen werden kann), den du mit **E** dodgen kannst. Halte **E** für ihren **W**-Cast, niemals All-in ohne **R**, und such stattdessen Picks in Side Lanes.
- **Galio:** Tank-Stats und ein Magic-Damage-Reduction-Passive auf seiner **W**, das deinen vollen Burst halbiert. Hör auf, ihn solo töten zu wollen; verbrauche Mana zum Shoven der Welle (deine Minions an den gegnerischen Turm drücken, damit sie nicht frei zu dir kommen können) und roame (geh aus deiner Lane, um Verbündeten anderswo auf der Map zu helfen) bot oder top, sobald **R** online ist.
- **Pantheon:** Bestraft dich pre-6. Sein **W**-Stun und shielded **Q**-Poke out-traden auf Stufen 1-3. Bleib hinter deiner Welle und trade nur, wenn sein **W** im Cooldown ist. Das Matchup kippt auf 6, sobald du **R** hast.

## Power Spikes & Siegbedingungen

- **Stufe 2:** Mit **E** + **Q** hast du einen garantierten Zyklus aus Dash + Slow + AOE-Schaden. Wenn der Gegner vorgeht, um einen Melee-Minion last-zu-hitten (den letzten Schlag für Gold setzen), **E** auf ihn und **Q-AA** loslassen für einen Winning Trade (kurzer Schlagabtausch, aus dem du als Sieger rausgehst).
- **Stufe 6:** Der erste **Chum the Waters** schaltet All-ins frei. Der Combo **R-Q-W-AA-E** löscht jeden squishy Mid Laner aus, selbst wenn nur die Bausteine von Lich Bane gekauft sind. Roame Bot Lane, nachdem du die Welle geshovet hast: mit Minions auf der Gegnerseite verlieren sie mehr Zeit beim Verteidigen, als du beim Verlassen der Lane.
- **![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) Lich Bane completion (~ Minute 11-13):** Burst-Spike (der Moment, in dem dein Schaden plötzlich springt). Dein Q-AA-Spellblade reißt ungefähr 40% HP von einem Squishy in einem Cast. Das ist das Fenster, in dem du aggressiv für Picks roamen solltest, statt 1v1 in Lane zu spielen.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ Minute 24-28):** Dein voller Combo one-shottet jeden Squishy, der nicht ein einziges Magic-Resist-Item gekauft hat. Erzwinge hier Objective-Fights; deny die Vision (zerstöre gegnerische Wards, damit sie keine Augen auf der Map haben) auf eurer Seite, damit der Gegner deinen Flank nicht sieht (Eintritt in den Fight von einer ungedeckten Seite).

## Häufige Fehler

- **E vor ihrem Commit benutzen.** **E** ist deine einzige Escape. Springst du, ohne vorher ihr CC zu baiten, frisst du den Spell beim Landen. Warte, bis sie die Schlüsselability werfen — *dann* spring.
- **R fish aus zu kurzer Reichweite.** Schaden und Slow-Stärke des Fischs skalieren mit der vor dem Anhaften zurückgelegten Strecke. Wirf ihn auf Maximalreichweite 1300, damit er mit vollem Schaden trifft und der Slow das gesamte Detonationsfenster anhält.
- **All-in in 2+ Gegner.** Fizz hat einen Engage-Zyklus (vollständiger Commit in einen einzigen Combo). Taucht ein zweites Target mitten im Combo auf, hast du keine zweite R fish, keine zweite Escape und brichst unter fokussiertem CC zusammen. Such isolierte Targets in Side Lanes, keine 5v5 Mid.
- **W beim Chasen vergessen.** Ein Kill mit aktivem **W** erstattet Mana und drückt den Cooldown auf 1 Sekunde — du kannst sofort eine weitere verstärkte Auto-Attack auf ein zweites Target nachsetzen. Aktiviere **W** vor dem tödlichen Schlag, sobald ein Follow-up-Target in der Nähe ist.
- **W zuerst maxen in normalen Lanes.** **Q** und **E** tragen deinen Schaden und das Combo-Timing; der **W**-Bleed ist anhaltender DPS, der in langen Trades zählt, nicht in Burst-Fenstern. Default: **E** zuerst maxen.

## Fortgeschrittener Tipp

Übe den **R-Flash-Combo** (R + Flash). Wirf den Fisch nach vorn, dann sofort **Flash** in dieselbe Richtung: der Fisch landet weit über die natürlichen 1300 Units hinaus und gibt dir einen garantierten Catch auf ein Target, das sich außer Reichweite wähnt. Nutze ihn für Picks über Wände hinweg oder um Objective-Fights aus unerwarteten Winkeln zu öffnen. Das Cast-zu-Flash-Fenster ist kurz — bind **Flash** auf deine zweite Taste (D) für Muskelgedächtnis und übe es im Practice Tool, bis das Timing automatisch sitzt.
