---
title: "Graves Jungle Build & Guide — Patch 16.9"
slug: "graves-jungle"
language: "en"
patch: "16.9"
champion: "graves"
role: "jungle"
last_updated: "2026-04-29"
description: "Graves jungle guide for League of Legends Patch 16.9: starter kit, lethality build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Graves"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Marksman / Skirmisher Jungle"
  abilities:
    - key: "P"
      name: "New Destiny"
      description: "Shotgun reload mechanic. Each shot fires 4 cone-shaped bullets that don't pierce minions; multiple pellets on a non-champion knock it back."
      dd_spell_id: "Graves_Passive"
    - key: "Q"
      name: "End of the Line"
      description: "Linear shell that detonates after 2s, or instantly on terrain — bounces off walls. Main jungle clear and angle-shot tool."
      dd_spell_id: "GravesQLineSpell"
    - key: "W"
      name: "Smoke Screen"
      description: "Lobs a smoke cloud that blocks vision and slows enemies on the initial impact. Disengage, deny wards, or fog up gank paths."
      dd_spell_id: "GravesSmokeGrenade"
    - key: "E"
      name: "Quickdraw"
      description: "Short forward dash with an armor buff that stacks toward a champion. Auto-attacks lower its cooldown and refresh the buff. Holds 2 charges."
      dd_spell_id: "GravesMove"
    - key: "R"
      name: "Collateral Damage"
      description: "Long-range explosive shot — hits the first champion then bursts into a cone behind them. Burst spike at levels 6/11/16."
      dd_spell_id: "GravesChargeShot"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3142", name: "Youmuu's Ghostblade" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "3814"
      name: "Edge of Night"
      against: "vs single-target hard CC (Malzahar R, Skarner R, Warwick R) — the spell shield blocks the lock-on"
    - dd_id: "6676"
      name: "The Collector"
      against: "when you are ahead and the enemy team has no early armor stackers — execute below 5% HP closes leads"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs heavy AP burst (Diana, Syndra, Lux mid) — the lifeline shield turns one-shots into survivable trades"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "vs squads with two strong physical damage dealers (e.g. Yasuo + Caitlyn) — the bleed spreads damage so you don't get one-shot"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs 3+ hard CC champions (e.g. Leona + Lissandra + Sejuani) — tenacity shortens stuns and roots"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Snowball lethality through invades and ganks before minute 14. Once Eclipse is up, contest every objective — your shotgun melts a squishy in two volleys and E refunds the trade window."
  weakness: "Mana-hungry early. Your shotgun reload window punishes greedy positioning, and you melt under hard CC chains because you have no built-in safety beyond E's armor buff."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 9923
      name: "Hail of Blades"
      icon_path: "perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
---

## Overview

Graves is a marksman that lives in the jungle, not in the bot lane. His shotgun-style auto-attacks and the armor buff baked into **Quickdraw (E)** let him fight tanks and brawlers head-on, while still bursting squishies down with lethality. The whole kit is built around tempo — clear fast, invade on cooldown, and trade your jungle priority for kills before the enemy carries scale.

His game plan is simple: in the first 8 minutes you are the strongest dueller on the map, so use that. Power-farm a clean clear, look at the map, and walk into whichever lane has Flash down or low HP. After Eclipse you contest objectives; after three items you are a teamfight skirmisher who deletes back lines from a flank — but you do not splitpush late, because a Graves caught alone at minute 30 is one CC chain from dying.

## Recommended Build

**Starting items:** Smite + **Hailblade** for a faster jungle clear and AOE damage on **R**, with **Refillable Potion**. Take Emberknife only if your team needs Red-side counter-jungle pressure (slower clear, more sustain).

**Core items (in order):**

1. **Eclipse** — burst+shield+omnivamp, the cleanest first item for skirmishing junglers. The shield procs after two hits, which lines up with your shotgun rhythm.
2. **Plated Steelcaps** vs AD-heavy teams / **Mercury's Treads** vs 3+ hard CC. Default is Plated.
3. **Youmuu's Ghostblade** — movement-speed active and lethality, your gap-close and gank-finisher tool.
4. **Serylda's Grudge** — armor pen scaling for late game when enemies start stacking armor; the slow on damaged targets keeps you in range.

**Situational items:**

- **Edge of Night** — vs single-target lock-on ults (Malzahar, Skarner, Warwick).
- **The Collector** — when you are ahead and want execute pressure on squishies.
- **Maw of Malmortius** — vs heavy AP burst (Diana, Syndra, Lux mid).
- **Death's Dance** — vs squads with two strong physical damage dealers (e.g. Yasuo + Caitlyn). The damage you take gets spread out as a slow bleed instead of arriving instantly.
- **Bloodthirster** — late game when you need a fifth damage item with built-in shield and lifesteal.

**Boots:** Plated Steelcaps default. Berserker's Greaves only if the enemy has zero CC threats and you specifically want attack-speed scaling — a niche pick on Graves.

**Skill order:** Max **Q** first (clear and damage), **E** second (more dashes via the lower CD per rank), **W** last (the slow scales fine on rank 1). **R** at 6, 11, 16.

**Runes:** Primary **Domination** with **Hail of Blades**, **Sudden Impact**, **Sixth Sense**, **Treasure Hunter**. Secondary **Precision** with **Triumph** + **Coup de Grace** for snowball pressure, or **Resolve** with **Second Wind** + **Revitalize** if you expect to be poked in your jungle.

## Key matchups

- **Hecarim:** He outscales you past 3 items but loses skirmishes pre-6 if you E-roll into a spaced auto pattern. Punish him before minute 9, then back off — do not 1v1 him after his first item.
- **Lee Sin:** Mirror tempo matchup. Both win the first 6 levels; the jungler with more ganks wins. Track his **Q** cooldown and W-jump windows; if his Q is down, your shotgun wins the trade outright.
- **Master Yi:** Must-kill before his level 6 + first item. **W** on top of him during his **Q** active blocks his vision so he loses the lock — practice this in Practice Tool until it's reflex.
- **Vi:** Tanky and gank-heavy. She loses extended skirmishes if you have E charges; do not get caught in the air by her **Q** — that's a guaranteed all-in for her side.
- **Diana:** Snowballs hard post-6. Save **W** for her **R** windup (it doesn't break the engage, but the slow on impact extends her commit and gives your team time to peel). Build **Maw of Malmortius** as your second damage item.

## Power spikes & win conditions

- **Level 3:** Full kit unlocks. Your gank pattern is **E into range -> Q on the wall behind them -> AA reset -> W slow on retreat path**. With Hail of Blades runes, this kills any squishy at 60% HP and no Flash.
- **Level 6:** **Collateral Damage** unlocks the long-range execute. The shell hits the first champion and then bursts in a cone — flash a target into a wall and you guarantee both the direct hit and the cone damage.
- **Eclipse timing (~ minute 9):** You win every contested objective fight. Force a fight on Scuttle, Drake, or Voidgrubs in this window — past 12 minutes, scaling junglers (Hecarim, Master Yi) start matching your pace.
- **3 items (~ minute 22):** You become a teamfight flanker. Your job is to flank the enemy back line (their squishy carry, the one furthest from their tank) and burst it before they can react. Do not engage from the front.

## Common mistakes

- **Wasting E charges to escape a clear.** **E** has 2 charges and the cooldown drops every time you auto-attack. Burning both charges to dodge a single skillshot leaves you with no gap-close for the next 12 seconds. Save at least one.
- **Q-ing into the back of a wall by accident.** **End of the Line** detonates instantly on terrain. If you Q with your back to a wall, the shell explodes behind you for zero damage. Always check your facing before you cast.
- **Smoke Screen on yourself for sustain.** **W** does not heal. The slow on impact is the value — throw it on the enemy carry's retreat path, not on top of yourself.
- **R from full range with no setup.** The shell is dodgeable at long range. Use **R** point-blank after a Flash or as a pre-fired finisher when an enemy has already committed Flash. Don't open fights with it unless they are walking in a straight line through fog.
- **Splitpushing at minute 30.** Late-game Graves has no escape if a Skarner/Warwick/Malzahar lands their R. Group with your team after minute 25 and play flanks from team-fight range, not 1v1 in a side lane.

## Advanced tip

The **E-buffer-roll** technique: while you are mid-Q windup or auto-attack windup, queue a **Quickdraw** input. The dash fires the moment the windup completes, so you get the auto/Q damage **and** reposition in the same animation cycle — you keep DPS uptime while dodging or chasing. The recovery window where you cannot move is roughly 0.4 seconds without this; with the buffer roll, it's almost zero. Practice it on training-tool dummies until your stutter-step rhythm is auto-attack → E → auto-attack without pausing.
