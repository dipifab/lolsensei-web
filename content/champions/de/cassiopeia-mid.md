---
title: "Cassiopeia Mid Build & Guide — Patch 16.9"
slug: "cassiopeia-mid"
language: "de"
patch: "16.9"
champion: "cassiopeia"
role: "mid"
last_updated: "2026-05-01"
description: "Cassiopeia Mid Guide für League of Legends Patch 16.9: Starter-Items, Mage-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Cassiopeia"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Battlemage"
  abilities:
    - key: "P"
      name: "Serpentine Grace"
      description: "Passive, die jeden Bonus-Move-Speed verstärkt, den Cassiopeia von Items, Runen und ihrer eigenen Q bekommt. Boots scalen auf ihr härter als auf anderen Mages."
      dd_spell_id: "Cassiopeia_Passive"
    - key: "Q"
      name: "Noxious Blast"
      description: "Gezielte Boden-AOE, die nach kurzer Verzögerung detoniert und Poison aufträgt. Trifft sie einen Champion, gibt sie einen Move-Speed-Burst zum Chasen oder Kiten."
      dd_spell_id: "CassiopeiaQ"
    - key: "W"
      name: "Miasma"
      description: "Wand aus Giftwolken, die Gegner darin verlangsamt und grounded. Grounded-Ziele verlieren Dashes, Blinks und Movement-Spells — Haupt-Anti-Mobility-Tool."
      dd_spell_id: "CassiopeiaW"
    - key: "E"
      name: "Twin Fang"
      description: "Spell mit ultrakurzem Cooldown (0.75s), der Bonus-Schaden auf Poisoned-Ziele macht und Cassiopeia heilt. Mana-Refund auf Takedown. Haupt-DPS-Knopf — nie aufhören."
      dd_spell_id: "CassiopeiaE"
    - key: "R"
      name: "Petrifying Gaze"
      description: "Frontaler Kegel: Gegner, die ihr ins Gesicht schauen, werden ~1.5s gestunt; abgewandte Gegner nur geslowt. Direkt von vorn anvisieren für vollen Lock."
      dd_spell_id: "CassiopeiaR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
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
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "gegen Burst-Assassinen (Zed, Talon, Akali): die 2.5s Stasis kauft Zeit, bis E zurück ist und Allies peelen können"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "gegen magische Single-Target-CC, die dich aus E sperrt (Ahri Charm, Lissandra R, Twisted Fate Gold Card)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "gegen Heal-Stack-Comps (Soraka mid, Vladimir, Dr. Mundo top): Grievous Wounds cappt Lifesteal/Regen"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap in den Shadowflame-Slot, sobald ein Priority-Target ein Magic-Resist-Item baut"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "gegen Melee-Comps, die dich runterlaufen wollen: jedes E refresht einen Slow, peel für die Backline plus W-Ground"
  base_combo: ["Q", "W", "E", "E", "E"]
  win_condition: "Stack Liandry's-Schaden auf vergiftete Ziele mit E-Spam (cd 0.75s), während W Dashes grounded. Land R Level 6 frontal, um Lane-Prio in Kills zu drehen, dann scale zur Battlemage-Frontline."
  weakness: "Reichweite 700, kein Dash, kein Blink, kein Escape. Long-Range-Artillery-Mages pokken sie raus; Pre-6-Ganks mit Hard CC schließen die Lane vor dem Scaling. Mana-leer, wenn E daneben geht."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8230
      name: "Stormraider's Surge"
      icon_path: "perk-images/Styles/Sorcery/PhaseRush/StormraidersSurgeRuneIcon2.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery schlägt Domination/Precision: Stormraider's gibt den Move-Speed-Burst (3 schnelle Procs), den das Kit sonst nicht hat. Manaflow versorgt den 40-Mana-E-Spam, Transcendence hebt die Ability Haste, Gathering Storm scaled spät über Electrocute hinaus."
    secondary_rationale: "Inspiration sekundär: Biscuit Delivery deckt Mana und HP in der harten Laning Phase vor Liandry's, Cosmic Insight bringt Flash und Item-Actives in Teamfights schneller zurück."
    secondary_alternative: "Gegen schweren Poke oder Burst (Xerath, Syndra, Zed) swap Inspiration auf Resolve mit Second Wind (Regen gegen Ranged-Harass) und Bone Plating (frisst die ersten 3 Hits eines All-in-Combos)."
matchup_draft:
  pick_into:
    - examples: ["yasuo", "yone", "akali", "irelia", "zed"]
      archetype: "Dash-abhängige Mid-Laner"
      reason: "Miasma grounded sie in der Wolke: in dem Moment, in dem sie reintreten, sind Dash, Blink und Movement-Spells gesperrt. Ihre Kits brechen gegen einen Champion, der ihr Haupt-Escape löscht."
    - examples: ["karthus", "veigar", "anivia"]
      archetype: "Immobile Mages ohne Escape"
      reason: "Cassiopeia gewinnt lange Trades gegen alle, die zum Casten stillstehen müssen: E (cd 0.75s) macht auf vergifteten Zielen mehr Schaden als ihre vollen Rotationen, und sie können der W-Zone, die du auf sie legst, nicht ausweichen."
    - examples: ["renekton", "sett"]
      archetype: "Melee-Bruiser, die auf dir kleben müssen"
      reason: "Ohne langen Dash müssen sie 700 Einheiten durch W und Q-Poison laufen, um dich zu treffen. Twin Fang heilt dich bei jedem Trade auf Full-HP zurück."
  counterpicks:
    - examples: ["xerath", "vel-koz", "ziggs", "lux"]
      archetype: "Long-Range-Artillery-Mages"
      reason: "Sie pokken jenseits Cassiopeias 850 Q-Reichweite. Ohne Dash kann sie die Distanz nicht schließen, also blutet jede Wave HP. Ihre Power-Kurve braucht Lane-Farm, die sie nicht sicher nehmen kann."
    - examples: ["twisted-fate", "galio", "ryze"]
      archetype: "Globale / Cross-Map-Roamer"
      reason: "Cassiopeia hängt an Mid (kein schneller Roam). Gegner flippen mit Ult Side-Lanes und Drakes; sie gewinnt das 1v1, verliert aber das Macro Game (Objective-Trades, die anderswo auf der Map passieren)."
    - examples: ["lissandra", "syndra"]
      archetype: "Burst-Mages mit Chain-Lock-CC"
      reason: "Sie sperren Cassiopeia, bevor W sie grounded, und ziehen die Full Combo durch. Lissandras R ist Point-and-Click — Banshee's hilft, rettet aber nicht vor einer 6-Sekunden-Stun-Kette mit Jungle-Follow-up."
---

## Überblick

Cassiopeia ist eine Battlemage (Mage, der auf mittlerer Distanz kämpft, nicht aus dem Hintergrund) mit etwa 700 Reichweite — knapp außerhalb der Basic-Auto-Attack-Distanz. Sie gewinnt lange Trades (Schadensaustausch in Lane) gegen fast jeden, der einen Dash braucht, um sie zu erreichen. Ihre **Twin Fang (E)** hat 0,75 Sekunden Cooldown — den niedrigsten aller Mid-Laner — also wird sie, sobald **Noxious Blast (Q)** ein Ziel vergiftet hat, zu einem konstanten Schadens-Stream, der sie gleichzeitig heilt. **Miasma (W)** ist die Signatur: Gegner in der Wolke werden *grounded*, also funktionieren Dashes, Blinks und Movement-Spells nicht mehr, bis sie sie verlassen. Pick sie gegen mobile Assassinen (Kits, die rein und raus dashen, etwa Yasuo, Akali, Zed) und du nimmst ihnen ihr Werkzeug.

Ihr Game Plan ist kurz beschrieben und langsam ausgeführt: vergifte die Wave (Reihe an Minions) mit **Q**, spam **E** für Clear und Harass, lass **W** fallen, sobald ein Dash-basierter Gegner engaget (in den Fight committed), und ziele **R** auf Level 6 frontal — der Kegel stunt, wer dir ins Gesicht schaut, und slowt nur den Rest. Sie hat keinen Dash, keinen Blink, kein Movement-Äquivalent auf der Bar, also ist Positioning der Preis jedes Plays. Ein Schritt zu weit nach vorn und das Kit kollabiert in einer einzigen CC-Kette (Abfolge aus Stuns und Roots hintereinander). **CC** = "Crowd Control", jeder Effekt, der dich unterbricht: Stun, Root, Slow, Silence.

## Empfohlener Build

**Starter-Items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Cassiopeia ist mana-hungry (jedes E kostet Mana und sie spamt viele) und der Mana-Regen von Doran's ist genau das, was der E-Spam braucht.

**Core-Items (in Reihenfolge):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — erstes komplettes Item. Die Burn-Passive (Schaden über die Sekunden nach jedem Treffer verteilt, statt alles auf einmal) stackt auf jedem vergifteten Ziel, das deine E trifft, was bei Cassiopeia fast jeden Cast bedeutet.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flache Magic Penetration (das Item ignoriert einen Teil der gegnerischen Magic Resist, deine Spells treffen also härter). Cassiopeias Passive Serpentine Grace verstärkt zusätzlich den Move Speed der Boots.
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — der größte AP-Multiplikator (Ability Power, der Stat, der magischen Schaden scaled) im Spiel. Boostet den Pro-Cast-Schaden der E, die du in einem langen Teamfight 30+ Mal feuerst.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — Magic Penetration, die härter scaled, sobald der Gegner unter 35% HP fällt (HP-Schwellen-Passive: ein Effekt, der unter einem Lebens-Prozentsatz aktiviert). Passt perfekt zum Finishen der Backline-Carries (squishy Damage Dealer wie ADCs und Mages, die dein Team zuerst killen muss).

**Situative Items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — gegen Burst-Assassinen (Zed, Talon, Akali — Champions, die in 1-2 Sekunden enormen Schaden machen). Die 2,5-Sekunden-Stasis-Active (du wirst unverwundbar, kannst aber weder dich bewegen noch casten) kauft Zeit, bis **E** wieder oben ist und Mitspieler peelen (Gegner von dir wegblocken) können.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — gegen magische Single-Target-CC, die dich aus der E sperrt (Ahris Charm, Lissandras R, Twisted Fates Gold-Card-Stun).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — gegen Comps mit gestapeltem Healing (Soraka mid, Vladimir, Dr. Mundo top): trägt Grievous Wounds auf (Debuff, der gegnerische Heilung etwa halbiert) und cappt Lifesteal (HP, die durch zugefügten Schaden zurückkommen) und Regen.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — swap in den Shadowflame-Slot, sobald ein Priority-Target (der Gegner, den dein Team am dringendsten tot braucht — meist deren Haupt-Carry) ein Magic-Resist-Item kauft.
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — gegen schwere Melee-Comps, die dich runterlaufen wollen. Jedes E refresht einen Slow auf dem Ziel und peelt (schützt) deine Backline zusätzlich zum W-Ground.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** ist Default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** (Boots mit Ability Haste, also kürzeren Spell-Cooldowns) sind okay, wenn du mehr **W**-Uptime willst, um Dashes für das Team gesperrt zu halten.

**Skill-Order:** Maxe **E** zuerst (Haupt-DPS-Knopf), **Q** als zweites (Poison und Move Speed), **W** zuletzt. Punkt in **R** auf Level 6, 11 und 16.

**Runen:** Primärbaum **Sorcery** mit Keystone **Stormraider's Surge** (ein Keystone ist die wichtigste Rune oben im Baum; "proccen" heißt den Effekt auslösen — Stormraider's prockt nach 3 schnellen Spell-Hits), **Manaflow Band**, **Transcendence**, **Gathering Storm**. Sekundär **Inspiration** mit **Biscuit Delivery** und **Cosmic Insight**, oder **Resolve** mit **Second Wind** und **Bone Plating** gegen schweren Poke (Long-Range-Chip-Schaden, der HP runterzehrt).

## Wichtige Matchups

- **Yasuo / Yone:** Kit voller Dashes. Ihr drittes Q ist ein Knock-up-Dash — beim ersten Mal, dass sie auf dich springen, leg **W** unter deine Füße. Sie kleben in Melee ohne Movement, der **E**-Spam gewinnt. Heb **R** für ihre Ult auf, damit sie den Stun frontal fressen.
- **Zed:** Threat Champion. Kauf ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** als zweites komplettes Item, falls er einen Lead bekommt. Lass **W** auf dich fallen, in dem Moment, in dem er seine Ult castet (er markiert dich und teleportiert auf einen Shadow Clone); landet er hinter dir, ist der Shadow-Swap-Teleport durch W *grounded* und er kann nicht entkommen.
- **Xerath:** Hartes Matchup. Er pokt jenseits deiner **Q**-Reichweite (chippt dein HP aus einer Distanz, in der du nicht zurückschlagen kannst). Gib unter Tower etwas CS auf (Creep Score: Gold aus gekillten Minions) und such Level 6 einen Roam (Lane verlassen, um einem Mitspieler zu helfen) nach Bot — ihn in Lane zu fighten kostet nur HP für nichts.
- **Akali:** Vor Level 6 gewinnst du lange Trades mit E-Spam auf vergifteten Zielen. Nach 6 versteckt sie ihr Smoke Shroud (W) und bricht dein E-Target. Warde die Flanken und shove nicht zu weit ohne **R** ready.
- **Twisted Fate:** Lane gewinnst du, Map nicht. Er stunt dich mit Gold Card, ultet auf Bot und macht das Spiel zu einem Cross-Map-Fight (Kill weit weg von dir), den du nicht beeinflusst. Push die Wave on Cooldown und ping deine Bot-Lane jedes Mal, wenn seine **R** zurückkommt.

## Power Spikes & Siegbedingungen

- **Level 2:** Mit **Q** und einem Punkt in **E** hast du den ersten Vergift-und-tap-Loop. Lauf nach vorn, wenn ihre Wave (Reihe an Minions) größer ist als deine, und erzwing einen Trade.
- **Level 6:** **Petrifying Gaze (R)** schaltet sich frei. Eine frontale **R** auf kurzer Distanz stunt ~1,5 Sekunden — mehr als genug für die volle Combo **Q-W-E-E-E**. Erzwing einen Fight beim Wave-Bounce (der Moment, in dem die Reihe an Minions stoppt und zu dir zurückläuft).
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment fertig (~ Minute 11-13):** Dein E-Spam trägt jetzt einen Burn (Damage over Time) zusätzlich zum Hit-Schaden auf. Du shovst Waves doppelt so schnell und drückst die Roam-Fenster des gegnerischen Mid-Laners.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ Minute 24-28):** Der Schaden pro E-Cast scaled hart (gewinnt enorm Power durch dieses Item). Such, Mid-Lane-Teamfights um Objectives (Drake, Baron, Türme) zu verankern — Cassiopeia steht spät näher am Fight als andere Mages, fast wie eine zweite Frontline.

## Häufige Fehler

- **E ohne Poison auf dem Ziel casten.** **Twin Fang** macht auf cleanem Ziel normalen magischen Schaden und Bonus-Schaden nur auf Vergifteten. Immer zuerst **Q** (oder W), dann E-Spam — niemals umgekehrt.
- **W für den perfekten Engage zurückhalten.** **Miasma** ist auch Verteidigung. Sobald Yasuo W castet (die Wind Wall, die Projektile blockt) oder Akali ultet, lass **W** unter dich fallen. Der Ground bricht ihre Movement-Abilities, auch wenn dein Team nicht zum Follow-up bereit ist.
- **R blind anvisieren.** **Petrifying Gaze** stunt nur Gegner, die dir ins Gesicht schauen. Von der Seite oder von hinten slowst du sie nur und verschwendest den Cooldown. Lauf vor den Fight, dreh dich, dann tap R.
- **Ohne Vision über den River pushen.** Cassiopeia hat keinen Escape. Ohne Ward (Vision-Trinket, das auf der Map gestellt wird) im River-Bush schließt ein einziger Jungler-Gank (ein *Hinterhalt*) mit Hard CC (lange Stuns oder Roots, im Gegensatz zu Soft CC wie Slows) deine Lane.
- **Mana in den ersten 5 Minuten ignorieren.** Jedes E kostet flat 40 Mana, egal welcher Rang. Wiederholt auf Minions zu casten, bevor Manaflow Band steht, leert deine Bar in zwei Waves und macht dich wehrlos gegen einen All-in (volles Commit, dich zu töten).

## Fortgeschrittener Tipp

Übe, **W (Miasma)** *unter deine eigenen Füße* fallen zu lassen, im Moment, in dem ein Dash dich trifft — nicht vor dich. Der Ground-Effekt greift, sobald die Wolke landet — wenn Yasuo, Yone oder Akali aus dem Melee engagen, stehen sie genau dort, wo die Wolke spawnt, und verlieren sofort den Zugriff auf ihren zweiten Dash. Die meisten Cassiopeia-Spieler legen W weiter vor sich wie einen Poke-Spell und verpassen die defensive Nutzung, die fast jeden Assassin-All-in auf der Stelle beendet.
