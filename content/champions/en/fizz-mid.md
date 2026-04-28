---
title: "Fizz Mid Build & Guide — Patch 16.9"
slug: "fizz-mid"
language: "en"
patch: "16.9"
champion: "fizz"
role: "mid"
last_updated: "2026-04-29"
description: "Fizz mid lane guide for League of Legends Patch 16.9: AP assassin build path, key matchups, power spikes, common mistakes, and an advanced E timing tip."
quick_learn:
  champion_dd_id: "Fizz"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Assassin / AP Melee"
  abilities:
    - key: "P"
      name: "Nimble Fighter"
      description: "Walks through units (no minion blocks) and takes a flat amount of reduced damage from every source. Helps disengage by cutting through your own minion wave."
      dd_spell_id: "Fizz_Passive"
    - key: "Q"
      name: "Urchin Strike"
      description: "Targeted 550-range dash through an enemy. Deals magic damage and applies on-hit effects (item passives that trigger on each basic attack, like Lich Bane spellblade). Main gap-close, short cooldown."
      dd_spell_id: "FizzQ"
    - key: "W"
      name: "Seastone Trident"
      description: "Passive: your basic attacks bleed enemies for magic damage over 3 seconds. Active: empower your next attack for bonus magic damage. Killing a target with active resets cooldown to 1 second."
      dd_spell_id: "FizzW"
    - key: "E"
      name: "Playful / Trickster"
      description: "Hop onto your trident: 0.75s untargetable, then slam for AOE magic damage and a slow. Recast to dash again instead of slamming (no slow, smaller area). Your only escape and the heart of your combo."
      dd_spell_id: "FizzE"
    - key: "R"
      name: "Chum the Waters"
      description: "Long-range linear fish (1300). Sticks to the first enemy champion hit, slows them, then a shark erupts knocking them up. Damage and slow scale with how far the fish travelled before attaching."
      dd_spell_id: "FizzR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
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
    - { dd_id: "3100", name: "Lich Bane" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3152"
      name: "Hextech Rocketbelt"
      against: "alt first item vs ranged poke comps where you need an extra dash to reach the back line"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs heavy CC lockdown (Lissandra R, Rell ult): stasis lets your R fish detonate before you die"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC (Annie stun, Twisted Fate gold card, Malzahar suppression)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap when any priority target buys a magic resist item"
  base_combo: ["R", "Q", "W", "AA", "E"]
  win_condition: "Find isolated squishy targets in side lanes after Lich Bane completion. Land R fish from max range, then Q + W + AA spellblade to delete. Roam with the wave on the enemy's side."
  weakness: "Squishy melee with one engage cycle. If E or R is on cooldown you have no escape and no second commit; focused CC ends the combo before R fish lands."
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "anivia", "twisted-fate"]
      archetype: "Immobile mages without a dash"
      reason: "Fizz's Q dashes through them on instinct and E gives 0.75s untargetability to dodge their main spell. Without an escape dash they cannot answer the all-in once R fish attaches."
    - examples: ["lux", "xerath", "ziggs"]
      archetype: "Long-range artillery with no mobility"
      reason: "R fish reaches 1300 units: it punishes max-range positioning. Once Fizz commits with Q + E they have no dash to reset distance and the burst window is theirs to absorb."
    - examples: ["annie", "syndra"]
      archetype: "Telegraphed close-range mages"
      reason: "Their burst needs them to walk up with a slow tell (Annie stun buffer, Syndra E setup). Fizz E during the cast window makes him untargetable and the combo whiffs."
  counterpicks:
    - examples: ["malphite", "galio"]
      archetype: "Tanky mid laners with hard engage"
      reason: "Their resistances cut Fizz burst in half (Galio W reduces magic damage by ~50%, Malphite passive shield blocks the W proc). Both also have a hard engage at 6 that punishes him committing first."
    - examples: ["lissandra", "malzahar"]
      archetype: "Point-and-click CC mages"
      reason: "Lissandra R is point-and-click stasis (no skillshot to dodge with E), Malzahar R suppresses through E recast. Both also clear waves so Fizz cannot zone them in lane."
    - examples: ["pantheon", "talon"]
      archetype: "Early-game lane bullies"
      reason: "They out-trade Fizz at levels 1-3 before he hits the level 6 spike. Pantheon W stun and shielded Q poke punish every step forward; Talon Q range matches Fizz Q with lower mana cost."
---

## Overview

Fizz is a melee AP assassin who lives or dies by the timing of his **Playful / Trickster (E)**. His kit is short-range, high-burst (heavy damage packed into a 1-2 second window rather than spread over time), and slippery: a 0.75-second moment in which he cannot be targeted, a low-cooldown dash, and a long-range fish ult that locks down a priority target. Mid lane suits him because the river is short — he can engage from level 6 with **Q-E** into **R**, dodging counter-CC mid-combo, then exit with **E** recast.

His game plan is to survive lane until his core two-item spike (Lich Bane + Sorcerer's Shoes), then look for picks (eliminating an isolated enemy outside teamfights) on squishy targets (champions with low HP and no defensive stats — they die fast under burst) in side lanes. He himself is squishy, has no waveclear, and his only escape (**E**) sits on a 16-second cooldown at rank 1 — losing it without value punishes him hard. Fizz prefers single targets to delete rather than 5v5 teamfights, where focused crowd control ends his combo before the R fish lands.

## Recommended Build

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Take ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** instead vs heavy ranged poke (long-distance harass) matchups like Xerath or Vel'Koz.

**Core items (in order):**

1. ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** — your main power spike (the moment your damage jumps a tier and you can start fighting from a position of strength). Synergizes with the Q-AA pattern: every **Q** triggers the spellblade effect on your next basic attack, almost doubling your burst.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration for the squishy targets you most want to delete.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — extra burst plus an HP-threshold passive (an item effect that activates only when the target is below ~35% HP) that lines up with R fish executes.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — late-game scaling multiplier. Your highest-AP slot and the item that turns squishies into one-shot targets.

**Situational items:**

- ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** — alternative first item if you need an extra gap-close (a way to cover distance into the enemy) to reach a ranged poke back line that Q alone cannot bridge.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — vs heavy crowd control lockdown (Lissandra R, Rell ult): stasis lets your R fish detonate before you die.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — vs single-target magic CC (Annie stun, Twisted Fate gold card, Malzahar suppression).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — the moment any priority target buys a magic resist item.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** is default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** is acceptable when **E** becomes your most important cooldown (heavily combo-reliant matchups).

**Skill order:** Max **E** first (untargetability + AOE damage scaling — AOE means *area of effect*, so the spell hits everything inside a zone), **Q** second (cooldown reduction means more dashes per fight), **W** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Domination** with **Electrocute**, **Cheap Shot**, **Eyeball Collection**, **Ultimate Hunter**. Secondary **Sorcery** with **Manaflow Band** and **Scorch**. Electrocute fits the Q-AA-W three-hit window perfectly: every all-in (full-commitment burst combo until kill or escape) procs it.

## Key matchups

- **Annie:** Telegraphed engage. Annie's passive stuns the next spell after every four spells she casts — you can see four small blue marks build up around her. The moment those four marks appear, she is winding up an all-in. Hop with **E** as the stun goes out; when you land, her main combo is wasted and the trade is yours.
- **Yasuo / Yone:** Yasuo's Wind Wall (a wall that blocks ranged spells passing through it) stops projectiles, but Fizz **Q**, **E**, and **R** are not blockable projectiles. Out-trade them with **W** active on your basic attacks; their wall is a wasted mechanic against you.
- **Lissandra:** Hard counter. Her **W** is a point-blank AOE (area of effect — hits everything in a zone) root, and her **R** is point-and-click stasis (a spell with no skillshot to dodge: she clicks you, the spell lands). Neither is a skillshot (a non-targeted spell that flies in a line or area you can sidestep) you can dodge with **E**. Hold **E** for her **W** cast, never all-in without **R** up, and look for picks on side lanes instead.
- **Galio:** Tank stats and a magic damage reduction passive on his **W** that cuts your full burst in half. Stop trying to kill him solo; spend mana shoving the wave (pushing your minions into the enemy tower so they cannot freely come to you) and roam (move from your lane to help allies elsewhere on the map) bot or top once **R** is online.
- **Pantheon:** Punishes you pre-6. His **W** stun and shielded **Q** poke out-trade you at levels 1-3. Stay behind your wave and trade only when his **W** is on cooldown. The matchup flips at 6 once you have **R**.

## Power spikes & win conditions

- **Level 2:** With **E** + **Q**, you have a guaranteed dash + slow + AOE damage cycle. If the enemy walks up to last-hit a melee minion, **E** on top of them and unload **Q-AA** for a winning trade (a brief exchange of damage that you come out ahead in).
- **Level 6:** First **Chum the Waters** unlocks all-ins. The combo **R-Q-W-AA-E** deletes any squishy mid laner even with only the building blocks of Lich Bane bought. Roam bot lane after shoving the wave: with the minions pushed onto the enemy's side, they lose more time defending than you lose by leaving lane.
- **![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) Lich Bane completion (~ minute 11-13):** Burst spike (the moment your damage takes a sudden jump). Your Q-AA spellblade chunks roughly 40% HP off a squishy in one cast. This is the window where you should be roaming aggressively for picks rather than 1v1ing in lane.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minute 24-28):** Your full combo one-shots any squishy who has not built a single magic resist item. Force objective fights here; deny vision (kill enemy wards so they have no eyes on the map) on your team's side so the enemy cannot see you flank (entering the fight from a side they did not cover).

## Common mistakes

- **Using E before they commit.** **E** is your only escape. If you hop without first baiting their CC out, you eat the spell on landing. Wait for them to throw the key ability — *then* hop.
- **R fish from too short a range.** Fish damage and slow strength scale with how far it travelled before attaching. Cast it from the maximum 1300 range so it hits with full damage and the slow lasts the entire detonation window.
- **All-inning into 2+ enemies.** Fizz has one engage cycle (committing fully into a single combo). If a second target shows up mid-combo, you have no second R fish, no second escape, and you fold to focused CC. Look for isolated targets in side lanes, not 5v5s mid.
- **Forgetting W during chases.** Killing a target with **W** active refunds mana and drops the cooldown to 1 second — you can chain another empowered auto-attack on a second target instantly. Activate **W** before the killing blow whenever a follow-up target is nearby.
- **Maxing W first in normal lanes.** **Q** and **E** carry your damage and combo timing; **W** bleed is sustained DPS that matters in extended trades, not in burst windows. Default to maxing **E** first.

## Advanced tip

Practice the **R-Flash combo** (R + Flash). Throw the fish forward, then immediately **Flash** in the same direction: the fish lands much further than the natural 1300 range, giving you a guaranteed catch on a target who thinks they are out of range. Use it for picks across walls or to start objective fights from unexpected angles. The cast-to-Flash window is short — bind **Flash** to your second key (D) for muscle memory and rehearse it in the practice tool until the timing feels automatic.
