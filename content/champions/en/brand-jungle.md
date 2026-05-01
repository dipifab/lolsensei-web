---
title: "Brand Jungle Build & Guide — Patch 16.9"
slug: "brand-jungle"
language: "en"
patch: "16.9"
champion: "brand"
role: "jungle"
last_updated: "2026-05-01"
description: "Brand jungle guide for League of Legends Patch 16.9: smite path, burn-mage clear, gank windows, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Brand"
  difficulty: 3
  damage_type: "magic"
  champion_class: "AP Jungler / Skirmisher"
  abilities:
    - key: "P"
      name: "Blaze"
      description: "Brand's spells set targets ablaze (damage over 4s, stacks up to 3). At 3 stacks the blaze detonates as a small area-of-effect explosion that re-applies spell effects."
      dd_spell_id: "Brand_Passive"
    - key: "Q"
      name: "Sear"
      description: "Linear skillshot that deals magic damage. If the target is already ablaze, it stuns them — your gank lock and your skirmish stun setup."
      dd_spell_id: "BrandQ"
    - key: "W"
      name: "Pillar of Flame"
      description: "Delayed area-of-effect zone after a short tell. Targets that are ablaze take +25% damage. Main jungle clear tool."
      dd_spell_id: "BrandW"
    - key: "E"
      name: "Conflagration"
      description: "Targeted blast that bounces to nearby enemies. If the primary target is ablaze, the spread doubles — bounces between camps speed up your clear."
      dd_spell_id: "BrandE"
    - key: "R"
      name: "Pyroclasm"
      description: "Long-range fireball that bounces up to 5 times between enemies, prioritising ablaze targets. Massive damage in skirmishes around drake and grub pits."
      dd_spell_id: "BrandR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "W" }
    - { level: 9, key: "E" }
    - { level: 10, key: "E" }
    - { level: 11, key: "R" }
    - { level: 12, key: "E" }
    - { level: 13, key: "E" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs early-game divers (Lee Sin, Xin Zhao, Hecarim, Diana) — stasis covers your zero-mobility weakness during their gap-close"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "when ahead and the enemy team has no magic resist — the move-speed passive on cast lets Brand kite skirmishes"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap when any priority target buys their first Magic Resist item (Mercury's Treads counts)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC engages (Ahri R, Lissandra R, Nautilus hook)"
  base_combo: ["E", "W", "Q", "R"]
  win_condition: "Skirmish around objective pits with R bouncing through grouped enemies. Gank lanes after pushing a wave with E (the spread sets up a free Q stun). Powerspike window is minutes 8-18."
  weakness: "Slowest jungle clear among AP options pre-Liandry's, no escape, and no innate jungle sustain. Weak to early invades by mobile junglers and to enemy junglers who can match Brand's AOE with hard CC."
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
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery primary: Arcane Comet procs on every W or E hit, adding free burst on top of blaze. Manaflow Band is mandatory — Brand jungle is mana-starved on early clears. Transcendence pushes ability haste past 40%, Scorch finishes low-HP camps and ganks."
    secondary_rationale: "Resolve secondary: Second Wind sustains you through camps without buying potions (Brand has no innate jungle sustain like Fiddlesticks heal or Warwick lifesteal). Overgrowth gives bonus health that scales with monsters killed — direct counter to your no-defenses fragility."
    secondary_alternative: "Vs heavy early-game invade comps (Lee Sin + Pyke roam pressure, Elise + Galio), swap Resolve to Inspiration with Biscuit Delivery (mana sustain on your weakest clears) and Cosmic Insight (more Smite uptime around drakes)."
matchup_draft:
  pick_into:
    - examples: ["sejuani", "amumu", "malphite"]
      archetype: "Group-engage tanks with no escape"
      reason: "When their R lands, the same pile of enemies stands inside your W. R bounces between every grouped champion and your engage answer to their engage is a teamwipe instead of a 5v5."
    - examples: ["hecarim", "skarner", "volibear"]
      archetype: "Bruisers that need to commit forward"
      reason: "They push into your team to deal damage and have no way to disengage; Brand's E lights blaze, Q stuns the moment they reach you, and R locks the second target before they can pull out."
    - examples: ["fiddlesticks", "evelynn"]
      archetype: "Channel-dependent or stealth-reliant junglers"
      reason: "Brand interrupts Fiddlesticks fear/ult channel with the Q stun on ablaze and detects Eve's pre-channel position with W prefires; both rely on long setups Brand can break with one rotation."
  counterpicks:
    - examples: ["lee-sin", "elise", "graves"]
      archetype: "Early-game skirmishers with mobility"
      reason: "They invade Brand at level 3 before Liandry's is online. Brand has no escape: Lee Sin Q + W chains, Elise rappel, and Graves dash all skip past his Q skillshot, and his clear is too slow to refund the fight."
    - examples: ["kha-zix", "master-yi", "kindred"]
      archetype: "Mobile assassin junglers"
      reason: "They blink/dash past the Q projectile so Brand cannot land the stun, then burst him in melee where he has no peel for himself. Even Zhonya's only delays the inevitable in a 1v1."
    - examples: ["nocturne", "shaco"]
      archetype: "Vision-deny ganker junglers"
      reason: "They bypass the wards Brand depends on (no innate vision counter, no flash-engage). Nocturne R cuts vision to your team; Shaco Q stealths through wards. Brand cannot pre-aim Q if he cannot see them coming."
---

## Overview

Brand jungle is an **AP skirmisher** built around objective fights and post-6 ganks rather than fast clears or solo invades. The kit is identical to mid Brand — set targets on fire, stun ablaze targets with **Q**, bounce **R** between grouped enemies — but the role is different. As a jungler you trade lane priority (the lane-by-lane edge laners get when they push the wave first) for control of the river: every drake fight, every grub spawn (a "grub" is one of the small neutral monsters in the void pit that gives gold and a bonus to the team that kills it), every Scuttle skirmish (Scuttle = the neutral crab in the river that gives vision and a small buff) is a chance for **R** to bounce between three or four grouped enemies and turn an even fight into a teamwipe.

His game plan is rigid by jungle standards. Clear the first three camps full-clear (red → krugs or blue → gromp depending on side), gank a lane at level 3 only if it has a clean **W → Q stun** window, recall for **Liandry's Torment** components, and from minute 8 onward camp the next objective. Brand has no escape, no early dueling power, and the slowest single-target clear of any AP jungler — invades will end your game if you do not ward your jungle entrances. The payoff is the post-6 spike: **Pyroclasm** in a grouped river fight is one of the highest-damage ultimates in the game, and the kit asks the enemy team a question they have to answer with disengage they often do not have.

## Recommended Build

**Starting items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** (default for ranged junglers — gives the smite-pet that buffs camp clear and grants gold) + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**Core items (in order):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — first complete item. The percent-HP burn punishes objective HP pools (drake, baron, herald) and stacks on top of every blaze tick.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration, the cheapest power spike between core items.
3. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — the slow on every spell hit closes Brand's biggest weakness (no chase, no escape). Lets you walk down kited enemies and gank without Flash.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — late-game scaling slot. Buy this fourth unless you are 4+ kills ahead, in which case rush it third for snowball ("snowball" = early lead that grows: kill → gold → item → more kills).

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — into early-game divers (Lee Sin, Xin Zhao, Hecarim). Stasis is the only answer Brand has when a dash chain crosses his front line (the tanks and bruisers up front who normally absorb hits for you).
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — when ahead and the enemy team has not started building magic resist. The move-speed passive after every cast lets Brand kite skirmishes ("kite" = move backward while attacking, holding distance).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — the moment any priority target buys their first magic resist item. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** (the magic-resist boots) count as that first MR item.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — into telegraphed magic CC engages (Ahri R, Lissandra R, Nautilus hook).

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** is default. Swap to ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** if the enemy team has 3+ hard CC threats with magic damage.

**Skill order:** Max **W** first (highest base damage and primary clear tool), **E** second (clear-speed boost between camps and gank spread), **Q** last. Take a point in **R** at levels 6, 11, and 16.

**Runes:** Primary **Sorcery** with **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Resolve** with **Second Wind** and **Overgrowth** for jungle sustain.

## Key matchups

- **Lee Sin:** Loses every 1v1 before level 6. His Q + W chain skips past your Q skillshot. Avoid solo skirmishes pre-6, full-clear instead, and ward both of your own jungle entrances on minute 1:30.
- **Hecarim:** Even matchup. He out-runs your kite but groups for R bounces in teamfights. Save Q for the moment he commits forward — if you stun a charging Hecarim, his entire engage timer is wasted.
- **Karthus:** You out-gank, he out-scales. Force fights pre-16 around drake. After Defile is online (his max-rank passive that pulses around him, which is the AOE damage form he uses to kill from grey-screen) you cannot walk into his team without Banshee's Veil.
- **Sejuani:** You feast on her. R bounces through every champion she ulti-pulls into a stack; engage on her engage. Pre-6 she still beats you in 1v1s — do not invade her, group with mid for grub fights.
- **Master Yi:** Flat counter as a 1v1. Force the fight 5v5 in narrow rivers (drake pit, baron pit) where his W-cleanse cannot save him from chained R bounces. Buy Zhonya's Hourglass second item if he hits Wit's End.

## Power spikes & win conditions

- **Level 3 (W + E + Q):** First gank power. With one point in each ability the **E → W → Q stun** combo is online. If the enemy laner overextends without flash, you have a kill setup.
- **Level 6 (R unlocked):** First objective spike. **Pyroclasm** in a Scuttle skirmish (river crab fight) does roughly 50% of a squishy's HP per bounce. Fight every Scuttle when R is up.
- **Liandry's Torment online (~ minute 9-12):** Clear speed flips and objective DPS (DPS = damage per second, here against drake/baron/grub HP pools) doubles. From this point you should be the one initiating drake fights, not the one reacting.
- **Rabadon's Deathcap online (~ minute 24-30):** R full-bounce sequence one-shots squishies. Force grouped objective fights — Baron, Soul Drake, Atakhan ("Atakhan" = a late-game neutral pit boss spawning around 14 minutes; if you are not familiar, treat the spawn as a forced 5v5).

## Common mistakes

- **Trying to clear like a fast-clear jungler.** Brand has no innate sustain or attack speed. Do not race Lee Sin to Scuttle pre-6 — full-clear, hit level 6, then start ganking and skirmishing.
- **Naked Q for poke in jungle.** **Q** without ablaze is a slow projectile that misses on dashing junglers. Always lead with **W** on the spot they will land or **E** onto a minion that will spread blaze.
- **Ulting one isolated enemy.** **R** bounces are wasted on a single target — the bounces walk back and forth onto the same champion with damage falloff. Save **R** for grouped fights, not a 1v1 chase.
- **Skipping vision in your own jungle.** Place Stealth Wards on tri-bush and pixel brush at minute 1:30. Brand has no escape; an enemy invade that you do not see coming is a free kill given to a mobile jungler.
- **Smite-greeding objectives without R.** Drake and grub HP scale; your smite damage does not. If you contest a drake without R off cooldown and the enemy jungler does, you lose the smite war and the drake.

## Advanced tip

Practice the **invisible-W gank**. Approach a lane from the river side hidden by fog of war ("fog of war" = the unrevealed area outside your team's vision). Cast **W** on the spot the enemy laner will *next* step on (predict their path based on the wave) — Pillar of Flame has a delay before it lands, and the cast itself does not break stealth or vision. The moment the W lands and applies blaze, fire **Q** through the stun window. Done correctly, the enemy never sees a champion on their map: they see a W appear on their feet, get rooted, and die before their teammate can even ping. This sequence is what turns a "decent Brand jungle" into a Brand who carries.
