---
title: "Aatrox Top Build & Guide — Patch 16.9"
slug: "aatrox-top"
language: "en"
patch: "16.9"
champion: "aatrox"
role: "top"
last_updated: "2026-04-29"
description: "Aatrox top lane guide for League of Legends Patch 16.9: bruiser build path, Q edge mechanics, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Aatrox"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Fighter / Drain Tank"
  abilities:
    - key: "P"
      name: "Deathbringer Stance"
      description: "Periodically, his next basic attack deals bonus magic damage scaling with target max HP and heals Aatrox. Track the indicator on his portrait."
      dd_spell_id: "Aatrox_Passive"
    - key: "Q"
      name: "The Darkin Blade"
      description: "Greatsword slam in three sequential casts, each a different shape. Hitting the outer edge knocks up enemies briefly and deals 25% bonus damage. Aatrox's main damage source."
      dd_spell_id: "AatroxQ"
    - key: "W"
      name: "Infernal Chains"
      description: "Chain projectile that slows the first target hit. If a champion or large monster does not leave the impact zone in time, they are pulled back and damaged again."
      dd_spell_id: "AatroxW"
    - key: "E"
      name: "Umbral Dash"
      description: "Passive: heals for a portion of damage dealt to champions. Active: short dash, usable mid-Q-windup to align edge hits or kite."
      dd_spell_id: "AatroxE"
    - key: "R"
      name: "World Ender"
      description: "Demonic form: bonus AD, Move Speed decaying over the duration, and increased self-healing. Fears nearby enemy minions. Takedowns extend the duration."
      dd_spell_id: "AatroxR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3071", name: "Black Cleaver" }
    - { dd_id: "3053", name: "Sterak's Gage" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap from Plated Steelcaps when the enemy team has heavy magic damage or strong CC chains (e.g. Lissandra, Sett, Malphite ult)"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs heavy AP burst (Syndra, Vex, Fizz mid swapping top): the spell shield blocks one big magic hit and saves your engage"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "vs squads with two strong physical AD dealers (Yasuo + Caitlyn): turns burst AD into a slow bleed so E lifesteal can heal it back"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "vs single-target lockdown that one-shots your engage (Morgana Q, Blitzcrank hook, Lissandra R)"
    - dd_id: "3155"
      name: "Hexdrinker"
      against: "rush this component instead of finishing Eclipse if you are bleeding HP to an AP top (Vladimir, Rumble) and need MR before backing"
  base_combo: ["W", "AA", "Q1", "E", "Q2", "Q3"]
  win_condition: "Land Q edges to knock up, chain W to lock targets in place, use E to reset position. Convert Eclipse + Black Cleaver lead into side-lane 1v1 wins."
  weakness: "All damage rides on Q timing. Miss the edge and the trade is lost. Hard CC, long-range kiters, and true-damage duelists (Fiora, Camille) tear his sustain apart."
matchup_draft:
  pick_into:
    - examples: ["nasus", "yorick"]
      archetype: "Immobile melee fighters without engage tools"
      reason: "Aatrox wins trades before level 6 with Q edge hits; W chains pin them long enough that they cannot stack their passives safely or escape an all-in."
    - examples: ["ryze", "vladimir"]
      archetype: "Short-range mages who must walk in to deal damage"
      reason: "They have to step into melee for full output; Aatrox punishes the gap with W slow plus a Q edge knock-up before they can disengage."
    - examples: ["kayle", "k-sante"]
      archetype: "Weak early-laners that spike late"
      reason: "Aatrox has one of the best early-game laning curves; he can kill or deny their XP before they reach the late-game items that make them scary."
  counterpicks:
    - examples: ["fiora", "camille"]
      archetype: "True-damage duelists with parry or shield"
      reason: "Fiora's W parries the Q knock-up and her Vitals (marks on Aatrox she autos for true damage — damage that ignores armor and MR) bypass the drain tank build; Camille's E adds more true damage on top."
    - examples: ["quinn", "teemo"]
      archetype: "Long-range or invisibility-based kiters"
      reason: "They stay outside Q range and break Aatrox's wind-ups with blind or vault (Quinn's E knockback dash); he has no way to close the gap without burning both E and Flash."
    - examples: ["malphite", "maokai"]
      archetype: "Tanks with instant hard CC (no skill aim)"
      reason: "Their stuns and roots are point-and-click — no projectile to dodge. They interrupt Q recasts mid-animation, and once Aatrox is locked down he cannot heal back through E lifesteal."
---

## Overview

Aatrox is a melee fighter (a hand-to-hand champion that fights at close range) built around a three-cast greatsword **Q**. Each cast covers a different shape, and hitting the **outer edge** of the swing — not the inner zone — does two extra things: it briefly **knocks up** the target (sends them airborne for a moment so they cannot act) and deals 25% bonus damage. His kit also has a slow + chain pull (**W**), a short **dash** (**E**: a quick burst of movement, usable during the Q animation to reposition), and a demonic-form ultimate (**R**: a long-cooldown buff). He is a **drain tank**: not a real tank, but a fighter who survives by healing damage back through E's **lifesteal** (a percentage of damage you deal that returns to you as health) instead of stacking armor or HP.

His game plan is short to describe and demanding to execute: in lane, walk up with **W** ready as the lock-down (the slow that nails the enemy in place), then swing **Q** so the **edge** of the blade catches the slowed target. Use **E** to slide into the right position for the second and third Q casts. From mid-game on, look for side-lane 1v1s and 2v2 skirmishes (mini-fights between two players per side, away from the main team fight). Aatrox is one of the strongest **bruisers** (champions that mix damage and durability) in the game once his R is up and at least one item is online.

## Recommended Build

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. The HP-regen passive on Doran's Shield carries Aatrox through the early levels when his sustain (his ability to heal himself back during a fight) is weakest.

**Core items (in order):**

1. ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — first-item spike (the moment your damage jumps the most). Gives **AD** (Attack Damage, the stat behind your basic-attack and Q damage), **omnivamp** (lifesteal that works on every kind of damage you deal, not just basic attacks), and **ability haste** (which lowers the cooldown of your abilities). Its passive triggers on the second hit, and Q1 + Q2 land them in sequence.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — default boots when the enemy hurts you mostly with basic attacks. They reduce that damage in extended trades (back-and-forth exchanges of damage in lane).
3. ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — every Q hit shaves off a stack of the enemy's **armor** (the stat that reduces physical damage). It also gives HP for survivability and ability haste for more Q rotations per fight.
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP plus a **lifeline shield**: when your health drops below a threshold (around 30%), an automatic shield triggers. That window is exactly when you need extra time so E lifesteal can heal you back to safety.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap from ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** when the enemy team has heavy magic damage or chained **CC** (crowd control: stuns, roots, knockbacks — anything that locks you down so you cannot act). Examples: Lissandra root, Sett pull, Malphite ultimate.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — versus heavy **AP** burst (AP = ability power, the stat behind magic damage; burst = high damage delivered in 1-2 seconds). The Lifeline passive blocks one big magic hit, often the difference between dying mid-engage (mid-fight-initiation) and surviving long enough to land R.
- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — versus squads with two strong physical (AD) damage dealers (e.g. Yasuo + Caitlyn). It turns burst into a slow **bleed** (damage spread over the next few seconds instead of landing all at once), giving E lifesteal time to heal it back.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — versus single-target hard CC that one-shots your engage (the Q from Morgana, the hook from Blitzcrank, the R from Lissandra). It carries a one-time spell shield that absorbs the lockdown ability so you can commit (fully go in) instead of dodging at max range.
- ![Hexdrinker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3155.png) **Hexdrinker** — early-game **MR** (Magic Resistance, the stat that reduces magic damage) component. Buy it before finishing ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** if an AP top laner like Vladimir or Rumble is winning lane.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** is the default. Switch to ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** when the enemy team has three or more sources of CC or heavy magic damage.

**Skill order:** Max **Q** first (it is your only damage), **E** second (the lifesteal scales per rank, so more dashes per fight), **W** last. Take **R** at levels 6, 11, 16.

**Runes:** Runes are passive effects you choose before the game from a "tree" of options, each tree built around a different style. Aatrox uses **Precision** as the primary tree (the one built around sustained damage from basic attacks) with the keystone (the main rune of the tree) **Conqueror** — a passive that ramps up your damage as you keep fighting — plus **Triumph** (a small heal on takedowns), **Legend: Tenacity** (Tenacity = stat that shortens the duration of CC effects on you), and **Last Stand** (more damage when low HP). As secondary tree, take **Resolve** (the durability tree) with **Second Wind** + **Revitalize** for HP sustain in lane, or **Inspiration** with **Magical Footwear** (free boots at 12 minutes) and **Cosmic Insight** (extra ability haste) if you expect a quiet lane.

## Key matchups

- **Fiora:** Hardest matchup. Her **W** is a parry (a brief shield that blocks and counters one ability) that cancels your Q knock-up. Bait the parry — force her to use it on a Q1 — before committing the third Q. Avoid long trades: do quick Q1 + E in/out, and never commit Q3 unless her W is on cooldown.
- **Darius:** Skill matchup (the player who plays better wins, regardless of counter picks). Stay outside the range of his **E** pull when his bleed has three or more stacks on you (his passive shaves your HP every second per stack). Hit Q on the edge when his Q is on cooldown; under R, trades favor you if you are at least one item ahead.
- **Renekton:** Loses lane before level 6 if you respect his W stun. Walk up only when your W is ready; punish his cooldowns instead of trading face-to-face. After 6, your R sustains better than the fury (his resource bar) he burns.
- **Malphite:** Avoid standing on top of your minion wave — his Q is a long-range poke (low-cost ranged damage to chip your HP without committing) that hits you for free. Buy ![Hexdrinker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3155.png) **Hexdrinker** if his early poke is winning the lane; **freeze** the wave near your tower (stop pushing and keep the wave on your side of the lane) to deny him farm (the gold and XP from killing minions).
- **Quinn:** Very rough. Her ability blinds you (cancels your basic attacks for a short time, including the empowered passive auto), and she kites you out of Q range (moves backwards while attacking, keeping you out of melee). Push the wave hard and roam (leave your lane to help mid) for picks (isolated kills on out-of-position enemies) instead of trying to win the 1v1.

## Power spikes & win conditions

- **Level 2:** With **Q** + **W** unlocked, Aatrox has a real all-in window (a window where you can fully commit to the kill, with no fallback). If the enemy mispositions, walk up with W ready and hit Q on the edge after the slow lands.
- **Level 6:** Your first R unlocks. Look for an all-in if the enemy is below 60% HP — the AD boost and healing buff turn even neutral trades into kills.
- **![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) Eclipse completion (~ minute 11-13):** Your damage spikes hard. Force side-lane duels and look to roam bot for a 2v3 dive (going under the enemy bot tower with your jungler — the player who farms the jungle camps and rotates to lanes — to kill them through tower shots).
- **Two items + R online (~ minute 18-22):** Peak teamfight window. Use the ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** lifeline shield plus the R healing amp (amplification — R increases all healing you receive) to dive the enemy back line (the squishy carries who stand behind their own tanks during a fight) and reset (refresh) the R duration on takedowns (kills or assists).

## Common mistakes

- **Casting Q1 immediately on contact.** Q1 is the smallest and slowest cast. Lead with **W** for the slow, then time Q1 so the **edge** of the swing clips them — not the inner zone. The bonus damage from edge hits is roughly 25%.
- **Burning E for movement instead of for Q alignment.** E is your trade-winning tool. Save it to slide into edge-hit range or to dodge a key enemy ability during the Q wind-up (the brief animation before the Q damage actually lands). Do not blow E just to cross the wave faster.
- **Pressing R too early in a fight.** Aatrox's R has a long cooldown and the buff decays over time. Engage (start the fight) first with W + Q, then activate R when you are committed and need the AD/healing amp — not as the opening engage tool.
- **Ignoring W on minions.** W passes through a minion to slow the champion behind. In hard matchups (Fiora, Camille), fire W from behind your wave so the projectile clips them through minion bodies before they can react.
- **Stacking armor over haste/AD.** Aatrox is a drain tank, not a real tank. He survives by healing damage back through E lifesteal; that healing scales (grows) with the damage you deal. Building HP-tank-only items kills both your output and your sustain.

## Advanced tip

Use **E** during the Q1 wind-up animation to shift the Q hitbox mid-cast: you can start the Q facing one direction, then dash through a minion or behind the enemy and have the slam land at a completely different angle. This is called the **Q animation cancel**, and it turns predictable Q casts into unpredictable plays. Practice it in a custom game on a target dummy: cast Q1, hold the cast, dash with E, and watch the Q resolve at the new position. In a real game, the highest-impact use is dashing **into** an enemy who tried to side-step (move sideways to dodge) a telegraphed Q (a Q where the wind-up was visible enough that they read it coming), then catching them on the edge of the new angle for the knock-up.
