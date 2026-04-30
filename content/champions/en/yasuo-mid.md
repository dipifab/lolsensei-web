---
title: "Yasuo Mid Build & Guide — Patch 16.9"
slug: "yasuo-mid"
language: "en"
patch: "16.9"
champion: "yasuo"
role: "mid"
last_updated: "2026-04-29"
description: "Yasuo mid lane guide for League of Legends Patch 16.9: starter kit, AD crit build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Yasuo"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Fighter / Skirmisher"
  abilities:
    - key: "P"
      name: "Way of the Wanderer"
      description: "Yasuo gets double critical strike chance from items, but his crits deal half their normal bonus damage. He also builds a shield while moving that pops on the next hit from a champion or monster."
      dd_spell_id: "Yasuo_Passive"
    - key: "Q"
      name: "Steel Tempest"
      description: "Stab in a line, treated as a basic attack. Two stacks turn the next Q into a tornado that knocks airborne (knock-up = lifts the target into the air, stunning them briefly)."
      dd_spell_id: "YasuoQ1Wrapper"
    - key: "W"
      name: "Wind Wall"
      description: "Drops a wall that blocks every enemy projectile crossing it for 4 seconds. Eats Caitlyn Q, Lux Q, Jhin W, Ashe R — but not melee or instant point-and-click abilities."
      dd_spell_id: "YasuoW"
    - key: "E"
      name: "Sweeping Blade"
      description: "Targeted dash through any enemy unit (minion, monster, champion). Cannot dash through the same target twice in a few seconds. Cast Q while dashing for an AOE tornado-shaped Q."
      dd_spell_id: "YasuoE"
    - key: "R"
      name: "Last Breath"
      description: "Blinks to any airborne enemy champion, holds them up longer, and grants armor penetration on crits afterward. Needs a Q tornado, ally knock-up, or R from teammates to land."
      dd_spell_id: "YasuoR"
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
    - { dd_id: "6673", name: "Immortal Shieldbow" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "3078"
      name: "Trinity Force"
      against: "first item alternative when ahead in lane: faster waveclear, sticky movement, and Q on-hit-style proc enable aggressive E-Q dives"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "vs heavy healing comps (Soraka, Aatrox, Dr. Mundo) — applies Grievous Wounds (cuts healing on the target) the moment you tag them"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "vs assassin focus or burst comps (Zed, LeBlanc) — the rez gives you a free reset to Q-tornado the team that just blew everything on you"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs heavy AP burst (Syndra, Veigar, Vladimir) — magic shield + lifesteal on low HP keeps you alive long enough to crit them down"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Stack two Q charges, dash with E to land the tornado knock-up, then R the airborne target. Mid-game roam side lanes after Immortal Shieldbow and pick squishies on ally knock-ups."
  weakness: "Ranged poke before level 6 keeps you out of E range. Point-and-click CC (Annie, Lissandra, Malzahar) and grounding (Cassiopeia W, Singed E) disable your dash entirely."
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
      - { dd_id: 8242, name: "Unflinching", icon_path: "perk-images/Styles/Sorcery/Unflinching/Unflinching.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "jhin", "ashe", "ezreal"]
      archetype: "Projectile-heavy ADCs and artillery mages"
      reason: "Wind Wall blocks every meaningful damage spell they cast — Caitlyn Q, Jhin W, Ashe R, Ezreal Q. After level 6 you walk through their poke and Q-R them once allies set up a knock-up."
    - examples: ["yone", "irelia", "tryndamere"]
      archetype: "Melee duelists without long-range disengage"
      reason: "Yasuo's E lets him stick on melee bruisers indefinitely; once he reaches Immortal Shieldbow the lifesteal trade flips in his favor and they lack the kiting tools to escape."
    - examples: ["azir", "zilean", "swain"]
      archetype: "Stationary mages with telegraphed casts"
      reason: "Their wave-clear and damage rely on slow projectiles or zone abilities he can wall or sidestep with E. Once he hits 6 a single jungle gank with knock-up is enough to delete them."
  counterpicks:
    - examples: ["annie", "lissandra", "malzahar"]
      archetype: "Point-and-click hard CC mages"
      reason: "Their stun, root, or suppress is targeted (no projectile to wall, no skillshot to dodge), which means they can lock down Yasuo before he stacks Q or finds an E target — and his R needs an airborne enemy he cannot create alone."
    - examples: ["pantheon", "renekton", "pyke"]
      archetype: "Early-level all-in bruisers"
      reason: "They beat Yasuo flat in short trades before he hits level 6 and Immortal Shieldbow. A single Pantheon W stun or Renekton W stun cuts off his dash window and resets the trade in their favor."
    - examples: ["cassiopeia", "singed", "morgana"]
      archetype: "Grounding or zoning mages"
      reason: "Cassiopeia W and Singed E ground (disable dashes) Yasuo, deleting his E mobility entirely. Morgana Q + W locks him out of any tornado follow-up and her E shields her team from Q poke."
---

## Overview

Yasuo is a melee skirmisher who fights by chaining dashes through minions and finishing fights with airborne setups. His kit is built around three loops: stack two **Steel Tempest (Q)** for a tornado knock-up (an attack that lifts the target into the air, briefly stunning them), use **Sweeping Blade (E)** to dash through any nearby unit, and follow up airborne enemies with **Last Breath (R)** to blink in and burst them down. The trade-off is real: he is one of the most ability-cooldown-dependent melees in the game, and without a target to dash to, his mobility goes to zero.

His game plan is to survive the early lane (especially against ranged poke), reach **Immortal Shieldbow** + **Berserker's Greaves**, and then snowball through team fights (snowball = an early lead that grows into more kills, gold, and items) where allies provide the knock-ups he needs for **R**. Skill expression sits in two places: timing **Wind Wall (W)** to eat the single most important enemy projectile of the fight (Caitlyn Q, Ashe R, Lux Q, Jhin W), and managing his crit cap — Yasuo's passive doubles his critical strike chance from items, so even one Infinity Edge already pushes him near the 100% crit cap. Buying more crit chance after that is wasted gold; the build pivots into raw AD and lifesteal instead.

## Recommended Build

**Starting items:** Doran's Blade + 1 Health Potion. The Doran's gives lifesteal (small heal on every auto-attack) and a bit of AD, which scales with the AD-stacking build.

**Core items (in order):**

1. ![Immortal Shieldbow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6673.png) **Immortal Shieldbow** — first-item default. Crit chance, AD, lifesteal, and an HP-threshold passive (a shield that triggers when you drop below ~30% HP). The shield is the single biggest reason Yasuo can survive the all-in (full-commit kill attempt) trades that his playstyle forces.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed boots. Mercury's Treads only if the enemy team has 3+ hard CC sources you cannot Wind Wall (point-and-click stuns, suppresses).
3. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — your biggest damage spike. With the **Way of the Wanderer** passive (which doubles crit chance from items), one Shieldbow + IE already puts you near the 100% crit cap. IE then upgrades each crit's bonus damage, fully unlocking the half-effective crit penalty Yasuo carries.
4. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — pure AD, big lifesteal, and an overheal shield. Past three items you cannot stack more crit chance (you are at the cap), so the build pivots into raw AD scaling instead.

**Situational items:**

- ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — first-item swap when you are ahead in lane and want sticky pressure (slow + movement bonuses that make it hard for the enemy to escape). Slow-on-hit, attack speed, and a Spellblade proc (a bonus burst of damage on the auto-attack right after a spell cast) on **Q** make all-in dives more reliable, but you sacrifice the safety-net shield of Shieldbow.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — against heavy healing comps (Soraka, Aatrox, Dr. Mundo). Applies Grievous Wounds (cuts healing on the target) for a few seconds whenever you damage them.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — against assassin focus or burst (Zed, LeBlanc). The revive gives you a free reset to Q-tornado the team that just used everything on you.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — against heavy AP burst (Syndra, Veigar, Vladimir). Magic shield + lifesteal under low HP keeps you alive long enough to crit them down.

**Boots:** Berserker's Greaves is default. Mercury's Treads is the swap when the enemy team has 3+ hard CC sources you cannot wall (a Wind Wall blocks projectiles only; targeted stuns and suppresses still land).

**Skill order:** Max **Q** first (main DPS and the tornado is your only solo knock-up), **E** second (dash damage and reduced cooldown), **W** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Precision** with **Conqueror**, **Triumph**, **Legend: Bloodline**, **Coup de Grace**. Conqueror stacks fastest on Yasuo because every Q, E, and auto-attack ticks it. Secondary **Resolve** with **Bone Plating** and **Unflinching** for survivability in melee trades. **Lethal Tempo** is the alternative keystone for a more attack-speed-focused playstyle and even faster Q cooldowns — pick Conqueror against tankier teams, Lethal Tempo into squishy lanes.

## Key matchups

- **Annie:** Hard counter. Her stun is point-and-click (no skillshot to wall), and at level 6 her **Tibbers** R deletes you before you can stack Q. Stay behind minions, never burn **E** offensively pre-6, and ask your jungler for an early gank.
- **Zed:** Skill matchup. Block his **Q** shuriken with **Wind Wall** to win the trade. Buy ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** as your fourth item if he is fed.
- **Yone:** Mirror melee skirmisher. Whoever lands the tornado knock-up first wins the all-in. Save **E** to dash through your minion behind you (escape) instead of through Yone (commit).
- **Caitlyn (when bot rotates mid):** Her **Q** is wallable, her **R** is wallable, even her **W** trap reveal projectile is wallable — Yasuo is one of the cleanest counters to her at the cost of the lane setup.
- **Lissandra:** Hard counter. Her **E** is point-and-click and her **R** is also point-and-click — neither can be walled. She can lock you down before you stack Q. Buy ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** to soak the burst.

## Power spikes & win conditions

- **Level 2:** With Q + E you can E-through-minion + Q for a fast trade. Step out before the enemy can return-trade — at level 2 you have no reset.
- **Level 6:** **Last Breath** unlocks. If your jungler has any knock-up (Vi Q, Sejuani Q, Nautilus auto-passive), you have a guaranteed kill setup mid-river.
- **Immortal Shieldbow completion (~ minute 12-14):** Lane phase flips. The HP-threshold shield (the passive that triggers when you drop low) lets you commit to all-ins you would have lost without it. Roam bot side as soon as the wave is shoved.
- **Infinity Edge online (~ minute 22-26):** You hit the crit cap and your auto-attacks delete squishies in 2-3 hits. Force objective fights and look for back line dives (jumping past the front line tanks to kill the carry behind them) — at this point allies bait the engage and you E-flank from the side.

## Common mistakes

- **Burning E offensively pre-6 in a losing matchup.** Without **R** you have no follow-up, and once you have dashed to a target the same target gets a per-target cooldown on your **E** — you cannot dash back the way you came. Use **E** through the minion behind you for a defensive reset instead.
- **Stacking crit chance past Infinity Edge.** Yasuo's passive doubles crit chance from items (the "crit cap" — once you hit 100% effective crit, more crit chance is wasted gold). After Shieldbow + IE you are already near 100%; the build pivots into raw AD (Bloodthirster, Mortal Reminder) instead of more crit items like Phantom Dancer.
- **Wasting Wind Wall on a single auto-attack.** Wind Wall has a long cooldown. Save it for the one fight-defining projectile (Ashe R, Caitlyn ult, Lux Q for setup) — never blow it to block a Doran's Ring auto-attack.
- **R-ing without setup.** **Last Breath** needs an airborne target. If your team has no knock-ups and your Q tornado is on cooldown, you cannot use R. Pick teams with engage (Malphite, Nautilus, Vi, Sejuani) when you queue Yasuo, or accept that you carry the knock-up burden alone.
- **Not punishing return-cooldowns.** After your enemy uses their main escape (Zed W, LeBlanc W, Akali E), you have a 10-15 second window where they have no mobility. That is the only window where Yasuo wins the all-in — recognize it and commit instead of waiting passively.

## Advanced tip

Practice the **double-Q-tornado** flash combo. Two Q stacks make the next Q a tornado; if you E-dash through a minion and then immediately Flash mid-dash, your tornado lands at Flash range — far further than enemies expect to be in danger. Follow with R the moment they go airborne. This is the highest-skill Yasuo execution and turns a 50/50 lane into a guaranteed pickoff (eliminating an isolated enemy outside of a team fight). The trade-off: it spends Flash, so only commit when the kill is certain or it secures an objective like Drake.
