---
title: "Brand Jungle Build & Guide — Patch 16.9"
slug: "brand-jungle"
language: "de"
patch: "16.9"
champion: "brand"
role: "jungle"
last_updated: "2026-05-01"
description: "Brand Jungle Guide für League of Legends Patch 16.9: Smite-Pfad, Burn-Mage-Clear, Gank-Windows, Key-Matchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Brand"
  difficulty: 3
  damage_type: "magic"
  champion_class: "AP Jungler / Skirmisher"
  abilities:
    - key: "P"
      name: "Blaze"
      description: "Brands Zauber setzen Ziele in Brand (Schaden über 4s, bis zu 3 Stacks). Bei 3 Stacks zündet das Blaze als kleine AOE-Explosion, die Spell-Effekte erneut anwendet."
      dd_spell_id: "Brand_Passive"
    - key: "Q"
      name: "Sear"
      description: "Linearer Skillshot mit magischem Schaden. Ist das Ziel bereits ablaze, wird es gestunnt — dein Gank-Lock und Skirmish-Stun-Setup."
      dd_spell_id: "BrandQ"
    - key: "W"
      name: "Pillar of Flame"
      description: "Verzögerte AOE-Zone nach kurzem Tell. Ablaze-Ziele bekommen +25% Schaden. Hauptwerkzeug fürs Jungle-Clear."
      dd_spell_id: "BrandW"
    - key: "E"
      name: "Conflagration"
      description: "Gezielte Explosion, die auf nahe Gegner überspringt. Ist das Primärziel ablaze, verdoppelt sich der Spread-Radius — Bounces zwischen Camps beschleunigen den Clear."
      dd_spell_id: "BrandE"
    - key: "R"
      name: "Pyroclasm"
      description: "Langstrecken-Feuerball, der bis zu 5 Mal zwischen Gegnern springt und ablaze-Ziele priorisiert. Massiver Schaden in Skirmishes um Drake-Pit und Grubs."
      dd_spell_id: "BrandR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "W" }
    - { level: 9, key: "E" }
    - { level: 10, key: "E" }
    - { level: 11, key: "R" }
    - { level: 12, key: "E" }
    - { level: 13, key: "E" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "gegen Early-Game-Diver (Lee Sin, Xin Zhao, Hecarim, Diana) — Stasis deckt deine Null-Mobility während ihres Gap-Close"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "wenn vorne und das Gegnerteam keine Magic Resist hat — Move-Speed-Passive auf Cast lässt Brand in Skirmishes kiten"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap, sobald ein Priority-Target sein erstes Magic-Resist-Item kauft (Mercury's Treads zählt)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "gegen Single-Target-Magic-CC-Engages (Ahri R, Lissandra R, Nautilus Hook)"
  base_combo: ["E", "W", "Q", "R"]
  win_condition: "Skirmish um Objective-Pits, R springt durch gruppierte Gegner. Gank Lanes nach Push mit E (Spread setzt Free-Q-Stun auf). Power-Spike-Window: Minute 8-18."
  weakness: "Langsamster Jungle-Clear unter den AP-Optionen vor Liandry's, kein Escape, keine eigene Jungle-Sustain. Schwach gegen frühe Invades mobiler Jungler und gegen Jungler, die Brands AOE mit hartem CC matchen."
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
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery primär: Arcane Comet proct bei jedem W- oder E-Treffer und legt Free-Burst auf das Blaze drauf. Manaflow Band ist Pflicht — Brand Jungle hungert im Early auf Mana. Transcendence drückt Ability Haste über 40%, Scorch finisht Camps und Ganks bei niedrigem HP."
    secondary_rationale: "Resolve sekundär: Second Wind hält dich zwischen Camps ohne Potions am Leben (Brand hat keine eigene Sustain wie Fiddlesticks oder Warwick). Overgrowth gibt Bonus-HP, das mit getöteten Monstern skaliert — direkter Konter zu deiner Defenselosigkeit."
    secondary_alternative: "Gegen Comps mit harten Early-Invades (Lee Sin + Pyke Roam, Elise + Galio) swap Resolve auf Inspiration mit Biscuit Delivery (Mana-Sustain auf den schwächsten Clears) und Cosmic Insight (mehr Smite-Uptime an den Drakes)."
matchup_draft:
  pick_into:
    - examples: ["sejuani", "amumu", "malphite"]
      archetype: "Group-Engage-Tanks ohne Escape"
      reason: "Wenn ihr R landet, steht derselbe Haufen Gegner in deinem W. R springt zwischen jedem gruppierten Champion und deine Antwort auf ihren Engage ist ein Teamwipe statt eines 5v5."
    - examples: ["hecarim", "skarner", "volibear"]
      archetype: "Bruiser, die nach vorn committen müssen"
      reason: "Sie pushen in dein Team, um Schaden zu machen, und haben kein Disengage; Brands E zündet Blaze, Q stunnt im Moment, in dem sie dich erreichen, und R lockt das zweite Ziel, bevor sie zurückziehen können."
    - examples: ["fiddlesticks", "evelynn"]
      archetype: "Jungler, die Channel oder Stealth brauchen"
      reason: "Brand unterbricht Fiddlesticks Fear/Ult-Channel mit dem Q-Stun auf Ablaze und entdeckt Eves Pre-Channel-Position mit W-Prefires; beide hängen an langen Setups, die Brand mit einer Rotation bricht."
  counterpicks:
    - examples: ["lee-sin", "elise", "graves"]
      archetype: "Early-Game-Skirmisher mit Mobility"
      reason: "Sie invaden Brand auf Level 3, bevor Liandry's online ist. Brand hat keinen Escape: Lee Sins Q + W Chain, Elises Rappel und Graves Dash überspringen den Q-Skillshot, und sein Clear ist zu langsam, um den Fight zurückzuzahlen."
    - examples: ["kha-zix", "master-yi", "kindred"]
      archetype: "Mobile Assassinen-Jungler"
      reason: "Sie blinken/dashen am Q-Projektil vorbei, also kann Brand den Stun nicht landen, dann bursten sie ihn im Melee, wo er kein Peel für sich selbst hat. Selbst Zhonya's verzögert nur das Unvermeidliche im 1v1."
    - examples: ["nocturne", "shaco"]
      archetype: "Vision-Deny-Ganker-Jungler"
      reason: "Sie umgehen die Wards, auf die Brand angewiesen ist (kein eigenes Vision-Counter, kein Flash-Engage). Nocturne R schneidet die Vision deines Teams; Shaco Q geht stealth durch Wards. Brand kann Q nicht pre-aimen, wenn er den Gegner nicht kommen sieht."
---

## Überblick

Brand Jungle ist ein **AP Skirmisher**, der für Objective-Fights und Post-6-Ganks gebaut ist und nicht für schnelle Clears oder Solo-Invades. Das Kit ist identisch mit Mid-Brand — setze Ziele in Brand, stunne ablaze-Ziele mit **Q**, lass **R** zwischen gruppierten Gegnern springen — aber die Rolle ist anders. Als Jungler tauschst du Lane-Priority (den Vorteil, den Laner bekommen, wenn sie die Wave zuerst pushen) gegen Kontrolle über den River: jeder Drake-Fight, jeder Grub-Spawn (ein "Grub" ist eines der kleinen neutralen Monster in der Void-Pit, das Gold und einen Bonus für das Team bringt, das es tötet), jeder Scuttle-Skirmish (Scuttle = der neutrale Krebs im River, der Vision und einen kleinen Buff gibt) ist eine Chance für **R**, zwischen drei oder vier gruppierten Gegnern zu springen und einen ausgeglichenen Fight in einen Teamwipe zu verwandeln.

Sein Game Plan ist starr für Jungler-Standards. Clear die ersten drei Camps full-clear (red → krugs oder blue → gromp je nach Side), gank eine Lane auf Level 3 nur, wenn sie ein sauberes **W → Q stun** Window hat, recall für **Liandry's Torment** Komponenten, und ab Minute 8 camp das nächste Objective. Brand hat keinen Escape, kein Early-Dueling-Power und den langsamsten Single-Target-Clear unter allen AP-Junglern — Invades beenden deine Partie, wenn du deine Jungle-Eingänge nicht wardst. Der Payoff ist der Post-6-Spike: **Pyroclasm** in einem gruppierten River-Fight ist eine der schadensstärksten Ultimates im Spiel, und das Kit stellt dem Gegnerteam eine Frage, auf die es oft kein Disengage als Antwort hat.

## Empfohlener Build

**Starter-Items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** (Default für ranged Jungler — gibt das Smite-Pet, das Camp-Clear boostet und Gold gibt) + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**Core-Items (in Reihenfolge):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — Quest-Upgrade von Hailblade (auto-evolved gegen Minute 3-4, sobald genug Jungle-XP gesammelt sind). Default-Companion für AP-Burst-Jungler: zusätzlicher magischer Schaden auf den nächsten Auto-Attack nach einem Zauber, perfekt abgestimmt mit Brands Blaze.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — erstes komplettes Item. Der Prozent-HP-Burn bestraft die Objective-HP-Pools (Drake, Baron, Herald) und stackt auf jeden Blaze-Tick.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flache Magic Penetration, der günstigste Power Spike unter den Core-Items.
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — der Slow auf jedem Spell-Hit schließt Brands größte Schwäche (kein Chase, kein Escape). Lässt dich auf gekitete Gegner zugehen und ohne Flash ganken.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — Late-Game-Scaling-Slot. Kauf das fünfte, außer du bist 4+ Kills vorne, dann rush es früher zum Snowballen ("Snowball" = früher Vorsprung, der wächst: Kill → Gold → Item → mehr Kills).

**Situative Items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — gegen Early-Game-Diver (Lee Sin, Xin Zhao, Hecarim). Stasis ist die einzige Antwort, die Brand hat, wenn eine Dash-Chain die Frontline (die Tanks und Bruiser vorne, die normalerweise Treffer für dich abfangen) durchbricht.
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — wenn vorne und der Gegner noch keine Magic Resist baut. Die Move-Speed-Passive nach jedem Cast lässt Brand in Skirmishes kiten ("Kite" = rückwärts gehen während du angreifst und Distanz hältst).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — sobald ein Priority-Target sein erstes Magic-Resist-Item kauft. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** (die Magic-Resist-Boots) zählen als dieses erste MR-Item.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — gegen telegrafierte magische CC-Engages (Ahri R, Lissandra R, Nautilus Hook).

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** ist Default. Swap auf ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**, wenn das Gegnerteam 3+ Hard-CC-Threats mit magischem Schaden hat.

**Skill-Order:** Maxe **W** zuerst (höchster Base-Damage und Haupt-Clear-Tool), **E** als zweites (Clear-Speed-Boost zwischen Camps und Gank-Spread), **Q** zuletzt. Punkt in **R** auf Level 6, 11 und 16.

**Runen:** Primärbaum **Sorcery** mit **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Sekundär **Resolve** mit **Second Wind** und **Overgrowth** für Jungle-Sustain.

## Wichtige Matchups

- **Lee Sin:** Du verlierst jedes 1v1 vor Level 6. Seine Q + W Chain überspringt deinen Q-Skillshot. Vermeide Solo-Skirmishes pre-6, full-clear stattdessen, und ward beide deiner Jungle-Eingänge auf Minute 1:30.
- **Hecarim:** Ausgeglichenes Matchup. Er überrennt deinen Kite, gruppiert sich aber für R-Bounces in Teamfights. Spar Q für den Moment, in dem er nach vorn committet — wenn du einen chargenden Hecarim stunnst, ist sein gesamter Engage-Timer verschwendet.
- **Karthus:** Du out-gankst, er out-scaled. Erzwing Fights pre-16 um den Drake. Sobald Defile online ist (seine Max-Rank-Passive, die um ihn pulst — die AOE-Schadensform, mit der er aus dem Grey-Screen tötet), kannst du ohne Banshee's Veil nicht in sein Team laufen.
- **Sejuani:** Du frisst sie. R springt durch jeden Champion, den sie mit ihrem Ult in einen Stack zieht; engage auf ihren Engage. Pre-6 schlägt sie dich aber im 1v1 — invade sie nicht, gruppiere mit Mid für die Grub-Fights.
- **Master Yi:** Direkter Counter im 1v1. Erzwing den Fight 5v5 in engen Rivers (Drake-Pit, Baron-Pit), wo seine W-Cleanse ihn nicht vor verketteten R-Bounces rettet. Kauf Zhonya's Hourglass als zweites Item, wenn er Wit's End baut.

## Power Spikes & Siegbedingungen

- **Level 3 (W + E + Q):** Erste Gank-Power. Mit einem Punkt in jeder Ability ist das **E → W → Q stun** Combo online. Wenn der gegnerische Laner ohne Flash overextended, hast du ein Kill-Setup.
- **Level 6 (R freigeschaltet):** Erster Objective-Spike. **Pyroclasm** in einem Scuttle-Skirmish (River-Crab-Fight) macht etwa 50% des HP eines Squishys pro Bounce. Kämpf jeden Scuttle, wenn R up ist.
- **Liandry's Torment online (~ Minute 9-12):** Clear-Speed kippt und Objective-DPS (DPS = Damage per Second, hier gegen die HP-Pools von Drake/Baron/Grub) verdoppelt sich. Ab diesem Punkt solltest du derjenige sein, der Drake-Fights initiiert, nicht der, der reagiert.
- **Rabadon's Deathcap online (~ Minute 24-30):** Volle R-Bounce-Sequenz one-shottet Squishies. Erzwing gruppierte Objective-Fights — Baron, Soul Drake, Atakhan ("Atakhan" = ein Late-Game-Neutral-Pit-Boss, der um Minute 14 spawnt; falls dir unbekannt, behandle den Spawn als erzwungenes 5v5).

## Häufige Fehler

- **Versuchen, wie ein Fast-Clear-Jungler zu clearen.** Brand hat keine eigene Sustain und keine Attack Speed. Renn nicht mit Lee Sin um den Scuttle pre-6 — full-clear, erreich Level 6, dann fang an zu ganken und zu skirmishen.
- **Nackter Q als Poke in der Jungle.** **Q** ohne Ablaze ist ein langsames Projektil, das auf dashende Jungler vorbeigeht. Öffne immer mit **W** auf den Spot, wo sie landen werden, oder mit **E** auf einen Minion, der das Blaze verteilt.
- **Ult auf einen einzelnen isolierten Gegner.** **R**-Bounces sind auf einem Single-Target verschwendet — die Sprünge gehen mit Damage-Falloff hin und her auf denselben Champion. Spar **R** für gruppierte Fights, nicht für einen 1v1-Chase.
- **Vision in der eigenen Jungle skippen.** Setz Stealth Wards auf Tri-Bush und Pixel-Brush auf Minute 1:30. Brand hat keinen Escape; ein Invade, den du nicht kommen siehst, ist ein verschenkter Kill an einen mobilen Jungler.
- **Smite-Greeden von Objectives ohne R.** Drake- und Grub-HP skalieren; dein Smite-Schaden nicht. Wenn du einen Drake ohne R off-Cooldown contestest und der gegnerische Jungler hat sie, verlierst du den Smite-War und den Drake.

## Fortgeschrittener Tipp

Übe den **unsichtbaren W-Gank**. Nähere dich einer Lane vom River, versteckt im Fog of War ("Fog of War" = der unaufgedeckte Bereich außerhalb der Vision deines Teams). Cast **W** auf den Spot, auf den der gegnerische Laner als *Nächstes* tritt (predicte den Pfad anhand der Wave) — Pillar of Flame hat eine Verzögerung, bevor es landet, und der Cast selbst bricht weder Stealth noch Vision. Im Moment, in dem das W landet und Blaze applied, feuere **Q** durch das Stun-Window. Richtig gemacht, sieht der Gegner nie einen Champion auf seiner Minimap: er sieht ein W unter seinen Füßen erscheinen, wird gerooted und stirbt, bevor sein Mitspieler überhaupt pingen kann. Diese Sequenz verwandelt einen "ordentlichen Brand Jungle" in einen Brand, der die Partie trägt.
