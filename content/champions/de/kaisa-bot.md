---
title: "Kai'Sa ADC Build & Guide — Patch 16.9"
slug: "kaisa-bot"
language: "de"
patch: "16.9"
champion: "kaisa"
role: "bot"
last_updated: "2026-05-05"
description: "Kai'Sa ADC Bot Lane Guide für Patch 16.9: Plasma-Stacking, hybrider Kraken-Build mit Evolves, Schlüssel-Matchups, Power Spikes, häufige Fehler und ein Pro-Trick."
quick_learn:
  champion_dd_id: "Kaisa"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hybrid"
  abilities:
    - key: "P"
      name: "Second Skin"
      description: "Auto-Attacks stapeln Plasma auf dem Ziel; immobilisierendes Verbündeten-CC fügt Bonus-Stacks hinzu. Items lassen Q/W/E zudem evolven, sobald Kai'Sa versteckte AD/AP/Attack-Speed-Schwellen erreicht."
      dd_spell_id: "Kaisa_Passive"
    - key: "Q"
      name: "Icathian Rain"
      description: "Feuert 6 Raketen, die sich auf nahe Gegner aufteilen (Reichweite 600). Wiederholte Treffer aufs gleiche Ziel machen reduzierten Schaden. Evolved bei ~100 Bonus-AD: 12 Raketen statt 6."
      dd_spell_id: "KaisaQ"
    - key: "W"
      name: "Void Seeker"
      description: "Lineare Langstrecken-Rakete (3000 Einheiten). Markiert den ersten Gegner mit 2 Plasma-Stacks und enthüllt ihn 4s. Evolved bei ~100 AP: 4 Stacks und 50% Cooldown-Refund bei Champion-Treffer."
      dd_spell_id: "KaisaW"
    - key: "E"
      name: "Supercharge"
      description: "Channel von ~1.5s mit Bonus Move Speed und Ghosted (geht durch Einheiten), danach 4s erhöhte Attack Speed. Auto-Attacks senken den Cooldown. Evolved bei 60% Bonus-Attack-Speed: kurze Unsichtbarkeit."
      dd_spell_id: "KaisaE"
    - key: "R"
      name: "Killer Instinct"
      description: "Dash neben einen gegnerischen Champion mit 5 Plasma-Stacks (oder voll ruptured durch Plasma). Gibt bei Ankunft einen Shield. Wird zum Finishen eines bereits chip-killed Ziels genutzt, nicht zum Engage."
      dd_spell_id: "KaisaR"
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
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3124", name: "Guinsoo's Rageblade" }
    - { dd_id: "3031", name: "Infinity Edge" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "gegen HP/Armor-Stacker (Cho'Gath, Sion, Malphite, Ornn): prozentuale Armor-Pen ignoriert einen festen Anteil der Rüstung"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "gegen Comps mit gestapeltem Healing (Soraka, Vladimir, Aatrox): Grievous Wounds halbiert die gegnerische Heilung"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "gegen heftigen AP-Burst (Syndra, Veigar, Brand Support): Magic Resist + Schadens-Shield unter 30% HP"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "gegen langes Poke-Damage (Ezreal, Caitlyn, Xerath): Lifesteal heilt mid-fight, Overheal speichert HP als Shield"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "gegen Assassinen oder Diver (Zed, Kha'Zix, Talon): die Ghost-Passive lässt dich beim Kiten durch Einheiten laufen"
  base_combo: ["W", "AA", "Q", "E", "AA"]
  win_condition: "Stack Plasma auf das Backline-Ziel mit W und Auto-Attacks, R-dash drauf bei 5 Stacks und finishe mit Q + verstärkten AAs, während E das Attack-Speed-Fenster öffnet."
  weakness: "R braucht Plasma-Stacks am Ziel — ohne treffende W oder Verbündeten-CC kein Engage. Squishy ohne Dash vor R; falsches E-Timing frisst den vollen Burst vor der Unsichtbarkeit."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 9923
      name: "Hail of Blades"
      icon_path: "perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png"
    primary_slots:
      - { dd_id: 8139, name: "Taste of Blood", icon_path: "perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination + Hail of Blades: 3 super schnelle Auto-Attacks direkt nach dem R-Dash laden Plasma-Stacks und den True-Damage-Proc von Kraken Slayer vor. Taste of Blood gibt Lane-Sustain, Sixth Sense enthüllt Wards, Ultimate Hunter senkt R-Cooldown."
    secondary_rationale: "Precision sekundär: Triumph heilt 12% fehlende HP pro Takedown (Kill oder Assist) und macht die R-into-Fight zum sicheren Escape. Coup de Grace gibt 8% Schaden gegen Gegner unter 40% HP."
    secondary_alternative: "Gegen heftige Poke-Lanes (Caitlyn + Lux, Ezreal + Karma) swap Precision auf Resolve mit Second Wind (Regen bei Champion-Schaden) und Overgrowth (Bonus-HP pro absorbiertem Minion) für Sustain."
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "ashe", "sivir"]
      archetype: "Immobile Marksmen ohne Dash"
      reason: "Sobald Kai'Sa mit 5 Plasma-Stacks in R-Reichweite ist, können immobile ADCs dem Dash + Q-Burst nicht entkommen. Sie müssen den ersten All-In (voller Trade mit Kill-Ziel) ohne jedes Repositioning-Tool überleben."
    - examples: ["senna", "kog-maw"]
      archetype: "Late-Game-Scaling-Carries ohne Escape"
      reason: "W hat 3000 Einheiten Reichweite und enthüllt sie 4s — Kai'Sa poked sie aus der Wave heraus von außerhalb ihrer Threat Range, dann R sobald Plasma das Ziel ruptured."
    - examples: ["sona", "soraka", "yuumi"]
      archetype: "Squishy Enchanter-Supports ohne Hard-CC"
      reason: "Diese Supports haben kein Stun oder Knock-up zum Peelen eines Backline-Dives. Kai'Sa landet R auf dem ADC und der Support hat nichts, um den All-In zu unterbrechen, sobald die Unsichtbarkeit der evolved E aktiv ist."
  counterpicks:
    - examples: ["draven", "lucian"]
      archetype: "Lane-Bullies mit stärkerem Early Auto-Attack-Damage"
      reason: "Beide out-traden Kai'Sa auf den Leveln 1-3 vor ihrer Q-Evolve-Schwelle. Dravens verstärkte Axes und Lucians Double-Shot-Passive gewinnen jedes kurze Trade-Fenster, bevor Kai'Sa skaliert."
    - examples: ["leona", "nautilus", "pyke"]
      archetype: "Hard-Engage-Supports mit Point-and-Click-CC"
      reason: "Kai'Sa hat keinen Dash vor R, und R braucht ein Ziel mit Plasma. Ein Leona-E oder Nautilus-Q lockt sie mid-lane fest, bevor sie überhaupt einen Plasma stacken kann — die Chain-CC tötet sie, bevor die Unsichtbarkeit der evolved E online ist."
    - examples: ["vayne", "twitch"]
      archetype: "Late-Game Hyper-Scaler, die Kai'Sa post-3-Items im DPS überholen"
      reason: "Vaynes True Damage auf der W und Twitchs Expunge ramp stärker als Kai'Sas hybrides Scaling, sobald beide Teams 3 Items haben. Kai'Sa muss vor Minute 30 closen, sonst sinkt ihr relativer Damage."
---

## Überblick

Kai'Sa ist ein hybrider Marksman: eine Championin, die gleichzeitig mit AD (Auto-Attack-Schaden) und AP (Ability-Schaden) skaliert, statt nur eine Stat zu stacken. Sie ist die einzige ADC (Attack Damage Carry: ranged Auto-Attacker, der im Late zur Hauptschadensquelle des Teams wird), deren Abilities sich buchstäblich selbst upgraden, sobald man versteckte Item-Schwellen überschreitet: 100 Bonus-AD evolved Q, 100 AP evolved W, 60% Bonus-Attack-Speed evolved E. Ihr Build-Pfad ist wichtiger als bei jedem anderen Marksman — falsche Reihenfolge bedeutet, dass ein Evolve nie ausgelöst wird, und eine Kai'Sa ohne evolved E (keine Unsichtbarkeit auf dem Dash) ist nur eine halbe Champion.

Ihr Game Plan ist ein Stack-Puzzle: jeder Auto-Attack legt Plasma-Stacks auf das Ziel, und in dem Moment, in dem das Ziel 5 Stacks erreicht (oder voll von Plasma ruptured wird), schaltet sich ihre **R** als Langstrecken-Dash auf das Ziel frei. Support-CC (Crowd Control: Stuns, Slows, Roots, die den Gegner an Ort und Stelle festhalten) beschleunigt den Counter kostenlos. In Lane poked sie (Langstrecken-Chip-Damage, um HP abzubauen, ohne sich auf einen Fight festzulegen) mit **W** auf 3000 Einheiten; in Teamfights (5v5-Kämpfe um Objectives wie Drake oder Baron — neutrale Monster, die Team-Buffs geben) bleibt sie auf maximaler AA-Reichweite, bis ein Backline-Ziel chip-killed ist, und dasht dann mit **R** + Unsichtbarkeit der evolved **E** rein, um aufzuräumen. Das Skill Ceiling sitzt in der **R**-Zielwahl.

## Empfohlener Build

**Starting Items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** (etwas AD + Lifesteal — heilt einen Anteil des verursachten Schadens) + 1 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**.

**Core Items (in Reihenfolge):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — erster Power Spike (der Moment, in dem ein Champion nach Item-Fertigstellung spürbar stärker wird). Gibt AD + Attack Speed; die Bring-It-Down-Passive macht Bonus-True-Damage bei jedem dritten Hit, was den Damage im kurzen R-into-Fight-Burst-Fenster nach vorne lädt.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — Attack-Speed-Boots. Sie schieben dich Richtung der 60%-Bonus-Attack-Speed-Schwelle, die für das E-Evolve nötig ist.
3. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — fügt jedem Auto-Attack zwei Seitenpfeile hinzu und stackt mehr Attack Speed. Die Seitenpfeile applyen Plasma auf nahe Gegner, also stackt Kai'Sa im Teamfight Plasma auf das gesamte gegnerische Team, während sie nur ein Ziel AA-t. Dieses Item komplettiert das E-Evolve.
4. ![Guinsoo's Rageblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3124.png) **Guinsoo's Rageblade** — gibt AD, AP und Attack Speed in einem einzigen Slot. Der billigste Weg, die 100-AP-Schwelle zu überschreiten, die W evolved (Cooldown-Refund + 4 Plasma-Stacks pro Cast). Phantom Hit alle drei AAs proct mehr On-Hit-Damage.
5. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — Late-Game Crit-Multiplikator (Critical Strike: Chance, dass ein Auto-Attack ~175% Schaden macht). Kombiniert mit den zwei Extra-Projektilen von Runaan's rollt jeder Auto-Attack 3 Crit-Chancen gleichzeitig.

**Situational Items:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — gegen HP/Armor-Stacker (Cho'Gath, Sion, Malphite, Ornn). Ersetze ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** als 5. Item, wenn das gegnerische Team 2+ Tanks hat.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — gegen Comps mit gestapeltem Healing (Soraka, Vladimir, Aatrox). Applyt Grievous Wounds (Statuseffekt, der die gegnerische Heilung halbiert).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — gegen heftigen AP-Burst (Syndra, Veigar, Brand Support — ein Burst-Mage löscht dich in 1-2 Sekunden mit einem Combo). Magic Resist + Schadens-Shield unter 30% HP kauft die zweite R, die du zum Escape brauchst.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — gegen heftiges Poke. Lifesteal heilt mid-fight; bei Overheal speichert er HP als temporären Shield.
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — gegen Assassinen oder Diver (Zed, Kha'Zix, Talon — Champions, die für Backline-Dives designt sind). Seine Ghost-Passive lässt dich beim Kiten (rückwärts laufen während des Attackierens) durch gegnerische Minions und Champions laufen.

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** ist die einzige korrekte Wahl. Attack Speed füttert direkt das E-Evolve und den Q-Multi-Missile-DPS während der R-Combos.

**Skill Order:** Maxe **Q** zuerst (Haupt-DPS, größtes Evolve-Payoff). Maxe **E** als zweites (mehr Cooldown Reduction und längeres Attack-Speed-Fenster). Maxe **W** zuletzt (nur Utility — lange Reichweite + Plasma-Stacks, aber schlechtester Base-Damage pro Skill-Punkt). Nimm **R** auf den Leveln 6, 11, 16.

**Runes:** Primary Tree **Domination** (der Burst-AA-Tree) mit **Hail of Blades** (3 super schnelle Auto-Attacks, sobald du anfängst, einen Champion zu AA-en), **Taste of Blood** (heilt 18-30 HP beim Schaden an einem Champion alle ~20s), **Sixth Sense** (ein Wallhack-Ping, der alle ~75s eine gegnerische Ward enthüllt), **Ultimate Hunter** (senkt R-Cooldown um bis zu 25% mit Takedowns). Secondary Tree **Precision** mit **Triumph** (heilt auf Takedown — Kill oder Assist) und **Coup de Grace** (8% Bonus-Schaden gegen Gegner unter 40% HP).

## Wichtige Matchups

- **Caitlyn:** Out-ranged Kai'Sa hart auf Level 1 (650 AA gegen 525). Bleib hinter deiner Minion-Linie und tritt nur vor, wenn sie eine Trap setzt (sie ist beim Setzen animation-locked). Power-farme sicher (konzentriere dich nur aufs Minion-Gold ohne Risiken), bis ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** komplett ist; danach suche Cross-Map-Picks mit W, sobald du mit R reindashen kannst.
- **Draven:** Verliert den AA-Krieg direkt — seine Q-Axes machen pro AA viel mehr Schaden als dein Basic. Vermeide 1-für-1-Trades; commit nur, wenn seine Axes auf den Boden fallen (er verliert sie auf einem 2.5s-Timer). Halte **W** als Poke-Tool, bis ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** online ist.
- **Lucian:** Verliert gegen Kai'Sa post-6, bullt sie aber auf den Leveln 2-5 mit Double-Shot-Passive. Dodge sein **Q** durch Minions, halte **E** als Panik-Disengage (Ability, die den vollen Trade des Gegners bricht). Halte Lane-Priority durch Farming unter Turm bis Level 6, dann suche All-In bei seinem nächsten Fehler.
- **Vayne:** Kai'Sa gewinnt die frühe Lane (Vayne ist bis zu 3 Items quasi Melee). Push die Wave (schick deine Minions Richtung ihres Turms), wann immer du kannst, harasse (Chip-Damage, um ihre HP abzubauen) mit **W** bei jedem Cooldown. Nach Minute 25 skaliert sie stärker, also closer das Spiel im Mid-Game oder es kippt zu ihren Gunsten.
- **Jhin:** Langstrecken-Poke-Matchup. Sein **W** ist ein 3550-Einheiten-Slow-Root, der dein Dodge ignoriert, wenn er zuerst einen Minion trifft. Bleib hinter deiner vorderen Minion-Linie und trade nie während seines Reload-Fensters — er ist mit vollem Magazin am stärksten und in den 2.5s nach seinem 4. Schuss am schwächsten.

## Power Spikes & Siegbedingungen

- **Level 6:** Die erste **R** schaltet Pick-Versuche frei (einen einzelnen Gegner außerhalb eines Teamfights eliminieren) auf chip-killed Lane-Targets. Lande **W** + 2 AAs auf den gegnerischen ADC, dann dash mit **R** rein, sobald er hochläuft, um zu last-hitten (Auto-Attack auf den letzten Hit eines Minions).
- **![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer fertig (~ Minute 12-14):** Lane-Priority kippt. Du kannst mit Q shoven (die Wave schnell pushen) und dann roamen (Lane verlassen, um Verbündeten zu helfen) für Cross-Map-Plays auf Drake oder Mid-Skirmishes (kleine 2-3-Mann-Kämpfe in River oder Jungle).
- **Q-Evolve (~ Minute 22-24, nach ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer + ![Guinsoo's Rageblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3124.png) Guinsoo's Rageblade):** Q feuert jetzt 12 statt 6 Raketen — Single-Target-Burst auf Champions verdoppelt sich grob. Erzwinge Teamfights bei jedem Objective.
- **E-Evolve (Berserker's + Runaan's + Guinsoo's komplett):** E gibt jetzt während des Channels kurze Unsichtbarkeit. Der Unterschied zwischen mit R reinzudashen und sofort zu sterben, und mit R reinzudashen und die Kill zu holen — die Unsichtbarkeit macht dich für ~0.5s nach dem Dash untargetable, lang genug, um Follow-up-CC zu dodgen.

## Häufige Fehler

- **R werfen ohne Plasma-Stacks bereit.** R braucht ein Ziel mit 5 Plasma-Stacks. Wenn du R auf einem Ziel mit 0-2 Stacks drückst, macht der Spell nichts und geht in vollen Cooldown. Immer erst W-dann-AAs, beobachte den Plasma-Indikator über der HP-Leiste des Ziels, dann commit R.
- **Mit 100% HP ins gegnerische Team R-en.** R ist ein Finisher, kein Engage. Der Shield von R ist klein (~110 + 25% Bonus-HP) und hält 2s — du stirbst sofort, wenn die gegnerische Frontline noch steht. Warte auf mindestens eine dieser Bedingungen: Ziel unter 40% HP, gegnerisches CC im Cooldown, oder dein Team schon auf ihnen drauf.
- **Wave overpushen ohne Vision.** Kai'Sa hat keinen eingebauten Escape, bis E ab Minute 22+ evolved. Wenn du über den Mid-River pushst, ohne dass dein Support Tribush (kleine Geländestücke, die Sicht blocken) und River wardet, killt dich der gegnerische Jungler kostenlos.
- **![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) Berserker's Greaves zugunsten tankigerer Boots skippen.** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** wirken gegen ein AD-lastiges Team verlockend, verzögern aber die 60%-Attack-Speed-Schwelle, die E evolved. Kein Evolve = keine Unsichtbarkeit = deine R ist ein Todesurteil.
- **E für offensiven Engage aufsparen.** Der Hauptwert von E ist das kurze Ghost (geht durch Einheiten) + Attack-Speed-Fenster im Fight. Drücke E **nach** R, nicht davor — die Unsichtbarkeit der evolved E setzt am Anfang des Channels ein, also verschwendet ein Cast aus sicherer Position die Immunitäts-Frames.

## Fortgeschrittener Tipp

Der **Flash R**-Finisher funktioniert genau umgekehrt zu dem, wie Kai'Sa normalerweise gespielt wird. Wenn ein gegnerischer ADC mit niedrigem HP in den Fog of War (die Map-Bereiche, die du gerade nicht sehen kannst) flüchtet und deine **R** dich aus der Position dashen würde, **Flash** (Summoner-Spell, der dich 400 Einheiten in eine gewählte Richtung teleportiert) zuerst auf ihn zu, um in R-Reichweite zu kommen, dann sofort R. Verbrennt Flash, verwandelt aber einen fast geglückten Escape in einen garantierten Kill auf hohen Rängen. Trick: Buffer den R-Cast 0.1s nach Flash, indem du den R-Button gedrückt hältst — Leagues Input-Buffer feuert R genau in dem Moment ab, in dem Flash landet, sodass der Gegner den Dash nicht kommen sieht.
