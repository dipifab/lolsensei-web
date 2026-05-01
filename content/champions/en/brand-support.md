---
title: "Brand Support Build & Guide — Patch 16.9"
slug: "brand-support"
language: "en"
patch: "16.9"
champion: "brand"
role: "support"
last_updated: "2026-05-01"
description: "Brand support guide for League of Legends Patch 16.9: aggressive lane pressure, poke build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Brand"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Poke Support"
  abilities:
    - key: "P"
      name: "Blaze"
      description: "Brand's spells set targets ablaze (damage over 4s, stacks up to 3). At 3 stacks the blaze detonates as a small area-of-effect explosion that re-applies spell effects."
      dd_spell_id: "Brand_Passive"
    - key: "Q"
      name: "Sear"
      description: "Linear skillshot that deals magic damage. If the target is already ablaze, it stuns them — your kill setup with the AD carry."
      dd_spell_id: "BrandQ"
    - key: "W"
      name: "Pillar of Flame"
      description: "Delayed area-of-effect zone after a short tell. Targets that are ablaze take +25% damage. Highest poke damage in the kit."
      dd_spell_id: "BrandW"
    - key: "E"
      name: "Conflagration"
      description: "Targeted blast that bounces to nearby enemies. If the primary target is ablaze, the spread doubles — applies blaze to two enemies in one cast."
      dd_spell_id: "BrandE"
    - key: "R"
      name: "Pyroclasm"
      description: "Long-range fireball that bounces up to 5 times between enemies, prioritising ablaze targets. Wins teamfights when the enemy ADC and support stand together."
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
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "vs hard CC threats on your ADC (Leona stun chain, Morgana Q, Pyke hook)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "vs heavy AOE engage comps (Malphite, Yasuo, Wukong, Kennen)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs heal-stacking comps (Soraka, Yuumi peel, enemy team with Aatrox or Vladimir)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap when any priority target finishes their first Magic Resist item"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "Pressure 2v2 with W poke before level 3, then look for E + Q stun setups for your ADC. Post-6 R bounces between enemy ADC and support standing together turn the lane into a snowball."
  weakness: "No shield, no heal, no peel for the ADC. If the enemy support engages first, Brand cannot protect his carry — only kill the engager faster than the engager kills the carry."
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
    primary_rationale: "Sorcery primary: Arcane Comet auto-procs on every W or E hit, adding free poke on every cooldown. Manaflow Band keeps mana up for 2v2 W spam, Transcendence pushes ability haste past 40%, Scorch finishes low-HP enemies under tower."
    secondary_rationale: "Inspiration secondary: Biscuit Delivery solves Brand's mana hunger the first 6 levels and Cosmic Insight gives extra Flash uptime — Flash is your only way to dodge an engage, the kit has no innate escape."
    secondary_alternative: "Vs heavy hook supports (Blitzcrank, Thresh, Pyke) where you need to survive the first hook to win the lane, swap Inspiration to Resolve with Bone Plating (reduces back-to-back damage from the hook combo) and Revitalize (boosts your only defensive option, Mikael's shield)."
matchup_draft:
  pick_into:
    - examples: ["yuumi", "soraka", "janna"]
      archetype: "Squishy enchanters with low HP"
      reason: "Brand's W out-pokes their healing range and his E + Q rotation kills them before their carry can peel. Yuumi specifically loses her body to a single full rotation; Soraka cannot heal through ablaze ticks."
    - examples: ["zilean", "karma", "lulu"]
      archetype: "Utility supports with no engage"
      reason: "Brand wins the laning phase by force — they cannot punish W spam because their kit relies on shielding the carry, not trading. After level 6 their CC is single-target while your R hits both of them at once."
    - examples: ["caitlyn", "ezreal", "varus"]
      archetype: "Long-range ADCs with no escape"
      reason: "These ADCs sit at max range to last-hit; one E onto their support spreads blaze to them, your Q lands the stun, and the AD carry behind you takes the kill before they can flash."
  counterpicks:
    - examples: ["leona", "nautilus", "rell"]
      archetype: "Hard-engage tank supports"
      reason: "They engage from outside Brand's W range with a flash-stun chain. He has no peel for himself or his carry — once Leona stuns, the kit has no answer except to die or burn Flash + Zhonya's together."
    - examples: ["rakan", "alistar"]
      archetype: "Mobile engage supports"
      reason: "Rakan dashes through your skillshots and pulls your ADC out of position; Alistar headbutt-pulverize chains skip past the Q stun. Brand cannot react fast enough to either."
    - examples: ["pantheon", "blitzcrank"]
      archetype: "All-in supports who match Brand's burst"
      reason: "Pantheon Q and Blitzcrank hook both have similar effective ranges to Brand's Q. Whoever lands their setup first wins the trade, and both have built-in survival (Aegis block, hook burst-and-leave) Brand lacks."
---

## Overview

Brand support is the most aggressive caster support in the game. He brings none of the things a traditional support brings — no shield, no heal, no peel for the carry ("peel" = abilities that protect an ally by pushing or stunning attackers off them), no engage tool that ends in a tank survival cooldown. What he brings instead is a flat **kill threat from minute 1**. Every spell sets the enemy on fire (passive **Blaze**), and once an enemy is on fire your **Q (Sear)** stops being a damage spell and becomes a stun. The lane plan is: poke them down with **W (Pillar of Flame)** until two ablaze stacks are sticking, **E** to spread blaze to both targets, and **Q** the stun for your ADC to walk up and finish the kill.

The cost is fragility. Brand has no escape, no innate sustain, and no tools to protect his AD carry. If the enemy support engages first — Leona stun, Nautilus hook, Rakan dash — your only real answer is *kill the engager faster than they kill your carry*, which works only when you are ahead. The pick is binary: either you stomp the lane and snowball (a snowball is an early lead that grows: kill → gold → item → more kills), or you die early and feed two enemies. There is very little middle ground, which is why this guide leans hard on the level-2 spike and the **R** teamfight bounce as the two moments you must execute correctly.

## Recommended Build

**Starting items:** ![Spellthief's Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3850.png) **Spellthief's Edge** (the AP support starter that quests into Bloodsong) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**.

**Core items (in order):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — the support quest reward from Spellthief's Edge. Mandatory: it gives the gold income that lets you buy real items, plus an AP-on-takedown stack that snowballs your damage.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — Brand's defining damage item. Percent-HP burn that stacks on top of your blaze ticks, punishing tanks and stacked-HP teams.
3. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — ability haste boots, prioritised over Sorcerer's Shoes here because as support you cast more abilities and farm fewer minions. More R uptime per teamfight.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — extra burst plus a passive that ignores even more magic resist on enemies below the HP threshold. Lines up with R bounces hunting the low-HP target.

**Situational items:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — into hard CC threats on your ADC (Leona stun chain, Morgana Q, Pyke hook). Cleansing the CC on your carry is the closest thing Brand has to peel.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — into heavy AOE engage comps (Malphite R, Yasuo wombo — a "wombo" is when multiple ultimates chain together to catch your whole team at once, Kennen R). The active shield is a teamfight save button.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — into heal-stacking comps (Soraka, Yuumi peel, enemy team with Aatrox or Vladimir). Grievous Wounds passive cuts their healing in half.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — the moment any priority target finishes their first magic resist item. Stops a single 800-gold component from soft-countering your build.

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** is default. Swap to ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** if the enemy team has 3+ hard CC threats with magic damage.

**Skill order:** Max **W** first (highest base damage and primary 2v2 poke), **Q** second (more stun damage), **E** last. Take a point in **R** at levels 6, 11, and 16.

**Runes:** Primary **Sorcery** with **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Inspiration** with **Biscuit Delivery** and **Cosmic Insight**.

## Key matchups

- **Leona / Nautilus / Rell:** Hard-engage tank supports. Stand outside their flash-engage range until you have ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing**. Pre-place **W** on yourself when they walk up, ready to **Q** the stun the moment they engage.
- **Blitzcrank / Thresh / Pyke:** Hookers. Stand behind a minion at all times — their hook is a single-target skillshot that the wave breaks. Punish missed hooks with **W → Q** for free poke; never auto-attack out of cover when they have hook up.
- **Yuumi:** Free lane. Yuumi has no body when she is not attached. Time **W** to land the moment she detaches to last-hit or proc her empowered auto. One detached Yuumi caught by **W → Q** is a kill before her carry can shield her.
- **Soraka:** Out-pressure her by stacking poke until her mana runs dry. Soraka heals her ADC at 5% of her own HP cost — every blaze tick on the ADC undoes 30 seconds of her healing.
- **Lulu:** Polymorph and shield make 1v1 bursts unreliable. Poke from max **W** range, never commit to the stun-into-all-in (an "all-in" is total commitment to the kill — no exit, you go until someone dies) unless your jungle is on the way; if Lulu polymorphs your ADC mid-trade, the trade is lost.

## Power spikes & win conditions

- **Level 2 (W + Q):** First spike. With one point in **W** plus the **Q** you started with, the **W → Q** stun combo is online. This window is where 90% of Brand support kills happen — push the wave to hit level 2 first, then land the combo on the enemy support.
- **Level 6 (R unlocked):** First **Pyroclasm** is up. If the enemy bot lane stands together (almost always — supports stack behind their ADC), a single **R** does roughly 50% of a squishy's HP per bounce.
- **Bloodsong + Liandry's Torment online (~ minute 14-16):** Damage flips. From here you out-damage every enchanter support and threaten the kill on a fed ADC. Force grouped fights at drake.
- **R + Shadowflame online (~ minute 22-26):** Two grouped enemies eat a full bounce sequence and die. This is when Brand wins teamfights from the back — pick angles where the enemy carry and support are within bounce distance of each other.

## Common mistakes

- **Auto-attacking the wave for last-hits.** As support, you do not take last-hits — the gold from your AD carry's farm is what funds the lane. Stand back, poke the enemy with **W**, and only auto-attack a minion if your carry is dead or recalling.
- **Throwing Q for naked poke.** **Q** without ablaze is a slow projectile that misses on side-stepping enemies. Lead with **W** on the ground first, or **E** onto a minion that will spread blaze — then Q for the stun.
- **Standing in front of your ADC.** Brand has no peel for himself or anyone else. If you stand in front, the engage hits you, you die, your ADC has no support. Stand at the same depth or one step behind, with a minion between you and the hook.
- **Ulting one enemy.** **R** bounces between targets, prioritising ablaze ones, but with massive damage falloff per hop on a single target. Save **R** for fights where two or three enemies are within bounce range — never use it as a finisher on a fleeing solo target.
- **Pre-placing W where the enemy is now.** Pillar of Flame has a delay before it lands. Cast it where the enemy *will be* in 0.6 seconds — typically the spot they have to walk through to reach the next minion or escape your stun. Casting on their current position is a guaranteed miss against any half-attentive opponent.

## Advanced tip

Practice the **double-spread setup**. When the enemy support and ADC stand close together (typical when they are pushing the wave or when the support is screening the ADC), do this in order: **W** between them → both get blaze stack 1. **E** on the enemy support → blaze stack 2 on the support, spreads to the ADC for stack 2 on the ADC. Now both targets are at 2 stacks — you do not need to land **Q** to set up the stun, you need to land it as the *finisher*. Q the support: stack 3 lands, the support is stunned, the unstable detonation hits the ADC and brings them to stack 3 too. **R** now bounces between two stunned targets at maximum blaze, both die, and you trade nothing back. This is the rotation that turns a "decent Brand support" into a Brand who wins lane every game.
