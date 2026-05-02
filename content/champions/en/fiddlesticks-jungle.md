---
title: "Fiddlesticks Jungle Build & Guide — Patch 16.9"
slug: "fiddlesticks-jungle"
language: "en"
patch: "16.9"
champion: "fiddlesticks"
role: "jungle"
last_updated: "2026-05-02"
description: "Fiddlesticks jungle guide for League of Legends Patch 16.9: AP build, Crowstorm engages, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Fiddlesticks"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Specialist"
  abilities:
    - key: "P"
      name: "A Harmless Scarecrow"
      description: "Trinket slot becomes effigy charges. Place fake Fiddle scarecrows for vision; enemies that see one get briefly feared and the effigy explodes."
      dd_spell_id: "Fiddlesticks_Passive"
    - key: "Q"
      name: "Terrify"
      description: "Targets a single enemy. Damaging an enemy with a spell while unseen also auto-Terrifies them. Fears them so they run away from you for 1-2.5s."
      dd_spell_id: "FiddleSticksQ"
    - key: "W"
      name: "Bountiful Harvest"
      description: "Channel that drains HP from nearby enemies (heals you). At the end of the channel deals bonus execute damage. Main jungle clear and sustain tool."
      dd_spell_id: "FiddleSticksW"
    - key: "E"
      name: "Reap"
      description: "Boomerang scythe in a wide cone: slows all enemies hit and silences anyone in the central line. Two-way damage, hits twice."
      dd_spell_id: "FiddleSticksE"
    - key: "R"
      name: "Crowstorm"
      description: "1.5s channel, then blink to target location with AOE damage per second around Fiddle for 5s. Best cast from fog of war or behind walls."
      dd_spell_id: "FiddleSticksR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "E" }
    - { level: 9, key: "W" }
    - { level: 10, key: "E" }
    - { level: 11, key: "R" }
    - { level: 12, key: "E" }
    - { level: 13, key: "E" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC that interrupts your R channel (Lissandra R, Veigar E cage, Twisted Fate stun)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap when 2+ enemies build any Magic Resist item (around 200+ MR threshold)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs healing-stacking comps (Aatrox, Soraka, Vladimir, Dr. Mundo) — applies Grievous Wounds"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "when you need extra Movement Speed to chase or walk into Crowstorm range from fog"
  base_combo: ["R", "Q", "E", "W"]
  win_condition: "Land Crowstorm from fog of war on 2+ grouped enemies at an objective. Bountiful Harvest finishes the survivors while the Reap silence prevents counter-engage."
  weakness: "1.5s R channel is interruptible by single-target hard CC, dashes, and Cleanse/QSS. Without surprise from fog, the engage telegraphs and the team kites you out."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8128
      name: "Dark Harvest"
      icon_path: "perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Dark Harvest stacks fast across grouped fights via Crowstorm AOE. Sudden Impact procs on the R blink for extra magic penetration. Treasure Hunter speeds up Liandry's. Ultimate Hunter cuts Crowstorm cooldown to chain ults across objective fights."
    secondary_rationale: "Sorcery secondary: Manaflow Band fixes early-jungle mana issues during W spam; Gathering Storm scales into a late-game power spike that pairs with Rabadon's Deathcap."
    secondary_alternative: "Versus heavy single-target CC engage (Lissandra, Malzahar, Veigar) swap Sorcery for Resolve with Bone Plating (5s damage reduction after first hit) and Revitalize (5% boost to your Bountiful Harvest healing)."
matchup_draft:
  pick_into:
    - examples: ["udyr", "warwick", "master-yi"]
      archetype: "Farming junglers without flank tools"
      reason: "They scale linearly with farm but cannot punish your level 1-3 invade. Once you hit 6, your Crowstorm from fog beats their face-tank engages because they have no pre-cast escape."
    - examples: ["karthus", "ziggs", "xerath"]
      archetype: "Immobile artillery teams that group up"
      reason: "Backline mages with no escape get one-shot by a flank Crowstorm because they cannot dash out of the AOE before the channel ticks."
    - examples: ["azir", "orianna", "viktor"]
      archetype: "Control mages without dashes"
      reason: "Your R blinks past their zone control before they can land their setup CC. If you appear from fog, they have no exit tool."
  counterpicks:
    - examples: ["lee-sin", "elise", "kha-zix"]
      archetype: "Early-game invaders with tracking pressure"
      reason: "They threaten your level 2-3 jungle and force you to play defensive. Fiddle has no escape pre-6: if invaded he cannot run, and his clear is slow without effigy vision setup."
    - examples: ["yasuo", "samira"]
      archetype: "Wind Wall / projectile-block carries"
      reason: "Wind Wall blocks your Q (single projectile) and most of your Reap. They negate your engage cast at the worst moment, leaving you channeling Crowstorm with no follow-up."
    - examples: ["lissandra", "malzahar", "veigar"]
      archetype: "Point-and-click hard CC mages"
      reason: "They interrupt your 1.5s Crowstorm channel without skill — Lissandra R, Malzahar R, Veigar E cage all turn your engage into wasted ult and instant death."
---

## Overview

Fiddlesticks is an ambush jungler whose entire kit is built around one move: blink into a fight from fog of war with **Crowstorm (R)** and AOE-burst the enemy team while they are still grouped. Outside that window he is a slow, immobile mage with weak dueling and a long-channel ultimate, so the gap between a winning and losing game is almost entirely about *vision setup* and *engage timing* (when and where you press R).

The game plan: clear the jungle quickly with **Bountiful Harvest (W)**, place effigies on river and around enemy jungle to get vision (and brief fears on whoever sees them), then look for a hidden flank position near the next objective (Drake or Baron). When 2+ enemies are clumped on the objective, blink in with **R**, drop **E** for slow + silence, then **W** and **Q** to finish anyone running. Without the surprise factor your kit underperforms — Fiddle is binary: ace setup or wasted ult.

## Recommended Build

**Starting items:** ![Emberknife](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1035.png) **Emberknife** (the melee jungle starter that gives Smite a damage boost on monsters and starts the pet quest) + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**Core items (in order):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade from Emberknife (auto-evolves around minute 3-4 once enough XP is accumulated from jungle camps). Companion for AP (Ability Power, the stat that scales magic damage) burst: adds a magic damage effect that triggers (a "proc") on the auto-attack right after a spell, lining up with Liandry's burn.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — first full item. The HP-percent burn on hit (damage that scales with the target's max health) stacks with every tick of Crowstorm AOE on tanks, turning your ulti into a teamwipe tool.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration. Cheap, immediate, the default for any AP champ before mid-game.
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — drop into stasis the moment Crowstorm's AOE ticks finish, saving you from the focus you eat right after engage. Mandatory if the enemy has a diver or assassin.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — late-game multiplier (35% bonus AP). Your highest-AP slot, makes Crowstorm one-shot squishies.

**Situational items:**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — vs single-target magic CC that interrupts your R channel (Lissandra R, Veigar E cage, Twisted Fate stun). The shield blocks one ability before they can stop your ulti.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — when 2+ enemies build any Magic Resist item.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — vs healing-stacking comps (Aatrox, Soraka, Vladimir, Dr. Mundo). Applies Grievous Wounds (cuts enemy heals by 40%).
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — when you need extra Movement Speed to chase or walk into R range from fog.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** is default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** if 2+ enemies have hard CC and you cannot rely on Banshee's alone.

**Skill order:** Max **W** first (jungle clear and sustain), **E** second (slow + silence value in fights), **Q** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Domination** with **Dark Harvest**, **Sudden Impact**, **Treasure Hunter**, **Ultimate Hunter**. Secondary **Sorcery** with **Manaflow Band** and **Gathering Storm**. Versus heavy single-target CC engage (Lissandra, Malzahar, Veigar) swap Sorcery for **Resolve** with **Bone Plating** and **Revitalize**.

## Key matchups

- **Lee Sin / Elise:** Early-invade junglers. Do not contest your own buff side at level 1; cross-map and start the opposite buff with a leash (your laners help you start the camp by hitting it for a few seconds, so you take less damage), then path to Scuttle Crab on river. Drop an effigy on river to spot the gank, and ward your jungle entrances by minute 3.
- **Karthus:** Scaling vs scaling race. He out-clears you and out-scales late. You must force a level 6 gank or invade his jungle with vision; if you let him hit 11, his global ult outscales your single-objective wins.
- **Yasuo bot or mid:** Wind Wall blocks your **Q** projectile and the central silence line of **E**. Engage Crowstorm from a side angle so he cannot wall-cover the team; flank from a non-obvious lane brush.
- **Zac:** Mirror engage tank with E gap-close. Your **E** silence shuts down his W detonation timing if you land it during his channel; in a coin-flip teamfight, the team that lands first **R** + silence wins.
- **Master Yi:** He CC-immunes through your **E** silence with **Q** dash and ulti Highlander. Save **Q** to fear him out of his Highlander window; without the fear, his late-game cleanup makes your engage a 1-for-3.

## Power spikes & win conditions

- **Level 6 (first Crowstorm):** Your first gank window. Set up vision in river fog 30s before, then walk in. A clean R + E on 2 enemies under tower is a guaranteed double kill.
- **Level 9 (max W):** Your jungle clear hits its peak speed and your sustain in fights jumps. Force a Drake fight here.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minute 16-18):** Your Crowstorm AOE now cuts through tanks. Force Baron/Drake fights and look for cross-map flanks.
- **Level 16 + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ minute 28):** Crowstorm one-shots any squishy that has not built a Magic Resist item. Group with team and force the next major objective.

## Common mistakes

- **Using R without fog of war setup.** A visible Fiddle with the channel bar showing is a free dodge for the enemy team. Always cast from brush, behind a wall, or from inside an unwarded jungle camp. If they can see the channel bar, they walk away for 1.5s and you waste 80 mana plus your only engage tool.
- **Solo-engaging when team is far behind you.** Crowstorm is a team-engage tool, not an assassin pick. If your team is 2+ screens away, your ulti hits 1 enemy and you die in the follow-up. Check teammate positions before pressing R.
- **Ignoring effigy placement.** Effigies grant vision and brief fears. Free trinket charges that go unused are free vision the enemy is *not* paying for. Drop one on river before every objective.
- **Using Q to last-hit jungle camps.** Q is your only single-target setup for fight-time fears. Save it for fights — W and E clear camps fine.

## Advanced tip

The 1.5s **Crowstorm** channel is interruptible by anything that displaces or stuns you, but if you press **R** the same instant a target steps into a brush you are sitting in, the brief vision break gives them no time to react before the blink lands. Practice the timing in custom games: hide in brush, wait for an enemy to walk adjacent, press R from inside their personal space. The blink ensures you stay on top of them through the whole AOE duration, and the panic from a face-of-fog Fiddle costs them more flashes than any other engage in the game.
