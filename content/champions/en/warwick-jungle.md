---
title: "Warwick Jungle Build & Guide — Patch 16.9"
slug: "warwick-jungle"
language: "en"
patch: "16.9"
champion: "warwick"
role: "jungle"
last_updated: "2026-04-29"
description: "Warwick jungle guide for LoL Patch 16.9: sustain clear path, AD bruiser build, gank patterns with Q + E, key matchups, power spikes, common beginner mistakes."
quick_learn:
  champion_dd_id: "Warwick"
  difficulty: 2
  damage_type: "mixed"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Eternal Hunger"
      description: "Auto-attacks deal bonus magic damage. Below 50% HP Warwick heals for the same amount; below 25% HP that healing triples."
      dd_spell_id: "Warwick_Passive"
    - key: "Q"
      name: "Jaws of the Beast"
      description: "Tap to lunge and bite for max-HP magic damage and heal. Hold to leap behind the target and stay locked while channeling."
      dd_spell_id: "WarwickQ"
    - key: "W"
      name: "Blood Hunt"
      description: "Passive: extra Move Speed and Attack Speed against enemies under 50% HP, tripled below 25%. Active: sense all enemies briefly."
      dd_spell_id: "WarwickW"
    - key: "E"
      name: "Primal Howl"
      description: "Damage reduction for 2.5s, then a Fear (forces enemies to run away) on nearby enemies. Recast to fear earlier."
      dd_spell_id: "WarwickE"
    - key: "R"
      name: "Infinite Duress"
      description: "Long leap that scales with Move Speed; Suppresses (full lock, cannot use anything) the first champion hit for 1.5s."
      dd_spell_id: "WarwickR"
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "3053", name: "Sterak's Gage" }
  situational_items:
    - dd_id: "6610"
      name: "Sundered Sky"
      against: "alternative first item vs heavy bruiser/tank top sides — guaranteed crit on first hit syncs perfectly with Q burst"
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "vs kite-heavy comps (Caitlyn, Vayne, Janna): the active slow + Move Speed dash makes it impossible for them to peel you off"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs heavy crowd control (CC: stuns, fears, charms) — Leona, Lux, Ahri stacking. Tenacity reduces lock duration"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "vs double-AD comps (two strong physical damage dealers, e.g. Yasuo + Caitlyn): turns AD burst into a slow bleed (delayed damage)"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "vs armor-stacking front lines (Malphite, Ornn, Rammus): the armor-shred passive lets your team chunk the tank too"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Get a clean clear by 3:15, gank twice before 6:00 using Q + E, then snowball lead (early advantage that grows over time) into team fights where R locks down their carry."
  weakness: "Punished by champions who out-range your gap close (Caitlyn, Lillia) or hard-CC your R mid-leap (Janna tornado, Alistar headbutt). No early waveclear, weak in long sieges."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["yasuo", "yone", "tryndamere"]
      archetype: "Mobile bruisers without hard CC on themselves"
      reason: "Warwick's R (Infinite Duress) is a Suppress — the full lock that ignores Tenacity (CC reduction) and cannot be cleansed by QSS. They have no way to disengage once leapt on."
    - examples: ["kayn", "shaco", "evelynn"]
      archetype: "Squishy snowball junglers"
      reason: "Warwick's clear is one of the strongest pre-form in the game thanks to passive sustain (Q heal + Eternal Hunger): he meets them on level 3 with full HP while they had to back."
    - examples: ["zed", "akali", "talon"]
      archetype: "Mid lane assassins ganking sides"
      reason: "Their kit is built for picking isolated targets, but R suppress catches them mid-dash chain. One leap = one kill, and W's HP-threshold passive (under 50%) speeds you up exactly when they try to escape."
  counterpicks:
    - examples: ["lillia", "kindred", "graves"]
      archetype: "Ranged junglers that out-trade in the jungle"
      reason: "They poke you while you clear and kite (move backward while attacking) your gap close. Warwick has no ranged tools — Q range is 365, basically melee."
    - examples: ["udyr", "olaf", "nocturne"]
      archetype: "Other early-clear duelists with cleanse or unstoppable"
      reason: "Olaf R cleanses your suppress mid-leap. Nocturne R darkens vision so your jungle invade fails. Udyr matches your sustain and out-DPSes you in a stand-still 1v1."
    - examples: ["janna", "alistar", "thresh"]
      archetype: "Engage/disengage supports with point-and-click peel"
      reason: "Janna tornado interrupts R mid-channel, Alistar headbutt knocks you out of the suppression frame, Thresh hook pulls the target away. Your ult is loud (audio cue) and easy to react to."
---

## Overview

Warwick is a beginner-friendly diver jungler (a champion who jumps onto the enemy back line) built around two simple ideas: heal whenever you take damage, and lock a single target down with the longest single-target Suppress in the game. **Eternal Hunger** auto-restores HP under 50% and triples under 25%, so unlike most early junglers you do not need to back after the first clear. **Q (Jaws of the Beast)** is a short-range gap close that bites and heals; **E (Primal Howl)** gives you damage reduction (DR: a percentage of incoming damage is ignored); **R (Infinite Duress)** is a global-distance leap that scales with Move Speed and suppresses (full lock) the first champion hit for 1.5 seconds.

The game plan: full-clear with passive sustain (no health potions wasted), gank twice between minutes 4 and 6 using **Q** + **E** as a two-piece gap close, snowball (build an advantage that compounds: kill > gold > item > more kills) one lane, then use **R** in team fights to remove their carry from the equation. You are the cheap, reliable jungler that wins games by being annoying and tanky — not by 1v9 outplays.

## Recommended Build

**Starting items:** Hailblade + Refillable Potion. Pick ![Mosstomper Seedling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1103.png) **Mosstomper Seedling** as jungle pet for an extra shield on objective fights, or ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** if you want faster pathing between camps.

**Core items (in order):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — best all-round bruiser item: AD, AS, HP, Move Speed, ability haste. The Spellblade passive (a stronger auto after using a spell) syncs with **Q** for huge bite damage.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — default boots vs auto-attack-heavy enemy teams.
3. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — bleed conversion (incoming AD damage spread over 2-3 seconds instead of all at once), free heal on takedown. Critical for diving carries and surviving.
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — bonus HP shield when you fall under 30% — pairs beautifully with **Eternal Hunger** triple-heal.

**Situational items:**

- ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — alternative first item into bruiser/tank top sides. Guaranteed crit on the first hit after a spell, paired with a heal — perfect on **Q**.
- ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — into kite-heavy comps (Caitlyn, Vayne with a Janna). The active is a Move Speed dash + AOE slow (area of effect: hits everyone in a circle, not a single target).
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — boots into heavy CC (stuns, fears, charms). Tenacity reduces how long their CC locks you down.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — into armor stackers (Malphite, Ornn). The armor-shred passive helps your whole team kill the tank.

**Boots:** Plated Steelcaps default; Mercury's Treads if their team has 3+ sources of CC.

**Skill order:** Max **Q** first (lower cooldown = more burst and more healing), **W** second (Move Speed + Attack Speed under 50% HP), **E** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Precision** with **Press the Attack** (third hit on the same target deals bonus damage and amps further damage), **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secondary **Resolve** with **Second Wind** and **Overgrowth**. Stat shards: Attack Speed / Adaptive Force / Health Scaling.

## Key matchups

- **Lillia:** Hardest matchup. She kites your gap close with Q's long range and her **R** sleep stops your **R** mid-channel if she lands it. Do not invade level 2 — full clear instead and look for ganks where you can use terrain to close the gap.
- **Kayn:** Strong for you pre-6. His clear is slower than yours and his low HP triggers your **W** sense from across the map. Threaten his red-side jungle around minute 4-5 before he transforms.
- **Lee Sin:** Skill matchup. His **Q** sonic wave will track you in fog of war. Stay above 50% HP so he cannot use **W** safe ward-hop into a long Q. Bait his **R** before committing to **R** yourself.
- **Caitlyn (gank target):** Long auto-attack range plus a snare trap. Gank from tri-bush, not from river. Use **E** damage reduction the moment she places the trap and **R** her if she Flashes — your R follows the Flash dash.
- **Janna (gank target):** Hard counterpick to your **R**. Her tornado interrupts the leap and her **R** AOE knockback (knocks everyone away in a circle) breaks your suppress. Gank when Janna's **Q** is on cooldown — track her wave-clear casts.

## Power spikes & win conditions

- **Level 3 (Q + W + E):** First gank window. **Q** + auto + **E** is enough to chunk a squishy laner; **W** active reveals their position if they hide in a brush.
- **Level 6 (R unlocked):** Game-changing spike. **R** has 25000 range internally — effectively half the map at full Move Speed. Look for cross-jungle ult ganks on side lanes.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completion (~ minute 12-14):** Spellblade auto after **Q** doubles your gank damage. From here, every successful gank converts to a kill, not just a flash burn.
- **Level 11 + ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) Death's Dance (~ minute 18-20):** You become almost impossible to kill in 1v1s. Take dragon, take Rift Herald, force objective fights — the enemy jungler cannot duel you.

## Common mistakes

- **Pressing R the moment it is up.** **R** is a single-target suppress: missing it on a tank wastes 90 seconds of cooldown. Wait for the carry to step forward, or Flash + R if you have it.
- **Ignoring W active out of combat.** The active reveals all nearby enemies for 8 seconds. Use it before invading their jungle, before contesting Scuttle, and around objective walls — vision wins fights for free.
- **Full-clearing without ganking.** Your clear is fast and healthy, but if you never leave the jungle the enemy laners scale untouched. Force at least one gank between minute 4 and 6, even if it only burns Flash.
- **Diving towers with no E.** Tower dives (going under tower to kill an enemy despite tower shots) require **E** active for damage reduction. Without it, the tower deletes you in 3 shots — your passive heal cannot keep up.
- **Using Q on cooldown for poke.** **Q** is your gap close and your in-combat heal. If you bite a minion outside a fight you have no follow-up tool when the gank actually happens.

## Advanced tip

Use **R** offensively as a long-distance map traversal tool, not just as a finisher. If a side lane is being pressured 2v1, ult from your jungle: the leap covers half the map at full Move Speed (about 2500 units). Even if you miss the initial suppress because the target dashes, you still arrive at the fight with full HP thanks to **Eternal Hunger**, while the enemy assumes you are still farming on the other side. This single play wins more games than chasing 1v1 kills.
