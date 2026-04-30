---
title: "Soraka Support Build & Guide — Patch 16.9"
slug: "soraka-support"
language: "en"
patch: "16.9"
champion: "soraka"
role: "support"
last_updated: "2026-04-29"
description: "Soraka support guide for League of Legends Patch 16.9: pure healer enchanter build path, bot lane matchups, power spikes, common mistakes, and a Q-W chain tip."
quick_learn:
  champion_dd_id: "Soraka"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Enchanter / Healer"
  abilities:
    - key: "P"
      name: "Salvation"
      description: "Soraka gains bonus Move Speed when running toward nearby allied champions below 40% HP. Lets her reach a dying ally fast to W-heal them."
      dd_spell_id: "Soraka_Passive"
    - key: "Q"
      name: "Starcall"
      description: "Targeted skillshot zone that deals magic damage and slows. Hitting an enemy champion grants Soraka Rejuvenation, which heals her over time and reduces W's HP cost on the next cast."
      dd_spell_id: "SorakaQ"
    - key: "W"
      name: "Astral Infusion"
      description: "Heals an allied champion at the cost of Soraka's own HP. Cannot self-target. Cost is reduced when Soraka has Rejuvenation from a Q hit — chain Q then W to spam heals safely."
      dd_spell_id: "SorakaW"
    - key: "E"
      name: "Equinox"
      description: "Targeted zone that silences enemies inside, then roots anyone still inside when it ends. Used to stop dashes mid-engage and lock down a target for the AD carry."
      dd_spell_id: "SorakaE"
    - key: "R"
      name: "Wish"
      description: "Global heal that restores HP to every allied champion on the map. Healing is amplified on allies below 40% HP. Game-saving teamfight tool — cast late, never first."
      dd_spell_id: "SorakaR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "3222", name: "Mikael's Blessing" }
  situational_items:
    - dd_id: "3107"
      name: "Redemption"
      against: "in long objective fights (Drake, Baron) — big delayed area-of-effect heal you drop from across the map; stacks with R for huge team sustain"
    - dd_id: "6616"
      name: "Staff of Flowing Water"
      against: "into AP carries who scale with Ability Haste (Hwei, AP Ezreal) — your heals proc the buff, granting them bonus Ability Power"
    - dd_id: "3877"
      name: "Bloodsong"
      against: "alternative final upgrade of World Atlas if your bot lane plays for poke (Caitlyn, Jhin) — adds burst damage on Q hits in aggressive games"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "vs heavy AOE burst comps (area-of-effect damage like Yone R, Kennen R, Karthus R) — instant team-wide shield that saves the back line"
  base_combo: ["Q", "W", "AA", "Q"]
  win_condition: "Out-sustain the bot lane with Q-into-W chains, save the AD carry through every all-in with W and Mikael's, and use R as a global save when any lane goes critical."
  weakness: "No dash, very low HP, no hard CC before E max. A single hook or assassin gap-close deletes Soraka before she can cast W. R has a 2.5s channel that hard CC interrupts."
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
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "jhin", "ashe", "varus"]
      archetype: "Long-range AD carries with strong basic attacks"
      reason: "Soraka's Q-W chain keeps an immobile marksman topped up through poke wars, and Ardent Censer turns every heal into bonus on-hit damage on their next attacks. They out-trade most lanes when never falling below 50% HP."
    - examples: ["xerath", "ziggs", "lux"]
      archetype: "Stationary poke mages without a kill threat"
      reason: "Soraka heals back every poke spell with W: their lane plan stalls because their HP lead never sticks. With no dash they cannot all-in to break the heal pattern."
    - examples: ["draven", "kalista"]
      archetype: "Aggressive lane bullies that push HP advantage"
      reason: "Their game plan is converting early HP wins into kills. Soraka's W keeps the AD carry above the kill threshold long enough for the jungler to arrive or for the lane to stabilize."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke", "nautilus"]
      archetype: "Hook supports with long range"
      reason: "Soraka has 535 HP at level 1 and no dash. A single hook before level 6 deletes her or the AD carry instantly — Q does not interrupt the hook channel and W cannot save someone already dead."
    - examples: ["leona", "rell", "alistar"]
      archetype: "Hard-engage tank supports"
      reason: "They jump on top of Soraka past her E range. Once stunned she cannot cast W or R, and her low HP pool turns every chain CC into a kill. E's silence-then-root is too slow to interrupt their initial dash."
    - examples: ["zed", "talon", "fizz"]
      archetype: "Mobile assassins on roams from mid"
      reason: "Side lanes are her death zone. Without Flash, an assassin gap-closes through W's cast time and one-shots her before she can finish the heal cast. R's 2.5s channel is also interrupted by their dashes."
---

## Overview

Soraka is a pure healer enchanter (a healer-buffer support — heals and shields allies, buffs their damage). Her **Salvation** passive gives her bonus Move Speed when she runs toward an ally below 40% HP, **Starcall (Q)** is a targeted area-of-effect skillshot that damages, slows, and gives Soraka the **Rejuvenation** buff when it hits an enemy champion, **Astral Infusion (W)** is a single-target ally heal that costs Soraka her own HP (no self-cast — you cannot heal yourself with W), **Equinox (E)** is a targeted zone that first silences enemies inside (stops them from casting spells) and then roots them when it ends, and **Wish (R)** is a global heal that restores HP to every allied champion on the map, amplified on allies below 40% HP.

Her game plan is the simplest in the game on paper and the hardest to execute: land **Q** on the enemy support or bot wave to refresh the **Rejuvenation** buff, then chain **W** on the AD carry (the bot-lane marksman who scales with items) so the heal cost is reduced. Repeat this Q-into-W pattern every 4-6 seconds. Hold **E** for the moment a hook support engages or the enemy AD carry steps up for a trade (a brief exchange of damage). Late game you scale as a heal bot: never engage first, always use **R** to undo the enemy's all-in (full commitment to a kill, no disengage option) instead of starting your own.

## Recommended Build

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (the support starter that quests into more gold income) plus 2 Health Potions. Skip damage starters: Soraka's whole kit is healing, and her auto-attack does almost no damage.

**Core items (in order):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — auto-stacks gold and ward charges every time you damage or assist. Quests into Bounty of Worlds, then later upgrades into a support legendary like Bloodsong or Solstice Sliver.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — Ability Haste (cooldown reduction) lets you spam **W** on shorter cooldowns; default boots for enchanters.
3. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — heal-and-shield-on-spell-cast passive that ramps up in extended fights. Soraka's Q-W chain procs (triggers) it more often than any other support in the game.
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — empowers any ally you heal or shield with bonus on-hit damage and Attack Speed. Best when paired with a basic-attack-heavy AD carry like Caitlyn, Jhin, or Ashe.
5. ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — cleanses (removes) hard CC (crowd control, an effect that disables the target) off an ally and adds a heal. Mandatory if the enemy has a single-target stun, charm, or hook on your carry.

**Situational items:**

- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — when fights drag on (Drake, Baron, long teamfights). Big delayed area-of-effect heal you can drop from across the map; stacks with **R** for one-shot resets on a low-HP team.
- ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** — into AP carries who scale with Ability Haste (Hwei, AP Ezreal). Your heal procs the buff, giving them bonus Ability Power for the next attacks.
- ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — alternative final upgrade of World Atlas when you play for poke (chipping enemy HP from range without committing) and pickoffs (eliminating an isolated enemy outside a teamfight). Adds burst damage on **Q** hits, replacing Bounty of Worlds in aggressive games.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — vs heavy AOE burst (high damage concentrated in 1-2 seconds, like Yone R, Kennen R, Karthus R). Active gives an instant team-wide shield that saves the back line (the carries — AD carry and mage — who deal damage from behind the tanks).

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** is default. Plated Steelcaps replace them into a heavy basic-attack comp (Master Yi, Tristana). Mercury's Treads if the enemy team has 3+ hard-CC threats aimed at you — the tenacity helps you survive the chain CC that kills Soraka most often.

**Skill order:** Max **Q** first (lower cooldown plus more damage for the **Rejuvenation** uptime — your main resource for spam-healing), **W** second (bigger heal per cast), **E** last (the silence and root duration scale only marginally). Take **R** at levels 6, 11, 16. Start **E** at level 1 to anti-engage (cancel an enemy engage attempt — like dropping a silence on a Blitzcrank as he winds up his hook) a level-1 bush hook from Blitzcrank or Thresh, then take **Q** at level 2.

**Runes:** Primary **Sorcery** with **Summon Aery** (sticks small damage and shield value to your spells — perfect for Soraka because every Q and W procs it), **Manaflow Band** (mana sustain so you can cast every cooldown), **Transcendence** (Ability Haste plus a small heal on takedown), **Scorch** (extra burn damage on the first spell every 10 seconds, for level-1-6 Q poke). Secondary **Inspiration** with **Biscuit Delivery** (free mana and HP biscuits for the first 6 minutes — Soraka's W cost makes biscuits doubly valuable) and **Cosmic Insight** (more Ability Haste and shorter Summoner Spell cooldowns). Stat shards: Ability Haste, Adaptive Force, Health Scaling.

## Key matchups

- **Caitlyn / Jhin (allied):** Best partners. They poke from max range, you Q-W-loop them back to full. Use ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** to amplify every basic attack — they out-DPS any opposing bot lane in extended trades.
- **Blitzcrank / Thresh (enemy):** Hook supports. Stand behind minions whenever you cross the river — never offer a clear hook line. Build ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** earlier than usual; if the AD carry gets hooked, instant cleanse plus W is the only path to survive.
- **Leona / Nautilus (enemy):** Hard-engage tanks. Save **E** as a defensive silence-and-root — when they jump on the AD carry, drop **E** under their feet to interrupt follow-up casts. Never burn **E** for poke into these matchups.
- **Lulu (enemy):** Sustain mirror with more peel (protecting your carry from whoever attacks them). She out-fights you in 2v2 because **W** polymorph cancels your **R** mid-cast. Play passive level 1-5; trade at 6 only after she burns Flash. Your scaling is even, lane is decided by jungle priority.
- **Lux (enemy):** Roaming poke threat. Her **Q** is a 2-target root and her **R** is a long-range execute (a finisher that kills low-HP targets). Hide behind minions so the binding never hits two of you, and ward both river entrances — when she leaves lane to roam, ping mid and start pressuring her tower.

## Power spikes & win conditions

- **Level 2:** With **Q** at 1 and **E** at 1, you can poke the enemy support with Q while the AD carry trades autos. Q-into-AA short trades win the level-2 fight against most non-engage supports.
- **Level 6:** First **Wish (R)** unlocks. Any lane that ints (loses HP or goes for a risky play) is now winnable from across the map — global heal saves a top laner under tower or a mid laner mid-skirmish (a small fight, smaller than a teamfight). Track ally HP bars actively from this level.
- **![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) Moonstone Renewer + ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) Ardent Censer (~ minute 14-18):** Team-fight spike. Your AD carry's effective HP roughly doubles when you Q-W-spam through a fight, and every empowered auto adds extra on-hit damage from the censer.
- **Three legendaries online (~ minute 25):** With ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** added, you cleanse the one CC ability that would otherwise delete your carry. From here, every objective fight is a 5v4 if the enemy commits hard CC into your back line.

## Common mistakes

- **W-spamming without a Q hit first.** **Astral Infusion** costs flat HP unless Soraka has **Rejuvenation** from landing **Q** on an enemy champion. Two W-casts in a row without a Q hit drops her below half HP for free — the enemy AD carry then all-ins her instead of the carry. Always Q first, W after.
- **Casting R as soon as it comes up.** **Wish** is the strongest reset button in the game when used at the right moment: a teammate at 5% HP turns into a 70% HP teammate. Cast R as a save (someone is about to die) or as a coordinated finisher (your team is at 30% HP after committing); never cast on a 90% HP team to "speed up" healing.
- **Standing in front during fights.** Soraka has 535 base HP and no dash — she dies to one assassin auto-attack chain. Position behind the AD carry's auto-attack range, never ahead of it. If you can see the enemy front line in melee range of you, you are too far up.
- **Burning E for poke damage.** **Equinox** silences and roots, but its damage is low and the cooldown is 16+ seconds. Save it for anti-engage (cancelling an enemy dive) or for chaining into your AD carry's CC. A wasted E means a free Leona engage 10 seconds later.
- **Roaming alone after level 6.** R is global — you do not need to leave bot lane to help mid or top. Soraka in fog of war (the unwarded brush) without her AD carry near her dies to any pickoff. Cast R from under your tower; only roam if your AD carry recalls and you can reach a river ward together.

## Advanced tip

Master the **Q-cast-while-W-channels** trick. **Astral Infusion (W)** has a short cast time during which Soraka cannot move but can queue another spell. The instant after you cast **W** on the AD carry, throw **Q** on the closest enemy champion — the **Rejuvenation** buff from the Q hit retroactively reduces W's HP cost (the buff is applied during the cast resolution, not before). This lets you W-W-Q sustain twice in 5 seconds without dropping below 60% HP. The combo also dodges hooks: queueing Q during W's cast time means you start moving the half-second earlier than a standalone Q-then-W sequence, which is enough to side-step a Blitzcrank hook on reaction. Practice this in normal games — it is the single biggest skill-expression jump from beginner to mastery on Soraka.
