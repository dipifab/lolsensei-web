---
title: "Akshan Mid Build & Guide — Patch 16.9"
slug: "akshan-mid"
language: "en"
patch: "16.9"
champion: "akshan"
role: "mid"
last_updated: "2026-04-29"
description: "Akshan mid lane guide for League of Legends Patch 16.9: lethality core build path, Press the Attack runes, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Akshan"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Lethality Assassin"
  abilities:
    - key: "P"
      name: "Dirty Fighting"
      description: "Every 3rd hit deals bonus damage and shields Akshan if it lands on a champion. Auto-attacks fire a second reduced-damage shot you can cancel for Move Speed."
      dd_spell_id: "Akshan_Passive"
    - key: "Q"
      name: "Avengerang"
      description: "Boomerang skillshot that deals physical damage on the way out and back. Range extends each time it hits an enemy, so a chained line through minions reaches further than you think."
      dd_spell_id: "AkshanQ"
    - key: "W"
      name: "Going Rogue"
      description: "Passive marks enemies who kill allies as Scoundrels: kill one to revive the dead and gain bonus gold. Active gives camouflage and Move Speed toward Scoundrels (broken outside brush/terrain)."
      dd_spell_id: "AkshanW"
    - key: "E"
      name: "Heroic Swing"
      description: "Grappling hook to terrain, swing around it shooting the nearest target, jump off early or on impact. Cooldown refreshes on champion takedowns — chains into a second swing."
      dd_spell_id: "AkshanE"
    - key: "R"
      name: "Comeuppance"
      description: "Lock onto a champion and channel bullets for ~5 seconds. Recast to fire all stored bullets at once at the first thing hit; damage scales with missing HP, so it is an execute tool."
      dd_spell_id: "AkshanR"
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
    - { dd_id: "3142", name: "Youmuu's Ghostblade" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "6698", name: "Profane Hydra" }
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3814"
      name: "Edge of Night"
      against: "vs single-target point-and-click CC (Lissandra R, Malzahar R, Twisted Fate gold card) — the spellshield blocks one cast on a 30s cooldown"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs heavy AP burst comps (Annie, Veigar, Syndra) — magic shield + lifeline saves you from a one-rotation delete"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "vs healing-stacking comps (Soraka mid, Vladimir, Aatrox top) — applies Grievous Wounds on auto and on R bullets"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "vs assassin-heavy comps (Talon + Zed double AD) — late-game safety net for a backline who has to channel R out in the open"
    - dd_id: "6699"
      name: "Voltaic Cyclosword"
      against: "alternative first item vs squishy comps you snowball with solo picks: the energized auto slow locks targets your R would otherwise miss"
  base_combo: ["Q", "AA", "E", "AA", "R"]
  win_condition: "Snowball lane with Press the Attack 3-hit trades and Q max-range pokes, then convert your lead with E roams from minute 6 onward and execute squishies with R during objective fights."
  weakness: "His E only hooks to terrain, so open lane positioning leaves him with no swing reset. Single-target point-and-click CC and Wind Wall hard cancel his R channel and Q poke."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8233, name: "Absolute Focus", icon_path: "perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "xerath", "vel-koz"]
      archetype: "Immobile artillery mages without dash"
      reason: "These champions sit still to scale or out-poke; Akshan's E around the mid-lane wall closes the gap and chains a Q + 3-hit passive into R execute before they finish a cast."
    - examples: ["annie", "lux", "ahri"]
      archetype: "Mages with a single telegraphed escape"
      reason: "Akshan baits Annie's stun, Lux's Q, or Ahri's R charge, then E-swings on the recovery frame for a free 3-hit trade and the shielded passive proc."
    - examples: ["senna", "ziggs"]
      archetype: "Backline scalers with weak self-peel"
      reason: "Akshan's R locks on at 2500 range and ignores most peel; once the target dips below 50% HP the bullets execute through their kit even across the river."
  counterpicks:
    - examples: ["lissandra", "malzahar", "twisted-fate"]
      archetype: "Point-and-click CC mages"
      reason: "Their lock-on stun or suppress cancels Akshan's R channel, breaks his E swing mid-rotation, and outs his W camouflage — Edge of Night blocks one cast per 30s but cannot save him twice."
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall blockers"
      reason: "Wind Wall blocks Akshan's Q boomerang, every E-swing auto-attack, and every bullet of R; a single well-timed wall flips the entire trade and lets them all-in him with no damage taken."
    - examples: ["akali", "fizz", "diana"]
      archetype: "Multi-dash close-range assassins"
      reason: "Akshan's E attaches only to terrain, so he cannot swing through a fed assassin in the open. Akali's shroud breaks his targeting, Fizz E-jumps over his autos, Diana's R chains him in mid-channel."
---

## Overview

Akshan is a marksman/assassin hybrid with a grappling-hook reposition tool, a stealth tied to revenge marks, and a missing-HP execute ultimate (an attack that auto-kills enemies below a HP threshold). His kit pays off mid lane because the wall geometry around the river and tri-bush gives ![Heroic Swing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/AkshanE.png) **Heroic Swing** consistent terrain to attach to, and because his ![Avengerang](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/AkshanQ.png) **Avengerang** out-pushes most mages once it ranks up (gains levels). He is a low-mobility champion in the open, but a high-mobility one near walls — so the entire game becomes about choosing fights where the map is on your side.

He scales with **lethality** items — gear that turns physical damage into bonus armor penetration, ideal for deleting squishy targets like mages and ranged carries while doing little against full tanks. His damage is mostly physical (AD), not magic.

His game plan is straightforward in shape and demanding in timing: shove the wave with **Q**, look for a 3-hit trade (a brief exchange of damage where you commit a few hits and back off, not a full kill attempt) through the ![Dirty Fighting](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/champion/Akshan.png) **Dirty Fighting** passive shield, then roam (leave your lane to help bot or top) between minutes 6 and 12 to convert lane priority (the freedom to leave lane without losing minions or tower) into kills that refresh **E**. Skill expression sits in two places: (1) bouncing **Q** off a tank in the front line (the bruisers/tanks who initiate fights) into a backline target (the squishy carries standing behind them) so the boomerang's range extends through the chain, and (2) reading the right moment to channel **R** — too early and you eat a stun mid-channel, too late and the target healed back above the execute threshold.

## Recommended Build

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 1 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Default opener — the AD plus the lifesteal feeds your passive shield in 3-hit trades.

**Core items (in order):**

1. ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — first-item lethality plus an active Move Speed buff that turns side-lane roams into kills. The single biggest power spike in your build (a moment where your strength jumps sharply).
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed boots make your passive proc faster (every 3rd hit) and tighten the **R** bullet stream.
3. ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — adds AOE clear (one swing damaging the whole minion wave at once), an active dash you can chain after **E**, and more lethality. Best second item in lethality builds right now.
4. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — its passive auto-kills any champion under 5% HP, which lines up perfectly with **R**'s missing-HP scaling: targets you cannot quite finish through resistances die anyway.
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — armor-pen finisher for the late-game tank in the enemy front line. Buy this, not a defensive item, when the game runs to 35+ minutes.

**Situational items:**

- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — vs single-target point-and-click CC (lock-on disables that cannot be dodged: Lissandra R, Malzahar R, Twisted Fate gold card). The spellshield (a one-use barrier that absorbs the next enemy spell on you) blocks one cast per 30 seconds.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — vs heavy AP burst (one-rotation magic damage that can delete you in a second: Annie, Veigar, Syndra). The magic shield + lifeline (a heal-and-attack buff that triggers when you drop below ~30% HP) keeps you alive long enough to **R** them back.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — vs healing-stacking compositions (Soraka mid, Vladimir top, Aatrox top). Applies Grievous Wounds (a debuff that cuts the target's healing by ~50%) on auto-attacks and on every **R** bullet.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — vs assassin-heavy comps (Talon + Zed double AD = two strong physical-damage burst threats). A second life is worth more than any DPS slot when you are the team's main carry channeling **R** in the open.
- ![Voltaic Cyclosword](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6699.png) **Voltaic Cyclosword** — alternative first item vs squishy double-mage comps you intend to snowball through (build a kill lead that compounds into more kills) with solo picks (catching one isolated enemy at a time). The energized auto applies a hard slow on hit, which locks down a fleeing carry your **R** would otherwise miss.

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** is default for the attack speed. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** only into a team with 3+ hard CC sources (stuns, roots, knock-ups that lock you out of your buttons).

**Skill order:** Max **Q** first (waveclear and main DPS), **E** second (for the swing's per-shot damage when you all-in), **W** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Precision** with **Press the Attack** (after 3 hits on a champion, your next damage is amplified — perfect for your passive proc), **Presence of Mind** (refunds mana on takedowns), **Legend: Alacrity** (extra attack speed), **Coup de Grace** (more damage to enemies below 40% HP). Secondary **Sorcery** with **Absolute Focus** + **Gathering Storm**, or **Inspiration** with **Magical Footwear** (free boots at minute 12) + **Cosmic Insight** if you want the saved gold for an earlier first-item spike.

## Key matchups

- **Yasuo / Yone:** Hard matchup. Their **W** Wind Wall (a vertical wall of wind that blocks all incoming non-melee projectiles for ~4 seconds) blocks **Q**, the autos during your **E** swing, and every bullet of **R**. Hold **Q** until after they Wind Wall a minion or your jungler, then commit. Save ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** as a third-item swap into Yasuo (vs his **Q** knock-up — a spell that briefly throws you airborne, locking you out of inputs).
- **Zed:** Even-to-favorable in lane. Your 3-hit trade out-damages his Q-W poke before level 6, but his **R** makes him untargetable (cannot be selected by spells or autos) for a moment, dodging your **R** lock-on. Save **E** for his shadow swap and counter-jump.
- **Lissandra:** Hard counter. Her **R** is point-and-click and cancels your **R** channel mid-rotation. Buy ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** before second item, never **R** in her face without the spellshield up.
- **Annie:** Careful at level 6. Her stun all-in beats your **R** windup if she catches you in lane. ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** as third item turns a 1-rotation kill into a survivable trade.
- **Veigar:** Favorable. His cage is slow enough that **E** swings out of it cleanly, and he has no escape when you all-in past level 6. Save **R** for after he uses **E** cage on a wave.

## Power spikes & win conditions

- **Level 2:** With **Q** + **E** you have your first all-in: **Q** the wave to extend the boomerang's range, **E** to a side wall, swing for the auto-attacks, **Q** return on the way out. This is the single biggest level-2 spike in mid lane this patch.
- **Level 6:** First **Comeuppance** unlocks side-lane execute pressure. With ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** alone, an unwarded river fight on a target below 50% HP is a kill.
- **![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) Youmuu's Ghostblade completion (~ minute 9-11):** Wave control flips. Active the Ghostblade off cooldown for every roam — a side-lane gank with **E** + **Q** + 3-hit shielded trade is almost guaranteed to convert on a champion who has not built MR.
- **![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) The Collector online (~ minute 22-26):** Targets at 6% HP die to the item passive even if your **R** would have left them at 1 HP. Force objective fights here and channel **R** the moment a backline pops in vision.

## Common mistakes

- **E-ing into the open mid lane.** Your **E** only attaches to terrain — if you Heroic Swing toward a champion and there is no wall in line, the cast just fails or attaches you to the wrong wall and dumps you into their team. Always pre-plan the wall before you press the button.
- **Channeling R in front of the enemy team.** A 5-second windup (the time you spend channelling before releasing) in line of sight is a 5-second target practice for any point-and-click CC. Channel **R** from fog of war (the dark, unwarded part of the map enemies cannot see into) or behind a wall, then walk out to release the bullets at the last frame.
- **Cancelling the bonus shot when you should let it fire.** The passive's second auto-attack does ~50% reduced damage, but it still procs the 3-hit count. In a kill trade do not cancel — the Move Speed is worth less than finishing the proc shield.
- **Q poke without minion bounce.** Naked **Q** at long range is the worst version of the spell. Always send it through a wave or a low-HP enemy minion so the range extends and the return path stays in line with the next champion.
- **Going Rogue camouflage outside terrain.** The active breaks within ~1 second if you are not in brush or hugging a wall. Used in the open lane it does almost nothing — save it for a flank (entering a fight from a side the enemy is not watching) through tri-bush or river brush.

## Advanced tip

Bounce ![Avengerang](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/AkshanQ.png) **Q** off a tank in the front line to reach the back-line carry. Each champion the boomerang hits extends its remaining range, so a **Q** that starts at the front-line bruiser at edge-of-vision will keep travelling through the carry and back to you, dealing damage twice on the same target on the return path. Practice the angle in custom games against bots: line up so the boomerang exits the first champion at the angle you want for the second target, and the chained range will reach a backline that thought it was safe behind their team.
