---
title: "Gwen Jungle Build & Guide — Patch 16.9"
slug: "gwen-jungle"
language: "de"
patch: "16.9"
champion: "gwen"
role: "jungle"
last_updated: "2026-05-02"
description: "Gwen Jungle Guide für League of Legends Patch 16.9: Clear-Path, Scuttle- und Drake-Timings, Gank-Routen, AP-Bruiser-Build, Matchups, Power Spikes und häufige Fehler."
quick_learn:
  champion_dd_id: "Gwen"
  difficulty: 2
  damage_type: "magic"
  champion_class: "AP Bruiser / Skirmisher"
  abilities:
    - key: "P"
      name: "A Thousand Cuts"
      description: "Auto-Attacks fügen magischen Bonusschaden basierend auf max. HP des Ziels zu. Gwen heilt sich für einen Teil des Schadens an Champions."
      dd_spell_id: "Gwen_Passive"
    - key: "Q"
      name: "Snip Snip!"
      description: "Scherenhieb im Kegel mit bis zu 6 Schnitten. Der zentrale Kegel verursacht True Damage und triggert die Passive bei jedem Schnitt — Camp-Clear und Anti-Tank."
      dd_spell_id: "GwenQ"
    - key: "W"
      name: "Hallowed Mist"
      description: "Erzeugt eine Nebelzone für 4 Sekunden. Gegner außerhalb können sie nicht anvisieren — nur wer in den Nebel tritt, trifft sie. Defensiver Reset und Gank-Setup."
      dd_spell_id: "GwenW"
    - key: "E"
      name: "Skip 'n Slash"
      description: "Kurzer Dash mit Attack Speed, Angriffsreichweite und On-hit AP für ein paar Sekunden. Cooldown wird teilweise erstattet bei Champion-Treffer — Gank-Closer."
      dd_spell_id: "GwenE"
    - key: "R"
      name: "Needlework"
      description: "Wirft eine Nadelsalve, die verlangsamt und die Passive triggert. Bis zu 2x nachfeuerbar, jede Salve fügt mehr Schaden zu als die vorherige."
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs AD-Assassinen / Diver (Zed, Khazix, Rengar) — 2,5s Stasis deckt W-Cooldown und bricht das Burst-Window"
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "vs Comps mit 4+ Tank/Bruiser — ersetzt Riftmaker für dauerhaften %-max-HP-Burn ab Minute 1"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs magische Single-Target-CC (Lissandra R, Malzahar Suppression, Veigar Stun)"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "vs Kite-Comps (Vayne, Ezreal) — extra Ability Haste und Movement Speed, um an mobilen Carries zu kleben"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "Clear Minute 3-30, Riftmaker um Minute 16 fertig, erzwinge Objective-Fights ab Level 6 mit W-Mist-Setup. In Teamfights schmilzt sie die Frontline mit on-hit Q True Damage im 4-Sekunden-Mist-Fenster."
  weakness: "Leichtes Invade-Ziel auf Level 1-3 (kein Burst, nur ein Dash). Hard-Counter durch früh aggressive Jungler wie Lee Sin und Elise, die ihren langsamen ersten Clear bei Invade bestrafen."
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
    primary_rationale: "Precision primär: Conqueror stackt während langer Clears und Q + Auto-Skirmishes und gibt adaptiven Schaden plus Heal. Triumph belohnt Multi-Kill-Ganks, Legend: Alacrity boostet das On-hit-Window von E, Last Stand addiert Schaden bei niedrigem HP."
    secondary_rationale: "Resolve sekundär: Second Wind regeneriert HP zwischen Camps und nach Invades, Overgrowth skaliert rohes HP ins Late Game, wo Gwens W-Mist-Teamfights glänzen."
    secondary_alternative: "Vs poke-lastige AP-Mids tausche Resolve gegen Sorcery mit Manaflow Band (Mana-Sustain für Q-Clears) und Transcendence (mehr Ability Haste für mehr E-Refunds und schnelleren R-Cooldown)."
matchup_draft:
  pick_into:
    - examples: ["amumu", "sejuani", "skarner", "zac"]
      archetype: "Tank-Jungler ohne hohen Single-Target-Schaden"
      reason: "Q wendet True Damage in Prozent des max-HP an und ignoriert Armor; Tanks haben riesige HP-Pools, die sie in 3-4 Q-Treffern in einem dauerhaften 1v1 in der W-Mist zerlegt."
    - examples: ["master-yi", "shaco"]
      archetype: "Squishy Assassinen ohne Disengage"
      reason: "Die W-Mist negiert ihren Target-Lock während eines All-ins. Sie commiten, fressen den Q-True-Damage-Kegel im Mist und haben kein zweites Escape, weil sie ihren Dash schon verbraucht haben."
    - examples: ["kha-zix", "rengar"]
      archetype: "Assassinen mit Burst-Window"
      reason: "Ihr Burst-Combo kommt in 1,5 Sekunden, aber die W-Mist nimmt sie mitten im Sprung aus der Target-Range. Sobald ihr Burst-Window verfehlt, gewinnt Gwen den verlängerten Trade leicht."
  counterpicks:
    - examples: ["lee-sin", "elise", "nidalee"]
      archetype: "Früh-Invader-Jungler"
      reason: "Gwen hat keinen Burst auf Level 1-3 und einen langsamen ersten Clear. Invader laufen in ihre Camps und töten sie, bevor die Passive in Stacks geht."
    - examples: ["kayn", "viego"]
      archetype: "Outscaler mit hoher Mobilität"
      reason: "Beide haben Mobility-Tools (Kayn Wand-Walk, Viego Dash on-hit), die die W-Mist-Reichweite ignorieren; sie outscalen Gwens Tempo in Late-Game-Skirmishes."
    - examples: ["kindred", "graves"]
      archetype: "Ranged-Kite-Jungler"
      reason: "Kindred und Graves auto-attacken von außerhalb der Schutzreichweite der W-Mist. Gwen muss ihr E commiten, um in deren Range zu kommen, und sie kiten ihren Dash mit eigenen Movement-Tools."
---

## Überblick

Gwen ist eine AP-Bruiser-Jungler — ein Melee-Champion, der mit Ability Power (der AP-Stat) skaliert, im Nahkampf einige Treffer einsteckt und lange Fights gewinnt, statt ein Ziel in zwei Sekunden wegzubursten wie ein Assassine. Als "Skirmisher" liegt ihr Spiel im verlängerten Duell: Sie zerlegt Tanks und Bruiser mit **True Damage** (Schaden, der sowohl Armor als auch Magic Resist ignoriert), heilt sich im Fight durch ihre Passive und resettet den Cooldown ihres Dashes, sobald sie einen Champion trifft. Ihr **W-Mist** ist die Signatur des Kits: eine 4-Sekunden-Zone, die sie für jeden außerhalb unangreifbar macht — ein einzigartiges Gank- und Counter-Engage-Tool.

Der Game Plan ist: ein sauberer erster Clear, Streit um den Scuttle (das kleine Monster im Fluss — gibt beim Töten Vision und einen Movement-Speed-Buff), Gank einer Lane mit niedriger Mobilität um Level 4-5 mit der W-Mist und dann Snowball — verwandle einen frühen Vorteil in einen viel größeren — auf den ersten Drake bei Minute 5-7. Gwen ist ein Mid-bis-Late-Game-Champion: Sie ist in den ersten 3 Minuten am schwächsten, also lass dich nicht am gegnerischen Red Buff (das kleine Camp, das einen Damage-over-Time-Effekt für Auto-Attacks gibt) erwischen, ohne dass dein Team Bescheid weiß.

## Empfohlener Build

**Starting Items:** ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** (das AP-freundliche Jungle-Pet — verbrennt gegnerische Champions mit on-hit Schaden während Ganks) plus **Smite** (der Summoner Spell, den jeder Jungler nimmt — ein schneller Burst-Angriff auf ein einzelnes Ziel, genutzt zum schnelleren Clearen von Monstern und zum Stehlen von Objectives wie Drake oder Baron).

**Core Items (in Reihenfolge):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — Quest-Upgrade aus deinem Jungle-Starter. Entwickelt sich um Minute 3-4 automatisch; der on-hit Pet-Schaden fügt deinen Auto-Attacks magischen Schaden hinzu, passend zu Gwens AP-Scaling.
2. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — dein Hauptitem. Nach 2 Sekunden im Combat wandelt sich ein Teil deines Schadens in True Damage um (die Passive "Void Corruption"), und du erhältst "Omnivamp" (heilst dich für einen Anteil jeglichen Schadens, den du machst — Fähigkeiten und Auto-Attacks). Gebaut für lange Fights, genau das, was Gwen will.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flache Magic Penetration (= ignoriert einen Teil des gegnerischen Magic Resist). Dein Schaden trifft härter gegen Squishies (Champions mit niedrigen Defenses, typischerweise die gegnerischen Carries).
4. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — Attack Speed plus AP plus eine Passive, die jedem Auto-Attack magischen Bonusschaden hinzufügt. Kombiniert mit **E** (das On-hit-Window von Skip 'n Slash, in dem jeder Auto-Attack zusätzlich AP-basierten magischen Schaden anwendet) wirst du in langen Fights zu einem dauerhaften DPS-Turm.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — AP-Multiplier fürs Late Game. Verwandelt Gwen von "Tanky DPS" in eine echte Carry.

**Situational Items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — vs AD-Assassinen / Diver (Zed, Kha'Zix, Rengar — Diver sind Champions, die auf deine Backline-Carries springen). Active gibt 2,5 Sekunden Stasis (du wirst unangreifbar, kannst aber auch nicht agieren) — lang genug, um ihr Burst-Window zu brechen und den W-Cooldown zu resetten.
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — vs Teams mit 4+ Tanks/Bruisern. Ersetzt Riftmaker als erstes Item, wenn du ab Beginn jedes Fights dauerhaften %-max-HP-Burn brauchst.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — vs magische Single-Target-CC (= "Crowd Control": Stuns, Roots, Charms, alles, was deinen Champion lockt). Lissandra **R**, Malzahar Suppression, Veigar Stun. Der Schild blockt eine feindliche Fähigkeit komplett.
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — vs Kite-Comps (Vayne, Ezreal). Extra Ability Haste plus Movement Speed, um an mobilen Carries zu kleben.

**Boots:** Sorcerer's Shoes als Default. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**, wenn das gegnerische Team 3+ AD-Bedrohungen hat. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** vs viel CC (3+ Stuns oder Knockups).

**Skill Order:** Maxe **Q** zuerst (True Damage und AP-Scaling — dein Haupt-Camp-Clearer), maxe **E** als zweites (Cooldown und on-hit Schaden), lasse **W** als letztes. Nimm **R** auf Level 6, 11, 16. Starte **Q** auf Level 1 für den sichersten ersten Clear (der Q-Kegel trifft das gesamte Pack kleiner Monster), nimm **E** auf 2 für Mobility zwischen Camps, dann **W** auf 3 für Sicherheit vor dem Scuttle.

**Runes:** Primär **Precision** mit **Conqueror** (ein Keystone, der in langen Fights stackt und adaptiven Schaden plus Heal gibt — perfekt für Gwens dauerhaftes DPS-Playstyle), **Triumph**, **Legend: Alacrity**, **Last Stand**. Sekundär **Resolve** mit **Second Wind** und **Overgrowth**. Stat Shards: Adaptive Force, Adaptive Force, Health Scaling.

## Wichtige Matchups

- **Lee Sin:** Hart früh, neutral spät. Er invadet stark auf Level 2-3, wenn Gwen noch kein W hat. Starte das Camp gegenüber von deinem Spawn (Red Buff bei Blue Side; Blue Buff bei Red Side), damit du weit weg von seinem typischen Invade-Path bist. Nach Level 6 outscalest du ihn in jedem 1v1 in der W-Mist.
- **Master Yi:** Free-Scaling-Matchup. Sein Alpha Strike (**Q**, ein Multi-Dash, der ihn kurz unangreifbar macht) ignoriert die Passive deiner W-Mist nicht — er bleibt von außerhalb des Mists ausgesperrt. Erzwinge Fights auf Level 6 um den Drake; sobald er mit Highlander commitet (seine **R** Ult, gibt enorme Attack Speed und Movement Speed), drop W und Q-spam ihn im Duell.
- **Sejuani:** Hartes Matchup. Ihre **R** ist Point-and-Click (= kein Zielen nötig, der Spell rastet einfach auf einem Ziel ein) und friert dich während deines **E**-Dashes ein. Warte, bis sie ihre **R** auf jemand anderem nutzt, dann commit mit W. Kaufe ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** früher als üblich.
- **Kha'Zix:** Ausgeglichen-favorabel. Er wird "Isolation Damage" evolven — Bonusschaden, wenn das Ziel keine Verbündeten in der Nähe hat — und deine Carries jagen. Die W-Mist bricht seinen Target-Lock während eines Leaps (sein Q-Dash). Wenn er **R**-Stealth + Q-Burst commitet, drop W auf die Carry statt auf dich, und der Schaden verfällt.
- **Kindred:** Schlechtes Matchup. Sie kitet (= bewegt sich rückwärts während sie attackiert und hält Distanz) deinen Dash mit ihrem **Q**-Dash, und ihre Ult-Zone (Lamb's Respite, ein Kreis, in dem Verbündete nicht sterben können) rettet jeden Teamkollegen, den du divest (= unter Turm verfolgst). Vermeide ihre Invade-Reichweite, nimm Objectives in den Cooldown-Fenstern ihres **R** und bitte den Top-Laner um Hilfe in Skirmishes.

## Power Spikes & Siegbedingungen

- **Level 3:** Erstes **W** wird freigeschaltet. Jetzt kannst du Lanes ganken — drop W auf den Laner, dash mit E rein, Q + AA im Mist. Der Mist verwehrt 4 Sekunden lang sauberes Targeting auf dich, das längste Gank-Schutz-Fenster der Jungle.
- **Level 6:** Erstes **R** freigeschaltet. Die Nadelsalve wendet den %-max-HP-Magieschaden deiner Passive auf jeden getroffenen Champion an, und der Slow verkettet deine Auto-Attacks. Erzwinge einen Drake-Fight oder Counter-Gank um Minute 8-9 — das Kit erreicht seinen ersten großen Spike.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ Minute 16-18):** Omnivamp- und True-Damage-Spike. Jetzt kannst du die meisten Squishies solo-diven und 1v2-Ganks überleben, wenn dein W up ist.
- **![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth fertig (~ Minute 24-26):** DPS-Spike. Mit aktivem **E** feuern deine Auto-Attacks viel schneller und applizieren On-hit AP — der Moment, in jeden Teamfight nahe Drake / Baron zu treten und dein Team für dich peelen zu lassen.
- **3 Items + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ Minute 30+):** Carry-Phase. Deine Auto-Attacks reißen 25%+ HP pro Treffer von der gegnerischen Frontline ab. Jeder Teamfight, in dem dein Team dich beschützt ("peelt" Gegner von dir weg), endet im Sieg.

## Häufige Fehler

- **Erster Clear auf derselben Seite wie der gegnerische Jungler.** Gwens erster Clear ist langsam und ihre frühen HP gering; ein Invade auf den zweiten Buff bedeutet meist einen verlorenen Flash oder einen Tod. Starte gegenüber dem gegnerischen Spawn, bis du seinen Path scoutest.
- **W zu früh in einem Gank aktivieren.** Der Mist ist ein 4-Sekunden-Fenster — droppst du ihn, bevor der Laner im Fight festgenagelt ist, geht der Gegner weg und dir bleibt nichts. Lande zuerst **E** + Auto, dann **W**, sobald die feindliche Reaktion startet.
- **Q auf das Camp von außerhalb des Kegels.** **Q**s Schadenszone ist die Mitte des Kegels (der True-Damage-Tick). Positioniere dich so, dass das Camp in den inneren 30 Grad des Bogens liegt — du verdreifachst dein DPS beim ersten Cast und clearst ~3 Sekunden schneller.
- **Smite-Flip auf Objectives ohne R.** Gwens Smite-Fight ist mittelmäßig, wenn **R** down ist. Erzwinge Objectives nur, wenn die Ult up ist und mindestens eine Nadelsalve für den gegnerischen Jungler reserviert ist.
- **Auto-Attacken außerhalb der R-Reichweite.** Wenn **R** up ist, hast du 3 Salven gesamt. Bleib innerhalb von 1000 Units vom Fight-Rand, damit du **R** immer auf ein Low-HP-Ziel recasten kannst, statt in den Tod zu rennen.

## Fortgeschrittener Tipp

Nutze den **W**-Mist, um Skillshots (= Fähigkeiten, die du manuell als Linie oder Fläche zielen musst) während Ganks zu fakten: Wenn ein gegnerischer Laner mit Long-Range-Stun oder Root (Lissandra **E**, Morgana **Q**, Veigar **E**) gerade auf deinen **E**-Dash reagieren will, drop **W** auf den Pfad zwischen euch direkt nach dem Eintreten in Range. Der Mist macht dich von außerhalb unangreifbar — sie fressen oft den Cast und du bekommst 4 Sekunden ungestörten Schaden. Der Trick ist, **W** auf der Wind-up-Animation zu timen (die Cast-Frames, bevor der Spell rauskommt), nicht erst, nachdem er bereits gelandet ist.
