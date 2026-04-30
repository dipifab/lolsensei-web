---
title: "Irelia Top Build & Guide — Patch 16.9"
slug: "irelia-top"
language: "en"
patch: "16.9"
champion: "irelia"
role: "top"
last_updated: "2026-04-29"
description: "Irelia top lane guide for League of Legends Patch 16.9: starter kit, Trinity Force core build, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Irelia"
  difficulty: 5
  damage_type: "mixed"
  champion_class: "Fighter / Skirmisher"
  abilities:
    - key: "P"
      name: "Ionian Fervor"
      description: "Hitting an enemy with a spell grants stacking Attack Speed (max 4). At full stacks Irelia also deals bonus on-hit magic damage."
      dd_spell_id: "Irelia_Passive"
    - key: "Q"
      name: "Bladesurge"
      description: "Dash that strikes a target and heals. Cooldown refreshes if the target dies or is Marked — this is the Q reset (chain dashes minion to minion)."
      dd_spell_id: "IreliaQ"
    - key: "W"
      name: "Defiant Dance"
      description: "Channel a charged strike that gains damage over time and reduces incoming physical and magic damage during the channel (channel = hold to power up)."
      dd_spell_id: "IreliaW"
    - key: "E"
      name: "Flawless Duet"
      description: "Place a blade, recast for a second blade. They fly toward each other, stunning and Marking everything in between. Main setup tool."
      dd_spell_id: "IreliaE"
    - key: "R"
      name: "Vanguard's Edge"
      description: "Long blade volley that Marks champions hit, then forms a wall around the first champion that damages and slows. Engage and zoning ult."
      dd_spell_id: "IreliaR"
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs heavy magic damage or chained CC (Lissandra, Ryze, Malphite — tenacity reduces stun and slow durations)"
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "vs kiters and ranged tops (Vayne, Gnar, Kennen) — dash + slow on cast helps you stick to mobile or ranged targets"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "vs armor stackers (Malphite, Ornn, Sion) — armor shred amplifies your repeated Q hits and team follow-up"
    - dd_id: "3074"
      name: "Ravenous Hydra"
      against: "vs splitpush comps where you need waveclear and 1v1 sustain (life steal on AOE = area-of-effect cleave + healing)"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "Land E for the stun, Q-reset through the wave to stick on a target, then trade with passive stacks up. Snowball lane (turn an early lead into a bigger lead) into mid-game skirmishes."
  weakness: "No reliable engage without E landing. Long-range poke and disengage shut you down before you reach the front line. Kited badly without Trinity Force or Stridebreaker."
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
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["malphite", "ornn", "sion"]
      archetype: "Slow immobile tanks without ranged poke"
      reason: "They cannot disengage from your E stun and have no answer to repeated Q resets through the wave; you out-trade them at every level once Conqueror stacks up."
    - examples: ["nasus", "garen", "darius"]
      archetype: "Melee juggernauts with no dash"
      reason: "Your E + Q gap-close and W damage reduction during their burst window let you win extended trades; they cannot kite you and cannot escape your stun."
    - examples: ["azir", "ryze"]
      archetype: "Mid-range mages forced top in flex picks"
      reason: "Short-range squishies (low HP, low defenses) without a dash get one-shotted once you hit Trinity Force and pass full passive stacks on them."
  counterpicks:
    - examples: ["vayne", "kennen", "gnar"]
      archetype: "Ranged or kiting tops"
      reason: "They auto-attack you outside E range, kite Q with their own dash or transformation, and punish every approach. You need Stridebreaker just to engage."
    - examples: ["fiora", "camille", "jax"]
      archetype: "Duelists with point-and-click counter or true damage"
      reason: "Fiora parries E or R, Camille E hookshot stuns through your dash, Jax E stuns and outscales your AS-based passive in extended fights."
    - examples: ["malzahar", "renekton"]
      archetype: "Lane bullies with anti-skirmisher tools"
      reason: "Malzahar suppress (point-and-click silence + lockdown) cancels your Q resets; Renekton fury empowered W stuns through your W charge and ends trades before you can scale."
---

## Overview

Irelia is a melee skirmisher (a fighter who wins through repeated short fights instead of one big burst). She lives or dies on her **Bladesurge (Q)** dashes. The Q has a long base cooldown but **resets** (cooldown refreshes instantly) every time she kills a minion or hits a target with the Mark debuff (a small icon Irelia's spells apply to enemies). A single skirmish can chain four or five dashes in a row. Her **Ionian Fervor** passive stacks Attack Speed up to four times when she lands spells (each spell hit adds one stack, up to four), and the fifth stack adds bonus damage and crowd-control reduction.

The top lane game plan is straightforward in description and demanding in execution. Use **Flawless Duet (E)** to land the stun (it requires a small setup window), follow with **Q** onto the stunned target, **W** to mitigate the return damage, and Q-reset through the wave to disengage or chase. After level 6, **Vanguard's Edge (R)** turns lane skirmishes into kills by adding zone control and a second Mark for free Q resets. Mid-game you roam through the wave with Q resets to find pickoffs (eliminating an isolated enemy outside the teamfight) and to rotate to objectives.

## Recommended Build

**Starting items:** Doran's Blade + 1 Health Potion. Take Doran's Shield only into ranged harass lanes (Kennen, Quinn, Vayne) where you need the regen.

**Core items (in order):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — your main spike. The Sheen passive (a built-in effect that triggers, called a "proc", on your next basic attack after a spell) combos with every Q dash; Ability Haste lowers Q cooldown; Attack Speed rounds out passive stacking.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — default boots into AD-heavy teams. Buy after Trinity if your lane is melee or AD ranged.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP, AD scaling, and a low-HP shield that turns your dive windows survivable.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — turns physical damage you take into a slow bleed across a few seconds (damage spread over time, not instant). Buy vs teams with two strong physical damage dealers (e.g. Yasuo + Caitlyn): you survive the burst window long enough to Q out.
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — guaranteed crit on first basic attack against a champion, plus heal. Slots in beautifully with Sheen + Q reset cycles.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — vs heavy magic damage or chained crowd control (Lissandra, Ryze, Malphite). Tenacity reduces stun and slow durations.
- ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — alt mythic vs kiters and ranged tops (Vayne, Gnar, Kennen). The active dash + slow gives you a non-Q gap-closer.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — vs armor stackers (Malphite, Ornn, Sion). Armor shred amplifies repeated Q hits and team follow-up.
- ![Ravenous Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3074.png) **Ravenous Hydra** — when you splitpush (push a side lane alone to force a response). AOE cleave plus life steal makes 1v1s and waveclear trivial.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** is the default. Switch to ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** when the enemy team has 2+ chained CC (crowd-control) sources.

**Skill order:** Max **Q** first (lower cooldown = more resets, higher damage), **E** second (stun setup), **W** last. R at levels 6, 11, 16.

**Runes:** Primary **Precision** with **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Secondary **Resolve** with **Bone Plating** and **Revitalize**. Take **Press the Attack** instead of Conqueror against burst lanes where short trades win the lane (e.g. Pantheon, Renekton early levels) — Press the Attack rewards 3 hits in 4 seconds with a damage spike instead of stacking over a long fight.

## Key matchups

- **Renekton:** Lane bully. Stay safe pre-3, dodge his W stun, and farm under tower. Power swings to you at level 6 once you have R; trade only after **W** can absorb his combo.
- **Fiora:** She parries your E stun and your R Mark with her **Riposte (W)**. Bait the parry by E-flickering one blade as fake, then commit with Q only when her W is on cooldown.
- **Malphite:** Free pre-6 lane: dodge his E slow and Q-reset through the wave to harass. After 6 he can flash-R engage onto your team — group with allies for objectives and don't extend (push past the river without backup) without vision wards.
- **Vayne:** Hard counter unless she misplays. She kites you (moves backward while attacking, keeping distance) with **Tumble (Q)** and chews your HP with **Silver Bolts (W)**. Build Stridebreaker first, freeze the wave near tower (hold the wave still close to your turret so she can't last-hit safely), and call for jungle ganks before level 6.
- **Camille:** Roughly even. Her **Hookshot (E)** stuns through your dash; save **Flawless Duet** to stun her mid-hookshot. Whoever lands their setup CC first wins the trade.

## Power spikes & win conditions

- **Level 3:** All three basic abilities online. You can land E stun + Q + auto-attack + W for a full passive-stacking trade window.
- **Level 6:** **Vanguard's Edge (R)** unlocks an all-in window (full kill commit). The R Mark gives you a free Q reset through the cage; ult onto a low-HP target after your jungler shows.
- **Trinity Force completion (~ minute 14-16):** Your damage per Q jumps thanks to Sheen procs. Wave control flips: you can shove and roam to objectives with Q resets through the side wave.
- **3 items (Sterak's online, ~ minute 24-28):** You become a teamfight skirmisher: dive the back line (the squishy carries standing behind their tanks) through Q resets, survive their burst with Sterak's shield + W, and clean up with R cage.

## Common mistakes

- **Spamming Q without setup.** Naked Q on a target with no Mark eats the long base cooldown for one dash. Always land **E** stun first or chain Q on a low-HP minion to keep the reset cycle alive.
- **Holding W too long during a stun.** **Defiant Dance** is a channel: you cannot move or attack while charging. Tap-cancel after the damage reduction window if the enemy disengages — don't sit channeling for the max-damage release if no one is in range.
- **Engaging through a parry.** Fiora **W**, Sivir spell shield, Olaf R, all eat your E stun for free. Bait those abilities first, then commit your CC.
- **Splitpushing pre-Trinity.** Without Trinity your damage on towers and waves is weak; you trade tempo for nothing. Hold the wave near tower until Trinity is online, then push the side lane.
- **Ulting one target with the team grouped.** **R** caged on a single squishy is wasted if their tank can body-block. Aim R to clip 2-3 enemies through a choke (a narrow jungle corridor) and let the cage zone the back line off the fight.

## Advanced tip

Practice the **R-flash** combo: cast **Vanguard's Edge** in one direction, then immediately **Flash** in another to redirect the blade volley. The blades follow Irelia's position, so a flash perpendicular to the cast line lets you cage a champion who thought they were safely outside R range. Use this as an engage tool when your team needs a pickoff (eliminating an isolated enemy) on a fleeing carry around dragon or baron pit.
