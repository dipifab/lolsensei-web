---
title: "Renekton Top Build & Guide — Patch 16.9"
slug: "renekton-top"
language: "en"
patch: "16.9"
champion: "renekton"
role: "top"
last_updated: "2026-04-29"
description: "Renekton top lane guide for League of Legends Patch 16.9: Fury management, lane bully build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Renekton"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Fighter / Lane Bully"
  abilities:
    - key: "P"
      name: "Reign of Anger"
      description: "Renekton builds a Fury bar from auto-attacks and abilities (gains more when low HP). At 50+ Fury his next Q, W or E becomes empowered with a stronger effect."
      dd_spell_id: "Renekton_Passive"
    - key: "Q"
      name: "Cull the Meek"
      description: "AOE blade swing around Renekton: damages and heals per target hit. With 50+ Fury both damage and heal are amplified — main lane sustain tool."
      dd_spell_id: "RenektonCleave"
    - key: "W"
      name: "Ruthless Predator"
      description: "Empowered next auto-attack: two strikes plus a 0.75s stun. With 50+ Fury it becomes three strikes, longer 1.5s stun, and destroys enemy shields."
      dd_spell_id: "RenektonPreExecute"
    - key: "E"
      name: "Slice and Dice"
      description: "Dash forward. If it hits anything, it can be recast within a few seconds to dash back. The empowered recast deals bonus damage and shreds armor."
      dd_spell_id: "RenektonSliceAndDice"
    - key: "R"
      name: "Dominus"
      description: "Transforms into Tyrant form: bonus max HP and a magic-damage aura around him for several seconds. Also generates Fury passively while active."
      dd_spell_id: "RenektonReignOfTheTyrant"
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
    - { dd_id: "3071", name: "Black Cleaver" }
  situational_items:
    - dd_id: "6610"
      name: "Sundered Sky"
      against: "alternative first item into a melee bully matchup where you want a guaranteed crit-heal on the first auto of every fight (Sett, Garen)"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap from Plated Steelcaps when the enemy team has heavy magic damage or chained CC (Lissandra, Malphite ult, Sett pull)"
    - dd_id: "3065"
      name: "Spirit Visage"
      against: "vs heavy AP teams when you need MR plus boosted self-healing on top of Death's Dance and Q heals"
    - dd_id: "6694"
      name: "Serylda's Grudge"
      against: "vs squads stacking armor and tenacity (Rammus, Tahm Kench, Malphite) — armor pen plus a slow on damaged targets"
    - dd_id: "3742"
      name: "Dead Man's Plate"
      against: "when you need extra Move Speed to walk down kiters (Quinn, Vayne top, Gnar) and stick to backline targets"
  base_combo: ["E", "W", "AA", "Q", "E"]
  win_condition: "Snowball lane with the level 2-3 all-in: empowered W stun into Q for AOE damage and heal, then dash back with E. Convert the early lead into a Stridebreaker timing that wins side-lane 1v1s and dives bot."
  weakness: "Power drops off hard after 25 minutes if behind. Long-range kiters and ranged tops (Quinn, Vayne, Teemo, Gnar) starve him of Fury and trades; without Fury his abilities feel weak and the lane bully fantasy collapses."
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
    - examples: ["nasus", "kayle", "kassadin"]
      archetype: "Late-game scalers with weak early laning"
      reason: "Their first 6 levels are passive farm phases. Renekton's level 2-3 all-in (empowered W stun + Q + E reposition) shoves them off the wave repeatedly, denying the items they need to scale."
    - examples: ["yasuo", "yone", "irelia"]
      archetype: "Melee carries that need free farm to come online"
      reason: "Renekton out-trades them at level 2-3 before they hit their item spike. Empowered W stuns through their dashes, and Q heal undoes their poke damage in one swing."
    - examples: ["malphite", "ornn"]
      archetype: "Slow tanks without strong early damage"
      reason: "They cannot punish Renekton's short-range trades. He stacks Fury on minions, walks up with empowered W ready, and chunks their HP every time their abilities go on cooldown."
  counterpicks:
    - examples: ["quinn", "teemo", "vayne"]
      archetype: "Ranged or kiting tops"
      reason: "They sit outside W range and chip Renekton's HP for free. He has only one short dash (E) to close: once it is on cooldown, he eats poke without any way to retaliate, and Fury never builds."
    - examples: ["fiora", "camille"]
      archetype: "Duelists who scale past the early lane"
      reason: "Fiora's W parries empowered W stun outright; Camille's E hookshot lets her disengage Renekton's E + Q burst window. Both outscale him from minute 20 onward and punish his weak late-game."
    - examples: ["gnar", "kennen"]
      archetype: "Ranged tops with built-in CC"
      reason: "Both poke from outside Q range and have ranged stuns: Gnar's mega-form throw, Kennen's W stun. They keep Renekton bleeding HP without ever entering his trade window."
---

## Overview

Renekton is a **lane bully** (a champion designed to dominate the laning phase, then snowball that lead into the rest of the game) built around his **Fury** bar — the yellow resource that builds up from auto-attacks and abilities. Hit **50 Fury** and his next Q, W or E becomes **empowered** with a much stronger effect: bigger heal on Q, longer stun on W, armor shred on E. The whole kit is short-range melee, with one dash forward + dash back (**E**) as his only real mobility tool. Renekton wins or loses based on whether he can convert his level 2-3 power spike into kills before scaling champions come online.

His game plan is direct: **farm Fury on the wave, walk up at 50+ Fury with empowered W ready, and trade**. The signature combo is **E in → empowered W stun → auto-attack → Q for AOE damage and heal → E back out** — a full burst of HP traded for a chunk of theirs, with you walking away healthier. From mid-game on, **Stridebreaker** plus **R (Dominus)** turns him into a sticky target killer: R gives him bonus max HP and a damage aura while active, and the active dash from Stridebreaker covers the gap his short E can't reach. After 25 minutes, if he is not ahead, he falls off — which is why winning the early lane is non-negotiable.

## Recommended Build

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. The HP-regen passive softens enemy poke (low-cost ranged damage chipping your HP without committing to a fight) until your level-2 power spike. Take ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** only into a melee lane you fully expect to all-in level 1-2 (e.g. mirror Renekton or Sett).

**Core items (in order):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — first-item spike (the moment your damage and **stickiness** — your ability to stay glued on a target who tries to run away — jump the most). The active is a short dash that slows everything in a cone — exactly the second gap-closer (a tool to close distance fast) Renekton is missing once E is on cooldown. AD, HP and ability haste (a stat that lowers ability cooldowns) all line up with what the kit needs.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — default boots when the enemy hurts you mostly with basic attacks. They reduce that damage in extended trades (back-and-forth exchanges of damage in lane).
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP plus a **lifeline shield**: when your HP drops below ~30%, an automatic shield triggers. That window is exactly when you need extra time to land empowered W and dash back out with E.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — turns **burst** AD (high damage delivered in 1-2 seconds, like an assassin combo) into a slow **bleed** (damage spread over the next few seconds instead of landing all at once). The cleanse-on-takedown effect chains nicely with R's HP buffer in teamfights.
5. ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — every Q, empowered E and auto shaves an armor stack off the target. Stacks fast on AOE Q hits, and the team-wide armor reduction makes follow-up damage from your team massive.

**Situational items:**

- ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — alternative first-item or fourth-item in a melee bully matchup where you want a guaranteed crit-heal on the first auto of every fight (Sett, Garen mirror lanes). Combined with empowered W's auto-attack reset trigger, that crit lands almost on demand.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap from ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** when the enemy team has heavy magic damage or chained **CC** (crowd control: stuns, roots, knockbacks — anything that locks you down so you cannot act). The tenacity (a stat that shortens CC duration on you) is critical against teams that can keep you off the carry.
- ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — versus heavy **AP** (Ability Power, the stat behind magic damage). Gives MR (Magic Resistance) plus a healing-amp passive that boosts Q heals, Death's Dance bleed-cleanse, and any lifesteal you stack later.
- ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — versus tank squads stacking armor and tenacity. Armor penetration plus a slow proc (a passive that triggers automatically on each hit) on every damaging ability — including Q, W and the empowered E recast.
- ![Dead Man's Plate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Dead Man's Plate** — when you need the Move Speed stack passive to walk down kiters (Quinn, Vayne top, Gnar) and reach the backline (the squishy carries who stand behind their own tanks during a fight) before they reposition.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** is the default. Switch to ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** when the enemy team has three or more sources of CC or heavy magic damage.

**Skill order:** Max **Q** first — it is your main damage source, sustain tool, and Fury generator on the wave. Max **W** second (the stun duration scales per rank, the empowered three-hit version is your kill button). Max **E** last because the active scaling is small — the dash-and-recast utility is what matters, not the rank. Take **R** at levels 6, 11, 16.

**Runes:** Primary **Precision** with the keystone (the main rune of the tree) **Conqueror** — a passive that ramps up bonus AD as you keep fighting champions, capped after 5 seconds of sustained combat. It rewards exactly Renekton's playstyle of sticking on a target through a full Fury cycle. Pair with **Triumph** (small heal and gold burst on takedown), **Legend: Bloodline** (life-steal stacks on takedowns), and **Last Stand** (extra damage when below 60% HP — overlaps with Fury's low-HP bonus). Secondary **Resolve** with **Bone Plating** (damage reduction on the next 3 hits after you take damage) plus **Overgrowth** (HP scaling with nearby minion deaths, perfect for a top laner that farms 8+ minions per wave). Stat shards: **Adaptive Force** + **Adaptive Force** + **Health Scaling**. Press the Attack is an acceptable swap into squishy lanes (Quinn, Kennen) where you want extra burst on the first 3-hit combo, but Conqueror is the safer default.

## Key matchups

- **Garen:** Skill matchup (the better player wins, regardless of pick). His **W** (a 4-second damage-reduction shield) eats your empowered W damage if you fire it at the wrong time — bait W out by walking up with 0 Fury, then back off and engage at 50+ once the shield is down. Q on the AOE swing every minion wave to keep your HP topped up.
- **Sett:** Favorable lane. His Q-W combo is telegraphed (the wind-up is visible enough to react). E-dash in after he commits W, stun him with empowered W mid-cast, Q for the heal, then E back out before his Grit shield fills again.
- **Fiora:** Hardest melee matchup. Her **W** is a parry (a brief shield that blocks and counters the next ability) — bait it with a normal W before committing to empowered W stun. Her Vitals do true damage (damage that ignores armor and MR — there is no defensive stat that reduces it), so ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** is mandatory; rush ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** only if she gets early kills.
- **Quinn / Teemo:** Very rough ranged matchup. They blind you (cancels your auto-attacks for a short time) or kite you out of range. **Freeze** the wave near your tower (stop pushing and keep the wave on your side of the lane) to deny them farm (the gold and XP from minions), and call your jungler — Renekton cannot win this 1v1 without help.
- **Darius:** Coin-flip lane between two melee bullies. You out-trade him at level 2 if you E in and stun mid-Q with empowered W; he out-trades you at level 6+ when his R passive kicks in. Build ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** first into him for the heal-on-crit synergy with empowered W's auto-reset.

## Power spikes & win conditions

- **Level 2:** Q + E unlocked. Renekton has a real all-in window (a window where you can fully commit to a kill, with no fallback). E in, empowered W if your Fury is already at 50, Q for the AOE damage and heal, then E back out — the enemy is at 40-50% HP before they can respond.
- **Level 3:** All four basics unlocked. With 50+ Fury banked from minion farming, the empowered W stun + Q combo deletes ~60% of a squishy enemy's HP. This is the strongest level in the entire game for Renekton — force a fight here.
- **Level 6:** First **R (Dominus)** unlocks. The bonus max HP turns a losing trade into a winning one; cast R the moment HP drops below 50% and the buffer plus the damage aura usually flips the kill.
- **![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) Stridebreaker completion (~ minute 11-13):** The active dash + slow gives Renekton the second gap-closer his kit lacks once E is on cooldown. Force side-lane 1v1s and roam (leave your lane to help mid or bot) for picks (isolated kills on out-of-position enemies).

## Common mistakes

- **Spending Fury the moment it hits 50.** Empowered W is a kill button, not a wave-clear tool. Save it for trades or all-ins; firing it on minions wastes the strongest single ability in your kit.
- **Using E to escape pre-engage.** E is a dash forward + recast back, but the recast only works if the first dash hits something. If you E into open space to flee, you have nothing to dash back from — you're just stuck in their face. Save it for the all-in.
- **Building pure tank items.** Renekton scales with **AD**, not HP-only. Building Sunfire + Warmog's flat out kills your damage; you stop bursting squishies and become a slow walking minion. Stick to the AD-bruiser core (Stridebreaker → Sterak's → Death's Dance → Black Cleaver).
- **Chasing kiters past Tier 2 turret.** Renekton has no escape once E is used. Without R or E up, every step past turret is a free gank for the enemy jungler — and his slow base move speed means he cannot disengage cleanly.
- **Ignoring Fury management.** If you walk up with 0 Fury, your trades are weak and predictable. Always check the Fury bar before engaging — at minimum 50 for empowered W, ideally with Q also ready to chain.

## Advanced tip

Practice the **double-empower** sequence: in a single trade you can usually fire **two** empowered abilities back-to-back if you manage Fury carefully. Walk into lane with 50 Fury banked, fire empowered W (consumes 50, applies stun + 3 hits, generates roughly 30 Fury back from the strikes), auto-attack twice on the stunned target (each auto pumps another 5 Fury), then by the time the stun ends you are back at 50+ and can fire **empowered Q** for the bigger heal — turning a one-cycle trade into a two-cycle trade where you take almost no HP damage. The same trick works with empowered E recast for the armor shred when chasing a fleeing target. The skill expression is purely Fury bookkeeping: count auto-attacks, count Q hits, and never let the bar overflow past 100 (it caps and any further generation is wasted).
