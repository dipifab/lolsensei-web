---
title: "Aatrox Top Build & Guide — Patch 16.9"
slug: "aatrox-top"
language: "de"
patch: "16.9"
champion: "aatrox"
role: "top"
last_updated: "2026-04-29"
description: "Aatrox Top Guide für League of Legends Patch 16.9: Bruiser-Build, Q-Edge-Mechanik, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Aatrox"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Fighter / Drain Tank"
  abilities:
    - key: "P"
      name: "Deathbringer Stance"
      description: "Periodisch verursacht sein nächster Auto-Attack zusätzlichen magischen Schaden basierend auf den max HP des Ziels und heilt Aatrox. Achte auf den Indikator am Portrait."
      dd_spell_id: "Aatrox_Passive"
    - key: "Q"
      name: "The Darkin Blade"
      description: "Greatsword-Slash mit drei aufeinanderfolgenden Casts, jeder in einer anderen Form. Ein Treffer auf der äußeren Kante macht kurz Knock-up und gibt 25% Bonusschaden. Aatrox' Hauptschadensquelle."
      dd_spell_id: "AatroxQ"
    - key: "W"
      name: "Infernal Chains"
      description: "Kettenprojektil, das das erste getroffene Ziel verlangsamt. Verlässt ein Champion oder großes Monster die Aufschlagzone nicht rechtzeitig, wird es zurückgezogen und erneut beschädigt."
      dd_spell_id: "AatroxW"
    - key: "E"
      name: "Umbral Dash"
      description: "Passive: heilt einen Anteil des an Champions verursachten Schadens. Active: kurzer Dash, während des Q-Windups nutzbar, um Edge-Treffer auszurichten oder zu kiten."
      dd_spell_id: "AatroxE"
    - key: "R"
      name: "World Ender"
      description: "Dämonische Form: Bonus-AD, Move Speed, der über die Dauer abklingt, und erhöhte Selbstheilung. Macht Fear auf nahe gegnerische Minions. Takedowns verlängern die Dauer."
      dd_spell_id: "AatroxR"
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
    - { dd_id: "3071", name: "Black Cleaver" }
    - { dd_id: "3053", name: "Sterak's Gage" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap von den Plated Steelcaps, wenn das Gegnerteam viel magischen Schaden oder verkettete CC hat (z.B. Lissandra, Sett, Malphite Ult)"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "gegen schweren AP-Burst (Syndra, Vex, Fizz Mid Top-Swap): der Spell Shield blockt einen großen magischen Treffer und rettet den Engage"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "gegen Comps mit zwei starken AD-Damage-Dealern (Yasuo + Caitlyn): wandelt AD-Burst in einen langsamen Bleed, den E-Lifesteal heilen kann"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "gegen Single-Target-Lockdown, der deinen Engage one-shottet (Morgana Q, Blitzcrank Hook, Lissandra R)"
    - dd_id: "3155"
      name: "Hexdrinker"
      against: "kauf diese Komponente, statt Eclipse zu finishen, wenn du gegen einen AP-Top (Vladimir, Rumble) HP verlierst und vor dem Back MR brauchst"
  base_combo: ["W", "AA", "Q1", "E", "Q2", "Q3"]
  win_condition: "Lande Q-Edges für den Knock-up, ketten W zum Lock, nutze E zum Repositionieren. Verwandle den Eclipse + Black Cleaver Vorsprung in 1v1-Wins in der Side-Lane."
  weakness: "Der gesamte Schaden hängt am Q-Timing. Verfehlst du den Edge, ist der Trade verloren. Hard CC, Long-Range-Kiter und True-Damage-Duellanten (Fiora, Camille) zerreißen seine Sustain."
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
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
    primary_rationale: "Precision primär: Conqueror rampt mit Q-Edges und AAs hoch und maximiert die Sustain im langen Trade. Triumph heilt auf Takedowns, Legend: Alacrity beschleunigt die AAs zwischen Q-Casts, Last Stand bestraft das Low-HP-Fenster, in dem Aatrox' R noch dreht."
    secondary_rationale: "Resolve sekundär: Second Wind blutet die HP zurück, die du im Early gegen Ranged-Poke verlierst, Revitalize boostet sowohl die R-Heilung als auch den Sterak's Gage Lifeline-Shield."
    secondary_alternative: "Gegen ruhige Lanes ohne Poke swap auf Inspiration mit Magical Footwear (gratis Boots ab Minute 12) und Cosmic Insight (extra Ability Haste für mehr Q-Rotationen pro Fight)."
matchup_draft:
  pick_into:
    - examples: ["nasus", "yorick"]
      archetype: "Immobile Melee-Fighter ohne Engage-Tools"
      reason: "Aatrox gewinnt Trades vor Level 6 mit Q-Edge-Treffern; W kettet sie lang genug fest, dass sie ihre Passives nicht sicher stacken oder einem All-in entkommen können."
    - examples: ["ryze", "vladimir"]
      archetype: "Short-Range-Mages, die für Schaden reinlaufen müssen"
      reason: "Sie müssen für vollen Output in Melee-Range treten; Aatrox bestraft den Gap mit W-Slow plus Q-Edge-Knock-up, bevor sie disengagen können."
    - examples: ["kayle", "k-sante"]
      archetype: "Schwache Early-Laner mit Late-Game-Spike"
      reason: "Aatrox hat eine der besten Early-Game-Laning-Kurven; er kann sie killen oder ihnen XP klauen, bevor sie ihre Late-Game-Items erreichen, die sie gefährlich machen."
  counterpicks:
    - examples: ["fiora", "camille"]
      archetype: "True-Damage-Duellanten mit Parry oder Shield"
      reason: "Fioras W parriert den Q-Knock-up und ihre Vitals (Marker, die sie auf Aatrox setzt und mit Auto für True Damage trifft — Schaden, der Armor und MR ignoriert) umgehen die Drain-Tank-Build; Camilles E packt nochmal True Damage drauf."
    - examples: ["quinn", "teemo"]
      archetype: "Long-Range- oder unsichtbarkeitsbasierte Kiter"
      reason: "Sie bleiben außerhalb der Q-Range und brechen Aatrox' Wind-ups mit Blind oder Vault (Quinns E-Knockback-Dash); er hat keine Möglichkeit, den Gap zu schließen, ohne sowohl E als auch Flash zu verbrennen."
    - examples: ["malphite", "maokai"]
      archetype: "Tanks mit instantanem Hard CC (kein Skill-Aim)"
      reason: "Ihre Stuns und Roots sind Point-and-Click — kein Projektil zum Ausweichen. Sie unterbrechen Q-Recasts mitten in der Animation, und sobald Aatrox gelockt ist, kann er sich nicht mehr per E-Lifesteal hochheilen."
---

## Überblick

Aatrox ist ein Melee-Fighter (Champion, der im Nahkampf, also in Tuchfühlung, kämpft), der um eine **Q** mit drei Casts und einem Greatsword herum gebaut ist. Jeder Cast deckt eine andere Form ab, und ein Treffer auf der **äußeren Kante** des Schwungs — nicht in der inneren Zone — macht zwei Dinge extra: er **knock-uppt** das Ziel kurz (schickt es einen Moment in die Luft, sodass es nicht handeln kann) und gibt 25% Bonusschaden. Das Kit hat außerdem einen Slow + Chain-Pull (**W**), einen kurzen **Dash** (**E**: ein schneller Bewegungsschub, während der Q-Animation nutzbar, um sich zu repositionieren) und ein Ultimate in dämonischer Form (**R**: ein Buff mit langem Cooldown). Er ist ein **Drain Tank**: kein echter Tank, sondern ein Fighter, der überlebt, indem er den eingesteckten Schaden via E-**Lifesteal** zurückheilt (ein Prozentsatz des verursachten Schadens kehrt als HP zurück), statt Armor oder HP zu stacken.

Sein Game Plan ist kurz beschrieben und anspruchsvoll umzusetzen: in Lane laufst du mit **W** als Lock-down (der Slow, der den Gegner festnagelt) bereit hoch, dann schwingst du **Q** so, dass der **Edge** der Klinge das verlangsamte Ziel erwischt. Nutze **E**, um in die richtige Position für den zweiten und dritten Q-Cast zu sliden. Ab dem Mid-Game suchst du Side-Lane-1v1s und 2v2-Skirmishes (Mini-Fights mit zwei Spielern pro Seite, abseits des großen Teamfights). Aatrox ist einer der stärksten **Bruiser** (Champions, die Schaden und Robustheit mischen) im Spiel, sobald seine R steht und mindestens ein Item online ist.

## Empfohlener Build

**Starter-Items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Die HP-Regen-Passive auf Doran's Shield trägt Aatrox durch die ersten Level, in denen seine Sustain (seine Fähigkeit, sich im Fight selbst zurückzuheilen) am schwächsten ist.

**Core-Items (in Reihenfolge):**

1. ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — First-Item-Spike (der Moment, in dem dein Schaden am stärksten hochspringt). Gibt **AD** (Attack Damage, der Stat hinter Auto-Attack- und Q-Schaden), **Omnivamp** (Lifesteal, der auf jeden Schadenstyp wirkt, nicht nur Auto-Attacks) und **Ability Haste** (was den Cooldown deiner Abilities senkt). Die Passive triggert beim zweiten Treffer, und Q1 + Q2 liefern ihn in Sequenz.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — Default-Boots, wenn der Gegner dir vor allem mit Auto-Attacks weh tut. Sie reduzieren diesen Schaden in extended Trades (hin und her gehende Schadensaustäusche in Lane).
3. ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — jeder Q-Treffer schmirgelt einen Stack der gegnerischen **Armor** ab (der Stat, der physischen Schaden reduziert). Gibt zudem HP für Survivability und Ability Haste für mehr Q-Rotationen pro Fight.
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP plus ein **Lifeline Shield**: fallen deine HP unter eine Schwelle (etwa 30%), triggert ein automatischer Schild. Genau dieses Fenster ist der Moment, in dem du Extra-Zeit brauchst, damit E-Lifesteal dich wieder ins Sichere heilt.

**Situative Items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap von den ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**, wenn das Gegnerteam viel magischen Schaden oder verkettetes **CC** hat (Crowd Control: Stuns, Roots, Knockbacks — alles, was dich kontrolliert, sodass du nicht handeln kannst). Beispiele: Lissandra-Root, Sett-Pull, Malphite-Ultimate.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — gegen schweren **AP**-Burst (AP = Ability Power, der Stat hinter magischem Schaden; Burst = hoher Schaden, in 1-2 Sekunden geliefert). Die Lifeline-Passive blockt einen großen magischen Treffer, oft der Unterschied zwischen Sterben mitten im Engage (mitten in der Fight-Initiation) und überleben, bis die R sitzt.
- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — gegen Comps mit zwei starken physischen (AD) Damage-Dealern (z.B. Yasuo + Caitlyn). Verwandelt Burst in einen langsamen **Bleed** (Schaden, über die nächsten Sekunden verteilt, statt auf einen Schlag), und gibt E-Lifesteal Zeit, ihn zurückzuheilen.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — gegen Single-Target-Hard-CC, der deinen Engage one-shottet (Morganas Q, Blitzcranks Hook, Lissandras R). Trägt einen einmaligen Spell Shield, der die Lockdown-Ability absorbiert, sodass du committen kannst (voll reingehen), statt auf Maximalrange zu dodgen.
- ![Hexdrinker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3155.png) **Hexdrinker** — Early-Game-**MR**-Komponente (Magic Resistance, der Stat, der magischen Schaden reduziert). Kauf sie, bevor du ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** finishst, wenn dir ein AP-Top wie Vladimir oder Rumble die Lane gewinnt.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** ist der Default. Wechsel auf ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**, wenn das Gegnerteam drei oder mehr CC-Quellen oder viel magischen Schaden hat.

**Skill-Order:** Maxe **Q** zuerst (das ist dein einziger Schaden), **E** zweites (der Lifesteal skaliert pro Rank, also mehr Dashes pro Fight), **W** zuletzt. Punkt in **R** auf Level 6, 11, 16.

**Runen:** Runen sind passive Effekte, die du vor dem Spiel aus einem "Baum" wählst, jeder Baum um einen anderen Spielstil herum gebaut. Aatrox nutzt **Precision** als Primärbaum (den Baum, der auf sustained Damage aus Auto-Attacks basiert) mit der Keystone (der Hauptrune des Baums) **Conqueror** — eine Passive, die deinen Schaden hochrampt, je länger du kämpfst — plus **Triumph** (eine kleine Heilung auf Takedowns), **Legend: Alacrity** (Alacrity = Stat, der dir Bonus-Attack-Speed gibt und Aatrox hilft, zwischen Abilities schneller Auto-Attacks zu landen) und **Last Stand** (mehr Schaden auf niedrigen HP). Als Sekundärbaum **Resolve** (der Durability-Baum) mit **Second Wind** + **Revitalize** für HP-Sustain in Lane, oder **Inspiration** mit **Magical Footwear** (gratis Boots ab Minute 12) und **Cosmic Insight** (extra Ability Haste), wenn du eine ruhige Lane erwartest.

## Wichtige Matchups

- **Fiora:** Härtestes Matchup. Ihre **W** ist eine Parry (ein kurzer Schild, der eine Ability blockt und kontert), die deinen Q-Knock-up cancelt. Bait die Parry — zwing sie, sie auf eine Q1 zu nutzen — bevor du auf die dritte Q committest. Vermeide lange Trades: kurzes Q1 + E rein-raus, und commit niemals auf Q3, wenn ihre W nicht im Cooldown ist.
- **Darius:** Skill-Matchup (gewinnt der bessere Spieler, unabhängig vom Counter-Pick). Bleib außerhalb der Range seines **E**-Pulls, wenn sein Bleed drei oder mehr Stacks auf dir hat (seine Passive zieht dir pro Sekunde HP pro Stack). Triff Q auf dem Edge, wenn seine Q im Cooldown ist; unter R favorisieren Trades dich, wenn du mindestens ein Item Vorsprung hast.
- **Renekton:** Verliert die Lane vor Level 6, wenn du seinen W-Stun respektierst. Lauf nur hoch, wenn deine W bereit ist; bestrafe seine Cooldowns, statt Face-to-Face zu traden. Nach 6 trägt deine R besser als die Fury (seine Resource-Bar), die er verbrennt.
- **Malphite:** Vermeide es, auf deiner eigenen Minion-Wave zu stehen — seine Q ist ein Long-Range-Poke (günstiger Ranged-Schaden, um deine HP abzuschmirgeln, ohne zu committen), der dich gratis trifft. Kauf ![Hexdrinker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3155.png) **Hexdrinker**, falls sein Early-Poke die Lane gewinnt; **freeze** die Wave nahe deinem Tower (hör auf zu pushen und halte die Wave auf deiner Side), um ihm Farm zu klauen (Gold und XP aus dem Töten von Minions).
- **Quinn:** Sehr unangenehm. Ihre Ability blendet dich (cancelt deine Auto-Attacks für kurze Zeit, inklusive der empowered Passive-Auto), und sie kitet dich aus der Q-Range (bewegt sich rückwärts, während sie attackt, und hält dich aus dem Nahkampf). Push die Wave hart und roame (verlasse deine Lane, um Mid zu helfen) für Picks (isolierte Kills auf out-of-position Gegner), statt zu versuchen, das 1v1 zu gewinnen.

## Power Spikes & Siegbedingungen

- **Level 2:** Mit **Q** + **W** freigeschaltet hat Aatrox ein echtes All-in-Fenster (ein Fenster, in dem du voll auf den Kill committen kannst, ohne Rückzugsoption). Spositioniert sich der Gegner, lauf mit W bereit hoch und triff Q auf dem Edge, sobald der Slow sitzt.
- **Level 6:** Deine erste R schaltet auf. Such ein All-in, falls der Gegner unter 60% HP ist — der AD-Boost und der Healing-Buff machen aus selbst neutralen Trades Kills.
- **![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) Eclipse fertig (~ Minute 11-13):** Dein Schaden spiked hart. Erzwing Side-Lane-Duelle und such ein Roam Bot für einen 2v3-Dive (unter den gegnerischen Bot-Tower zusammen mit deinem Jungler — dem Spieler, der die Jungle-Camps farmt und in die Lanes rotiert — gehen, um sie durch die Tower-Schüsse zu killen).
- **Zwei Items + R online (~ Minute 18-22):** Peak Teamfight-Fenster. Nutz den ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** Lifeline-Shield plus den R-Healing-Amp (Amplification — die R erhöht alle Heilung, die du bekommst), um auf die gegnerische Backline zu diven (die squishy Carries, die im Fight hinter ihren eigenen Tanks stehen) und die R-Dauer auf Takedowns (Kills oder Assists) zu resetten (auffrischen).

## Häufige Fehler

- **Q1 sofort beim ersten Kontakt casten.** Q1 ist der kleinste und langsamste Cast. Eröffne mit **W** für den Slow, dann tim Q1 so, dass der **Edge** des Schwungs sie clippt — nicht die innere Zone. Der Bonusschaden vom Edge liegt bei rund 25%.
- **E für Bewegung verbrennen statt für Q-Alignment.** E ist dein Trade-Winning-Tool. Heb es auf, um in Edge-Hit-Range zu sliden oder eine Schlüssel-Ability des Gegners während des Q-Wind-ups (die kurze Animation, bevor der Q-Schaden tatsächlich landet) zu dodgen. Bra-h E nicht raus, nur um die Wave schneller zu queren.
- **R zu früh im Fight pressen.** Aatrox' R hat einen langen Cooldown, und der Buff klingt mit der Zeit ab. Engage (start den Fight) zuerst mit W + Q, dann aktivier R, wenn du committet bist und den AD/Healing-Amp brauchst — nicht als initiales Engage-Tool.
- **W auf Minions ignorieren.** W passiert durch einen Minion, um den Champion dahinter zu slowen. In harten Matchups (Fiora, Camille) feuer W hinter deiner Wave ab, sodass das Projektil sie durch Minion-Körper hindurch erwischt, bevor sie reagieren können.
- **Armor stacken statt Haste/AD.** Aatrox ist ein Drain Tank, kein echter Tank. Er überlebt, indem er den Schaden via E-Lifesteal zurückheilt; diese Heilung skaliert (wächst) mit dem Schaden, den du verursachst. HP-Tank-only-Items zu bauen killt sowohl deinen Output als auch deine Sustain.

## Fortgeschrittener Tipp

Nutz **E** während der Q1-Wind-up-Animation, um die Q-Hitbox mitten im Cast zu shiften: du kannst Q in eine Richtung starten, dann durch einen Minion oder hinter den Gegner dashen, und der Schwung landet aus einem komplett anderen Winkel. Das nennt man **Q-Animation-Cancel** und verwandelt vorhersehbare Q-Casts in unvorhersehbare Plays. Übe es in einem Custom Game an einem Target Dummy (Trainings-Dummy): cast Q1, halt den Cast, dash mit E, und schau, wie die Q an der neuen Position resolvet. Im echten Spiel ist die High-Impact-Anwendung, **in** einen Gegner zu dashen, der versucht hat, einer telegrafierten Q (eine Q, deren Wind-up sichtbar genug war, dass er sie kommen sah) per Side-Step (seitliche Bewegung zum Ausweichen) auszuweichen, und ihn dann auf dem Edge des neuen Winkels für den Knock-up zu erwischen.
