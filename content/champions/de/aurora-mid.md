---
title: "Aurora Mid Build & Guide — Patch 16.9"
slug: "aurora-mid"
language: "de"
patch: "16.9"
champion: "aurora"
role: "mid"
last_updated: "2026-04-29"
description: "Aurora Mid Guide für League of Legends Patch 16.9: Starter-Items, Burst-Mage Core-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Aurora"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Assassin"
  abilities:
    - key: "P"
      name: "Spirit Abjuration"
      description: "Schaden an Gegnern setzt Geister frei, die Aurora folgen und sie bei Kontakt heilen. Konstantes Sustain in Lane und in Teamfights."
      dd_spell_id: "Aurora_Passive"
    - key: "Q"
      name: "Twofold Hex"
      description: "Linearer Skillshot, der getroffene Gegner verflucht. Recast zieht den Fluch zu Aurora zurück und schlägt erneut zu, basierend auf fehlenden HP."
      dd_spell_id: "AuroraQ"
    - key: "W"
      name: "Across the Veil"
      description: "Dash beim Cast; bei Landung wird Aurora unsichtbar und gewinnt Movement Speed. Reset bei Takedowns. Hauptwerkzeug für Mobility."
      dd_spell_id: "AuroraW"
    - key: "E"
      name: "The Weirding"
      description: "Magische AOE-Explosion, die Gegner verlangsamt. Aurora hüpft nach dem Cast rückwärts und hat sicheres Disengage aus Trades."
      dd_spell_id: "AuroraE"
    - key: "R"
      name: "Between Worlds"
      description: "Sprung, danach entsteht eine Slow-Zone, die Aurora per Teleport durchqueren kann. Gegner beim Eintritt oder Austritt werden stärker verlangsamt."
      dd_spell_id: "AuroraR"
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
    - { dd_id: "4646", name: "Stormsurge" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "gegen mobile Assassinen (Zed, Fizz, Akali) — Stasis deckt das Fenster, in dem W auf Cooldown ist"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "gegen magische Single-Target-CC (Annie Stun, Lissandra R, Twisted Fate Gold Card)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "sobald ein Priority-Target ein Magic-Resist-Item baut (über 60 MR)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "gegen Comps mit viel Healing (Soraka, Vladimir, Dr. Mundo, Yuumi)"
  base_combo: ["E", "Q", "W", "Q", "AA"]
  win_condition: "Bestrafe Positioning-Fehler mit W jump-in plus Q-Recast-Burst, sobald Stormsurge und Shadowflame stehen. Nutze die W-Resets auf Takedowns, um Teamfights durchzucyclen."
  weakness: "Hard CC vor W schließt jede Fluchtroute. Long-Range-Artillery-Mages poken sie aus ihrem Step-up-Fenster, bevor sie überhaupt engagen kann."
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
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "anivia", "cassiopeia"]
      archetype: "Immobile Mages ohne Escape"
      reason: "Diese Mids haben weder Dash noch Stealth: Aurora kann mit W reinkommen, sobald die Q sitzt, die Curse-Recast direkt vor ihrer Nase finishen und mit dem Takedown-Reset wieder rauspoppen."
    - examples: ["yone", "sett", "pantheon"]
      archetype: "Melee-Mids mit kurzer Reichweite"
      reason: "Aurora outranged sie mit Q-Poke und nutzt den Backward-Hop von E, um Trades zu refusen; sie müssen Gap-Closer commiten, die Aurora mit Q-Recast beim Reinkommen bestraft."
    - examples: ["veigar", "ziggs"]
      archetype: "Stationäre Burst-Mages mit langem Cast"
      reason: "Ihr Kill-Window erfordert, dass Aurora für ein langsames Projektil oder einen Käfig stillsteht. W-Invisibility bricht das Cast-Read und lässt sie das Setup sidestepen."
  counterpicks:
    - examples: ["xerath", "vel-koz", "lux"]
      archetype: "Long-Range-Artillery-Mages"
      reason: "Sie poken Aurora jede Wave außerhalb ihrer Q-Reichweite. Ohne integrierten Shield kostet jeder Step-up für E oder Q HP, die ihre Passive allein nicht zurückholt."
    - examples: ["zed", "fizz", "akali"]
      archetype: "Mobile Assassinen mit mehreren Gap-Closern"
      reason: "Sie bursten Aurora im W-Cooldown-Fenster. Selbst mit Zhonya's löscht eine Dash-Kette plus Ult sie aus, bevor sie Stasis ziehen oder W resyncen kann."
    - examples: ["yasuo"]
      archetype: "Champions mit Projectile-Block"
      reason: "Yasuos Wind Wall negiert sowohl die ausgehende Q als auch den Pull-back der Recast und entfernt damit rund die Hälfte von Auroras Lane-Schaden mit einer einzigen Fähigkeit."
---

## Überblick

Aurora ist eine magische Burst-Mage — sie bündelt fast ihren gesamten Schaden in einem 1-2-Sekunden-Fenster — mit aufgeschraubten Assassin-Tools: **Across the Veil (W)** ist ein Dash plus eine kurze Stealth, und **Between Worlds (R)** ist sowohl ein Engage-Sprung (eine Möglichkeit, einen Fight zu starten, indem du als Erste reinspringst) als auch eine Repositioning-Zone. Ihr Kit belohnt das Lesen des Gegners: lande **Twofold Hex (Q)** auf Distanz, geh nach vorne, um die Recast aufzustellen, und springe mit **W** rein, sobald der Pull-back der Verfluchung passt. Ihre Passive heilt sie jedes Mal, wenn die durch ihre Fähigkeiten beschworenen Geister sie erreichen, was ihr ein **Sustain** in Lane gibt (die Fähigkeit, während der Lane-Phase HP zurückzubekommen, ohne in die Base zu müssen), das die meisten **squishy** Mid-Laner — Champions mit niedrigen HP und hohem Schaden, wie Lux oder Ahri — nicht haben.

Ihr Game Plan ist es, kurze **Trades** zu gewinnen (kleine Scharmützel, in denen zwei Champions ein paar Treffer austauschen) mit **Q** plus Auto-Attacks, während sie auf das **All-in**-Fenster lauert — der Moment, in dem sie sich auf einen Full Kill committet — sobald **W** wieder bereit ist. **W** hat zudem einen **Takedown**-Reset (jede Kill oder Assist erstattet den Cooldown), also gibt ihr ein sauberer Kill in Lane einen zweiten Sprung als Exit, und in Teamfights kann sie damit vom ersten erlegten Squishy zum nächsten Ziel auf der **Back Line** ketten (die Carries, die hinter den Tanks positioniert sind).

## Empfohlener Build

**Starter-Items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** (etwas AP — Ability Power, der Stat, der magischen Schaden boostet — plus Mana-Regeneration) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Auroras Passive heilt sie ohnehin; Doran's Ring deckt das frühe Mana, das sie braucht, um **Q** dauerhaft als **Poke** einzusetzen (Schaden auf Distanz, um die HP des Gegners zu schmälern, ohne sich auf einen Fight einzulassen).

**Core-Items (in dieser Reihenfolge):**

1. ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — Auroras erster **Spike** (der Moment, an dem ein Champion deutlich stärker wird, meist durch das Fertigstellen eines Items). Wenn sie einen schon angeschlagenen Champion trifft, **proct** Stormsurges Passive (Proc beschreibt das Auslösen eines Bonus-Effekts) und gibt Bonus-Schaden plus Movement Speed — genau das, was sie braucht, um W rein in Q-Recast zu ketten.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flache **Magic Penetration** (reduziert die Magic Resist des Gegners, also schlagen deine Spells härter ein), vor allem wertvoll gegen squishy Ziele.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — die HP-Schwellen-Passive (zusätzlicher magischer Schaden, wenn das Ziel unter ~35% HP ist) deckt sich exakt mit dem Burst der Q-Recast, die mehr Schaden gegen Ziele mit fehlenden HP macht.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — Late-Game-**Scaling**-Item (multipliziert das AP aller anderen Items in der Build, wird also stärker, je mehr AP du bereits hast). Mit Deathcap online kann die Q-Recast einen Squishy in einer einzigen Combo one-shotten, bevor er reagiert.

**Situational Items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — gegen mobile Assassinen (Zed, Fizz, Akali). Die Aktive gibt **Stasis** (2,5 Sekunden, in denen du keinen Schaden nimmst, dich aber auch nicht bewegen oder casten kannst). Nutze sie in dem Fenster, in dem **W** auf Cooldown ist.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — Magic Resist plus ein passiver Schild, der die nächste gegnerische Fähigkeit blockt. Bau ihn gegen magisches Single-Target-**CC** (CC steht für Crowd Control: Stuns, Roots, Slows, die dich aus deinem Kit aussperren), das deinen Engage unterbricht — Annie Stun, Lissandra R, Twisted Fate Gold Card.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — prozentuale Magic Penetration. Bau ihn, sobald ein Priority-Target Magic Resist hochfährt (über 60 MR).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — verteilt Grievous Wounds und schneidet die Heilung des Gegners. Bau ihn gegen Compositions mit viel Healing (Soraka mid, Vladimir, Dr. Mundo top, Yuumi).

**Schuhe:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** sind Default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** sind okay, wenn das Team mehr **R**-Uptime für Engage braucht.

**Skill Order:** Setze die meisten Punkte zuerst in **Q** (ihr Hauptschaden und der Trigger des Recast-Bursts), dann in **E** (clearet Minion-Wellen und der Backward-Hop ist ein freies **Disengage** — der Disengage ist die Methode, einen laufenden Fight zu verlassen), **W** zuletzt. Ein Punkt in **R** auf Level 6, 11 und 16.

**Runen:** Primär **Domination** mit **Electrocute**, **Cheap Shot**, **Sixth Sense** und **Ultimate Hunter**. Sekundär **Sorcery** mit **Manaflow Band** und **Transcendence**. Electrocute proct nach drei schnellen Treffern auf demselben Ziel — genau das, was Aurora in jedem kurzen Trade mit Q-Auto-Q-Recast macht — und Ultimate Hunter verkürzt den Cooldown von **R** für einen zweiten Teamfight-Engage.

## Wichtige Matchups

- **Yasuo:** Wind Wall (Yasuos W — eine Wand aus Wind, die alle Projektile blockt, die sie kreuzen) frisst beide Hälften von **Q** (das ausgehende Projektil und den Pull-back der Recast). Halte **Q** zurück, bis er Wind Wall auf eine Minion-Welle setzt, dann rück nach und trade mit Auto-Attacks und **E**, während sein Wind Wall auf Cooldown ist.
- **Zed:** mobiler Assassin. Halte **W** defensiv für den Moment, in dem seine **R** landet; verbrenne sie nicht offensiv in Lane. Bau ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** als zweites Item, falls auch sein Jungler hard Engage hat.
- **Anivia:** immobil und anfällig für ein W-All-in, sobald ihre Wand unten ist. Lauf direkt nach ihrem Wandcast aggressiv über die Wandposition; die Wand hat einen langen Cooldown und auf Nahdistanz hat sie sonst kein Werkzeug, dich zu bedrohen.
- **Lux:** ausgeglichenes bis leicht favorisiertes Matchup. Ihre Q outranged dich, aber du gewinnst die kurzen Tausche dank **W** plus Auto-Attacks. Sidestepe ihre **E** während sie sie platziert (sie telegraphiert den Cast Point — eine sichtbare Cast-Animation läuft, bevor der Spell landet), dann rücke nach.
- **Twisted Fate:** Wettlauf um den ersten **Roam** (Roam heißt, deine Lane zu verlassen, um anderswo auf der Map Plays zu machen). Wenn er Gold Card auf dich pickt, **W** seitlich, bevor die Karte landet — der Dash bricht den Lock-on. Tracke seine **R** mit **Wards** (Totems, die für ein paar Minuten Sicht auf einen Bereich geben — sweepe die River-Eingänge und das Tri-Bush, das Gebüsch an der Kreuzung River-Mid); ulti er, ping mid-mia (das Standard-„Missing in Action"-Ping, das das Team warnt, dass dein Laner gerade weg ist) und roame selbst.

## Power Spikes & Siegbedingungen

- **Level 2:** Mit einem Punkt in **W** hast du plötzlich Mobility — das erste All-in-Fenster öffnet sich, wenn der Gegner unter ~70% HP ist. Geh nach vorne, **Q**, Auto-Attack, dann **W** hinter ihn und **Q**-Recast.
- **Level 6:** Die erste **R** schaltet das Cross-Zone-Repositioning frei, das es ihr erlaubt, sich auf 1v1s sogar unter gegnerischer Turret einzulassen, weil **R** ihr eine eingebaute Fluchtroute durch die Zone gibt.
- **![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) Stormsurge fertig (~Minute 12-14):** Auroras erster Assassin-Spike. Sie kann jetzt mit der vollen Combo einen Squishy mit voller HP solo-killen, und der **W**-Reset auf Takedown macht einen zweiten Kill im selben Teamfight realistisch.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~Minute 24-28):** die Q-Recast auf fehlende HP fängt an, jedes Ziel zu one-shotten, das kein Magic-Resist-Item gekauft hat. Erzwinge Fights um Objectives (Drake, Baron, Herald, Voidgrub-Spawns), sobald das steht.

## Häufige Fehler

- **W beim Reinspringen verbrennen, statt sie für den Reset zu sparen.** **W** resettet auf Takedowns. Wenn du **W** zum Engagen committest, finishe den Kill im selben Fenster, damit der Reset dir den Exit gibt. Ist der Kill nicht garantiert, halte **W** und nutze stattdessen den Backward-Hop von **E** zum Disengage.
- **Vergessen, Q zu recasten.** **Twofold Hex** macht einen Auto-Recast, wenn die Dauer ausläuft, aber der manuelle Recast lässt dich den Winkel des Pull-backs wählen. Zwei Schritte vor dem Recast nach vorne ziehen den zweiten Treffer durch mehr Gegner für **AOE**-Schaden (Area-of-Effect — Schaden, der mehrere Gegner in einer Zone trifft, nicht nur ein Ziel).
- **In der eigenen R-Zone stehen bleiben, nachdem der Slow abgelaufen ist.** **Between Worlds** schließt dich optisch in einem markierten Bereich ein; sobald der Eintritts-/Austritts-Slow abgelaufen ist, ist die Zone nur noch ein Schild, auf dem „Hier kollabieren" steht. Hüpfe über die Grenze, sobald der Kill gesichert ist.
- **AP stapeln ohne Magic Penetration.** ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** vor ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** oder ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** zu kaufen, kostet dich Schaden gegen jeden mit auch nur Basis-MR. Penetration zuerst, rohes AP danach.
- **R zum Engagen nutzen, wenn das Team nicht nachzieht.** **R** ist ein Long-Cooldown-Commitment — sie für nichts zu verbrennen, weil dein Team gerade eine Side Wave geclearet hat, ist der häufigste **Throw** (eine gewonnene Position durch ein leichtsinniges Commitment wegwerfen). Pinge den Engage drei Sekunden vor dem Cast, damit das Team Zeit hat, sich in die richtige Richtung zu drehen.

## Fortgeschrittener Tipp

Nutze die Realm-Hop-Grenze von **R** als **Kite**-Tool — Kiten heißt, Schaden zu machen, während du dich zurückbewegst, damit der Gegner die Distanz nicht schließen kann — und nicht nur als Engage. Caste **R** hinter einen flüchtenden Gegner, damit die Slow-Zone ihm die Fluchtlinie schließt, und hüpfe dann durch das Gebiet, um ihm den Winkel zu nehmen. Der Slow auf Eintritt und Austritt sorgt dafür, dass der einzig sichere Weg aus dem Bereich der lange Umweg ist — meist lang genug, damit du eine **Q** plus Auto-Attack landest und den Kill finishst.
