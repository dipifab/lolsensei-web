---
title: "Ivern Support Build & Guide — Patch 16.9"
slug: "ivern-support"
language: "en"
patch: "16.9"
champion: "ivern"
role: "support"
last_updated: "2026-05-05"
description: "Ivern support guide for League of Legends Patch 16.9: enchanter build, brush vision tricks, Q root setups, Daisy peel, key bot matchups, common mistakes."
quick_learn:
  champion_dd_id: "Ivern"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Enchanter / Setup Support"
  abilities:
    - key: "P"
      name: "Friend of the Forest"
      description: "Cannot attack jungle monsters, and they cannot attack him. Plants groves on jungle camps that auto-free monsters when grown — useful even from bot lane for free gold."
      dd_spell_id: "Ivern_Passive"
    - key: "Q"
      name: "Rootcaller"
      description: "Long linear skillshot that roots the first enemy hit. Allies who attack the rooted target dash to it. Recast to dash there yourself."
      dd_spell_id: "IvernQ"
    - key: "W"
      name: "Brushmaker"
      description: "Passive: in brush, autos deal bonus magic damage (you and nearby allies). Active: create a brush patch anywhere for vision and a damage zone."
      dd_spell_id: "IvernW"
    - key: "E"
      name: "Triggerseed"
      description: "Shield an ally. After 1.5s the shield bursts, dealing magic damage and slowing nearby enemies. If no enemies are hit, the shield refreshes for the same duration."
      dd_spell_id: "IvernE"
    - key: "R"
      name: "Daisy!"
      description: "Summon Daisy, a tanky golem ally. Her third consecutive auto on the same target launches a knockup shockwave. Recast to command her position."
      dd_spell_id: "IvernR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "W" }
    - { level: 15, key: "W" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "6616", name: "Staff of Flowing Water" }
    - { dd_id: "3222", name: "Mikael's Blessing" }
  situational_items:
    - dd_id: "3107"
      name: "Redemption"
      against: "vs grouped late-game team fights where AOE swing on a clumped fight matters more than single-target peel"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "vs AOE engage compositions (Amumu R, Wukong R, Yasuo + Malphite wombo)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs heavy single-target magic CC on you (Lux Q, Morgana Q, Zoe E sleep, Brand Q stun)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs heal-stacking comps (Soraka, Yuumi, Aatrox, Vladimir bot lane)"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "Use the side bushes for ambush — pre-place W brush for free vision, fire Q from fog, and your ADC dashes onto the rooted target. After 6, roam mid for repeat picks with Daisy and snowball the map."
  weakness: "Squishy, no peel against multi-target hard engage. A whiffed Q in lane forces you to back off until cooldown — the 14s Q at rank 1 is the longest dead-time window of any roaming support."
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
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery primary: Summon Aery rides every E shield onto your ADC and procs on Q root for trade damage. Manaflow Band pays for E spam in lane, Transcendence pushes ability haste past 40 for shorter Q cooldowns, Scorch closes the poke window when the lane goes static."
    secondary_rationale: "Resolve secondary: Font of Life triggers on every Q root — your ADC heals when they attack the rooted target, turning a single setup into damage plus sustain. Revitalize amplifies Aery and the no-enemy-hit refund on E."
    secondary_alternative: "If your team needs more roams to mid and your Flash uptime matters, swap Resolve to Inspiration with Magical Footwear (free upgraded boots at minute 12) and Cosmic Insight (summoner spell haste — more Flash and Ignite per game)."
matchup_draft:
  pick_into:
    - examples: ["thresh", "blitzcrank", "pyke"]
      archetype: "Hook supports that step up to throw skillshots"
      reason: "They have to walk forward into Q range to land their hook — Ivern's Q + ADC dash punishes the windup with a guaranteed root before the hook even leaves the cast animation."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "Immobile mage poke supports"
      reason: "They have no dash. Q from brush + ADC follow-up wipes them; W active brush gives Ivern a free vision-and-damage zone they cannot match without burning summoner spells."
    - examples: ["yuumi", "soraka", "milio"]
      archetype: "Pure enchanter supports without lockdown"
      reason: "These chase the ADC with heals and shields but bring no peel against a setup root; Q catches the carry, Daisy slam follows, and the enchanter has no answer to undo a 1.75s root."
  counterpicks:
    - examples: ["leona", "alistar", "rell"]
      archetype: "All-in tank engagers"
      reason: "They flash forward and chain CC the ADC before Ivern can land Q. He has no peel against multi-CC engage; one E shield breaks instantly under a 2-target stun chain."
    - examples: ["lux", "zyra"]
      archetype: "Zone-control / long-range mage supports"
      reason: "Lux's E zone shuts down Ivern's brush angles and out-pokes Q range; Zyra's seed-and-plant zoning out-controls Ivern's W brush passive without ever stepping forward."
    - examples: ["morgana", "tahm-kench"]
      archetype: "Anti-CC peel supports with cleanse or eat"
      reason: "Morgana's E spell-shield blocks the Q root completely, undoing the entire setup; Tahm Kench W eats the ADC out of Daisy's slam radius before the third auto lands."
---

## Overview

Ivern as a support is one of the most unusual picks in the bot lane: an enchanter who can spawn brush wherever he wants, root a champion across the map, and summon a tanky golem at level 6. His passive disables him from autoing jungle monsters at all, but it doesn't stop him from passing through the bot side jungle on resets to plant **Brushmaker (W)** seeds on Krugs or Wolves — that's free gold while your ADC pushes the wave. He is squishy, has no escape, and dies in 1v1 trades — but no other support can create a brush wall mid-fight, deny vision, and convert a single Q into a guaranteed kill the way Ivern does.

His game plan: pre-place W brush in bot lane river or tri-brush before the wave reaches you, fire Q from inside that brush so the enemy never sees the cast, drop E on your ADC the moment they dash to the rooted target, and after level 6 rotate to mid lane with Daisy for cross-map picks. Fights are not won by Ivern's damage — they're won by Ivern's setups, with the carry doing the actual killing.

## Recommended Build

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. World Atlas is the only viable support starter — auto-upgrades through quest stages into ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** and finally ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**.

**Core items (in order):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — support quest item, gold generation through assists and minion executes. Don't last-hit minions; let your ADC farm.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — ability haste pushes Q and E onto a near-permanent cooldown.
3. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — mythic. Your shields and heals stack a chain-effect that ramps healing every consecutive proc — ideal for an enchanter who shields, slows, and re-shields every 7-11 seconds.
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — when E shields the ADC, the Censer passive grants them attack speed and on-hit magic damage. Stacks with W brush bonus when the ADC is fighting in or near brush.
5. ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** — a second shield-trigger item. Gives the shielded ally extra ability power and ability haste for a few seconds.
6. ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — active cleanse on the ADC. Solves heavy single-target CC chains that no shield can save through.

**Situational items:**

- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — vs late-game grouped fights where the team-wide AOE heal/damage swings the fight harder than a Mikael's cleanse.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — vs AOE engage compositions (Amumu R, Wukong R, Yasuo + Malphite wombo). One E cannot peel four people; Locket's active does.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — when they will hard-CC you specifically (Lux Q, Morgana Q, Zoe E sleep). The first projectile gets eaten and you live to cast Daisy.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — vs heal-stacking comps (Soraka mid, Yuumi support, Aatrox top). Your magic damage applies the heal-cut on every spell.

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** is default. ![Mobility Boots](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3117.png) **Mobility Boots** is acceptable in heavy roaming team comps where the rotation speed matters more than the in-fight cooldowns.

**Skill order:** Take **Q** at level 1 for cheese-invade roots in level-1 brush, then max **E** first (shield value scales, slow shuts down dives), **Q** second (lower cooldown means more roots), **W** last. Take **R** at levels 6, 11, 16.

**Runes:** Primary **Sorcery** with **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Resolve** with **Font of Life** and **Revitalize**.

## Key matchups

- **Leona / Alistar:** Hard counter. Their flash-engage chains CC the ADC before your Q can fire. Stand at max W-brush range, never path between waves where their flash can reach you, and shield your ADC pre-emptively when their summoners are up.
- **Thresh:** Skill matchup. Both supports want to setup a single hook/root for a kill, but Ivern wins the range war (Q is 1125 units, Thresh hook is 1100). Stand outside hook range, fire Q from brush; if he hooks first, drop E on the ADC and walk away.
- **Lux:** Lane bully. She out-pokes you with E-Q while you have nothing to throw back — your Q is a kill setup, not a poke tool. Trade only when her Q is on cooldown; bring Banshee's Veil if she keeps landing the binding.
- **Yuumi:** Free pick. She has to detach to throw skillshots, and the moment she does she's a 600-HP target with no escape. Q her on detach, ADC dashes through, free kill — repeat every 14s.
- **Pyke:** Fight him in brush. Your W passive boosts both your and the ADC's autos in brush; Pyke loses every brush trade because his Q windup is visible while your Q from inside the W-placed brush is fully obscured.

## Power spikes & win conditions

- **Level 2 (Q + E):** First all-in window. With one point in Q for setup and E to shield the dash, you and the ADC trade a guaranteed Flash for the enemy ADC's HP bar. Push level 2 by hitting the second wave's casters together.
- **Level 6 (Daisy! online):** Cross-map roam window. Daisy is tanky enough to tank a turret aggro for 4-5 seconds, and her third-auto knockup is engage when your ADC has Flash. Roam mid the moment you have Daisy and a wave shoved.
- **![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) Moonstone Renewer completion (~ minute 13-15):** Shield/heal chains ramp. In any fight that lasts more than 4 seconds, your healing output pulls ahead of the enemy support's even if they're a Soraka or a Sona.
- **3-item powerspike (Moonstone + Boots + Ardent or Staff, ~ minute 22-24):** Force objective fights. Your ADC hits harder and faster than theirs because of your shield triggers, and Daisy R cooldown drops with item completions.

## Common mistakes

- **Last-hitting minions.** Your World Atlas execute proc gives you the gold even if the ADC takes the kill — don't steal CS. Stand a full minion-row behind the ADC unless setting up a freeze.
- **Whiffing Q at long range and then having no follow-up.** Q is 14s on rank 1 — a missed cast means 14 seconds of having no kill button. If the enemy is dodging, walk forward into brush first, then fire from a closer angle they didn't expect.
- **Casting W brush in fights instead of pre-placing.** Brush created in a fight is barely a vision tool — the value is in the pre-placement: drop one in tri-brush 5 seconds before a roam, or in mid-river before a Drake call. Brush during a fight is reactive when the kit wants you proactive.
- **Dropping Daisy at max range in a teamfight.** Daisy needs to reach a target and land three consecutive autos for the knockup. R at 1500 units away means she walks for 4 seconds before the first auto — by then the fight is over. R behind the enemy line, not "for damage."
- **Trying to peel one-vs-many with E shield only.** E shields one target. Against AOE engage hitting the ADC + mid laner + you, one shield doesn't cut it. Plan Locket of the Iron Solari from the draft when you see the wombo comp.

## Advanced tip

Use **W active brush** to manufacture Q angles the enemy cannot dodge. Standard pattern: place W brush 600 units in front of you, walk inside the brush (you become invisible to the enemy if they don't have vision in the patch), fire Q from inside the brush — the projectile starts from a position the enemy could not predict because they don't see you cast. This is functionally a free 1125-range root with no fog requirement, and it's why Ivern excels in laning duos with Caitlyn, Senna, or Jhin: any ADC that wants to attack from far away gets a free dash forward to a guaranteed kill setup the enemy cannot prepare for.
