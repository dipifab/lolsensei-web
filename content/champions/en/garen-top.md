---
title: "Garen Top Build & Guide — Patch 16.9"
slug: "garen-top"
language: "en"
patch: "16.9"
champion: "garen"
role: "top"
last_updated: "2026-04-29"
description: "Garen top lane guide for League of Legends Patch 16.9: starter kit, juggernaut bruiser build, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Garen"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Juggernaut / Bruiser"
  abilities:
    - key: "P"
      name: "Perseverance"
      description: "Regenerates HP out of combat if not damaged or hit by abilities for a few seconds. Defines the hit-and-retreat trade pattern."
      dd_spell_id: "Garen_Passive"
    - key: "Q"
      name: "Decisive Strike"
      description: "Burst of move speed and slow cleanse. Next auto silences the target for 1.5s and deals bonus damage."
      dd_spell_id: "GarenQ"
    - key: "W"
      name: "Courage"
      description: "Passive: stack armor/MR by killing enemies. Active: shield + tenacity, then residual damage mitigation window."
      dd_spell_id: "GarenW"
    - key: "E"
      name: "Judgment"
      description: "AOE spin dealing physical damage to nearby enemies for 3s. Main waveclear and sustained DPS tool."
      dd_spell_id: "GarenE"
    - key: "R"
      name: "Demacian Justice"
      description: "Executes an enemy champion based on missing health. Bonus true damage against the most kill-fed enemy."
      dd_spell_id: "GarenR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
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
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3742", name: "Dead Man's Plate" }
    - { dd_id: "3053", name: "Sterak's Gage" }
  situational_items:
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "into AP top lane (Mordekaiser, Rumble, Vladimir) — magic shield passive saves extended trades"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "into double-AD comps; works around the bleed mechanic that punishes glass cannons in teamfights"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "into 3+ AP threats; the movement speed passive helps you path to fights"
    - dd_id: "3161"
      name: "Spear of Shojin"
      against: "top-tier offensive third item if you are massively ahead and want the Q ability haste cycle"
  base_combo: ["W", "Q", "AA", "E", "R"]
  win_condition: "Survive lane phase with Doran's Shield + passive sustain, scale to Stridebreaker, then flank in side lane and use R to execute kill-fed enemy carries in teamfights."
  weakness: "No dash or blink, no ranged hard CC. Vulnerable to kite (Quinn, Vayne) and long-range root (Lissandra, Mordekaiser pull). Falls behind in lane if you over-extend without W stacks."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8242, name: "Unflinching", icon_path: "perk-images/Styles/Sorcery/Unflinching/Unflinching.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
---

## Overview

Garen is a melee juggernaut whose value comes from sustained presence: passive **Perseverance** regenerates health out of combat, **Decisive Strike (Q)** lets him close gaps with cleanse, **Courage (W)** gives a flat tankiness window plus a passive resistance stack, **Judgment (E)** is his AOE damage and waveclear, and **Demacian Justice (R)** executes squishies based on missing health and a true-damage scaling against the most kill-fed enemy. He is one of the simplest champions to mechanically execute, which means the entire skill ceiling sits in **map awareness** and **wave management** — not in combo execution.

In top lane he wants short trades during W's active and full waves on his side of the lane. He is strong from level 1 but not unkillable; he has no dash and no hard CC, so any matchup that can disengage at will (Quinn, Vayne) or root him from range (Lissandra, Mordekaiser pull) will outscale his lane phase if you over-extend.

## Recommended Build

**Starting items:** Doran's Shield + 1 Health Potion. Doran's Blade only into ranged tops where you need to all-in early to deny CS.

**Core items (in order):**

1. **Stridebreaker** — slow on **Q**, AOE active for sticking to kited targets, AD + HP both useful.
2. **Plated Steelcaps** — most top lanes are auto-attack-heavy. Mercury's Treads only into 3+ CC champions on the enemy team.
3. **Dead Man's Plate** — synergy with **Q** movement bonus, the impact passive procs in your usual all-in pattern.
4. **Sterak's Gage** — life saver into burst windows, AD scaling that makes **R** execute later than its base threshold suggests.

**Situational items:**

- **Maw of Malmortius** — into AP top lane (Mordekaiser, Rumble, Vladimir).
- **Death's Dance** — into double-AD comps (works around the bleed mechanic that punishes glass cannons).
- **Force of Nature** — into 3+ AP threats; the movement speed passive helps you path to fights.
- **Spear of Shojin** — top-tier offensive third item if you are massively ahead and want the ability haste cycle.

**Boots:** Plated Steelcaps default. Mercury's Treads against Renekton+Lissandra+heavy CC.

**Skill order:** Max **E** first (DPS and waveclear), **Q** second (slow + utility), **W** last (passive value scales fine without points). Take **R** at 6, 11, 16.

**Runes:** Primary **Precision** with **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Secondary **Resolve** with **Second Wind** + **Unflinching**, or **Inspiration** with **Magical Footwear** + **Cosmic Insight** for boot timing on rotation maps.

## Key matchups

- **Darius:** Lose level 1, win after Stridebreaker if you avoid his **E** pull. Buy Doran's Shield, hug Q level for the cleanse.
- **Fiora:** Hard counter for her until level 6 if you don't get vital'd. Trade with **W** active to deny her parry value, then disengage.
- **Quinn:** Skill matchup; she kites with **Q** blind + **E** vault. Take Teleport, give up first wave CS, and roam mid every wave 4 onward.
- **Vayne top:** Your worst-feeling matchup. Build Plated Steelcaps level 1, take Doran's Shield + Second Wind, and play for the jungler — you cannot win 1v1 trades after 6 on this matchup.
- **Mordekaiser:** Slow lane into a death realm spike. Trade short, hit **Q** + **E** when his **W** is on cooldown, and back to Maw of Malmortius before his second item.

## Power spikes & win conditions

- **Level 2:** **Q** + **E** unlocks a real all-in. If they push the wave to you and your jungler is on top side, this is your kill window.
- **Level 6:** **Demacian Justice** lets you finish low-HP targets that previously walked away. Track enemy summoners; without Flash, every melee top is in execute range.
- **Stridebreaker timing (~ 11 minutes):** Wave control flips in your favor. Slow shove, freeze, or split push depending on map state. **Q** + active is gap-close insurance against ganks.
- **Late game ace condition:** With **R** scaling against the most-kill enemy and Sterak's Gage, you become a flanking threat that solo-kills carries. Your job is to load up **E** in fog and **R** before they peel.

## Common mistakes

- **Walking up at low W stack count.** **Courage** passive grants resistances per stack; if you have 0 stacks (e.g. just respawned), avoid extended trades until you reload via minions.
- **Using R as opener.** **R** is for execution, not setup. If you open with it, the cast time tells the enemy to disengage, and you lose the kill timer.
- **E into a stationary wave.** Spinning at 3 minions when you can drop them in 2 autos burns mana and tells the lane your cooldown rotation. Save **E** for trades.
- **Forgetting Q's silence.** **Q** silences for 1.5 seconds. Always Q-engage on a champion mid-cast (Lulu polymorph, Karma shield, Lissandra R) — the silence interrupts the cast.

## Advanced tip

When a fed enemy carry triggers your **R** target priority, you can flash-**R** them mid-team-fight even if their support pops a shield: **R**'s execute damage is true damage on the priority target, and most shield budgets are exhausted by the team's burst before your cast resolves. Save Flash for this play; the ace it generates is worth 2 dragon fights.
