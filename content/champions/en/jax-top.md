---
title: "Jax Top Build & Guide — Patch 16.9"
slug: "jax-top"
language: "en"
patch: "16.9"
champion: "jax"
role: "top"
last_updated: "2026-04-29"
description: "Jax top lane guide for League of Legends Patch 16.9: scaling bruiser build, Counter Strike timing, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Jax"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Fighter / Duelist"
  abilities:
    - key: "P"
      name: "Relentless Assault"
      description: "Consecutive basic attacks ramp up Jax's Attack Speed. Stacks reset if you stop attacking. Sustained DPS source — keep hitting once you commit."
      dd_spell_id: "Jax_Passive"
    - key: "Q"
      name: "Leap Strike"
      description: "Targeted dash to a unit or ward. If the target is enemy, it deals physical damage. Use wards for extra mobility — your only escape and your gap-closer."
      dd_spell_id: "JaxQ"
    - key: "W"
      name: "Empower"
      description: "Charges your next basic attack or Leap Strike with bonus magic damage and a brief slow. Cheap and short cooldown — use every short trade."
      dd_spell_id: "JaxW"
    - key: "E"
      name: "Counter Strike"
      description: "Defensive stance: dodges all incoming basic attacks for up to 2 seconds and reduces AOE damage. Recast or expire to stun all nearby enemies. Core skill."
      dd_spell_id: "JaxE"
    - key: "R"
      name: "Grandmaster's Might"
      description: "Passive: every third basic attack deals bonus magic damage. Active: AOE burst plus Armor and Magic Resist for several seconds. Always activate before fighting."
      dd_spell_id: "JaxR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "W" }
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
    - { dd_id: "3153", name: "Blade of The Ruined King" }
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "3091", name: "Wit's End" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "vs heavy auto-attack opponents (Tryndamere, Yasuo, Kayle) — flat AA damage reduction"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs heavy crowd control or AP damage (Malphite R, Renekton stun, Rumble)"
    - dd_id: "6610"
      name: "Sundered Sky"
      against: "alternative core vs poke lanes — guaranteed crit + heal on first auto-attack against a champion"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "vs squads with two strong physical damage dealers (Yasuo + Caitlyn): turns burst into a slow bleed (delayed damage)"
  base_combo: ["E", "Q", "W", "AA", "R"]
  win_condition: "Reach two items, then duel anyone in a side lane. Land Counter Strike stun on engage, Empower the first auto, and let Relentless Assault stack up — splitpush to force a response."
  weakness: "Pre-6 you have no real all-in window; ranged tops poke you off the wave. If Counter Strike is on cooldown or whiffed, you have no defensive layer and no kill threat."
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
    - examples: ["malphite", "ornn", "sion", "cho-gath"]
      archetype: "Slow melee tanks without dashes"
      reason: "Counter Strike stuns them on top of you and they have no way to disengage; Jax stacks Relentless Assault freely while they soak the hits, winning every extended trade past level 6."
    - examples: ["nasus", "garen", "darius"]
      archetype: "Short-range melee scalers with no AA cancel"
      reason: "Their damage is locked into basic attacks or short-range abilities — Counter Strike dodges the auto-attacks and the AOE stun on release neutralizes their windup."
    - examples: ["yasuo", "tryndamere", "irelia"]
      archetype: "Auto-attack reliant duelists"
      reason: "Counter Strike eats their main damage source for 2 seconds. With Plated Steelcaps the matchup tilts further — they cannot trade evenly into your stance."
  counterpicks:
    - examples: ["teemo", "vayne", "kennen", "gnar"]
      archetype: "Ranged tops with kiting tools"
      reason: "They poke from outside Leap Strike's 700 range and walk back when Counter Strike comes up. Jax has no built-in sustain pre-6 so the lane bleeds without ever reaching all-in range."
    - examples: ["fiora", "camille"]
      archetype: "True-damage duelists with cleanse / dash chains"
      reason: "Fiora Riposte parries Counter Strike's stun; Camille E hookshot lets her commit and disengage on her own timer. Both win the post-6 1v1 if they hit item parity."
    - examples: ["malphite", "rumble"]
      archetype: "Hard-counter mages into melee bruisers (when ahead)"
      reason: "Malphite into Jax flips on Malphite's items: pre-Frostfire Gauntlet he loses, post-second-item his armor stacking and R lock-on shut down Jax's all-in window."
---

## Overview

Jax is a melee fighter and duelist whose entire identity is "scale into 1v1 god". Pre-6 he has no kill pressure: his trades hinge on landing **Counter Strike (E)** to dodge the enemy's basic attacks, then snapping back with **Empower (W)** plus stacking **Relentless Assault (Passive)** auto-attacks. From level 6 onward, **Grandmaster's Might (R)** turns him into a bursty bruiser that can solo-kill almost any melee top in the side lane — but only if he reaches two items intact.

The game plan is patient and lane-aware. Last-hit safely until level 6, look for one all-in window (a full commit fight where you do not back off until someone dies) when **Q-E-W-R** lines up, then transition to splitpush (pushing a side lane alone to force the enemy to respond) once **Blade of The Ruined King** is online. In team fights you are a flanker who arrives via **Leap Strike** on a ward you placed seconds earlier — not a frontline that walks in from the front.

## Recommended Build

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. The shield's regen on damage taken is the cheapest answer to early poke. Skip Doran's Blade unless you face a melee matchup you actively want to all-in level 2.

**Core items (in order):**

1. ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** — your first power spike. The on-hit damage scales with the enemy's HP, perfect for bruiser/tank top lanes, and the active slow lets you stick to opponents who try to kite you (move backwards while attacking to keep distance).
2. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — the second item that turns Jax into a duelist. Sheen procs (extra damage on basic attack after a spell) chain off **Q** and **W**, and the movement speed on hit lets you chase through walls.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — survivability layer. The shield triggers when you drop below ~40% HP (HP-threshold passive — activates when your HP crosses a low threshold), giving you the seconds you need to stack **Relentless Assault** and turn a fight around.
4. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — fourth item against AP damage; Magic Resist plus on-hit magic damage that scales with your already-high attack speed.

**Situational items:**

- ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — alternative core into poke-heavy lanes; the guaranteed crit and heal on first auto-attack against a champion gives you sustain (in-fight regeneration) Jax otherwise lacks.
- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — vs squads with two strong physical damage dealers (e.g. Yasuo + Caitlyn). It turns physical burst into a slow bleed (damage spread over the next seconds instead of instant) so you can stack Relentless Assault before you die.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots vs heavy auto-attack lanes (Tryndamere, Kayle, Vayne).
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — boots vs heavy crowd control or AP burst (Malphite R, Rumble, Renekton stun).

**Boots:** Default is **Plated Steelcaps** vs auto-attack tops; swap to **Mercury's Treads** if the enemy team has 2+ hard-CC sources or strong AP damage.

**Skill order:** Max **E** (Counter Strike) first — the dodge window scales with rank and the cooldown drops from 17 to 9 seconds. **Q** (Leap Strike) second for waveclear and gap-close, **W** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Precision** with **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Conqueror stacks fast on Jax because Relentless Assault chain-attacks count individually. Secondary **Resolve** with **Bone Plating** and **Revitalize** for early-trade survival.

## Key matchups

- **Darius:** Even pre-6, scales to favorable. Hold **Counter Strike** for his **Q** outer ring (the healing ring of his axe). If he lands the heal-zone you lose the trade; if he whiffs you stun-reset and walk away with a free **W**-empowered auto.
- **Camille:** Unfavorable lane. Her **E** hookshot dodges your stun timing and her **W** lifesteal sustains through Relentless Assault. Freeze the wave near your tower (hold the wave on your side to deny her last-hits) and wait for jungle help.
- **Malphite:** Even early, unfavorable post-6 if he hits Frostfire / Sunfire. Try to all-in level 3 before he hits two items; once he stacks Armor your magic damage from **W** and **R** matters more than your physical AA.
- **Teemo:** Unfavorable, classic ranged-top counter. Buy ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** first item, take ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** start, and farm under tower until ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** comes online. Look for kills only when the enemy jungler is bot side.
- **Renekton:** Unfavorable level 1-5, even from 6 onward. He out-trades you with **Q** sustain and **W** stun before you reach the **R** spike. Play passive, drop **E** when he commits **W**, and freeze (hold the wave on your side to deny last-hits) the wave near tower.

## Power spikes & win conditions

- **Level 3:** First short trade window. With **E + W + Q** unlocked, you can dodge two enemy autos with **E**, snap back with **Empower + Q**, and walk out positive. Do not extend past 3 autos — your stun is on cooldown.
- **Level 6:** **Grandmaster's Might** unlocks. The Armor + MR active turns close all-ins favorable. Always cast **R** before you commit, never as a finisher.
- **![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) Blade of The Ruined King completion (~ minute 11-13):** First duel spike. You can splitpush (push a side lane alone to force the enemy to answer) and kill any melee top who challenges you 1v1 without jungle help.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force online (~ minute 19-22):** Two-item spike. Sheen procs through every spell and you finally have the burst to one-shot squishy targets in a flank.

## Common mistakes

- **Throwing Counter Strike on cooldown for waveclear.** **E** is your only defensive layer — burning it on minions leaves you open to a gank with no escape and no stun. Use it only when you intend to trade or when ganks are imminent.
- **Forgetting to recast E for the stun.** **Counter Strike** has TWO casts: first to enter dodge stance, second to release the AOE stun. New Jax players let it auto-expire; the manual recast lets you time the stun on the exact frame the enemy commits.
- **All-inning before level 6 against bruisers.** Jax has no kill pressure pre-**R**. Trying to fight Darius or Renekton at level 4 ends with you giving first blood. Stack passive XP, freeze if you're losing, and wait for **R**.
- **Splitpushing without TP and without vision.** As soon as **Blade of The Ruined King** is online you want to splitpush, but if the enemy team rotates 4-man and you have no Teleport (summoner spell that warps you back to base or ally minion) up, your team loses the 4v4. Always check your team's recall timers before committing to a side lane.
- **Leap Strike on the enemy when escaping.** **Q** can target wards and minions. If you're running away, **Q** the back-line minion or your trinket ward, never the chasing enemy — that just teleports you back to them.

## Advanced tip

Use **Counter Strike** mid-dash to time the stun on the enemy's commit frame instead of letting it auto-expire. The trick: cast **E**, walk into the enemy, wait for them to throw their key skillshot or dash (Renekton **W**, Darius **W**, Camille **E**), then recast **E** the moment they're locked in animation. The stun catches them mid-cast and gives you a guaranteed 2-second window to stack Relentless Assault unanswered. Practice this in Practice Tool against a target dummy with auto-attacks on — you'll feel the rhythm within ten reps.
