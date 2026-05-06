---
title: "Kayle Top Build & Guide — Patch 16.9"
slug: "kayle-top"
language: "de"
patch: "16.9"
champion: "kayle"
role: "top"
last_updated: "2026-05-05"
description: "Kayle Top Guide für League of Legends Patch 16.9: Survival-Lane-Plan, Hyper-Scaling AS+AP-Build, wichtige Matchups, Power Spikes auf Level 11/16 und häufige Fehler."
quick_learn:
  champion_dd_id: "Kayle"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Fighter / Hyper-scaling Carry"
  abilities:
    - key: "P"
      name: "Divine Ascent"
      description: "Kayle verwandelt sich 4-mal beim Levelaufstieg (1, 6, 11, 16). Auf 6 erhält sie Ranged-Auto-Attacks; auf 16 feuern ihre Autos AOE-Feuerwellen on-hit."
      dd_spell_id: "Kayle_Passive"
    - key: "Q"
      name: "Radiant Blast"
      description: "Linearer Skillshot: Schaden, Slow und Shred von Armor + Magic Resist auf den ersten Gegner und alle dahinter. Einziges Ranged-Tool vor Level 6."
      dd_spell_id: "KayleQ"
    - key: "W"
      name: "Celestial Blessing"
      description: "Heal und Movement Speed auf Kayle und den nächsten Verbündeten. Sustain in der Lane vor Level 6, Peel und Chase-Tool später."
      dd_spell_id: "KayleW"
    - key: "E"
      name: "Starfire Spellblade"
      description: "Passiv: Magic Damage Bonus auf Auto-Attacks. Aktiv: nächste Auto wird ranged und macht Bonusschaden auf fehlende HP. Post-6 feuert die Passive AOE-Wellen on-hit."
      dd_spell_id: "KayleE"
    - key: "R"
      name: "Divine Judgment"
      description: "Zielt auf einen Verbündeten (oder sich selbst) für ein paar Sekunden Unverwundbarkeit, dann explodiert sie in AOE-Magic-Damage. Save Tool, Engage-Cover und Finisher."
      dd_spell_id: "KayleR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
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
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
  situational_items:
    - dd_id: "6655"
      name: "Luden's Echo"
      against: "swap als 2. Item, wenn die Lane ruhig ist und du einen Burst-Spike über Nashor's willst"
    - dd_id: "3091"
      name: "Wit's End"
      against: "gegen heftige AP-Top-Laner (Rumble, Vladimir, Sylas), wenn ihr Poke dich vor Level 11 zumacht"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "gegen Heal-stapelnde Comps (Aatrox top, Soraka, Dr. Mundo) — appliziert Grievous Wounds auf Autos"
    - dd_id: "3135"
      name: "Void Staff"
      against: "sobald zwei Gegner ein Magic-Resist-Item fertig haben (Mercury's Treads zählen nicht, nur fertige Items)"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "gegen Lanes, die per Auto-Attack gewinnen (Fiora, Camille, Tryndamere) — swap von Berserker's, wenn Überleben das Einzige ist"
  base_combo: ["Q", "AA", "E", "AA"]
  win_condition: "Überlebe die Lane bis Level 11, dann skaliere mit Nashor's Tooth + Rabadon's Deathcap. Auf 16 räumen deine AOE-on-hit-Wellen Teamfights aus der Backline unter R-Cover."
  weakness: "Vor Level 6 bist du ein langsamer, squishy Melee-Auto-Attacker mit einem kurzen Skillshot. Top-Laner mit starkem Early All-in (Darius, Renekton, Riven) töten dich vor jedem Power Spike."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision Primary: Lethal Tempo stapelt Attack Speed im Fight und skaliert die AOE-Wellen der Passive (post-6, post-16). Triumph heilt auf Takedowns, Legend: Alacrity gibt permanenten AS, Last Stand pusht Damage bei niedrigem HP — wo Kayle late lebt."
    secondary_rationale: "Inspiration Secondary: Biscuit Delivery liefert HP und Mana in der Survival-Phase pre-6, Cosmic Insight kürzt Cooldown von Flash und Item-Actives, sodass Zhonya's Hourglass im Teamfight schneller zurückkommt."
    secondary_alternative: "Gegen starke Poke-Lanes (Vladimir, Rumble, Quinn) tausch Inspiration gegen Resolve mit Second Wind (passive HP-Regen nach Schaden) und Overgrowth (permanentes HP-Scaling), um bis zum Level-11-Power-Spike in der Lane zu bleiben."
matchup_draft:
  pick_into:
    - examples: ["nasus", "mordekaiser"]
      archetype: "Stat-check tops with no early kill threat"
      reason: "Ohne Burst und Hard-CC-Chains können sie deine schwache Pre-6-Phase nicht bestrafen, und ab Level 11 mit Ranged-Autos out-DPSt du sie aus sicherer Distanz."
    - examples: ["veigar", "kayn"]
      archetype: "Late-game scalers without strong 1-9 windows"
      reason: "Ihr skaliert gleich schnell: jedes Team, das dich Level 16 erreichen lässt, gibt das Spiel auf, weil Kayles AOE-on-hit-Wellen ihren Wombo-Windup übertrumpfen."
    - examples: ["senna", "vayne"]
      archetype: "Carries you can babysit with R"
      reason: "Globale Ulti macht dich zum besten Peeler im Spiel — drop R in dem Moment, wo sie gedived werden, und dein Carry überlebt eine ganze Burst-Chain unbeschadet."
  counterpicks:
    - examples: ["darius", "renekton", "riven", "fiora"]
      archetype: "Early-pressure bruisers with all-in level 1-3"
      reason: "Sie töten dich vor dem Level-6-Power-Spike. CC-Chain plus Sustained Damage hauen 70%+ HP von Kayle in einem 4-Sekunden-All-in raus, und du hast keinen Dash zum Disengage."
    - examples: ["camille", "yone"]
      archetype: "Mobile lane bullies with multiple gap-closers"
      reason: "Camilles E-Hookshot und Yones Q3-Dash ignorieren die Position, die du halten willst; sie schließen die Distanz, bevor dein Q + Auto-Trade abschließt."
    - examples: ["olaf", "garen"]
      archetype: "Champions that bypass invulnerability"
      reason: "Olafs R gibt CC Immunity und True Damage auf R+Axt, Garens R macht True Damage skaliert auf fehlende HP — beide finishen dich durch Zhonya's Hourglass und sogar durch das Front-End deiner R."
---

## Überblick

Kayle ist eine Hyper-Scaling-Carry, die sich über das Spiel hinweg verwandelt: ein langsamer, squishy Melee-Auto-Attacker auf Level 1, eine Ranged-Pokerin auf 6, ein echtes Late-Game-Monster auf 11 und eine teamweite AOE-Abrissbirne auf 16. Ihre **Divine Ascent (P)** ist das Kit — jeder Meilenstein schaltet einen neuen Stat-Block frei (Attack Speed, Range, Feuerwellen on-hit). Die Top-Lane ist ihr natürliches Zuhause, weil die lange Lane ihr Raum gibt, passiv zu spielen, ohne Tempo zu bluten.

Ihr Game Plan ist Survival, nicht Aggression. Verlier CS, wenn es sein muss, stirb nie und vertrau dem Build: ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** auf Level 11 verwandelt die Ranged-Passive in echten Schaden, und ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** auf 16 lässt die AOE-on-hit-Wellen ganze Teamfights aus der Backline unter **R**-Cover löschen.

## Empfohlener Build

**Starting Items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + 1 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Der Schild verwandelt die Lane von „ich sterbe in zwei Trades" zu „ich verliere CS, aber ich überlebe". Skip Doran's Ring, auch wenn Kayle mit AP skaliert — vor Level 6 hast du das Kit nicht, um es zu nutzen.

**Core Items (in Reihenfolge):**

1. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — Attack-Speed-Boots speisen deine On-hit-Wellen. Boots zuerst rushen, dann Stück für Stück Richtung Nashor's bauen.
2. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — das wichtigste Einzel-Item für Kayle. Vereint die zwei Stats, die sie will, im selben Slot (50% Attack Speed + 90 AP) und packt Magic Damage on every hit drauf. Das ist der Spike, der dich von „schwacher Top-Laner" zu „echter Carry" macht.
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multipliziert dein gesamtes AP-Scaling um 30%, und du hast eine Menge zu multiplizieren (E-Passive, R, AOE-Wellen post-16).
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — die Stasis ist deine Rettungsleine gegen Diver und für das Timing deines R-Cooldowns. Bau es als drittes oder viertes Item, je nach Gegner-Comp.

**Situational Items:**

- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — gegen heftige AP-Top-Laner (Rumble, Vladimir, Sylas). Bringt Attack Speed plus Magic Resist plus Magic Damage on-hit, also defensiv und offensiv im selben Slot.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — gegen Heal-stapelnde Comps (Aatrox top, Soraka mid, Dr. Mundo). Appliziert Grievous Wounds auf jede Auto, das senkt Heal-Wirksamkeit um 40%.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — sobald zwei Gegner ein Magic-Resist-Item fertig haben (nicht Mercury's Treads — die sind zu billig; nur fertige Items zählen).
- ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — alternatives zweites Item, wenn die Lane ruhig ist und du einen Burst-Spike über Nashor's willst.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — gegen Lanes, die per Auto-Attack gewinnen (Fiora, Camille, Tryndamere). Swap von Berserker's, wenn die Lane zu überleben das einzige Ziel ist.

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** als Default für das Attack-Speed-Scaling. Plated Steelcaps, wenn ein AD-Bully die Lane unmöglich macht.

**Skill Order:** Maxe **E** zuerst (dein Damage-Tool vor und nach Level 6), **Q** als zweites (längerer Slow + besserer Shred pro Rang), **W** zuletzt. Punkt in **R** auf Level 6, 11, 16. Eröffnung **E-W-Q** für frühen Sustain in der Lane.

**Runes:** Primary **Precision** mit **Lethal Tempo**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Secondary **Inspiration** mit **Biscuit Delivery** und **Cosmic Insight**. Stat Shards: Attack Speed, Adaptive Force, Health Scaling.

## Wichtige Matchups

- **Darius:** Hard Counter. Maximale Distanz, du gehst nur für Last-Hits rein, niemals für Trades pre-6. ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** Start, akzeptier 30+ CS Verlust, ping den Jungler.
- **Garen:** Easy Lane post-6. Er kann deine Ranged-Auto mit nichts unterbrechen, also kite ihn (rückwärts laufen während du schießt, um Distanz zu halten) mit **Q**-Slow + Ranged-Auto. Vorsicht bei seiner **R** auf niedrigen HP — sie macht True Damage skaliert auf fehlende HP und ignoriert Zhonya's Hourglass.
- **Mordekaiser:** Survival pre-6, Snowball (wachsender Vorsprung: Kill → Gold → Item → mehr Kills) post-11. Seine **R** isoliert dich 7 Sekunden lang vom Team; wenn er dich vor Level 11 erwischt, stirbst du. Nutze **Flash**, um seinen **E**-Pull zu dodgen, und prebuilde **Mercury's Treads**, wenn er dich wiederholt erwischt.
- **Camille:** Counterpick. Ihr **E**-Hookshot ignoriert das Spacing, das du halten willst. Kauf ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** statt Berserker's, warde den Lane-Brush und ping den Jungler, wenn sie zwei Level voraus ist.
- **Nasus:** Even pre-6, du gewinnst post-11. Sein **W**-Wither (ein heftiger Slow auf dich) gewinnt ihm das Duell, bevor du Ranged-Autos hast. Sobald Nashor's online ist und du seinen Stack-Ramp out-DPSt, push Waves und zwing ihn zur Reaktion.

## Power Spikes & Siegbedingungen

- **Level 6 (R freigeschaltet):** Deine erste Form mit Ranged-Auto-Attacks geht live, und **Divine Judgment** gibt dir ein Save Tool. Hör auf, am Turm zu kleben — du pokest auf 525 Range und verwandelst Dives in Kills mit gut getimter **R** auf dich selbst.
- **Level 11 + ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth fertig (~ Minute 18-22):** Der größte Spike des Spiels. Auto-Attack-Range steigt nochmal, die Passive skaliert mit Attack Speed und AP, und der Wave Control kippt. Beginn das Group Play: rotier mit dem Team, sucht Objectives.
- **Level 16 (Full Ascension) + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ Minute 28-32):** Deine Auto-Attacks feuern AOE-Feuerwellen on-hit. Eine Auto auf die Frontline beschädigt alle dahinter. Ab hier solltest du die höchste Damage-Quelle deines Teams sein, egal welche Rolle.
- **Jederzeit mit ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) Zhonya's Hourglass + R-Combo:** Drück **R** auf dich für Unverwundbarkeit, dann verkette Zhonya's Hourglass, sobald R endet. Das sind etwa 5 Sekunden Immunität im Teamfight, während dein Team peelt — genug, um die meisten Engages umzudrehen.

## Häufige Fehler

- **Pre-6 Auto-für-Auto traden wollen.** Kayle ist Melee mit niedrigem Base Damage early. Schon ein einziger schlechter Trade gegen Darius oder Renekton startet den Snowball, den du nicht mehr aufhältst. Halte **W** für Sustain, nur Last-Hits.
- **R auf sich selbst für Poke-Survival verschwenden.** **Divine Judgment** hat 160 Sekunden Cooldown auf Rang 1 — der ganze Mid-Game-Teamfight ist weg. Heb **R** für eingehende All-ins auf oder zum Schutz deines ADCs bei Drake-Fights.
- **Auf Level 16 in der Frontline stehen.** Deine AOE-on-hit-Wellen funktionieren am besten aus der Backline, hinter deinem Tank. Positioniere dich wie ein ADC — lass die Frontline einstecken, während du Wellen durch sie hindurch feuerst.
- **Jungle-Camps vor Level 11 mitnehmen.** Kayle clear langsam und schwächt ihre HP vor dem Power Spike. Bleib in der Lane, push Waves, recall mit vollem Mana — keine Invades oder Scuttle-Fights vor Nashor's.
- **Boots zu früh für ein 6. Item verkaufen.** Late kannst du Boots gegen ein Damage-Item swappen (Mejai's Soulstealer, Cryptbloom), aber nur wenn du 5/0 vorne liegst und Teamfights garantierte Group Fights sind. Bist du even, behalt die Boots.

## Fortgeschrittener Tipp

Beherrsche das **R-on-self Peel Pattern** in Mid-Game-Teamfights. Wenn der gegnerische Diver (Camille, Hecarim, Sett) auf deine Backline springt, drück **R** nicht auf deinen ADC — drück sie auf dich selbst, lauf in die Dive-Linie und droppe die AOE-Explosion unter den Füßen des Divers. Die 2,5 Sekunden Unverwundbarkeit zwingen den Diver, entweder zu committen und die Explosion zu fressen (gratis Kill) oder zurückzuziehen (dein Team resettet den Fight even). Der Trick ist die Range: **R** hat 900 Cast Range, also kannst du dich selbst targeten, auch wenn du 8 Units hinter deinem ADC stehst.
