---
title: "Dr. Mundo Top Build & Guide — Patch 16.9"
slug: "dr-mundo-top"
language: "en"
patch: "16.9"
champion: "dr-mundo"
role: "top"
last_updated: "2026-05-02"
description: "Dr. Mundo top lane guide for League of Legends Patch 16.9: Heartsteel HP-stacking juggernaut build, lane survival, key matchups, power spikes, and common mistakes."
quick_learn:
  champion_dd_id: "DrMundo"
  difficulty: 2
  damage_type: "mixed"
  champion_class: "Tank / Juggernaut"
  abilities:
    - key: "P"
      name: "Goes Where He Pleases"
      description: "First hard CC (a stun, root, or knockup that locks you down) hits Mundo for HP cost only and drops a chemical canister; pick it up to heal and refresh this passive. Also gives huge HP regeneration."
      dd_spell_id: "DrMundo_Passive"
    - key: "Q"
      name: "Infected Bonesaw"
      description: "Long-range linear skillshot dealing magic damage based on a percent of the target's current HP and slowing them. Costs HP, not mana — your resource bar is your health bar. Main poke and waveclear tool."
      dd_spell_id: "DrMundoQ"
    - key: "W"
      name: "Heart Zapper"
      description: "Self-channel that ticks magic damage on nearby enemies and stores a chunk of damage you take. Recast or let it end to deal a burst — if it hits a champion, you heal a percent of the stored damage."
      dd_spell_id: "DrMundoW"
    - key: "E"
      name: "Blunt Force Trauma"
      description: "Passive: bonus AD that scales with max HP. Active: melee slam dealing extra damage based on your missing HP. Kills swat the body across enemies in its path, hitting them too."
      dd_spell_id: "DrMundoE"
    - key: "R"
      name: "Maximum Dosage"
      description: "Self-cast: instantly heal a percent of missing HP, then gain bonus Move Speed and huge HP regen for the duration. Press it before fights and before dying, not after."
      dd_spell_id: "DrMundoR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "3084", name: "Heartsteel" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3083", name: "Warmog's Armor" }
    - { dd_id: "3065", name: "Spirit Visage" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap from Plated Steelcaps vs 3+ sources of CC or 2+ AP threats; tenacity (a stat that shortens stun duration) saves you from chain-CC death"
    - dd_id: "3075"
      name: "Thornmail"
      against: "vs auto-attack carries (Vayne, Tryndamere, Master Yi); reflects damage and applies Grievous Wounds (cuts enemy healing in half) on hit"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "vs heavy AP poke comps with 2+ ranged mages (Brand + Karthus, Ziggs + Xerath); MR + Move Speed against magic damage"
    - dd_id: "6664"
      name: "Hollow Radiance"
      against: "vs grouped AP wave-clearers (Karthus, Brand, Anivia); the magic burn aura punishes them for fighting near you"
    - dd_id: "2504"
      name: "Kaenic Rookern"
      against: "vs single-target AP burst (Syndra, Veigar, LeBlanc); the spellshield (a one-use barrier that blocks one spell) blanks their combo opener"
  base_combo: ["Q", "W", "E", "AA"]
  win_condition: "Survive lane with Q poke and W sustain, hit Heartsteel and Warmog's, then walk into the enemy back line at full HP regen and refuse to die long enough for your team to clean up."
  weakness: "No hard CC and no dash. Ranged tops kite Q from outside 975 range; healing-cut items that cut his healing in half gut his W heal and R regen, turning the tank into a slow-walking minion."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
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
    primary_rationale: "Resolve: Grasp gives free HP every 4 seconds in lane combat and scales with Mundo's HP stack. Bone Plating eats bruiser burst trades, Conditioning adds Armor and MR after minute 12, Overgrowth converts farmed minions into permanent HP."
    secondary_rationale: "Sorcery secondary: Nimbus Cloak grants a Move Speed burst after Flash or Ghost (your engage Summoners), and Gathering Storm gives extra Adaptive every 10 minutes — exactly the late-game scaling that Mundo's win condition wants."
    secondary_alternative: "Vs early-game lane bullies (Darius, Riven), swap Sorcery to Inspiration with Biscuit Delivery (free Health Potions every 2 minutes pre-12) and Cosmic Insight (lower Summoner cooldowns), trading scaling for raw lane survival."
matchup_draft:
  pick_into:
    - examples: ["sett", "aatrox", "mordekaiser"]
      archetype: "Short-range bruisers without ranged poke"
      reason: "Mundo Q is a 975-range slow that costs HP, not mana, so he can chip them every wave from outside their auto-attack range. They have to walk into him to deal damage, and his W aura plus Spirit Visage healing wins every extended trade."
    - examples: ["zed", "talon", "katarina"]
      archetype: "Assassins relying on a single burst window"
      reason: "Their entire damage profile is one combo. Mundo's passive eats their first hard CC, his R heals back a percent of missing HP instantly, and his W refunds part of the damage they deal during the burst — they spend cooldowns and Mundo walks away near full."
    - examples: ["yasuo", "yone", "tryndamere"]
      archetype: "Auto-attack melee that need to stick"
      reason: "Q's slow plus Plated Steelcaps cripples their attack uptime. Tryndamere R heals them through one rotation, but a Mundo with R up plus Thornmail outlasts the immunity window and chunks them with the reflected damage."
  counterpicks:
    - examples: ["vayne", "teemo", "quinn"]
      archetype: "Ranged tops with percent-HP or blind"
      reason: "Vayne's W (true damage on every third auto, ignoring all defensive stats) and Teemo's Q (a blind that cancels his auto-attacks) bypass the entire HP stack. Quinn's range plus passive blind keeps Mundo permanently outside Q range."
    - examples: ["fiora"]
      archetype: "True-damage duelists"
      reason: "Fiora's Vitals deal true damage (damage that ignores armor and magic resist — there is no defensive stat that reduces it). HP stacking does nothing against true damage; she shreds him in a single duel even at full build."
    - examples: ["trundle"]
      archetype: "Anti-tank champions that steal stats"
      reason: "Trundle's R steals Mundo's Armor, MR and Move Speed for 8 seconds. Mundo's E true-damage from his bonus AD goes mute and his only escape (R speed boost) is also stolen. The whole tank profile gets neutralized."
---

## Overview

Dr. Mundo is a **juggernaut tank** (a slow, melee, immobile champion that hits hard once he reaches a few items and has gigantic HP and HP regen). His whole identity sits on three things: HP stacking through **Heartsteel** (every champion you hit with a basic attack stacks permanent HP onto the item), HP regen from **R** plus Spirit Visage healing amp, and pressing **Q** every cooldown to chip the enemy from 975 range. The **passive** is the single most important mechanic to understand: the first hard CC (a stun, root, or knockup that locks you down so you cannot move or act) the enemy lands on you is reduced — it costs HP instead of locking you, and you drop a canister you can pick up to heal. This means a champion like Sett or Malphite gets exactly one chance to lock you, and after that you walk through their team for the next 8-10 seconds.

The game plan is "do not die, ever." In lane, **freeze the wave** (let it sit just outside your tower so the enemy laner has to walk far from theirs to last-hit) and farm with Q from max range. From minute 14 on, **Heartsteel** plus **Warmog's Armor** crosses the threshold where you have so much HP and regen that the enemy team needs healing-cut items to even hurt you. From there, every fight starts with you walking in slowly, eating the first stun, popping R, and standing in the back line (the squishy carries who deal damage from behind their team's tanks) until the carry dies. This is what "absorbing engage" means: when the enemy commits to start a fight by jumping in with a stun or a dash, your job is to be the one who gets stunned.

## Recommended Build

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. The HP-regen passive of Doran's Shield softens enemy poke (low-cost ranged damage chipping your HP without committing to a fight) and is the right pick in nearly every Mundo matchup, including melee ones — your game plan is "stay alive, farm, scale," not "win level 1."

**Core items (in order):**

1. ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** — your defining item. Every basic attack on a champion charges Heartsteel; on a successful proc you deal massive bonus damage and the item gains permanent stacking HP. There is no upper cap on the HP stacks, which is why Mundo top one-shots squishies at minute 35 with a single E. Buy this every game, first item.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — default boots when the enemy team's main damage source is basic attacks. They reduce that incoming damage during extended fights.
3. ![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) **Warmog's Armor** — unlocks Mundo's "out of combat heal to full in 4 seconds" passive once you cross the HP threshold (around 3000 bonus HP, which Heartsteel + Warmog's components reach together). This is the breakpoint where short side-lane skirmishes (small fights between 1-3 players) heal off completely between waves.
4. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — magic resist plus a healing-amp passive that boosts your **W** burst-heal, your **R** regen, ally heals from supports like Soraka or Yuumi, and Doran's Shield ticks. Buy this fourth into any team with at least one AP threat.
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — your first auto-attack on any champion in a fight crits and heals you for a chunk of HP. Pairs perfectly with the lifeline window your passive creates and gives you a small burst-damage spike to threaten kills, not just survival.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap from ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** when the enemy team has 3+ sources of CC or 2+ AP champions. Tenacity (a stat that shortens the duration of stuns and slows on you) is the one defense that matters once your passive's first-CC immunity has been used.
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — vs auto-attack carries (Vayne, Tryndamere, Master Yi). Reflects damage and applies **Grievous Wounds** (a debuff that cuts the target's healing in half) on hit, which is the only way to slow Tryndamere or a fed Vayne from healing back what they take from your W aura.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — vs heavy AP poke comps (Brand + Karthus, Ziggs + Xerath, Vel'Koz mid). Stacks magic resist as you take magic damage and grants Move Speed, both of which Mundo wants.
- ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — vs grouped AP wave-clearers (Karthus, Brand, Anivia). The magic burn aura ticks damage on anyone fighting near you and gives MR.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — vs single-target AP burst (Syndra, Veigar, LeBlanc). The spellshield (a one-use barrier that blocks the next ability aimed at you) blanks their combo opener and resets after a few seconds out of combat.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** is the default. Switch to ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** vs heavy CC chains or AP-heavy compositions.

**Skill order:** Max **Q** first (range, slow, percent-current-HP damage all scale per rank — this is your only ranged tool). Max **E** second (the missing-HP active scales hard with bonus AD, and Heartsteel's damage stacks fuel it). Max **W** last; one early point is enough for the heal-on-recast and the aura damage. Take **R** at levels 6, 11, 16.

**Runes:** Primary **Resolve** with **Grasp of the Undying** — every 4 seconds in lane combat, your next basic attack on a champion deals bonus magic damage, heals you, and grants permanent HP. Pair with **Bone Plating** (damage reduction on the next 3 hits after you take damage), **Conditioning** (extra Armor and MR after minute 12), and **Overgrowth** (HP scaling with nearby minion deaths — perfect for a lane farmer). Secondary **Sorcery** with **Nimbus Cloak** (Move Speed burst after using Flash or Ghost, both of which are common Mundo Summoners) and **Gathering Storm** (Adaptive scaling every 10 minutes). Stat shards: **Adaptive Force** + **Health Scaling** + **Health Scaling** — extra HP everywhere, because every defensive stat on Mundo translates into more effective HP for the same Heartsteel stack.

## Key matchups

- **Darius:** Hard early matchup. His Hemorrhage bleed (a damage-over-time stack that ramps up the more times he hits you) ticks through your HP regen and his pull cancels your Q wind-up. **Freeze the wave** near your tower, take ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, and accept losing CS — once you have ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** plus Warmog's components, you out-scale him every minute past 14.
- **Sett:** Favorable matchup. Save your **passive** for his W (the third basic attack stuns) — you eat it for HP and walk away. Trade with Q from 975 range; he has no answer to long-range poke and his self-heal cannot keep up with your Q chip.
- **Vayne / Teemo:** Hardest possible lane. They sit outside Q range and use **true damage** (damage that ignores both armor and magic resistance — there is no defensive stat that reduces it) or a blind that cancels your auto-attacks. Take ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, freeze under tower, and call your jungler the second they overextend (push past river without vision). Buy ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** rush instead of Spirit Visage if Vayne snowballs.
- **Fiora:** Hardest melee matchup. Her **W** is a parry (a brief shield that blocks and counters the next ability — bait it with an auto-attack before committing Q or E). Her Vitals deal true damage, so HP-stacking does nothing here. Rush ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** plus ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** components and play for jungle ganks.
- **Mordekaiser:** Skill matchup. His R isolates you in a 1v1 realm for 7 seconds with no escape. If he R's you before your passive triggered, you are stuck and you die. If you have **R** up and your passive is up, you survive — the 7s realm window is roughly the duration of one R cast. Save **Flash** to reposition out of his Q grab during the realm.

## Power spikes & win conditions

- **Level 6:** First **Maximum Dosage**. Even at level 6 with no items, R's instant heal plus Move Speed turns a losing trade into a survival or a kill. Look for an **all-in** (a full commit to a kill, no fallback) the moment your jungler shows top side and the enemy laner is below 60% HP.
- **![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) Heartsteel completion (~ minute 13-15):** The first real spike. Each successful proc on a champion in lane gives you permanent HP that never goes away, even if you die. Push the wave once Heartsteel is online and trade autos through enemy minions to bank stacks.
- **![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) Warmog's Armor + Heartsteel stacks (~ minute 18-22):** The breakpoint where Mundo becomes unkillable in side lanes. Out-of-combat regen kicks in at the new HP threshold; you can take a 50% HP fight, walk to the next wave, and be full HP by the time you arrive.
- **3-item spike with ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) Spirit Visage (~ minute 24-28):** Peak teamfight window. Healing-amp boosts every regen tick — R goes from "decent" to "I cannot bring this guy below half HP." Force every Drake and Baron fight here; the team needs you to walk in first and absorb engage.

## Common mistakes

- **Pressing R after taking damage.** R's instant heal is a percent of *missing* HP, but the regen-over-time portion is wasted if you trigger it at 90% HP. Use R **before** committing into a fight, not after — you want to enter the fight with the regen already ticking, so the burst window is buffered, not bandaged after the fact.
- **Q-ing with full HP on a healthy enemy.** Q costs HP and deals percent-current-HP damage. Throwing it on a 100% HP enemy when you are already 100% HP just trades your HP for a small chip — you lose the trade. Use Q after a melee enemy has dropped HP from minion aggro or after an ally CC opens an all-in.
- **Picking up the passive canister too late.** The chemical canister (the green vial that drops when your passive procs) sits on the ground for a few seconds before despawning. If you let it expire, you wasted the entire passive — no heal, no cooldown refund. Walk over it the second it drops, even mid-fight.
- **Building full tank with no Spirit Visage.** Every Mundo defensive stat compounds with healing-amp. Without Spirit Visage, R heals for less, W heals for less, ally Soraka heals for less. A full-tank Mundo with no healing-amp is a slow-walking minion; with Spirit Visage, the same items stretch his effective HP much further.
- **Standing in W toggle out of combat.** **Heart Zapper** drains HP every second while channeling. If you toggle it on for clear and forget, you arrive at the fight already at 70% HP. Recast it before the channel ends, every time.

## Advanced tip

Practice the **passive bait** in side lane skirmishes (1v1 fights happening in the top or bot side lane while the rest of the map fights elsewhere). When the enemy diver has only one hard CC ability up — say a Sett W stun or a Renekton stun — walk into their lane visibly low HP. They burn the CC to commit, your passive eats it for free, and you R-Q-E-AA them under your own minions while they have nothing left. The trick is *visibly* low HP: stand in the open at 35-40%, take a few autos to confirm the enemy is committing, then hit the trade. A Mundo who has both his passive and R off cooldown and 50%+ HP behind enemy lines is one of the strongest 1v1 threats in the game; the bait is what creates the scenario.
