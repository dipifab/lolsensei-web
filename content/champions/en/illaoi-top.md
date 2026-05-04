---
title: "Illaoi Top Build & Guide — Patch 16.9"
slug: "illaoi-top"
language: "en"
patch: "16.9"
champion: "illaoi"
role: "top"
last_updated: "2026-05-04"
description: "Illaoi top lane guide for League of Legends Patch 16.9: juggernaut tentacle build, Test of Spirit pressure, key matchups, power spikes, common mistakes, and a closing tip."
quick_learn:
  champion_dd_id: "Illaoi"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Juggernaut / Bruiser"
  abilities:
    - key: "P"
      name: "Prophet of an Elder God"
      description: "Tentacles spawn on nearby walls and impassable terrain. Tentacles swing on enemies hit by W, on Vessels created by E, and at any spirit Illaoi pulls. Tentacle hits heal Illaoi off champions and Vessels."
      dd_spell_id: "Illaoi_Passive"
    - key: "Q"
      name: "Tentacle Smash"
      description: "Slams a Tentacle forward in a line, dealing physical damage. Passive: every Tentacle Slam damage is amplified — Q is also her main waveclear and tentacle-trigger button."
      dd_spell_id: "IllaoiQ"
    - key: "W"
      name: "Harsh Lesson"
      description: "Empowered next attack: leaps to the target, deals max-HP physical damage, and orders every nearby Tentacle to swing on that target. The leap is her only mobility."
      dd_spell_id: "IllaoiW"
    - key: "E"
      name: "Test of Spirit"
      description: "Long-range skillshot that rips out the enemy's spirit. Damage to the spirit echoes on the real target. If the spirit dies or the target leaves range, the target becomes a Vessel and is hunted by Tentacles."
      dd_spell_id: "IllaoiE"
    - key: "R"
      name: "Leap of Faith"
      description: "Slams the idol in an AOE around Illaoi, damaging enemies and spawning one Tentacle per champion hit. For 8 seconds Tentacles cannot be killed and slam 50% faster, and W cooldown drops to ~1.5s."
      dd_spell_id: "IllaoiR"
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "3065", name: "Spirit Visage" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap from Plated Steelcaps with 2+ AP threats or chained CC (stuns, roots, knockbacks) like Lissandra, Malphite ult, Sett pull"
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "into kiters who walk away from your W range (Quinn, Vayne, Gnar) — the active dash plus slow keeps them inside Tentacle radius"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "into stacked-armor frontlines (Malphite, Rammus, Shen) — every Q smash and W proc shaves armor for the team"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs AP-heavy comps with burst (Vladimir, LeBlanc) — magic shield triggers when low HP, exactly when Tentacles need extra seconds to swing"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "when the team is behind 4v5 and you need to splitpush — extra resistances vs minions and turret damage to siege a side lane alone"
  base_combo: ["E", "Q", "W", "AA", "R"]
  win_condition: "Pull the enemy spirit with E, keep them inside the radius of as many Tentacles as possible. Every Q smash and W hit ticks damage on both spirit and target — extended fights are her win zone."
  weakness: "No dash, no escape outside Flash. Ranged tops out-poke her from outside W range, and skirmishers with multiple dashes bait Tentacles, leave the radius, and re-enter once Conqueror stacks have dropped."
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
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision with Conqueror: every Q, W and Tentacle swing stacks the keystone, and Illaoi's win zone is sustained 5+ second fights. Triumph heals on takedowns, Legend: Alacrity adds Attack Speed for W resets, Last Stand rewards the low-HP bracket where R lands."
    secondary_rationale: "Resolve secondary: Bone Plating cuts the first 3 hits of an enemy all-in (lvl 2-3 trade window is where Illaoi loses HP without leverage), Overgrowth scales HP from minion deaths up to ~3.5% bonus health by minute 25 — durability to outlive teamfights."
    secondary_alternative: "If the top is hard ranged poke (Teemo, Quinn, Jayce, Kennen), keep Conqueror but swap Resolve to Inspiration with Triple Tonic (extra heal pots) and Magical Footwear (free Boots ~minute 12) — you lose lane prio anyway, so Inspiration recovers gold and HP."
matchup_draft:
  pick_into:
    - examples: ["sett", "garen", "darius", "mordekaiser"]
      archetype: "Short-range melee juggernauts without a dash"
      reason: "Their entire damage profile sits inside W range. Once you W onto them, every nearby Tentacle slams — and they have no dash to leave the radius before Conqueror reaches its full stack cap and the damage snowballs."
    - examples: ["nasus", "sion"]
      archetype: "Tank scalers with weak laning"
      reason: "Their first 6 levels are passive farming. E them off the wave for free chip and stack Vessels: Tentacles hunt them down to the wave, and the spirit echo doubles every Q smash you land."
    - examples: ["yorick", "volibear"]
      archetype: "Melee bruisers that summon pets or buffs to fight"
      reason: "They commit forward to use their kit (Yorick's ghouls, Volibear's empowered AA): once committed, they are inside W range and the Tentacle swarm punishes them for staying."
  counterpicks:
    - examples: ["teemo", "vayne", "quinn", "kennen"]
      archetype: "Ranged top laners who poke or kite"
      reason: "They sit outside W's 400 leap range and shred your HP with autos. Every step you take to close the distance gives them another free shot — and you have no dash to gap-close."
    - examples: ["riven", "irelia", "camille"]
      archetype: "Multi-dash skirmishers"
      reason: "They enter Tentacle range, burst you, then dash out before Conqueror reaches its full stack cap. By the time their dashes come back, your Tentacles are on cooldown — they pick the trade (back-and-forth exchange of damage) tempo, not you."
    - examples: ["jayce", "gnar"]
      archetype: "Ranged-melee form-shifters"
      reason: "They poke from ranged form, then swap to melee form only when Tentacles are not active. You burn W trying to engage and they cancel the trade by re-shifting back to range."
---

## Overview

Illaoi is a **juggernaut** (a slow, immobile melee champion that hits very hard and tanks damage in a straight fight) built around her passive **Prophet of an Elder God**. She spawns **Tentacles** on every nearby wall and impassable terrain — large, untargetable arms that hang off the map and swing on command. The Tentacles do most of her damage; her job is to force the enemy to stand inside their swing radius long enough to die. Her kit revolves around two tools that give the Tentacles something to hit: **W (Harsh Lesson)** is a short leap that orders every nearby Tentacle to slam on the target, and **E (Test of Spirit)** rips the enemy's spirit out of their body so the Tentacles can pummel it (with damage echoing on the real champion).

Her game plan is brutally simple. **Land E to mark the target, walk forward, and W into the densest Tentacle field on your side of the map.** If the enemy steps outside the radius the spirit dies and they become a **Vessel** — a debuff state in which the Tentacles chase them across the lane. From level 6 on, **R (Leap of Faith)** spawns one extra Tentacle per enemy champion hit and makes existing Tentacles untargetable for 8 seconds — this is the only window where she actually has the burst to delete a target, so save R for an all-in or a teamfight, never for waveclear.

## Recommended Build

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. The HP-regen passive softens enemy poke (low-cost ranged damage chipping your HP without committing to a fight) until your level-3 Tentacle pressure comes online.

**Core items (in order):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — first-item spike (the moment your strength jumps the most). The Spellblade passive (a free empowered auto-attack for bonus damage every few seconds after casting an ability) lines up perfectly with W: every leap auto-attack triggers (procs) Spellblade. Adds AD (Attack Damage, the stat behind physical damage), HP, ability haste (a stat that lowers ability cooldowns) and Attack Speed — every stat the kit needs.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — default boots versus enemy teams that hurt you mostly with basic attacks. Cuts auto-attack damage in extended trades (back-and-forth exchanges of damage in lane).
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP plus a **lifeline shield**: when your HP drops below ~30%, an automatic shield triggers. That window is exactly when your Tentacles are still swinging, so the extra seconds of survival turn into the kill.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — turns **burst** AD damage (high damage delivered in 1-2 seconds, like an assassin combo) into a slow **bleed** (damage spread over the next few seconds instead of landing all at once). On takedown, the remaining bleed is wiped clean — a free reset every time R chains a kill.
5. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — MR (Magic Resistance) plus a healing-amp passive that boosts Tentacle heals from the passive, the Death's Dance bleed-clean, and the W max-HP damage trade. The single biggest survival multiplier in the build.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap from ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** when the enemy team has 2+ AP threats or chained **CC** (crowd control: stuns, roots, knockbacks — anything that locks you down so you cannot act). Tenacity (a stat that shortens CC duration on you) is critical because you have no dash to escape.
- ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — into kiters who keep walking away from your 400-unit W (Quinn, Vayne top, Gnar). The active is a short dash plus an AOE slow — exactly the second gap-closer the kit lacks. Replaces ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** as first item, do not stack both.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — into stacked-armor frontlines (Malphite, Rammus, Shen). Every Q smash and W proc shaves armor stacks off the target for your whole team.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — vs AP-heavy comps with **burst** (Vladimir, LeBlanc, Veigar). The magic shield triggers automatically when you drop low — exactly the seconds you need to keep Tentacles swinging.
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — when the team is behind 4v5 and your job is to **splitpush** (push a side lane alone to draw enemies away from objectives). Extra resistances against minions and turrets let Illaoi siege a side lane on her own.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** is the default. Switch to ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** when the enemy team has three or more sources of CC or heavy magic damage.

**Skill order:** Max **Q** first (waveclear, Tentacle damage amp, lowest cooldown). Max **E** second (the cooldown drops 4 seconds at max rank, which means more Vessel pressure per minute). **W** maxes last — its damage is already great because it scales with the target's max HP, so extra ranks add less than Q or E ranks. Take **R** at levels 6, 11, 16.

**Runes:** Primary **Precision** with the keystone (the main rune of the tree) **Conqueror** — a passive that ramps up bonus AD as you keep fighting champions, capped after 5 seconds of sustained combat. Pair with **Triumph** (small heal and gold burst on takedown), **Legend: Alacrity** (Attack Speed stacks on takedowns), and **Last Stand** (extra damage when below 60% HP). Secondary **Resolve** with **Bone Plating** (damage reduction on the next 3 hits after you take damage) plus **Overgrowth** (HP scaling with nearby minion deaths, perfect for a top laner that farms 8+ minions per wave). Stat shards: **Adaptive Force** + **Adaptive Force** + **Health Scaling**.

## Key matchups

- **Sett:** Favorable lane. His Q-W-E combo is telegraphed (the wind-up — the visible animation before the ability fires — is long enough to react). Save E to pull his spirit out the moment he Ws — once his shield bar is empty he has no disengage, and the Tentacle swarm tears a big chunk of HP off him before R is up.
- **Darius:** Skill matchup (the better player wins, regardless of pick). He out-trades you at 5 stacks if Tentacles are down — bait his E pull, then W back into a Tentacle field. Never trade in the middle of the lane, only on your side where your Tentacles cover the wall.
- **Fiora:** Hard melee matchup. Her **W** is a parry (a brief shield that blocks and counters the next ability) — if she parries your E, the spirit never spawns and you waste 14 seconds of cooldown. **Bait** the parry with an animation cancel (start the E cast, then strafe sideways) before committing the real cast.
- **Teemo / Quinn:** Very rough ranged matchup. They sit outside W range, blind your auto-attacks (cancels them for a short time), and chip your HP for free. **Freeze** the wave near your tower (stop pushing and keep the wave on your side of the lane) to deny them farm (the gold and XP from minions), and call your jungler — Illaoi cannot win this 1v1 without help.
- **Camille:** Hardest melee matchup. Her E hookshot dashes her into and out of W range freely, and her R traps you in a 1v1 zone away from your Tentacles. Save E for the moment after she dashes in: if you pull the spirit while she is committed, her R cannot save her. Buy ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** early — most of her damage is true on-hit (true damage applied by every auto-attack: it ignores both armor and MR), but every point of armor still helps against the rest of her kit.

## Power spikes & win conditions

- **Level 3:** With Q + E + W unlocked, Illaoi has her full lane combo for the first time. E to mark, walk into your Tentacle field, W to leap and order the slams. From here the lane is yours unless the enemy is ranged.
- **Level 6:** First **R** unlocks. With even one Tentacle on the wall already, R spawns a second one and makes them all **untargetable** (no enemy can attack them) for 8 seconds. A 1v1 with R up is a kill against any non-mobile bruiser.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completion (~ minute 13-15):** Damage and **stickiness** (your ability to stay glued on a target who tries to run away) jump the most. Force side-lane 1v1s and look to **roam** (leave your lane to help mid or bot) for picks (isolated kills on out-of-position enemies).
- **Two items + R online (~ minute 18-22):** Peak teamfight window. Walk through your team's frontline (your team's tanks/bruisers in the front row), R into 3+ enemies to spawn 3+ Tentacles on the spot, and let the Tentacle swarm shred their backline (the squishy carries — high-damage, low-defense champions who stand behind their tanks during a fight) while Conqueror reaches its full damage cap in the first 5 seconds.

## Common mistakes

- **Fighting in the open mid-lane.** Tentacles only spawn on walls and impassable terrain. If you W onto a target in the middle of the river or in an open lane, no Tentacles slam and the W is just a 400-unit leap that does nothing extra. Always pick the fight near a wall — your side of the lane brush, the tri-bush, your jungle entrance.
- **Throwing E onto a low-HP minion line.** E is your most important ability and has a 12-16 second cooldown. If you cast it and the skillshot hits a minion or misses the champion, you have no setup for 14 seconds — and the enemy knows it. Wait for a clean line of sight on the champion before pressing E.
- **Pressing R for waveclear.** R does AOE damage, but its real value is the 8 seconds of untargetable Tentacles plus the bonus Tentacle per champion hit. Using R on a wave wastes a 70-120 second cooldown and leaves you with zero teamfight tools when the enemy jungler shows.
- **Walking into a fight without checking Tentacle positions.** If your closest Tentacles are timing out (the orange glow fades right before they despawn), wait 4 seconds for a new spawn before committing W. A Harsh Lesson with no Tentacles to slam is a wasted leap.
- **Stacking pure tank items.** Illaoi scales with **AD** (Attack Damage, the stat behind physical damage) — every Tentacle slam is a percentage of her AD. Going Sunfire + Warmog's flat out kills your damage; you stop killing squishies and turn into a slow walking minion. Stick to the AD-bruiser core.

## Advanced tip

Practice the **E animation cancel**. Test of Spirit has a long cast animation (~0.5s) during which Illaoi is locked in place — long enough that any enemy paying attention can sidestep the line skillshot. The fix is to start the cast, walk forward 1-2 steps to bait the dodge in one direction, then cast in the *opposite* direction at the last frame. The same trick works the other way: hover the cursor on the enemy, fake the cast, and recast on the spirit's predicted dodge path. In a real game the highest-impact use is the level 3 all-in: E-fake, W onto the spirit when they start to dodge, then real-E on their reactive dash. Test it in practice tool against a target dummy until the rhythm is automatic.
