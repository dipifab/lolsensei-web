---
title: "Orianna Mid Build & Guide — Patch 16.9"
slug: "orianna-mid"
language: "en"
patch: "16.9"
champion: "orianna"
role: "mid"
last_updated: "2026-04-29"
description: "Orianna mid lane guide for League of Legends Patch 16.9: Ball positioning, control mage build, key matchups, power spikes, common mistakes and one closing tip."
quick_learn:
  champion_dd_id: "Orianna"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Control"
  abilities:
    - key: "P"
      name: "Clockwork Windup"
      description: "Auto-attacks deal bonus magic damage that ramps up the more times you hit the same target. Rewards staying in attack range during trades."
      dd_spell_id: "Orianna_Passive"
    - key: "Q"
      name: "Command: Attack"
      description: "Sends the Ball in a line, damaging enemies it passes and parking at the destination. Damage falls off after the first target. Main poke and waveclear tool."
      dd_spell_id: "OrianaIzunaCommand"
    - key: "W"
      name: "Command: Dissonance"
      description: "Damaging pulse around the Ball that leaves a field slowing enemies and speeding allies. Use to chase, kite, or peel."
      dd_spell_id: "OrianaDissonanceCommand"
    - key: "E"
      name: "Command: Protect"
      description: "Sends the Ball to an ally, damaging enemies on the way and shielding the target. Passive: while attached, the ally gains Armor and Magic Resist."
      dd_spell_id: "OrianaRedactCommand"
    - key: "R"
      name: "Command: Shockwave"
      description: "Knocks all enemies near the Ball toward the Ball after a short delay. Premier teamfight ultimate — group multiple targets for a wombo (full-team combo follow-up)."
      dd_spell_id: "OrianaDetonateCommand"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs divers and assassins (Zed, Diana, Talon, Akali) — stasis covers your R wind-up so the team can follow up"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC (Ahri charm, Lissandra R, Twisted Fate stun)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap when any priority target buys a Magic Resist item"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs healing-stacking comps (Soraka, Vladimir, Dr. Mundo)"
  base_combo: ["E", "Q", "W", "AA", "R"]
  win_condition: "Land Command: Shockwave on two or more enemies in a teamfight after Luden's Echo and Rabadon's are online. Control space with Q/W and stay behind your front line until R lands."
  weakness: "No dash and short cast windows. Dives that pre-empt R cast or Wind Wall projectiles shut down both poke and ult; if the front line breaks, Orianna gets deleted."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["sion", "malphite", "rell", "amumu"]
      archetype: "Group-up engage tanks"
      reason: "Their team telegraphs stacking on the engage frontliner; one Command: Shockwave on the cluster catches three or more for a wombo (full-team combo follow-up)."
    - examples: ["karthus", "veigar", "anivia"]
      archetype: "Immobile mages without dash"
      reason: "Orianna out-ranges their poke with Q at 825 range and walks them down using W slow plus passive ramping autos in extended trades."
    - examples: ["senna", "kalista", "varus"]
      archetype: "Static-positioning ranged carries"
      reason: "Backline carries that hold ground in objective fights eat a max-range R when Orianna parks the Ball into the cluster from fog of war."
  counterpicks:
    - examples: ["yasuo", "yone", "samira"]
      archetype: "Wind Wall / projectile blockers"
      reason: "They block Q and the R-onto-ball cast when the Ball travels as a projectile, neutralizing both Orianna's poke and her wombo setup."
    - examples: ["zed", "akali", "fizz"]
      archetype: "Mobile assassins with multi-gap-close"
      reason: "Multiple dashes (gap-closers — abilities that close distance fast) jump on Orianna inside her short Q range; she has no dash to disengage."
    - examples: ["leblanc", "ahri", "talon"]
      archetype: "Roam-priority burst champions"
      reason: "They shove the wave and roam to side lanes; Orianna lacks the mobility to follow and loses macro pressure even when she is even in lane."
---

## Overview

Orianna is a control mage built around a single object: her Ball. Every ability except her passive sends, parks, or detonates the Ball, and her ultimate **Command: Shockwave (R)** is the highest-impact teamfight tool in the mid lane pool — a delayed pull that yanks every nearby enemy toward the Ball. She has no dash and short cast windows, which means her safety comes from Ball positioning (cover yourself with shields and zones) rather than from movement.

Her game plan is to control the wave with **Command: Attack (Q)**, poke whoever steps inside her range with the same spell, and look for a multi-target **R** in any objective fight after level 6. Skill expression sits in *where the Ball is right now*: a Ball parked between you and the enemy is a poke setup, a Ball on your front line ally is a shield plus pre-loaded ult, and a Ball thrown into fog of war is a snap teamfight start.

## Recommended Build

**Starting items:** Doran's Ring + 2 Health Potions. Skip Corrupting Potion unless the lane harasses you with auto-attacks heavily.

**Core items (in order):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — burst spike on first item with mana sustain so Q can be spammed for waveclear.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration to delete squishies (champions with low defenses, like ADCs and mages).
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — late-game AP multiplier; Orianna's R scales hard with raw AP.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — extra burst; the HP-threshold passive (extra damage when the target is below a low-HP soft cap) lines up with a finishing R.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — into divers and assassins (Zed, Diana, Talon, Akali). Stasis covers the gap between cast and impact of your R.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — into single-target magic CC (Ahri charm, Lissandra R, Twisted Fate stun) that would cancel your R channel.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — the moment any priority target buys a Magic Resist item.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — into healing-stacking comps (Soraka mid, Vladimir, Dr. Mundo).

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** is default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** are an option if your team needs faster R uptime as a teamfight starter.

**Skill order:** Max **Q** first (poke and waveclear), **W** second (slow zone), **E** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Sorcery** with **Electrocute** (taken from Domination as keystone via custom path is the canonical heavy-trade variant) — in stable Sorcery primary you run **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Inspiration** with **Biscuit Delivery** and **Cosmic Insight**. **Phase Rush** is a valid swap into kite-heavy matchups (Yasuo, Zed) for the movement speed escape window.

## Key matchups

- **Yasuo / Yone:** Wind Wall blocks **Q** and the Ball projectile entirely. Hold **Q** until they burn Wind Wall, then push with **Q** plus **W**. Don't let them get in auto range — passive ramping autos work both ways and they out-trade you up close.
- **Zed:** Vulnerable matchup. Track his **W** shadow placement; rush ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** after Luden's. Save **Flash** for his all-in at level 6, not for harassing him.
- **Twisted Fate:** Roam priority race. Push every wave with **Q** and ping mid danger when his **R** comes up at 6. If he picks gold card on you, Ball-shield (E) onto yourself to soak the auto-attack proc.
- **Galio:** Avoid stacking with allies in mid pre-6 (his **W** punishes grouped targets). Punish him while he is meleeing minions; he has no waveclear range to outpush you. Watch for his ult roams to side lanes after level 6.
- **Lux:** Even matchup, decided by team fights. Ranges match; out-trade her with passive auto-attack stacks if she misses **Q** since you scale better with the same item set.

## Power spikes & win conditions

- **Level 2:** With **Q** plus **W**, you have the first proper trade pattern: Ball forward with **Q**, **W** on top to slow, walk up for two passive-stacked autos, walk back. Most lanes lose the level-2 race against this.
- **Level 6:** First **Command: Shockwave**. Even one-target R is a flash-equivalent reposition for your jungler's gank. Two-target R near the river is a free double kill.
- **![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Echo completion (~ minute 12-14):** Wave control flips. Push side lanes with **Q**, look for cross-map plays around Drake and Rift Herald with R.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minute 24-28):** R into the back line one-shots squishies stacked together. Force objective fights here — this is your peak.

## Common mistakes

- **Throwing R as a single-target finisher on full HP.** R is a setup ult, not a snipe. If two enemies are not within Ball radius, hold it; chain **W** then **R** when the cluster forms.
- **Leaving the Ball on the wave during all-ins.** When you're about to be engaged on, **E** to yourself for the shield and the Ball reposition. A Ball on a minion is a Ball doing nothing for you in a teamfight.
- **Using passive ramping autos like a marksman.** Two stacks already deal heavy damage; a third is great but stepping forward for a fourth often eats a counter-engage. Trade in three-auto windows, then back out.
- **Forgetting Ball position before R.** The Ball's current location, not Orianna's, is the R origin. If the Ball is on a backline ally, R lands on your team. Always **Q** or **W** the Ball forward before pressing R.
- **Pushing without prio before Drake spawns.** Orianna's waveclear is so strong that the temptation is to always shove. Sometimes hold the wave on your side so you arrive first to Drake — prio (priority — leaving the lane without losing minions or HP) matters more than chip damage.

## Advanced tip

Master the **Q-W self-cast combo around the Ball**: cast **Q** to send the Ball forward, then immediately **W** at the Ball location. The Ball arrives, the W pulse triggers on it, and any enemy walking onto the Q endpoint takes Q damage plus W damage plus the slow at the same instant. This compresses your trade window from two casts down to one reaction frame — most opponents at low ranks cannot dodge both halves.
