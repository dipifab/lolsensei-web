---
title: "Kassadin Mid Build & Guide — Patch 16.9"
slug: "kassadin-mid"
language: "en"
patch: "16.9"
champion: "kassadin"
role: "mid"
last_updated: "2026-05-05"
description: "Kassadin mid lane guide for League of Legends Patch 16.9: late-game scaler build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Kassadin"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Assassin / Late-game Scaler"
  abilities:
    - key: "P"
      name: "Void Stone"
      description: "Passive: Kassadin takes reduced magic damage and ignores unit collision (he walks through minions and champions)."
      dd_spell_id: "Kassadin_Passive"
    - key: "Q"
      name: "Null Sphere"
      description: "Single-target skillshot dealing magic damage and interrupting channels. Grants Kassadin a magic shield for 1.5s — anti-poke vs AP mages."
      dd_spell_id: "NullLance"
    - key: "W"
      name: "Nether Blade"
      description: "Passive: bonus magic damage on basic attacks. Active: empowered auto-attack restoring missing mana (more vs champions). Mana sustain in lane."
      dd_spell_id: "NetherBlade"
    - key: "E"
      name: "Force Pulse"
      description: "AOE cone slow + magic damage. Charges from any spell cast nearby (yours or enemies'). Needs charges to activate — use as finisher, not spam."
      dd_spell_id: "ForcePulse"
    - key: "R"
      name: "Riftwalk"
      description: "Short blink with low cooldown. Each consecutive cast within a few seconds doubles the mana cost and adds bonus damage, stacking up to 4 times."
      dd_spell_id: "RiftWalk"
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
    - { dd_id: "6657", name: "Rod of Ages" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3135", name: "Void Staff" }
  situational_items:
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "vs comps you out-scale post-11 — AP + ability haste + movement speed for chaining Riftwalks and sticking on the squishy backline"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC (Ahri charm, Lissandra R, Twisted Fate stun) that locks you out of your Riftwalk window"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs healing-stacking comps (Soraka mid, Vladimir, Dr. Mundo top) — applies Grievous Wounds, halving healing"
    - dd_id: "4645"
      name: "Shadowflame"
      against: "vs squishy carries with shields (Riven, Yasuo passive) — extra burst on R+Q+E execute"
  base_combo: ["R", "Q", "AA", "E"]
  win_condition: "Survive lane to level 11 with one full item, then snowball (turn small leads into bigger ones): R onto squishy carries, Q+AA+E to delete, R out before allies can peel."
  weakness: "Lane phase is brutal: weak base damage, short range, no waveclear before level 9. Burst mages and ranged poke can shove you under tower and chip you down before you scale."
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
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
  primary_rationale: "Inspiration primary: First Strike rewards Kassadin's late-game burst windows with bonus gold and damage on R-engage. Magical Footwear saves 350 gold for the early item rush, Biscuit Delivery fixes the weak mana pool in lane, Cosmic Insight reduces summoner spell cooldowns for more Flash plays in skirmishes."
  secondary_rationale: "Sorcery secondary: Manaflow Band is mandatory mana scaling — without it, Q spam in lane runs you dry before level 9. Transcendence pushes ability haste past 40%, lowering Riftwalk cooldown so you can chain 3-4 R in a teamfight instead of 2."
  secondary_alternative: "If you face heavy poke mages who deny you any farm pre-6 (Xerath, Vel'Koz), swap Sorcery to Resolve with Second Wind (passive HP regen vs poke) and Overgrowth (HP scaling) to survive long enough to scale."
matchup_draft:
  pick_into:
    - examples: ["veigar", "annie", "vladimir"]
      archetype: "Immobile mages without dash"
      reason: "After level 11 Riftwalk has a 2s cooldown: you blink onto them, Q the cast, E to slow, and AA-execute before they can land their full burst combo."
    - examples: ["lux", "syndra"]
      archetype: "Skillshot setup mages with no escape"
      reason: "Their damage comes from landing a long-range setup (Q root, stun stack); Kassadin's late R lets him sidestep the skillshot mid-combo and close the gap with a blink they cannot answer."
    - examples: ["taliyah", "azir"]
      archetype: "Long-range area-denial mages"
      reason: "Pre-6 they bully Kassadin, but post-11 his magic shield from Q + R mobility cancel their kiting tools. Once the game goes long, their AOE is wasted on a target they cannot pin down."
  counterpicks:
    - examples: ["xerath", "vel-koz", "zoe"]
      archetype: "Long-range poke mages"
      reason: "They poke from outside Kassadin's Q range (650) for the entire pre-6 window. Q magic shield helps but does not refill HP — by level 6 Kassadin is already at half bar and cannot all-in."
    - examples: ["talon", "zed"]
      archetype: "Early-game AD assassins"
      reason: "They hit two-item powerspike around minute 14 while Kassadin is still on his first item. Roams to side lanes punish Kassadin's slow scaling — the game ends before his late game arrives."
    - examples: ["pantheon", "yasuo"]
      archetype: "Snowball lane bullies with all-in pressure"
      reason: "Their level 2-3 all-in (Pantheon Q+W stun, Yasuo Q-windwall-knockup) shreds Kassadin's HP before he has Q max ranks. Q magic shield is useless against physical damage."
---

## Overview

Kassadin is an AP assassin (a mage that closes the gap and deletes a single target instead of poking from far away) built for the late game. His kit revolves around **Riftwalk (R)**: a short blink with a very low cooldown that becomes the strongest repositioning tool in the game once it reaches rank 3 at level 16. The trade-off is a punishing lane phase: short range (650 on **Q**), no waveclear before level 9, and base damage that loses every all-in (full commitment trade until someone dies) pre-6 against most mid laners. The mid lane suits him because the river is the shortest path to scuttle and side lanes once **R** is online — but you have to survive 11-13 minutes first.

His game plan is simple: do not feed pre-6, hit level 11 with one full item completed, then start hunting squishy carries. Skill expression sits in **Riftwalk** mana management (every cast within 7 seconds doubles the cost, so 4 R in a fight without a Tear-based item is impossible) and in stacking ![Force Pulse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/ForcePulse.png) **Force Pulse (E)** from your own spells before the fight starts.

## Recommended Build

**Starting items:** Doran's Ring + 2 Health Potions. The mana from Doran's matters more than the early HP from Doran's Shield: you spam **Q** in lane to last-hit at range when you can.

**Core items (in order):**

1. ![Rod of Ages](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6657.png) **Rod of Ages** — best mana + HP + AP scaler in the game for Kassadin. The 10-minute Eternity passive heals you for a chunk every level-up, surviving lane phase. First completed item.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration, the boots you almost always want against squishy mid/ADC targets.
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 35% AP multiplier. Your Q+E+AA combo doubles in damage with this on.
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — armor + AP + active stasis. Lets you R into the backline and stasis if peel arrives, then R out when stasis ends.
5. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — magic penetration vs MR stacking. Mandatory once any priority target buys ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** or ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** + an MR item.

**Situational items:**

- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — vs comps you out-scale post-11. AP + ability haste + movement speed; you chain Riftwalks faster and stick on the squishy backline once you've blinked in.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — vs single-target magic CC that locks you out of your **R** window (Ahri charm, Lissandra R, Twisted Fate stun).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — vs healing-stacking compositions. Applies Grievous Wounds (a debuff that halves healing) on damage.
- ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — vs squishy carries who buy shields. The HP-threshold passive (a passive that activates when the target is below ~35% HP) lines up with your **R+Q+E** execute.

**Boots:** Sorcerer's Shoes is default. Swap to ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** vs heavy AP + CC compositions (2+ stuns / roots in the enemy team).

**Skill order:** Max **Q** first (best damage and the mana-cheap shield), **E** second (waveclear unlocks at level 9 with E maxed), **W** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Inspiration** with **First Strike**, **Magical Footwear**, **Biscuit Delivery**, **Cosmic Insight**. Secondary **Sorcery** with **Manaflow Band** and **Transcendence**. Swap Sorcery to **Resolve** (Second Wind + Overgrowth) into long-range poke matchups.

## Key matchups

- **Xerath / Vel'Koz:** Their Q range exceeds yours by 200+ units. Last-hit only with **Q** at max range, eat the poke, never push past river. Use ![Q (Null Sphere)](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/NullLance.png) **Null Sphere** shield right before their abilities land — the magic shield blocks most of the damage.
- **Zed:** Avoid all-ins pre-6. After **R** unlocks, bait his **R** mark, then Riftwalk to dodge the snap-back damage. Buy ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** as item 2 instead of Deathcap if he is fed (has 4+ kills already).
- **Veigar:** Even pre-6, brutal post-11. Stay outside his **E** cage range until level 11; once you hit 2-second R cooldown, dive him through the cage with a sideways Riftwalk (the cage has open corners, not full walls).
- **Ahri:** Roam priority race. Push the wave when she is low on mana, follow her roams. Her Charm cancels your **R** mid-blink — buy ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** as your 4th item if she is the carry threat.
- **Yasuo:** Hard early bully. Do not auto-attack into wave (his **E** dashes off your minions for free poke). Stay back, let him push, freeze the wave near your tower with auto-attack pulls. Survive to level 6 then start trading R+Q.

## Power spikes & win conditions

- **Level 6:** First **Riftwalk** unlocks. You can now blink over walls — escape ganks through Krug pit, Raptor wall, dragon pit lip. Damage on R is low at rank 1, do not all-in yet.
- **![Rod of Ages](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6657.png) Rod of Ages completion (~ minute 12-14):** First major HP/mana cushion. Lane phase becomes survivable; start looking for short trades when the enemy mid is on cooldown.
- **Level 11:** Second **R** rank cuts the cooldown to 3.5 seconds. This is the real Kassadin online — you can chain 2 R and live, or R-Q-E-AA-R out a squishy. Force teamfights here.
- **Level 16 + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ minute 24-28):** R cooldown at 2 seconds, AP scaling on top. You one-shot any squishy without MR and can chain 3-4 R in a single fight. Force baron and elder dragon fights here — late-game Kassadin wins them.

## Common mistakes

- **Trying to win lane.** Kassadin is the worst-scaling early laner in mid by design. If you go for level-3 all-ins you will die, fall behind, and never reach your spike. Last-hit, eat poke, hit level 11 alive — that is the win.
- **Spamming Riftwalk in skirmishes.** Each cast within 7 seconds doubles the mana cost. 4 R back-to-back will burn 600+ mana — you will run dry mid-fight with no Q and no E. Track your mana bar before the third R.
- **Holding E for the perfect cone.** ![Force Pulse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/ForcePulse.png) **Force Pulse** needs charges from spells cast nearby (yours and enemies' count). Cast Q on a wave once before the fight to stack E to ready, then engage. Walking into a fight without E charged is throwing the slow finisher.
- **R-engaging without an exit plan.** Riftwalk is short range (500). If you blink onto a backline ADC and your team is not following up, peel will eat you before R is back up. Always look for the second R direction (where will you R back out?) before the first R.
- **Buying Deathcap before Rod of Ages.** Deathcap costs 3600 gold with no HP/mana — buying it first means you die in any teamfight before the AP matters. Rod of Ages (3700g, +400 HP, +400 mana) is the survivability item that makes the Deathcap usable.

## Advanced tip

Use **Q** as a magic shield buffer before enemy spell windups, not just as poke. The 1.5-second magic shield from Null Sphere absorbs a fixed chunk of magic damage — cast it in the half-second before a Veigar **W**, a Lissandra **R**, or an Annie **R+Tibbers** lands, and you negate most of their burst. Practice the timing in Practice Tool against bot Veigar: the shield must be active **as the spell hits**, not before the cast starts. This single trick is what separates Kassadin players who lose lane 0/3 from ones who lose lane 0/0 and scale.
