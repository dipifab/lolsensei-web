---
title: "Katarina Mid Build & Guide — Patch 16.9"
slug: "katarina-mid"
language: "de"
patch: "16.9"
champion: "katarina"
role: "mid"
last_updated: "2026-05-05"
description: "Katarina Mid Guide für League of Legends Patch 16.9: Starter-Items, Core-Build für AP-Assassin, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Katarina"
  difficulty: 4
  damage_type: "magic"
  champion_class: "AP Assassin / Snowball Resetter"
  abilities:
    - key: "P"
      name: "Voracity"
      description: "Stirbt ein gegnerischer Champion, den Katarina kürzlich beschädigt hat (Kill oder Assist), sinken alle verbleibenden Cooldowns drastisch. Einen Dagger aufzuheben löst einen AOE-Slash aus."
      dd_spell_id: "Katarina_Passive"
    - key: "Q"
      name: "Bouncing Blade"
      description: "Gezielter Dagger, der zu nahen Gegnern springt und dann hinter dem ersten Ziel zu Boden fällt. Der liegende Dagger ist der Pivot des gesamten Combos."
      dd_spell_id: "KatarinaQ"
    - key: "W"
      name: "Preparation"
      description: "Wirft einen Dagger über Katarina, der einen Moment später landet, plus kurzer Move-Speed-Schub. Das ist der Dagger, auf den du blinkst."
      dd_spell_id: "KatarinaW"
    - key: "E"
      name: "Shunpo"
      description: "Blink auf einen Champion, Minion, Ward oder Dagger. Einen Dagger aufzuheben reduziert den Cooldown von Shunpo. Funktioniert auch auf sichtbaren gegnerischen Wards."
      dd_spell_id: "KatarinaEWrapper"
    - key: "R"
      name: "Death Lotus"
      description: "Channel, der Messer auf die 3 nächsten gegnerischen Champions schleudert und Grievous Wounds auflegt. Wird von jedem Hard-CC abgebrochen. Post-Engage einsetzen, niemals Pre-Engage."
      dd_spell_id: "KatarinaR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "W" }
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
    - { dd_id: "3152", name: "Hextech Rocketbelt" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4646", name: "Stormsurge" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3135", name: "Void Staff" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "gegen Hard-Engage (Malphite R, Zac, Amumu) — die Stasis bricht den Engage, der dein R unterbrechen würde"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "gegen magische Single-Target-CC, die R cancelt (Annie Stun, Lissandra R, Twisted Fate Gold Card)"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "gegen Comps mit viel CC (2+ Stuns/Roots) — ersetzt Sorcerer's Shoes, wenn du zu viel CC frisst, um R zu channeln"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "gegen Healing-Stack-Comps (Soraka, Vladimir, Dr. Mundo) — Grievous Wounds capped den Sustain"
  base_combo: ["W", "E", "Q", "AA", "R"]
  win_condition: "Hol dir einen Kill oder Assist in der Laning Phase und snowballe: jeder Takedown reset das volle Kit über Voracity, eine einzelne Kill in Lane wird oft zum Doppelkill auf der nächsten Wave."
  weakness: "Hard-CC unterbricht R und macht den Channel zur verschwendeten Zeit. Ohne Takedown zum Cooldown-Reset bleibt sie ein Melee mit kurzer Reichweite und nur einem Blink — Long-Range-Mages bestrafen sie kostenlos."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8140, name: "Grisly Mementos", icon_path: "perk-images/Styles/Domination/GrislyMementos/GrislyMementos.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination primär: Electrocute proct auf jeder W-E-Q-Kette (3 separate Hits in 3 Sekunden) für Gratis-Burst. Sudden Impact triggert direkt nach jedem Shunpo (dem Blink). Ultimate Hunter rasiert Sekunden von Death Lotus auf jeden Takedown — Voracity macht den Rest."
    secondary_rationale: "Precision sekundär: Triumph heilt 12% fehlende HP auf Takedown, du kettest also einen zweiten Kill auf dem resetenden Kit. Coup de Grace gibt +8% Schaden gegen Gegner unter 40% HP — exakt das Fenster, in dem R den Fight beendet."
    secondary_alternative: "Hat das Gegnerteam viel Magic Poke (Xerath, Vel'Koz, Ziggs), swap Precision auf Resolve mit Second Wind (Regen vs Poke) und Overgrowth (extra HP-Scaling), damit du die Lane bis zum ersten Takedown überlebst."
matchup_draft:
  pick_into:
    - examples: ["veigar", "twisted-fate", "anivia"]
      archetype: "Immobile Mages ohne Dash"
      reason: "Sie können dem W-E-Q-Burst-Window von Katarina nicht entkommen. Sobald ihr Setup (Veigar Cage, TF Gold Card, Anivia E) auf Cooldown ist, haben sie keine Antwort auf einen Shunpo-All-in."
    - examples: ["lux", "orianna"]
      archetype: "Mid-Range-Mages ohne Escape"
      reason: "Beide leben vom Positioning hinter Minions. Katarina blinkt auf einen Dagger jenseits der Wave, löscht sie mit W-E-Q-AA und reset auf den Kill auf das nächste Ziel."
    - examples: ["karthus"]
      archetype: "Farm-heavy Scaler ohne Sustain oder Hard-CC"
      reason: "Karthus braucht ungestörte Farm-Fenster. Der Reset-Druck von Katarina zwingt ihn, Flash zu verbrennen und das Late-Game-Scaling aufzugeben, das seine einzige Win-Condition ist."
  counterpicks:
    - examples: ["annie", "lissandra"]
      archetype: "Point-and-Click-Hard-CC-Mages"
      reason: "Ihr Stun ist instant und nicht zu countern: er cancelt Death Lotus mitten im Channel und macht Katarina zum stehenden Sandsack, während ihr Team auf sie kollabiert."
    - examples: ["xerath", "vel-koz"]
      archetype: "Long-Range-Artillery-Mages"
      reason: "Sie pokken Katarina außerhalb ihrer Q-Reichweite (625) für die ersten 5 Levels herunter. Sie erreicht Level 6 schon mit 40% HP, ohne Voracity-Reset, und stirbt an einer einzigen Skillshot-Rotation."
    - examples: ["diana", "pantheon"]
      archetype: "Burst-All-in-Midlaner mit Point-and-Click-Engage"
      reason: "Dianas Q-R-Combo und Pantheons W-Stun treffen, bevor Katarina ihren eigenen W-Dagger droppen kann. Sie verliert das Trade-Race und fällt bei Item-Spikes zurück."
---

## Überblick

Katarina ist eine Melee-AP-Assassin, die um ihre Passive **Voracity** herum gebaut ist: jeder Takedown (Kill oder Assist) reduziert alle ihre verbleibenden Cooldowns drastisch. Diese eine Mechanik ist die gesamte Identität des Champions — eine Kill in Lane refresht ihr volles Kit, also wird ein Takedown oft zum Doppel auf der nächsten Wave. Mid passt zu ihr, weil sie kurze Rotationsdistanzen braucht, um Resets quer über die Map zu ketten.

Ihr Game Plan liest sich einfach, führt sich hart aus. Drop einen Dagger mit **W** oder nutz den nachfallenden Dagger von **Q**, blink mit **E** drauf für AOE-Schaden, dann beginn mit Auto-Attacks und cast **R**, wenn der Gegner auf niedriges HP fällt. Skill-Expression sitzt an zwei Stellen: in der Cast-Reihenfolge **W-E-Q** (du musst den Dagger vor dem Blink droppen, nicht danach) und im **wann** du **R** channelst — Pre-Engage cancelt jeder Stun, Post-Engage räumst du einen Fight mit Reset-Ketten ab.

## Empfohlener Build

**Starter-Items:** Doran's Ring + 2 Health Potions. Skip Doran's Shield auch in Ranged-Matchups — die AP und Mana-Regen gewinnen dir mehr Trades, als die HP dir sparen.

**Core-Items (in Reihenfolge):**

1. ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** — erster Item-Spike. Gibt einen zweiten kurzen Dash (Active) zusätzlich zu Shunpo, du engagest also auf ein Ziel, das seinen Escape schon verbrannt hat. AP und HP fürs Überleben des Counter-Engage.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flache Magic Penetration. Default-Boots; swap auf Mercury's Treads gegen viel CC.
3. ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — Burst-Spike, der sich perfekt mit der W-E-Q-Kette deckt. Die HP-Schwellen-Passive (triggert, sobald du einen Gegner unter eine niedrige HP-Schwelle bringst) gibt dir den Extra-Burst, um Ziele ohne R abzuschließen.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — Late-Game-Scaling-Multiplikator. Dein höchster AP-Slot; der 30% AP-Boost macht aus Katarina vom "Snowball Assassin" einen "One-Shot jedes Squishy".
5. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — Magic-Pen-Bonus, der mit den fehlenden HP des Ziels skaliert. Stackt wunderbar mit Stormsurge und R, um Low-HP-Ziele quer durch einen Fight zu finishen.
6. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — kauf ihn in dem Moment, in dem ein Priority-Target ein Magic-Resist-Item baut.

**Situative Items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — gegen Hard-Engage (Malphite R, Zac, Amumu). Die Stasis cancelt den Engage, der sonst deinen R-Channel unterbrechen würde.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — gegen magische Single-Target-CC, die R cancelt (Annie Stun, Lissandra R, Twisted Fate Gold Card). Der Schild frisst eine Ability, dein Channel überlebt.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — ersetzt Sorcerer's Shoes, wenn das Gegnerteam 2+ Stuns oder Roots hat, die Death Lotus cancelt.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — gegen Healing-Stack-Comps (Soraka mid, Vladimir, Dr. Mundo top). Capped das gegnerische Healing, damit eine Kill eine Kill bleibt.

**Boots:** Sorcerer's Shoes ist Default. Mercury's Treads ist der Swap, wenn das Gegnerteam Hard-CC hat; Ionian Boots of Lucidity ist selten korrekt, weil Voracity dir die Cooldowns schon kostenlos gibt.

**Skill-Order:** Maxe **Q** zuerst (Waveclear und Hauptschaden), **W** als zweites (der Dagger, der jedes Combo verankert), **E** zuletzt. Punkt in **R** auf Level 6, 11, 16.

**Runen:** Primärbaum **Domination** mit **Electrocute**, **Sudden Impact**, **Grisly Mementos**, **Ultimate Hunter**. Sekundär **Precision** mit **Triumph** und **Coup de Grace**. Die Keystone (die Hauptrune oben auf der Seite) proct natürlich auf der W-E-Q-Kette, weil du das Ziel mit 3 separaten Schadensinstanzen triffst.

## Wichtige Matchups

- **Annie:** Härtestes Matchup. Ihr Stun ist Point-and-Click und cancelt Death Lotus instant. Kauf ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** als zweites Item, wenn die Lane schief läuft. Pre-6 sitz hinter der Wave und farme mit **Q**; blink niemals rein, solange ihr Stun nicht auf Cooldown ist.
- **Lux:** Günstiges Matchup ab Level 6. Pre-6 outranged dich ihre **Q**, also spiel hinter Minions und dodge. Nach Level 6 blink auf einen Sidewave-Dagger und burst sie weg — sie hat keinen Dash zum Entkommen.
- **Zed:** Skill-Matchup. Er hat denselben All-in-Pattern mit mehr Disengage (seine **R** macht ihn 0.5s untargetable und bricht deinen Channel). Halt **R** zurück, bis er zuerst seine **R** nutzt; überlebst du sein Combo, reset du auf den Kill.
- **Twisted Fate:** Counter-Pick. Pre-6 outpush du ihn; nach 6, wenn er roamen will, blink auf einen Dagger auf der Wave und lösch ihn, weil er kein Defensiv-Item hat. Track seine **R** mit Wards in Mid.
- **Diana:** Hard-Counter gegen dich. Ihr **Q-R**-Combo proct, bevor deine **W** den Dagger überhaupt droppt. Kauf ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** als drittes Item; blink ohne nie unter Tower auf sie.

## Power Spikes & Siegbedingungen

- **Level 2:** Mit **Q** und **E** kannst du schon traden. Drop **Q**, lauf in die Bounce-Reichweite, blink **E** auf den nachfallenden Dagger für AOE-Schaden, dann raus. Gratis-Poke, wenn du es on-Cooldown machst.
- **Level 6:** Erste **Death Lotus**. Mit Voracity refresht eine Kill oder Assist den Channel und verdoppelt deinen Schaden in Skirmishes — Pre-6-Fights dauerten 4 Sekunden; Post-6 kann ein Takedown einen Fight auf 10 Sekunden zyklischer Resets ausdehnen.
- **![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) Hextech Rocketbelt fertig (~ Minute 11-13):** Erster großer Item-Spike. Der aktive Dash gibt dir ein zweites Mobility-Tool, du engagest also auf ein Ziel, das seinen Escape schon verbrannt hat (Flash, Lux **E**, Yasuo **E**). Roam-Druck kippt hier.
- **![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) Stormsurge online (~ Minute 18-22):** Dein W-E-Q-AA-Combo one-shottet jetzt jeden Squishy unter 70% HP ohne R. Das ist das Timing, in dem du Objective-Fights erzwingst und auf den Side-Lanes nach Picks suchst.

## Häufige Fehler

- **R Pre-Engage channeln.** Hard-CC unterbricht Death Lotus und verschwendet den Cooldown. Nutz **R** Post-Engage: nach dem Engage deines Tanks, nachdem das gegnerische Frontline sein CC verschossen hat, channelst du aus einer sicheren Position zum Aufräumen. Pre-Engage mit **R** ist reserviert fürs Finishen eines Low-HP-Ziels, das dich nicht unterbrechen kann.
- **Erst E blinken, dann W droppen.** Die Cast-Reihenfolge ist **W → E → Q**. Der Dagger muss am Boden liegen (oder kurz vorm Landen sein), wenn du blinkst, sonst hebst du ihn nicht auf und verlierst sowohl den AOE-Schaden des Passive-Procs als auch die Cooldown-Reduktion auf Shunpo.
- **Auf einem unkillbaren Ziel den Reset greedig erzwingen.** Ist der Gegner auf 35% HP, sein Teammate aber direkt daneben, triggert die Kill Voracity nicht rechtzeitig und du stirbst am Follow-up. Disengage mit dem **W**-Move-Speed, warte die Cooldowns auf die altmodische Art ab.
- **Shunpo auf Minions fürs Waveclear verschwenden.** Du brauchst **E** als defensives Escape-Tool. Push Waves mit **Q** plus Auto-Attacks; blink nur dann auf einen Minion, wenn du einen Fight commitest oder fliehst.
- **Katarina gegen doppeltes Point-and-Click-CC picken.** Hat das Gegnerteam Annie + Leona, geht deine **R** nie durch. Entweder dodgest du in Champ-Select oder du akzeptierst, um ihre Cooldowns herum zu spielen: blink nur rein, nachdem sie ihre Stuns auf jemand anderen verbrannt haben.

## Fortgeschrittener Tipp

Nutz **E** auf gegnerischen Wards, um Ganks zu entkommen. Der Blink funktioniert auf jedem sichtbaren Ward — inklusive gegnerischen Trinkets und Pinks auf deiner Flussseite. Erspähst du einen Stealth Ward im Tri-Bush, bevor ein Gank eintrifft, hast du ein kostenloses Escape-Tool, das auf der gegnerischen Map nicht erscheint: die meisten Gegner setzen Wards nach vorn, ohne zu merken, dass sie dir einen Ausgang geben. Das Spiegelbild gilt auch: erspähst du beim Backen einen gegnerischen Ward nahe deiner Tower, repositioniere den Start deines nächsten Ganks drumherum.
