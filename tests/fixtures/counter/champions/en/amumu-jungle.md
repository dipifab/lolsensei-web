---
title: "Amumu Jungle Build & Guide — Patch 16.9"
slug: "amumu-jungle"
language: "en"
patch: "16.9"
champion: "amumu"
role: "jungle"
last_updated: "2026-04-29"
description: "Amumu jungle guide for LoL Patch 16.9: clear path, AP-tank build (magic damage + tank stats), gank timing, key matchups, ultimate setups, and common mistakes."
quick_learn:
  champion_dd_id: "Amumu"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Engage"
  abilities:
    - key: "P"
      name: "Cursed Touch"
      description: "Basic attacks Curse enemies. Cursed targets take bonus true damage from any magic damage they receive — your team's spells hit harder."
      dd_spell_id: "Amumu_Passive"
    - key: "Q"
      name: "Bandage Toss"
      description: "Long-range linear skillshot that pulls Amumu to the first enemy hit and stuns them. Two charges — one for engage, one for follow-up or escape."
      dd_spell_id: "BandageToss"
    - key: "W"
      name: "Despair"
      description: "Toggle aura that ticks max-HP magic damage on nearby enemies and keeps refreshing Curse on them. Drains mana while active — turn it off out of combat."
      dd_spell_id: "AuraofDespair"
    - key: "E"
      name: "Tantrum"
      description: "Passive: take less physical damage. Active: short-range AOE burst. Cooldown drops every time Amumu is hit, so spam it during sustained fights."
      dd_spell_id: "Tantrum"
    - key: "R"
      name: "Curse of the Sad Mummy"
      description: "Massive AOE stun that locks down every enemy around Amumu and applies Curse. The whole point of the kit — every teamfight starts when this lands."
      dd_spell_id: "CurseoftheSadMummy"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
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
    - { dd_id: "1103", name: "Mosstomper Seedling" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3068"
      name: "Sunfire Aegis"
      against: "vs melee bruiser-heavy teams (Sett, Darius, Olaf): the burn aura stacks with W and the bonus armor hardens you against frontline focus"
    - dd_id: "8020"
      name: "Abyssal Mask"
      against: "when 3+ enemies deal magic damage: the AOE MR shred amplifies every spell from your team into Cursed targets"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs burst comps that focus you on R (Zed, LeBlanc, Syndra): stasis lets your team follow up while you survive the focus"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC that opens fights (Ahri charm, Lissandra R, Morgana Q): the spellshield blocks the engage on you"
  base_combo: ["Q", "R", "W", "E"]
  win_condition: "Land Q from fog onto a key target, R to lock everyone in range, then sit on top of the back line with W ticking max-HP damage while Tantrum cools down on every hit you take."
  weakness: "Predictable engage tools on long cooldowns. If Q misses or R is removed by a Cleanse Summoner, Amumu has no follow-up — he gets kited until both come back, contributing nothing for 90+ seconds."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
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
    - examples: ["yasuo", "kennen", "katarina", "miss-fortune"]
      archetype: "Grouped teamfight comps with AOE damage"
      reason: "Amumu's R catches everyone in a tight radius. Comps that want to fight grouped (Yasuo + Kennen AOE ults, Katarina jumping between targets, Miss Fortune Bullet Time) eat the stun together and feed their own AOE damage through the Curse passive."
    - examples: ["jinx", "kog-maw", "ashe", "vayne"]
      archetype: "Immobile carries with no built-in escape"
      reason: "Q is a 1100-range skillshot that pulls Amumu to the first target hit. Carries with no dash or blink get yanked out of position the moment they step forward to last-hit a wave."
    - examples: ["brand", "syndra", "ryze", "viktor"]
      archetype: "AP teammates that snowball off your engage"
      reason: "Cursed Touch turns magic damage on a target into bonus true damage. An AP-heavy team converts one Q-R into instant kills because every spell that follows hits harder."
  counterpicks:
    - examples: ["fiora", "tryndamere", "yone"]
      archetype: "Mobile bruisers with parry, immunity, or dashes"
      reason: "Fiora W parries the Q stun and reflects it, Tryndamere R ignores the damage your W aura ticks during the unkillable window, Yone's Q3 dashes him out of Tantrum range. They survive the engage and flip the fight."
    - examples: ["xerath", "nidalee", "varus"]
      archetype: "Long-range artillery without commitment"
      reason: "They poke from beyond Q's 1100 range. Amumu has to walk into their damage just to threaten engage, and a missed Q means a free 25-30 seconds for them to keep pushing the lane or objective."
    - examples: ["ezreal", "tristana", "kalista"]
      archetype: "Marksmen with built-in escapes"
      reason: "Ezreal E, Tristana W, and Kalista's hop reset all step out of Amumu's R radius after the Q lands. Curse goes wasted because the carry repositions before the team can follow up the stun."
---

## Overview

Reduced body for fixture (WPCP-004). Substitute for lee-sin-jungle (which lacks matchup_draft as of 2026-05-02).
