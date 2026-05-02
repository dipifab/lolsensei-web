---
title: "Elise Support Build & Guide — Patch 16.9"
slug: "elise-support"
language: "en"
patch: "16.9"
champion: "elise"
role: "support"
last_updated: "2026-05-02"
description: "Elise support guide for League of Legends Patch 16.9: Cocoon engage angles, build path through Bloodsong, key matchups, power spikes, and a closing tip."
quick_learn:
  champion_dd_id: "Elise"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Burst Mage / Engage"
  abilities:
    - key: "P"
      name: "Spider Queen"
      description: "Two forms. Human: ability hits store dormant Spiderlings. Spider: basic attacks deal bonus magic damage and heal Elise."
      dd_spell_id: "Elise_Passive"
    - key: "Q"
      name: "Neurotoxin / Venomous Bite"
      description: "Human: targeted poke that scales on the enemy's current HP (anti-tank). Spider: lunge dealing damage scaling on missing HP (executes low-HP targets)."
      dd_spell_id: "EliseHumanQ"
    - key: "W"
      name: "Volatile Spiderling / Skittering Frenzy"
      description: "Human: throws a Volatile Spiderling that walks forward and explodes near enemies (slow + AOE damage). Spider: Elise and her pets gain attack speed for sustained DPS."
      dd_spell_id: "EliseHumanW"
    - key: "E"
      name: "Cocoon / Rappel"
      description: "Human: linear skillshot that stuns the first enemy hit. Your engage tool. Spider: Rappel — short untargetable lift, then drop on a target with bonus damage."
      dd_spell_id: "EliseHumanE"
    - key: "R"
      name: "Spider Form"
      description: "Toggle ultimate switching between Human (ranged caster) and Spider (melee skirmisher with movement speed and a Spiderling swarm). Free swap off cooldown."
      dd_spell_id: "EliseR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "E" }
    - { level: 9, key: "Q" }
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
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
  situational_items:
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC (Ahri charm, Lissandra R) — spell shield blocks one engage and lets you re-cocoon"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs heavy hard CC (stuns, knock-ups) — boots swap that adds tenacity (CC duration reduction)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "vs AOE burst comps (Yasuo + Malphite, Orianna + Wombo) — active shields the whole team"
    - dd_id: "3041"
      name: "Mejai's Soulstealer"
      against: "buy when 10+ kills/assists ahead with no deaths — converts your snowball lead into pure AP scaling"
  base_combo: ["E", "W", "Q", "R", "Q"]
  win_condition: "Engage with E cocoon from fog of war (the unwarded part of the map) to set up your ADC's all-in. Stay relevant late by stunning the enemy carry inside Aftershock and Liandry's Torment burst windows."
  weakness: "Tied to landing E cocoon: a missed skillshot leaves you in melee range with no escape. Outranged hard by hook supports who grab you before you can cast."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primary: Aftershock triggers on cocoon stun for armor + MR plus a delayed AOE shockwave — the survival window you need after engaging from melee. Font of Life heals your ADC every cocoon, Bone Plating cushions early all-ins, Revitalize amplifies heal/shield."
    secondary_rationale: "Sorcery secondary: Manaflow Band keeps mana steady through the early laning phase (cocoon costs 50-90 mana per cast) and Transcendence pushes Ability Haste (cooldown reduction) past 40% so cocoon comes back faster in extended fights."
    secondary_alternative: "Versus heavy poke or all-in lanes (Lucian + Nami, Draven + Thresh), swap Sorcery to Inspiration with Magical Footwear (8304, free boots minute 10) and Cosmic Insight (8347, summoner spell cooldown reduction); the extra Flash uptime saves you from missed engages."
matchup_draft:
  pick_into:
    - examples: ["soraka", "lulu", "karma"]
      archetype: "Squishy enchanter supports without tenacity"
      reason: "Long cocoon stun ignores their utility kit. They have no Flash-like escape, and Liandry's Torment burn (damage spread over a few seconds) punishes their shields and heals."
    - examples: ["senna", "caitlyn", "ashe"]
      archetype: "Immobile ranged carries with no dash"
      reason: "E cocoon from a bush catches them flat-footed. Once stunned, a level 3 W (slow) plus Q (anti-HP) plus the ADC's burst kills before Flash can answer."
    - examples: ["draven", "samira"]
      archetype: "Aggressive carries that step forward for kills"
      reason: "Their kill pressure forces them past wave equilibrium (the safe lane line). Cocoon punishes the step forward, Aftershock turns their all-in (full commit trade) around."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "Hook supports who outrange cocoon"
      reason: "Blitzcrank's hook range (~1100) outdistances E cast range (1075). They engage on you first, removing your engage tool and leaving you melee in Spider form with no escape."
    - examples: ["sivir", "morgana"]
      archetype: "Spell shields that block cocoon"
      reason: "A single Spell Shield charge eats your stun completely. Without cocoon you have no setup, and your team's follow-up engage stalls until the cooldown returns."
    - examples: ["leona", "nautilus", "rell"]
      archetype: "Tanky engage supports with point-and-click CC"
      reason: "Their engage is targeted (no skillshot to dodge). They will stick onto your ADC longer than you can hold them, and your magic damage does not kill them through their armor."
---

## Overview

> **Quick acronym key (read once):** **ADC** = Attack Damage Carry, the bot-laner who deals physical damage (Caitlyn, Jinx). **AP** = Ability Power, the stat that scales magic abilities. **MR** = Magic Resist, defense against magic. **CS** = Creep Score, number of minions you killed. **CC** = Crowd Control, any effect that stops a champion (stun, slow). **Engage** = starting a fight. **Disengage** = breaking off a fight. **Trade** = brief exchange of damage. **All-in** = full commit fight. **Peel** = protecting your carry. **Kite** = moving backwards while attacking.

Elise support is an engage-mage hybrid: she lands **Cocoon (E)** from a bush or fog of war (the unwarded part of the map) to root the enemy carry, then commits with **Spider Form (R)** for follow-up damage and untargetable disengage via **Rappel**. She trades the safety of an enchanter for hard kill pressure — every successful cocoon at level 3-6 should produce a kill or a flash burned. Her weakness is the same as her strength: without a landed cocoon, she has no engage and no heals to fall back on.

The game plan is to bully bot lane in the first 6 levels, pick up Bloodsong and **Sorcerer's Shoes** by minute 12-14, then roam to the mid lane with **Spider Form** movement speed boost. Late game her job switches: she becomes a flank assassin who waits for the enemy carry to step out of position, hits cocoon from a side angle, and lets the team finish.

## Recommended Build

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (the support quest item: gives you support gold over time as long as you do not last-hit minions yourself) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**.

**Core items (in order):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — final upgrade of the support quest line (World Atlas → Runic Compass → Bounty of Worlds → Bloodsong). The AP variant: every fourth basic attack against a champion deals bonus magic damage. Naturally synergizes with Spider form's quick auto-attacks during a dive.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration. Crucial because as a support you have less gold than the mid laner, so penetration is more efficient than pure AP early.
3. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — first big AP item. The HP-based burn (damage that scales with the target's max HP, spread over a few seconds) punishes tanky frontline engages who try to absorb your cocoon stun.
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — every ability slows. Turns your **W** into a chase tool, and stacks with cocoon stun for follow-up reliability.
5. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — survival item. After engaging in melee range, the active gives you 2.5 seconds of stasis (you cannot move, take damage, or be targeted), giving the team time to clean up.

**Situational items:**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — into single-target magic CC (Ahri charm, Lissandra R).
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — boots swap when the enemy team has heavy hard CC.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — into AOE burst compositions (Yasuo + Malphite combo, Orianna wombo combo).
- ![Mejai's Soulstealer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3041.png) **Mejai's Soulstealer** — only when you are 10+ kills/assists ahead with zero deaths. Stack risk is real; do not buy it down.

**Boots:** Sorcerer's Shoes is the standard. Mercury's Treads if the enemy team has three or more sources of hard CC (stuns, knock-ups).

**Skill order:** Max **E** first (cocoon stun is your job), **Q** second (damage), **W** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Resolve** with **Aftershock**, **Font of Life**, **Bone Plating**, **Revitalize**. Secondary **Sorcery** with **Manaflow Band** and **Transcendence**.

## Key matchups

- **Blitzcrank:** Worst lane matchup. His Q outranges your E by ~25 units. Hide behind your ADC, never step forward to throw cocoon — he will hook you the moment you commit.
- **Thresh:** Hook duel you can survive but rarely win. Wait for him to throw and miss his Q, then walk forward to land cocoon in the recovery window. Avoid stepping into the lantern arc when he engages on your ADC.
- **Soraka:** Free lane. Her silence is short-range and her heal is interruptible by cocoon. Engage at level 3 with full mana; the trade burns her health bar faster than she can heal it back.
- **Leona:** She wins the all-in fight but loses the poke war. Stand at max cocoon range, throw E to interrupt her **W** (Eclipse) animation, and back off. Do not commit unless you can land cocoon first.
- **Sivir:** Her **E** (Spell Shield) blocks cocoon entirely. Bait the shield by throwing **W** spiderling first; once she shields the W, your cocoon lands clean for the duration of her shield cooldown (~12 seconds).

## Power spikes & win conditions

- **Level 2:** With **E** + **Q**, you have an all-in setup. Push level 2 first against melee supports and engage on the first cocoon hit.
- **Level 6:** First **Spider Form (R)**. Disengage and re-engage potential doubles; you can dive a low-HP enemy under tower with Rappel as a re-positioning tool.
- ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minute 13-15):** Roam window. Move to mid for a 3v2 if your wave is shoved into the enemy tower. The mid-lane snipe with **Cocoon (E)** + **Spider Q** finishing usually kills any squishy mid laner.
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment online (~ minute 18-20):** Teamfight readiness. Your job is now to flank the back line through side bushes; hit cocoon on the enemy ADC, **Aftershock** triggers on the stun, your team cleans up.

## Common mistakes

- **Throwing E cocoon as poke.** Same rule as Elise jungle: cocoon is engage, not harassment. Wait for the carry to step forward; a missed cocoon means you spend the next 12 seconds defenseless.
- **Auto-attacking minions in lane.** Support items punish minion CS — last-hitting minions cancels World Atlas gold income and starves your ADC. Use **W** on the wave only when the next wave is bouncing back.
- **Engaging without ADC follow-up.** Glance at your ADC's mana bar and ability cooldowns before pulling the cocoon trigger. If they are out of mana or with **Flash** down, do not engage; you will trade 1-for-1 at best.
- **Forgetting to buy ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) wards on every back.** As a support you set the vision on the map. Bush wards on the river control engage angles for your jungler. Use ![Oracle Lens](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3364.png) Oracle Lens when sweeping for hidden enemy wards before objectives.
- **Diving with R when no escape is up.** Spider form has no built-in escape. If your **Flash** and **Rappel** are both down, do not commit to a dive under tower; the enemy ADC will kite you (move backwards while attacking) until tower kills you.

## Advanced tip

Set up cocoon angles with vision before the fight starts. A ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) **Stealth Ward** placed in the side bush gives you a free engage angle: walk into the bush from fog, throw cocoon while the enemy ADC steps forward to last-hit, then **Spider R** + Rappel drop. The whole sequence is invisible from the enemy's perspective until the cocoon lands. This is the single highest-impact play Elise support can run, and most low-rank Elise players ignore it because they engage straight from lane instead of from prepared angles.
