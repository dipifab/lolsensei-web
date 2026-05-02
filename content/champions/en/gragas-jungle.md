---
title: "Gragas Jungle Build & Guide — Patch 16.9"
slug: "gragas-jungle"
language: "en"
patch: "16.9"
champion: "gragas"
role: "jungle"
last_updated: "2026-05-02"
description: "Gragas jungle guide for League of Legends Patch 16.9: clear path, gank routes, AP bruiser build, key matchups, power spikes, common mistakes, and one closing tip."
quick_learn:
  champion_dd_id: "Gragas"
  difficulty: 2
  damage_type: "magic"
  champion_class: "AP Bruiser / Engage"
  abilities:
    - key: "P"
      name: "Happy Hour"
      description: "Casting any ability heals Gragas for a small amount (5-second internal cooldown). Sustains him through the jungle clear without needing to back early."
      dd_spell_id: "Gragas_Passive"
    - key: "Q"
      name: "Barrel Roll"
      description: "Rolls a cask to a target spot. Recast to detonate, or it explodes on its own after 4 seconds. Damage and slow scale with how long the cask sits — wait for max charge before detonating."
      dd_spell_id: "GragasQ"
    - key: "W"
      name: "Drunken Rage"
      description: "Channel for 1 second to gain 30% damage reduction for 3 seconds and empower the next basic attack with bonus magic damage. Use before E to soak the camp aggro."
      dd_spell_id: "GragasW"
    - key: "E"
      name: "Body Slam"
      description: "Dash that stops on the first enemy hit, dealing AOE damage and stunning them for 1 second. Your only gap-close, your only hard CC, and your main engage tool."
      dd_spell_id: "GragasE"
    - key: "R"
      name: "Explosive Cask"
      description: "Throws a cask that knocks enemies away from the impact center. Use to peel allies, to pickoff isolated targets, or to flip a carry into your team's frontline."
      dd_spell_id: "GragasR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4629", name: "Cosmic Drive" }
    - { dd_id: "6653", name: "Liandry's Torment" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "against assassins or dive comps (Zed, Talon, Kha'Zix): stasis after you flip with R buys time for your team to clean up"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "against single-target magic CC (Ahri charm, Lissandra R, Morgana Q): the spell shield blocks the lockdown that ends your engage"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "against teams with 3+ hard CC (Leona, Sejuani, Lissandra): tenacity shortens stun duration and protects W damage reduction"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "against stacked Magic Resist or healing comps (Soraka, Vladimir, Dr. Mundo): magic penetration plus a healing-reducing area when you cast R"
    - dd_id: "3089"
      name: "Rabadon's Deathcap"
      against: "in a snowball game when you're 3+ items ahead and want to one-shot squishies with Q-E combo instead of acting as engage"
  base_combo: ["W", "E", "Q", "AA", "R"]
  win_condition: "Use R to flip enemy carries (ADC, mid mage) into your team's frontline at objective fights; W before E to soak damage on the way in, then chain Q on the resulting fight pile to amplify Riftmaker's sustained AP burn."
  weakness: "E is your only gap-close and your only stun. If you miss it or use it for clearing camps right before an invade, you have nothing to engage or escape with for 12+ seconds."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8275, name: "Nimbus Cloak", icon_path: "perk-images/Styles/Sorcery/NimbusCloak/6361.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primary instead of damage trees: Gragas dives to engage and needs to survive the CC chain on top of him. Aftershock procs when Body Slam stuns, giving resistances when he's sandwiched. Font of Life, Conditioning, Revitalize keep him tanky late."
    secondary_rationale: "Sorcery secondary: Nimbus Cloak gives a Movement Speed burst after Smite or Flash so you can chain into Body Slam from awkward angles, and Transcendence grants Ability Haste plus a basic-attack-on-takedown reset that fits Gragas's drawn-out skirmishes."
    secondary_alternative: "If the enemy team has 4+ AD threats (Zed mid, Tryndamere top, Vayne bot), swap Sorcery secondary to Precision with Triumph (heal on takedown) and Legend: Tenacity (extra tenacity stacking with Mercury's Treads)."
matchup_draft:
  pick_into:
    - examples: ["master-yi", "kindred", "graves"]
      archetype: "Squishy carry junglers without hard CC"
      reason: "Body Slam's stun stops their kiting pattern: Master Yi can't Alpha-Strike out, Kindred can't dance the auto-attack reset, Graves can't reposition. R then knocks them off your team's carry on a follow-up engage."
    - examples: ["karthus", "amumu", "warwick"]
      archetype: "Long-channel ult junglers"
      reason: "Explosive Cask interrupts Karthus R, Amumu R, and Warwick R. One R knockback in mid-fight cancels their teamfight payload entirely, and Gragas only needs to land the cask center near the channel target."
    - examples: ["fiddlesticks", "shaco"]
      archetype: "Stealth-reliant gankers"
      reason: "W's damage reduction soaks their burst opening (Fiddlesticks fear plus drain, Shaco backstab) while Body Slam stuns them out of channel. Their engage relies on uncontested cast time — Gragas takes that away."
  counterpicks:
    - examples: ["lee-sin", "viego", "vi"]
      archetype: "Mobile skirmishers with multiple gap-closers"
      reason: "They cover ground faster than Gragas's single Body Slam dash and start a fight before you can W into E. Viego possessing your team's frontliner mid-fight also turns your engage into a 1v2."
    - examples: ["kayn"]
      archetype: "Anti-tank true damage bruisers"
      reason: "Kayn (Rhaast) deals percent-max-HP true damage that ignores Gragas's resistances and W's damage reduction. A late-game Gragas built tank loses a 1v1 in the river even with full resistances."
    - examples: ["nidalee", "elise"]
      archetype: "Long-range poke junglers"
      reason: "Nidalee spears and Elise spider-form chip Gragas from outside Body Slam range. He has no way to close the gap without committing E — once spent, both junglers walk away from the trade."
---

## Overview

Gragas is a tanky AP bruiser jungler (a fighter that builds AP for damage but enough HP and resistances to survive the front line). His entire game plan revolves around one big play: throwing an enemy carry (the high-damage champion the enemy team plays around) into your team with **Explosive Cask (R)**. His **Body Slam (E)** is the only gap-close (ability that quickly closes distance) and the only hard CC, so good Gragas play is patient — clear the camps, save **E** for the gank or the engage, and then commit fully when **R** is up. He has natural sustain (passive HP regen during fights) from **Happy Hour (P)** that lets him clear without backing, and **Drunken Rage (W)** gives him a 30% damage reduction window that absorbs the first big chunk of damage in any short skirmish.

Your win condition is the first pickoff at level 6 — knocking an isolated enemy out of position with **R** for a free kill. From there, the team plays around the next **R** cooldown: walk to the enemy jungler when he's in your river, or set up a fight at a Drake (a neutral monster that gives the team a permanent stat buff) where one **R** flip kills the enemy ADC (the bot-lane marksman, your team's main damage dealer in the late game) before the fight even starts. If you don't have **R** ready, do not start a fight — you're an enabler (a champion who creates fights for the team), not a 1v1 duelist.

## Recommended Build

**Starting items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Standard ranged-Smite jungle starter — Gragas's auto-attacks are ranged for the purpose of starter selection.

**Core items (in order):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade from Hailblade (auto-evolves around minute 3-4 once you've cleared enough XP). The AP-burst pet companion: each post-cast basic attack adds bonus magic damage and a slow that stacks with **Q**.
2. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — sustained AP burn item. Gives omnivamp (life-steal that works on every type of damage, not just basic attacks) and ramps damage in extended fights, which fits Gragas's drawn-out engages.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration. Take ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** instead if the enemy team has 3+ hard CC abilities.
4. ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — Ability Haste plus Movement Speed after damaging a champion. The mobility lets you re-position around the fight to land a second **E** stun once the cooldown comes back.
5. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — Ability Haste plus a percent-max-HP magic damage burn that ramps the longer you fight. Punishes tanky enemy frontliners (Sejuani, Ornn) where flat AP starts losing efficiency.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — against assassins or dive comps. Pop the active right after **R** to survive the follow-up burst.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — against single-target magic CC (Ahri charm, Lissandra **R**). The spell shield eats the lockdown ability that would otherwise cancel your **R**.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — against healing-stacking comps (Soraka, Vladimir, Dr. Mundo). The R-active drops a healing-reduction zone that pairs with your knockback.
- ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — only when you're 3+ items ahead and want to swap from engage to one-shot duty.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** by default. Swap to ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** against heavy crowd control (CC), or ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** when 4+ enemies deal physical damage.

**Skill order:** Max **E** first (your stun and main damage), **Q** second (waveclear and ranged poke), **W** last. Take **R** at levels 6, 11, 16.

**Runes:** Primary **Resolve** with **Aftershock**, **Font of Life**, **Conditioning**, **Revitalize**. Secondary **Sorcery** with **Nimbus Cloak** and **Transcendence**. Stat shards: Ability Haste, Adaptive Force, Health Scaling.

## Key matchups

- **Lee Sin / Viego:** Mobile skirmishers (junglers built for short, repeated fights) that out-fight you before level 6. Don't contest first Scuttle Crab (the river crab that gives vision and a movement speed buff to whoever kills it); clear full camps and look to scale (grow stronger with items and levels) into **R** at level 6, where one good cask flip evens the matchup instantly.
- **Master Yi / Kindred:** Squishy (low-HP, no resistances) carry junglers. Track their pathing on the minimap; if Yi is bot side and you're top, walk down with full HP and look for a level-6 mid lane gank — your **E** stun shuts down his Alpha Strike (untargetable dash) reset cycle.
- **Karthus:** He scales into a teamfight ult menace. Your job is to interrupt his channel with **R** — track his level 6 spawn and ping mid that you'll cancel the ult every time it comes up.
- **Sejuani / Amumu:** Front-to-back tanks. Don't try to out-engage them solo; let them commit first, then **R** their carry off the wall they create. Your **E** stun chains with their CC for a guaranteed kill on whoever they pinned.
- **Nidalee:** Long-range poke (chip damage from outside her enemy's reach) punishes your engage wind-up time. Buy ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** early; weave through fog of war (the unrevealed gray parts of the map) in your jungle and never face-tank her spears in the lane river while ganking.

## Power spikes & win conditions

- **Level 3 (E unlocked):** First gank window. Walk into a lane that has **Flash** down on the enemy laner, **W** before entering vision, then **E** through a wall for the surprise stun. Set up your laner for follow-up.
- **Level 6 (first Explosive Cask):** Power spike. With a single **R** you can knock an over-extended enemy laner into your tower or into your jungler's gank. Force one good fight before you back.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker completion (~ minute 13-15):** First major fighting spike. Sustained AP burn plus omnivamp means you can trade extended in skirmishes; force a Drake fight here.
- **3 items + boots (~ minute 25-28):** Teamfight peak. Aftershock plus ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** plus ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** plus ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** make you the most reliable engager on the map. Group with team and look for objective fights.

## Common mistakes

- **Using E to clear camps when an invade is incoming.** **E** has a 14-second cooldown at rank 1. If you Body Slam into a Krug and the enemy jungler walks in 3 seconds later, you have no escape and no stun. Save **E** when minimap shows the enemy jungler near your jungle border.
- **Throwing R as opening damage.** **R** is a knockback, not a damage spell. If you cast it without a target placement plan, you scatter the enemy team away from your follow-up. Always picture where the enemy carry will land before you press **R** — knock them into your team, not away.
- **Maxing W instead of E.** **W** does not give Gragas his stun, his gap-close, or his clear speed — **E** does all three. Max **E** first every game.
- **Ganking before level 3.** Without **E**, Gragas has no way to catch a target that isn't already tower-diving you. Skip pre-3 ganks; clear two-camp tempo and gank with the **W-E** combo at level 3.
- **Solo dueling Kayn after he transforms.** Kayn-Rhaast deals true damage that ignores your tank stats. Avoid 1v1s in his jungle late game; group with team for objectives instead.

## Advanced tip

Practice the **R-Flash combo**: cast **R** at the enemy carry's feet, then **Flash** mid-cast to reposition the cask point next to your team. The cask still detonates from the Flashed location, so a carry standing at safe range gets knocked into your team's frontline before they realize the angle changed. This is the single highest-value Gragas mechanic in patched solo queue and is worth 30 minutes of practice tool time before you attempt it in ranked.
