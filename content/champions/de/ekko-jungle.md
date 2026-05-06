---
title: "Ekko Jungle Build & Guide — Patch 16.9"
slug: "ekko-jungle"
language: "de"
patch: "16.9"
champion: "ekko"
role: "jungle"
last_updated: "2026-04-29"
description: "Ekko Jungle Guide für League of Legends Patch 16.9: Clear-Path, AP-Assassin-Build, Gank-Patterns, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Ekko"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Assassin / AP Burst"
  abilities:
    - key: "P"
      name: "Z-Drive Resonance"
      description: "Jeder dritte Treffer (Auto-Attack oder Spell) auf dasselbe Ziel verursacht magischen Bonusschaden und gibt Ekko einen kurzen Move-Speed-Burst, falls das Ziel ein Champion ist."
      dd_spell_id: "Ekko_Passive"
    - key: "Q"
      name: "Timewinder"
      description: "Bumerang-Skillshot: eine Granate fliegt raus, slowt getroffene Gegner und kehrt mit zweitem Damage-Tick zu Ekko zurück. Beide Durchgänge treffen — Positioning zählt."
      dd_spell_id: "EkkoQ"
    - key: "W"
      name: "Parallel Convergence"
      description: "Passiv: Bonus-Magieschaden auf Autos gegen Gegner mit niedrigem HP. Aktiv: platziert einen verzögerten Kreis, der slowt und kurz stunt, wenn Ekko hineinläuft."
      dd_spell_id: "EkkoW"
    - key: "E"
      name: "Phase Dive"
      description: "Kurzer Dash, der die nächste Auto empowert und Ekko per Teleport zur Zielperson mit Bonusschaden bringt. Haupt-Gap-Closer und Trigger des dritten Passive-Hits."
      dd_spell_id: "EkkoE"
    - key: "R"
      name: "Chronobreak"
      description: "Spult Ekkos Position auf den Standort von ~4 Sekunden vorher zurück, verursacht beim Auftauchen Flächenmagieschaden und heilt basierend auf erlittenem Schaden in dem Fenster."
      dd_spell_id: "EkkoR"
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3100", name: "Lich Bane" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "gegen schweren AD-Burst (Zed, Talon, Kha'Zix, Rengar) — Stasis killt deren Kill-Window nach R-Reposition"
    - dd_id: "3135"
      name: "Void Staff"
      against: "sobald ein Priority-Target ein MR-Item kauft (Maw, Mercury's Treads, Spectre's Cowl)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "gegen Heal-Comps (Soraka, Aatrox, Dr. Mundo, Vladimir) — Grievous Wounds bei Schaden"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "gegen mobile Carrys (Vayne, Ezreal, Tristana) — Slow auf jedem Hit, Q + E sticken trivial"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "Late-Game vs MR-stackende Frontline — Magic Pen plus kleiner Revive-Heal auf Takedown"
  base_combo: ["W", "E", "AA", "Q", "R"]
  win_condition: "Lande W-Stuns aus dem Fog, dash mit E rein und resette Fights mit R bei niedrigem HP. Snowball Early-bis-Mid-Game mit Pre-6-Ganks und Skirmishes um Objectives."
  weakness: "Schwacher First Clear und kurze Range — ein starker Invade-Jungler bestraft ihn auf Level 3. R hat langen Cooldown — sobald down, fehlt Ekko der Panic Button."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
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
    - examples: ["karthus", "kindred", "nidalee"]
      archetype: "Squishy Ranged-Jungler ohne Point-and-Click-CC"
      reason: "Ekkos W + E Setup schließt die Distanz, bevor sie eine Kite-Rotation beenden; das R-Reset macht den All-in safe, selbst wenn ihr Team rotiert um zu helfen."
    - examples: ["master-yi", "shyvana"]
      archetype: "Scaling-Skirmisher mit schwachem Early"
      reason: "Pre-6-Ganks auf Level 3 mit W + E + Q schnappen sie beim Camp-Farmen; eine einzige Kill baut den Gold-Lead, um Carrys bis Minute 14 zu assassinieren."
    - examples: ["amumu", "zac"]
      archetype: "Tank-Engage-Jungler ohne Dash"
      reason: "Ekkos Mobility (E + R Rewind) dodged ihren telegrafierten Engage, und sein AP-Burst trifft am härtesten gegen Low-MR-Tanks. Er kited sie um Ecken und burst ihre Carrys aus dem Fog."
  counterpicks:
    - examples: ["lee-sin", "elise", "xin-zhao"]
      archetype: "Starke Early-Invade-Jungler"
      reason: "Ekkos First Clear ist unterdurchschnittlich und sein Level-3-Duel ist schwach. Sie laufen in seine Jungle, killen ihn bevor W und E maxed sind, und snowballen durch die Bounty."
    - examples: ["nocturne"]
      archetype: "Jungler mit globaler Pressure und Spell Shield"
      reason: "Nocturnes E ist ein Spell Shield, der den Stun von Ekkos W blockt (= die Ability, die jeden Gank setupt). Ohne Stun scheitert der Gank, und Nocturnes R outranged Ekkos Counter-Gank-Tools."
    - examples: ["galio", "maokai"]
      archetype: "Tanks, die früh Magic Resist stacken"
      reason: "Jungler, die früh MR stacken, schwächen Ekkos Mid-Game-Spike: wenn das Lich-Bane-Combo nur chip-damaged statt one-shottet, stagniert sein Snowball-Plan."
---

## Überblick

Ekko ist ein AP-Assassin (AP = Ability Power, der Stat, der Magieschaden skaliert) Jungler, der squishy Carrys mit einem schnellen Combo aus W-Stun → E-Dash → AA + Q one-shottet. Seine Passive **Z-Drive Resonance** belohnt eine Sequenz von drei Hits auf dasselbe Ziel mit Bonus-Magieschaden und einem Move-Speed-Burst — seine Damage-Rotation ist darauf gebaut, drei Sachen schnell zu landen, nicht Spells zu spammen. Sein **Chronobreak (R)** ist das Sicherheitsnetz: er teleportiert ihn an die Position, wo er ~4 Sekunden vorher stand, und heilt basierend auf erlittenem Schaden in dem Fenster — also kann er in einen Fight rein, Risiken eingehen und die Konsequenz rückgängig machen, wenn er den Channel überlebt.

Game Plan: sauberer First Clear der Jungle-Camps, Level-3-Gank auf eine Lane mit niedriger Mobility (Lux, Senna, Veigar, immobile Mid Laner), Scuttle (= der River-Krebs — kill ihn für Vision und einen kleinen Move-Speed-Buff im River) auf der Seite forcen, wo dein Team Prio hat (= Priority, dein Laner pusht und kann rotieren ohne CS zu verlieren), und Snowball (= einen kleinen Early-Lead in einen viel größeren verwandeln) in Mid-Game-Skirmishes (= kleine 1v1- oder 2v2-Fights, kein voller Teamfight) um den zweiten Drake. Ekko ist kein Scaling-Champion (Scaling = wird stärker, je länger das Spiel dauert) — wenn du Minute 25 ohne Kills erreichst, schließt der gegnerische ADC 2 Items ab, und du one-shottest niemanden mehr.

## Empfohlener Build

**Starter-Items:** ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** (das AP-friendly Jungle-Pet — applied On-Hit-Schaden auf gegnerische Champions während Ganks) plus **Smite** (die Summoner Spell, die jeder Jungler nimmt — eine schnelle Burst-Attacke auf ein einzelnes Ziel, genutzt zum schnelleren Camp-Clearen und um Objectives wie Drake oder Baron dem Gegnerteam zu klauen).

**Core-Items (in Reihenfolge):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — erster AP-Spike. Bonus-On-Cast-Damage und Mana-Sustain bedeuten, dass deine Q + W + E Rotation die Zielperson knackt, bevor die E-Auto überhaupt landet.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flache Magic Penetration (= ignoriert einen Teil der gegnerischen Magic Resist). Squishy Carrys haben ~30 MR Base, also wird die flache Pen zu reinem Extra-Schaden.
3. ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** — Spellblade (= die nächste Auto nach einem Spell verursacht massiven Bonus-Magieschaden). Ekkos E empowert bereits die nächste Auto, also stackt Lich Bane obendrauf: das ist das Item, das den E-Dash zum One-Shot macht.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — extra Burst (= viel Schaden in 1-2 Sekunden). Die HP-Schwellen-Passive (= Passive, die unter einer bestimmten HP-Grenze aktiv wird) passt mit den R-Reset-Finishern zusammen.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — Late-Game-AP-Multiplikator und der Slot mit dem höchsten Ceiling im Build.

**Situative Items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — gegen AD-Assassinen (Zed, Talon, Kha'Zix, Rengar). Die Stasis (= Ekko wird unverwundbar, kann aber 2.5 Sekunden lang nichts tun) kauft Zeit für Cooldowns und lässt dich, gepaart mit R, jeden AD-All-in überleben.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — sobald ein Priority-Target Magic Resist baut (Mercury's Treads, Maw of Malmortius, Spectre's Cowl). Prozentuale Magic Pen skaliert damit, wie viel MR das Ziel stackt.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — gegen Heal-Comps (Soraka, Aatrox, Dr. Mundo, Vladimir). Applied Grievous Wounds (= ein Debuff, der das Heal des Ziels halbiert) bei Schaden.
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — gegen mobile Ranged Carrys (Vayne, Ezreal, Tristana). Jeder Spell-Hit applied einen Slow, also kleben Q + E sie für die Kill an Ort.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — Late-Game-Ersatz für Shadowflame gegen MR-stackende Frontlines. Magic Pen plus kleiner Revive-Heal auf Takedowns.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** ist Default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** sind okay, wenn das Team mehr R-Uptime als Re-Engage-Tool braucht (= deine Ult kommt schneller wieder und lässt dich einen zweiten Teamfight flippen).

**Skill-Order:** Maxe **Q** zuerst (Waveclear und Haupt-Poke-Schaden), **E** als zweites (Dash-Damage), **W** zuletzt. Punkt in **R** auf Level 6, 11, 16. Starte mit **Q** auf Level 1 für den safesten First Clear, dann **E** auf 2 und **W** auf 3.

**Runen:** Primärbaum **Domination** (der Assassin-Tree — Stat-Boni, die das Picken von einzelnen Zielen belohnen) mit **Electrocute** (nach drei separaten Damage-Quellen auf einem Champion innerhalb von 3 Sekunden gibt der nächste Hit Bonus-Burst-Schaden — Ekkos W + E + Q chained das perfekt), **Sudden Impact** (extra Magic Pen für 4 Sekunden nach einem Dash oder Stealth), **Sixth Sense** (zeigt automatisch nahe gegnerische Wards mit langem Cooldown — Vision-Pressure für Jungle-Pathing), **Ultimate Hunter** (reduziert R-Cooldown pro einzigartigem Champion-Takedown). Sekundär **Sorcery** mit **Manaflow Band** (Mana-Refund auf Poke-Spell-Hits, fixt Ekkos kleine Mana-Pool) und **Transcendence** (Ability Haste — deine Spells kommen schneller wieder — was das gesamte Kit skaliert).

## Wichtige Matchups

- **Lee Sin:** Starker Early Invade (= ein Jungler, der in deine Jungle läuft, um dich vor Items zu killen). Tracke ihn mit Vision auf deinen Buffs (= die kleinen Camps, die einen temporären Stat-Bonus geben, Blue und Red). Vermeide Fights vor Level 4 — sein Early Duel ist besser als deins.
- **Karthus:** Free Matchup. Sein R verursacht Schaden auf dein gesamtes Team über die Map, aber er hat null Mobility — W unter seine Füße, E rein, Q + AA und er stirbt in einer Rotation (= eine vollständige Sequenz deiner Abilities). Counter-Jungle (= klau seine Jungle-Camps) nach jedem Gank, den er commitet.
- **Master Yi:** Scaling-Rivale. Kill ihn vor Minute 20 oder akzeptiere, dass er dich im späten Teamfight outdamaged. Force Fights auf den ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** + ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** Spike und dive seine Bot Lane, während er Camps farmt.
- **Sejuani:** Hartes Matchup. Ihr R ist Point-and-Click (= kein Aimen nötig, der Spell lockt einfach auf ein Ziel) und friert dich während deines E-Dashs ein. Warte, bis sie es auf jemand anderen nutzt, dann commit. Kauf ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** früher als üblich.
- **Rammus:** Vermeide Solo-Fights. Seine Dornen-Passive reflektiert einen Teil deiner Auto-Attack-Damage; du machst meistens Magieschaden (gut gegen Rammus' Dornen), aber sein W-Steroid (= ein temporärer Armor- und Reflect-Multiplikator) blunted trotzdem deine Lich-Bane-Auto. Farm die Gegenseite der Jungle und gruppe nur mit deinem Team.

## Power Spikes & Siegbedingungen

Ein Power Spike ist der Moment, in dem der Champion plötzlich viel stärker wird als eine Minute vorher — meistens, wenn eine neue Ability oder ein Item online geht.

- **Level 3:** Erstes **W** + **E** + **Q** Combo unlocked. Du kannst endlich Lanes pre-6 ganken (= bevor deine Ult online ist) — drop W im Fog (= dunkler Bereich außerhalb der Vision, hinter einem Busch oder einer Wand), warte bis der Gegner draufläuft für den Stun, dash mit E rein, Q im Rauslaufen. Das ist Ekkos stärkstes Pre-6-Gank-Pattern.
- **Level 6:** **Chronobreak (R)** online. Jetzt ist jeder Dive (Dive = unter Tower laufen, um ein Low-HP-Ziel zu killen) reversibel: du nimmst Tower-Shots, killst das Ziel, R zurück in Sicherheit. Force sofort einen Fight oder Drake.
- **![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Echo + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ Minute 10-12):** Erster echter Damage-Spike. Du chunkst Squishys mit Q allein und one-shottest Gegner unter 60% HP mit dem vollen Combo. Such Picks (Pick = einen einzelnen isolierten Gegner aus der Position killen) auf den Side-Lanes.
- **![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) Lich Bane fertig (~ Minute 16-18):** Das ist DER Spike. Die empowered E-Auto plus Lich Bane Spellblade trifft jetzt für ~50% der HP eines ADCs aus einem einzelnen Dash. Group um Drake und Baron — jeder isolierte Gegner stirbt in einem Combo.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ Minute 24-28):** Selbst MR-stackende Ziele falten unter dem vollen Burst. Wenn der gegnerische ADC weder ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) noch Quicksilver Sash gekauft hat, ist dein R-Reset eine Free-Kill auf die Backline.

## Häufige Fehler

- **Lanes pre-3 ganken ohne W-Placement.** Ekkos Gank ohne W-Stun ist nur ein langsamer E-Dash — leicht zu kiten (Kite = rückwärts laufen während du angreifst, Distanz halten). Säe immer W im Fog 2 Sekunden vor dem Walk-up: der verzögerte Stun erwischt den Gegner, wenn er auf den Dash reagiert.
- **R drücken, sobald HP fallen.** Chronobreak rewindet dich auf eine 4 Sekunden alte Position. Wenn du beim ersten Auto ultst, R'st du zurück in den Fight, dem du entkommen wolltest. Warte — soak Damage während des R-Channels (= die Vorbereitungszeit, bevor er aktiviert wird), damit der Heal am Ende größer ist und das Ziel wirklich safer.
- **Q für Waveclear in der Jungle spammen.** Q's Mana-Kosten sind hoch und der Bumerang-Return ist der größere Damage-Tick. Lauf am Camp vorbei, damit der Return das volle Pack zweimal trifft; ein stationärer Q-Spam verschwendet den zweiten Hit.
- **Drake forcen ohne Prio.** Ekkos Smite-Fight (= der Moment, wenn beide Jungler Smite auf ein umkämpftes Objective committen) ist mittelmäßig, weil sein R cancelt, wenn er mitten im Channel unterbrochen wird. Wenn deine Laner keine Prio haben (= gepushte Lane, frei zum Rotieren), gib den Drake auf und farm Vision.
- **Den Third-Hit-Passive in Skirmishes ignorieren.** Z-Drive Resonance verdoppelt deinen Trade-Damage, wenn du drei Hits auf demselben Ziel sequenzst. Q auf eine Wave zum Poke wirft den Stack auf einen Minion. Heb Q für Trades auf Champions auf, nicht auf Creeps, die du nicht clearen musst.

## Fortgeschrittener Tipp

Nutze **Parallel Convergence (W)** als präventives Vision-Tool, nicht nur als Stun-Setup. W zu casten platziert den Kreis 3.5 Sekunden vor Aktivierung auf dem Boden, und während dieses Windups siehst du, ob jemand durch die Zone läuft — ein gratis Fog-Check auf einem Chokepoint (= ein enger Pfad, den der Gegner überqueren muss) oder hinter dem Drake-Pit. Pros nutzen den Trick, um den gegnerischen Jungler beim Rivercross zu scouten, dann entweder den Gank mit fertigem Stun zu commiten oder ohne Commit wegzurotieren. Die Ability wird gleichzeitig zum Pick-Tool und zur Ward (= das kleine Objekt, das in einem Bereich Vision gibt).
