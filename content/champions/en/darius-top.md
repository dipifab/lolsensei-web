---
title: "Darius Top Build & Guide — Patch 16.9"
slug: "darius-top"
language: "en"
patch: "16.9"
champion: "darius"
role: "top"
last_updated: "2026-04-29"
description: "Darius top lane guide for League of Legends Patch 16.9: juggernaut build path, Hemorrhage stack pressure, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Darius"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Juggernaut / Bruiser"
  abilities:
    - key: "P"
      name: "Hemorrhage"
      description: "Auto-attacks and damaging abilities apply a bleed stack on the target. At 5 stacks Darius enrages, gains big bonus AD for a window, and his bleed ticks for huge damage."
      dd_spell_id: "Darius_Passive"
    - key: "Q"
      name: "Decimate"
      description: "Wind-up axe swing in a wide ring. Hitting an enemy with the outer blade does full damage, applies a bleed stack, and heals Darius. The inner handle does half damage and no bleed."
      dd_spell_id: "DariusCleave"
    - key: "W"
      name: "Crippling Strike"
      description: "Empowered next basic attack: bonus damage and a heavy slow. Resets the auto-attack timer, so weave it between two normal autos to maximise damage per second."
      dd_spell_id: "DariusNoxianTacticsONH"
    - key: "E"
      name: "Apprehend"
      description: "Passive: flat armor penetration. Active: short-range axe hook that pulls and slows enemies in a cone. Your only gap-closer in the kit."
      dd_spell_id: "DariusAxeGrabCone"
    - key: "R"
      name: "Noxian Guillotine"
      description: "Leap to a champion and deal true damage that scales with the bleed stacks already on them. If it kills, the cooldown refreshes and you can recast on a new target."
      dd_spell_id: "DariusExecute"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap from Plated Steelcaps when the enemy team has heavy magic damage or chained CC (Lissandra, Malphite ult, Sett pull)"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "into stacked-armor frontlines (Malphite, Rammus, Shen) — every Q hit shaves their armor for the team"
    - dd_id: "3065"
      name: "Spirit Visage"
      against: "vs heavy AP teams when you need MR plus boosted self-healing on top of Death's Dance and R lifesteal"
    - dd_id: "6694"
      name: "Serylda's Grudge"
      against: "vs squads stacking armor and tenacity (Rammus, Tahm Kench, Malphite) — armor pen plus a slow on damaged targets"
    - dd_id: "3742"
      name: "Dead Man's Plate"
      against: "when you need extra Move Speed to walk down kiters (Quinn, Vayne top, Gnar) and reach R range"
  base_combo: ["E", "AA", "W", "Q", "AA", "R"]
  win_condition: "Stack Hemorrhage to 5, enrage for the bonus AD window, and finish with R for true damage. Convert early-lane kills into a Stridebreaker timing that snowballs side-lane 1v1s and dives bot."
  weakness: "Almost no mobility outside the short E pull and one-shot R leap. Long-range kiters, ranged tops, and champions that can keep distance (Quinn, Vayne, Teemo, Gnar) starve him of stacks and trades."
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
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["sett", "garen", "volibear"]
      archetype: "Short-range melee bruisers without a hard disengage"
      reason: "Darius wins extended trades because every auto and Q applies a bleed stack: by the time the opponent wants to disengage, the 5-stack enrage window already swung the trade in his favour."
    - examples: ["nasus", "kayle"]
      archetype: "Late-game scaling melees with weak early laning"
      reason: "Their first 6 levels are passive — Darius can E + W them off the wave repeatedly, killing them before they hit the items that make them scary."
    - examples: ["yasuo", "yone"]
      archetype: "Melee carries that fight inside Q range"
      reason: "They have to walk into Q-edge range to deal damage. Wind Wall blocks projectiles but not melee swings, so a clean Q outer-blade still applies the bleed stack and starts the snowball."
  counterpicks:
    - examples: ["quinn", "teemo", "vayne"]
      archetype: "Ranged or kiting tops"
      reason: "They sit outside E range and chip Darius's HP for free. Without a gap-closer beyond E (the short-range hook) or R (one-shot leap), he never lands stacks and loses lane prio."
    - examples: ["fiora", "camille"]
      archetype: "True-damage duelists with parry or shield"
      reason: "Fiora's W parries the Q knock-up and her Vitals (small marks she autos for true damage — damage that ignores armor and MR) bypass the HP build; Camille's R isolates Darius from his team and outscales him in extended fights."
    - examples: ["gnar", "kennen"]
      archetype: "Ranged tops with built-in CC"
      reason: "Both poke from outside Q range and have ranged stuns: Gnar's mega-form throw, Kennen's W stun. They keep Darius bleeding HP without ever entering his trade window."
---

## Overview

Darius is a **juggernaut** (a slow, immobile melee champion that hits very hard and tanks damage in a straight fight) built around stacking his passive **Hemorrhage** on a target. Every auto-attack and ability that connects with the **outer blade** of his Q applies one bleed stack. At **5 stacks** he enrages for a few seconds and gains massive bonus AD — that is the window where he kills or blows the opponent up. His kit gives him exactly one short gap-close (**E**, a 535-unit hook) and one long-cooldown leap (**R**, a true-damage execute that resets on kill). Outside those two tools he walks at base movement speed and dies to anyone who can keep distance.

His game plan is simple: **stick to the target until they die**. In lane, hit Q on the **outer edge** of the swing (not the inner handle — the handle does half damage and applies no bleed stack) to chip HP and heal back, set up an all-in with **E** (pull, knock-up, slow) once the enemy has 2-3 stacks already, and detonate with **W** + auto-attack chains. From mid-game on, **R** is a kill button: even at 0 stacks it does heavy **true damage** (damage that ignores both armor and MR — there is no defensive stat that reduces it), and the cooldown refreshes on every kill so a clean teamfight engagement can chain into 2 or 3 R recasts. He is one of the strongest **bruisers** (melee fighters that mix damage with survivability) at the moment a Stridebreaker comes online.

## Recommended Build

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. The HP-regen passive softens enemy poke (low-cost ranged damage chipping your HP without committing to a fight) until your level-2 power spike. Take ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** only into a melee lane you fully expect to all-in level 1-2 (e.g. mirror Darius).

**Core items (in order):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — first-item spike (the moment your damage and **stickiness** — your ability to stay glued on a target who tries to run away — jump the most). The active is a short dash that slows everything in a cone — exactly the second gap-closer (a tool to close distance fast) Darius is missing. AD, HP and ability haste (a stat that lowers ability cooldowns) all line up with what the kit needs.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — default boots when the enemy hurts you mostly with basic attacks. They reduce that damage in extended trades (back-and-forth exchanges of damage in lane).
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP plus a **lifeline shield**: when your HP drops below ~30%, an automatic shield triggers. That window is exactly when you need extra time to land R for the reset.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — turns **burst** AD (high damage delivered in 1-2 seconds, like an assassin combo) into a slow **bleed** (damage spread over the next few seconds instead of landing all at once). On kill, the remaining bleed gets cleansed — perfect synergy with R reset chains.
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — alternative first-item or fourth-item depending on your start: every first auto-attack on a champion in a fight crits and heals. Combined with W's auto-reset, that crit lands almost on demand.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap from ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** when the enemy team has heavy magic damage or chained **CC** (crowd control: stuns, roots, knockbacks — anything that locks you down so you cannot act). The tenacity (a stat that shortens CC duration on you) is critical against teams that can keep you off the carry.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — into stacked-armor frontlines (Malphite, Rammus, Shen). Every Q hit shaves armor stacks off the target for your whole team.
- ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — versus heavy **AP** (Ability Power, the stat behind magic damage). Gives MR (Magic Resistance) plus a healing-amp passive that boosts your Q heal, Death's Dance bleed-clean, and R lifesteal effects.
- ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — versus tank squads stacking armor and tenacity. Armor penetration plus a slow proc (a passive that triggers automatically on each hit) on every damaging ability — including Q, W and R.
- ![Dead Man's Plate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Dead Man's Plate** — when you need the Move Speed stack passive to walk down kiters (Quinn, Vayne top, Gnar) and reach R range before they reposition.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** is the default. Switch to ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** when the enemy team has three or more sources of CC or heavy magic damage.

**Skill order:** Max **Q** first (waveclear, healing, main damage source). Max **W** second (the slow duration scales per rank, the auto-reset is your sticky-tool). Take **E** points at 1 and 2 for the armor pen passive but keep maxing W; **E** maxes last because the active scaling is small. Take **R** at levels 6, 11, 16.

**Runes:** Primary **Precision** with the keystone (the main rune of the tree) **Conqueror** — a passive that ramps up bonus AD as you keep fighting champions, capped after 5 seconds of sustained combat. Pair with **Triumph** (small heal and gold burst on takedown), **Legend: Bloodline** (life-steal stacks on takedowns), and **Last Stand** (extra damage when below 60% HP). Secondary **Resolve** with **Bone Plating** (damage reduction on the next 3 hits after you take damage) plus **Overgrowth** (HP scaling with nearby minion deaths, perfect for a top laner that farms 8+ minions per wave). Stat shards: **Adaptive Force** + **Adaptive Force** + **Health Scaling**.

## Key matchups

- **Garen:** Skill matchup (the better player wins, regardless of pick). His **W** (a 4-second damage-reduction shield) negates a bleed stack, but his Q silence is dodgeable by walking sideways. Hit Q on the edge when his W is down; under R, you out-trade him if you have at least one item lead.
- **Sett:** Favorable lane. His Q-W combo is telegraphed (the wind-up is visible enough to react). E-pull him after he commits W, then stack bleed before he can disengage with a recast. Don't trade if he has Grit (his shield bar) full.
- **Fiora:** Hardest melee matchup. Her **W** is a parry (a brief shield that blocks and counters the next ability) — bait it with a Q before committing E. Her Vitals do true damage, so Death's Dance is mandatory; rush ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** only if she gets early kills.
- **Quinn / Teemo:** Very rough ranged matchup. They blind you (cancels your auto-attacks for a short time) or kite you out of range. **Freeze** the wave near your tower (stop pushing and keep the wave on your side of the lane) to deny them farm (the gold and XP from minions), and call your jungler — Darius cannot win this 1v1 without help.
- **Mordekaiser:** Even matchup decided by R timing. His R isolates you in a 1v1 realm; you outduel him at 5 stacks if you save E to pull him close after he uses his own E to root you. Buy ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** early if his R is killing you.

## Power spikes & win conditions

- **Level 2:** With Q + E unlocked, Darius has a real all-in window (a window where you can fully commit to a kill, with no fallback). E-pull, Q on the outer edge for damage and heal, auto-attack twice, and the enemy is already at 3 bleed stacks before they can respond.
- **Level 6:** First **R** unlocks. With even 3 stacks already on the enemy, R hits for enough true damage to kill from ~40% HP. Look for a level-6 all-in the moment your jungler shows top side.
- **![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) Stridebreaker completion (~ minute 11-13):** The active dash + slow gives Darius the second gap-closer his kit lacks. Force side-lane 1v1s and roam (leave your lane to help mid or bot) for picks (isolated kills on out-of-position enemies).
- **Two items + R online (~ minute 18-22):** Peak teamfight window. Walk into the back line (the squishy carries who stand behind their own tanks during a fight), R the lowest-HP target, recast on the next squishy. Two R resets can end a teamfight on their own.

## Common mistakes

- **Hitting Q on the inner handle.** The handle does half damage and applies **no bleed stack**. Step backward right before the swing animation finishes so the **outer blade** clips the target — that is the only Q hit that matters.
- **Using E as a movement tool.** E is your only reliable gap-closer; if you burn it to walk faster across the wave, you have nothing to engage with for the next 16-26 seconds. Save it to start the all-in.
- **Pressing R too early.** R deals true damage scaled per bleed stack. At 0 stacks the damage is mediocre; at 5 stacks it is one-shot territory. Build at least 3 stacks with autos and Q before pressing R, unless it is a finisher on a dying enemy.
- **Chasing kiters past Tier 2 turret.** Darius has no escape. Without R or E up, every step past turret is a free gank for the enemy jungler — and your slow base move speed means you cannot disengage cleanly.
- **Stacking pure tank items.** Darius scales with **AD**, not HP-only. Building Sunfire + Warmog's flat out kills your damage; you stop one-shotting squishies and become a slow walking minion. Stick to the AD-bruiser core.

## Advanced tip

Practice the **W animation cancel**: Crippling Strike resets the auto-attack timer, which means you can fire an auto, immediately press W, and fire the empowered W-auto right after — two full-damage hits in the time of one. The same trick works in reverse: cast W *during* an ongoing Q wind-up and the empowered auto lands the moment Q resolves. In a real game, the highest-impact use is in the 5-stack enrage window: AA → W → AA → Q-edge chains four bleed-applying hits in under 2 seconds, which is enough to kill almost any squishy from 70% HP. Test it in a custom game on a target dummy until the rhythm is automatic.
