---
title: "Karthus Jungle Build & Guide — Patch 16.9"
slug: "karthus-jungle"
language: "en"
patch: "16.9"
champion: "karthus"
role: "jungle"
last_updated: "2026-05-05"
description: "Karthus jungle guide for League of Legends Patch 16.9: smite path, Defile clear, global R pickoffs, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Karthus"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Apex Jungler"
  abilities:
    - key: "P"
      name: "Death Defied"
      description: "When killed, Karthus enters a 7-second spirit form that keeps casting Q/W/E with no mana cost. Lets him finish a fight from beyond the grave."
      dd_spell_id: "Karthus_Passive"
    - key: "Q"
      name: "Lay Waste"
      description: "Targeted area-of-effect blast with a short delay. Deals double damage if it hits exactly one enemy. Skill expression: predict movement and isolate single targets."
      dd_spell_id: "KarthusLayWasteA1"
    - key: "W"
      name: "Wall of Pain"
      description: "Wide wall that shreds magic resist and slows any enemy who walks through it. Use as a chase tool, a gank lock, or to peel divers off your back line."
      dd_spell_id: "KarthusWallOfPain"
    - key: "E"
      name: "Defile"
      description: "Toggle aura that deals magic damage per second around Karthus while draining his mana. The real motor of his jungle clear and team-fight DPS — keep it on through every camp."
      dd_spell_id: "KarthusDefile"
    - key: "R"
      name: "Requiem"
      description: "Global ultimate that channels for 3 seconds, then deals heavy magic damage to every enemy champion on the map. The cross-map snipe and the post-mortem cleanup tool."
      dd_spell_id: "KarthusFallenOne"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "4628", name: "Horizon Focus" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs early invade junglers (Lee Sin, Xin Zhao, Elise) — stasis covers your zero-mobility weakness while your team rotates to help"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap when any priority target buys their first Magic Resist item (Mercury's Treads counts)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC engages (Ahri R, Lissandra R, Nautilus hook)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs healing-stacking comps (Soraka, Vladimir, Yuumi, Dr. Mundo)"
  base_combo: ["W", "E", "Q", "R"]
  win_condition: "Hit level 6, full-clear faster than the enemy jungler, and use R to finish low-HP targets cross-map. After two items, Defile alone melts the enemy back line in any grouped 5v5."
  weakness: "No dash, no escape, no early dueling. Counter-jungled or invaded before level 6 you fall behind permanently. Mobile assassins and CC-heavy junglers shut down the clear before Liandry's comes online."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9105, name: "Legend: Haste", icon_path: "perk-images/Styles/Precision/LegendHaste/LegendHaste.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision primary: Conqueror stacks fast on Defile (the toggle aura that ticks damage per second), turning long skirmishes into bonus AP and healing. Triumph refunds HP on takedowns. Legend: Haste shortens R cooldown. Last Stand rewards the low-HP spirit-form windows."
    secondary_rationale: "Sorcery secondary: Manaflow Band fixes the early mana starvation that comes with Defile draining mana every second. Transcendence pushes ability haste past the 40% cap zone so Q comes back faster between waves and R rotates more often."
    secondary_alternative: "Vs invade-heavy enemy junglers (Lee Sin + Pyke roam pressure, Elise + early CC supports), swap Sorcery to Resolve with Second Wind (HP regen after taking damage, helps survive the level-3 invade) and Overgrowth (bonus health that scales with monsters killed)."
matchup_draft:
  pick_into:
    - examples: ["nasus", "veigar", "kassadin", "kayle"]
      archetype: "Late-game scaling champions with weak early presence"
      reason: "They need 25+ minutes to come online; Karthus already wins skirmishes at level 6 and uses R to deny their Baron solo plays. Out-tempo them by forcing drakes and ending before they hit their power spike."
    - examples: ["fiddlesticks", "amumu", "sejuani"]
      archetype: "Slow farm-heavy junglers without level-3 invade"
      reason: "They full-clear on the same speed Karthus does, but Karthus has the global R that turns their gank into a 2-for-1 trade — even if they kill your laner, R cleans up theirs cross-map before they recall."
    - examples: ["yuumi", "soraka", "senna"]
      archetype: "Backline scalers with no mobility"
      reason: "Cross-map R turns their positioning mistakes into kills on objective spawns. They contribute from far away but cannot dodge a global snipe locked onto a missing flash or ult."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "Early-game invade junglers with hard CC"
      reason: "They walk into Karthus's jungle at level 2-3 before Defile mana scales. Karthus has no escape, no dash, and his Q is too slow to save him from a Lee Sin Q + W chain or an Elise rappel. One bad invade ends his game permanently."
    - examples: ["kha-zix", "rengar", "shaco"]
      archetype: "Stealth or burst assassin junglers"
      reason: "They open with isolation damage on a target with zero defenses; even Zhonya's Hourglass only delays the inevitable in a 1v1. Karthus dies before he can stack Conqueror or trade meaningfully."
    - examples: ["nocturne", "warwick"]
      archetype: "Vision-deny gankers and tracker junglers"
      reason: "Nocturne R cuts the team's vision so Karthus cannot see the engage onto his back line; Warwick's blood-tracking turns a cross-map R cast into a free dive on a ulti-channelling target. Karthus needs vision to channel R safely — these two strip it."
---

## Overview

Karthus jungle is the textbook **apex jungler**: a champion whose individual ceiling is one of the highest in the game, but whose floor is one of the lowest. The kit is built around two ideas — **Defile (E)** is a toggle aura that ticks magic damage every second around Karthus, and **Requiem (R)** is a global ultimate that hits every enemy champion on the map regardless of distance. The first lets him clear the jungle faster than almost any other champion in the game once mana is solved; the second turns positioning mistakes anywhere on the map into kills, which is the single most valuable thing a jungler can do at the right moment.

His game plan is rigid by jungle standards. Full-clear the first three camps (red → krugs or blue → gromp depending on side) with **E** toggled on through every camp, recall for **Liandry's Torment** components, and from level 6 onward look for cross-map R targets while skirmishing (a "skirmish" is a short fight between 1-3 players on each side, usually around a jungle camp or river objective) around drake and grubs (the small neutral monsters in the void pit that give gold and a team-wide bonus). Karthus has no escape and no dash, so warding his own jungle entrances on minute 1:30 is not optional — an enemy invade you do not see coming is a free kill handed to a mobile jungler. The payoff is the post-6 spike: Karthus is one of the few champions in the game who is genuinely scarier dead than alive, because his passive **Death Defied** keeps him casting for 7 seconds after his HP hits zero.

## Recommended Build

**Starting items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** (default for ranged junglers — gives the smite-pet that buffs camp clear and grants gold) + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**Core items (in order):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade from Hailblade (auto-evolves around minute 3-4 once you complete enough jungle XP). Default companion for AP burst junglers: an extra magic-damage proc on the next basic attack after a spell cast (a "proc" is a passive effect that triggers from a condition — here, casting any ability arms your next auto). Lines up with Karthus's Q damage on isolated targets.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — first complete item. The percent-HP burn punishes objective HP pools (drake, baron, herald) and stacks on top of every Defile tick. This is the item that flips your clear speed and lets you contest drakes from minute 8 onward.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration, the cheapest power spike between core items.
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — the slow on every spell hit closes Karthus's biggest weakness (no chase, no escape). Lets you stick on kited targets so Defile stacks Conqueror, and turns your post-mortem passive into a guaranteed cleanup tool.
5. ![Horizon Focus](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4628.png) **Horizon Focus** — reveals enemies hit by long-range abilities and adds a damage amplifier. Synergises perfectly with Q and Wall of Pain at long range, and the reveal helps lock global R targets through fog of war (the unrevealed area outside your team's vision).
6. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — late-game scaling slot. Buy this last unless you are 4+ kills ahead, in which case rush it earlier for snowball ("snowball" = early lead that grows: kill → gold → item → more kills).

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — into early-game divers (Lee Sin, Xin Zhao, Hecarim, Diana). Stasis is the only answer Karthus has when a dash chain crosses his front line (the tanks and bruisers up front who normally absorb hits for you). Also lets you R safely while in stasis.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — the moment any priority target buys their first magic resist item. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** (the magic-resist boots) count as that first MR item.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — into telegraphed magic CC engages (Ahri R, Lissandra R, Nautilus hook). The shield blocks the first ability so you do not get one-shot before R lands.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — into healing-stacking compositions (Soraka, Vladimir, Yuumi, Dr. Mundo). Grievous Wounds cuts enemy healing in half so Defile damage actually sticks.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** is default. Swap to ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** if the enemy team has 3+ hard CC threats with magic damage.

**Skill order:** Max **Q** first (your single-target burst and waveclear, and the only ability that scales hard with rank), **E** second (raises Defile's per-second damage and pushes the mana drain you can sustain), **W** last. Take a point in **R** at levels 6, 11, and 16.

**Runes:** Primary **Precision** with **Conqueror**, **Triumph**, **Legend: Haste**, **Last Stand**. Secondary **Sorcery** with **Manaflow Band** and **Transcendence**.

## Key matchups

- **Lee Sin:** Loses every 1v1 before level 6. His Q + W chain skips past your Q delay. Avoid solo skirmishes pre-6, full-clear instead, and ward both of your own jungle entrances at minute 1:30.
- **Master Yi:** Flat counter as a 1v1 once he hits Wit's End. Force the fight 5v5 in narrow rivers (drake pit, baron pit) where his W-cleanse cannot save him from a sustained Defile + R combo. Buy Zhonya's Hourglass second item if he ramps up.
- **Karthus mirror:** Decided by farm tempo and R discipline. Whoever full-clears one camp ahead at level 6 wins the first R race. Do not waste R unless you secure either a kill or a smite — a wasted R puts the mirror Karthus a full minute ahead on objective control.
- **Hecarim:** Even matchup. He out-runs your kite but groups for Defile in teamfights. Wall of Pain on his charge path slows him out of his own engage, and your post-mortem passive cleans up if he kills you anyway.
- **Sejuani / Amumu:** Favourable. They engage by grouping the enemy team into a stack — exactly the shape Defile wants. Engage on their engage; if they ult into your team, walk in with E toggled and watch every ablaze enemy melt.

## Power spikes & win conditions

- **Level 6 (R unlocked):** First global power spike. **Requiem** turns any low-HP enemy across the map into a kill. From this point onward, ping the enemy mid laner before recalling and ult them on the recall channel — a free kill at zero risk.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment online (~ minute 9-11):** Clear speed flips and objective DPS (DPS = damage per second, here against drake/baron/grub HP pools) doubles. From this point you should be the one initiating drake fights, not the one reacting.
- **Two items + boots (~ minute 18-22):** Defile alone ticks for serious damage; in any grouped fight Conqueror stacks fast and your R locks the cleanup. This is your peak skirmish window.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minute 26-30):** R one-shots squishies that have not built a single Magic Resist item. Force grouped objective fights — Baron, Soul Drake, Atakhan ("Atakhan" = a late-game neutral pit boss spawning around 14 minutes; treat the spawn as a forced 5v5).

## Common mistakes

- **Panicking with Death Defied.** Most novices burn the post-mortem 7 seconds running from their corpse. The correct play is to engage into a low-HP fight knowing you will die: your death starts your damage rotation, not ends it. Q-Q-Q-E in spirit form often does more damage than your living self would have.
- **Throwing Q randomly.** Lay Waste deals double damage to a single isolated enemy. If you fire Q into a wave with three minions plus the laner, the damage caps at the lower number. Pull the laner out with W or wait until a single target is exposed, then Q the predicted spot.
- **Casting R for the kill steal.** Ulting mid-teamfight is wasted: every enemy is already inside Defile range. Save R for a cross-map snipe (using R as a long-range, low-risk finisher on a missing enemy at low HP after a fight) or a post-mortem cleanup after you die. R is "after-the-fight", not "during-the-fight".
- **Skipping vision in your own jungle.** Place Stealth Wards on tri-bush and pixel brush at minute 1:30. Karthus has no escape; an enemy invade that you do not see coming is a free kill given to a mobile jungler.
- **Smite-greeding objectives without R.** Drake and grub HP scale; your smite damage does not. If you contest a drake without R off cooldown and the enemy jungler does, you lose the smite war and the drake.

## Advanced tip

Practice the **suicide engage**. When your team commits to a 5v5 you cannot win straight up, walk Karthus into the enemy back line with Defile toggled, expecting to die. The instant your HP hits zero, Death Defied gives you 7 seconds of free casting with no mana cost — and the enemy front line stops attacking your corpse because there is nothing to hit. That spirit-form window is where you Q-spam the lowest-HP enemy you can reach and finish with R if anyone runs. Done right, a Karthus who dies first turns an unwinnable fight into an ace.
