---
title: "LeBlanc Mid Build & Guide — Patch 16.9"
slug: "leblanc-mid"
language: "en"
patch: "16.9"
champion: "leblanc"
role: "mid"
last_updated: "2026-05-05"
description: "LeBlanc mid lane guide for League of Legends Patch 16.9: AP burst assassin build, Sigil double-tap combos, key matchups, level 6 spike, mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Leblanc"
  difficulty: 4
  damage_type: "magic"
  champion_class: "AP Assassin / Burst Mage"
  abilities:
    - key: "P"
      name: "Mirror Image"
      description: "When LeBlanc drops below 40% HP she becomes invisible for 1 second and spawns a clone that mirrors her movement for up to 8 seconds. Defensive bait — not a damage tool."
      dd_spell_id: "Leblanc_Passive"
    - key: "Q"
      name: "Sigil of Malice"
      description: "Single-target spell that hits and marks the enemy for 3.5s. Damaging the marked target with another ability or auto-attack detonates the sigil for big bonus damage. Refunds mana and part of the cooldown if Q kills."
      dd_spell_id: "LeblancQ"
    - key: "W"
      name: "Distortion"
      description: "Dash to a target location and damage enemies on arrival. Within 4 seconds, recast to teleport back to the starting point. Engage with W1, escape with W2 — it is one of the safest jumps in the game when timed right."
      dd_spell_id: "LeblancW"
    - key: "E"
      name: "Ethereal Chains"
      description: "Skillshot chain that shackles the first enemy hit. If they stay shackled for 1.5 seconds (no flash, no dash, no minion break), they get rooted and take extra damage. Setup tool for the Q detonation."
      dd_spell_id: "LeblancE"
    - key: "R"
      name: "Mimic"
      description: "Re-cast the most recent basic ability with empowered damage. Lets you double-Q for full burst, double-W for safer engage, or double-E to lock a target. R does not reset basic cooldowns — it adds one extra cast."
      dd_spell_id: "LeblancR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
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
    - { dd_id: "4646", name: "Stormsurge" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3135", name: "Void Staff" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs divers and assassins (Zed, Diana, Talon, Akali) — the stasis gives you a safe window to wait out their burst before you Mimic-Q the kill"
    - dd_id: "3152"
      name: "Hextech Rocketbelt"
      against: "alternative first item when you want a third gap-closer beyond W — extra burst and a dash that stacks with W for surprise engages"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC that kills your engage (Annie stun, Lissandra R, Ahri charm, TF stun): the spell shield eats the first"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "swap for Void Staff into teams with 2+ MR items (Mercury's Treads + Banshee's, or any team buying MR vs your AP comp)"
  base_combo: ["W", "Q", "AA", "E", "R-Q"]
  win_condition: "Snowball mid lane with Q poke pre-6, then convert level 6 into a single-target kill on a squishy with W-Q-AA-R-Q. Roam side lanes whenever R is up; pick off isolated targets with W in, W out."
  weakness: "Squishy with no defenses outside W return. Falls off late: scaling mages with sustain (Kassadin, Cassiopeia) outscale you after minute 25. Lock her with hard CC before the burst and she dies instantly."
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
    primary_rationale: "Domination primary: Electrocute procs on every Q-AA-E sequence (3 hits in 3s), adding free burst on top of Sigil detonation. Sudden Impact gives magic pen after every W, and Ultimate Hunter shaves seconds off R so double-Q comes back faster between roams."
    secondary_rationale: "Sorcery secondary: Manaflow Band fixes LeBlanc's tight early mana budget so you can spam Q to poke without backing, and Transcendence pushes ability haste past 40% to lower W and R cooldowns for repeated short trades."
    secondary_alternative: "Vs lanes that out-poke you (Xerath, Vel'Koz) swap Sorcery secondary to Inspiration with Magical Footwear (free boots ~minute 12) + Cosmic Insight (extra summoner haste on Flash for tighter W-Flash combos)."
matchup_draft:
  pick_into:
    - examples: ["veigar", "annie", "twisted-fate"]
      archetype: "Immobile mages without a reliable dash"
      reason: "Without a movement ability they cannot escape your W-Q-AA detonation, and Veigar's cage is a circle you simply walk around with W."
    - examples: ["lux", "syndra"]
      archetype: "Squishy artillery mages with high cooldowns"
      reason: "If you survive the first Q poke, you all-in once their long-cooldown setup spell is down — Lux Q and Syndra E are 12-13 second windows you can punish."
    - examples: ["seraphine", "karma"]
      archetype: "Enchanter mids with no hard escape"
      reason: "Their shields delay but do not stop the second Q detonation; W in over the shield, Q again with R, and the kill confirms before sustain catches up."
  counterpicks:
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "Long-range artillery mages"
      reason: "Their abilities reach 1100-1500 units, well beyond your Q range of 700; they shove you out of XP range and you cannot all-in past their CC setups."
    - examples: ["kassadin", "cassiopeia"]
      archetype: "Late-game mids that out-scale you"
      reason: "Survive your level 6-9 spike and they overtake you on raw damage and mobility; Kassadin's R after 11 dodges your full W-Q-R window, Cassiopeia's grounded zone shuts down W return."
    - examples: ["lissandra", "galio"]
      archetype: "Mid laners with reliable lockdown"
      reason: "Lissandra Q-W or Galio W taunt land you in place during your jump; LeBlanc has no Cleanse-like tool and her HP melts the moment she stops moving."
---

## Overview

LeBlanc is an AP burst assassin: a champion built around dropping a single squishy target in 1-2 seconds (this short, high damage window is called "burst"). Every fight revolves around her passive, **Sigil of Malice (Q)** — Q lands a small hit and marks the target, then any second source of damage on that mark detonates the sigil for the real burst. The classic "double-tap" rhythm is Q to mark, then auto-attack or **E** to detonate.

The game plan: poke with Q in lane (its 6-second cooldown lets you spam it), explode a squishy at level 6 with W-Q-AA-R-Q, then roam (leave your lane to make a play in another lane) side lanes the moment R is up. LeBlanc is at her strongest from minute 8 to minute 25; after that, scaling mages and bruisers catch up. Always plan a way out — **Distortion (W)** can be used to engage *and* disengage, but only if you delay the recast for the escape, not just for the kill confirmation.

## Recommended Build

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 Health Potions. The ring fixes mana regen for Q spam in lane.

**Core items (in order):**

1. ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — burst spike with bonus on-hit magic damage and a movement-speed proc when you score a takedown. Lines up perfectly with the Q-AA-E combo: each detonation also triggers Stormsurge.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration (your spell damage ignores a slice of the enemy's Magic Resist). Direct damage upgrade against squishy targets.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — extra burst when the enemy is below ~40% HP (an HP-threshold passive: it activates only once the target drops under that line). Stacks with the Mimic Q burst to one-shot ADCs.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — late-game multiplier on all your AP. Your single highest-damage slot.
5. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — percent magic penetration when enemies start buying Magic Resist; keeps your damage scaling against tankier targets.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — vs divers and assassins (Zed, Diana, Talon, Akali). The stasis active makes you invulnerable for ~2.5 seconds, letting you wait out their burst window, then finish with the Mimic Q.
- ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** — alternative first item if you want an extra dash; stacks with W for a longer engage range out of fog of war (areas of the map without vision).
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — vs single-target magic CC (Annie stun, Lissandra R, Ahri charm, Twisted Fate stun). The spell shield blocks the first ability they cast on you.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — alternative to ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** when your team needs the heal aura more than raw burst.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** are default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** are correct into 2+ hard CC threats (Annie + Galio, Lissandra + Leona).

**Skill order:** Max **Q** first (main poke and damage), **W** second (lower cooldown on the engage/escape dash and bigger damage on impact), **E** last (the root duration scales with rank, but the cooldown matters less in burst). Take a point in **R** at levels 6, 11, 16.

**Runes:** Runes are passive bonuses you pick before the match starts; you take one primary tree (5 runes) and one secondary tree (2 runes). Primary **Domination** with **Electrocute** as the keystone — it procs (the rune effect activates) when you hit a target with three abilities or auto-attacks within 3 seconds, which Q-AA-E covers without effort. Add **Sudden Impact** (more magic penetration after a W dash), **Sixth Sense** for vision pressure when you roam, and **Ultimate Hunter** to lower R cooldown so double-Q comes back faster. Secondary **Sorcery** with **Manaflow Band** (mana sustain for Q spam) and **Transcendence** (ability haste — your abilities come back faster). Stat shards: two Adaptive Force + Health Scaling.

## Key matchups

- **Annie:** Pre-6 you out-trade her with Q poke. Post-6 she has stun ready (her passive flashes "Pyromania" on her portrait at 4 stacks) and one Tibbers chain kills you. Buy ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** as your third item if she snowballs (builds a lead from one small advantage into a much bigger one) early.
- **Twisted Fate:** A roaming race. He picks his lane to gank with **R**, but he loses the lane straight up — Q every time he steps to last-hit a minion and zone (control the space around) him off the wave. Track his **R** windups with vision wards (placeable items that give vision in an area) on river.
- **Kassadin:** Hard counter scaling. Pre-6 you can poke him with Q (he has no answer until level 6); after level 11 his **R** dashes faster than your W return and he out-trades you. Win the lane before minute 14 or call your jungler twice.
- **Xerath:** Out-ranges you. His **Q** reaches 1500 units (your Q is 700). Stay behind your minion wave, dodge his **Q** sideways, and only commit when he is at low mana — his Q costs 80-100 mana, so 5 missed Qs and he is dry.
- **Diana:** Even pre-6 (you out-poke her), losing post-6 if she lands her **R**. Buy ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** after ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** if she has 2+ kills; the stasis wastes her ulti combo.

## Power spikes & win conditions

- **Level 2 (Q + W):** First real spike. Q-AA-W2 is a poke-and-leave pattern: dash in with W, Q, auto-attack to detonate Sigil, recast W to escape. Use this to zone the enemy off the second wave.
- **Level 6:** Your first **R** is the largest single spike of the game. Mimic-Q on a marked target adds about 200-250 damage at level 6 with one item; against a squishy at 65% HP, the W-Q-AA-R-Q full combo confirms a kill before they Flash.
- **![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) Stormsurge completion (~ minute 11-13):** Burst threshold goes up by another 80-100 damage per ability hit. Roam to side lanes with W as soon as you push your wave under the enemy mid tower.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minute 23-26):** Multiplier on every other AP item. After this you one-shot any squishy through Banshee's Veil with W-Q-R-Q-E. Force fights around objectives (Drake, Baron) and look for back-line picks (eliminating the enemy carry isolated from their team).

## Common mistakes

- **W-ing in for the kill without saving W2.** Distortion's recast window is only 4 seconds. If you blow your full combo in one second and then sit there for 3 seconds in the middle of the enemy team, their support catches you and you die. Always plan: W in, deal damage, W out — the return is the difference between a clean pick and a throw (an avoidable death that gives the enemy momentum).
- **Detonating Sigil with Q again.** Q does not detonate its own mark — only a *second* source of damage detonates. Newer LeBlancs cast Q twice expecting big numbers; you need Q + auto-attack, or Q + E, or Q + R-Q. The pattern is mark-then-detonate, never mark-then-mark.
- **R-ing W as the first instinct.** Mimicked W is twice the dash range, but it lands you twice as deep in danger. Mimic Q on a marked target is almost always the kill button; mimic W is for chases and escapes only.
- **Pushing the lane mindlessly without roaming.** Once you hit ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** and **R**, your value is in side lanes. If you keep farming mid while a side lane is dying, you waste the champion. Push the wave in, ping "on my way", and use **W** through fog of war to pick off the side laner.
- **Building bruiser items into a squishy enemy team.** LeBlanc has no built-in sustain — items that trade burst for durability waste her kit. Stick to ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** + ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** unless the enemy team has 3+ tanks.

## Advanced tip

The "W-Flash" combo is LeBlanc's signature surprise engage. Cast **W** toward the target, and during the very short dash window press **Flash** — Flash carries you another 400 units past your W landing point, and the W damage applies at the new location. The total range of W + Flash beats most counter-CC setups (Annie's stun, Lux's binding, Galio's W taunt) because you cover the gap faster than they can react. Save **R** for the second cast: once you arrive at point-blank range, R-Q on the marked target finishes the kill before their support can peel (protect their carry). The trick is buffer: hit Flash at the very start of W's dash, not at the end, otherwise W cancels and the burst is wasted.
