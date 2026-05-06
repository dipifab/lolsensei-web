---
title: "Brand Mid Build & Guide — Patch 16.9"
slug: "brand-mid"
language: "de"
patch: "16.9"
champion: "brand"
role: "mid"
last_updated: "2026-05-01"
description: "Brand Mid Lane Guide für League of Legends Patch 16.9: Starter Kit, Burn-Mage-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender fortgeschrittener Tipp."
quick_learn:
  champion_dd_id: "Brand"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Burst-AOE"
  abilities:
    - key: "P"
      name: "Blaze"
      description: "Brands Zauber setzen Ziele in Brand (Schaden über 4s, bis zu 3 Stacks). Bei 3 Stacks auf einem Champion detoniert Blaze als kleine AOE-Explosion und wendet Spell-Effekte erneut an."
      dd_spell_id: "Brand_Passive"
    - key: "Q"
      name: "Sear"
      description: "Linearer Skillshot mit magischem Schaden. Ist das Ziel bereits ablaze, wird es stattdessen gestunnt — dein wichtigstes Setup-Tool."
      dd_spell_id: "BrandQ"
    - key: "W"
      name: "Pillar of Flame"
      description: "Verzögerte AOE-Zone nach kurzem Tell. Ablaze Ziele nehmen +25% Schaden. Höchster Single-Spell-Damage im Kit."
      dd_spell_id: "BrandW"
    - key: "E"
      name: "Conflagration"
      description: "Gezielter Blast, der auf nahe Gegner überspringt. Ist das Hauptziel ablaze, verdoppelt sich der Sprungradius — der einfachste Weg, Blaze auf eine Wave zu bringen."
      dd_spell_id: "BrandE"
    - key: "R"
      name: "Pyroclasm"
      description: "Feuerball mit langer Reichweite, der bis zu 5x zwischen Champions und Minions springt, ablaze Ziele priorisiert und sie bei Treffer slowt. Massiver Teamfight-Schaden bei gruppierten Gegnern."
      dd_spell_id: "BrandR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "E" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "gegen Diver und Assassinen (Zed, Akali, Diana, Fizz) — Stasis deckt deine Dash-Schwäche während ihres Gap-Close ab"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "gegen magische Single-Target-CC (Ahri Charm, Lissandra R, Twisted Fate Gold Card)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "gegen Comps mit gestapeltem Healing (Soraka, Vladimir, Dr. Mundo, Aatrox top)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "wechseln, sobald ein Priority-Target sein erstes Magic-Resist-Item baut"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "Triff gruppierte Fights mit Blaze-Stacks bereits auf mehreren Targets, damit R zwischen Champions statt Minions springt. Bleib hinter der Frontline und feuer aus maximaler W-Reichweite."
  weakness: "Kein Dash, keine Escape. Schafft ein Diver es durch deine Frontline, hast du nur Flash und Zhonya's zwischen dir und einem One-Shot — deshalb sind situative Defensivitems nicht optional."
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
    primary_rationale: "Sorcery primär: Arcane Comet auto-procced bei jedem W- oder E-Hit und legt bei jedem Trade kostenlosen Burst nach. Manaflow Band hält Mana für W-Spam, Transcendence drückt Ability Haste über 40%, Scorch addiert sich zu den Blaze-Ticks bei niedrigem HP."
    secondary_rationale: "Inspiration sekundär: Biscuit Delivery löst Brands Mana-Problem in den ersten 6 Leveln, Cosmic Insight gibt mehr Flash-Uptime — Flash ist deine einzige Möglichkeit, einem Dash auszuweichen, das Kit hat keinen eigenen."
    secondary_alternative: "Hat das Gegnerteam 2+ Squishies mit niedrigen Resistenzen (z.B. Caitlyn + Senna + Ezreal), swap Inspiration auf Resolve mit Second Wind (Sustain gegen Poke) und Revitalize (boostet Brands Lifesteal-via-Burn-Passive bei Takedowns), so überlebst du lange genug, um R zu landen."
matchup_draft:
  pick_into:
    - examples: ["veigar", "karthus", "anivia", "ryze"]
      archetype: "Stationäre Mages ohne Dash"
      reason: "Ihr Farm-Pattern zwingt sie, an einer Stelle zu stehen, um zu casten oder zu stacken: setz W auf die Wave, Q im Recovery-Frame für den Stun, und die volle Burn-Rotation landet, bevor sie sich rausbewegen können."
    - examples: ["malphite", "amumu", "sejuani"]
      archetype: "Group-Engage-Tanks"
      reason: "Wenn ihr R dein Team catched, catched dieselbe R ihr Team direkt neben deinem — Brands R springt zwischen jedem gruppierten Champion und macht ihren Engage zu deiner Win Condition."
    - examples: ["yuumi", "soraka", "senna"]
      archetype: "Squishy Backline-Carrys mit schwacher Escape"
      reason: "Pyroclasm priorisiert ablaze Targets; ein E auf die Frontline verbreitet Blaze, und R hüpft durch jeden gruppierten Gegner, bis es den Squishy hinten killt."
  counterpicks:
    - examples: ["zed", "akali", "fizz"]
      archetype: "Mobile Assassinen mit mehreren Gap-Closern"
      reason: "Sie blinken über deine Q, bevor du sie für den Stun landen kannst. Ohne Stun hat das Kit keinen Self-Peel, also löschen sie dich, bevor R den ersten Bounce beendet."
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "Artillery Mages mit größerer Reichweite"
      reason: "Ihre Poke-Schwelle liegt jenseits deiner Q-Reichweite. Brand hat keine Mobility, um die Distanz zu schließen, also halten sie ihn jede Wave low, bis er ein freier Dive für den gegnerischen Jungler ist."
    - examples: ["yasuo", "yone"]
      archetype: "Wind-Wall-Champions mit anhaltender Mobility"
      reason: "Wind Wall blockt Q und die Projektil-Bahn von R; danach dashen sie an deiner W-Zone vorbei. Ein Defensiv-Slot für Zhonya's kauft nur Überleben, nicht Lane-Prio."
---

## Überblick

Brand ist ein **AP-Burst-Mage**, der um eine einzige Mechanik gebaut ist — die Passive **Blaze**. Jeder Zauber, den er castet, setzt das Ziel für vier Sekunden in Brand, bis zu 3 Stacks. Bei 3 Stacks wird Blaze instabil und explodiert als kleine AOE-Detonation, wendet seine Spell-Effekte erneut auf alle im Splash an. Im Gameplay übersetzt: jede Ability ist ein Setup für die nächste, und sobald ein Gegner brennt, hört deine **Q (Sear)** auf, ein Schadenszauber zu sein, und wird zum Stun. Das Kit stellt zwei Fragen immer wieder — *ist das Ziel schon ablaze?* und *sind die Gegner gruppiert genug, damit R bounced?* — und der gesamte Game Plan fließt aus diesen zwei Antworten.

Sein Mid-Lane-Game-Plan ist geradlinig: shove die Wave mit **W (Pillar of Flame)**, such nach **W → Q stun**-Fenstern, sobald der gegnerische Laner nahe an einen Minion tritt, durch den du ihn treffen kannst, und roame mit Prio, sobald die Wave unter deren Tower crasht. Ab Level 6 ist **R (Pyroclasm)** eine der schadensstärksten Ultimates im Spiel — *wenn* die Gegner geclumpt sind. Du hast ein Mid-Range-Setup pro Fight, keinen Dash zum Wiederholen, keine Escape, falls es daneben geht. Lane-Positioning hinter der Wave ist Pflicht: Brand hat keine native Mobility, kein Shield, keinen Heal, und seine einzige defensive Option ist Zhonya's Hourglass und Flash vorher zu ziehen.

## Empfohlener Build

**Starter-Items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Doran's Ring löst den Mana-Hunger des W-Spams und gibt das AP-Scaling, das Brand früh wichtiger ist als flacher Schaden.

**Core-Items (in Reihenfolge):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — Brands Identitäts-Item. Die Passive legt einen prozentualen HP-Burn auf seine Blaze-Stacks oben drauf und multipliziert den Schaden gegen Tanks und HP-gestapelte Teams. Mana, Ability Haste und AP passen alle zu dem, was das Kit will.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flache Magic Penetration auf die Squishies, die du am liebsten mit R-Bounces löschst.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — extra Burst, plus eine Passive, die noch mehr Magic Resist auf Gegnern unter HP-Schwelle ignoriert. Passt perfekt zu R-Bounces, die das Target mit dem niedrigsten HP jagen.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — Late-Game-Scaling-Multiplikator (40% Bonus AP). Kauf ihn als drittes oder viertes Item, je nachdem, ob das Gegnerteam schon Magic Resist zu stapeln begonnen hat.

**Situative Items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — gegen Diver und Assassinen (Zed, Akali, Diana, Fizz). Stasis ist die einzige Antwort, die Brand hat, wenn eine Dash-Kette seine Frontline kreuzt (die Tanks und Bruiser vorne, die Treffer aufnehmen, während du von hinten feuerst).
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — gegen telegrafierte magische CC (Ahri Charm, Lissandra R, Twisted Fate Gold Card). Der Shield blockt den Engage-Spell, der dich sonst für den ganzen Fight locken würde.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — gegen Comps mit gestapeltem Healing (Soraka mid, Vladimir, Dr. Mundo, Aatrox top). Die Grievous-Wounds-Passive halbiert ihr Healing, damit dein Burn sich tatsächlich in tote Targets übersetzt.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — sobald ein Priority-Target sein erstes Magic-Resist-Item baut. Verhindert, dass der Gegner deine ganze Build mit einer 800-Gold-Komponente soft-countert.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** ist Default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** sind okay, wenn dein Team mehr R-Uptime auf Objective-Spawns braucht.

**Skill-Order:** Maxe **W** zuerst (höchster Base-Damage und primäres Waveclear), **Q** als zweites (mehr Stun-Schaden und kürzerer Cooldown), **E** zuletzt. Punkt in **R** auf Level 6, 11 und 16.

**Runen:** Primärbaum **Sorcery** mit **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Sekundär **Inspiration** mit **Biscuit Delivery** und **Cosmic Insight**.

## Wichtige Matchups

- **Yasuo / Yone:** Sie blocken das Projektil deiner **Q** und den Start von **R** mit Wind Wall. Halt **Q** zurück, bis sie ihre Wand verbrannt haben, spar **W** für den Recovery-Frame, und nutz **R** nie als Flank-Tool (ein "Flank" ist das Betreten eines Fights von der Seite hinter der gegnerischen Backline) gegen sie — feuer sie ab, nachdem ein Mitspieler engage hat, damit die Bounces schon hinter ihrer Wall sind.
- **Zed / Akali:** Dive-Threats mit mehreren Gap-Closern (ein "Gap-Closer" ist jeder Dash, Blink oder Sprung, der schnell Boden überbrückt). Kauf Zhonya's Hourglass nach Liandry's; nutz **Flash** in Lane gegen sie nie offensiv und pre-place **W** auf deinen eigenen Füßen, um sie zu stunnen, wenn sie auf dich springen.
- **Veigar:** Stationärer Mage, gegen den du pre-6 dominierst. Push ihn unter Tower mit **W**, such die **E → Q**-Stun-Rotation, wenn er hochkommt, um Last-Hits zu nehmen, und recall vor seiner Cage-Schwelle (Level 6), die die Lane kippt.
- **Anivia:** Pre-6 ausgeglichen, post-6 scaled sie härter. Vermeide es, dich zu deiner Wave zu stapeln — ihre Wall trennt dich von deinen Minions und erzwingt einen langen Backline-Trade. Roam in die Side-Lanes, sobald deine **R** up ist; sie hat null Mobility, dir zu folgen.
- **Twisted Fate:** Roam-Priority-Race. Spielt er Gold Card auf dich, **Q** ihn vor dem Gap-Close (einen castenden Champion zu stunnen, droppt die Karte). Ansonsten track seine **R** mit Vision Wards auf River und Tri-Bush; ulted er auf Side-Lane, ping bot/top und shove deine Wave statt zu chasen.

## Power Spikes & Siegbedingungen

- **Level 2 (W + Q):** Erster Spike. Mit einem Punkt in **W** plus der Start-**Q** hast du das volle **W → Q**-Stun-Combo. Pillar of Flame legt einen Blaze-Stack auf; Q gegen ein ablaze Ziel stunnt. Dieses Fenster ist, wenn du auf First Blood pushed.
- **Level 6 (R freigeschaltet):** Erster **Pyroclasm** ist verfügbar. Such einen Teamfight am Scuttle (River-Krabbe) oder am ersten Drake — sind zwei Gegner in Bounce-Reichweite, macht deine R ungefähr 50% der HP eines Squishys pro Bounce.
- **Liandry's Torment fertig (~ Minute 12-14):** Wave-Control kippt ("Wave-Control" = wer entscheidet, wo die Minion-Wave kämpft, du oder der gegnerische Laner), weil der prozentuale HP-Burn Wave-Clumps bestraft. Ab hier solltest du derjenige sein, der shovt und roamt, nicht der unter Tower hält.
- **Rabadon's Deathcap online (~ Minute 24-28):** Deine R-Vollbounce-Sequenz one-shotted Squishies, die noch keine Magic Resist gebaut haben. Erzwing hier gruppierte Objective-Fights — Baron, Soul Drake, Late-Game-Team-Contests.

## Häufige Fehler

- **Q als nackten Poke werfen.** **Q** ohne Ablaze ist nur ein langsames Projektil. Setup immer erst mit **W** auf dem Boden oder **E** auf einen Minion, der sich auf den Champion verteilt — der Unterschied ist ein 1-Sekunden-Stun statt eines traurigen Misses.
- **Auf ein isoliertes Target ulten.** **R** bounced zwischen Targets und priorisiert ablaze. Ist nur ein Gegner in Reichweite, gehen die Bounces hin und her auf dasselbe Target mit massivem Damage-Falloff pro Hop. Spar **R** für gruppierte Fights oder um zwei ablaze Gegner nebeneinander zu executen.
- **Pushen ohne Vision.** Brand hat keine Escape (kein Dash, kein Blink, kein Shield). Über den River pushen ohne Ward in deren Jungle ist der schnellste Weg, einen frühen Gank zu feeden. Pose eine Stealth Ward oder eine Control Ward in den Tri-Bush vor jedem Shove.
- **Auto-Attacken für "extra" Passive-Schaden.** Deine Auto-Attack interagiert nicht mit Blaze. Nutz das Auto-Fenster, um zum nächsten **W**-Spot zu laufen, nicht um einen extra Hit auf einen niedrigen Minion zu jagen.
- **Das Timing der instabilen Detonation ignorieren.** Erreichst du 3 Blaze-Stacks auf einem Champion, hast du zwei Sekunden bis zur Detonation. Ihn mit **Q** *vor* der Detonation zu stunnen, schließt ihn in den Splash ein und applied Blaze auf jedem nahen Gegner erneut. Mistiming ist der Unterschied zwischen einer Single-Target-Kill und einem AOE-Wipe.

## Fortgeschrittener Tipp

Übe den **Double-Blaze-AOE-Wipe**. Wenn zwei Gegner nebeneinander stehen (typisch in geclumpten Teamfights oder auf einer gestapelten Wave), mach das in dieser Reihenfolge: **W** auf den Boden zwischen ihnen → beide bekommen Blaze-Stack 1. **E** auf Gegner A → Blaze-Stack 2 auf A, springt auf B für Stack 2 auf B. **Q** auf A → Blaze-Stack 3 auf A, A ist gestunnt und die instabile Detonation trifft auch B und bringt B auf Stack 3. Jetzt bouncet **R** zwischen zwei gestunnten, voll-gestackten Targets und macht aus der gesamten Rotation einen 2-für-0-Trade. Diese Sequenz ist, was einen "ordentlichen Brand" von einem Brand trennt, der carryt.
