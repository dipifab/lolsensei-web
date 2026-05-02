---
title: "Fiora Top Build & Guide — Patch 16.9"
slug: "fiora-top"
language: "en"
patch: "16.9"
champion: "fiora"
role: "top"
last_updated: "2026-04-29"
description: "Fiora top lane guide for League of Legends Patch 16.9: duelist build path, vital management, parry timing, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Fiora"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Skirmisher / Duelist"
  abilities:
    - key: "P"
      name: "Duelist's Dance"
      description: "A glowing weak point (a Vital) appears around every nearby enemy champion. Hitting it deals true damage, heals Fiora, and gives her Move Speed for a short window."
      dd_spell_id: "Fiora_Passive"
    - key: "Q"
      name: "Lunge"
      description: "Short directional dash that stabs the closest enemy and resets her basic attack timer. Hitting an enemy refunds most of the cooldown, so chained Q's are her main mobility."
      dd_spell_id: "FioraQ"
    - key: "W"
      name: "Riposte"
      description: "Parry: blocks all incoming damage and disables for a brief moment, then stabs in a chosen direction. Slows the first enemy hit, or stuns them if you parried a CC effect."
      dd_spell_id: "FioraW"
    - key: "E"
      name: "Bladework"
      description: "Empowers her next two basic attacks. The first slows the target, the second always crits. Both grant attack-speed bonus for the window."
      dd_spell_id: "FioraE"
    - key: "R"
      name: "Grand Challenge"
      description: "Reveals all four Vitals around the target champion. Hitting all four (or killing the target after at least one Vital) heals Fiora and nearby allies in a big AOE."
      dd_spell_id: "FioraR"
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
    - { dd_id: "3074", name: "Ravenous Hydra" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap from Plated Steelcaps when the enemy team has heavy magic damage or chained CC (Lissandra, Ryze, Sett pull)"
    - dd_id: "6610"
      name: "Sundered Sky"
      against: "into tankier bruisers (Mundo, Sion, Ornn) — first-hit crit plus heal helps you out-trade HP-stackers"
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "into mobile tops (Camille, Irelia, Renekton) — the dash + slow lets you stick when Q alone is not enough"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs heavy AP burst (Mordekaiser, Vladimir, Rumble) — magic shield plus MR for the 1v1 splitpush window"
    - dd_id: "6694"
      name: "Serylda's Grudge"
      against: "vs stacked-armor frontlines (Malphite, Rammus, Shen) — armor pen plus a slow proc to keep targets in Vital range"
  base_combo: ["Q", "AA", "E", "AA", "AA"]
  win_condition: "Manage Vitals to heal and snowball early, reach Trinity Force, then splitpush a side lane until the enemy sends two players. In teamfights R the squishiest target for the AOE heal that wins extended fights."
  weakness: "Squishy in the first 6 levels and very item-dependent. Hard CC chains and ranged poke (Teemo, Quinn, Gnar) keep her off Vitals; if she cannot land Q resets she has no mobility at all."
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
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["sett", "darius", "garen"]
      archetype: "Slow juggernauts that rely on a single big ability"
      reason: "Fiora's W parries the one telegraphed wind-up that defines them (Darius E pull, Sett W slam, Garen Q silence). With the wind-up wasted, she walks around and free-hits Vitals all trade."
    - examples: ["dr-mundo", "sion", "shen"]
      archetype: "HP-stacking tanks that cannot stop her Vitals"
      reason: "Vitals deal a percentage of the target's max HP as true damage (damage that ignores armor and MR). The more HP they build, the more her R chunks them in extended fights."
    - examples: ["nasus", "kayle"]
      archetype: "Late-game scaling melees with weak early laning"
      reason: "She bullies them off the wave from level 2 with Q resets, killing or shoving them under tower repeatedly before they hit the items that make them scary."
  counterpicks:
    - examples: ["teemo", "quinn", "gnar"]
      archetype: "Ranged tops that kite outside Q range"
      reason: "Fiora has no answer to ranged poke before level 6. They sit at auto-attack range, blind her or dash away, and she cannot reach a Vital to heal back."
    - examples: ["jax", "irelia", "camille"]
      archetype: "Skirmishers with on-demand mobility"
      reason: "Their dashes ignore her positioning game. Jax E stuns through her parry window, Irelia Q-resets re-position her every second, Camille R locks Fiora in a 1v1 and drains her resources."
    - examples: ["malphite", "poppy", "tahm-kench"]
      archetype: "Hard-CC tanks with point-and-click lockdown"
      reason: "Their CC is reliable and unparryable while it is already on you. A Malphite R or Poppy stop-charge cancels her R window and her team has to play 4v5 in the meantime."
---

## Overview

Fiora is a **skirmisher** — a melee duelist who wins extended 1v1 fights instead of bursting in 1-2 seconds like an assassin. Her kit revolves around her passive **Duelist's Dance**: a glowing weak point called a **Vital** appears around every nearby enemy champion, rotating to a new side every few seconds. Hitting the Vital deals **true damage** (damage that ignores armor and MR), heals her, and grants Move Speed. Her Q **Lunge** is a short dash on a low cooldown that mostly refunds itself on hit, so chaining Q's around an opponent to reach the next Vital is the core mechanical loop. Her W **Riposte** is a **parry** — a brief shield that blocks the next instance of damage or CC and counter-stabs back, stunning the target if she parried a CC effect.

The game plan is straightforward but mechanical: in lane, manage Vitals to heal yourself and chip the enemy, look for a level-2 or level-6 all-in (a fight where you fully commit to a kill), then **splitpush** (push a side lane alone to force the enemy to send someone to stop you) once **Trinity Force** is online. Around her R **Grand Challenge** Fiora becomes one of the strongest 1v1 champions in the game: ult one isolated target, hit all four Vitals, and the AOE heal at the end can flip a teamfight on its own. She is squishy and item-dependent in the first 6 levels, so the early lane is about Vitals, not kills.

## Recommended Build

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. The HP-regen passive softens enemy poke (ranged chip damage without committing to a fight) until your level-2 Q-E spike. Take ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** only into a melee lane where you expect to all-in early (e.g. mirror Fiora, Garen).

**Core items (in order):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — first-item spike (the single biggest jump in your damage and **stickiness**, your ability to stay glued on a target who tries to run away). The on-hit Spellblade procs every Q for huge bonus damage, and the Move Speed passive after each ability stacks her Vital-chase. AD, attack speed, ability haste (a stat that lowers ability cooldowns) and HP all line up with what the kit needs.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — default boots when the enemy hurts you mostly with basic attacks.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP plus a **lifeline shield**: when your HP drops below ~30%, an automatic shield triggers. That window is exactly when you need extra time to finish the last two Vitals on your R target.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — turns **burst** AD (high damage delivered in 1-2 seconds) into a slow **bleed** (damage spread over the next few seconds). On kill, the remaining bleed gets cleansed — a clean reset for splitpush dives.
5. ![Ravenous Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3074.png) **Ravenous Hydra** — AOE cleave on basic attacks plus omnivamp (lifesteal that works on any damage you deal, not just autos). Doubles your waveclear so you can splitpush a side lane without bleeding too much time.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap from ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** when the enemy team has heavy magic damage or chained **CC** (crowd control: stuns, roots, knockbacks — anything that locks you down). The tenacity (a stat that shortens CC duration on you) keeps W parry windows usable in teamfights.
- ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — alternative first-item into tankier bruiser lanes (Mundo, Sion, Ornn). Every first auto on a champion in a fight crits and heals — extra sustain against HP-stackers.
- ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — into mobile tops (Camille, Irelia, Renekton). The dash + slow active gives a second gap-closer when Q resets alone cannot keep them in Vital range.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — versus heavy **AP** (Ability Power, the stat behind magic damage) burst (Mordekaiser, Vladimir, Rumble). Lifeline magic shield + MR keeps the 1v1 splitpush winnable.
- ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — versus stacked-armor frontlines (Malphite, Rammus, Shen). Armor pen plus a slow proc (a passive that triggers automatically on each damaging hit) keeps tanks pinned long enough to clear all four Vitals.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** is the default. Switch to ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** when the enemy team has three or more sources of CC or heavy magic damage.

**Skill order:** Max **Q** first (cooldown drops every rank, resets become almost instant). Max **E** second (more damage on the empowered crit, longer slow to set up Vitals). **W** maxes last. Take **R** at levels 6, 11, 16.

**Runes:** Primary **Precision** with the keystone (the main rune of the tree) **Conqueror** — ramps up bonus AD as you keep fighting, capped after ~5 seconds. Pair with **Triumph** (heal and gold on takedown), **Legend: Bloodline** (life-steal stacks on takedowns), and **Coup de Grace** (extra damage below 40% HP — perfect for finishing Vitals). Secondary **Resolve** with **Bone Plating** (damage reduction on the next 3 hits after you take damage) plus **Revitalize** (boosts your R team-heal). Stat shards: **Adaptive Force** + **Adaptive Force** + **Health Scaling**.

## Key matchups

- **Darius:** Skill matchup. His Q outer-blade applies a bleed stack and out-trades you raw, but his entire kit telegraphs: **W** (parry) his E pull and the trade flips. If you parry the pull he is stunned for nearly a second — Q in, hit two Vitals, walk out. Never trade when his passive is at 4-5 stacks.
- **Camille:** Hard matchup. Her E hookshot stuns through your W if she lands the second cast, and her R isolates you 1v1. Save **W** for her R, not for her Q. Buy ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** instead of Trinity if she snowballs early.
- **Teemo:** Brutal lane. He blinds you (cancels your basic attacks for a short time) on cooldown and pokes from outside Q range. **Freeze** the wave near your tower (stop pushing and keep the wave on your side) to deny him farm (gold and XP from minions), and call your jungler.
- **Garen:** Favorable. Q-W to bait his **W** (his damage-reduction shield), then walk around for the side Vital. His Q silence is a straight wind-up — parry it on reaction. Avoid all-in under his R unless you are 1-2 items ahead.
- **Jax:** Even matchup that Fiora wins after one item. Parry his **E** (the 2-second stun wind-up) and the lane is yours. Without that parry, his E + counter-strike out-trades you because it stuns through any hit you land mid-channel.

## Power spikes & win conditions

- **Level 2:** With Q + E unlocked you have a real all-in window. Q in for a Vital, E for the slow + crit auto, walk to the side for the next Vital. Most lanes lose a third of their HP from a single level-2 trade.
- **Level 6:** First **R** unlocks. Even at zero items, R isolates a target and the AOE heal keeps you alive long after the kill. Force a 1v1 the moment your jungler shows top side.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completion (~ minute 11-13):** Damage and stickiness jump the most here. You can splitpush a side lane and reliably 1v1 anyone the enemy sends. Force side-lane pressure and ignore mid teamfights when this comes online.
- **Three items + R online (~ minute 22-26):** Peak teamfight window. R the squishiest target, dance around for the four Vitals, and the AOE heal keeps your whole team alive through a second engage. If you cannot get to the back line, R the highest-HP frontliner — true damage cuts through their build the same way.

## Common mistakes

- **Spamming Q on cooldown for damage.** Q is a positioning tool first, damage second. If you Q toward the enemy and immediately eat their full combo, you wasted both the dash and the refund. Q **toward a Vital**, not toward the champion.
- **Wasting W on basic attacks.** W parries any damage source, but a parried minion auto is parried potential. Hold W for the enemy's biggest single ability. A clean W parry on a CC is a free kill window.
- **Ulting against a wall.** R places four Vitals on the cardinal sides of the target. If the enemy is already against a wall, two Vitals are on the wall side and you cannot reach them. Pull the target into open ground first, then R.
- **Splitpushing without vision.** Fiora can 1v1 anyone but loses 1v2 every time. Drop a ![Control Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2055.png) **Control Ward** in the enemy side-lane bush before you shove — without it, every shove invites a free gank you cannot escape.
- **Trading into a full-stack passive.** Juggernauts like Darius, Sett, Renekton win raw trades when their passive is loaded. If their bar is full, back off, push the wave, and trade only when it empties.

## Advanced tip

Practice the **W parry timing** on point-and-click ultimates (abilities that auto-target an enemy without aiming, like Mordekaiser R) instead of skillshots (abilities you have to aim manually). Most players try to W on Malphite R or Sion R wind-up, which is fine but predictable. The huge plays are W'ing **Mordekaiser R** (parry stuns him for nearly a second and you walk free), **Skarner R** (the suppression cancels and stuns him), and **Warwick R** (frame-perfect, but a clean one ends the fight). Set up a custom game, tell a friend to play one of these champions, and drill the parry until you stop pre-casting and start reacting. Once it is reflex, every 1v1 with a hard-CC ult flips in your favour even at item disadvantage.
