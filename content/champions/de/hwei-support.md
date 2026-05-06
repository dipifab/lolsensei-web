---
title: "Hwei Support Build & Guide — Patch 16.9"
slug: "hwei-support"
language: "de"
patch: "16.9"
champion: "hwei"
role: "support"
last_updated: "2026-05-05"
description: "Hwei Support Guide für League of Legends Patch 16.9: Pick-Mage-Starter-Kit, Core-Build, wichtige Matchups in der Bot Lane, Power Spikes und häufige Fehler."
quick_learn:
  champion_dd_id: "Hwei"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Catcher"
  abilities:
    - key: "P"
      name: "Signature of the Visionary"
      description: "Schadenszauber markieren gegnerische Champions. Ein zweiter Schadenszauber vollendet die Signatur und hinterlässt eine Markierung, die nach kurzer Verzögerung als magischer Flächenschaden detoniert."
      dd_spell_id: "Hwei_Passive"
    - key: "Q"
      name: "Subject: Disaster (QQ/QW/QE)"
      description: "Drei Schadens-Subzauber. QQ schneller Feuerball, QW verzögerter Blitz mit sehr hoher Reichweite (Bonusschaden auf isolierte/CC-Ziele), QE Lavapfad mit Slow-Zone."
      dd_spell_id: "HweiQ"
    - key: "W"
      name: "Subject: Serenity (WQ/WW/WE)"
      description: "Drei Utility-Subzauber. WQ Move-Speed-Linie für Verbündete, WW Pool, der mit der Zeit Shield gibt, WE drei Orbs, die die nächsten 3 Zauber/Autos mit Bonusschaden und Mana verstärken."
      dd_spell_id: "HweiW"
    - key: "E"
      name: "Subject: Torment (EQ/EW/EE)"
      description: "Drei CC-Subzauber. EQ Flucht-Skillshot, EW Auge auf dem Boden, das einen zielsuchenden Root abfeuert, wenn ein Gegner eintritt, EE Maul-Zone, die Gegner zur Mitte zieht."
      dd_spell_id: "HweiE"
    - key: "R"
      name: "Spiraling Despair"
      description: "Skillshot mit sehr hoher Reichweite. Klebt am ersten getroffenen Champion und expandiert, verlangsamt nahe Gegner in Stacks; explodiert nach wenigen Sekunden als magischer Flächenschaden."
      dd_spell_id: "HweiR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "W" }
    - { level: 9, key: "E" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "4005", name: "Imperial Mandate" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "6620", name: "Echoes of Helia" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "gegen Hard-CC auf deinem ADC (Leona Stun, Morgana Root, Nautilus Hook): cleanst das Lockdown"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "gegen schweren AOE-Engage (Kennen, Wukong, Malphite, Yasuo): Team-Shield für den erzwungenen Fight"
    - dd_id: "6617"
      name: "Moonstone Renewer"
      against: "gegen Poke-and-Disengage-Comps, wenn du dein Team über lange Fights auf HP hältst"
    - dd_id: "3107"
      name: "Redemption"
      against: "gegen Belagerungs- und 5v5-Setpiece-Comps an Objectives (Drake Pit, Baron Pit), wenn du Heals pre-castest"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "gegen Assassinen, die deine Backline diven (Zed, Akali, Talon): Stasis hält dich am Leben"
  base_combo: ["EW", "QW", "P", "R"]
  win_condition: "Lande den EW-Root oder EE-Drag, follow-up mit QW oder QQ, um die Passive-Signatur zu detonieren, dann ulte Spiraling Despair auf das gelockte Ziel. Snowball die Bot Lane durch wiederholte Picks vor Lane-Ende."
  weakness: "Jeder Zauber ist ein Skillshot, also lässt eine verfehlte E dich ohne Follow-up und ohne Escape. Hwei hat keinen Dash und sehr wenig Mobilität: ein einziger Engage des gegnerischen Supports erwischt ihn aus der Position."
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
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery primary: Aery dient als Poke auf Q und Bonus-Shield auf WW. Manaflow Band trägt die Manakosten der Tripel-Combos, Transcendence stackt Ability Haste, sodass EW jede Wave bereit ist, Scorch closet Kills auf Low-HP-Gegnern."
    secondary_rationale: "Inspiration secondary: Biscuit Delivery deckt deinen schwachen Sustain in der Lane, Cosmic Insight reduziert Cooldowns von Flash und Active Items (Mikael, Locket): mehr Peel-Fenster in Teamfights."
    secondary_alternative: "Gegen Full-Engage-Comps, die deine Backline diven (Leona, Rakan, Nautilus), tausche Inspiration gegen Resolve mit Bone Plating (-30/-60 Schaden auf den Initial-Burst) und Revitalize (+10% auf Shields und Heals): weniger CD-Reduktion, mehr pure Survivability."
matchup_draft:
  pick_into:
    - examples: ["lulu", "soraka", "yuumi", "janna"]
      archetype: "Enchanter Supports ohne Hard-CC"
      reason: "Sie können dein langes EW-Setup (Vision + Root) nicht bestrafen. Du out-rangst ihren Poke und der QW-Verzögerungsblitz erwischt sie, wenn sie vortreten, um ihren ADC zu shielden."
    - examples: ["jhin", "caitlyn", "ashe"]
      archetype: "Immobile ADCs ohne Dash"
      reason: "EW-Root und EE-Drag verbinden sauber, weil sie keinen Gap-Closer haben, um deinen Channel zu unterbrechen. Einmal geprimed, schließen Passive-Signatur plus R den Kill."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "Skillshot-Mage-Supports ohne Escape"
      reason: "Du matcht ihren Poke-Range mit QQ und QW, aber du hast Hard-CC, das ihnen fehlt. In einer langen Lane gewinnst du, weil du eine gelandete E in einen Kill konvertierst, während sie nur HP abnehmen können."
  counterpicks:
    - examples: ["leona", "nautilus", "thresh"]
      archetype: "Hook- und Lockdown-Engage-Supports"
      reason: "Ihr Point-and-Click- oder Hook-Engage trifft, bevor du den Channel auf EW abschließt. Einmal gelocked hat Hwei keinen Dash zur Flucht, und eine verfehlte E lässt ihn ohne Antwort."
    - examples: ["pyke", "rell"]
      archetype: "Roaming und Gap-Close-Engage"
      reason: "Sie schließen die Distanz, die Hwei braucht, um Skillshots zu landen. Pykes Stealth macht EW nutzlos, da du ihn nicht siehst, um das Auge zu platzieren; Rells W-Sprung umgeht die QE-Slow-Zone."
    - examples: ["alistar", "rakan"]
      archetype: "Dash-and-Knockup-Tanks"
      reason: "Ihr Dash plus AOE-Knockup unterbricht deine Zaubersequenz mitten im Cast. Hwei braucht drei Tastendrücke, um ein Ziel zu locken — ein einzelnes Alistar W-Q löscht dieses Fenster."
---

## Überblick

Hwei Support ist ein Pick Mage mit sehr hoher Reichweite, der immobile Bot Lanes in einfache Kills verwandelt. Das Kit basiert auf drei Subzauber-Bäumen: Schaden auf **Q (Subject: Disaster)**, Utility auf **W (Subject: Serenity)** und Crowd Control auf **E (Subject: Torment)**. Die herausragenden Werkzeuge für Support sind **EW (Gaze of the Abyss)** — ein verzögerter zielsuchender Root, der den ersten Gegner lockt, der in ein Vision-Auge tritt — und **EE (Crushing Maw)** — eine Maul-Zone, die Gegner nach innen zieht und sie beim Verlassen verlangsamt. Beide setzen die **Passive (Signature of the Visionary)** auf, die beim zweiten Spell-Treffer als magischer Flächenschaden detoniert. Hweis Reichweite ist auf Mage-Niveau (etwa 900-1100 Units bei den meisten Casts), also wird die Bot Lane auf Poke-Distanz gespielt, nicht im Nahkampf.

Der Game Plan ist "lande eine E, gewinne den Trade." Platziere **EW** vor dem geplanten Pfad des gegnerischen ADCs vor einem Wave-Fight, prime die Passive mit **QQ** oder **QW**, dann verkette die **R (Spiraling Despair)** auf das gelockte Ziel, sodass der Slow rampt, während dein eigener ADC für den Kill reinläuft. Die harte Anforderung ist Positionierung: jeder Spell ist ein Skillshot über Distanz ohne Dash, also ist ein einziger gegnerischer Engage, der dich aus der Reichweite erwischt, ein Todesurteil. Steh hinter deinem ADC, nicht neben ihm.

## Empfohlener Build

**Starting Items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (das neue Support-Quest-Item, das mid-game zu Bloodsong / Solstice Sleigh / Dream-Maker wird) plus 2 Health Potions. Stealth Ward auf dem Trinket-Slot.

**Core Items (in Reihenfolge):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — Quest-Support-Item, Gold-Income während du nahe am ADC bleibst. Auto-Upgrade zum fertigen Support-Item gegen Minute 12-14.
2. ![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4005.png) **Imperial Mandate** — die Engine des Pick-Plays: jeder Slow oder Root deines Kits primt eine Mandate-Markierung, die dein ADC für Bonus-Magic-Damage detoniert. Hwei hat Slow auf QE, EE und R, also ist der Proc in jedem Fight quasi garantiert.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — Flat Magic Penetration: QQ und die Passive-Signatur durchschlagen die squishige gegnerische Backline.
4. ![Echoes of Helia](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6620.png) **Echoes of Helia** — jede geprimte und detonierte Passive triggert einen Helia-Stack: heilt deinen ADC und burnt das Ziel. Mit Mandate kombiniert ergibt Double-Dipping auf jedem gelockten Gegner.
5. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — Extra-Burst plus ein Magic-Penetration-Spike unter 35% HP (der Moment, in dem ein Spell einen Low-HP-Gegner finisht). Passt zu R-Explosionen auf chunkten Zielen.

**Situational Items:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — gegen Hard-CC auf deinem ADC (Leona, Morgana, Nautilus). Cleanst das Lockdown, das der Gegner nutzt, um deinen Carry zu one-shotten.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — gegen schweren AOE-Engage (Kennen, Wukong, Malphite, Yasuo). Der Team-Shield deckt den erzwungenen Fight, dem deine Backline-Range nicht ausweichen kann.
- ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — ersetzt Imperial Mandate als fertiges Support-Item, wenn das gegnerische Team Poke-and-Disengage ist und du weniger Zeit damit verbringst, E zu landen, und mehr damit, dein Team in langen Fights auf HP zu halten.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — gegen Assassinen, die deine Backline diven (Zed, Akali, Talon). Stasis kauft Zeit, damit dein ADC repositionieren kann, während du den Engage überlebst.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** ist Standard. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** wenn dein Team von dir verlangt, CC über lange Fights zu verketten — die Ability Haste hält EW in jeder Fight-Rotation bereit.

**Skill Order:** Maxe **E** zuerst (die primäre Lockdown-Quelle: EW-Root, EE-Drag, EQ-Flucht), **W** als zweites (Shield, MS und Drei-Orb-Empower), **Q** zuletzt (skaliert mit AP, aber Cooldown Reduction zählt weniger, wenn die Build-Slots Support-Items gehören und nicht reinem AP). Punkt in **R** auf Level 6, 11, 16.

**Runes:** Primary **Sorcery** mit **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Inspiration** mit **Biscuit Delivery** und **Cosmic Insight**. Tausche Inspiration gegen **Resolve** mit **Bone Plating** und **Revitalize**, wenn der gegnerische Bot Hard-Engage hat (Leona, Rakan, Nautilus) — Survivability zählt mehr als Active-Item-Cooldown, wenn ihre erste Ability den Trade entscheidet.

## Wichtige Matchups

- **Leona / Nautilus:** Engage-Bedrohungen. Bleib außerhalb ihrer Hook-/Q-Reichweite; nutze **Flash** niemals offensiv in der Lane. Halte **EW** als Peel-Root, wenn sie auf deinen ADC laufen, nicht als Poke-Setup. Wenn sie nach vorne flashen, kann dein **EE**-Drag sie weg von deinem Carry ziehen.
- **Lulu:** Gleichwertiges Matchup. Sie shieldet und disengaget dein **EW**, aber du out-rangst ihren Poke. Warte, bis sie ihren ADC mit **W** in Range bringt, und roote dann sie stattdessen — Lulu, geshieldet auf einen Root, ist ein Kill-Confirm-Setup für deinen ADC.
- **Soraka:** Günstig für Hwei. Ihre niedrige Basis-MS und ihr Mangel an Mobilität bedeuten, dass **EW** fast jeden Cast landet. Push die Wave zuerst, dann spiele die **EW + R**-Combo auf jedem Cooldown auf sie — sie hat keine Antwort.
- **Pyke:** Schweres Matchup. Seine Stealth entfernt die Vision, die dein **EW**-Auge braucht, um ihn zu locken; wenn du ihn nicht auf dem Bildschirm siehst, tut das Auge nichts. Kauf einen Pink Ward (Stealth Ward, später Oracle Lens) und halte die Büsche beleuchtet. Halte **EE** als Peel-Pull, wenn sein Hook landet, nicht als Poke-Tool.
- **Xerath / Vel'Koz:** Long-Range-Mage-Support-Spiegel. Ihr Poke matcht deine Range, aber du hast Hard-CC, das ihnen fehlt: eine gelandete **EW** gewinnt die Lane, weil sie **QW**-Verzögerungsblitz nicht dodgen können, während sie geroottet sind. Trade aggressiv vor Level 6, bevor ihre **R** skaliert.

## Power Spikes & Siegbedingungen

- **Level 2:** Mit einem Punkt in **E** und einem in **W** hast du Lockdown plus eine Shield-Pool. Eine erfolgreiche **EW** plus der Spike deines ADCs reicht, um den gegnerischen Support zu töten, wenn er overextendet.
- **Level 6:** Die erste **Spiraling Despair** schaltet jedes Kill-Setup frei. Die R klebt am ersten getroffenen Champion und verlangsamt die Fläche darum — kombiniere mit **EE**-Drag und du erschaffst eine "Nicht-Begehbare"-Zone für 3-4 Sekunden.
- **![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4005.png) Imperial Mandate Completion (~ Minute 12-14):** Bot-Lane-Snowball-Punkt. Jede geprimte Passive plus Mandate-Detonation löscht die HP-Leiste des gegnerischen ADCs in einer Rotation. Group up mit dem Mid für einen Drake-Fight hier.
- **![Echoes of Helia](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6620.png) Echoes of Helia online (~ Minute 18-22):** Du beginnst, in Skirmishes 2-für-0 zu traden, weil der Helia-Heal auf deinem ADC den gegnerischen Schaden übertrifft und der Burn deine Reichweite erweitert. Das ist das Fenster, um Picks rund um den River zu erzwingen, bevor das gegnerische Team sich für Baron gruppiert.

## Häufige Fehler

- **Q ohne Setup werfen.** Nackter **QW**-Poke auf lange Distanz wirkt verlockend, aber der Blitz macht nur reduzierten Schaden auf mobile Ziele. Lande zuerst **EW**-Root, dann verkette **QW** für den Bonusschaden auf isoliertem/gerootetem Ziel — die Zahlen verdreifachen sich.
- **EW als Poke-Spell nutzen.** EW ist dein Kill-Setup. Sie für einen definierten Moment pro Fight zu halten gewinnt mehr Games, als sie für Chip-Damage zu spammen. Der Cooldown ist zu lang, um sich ein Verfehlen zu leisten.
- **Neben dem ADC stehen.** Hwei hat keinen Dash. Wenn der gegnerische Support auf deinen ADC engaget und du auch im Nahkampf bist, sterbt ihr beide. Positioniere dich 200-300 Units dahinter: so lässt ein Engage, der einen von euch lockt, dem anderen Raum zum Peelen oder Fliehen.
- **Den W-Baum vergessen.** Viele Hweis spielen ihn als reinen Pick-Mage und ignorieren **WW**-Shields und **WE**-Orbs. Mid-Fight ist ein Empower von **WE** auf den Autos deines ADCs nützlicher als ein dritter Schadensspell aus deinem eigenen Kit. Nutze beide Hälften des Kits.
- **In Side-Lanes ohne Vision laufen.** Dein Kit braucht Vision, um EW zu landen und um cross-map zu ulten. Platziere Wards im Tri-Bush und River vor jedem Roam — ohne Vision verschwindet dein Range-Vorteil in dem Moment, in dem du aus der Lane trittst.

## Fortgeschrittener Tipp

Die **EW + EE Pseudo-Combo** ist das wertvollste Setup in Hweis Kit und taucht in Basis-Guides kaum auf. Lege **EW** (das Auge) auf den Pfad, den der Gegner laufen muss, um Last-Hits zu nehmen; es bleibt mehrere Sekunden auf dem Boden, bevor es lockt. Dann caste **EE** (den Maul-Drag), sodass es sie durch den Lock-on-Radius des Auges zieht — das Auge feuert automatisch den zielsuchenden Root in dem Moment, in dem sie eintreten, selbst wenn sie versucht haben, **EE** auszuweichen. Der Drag wird unausweichlich, der Root ist garantiert, und deine **R** plus Passive sichern den Kill von vollen HP auf einem Squishy. Das Fenster ist eng (etwa 1 Sekunde zwischen den Casts), aber zweimal in einem Fight gelandet beendet es das Spiel.
