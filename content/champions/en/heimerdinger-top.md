---
title: "Heimerdinger Top Build & Guide — Patch 16.9"
slug: "heimerdinger-top"
language: "en"
patch: "16.9"
champion: "heimerdinger"
role: "top"
last_updated: "2026-05-02"
description: "Heimerdinger top lane guide for Patch 16.9: turret-wall bully build, UPGRADE combos, power spikes against melee juggernauts, and splitpush win conditions."
quick_learn:
  champion_dd_id: "Heimerdinger"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Artillery"
  abilities:
    - key: "P"
      name: "Hextech Affinity"
      description: "Gain bonus Movement Speed while near allied towers or Heimerdinger's deployed turrets. Passive mobility reward for staying inside your turret nest."
      dd_spell_id: "Heimerdinger_Passive"
    - key: "Q"
      name: "H-28 G Evolution Turret"
      description: "Deploy a turret (max 3 active). Turrets build charge and fire a stronger beam at max charge. Charges reset each time Q is cast. 350 range, 1s cooldown, 20 mana."
      dd_spell_id: "HeimerdingerQ"
    - key: "W"
      name: "Hextech Micro-Rockets"
      description: "Long-range barrage (1325 range) of rockets that converge on the cursor. Extra hits deal reduced damage. Each rocket that hits a champion gives nearby turrets 20% charge."
      dd_spell_id: "HeimerdingerW"
    - key: "E"
      name: "CH-2 Electron Storm Grenade"
      description: "Lobs a grenade (970 range) that slows enemies in the blast zone and stuns those in the center. Hitting a turret charges it to full. Cooldown 11s flat, 85 mana."
      dd_spell_id: "HeimerdingerE"
    - key: "R"
      name: "UPGRADE!!!"
      description: "Empowers the next non-ultimate ability. R+Q: deploys a mega-turret (8s, CC-immune, AOE splash + slow). R+W: fires 4 rocket waves. R+E: larger stun zone + knockup in center. Cooldown 100-70s."
      dd_spell_id: "HeimerdingerR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4629", name: "Cosmic Drive" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs divers and bruisers who gap-close through turret coverage (Irelia, Camille, Fiora)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs sustain tops (Darius passive heal, Nasus, Dr. Mundo) — shuts down health regeneration"
    - dd_id: "3118"
      name: "Malignance"
      against: "vs tankier comps where R+Q mega-turret uptime matters — reduces ult cooldown for repeated engages"
    - dd_id: "3135"
      name: "Void Staff"
      against: "when enemy builds Magic Resist (Mercury's, Force of Nature, Spirit Visage)"
  base_combo: ["Q", "Q", "Q", "E", "W", "R+Q"]
  win_condition: "Starve melee tops with a three-turret wall in lane, then use UPGRADE+Q mega-turret to anchor baron and dragon fights. Force 1v1 trades only inside your nest."
  weakness: "Mobile bruisers and divers with multiple dashes collapse the turret nest before it deals damage. No escapes beyond Flash and Passive speed boost."
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
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Arcane Comet procs off E (slow pins the target) and W multi-hit. Scorch over Gathering Storm: top Heimer wins or loses in lane, and Scorch adds real damage at levels 1-6 vs juggernauts. Transcendence shortens E and W cooldowns for continuous turret uptime."
    secondary_rationale: "Biscuit Delivery covers mana costs of repeated Q placements in early levels and grants HP sustain against auto-attack harassment. Cosmic Insight reduces Flash and UPGRADE cooldowns, giving you more frequent mega-turret windows."
    secondary_alternative: "Against a heavy AD top (Darius, Renekton, Garen), swap Inspiration to Resolve secondary with Conditioning (armor and MR after minute 12) and Overgrowth (HP scaling). The trade-off: less early-game sustain, more survivability into all-in trades."
matchup_draft:
  pick_into:
    - examples: ["nasus", "malphite", "cho-gath"]
      archetype: "Immobile or slow juggernauts that must walk through turret coverage"
      reason: "They have no dash or blink to dodge the turret nest setup. Each step into range triggers turret beams plus W rockets, burning their HP before they can land a meaningful trade."
    - examples: ["mordekaiser", "darius", "garen"]
      archetype: "Melee juggernauts with short-range engage who cannot safely close gap"
      reason: "Their engage requires closing to melee range against three turrets firing simultaneously. E stun in the approach zone then W barrage stops the commit before it reaches Heimerdinger."
  counterpicks:
    - examples: ["irelia", "camille", "fiora"]
      archetype: "Mobile divers with multiple dashes that collapse turret nest"
      reason: "They dash through the turret zone, reset on minions, and reach Heimerdinger before he repositions. Zhonya's Hourglass is mandatory — use the stasis to waste their dash windows and force them to disengage."
    - examples: ["jayce", "quinn"]
      archetype: "Long-range top laners who poke from outside 970 range"
      reason: "They zone Heimerdinger off the minion wave from a range where E and W cannot reliably reach, forcing him to take free poke every time he tries to place a turret or last-hit."
---

## Overview

Heimerdinger top is a lane bully who turns melee-heavy matchups into a sustained war of attrition. His identity in the top lane differs from mid: here the goal is not to roam but to create an impenetrable **turret nest** — a zone covered by all three H-28 G Evolution Turrets that forces any melee champion to choose between taking constant magic damage or surrendering control of the wave (wave control = deciding whether the minion line pushes toward you or toward the enemy). The passive **Hextech Affinity** (bonus movement speed near allied structures and his own turrets) rewards him for fighting inside that nest rather than kiting away from it.

His game plan is to plant turrets against the enemy's tower, poke with **W** (Hextech Micro-Rockets) and **E** (CH-2 Electron Storm Grenade) to keep the opponent below all-in threshold (all-in threshold = the HP level below which they no longer have enough HP to win a full commit fight against you), and then deploy the UPGRADE+Q mega-turret at level 6 to lock the lane down entirely. Splitpush pressure (splitpush = pushing a side lane solo while your team takes objectives elsewhere) is the macro win condition (macro win condition = the big-picture map strategy that wins you the game even without a 1v1 kill): a Heimerdinger turret nest in a side lane is dangerous enough that enemies must commit two people to clear it, buying the rest of the team time to take objectives.

## Recommended Build

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) Doran's Ring + 2 Health Potions. The mana helps sustain repeated Q placements in the early levels, where each turret costs 20 mana and you want to replace them instantly after they are destroyed.

**Core items (in order):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — burst spike and mana sustain. The passive echoes off turret attacks against champions and strengthens W poke trades (poke trades = brief long-range exchanges that chip HP without starting a full fight).
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration to cut through early armor runes (armor runes = defensive runes some players pick in the third shard slot to reduce physical damage in early levels).
3. ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — AP plus a movement speed bonus that activates when you deal damage with spells. Lets you kite (kite: move backward while attacking to maintain distance from a pursuer — auto-attack, then step away, repeat) across the lane to reposition turrets without losing range on W.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — extra burst, especially strong for finishing opponents under 40% HP with a charged turret beam or a W volley.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — late-game AP multiplier. With four items online, turret beams and W rockets scale to damage that justifies splitting a side lane even against two defenders.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — mandatory into mobile divers (divers = champions who dash through your turret zone to kill you at close range — Irelia, Camille, Fiora). Stasis wastes their dash window and lets the mega-turret continue dealing damage while you are invulnerable.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — into heavy sustain tops (Darius passive, Nasus, Dr. Mundo). Grievous Wounds (a debuff that halves healing received) applied by turret hits and W shuts down their health regeneration loop.
- ![Malignance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3118.png) **Malignance** — into tankier compositions where the UPGRADE+Q mega-turret is your primary teamfight tool. Reduces R cooldown so the mega-turret recharges between objectives.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — swap in when any priority target buys a Magic Resist item (Mercury's Treads, Force of Nature, Spirit Visage).

**Boots:** Sorcerer's Shoes is the default. Swap to ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) Ionian Boots of Lucidity if you are ahead and want more frequent UPGRADE casts.

**Skill order:** Max Q first for turret damage and recharge speed. Max W second to scale the rocket barrage. Max E last — it is primarily utility (stun + charge) rather than a primary damage source. Take R at levels 6, 11, 16.

**Runes:** Primary **Sorcery** with **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Inspiration** with **Biscuit Delivery** and **Cosmic Insight**. Against a heavy AD top, swap Inspiration to **Resolve** with **Conditioning** and **Overgrowth**.

## Key matchups

- **Nasus:** Farm-oriented juggernaut with no dash. Place all three turrets in a diagonal line between him and the wave at level 1. He cannot trade back without walking through beams. Use E to stun him whenever he tries to last-hit under pressure, then W to reinforce. Respect his level 6 empowered W (reduces your attack speed, but your turrets are unaffected — the slow debuff does not apply to deployed structures).
- **Darius:** Dangerous at level 3 when his Apprehend (E) pull is online. Do not stand next to your turrets without minions blocking his pull angle. Kite backward as he approaches, land E center-stun to interrupt the pull, then immediately W. His passive bleed (Hemorrhage) stops when you break contact with movement, so kiting is more effective here than staying to trade.
- **Irelia:** Hard matchup. She resets her dash (Ionian Fervor E) on minions and can reach you even through three turrets if she plans the path. Keep Zhonya's Hourglass as your third item. At level 6, use E to stun her in the approach and immediately cast UPGRADE+Q to drop the mega-turret; the AOE (area of effect — damage hitting a zone rather than a single target) slow from the mega-turret locks her in place for full beam damage.
- **Garen:** Straightforward matchup. He has no ranged poke and no dash; his only escape is Perseverance (passive HP regen). Deny his regen window by constantly staggering poke between turret beams and W rockets. When he goes for a last-hit, drop E for the center stun and follow with W for the full burst cycle. His Judgment (E spin) deals damage in a circle, so do not stand close when he activates it — stay at W range.
- **Jayce:** Ranged form (Shock Blast) outranges your W at 1050 versus your 1325, but in practice he will swap to melee for empowered autos. When he commits to melee form, that is your window: triple-turret zone plus E stun into W. If he stays in ranged form all lane, hold turrets closer to your own tower and focus on matching his push — do not chase him into the open lane.

## Power spikes & win conditions

- **Level 1:** Three turrets are online by level 3, but even one turret at level 1 chips the opponent on their first approach to the wave. Place Q near the experience-range boundary so the enemy must enter turret range to last-hit.
- **Level 6 (UPGRADE+Q):** The mega-turret is 8 seconds of CC-immune AOE damage that no melee champion can ignore. Drop it in the center of the lane to create a zone the enemy cannot cross without taking a full beam + slow sequence. This is your strongest splitpush tool.
- **Cosmic Drive completion (around minute 14-16):** With three items (Luden's + Boots + Cosmic Drive), turret damage begins to meaningfully chunk even tanks. The movement speed from Cosmic Drive lets you kite and replace fallen turrets without losing fight positioning.
- **Rabadon's Deathcap online (around minute 24-28):** Late-game Heimerdinger turrets deal damage comparable to a focused carry attack. Force a baron or dragon fight with a pre-placed mega-turret in the pit entrance for maximum value.

## Common mistakes

- **Not maintaining three turrets at all times.** If a turret is destroyed or expired, replace it immediately. A two-turret setup deals 33% less area damage and lets opponents walk through the gap. Bind Q to a quick key and refresh automatically whenever you move within 350 range of a dead slot.
- **Using UPGRADE+E (R+E) instead of UPGRADE+Q (R+Q) against melee juggernauts.** The R+E knockup is impressive, but the R+Q mega-turret deals far more total damage over 8 seconds against slow targets who cannot escape the radius. Save R+E for clearing jungle waves or punishing overextending mages — not as the primary tool against melee tops.
- **Standing inside turret range during the opponent's all-in.** Turrets provide cover but do not grant invulnerability. If the opponent commits (goes all-in with no escape plan) with full HP and an active gap-close, stepping backward while the turrets deal damage is correct; do not stand still waiting for stun procs (the moment the turret's stun fires on an enemy hit).
- **Skipping Zhonya's Hourglass into dash-heavy matchups.** Against Irelia, Camille, or Fiora, Zhonya's is not a situational purchase — it is core. Build it as your third item, before Shadowflame, whenever the matchup demands it.
- **Over-extending for turret placement in the enemy jungle.** A turret placed in the enemy river or tribrush (tribrush = the three-bush cluster in the river near Dragon/Baron pit — a common ganking chokepoint) is strong vision, but only if you have the movement speed advantage to escape a pinch (in a pinch = when you are in immediate danger and need an instant solution). Establish your nest safely first, then extend turret coverage toward objectives once you have Cosmic Drive.

## Advanced tip

When using UPGRADE+Q (mega-turret), the placement angle determines AOE coverage. Drop the mega-turret not on top of the opponent but one step behind their current position along their retreat path. As they back off from the initial placement zone, they walk into the beam range rather than out of it. Combined with E stun in the approach, this forces the opponent to absorb two to three full beam cycles (each lasting roughly 1.5 seconds) before they can leave the area — which is nearly the entire duration of the 8-second mega-turret at slow target movement speed.
