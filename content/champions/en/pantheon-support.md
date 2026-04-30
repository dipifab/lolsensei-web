---
title: "Pantheon Support Build & Guide — Patch 16.9"
slug: "pantheon-support"
language: "en"
patch: "16.9"
champion: "pantheon"
role: "support"
last_updated: "2026-04-29"
description: "Pantheon support guide for League of Legends Patch 16.9: starter kit, bruiser-engage build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Pantheon"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Mortal Will"
      description: "Every fifth spell or basic attack empowers Pantheon's next ability for bonus effect. Watch the small icon above the bar — when it lights up, the next Q, W, or E gets a major upgrade."
      dd_spell_id: "Pantheon_Passive"
    - key: "Q"
      name: "Comet Spear"
      description: "Tap = short melee thrust that refunds part of the cooldown. Hold = long ranged spear throw that pokes from distance. Hold version is your only ranged tool — use it to chip enemies in lane."
      dd_spell_id: "PantheonQ"
    - key: "W"
      name: "Shield Vault"
      description: "Targeted dash onto an enemy champion that stuns them briefly and deals damage based on their max HP. Your main engage tool: gap-close, lock the target, and let your ADC follow up."
      dd_spell_id: "PantheonW"
    - key: "E"
      name: "Aegis Assault"
      description: "Channel a shield in a chosen direction: blocks all non-tower damage from that side and stabs repeatedly. Slam at the end deals extra damage. Use to absorb the enemy ADC's burst while your team kills them."
      dd_spell_id: "PantheonE"
    - key: "R"
      name: "Grand Starfall"
      description: "Long-range global jump: Pantheon leaps into the sky and crashes down on a target zone after a delay. Use it to roam across the map or join a fight from anywhere — the indicator on the ground warns enemies."
      dd_spell_id: "PantheonR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "E" }
    - { level: 9, key: "W" }
    - { level: 10, key: "E" }
    - { level: 11, key: "R" }
    - { level: 12, key: "E" }
    - { level: 13, key: "E" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3109", name: "Knight's Vow" }
    - { dd_id: "3877", name: "Bloodsong" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "swap from Mercury's vs auto-attack-heavy bot lanes (Caitlyn, Draven, Tristana) when basic-attack harass hurts more than enemy crowd control"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "vs comps where you reliably ult on top of an ally carry (Yasuo, Yone, Master Yi) — your ult adds bonus magic damage to their attacks"
    - dd_id: "2504"
      name: "Kaenic Rookern"
      against: "vs AP burst comps (double mage like Syndra mid + Brand support) — passive magic shield that regenerates while out of combat"
    - dd_id: "3876"
      name: "Solstice Sleigh"
      against: "alternate engage endgame for double-engage comps: chained CC on the same target shields you and the next ally and adds movement speed"
  base_combo: ["W", "AA", "Q", "E", "R"]
  win_condition: "Use the global ulti Grand Starfall to swing skirmishes anywhere on the map: ult onto a fight, W-stun the priority target on landing, then chain Q tap and Aegis Assault while your ADC kills them. Roam early and often."
  weakness: "No ranged engage other than W's 600-unit dash. Falls off hard once enemy carries get armor — Pantheon is a bruiser support, not a real tank, so a 4v5 if you ult-roam and lose the trade collapses your team."
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
      - { dd_id: 8242, name: "Unflinching", icon_path: "perk-images/Styles/Sorcery/Unflinching/Unflinching.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8306, name: "Hextech Flashtraption", icon_path: "perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health"
matchup_draft:
  pick_into:
    - examples: ["soraka", "sona", "yuumi", "janna"]
      archetype: "Squishy enchanters with no hard crowd control of their own"
      reason: "They cannot interrupt W's dash. Once you W onto their ADC and chain a Q tap, the carry dies in the stun window before the enchanter can shield or peel. Yuumi can't even untether quickly enough to survive."
    - examples: ["caitlyn", "jhin", "senna"]
      archetype: "Immobile ADCs with no dash"
      reason: "W gap-closes 600 units onto a target: ADCs without a blink eat the full W stun and Q follow-up whenever they step up to last-hit. They cannot outrun the engage once you commit."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "Stationary mage supports with no escape"
      reason: "They have to stand still to cast their long skillshots — that's exactly when W lands clean. Aegis Assault even blocks their poke between engages, denying their lane plan entirely."
  counterpicks:
    - examples: ["morgana", "milio", "lulu"]
      archetype: "Hard-CC blockers and disengage enchanters"
      reason: "Black Shield from Morgana eats the W stun outright — you commit forward for nothing. Milio's R cleanses your stun chain at long range. Lulu's polymorph cancels your dash mid-cast. Your single committed engage gets answered for free."
    - examples: ["thresh", "blitzcrank", "pyke"]
      archetype: "Hook supports who pull you out of position"
      reason: "Their hooks reach further than W (Thresh Q ~1100 vs W 600). You eat the pull, get focused alone in their team, and your ADC is left exposed because you used your only engage trying to walk forward."
    - examples: ["leona", "nautilus", "rell"]
      archetype: "Tank engage supports who out-CC you"
      reason: "They chain more crowd control than Pantheon (Leona has E root plus Q stun plus R; Pantheon only has W stun). In a mirror engage they win because their lock-down lasts longer and they stay alive after — Pantheon does not."
---

## Overview

Pantheon is normally played top, but in the bot lane he works as an **aggressive bruiser support** (a fighter-class support that opens fights with damage, not pure tankiness). His kit is built around two-button engages: **Shield Vault (W)** is a targeted dash that stuns and deals damage scaling with the enemy's max HP, and **Comet Spear (Q)** has two modes — tap for a short melee strike that returns most of the cooldown, or hold for a long ranged spear throw that pokes from distance. **Aegis Assault (E)** is a directional shield that blocks every non-tower hit from the front while Pantheon stabs repeatedly. **Grand Starfall (R)** is a **global ulti** (an ultimate ability that travels across the map): he leaps into the sky and crashes down on any chosen location after a delay, marked on the ground with a warning circle. His passive **Mortal Will** counts every spell or basic attack — every fifth one empowers his next ability for a bonus effect (bigger Q damage, multi-hit W follow-up, or extra resistances on E).

Game plan in lane: poke with held-Q from max range while the enemy ADC last-hits, then commit a W-engage (an **engage** is the act of starting the fight by going in first) when their **Flash** is down. Mid-game, the global R is the win condition — leave bot lane and ult onto **skirmishes** (small 2v2 or 3v3 fights, not full teamfights) mid or top, where the surprise factor of a global jump lets you flip fights you weren't even close to. Late-game, peel for your ADC — **peel** means protecting your own carry by knocking enemies off them — by using E to body-block the enemy **diver** (a champion who jumps onto your back line to kill the carry) and W to **interrupt** (cancel the cast of) any ability you can land on.

## Recommended Build

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (the unified support starter) plus 2 Health Potions. Don't last-hit minions: leave the gold to your ADC. World Atlas pays your gold separately through its quest progression.

**Core items (in order):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — starter. Evolves automatically as you accumulate quest progress through ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** and ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**, ending in the endgame upgrade you choose.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — magic resist plus **tenacity** (a stat that shortens the duration of crowd control on you). A shorter stun on you means you get to land your W after the enemy support tries to interrupt.
3. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — armor, magic resist, and an active that shields all nearby allies. Pop it the instant you W in so your team soaks the enemy's first **burst** (high damage in the first 1-2 seconds).
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — bonds you to your **ADC** (Attack Damage Carry — the auto-attacking bot lane teammate): a portion of the damage they take redirects to you, and you heal them back. Critical for a hybrid-tank support like Pantheon who doesn't have natural healing.
5. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — the engage-focused endgame upgrade of your support item. Carries a **Spellblade** passive: after any ability cast, your next basic attack deals bonus damage and the target takes amplified damage for 4 seconds. Play pattern: "ability → AA → ability → AA". Pantheon spams Q taps so the proc resets constantly.

**Situational items:**

- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — armor boots that reduce basic-attack damage. Swap from Mercury's when the enemy bot lane is auto-attack heavy (Caitlyn, Draven, Tristana) and their **harass** (poke and chip damage) hurts more than late crowd control will.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — bonds you to a chosen ally; when you ult, that ally gains bonus magic damage on their attacks. Pick into comps with a melee carry (Yasuo, Yone, Master Yi) you reliably ult on top of.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — passive magic shield that regenerates out of combat. Pick into AP burst comps (double mage like Syndra mid plus Brand support) — the shield eats one full ult.
- ![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) **Solstice Sleigh** — alternate engage-focused support endgame. Whenever you crowd-control the same target twice (W stun then Q tap counts), you and the next ally get a small shield and bonus movement speed. Pick this over Bloodsong when your team has another engage source and you'd rather chain crowd controls than amplify damage.

**Boots:** Default ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** for the tenacity. Swap to ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** only against AA-heavy bot lanes.

**Skill order:** Max **W** (Shield Vault) first — lower cooldown means more engage windows, and W is your hardest crowd control. Max **E** (Aegis Assault) second for longer block duration. Max **Q** last (extra damage matters less than the lower W cooldown). Take **R** at levels 6, 11, 16.

**Runes:** Primary **Resolve** (the defensive rune tree — durability) with **Aftershock** (free armor and magic resist when you crowd-control someone, fires on every W stun), **Font of Life** (your CC marks the target; allies who attack it heal), **Bone Plating** (damage reduction on the first three hits taken — stacks with Aegis Assault's block), **Unflinching** (extra **tenacity** when you use a summoner spell). Secondary **Inspiration** with **Hextech Flashtraption** (backup Flash on a long cooldown, lets you Flash-W for surprise engages) and **Cosmic Insight** (lower cooldowns on summoners and item actives). **Stat shards**: Adaptive Force / Adaptive Force / Health.

Alternative keystone: **Hail of Blades** in the **Precision** tree if you want a heavier early all-in pattern (three rapid auto-attacks after engaging), but Aftershock is the safer default since it scales into the late-game peeler role.

## Key matchups

- **Leona:** Mirror **engage** matchup. Both of you commit forward with one button. Try to W onto her right after she E-dashes — her cooldowns are longer than yours, so a clean answer engage usually trades 1-for-1 and your ADC walks away with the kill.
- **Lulu:** Hard counter into your **all-in** (full kill commit). Polymorph cancels W mid-dash and turns it into nothing. Force fights only when her W is on cooldown (track its 18-second timer) or wait for your jungler so the engage doesn't depend on a single button.
- **Caitlyn:** Long-range **poke** matchup (chip damage at distance). She bullies your HP under tower with traps and basic-attacks at 650 range. Don't try to walk up — held-Q her back from max range, eat the bad lane, and roam mid as soon as R is up. Pantheon's macro game beats hers even when his lane loses.
- **Soraka:** Pure **sustain enchanter** (healing-focused support that wins by keeping her ADC alive, not by starting fights). Flash-W on top of her any time her Flash is down — she has zero crowd control and dies in your combo before her ADC can react. Save R for the regroup when your jungler shows up.
- **Thresh:** Skill matchup. His Q out-ranges your W (~1100 vs 600), so don't walk forward while his hook is up. Dodge it by stepping behind your minions, then W his ADC the instant you see him on cooldown. The window is small but consistent.

## Power spikes & win conditions

- **Level 2 (W + E):** First spike. With W and E you have a full all-in: W stun, basic-attack, then E to block the enemy ADC's counter-burst. An over-extending enemy ADC (pushed past their first **wave** — the row of incoming minions) is a free kill if your **Flash** is up.
- **Level 6 (R unlocks):** The map opens. **Grand Starfall** is global, meaning you can ult onto any skirmish on Summoner's Rift from anywhere. The first R should usually go to a fight your jungler started mid or to a roam onto an over-extended top laner — not to a 1v2 in lane.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari completion (~ minute 14-16):** First teamfight item. Your engage drops a free team shield. Group for **Drake** (dragon objective in the bottom river — kills give permanent stat buffs) or **Voidgrubs** (small monsters in the top river — the team that kills them earns bonus damage to structures).
- **![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) Bloodsong endgame (~ minute 24-30):** Spellblade proc plus 4-second damage amp on champions turns Pantheon's Q-tap spam into real damage. Your rotation W → AA → Q tap → AA personally shaves 25-30% HP off a **squishy** (low-defense champion like an ADC or mage).

## Common mistakes

- **Held-Q poke that misses every time.** The held version is a slow projectile telegraphed by the spear's wind-up animation. Cast it from inside a brush or right after the enemy uses their main movement ability — never on open ground when they can simply sidestep by walking.
- **W with no follow-up.** Shield Vault commits you forward and you can't retreat once it lands. If your ADC is back at base or your jungler is on the other side of the map, hold W. A solo engage at 4v5 just feeds you and burns your engage cooldown for nothing.
- **E facing the wrong direction.** Aegis Assault only blocks damage from the side you face. New Pantheon players cast E backward to retreat and eat the enemy follow-up in the back. Always face the source of the burst — the enemy ADC's auto-attacks, the mid-laner's combo — and let your ally peel from behind you.
- **R used as a 1v1 finisher.** Grand Starfall has a long delay and a giant warning indicator on the ground; smart enemies just walk out before you land. Use R to start a fight (with vision so your team can collapse together) or to cross the map onto an unaware target — never to chase a fleeing 1v1 you should have already won.
- **Forgetting Mortal Will.** The empowered icon above your bar tells you when your next spell gets a major upgrade. An empowered W hits multiple times and shreds tanks; an empowered Q deletes squishies. Auto-attack minions in the mid-game lull just to re-stack the passive before each engage.

## Advanced tip

The **R-flank pick** at the back line. Late-game, instead of ulting on top of a fight, ult into the enemy **back line** (the rear of their formation where the squishy carries stand) *behind* their team. Ground-warning gives them 1 second to react: their carries usually flash forward toward their own **front line** (the tanks at the head of the formation) to escape, and you W onto whoever didn't flash. This converts a global R into a back-line **pickoff** (eliminating an enemy isolated from the fight) and the fight that follows is 5v4 because the enemy carry is dead. Pair this with a teammate hiding nearby (a **roaming** jungler — leaving his lane to help yours) to catch the **Flash** target and you skip the teamfight entirely.
