---
title: "Lillia Jungle Build & Guide — Patch 16.9"
slug: "lillia-jungle"
language: "de"
patch: "16.9"
champion: "lillia"
role: "jungle"
last_updated: "2026-05-05"
description: "Lillia Jungle Guide für League of Legends Patch 16.9: Starter Kit, AP-Burst-Build, wichtige Jungle-Matchups, Power Spikes, häufige Fehler und ein fortgeschrittener Tipp."
quick_learn:
  champion_dd_id: "Lillia"
  difficulty: 3
  damage_type: "magic"
  champion_class: "AP Skirmisher / Roaming Caster"
  abilities:
    - key: "P"
      name: "Dream-Laden Bough"
      description: "Jeder Skill-Treffer setzt einen Stack magischen Schadens-über-Zeit in % HP auf Champions und Monster. Dream-Dust-Stacks aktivieren ihre R."
      dd_spell_id: "Lillia_Passive"
    - key: "Q"
      name: "Blooming Blows"
      description: "AOE-Schwung um Lillia: Schaden nah, extra true damage am Rand. Stackt Move Speed. Hauptwerkzeug für Clear und Skirmish-DPS."
      dd_spell_id: "LilliaQ"
    - key: "W"
      name: "Watch Out! Eep!"
      description: "AOE mit Aufladung und Schadenszone — die Mitte trifft viel härter. Single-Target-Burst-Spell. Langer Tell, mit E-Slow kombinieren."
      dd_spell_id: "LilliaW"
    - key: "E"
      name: "Swirlseed"
      description: "Lobbing-Skillshot mit großer Reichweite: Schaden, Slow, Reveal. Bei Fehlschuss rollt der Samen weiter bis zum Treffer. Setup, Vision oder Notfall-Tool."
      dd_spell_id: "LilliaE"
    - key: "R"
      name: "Lilting Lullaby"
      description: "Global setzt Drowsy progressiv auf jeden gegnerischen Champion mit Dream Dust und schläfert sie ein. Erster Treffer weckt sie mit Bonus Damage."
      dd_spell_id: "LilliaR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs Assassinen und Dive-Comps (Zed, Diana, Kha'Zix) — Stasis überbrückt die Lücke, während DOT und R ticken"
    - dd_id: "4645"
      name: "Shadowflame"
      against: "vs squishy Backline ohne Magic Resist — HP-Schwellen-Passive synchron mit dem Wake-up-Burst der R"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "vs kite-lastige Comps — extra Move Speed und Ability Haste fördern ihren Skill-Cycle-Skirmish"
    - dd_id: "3135"
      name: "Void Staff"
      against: "wechseln, sobald ein Prio-Target ein Magic-Resist-Item kauft (Mercury's Treads, Force of Nature)"
  base_combo: ["E", "R", "Q", "W", "AA"]
  win_condition: "Stacke Dream Dust mit Q-Pässen auf Prio-Targets, lande R für den teamweiten Sleep, dann ketten W-Center-Hit und Q für maximalen Burst vor Cleanse oder Peel."
  weakness: "Schwache frühe Level und nur eine Mobility-Form (Q-Stacks). Aggressive Level-2-3-Invades, Hard-CC-Ketten (Lee Sin Q, Vi R) und Mercury's Treads auf R-Targets brechen ihren Snowball."
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
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Inspiration primär: First Strike belohnt ihren clear-lastigen Stil mit Bonus-Gold pro Gank, Magical Footwear liefert Gratis-Stiefel beim Farmen, Biscuit Delivery und Cosmic Insight decken frühes Mana und kürzen Smite/Flash für Objective-Fights."
    secondary_rationale: "Sorcery sekundär: Manaflow Band cappt ihr Mana, damit Q-W-E-Spam durch Camps sie nicht trockenlegt; Transcendence drückt Ability Haste für kürzere R-Cooldowns ab dem zweiten Teamfight."
    secondary_alternative: "Gegen lange 1v1-Skirmishes (Master Yi, Warwick, Udyr) tausche Inspiration gegen Precision mit Conqueror-Keystone und Triumph: gestapelter adaptive damage und HP-on-takedown drehen lange Duelle zu deinen Gunsten."
matchup_draft:
  pick_into:
    - examples: ["karthus", "amumu", "fiddlesticks"]
      archetype: "Farm-lastige Jungler ohne Early-Invade"
      reason: "Sie wollen bis Level 6 in Ruhe clearen. Lillia hält ihre Farm-Geschwindigkeit mit und schlägt sie am Scuttle dank Q-Move-Speed-Stacks und DOT-Druck der Passive."
    - examples: ["sion", "dr-mundo", "cho-gath"]
      archetype: "Top-Tanks anfällig für % HP DOT"
      reason: "Liandry's Torment plus die % HP Passive zerlegen große HP-Pools schnell. Ihr R-Sleep verwandelt deren langsame Cast-Bedrohungen (Sion R, Mundo Q) in freies Positioning für dein Team."
    - examples: ["senna", "kog-maw"]
      archetype: "Immobile Backline-Carries"
      reason: "Cross-Screen-E setzt den Gank-Lockdown auf, dann gibt R-Sleep ein garantiertes Pickoff-Fenster, bevor sie sich hinter ihrer Frontline positionieren können."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "Aggressive Level-2-3-Invader"
      reason: "Lillias Level 1-3 sind ihr schwächster Teil; kein Hard CC, nur Q als Schaden. Ein erfolgreicher Invade tötet sie vor ihrem Clear-plus-Mobility-Power-Spike."
    - examples: ["yasuo", "camille"]
      archetype: "Champions mit Dashes oder Wind Wall, die W-Slow umgehen"
      reason: "Ihr Single-Target-Burst W braucht das Target im Zentrum. Wiederholte Dashes und Camilles E-Hookshot lassen sie in die Luft schwingen."
    - examples: ["kindred", "graves"]
      archetype: "Ranged-AD-Jungler, die Scuttle gewinnen"
      reason: "Sie schlagen sie am Scuttle mit Auto-Attack-Reichweite, während sie in die Q-Hitbox laufen muss. Zwei Mal Scuttle in Folge zu verlieren kollabiert River-Vision und Roam-Timing."
---

## Überblick

Lillia ist eine AP-Skirmisher-Jungle, deren komplettes Kit über die Passive **Dream-Laden Bough** magischen Schaden-über-Zeit in % HP appliziert. Jeder Q-Schwung, jeder W-Slam, jeder E-Samen hinterlässt eine "Dream Dust"-Marke, die für ein paar Sekunden Schaden tickt — deshalb clearet sie Jungle-Camps schneller als fast jeder andere AP-Jungler und deshalb fühlen sich ihre Duelle so an, als ob sie Gegner zermürben, selbst wenn ihre Cooldowns leer sind. Ihr Game Plan ist simpel: stacke Dust auf so viele gegnerische Champions wie möglich und drücke dann **R**, um sie alle gleichzeitig einzuschläfern.

Sie will Tempo, kein langsames Farmen. Nutze **Q**, um ihren Move-Speed-Buff zwischen Camps oben zu halten, **E**, um aus Ward-Reichweite heraus zu ganken, und **W** als Single-Target-Hammer im Skirmish, sobald das Ziel geslowt ist. Late Game ist ihre R das verlässlichste teamweite Setup-CC im AP-Jungle-Pool, aber sie hängt davon ab, dass du die Ziele vorher angetagged hast — eine "nackte" R auf ein sauberes Team ist eine vergeudete Ult.

## Empfohlener Build

**Starting Items:** Hailblade (1039) + Refillable Potion (2031). Lillia ist ranged, also ist Hailblade der richtige Smite-Pet-Starter.

**Core Items (in Reihenfolge):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — Quest-Upgrade von Hailblade; entwickelt sich automatisch um Minute 3-4, sobald genug Monster-XP gesammelt ist. Das AP-Burst-Pet: jeder Auto-Attack nach einem Spell fügt einen On-Hit-Magic-Proc hinzu, der perfekt mit ihrer Passive-DOT harmoniert.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — erstes Komplett-Item. Der % HP Burn (verteilter Schaden über mehrere Sekunden, kein sofortiger Burst) stackt mit ihrer eigenen Passive: je mehr Gesamt-HP der Gegner hat, desto härter wird er zerlegt.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flache Magic Penetration. Standard-Stiefel, sobald Magical Footwear um Minute 12 das Gratis-Paar liefert.
4. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — Item für lange Kämpfe: stackt Omnivamp (Heal-on-Damage) und wandelt nach 3 Sekunden im Combat einen Teil deines Schadens in true damage um. Passt natürlich zu ihrer DOT-Uhr.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — Late-Game-AP-Multiplikator; verwandelt den Chip-Damage ihrer Passive in echte One-Shot-Fenster.

**Situational Items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — gegen Assassinen und Dive-Comps (Zed, Diana, Kha'Zix). Stasis deckt den Moment nach deinem R in die Backline, während DOT und Team die Kill abschließen.
- ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — vs squishy Backlines ohne Magic Resist. Ihre Niedrig-HP-Schwellen-Passive (extra Magic Damage, wenn das Ziel niedrig ist) synchronisiert mit dem Wake-up-Tick deiner R.
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — vs kite-lastige Comps. Extra Move Speed und Ability Haste fördern ihren Skill-Cycle-Skirmish, da ihr Schaden aus Spell-Ketten kommt, nicht aus Auto-Attacks.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — sobald ein Prio-Target ein Magic-Resist-Item kauft.

**Boots:** Sorcerer's Shoes ist Standard. Mercury's Treads ist akzeptabel gegen AP-Burst plus Heavy CC (Lissandra + Twisted Fate); die Tenacity schützt deinen R-Cast-Windup.

**Skill Order:** Maxe **Q** zuerst (Clear Speed und Skirmish-DPS), **W** als zweites (Single-Target-Burst), **E** zuletzt. Punkt in **R** auf Level 6, 11, 16. Level 1 in **Q**, Level 2 in **E** für Ganks, Level 3 in **W**.

**Runes:** Primär **Inspiration** mit **First Strike**, **Magical Footwear**, **Biscuit Delivery**, **Cosmic Insight**. Sekundär **Sorcery** mit **Manaflow Band** und **Transcendence**.

## Wichtige Matchups

- **Lee Sin / Xin Zhao:** Aggressive Level-2-3-Invader (sie laufen in deine Jungle und versuchen dich zu töten, bevor du dein volles Kit hast), die dich vor deinem Clear-plus-Mobility-Power-Spike löschen. Starte am Camp am weitesten von ihrer wahrscheinlichen Invade-Linie entfernt; lass deine Laner Wards in der Nähe deines zweiten Buffs setzen. Bestreite Scuttle (den Fluss-Krebs) nicht vor Level 6.
- **Karthus:** Farm-Rennen. Er skaliert dich late aus, aber du out-tempost ihn 6-14. Tracke seinen Clear, ganke seine Lanes auf jedem R-Cooldown. Wenn du zurückfällst, duelliere nicht: fokussiere Side-Objective-Trades.
- **Amumu:** Beide clearen schnell, aber er hat keine Skirmish-Präsenz vor Level 6. Nimm Scuttle auf seiner Map-Seite nach dem ersten Clear; er kann dich ohne Q-Stun bereit nicht bestrafen.
- **Master Yi:** Counterpick-Territorium, sobald er 2 Items hat. Baue ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** früher als üblich; kite seinen Q (Alpha Strike), indem du das Move Speed deiner Q-Passive stackst und E hinter dir platzierst.
- **Graves:** Verliert Scuttle gegen ihn auf vollen HP. Pathe auf die andere Map-Seite, bis du ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** komplett hast; der % HP Burn nivelliert endlich den Auto-Attack-Trade.

## Power Spikes & Siegbedingungen

- **Level 3 (Q + W + E):** Volles Kit. Erster Clear endet ~3:15 mit gesunden HP — das ist dein frühestes Gank-Fenster mit E-Setup auf W-Center-Hit.
- **Level 6 (R freigeschaltet):** Erste **Lilting Lullaby**. Suche nach pre-stacktem Dust auf einem niedrigen Laner: laufe in die Vision, R, warte den 1.5s-Ramp, lande das Wake-up-Combo. Das ist das skill-intensivste Timing in ihrem Kit (frühe R ist verschwendete Ult).
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment Completion (~ Minute 9-11):** Skirmish-DPS verdoppelt sich. Erzwinge hier Grub- oder erste Drake-Fights; ihre DOT plus der Item-Burn zerlegen Tank-Frontlines, bevor sie umpositionieren können.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker online (~ Minute 18-22):** Power für lange Kämpfe. Du out-sustainest Bruiser im 5v5, weil deine Heilung damit skaliert, wie viel Schaden du weiter applizierst — und dein Kit appliziert Schaden auf jedem Cooldown.

## Häufige Fehler

- **R auf Gegner ohne Dream Dust casten.** R schläfert nur Targets ein, die bereits deine Passive-Stacks tragen. Triff sie zuerst mit Q oder E; eine "leere" R legt nur einen kurzen Drowsy-Zustand an, keinen vollen Sleep.
- **Stillstehen, um W zu landen.** W's Center-Hit ist der Burst, aber der Windup ist lang. Kombiniere ihn zuerst mit E-Slow: mit gelandetem E wird der W-Center-Hit fast garantiert, sogar ohne Flash-Setup.
- **Q-Spam durch gegnerischen Fog.** Q enthüllt dich bei jedem Cast. In der gewardeten gegnerischen Jungle setzt Q-Spam beim Clear einen riesigen roten Ping auf die feindliche Minimap. Geh leise rein, dann committe.
- **Jungle-Pet-Upgrades ignorieren.** Viele neue Lillia-Spieler überspringen die Hailblade-Quest, indem sie zu effizient clearen. Behalte die Pet-Bar im Auge — wenn sie bei "needs more XP" hängt, laufe vor dem Back durch ein zusätzliches kleines Camp.
- **Late-Game-R-Picks alleine versuchen.** R ist ein Team-Setup-Tool, kein Solo-Gank-Button. Wenn dein Team in Mid-Rotation ist, wenn du R lädst, läuft der Sleep-Timer ab, bevor sie ankommen. Pinge den Spell, zähle bis 1, dann committe.

## Fortgeschrittener Tipp

Übe einen "E-Flash"-Winkel für Mid-River-R-Setups. Bewege dich aus dem Seitenbusch auf den gegnerischen Mid-Laner zu, Flash-E in seine Laufrichtung, sodass der Samen hinter ihm landet (er muss in den Slow laufen), dann R während des Slow-Fensters. Der Slow garantiert, dass deine Passive-Stacks vor dem R-Resolve landen, also ist der Sleep voll und kein partieller Drowsy. Spart den Cast bei Objective-Spawns, wo der Gegner in Rotation ist und Warding spärlich ist.
