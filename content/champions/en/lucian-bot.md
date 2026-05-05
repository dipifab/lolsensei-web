---
title: "Lucian Bot Build & Guide — Patch 16.9"
slug: "lucian-bot"
language: "en"
patch: "16.9"
champion: "lucian"
role: "bot"
last_updated: "2026-05-05"
description: "Lucian bot lane guide for League of Legends Patch 16.9: starter kit, lane-bully build, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Lucian"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Lane Bully ADC"
  abilities:
    - key: "P"
      name: "Lightslinger"
      description: "After any ability cast, Lucian's next basic attack fires twice (the second shot deals reduced damage). This double-shot rhythm is the engine of the kit."
      dd_spell_id: "Lucian_Passive"
    - key: "Q"
      name: "Piercing Light"
      description: "Linear skillshot. Can be cast on a minion or champion: the beam pierces and damages everything behind the target on the line — long-range trade tool."
      dd_spell_id: "LucianQ"
    - key: "W"
      name: "Ardent Blaze"
      description: "Linear skillshot that explodes in a star, marking enemies and revealing them. Hitting a marked target gives Lucian a burst of move speed."
      dd_spell_id: "LucianW"
    - key: "E"
      name: "Relentless Pursuit"
      description: "Short dash. Cooldown is reduced when Lightslinger shots hit enemies (more on champions). The dash is what makes Lucian a lane bully."
      dd_spell_id: "LucianE"
    - key: "R"
      name: "The Culling"
      description: "Channeled barrage of shots in a line, each one applying Lightslinger procs. You can move while channeling and weave Relentless Pursuit during the cast."
      dd_spell_id: "LucianR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "3508", name: "Essence Reaver" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "6675", name: "Navori Flickerblade" }
    - { dd_id: "3072", name: "Bloodthirster" }
    - { dd_id: "3031", name: "Infinity Edge" }
  situational_items:
    - dd_id: "6692"
      name: "Eclipse"
      against: "vs squishy lanes you want to all-in early (Senna, Karma, Lulu); the shield + omnivamp every other ability proc snowballs lane"
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "vs tanky front lines or HP-stacking comps (Sion, Cho'Gath, Dr. Mundo) — bonus armor pen scales with the enemy's max HP"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "vs heavy healing comps (Soraka, Vladimir, Aatrox) — applies Grievous Wounds (cuts enemy healing) the moment you tag the target"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "vs hook or pickoff comps (Blitzcrank, Thresh, Morgana Q) — the spell shield eats one priority CC before they can chain-burst you"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "vs AD-heavy duo lanes (Draven + Pyke, double-AD comps with Kha'Zix or Talon roaming bot) — extra armor and AA damage reduction"
  base_combo: ["Q", "AA", "W", "AA", "E", "AA"]
  win_condition: "Win the lane phase with Q poke + dash trades, snowball the lead through Essence Reaver and Navori Flickerblade by minute 25, then close fights mid-game using R + E weaves before scalers like Kog'Maw and Jinx come online."
  weakness: "Falls off hard after minute 30 against scaling marksmen (Vayne, Twitch, Kog'Maw). No reliable disengage, low base armor: a single failed E means you eat the full burst from divers and assassins."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Press the Attack stacks in 3 hits — Lucian's Lightslinger double-shot after Q reaches 3 procs in under 2 seconds, the fastest keystone he can trigger. Triumph + Bloodline give sustain, Coup de Grace adds 8% damage under 40% HP for R execute pressure."
    secondary_rationale: "Domination secondary: Sudden Impact triggers right after every Relentless Pursuit dash, adding lethality to your immediate Q-AA follow-up. Treasure Hunter rewards your early aggression by funding a faster second item."
    secondary_alternative: "If the enemy bot lane is a scaling 2v2 (Kog'Maw + Lulu, Vayne + Soraka) and you don't expect early kills, swap Domination → Inspiration with Magical Footwear (free Boots minute 12) + Cosmic Insight (more Flash uptime in late teamfights)."
matchup_draft:
  pick_into:
    - examples: ["aphelios", "kog-maw"]
      archetype: "Immobile scaling ADCs without early dominance"
      reason: "Lucian's Q poke + E dash lets him win every level 2-6 trade; immobile scalers can't fight back before items and concede plates and CS."
    - examples: ["blitzcrank", "thresh"]
      archetype: "Hook supports without dash-counterplay"
      reason: "Relentless Pursuit dodges hooks reactively. With E up, Lucian walks the lane bush against a hooker and forces the support to mispredict the dash direction."
    - examples: ["senna", "karma"]
      archetype: "Squishy enchanters with low base resistances"
      reason: "Lucian's Q-AA-AA double-shot windups delete enchanter HP bars in a single trade window; they have no early peel that survives an E-flash all-in."
  counterpicks:
    - examples: ["vayne", "twitch"]
      archetype: "Late-game hyper-carry ADCs"
      reason: "If they survive past minute 25 with two items, Lucian's damage curve flattens while theirs spikes hard — they outdamage him in every extended fight."
    - examples: ["caitlyn", "jhin"]
      archetype: "Long-range poke ADCs"
      reason: "Both outrange Lucian's Q significantly: Caitlyn shoves and zones with Q, Jhin punishes with W root from off-screen. Lucian can't close the gap to land trades."
---

## Overview

Lucian is a **lane bully ADC** built around one simple rhythm: every ability triggers his **Lightslinger** passive, which makes the next basic attack fire twice. So every game of Lucian is a sequence of **Q → AA-AA → W → AA-AA → E → AA-AA**, weaving abilities and double-shots so fast that the enemy bot lane never gets a clean trade window. He has the highest level 1-9 lane pressure of any marksman in the game, a short dash on **E** with a cooldown reset on takedowns, and an ultimate **R** that doubles as execute and team-fight burst. The catch: he scales worse than Jinx, Kog'Maw, or Vayne, so every minute past 30 is a minute he's losing.

The game plan is "convert lane pressure into a 2-item lead before minute 18, then snowball (a vantage that compounds — kill, gold, item, more kills) through team-fight pickoffs before scalers come online." With **Essence Reaver** and **Navori Flickerblade** complete, Lucian can chain Q-AA combos almost on cooldown and his **R** comes back fast enough to use it twice per skirmish. After that, you play as a midgame teamfighter: open every fight with **W** to mark and reveal the priority target, dash in with **E**, channel **R** while sliding sideways to dodge incoming skillshots, and let the cooldown reset on takedowns recycle your dash for the next pick.

## Recommended Build

**Starting items:** Doran's Blade + 2 Health Potions. Lucian's mana costs are manageable thanks to **Essence Reaver** restoring mana on basic attack, so a second Doran's is rarely worth more than a Pickaxe component for the first item.

**Core items (in order):**

1. ![Essence Reaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3508.png) **Essence Reaver** — first-item rush. The mana refund on every basic attack means Lucian can cast Q on cooldown without burning out his pool, and the AD + crit chance gives him a meaningful damage spike at minute 10-12.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed boots. The double-shot mechanic loves attack speed: faster autos = faster Lightslinger procs = faster Press the Attack triggers.
3. ![Navori Flickerblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6675.png) **Navori Flickerblade** — your second-item spike. Each crit reduces your basic-ability cooldowns: in practice, your Q comes back so fast you can cast it twice in a single trade window. This is the item that turns Lucian's combo from "Q-AA-AA-W-AA-AA" into "Q-AA-AA-Q-AA-AA-W-AA-AA" — a third of the combo extra, for free.
4. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — sustain + AD. The lifesteal lets Lucian survive mid-game skirmishes and the overheal shield buys time when a diver lands on him. Skip if the enemy team has Grievous Wounds priority.
5. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — late-game crit damage spike. By the time you finish IE, you should already have closed the game through midgame teamfights; if you haven't, IE is your last chance to keep up with hyper-carries.

**Situational items:**

- ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — replaces Essence Reaver as a first-item rush against squishy lanes you want to all-in early. The shield + omnivamp every other ability proc converts level 2-6 trade windows into pure kill pressure.
- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — against tanky front lines or HP-stacking comps (Sion, Cho'Gath, Dr. Mundo). Replace Bloodthirster if the enemy team has 2+ tanks; the bonus armor pen scales with the target's max HP.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — against heavy healing comps (Soraka, Vladimir, Aatrox). Applies Grievous Wounds — a debuff that cuts enemy healing — the moment you tag a target.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — against hook or pickoff comps (Blitzcrank, Thresh, Morgana Q). The spell shield eats one priority CC before the enemy can chain-burst you.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — replaces Berserker's Greaves against AD-heavy duo lanes (Draven + Pyke) or comps with Kha'Zix / Talon roaming bot. Extra armor and basic-attack damage reduction.

**Boots:** Berserker's Greaves is the default. Plated Steelcaps only against AD-heavy comps.

**Skill order:** Max **Q** first (your main DPS and poke tool), **W** second (shorter cooldown on the speed-burst mark), **E** last (cooldown stays low naturally thanks to Lightslinger procs). Take **R** at levels 6, 11, 16.

**Runes:** Primary **Precision** with **Press the Attack**, **Triumph**, **Legend: Bloodline**, **Coup de Grace**. Secondary **Domination** with **Sudden Impact** and **Treasure Hunter**. Stat shards: Adaptive, Adaptive, Health Scaling.

## Key matchups

- **Caitlyn:** Slightly Lucian-unfavored. She outranges your **Q** by a wide margin, so don't try to poke through minions — instead, hold the wave at your side and look for an **E**-flash all-in at level 2 or 3 before her **Headshot** procs become punishing. Dodge her **W** trap path with **E** when you commit.
- **Draven:** Even, leans Lucian-favored if your support engages. Draven needs free hands to catch his Spinning Axe; punish him every time he chases an axe out of position by following up with **Q** on the line he's running. **Press the Attack** procs faster than his Q-Q-Q windup.
- **Jhin:** Lucian-favored levels 1-5, even at 6, slightly Jhin-favored late. Walk forward when his **W** is on cooldown, **Q** through minions to chip his HP, and dash in with **E** the moment he uses his fourth bullet (the slow reload window is your kill timing). Respect his **R** during recalls — he can snipe from across the river.
- **Vayne:** Heavily Lucian-favored before level 9. This is your gold mine: shove the wave hard pre-3, force her off the lane with **Q** poke, and ping your jungler for a level 2 dive. If she survives to two items, the lane is over; transition to splitpush (pushing a side lane alone to draw enemies away) or back-line teamfighting and stop trying to 1v1 her.
- **Kai'Sa:** Even matchup decided by item timings. Lucian wins minute 1-12, Kai'Sa wins minute 18+. Don't let her free-farm to 2 items: shove every wave, threaten plates, and ping your jungler for a dive on her next mistake. After **Bloodthirster** completes, she outscales you in every extended fight.

## Power spikes & win conditions

- **Level 2:** With one point in **Q** and one in **W**, your Q-AA-AA-W combo deals 35-45% of an enemy ADC's HP if they walk forward to last-hit. Hold the wave at the lane center and look for this trade window before they can recover.
- **Level 6:** First **The Culling** unlocks pickoff potential. Don't open with **R** — open with **W** to mark, **E** in, then channel **R** while strafing. The full combo deletes any squishy support caught alone in the bush.
- **![Essence Reaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3508.png) Essence Reaver completion (~ minute 10-12):** First mana-refund spike. You can now cast **Q** on cooldown through the entire wave and into the enemy ADC; the lane prio (priority — leaving the lane without losing CS) lets you crash the wave and roam to a Drake fight.
- **![Navori Flickerblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6675.png) Navori Flickerblade online (~ minute 18-22):** Your win-condition spike. **Q** cooldown drops to roughly 3 seconds during sustained autos, and you can fit two **Q**s into a single skirmish. Force fights here — Drake, Rift Herald, Atakhan — before the enemy ADC's third item comes online and you fall off.

## Common mistakes

- **Walking forward without checking E cooldown.** **Relentless Pursuit** is your only escape and your only gap-closer. If you commit to a trade with E down, you can't disengage when the enemy support engages back. Always know the second mark on your E timer.
- **Burning R as poke from across the lane.** **The Culling** has a long channel and a visible firing line. Cast at max range from full HP, the first 2-3 shots get walked out of, and you achieve nothing while burning a 90-second cooldown. Use R as a finisher (target under 40% HP) or as a midgame teamfight opener combined with **W** mark, never as wave clear.
- **Not weaving auto-attacks between abilities.** Lucian's **Lightslinger** double-shot only triggers if you basic-attack after every cast. New players spam Q-W-E-R and miss the double-shot window entirely — that's roughly 40% of his damage gone. The rhythm is always **ability → AA → AA → ability → AA → AA**.
- **Maxing E or W first.** **E**'s damage scaling per rank is irrelevant; the value is in the dash itself, which has a base reset on Lightslinger hits. Always max **Q** first — it's the highest damage-per-rank ability in the kit and your only ranged poke tool.
- **Trying to 1v1 a hyper-carry past minute 30.** Your damage curve flattens after item 3; theirs steepens. If the lane is even at minute 25, stop hunting for a 1v1 and start playing as a backline teamfighter behind your tank — let them try to flank you.

## Advanced tip

Practice the **"E-Q animation cancel"** in the Practice Tool until it's muscle memory. Lucian's basic-attack windup after **Q** is long enough that a sloppy player just walks forward and waits — you lose the second Lightslinger shot to the enemy stepping out of range. The fix is to **dash with E during the Q animation**: you cancel the windup, repositioning Lucian closer, and the double-shot still fires because Lightslinger is queued from the Q cast. In practice this lets you Q from max range, dash forward 445 units to close the gap, and immediately fire **AA-AA** at point-blank — covering 1145 total units in under a second. Against any non-mobile lane (Senna, Karma, Aphelios) this combo deletes 50-60% of their HP in a single trade window with no counterplay. Spend 10 minutes in the Practice Tool until you can chain Q-E-AA-AA without dropping a single shot — the difference between bronze Lucian and platinum Lucian is exactly this animation cancel.
