---
title: "Bel'Veth Jungle Build & Guide — Patch 16.9"
slug: "belveth-jungle"
language: "de"
patch: "16.9"
champion: "belveth"
role: "jungle"
last_updated: "2026-04-29"
description: "Bel'Veth Jungle Guide für League of Legends Patch 16.9: Starter-Kit, On-Hit-Core-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Belveth"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Fighter / On-Hit Skirmisher"
  abilities:
    - key: "P"
      name: "Death in Lavender"
      description: "Permanente Attack-Speed-Stacks von large Minions, Jungle-Monstern und Champion-Takedowns. Jeder gecastete Spell gibt zusätzlich einen kurzen Attack-Speed-Buff."
      dd_spell_id: "Belveth_Passive"
    - key: "Q"
      name: "Void Surge"
      description: "Kurzer Dash, der Gegner auf dem Weg trifft. Jede der vier Richtungen hat ihren eigenen Cooldown, der mit Attack Speed sinkt."
      dd_spell_id: "BelvethQ"
    - key: "W"
      name: "Above and Below"
      description: "Schwanz-Slam, der Knock-up und Slow auslöst. Trifft sie einen Champion, resettet sofort der Void Surge in dieser Richtung."
      dd_spell_id: "BelvethW"
    - key: "E"
      name: "Royal Maelstrom"
      description: "Channel-Sturm aus Schlägen auf das Ziel mit den niedrigsten HP. Während des Channels Damage Reduction und Lifesteal; recasten beendet ihn früher."
      dd_spell_id: "BelvethE"
    - key: "R"
      name: "Endless Banquet"
      description: "Passiv: jede zweite Auto auf dasselbe Ziel macht Bonus-True-Damage und stackt unbegrenzt. Aktiv: konsumiert ein Void Coral (Champion- oder Epic-Monster-Takedown) für True Form mit extra HP, Range und Attack Speed."
      dd_spell_id: "BelvethR"
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3302", name: "Terminus" }
    - { dd_id: "3072", name: "Bloodthirster" }
    - { dd_id: "3124", name: "Guinsoo's Rageblade" }
  situational_items:
    - dd_id: "3091"
      name: "Wit's End"
      against: "gegen schwere AP-Comps (Karthus, Ahri, Lissandra) — Magic Resist plus On-Hit Magic Damage"
    - dd_id: "6610"
      name: "Sundered Sky"
      against: "wenn behind oder gegen Poke-Comps — erster Auto crittet und heilt, holt Tempo zurück"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "gegen Heal-Stacking-Comps (Soraka, Aatrox, Dr. Mundo, Vladimir) — Grievous Wounds on-hit"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "beim Splitpushen einer Side-Lane allein gegen Disengage-Comps — Bonus-Schaden gegen Türme und Minions"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "gegen Single-Target AP-Burst (Veigar, LeBlanc, Syndra mid) — Magic Shield triggert unter 30% HP"
  base_combo: ["Q", "AA", "W", "AA", "E", "R"]
  win_condition: "Bleib mit Q-Dashes und R-True-Damage-Stacks an einem Ziel, bis es fällt. Force Fights auf Level 6 mit R online, idealerweise nach Rift Herald oder Baron für längere Ult-Dauer."
  weakness: "Hard CC (Stuns, Knock-ups, Suppress) bricht ihre Q-Dashes und nagelt sie fest. Ohne aktive R oder ohne Ziel zum Festbeißen hat sie schwache Range-Bedrohung und kollabiert gegen viel Peel."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["amumu", "zac", "skarner"]
      archetype: "Tank-Jungler ohne Dash"
      reason: "Bel'Veths On-Hit-Pattern mit Terminus zerlegt ihre Armor und Magic Resist; sie klebt mit Q-Dashes um ihre Hitbox, während sie keine Möglichkeit zum Disengage haben."
    - examples: ["karthus", "kindred", "nidalee"]
      archetype: "Squishy Ranged Jungler"
      reason: "Vier direktionale Q-Dashes schließen jeden Kite-Versuch (kite = zurückweichen und dabei weiter angreifen): sie kommt in Melee, bevor sie eine Range-Rotation abschließen."
    - examples: ["master-yi", "shyvana"]
      archetype: "Scaling Skirmisher ohne Early CC"
      reason: "Sie gewinnt die frühen Jungle-Skirmishes (skirmish = 1v1- oder 2v2-Kampf in der Jungle) vor deren Power Spike und konvertiert die Führung in Objectives."
  counterpicks:
    - examples: ["sejuani", "vi"]
      archetype: "Jungler mit Point-and-Click Hard CC"
      reason: "Bel'Veths Q-Dash dodgt keine Targeted-Abilities. Frisst sie eine Sejuani- oder Vi-R, ist sie festgenagelt und ihr On-Hit-Pattern bricht sofort ab."
    - examples: ["rammus"]
      archetype: "Anti-Attack-Speed-Tanks"
      reason: "Rammus' passive Dornen und sein W-Steroid bestrafen ihre Dauer-Auto-Attacks: sie verletzt sich selbst beim DPS-Versuch, während er die Objectives kontrolliert."
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "Starke Early-Invade-Jungler"
      reason: "Bel'Veths erster Clear ist okay, aber nicht dominant; sie invaden auf Level 3, bevor sie Q gemaxt hat, töten sie einmal und snowballen (snowball = kleine Early-Führung wächst über die Zeit zu großer)."
---

## Überblick

Bel'Veth ist eine On-Hit-Fighterin (= ihr Hauptschaden kommt aus Auto-Attacks plus Item-Effekten, die bei jedem Schlag auslösen, nicht aus ihren Spells), die ihre Auto-Attacks in einen Dauerstrom von Dashes verwandelt. Ihr **Void Surge (Q)** hat vier direktionale Cooldowns, die alle mit Attack Speed runtersinken: je mehr Attack Speed sie stackt (= aufbaut), desto öfter dasht sie. Ihr **Endless Banquet (R)** hat zwei Gesichter: eine Passive, die alle zwei Basic Attacks auf dasselbe Ziel True Damage drauflegt (true damage = Schaden, der Armor und Magic Resist ignoriert), und eine aktive Form, die ein Void Coral konsumiert — ein Stück, das am Boden liegt, sobald sie einen Takedown (Kill oder Assist) gegen einen Champion oder gegen einen Epic Monster wie Rift Herald oder Baron landet — für extra HP, Attack Range und Attack Speed über eine längere Zeit.

Ihr Game Plan ist, durch die Jungle zu snowballen (snowball = eine kleine Early-Führung in eine viel größere zu verwandeln). Camps clearen, eine Lane ganken (gank = Hinterhalt auf einen Laner mit Hilfe des Junglers), Fight auf Level 6 forcen, das Void Coral fressen, dann den nächsten Fight mit der True Form anketten. Sie ist kein Scaling-Champion (scaling = stärker werden, je länger das Spiel dauert): wenn das Early Game stagniert, wird sie zu einer schlechteren Master-Yi-Variante.

## Empfohlener Build

**Starter-Items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Hailblade ist der Jungle-Starter: durch das Töten von Jungle-Monstern entwickelt er sich zu einem Upgrade, das **Smite** boostet (der Summoner Spell, den jeder Jungler nimmt — ein einzelner harter Schlag auf ein Ziel, sowohl zum schnelleren Clearen als auch zum Stehlen von Objectives).

**Core-Items (in Reihenfolge):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — jede dritte Auto-Attack legt Bonus-Physical-Damage on-hit drauf; perfekt für eine Championin, die schneller schlägt als jeder andere im Spiel.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — flache Attack Speed, die sich mit ihrem Q-Cooldown-Reduktions-Effekt verbindet.
3. ![Terminus](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3302.png) **Terminus** — On-Hit-Bonus-Schaden, der zwischen Armor Pen (ignoriert einen Teil der gegnerischen Armor) und Magic Pen (ignoriert einen Teil der Magic Resist) wechselt; gibt zudem stackende Defenses, solange sie in Melee Range ist (= nah genug, um zu schlagen), was bei Bel'Veth immer ist.
4. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — Lifesteal (heilt dich um einen Prozentsatz des verursachten Schadens) und ein Overheal Shield (überschüssige Heilung wird zu einem temporären Shield über deinen HP). Die Survivability, die du brauchst, um **Royal Maelstrom (E)** zu channeln, ohne zu sterben.
5. ![Guinsoo's Rageblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3124.png) **Guinsoo's Rageblade** — verwandelt jede zweite Auto-Attack in zwei On-Hits in einem Swing, verdoppelt damit den Wert von Kraken Slayer und Terminus.

**Situative Items:**

- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — gegen schwere AP-Comps (Karthus, Ahri, Lissandra; AP = Champions, deren Schaden hauptsächlich aus Spells kommt, nicht aus Auto-Attacks). Gibt Magic Resist und On-Hit Magic Damage, ersetzt Bloodthirster.
- ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — wenn du behind bist oder gegen Poke-Comps (poke = Gegner, die dich aus Distanz HP-mäßig anknabbern, bevor der Fight überhaupt beginnt). Der erste Auto auf jedes Ziel ist ein kritischer Treffer (crit = ein Schlag, der etwa doppelten Schaden macht) und heilt dich, gibt dir Tempo in Skirmishes zurück (skirmish = kleiner 1v1- oder 2v2-Kampf in der Jungle, kein voller 5v5-Teamfight).
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — gegen Heal-Stacking-Comps (Soraka, Aatrox, Dr. Mundo, Vladimir). Wendet Grievous Wounds bei jedem Auto an (Grievous Wounds = ein Debuff, der die Heilung des Ziels halbiert).
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — wenn du eine Führung hast und das Gegnerteam schwaches Waveclear hat (= keinen einfachen Weg, Minion-Wellen zu töten). Pusht Side-Lanes (Top und Bot Lane, weg von der Mitte) schneller als alles andere und gibt Bonus-Schaden gegen Türme — perfekt für Splitpush (splitpush = Druck auf einer Side-Lane allein, während dein Team auf der anderen Map-Seite spielt).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — gegen Single-Target-AP-Burst (burst = viel Schaden konzentriert in 1-2 Sekunden; z. B. Veigar, LeBlanc, Syndra). Der Shield triggert automatisch unter 30% HP und absorbiert einen großen Teil des nächsten Magic Damage.

**Schuhe:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** als Default. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** nur gegen Double-AD-Comps (= das Gegnerteam hat zwei starke Physical-Damage-Carries, z. B. Caitlyn + Master Yi).

**Skill-Order:** Maxe **Q** zuerst, dann **E**, dann **W**. Jeder Rank von **Q** senkt den Base-Cooldown — das ist dein Schaden und deine Mobility in einem Slot. **R** auf Level 6, 11, 16.

**Runen:** Runen sind passive Boni, die du vor dem Spiel auswählst; sie formen deine Early-Game-Stats und deinen Damage-Stil. Primär **Precision** (der Auto-Attack-fokussierte Baum) mit **Press the Attack** (nach drei Auto-Attacks auf dasselbe Ziel macht der nächste Auto oder Spell Bonus-Schaden, und das Ziel nimmt für ein paar Sekunden mehr Schaden von allen), **Triumph** (heilt dich etwas bei einem Takedown), **Legend: Alacrity** (extra Attack Speed pro Takedown), **Coup de Grace** (mehr Schaden gegen Ziele mit niedrigen HP). Sekundär **Resolve** mit **Second Wind** (regeneriert HP nach erlittenem Schaden) + **Revitalize** (Heals auf dich sind stärker) für ausgedehnte Jungle-Skirmishes — oder **Inspiration** mit **Magical Footwear** (kostenlose Schuhe bei Minute 12) + **Cosmic Insight** (niedrigere Cooldowns auf Summoner Spells), wenn das Spiel ruhig ist und du Gold und Timer optimieren willst.

## Wichtige Matchups

- **Lee Sin:** Starker Early-Invade-Jungler (= ein Jungler, der in deine Jungle läuft, um dich vor deinem Item-Spike zu töten). Tracke ihn mit Vision auf deinen Buffs und vermeide Fights vor Level 4 — den Kampf gewinnt er immer.
- **Master Yi:** Scaling-Rivale. Töte ihn vor Minute 20 oder akzeptiere, dass er dich im späten Teamfight im Schaden überflügelt; force Objective Trades early (= push einen Drake oder Herald, während er auf der anderen Map-Seite beschäftigt ist), damit er nie auf vier Items kommt.
- **Karthus:** Free-Matchup. Seine Ult (R, auch ultimate genannt — die letzte und stärkste Ability) macht Schaden gegen dein gesamtes Team über die ganze Map, aber er hat null Mobility — Q auf ihn drauf und er stirbt in einer Rotation (= eine vollständige Sequenz deiner Spells). Counter-jungle ihn (= klau ihm Camps), nachdem er einen Gank gemacht hat.
- **Sejuani:** Hartes Matchup. Ihre R ist Point-and-Click (= rastet einfach auf ein Ziel ein, kein Aim nötig) und friert dich ein. Engage sie nie ohne **Flash** ready (engage = den Fight starten) und nie ohne dein Team in Position, dich zu peelen (peel = ein Verbündeter, der die Bedrohung von dir wegfängt).
- **Rammus:** Hard Counter (= speziell gebaut, um dein Matchup zu ruinieren). Seine Dornen-Passive reflektiert einen Teil deines Auto-Attack-Schadens; sein W ist ein defensives Steroid (steroid = eine Ability, die kurzzeitig einen Stat multipliziert — hier Armor und reflektierten Schaden), das die Reflektion verdoppelt. Vermeide Solo-Skirmishes, ping dein Team und farme die andere Jungle-Seite, bis Terminus fertig ist.

## Power Spikes & Siegbedingungen

Ein Power Spike ist ein Moment, in dem der Champion plötzlich deutlich stärker wird als noch eine Minute zuvor — meist wenn eine neue Ability oder ein neues Item online geht.

- **Level 3:** Erster Full Clear durch, **Q-W-E** alle freigeschaltet. Du kannst die meisten Ganks mit dem W-Knock-up (= die Ability schleudert Gegner kurz in die Luft, mit einem kurzen Stun) und einem Q raus beantworten, aber du kannst noch keine Fights forcen — fokussiere einen sauberen Clear und ein frühes Scuttle (der Fluss-Krabben-Neutral-Mob: töte ihn für Vision und einen kleinen Movement-Speed-Buff im Fluss).
- **Level 6:** **Endless Banquet (R)** geht online. Nach deinem nächsten Champion-Takedown oder Epic Monster (Rift Herald, Drake) frisst du das Void Coral und gehst in eine lange True Form (= eine gebuffte Transformation, die dich zum temporären Mini-Boss macht). Force sofort einen Fight oder einen Drake.
- **![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer + ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) Berserker's Greaves (~ Minute 10-12):** Erster echter Damage Spike. Du kannst jetzt die meisten Jungler in ihrer eigenen Jungle duellieren und einen Low-HP-Laner diven (dive = unter den gegnerischen Turm laufen, um ihn trotzdem zu töten, und dabei Tower-Shots fressen).
- **![Terminus](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3302.png) Terminus fertig (~ Minute 16-18):** Mit drei Items kümmern dich Armor oder Magic Resist auf den meisten Squishy-Zielen nicht mehr (squishy = Champions mit niedrigen Defenses, etwa ADCs und die meisten Mages). Gruppiere mit dem Team für den zweiten Drake und das Baron-Timer.
- **Void Epic Monster (Rift Herald oder Baron):** Die aktive Form deiner R hält viel länger, wenn du ein Void Coral von einem Epic Monster frisst (epic monster = ein großes neutrales Objective, viel stärker als ein normales Jungle-Camp). Versuche Herald mit dem Team um Minute 10-14 zu nehmen, sodass du zwei Wellen mit aktiver True Form pushst.

## Häufige Fehler

- **Q immer in dieselbe Richtung spammen.** Jede der vier Richtungen hat ihren eigenen Cooldown. Stillstehen und Q viermal nach vorne drücken verschwendet drei Richtungen. Vorne, seitlich, hinten — du machst mehr Schaden und stackst gleichzeitig mehr Attack Speed.
- **E jedes Mal die volle Dauer halten.** **Royal Maelstrom (E)** ist ein Channel (= eine Ability, bei der Bel'Veth stehen bleibt und weiter castet, anfällig für Interrupts), der durch erneutes Drücken vorzeitig endet. Nutze ihn, um eine einzelne Schadens-Rotation aufzusaugen (z. B. ein Veigar W in Cage), und beende den Channel sofort, um wieder Auto-Attacks zu schwingen. Den vollen Channel laufen zu lassen, heißt zwei Sekunden lang null Auto-Attacks.
- **R drücken ohne Void Coral in der Nähe.** Die aktive Form hält ungefähr 30-60 Sekunden, je nach Quelle. Ohne Coral ist die Form verschwendet; der passive True Damage alle zwei Autos ist das, was du in normalen Fights willst.
- **1v1 gegen den gegnerischen Jungler auf Level 2 versuchen.** Ihr Clear ist ok, aber ihr Early-Duel ist mittelmäßig. Wenn ein Lee Sin oder Xin Zhao dich auf Level 2-3 invadet, lass das Camp und ping dein Team — das Duell zu gewinnen ist nicht realistisch und sterben verschenkt ihnen den Snowball.
- **Tempo auf dem Void Coral ignorieren.** Wenn ein Coral droppt, hast du ein kurzes Fenster, um es zu konsumieren. Du killst einen Gegner in Minute 6, ignorierst das Coral, und hast den einzigen Grund, warum du ihn getötet hast, weggeworfen. Lauf vor jedem Recall (recall = die gechannelte Ability, die dich zur Base teleportiert) immer übers Coral.

## Fortgeschrittener Tipp

Nutze **Above and Below (W)** als Q-Reset. Der Tooltip sagt, dass ein Treffer mit **W** auf einen Champion den Cooldown von **Void Surge (Q)** in dieser Richtung resettet — das optimale Pattern im 1v1 ist also **Q nach vorne → AA → W aufs Ziel → Q nach hinten in Sicherheit**, mit einem frischen Vorwärts-Q in dem Moment ready, in dem du dich umdrehst. Pros nutzen diesen Loop, um drei Dashes in zwei Sekunden zu verketten, mehr als jeder andere Jungler im Spiel zur Verfügung hat.
