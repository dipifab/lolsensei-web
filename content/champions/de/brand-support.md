---
title: "Brand Support Build & Guide — Patch 16.9"
slug: "brand-support"
language: "de"
patch: "16.9"
champion: "brand"
role: "support"
last_updated: "2026-05-01"
description: "Brand Support Guide für League of Legends Patch 16.9: aggressiver Lane-Druck, Poke-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Brand"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Poke Support"
  abilities:
    - key: "P"
      name: "Blaze"
      description: "Brands Zauber setzen Ziele in Brand (Schaden über 4s, bis zu 3 Stacks). Bei 3 Stacks detoniert das Blaze als kleine AOE-Explosion und wendet Zaubereffekte erneut an."
      dd_spell_id: "Brand_Passive"
    - key: "Q"
      name: "Sear"
      description: "Linearer Skillshot mit magischem Schaden. Ist das Ziel bereits ablaze, wird es gestunt — dein Kill-Setup für die AD Carry."
      dd_spell_id: "BrandQ"
    - key: "W"
      name: "Pillar of Flame"
      description: "Verzögerte AOE-Zone nach kurzem Tell. Ablaze Ziele nehmen +25% Schaden. Höchster Poke-Schaden im Kit."
      dd_spell_id: "BrandW"
    - key: "E"
      name: "Conflagration"
      description: "Gezielte Explosion, die auf nahe Gegner überspringt. Ist das primäre Ziel ablaze, verdoppelt sich der Sprungradius — zwei Gegner mit einem Cast in Brand setzen."
      dd_spell_id: "BrandE"
    - key: "R"
      name: "Pyroclasm"
      description: "Langreichweitiger Feuerball, der bis zu 5-mal zwischen Gegnern springt und ablaze Ziele priorisiert. Gewinnt Teamfights, wenn der gegnerische ADC und Support eng beieinander stehen."
      dd_spell_id: "BrandR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "E" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "gegen hard CC auf deinem ADC (Leona Stun-Kette, Morgana Q, Pyke Hook)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "gegen Comps mit schwerem AOE-Engage (Malphite, Yasuo, Wukong, Kennen)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "gegen Heal-Stack-Comps (Soraka, Yuumi peel, Team mit Aatrox oder Vladimir)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap, sobald ein Priority-Target sein erstes Magic-Resist-Item baut"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "Drücke das 2v2 mit W-Poke vor Level 3, dann suche E + Q Stun-Setups für deinen ADC. Post-6 verwandeln R-Sprünge zwischen eng stehenden gegnerischen ADC und Support die Lane in einen Snowball."
  weakness: "Kein Shield, kein Heal, kein Peel für den ADC. Wenn der gegnerische Support zuerst engagt, kann Brand seine Carry nicht schützen — nur den Engager schneller töten als der Engager die Carry."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8229
      name: "Arcane Comet"
      icon_path: "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery primär: Arcane Comet proct automatisch bei jedem W- oder E-Treffer und bringt mit jedem Cooldown gratis Poke. Manaflow Band hält das Mana für W-Spam im 2v2, Transcendence drückt Ability Haste über 40%, Scorch finisht low-HP-Gegner unter Tower."
    secondary_rationale: "Inspiration sekundär: Biscuit Delivery löst Brands Mana-Hunger in den ersten 6 Levels und Cosmic Insight gibt mehr Flash-Uptime — Flash ist deine einzige Möglichkeit, einem Engage auszuweichen, das Kit hat keinen nativen Escape."
    secondary_alternative: "Gegen Hooker (Blitzcrank, Thresh, Pyke), wo du den ersten Hook überleben musst, swap Inspiration zu Resolve mit Bone Plating (reduziert Back-to-Back-Schaden) und Revitalize (verstärkt deine einzige Defensiv-Option, Mikael's-Shield)."
matchup_draft:
  pick_into:
    - examples: ["yuumi", "soraka", "janna"]
      archetype: "Squishy Enchanter mit niedrigen HP"
      reason: "Brands W out-poked ihre Heal-Reichweite und die E + Q Rotation tötet sie, bevor die Carry peelen kann. Yuumi verliert ihren Body bei einer einzigen vollen Rotation; Soraka kann nicht durch Blaze-Ticks heilen."
    - examples: ["zilean", "karma", "lulu"]
      archetype: "Utility-Supports ohne Engage"
      reason: "Brand gewinnt die Laning Phase per Brute Force — sie können W-Spam nicht bestrafen, weil ihr Kit auf Carry-Shielding ausgelegt ist, nicht aufs Traden. Nach Level 6 ist ihr CC single-target, während deine R beide auf einmal trifft."
    - examples: ["caitlyn", "ezreal", "varus"]
      archetype: "Long-Range ADCs ohne Escape"
      reason: "Diese ADCs sitzen auf Maximalreichweite zum Last-Hitten; ein E auf ihren Support spreaded Blaze auf sie, deine Q landet den Stun, und die AD Carry hinter dir holt den Kill, bevor sie flashen können."
  counterpicks:
    - examples: ["leona", "nautilus", "rell"]
      archetype: "Hard-Engage Tank-Supports"
      reason: "Sie engagen außerhalb von Brands W-Reichweite mit einer Flash-Stun-Kette. Er hat keinen Peel für sich oder seine Carry — sobald Leona stunt, hat das Kit keine Antwort außer sterben oder Flash + Zhonya's zusammen verbrennen."
    - examples: ["rakan", "alistar"]
      archetype: "Mobile Engage-Supports"
      reason: "Rakan dasht durch deine Skillshots und reißt deinen ADC aus der Position; Alistars Headbutt-Pulverize-Kette springt am Q-Stun vorbei. Brand reagiert auf keinen der beiden schnell genug."
    - examples: ["pantheon", "blitzcrank"]
      archetype: "All-in-Supports, die Brands Burst matchen"
      reason: "Pantheons Q und Blitzcranks Hook haben ähnliche effektive Reichweiten wie Brands Q. Wer sein Setup zuerst landet, gewinnt den Trade, und beide haben eingebauten Survival (Aegis Block, Hook-and-Leave), den Brand nicht hat."
---

## Überblick

Brand Support ist der aggressivste Caster-Support im Spiel. Er bringt nichts mit, was ein klassischer Support mitbringt — keinen Shield, kein Heal, keinen Peel für die Carry ("Peel" = Fähigkeiten, die einen Verbündeten schützen, indem sie Angreifer wegstoßen oder stunnen), keinen Engage, der in einer Tank-Survival-Cooldown endet. Was er stattdessen mitbringt, ist eine **flache Kill-Threat ab Minute 1**. Jeder Zauber setzt den Gegner in Brand (Passive **Blaze**), und sobald ein Gegner brennt, hört deine **Q (Sear)** auf, ein Schadenszauber zu sein, und wird zum Stun. Der Lane-Plan: poke sie mit **W (Pillar of Flame)** runter, bis zwei Blaze-Stacks halten, **E** um Blaze auf beide Targets zu spreaden, und **Q** als Stun, damit dein ADC heranlaufen und den Kill abschließen kann.

Der Preis ist Fragilität. Brand hat keinen Escape, keinen nativen Sustain und keine Tools, um seine AD Carry zu schützen. Wenn der gegnerische Support zuerst engagt — Leona Stun, Nautilus Hook, Rakan Dash — ist deine einzige echte Antwort, *den Engager schneller zu töten, als sie deine Carry töten*, was nur funktioniert, wenn du vorne bist. Der Pick ist binär: entweder stompst du die Lane und snowballst (ein Snowball ist ein früher Vorsprung, der wächst: Kill → Gold → Item → mehr Kills), oder du stirbst früh und fütterst zwei Gegner. Es gibt kaum eine Mitte, weshalb sich dieser Guide stark auf den Level-2-Spike und den **R**-Teamfight-Bounce als die zwei Momente stützt, die du sauber ausführen musst.

## Empfohlener Build

**Starter-Items:** ![Spellthief's Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3850.png) **Spellthief's Edge** (der AP-Support-Starter, der zu Bloodsong questet) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**.

**Core-Items (in Reihenfolge):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — die Support-Quest-Reward aus Spellthief's Edge. Pflicht: gibt das Gold-Income, mit dem du echte Items kaufst, plus einen AP-on-Takedown-Stack, der deinen Schaden snowballed.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — Brands identitätsstiftendes Schadens-Item. Prozentualer HP-Burn, der sich auf deine Blaze-Ticks stapelt und Tanks und HP-gestackte Teams bestraft.
3. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — Ability-Haste-Boots, hier vor Sorcerer's Shoes priorisiert, weil du als Support mehr Abilities castest und weniger Minions farmst. Mehr R-Uptime pro Teamfight.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — extra Burst plus eine Passive, die noch mehr Magic Resist gegen Gegner unter HP-Schwelle ignoriert. Passt zu R-Sprüngen, die das low-HP-Target jagen.

**Situative Items:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — gegen hard CC auf deinem ADC (Leona Stun-Kette, Morgana Q, Pyke Hook). Den CC von der Carry zu cleansen ist das, was Brand am nächsten an Peel hat.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — gegen Comps mit schwerem AOE-Engage (Malphite R, Yasuo Wombo — ein "Wombo" ist, wenn mehrere Ultimates zusammen ketten, um dein ganzes Team auf einmal zu erwischen, Kennen R). Der aktive Shield ist ein Teamfight-Save-Button.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — gegen Heal-Stack-Comps (Soraka, Yuumi peel, Team mit Aatrox oder Vladimir). Die Grievous-Wounds-Passive halbiert ihren Heal.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — sobald ein Priority-Target sein erstes Magic-Resist-Item fertig hat. Verhindert, dass eine einzige 800-Gold-Komponente deine Build soft-countered.

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** ist Default. Swap zu ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**, wenn das Gegnerteam 3+ hard-CC-Threats mit magischem Schaden hat.

**Skill-Order:** Maxe **W** zuerst (höchster Grundschaden und primärer 2v2-Poke), **Q** als zweites (mehr Stun-Schaden), **E** zuletzt. Punkt in **R** auf Level 6, 11 und 16.

**Runen:** Primärbaum **Sorcery** mit **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Sekundär **Inspiration** mit **Biscuit Delivery** und **Cosmic Insight**.

## Wichtige Matchups

- **Leona / Nautilus / Rell:** Hard-Engage-Tank-Supports. Bleib außerhalb ihrer Flash-Engage-Reichweite, bis du ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** hast. Pre-place **W** auf dich selbst, wenn sie nach vorne kommen, bereit, **Q** als Stun zu landen, sobald sie engage.
- **Blitzcrank / Thresh / Pyke:** Hooker. Steh immer hinter einem Minion — ihr Hook ist ein Single-Target-Skillshot, den die Wave bricht. Bestrafe verfehlte Hooks mit **W → Q** für gratis Poke; auto-attack nie aus der Deckung, wenn ihr Hook up ist.
- **Yuumi:** Free Lane. Yuumi hat keinen Body, wenn sie nicht angeheftet ist. Time **W** so, dass es genau in dem Moment landet, in dem sie sich löst, um Last-Hits zu nehmen oder ihren empowered Auto zu proccen. Eine entkoppelte Yuumi, die durch **W → Q** erwischt wird, ist ein Kill, bevor ihre Carry sie shielden kann.
- **Soraka:** Out-pression sie, indem du Poke stackst, bis ihr Mana leer läuft. Soraka heilt ihren ADC zum Preis von 5% ihrer eigenen HP — jeder Blaze-Tick auf dem ADC macht 30 Sekunden ihres Heals zunichte.
- **Lulu:** Polymorph und Shield machen 1v1-Bursts unzuverlässig. Poke aus maximaler **W**-Reichweite, commit nie zum Stun-into-All-in (ein "All-in" ist Total-Commitment auf den Kill — kein Ausstieg, du gehst, bis jemand stirbt), außer dein Jungle ist unterwegs; polymorpht Lulu deinen ADC mitten im Trade, ist der Trade verloren.

## Power Spikes & Siegbedingungen

- **Level 2 (W + Q):** Erster Spike. Mit einem Punkt in **W** plus der **Q** vom Start ist das **W → Q**-Stun-Combo online. In diesem Fenster passieren 90% aller Brand-Support-Kills — push die Wave, um zuerst Level 2 zu hitten, dann lande das Combo auf dem gegnerischen Support.
- **Level 6 (R freigeschaltet):** Erster **Pyroclasm** ist up. Steht die gegnerische Bot Lane eng (fast immer — Supports stacken hinter ihrem ADC), macht eine einzige **R** ungefähr 50% der HP eines Squishys pro Sprung.
- **Bloodsong + Liandry's Torment online (~ Minute 14-16):** Schaden kippt. Ab hier out-damagest du jeden Enchanter-Support und drohst Kill auf einen fed ADC. Erzwing gegruppte Fights an Drake.
- **R + Shadowflame online (~ Minute 22-26):** Zwei gruppierte Gegner fressen die volle Bounce-Sequenz und sterben. Hier gewinnt Brand Teamfights aus dem Hintergrund — wähle Winkel, in denen die gegnerische Carry und der Support innerhalb der Bounce-Reichweite zueinander stehen.

## Häufige Fehler

- **Wave für Last-Hits autoattacken.** Als Support nimmst du keine Last-Hits — das Gold aus dem Farm der AD Carry finanziert die Lane. Steh hinten, poke mit **W**, und auto-attacke einen Minion nur, wenn deine Carry tot ist oder recallt.
- **Q als nackter Poke werfen.** **Q** ohne Ablaze ist ein langsames Projektil, das gegen Side-Steps verfehlt. Lege erst **W** auf den Boden oder **E** auf einen Minion, der Blaze spreadet — dann Q für den Stun.
- **Vor deinem ADC stehen.** Brand hat keinen Peel für sich selbst oder andere. Stehst du vorne, trifft dich der Engage, du stirbst, dein ADC ist ohne Support. Steh auf gleicher Tiefe oder einen Schritt zurück, mit einem Minion zwischen dir und dem Hook.
- **Einen einzelnen Gegner ulten.** **R** springt zwischen Targets mit Priorität auf Ablaze, aber mit massivem Damage-Falloff pro Sprung auf einem einzelnen Ziel. Spar **R** für Fights, in denen zwei oder drei Gegner in Bounce-Reichweite sind — nutze sie nie als Finisher auf ein einzelnes fliehendes Target.
- **W auf die aktuelle Position des Gegners pre-placen.** Pillar of Flame hat Delay vor dem Aufschlag. Cast es dorthin, wo der Gegner *in 0.6 Sekunden sein wird* — typischerweise der Spot, durch den er muss, um den nächsten Minion zu erreichen oder deinem Stun zu entkommen. Auf seiner aktuellen Position zu casten ist gegen jeden halbwegs aufmerksamen Gegner ein garantierter Miss.

## Fortgeschrittener Tipp

Übe das **Double-Spread-Setup**. Wenn der gegnerische Support und ADC eng zusammenstehen (typisch, wenn sie die Wave pushen oder der Support den ADC abschirmt), mach in dieser Reihenfolge: **W** zwischen sie → beide bekommen Blaze Stack 1. **E** auf den gegnerischen Support → Blaze Stack 2 auf dem Support, spreaded auf den ADC für Stack 2 auf dem ADC. Beide Targets sind jetzt auf 2 Stacks — du brauchst **Q** nicht mehr, um den Stun zu setzen, du brauchst sie als *Finisher*. Q auf den Support: Stack 3 landet, der Support wird gestunt, die instabile Detonation trifft auch den ADC und bringt ihn ebenfalls auf Stack 3. **R** springt jetzt zwischen zwei gestunten Targets auf maximalem Blaze, beide sterben, und du tradest nichts zurück. Das ist die Rotation, die einen "ordentlichen Brand Support" in einen Brand verwandelt, der jede Lane gewinnt.
