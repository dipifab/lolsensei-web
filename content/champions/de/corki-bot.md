---
title: "Corki Bot Build & Guide — Patch 16.9"
slug: "corki-bot"
language: "de"
patch: "16.9"
champion: "corki"
role: "bot"
last_updated: "2026-05-02"
description: "Corki Bot Lane Guide für League of Legends Patch 16.9: Hybrid-ADC-Build, Runen, wichtige 2v2-Matchups, Power Spikes, häufige Fehler und ein fortgeschrittener Tipp."
quick_learn:
  champion_dd_id: "Corki"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hybrid"
  abilities:
    - key: "P"
      name: "Hextech Munitions"
      description: "Ein Teil des Auto-Attack-Schadens wird zu True Damage. Stetige DPS-Quelle, die Armor und Magic Resist ignoriert — der Grund, Attack Speed und On-Hit-Items zu stapeln."
      dd_spell_id: "Corki_Passive"
    - key: "Q"
      name: "Phosphorus Bomb"
      description: "Gezielte AoE-Bombe mit magischem Schaden, die Gegner kurz aufdeckt. Für Last-Hits beim Zonen, Bush-Checks und um jeden Poke-Trade in Lane zu eröffnen."
      dd_spell_id: "PhosphorusBomb"
    - key: "W"
      name: "Valkyrie"
      description: "Kurzer Dash, der eine Feuerspur hinterlässt. Deine einzige Mobility: Flucht, Gap-Close oder Skillshot-Dodge. Langer Cooldown — nicht für Waveclear verschwenden."
      dd_spell_id: "CarpetBomb"
    - key: "E"
      name: "Gatling Gun"
      description: "Gechannelter Kegel vor Corki: macht Schaden und shreddet Armor und Magic Resist getroffener Gegner. Bringt anhaltende DPS und weicht Tanks für die R-Missiles auf."
      dd_spell_id: "GGun"
    - key: "R"
      name: "Missile Barrage"
      description: "Reichweitenstarke Missile, die beim Aufprall explodiert. Bis zu 7 Ladungen; jede dritte ist eine Big One mit zusätzlichem Burst. Dein Haupt-Poke und Execute-Tool."
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
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "3046", name: "Phantom Dancer" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "gegen Frontline mit 2+ Tanks (Sion, Ornn, Maokai): heftige Armor Pen, damit anhaltender DPS weiter durchschneidet"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "gegen Heal-stapelnde Comps (Soraka, Aatrox, Vladimir, Dr. Mundo): Grievous Wounds halbieren ihren Heal"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "gegen schweren AP-Burst (Brand support, Veigar, Syndra mid): das Magieschild absorbiert eine Full Combo, du W-est raus"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "gegen Single-Target-Lockdown-Ults (Malzahar R, Skarner R, Mordekaiser R): Active cleanst die Suppression, die dich sonst löscht"
  base_combo: ["Q", "AA", "R", "AA", "E"]
  win_condition: "Überlebe das 2v2 bis zu zwei Items mit R-Poke und Q-Sustain, dann carry späte Teamfights mit Manamune-stacked Autos und R Big Ones aus der Backline."
  weakness: "Squishy mit nur einem Dash. Aggressive Early-Lanes (Draven, Lucian + Engage-Support) shoven dich vor Trinity vom CS, und Projektil-Blocker (Yasuo Wind Wall, Braum E) fressen den Poke."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8021
      name: "Fleet Footwork"
      icon_path: "perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision primär: Fleet Footwork proct auf Autos (die Corki dank True-Damage-Passive spammt) und liefert Heal plus Movement-Burst — der Lane-Sustain für ein langes 2v2. Triumph und Coup de Grace finishen Kills, Legend: Alacrity stapelt Attack Speed."
    secondary_rationale: "Inspiration sekundär: Magical Footwear verzögert den Boots-Kauf, gibt aber vorher Stats woanders; Cosmic Insight reduziert Summoner-Spell-Cooldowns (häufigeres Flash und Heal), der größte Survival-Hebel im Bot-2v2."
    secondary_alternative: "Gegen eine schwere Poke-Lane (Caitlyn + Lux, Ezreal + Karma), wo du dir Magical Footwears Boots-Delay nicht leisten kannst, swap Inspiration auf Sorcery mit Manaflow Band (Mana-Sustain auf R-Spam) und Gathering Storm (Late-Game-AP-Scaling)."
matchup_draft:
  pick_into:
    - examples: ["jinx", "twitch", "kog-maw"]
      archetype: "Hypercarrys mit kurzer Reichweite ohne Escape"
      reason: "Corki out-ranged sie pre-Trinity mit R-Poke auf 1225 Units und einem W, das sie nicht haben. Sie müssen in Last-Hit-Range bleiben, und Corki blutet sie aus, bevor ihr Hyper-Carry-Spike kommt."
    - examples: ["senna", "ezreal"]
      archetype: "Statische Poke-ADCs"
      reason: "Reichweite gleich, aber Corki hat einen Dash plus eine sofortige Q-Zone, während Senna und Ezreal mit Single-Projectile poken. Er kann auf einen Minion W-en, der eine Q gefressen hat, und zurücktraden, ohne Cooldowns zu verbrennen."
    - examples: ["sivir", "ashe"]
      archetype: "ADCs ohne Point-and-Click-Escape"
      reason: "Sivirs Spell Shield blockt nur eine Ability — sie frisst Q, der nächste Missile trifft frei. Ashe hat keinen Dash. Corki snowballt das Matchup mit W-Repositioning, das sie nicht beantworten können."
  counterpicks:
    - examples: ["draven", "samira"]
      archetype: "Lethality-Burst-Early-Game-ADCs"
      reason: "Sie out-traden Corki in den ersten 6 Levels und snowballen über Lane-Kills. Corki kann sie pre-Trinity nicht duellieren, und jedes aggressive W wird durch ihre Dash-Reset-Patterns bestraft."
    - examples: ["lucian", "tristana"]
      archetype: "Multi-Dash-Auto-Trade-Lanes"
      reason: "Lucians E und Tristanas W gehen frei in und aus Corkis Auto-Range. Lucian out-scaled außerdem das True Damage des Passives mit seiner Auto-Q-Chain in Early Levels und schlägt Corki vor Items direkt."
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall Projektil-Blocker (off-meta bot)"
      reason: "Wind Wall frisst die Q und das gesamte R-Barrage. Auch wenn diese Champions in Bot off-meta sind, ist das Matchup hart, weil zwei Drittel von Corkis Schaden im Trade verschwinden."
---

## Überblick

Corki bot ist ein Hybrid-Marksman (Ranged-Auto-Attack-Carry, der physischen und magischen Schaden mischt), der die Lane wie ein Mage-Carry spielt: er chippt feindliche HP von weit weg ("poke") mit **Missile Barrage (R)** auf 1225 Units, killt Minions und harasst (kleiner wiederholter Schaden) mit **Phosphorus Bomb (Q)**, und sobald **Trinity Force** plus **Manamune** stehen (fully built), carryt er späte Teamfights mit Auto-Attacks, die dank **Hextech Munitions (P)** einen Teil als True Damage (Schaden, der Armor und Magic Resist ignoriert) auflegen. Die Rolle passt zu ihm, weil ein Support ihm die Early-Zeit kaufen kann, die er zum Skalen (stärker werden, sobald Items online kommen) braucht, und Diver peelen kann (den Carry vor Gegnern schützen, die ihn erreichen wollen), während er seinen einzigen Dash, **Valkyrie (W)**, nur bei echten Gelegenheiten committet.

Game Plan in einem Satz: trade (kurze Schadenswechsel) mit R + Q aus Maximalreichweite, um das gegnerische 2v2 zu chippen, niemals W ohne Follow-up-Plan ausgeben, und in ein Late Game ramp, in dem Manamune-empowered Autos plus R Big Ones (jede dritte R-Missile ist stärker) Squishies (HP-schwache Carrys, die hinten stehen) in der Backline one-shotten (in einer Combo killen).

## Empfohlener Build

**Starter-Items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Die Blade gibt Lifesteal (ein Teil des verursachten Schadens heilt dich) und passt zur Auto-Attack-Passive — sie übersteht Early Q + Auto-Trades besser als Doran's Ring für einen ADC.

**Core-Items (in Reihenfolge):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — Sheen (eine Komponente von Trinity) proct (löst einen Bonus-Schadenseffekt aus) auf jede Q und jede R-Missile, plus AD, Attack Speed, Ability Haste (Cooldown-Reduction) und Movement Speed. Der größte einzelne Power Spike des Champions.
2. ![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) **Manamune** — Manamune verwandelt sich langsam in eine stärkere Version namens Muramana, während du Mana ausgibst; einmal "stacked" (vollständig transformiert), fügt es jedem Auto und jeder mana-kostenden Ability Bonus-Schaden hinzu, R-Missiles eingeschlossen.
3. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — flache Attack Speed kombiniert mit Trinity und dem On-Hit True Damage des Passives. Default-Boot für Bot Corki.
4. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — dein erster Auto auf einen Gegner ("energized auto") macht Bonus-Schaden und reicht weiter als Normal-Range. Das Crit Chance passt zum Trinity-Stat-Profil.
5. ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — Attack Speed plus Crit (Chance, dass Autos Bonus-Schaden machen) für anhaltenden DPS durch **Gatling Gun (E)** und das On-Hit True Damage der Passive.

**Situative Items:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — gegen Frontline mit 2+ Tanks (Sion, Ornn, Maokai): heftige Armor Pen, damit anhaltender DPS weiter durchschneidet.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — gegen Heal-stapelnde Comps (Soraka, Aatrox, Vladimir): Grievous Wounds halbieren ihren Heal.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — gegen schweren AP-Burst (Brand support, Syndra mid): das Magieschild absorbiert eine Full Combo, du W-est raus.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — gegen Single-Target-Lockdown-Ults (Malzahar R, Skarner R, Mordekaiser R): das aktive Cleanse bricht die Suppression, die dich sonst löscht.

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** ist Default. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**, wenn das gegnerische Team 3+ AD-Threats hat, die dich in Fights fokussieren.

**Skill-Order:** Maxe **Q** zuerst (Poke, Waveclear, magischer Schaden), **E** als zweites (DPS plus Armor- und Magic-Resist-Shred), **W** zuletzt (Utility). Punkt in **R** auf Level 6, 11 und 16.

**Runen:** Primär **Precision** mit **Fleet Footwork**, **Triumph**, **Legend: Alacrity** und **Coup de Grace**. Sekundär **Inspiration** mit **Magical Footwear** und **Cosmic Insight**, oder **Sorcery** mit **Manaflow Band** und **Gathering Storm** gegen schwere Poke-Lanes.

## Wichtige Matchups

- **Caitlyn:** Out-ranged dich. Bleib hinter Minions, um ihre Trap-Setups zu negieren, dodge ihre Q-Linie per Side-Stepping (seitliches Ausweichen) am Cast Indicator (die visuelle Linie auf dem Boden, wenn sie castet), und nähere dich nie einer Wand, an der ihre Q ricochettet (zurückspringt und ein zweites Mal trifft) für Bonus-Schaden. Heb W auf, um ihrer R-Execute zu entkommen, wenn du low bist.
- **Draven:** Härtester Early. Er out-tradet dich in Levels 1-5 und snowballt (frühe Führung wächst mit der Zeit) über Lane-Kills. Gib CS auf (Last-Hits = Creep Score = Gold), um am Leben zu bleiben, ping Gank-Fenster, wenn seine Spinning Axes droppen, und trade nie in eine fliegende Axt.
- **Lucian:** Will mit E (Dash) auf dich rein. Q ihn, wenn er den Dash committet, damit der Slow plus das CC (Crowd Control = Stuns, Slows, Roots) deines Supports den Trade umdreht. Niemals auf Melee-Range auto-traden; sein Passive-Doppelschuss bursted über den True-Damage-Vorteil.
- **Jhin + Lulu / Senna + Tahm:** Long-Range-Disengage-Lanes (Compositions, die deinen Engage mit Schilden und CC brechen). Du musst den Level-6-All-in gewinnen oder bis ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** stallen. Push die Wave mit Q + Autos und such ein R + W Gank-Setup mit deinem Jungler.
- **Samira:** All-in-Oppressor auf Level 6 (ihr Ult zwingt einen Fight, aus dem du nicht zurück kannst). Kauf ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar**, sobald ihr R einmal auf deinem Team trifft — das aktive Cleanse (entfernt einen Debuff) bricht ihre Chain. Pre-6 kannst du sie in Trades matchen; post-6 disengage mit W, bis deine R Big Ones ihren Damage-Ramp übersteigen.

## Power Spikes & Siegbedingungen

- **Level 2:** Mit Q + W oder Q + E kannst du schlechtes gegnerisches Positioning mit einem Q-AA-AA-Trade ("AA" = Basic Auto-Attack) bestrafen und mit W folgen, wenn der gegnerische Support nach vorne committet ist.
- **Level 6:** Erstes **Missile Barrage (R)** schaltet den All-in frei (ein Fight, den du voll committest, kein Rückzug). Mit R-Stocks plus Trinity Force in Sicht killt eine Q-AA-R-R-R-Combo plus Support-CC die meisten ADCs auf low HP.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force fertig (~ Minute 13-15):** Sheen-Procs auf jeder Q und jeder R-Missile machen aus Poke eine Kill-Threat. Das ist der Moment für All-in oder Drake-Fight, wenn die Vision (Wards, die die Map aufdecken) sauber ist.
- **![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) Manamune stacked (~ Minute 18-22):** Muramana fügt jeder mana-ausgebenden Aktion Bonus-Schaden hinzu; der Teamfight-Schaden verdoppelt sich grob im Vergleich zu pre-Stack. Erzwing hier Objective-Fights (Drake, Baron).

## Häufige Fehler

- **R off-Cooldown für Waveclear spammen.** R-Missiles sind ein endlicher Stock; wenn du sie auf Minions leerst, hast du im nächsten Teamfight null Burst im schlechtesten Moment. Push Waves mit Q + Autos; spar 4+ Missiles für Objectives.
- **W aggressiv ohne Follow-up nutzen.** W ist deine einzige Flucht. Ein Dash rein, um einen Kill zu finishen, der noch einen Auto gebraucht hätte, ist die klassische Art, wie Corki stirbt — wenn du ihn mit deinem Rest-Mana plus aktuellen Cooldowns nicht killen kannst, committe nicht (engagier dich nicht voll).
- **Auf Melee auto-traden ohne Support-Follow-up.** Das True-Damage-Passive sieht aus der Nähe verlockend aus, aber Corkis HP-Pool ist squishy (niedrig und fragil). Bleib auf R-Range, wenn der gegnerische Support hartes CC up hat.
- **![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge als 2. Item rushen.** Infinity Edge braucht hohes Crit Chance, um zu funktionieren, und Corkis erste drei Items (Trinity, Manamune, Berserker's) geben kaum Crit. Halte die Reihenfolge Trinity → Manamune → Rapid Firecannon → Phantom Dancer; Infinity Edge nur als 5. oder 6. Item.
- **Recall mit ungenutzten R-Stocks.** Stocks resetten beim Tod, bleiben aber beim Recall — feuer die übrigen Missiles auf eine Wave oder einen Tower, bevor du backst, statt sie liegen zu lassen.

## Fortgeschrittener Tipp

Tracke und nutze den **Big-One**-Rhythmus. Jede dritte R-Missile (die "Big One") macht deutlich mehr Schaden als die zwei regulären. Vor einem Teamfight zähl die gestockten Missiles — wenn die nächste eine Big One ist, heb sie für das Priority-Target auf; wenn du sie gerade verschossen hast, feuer die zwei Filler-Missiles in die Wave oder einen Tower, damit die Big One bereit für den Engage nachlädt. Spieler, die R blind feuern, verschwenden Big Ones auf Minions; Spieler, die den Count tracken, one-shotten Squishies (low-HP-Carries), wenn es zählt.
