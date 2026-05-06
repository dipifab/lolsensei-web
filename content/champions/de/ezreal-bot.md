---
title: "Ezreal Bot Build & Guide — Patch 16.9"
slug: "ezreal-bot"
language: "de"
patch: "16.9"
champion: "ezreal"
role: "bot"
last_updated: "2026-04-29"
description: "Ezreal Bot Lane Guide für League of Legends Patch 16.9: Starter-Items, AD-Core-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Profi-Tipp."
quick_learn:
  champion_dd_id: "Ezreal"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Skirmisher"
  abilities:
    - key: "P"
      name: "Rising Spell Force"
      description: "Jede Fähigkeit, die einen Gegner trifft, gibt einen Stack Attack Speed (max 5). Das ist Ezreals Auto-Attack-DPS-Motor."
      dd_spell_id: "Ezreal_Passive"
    - key: "Q"
      name: "Mystic Shot"
      description: "Linearer Skillshot mit langer Reichweite, physischer Schaden. Reduziert Cooldowns bei Treffer und löst On-Hit-Effekte aus — dein Haupt-Poke- und DPS-Knopf."
      dd_spell_id: "EzrealMysticShot"
    - key: "W"
      name: "Essence Flux"
      description: "Magischer Orb, der an Champion oder Objective haftet. Detoniert beim nächsten Angriff oder Spell für Bonus-Schaden und Mana-Rückgabe."
      dd_spell_id: "EzrealEssenceFlux"
    - key: "E"
      name: "Arcane Shift"
      description: "Kurzer Blink + automatischer Bolt. Langer Cooldown — dein einziger Escape, verschwende ihn nicht früh für Schaden."
      dd_spell_id: "EzrealArcaneShift"
    - key: "R"
      name: "Trueshot Barrage"
      description: "Globaler linearer Strahl, der dem ersten Nicht-Minion-Ziel hohen Schaden zufügt. Für Pickoffs (isolierte Gegner außerhalb des Teamfights ausschalten), Execute oder Notfall-Waveclear."
      dd_spell_id: "EzrealTrueshotBarrage"
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
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "6675", name: "Navori Flickerblade" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "gegen Hard CC Single-Target zum Cleansen (Malzahar R, Skarner R, Warwick R) — Aktiv löst den Lock-down, du kitest weiter"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "gegen telegrafierte Projektil-CC (Morgana Q, Ashe R, Blitzcrank Q) — Spell Shield blockt eine Fähigkeit und rettet dein Positioning"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "gegen Poke-Lanes (Caitlyn, Varus, Xerath Support) wo du Lifesteal-Sustain plus Schild brauchst, um Trades zu überleben"
    - dd_id: "3091"
      name: "Wit's End"
      against: "gegen schweren AP-Burst (LeBlanc Mid, Syndra, Brand Support) — Magic Resist plus On-Hit-Magieschaden auf jedem Q"
  base_combo: ["W", "Q", "AA", "E", "AA"]
  win_condition: "Stacke Passive Attack Speed mit Q auf jedem Cooldown, kite aus Maxrange mit Auto-Attacks plus Q, und snowballe die Bot Lane bis zum 3-Item-Spike um Minute 25-30, wo du den gegnerischen Carry im DPS überholst."
  weakness: "Squishy ohne Escape außer E (langer Cooldown). Anfällig für harten Engage und Long-Range-CC; verfehlst du Q in der Lane, fällst du zurück, weil die Stacks nach 6 Sekunden ohne Treffer verschwinden."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 8005, name: "Press the Attack", icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png" }
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["draven", "kalista", "samira"]
      archetype: "Hyper-aggressive Marksmen mit kurzer Reichweite"
      reason: "Ezreals Q übertrifft ihre Auto-Attack-Reichweite (1150 vs ~525-550). Poke sie aus sicherer Distanz von der Wave; sie müssen All-in (kompletter Kill-Trade) gehen, um zu gewinnen, und deine E ist ein Panic Button gegen den Dive."
    - examples: ["sivir", "varus", "kog-maw"]
      archetype: "Immobile Marksmen ohne Dash"
      reason: "Ezreal kann eine langsame Q (Sivir Boomerang, Varus Q) sidesteppen und gleichzeitig seine eigene platzieren. Sie können seinen langsamen Waveclear nicht bestrafen, weil sie die Distanz nicht schließen, wenn er aufrückt."
    - examples: ["aphelios", "kai-sa"]
      archetype: "Skalierende Marksmen mit schwachem Laning"
      reason: "Ezreals Spike zwischen Level 2 und 6 ist stärker als ihrer. Q-Poke schiebt sie von der Wave, sie kommen verspätet zu Core-Items und verlieren ihren Late-Game-Vorteil."
  counterpicks:
    - examples: ["miss-fortune", "jhin"]
      archetype: "Pre-6-Burst-Marksmen mit frontloadetem Schaden"
      reason: "Ihr Trade-Pattern auf Level 1-3 (Jhin Auto-Reset, MF Double Up) übertrifft Ezreal im Schaden, bevor er die Passive stackt. Sie zwingen dich früh zum Recall und kosten dich Tempo auf Manaflow Band."
    - examples: ["caitlyn", "xerath", "ziggs"]
      archetype: "Längere Artillerie-Reichweite (Poke Lane)"
      reason: "Ihre Q- oder Trap-Reichweite überschreitet Ezreals 1150. Er kann nicht antworten, ohne in ihre Threat-Zone zu treten, also blutet die Lane seine HP ohne Möglichkeit zum Gegen-All-in."
    - examples: ["leona", "nautilus", "thresh"]
      archetype: "Hard-Engage-Tank-Supports"
      reason: "Ihr Point-and-Click-Engage (Leona E, Naut Q, Thresh Q Hook) umgeht Ezreals Hauptstärke des sicheren Range-Pokes. Einmal gelockt reicht seine E oft nicht, um dem Follow-up zu entkommen."
---

## Überblick

Ezreal ist ein AD Carry mit langer Reichweite, der reines Auto-Attack-DPS gegen Sicherheit und Skillshot-Poke eintauscht. Sein Kit dreht sich darum, **Mystic Shot (Q)** auf jedem Cooldown zu landen — jeder Treffer reduziert einen Teil seiner Cooldowns, stackt die Passive **Rising Spell Force** für Attack Speed (bis zu 5 Stacks, ungefähr +50% AS-Spike) und löst On-Hit-Item-Effekte wie Kraken Slayers Bonus-Schaden aus. Er hat das beste Escape-Tool aller traditionellen ADCs mit **Arcane Shift (E)**, aber der Preis ist fragiles Lane-Sustain und eine langsamere Scaling-Kurve als ADCs wie Jinx oder Aphelios.

Der Game Plan ist geduldig: Poke mit **Q** aus Maxrange (1150 Einheiten, weiter als jede andere ADC-Auto-Attack), schiebe Waves mit **W**-**Q**-Combos, wenn der Gegner zurücktritt, und roame Mid mit **R**, um Pickoffs über die Map zu erzielen. Skill Expression liegt in der **Q**-Prediction (führe das Ziel entlang seines Bewegungsvektors — sie sind leichter zu treffen, während sie last-hitten, weil sie sich selbst verlangsamen, um einen Minion anzugreifen) und in der **E**-Disziplin (blinke nicht für Schaden hinein; spare sie für den unvermeidlichen Engage).

## Empfohlener Build

**Starter-Items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Doran's gibt dir das AD und Lifesteal, das du brauchst, um mit **Q** zu traden, ohne im HP zurückzufallen.

**Core-Items (in dieser Reihenfolge):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — erster DPS-Spike. Jede dritte Auto verursacht True Damage (Schaden, der Armor und Magic Resist ignoriert), und **Q** zählt als On-Hit-Anwendung. Dein bedingungsloser erster Kauf.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — Attack-Speed-Schuhe, die mit den Passive-Stacks multiplizieren. Kauf nach der ersten Kraken-Komponente.
3. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — erweitert deine Auto-Attack-Reichweite um ~150 Einheiten, wenn energized, und richtet sie auf deine **Q**-Reichweite aus. Lässt dich aus Maxrange kiten (rückwärts laufen während du angreifst, um Distanz zu halten), ohne aufzurücken.
4. ![Navori Flickerblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6675.png) **Navori Flickerblade** — Basic Attacks reduzieren Nicht-Ult-Cooldowns. Kombiniert mit dem Cooldown-Refund von **Q** wirfst du eine **Q** alle ~2 Sekunden.
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — Armor Penetration für das Late Game, wenn die Frontline-Tanks Armor gestackt haben.

**Situational Items:**

- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — gegen Hard CC Single-Target zum Cleansen (Malzahar R, Skarner R, Warwick R). Das Aktiv löst den Lock-down, du kitest weiter.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — gegen telegrafierte Projektil-CC (Morgana Q, Ashe R, Blitzcrank Q). Der Spell Shield blockt eine feindliche Fähigkeit und rettet dein Positioning.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — gegen Poke-Lanes (Caitlyn, Varus, Xerath Support). Lifesteal lässt dich den Harass aushalten und der Overheal-Shield gibt dir einen HP-Puffer.
- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — gegen schweren AP-Burst (LeBlanc Mid, Syndra, Brand Support). Magic Resist plus Bonus-On-Hit-Magieschaden auf jeder Auto und jedem **Q**.

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** ist Default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** sind akzeptabel, wenn du mehr **R**-Uptime für Cross-Map-Snipes brauchst.

**Skill Order:** Maxe **Q** zuerst (dein Schaden- und DPS-Motor), **W** als zweites (Extra-Burst auf festsitzende Ziele), **E** zuletzt (sie macht nie genug Schaden, um sie zu maxen — sie bleibt ein Blink). Setze auf Level 6, 11, 16 einen Punkt in **R**.

**Runen:** Primär **Precision** mit **Lethal Tempo** (oder **Press the Attack** in squishigeren Lanes), **Presence of Mind** (Mana-Sustain), **Legend: Bloodline** (Lifesteal-Scaling), **Coup de Grace**. Sekundär **Sorcery** mit **Manaflow Band** (essenziell — Ezreals Mana-Kosten sind ohne sie brutal) und **Transcendence**.

## Wichtige Matchups

- **Caitlyn:** Sie übertrifft deine **Q**-Reichweite mit ihrer Auto-Attack (650 vs deine 550 Melee-Range, aber ihre Traps zonen dich raus). Bleib hinter Minions, geh nie über eine Trap, und farme mit **Q**. Such den All-in, wenn sie **Net (E)** nutzt, um aus einer Wave zu fliehen — ihr Cooldown ist up.
- **Draven:** Er will Trades (kurze Schlagabtausche) auf kurze Distanz. Nutze **Q**, um die Wave zu pushen, friere sie ein (last-hitte Minions, ohne die Wave zu töten, damit sie unter deinem Tower bleibt), wenn du hinten bist, und ruf früh Jungle-Ganks. Vermeide seine Spinning Axes — wenn er 2 Äxte rotieren hat, autos ihn nicht.
- **Lucian:** Mirror-Match für Trade-Tempo. Spar **E** für den Moment auf, in dem er seinen **Dash (E)** offensiv nutzt — dann ist er committed (vollkommen festgelegt, kein Rückzug möglich), und du kannst ihn entweder unter Tower locken oder mit deinem **Q**-Burst nachfolgen.
- **Jhin:** Sein 4. Auto macht enormen Crit-Schaden; tracke seine Munition (zähle seine Autos: 1, 2, 3, dann zurück vor dem 4.). Bestrafe ihn während der langen Reload-Animation, indem du aufrückst und **Q** landest.
- **Sivir:** Ausgeglichenes Matchup bis Level 6. Ihr **Spell Shield (E)** blockt deine **Q** — bait ihn zuerst mit einem **W**-Orb (billig und schnell), dann **Q** durch das Down-Window.

## Power Spikes & Siegbedingungen

- **Level 2:** Erstes Trade-Window. Mit **Q** + **W** durch **Q** detoniert machst du einen Schadenschunk, der fast jeden kurzen Trade gewinnt.
- **Level 6:** Der erste **Trueshot Barrage** schaltet Roams und Execute-Pressure frei (R nutzen, um fliehende Low-HP-Gegner über die Map zu finishen). **R** auf den gegnerischen Mid-Laner, wenn er low recallt; die globale Reichweite verwandelt Positioning-Fehler in Kills.
- ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer abgeschlossen (~ Minute 12-14):** Dein DPS verdoppelt sich grob. Erzwinge jetzt einen 2v2-Dive — jede 3. Auto macht True Damage, gegen den der gegnerische Support nicht itemisieren kann.
- **3-Item-Spike (~ Minute 25-30):** ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** + ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** + ![Navori Flickerblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6675.png) **Navori Flickerblade** ist der Punkt, an dem du die meisten Carries aus sicherer Distanz im DPS überholst. Pushe hier für Baron- und Drake-Fights.

## Häufige Fehler

- **Q für den perfekten Schuss aufsparen.** Die Passive-Stacks (der AS-Buff bei Treffer) zerfallen nach 6 Sekunden ohne Fähigkeitstreffer. Wirf **Q** auf Minions, um Stacks zu refreshen und den Cooldown zu refunden — selbst eine verfehlte **Q** auf den Champion, die einen Minion trifft, ist das Mana wert.
- **E offensiv in der Lane nutzen.** **Arcane Shift** hat 14-26 Sekunden Cooldown; einmal hineingeblinkt hast du nichts mehr, wenn der Support engaget. Spar sie nur für Escapes, bis du ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** und einen Kill-Lead hast.
- **In Maxrange-R-Distanz im Teamfight stehen.** Deine **Q**-Reichweite ist 1150; auf 1500+ zu stehen, um **R**-Snipes zu landen, stellt dich außerhalb des Peels deines Supports (der Schutz, den dein Support dir gegen eingehende Dives gibt). Steh auf der zweitweitesten Position, damit dich ein Flank nicht löscht.
- **Mit Q poken bei leerem Mana.** Bist du unter 30% Mana, push die Wave und recall. Ein skalierender Ezreal ohne Mana ist nutzlos, weil jede Aktion seines Kits (E zur Flucht eingeschlossen) mindestens 28 Mana kostet.
- **W bei Objectives ignorieren.** **Essence Flux** klebt an Drakes und Baron. Platzier **W**, dann **Q** detoniert es für ~250 Bonus-Schaden im Smite-Kontest — ein gratis Schadenschunk, der den Steal gewinnt.

## Fortgeschrittener Tipp

Übe die **W**-Stick-Combo auf Champions: wirf **W** auf einen Low-HP-Gegner durch den Fog of War (wenn du Vision hast), dann sofort **Q**, um ihn zu detonieren. Die Detonation refundet die Mana-Kosten von **W** plus Extra-Mana, also ist die Combo praktisch kostenlos, wenn sie landet. In Teamfights lässt das Sticken von **W** auf den gegnerischen Carry jeden Basic Attack deines Teams ihn detonieren und verwandelt einen 50-Mana-Orb in einen ~400-Schaden-Chunk über 4 Sekunden aus mehreren Quellen. Der Schlüssel ist, **W** *vor* Beginn des Engages zu werfen, nicht währenddessen — die Reisegeschwindigkeit von 0,25s ist zu langsam, um ein bereits bewegliches Ziel zu erwischen.
