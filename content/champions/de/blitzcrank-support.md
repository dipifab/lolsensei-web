---
title: "Blitzcrank Support Build & Guide — Patch 16.9"
slug: "blitzcrank-support"
language: "de"
patch: "16.9"
champion: "blitzcrank"
role: "support"
last_updated: "2026-04-29"
description: "Blitzcrank Support Guide für Patch 16.9: Hook-Timings, Ward-Setups, Engage-Build, wichtige Matchups, Power Spikes und häufige Fehler für Einsteiger."
quick_learn:
  champion_dd_id: "Blitzcrank"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Tank / Engage"
  abilities:
    - key: "P"
      name: "Mana Barrier"
      description: "Wenn du auf niedriges HP fällst, bekommst du einen Schild basierend auf deinem aktuellen Mana. Vor Fights die Manaleiste voll halten."
      dd_spell_id: "Blitzcrank_Passive"
    - key: "Q"
      name: "Rocket Grab"
      description: "Linearer Skillshot mit langer Reichweite: zieht den ersten getroffenen Gegner zu dir (ein \"Hook\" — ein Greifer, der das Ziel heranzieht). Lange Cooldown: verfehlter Hook = 16-20 Sekunden ohne Engage."
      dd_spell_id: "RocketGrab"
    - key: "W"
      name: "Overdrive"
      description: "Self-Buff: viel Move Speed und Attack Speed, am Ende ein Slow. Wird benutzt, um vor der Q die Distanz zu schließen oder nach dem E-Knock-up zu chasen."
      dd_spell_id: "Overdrive"
    - key: "E"
      name: "Power Fist"
      description: "Lädt deine nächste Basic Attack auf, um das Ziel kurz hochzuwerfen. Reichweite Nahkampf: Blitz muss bereits direkt am Ziel stehen."
      dd_spell_id: "PowerFist"
    - key: "R"
      name: "Static Field"
      description: "Aktiv: Schaden und Silence (kurze Sperre aller Spells) auf Gegner um dich. Passiv: eine Ladung fügt zusätzlichen elektrischen Schaden auf der nächsten Basic Attack hinzu."
      dd_spell_id: "StaticField"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3876", name: "Solstice Sleigh" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3050", name: "Zeke's Convergence" }
    - { dd_id: "3109", name: "Knight's Vow" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "gegen viel Crowd Control oder AP-Burst (Lux, Morgana, Ahri) — Magic Resist plus Tenacity (schnellere CC-Erholung)"
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "gegen Hard CC auf deinem Carry (Morgana Q, Ashe R, Leona Engage) — Aktiv cleanst einen Stun auf dem ADC"
    - dd_id: "3107"
      name: "Redemption"
      against: "gegen Poke-Comps (Xerath, Caitlyn, Senna) — Area-Heal in Teamfights ersetzt verlorene HP"
    - dd_id: "3158"
      name: "Ionian Boots of Lucidity"
      against: "wenn du mehr Hooks pro Fight willst — Ability Haste verkürzt die Q: ein verfehlter Hook tut weniger weh"
  base_combo: ["Q", "W", "AA", "E", "R", "AA"]
  win_condition: "Lande Rocket Grab auf einem Priority Target (gegnerischer ADC oder Backline-Mage) und finishe mit der W-AA-E-R-Chain, bevor das Team peelen kann (den Carry vor eingehendem Schaden schützen)."
  weakness: "Verfehlt die Q, hast du 16-20 Sekunden fast ohne Engage. Lanes mit Disengage (Janna, Lulu) oder Hook-Blockern (Minions, body-blockende Tanks) legen das Kit lahm."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Ability Haste"
      - "Health Scaling"
      - "Health"
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "jinx", "ezreal"]
      archetype: "Statisch positionierende ADCs ohne Dash"
      reason: "Ihre Auto-Attack-Reichweite zwingt sie auf eine vorhersehbare Linie hinter den Minions; ein Hook entlang des Cannon-Minion-Bogens trifft sauber, weil sie keinen Instant-Escape haben."
    - examples: ["soraka", "yuumi"]
      archetype: "Squishy Enchanters mit niedrigem Base-HP"
      reason: "Den Enchanter aus der Position zu pullen löscht die Lane: ihr Carry hat keinen Peel und die Q-W-E-R-Combo auf einem 500-HP-Ziel beendet den Trade."
    - examples: ["xerath", "vel-koz", "zyra"]
      archetype: "Stationäre Mage Supports"
      reason: "Sie casten aus der Distanz, um zu poken; ein Max-Range-Hook auf den Cast-Frame greift sie, bevor sie flashen können, und dein Team bekommt ein freies 4v5 um sie herum."
  counterpicks:
    - examples: ["thresh", "nautilus", "leona"]
      archetype: "Engage-Tanks, die das Hook-Race gewinnen"
      reason: "Hooken oder chargen sie zuerst, wird deine Q-Animation unterbrochen und dein Mate frisst die CC-Chain — Hook-vs-Hook-Lanes bestrafen, wer den Cast telegrafiert."
    - examples: ["janna", "lulu", "morgana"]
      archetype: "Disengage und CC-Immunität"
      reason: "Janna Q Tornado wirft dich aus E-Range; Lulu W slowt oder polymorpht den Engage; Morgana Black Shield blockt den Hook komplett."
    - examples: ["alistar", "tahm-kench"]
      archetype: "Self-peeling Bruiser"
      reason: "Nach erfolgreichem Hook können sie ihren eigenen ADC weghaopen oder verschlucken; der Pull schließt die Kill nicht, und der lange Q-Cooldown wird zum Punish-Window."
---

## Überblick

Blitzcrank ist ein Tank-Engage-Support, dessen ganzes Spiel sich um eine Ability dreht: **Rocket Grab (Q)**. Der Hook (ein Greifer, der einen Gegner zu dir zieht) startet jeden Fight in diesem Kit. Lande ihn, und die Bot Lane ist für zwei Sekunden ein 2v1; verfehlst du, hast du 16-20 Sekunden Cooldown fast ohne Engage. Er skaliert mit Cooldown-Reduktion (genannt "Ability Haste") und einer Tank-Build, weil sein Job ist, vorzulaufen, zu hooken, hochzuwerfen und lange genug zu überleben, damit sein ADC aufräumt.

Game Plan in einem Satz: warde die Bushes, beobachte die Schritte des gegnerischen ADCs, wirf **Q**, wenn er auf einen vorhersehbaren Pfad tritt, und kette dann **W** (Move-Speed-Self-Buff) → Auto-Attack → **E** (Knock-up) → **R** (Silence und Area-Damage). Außerhalb von Fights ist dein Job die Vision: setze Wards in River und Tri-Bush, damit dein Jungler und Mid Laner wissen, wenn der Gegner missing ist.

## Empfohlener Build

**Starter-Items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions** + ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) **Stealth Ward** Trinket. Kauf einen ![Control Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2055.png) **Control Ward** auf jedem Back ab dem zweiten Back.

**Core-Items (in Reihenfolge):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — Support-Starter. Gibt passiv Gold und upgraded automatisch zu ![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) **Solstice Sleigh**, sobald die Gold-Schwelle erreicht ist (etwa Minute 12-15).
2. ![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) **Solstice Sleigh** — das Warden-Upgrade des Support-Starters. Health, Ability Haste, und eine Aura, die immobilisierte Gegner slowt: passt perfekt zu deinem **E**-Knock-up.
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — Armor-Boots gegen Auto-Attack-lastige Bot Lanes (die meisten ADCs); swap auf ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** gegen viel Crowd Control.
4. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — Aktiv-Schild für die Area. Nach dem Hook und sobald dein Team committet, drückst du Locket, während der gegnerische Burst mid-Cast ist; absorbiert den Spike und macht aus einem Coin-Flip-Fight einen sauberen Win.
5. ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — bindet die Passive an deinen ADC. Nachdem deine **R** detoniert, bekommt dein ADC für ein paar Sekunden Damage-Buff auf jeden Hit.
6. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — Late-Game-Peel-Item (Peel = den Carry vor eingehendem Schaden schützen): leitet einen Teil des Schadens, den dein ADC kassiert, auf dich um. Kombiniert mit deinem Tank-Stack, sodass du in die Backline rennen kannst, um zu Body-blocken (auf einem Pfad stehen, um Treffer für einen Verbündeten zu absorbieren).

**Situative Items:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — gegen Hard CC auf deinem Carry (Morgana Q, Ashe R, Leona Engage). Aktiv cleanst einen Stun auf deinem ADC mitten im Fight.
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — gegen Poke-Comps (Xerath, Caitlyn, Senna): Area-Heal in Teamfights ersetzt die HP, die du beim Vorlaufen verloren hast.
- ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — wenn du mehr Hooks pro Fight willst; Ability Haste verkürzt die **Q**, sodass ein verfehlter Hook weniger schmerzt.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** sind Default gegen die meisten Bot Lanes. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** gegen AP-Burst oder Stuns; ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity**, wenn du deinen Hooks vertraust und sie schneller wieder draufhaben willst.

**Skill-Order:** Maxe **Q** zuerst (Hook ist das Kit), **E** als zweites (Knock-up skaliert mit Rank), **W** als letztes. Punkt in **R** auf Level 6, 11, 16.

**Runen:** Primär **Resolve** mit **Aftershock**, **Font of Life**, **Bone Plating**, **Overgrowth**. Aftershock gibt dir nach einer Immobilisierung einen Burst aus Armor und Magic Resist — triggert exakt auf deinem **Q**-Pull, also genau in dem Moment, in dem du zum Ziel wirst, tankst du den Return-Damage. Sekundär **Inspiration** mit **Biscuit Delivery** und **Cosmic Insight**. Alternative: **Inspiration** primär mit **Glacial Augment**, wenn du eine Poke-and-Slow-Lane bevorzugst (seltener, aber viable gegen immobile Enchanters).

## Wichtige Matchups

- **Caitlyn / Janna:** Caitlyn legt Traps in Bushes, durch die du zum Hooken laufen würdest. Kauf einen ![Control Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2055.png) **Control Ward** für den Lane-Bush und check ihn, bevor du reingehst; Jannas Q-Tornado canceled deine **Q**-Animation, also warte, bis sie ihn auf eine Wave benutzt, bevor du deine wirfst.
- **Thresh / Nautilus:** Hook-vs-Hook-Lane. Wer zuerst wirft, verliert meistens, weil der zweite Hook eine kostenlose Antwort ist. Nutz Minions als Body-Block: stell dich hinter den Cannon-Minion, zwing sie zum Commit, und punish auf ihrem Cooldown.
- **Lulu / Yuumi:** Sie skalieren mit ihrem ADC und haben keinen Engage. Du hast Lane-Priority — wirf safeish Hooks, aber wichtiger noch, roame um Level 4-6 mit aktiver **W** in die Mid Lane. Ein Cross-Map-Hook auf einen Mid Laner, der zu weit pusht, ist der höchste Value-Play für Blitz im Spiel.
- **Morgana / Lux:** Beide können deinen Hook mit einem Long-Range-Root stoppen. Morganas E (Black Shield) frisst deine **Q** komplett. Zwing sie, ihn zuerst auf die Wave zu benutzen, indem du einen Hook fakest — Sidestep, dann commit, wenn ihr Shield auf Cooldown ist.
- **Ezreal / Senna:** Sie poken, ohne nach vorn zu commiten. Der Lane-Plan ist nicht "alle 16 Sekunden den ADC hooken" — er ist "Vision verweigern, damit dein Jungler ganken kann". Setz ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) **Stealth Wards** am River-Eingang und ping Gank, wenn Ezreal eine Wave flasht.

## Power Spikes & Siegbedingungen

- **Level 2 (Q + W):** Erster Hook-Power-Spike. Mit aktiver **W** kannst du den Pull ein paar Schritte länger chasen, bevor der finale Slow eintritt — das verwandelt einen Hook oft in einen Kill statt in einen 50%-HP-Trade.
- **Level 6 (R freigeschaltet):** Dein All-In wird zum garantierten Kill auf den meisten ADCs. Die Combo ist **Q** → **W** → Auto-Attack → **E** Knock-up → **R** Silence und Damage. Der Silence verhindert, dass der gegnerische Support dich per **Flash**-Disengage vom Carry holt.
- **![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) Solstice Sleigh fertig (~ Minute 12-15):** Das Warden-Upgrade deines Starters schaltet die Teamfight-Version deines Kits frei: jede Immobilisierung, die du landest, slowt das Ziel für deinen ADC.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari fertig (~ Minute 22-26):** Jetzt kannst du Mid-Game auf einen 5-Stack engagen, ohne dass die Backline weggebursted wird. Das ist der Spike, an dem du mit ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** beginnst, Roams zu Objectives zu machen.

## Häufige Fehler

- **Q on-Cooldown ohne Setup werfen.** Ein Hook ohne Follow-up ist verschwendet: ziehst du ein Ziel, das dein Team nicht erreicht, hast du dem Gegner gerade 16-20 Sekunden geschenkt. Wirf **Q** nur, wenn dein ADC in Reichweite ist, um zu commiten (ein "All-in" — die volle Damage-Chain bis zur Kill, kein Zurücklaufen).
- **Die Hook-Animation telegrafieren.** Blitz hebt vor dem **Q**-Cast den Arm mit klarer Cast-Animation. Anständige Gegner machen Sidestep auf das Wind-up. Wirf **Q** aus einem Bush heraus, aus dem Fog of War (die dunklen unrevelten Teile der Map, in denen der Gegner dich nicht sieht), oder während der Gegner in der Animation seiner eigenen Ability gefangen ist und nicht reagieren kann.
- **Das falsche Ziel hooken.** Den gegnerischen Tank oder Bruiser zu pullen ist fast immer schlecht — es gibt dem Gegnerteam einen kostenlosen Engage auf dich. Such immer das squishy Ziel ("squishy" — Champion mit hohem Damage und niedriger Defense, wie ein ADC oder Mage), bevor du **Q** commitest.
- **Den Manakosten der Passive vergessen.** Dein Schild (Passive **Mana Barrier**) skaliert mit aktuellem Mana, also ist Backen mit niedrigem Mana ein -30% Defensiv-Nerf für den nächsten Fight. Backe, wenn **Q** auf Cooldown ist und dein Mana unter 40% liegt, nicht, wenn dir danach ist.
- **R nur für Damage benutzen.** **Static Field** ist als Silence (kurzes Block der gegnerischen Spell-Casts) nützlicher als als Damage. Heb es auf für den Moment, in dem der gegnerische Support mid-Channel auf einer Schlüssel-Ability ist — der Interrupt ist mehr wert als der Burst auf 200-HP-Gegner.

## Fortgeschrittener Tipp

Das stärkste Hook-Setup im Spiel ist der **Bush-Fog-Hook**. Lauf in den Lane-Bush hinter deiner Wave, wo der Gegner dich nicht sieht. Warte, bis die Wave pusht, sodass der gegnerische ADC vorgeht, um auf dem Cannon-Minion Last-Hits zu nehmen (einen Minion für Gold töten). Wirf **Q** durch die Bush-Wand: sie haben keine Animation zum Lesen, keine Zeit zum Sidestep, und deine Hand kreuzt den Bush, bevor sie merken, dass du gecastet hast. Kombinier mit aktiver **W**, sodass du den Gap schließt, bevor der Flash ihres Supports up ist. Dieses einzelne Pattern ist verantwortlich für die meisten Lane-Kills, die Blitzcrank über der Bronze-Schwelle holt.
