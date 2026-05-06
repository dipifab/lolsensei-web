---
title: "Kindred Jungle Build & Guide — Patch 16.9"
slug: "kindred-jungle"
language: "de"
patch: "16.9"
champion: "kindred"
role: "jungle"
last_updated: "2026-05-05"
description: "Kindred Jungle Guide für League of Legends Patch 16.9: Mark-Jagd, On-Hit-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Kindred"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Skirmisher Jungler"
  abilities:
    - key: "P"
      name: "Mark of the Kindred"
      description: "Alle 4 Minuten erscheint ein Mark auf einem zufälligen Gegner (Champion oder Jungle Camp). Töten gibt einen permanenten Stack: Bonus AS, AD und Auto-Attack-Reichweite. Kern des Spielplans."
      dd_spell_id: "Kindred_Passive"
    - key: "Q"
      name: "Dance of Arrows"
      description: "Kurzer Dash + 3 schnelle Auto-Attacks auf die nächsten Ziele. Resettet den Auto-Timer. Nutze ihn für Clear, Reposition und um Auto-Ketten in Fights zu buffern."
      dd_spell_id: "KindredQ"
    - key: "W"
      name: "Wolf's Frenzy"
      description: "Wolf attackiert ein Gebiet ~8s, gibt AS und enthüllt Camps. Lamb sammelt Stacks beim Bewegen und Angreifen; voll geladen heilt der Auto sie. Toggle für Clear-Speed und Sustain."
      dd_spell_id: "KindredW"
    - key: "E"
      name: "Mounting Dread"
      description: "Skillshot, der das Ziel slow. Nach 4 Autos darauf fügt der nächste Angriff Schaden basierend auf fehlenden HP zu. Burst-Tool gegen Champions unter 50% HP."
      dd_spell_id: "KindredE"
    - key: "R"
      name: "Lamb's Respite"
      description: "Erzeugt eine heilige Zone: keine Einheit darin (Verbündete UND Gegner) kann unter 1 HP fallen für die Dauer, dann Heal am Ende. Reaktives Save-Tool. Niemals pre-casten."
      dd_spell_id: "KindredR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3091", name: "Wit's End" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
  situational_items:
    - dd_id: "3814"
      name: "Edge of Night"
      against: "gegen Single-Target-Lock-On-Ults (Malzahar R, Skarner R, Warwick R) — der Spell Shield blockt den Cast"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "gegen Hard-CC-Ketten (Leona + Lissandra, Sett R + Ashe R) — Aktiv cleansed und ermöglicht Reposition"
    - dd_id: "6676"
      name: "The Collector"
      against: "wenn du vorne liegst und das Gegnerteam keine Armor stackt — Execute unter 5% HP schließt Leads"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "gegen Heal-lastige Comps (Aatrox, Soraka, Dr. Mundo) — Grievous Wounds halbiert Sustain"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "gegen 3+ Hard-CC-Champions (Leona + Lissandra + Sejuani) — Tenacity verkürzt Stuns und Roots"
  base_combo: ["E", "Q", "AA", "AA", "AA", "R"]
  win_condition: "Stacke früh Marks. Jeder abgeschlossene Mark gibt permanent AS + AD + Reichweite — der Vorsprung snowballed (Kills → Stats → mehr Kills) bis zum 3-Item-Flanker, der jeden Brawler out-kited."
  weakness: "Squishy, kein Hard CC, R reaktiv mit langem CD. Hard-CC-Jungler, die Level 2-3 invaden (Lee Sin, Xin Zhao, Elise), töten dich vor dem ersten Mark; Tanks mit On-Hit-Mitigation ignorieren deinen DPS."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 9923
      name: "Hail of Blades"
      icon_path: "perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
    primary_rationale: "Domination + Hail of Blades feuert die ersten 3 Autos mit Maximalspeed — genau die Autos, die du brauchst, um die Mounting-Dread-Kette zu schließen. Sudden Impact belohnt den Q-Dash mit Lethality, Sixth Sense enthüllt Wards, Treasure Hunter macht Mark Kills zu extra Gold."
    secondary_rationale: "Precision als Sekundär: Triumph erstattet HP bei Takedowns (du bist nach 4 Autos niedrig), Coup de Grace addiert 8% Schaden unter 40% HP — Synergie mit dem fehlende-HP-Treffer des 4. Autos."
    secondary_alternative: "Gegen schwere AP-Burst-Comps (Diana jungle + Syndra mid + Brand support) tausche Precision → Resolve mit Second Wind + Revitalize: Sustain in der eigenen Jungle und stärkerer R-Heal."
matchup_draft:
  pick_into:
    - examples: ["karthus", "master-yi", "kayle"]
      archetype: "Late-Game-Scaling-Jungler und Carries mit schwachem Early"
      reason: "Sie wollen bis 3 Items farmen, bevor sie etwas tun; du kannst in ihrer Jungle Mark-hunten und ihre frühen Camps bullyen. Jeder abgeschlossene Mark vergrößert den Vorsprung vor ihrem Spike."
    - examples: ["senna", "aphelios", "kog-maw"]
      archetype: "Squishy Backline-Marksmen ohne integrierten Escape"
      reason: "Cross-Map-Gank: die E slowed lang genug für die 4-Auto-Kette plus den fehlende-HP-Treffer von Mounting Dread, und sie haben keinen Dash, der die Kette bricht."
    - examples: ["maokai", "nasus"]
      archetype: "Langsame Tanks ohne Dash"
      reason: "Sie schließen die Distanz nicht zu einer kitenden Kindred. Du auto-attackst außerhalb ihrer CC-Reichweite, während Wolf's Frenzy sie passiv chippt."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "Early-Invade-Jungler mit Hard CC und Lockdown"
      reason: "Sie laufen Level 2 in deine Camps mit Kick, Knock-up oder Stun und töten dich vor dem ersten Mark. Du hast keinen Dash gegen Lock-On und R ist noch nicht da."
    - examples: ["sion", "dr-mundo"]
      archetype: "Juggernaut-Tanks mit On-Hit-Mitigation oder Immunität"
      reason: "Sions W-Shield und Mundos Passive-Heal entwerten deinen Auto-Attack-DPS — dein einziger Schaden ist On-Hit, also neutralisiert alles, was diesen Loop bricht, dein gesamtes Kit."
    - examples: ["zed", "talon"]
      archetype: "Burst Assassins, die dich vor R-Coverage deleten"
      reason: "Du bist squishy ohne Hard CC; sie töten dich im 0.5s-Fenster vor dem Cast von Lamb's Respite. R blockt nicht den Schaden, nur den Tod — sie warten und re-engagen."
---

## Überblick

Kindred ist ein Marksman, der in der Jungle jagt. Lamb schießt, Wolf beißt, und das gesamte Kit dreht sich um eine Mechanik, die kein anderer Champion hat: **Mark of the Kindred**. Alle 4 Minuten erscheint ein Mark auf einem zufälligen Gegner — einem Champion oder einem Jungle Camp — und das Töten gibt einen permanenten Stack aus Attack Speed, Attack Damage und Bonus-Reichweite. Stacke 4 Marks und deine Reichweite springt; stacke 8 und du out-tradest Marksmen aus deren eigener Auto-Reichweite.

Dein Spielplan teilt sich in zwei Hälften. Early Game bist du ein **Mark Hunter**: du liest das Mark-Icon auf der Minimap, entscheidest, ob es den Contest wert ist (deins = immer, ihres = du tauschst Druck gegen das Wegnehmen) und biegst dein Pathing darum. Mid Game wirst du zum Flanker — Q-Dash hinter die gegnerische Backline (die Carries hinter ihren Tanks), E auf den Carry, 4-Auto-Kette, und Mounting Dread executet beim fehlende-HP-Treffer. Late Game bist du ein hyper-skalierender Skirmisher, der jeden Brawler im Spiel out-kited (Kiten = rückwärts gehen und dabei weiter angreifen, sodass der Gegner dich nie erreicht).

## Empfohlener Build

**Starting Items:** Smite + ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** für schnelleren Jungle-Clear (du bist ranged, du musst Hailblade nehmen — Emberknife ist nur Melee) plus ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**Core Items (in Reihenfolge):**

1. ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** — Quest-Upgrade von Hailblade (auto-evolved um Minute 3-4, sobald genug XP gesammelt). Companion für AD-Skirmisher: kurzer Movement-Speed-Burst aus Büschen, perfekt zum Chasen eines Marks oder Schließen eines Ganks aus dem Fog.
2. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — jeder dritte Basic Attack fügt Bonus True Damage zu. True Damage ignoriert Armor, also durchschlägt er die Tank-Itemisierung von Gegnern, die du sonst nicht shredden kannst.
3. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — flache Attack-Speed-Boots. Default; nur dann zu ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** wechseln, wenn das Gegnerteam 3+ Hard CC hat.
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — fügt zwei Extra-Bolzen pro Auto hinzu. Verdreifacht deinen Jungle-Clear-Speed und verteilt im Teamfight den Wolf-and-Lamb-DPS auf 3 Ziele.
5. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — Magic Damage On-Hit (zusätzlicher magischer Schaden auf jeden Basic Attack) + Magic Resist. Doppelnutzen: Lifeline gegen AP-Burst (Diana, Syndra, Brand) und Shred gegen Backlines mit niedriger Magic Resist.
6. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — Bonusreichweite auf den energetisierten Schuss, zusätzlich zur Reichweite, die du via Marks stackst. Late Game auto-attackst du Carries vom Bildschirmrand, während ihr Team ins Leere chased.

**Situational Items:**

- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — gegen Single-Target-Lock-On-Ults (Malzahar, Skarner, Warwick). Der Spell Shield frisst den Cast und die Kette startet nie.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — gegen Hard-CC-Ketten. Das Aktiv cleansed jedes CC inklusive Suppression — du drückst es in der Sekunde, in der Skarner pullt oder Sett-Ulti landet.
- ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — wenn du vorne bist, executet Ziele unter 5% HP. Stackt sauber mit dem fehlende-HP-Treffer von E; die Leiche generiert Bonus-Gold.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — gegen heallastige Comps (Aatrox, Soraka, Dr. Mundo). Wendet Grievous Wounds an, sodass deren Sustain in ausgedehnten Fights etwa halbiert wird.

**Boots:** Berserker's Greaves als Default. Mercury's Treads nur gegen schweres Hard CC.

**Skill-Reihenfolge:** Maxe **Q** zuerst (Clear-Speed und Schaden pro Dash), **E** als Zweites (mehr Burst auf den fehlende-HP-Treffer pro Rang), **W** als Letztes (AS und Heal skalieren auf Rang 1 gut). **R** auf 6, 11, 16.

**Runen:** Primär **Domination** mit **Hail of Blades** + **Sudden Impact** + **Sixth Sense** + **Treasure Hunter**. Sekundär **Precision** mit **Triumph** + **Coup de Grace**. Hail of Blades ist auf Kindred ikonisch, weil sie die ersten 3 Autos auf maximale Geschwindigkeit pusht — exakt die Autos, die du brauchst, um die Mounting-Dread-Kette zu starten.

## Wichtige Matchups

- **Lee Sin:** Verliert Level 1 gegen dich, aber Level 2-3 löscht sein Q-W-Q-Kick-Combo dich, bevor R bereit ist. Path weg von seiner Seite bis Level 4, dann Counter-Gank suchen, wenn er Q committet ohne W bereit. Tracke seinen W-CD — ohne kommt er aus keinem Fight raus.
- **Karthus:** Pure Scaler. Invade Minute 3 in seine Red Side und stiehl einen Buff; er kann dich nicht stoppen, und der Tempo-Verlust verzögert seinen Level-6-Spike. Nach 3 Items gewinnt er, also schließe vor Minute 18.
- **Master Yi:** Muss vor ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** sterben. Halte E für das Exit-Fenster seines Q-Dashs — wenn er wieder auftaucht, kassiert er den Slow und dein Team chained CC. Nach seinem ersten Item: kein 1v1.
- **Diana:** Sie will deine Backline diven; du ihre. Halte **R** für den Moment, in dem ihre R auf deinen Carry landet — die heilige Zone hält den Carry über 1 HP durch den Burst, dann tötet dein Team sie im Recovery-Fenster.
- **Xin Zhao:** Knock-up + Lockdown töten dich in 1.5 Sekunden. Niemals Level 2 neben seinen Camps pathen; group mit einem Laner für Buffs, bis du 2 Marks Bonus-Reichweite hast. Nach 3 Items kitest du ihn mit Q-Resets aus.

## Power Spikes & Siegbedingungen

- **Level 3:** Volles Kit. Dein Gank-Pattern ist **E auf das Ziel -> 3 Autos mit Q-Dash mitten in der Kette -> 4. Auto triggert den fehlende-HP-Burst**. Ohne R: nicht tief committen auf einen Level-3-Gank — nur Flash-Distance.
- **Erster Mark-Stack (~ Minute 5):** Permanent +AS, +AD, +Reichweite. Jeder danach abgeschlossene Mark vergrößert die Lücke. Kämpfe um Marks, selbst wenn neutral — der Stat-Vorsprung ist größer als ein einzelner Trade (ein Trade = ein kurzer Schadensaustausch im Skirmish).
- **Level 6:** **Lamb's Respite** unlocked. Ab hier kannst du einen Teamkollegen vor einem garantierten Tod retten. Der Trick ist **niemals pre-casten** — drop sie in dem Moment, in dem du den Gegner den Kill-Spell committen siehst, sonst läuft die Zone aus, bevor die Threat aufgelöst ist.
- **3 Items + 4-Mark-Reichweitenbonus (~ Minute 22):** Du out-rangest jeden Marksman im Spiel. Im Teamfight stehst du hinter deiner Frontline, bewegst dich nicht und auto-attackst, bis alles tot ist. Das ist deine Scaling-Klippe — group mit dem Team, splitpush nicht (nicht alleine eine Side Lane farmen).

## Häufige Fehler

- **Pre-cast von Lamb's Respite.** **R** ist reaktiv, nicht proaktiv (du legst sie NACH dem Lesen der Threat ab, nicht davor). Drop sie in der Sekunde, in der die gegnerische Ulti trifft, nicht wenn sie nur näher kommen. Pre-cast-Rs retten niemanden und kosten dich dein einziges Save-Tool für 110 Sekunden.
- **Das Mark-Icon ignorieren.** Die Minimap zeigt den Mark als kleines Totenkopf-Icon. Spieler, die ihn nicht tracken, verlieren die ganze Identität des Champions. Öffne die Karte alle 30 Sekunden und frag dich: "Ist der Mark meiner zum Holen oder ihrer zum Verweigern?"
- **Q-Dash ins Gegnerteam ohne Ausgang.** **Dance of Arrows** hat 12 Sekunden CD auf Rang 1. Wenn du Q reinst für eine Kill-Chase und jemand CCt dich, hast du keinen Escape. Q immer mit einer Wand hinter der Dash-Trajektorie, sodass das nächste Q (nach CDR) dich wieder rausbounct.
- **Die 4-Auto-Voraussetzung von Mounting Dread vergessen.** **E** macht beim Cast wenig Schaden, aber der echte Payoff ist der 4. Auto auf das geslowed Ziel. Wenn du E castest und nur 2 Autos landest, feuert der fehlende-HP-Burst nie. Commit zur vollen Kette oder cast E gar nicht.
- **R für den perfekten Moment aufheben, der nie kommt.** Eine "verschwendete" R, die einen Verbündeten 3 Sekunden rettet, ist immer noch besser als eine perfekte R, die du nie drückst, weil du zu lange gehalten hast. Im Zweifel: drop.

## Fortgeschrittener Tipp

Der **R-Bait** auf Objektive. Bei Drake oder Baron mit niedrigen HP im Team: drop **Lamb's Respite** AUF das Objektiv statt auf dein Team. Jede Einheit darin kann nicht unter 1 HP fallen — inklusive des Objektivs. Dein Team smitet oder beendet das Objektiv während der Zone, und jeder Gegner, der reinkommt, kann dich auch nicht töten, also gibt er entweder den Contest auf oder wird gefangen, wenn die Zone endet und dein Team durch den Schluss-Heal der R wieder full HP hat. Das verwandelt einen 50/50 Drake-Fight in ein garantiertes Objektiv + Doppelkill, wenn das Gegnerteam den Trick nicht liest.
