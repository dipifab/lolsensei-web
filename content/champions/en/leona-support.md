---
title: "Leona Support Build & Guide — Patch 16.9"
slug: "leona-support"
language: "en"
patch: "16.9"
champion: "leona"
role: "support"
last_updated: "2026-04-29"
description: "Leona support guide for League of Legends Patch 16.9: starter kit, tank-engage build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Leona"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Vanguard"
  abilities:
    - key: "P"
      name: "Sunlight"
      description: "Leona's spells mark hit enemies with a Sunlight debuff for 1.5 seconds. The next allied champion who deals damage to that target consumes the debuff for bonus magic damage. Free extra damage on every engage your ADC follows up on."
      dd_spell_id: "Leona_Passive"
    - key: "Q"
      name: "Shield of Daybreak"
      description: "Leona's next basic attack stuns the target briefly and deals bonus magic damage. Auto-targeted (no aiming needed) but melee range — you must be next to the enemy. The reliable second crowd control after E or R."
      dd_spell_id: "LeonaShieldOfDaybreak"
    - key: "W"
      name: "Eclipse"
      description: "Leona gains damage reduction plus bonus armor and magic resist for a few seconds. When it ends, she deals AOE damage (area-of-effect, hits all enemies nearby); if it hits, the resistances stay longer. Activate before engaging, not after."
      dd_spell_id: "LeonaSolarBarrier"
    - key: "E"
      name: "Zenith Blade"
      description: "Leona projects a sword-image in a line: the last champion hit gets briefly rooted (stuck) and Leona dashes onto them. Skillshot (an ability you aim — flies in a line, can be dodged). Main engage tool, opener for the E into Q chain."
      dd_spell_id: "LeonaZenithBlade"
    - key: "R"
      name: "Solar Flare"
      description: "Leona calls down a long-range delayed AOE: enemies in the center are stunned, on the outside slowed. Long cast delay — use it to start a fight from range, to lock down a fleeing target, or to set up a teamfight before E range."
      dd_spell_id: "LeonaSolarFlare"
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
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3109", name: "Knight's Vow" }
    - { dd_id: "3877", name: "Bloodsong" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "swap from Mercury's vs auto-attack-heavy bot lanes (Caitlyn, Draven, Tristana) when basic-attack harass hurts more than enemy CC"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "vs comps where you reliably ult on top of an ally carry (Yasuo, Yone, Master Yi) — your R adds bonus magic damage to their attacks"
    - dd_id: "3211"
      name: "Kaenic Rookern"
      against: "vs AP burst comps (double mage like Syndra mid + Brand support) — passive magic shield that regenerates while out of combat"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Land E from a fog-of-war angle, dash on top of the enemy ADC, chain Q stun, AA with Sunlight passive marked. Your ADC deals double damage on the proc and the carry dies before their support can react."
  weakness: "E is a slow skillshot easy to dodge or sidestep on flat ground. No ranged poke at all — if the enemy bot lane stays just outside E range, you give up the lane and have to roam. Mana-hungry early."
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
    - examples: ["soraka", "sona", "yuumi", "janna"]
      archetype: "Squishy enchanters with no hard CC of their own"
      reason: "They have no tools to interrupt your E dash. The moment your E lands on their ADC, they die in the Q stun before the enchanter can shield or peel. Yuumi can't even untether fast enough to escape."
    - examples: ["caitlyn", "jhin", "senna"]
      archetype: "Immobile ADCs with no dash"
      reason: "E has 875 range and dashes onto the last champion hit: ADCs without a blink eat the full E into Q chain whenever they step up to last-hit. They cannot outrun the engage once you commit."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "Stationary mage supports with no escape"
      reason: "Their poke costs them positioning: a Flash plus E hooks them, and W's resistances eat their counter-burst. They have to stand still to cast their long skillshots — that's exactly when E lands clean."
  counterpicks:
    - examples: ["morgana", "milio", "lulu"]
      archetype: "Hard-CC blockers and disengage enchanters"
      reason: "Morgana Black Shield blocks E's root entirely — you flash in for nothing. Milio R cleanses your stun chain at long range. Lulu polymorph cancels your dash mid-cast. Your single committed engage gets answered for free."
    - examples: ["nami", "lux", "zyra"]
      archetype: "Long-range pokers with sustain or roots"
      reason: "They chip your HP for free at 800-plus range while you have no answer. Lux Q binds you mid-engage and Nami's bubble interrupts your dash; you eat poke without ever getting in range."
    - examples: ["thresh", "blitzcrank", "pyke"]
      archetype: "Hook supports who pull you out of position"
      reason: "Their hook lands before your E does (Thresh Q ~1100 range vs your E 875). You eat the pull, get focused alone in their team, and your ADC is left exposed with no engage tool to follow."
---

## Overview

Leona is a **vanguard support** (a tank-class support whose job is to open fights, not heal allies) — she runs at the enemy carry, locks them in chained crowd control, and lets her teammates do the killing. Her kit stacks two crowd controls on a single target: **Zenith Blade (E)** is a long skillshot dash that roots the last enemy champion hit, **Shield of Daybreak (Q)** is an auto-attack stun, and her passive **Sunlight** marks every target she damages so the next ally hit on them deals bonus magic damage. **Eclipse (W)** is a defensive layer she pops *before* engaging: damage reduction plus armor and magic resist that stay longer if she hits any enemy at expiration. **Solar Flare (R)** is a delayed AOE stun usable from longer range than E — for engaging from fog of war or locking a fleeing kill.

Game plan: in lane, sit at the bush edge until the enemy ADC walks up to last-hit, then E from fog (the unwarded brush) so they can't sidestep it, chain Q, and let your ADC convert. Mid-game, **roam** (leave bot lane to help mid or jungle) using R for cross-lane picks. Late-game, start the fight on the priority target — usually the enemy ADC or mid mage — and stay alive long enough to **peel** (protect your own carry).

## Recommended Build

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (the unified support starter) plus 2 Health Potions. Don't last-hit minions: leave the gold to your ADC. World Atlas pays your gold separately through its quest progression.

**Core items (in order):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — starter. Evolves automatically as you accumulate quest progress through ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** and ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**, ending in the endgame upgrade you choose.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — magic resist plus **tenacity** (a stat that shortens the duration of crowd control on you). A shorter stun on you means you get to land your Q after the enemy support tries to interrupt.
3. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — armor, magic resist, and an active that shields all nearby allies. Pop it the instant you E so your team soaks the enemy's first **burst** (high damage in the first 1-2 seconds).
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — bonds you to your **ADC** (Attack Damage Carry — the auto-attacking bot lane teammate): a portion of the damage they take redirects to you, and you heal them back.
5. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — the engage-focused endgame upgrade of your support item. Carries a **Spellblade** passive: after any ability cast, your next basic attack deals bonus damage and the target takes amplified damage for 4 seconds. Play pattern: "ability → AA → ability → AA".

**Situational items:**

- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — armor boots that reduce basic-attack damage. Swap from Mercury's when the enemy bot lane is auto-attack heavy (Caitlyn, Draven, Tristana) and their **harass** (poke and chip damage) hurts more than late CC will.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — bonds you to a chosen ally; when you ult, that ally gains bonus magic damage on their attacks. Pick into comps with a melee carry (Yasuo, Yone, Master Yi) you reliably ult on top of.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3211.png) **Kaenic Rookern** — passive magic shield that regenerates out of combat. Pick into AP-burst comps (double mage like Syndra + Brand) — the shield eats one full ult.

**Boots:** Default ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** for the tenacity — a 1.25s Thresh hook becomes 0.85s, enough to still cast Q. Swap to ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** only against AA-heavy bot lanes.

**Skill order:** Max **E** (Zenith Blade) first — lower cooldown means more engage windows, and E is your only ranged tool. Max **W** second for longer damage reduction. Max **Q** last (rank-up barely changes the stun, mostly just damage). Take **R** at levels 6, 11, 16.

**Runes:** Primary **Resolve** (the defensive rune tree — durability) with **Aftershock** (free armor and magic resist when you crowd-control someone, fires on every Q stun and E root), **Font of Life** (your CC marks the target; allies who attack it heal), **Conditioning** vs late-scaling lanes or **Bone Plating** vs early burst, **Unflinching** (extra **tenacity** when you use a summoner spell). Secondary **Inspiration** with **Hextech Flashtraption** (backup Flash on a long cooldown) and **Cosmic Insight** (lower cooldowns on summoners and item actives). **Stat shards**: Adaptive Force / Adaptive Force / Health.

## Key matchups

- **Nautilus:** Mirror **engage** matchup. His Q hook out-ranges your E (~1100 vs 875), so don't walk forward while his hook is up. Dodge it, then flash-E his ADC while he has no follow-up.
- **Pyke:** Skill matchup. He out-pokes you with Q and out-roams you on **stealth** (invisible while passing through brush). Keep vision deep in the river and force fights in lane where his R doesn't reset on the kill.
- **Morgana:** Hard counter into your **all-in** (full kill commit). Black Shield blocks your E root entirely — you flash in for nothing. Track its 18-second cooldown and force fights only in the window where it's down.
- **Soraka:** Pure **sustain enchanter** (healing-focused support that wins by keeping her ADC alive, not by starting fights). Flash-E on top of her any time her Flash is down — she dies in your combo before her ADC can react.
- **Caitlyn:** Long-range **poke** matchup (chip damage at distance). She bullies your HP under tower. Don't fight back, take the bad lane, roam mid or invade on Mobility Boots — Leona's lane loses but her macro game wins.

## Power spikes & win conditions

- **Level 2 (E + W):** First spike. The full E into Q chain unlocks at level 3, but with E plus W you can already **trade** hard (a brief exchange of damage, not a full kill commit). An over-extending enemy ADC (pushed past their first **wave** — the row of incoming minions) is a free kill if you E with **Flash** up.
- **Level 6 (R unlocks):** Engage potential explodes. **Solar Flare** lets you start fights from fog of war: cast it from inside the river bush without showing yourself. R also works as **peel** (protect your carry) — drop it on someone diving your ADC.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari completion (~ minute 14-16):** First teamfight item. Your engage drops a free team shield. Group for **Drake** (dragon objective in the bottom river — kills give permanent stat buffs) or **Voidgrubs** (small monsters in the top river — the team that kills them earns bonus damage to structures).
- **![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) Bloodsong endgame (~ minute 24-30):** Spellblade proc plus 4-second damage amp on champions turns your rotation into real damage. E → AA → Q → AA personally shaves 20-25% HP off a **squishy** (low-defense champion like an ADC or mage).

## Common mistakes

- **E from open ground.** Zenith Blade is a slow projectile easy to sidestep on flat lane. Cast E from inside a bush or from an unwarded angle — the projectile crosses the half-second of vision the enemy needs to react. From open ground, only cast E when the target is already CCed by another source.
- **Engaging with no follow-up.** Leona's E commits you forward and you can't retreat. If your ADC is back at base or your jungler is on the other side of the map, hold E. A solo engage at 4v5 just feeds you and burns your R cooldown for nothing.
- **W cast after engaging instead of before.** Eclipse gives damage reduction the *moment* you cast it, not when the explosion fires. Pop W first, *then* E. If you E and only then realize you needed the resistances, the W bonus often expires before you reach the target.
- **R used reactively from short range.** Solar Flare has a long cast delay and travel time — at melee range a stationary target still slides out of the center stun zone. Save R for opening a fight from fog of war, or finishing a low-HP runner.
- **Forgetting the Sunlight passive.** Every spell you land marks the target for 1.5 seconds; the first ally hit consumes it for bonus damage. Time your Q so your ADC is already inside auto-attack range — the chain should sound like "Q stun, ADC AA, Sunlight pops, target dead".

## Advanced tip

The **fog-of-war R-Flash-E combo**. Sit unseen in the enemy-side river brush at level 6. Cast **R** on the enemy ADC where they're farming — they see the indicator on the ground but not its source. The instant they start moving to dodge, **Flash** forward, **E** while still mid-flash so the dash extends through your flashed position, and **Q** as you arrive. Done right, the target eats R stun, E root, then Q stun — three crowd controls in two seconds with zero counter-play. Practice the timing in **Practice Tool** until R-Flash-E-Q is one fluid sequence inside half a second.
