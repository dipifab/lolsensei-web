---
title: "Hwei Mid Build & Guide — Patch 16.9"
slug: "hwei-mid"
language: "en"
patch: "16.9"
champion: "hwei"
role: "mid"
last_updated: "2026-05-05"
description: "Hwei mid lane guide for League of Legends Patch 16.9: starter kit, core mage build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Hwei"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Artillery"
  abilities:
    - key: "P"
      name: "Signature of the Visionary"
      description: "Damaging an enemy champion primes them. A second damaging spell completes the signature, which detonates after a short delay for AOE magic damage."
      dd_spell_id: "Hwei_Passive"
    - key: "Q"
      name: "Subject: Disaster"
      description: "Opens 3 damaging subspells. QQ fireball (% max HP), QW delayed bolt (bonus damage vs isolated/immobilized), QE path of slowing lava pools."
      dd_spell_id: "HweiQ"
    - key: "W"
      name: "Subject: Serenity"
      description: "Opens 3 utility subspells. WQ ally speed line, WW shield-over-time pool, WE three empowered casts that add damage and refund mana per use."
      dd_spell_id: "HweiW"
    - key: "E"
      name: "Subject: Torment"
      description: "Opens 3 crowd-control subspells. EQ flee fear cone, EW lingering eye that fires a homing root, EE delayed jaws that pull and slow."
      dd_spell_id: "HweiE"
    - key: "R"
      name: "Spiraling Despair"
      description: "Long-range projectile that sticks to the first champion hit, expanding into a slow zone, then explodes for heavy magic damage."
      dd_spell_id: "HweiR"
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
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3135", name: "Void Staff" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs assassins with multiple gap-closers (Zed, Akali, Talon) — stasis buys time for cooldowns and team peel"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC (Ahri charm, Lissandra R, Twisted Fate stun) that locks you before you can cast"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs healing-stacking comps (Soraka, Vladimir, Dr. Mundo) where the Grievous Wounds passive blocks regen"
    - dd_id: "3158"
      name: "Ionian Boots of Lucidity"
      against: "alternative boots when the team needs faster R uptime and your matchup does not require flat magic penetration"
  base_combo: ["E", "EW", "Q", "QW", "AA"]
  win_condition: "Combo a passive proc with QW Severing Bolt on a rooted or slowed target during objective fights, then layer R from max range to lock the enemy into your team's follow-up."
  weakness: "No dash and no escape. Every subspell has a cast time, so any all-in that closes the gap (assassin, diver) before you can finish a CC sequence usually kills you."
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
    primary_rationale: "Sorcery primary: any EW root or QE slow guarantees an Arcane Comet proc on the follow-up Q, adding free poke. Manaflow Band sustains Hwei's heavy mana cost, Transcendence shaves cooldowns off his nine subspells, Scorch closes kills."
    secondary_rationale: "Inspiration secondary: Biscuit Delivery offsets Hwei's awful early mana, Cosmic Insight reduces summoner cooldowns so you have Flash up more often during teamfights."
    secondary_alternative: "Into heavy-poke artillery (Xerath, Vel'Koz), swap Inspiration to Resolve with Second Wind (regen vs poke) and Overgrowth (extra HP late) to survive long-range trades you cannot answer."
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "viktor", "anivia"]
      archetype: "Immobile mages without dash"
      reason: "Hwei's EW eye locks on and fires a homing root against targets with no movement ability, then chains into a guaranteed QW for huge damage. Without a dash they cannot leave the cast window."
    - examples: ["sett", "darius", "garen"]
      archetype: "Slow melee bruisers in lane"
      reason: "Hwei outranges them at every level and keeps them slowed with QE pools. They cannot reach his cast position without burning Flash."
    - examples: ["annie", "sylas"]
      archetype: "Telegraphed all-in mages"
      reason: "Their engage requires close range and a slow tell. Hwei can pre-cast EW from fog, root them on the engage, and walk away to reset the trade."
  counterpicks:
    - examples: ["zed", "akali", "fizz", "kassadin"]
      archetype: "Mobile assassins with multiple gap-closers"
      reason: "Their dashes and blinks beat Hwei's cast times. By the time he opens E and picks the right subspell, the assassin is already inside his hitbox window with full burst ready."
    - examples: ["xerath", "vel-koz"]
      archetype: "Longer-range artillery mages"
      reason: "They out-poke Hwei beyond his Q range and force him to cast under pressure. Hwei has no escape and no way to close the gap, so every wave bleeds his HP."
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall and dash-heavy duelists"
      reason: "Wind Wall blocks every Hwei subspell projectile (Q, EW, R). They dash past his slows and end the trade before he can complete a passive signature."
---

## Overview

Hwei is a long-range artillery mage with the deepest spell kit in the game: each of his Q, W, and E opens a small menu of three subspells, giving him nine ability presses plus the R. He plays the same role as a control mage in mid lane (zone enemies out of farm, poke their HP from range, lock them down with crowd control, snipe stragglers) but trades raw simplicity for adaptability — every wave you choose between damage, utility, and crowd control depending on the situation. Hwei is fragile and immobile: positioning behind the front line (your team's tank or bruiser that absorbs hits) is mandatory.

His game plan is layered: prime a target with one damaging subspell to start the passive **Signature of the Visionary**, then complete the signature with a second damaging cast for AOE bonus magic damage. The cleanest opener in lane is EW (the homing eye that roots) followed by QW (Severing Bolt, which gains huge bonus damage against rooted or immobilized targets). Outside lane the kit shifts toward control: WQ for ally movement speed, WW for a shield pool, EE jaws to pull a clumped enemy team into your AOE.

## Recommended Build

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Mana sustain is critical: Hwei's subspells burn mana fast, and Doran's Ring's regen is the cheapest way to stay in lane until you finish your first ![Lost Chapter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3802.png) **Lost Chapter** component on the way to Luden's Companion.

**Core items (in order):**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — burst spike, mana sustain for the constant subspell rotation, and ability haste that brings every subspell off cooldown faster.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration. Every passive signature explosion benefits from the pen, and you typically aim at squishy targets.
3. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — percentage magic penetration. Buy as the third item the moment any priority enemy buys a Magic Resist piece — Hwei scales heavily with multiplied AP, so unblocked damage is mandatory.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — your highest-AP slot. The 35% AP multiplier amplifies every subspell and the passive explosion equally.
5. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — extra burst with the HP-threshold passive (passive of an item that activates when the enemy is below a health threshold, here 35% HP) lining up with R explosion damage.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — into assassins with multiple gap-closers (Zed, Akali, Talon). Stasis buys the time you do not have because Hwei has no dash.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — into single-target magic CC (Ahri charm, Lissandra R, Twisted Fate stun). The shield blocks the lock that would otherwise interrupt your subspell cast.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — into healing-stacking comps (Soraka mid, Vladimir, Dr. Mundo top). The Grievous Wounds passive cuts the regen they rely on.
- ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — alternative to ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** when the team needs faster R uptime more than penetration.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** is default. Switch to ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** if your team needs more R uptime as a finisher tool.

**Skill order:** Max **Q** first (your damage subspells, where most kills come from), **E** second (CC subspells), **W** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Sorcery** with **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Inspiration** with **Biscuit Delivery** and **Cosmic Insight**. Swap secondary to **Resolve** (Second Wind + Overgrowth) into heavy-poke matchups.

## Key matchups

- **Yasuo / Yone:** Wind Wall blocks every Hwei subspell projectile (Q, EW, R). Hold E and W until they push abilities; never face-cast a QQ fireball into a Wind Wall up.
- **Zed / Akali:** Diving threats (champions who jump on you under tower to kill you despite tower shots). They beat Hwei's cast times. Buy ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** as your second item after ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion**. Pre-cast EW from fog before you walk to last-hit a minion, never face-up.
- **Orianna:** Even matchup that scales toward her in teamfights. You out-poke her in lane with QQ-passive procs but she wins clumped fights with R Shockwave; in late-game positioning, stagger from your team so her R cannot catch you and the carry together.
- **Twisted Fate:** Roam priority race. He has gold-card stun and global R; track his ulti with vision wards on river and tri-bush. If he picks gold card on you, EW root him before he closes the gap.
- **Veigar:** Even-to-favorable in lane. His E cage is your only real threat (steps inside = stunned). Stand outside the cage radius when poking; QW Severing Bolt punishes him hard if he eats his own root by mistake.

## Power spikes & win conditions

- **Level 2:** With one point in Q (Disaster) plus your starting E, you have a damaging subspell plus a CC subspell. EW root into QW Severing Bolt is a real all-in window (a full commit fight, not just a quick trade) if their jungler is not nearby.
- **Level 6:** First **Spiraling Despair** unlocks objective control. The R sticks to the first champion hit and expands a slow zone, perfect for setting up your own jungler on Scuttle Crab fights.
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion completion (~ minute 13-15):** Wave control flips. With Luden's mana sustain you can shove any wave with QQ + QE in one rotation, freeing roams and bot dives.
- **3-item spike (![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) Void Staff online, ~ minute 27-30):** Hwei's combo damage with passive proc bypasses the first MR item enemies bought. Force objective fights when your front line is alive.

## Common mistakes

- **Spamming Q on cooldown without setup.** Always open with E (CC subspell) or hit a target already slowed/rooted by an ally. Naked QQ fireballs from neutral position are dodged on reaction by anyone with a dash and waste mana.
- **Picking the wrong subspell under pressure.** Subspells are committed once you press the menu key — there is no cancel. Practice picking the right finisher in custom games or normal queue before relying on Hwei in ranked: QW for isolated targets, QE for waveclear, QQ for chip damage on low-HP targets.
- **Forgetting the passive signature requires two different abilities.** Two QQ casts in a row do not detonate the passive. The signature triggers only when a second damaging spell from a different subspell hits — typically QQ then QW, or EW root then QW Severing Bolt.
- **Using R as a damage finisher instead of a setup tool.** Spiraling Despair's main value is the slow zone for follow-up, not the explosion damage. Cast it first to lock the enemy into your team's combo, then layer your subspells on top.
- **Standing at max range in teamfights with no peel.** Hwei has no dash. Maximum projectile range puts you outside your team's protection, and a single flank assassin deletes you. Stand at the second-furthest position so a peeler (your support's ability that protects you from divers) can intervene.

## Advanced tip

Use WE Stirring Lights to convert dead time into burst (high damage concentrated in 1-2 seconds). Pre-cast it before you walk into a teamfight: it places three empowered charges on your next three abilities or auto-attacks, each adding bonus magic damage and refunding mana. The optimal usage is WE → EW eye → QW Severing Bolt → auto-attack on the rooted target: every cast in the chain consumes one charge, and the mana refunds let you immediately follow up with R on a second target without going OOM (running out of mana mid-fight).
