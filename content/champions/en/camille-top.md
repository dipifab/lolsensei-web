---
title: "Camille Top Build & Guide — Patch 16.9"
slug: "camille-top"
language: "en"
patch: "16.9"
champion: "camille"
role: "top"
last_updated: "2026-05-01"
description: "Camille top lane guide for League of Legends Patch 16.9: starter kit, core fighter build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Camille"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Adaptive Defenses"
      description: "Basic attacks on champions grant a shield equal to a percentage of Camille's max HP, matching the target's damage type (physical or magic)."
      dd_spell_id: "Camille_Passive"
    - key: "Q"
      name: "Precision Protocol"
      description: "Empowered next basic attack with bonus damage and move speed. Recast within a few seconds for a second hit; waiting between the two casts increases bonus damage and adds true damage."
      dd_spell_id: "CamilleQ"
    - key: "W"
      name: "Tactical Sweep"
      description: "Cone blast after a brief delay. The outer half slows enemies, deals extra damage, and heals Camille based on missing HP."
      dd_spell_id: "CamilleW"
    - key: "E"
      name: "Hookshot"
      description: "Dashes to a wall, then leaps off knocking up champions on landing. Main engage and disengage tool — requires a wall in range."
      dd_spell_id: "CamilleE"
    - key: "R"
      name: "The Hextech Ultimatum"
      description: "Dashes to a target champion and traps them inside an arena ring. Allies and the target cannot leave or enter; auto-attacks on the target deal bonus magic damage."
      dd_spell_id: "CamilleR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
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
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
  situational_items:
    - dd_id: "3078"
      name: "Trinity Force"
      against: "swap as first item into duelist matchups (Fiora, Jax, Irelia) — Spellblade resets sustain Q-AA-Q2 trades better than Stridebreaker"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs heavy magic burst (Vladimir, Rumble, Cassiopeia): magic shield under 50% HP lets you survive the first cooldown rotation"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "vs multiple armor stackers (enemy front line builds Plated Steelcaps + Randuin's): armor shred amplifies physical damage from your team too"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "when ahead and you want to splitpush a side lane (push solo to force a response): tower shred and bigger HP near no allies"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap boots vs heavy AP or 3+ hard CC sources on the enemy team (stuns, roots, taunts that stop your E mid-flight)"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "vs a fed AD assassin (Zed, Talon, Kha'Zix) snowballing — second life lets you finish the R combo even if you die mid-engage"
  base_combo: ["E", "Q1", "AA", "W", "Q2", "R"]
  win_condition: "Engage off a wall with E, lock the priority carry inside R, then burst them with Q1-AA-W-Q2 before peel arrives. In side lanes, win 1v1s with Q resets and the W heal."
  weakness: "Open lanes without walls neutralize E. Long R cooldown leaves big windows where she is just a beefy auto-attacker. Hard CC interrupts E mid-flight and the W charge."
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
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision primary: Conqueror stacks fast on W slow, Q1, AA, Q2 and rewards the long fights Camille forces with R. Triumph refunds HP on takedowns, Legend: Alacrity speeds Q resets and R auto-attacks, Coup de Grace lines up with delayed Q2 true damage below 40% HP."
    secondary_rationale: "Resolve secondary: Bone Plating dampens early lane all-ins from Darius / Renekton / Pantheon, Overgrowth scales the HP pool that her passive shield is calculated from."
    secondary_alternative: "Vs heavy ranged poke top (Quinn, Teemo, Vayne, Gnar) swap Resolve to Inspiration with Magical Footwear (free boots around minute 12) and Cosmic Insight (more Flash and R uptime to commit on cooldown windows)."
matchup_draft:
  pick_into:
    - examples: ["garen", "darius", "nasus"]
      archetype: "Immobile melee bruisers"
      reason: "E + R lock them in melee range with no answer. Q resets and W slow let Camille kite (move backward while attacking) inside the R ring while their stacks or kit timers expire."
    - examples: ["vladimir", "rumble"]
      archetype: "Squishy mages played top"
      reason: "Once R lands they cannot pool, dash, or run out of the arena. Q2 true damage chunks them past their shield and heal sustain."
    - examples: ["sion", "chogath"]
      archetype: "Late-scaling tanks"
      reason: "Q2 true damage and Sundered Sky burst chunk huge HP pools. R prevents them from running back to their team for peel during a side-lane fight."
  counterpicks:
    - examples: ["quinn", "teemo", "vayne", "gnar"]
      archetype: "Ranged tops with kite tools"
      reason: "They poke (chip damage at distance) without committing while Camille has no ranged answer. E needs a wall they can simply walk away from."
    - examples: ["malphite", "poppy", "maokai"]
      archetype: "Hard-CC frontline tanks"
      reason: "Their crowd control interrupts E mid-flight, the W charge, and the R lock-on dash. Camille loses every all-in (full commit fight to the kill) where the stun lands first."
    - examples: ["renekton", "riven", "pantheon"]
      archetype: "Strong early melee all-ins"
      reason: "They burst (front-load damage in 1-2 seconds) faster than Camille can set up E + W and outscale her trade pattern before level 3."
---

## Overview

Camille is a melee fighter / diver (champion who jumps into the enemy backline to kill a priority target): she dashes off walls to lock down a single carry (the high-damage backline target — usually an ADC, the bot-lane marksman, or the mid-laner) and turns the fight into a 1v1 inside her **R** ring. Her kit rewards extended trades (back-and-forth exchanges of damage) because **Q** is a two-cast empowered basic attack (also written **AA**, an auto-attack) with delayed true damage (damage that ignores armor and magic resist entirely), **W** heals when the outer half hits a champion, and her passive shield reduces incoming damage of the matching type (physical or magic) for every AA. She is mostly physical (AD = Attack Damage) but **R** adds bonus magic damage (AP = Ability Power scaling), so the damage_type is mixed.

Her game plan in one sentence: wait for **R**, walk to a side lane or river bush, dash off a wall onto the priority target, and burst them down with **Q1 → AA → W (outer half) → Q2** while the rest of the fight is locked outside the arena. Off cooldown, she farms safely behind minions and avoids open lanes where her **E** has no wall to grip.

## Recommended Build

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Swap Doran's Blade for ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** (more HP and incoming-damage block, no AD) only into ranged poke matchups (Quinn, Teemo, Vayne).

**Core items (in order):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — first-item rush. Active dash + slow chains into your **W** outer half and gives waveclear that a vanilla Camille kit is missing.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — vs AD-heavy lanes (lots of physical-damage champions) and AD jungle. The basic-attack reduction is critical because most threats to Camille are physical bruisers (mid-range fighters with high HP and sustained damage).
3. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — burst spike. The first basic attack on a champion crits and heals; lines up with **Q1** to open every all-in (a full-commit fight to the kill).
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — survivability spike. Tenacity (shorter duration on stuns, slows, and other crowd control = CC) plus a shield triggered under low HP — Camille often dives the back line (jumps into the enemies who are trying to peel = protect their carry).
5. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — anti-burst (chunks of damage compressed into 1-2 seconds). Bleed mechanic (post-hit damage spread over several seconds) gives you time to react instead of getting one-shot.

**Situational items:**

- ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — swap as first item into duelist matchups (Fiora, Jax, Irelia). Spellblade (a passive: after casting an ability, your next basic attack deals bonus damage and resets the AA timer) lets you sustain a **Q1 → AA → Q2** trade better than Stridebreaker.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — vs heavy magic burst (Vladimir, Rumble, Cassiopeia, AP Kayle).
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — vs enemy team stacking armor (multiple champions buy armor items like Plated Steelcaps and Randuin's; "stack" = accumulate the same kind of stat across several items). Armor shred = each hit removes a chunk of the target's armor for a few seconds, so your team's physical damage hurts more.
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — when ahead and splitpushing (pushing a side lane alone to force the enemy to respond). Tower shred = bonus damage to towers; the item also gives bigger stats when no allies are nearby.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — boot swap vs heavy AP or 3+ hard CC sources.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — vs a fed AD assassin (Zed, Talon, Kha'Zix) snowballing (early lead that grows kill-by-kill).

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** is default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** vs heavy AP / CC.

**Skill order:** Max **Q** first (each level = more damage, shorter CD = cooldown), **E** second, **W** last. **R** at levels 6, 11, 16. Levels 1-3: **W → E → Q** — sustain first, then engage, then damage steroid. "Q reset" below = **Q1 → AA → Q2 → AA**: each Q cast resets your AA timer so you fire an extra basic attack right after.

**Runes:** Primary **Precision** with **Conqueror**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secondary **Resolve** with **Bone Plating** and **Overgrowth**. Stat shards (the three small bonus stats at the bottom of the rune page): Attack Speed, Adaptive Force, Health Scaling.

## Key matchups

- **Darius:** Tank HP early (just absorb the damage and stay even on CS). He outduels you in a straight pre-3 trade — wait until level 3 with **Q** ready. Once ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** is online, dance with **W** slow + **Q** resets (his Hemorrhage passive stacks bleeds on you up to 5; getting a kill on Darius would refresh his ult stacks, so do not feed him).
- **Fiora:** Mirror duelist matchup. Trade in straight lines so she cannot rotate around you for the perpendicular Vital (her passive marks one of your sides — hitting that side does true damage and heals her). At level 6 her **R** and your **R** cancel each other out — positioning decides who lands the engage first.
- **Renekton:** Loses the lane pre-3 and loses again at his level 2 spike (W + Q). Hold **E** for his all-in. Power flips at 6 if he has not snowballed: your **R** drags him outside the range where he can build Fury (his rage resource).
- **Jax:** Bad matchup post-6. His E counter-strikes your **Q2** and **W** windup (the brief delay before the ability lands, where it can be canceled). Buy ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** first, never **E** in melee unless his counter strike is on cooldown.
- **Quinn / Teemo:** Ranged tops. Lose lane brutally early. Start ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** instead of ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade**, freeze the wave (let enemy minions outnumber yours so the wave stays parked near your tower) and never push without **Q + E** up. Wait for ganks (jungler arrives mid-lane to make it a 2v1) to chip the enemy turret plates (the 5 bonus pieces of gold sitting on every outer turret in the first 14 minutes).

## Power spikes & win conditions

- **Level 2 (W + E):** First all-in window. **W** slow into **AA** into **E** knock-up (brief airborne stun on landing) sets up a full trade with your passive shield active twice.
- **Level 6 (R):** Your engage becomes uncounterable for one cooldown rotation. Combine **E** off a wall with **R** to lock anyone in melee range; warn your jungler before the fight so they can join inside the ring.
- **![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) Stridebreaker completion (~ minute 13-14):** Waveclear unlocks. Your trade pattern becomes consistent: active slow → **W** outer half → **Q1** → **AA** → **Q2** chunks for ~half their HP bar.
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky completion (~ minute 20-24):** Heal-on-first-hit lets you commit on side-lane skirmishes (small 1v1 or 2v2 fights) much more aggressively. This is the spike where you start splitpushing for objectives.

## Common mistakes

- **Wasting E for poke (chip damage at distance) in lane.** **E** is your only escape if the enemy jungler ganks. Throw it for engage commits or to clear ganks, not for 50 chip damage. Without **E**, a Camille without Flash dies to any 2-man dive (a coordinated kill attempt under your tower).
- **Standing in front of the W cone.** The inner half of **W** does poor damage and no slow / heal — the entire payoff is the outer half. Always reposition mid-cast so the enemy is in the outer ring, not glued to you.
- **Engaging without R when the target has hard CC up.** **R** is your "no Flash escape" tool — once locked, the target cannot Flash out of the ring. A Camille without **R** who dives into a peel-ready (allies ready to protect their carry) team just dies in stun chains (one CC after another with no gap to react).
- **Slamming Q1 → Q2 back-to-back.** The longer you wait between **Q1** and **Q2** (up to ~2 seconds), the bigger the bonus damage and the percent true damage portion of **Q2**. Squeeze an **AA** + **W** between them — that is where most of your burst (front-loaded damage in 1-2 seconds) actually comes from.

## Advanced tip

Practice the **Flash → E** redirect: if no usable wall is in range, use **Flash** (the summoner spell on D or F that short-blinks you ~400 units) mid-**E** to teleport onto a wall and redirect the dash. This converts Camille from "needs walls" into "engages anywhere" for the cost of one summoner spell. The combo is most useful in objective pits (the walled arenas around Drake and Baron) and open mid-river fights where the only walls are 600+ units away — Flash fills the gap so you still land the **E** knock-up (brief airborne stun) on the priority target.
