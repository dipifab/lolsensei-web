---
title: "Lissandra Mid Build & Guide — Patch 16.9"
slug: "lissandra-mid"
language: "en"
patch: "16.9"
champion: "lissandra"
role: "mid"
last_updated: "2026-05-05"
description: "Lissandra mid lane guide for League of Legends Patch 16.9: control mage build path, anti-assassin self-R, key matchups, power spikes, and common mistakes."
quick_learn:
  champion_dd_id: "Lissandra"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Control Mage / Anti-Assassin"
  abilities:
    - key: "P"
      name: "Iceborn Subjugation"
      description: "Enemy champions you kill or assist near Lissandra leave a Frozen Thrall that slows nearby enemies and shatters for magic damage. Minor flavor passive."
      dd_spell_id: "Lissandra_Passive"
    - key: "Q"
      name: "Ice Shard"
      description: "Linear skillshot that shatters on first hit, dealing magic damage and slowing. Shards pass through, hitting enemies behind. Main waveclear and poke."
      dd_spell_id: "LissandraQ"
    - key: "W"
      name: "Ring of Frost"
      description: "Short-range AOE around Lissandra that roots all enemies hit (binds them in place). Anti-engage tool and root setup for R."
      dd_spell_id: "LissandraW"
    - key: "E"
      name: "Glacial Path"
      description: "Skillshot ice claw that deals magic damage. Recast to teleport to the claw's current location. Mobility, escape, and engage tool."
      dd_spell_id: "LissandraE"
    - key: "R"
      name: "Frozen Tomb"
      description: "Cast on enemy: stuns them in ice. Cast on self: enter Stasis (untargetable, invulnerable) and heal, plus AOE damage. Anti-assassin lifeline."
      dd_spell_id: "LissandraR"
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
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3135", name: "Void Staff" }
  situational_items:
    - dd_id: "6657"
      name: "Rod of Ages"
      against: "scaling lanes where you want HP, mana, and AP stacking instead of an early burst spike (vs Anivia, Cassiopeia, Kassadin)"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "kite-heavy enemy comps that need permanent slows on top of your Q (vs Tryndamere, Master Yi, Yone splitpushers)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "healing-stacking comps that need a healing reduction effect to be killable (vs Soraka, Vladimir, Dr. Mundo)"
    - dd_id: "4645"
      name: "Shadowflame"
      against: "swap when you need more burst on shielded targets (vs Lulu, Janna, Karma front-to-back fights)"
  base_combo: ["E", "W", "Q", "R"]
  win_condition: "Lock the enemy carry with W root or R stun in mid-game team fights, survive incoming all-ins with self-R Stasis, and let Liandry's burn the front line while your team cleans up."
  weakness: "Short range. Long-range mages out-poke you, hyper-scalers like Kassadin out-mobility you past 11, and CC-immune ults (Olaf R, Edge of Night active) deny your R lockdown completely."
  runes:
    primary_tree: "Inspiration"
    primary_tree_dd_id: 8300
    keystone:
      dd_id: 8369
      name: "First Strike"
      icon_path: "perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png"
    primary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Inspiration primary: First Strike rewards Q-poke openers with bonus damage and gold scaling that funds AP items. Magical Footwear saves 350g for faster Liandry's, Biscuit covers weak early sustain, Cosmic Insight cuts Flash and R cooldowns."
    secondary_rationale: "Sorcery secondary: Manaflow Band carries you through the high mana costs of E and R combos, Transcendence pushes ability haste past 40% for more frequent W roots and self-R Stasis windows."
    secondary_alternative: "Phase Rush as keystone (replaces First Strike) when laning into a mobile assassin like Yasuo or Yone: hitting Q + W + auto procs Phase Rush for a burst of Move Speed (a brief speed-up that lets you kite — back-pedal while attacking — out of their dive)."
matchup_draft:
  pick_into:
    - examples: ["zed", "talon", "yasuo"]
      archetype: "Mobile assassins that die to your CC chain"
      reason: "Self-R Stasis (untargetable + invulnerable for 2.5s) eats their burst window completely; W root on their gap-close converts the trade into a kill for your team."
    - examples: ["lux", "veigar", "annie"]
      archetype: "Immobile mages with single-cooldown CC"
      reason: "Once their root or stun is on cooldown they have no answer to your E flash + W root + R lockdown engage; you out-kit them on the second exchange every wave."
    - examples: ["sejuani", "leona", "malphite"]
      archetype: "Tank engage initiators"
      reason: "Your R locks the tank in place mid-charge, neutralizing the engage and turning their Flash + ult into 1.5s of standing still while your back line burns them with Liandry's ticks."
  counterpicks:
    - examples: ["xerath", "vel-koz"]
      archetype: "Long-range artillery mages"
      reason: "Their abilities out-range your Q (725) and W (450). They poke you down for free and you have no way to close the gap without committing E, which is a 12-24 second cooldown."
    - examples: ["kassadin", "ryze"]
      archetype: "Hyper-scaling late-game mages"
      reason: "Kassadin's R blink chain out-mobilities your E past level 11, and Ryze's Flash + R + W combo hits you before W root or self-R Stasis can come up. Survive lane and ask for jungler help by minute 14."
    - examples: ["olaf", "morgana"]
      archetype: "CC-immune kits"
      reason: "Olaf's R makes him immune to your W root and R stun — the entire lockdown plan dies. Morgana's E (Black Shield) blocks the magic CC of your R on her carry. Build around them with Liandry's burn instead of relying on lockdown."
---

## Overview

Lissandra is a control mage with a CC-chain identity: every ability locks something down, and her ultimate doubles as the best anti-assassin tool in the mid lane. Her kit pairs **Ice Shard (Q)** for waveclear and poke, **Ring of Frost (W)** as a short-range root (binds enemies in place), **Glacial Path (E)** as a re-castable mobility skillshot that lets her teleport to the claw's location, and **Frozen Tomb (R)** which is the unique piece — cast on an enemy it stuns, cast on yourself it puts you into Stasis (untargetable and invulnerable) for 2.5 seconds while healing and dealing AOE damage. That self-cast R is what makes Lissandra fearless against Zed, Talon, and other burst assassins (champions who try to one-shot you in 1-2 seconds): they commit, you press R on yourself, their cooldowns are wasted, your team collapses on them.

Your game plan is to survive lane against poke (her range is short — Q reaches 725 units, W only 450), hit your level 6 power spike to unlock the R combo, and become the team fight pivot from minute 14 onward. **E flash + W root + R stun on the carry** is the high-leverage engage (the move that opens a team fight); **self-cast R** is the high-leverage defense. Skill expression sits in choosing which mode of R to use under pressure.

## Recommended Build

**Starting items:** Doran's Ring + 2 Health Potions. Lissandra is mana-hungry early; the +25% mana regen from the ring funds your Q poke and W zone.

**Core items (in order):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — first burn-mage spike. The damage-over-time passive (extra magic damage that ticks for several seconds after you hit them) shines on Lissandra because every ability lands on multiple targets. Pairs with W root: rooted enemies cannot escape the burn.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration for the squishy targets your CC chain locks down (any champion with low health and weak defenses, like ADCs and most mages).
3. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — second Stasis option after self-R. Lets you survive 2 burst windows in the same fight; also gives armor for any AD threat.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — the AP multiplier item. Lissandra's AOE damage scales by ratio across all 4 abilities, so this multiplies the entire burst at once.
5. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — the moment any priority target finishes a Magic Resist item, percentage magic penetration solves it.

**Situational items:**

- ![Rod of Ages](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6657.png) **Rod of Ages** — alternative first item into scaling lanes (vs Anivia, Cassiopeia, Kassadin). Slower spike but more HP and mana for level-16 fights, and the passive heals on level-up.
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — vs kite-heavy comps with permanent dashers (Tryndamere, Master Yi, Yone). Adds a permanent slow on every Q hit, so they cannot reposition during your team fight lockdown.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — vs healing-heavy compositions (Soraka mid, Vladimir, Dr. Mundo top). Cuts the healing they receive after your Q hits them.
- ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — when the enemy team runs shields (Lulu, Janna, Karma). The HP-threshold passive (extra magic penetration when the target's HP drops under a threshold) lets your R combo finish targets that survive at 20-30% HP.

**Boots:** Sorcerer's Shoes is default for the magic penetration. Ionian Boots of Lucidity is acceptable if you want more R uptime in late-game team fights — the cooldown reduction on summoner spells stacks with Cosmic Insight.

**Skill order:** Max **Q** first (waveclear and poke main), **W** second (root duration scales with rank), **E** last (cooldown only matters on the recast — the damage scaling per rank is small). Take **R** at levels 6, 11, 16.

**Runes:** Primary **Inspiration** with **First Strike**, **Magical Footwear**, **Biscuit Delivery**, **Cosmic Insight**. Secondary **Sorcery** with **Manaflow Band** and **Transcendence**. Switch the keystone to **Phase Rush** when laning into Yasuo or Yone — the Move Speed proc lets you kite (back-pedal while attacking) out of their dive range after Q + W.

## Key matchups

- **Zed:** Even-to-favored. His level-6 R all-in is the test: when you see his shadow drop, press **R** on yourself before his Death Mark animation finishes. The ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** rush after ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** gives you a second Stasis window in the same fight.
- **Yasuo:** Wind Wall (his W) blocks Q. Save **Q** for after he uses his shield ability, max range Q only when his Wind Wall is on cooldown. Switch keystone to **Phase Rush** so you can kite (move back while hitting) out of his Q3 + E gap-close.
- **Xerath:** Unfavored. His Q goes 1450 units and his R is global; both are out of your reach. Hug minions, push hard with **Q** to keep him in lane, and call your jungler — you cannot solo this matchup.
- **Anivia:** Even, scales late. She has more burst once she has 3 items but you have better team fight engage from level 6. Trade through her egg passive only with R + ignite, never without — she will revive and outlast your cooldowns.
- **Kassadin:** Unfavored after level 11. Push the wave hard pre-6, deny him CS, and demand jungler attention by minute 12. Once he has his R rank 2, his blink chain out-mobilities your **E** and you cannot land **W** on him.

## Power spikes & win conditions

- **Level 2:** With **Q** + **W** you have a poke + zone combo. Trade by walking up, **Q** through the wave to scratch them, then **W** if they step in to retaliate.
- **Level 6:** First **Frozen Tomb**. The **E flash + W root + R stun** combo is now your engage; the self-cast **R** is now your anti-burst escape. Roams to side lanes become high-value.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment completion (~ minute 11-13):** Your team fight damage doubles. A rooted target sitting in your **W** + Q-shard ticks loses 30-40% HP from burn alone before your team commits.
- **Two items + boots (~ minute 18-22):** ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** + ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** is the team fight pivot. Engage on tank with R, Stasis on tower with Zhonya's if dive turns sour.

## Common mistakes

- **Using R on the wrong target.** R-stun on a 70%-HP tank wastes the cooldown; R-stun on a 30%-HP carry wins the fight. Pre-fight, decide which enemy is worth the lock and never deviate. Hold the cooldown when in doubt — a 120-second R is a precious resource.
- **Self-casting R too early.** Stasis lasts 2.5 seconds. Pop it the instant you see the assassin commit (Zed shadow, Talon E, Akali R1) — not 2 seconds before, or their next cooldown finishes you when Stasis ends.
- **Treating E as a damage tool.** **E** is mobility first, damage second. Burning it for chip damage in lane leaves you with no escape against a gank or a dive (going under tower to kill someone). Hold the recast until you actually need to teleport.
- **Engaging without the wave.** Lissandra's range is short; without minions in front you walk into Q-poke from the enemy mid laner. Slow-push the wave (let it build on your side) so you have meat-shields when you E-flash in.
- **Skipping ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) Zhonya's Hourglass against AD assassins.** Self-R covers one burst window. The second one ends you. Build Zhonya's third item against any double-Stasis matchup (Zed, Talon, Kha'Zix in your face).

## Advanced tip

Master the **E + Flash + W + R** engage as a single muscle-memory sequence. Cast **E** to start the claw traveling, **Flash** sideways to throw off the opponent's positioning prediction, recast **E** to teleport to the claw, **W** the instant you land for the AOE root, then **R** the locked target before the root ends. Done at speed (under 0.7 seconds for the last three inputs) it is unreactable: the enemy carry is rooted before they realize you have left your back line. Practice this in the practice tool with target dummies until you can chain the four inputs without looking at your hotbar.
