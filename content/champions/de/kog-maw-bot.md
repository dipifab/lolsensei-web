---
title: "Kog'Maw Bot Build & Guide — Patch 16.9"
slug: "kog-maw-bot"
language: "de"
patch: "16.9"
champion: "kog-maw"
role: "bot"
last_updated: "2026-05-05"
description: "Kog'Maw Bot Lane Guide für League of Legends Patch 16.9: On-Hit-Hyper-Carry-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein Positioning-Tipp."
quick_learn:
  champion_dd_id: "KogMaw"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hyper-carry on-hit"
  abilities:
    - key: "P"
      name: "Icathian Surprise"
      description: "Beim Tod wird Kog'Maw 4 Sekunden zur wandelnden Bombe und explodiert dann mit true damage. Eine Last-Second-Bedrohung, niemals Plan A."
      dd_spell_id: "KogMaw_Passive"
    - key: "Q"
      name: "Caustic Spittle"
      description: "Lineares Projektil: Magieschaden und Shred von Armor und Magic Resist des Ziels für ein paar Sekunden. Passive: dauerhafter Bonus auf Attack Speed."
      dd_spell_id: "KogMawQ"
    - key: "W"
      name: "Bio-Arcane Barrage"
      description: "Self-Buff (~6s), der die Auto-Attack-Reichweite erweitert und magischen Schaden in % der max. HP on-hit hinzufügt. Herz jedes Teamfights."
      dd_spell_id: "KogMawBioArcaneBarrage"
    - key: "E"
      name: "Void Ooze"
      description: "Linearer Skillshot: Schaden plus verlangsamende Spur. Disengage-Tool und Setup für Auto-Attacks während des W."
      dd_spell_id: "KogMawVoidOoze"
    - key: "R"
      name: "Living Artillery"
      description: "AOE-Artillerie auf Zielgebiet mit extremer Reichweite. Niedriger CD, Manakosten steigen pro Cast. Poke, Wave Clear, Cross-Map-Executes unter 40% HP."
      dd_spell_id: "KogMawLivingArtillery"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "W" }
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
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3091", name: "Wit's End" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3153", name: "Blade of The Ruined King" }
  situational_items:
    - dd_id: "3094"
      name: "Rapid Firecannon"
      against: "gegen Bot-Lanes mit schwerem Poke: erweitert die Reichweite des ersten Autos außerhalb ihres Pokes"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "gegen single-target Hard-CC, der dein W blockiert (Ashe R, Morgana Q, Malzahar R)"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "gegen Heavy-Dive-Comps (Malphite + Yasuo, Hecarim): Wiederbelebung wandelt einen Fehler in zwei Beiträge"
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "gegen Frontline mit 3000+ HP (Sion top, Cho'Gath, Doppel-Tank): Armor Pen + W % HP schmilzt Super-Tanks"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "gegen Heal-Stacking-Comps (Soraka, Aatrox, Dr. Mundo): Grievous Wounds halbiert Heilung 5 Sekunden"
  base_combo: ["E", "AA", "W", "AA"]
  win_condition: "Überlebe das Mid Game hinter deiner Front Line, erreiche den Power Spike mit 3 On-Hit-Items um Minute 25 und schmilz das gegnerische Team in W-Fenstern bei Objective-Fights."
  weakness: "Kein Dash und nur 500 Auto-Attack-Reichweite. Hookers, Assassins und Diver löschen Kog'Maw, bevor das W wieder oben ist, wenn sein Support außer Position steht."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision mit Lethal Tempo: stackt während W und durchbricht das 2.5-Attack-Speed-Cap, jedes W-Fenster wird zum Tank-Shred-Burst. Triumph heilt bei Takedown, Legend: Alacrity gibt AS, Coup de Grace +8% Schaden unter 40% HP — die Ziele räumt R auf."
    secondary_rationale: "Sorcery sekundär: Transcendence erhöht Ability Haste, sodass W und R in langen Fights schneller zurück sind, und Scorch fügt Lane-Poke aus R-Chip hinzu, um die Levels 1-5 für einen Champion ohne Escape weniger schmerzhaft zu machen."
    secondary_alternative: "Gegen Hook- oder Burst-Supports (Blitzcrank, Thresh, Pyke) tausche Sorcery gegen Resolve mit Bone Plating (Schadens-Cap auf den ersten 3 Hits nach Treffer) und Overgrowth (Bonus auf Max-HP) — etwas Scaling für Überleben bis zum ersten Item."
matchup_draft:
  pick_into:
    - examples: ["sion", "tahm-kench", "cho-gath"]
      archetype: "Tanks und Bruiser, die HP stapeln"
      reason: "Bio-Arcane Barrage macht magischen Schaden in % der max. HP pro Auto: je mehr Leben sie stapeln, desto schneller löschst du sie. Tanks ohne Dash können dich während deines W-Fensters nicht bestrafen."
    - examples: ["veigar", "senna", "varus"]
      archetype: "Unbewegliche Backline-Scaler"
      reason: "Living Artillery (R) trifft Bodenziele auf extremer Reichweite. Backliners, die für ihren Hauptzauber stillstehen müssen, werden außerhalb des Sichtbereichs angechipt und haben kein Escape-Tool für Konter."
    - examples: ["malphite", "amumu"]
      archetype: "Stationäre Frontline-Engager"
      reason: "Nach ihrer R hat dein Team 2-3 Sekunden freies Feuer — genau die Zeit für einen vollen W-Zyklus auf der gelockten Frontline, bevor sie sich erholt."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "Hook-Supports mit single-target Lockdown"
      reason: "Kog'Maw hat keinen Dash, kein Blink, kein Flash auf E. Ein Hook in der Lane = ein Tod: seine einzige Escape ist Flash, ein Summoner mit 5-Minuten-Cooldown."
    - examples: ["caitlyn", "ezreal"]
      archetype: "Bot Laner mit Long-Range-Poke"
      reason: "Ihre Auto-Reichweite übersteigt Kog'Maws 500-Basis ohne W: Sie schikanieren ihn umsonst in der Lane und zwingen ihn in eine mana-arme Early Game."
    - examples: ["zed", "kha-zix", "rengar"]
      archetype: "Roaming-Assassins"
      reason: "Diese Champions erreichen die Back Line via Dashes, Sprünge oder Stealth-Resets. Sobald sie deine Front Line während eines W-Fensters passieren, rettet dich kein Defensiv-Item außer Guardian Angel rechtzeitig."
---

## Überblick

Kog'Maw ist ein Hyper-Carry-Marksman, der um ein einziges kurzes, entscheidendes Fenster gebaut ist: den **Bio-Arcane Barrage (W)**-Buff. Für etwa sechs Sekunden bist du der Auto-Attacker mit der größten Reichweite auf der Map, jeder Treffer macht Magieschaden in Prozent der max. HP des Ziels, und On-Hit-Items wie Wit's End und Blade of The Ruined King verwandeln dieses Fenster in einen Sturm, der Tanks auslöscht. Außerhalb des W hast du eine Auto-Attack-Reichweite von 500 — kurz für einen Marksman — keinen Dash, keinen Blink. Der Preis dafür, ein Late-Game-Monster zu sein, ist eines der Lieblingsopfer aggressiver Lane-Bullies in den ersten fünfzehn Minuten zu sein.

Der Spielplan ist geradlinig: Überlebe die Lane hinter einem Enchanter-Support (Lulu, Janna, Yuumi, Soraka), farme geduldig, erreiche deine drei On-Hit-Items um Minute 25 und spiele jeden Teamfight hinter deiner Front Line, damit dein W-Fenster ungestört bleibt. **Living Artillery (R)** mildert den Early-Game-Schmerz, indem sie kostenlosen Poke und Wave-Clear aus sicherer Distanz liefert; die Manakosten steigen schnell beim Spammen, also halte sie für Kill-Secures oder Wave-Timing zurück, nicht für Harass.

## Empfohlener Build

**Starting items:** Doran's Blade + Health Potion. Doran's Shield ist akzeptabel gegen ein Heavy-Poke-Matchup (Caitlyn, Varus), aber Doran's Blade ist Standard, um die On-Hit-Rampe zu beschleunigen.

**Core items (in order):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — Erstes Item: Attack Speed und True-Damage-Proc auf dem dritten Treffer; direkte Synergie mit dem W-On-Hit-Fenster.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — Bonus Attack Speed; die einzig vernünftigen Boots für einen Hyper-Carry, der am Attack-Speed-Cap lebt.
3. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — Magieschaden on-hit plus Magic Resist; das beste Einzelitem gegen AP-lastige Comps und verstärkt den Magieschaden deines W.
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — Bolts wenden On-Hit auf zwei zusätzliche Ziele an: macht dein W zu AOE-Wave-Clear und AOE-Teamfight-Druck.
5. ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** — On-Hit-Schaden in % der aktuellen HP, Life Steal und aktiver Slow; das Duelling-Tool, das du gegen ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** tauschst, wenn du Schild statt Life Steal brauchst.

**Situational items:**

- ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — gegen Bot-Lanes mit Heavy Poke (Caitlyn, Varus). Das energized erste Auto erweitert deine effektive W-Auto-Reichweite, sodass du außerhalb ihres Pokes chippen kannst.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — gegen single-target Hard-CC, der dich aus dem W aussperrt (Ashe-R-Pfeil, Morgana-Q-Snare, Malzahar-R-Suppression). Der Aktiv-Effekt cleansed CC mit einem Knopfdruck.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — gegen Heavy-Dive-Comps (Malphite + Yasuo, Hecarim). Die Wiederbelebung wandelt einen Positioning-Fehler in zwei Teamfight-Beiträge — genau das, was ein stationärer AOE-Damage-Dealer braucht.
- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — gegen Frontline mit 3000+ HP. Armor Penetration plus dein W % Max-HP-Magic-Shred löscht Super-Tanks schneller als jedes reine Attack-Speed-Item.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — gegen Heal-Stacking-Comps (Soraka, Aatrox, Dr. Mundo). Grievous Wounds halbiert ihre Sustain für 5 Sekunden; ohne sie wird der W-Schaden schneller geheilt, als du ihn anwendest.

**Boots:** Berserker's Greaves ist die einzige Wahl. Mercury's Treads sind auf Kog'Maw falsch — die verlorene Attack Speed kostet mehr, als die Tenacity zurückgibt.

**Skill order:** Maxe **W** zuerst (Kit-Identität), **Q** als zweites (Armor- und Magic-Resist-Shred plus passive Attack Speed), **E** zuletzt (nur Utility). Setze einen Punkt in **R** auf Level 6, 11, 16.

**Runes:** Primär **Precision** mit **Lethal Tempo**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Sekundär **Sorcery** mit **Transcendence** und **Scorch**, oder **Resolve** mit **Bone Plating** und **Overgrowth** gegen Hook- oder Burst-Supports.

## Wichtige Matchups

- **Caitlyn / Varus:** Bot Laner mit Long-Range-Poke. Nimm ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, verstecke dich hinter der Welle und farme unter Turm bis Level 6. Bitte deinen Support, River und Tri-Bush zu warden; ihr Druck fällt, sobald ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** fertig ist.
- **Draven:** Er übertrumpft dich in jedem All-In (volltauschend bis zur Kill) vor Level 6. Halte sein Level bei der Lane Priority, trade niemals Autos im offenen Feld und nutze **E**, um ihn zu verlangsamen, wenn er auf dich zuläuft. Seine Äxte zwingen ihn in vorgeschobene Position — bestrafe das mit **R**-Poke nach 6.
- **Lucian:** Vermeide Auto-Attack-Trades (seine Passive mit Doppelschüssen gewinnt kurze Trades). Nähere dich nur zum Last-Hit und nutze das W-Fenster nach Minute 8, um seinen **E**-Dash um 100+ Einheiten zu outrange-n.
- **Jhin / Senna:** Sichere Matchups. Beide haben keinen Dash und wollen sich auf langer Reichweite positionieren, aber keiner hält den % Max-HP-Burst deines W aus, sobald du ein Item hast. Suche das All-In, wenn dein Support einen CC bereit hat und dein W online ist.
- **Ezreal:** Skill-Matchup. Er pokt mit **Q**, ist aber bei jedem Cast festgenagelt. Geh während seiner **Q**-Animation rein zum Last-Hit, spare **E** für seinen **E**-Dash, um den Slow zu landen, und ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** ist gut, wenn sein Team Follow-up-CC nach seiner Ulti hat.

## Power Spikes & Siegbedingungen

- **Level 3:** Mit einem Punkt in jeder Fähigkeit hast du dein volles Poke-Kit (**E**-Slow → Auto während **W** → **Q**-Shred). Das ist dein erstes glaubwürdiges All-In-Fenster, wenn dein Support einen CC hat.
- **Level 6:** Die erste **Living Artillery** schaltet Lane-weiten Poke und Last-Hit-Secures aus 1300+ Einheiten Entfernung frei. Auch Wave-Clear über den Fluss hinweg, wenn du gepusht bist.
- **![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer + ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) Berserker's Greaves fertig (~ Minute 14-16):** Erster ernsthafter Teamfight-Power-Spike. Der True-Damage-Proc beim dritten Treffer kombiniert mit dem W % Max-HP bedroht jeden Squishy in Reichweite sofort.
- **3 On-Hit-Items online (~ Minute 25-28):** Mit ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** + ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** + ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** löscht dein W-Fenster die HP-Balken des gesamten Gegnerteams in sechs Sekunden. Erzwinge hier Baron, Atakhan und Elder Drake; das ist der Moment, um den dein Team spielen muss.

## Häufige Fehler

- **W on Cooldown für Trades zünden.** Jedes W, das du in der Lane verbrennst, ist ein W, das dir im nächsten Teamfight fehlt. Halte es für committete All-Ins, Scuttle-Skirmishes und Objective-Fights — nicht für Poke; **R** ist dein Poke-Tool.
- **R bis zur Mana-Erschöpfung spammen.** Jeder Living-Artillery-Cast in kurzer Folge kostet mehr Mana als der vorherige. Nach 3 Casts in 6 Sekunden zahlst du 100+ Mana pro Schuss. Begrenze auf 2 in Folge, außer du sicherst eine Kill.
- **Auf maximaler W-Reichweite während eines Fights stehen.** Maximale Reichweite bringt dich aus dem Peel deines Supports heraus. Stehe eine Auto-Attack-Länge hinter deiner Front Line, nicht an ihrer Spitze — Assassins (jeder Champion, der ein Ziel in 1-2 Sekunden burstet) zielen dich, sobald sie deinen Hut sehen.
- **Kog'Maw ohne Enchanter-Support picken.** Lulu, Janna, Yuumi und Soraka sind keine Präferenzen — sie sind der Vertrag. Mit einem Hook- oder Engage-Support hast du keine Möglichkeit, die Lane Phase zu überleben, und skalierst zu einem Fight, den du nie erreichst.
- **Den Q-Shred vergessen.** **Q** vor dem W auf einen Tank zu treffen, kürzt seinen Armor und Magic Resist mehrere Sekunden lang. Eröffne All-Ins immer mit **Q**, wenn du in Reichweite bist; der folgende On-Hit-Schaden trifft, als hätte das Ziel ein Defensiv-Item weniger.

## Fortgeschrittener Tipp

Buffere die Aktivierung von **Bio-Arcane Barrage (W)** in denselben Input wie deine Last-Hit-Auto-Attack. W kurz vor dem Auto zu drücken bricht Kog'Maws langsamen Wind-Up ab und startet das W-Fenster 0.1-0.2 Sekunden früher — über einen Sechs-Sekunden-Buff hinweg ist das ungefähr eine zusätzliche Auto-Attack. In Teamfights ist das der Unterschied zwischen vier und fünf W-Autos auf die gegnerische Front Line, bevor der erste Dive durchschlägt; es ist die Mechanik mit dem höchsten Wert/Aufwand-Verhältnis im Practice Tool gegen einen Trainings-Dummy.
