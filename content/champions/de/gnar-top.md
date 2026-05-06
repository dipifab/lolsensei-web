---
title: "Gnar Top Build & Guide — Patch 16.9"
slug: "gnar-top"
language: "de"
patch: "16.9"
champion: "gnar"
role: "top"
last_updated: "2026-05-02"
description: "Gnar Top Guide für League of Legends Patch 16.9: Mini/Mega Rage-Management, Bruiser-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Gnar"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Fighter / Shapeshifter"
  abilities:
    - key: "P"
      name: "Rage Gene"
      description: "Im Kampf sammelt Gnar Rage. Bei Maximum verwandelt ihn die nächste Fähigkeit in Mega Gnar: mehr HP, Nahkampf, neue Fähigkeiten, kein R bis zurück zu Mini."
      dd_spell_id: "Gnar_Passive"
    - key: "Q"
      name: "Boomerang Throw / Boulder Toss"
      description: "Mini: Bumerang mit langer Reichweite, verlangsamt und kehrt zurück; fangen reduziert den Cooldown. Mega: kurzer Felsbrocken, der am ersten Ziel stoppt und das Gebiet verlangsamt."
      dd_spell_id: "GnarQ"
    - key: "W"
      name: "Hyper / Wallop"
      description: "Mini: jeder dritte Angriff/Spell verursacht Bonus-Schaden und gibt Bewegungstempo. Mega: bäumt sich auf und schmettert die Fläche vor sich, betäubt getroffene Gegner."
      dd_spell_id: "GnarW"
    - key: "E"
      name: "Hop / Crunch"
      description: "Mini: Sprung-Dash, der weiter springt, wenn er auf einer Einheit landet (Minion, Ward, Monster, Champion). Mega: schwere Landung mit AOE-Schaden, kein Absprung."
      dd_spell_id: "GnarE"
    - key: "R"
      name: "GNAR!"
      description: "Nur Mega. Schleudert alles um ihn in eine gewählte Richtung; Ziele, die gegen eine Wand prallen, werden betäubt und nehmen Bonus-Schaden. Der ganze Game Plan in einem Knopf."
      dd_spell_id: "GnarR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "3742", name: "Death's Dance" }
    - { dd_id: "3110", name: "Frozen Heart" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "ersetzt Plated Steelcaps, wenn das gegnerische Team 2+ Hard-CC-Quellen oder schweren Magic Damage hat (Malphite R, Lissandra, Kennen)"
    - dd_id: "3091"
      name: "Wit's End"
      against: "gegen AP-Toplaner (Kennen, Vladimir, Rumble): Magic Resist + On-Hit Magic Damage, damit Mini Gnar Q+AA weiter wehtut"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "gegen schweren Magic Burst (Syndra-Roams, Vex, Doppel-AP-Comp): das Lifeline-Shield blockt das One-Shot-Fenster"
    - dd_id: "3143"
      name: "Randuin's Omen"
      against: "gegen Crit-Damage-Dealer (Yasuo, Tryndamere, Caitlyn fed): reduziert erlittenen kritischen Schaden"
    - dd_id: "3075"
      name: "Thornmail"
      against: "gegen Teams mit zwei Heal-Quellen (Soraka + Aatrox, Yuumi + Mundo): Grievous Wounds halbiert deren Healing"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "wenn du nach Trinity allein eine Side Lane splitpushst: Bonus-Schaden auf Türme/Minions plus Stat-Buffs in Solo"
  base_combo: ["Q", "E", "AA", "W", "R"]
  win_condition: "Sammle Rage in der Lane mit Mini-Q-Poke, dann verwandle dich vor einem Fight in Mega. Nutze R als Engage mit Wall-Stun, um das gegnerische Team in Teamfights und an Objectives zu zerschneiden."
  weakness: "Kein Dash und erzwungener Shapeshift. Mega weit weg vom Team heißt kein Hop zurück; Mini im Teamfight heißt kein R. Ranged Toplaner poken Mini Gnar ohne Antwort."
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
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primary: Grasp procct alle 4 Sekunden im Nahkampf — perfekt für Mega Gnar im Frontline. Demolish macht aus einer gepushten Wave kostenlose Plates, Second Wind heilt Ranged-Poke gegen Mini Gnar, Overgrowth skaliert HP bis ins Lategame."
    secondary_rationale: "Precision secondary: Triumph regeneriert HP bei Takedown (riesig nach einem Mega-R-Wall-Stun-Kill), Legend: Alacrity gibt Attack Speed, damit Minis dritter Hyper-Proc bei jedem Trade schneller sitzt."
    secondary_alternative: "Gegen Ranged-Poke-Matchups (Vayne, Quinn, Kennen, Teemo) wechsle Precision zu Sorcery mit Nimbus Cloak (Move Speed nach Summoner) und Gathering Storm (AD-Scaling im Lategame), um Mega-Reichweite zu erreichen und das Late durch Outlasting zu gewinnen."
matchup_draft:
  pick_into:
    - examples: ["sett", "darius", "garen"]
      archetype: "Melee-Juggernauts ohne Ranged-Poke"
      reason: "Mini Gnar Q hat 1100 Reichweite und slowt. Sie können dich nicht treffen, bis du auf sie zugehst, also stackst du Rage sicher und commitest erst, wenn Mega bereit ist, mit R-Wall-Stun zu disengagen."
    - examples: ["aatrox", "renekton"]
      archetype: "Short-Range-Bruiser mit endlichen All-In-Fenstern"
      reason: "Ihr Power-Budget liegt in frühen Trade-Windows. Mini Gnar weicht dem All-In aus, indem er per E von Minions abspringt, und dreht den Spieß um, sobald Mega online ist mit R-Stun + Wallop-Chain."
    - examples: ["nasus", "yorick"]
      archetype: "Scaling-Juggernauts ohne frühen Kill-Druck"
      reason: "Du shovst die Wave mit Mini Q+W und verweigerst ihr Farm unter Turm; sie können nicht bestrafen, weil sie keinen Gap-Close haben, der deine Boomerang-Reichweite schlägt."
  counterpicks:
    - examples: ["vayne", "quinn", "kennen", "teemo"]
      archetype: "Ranged-Toplaner, die Mini Gnar überpoken"
      reason: "Mini Gnar hat keinen Ranged-Sustain und sein einziger sicherer Trade ist Q aus Max-Reichweite. Sie autoattacken aus genau dieser Reichweite und schieben ihn ohne Antwortfenster unter Turm."
    - examples: ["fiora", "camille"]
      archetype: "Anti-Tank-Fighter mit %HP-True-Damage oder Hard-CC-Dive"
      reason: "Fioras Vitals zerschreddern Mega Gnars HP-Pool schneller, als er zurückschlagen kann; Camilles E-Hookshot pinnt Mini Gnar an die Wand für ein All-In, dem er ohne Dash nicht entkommt."
    - examples: ["malphite", "ornn"]
      archetype: "Tank-Engager, die deinen R-Winkel zerstören"
      reason: "Sie flash-engagen deine Backline, bevor du dich verwandeln und deine Wand wählen kannst. Sobald ihre Initiation sitzt, wird dein R zu Peel (Gegner von deinen Carries wegschieben) statt zum game-winning Pickoff (einzelner Kill auf isoliertes Ziel)."
---

## Überblick

Gnar ist ein Top-Lane-Fighter, der je nach Rage-Leiste, die sich beim Einsetzen von Fähigkeiten oder beim Erleiden von Schaden füllt, zwischen zwei Formen wechselt. **Mini Gnar** ist ein Ranged-Poker (Poke = Schaden aus der Distanz, um HP abzubauen, ohne sich festzulegen) mit einem langen Bumerang und einem Sprung, der auf Einheiten resettet; **Mega Gnar** ist ein Nahkampf-Bruiser mit Stun, AOE-Schaden (Area of Effect: Schaden auf eine Zone, nicht ein Einzelziel) und der besten Low-Cooldown-Ulti des Spiels nahe einer Wand. Der ganze Champion dreht sich um das Timing der Verwandlung: Mini in der Lane für sicheren Poke und Farm, Mega bei einem Fight, den du committest (Commit = volles All-In, kein Zurückziehen), wo R Gegner gegen das Terrain pinnen kann.

Der Game Plan in einem Satz: Stacke Rage als Mini, verwandle dich nahe am gegnerischen Team, wirf R gegen eine Wand, um mehrere Ziele zu stunnen (~1,5 Sekunden bewegungsunfähig ohne mögliche Aktionen), und räume dann auf, während dein Team folgt. Wenn du auf offenem Feld ultst, verschwendest du deine eine Win Condition (das, was der Champion gut machen muss, um das Spiel zu gewinnen). Wenn du allein in der Lane Mega wirst, riskierst du den Tod, weil Minis Escape (der Hop springt weiter, wenn er auf einem Minion landet) weg ist.

## Empfohlener Build

**Starting Items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Die HP-Regeneration von Doran's Shield ist genau für den anhaltenden Ranged-Poke gemacht, den jedes Mini-Gnar-Matchup auf dich wirft.

**Core Items (in Reihenfolge):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — erstes Item jedes Spiel. Aus Sheen gebaut (eine Komponente, die nach jedem Cast Bonus-Schaden auf den nächsten Basic Attack legt); Trinity proct das (das Bonus-Damage-Trigger feuert) auf jedem Q, ob Mini oder Mega. Die Movement Speed lässt Mini Gnar kiten (rückwärts laufen und dabei weiter angreifen, um Distanz zu halten), und die Attack Speed lässt Hyper (Minis Drittschlag-Passive) schneller wiederkommen.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — Standard-Boots gegen physische Damage Dealer (die meisten Top-Matchups). Reduziert erlittenen Basic-Attack-Schaden.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — Bonus-HP, die mit dem Bonus-AD deiner anderen Items wachsen, plus ein einmaliges Shield, das um die 30% HP zündet. Hält Mega Gnar lange genug am Leben, um R zu landen.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Death's Dance** — verwandelt erlittenen physischen Burst in einen langsamen Blutverlust (Schaden über die nächsten Sekunden verteilt statt instant). Gibt dir Zeit zu reagieren in einem Fight, den du als Mega committet hast.
5. ![Frozen Heart](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3110.png) **Frozen Heart** — Armor + ein AOE-Attack-Speed-Slow (der Slow trifft jeden Gegner in einer Zone um dich, nicht nur einen). Vernichtet Auto-Attack-Carries (Vayne, Tristana, Kog'Maw), sobald Mega R sie an die Wand gepinnt hat.

**Situational Items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — ersetzen Plated Steelcaps gegen schweres CC (Crowd Control: Stuns, Roots, Silences, die dich am Handeln hindern) oder AP-Comps.
- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — gegen AP-Toplaner (Kennen, Vladimir, Rumble). Liefert Magic Resist plus On-Hit Magic Damage (ein Stück zusätzlicher Magic Damage auf jedem Basic Attack).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — gegen schweren Magic Burst (Syndra-Roams, Vex, Doppel-AP-Comp). Das Lifeline-Shield zündet bei niedrigen HP und absorbiert eingehenden Magic Damage, was das One-Shot-Fenster blockt.
- ![Randuin's Omen](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3143.png) **Randuin's Omen** — gegen Crit-Damage-Dealer (Yasuo, Tryndamere, fed Caitlyn).
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — gegen Teams, die zwei Heilquellen stacken. Wendet Grievous Wounds an (ein Debuff, der gegnerisches Healing für ein paar Sekunden halbiert).
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — wenn du nach Trinity Force allein eine Side Lane splitpushst. Splitpush = eine Side Lane allein pushen, während dein Team woanders spielt, sodass der Gegner gezwungen ist, jemanden zu schicken, der dich stoppt.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** Standard. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**, wenn das gegnerische Team 2+ Hard-CC-Quellen oder schweren AP-Schaden hat.

**Skill Order:** Maxe **W** zuerst (der Drittschlag-Hyper-Schaden skaliert pro Level am stärksten), dann **Q** (längerer Slow + niedrigerer CD für Poke), dann **E** zuletzt. Punkte in **R** auf Level 6, 11, 16.

**Runen:** Primary **Resolve** mit **Grasp of the Undying**, **Demolish**, **Second Wind**, **Overgrowth**. Secondary **Precision** mit **Triumph** und **Legend: Alacrity**.

## Wichtige Matchups

- **Sett:** Free Lane. Mini Q hat mehr Reichweite als alles, was er hat; geh nie in sein W (Haymaker). Wenn er dich erreicht, hop auf einen Minion in der Wave, um zurück in Sicherheit zu springen.
- **Aatrox:** Pre-6 ausgeglichen, du outscalest ihn (du wirst im Spielverlauf relativ zu ihm stärker). Vermeide den Sweet Spot seines Q (das helle Zentrum des Schwungs, wo er Bonus-Schaden macht). Sobald du Mega R + eine Wand hinter ihm hast, verliert er jeden All-In (volles Festlegen-bis-zum-Tod-Fight), den er startet.
- **Vayne:** Hard Counter. Bleib hinten, last-hitte Minions mit Q aus Max-Reichweite, akzeptiere, dass die Lane dich bullyt (du kannst nicht zurückschlagen, ohne zu sterben). Roame (verlasse deine Lane, um eine andere zu unterstützen) zu Mid oder invade die gegnerische Jungle, wenn Mega bereit ist.
- **Camille:** Lane verloren, Late gewonnen. Vermeide die Reichweite ihres E-Hookshots als Mini (sie pinnt dich an die Wand und verbrennt deinen Flash — Flash ist ein Summoner Spell, der dich auf kurze Distanz teleportiert mit 5 Minuten Cooldown, dein einmaliger Notfallknopf — und engaged dann erneut). Hebe dein E für nach ihrem Dash auf, niemals davor.
- **Malphite:** Lane ist okay — Mini Q kitet ihn ewig — aber pass auf Level 6 auf. Er flash-ultet deine Backline (deine Carries hinter deinem Team) im Teamfight, was deinen R-Winkel killt. Sag deinem Team, sich zu verteilen, damit seine Ulti nicht zwei von euch gleichzeitig trifft.

## Power Spikes & Siegbedingungen

- **Level 2:** Mit Q + W gewinnst du die meisten Short Trades (kurze Schlagabtäusche in der Lane, keine vollen Fights) gegen Melee-Bruiser. Lauf in die Wave, Q durch die Minions auf den Gegner, dann triggert deine dritte Basic Attack den Hyper-Bonus-Schaden.
- **Level 6:** Die erste Mega R schaltet einen Tower Dive (unter den gegnerischen Turm gehen, um trotz Turm-Schüsse zu killen) auf einen Low-HP-Gegner frei, wenn du Rage in Mega stackst, bevor du übergehst.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force fertig (~ Minute 12-14):** Dein größter einzelner Power Spike (der Moment, in dem du spürbar stärker wirst und Fights suchen solltest). Mini Q + Auto-Attack haut wie ein Lastwagen rein; Mega Q + W One-Shotten Squishies (High-Damage-Low-Defense-Champions wie ADCs und Mages) post-Stun.
- **3-Item-Mega-R-Fight (~ Minute 22-26):** Sterak's + Trinity + Boots online heißt, Mega Gnar kann durch eine Frontline (die Tanks und Bruiser, die den Fight von vorn öffnen) laufen und R in die Backline (die Carries, die von hinten Schaden machen) verfolgen für einen 2-3-Personen-Stun. Erzwinge hier gruppierte Objective-Fights (Drake/Baron-Contests, bei denen beide Teams gestackt sind).

## Häufige Fehler

- **Mega in der Lane gehen ohne fertigen Fight.** Mega hat keinen Escape (kein Hop-Dash) und bleibt Mega ~15 Sekunden, bevor er zurück zu Mini wird. Wenn dein Jungler nicht kommt und du nicht zu einem Fight committest, halte Rage bei 80-90%, pinge zurück zum Team und lass die Leiste verfallen.
- **R im offenen Feld werfen.** Ohne Wand hinter dem Ziel ist GNAR! nur ein Knockback (ein erzwungener Stoß, der Gegner kurz wegschiebt), der ihre Dashes unterbricht und sonst nichts. Repositioniere immer zuerst; die halbe Sekunde fürs Wand-Ausrichten ist einen Multi-Target-Stun wert.
- **Hop rein statt raus.** Mini E ist dein Escape, nicht dein Engage-Tool in den meisten Matchups. Die einzige Zeit, in der E-rein richtig ist, ist wenn Rage sich füllt und du einen klaren Minion zum Zurückspringen hast.
- **W in der Lane spammen, um den Hyper-Bonus-Schaden zu "erzwingen".** Der Drittschlag-Bonus triggert auf jedem Basic Attack UND jedem Spell. Trade in Mustern aus zwei Fähigkeiten + einer Basic Attack, nicht drei Basic Attacks am Stück, die dich aus der Position drücken.
- **Mid-Fight-Verwandlungen, die du nicht kontrollierst.** Erlittener Schaden füllt auch Rage. Wenn du dich bei 95% Rage zurückziehst, verwandelt dich die nächste Basic Attack auf einen Minion in deiner Jungle ohne Gegner für R in Mega. Entweder commitest du vorher zu einem Fight, oder recall zur Base.

## Fortgeschrittener Tipp

Nutze Hop, um auf **Wards und Trinkets** abzuspringen, wenn deine Wave weg ist. Eine Ward ist das kleine magische Auge, das du auf der Map für Vision platzierst; die einfache gelbe ist das **Stealth Ward**-Trinket deines Supports, und die **Control Ward** ist die pinke Ward, die Gegner platzieren, um Vision zu verweigern. Jede zählt als Einheit, auf der Mini Gnar für den verlängerten zweiten Hop landen kann. Platziere vorab eine Stealth Ward in Richtung des gegnerischen Jungle-Eingangs, dann E darauf, um deine Reichweite um ~400 Einheiten zu erweitern für ein Q-Überraschungsmoment auf einen Counter-Junglinger. Derselbe Trick rettet dich vor Ganks: hop von deiner eigenen Ward in den Tribush (die Drei-Busch-Gruppe nahe jeder Lane), und der Ganker hat keinen Follow-up.
