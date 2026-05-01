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

Amumu is the simplest engage jungler in the game: walk into the fog of war (the unseen part of the map outside ally vision), throw **Bandage Toss (Q)**, press **Curse of the Sad Mummy (R)**, and let the team unload. His kit has one job — start the fight on your terms — and he does it from a longer range than almost any other engage thanks to the 1100-range pull. **Cursed Touch (passive)** then multiplies your AP teammates by turning their spells into bonus true damage on every Cursed target.

The trade-off: **R** sits on a 100-150s cooldown and **Q** is your only setup tool. Miss them and you spend 90 seconds being kited, so this guide is built around picking *the right fight* instead of forcing every gank. Game plan: clear, hit level 6, then translate every R into a kill or objective for the next 25-30 minutes.

## Recommended Build

**Starting items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Hailblade is the jungle starter: it lets you damage neutral monsters fast and applies a brief slow on enemy champions. Refillable Potion is a healing item that refills for free at base, so you save gold on chip damage from the jungle camps (the neutral monster groups you farm).

**Core items (in order):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — your single most important item. The %max-HP burn passive doubles up with **W**, melting tanks who try to stand inside your aura. Buy this every game.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — default boots: they grant **tenacity** (a stat that shortens the duration of stuns and slows on you), which matters a lot for an engage champion who needs to keep walking after R lands. Swap to ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** if the enemy team has 3+ AD threats and no hard CC chain.
3. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — omnivamp (you heal off all damage you deal) plus a passive that converts part of your damage into true damage after 3 seconds in combat. Pairs perfectly with **W**'s sustained aura.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — late-game scaling multiplier. With Liandry's + Riftmaker already online, Deathcap pushes your **W** aura damage from "annoying" to "I cannot stand here for 2 seconds".

**Situational items:**

- ![Sunfire Aegis](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3068.png) **Sunfire Aegis** — vs melee bruiser-heavy teams (Sett, Darius, Olaf). The fire aura adds on top of **W** for double AOE damage and gives bonus armor.
- ![Abyssal Mask](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/8020.png) **Abyssal Mask** — when 3+ enemies deal magic damage. It reduces magic resist on enemies near you, so every spell your team lands on Cursed targets hits harder.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — vs burst comps that focus you the moment R lands (Zed, LeBlanc, Syndra). Stasis (a 2.5s window where you cannot be damaged or take actions) keeps you alive while your team finishes the fight.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — vs long-duration magic CC chains (Ahri charm into all-in, Lissandra R, Morgana Q). The spellshield (a one-use barrier that blocks the next spell aimed at you) eats the engage.

**Boots:** ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** is the default. Plated Steelcaps only into AD-heavy comps with no major CC chain.

**Skill order:** Max **E** first (clear speed and damage during sustained fights), **Q** second (gank threat and lower stun cooldown), **W** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Resolve** with **Aftershock** (gives you bonus armor and magic resist for 2.5 seconds the moment you hit a Q stun or R — the engage rune of the game), **Font of Life** (your CC marks enemies and your team heals when they hit them), **Conditioning** (extra resists after minute 12), **Revitalize** (boosts shields and heals on you). Secondary **Sorcery** with **Manaflow Band** (mana sustain so you can leave **W** toggled on through clears) and **Transcendence** (extra ability haste — a stat that lowers all your spell cooldowns).

## Key matchups

- **Lee Sin / Elise:** Early-game junglers who invade your weak side. Track them with **vision wards** (placed items that reveal a small map area for ~90 seconds) on your raptors and red buff (camps in your own jungle). Avoid 1v1 invades pre-3; do a full clear (kill every camp once), then head to Scuttle (the river crab that grants vision when killed) so they waste tempo looking for you.
- **Master Yi / Karthus:** Scaling junglers. Force fights and objectives (Drake on bot side, Rift Herald on top side, Baron later) before minute 18 — you scale fine, but they scale better. Every R you press should aim at their carry (the marksman or burst mage who deals most of the team's damage from the back), not their frontline tank, so the enemy team has nothing to peel for.
- **Hecarim / Volibear:** Mirror engage, faster clear. Don't try to outclear them; play around your laners and look to gank a lane with priority (priority = the lane that's pushing toward the enemy, so the laner can leave for a few seconds without losing minions) by minute 4.
- **Maokai / Sejuani:** Tank junglers with their own AOE engage. Whoever lands their R first wins the teamfight. Save **Q** for after they commit so your stun chains on top of their stun (the enemy stays locked for the full duration of both stuns added together).
- **Kha'Zix / Rengar:** Assassins who burst your back line. Body-block for your carries (literally stand between the assassin and your damage dealer to soak the hits) instead of standing in front of the enemy — your **W** aura plus **E** Tantrum punishes them for committing on a target you're standing next to.

## Power spikes & win conditions

- **Level 3:** With **E**, **W**, and **Q** all unlocked, your first gank (a surprise visit from the jungler to a lane to score a kill) threat is real. Look at the lane with the lowest enemy HP and the strongest follow-up CC; one Q-W-AA-E rotation (AA = auto-attack) under a snowballing (a vantage that grows over time: kill → gold → item → more kill) ally is usually a kill.
- **Level 6:** First **Curse of the Sad Mummy**. This is the single biggest power swing in the game for Amumu. Find a fight within 30 seconds of hitting 6 — gank a lane, contest Scuttle, or set up the first Drake fight.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment completion (~ minute 12-14):** Your **W** goes from poke to real threat. Fighting for Drake or Rift Herald with **W** ticking on a contest target wins the objective without ever pressing **R**.
- **3-item spike (~ minute 22-26):** Liandry's + Riftmaker + Deathcap online. R cooldown is short enough that you can teamfight twice per Baron timer. Force every objective; this is your peak.

## Common mistakes

- **Throwing Q on cooldown without setup.** A naked Q wastes your only engage tool. Hold Q until the enemy is already slowed, rooted (can't move), or hooked by an ally — e.g. Morgana Q hits → your Q on top is guaranteed. Q used as a scouting tool means you have nothing when the real fight comes.
- **Pressing R as soon as you reach the fight.** R is AOE *centered on Amumu*. If you press it 200 units short, you stun nobody and waste the 100-150s cooldown. Walk in until you are inside their back line, *then* R.
- **Leaving W toggled on out of combat.** **Despair** drains 8 mana per second while on, even with no enemies near. You will hit minute 8 with no mana for a Q stun on a clear gank. Toggle it off the second the fight or clear ends.
- **Ignoring Tantrum's cooldown reset.** **E**'s passive cuts its own cooldown every time you take a basic attack. In a long fight against melee enemies you can press **E** every 1-2 seconds — stand in their attack range and keep spamming it.
- **R-ing onto a tank instead of the carry.** R is a teamfight ability. Yes the tank is closer, yes you'll land it on them — but your team wants the stun on the carry. Save **Flash** (the Summoner Spell every champion picks that lets you teleport a short distance once every ~5 minutes) to flank around the fight (enter from a side or behind, not from the front) and engage on the back line, not on the front tank.

## Advanced tip

Practice the **Flash + Q** combo on a target dummy. The trick: cast Q first, *then* Flash mid-cast in the direction of the target. Q's pull animation re-snaps to your post-Flash position, giving you an instant 425-unit shorter projectile that is almost impossible to dodge. This turns Q from a 1100-range skillshot into a point-blank guaranteed stun, and is the play that separates Amumu mains from one-tricks: it lets you flank into a back line through fog and connect Q on a moving target who never saw the engage coming.
