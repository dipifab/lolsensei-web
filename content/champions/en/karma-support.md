---
title: "Karma Support Build & Guide — Patch 16.9"
slug: "karma-support"
language: "en"
patch: "16.9"
champion: "karma"
role: "support"
last_updated: "2026-04-29"
description: "Karma support guide for League of Legends Patch 16.9: enchanter build, runes, key matchups, power spikes, common mistakes, and a closing tip for novice players."
quick_learn:
  champion_dd_id: "Karma"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Enchanter"
  abilities:
    - key: "P"
      name: "Gathering Fire"
      description: "Hitting an enemy champion with a damaging ability or basic attack reduces Mantra's cooldown. Stay active in trades to keep R ready."
      dd_spell_id: "Karma_Passive"
    - key: "Q"
      name: "Inner Flame"
      description: "Linear skillshot that explodes on first hit, damaging and slowing enemies in a small area. Main poke tool in lane."
      dd_spell_id: "KarmaQ"
    - key: "W"
      name: "Focused Resolve"
      description: "Tether on a target enemy. If unbroken after the duration, deals damage twice and roots them. Walking range matters."
      dd_spell_id: "KarmaSpiritBind"
    - key: "E"
      name: "Inspire"
      description: "Targeted shield on an ally with a brief Move Speed buff. Use on the ADC to disengage or to chase a kill."
      dd_spell_id: "KarmaSolKimShield"
    - key: "R"
      name: "Mantra"
      description: "Empowers your next Q, W, or E. RQ adds a delayed AOE detonation, RW heals Karma and roots longer, RE shields nearby allies and gives bigger speed boost."
      dd_spell_id: "KarmaMantra"
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3107", name: "Redemption" }
  situational_items:
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs heavy heal comps (Soraka, Yuumi, Vladimir, Dr. Mundo): cuts enemy healing on your damaging spells."
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "vs AOE burst (Yasuo + Malphite, Orianna ult): the team-wide shield blocks the wombo combo."
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC casters (Blitzcrank hook, Morgana Q, Twisted Fate stun)."
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs assassins targeting you (Zed, Talon, Akali): the 2.5s stasis lets your team peel."
    - dd_id: "4005"
      name: "Imperial Mandate"
      against: "when the team needs more damage from your poke and your ADC plus jungler land follow-up consistently."
  base_combo: ["W", "RQ", "AA", "E"]
  win_condition: "Bully the bot lane with Q poke from level 1, set up kills with W root and Mantra-empowered Q (RQ) zone, then peel the ADC with E and RE shields in teamfights."
  weakness: "Squishy enchanter with no dash. Hard-engage supports (Leona, Nautilus, Rell) can lock you before you tether W, and missed Q means you trade health for nothing."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8214
      name: "Summon Aery"
      icon_path: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
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
      - "Ability Haste"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["zyra", "brand", "xerath"]
      archetype: "Immobile mage supports"
      reason: "Karma's Q range matches theirs and her E shield negates their poke, so she wins extended trades by healing the gap they cannot close."
    - examples: ["soraka", "sona", "yuumi"]
      archetype: "Passive enchanters without hard CC"
      reason: "They cannot punish a missed Q, so Karma free-pokes the ADC and snowballs the lane before they hit their item spike."
    - examples: ["draven", "kalista"]
      archetype: "Aggressive lane-bully ADCs that need pokeable supports"
      reason: "Karma E on her own ADC absorbs their all-in burst, then Q-RQ trades back stronger because Aery procs on every spell."
  counterpicks:
    - examples: ["leona", "nautilus", "rell"]
      archetype: "Hard-engage tanks with point-and-click CC"
      reason: "Their stuns hit before Karma's W tether locks, so she eats the engage without getting her root off and dies before E can save her ADC."
    - examples: ["pyke", "thresh", "blitzcrank"]
      archetype: "Hook supports with long range"
      reason: "Karma has no dash to dodge a clean line skillshot; one hook on her at level 2-3 ends the lane because she has no escape tool."
    - examples: ["alistar", "rakan"]
      archetype: "Mobile peeler-engagers"
      reason: "They blink onto Karma faster than she can cast Q or E, and they peel through her root with their own knock-ups before W ticks."
---

## Overview

Karma is an enchanter-poke hybrid support: an enchanter is a champion built around healing and shielding teammates, and "poke" means whittling the enemy's HP from range without committing to a full fight. She pokes with **Inner Flame (Q)**, locks targets with **Focused Resolve (W)**, and protects her ADC (the ranged carry next to her in bot lane) with **Inspire (E)**. Her ultimate **Mantra (R)** is not a separate spell but an empowerment that adds an extra effect to the next Q, W, or E. Because Mantra is available from level 1, Karma is one of the few champions that "has her ult" on the very first cast in lane — every basic attack on a champion shaves seconds off the cooldown thanks to her passive **Gathering Fire**.

The game plan is to win the bot lane through Q poke on cooldown, fish for a root (a "root" stops the enemy from moving for a short time) with W when the enemy steps up to last-hit a minion, and shield the ADC with E to soak the all-in (a full commit fight to the death). Around minute 12, with ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** and ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** finished, Karma transitions into a teamfight enchanter who shields a frontline allied carry (frontline = the tank or fighter who opens the fight) and zones the back line (back line = the carries who deal damage from behind) with RQ.

## Recommended Build

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (the support quest item) plus 2 Health Potions and a Stealth Ward. Skip mana potions: Manaflow Band and Biscuit Delivery cover early mana issues.

**Core items (in order):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — completes into ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** around minute 10-12, your support quest reward. Gives gold income and ward charges.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — boots that give Ability Haste (a stat that lowers your spell cooldowns), so Mantra and Q come back faster.
3. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — when you shield an ally with E, they get attack speed (they swing faster) and on-hit magic damage (extra damage on every basic attack). Best when paired with auto-attacking ADCs (Kai'Sa, Jinx, Twitch).
4. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — repeated heals and shields trigger a stacking heal on low-HP allies. Pairs with E spam and RE in teamfights.
5. ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — area heal on a 5-second delay, used on objective fights (Drake, Baron) for top-up healing across the team.

**Situational items:**

- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — vs heavy heal comps (Soraka mid, Yuumi, Vladimir top). Cuts enemy healing whenever you damage them with Q.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — vs AOE burst (Yasuo + Malphite, Orianna R). Active gives the whole team a wide shield, blocks the wombo combo (a "wombo combo" is a chained CC engage that wipes your team in 1-2 seconds).
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — vs single-target magic CC casters that one-shot you (Blitzcrank hook, Morgana binding, Twisted Fate gold card).
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — vs assassins specifically targeting you (Zed, Talon, Akali). The 2.5-second stasis ("you become untargetable but cannot move or cast") lets your team peel for you.
- ![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4005.png) **Imperial Mandate** — when the team needs more damage and your jungler/ADC reliably follows up on your Q slow.

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** is default for Ability Haste (you want Mantra back as fast as possible). Mobility Boots are acceptable if you roam a lot to mid lane.

**Skill order:** Max **Q** first (main poke and AOE damage), **E** second (bigger shield + Move Speed), **W** last. Take a point in **R** at levels 6, 11, 16 — but remember Mantra is already usable from level 1.

**Runes:** Primary **Sorcery** with **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. Aery procs on every Q for extra poke damage and on every E for a small bonus shield. Secondary **Inspiration** with **Biscuit Delivery** (free mana sustain in lane) and **Cosmic Insight** (more Ability Haste on summoners and items).

## Key matchups

- **Lulu / Janna:** Even matchup. Both are enchanters with no hard engage; the lane is decided by your ADC pair. Q-poke them when they step to ward, but do not commit Mantra in lane — save it for objective rotations.
- **Soraka:** Favorable poke war. Your Q slow plus Aery procs out-trade her W heal cost. Push her off the wave by levels 3-5 by Q-ing on every cooldown.
- **Leona / Nautilus:** Tough lane. They engage (start the fight) with point-and-click CC (crowd control that locks instantly without aiming, like a stun on right-click) before you can tether **W**. Hold E for the moment they engage (it shields the burst — high damage in 1-2 seconds — and gives Move Speed so you can peel out, meaning escape with the ADC), and never push the wave past river without vision.
- **Pyke / Thresh:** Hook range matches your Q range. Stand behind your ADC, hide behind minions to break line of sight on hooks, and Q the support — not the ADC — when his hook is on cooldown.
- **Blitzcrank:** The pull is the entire matchup. Walk forward only when you see his Q on cooldown; if hooked, immediately E yourself (the shield + speed boost give you a chance to walk to tower).

## Power spikes & win conditions

- **Level 1:** Mantra is already up. RQ at level 1 is a strong invade tool (sneaking into the enemy jungle to set up an early kill) because the AOE detonation (area-of-effect damage that hits everything in a circle) deals real damage on clumped enemies (multiple targets standing close together).
- **Level 6:** Second R point unlocks faster Mantra cooldowns. With Manaflow Band stacked, you can spam Q-RQ-W combos on the bot lane all-in.
- **Bloodsong + Ionian Boots of Lucidity (~ minute 10-12):** Roam window opens (roaming = leaving your lane to help another lane). Push the wave hard with one Q, then walk to mid lane river to set up a 3v2 with your jungler and mid laner.
- **Ardent Censer + Moonstone Renewer (~ minute 24-28):** Teamfight peak. Every E shield triggers Ardent's attack speed and Moonstone's stacking heal. Your ADC outscales any matchup with these two items behind them.

## Common mistakes

- **Wasting Mantra in lane on poke.** RQ feels strong, but burning Mantra at minute 4 means no AOE detonation when the enemy jungler ganks (surprise-attacks your lane from the river) at minute 6. Hold RQ for setup after a W root or for clustered enemies near drake.
- **Shielding yourself with E.** E on yourself is OK as a panic button (an emergency cast when you are about to die), but the shield value plus Move Speed are wasted if your ADC dies behind you. Default to E on the ADC; you E yourself only if the ADC is already safe.
- **Q poke when an enemy assassin is missing on the map.** Karma has no dash. If the enemy jungler is unaccounted for, do not push forward to Q range — you will get caught with no escape and trade your life for nothing.
- **Forgetting the W tether range.** Your **W** roots only if the tether stays unbroken for the full duration. If you cast it from max range and they walk one step away, the tether snaps and you have no payoff. Cast W when the enemy is committed (after they used their dash or escape).
- **Building damage instead of utility.** Karma can scale into AP damage, but the enchanter build (Ardent Censer, Moonstone Renewer, Redemption) gives the team much more value than a Rabadon's. Default to utility unless you are massively ahead.

## Advanced tip

Use **RE** (Mantra empowering Inspire) on a forward-charging ally — not on yourself. The empowered E shields your target plus all nearby allies, and gives a wider Move Speed boost. Cast it on the ADC the moment your team commits to an engage: the AOE Move Speed lets your whole team close the gap on the enemy back line at once, turning a normal teamfight into a forced collapse. The trick is timing the RE before the engage starts, not after, because the Move Speed buff is most useful on the way in.
