---
title: "Illaoi Top Build & Guide — Patch 16.9"
slug: "illaoi-top"
language: "de"
patch: "16.9"
champion: "illaoi"
role: "top"
last_updated: "2026-05-04"
description: "Illaoi Top Guide für League of Legends Patch 16.9: Juggernaut-Build mit Tentakeln, Test-of-Spirit-Druck, wichtige Matchups, Power Spikes, häufige Fehler und ein Profi-Tipp."
quick_learn:
  champion_dd_id: "Illaoi"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Juggernaut / Bruiser"
  abilities:
    - key: "P"
      name: "Prophet of an Elder God"
      description: "Tentakel spawnen an nahen Wänden und unpassierbarem Gelände. Sie schlagen auf von W getroffene Gegner, von E erzeugte Vessels und jeden gepullten Geist. Treffer auf Champions und Vessels heilen Illaoi."
      dd_spell_id: "Illaoi_Passive"
    - key: "Q"
      name: "Tentacle Smash"
      description: "Tentakel-Schlag in einer Linie, physischer Schaden. Passive: verstärkt jeden Tentakel-Slam — Q ist auch ihr Waveclear und der Tentakel-Trigger."
      dd_spell_id: "IllaoiQ"
    - key: "W"
      name: "Harsh Lesson"
      description: "Empowered Auto-Attack: springt auf das Ziel, fügt physischen Max-HP-Schaden zu und befiehlt allen nahen Tentakeln zu slammen. Der Sprung ist ihre einzige Mobility."
      dd_spell_id: "IllaoiW"
    - key: "E"
      name: "Test of Spirit"
      description: "Linearer Skillshot mit hoher Reichweite, der den Geist des Gegners herausreißt. Schaden am Geist wird auf das echte Ziel gespiegelt. Stirbt der Geist oder verlässt das Ziel die Reichweite, wird es Vessel und von Tentakeln gejagt."
      dd_spell_id: "IllaoiE"
    - key: "R"
      name: "Leap of Faith"
      description: "AOE-Slam um Illaoi: Schaden + ein zusätzlicher Tentakel pro getroffenem Champion. Für 8s sind Tentakel untargetable und slammen 50% schneller, der W-Cooldown sinkt auf ~1.5s."
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
      against: "Wechsel von Plated Steelcaps gegen 2+ AP-Threats oder Ketten-CC (Lissandra, Malphite Ult, Sett-Pull)"
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "gegen Kiter, die aus W-Reichweite laufen (Quinn, Vayne, Gnar) — aktive Dash plus Slow halten sie im Tentakel-Radius"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "gegen Frontlines mit viel Armor (Malphite, Rammus, Shen) — jeder Q-Smash und W-Proc schält Armor für das ganze Team"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "gegen AP-Burst-Comps (Vladimir, LeBlanc) — Magieschild zündet bei niedrigen HP, genau wenn Tentakel noch Sekunden brauchen"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "wenn das Team 4v5 hinten liegt und Splitpush nötig ist — Bonusresistenzen gegen Minions und Türme zur Solo-Belagerung"
  base_combo: ["E", "Q", "W", "AA", "R"]
  win_condition: "Pulle den Geist mit E, halte das Ziel im Radius möglichst vieler Tentakel. Jeder Q-Smash und W-Treffer tickt auf Geist und Ziel — lange Fights sind ihre Win Zone."
  weakness: "Keine Dash, keine Flucht außer Flash. Ranged Tops poken sie aus W-Reichweite, und Skirmisher mit mehreren Dashes baiten Tentakel, verlassen den Radius und kommen zurück, wenn Conqueror abgelaufen ist."
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
    primary_rationale: "Precision mit Conqueror: jeder Q, W und Tentakel-Slam stackt die Keystone, und Illaois Win Zone sind 5+ Sekunden lange Fights. Triumph heilt bei Takedowns, Legend: Alacrity gibt Attack Speed für W-Resets, Last Stand belohnt den Niedrig-HP-Bereich, in dem R landet."
    secondary_rationale: "Resolve secondary: Bone Plating schluckt die ersten 3 Treffer eines All-Ins (auf Level 2-3 verliert Illaoi HP ohne Konter), Overgrowth skaliert HP über sterbende Minions auf bis zu ~3.5% Bonus-HP bei Minute 25 — Haltbarkeit für Teamfights."
    secondary_alternative: "Wenn der Top harter Ranged Poke ist (Teemo, Quinn, Jayce, Kennen), behalte Conqueror, swappe aber Resolve zu Inspiration mit Triple Tonic (extra Heiltränke) und Magical Footwear (gratis Boots ~Min 12) — Lane-Prio ist eh weg, Inspiration holt Gold und HP zurück."
matchup_draft:
  pick_into:
    - examples: ["sett", "garen", "darius", "mordekaiser"]
      archetype: "Kurzdistanz-Melee-Juggernauts ohne Dash"
      reason: "Ihr gesamtes Schadensprofil liegt innerhalb der W-Reichweite. Sobald du auf sie W-st, slammt jeder nahe Tentakel — und sie haben keine Dash, um den Radius zu verlassen, bevor Conqueror sein Cap erreicht und der Schaden eskaliert."
    - examples: ["nasus", "sion"]
      archetype: "Tank-Scaler mit schwachem Laning"
      reason: "Ihre ersten 6 Level sind passives Farmen. E sie aus der Wave für gratis Chip und stack Vessels: Tentakel jagen sie zur Wave und das Spirit-Echo verdoppelt jeden Q-Smash."
    - examples: ["yorick", "volibear"]
      archetype: "Melee-Bruiser, die Pets oder Buffs zum Fighten beschwören"
      reason: "Sie committen vorwärts, um ihr Kit zu nutzen (Yoricks Ghouls, Volibears empowered AA): einmal committed sind sie in W-Reichweite und der Tentakel-Schwarm bestraft sie fürs Bleiben."
  counterpicks:
    - examples: ["teemo", "vayne", "quinn", "kennen"]
      archetype: "Ranged Top Laner, die poken oder kiten"
      reason: "Sie bleiben außerhalb der 400er W-Reichweite und shredden HP mit Autos. Jeder Schritt zum Schließen der Distanz schenkt ihnen einen weiteren Auto — und du hast keine Dash zum Gap-Closer."
    - examples: ["riven", "irelia", "camille"]
      archetype: "Multi-Dash-Skirmisher"
      reason: "Sie betreten die Tentakel-Reichweite, bursten dich, dashen wieder raus, bevor Conqueror sein Cap erreicht. Wenn ihre Dashes zurück sind, sind deine Tentakel im Cooldown — sie diktieren den Trade-Tempo, nicht du."
    - examples: ["jayce", "gnar"]
      archetype: "Ranged-Melee-Form-Shifter"
      reason: "Sie poken aus Ranged-Form und wechseln nur in Melee, wenn keine Tentakel aktiv sind. Du verbrennst W beim Engage-Versuch und sie canceln den Trade durch Rückwechsel auf Ranged."
---

## Überblick

Illaoi ist eine **Juggernaut** (langsamer, immobiler Melee-Champion, der im direkten Fight extrem hart austeilt und Schaden tankt), aufgebaut um ihre Passive **Prophet of an Elder God**. Sie spawnt **Tentakel** an jeder nahen Wand und jedem unpassierbaren Gelände — riesige, untargetable Arme, die an den Map-Rändern hängen und auf Befehl zuschlagen. Die Tentakel verursachen den Großteil ihres Schadens; deine Aufgabe ist es, den Gegner lange genug in deren Schwingradius zu zwingen, dass er stirbt. Ihr Kit dreht sich um zwei Tools, die den Tentakeln ein Ziel geben: **W (Harsh Lesson)** ist ein kurzer Sprung, der allen nahen Tentakeln befiehlt, auf das Ziel zu slammen, und **E (Test of Spirit)** reißt den Geist des Gegners aus dem Körper, damit die Tentakel ihn vermöbeln können (mit Schaden, der auf den echten Champion gespiegelt wird).

Ihr Game Plan ist brutal einfach. **Lande E zum Markieren des Ziels, geh nach vorn, und W in das dichteste Tentakel-Feld auf deiner Map-Hälfte.** Verlässt der Gegner den Radius, stirbt der Geist und er wird zum **Vessel** — ein Debuff-Status, in dem die Tentakel ihn quer durch die Lane jagen. Ab Level 6 spawnt **R (Leap of Faith)** einen extra Tentakel pro getroffenem feindlichen Champion und macht alle bestehenden Tentakel für 8 Sekunden untargetable — das ist das einzige Fenster, in dem sie wirklich den Burst zum Löschen eines Ziels hat, also halte R für ein All-In oder einen Teamfight zurück, niemals fürs Waveclear.

## Empfohlener Build

**Starting Items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Die HP-Regen-Passive federt Gegner-Poke ab (günstiger Ranged-Schaden, der HP knabbert ohne Fight-Commit), bis dein Level-3-Tentakel-Druck online geht.

**Core Items (in dieser Reihenfolge):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — First-Item-Spike (der Moment, in dem deine Stärke am meisten springt). Die Spellblade-Passive (gratis empowered Auto-Attack alle paar Sekunden nach einem Spell-Cast) passt perfekt zu W: jeder Sprung-Auto trigger (procct) Spellblade. Bringt AD (Attack Damage, die Stat hinter physischem Schaden), HP, Ability Haste (Stat, die Cooldowns senkt) und Attack Speed — alles, was das Kit braucht.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — Standard-Boots gegen Teams, die hauptsächlich mit Auto-Attacks wehtun. Reduziert Auto-Schaden in langen Trades (hin- und herwechselnde Schadensaustäusche in der Lane).
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP plus ein **Lifeline-Schild**: fallen deine HP unter ~30%, zündet automatisch ein Schild. Genau in diesem Fenster slammen deine Tentakel noch, also werden die zusätzlichen Sekunden Überleben zur Kill.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — wandelt **Burst** AD-Schaden (hoher Schaden in 1-2 Sekunden, Assassinen-Combo) in einen langsamen **Bleed** um (Schaden über die nächsten Sekunden statt sofort). Bei Takedowns wird der verbleibende Bleed gelöscht — ein Gratis-Reset, jedes Mal wenn R einen Kill kettet.
5. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — MR (Magic Resistance) plus eine Healing-Amp-Passive, die Tentakel-Heals der Passive boostet, den Death's-Dance-Bleed-Clean und den W-Max-HP-Trade. Der größte einzelne Survival-Multiplikator im Build.

**Situational Items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — Wechsel von ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**, wenn das Enemy Team 2+ AP-Threats oder Ketten-**CC** hat (Crowd Control: Stuns, Roots, Knockbacks — alles, was dich festsetzt und am Handeln hindert). Tenacity (Stat, die CC-Dauer auf dir verkürzt) ist kritisch, weil du keine Dash zum Entkommen hast.
- ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — gegen Kiter, die immer wieder aus deiner 400er W laufen (Quinn, Vayne Top, Gnar). Der Active ist eine kurze Dash plus AOE-Slow — genau der zweite Gap-Closer, den das Kit nicht hat. Ersetzt ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** als First Item, beide nicht stacken.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — gegen Frontlines mit gestapeltem Armor (Malphite, Rammus, Shen). Jeder Q-Smash und W-Proc schält Armor-Stacks vom Ziel für das ganze Team.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — gegen AP-Burst-Comps (Vladimir, LeBlanc, Veigar). Der Magieschild zündet automatisch bei niedrigen HP — genau die Sekunden, die du brauchst, damit Tentakel weiter slammen.
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — wenn das Team 4v5 hinten liegt und dein Job ist **Splitpush** (eine Side Lane allein pushen, um Gegner von Objectives wegzuziehen). Bonus-Resistenzen gegen Minions und Türme erlauben Illaoi, eine Side allein zu belagern.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** sind Default. Wechsel zu ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**, wenn das Enemy Team drei oder mehr CC-Quellen oder schweren Magieschaden hat.

**Skill Order:** Maxe **Q** zuerst (Waveclear, Tentakel-Schadens-Amp, niedrigster Cooldown). Maxe **E** als zweites (der Cooldown sinkt um 4 Sekunden auf Max-Rang, was mehr Vessel-Druck pro Minute bedeutet). **W** maxt zuletzt — der Schaden ist bereits enorm, da er mit Max-HP des Ziels skaliert, also bringen Extra-Ranks weniger als Q oder E. Setze **R**-Punkte auf Level 6, 11, 16.

**Runen:** Primär **Precision** mit der Keystone (Hauptrune des Baums) **Conqueror** — eine Passive, die Bonus-AD anhäuft, solange du gegen Champions kämpfst, gecappt nach 5 Sekunden anhaltendem Combat. Kombiniert mit **Triumph** (kleiner Heal und Gold-Burst bei Takedowns), **Legend: Alacrity** (Attack Speed durch Takedowns) und **Last Stand** (Bonusschaden unter 60% HP). Sekundär **Resolve** mit **Bone Plating** (Schadensreduktion auf die nächsten 3 Treffer nach Schaden) plus **Overgrowth** (HP-Skalierung durch nahe Minion-Tode, perfekt für einen Top Laner mit 8+ Minions pro Wave). Stat Shards: **Adaptive Force** + **Adaptive Force** + **Health Scaling**.

## Wichtige Matchups

- **Sett:** Vorteilhafte Lane. Sein Q-W-E-Combo ist telegraphed (das Wind-Up — die sichtbare Animation vor dem Cast — ist lang genug zum Reagieren). Halt E, um seinen Geist genau dann herauszuziehen, wenn er W cast — sobald seine Schild-Bar leer ist, hat er kein Disengage, und der Tentakel-Schwarm reißt ihm vor seinem R einen großen HP-Brocken raus.
- **Darius:** Skill Matchup (der bessere Spieler gewinnt, unabhängig vom Pick). Er gewinnt den langen Trade auf 5 Stacks, wenn Tentakel down sind — bait seinen E-Pull, dann W zurück in ein Tentakel-Feld. Niemals in der Lane-Mitte traden, nur auf deiner Seite, wo Tentakel die Wand decken.
- **Fiora:** Hartes Melee-Matchup. Ihr **W** ist ein Parry (kurzer Schild, der den nächsten Spell blockt und kontert) — parriert sie dein E, spawnt der Geist nicht und du verschwendest 14 Sekunden Cooldown. **Bait** den Parry mit einem Animation Cancel (E-Cast starten, dann seitwärts strafen) bevor du den echten Cast committest.
- **Teemo / Quinn:** Sehr hartes Ranged-Matchup. Sie sitzen außerhalb der W-Reichweite, blinden deine Auto-Attacks (canceln sie kurz) und chippen HP gratis. **Freeze** die Wave nahe deinem Turm (push nicht, halte die Wave auf deiner Lane-Seite), um ihnen Farm zu verweigern (Gold und XP von Minions), und ruf deinen Jungler — Illaoi gewinnt dieses 1v1 nicht ohne Hilfe.
- **Camille:** Härtestes Melee-Matchup. Ihr E-Hookshot dasht sie frei in und aus W-Reichweite, und ihr R sperrt dich in einer 1v1-Zone weg von deinen Tentakeln. Halt E für den Moment direkt nach ihrem Dash-In: wenn du den Geist während ihres Commits ziehst, kann ihr R sie nicht retten. Kauf ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** früh — der Großteil ihres Schadens ist True On-Hit (True Damage von jedem Auto: ignoriert Armor und MR), aber jeder Punkt Armor hilft trotzdem gegen den Rest des Kits.

## Power Spikes & Siegbedingungen

- **Level 3:** Mit Q + E + W freigeschaltet hat Illaoi zum ersten Mal ihren vollen Lane-Combo. E zum Markieren, lauf in dein Tentakel-Feld, W zum Springen und Slam-Befehl. Ab hier gehört dir die Lane, außer der Gegner ist Ranged.
- **Level 6:** Erste **R** schaltet frei. Selbst mit nur einem Tentakel an der Wand spawnt R einen zweiten und macht alle für 8 Sekunden **untargetable** (kein Gegner kann sie angreifen). Ein 1v1 mit R up ist ein Kill gegen jeden nicht-mobilen Bruiser.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force fertig (~ Min 13-15):** Schaden und **Stickiness** (Fähigkeit, an einem fliehenden Ziel zu kleben) springen am stärksten. Erzwinge Side-Lane-1v1 und such nach **Roams** (deine Lane verlassen, um Mid oder Bot zu helfen) für Picks (isolierte Kills auf falsch positionierte Gegner).
- **Zwei Items + R online (~ Min 18-22):** Peak-Teamfight-Fenster. Lauf durch die Frontline deines Teams (Tanks/Bruiser in der ersten Reihe), R auf 3+ Gegner für 3+ neue Tentakel sofort, und lass den Schwarm die Backline shredden (Squishy Carries — Champions mit hohem Schaden und niedriger Defense, die hinter ihren Tanks stehen) während Conqueror sein Cap in den ersten 5 Sekunden erreicht.

## Häufige Fehler

- **In der offenen Mid-Lane fighten.** Tentakel spawnen nur an Wänden und unpassierbarem Gelände. W-st du auf ein Ziel mitten im River oder in einer offenen Lane, slammt kein Tentakel und das W ist nur ein 400er-Sprung ohne Extra. Wähl den Fight immer nahe einer Wand — der Bush deiner Lane-Seite, der Tri-Bush, dein Jungle-Eingang.
- **E auf eine Niedrig-HP-Minion-Reihe werfen.** E ist deine wichtigste Ability mit 12-16 Sekunden Cooldown. Castest du sie und der Skillshot trifft einen Minion oder verfehlt den Champion, hast du 14 Sekunden kein Setup — und der Gegner weiß es. Warte auf eine saubere Sichtlinie auf den Champion, bevor du E drückst.
- **R fürs Waveclear drücken.** R macht AOE-Schaden, aber der echte Wert sind die 8 Sekunden untargetable Tentakel plus der Bonus-Tentakel pro Champion-Treffer. Sie auf eine Wave zu nutzen verschwendet einen 70-120-Sekunden-Cooldown und lässt dich ohne Teamfight-Tools, wenn der gegnerische Jungler auftaucht.
- **In einen Fight laufen, ohne Tentakel-Positionen zu prüfen.** Wenn die nächsten Tentakel ablaufen (das orange Glühen verblasst kurz vor dem Despawn), warte 4 Sekunden auf einen neuen Spawn, bevor du W committest. Eine Harsh Lesson ohne Tentakel zum Slammen ist ein verschwendeter Sprung.
- **Pure Tank-Items stacken.** Illaoi skaliert mit **AD** (Attack Damage, die Stat hinter physischem Schaden) — jeder Tentakel-Slam ist ein Prozentsatz ihres AD. Sunfire + Warmog's killen deinen Schaden komplett; du tötest keine Squishies mehr und wirst zum langsamen Lauf-Minion. Bleib beim AD-Bruiser-Core.

## Fortgeschrittener Tipp

Übe den **E-Animation-Cancel**. Test of Spirit hat eine lange Cast-Animation (~0.5s), während der Illaoi auf der Stelle festgehalten wird — lang genug, dass jeder aufmerksame Gegner den linearen Skillshot ausweichen kann. Der Fix: Cast starten, 1-2 Schritte vorgehen, um den Dodge in eine Richtung zu baiten, dann im *entgegengesetzten* Frame in der Last-Frame casten. Der gleiche Trick funktioniert umgekehrt: Cursor auf den Gegner halten, Cast faken und auf die vorhergesagte Dodge-Bahn des Geistes recasten. Im echten Spiel ist der schlagkräftigste Einsatz das Level-3-All-In: E-Fake, W auf den Geist, sobald er ausweicht, dann echtes E auf seine reaktive Dash. Übe es im Practice Tool gegen einen Target Dummy, bis der Rhythmus automatisch sitzt.
