---
title: "Morgana Support Build & Guide — Patch 16.9"
slug: "morgana-support"
language: "en"
patch: "16.9"
champion: "morgana"
role: "support"
last_updated: "2026-04-29"
description: "Morgana support guide for League of Legends Patch 16.9: control mage build path, Q poke setup, E anti-CC matchups, power spikes, common mistakes, and one advanced tip."
quick_learn:
  champion_dd_id: "Morgana"
  difficulty: 1
  damage_type: "magic"
  champion_class: "Mage / Antimage Support"
  abilities:
    - key: "P"
      name: "Soul Siphon"
      description: "Spell vamp. Morgana heals from a portion of damage she deals to champions, large minions, and medium or larger jungle monsters."
      dd_spell_id: "Morgana_Passive"
    - key: "Q"
      name: "Dark Binding"
      description: "Long-range linear skillshot that roots the first enemy hit and deals magic damage. Long cooldown — use as setup, not poke."
      dd_spell_id: "MorganaQ"
    - key: "W"
      name: "Tormented Shadow"
      description: "Targeted ground zone that ticks magic damage per second, increased on low-HP targets. Main waveclear and zone tool."
      dd_spell_id: "MorganaW"
    - key: "E"
      name: "Black Shield"
      description: "Targeted shield on an ally that absorbs magic damage and fully blocks crowd control until it breaks."
      dd_spell_id: "MorganaE"
    - key: "R"
      name: "Soul Shackles"
      description: "Chains all nearby enemy champions, slowing and damaging them. After 1.5s, anyone still close is stunned and damaged again."
      dd_spell_id: "MorganaR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "E" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "W" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "6653", name: "Liandry's Anguish" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
  situational_items:
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC (Ahri charm, Lissandra R, Twisted Fate stun) — passive bubble eats one ability"
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "vs hard CC on your AD carry that your E cannot pre-empt (chain-stuns, multi-target hooks)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "vs heavy AOE burst comps (Yone R, Kennen R, Orianna R) — instant team-wide shield active"
    - dd_id: "3107"
      name: "Redemption"
      against: "in long objective fights (Drake, Baron) — cross-map AOE heal that does not need you in range"
  base_combo: ["Q", "W", "AA", "R"]
  win_condition: "Land Q on a key engage target during objective fights, drop W on top of them, then R the cluster while E shields your AD carry through the chain stun."
  weakness: "Q is your only setup tool: if it misses, you contribute almost nothing for 10s. Slow Move Speed and no dash mean a flank or hook on you ends the fight."
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
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["leona", "rakan", "nautilus", "rell"]
      archetype: "Hard engage supports that rely on a single CC chain"
      reason: "Black Shield blocks the entire chain in one cast: their flash-engage lands on a shielded carry who walks out and trades back, denying the kill the enemy bot lane is built around."
    - examples: ["malzahar", "skarner", "warwick"]
      archetype: "Champions with a long-channel suppression or single-target lock"
      reason: "Black Shield prevents the channel from ever applying. Cast it pre-emptively the moment they walk in range and the ultimate goes on cooldown for nothing."
    - examples: ["jhin", "caitlyn", "ashe"]
      archetype: "Immobile AD carries with strong basic attacks"
      reason: "A stationary marksman pairs well with Q setup: you root the enemy in place, your AD carry walks up free auto-attacks, and Black Shield covers the return engage."
  counterpicks:
    - examples: ["yuumi", "milio", "soraka"]
      archetype: "Mobile or untargetable enchanters that dodge Q"
      reason: "Yuumi attaches and is untargetable; Milio and Soraka kite at the back of the wave. Without a Q hit Morgana has no pressure, and her W damage is too slow to force a real trade."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "Long-range mage supports that out-poke from beyond Q range"
      reason: "Their poke is faster than Morgana's. Black Shield only blocks one ability per cooldown cycle, so consistent skillshot harass bleeds your bot lane out of range of any all-in answer."
    - examples: ["pyke", "thresh", "blitzcrank"]
      archetype: "Roaming or hook supports that punish weak Move Speed"
      reason: "Morgana has no dash and a short E cast range: a missed Q means a free hook on you, and roams catch you because you cannot rotate fast around the map."
---

## Overview

Morgana is a control mage support (a mage whose role is to lock enemies in
place and zone space, instead of bursting them down) whose entire identity is
built around two buttons: **Dark Binding (Q)** to lock a target in place, and **Black Shield (E)**
to wipe enemy crowd control off your AD carry (the bot-lane ranged carry — the
champion that scales with items and does most of the team's damage in fights).
Around those two she layers **Tormented Shadow (W)** as a damage-over-time zone,
**Soul Shackles (R)** as a delayed AOE stun (area of effect: a damage or effect
that hits a zone, not a single target), and **Soul Siphon** as passive spell
vamp (a small heal off the damage she deals).

Her game plan is calm and binary. In lane you pressure with Q poke and W zone
control; in fights you play the role of "antimage support" — the support
specifically built to neutralize one key piece of enemy CC. Black Shield is the
core verb: it blocks magical disables (stuns, roots, charms, fears, suppressions)
the moment they would land. Cast it on the right ally at the right time and an
entire enemy engage attempt does nothing. Miss the timing and you are a slow
mage with one skillshot.

## Recommended Build

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (the support starter that quests into more gold income) plus 2 Health Potions. Skip damage starters — Morgana scales off Ability Power and Ability Haste, not lane kill snowball.

**Core items (in order):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — auto-quests into Bounty of Worlds, then a support legendary later. Stacks gold and ward charges automatically while you focus on lane.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration. Your W and R damage spike noticeably against any squishy target who has not built Magic Resist.
3. ![Liandry's Anguish](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Anguish** — burn passive (extra damage spread out over the next few seconds, instead of all at once) that pairs perfectly with W's tick damage. Also gives Ability Haste so you spam Q and shield more often.
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — every spell now slows the target. Means anyone who steps on your W is also slowed, making your Q follow-up almost impossible to dodge.
5. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 2.5s stasis on activation. The classic Morgana use case: cast R, instantly stasis. The stun chains keep ticking while you are untargetable.

**Situational items:**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — into heavy single-target magic CC (Ahri charm, Lissandra R, Twisted Fate gold card). Passive bubble eats the one ability that would otherwise lock you down before you cast R.
- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — when the enemy has hard CC your Black Shield cannot pre-empt (chain-stuns, multi-target hooks). Active cleanses the CC off an ally.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — vs heavy AOE burst comps (Yone R, Kennen R, Orianna R). Active gives an instant team-wide shield, saves the back line.
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — when fights drag on around Drake or Baron. Cross-map AOE heal you can drop without standing near the fight.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** is default — your job is to deal magic damage through your zone and chain stun. Ionian Boots of Lucidity is acceptable if your team needs more shield uptime than burn damage.

**Skill order:** Max **W** first (best damage scaling and the tool you spam every wave), **Q** second (more root duration and damage), **E** last (the shield strength scales fine but the cooldown reduction matters less once you have Ability Haste from items). Take **R** at levels 6, 11, 16. Start **W** at level 1 to clear the first wave or zone the enemy off it.

**Runes:** Primary **Sorcery** with **Arcane Comet** (free poke damage that triggers when you land Q or tag with W), **Manaflow Band** (mana sustain so you can spam W every wave), **Transcendence** (Ability Haste at level 11, key power spike), **Scorch** (extra Q poke damage early). Secondary **Resolve** with **Font of Life** (when you root with Q, allies attacking the rooted target heal — pairs perfectly with Q setup) and **Overgrowth** (small permanent HP scaling for the late game). Stat shards: Ability Haste, Adaptive Force, Health Scaling.

Glacial Augment from **Inspiration** is a valid alternative keystone if your team has multiple slow-stacking effects (Rylai's, Ashe W) — your W applies the slow that Glacial then doubles down on.

## Key matchups

- **Leona / Rakan:** Save E for the moment they engage. Their entire combo is one CC chain — Black Shield blocks all of it in one cast. Never burn E pre-emptively for the bonus shield value: hold it until you see the dash animation start.
- **Blitzcrank / Thresh:** Hook supports. Stand behind minions whenever you cross the river. Pre-shield your AD carry the moment you see the hook windup and the entire grab is voided. If the hook lands on you instead, you have no escape.
- **Xerath / Brand:** Long-range mage supports that out-poke you. Hug the wave, do not trade auto-attacks, and let your jungler hard-side the lane. Build ![Liandry's Anguish](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Anguish** before any defensive item — your only answer is to push and roam.
- **Pyke:** Roaming threat with execute ult. Track him with vision in tri-bush and river entry; when he leaves bot lane, ping mid immediately. Black Shield blocks his hook stun, so a pre-cast onto your AD carry can save the lane if you read the engage in time.
- **Yuumi:** Untargetable enchanter you cannot land Q on. Force every fight through her host: if you root the AD carry, Yuumi's healing cannot save them through your W zone. Bait her R early with a feinted engage, then commit when it is on cooldown.

## Power spikes & win conditions

- **Level 2:** With **W** at 1 and **Q** at 2, you have your full lane kit. Most engage supports lose the level-2 trade because their windup is slower than your skillshot setup.
- **Level 6:** First **Soul Shackles** unlocks. Combined with Flash, this is one of the strongest engage tools in bot lane — Flash forward, R the enemy bot lane, Q the AD carry as they try to walk out of chain range.
- **![Liandry's Anguish](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Anguish completion (~ minute 14-16):** Your W now burns on top of its native damage. Standing in the zone for the full duration deletes squishy targets, even without a Q root.
- **![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) Rylai's Crystal Scepter + ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) Zhonya's Hourglass online (~ minute 22-26):** Your R becomes near-guaranteed to stun. Cast R, stasis on Zhonya, the slow from Rylai keeps them in chain range while the stun resolves. This is your team-fight peak.

## Common mistakes

- **Throwing Q for poke without setup.** Naked Q at max range is easy to dodge — the enemy sees the long skillshot animation and side-steps. Drop **W** under their feet first to slow them, then **Q** the path they have to walk through. Wasted Q means 10 seconds of nothing.
- **Pre-casting E for the bonus shield value.** Black Shield's whole job is to block one specific incoming ability. Cast it before the enemy commits and they simply wait for it to expire. Hold E until you see the dash, hook, or charm animation start — then react.
- **Using R as an initiation tool against mobile teams.** Soul Shackles has a 1.5s delay before the stun resolves. Mobile champions (Yasuo, Akali, Lee Sin) just dash out of range during the delay. Use R as a follow-up on already-rooted or grouped targets, not as a flashy engage opener.
- **Standing too far back in fights.** Your R only chains champions within roughly 600 units. If you peek from behind your team, you contribute zero ult damage. Stand within R range of the cluster, second-line — closer than instinct tells you.
- **Auto-attacking minions for damage.** Morgana's basic attacks are weak and do not push the wave faster than W. Pushing with autos gives the enemy a free harass window without any damage benefit for you.

## Advanced tip

Practice the **R-Flash** combo. Cast Soul Shackles first, then Flash mid-channel onto the enemy back line. The chains were already attached when you cast — Flash repositions you, but the chain anchor points snap to your new location, instantly catching enemies who thought they were safe behind their front line. Pair this with Zhonya's stasis the moment Flash lands and the stun resolves while you are untargetable. The cost is your **Flash** for the next 5 minutes, so only spend it when the kill, or breaking the enemy team, is locked in.
