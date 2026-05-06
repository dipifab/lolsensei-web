---
title: "Cho'Gath Top Build & Guide — Patch 16.9"
slug: "chogath-top"
language: "de"
patch: "16.9"
champion: "chogath"
role: "top"
last_updated: "2026-05-02"
description: "Cho'Gath Top Lane Guide für League of Legends Patch 16.9: HP-stackender Tank-Mage Build, Grasp-Runen, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Chogath"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Battlemage"
  abilities:
    - key: "P"
      name: "Carnivore"
      description: "Eine Einheit zu töten gibt HP und Mana zurück. Champion-Takedowns geben deutlich mehr. Gratis Lane-Sustain (HP/Mana-Regen zwischen Fights) bei jedem Last-Hit (tödlicher Schlag auf einen Minion)."
      dd_spell_id: "Chogath_Passive"
    - key: "Q"
      name: "Rupture"
      description: "Skillshot (gezielte Linie) auf 950 Reichweite: schleudert Gegner hoch, slowt sie und macht magischen Schaden. Long-Range-Poke (Schaden aus Sicherheit) und Engage (Fight starten) — langsamer Tell, ziele vorhersehend."
      dd_spell_id: "Rupture"
    - key: "W"
      name: "Feral Scream"
      description: "Frontaler Kegel (Reichweite 300): magischer Schaden und Silence (blockiert Ability-Casts) für ~2,2s. Hänge ihn nach einem Q-Knockup auf Melee-Ziele an."
      dd_spell_id: "FeralScream"
    - key: "E"
      name: "Vorpal Spikes"
      description: "Toggle on-hit (deine nächsten Autos bekommen einen Bonus-Effekt). Die nächsten 3 Autos machen magischen Schaden basierend auf max HP des Ziels und slowen es. Haupt-DPS gegen Tanks und Waveclear (Welle clearen)."
      dd_spell_id: "VorpalSpikes"
    - key: "R"
      name: "Feast"
      description: "Single-Target True Damage (ignoriert Armor und Magic Resist) Execute (tötet Ziele unter HP-Schwelle). Bei Kill bekommt Cho'Gath einen permanenten Stack: mehr max HP und größeres Modell. Cap bei 6 Minion-Stacks, kein Cap auf Champion-Stacks."
      dd_spell_id: "Feast"
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
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3065", name: "Spirit Visage" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "gegen viel Magic Damage oder wiederholte CC-Ketten (Malphite R, Sylas, Lissandra) — swap von Plated Steelcaps vor dem ersten Back"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "gegen 2+ AP-Threats (gegnerischer AP-Top + AP-Jungler à la Diana/Ekko) — stack MR und gibt Movement Speed gegen Kiter"
    - dd_id: "3075"
      name: "Thornmail"
      against: "gegen Auto-Attack-Carrys mit Healing (Vayne + Soraka, Master Yi + Lifesteal) — appliziert Grievous Wounds (50% Heal Reduction)"
    - dd_id: "3083"
      name: "Warmog's Armor"
      against: "als 6. Item ab 5+ Feast-Stacks — Warmog's-Heart-HP-Schwelle ist trivial, die Regen lässt dich Backs skippen"
    - dd_id: "6664"
      name: "Hollow Radiance"
      against: "gegen Minion-Stack-Mages (Heimerdinger, Malzahar) und gruppierte AP-Teams — die Aura clearet Stacks und chunkt die Frontline"
  base_combo: ["Q", "AA", "E", "AA", "W", "R"]
  win_condition: "Stacke Feast auf Cannons und Kills für mehr HP. Bei 5+ Stacks + Riftmaker + Spirit Visage gehst du als zweiter Tank rein, fängst den Focus und kettest Q-Knockup in W-Silence auf ihren Carry."
  weakness: "Kein Dash, kein Escape außer Flash. Ranged Tops kiten (treffen außerhalb deiner Reichweite) die 950er Q. Verwundbar gegen Ignite + Heal Reduction vor dem Stacken — Lane-Loss snowballed, weil Feast Farm braucht."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8446, name: "Demolish", icon_path: "perk-images/Styles/Resolve/Demolish/Demolish.png" }
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Health Scaling"
      - "Health"
    primary_rationale: "Resolve: Grasp triggert alle 4s in Melee (Proc = Passive aktiviert), heilt und stackt permanente HP — passt zu Cho'Gaths HP+AP-Kurve. Demolish nimmt den Tower auch auf verlorenen Lanes, Second Wind regen't Poke-Schaden, Overgrowth stackt HP alle 8 Minions."
    secondary_rationale: "Sorcery sekundär: Manaflow Band hält das Mana für Q-Poke und E-Waveclear in langen Lanes, Transcendence pusht den Ability Haste (geringere Cooldowns), damit Q fast jede Wave up ist, um nach einem Knockup zu peeken."
    secondary_alternative: "Gegen Ranged Poke oder AP-Burst-Tops (Vladimir, Teemo, Kennen) swap Sorcery auf Inspiration mit Biscuit Delivery (gratis HP- und Mana-Sustain pre-6) und Time Warp Tonic (instant Heal beim Potion-Use, um in Lane zu bleiben)."
matchup_draft:
  pick_into:
    - examples: ["darius", "garen", "sett", "volibear"]
      archetype: "Slow-Windup-Melee-Bruiser (HP+Damage Fighter)"
      reason: "Q-Knockup unterbricht ihre Commit-Animationen (Darius Pull, Garen E-Spin, Sett W-Cast). Carnivore plus Riftmaker-Omnivamp (Lifesteal-artiger Sustain auf jeden Cast) gewinnt das Trade; an Feast-Schwelle delete'd R sie bei 30% HP."
    - examples: ["riven", "camille", "irelia"]
      archetype: "Mobile Melee-Diver (springen schnell auf dich)"
      reason: "Q knockt sie mid-Dash, bricht ihre Combo. W silenced direkt danach, blockiert den zweiten Dash. R executet sie, wenn sie low retreaten — sie können nicht all-in (Vollkommitment-Fight) gehen ohne Flash und einen sauberen Read."
    - examples: ["vladimir", "swain", "rumble"]
      archetype: "Melee Mages ohne Hard CC (Stuns/Roots)"
      reason: "Sie haben kein Instant-Lockdown, um deinen Q-Windup zu unterbrechen. Du out-rangest ihren Poke aus sicherer Distanz, und W-Silence schaltet ihre Ability-abhängigen Kits im All-in aus."
  counterpicks:
    - examples: ["vayne", "quinn", "teemo", "kennen"]
      archetype: "Ranged Tops mit Poke und Disengage (Escape-Tools)"
      reason: "Sie stehen jenseits der 950 Q-Reichweite, gehen zurück, wenn du nachrückst, und chunken dich vor Level 6 auf halbe HP. Kein Dash zum Closen, kein Sustain neben Carnivore — du verlierst Lane-Prio (Wave-Kontrolle) jeden Zyklus."
    - examples: ["fiora", "jax", "tryndamere"]
      archetype: "Mobile Melee-Duellisten mit anhaltendem Schaden"
      reason: "Fiora parriert (blockiert) den W-Silence, Jax E dodget den Q-Knockup, Tryndamere ignoriert R, solange er zuerst ult. Ihr anhaltender Schaden out-traded den langsamen Q-Windup; du erreichst Feast-Scaling zu spät."
    - examples: ["gnar", "kayle"]
      archetype: "Late-Game-Scaler (früh schwach, Monster ab Minute 30)"
      reason: "Mini-Gnar attackiert die Q außerhalb ihrer Reichweite, Kayle ramped zu True-Damage-Autos, die dich in Teamfights deleten. Beide gewinnen das Long-Game, selbst wenn Cho Feast stackt — ihr Schaden überholt deine HP-Pool ab Minute 30."
---

## Überblick

Cho'Gath ist ein Tank-Mage-Hybrid, der Items kauft, die sowohl Health als auch Ability Power geben, und stackt permanente max HP über sein Ultimate **Feast**. Sein Kit kombiniert einen Long-Range-Knockup (**Q**) mit einem Melee-Silence (**W**), wodurch er die Engage-Abilities der Melee-Bruiser in Lane unterbrechen und gegnerische Carrys in Teamfights lockdownen kann. Der Schaden, der mit seiner Build am stärksten skaled, kommt von **Vorpal Spikes (E)**, die magischen Schaden basierend auf max HP des Ziels addieren — er macht also mehr weh gegen Tanks und fed Bruiser als gegen Squishys.

Der Game Plan ist einfach beschrieben, aber geduldsfordernd: farme sicher hinter den Minions, suche nach **Q**-Knockups, um Trades aufzubauen oder Ganks zu peelen, und **niemals** verzichte auf eine Gelegenheit, einen Low-HP-Minion mit **R** zu fressen (jeder Champion-Stack ist permanent, jeder Cannon-Kill mit R bringt +120 max HP für den Rest des Spiels). Sobald du 5+ Stacks plus zwei HP+AP-Items hast, wirst du zum zweiten Tank, den das gegnerische Team vor deinen Carrys fokussieren muss — genau das gewinnt Teamfights.

## Empfohlener Build

**Starter-Items:** Doran's Shield + Health Potion. Doran's Shield gibt 80 HP und Post-Damage-Regen, die mit dem Last-Hit-Heal von Carnivore synergisiert.

**Core-Items (in Reihenfolge):**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — erstes komplettes Item. HP + AP + Omnivamp (heilt dich für einen Prozentsatz allen Schadens, den du machst, Abilities oder Autos). Der Damage-Ramp wandelt sich nach 3 Sekunden Combat in True Damage — perfekt für Extended Trades.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — Default-Boots gegen einen AD-Top-Gegner. Reduziert Auto-Attack-Schaden um 12%.
3. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — zweites Damage-Item. HP + AP + ein Burn-Passive, das prozentualen max-HP-Magic-Damage über Zeit macht. Stackt natürlich mit Q-Slow und W-Silence, die die Gegner in Reichweite halten, um die Burn-Ticks zu fressen.
4. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — HP + Magic Resist + 25% Heal-und-Shield-Amplification. Multipliziert Carnivore-Heal, Riftmaker-Omnivamp und alle Team-Shields, die du bekommst.
5. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — HP + AP + ein Slow auf jede Ability, die einen Champion trifft. Stackt obendrauf auf den Q-Slow und sorgt dafür, dass die W-silenced Ziele nicht wegkiten können, bevor der Silence ausläuft.

**Situative Items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — gegen viel Magic Damage oder wiederholte CC-Ketten. Swap von Plated Steelcaps vor dem ersten Back.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — gegen Squads mit 2+ AP-Threats. Stackt Magic Resist und gibt Movement Speed gegen Kiter.
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — gegen Auto-Attack-Carrys plus Heal-Comps (Vayne + Soraka, Master Yi + Aatrox). Appliziert Grievous Wounds (50% Heal Reduction) auf jeden Hit, den du kassierst.
- ![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) **Warmog's Armor** — sechstes Item bei 5+ Feast-Stacks. Die Warmog's-Heart-HP-Schwelle ist trivial, wenn du stackst; die Regen lässt dich Backs skippen und mit voller HP roamen.
- ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — gegen Minion-Stack-Mages (Heimerdinger, Malzahar) und gruppierte AP-Teams. Das Aura-Passive clearet gestackte Minions und chunkt die gegnerische Frontline.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** ist Default gegen AD-Top, ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** gegen AP-Top oder schweres CC.

**Skill-Order:** Maxe **Q** zuerst (Slow, Knockup, primäres Trade-Tool), **E** als zweites (Waveclear und Tank-Shred via On-Hits), **W** zuletzt (Silence ist groß, aber Schaden pro Rank ist niedrig). Punkt in **R** auf Level 6, 11, 16.

**Runen:** Primär **Resolve** mit **Grasp of the Undying**, **Demolish**, **Second Wind**, **Overgrowth**. Sekundär **Sorcery** mit **Manaflow Band** und **Transcendence**. Gegen Ranged Poke Top swap Sorcery auf **Inspiration** mit **Biscuit Delivery** und **Time Warp Tonic**.

## Wichtige Matchups

- **Darius:** Pre-6 respektiere seine W-Passive (5-Stack-Bleed). Q ihn, bevor er seinen Pull connecten kann, dann zurückgehen. Nach Level 6 executet Feast ihn bei ~30% HP — das ist die Schwelle zum Committen.
- **Sett:** Q den Wind-up-Frame seiner W (die orange Faust). Wenn er W auf dich landet, akzeptiere den Trade und W-silence ihn, um seinen E-Grab zu blocken. Boots Plated, Item Riftmaker zuerst — sein Ult ist Mercury's-Treads-Tier, also überleg dir Merc's, wenn er fed ist.
- **Teemo:** Counterpick. Nimm Doran's Shield + Second Wind, push die Wave unter den Tower mit E-Waveclear und bitte den Jungler um Ganks. Kauf ![Hexdrinker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3155.png) **Hexdrinker** als erstes Item, falls sein Lane-Lead snowballed (später zu Maw of Malmortius bauen).
- **Fiora:** Even-bis-verlierendes Matchup. Sie parriert deinen W-Silence — wirf W nie nackt. Nutz Q, um ihre Dash-Trades zu unterbrechen, halte W zurück, bis sie Riposte verbrannt hat.
- **Malphite:** Even Matchup, er scaled schlechter als du. Er hat keinen Sustain und seine Q-Poke kostet viel Mana; trade mit Q+W, wenn sein Mana niedrig ist. Achte nach Level 6 auf seine **R**: sie unterbricht den Cast deiner **R**.

## Power Spikes & Siegbedingungen

- **Level 2:** Mit Q + E kannst du aggressiv traden: Q für den Knockup, dann reingehen und 3 E-Autos abbrennen, während sie sich nicht bewegen können. Free 35-40% HP-Swing, wenn du Q landest.
- **Level 6:** Erste Feast schaltet Execute-Druck frei. Cooldown 80 Sekunden, Reichweite 175 (Melee + ein Schritt). Wenn dein Jungler irgendein CC auf einen Low-HP-Gegner landet, gehst du rein und R für einen permanenten Stack.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker fertig (~ Minute 13-15):** Trade-Math kippt. Omnivamp plus Carnivore-Heal heißen, du kannst stehen und gegen Melee-Bruiser durch ihre volle Combo fighten, ohne zu backen.
- **5+ Feast-Stacks (~ Minute 20-25):** Du wirst zum zweiten Tank. Mit Riftmaker + Spirit Visage + 5 Stacks sitzt du bei rund 3800-4200 effektiven HP. Geh in die gegnerische Backline, friss den Burst und kette Q-W auf ihren Carry.

## Häufige Fehler

- **Feast auf Cannon-Minions wegen dem Gold skippen.** Ein Cannon-Stack ist +120 max HP für immer. Selbst wenn du "60 Gold Minion-Gold verlierst", scaled HP härter, als Gold es je könnte. Immer R den Cannon, wenn kein Champion in Execute-Reichweite ist.
- **Q als Poke ohne Follow-up nutzen.** Q hat 0,65s Wind-up; gegen ein bewegliches Ziel musst du eine halbe Champion-Länge vorhalten. Wenn du nicht mit W oder einem Auto folgen kannst, behalte Q für Engage oder Peel.
- **Zum Last-Hit ohne Spacing reinlaufen.** Cho'Gath hat 125 Base Movement Speed und keinen Dash. Wenn du auf den Caster-Minions der Wave stehst, wirst du von mobilen Bruisern all-in't (mit voller Hingabe geengaged). Last-Hit von hinten in der Wave.
- **E mid-Fight ausschalten.** Vorpal Spikes ist ein Toggle: bleibt zwischen Fights an, solange du Mana hast. Aktivier es vor dem Fight, damit die ersten 3 Autos den On-Hit schon ready haben.
- **R-Snipe auf einen Champion mit voller HP.** Feast bei voller HP macht ~600 True Damage auf Max Rank. Das ist relevant, aber du gibst den 80-Sekunden-Cooldown und die Chance auf einen permanenten Minion-Stack auf. Heb R für Executes oder Panic-Peel auf.

## Fortgeschrittener Tipp

Cancele dein Auto-Attack-Wind-up mit **Q**, um eine Wind Wall von Yasuo oder Yone zu baiten: starte das Auto, sieh die Wall poppen, dann cast Q auf die Stelle, zu der sie laufen. Die Q-Skillshot ist ein Bodenriss, der unter der Wall durchläuft (die Wall blockt Projektile, keine Boden-Effekte). Die meisten Ranged-Champions können nicht zwischen einem Auto-Cancel und einer zurückgehaltenen Ability unterscheiden, also bekommst du einen freien Knockup auf ein Ziel, das dachte, es sei immun. Derselbe Trick funktioniert gegen Braum **E** (Unbreakable) und Pantheon **W** (Shield-Vault-Block-Frame).
