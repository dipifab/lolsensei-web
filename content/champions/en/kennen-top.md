---
title: "Kennen Top Build & Guide — Patch 16.9"
slug: "kennen-top"
language: "en"
patch: "16.9"
champion: "kennen"
role: "top"
last_updated: "2026-05-05"
description: "Kennen top lane guide for League of Legends Patch 16.9: starter kit, AP bruiser build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Kennen"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Teamfight Engager"
  abilities:
    - key: "P"
      name: "Mark of the Storm"
      description: "Every Kennen ability stacks a Mark on the target. Three stacks stun them. This is the engine of the kit — every combo aims to triple-stack."
      dd_spell_id: "Kennen_Passive"
    - key: "Q"
      name: "Thundering Shuriken"
      description: "Linear skillshot that deals magic damage and applies one Mark stack. Long-range poke and the easy first stack on a target."
      dd_spell_id: "KennenShurikenHurlMissile1"
    - key: "W"
      name: "Electrical Surge"
      description: "Passive on-hit: every 5th basic attack deals bonus magic damage and applies a Mark. Active: detonate a magic damage burst on every nearby enemy that already has a Mark."
      dd_spell_id: "KennenBringTheLight"
    - key: "E"
      name: "Lightning Rush"
      description: "Short dash through units that applies one Mark stack and refunds energy on hit. After ending it, Kennen gains attack speed for a few seconds. Movement and re-positioning tool."
      dd_spell_id: "KennenLightningRush"
    - key: "R"
      name: "Slicing Maelstrom"
      description: "Channeled AOE storm around Kennen. Every tick deals magic damage and applies one Mark stack to enemies hit. Triggers AOE stuns on the whole enemy team if they sit in it."
      dd_spell_id: "KennenShurikenStorm"
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
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "4633"
      name: "Riftmaker"
      against: "vs extended fights and bruiser top lanes (Sett, Darius, Mordekaiser) — sustain in fight plus true damage conversion"
    - dd_id: "4645"
      name: "Shadowflame"
      against: "vs squishy enemy backline with no Magic Resist — HP-threshold passive lines up with R finishers under 35% HP"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap when any priority target buys a Magic Resist item"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs healing-stacking enemies (Vladimir top, Dr. Mundo, Yorick with sustain runes)"
  base_combo: ["Q", "E", "R", "W", "AA"]
  win_condition: "Land Flash + R into the enemy back line during teamfights to triple-stack the passive on multiple targets at once. AOE stun + W detonate wins the fight."
  weakness: "No reliable hard CC outside R, and the R is a channeled ability you have to commit to — point-and-click stuns or knock-ups (Pantheon, Camille) cancel your fight before stacks land."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8139, name: "Taste of Blood", icon_path: "perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination primary: Electrocute procs on Q + W detonate + auto, adding burst on every triple-stack. Taste of Blood adds lane sustain, Sixth Sense pings hidden enemy wards in side lanes (vital for flank engages), Ultimate Hunter shortens R cooldown — Kennen's fight engine."
    secondary_rationale: "Resolve secondary: Kennen wants to dive in melee with R, so Second Wind heals you back as you take poke in lane and Bone Plating absorbs the first three hits when you commit to an all-in (full trade until kill)."
    secondary_alternative: "Into hard ranged poke (Vladimir, Lillia top), swap Resolve to Sorcery with Manaflow Band (extra energy / spell uptime is replaced by Nimbus Cloak — extra movement speed after summoner spells — to land R faster) and Transcendence for ability haste."
matchup_draft:
  pick_into:
    - examples: ["garen", "sett", "darius"]
      archetype: "Melee bruisers without a gap-closer"
      reason: "Kennen's auto-attack range (~550) outranges their walking speed; Q poke and E reposition farm safely from outside their threat range until level 6 power spike."
    - examples: ["tryndamere", "yorick"]
      archetype: "Splitpushers without reliable hard CC"
      reason: "They cannot lock you down to prevent your R channel. Once Kennen reaches an item or two, every teamfight he flanks is a 3-stack stun on multiple enemies — they cannot match that map impact alone in a side lane."
    - examples: ["udyr", "olaf"]
      archetype: "Short-range juggernauts"
      reason: "Kite them with E dash and the on-hit W passive; their stickiness depends on landing every step on you, and your range plus dash refresh keeps them outside auto-attack range."
  counterpicks:
    - examples: ["pantheon", "camille"]
      archetype: "Point-and-click hard CC bruisers"
      reason: "Their stun (Pantheon W) or root (Camille E second cast) cancels your R channel mid-cast — you lose the AOE stun setup before any stack lands, turning your engage into a wasted ult."
    - examples: ["vladimir", "lillia"]
      archetype: "Ranged sustain top laners"
      reason: "They out-range your Q for the first 6 levels and heal off poke trades. Without gap-closer, Kennen takes the worse end of every short trade and falls behind on CS by minute 8."
    - examples: ["sion", "galio"]
      archetype: "Magic Resist tanks with cleanse passives"
      reason: "Sion's passive death + Galio's W magic damage shield neutralize your burst windows. Three Mark stacks still stun, but the W detonate hits for half value once they stack MR."
---

## Overview

Kennen is a ranged AP yordle who plays the top lane as a flank engager (the player who walks around the fight to enter from a side the enemy is not watching). The whole kit is built around one mechanic: **Mark of the Storm (P)** stacks three times and stuns. Every ability — **Q**, **W** active, **E** dash, every tick of **R** — drops one stack, so a clean teamfight engage stuns the entire enemy team in two seconds. He has good lane phase thanks to a ~550 auto-attack range that outranges most bruisers, but his identity unlocks at level 6: he is the top-lane flank engager that turns mid-late teamfights on their head.

His game plan is simple to describe and demanding to execute: farm safely with **Q** poke (long-range harass to lower the enemy's HP without committing to a fight) and the on-hit **W** passive (an extra effect that fires every few basic attacks), hold pressure for objectives, then **Flash + R** into the enemy back line (the row of squishy carries — high-damage low-HP champions like ADC and mages — standing behind their tanks). The skill expression sits in two places: energy management (Kennen burns energy fast and cannot cast without it) and choosing the right teamfight angle so your **R** channel is not interrupted by a point-and-click stun (a stun the enemy can apply by clicking you, no aim needed).

## Recommended Build

**Starting items:** Doran's Shield + 2 Health Potions. Doran's Ring is acceptable if the lane has zero auto-attack harass and you want the early energy regen.

**Core items (in order):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — burn damage scales with the multi-target nature of **R**. Every tick on every enemy procs the burn, melting tank HP pools.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration for the squishy back line you most want to stun and delete.
3. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — buys you a stasis after **Flash + R**, so the enemy team blows their cooldowns on a frozen target while your stun stacks finish landing.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — late-game AP multiplier. The **R** burst it produces one-shots squishies that have not bought Magic Resist.

**Situational items:**

- ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — replace Liandry's into bruiser top lanes (Sett, Darius, Mordekaiser). Sustain in fight (capacity to heal/regen during the fight) plus true damage conversion lets you survive the inevitable second wave of melee enemies on you.
- ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — vs squishy enemy back line with no Magic Resist item. Extra magic penetration on enemies under 35% HP lines up with **R** finishers.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — the moment any priority target buys a Magic Resist item.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — vs healing-stacking enemies (Vladimir top, Dr. Mundo, Yorick).

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** is default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** is acceptable into 2+ magic damage threats with hard CC.

**Skill order:** Max **Q** first (highest base damage, lowest cooldown — your main poke and stack tool), **W** second (better in-fight burst), **E** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Domination** with **Electrocute**, **Taste of Blood**, **Sixth Sense**, **Ultimate Hunter**. Secondary **Resolve** with **Second Wind** and **Bone Plating** for laning durability.

## Key matchups

- **Garen:** You outrange his auto-attacks. Poke with **Q**, never let his **E** spin on you, and use **E** dash through him when he commits **Q** silence. Lane is winnable from level 3 onwards.
- **Sett:** Stay outside his **W** charge bar — every auto-attack you eat fills it. Trade only when his **W** is empty; **E** through him to break facing if he lands **E** stun.
- **Pantheon:** Hardest matchup. His **W** is point-and-click and will cancel your **R** channel every fight. Build ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** before second item, and never engage with **R** until his **W** is on cooldown.
- **Vladimir:** Long lane, you fall behind on CS. Take Doran's Shield + Second Wind, hold **Q** as a punish for his pool, and call jungle pressure pre-6 because you cannot win an extended trade.
- **Mordekaiser:** Even matchup that flips on **R**: his death realm cancels your team's peel, but you bring AOE stun. If his **R** is up, do not engage; if it is down, you can pop yours into his back line.

## Power spikes & win conditions

- **Level 6:** First **Slicing Maelstrom**. Combined with **Flash**, this is the moment Kennen becomes a champion that decides games — Flash + R into a grouped enemy team stuns everyone within range.
- **Level 9 (Q maxed):** **Thundering Shuriken** cooldown is 4 seconds at rank 5. Lane phase and side-lane farm become trivial; you can poke towers down with safe **Q** harass.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minute 14-16):** First teamfight item spike. Group with your team for any drake fight; your **R** at 2 items deletes squishy supports and ADCs.
- **Three items + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ minute 24-28):** Burst threshold flips. Your **R** + **W** detonate combo will one-shot any back line that has not built Magic Resist. Force Baron and late-game objective fights.

## Common mistakes

- **Engaging R without Flash up.** Kennen has no gap-closer to a back line. Without **Flash + R**, you can only catch the front line (the tanks and bruisers who open the fight) — and stunning their tank wins you nothing while their carries kite you to death (move backward while attacking, keeping you outside their auto range).
- **Spending all your energy in lane.** Kennen has no mana, but he has energy that regenerates slowly. Spam **Q** in the wave and you will be empty when the enemy jungler arrives. Always keep ~50 energy for **E** dash to escape.
- **Maxing W first.** **W**'s active damage is bigger than **Q**'s, but **Q** has 4-second cooldown at rank 5 versus 6-second on **W**. **Q** maxed first means more stacks per minute and more sustained poke; **W** stays at rank 1 until level 8.
- **R-cancelling yourself by leaving the ring.** **R** is a channel anchored to your champion. If you walk out of teamfight range, the ticks stop hitting enemies. Stand in the middle of the fight, not on the edge — Zhonya's exists exactly for this.
- **Forgetting the on-hit W passive.** Every 5th auto-attack triggers magic damage plus a free Mark stack. In a 1v1 trade, weave 2 autos between **Q** and **E** to bait the opponent into eating an unexpected stun.

## Advanced tip

The strongest Kennen flank is what high-level players call the "blind ult": from fog of war, Flash directly into the largest enemy cluster and **R** before they see your model. Their reaction window is the audio cue of **R** plus your character render — about 0.4 seconds — which is shorter than the time to step out of the channel range. To set this up, your team needs to be in a fight already (or pretend to be), so the enemies are facing forward and you walk around them through unwarded jungle. Practice this on Drake fights at minute 14-16: cross river, hide in the enemy raptor camp, wait for the front line to engage on your team, then Flash + R into the back line. One clean execution wins a 4v5 outnumbered objective.
