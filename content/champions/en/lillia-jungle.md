---
title: "Lillia Jungle Build & Guide — Patch 16.9"
slug: "lillia-jungle"
language: "en"
patch: "16.9"
champion: "lillia"
role: "jungle"
last_updated: "2026-05-05"
description: "Lillia jungle guide for League of Legends Patch 16.9: starter kit, AP burst build path, key jungle matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Lillia"
  difficulty: 3
  damage_type: "magic"
  champion_class: "AP Skirmisher / Roaming Caster"
  abilities:
    - key: "P"
      name: "Dream-Laden Bough"
      description: "Every ability hit applies a max-HP magic damage-over-time stack on champions and monsters. Stacks of Dream Dust enable her R."
      dd_spell_id: "Lillia_Passive"
    - key: "Q"
      name: "Blooming Blows"
      description: "AOE swing around Lillia: damage near her, extra true damage on the rim. Hits stack a Move Speed bonus. Main clear and skirmish DPS tool."
      dd_spell_id: "LilliaQ"
    - key: "W"
      name: "Watch Out! Eep!"
      description: "AOE windup with a damage zone — center hits much harder. The single-target burst spell. Telegraph is long; pair with E slow."
      dd_spell_id: "LilliaW"
    - key: "E"
      name: "Swirlseed"
      description: "Long-range lobbed seed: damages, slows, and reveals. If it misses it rolls until it hits something. Use as setup, vision, or save tool."
      dd_spell_id: "LilliaE"
    - key: "R"
      name: "Lilting Lullaby"
      description: "Globally ramps Drowsy on every enemy champion already carrying Dream Dust, then puts them Asleep. First hit wakes them with bonus damage."
      dd_spell_id: "LilliaR"
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs assassins and dive comps (Zed, Diana, Kha'Zix) — stasis covers the gap while your DOT and R tick"
    - dd_id: "4645"
      name: "Shadowflame"
      against: "vs squishy backlines (ADC + Mage with no Magic Resist) — HP-threshold passive lines up with R wake-up burst"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "vs kite-heavy comps that out-position you — extra Move Speed and Ability Haste fuel her ability-cycle skirmish"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap when any priority target buys a Magic Resist item (Mercury's Treads, Force of Nature)"
  base_combo: ["E", "R", "Q", "W", "AA"]
  win_condition: "Stack Dream Dust on the priority targets with Q passes, land R for the team-wide sleep, then chain W center-hit and Q for max burst before they cleanse or peel."
  weakness: "Soft early levels and one form of mobility (Q stacks). Aggressive level 2-3 invades, hard CC chains (Lee Sin Q, Vi R), and Mercury's Treads on her R targets all break her snowball."
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
    primary_rationale: "Inspiration primary: First Strike rewards her clear-heavy playstyle with bonus gold every gank, Magical Footwear gives free boots while she farms, Biscuit Delivery and Cosmic Insight cover early mana and refresh Smite/Flash for objective fights."
    secondary_rationale: "Sorcery secondary: Manaflow Band caps her mana so Q-W-E spam through camps does not run her dry, Transcendence pushes Ability Haste for shorter R cooldowns on the second and third teamfights."
    secondary_alternative: "Into extended 1v1 skirmishes (Master Yi, Warwick, Udyr), swap Inspiration to Precision with Conqueror keystone and Triumph: stacking adaptive damage and HP-on-takedown turn long fights in your favor."
matchup_draft:
  pick_into:
    - examples: ["karthus", "amumu", "fiddlesticks"]
      archetype: "Farm-heavy junglers without early invade"
      reason: "They want to clear in peace until level 6. Lillia matches their farm speed and out-skirmishes them at scuttle thanks to her Q stacks of Move Speed and DOT pressure."
    - examples: ["sion", "dr-mundo", "cho-gath"]
      archetype: "Tank top laners vulnerable to percent-HP DOT"
      reason: "Liandry's Torment plus her passive max-HP burn shred big HP pools fast. Her R sleep turns their slow-cast threats (Sion R, Mundo Q) into free positioning for your team."
    - examples: ["senna", "kog-maw"]
      archetype: "Immobile backline carries"
      reason: "Cross-screen E sets up gank lockdown, then R sleep gives a guaranteed pickoff window before they can position behind their front line."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "Aggressive level 2-3 invaders"
      reason: "Lillia's level 1-3 are the weakest part of her game; she has no hard CC and only Q for damage. A successful invade kills her before her clear-plus-mobility power spike comes online."
    - examples: ["yasuo", "camille"]
      archetype: "Champions with dashes or Wind Wall that bypass W slow"
      reason: "Her single-target burst W needs the target stuck on the center spot. Repeated dashes and Camille E hookshot leave her swinging at empty ground."
    - examples: ["kindred", "graves"]
      archetype: "Ranged AD junglers that out-DPS scuttle"
      reason: "They beat her at scuttle with auto-attack range while she has to walk into Q hitbox. Losing scuttle twice in a row collapses her river vision and roam timing."
---

## Overview

Lillia is an AP skirmisher jungler whose entire kit applies a max-HP magic damage-over-time stack via her passive **Dream-Laden Bough**. Every Q swing, every W slam, every E seed leaves a "dream dust" mark that keeps ticking damage for a few seconds — that is why she clears jungle camps faster than almost any other AP jungler and why her duels feel like they grind enemies down even when her cooldowns are empty. Her game plan is simple to describe: stack dust on as many enemy champions as possible, then press **R** to put them to sleep all at once.

She wants tempo, not slow farm. Use **Q** to keep her stacking Move Speed buff up while pathing between camps, **E** to gank from outside warding range, and **W** as the single-target hammer in skirmishes once the target is slowed. Late game her R is the most reliable team-wide setup CC in the AP jungle pool, but it relies on you having tagged the targets first — naked R on a clean enemy team is a wasted ult.

## Recommended Build

**Starting items:** Hailblade (1039) + Refillable Potion (2031). Lillia is ranged, so Hailblade is the correct smite-pet starter.

**Core items (in order):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade from Hailblade; auto-evolves around minute 3-4 once enough monster XP is banked. The AP-burst pet companion: every basic attack after a spell adds an on-hit magic proc, which lines up perfectly with her passive DOT.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — first full item. The percent-HP burn (a slow damage spread over a few seconds, not instant burst) stacks with her own passive: the more total HP the enemy has, the harder it shreds.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration. Default boots once Magical Footwear delivers your free pair around minute 12.
4. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — extended-fight item: stacks omnivamp (heal-on-damage) and converts part of your damage into true damage after 3 seconds in combat. Pairs naturally with her DOT clock.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — late-game AP scaling multiplier; turn the chip damage of her passive into actual one-shot windows.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — into assassins and dive compositions (Zed, Diana, Kha'Zix). Stasis covers the moment after you R into the back line while your DOT and team finish the kill.
- ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — vs squishy backlines without Magic Resist. Its low-HP-threshold passive (extra magic damage when the target is low) lines up with the wake-up tick of your R.
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — vs kite-heavy comps. Extra Move Speed and Ability Haste fuel her ability-cycle skirmish, since her damage comes from chaining spells, not auto-attacks.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — the moment any priority target buys a Magic Resist item.

**Boots:** Sorcerer's Shoes is default. Mercury's Treads is acceptable into AP burst plus heavy CC (Lissandra + Twisted Fate); the tenacity protects your R cast windup.

**Skill order:** Max **Q** first (clear speed and skirmish DPS), **W** second (single-target burst), **E** last. Take a point in **R** at levels 6, 11, 16. The level 1 point goes into **Q**, level 2 into **E** for ganks, level 3 into **W**.

**Runes:** Primary **Inspiration** with **First Strike**, **Magical Footwear**, **Biscuit Delivery**, **Cosmic Insight**. Secondary **Sorcery** with **Manaflow Band** and **Transcendence**.

## Key matchups

- **Lee Sin / Xin Zhao:** Aggressive level 2-3 invaders (they walk into your jungle and try to kill you before you have a full kit) who delete you before your clear-plus-mobility power spike comes online. Start at the camp furthest from their predicted invade path; have your laners place wards near your second buff. Do not contest scuttle (the river crab) pre-6.
- **Karthus:** Farm race. He out-scales you late but you out-tempo him 6-14. Track his clear, gank his lanes on every R cooldown. If you get behind, do not duel — focus side-objective trades.
- **Amumu:** Both clear quickly but he has no skirmish presence pre-6. Take scuttle on his side of the map after first clear; he cannot punish you without his Q stun on cooldown.
- **Master Yi:** Counterpick territory once he has 2 items. Build ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** earlier than usual; kite his Q (his alpha strike) by stacking your Q passive Move Speed and pre-placing E behind you.
- **Graves:** Loses scuttle to him at full HP. Path opposite side of the map until you have ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** completed; the percent-HP burn finally evens the auto-attack trade.

## Power spikes & win conditions

- **Level 3 (Q + W + E):** Full kit unlocked. First clear ends ~minute 3:15 with healthy HP — this is your earliest gank window with E setup into W center hit.
- **Level 6 (R unlocked):** First **Lilting Lullaby**. Look for pre-stacked dust on a low laner: walk into vision, R, wait the 1.5s ramp, hit the wake-up combo. This is the highest-skill timing in her kit (early R is a wasted ult).
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment completion (~ minute 9-11):** Skirmish DPS doubles. Force grub or first dragon fights here; her DOT plus the item's burn shreds tank front lines faster than they can re-position.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker online (~ minute 18-22):** Extended-fight power. You out-sustain bruisers in 5v5 because your healing scales with how much damage you keep applying — and your kit applies damage on every cooldown.

## Common mistakes

- **Casting R on enemies with no Dream Dust.** R only sleeps targets that are already carrying your passive stacks. Hit them with Q or E first; an "empty" R puts only a brief Drowsy state, not a full sleep.
- **Standing still to land W.** W's center hit is the burst, but the windup is long. Pair it with E slow first — landing E means your W center hit becomes nearly guaranteed, even without Flash setup.
- **Q-spamming through enemy fog.** Q reveals you on every cast. In wraith-warded enemy jungle, Q-spam clearing a camp puts a giant red ping on the enemy minimap. Walk in silent, then commit.
- **Ignoring jungle pet upgrades.** Many new Lillia players skip the Hailblade quest by clearing too efficiently. Keep checking the pet bar — if it stalls at "needs more XP", path through one extra small camp before backing.
- **Going for late-game R picks alone.** R is a team setup tool, not a solo gank button. If your team is mid-rotation when you R, the sleep timer will run out before they arrive. Ping the spell, count to 1, then commit.

## Advanced tip

Practice an "E-flash" angle for mid-river R setups. Move toward the enemy mid laner from the side bush, flash-E in their walking path so the seed lands behind them (forcing them to walk into the slow), then R during the slow window. The slow guarantees your passive stacks land before R resolves, which means the sleep is a full sleep and not a partial Drowsy. Saves the cast on objective spawns where the enemy is mid-rotation and warding is sparse.
