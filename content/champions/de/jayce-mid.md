---
title: "Jayce Mid Build & Guide — Patch 16.9"
slug: "jayce-mid"
language: "de"
patch: "16.9"
champion: "jayce"
role: "mid"
last_updated: "2026-05-04"
description: "Jayce Mid Lane Guide für League of Legends Patch 16.9: Manamune-Rush, Weapon-Swap-Combos, wichtige Matchups, Power Spikes, häufige Fehler und ein fortgeschrittener Tipp."
quick_learn:
  champion_dd_id: "Jayce"
  difficulty: 4
  damage_type: "mixed"
  champion_class: "Lane Bully / Skirmisher"
  abilities:
    - key: "P"
      name: "Hextech Capacitor"
      description: "Jeder Weapon Swap (R) gibt Jayce einen kurzen Movement-Speed-Burst und lässt ihn kurz die Unit-Kollision ignorieren."
      dd_spell_id: "Jayce_Passive"
    - key: "Q"
      name: "To the Skies! / Shock Blast"
      description: "Hammer: springt auf das Ziel, fügt physischen Schaden zu und verlangsamt umliegende Gegner. Cannon: feuert einen langreichweitigen AOE-Skillshot — das Hauptpoke-Tool in Mid."
      dd_spell_id: "JayceToTheSkies"
    - key: "W"
      name: "Lightning Field / Hyper Charge"
      description: "Hammer: passive Mana auf Auto, aktiv Schadensaura um Jayce. Cannon: max Attack Speed auf den nächsten 3 Angriffen — Auto-Burst-Fenster im All-in."
      dd_spell_id: "JayceStaticField"
    - key: "E"
      name: "Thundering Blow / Acceleration Gate"
      description: "Hammer: kurzer Knockback mit %-Max-HP-Magieschaden. Cannon: stellt ein Gate, das Verbündete beschleunigt und ein Q (Shock Blast) durch das Gate verstärkt — das Standard-Mid-Setup."
      dd_spell_id: "JayceThunderingBlow"
    - key: "R"
      name: "Mercury Cannon / Mercury Hammer"
      description: "Stance Swap (Cooldown 6s). Wechselt zwischen Hammer-Nahkampf (Engage, Sustain, Knockback) und Cannon-Distanz (Poke, AOE-Waveclear). Der erste Angriff nach Wechsel auf Cannon shreddet Armor und Magic Resist."
      dd_spell_id: "JayceStanceHtG"
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
    - { dd_id: "3004", name: "Manamune" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6697", name: "Hubris" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "gegen AP-Mid-Laner (Annie, Veigar, Syndra): magic shield blockt den Burst und gibt AD"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "gegen Single-Target-Hard-CC (Ahri Charm, Lissandra R, Sylas E): Spellshield blockt das Lockdown-Spell"
    - dd_id: "6698"
      name: "Profane Hydra"
      against: "gegen gruppierte 5v5-Comps mit gestapelter Frontline: AOE trifft die Backline durch die Front"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap von Plated Steelcaps bei 3+ AP/CC-Threats; Tenacity verkürzt Stun- und Slow-Dauer"
  base_combo: ["E", "Q", "R", "Q", "AA", "E"]
  win_condition: "Stack Tear (Manamune) mit Cannon-Q-Wave-Poke, erreiche den Muramana-Spike bei Minute 14, dann snipe schwach gepanzerte Ziele mit E-Gate-Q. Roam Sidelanes sobald R Rank 2 ist, um den Vorsprung umzumünzen."
  weakness: "Mana hungry vor Manamune: ein verfehltes Q verschwendet fast den ganzen Trade. Mobile Assassinen schließen die Cannon-Q-Range innerhalb der Cast Window. Fällt im Late ab gegen gestapelte Magic Resist auf AP-heavy Teams."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Jayces 3-Hit-Trade (Cannon Q + AA + Hammer Q-AA-E) procct Press the Attack für +8% Schaden und macht Cannon-Poke ab Minute 6 zur Kill-Threat. Triumph stellt HP auf Takedowns wieder her; Legend: Alacrity capt AS in W (Hyper Charge); Coup de Grace +8% unter 40% HP."
    secondary_rationale: "Manaflow Band stackt schnell auf Cannon-Q-Wave-Poke für permanente +50 Mana pro Stack. Transcendence Level 5 gibt Ability Haste, das mit Manamune harmoniert und das R-Weapon-Swap-Fenster verkürzt."
    secondary_alternative: "Gegen Assassinen-Comps (Zed mid + Kha'Zix jungle), swap Sorcery auf Resolve mit Bone Plating (Schadensreduktion auf den ersten 3 Hits) und Second Wind (passive HP-Regen unter 50%). Tauscht Early-Scaling gegen Survival im Burst-Fenster vor Edge of Night."
matchup_draft:
  pick_into:
    - examples: ["veigar", "anivia", "annie"]
      archetype: "Immobile Mid-Lane-Mages ohne Dash"
      reason: "Sie können mit der Cannon-Q-Range vor Level 6 nicht interagieren. Veigar braucht E (Event Horizon), um sein Q-Poke zu setupen, aber Jayces E-Gate verstärkt dein Q, bevor er die Combo zu Ende bringt. Bei 50% HP swap Hammer und one-shot durch ihre Cast Time hindurch."
    - examples: ["akali", "yone"]
      archetype: "Melee-Skirmisher ohne Range-Poke-Tools"
      reason: "Cannon Q outranged Akalis E (Shuriken Flip) und Yones Q-Wave; beide müssen ins Melee-Fenster commiten, um Schaden zu machen. Hammer-E-Knockback negiert ihre Dash-Chains, und der Cannon-Stance-Shred öffnet Armor für Follow-up-Gank-Kills."
  counterpicks:
    - examples: ["zed", "fizz"]
      archetype: "Mobile Assassinen mit mehreren Gap-Closern"
      reason: "Zed W (Living Shadow) und Fizz E (Playful/Trickster) schließen die Cannon-Q-Range innerhalb der Cast Window. In Hammer-Range mit aktiver R bursten sie Jayce, bevor er eine Hammer-Q-W-E-Combo beendet. Edge of Night hilft, kann aber nicht retten, wenn der Gap-Close zuerst landet."
    - examples: ["xerath", "vel-koz"]
      archetype: "Long-Range-Artillery-Mages"
      reason: "Sie outrangen Cannon Q. Xeraths Q (Arcanopulse) und Vel'Koz Q (Plasma Fission) treffen auf Distanzen, die Jayce nicht matchen kann, ohne in ihre Full-Combo zu laufen. Jeder Wave-Fight blutet Jayces HP weg, ohne All-in-Fenster zurück."
    - examples: ["twisted-fate", "galio"]
      archetype: "Globale / Cross-Map-Roamer"
      reason: "Jayce roamt langsam ohne Stance-Synergie. Twisted Fates R (Destiny) flippt eine Sidelane in 8 Sekunden; Galios R (Hero's Entrance) landet, wo Jayce nicht folgen kann. Das 1v1 in Mid mag eben sein, aber das Macro-Game blutet Objectives anderswo."
---

## Überblick

Jayce mid ist der kanonische **Lane Bully** — ein Champion, der den gegnerischen Mid-Laner mit anhaltendem Poke unter Druck setzt, bevor dieser scalen kann. Er ist ein Ranged-Melee-Hybrid, der early mit einem langreichweitigen AOE-Skillshot Q (area-of-effect, Flächenschaden) in **Cannon Stance** gewinnt und Ziele mit einer Leap-Q + Knockback-E Combo in **Hammer Stance** finishet. Das R-Toggle hat 6 Sekunden Cooldown, und der erste Angriff nach Wechsel auf Cannon shreddet Armor und Magic Resist des Ziels — der Auslöser für jeden All-in (vollständiger Trade-Commitment, bis ein Champion stirbt).

Der Mid-Lane-Plan teilt sich in drei Phasen. Vor Level 6 stackst du Cannon-Q-Poke durch die Wave (das Projektil pierct Minions); das Ziel ist, den Gegner von 100% auf 50% HP zu bringen, ohne Mana zu verschwenden. Bei 6 wird der Cannon-zu-Hammer-All-in zur Kill-Threat: setze **E** (Acceleration Gate) auf ihn, feuere **Q** (Shock Blast) durch für verstärkten Schaden, swap auf Hammer mit **R**, springe mit **Q**, setze **W** für die Aura, und knockback mit **E** Richtung deinem Turm. Nach Manamune (~Minute 14) one-shot dein Cannon Q squishy Waves und du fängst an, Sidelanes zu roamen, um den Early-Lead in einen globalen Tempo-Vorteil umzuwandeln.

## Empfohlener Build

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Vermeide gierige Starts wie ![Tear of the Goddess](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3070.png) **Tear of the Goddess** (Vorgänger von Manamune): du brauchst AD und Lifesteal von Doran's Blade, um die ersten drei Minuten gegen einen Mid-Laner zu überleben, der deine Range matcht.

**Core items (in Reihenfolge):**

1. ![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) **Manamune** — erstes Rush-Item. Stackt während Cannon-Q-Wave-Poke. Das Awakening zu ![Muramana](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3042.png) **Muramana** bei vollen Stacks fügt Bonus-Schaden auf jedem Q, AA und W-Aura-Tick hinzu — der größte AD-Spike in Jayces Build.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — Boots gegen eine AD-Lane (Yasuo, Zed, Akshan). Wechsel zu ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** gegen gestapeltes AP/CC.
3. ![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) **Hubris** — Lethality (Wert, der einen Fixanteil der gegnerischen Armor ignoriert) plus Takedown-Stack-Passive (Eminence). Kombiniert mit Muramana wird dein AD-Scaling auf jedem Roam brutal.
4. ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — Lethality und Slow on Damage. Der Slow auf Cannon-Q-Treffer macht Flash-Gegner zu Hammer-Q-Catch-Targets.

**Situational items:**

- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — gegen AP-Mid-Laner (Annie, Veigar, Syndra). Magic Shield blockt die Burst-Combo und gibt AD.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — gegen Single-Target-Hard-CC (Ahri Charm, Lissandra R, Sylas E). Der Spellshield lädt sich außerhalb des Kampfs auf und blockt die nächste Lockdown-Ability.
- ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — gegen gruppierte 5v5-Compositions mit gestapelter **Frontline** (Tanks/Bruiser, die den Fight öffnen). Die AOE-Active trifft die **Back Line** (Carries, die von hinten Schaden machen) durch die Front und erstattet Cooldown bei Takedowns.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — Wechsel von Plated Steelcaps bei 3+ AP- oder CC-Threats im Gegnerteam.

**Boots:** Plated Steelcaps standardmäßig. Mercury's Treads gegen schweren Magic Damage oder Chain CC.

**Skill order:** Maxe **Q** zuerst (Hauptschaden in beiden Stances), **E** als zweites (Knockback für Execute, Gate für Poke-Verstärkung), **W** zuletzt. Setze **R** auf Level 6, 11, 16. Hinweis: nimm **E** auf Level 2 (nicht W) für Kill-Pressure mit Acceleration-Gate-plus-Cannon-Q-Combo.

**Runes:** Primär **Precision** mit **Press the Attack**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Sekundär **Sorcery** mit **Manaflow Band** und **Transcendence**. Gegen Assassinen-Comps swap Sekundär auf **Resolve** mit **Bone Plating** + **Second Wind**.

## Wichtige Matchups

- **Yasuo / Yone:** Sie Wind-Wallen dein Cannon Q. Positioniere dich so, dass dein Q aus einem Flankenwinkel kommt, der sie zwingt, von ihrer Wave wegzuschauen; sie können nicht wallen, was sie nicht rechtzeitig sehen. Halte Q für Wallcooldown, dann chain E-Gate-Q.
- **Zed:** Halte ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** ab Minute 12 jederzeit geladen; blockt seinen R-Finisher (Death Mark). Vor 6 outpoket du ihn. Nach 6 dreht sich die Lane: kreuze die Wave nicht, wenn seine R up ist.
- **Ahri:** Even Matchup, entschieden durch Q-Timing. Ihre E (Charm) telegraphiert sich aus der Distanz — sidestepe hinter einen Minion, bevor du dein Cannon Q feuerst. Verfehlt sie Charm, gehört dir die Lane für 9 Sekunden.
- **Annie / Veigar:** Free-Poke-Matchup vor Level 6. Keine Mobility; dein Cannon-Q-+-E-Combo blutet sie off-creep weg. Beobachte ihren Stun-Cooldown (Annie Passive, Veigar E) vor dem All-in: ihr Stun negiert deine Hammer-Q-Knockback-Animation.
- **Twisted Fate:** Du outpokst ihn vor 6, verlierst aber das Macro-Game (das strategische Map-Game jenseits deiner Lane). Wenn seine R up geht, ping mid mia (missing in action — der Gegner hat die Lane verlassen) und backe früh; deine Lane Priority ist weniger wert als seine Cross-Map-Gold-Card.

## Power Spikes & Siegbedingungen

- **Level 2 (Q + E):** Cannon Q + Acceleration Gate + AA ist ein 30%-HP-Trade auf den meisten Squishies. Die Gate-Platzierung dient auch als Fluchtweg — drop sie hinter dich Richtung Turm, wenn der Gegner committet.
- **Level 6 (erste R):** Beide Stances unlocken voll. Der Cannon-zu-Hammer-All-in wird bei 45% HP zur Kill-Threat statt zum Chunk-Trade.
- **![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) Manamune fertig + Stacking (~ Minute 12-14):** Sobald es zu Muramana awakened, schlägt jedes Q ~15% härter und deine AA-Fire-Rate spiked. Hier spiket Jayce Mid am stärksten und sollte Sidelanes roamen.
- **![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) Hubris + Takedown-Stacks (~ Minute 19-22):** Eminence-Stacks kombinieren mit Muramana zu absurden AD-Werten. Erzwinge an diesem Punkt einen Fight oder pushe für einen Inhibitor.

## Häufige Fehler

- **Cannon Q ohne Acceleration Gate werfen.** Nacktes Q ist mana-teuer und leicht zu dodgen. Drop **E** (Acceleration Gate) zuerst auf den Gegner; das Gate verstärkt das Q, das es passiert (mehr Range, mehr Schaden, größere AOE) und der kleine Delay zwingt den Gegner, eine Bewegungsrichtung festzulegen, bevor du feuerst.
- **Manamune zu langsam stacken.** Cannon Q muss einen Champion treffen oder eine Wave killen, um zu stacken; verfehlte Qs stacken nicht. Plane deinen Wave-Poke so, dass jedes Q mindestens drei Minions trifft, für schnellen Tear-Ramp.
- **Den R-Cannon-Shred auf Minions verbrennen.** Beim Wechsel von Hammer auf Cannon (R) shreddet die erste AA Armor und Magic Resist. Diese Auto auf einen Melee-Minion zu setzen, verschwendet den Trigger; halte ihn jedes Mal für einen gegnerischen Champion.
- **Roamen ohne R-Cooldown-Awareness.** R hat 6 Sekunden Swap-Cooldown, der gleichzeitig dein einziges Mobility-Tool ist (passiver Move-Speed-Burst auf Swap). Roame mit R off Cooldown, um aus einem Counter-Roam disengagen zu können; ohne R in einen Fight zu kommen, ist Commit ohne Ausweg.
- **Hammer-W-Mana-Sustain vergessen.** In langen Cannon-Poke-Belagerungen swap zu Hammer für 2-3 Autos, um Mana via W-Passive (Mana on Hit) aufzufüllen. Das auszulassen leert den Pool und erzwingt einen frühen Back.

## Fortgeschrittener Tipp

Übe das **Gate-Q-Timing-Flip** gegen bewegte Ziele. Die meisten Jayce-Spieler droppen das Acceleration Gate dort, wo der Gegner gerade steht, und feuern dann Q durch. Pros droppen das Gate stattdessen dort, wo der Gegner in 0,5 Sekunden *sein wird* (Cast Time des Gates plus Q-Animation) — meist Richtung Wave, weil der Gegner zum Last-Hit laufen muss. Das verstärkte Q landet auf der vorhergesagten Position, nicht auf der vergangenen. Trainiere das im Practice Tool, indem du eine Target Dummy auf Move-Toggle stellst und die Lead Distance lernst, bis sie Muscle Memory wird.
