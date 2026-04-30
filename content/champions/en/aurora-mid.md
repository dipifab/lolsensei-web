---
title: "Aurora Mid Build & Guide — Patch 16.9"
slug: "aurora-mid"
language: "en"
patch: "16.9"
champion: "aurora"
role: "mid"
last_updated: "2026-04-29"
description: "Aurora mid lane guide for League of Legends Patch 16.9: starter kit, core burst-mage build, key matchups, power spikes, common mistakes, and one closing tip."
quick_learn:
  champion_dd_id: "Aurora"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Assassin"
  abilities:
    - key: "P"
      name: "Spirit Abjuration"
      description: "Damaging enemies releases spirits that follow Aurora and heal her on contact. Sustained sustain in lane and during teamfights."
      dd_spell_id: "Aurora_Passive"
    - key: "Q"
      name: "Twofold Hex"
      description: "Linear missile that curses targets it hits. Recast pulls the curse back toward Aurora for a second damage hit based on missing HP."
      dd_spell_id: "AuroraQ"
    - key: "W"
      name: "Across the Veil"
      description: "Dash on cast; on landing, becomes invisible and gains move speed. Resets on champion takedowns. Main mobility tool."
      dd_spell_id: "AuroraW"
    - key: "E"
      name: "The Weirding"
      description: "AOE magic blast that slows enemies. Aurora hops backward after casting, giving safe disengage from short-range trades."
      dd_spell_id: "AuroraE"
    - key: "R"
      name: "Between Worlds"
      description: "Leap, then create a slow zone Aurora can teleport across. Enemies entering or leaving the zone are slowed harder."
      dd_spell_id: "AuroraR"
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
    - { dd_id: "4646", name: "Stormsurge" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs mobile assassins (Zed, Fizz, Akali) — stasis covers the window when W is on cooldown"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC (Annie stun, Lissandra R, Twisted Fate gold card)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap when any priority target buys a Magic Resist item (around 60+ MR)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs healing-stacking comps (Soraka, Vladimir, Dr. Mundo, Yuumi)"
  base_combo: ["E", "Q", "W", "Q", "AA"]
  win_condition: "Punish positioning errors with W jump-in plus Q recast burst once Stormsurge and Shadowflame are online. Use W resets on takedowns to cycle through a teamfight."
  weakness: "Hard CC before W locks Aurora out of every escape. Long-range artillery mages out-poke her step-up window before she has a way to engage."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8126, name: "Cheap Shot", icon_path: "perk-images/Styles/Domination/CheapShot/CheapShot.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "anivia", "cassiopeia"]
      archetype: "Immobile mages without escape"
      reason: "These mids have no dash or stealth: Aurora can W in once Q lands, finish the curse recast under their nose, and W back out on the takedown reset."
    - examples: ["yone", "sett", "pantheon"]
      archetype: "Short-range melee mids"
      reason: "Aurora out-ranges them with Q poke and uses E backward hop to refuse trades; they need to commit gap-closers Aurora can punish with Q recast on the way in."
    - examples: ["veigar", "ziggs"]
      archetype: "Stationary cast-time burst mages"
      reason: "Their kill window needs Aurora standing still for a slow projectile or a cage. W invisibility breaks the cast read and lets her sidestep the setup."
  counterpicks:
    - examples: ["xerath", "vel-koz", "lux"]
      archetype: "Long-range artillery mages"
      reason: "They poke Aurora outside her Q range every wave. She has no built-in shield, so each step up to E or Q costs HP she cannot reliably heal back through her passive alone."
    - examples: ["zed", "fizz", "akali"]
      archetype: "Mobile assassins with multiple gap-closers"
      reason: "They burst Aurora during the W cooldown gap. Even with Zhonya's, a chained dash plus ult deletes her before she can stasis or resync W."
    - examples: ["yasuo"]
      archetype: "Champions with projectile blocks"
      reason: "Yasuo's Wind Wall negates both the outbound Q and the recast pull-back, removing roughly half of Aurora's lane damage in a single ability."
---

## Overview

Aurora is a magic-damage **burst** mage — meaning she stacks most of her damage into a 1-2 second window — with assassin tools bolted on: **Across the Veil (W)** is a dash plus a short stealth, and **Between Worlds (R)** is both an engage leap (a way to start a fight by jumping in first) and a repositioning zone. Her kit rewards reading the enemy: land **Twofold Hex (Q)** at range, walk forward to set up the recast, then jump in with **W** when the curse pull-back lines up. Her passive heals her every time spirits exorcised by her abilities reach her, which gives in-lane **sustain** (the ability to recover HP during the laning phase without going back to base) that most **squishy** mid laners — champions with low HP and high damage, like Lux or Ahri — do not have.

Her game plan is to win short **trades** (brief skirmishes where two champions exchange a few hits) with **Q** plus auto-attacks while looking for the **all-in** window — the moment when she commits to a full kill — the second **W** comes back up. **W** also has a **takedown** reset (the cooldown refunds on every kill or assist), so a clean kill in lane gives her a second jump to escape, and in teamfights it lets her chain from the first squishy down to the next target on the **back line** (the carries positioned behind their tanks).

## Recommended Build

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** (extra AP — Ability Power, the stat that boosts magic damage — plus mana regen) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Aurora's passive already heals her; Doran's Ring covers the early mana she needs to keep using **Q** for **poke** (long-range chip damage to whittle down the enemy's HP without committing to a fight).

**Core items (in order):**

1. ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — Aurora's first **spike** (a moment when the champion becomes much stronger, usually after completing an item). When she damages a champion who is already low on HP, Stormsurge's passive **procs** (the way an effect activates) and adds extra damage and movement speed, which is exactly what she needs to chain a **W** jump-in into a **Q** recast.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat **magic penetration** (reduces the enemy's Magic Resist so your spells hit for more), which matters most against squishy targets.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — the HP-threshold passive (extra magic damage when the target is below ~35% HP) lines up exactly with Aurora's **Q** recast burst, which deals more damage on targets that are missing HP.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — a late-game **scaling** item (it multiplies the AP from every other item in your build, so it gets stronger the more AP you already own). With Deathcap online her **Q** recast can one-shot a squishy (kill them in one combo, before they react).

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — into mobile assassins (Zed, Fizz, Akali). The active gives **stasis** (2.5 seconds where you cannot be damaged, but you also cannot move or cast). Use it during the gap when **W** is on cooldown.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — extra magic resist plus a passive shield that blocks the next enemy ability. Build it into single-target magic **CC** (crowd control: stuns, roots, slows that lock you out of your kit) that interrupts your engage — Annie stun, Lissandra R, Twisted Fate gold card.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — percentage magic penetration. Buy it the moment any priority target buys a Magic Resist item (roughly 60+ MR).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — applies Grievous Wounds, which cuts enemy healing. Buy into healing-stacking compositions (Soraka mid, Vladimir, Dr. Mundo top, Yuumi).

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** is default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** is acceptable when the team needs more **R** uptime to engage.

**Skill order:** Put the most points into **Q** first (it is her main damage and what triggers the recast burst), **E** second (it clears minion waves and the backward hop gives a free **disengage** — a way to break out of a fight), **W** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Domination** with **Electrocute**, **Cheap Shot**, **Sixth Sense**, **Ultimate Hunter**. Secondary **Sorcery** with **Manaflow Band** and **Transcendence**. Electrocute procs after three quick hits on the same target — exactly what Aurora does in every short trade with Q-auto-Q-recast — and Ultimate Hunter shortens the cooldown of **R** for a second teamfight engage.

## Key matchups

- **Yasuo:** Wind Wall (Yasuo's W — a wall of wind that blocks every projectile that crosses it) eats both halves of **Q** (the outbound missile and the recast pull-back). Save **Q** until he uses Wind Wall on a minion wave, then walk forward and trade with auto-attacks and **E** while his Wind Wall is on cooldown.
- **Zed:** Mobile assassin. Hold **W** defensively for when his **R** lands; do not burn it offensively in lane. Buy ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** as your second item if his jungler also has hard engage.
- **Anivia:** Immobile and vulnerable to a **W** all-in once her wall is down. Step on her wall placements aggressively right after she casts it; her wall has a long cooldown and she has no other tool to threaten you at close range.
- **Lux:** Even-to-favored matchup. Her Q outranges yours, but you win the short-range exchanges thanks to **W** plus auto-attacks. Side-step her **E** while she places it (she telegraphs the cast point — there is a visible cast animation before the spell lands), then walk forward.
- **Twisted Fate:** A race to **roam** first (a roam means leaving your lane to make plays elsewhere on the map). If he picks gold card on you, **W** sideways before the card lands — the dash breaks his lock-on. Track his **R** with **wards** (totems that give vision of an area for a few minutes — sweep them on river entries and the tri-bush, the bush at the river-mid intersection); if he ults, ping mid-mia (the standard "missing in action" ping that warns the team your laner just left) and roam yourself.

## Power spikes & win conditions

- **Level 2:** With one point in **W** you suddenly have mobility — the first all-in window opens if the enemy laner is below ~70% HP. Walk up, **Q**, auto-attack, then **W** behind them and **Q** recast.
- **Level 6:** First **R** unlocks the cross-zone repositioning that lets her commit to a 1v1 even under the enemy turret, because **R** gives her a built-in escape route across the zone.
- **![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) Stormsurge completion (~ minute 12-14):** Aurora's first assassination spike. She can now solo-kill a full-HP squishy with the complete combo, and the **W** reset on the takedown means a second kill in the same teamfight becomes realistic.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minute 24-28):** The **Q** recast on missing HP starts one-shotting any target who has not bought a Magic Resist item. Force fights around objectives (drake, baron, herald, voidgrub spawns) once this is online.

## Common mistakes

- **Burning W on the way in instead of saving it for the reset.** **W** resets on takedowns. If you commit **W** to engage, finish the kill in the same window so the reset gives you the exit. If the kill is not guaranteed, hold **W** and use **E**'s backward hop to disengage instead.
- **Forgetting to recast Q.** **Twofold Hex** auto-recasts when the duration runs out, but the manual recast lets you choose the angle of the pull-back. Walking forward two steps before recasting drags the second hit through more enemies for **AOE** damage (area-of-effect — damage that hits multiple enemies in a zone, not just one target).
- **Standing in your own R zone after the slow expires.** **Between Worlds** locks you visually inside a marked area; once the entry/exit slow runs its course, the zone is just a sign saying "collapse here." Hop out across the boundary the moment the kill is secured.
- **Stacking AP without magic penetration.** Buying ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** before ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** or ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** loses you damage against anyone with even base Magic Resist. Build penetration first, raw AP afterwards.
- **Using R to engage when your team is not following up.** **R** is a long cooldown commitment — eating it for nothing because your team was off clearing a side lane is the most common **throw** (giving up a winning position with one careless commitment). Ping the engage three seconds before you cast so the team has time to face the right direction.

## Advanced tip

Use **R**'s realm-hop boundary as a **kite** tool — kiting means dealing damage while moving back, so the enemy cannot close the distance — not just an engage. Cast **R** behind a fleeing enemy so the slow zone closes their escape line, then hop across the area to cut off their angle. The slow on entry and exit means the only safe path out of the area is the long way around — usually long enough for you to land **Q** plus an auto-attack and finish the kill.
