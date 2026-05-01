---
title: "Brand Mid Build & Guide — Patch 16.9"
slug: "brand-mid"
language: "en"
patch: "16.9"
champion: "brand"
role: "mid"
last_updated: "2026-05-01"
description: "Brand mid lane guide for League of Legends Patch 16.9: starter kit, burn-mage build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Brand"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Burst-AOE"
  abilities:
    - key: "P"
      name: "Blaze"
      description: "Brand's spells set targets ablaze (damage over 4s, stacks up to 3). At 3 stacks on a champion the blaze detonates as a small area-of-effect explosion that re-applies spell effects."
      dd_spell_id: "Brand_Passive"
    - key: "Q"
      name: "Sear"
      description: "Linear skillshot that deals magic damage. If the target is already ablaze, it stuns them instead — your main setup tool."
      dd_spell_id: "BrandQ"
    - key: "W"
      name: "Pillar of Flame"
      description: "Delayed area-of-effect zone after a short tell. Targets that are ablaze take +25% damage. Highest single-spell damage in the kit."
      dd_spell_id: "BrandW"
    - key: "E"
      name: "Conflagration"
      description: "Targeted blast that bounces to nearby enemies. If the primary target is ablaze, the spread radius doubles — the easiest way to apply blaze to a wave."
      dd_spell_id: "BrandE"
    - key: "R"
      name: "Pyroclasm"
      description: "Long-range fireball that bounces up to 5 times between champions and minions, prioritising ablaze targets and slowing them on hit. Massive teamfight damage when enemies are grouped."
      dd_spell_id: "BrandR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "E" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs divers and assassins (Zed, Akali, Diana, Fizz) — stasis covers your no-dash weakness during their gap-close"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC (Ahri charm, Lissandra R, Twisted Fate gold card)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs heal-stacking compositions (Soraka, Vladimir, Dr. Mundo, Aatrox top)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap when any priority target buys their first Magic Resist item"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "Hit grouped fights with ablaze stacks already on multiple targets so R bounces between champions instead of minions. Stay behind the front line and fire from max W range."
  weakness: "Zero dash and no escape. If a diver crosses your front line, you have only Flash plus Zhonya's between you and a one-shot — which is why situational defensive items are not optional."
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
    primary_rationale: "Sorcery primary: Arcane Comet auto-procs on every W or E hit, adding free burst on every trade. Manaflow Band keeps mana up for W spam, Transcendence pushes ability haste past 40%, Scorch stacks on top of your blaze ticks at low HP."
    secondary_rationale: "Inspiration secondary: Biscuit Delivery solves Brand's mana problem the first 6 levels and Cosmic Insight gives extra Flash uptime — Flash is your only way to dodge a dash because the kit has no dash of its own."
    secondary_alternative: "If the enemy team has 2+ low-resistance squishies (e.g. Caitlyn + Senna + Ezreal), swap Inspiration to Resolve with Second Wind (sustain through poke) and Revitalize (boosts Brand's lifesteal-via-burn passive on takedowns), keeping you alive long enough to land R."
matchup_draft:
  pick_into:
    - examples: ["veigar", "karthus", "anivia", "ryze"]
      archetype: "Stationary mages with no dash"
      reason: "Their farming patterns require standing in one spot to cast or stack: drop W on the wave, Q the recovery frame for the stun, and the full burn rotation lands before they can move out."
    - examples: ["malphite", "amumu", "sejuani"]
      archetype: "Group-engage tanks"
      reason: "When their R catches your team, the same R catches their team next to your team — Brand's R bounces between every grouped champion and turns their engage into your win condition."
    - examples: ["yuumi", "soraka", "senna"]
      archetype: "Squishy backline contributors with weak escape"
      reason: "Pyroclasm prioritises ablaze targets; one E onto the front line spreads blaze, and the R hops through every grouped enemy until it kills the squishy at the back."
  counterpicks:
    - examples: ["zed", "akali", "fizz"]
      archetype: "Mobile assassins with multiple gap-closers"
      reason: "They blink past your Q before you can land it for the stun. Without the stun your kit has no peel for yourself, so they delete you before R finishes its first bounce."
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "Longer-range artillery mages"
      reason: "Their poke threshold is higher than your Q range. Brand has no mobility to close the gap, so every wave they keep him low until he is a free dive target for the enemy jungle."
    - examples: ["yasuo", "yone"]
      archetype: "Windwall champions with sustained mobility"
      reason: "Wind Wall blocks Q and the projectile path of R; they then dash past your W zone. Burning a defensive item slot for Zhonya's only buys you survival, not lane prio."
---

## Overview

Brand is an **AP burst mage** built around a single mechanic — the passive **Blaze**. Every spell he casts sets the target on fire for four seconds, stacking up to three times. At three stacks the blaze becomes unstable and explodes as a small area-of-effect detonation, re-applying his spell effects to anyone caught in the splash. Translated to gameplay: every ability is a setup for the next, and once an enemy is on fire your **Q (Sear)** stops being a damage spell and becomes a stun. The kit asks two questions over and over — *is the target ablaze yet?* and *are the enemies grouped enough for R to bounce?* — and the whole game plan flows from those two answers.

His mid-lane game plan is straightforward: shove the wave with **W (Pillar of Flame)**, look for **W → Q stun** windows whenever the enemy laner steps near a minion you can hit them through, then roam with priority once the wave crashes under their tower. From level 6 onward, **R (Pyroclasm)** is one of the highest-damage ultimates in the game *if* the enemies are clumped — you have one mid-range setup per fight, no dash to retry, no escape if it whiffs. Lane positioning behind the wave is mandatory: Brand has no innate mobility, no shield, no heal, and his only defensive option is buying Zhonya's Hourglass and pre-aiming Flash.

## Recommended Build

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Doran's Ring solves the mana hunger of W spam and gives the AP scaling that Brand cares about over flat damage early.

**Core items (in order):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — Brand's defining item. Its passive applies a percent-HP burn on top of his blaze stacks, multiplying damage against tanks and stacked-HP teams. Mythic-tier mana, ability haste, and AP all line up with what the kit wants.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration on the squishy targets you most want to delete with R bounces.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — extra burst, plus a passive that ignores even more magic resist on enemies below the HP threshold. Lines up perfectly with R bounces hunting the lowest-HP target.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — late-game scaling multiplier (40% bonus AP). Buy it third or fourth depending on whether the enemy team has already started stacking magic resist.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — into divers and assassins (Zed, Akali, Diana, Fizz). Stasis is the only answer Brand has when a dash chain crosses his front line (the tanks and bruisers standing up front to absorb hits while you fire from behind).
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — into telegraphed magic CC (Ahri charm, Lissandra R, Twisted Fate gold card). The shield blocks the engage spell that would otherwise lock you for the entire fight.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — into heal-stacking comps (Soraka mid, Vladimir, Dr. Mundo, Aatrox top). The Grievous Wounds passive cuts their healing in half so your burn actually translates to dead targets.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — the moment any priority target buys their first magic resist item. Stops the enemy from soft-countering your whole build with a single 800-gold component.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** is default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** are acceptable if your team needs extra R uptime on objective spawns.

**Skill order:** Max **W** first (highest base damage and primary waveclear), **Q** second (more stun damage and lower cooldown), **E** last. Take a point in **R** at levels 6, 11, and 16.

**Runes:** Primary **Sorcery** with **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Inspiration** with **Biscuit Delivery** and **Cosmic Insight**.

## Key matchups

- **Yasuo / Yone:** They block the projectile of your **Q** and the **R** start with Wind Wall. Save **Q** until they push their windwall, hold **W** for the recovery frame, and never use **R** as a flank tool (a "flank" is entering a fight from a side angle, behind the enemy backline) against them — fire it after a teammate engages so the bounces are already moving past their wall.
- **Zed / Akali:** Diving threats with multiple gap-closers (a "gap-closer" is any dash, blink, or jump that crosses ground fast). Buy Zhonya's Hourglass after Liandry's; never use **Flash** offensively in lane against them, and pre-place **W** on your own feet to stun them after they jump on you.
- **Veigar:** Stationary mage you out-pressure pre-6. Push him under tower with **W**, look for the **E → Q** stun rotation when he comes up to last-hit, and recall before his cage threshold (level 6) flips the lane.
- **Anivia:** Even pre-6, she scales harder post-6. Avoid stacking with your wave — her wall splits you from your minions and forces a long backline trade. Roam to side lanes the moment your **R** comes up; she has zero mobility to follow.
- **Twisted Fate:** Roam-priority race. If he picks gold card on you, **Q** him before he closes (stunning a casting champion drops the card). Otherwise track his **R** with vision wards on river and tri-bush; if he ults to side lane, ping bot/top and shove your wave instead of chasing.

## Power spikes & win conditions

- **Level 2 (W + Q):** First spike. With one point in **W** plus the **Q** you started with, you have the full **W → Q** stun combo. Pillar of Flame applies a blaze stack; Q against an ablaze target stuns. This window is when you push for first blood.
- **Level 6 (R unlocked):** First **Pyroclasm** is up. Look for a teamfight at Scuttle (river crab) or first drake — if any two enemies are within bounce range, your R does roughly 50% of a squishy's HP per bounce.
- **Liandry's Torment completion (~ minute 12-14):** Wave control flips ("wave control" = who decides where the minion wave fights, you or the enemy laner) because the percent-HP burn punishes wave clumps. From this point you should be the one shoving and roaming, not holding under tower.
- **Rabadon's Deathcap online (~ minute 24-28):** Your R full-bounce sequence one-shots squishies that have not built any magic resist. Force grouped objective fights here — Baron, Soul Drake, late-game team contests.

## Common mistakes

- **Throwing Q for naked poke.** **Q** without ablaze is just a slow projectile. Always set up with **W** on the ground first or **E** onto a minion that will spread to the champion — the difference is a 1-second stun versus a sad miss.
- **Ulting one isolated target.** **R** bounces between targets prioritising ablaze ones. If only one enemy is in range, the bounces walk back and forth onto that single target with massive damage falloff per hop. Save **R** for grouped fights or for executing two ablaze enemies side-by-side.
- **Pushing without vision.** Brand has no escape (no dash, no blink, no shield). Pushing past river without a ward in the enemy jungle is the single fastest way to feed an early gank. Place a Stealth Ward or Control Ward in tri-bush before every shove.
- **Auto-attacking for "extra" passive damage.** Your auto-attack does not interact with Blaze. Use the auto-attack window to walk into the next **W** spot, not to chase one extra hit on a low-HP minion.
- **Ignoring the unstable detonation timing.** When you reach 3 blaze stacks on a champion, you have two seconds before it detonates. Stunning them with **Q** *before* the detonation locks them into the splash and re-applies blaze on every nearby enemy. Mistiming is the difference between a single-target kill and an AOE wipe.

## Advanced tip

Practice the **double-blaze AOE wipe**. When two enemies stand side by side (typical of clustered teamfights or a stacked wave), do this in order: **W** on the ground between them → both get blaze stack 1. **E** on enemy A → blaze stack 2 on A, spreads to B for stack 2 on B. **Q** on A → blaze stack 3 on A, A is stunned and the unstable detonation hits B as well, putting B at stack 3. Now **R** bounces between two stunned, full-stacked targets and turns the entire rotation into a 2-for-0 trade. This sequence is what separates a "decent Brand" from a Brand who carries.
