---
title: "Anivia Mid Build & Guide — Patch 16.9"
slug: "anivia-mid"
language: "de"
patch: "16.9"
champion: "anivia"
role: "mid"
last_updated: "2026-04-29"
description: "Anivia Mid Guide für League of Legends Patch 16.9: Starter-Items, Control-Mage-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Anivia"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Control"
  abilities:
    - key: "P"
      name: "Rebirth"
      description: "Bei tödlichem Schaden verwandelt sich Anivia für ein paar Sekunden in ein bewegungsloses Ei. Überlebt das Ei, kommt sie auf vollen HP zurück. Lange Cooldown — bait sie nicht zweimal im selben Fight."
      dd_spell_id: "Anivia_Passive"
    - key: "Q"
      name: "Flash Frost"
      description: "Lineare Skillshot mit langer Reichweite: eine Eiskugel verlangsamt Gegner auf der Bahn; am Ende detoniert sie und stunt. Recast für frühere Detonation."
      dd_spell_id: "FlashFrost"
    - key: "W"
      name: "Crystallize"
      description: "Beschwört für ein paar Sekunden eine breite, undurchdringliche Eiswand. Blockt jede Bewegung (auch deine) und Dashes hindurch."
      dd_spell_id: "Crystallize"
    - key: "E"
      name: "Frostbite"
      description: "Gezielte Kurzdistanz-Explosion. Verursacht doppelten Schaden, wenn das Ziel von Q oder einer fully formed R Chilled ist."
      dd_spell_id: "Frostbite"
    - key: "R"
      name: "Glacial Storm"
      description: "Boden-Toggle: Eissturm, der verlangsamt und magischen Schaden tickt. Voll geformt appliziert er Chill, sodass E in der Zone doppelt trifft."
      dd_spell_id: "GlacialStorm"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
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
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "gegen Diver und Assassinen (Zed, Akali, Diana) — Stasis überbrückt, bis R wieder steht"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "gegen magische Single-Target-CC (Ahri Charm, Lissandra R, Twisted Fate Stun), die das R-Toggle unterbricht"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "gegen Heal-stacking-Comps (Soraka, Vladimir, Aatrox) — R appliziert Grievous Wounds großflächig"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap, sobald ein Priority-Target sein erstes Magic-Resist-Item baut"
  base_combo: ["Q", "E", "R", "E"]
  win_condition: "Land Q auf Max-Range für Chill, E für doppelten Schaden, dann R unter ihre Füße — alles Geslowte frisst eine weitere empowerte E. Wall den Rest des Teams raus, damit die Kill nicht unterbrochen wird."
  weakness: "Langsam, kein Dash, niedrige Base-Armor, mana hungry early. Verfehlte Q tötet den Trade; Diver erreichen dich, bevor R fully formed ist. Wind Wall und Silences zerlegen das ganze Kit."
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
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["veigar", "viktor", "lux"]
      archetype: "Immobile mages without escape"
      reason: "Anivias Q + W fangen immobile Mages: sie können den Chill nicht dodgen und die verdoppelte E nicht meiden, und kommen nicht um die Wall, wenn sie ihre Wave abschneidet."
    - examples: ["garen", "sett", "mordekaiser"]
      archetype: "Melee bruisers without ranged engage"
      reason: "Crystallize blockt jeden Melee-Engage; mit E zum Shove und R für Waveclear farmt sie sicher, während sie Anivia ohne Flash nicht erreichen."
    - examples: ["malphite", "wukong", "kennen"]
      archetype: "Single-engage 5-man wombo comps"
      reason: "Crystallize teilt das Gegnerteam beim Engage in zwei Hälften; landet die Wall zwischen Initiator und Follow-up, trifft das Wombo nur ein oder zwei Ziele, nicht fünf."
  counterpicks:
    - examples: ["zed", "akali", "fizz", "leblanc", "talon"]
      archetype: "Mobile assassins with multiple gap-closers"
      reason: "Sie kommen während ihrer Cast-Windows in E-Range; ohne Dash und mit nur einem Ei burstet eine Dash-Kette sie weg, bevor R fully formed ist."
    - examples: ["yasuo"]
      archetype: "Projectile-blocking duelists"
      reason: "Wind Wall blockt die Q komplett (kein Chill landet) und die Hauptdamage-Bedrohung kollabiert; ohne Chill halbiert sich der E-Schaden, und die Lane wird zum Melee-Fight, den sie nicht gewinnen kann."
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "Long-range artillery mages"
      reason: "Outrange Anivias Q in jeder Lane-Phase und poken aus ihrem Threat-Radius heraus; sie hat keine Mobility, um den Gap zu schließen oder ihre Cooldowns zu bestrafen."
---

## Überblick

Anivia ist eine Control Mage mit langer Reichweite, zwei HP-Bars, einer langsamen aber massiven AOE-Ult und der einzigen unpassierbaren Wand im Spiel. Ihr Kit bestraft Positioning-Fehler: **Flash Frost (Q)** appliziert **Chill** (ein benannter Slow-Status, um den sich der Rest des Kits dreht), **Frostbite (E)** verdoppelt den Schaden auf Chilled-Zielen, und **Glacial Storm (R)** hält alle in der Zone slowed. Sie tauscht Mobility gegen Utility — kein Dash, aber **Rebirth (P)** gibt ihr ein zweites Leben, wann immer das Ei überlebt.

Ihr Game Plan in Mid ist einfach zu beschreiben und brutal auszuführen: Shove (drück die Minion-Welle in den Feindturm) die Wave mit **R** + **E**, triff River oder Jungle mit einem **Q-E**-Combo durch den Fog, sobald ein Gegner reinläuft, und nutz **Crystallize (W)**, um Engages (Engage = der Moment, in dem ein Teamfight startet) zu spalten oder Mitspieler aus Dives zu retten (Champions, die auf dich springen, um dich zu bursten — Burst = hoher Schaden in 1-2 Sekunden). Auf jedem Rang gewinnt sie auch Spiele, indem sie Lanes hält, die niemand sonst halten kann — eine fully formed (voll ausgebildete) **R** ist eine Wand aus konstantem magischem Schaden.

## Empfohlener Build

**Starter-Items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Anivia ist mana hungry early und braucht das AP und das Mana Regen, um zwei **Q** pro Wave zu werfen, ohne trocken zu fallen.

**Core-Items (in Reihenfolge):**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — Burst-Spike (Schadenschub) plus Mana-Sustain. Lässt dich **Q-E** casten, ohne auf die Bar zu starren.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flache Magic Penetration (schneidet einen festen Wert von der gegnerischen MR weg), um den E-Doppelschlag auf squishy Ziele (Champions mit wenig Defenses, typischerweise ADCs und Mages) zu boosten.
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multipliziert dein AP, hebt das Scaling (wie viel stärker ein Champion pro Item und Level wird) bereits starken Bursts auf One-Shot-Niveau.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — Extra-Burst plus eine HP-Threshold-Passive (Bonus, der zündet, wenn das Ziel unter ~35% HP fällt), die mit den E-Finishern harmoniert.

**Situative Items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — gegen Diver und Assassinen (Zed, Akali, Diana). Die Stasis (kurzer unverwundbarer Freeze) kauft Zeit, bis **Glacial Storm** zurückkommt.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — gegen schwere magische Single-Target-CC (Ahri Charm, Lissandra R, Twisted Fate Stun), die dein **R**-Toggle unterbrechen würden.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — gegen Compositions, die Heilung stapeln (Soraka, Vladimir, Aatrox). Die konstanten R-Ticks applizieren Grievous Wounds (Debuff, der erhaltene Heilung kürzt) großflächig.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — kauf das, sobald ein Priority-Target (der Gegner, den du am liebsten tot siehst — meistens deren Carry) sein erstes Magic-Resist-Item (MR — die Defensiv-Stat, die magischen Schaden reduziert) baut. Anivias Schaden bricht gegen MR ein, wenn du es verschleppst.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** ist Default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** sind nur akzeptabel, wenn dein Team in Skirmishes (kleine 2v2- oder 3v3-Kämpfe abseits des Haupt-Teamfights) nach mehr **R**-Uptime (wie oft R wieder verfügbar ist) verlangt.

**Skill-Order:** Maxe **E** zuerst — das ist dein eigentlicher Damage-Button, doppelt auf Chilled. Maxe **Q** als zweites (längerer Slow + Stun), **W** zuletzt. Punkt in **R** auf Level 6, 11, 16. Setz **W** auch auf Level 3, obwohl du sie zuletzt maxst: ein einzelner Rank rettet schon Leben oder spaltet einen Engage.

**Runen:** Primär **Sorcery** mit **Arcane Comet** (kostenloses Schaden-Projektil, das einschlägt, wenn du einen Gegner mit einer Ability triffst), **Manaflow Band** (kostenloses Mana, wenn ein Skillshot trifft), **Transcendence** (Cooldown Reduction), **Scorch** (Extra-Burn auf den ersten Ability-Treffer). Sekundär **Inspiration** mit **Biscuit Delivery** (kostenlose Potions in Lane) und **Cosmic Insight** (zusätzliche CDR auf Summoner Spells wie **Flash**). Comet ist die einzelne profitabelste Schadens-Rune für Anivia: jede Chilled **E** triggert sie beim Einschlag.

## Wichtige Matchups

- **Yasuo:** Er kann mit Wind Wall (eine Ability, die Projektile für ein paar Sekunden blockt) deine **Q** und sogar dein **E**-Projektil blocken. Halt beide zurück, bis er Wind Wall an Minions verschwendet hat. Setz die **W** vertikal zwischen ihn und seine Minions, wenn er den All-in (volle Verpflichtung zum Kampf bis zum Tod) versucht — er verliert das Wind-Wall-Fenster sowohl an die Wall als auch an den Chill.
- **Zed / Akali:** Dive-Threats. Kauf ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** nach ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion**, wenn sie vorne liegen. Setz die **R** unter deine eigenen Füße, wenn sie reinkommen — sie müssen in deinem Sturm kämpfen, wenn sie die Kill wollen.
- **Veigar:** Ausgeglichenes Matchup, entschieden davon, wer zuerst roamt (verlässt die eigene Lane, um anderswo zu helfen). Du clearst pre-6 die Wave dank **R** besser; bestraf ihn, indem du shovst und Bot Lane hilfst, während er noch unter Tower farmt.
- **Xerath / Vel'Koz:** Sie outpoken deine Range. Steh hinter Minions, last-hitte (Last-Hit = der tödliche Schlag auf einen Minion, der dir Gold gibt) mit **E**, push nie über die Hälfte der Wave hinaus, außer dein Jungler ist mid-side (im Jungle nahe der Mid Lane positioniert).
- **Annie:** Eine telegraphierte All-in-Mage — ihr Stun hat ein langsames, deutliches Tell (sichtbare Animation kurz vor dem Cast, die zum Ausweichen warnt). Pre-6 setz **W** auf Tibbers' Landungspfad, um ihre Stun-und-Summon-Combo zu spalten. Deine Ei-Passive rettet dich vor einem Full-Burst-Versuch; sie wird die Ult eh zünden und dir einen kostenlosen Counter-Engage liefern.

## Power Spikes & Siegbedingungen

- **Level 2:** Mit **Q** + **E** kannst du einen Lane-Gegner, der zu weit für einen Minion vorgeht, bereits chill-and-double-tappen. Drohe das in jeder Wave; das ist der Trade (kurzer Austausch von Schlägen und Abilities, kein voller Kill-Versuch), um den Anivia herum aufgebaut ist.
- **Level 6:** Erste **Glacial Storm**. Du wechselst von einer der schwächsten Mages auf Level 5 zu einem der stärksten Waveclear- (Fähigkeit, Minion-Wellen schnell zu clearen) und Zoning- (den Gegner mit Schaden aus einer Zone vertreiben) Kits auf Level 6. Shove die Wave sofort und such einen Roam.
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion fertig (~ Minute 12-14):** Ein voller **Q-E**-Combo plus der Luden's-Proc (das Item-Passive, das automatisch beim Casten triggert) one-shottet die meisten ADCs und andere Mages ohne MR-Item. Erzwing in diesem Fenster Objective-Fights.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ Minute 26-30):** Anivias Late Game zündet. Mit tickender (kleine Schäden alle Sekundenbruchteile) **R** und einer Chilled **E** verlieren selbst Tanks Stücke HP pro Sekunde. Group dich mit dem Team und lass die Frontline (die Rolle der Tanks/Bruiser, die vorne stehen und Schaden absorbieren) den Job für dich erledigen.

## Häufige Fehler

- **Q ohne E-Follow-up werfen.** **Q** allein ist akzeptabler Poke (Chip-Schaden auf Distanz, um den Gegner zu kratzen, ohne sich zu verpflichten); **Q** dann **E** mit dem Chill-Doppelbonus ist eine echte Kill-Drohung. Nutz **Q** nie nur zum Harass (Poke nur, um zu nerven und HP zu kratzen), wenn **E** off Cooldown ist.
- **Sich selbst aus der Lane wallen.** **W** ist für *beide* Seiten unpassierbar. Setz sie parallel zur Wave, um einen Gank (Ambush des Junglers aus dem Fog) zu peelen (Peel = eine Ability nutzen, um einen Verbündeten vor dem zu schützen, der auf ihn springt), niemals senkrecht durch deinen eigenen Fluchtweg.
- **R zu früh abschalten.** **R** frisst kein Mana mehr, sobald sie steht — halt sie in Fights aktiv, panic-toggle nicht beim ersten Mana-Tropfen. Allein der Slow ist das Mana wert.
- **Ei-Roulette.** Deine Rebirth-Passive hat einen langen Cooldown. "Vertrau dem Ei" nicht beim Tower-Diving (unter ihren Tower laufen, um sie zu töten) auf niedrigen HP, außer du hast die Mathematik gemacht: ein paar Treffer reichen, um das Ei zu töten, und einer dieser Treffer kann der Tower selbst sein.
- **W als Peel-Tool ignorieren.** Die meisten Anivia-Spieler denken nur an **W** als Chase-Tool. Gegen Pick-Comps (Compositions, die gewinnen, indem sie einen Spieler aus der Position fangen) ist eine **W** zwischen deiner Back Line (deine Carries, die hinten Schaden machen) und einer Malphite-Ult eine der stärksten Defensiv-Plays in Mid.

## Fortgeschrittener Tipp

Nutz die Recast-Detonation der **Q** als *Vision-Tool*. Die Eiskugel hat einen breiten Sichtradius im Flug und beim Detonieren: schick sie durch den Fog of War (der unsichtbare Teil der Map außerhalb der Team-Vision) auf einen wahrscheinlichen Gegner-Pfad — zum Beispiel ins Mid-River vor einem Drake Fight (der Teamkampf um den Drachen, ein Objective-Monster im Bot-side River, das Buffs für das tötende Team gibt) — und recast sofort beim Kontakt. Du gibst deinem Team eine halbe Sekunde Vision und einen Stun mit einem Knopf. Top-Anivias ersetzen einen Ward (eine platzierte Sentinel, die einen kleinen Bereich der Map für eine Weile aufdeckt) pro Fight mit einer im Fog detonierten **Q**: günstiger, schneller, und sie stunt den Engage.
