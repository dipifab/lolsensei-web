---
title: "Aurelion Sol Mid Build & Guide — Patch 16.9"
slug: "aurelion-sol-mid"
language: "en"
patch: "16.9"
champion: "aurelion-sol"
role: "mid"
last_updated: "2026-04-29"
description: "Aurelion Sol mid lane guide for League of Legends Patch 16.9: Stardust scaling build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "AurelionSol"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Battlemage"
  abilities:
    - key: "P"
      name: "Cosmic Creator"
      description: "Damaging abilities collect Stardust from enemy champions. Stardust permanently grows the area, range, and execute threshold of every spell — patient stacking pays off late."
      dd_spell_id: "AurelionSol_Passive"
    - key: "Q"
      name: "Breath of Light"
      description: "Channeled dragon-breath cone in front of you. Hold the button to keep dealing damage; each full second on a champion bursts extra damage and grants Stardust. Main DPS source."
      dd_spell_id: "AurelionSolQ"
    - key: "W"
      name: "Astral Flight"
      description: "Targeted flight over terrain with no Q cooldown while flying. Takedowns within 3s refund part of W's CD. Stardust extends max flight range."
      dd_spell_id: "AurelionSolW"
    - key: "E"
      name: "Singularity"
      description: "Place a black hole zone that drags enemies toward the center and damages them. The center executes low-HP targets. Stardust grows the zone and the execute threshold."
      dd_spell_id: "AurelionSolE"
    - key: "R"
      name: "Falling Star / The Skies Descend"
      description: "Crash a star at a target area: stuns and damages. After 100 Stardust the next R upgrades to The Skies Descend — bigger area, knock-up, AoE shockwave."
      dd_spell_id: "AurelionSolR"
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
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs mobile assassins (Zed, Fizz, Talon, Akali) — stasis is the panic button when W is on cooldown"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs hard single-target CC that interrupts your Q (Annie R, Lissandra R, Twisted Fate gold card)"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "vs slippery teams: the slow keeps targets glued inside your Q breath cone"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap as soon as any priority target buys their first Magic Resist item"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs healing-stacking comps (Soraka mid, Vladimir, Yuumi + heal-heavy bot lane)"
  base_combo: ["E", "Q", "W", "R"]
  win_condition: "Stack Stardust through extended fights with long Q channels and W flights. Once Liandry's Torment and Rabadon's Deathcap are online, your sustained burn deletes squishies through their Magic Resist."
  weakness: "Q is a long channel: any hard CC that interrupts it (Annie R, Lissandra R, Twisted Fate stun) cuts your damage in half. Mobile assassins close the gap before W flight is ready to escape."
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
matchup_draft:
  pick_into:
    - examples: ["veigar", "anivia", "karthus"]
      archetype: "Immobile control mages without dash"
      reason: "Aurelion Sol's W flight closes the gap while Q keeps channelling. Targets with no dash or stealth eat sustained Q damage while the flight window keeps him outside their cast range."
    - examples: ["galio", "sylas"]
      archetype: "Short-range melee mid skirmishers"
      reason: "Their all-in needs close range. ASol kites with W and Q from outside auto-attack range; if they Flash in, E pulls them off-position and R stuns once Stardust scales the area."
  counterpicks:
    - examples: ["zed", "fizz", "talon"]
      archetype: "Mobile assassins with multiple gap-closers"
      reason: "They can dash on top of Aurelion Sol mid-channel, interrupt the Q, and burst him faster than Stardust scaling can carry the fight. W flight has too long a cooldown to be a reliable escape."
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall champions"
      reason: "Their wall blocks the entire Q breath line. ASol's main damage source becomes useless mid-trade and they punish the missed channel with an all-in he cannot kite."
---

## Overview

Aurelion Sol is a sustained-damage mage whose kit revolves around two simple ideas: keep your **Breath of Light (Q)** channeled on a target for as long as possible (channel = an ability you keep casting continuously for several seconds, interruptible by hard crowd control), and use **Astral Flight (W)** to follow them when they try to run. His passive **Cosmic Creator** gathers a permanent resource called **Stardust** every time you damage a champion long enough — Stardust permanently grows the area, range, and execute threshold (an HP threshold below which the spell instantly kills the target) of his spells. The longer the game goes, the bigger and scarier each cast becomes. He has no instant burst combo: he wins by staying on top of enemies until the burn (damage that ticks over several seconds instead of landing all at once) finishes them.

Your mid-lane game plan is asymmetric. Early levels you trade in short windows (a brief exchange of damage in lane, not a full kill attempt): **Q** a champion when they walk up to last-hit, get one or two ticks of damage, walk back. From level 6 onward, **W** lets you cross terrain like a free **Flash** — use it to chase kills your jungler sets up (a "gank" — the jungler comes to your lane to help kill the enemy), or to disengage by flying back to your tower. Late game you become a back-line battlemage (a mage who fights at medium range, mixing spells with positioning instead of long-range artillery): stand at the edge of a teamfight (behind the front line — your tanks and bruisers, the durable melee fighters who soak damage for the team), channel **Q** through their bodies onto the enemy carry, drop **Singularity (E)** to pull enemies caught at the edge of the fight, and finish with **Falling Star (R)** when it stuns the carry.

## Recommended Build

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** (the default first-buy ring for mages: a small chunk of AP, HP, and mana regen) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Doran's mana regen is mandatory — you spam Q every minion wave.

**Core items (in order):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — burns a percentage of the target's max HP every second your Q is on them (so it hits tankier enemies harder, and the longer the channel the bigger the burn). Your single best item.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration boots: each cast ignores part of the enemy's Magic Resist, which deletes squishies (low-defence targets like ADCs and mages) faster.
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplies your **AP** (Ability Power, the stat that scales magic damage) by an extra 30%. Every spell hits harder. Buy it third when ahead.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — bonus magic damage to enemies on low HP (HP-threshold passive — extra damage that activates only when the target is below a certain HP %). Lines up perfectly with **R** finishes.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — vs mobile assassins (Zed, Fizz, Talon). Stasis is your panic button if **W** is on cooldown.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — vs hard single-target CC (Annie R, Lissandra R, Twisted Fate gold card). One blocked stun saves your channel.
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — slows everything **Q** hits, keeping targets glued inside the breath cone.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — heavy magic penetration aimed at enemies who built Magic Resist. Swap to it when any priority target buys their first MR item.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — applies Grievous Wounds to enemies you damage (a status that cuts their healing in half). Take it vs healing-stacking compositions (Soraka mid, Vladimir, Yuumi + heal-heavy bot lane).

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** is default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** (boots that reduce your ability cooldowns) are an option if your team needs **R** ready more often as a teamfight engage tool.

**Skill order:** Max **Q** first (main damage source), **E** second (waveclear and AoE setup), **W** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Sorcery** with **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Inspiration** with **Biscuit Delivery** and **Cosmic Insight**, or **Resolve** with **Second Wind** and **Overgrowth** if the lane is heavy ranged poke harass (low-commitment damage to whittle down your HP).

## Key matchups

- **Yasuo / Yone:** Their **Wind Wall** blocks your **Q** breath line entirely. Save **Q** until they push the wall, then re-engage. Trade only when the wall is on cooldown.
- **Zed / Talon:** They burst you before **W** flight is ready. Buy ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** before ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap**; never hold both **Flash** and **W** on cooldown at the same time.
- **Veigar:** Even pre-6 — he stuns inside his W cage; you out-poke from outside the cage with **Q** range. Post-6 he can one-shot you with E-W-Q-R if you stand still — keep moving sideways while channeling.
- **Annie:** Her stun is hidden in a passive counter that you cannot see clearly. Count her ability casts: every 4 casts she has a stun ready. If her **Pyromania** indicator (the orange flame icon under her portrait) is lit up, do not stand within Tibbers cast range.
- **Twisted Fate:** A race for who roams (leaves their lane to help other lanes) first. His **R** teleports across the map; your **W** can fly across terrain to follow him. Keep the mid minion wave shoving toward the enemy tower whenever you can, so if he leaves lane to gank bot, you free-farm CS while he's away and stay even.

## Power spikes & win conditions

- **Level 2:** With **Q** + **W** you can chase a mistake to the lane wall — punishes anyone who walks too close to the river without vision.
- **Level 6:** First **Falling Star** unlocks an instant stun. Set up ganks with your jungler (when the jungler comes to your lane to help kill the enemy): **E** pull → **R** stun → kill.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment online (~ minute 11-13):** Your sustained **Q** goes from chip damage (small, slow damage) to a real threat. Force fights at Drake spawns (the Dragon objective in the river that gives team-wide buffs) once Liandry's is online.
- **100 Stardust collected (~ minute 18-22):** Your **R** upgrades to **The Skies Descend** — bigger area, knock-up instead of stun, AoE shockwave. This is your team-fight win condition; hold it for objectives instead of burning it on a single pickoff (eliminating an isolated enemy outside the team fight).

## Common mistakes

- **Channeling Q without flying.** Standing still during the **Q** channel (an ability you keep casting for several seconds — interruptible by hard CC) makes you a sitting duck. **W** in the same direction your target is running so the channel continues at no extra mana cost while you stay safe.
- **Using W aggressively with no exit plan.** **W** is your only escape. If you fly into 3 enemies without setup (your jungler nearby, **R** ready, enough cooldown reduction stat to bring **W** back quickly), you die without dealing damage. Treat **W** as a commitment (an all-in — going for the kill with no easy way to back out), not a free mobility tool.
- **Greeding for Stardust over kills.** Stardust scales abilities long-term, but if the enemy carry is one-shot at 30% HP, finish them. A dead carry is worth more than 5 Stardust.
- **Forgetting E pulls toward the center.** Your **E** drags enemies into the middle of the zone — pull them INTO your team, not out of it. A misplaced **E** can save the enemy carry by pulling them away from your front line.
- **Pushing the wave with Q in lane.** **Q** pushes too slowly and burns mana. Use **E** to clear caster minions, then last-hit melees with auto-attacks. Save **Q** for trades and harass.

## Advanced tip

The **Q-W-Q** chain is the technique that separates Aurelion Sol players. Cast **Q** on a champion, then immediately cast **W** in the same direction they are running. Because **W** removes Q's max channel limit while flying, you keep dealing damage continuously through the air — and **Q** can be re-cast mid-flight for a second instance if the original target dies and a new one is in range. In practice this lets you commit to a kill from very far away: **W** flies a long distance (about 1.5 screen-widths) and during that flight your **Q** still hits anyone in front of you, so the threat zone is roughly **W** range plus **Q** range stacked. On takedown, part of **W**'s cooldown is refunded so you can re-engage the next fight almost immediately.
