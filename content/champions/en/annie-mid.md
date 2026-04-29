---
title: "Annie Mid Build & Guide — Patch 16.9"
slug: "annie-mid"
language: "en"
patch: "16.9"
champion: "annie"
role: "mid"
last_updated: "2026-04-29"
description: "Annie mid lane guide for League of Legends Patch 16.9: Pyromania stun setup, burst build path, key matchups, power spikes, common mistakes, and a closing pro tip."
quick_learn:
  champion_dd_id: "Annie"
  difficulty: 1
  damage_type: "magic"
  champion_class: "Mage / Burst"
  abilities:
    - key: "P"
      name: "Pyromania"
      description: "Every 4th spell cast charges Pyromania: the next damage spell stuns the target. Annie starts and respawns with the stun ready — load the counter on minions before all-ins."
      dd_spell_id: "Annie_Passive"
    - key: "Q"
      name: "Disintegrate"
      description: "Point-and-click 625-range fireball. Refunds mana and resets 50% of cooldown if it kills the target — cheapest poke and last-hit tool in the kit."
      dd_spell_id: "AnnieQ"
    - key: "W"
      name: "Incinerate"
      description: "600-range cone of fire. Main waveclear (clears the full caster minion line in one cast) and the highest base damage spell on her bar at rank 5."
      dd_spell_id: "AnnieW"
    - key: "E"
      name: "Molten Shield"
      description: "Targeted shield + decaying movement speed on Annie or an ally. Returns magic damage on the next attacker. Counts as a spell cast — top up Pyromania before engaging."
      dd_spell_id: "AnnieE"
    - key: "R"
      name: "Summon: Tibbers"
      description: "Point-blank 600-range AOE damage that summons Tibbers, a bear that auto-attacks and burns nearby enemies. The cast itself is a spell, so a 4-stack Pyromania R stuns everyone hit."
      dd_spell_id: "AnnieR"
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
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs mobile assassins and divers (Zed, Diana, Talon, Akali) — stasis lets you survive after committing R + Flash"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "vs kite-heavy comps without hard CC — slow on R + W locks targets inside Tibbers' aura"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC (Lissandra R, Twisted Fate stun, Ahri charm)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap when any priority target finishes a Magic Resist item"
  base_combo: ["Q", "W", "E", "AA", "R"]
  win_condition: "Stack Pyromania to 4 on minions, walk up with Flash + R for a point-blank AOE stun on grouped enemies, and burst the squishy back line with Luden's Companion + Shadowflame."
  weakness: "Low base mobility, 600-625 spell range. Out-poked by artillery mages and out-mobiled by assassins who dash through R range before the stun lands."
matchup_draft:
  pick_into:
    - examples: ["veigar", "cassiopeia", "anivia", "karthus"]
      archetype: "Immobile mages without dash"
      reason: "Annie's R is a point-blank 600-range AOE stun + Tibbers DPS. Mages without a dash or stealth eat the whole combo on the level 6 all-in and cannot answer in time."
    - examples: ["diana", "katarina"]
      archetype: "Telegraphed melee burst with slow tell"
      reason: "Annie pre-stacks Pyromania during waveclear, so the moment they commit to gap-close range her Flash + R stun interrupts their combo before the damage lands."
    - examples: ["fizz", "kassadin"]
      archetype: "Melee mages weak before 6"
      reason: "Both have to walk into Q range to farm pre-6: Annie pokes them freely, holds level 2 with stacked Pyromania, and forces a back without giving them a counter-engage tool."
  counterpicks:
    - examples: ["xerath", "vel-koz", "lux"]
      archetype: "Long-range artillery mages"
      reason: "They poke Annie from 850-1400 range while she sits at 625. She has no dash or shield against ranged poke and bleeds HP every wave without an option to commit back."
    - examples: ["zed", "akali", "yasuo"]
      archetype: "High-mobility assassins post-6"
      reason: "Their dashes or stealth windows leave the 600 R radius before her stun lands. Akali's shroud and Yasuo's Wind Wall directly eat her main spells."
    - examples: ["twisted-fate", "galio"]
      archetype: "Global / cross-map roamers"
      reason: "Annie has no roam range — she clears waves and stays in mid. Their ult flips side lanes and dragons, so Annie loses the macro game even when she wins her 1v1."
---

## Overview

Annie is the simplest burst mage in the game (a champion that deals high magic damage concentrated in 1-2 seconds, then waits for cooldowns) and one of the strongest at punishing mistakes around level 6. Her kit looks tiny on paper — a point-and-click Q, a cone W, a self-or-ally shield, and a summon ult — but her passive **Pyromania** glues it together: every 4th spell cast charges a guaranteed stun on the next target hit. That single mechanic turns a beginner-friendly champion into a guaranteed-stun threat that can delete a squishy back line (the carries positioned at the rear of their team in a fight) in one button press once Tibbers comes out.

Her game plan is the same in lane and in teamfights: load **Pyromania** to four charges on minions, walk up to 600 range, and trigger the charge on the highest-value enemy with **R** (Tibbers), then **W** and **Q**. Two judgement calls separate a good Annie from a great one: knowing **when to keep the charge ready** (don't burn it on a minion right before you commit — fully engage in — a fight) and **how to land R** (Flash + R is one of the most reliable engage tools — abilities that start a teamfight — in the game on a grouped team).

## Recommended Build

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** (gives extra mana so Annie can keep casting Q and W early) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions** (heal HP over time during lane). The ring fuels her opening trades; the potions sustain through poke (long-range chip damage from the enemy mage).

**Core items (in order):**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — first-item burst spike (a "power spike" is the moment a champion gets noticeably stronger thanks to a level-up or item completion). Annie's combo is short, so the bonus damage on first spell hit lines up perfectly with **R + W** on a stunned target.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration boots. Your kills come from squishy targets with low magic resistance, and flat penetration scales harder than percent at this stage.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — extra burst with an HP-threshold passive (bonus magic damage when the enemy is below ~35% HP). Cheap finisher that turns Annie's R + W from "almost lethal" into a one-shot.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — late-game multiplier (+30% total AP, where AP / Ability Power is the stat that scales every Annie spell). When this comes online, Annie's R combo deletes grouped enemies, not just single squishies.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — into mobile assassins and divers (Zed, Diana, Talon, Akali). After the R + Flash engage, activate stasis (the active that turns you invulnerable for 2.5 seconds): you survive while your team follows up.
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — into kite-heavy comps without hard CC (squads that move backward while attacking, keeping distance). The slow on R + W pins targets inside Tibbers' burning aura.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — into single-target magic CC (Lissandra R, Twisted Fate stun, Ahri charm). The shield blocks the engage spell so you keep your **Flash** for offence.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — swap into your build the moment any priority target finishes a Magic Resist item.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** is default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** are an alternative when the team needs more **R** uptime as a teamfight starter.

**Skill order:** Max **Q** first (lowest cooldown, mana-refunding on kill, your primary trade tool — short exchange of damage in lane). Max **W** second (waveclear, the act of clearing the enemy minion wave; W has the highest base damage at rank 5). Max **E** last (utility, doesn't scale hard with rank). Take **R** at levels 6, 11, 16.

**Runes:** Primary tree **Sorcery** (the magic-damage tree) with **Arcane Comet** (extra magic damage projectile when you hit a champion), **Manaflow Band** (your max mana grows when you hit spells), **Transcendence** (cooldown reduction at levels 5, 8, 11), **Scorch** (extra burn damage on the next spell every ~10 seconds). Secondary tree **Inspiration** with **Biscuit Delivery** (free mana/HP biscuits in lane) and **Cosmic Insight** (more **Flash** and **R** uptime in mid game).

## Key matchups

- **Yasuo / Yone:** They Wind Wall your **Q** and **W** (the wall ability that blocks projectiles). Bait Wind Wall with a low-stack **Q** (1-2 Pyromania charges so the stun isn't ready), then walk up with full stacks once Wind Wall is on cooldown — its downtime is long and they cannot keep both your **Q** and your engage off.
- **Lux:** Outranges you at 1100 with her **Q**. Do not chase her; clear waves at safe range with **W**, look to roam (leave lane to help allies elsewhere) the moment you finish ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion**, and let your jungler punish her lack of escape on a counter-gank.
- **Veigar:** Favorable. He needs to stack **Q** on minions for AP and lacks a dash; pre-stack Pyromania, walk up at level 6 with **Flash + R**, and you stun him out of his **E** cage before he can lock you down.
- **Twisted Fate:** Race for who roams (leaves lane to help allies in another lane) first. Push waves with **W** on cooldown. When his **R** comes up, ping the mid lane "mia" (missing in action) for your team and rotate (move with the wave) to whatever side lane he targets with your own ult ready — a 2v2 fight at full Pyromania is a guaranteed kill.
- **Diana:** Pre-6 she is glass (low defenses, dies fast); harass her with point-and-click **Q** every time she walks up to last-hit. At 6, hold full Pyromania stacks: when she **R**-pulls onto you, your **R + W** stuns her before she can recast for the second jump.

## Power spikes & win conditions

- **Level 2:** With **Q** + **W** on the bar plus Pyromania ready, you have a short all-in (full commitment fight where neither side can disengage) that beats most ranged mages who don't expect the level 2 stun. If the enemy walks up for a cs (creep score: last-hitting a minion to take its gold) right after you both hit level 2, walk forward and trade.
- **Level 6 + Flash:** First **R** with **Flash** is your largest single-fight power spike of the game. A grouped wave fight is a free double kill if the enemy jungler is across the map.
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion completion (~ minute 11-13):** Burst threshold flips. Your **R + W + Q** combo on a stunned squishy is now lethal without follow-up from the team.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minute 24-28):** Tibbers' aura damage plus the AOE on the cast itself becomes a teamfight nuke (one cast that wipes multiple targets at once); force objective fights here and look for **Flash + R** on 3+ grouped targets.

## Common mistakes

- **Burning the 4th Pyromania stack on a minion right before an all-in.** Always check the stack counter under your portrait before walking into trade range. If it is at 3 and you cast **W** for waveclear, you just gave your guaranteed stun to a caster minion.
- **Casting R without Pyromania ready.** **R** without the stun does damage but lets the target walk out of Tibbers' aura. If Pyromania isn't loaded, top it up by casting **E** on yourself before you commit.
- **Standing at max R range during the cast.** **R** is 600 range, the same as Annie's auto-attack. Use **Flash** to close the last 200-400 units onto a grouped team rather than casting from the edge — at the edge, only the closest enemy gets stunned and the rest walk out.
- **Skipping ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes for a flat-AP item.** Annie's burst kills only when MR is low; rushing more AP without flat magic penetration leaves squishies at 50 HP instead of 0 and turns guaranteed kills into chases.
- **Q-spamming without watching mana.** **Q** only refunds its mana **on kill**. If you Q a 200 HP minion and it doesn't die, you paid 60-80 mana for nothing. Use **Q** on near-execute minions or on champions, not as a poke when they are full HP and a creep over.

## Advanced tip

Practice the **Flash + R animation cancel** (a trick that uses **Flash** during the cast frame instead of waiting for it to finish): the moment you press **R**, press **Flash** in the same direction (the input gets buffered mid-cast). The cast point of **R** is short enough that **Flash** repositions you onto the target before the AOE resolves — it lets you stun a back line sitting at 800 range as if you were 600 from the start. Most novices learn the combo as "press **R**, then react to where it landed"; the animation cancel turns it into a 700-unit gap-close (a sudden short-distance teleport) that is almost impossible to dodge.
