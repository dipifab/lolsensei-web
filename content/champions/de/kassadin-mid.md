---
title: "Kassadin Mid Build & Guide — Patch 16.9"
slug: "kassadin-mid"
language: "de"
patch: "16.9"
champion: "kassadin"
role: "mid"
last_updated: "2026-05-05"
description: "Kassadin Mid Guide für League of Legends Patch 16.9: Late-game-Scaler-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Profi-Tipp."
quick_learn:
  champion_dd_id: "Kassadin"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Assassin / Late-game Scaler"
  abilities:
    - key: "P"
      name: "Void Stone"
      description: "Passiv: Kassadin nimmt reduzierten magischen Schaden und ignoriert Einheitenkollision (er läuft durch Minions und Champions)."
      dd_spell_id: "Kassadin_Passive"
    - key: "Q"
      name: "Null Sphere"
      description: "Single-Target-Skillshot: magischer Schaden + unterbricht Channels. Verleiht Kassadin einen magic shield für 1,5s — Anti-Poke vs AP-Mages."
      dd_spell_id: "NullLance"
    - key: "W"
      name: "Nether Blade"
      description: "Passiv: bonus magischer Schaden auf Auto-Attacks. Aktiv: nächster Auto verstärkt, gibt fehlendes Mana zurück (mehr gegen Champions)."
      dd_spell_id: "NetherBlade"
    - key: "E"
      name: "Force Pulse"
      description: "AOE-Kegel mit Slow + magischem Schaden. Lädt sich durch nahe Spell-Casts auf (eigene oder gegnerische). Braucht Charge: als Finisher nutzen."
      dd_spell_id: "ForcePulse"
    - key: "R"
      name: "Riftwalk"
      description: "Kurzer Blink mit niedrigem Cooldown. Jeder Cast innerhalb weniger Sekunden verdoppelt die Manakosten und addiert Bonusschaden, bis zu 4 Stacks."
      dd_spell_id: "RiftWalk"
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
    - { dd_id: "6657", name: "Rod of Ages" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3135", name: "Void Staff" }
  situational_items:
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "vs Comps, die du post-11 out-scalst: AP + ability haste + Tempo, um Riftwalks zu chainen und an der squishy Backline zu kleben"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs single-target magic CC (Ahri Charm, Lissandra R, Twisted Fate Stun), der dein Riftwalk-Fenster zumacht"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs Heal-Comps (Soraka mid, Vladimir, Dr. Mundo top): legt Grievous Wounds auf, halbiert die Heilung"
    - dd_id: "4645"
      name: "Shadowflame"
      against: "vs squishy Carries mit Schilden (Riven, Yasuo passive): Extra-Burst für den R+Q+E-Execute"
  base_combo: ["R", "Q", "AA", "E"]
  win_condition: "Überlebe die Lane bis Level 11 mit einem fertigen Item, dann snowballe (kleine Vorsprünge in größere verwandeln): R auf squishy Carries, Q+AA+E zum Löschen, R wieder raus vor dem Peel."
  weakness: "Lane Phase ist brutal: schwacher Basisschaden, kurze Range, kein Waveclear vor Level 9. Burst-Mages und Range-Poke shoven dich unter den Turm und chippen dich ab, bevor du scalest."
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
  primary_rationale: "Inspiration primary: First Strike belohnt Kassadins Late-game-Burst-Fenster mit Bonusgold und -schaden beim R-Engage. Magical Footwear spart 350 Gold, Biscuit Delivery fixt den schwachen Mana-Pool in Lane, Cosmic Insight reduziert Summoner-CDs für mehr Flash in Skirmishes."
  secondary_rationale: "Sorcery secondary: Manaflow Band ist Pflicht — ohne sie zieht Q-Spam in Lane dein Mana vor Level 9 leer. Transcendence treibt ability haste über 40 %, senkt Riftwalk-CD genug, um 3-4 R im Teamfight zu chainen statt 2."
  secondary_alternative: "Gegen heftige Poke-Mages, die dir pre-6 jegliches Farm verwehren (Xerath, Vel'Koz), swap Sorcery zu Resolve mit Second Wind (passive HP-Regen vs Poke) und Overgrowth (HP-Scaling), um lange genug zum Scalen zu überleben."
matchup_draft:
  pick_into:
    - examples: ["veigar", "annie", "vladimir"]
      archetype: "Immobile Mages ohne Dash"
      reason: "Nach Level 11 hat Riftwalk 2s CD: du blinkst auf sie, Q auf den Cast, E zum Slow, AA-Execute, bevor sie ihr volles Burst-Combo landen."
    - examples: ["lux", "syndra"]
      archetype: "Skillshot-Setup-Mages ohne Escape"
      reason: "Ihr Schaden braucht ein Long-Range-Setup (Q-Root, Stun-Stacks); Kassadins late R lässt ihn den Skillshot mid-Combo umgehen und den Gap mit einem Blink schließen, den sie nicht punishen."
    - examples: ["taliyah", "azir"]
      archetype: "Long-Range-Area-Denial-Mages"
      reason: "Pre-6 bullien sie dich, aber post-11 neutralisieren der magic shield von Q + die R-Mobilität ihre Kiting-Tools. Spät im Spiel ist ihr AOE auf einem Ziel verschwendet, das sie nicht festnageln können."
  counterpicks:
    - examples: ["xerath", "vel-koz", "zoe"]
      archetype: "Long-Range-Poke-Mages"
      reason: "Sie poken außerhalb deiner Q-Range (650) das ganze Pre-6-Fenster lang. Der magic shield von Q hilft, füllt aber kein HP nach — auf Level 6 bist du schon halb leer und kannst nicht all-in."
    - examples: ["talon", "zed"]
      archetype: "Early-game AD-Assassins"
      reason: "Ihr 2-Item-Powerspike kommt um Minute 14, während Kassadin noch beim ersten Item ist. Roams in die Side Lanes bestrafen sein langsames Scaling — das Spiel endet, bevor sein Late Game ankommt."
    - examples: ["pantheon", "yasuo"]
      archetype: "Snowball-Lane-Bullies mit All-in-Druck"
      reason: "Ihr Level-2-3-All-in (Pantheon Q+W Stun, Yasuo Q-Windwall-Knockup) zerlegt Kassadins HP, bevor er Q max ranks hat. Der magic shield von Q ist nutzlos gegen physischen Schaden."
---

## Überblick

Kassadin ist ein AP Assassin (ein Mage, der den Gap schließt und ein einzelnes Ziel löscht, statt von weit weg zu poken), gebaut für das Late Game. Sein Kit dreht sich um **Riftwalk (R)**: ein kurzer Blink mit sehr niedrigem Cooldown, der zum stärksten Repositionierungs-Tool im Spiel wird, sobald er auf Level 16 Rang 3 erreicht. Der Preis ist eine harte Lane Phase: kurze Range (650 auf **Q**), kein Waveclear vor Level 9, und Basisschaden, der pre-6 jeden All-in (volles Trade-Commitment bis jemand stirbt) gegen die meisten Mid-Laner verliert. Die Mid Lane passt zu ihm, weil der River der kürzeste Weg zu Scuttle und Side Lanes ist, sobald **R** online ist — aber zuerst musst du 11-13 Minuten überleben.

Sein Game Plan ist simpel: pre-6 nicht feeden, Level 11 mit einem fertigen Item erreichen, dann squishy Carries jagen. Die Skill Expression liegt im Mana-Management von **Riftwalk** (jeder Cast innerhalb von 7 Sekunden verdoppelt die Kosten, also sind 4 R im Fight ohne Tear-basiertes Item unmöglich) und im Stacken von ![Force Pulse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/ForcePulse.png) **Force Pulse (E)** mit deinen eigenen Spells, bevor der Fight startet.

## Empfohlener Build

**Starting items:** Doran's Ring + 2 Health Potions. Das Mana von Doran's zählt mehr als das HP von Doran's Shield: du spammst **Q** in Lane, um aus Distanz zu last-hitten, wenn du kannst.

**Core items (in Reihenfolge):**

1. ![Rod of Ages](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6657.png) **Rod of Ages** — bester Mana + HP + AP-Scaler im Spiel für Kassadin. Die Eternity-Passive ab Minute 10 heilt dich pro Level-up um ein gutes Stück und hält dich in Lane Phase. Erstes fertiges Item.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flache magic penetration, die fast immer richtigen Stiefel gegen squishy mid/ADC-Ziele.
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 35 % AP-Multiplikator. Dein Q+E+AA-Combo verdoppelt sich im Schaden mit dem Item.
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — Armor + AP + active Stasis. Lässt dich in die Backline R'en und in Stasis gehen, falls Peel kommt, dann R wieder raus, wenn die Stasis endet.
5. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — magic penetration vs MR-Stacking. Pflicht, sobald ein Priority Target ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** oder ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** + ein MR-Item kauft.

**Situational items:**

- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — vs Comps, die du post-11 out-scalst. AP + ability haste + Bewegungstempo: du chainst Riftwalks schneller und klebst an der squishy Backline, sobald du drin bist.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — vs single-target magic CC, der dein **R**-Fenster zumacht (Ahri Charm, Lissandra R, Twisted Fate Stun).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — vs Heal-Stacking-Comps. Legt Grievous Wounds auf (ein Debuff, der Heilung halbiert) auf Schaden.
- ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — vs squishy Carries mit Schilden. Die HP-Threshold-Passive (eine Passive, die aktiv wird, wenn das Ziel unter ~35 % HP fällt) passt zu deinem **R+Q+E**-Execute.

**Boots:** Sorcerer's Shoes default. Wechsel auf ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** vs schwere AP + CC-Comps (2+ Stuns / Roots im gegnerischen Team).

**Skill Order:** Maxe **Q** zuerst (bester Schaden und der mana-cheap Shield), **E** zweite (Waveclear schaltet sich auf Level 9 mit E max frei), **W** zuletzt. Punkt in **R** auf Level 6, 11, 16.

**Runes:** Primary **Inspiration** mit **First Strike**, **Magical Footwear**, **Biscuit Delivery**, **Cosmic Insight**. Secondary **Sorcery** mit **Manaflow Band** und **Transcendence**. Wechsel Sorcery zu **Resolve** (Second Wind + Overgrowth) in Long-Range-Poke-Matchups.

## Wichtige Matchups

- **Xerath / Vel'Koz:** Ihre Q-Range übersteigt deine um 200+ Einheiten. Last-hit nur mit **Q** auf Max-Range, friss den Poke, push nie über den River. Nutze den Shield von ![Q (Null Sphere)](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/NullLance.png) **Null Sphere** eine halbe Sekunde, bevor ihre Spells einschlagen — der magic shield blockt das meiste vom Schaden.
- **Zed:** Vermeide All-ins pre-6. Sobald **R** freigeschaltet ist, baite seinen **R**-Mark, dann Riftwalk, um den Snap-Back-Schaden zu dodgen. Kauf ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** als Item 2 statt Deathcap, wenn er fed ist (schon 4+ Kills).
- **Veigar:** Pre-6 ausgeglichen, brutal post-11. Bleib außerhalb seiner **E**-Cage-Range bis Level 11; sobald du R bei 2s CD hast, dive ihn mit einem seitlichen Riftwalk durch die Cage (die Cage hat offene Ecken, keine Vollwände).
- **Ahri:** Roam-Priority-Race. Push die Wave, wenn sie kein Mana hat, folge ihren Roams. Ihr Charm cancelt deinen **R** mid-Blink — kauf ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** als 4. Item, wenn sie die Carry-Threat ist.
- **Yasuo:** Harter Early-Bully. Nicht in die Wave auto-attacken (sein **E** dasht über deine Minions für gratis Poke). Bleib zurück, lass ihn pushen, freeze die Wave nahe deinem Turm mit Auto-Attack-Pulls. Überlebe bis Level 6, dann fang an, R+Q zu traden.

## Power Spikes & Siegbedingungen

- **Level 6:** Erstes **Riftwalk** schaltet frei. Du kannst jetzt über Wände blinken — entkomme Ganks durch das Krug-Pit, die Raptor-Wand, den Drache-Pit-Rand. Schaden auf R Rang 1 ist gering, noch kein All-in.
- **![Rod of Ages](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6657.png) Rod of Ages fertig (~ Minute 12-14):** Erstes großes HP/Mana-Polster. Die Lane Phase wird überlebbar; such kurze Trades, wenn der gegnerische Mid auf Cooldown ist.
- **Level 11:** Zweiter **R**-Rang senkt den CD auf 3,5 Sekunden. Hier ist der echte Kassadin online — du chainst 2 R und überlebst, oder R-Q-E-AA-R out auf einen squishy. Ab hier Teamfights forcieren.
- **Level 16 + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ Minute 24-28):** R bei 2s CD, AP-Scaling obendrauf. Du one-shottest jeden squishy ohne MR und chainst 3-4 R in einem einzigen Fight. Forciere Baron- und Elder-Dragon-Fights — Late-game-Kassadin gewinnt sie.

## Häufige Fehler

- **Versuchen, die Lane zu gewinnen.** Kassadin ist by design der schwächste Early-Laner im Mid. Wenn du auf Level-3-All-ins gehst, stirbst du, fällst zurück und erreichst dein Spike nie. Last-hit, friss Poke, erreiche Level 11 lebendig — das ist die Win Condition.
- **Riftwalk in Skirmishes spammen.** Jeder Cast innerhalb von 7 Sekunden verdoppelt die Manakosten. 4 R hintereinander brennen 600+ Mana — du beendest den Fight ohne Q und ohne E. Überwache deine Mana-Leiste vor dem 3. R.
- **E für den perfekten Kegel halten.** ![Force Pulse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/ForcePulse.png) **Force Pulse** lädt sich durch nahe Spell-Casts auf (deine und gegnerische zählen). Cast Q einmal auf eine Wave vor dem Fight, um E auf ready zu stacken, dann engage. Ohne geladenes E in einen Fight zu gehen, ist den Slow-Finisher zu verschenken.
- **R-Engage ohne Exit-Plan.** Riftwalk ist kurze Range (500). Wenn du auf den ADC-Backline blinkst und dein Team nicht nachsetzt, frisst dich der Peel, bevor R wieder up ist. Such immer die Richtung des zweiten R (wo R ich raus?), bevor du den ersten R nutzt.
- **Deathcap vor Rod of Ages kaufen.** Deathcap kostet 3600 Gold ohne HP/Mana — wenn du es zuerst kaufst, stirbst du in jedem Teamfight, bevor das AP zählt. Rod of Ages (3700g, +400 HP, +400 Mana) ist das Survivability-Item, das den Deathcap nutzbar macht.

## Fortgeschrittener Tipp

Nutze **Q** als magic-shield-Buffer vor gegnerischen Spell-Wind-ups, nicht nur als Poke. Der 1,5-Sekunden-Magic-Shield von Null Sphere absorbiert einen festen Anteil magischen Schadens — caste ihn in der halben Sekunde, bevor ein Veigar-**W**, ein Lissandra-**R** oder ein Annie-**R+Tibbers** einschlägt, und du negierst den größten Teil ihres Bursts. Trainiere das Timing im Practice Tool gegen einen Veigar-Bot: der Shield muss aktiv sein, **wenn der Spell trifft**, nicht bevor der Cast startet. Dieser eine Trick trennt Kassadin-Spieler, die ihre Lane 0/3 verlieren, von denen, die sie 0/0 verlieren und scalen.
