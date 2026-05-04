---
title: "Heimerdinger Mid Build & Guide — Patch 16.9"
slug: "heimerdinger-mid"
language: "en"
patch: "16.9"
champion: "heimerdinger"
role: "mid"
last_updated: "2026-05-02"
description: "Heimerdinger mid guide for Patch 16.9: best build path, rune page, turret placement, matchups, power spikes, and pro tips to dominate with the Revered Inventor."
quick_learn:
  champion_dd_id: "Heimerdinger"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Artillery"
  abilities:
    - key: "P"
      name: "Hextech Affinity"
      description: "Gain bonus Move Speed while near allied towers or your own deployed turrets."
      dd_spell_id: "Heimerdinger_Passive"
    - key: "Q"
      name: "H-28 G Evolution Turret"
      description: "Deploy a turret (max 3 active). Turrets build charge; at max charge fire a beam. Charges reset on Q cast. Range 350."
      dd_spell_id: "HeimerdingerQ"
    - key: "W"
      name: "Hextech Micro-Rockets"
      description: "Long-range rocket barrage (1325 range) converging on cursor. Extra hits deal reduced damage. Each rocket hitting a champion grants nearby turrets 20% charge."
      dd_spell_id: "HeimerdingerW"
    - key: "E"
      name: "CH-2 Electron Storm Grenade"
      description: "Lob a grenade (970 range): slows enemies in the area, stuns enemies in the center. Fully charges nearby turrets on hit."
      dd_spell_id: "HeimerdingerE"
    - key: "R"
      name: "UPGRADE!!!"
      description: "Empowers next non-ultimate ability. R+Q: 8s mega-turret with AOE splash and slow. R+W: 4 rocket waves. R+E: larger stun zone with knockup in center."
      dd_spell_id: "HeimerdingerR"
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
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3118", name: "Malignance" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs assassins and divers (Zed, Akali, Diana) — stasis buys time for turrets to respond"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs healing-heavy comps (Vladimir, Soraka mid, Sylas)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "when any priority target buys a Magic Resist item"
  base_combo: ["Q", "Q", "Q", "E", "W", "R+Q"]
  win_condition: "Establish a turret nest, stun with E, shred with W. At level 6 force opponents off the turret cluster with R+Q mega-turret — an immovable zone of death."
  weakness: "No mobility and very short turret deploy range (350). Mobile assassins gap-close before the turrets fire; turrets die instantly to AOE waveclear."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8229
      name: "Arcane Comet"
      icon_path: "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Arcane Comet procs off E (slow pins the target) and W, adding burst on top of turret DPS. Manaflow Band prevents going OOM while re-placing destroyed turrets. Transcendence shortens E and W cooldowns. Gathering Storm scales AP as the game goes long."
    secondary_rationale: "Biscuit Delivery sustains through the mana-hungry early levels and Cosmic Insight lowers cooldowns globally, including UPGRADE!!! — more frequent R+Q mega-turret rotations."
    secondary_alternative: "Against high-poke lanes (Xerath, Vel'Koz) consider swapping Inspiration for Resolve with Second Wind (regenerate HP after taking damage) and Bone Plating (reduce burst from multi-hit combos) to survive longer in lane."
matchup_draft:
  pick_into:
    - examples: ["syndra", "veigar", "anivia"]
      archetype: "Immobile burst mages without dash"
      reason: "They cannot walk into a 3-turret nest without taking sustained DPS. Their burst requires closing range, which the E stun and turret beam punish before they can burst back."
    - examples: ["annie", "malphite", "galio"]
      archetype: "Close-range mages or tanks that must walk into turret coverage"
      reason: "Their engage is melee-range or short-range. Three deployed turrets make the walk-in lethal — a fully charged beam hits them before the engage animation completes."
  counterpicks:
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "Long-range artillery mages who poke from outside turret range"
      reason: "Turrets only cover a radius around Heimerdinger. Artillery mages sit at 1000+ range, safely outside the nest, and chip him to zero without ever entering his zone."
    - examples: ["zed", "akali", "katarina"]
      archetype: "Mobile assassins who gap-close before turrets respond"
      reason: "Turrets have a slow attack cycle. A triple-dash assassin enters the turret nest and kills Heimerdinger before the first beam fires; the cooldown is too short to save him."
    - examples: ["twisted-fate", "ryze"]
      archetype: "Global roamers who skip the turret nest entirely"
      reason: "Heimerdinger cannot roam — uprooting turrets is a three-Q re-invest. The opponent takes free kills on side lanes while Heimerdinger sits in mid optimizing a nest that never gets fought."
---

## Overview

Heimerdinger is a zone-control mage who wins lanes by making them unlivable for opponents. His **H-28 G Evolution Turrets (Q)** — up to three active at once — create a persistent damage field that punishes any enemy who steps into melee or cast range. At max charge each turret fires a powerful beam; the **CH-2 Electron Storm Grenade (E)** stuns or slows enemies into that field, and the **Hextech Micro-Rockets (W)** shred targets from 1325 range. The result is a champion whose strength is entirely about positioning: when his turret nest is up, he is nearly unkillable in a straight exchange; when it is not, he is one of the most vulnerable champions in the game.

His **UPGRADE!!! (R)** changes this calculation completely. Pressing **R+Q** places an enhanced mega-turret — it deals AOE splash damage, applies a slow, and lasts 8 seconds regardless of further **Q** casts. Think of it as an autonomous zone-denial machine. The game plan in mid is to build and hold a nest until level 6, then use **R+Q** to force the opponent off their tier-1 tower and snowball (build an early advantage that compounds into a larger lead) into the mid game.

## Recommended Build

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) Doran's Ring + 2 Health Potions. The mana is critical: turrets cost 20 mana each, and you will recast them frequently.

**Core items (in order):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — burst spike on first item, mana regen for turret replacement, and magic penetration (the ability to ignore part of the enemy's magic resistance) that makes W poke count.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration to punish squishy targets who step into your turret range.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — amplifies burst when the enemy is below a HP threshold, which lines up with R+E into W follow-up combos.
4. ![Malignance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3118.png) **Malignance** — reduces **UPGRADE!!!** cooldown and boosts AP while the ultimate is active; more frequent mega-turret rotations define the mid game.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — late-game AP multiplier; each turret beam and rocket becomes a threat in its own right.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — against assassins and divers (Zed, Akali, Diana). Stasis (entering a brief invincible frozen state) lets the turrets absorb the burst while you wait out their cooldowns.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — against healing-heavy compositions (Vladimir, Sylas). Applies Grievous Wounds (a debuff that cuts healing by 40%) through turret hits.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — the moment any priority target (priority target = the enemy champion who, if killed, most threatens your team — typically the fed carry) builds a Magic Resist item; replaces Rabadon's if the enemy team stacks MR hard.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes is default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) Ionian Boots of Lucidity is acceptable when you need the extra cooldown reduction to cycle **UPGRADE!!!** faster.

**Skill order:** Max **Q** first (main damage source and turret power), **W** second (poke and turret charge), **E** last. Take **R** at levels 6, 11, 16.

**Runes:** Primary **Sorcery** with **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Gathering Storm**. Secondary **Inspiration** with **Biscuit Delivery** and **Cosmic Insight**.

## Key matchups

- **Syndra:** She throws spheres at range but needs to cast from a fixed position. Deploy three turrets under your tier-1 tower, keep the wave slow-pushed (let minions pile up in the center of the lane so the next wave arrives larger), and use **E** to interrupt her sphere pickup. At level 6 you win the all-in (committing fully to a fight expecting to kill the opponent) with **R+Q** on the contested ground.
- **Zed:** The hardest matchup in the pool. He will dash through your turrets before they fire. Respect his level 3 and level 6 power; buy ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) Zhonya's Hourglass as second item. When he uses **Death Mark (R)**, trigger stasis immediately — the turrets will have three seconds to fire.
- **Orianna:** Even poke matchup. She can push your turrets back with **Command: Shockwave (R)** during teamfights. In lane, place turrets on the side of the wave she must approach from. Avoid grouping near your own turret nest when she has her ball nearby.
- **Twisted Fate:** He will ignore your nest and roam. Shove the wave under his tower before he leaves, ward the river, and look for a **R+E** (knockup) into **W** on him if he teleports back in. You cannot stop his macro game (big-picture map strategy), but you can punish his base tower.
- **Viktor:** Immobile mage who needs to stand still to deal damage. A three-turret nest baits out his **Death Ray (E)** while you poke with **W** behind the cluster. Post-6, the **R+Q** mega-turret forces him off the wave entirely or burns his Flash.

## Power spikes & win conditions

- **Level 1:** Place two turrets in the minion wave before the first cannon minion spawns. Opponents who walk into auto-attack range take surprising early DPS (Damage Per Second — the sustained damage the turrets deal every second) and back off the wave — you have first push (wave advantage: your minions push toward their tower, so you can leave your lane to contest Dragon or help mid lane) without even spending mana on poke.
- **Level 6:** **UPGRADE!!!** unlocked. The **R+Q** mega-turret lasts 8 seconds and cannot be CC'd (affected by stun, slow, or any crowd control); it turns the entire Heimerdinger zone into a death trap. Force a fight or a tower trade immediately.
- **Luden's Echo completion (around minute 11-13):** W poke now crits (critical hit: a randomly amplified strike that deals 175% damage) squishy targets for meaningful damage. Pair with E + W to confirm kills through the turret nest.
- **Malignance online (around minute 18-20):** **UPGRADE!!!** cooldown drops to near-60 seconds at high CDR (cooldown reduction — the stat that lowers how long you wait between ability uses). You can place a mega-turret once per rotation fight, which is nearly every objective spawn (objective spawns = when Baron Nashor or Dragon appear on the map, usually every 5-6 minutes).

## Common mistakes

- **Placing turrets in a line.** Put them in a triangle or in the path the enemy must take to approach you. A straight line of three turrets only fires when the enemy advances directly — a triangle fires from multiple angles and is much harder to dodge.
- **Using R+Q in an open field.** The mega-turret is a zone tool, not a solo kill tool. Drop it in a chokepoint (a narrow passage like baron pit, dragon pit, or the bush by tier-2 tower) so the enemy is forced to walk through its damage radius.
- **Recasting Q while turrets still have charge.** A new Q drops a fresh zero-charge turret and resets ALL turrets' charges. Wait until the oldest turret fires its beam before replacing it — otherwise you throw away a fully charged shot.
- **Forgetting Passive movement speed.** **Hextech Affinity** gives you bonus move speed near your own turrets. Use the nest as a kite (move backward while dealing damage) pad: walk into the turret cluster to escape ganks, not away from it.

## Advanced tip

Master the **R+E** knockup into **W** follow-up. When you have UPGRADE!!! available, cast **R** then immediately throw **E**: it lands as a larger zone and the enemies inside the center get knocked up (launched into the air, briefly unable to act) instead of just stunned. The airtime is roughly the same duration as a stun, but the knockup interrupts channels (like a Katarina ultimate or a Zed recall), and the larger zone means you catch fleeing targets who would have dodged the normal E stun. While they are in the air, fire the full **W** rocket barrage — all five rockets converge and hit the CC'd target before they land, dealing near-maximum damage before any defensive action is possible.
