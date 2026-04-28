---
title: "Lee Sin Jungle Build & Guide — Patch 16.9"
slug: "lee-sin-jungle"
language: "en"
patch: "16.9"
champion: "lee-sin"
role: "jungle"
last_updated: "2026-04-29"
description: "Lee Sin jungle guide for League of Legends Patch 16.9: starter kit, skirmisher build path, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "LeeSin"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Fighter / Skirmisher Jungle"
  abilities:
    - key: "P"
      name: "Flurry"
      description: "After casting an ability, Lee Sin's next 2 basic attacks gain attack speed and refund energy. Cast — auto — auto rhythm."
      dd_spell_id: "LeeSin_Passive"
    - key: "Q"
      name: "Sonic Wave / Resonating Strike"
      description: "Linear skillshot. On hit, recast to dash to the target dealing missing-HP physical damage. Your main gap close."
      dd_spell_id: "LeeSinQOne"
    - key: "W"
      name: "Safeguard / Iron Will"
      description: "Dash to an ally, ward, or yourself with a shield. Recast for lifesteal and spell vamp. Mobility plus sustain."
      dd_spell_id: "LeeSinWOne"
    - key: "E"
      name: "Tempest / Cripple"
      description: "AOE damage that reveals enemies. Recast slows targets it hit. Clear tool, anti-stealth, and slow source."
      dd_spell_id: "LeeSinEOne"
    - key: "R"
      name: "Dragon's Rage"
      description: "Roundhouse kick that knocks back the target and damages enemies behind them. Pickoff finisher and disruption tool."
      dd_spell_id: "LeeSinR"
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
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3084", name: "Heartsteel" }
    - { dd_id: "3071", name: "Black Cleaver" }
  situational_items:
    - dd_id: "6333"
      name: "Death's Dance"
      against: "vs squads with two strong physical damage dealers (Yasuo + Caitlyn) — converts physical damage taken into a slow bleed, not instant"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs heavy AP burst (Diana, Syndra, Lux mid) — the lifeline shield turns one-shots into survivable trades"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs 3+ hard CC champions (e.g. Leona + Lissandra + Sejuani) — tenacity shortens stuns and roots so you keep your dash chain"
    - dd_id: "3053"
      name: "Sterak's Gage"
      against: "when the team needs you to dive (go under enemy turret to kill someone) — the lifeline shield procs after the first big hit"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "late-game flank insurance — if you mistime an R, the resurrect lets your team trade the engage favorably"
  base_combo: ["Q1", "AA", "E", "AA", "Q2", "R"]
  win_condition: "Win the first 14 minutes through invades and ganks. Once Eclipse is up, contest every objective and use R to peel a key enemy out of position. Late game, find a flank, kick a squishy carry into your team."
  weakness: "Falls off hard after minute 25 against scaling carries. No reliable dash if Q1 misses or W has nothing to jump to. Hard CC chains end your engage instantly."
---

## Overview

Lee Sin is an early-game jungler — a skirmisher who wins short fights between two or three players. Imagine a martial artist with a chain of dashes: he hits you with a sound wave, dashes onto you, kicks you into his team, and his auto-attacks come with a built-in attack-speed bonus after every spell. The whole kit is built around one idea: be the strongest fighter on the map for the first 15 minutes, then convert that lead into kills, objectives, and tempo before the opposing carries scale.

His game plan is direct. In the first 8 minutes you invade — meaning you walk into the enemy jungle to steal camps and pick off the enemy jungler. After that you gank lanes whenever your **Q** is up. Late game you stop trying to fight 1v1 (you lose those) and instead look for flanks: you walk around the side of the map, hide in unwarded brush, then **R** the enemy carry into your team. If you cannot land **Q1** consistently, none of this works — the rest of the kit chains off the first skillshot.

## Recommended Build

**Starting items:** Smite + **Hailblade** for a faster jungle clear with AOE damage on the second hit, plus **Refillable Potion**. Take Emberknife only if you want max sustain on a slower full clear with more solo dueling.

**Core items (in order):**

1. **Eclipse** — burst, shield, and omnivamp. The two-hit shield procs perfectly with your Cast → AA → AA passive rhythm. Cleanest first item for skirmishing.
2. **Plated Steelcaps** vs AD-heavy enemies / **Mercury's Treads** vs 3+ hard CC champions. Default Plated.
3. **Heartsteel** — HP and a charged auto-attack that punishes extended skirmishes. Lets you brawl past the "I die at 2 items" timer.
4. **Black Cleaver** — armor shred that scales with your Q-AA-Q rhythm. Turns your team's physical damage into kill threats too.

**Situational items:**

- **Death's Dance** — against squads with two strong physical damage dealers (e.g. Yasuo + Caitlyn). Spreads incoming physical damage as a slow bleed instead of arriving instantly.
- **Maw of Malmortius** — against AP burst lanes (Diana, Syndra, Lux mid).
- **Sterak's Gage** — when you need to dive (go under enemy tower to kill someone). The lifeline shield buys you the second your team needs to follow up.
- **Guardian Angel** — late-game flank insurance after 4 items.

**Boots:** Plated Steelcaps default. Boots of Mobility only on gank-heavy maps with no early CC threats — niche, not standard.

**Skill order:** Max **Q** first (damage and gap close), **E** second (clear and slow uptime), **W** last (utility scales fine on rank 1). **R** at 6, 11, 16.

**Runes:** Primary **Precision** with **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Secondary **Domination** with **Sudden Impact** + **Treasure Hunter** for a snowball lead (vantaggio iniziale che cresce nel tempo: kill → gold → item → più kill), or **Resolve** with **Second Wind** + **Revitalize** if you expect a long, scaling game.

## Key matchups

- **Vi:** She loses skirmishes pre-6 if you bait her **Q** charge. Land **Q1** on her, **E** to slow, then dash to the support after the kick — peel for your carry while she's on cooldown.
- **Hecarim:** He outscales you past 3 items but loses fights pre-9 minutes. Pressure him hard early; if you reach level 6 first, gank top or mid relentlessly. Do not 1v1 him after his first item.
- **Master Yi:** Skill matchup. Your **E** reveals him while his **Q** is active, breaking his target lock. Practice that until it's reflex. Save **R** to kick him out of your back line in team fights.
- **Kha'Zix:** Invade until level 6. After his evolved **R**, he can solo-kill you if you're alone — never walk into the enemy jungle alone past minute 12 without team coverage.
- **Graves:** Mirror tempo matchup. Both junglers win the first 6 levels. Whichever side ganks more wins. Track his **E** charges; if he burned both, you outduel him.

## Power spikes & win conditions

- **Level 3:** Full kit unlocks. Your gank pattern is **Q1 → wait for ally CC or Flash → Q2 → E slow → auto reset**. With no enemy Flash, this kills any squishy at 60% HP.
- **Level 6:** **Dragon's Rage** unlocks the kick play. Pre-6, **R** has no value — first blood pre-6 is your highest leverage point in the game.
- **Eclipse timing (~ minute 9):** You win extended skirmishes. Force fights on Scuttle, Drake, and Voidgrubs in this window.
- **Late game (~ minute 30):** Lee falls off compared to scaling carries (Vayne, Kog'Maw, Master Yi). Your remaining win condition is the ace-flank: get vision in the enemy jungle, find a side position, **R** their carry across the map, follow up with **Q-E-W**.

## Common mistakes

- **Wasting Q1 on a low-HP minion in a fight.** Your **Q** has two parts: the skillshot and the dash. If you cast Q1 on a minion to clear it, you've burned the whole ability for 12 seconds and have no gap close. Save Q1 for the all-in (full commitment trade until someone dies).
- **W-jumping mid skirmish for sustain.** **W**'s lifesteal is real, but if you W onto a ward to heal you give up your gap close. If the trade is winnable, save **W** for an Insec (the kick-back trick — see Advanced tip) or for jumping onto the support after **R**.
- **R-into-tower without follow-up.** Kicking a low-HP carry toward your team only works if the team is in range and ready to commit. **R** alone, off-screen, is a 100g coin flip.
- **Auto-leashing red side at level 1.** With Hailblade you can full-clear from bot side without help. The leash gives up a Scuttle race. Tell bot lane: leash only the first attack-and-go, then leave.
- **Picking Lee in a comp with no pickoff plan.** Lee shines when his team can capitalize on a single isolated kill (a "pickoff": eliminating a nemico fuori dal teamfight). If your team has no follow-up CC, **R** is just a peel tool — adjust your build toward Death's Dance and Sterak's instead of all-in items.

## Advanced tip

The "Insec" kick: walk past your target, **W** to a ward you placed behind them, then **R** as you land — the kick fires from behind, sending them toward your team instead of away. The full sequence is **Q1 hit → Q2 dash → ward behind → W to ward → R**. Practice it in Practice Tool until you can hit the timing without thinking. The window between landing the W and the R is roughly 0.3 seconds — too slow and the target turns to face you; too fast and the W animation eats the R cast. When you can chain it under pressure, Lee jumps two tiers in your hands.
