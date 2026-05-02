---
title: "Dr. Mundo Jungle Build & Guide — Patch 16.9"
slug: "dr-mundo-jungle"
language: "en"
patch: "16.9"
champion: "dr-mundo"
role: "jungle"
last_updated: "2026-05-02"
description: "Dr. Mundo jungle guide for LoL Patch 16.9: Mosstomper pet jungle path, HP-stacking tank build, gank timing, key matchups, power spikes, and common mistakes."
quick_learn:
  champion_dd_id: "DrMundo"
  difficulty: 2
  damage_type: "mixed"
  champion_class: "Tank / Bruiser Jungler"
  abilities:
    - key: "P"
      name: "Goes Where He Pleases"
      description: "First hard CC (a stun, root, or knockup that locks you down) hits Mundo for HP cost only and drops a chemical canister; pick it up to heal and refresh this passive. Also gives huge HP regeneration."
      dd_spell_id: "DrMundo_Passive"
    - key: "Q"
      name: "Infected Bonesaw"
      description: "Long-range linear skillshot dealing magic damage based on a percent of the target's current HP and slowing them. Costs HP, not mana — your resource bar is your health bar. Main pre-6 gank tool from 975 range."
      dd_spell_id: "DrMundoQ"
    - key: "W"
      name: "Heart Zapper"
      description: "Self-channel that ticks magic damage on nearby enemies and stores a chunk of damage you take. Recast or let it end to deal a burst — if it hits a champion, you heal a percent of the stored damage. Toggle on inside camps for clear sustain."
      dd_spell_id: "DrMundoW"
    - key: "E"
      name: "Blunt Force Trauma"
      description: "Passive: bonus AD that scales with max HP. Active: melee slam dealing extra damage based on your missing HP. Kills swat the body across enemies in its path. Your single-target damage spike on ganks."
      dd_spell_id: "DrMundoE"
    - key: "R"
      name: "Maximum Dosage"
      description: "Self-cast: instantly heal a percent of missing HP, then gain bonus Move Speed and huge HP regen for the duration. Press it before ganking, before fights, and before dying — never after."
      dd_spell_id: "DrMundoR"
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
    - { dd_id: "1103", name: "Mosstomper Seedling" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3084", name: "Heartsteel" }
    - { dd_id: "3065", name: "Spirit Visage" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap from Plated Steelcaps vs 3+ sources of CC or 2+ AP threats; tenacity saves you once the passive's first-CC immunity is consumed"
    - dd_id: "3083"
      name: "Warmog's Armor"
      against: "5th or 6th item when games go late (~minute 30+); the HP-regen passive lets you full-heal between camps and rotations without backing"
    - dd_id: "3075"
      name: "Thornmail"
      against: "vs auto-attack carries (Vayne bot, Tryndamere top, Master Yi jungle); reflects damage and applies Grievous Wounds on hit"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "vs heavy AP comps with 2+ ranged mages (Karthus jungle + Brand support, Lillia + Lux); MR + Move Speed against magic damage"
    - dd_id: "2504"
      name: "Kaenic Rookern"
      against: "vs single-target AP burst (Syndra mid, Veigar, LeBlanc); the spellshield (a one-use barrier) blanks their combo opener"
  base_combo: ["Q", "R", "W", "E", "AA"]
  win_condition: "Full-clear to level 4, gank at 6 the moment R unlocks, translate every Drake fight from minute 14 on into HP-regen advantage. By min 25 with Heartsteel + Warmog's, walk the back line and refuse to die."
  weakness: "Slow level-2 clear, weak invades pre-3, kited by ranged comps without a way to stick. Healing-cut items that cut enemy healing in half gut his entire kit; against true damage (Fiora, fed Vayne) the HP wall melts."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8275, name: "Nimbus Cloak", icon_path: "perk-images/Styles/Sorcery/NimbusCloak/6361.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Health Scaling"
      - "Health Scaling"
    primary_rationale: "Resolve: Grasp gives free HP every 4s in champion combat — a 5s gank stacks 2-3 procs. Font of Life marks Q-slowed targets for laner heal, Conditioning scales Armor/MR after minute 12, Overgrowth converts farmed camps into permanent HP."
    secondary_rationale: "Sorcery secondary: Nimbus Cloak grants a Move Speed burst after using Flash or Ghost (your gap-close Summoners), and Gathering Storm gives Adaptive every 10 minutes — Mundo's win condition is late game, so do these runes."
    secondary_alternative: "Vs early-skirmish junglers (Lee Sin, Elise, Xin Zhao), swap Sorcery to Inspiration with Magical Footwear (free upgraded boots at minute 10-12) and Cosmic Insight (lower Summoner cooldowns), trading scaling for invade-survival tempo."
matchup_draft:
  pick_into:
    - examples: ["kha-zix", "rengar", "evelynn"]
      archetype: "Burst assassin junglers"
      reason: "Their entire damage profile is one combo on a squishy. Mundo's passive eats the opener CC, R heals back a percent of missing HP, and his W refunds part of the burst. They blow cooldowns and Mundo walks away near full while marking their carry for follow-up."
    - examples: ["karthus", "lillia"]
      archetype: "AP poke and kite junglers without hard engage"
      reason: "Force of Nature plus Spirit Visage stacks Magic Resist that grows as they poke. Mundo's R Move Speed plus Q's percent-current-HP slow eventually closes the gap and a single E hit collapses their HP because they have no defensive items."
    - examples: ["yasuo", "yone", "tryndamere"]
      archetype: "Auto-attack melee carries the enemy team relies on"
      reason: "Q's slow plus Plated Steelcaps cripples their attack uptime. Tryndamere R buys one rotation, but a Mundo with Thornmail + R outlasts the immortality window and chunks them with the reflected damage."
  counterpicks:
    - examples: ["fiora", "vayne", "kayle"]
      archetype: "True-damage skirmishers"
      reason: "Fiora's Vitals, Vayne's W, and Kayle's late-game R all deal true damage (damage that ignores armor and magic resist — there is no defensive stat that reduces it). HP stacking does nothing against true damage; the entire build collapses."
    - examples: ["trundle", "olaf"]
      archetype: "Anti-tank junglers"
      reason: "Trundle R steals Armor, MR and Move Speed for 8 seconds; Olaf's E applies Grievous Wounds and his ult makes him CC-immune so the passive does nothing. Both are designed specifically to neutralize tank stats."
    - examples: ["xerath", "varus", "nidalee"]
      archetype: "Long-range sustained poke comps"
      reason: "They sit beyond Q's 975 range and chip Mundo's HP every wave. Mundo has no dash and one Move Speed burst on R; he walks into their damage just to threaten engage and bleeds 30% HP per rotation without ever closing."
---

## Overview

Dr. Mundo jungle is the simplest tank jungler in the game: clear camps, hit level 6, walk to a lane, and refuse to die through whatever the enemy throws at you. His kit has one job — soak engage (the moment when an enemy commits to start a fight, usually with a hard CC or dash) — and he does it through three mechanics. **Goes Where He Pleases (passive)** absorbs the first hard CC (a stun, root, or knockup that locks you down) for HP cost, dropping a canister you can pick up to heal. **Heart Zapper (W)** stores incoming damage during a fight and refunds part of it as healing on recast. **Maximum Dosage (R)** instantly heals a percent of missing HP and grants huge regen for the duration. Together they make Mundo the highest effective-HP champion in any teamfight, with the trade-off that he has zero hard CC of his own and must rely on Q slows plus team follow-up.

The game plan is tempo-aware farming. Pre-3, Mundo's clear is slow and his HP from camp damage is real — do not invade and avoid being invaded. Full-clear to level 4, contest Scuttle (the river crab that grants vision when killed), and look for the first gank around minute 4-5 on a lane with priority (priority = the lane that is pushing toward the enemy, so the laner can leave for a few seconds without losing minions). At level 6, every R press should turn into a kill, an objective, or a saved teammate. From minute 14 on with **Heartsteel** plus **Sundered Sky** online, Mundo wins every Drake fight on stat sticks alone.

## Recommended Build

**Starting items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Hailblade is the melee jungle starter: it lets you damage neutral monsters (the camps you farm in the jungle) faster and applies a brief slow on enemy champions when you hit them with a basic attack. Refillable Potion is a healing item that refills for free at base, so you save gold on chip damage from camp clears.

**Core items (in order):**

1. ![Mosstomper Seedling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1103.png) **Mosstomper Seedling** — quest upgrade from Hailblade (auto-evolves around minute 3-4 once it earns enough XP from camp kills). The tank pet companion grants extra Armor and MR while you are out of combat with champions and tenacity (shorter stun duration on you) when active in fights. Mandatory pickup for any tank jungler — the icon you see first on the quick-learn bar tells the reader which starter you took.
2. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — first big item. Your first basic attack on a champion in any fight crits and heals you. The crit heal lines up with your gank pattern: walk in, Q-slow, auto-crit-heal, E for the missing-HP slam. Pairs with R's regen for sustained skirmishes.
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — default boots when the enemy team's main damage is basic attacks. They reduce that incoming damage during extended fights.
4. ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** — the late-game scaling item. Each successful proc on a champion gives Mundo permanent HP that never goes away, even if you die. By minute 30 you bank 8-12 procs and your effective HP doubles compared to a flat-tank build.
5. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — magic resist plus a healing-amp passive that boosts your **W** burst-heal, your **R** regen, and any ally heal coming from supports like Soraka or Yuumi. Buy this fourth or fifth depending on whether the enemy team has more AP or AD.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap from ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** when the enemy team has 3+ sources of CC or 2+ AP champions. Tenacity (the stat that shortens the duration of stuns and slows on you) is the one defense that matters once your passive's first-CC immunity is consumed.
- ![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) **Warmog's Armor** — fifth or sixth item when games go past minute 30. Once you cross the HP threshold (around 3000 bonus HP), the passive lets you heal to full out-of-combat in 4 seconds, meaning you full-heal between camps without backing.
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — vs auto-attack carries (Vayne bot, Tryndamere top, Master Yi jungle). Reflects damage and applies **Grievous Wounds** (the debuff that cuts the target's healing in half) on hit, which is the only counter to a fed Tryndamere or Vayne healing back what they take from your W aura.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — vs heavy AP comps (Karthus + Brand, Lillia + Lux). Stacks magic resist as you take magic damage and grants Move Speed, both of which Mundo wants.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — vs single-target AP burst (Syndra, Veigar, LeBlanc). The spellshield (a one-use barrier that blocks the next ability aimed at you) blanks the combo opener and resets after a few seconds out of combat.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** is the default. Switch to ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** vs heavy CC chains or AP-heavy compositions.

**Skill order:** Max **Q** first (range, slow, percent-current-HP damage all scale per rank — your only ranged tool and your main gank setup). Max **E** second (the missing-HP active scales hard with bonus AD, and bonus AD scales with max HP). Max **W** last; one early point is enough for clear sustain. Take **R** at levels 6, 11, 16.

**Runes:** Primary **Resolve** with **Grasp of the Undying** — every 4 seconds in champion combat, your next basic attack deals bonus magic damage, heals you, and grants permanent HP. Pair with **Font of Life** (your slow from Q marks targets so your laner heals when they hit them — perfect for ganks), **Conditioning** (extra Armor and MR after minute 12), and **Overgrowth** (HP scaling with nearby minion deaths). Secondary **Sorcery** with **Nimbus Cloak** (Move Speed burst after using Flash or Ghost) and **Gathering Storm** (Adaptive scaling every 10 minutes). Stat shards: **Adaptive Force** + **Health Scaling** + **Health Scaling**.

## Key matchups

- **Lee Sin / Elise / Xin Zhao:** Early-game junglers who invade your weak side. Track them with vision wards (placed items that reveal a small map area for ~90 seconds) on your raptors and red buff (camps in your own jungle). Avoid 1v1 invades pre-3 — your clear is slow and you have no Smite damage to instantly delete a 1v1 attempt. Do a full clear, contest Scuttle, then start ganking.
- **Master Yi / Karthus:** Scaling junglers. You match their scaling almost item-for-item, but they hit their power spike earlier (Yi at Blade of the Ruined King, an attack-speed lifesteal item; Karthus at Liandry's Torment, the burn-damage AP item). Force fights and objectives (Drake on bot side, Rift Herald on top side — neutral monsters that grant team-wide buffs and gold when killed) before minute 18 and gank lanes (a "gank" is a surprise visit from the jungler to a lane to score a kill) constantly to deny them the farm window.
- **Trundle:** Direct hard counter. His R (Subjugate) steals your Armor, MR and Move Speed for 8 seconds — exactly your three best stats. Avoid solo skirmishes; only fight him with teammates within 2 seconds of follow-up. Build ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** to apply Grievous Wounds on his Q lifesteal.
- **Hecarim / Volibear:** Mirror engage tanks. Whoever lands their CC first wins the trade. Save your **passive** for after they commit (Hecarim E knockback, Volibear Q knockback). One you eat their first CC for free, you out-sustain them in the follow-up.
- **Kha'Zix / Rengar:** Assassin junglers focused on burst. They invade single targets in side jungle. Tank their first burst with passive + R, then E them once they are HP-committed — your missing-HP scaling on E one-shots a Rengar at 70% HP from 30%.

## Power spikes & win conditions

- **Level 4:** Full clear done, all three abilities online. Look for the first gank on the lane closest to a stuck-pushing enemy (the lane with the lowest enemy HP and the most minions on the enemy side of mid). Q slow from 975 range plus W ticking on top is a credible kill threat even pre-6.
- **Level 6:** First **Maximum Dosage**. The biggest power swing in Mundo's game. Find a fight within 30 seconds of hitting 6 — gank a lane, contest the second Scuttle, or set up the first Drake. R's instant heal turns a "lost gank" into a guaranteed exchange.
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky completion (~ minute 12-14):** First real damage and sustain spike. Fighting for Drake or Rift Herald with W ticking and Sundered Sky crit-heal procs on engage wins the objective without burning R.
- **![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) Heartsteel + ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) Spirit Visage online (~ minute 22-26):** Peak teamfight window. R cooldown is short enough that you can engage twice per Baron timer. Force every objective; this is your peak.

## Common mistakes

- **Invading before level 3.** Mundo's pre-3 clear is among the slowest and Hailblade has very low Smite damage. A Lee Sin or Elise you meet at minute 1:30 with one ability up will out-trade you and put you 2 camps behind. Stay in your own jungle until level 4.
- **Pressing R after taking damage.** R's instant heal is a percent of *missing* HP, but the regen-over-time portion is wasted if you trigger it at 90% HP. Use R **before** committing to a gank or fight, not after — you want the regen ticking when the burst hits, not bandaging it after the fact.
- **Ganking lanes with no priority.** A gank into a frozen wave (a wave sitting near the enemy laner's tower) is a free kill for the enemy laner: their tower zones you, your laner has to walk far from theirs to follow up. Only gank lanes pushing toward your side or sitting in the middle.
- **Picking up the passive canister too late.** The chemical canister (the green vial that drops when your passive procs) sits on the ground for a few seconds before despawning. If you let it expire mid-gank, you wasted the entire passive — no heal, no cooldown refund. Walk over it the second it drops.
- **Building full tank with no Spirit Visage.** Every Mundo defensive stat compounds with healing-amp. Without Spirit Visage, R heals for less, W heals for less, ally Soraka heals for less. Spirit Visage is the multiplier item; skipping it for raw HP is a worse build for the same gold.

## Advanced tip

Practice the **flank gank** through enemy jungle (entering the lane from a side or behind, not from the river — the bush behind the enemy laner that they cannot see without a ward). On Mundo this is uniquely powerful because of his passive: the enemy laner's first CC ability gets eaten for free the moment you appear behind them, which means even a 100% HP target who Flashes back toward their tower runs straight into a Q-slowed 975-range projectile and dies on E. The trick is timing the entry through the river-side or back-side bush at exactly the moment the enemy laner pushes the wave toward your side and is far from their tower; the gank pattern is invisible until you walk out, and the missed CC seals the kill before they can recover.
