---
title: "Annie Mid Build & Guide — Patch 16.9"
slug: "annie-mid"
language: "de"
patch: "16.9"
champion: "annie"
role: "mid"
last_updated: "2026-04-29"
description: "Annie Mid Lane Guide für League of Legends Patch 16.9: Pyromania-Stun-Setup, Burst-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Profi-Tipp."
quick_learn:
  champion_dd_id: "Annie"
  difficulty: 1
  damage_type: "magic"
  champion_class: "Mage / Burst"
  abilities:
    - key: "P"
      name: "Pyromania"
      description: "Jeder 4. gewirkte Zauber lädt Pyromania: der nächste Schadenszauber stunt das Ziel. Annie startet und respawnt mit fertigem Stun — lade den Zähler an Minions vor jedem All-in auf."
      dd_spell_id: "Annie_Passive"
    - key: "Q"
      name: "Disintegrate"
      description: "Point-and-click Feuerball mit 625 Reichweite. Erstattet Mana und 50% Cooldown beim Kill — günstigstes Poke- und Last-Hit-Werkzeug im Kit."
      dd_spell_id: "AnnieQ"
    - key: "W"
      name: "Incinerate"
      description: "Feuerkegel mit 600 Reichweite. Hauptwerkzeug fürs Waveclear (räumt eine ganze Caster-Minion-Reihe in einem Cast) und Zauber mit dem höchsten Basisschaden auf Rang 5."
      dd_spell_id: "AnnieW"
    - key: "E"
      name: "Molten Shield"
      description: "Zielgerichteter Schild + abklingendes Movement Speed auf Annie oder einen Verbündeten. Gibt magischen Schaden an den nächsten Angreifer zurück. Zählt als Spell Cast — perfekt zum Aufladen von Pyromania vor dem Engage."
      dd_spell_id: "AnnieE"
    - key: "R"
      name: "Summon: Tibbers"
      description: "Point-blank AOE-Schaden mit 600 Reichweite, der Tibbers beschwört, einen Bären, der Gegner in der Nähe auto-attackt und verbrennt. Der Cast selbst zählt als Zauber, also stunt eine 4-Stack-Pyromania-R alle Getroffenen."
      dd_spell_id: "AnnieR"
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
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "gegen mobile Assassinen und Diver (Zed, Diana, Talon, Akali) — die Stasis rettet dich nach dem R + Flash"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "gegen Kite-lastige Comps ohne Hard-CC — der Slow auf R + W hält Ziele in Tibbers' Aura fest"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "gegen magisches Single-Target-CC (Lissandra R, Twisted Fate Stun, Ahri Charm)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap, sobald ein Priority-Target ein Magic-Resist-Item baut"
  base_combo: ["Q", "W", "E", "AA", "R"]
  win_condition: "Lade Pyromania an Minions auf 4 Stacks, lauf mit Flash + R für einen point-blank AOE-Stun auf gruppierte Gegner und burste die squishy Backline mit Luden's Companion + Shadowflame."
  weakness: "Keine Grundmobility, Spell-Range 600-625. Wird von Artillery Mages out-poked und von Assassinen umgangen, die durch die R-Reichweite dashen, bevor der Stun landet."
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
    - examples: ["veigar", "cassiopeia", "anivia", "karthus"]
      archetype: "Immobile Mages ohne Dash"
      reason: "Annies R ist ein point-blank AOE-Stun mit 600 Reichweite plus Tibbers-DPS. Mages ohne Dash oder Stealth fressen das volle Combo im Level-6-All-in und können nicht rechtzeitig reagieren."
    - examples: ["diana", "katarina"]
      archetype: "Telegrafierter Melee-Burst mit langsamem Tell"
      reason: "Annie pre-stackt Pyromania beim Waveclear: in dem Moment, in dem sie zum Gap-Close committen, unterbricht der Flash + R Stun ihr Combo, bevor der Schaden landet."
    - examples: ["fizz", "kassadin"]
      archetype: "Melee Mages, schwach vor Level 6"
      reason: "Beide müssen pre-6 in die Q-Reichweite laufen, um zu farmen: Annie poked sie frei, hält Level 2 mit gestacktem Pyromania und zwingt sie zum Back ohne Counter-Engage."
  counterpicks:
    - examples: ["xerath", "vel-koz", "lux"]
      archetype: "Long-Range Artillery Mages"
      reason: "Sie poken Annie aus 850-1400 Reichweite, während sie auf 625 sitzt. Sie hat keinen Dash und keinen Shield gegen Range-Poke und blutet jede Wave HP ohne Option für ein Counter-All-in."
    - examples: ["zed", "akali", "yasuo"]
      archetype: "Hochmobile Assassinen post-6"
      reason: "Ihre Dashes oder Stealth-Windows verlassen den 600-Radius der R, bevor der Stun landet. Akalis Shroud und Yasuos Wind Wall fressen direkt ihre Hauptzauber."
    - examples: ["twisted-fate", "galio"]
      archetype: "Globale / Cross-Map-Roamer"
      reason: "Annie hat keine Roam-Reichweite — sie clearet Waves und bleibt in Mid. Ihre Ult flippt Side-Lanes und Drakes, also verliert Annie das Macro-Game selbst, wenn sie das 1v1 gewinnt."
---

## Überblick

Annie ist der einfachste Burst Mage im Spiel (ein Champion, der hohen magischen Schaden auf 1-2 Sekunden konzentriert und dann auf Cooldowns wartet) und einer der stärksten beim Bestrafen von Fehlern rund um Level 6. Ihr Kit wirkt auf dem Papier minimal — eine point-and-click Q, ein W-Kegel, ein Selbst- oder Allied-Schild und eine Beschwörungs-Ult — aber ihre Passive **Pyromania** klebt alles zusammen: jeder 4. gewirkte Zauber lädt einen garantierten Stun auf das nächste getroffene Ziel. Diese eine Mechanik macht aus einem anfängerfreundlichen Champion eine Stun-garantierte Bedrohung, die eine squishy Backline (die Carrys, die hinter ihrem Team in einem Fight positioniert sind) mit einem Knopfdruck löschen kann, sobald Tibbers draußen ist.

Ihr Game Plan ist in Lane und in Teamfights derselbe: lade **Pyromania** an Minions auf 4 Stacks auf, lauf auf 600 Reichweite und löse den Counter mit **R** (Tibbers) auf das wertvollste Ziel aus, dann **W** und **Q**. Zwei Entscheidungen trennen eine gute Annie von einer großartigen: zu wissen, **wann man den Counter bereithält** (nicht auf einem Minion verbrennen kurz bevor du dich zum Fight committest — also voll engagest) und **wie man R landet** (Flash + R ist eines der zuverlässigsten Engage-Tools — Abilities, die einen Teamfight starten — im Spiel auf ein gruppiertes Team).

## Empfohlener Build

**Starter-Items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** (gibt extra Mana, damit Annie Q und W früh weiterspammen kann) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions** (regenerieren HP über Zeit in Lane). Der Ring befeuert ihre Eröffnungs-Trades; die Potions tragen sie durch den Poke (long-range Chip-Schaden vom gegnerischen Mage).

**Core-Items (in Reihenfolge):**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — First-Item Burst-Spike (ein "Power Spike" ist der Moment, in dem ein Champion durch Level-up oder Item-Completion deutlich stärker wird). Annies Combo ist kurz, also passt der Bonusschaden auf den ersten Spell-Hit perfekt zu **R + W** auf ein gestuntes Ziel.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flache Magic Penetration Boots. Deine Kills kommen von squishy Zielen mit niedrigem Magic Resist, und flache Pen scaled an dieser Stelle besser als prozentuale.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — extra Burst mit HP-Threshold-Passive (Bonus-Magic-Schaden, wenn der Gegner unter ~35% HP ist). Günstiger Finisher, der Annies R + W von "fast tödlich" zu One-Shot macht.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — Late-Game-Multiplikator (+30% gesamtes AP, wobei AP / Ability Power die Stat ist, die jeden Annie-Zauber scaled). Wenn das online geht, löscht Annies R-Combo gruppierte Gegner, nicht nur einzelne Squishys.

**Situative Items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — gegen mobile Assassinen und Diver (Zed, Diana, Talon, Akali). Nach dem R + Flash Engage aktiviere Stasis (die Active, die dich für 2.5 Sekunden unverwundbar macht): du überlebst, während dein Team folgt.
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — gegen kite-lastige Comps ohne Hard-CC (Squads, die rückwärts laufen, während sie attacken, um Distanz zu halten). Der Slow auf R + W heftet Ziele in Tibbers' brennender Aura fest.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — gegen magisches Single-Target-CC (Lissandra R, Twisted Fate Stun, Ahri Charm). Der Schild blockt den Engage-Spell, damit du dein **Flash** offensiv behältst.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — bau ihn ein, sobald ein Priority-Target ein Magic-Resist-Item fertigstellt.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** ist Default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** sind eine Alternative, wenn das Team mehr **R**-Uptime als Teamfight-Starter braucht.

**Skill-Order:** Maxe **Q** zuerst (niedrigster Cooldown, Mana-Refund auf Kill, dein primäres Trade-Werkzeug — kurzer Schadensaustausch in Lane). Maxe **W** als zweites (Waveclear, das Räumen der gegnerischen Minion-Wave; W hat den höchsten Basisschaden auf Rang 5). Maxe **E** zuletzt (Utility, scaled wenig mit Rang). Punkt in **R** auf Level 6, 11, 16.

**Runen:** Primärbaum **Sorcery** (der Magic-Damage-Baum) mit **Arcane Comet** (extra magisches Schadensprojektil bei Champion-Hit), **Manaflow Band** (dein Max-Mana wächst bei Spell-Hits), **Transcendence** (Cooldown Reduction auf Level 5, 8, 11), **Scorch** (extra Burn-Schaden auf den nächsten Spell alle ~10 Sekunden). Sekundär **Inspiration** mit **Biscuit Delivery** (kostenlose Mana/HP-Biscuits in Lane) und **Cosmic Insight** (mehr **Flash**- und **R**-Uptime im Mid-Game).

## Wichtige Matchups

- **Yasuo / Yone:** Sie Wind-Wall'n deine **Q** und **W** (die Wand, die Projektile blockt). Bait die Wind Wall mit einer Low-Stack **Q** (1-2 Pyromania-Stacks, Stun nicht bereit), lauf dann mit vollen Stacks rein, sobald die Wand auf Cooldown ist — die Downtime ist lang, sie können nicht gleichzeitig deine **Q** und deinen Engage abhalten.
- **Lux:** Out-ranged dich auf 1100 mit ihrer **Q**. Jag ihr nicht hinterher; clear Waves auf sicherer Distanz mit **W**, such nach Roam (Lane verlassen, um Verbündeten woanders zu helfen), sobald du ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** fertig hast, und lass deinen Jungler ihren fehlenden Escape mit einem Counter-Gank bestrafen.
- **Veigar:** Vorteilhaft. Er muss seine **Q** an Minions stacken, um AP zu kriegen, und hat keinen Dash; pre-stack Pyromania, lauf auf Level 6 mit **Flash + R** rein, und du stunst ihn aus seinem **E**-Käfig heraus, bevor er dich locken kann.
- **Twisted Fate:** Wettrennen, wer zuerst roamt (Lane verlässt, um Verbündeten in einer anderen Lane zu helfen). Push Waves mit **W** auf Cooldown. Wenn seine **R** up ist, ping mid mia (missing in action: dem Team signalisieren, dass er weg ist) und rotiere (mit der Wave mitgehen) zur Side-Lane, die er angreift, mit deiner eigenen Ult bereit — ein 2v2-Fight bei voller Pyromania ist ein garantierter Kill.
- **Diana:** Pre-6 ist sie aus Glas (niedrige Defenses, stirbt schnell); harasse sie mit point-and-click **Q** jedes Mal, wenn sie für Last-Hits vorrückt. Auf 6 halt volle Pyromania-Stacks: wenn sie dich mit **R** anpullt, stunnt dein **R + W** sie, bevor sie für den zweiten Sprung recasten kann.

## Power Spikes & Siegbedingungen

- **Level 2:** Mit **Q** + **W** auf der Bar plus bereitem Pyromania hast du ein kurzes All-in (volle Commitment ohne Disengage-Möglichkeit), das die meisten Ranged Mages schlägt, die den Level-2-Stun nicht erwarten. Wenn der Gegner für ein cs (Creep Score: ein Minion last-hitten für Gold) vorrückt, sobald ihr beide Level 2 erreicht, geh nach vorne und trade.
- **Level 6 + Flash:** Die erste **R** mit **Flash** ist dein größter Single-Fight-Power-Spike der Partie. Ein Fight auf einer gruppierten Wave ist ein freier Doppelkill, wenn der gegnerische Jungler quer über die Map ist.
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion fertig (~ Minute 11-13):** Die Burst-Schwelle kippt. Dein **R + W + Q** Combo auf einen gestunten Squishy ist jetzt tödlich ohne Follow-up vom Team.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ Minute 24-28):** Tibbers' Aura-Schaden plus die AOE auf dem Cast werden zu einem Teamfight-Nuke (ein Cast, der mehrere Ziele auf einmal auslöscht); erzwing hier Objective-Fights und such **Flash + R** auf 3+ gruppierte Ziele.

## Häufige Fehler

- **Den 4. Pyromania-Stack auf einem Minion verbrennen, kurz bevor du All-in gehst.** Check immer den Stack-Counter unter deinem Portrait, bevor du in Trade-Range läufst. Wenn er auf 3 ist und du **W** für Waveclear castest, hast du gerade deinen garantierten Stun an einen Caster-Minion verschenkt.
- **R ohne bereites Pyromania casten.** **R** ohne Stun macht Schaden, lässt das Ziel aber aus Tibbers' Aura herauslaufen. Wenn Pyromania nicht geladen ist, lade es mit **E** auf dich selbst nach, bevor du committest.
- **Auf maximaler R-Reichweite stehen während des Casts.** **R** hat 600 Reichweite, dasselbe wie Annies Auto-Attack. Nutze **Flash**, um die letzten 200-400 Einheiten auf ein gruppiertes Team zu schließen, statt vom Rand zu casten — am Rand wird nur der nächste Gegner gestunt und die anderen laufen raus.
- **![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes für ein flat-AP-Item überspringen.** Annies Burst tötet nur, wenn MR niedrig ist; mehr AP ohne flache Magic Penetration zu rushen lässt Squishys auf 50 HP statt 0 stehen und macht aus garantierten Kills Verfolgungsjagden.
- **Q-spammen, ohne aufs Mana zu schauen.** **Q** erstattet ihr Mana **nur auf Kill**. Wenn du einen 200-HP-Minion mit Q triffst und er nicht stirbt, hast du 60-80 Mana umsonst gezahlt. Nutze **Q** auf fast-execute-Minions oder Champions, nicht als Poke, wenn sie auf Full HP sind und ein Creep dazwischen steht.

## Fortgeschrittener Tipp

Übe den **Flash + R Animation Cancel** (ein Trick, der **Flash** während des Cast-Frames nutzt, statt zu warten, bis der Cast fertig ist): in dem Moment, in dem du **R** drückst, drück **Flash** in dieselbe Richtung (der Input wird mid-cast gebuffert). Der Cast Point von **R** ist kurz genug, dass **Flash** dich auf das Ziel repositioniert, bevor die AOE auflöst — du kannst eine Backline auf 800 Range stunnen, als wärst du von Anfang an auf 600. Die meisten Anfänger lernen das Combo als "drück **R**, dann reagier auf wo es landet"; der Animation Cancel macht daraus einen 700-Einheiten-Gap-Close (ein plötzlicher Kurzdistanz-Teleport), der fast unmöglich zu dodgen ist.
