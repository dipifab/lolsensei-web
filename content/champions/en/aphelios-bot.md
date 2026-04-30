---
title: "Aphelios Bot Build & Guide — Patch 16.9"
slug: "aphelios-bot"
language: "en"
patch: "16.9"
champion: "aphelios"
role: "bot"
last_updated: "2026-04-29"
description: "Aphelios bot lane guide for League of Legends Patch 16.9: weapon order basics, core marksman build, key matchups, power spikes, mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Aphelios"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Marksman / Weapon Swap"
  abilities:
    - key: "P"
      name: "The Hitman and the Seer"
      description: "Aphelios cycles 5 Lunari weapons in a fixed-then-shifting order. Two are equipped at a time (main-hand + off-hand); each has finite ammo and forces a swap when empty."
      dd_spell_id: "Aphelios_Passive"
    - key: "Q"
      name: "Weapon Abilities"
      description: "Activated ability changes with main-hand: long-range mark (Calibrum), AoE lifesteal sprint (Severum), root all slowed (Gravitum), cone burst (Infernum), sentry turret (Crescendum)."
      dd_spell_id: "ApheliosCalibrumQ"
    - key: "W"
      name: "Phase"
      description: "Instantly swaps main-hand and off-hand weapons. Short cooldown — your damage profile flips with every cast: range, lifesteal, AoE, slow, or attack speed."
      dd_spell_id: "ApheliosW"
    - key: "E"
      name: "Weapon Queue System"
      description: "Aphelios has no real third ability — this slot only displays the next weapon Alune will hand him. Useful for planning combos a few weapons ahead."
      dd_spell_id: "ApheliosE"
    - key: "R"
      name: "Moonlight Vigil"
      description: "Long-range moonlight blast that explodes on champion hit. Applies the unique main-hand effect (extra Calibrum mark shots, AoE attack, lifesteal AoE, etc.)."
      dd_spell_id: "ApheliosR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "E" }
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
    - { dd_id: "3032", name: "Yun Tal Wildarrows" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "vs tanky frontlines (Sion, Ornn, Malphite) — armor penetration that scales with the enemy's bonus HP"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "vs heavy healing (Soraka support, Yuumi, Vladimir, Aatrox) — applies Grievous Wounds to cut healing in half"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "when you need lifesteal and a shield — replace The Collector if the enemy has 2+ assassins targeting you"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs heavy AP burst (Syndra, Veigar, double-mage comp) — shield procs at low HP and gives Magic Resist"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "vs lockdown CC (Malzahar suppression, Skarner R, Mordekaiser R) — active cleanses crowd control on cast"
  base_combo: ["Q", "W", "R", "AA"]
  win_condition: "Reach two-item spike, then cycle Calibrum + Gravitum during fights to lock down a key target with the W swap, R, and Q-root combo while your team commits the engage."
  weakness: "No dash, no escape, and the wrong weapon at the wrong time wastes a fight. Falls behind hard if shut down levels 1-3 before he can stack ammo and items."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["samira", "kalista", "yasuo"]
      archetype: "Short-range marksmen that must commit"
      reason: "Calibrum (the rifle) out-ranges their auto-attack window: they have to step in to trade, and you punish with the long-range Q mark. The W swap to Severum then heals the chip damage they put on you."
    - examples: ["karthus", "seraphine", "heimerdinger"]
      archetype: "Immobile bot-lane scalers"
      reason: "Gravitum (the cannon) slows them on every auto, then the Q roots every slowed target at once. With a level-6 R follow-up, an immobile target eats the full burst before they can finish a channel."
    - examples: ["jinx", "kog-maw", "twitch"]
      archetype: "Hyper-scaling marksmen with weak early"
      reason: "Aphelios's level 1-2 with Calibrum out-trades anyone whose lane phase is just farming. Apply pressure pre-3 items so they never reach their late-game spike."
  counterpicks:
    - examples: ["draven", "lucian", "tristana"]
      archetype: "Aggressive early-game marksmen"
      reason: "Their level 1-3 windows are brutal: short cooldowns and high base damage punish Aphelios while his Q has 9-second cooldown and weapon ammo is finite. He cannot trade back without giving up ammo he needs to push the wave."
    - examples: ["leona", "nautilus", "pyke"]
      archetype: "Hard-engage supports"
      reason: "Aphelios has zero mobility (no dash, no blink). One CC chain from the support and he is dead before he can W-swap to Severum to heal or burn his Flash. Picking him into engage = picking him into death."
    - examples: ["caitlyn", "senna", "jhin"]
      archetype: "Long-range poke marksmen"
      reason: "They out-poke Aphelios at distances even Calibrum cannot answer (Caitlyn traps + headshot, Senna Q from fog, Jhin W root). Aphelios cannot close the gap, so he bleeds HP without committing back."
---

## Overview

Aphelios is a marksman with the longest theoretical kit in League: 5 different weapons that rotate through his hands, each with its own basic attack and its own **Q** ability. You only ever hold two — a main-hand (which dictates your attacks and **Q**) and an off-hand (which fires periodically alongside main-hand attacks). Every weapon has finite ammo (a fixed number of shots): when it runs out, the weapon is discarded and Alune hands him the next one in the queue. Mastery is mostly knowing which weapon is coming next and which two you want active at the right moment.

The game plan is to survive a fragile early game (no dash, no escape, finicky ammo management) until you reach two items, then snowball (turn an early lead into a bigger lead by winning more fights) through skirmishes (small fights of 2-4 players, smaller than a full teamfight) by using **Phase (W)** to swap to whichever weapon punishes the situation: **Calibrum** (the rifle) for poke (chipping the enemy's HP from far away with ranged damage) and execute (finishing off targets already at low HP), **Severum** (the scythe pistol) for sustain (healing and survival in extended fights), **Gravitum** (the cannon) for lockdown (locking an enemy in place with crowd control long enough to kill them), **Infernum** (the flamethrower) for waveclear and team-fight AOE (area of effect: damage on a zone, not on a single target), **Crescendum** (the chakram) for melee-range DPS spikes (sudden bursts of damage per second).

## Recommended Build

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 1 Health Potion. Doran's Blade is the standard starter for marksmen: small Attack Damage (AD) boost, a bit of HP, and lifesteal (you heal for a percentage of the damage you deal with auto-attacks). Aphelios needs every point of AD because his weapons consume ammo.

**Core items (in order):**

1. ![Yun Tal Wildarrows](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3032.png) **Yun Tal Wildarrows** — first item is the meta DPS pick. It gives you crit early (chance for an auto-attack to deal extra damage) and a passive bleed on attacks (damage spread over the next few seconds instead of all on hit), perfect for the rapid-fire weapons (Crescendum, Infernum).
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed boots (more autos per second). Default for almost every Aphelios game because his weapons all benefit from extra attack speed.
3. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — execute under 5% HP plus Lethality (a flavor of armor penetration that ignores a chunk of the target's armor, especially useful against squishy targets — champions with low defenses like ADCs and mages). Pairs with Calibrum mark shots (Calibrum's auto-attacks place a "mark" on the enemy: re-attacking the marked target deals bonus damage from anywhere on the map, including with **R**) that already chunk (deal a big slice of damage to) low-HP targets.
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — crit damage multiplier; with two crit items already (Yun Tal + Collector or Yun Tal + RFC), Infinity Edge unlocks 175% crit damage, and your auto-attacks roughly double in burst output (the damage you put out in a 1-2 second window).
5. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — extra range on your Calibrum auto-attack and on the energized first shot (RFC charges up an "energized" auto every few seconds while moving — that auto fires from extended range and zaps the target). Synergizes with kiting (moving backward while attacking, keeping distance from threats).

**Situational swaps:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — replace Rapid Firecannon when the enemy stacks armor (a frontline of Sion, Ornn, Malphite — frontline = the tanks/bruisers who soak damage at the front of the fight while the carries shoot from behind).
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — same slot as Lord Dominik's, take this version when the enemy team has heavy healing (Soraka, Yuumi, Aatrox, Vladimir): applies Grievous Wounds, which cuts enemy healing in half.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — replace The Collector when you need sustain in a long match or when the enemy team has two assassins targeting your backline (the 7-second shield from full HP can save you once per fight).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — late slot vs heavy AP burst comps (Syndra + Veigar + Annie). The shield triggers under HP threshold — meaning when you fall below 35% HP — and absorbs magic damage.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — final-slot swap when a single CC chain (Malzahar suppression, Skarner R, Mordekaiser R) decides every team fight against you.

**Skill order:** Max **Q** first (raises the damage of every weapon's activated ability), **W** second (faster swap = more flexibility per second), **E** last. Take **R** at levels 6, 11, 16 as usual.

**Runes:** Primary tree **Precision** (built around auto-attacks): **Lethal Tempo** as keystone (extra attack speed when fighting champions), then **Presence of Mind** (mana refund on takedowns — relevant because Q costs ammo), **Legend: Bloodline** (more lifesteal stacking with kills), **Coup de Grace** (extra damage to low-HP targets). Secondary tree **Resolve** with **Second Wind** and **Overgrowth** vs heavy poke lanes (Caitlyn, Senna), or **Inspiration** with **Magical Footwear** and **Cosmic Insight** when you expect a passive lane.

## Key matchups

- **Draven:** Hardest lane on the board. He out-trades you levels 1-3 (he wins every short exchange of basic attacks and abilities) every single time. Stay behind your support, last-hit only with auto-attacks (don't burn Calibrum Q ammo on minions), wait for level 6 to even the trade with **R**.
- **Caitlyn:** Range war. Her traps + headshot out-poke even Calibrum (her ranged damage chips your HP from outside your own range). Swap to **Gravitum** the instant she steps near a trap; the slow (movement-speed reduction) plus your Q root (an effect that locks the enemy in place, unable to move or dash) negates her escape window.
- **Samira:** She wants to dive you (run under your tower to kill you despite the tower shots). Hold **Severum** for the moment she enters melee (close-up auto-attack range) — the AOE Q heals you from her chip damage (small but constant damage that wears down your HP) and your support's CC kills her if she over-commits (steps too far in and can't retreat).
- **Jhin:** He out-pokes pre-6, you out-DPS post-6 (his ranged poke wins in early levels, your sustained damage wins after level 6). Don't trade auto for auto in lane (a "trade" = a brief exchange of hits — his W root and 4th-shot crit are lane-defining); push level 2 hard (force the wave under his tower) and recall (return to base) on first Yun Tal completion to come back ahead.
- **Kalista:** She is squishy and short range. Auto-trade with **Calibrum** main + Severum off-hand; her dash chain forces her into your range, and your Q mark shot punishes her every time she leaps.

## Power spikes & win conditions

- **Level 2:** With one extra weapon ability online, you can match most ADCs in trades. Most Aphelios games are decided by who lands the level-2 all-in (a full-commitment fight where you go for the kill with no fallback option) cleanly.
- **Level 6 with Calibrum:** First **Moonlight Vigil** with the rifle main-hand fires extra long-range mark shots. If the enemy bot lane is shoved to your tower (their wave has been pushed close to your tower, putting them in a vulnerable spot), the **R** + Q execute window from full screen away is a free kill for an alert support.
- **![Yun Tal Wildarrows](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3032.png) Yun Tal Wildarrows completion (~ minute 12-14):** Lane priority flips (you become the lane that can leave to help fights elsewhere without losing CS or HP). You can shove (push your wave to the enemy tower) and contest dragon, your DPS in skirmishes spikes hard (your damage-per-second jumps in a clear step at this item).
- **3-item spike (Yun Tal + Berserker's + The Collector around minute 22-25):** A "spike" is a clear power jump tied to a level or item milestone. Aphelios is now the highest sustained-DPS marksman in the game. Force objective fights here (objectives = Dragon, Baron, Rift Herald, towers — neutral targets that grant team buffs or map pressure) and stand at max Calibrum range while your team frontline holds the line.

## Common mistakes

- **Auto-attacking minions with Calibrum Q ammo.** Save the Q ammo for champions. Calibrum's Q is one of your few long-range threats; burning it on a wave for fast-push (forcing the wave to crash into the enemy tower as fast as possible) only helps if you are recalling on the same back, otherwise the trade you give up is huge.
- **Forgetting to track the next weapon in your queue.** The **E** slot shows the next weapon. Always check before committing: stepping forward as you swap to **Severum** when **Crescendum** is queued behind it is fine; doing the same with **Gravitum** on deck wastes the all-in window (the few-second window in which you can finish the kill).
- **Standing still in team fights.** Aphelios has no dash. If you stand on the same spot two seconds in a row, anything mobile (Zed, Diana, Camille) deletes you. Strafe (move sideways while attacking) between every auto-attack — short steps, but constant motion.
- **Using R the moment it comes off cooldown.** Moonlight Vigil's value depends entirely on which weapon is in your main-hand when you cast. **R** with Crescendum chakrams against a single target is wasted; **R** with Infernum into 4 grouped enemies is a quadra kill.
- **Picking Aphelios into hard engage.** This is a draft mistake, not a gameplay one — "engage" means a champion's tool to force a fight (e.g., Leona's Q stun, Malzahar's R suppression). If the enemy has Leona + Malzahar mid + Hecarim jungle, you will not get to use any weapon. Pick Severum-friendly setups (a peeler support — one whose job is to protect you from divers, like Lulu or Janna) to compensate.

## Advanced tip

Learn the W-cancel timing on **Phase**: queueing a swap during a Calibrum mark shot lets you fire the long-range follow-up auto with the new weapon's effect (e.g., swap to Infernum and the follow-up becomes an AOE cone). This turns Calibrum's mark shot into a multi-target burst that no other marksman can replicate, and it is the single biggest mechanical advantage you have over a casual Aphelios player.
