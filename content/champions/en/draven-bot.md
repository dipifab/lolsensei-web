---
title: "Draven Bot Build & Guide — Patch 16.9"
slug: "draven-bot"
language: "en"
patch: "16.9"
champion: "draven"
role: "bot"
last_updated: "2026-04-29"
description: "Draven bot lane guide for League of Legends Patch 16.9: axe-catching basics, snowball build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Draven"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Marksman / Snowball"
  abilities:
    - key: "P"
      name: "League of Draven"
      description: "Catching a Spinning Axe or killing a unit grants Adoration stacks. Champion takedowns convert stacks into bonus gold — Draven's snowball engine."
      dd_spell_id: "Draven_Passive"
    - key: "Q"
      name: "Spinning Axe"
      description: "Loads next auto with bonus physical damage. The axe ricochets up after the hit — catch it to reload another, up to two stacked at once."
      dd_spell_id: "DravenSpinning"
    - key: "W"
      name: "Blood Rush"
      description: "Brief Move Speed and Attack Speed buff. Catching a Spinning Axe refreshes the cooldown — your mobility scales with how well you catch."
      dd_spell_id: "DravenFury"
    - key: "E"
      name: "Stand Aside"
      description: "Linear axe that knocks enemies aside and slows them. Main peel and disengage tool; also repositions targets for support follow-up."
      dd_spell_id: "DravenDoubleShot"
    - key: "R"
      name: "Whirling Death"
      description: "Two giant axes hurled across the map, returnable on cast. Damage drops per enemy hit but executes targets below an Adoration-based HP threshold."
      dd_spell_id: "DravenRCast"
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
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3072", name: "Bloodthirster" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "vs heavy healing comps (Soraka support, Yuumi, Aatrox, Vladimir) — applies Grievous Wounds to cut healing in half"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs heavy AP burst (Syndra mid + double-mage comps) — shield triggers under 50% HP and gives Magic Resist"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "vs assassin dive (Zed, Talon, Rengar) — revive lets you cash in Adoration stacks before dying again"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "vs single-target lockdown CC (Morgana Q, Lux Q, Ashe R) — spell shield blocks the first hard CC"
  base_combo: ["Q", "AA", "W", "AA"]
  win_condition: "Stack Adoration off catches and minion kills, then cash in on the first kill for a 600+ gold spike. Push that lead into earlier item completions and snowball every skirmish before the enemy ADC scales."
  weakness: "No dash, no escape, and the axe-catching pattern locks your movement into predictable arcs. Hard CC at level 1-3 ends you before you can W-refresh, and falling behind on Adoration cripples your gold curve."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["aphelios", "kog-maw", "twitch"]
      archetype: "Hyper-scaling marksmen with weak early"
      reason: "Their level 1-3 is just farming; Draven's Q deals huge bonus damage on every catch and W refreshes when he catches, so he can run them down before they hit two items."
    - examples: ["jinx", "sivir", "ashe"]
      archetype: "Immobile marksmen without a dash"
      reason: "Draven's E knocks aside and slows, his W gives him burst Move Speed — these ADCs cannot disengage when he steps up. They lose every all-in pre-6."
    - examples: ["soraka", "yuumi", "karma"]
      archetype: "Enchanter supports who heal-trade in lane"
      reason: "Draven's Q damage stacks too fast for poke-and-heal lanes. Two caught axes in a row chunk through a Soraka heal cycle, and his snowball converts every kill into a 200+ gold lead."
  counterpicks:
    - examples: ["caitlyn", "ezreal", "varus"]
      archetype: "Long-range poke marksmen"
      reason: "They poke from outside Draven's 550 attack range while he's stuck in his catch arcs. Every minute Draven can't engage is a minute his Adoration stacks decay into nothing."
    - examples: ["leona", "nautilus", "blitzcrank"]
      archetype: "Hard-engage CC supports"
      reason: "Draven has no dash and no immunity. One CC chain at level 2 deletes him while his axes ricochet uselessly into the lane. Pre-6 he literally cannot fight back."
    - examples: ["thresh", "morgana", "rakan"]
      archetype: "Lockdown / pick supports"
      reason: "A single Thresh hook or Morgana Q stops Draven mid-axe-catch. Without the catch, his Q resets get cancelled, his W speed drops, and he becomes a stationary ADC with no escape."
---

## Overview

Draven is a snowball marksman built around one mechanic: catching his own spinning axes. Every basic attack while **Spinning Axe (Q)** is loaded fires off as a bouncing axe that ricochets into the air — if Draven walks under the landing spot, he catches it, deals a huge bonus damage hit, and reloads another Q charge. He can hold up to two Spinning Axes at once. His passive **League of Draven** turns those catches into gold: every catch and every minion kill builds Adoration stacks, and the first champion takedown after a stack threshold cashes them in for a bonus gold lump (often 100-500 extra gold per kill).

The game plan is brutal and direct: bully bot lane from level 1, force a kill before minute 8, cash in the Adoration spike, then power-farm into a snowball lead (an early advantage that compounds: kill → gold → item → more kills). Skill expression sits in axe-catch positioning (predicting where the axe lands without exposing yourself to skillshots) and in **Blood Rush (W)** uptime — every catch refreshes W, so a fluent Draven is permanently faster than a Draven who misses two axes in a row.

## Recommended Build

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 1 Health Potion. Doran's Blade is the standard marksman starter: small Attack Damage (AD) boost, a bit of HP, and lifesteal (you heal for a percentage of the damage you deal with auto-attacks). Draven needs every point of AD because his Q scales off basic-attack damage, and the axe-catch trade pattern is brutal on your HP if you don't lifesteal back.

**Core items (in order):**

1. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — first item is the snowball pick. Lethality (a flavor of armor penetration that ignores a chunk of the target's armor, especially useful against squishy targets — champions with low defenses like ADCs and mages) plus an execute under 5% HP turns every Q-loaded auto into a kill threat. Pairs with Adoration: more kills mean more stacks, and more stacks mean bigger gold spikes per takedown.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed boots (more autos per second). Default for Draven because more autos means more axe-catch chances per second, and W is refreshed every catch.
3. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — crit damage multiplier. After two crit items (Collector counts as one crit pseudo-source for AD scaling, IE is the second), Infinity Edge unlocks 175% crit damage. Spinning Axe damage scales with your AD, and an axe-catch crit at this point one-shots most squishy targets.
4. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — lifesteal (you heal for a percentage of the damage you deal with auto-attacks) plus a shield from full HP. Draven dies to assassins because he has no escape; the shield gives you one extra fight per teamfight.
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — last-slot armor penetration that scales with the enemy's bonus HP (more effective the bigger their tank is). Replace this with Mortal Reminder if the enemy team has heavy healing.

**Situational swaps:**

- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — same slot as Lord Dominik's, take this version when the enemy team has heavy healing (Soraka, Yuumi, Aatrox, Vladimir): applies Grievous Wounds, which cuts enemy healing in half.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — late slot vs heavy AP burst comps (Syndra + Veigar + Annie). The shield triggers under HP threshold — meaning when you fall below 50% HP — and absorbs magic damage.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — final-slot vs assassin dive (Zed, Talon, Rengar). The revive gives you 4 seconds to either escape or finish your Adoration cash-in, and the armor stat reduces dive damage by ~20%.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — replace Bloodthirster vs single-target lockdown CC (Morgana Q binding, Lux Q root, Ashe R stun). The spell shield blocks the first hard CC every 40 seconds — you spend the freed time landing autos instead of being chained.

**Skill order:** Max **Q** first (raw axe damage, your snowball axis), **W** second (faster movement and attack speed for the catch flow), **E** last (utility only — one point at level 3 is enough until late game). Take **R** at levels 6, 11, 16 as usual.

**Runes:** Primary tree **Precision** (built around auto-attacks): **Conqueror** as keystone (stacks on auto-hits and converts a portion of damage to healing in extended fights — perfect for Draven's all-in pattern), then **Triumph** (heal and bonus gold on takedowns — pairs with Adoration cash-in), **Legend: Alacrity** (more attack speed per stacked takedown), **Coup de Grace** (extra damage to low-HP targets). Secondary tree **Domination** with **Sudden Impact** (extra Lethality after using a dash or buff — Draven gets it from W) and **Treasure Hunter** (extra gold per unique takedown — fits the snowball identity).

## Key matchups

- **Caitlyn:** Hardest lane on the board. Her 650 attack range out-pokes (chips your HP from outside your own range) Draven's 550 every single trade. Step up only when she's animation-locked on a last-hit, and never walk through a trap to catch an axe — let the axe drop if it lands on a trap.
- **Aphelios:** Free lane pre-6. Aphelios's Q has 9-second cooldown and his weapons run out of ammo; Draven's Q is permanent. Push level 2 hard (force the wave to crash on his side first), engage on his weakest weapon (Severum or Crescendum — both melee-range main-hands), and burn his Flash before minute 5.
- **Lucian:** Mirror-tier early-game ADC. He out-trades you in a 1-second window with his Q-AA-AA passive combo; you out-trade him in a 4-second window with stacked axes. Decline short trades (don't engage at all), commit to extended trades (a "trade" = a brief exchange of hits, an "extended trade" = a sustained fight of 3+ seconds where Draven's stacked Qs out-damage Lucian's burst).
- **Jhin:** He out-pokes pre-6 (his ranged damage chips your HP from far away in early levels) but loses to all-in (a full-commitment fight where you go for the kill with no fallback option) on his 4th-shot reload. Track his shot counter; engage at "0/4" or right after he wastes a shot on a minion. His W root is a 1-second free hit on Draven who has no dash to dodge.
- **Samira:** She wants to stack passive S-grade for **R** in lane. Don't trade with her once she's hit S-rank: walk away, recall (return to base), and re-engage only at full HP. Her **R** out-DPSes you at melee range, but a Draven E (Stand Aside) knocks her out of channel range and resets the fight.

## Power spikes & win conditions

- **Level 2:** Draven's Q deals huge bonus damage even at rank 1. With a point in **W** for Move Speed and Attack Speed, the level-2 all-in is one of the strongest in the game — most Draven games are decided by who lands the level-2 trade.
- **Level 6 with first kill:** Whirling Death **R** turns into a kill button at low HP — it executes (instantly kills) any target below an HP threshold tied to your Adoration stacks. If you've been catching axes for 6 levels, the threshold is high enough to finish a fleeing enemy from across the map.
- **![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) The Collector completion (~ minute 11-13):** First-item spike (a clear power jump tied to a level or item milestone). Lethality plus the 5% HP execute means every Q-loaded auto threatens a kill on a chip-damaged target. Force a fight at this timing — an Adoration cash-in here often funds your second item 3 minutes early.
- **3-item spike (Collector + Berserker's + Infinity Edge around minute 22-24):** Draven's burst (the damage you put out in a 1-2 second window) becomes the highest of any marksman. Play around objectives (Dragon, Baron, Rift Herald — neutral targets that grant team buffs or map pressure) at this point and look for picks (eliminating an isolated enemy outside the teamfight) on isolated targets in the side lanes.

## Common mistakes

- **Catching axes in dangerous positions.** A Draven who walks 400 units into the wave to catch a Q is a Draven who eats a Caitlyn trap or a Leona engage. If the axe lands in a bad spot, **let it drop** — losing one Q is fine, losing a kill to overextension (stepping past safety to chase a play) is not.
- **Hoarding Adoration stacks.** Stacks decay if you don't cash them in within ~30 seconds of a takedown attempt. If you hit 100+ stacks, force a fight or take a Scuttle skirmish (small fights of 2-4 players in the river over the Scuttle Crab) — sitting on stacks farming is throwing free gold.
- **Using R for damage instead of for execute.** Whirling Death's damage drops sharply per enemy hit. Throwing it through a wave is wasted; throwing it as the second axe (the return cast) on a fleeing low-HP target is a 1500-gold play. Treat R as a sniper rifle, not a clearing tool.
- **Standing still in team fights.** Draven has no dash. Two seconds in the same spot against any mobile threat (Zed, Diana, Camille) and you're dead. Strafe (move sideways while attacking) between every auto-attack — short steps, but constant motion. The catch-arc forces you forward; W speed lets you reset the position right after.
- **Ignoring Stand Aside (E) as peel.** Draven's E knocks enemies aside and slows them. In team fights it's not just a poke — it's the disengage (an ability that breaks a committed fight, breaking the enemy's all-in commitment) that buys you 1.5 seconds of free auto-attacks while a Camille or Hecarim recovers from the knockback.

## Advanced tip

Practice the **W-into-fountain-axe-bounce** trick on side lanes: throw an empty Q at a wall or thin cover, then immediately W-walk through the bounce zone. Because Blood Rush's Move Speed decays quickly, casting it during the axe arc lets you reach a catch position you couldn't reach without it, then catch the axe to refresh W's cooldown for the next play. This single mechanic is what separates a casual Draven who misses one axe in three from a fluent Draven who catches every Q he throws.
