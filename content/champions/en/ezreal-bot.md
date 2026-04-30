---
title: "Ezreal Bot Build & Guide — Patch 16.9"
slug: "ezreal-bot"
language: "en"
patch: "16.9"
champion: "ezreal"
role: "bot"
last_updated: "2026-04-29"
description: "Ezreal bot lane guide for League of Legends Patch 16.9: starter kit, core AD build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Ezreal"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Skirmisher"
  abilities:
    - key: "P"
      name: "Rising Spell Force"
      description: "Each ability that hits an enemy stacks attack speed (up to 5 stacks). Drives Ezreal's auto-attack DPS."
      dd_spell_id: "Ezreal_Passive"
    - key: "Q"
      name: "Mystic Shot"
      description: "Long-range linear skillshot dealing physical damage. Refunds cooldowns on hit and applies on-hit effects — your main poke and DPS button."
      dd_spell_id: "EzrealMysticShot"
    - key: "W"
      name: "Essence Flux"
      description: "Magic orb that sticks to a champion or objective. Detonates on next attack or ability for bonus damage and a mana refund."
      dd_spell_id: "EzrealEssenceFlux"
    - key: "E"
      name: "Arcane Shift"
      description: "Short-range blink + auto-firing bolt. Long cooldown — your only escape, do not waste it for damage early."
      dd_spell_id: "EzrealArcaneShift"
    - key: "R"
      name: "Trueshot Barrage"
      description: "Global linear beam that deals heavy damage to the first non-minion target. Use for snipes, finishers, or wave clear in emergencies."
      dd_spell_id: "EzrealTrueshotBarrage"
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
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "6675", name: "Navori Flickerblade" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "vs single-target hard CC you must cleanse (Malzahar R, Skarner R, Warwick R) — active removes the lock-down so you can keep kiting"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "vs telegraphed projectile CC (Morgana Q, Ashe R, Blitzcrank Q) — the spell shield blocks one hostile ability and saves your positioning"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "vs poke lanes (Caitlyn, Varus, Xerath support) where you need lifesteal sustain plus a shield to survive trades"
    - dd_id: "3091"
      name: "Wit's End"
      against: "vs heavy AP burst threats (LeBlanc mid, Syndra, Brand support) — magic resist plus on-hit magic damage on your Q"
  base_combo: ["W", "Q", "AA", "E", "AA"]
  win_condition: "Stack passive attack speed by landing Q on every cooldown, kite from max range with auto-attacks plus Q, and snowball the bot lane into a 3-item DPS spike around minute 25-30 where you out-DPS the enemy carry."
  weakness: "Squishy with no innate escape outside E (long cooldown). Vulnerable to hard engage and long-range CC; if you miss Q in lane you fall behind because passive stacks evaporate after 6 seconds without an ability hit."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 8005, name: "Press the Attack", icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png" }
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["draven", "kalista", "samira"]
      archetype: "Short-range hyper-aggressive marksmen"
      reason: "Ezreal Q out-ranges their auto-attacks (1150 units vs ~525-550). Poke them off the wave from a safe range; they need to all-in to win the lane and your E is a panic button against their dive."
    - examples: ["sivir", "varus", "kog-maw"]
      archetype: "Immobile marksmen without dash"
      reason: "Ezreal can sidestep a slow-moving Q (Sivir Boomerang, Varus Q) while landing his own. They cannot punish his slow waveclear because they cannot close the gap when he steps up."
    - examples: ["aphelios", "kai-sa"]
      archetype: "Scaling marksmen with weak laning"
      reason: "Ezreal's level 2-6 spike is stronger than theirs. Q poke shoves them off the wave so they reach core items behind, denying their late-game scaling."
  counterpicks:
    - examples: ["miss-fortune", "jhin"]
      archetype: "Pre-6 burst marksmen with frontloaded damage"
      reason: "Their level 1-3 trade pattern (Jhin auto reset, MF Double Up) outdamages Ezreal before he stacks passive. They force you to back early and lose tempo on Manaflow Band."
    - examples: ["caitlyn", "xerath", "ziggs"]
      archetype: "Longer-range artillery (poke lane)"
      reason: "Their Q range or trap range exceeds Ezreal's 1150. He cannot retaliate without stepping into their threat zone, so the lane bleeds his HP without a way to all-in back."
    - examples: ["leona", "nautilus", "thresh"]
      archetype: "Hard-engage tank supports"
      reason: "Their point-and-click engage (Leona E, Naut Q, Thresh Q hook) bypasses Ezreal's main strength of safe-range poke. Once locked, Ezreal's E often is not enough to escape a follow-up."
---

## Overview

Ezreal is a long-range AD carry who trades raw auto-attack DPS for safety and skillshot poke. His kit revolves around landing **Mystic Shot (Q)** on cooldown — every hit refunds part of his cooldowns, stacks **Rising Spell Force** passive for attack speed (up to 5 stacks, a roughly +50% AS spike), and applies on-hit item effects like Kraken Slayer's bonus damage. He has the best escape tool of any traditional ADC in **Arcane Shift (E)**, but the price is fragile lane sustain and a slower scaling curve than ADCs like Jinx or Aphelios.

The game plan is patient: poke with **Q** from max range (1150 units, longer than every other ADC auto-attack), shove waves with **W**-**Q** combos when the enemy steps back, and roam mid with **R** to score pickoffs (eliminating an isolated enemy outside the teamfight) across the map. Skill expression sits in **Q** prediction (lead the target by their movement vector — they are easier to hit while last-hitting because they slow themselves to attack a minion) and in **E** discipline (do not blink in for damage; save it to escape the inevitable engage).

## Recommended Build

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Doran's gives the AD and lifesteal you need to trade with **Q** without falling behind on HP.

**Core items (in order):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — first item DPS spike. Every third auto deals true damage (damage that ignores armor and magic resist), and **Q** counts as an on-hit application. This is your unconditional first buy.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack-speed boots that compound with passive stacks. Buy after Kraken's first component.
3. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — extends your auto-attack range by ~150 units when energized, matching your **Q** range. Lets you kite (move backwards while attacking, keeping distance) from max range without stepping forward.
4. ![Navori Flickerblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6675.png) **Navori Flickerblade** — basic attacks reduce non-ultimate cooldowns. Combined with **Q**'s own cooldown refund, you can throw a **Q** every ~2 seconds.
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — armor penetration for the late game when frontline tanks have stacked armor.

**Situational items:**

- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — into single-target hard CC you must cleanse (Malzahar R, Skarner R, Warwick R). The active removes the lock-down so you can keep kiting.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — into telegraphed projectile CC (Morgana Q, Ashe R, Blitzcrank Q). The spell shield blocks one hostile ability and saves your positioning.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — into poke lanes (Caitlyn, Varus, Xerath support). Lifesteal lets you sustain through the harass and the overheal shield gives you an HP buffer.
- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — into heavy AP burst threats (LeBlanc mid, Syndra, Brand support). Magic resist plus bonus on-hit magic damage on every auto and **Q**.

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** is default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** is acceptable if you need more **R** uptime for cross-map snipes.

**Skill order:** Max **Q** first (your damage and DPS engine), **W** second (extra burst on stuck targets), **E** last (it never deals enough to be worth maxing — it stays a blink). Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Precision** with **Lethal Tempo** (or **Press the Attack** into squishier lanes), **Presence of Mind** (mana sustain), **Legend: Bloodline** (lifesteal scaling), **Coup de Grace**. Secondary **Sorcery** with **Manaflow Band** (essential — Ezreal's mana costs are punishing without it) and **Transcendence**.

## Key matchups

- **Caitlyn:** She out-ranges your **Q** with her auto-attack (650 vs your 550 melee range, but her traps outzone you). Stay behind minions, never walk over a trap, and farm with **Q**. Look to all-in when she uses **Net (E)** to escape a wave — her cooldown is up.
- **Draven:** He wants short-range trades (close-range exchanges of attacks). Use **Q** to push the wave, freeze it (last-hit minions without killing the wave so it stays under your tower) if behind, and call for jungle ganks early. Avoid his Spinning Axes — if he has 2 axes spinning, do not auto-attack him.
- **Lucian:** Mirror-match for trade tempo. Save **E** for when he uses **Dash (E)** offensively — that is when he is committed and you can either bait him under tower or follow up with your own **Q** burst.
- **Jhin:** His 4th-shot auto deals huge crit damage; track his ammo (count his autos: 1, 2, 3, then back off before 4). Punish him during the long reload animation by stepping up and landing **Q**.
- **Sivir:** Even matchup until level 6. Her **Spell Shield (E)** blocks your **Q** — bait it with a **W** orb first (cheap and fast), then **Q** through the down window.

## Power spikes & win conditions

- **Level 2:** First trade window. With **Q** + **W**, you can detonate **W** with **Q** for a chunk of damage that wins almost any short trade.
- **Level 6:** First **Trueshot Barrage** unlocks roams and execute pressure (using R to finish off low-HP enemies fleeing across the map). **R** the enemy mid laner if they recall low; the global range turns positioning mistakes into kills.
- ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer completion (~ minute 12-14):** Your DPS roughly doubles. Force a 2v2 dive at this point — every 3rd auto deals true damage that the enemy support cannot itemize against.
- **3-item spike (~ minute 25-30):** ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** + ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** + ![Navori Flickerblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6675.png) **Navori Flickerblade** is when you out-DPS most carries from a safer range. Push for Baron and dragon fights here.

## Common mistakes

- **Holding Q for the perfect shot.** Your passive stacks (the +AS buff on hit) decay after 6 seconds without an ability hit. Throw **Q** at minions to refresh stacks and refund cooldown — even a missed champion **Q** that hits a minion is worth the mana.
- **Using E offensively in lane.** **Arcane Shift** has a 14-26 second cooldown; once you blink in, you have nothing left if the support engages. Save it for escapes only until you have ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** and a kill lead.
- **Standing at max R range in team fights.** Your **Q** range is 1150; standing at 1500+ to land **R** snipes puts you outside your support's peel (the protection your support gives you against incoming dives). Stand at the second-furthest position so a flank does not delete you.
- **Poking with Q when mana-starved.** If you are below 30% mana, push the wave and back. A scaling, no-mana Ezreal is useless because every action of his kit (including E for escape) costs at least 28 mana.
- **Ignoring W on objectives.** **Essence Flux** sticks to dragons and Baron. Land **W** then **Q** detonates it for ~250 bonus damage on the smite contest — a free chunk of damage that wins the steal.

## Advanced tip

Practice the **W**-stick combo on champions: throw **W** at a low-HP enemy through fog of war (if you have vision), then immediately **Q** to detonate. The detonation refunds **W**'s mana cost plus extra mana, so this combo is essentially free if it lands. In team fights, sticking **W** on the enemy carry lets every basic attack from your team detonate it, turning a 50-mana orb into a roughly 400-damage chunk over 4 seconds across multiple sources. The key is throwing **W** *before* the engage starts, not during — its 0.25s travel speed is too slow to catch a target that is already moving.
