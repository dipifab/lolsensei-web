---
title: "Corki Mid Build & Guide — Patch 16.9"
slug: "corki-mid"
language: "en"
patch: "16.9"
champion: "corki"
role: "mid"
last_updated: "2026-05-02"
description: "Corki mid lane guide for League of Legends Patch 16.9: hybrid marksman build, runes, key matchups, power spikes, common mistakes, and an advanced tip."
quick_learn:
  champion_dd_id: "Corki"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hybrid"
  abilities:
    - key: "P"
      name: "Hextech Munitions"
      description: "Basic attacks deal a portion of their damage as bonus true damage. Steady DPS source that ignores armor and magic resist — your reason for stacking attack speed and on-hit items."
      dd_spell_id: "Corki_Passive"
    - key: "Q"
      name: "Phosphorus Bomb"
      description: "Targeted area magic damage that briefly reveals enemies inside. Used for last-hits when zoned, brush checks, and the opening of every poke trade."
      dd_spell_id: "PhosphorusBomb"
    - key: "W"
      name: "Valkyrie"
      description: "Short dash leaving a fire trail. Your only mobility tool — escape, gap-close, or skillshot dodge. Long cooldown, do not waste it for waveclear."
      dd_spell_id: "CarpetBomb"
    - key: "E"
      name: "Gatling Gun"
      description: "Channeled cone in front of Corki dealing damage and shredding armor and magic resist. Adds steady DPS and softens targets for follow-up R missiles."
      dd_spell_id: "GGun"
    - key: "R"
      name: "Missile Barrage"
      description: "Long-range missile that explodes on impact. Stocks up to 7 missiles; every 3rd is a Big One with extra burst. Your main poke and execute tool."
      dd_spell_id: "MissileBarrage"
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3004", name: "Manamune" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "3046", name: "Phantom Dancer" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs assassins with multi-dash kits (Zed, Akali, Talon): the stasis stalls their burst combo so your team or W can save you"
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "vs an enemy front line with 2+ tanks (Sion, Ornn, Maokai): adds heavy armor penetration so your autos and R missiles still cut through"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs heavy AP burst threats (LeBlanc, Veigar, Syndra): the magic shield absorbs one full combo and lets you W out"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs teams with 3+ hard CC (stuns, roots): swap shoes when chain CC matters more than magic penetration"
  base_combo: ["Q", "AA", "R", "E", "AA"]
  win_condition: "Scale safely behind minions to Trinity Force and Manamune, then chip squishies down with R poke from max range. Pick off targets stranded mid-rotation while your team holds objective windows."
  weakness: "Squishy with no escape beyond W. Mobile assassins with multiple gap-closers run you over before two items, and projectile-blocking abilities (Yasuo Wind Wall, Braum E) shut down poke."
  runes:
    primary_tree: "Inspiration"
    primary_tree_dd_id: 8300
    keystone:
      dd_id: 8369
      name: "First Strike"
      icon_path: "perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png"
    primary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Inspiration primary: First Strike rewards Corki for opening every trade with Q or R, turning that initial damage into bonus gold that funds the greedy Trinity + Manamune build. Magical Footwear, Biscuit Delivery and Cosmic Insight extend early sustain so you scale without dying."
    secondary_rationale: "Sorcery secondary: Manaflow Band is mandatory because R missiles cost mana and you spam them in lane; Gathering Storm gives free AP scaling that pads the bonus magic damage on Q and the Big One missile in the late game."
    secondary_alternative: "If you face a heavy poke lane (Xerath, Vel'Koz, Zoe) where you cannot afford to fall behind in HP, swap Sorcery for Resolve with Second Wind (passive HP regen under harass) and Overgrowth (max HP scaling) for safer scaling."
matchup_draft:
  pick_into:
    - examples: ["veigar", "anivia", "karthus", "cassiopeia"]
      archetype: "Immobile mages without dash"
      reason: "Corki's R reaches 1225 units and his W gives him the only mobility advantage in the lane. Targets without a dash or stealth eat repeated R poke and cannot punish the windows where W is on cooldown."
    - examples: ["xerath", "vel-koz"]
      archetype: "Artillery mages with channel windups"
      reason: "Corki matches their range with R while also having a dash to interrupt long channels (Xerath R, Vel'Koz R). They cannot all-in him, and trades favor the side with mobility."
    - examples: ["annie", "syndra"]
      archetype: "Short-range burst mages"
      reason: "Their kill threat starts inside auto-attack range, exactly where Corki's true-damage passive plus Trinity Force outscales them. Pre-6 you out-poke with R, post-6 you side-step their stun with W."
  counterpicks:
    - examples: ["zed", "talon", "akali", "qiyana"]
      archetype: "Mobile assassins with multiple gap-closers"
      reason: "Corki has only one dash (W) on a long cooldown. Multi-dash kits enter his cast range before W is back up and burst him through Trinity HP, especially before two items."
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall projectile blockers"
      reason: "Wind Wall eats Q and the entire R missile barrage, removing two thirds of Corki's damage from the trade. Even when he wins HP, the trade cost in cooldowns is brutal."
    - examples: ["fizz", "kassadin"]
      archetype: "Untargetable / blink-based escapes"
      reason: "Fizz E and Kassadin R let them dodge a committed combo and then re-engage on Corki when his W is down. He has no follow-up burst once they go untargetable."
---

## Overview

Corki is a hybrid marksman (a ranged auto-attack carry that mixes physical and magic damage) who plays mid lane like a long-range artillery champion: he gets stronger as items come online (he "scales"), chips enemy HP from far away with **Missile Barrage (R)** ("poke" = chip damage from outside their range), and finishes low-HP squishy targets with auto-attacks once **Trinity Force** is built. His **Hextech Munitions (P)** turns a portion of every basic attack into true damage (damage that ignores armor and magic resist), so attack speed and on-hit stats matter as much as raw AD or AP. He is in mid because the two-way river ganks (surprise attacks from the jungler) favour his **Valkyrie (W)** dash, and because R missiles can poke side lanes from the centre of the map.

Game plan in one line: stack (accumulate) mana on Manamune to upgrade it into Muramana, push waves (kill minions fast to force the wave forward) with **Phosphorus Bomb (Q)** and R, and use each cooldown window (the seconds when your spells are ready) to chip the enemy laner's HP so your jungler can dive (kill them under their tower). Skill expression sits in R aim — lead the target (predict where they will move, then aim there), and time the Big One missile (every 3rd R is a stronger missile) for the moment the enemy is lowest. **W** is your single dash: misuse it and any assassin can walk you down.

## Recommended Build

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. The blade gives lifesteal (a portion of damage dealt heals you back) that pairs with auto-attack passive; skip Doran's Ring unless you face a pure poke lane where mana sustain matters more than dueling.

**Core items (in order):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — Sheen (a component of Trinity) procs (triggers an extra-damage effect) on every Q and every R missile, plus AD, attack speed, ability haste (cooldown reduction), and movement speed. Single biggest power spike on the champion.
2. ![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) **Manamune** — Manamune slowly transforms into a stronger version called Muramana as you spend mana; once "stacked" (fully transformed) it adds bonus damage on every auto-attack and every ability that costs mana, including each R missile.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration (ignores part of the enemy's magic resist) boosts Q and R damage.
4. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — your first auto-attack on an enemy ("energized auto") deals bonus damage and reaches further than normal range. The crit chance fits the Trinity stat profile.
5. ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — attack speed for sustained DPS through **Gatling Gun (E)** and the on-hit true damage from passive.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — vs assassins with multi-dash kits (Zed, Akali, Talon): the stasis stalls their burst window so your team or W can save you.
- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — vs a front line with 2+ tanks (Sion, Ornn, Maokai): heavy armor penetration so autos and R missiles still cut through.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — vs heavy AP burst (LeBlanc, Veigar, Syndra): the magic shield absorbs one full combo and lets you W out.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap from Sorcerer's when the enemy team has 3+ hard CC abilities (stuns, roots) and chain CC matters more than magic penetration.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** is default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** if the team comp is heavy CC.

**Skill order:** Max **Q** first (poke and waveclear), **E** second (DPS and resistance shred), **W** last (utility). Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Inspiration** with **First Strike**, **Magical Footwear**, **Biscuit Delivery**, **Cosmic Insight**. Secondary **Sorcery** with **Manaflow Band** and **Gathering Storm**, or **Resolve** with **Second Wind** and **Overgrowth** into heavy poke lanes.

## Key matchups

- **Yasuo / Yone:** They block your Q and R missiles with Wind Wall. Save Q until they push their abilities, hold R for after Wind Wall is on cooldown, and never trade (exchange damage) into melee range where they can E (dash) onto minions next to you.
- **Akali / Zed:** Diving threats (champions who can jump on you under tower to kill). Buy ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** after Trinity Force; never spend W in a trade if their chain of dashes is still available.
- **Veigar:** Match the range with R, dodge his W (a slow expanding cage trap that locks you in place), and avoid auto-trades inside his E ring (a stun ring that triggers when you cross it). His Q stacks scale infinitely (more kills = more permanent AP), so end the lane before minute 25.
- **Twisted Fate:** A roaming race (both champions try to leave lane to help teammates first). Push the wave with Q before he hits level 6, ping the enemy jungler when his R is up, and W away from a gold-card target instead of trying to face-tank the stun.
- **Galio:** Punish him pre-6 by killing the wave he cannot match with melee minion last-hits (Galio is melee, you are ranged). Post-6 his R is a global engage tool — group with your team only when you have R missiles stocked to peel his arrival (knock him off your back-line carries).

## Power spikes & win conditions

- **Level 2:** With Q + W or Q + E, you can punish a missed last-hit with a Q-AA-AA trade ("AA" = basic auto-attack) and either disengage with W or follow up if their Flash is down.
- **Level 6:** First **Missile Barrage (R)** unlocks side-lane pressure (the option to leave mid and threaten top or bot). With R stocks plus W, you can roam to bot, drop two missiles plus a Big One on a 1v1 trade, and W back to wave.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completion (~ minute 12-14):** Sheen procs on every Q and every R missile turn poke into kill threat. This is the moment to all-in (commit fully to a kill, no retreat) a low-HP enemy laner with Q-AA-R-AA.
- **![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) Manamune stacked (~ minute 18-22):** Muramana adds bonus damage on every mana-spending action; teamfight damage roughly doubles compared to pre-stack. Force objective fights (Drake, Baron) here.

## Common mistakes

- **Spamming R off cooldown for waveclear.** R missiles are a finite stock; if you empty them on minions, the next teamfight you have zero burst at the worst moment. Push waves with Q + auto-attacks; save 4+ missiles for objectives.
- **Using W aggressively without a follow-up.** W is your only escape. Dashing in to finish a kill that needed one more auto-attack is how Corki dies — if you cannot kill them with your remaining mana plus current cooldowns, do not commit (do not engage fully).
- **Auto-trading at melee range.** Corki's true-damage passive looks tempting up close, but his HP pool is squishy (low and fragile, like an ADC). Stay at R range when the enemy laner has gap-closers up.
- **Buying ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes into a CC-heavy team.** Magic penetration is wasted if you spend the fight stunned. Default to Sorcerer's only when their CC count is low; otherwise swap to Mercury's Treads.
- **Roaming with empty R stocks.** A roam without 2 missiles is a coin flip. Wait the 8-12 seconds for stocks before crossing river; that single delay is the difference between a kill and giving up your wave for nothing.

## Advanced tip

Track and exploit the **Big One** rhythm. Every third R missile (the "Big One") deals much more damage than the regular two. Before a teamfight, count the missiles you have stocked — if the next one would be a Big One, save it for the priority target; if you have just spent it, fire the two filler missiles into the wave or a tower so the Big One reloads ready for the engage. Players who fire R blindly waste Big Ones on minions; players who track the count one-shot squishies (low-HP carries) when it counts.
