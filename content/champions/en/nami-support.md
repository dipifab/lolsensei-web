---
title: "Nami Support Build & Guide — Patch 16.9"
slug: "nami-support"
language: "en"
patch: "16.9"
champion: "nami"
role: "support"
last_updated: "2026-04-29"
description: "Nami support guide for League of Legends Patch 16.9: enchanter-poke build path, bot lane matchups, power spikes, common mistakes, and a final advanced bubble tip."
quick_learn:
  champion_dd_id: "Nami"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Enchanter / Poke"
  abilities:
    - key: "P"
      name: "Surging Tides"
      description: "When Nami's spells hit an allied champion, that ally gains a short burst of bonus Move Speed. Stacks with R."
      dd_spell_id: "Nami_Passive"
    - key: "Q"
      name: "Aqua Prison"
      description: "Targeted skillshot bubble with a small delay. Stuns and damages enemies in the impact area. Long cooldown — use as setup, not poke."
      dd_spell_id: "NamiQ"
    - key: "W"
      name: "Ebb and Flow"
      description: "A stream of water that bounces up to three times between allies (heal) and enemies (damage). Each unit hit only once."
      dd_spell_id: "NamiW"
    - key: "E"
      name: "Tidecaller's Blessing"
      description: "Buff an ally's next 3 attacks or spells: each hit slows the target and adds bonus magic damage. Combo this with the AD carry's basic attacks for poke."
      dd_spell_id: "NamiE"
    - key: "R"
      name: "Tidal Wave"
      description: "A long, wide wave that knocks up, slows, and damages enemies it passes through. Allies hit gain double the Surging Tides Move Speed buff."
      dd_spell_id: "NamiR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "W" }
    - { level: 9, key: "E" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "3222", name: "Mikael's Blessing" }
  situational_items:
    - dd_id: "3877"
      name: "Bloodsong"
      against: "when your bot lane plays for poke and roams (Caitlyn, Ezreal) — Bloodsong rewards spell hits with extra burst on aggressive games"
    - dd_id: "6616"
      name: "Staff of Flowing Water"
      against: "into AP carries who scale with Ability Haste (Hwei, AP Ezreal) — your heal procs the buff, giving them bonus Ability Power"
    - dd_id: "3107"
      name: "Redemption"
      against: "when your team needs more group healing in long fights or when you contest objectives like Drake and Baron"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "vs heavy AOE burst (area-of-effect damage like Yone R, Kennen R) — instant team-wide shield that saves the back line"
  base_combo: ["E", "AA", "Q", "W", "R"]
  win_condition: "Out-poke the lane with E plus AD carry auto-attacks, land a single Q to convert HP lead into a kill, and use R as a multi-target engage or a save when the enemy commits."
  weakness: "Q is a slow, high-cooldown skillshot: if you miss it the lane has no hard CC for 12 seconds. With no dash and a fragile body, hook supports and assassins delete you on sight."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8214
      name: "Summon Aery"
      icon_path: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8233, name: "Absolute Focus", icon_path: "perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["jhin", "caitlyn", "ashe", "varus"]
      archetype: "Long-range AD carries with strong basic attacks"
      reason: "E plus Surging Tides plus Ardent Censer turn an immobile marksman into a poke machine: every empowered auto deals bonus damage and slows, letting them stay in lane longer than the enemy."
    - examples: ["soraka", "yuumi", "milio"]
      archetype: "Pure sustain enchanters without hard CC"
      reason: "Their lane is heal-only. A single landed Q stun bypasses the heal entirely and snowballs the trade. Your poke also out-damages their slow regen."
    - examples: ["xerath", "ziggs"]
      archetype: "Stationary artillery mages"
      reason: "They poke from a fixed line and have no dash. Ebb and Flow heals through their poke while Q catches them when they step up to clear the wave."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "Hook supports with long range"
      reason: "Nami has no dash and a fragile body: a hook landed before level 6 deletes her or the AD carry before R is online. Their hook range out-distances her Q windup."
    - examples: ["leona", "rell", "nautilus"]
      archetype: "Hard-engage tank supports"
      reason: "They jump on top of Nami before she can finish casting Q (the bubble has a 0.5s delay). Once stunned, no R, no peel, no escape — she dies in the chain CC."
    - examples: ["lulu", "renata-glasc"]
      archetype: "Enchanters with hard CC peel"
      reason: "Lulu's W polymorph and Renata's W berserk cancel Nami's R mid-cast and lock her down through the heal. Both also out-trade her in level-2 all-ins thanks to point-and-click utility."
---

## Overview

Nami is an enchanter (a healer-buffer support — heals and shields allies, buffs their damage) with a strong poke pattern in lane (poke = chipping enemy HP from range without committing to a full fight). Her **Surging Tides** passive gives Move Speed to any ally hit by her spells, **Aqua Prison (Q)** is a single-target stun bubble (the only hard CC — crowd control, an effect that disables the target — in the kit), **Ebb and Flow (W)** is a bouncing heal-and-damage stream, **Tidecaller's Blessing (E)** empowers an ally's next 3 basic attacks or spells with bonus damage and a slow, and **Tidal Wave (R)** is a long, wide knock-up wave used as engage, follow-up, or disengage (an ability that breaks an enemy engage attempt — when they jump in, you knock them back).

Her game plan is simple: trade in lane with **E** on the AD carry (the bot-lane marksman who scales with items) auto-attacks, hold **Q** for a confirmed setup, sustain through poke with **W**, and look for a 2v2 kill when the enemy AD carry burns Flash. After level 6, every wave that the enemy bot lane pushes too far becomes an **R**-into-**Q**-into-**W** combo. Late game, she scales as a peel (protecting your carry from whoever attacks them) and poke hybrid: never engage first (start the fight), always answer the enemy's commit with R.

## Recommended Build

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (the support starter that quests into more gold income) plus 2 Health Potions. Skip damage starters: Nami scales off team utility, not solo kills.

**Core items (in order):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — completes into Bounty of Worlds, then upgrades into a support legendary later. Auto-stacks gold and ward charges every time you damage or assist.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — Ability Haste (cooldown reduction) lets you spam **E** and **W** on shorter cooldowns; default boots for enchanters.
3. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — heal-and-shield-on-spell-cast passive that ramps up in extended fights. Pairs perfectly with **W** bouncing between allies.
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — empowers any ally you heal or shield with bonus on-hit damage and Attack Speed. Best support item next to a basic-attack-heavy AD carry like Caitlyn or Jhin.
5. ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — cleanses (removes) hard CC off an ally. Mandatory if the enemy has a single-target stun, charm, or hook on your carry.

**Situational items:**

- ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — alternative final upgrade of World Atlas when you play for poke and pickoffs (eliminating an isolated enemy outside a teamfight). Adds burst damage on spell hits, replacing Bounty of Worlds in aggressive games.
- ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** — into AP carries who scale with Ability Haste (Hwei, AP Ezreal). Your heal procs (triggers) the buff, giving them bonus Ability Power for the next attacks.
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — when fights drag on (Drake, Baron, long teamfights). Big delayed area-of-effect heal you can drop from across the map.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — vs heavy AOE burst (high damage concentrated in 1-2 seconds, like Yone R or Kennen R). Active gives an instant team-wide shield.

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** is the default. Plated Steelcaps replace them into a heavy basic-attack comp (Master Yi, Tristana); Mercury's Treads if the enemy team has 3+ hard-CC threats aimed at you.

**Skill order:** Max **E** first (the buff duration and bonus damage scale per level — your main poke and trade tool), **W** second (more bounces and bigger heal), **Q** last (cooldown only drops slightly, the value is in landing it). Take **R** at levels 6, 11, 16. Start **E** at level 1 to win the first auto-attack trade with the AD carry.

**Runes:** Primary **Sorcery** with **Summon Aery** (sticks small damage and shield value to your spells — perfect for Nami's constant E poke), **Manaflow Band** (mana sustain so you can cast every cooldown), **Absolute Focus** (bonus AP while above 70% HP, easy on Nami because you stay back-line), **Scorch** (extra burn damage on the first spell every 10 seconds, for level-1-6 poke). Secondary **Inspiration** with **Biscuit Delivery** (free mana and HP biscuits for the first 6 minutes) and **Cosmic Insight** (more Ability Haste and shorter Summoner Spell cooldowns). Stat shards: Ability Haste, Adaptive Force, Health Scaling.

## Key matchups

- **Caitlyn / Jhin (allied):** Best partners. Use **E** on their basic attacks and they out-poke any opposing bot lane. Hold **Q** for the moment they trap or 4th-shot — guaranteed stun setup.
- **Blitzcrank / Thresh (enemy):** Hook supports. Stand behind minions whenever you cross the river. The hook lands once and you or the AD carry are dead — you have no dash to escape. Build ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** earlier than usual.
- **Leona / Nautilus (enemy):** Hard-engage tanks. Save **Q** as a defensive stun — when they engage on the AD carry, bubble the engager mid-jump to interrupt their follow-up. Never burn **Q** for poke into these matchups.
- **Soraka (enemy):** Sustain mirror. You out-trade her with **E** plus auto-attacks. Force a level-2 all-in (full commitment to a kill, no disengage option): **E** the AD carry, **W** during the trade, **Q** when she steps up to heal — all three land together.
- **Lulu (enemy):** Hardest enchanter matchup. Her **W** polymorph cancels your **R** mid-cast and her **E** shield negates your poke. Play for level 6: **R**-into-**Q** combo from fog of war (the unwarded brush near the bot lane river) bypasses her peel timing.

## Power spikes & win conditions

- **Level 2:** With **E** at 1 and **W** at 2, you can shield-poke one short trade (a brief exchange of damage in lane, not a full all-in). Throw **E** on the AD carry as they walk up to last-hit (kill a minion for gold), then **W** through them to chain the poke.
- **Level 6:** First **Tidal Wave** unlocks. Any 2v2 the enemy starts is now winnable — they engage, you **R** through them, **Q** lands on the slowed target, **W** finishes. Hard-flip the wave for objectives after the kill.
- **Moonstone Renewer + Ardent Censer (~ minute 14-18):** Team-fight spike. Your AD carry's effective HP roughly doubles when you heal-spam through a fight, and every empowered auto adds extra on-hit damage from the censer.
- **Three legendaries online (~ minute 25):** With ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** added, you cleanse the one CC ability that would otherwise delete your carry. From here, every objective fight is a 5v4 if the enemy commits hard CC.

## Common mistakes

- **Throwing Q for poke.** **Aqua Prison** has a 12-second cooldown at rank 1 and a slow projectile speed. Missed Q means no hard CC for the next trade or jungler gank. Always hold **Q** as a setup tool: after a slow lands or after you flash in.
- **Casting E on yourself in lane.** **Tidecaller's Blessing** technically targets you too, but Nami's auto-attacks deal almost no damage. Default to E on the AD carry; only self-buff if your carry is recalled and you need to clear a wave alone.
- **Standing in front to land R.** Nami has no dash and 525 HP at level 1. Cast **R** from second-line, behind the AD carry, aimed through your team — you do not need to be in the front to angle it.
- **Wasting W on full-HP allies.** **Ebb and Flow** heals based on bounce target need: a bounce on an ally at 100% HP returns less to the next one. Save **W** for after a poke trade, not before.
- **Engaging first.** Nami is a counter-engage and follow-up support, not a pick comp piece. If you R-flash in solo, your team rotates in 2 seconds late and you die mid-channel without follow-up.

## Advanced tip

Practice the **R-Q combo across walls**. Cast **Tidal Wave (R)** so it travels through a wall (it passes terrain), and as the wave knocks up the target on the other side, immediately cast **Aqua Prison (Q)** on the same spot. The knock-up adds 0.5 seconds of guaranteed hit time, and your **Q** lands during it — the enemy cannot dodge a stun on top of a knock-up. This single combo turns Nami into a one-button pickoff (eliminating an isolated enemy) on any squishy (low-defense champion like an AD carry or mage) caught alone in fog of war near Drake or Baron pit. Cost: your **R** for 100+ seconds, so only commit when the kill is locked in.
