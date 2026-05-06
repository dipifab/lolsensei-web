---
title: "Gwen Top Build & Guide — Patch 16.9"
slug: "gwen-top"
language: "de"
patch: "16.9"
champion: "gwen"
role: "top"
last_updated: "2026-05-02"
description: "Gwen Top Guide für League of Legends Patch 16.9: Starter, AP-Bruiser-Core-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Gwen"
  difficulty: 2
  damage_type: "magic"
  champion_class: "AP Bruiser / Skirmisher"
  abilities:
    - key: "P"
      name: "A Thousand Cuts"
      description: "Auto-Attacks fügen magischen Bonusschaden basierend auf max HP des Ziels zu. Gwen heilt einen Teil des Schadens an Champions mit diesem Effekt."
      dd_spell_id: "Gwen_Passive"
    - key: "Q"
      name: "Snip Snip!"
      description: "Scherenkegel mit bis zu 6 Schnitten. Der Mittelkegel macht True Damage und reapplied die Passive bei jedem Schnitt — Anti-Tank-Tool."
      dd_spell_id: "GwenQ"
    - key: "W"
      name: "Hallowed Mist"
      description: "Setzt eine Nebelzone für 4 Sekunden. Gegner außerhalb können sie nicht targeten — nur wer in den Nebel tritt, trifft sie. Defensiver Reset."
      dd_spell_id: "GwenW"
    - key: "E"
      name: "Skip 'n Slash"
      description: "Kurzer Dash mit Attack Speed, Auto-Range und On-Hit AP für ein paar Sekunden. Cooldown wird teils erstattet bei Champion-Treffer."
      dd_spell_id: "GwenE"
    - key: "R"
      name: "Needlework"
      description: "Wirft eine Nadelsalve, die slowt und die Passive aufträgt. Bis zu 2 weitere Recasts, jede Salve macht mehr Schaden als die vorige."
      dd_spell_id: "GwenR"
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
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "gegen Diver und Assassins (Camille, Fiora, Rengar) — 2.5s Stasis deckt den W-Cooldown und bricht ihr Burst Window"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "gegen Single-Target Magic CC (Vladimir Pool, Lissandra R, Malzahar Suppression) — Shield blockt eine Fähigkeit"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "gegen Ranged-Poke-Matchups (Vayne top, Teemo) — extra Ability Haste und Movement Speed, um die Lücke zu schließen"
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "gegen 4+ Tanks/Bruiser im Gegnerteam — ersetzt Riftmaker für Prozent-Max-HP-Burn ab Minute 1 jedes Fights"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "Überlebe die Early Lane, completiere Riftmaker um Minute 18, dann Splitpush in der Side Lane, um 2 Gegner zu binden. Im Teamfight schmelze die Frontline mit dem On-Hit-True-Damage von Q."
  weakness: "Schwacher Early (wenig Burst, kein Ranged Waveclear). Hard countered von Ranged Tops, True-Damage-Outscalern wie Fiora und harten Point-and-Click-CC-Ketten, die W blockieren."
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
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision als Primary: Conqueror stackt in Gwens langen Q + Auto Trades und gibt adaptiven Schaden + Heal. Triumph belohnt Multikills, Legend: Alacrity boostet das On-Hit-Window von E, Last Stand fügt Schaden bei niedrigem HP hinzu."
    secondary_rationale: "Resolve als Secondary: Second Wind regeneriert HP nach Ranged-Harass (Schlüssel gegen Ranged Tops), Overgrowth skaliert rohes HP ins Lategame, wo Gwens W-Mist-Fights glänzen."
    secondary_alternative: "Gegen Heavy-AP-Matchups ohne Poke, swap Resolve auf Sorcery mit Manaflow Band (Mana-Sustain für Q-Spam) und Transcendence (mehr Ability Haste für mehr E-Refunds)."
matchup_draft:
  pick_into:
    - examples: ["sett", "garen", "darius", "tryndamere"]
      archetype: "Langsame Melee-Bruiser ohne Ranged Poke"
      reason: "Q applied prozentualen Max-HP-True-Damage, der Armor ignoriert. Lange 1v1s im W-Mist zerlegen tanky Melee-Fighter, die nicht kiten oder disengagen können."
    - examples: ["shen", "ornn", "cho-gath"]
      archetype: "Tanks, die auf Resistenzen skalieren"
      reason: "Q-True-Damage und On-Hit-AP von E ignorieren sowohl Armor als auch Magic Resist. Tanks stacken Defenses, die sie komplett umgeht."
    - examples: ["irelia", "jax"]
      archetype: "Item-abhängige Scaling-Fighter"
      reason: "Ihre Power-Spike-Fenster kommen bei Item 2-3 um Minute 25. Gwen erreicht Riftmaker zuerst und snowballt die Side Lane, bevor sie ihren Core haben."
  counterpicks:
    - examples: ["fiora", "riven"]
      archetype: "True-Damage-/Early-Game-Outscaler"
      reason: "Fioras Vitals machen ebenfalls True Damage und ihre Q-Dashes ignorieren den W-Mist-Range. Riven outdamaget Gwen auf Level 1-3, bevor die Passive online ist."
    - examples: ["teemo", "vayne", "quinn"]
      archetype: "Ranged Tops, die aus Auto-Range kiten"
      reason: "Gwen braucht Melee-Range, um On-Hit-AP und Q-True-Damage zu applien. Ranged Kiter canceln ihren Engage und verhindern jeden sauberen Trade."
    - examples: ["malphite", "pantheon"]
      archetype: "Point-and-Click-Stun-Engager"
      reason: "Ihre CC-Ketten blockieren Gwen aus der W-Aktivierung. Wenn sie mitten im Dash gestunt wird, frisst sie die volle Combo, bevor der Mist drop."
---

## Überblick

Gwen ist eine AP Bruiser — ein Melee-Champion, der über Ability Power (die AP-Stat) skaliert statt über Attack Damage und ein paar Treffer im Nahkampf einsteckt, statt aus Ranged zu bursten. Sie ist außerdem eine "Skirmisher": Sie gewinnt verlängerte Duelle, anstatt ein Ziel in zwei Sekunden zu killen, wie es ein Assassin täte. Ihr Kit lässt sie Tanks mit **True Damage** (Schaden, der sowohl Armor als auch Magic Resist ignoriert) zerlegen, durch ihre Passive im Fight heilen und sich mit einem Dash mit teilweise erstattetem Cooldown repositionieren. Sie lebt in Side Lanes und 1v1-Duellen.

Der Game Plan: Überlebe die ersten 10 Minuten ohne Kills abzugeben, completiere dein erstes großes Item um Minute 12-14 und beginne dann zu splitpushen — drücke eine Side Lane allein, damit das gegnerische Team 2 Spieler schicken muss, um dich zu stoppen. Um Minute 25 mit 3 Items kannst du in Teamfights eintreten und Auto-Attacks (Basic Attacks, "AA") an der gegnerischen Frontline (die Tanks/Bruiser vor ihrem Team) aneinanderreihen, bis sie zerschmilzt.

## Empfohlener Build

**Starting Items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** in Matchups gegen Ranged Tops oder schweren Poke (kontinuierlicher Chip Damage aus der Distanz). ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion** in entspannteren Melee-Matchups, wenn du früh mit AP scalen willst.

**Core Items (in Reihenfolge):**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — dein großer Spike. Nach 2 Sekunden im Combat wandelt sich ein Teil deines Schadens in True Damage um (die "Void Corruption"-Passive) und du erhältst "Omnivamp" (du heilst einen Teil jedes Schadens, den du machst — Fähigkeiten und Auto-Attacks gleichermaßen). Das passt zu Gwens Playstyle der langen Fights besser als jedes andere Item.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flache Magic Penetration, die deinen Schaden gegen Squishies härter durchkommen lässt (Champions mit niedriger Defense, typischerweise die gegnerischen Carries).
3. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — Attack Speed plus AP plus eine Passive, die jedem Auto-Attack magischen Bonusschaden hinzufügt. Kombiniert mit **E** (das On-Hit-Window von Skip 'n Slash, in dem jeder Auto-Attack auch AP-basierten magischen Schaden applied) wirst du zu einem Sustained-DPS-Turm in langen Fights.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multipliziert dein gesamtes AP. Das Lategame-Scaling-Item, das dich von "tanky DPS" zur echten Carry macht.

**Situational Items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — gegen Diver (Champions, die auf deine Backline-Carries springen, um sie zu killen) und Assassins (Camille, Fiora, Rengar). Der Active gibt dir 2.5 Sekunden Stasis (du wirst untargetable, kannst aber auch nichts tun), genug, um ihr Burst Window zu brechen — die 1-2 Sekunden, in denen sie versuchen, dich zu deleten.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — gegen Single-Target Magic CC ("Crowd Control": Stuns, Roots, Charms — alles, was deinen Champion auf der Stelle blockt). Vladimir Pool gefolgt vom Ult, Lissandra **R**, Malzahar Suppression. Der Shield blockt eine gegnerische Fähigkeit komplett.
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — gegen Ranged-Poke-Matchups (Vayne, Teemo). Extra Ability Haste (schnellere Cooldowns) und Movement Speed helfen dir, sie wirklich zu erreichen.
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — gegen 4+ Tanks/Bruiser im gegnerischen Team. Ersetzt Riftmaker als erstes Item, wenn du Prozent-Max-HP-Burn ab Minute 1 jedes Fights brauchst.

**Boots:** Sorcerer's Shoes ist Default. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** wenn das gegnerische Team 3+ AD-Bedrohungen (Attack Damage) inklusive Jungler hat. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** gegen schwere CC-Compositions (3+ Stuns oder Knockups).

**Skill Order:** Maxe **Q** zuerst (True Damage und AP-Scaling), maxe **E** als zweites (Cooldown und Schaden), lass **W** für zuletzt. **R** auf Level 6, 11, 16. Priorität auf Level 1: **Q** für die Last-Hits (Minions töten); Level 2 nimm **E** für den Dash; Level 3 nimm **W** für Sicherheit.

**Runes:** Primary **Precision** mit **Conqueror** (ein Keystone, der in langen Fights stackt und adaptiven Schaden + Heal gibt), **Triumph**, **Legend: Alacrity**, **Last Stand**. Secondary **Resolve** mit **Second Wind** und **Overgrowth**. Stat Shards: Adaptive Force, Adaptive Force, Health Scaling.

## Wichtige Matchups

- **Fiora:** Hartes Matchup. Ihr **Q** macht ebenfalls True Damage auf ihren "Vitals" — den vier leuchtenden Punkten um deinen Champion herum, die, mit ihrem **Q** getroffen, True Damage triggern. Ihr **R** entfernt jeden Cleanse-Effekt (ein Buff, der Crowd Control auf dir bricht). Nimm ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, halte **W** für den Moment, wenn ihr **R** aktiviert wird, und trade keine Auto-Attacks auf Level 1-2 (ein "Trade" = ein kurzer Schlagabtausch, in dem ihr beide reingeht, euch trefft und wieder rausgeht); sie outscalt die meisten Melee-Bruiser im reinen 1v1.
- **Camille:** Ausgeglichen bis schlecht. Ihr Hookshot (**E**, ein Long-Range-Greifhaken, der sie zu dir schwingt) umgeht deinen **W**-Mist — sie kann von außerhalb des Schutzbereichs des Mists engagen ("Engage" = der Moment, in dem ein Champion sich committed, um einen Fight zu starten). Halte **W** für den Moment, nachdem sie ihren Hookshot landet, und tritt nur heraus, wenn ihr **W** (True-Damage-Cone auf ihrem Empowered-Auto) im Cooldown ist.
- **Sett:** Vorteilhaft. Auch er ist Bruiser, hat aber keine Antwort auf deinen prozentualen Max-HP-True-Damage von **Q** in langen Trades. Skip den frühen All-In (der Fight auf Level 1-3, in dem sich jemand voll auf eine Kill committed), scale bis zu ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker**, dann 1v1 in der Side Lane.
- **Darius:** Ausgeglichen. Vermeide den Range seines **E**-Pulls; geh nur innerhalb deines **W**-Mists nach vorne. Nutze **E** zum Disengage (= aus dem Fight rausbrechen, um zu fliehen), wenn seine Passive-Bleed-Stacks 4 erreichen — seine Passive applied einen Damage-over-Time-Bleed auf seinen Auto-Attacks, und der 5. Stack ist der Empowered-Stack, der seinen Bonusschaden triggert.
- **Teemo:** Schlecht. Seine Ranged-Auto-Attacks zerlegen dich außerhalb des **W**, und sein **Q** blendet deine Auto-Attacks (die Hauptquelle deines Schadens). Nimm ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, frage deinen Jungler nach einem frühen Gank (ein Überraschungsbesuch des Junglers, der dir hilft, eine Kill zu sichern), und spiele auf Scaling — die Lane gewinnst du nicht.

## Power Spikes & Siegbedingungen

- **Level 6:** Erste **R** wird freigeschaltet. Die Nadelsalve applied den prozentualen Max-HP-Magic-Damage deiner Passive auf jeden getroffenen Champion, und der Slow kettet deine Auto-Attacks (du kannst weiter zuschlagen, während sie geslowt sind). Erzwinge einen Fight mit Jungler-Hilfe um Minute 8-9.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ Minute 18-20):** Der Omnivamp-+-True-Damage-Spike. Jetzt kannst du die meisten Top-Laner 1v1en und eine Side Lane splitpushen, bis sie zwei Spieler schicken, um dich zu stoppen.
- **![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth complete (~ Minute 26-28):** DPS-Spike. Mit aktivem **E** feuern deine Auto-Attacks viel schneller und applien On-Hit-AP — der Moment, in Teamfights einzusteigen statt nur zu splitpushen.
- **3 Items + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ Minute 32+):** Carry-Phase. Deine Auto-Attacks zerlegen 25%+ HP pro Treffer auf der gegnerischen Frontline. Jeder Teamfight, in dem dein Team dich beschützt ("peelt" Gegner von dir weg), endet im Sieg.

## Häufige Fehler

- **Zu lange im W stehen.** Hallowed Mist ist ein 4-Sekunden-Window, kein permanenter Shield. Aktiviere ihn in dem Moment, in dem der Gegner sich auf hartes CC committed (ein Stun oder Root); ein präemptives **W** verschwendet den Cooldown und lässt dich für die nächsten 18-22 Sekunden exponiert.
- **Q auf die Wave zum Poken.** Der Manakosten deines **Q** sind hoch und der Cone hat kurze Reichweite (450 Units). Halte **Q** für Momente bereit, in denen du einen Champion im Zentrum des Cones treffen kannst (die True-Damage-Zone), nicht für Chip Damage auf Minion-Wagen.
- **E nach vorne werfen bei vollem HP.** Dein **E** ist Engage und Panik-Button zugleich. Verschwendest du es nach vorne bei vollem HP und dann taucht der gegnerische Jungler auf, hast du keinen zweiten Dash zum Fliehen.
- **Auto-Attack außerhalb der R-Range.** Wenn **R** up ist, kannst du insgesamt 3 Nadelsalven feuern. Bleib innerhalb von 1000 Units vom Fight-Rand, damit du **R** immer auf ein Low-HP-Ziel recasten kannst, statt in den Tod zu rennen.
- **![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) Mercury's Treads gegen kein CC kaufen.** Default-Boot ist ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes; wechsle nur dann zu Mercury's, wenn 3+ Hard-CC-Bedrohungen oder ein gefütterter AP-Mid-Laner da sind. Defensive Boots kosten dich ~20% deines Schadensoutputs.

## Fortgeschrittener Tipp

Nutze den **W**-Mist, um Skillshots auszufaken (= Fähigkeiten, die du manuell als Linie oder Fläche zielen musst, das Gegenteil von Point-and-Click): Wenn ein Gegner mit einem Long-Range-Stun oder -Root (Lissandra **E**, Sett **W**, Morgana **Q**) gerade die Cast-Animation aufzieht, droppe **W** am Rand seiner Cast-Range und geh hindurch. Der Mist macht dich von außen untargetable — sie fressen den Cast oft und du bekommst 4 freie Sekunden CC-freier Auto-Attacks. Der Trick liegt im Timen von **W** auf ihrem Wind-Up-Frame (die Animation, bevor der Spell rausgeht), nicht erst, nachdem sie sich schon committed haben.
