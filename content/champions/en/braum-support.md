---
title: "Braum Support Build & Guide — Patch 16.9"
slug: "braum-support"
language: "en"
patch: "16.9"
champion: "braum"
role: "support"
last_updated: "2026-04-29"
description: "Braum support guide for League of Legends Patch 16.9: starter kit, tank-peel build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Braum"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Warden"
  abilities:
    - key: "P"
      name: "Concussive Blows"
      description: "Braum's basic attacks apply a stack of Concussive Blows. Once the first stack is on a target, ally basic attacks also stack it. At 4 stacks the target is stunned and takes magic damage. Braum's Q applies a stack from range."
      dd_spell_id: "Braum_Passive"
    - key: "Q"
      name: "Winter's Bite"
      description: "Long-range linear skillshot that slows and deals magic damage. Crucially, it applies one stack of Concussive Blows from range — the setup tool that lets you reach the 4-stack stun without first walking into auto-attack range."
      dd_spell_id: "BraumQ"
    - key: "W"
      name: "Stand Behind Me"
      description: "Braum leaps to a target allied champion or minion. On arrival both Braum and the ally gain Armor and Magic Resist for a few seconds. The signature peel tool: jump in front of your ADC to body-block incoming damage."
      dd_spell_id: "BraumW"
    - key: "E"
      name: "Unbreakable"
      description: "Braum raises his shield in a chosen direction for several seconds: it intercepts every projectile coming from that side, fully negates the first basic attack, and reduces all following attack damage from that direction."
      dd_spell_id: "BraumE"
    - key: "R"
      name: "Glacial Fissure"
      description: "Braum slams the ground, knocking up enemies next to him and along a line in front of him. A frozen fissure remains on the line and slows enemies who walk through it. Long cooldown — the team's main initiation or peel button."
      dd_spell_id: "BraumRWrapper"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "E" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "E" }
    - { level: 11, key: "R" }
    - { level: 12, key: "E" }
    - { level: 13, key: "E" }
    - { level: 14, key: "W" }
    - { level: 15, key: "W" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3876", name: "Solstice Sleigh" }
    - { dd_id: "3109", name: "Knight's Vow" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "swap from Mercury's vs auto-attack-heavy bot lanes (Caitlyn, Draven, Tristana) when their early harass hurts more than late CC"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "vs comps where your ADC is the main carry and stays close to you (Aphelios, Jinx) — the slow on R triggers next to your bonded ally"
    - dd_id: "2504"
      name: "Kaenic Rookern"
      against: "vs AP burst comps (double mage like Syndra mid + Brand support) — the passive magic shield eats one ult and lets you keep peeling"
  base_combo: ["Q", "AA", "AA", "R"]
  win_condition: "Land Q on a priority carry, walk in for an auto-attack so the 4-stack stun pops, then peel your ADC with W jumps and E shield wall through the whole fight. R when the enemy team groups for the knock-up zone."
  weakness: "Slow, immobile (no dash, no blink): hard CC at range cuts you off from your ADC. Q is a skillshot — miss it and you have zero kill threat in lane, and a wasted R locks you out of the next teamfight."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8306, name: "Hextech Flashtraption", icon_path: "perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "jhin", "senna"]
      archetype: "Immobile ADCs with no dash"
      reason: "Q has 1000 range and applies a Concussive Blows stack from afar. Against an ADC with no escape, one Q + one auto-attack from your ADC + your follow-up auto = stun, and they have no way to break the chain."
    - examples: ["soraka", "sona", "yuumi"]
      archetype: "Squishy enchanters with no hard CC"
      reason: "They can't stop your walk-up. Once Q lands they have no peel for their ADC, and your E blocks every healing-cancel skillshot they would throw to save them."
    - examples: ["draven", "lucian"]
      archetype: "Aggressive auto-attack ADCs that step up to trade"
      reason: "Their kit forces them to walk into Q range to throw axes or dash-AA. Each step in is a free Concussive Blows stack — they either back off and lose lane prio or eat the 4-stack stun."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "nautilus"]
      archetype: "Hook supports with point-and-click pull or stun"
      reason: "A landed hook pulls Braum out of W jump range to his ADC. While he's getting chunked at the back, the enemy ADC freely deletes your now-unprotected carry."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "Long-range mage supports that out-poke from beyond Q"
      reason: "They sit at 1100+ range and chip your HP for free. Braum has no ranged answer past his Q, and E only helps if he's already close — they win the lane by attrition."
    - examples: ["ashe", "varus"]
      archetype: "ADCs with self-peel from a built-in slow"
      reason: "Their auto-attack slow keeps Braum at arm's length. He can't reach W range to body-block, so his peel kit is half-disabled and his team's frontline collapses faster."
---

## Overview

Braum is a **warden support** (a tank-class support whose job is to protect his own ADC, not to start fights) — built to peel enemies off his carry, not to dive theirs. The kit revolves around one threat: **Concussive Blows**, the passive that stuns any target hit by 4 basic attacks from him or allies. The trick: **Winter's Bite (Q)** applies a stack from 1000 range, so Braum Qs first, walks up, and one of his autos plus one of his ADC's fires the stun on the enemy ADC. **Stand Behind Me (W)** jumps to any ally and gives both armor and magic resist on landing — the **peel** (protecting your carry from enemies trying to kill them) tool that makes him unique. **Unbreakable (E)** is a directional shield that **body-blocks** every projectile from the chosen direction (ADC auto-attacks, Caitlyn R, Ezreal R, Ashe R). **Glacial Fissure (R)** is the AOE line knock-up: long cooldown, used as initiation or as panic peel when their **diver** (a champion that jumps deep into the backline) lands on your carry.

Game plan: in lane, **poke** (chip damage from distance) with Q whenever the enemy ADC steps up to last-hit, then walk in for the auto-attack that pops the stun — your ADC unloads in the 1-second window. After level 6, **roam** (leave bot lane to help mid or jungle) with R to set up picks: your **lead** (early advantage) comes from converting Q-stack stuns into objectives, not solo kills. Late-game sit one step in front of your ADC, jump back with W the instant they get engaged on, and pop E in the line of any incoming **skillshot** (an ability that has to be aimed) — Braum is the only support who can refuse a Caitlyn ult mid-channel.

## Recommended Build

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (the unified support starter) plus 2 Health Potions. Don't last-hit minions in lane: leave that gold for your ADC, World Atlas pays your gold separately through its quest progress.

**Core items (in order):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — starter. It evolves automatically as you accumulate quest progress through ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** and ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**, ending in the endgame upgrade you choose.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — magic resist plus **tenacity** (a stat that shortens the duration of crowd control on you). Default boot for a peel tank: shorter stuns mean you reach W jump range to your ADC before they're already dead.
3. ![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) **Solstice Sleigh** — the peel-focused endgame upgrade your support item turns into. Whenever you CC a champion (Q slow, passive stun, R knock-up) it slows nearby enemies more and gives you and a nearby ally a movement-speed burst — exactly what you need to chase a low-HP target or kite back to your carry.
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — bonds you to your **ADC** (Attack Damage Carry — the auto-attacking bot lane teammate, your team's main late-game damage dealer): a portion of the damage they take is redirected to you, and you heal them in return. Always pick the carry whose life you most need to extend.
5. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — active that shields all nearby allies for a few seconds. Pop it the instant the enemy commits their engage so your team soaks their first **burst** (the high damage they dump in the first 1-2 seconds of a fight).

**Situational items:**

- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots that give armor and reduce damage from basic attacks. Swap into Mercury's Treads when the enemy bot lane is auto-attack heavy (Caitlyn, Draven, Tristana) and their lane **harass** (poke and chip damage to wear you down) hurts you more than the enemy team's CC will later.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — bond it to your ADC. When you crowd-control an enemy (Q slow, R knock-up) the bonded ally's next basic attack deals bonus magic damage in an area — perfect when your carry stays close to you (Aphelios, Jinx) and you Q the front line to set up their first auto.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — passive magic shield that regenerates while out of combat. Pick it into AP-burst comps (a double-mage setup like Syndra mid + Brand support) — the shield eats a full ult and lets you keep peeling instead of dying first.

**Boots:** Default ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** for the tenacity — a 2-second Morgana root becomes a 1.2-second one, leaving you the window to W back to your ADC. Swap to ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** before completing them only if the enemy bot lane is auto-attack heavy and hurting you more than the enemy team's late-game CC will.

**Skill order:** Max **Q** (Winter's Bite) first — it's your only ranged damage, your stack-applier, and the cooldown drops from 8 to 6 seconds at rank 5 (more poke, more lane pressure). Max **E** (Unbreakable) second — longer duration shield wall makes teamfight peel cleaner. Max **W** last (the jump cooldown shrinks but the resist values matter more on early ranks, and you rarely run out of W targets). Take **R** at levels 6, 11, 16.

**Runes:** Primary **Resolve** (defensive tree — durability) with **Aftershock** (free armor and MR for a few seconds when you CC someone, fires on every passive stun and on R), **Font of Life** (your CC marks the target; allies attacking it heal a bit), **Conditioning** vs late-scaling lanes or **Bone Plating** vs early-burst lanes, and **Unflinching** (extra **tenacity**, the stat that shortens CC on you, when you use a summoner spell). Secondary **Inspiration** (utility tree) with **Hextech Flashtraption** (backup short-range Flash on long cooldown — surprise R angles) and **Cosmic Insight** (lower cooldowns on summoner spells and Locket active). **Stat shards** (three small boosts at the bottom of the rune page): Health / Health / Health — Braum scales with raw HP, and early durability lets you walk forward to apply Q stacks.

## Key matchups

- **Leona:** **Engage** matchup (she wants to start the fight) versus your **peel** (you want to stop hers). She has longer-range CC than you (Zenith Blade dash-stun, Solar Flare R), so don't try to body-block early — sit one step behind your ADC and W away the instant her Zenith Blade flies. Once her E is on cooldown you have a 10-second window to walk up and Q-stack her ADC for free.
- **Pyke:** Skill matchup — no clear edge on paper, decided by who plays better. He out-pokes you with Q and out-roams you on **stealth** (he becomes invisible while passing through brush). Keep vision deep in the river bushes, force fights in lane where his R reset doesn't matter, and E his R hook to body-block the pull on your ADC.
- **Lulu:** Hard counter into your **all-in** (full kill commit). Her polymorph cancels your auto-attack mid-chain — you can no longer pop the 4-stack stun. Don't commit when her polymorph is up; track its cooldown (around 13 seconds at rank 1) and force trades only in the window where it's down.
- **Soraka:** Pure **sustain enchanter** (a healing-focused support that wins by keeping her ADC alive, not by starting fights) with no engage tool of her own. You out-trade her: she has no way to stop your Q + walk-up, and her healing is roughly half your stun damage. Force short trades whenever her Q is on cooldown.
- **Senna:** Long-range **poke** matchup (chip damage at distance to wear you down). She bullies your HP under tower with Q-through-minion damage. Stand at the back of the wave so her Q heals from your minions but doesn't hit you, and trade only when your jungler is bottom side — Senna with no dash dies to a single Q-stun chain.

## Power spikes & win conditions

- **Level 2 (Q + W):** First spike. The full **Q + walk-up auto-attack + ADC auto-attack** chain unlocks the moment you have W as your second ability, because W lets you reposition out of return damage. An over-extending enemy ADC (one who has pushed too far past their first **wave** — the row of incoming minions) loses 30% HP to one stack chain.
- **Level 6 (R unlocks):** Engage and peel both jump a tier. **Glacial Fissure** is a long line knock-up your ADC converts into a kill; alternatively it's the panic-peel button when their Zed jumps onto your carry. You can Flash-R at angles their team doesn't expect — flash forward and instantly cast R is the surprise pick tool.
- **![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) Solstice Sleigh completion (~ minute 12-14):** First teamfight item online. The movement-speed burst on CC lets you chase a low-HP enemy past minions or kite back to a faltering carry. Group with your team for **Drake** (the dragon objective in the bottom river — kills give your team permanent stat buffs) or **Voidgrubs** (small monsters in the top river — the team that kills them earns bonus damage to enemy structures).
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari endgame (~ minute 22-26):** With Locket and full E uptime your team can survive a wombo combo (a chained team-fight engage). Your job becomes E-walling the enemy carry's damage cone while your team kills theirs first.

## Common mistakes

- **Throwing Q with no walk-up.** A Q-slow on its own is not a kill threat — the enemy strolls out of range and you've wasted 8 seconds of cooldown. Q is the **setup** (the move that prepares the kill, not the kill itself); the moment it lands, walk in for the auto-attack. Without the auto-attack, the Concussive Blows stacks fall off after a few seconds and the lane reset comes for nothing.
- **W'ing onto your ADC after they're already dead.** W has a 650-range jump on a 12-second cooldown at rank 1. If you wait until your carry is at 20 HP to jump, the resist bonus arrives too late. The rule: W to your ADC the **same instant** you see the enemy commit (Leona Q flies, Blitz hook in the air, Zed shadow jumps in), not after they hit zero.
- **Standing in front for free.** Braum's E protects only the direction you face. If you're behind your ADC, it shields nothing. The default position is one step in front of and one step **toward** the enemy team's expected damage source — face the Caitlyn, not your jungler.
- **Burning R on a single target.** **Glacial Fissure** is an AOE line knock-up with a 100-130 second cooldown. Using it to ult one minion-laner who's mostly dead anyway is a free **throw** (a giveaway of advantage) — you've just locked yourself out of the next teamfight. R only when 2+ enemies are in the line, or when your carry will die without the panic peel.
- **Forgetting passive stacks reset.** Concussive Blows stacks **fall off** after a few seconds if no new stack is applied, and once a target is stunned the same target cannot receive new stacks for several more seconds. Spamming auto-attacks into a freshly-stunned ADC adds nothing — walk forward to the next priority target instead, or back off and reset the W resist timer.

## Advanced tip

The **flash-R** angle. Braum's R has a 1250-range line in front of him; the cast windup is short enough to Flash forward, instantly press R, and have the line spawn from your **new** flashed position — catching a back-line carry who thought they were safe at 1500 range. Bind Flash and R within reach of the same hand and drill the timing in **Practice Tool** until both fire inside a fifth of a second. Save it for a fight your team has already grouped for: a flash-R catching enemy ADC plus support converts into a clean ace, while the same R on one isolated mid-laner is a long cooldown spent on a skirmish.
