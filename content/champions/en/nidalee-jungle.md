---
title: "Nidalee Jungle Build & Guide — Patch 16.9"
slug: "nidalee-jungle"
language: "en"
patch: "16.9"
champion: "nidalee"
role: "jungle"
last_updated: "2026-05-06"
description: "Nidalee jungle guide for League of Legends Patch 16.9: clear path, AP burst build, key matchups, power spikes, common mistakes, and a closing tip on cougar combos."
quick_learn:
  champion_dd_id: "Nidalee"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Assassin / Mage"
  abilities:
    - key: "P"
      name: "Prowl"
      description: "Movement speed in brush, larger boost when chasing a champion. Hitting a champion or monster with Q or W marks them as Hunted, restoring Mana and refreshing your Aspect Of The Cougar cooldown."
      dd_spell_id: "Nidalee_Passive"
    - key: "Q"
      name: "Javelin Toss / Takedown"
      description: "Human form: long-range linear skillshot that scales damage with distance flown. Cougar form: a short-range melee execute that deals more damage the lower the target's HP."
      dd_spell_id: "JavelinToss"
    - key: "W"
      name: "Bushwhack / Pounce"
      description: "Human form: place an invisible trap that reveals and damages enemies. Cougar form: short directional leap that doubles in range against Hunted targets."
      dd_spell_id: "Bushwhack"
    - key: "E"
      name: "Primal Surge / Swipe"
      description: "Human form: targeted heal plus attack speed buff on you or an ally. Cougar form: cone-shape claw attack that hits everything in front of you."
      dd_spell_id: "PrimalSurge"
    - key: "R"
      name: "Aspect Of The Cougar"
      description: "Toggle between human form (ranged caster) and cougar form (melee skirmisher). Each form has its own Q/W/E. Free to recast — only the form switch costs the cooldown."
      dd_spell_id: "AspectOfTheCougar"
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "3100", name: "Lich Bane" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs assassins and divers (Zed, Talon, Master Yi, Wukong) — stasis breaks their combo timing on you mid-fight"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs heavy single-target magic CC (Lissandra R, Morgana Q, Sylas E) — eats the first hard CC instead of you"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap when 2+ enemies build Magic Resist (Mercury's Treads, Maw, Wit's End) — restores percent magic pen"
    - dd_id: "3041"
      name: "Mejai's Soulstealer"
      against: "when 2+ kills ahead by minute 10 — accelerates AP scaling for your snowball; drop it if you keep dying"
  base_combo: ["Q", "R", "W", "E", "Q"]
  win_condition: "Hit spears in fog and around objectives, then collapse with R-Pounce-Swipe execute on isolated targets. Snowball early invades into a 2-item lead before the enemy team builds Magic Resist or 25-minute scaling kicks in."
  weakness: "Squishy with no hard CC in cougar form. Once enemies build any Magic Resist or carry tenacity boots, your spears feel like pokes and your dive lacks lockdown. Falls off hard against tanky bruiser comps post-25 minutes."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
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
    primary_rationale: "Domination primary: Electrocute fires from the Q-auto-cougar-W chain, adding burst on every pick attempt. Sudden Impact triggers on Pounce, Sixth Sense reveals enemy wards for safer invades, Ultimate Hunter cuts R cooldown so cougar form is up nearly every skirmish."
    secondary_rationale: "Sorcery secondary: Manaflow Band sustains mana for repeated spear poke during early jungle clears. Transcendence pushes ability haste so cougar form abilities (W-E) refresh between trades."
    secondary_alternative: "Versus heavy poke or low-sustain enemy junglers, swap Sorcery to Inspiration with Magical Footwear (free Tier 2 boots around minute 12) and Cosmic Insight (extra Flash and Smite uptime around objective skirmishes)."
matchup_draft:
  pick_into:
    - examples: ["karthus", "kindred", "brand"]
      archetype: "Slow-clearing junglers without invade pressure"
      reason: "Nidalee's level 3 invade with two javelins plus Pounce burst kills clear-focused junglers before their item spike. They cannot contest vision or counter-invade her brush mobility."
    - examples: ["kha-zix", "rengar", "kayn"]
      archetype: "Solo-carry assassin junglers with no engage CC"
      reason: "Both teams scale on isolated picks (eliminating one enemy alone, away from the team). Nidalee wins because her 1500-range spear opens every neutral fight with a free HP lead before Pounce closes the gap."
    - examples: ["seraphine", "karma", "soraka"]
      archetype: "Long-range enchanters with no escape"
      reason: "Cross-map javelin snipes while they channel a poke ability. A clean hit at 60% HP starts a Pounce-Swipe-Q execute combo that delivers a kill before allies can rotate to peel."
  counterpicks:
    - examples: ["sejuani", "maokai", "rammus"]
      archetype: "Tank junglers with hard CC on point-and-click"
      reason: "Nidalee is squishy and her cougar form has zero crowd control. A single point-and-click stun or root chains into death; her R cancels on hard CC. She cannot kite their engage."
    - examples: ["wukong", "vi", "diana"]
      archetype: "Early-game gankers with point-and-click engage"
      reason: "They invade Nidalee's red side at level 3 and walk through Pounce range without needing to dodge. Without Flash up she dies; her reactive escape is too slow against unconditional charge engage."
    - examples: ["jax", "trundle", "warwick"]
      archetype: "Bruisers and duelists that scale into 2-3 items"
      reason: "Nidalee's damage is front-loaded in spears and Pounce burst. Past ~25 minutes a bruiser with sustain trades through her cougar combo and survives long enough to kill her in melee."
---

## Overview

Nidalee is an AP (ability power, magic damage) shapeshifter jungler who lives off the fence between long-range artillery and melee burst. In human form she throws **Javelin Toss (Q)** — a 1500-range spear that scales damage with distance flown — and lays **Bushwhack (W)** traps for vision and chip damage. In cougar form she becomes a melee skirmisher (close-range fighter built for skirmishes) whose **Takedown (Q)** executes low-HP targets and whose **Pounce (W)** doubles its leap range against marked enemies. The whole kit pivots around her **Prowl** passive, which gives a movement speed boost in brush (bushes) and refreshes **Aspect Of The Cougar (R)** every time you hit a champion or monster with Q or W. That refresh is what lets her swap forms repeatedly inside a single fight without paying the cooldown.

Her game plan is to bleed enemies from fog (zones outside team vision) with javelins, then commit to a one-shot dive when a target is below ~50% HP — usually around minute 10-14 once **Lich Bane** is online. She is a champion who wins by dictating skirmishes (eliminating one isolated enemy, away from the team), not by trading at full HP, so she snowballs (a lead that grows on itself: kill → gold → item → more kills) hard from early kills and falls off when fights become 5v5 brawls in lategame.

## Recommended Build

**Starting items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Hailblade is the ranged jungle starter (Nidalee is ranged in human form); it auto-evolves into the pet companion below once the Smite quest progresses ~minute 3-4.

**Core items (in order):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade from Hailblade. The AP-leaning pet companion adds a magic damage proc on auto-attack post-cast, which lines up with cougar Q-AA windows.
2. ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** — first item, your biggest single power spike. After casting any spell, your next basic attack deals bonus AP damage. This stacks with cougar Takedown's auto-reset to one-shot squishies.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration; the standard boots when nothing in the enemy comp forces you onto Mercury's Treads.
4. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — attack speed for cougar form's Swipe/AA chain plus on-hit magic damage, also feeds Lich Bane procs by lowering your AA cooldown.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — late-game AP multiplier; this is when your spear-from-fog becomes a one-tap on a 1500 HP carry without Magic Resist.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — into assassins and divers (Zed, Talon, Master Yi, Wukong). Stasis (a ~2.5s untargetable freeze) saves you mid-fight when you have to engage in cougar form and need to wait out their burst window.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — into heavy single-target magic CC (Lissandra R, Morgana Q, Sylas E). The shield eats the first hard CC instead of you.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — the moment 2+ enemies build any Magic Resist (![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) Mercury's Treads, ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) Maw of Malmortius, ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) Wit's End). Percent magic pen restores your spear damage.
- ![Mejai's Soulstealer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3041.png) **Mejai's Soulstealer** — when you are 2+ kills ahead by minute 10. Accelerates AP scaling on a snowball lead (a vantage that grows on itself: kill → gold → item → more kills); drop it if you start dying because losing stacks erases the value.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** is default. Swap to ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** when the enemy team has 3+ sources of crowd control (CC: stuns, roots, slows that lock you in place), since the tenacity stat shortens stuns and roots on you.

**Skill order:** Max **Q** first (your main damage source and only ranged tool), **E** second (cougar Swipe scales the cone damage with rank), **W** last. One point in **R** at levels 6, 11, and 16.

**Runes:** Primary **Domination** with **Electrocute**, **Sudden Impact**, **Sixth Sense**, **Ultimate Hunter**. Secondary **Sorcery** with **Manaflow Band** and **Transcendence**, or swap to **Inspiration** with **Magical Footwear** and **Cosmic Insight** versus poke-heavy enemy junglers.

## Key matchups

- **Lee Sin:** Even-to-favorable for Nidalee. He out-skirmishes you at level 3 if he lands a Sonic Wave, but his clear is slower than yours — invade his second buff at 3:00 if you have Prowl vision, throw a spear from brush, and Pounce in only if it lands. Avoid open-ground duels.
- **Vi:** Hard counter early. Her R is point-and-click (target-locked, no skillshot to dodge), so she ults you onto a wall and her team dives in. Path opposite side of the map until level 6, then track her with **Sixth Sense** wards before contesting any objective.
- **Master Yi:** Skill matchup. You out-poke him pre-6 with spears; he out-duels you at 2 items if ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** comes online. Kill him in cougar form below 60% HP before he Q-resets onto you, or kite (move back while attacking to keep distance) with R toggle if he commits.
- **Karthus:** Clear race that you win. His level 3 invade is non-existent, so chain his red side, throw a spear at his blue buff while he Defile-clears, and Pounce when his Wall is on cooldown. Easy snowball matchup.
- **Sejuani:** Avoid 1v1 entirely. Her Permafrost stuns you on the first auto in chain proc (the chain effect that triggers on her Frost Armor passive), and your cougar W lacks the disengage to escape post-Glacial Prison. Track her around vision and gank (jungler ambush) lanes she is not pressuring.

## Power spikes & win conditions

- **Level 3:** Full kit (Q+W+E). Your first invade window — scout the enemy red side from minute 2:30 with **Prowl** brush vision, throw a spear, then commit only if you start a HP advantage. A clean spear-pounce-swipe chain solo-kills a 100% HP jungler.
- **Level 6:** **Aspect Of The Cougar** unlocks the spear-into-execute combo. Pre-6 you set up kills with poke; from 6 onward any enemy below 50% HP in your range is dead.
- **![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) Lich Bane completion (~ minute 12-14):** Burst spike. Cougar Q resets your next basic attack and Lich Bane stacks the spell-into-AA proc — you one-shot squishies on a single rotation.
- **![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth completion (~ minute 22-24):** Sustained damage spike. Cougar form now duels bruisers into 2 items because Swipe-AA-Q chains every ~0.6 seconds with Nashor's attack speed.

## Common mistakes

- **Throwing spears at full-HP waves to "push prio" (gain lane priority).** Each spear costs 50-70 mana and gives the wave less than half its HP back. Save Q for picks; if the wave needs clearing, swap to cougar and Swipe through the casters (the back-row caster minions).
- **Pouncing in without a spear hit first.** Cougar W with no Hunted mark only travels short range and deals chip damage. Always land Q first to mark the target — that doubles your Pounce range and refreshes R if it connects.
- **Forgetting to swap back to human form for a follow-up spear.** R is free to recast: once cougar Q executes, toggle back, throw a human Q to slow runners, then re-engage cougar to clean up. Most novice Nidalees stay melee-form too long and let kills walk away.
- **Solo-invading without vision.** **Sixth Sense** reveals enemy wards (vision items placed in bushes), not the enemy themselves. Throw a spear from fog only when you have control of the brush you exit from; otherwise you eat a counter-engage from the enemy jungler plus their nearest laner.
- **Auto-pathing through the same brush in lategame.** Past minute 25 every brush near objectives has a Control Ward (a special ward that disables other wards in range). Vary your routes and clear pinks with cougar Swipe before committing to a fog spear.

## Advanced tip

Practice the **brush-Q double release**. Stand inside a brush so **Prowl** is at the 30% champion-tracking speed boost, throw the human Q as you walk out — the spear flies before the enemy sees you exit, so they have ~0.3 seconds less reaction time than a spear thrown from open ground. Then immediately R into cougar, Pounce on the marked target, Swipe, and Takedown to execute. Done correctly this entire chain takes under 1.5 seconds and is unreactable from full HP if the enemy is a squishy support or marksman with no Flash.
