---
title: "Camille Top Build & Guide — Patch 16.9"
slug: "camille-top"
language: "de"
patch: "16.9"
champion: "camille"
role: "top"
last_updated: "2026-05-01"
description: "Camille Top Lane Guide für League of Legends Patch 16.9: Starter, Fighter-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Profi-Tipp."
quick_learn:
  champion_dd_id: "Camille"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Adaptive Defenses"
      description: "Auto-Attacks gegen Champions erzeugen einen Schild in Höhe eines Prozentsatzes der maximalen HP von Camille, kalibriert auf den Schadenstyp des Ziels (physisch oder magisch)."
      dd_spell_id: "Camille_Passive"
    - key: "Q"
      name: "Precision Protocol"
      description: "Empowered Auto-Attack mit Bonus-Schaden und Move Speed. Recast in wenigen Sekunden für einen zweiten Schlag; Warten zwischen den Casts erhöht Schaden und fügt True Damage hinzu."
      dd_spell_id: "CamilleQ"
    - key: "W"
      name: "Tactical Sweep"
      description: "Frontal-Kegel nach kurzer Verzögerung. Die äußere Hälfte verlangsamt, fügt Bonus-Schaden zu und heilt Camille basierend auf fehlenden HP."
      dd_spell_id: "CamilleW"
    - key: "E"
      name: "Hookshot"
      description: "Schießt sich an eine Wand und springt knockend auf Champions am Landepunkt. Hauptwerkzeug für Engage und Disengage — braucht eine Wand in Reichweite."
      dd_spell_id: "CamilleE"
    - key: "R"
      name: "The Hextech Ultimatum"
      description: "Springt auf einen Ziel-Champion und sperrt ihn in einer Arena ein. Verbündete und Ziel können nicht rein/raus; Auto-Attacks auf das Ziel verursachen magischen Bonus-Schaden."
      dd_spell_id: "CamilleR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
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
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
  situational_items:
    - dd_id: "3078"
      name: "Trinity Force"
      against: "erstes Item gegen Duelist-Matchups (Fiora, Jax, Irelia): Spellblade-Reset trägt Q1-AA-Q2 besser als Stridebreaker"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "gegen schweren Magic-Burst (Vladimir, Rumble, Cassiopeia): Magic Shield unter 50% HP rettet die erste Cooldown-Rotation"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "gegen Teams, die Rüstung stapeln (Frontline mit Plated Steelcaps + Randuin's): Armor Shred verstärkt auch Team-Schaden"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "wenn vorne und du eine Side-Lane splitpushst (allein pushen, um Reaktion zu erzwingen): Tower Shred und Bonus-HP isoliert"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "Boot-Swap gegen schweren AP oder 3+ Hard-CC-Quellen (Stuns, Roots, Taunts, die E im Flug oder W-Windup unterbrechen)"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "gegen gefütterte AD-Assassinen (Zed, Talon, Kha'Zix): zweites Leben lässt dich die R-Combo abschließen, selbst wenn du stirbst"
  base_combo: ["E", "Q1", "AA", "W", "Q2", "R"]
  win_condition: "Engage von einer Wand mit E, sperr den Priority-Carry in R und burste mit Q1-AA-W-Q2, bevor Peel kommt. In Side-Lanes gewinn 1v1s mit Q-Resets und dem W-Heal."
  weakness: "Offene Lanes ohne Wände neutralisieren E. Langer R-Cooldown lässt Lücken, in denen sie nur ein robuster Auto-Attacker ist. Hard CC unterbricht E im Flug und das W-Windup."
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
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision primär: Conqueror stackt schnell auf W-Q1-AA-Q2 und belohnt die langen Fights, die Camille mit R erzwingt. Triumph gibt HP auf Takedowns zurück, Legend: Alacrity beschleunigt Q-Resets und R-Autos, Coup de Grace passt zum verzögerten Q2-True-Damage unter 40% HP."
    secondary_rationale: "Resolve sekundär: Bone Plating dämpft frühe Lane-All-ins von Darius / Renekton / Pantheon, Overgrowth skaliert den HP-Pool, auf dem ihr Passive Shield berechnet wird."
    secondary_alternative: "Gegen Top mit Ranged-Poke (Quinn, Teemo, Vayne, Gnar) swap Resolve auf Inspiration mit Magical Footwear (Gratis-Boots ca. Minute 12) und Cosmic Insight (mehr Flash und R-Uptime, um auf jedes Cooldown-Fenster zu committen)."
matchup_draft:
  pick_into:
    - examples: ["garen", "darius", "nasus"]
      archetype: "Immobile Melee-Bruiser"
      reason: "E + R sperren sie im Nahkampf ohne Antwort ein. Q-Resets und der W-Slow lassen Camille im R-Ring kiten (rückwärts laufen und dabei angreifen), während ihre Stacks oder Kit-Timer ablaufen."
    - examples: ["vladimir", "rumble"]
      archetype: "Squishy Mages auf Top"
      reason: "Sobald R steht, können sie nicht poolen, dashen oder aus der Arena rauslaufen. Der Q2-True-Damage chunkt sie über Shield und Heal-Sustain hinaus."
    - examples: ["sion", "chogath"]
      archetype: "Late-Scaling Tanks"
      reason: "Q2-True-Damage und Sundered-Sky-Burst chunken riesige HP-Pools. R verhindert, dass sie zum Team für Peel zurücklaufen während eines Side-Lane-Fights."
  counterpicks:
    - examples: ["quinn", "teemo", "vayne", "gnar"]
      archetype: "Ranged Tops mit Kite-Tools"
      reason: "Sie poken (Chip-Damage aus Distanz), ohne zu committen, während Camille keine Ranged-Antwort hat. E sucht eine Wand, von der sie einfach weglaufen können."
    - examples: ["malphite", "poppy", "maokai"]
      archetype: "Hard-CC-Frontline-Tanks"
      reason: "Ihr Crowd Control unterbricht E im Flug, das W-Windup und den R-Lock-on-Dash. Camille verliert jeden All-in (voller Commit bis zum Kill), in dem der Stun zuerst trifft."
    - examples: ["renekton", "riven", "pantheon"]
      archetype: "Starke frühe Melee-All-ins"
      reason: "Sie bursten (Schaden in 1-2 Sekunden frontloaded) schneller, als Camille E + W setzt, und schlagen ihr Trade-Pattern vor Level 3."
---

## Überblick

Camille ist ein Melee Fighter / Diver (Champion, der auf die gegnerische Backline springt, um ein Priority-Target zu töten): sie dasht von Wänden, um einen einzelnen Carry (das hochschadende Backline-Ziel — meist der ADC, der Marksman der Bot-Lane, oder der Mid-Laner) zu fixieren, und verwandelt den Fight in ein 1v1 in ihrem **R**-Ring. Ihr Kit belohnt verlängerte Trades (langer Schadensaustausch hin und her), weil **Q** ein zweifach gecasteter empowered Auto-Attack ist (auch geschrieben **AA**) mit verzögertem True Damage (Schaden, der Rüstung und Magic Resist komplett ignoriert), **W** heilt, wenn die äußere Hälfte einen Champion trifft, und ihr Passive Shield reduziert eingehenden Schaden des passenden Typs (physisch oder magisch) bei jedem AA. Sie macht überwiegend physischen Schaden (AD = Attack Damage), aber **R** fügt magischen Bonus-Schaden hinzu (skaliert mit AP = Ability Power), darum ist der damage_type mixed.

Ihr Game Plan in einem Satz: warte auf **R**, lauf in eine Side-Lane oder ins River-Bush, dash von einer Wand auf das Priority-Target und burste es mit **Q1 → AA → W (äußere Hälfte) → Q2** runter, während der Rest des Fights außerhalb der Arena gesperrt bleibt. Off-Cooldown farmt sie sicher hinter Minions und meidet offene Lanes, wo **E** keine Wand zum Greifen hat.

## Empfohlener Build

**Starter-Items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Tausch Doran's Blade gegen ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** (mehr HP und Block für eingehenden Schaden, kein AD) nur in Ranged-Poke-Matchups (Quinn, Teemo, Vayne).

**Core-Items (in Reihenfolge):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — First-Item-Rush. Active Dash + Slow verkettet sich mit der äußeren Hälfte des **W** und liefert die Waveclear, die Camilles Vanilla-Kit fehlt.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — gegen AD-lastige Lanes (viele Champions mit physischem Schaden) und AD-Jungle. Die Auto-Attack-Reduktion ist kritisch, weil die meisten Bedrohungen für Camille physische Bruiser sind (Mid-Range-Fighter mit hohen HP und Sustained Damage).
3. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — Burst-Spike. Der erste Auto auf einen Champion crittet und heilt; passt zu **Q1**, um jeden All-in (Vollcommit-Fight bis zum Kill) zu öffnen.
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — Survival-Spike. Tenacity (kürzere Dauer auf Stuns, Slows und anderem Crowd Control = CC) plus ein Schild, der bei niedrigen HP triggert — Camille divet oft die Backline (springt auf die Gegner, die ihren Carry peelen = schützen).
5. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — Anti-Burst (Schadenspakete, die in 1-2 Sekunden komprimiert sind). Bleed-Mechanik (Post-Hit-Schaden, der über mehrere Sekunden verteilt wird) gibt dir Zeit zum Reagieren, statt One-Shot zu bekommen.

**Situative Items:**

- ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — Swap als erstes Item in Duelist-Matchups (Fiora, Jax, Irelia). Spellblade (Passive: nach einem Cast macht dein nächster Auto-Attack Bonus-Schaden und resettet den AA-Timer) trägt einen **Q1 → AA → Q2** Trade besser als Stridebreaker.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — gegen schweren Magic-Burst (Vladimir, Rumble, Cassiopeia, AP Kayle).
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — gegen Gegnerteams, die Rüstung stapeln (mehrere Champions kaufen Armor-Items wie Plated Steelcaps und Randuin's; "stack" = dieselbe Stat über mehrere Items akkumulieren). Armor Shred = jeder Treffer entfernt einen Brocken Rüstung des Ziels für ein paar Sekunden, also tut der physische Schaden deines Teams mehr weh.
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — wenn du vorne bist und splitpushst (eine Side-Lane allein pushst, um den Gegner zur Reaktion zu zwingen). Tower Shred = Bonus-Schaden auf Türme; das Item gibt auch größere Stats, wenn keine Verbündeten in der Nähe sind.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — Boot-Swap gegen schweren AP oder 3+ Hard-CC-Quellen.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — gegen einen gefütterten AD-Assassinen (Zed, Talon, Kha'Zix) im Snowball (frühe Führung, die Kill für Kill wächst).

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** ist Default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** gegen schweren AP / CC.

**Skill-Order:** Maxe **Q** zuerst (jeder Level = mehr Schaden, kürzerer CD = Cooldown), **E** als zweites, **W** zuletzt. **R** auf Level 6, 11, 16. Level 1-3: **W → E → Q** — erst Sustain, dann Engage, dann Schadens-Steroid. "Q-Reset" unten = **Q1 → AA → Q2 → AA**: jeder Q-Cast resettet deinen AA-Timer, also feuerst du direkt danach einen Extra-Auto.

**Runen:** Primärbaum **Precision** mit **Conqueror**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Sekundär **Resolve** mit **Bone Plating** und **Overgrowth**. Stat-Shards (die drei kleinen Bonus-Stats unten auf der Runenseite): Attack Speed, Adaptive Force, Health Scaling.

## Wichtige Matchups

- **Darius:** Tank HP early (saug den Schaden auf und bleib auf gleicher CS). Er outduelt dich in einem direkten Pre-3-Trade — warte bis Level 3 mit bereiter **Q**. Sobald ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** online ist, tanze mit **W**-Slow + **Q**-Resets (seine Hemorrhage-Passive stackt Bleed bis zu 5 auf dir; ein Kill an Darius würde seine Ult-Stacks resetten, also füttere ihn nicht).
- **Fiora:** Mirror-Duelist-Matchup. Trade in geraden Linien, damit sie nicht um dich rotiert, um das senkrechte Vital zu treffen (ihre Passive markiert eine deiner Seiten — Treffer auf dieser Seite machen True Damage und heilen sie). Auf Level 6 heben sich ihre **R** und deine **R** gegenseitig auf — Positioning entscheidet, wer den Engage zuerst landet.
- **Renekton:** Verliert die Lane Pre-3 und verliert wieder an seinem Level-2-Spike (W + Q). Halt **E** für seinen All-in. Bei 6 kippt das Power-Verhältnis, falls er nicht gesnowballt hat: deine **R** zerrt ihn aus der Reichweite, in der er Fury (seine Rage-Ressource) aufbaut.
- **Jax:** Schlechtes Matchup post-6. Sein E counter-strikt deinen **Q2** und das **W**-Windup (die kurze Verzögerung, bevor die Ability landet, in der sie gecancelt werden kann). Kauf ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** zuerst, niemals **E** im Nahkampf, außer sein Counter Strike ist auf Cooldown.
- **Quinn / Teemo:** Ranged Tops. Du verlierst die Lane brutal früh. Starte ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** statt ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade**, freeze die Wave (lass die gegnerischen Minions zahlreicher sein, damit die Wave nahe deinem Turm parkt) und push nie ohne **Q + E** verfügbar. Warte auf Ganks (Jungler kommt in die Lane für ein 2v1), um die gegnerischen Plates anzuknabbern (die 5 Bonus-Goldstücke an jedem äußeren Turm in den ersten 14 Minuten).

## Power Spikes & Siegbedingungen

- **Level 2 (W + E):** Erstes All-in-Fenster. **W**-Slow → **AA** → **E**-Knockup (kurzer Luft-Stun bei Landung) bereitet einen vollen Trade mit zweimal aktiver Passive vor.
- **Level 6 (R):** Dein Engage wird für eine Cooldown-Rotation unanfechtbar. Kombiniere **E** von einer Wand mit **R**, um jeden im Nahkampf zu sperren; warne deinen Jungler vor dem Fight, damit er im Ring mit reinkommt.
- **![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) Stridebreaker fertig (~ Minute 13-14):** Waveclear schaltet frei. Dein Trade-Pattern wird konsistent: Active-Slow → äußere **W**-Hälfte → **Q1** → **AA** → **Q2** chunkt etwa die halbe HP-Leiste.
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky fertig (~ Minute 20-24):** Heal-on-First-Hit lässt dich in Side-Lane-Skirmishes (kleinen 1v1- oder 2v2-Fights) deutlich aggressiver committen. Das ist der Spike, ab dem du für Objectives splitpushst.

## Häufige Fehler

- **E für Poke (Chip-Damage aus Distanz) in Lane verschwenden.** **E** ist dein einziger Escape, wenn der gegnerische Jungler gankt. Wirf es für Engage-Commits oder zum Entkommen aus Ganks, nicht für 50 Chip-Damage. Ohne **E** stirbt eine Camille ohne Flash an jedem 2-Mann-Dive (koordinierter Kill-Versuch unter deinem Turm).
- **Vor dem W-Kegel stehen.** Die innere Hälfte des **W** macht miesen Schaden und keinen Slow / Heal — der ganze Payoff steckt in der äußeren Hälfte. Repositioniere mitten im Cast, damit der Gegner im Außenring steht, nicht an dir kleben.
- **Engage ohne R, wenn das Ziel Hard-CC up hat.** **R** ist dein "No-Flash-Escape"-Tool — einmal gelockt, kann das Ziel nicht aus dem Ring rausflashen. Eine Camille ohne **R**, die auf ein Peel-bereites Team (Verbündete bereit, ihren Carry zu schützen) divet, stirbt einfach in Stun-Ketten (ein CC nach dem anderen, ohne Lücke zum Reagieren).
- **Q1 → Q2 direkt hintereinander rausknallen.** Je länger du zwischen **Q1** und **Q2** wartest (bis zu ~2 Sekunden), desto höher der Bonus-Schaden und der prozentuale True-Damage-Anteil von **Q2**. Quetsch eine **AA** + **W** dazwischen — von dort kommt der Großteil deines Bursts (frontloadeter Schaden in 1-2 Sekunden).

## Fortgeschrittener Tipp

Übe den **Flash → E**-Redirect: ist keine nutzbare Wand in Reichweite, nutze **Flash** (der Beschwörerzauber auf D oder F, der dich ~400 Einheiten kurz-blinkt) mitten im **E**, um auf eine Wand zu teleportieren und den Dash umzulenken. Das macht aus Camille von "braucht Wände" ein "engaged überall" zum Preis eines Beschwörerzaubers. Das Combo ist am nützlichsten in Objective-Pits (den ummauerten Arenen um Drake und Baron) und offenen Mid-River-Fights, wo die einzigen Wände 600+ Einheiten weit weg sind — Flash füllt die Lücke, damit du den **E**-Knockup (kurzer Luft-Stun) trotzdem auf dem Priority-Target landest.
