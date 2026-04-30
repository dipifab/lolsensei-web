---
title: "Thresh Support Build & Guide — Patch 16.9"
slug: "thresh-support"
language: "en"
patch: "16.9"
champion: "thresh"
role: "support"
last_updated: "2026-04-30"
description: "Thresh support guide for League of Legends Patch 16.9: starter kit, tank-catcher build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Thresh"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Tank / Catcher"
  abilities:
    - key: "P"
      name: "Damnation"
      description: "When an enemy (minion, jungle monster, or champion) dies near Thresh, it can drop a soul. Walk over it to permanently gain a small amount of Armor and Ability Power. No cap."
      dd_spell_id: "Thresh_Passive"
    - key: "Q"
      name: "Death Sentence"
      description: "Long linear hook (skillshot — must be aimed and dodged). Stuns the first enemy hit and pulls them. Recast to dash to the target."
      dd_spell_id: "ThreshQ"
    - key: "W"
      name: "Dark Passage"
      description: "Throws a lantern that shields the first allied champion who touches it. Allies can click the lantern to dash straight to Thresh."
      dd_spell_id: "ThreshW"
    - key: "E"
      name: "Flay"
      description: "Passive: basic attacks deal extra magic damage that grows the longer between hits. Active: sweeps the chain, slowing and shoving enemies in the swing direction."
      dd_spell_id: "ThreshE"
    - key: "R"
      name: "The Box"
      description: "A ring of spectral walls around Thresh. The first wall an enemy crosses breaks, dealing magic damage and slowing them; the rest only slow at half value."
      dd_spell_id: "ThreshRPenta"
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3109", name: "Knight's Vow" }
    - { dd_id: "3877", name: "Bloodsong" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "swap from Mercury's vs auto-attack-heavy bot lanes (Caitlyn, Draven, Tristana) when their early harass hurts more than late CC chains"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "with a strong AD carry (Caitlyn, Vayne, Aphelios): R triggers a slow zone and bonus damage on the carry's next attack"
  base_combo: ["Q", "AA", "E", "R"]
  win_condition: "Land Death Sentence on a priority squishy (carry, mid) and chain into Flay knockback so your team converts the catch. With The Box dropped, the catch has nowhere to walk that doesn't cost HP."
  weakness: "A missed Q leaves you with no engage tool for around 10 seconds. Slow base movement and zero dashes mean you can't reposition once your hook is gone — flank routes punish you hard."
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
      - { dd_id: 8306, name: "Hextech Flashtraption", icon_path: "perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primary (the tank tree — default for engage supports who jump in first): Aftershock gives 2.5s armor + MR on every Q hook when focused. Font of Life heals allies hitting your stunned target, Bone Plating tanks the first 3 hits, Revitalize boosts W shield and Locket."
    secondary_rationale: "Inspiration secondary: Hextech Flashtraption is a backup short-range Flash on a long cooldown — perfect for surprise Q hooks out of fog when summoner Flash is down. Cosmic Insight cuts summoner and item-active cooldowns so Flash and Locket of the Iron Solari fire more often."
    secondary_alternative: "If the enemy team has multiple low-resistance squishies and few hard engages to fear, swap Inspiration → Precision with Triumph (gold and HP refund on takedown) and Coup de Grace (+8% damage to enemies under 40% HP) so your team finishes pickoffs faster."
matchup_draft:
  pick_into:
    - examples: ["soraka", "sona", "yuumi"]
      archetype: "Immobile enchanter supports without engage"
      reason: "Their entire kit is healing or shielding — useless if they get hooked first. A clean Q at lantern range stuns them out of position; your team converts before any heal lands."
    - examples: ["senna", "caitlyn", "jhin"]
      archetype: "Long-range ADCs with no dash"
      reason: "They sit at maximum range to poke and have no built-in escape. A flank Q from a side brush at minute 8+ is a free pickoff — they cannot reposition once the hook leaves your hand."
    - examples: ["malphite", "alistar"]
      archetype: "Telegraphed Flash-engage tanks"
      reason: "When they Flash-R or W-Q in, the landing spot is predictable: pre-aim Q on the path and they walk into the stun. Your R then boxes their backup as they follow up."
  counterpicks:
    - examples: ["lulu", "milio", "janna"]
      archetype: "Hard-peel enchanters with disengage"
      reason: "Their cast removes your engage: Lulu polymorphs you mid-Q windup, Janna Q knocks you up before the hook lands, Milio cleanses CC off your hooked target. Without a landed Q, Thresh has no fight."
    - examples: ["rakan", "nautilus", "leona"]
      archetype: "Engage supports that out-trade in melee"
      reason: "Rakan dashes onto you before your Q lands; Nautilus and Leona beat you in close-range trades — their CC chains have shorter cooldowns and punish every Q you miss."
    - examples: ["karma", "lux", "senna"]
      archetype: "Long-range poke supports with disengage"
      reason: "They poke you out of hook range before you can reach them. With no HP you cannot engage; you lose lane priority (the freedom to leave lane safely) without ever throwing Q."
---

## Overview

Thresh is an **engage support** (the one who opens the fight) and a **catcher** — a champion whose job is to **pickoff** (eliminate an isolated enemy before a fight starts) by landing a long-range hook. His **Death Sentence (Q)** is the centerpiece of the kit: a slow, telegraphed (= clearly visible in advance) skillshot that, when it lands, decides the fight. Around the hook, **Flay (E)** repositions enemies (slow + knockback in the swing direction), **Dark Passage (W)** lets an ally dash to him, and **The Box (R)** boxes a target into walls of magic damage. Thresh builds tank items only (HP, armor, magic resist — no damage stats): his value is enabling the rest of the team, not personally killing.

Game plan: place wards in the **river** (the corridor between the two halves of the map) and the brushes around bot lane, pick an isolated target (an **over-extending** carry pushed too far forward, or an enemy mid laner roaming for a gank), land **Q**, follow with **E**, drop **R** and the target can't walk out without losing more HP.

## Recommended Build

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (the unified support starter) plus 2 Health Potions. World Atlas evolves automatically as you accumulate quest gold — through ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** and ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds** — into the endgame upgrade you choose.

**Core items (in order):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — starter. Don't last-hit minions, let your ADC have them.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — magic resist plus **tenacity** (a stat that shortens the duration of crowd control on you). Default boot for an engage support: a one-second stun that would normally lock you out of your follow-up Q hook becomes a half-second one.
3. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — active that shields all nearby allies for a few seconds. Use it right before an engage to soak the enemy team's first **burst** (the high damage they dump in the first 1-2 seconds of a fight).
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — bonds you to your **ADC** (Attack Damage Carry — the auto-attacking bot lane teammate, your team's main late-game damage dealer): a portion of the damage they take is redirected to you, and you heal them in return. Pick the carry whose life you most want to extend.
5. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — the engage-focused endgame upgrade of your support item (World Atlas auto-transforms into one of these once you've completed its quest). Carries a **Spellblade** passive: after you cast any ability — Q hook, W lantern, E flay, R box — your next basic attack deals bonus physical damage on-hit, and if the target is an enemy champion they take increased damage from all sources for 4 seconds. In practice this means you should weave an auto-attack into every ability cast in a fight, not save it for after the CC lands.

**Situational items:**

- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots that give armor and reduce damage from basic attacks. Swap into Mercury's Treads when the enemy bot lane is auto-attack heavy (Caitlyn, Draven, Tristana) and their early **harass** (poke and chip damage in lane) hurts you more than the enemy team's late-game CC chain will.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — pair this with a strong AD carry. When you ult (R), Zeke's drops a slow zone and gives the bonded carry bonus damage on their next attack. Big combo synergy.

**Boots:** Default ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** for the tenacity — a tank engage support gets focused with CC the moment they commit, and a half-second stun is the difference between landing your follow-up E knockback and watching your team lose the fight you opened. Swap to ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** only when the enemy bot lane's auto-attack harass hurts more than the enemy team's late-game CC will.

**Skill order:** Max **E** (Flay) first — slow, knockback, and the auto-attack passive damage are your primary lane trade tool. Max **Q** second — lower cooldown means more pickoff windows. Max **W** last. Take **R** at levels 6, 11, 16.

**Runes:** Primary **Resolve** (the defensive tree — durability) with **Aftershock** (free armor and magic resist for a few seconds when you crowd-control someone, fires on every Q hook), **Font of Life** (your CC marks the target; allies who attack it heal a bit), **Bone Plating** (negates damage from the next three hits — strong default vs early all-in lanes; swap to **Conditioning** for late-game armor and magic resist scaling on poke matchups), and **Revitalize** (boosts your W lantern shield and your Locket active). Secondary **Inspiration** (utility) with **Hextech Flashtraption** (a backup short-range Flash on a long cooldown — priceless for surprise hooks) and **Cosmic Insight** (lower cooldowns on summoner spells and item actives). Stat shards: Adaptive Force / Adaptive Force / Health Scaling.

## Key matchups

- **Leona:** Mirror matchup (you're both engage supports). Whoever lands their CC first wins the **trade** (the brief HP exchange). Save your **Q** for after she throws her Zenith Blade (the dash she uses to engage) — once it's on cooldown you have a 10-second pickoff window.
- **Nautilus:** Same playstyle as you with shorter range. He out-trades you at melee, you out-range him with **Q**. Stand at hook range, never at his auto-attack range.
- **Soraka:** Pure **sustain enchanter** (a healing-focused support that wins by keeping her ADC alive, not by starting fights) with no engage tool of her own. You win by hooking her during her healing animation. If she stands behind her ADC, hook the ADC instead — your **R** boxes both of them.
- **Lulu:** She **peels** (protects her carry from your engage with shields and a polymorph). Don't hook the ADC first when Lulu has her cooldowns up — hook **Lulu** to remove the peel, then your team converts on the carry.
- **Pyke:** Skill matchup — no clear edge on paper, decided by who plays better. He also has a long-range engage tool. Keep an eye on his **stealth** (he becomes invisible while passing through terrain): don't get caught warding alone.

## Power spikes & win conditions

- **Level 2 (Q + E):** First spike. With **Q** to engage and **E** to keep them locked, you can **all-in** (commit to a full kill attempt) on an over-extending enemy who has pushed past their first **wave** (the row of incoming minions).
- **Level 6 (R unlocks):** Pickoff potential explodes. A landed **Q** in the river or in a side brush followed by **R** behind the target is a guaranteed kill at this point of the game.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari completion (~ minute 14-16):** First teamfight item ready. Your engage now comes with a free team shield — group with your team for **Drake** (the dragon objective in the bottom river — kills give your team permanent stat buffs) or **Voidgrubs** (small monsters in the top river — the team that kills them gets bonus damage to enemy structures).
- **![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) Bloodsong endgame (~ minute 24-30):** The Spellblade proc plus the 4-second damage-amp on champions turns your "ability → auto" rotation into a real DPS pattern. Suddenly Q → auto-attack → E isn't just a setup for your ADC — it's a kill on a **squishy** (a low-defense champion like an ADC or a mage) on its own.

## Common mistakes

- **Throwing Q at full HP targets behind their minions.** The hook collides with minions. Wait until the enemy steps forward to **last-hit** (deliver the final blow on a minion to claim its gold), or until your wave is thin (only a couple of minions left between you and them). A naked **Q** fishing for the dream hook just wastes mana and leaves you without engage for 10 seconds.
- **Flaying enemies away from your team.** Flay's direction depends on your position relative to the target — moving forward swings them backward (toward you), moving back swings them forward (away from you). Position so your **E** shoves them **into** your team, not out of it.
- **Throwing the lantern with no communication.** If your ADC isn't watching for it, the lantern wastes its cooldown. Ping it when you drop it. Better yet, drop it preemptively in a scary fog area so the ADC has a guaranteed escape route.
- **Engaging without vision.** A blind hook into the **fog of war** (the unrevealed areas of the map) often catches a tank instead of a carry, or worse, walks you into the enemy jungler. Use your **trinket** (the free vision item every champion gets) and **Control Wards** (the pink wards bought from shop, which detect invisible units and disable enemy wards) before you commit.
- **Saving R for the "perfect" moment.** **The Box** is a denial tool (something that takes away enemy options), not just a damage spell. Drop it as a wall behind a fleeing carry to slow them, or in front of an engaging Malphite to break his ult charge. Don't hoard it.

## Advanced tip

Lantern-Hook setup. Throw **Q** first, and the moment it leaves your hand drop **W** lantern at maximum range in the same direction. If the **Q** lands, your ADC clicks the lantern and arrives next to the hooked target the instant the stun fires — full follow-up damage without having to walk forward at all (zero **gap-closing**, the act of running across distance to reach the enemy). This turns a hook from a setup into a guaranteed kill. The drill is muscle memory (the automatic finger reflex): practice Q-W in the same half-second so the lantern is in flight before your ADC even reads what's happening.
