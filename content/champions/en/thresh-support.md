---
title: "Thresh Support Build & Guide — Patch 16.9"
slug: "thresh-support"
language: "en"
patch: "16.9"
champion: "thresh"
role: "support"
last_updated: "2026-04-29"
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
    - { dd_id: "3117", name: "Mobility Boots" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3109", name: "Knight's Vow" }
    - { dd_id: "3877", name: "Bloodsong" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs heavy magic damage or chain crowd-control (Leona, Ashe R, Maokai R) — swap Mobility Boots before teamfights start"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "vs auto-attack heavy enemy bot lane (Caitlyn, Draven, Tristana) — swap Mobility Boots when their early harass dominates"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "with a strong AD carry (Caitlyn, Vayne, Aphelios): R triggers a slow zone and bonus damage on the carry's next attack"
    - dd_id: "4643"
      name: "Vigilant Wardstone"
      against: "late-game (after minute 25) when your six slots are full and you want extra wards plus a small stat boost"
  base_combo: ["Q", "AA", "E", "R"]
  win_condition: "Land Death Sentence on a priority squishy (carry, mid) and chain into Flay knockback so your team converts the catch. With The Box dropped, the catch has nowhere to walk that doesn't cost HP."
  weakness: "A missed Q leaves you with no engage tool for around 10 seconds. Slow base movement and zero dashes mean you can't reposition once your hook is gone — flank routes punish you hard."
---

## Overview

Thresh is an **engage support** (the one who opens the fight) and a **catcher** — a champion whose job is to **pickoff** (eliminate an isolated enemy before a fight starts) by landing a long-range hook. His **Death Sentence (Q)** is the centerpiece of the kit: a slow, telegraphed (= clearly visible in advance) skillshot that, when it lands, decides the fight. Around the hook, **Flay (E)** repositions enemies (slow + knockback in the swing direction), **Dark Passage (W)** lets an ally dash to him, and **The Box (R)** boxes a target into walls of magic damage. Thresh builds tank items only (HP, armor, magic resist — no damage stats): his value is enabling the rest of the team, not personally killing.

Game plan: place wards in the **river** (the corridor between the two halves of the map) and the brushes around bot lane, pick an isolated target (an **over-extending** carry pushed too far forward, or an enemy mid laner roaming for a gank), land **Q**, follow with **E**, drop **R** and the target can't walk out without losing more HP.

## Recommended Build

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (the unified support starter) plus 2 Health Potions. World Atlas evolves automatically as you accumulate quest gold — through ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** and ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds** — into the endgame upgrade you choose.

**Core items (in order):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — starter. Don't last-hit minions, let your ADC have them.
2. ![Mobility Boots](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3117.png) **Mobility Boots** — out-of-combat movement speed. Lets you **roam** (leave bot lane to help mid or jungle) and ward deeper.
3. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — active that shields all nearby allies for a few seconds. Use it right before an engage to soak the enemy team's first **burst** (the high damage they dump in the first 1-2 seconds of a fight).
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — bonds you to your **ADC** (Attack Damage Carry — the auto-attacking bot lane teammate, your team's main late-game damage dealer): a portion of the damage they take is redirected to you, and you heal them in return. Pick the carry whose life you most want to extend.
5. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — the engage-focused endgame upgrade of your support item (World Atlas auto-transforms into one of these once you've completed its quest). Adds bonus damage to your next basic attack right after you apply **crowd-control** (any stun, slow, root, or knockback) — fits perfectly after a Q hook or R box.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — boots that grant magic resist and reduce the duration of crowd-control on you. Pick into heavy magic damage or chain crowd-control teams (Leona engage, Ashe arrow ult). Swap your Mobility Boots before fights start.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots that give armor and reduce damage from basic attacks. Pick into auto-attack-heavy enemy bot lanes (Caitlyn, Draven, Tristana) when their early **harass** (poke and chip damage in lane) on you is the bigger threat than late-game teamfight CC.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — pair this with a strong AD carry. When you ult (R), Zeke's drops a slow zone and gives the bonded carry bonus damage on their next attack. Big combo synergy.
- ![Vigilant Wardstone](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4643.png) **Vigilant Wardstone** — late-game sixth-item slot. More wards on the map, longer ward range, small stat boost.

**Boots:** Default ![Mobility Boots](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3117.png) **Mobility Boots** to roam aggressively in lane phase. Swap into one of the situational defensive boots **before the first major teamfight** (around minute 18-22), because Mobility Boots lose their out-of-combat speed bonus once the fight starts.

**Skill order:** Max **E** (Flay) first — slow, knockback, and the auto-attack passive damage are your primary lane trade tool. Max **Q** second — lower cooldown means more pickoff windows. Max **W** last. Take **R** at levels 6, 11, 16.

**Runes:** Primary **Resolve** (the defensive tree — durability) with **Aftershock** (free armor and magic resist for a few seconds when you crowd-control someone, fires on every Q hook), **Font of Life** (your CC marks the target; allies who attack it heal a bit), **Bone Plating** vs hard-burst lanes or **Conditioning** vs slow-scaling lanes, and **Revitalize** (boosts your shields and heals). Secondary **Inspiration** (utility) with **Hextech Flashtraption** (a backup short-range Flash on a long cooldown — priceless for surprise hooks) and **Cosmic Insight** (lower cooldowns on summoner spells and item actives). Stat shards: Adaptive Force / Adaptive Force / Health.

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
- **![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) Bloodsong endgame (~ minute 24-30):** Your post-CC auto-attack starts dealing real damage. Suddenly Q → auto-attack → E isn't just a setup — it's a kill on a **squishy** (a low-defense champion like an ADC or a mage) on its own.

## Common mistakes

- **Throwing Q at full HP targets behind their minions.** The hook collides with minions. Wait until the enemy steps forward to **last-hit** (deliver the final blow on a minion to claim its gold), or until your wave is thin (only a couple of minions left between you and them). A naked **Q** fishing for the dream hook just wastes mana and leaves you without engage for 10 seconds.
- **Flaying enemies away from your team.** Flay's direction depends on your position relative to the target — moving forward swings them backward (toward you), moving back swings them forward (away from you). Position so your **E** shoves them **into** your team, not out of it.
- **Throwing the lantern with no communication.** If your ADC isn't watching for it, the lantern wastes its cooldown. Ping it when you drop it. Better yet, drop it preemptively in a scary fog area so the ADC has a guaranteed escape route.
- **Engaging without vision.** A blind hook into the **fog of war** (the unrevealed areas of the map) often catches a tank instead of a carry, or worse, walks you into the enemy jungler. Use your **trinket** (the free vision item every champion gets) and **Control Wards** (the pink wards bought from shop, which detect invisible units and disable enemy wards) before you commit.
- **Saving R for the "perfect" moment.** **The Box** is a denial tool (something that takes away enemy options), not just a damage spell. Drop it as a wall behind a fleeing carry to slow them, or in front of an engaging Malphite to break his ult charge. Don't hoard it.

## Advanced tip

Lantern-Hook setup. Throw **Q** first, and the moment it leaves your hand drop **W** lantern at maximum range in the same direction. If the **Q** lands, your ADC clicks the lantern and arrives next to the hooked target the instant the stun fires — full follow-up damage without having to walk forward at all (zero **gap-closing**, the act of running across distance to reach the enemy). This turns a hook from a setup into a guaranteed kill. The drill is muscle memory (the automatic finger reflex): practice Q-W in the same half-second so the lantern is in flight before your ADC even reads what's happening.
