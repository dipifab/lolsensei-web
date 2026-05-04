---
title: "Gangplank Top Build & Guide — Patch 16.9"
slug: "gangplank-top"
language: "en"
patch: "16.9"
champion: "gangplank"
role: "top"
last_updated: "2026-05-03"
description: "Gangplank top lane guide for League of Legends Patch 16.9: starter kit, crit Trinity Force build, key matchups, power spikes, mistakes, and an advanced barrel-chain tip."
quick_learn:
  champion_dd_id: "Gangplank"
  difficulty: 5
  damage_type: "mixed"
  champion_class: "Bruiser / Late-game crit caster"
  abilities:
    - key: "P"
      name: "Trial by Fire"
      description: "Periodic empowered melee strike that burns the target for true damage over a few seconds. Forces a melee window in lane — track its timer to predict GP's all-in."
      dd_spell_id: "Gangplank_Passive"
    - key: "Q"
      name: "Parrrley"
      description: "Ranged shot at 625 range that deals physical damage, applies on-hit (crit, Trinity Force Sheen), and grants gold on kill. Main poke and barrel detonator."
      dd_spell_id: "GangplankQWrapper"
    - key: "W"
      name: "Remove Scurvy"
      description: "Cleanses all crowd control effects and heals based on missing HP. Long cooldown, high mana cost — save it for the punishing CC, not minor snares."
      dd_spell_id: "GangplankW"
    - key: "E"
      name: "Powder Keg"
      description: "Place a barrel; attack it to detonate, dealing AOE physical damage and slowing. Two adjacent barrels chain — a chained 3-barrel combo is the win-condition spike."
      dd_spell_id: "GangplankE"
    - key: "R"
      name: "Cannon Barrage"
      description: "Global ult: target any spot on the map for cannonballs that slow and deal magic damage. Upgradeable in shop with plunder gold (bonus gold Q grants for killing units)."
      dd_spell_id: "GangplankR"
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
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3508", name: "Essence Reaver" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "vs healing-stack comps (Aatrox, Soraka, Vladimir, Dr. Mundo) — grievous wounds passive cuts enemy healing so your damage sticks"
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "vs HP-stacking tanks (Cho'Gath, Sion, Ornn) — armor pen scales with the target's HP advantage over you"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs heavy AP burst threats (Kennen R, Vladimir, Rumble) — magic shield procs at low HP and saves you from the kill blow"
    - dd_id: "3053"
      name: "Sterak's Gage"
      against: "vs all-in burst comps (Camille, Wukong R, Malphite engage) — HP shield triggers on the one-shot hit, buying you a second to W cleanse"
  base_combo: ["E", "E", "Q", "AA", "Q"]
  win_condition: "Survive lane to Trinity Force, then chain 3 barrels in teamfights. Land a chained-barrel Q crit on a backline target and the fight is over before it starts."
  weakness: "No dash and no innate mobility. Hard countered by champions with anti-auto-attack tools (Fiora parry, Jax E dodge) and by hard-CC point-and-click engage you cannot cleanse in time."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8444, name: "Demolish", icon_path: "perk-images/Styles/Resolve/Demolish/Demolish.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primary: Grasp sustains melee Trial by Fire trades and stacks permanent HP — the pattern Gangplank wants while he scales. Demolish punishes towers when the enemy roams, Conditioning powers the late-game frame, Overgrowth pads the HP pool Trinity Force builds on."
    secondary_rationale: "Precision secondary: Triumph refunds HP and gold on takedowns when you flank teamfights with R — Gangplank often dives the back line, so the heal saves your follow-up. Legend: Alacrity ramps attack speed for faster barrel detonation tempo and Q on-hits."
    secondary_alternative: "Vs ranged poke matchups (Teemo, Quinn, Vayne top) swap Precision to Inspiration with Biscuit Delivery (extra HP and mana sustain you have no other source for) and Cosmic Insight (more frequent Flash and Teleport)."
matchup_draft:
  pick_into:
    - examples: ["sion", "nasus", "cho-gath"]
      archetype: "Immobile late-game scalers"
      reason: "Gangplank's Q reaches 625 units, far outside their auto-attack farm range. They have no dash to close the distance and punish a chained barrel; you scale faster than they do once Trinity Force is online."
    - examples: ["darius", "garen", "sett"]
      archetype: "Melee bruisers without disengage"
      reason: "Stay outside their threat radius using Q range and slow them with Powder Keg zones. Once they finally close, they have no follow-up tool to keep you in melee — you reset the trade and walk away."
    - examples: ["urgot", "kled"]
      archetype: "Early-window all-in fighters that fall off"
      reason: "Farm at Q range through levels 1-3, save W for their level 6 ult, then outscale them post-Trinity Force. They have no late-game answer to a chained-barrel teamfight combo."
  counterpicks:
    - examples: ["fiora", "jax"]
      archetype: "Mobility fighters that block basic attacks"
      reason: "Fiora's W parry stuns Gangplank and reflects crowd control; Jax's E dodges every auto-attack and Q for two seconds. Both reset the trade pattern Gangplank needs to scale into late game."
    - examples: ["renekton", "olaf"]
      archetype: "Early-window all-in bullies"
      reason: "Renekton level 2 stun plus level 6 ult cancel Gangplank's scaling plan before Trinity Force. Olaf's R grants CC immunity, so W cleanse cannot stop him from running Gangplank down with true-damage axes."
    - examples: ["malphite", "kennen"]
      archetype: "Hard-CC point-and-click engage"
      reason: "Malphite's R is a point-and-click knockup with no skillshot to dodge. Kennen's W stun and R AOE chain CC beyond Gangplank's W cleanse window — once the CC chain starts, W cannot cleanse it in time."
---

## Overview

Gangplank is a late-game scaling top laner who pays a steep early-game tax for one of the highest crit-damage ceilings in the role. His kit looks busy but reduces to two ideas. **Parrrley (Q)** is a 625-range ranged auto-attack that triggers on-hit effects (crit chance, Trinity Force's Sheen proc, true-damage burn) and applies them at distance. **Powder Keg (E)** is a placed barrel he attacks to detonate; two adjacent barrels chain together, and three barrels chain again. The signature pattern is stacking 3 chained barrels and Q-cracking them on a clumped enemy team for an instant burst — high damage delivered in one second.

The game plan is patient. Farm safely at Q range through the bully window of levels 1-6, hit Trinity Force around minute 14-16, and start pressuring side lanes with **Cannon Barrage (R)** to flip dragons or steal towers from across the map. In teamfights, place barrels behind your front line (the tanks and bruisers in front of your team), then walk forward into the chain only when you can land it on the enemy backline (the carry that sits behind their team and deals damage from distance). If you survive lane and reach 3 items, every fight where you connect a chained Q crit is one-sided.

## Recommended Build

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** vs melee bruisers — you want the lifesteal (basic-attack damage that heals you back) for trades (short skirmishes where you exchange a few abilities and walk away). ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + Health Potion vs ranged matchups (Teemo, Quinn, Gnar) — the regen lets you farm under poke pressure (long-range chip damage that does not commit to a fight).

**Core items (in order):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — Sheen (a passive bonus that fires the next basic attack for extra damage after you cast an ability) procs on every Q for a massive damage boost. Attack speed, ability haste (the stat that lowers ability cooldowns), HP — the entire stat line is Gangplank's win-condition spike.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed for faster barrel detonation timing and Q on-hit cadence.
3. ![Essence Reaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3508.png) **Essence Reaver** — first crit item; refunds mana per Q cast. Solves Gangplank's mana problem and starts the crit scaling.
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — the crit damage spike. Q crits and barrel detonations now one-shot squishy targets (champions with low defenses, like ADCs and burst mages).
5. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — lifesteal for sustain in extended teamfights, plus an HP shield overflow when you stay topped up.

**Situational items:**

- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — into healing-stack compositions (Aatrox, Soraka, Vladimir, Dr. Mundo); the grievous wounds passive cuts enemy healing so your damage actually sticks instead of being healed back.
- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — into HP-stacking tanks (Cho'Gath, Sion, Ornn). Armor penetration scales with the target's HP advantage over you.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — into heavy AP burst threats (Kennen R, Vladimir, Rumble); the magic shield triggers when you drop low and saves you from the kill blow.
- ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — into all-in burst comps (Camille E + R, Wukong R, Malphite R engage); HP shield procs the moment you take a one-shot hit, buying you the second you need to cleanse with W and reset.

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** is the default. Swap to ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** vs AD-heavy teams (3+ physical damage threats), or ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** vs hard-CC AP comps where W will be on cooldown often.

**Skill order:** Max **Q** first (Parrrley scaling per rank is your main damage source), **E** second (lower barrel cooldown means more chain detonations), **W** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Resolve** with **Grasp of the Undying**, **Demolish**, **Conditioning**, **Overgrowth**. Secondary **Precision** with **Triumph** and **Legend: Alacrity**, or **Inspiration** with **Biscuit Delivery** and **Cosmic Insight** vs ranged poke matchups.

## Key matchups

- **Darius:** Hard early bully — his Q heal, W slow, and R execute can shut you down levels 1-6. Farm at Q range, do not contest minions in melee, and save **W** for his apprehending E pull. Once you hit ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** you outscale him 1v1; until then, the lane is a survival drill.
- **Sion:** Free farm matchup. He stacks corpses and HP, you stack barrels and crit. Push him under tower with E barrels, deny him cannon minions for the passive. Avoid his point-and-click Q charge and you scale faster than him every game.
- **Fiora:** Worst lane matchup. Her **W** is a parry — a short window where she absorbs your next basic attack or ability, stuns you, and reflects any crowd control. Even a barrel slow can backfire. Never throw **Q** at her vital window (the colored point on her body she has to hit for her passive) — she will riposte (counter-strike) the moment your projectile lands. Farm under tower, ask for jungler help, and accept a CS deficit; you cannot 1v1 her until you have 3 items and she is behind.
- **Camille:** Dive matchup at level 6 (a dive is when an enemy walks under your tower, eats a few tower shots, and tries to kill you anyway). She locks you inside her ulti area cage. Her **E** stun ignores your barrel slow and her **R** isolates you. Buy ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** earlier than usual (4th item) and save Flash for her R cage, not for poke trades.
- **Malphite:** A hard counterpick — his point-and-click R has no skillshot tell and your **W** cannot cleanse it if it lands while you are mid-cast. Hold ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** as a panic build path and never take teamfights without vision on his angle.

## Power spikes & win conditions

- **Level 6:** First **Cannon Barrage** unlocks global pressure. You can flip a dragon fight with R from base, finish a fleeing enemy mid lane with the slow zone, or zone the bot lane out of an objective — all without leaving your wave.
- **Level 9 (Q maxed):** Parrrley reaches its full per-rank scaling. Mana cost drops to 30 and damage jumps; you can poke any matchup that does not have a parry or dodge tool and trade Q for Q in your favor.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completion (~ minute 14-16):** The biggest spike. Sheen procs every 1.5 seconds on Q, attack speed cuts barrel detonation time in half, and your HP pool finally lets you survive a one-shot attempt. This is when the lane flips from defensive to aggressive — you can engage trades you previously had to avoid.
- **![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge online (~ minute 26-30):** Crit Q on a chained 3-barrel cluster deletes any squishy in one second. Force objective fights at this point and stand at the edge of your team's frontline so a barrel chain lands on the enemy carries.

## Common mistakes

- **Wasting W as a panic cleanse on the first CC.** Save **Remove Scurvy** for the trade-defining ability — Camille E, Renekton W stun, Sett W stun. Burning it on a Lulu polymorph or a minor slow leaves you defenseless against the real threat.
- **Stacking barrels before Q rank 3.** Below rank 3 the barrel cooldown is too long for chain timing, so the second barrel often expires before the third is up. Farm with single barrels until level 5, then start practicing chains.
- **Using R selfishly without coordinating with the team.** Cannon Barrage is a global engage tool — an ability that initiates a teamfight from across the map; if you drop it on a 1v1 poke chase your team loses the 4v5 fight back home. Always ping intent, time it with the jungler's smite, and check the minimap before casting.
- **Buying defensive items before crit scaling.** ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** feels safe, but if you build it before ![Essence Reaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3508.png) **Essence Reaver** and ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** you give up the damage spike that makes Gangplank worth picking. Trust the W cleanse and the Trinity HP pool to survive the mid-game.
- **Forgetting to upgrade R via plunder.** Each Q kill on a unit grants gold; spend it in shop to upgrade Cannon Barrage (more damage, longer duration, healing zone). An un-upgraded R at minute 30 is a damage loss of about 30% on the same ult.

## Advanced tip

Practice the **barrel-jump combo**: place barrel A, then immediately place barrel B at maximum chain distance (just inside the linking radius), then auto-attack barrel A. The chain detonation primes barrel B; while B is mid-chain, place barrel C adjacent to B. With ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** attack speed and Q rank 5, you can sustain a continuous chain detonation pattern every 3-4 seconds, creating a rolling AOE zone the enemy team has to walk around. This is the difference between a Gangplank who deletes a backline and a Gangplank who pokes ineffectively from the side.
