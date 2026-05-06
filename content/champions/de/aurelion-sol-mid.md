---
title: "Aurelion Sol Mid Build & Guide — Patch 16.9"
slug: "aurelion-sol-mid"
language: "de"
patch: "16.9"
champion: "aurelion-sol"
role: "mid"
last_updated: "2026-04-29"
description: "Aurelion Sol Mid Lane Guide für League of Legends Patch 16.9: Build mit Stardust-Scaling, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "AurelionSol"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Battlemage"
  abilities:
    - key: "P"
      name: "Cosmic Creator"
      description: "Schadenszauber sammeln Stardust von gegnerischen Champions. Stardust vergrößert dauerhaft Fläche, Reichweite und Execute-Schwelle jedes Spells — geduldiges Stacken zahlt sich im Late Game aus."
      dd_spell_id: "AurelionSol_Passive"
    - key: "Q"
      name: "Breath of Light"
      description: "Gechannelter Drachenatem in einem Frontkegel. Halte den Knopf, um weiter Schaden zu machen; jede volle Sekunde auf einem Champion löst extra Burst aus und gibt Stardust. Hauptquelle für DPS."
      dd_spell_id: "AurelionSolQ"
    - key: "W"
      name: "Astral Flight"
      description: "Gerichteter Flug über Terrain; während des Flugs hat Q keinen Cooldown. Eine Takedown in 3s erstattet einen Teil des W-CDs. Stardust verlängert die maximale Flugreichweite."
      dd_spell_id: "AurelionSolW"
    - key: "E"
      name: "Singularity"
      description: "Platziert ein schwarzes Loch, das Gegner zur Mitte zieht und Schaden macht. Die Mitte exekutiert (tötet sofort) Ziele unter HP-Schwelle. Stardust vergrößert Zone und Schwelle."
      dd_spell_id: "AurelionSolE"
    - key: "R"
      name: "Falling Star / The Skies Descend"
      description: "Stern stürzt aufs Ziel: Stun und Schaden. Nach 100 Stardust wird die nächste R zu The Skies Descend — größere Fläche, Knock-up statt Stun, AoE-Shockwave."
      dd_spell_id: "AurelionSolR"
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
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "gegen mobile Assassinen (Zed, Fizz, Talon, Akali) — Stasis ist der Panik-Knopf, wenn W auf Cooldown ist"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "gegen harten Single-Target-CC, der die Q unterbricht (Annie R, Lissandra R, Twisted Fate Gold Card)"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "gegen rutschige Teams: der Slow hält die Ziele im Q-Kegel fest"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap, sobald ein Priority-Target sein erstes Magic-Resist-Item kauft"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "gegen Comps mit gestapeltem Healing (Soraka mid, Vladimir, Yuumi + Heal-heavy Bot Lane)"
  base_combo: ["E", "Q", "W", "R"]
  win_condition: "Stacke Stardust in langen Fights mit langen Q-Channels und W-Verfolgungen. Sobald Liandry's Torment und Rabadon's Deathcap stehen, löscht dein sustained Burn die Squishys durch ihre Magic Resist."
  weakness: "Q ist ein langer Channel: jeder Hard CC, der ihn unterbricht (Annie R, Lissandra R, Twisted Fate Stun), halbiert deinen Schaden. Mobile Assassinen schließen die Distanz, bevor W als Escape bereit ist."
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
    - examples: ["veigar", "anivia", "karthus"]
      archetype: "Immobile Control Mages ohne Dash"
      reason: "Aurelion Sols W-Flug schließt die Distanz, während Q weiter channelt. Ziele ohne Dash oder Stealth fressen sustained Q-Schaden, während die Flug-Window ihn außerhalb ihrer Cast-Reichweite hält."
    - examples: ["galio", "sylas"]
      archetype: "Kurzdistanz-Skirmisher mid (Melee)"
      reason: "Ihr All-in braucht Nahkampf-Distanz. ASol kited mit W und Q außerhalb der Auto-Attack-Reichweite; flashen sie rein, zieht E sie aus der Position und R stunnt, sobald Stardust die Fläche skaliert."
  counterpicks:
    - examples: ["zed", "fizz", "talon"]
      archetype: "Mobile Assassinen mit mehreren Gap-Closern"
      reason: "Sie können mitten im Channel auf Aurelion Sol dashen, die Q unterbrechen und ihn bursten, bevor das Stardust-Scaling greift. W hat zu langen Cooldown, um ein zuverlässiger Escape zu sein."
    - examples: ["yasuo", "yone"]
      archetype: "Champions mit Wind Wall"
      reason: "Ihre Wand blockt die ganze Q-Linie. ASols Hauptschadensquelle wird mitten im Trade nutzlos und sie bestrafen den verlorenen Channel mit einem All-in, aus dem er nicht rauskommt."
---

## Überblick

Aurelion Sol ist ein Sustained-Damage-Mage, dessen Kit sich um zwei einfache Ideen dreht: halte **Breath of Light (Q)** so lange wie möglich auf einem Ziel gechannelt (Channel = ein Spell, den du mehrere Sekunden ununterbrochen castest, durch Hard CC unterbrechbar), und nutze **Astral Flight (W)**, um nachzusetzen, wenn das Ziel flieht. Seine Passive **Cosmic Creator** sammelt eine permanente Ressource namens **Stardust** jedes Mal, wenn du einem Champion lange genug Schaden zufügst — Stardust vergrößert dauerhaft Fläche, Reichweite und Execute-Schwelle (HP-Schwelle, unter der ein Spell das Ziel sofort tötet) seiner Spells. Je länger das Spiel läuft, desto größer und bedrohlicher wird jeder Cast. Er hat keinen Instant-Burst-Combo: er gewinnt, indem er an den Gegnern dranbleibt, bis der Burn (Schaden, der über mehrere Sekunden tickt statt auf einmal zu landen) sie umlegt.

Dein Mid-Lane-Plan ist asymmetrisch. Auf den frühen Levels tradest du in kurzen Fenstern (ein kurzer Schadensaustausch in der Lane, kein voller Kill-Versuch): **Q** auf einen Champion, der zum Last-Hitten reinläuft, ein oder zwei Schadens-Ticks, zurück. Ab Level 6 lässt dich **W** Terrain überqueren wie ein freier **Flash** — nutze es, um Kills nachzusetzen, die dein Jungler dir mit einem Gank vorbereitet (wenn der Jungler in deine Lane kommt, um dir beim Kill des Gegners zu helfen), oder zum Disengage zurück zur eigenen Tower. Im Late Game wirst du zum Backline-Battlemage (ein Mage, der auf mittlerer Distanz kämpft und Spells mit Positionierung mischt statt Long-Range-Artillerie): stelle dich an den Rand des Teamfights (hinter der Frontline — deine Tanks und Bruiser, die zähen Melee-Kämpfer, die Schaden für das Team schlucken), channel **Q** durch ihre Körper auf den gegnerischen Carry, lass **Singularity (E)** fallen, um Gegner an den Rändern reinzuziehen, und finishe mit **Falling Star (R)**, sobald sie den Carry stunnt.

## Empfohlener Build

**Starter-Items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** (der Default-Ring als Erstkauf für Mages: ein bisschen AP, HP und Mana-Regen) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Die Mana-Regen von Doran's ist Pflicht — du spammst Q auf jeder Minion-Wave.

**Core-Items (in Reihenfolge):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — verbrennt jede Sekunde einen Prozentsatz der maximalen HP des Ziels, solange deine Q es trifft (also härter gegen tankige Gegner, und je länger der Channel, desto größer der Burn). Dein bestes einzelnes Item.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — Stiefel mit Magic Penetration: jeder Cast ignoriert einen festen Anteil der Magic Resist des Gegners, was Squishys (Ziele mit wenig Defensive wie ADCs und Mages) schneller löscht.
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multipliziert deine **AP** (Ability Power, die Stat, die magischen Schaden skaliert) um zusätzliche 30%. Jeder Spell trifft härter. Dritter Kauf, wenn du vorne liegst.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — bonus magischen Schaden auf Gegner mit niedriger HP (HP-Threshold-Passive: extra Schaden, der nur unter einem bestimmten HP-% auslöst). Passt perfekt zu **R**-Finishs.

**Situative Items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — gegen mobile Assassinen (Zed, Fizz, Talon). Stasis ist dein Panik-Knopf, wenn **W** auf Cooldown ist.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — gegen harten Single-Target-CC (Annie R, Lissandra R, Twisted Fate Gold Card). Ein geblockter Stun rettet deinen Channel.
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — slowt alles, was die **Q** trifft, und hält die Ziele im Atem-Kegel fest.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — schwere Magic Penetration für Gegner, die Magic Resist gebaut haben. Swap, sobald ein Priority-Target sein erstes MR-Item kauft.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — appliziert Grievous Wounds auf Gegner, denen du Schaden zufügst (ein Status, der ihre Heilung halbiert). Hol es gegen Heal-Stack-Comps (Soraka mid, Vladimir, Yuumi + Heal-heavy Bot Lane).

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** ist Default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** (Stiefel, die Spell-Cooldowns reduzieren) sind eine Option, wenn dein Team **R** öfter als Teamfight-Engage-Tool braucht.

**Skill Order:** Maxe **Q** zuerst (Hauptschadensquelle), **E** als zweites (Waveclear und AoE-Setup), **W** zuletzt. Punkt in **R** auf Level 6, 11, 16.

**Runes:** Primärbaum **Sorcery** mit **Arcane Comet**, **Manaflow Band**, **Transcendence** und **Scorch**. Sekundär **Inspiration** mit **Biscuit Delivery** und **Cosmic Insight**, oder **Resolve** mit **Second Wind** und **Overgrowth**, falls die Lane heftiger Range-Poke-Harass ist (Poke = Schaden mit wenig Commitment, der dein HP langsam abträgt).

## Wichtige Matchups

- **Yasuo / Yone:** Ihre **Wind Wall** blockt die komplette **Q**-Linie. Halte **Q** zurück, bis sie die Wand verbraten haben, dann re-engage. Tradet nur, wenn die Wand auf Cooldown ist.
- **Zed / Talon:** Sie bursten dich, bevor **W** bereit ist. Kauf ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** vor ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap**; halte niemals **Flash** und **W** gleichzeitig auf Cooldown.
- **Veigar:** Ausgeglichen pre-6 — er stunnt dich in seinem W-Käfig; du pokest ihn von außerhalb des Käfigs mit der **Q**-Reichweite. Post-6 kann er dich mit E-W-Q-R one-shotten, wenn du stehen bleibst — beweg dich seitlich, während du channelst.
- **Annie:** Ihr Stun versteckt sich in einem Passive-Counter, den du nicht klar sehen kannst. Zähle ihre Spell-Casts: alle 4 Casts ist ihr Stun bereit. Wenn ihr **Pyromania**-Indikator (das orangene Flammen-Icon unter ihrem Portrait) leuchtet, bleib nicht in Tibbers-Cast-Reichweite.
- **Twisted Fate:** Ein Rennen, wer zuerst roamt (die eigene Lane verlässt, um andere Lanes zu unterstützen). Seine **R** teleportiert ihn quer über die Map; deine **W** kann über Terrain fliegen, um zu folgen. Halte die Mid-Wave Richtung gegnerischer Tower geshovt, wenn möglich, damit du free CS farmst, falls er Bot ganken geht.

## Power Spikes & Siegbedingungen

- **Level 2:** Mit **Q** + **W** kannst du einen Fehler bis zur Lane-Mauer verfolgen — bestraft jeden, der zu nah am River ohne Vision steht.
- **Level 6:** Erste **Falling Star** schaltet einen Instant-Stun frei. Setz Ganks mit deinem Jungler auf (wenn der Jungler in deine Lane kommt, um beim Kill zu helfen): **E**-Pull → **R**-Stun → Kill.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment online (~ Minute 11-13):** Deine sustained **Q** geht von Chip Damage (kleinem, langsamem Schaden) zu echter Bedrohung über. Erzwinge Fights an Drake-Spawns (das Dragon-Objective im River, das teamweite Buffs gibt), sobald Liandry's online ist.
- **100 Stardust gesammelt (~ Minute 18-22):** Deine **R** wird zu **The Skies Descend** — größere Fläche, Knock-up statt Stun, AoE-Shockwave. Das ist deine Teamfight-Win-Condition; halt sie für Objectives, statt sie auf einen Pickoff (Eliminierung eines isolierten Gegners außerhalb des Teamfights) zu verbrennen.

## Häufige Fehler

- **Q channeln, ohne zu fliegen.** Stillstehen während des **Q**-Channels macht dich zur Zielscheibe. **W** in dieselbe Richtung, in die das Ziel flieht, damit der Channel ohne Mana-Mehrkosten weiterläuft, während du sicher bleibst.
- **W aggressiv ohne Exit-Plan nutzen.** **W** ist dein einziger Escape. Wenn du auf 3 Gegner ohne Setup fliegst (Jungler in der Nähe, **R** bereit, genug Cooldown-Reduction-Stat, um **W** schnell wiederzuhaben), stirbst du, ohne Schaden zu machen. Behandle **W** als Commitment (ein All-in: du gehst auf den Kill ohne einfachen Rückzug), nicht als freie Mobility.
- **Stardust greedy sammeln statt Kills holen.** Stardust skaliert die Spells langfristig, aber wenn der gegnerische Carry bei 30% HP one-shotbar ist, finishe ihn. Ein toter Carry ist mehr wert als 5 Stardust.
- **E vergessen, dass es zur Mitte zieht.** Deine **E** zieht Gegner in die Mitte der Zone — zieh sie IN dein Team rein, nicht raus. Eine falsch platzierte E kann den gegnerischen Carry retten, indem sie ihn aus deiner Frontline rauszieht.
- **Wave mit Q in der Lane pushen.** **Q** pusht zu langsam und verbrennt Mana. Nutze **E**, um Caster-Minions zu clearen, und last-hitte die Melees mit Auto-Attacks. Spar **Q** für Trades und Harass.

## Fortgeschrittener Tipp

Die **Q-W-Q**-Kette ist die Technik, die Aurelion-Sol-Spieler trennt. Cast **Q** auf einen Champion und sofort danach **W** in die Richtung, in die er flieht. Da **W** das Channel-Limit der Q während des Flugs aufhebt, machst du in der Luft kontinuierlich Schaden — und **Q** kann mitten im Flug für eine zweite Instanz neu gecastet werden, falls das ursprüngliche Ziel stirbt und ein neues in Reichweite ist. In der Praxis erlaubt dir das, dich aus sehr weiter Distanz zum Kill zu committen: **W** fliegt eine lange Strecke (etwa 1,5 Bildschirmbreiten), und während dieses Flugs trifft deine **Q** weiter alles vor dir, sodass die Bedrohungszone die **W**-Reichweite plus **Q**-Reichweite kombiniert. Bei Takedown wird ein Teil des **W**-Cooldowns erstattet, sodass du fast sofort den nächsten Fight re-engagen kannst.
