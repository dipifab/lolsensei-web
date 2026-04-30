---
title: "Ashe ADC Build & Guide — Patch 16.9"
slug: "ashe-bot"
language: "en"
patch: "16.9"
champion: "ashe"
role: "bot"
last_updated: "2026-04-29"
description: "Ashe ADC bot lane guide for League of Legends Patch 16.9: Frost Shot kiting setup, core marksman build, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Ashe"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Marksman / Utility"
  abilities:
    - key: "P"
      name: "Frost Shot"
      description: "Every basic attack slows the target. Crits deal no bonus damage but apply a stronger slow instead. Foundation of Ashe's kiting (moving back while attacking)."
      dd_spell_id: "Ashe_Passive"
    - key: "Q"
      name: "Ranger's Focus"
      description: "Stack via auto-attacks. At max stacks, activate to get bonus attack speed and turn each AA into a multi-arrow flurry that deals empowered damage. Main DPS button."
      dd_spell_id: "AsheQ"
    - key: "W"
      name: "Volley"
      description: "1200-range arrow cone in front. Each enemy is hit by one arrow only and takes the slow from Frost Shot. Main poke and trade tool in lane."
      dd_spell_id: "Volley"
    - key: "E"
      name: "Hawkshot"
      description: "Sends a hawk anywhere on the map for 5 seconds of vision (ability to see in fog of war). 2 charges. Use for objective scouting, not damage."
      dd_spell_id: "AsheSpiritOfTheHawk"
    - key: "R"
      name: "Enchanted Crystal Arrow"
      description: "Global skillshot (a non-targeted ability that travels in a line). Stuns the first enemy champion hit; longer travel = longer stun (up to ~3.5s)."
      dd_spell_id: "EnchantedCrystalArrow"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
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
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3031", name: "Infinity Edge" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "vs HP/armor stackers (Cho'Gath, Sion, Malphite, Ornn) — % armor pen converts auto-attacks back into damage"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "vs healing-stacking comps (Soraka, Vladimir, Aatrox) — applies Grievous Wounds (cuts enemy healing in half)"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "vs assassins or divers (Zed, Kha'Zix, Talon) — Ghost passive lets you walk through units while kiting"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "vs heavy poke or burst — large lifesteal heal + overshield buffer"
  base_combo: ["W", "AA", "Q", "AA"]
  win_condition: "Stack Frost Shot slows during teamfights, kite back behind your front line with empowered Q autos, and pick off lone targets with cross-map R for free objective control."
  weakness: "Slowest auto-attack base movement of all marksmen. No dash, no reposition tool — divers and assassins who get into melee range delete her if her support cannot peel."
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
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["vayne", "twitch", "kalista"]
      archetype: "Short-range marksmen with no early poke"
      reason: "Ashe's W has 1200 range and Frost Shot slow; she pokes them out from outside their 500-550 AA range and turns every approach into a free trade for her side."
    - examples: ["kog-maw", "senna"]
      archetype: "Immobile scaling carries"
      reason: "Cross-map R deletes them on objective spawns or fountain reset windows. Their kit has no dash to escape the arrow once it leaves the fog of war."
    - examples: ["ornn", "sejuani"]
      archetype: "Slow tank front lines without mobile dive"
      reason: "Ashe perma-slows the front line with W + auto attacks, forcing fights to last until her DPS items finish off the back line. The tanks cannot reach her if she kites with her support."
  counterpicks:
    - examples: ["caitlyn", "jhin", "varus"]
      archetype: "Long-range marksmen with poke"
      reason: "Caitlyn 650 AA, Jhin 4th-shot 750 range, Varus W stacks at 925 — they out-poke Ashe's 600 AA and bleed her HP every wave without ever entering W range."
    - examples: ["lucian", "tristana"]
      archetype: "High-mobility marksmen with dashes"
      reason: "Lucian's E and Tristana's W ignore Ashe's slow by repositioning instantly. They close the range gap without paying the kiting tax that hurts every other ADC."
    - examples: ["pyke", "leona", "nautilus"]
      archetype: "Burst engage supports with hard CC"
      reason: "Ashe has no dash or shield to escape lock-down chains. A successful Leona Q or Nautilus Q removes her from the trade before she can W back, and her slow does nothing once she is stunned."
---

## Overview

Ashe is the simplest marksman in League — a champion role known as "ADC" (attack damage carry: a ranged auto-attacker that scales into the main damage source late-game). She has no dash, no reposition tool, and the slowest auto-attack base movement speed in the role. What she gets in return is the most reliable utility kit on any ADC: every basic attack slows the target, her **W** pokes (deals long-range chip damage to drain HP without committing to a fight) from 1200 game-units (about half the screen width) with a slow attached, and her **R** is a global skillshot stun that gives her team free engages on objectives anywhere on the map. She is built to **kite** — moving backward while attacking to keep enemies at range — and to enable picks (eliminating a lone enemy outside a teamfight) for the rest of the team.

Her game plan in lane is to land **W** on the enemy ADC every cooldown to slow and chip their HP, farm safely with auto-attacks, and look for level 6 plays with **R** the moment her support has a CC ready (Crowd Control: stuns, slows, roots that lock the enemy in place). In teamfights (5v5 fights that decide objectives like Drake or Baron — neutral monsters that grant team buffs when killed), she stays at maximum AA range behind her front line (the tanks/bruisers who open the fight), activates **Q** when she has 4 stacks (Q charges that build up from auto-attacks; the counter is shown under her portrait), and chains slows on whoever steps onto her front line. The hardest skill on Ashe is **R** prediction — sniping with a 1-second arrow flight time is the difference between a free pick and a wasted ult.

## Recommended Build

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** (small AD + lifesteal — heal a portion of damage dealt) + 1 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**.

**Core items (in order):**

1. ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv** — first-item power spike (the moment a champion gets noticeably stronger after completing an item). Ashe's frequent auto-attacks proc (trigger) the Energized passive (a stacking effect that releases bonus magic damage on a charged AA) extremely fast.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed boots. Ashe's empowered Q scales with attack speed, so these help every fight from minute 8 onward.
3. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — adds two side-arrows to every basic attack. The side arrows apply Frost Shot slow to nearby targets, so Ashe slows the entire enemy team in a teamfight just by attacking the front-line tank.
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — late-game crit (critical strike: a chance for an auto-attack to deal ~175% damage) multiplier. This is when Ashe's empowered Q turns from "chunky" to "deletes squishies in 2 seconds" (squishy: a champion with low defenses).

**Situational items:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — vs HP/armor stackers (Cho'Gath, Sion, Malphite, Ornn). Percent armor penetration ignores a fixed share of enemy armor, so tanks die at the same speed as squishies.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — vs healing-stacking comps (Soraka, Vladimir, Aatrox). Applies Grievous Wounds (a status effect that cuts enemy healing in half).
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — vs assassins or divers (Zed, Kha'Zix, Talon — champions designed to dive onto the back line). Its Ghost passive lets you walk through enemy minions and champions while kiting.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — vs heavy poke (long-range chip damage from artillery mages) or vs burst comps. Lifesteal heals you mid-fight; when overhealed it stores HP as a shield.

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** is the only correct choice on Ashe. The attack speed converts directly into Q empowered DPS.

**Skill order:** Max **Q** first (more bonus AD per empowered AA + longer active duration). Max **W** second (cooldown drops from 18s at rank 1 to 4s at rank 5 — that is the lane poke spam). Max **E** last (utility only). Take **R** at levels 6, 11, 16.

**Runes:** Primary tree **Precision** (the AA-scaling tree) with **Lethal Tempo** (extra attack speed when you keep auto-attacking a champion), **Triumph** (heals on takedown), **Legend: Alacrity** (more attack speed scaling per stack), **Coup de Grace** (extra damage on enemies below 40% HP). Secondary tree **Inspiration** with **Biscuit Delivery** (free mana/HP biscuits in lane) and **Cosmic Insight** (more **Flash** and **R** uptime).

## Key matchups

- **Caitlyn:** Hardest lane matchup. She has 650 AA range to your 600, longer trap (W) and a 1300-range hook (E). Hide behind minions when she places traps; let your support engage on her if she ever overextends (walks too far past her own minions, no escape if ganked). Power-farm safely (focus only on collecting minion gold without risks) until ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv** comes online, then look for cross-map **R** picks.
- **Lucian:** Loses to Ashe at level 1 but flips at level 2 with Q + E combo. Save **W** for when he double-AA's into you (lands two basic attacks back-to-back), then walk away while he is stuck mid-combo. Never trade after he hits **E** — his dash makes him uncatchable until it is on cooldown.
- **Vayne:** Pre-6 free farm: she has 550 range and no slow. Push the wave (send your minions forward into her tower) to her side, harass (deal small chip damage to drain her HP) with **W** every cooldown. After level 6 her ultimate gives her invisibility on Q dash; do not chase her into bushes (small terrain spots that block vision).
- **Jhin:** Out-poked at long range by his W (poke skillshot). Stay behind your front minion line; his W slows itself if he hits a minion first. Punish him during his reload (4-shot mag + manual reload window of 2.5 seconds).
- **Draven:** Loses an AA war straight up — his Q axes deal way more per AA than your basic. Avoid 1-for-1 trades; only commit when his axes are not in his hands. Build ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** earlier than usual if he hits a 3-kill lead.

## Power spikes & win conditions

- **Level 1:** Strong with **W**. The 1200-range cone is the best lvl 1 trade tool on any ADC (a "trade" is a brief exchange of damage in lane, not a full kill attempt). Take a free trade on the enemy ADC if they walk up for a cs (creep score: last-hitting a minion to take its gold).
- **Level 6:** First **R** unlocks lane kills with any CC support. If your Leona / Nautilus / Pyke has ult, an R + their engage = a guaranteed kill on the enemy ADC if they are not at full HP under tower.
- **![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) Statikk Shiv completion (~ minute 11-13):** Waveclear (clearing the enemy minion wave with AOE damage) flips. You can shove the wave with W + 2 AAs, then roam (leave lane to help allies) for cross-map **R** plays on Drake or mid skirmishes (small fights between 2-3 players in the river or jungle).
- **![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge online (~ minute 26-30):** Empowered Q with crits melts the back line in 2-3 seconds. Force a teamfight at every objective from this point forward.

## Common mistakes

- **Activating Q at low Focus stacks.** Q only does damage if you have 4 stacks (you see them under your portrait). Activating early wastes 30 mana for an underwhelming Q. Auto-attack 4 times first, then press Q.
- **Throwing R on cooldown in lane.** **R** is your team's most valuable tool (cross-map stun for Drake fights, Baron setups). Holding it for objective fights is almost always more valuable than burning it for an in-lane trade. The exception: a lethal kill window where R guarantees the kill.
- **Standing still while auto-attacking in a fight.** Ashe is built to kite; standing still means you eat skillshots that you would otherwise dodge. Move 1 step between AAs to throw off enemy timing.
- **Over-pushing the wave without vision.** Ashe has no escape. If you push past mid-river without your support warding tribush and river, the enemy jungler kills you for free. Always **W** the bush you cannot see before walking forward.
- **W'ing minions on cooldown.** **W** costs 75/70/65/60/55 mana and the slow on it is the strongest lane harass tool. Save **W** for the enemy ADC, not for the wave.

## Advanced tip

Practice the **flash R** — when an enemy is about to escape into fog of war with low HP, **Flash** in the direction they are running, then immediately fire **R**. The flash repositions you 400 units forward, which means **R** travels 400 fewer units before it hits — but the stun duration scales with travel distance, so this only works as a finisher on near-execute targets (enemies already low enough that any extra hit kills them). The win condition: the enemy thinks they escaped at 200 HP because Ashe is still 1500 units away, never seeing the flash + R that ends the chase.
