---
title: "Braum Support Build & Guide — Patch 16.9"
slug: "braum-support"
language: "de"
patch: "16.9"
champion: "braum"
role: "support"
last_updated: "2026-04-29"
description: "Braum Support Guide für League of Legends Patch 16.9: Starter, Tank-Peel-Build, Lane-Matchups, Power Spikes, häufige Fehler und ein abschließender Profi-Tipp."
quick_learn:
  champion_dd_id: "Braum"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Warden"
  abilities:
    - key: "P"
      name: "Concussive Blows"
      description: "Braums Auto-Attacks setzen einen Stack von Concussive Blows. Nach dem ersten Stack stacken auch die Autos der Verbündeten. Bei 4 Stacks wird das Ziel betäubt und erleidet magischen Schaden. Die Q setzt einen Stack auf Distanz."
      dd_spell_id: "Braum_Passive"
    - key: "Q"
      name: "Winter's Bite"
      description: "Linearer Skillshot mit langer Reichweite, der verlangsamt und magischen Schaden macht. Setzt einen Stack von Concussive Blows auf Distanz: das Setup-Tool, mit dem du die Stun-Kette startest, ohne in Auto-Attack-Reichweite zu laufen."
      dd_spell_id: "BraumQ"
    - key: "W"
      name: "Stand Behind Me"
      description: "Braum springt zu einem Verbündeten (Champion oder Minion). Bei Ankunft erhalten beide Armor und Magic Resist für ein paar Sekunden. Das Signature-Peel-Tool: du springst vor deinen ADC, um eingehenden Schaden zu body-blocken."
      dd_spell_id: "BraumW"
    - key: "E"
      name: "Unbreakable"
      description: "Braum hebt sein Schild für mehrere Sekunden in eine Richtung: er fängt jedes Projectile aus dieser Richtung ab, negiert die erste Basic Attack komplett und reduziert den Schaden aller folgenden Angriffe aus dieser Richtung."
      dd_spell_id: "BraumE"
    - key: "R"
      name: "Glacial Fissure"
      description: "Braum schlägt auf den Boden: Knock-up bei Gegnern neben ihm und in einer Linie vor ihm. Auf der Linie bleibt eine Eisspalte, die durchlaufende Gegner verlangsamt. Langer Cooldown: der Haupt-Engage- oder Peel-Knopf des Teams."
      dd_spell_id: "BraumRWrapper"
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3876", name: "Solstice Sleigh" }
    - { dd_id: "3109", name: "Knight's Vow" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "Swap von Mercury's vs auto-attack-heavy Bot Lanes (Caitlyn, Draven, Tristana), wenn früher Harass mehr wiegt als spätes CC"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "vs Comps, wo dein ADC die Hauptcarry ist und nahe bei dir bleibt (Aphelios, Jinx) — der R-Slow proct neben dem bonded ally"
    - dd_id: "2504"
      name: "Kaenic Rookern"
      against: "vs AP-Burst-Comps (Doppelmage wie Syndra mid + Brand support): das Magie-Schild frisst eine Ulti und du kannst weiter peelen"
  base_combo: ["Q", "AA", "AA", "R"]
  win_condition: "Lande Q auf eine Priority-Carry, walk-up zur Auto, die bei 4 Stacks stunt, dann peele deinen ADC mit W-Sprüngen und E-Wand. R, wenn das gegnerische Team in der Knock-up-Zone steht."
  weakness: "Langsam, immobil (kein Dash, kein Blink): Hard CC auf Distanz schneidet dich vom ADC ab. Q ist ein Skillshot — verfehlst du sie, gibt's keinen Kill-Threat, und eine verschwendete R sperrt dich aus dem nächsten Fight."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8306, name: "Hextech Flashtraption", icon_path: "perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "jhin", "senna"]
      archetype: "Immobile ADCs ohne Dash"
      reason: "Q hat 1000 Reichweite und setzt einen Concussive-Blows-Stack auf Distanz. Gegen einen ADC ohne Escape zünden eine Q + eine Auto deines ADC + deine Auto den Stun bei 4 Stacks: keine Möglichkeit, die Kette zu brechen."
    - examples: ["soraka", "sona", "yuumi"]
      archetype: "Squishy Enchanters ohne hartes CC"
      reason: "Sie können deinen Walk-up nicht stoppen. Sobald die Q trifft, haben sie kein Peel für ihren ADC, und deine E blockt jeden Healing-Cancel-Skillshot, den sie zur Rettung werfen würden."
    - examples: ["draven", "lucian"]
      archetype: "Aggressive Auto-Attack-ADCs, die zum Trade vorrücken"
      reason: "Ihr Kit zwingt sie in Q-Reichweite, um Äxte oder Dash-AAs zu werfen. Jeder Schritt nach vorne ist ein gratis Concussive-Blows-Stack: entweder ziehen sie zurück und verlieren Lane-Prio, oder sie fressen den 4-Stack-Stun."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "nautilus"]
      archetype: "Hook-Supports mit Point-and-click-Pull oder -Stun"
      reason: "Ein gelandeter Hook zieht Braum aus der W-Sprungreichweite zu seinem ADC. Während er hinten zerlegt wird, löscht der gegnerische ADC deine nun ungeschützte Carry."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "Long-range Mage-Supports, die jenseits der Q poken"
      reason: "Sie sitzen auf 1100+ Reichweite und chippen dein HP gratis. Braum hat keine Antwort jenseits seiner Q, und E hilft nur, wenn er schon nahe ist — sie gewinnen die Lane durch Zermürbung."
    - examples: ["ashe", "varus"]
      archetype: "ADCs mit Self-Peel durch eingebauten Slow"
      reason: "Der Slow auf ihren Auto-Attacks hält Braum auf Armlänge. Er erreicht keine W-Reichweite zum Body-block, sein Peel-Kit ist halbiert und die Frontline seines Teams kollabiert schneller."
---

## Überblick

Braum ist ein **Warden Support** (ein Support der Tank-Klasse, dessen Job es ist, den eigenen ADC zu beschützen, nicht Fights zu starten) — gebaut, um Gegner von seiner Carry weg zu peelen, nicht um die ihre zu diven. Das Kit dreht sich um eine Bedrohung: **Concussive Blows**, die Passive, die jedes Ziel betäubt, das von 4 Auto-Attacks von ihm oder Verbündeten getroffen wurde. Der Trick: **Winter's Bite (Q)** setzt einen Stack auf 1000 Reichweite, also wirft Braum erst Q, läuft an, und eine seiner Autos plus eine seines ADC zünden den Stun auf der gegnerischen Carry. **Stand Behind Me (W)** lässt ihn zu jedem Verbündeten springen und gibt beim Landen Armor und Magic Resist — das **Peel**-Tool (deine Carry vor Gegnern schützen, die sie töten wollen), das ihn einzigartig macht. **Unbreakable (E)** ist ein direktionaler Schild, der jedes Projectile aus der gewählten Richtung **body-blockt** (ADC-Auto-Attacks, Caitlyn R, Ezreal R, Ashe R). **Glacial Fissure (R)** ist der AOE-Linien-Knock-up: langer Cooldown, eingesetzt als Engage oder als Panic-Peel, wenn ihr **Diver** (ein Champion, der tief in die Backline springt) auf deiner Carry landet.

Game Plan: in der Lane **poke** (Chip-Damage aus der Distanz) mit Q, sobald der gegnerische ADC zum Last-Hitten vorkommt, dann walk-up für die Auto, die den Stun zündet — dein ADC entlädt im 1-Sekunden-Fenster. Nach Level 6 **roam** (verlasse die Bot Lane, um Mid oder Jungle zu helfen) mit R, um Picks vorzubereiten: dein **Lead** (früher Vorteil) kommt davon, Q-Stack-Stuns in Objectives umzuwandeln, nicht in Solo-Kills. Im Late-Game stehst du einen Schritt vor deinem ADC, springst mit W zurück, sobald er engagiert wird, und zündest E in der Linie jedes eingehenden **Skillshots** (eine Fähigkeit, die gezielt werden muss) — Braum ist der einzige Support, der eine Caitlyn-Ulti mitten im Channel verweigern kann.

## Empfohlener Build

**Starter-Items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (der vereinheitlichte Support-Starter) plus 2 Health Potions. Last-Hitte keine Minions in der Lane: lass das Gold deinem ADC, World Atlas zahlt dich separat über den Quest-Fortschritt aus.

**Core-Items (in Reihenfolge):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — Starter. Entwickelt sich automatisch, während du Quest-Fortschritt sammelst, durch ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** und ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds** hindurch, endend im Endgame-Upgrade deiner Wahl.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — Magic Resist plus **Tenacity** (eine Stat, die die Dauer von Crowd Control auf dir verkürzt). Standard-Boot für einen Peel-Tank: kürzere Stuns heißt, du erreichst W-Sprungreichweite zu deinem ADC, bevor er schon tot ist.
3. ![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) **Solstice Sleigh** — das peel-fokussierte Endgame-Upgrade des Support-Items. Wann immer du einen Champion CC'st (Q-Slow, Passive-Stun, R-Knock-up), verlangsamt es nahe Gegner zusätzlich und gibt dir und einem nahen Verbündeten einen Movement-Speed-Burst — genau das, was du brauchst, um ein Low-HP-Target zu chasen oder zu deiner Carry zurückzukiten.
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — bindet dich an deinen **ADC** (Attack Damage Carry — der Bot-Lane-Teamkollege, der Auto-Attack-Schaden macht, der Haupt-Damage-Dealer eures Teams im Late Game): ein Teil des Schadens, den er nimmt, wird auf dich umgeleitet, und du heilst ihn im Gegenzug. Wähle immer die Carry, deren Leben du am meisten verlängern musst.
5. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — Active, das alle nahen Verbündeten für ein paar Sekunden shieldet. Zünde es in dem Moment, in dem das gegnerische Team seinen Engage commitet, damit dein Team den ersten **Burst** (der hohe Schaden, den sie in den ersten 1-2 Sekunden eines Fights ablassen) absorbiert.

**Situative Items:**

- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — Stiefel, die Armor geben und den Schaden von Basic Attacks reduzieren. Tausche gegen Mercury's Treads, wenn die gegnerische Bot Lane auto-attack-heavy ist (Caitlyn, Draven, Tristana) und ihr Lane-**Harass** (Poke und Chip-Damage, um dich abzunutzen) dir mehr wehtut als das spätere CC des Gegnerteams.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — bind ihn an deinen ADC. Wenn du einen Gegner mit Crowd Control belegst (Q-Slow, R-Knock-up), macht die nächste Auto des Bonded Ally bonus magischen Schaden in einem Bereich — perfekt, wenn deine Carry nahe bei dir bleibt (Aphelios, Jinx) und du die Frontline mit Q ansetzt, um seine erste Auto vorzubereiten.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — passives Magie-Schild, das sich außerhalb des Combats regeneriert. Kauf es gegen AP-Burst-Comps (ein Doppel-Mage-Setup wie Syndra mid + Brand support) — das Schild frisst eine ganze Ulti und lässt dich weiter peelen, statt zuerst zu sterben.

**Stiefel:** Standard ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** für die Tenacity — ein 2-Sekunden-Morgana-Root wird zu 1,2 Sekunden, was dir das Fenster lässt, mit W zurück zu deinem ADC zu kommen. Wechsle zu ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** vor dem Fertigbauen nur, wenn die gegnerische Bot Lane auto-attack-heavy ist und dir mehr wehtut als das spätere CC des Gegnerteams.

**Skill Order:** Maxe **Q** (Winter's Bite) zuerst — sie ist dein einziger Range-Damage, dein Stack-Applier, und der Cooldown sinkt von 8 auf 6 Sekunden bei Rank 5 (mehr Poke, mehr Lane-Druck). Maxe **E** (Unbreakable) als zweites — längere Schildwand-Dauer macht das Teamfight-Peel sauberer. Maxe **W** zuletzt (der Sprung-Cooldown sinkt, aber die Resist-Werte zählen mehr in den frühen Ranks, und dir gehen selten W-Targets aus). Nimm **R** auf den Leveln 6, 11, 16.

**Runen:** Primär **Resolve** (Defensiv-Baum — Durability) mit **Aftershock** (gratis Armor und MR für ein paar Sekunden, wenn du jemanden CC'st, feuert bei jedem Passive-Stun und auf R), **Font of Life** (dein CC markiert das Ziel; Verbündete, die es angreifen, heilen ein bisschen), **Conditioning** vs late-scalende Lanes oder **Bone Plating** vs Early-Burst-Lanes, und **Unflinching** (extra **Tenacity**, die Stat, die CC auf dir verkürzt, wenn du einen Summoner Spell benutzt). Sekundär **Inspiration** (Utility-Baum) mit **Hextech Flashtraption** (Backup-Kurzdistanz-Flash auf langem Cooldown — Überraschungs-R-Winkel) und **Cosmic Insight** (niedrigere Cooldowns auf Summoner Spells und Locket-Active). **Stat Shards** (drei kleine Boosts unten auf der Runenseite): Health / Health / Health — Braum skaliert mit reinem HP, und frühe Durability lässt dich vorlaufen, um Q-Stacks zu setzen.

## Wichtige Matchups

- **Leona:** **Engage**-Matchup (sie will den Fight starten) gegen dein **Peel** (du willst ihren stoppen). Sie hat CC mit größerer Reichweite als deins (Zenith Blade Dash-Stun, Solar Flare R), also versuche früh keinen Body-block — bleib einen Schritt hinter deinem ADC und W weg, sobald ihr Zenith Blade fliegt. Sobald ihre E im Cooldown ist, hast du ein 10-Sekunden-Fenster, um vorzulaufen und ihren ADC gratis Q-zu-stacken.
- **Pyke:** Skill-Matchup — auf dem Papier kein klarer Vorteil, entscheidet wer besser spielt. Er pokt dich mit Q aus und out-roamt dich im **Stealth** (er wird unsichtbar, während er durch Büsche geht). Halte tiefe Vision in den River-Büschen, erzwinge Fights in der Lane, wo sein R-Reset egal ist, und E auf seinen R-Hook, um den Pull auf deinen ADC zu body-blocken.
- **Lulu:** Hard Counter gegen deinen **All-In** (volles Kill-Commit). Ihr Polymorph cancelt deine Auto-Attack mitten in der Kette — du zündest den 4-Stack-Stun nicht mehr. Commit nicht, wenn Polymorph up ist; tracke ihren Cooldown (rund 13 Sekunden bei Rank 1) und erzwinge Trades nur im Fenster, in dem er down ist.
- **Soraka:** Reine **Sustain Enchanter** (ein Heal-fokussierter Support, der gewinnt, indem er seinen ADC am Leben hält, nicht indem er Fights startet) ohne eigenes Engage-Tool. Du out-tradest sie: sie kann deinen Q + Walk-up nicht stoppen, und ihr Healing macht etwa die Hälfte deines Stun-Schadens. Erzwinge kurze Trades, wann immer ihre Q im Cooldown ist.
- **Senna:** Long-Range-**Poke**-Matchup (Chip-Damage aus der Distanz, um dich abzunutzen). Sie bullt dein HP unter dem Turm mit Q-durch-Minion-Schaden. Stell dich hinter die Welle, damit ihre Q an deinen Minions heilt, dich aber nicht trifft, und trade nur, wenn dein Jungler Bot-Side ist — Senna ohne Dash stirbt an einer einzigen Q-Stun-Kette.

## Power Spikes & Siegbedingungen

- **Level 2 (Q + W):** Erster Spike. Die volle Kette **Q + Walk-up-Auto + ADC-Auto** schaltet sich frei, sobald du W als zweite Fähigkeit hast, weil W dich aus dem Counter-Damage repositionieren lässt. Ein over-extender gegnerischer ADC (einer, der über seine erste **Wave** — die Reihe einlaufender Minions — gepusht ist) verliert 30% HP an einer Stack-Kette.
- **Level 6 (R freigeschaltet):** Engage und Peel steigen beide eine Stufe. **Glacial Fissure** ist ein langer Linien-Knock-up, den dein ADC in einen Kill umwandelt; alternativ ist es der Panic-Peel-Knopf, wenn ihr Zed auf deine Carry springt. Du kannst Flash-R auf Winkeln machen, mit denen ihr Team nicht rechnet — Flash nach vorne und sofort R casten ist das Überraschungs-Pick-Tool.
- **![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) Solstice Sleigh fertig (~Minute 12-14):** Erstes Teamfight-Item online. Der Movement-Speed-Burst auf CC lässt dich einen Low-HP-Gegner durch Minions chasen oder zu einer wankenden Carry zurückkiten. Gruppiere mit deinem Team für **Drake** (das Drachen-Objective im Bottom River — Kills geben deinem Team permanente Stat-Buffs) oder **Voidgrubs** (kleine Monster im Top River — das Team, das sie tötet, bekommt bonus Schaden gegen feindliche Strukturen).
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari Endgame (~Minute 22-26):** Mit Locket und voller E-Uptime kann dein Team einen Wombo Combo (ein verkettetes Team-Fight-Engage) überleben. Dein Job wird, mit E den Schadenskegel der gegnerischen Carry zu wallen, während dein Team ihre zuerst tötet.

## Häufige Fehler

- **Q werfen ohne Walk-up.** Eine Q-Slow allein ist keine Kill-Bedrohung — der Gegner spaziert aus der Reichweite und du hast 8 Sekunden Cooldown verschwendet. Q ist das **Setup** (der Move, der den Kill vorbereitet, nicht der Kill selbst); in dem Moment, in dem sie trifft, walk-up für die Auto. Ohne die Auto fallen die Concussive-Blows-Stacks nach ein paar Sekunden ab und der Lane-Reset kommt für nichts.
- **W auf deinen ADC, nachdem er schon tot ist.** W hat 650 Sprungreichweite auf 12 Sekunden Cooldown bei Rank 1. Wenn du wartest, bis deine Carry bei 20 HP ist, um zu springen, kommt der Resist-Bonus zu spät. Regel: W zu deinem ADC im **selben Moment**, in dem du den feindlichen Commit siehst (Leona Q fliegt, Blitz-Hook in der Luft, Zed-Schatten springt rein), nicht nachdem er auf null fällt.
- **Gratis vorne stehen.** Braums E schützt nur die Richtung, in die er schaut. Wenn du hinter deinem ADC bist, shieldet sie nichts. Standardposition ist einen Schritt vor und einen Schritt **in Richtung** der erwarteten Schadensquelle des Gegnerteams — schau zur Caitlyn, nicht zu deinem Jungler.
- **R auf einem einzelnen Ziel verbrennen.** **Glacial Fissure** ist ein AOE-Linien-Knock-up mit 100-130 Sekunden Cooldown. Sie zu nutzen, um einen einzigen Side-Lane-Gegner zu ulten, der eh schon halbtot ist, ist ein gratis **Throw** (ein Verschenken eines Vorteils) — du hast dich gerade aus dem nächsten Teamfight ausgesperrt. R nur, wenn 2+ Gegner in der Linie sind, oder wenn deine Carry ohne den Panic-Peel stirbt.
- **Passive-Stack-Reset vergessen.** Concussive-Blows-Stacks **fallen ab** nach ein paar Sekunden, wenn kein neuer Stack gesetzt wird, und ein gerade gestuntes Ziel kann mehrere Sekunden lang keine neuen Stacks bekommen. Auto-Attacks auf einen frisch gestunten ADC zu spammen bringt nichts — geh stattdessen zum nächsten Priority-Target weiter, oder zieh dich zurück und reset den W-Resist-Timer.

## Fortgeschrittener Tipp

Der **Flash-R**-Winkel. Braums R hat eine 1250-Reichweiten-Linie vor ihm; der Cast-Windup ist kurz genug, um nach vorne zu Flashen, sofort R zu drücken, und die Linie aus deiner **neuen** geflashten Position spawnen zu lassen — was eine Backline-Carry erwischt, die sich auf 1500 Reichweite sicher fühlte. Bind Flash und R in Reichweite derselben Hand und drille das Timing im **Practice Tool**, bis beide innerhalb einer fünftel Sekunde feuern. Hebe es für einen Fight auf, für den dein Team bereits gruppiert ist: ein Flash-R, das gegnerischen ADC plus Support erwischt, wandelt sich in ein sauberes Ace, während dasselbe R auf einem isolierten Mid-Laner ein langer Cooldown ist, der für eine Skirmish ausgegeben wurde.
