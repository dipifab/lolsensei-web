---
title: "Bard Support Build & Guide — Patch 16.9"
slug: "bard-support"
language: "de"
patch: "16.9"
champion: "bard"
role: "support"
last_updated: "2026-04-29"
description: "Bard Support Guide für League of Legends Patch 16.9: Roaming-Pickoff-Spielstil, Build, wichtige Matchups, Power Spikes, häufige Fehler und ein Wall-Stun-Tipp."
quick_learn:
  champion_dd_id: "Bard"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Roaming Support / Catcher"
  abilities:
    - key: "P"
      name: "Traveler's Call"
      description: "Meeps spawnen neben Bard und addieren Bonus-Magieschaden auf seine Auto-Attacks. Chimes erscheinen über die Map: Einsammeln gibt XP, Mana und Move Speed außerhalb des Kampfes."
      dd_spell_id: "Bard_Passive"
    - key: "Q"
      name: "Cosmic Binding"
      description: "Linearer Skillshot, der das erste Ziel slowt. Trifft das Geschoss einen zweiten Gegner oder eine Wand, werden beide gestunnt. Wall-Stuns sind Bards Pickoff-Signature."
      dd_spell_id: "BardQ"
    - key: "W"
      name: "Caretaker's Shrine"
      description: "Setzt einen Heilschrein, der über 10 Sekunden auflädt. Der erste Verbündete, der ihn betritt, heilt HP und bekommt einen kurzen Move-Speed-Boost. Bis zu 3 aktiv. Gegner zerstören ihn."
      dd_spell_id: "BardW"
    - key: "E"
      name: "Magical Journey"
      description: "Öffnet ein Einweg-Portal durch nahes Terrain. Jeder Champion (Verbündeter oder Gegner) kann es nehmen. Lange Cooldown — für Ganks, Escapes und Überraschungs-Flanks."
      dd_spell_id: "BardE"
    - key: "R"
      name: "Tempered Fate"
      description: "Langreichweitiges AOE, das Champions, Minions, Monster und Türme 2.5 Sekunden in Stasis setzt. Locked Ziele, rettet Verbündete vor dem Todesstoß oder friert einen Tower-Diver ein."
      dd_spell_id: "BardR"
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
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "2065", name: "Shurelya's Battlesong" }
    - { dd_id: "6621", name: "Dawncore" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "gegen Single-Target-Lockdown-CC auf den ADC (Morgana Q, Ashe R, Leona-E-in-R-Kette)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "gegen Burst-AOE-Comps (Yone + Malphite, Orianna-Teamfight-Setups)"
    - dd_id: "3107"
      name: "Redemption"
      against: "gegen gruppierte Teamfight-Comps; der Flächenheal funktioniert auch tot"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "gegen Assassinen oder harte Diver (Champions, die dich in Sekunden löschen: Zed, Talon, Diana)"
    - dd_id: "3109"
      name: "Knight's Vow"
      against: "wenn der ADC die Win Condition ist und das Gegnerteam mehrere Dive-Threats hat"
  base_combo: ["AA", "Q", "AA", "R"]
  win_condition: "Roame ständig, sammle Chimes und wall-stunne isolierte Gegner mit Q. In Teamfights R auf die Frontline, damit dein Team die Backline löscht, bevor der Engage committet."
  weakness: "Squishy, kein Dash. Verfehlt die Q oder verfehlt sie den Wall-Stun, hast du keinen Follow-up und der ADC stirbt im 2v2. Bestraft von Point-and-Click-Lockdown-Supports und aggressiven Level-2-Bullies."
  runes:
    primary_tree: "Inspiration"
    primary_tree_dd_id: 8300
    keystone:
      dd_id: 8351
      name: "Glacial Augment"
      icon_path: "perk-images/Styles/Inspiration/GlacialAugment/GlacialAugment.png"
    primary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["soraka", "sona", "yuumi", "karma"]
      archetype: "Immobile Enchanter ohne Dash"
      reason: "Die Q-into-Wall-Stun-Threat zwingt sie, weit hinter den Minions zu spielen. Ohne Escape wird ein sauberer Wall-Stun zum Kill, bevor ihr Team rotaten kann."
    - examples: ["alistar", "nautilus"]
      archetype: "Telegrafierte Melee-Engager"
      reason: "Die R bricht ihren Commit-Engage. Direkt nach ihrem Flash-W auf den ADC drückst du R auf den Engager: Er friert in Stasis, während dein ADC kostenlos rausspaziert."
  counterpicks:
    - examples: ["lulu", "janna", "renata-glasc"]
      archetype: "Lockdown-Enchanter mit Point-and-Click-CC"
      reason: "Ihr CC ist Point-and-Click (kein Skillshot zum Dodgen). Sie **peelen** deine Dive-Versuche mühelos (peel = einen Verbündeten schützen, indem du den unterbrichst, der auf ihn springt), und Bard hat keinen Dash, um zu disengagen, wenn der Trade kippt."
    - examples: ["blitzcrank", "pyke", "thresh"]
      archetype: "Long-Range-Hooker"
      reason: "Ihre Hook (Range 1100-1150) erreicht dich, bevor deine Q-Linie sauber ist. Ohne Dash spielt die Lane nach einem Treffer für 30 Sekunden 1v2."
    - examples: ["pantheon"]
      archetype: "Aggressive Level-2-Bullies"
      reason: "All-in-Lanes auf Level 2-3 bestrafen deine schwachen Early Stats. Keine Sustain außer der W, die 10 Sekunden auflädt, bevor sie zahlt."
---

## Überblick

Bard ist ein **Roaming Support** (ein Support, der ständig die Lane verlässt, um den Rest der Map zu beeinflussen). Seine Identität sitzt **außerhalb** des Botlane-2v2 (der Botlane-Kampf zwischen den beiden ADCs — den Haupt-Damage-Carries — und ihren beiden Supports). Er sammelt leuchtende **Chimes**, die über die Map spawnen: Sammeln gibt kostenlos Erfahrung, Mana und Move Speed außerhalb des Kampfes. Diese Mobility wandelt er in **Pickoffs** um — isolierte Gegner abseits ihres Teams fangen und töten. Seine Q ist ein Long-Range-Slow, der zum Stun wird, wenn das Geschoss ein zweites Ziel oder, am bekanntesten, eine Wand hinter dem ersten trifft. Seine R ist eine Stasis-Bombe (4 Sekunden Flugzeit, dann ein breites AOE), die alles in ihrem Bereich für 2.5 Sekunden einfriert: Verbündete, Gegner, Türme und Minions inklusive.

Game Plan: ständig Chimes sammeln, im **River** (die zentrale neutrale Zone zwischen den beiden Map-Hälften) und im Jungle nach Wall-Stun-Pickoffs jagen, und die Botlane als eine von drei Lanes patrouillieren — nicht der Ort, wo du wohnst. In Teamfights bist du der **Disengage** (der Spieler, der den gegnerischen Engage mit R bricht) und der **Catch** (der Spieler, der isolierte Ziele lockt) — fast nie die Frontline.

## Empfohlener Build

**Starter-Items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions** (Verbrauchsgegenstände, die HP über wenige Sekunden zurückgeben). World Atlas ist das Support-Quest-Item: generiert Gold über Zeit und upgraded automatisch zu einer von vier Endformen, während du Schaden auf Champions machst und die Map **wardest** (Wards setzen — Sicht-Tools in Büschen, damit dein Team sieht, was passiert). Bei Bard soll es immer Bloodsong werden.

**Core-Items (in Reihenfolge):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — Endform des Support-Pfads. Beste Wahl, weil Bard ein **Poke** (Damage aus Distanz) und Pickoff-Support ist, kein **Enchanter** (ein Heal/Shield-Support wie Soraka oder Janna). Bloodsong gibt AP (Ability Power — die Stat, die magischen Schaden skaliert) und belohnt Schaden auf Champions — exakt das, was deine Q-plus-Auto-Attack-Combos machen.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — Boots mit **Ability Haste** (Stat, die alle deine Cooldowns senkt) plus reduzierter Cooldown auf **Summoner Spells** (die zwei Extra-Sprüche oben in der Leiste: Flash, Ignite, etc.). Dein **Flash** kommt schneller wieder für Engages, und die **R** rotiert öfter für Objective-Fights (Teamfights um Drake oder Baron — Baron Nashor ist das gigantische Neutral-Monster im Top-River, das einen starken Team-Wide-Buff gibt).
3. ![Shurelya's Battlesong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2065.png) **Shurelya's Battlesong** — Aktiv mit 4 Sekunden Move-Speed-Burst für dich und nahe Verbündete. Kombiniert mit deinem ohnehin schnellen Roam für **Ganks** (in eine andere Lane laufen, um dort einen Gegner zu töten) von Bot zu Mid, denen niemand entkommt.
4. ![Dawncore](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6621.png) **Dawncore** — gibt Heal/Shield-Power, das im Late Game (nach ~25-30 Minuten, wenn Champions 4+ Items haben) skaliert. Kauf, wenn die Partie lang läuft und deine W-Charges echte Zahlen heilen.

**Situative Items:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — Aktiv, das einen Stun, Root (kann sich nicht bewegen, kann aber angreifen) oder Fear (unkontrollierte Bewegung) vom ADC entfernt. Kauf gegen Single-Target-Lockdown (Morgana Q, Ashe R, Leona-E-in-R-Kette).
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — Aktiv, das alle nahen Verbündeten 2.5 Sekunden schildet. Kauf gegen Burst-AOE-Comps (Squads wie Yone + Malphite + Orianna, die one-shotten — in einem Schlag töten — gruppierte Teams).
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — Flächenheal, den du auch tot über Verbündete legen kannst. Kombiniert mit Teamfight-Comps, die sich um Objectives gruppieren.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — Aktiv, das dich 2.5 Sekunden unverwundbar macht. Kauf gegen Assassinen oder harte **Diver** (Champions, die dich in 1-2 Sekunden töten: Zed, Talon, Diana), wenn sie dich klar fokussieren.
- ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — leitet 12% des erlittenen Schadens eines gewählten Verbündeten zu dir um und heilt diesen Verbündeten auf deinen Auto-Attacks. Kauf, wenn der ADC hyper-fed ist (8+ Kills voraus, löscht Gegner in 1-2 Schlägen) und das Gegnerteam mehrere Dive-Threats hat.

**Boots:** Ionian Boots of Lucidity sind Default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** sind die Alternative, wenn das Gegnerteam viel CC hat (Lulu, Leona, Lissandra) — Magic Resist plus 30% Tenacity (kürzere CC-Dauer auf dir).

**Skill-Order:** Maxe **Q** zuerst (Hauptdamage und Wall-Stun-Tool), **W** als zweites (Heal skaliert mit Rank), **E** zuletzt (die Cooldown-Reduktion ändert kaum etwas — ein Punkt reicht bis Late). Punkt in **R** auf Level 6, 11, 16.

**Runen:** Runen sind Passives, die vor dem Match gewählt werden (6 Picks aus zwei Bäumen: ein Primärbaum mit 4 Runen und ein Sekundärbaum mit 2). Der Bard-Standard ist:

- Primär **Inspiration**: **Glacial Augment** (triffst du ein geslowtes Ziel mit Auto-Attack, erscheint unter ihm eine zusätzliche Slow-Zone — kombiniert mit dem Q-Slow), **Magical Footwear** (Gratis-Boots ab Minute 12), **Biscuit Delivery** (3 Kekse im Early, die HP und Mana zurückgeben), **Cosmic Insight** (Extra Ability Haste und reduzierte Summoner-Spell-Cooldowns).
- Sekundär **Resolve**: **Bone Plating** (nach 3 erlittenen Treffern machen die nächsten 3 Treffer innerhalb 1.5s weniger Schaden) + **Revitalize** (deine Heals und Shields sind stärker). Lane-Safety-Pick.
- Alternativ-Sekundär **Sorcery**: **Manaflow Band** + **Scorch** für mehr Poke-Schaden in Lane.

## Wichtige Matchups

- **Lulu / Janna:** Hard-Counter im 2v2. Ihr **Point-and-Click-CC** (Crowd Control, das nicht zielen muss — einfach das Ziel klicken) cancelt deine Dive-Versuche. Lulus W verwandelt dich in ein harmloses Tier (Polymorph); Jannas Q wirft dich in die Luft. Bleib zurück, roame Mid, sobald die **R** auf Level 6 verfügbar ist, und vertraue darauf, dass dein ADC sicher **farmt** (last-hittet Minions für Gold und XP).
- **Leona / Nautilus:** Engage-**Tanks** (Frontline-Champions mit hohem HP) mit Point-and-Click-CC. Positioniere dich immer hinter deinem ADC. Springen sie auf den ADC, ![Tempered Fate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/BardR.png) **R** sie, um den Engage zu frieren, dann lauf weg. Nie **trade**-Auto-Attacks gegen sie (ein Trade ist ein kurzer Schlagabtausch in Lane, kein voller Kill-Versuch) — ihre CC-Kette ist länger als dein Trade-Window.
- **Blitzcrank / Pyke / Thresh:** Hook-Supports (ihre Signature ist ein **Skillshot** — eine gezielte Fähigkeit — mit langer Range, der dich zu ihnen zieht). Ihre Hook-Range schlägt deine effektive Q-Range. Steh hinter Minions, wenn die Hook bereit ist. Nach einem verfehlten Hook nimm einen kostenlosen Trade und **Q** sie — die Hook ist 15+ Sekunden im Cooldown.
- **Pantheon Support:** Aggressiver Lane-Bully (ein Champion, der dich im Early aus der Lane drücken kann). Er **all-int** (volles Commit zum Kill, kein Rückzug) auf Level 2 mit **W**-Stun + **Q**-Speer. Du hast keine Sustain. Bleib weit zurück, warde beide River-Büsche (die Hochgrasflächen im River, in denen Champions sich verstecken), und verweigere Level-2-Trades. Erhole dich post-6 mit **R**-Roams nach Mid.
- **Senna:** Passive **Scaler** (wird mit der Zeit stärker, committet im Early nicht). Du kannst sie wegen ihrer Long-Range-Auto-Attacks nicht sauber all-innen. Die Lane ist ein langsamer Farm-Trade. Gewinn das Map-Game über Chime-Sammeln und roame Mid für **R**-Plays. Push nie zu weit — ihr **W**-Root aus dem **Fog of War** (die nicht gewardeten Map-Zonen, die dein Team nicht sieht) ist ein kostenloses Gank-Setup für ihren Jungler (den Teammate, der die Jungle-Camps clearet).

## Power Spikes & Siegbedingungen

- **Level 2 (ein Punkt in W):** Setz einen Schrein im Lane-Busch für Sustain zwischen Trades. Mit der **Q** auf Level 1 hast du eine Kill-Threat, wenn der gegnerische Support sich verzieht.
- **Level 6 (R freigeschaltet):** Das erste **Tempered Fate** schaltet game-changing Plays frei. Stasis auf den feindlichen ADC im 2v2 ist oft ein sofortiger Kill. Roame Mid, sobald die Wave (die Minion-Linie) zu deinem Turm zurückbouncet (wenn die Minions nach einem Push natürlich auf die andere Seite zurückzulaufen beginnen) — deine **R** plus das Combo des Mid-Laners gewinnt gegen einen ahnungslosen Mid.
- **![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) Bloodsong fertig (~ Minute 14-16):** Dein Support-Quest-Item upgraded. Du fängst an, echten Schaden auf Q-Treffern zu liefern, und deine Roams skalieren mit.
- **Level 11 + ![Shurelya's Battlesong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2065.png) Shurelya's Battlesong online:** Der zweite R-Rank (R-Rank 2 = das zweite Mal, dass du einen Punkt in R steckst) senkt den Cooldown auf 95 Sekunden. Mit aktivem Shurelya's kannst du schnell genug rotieren (zwischen Lanes wechseln), um beide Sidelanes (Top und Bot) plus Drake-Fights (Teamfights in der Drachen-Grube) alle 90 Sekunden zu beeinflussen.

## Häufige Fehler

- **Q im offenen Feld als Poke werfen.** Ohne zweites Ziel oder Wand dahinter ist **Q** nur ein Slow — und ein 60-Mana-, 11-Sekunden-Cooldown-Slow ist ein brutaler Trade. Check immer, ob ein Minion oder eine Wand auf der Linie hinter dem Ziel ist. Wenn nicht, drück Q nicht.
- **Roamen, während die Wave zu deinem Turm gepusht ist.** Wenn du weggehst, crasht die Wave (die kämpfende Minion-Linie) in deinen Turm — die Minions sterben unter Turm und dein ADC verliert 2-3 Minions Farm plus **Tower Plates** (die Schutzpanzerung der Türme im Early; eine zu zerbrechen gibt Gold). Roame **nur**, wenn die Wave in der Mitte der Lane oder Richtung Gegnerturm pusht (die Minions ziehen vor, also bleibt dein ADC sicher an seinem Turm, während du weg bist).
- **R auf den eigenen ADC während eines Fights.** Stasis auf einen Verbündeten pausiert alles, was er tut — auch eine Auto-Attack-Kette, die den Trade gerade gewinnen wollte. Nutz **R** auf Gegner, auf sterbende Verbündete (um den Todesstoß zu unterbrechen) und auf Türme (um einen Tower Dive abzubrechen). Fast nie auf einen gesunden Carry.
- **In der eigenen R-Zone stehen.** Das AOE ist breit und die Flugzeit beträgt 4 Sekunden — du vergisst, wo du sie gecastet hast, läufst in deine eigene Stasis und verschwendest die Ult. Cast und tritt raus.
- **Chimes außerhalb der Lane ignorieren.** Chimes sind XP und Mana. Ein Bard, der Chimes sammelt, erreicht Level 6 etwa 2 Minuten früher als ein Bard, der in der Lane bleibt. Wenn du auf Minute 10 nicht 1 Level über dem Rest deines Teams liegst, spielst du falsch.

## Fortgeschrittener Tipp

Übe den **Flash-Stun**: Cast Q, dann aktiviere **Flash** (den universellen Kurzdistanz-Teleport-Summoner-Spell) mitten im Flug, um deinen Charakter umzusetzen — und das Q-Geschoss, das deinem Modell folgt, bekommt aus dem neuen Spot einen frischen Winkel. Der Trick ist, *zu* dem Punkt zu flashen, wohin der Gegner gerade **dasht** (sein kurzer Sofortbewegungs-Move). So fängst du Gegner durch Escapes hindurch, die eine normale Q dodgen würden. Es ist der Trick mit der höchsten Hebelwirkung in Bards Kit (der Gesamtheit seiner Fähigkeiten) und oft der Unterschied zwischen einem Bard, der Spiele gewinnt, und einem, der sie verliert.
