---
title: "Aphelios Bot Build & Guide — Patch 16.9"
slug: "aphelios-bot"
language: "de"
patch: "16.9"
champion: "aphelios"
role: "bot"
last_updated: "2026-04-29"
description: "Aphelios Bot Lane Guide für League of Legends Patch 16.9: Waffenrotation, Marksman-Core-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein Pro-Tipp."
quick_learn:
  champion_dd_id: "Aphelios"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Marksman / Weapon Swap"
  abilities:
    - key: "P"
      name: "The Hitman and the Seer"
      description: "Aphelios rotiert 5 Lunari-Waffen in einer festen, dann wechselnden Reihenfolge. Zwei werden gleichzeitig geführt (main-hand + off-hand); jede hat begrenzte Munition und erzwingt einen Swap, wenn sie leer ist."
      dd_spell_id: "Aphelios_Passive"
    - key: "Q"
      name: "Weapon Abilities"
      description: "Die Aktive ändert sich mit der main-hand: Langstrecken-Schuss (Calibrum), AoE-Lifesteal-Sprint (Severum), Root auf alle Verlangsamten (Gravitum), Kegel (Infernum), Sentry-Turret (Crescendum)."
      dd_spell_id: "ApheliosCalibrumQ"
    - key: "W"
      name: "Phase"
      description: "Tauscht main-hand und off-hand sofort. Kurzer Cooldown — jeder Cast dreht dein Schadensprofil um (Range, Lifesteal, AoE, Slow, Attack Speed)."
      dd_spell_id: "ApheliosW"
    - key: "E"
      name: "Weapon Queue System"
      description: "Aphelios hat keine echte dritte Ability — dieser Slot zeigt nur die nächste Waffe an, die Alune ihm reicht. Nützlich, um Combos einige Waffen im Voraus zu planen."
      dd_spell_id: "ApheliosE"
    - key: "R"
      name: "Moonlight Vigil"
      description: "Langstrecken-Mondlichtexplosion, die auf getroffenen Champions detoniert. Wendet den main-hand-Effekt an (zusätzliche Calibrum-Mark-Shots, AoE-Auto, AoE-Lifesteal usw.)."
      dd_spell_id: "ApheliosR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "E" }
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
    - { dd_id: "3032", name: "Yun Tal Wildarrows" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "gegen Tank-Frontlines (Sion, Ornn, Malphite): Armor Pen, die mit Bonus-HP des Gegners skaliert"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "gegen viel Heal (Soraka Support, Yuumi, Vladimir, Aatrox): Grievous Wounds halbiert die Heilung"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "wenn Lifesteal und Schild nötig sind: ersetzt The Collector bei 2+ Assassinen auf dir"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "gegen heftigen AP-Burst (Syndra, Veigar, Doppelmagier-Comp): Schild bei niedrigem HP plus Magic Resist"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "gegen blockierendes CC (Malzahar Suppression, R Skarner, R Mordekaiser): Aktiv reinigt das CC"
  base_combo: ["Q", "W", "R", "AA"]
  win_condition: "Erreiche den Two-Item-Spike, dann cycle Calibrum + Gravitum in Fights, um ein Schlüsselziel mit der W-Swap, R und der Q-Root-Combo zu locken, während dein Team den Engage commitet."
  weakness: "Kein Dash, kein Escape, und die falsche Waffe zur falschen Zeit verschenkt einen Fight. Bricht hart ein, wenn er Level 1-3 punished wird, bevor er Ammo und Items stacken kann."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["samira", "kalista", "yasuo"]
      archetype: "Kurzdistanz-Marksmen, die committen müssen"
      reason: "Calibrum (das Gewehr) übertrifft ihre Auto-Attack-Range: zum Traden müssen sie reinkommen, und du bestrafst sie mit dem Q-Mark-Shot. Die W-Swap zu Severum heilt danach den Chip Damage, den sie auf dich gesetzt haben."
    - examples: ["karthus", "seraphine", "heimerdinger"]
      archetype: "Immobile Bot-Lane-Scaler"
      reason: "Gravitum (die Kanone) verlangsamt sie bei jedem Auto, dann rooted das Q alle verlangsamten Targets gleichzeitig. Mit Level-6-R als Follow-up frisst ein immobiles Ziel den vollen Burst, bevor es einen Channel beenden kann."
    - examples: ["jinx", "kog-maw", "twitch"]
      archetype: "Hyper-Scaling-Marksmen mit schwachem Early"
      reason: "Aphelios Level 1-2 mit Calibrum gewinnt jeden Trade gegen jemanden, dessen Lane Phase nur Farmen ist. Setze Druck vor dem 3. Item, damit sie ihren Late-Game-Spike nie erreichen."
  counterpicks:
    - examples: ["draven", "lucian", "tristana"]
      archetype: "Aggressive Early-Game-Marksmen"
      reason: "Ihre Level-1-3-Fenster sind brutal: kurze Cooldowns und hoher Base Damage bestrafen Aphelios, während sein Q 9s Cooldown hat und die Munition begrenzt ist. Er kann nicht zurücktraden, ohne Ammo zu verschenken, die er zum Pushen der Wave braucht."
    - examples: ["leona", "nautilus", "pyke"]
      archetype: "Hard-Engage-Supports"
      reason: "Aphelios hat null Mobilität (kein Dash, kein Blink). Eine CC-Kette vom Support, und er ist tot, bevor er zu Severum W-swappen kann, um zu heilen oder Flash zu burnen. Ihn gegen Engage zu picken = ihn in den Tod picken."
    - examples: ["caitlyn", "senna", "jhin"]
      archetype: "Langdistanz-Poke-Marksmen"
      reason: "Sie poken Aphelios aus Distanzen, die selbst Calibrum nicht beantwortet (Caitlyn Traps + Headshot, Senna Q aus dem Fog, Jhin W Root). Aphelios kann den Abstand nicht schließen, also blutet er HP weg, ohne zurückschlagen zu können."
---

## Überblick

Aphelios ist ein Marksman mit dem theoretisch umfangreichsten Kit in League: 5 verschiedene Waffen, die durch seine Hände rotieren, jede mit eigenem Basic Attack und eigener **Q**-Ability. Du hältst immer nur zwei — eine main-hand (die deine Auto-Attacks und das **Q** bestimmt) und eine off-hand (die periodisch neben den main-hand-Attacks feuert). Jede Waffe hat begrenzte Munition (eine feste Anzahl Schüsse): wenn sie leer ist, wird die Waffe verworfen, und Alune reicht ihm die nächste in der Queue. Die Meisterschaft besteht hauptsächlich darin zu wissen, welche Waffe als Nächstes kommt und welche zwei du im richtigen Moment aktiv haben willst.

Der Game Plan ist, ein fragiles Early Game zu überleben (kein Dash, kein Escape, fummelige Ammo-Verwaltung), bis du zwei Items erreichst, dann zu snowballen (einen frühen Vorsprung in einen größeren verwandeln, indem du mehr Fights gewinnst) durch Skirmishes (kleine Kämpfe von 2-4 Spielern, kleiner als ein voller Teamfight), indem du **Phase (W)** nutzt, um zur Waffe zu wechseln, die die Situation bestraft: **Calibrum** (das Gewehr) für Poke (Chippen der gegnerischen HP aus der Ferne mit Range-Schaden) und Execute (Erledigen von Targets, die schon Low-HP sind), **Severum** (die Sensen-Pistole) für Sustain (Heilen und Überleben in langen Fights), **Gravitum** (die Kanone) für Lockdown (einen Gegner mit CC lange genug festsetzen, um ihn zu töten), **Infernum** (den Flammenwerfer) für Waveclear und Teamfight-AOE (area of effect: Schaden auf einer Zone, nicht auf einem einzelnen Target), **Crescendum** (das Chakram) für Nahkampf-DPS-Spikes (plötzliche Bursts an damage per second).

## Empfohlener Build

**Starting Items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 1 Health Potion. Doran's Blade ist der Standard-Starter für Marksmen: kleiner Attack-Damage-Boost (AD), etwas HP und Lifesteal (du heilst dich um einen Prozentsatz des mit Auto-Attacks angerichteten Schadens). Aphelios braucht jeden Punkt AD, weil seine Waffen Munition verbrauchen.

**Core Items (in Reihenfolge):**

1. ![Yun Tal Wildarrows](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3032.png) **Yun Tal Wildarrows** — erstes Item, der Meta-DPS-Pick. Es gibt früh Crit (Chance, dass ein Auto-Attack zusätzlichen Schaden anrichtet) und einen passiven Bleed auf Attacken (Schaden über die nächsten Sekunden verteilt statt komplett beim Hit), perfekt für die Schnellfeuerwaffen (Crescendum, Infernum).
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — Attack-Speed-Boots (mehr Autos pro Sekunde). Default in fast jeder Aphelios-Game, weil alle seine Waffen von zusätzlichem Attack Speed profitieren.
3. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — Execute unter 5% HP plus Lethality (eine Form von Armor Penetration, die einen Teil der Rüstung des Targets ignoriert, besonders nützlich gegen squishy Targets — Champions mit niedriger Defense wie ADCs und Mages). Passt zu Calibrums Mark-Shots (Calibrums Auto-Attacks setzen eine "Mark" auf den Gegner: ein erneuter Angriff auf das markierte Target gibt Bonus-Schaden von überall auf der Map, auch mit **R**), die Low-HP-Targets schon chunken (einen großen Teil Schaden anrichten).
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — Crit-Damage-Multiplikator; mit zwei bereits fertigen Crit-Items (Yun Tal + Collector oder Yun Tal + RFC) schaltet Infinity Edge 175% Crit Damage frei, und deine Auto-Attacks verdoppeln sich grob im Burst (der Schaden, den du in einem 1-2-Sekunden-Fenster rauspustest).
5. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — Range-Bonus auf den Calibrum-Auto-Attack und auf den ersten energized Schuss (RFC lädt alle paar Sekunden in Bewegung einen "energized" Auto auf — der feuert aus erweiterter Range und zappt das Target). Synergie mit Kiting (rückwärts laufen während du angreifst, Distanz zu Bedrohungen halten).

**Situative Swaps:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — ersetzt Rapid Firecannon, wenn der Gegner Rüstung stackt (Frontline aus Sion, Ornn, Malphite — Frontline = die Tanks/Bruiser, die vorne Schaden absorbieren, während die Carries von hinten schießen).
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — gleicher Slot wie Lord Dominik's, nimm diese Variante, wenn das gegnerische Team viel Heal hat (Soraka, Yuumi, Aatrox, Vladimir): wendet Grievous Wounds an, was die gegnerische Heilung halbiert.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — ersetzt The Collector, wenn du Sustain in einem langen Match brauchst oder wenn das gegnerische Team zwei Assassinen hat, die deine Backline anvisieren (der 7-Sekunden-Schild bei vollen HP kann dich einmal pro Fight retten).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — Late-Slot gegen heftige AP-Burst-Comps (Syndra + Veigar + Annie). Der Schild triggert unter HP-Schwelle — also wenn du unter 35% HP fällst — und absorbiert magischen Schaden.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — Last-Slot-Swap, wenn eine einzige CC-Kette (Malzahar Suppression, R Skarner, R Mordekaiser) jeden Teamfight gegen dich entscheidet.

**Skill Order:** Maxe **Q** zuerst (erhöht den Schaden der Aktiven jeder Waffe), **W** als zweites (schnellerer Swap = mehr Flexibilität pro Sekunde), **E** zuletzt. Setze **R** auf Level 6, 11, 16 wie üblich.

**Runes:** Primärbaum **Precision** (rund um Auto-Attacks gebaut): Keystone **Lethal Tempo** (Bonus-Attack-Speed im Champion-Kampf), dann **Presence of Mind** (Mana-Refund auf Takedowns — relevant, weil das Q Ammo kostet), **Legend: Bloodline** (mehr Lifesteal, der mit Kills stackt), **Coup de Grace** (Bonus-Schaden auf Low-HP-Targets). Sekundärbaum **Resolve** mit **Second Wind** und **Overgrowth** gegen Lanes mit hartem Poke (Caitlyn, Senna), oder **Inspiration** mit **Magical Footwear** und **Cosmic Insight**, wenn du eine passive Lane erwartest.

## Wichtige Matchups

- **Draven:** Härteste Lane auf der Map. Er gewinnt jeden Trade (kurzer Austausch von Auto-Attacks und Abilities) auf Level 1-3 jedes Mal. Bleib hinter deinem Support, last-hitte nur mit Auto-Attacks (verbrenn keine Calibrum-Q-Ammo auf Minions), warte bis Level 6, um den Trade mit der **R** auszugleichen.
- **Caitlyn:** Range-Krieg. Ihre Traps + Headshot poken (chippen deine HP von außerhalb deiner eigenen Range) sogar an Calibrum vorbei. Swap zu **Gravitum** in dem Moment, in dem sie sich einer Trap nähert; der Slow (Movement-Speed-Reduktion) plus dein Q-Root (Effekt, der den Gegner an Ort und Stelle festsetzt, ohne Bewegung oder Dash) negiert ihr Escape-Fenster.
- **Samira:** Sie will dich diven (unter deinen Tower laufen, um dich trotz der Tower-Schüsse zu töten). Halte **Severum** für den Moment, in dem sie in den Melee (Nahkampf-Auto-Attack-Range) eintritt — das AoE-Q heilt dich vom Chip Damage (kleinem aber konstantem Schaden, der HP abnutzt), und das CC deines Supports tötet sie, wenn sie over-commitet (zu weit reingeht und nicht zurückkann).
- **Jhin:** Er poked vor Level 6 mehr, du DPSt nach Level 6 mehr (sein Range-Poke gewinnt im Early, dein anhaltender Schaden gewinnt nach Level 6). Trade nicht Auto gegen Auto in der Lane (ein "Trade" = kurzer Schlagaustausch — sein W-Root und der 4.-Schuss-Crit prägen die Lane); push Level 2 hart (forciere die Wave unter seinen Tower) und mache Recall (zurück zur Base) bei der ersten Yun-Tal-Fertigstellung, um in Führung zurückzukommen.
- **Kalista:** Sie ist squishy und hat kurze Range. Trade Auto-für-Auto mit **Calibrum** main + Severum off-hand; ihre Dash-Kette zwingt sie in deine Range, und der Q-Mark-Shot bestraft sie jedes Mal, wenn sie springt.

## Power Spikes & Siegbedingungen

- **Level 2:** Mit einer zusätzlichen Waffenaktiven online matchst du die meisten ADCs in Trades. Die meisten Aphelios-Games werden dadurch entschieden, wer den Level-2-All-in (ein Fight mit voller Festlegung, in dem du auf den Kill gehst, ohne Rückfallplan) sauber landet.
- **Level 6 mit Calibrum:** Die erste **Moonlight Vigil** mit dem Gewehr in der main-hand feuert zusätzliche Long-Range-Mark-Shots. Wenn die gegnerische Bot Lane unter deinen Tower geshovet ist (ihre Wave wurde nahe an deinen Tower gepusht und versetzt sie in eine verwundbare Lage), ist das **R**+Q-Execute-Fenster vom anderen Bildschirmrand ein gratis Kill für einen aufmerksamen Support.
- **![Yun Tal Wildarrows](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3032.png) Yun Tal Wildarrows fertig (~ Minute 12-14):** Lane Priority dreht sich (du wirst zur Lane, die ihre Position für Hilfe bei Fights anderswo verlassen kann, ohne CS oder HP zu verlieren). Du kannst shoven (deine Wave zum gegnerischen Tower pushen) und Drake kontesten, dein DPS in Skirmishes spiked stark (dein damage per second springt mit diesem Item klar nach oben).
- **3-Item-Spike (Yun Tal + Berserker's + The Collector um Minute 22-25):** Ein "Spike" ist ein klarer Power-Sprung an einem Level- oder Item-Meilenstein. Aphelios ist jetzt der Marksman mit dem höchsten anhaltenden DPS im Spiel. Forciere hier Objektiv-Fights (Objektive = Dragon, Baron, Rift Herald, Towers — neutrale Targets, die Team-Buffs oder Map-Druck geben) und stehe auf maximaler Calibrum-Range, während deine Frontline die Linie hält.

## Häufige Fehler

- **Minions mit Calibrum-Q-Ammo auto-attacken.** Spar die Q-Ammo für Champions. Das Q von Calibrum ist eine deiner wenigen Long-Range-Bedrohungen; sie auf einer Wave für Fast-Push (die Wave so schnell wie möglich in den gegnerischen Tower crashen) zu verbrennen lohnt sich nur, wenn du im selben Back recallst, ansonsten ist der Trade, den du aufgibst, riesig.
- **Vergessen, die nächste Waffe in der Queue zu tracken.** Der **E**-Slot zeigt die nächste Waffe. Check immer vor dem Commit: nach vorne gehen, während du zu **Severum** swappst, wenn **Crescendum** dahinter in der Queue steht, ist okay; das Gleiche mit **Gravitum** auf dem Plan verschenkt das All-in-Fenster (die wenigen Sekunden, in denen du den Kill abschließen kannst).
- **In Teamfights stillstehen.** Aphelios hat keinen Dash. Wenn du zwei Sekunden in Folge auf der gleichen Stelle stehst, löscht dich alles Mobile (Zed, Diana, Camille). Strafe (bewege dich seitwärts während du angreifst) zwischen jedem Auto-Attack — kurze Schritte, aber konstante Bewegung.
- **Die R sofort beim Verfügbarwerden zünden.** Der Wert von Moonlight Vigil hängt komplett davon ab, welche Waffe du beim Cast in der main-hand hast. **R** mit Crescendum auf ein einzelnes Target ist verschwendet; **R** mit Infernum auf 4 gruppierte Gegner ist eine Quadra Kill.
- **Aphelios gegen Hard Engage picken.** Das ist ein Draft-Fehler, kein Gameplay-Fehler — "Engage" meint das Tool eines Champions, einen Fight zu erzwingen (z. B. Leonas Q-Stun, Malzahars R-Suppression). Wenn der Gegner Leona + Malzahar Mid + Hecarim Jungle hat, kommst du nicht dazu, irgendeine Waffe zu nutzen. Kompensiere mit Severum-freundlichen Setups (einem Peeler — einem Support, dessen Job es ist, dich vor Divern zu schützen, wie Lulu oder Janna).

## Fortgeschrittener Tipp

Lerne das W-Cancel-Timing auf **Phase**: einen Swap während eines Calibrum-Mark-Shots zu queuen, lässt dich den Long-Range-Follow-up-Auto mit dem Effekt der neuen Waffe abfeuern (z. B. Swap zu Infernum und der Follow-up wird zu einem AoE-Kegel). Das verwandelt Calibrums Mark-Shot in einen Multi-Target-Burst, den kein anderer Marksman replizieren kann, und ist der einzelne größte mechanische Vorteil, den du gegenüber einem Casual-Aphelios-Spieler hast.
