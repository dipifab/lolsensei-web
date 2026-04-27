---
title: "Neeko Support Build & Guide — Patch 14.10"
slug: "neeko-support"
language: "en"
patch: "14.10"
champion: "neeko"
role: "support"
last_updated: "2026-04-27"
description: "Neeko support guide for League of Legends Patch 14.10: engage build with World Atlas, roam-and-flank R combos, key matchups, power spikes and common mistakes."
quick_learn:
  champion_dd_id: "Neeko"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Engage"
  abilities:
    - key: "P"
      name: "Inherent Glamour"
      description: "Disguise as an allied champion. Taking damage from enemies or casting damaging spells breaks the illusion."
      dd_spell_id: "Neeko_Passive"
    - key: "Q"
      name: "Blooming Burst"
      description: "Throw a seed that blooms once on impact, then a second time if it hits a champion or kills a unit. Lane poke and follow-up damage."
      dd_spell_id: "NeekoQ"
    - key: "W"
      name: "Shapesplitter"
      description: "Passive: every third basic attack deals bonus magic damage. Active: send a clone forward — your main bait and roam tool."
      dd_spell_id: "NeekoW"
    - key: "E"
      name: "Tangle-Barbs"
      description: "Linear root skillshot. Becomes wider, faster and roots longer if it kills a unit or passes through a champion first."
      dd_spell_id: "NeekoE"
    - key: "R"
      name: "Pop Blossom"
      description: "Channel that ends in a leap and AOE knockup. Channel is hidden while disguised by W passive or P — your engage tool."
      dd_spell_id: "NeekoR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3876", name: "Solstice Sleigh" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs divers focused on you (Pyke, Rell, Leona) — stasis covers your visible R channel after the engage"
    - dd_id: "3041"
      name: "Mejai's Soulstealer"
      against: "when you snowball (lead grows from kill to kill) with 3+ takedowns by minute 12 and the enemy team has no targeted hard CC"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs hook supports (Blitzcrank, Thresh, Pyke, Nautilus) and any single-target magic CC that interrupts R"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap when the enemy carry buys an MR item (typically 3rd or 4th item)"
  base_combo: ["W", "E", "R", "Q"]
  win_condition: "Roam to side lanes and flank around vision with W and disguise. Land a hidden R on two or more enemies and the team trades cleanly off the AOE knockup."
  weakness: "No targeted CC, no shield, no peel for your ADC. If you cannot engage, your value drops to lane poke; an enemy with reliable hard CC shuts down your R window completely."
---

## Overview

Neeko support is the engage variant of her kit — engage means starting the fight by jumping in and committing the team to follow. Instead of farming AP through last-hits in mid, you bank gold from **World Atlas** and trade **Q** poke (chip damage from range) for vision setups around the river. The whole role is built around two tools — disguise and the **W** clone — that let you stage flank engages from angles a normal support cannot reach. The ceiling here is high, the floor is unforgiving: a missed **E** in lane is harassment lost, and a visible **R** is a wasted ultimate.

Your bot lane plan starts at level 1: walk into the lane disguised as your jungler if your team allows, set up a level-2 cheese with **E** through the first wave, and threaten an early **R** at level 6. From minute 8 onward your job is roam priority — clear vision, hide in fog, and **R**-engage on rotations. Once Solstice Sleigh is online, every gank becomes an extended slow plus AOE knockup, which is more lockdown than most engage supports get from their entire build.

## Recommended Build

**Starting items:** World Atlas + 2 Health Potions. Take Stealth Ward as your trinket and swap to Oracle Lens at minute 14.

**Core items (in order):**

1. **World Atlas → Solstice Sleigh** — main support item path. Solstice Sleigh's Snowfall passive procs on every CC you land, giving extra slow, HP and shield to allies you bonk into.
2. **Sorcerer's Shoes** — flat magic penetration. Your damage is bursty enough that flat pen beats movement boots from Ionian.
3. **Liandry's Torment** — burn damage scales with HP and your AOE applies it on multiple targets at once. The HP also keeps you alive through the visible part of **R**.
4. **Rabadon's Deathcap** — late-game multiplier, taken when the game crosses minute 25.

**Situational items:**

- **Zhonya's Hourglass** — into divers focused on you (Pyke, Rell, Leona). Stasis covers the visible portion of your **R** after engage.
- **Mejai's Soulstealer** — only when you have 3+ takedowns by minute 12 and the enemy team has no targeted hard CC.
- **Banshee's Veil** — into hook supports (Blitzcrank, Thresh, Pyke, Nautilus) and any magic CC that interrupts **R**.
- **Void Staff** — when the enemy carry buys an MR item (Magic Resist; reduces incoming magic damage).

**Boots:** Sorcerer's Shoes is default. Mobility Boots are acceptable in compositions where the rest of the team has lockdown and you only need to roam-and-engage.

**Skill order:** Max **E** first (CC reliability is your engage), **Q** second (poke and waveclear support), **W** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Sorcery** with **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Inspiration** with **Magical Footwear** and **Cosmic Insight**. Aery is acceptable on rare poke-heavy lanes; **Aftershock** is wrong on Neeko because **R** breaks before the bonus resists trigger.

## Key matchups

- **Blitzcrank:** Avoid the front 1000 units of lane until **W** is up. Send a clone forward whenever he is threatening **Q**; if he hooks the clone, his cooldown is up and you can step forward freely.
- **Leona:** Even matchup, decided by wave state. If she walks at you, **E** through the wave for the extended root and follow up with **R**. Do not engage when wave is on her side.
- **Lulu / Janna (enchanters):** Hard for you to lock anyone down. Look for roams; in lane, hold **R** for engage windows after they polymorph or slow you.
- **Thresh:** Standard matchup, but his lantern saves your engage targets. Time your **E** so it hits after the lantern is consumed, not before.
- **Pyke:** Stay near minions. His **Q** range is shorter than you think; the real threat is his **R** finishing your ADC. Buy Banshee's after Solstice Sleigh.

## Power spikes & win conditions

- **Level 2:** With **E** plus **W**, a level-2 cheese (a rushed all-in at level 2 to surprise the enemy before they get their second ability) is on the table. Push the first wave with **Q** in the wave path, take **W** at 2, send a clone, **E** through a minion when they step up.
- **Level 6:** First **Pop Blossom**. Hidden channel under disguise turns standard rotations into kill setups. This is your earliest meaningful gank window.
- **Solstice Sleigh completion (~ minute 14-16):** Every CC you land procs Snowfall — extra slow on **E**, extra slow on **R** knockup, and a small shield on the ally you bonk. Roam pressure jumps significantly.
- **Item 3 + level 11 (~ minute 22):** Second R point shaves cooldown to 105 seconds. You can engage every objective fight on cycle.

## Common mistakes

- **Engaging without an exit.** **R** is a one-way commitment. If your team is not ready to follow up — or if you are alone deep in fog — the AOE knockup just trades you for nothing. Wait for a number advantage.
- **Casting R from outside W passive.** Visible channels are pre-CC'd by any decent enemy. Always disguise via **W** passive or your real **P** before starting the **R** channel.
- **Sending W as a panic dodge.** **W** is a 12-second cooldown bait tool. Use it for setup, not as a "clone, run away" — that pattern reads instantly and wastes the only mobility you have.
- **Skipping vision for fast roams.** A naked roam without a Control Ward in their jungle is how you walk into a counter-gank. Sweep, ward, then disguise; never the reverse.
- **Disguising as the wrong ally.** A jungler showing up as your double on a lane in slow-push state is plausible. A bot laner in their base, recall canceled, is not. Implausible disguises get pinged on sight.

## Advanced tip

The **R**-flash is your highest-leverage trick: start the **Pop Blossom** channel from outside leap range, then **Flash** at the last 0.25 seconds. The leap fires from your post-Flash position, which extends the engage range by roughly a third. Combined with **W** passive disguise — for example, walking up to lane disguised as your ADC — this turns the second wave at level 6 into an unreactable engage that the enemy bot lane has no information to read.
