---
title: "Mordekaiser Top Build & Guide — Patch 16.9"
slug: "mordekaiser-top"
language: "en"
patch: "16.9"
champion: "mordekaiser"
role: "top"
last_updated: "2026-05-04"
description: "Mordekaiser top lane guide for League of Legends Patch 16.9: AP bruiser build path, key matchups, power spikes, common mistakes, and an advanced R combo tip."
quick_learn:
  champion_dd_id: "Mordekaiser"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Battlemage / Juggernaut"
  abilities:
    - key: "P"
      name: "Darkness Rise"
      description: "After 3 attacks or spells against champions or monsters, gain a damage aura around you and bonus Move Speed for the duration."
      dd_spell_id: "Mordekaiser_Passive"
    - key: "Q"
      name: "Obliterate"
      description: "Smash the ground in front of you. Damage is doubled if it hits only one enemy — your main damage tool."
      dd_spell_id: "MordekaiserQ"
    - key: "W"
      name: "Indestructible"
      description: "Passive: store a portion of damage you deal and take. Active: convert the stored amount into a shield. Recast to heal a percentage of the leftover shield."
      dd_spell_id: "MordekaiserW"
    - key: "E"
      name: "Death's Grasp"
      description: "Pull all enemies in a cone in front of you toward you, dealing magic damage. Your only engage tool — also doubles as a wave-tag from range."
      dd_spell_id: "MordekaiserE"
    - key: "R"
      name: "Realm of Death"
      description: "Banish one enemy champion to a 1v1 pocket dimension for 7 seconds. Steal a portion of their core stats for the duration; if you kill them, keep the stats until they respawn."
      dd_spell_id: "MordekaiserR"
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
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
  situational_items:
    - dd_id: "3065"
      name: "Spirit Visage"
      against: "vs heavy AP comps — boosts all self-healing by 30%, doubling the heal from recasting your W shield"
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "vs 2+ tanks (Sion, Ornn, Cho'Gath): max-HP burn damage shreds high-HP frontliners"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "swap from Sorcerer's vs heavy auto-attack lanes (Vayne, Quinn, Teemo) — 12% reduction on basic attacks"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC (Lissandra R chain, Twisted Fate stun roams) — spell shield blocks the first ability"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Reach Riftmaker around minute 13, then look for picks: R the enemy carry off the wave or out of objective fights, win the 1v1 in the death realm, come back with stolen stats."
  weakness: "No dash, no ranged poke, vulnerable to ranged top laners (Vayne, Quinn, Teemo) and to spell-shield or parry tools (Banshee's Veil, Fiora W) that neutralize R."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision with Conqueror is built for the long fights Mordekaiser wants: it stacks per hit and at full stacks gives bonus adaptive damage. Triumph heals on takedowns, Legend: Alacrity speeds the passive, Last Stand spikes damage at low HP."
    secondary_rationale: "Resolve secondary: Second Wind passively regenerates HP after taking damage (great vs poke matchups), Revitalize boosts the heal from recasting your W shield, directly buffing your main sustain tool."
    secondary_alternative: "If the enemy team has 2+ ranged poke threats (Teemo top + Xerath mid), swap Resolve to Inspiration with Magical Footwear (free boots at minute 12) and Cosmic Insight (more frequent Flash) for safer engages."
matchup_draft:
  pick_into:
    - examples: ["garen", "sett", "darius"]
      archetype: "Melee bruisers without ranged poke"
      reason: "Mordekaiser thrives in extended trades — his W shield stores the damage they pump into him and his passive aura ticks during the whole fight. They have no way to disengage once locked in by his E pull."
    - examples: ["vladimir", "kayle"]
      archetype: "Squishy carries with limited escape"
      reason: "His R drags one target to a 1v1 pocket dimension for 7 seconds; carries with no real escape (Vladimir's pool is on cooldown after one use, Kayle has no dash) get deleted while their team holds the fight outside."
    - examples: ["renekton", "pantheon"]
      archetype: "Lane bullies without R counter-tools"
      reason: "They beat Morde levels 1-5 but their kit has no answer to R post-6: a clean R off the wave isolates them from their team and Mordekaiser wins the 1v1 with stolen stats."
  counterpicks:
    - examples: ["vayne", "quinn", "teemo", "gnar"]
      archetype: "Ranged top laners with kite tools"
      reason: "Mordekaiser has no dash and no ranged poke; ranged tops auto-attack and disengage from outside his E range, denying every all-in attempt and slowly bleeding his HP."
    - examples: ["fiora", "jax"]
      archetype: "Duelists with parry or dodge tools"
      reason: "Fiora's W parries the R activation and refunds the cooldown; Jax's E dodges the Q empowered hit, neutralizing the kit they need most for the 1v1."
    - examples: ["olaf"]
      archetype: "CC-immunity ultimates"
      reason: "Olaf's R Ragnarok grants immunity to disables and removes them on cast: he is unaffected by E's pull and his sustain in the death realm makes the R 1v1 a coin flip even when Morde lands the cast."
---

## Overview

Mordekaiser is an AP juggernaut top laner — a melee fighter who deals magic damage instead of physical. He has no dash (instant short-distance teleport built into a champion) and no ranged poke (long-range chip damage to wear down the enemy's HP without committing), so the lane plan is built around walking up, soaking minor poke, and winning every long trade (a back-and-forth exchange of damage in lane) thanks to his passive damage aura (**Darkness Rise**) and the shield from **Indestructible (W)**. The kit rewards extended fights (trades that last several seconds, not 1-2 second burst exchanges where one side dumps all damage at once): the longer you stand next to your target, the more your aura ticks and the more damage your **W** stores into a refundable shield.

The signature ability is **Realm of Death (R)**: a 7-second banish that drags one enemy champion into a pocket dimension where it's a clean 1v1 with no allies, no minions, no help. You also steal a chunk of the victim's stats for the duration. The whole game plan rotates around R: pick (single out and isolate) the squishy carry (the team's fragile damage dealer with high damage but low HP, like the AD carry / ADC) out of a teamfight, delete them solo while your team holds the 4v4 outside, then come back with their stats for the cleanup. This makes Morde forgiving for a novice — even if your laning is rough, a single good R in the first big fight can rewrite the game.

## Recommended Build

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Mordekaiser's abilities cost zero mana, but Doran's Ring still gives you the AP, HP, and tiny mana regen that combine into the best level-1 trading stats for him.

**Core items (in order):**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — your first big spike. Gives AP, HP, and omnivamp (heals you for a percentage of all damage you deal). After 3 seconds in combat with a champion, your damage gets a flat +8% bonus that converts to true damage (damage that ignores armor and magic resist). Perfect for Mordekaiser because every fight he wants is a long fight.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration (your damage cuts through more of the enemy's magic resist). Default boots when there's any squishy carry to delete with R.
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — your scaling item (an item whose value grows the more AP you already own): it multiplies your total AP by 30%. Buy it third when you have a stable lane and can afford a non-defensive item.
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — AP, armor, and an active that turns you invulnerable for 2.5 seconds (you can't move or act, but nothing can hurt you). Use it inside your **R** if the 1v1 isn't safe, or in a teamfight to bait the enemy team into wasting cooldowns on you.

**Situational items:**

- ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — buy instead of (or in addition to) Zhonya's when the enemy team has heavy magic damage. Crucial detail: it boosts all self-healing by 30%, including the heal from recasting your **W** shield. Effectively doubles the value of every shield you absorb.
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — buy when the enemy team has 2+ tanks. Its passive burns a percentage of the target's max HP per second — the only way melee AP bruisers shred high-HP frontliners.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — replace Sorcerer's Shoes when the enemy lane is a heavy auto-attack threat (Vayne, Quinn, Teemo). The 12% reduction on basic attacks neutralizes their main damage source.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — vs single-target magic CC that interrupts your engage (Lissandra R chain, Twisted Fate stun roams). The spell shield blocks the first ability used on you.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** by default (more damage). ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** when the lane is auto-attack heavy or the enemy team has 3+ AD threats.

**Skill order:** Max **Q (Obliterate)** first — it's your main damage and the cooldown drops from 8s to 4s as you rank it. Max **E (Death's Grasp)** second to lower its long cooldown and make the pull more reliable. Max **W (Indestructible)** last — its rank-up mostly affects shield duration, less critical than Q damage. Take **R** at levels 6, 11, 16 as always.

**Runes:** Primary **Precision** with **Conqueror** (stacks per hit during long fights — exactly what Morde wants), **Triumph** (heals you after a takedown — a kill or assist), **Legend: Alacrity** (attack speed to proc, meaning trigger, your passive faster), **Last Stand** (more damage when low HP). Secondary **Resolve** with **Second Wind** (passive HP regen after taking damage) and **Revitalize** (boosts your shields and self-heals — directly buffs **W**).

## Key matchups

- **Garen:** Even matchup decided by who lands the first hit cleanly. Garen's **E (Judgment)** out-trades you if you stand next to him and tank it; instead, **Q** him during his spin to interrupt the rhythm, then walk away after one trade and let your sustain reset. Don't all-in him while his **W (Courage)** is up at full HP.
- **Darius:** You lose the early levels (his **Q** has more range and he stacks bleed damage on you), but you win post-6 if you R him: in the death realm he can't reset his bleed off minion kills, so he loses his main pressure tool. Don't all-in (full commit to a kill attempt) him level 1-5; just farm and wait for R.
- **Vayne:** Hard counter. She has the range, the true damage on her **W**, and the **Q** dash to never let you touch her. Build ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** instead of Sorcerer's, ask your jungler for a level 3 gank, and accept that you won't kill her in lane — focus on farming with **E** from max range.
- **Fiora:** Counter. Her **W (Riposte)** parries (deflects) the next ability you throw at her, including the **R** activation animation, which means a wasted 100+ second cooldown if she times it right. Fake the R cast to bait (trick her into using) the parry, then re-engage.
- **Renekton:** Loses post-6 if you survive the lane. Pre-6 he stat-checks you (out-damages you with raw stats, no skill needed); play safe, farm with **Q** and **E** from max range, and at level 6 walk up confidently — once he uses his stun on you, R him and the death realm 1v1 favors you with stat-steal.

## Power spikes & win conditions

- **Level 6:** First **R (Realm of Death)**. Suddenly any matchup where you can survive to 6 becomes a coin flip — even Vayne loses if you R her clean off the wave. Bait an aggressive trade right after hitting 6 to force the cooldown if you can't all-in.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker completion (~ minute 12-14):** Your trades flip. The omnivamp keeps you topped off through farming, and the +8% true damage at 3 seconds means every R you land 1v1 is now a guaranteed kill on a squishy.
- **Level 11 + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes:** Second R rank (cooldown drops from 140s to 120s) plus magic pen. This is when you start hunting picks: walk top → mid through the river (the central path between lanes), R-Flash (cast R and Flash mid-animation — see Advanced tip) anyone caught alone.
- **3-item online (~ minute 24-28):** With ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap**, your R 1v1s the enemy carry every time. This is the window (your peak strength period): force objective fights (Drake, Rift Herald, Baron contests) here, R the back-line carry (the squishy damage dealer who positions at the back of the team), ignore everything else.

## Common mistakes

- **R'ing the tank in a teamfight.** R is a 1v1 banish: if you take their tank, your team fights 4v4 against the carries and loses. Always R the squishy back-line target your team can't reach (the AD carry / ADC like Jhin or Ashe, the burst mage like Lux or Syndra). Before each fight, agree out loud with your team which target you'll R.
- **Wasting W as a defensive shield without recasting.** Most of W's value comes from the **recast** that converts the leftover shield into health. If the shield is about to expire untouched, recast it to heal — don't let it tick away.
- **Engaging with Q first.** Q is your main damage and you want it for the empowered single-target hit (double damage if it hits one enemy only). Open with **E (Death's Grasp)** to pull the enemy in, then **Q** them while they're stuck at point-blank — that order maximizes the chance Q hits a single target instead of being split between minions and champion.
- **Ignoring magic resist on enemy carries.** Once an enemy carry buys ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** or any major MR item, your damage drops off a cliff. Buy ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** (gives 40% percent-based magic penetration that cuts through any MR stacking) as your 4th or 5th item the moment you see it on the enemy team's item tab.
- **R'ing the wrong target out of panic.** When you're losing a fight, the impulse is to R whoever is hitting you. Resist it. R is a 7-second commitment: if you R a tank you can't kill, you sit in the death realm watching your team die for 7 seconds with nothing to come back to. Rule: only press R on someone you can confidently kill in 4-5 seconds.

## Advanced tip

The R-Flash combo: cast **Realm of Death (R)** on an enemy target, then immediately **Flash** (the summoner spell that blinks you a short fixed distance) to reposition mid-cast. Because R has a brief animation before the banish triggers, Flash repositions you without canceling the R, and the enemy gets dragged to wherever you flashed to (not where you started). This unlocks otherwise-impossible picks: R a carry safe behind their tanks, Flash sideways into the death realm, and you've stolen them from across a teamfight before their team can react. The visual cue for the enemy is "Mordekaiser disappeared" — they don't see the carry being banished from across the fight.
