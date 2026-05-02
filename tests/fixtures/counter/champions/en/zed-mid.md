---
title: "Zed Mid Build & Guide — Patch 16.9"
slug: "zed-mid"
language: "en"
patch: "16.9"
champion: "zed"
role: "mid"
last_updated: "2026-04-29"
description: "Zed mid lane guide for League of Legends Patch 16.9: AD assassin lethality build, runes, key matchups, power spikes, common mistakes, and an advanced tip."
quick_learn:
  champion_dd_id: "Zed"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Assassin / Burst"
  abilities:
    - key: "P"
      name: "Contempt for the Weak"
      description: "Zed's basic attacks against low-HP enemies deal bonus magic damage. Fires once every few seconds per target."
      dd_spell_id: "Zed_Passive"
    - key: "Q"
      name: "Razor Shuriken"
      description: "Linear skillshot through enemies. Both Zed and his shadows throw a shuriken — overlap them on one target to triple the hit."
      dd_spell_id: "ZedQ"
    - key: "W"
      name: "Living Shadow"
      description: "Sends a shadow forward; recast to swap places with it (shadow swap = teleport to where the shadow stands). Main mobility tool."
      dd_spell_id: "ZedW"
    - key: "E"
      name: "Shadow Slash"
      description: "Short AOE slash from Zed and every active shadow. Slows enemies hit and refunds W cooldown per champion hit."
      dd_spell_id: "ZedE"
    - key: "R"
      name: "Death Mark"
      description: "Zed dashes onto a champion untargetable, marks them, then 3s later the mark detonates repeating a portion of damage Zed dealt while it was active."
      dd_spell_id: "ZedR"
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
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "3142", name: "Youmuu's Ghostblade" }
    - { dd_id: "3814", name: "Edge of Night" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "6698"
      name: "Profane Hydra"
      against: "swap into squads with creep walls or extra waveclear needs — the active is a second small burst window"
    - dd_id: "6676"
      name: "The Collector"
      against: "vs squads with very low-HP carries (ADC + mage backline): the execute closes kills your raw burst leaves at 50 HP"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs heavy AP burst (Syndra, Veigar, LeBlanc) — magic shield blocks the one-shot that would kill you mid-R"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "swap from Lucidity vs double-AD comps (two physical damage threats like Yasuo + Caitlyn)"
  base_combo: ["W", "E", "Q", "R", "AA"]
  win_condition: "Snowball mid (build a kill lead before minute 12) by trading with W-E-Q. After level 6, side-lane to assassinate isolated enemies with R + ult flash combo (Flash mid-ult to surprise the target)."
  weakness: "Hard CC during the R dash freezes you on the target with no shadow swap. Grouped enemies with peel (Janna, Lulu, Braum) cancel the assassin window before damage repeats."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8138, name: "Eyeball Collection", icon_path: "perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["lux", "orianna", "viktor", "syndra"]
      archetype: "Immobile mid-range mages without dash"
      reason: "Zed's W shadow swap closes the gap on a single skillshot dodge. Once in melee they have no escape from E slow into Q and the level-6 R deletes them before they cast a long ulti like Final Spark."
    - examples: ["xerath", "ziggs"]
      archetype: "Artillery mages with low HP and weak escape"
      reason: "Long-range mages stand still to channel poke; Zed sends the shadow forward, Q-pokes from 900 range, and at six R-flashes onto them through their poke window."
    - examples: ["karma", "lulu", "morgana"]
      archetype: "Mid-laners shifted from support pool"
      reason: "They start with low base AD and no waveclear range. Zed shoves with double-Q and roams bot or top while they are stuck under tower clearing one wave at a time."
  counterpicks:
    - examples: ["malzahar", "kassadin"]
      archetype: "Mid-laners with built-in spell shield or suppression"
      reason: "Malzahar's passive eats your Q + E proc, then his R suppression locks you mid-dash with no shadow swap available. Kassadin's E silence cuts your combo on the W swap recovery frame."
    - examples: ["lissandra", "annie", "veigar"]
      archetype: "Burst mages with point-and-click crowd control"
      reason: "Their stun lands the moment you R in. The 3-second mark window expects you to keep dealing damage — locked down, you produce nothing for the detonation."
    - examples: ["galio", "pantheon"]
      archetype: "Bruiser-mid with on-demand magic damage reduction or stun"
      reason: "Galio's W absorbs your full burst as a shield and stuns you; Pantheon's W stuns through the R dash. Both flatten your kill window before you can W-out to safety."
---

## Overview

Reduced body for fixture (WPCP-004). Real frontmatter retained for builder tests.
