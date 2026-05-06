---
title: "Jinx Bot Build & Guide — Patch 16.9"
slug: "jinx-bot"
language: "de"
patch: "16.9"
champion: "jinx"
role: "bot"
last_updated: "2026-04-29"
description: "Jinx Bot Lane Guide für League of Legends Patch 16.9: Starter-Kit, Hypercarry-Crit-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein Abschluss-Tipp."
quick_learn:
  champion_dd_id: "Jinx"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Hypercarry"
  abilities:
    - key: "P"
      name: "Get Excited!"
      description: "Hilft Jinx beim Töten eines Champions oder epischen Monsters oder zerstört sie eine Struktur, bekommt sie für einige Sekunden einen großen Move- und Attack-Speed-Schub."
      dd_spell_id: "Jinx_Passive"
    - key: "Q"
      name: "Switcheroo!"
      description: "Wechselt zwischen Pow-Pow (Minigun, stackt Attack Speed) und Fishbones (Raketenwerfer, AOE-Schaden mit mehr Reichweite, kostet Mana). Haupt-DPS-Hebel."
      dd_spell_id: "JinxQ"
    - key: "W"
      name: "Zap!"
      description: "Linearer Long-Range-Schuss, der den ersten getroffenen Gegner schädigt, slowt und aufdeckt. Als Poke und als Self-Peel-Slow gegen Diver einsetzen."
      dd_spell_id: "JinxW"
    - key: "E"
      name: "Flame Chompers!"
      description: "Wirft drei Snare-Granaten, die gegnerische Champions bei Kontakt 1.5s rooten. Self-Peel und Lockdown-Setup, kein Poke."
      dd_spell_id: "JinxE"
    - key: "R"
      name: "Super Mega Death Rocket!"
      description: "Globale Rakete, die mit zunehmender Flugdistanz mehr Schaden anrichtet und in Missing-HP-Schaden explodiert. Snipe Low-HP-Runner oder finish quer über die Map."
      dd_spell_id: "JinxR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "3087", name: "Statikk Shiv" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "gegen tanky Frontlines oder HP-stackende Comps (Sion, Cho'Gath, Dr. Mundo) — Bonus-Armor-Pen scaled mit gegnerischer Max-HP"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "gegen heavy-Healing-Comps (Soraka, Vladimir, Aatrox) — appliziert Grievous Wounds, sobald Raketen treffen"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "gegen Assassinen- oder Diver-Druck (Zed, Samira, Yasuo Flank) — Move Speed plus Low-HP-Shield gibt die Sekunde für E"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "gegen heavy-Poke-Comps oder Stalemate-Lanes — Lifesteal plus Overheal Shield halten dich zwischen Fights voll"
  base_combo: ["W", "Q-AA", "E", "R"]
  win_condition: "Erreiche Statikk Shiv und Infinity Edge lebend, dann teamfighte aus der Backline mit Raketen-Q. Verkette Get Excited!-Resets aus Pickoffs, um Baron- und Drake-Fights zu snowballen."
  weakness: "Langsames Base-Movement, kein Dash und kein Blink. Hard-countered von Divern und Assassinen, die die Backline erreichen; verliert gegen Early-Pressure-Lanes (Draven, Lucian, Caitlyn) vor den ersten zwei Items."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["jhin", "varus", "ashe", "senna"]
      archetype: "Immobile Late-Scaling-Marksmen"
      reason: "Jinx out-scaled und out-teamfightet stationäre Marksmen: Raketen-Q plus Runaan's Hurricane shreddet eine geclumpte Backline, die keinen Dash hat, um sich nach Fight-Start umzupositionieren."
    - examples: ["sion", "cho-gath", "dr-mundo", "ornn"]
      archetype: "HP-stackende Tanks und Frontline-Comps"
      reason: "Raketen-Q macht AOE-Physical-Damage, der mit Attack Speed scaled, und Lord Dominik's Bonus-Armor-Pen gegen High-HP-Ziele macht große Frontlines zum idealen Ziel statt zur Mauer."
    - examples: ["leona", "nautilus", "rell"]
      archetype: "Lockdown-Engage-Supports"
      reason: "Wenn der Support ein Ziel catched, hat Jinx ein langes genug Auto-Attack-Window, um 3-4 Raketen in die CC-Kette zu feuern und mit R zu finishen, da das Ziel nicht aus dem AOE dashen kann."
  counterpicks:
    - examples: ["draven", "lucian", "kalista"]
      archetype: "Early-Pressure-Lane-Marksmen"
      reason: "Sie out-traden Jinx auf Level 1-6, weil ihr Auto-Attack-Damage die Minigun-Stacks überholt und Jinx keinen Dash zum Disengage hat; sie snowballen Lane-Gold vor ihrem ersten Item-Spike."
    - examples: ["zed", "samira", "yasuo"]
      archetype: "Mobile Assassinen und Diver"
      reason: "Jinx hat keinen Dash, keinen Blink und kein Instant-CC: ein einzelner Gap-Close vorbei an Flame Chompers löscht sie meist, bevor die E landet oder der Root abläuft."
    - examples: ["xerath", "ziggs"]
      archetype: "Long-Range-Artillery-Mages"
      reason: "Sie out-poken Jinx jenseits der Raketen-Q-Reichweite und chunken sie pro Wave. Ohne Escape und ohne Sustain bleibt sie nicht lange genug in Lane, um ihre Item-Spikes zu treffen."
---

## Überblick

Jinx ist die Lehrbuch-Hypercarry-Marksman: schwach in den ersten zehn Minuten, furchteinflößend mit zwei Items, und Game-Ending, wenn sie einen einzelnen Reset aus einem Teamfight-Kill bekommt. Ihre **Switcheroo! (Q)** lässt sie zwischen einer Single-Target-Minigun (die Attack Speed stackt) und einem AOE-Raketenwerfer (mehr Reichweite, AOE-Physical-Damage, kostet Mana) wechseln, sodass sie sowohl sauberen DPS auf ein Backline-Ziel als auch Waveclear plus Frontline-Shred mit derselben Form abdeckt. Ihre **Get Excited! (P)** macht aus jedem Kill, Assist oder zerstörter Struktur ein massives Movement- und Attack-Speed-Fenster — das ist der Motor, der einer fed Jinx erlaubt, in einen Teamfight zu spazieren und drei weitere Kills zu verketten, bevor der Buff fällt.

Der Game Plan ist einfach zu beschreiben und anspruchsvoll auszuführen: überlebe die Lane gegen Early-Aggression, erreiche dein erstes Crit-Item online (Statikk Shiv), spiele dann als Backline-Carry — steh auf der zweithintersten Position, kite (rückwärts laufen während Attacking, um Distanz zu halten) mit Raketen-Q, droppe **Flame Chompers (E)** unter deine eigenen Füße, wenn ein Diver auf dir landet, und snipe Low-HP-Runner mit **R** quer über die Map. Skill-Expression sitzt in **Q**-Form-Swaps mid-Fight (Minigun auf den engageten Tank, Raketen auf die gruppierte Backline) und in **R**-Snipes, die Positioning-Fehler des Gegners in Kills verwandeln, bevor diese ihre eigene Backline erreichen.

## Empfohlener Build

**Starter-Items:** Doran's Blade + 2 Health Potions. Skip die zweite Doran's, auch wenn du Lane gewinnst — das Gold rentiert sich viel besser in einer Sheen-Komponente für Statikk Shiv.

**Core-Items (in Reihenfolge):**

1. ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv** — First-Item-Rush. Der Energized-Passive proct auf Raketen-Q für sofortigen Waveclear, und die Kombination Attack Speed plus Crit Chance macht die Raketenform um Minute 10-12 zu einem echten Teamfight-Tool.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — Attack-Speed-Boots. Mercury's Treads nur gegen 3+ Hard-CC-Threats im gegnerischen Team.
3. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — dein größter Damage-Spike. Crit-Damage verdoppelt schlicht jeden AOE-Hit der Raketen-Q auf der Backline; das ist das Item, das Jinx von "nervig" zu "löscht den gegnerischen ADC" macht.
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — Hypercarry-Teamfight-Item. Die von Runaan's gefeuerten Bolts schießen ebenfalls Raketen, wenn Jinx in Fishbones-Form ist, also triffst du drei Ziele gleichzeitig mit vollem Crit-+-Attack-Speed-Scaling.

**Situative Items:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — gegen tanky Frontlines oder HP-stackende Comps (Sion, Cho'Gath, Dr. Mundo). Ersetzt Runaan's, wenn das gegnerische Team 3+ Tanks hat.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — gegen heavy-Healing-Comps (Soraka, Vladimir, Aatrox). Appliziert Grievous Wounds (ein Debuff, der Healing reduziert), sobald eine Rakete sie erwischt.
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — gegen Assassinen- oder Diver-Druck (Zed, Samira, Yasuo Flank). Der HP-Schwellen-Passive (ein Schild, der bei niedrigem HP triggert) plus Move Speed gibt die halbe Sekunde, die du brauchst, um **E** unter deine Füße zu droppen.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — gegen heavy-Poke-Comps oder Stalemate-Lanes. Lifesteal plus Overheal Shield kaufen dir die Sustain, um lange genug in Lane zu bleiben, um deine Spikes zu treffen.

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** als Default. Mercury's Treads nur gegen schweres AP-CC wie Brand oder Zyra Support.

**Skill-Order:** Maxe **Q** zuerst (DPS und Raketen-Scaling), **W** als zweites (Zap!-Cooldown für Poke und Self-Peel-Slow), **E** zuletzt (Root-Dauer ist fix; nur der Damage scaled). Setze einen Punkt in **R** auf Level 6, 11, 16.

**Runen:** Primärbaum **Precision** mit **Lethal Tempo**, **Presence of Mind**, **Legend: Alacrity**, **Coup de Grace**. Sekundär **Sorcery** mit **Manaflow Band** (deckt die Mana-Kosten der Raketen-Q) und **Gathering Storm** für Late-Game-Scaling. Stat Shards: Attack Speed / Adaptive Force / Health.

## Wichtige Matchups

- **Draven:** Stark Jinx-unfavored auf Level 1-6. Seine Spinning Axe out-tradet bei jedem Schritt. Kämpfe nicht pre-3 gegen ihn; freeze die Wave nahe deinem Turret, erreiche Level 6 mit Zap! up, und such Jungle-Dives nur wenn er overextended. Sobald du Statikk Shiv hast, dreht sich das Matchup: meide sein All-in-Window und farme safe bis dahin.
- **Caitlyn:** Unfavored. Sie outranged deine Minigun und bullied die Lane mit Q + Trap-Setups. Steh hinter Minions, dodge seitlich aus ihrer Q-Linie, und betritt nie die Bushes, in denen sie gesessen hat (wahrscheinlich Traps). Überlebe bis zwei Items — ihr Teamfight-Scaling fällt hart gegen deine Raketen-Q-AOE.
- **Lucian:** Unfavored, besonders mit einem Nami Support. Respektiere sein Level-3-All-in (Passive-Doppelschuss + Q-Dash + W-Speedup). Halte **E** als Self-Peel gegen seinen Dash; wirf sie nie als Poke. Erreich ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv** ohne zu sterben, dann stabilisiert sich die Lane.
- **Aphelios:** Even, leicht Jinx-favored nach zwei Items. Track seine Waffen-Rotation; wenn er Severum (rot, Lifesteal) oder Calibrum (grün, Reichweiten-Marker) hat, kannst du mit Raketen-Q aus der Minigun-Sicherheit poken. Meide Trades, wenn Infernum (orange, AOE) geladen ist — das ist sein Raketen-vs-Raketen-Window und das gewinnt er.
- **Samira:** Sie will einen Melee-All-in, sobald sie W hat. Halte ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** als geplantes drittes Item, wenn sie snowballed, droppe **E** in dem Moment, in dem sie reindashed (verbrenn sie nicht in Poke), und kämpfe nie mit **Flash** auf Cooldown.

## Power Spikes & Siegbedingungen

- **Level 6:** Erste **Super Mega Death Rocket!** schaltet Pickoff-Druck frei. Ein Low-HP-Gegner, der Bot-zu-Base zurückgeht, ist ein freies R-Execute, wenn du das Missing-HP-Scaling respektierst. Verschwende sie nicht in Poke — warte auf Sub-30%-HP-Runner.
- **![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) Statikk Shiv fertig (~ Minute 10-12):** Erster echter Spike. Raketen-Q clearet die Wave jetzt in einem Cast und der Energized-Proc proct auf jeden Minigun-Stack, was Teamfight-Beteiligung in Skirmishes um Drake öffnet.
- **![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge online (~ Minute 20-24):** Der Hypercarry-Breakpoint. Raketen-Q-Crits beginnen Backline-Ziele zu one-shotten, und jeder Pickoff oder Kill triggert **Get Excited!** für eine freie Rotation in den nächsten Fight.
- **![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) Runaan's Hurricane online (~ Minute 28-32):** Drei-Ziel-Raketen-Q mit Crit. Das ist die Late-Game-Fantasy: steh hinter deiner Frontline, feuer in den gegnerischen Pulk, und schau zu, wie sich der Fight in 4 Sekunden selbst löscht.

## Häufige Fehler

- **Raketen-Q in Lane spammen.** Die Raketenform leert Mana schnell und die Minigun-Form hält deine Attack-Speed-Stacks hoch. Nutz Raketen nur für Last-Hit-Cleanup auf Drei-Minion-Pulken oder zum Poke (Reichweitenvorteil); wechsel zurück auf Minigun, sobald sich das Trade-Fenster schließt.
- **R für "den perfekten Snipe" halten.** **Super Mega Death Rocket!** scaled mit Missing-HP, nicht mit Max-HP. Eine sichere R auf 60% Reichweite gegen einen Gegner auf 25% HP ist ein garantierter Kill; auf den vollkommen sauberen Schuss quer über die Map zu warten heißt oft, dass das Ziel an Base voll heilt, bevor du feuerst.
- **In Teamfights auf maximaler AA-Reichweite stehen.** Jinx hat keinen Dash. Maximale AA-Reichweite stellt dich außerhalb des Peels deines Teams (Schutz: CC und Shields des Supports). Steh auf der zweithintersten Position, damit ein flankender Assassin dich nicht löscht, bevor dein Team reagieren kann.
- **E für Engage verbrennen.** **Flame Chompers!** ist dein einziges Self-Peel. Sobald sie auf Cooldown ist, bist du eine Glass Cannon (ein Champion mit hohem Damage und niedrigen Defenses, wie die meisten ADCs) ohne Antwort auf einen Diver. Droppe sie unter deine Füße, wenn ein Zed oder eine Samira auf dir landet, nie als Poke-Setup.
- **Kills außerhalb des Get Excited!-Windows chasen.** Die Passive hält nur ein paar Sekunden. Fällt der Buff, während du tief in feindlichem Territorium bist, hast du Base-Movement-Speed und null Escape. Wenn der Speed-Boost endet, retreate — der nächste Fight kommt schneller zu dir zurück, als du denkst.

## Fortgeschrittener Tipp

Übe den **Q-Form-Swap mid-AA**, um beide Welten online zu halten. Der Trick: stack 3 Minigun-Attack-Speed-Stacks auf einer Wave, swap kurz vor einem Raketen-Q-Last-Hit auf zwei Minions zu Raketen, feuer eine Rakete, dann swap im selben Frame zurück auf Minigun, um den Attack-Speed-Buff aktiv zu halten. In einem Teamfight sieht das so aus: Minigun-Stacking auf dem Frontline-Tank für AS, Swap zu Raketen in dem Moment, in dem dein Team den Engage committed, und 3-4 Raketen in die gegnerische Backline unter Crit + Runaan's mit bereits geladener Attack Speed dumpen. Gut gespielt fügt es ungefähr 40% extra DPS in den ersten drei Sekunden eines Fights hinzu — genau das Fenster, in dem Carries leben oder sterben.
