---
title: "Aatrox Top Build & Guide — Patch 16.9"
slug: "aatrox-top"
language: "en"
patch: "16.9"
champion: "aatrox"
role: "top"
last_updated: "2026-04-29"
description: "Aatrox top lane guide for League of Legends Patch 16.9: bruiser build path, Q edge mechanics, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Aatrox"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Fighter / Drain Tank"
  abilities:
    - key: "P"
      name: "Deathbringer Stance"
      description: "Periodically, his next basic attack deals bonus magic damage scaling with target max HP and heals Aatrox. Track the indicator on his portrait."
      dd_spell_id: "Aatrox_Passive"
    - key: "Q"
      name: "The Darkin Blade"
      description: "Greatsword slam in three sequential casts, each a different shape. Hitting the outer edge knocks up enemies briefly and deals 25% bonus damage. Aatrox's main damage source."
      dd_spell_id: "AatroxQ"
    - key: "W"
      name: "Infernal Chains"
      description: "Chain projectile that slows the first target hit. If a champion or large monster does not leave the impact zone in time, they are pulled back and damaged again."
      dd_spell_id: "AatroxW"
    - key: "E"
      name: "Umbral Dash"
      description: "Passive: heals for a portion of damage dealt to champions. Active: short dash, usable mid-Q-windup to align edge hits or kite."
      dd_spell_id: "AatroxE"
    - key: "R"
      name: "World Ender"
      description: "Demonic form: bonus AD, Move Speed decaying over the duration, and increased self-healing. Fears nearby enemy minions. Takedowns extend the duration."
      dd_spell_id: "AatroxR"
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
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3071", name: "Black Cleaver" }
    - { dd_id: "3053", name: "Sterak's Gage" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap from Plated Steelcaps when the enemy team has heavy magic damage or strong CC chains (e.g. Lissandra, Sett, Malphite ult)"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs heavy AP burst (Syndra, Vex, Fizz mid swapping top): the spell shield blocks one big magic hit and saves your engage"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "vs squads with two strong physical AD dealers (Yasuo + Caitlyn): turns burst AD into a slow bleed so E lifesteal can heal it back"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "vs single-target lockdown that one-shots your engage (Morgana Q, Blitzcrank hook, Lissandra R)"
    - dd_id: "3155"
      name: "Hexdrinker"
      against: "rush this component instead of finishing Eclipse if you are bleeding HP to an AP top (Vladimir, Rumble) and need MR before backing"
  base_combo: ["W", "AA", "Q1", "E", "Q2", "Q3"]
  win_condition: "Land Q edges to knock up, chain W to lock targets in place, use E to reset position. Convert Eclipse + Black Cleaver lead into side-lane 1v1 wins."
  weakness: "All damage rides on Q timing. Miss the edge and the trade is lost. Hard CC, long-range kiters, and true-damage duelists (Fiora, Camille) tear his sustain apart."
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
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["nasus", "yorick"]
      archetype: "Immobile melee fighters without engage tools"
      reason: "Aatrox wins trades before level 6 with Q edge hits; W chains pin them long enough that they cannot stack their passives safely or escape an all-in."
    - examples: ["ryze", "vladimir"]
      archetype: "Short-range mages who must walk in to deal damage"
      reason: "They have to step into melee for full output; Aatrox punishes the gap with W slow plus a Q edge knock-up before they can disengage."
    - examples: ["kayle", "k-sante"]
      archetype: "Weak early-laners that spike late"
      reason: "Aatrox has one of the best early-game laning curves; he can kill or deny their XP before they reach the late-game items that make them scary."
  counterpicks:
    - examples: ["fiora", "camille"]
      archetype: "True-damage duelists with parry or shield"
      reason: "Fiora's W parries the Q knock-up and her Vitals (marks on Aatrox she autos for true damage — damage that ignores armor and MR) bypass the drain tank build; Camille's E adds more true damage on top."
    - examples: ["quinn", "teemo"]
      archetype: "Long-range or invisibility-based kiters"
      reason: "They stay outside Q range and break Aatrox's wind-ups with blind or vault (Quinn's E knockback dash); he has no way to close the gap without burning both E and Flash."
    - examples: ["malphite", "maokai"]
      archetype: "Tanks with instant hard CC (no skill aim)"
      reason: "Their stuns and roots are point-and-click — no projectile to dodge. They interrupt Q recasts mid-animation, and once Aatrox is locked down he cannot heal back through E lifesteal."
---

## Overview

Reduced body for fixture (WPCP-004). Real frontmatter retained for builder tests.
