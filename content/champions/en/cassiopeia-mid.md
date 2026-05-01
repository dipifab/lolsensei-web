---
title: "Cassiopeia Mid Build & Guide — Patch 16.9"
slug: "cassiopeia-mid"
language: "en"
patch: "16.9"
champion: "cassiopeia"
role: "mid"
last_updated: "2026-05-01"
description: "Cassiopeia mid lane guide for League of Legends Patch 16.9: starter kit, core mage build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Cassiopeia"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Battlemage"
  abilities:
    - key: "P"
      name: "Serpentine Grace"
      description: "Passive that amplifies all bonus Move Speed Cassiopeia receives from items, runes, and her own Q. Boots scale harder on her than on most mages."
      dd_spell_id: "Cassiopeia_Passive"
    - key: "Q"
      name: "Noxious Blast"
      description: "Targeted ground AOE that detonates after a short delay and applies Poison. Hitting an enemy champion grants a burst of Move Speed used to chase or kite."
      dd_spell_id: "CassiopeiaQ"
    - key: "W"
      name: "Miasma"
      description: "Wall of poison clouds that slows and grounds enemies inside. Grounded targets cannot use dashes, blinks, or movement spells — main anti-mobility tool."
      dd_spell_id: "CassiopeiaW"
    - key: "E"
      name: "Twin Fang"
      description: "Low cooldown spell (0.75s) that deals bonus damage to Poisoned targets and heals Cassiopeia. Refunds mana on takedown. Main DPS button — never stops casting."
      dd_spell_id: "CassiopeiaE"
    - key: "R"
      name: "Petrifying Gaze"
      description: "Wide cone in front of Cassiopeia. Enemies facing her get stunned for ~1.5s; enemies looking away only get slowed. Aim it head-on for the full lock."
      dd_spell_id: "CassiopeiaR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs burst assassins (Zed, Talon, Akali): the 2.5s stasis buys time for E spam to come back online and for allies to peel"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC that locks you out of E (Ahri charm, Lissandra R, Twisted Fate gold card)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs healing-stacking comps (Soraka mid, Vladimir, Dr. Mundo top): applies Grievous Wounds to cap their lifesteal/regen"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap into Shadowflame slot once any priority target buys a Magic Resist item"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "vs heavy melee comps that try to walk you down: every E hit refreshes a slow, peeling for the back line on top of the ground from W"
  base_combo: ["Q", "W", "E", "E", "E"]
  win_condition: "Stack Liandry's Torment damage on poisoned targets with E spam (0.75s cooldown) while W grounds dashes. Land R head-on at level 6 to convert lane prio into kills, then scale to a battlemage front line."
  weakness: "Range 700 with no dash, no blink, no escape. Long-range artillery mages out-poke her; pre-6 ganks with hard CC end the lane before she scales. Mana-starved if E spam misses."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8230
      name: "Stormraider's Surge"
      icon_path: "perk-images/Styles/Sorcery/PhaseRush/StormraidersSurgeRuneIcon2.png"
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
    primary_rationale: "Sorcery beats Domination/Precision here: Stormraider's gives the Move Speed burst (3 fast procs) the kit otherwise lacks. Manaflow feeds 40-mana E spam, Transcendence raises Ability Haste (faster cooldowns), Gathering Storm out-scales Electrocute's burst late."
    secondary_rationale: "Inspiration secondary: Biscuit Delivery covers mana and HP in the rough early laning phase before Liandry's Torment, Cosmic Insight makes Flash and item actives come back faster in teamfights."
    secondary_alternative: "Vs heavy poke or burst (Xerath, Syndra, Zed), swap Inspiration to Resolve with Second Wind (regen against ranged harass) and Bone Plating (eats the first 3 hits of an all-in burst combo)."
matchup_draft:
  pick_into:
    - examples: ["yasuo", "yone", "akali", "irelia", "zed"]
      archetype: "Dash-reliant mid laners"
      reason: "Miasma grounds them inside the cloud: the moment they step in, every dash, blink, or movement ability is locked out. Their kits collapse against a champion who deletes their main escape tool."
    - examples: ["karthus", "veigar", "anivia"]
      archetype: "Immobile mages with no escape"
      reason: "Cassiopeia out-trades anyone who has to stand still to cast: E (0.75s cooldown) deals more damage on poisoned targets than their full rotations, and they can't dodge the W zone you drop on top of them."
    - examples: ["renekton", "sett"]
      archetype: "Melee bruisers that need to stick on you"
      reason: "Without a long dash, they have to walk 700 units through W and Q poison to touch you. Twin Fang sustains you back to full HP every trade."
  counterpicks:
    - examples: ["xerath", "vel-koz", "ziggs", "lux"]
      archetype: "Long-range artillery mages"
      reason: "They poke past Cassiopeia's 850 Q range. With no dash she can't close distance, so every wave bleeds her HP. Her power curve needs lane farm she can't safely take."
    - examples: ["twisted-fate", "galio", "ryze"]
      archetype: "Global / cross-map roamers"
      reason: "Cassiopeia is anchored to mid lane (no fast roam). Opponents use ult to tip side lanes and dragons; she wins her 1v1 but loses the macro game (objective trades happening on the map)."
    - examples: ["lissandra", "syndra"]
      archetype: "Burst mages with chain-lock CC"
      reason: "They lock Cassiopeia in place before her W grounds them, then full combo her down. Lissandra R is point-and-click — Banshee's Veil helps but doesn't save you from a 6-second stun chain with jungle follow-up."
---

## Overview

Cassiopeia is a battlemage (a mage who fights at mid-range, not from far back) at around 700 units of range — just outside basic auto-attack distance. She wins extended trades (exchanges of damage in lane) against almost anyone who needs a dash to reach her. Her **Twin Fang (E)** has a 0.75-second cooldown — the lowest of any mid laner — so once **Noxious Blast (Q)** poisons a target she becomes a continuous damage stream that also heals her. **Miasma (W)** is the signature: enemies inside the cloud become *grounded*, so dashes, blinks, and movement spells stop working until they leave. Pick her into mobile assassins (kits built around dashing in and out, like Yasuo, Akali, Zed) and you take their toolkit away.

Her game plan is short to describe and slow to execute: poison the wave (the line of minions) with **Q**, repeat-cast **E** to clear and harass, drop **W** the moment a dash-based opponent engages (commits to the fight), then aim **R** head-on at level 6 — the cone stuns whoever is facing you and only slows the rest. She has no dash, no blink, and no movement equivalent on her bar, so positioning is the price of every play. If you walk one step too far forward, the kit collapses in one CC chain (a sequence of stuns and roots back-to-back). **CC** = "crowd control", any effect that interrupts you: stun, root, slow, silence.

## Recommended Build

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Cassiopeia is mana-hungry (every E costs mana and she casts a lot) and Doran's mana regen is exactly what E spam needs.

**Core items (in order):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — first complete item. The burn passive (damage spread over the seconds after each hit, instead of all at once) stacks on every poisoned target your E touches, which on Cassiopeia means almost every cast.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration (the item ignores part of the enemy's Magic Resist, so your spells hit harder). Cassiopeia's passive Serpentine Grace amplifies the boots' Move Speed too.
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — biggest AP (Ability Power, the stat that scales magic damage) multiplier in the game. Boosts the per-cast E damage you fire 30+ times in a long teamfight.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — magic penetration that scales harder when the enemy is below 35% HP (an HP-threshold passive: an item effect that switches on once the target drops under a health %). Lines up with finishing off back-line carries (the squishy damage dealers, like ADCs and mages, that your team needs killed first).

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — vs burst assassins (Zed, Talon, Akali — champions who deal a lot of damage in 1-2 seconds). The 2.5-second stasis active (you become invulnerable but cannot move or cast) buys time for **E** to come off cooldown and for teammates to peel (block enemies away from you).
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — vs single-target magic CC that locks you out of E (Ahri's charm, Lissandra's R, Twisted Fate's gold card stun).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — vs healing-stacking comps (Soraka mid, Vladimir, Dr. Mundo top): applies Grievous Wounds (a debuff that cuts enemy healing roughly in half), capping their lifesteal (HP regained from damage they deal) and regen.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — swap into the Shadowflame slot the moment a priority target (the enemy your team most needs dead — usually their main carry) buys a Magic Resist item.
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — vs heavy melee comps that try to walk you down. Every E hit refreshes a slow on the target, peeling (protecting) for your back line on top of the ground effect from W.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** is default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** (boots that give Ability Haste, making your spell cooldowns shorter) is acceptable if you want more **W** uptime to keep dashes locked out for the team.

**Skill order:** Max **E** first (main DPS button), **Q** second (poison and Move Speed), **W** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Sorcery** with **Stormraider's Surge** keystone (a keystone is the top, most-impactful rune of a tree; "to proc" a rune means to trigger its effect — Stormraider's procs after 3 quick spell hits), **Manaflow Band**, **Transcendence**, **Gathering Storm**. Secondary **Inspiration** with **Biscuit Delivery** and **Cosmic Insight**, or **Resolve** with **Second Wind** and **Bone Plating** vs heavy poke (long-range chip damage that wears down your HP).

## Key matchups

- **Yasuo / Yone:** Kit full of dashes. Their third Q is a knock-up dash — first time they jump on you, drop **W** under your feet. They get stuck up close with no movement, **E** spam wins. Save **R** for their ult so they eat the stun head-on.
- **Zed:** Threat champion. Buy ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** as your second completed item if he gets a lead. Drop **W** on yourself the second he uses his ultimate (he marks you and teleports onto a shadow clone); if he lands behind you, the shadow-swap teleport is *grounded* by W and he can't escape.
- **Xerath:** Hard matchup. He pokes from beyond your **Q** range (chips your HP from outside the distance you can fight back). Give up some CS (creep score: gold from killing minions) under your tower and look for a roam (leaving lane to help a teammate) to bot at level 6 — fighting him in lane just bleeds HP for nothing.
- **Akali:** Before level 6 you win extended trades with **E** spam on poisoned targets. After 6 her smoke shroud (W) hides her, breaking your E target. Ward your sides and don't push too far forward without **R** ready.
- **Twisted Fate:** You can win the lane, but not the map. He stuns you with his gold card, ults bot lane, and turns the game into a cross-map fight (a kill happening far from where you stand) you don't influence. Push the wave on cooldown and ping your bot lane every time his **R** comes off cooldown.

## Power spikes & win conditions

- **Level 2:** With **Q** and one rank of **E**, you have the first poison-then-tap loop. Walk forward when their wave (line of minions) is bigger than yours and force a trade.
- **Level 6:** **Petrifying Gaze (R)** unlocks. A head-on **R** at close range stuns for ~1.5 seconds, more than enough to chain a full **Q-W-E-E-E** combo. Force a fight on the wave bounce (the moment when the line of minions stops moving and starts pushing back toward you).
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment completion (~ minute 11-13):** Your E spam now applies a damage-over-time burn on top of the hit damage. You shove waves (push minions to enemy tower fast) twice as fast and pressure your enemy mid laner's roam timers.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minute 24-28):** Per-cast E damage scales hard (gains a lot of power from this item). Look to anchor mid-lane teamfights around objectives (Drake, Baron, towers) — late game Cassiopeia stands closer to the fight than other mages, almost like a second frontline.

## Common mistakes

- **Casting E without poison on the target.** **Twin Fang** does normal magic damage on a clean target and bonus damage only on poisoned ones. Always **Q** (or W) first, then E spam — never the other way around.
- **Holding W for the perfect engage.** **Miasma** is also defense. Moment Yasuo casts W (the windwall that blocks projectiles) or Akali ults, drop **W** on yourself. The ground cancels their movement abilities even if your team isn't ready to follow up.
- **Aiming R blindly.** **Petrifying Gaze** only stuns enemies facing you. From the side or back, you slow them and waste the cooldown. Walk into the front of the fight, then turn and hit R.
- **Pushing past the river without vision.** Cassiopeia has no escape. Without a ward (vision-revealing trinket placed on the map) in the river bush, one enemy jungler ambush (called a *gank*) with hard CC (long stuns or roots, as opposed to soft CC like slows) ends your lane.
- **Ignoring mana in the first 5 minutes.** Each E costs 40 mana flat regardless of rank. Casting it repeatedly on minions before Manaflow Band is online drains your bar in two waves and leaves you defenseless against an all-in (a full commit to kill you).

## Advanced tip

Practice dropping **W (Miasma)** *underneath your own feet* the instant a dash hits you, not in front of you. The ground effect applies the moment the cloud lands — if Yasuo, Yone, or Akali engages from melee, they're standing exactly where the cloud spawns and immediately lose access to their second dash. Most Cassiopeia players still W in front of themselves like a poke spell, missing the defensive use that ends most assassin all-in attempts on the spot.
