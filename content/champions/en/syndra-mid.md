---
title: "Syndra Mid Build & Guide — Patch 16.9"
slug: "syndra-mid"
language: "en"
patch: "16.9"
champion: "syndra"
role: "mid"
last_updated: "2026-04-29"
description: "Syndra mid lane guide for League of Legends Patch 16.9: AP burst build path, runes, skill order, key matchups, power spikes, common mistakes, advanced tip."
quick_learn:
  champion_dd_id: "Syndra"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Burst"
  abilities:
    - key: "P"
      name: "Transcendent"
      description: "Syndra collects Splinters of Wrath from levels and damaging enemies. Each splinter upgrades one ability; the R upgrade lets it execute low-HP champions."
      dd_spell_id: "Syndra_Passive"
    - key: "Q"
      name: "Dark Sphere"
      description: "Conjures a sphere at a target spot for magic damage. The sphere lingers and can be manipulated by W, E, and R. Main poke and waveclear tool."
      dd_spell_id: "SyndraQ"
    - key: "W"
      name: "Force of Will"
      description: "Picks up a sphere or minion, then recast to throw it for magic damage and a slow. After enough Splinters it also deals bonus true damage."
      dd_spell_id: "SyndraW"
    - key: "E"
      name: "Scatter the Weak"
      description: "Cone knockback that pushes enemies and spheres. Spheres hit by E stun the enemies they strike — your only hard CC, hard to land without setup."
      dd_spell_id: "SyndraE"
    - key: "R"
      name: "Unleashed Power"
      description: "Single-target nuke: launches all orbiting spheres plus nearby ones at one champion. Once upgraded by Splinters it executes low-HP targets."
      dd_spell_id: "SyndraR"
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
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs divers and assassins (Zed, Diana, Talon, Akali) — stasis buys time after you blow R"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap when any priority target buys a Magic Resist item"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC (Ahri charm, Lissandra R, Twisted Fate stun)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs healing-stack comps (Soraka mid, Vladimir, Dr. Mundo top)"
  base_combo: ["Q", "W", "E", "R"]
  win_condition: "Land an E-stun on a sphere setup, then dump Q-W-R for the one-shot. Once Luden's Echo and Rabadon's are online, R executes any squishy under your Splinters threshold."
  weakness: "No dash, no escape. Hard countered by mobile assassins and long-range artillery: if you miss E, your stun window collapses and you die before your R refunds."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8214
      name: "Summon Aery"
      icon_path: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
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
    - examples: ["karthus", "veigar", "anivia"]
      archetype: "Immobile mages without dash"
      reason: "Without a dash they cannot dodge an E-stun setup. Once you knock a sphere into them they eat the full Q-W-R combo and Syndra's R executes whatever HP is left."
    - examples: ["senna", "ziggs"]
      archetype: "Backline scalers with weak escape"
      reason: "They want to poke from the back. Syndra walks her sphere into E range, stuns from 1100+ units after the knockback, and one-shots before they can answer."
    - examples: ["malzahar", "annie"]
      archetype: "Telegraphed point-and-click engagers"
      reason: "Their all-in needs short range and a clear tell. Syndra E pushes them out before they land their CC, then she resets the trade with Q poke."
  counterpicks:
    - examples: ["zed", "fizz", "kassadin"]
      archetype: "Mobile assassins with multiple gap-closers"
      reason: "Syndra's only hard CC is E (a skillshot through a sphere). Champions with two or more dashes step around the cone and reach her before R comes back up."
    - examples: ["xerath", "vel-koz"]
      archetype: "Longer-range artillery mages"
      reason: "They poke beyond Q range (800). Syndra has no way to close the gap, so every wave fight bleeds her HP without an option to all-in back."
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall users"
      reason: "Wind Wall blocks Q, W, R, and the sphere thrown by E. Syndra loses every projectile-based trade until the wall is down, and her stun setup falls apart."
---

## Overview

Syndra is a long-range burst mage (a champion who deals a lot of damage in 1-2 seconds) built around one mechanic: place a **Dark Sphere (Q)**, knock it into the enemy with **Scatter the Weak (E)** for a stun, then dump everything she has on the stunned target. Her **Splinters of Wrath** passive upgrades each ability across the game — most importantly, the **R** upgrade turns **Unleashed Power** into a single-target execute on low-HP champions, giving her one of the cleanest finishers in the mid lane. She has no dash, no escape, and a stun that requires precise sphere placement, so positioning behind your front line (the tank/bruiser that opens the fight) is non-negotiable.

Her game plan is simple to state: in lane, harass (chip away enemy HP with safe ranged damage) with **Q** placements that double as waveclear, look for **Q-E** stun setups when the enemy steps on a sphere, and roam with **R** up to delete a squishy (a low-defense target like an ADC) on the side lane. In team fights you stand at second-line range, wait for your tank to engage, then E-stun a priority target and burst them before they can reposition.

## Recommended Build

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Doran's Ring's mana regen lets you spam **Q** for waveclear without going dry by minute 6.

**Core items (in order):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — burst spike, mana for **Q** spam, AOE damage on the first ability of a combo.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration; turns your **R** execute threshold into a real one-shot.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — extra burst, the HP-threshold passive (the bonus magic pen unlocks below ~40% HP) lines up with **R** finishers.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — late-game scaling multiplier, your highest-AP item slot.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — into divers and assassins (Zed, Diana, Talon, Akali). Stasis buys the 2.5 seconds you need after blowing **R**, while your team peels for you (protects you from whoever is attacking you).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — the moment any priority target buys a Magic Resist item.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — into heavy single-target magic CC (Ahri charm, Lissandra R, Twisted Fate stun).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — into healing-stacking compositions (Soraka mid, Vladimir, Dr. Mundo top).

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** is default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** are acceptable if the team needs more **R** uptime as a finisher and the enemy has low MR.

**Skill order:** Max **Q** first (your only ranged poke and main DPS), **W** second (lower cooldown and stronger throw damage), **E** last because its base damage barely scales with rank — you only need one point for the stun. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Sorcery** with **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. Aery procs on every **Q** for free poke; Manaflow Band fixes Syndra's worst stat. Secondary **Inspiration** with **Biscuit Delivery** and **Cosmic Insight**, or **Sorcery + Precision** with **Presence of Mind** and **Coup de Grace** if the enemy team has multiple low-resistance squishies. **Electrocute** (Domination tree) is a viable alternative if you want more all-in burst at level 2-3, but Aery is the safer default for a champion this immobile.

## Key matchups

- **Zed:** Hardest matchup in the pool. Hold **E** for his **R** dash-in, save **Flash** for his ult, and rush ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** as a second item. Never push the wave past the river without vision.
- **Yasuo / Yone:** Wind Wall blocks **Q**, **W**, **R**, and the sphere knocked by **E**. Bait the wall with a free **Q**, then commit your combo on the recovery frame.
- **Orianna:** Even matchup, decided by team fights. Don't auto-attack trade in lane; her shield + ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** wins short trades. Look for solo kills only after she misses **E**.
- **Twisted Fate:** Roam priority race. Push the wave with **Q** on cooldown, ping his **R** the moment cards go up, and rotate before he does. Solo **Q-E** kills work pre-6 because he has no escape.
- **LeBlanc:** She wants to all-in (commit to a full kill attempt with no escape route) you at level 3. Skip pushing in early levels, hold **E** for her **W** return, and respect her kill threat through ~level 9. After ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** the matchup flips — your burst now matches hers and your range is longer.

## Power spikes & win conditions

- **Level 6:** First **Unleashed Power** unlocks the **Q-W-E-R** one-shot on any squishy still on full mana spent. If you have a sphere placed and the enemy uses **Flash** to dodge **E**, you can still walk the sphere with **W** for a re-engage stun.
- **Level 9 (Q maxed):** Q cooldown drops, mana cost stays flat. Wave control flips to your side: shove and roam with **R** up.
- **![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Echo completion (~ minute 12-14):** First real burst spike. The combo deletes a 1300 HP target if you land **E**.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minute 26-30):** Your **R** one-shots squishies that have not built a single Magic Resist item. Force objective fights at this timing — Drake or Baron — because your team-fight value peaks here.

## Common mistakes

- **Throwing Q for harass without setup.** Place the sphere where the enemy must walk to last-hit, then **E** through the sphere to land the stun. Naked **Q** poke without a follow-up is mana wasted.
- **Forgetting W can grab a minion.** You don't need a Dark Sphere to throw with **W** — a minion works. In lane, this means you can **W** a caster minion at the enemy from 925 range when **Q** is on cooldown, doubling your harass.
- **Burning R on a full-HP frontline.** **R** is single-target and on a 120s cooldown at rank 1. Save it for a squishy under the execute threshold, never the tank that opened the fight.
- **Standing still for **E**.** **E** has a slow cast time. If you stand still to aim it, mobile champions read the wind-up and dash out. Walk forward as you cast so the cone covers their next step.
- **Picking Syndra into double dash assassins.** Pre-game decision: if the draft has Zed + Kha'Zix or Akali + Diana, switch picks. Once locked, you cannot mechanic your way out — even Zhonya's only buys 2.5 seconds against two reset-based assassins.

## Advanced tip

The **W**-cancel pickup: when you cast **W** to grab a sphere, you can **immediately** cast **Q** during the brief pickup animation to drop a second sphere at your cursor, then throw the first one with **W** recast. This gives you a 2-sphere setup in roughly the time of one cast cycle: throw the **W** sphere into the enemy for the slow, then **E** through the freshly placed **Q** sphere for the stun. The trick wins fights at higher ranks because most enemies expect only one sphere of pressure, not two stacked in one combo.
