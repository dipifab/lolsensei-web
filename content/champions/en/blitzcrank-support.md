---
title: "Blitzcrank Support Build & Guide — Patch 16.9"
slug: "blitzcrank-support"
language: "en"
patch: "16.9"
champion: "blitzcrank"
role: "support"
last_updated: "2026-04-29"
description: "Blitzcrank support guide for Patch 16.9: hook timings, ward setups, engage build path, key matchups, power spikes, and common mistakes for new players."
quick_learn:
  champion_dd_id: "Blitzcrank"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Tank / Engage"
  abilities:
    - key: "P"
      name: "Mana Barrier"
      description: "When dropping to low health, gain a shield based on current mana. Encourages keeping a full mana bar before fights."
      dd_spell_id: "Blitzcrank_Passive"
    - key: "Q"
      name: "Rocket Grab"
      description: "Long linear skillshot: pull the first enemy hit toward you (a 'hook' — a grab that yanks the target). Cooldown is long, so a missed hook is a 16-20 second window with no engage."
      dd_spell_id: "RocketGrab"
    - key: "W"
      name: "Overdrive"
      description: "Self-buff: large move speed and attack speed, then a slow at the end. Use to close gaps before Q or to chase after E knock-up."
      dd_spell_id: "Overdrive"
    - key: "E"
      name: "Power Fist"
      description: "Charge your next basic attack to knock the target up briefly. Range is melee — Blitz must already be next to the target."
      dd_spell_id: "PowerFist"
    - key: "R"
      name: "Static Field"
      description: "Active: damage and silence (no spellcasts) to enemies around you. Passive: a charge ticks lightning damage on the next basic attack."
      dd_spell_id: "StaticField"
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3876", name: "Solstice Sleigh" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3050", name: "Zeke's Convergence" }
    - { dd_id: "3109", name: "Knight's Vow" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs heavy crowd control or AP burst (Lux, Morgana, Ahri) — magic resist plus tenacity (faster recovery from CC)"
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "vs hard CC on your carry (Morgana Q, Ashe R, Leona engage) — active cleanses a stun off the ADC"
    - dd_id: "3107"
      name: "Redemption"
      against: "vs poke comps (Xerath, Caitlyn, Senna) — area heal during teamfights replaces lost trade HP"
    - dd_id: "3158"
      name: "Ionian Boots of Lucidity"
      against: "when you want more hooks per fight — Ability Haste shaves seconds off Q so a missed hook hurts less"
  base_combo: ["Q", "W", "AA", "E", "R", "AA"]
  win_condition: "Land a Rocket Grab on a priority target (enemy ADC or backline mage) and finish them with the W-AA-E-R chain before their team can peel (protect the carry from incoming damage)."
  weakness: "If Q misses, you have 16-20 seconds with almost no engage. Lanes with disengage (Janna, Lulu) or hook-blockers (minions, body-blocking tanks) shut the kit down."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Ability Haste"
      - "Health Scaling"
      - "Health"
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "jinx", "ezreal"]
      archetype: "Static-positioning ADCs without dashes"
      reason: "Their auto-attack range forces them to stand on a predictable line behind minions; a hook around the cannon minion arc lands cleanly because they have no instant escape."
    - examples: ["soraka", "janna", "yuumi"]
      archetype: "Squishy enchanters with low base health"
      reason: "Pulling the enchanter out of position deletes the lane: their carry has no peel and a Q-W-E-R combo on a 500 HP target ends the trade."
    - examples: ["xerath", "vel-koz", "zyra"]
      archetype: "Stationary mage supports"
      reason: "They cast from far back to poke; a max-range hook on the casting frame grabs them before they can flash, and your team gets a free 4v5 around them."
  counterpicks:
    - examples: ["thresh", "nautilus", "leona"]
      archetype: "Engage tanks who win the hook race"
      reason: "If they hook or charge first, your Q animation gets interrupted and your teammate eats the chain CC — hook-vs-hook lanes punish whoever telegraphs the cast."
    - examples: ["janna", "lulu", "morgana"]
      archetype: "Disengage and CC immunity"
      reason: "Janna Q tornado knocks you out of E range; Lulu W slows or polymorphs the engage; Morgana Black Shield blocks the hook entirely."
    - examples: ["alistar", "tahm-kench"]
      archetype: "Self-peeling bruisers"
      reason: "After a successful hook they can headbutt or devour their own ADC away; the pull does not commit the kill, so the long Q cooldown becomes a punish window."
---

## Overview

Blitzcrank is a tank-engage support whose entire game revolves around landing one ability: **Rocket Grab (Q)**. The hook (a grab that yanks an enemy toward you) starts every fight in this kit. Land it, and the bot lane is a 2v1 for two seconds; miss it, and you have a 16-20 second cooldown with almost no engage. He scales off cooldown reduction (called "Ability Haste") and a tank build because his job is to walk forward, hook, knock-up, and survive long enough for his ADC to clean up.

Game plan in one sentence: ward the bushes, watch the enemy ADC's footwork, throw **Q** when they step onto a predictable path, then chain **W** (move-speed self-buff) into auto-attack into **E** (knock-up) into **R** (silence and area damage). Outside of fights, your job is vision: place wards in the river and tri-bush so your jungler and mid laner know when the enemy is missing.

## Recommended Build

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions** + ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) **Stealth Ward** trinket. Buy a ![Control Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2055.png) **Control Ward** on every back from the second back onward.

**Core items (in order):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — support starter. Gives gold passively and upgrades automatically into ![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) **Solstice Sleigh** once you hit the gold threshold (around minute 12-15).
2. ![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) **Solstice Sleigh** — the warden upgrade of the support starter. Health, Ability Haste, and an aura that slows the enemy you immobilize: it lines up perfectly with your **E** knock-up.
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — armor boots vs auto-attack-heavy bot lanes (most ADCs); swap to ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** vs heavy crowd control.
4. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — area shield active. After you hook and your team commits, pop Locket as the enemy team's burst is mid-cast; it absorbs the spike and turns a coin-flip fight into a clean win.
5. ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — bind the passive to your ADC. After your **R** detonates, your ADC gets a damage buff on every hit for a few seconds.
6. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — late-game peel item (peel = protect the carry from incoming damage): redirects part of the damage your ADC takes onto you. Pairs with your tank stack and means you can run into the back line to body-block (stand in a path to soak hits aimed at an ally).

**Situational items:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — vs hard CC on your carry (Morgana Q, Ashe R, Leona engage). Active cleanses a stun off your ADC mid-fight.
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — vs poke comps (Xerath, Caitlyn, Senna): area heal during teamfights replaces the HP you bled trying to walk up.
- ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — when you want more hooks per fight; Ability Haste shaves seconds off **Q** so a missed hook hurts less.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** is the default vs most bot lanes. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** vs AP burst or stuns; ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** if you trust your hooks and want them on cooldown faster.

**Skill order:** Max **Q** first (hook is the kit), **E** second (knock-up scales with rank), **W** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Resolve** with **Aftershock**, **Font of Life**, **Bone Plating**, **Overgrowth**. Aftershock gives you a burst of armor and magic resist after you immobilize someone — it triggers exactly on your **Q** pull, so the moment you become a target, you tank the return damage. Secondary **Inspiration** with **Biscuit Delivery** and **Cosmic Insight**. Alternative: **Inspiration** primary with **Glacial Augment** if you prefer a poke-and-slow lane (less common but viable into immobile enchanters).

## Key matchups

- **Caitlyn / Janna:** Caitlyn places traps in bushes you would walk through to hook. Buy a ![Control Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2055.png) **Control Ward** for the lane bush and check it before stepping; Janna's Q tornado cancels your Q animation, so wait for her to use it on a wave before throwing yours.
- **Thresh / Nautilus:** Hook-vs-hook lane. Whoever throws first usually loses because the second hook is a free response. Use minions as body-blocks: stand behind the cannon minion, force them to commit, then punish on their cooldown.
- **Lulu / Yuumi:** They scale with their ADC and have no engage. You have lane priority — throw safe-ish hooks, but more importantly roam to mid lane around level 4-6 with **W** active. A cross-map hook on a mid laner pushing too far is the highest-value play in the game for Blitz.
- **Morgana / Lux:** Both can stop your hook with a long-range root. Morgana E (Black Shield) eats your **Q** entirely. Force her to use it on the wave first by faking a hook — sidestep, then commit when her shield is on cooldown.
- **Ezreal / Senna:** They poke without committing forward. The lane plan is not "hook the ADC every 16 seconds" — it is "deny vision so your jungler can gank". Place ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) **Stealth Wards** on the river entrance and ping for a gank when Ezreal flashes a wave.

## Power spikes & win conditions

- **Level 2 (Q + W):** First hook power spike. With **W** up, you can chase the pull a few extra steps before the slow kicks in — that often turns a hook into a kill instead of a 50% HP trade.
- **Level 6 (R unlocked):** Your all-in becomes a guaranteed kill on most ADCs. The combo is **Q** → **W** → auto-attack → **E** knock-up → **R** silence and damage. The silence means the enemy support cannot **Flash**-disengage you off their carry.
- **![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) Solstice Sleigh completion (~ minute 12-15):** The warden upgrade of your starter unlocks the team-fight version of your kit: every immobilize you land slows the target for your ADC.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari completion (~ minute 22-26):** Now you can engage onto a 5-stack mid game without the back line getting bursted. This is the spike where you start looking for ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** roams to objectives.

## Common mistakes

- **Throwing Q on cooldown without setup.** A hook with no follow-up is wasted: if you pull a target your team cannot reach, you just gave the enemy a free 16-20 seconds. Throw **Q** only when your ADC is in range to commit (an "all-in" — full damage chain to the kill, no walking back).
- **Telegraphing the hook animation.** Blitz raises his arm with a clear cast animation before **Q** fires. Decent enemies sidestep on the wind-up. Throw **Q** from inside a bush, from fog of war (the dark unrevealed parts of the map where the enemy cannot see you), or while the enemy is stuck animating their own ability so they cannot react.
- **Hooking the wrong target.** Pulling the enemy tank or bruiser is almost always bad — it gives the enemy team a free engage on you. Always look for the squishy target ("squishy" — high-damage low-defense champion like an ADC or mage) before committing **Q**.
- **Forgetting passive mana cost.** Your shield (passive **Mana Barrier**) scales with current mana, so backing at low mana is a 30% defensive nerf for the next fight. Back when **Q** is on cooldown and your mana is below 40%, not when you feel like it.
- **Using R only for damage.** **Static Field** is more useful as a silence (a brief block on enemy spellcasts) than as damage. Save it for when the enemy support is mid-channel on a key ability — that interrupt is worth more than the burst at 200 HP enemies.

## Advanced tip

The strongest hook setup in the game is the **bush-fog hook**. Walk into the lane bush behind your wave, where the enemy cannot see you. Wait for the wave to push so the enemy ADC steps forward to last-hit (kill a minion for gold) on the cannon minion. Throw **Q** through the bush wall — they have no animation to read, no time to sidestep, and your hand crosses the bush before they realize you cast. Combine with **W** active so you close the gap before their support's flash comes up. This single pattern is responsible for most of the lane kills Blitzcrank gets above the bronze rank threshold.
