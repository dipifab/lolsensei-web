---
title: "Ivern Jungle Build & Guide — Patch 16.9"
slug: "ivern-jungle"
language: "de"
patch: "16.9"
champion: "ivern"
role: "jungle"
last_updated: "2026-05-05"
description: "Ivern Jungle Guide für League of Legends Patch 16.9: pazifistischer Clear über Groves, Enchanter-Build, Q-Root-Setups, Daisy-Fightkontrolle, Schlüssel-Matchups."
quick_learn:
  champion_dd_id: "Ivern"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Enchanter / Utility-Jungler"
  abilities:
    - key: "P"
      name: "Friend of the Forest"
      description: "Kann Junglemonster nicht angreifen und wird auch nicht von ihnen angegriffen (außer Epics wie Drake/Baron). Pflanzt Groves auf Camps, die nach dem Wachsen die Monster freigeben."
      dd_spell_id: "Ivern_Passive"
    - key: "Q"
      name: "Rootcaller"
      description: "Langer linearer Skillshot, der den ersten getroffenen Gegner rooted. Verbündete, die das gerootete Ziel angreifen, dashen darauf zu. Recast, um selbst hinzudashen."
      dd_spell_id: "IvernQ"
    - key: "W"
      name: "Brushmaker"
      description: "Passiv: im Busch verursachen Autos Bonus-Magieschaden (du und nahe Verbündete). Aktiv: erstellt einen Busch für Vision und Schadenszone."
      dd_spell_id: "IvernW"
    - key: "E"
      name: "Triggerseed"
      description: "Schildet einen Verbündeten (oder Daisy). Nach 1,5s explodiert das Schild, verursacht Magieschaden und slowt nahe Gegner. Trifft es niemanden, regeneriert sich das Schild."
      dd_spell_id: "IvernE"
    - key: "R"
      name: "Daisy!"
      description: "Beschwört Daisy, einen tanky Golem-Verbündeten. Ihr dritter Auto in Folge auf dasselbe Ziel löst eine Knockup-Schockwelle aus. Recast, um sie umzupositionieren."
      dd_spell_id: "IvernR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "W" }
    - { level: 15, key: "W" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "6616", name: "Staff of Flowing Water" }
    - { dd_id: "3107", name: "Redemption" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "gegen schweres Single-Target-CC auf deinem ADC (Morgana Q, Ashe R, Lissandra R)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "gegen AOE-Engage-Comps (Amumu R, Yasuo + Malphite, Wukong R)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "wenn die Hauptbedrohung ein langes magisches CC auf dich ist"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "gegen mobile Assassinen, die deine Backline diven (Kha'Zix, Zed, Akali, Talon)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "gegen Heal-Stacking-Comps (Soraka, Yuumi, Aatrox, Vladimir)"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "Setze Picks mit Q aus der Fog, schilde im Mid-Fight deinen stärksten Carry mit E und droppe Daisy hinter die Front, damit ihr dritter Auto-Knockup gerootete Ziele aufräumt. Starker Spike auf Level 6."
  weakness: "Kein 1v1 gegen Champions möglich — Autos schwach, Kit ohne Escape. Recovery sehr langsam, falls deine Jungle vor zwei Groves invadet wird; ein verfehltes Q im Gank verbrennt das ganze Setup."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8214
      name: "Summon Aery"
      icon_path: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery primary: Summon Aery reitet auf jedem E-Schild und proct auch beim Q-Root für Bonus-Magieschaden. Manaflow Band hält Mana für Dauer-E, Transcendence schiebt Ability Haste über 40 für kürzere Q-Cooldowns, Scorch schließt Poke-Fenster im Skirmish."
    secondary_rationale: "Resolve secondary: Font of Life triggert auf jedem Q-Root — dein ADC heilt beim Angriff auf das gerootete Ziel, das macht aus einem Setup Burst plus Sustain. Revitalize verstärkt Aery-Schilde und das E-Refund ohne getroffene Gegner."
    secondary_alternative: "Brauchst du in langen Teamfights mehr Flash-Uptime und dein ADC bringt schon Sustain mit, swappe Resolve auf Inspiration mit Biscuit Delivery (Mana/HP early) und Cosmic Insight (Summoner Spell Haste, schnellerer Flash und Smite)."
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "vel-koz"]
      archetype: "Immobile Carries ohne Dash"
      reason: "Ein Q aus der Fog fixiert sie; der Auto-Dash deines ADCs auf das angegriffene Ziel schließt die Distanz vor dem Flash, besonders wenn Daisy für den Knockup-Follow-up dazukommt."
    - examples: ["master-yi", "warwick", "shyvana"]
      archetype: "Auto-Attack-scaling Jungler"
      reason: "Iverns Grove-Mechanik überspringt den Camp-Fight komplett; während die Gegner Autos auf Monster mahlen, schildet Ivern schon Lanes und setzt mit dem ADC ab Level 5 Roots."
  counterpicks:
    - examples: ["lee-sin", "graves", "nidalee"]
      archetype: "Early-Game-Invader"
      reason: "Ivern kann kein 1v1 — W braucht Busch, Q hat keine Escape-Utility. Eine Pre-3-Invasion löscht seine Groves und zwingt ihn zu defensivem Clear, der den XP- und Gold-Lead des Gegners dauerhaft snowballt."
    - examples: ["kha-zix", "rengar"]
      archetype: "Mobile Assassin-Diver"
      reason: "Sie springen über Iverns Peel direkt auf den Carry; das E-Schild verbrennt schnell unter Burst, und sein einziges Hard-CC ist ein Q mit langem Windup, das Dashes vor dem Treffer outrunnen."
    - examples: ["amumu", "zac"]
      archetype: "Tanks mit AOE-Hard-Engage"
      reason: "Ihre R-Flash-Ketten erwischen ein eng gruppiertes Team in einem Kegel; ein E-Schild kann nicht mehrere Ziele abdecken, und Daisys dritter-Auto-Knockup kommt zu spät, um die Backline zu retten."
---

## Überblick

Ivern ist ein pazifistischer Jungler — und dieses eine Wort ändert alles, wie er gespielt wird. Seine Passive verbietet ihm, Junglemonster überhaupt anzugreifen, also tauscht er nie Autos in einem Camp. Stattdessen pflanzt er einen **Brushmaker (W)**-Samen auf jedes Camp, geht weg und kommt später zurück, um die Monster mit vollem Gold und XP automatisch befreit vorzufinden. Der Trade-off: Während ein normaler Jungler einen Full-Clear macht, schildet Ivern Verbündete, gatet die Vision am Fluss mit aktivem Busch und läuft cross-map für Level-3-Ganks, die ankommen, bevor irgendein anderer Jungler überhaupt auf der Map ist.

Sein Game Plan ist Enchanter, nicht Assassin. Lande **Rootcaller (Q)** aus der Fog of War (Kriegsnebel), dein ADC dasht über den Auto-Attack-Proc auf das gerootete Ziel, du droppst **Triggerseed (E)** auf ihn beim Engage, und auf Level 6 knallst du **Daisy! (R)** hinter die feindliche Linie, damit ihr dritter Auto in Folge einen garantierten Knockup auslöst. Das Kit hat keinen Escape und schwache Autos — wer 1v1 gegen einen Champion fightet, verliert. Bleib in der Fog, bleib bei einem Teammate, und lass dein Team den Schaden tragen, während du die Setups trägst.

## Empfohlener Build

**Starting items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Ivern ist ranged (475 Attack Range), also ist Hailblade die richtige Wahl gegenüber Emberknife. Smite bleibt Pflicht — du brauchst es für Drake, Baron und Voidgrubs, auch wenn du nie ein normales Camp smitest.

**Core Items (in Reihenfolge):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — Quest-Upgrade aus Hailblade (auto-evolved gegen Minute 3-4, sobald genug XP da sind). Companion für AP-Burst: fügt nach jedem Cast einen Magieschaden-Proc auf dem Auto hinzu, der sich auf den W-Buschbonus stapelt.
2. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — Mythic. Deine Schilde und Heals stapeln einen Ketteneffekt, der Healing pro Proc rampt — ideal für einen Enchanter, der alle 7-11 Sekunden schildet, slowt und wieder schildet.
3. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — Ability Haste hält Q und E nahezu permanent verfügbar.
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — wenn das E einen Verbündeten schildet, gibt der Censer-Passiv ihm Attack Speed und On-Hit-Magieschaden. Stapelt sich mit dem W-Buschbonus, wenn der ADC im oder am Busch fightet.
5. ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** — zweiter Schild-Trigger. Gibt dem geschildeten Verbündeten ein paar Sekunden lang extra Ability Power und Ability Haste.
6. ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — globaler aktiver Heal/Schaden mit 5-Sekunden-Cast: dropp ihn auf einen geklumpten Fight, um HP-Balken zu kippen.

**Situational Items:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — wenn der Gegner langes Single-Target-CC auf deinen ADC kettet (Morgana Q, Ashe R, Lissandra R). Der aktive Cleanse hält den Carry länger am Leben als jedes Schild.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — gegen AOE-Hard-Engage-Comps (Amumu R + Yasuo R Wombo, Wukong R). Der Aktiv-Effekt schildet mehrere Verbündete gleichzeitig, was ein einzelnes E nicht kann.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — wenn ein mobiler Assassin (Kha'Zix, Zed, Akali, Talon) dich gezielt jagt. Stasis lässt dich den Dive lange genug überleben, damit Daisy peelt.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — gegen Heal-Stacking-Comps (Soraka, Yuumi, Aatrox, Vladimir). Dein Magieschaden appliziert den Heal-Cut, und du castest oft genug, um ihn permanent zu halten.

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** als Default. ![Boots of Swiftness](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3009.png) **Boots of Swiftness** sind okay, wenn überall Slows (Twitch, Ashe, Ahri W) auf dich stapeln; der Ability-Haste-Verlust ist real, also nur, wenn Mobilität wirklich das Problem ist.

**Skill Order:** Maxe **E** zuerst (Schildwert skaliert am stärksten, Slow stoppt Dives), **Q** als zweites (kürzerer Cooldown = mehr Roots), **W** zuletzt (Passive skaliert mit Rang, aber Punkte erst, wenn nichts anderes übrig ist). Setze **R** auf Level 6, 11, 16.

**Runes:** Primary **Sorcery** mit **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Resolve** mit **Font of Life** und **Revitalize**.

## Wichtige Matchups

- **Lee Sin / Graves:** Hard Counter. Beide invaden deine Jungle pre-3 und du verlierst jedes 1v1. Starte nahe deiner stärksten Lane (wo der Verbündete für ein 2v2 rotaten kann) und warde Raptors und Red Side. Bei einer Invade: retreat und lass deinen Laner aus der Fog bestrafen — niemals duelliere.
- **Master Yi / Warwick:** Easy. Sie mahlen Autos auf Camps in den ersten Leveln, während du den Camp-Fight per Grove überspringst; du kommst eine Stufe höher auf die Gank-Lanes. Sobald Daisy online ist, unterbricht ihr Knockup Warwicks R und stoppt Yi mitten im Alpha-Strike.
- **Karthus:** Race um den Level-6-Spike. Er globalt ab Minute 6, du rootst und droppst Daisy ab Minute 6. Der erste Kill entscheidet, wer skaliert; wenn du am Scuttle ein frühes Q auf ihn landest, walzt dein Team die nächsten 10 Minuten.
- **Kha'Zix:** Meide ihn in der Fog. Er isoliert squishy Ziele für Bonus Damage — dieses Ziel bist du. Warde die sichere Seite deiner Jungle, group dich mit dem Team für Objectives und pathe nach Minute 8 nie allein in unwardete Fog.
- **Vi:** Even Matchup, entschieden durch Mid-Lane-Prio. Ihre Q-Flash-R-Kette umgeht dein Q, aber wenn deine Mid-Lanerin Prio hat, kann sie nicht frei diven. Warde ihre Flank-Route und pre-schilde den ADC im Moment, in dem du in Vision die Q-Ladeanimation siehst.

## Power Spikes & Siegbedingungen

- **Level 3-4 (voller Grove-Zyklus):** Sobald zwei Camps gewachsen und freigegeben sind, hast du den Clear eines normalen Junglers in rund 60% der Zeit erreicht. Nutze den Überschuss, um mit bereitem Q an einer Lane zu sein, bevor der gegnerische Jungler Level 4 hat.
- **Level 6 (Daisy! online):** Das erste **R** schaltet das Kit frei. Daisy ist im Fight ein tanky Body und ihr dritter-Auto-Knockup ist ein garantiertes Engage-Tool. Such direkt nach 6 einen Free Pick auf einem Side-Laner.
- **![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) Moonstone Renewer fertig (~ Minute 11-13):** Schild-/Heal-Ketten beginnen zu rampen. In jedem Fight länger als 4 Sekunden zieht dein Heal-Output an jedem Nicht-Soraka-Enchanter auf der Map vorbei.
- **3-Item-Powerspike (Moonstone + Boots + Ardent oder Staff, ~ Minute 19-21):** Erzwinge Objective-Fights. Dein geschildeter ADC schlägt härter und schneller als der gegnerische, und Daisy R hat eine ganze Minute Cooldown — du willst fighten, sobald sie up ist.

## Häufige Fehler

- **Smite auf normale Camps.** Geht nicht — die Passive deaktiviert es. Heb Smite ausschließlich für Drake, Baron, Voidgrubs und den seltenen Cross-Jungle-Steal auf Red/Blue des Gegners auf, wenn er gerade den Take macht. Verschwendetes Smite auf eine Grove-Animation ist Throw.
- **Selbst auf das gerootete Ziel autoen.** Wenn du jemanden Q-st, dashst nicht du — das macht der ADC automatisch beim Angriff. Recast Q nur, wenn du wirklich diven willst (selten); sonst Schritt zurück und schilde den engagenden Verbündeten.
- **W-Busch im Fight statt in Lanes.** Der Busch ist in Lanes am wertvollsten für dauerhafte Vision und Schadenszone über der Wave; mitten im Fight ist er kaum mehr als ein Vision-Tool. Pre-place W vor einem Gank in den Tri-Bush, nicht danach.
- **Daisy auf Max-Range droppen.** Daisys Wert liegt im dritter-Auto-Knockup, der nur passiert, wenn sie das Ziel auch erreicht. R im Fight, hinter die feindliche Linie — nicht 1500 Units entfernt "für Schaden".
- **Versuchen, mit einem E-Schild gegen AOE-Engage zu peelen.** Das E schildet einen Verbündeten zur Zeit. Gegen Amumu R + Yasuo R, die vier Leute nehmen, brauchst du Locket of the Iron Solari. Plane den Item ein, sobald du den Draft siehst.

## Fortgeschrittener Tipp

Nutze das **aktive W-Buschplacement**, um aus Sicht des ADCs Fog zu faken. Drop einen Busch am Rand der Reichweite eines feindlichen Wards — sie sehen, dass du ihn setzt, aber nicht, wer hineinläuft. Rotiere deinen Carry in den Busch und schieße dann Q quer durch die Lane: Gegner können keinen Skillshot dodgen, der hinter einer Buschwand abgefeuert wird, durch die sie nicht sehen. Genau dieser Trick macht frühe Ivern/Caitlyn-Duos zu einer der snowball-stärksten Laning-Kombos im Spiel, und er skaliert mit Item-Completion, weil die Autos des geschildeten Carrys im Busch zu Ardent-empowered Hämmern werden.
