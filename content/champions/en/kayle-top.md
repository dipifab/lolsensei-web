---
title: "Kayle Top Build & Guide — Patch 16.9"
slug: "kayle-top"
language: "en"
patch: "16.9"
champion: "kayle"
role: "top"
last_updated: "2026-05-05"
description: "Kayle top lane guide for League of Legends Patch 16.9: survival lane plan, hyper-scaling AS+AP build, key matchups, level 11/16 power spikes, and common mistakes."
quick_learn:
  champion_dd_id: "Kayle"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Fighter / Hyper-scaling Carry"
  abilities:
    - key: "P"
      name: "Divine Ascent"
      description: "Kayle transforms 4 times as she levels (1, 6, 11, 16). At 6 she gains ranged auto-attacks; at 16 her attacks fire AOE waves of fire on-hit."
      dd_spell_id: "Kayle_Passive"
    - key: "Q"
      name: "Radiant Blast"
      description: "Linear skillshot that damages, slows, and shreds armor + magic resist on the first enemy hit and enemies behind. Your only ranged tool pre-6."
      dd_spell_id: "KayleQ"
    - key: "W"
      name: "Celestial Blessing"
      description: "Heal and movement speed on Kayle and the nearest ally. In-lane sustain pre-6, peel and chase tool later."
      dd_spell_id: "KayleW"
    - key: "E"
      name: "Starfire Spellblade"
      description: "Passive: bonus magic damage on auto-attacks. Active: next auto-attack becomes ranged and deals bonus missing-HP magic damage. Post-6 the passive fires AOE waves on-hit."
      dd_spell_id: "KayleE"
    - key: "R"
      name: "Divine Judgment"
      description: "Targets an ally (or self) with a few seconds of invulnerability, then explodes for AOE magic damage. Save tool, engage cover, and finisher."
      dd_spell_id: "KayleR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
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
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
  situational_items:
    - dd_id: "6655"
      name: "Luden's Echo"
      against: "swap as a 2nd item when the lane lets you skip survival picks and you want a mid-game burst spike on top of Nashor's"
    - dd_id: "3091"
      name: "Wit's End"
      against: "vs heavy AP top laners (Rumble, Vladimir, Sylas) when their poke shuts you down before level 11"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "vs healing-stacking compositions (Aatrox top, Soraka, Dr. Mundo) — applies Grievous Wounds on attack"
    - dd_id: "3135"
      name: "Void Staff"
      against: "the moment two enemies finish a Magic Resist item (Mercury's Treads do not count, finished items do)"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "vs lanes that win with auto-attacks (Fiora, Camille, Tryndamere) — swap from Berserker's if you cannot survive lane otherwise"
  base_combo: ["Q", "AA", "E", "AA"]
  win_condition: "Survive lane until level 11, then ramp damage with Nashor's Tooth + Rabadon's Deathcap. At level 16 your on-hit AOE waves clear team fights from the back line under R cover."
  weakness: "Pre-level 6 you are a melee, slow, squishy auto-attacker with one short-range skillshot. Top laners with strong early all-in (Darius, Renekton, Riven) can kill you before any of your power spikes are online."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision primary: Lethal Tempo stacks attack speed in a fight, which scales the AOE waves Kayle's passive fires post-6 and post-16. Triumph heals on takedowns, Legend: Alacrity adds permanent AS, Last Stand boosts damage at low HP — Kayle late game lives there."
    secondary_rationale: "Inspiration secondary: Biscuit Delivery gives you mana and HP refunds during the survival phase pre-6, Cosmic Insight cuts your Flash and item active cooldowns so Zhonya's Hourglass comes back faster in team fights."
    secondary_alternative: "Vs strong-poke lanes (Vladimir, Rumble, Quinn) swap Inspiration for Resolve with Second Wind (passive HP regen after taking damage) and Overgrowth (permanent HP scaling) so you can stay in lane until your level 11 power spike."
matchup_draft:
  pick_into:
    - examples: ["nasus", "mordekaiser"]
      archetype: "Stat-check tops with no early kill threat"
      reason: "Without burst or hard-CC chains they cannot punish your weak pre-6 phase, and once you hit level 11 ranged auto-attacks you out-DPS them from a safe distance."
    - examples: ["veigar", "kayn"]
      archetype: "Late-game scalers without strong 1-9 windows"
      reason: "You match their scaling: any team that lets you reach 16 surrenders the game, because Kayle's AOE on-hit waves outpace their wombo windup."
    - examples: ["senna", "vayne"]
      archetype: "Carries you can babysit with R"
      reason: "Global ulti makes you the best peeler in the game — drop R the second they get dived and your carry survives a full burst chain unharmed."
  counterpicks:
    - examples: ["darius", "renekton", "riven", "fiora"]
      archetype: "Early-pressure bruisers with all-in level 1-3"
      reason: "They kill you before level 6 power spike. Their CC chain plus sustained damage chunks 70%+ HP off Kayle in a 4-second all-in, and you have no dash to disengage."
    - examples: ["camille", "yone"]
      archetype: "Mobile lane bullies with multiple gap-closers"
      reason: "Camille's E hookshot and Yone's Q3 dash both ignore the position you tried to hold; they close the gap before your Q + auto trade resolves."
    - examples: ["olaf", "garen"]
      archetype: "Champions that bypass invulnerability"
      reason: "Olaf's R gives him CC immunity and true damage on R+axe, Garen's R deals true damage scaling on missing HP — both can finish you through Zhonya's Hourglass and even through the front-end of your R."
---

## Overview

Kayle is a hyper-scaling carry who transforms across the game: a melee, slow, squishy auto-attacker at level 1, a ranged poker at level 6, a true late-game monster at level 11, and a team-wide AOE wrecking ball at level 16. Her **Divine Ascent (P)** is the kit — every milestone unlocks a new stat block (attack speed, range, fire waves on hit). The top lane is her natural home because the long lane gives her room to play passive without bleeding tempo.

Her game plan is survival, not aggression. Lose CS if you must, never die, and trust the build: ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** at level 11 turns the ranged passive into real damage, and ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** at level 16 makes the AOE on-hit waves delete entire team fights from the back line under **R** cover.

## Recommended Build

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + 1 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. The shield turns the lane from "I die to two trades" into "I lose CS but I live". Skip Doran's Ring even though Kayle scales with AP — pre-6 you do not have the kit to use it.

**Core items (in order):**

1. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed boots feed your on-hit waves. Rush boots first, build piece by piece into Nashor's.
2. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — your single most important item. Combines the two stats Kayle wants in the same slot (50% attack speed + 90 AP) and adds magic damage on every hit. This is the spike that pushes you from "weak top laner" to "real carry".
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplies all your AP scaling by 30%, and you have a lot to multiply (E passive, R, the post-16 AOE waves).
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — the stasis is your lifeline against divers and against your own R cooldown timing. Build it third or fourth depending on the enemy comp.

**Situational items:**

- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — vs heavy AP top laners (Rumble, Vladimir, Sylas). Adds attack speed plus magic resist plus on-hit magic damage, so it doubles as defensive and offensive at once.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — into healing-stacking compositions (Aatrox top, Soraka mid, Dr. Mundo). Applies Grievous Wounds on every auto, which cuts heal effectiveness by 40%.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — the moment two enemies finish a Magic Resist item (not Mercury's Treads — those are too cheap; finished items only).
- ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — alternative second item when the lane is calm and you want a burst spike on top of Nashor's.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — vs lanes that win with auto-attacks (Fiora, Camille, Tryndamere). Swap from Berserker's if surviving lane is the only goal.

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** is default for the attack speed scaling. Plated Steelcaps when an AD bully is making lane impossible.

**Skill order:** Max **E** first (your damage tool both pre and post 6), **Q** second (longer slow + better shred per rank), **W** last. Take a point in **R** at levels 6, 11, 16. Open **E-W-Q** for early sustain in lane.

**Runes:** Primary **Precision** with **Lethal Tempo**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Secondary **Inspiration** with **Biscuit Delivery** and **Cosmic Insight**. Stat shards: Attack Speed, Adaptive Force, Health Scaling.

## Key matchups

- **Darius:** Hard counter. Stay max distance, only step in for last-hits, never for trades pre-6. Buy ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** start, accept losing 30+ CS, ping for jungle help.
- **Garen:** Easy lane post-6. He cannot interrupt your ranged auto with anything, so kite him (move backward while shooting to keep distance) using **Q** slow + ranged auto. Beware his **R** at low HP — it deals true damage scaling on missing HP and ignores Zhonya's Hourglass.
- **Mordekaiser:** Survival pre-6, snowball (a growing lead: kill → gold → item → more kills) post-11. His **R** isolates you from your team for 7 seconds; if he picks you with it before level 11, you die. Use **Flash** to dodge his **E** pull, and pre-build **Mercury's Treads** if he repeatedly catches you.
- **Camille:** Counterpick. Her **E** hookshot ignores the spacing you tried to hold. Buy ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** instead of Berserker's, ward the lane brush, and ping the jungler if she is two levels ahead.
- **Nasus:** Even pre-6, you win post-11. His **W** wither (a heavy slow on you) wins him the duel before you have ranged auto-attacks. Once Nashor's is online and you out-DPS his stack ramp, push waves and force him to react.

## Power spikes & win conditions

- **Level 6 (R unlocked):** Your first ranged auto-attack form goes live, and **Divine Judgment** gives you a save tool. Stop hugging tower — you can poke from 525 range now and turn dives into kills with a well-timed **R** on yourself.
- **Level 11 + ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth completion (~ minute 18-22):** The biggest spike of the game. Auto-attack range increases again, the passive scales with attack speed and AP, and the wave control flips. Start group play: rotate with the team, look for objectives.
- **Level 16 (full ascension) + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ minute 28-32):** Your auto-attacks fire AOE waves of fire on-hit. One auto on the front-line damages everyone behind. From this point you should be the highest damage source in your team, no matter the role.
- **Anywhere with ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) Zhonya's Hourglass + R combo:** Press **R** on yourself to gain invulnerability, then chain Zhonya's Hourglass once R ends. That is roughly 5 seconds of immunity in a team fight while your team peels — enough to flip most engages.

## Common mistakes

- **Trying to trade auto-for-auto pre-6.** Kayle is melee with low base damage early. Even one bad trade against Darius or Renekton starts the snowball you cannot undo. Hold **W** for sustain, last-hit only.
- **Wasting R on yourself for poke survival.** **Divine Judgment** has a 160-second cooldown at rank 1 — that is the entire mid-game team fight gone. Save **R** for incoming all-ins or for protecting your ADC during dragon fights.
- **Standing in the front line at level 16.** Your AOE on-hit waves are best from the back line, behind your tank. Position like an ADC — let the team frontline take the hits while you fire waves through them.
- **Taking jungle camps before level 11.** Kayle clears slowly and weakens her HP before her power spike. Stay in lane, push waves, recall on full mana — do not chase invades or scuttle fights pre-Nashor's.
- **Selling boots for a 6th item too early.** Late game you can swap boots for a damage item (Mejai's Soulstealer, Cryptbloom), but only when you are 5/0 ahead and team fights are guaranteed group fights. If you are even, keep boots.

## Advanced tip

Master the **R-on-self peel pattern** in mid-game team fights. When the enemy diver (Camille, Hecarim, Sett) jumps onto your back line, do not press **R** on your ADC — press it on yourself, walk into the dive line, then drop the AOE explosion under the diver's feet. The 2.5 seconds of invulnerability force the diver to either commit and eat the explosion (free kill) or back off (your team resets the fight even). The trick is range: **R** has 900 cast range, so you can target yourself even when standing 8 units behind your ADC.
