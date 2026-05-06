---
title: "Ahri Mid Build & Guide — Patch 16.9"
slug: "ahri-mid"
language: "de"
patch: "16.9"
champion: "ahri"
role: "mid"
last_updated: "2026-04-29"
description: "Ahri Mid Lane Guide für League of Legends Patch 16.9: Starter-Items, Mage/Assassin-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein Tipp."
quick_learn:
  champion_dd_id: "Ahri"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Assassin"
  abilities:
    - key: "P"
      name: "Essence Theft"
      description: "Heilt nach dem Töten von 9 Minions oder Jungle-Monstern; größere Heilung bei Champion-Takedowns. Lane-Sustain, der mit dem Farm skaliert."
      dd_spell_id: "Ahri_Passive"
    - key: "Q"
      name: "Orb of Deception"
      description: "Linearer Skillshot, der eine Kugel wirft und zurückzieht. Magischer Schaden auf dem Hinweg, true damage auf dem Rückweg. Hauptwerkzeug für Waveclear und Poke."
      dd_spell_id: "AhriQ"
    - key: "W"
      name: "Fox-Fire"
      description: "Setzt 3 Fox-Fires frei, die nahe Gegner automatisch anvisieren; erster Treffer voller Schaden, weitere reduziert. Gibt zudem einen kurzen Move-Speed-Boost."
      dd_spell_id: "AhriW"
    - key: "E"
      name: "Charm"
      description: "Skillshot-Kuss, der den ersten getroffenen Gegner bezaubert — er läuft wehrlos auf Ahri zu und nimmt Schaden. Setup-Tool, niemals roher Poke."
      dd_spell_id: "AhriE"
    - key: "R"
      name: "Spirit Rush"
      description: "Bis zu drei kurze Dashes in einem engen Zeitfenster, jeder feuert auto-zielende Geschosse. Champion-Takedowns verlängern das Recast-Fenster. Mobility plus Execute."
      dd_spell_id: "AhriR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "Q" }
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
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "gegen Diver und Assassinen (Zed, Diana, Talon, Fizz) — die Stasis lässt dich nach einem committeten R im Teamfight überleben"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "gegen magische Single-Target-CC (Lissandra R, Twisted Fate Stun, Morgana Q)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap, sobald ein Priority-Target Magic Resist kauft (Mercury's Treads + MR-Item)"
    - dd_id: "4646"
      name: "Stormsurge"
      against: "alternatives erstes Item, wenn das Gegnerteam 4+ squishy Ziele hat — höheres Single-Pick-Ceiling, weniger Sustained-Damage"
  base_combo: ["E", "R", "W", "Q", "AA"]
  win_condition: "Charm ein squishy Ziel, dash mit R rein, hau W und das zurückkehrende Q für true damage raus, dann dash mit den restlichen R-Charges raus. Wandle jeden Pickoff in den nächsten Drake oder Roam um."
  weakness: "Kein Burst ohne Charm. Geht E daneben, verpufft das ganze Combo; ist R im Cooldown, hast du keinen Escape und jedes hard CC löscht dich."
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
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "annie", "viktor"]
      archetype: "Immobile Mages ohne Dash"
      reason: "Ahris E (Charm) ist ein Skillshot mit langer Reichweite, der das Ziel fixiert. Wer keinen Dash oder Stealth hat, wird auf einer sauberen Linie bezaubert und frisst das volle R + Q + W Combo, bevor er aus der Reichweite kommt."
    - examples: ["caitlyn", "senna", "ziggs"]
      archetype: "Backline-Carries ohne Escape"
      reason: "Spirit Rush gibt Ahri drei Dashes, die sich auf Takedowns resetten — sie kann an der Frontline vorbeitauchen, einen immobilen Carry löschen und wieder rausdashen, bevor Peel ankommt."
    - examples: ["malzahar", "vladimir"]
      archetype: "Sustained Mages ohne Burst"
      reason: "Ahris Burst aus dem vollen R-Combo löscht sie in unter einer Sekunde — bevor ihr Sustained-Damage oder Healing in einem nennenswerten Trade aufstacken kann."
  counterpicks:
    - examples: ["yasuo", "yone"]
      archetype: "Champions mit Wind Wall"
      reason: "Ihre Wind Wall blockt Charm und die Q-Kugel. Ahri verliert sowohl ihr Setup-Tool als auch ihren Haupt-Poke — sie muss in die Wand reinlaufen, um etwas zu treffen, und genau dort wollen sie sie haben."
    - examples: ["fizz", "kassadin"]
      archetype: "Mobile Assassinen mit Magieschaden-Mitigation"
      reason: "Fizz weicht Ahris R-Bolts mit seinem E aus und seine Passive reduziert magischen Burst; Kassadin hat einen Schild gegen magischen Schaden plus einen Blink. Ahri haut ein volles Combo raus, sie überleben mit einem HP-Splitter und killen sie im Recovery-Frame."
    - examples: ["lissandra", "galio"]
      archetype: "Anti-Assassin-Mages mit hard CC"
      reason: "Ihr hard CC erwischt Ahri mitten im R: ein einzelner Root oder Taunt während des Dash-Fensters streicht sowohl ihren Schaden als auch ihren Escape und macht aus einem Pickoff-Versuch einen Free-Kill für sie."
---

## Überblick

Ahri ist ein Mid-Lane-Mage-Assassin: Sie poked aus Distanz wie ein Mage (Poke = Schaden auf Distanz, um die HP des Gegners zu zermürben), aber **Spirit Rush (R)** erlaubt es ihr, auf ein einzelnes squishy Ziel reinzutauchen (ein fragiler Champion mit niedrigem HP und niedrigen Resistenzen, etwa ADC oder Mage), es zu killen und wieder rauszudashen — ein Spielmuster namens **Pickoff** (einen isolierten Gegner ausschalten, kein voller Teamfight). Ihr Kit (das gesamte Set ihrer Fähigkeiten) dreht sich um **Charm (E)**, einen Skillshot-Kuss, der einen Gegner an Ort und Stelle fixiert. Jede andere Fähigkeit, die sie besitzt, ist darauf gebaut, an diesen einzelnen Treffer anzuschließen. **R** hat eine Besonderheit: Jeder Champion-Takedown frischt den Dash-Counter auf, sodass ein erfolgreicher Pick es ihr erlaubt, einen zweiten im selben Fight nachzuschieben.

Ihr Game Plan ist Geduld, dann Commit (volles All-in auf ein Combo ohne Rückzugsoption). **Farme** mit **Q** (töte Minions für Gold und Erfahrung), setze Vision-Wards am River und warte, bis ein Gegner an einer vorhersehbaren Stelle steht, bevor du **E** wirfst. Sobald **Charm** trifft, ist der Rest des Combos mechanisch: zieh den Gegner mit der zurückkehrenden Q-Kugel ran, hau **W** für den auto-zielenden Schaden raus und nutz **R**, um die Distanz zu schließen oder zu fliehen. Ab Level 6 wird sie zu einem der stärksten **Roaming**-Champions im Spiel (die eigene Lane verlassen, um Top oder Bot zu helfen) — jeder Drake-Spawn ist eine Gelegenheit, die Map zu kippen.

## Empfohlener Build

**Starter-Items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Doran's Ring ist der Standard-Mage-Starter: kleiner AP-Bonus (Ability Power, der Stat, der magischen Schaden skaliert), extra HP und Mana-Regeneration zum Spammen von **Q**.

**Core-Items (in Reihenfolge):**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — Burst-Spike beim ersten Ability-Treffer und der Mana-Sustain (Mana-Regeneration, damit du nicht trockenfällst), den du brauchst, um **Q** auf jedem Cooldown zu spammen. Dein Gold-Ziel vor Minute 12.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flache Magic Penetration (dein Schaden ignoriert einen festen Anteil der Magic Resistance des Gegners).
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — extra Burst mit einer HP-Schwellen-Passive: aktiviert sich, wenn das Ziel unter circa 35% HP fällt, perfekt abgestimmt auf den **R**-Execute (einen Gegner mit niedrigem HP finishen).
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — Late-Game-Multiplikator. Erhöht deine Gesamt-AP um 35%, was den Schaden, den jedes vorherige Item zum Combo beiträgt, grob verdoppelt.

**Situative Items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — gegen Diver (Champions, die reinspringen, ein Ziel killen und entkommen) und Assassinen (Zed, Diana, Talon, Fizz). Der Active verwandelt dich für 2.5 Sekunden in eine unangreifbare goldene Statue (Stasis) und lässt dich nach einem committeten **R** tief im Teamfight überleben.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — gegen magische Single-Target-CC (Crowd Control: Stuns, Roots oder alles, was dich an Ort und Stelle fixiert). Der Schild blockt die erste Fähigkeit, die dich locken würde.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — sobald irgendein Priority-Target im Gegnerteam Magic Resist kauft (typischerweise Mercury's Treads plus ein MR-Item).
- ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — alternatives erstes Item, wenn das Gegnerteam vier oder mehr squishy Ziele hat, die du one-shotten willst. Tauscht Sustained Damage gegen ein höheres Ceiling auf den Single-Pick.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** ist Default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** nur, wenn die Gegner-Comp mehrere hard-CC-Ketten auf dich gerichtet hat (hard CC = Stun, Root, Knock-up, Taunt — die Art von CC, die dir die Kontrolle über deinen Champion komplett wegnimmt).

**Skill-Order:** Maxe **Q** zuerst (Waveclear — Minion-Wellen schnell killen — und Haupt-DPS, Damage per Second), **W** als zweites (Fight-Schaden), **E** zuletzt — der Basisschaden ist irrelevant, nur die Charm-Dauer skaliert nennenswert. Punkt in **R** auf Level 6, 11 und 16.

**Runen:** Primärbaum **Sorcery** mit **Arcane Comet** (ein verzögertes magisches Geschoss, das auf jeden Ability-Treffer triggert), **Manaflow Band** (mehr Maximalmana, skaliert mit Ability-Treffern), **Transcendence** (Ability Haste — niedrigere Cooldowns auf jeden Spell), **Scorch** (kleiner Bonus-Brennschaden auf den ersten Ability-Treffer alle 10 Sekunden — ideal für frühen Lane-Harass: Chip-Damage, der die HP des Gegners zermürbt). Sekundär **Inspiration** mit **Magical Footwear** (Gratis-Stiefel, die rund um Minute 12 ankommen) und **Cosmic Insight** (extra Ability Haste, auch auf **Flash**, dem persönlichen Summoner Spell für kurzen Teleport, den du auf F oder D legst).

## Wichtige Matchups

- **Yasuo / Yone:** Beide können deine **Q** und **E** mitten im Flug mit Wind Wall blocken (Wind Wall ist eine wandförmige Barriere, die sie stellen und die jedes Geschoss blockt, das sie kreuzt). Halt **E** zurück, bis sie eine Fähigkeit verbraucht haben, und farme auf maximaler Reichweite mit **W** — die drei Fox-Fires zielen automatisch und gehen an der Wind Wall vorbei, sie sind dein einziges sicheres Schadenstool gegen die Wand.
- **Zed:** Eine Coin-Flip-Lane, die sich an den Items entscheidet. Pre-6 nur ranlaufen, wenn seine **Q** sichtbar im Cooldown ist. Ab 6 spar dir **R** auf, um aus seinem Ultimate rauszudashen — **R** offensiv zu committen und dann keinen Escape zu haben, wenn seine Ult einschlägt, ist der schnellste Weg, die Lane wegzuwerfen.
- **Galio:** Er bestraft dich, wenn du dich gruppierst — sein **W** taunted Ziele in der Nähe seiner Verbündeten. Push die Wave mit **Q** und roame in die Side-Lanes, wo er mit seiner Ult nicht so schnell folgen kann wie du mit drei Dashes.
- **Twisted Fate:** Roam-Priority-Race. Er hat globalen Rotationsdruck mit seinem **R**, du hast Drei-Dash-Mobility — gleichwertige Bedrohung. Push jede Wave mit **Q** in dem Moment, in dem seine Ult oben ist, und warde beide River-Eingänge, damit du mit ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** antworten kannst, falls er versucht, dich zu ganken (gegnerischer Jungler, der in deine Lane kommt, um dich zu killen).
- **Cassiopeia:** Outscaled dich (skaliert besser ins Late Game) in extended Trades, weil ihr **W** deine **R**-Dashes verweigert (du kannst nicht durch ihre Grounding-Zone dashen). Trade nur in kurzen Bursts (ein Trade = kurzer Austausch von Abilities und Auto-Attacks, kein Kampf bis zum Tod) und commit **R** niemals offensiv, wenn ihr **W** oben ist.

## Power Spikes & Siegbedingungen

- **Level 2:** Mit **Q + E** freigeschaltet hast du die Werkzeuge für eine Lane-Kill, falls der Gegner zu weit nach vorn tritt. Halt **E**, lauf ran wie für einen Last-Hit (den finalen Schlag auf einen Minion landen, um sein Gold zu kassieren) und dann snap den Charm in dem Moment, in dem er in deine Auto-Attack-Reichweite kommt.
- **Level 6:** Erste **Spirit Rush** schaltet das Pickoff-Potenzial frei. Das Combo **E → R → W → Q** löscht jeden squishy Champion, der noch kein einziges defensives Item gebaut hat.
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion fertig (~ Minute 12-14):** Wave-Kontrolle kippt — du kannst shoven (eine Wave schnell ganz an den gegnerischen Turm pushen) und auf jedem Cooldown roamen. Hier aktiviert sich deine Win Condition: roam, charm, kill, dash raus. Jeder erfolgreiche Pickoff snowballed in den nächsten — Gold von einer Kill finanziert ein Item, das den nächsten Pick erleichtert.
- **Drei-Item-Spike (~ Minute 24):** Mit deinen drei Core-Items online löscht dein volles **R**-Combo jeden Backline-Champion (die Carries — ADC, Mage — die hinter ihren Tanks stehen) unter 70% HP. Erzwing hier Objective-Fights (5v5 für Drake, Baron oder Türme).

## Häufige Fehler

- **E als Poke ohne Setup werfen.** Nackter **Charm** hat ein langsames Geschoss und einen langen Cooldown — die meisten Mid-Lane-Gegner weichen ihm reaktiv aus. Nutze eine Wave oder einen Minion als Deckung und ziel auf den Pfad, den sie gehen müssen, um Last-Hits zu nehmen.
- **R zum Engage (den Fight starten) statt zum Finishen nutzen.** **Spirit Rush** ist dein einziges Escape-Tool. Wenn du reindashed ohne ein Ziel, von dem du sicher bist, dass es stirbt, verschenkst du das Dash-Fenster und stirbst selbst, wenn ihr Team auf dich kollabiert (ihre Mitspieler rotieren rein, um dich zu zerquetschen, weil du jetzt aus der Position bist).
- **Q als Poke spammen und OOM gehen.** OOM heißt out of mana — ohne Mana kannst du keine Spells casten und wirst für 30 Sekunden zum nutzlosen Auto-Attacker. **Orb of Deception** kostet pro Cast deutlich Mana: spar ihn dir für Waveclear und gesicherte Trades.
- **Vergessen, dass R sich auf Takedowns resetted.** Wenn du während **Spirit Rush** eine Kill sicherst, verlängert sich das Recast-Fenster. Spieler, die das verinnerlichen, können einen Pick in einen zweiten Pick im selben Teamfight verketten, statt sofort nach der ersten Kill rauszudashen.

## Fortgeschrittener Tipp

Übe das **Q-Back-Combo**: wirf **Q** vor das Ziel und nutz dann sofort **R**, um durch es durchzudashen. Die Kugel passiert auf ihrem Rückweg jetzt den Gegner auf Tuchfühlung und richtet den True-Damage-Anteil an (true damage ignoriert sämtliche Resistenzen — selbst Tanks fressen ihn in voller Höhe), während du bereits in Melee bist und **W** automatisch oben drauffeuert. Eine **Q + R + W**-Sequenz, so gespielt, landet drei Schadensinstanzen in unter einer Sekunde — weit mehr Burst, als die Lehrbuch-Reihenfolge **E → R → W → Q** suggeriert, und sie funktioniert auch dann, wenn **Charm** noch im Cooldown ist.
