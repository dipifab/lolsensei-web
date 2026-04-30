---
title: "Tristana Bot Build & Guide — Patch 16.9"
slug: "tristana-bot"
language: "en"
patch: "16.9"
champion: "tristana"
role: "bot"
last_updated: "2026-04-29"
description: "Tristana bot lane guide for League of Legends Patch 16.9: starter kit, marksman build, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Tristana"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Late-game ADC"
  abilities:
    - key: "P"
      name: "Draw a Bead"
      description: "Tristana's basic attack range grows every level. By level 18 she out-ranges most other ADCs."
      dd_spell_id: "Tristana_Passive"
    - key: "Q"
      name: "Rapid Fire"
      description: "Self-buff burst of attack speed for a few seconds. Burns down a stacked Explosive Charge or finishes a low-HP target."
      dd_spell_id: "TristanaQ"
    - key: "W"
      name: "Rocket Jump"
      description: "Targeted leap that slows on landing. Resets on champion takedown or a maxed-stack E detonation. Engage and escape tool."
      dd_spell_id: "TristanaW"
    - key: "E"
      name: "Explosive Charge"
      description: "Bomb on a target that detonates after a short delay. Each attack or ability hit on the target adds a stack and increases the explosion damage (max 4 stacks)."
      dd_spell_id: "TristanaE"
    - key: "R"
      name: "Buster Shot"
      description: "Knocks a single target back and stuns enemies near the impact. Doubles the radius of a planted E. Also a panic disengage tool."
      dd_spell_id: "TristanaR"
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
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "6673"
      name: "Immortal Shieldbow"
      against: "vs heavy burst lanes (Draven, Lucian + Nami, Caitlyn poke setups) — the lifeline shield buys one extra second to W out"
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "vs tank-stacked enemy teams (Sion top, Cho'Gath, Sejuani jungle) — armor pen is mandatory once two enemies have 200+ armor"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "vs single-target hard CC aimed at you (Morgana Q, Leona R, Ashe R, Malzahar R)"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "vs assassins picking your back line (Zed, Talon, Rengar, Kha'Zix) when you are the primary kill target"
    - dd_id: "3085"
      name: "Runaan's Hurricane"
      against: "swap when team fights stack 4-5 grouped enemies and you need cleave (replaces Bloodthirster on the build)"
  base_combo: ["E", "AA", "AA", "Q", "AA", "W", "R"]
  win_condition: "Stack four E hits on a priority target, then W onto them at level 6+ and Buster Shot to detonate. After three items you out-DPS most ADCs at long range."
  weakness: "Short auto-attack range until level 9-10 makes early lane brutal versus poke. If W is on cooldown and you over-extend, you have no escape and burst champions delete you."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["sivir", "ashe", "miss-fortune"]
      archetype: "Immobile marksmen without dash"
      reason: "Tristana W onto them at level 6, Buster Shot back toward your support, and they have no movement ability to disengage the stacked Explosive Charge."
    - examples: ["soraka", "yuumi", "janna"]
      archetype: "Squishy enchanter supports"
      reason: "W jump over the minion line lets you delete the support before the ADC can react. Few enchanters survive a four-stack E plus Q burst at level 6."
    - examples: ["senna", "varus", "jhin"]
      archetype: "Lane bullies that fall off late"
      reason: "Survive the early laning bleed and Tristana's level 16 range plus three-item DPS overtake their static-range scaling. The trade gets reversed by minute 25."
  counterpicks:
    - examples: ["caitlyn", "ezreal"]
      archetype: "Long-range marksmen with safety tools"
      reason: "Caitlyn out-ranges your auto until level 13 and Ezreal E-blinks any W follow-up. Both shove waves and zone you off CS without committing to a fight."
    - examples: ["draven", "lucian"]
      archetype: "Lane bully ADCs with early all-in"
      reason: "They out-trade you at levels 1-5 when your range is shortest. A single bad trade snowballs into a freeze on your side and missed CS that delays your spikes."
    - examples: ["leona", "nautilus", "pyke"]
      archetype: "Hard-engage tank supports"
      reason: "They land point-and-click CC inside your auto-attack range before W is up. Even a Shieldbow only buys one extra second; you still need a peeler to survive their dive."
---

## Overview

Tristana is a **hyper-scaling** marksman (she gets much stronger with items and levels than most other ADCs) whose late-game range is the highest in her class. Her passive **Draw a Bead** grows her auto-attack range every level, so by level 18 she shoots from farther than almost any other ADC and from a safer position. Her kit pairs a self-buff attack speed steroid (**Rapid Fire / Q**), a targeted dash (**Rocket Jump / W**) that resets on champion takedown, a damage-amp bomb (**Explosive Charge / E**), and a knockback ultimate (**Buster Shot / R**) that doubles E's blast radius if the target is carrying it.

The game plan: **survive the first 8 minutes**, then convert. Stack four E hits on the enemy ADC or support, jump in with W when you have a kill window (the moment the target is low enough that your burst kills them), and use R to either finish (with the doubled E radius) or to **disengage** if a teamfight collapses on top of you (disengage = break off and retreat). The single decision that separates a fed Tristana from a dead one is W usage — saving it for an escape vs committing it for an **all-in** (an attack you cannot back out of, going for the kill).

## Recommended Build

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 1 Health Potion is default. Take ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** instead only into a heavy **poke** lane (poke = ranged harass to chip HP without committing) like Caitlyn or Ezreal where you expect to lose 30%+ HP from auto-harass before minute 5.

**Core items (in order):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — first-item DPS spike. The on-hit true damage every third attack scales with your stacked E and lets you push midgame **skirmishes** (small 2v2 / 3v3 fights, not full teamfights) you would lose without it.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed boots. Buy after first item; finish them earlier (around minute 8) if the enemy ADC is also running attack speed.
3. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — adds extra range on a special "Energized" auto-attack (one that charges up while you move and fires extra-long the next time you attack). Combined with your passive, this is what makes you the longest-range ADC on the map.
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — crit damage multiplier. Build third or fourth depending on whether the lane needs more range first.
5. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — lifesteal plus shield overcap, makes you durable in extended teamfights.

**Situational items:**

- ![Immortal Shieldbow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6673.png) **Immortal Shieldbow** — replaces Kraken Slayer as your first item if the enemy bot lane is a heavy **burst** pair (burst = high damage in 1-2 seconds, like Draven or Lucian + Nami). The HP-threshold passive (auto-shield when you drop below ~30% HP) buys you one extra second to W out.
- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — into tank-stacked enemy teams. Once two enemies have 200+ armor, swap one of your last items for this.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — into single-target hard CC aimed at you (Morgana Q, Malzahar R). The active cleanses, and you keep AD/movement on the same slot.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — when assassins (Zed, Talon, Rengar) keep **picking you off** (catching you alone and killing you fast) in side lanes or before fights start.
- ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — replaces ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** when the enemy team groups 4-5 (cleave from Runaan's spreads your E stacks across multiple targets).

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** is non-negotiable on Tristana — attack speed amplifies your E-stack rate and your Q steroid.

**Skill order:** Max **E** first (main damage), **Q** second (lane trades and execute), **W** last. Take **R** at levels 6, 11, 16. The first 3 levels go E → Q → W so you have a stack tool, an attack speed boost, and an escape ready before level 4.

**Runes:** Primary **Precision** with **Lethal Tempo**, **Presence of Mind**, **Legend: Alacrity**, **Coup de Grace**. Secondary **Sorcery** with **Manaflow Band** and **Gathering Storm** — Manaflow fixes Tristana's mana issues spamming E, and Gathering Storm rewards her hyperscaling identity. Switch the secondary to **Inspiration** with **Magical Footwear** + **Cosmic Insight** if you expect the early lane to be safe and want the gold efficiency.

## Key matchups

- **Caitlyn:** Hard lane to play. Her 650 auto-attack range out-trades you (a **trade** is a brief exchange of damage in lane) until level 13. Stay behind minions, do not trade unless she has burned **Net (E)**, and farm safely under tower until you hit your first item spike.
- **Draven:** Avoid all level 1-3 trades. His axes do roughly double a normal ADC auto. Hold W for an emergency escape if he flashes; never use it to **engage** in lane (engage = start the fight by jumping in) unless he is below 30% HP.
- **Ezreal:** Slow, safe lane. He out-ranges your early autos but cannot all-in without burning **E (Arcane Shift)**. Once he is on E cooldown you have a 4-5 second window to W in, stack E, and Q burn him down.
- **Lucian + Nami:** Aggressive setup. Respect the engage when Nami **Q** is up; her bubble is telegraphed (you can see her wind-up animation, so it can be dodged). After 6 you out-range him in extended fights, but pre-6 you lose the all-in every time.
- **Jhin:** Outscales him hard, but his 4th shot one-shots Tristana under 50% HP. Track his ammo (visible on his belt) and play behind minions during his reload window.

## Power spikes & win conditions

- **Level 6:** First **Buster Shot** unlocks the all-in combo: stack 4 E hits with autos + Q, W onto them, R to detonate the doubled-radius E. This is your highest-damage burst window before items.
- **![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer completion (~ minute 11-13):** First item spike. You start winning skirmishes you would have lost — group with your jungler for Drake or Voidgrubs.
- **Three items (~ minute 25):** Kraken + Rapid Firecannon + Infinity Edge online. You out-range and out-DPS most ADCs and can take extended fights at full attack speed without a shield item.
- **Level 16 + Rabadon-tier scaling:** Your auto-attack range is at maximum. With **Lethal Tempo** capping attack speed, you become the highest-DPS ranged threat on the map for the next 5 minutes.

## Common mistakes

- **W'ing in for the kill at low HP.** You rely on the W reset on takedown — if you misjudge by even 50 damage you secure the kill but die to the next enemy auto, and the team trade flips. Use Q first to confirm the kill is in range, then W only if R is up to disengage if the reset fails.
- **Wasting R offensively when you need it for escape.** Buster Shot is your only "no, I'm leaving" tool. If the enemy support has a hard **engage** like Leona or Nautilus (point-and-click crowd control that lands the moment they reach you), keep R for the moment they flash on you, not to chip an extra 200 damage on a tank.
- **Skipping the E stack in fights.** A naked W-Q-AA combo does mediocre damage. Always stack E before committing — even one auto-attack of stacking is 25% more burst when R detonates.
- **Standing in lane until level 6 with no Flash.** If you have used Flash and your W is on cooldown, you are the easiest gank target on the map (your jungler enemy can run in unanswered). Reset to base before re-pushing the wave.
- **Building Bloodthirster as the third item into tanks.** Lifesteal does nothing if your damage is mitigated. Slot ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** in third or fourth when the enemy team has two **armor stackers** (champions building lots of armor, like Sion or Malphite).

## Advanced tip

Practice the **W-reset chain in teamfights**: hit four E stacks on the **back-line carry** (the high-damage champion standing safely at the back of the enemy team, like an ADC or mage), W in to detonate the bomb (the 4th-stack auto explodes it instantly without needing R), and if the kill goes through your W cooldown resets to roughly 1 second. From there you can W out the same direction you came, leaving the enemy back line down a body without exposing yourself for more than a second. The trick is the order: stack E from auto-attack range first, **then** W — never W in cold with E unstacked, because you waste both your engage tool and your damage spike.
