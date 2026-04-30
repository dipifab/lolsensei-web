---
title: "Vayne Bot Build & Guide — Patch 16.9"
slug: "vayne-bot"
language: "en"
patch: "16.9"
champion: "vayne"
role: "bot"
last_updated: "2026-04-29"
description: "Vayne bot lane guide for League of Legends Patch 16.9: starter kit, hyperscaling on-hit build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Vayne"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Marksman / Hyperscaler"
  abilities:
    - key: "P"
      name: "Night Hunter"
      description: "Vayne gains bonus Move Speed when she moves toward a nearby enemy champion. Free chase pressure if a fight breaks her way."
      dd_spell_id: "Vayne_Passive"
    - key: "Q"
      name: "Tumble"
      description: "Short dash in a chosen direction. Her next basic attack within a few seconds deals bonus physical damage. Use to reposition and re-engage between auto-attacks."
      dd_spell_id: "VayneTumble"
    - key: "W"
      name: "Silver Bolts"
      description: "Passive: every third consecutive attack or ability against the same target deals bonus true damage based on the target's max HP. Your real damage source against tanks."
      dd_spell_id: "VayneSilveredBolts"
    - key: "E"
      name: "Condemn"
      description: "Targeted bolt that knocks the enemy back. If they collide with terrain they are stunned and take bonus damage. Self-peel and wall-stun execute tool."
      dd_spell_id: "VayneCondemn"
    - key: "R"
      name: "Final Hour"
      description: "Buff that grants bonus AD, longer Night Hunter, lower Tumble cooldown, and invisibility during Tumble. The window where Vayne becomes a 1v9 threat."
      dd_spell_id: "VayneInquisition"
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
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3031", name: "Infinity Edge" }
  situational_items:
    - dd_id: "3153"
      name: "Blade of the Ruined King"
      against: "vs tanky front lines or HP-stacking comps (Sion, Cho'Gath, Dr. Mundo) — current-HP on-hit damage stacks with Silver Bolts true damage"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "vs assassin or diver pressure (Zed flank, Samira, Yasuo) — the HP-threshold passive shield buys you the half-second to E them into a wall"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "vs heavy healing comps (Soraka, Vladimir, Aatrox) — applies Grievous Wounds, cuts healing the moment you tag a target"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "vs hook or pick-off comps (Blitzcrank, Thresh, Morgana Q) — spell shield eats one priority CC before you get bursted in lane"
  base_combo: ["Q", "AA", "AA", "AA", "E"]
  win_condition: "Survive lane to two items, then ramp damage with Silver Bolts true damage and Final Hour invisibility. Kite divers with Q-AA loops and E them into walls during teamfights."
  weakness: "Short auto-attack range and zero burst before items. Hard countered by long-range poke and by enchanters that disengage; if Final Hour is on cooldown a single CC chain deletes you."
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
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["sion", "cho-gath", "dr-mundo"]
      archetype: "Tank or HP-stacking front lines"
      reason: "Silver Bolts deals max-HP true damage on every third hit. The bigger the HP bar, the better Vayne's W scales — these targets melt through armor and HP gear that would stop other ADCs."
    - examples: ["yasuo", "samira", "tryndamere"]
      archetype: "Melee divers that walk into Condemn range"
      reason: "Their engage requires closing to melee distance. Vayne can E them into a side wall for a 1.5s stun, then Q backwards to reset spacing — they spend their dashes and get nothing back."
    - examples: ["draven", "lucian", "kalista"]
      archetype: "Early-game lane bullies that fall off"
      reason: "If Vayne survives lane to minute 14-16 and gets her two-item spike, these short-range early carries lose the late-game damage race; she scales harder with the same gold."
  counterpicks:
    - examples: ["caitlyn", "ashe", "varus"]
      archetype: "Long-range marksmen with safe poke"
      reason: "They auto-attack and Q-poke from outside Vayne's 550 attack range. Every wave they chip her HP without committing — she has no answer because Tumble does not extend her base range."
    - examples: ["lulu", "janna", "milio"]
      archetype: "Enchanter supports with disengage and peel"
      reason: "When laning against Vayne, an enchanter ADC duo can shield her trades to zero and slow-push the wave. Vayne wants short trades on her timing — disengage tools deny that pattern and force a weak farm lane."
    - examples: ["ezreal", "xerath", "ziggs"]
      archetype: "Skirmishers with kited poke"
      reason: "They keep distance with dashes or artillery range. Vayne cannot close the gap before two items, and their poke removes her HP bar before she ever reaches Final Hour windows."
---

## Overview

Vayne is the textbook **hyperscaler** marksman: a melee-range ADC with no waveclear and almost no early lane pressure, who in exchange becomes one of the highest 1v1 damage dealers in the game once she has two items and **Final Hour (R)** active. Her kit is built around three simple ideas — short repositioning dashes with **Tumble (Q)**, max-HP true damage every third hit with **Silver Bolts (W)**, and a knockback that stuns on terrain collision with **Condemn (E)**. She is **squishy** (a champion with high damage and low defenses, like most ADCs) with a short attack range, so the lane is a survival exercise: don't die, hit two items, then take over the map. Scaling here means her power keeps growing with every item bought — early she's weak, late she's a 1v9 threat.

The game plan is patient and mechanical: farm safely behind your support, look for level 6 **Final Hour** + **E**-into-wall plays only when the enemy ADC over-commits (steps too far forward without backup), and start scaling. After **Kraken Slayer** and **Runaan's Hurricane** your damage curve flips: you out-DPS most front lines (the tanks and bruisers that open the fight) because Silver Bolts true damage ignores armor. From minute 18 onward you are the win condition — your team's job is to peel for you (protect you from whoever attacks you) while you kite divers (move backwards while still attacking, so the enemy melee champion can't reach you) with **Q**-auto loops and finish the fight under Final Hour invisibility.

## Recommended Build

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Skip a second Doran's even when you're ahead — every 450 gold you save goes into a B. F. Sword component for Kraken Slayer.

**Core items (in order):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — first-item rush. Its three-stack proc (an item passive that triggers automatically — here, every third attack fires bonus true damage) lines up perfectly with the Silver Bolts third-hit cadence: every fourth or fifth attack you fire bonus true damage on top of your W proc. Together they are the reason Vayne shreds tanks.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed boots. Mercury's Treads only if the enemy team has 3+ hard CC threats targeted at you specifically.
3. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — extra attack speed plus two extra bolts that proc on-hit effects (effects that fire when you basic-attack: Silver Bolts and Kraken Slayer count too). Turns Vayne from a single-target carry into an AOE machine (damage hits multiple targets in an area) in teamfights.
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — your biggest physical damage spike. Crit scaling on top of Kraken Slayer + Silver Bolts is the moment the enemy ADC can't out-DPS you in any sustained trade.

**Situational items:**

- ![Blade of the Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of the Ruined King** — against tank-heavy front lines (Sion, Cho'Gath, Dr. Mundo). Replace **Runaan's Hurricane** if the enemy team has 3+ tanks, since Botrk's current-HP on-hit stacks with Silver Bolts true damage.
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — against assassin or diver pressure on you (Zed flank, Samira, Yasuo). The HP-threshold passive (a shield that triggers when you drop low) plus the movement speed gives you the half-second window to **E** the diver into a wall.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — against heavy healing comps (Soraka, Vladimir, Aatrox). Applies Grievous Wounds the moment you tag a target, cutting their healing across the entire fight.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — against hook or pick-off comps (Blitzcrank, Thresh, Morgana Q). The spell shield eats one priority CC before you get bursted; in those matchups it's the difference between living and dying.

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** is default. Mercury's Treads only against multiple AP CC threats like Brand or Zyra support.

**Skill order:** Max **Q** first (lower Tumble cooldown means more repositioning per fight), **W** second (true damage scales with rank), **E** last (the cooldown matters more than the damage — and it caps lower with **Final Hour** rank). Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Precision** with **Lethal Tempo**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secondary **Resolve** with **Bone Plating** and **Overgrowth** for the lane survivability that lets you reach scaling. Stat shards: Attack Speed, Adaptive Force, Health Scaling — the AS shard speeds up your first Silver Bolts proc, Overgrowth feeds your late-game HP pool.

## Key matchups

- **Caitlyn:** Heavily Caitlyn-favored before level 9 and the lane you'll see most often. Don't trade auto-attacks pre-3 — her range is 650 to your 550 (a trade is a quick exchange of damage in lane, not a full all-in). Hold the wave near your turret, farm with **Q** dashes to last-hit (kill a minion with the final blow to claim its gold) safely, and survive to minute 14. After your first item the lane equalizes; after two items you out-DPS her in any sustained fight.
- **Draven:** Slightly unfavored levels 1-3 because his Spinning Axe burst (high damage in 1-2 seconds) out-trades you. Don't fight him pre-3; freeze the wave near your turret (hold the minion line in one spot so it doesn't move), hit level 3 with all three abilities, then trade only when his W speed boost is on cooldown. Ask your support to ward the river — Draven's spike loves ganks (a surprise attack from the jungler arriving from the river).
- **Jhin:** Even matchup decided by **R** dodging. Respect his fourth bullet (it does massive damage). When his **W** is down, walk forward and trade. Use **E** to interrupt his **R** channel if he ults across the lane.
- **Samira:** She wants a melee all-in (a full commitment to fight until kill, no escape) once she has W to nullify your auto-attacks. Position behind minions so her **W** stagger is broken by minion shots, save **E** as the knockback the moment she dashes in (don't blow it on poke — long-range chip damage to wear her HP down), and never fight her with Phantom Dancer's shield on cooldown.
- **Lucian:** Heavily Lucian-favored levels 1-6. His double-shot passive plus dash burst will chunk you on every trade. Play under turret, ward the lane bush, and ask the jungler to camp this lane early — Lucian falls off hard at minute 20+ and Vayne scales past him.

## Power spikes & win conditions

- **Level 2:** With one point in **W**, your third-attack proc on the same target chunks an unaware enemy ADC for a meaningful HP percentage. Don't lead trades — react to the enemy mis-stepping forward to last-hit and burst the third proc with a **Q** auto-reset.
- **Level 6:** First **Final Hour** unlocks all-in pressure and **Q** invisibility. Cast **R** as the engage tool (the ability that opens the fight), **Q** behind a minion line to vanish from vision, and re-engage from an unexpected angle. Don't waste **R** on a slow-push wave (a wave you're slowly building up against the enemy turret) — wait for a short trade window where the enemy is over-extended (standing too far up the lane without a way back home).
- **![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer completion (~ minute 12-14):** The lane equalizer. Your sustained DPS now exceeds most early-game lane bullies. Force objective fights at Drake or Rift Herald — you contribute meaningful damage to objectives and to teamfights for the first time this game.
- **![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge online (~ minute 22-26):** Your hypercarry threshold. Critical strikes turn Silver Bolts third-hit into a near-execute on squishies. From this point your job is to play as a back line carry (the damage dealer who stays behind, not in melee): stand at the second-furthest position, kite with **Q**, and let your team peel.

## Common mistakes

- **Trading auto-attacks in lane pre-2 items.** Vayne has a 550 attack range and zero burst pre-Kraken Slayer. Every auto-attack you trade with a Caitlyn, Draven, or Lucian costs you more HP than it costs them. Farm with **Q** dashes and accept a 20-30 CS deficit at minute 10 — the spike makes it back.
- **Using E offensively to start a fight.** **Condemn** is a knockback. If you E an enemy into open ground, you push them away from your support — the opposite of what you want in lane. **E** is for wall stuns (push them backwards into terrain) and for self-peel against divers, not as a damage tool on flat ground.
- **Tumbling toward the enemy in fights.** **Q** is for repositioning between auto-attacks, not for closing distance into a 5-man teamfight. Tumble **away** from threats while still firing on your target — the bonus-damage attack still hits even when you dash backward, and you stay outside the assassin's gap-close range.
- **Casting R as a damage steroid in a losing fight.** **Final Hour** is a ramp tool — bonus AD for ~10 seconds, extended on takedowns. Don't pop it pre-engage when you're at 30% HP and your team is dead. Save it for a fight you can actually win, where extending the duration with kills is realistic.
- **Ignoring vision before splitpushing.** A common mid-rank mistake: Vayne hits 3 items and walks into a side lane to splitpush (push a side lane alone to force the enemy to respond) without wards. Vayne is uniquely vulnerable to flanks because she has no escape outside **Q**'s short distance — without river vision a single CC chain ends your game.

## Advanced tip

Practice the **wall-stun Condemn line of sight** drill in practice tool. Walk into Summoner's Rift bot lane and identify the four to six terrain walls within a 550 unit radius of every farming position — the lane bush corners, the raptor wall on blue side, the tri-bush wall, the chunk of terrain between the bot lane and dragon pit. Internalize the angle from each spot to the nearest wall. In a real game, when an assassin lands on you, your reaction shouldn't be "where is safety?" — it should be reflexive: **Q** sideways to get the angle, **E** them into the wall you already memorized, then **Q** backwards to reset spacing. A clean wall stun on a Zed or Yasuo mid-engage often turns a death into a kill on the spot, because the 1.5s stun is enough for your support to finish them while your **W** procs true damage on max HP.
