---
title: "Sett Top Build & Guide — Patch 16.9"
slug: "sett-top"
language: "en"
patch: "16.9"
champion: "sett"
role: "top"
last_updated: "2026-04-29"
description: "Sett top lane guide for League of Legends Patch 16.9: starter kit, bruiser build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Sett"
  difficulty: 1
  damage_type: "physical"
  champion_class: "Fighter / Juggernaut"
  abilities:
    - key: "P"
      name: "Pit Grit"
      description: "Sett's basic attacks alternate left/right. The right-hand punch is faster and stronger. Sett also gets bonus health regen when low HP."
      dd_spell_id: "Sett_Passive"
    - key: "Q"
      name: "Knuckle Down"
      description: "Next two basic attacks deal bonus max-HP physical damage and Sett gains move speed when walking toward enemy champions."
      dd_spell_id: "SettQ"
    - key: "W"
      name: "Haymaker"
      description: "Passively stores damage taken as Grit (a hidden charge bar). On cast, spend all Grit for a shield and a punch that deals true damage in the center, physical on the sides."
      dd_spell_id: "SettW"
    - key: "E"
      name: "Facebreaker"
      description: "Pulls enemies on both sides of Sett together. If hits land on both sides, all are stunned; if only one side, they are slowed."
      dd_spell_id: "SettE"
    - key: "R"
      name: "The Show Stopper"
      description: "Grabs and suppresses one enemy champion, carries them, and slams them down. Big AOE physical damage and slow on landing — single-target lockdown plus area smash."
      dd_spell_id: "SettR"
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
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "3161", name: "Spear of Shojin" }
  situational_items:
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "vs kite-heavy lanes (Vayne, Quinn, Gnar) — the slow on dash glues runners to your face for the Q + E combo"
    - dd_id: "6610"
      name: "Sundered Sky"
      against: "vs squishy or low-armor matchups where you want a guaranteed crit on Q's first empowered hit for an extra burst window"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs heavy magic damage or 2+ hard CC on the enemy team (Renekton stun, Camille R) — magic resist plus tenacity (CC duration reduction)"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "vs armor-stacking front lines (Malphite, Rammus, Shen) — the armor shred lets your team's auto-attacks bite through their tanks"
  base_combo: ["Q", "AA", "E", "AA", "R"]
  win_condition: "Survive the early lane, then snowball through teamfights: pick the enemy carry with R, follow up with W's true damage core, and frontline through threshold HP for your team."
  weakness: "No real escape and no ranged poke — ranged top laners and kiters who never let Sett close gap can starve him. If R is on cooldown his teamfight ceiling drops sharply."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["yasuo", "yone", "tryndamere"]
      archetype: "Melee carries with no hard disengage"
      reason: "Sett's E pulls them out of their dash window, Q's empowered punches eat their squishy HP pool, and R isolates them away from their team for a clean kill."
    - examples: ["riven", "renekton", "irelia"]
      archetype: "Short-cooldown bruisers who all-in repeatedly"
      reason: "Their burst feeds Sett's Grit (the damage-stored bar that fuels W). Once W is full charged, Sett can wait out their combo and one-shot them with a true-damage Haymaker."
    - examples: ["aatrox", "darius"]
      archetype: "Slow-windup juggernauts without dashes"
      reason: "Sett out-trades them because his Q's right-hand punch (the alternating stronger auto on the passive) plus E stun gives a tighter all-in window than their telegraphed Q-combo."
  counterpicks:
    - examples: ["vayne", "quinn", "teemo"]
      archetype: "Ranged or kiting top laners"
      reason: "They never sit still long enough for Sett to land Q + E + R, and they out-poke (whittle his HP from range) before he reaches level 6. Sett has no dash to close the gap."
    - examples: ["gangplank", "jayce", "kennen"]
      archetype: "Long-range pokers with safe waveclear"
      reason: "They shove Sett under tower from afar, deny CS, and bleed his HP without ever giving him a Grit window. R range is shorter than their poke range."
    - examples: ["fiora", "gwen"]
      archetype: "True-damage duelists with mobility"
      reason: "Their kit punishes large HP pools (Fiora vitals, Gwen W mist), so Sett's bruiser stats get bypassed. They also dodge or un-target his R with W or Riposte."
---

## Overview

Sett is an AD bruiser (a melee champion who deals damage and tanks at the same time) who walks straight at you, swings with both hands, and refuses to die quietly. He is a juggernaut (a slow but extremely durable bruiser sub-class) built around three ideas: alternating right-hand auto-attacks that hit harder than the left, a damage-storage shield called Grit on **W**, and an ultimate that single-target lockdowns one enemy champion ("locks them down" = removes them from the fight, no escape) while smashing everyone behind them. Top lane suits him because the side of the map is a long 1v1 corridor where his short-range trade pattern (short scuffles to chip enemy HP without all-inning) can actually land.

His game plan is brutally simple. In lane, hit **Q** before each empowered auto-attack, walk forward, and turn on **E** the moment the enemy commits a key cooldown. Mid-game, charge **W** by tanking damage on purpose and unload it as a true-damage finisher. In teamfights, use **R** as a "Show Stopper" — slang the kit name uses for the suppression-and-slam — to delete the enemy carry from the back line (the squishy damage dealers who stand behind their tanks).

## Recommended Build

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Sustain through the level 1-2 poke before your Q comes online.

**Core items (in order):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — every stat Sett wants in one slot: AD, attack speed, ability haste, move speed on hit. Fits the alternating right-hand auto pattern.
2. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP, tenacity (CC duration cut), and a second shield that triggers when you drop low. Stacks with Sett's W shield for two save layers.
3. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — turns burst damage into a slow bleed. Lets Sett survive the first 1.5 seconds of being focused, the exact window where his W finishes charging.
4. ![Spear of Shojin](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3161.png) **Spear of Shojin** — basic-attack reset and ability haste. With more Q uptime, the empowered punches double in throughput across a fight.

**Situational items:**

- ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — replace Trinity Force into kite-heavy lanes (champions like Vayne or Quinn who run backward while attacking, "kiting" you). The active slow glues runners to your face.
- ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — into squishy or low-armor matchups where the guaranteed crit on Q's first empowered auto creates an instant burst window.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — versus armor stackers (Malphite, Shen, Rammus). The armor shred (a debuff that cuts armor stacks per hit) opens their tanks for your team's auto-attacks.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** versus heavy AD lanes; ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** versus heavy magic damage or two or more hard CC on the enemy team.

**Skill order:** Max **Q** first (main damage and chase tool), **E** second (combo lockdown), **W** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Precision** with **Conqueror** keystone (stacks AD/AP per hit during sustained fights — perfect for Sett's drag-out trades), **Triumph** (heal on kill), **Legend: Bloodline** (lifesteal stacks for sustain), and **Last Stand** (more damage when low HP, which is exactly where Sett wants to be). Secondary **Resolve** with **Conditioning** (bonus armor/MR after minute 12) and **Overgrowth** (scaling HP). Stat shards: Adaptive Force, Adaptive Force, Health Scaling.

## Key matchups

- **Darius:** Skill matchup. Hold **E** until he lands his Q sweet spot — pulling him while his Q is on cooldown removes his only damage tool. Avoid trading with stacks of his passive bleed (a damage-over-time effect from Hemorrhage) on you; reset by walking out for two seconds.
- **Fiora:** Lose lane, scale to teamfight (play safe and farm — your kit gets stronger with items, hers does not snowball as hard). Stand near minions so her **Q** dashes hit a wall behind you, never alone. Save **W** for after her **R** pops so you can shield-burst out of her vitals damage (the four glowing points on your body she has to hit). ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** is mandatory here.
- **Aatrox:** Even matchup. His Q sweet-spot range is longer than your Q empowered-auto range, so trade only when his Q is on cooldown. Use **E** to interrupt his **Q3** windup; he loses most damage if the third sweep misses.
- **Mordekaiser:** Hard matchup. His **R** isolates you in a 1v1 box where his stats outscale yours; do not engage solo past level 6 unless you have ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**. Roam mid or river when his ult is up; let him push, then return when it is down.
- **Vayne:** Bad matchup. She kites you (moves backward while attacking — she runs faster than you can chase) with **Q** and out-ranges all your tools. Farm under tower, ask for jungle ganks, and scale: in teamfights one **R** on her ends the game even if you lose lane 0/2.

## Power spikes & win conditions

- **Level 2 (Q + E):** With both **Q** empowered punches and **E**, you have a real all-in (a full commit fight where you intend to score the kill, not just chip HP) for the first time. Push level 1, hit level 2 first on the wave bounce, then trade hard.
- **Level 6 (R unlocked):** First **The Show Stopper** turns any enemy step too far forward into a kill. Track the enemy laner's flash; if it is down, R is a guaranteed pick.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completion (~ minute 12-14):** Wave control flips. Slow-push two waves (let your minions stack up by killing only enemy minions, not pushing) into the enemy turret, take plates, and rotate to herald or bot side once the wave crashes.
- **3-item online (~ minute 22-26):** With ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** + ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** + ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance**, Sett survives the first 2-3 seconds of being focused. That is exactly when his **W** finishes charging into a true-damage finisher. Force objective fights here.

## Common mistakes

- **Casting W early to "use the shield."** **Haymaker** scales with the Grit you store. Walk into the trade first, eat 2-3 enemy abilities, then cast **W** — the true damage center punch is Sett's biggest hit and it needs full Grit to matter.
- **Using R on the front line tank.** **R** is single-target lockdown — wasting it on the tank means the enemy carry walks away free. Save it for the squishy back line, even if it means flashing in to reach them.
- **Pulling E when only one enemy is on one side.** No stun, just a slow. If the second target is not committed yet, hold **E** for the moment a second body steps in. A stunned 2-target **E** is worth two slow **E**s.
- **Greeding for the "right-hand" empowered auto in trades.** The alternating stronger right-hand punch is good but predictable. Do not stand still waiting for it to come back up — keep moving with **Q**'s move-speed buff so the enemy cannot kite you.
- **Picking Sett blind into ranged tops.** "Blind" means locking your champion before seeing what the enemy picks. Sett has no dash. Vayne, Quinn, Teemo, Jayce will starve him in lane. If draft order forces it, plan around scaling (getting stronger as items come online) and jungle help, not around winning the matchup 1v1.

## Advanced tip

Bait **W** to full Grit on purpose. Walk into a melee enemy's combo without using your shield, let them dump 50-60% of your HP, then turn on **W** with a fully-charged shield and a near-full true-damage punch. The enemy expects you to die and overcommits; your shield outvalues their remaining damage and your punch turns the trade into a kill. This works best against short-cooldown all-in bruisers (Riven, Renekton, Irelia) whose burst fills your Grit bar in one go.
