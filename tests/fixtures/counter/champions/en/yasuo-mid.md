---
title: "Yasuo Mid Build & Guide — Patch 16.9"
slug: "yasuo-mid"
language: "en"
patch: "16.9"
champion: "yasuo"
role: "mid"
last_updated: "2026-04-29"
description: "Yasuo mid lane guide for League of Legends Patch 16.9: starter kit, AD crit build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Yasuo"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Fighter / Skirmisher"
  abilities:
    - key: "P"
      name: "Way of the Wanderer"
      description: "Yasuo gets double critical strike chance from items, but his crits deal half their normal bonus damage. He also builds a shield while moving that pops on the next hit from a champion or monster."
      dd_spell_id: "Yasuo_Passive"
    - key: "Q"
      name: "Steel Tempest"
      description: "Stab in a line, treated as a basic attack. Two stacks turn the next Q into a tornado that knocks airborne (knock-up = lifts the target into the air, stunning them briefly)."
      dd_spell_id: "YasuoQ1Wrapper"
    - key: "W"
      name: "Wind Wall"
      description: "Drops a wall that blocks every enemy projectile crossing it for 4 seconds. Eats Caitlyn Q, Lux Q, Jhin W, Ashe R — but not melee or instant point-and-click abilities."
      dd_spell_id: "YasuoW"
    - key: "E"
      name: "Sweeping Blade"
      description: "Targeted dash through any enemy unit (minion, monster, champion). Cannot dash through the same target twice in a few seconds. Cast Q while dashing for an AOE tornado-shaped Q."
      dd_spell_id: "YasuoE"
    - key: "R"
      name: "Last Breath"
      description: "Blinks to any airborne enemy champion, holds them up longer, and grants armor penetration on crits afterward. Needs a Q tornado, ally knock-up, or R from teammates to land."
      dd_spell_id: "YasuoR"
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
    - { dd_id: "6673", name: "Immortal Shieldbow" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "3078"
      name: "Trinity Force"
      against: "first item alternative when ahead in lane: faster waveclear, sticky movement, and Q on-hit-style proc enable aggressive E-Q dives"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "vs heavy healing comps (Soraka, Aatrox, Dr. Mundo) — applies Grievous Wounds (cuts healing on the target) the moment you tag them"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "vs assassin focus or burst comps (Zed, LeBlanc) — the rez gives you a free reset to Q-tornado the team that just blew everything on you"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs heavy AP burst (Syndra, Veigar, Vladimir) — magic shield + lifesteal on low HP keeps you alive long enough to crit them down"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Stack two Q charges, dash with E to land the tornado knock-up, then R the airborne target. Mid-game roam side lanes after Immortal Shieldbow and pick squishies on ally knock-ups."
  weakness: "Ranged poke before level 6 keeps you out of E range. Point-and-click CC (Annie, Lissandra, Malzahar) and grounding (Cassiopeia W, Singed E) disable your dash entirely."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8242, name: "Unflinching", icon_path: "perk-images/Styles/Sorcery/Unflinching/Unflinching.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "jhin", "ashe", "ezreal"]
      archetype: "Projectile-heavy ADCs and artillery mages"
      reason: "Wind Wall blocks every meaningful damage spell they cast — Caitlyn Q, Jhin W, Ashe R, Ezreal Q. After level 6 you walk through their poke and Q-R them once allies set up a knock-up."
    - examples: ["yone", "irelia", "tryndamere"]
      archetype: "Melee duelists without long-range disengage"
      reason: "Yasuo's E lets him stick on melee bruisers indefinitely; once he reaches Immortal Shieldbow the lifesteal trade flips in his favor and they lack the kiting tools to escape."
    - examples: ["azir", "zilean", "swain"]
      archetype: "Stationary mages with telegraphed casts"
      reason: "Their wave-clear and damage rely on slow projectiles or zone abilities he can wall or sidestep with E. Once he hits 6 a single jungle gank with knock-up is enough to delete them."
  counterpicks:
    - examples: ["annie", "lissandra", "malzahar"]
      archetype: "Point-and-click hard CC mages"
      reason: "Their stun, root, or suppress is targeted (no projectile to wall, no skillshot to dodge), which means they can lock down Yasuo before he stacks Q or finds an E target — and his R needs an airborne enemy he cannot create alone."
    - examples: ["pantheon", "renekton", "pyke"]
      archetype: "Early-level all-in bruisers"
      reason: "They beat Yasuo flat in short trades before he hits level 6 and Immortal Shieldbow. A single Pantheon W stun or Renekton W stun cuts off his dash window and resets the trade in their favor."
    - examples: ["cassiopeia", "singed", "morgana"]
      archetype: "Grounding or zoning mages"
      reason: "Cassiopeia W and Singed E ground (disable dashes) Yasuo, deleting his E mobility entirely. Morgana Q + W locks him out of any tornado follow-up and her E shields her team from Q poke."
---

## Overview

Reduced body for fixture (WPCP-004). Real frontmatter retained for builder tests.
