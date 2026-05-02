---
title: "Galio Support Build & Guide — Patch 16.9"
slug: "galio-support"
language: "en"
patch: "16.9"
champion: "galio"
role: "support"
last_updated: "2026-05-02"
description: "Galio support guide for League of Legends Patch 16.9: starter kit, engage-tank build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Galio"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Vanguard / Engage Support"
  abilities:
    - key: "P"
      name: "Colossal Smash"
      description: "Every few seconds, Galio's next basic attack deals bonus magic damage in a small area on hit."
      dd_spell_id: "Galio_Passive"
    - key: "Q"
      name: "Winds of War"
      description: "Two windblasts that converge into a tornado at the target spot, dealing magic damage over time. Long-range poke from a safe position."
      dd_spell_id: "GalioQ"
    - key: "W"
      name: "Shield of Durand"
      description: "Charge a shield that absorbs magic damage; release to taunt and damage nearby enemies. Use mid-fight to peel for your ADC (protect the carry from divers)."
      dd_spell_id: "GalioW"
    - key: "E"
      name: "Justice Punch"
      description: "Step back briefly, then dash forward, knocking up the first enemy champion hit. Primary engage tool."
      dd_spell_id: "GalioE"
    - key: "R"
      name: "Hero's Entrance"
      description: "Designate an ally; after a delay, smash down on their location, shielding allies and knocking up enemies. Cross-map engage."
      dd_spell_id: "GalioR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "E" }
    - { level: 9, key: "Q" }
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
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "3109", name: "Knight's Vow" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "vs heavy single-target CC on your ADC (Morgana Q, Ashe R, Skarner R) — active cleanse saves the carry"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "with auto-attack-heavy ADC (Jinx, Caitlyn, Tristana) — your W slow chains into their DPS window"
    - dd_id: "8020"
      name: "Abyssal Mask"
      against: "with magic-damage allied composition (AP mid + AP jungle) — debuff aura amps your team's magic damage on the targets you taunt"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "vs 3+ AP threats on the enemy team (mid + jungle + support with magic damage)"
    - dd_id: "3107"
      name: "Redemption"
      against: "with enchanter ADC or healing-heavy comp (Soraka, Sona, Yuumi already on your team) — extra group heal in objective fights"
  base_combo: ["E", "AA", "W"]
  win_condition: "Use Hero's Entrance R for cross-map engage on dragon and Rift Herald spawns. In bot lane skirmishes, lead with E knockup, W taunt to peel for ADC, then Knight's Vow redirects damage off your carry."
  weakness: "W charge is interruptible by hooks (Blitzcrank, Thresh) and silences. Disengage enchanters (Janna, Lulu) cancel your R follow-up. Limited solo damage — needs ADC follow-up to convert engages into kills."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primary: Aftershock procs on W taunt or R knockup, giving the resists to survive the fight after engaging. Font of Life heals your ADC when they attack the immobilized target, Bone Plating absorbs the first burst, Revitalize amps your R shield value on teammates."
    secondary_rationale: "Inspiration secondary: Biscuit Delivery gives free HP and mana refill in lane (Galio is mana-hungry on a support income), and Cosmic Insight reduces Flash cooldown — vital because R+Flash is your highest-impact catch tool."
    secondary_alternative: "Into a hard-poke lane (Brand, Zyra, Xerath support) where you cannot reach level 6 healthily, swap Inspiration to Sorcery with Manaflow Band (more mana for Q poke back) plus Transcendence (faster E to dodge follow-up poke)."
matchup_draft:
  pick_into:
    - examples: ["ashe", "caitlyn", "jhin"]
      archetype: "Immobile ADCs with no dash"
      reason: "Hero's Entrance lands on top of your ally with a knockup; carries without a dash cannot escape, so any 2v2 turns into a kill once R is up."
    - examples: ["leona", "rakan"]
      archetype: "Hookless tank engage supports"
      reason: "Galio's E knockup interrupts their engage windup (Leona Q stun-walk, Rakan W charge); his W shield then absorbs the magic damage from their post-engage follow-up."
    - examples: ["brand", "zyra"]
      archetype: "Squishy mage supports without escape"
      reason: "Mage supports stand still to land skillshots; Galio's E reaches them through minions and his W tanks the burst that would normally chase off a melee engager."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "Hook supports"
      reason: "A hook landing on Galio mid-W cancels the entire engage; he is a big target with no built-in dodge tool, and a hook into a chain CC removes both R and E from the fight."
    - examples: ["janna", "lulu", "milio"]
      archetype: "Disengage enchanters"
      reason: "Their AOE knock-aside or shield-and-cleanse spells negate the R landing window and the W taunt — by the time Galio drops in, the carry is already disengaged out of range."
    - examples: ["xerath", "vel-koz"]
      archetype: "Long-range artillery mage supports"
      reason: "They poke from outside Galio's Q range and his E dash distance, so he cannot punish them in lane; missing health pre-6 stalls his side-lane R impact."
---

## Overview

Galio support is the cross-map engage (fight-starting) tool in a tank shell. He brings hard crowd control — meaning CC that the enemy cannot resist with a basic cleanse — on three different abilities: **W** taunt (forces the target to attack you), **E** knockup (briefly tosses into the air, like a short stun), **R** knockup. He has a magic-damage shield to soak the burst (high damage in 1-2 seconds) from ranged supports, and a global ulti that turns dragon and Rift Herald spawns into 5v5 kill opportunities. He plays support because his impact scales with map awareness, not gold — and because his Hero's Entrance is most useful when teammates need a tank to land on, not when he is one himself.

The game plan in lane is patient: use Q from max range to chip the enemy, hold E for the moment your ADC (the marksman, the carry that auto-attacks for damage) commits to a fight, and look to charge W only when the enemy is already locked in melee with you. The big plays come at level 6 — when your jungler dives top (goes under tower for a kill), you R in; when the enemy jungler shows bot, you R back to your top laner. Skill expression sits in W timing (release to interrupt key channels — Caitlyn R, Twitch ulti spray, Master Yi Q) and in R target selection (always pick the ally most likely to survive the 2 seconds of channel — never R a Vayne who is already at low HP).

## Recommended Build

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Standard support starter; quest upgrade (a built-in mission that completes by farming gold over time) unlocks at minute 12-14.

**Core items (in order):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — World Atlas quest upgrade, picked because Galio is engage-leaning (he starts fights, doesn't disengage from them). Adds attack-on-immobilized passive damage that procs (triggers automatically) every time your W or E lands.
2. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — area shield active for 5v5 skirmishes. Combines with R: land R, drop Locket on landing, and your team eats the enemy follow-up burst with a 700+ shield each.
3. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — ability haste boots. Cuts cooldown on every spell so your engage tools come back faster between teamfights, and the Summoner Spell CDR shortens Flash for R+Flash plays.
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — bind to your highest-impact carry. Redirects damage from them to you and pushes Aftershock value because you are now the priority focus target.

**Situational items:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — vs heavy single-target CC on your ADC (Morgana Q, Ashe R, Skarner R). Active cleanses crowd control and heals.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — with auto-attack-heavy ADC (Jinx, Caitlyn, Tristana). Your W slow chains directly into their DPS window.
- ![Abyssal Mask](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/8020.png) **Abyssal Mask** — with magic-damage allied composition (AP mid + AP jungle). The debuff aura amps your team's magic damage on the targets you W taunt.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — vs 3+ AP threats on the enemy team (mid + jungle + support all magic damage).
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — with enchanter ADC or healing-heavy comp (Soraka, Sona, Yuumi already on your team).

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** is default — ability haste plus Flash CD reduction makes R+Flash combos available more often. Switch to ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** vs heavy CC comps (multiple stuns/charms/roots aimed at you during R landing).

**Skill order:** Max **E** first (faster engage cooldown). Max **Q** second (waveclear and chip damage when ADC is shoved — pinned to your tower with no minions to farm). Max **W** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Resolve** with **Aftershock**, **Font of Life**, **Bone Plating**, **Revitalize**. Secondary **Inspiration** with **Biscuit Delivery** and **Cosmic Insight**. Swap secondary to **Sorcery** (Manaflow Band + Transcendence) into hard-poke lanes you cannot reach level 6 in healthily.

## Key matchups

- **Blitzcrank:** Hard lane. His Q hook lands during your W charge. Stand behind your minion wave so he cannot hook through, never charge W in fog of war, and call your jungler to gank around minute 4-5 — Blitz has no escape and your E knockup chain-locks him.
- **Lulu:** Difficult disengage. Her E shield + W (knock-aside or polymorph) deletes your engage. Use Q to poke from max range pre-6 instead of going for E engages, and R from off-screen so the polymorph cannot land before you arrive.
- **Leona:** Even fight. Both of you are engagers, so the side that lands E first wins the trade. Bait her Q sun-strike with your forward step, then E her on the recovery frame.
- **Soraka:** Favorable. Her healing only matters if she stays in range. Q her from max distance so she has to choose between healing and dodging, then R + E once your jungler shows bot for an unwinnable 3v2.
- **Pyke:** Even fight, but Galio loses if Pyke gets a kill. Track his hooks, never let your ADC stand at minimum HP when you cannot ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** the spike, and ward river deeply because his R is a reset.

## Power spikes & win conditions

- **Level 2:** Q + E unlocks the first kill threat. With ADC follow-up, walk forward, E the support, and Q underneath the ADC — the slow into knockup chains long enough for two auto-attacks of damage.
- **Level 6:** **Hero's Entrance** unlocks cross-map. The first dragon fight is your power spike — push the wave hard, walk to mid river, and R on your jungler when they engage on the dragon pit.
- **Bloodsong completion (~ minute 12-14):** Engages now deal real damage. The on-immobilize proc adds 30+ magic damage per hit on the target you W or E.
- **Locket of the Iron Solari + Knight's Vow online (~ minute 20-25):** Your two-item spike. R-into-Locket on the carry covers 600+ effective HP for the team, while Knight's Vow tanks the focus fire onto you while your ADC keeps DPSing.

## Common mistakes

- **Charging W while your ADC has no follow-up.** The W taunt forces the enemy to attack you, but if the ADC is repositioning or recalling, you eat the damage for free without a trade. Time W release to your ADC's first auto-attack window.
- **Hero's Entrance on the wrong target.** Never R an ally already at low HP — they die during the 2-second channel and you land on a corpse. Pick the highest-HP frontline target on your team.
- **Ignoring the wave during roams.** A Galio support R into mid that gives up an entire bot wave is a net loss. Push your wave to the enemy tower first, then roam — never roam from a frozen lane.
- **Engaging without ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket active.** In objective fights, R-Locket is your single most valuable cooldown. Hold the active until your team commits the fight, then drop both at the same moment for the maximum shield value on multiple allies.
- **Maxing W second.** Like Galio mid, W rank-up gives marginal cooldown reduction. Max E for the 4-second engage window at level 8.

## Advanced tip

R+Flash combo: cast Hero's Entrance on a teammate, then Flash during the windup animation to redirect your landing position by 400 units in any direction. The enemy team sees the R indicator on your ally and braces for the obvious knockup, then your Flashed landing point clips a target outside the visible R radius. Requires practice to time the Flash within the channel window — but a single R+Flash on the enemy carry, off-vision (the enemy cannot see you because you are inside fog of war), ends games before they start.
