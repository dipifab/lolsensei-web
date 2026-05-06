---
title: "Corki Mid Build & Guide — Patch 16.9"
slug: "corki-mid"
language: "de"
patch: "16.9"
champion: "corki"
role: "mid"
last_updated: "2026-05-02"
description: "Corki Mid Guide für League of Legends Patch 16.9: Hybrid-Marksman-Build, Runen, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Profi-Tipp."
quick_learn:
  champion_dd_id: "Corki"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hybrid"
  abilities:
    - key: "P"
      name: "Hextech Munitions"
      description: "Ein Teil des Auto-Attack-Schadens wird zu true damage. Konstanter DPS, der Armor und Magic Resist ignoriert — der Grund, weshalb du Attack Speed und On-Hit stackst."
      dd_spell_id: "Corki_Passive"
    - key: "Q"
      name: "Phosphorus Bomb"
      description: "Flächenbombe mit magischem Schaden, die Gegner kurz aufdeckt. Für Last-Hits beim Zonen, zum Bush-Checken und zum Eröffnen jedes Poke-Trades."
      dd_spell_id: "PhosphorusBomb"
    - key: "W"
      name: "Valkyrie"
      description: "Kurzer Dash mit Feuerspur. Deine einzige Mobilität: zum Fliehen, Gap-Closen oder Skillshot-Ausweichen. Verschwende ihn nicht für Waveclear."
      dd_spell_id: "CarpetBomb"
    - key: "E"
      name: "Gatling Gun"
      description: "Gechannelter Kegel vor Corki, der Schaden macht und Armor sowie Magic Resist senkt. Bringt DPS und weicht Ziele für die R-Missiles auf."
      dd_spell_id: "GGun"
    - key: "R"
      name: "Missile Barrage"
      description: "Langstrecken-Missile mit Aufschlagsexplosion. Bis zu 7 Stacks; jede 3. ist eine Big One mit extra Burst. Dein Hauptpoke und Execute-Tool."
      dd_spell_id: "MissileBarrage"
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3004", name: "Manamune" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "3046", name: "Phantom Dancer" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "gegen Multi-Dash-Assassinen (Zed, Akali, Talon): die Stasis stoppt ihren Burst, sodass Team oder W dich rausholen"
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "gegen Frontline mit 2+ Tanks (Sion, Ornn, Maokai): schwere Armor Pen, damit Autos und R-Missiles weiter durchgehen"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "gegen schweren AP-Burst (LeBlanc, Veigar, Syndra): der Magieschild absorbiert eine Full Combo, du kannst W rausgehen"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "gegen Teams mit 3+ Hard CC (Stuns, Roots): Boots wechseln, wenn Chain CC mehr wiegt als Magic Penetration"
  base_combo: ["Q", "AA", "R", "E", "AA"]
  win_condition: "Skale hinter Minions zu Trinity Force und Manamune, dann reibe Squishies mit R-Poke auf Maximalreichweite ab. Pickst isolierte Ziele in Rotationen, während dein Team Objective-Fenster hält."
  weakness: "Squishy mit nur einem Dash. Mobile Assassinen mit mehreren Gap-Closern überrollen ihn vor zwei Items, und projektil-blockende Abilities (Yasuo Wind Wall, Braum E) killen den Poke."
  runes:
    primary_tree: "Inspiration"
    primary_tree_dd_id: 8300
    keystone:
      dd_id: 8369
      name: "First Strike"
      icon_path: "perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png"
    primary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Inspiration primary: First Strike belohnt Corki dafür, jeden Trade mit Q oder R zu eröffnen, und wandelt diesen Anfangsschaden in Bonusgold um, das die greedy Trinity + Manamune Build finanziert. Magical Footwear, Biscuit und Cosmic Insight verlängern den Early-Sustain."
    secondary_rationale: "Sorcery secondary: Manaflow Band ist Pflicht, weil R-Missiles Mana kosten und du sie in der Lane spammst; Gathering Storm gibt gratis AP-Scaling, das den Magieschaden auf Q und der Big One Missile im Late Game pusht."
    secondary_alternative: "Gegen schwere Poke-Lanes (Xerath, Vel'Koz, Zoe), in denen du nicht in HP zurückfallen darfst, swap Sorcery gegen Resolve mit Second Wind (passive HP-Regen unter Harass) und Overgrowth (Max-HP-Scaling) für sichereres Skalieren."
matchup_draft:
  pick_into:
    - examples: ["veigar", "anivia", "karthus", "cassiopeia"]
      archetype: "Immobile Mages ohne Dash"
      reason: "Corkis R reicht 1225 Einheiten und seine W gibt ihm den einzigen Mobilitätsvorteil der Lane. Ziele ohne Dash oder Stealth fressen wiederholten R-Poke und können die Fenster mit W in Cooldown nicht bestrafen."
    - examples: ["xerath", "vel-koz"]
      archetype: "Artillery Mages mit langen Channels"
      reason: "Corki matcht ihre Reichweite mit R und hat zusätzlich einen Dash, um lange Channels (Xerath R, Vel'Koz R) zu unterbrechen. Sie können ihn nicht all-innen, und Trades begünstigen die Seite mit Mobilität."
    - examples: ["annie", "syndra"]
      archetype: "Burst-Mages mit kurzer Reichweite"
      reason: "Ihr Kill-Threat startet innerhalb der Auto-Attack-Reichweite, genau dort, wo Corkis True-Damage-Passive plus Trinity Force sie outscaled. Pre-6 outpoke mit R, post-6 sidesteppst du ihren Stun mit W."
  counterpicks:
    - examples: ["zed", "talon", "akali", "qiyana"]
      archetype: "Mobile Assassinen mit mehreren Gap-Closern"
      reason: "Corki hat nur einen Dash (W) mit langem Cooldown. Multi-Dash-Kits dringen in seine Cast-Range ein, bevor W zurück ist, und bursten ihn durch die Trinity-HP, vor allem vor zwei Items."
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall Projektil-Blocker"
      reason: "Wind Wall frisst Q und die gesamte R-Missile-Barrage, was zwei Drittel von Corkis Schaden aus dem Trade nimmt. Auch wenn er HP gewinnt, sind die Cooldown-Kosten des Trades brutal."
    - examples: ["fizz", "kassadin"]
      archetype: "Untargetable / Blink-Escapes"
      reason: "Fizz E und Kassadin R lassen sie eine committete Combo dodgen und dann auf Corki re-engagen, wenn seine W down ist. Er hat keinen Follow-up-Burst, sobald sie untargetable werden."
---

## Überblick

Corki ist ein Hybrid-Marksman (Ranged Auto-Attack-Carry, der physischen und magischen Schaden mischt), der die Mid-Lane wie ein Long-Range-Artillery-Champion spielt: er wird mit jedem Item stärker (er "skaliert"), reibt Gegner-HP aus großer Distanz mit **Missile Barrage (R)** ab ("Poke" = Chip-Schaden außerhalb ihrer Reichweite) und finisht squishy Ziele mit Auto-Attacks, sobald **Trinity Force** steht. Seine **Hextech Munitions (P)** verwandelt einen Teil jedes Auto-Attacks in true damage (Schaden, der Armor und Magic Resist ignoriert), also zählen Attack Speed und On-Hit-Stats genauso viel wie reines AD oder AP. Er ist in der Mid-Lane, weil die zweiseitigen River-Ganks (Überraschungsangriffe vom Jungler) seinen **Valkyrie (W)**-Dash begünstigen und weil R-Missiles die Side-Lanes vom Mapzentrum aus poken können.

Game Plan in einem Satz: stacke (sammele) Mana auf Manamune, um es zu Muramana upzugraden, shove die Waves (töte Minions schnell, um die Wave nach vorn zu drücken) mit **Phosphorus Bomb (Q)** und R, und nutze jedes Cooldown-Window (die Sekunden, in denen deine Spells bereit sind), um die HP des gegnerischen Laners abzuchippen, damit dein Jungler diven (unter Tower töten) kann. Skill-Expression sitzt im R-Aim — lese das Ziel (sage voraus, wohin es sich bewegt, und ziele dorthin) — und im Timing der Big One (jede 3. R ist eine stärkere Missile) für den Moment, wenn der Gegner am niedrigsten ist. **W** ist dein einziger Dash: missbrauchst du ihn, läuft dich jeder Assassine ab.

## Empfohlener Build

**Starter-Items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Die Blade gibt Lifesteal (ein Teil des verursachten Schadens heilt dich zurück), das mit der Auto-Attack-Passive zusammenpasst; skip Doran's Ring, außer du stehst in einer reinen Poke-Lane, in der Mana-Sustain wichtiger als Dueling ist.

**Core-Items (in Reihenfolge):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — Sheen (eine Komponente von Trinity) procct (löst einen Bonus-Schadenseffekt aus) auf jeder Q und jeder R-Missile, plus AD, Attack Speed, Ability Haste (Cooldown-Reduktion) und Movement Speed. Der größte Power Spike des Champions.
2. ![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) **Manamune** — Manamune verwandelt sich langsam in eine stärkere Version namens Muramana, je mehr Mana du ausgibst; einmal "stacked" (komplett verwandelt) gibt es Bonus-Schaden auf jeden Auto und jede Mana-kostende Ability, R-Missiles eingeschlossen.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flache Magic Penetration (ignoriert einen Teil der gegnerischen Magic Resist) pusht Q- und R-Schaden.
4. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — dein erster Auto-Attack auf einen Gegner ("energized auto") macht Bonus-Schaden und reicht weiter als die normale Range. Der Crit Chance passt zum Trinity-Statprofil.
5. ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — Attack Speed für sustained DPS durch **Gatling Gun (E)** und den On-Hit-True-Damage der Passive.

**Situative Items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — gegen Multi-Dash-Assassinen (Zed, Akali, Talon): die Stasis stoppt ihr Burst-Window, damit Team oder W dich retten.
- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — gegen Frontline mit 2+ Tanks (Sion, Ornn, Maokai): schwere Armor Pen, damit Autos und R-Missiles weiter durchschneiden.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — gegen schweren AP-Burst (LeBlanc, Veigar, Syndra): der Magieschild absorbiert eine Full Combo und lässt dich W rausgehen.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — wechsle die Sorcerer's, wenn das gegnerische Team 3+ Hard CC (Stuns, Roots) hat und Chain CC mehr wiegt als Magic Penetration.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** ist Default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**, wenn die Team Comp CC-lastig ist.

**Skill-Reihenfolge:** Maxe **Q** zuerst (Poke und Waveclear), **E** als Zweites (DPS und Resistance Shred), **W** zuletzt (Utility). Punkt in **R** auf Stufe 6, 11 und 16.

**Runen:** Primary **Inspiration** mit **First Strike**, **Magical Footwear**, **Biscuit Delivery** und **Cosmic Insight**. Secondary **Sorcery** mit **Manaflow Band** und **Gathering Storm**, oder **Resolve** mit **Second Wind** und **Overgrowth** gegen schwere Poke-Lanes.

## Wichtige Matchups

- **Yasuo / Yone:** Sie blocken deine Q und R-Missiles mit Wind Wall. Halte Q zurück, bis sie ihre Abilities pushen, halte R, bis Wind Wall in Cooldown ist, und trade (tausche Schaden) niemals auf Melee-Range, wo sie mit E (Dash) auf die Minions neben dir springen können.
- **Akali / Zed:** Diving-Threats (Champions, die unter Tower auf dich springen können, um zu killen). Kauf ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** nach Trinity Force; gib W niemals in einem Trade aus, wenn ihre Dash-Kette noch verfügbar ist.
- **Veigar:** Matche die Range mit R, dodge sein W (ein langsam wachsender Käfig, der dich an Ort und Stelle einsperrt), und vermeide Auto-Trades innerhalb seines E-Rings (ein Stun-Ring, der auslöst, wenn du ihn überquerst). Seine Q-Stacks skalieren unendlich (mehr Kills = mehr permanente AP), beende die Lane vor Minute 25.
- **Twisted Fate:** Ein Roaming-Race (beide Champions versuchen, die Lane zuerst zu verlassen, um Teamkollegen zu helfen). Pushe die Wave mit Q, bevor er Stufe 6 erreicht, pinge den gegnerischen Jungler, wenn seine R up ist, und W weg von einem Gold-Card-Ziel statt den Stun zu fressen.
- **Galio:** Bestrafe ihn pre-6, indem du die Wave killst, die er mit Melee-Last-Hits nicht matchen kann (Galio ist Melee, du Ranged). Post-6 ist sein R ein globales Engage-Tool — gruppe nur dann mit deinem Team, wenn du R-Missiles auf Stack hast, um seine Ankunft zu peelen (ihn von deinen Backline-Carries fernzuhalten).

## Power Spikes & Siegbedingungen

- **Stufe 2:** Mit Q + W oder Q + E kannst du einen verpassten Last-Hit mit einem Q-AA-AA-Trade ("AA" = Basic Auto-Attack) bestrafen und entweder mit W disengagen oder follow-uppen, wenn ihr Flash down ist.
- **Stufe 6:** Die erste **Missile Barrage (R)** schaltet Side-Lane-Pressure frei (die Option, Mid zu verlassen und Top oder Bot zu bedrohen). Mit R-Stocks plus W kannst du nach Bot roamen, zwei Missiles plus eine Big One in einen 1v1-Trade droppen und mit W zur Wave zurück.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force fertig (~ Minute 12-14):** Sheen procct auf jeder Q und jeder R-Missile, was Poke in Kill-Threat verwandelt. Das ist der Moment, einen low-HP-Laner mit Q-AA-R-AA all-in zu nehmen (volles Commit zur Kill, kein Rückzug).
- **![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) Manamune stacked (~ Minute 18-22):** Muramana fügt Bonus-Schaden auf jede Mana-Aktion hinzu; Teamfight-Schaden verdoppelt sich grob im Vergleich zum Pre-Stack. Erzwinge Objective-Fights (Drake, Baron) hier.

## Häufige Fehler

- **R off cooldown für Waveclear spammen.** R-Missiles sind ein endlicher Stack; entleerst du sie auf Minions, hast du im nächsten Teamfight zero Burst im schlechtesten Moment. Pushe Waves mit Q + Auto-Attacks; spare 4+ Missiles für Objectives.
- **W aggressiv ohne Follow-up nutzen.** W ist deine einzige Flucht. In den Dash zu gehen, um eine Kill abzuschließen, die noch einen Auto brauchte, ist genau, wie Corki stirbt — kannst du sie mit dem verbleibenden Mana plus Cooldowns nicht killen, committe nicht (geh nicht voll rein).
- **Auto-Trade auf Melee-Range.** Der True Damage der Passive aus der Nähe wirkt verlockend, aber Corkis HP-Pool ist squishy (niedrig und zerbrechlich, wie ein ADC). Bleib auf R-Range, wenn der Laner Gap-Closer up hat.
- **![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes gegen ein CC-lastiges Team kaufen.** Magic Penetration ist verschwendet, wenn du den Fight stunned verbringst. Sorcerer's nur, wenn ihr CC-Count niedrig ist; sonst swap auf Mercury's Treads.
- **Mit leeren R-Stocks roamen.** Ein Roam ohne 2 Missiles ist ein Coin Flip. Warte die 8-12 Sekunden für die Stocks, bevor du den River überquerst; dieses einzelne Delay ist der Unterschied zwischen einer Kill und der Wave umsonst zu verlieren.

## Fortgeschrittener Tipp

Tracke und nutze den **Big One**-Rhythmus aus. Jede 3. R-Missile (die "Big One") macht deutlich mehr Schaden als die zwei regulären. Vor einem Teamfight zähle deine gestockten Missiles — ist die nächste eine Big One, spare sie für das Priority-Target; hast du sie gerade verbraucht, schieße die zwei Filler-Missiles in die Wave oder einen Tower, damit die Big One bereit zum Engage nachlädt. Spieler, die R blind feuern, verschwenden Big Ones auf Minions; Spieler, die den Count tracken, one-shotten Squishies (low-HP-Carries), wenn es zählt.
