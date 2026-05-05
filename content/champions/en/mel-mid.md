---
title: "Mel Mid Build & Guide — Patch 16.9"
slug: "mel-mid"
language: "en"
patch: "16.9"
champion: "mel"
role: "mid"
last_updated: "2026-05-05"
description: "Mel mid lane guide for League of Legends Patch 16.9: starter kit, core mage build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Mel"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Artillery"
  abilities:
    - key: "P"
      name: "Searing Brilliance"
      description: "Casting an ability adds 3 bonus projectiles (cap 9) to the next basic attack. Damaging enemies stacks Overwhelm; enough Overwhelm execute-damage finishes them off."
      dd_spell_id: "Mel_Passive"
    - key: "Q"
      name: "Radiant Volley"
      description: "Targeted barrage of explosions on a ground area. Main waveclear and Overwhelm-stack engine. Long range (950)."
      dd_spell_id: "MelQ"
    - key: "W"
      name: "Rebuttal"
      description: "Self-barrier that reflects enemy projectiles, blocks damage, and grants decaying movement speed. Reflected damage scales with the original hit."
      dd_spell_id: "MelW"
    - key: "E"
      name: "Solar Snare"
      description: "Linear orb that roots enemies at the center, then radiates a slowing zone with damage over time. Setup tool for Q follow-up."
      dd_spell_id: "MelE"
    - key: "R"
      name: "Golden Eclipse"
      description: "Global execute on every enemy carrying Overwhelm stacks. More stacks = more damage. Only castable while a champion has Overwhelm."
      dd_spell_id: "MelR"
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
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs divers and assassins (Zed, Diana, Talon, Akali) — stasis lets your Overwhelm stacks expire safely before they finish you"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC (Ahri charm, Lissandra R, Twisted Fate stun) — the spell shield buys time for W"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs healing-stacking comps (Soraka mid, Vladimir, Dr. Mundo top) — Grievous Wounds caps their sustain"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap when any priority target finishes a Magic Resist item"
    - dd_id: "4628"
      name: "Horizon Focus"
      against: "vs immobile mages and tanks who eat your full E + Q rotation — it adds a damage amp on rooted/long-range hits"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Stack Overwhelm with Q + E in lane and trades, then secure kills with global R when an enemy is low. Group at objectives so your Q feeds passive stacks across the whole enemy team."
  weakness: "No dash, weak base mobility, R is useless without Overwhelm stacks already on a target. Hard countered by mobile gap-closers and by enemies who disengage before stacks accumulate."
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
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery primary: Summon Aery procs on every Q tick and on every basic attack from your Searing Brilliance bonus projectiles, so stacks build fast in lane. Manaflow Band sustains Q spam, Transcendence pushes Ability Haste past the 40% mark, Scorch closes poke under low HP."
    secondary_rationale: "Inspiration secondary: Biscuit Delivery covers your weak early sustain (no innate heal, no dash) and Cosmic Insight shaves cooldown off Flash and your active items so Zhonya's Hourglass and Rebuttal align with R windows."
    secondary_alternative: "If the enemy team has 2+ low-resistance squishies, swap Inspiration to Precision with Presence of Mind (mana refund on takedown) and Coup de Grace (+8% damage to enemies under 40% HP). Coup de Grace stacks well with R's execute math."
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "anivia"]
      archetype: "Immobile mages without dash"
      reason: "They cannot dodge your E root, so the full Q follow-up lands. Once Overwhelm is on them, your global R picks them off the moment they recall low or step into your jungler's gank."
    - examples: ["senna", "ziggs", "xerath"]
      archetype: "Backline scalers without disengage"
      reason: "Long lanes mean you stack Overwhelm passively while they farm. Even when they out-poke you, R closes the kill from base or sidelane the second their HP dips."
    - examples: ["annie", "twisted-fate"]
      archetype: "Telegraphed all-in mages"
      reason: "Their engage requires a long animation or a card draw — Rebuttal (W) reflects the projectile portion of their burst, which often kills them outright if you have Overwhelm stacked."
  counterpicks:
    - examples: ["zed", "fizz", "kassadin"]
      archetype: "Mobile assassins with multiple gap-closers"
      reason: "They jump on you before you can land E, and W only blocks projectile damage — most of their burst is melee or self-targeted, so the reflect does almost nothing. No dash means no escape after the burst lands."
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall projectile blockers"
      reason: "Wind Wall eats your entire Q barrage and the projectile portion of your basic attacks under Searing Brilliance. They strip your damage profile in a 3-second window long enough to all-in."
    - examples: ["irelia", "akali"]
      archetype: "Skirmishers with QSS-style cleanse"
      reason: "Akali's R2 dash and Irelia's Q resets jump cooldowns ignore your E root timing. You either land E pre-6 with no R follow-up, or eat their full all-in once they have ultimate up."
---

## Overview

Mel is a long-range artillery mage with a unique **stack-based execute** identity. Her passive **Searing Brilliance** turns every ability cast into 3 bonus projectiles on her next basic attack (up to 9 stacked) and applies infinite-stacking Overwhelm marks on damaged enemies. Her ultimate **Golden Eclipse (R)** is a global ability that snipes every Overwhelm-marked target at once — no matter where they are on the map. The trade-off is brutal mobility: no dash, no blink, just **Rebuttal (W)** as a 1.5-second projectile reflect.

Her mid-lane game plan is to push waves with **Radiant Volley (Q)**, drop **Solar Snare (E)** on the enemy whenever you have Q ready to follow, and accumulate Overwhelm stacks on the entire enemy team during skirmishes. After level 6, the win condition is map awareness: when an enemy carry recalls at low HP or fights a sidelane, **R** finishes them from across the map. Skill expression sits in **E placement** (predicting last-hit positions) and in **R timing** (reading the minimap, not pressing it on cooldown).

## Recommended Build

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Her Q cost is high at rank 1, the AP and mana regen on Doran's Ring are non-negotiable.

**Core items (in order):**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — first-back target. The Ability Haste plus the burst proc compounds with your bonus-projectile basic attacks; Mana Charge sustains Q spam through long lanes.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration so Q ticks and Overwhelm stacks bite into squishy targets you most want to delete with R.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — second-item burst. The HP-threshold passive (passive that activates when the enemy is under a soft HP threshold like 40%) lines up with R finishers in skirmishes.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — late-game scaling multiplier. Your highest-AP item slot — Overwhelm damage and R per-stack damage scale aggressively with raw AP totals.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — into divers and assassins (Zed, Diana, Talon, Akali). The 2.5-second stasis lets the burst window pass and lets your jungler arrive.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — into single-target magic CC (Ahri charm, Lissandra R, Twisted Fate stun). The spell shield buys you a window to cast Rebuttal.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — into healing-stacking compositions (Soraka mid, Vladimir, Dr. Mundo top) where your Q ticks need Grievous Wounds to actually drop their HP bar.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — the moment any priority target finishes a Magic Resist item.
- ![Horizon Focus](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4628.png) **Horizon Focus** — vs immobile lineups (two or more enemies with no dash). The damage amp procs on every E root and Q hit at long range.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** is default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** is acceptable when the team needs more **R** uptime (every 80 seconds at rank 3 means you cap an extra cycle per teamfight).

**Skill order:** Max **Q** first (waveclear and Overwhelm stack engine), **E** second (root and zone control), **W** last. Take **R** at levels 6, 11, 16.

**Runes:** Primary **Sorcery** with **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Inspiration** with **Biscuit Delivery** and **Cosmic Insight**, or **Precision** with **Presence of Mind** and **Coup de Grace** when the enemy team has multiple low-resistance squishies.

## Key matchups

- **Yasuo / Yone:** Wind Wall eats your Q barrage and your bonus-projectile autos. Hold Q until they push their abilities, and use Q only to clear waves at safe range. Trade with E into auto-attacks (the melee portion bypasses Wind Wall).
- **Diana / Akali:** Diving threats. Buy ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** after ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion**; never use Flash offensively in lane against them — you have no dash and dying once snowballs (gives them a growing lead — kill, gold, item, more kills) the lane.
- **Orianna:** Even matchup, decided by team fights. Your Q range matches hers; do not get baited into auto-attack trades because she scales harder with the same item set. Stack Overwhelm by Q'ing the wave near her, not by trading directly.
- **Twisted Fate:** Roam priority race (priority = lane advantage that lets you leave the lane without losing minions). If he picks gold card on you, E him before he closes; otherwise track his R with vision wards on river and tri-bush — your global R answers his roams from your tower.
- **Galio:** Avoid stacking with allies in mid pre-6 (his W punishes grouped targets). Punish him while he is melee'ing minions with E + Q; he has no waveclear range to outpush you, so you set up roams whenever he steps in for a CS.

## Power spikes & win conditions

- **Level 2:** With Q + E available, you have your first all-in trade. Land E to root, throw Q on top — the explosion ticks stack Overwhelm fast. Forces a 30%+ HP swing.
- **Level 6:** First **Golden Eclipse** unlocks global pressure. If a sidelane fight breaks out and an enemy already has Overwhelm stacks (from earlier skirmishes or Q poke), R finishes them from base.
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion completion (~ minute 12-14):** Wave control flips. You shove and roam with R up; the Mana Charge passive removes the lane mana ceiling that capped your Q spam pre-back.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minute 24-28):** R one-shots squishies that haven't built a single MR item. Force objective fights here — even a brief skirmish leaves enough Overwhelm stacks for a full-team execute.

## Common mistakes

- **Pressing R on cooldown.** R only fires on enemies with Overwhelm stacks. Casting on a 1-stack target wastes a 120/100/80-second cooldown for almost no damage. Wait until at least 5 stacks are built (typically after a Q + E hit + 2-3 autos).
- **Ignoring W against melee burst.** Rebuttal reflects **projectiles only**. Against Zed Ws/Akali shurikens it's gold, against Diana E or Master Yi Q it does nothing useful — use W to close the gap with the movement speed instead.
- **Throwing E without Q ready.** E is a slow-arming root with a long cooldown; without Q to follow up, the root is wasted because Overwhelm stacks come from damage, not from CC alone.
- **Auto-positioning at max Q range in team fights.** Maximum range (950) puts you outside your team's peel (peel = teammates who protect you from divers). Stand at the second-furthest position so a flank does not delete you.
- **Q-ing the wave while skirmishing.** Q is your stack engine. Spending it on minions during a 3v3 in mid-river drops your output by ~50%. Push the wave first, then commit.

## Advanced tip

Time your **Searing Brilliance** auto-attacks. Casting Q + E + W back-to-back stacks the bonus-projectile counter to 9, but only the **next** auto consumes them. If you weave the auto **between** Q and E (Q → AA → E → Q), you fire two empowered autos in the same combo instead of one — roughly doubling your Overwhelm-stack rate during the trade window. In team fights this means using one ability, immediately auto-ing once, then resuming the rotation; it is the difference between R doing 60% of an enemy's HP and finishing them.
