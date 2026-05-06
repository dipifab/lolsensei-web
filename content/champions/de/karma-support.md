---
title: "Karma Support Build & Guide — Patch 16.9"
slug: "karma-support"
language: "de"
patch: "16.9"
champion: "karma"
role: "support"
last_updated: "2026-04-29"
description: "Karma Support Guide für League of Legends Patch 16.9: Enchanter-Build, Runen, wichtige Matchups, Power Spikes, häufige Fehler und ein Schlusstipp für Anfänger."
quick_learn:
  champion_dd_id: "Karma"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Enchanter"
  abilities:
    - key: "P"
      name: "Gathering Fire"
      description: "Trifft Karma einen gegnerischen Champion mit einem Schadens-Skill oder Auto-Attack, sinkt der Mantra-Cooldown. Bleib aktiv in Trades, damit R bereit ist."
      dd_spell_id: "Karma_Passive"
    - key: "Q"
      name: "Inner Flame"
      description: "Linearer Skillshot, der beim ersten Treffer detoniert, Schaden anrichtet und Gegner in einem kleinen Bereich verlangsamt. Hauptpoke-Tool in der Lane."
      dd_spell_id: "KarmaQ"
    - key: "W"
      name: "Focused Resolve"
      description: "Tether (Verbindung) auf einen gegnerischen Champion. Bricht er nicht in der Dauer, gibt es zweimal Schaden plus Root. Die Bruchreichweite zählt."
      dd_spell_id: "KarmaSpiritBind"
    - key: "E"
      name: "Inspire"
      description: "Gezielter Schild auf einen Verbündeten plus kurzer Move-Speed-Buff. Auf den ADC für Disengage oder zum Killabschluss."
      dd_spell_id: "KarmaSolKimShield"
    - key: "R"
      name: "Mantra"
      description: "Empowert das nächste Q, W oder E. RQ fügt eine verzögerte AOE-Detonation hinzu, RW heilt Karma und rooted länger, RE schildet Verbündete in der Nähe und gibt mehr Move Speed."
      dd_spell_id: "KarmaMantra"
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3107", name: "Redemption" }
  situational_items:
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "gegen Heal-lastige Comps (Soraka, Yuumi, Vladimir, Dr. Mundo): kappt Heilung, sobald du sie mit Q triffst."
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "gegen AOE-Burst (Yasuo + Malphite, Orianna Ult): der teamweite Schild blockt die Wombo Combo."
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "gegen Single-Target-Magic-CC (Blitzcrank Hook, Morgana Q, Twisted Fate Stun)."
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "gegen Assassinen, die dich fokussieren (Zed, Talon, Akali): 2,5s Stasis lassen das Team peelen."
    - dd_id: "4005"
      name: "Imperial Mandate"
      against: "wenn das Team mehr Schaden aus deinem Poke braucht und ADC plus Jungler den Slow konstant bestätigen."
  base_combo: ["W", "RQ", "AA", "E"]
  win_condition: "Bullie die Bot Lane mit Q-Poke ab Level 1, setze Kills mit W-Root und Mantra-empowertem Q (RQ) auf, dann peele den ADC mit E und RE in Teamfights."
  weakness: "Squishy Enchanter ohne Dash. Hard-Engage-Supports (Leona, Nautilus, Rell) locken dich vor dem W-Tether, und ein verfehltes Q ist HP für nichts getradet."
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
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Ability Haste"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["zyra", "brand", "xerath"]
      archetype: "Immobile Mage Supports"
      reason: "Karmas Q-Range matcht ihre, und ihr E-Schild hebelt den Poke aus, also gewinnt sie lange Trades, indem sie die Lücke heilt, die sie nicht schließen können."
    - examples: ["soraka", "sona", "yuumi"]
      archetype: "Passive Enchanters ohne Hard CC"
      reason: "Sie können ein verfehltes Q nicht bestrafen, also poked Karma den ADC frei und snowballt die Lane, bevor sie ihren Item-Spike erreichen."
    - examples: ["draven", "kalista"]
      archetype: "Aggressive Lane-Bully-ADCs, die pokebare Supports brauchen"
      reason: "Karma E auf den eigenen ADC schluckt ihren All-In-Burst, dann tradet sie mit Q-RQ stärker zurück, weil Aery auf jeden Spell proct."
  counterpicks:
    - examples: ["leona", "nautilus", "rell"]
      archetype: "Hard-Engage-Tanks mit Point-and-Click-CC"
      reason: "Ihre Stuns landen, bevor Karmas W-Tether lockt, also frisst sie den Engage ohne Root und stirbt, bevor das E den ADC retten kann."
    - examples: ["pyke", "thresh", "blitzcrank"]
      archetype: "Hook-Supports mit großer Reichweite"
      reason: "Karma hat keinen Dash, um einem sauberen linearen Skillshot zu entkommen; ein Hook auf Level 2-3 schließt die Lane, weil sie kein Escape-Tool besitzt."
    - examples: ["alistar", "rakan"]
      archetype: "Mobile Peeler-Engager"
      reason: "Sie blinken auf Karma drauf, schneller als sie Q oder E casten kann, und brechen den Root mit eigenen Knock-ups, bevor das W tickt."
---

## Überblick

Karma ist ein Hybrid aus Enchanter und Poke-Support: Ein Enchanter ist ein Champion, der ums Heilen und Schilden der Mitspieler herumgebaut ist, und "Poke" bedeutet, dem Gegner aus der Distanz HP abzuknabbern, ohne sich auf einen vollen Fight festzulegen. Sie poked mit **Inner Flame (Q)**, lockt Ziele mit **Focused Resolve (W)** und schützt ihren ADC (den Ranged-Carry neben ihr in der Bot Lane) mit **Inspire (E)**. Ihr Ultimate **Mantra (R)** ist kein eigener Spell, sondern eine Verstärkung, die dem nächsten Q, W oder E einen zusätzlichen Effekt gibt. Weil Mantra ab Level 1 verfügbar ist, ist Karma einer der wenigen Champions, die ihr "Ult" schon beim ersten Cast in der Lane haben — jeder Auto-Attack auf einen Champion senkt den Cooldown dank ihrer Passive **Gathering Fire**.

Der Game Plan: Bot Lane gewinnen mit Q-Poke on Cooldown, mit W nach einem Root angeln (ein "Root" stoppt die Bewegung des Gegners für kurze Zeit), wenn der Gegner für ein Last-Hit nach vorn tritt, und den ADC mit E schilden, um den All-In zu schlucken (ein voller Fight bis zum Tod). Ab Minute 12, mit ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** und ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** fertig, wechselt Karma in eine Teamfight-Enchanter-Rolle, die einen verbündeten Frontline-Carry schildet (Frontline = der Tank oder Fighter, der den Fight eröffnet) und die Back Line (Back Line = die Carrys, die aus der zweiten Reihe Schaden machen) mit RQ zoned.

## Empfohlener Build

**Starter-Items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (das Support-Quest-Item) plus 2 Health Potions und eine Stealth Ward. Mana-Potions weglassen: Manaflow Band und Biscuit Delivery decken den frühen Mana-Bedarf.

**Kern-Items (in Reihenfolge):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — wird gegen Minute 10-12 zu ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong**, deine Support-Quest-Belohnung. Liefert Gold-Income und Ward-Charges.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — Stiefel mit Ability Haste (Stat, der Spell-Cooldowns senkt), damit Mantra und Q schneller wiederkommen.
3. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — wenn du einen Verbündeten mit E schildest, bekommt er Attack Speed (haut schneller zu) und Magic Damage on-hit (extra Schaden auf jedem Auto-Attack). Glänzt mit Auto-Attack-ADCs (Kai'Sa, Jinx, Twitch).
4. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — wiederholte Heals und Schilde triggern einen stackenden Heal auf Verbündete mit niedrigem HP. Passt zu E-Spam und RE in Teamfights.
5. ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — Flächenheal mit 5 Sekunden Delay, für Objective-Fights (Drake, Baron) zum Top-up des ganzen Teams.

**Situative Items:**

- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — gegen Heal-lastige Comps (Soraka mid, Yuumi, Vladimir top). Kappt gegnerische Heilung, sobald du mit Q Schaden machst.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — gegen AOE-Burst (Yasuo + Malphite, Orianna R). Aktiv gibt dem Team einen breiten Schild und blockt die Wombo Combo (eine "Wombo Combo" ist ein gekettetes CC-Engage, das dein Team in 1-2 Sekunden auslöscht).
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — gegen Single-Target-Magic-CC-Caster, die dich one-shotten (Blitzcrank Hook, Morgana Binding, Twisted Fate Gold Card).
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — gegen Assassinen, die dich gezielt jagen (Zed, Talon, Akali). Die 2,5 Sekunden Stasis ("du wirst unanvisierbar, kannst dich aber nicht bewegen oder casten") geben dem Team Zeit zum Peelen.
- ![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4005.png) **Imperial Mandate** — wenn das Team mehr Damage braucht und Jungler/ADC zuverlässig auf deinen Q-Slow followen.

**Stiefel:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** sind Default für den Ability Haste (du willst Mantra so oft wie möglich). Mobility Boots sind okay, wenn du viel zu Mid Lane roamst.

**Skill-Reihenfolge:** **Q** zuerst maxen (Hauptpoke und AOE-Schaden), **E** als zweites (größerer Schild + Move Speed), **W** zum Schluss. Setze einen Punkt in **R** auf Level 6, 11, 16 — denk aber dran, Mantra ist schon ab Level 1 nutzbar.

**Runen:** Primär **Sorcery** mit **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. Aery proct auf jedem Q für extra Poke-Schaden und auf jedem E für einen kleinen Schild-Bonus. Sekundär **Inspiration** mit **Biscuit Delivery** (kostenloser Mana-Sustain in der Lane) und **Cosmic Insight** (mehr Ability Haste auf Summoner und Items).

## Wichtige Matchups

- **Lulu / Janna:** Ausgeglichenes Matchup. Beide Enchanter ohne Hard Engage; die Lane entscheidet sich am ADC-Duo. Q-poke sie, wenn sie zum Warden vortreten, aber commit kein Mantra in der Lane — heb es für Objective-Rotationen auf.
- **Soraka:** Vorteilhafter Poke-Krieg. Dein Q-Slow plus Aery-Procs out-traden ihre W-Heal-Kosten. Drück sie zwischen Level 3-5 von der Wave weg, indem du Q on Cooldown raushaust.
- **Leona / Nautilus:** Schwere Lane. Sie engagen (eröffnen den Fight) mit Point-and-Click-CC (Crowd Control, das ohne Zielen sofort lockt, wie ein Stun per Klick), bevor du mit **W** tethern kannst. Halte E für den Engage-Moment bereit (der Schild fängt den Burst — hoher Schaden in 1-2 Sekunden — und das Move Speed lässt dich peelen, also mit dem ADC fliehen) und push die Wave nie ohne Vision über den Fluss.
- **Pyke / Thresh:** Die Hook-Range matcht deine Q-Range. Steh hinter dem ADC, versteck dich hinter Minions, um die Sichtlinie auf Hooks zu brechen, und Q den Support — nicht den ADC — wenn sein Hook auf Cooldown ist.
- **Blitzcrank:** Der Pull ist das ganze Matchup. Geh nur vor, wenn du sein Q auf Cooldown siehst; wenn du gehookt wirst, sofort E auf dich selbst (Schild + Speed Boost geben dir eine Chance, zum Turm zu kommen).

## Power Spikes & Siegbedingungen

- **Level 1:** Mantra ist schon up. RQ auf Level 1 ist ein starkes Invade-Tool (sich in den gegnerischen Jungle schleichen, um eine frühe Kill aufzusetzen), weil die AOE-Detonation (Flächenschaden, der alles in einem Kreis trifft) auf geclumpten Gegnern (mehrere Ziele dicht beieinander) echten Schaden anrichtet.
- **Level 6:** Der zweite R-Punkt schaltet schnellere Mantra-Cooldowns frei. Mit gestacktem Manaflow Band kannst du Q-RQ-W-Combos im Bot-Lane-All-In spammen.
- **Bloodsong + Ionian Boots of Lucidity (~ Minute 10-12):** Das Roam-Fenster öffnet sich (Roaming = die eigene Lane verlassen, um einer anderen Lane zu helfen). Push die Wave hart mit einem Q, dann lauf zum Mid-Lane-Fluss, um ein 3v2 mit Jungler und Mid Laner aufzuziehen.
- **Ardent Censer + Moonstone Renewer (~ Minute 24-28):** Teamfight-Peak. Jeder E-Schild triggert Ardents Attack Speed und Moonstones stackenden Heal. Dein ADC outscaled jedes Matchup mit diesen zwei Items im Rücken.

## Häufige Fehler

- **Mantra in der Lane auf Poke verschwenden.** RQ fühlt sich stark an, aber Mantra in Minute 4 zu verbrennen heißt: keine AOE-Detonation, wenn der gegnerische Jungler in Minute 6 gankt (Überraschungsangriff aus dem Fluss auf deine Lane). Halt RQ als Setup nach einem W-Root oder für gebündelte Gegner am Drake.
- **Sich selbst mit E schilden.** E auf dich selbst geht als Panic Button (Notfall-Cast, wenn du gleich stirbst), aber Schildwert plus Move Speed sind verschwendet, wenn dein ADC hinter dir stirbt. Default: E auf den ADC; dich selbst nur, wenn der ADC schon safe ist.
- **Q-Poke, wenn ein gegnerischer Assassin auf der Map missing ist.** Karma hat keinen Dash. Wenn der gegnerische Jungler nicht getrackt ist, geh nicht in Q-Range vor — du wirst gecatcht ohne Escape und tradest dein Leben für nichts.
- **Die W-Tether-Range vergessen.** Dein **W** rooted nur, wenn der Tether die ganze Dauer unbroken bleibt. Wenn du es auf max Range castest und der Gegner einen Schritt zurückgeht, snappt der Tether und du hast keinen Payoff. Cast W, wenn der Gegner committed ist (nachdem er Dash oder Escape verbraucht hat).
- **Damage statt Utility bauen.** Karma kann in AP-Schaden skalieren, aber der Enchanter-Build (Ardent Censer, Moonstone Renewer, Redemption) gibt dem Team viel mehr Wert als ein Rabadon's. Default Utility, außer du bist massiv vorne.

## Fortgeschrittener Tipp

Setz **RE** (Mantra empowert Inspire) auf einen vorpreschenden Verbündeten — nicht auf dich selbst. Das empowerte E schildet das Ziel plus alle Verbündeten in der Nähe und gibt einen breiteren Move-Speed-Boost. Cast es auf den ADC im Moment, in dem dein Team den Engage commit: Der AOE-Move-Speed lässt das ganze Team gleichzeitig auf die gegnerische Back Line zumarschieren und verwandelt einen normalen Teamfight in einen erzwungenen Collapse. Der Trick: RE vor dem Engage timen, nicht danach, denn der Move-Speed-Buff ist auf dem Weg rein am nützlichsten.
