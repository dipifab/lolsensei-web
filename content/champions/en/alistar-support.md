---
title: "Alistar Support Build & Guide — Patch 16.9"
slug: "alistar-support"
language: "en"
patch: "16.9"
champion: "alistar"
role: "support"
last_updated: "2026-04-29"
description: "Alistar support guide for League of Legends Patch 16.9: starter kit, tank-engage build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Alistar"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Tank / Vanguard"
  abilities:
    - key: "P"
      name: "Triumphant Roar"
      description: "Alistar charges his roar when he stuns or displaces an enemy champion, or when nearby enemies (minions, jungle monsters, or enemy champions) die. Once fully charged, his next roar heals himself and nearby allied champions."
      dd_spell_id: "Alistar_Passive"
    - key: "Q"
      name: "Pulverize"
      description: "Smashes the ground around Alistar, knocking up all nearby enemies for 1 second. Short range — you must already be next to the target."
      dd_spell_id: "Pulverize"
    - key: "W"
      name: "Headbutt"
      description: "Alistar dashes to a target enemy, deals damage and knocks them backward in a line. The signature engage tool: chain it instantly into Q for the W-Q combo (knock them back into your team, then knock them up)."
      dd_spell_id: "Headbutt"
    - key: "E"
      name: "Trample"
      description: "Stomps the ground around himself for 5 seconds, ignoring minion collision and dealing damage. Each pulse that hits a champion adds a stack — at 5 stacks, his next basic attack on a champion stuns them and deals bonus damage."
      dd_spell_id: "AlistarE"
    - key: "R"
      name: "Unbreakable Will"
      description: "Cleanses all crowd control on Alistar instantly and gives him heavy damage reduction (physical + magic) for the duration. Use it before engaging into a CC-heavy team, not after the fight has already started."
      dd_spell_id: "FerociousHowl"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "3117", name: "Mobility Boots" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3109", name: "Knight's Vow" }
    - { dd_id: "3877", name: "Bloodsong" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs heavy magic damage or chain crowd-control teams (Leona, Ashe arrow R, Maokai R) — swap Mobility Boots before teamfights start"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "vs auto-attack heavy enemy bot lane (Caitlyn, Draven, Tristana) — swap Mobility Boots when their lane harass dominates"
    - dd_id: "3110"
      name: "Frozen Heart"
      against: "vs attack-speed-stacking carries (Tristana, Kog'Maw, Master Yi) — slows their auto-attack speed in a wide aura"
    - dd_id: "3211"
      name: "Kaenic Rookern"
      against: "vs AP burst comps (double mage like Syndra mid + Brand support) — passive magic shield that regenerates out of combat"
    - dd_id: "4643"
      name: "Vigilant Wardstone"
      against: "late-game (after minute 25) when your six slots are full and you want extra wards plus a small stat boost"
  base_combo: ["W", "Q", "AA", "E"]
  win_condition: "Land the W-Q combo (Headbutt back, instant Pulverize knock-up) on a priority squishy carry to start a fight your team converts. Pop R before engaging if they have hard CC, so the chain crowd control bounces off you."
  weakness: "Short engage range — you have to be on top of the target to land Q. Mana-hungry early levels and zero ranged poke; if the enemy bot lane plays back, you give up the lane and must roam to stay relevant."
matchup_draft:
  pick_into:
    - examples: ["soraka", "sona", "yuumi", "janna"]
      archetype: "Squishy enchanters with no hard CC of their own"
      reason: "They have no tools to stop a flash + W-Q combo. Once you land the knock-up under them, they die before their ADC can peel — Sona and Yuumi especially have no escape."
    - examples: ["caitlyn", "jhin", "senna"]
      archetype: "Immobile ADCs with no dash"
      reason: "W has 650 range and is point-and-click: ADCs without a dash or blink eat the full combo whenever they step up to last-hit. They can't outrun your engage once you commit."
    - examples: ["zyra", "brand", "vel-koz"]
      archetype: "Mage supports with skillshot poke and no escape"
      reason: "Their poke fishes for cooldowns, but a Q-stacked Trample channel into a flash-Q on top of them deletes them: their range advantage doesn't matter once you cross the gap."
  counterpicks:
    - examples: ["lulu", "milio", "renata"]
      archetype: "Disengage enchanters with peel actives"
      reason: "Lulu polymorph cancels your W mid-dash, Milio R cleanses your knock-up at range, Renata E pulls the carry out of your combo. Your single engage gets answered for free."
    - examples: ["xerath", "karma", "morgana"]
      archetype: "Long-range pokers with shields or binding"
      reason: "They chip your HP for free at 900-plus range while you have no answer. Morgana Black Shield blocks your Q knock-up entirely — you flash in for nothing."
    - examples: ["nautilus", "leona", "rell"]
      archetype: "Other tank engage supports with longer-range hard CC"
      reason: "Their first cast lands before you can dash into Q range: Nautilus Q hook, Leona E dash-stun, Rell W charge all out-range your W. You eat the engage, they don't eat yours."
---

## Overview

Alistar is a **vanguard support** (a tank-class support whose job is to open fights, not heal allies) — he engages by physically jumping onto the enemy carry and locking them in place with crowd control. His kit is built around one signature combo: **Headbutt (W)** dashes to a target and knocks them backward, and immediately recasting **Pulverize (Q)** under your own feet knocks them up. The full chain (W into Q) displaces the enemy back **into your team** and then suspends them in the air for a full second — long enough for your ADC to walk up and unload free damage. **Trample (E)** grants him short **ghosted** movement (he passes through minions and other units without colliding) and a stun **proc** (a built-up effect that fires once you hit a condition) on his next basic attack at 5 stacks. **Unbreakable Will (R)** cleanses any crowd control on him and gives heavy damage reduction, which is what lets a 1-HP Alistar walk through a Morgana root and still finish the kill.

Game plan: in lane, **bait** (lure the enemy into committing) by standing slightly forward; the moment their ADC steps up to last-hit a minion, **Headbutt** them back, **Pulverize** them up, walk through them with **Trample** stacking, and your ADC converts. Mid-game, **roam** (leave bot lane to help mid or jungle) on **Mobility Boots** — Alistar is one of the fastest roamers in the game thanks to E's ghosted movement and his summoner spell flexibility. Late-game, sit on the front line, eat enemy CC with **R**, and engage on the carry whose death ends the fight.

## Recommended Build

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (the unified support starter) plus 2 Health Potions. Don't last-hit minions in lane: leave the gold to your ADC, World Atlas pays your gold separately through its quest.

**Core items (in order):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — starter. It evolves automatically as you accumulate quest progress through ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** and ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**, ending in the endgame upgrade you choose.
2. ![Mobility Boots](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3117.png) **Mobility Boots** — out-of-combat movement speed. Lets you roam aggressively to mid-river and ward deeper into enemy jungle without falling behind in lane. Swap to defensive boots before the first major teamfight.
3. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — active that shields all nearby allies for a few seconds. Pop it the instant you commit to an engage so your team soaks the enemy's first **burst** (the high damage they dump in the first 1-2 seconds of a fight).
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — bonds you to your **ADC** (Attack Damage Carry — the auto-attacking bot lane teammate, your team's main late-game damage dealer): a portion of the damage they take is redirected to you, and you heal them in return. Always pick the carry whose life you most need to extend.
5. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — the engage-focused endgame upgrade of your support item (World Atlas auto-transforms into one of these once you finish the quest). Adds bonus damage to your next basic attack right after you apply **crowd-control** (any stun, slow, root, or knockback) — fits perfectly after a Q knock-up, an R cleanse re-engage, or a Trample stun proc.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — boots that grant magic resist and reduce the duration of crowd control on you. Pick them into magic-damage or chain-CC teams (Leona, Ashe arrow R, Maokai R). Swap your Mobility Boots before fights start, not after.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots that give armor and reduce damage from basic attacks. Pick them into auto-attack-heavy enemy bot lanes (Caitlyn, Draven, Tristana) when their lane **harass** (poke and chip damage) hurts you more than late-game CC will.
- ![Frozen Heart](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3110.png) **Frozen Heart** — slows nearby enemies' auto-attack speed in a wide aura. Pick it into attack-speed-stacking carries (Tristana, Kog'Maw, Master Yi) where your job becomes **peeling** (protecting your own carry from enemies trying to kill them) instead of engaging.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3211.png) **Kaenic Rookern** — passive magic shield that regenerates while out of combat. Pick it into AP-burst comps (a double-mage setup like Syndra mid + Brand support) — the shield eats a full ult and lets you survive the engage you started.
- ![Vigilant Wardstone](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4643.png) **Vigilant Wardstone** — late-game sixth-item slot (after minute 25). More wards on the map, longer ward range, small stat boost.

**Boots:** Default ![Mobility Boots](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3117.png) **Mobility Boots** to roam aggressively in lane phase. Swap into one of the defensive boots above **before the first big teamfight** (around minute 18-22), because Mobility Boots lose their out-of-combat speed bonus the moment combat starts.

**Skill order:** Max **E** (Trample) first — it's your in-lane damage and the stun proc that gives you a second crowd control after Q. Max **W** second — lower cooldown means more engage windows. Max **Q** last (it's mostly a finisher; the rank-up barely changes the knock-up, only the damage). Take **R** at levels 6, 11, 16.

**Runes:** Primary **Resolve** (the defensive rune tree — durability) with **Aftershock** (free armor and magic resist for a few seconds when you crowd-control someone, fires on every Q knock-up), **Font of Life** (your CC marks the target; allies who attack it heal a bit), **Conditioning** vs lanes that win late or **Bone Plating** vs lanes that try to burst you down early, and **Unflinching** (extra **tenacity**, the stat that shortens crowd control on you, when you use a summoner spell). Secondary **Inspiration** (utility tree) with **Hextech Flashtraption** (a backup short-range Flash on a long cooldown — gold for surprise W-Q combos) and **Cosmic Insight** (lower cooldowns on summoner spells and item actives). **Stat shards** (the three small stat boosts at the bottom of the rune page): Adaptive Force / Adaptive Force / Health (Adaptive Force = bonus AD or AP based on what your kit uses).

## Key matchups

- **Leona:** Mirror **engage** (you both want to start the fight). She has longer-range CC than you (Zenith Blade dash-stun, Solar Flare R), so don't try to engage first while she has cooldowns up. Wait for her to throw E, then your 10-second window opens — flash-Q her ADC while she has no follow-up.
- **Pyke:** Skill matchup — no clear edge on paper, decided by who plays better. He out-pokes you with Q and out-roams you on **stealth** (he becomes invisible while passing through brush). Keep vision deep in the river and force him to fight you in lane where R doesn't reset the kill.
- **Lulu:** Hard counter into your **all-in** (full kill commit). Her polymorph cancels your W mid-dash. Don't engage when her polymorph is up; track its cooldown and force fights only in the 13-second window where it's down.
- **Soraka:** Pure **sustain enchanter** (a healing-focused support that wins by keeping her ADC alive, not by starting fights) with no engage tool of her own. You can flash-Q on top of her any time her Flash is down — she dies in your combo before her ADC can react.
- **Senna:** Long-range **poke** matchup (chip damage at distance to wear you down). She bullies your HP under tower. Don't fight back, take the bad lane, roam mid or invade on Mobility Boots — Alistar's lane loses but his macro game wins.

## Power spikes & win conditions

- **Level 2 (Q + W):** First spike. The full W-Q combo unlocks the moment you have both abilities. An over-extending enemy ADC (one who has pushed too far past their first **wave** — the row of incoming minions) is a free kill if you engage with **Flash** still up.
- **Level 6 (R unlocks):** Engage potential explodes. **Unbreakable Will** turns you from a one-shot **diver** (a champion that jumps deep into the enemy backline and dies right after) into a tank that walks through hard CC and re-engages. You can flash-Q a Morgana, eat her root, R out of it, and Q again on her ADC.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari completion (~ minute 14-16):** First teamfight item online. Your engage now drops a free team shield. Group with your team for **Drake** (the dragon objective in the bottom river — kills give your team permanent stat buffs) or **Voidgrubs** (small monsters in the top river — the team that kills them earns bonus damage to enemy structures).
- **![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) Bloodsong endgame (~ minute 24-30):** Your post-CC auto-attack starts dealing real damage. Now W → Q → AA isn't just a setup for your ADC — it can shave 25-30% HP off a **squishy** (a low-defense champion like an ADC or a mage) by itself.

## Common mistakes

- **W-Q in the wrong direction.** Headbutt knocks the target away from you, in the line you're standing on. If you W from below, you knock them up the lane (away from your team). Always W from the **flank** (the side angle) so your knockback shoves the carry into your team's damage, not into theirs.
- **Engaging with no follow-up.** Alistar without his ADC and team behind him is a tank with no damage. If your ADC is back at base or your jungler is on the other side of the map, hold your W. A solo engage at 4v5 is just feeding your **R** cooldown to the enemy team.
- **Burning R proactively to escape.** **Unbreakable Will** is an offensive tool, not an escape button: it gives damage reduction and CC cleanse, but no movement speed. Using it to flee with no team around just delays your death by 5 seconds. Save R for the engage you're about to commit, not for the disengage you should never have needed.
- **Trample-stacking on minions.** E stacks **only** on hits to enemy champions, not minions. Standing on an empty wave waiting for your stun proc to come up does nothing. The proc only matters when you can chain it into your team's damage.
- **Not using passive mid-fight.** **Triumphant Roar** charges from CC you apply (Q, R, E proc) and from **nearby enemy deaths** — minions, jungle monsters, or enemy champions. In a teamfight where minions and jungle creeps die around you, you can stack the heal multiple times. Tap the passive button between actions: a free 50-100 HP heal on you and your nearby ADC swings the fight.

## Advanced tip

The **flash-W-Q one-shot**. Flash forward and immediately cast **W** on a priority target the same frame: the dash starts from your new flashed position, not where the enemy expected your hitbox to be. Then queue **Q** while still in W's dash animation — the Pulverize fires the instant W's knockback ends, with zero gap between the two crowd controls. Done correctly, the target sees nothing on screen except a one-second knock-up and dies before they can react. The drill is muscle memory (the automatic finger reflex): bind your spells so Flash + W + Q are within reach of the same hand, and practice the rhythm in **Practice Tool** until you can fire all three inside half a second. This is the mechanic that turns Alistar from "tank that helps" into "tank that ends fights".
