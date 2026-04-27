---
title: "Neeko Top Build & Guide — Patch 14.10"
slug: "neeko-top"
language: "en"
patch: "14.10"
champion: "neeko"
role: "top"
last_updated: "2026-04-27"
description: "Neeko top lane guide for League of Legends Patch 14.10: AP bruiser build with Riftmaker, niche pick tactics, key matchups, power spikes and common mistakes."
quick_learn:
  champion_dd_id: "Neeko"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Bruiser"
  abilities:
    - key: "P"
      name: "Inherent Glamour"
      description: "Disguise as an allied champion. Taking damage from enemies or casting damaging spells breaks the illusion."
      dd_spell_id: "Neeko_Passive"
    - key: "Q"
      name: "Blooming Burst"
      description: "Throw a seed that blooms once on impact, then a second time if it hits a champion or kills a unit. Main waveclear and lane damage."
      dd_spell_id: "NeekoQ"
    - key: "W"
      name: "Shapesplitter"
      description: "Passive: every third basic attack deals bonus magic damage. Active: send a clone forward to bait skillshots and disengage tools."
      dd_spell_id: "NeekoW"
    - key: "E"
      name: "Tangle-Barbs"
      description: "Linear root skillshot. Becomes wider, faster and roots longer if it kills a unit or passes through a champion first."
      dd_spell_id: "NeekoE"
    - key: "R"
      name: "Pop Blossom"
      description: "Channel that ends in a leap and AOE knockup. Channel is hidden while disguised by W passive or P — your engage and flank tool."
      dd_spell_id: "NeekoR"
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
    - { dd_id: "1056", name: "Doran's Ring" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4629", name: "Cosmic Drive" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs AD assassins/divers (Camille, Fiora, Pantheon). Stasis = 2.5s invulnerability that buys time after their cooldowns are spent"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "vs full-AD enemy teams (e.g. Renekton top + Jhin + Zed). Trade Sorcerer's Shoes for these when 4 of 5 enemies deal physical damage"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC that interrupts your R (Lissandra R, Ryze stun, Rumble equalizer). Keeps your engage window protected"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap when 2+ enemy targets buy an MR item (Magic Resist; reduces magic damage)"
  base_combo: ["W", "E", "Q", "R"]
  win_condition: "Survive lane to 2 items, then group with the team and flank around vision (cut into the fight from a side angle) using disguise. Riftmaker turns your AOE damage into sustained healing in extended fights."
  weakness: "Niche pick that loses lane to heavy bruisers (Darius, Garen, Sett). No dash, no shield: if you cannot bait one ability with the W clone, you eat full trades."
---

## Overview

Neeko top is a niche pick — meaning she is not commonly played in this role and most opponents will not know what to expect. The trade-off is real: she loses extended trades against heavy bruisers (champions built to fight hand-to-hand for long durations), so the early game is about surviving rather than winning lane. Her value comes online once she has Riftmaker and can join teamfights as an AP bruiser (a champion that mixes magic damage with enough HP and healing to stay in the fight longer than a standard mage).

Your top lane plan splits into three phases. Levels 1-5 are damage control: clear the wave with **Q** double-bloom (the second explosion that triggers when **Q** hits a champion or kills a minion), hold **E** as a panic root for ganks (jungle ambushes from the river), and avoid auto-attack trades with melee bruisers. Levels 6-11 are about looking for cross-map **R** flanks — you have map pressure that a Garen or Sett does not. Past level 12, group with the team. Lane prio (priority — enough lane control to roam without losing CS or tower plates) becomes secondary to teamfight setup.

## Recommended Build

**Starting items:** Doran's Ring + 2 Health Potions. Skip Doran's Shield: the regen doesn't compete with Doran's Ring AP scaling for **Q** damage in lane.

**Core items (in order):**

1. **Doran's Ring** — starter. Bonus AP and mana regen for **Q** spam in lane.
2. **Riftmaker** — main item. AP bruiser power-spike: HP, AP, omnivamp (healing from all damage you deal), and a damage-amp passive that ramps the longer a fight lasts. Perfect for Neeko's AOE in extended teamfights.
3. **Sorcerer's Shoes** — flat magic penetration; the squishy targets you flank rarely have MR before minute 25.
4. **Rabadon's Deathcap** — late-game AP multiplier, your highest scaling slot.
5. **Cosmic Drive** — AP, ability haste, movement speed; the bonus speed compounds with **Riftmaker**'s sustain to make you a roaming threat through minute 25-30.

**Situational items:**

- **Zhonya's Hourglass** — into AD assassins and divers (champions that jump on the back line: Camille, Fiora, Pantheon). The stasis is a 2.5-second invulnerability that locks you in place — saves you while their cooldowns reset.
- **Plated Steelcaps** — into full-AD enemy teams. Trade Sorcerer's Shoes for these when 4 of 5 enemies deal physical damage.
- **Banshee's Veil** — into single-target magic CC that cancels your **R** channel (Lissandra **R**, Ryze stun, Rumble equalizer).
- **Void Staff** — when 2+ enemy targets buy an MR item.

**Boots:** Sorcerer's Shoes is default. Mercury's Treads if the enemy team has 2+ sources of hard CC (stuns, charms, fears, knockups) and you absolutely need to land **R** in a teamfight.

**Skill order:** Max **Q** first (waveclear and damage), **E** second (root utility), **W** last. Take a point in **R** at levels 6, 11, 16.

**Runes:** Primary **Sorcery** with **Phase Rush** (a movement-speed burst that procs on three attacks/abilities — perfect for kiting bruisers), **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Resolve** with **Conditioning** and **Overgrowth** for the extra HP that makes Riftmaker's sustain matter.

## Key matchups

- **Darius:** Hard counter. He out-trades you in melee and his **Q** healing eats your damage. Stay back, push **Q** at minimum range, and call your jungler at level 6. Do not engage even if he looks low — his passive bleed and **R** reset deletes you.
- **Garen:** Even-to-difficult. Push the wave fast with **Q** double-bloom and roam mid; you have **R** map pressure he doesn't. Avoid 1v1 sustained fights — his **W** silence cancels your **R** channel.
- **Renekton:** Difficult pre-6 because of his fast double-stun. Hold **E** for his **W** dash, then walk away. Post-6 your **R** is hidden under disguise; that's your kill window.
- **Camille:** Difficult lane but a great matchup-of-pick once she roams to mid. Save **W** clone for her **E** hookshot — bait it with the clone, then **E** root through the wave when her dash is on cooldown.
- **Sett:** Difficult lane, tough teamfight. Keep distance, push waves fast, and avoid being grabbed by his **W** stun. Buy Banshee's Veil if he ults you out of position.

## Power spikes & win conditions

- **Level 3:** **Q-W-E** unlocked. Not a kill window in this matchup, but enough to bait one bruiser ability with the **W** clone and trade safely with **Q** double-bloom.
- **Level 6:** First **Pop Blossom**. Hidden channel under disguise turns standard rotations into kill setups — your earliest cross-map **R** flank window (jumping into a fight from a direction the enemy is not watching).
- **Riftmaker completion (~ minute 16-18):** Power spike. AP, HP, and omnivamp arrive at the same time. You shift from "survive lane" to "look for teamfights".
- **Level 11 + 2 items (~ minute 22):** Second **R** point. With Riftmaker's sustain (healing from your AOE damage), you can engage a 5v5 fight, bait dives, and outheal sustained damage in the middle of the fight.

## Common mistakes

- **Trying to win lane against bruisers.** Top is a survival lane on Neeko, not a kill lane. Push **Q** to wave, last-hit with auto-attacks at maximum range, and accept losing 5-10 CS over a death.
- **Casting R in the open.** A visible channel telegraphs the leap a full second early. Always disguise via **W** passive (or your real **P**) before starting **R**, or channel from inside a brush.
- **Sending W to chase, not to bait.** **W** is your only mobility tool. Spending it to extend a kill that wasn't there leaves you stuck when the enemy jungler shows up. Use **W** to escape ganks first, to bait skillshots second, and to chase only when the kill is guaranteed.
- **Building like a mid mage.** Luden's Companion is the wrong item top. You don't have lane priority and your job is to teamfight; Riftmaker's HP and sustain matter more than burst.
- **Skipping the **R** flank for textbook engages.** The whole reason to play Neeko top is the cross-map flank — joining a fight from a side angle the enemy doesn't see coming. Default-grouping with your team eliminates the only edge the pick has.

## Advanced tip

Practice the **R**-flash. Start the **Pop Blossom** channel from outside leap range, then **Flash** at the last 0.25 seconds of the channel. The leap fires from your post-Flash position, which extends the effective AOE radius by roughly a third. Combined with **W** passive disguise — for example, walking up to a teamfight disguised as a teammate already in position — this turns every first **R** in a fight into an unreactable engage on multiple targets at once.
