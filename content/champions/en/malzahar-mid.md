---
title: "Malzahar Mid Build & Guide — Patch 16.9"
slug: "malzahar-mid"
language: "en"
patch: "16.9"
champion: "malzahar"
role: "mid"
last_updated: "2026-05-05"
description: "Malzahar mid lane guide for League of Legends Patch 16.9: starter kit, control mage build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Malzahar"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Control Mage / Voidling Caster"
  abilities:
    - key: "P"
      name: "Void Shift"
      description: "After avoiding damage and crowd control for ~25s, Malzahar enters a shroud that absorbs 90% of the next damage taken and ignores the next CC effect."
      dd_spell_id: "Malzahar_Passive"
    - key: "Q"
      name: "Call of the Void"
      description: "Two linear voids open and fire inward. Enemies hit take magic damage and are silenced — anti-caster setup tool."
      dd_spell_id: "MalzaharQ"
    - key: "W"
      name: "Void Swarm"
      description: "Spawns Voidling minions that attack whatever target Malzahar damages. Adds sustained DPS in skirmishes and pushes waves."
      dd_spell_id: "MalzaharW"
    - key: "E"
      name: "Malefic Visions"
      description: "Single-target damage-over-time. If the target dies with visions active, the spell jumps to the nearest enemy and refunds mana — main waveclear and sustain tool."
      dd_spell_id: "MalzaharE"
    - key: "R"
      name: "Nether Grasp"
      description: "Channeled suppression on a single champion for 2.5s, dealing % max-HP magic damage. Suppression ignores tenacity and most cleanses (only Quicksilver Sash removes it)."
      dd_spell_id: "MalzaharR"
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
    - { dd_id: "3118", name: "Malignance" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3135", name: "Void Staff" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
  situational_items:
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "vs HP-stacking front lines (Sion, Ornn, Cho'Gath, Dr. Mundo) — burn damage scales with the target's max HP"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC (Ahri charm, Lissandra R, Twisted Fate stun) — also blocks the first ability used on you"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs healing-stacking comps (Soraka mid, Vladimir, Dr. Mundo top) — applies Grievous Wounds on magic damage"
  base_combo: ["E", "Q", "R", "W"]
  win_condition: "Press Flash + R on a key carry (Yasuo, Vayne, ADC) in every team fight: suppression deletes them while your team cleans up. Push waves with E and farm safely."
  weakness: "Zero mobility — no dash, no blink, no escape. Long-range artillery mages out-poke you, and your ultimate is a 2.5s channel that any reliable CC will interrupt."
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
    primary_rationale: "Sorcery primary: Arcane Comet procs trivially off Q-into-E for free poke each trade. Manaflow Band keeps mana healthy for E spam, Transcendence stacks Ability Haste so R is up more often, Scorch chips down enemies under 50% HP."
    secondary_rationale: "Inspiration secondary: Biscuit Delivery covers your weak early HP/mana sustain (no innate sustain in kit), Cosmic Insight cuts Flash and item cooldowns so Flash + R combo is up more often."
    secondary_alternative: "Vs heavy poke lanes (Xerath, Vel'Koz, Ziggs), swap Inspiration to Resolve with Second Wind (regen after taking champion damage) and Overgrowth (HP scaling) to survive the lane phase."
matchup_draft:
  pick_into:
    - examples: ["zed", "yasuo", "yone", "akali"]
      archetype: "Mobile assassins relying on dashes"
      reason: "R is a single-target suppression that ignores tenacity and lasts 2.5s — their dashes do not break it. Once you press R on them, they die before they can output damage."
    - examples: ["jinx", "tristana", "kog-maw"]
      archetype: "Hyperscaling squishy ADCs"
      reason: "Late-game team fights are won by Flash + R on the carry. They have no built-in escape from suppression and cleanse-summoner is rare on ADCs in mid lane meta."
    - examples: ["karthus", "anivia", "veigar"]
      archetype: "Immobile mages without dashes"
      reason: "Q silence shuts down their cast windows entirely; once silenced they cannot answer your E DOT and they die in the R channel."
  counterpicks:
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "Long-range artillery mages"
      reason: "They poke from outside your 900-range Q. You have no dash to close the gap, so every wave bleeds your HP without a return option."
    - examples: ["annie", "lissandra"]
      archetype: "Reliable point-and-click CC"
      reason: "Their stun cancels your R channel before it finishes the suppression — without R landing, you have no kill pressure and your kit is weak."
    - examples: ["kassadin", "fizz"]
      archetype: "Cleanse-friendly mid laners"
      reason: "Both rush Quicksilver Sash or build it situationally — QSS is the only item that removes suppression, neutralizing your R entirely."
---

## Overview

Malzahar is an AP control mage (caster who locks down enemies with crowd control rather than running them down) built around one game-defining ability: **Nether Grasp (R)**, a 2.5-second suppression — a special CC that fully disables one target and ignores both tenacity and most cleanse effects. Only Quicksilver Sash removes it. The rest of his kit — silence on **Call of the Void (Q)**, sustained DOT and waveclear on **Malefic Visions (E)**, Voidling minions on **Void Swarm (W)** — exists to push waves safely so he can survive lane and reach level 6, where his suppression starts winning skirmishes single-handedly. **Void Shift (Passive)** is the safety blanket that keeps him alive: after ~25 seconds without taking damage or CC, the next hit is reduced by 90% and the next CC is ignored entirely.

His game plan in one sentence: shove the wave with **E**, stay safe with **Void Shift** stacked, then look for Flash + **R** picks on the highest-damage enemy carry the moment a team fight breaks out. He has zero mobility — no dash, no blink, no escape — so positioning and patience are the price of his suppression power.

## Recommended Build

**Starting items:** Doran's Ring + 2 Health Potions. The mana regen plus burst AP fits his E-spam waveclear; skip Corrupting Potion unless the lane is heavy auto-attack harass.

**Core items (in order):**

1. ![Malignance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3118.png) **Malignance** — primary item: Ability Haste lowers **R** cooldown, and the on-ult passive adds a magic resist shred zone under your suppression target.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration for the squishy targets you delete with **R**.
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — late-game AP multiplier; everything in your kit scales with AP, so this is your biggest single damage spike.
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — stasis active. Press it during your **R** channel if a diver tries to interrupt — your team cleans up while you are invulnerable.
5. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — buy as soon as any priority target picks up a magic resist item. Percent magic pen scales with their MR stack.
6. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — every damaging spell now slows the target. Combined with your Voidlings on top of an enemy, the slow stack forces them to walk back through your team rather than escaping. Optional last item if your team needs more crowd control.

**Situational items:**

- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — vs HP-stacking front lines (Sion, Ornn, Cho'Gath, Dr. Mundo). Burn damage spread over a few seconds (damage over time tied to the target's max HP) chews tanks down without giving up AP.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — vs heavy single-target magic CC (Ahri charm, Lissandra R, Twisted Fate stun). The shield also blocks the first ability used on you, helping a no-mobility champion survive.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — vs healing-stacking comps (Soraka mid, Vladimir, Dr. Mundo top). Applies Grievous Wounds on magic damage.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** is default. Ionian Boots of Lucidity is acceptable if you want **R** uptime even higher.

**Skill order:** Max **E** first (waveclear and sustain via the mana refund on E-killing-target), **Q** second (silence + Comet proc), **W** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Sorcery** with **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Inspiration** with **Biscuit Delivery** and **Cosmic Insight**, or swap to **Resolve** with **Second Wind** and **Overgrowth** if the enemy is a long-range poke mage.

## Key matchups

- **Yasuo / Yone:** Their Wind Wall (a vertical wall that blocks all incoming projectiles for ~4s) eats your **Q**. Save **Q** until they push it, hold **E** for waveclear at safe range. After level 6, you still beat them in all-in: their dash does NOT break suppression, so Flash + **R** kills them on cooldown.
- **Zed:** Pre-6 he kills you with **R** + **Q** combo if you mispositions. Buy ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** as your second completed item; press stasis the moment Zed's shadow lands on you.
- **Ahri:** Even matchup, decided by who lands their setup first. Her charm cancels your **R** channel; you must save **Void Shift** (don't take a single Q poke) so her charm bounces off the passive shroud. Then your **R** kills her.
- **Anivia:** Hard outscale matchup but you bully early. Her wall cancels your **R** if she places it between you and her. Push wave with **E**, freeze her under tower, deny her farm with the silence on **Q**.
- **Twisted Fate:** Roam priority race. He outscales you in mid-game macro because he picks side lanes with gold card. Push wave to deny **R** roam timings, ward river, and ping side lanes the moment his **R** lights up.

## Power spikes & win conditions

- **Level 1-3:** Take **E** first. With one point you can clear the caster minions in 1 cast and start poking the enemy through the wave with the DOT spreading on minion-deaths.
- **Level 6:** First **Nether Grasp** unlocks solo-kill pressure. With Flash up, any squishy mid laner positioned a step too far forward dies to **E + Q + Flash + R**.
- **![Malignance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3118.png) Malignance completion (~ minute 11-13):** Your **R** cooldown drops noticeably and the magic resist shred under the channel target makes solo kills reliable. Roam to side lanes whenever **R** is up.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minute 24-28):** Your suppression now does enough damage to delete an unprotected ADC by itself. Force objective fights and look for Flash + **R** picks on the carry every time R is up.

## Common mistakes

- **Wasting Void Shift.** Your passive (the shroud that absorbs 90% of the next hit and ignores CC) is your only real defense — taking a single Q from poke for free farm consumes it. Stay safe at full Void Shift charge before the enemy commits a gank.
- **Channeling R while interruptible.** Suppression is a 2.5-second channel: any reliable CC (Annie stun, Lissandra Q, Ahri charm) cancels it. Always Zhonya's during the channel if you see a diver coming, or press R only after the threat has used their interrupt.
- **R on the front line.** R is your one-shot tool against the back line. Wasting it on a tank with 3500 HP buys you nothing — the tank lives, your team has no answer to the enemy carry, and you have 110+ seconds before R is back.
- **Skipping Q for poke.** Your **Q** silence shuts down enemy mages mid-cast (Anivia ult cancel, Karthus channel cancel). Use it as anti-caster utility, not just damage.
- **Building only AP.** Without ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** you have no answer to divers. The stasis active is non-negotiable on a champion with zero mobility.

## Advanced tip

Practice the **Flash + R** combo on the enemy carry in team fights. Walk just outside their max-range threat, **Flash** straight onto them, immediately **R** before they can react. Suppression has zero cast time after Flash (instant), so the only counterplay is Quicksilver Sash (3140) or a teammate's interrupt landing within 2.5 seconds. With Cosmic Insight, this combo is up almost every team fight.
