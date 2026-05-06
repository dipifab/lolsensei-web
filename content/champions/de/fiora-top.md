---
title: "Fiora Top Build & Guide — Patch 16.9"
slug: "fiora-top"
language: "de"
patch: "16.9"
champion: "fiora"
role: "top"
last_updated: "2026-04-29"
description: "Fiora Top Guide für League of Legends Patch 16.9: Duelist-Build, Vital-Management, Parry-Timing, wichtige Matchups, Power Spikes und häufige Fehler."
quick_learn:
  champion_dd_id: "Fiora"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Skirmisher / Duelist"
  abilities:
    - key: "P"
      name: "Duelist's Dance"
      description: "Eine leuchtende Schwachstelle (ein Vital) erscheint an jedem nahen gegnerischen Champion. Sie zu treffen verursacht true damage, heilt Fiora und gibt ihr für kurze Zeit Move Speed."
      dd_spell_id: "Fiora_Passive"
    - key: "Q"
      name: "Lunge"
      description: "Kurzer gerichteter Dash, der den nächsten Gegner ersticht und den Auto-Attack-Timer resettet. Ein Treffer erstattet fast den gesamten Cooldown: verkettete Q sind ihre Mobility."
      dd_spell_id: "FioraQ"
    - key: "W"
      name: "Riposte"
      description: "Parry: blockt für einen Moment allen Schaden und Disables, dann Stoß in eine Richtung. Slowt den ersten getroffenen Gegner oder stunt ihn, wenn du einen CC pariert hast."
      dd_spell_id: "FioraW"
    - key: "E"
      name: "Bladework"
      description: "Verstärkt ihre nächsten zwei Auto-Attacks. Der erste slowt das Ziel, der zweite ist immer ein Crit. Beide geben Bonus-Attack-Speed im Fenster."
      dd_spell_id: "FioraE"
    - key: "R"
      name: "Grand Challenge"
      description: "Enthüllt alle vier Vitals am Ziel-Champion. Alle vier zu treffen (oder das Ziel nach mindestens einem Vital zu töten) heilt Fiora und nahe Verbündete in einer großen AOE."
      dd_spell_id: "FioraR"
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
    - { dd_id: "3074", name: "Ravenous Hydra" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "Swap von Plated Steelcaps bei viel Magic Damage oder CC-Ketten (Lissandra, Ryze, Sett-Pull)"
    - dd_id: "6610"
      name: "Sundered Sky"
      against: "gegen tankigere Bruiser (Mundo, Sion, Ornn) — Crit + Heal beim ersten Hit hilft gegen HP-Stacker"
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "gegen mobile Tops (Camille, Irelia, Renekton) — Dash + Slow lässt dich sticken, wenn Q allein nicht reicht"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "gegen starken AP-Burst (Mordekaiser, Vladimir, Rumble) — Magic Shield + MR fürs 1v1-Splitpush-Fenster"
    - dd_id: "6694"
      name: "Serylda's Grudge"
      against: "gegen Armor-Stack-Frontlines (Malphite, Rammus, Shen) — Armor Pen + Slow hält Ziele in Vital-Range"
  base_combo: ["Q", "AA", "E", "AA", "AA"]
  win_condition: "Manage Vitals, um dich früh zu heilen und zu snowballen, hol Trinity Force, dann splitpush eine Side Lane, bis sie zwei schicken. Im Teamfight R aufs Squishy-Ziel für den AOE-Heal."
  weakness: "Squishy in den ersten 6 Levels und sehr item-abhängig. Hard-CC-Ketten und Ranged-Poke (Teemo, Quinn, Gnar) halten sie von Vitals fern; ohne Q-Resets hat sie keine Mobility."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["sett", "darius", "garen"]
      archetype: "Langsame Juggernauts, die sich auf eine große Fähigkeit verlassen"
      reason: "Fioras W pariert genau die telegrafierte Wind-up, die sie definiert (Darius E-Pull, Sett W-Slam, Garen Q-Silence). Mit verschwendeter Wind-up läuft sie drumherum und free-hittet Vitals den ganzen Trade."
    - examples: ["dr-mundo", "sion", "shen"]
      archetype: "HP-Stacker-Tanks, die ihre Vitals nicht aufhalten können"
      reason: "Vitals machen einen Prozentsatz der maximalen HP des Ziels als true damage (Schaden, der Armor und MR ignoriert). Je mehr HP sie bauen, desto mehr zerlegt sie ihr R im langen Fight."
    - examples: ["nasus", "kayle"]
      archetype: "Late-Scaling-Melees mit schwachem Early Laning"
      reason: "Sie bullyt sie ab Level 2 mit Q-Resets von der Wave weg, killt sie oder pusht sie wiederholt unter den Turm, bevor sie die Items bekommen, die sie gefährlich machen."
  counterpicks:
    - examples: ["teemo", "quinn", "gnar"]
      archetype: "Ranged Tops, die außerhalb der Q-Range kiten"
      reason: "Fiora hat vor Level 6 keine Antwort auf Ranged-Poke. Sie sitzen auf Auto-Attack-Range, blenden sie oder dashen weg, und sie kommt an kein Vital, um sich zu heilen."
    - examples: ["jax", "irelia", "camille"]
      archetype: "Skirmisher mit Mobility on demand"
      reason: "Ihre Dashes ignorieren ihr Positionierungsspiel. Jax E stunt durch ihr Parry-Fenster, Irelia Q-Resets repositionieren sie jede Sekunde, Camille R sperrt Fiora im 1v1."
    - examples: ["malphite", "poppy", "tahm-kench"]
      archetype: "Hard-CC-Tanks mit Point-and-Click-Lockdown"
      reason: "Ihr CC ist zuverlässig und unparrybar, sobald er auf dir liegt. Eine Malphite R oder Poppy Stop-Charge cancelt ihr R-Fenster und ihr Team spielt 4v5."
---

## Überblick

Fiora ist eine **Skirmisher** — eine Melee-Duelist, die lange 1v1-Fights gewinnt, statt in 1-2 Sekunden zu bursten wie eine Assassin. Ihr Kit dreht sich um die Passive **Duelist's Dance**: eine leuchtende Schwachstelle namens **Vital** erscheint an jedem nahen gegnerischen Champion und wechselt alle paar Sekunden die Seite. Das Vital zu treffen verursacht **true damage** (Schaden, der Armor und MR ignoriert), heilt sie und gibt Move Speed. Ihr Q **Lunge** ist ein kurzer Dash mit niedrigem Cooldown, der sich beim Treffer fast vollständig erstattet, also ist das Verketten von Q um den Gegner herum, um zum nächsten Vital zu gelangen, der zentrale mechanische Loop. Ihr W **Riposte** ist ein **Parry** — ein kurzer Schild, der die nächste Schaden- oder CC-Instanz blockt und zurücksticht, und der das Ziel stunt, wenn sie einen CC pariert hat.

Der Game Plan ist einfach zu beschreiben, aber mechanisch: in der Lane Vitals managen, um dich zu heilen und den Gegner zu chippen, einen Level-2- oder Level-6-All-in suchen (ein Fight, in dem du voll auf den Kill committest), dann **splitpushen** (eine Side Lane allein pushen, um den Gegner zu zwingen, jemanden zu schicken, der dich stoppt), sobald **Trinity Force** online ist. Mit ihrem R **Grand Challenge** wird Fiora zu einem der stärksten 1v1-Champions im Spiel: Ult auf ein isoliertes Ziel, alle vier Vitals treffen, und der finale AOE-Heal kann einen Teamfight allein drehen. Sie ist squishy und item-abhängig in den ersten 6 Levels, also dreht sich das Early Laning um Vitals, nicht um Kills.

## Empfohlener Build

**Starting Items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Die HP-Regen-Passive dämpft gegnerischen Poke (Ranged-Schaden, der HP abknabbert, ohne sich auf einen Fight zu committen), bis dein Q-E-Spike auf Level 2 kommt. Nimm ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** nur in einer Melee-Lane, in der du früh All-in willst (z. B. Mirror Fiora, Garen).

**Core Items (in Reihenfolge):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — First-Item-Spike (der größte Sprung an Schaden und **Stickiness**, deiner Fähigkeit, an einem fliehenden Ziel zu kleben). Der Spellblade-On-Hit-Proc triggert auf jede Q für riesigen Bonus-Schaden, und die Move-Speed-Passive nach jeder Ability stackt die Vital-Chase. AD, Attack Speed, Ability Haste (Stat, der Cooldowns reduziert) und HP passen zu allem, was das Kit braucht.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — Standard-Boots, wenn der Gegner dich vor allem mit Auto-Attacks trifft.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP plus ein **Lifeline-Schild**: wenn deine HP unter ~30% fallen, triggert ein automatischer Schild. Genau das Fenster, in dem du extra Zeit brauchst, um die letzten zwei Vitals auf deinem R-Ziel zu landen.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — wandelt **Burst** AD (hoher Schaden in 1-2 Sekunden) in einen langsamen **Bleed** (Schaden über die nächsten Sekunden verteilt). Auf Kill wird der restliche Bleed gecleansed — ein sauberer Reset für Splitpush-Dives.
5. ![Ravenous Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3074.png) **Ravenous Hydra** — AOE-Cleave auf Auto-Attacks plus Omnivamp (Lifesteal, der auf jeden Schaden wirkt, nicht nur auf Autos). Verdoppelt deinen Waveclear, sodass du eine Side Lane splitpushen kannst, ohne zu viel Zeit zu verlieren.

**Situational Items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — Swap von ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**, wenn das gegnerische Team viel Magic Damage oder verkettetes **CC** (Crowd Control: Stuns, Roots, Knockbacks — alles, was dich festsetzt) hat. Die Tenacity (Stat, der die CC-Dauer auf dir verkürzt) hält W-Parry-Fenster im Teamfight nutzbar.
- ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — alternatives First Item gegen tankigere Bruiser-Lanes (Mundo, Sion, Ornn). Jeder erste Auto auf einen Champion im Fight crittet und heilt — extra Sustain gegen HP-Stacker.
- ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — gegen mobile Tops (Camille, Irelia, Renekton). Die aktive Dash + Slow gibt einen zweiten Gap-Closer (Werkzeug, um die Distanz zu einem Gegner zu schließen), wenn Q-Resets allein sie nicht in Vital-Range halten.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — gegen starken **AP**-Burst (Ability Power, der Stat hinter Magic Damage) (Mordekaiser, Vladimir, Rumble). Lifeline-Magic-Shield + MR macht den 1v1-Splitpush gewinnbar.
- ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — gegen Armor-stackende Frontlines (Malphite, Rammus, Shen). Armor Pen plus eine Slow-Proc (Passive, die automatisch bei jedem Schadens-Hit triggert) hält Tanks lange genug pinned, um alle vier Vitals zu clearen.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** ist der Standard. Wechsel zu ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**, wenn das gegnerische Team drei oder mehr CC-Quellen oder schweren Magic Damage hat.

**Skill Order:** Maxe **Q** zuerst (Cooldown sinkt mit jedem Rank, Resets werden fast instant). Maxe **E** als zweites (mehr Schaden auf dem empowerten Crit, längerer Slow zum Setup von Vitals). **W** wird zuletzt gemaxt. Nimm **R** auf den Levels 6, 11, 16.

**Runes:** Primärer Baum **Precision** mit Keystone (der Hauptrune des Baums) **Conqueror** — rampt Bonus-AD, während du weiterkämpfst, gecapped nach ~5 Sekunden. Kombiniere mit **Triumph** (Heal und Gold auf Takedown), **Legend: Bloodline** (Lifesteal-Stacks auf Takedowns) und **Coup de Grace** (mehr Schaden unter 40% HP — perfekt zum Finishen von Vitals). Sekundärer Baum **Resolve** mit **Bone Plating** (Schadensreduktion auf den nächsten 3 Hits, nachdem du Schaden bekommen hast) plus **Revitalize** (boostet deinen R-Team-Heal). Stat Shards: **Adaptive Force** + **Adaptive Force** + **Health Scaling**.

## Wichtige Matchups

- **Darius:** Skill-Matchup. Seine Q auf der Außenklinge legt einen Bleed-Stack an und out-tradet dich raw, aber das ganze Kit ist telegrafiert: **W** (Parry) auf seinen E-Pull und der Trade dreht sich. Wenn du den Pull parierst, ist er fast eine Sekunde gestunt — Q rein, zwei Vitals, raus. Trade niemals, wenn seine Passive auf 4-5 Stacks ist.
- **Camille:** Hartes Matchup. Ihr E-Hookshot stunt durch deine W, wenn sie den zweiten Cast landet, und ihre R isoliert dich 1v1. Spar **W** für ihre R, nicht für ihre Q. Kauf ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** statt Trinity, wenn sie früh snowballt.
- **Teemo:** Brutale Lane. Er blendet dich (cancelt deine Auto-Attacks für kurze Zeit) on Cooldown und poket aus der Q-Range raus. **Freeze** die Wave nahe deinem Turm (hör auf zu pushen und halt die Wave auf deiner Seite), um ihm Farm (Gold und XP von Minions) zu verweigern, und ruf deinen Jungler.
- **Garen:** Vorteilhaft. Q-W, um seinen **W** (sein Damage-Reduction-Schild) zu baiten, dann lauf zur Seite für das Vital. Sein Q-Silence ist eine reine Wind-up — parier auf Reaction. Vermeide All-in unter seiner R, außer du bist 1-2 Items vorne.
- **Jax:** Even Matchup, das Fiora nach einem Item gewinnt. Pariere sein **E** (das 2-Sekunden-Stun-Wind-up) und die Lane gehört dir. Ohne diesen Parry out-tradet sein E + Counter-Strike dich, weil er durch jeden Hit, den du im Channel landest, durchstunt.

## Power Spikes & Siegbedingungen

- **Level 2:** Mit Q + E unlocked hast du ein echtes All-in-Fenster. Q rein für ein Vital, E für Slow + Crit-Auto, lauf zur Seite für das nächste Vital. Die meisten Lanes verlieren ein Drittel ihrer HP von einem einzigen Level-2-Trade.
- **Level 6:** Erstes **R** wird unlocked. Selbst auf null Items isoliert R ein Ziel, und der AOE-Heal hält dich nach dem Kill am Leben. Erzwinge ein 1v1, sobald dein Jungler top auftaucht.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force fertig (~ Minute 11-13):** Schaden und Stickiness machen hier den größten Sprung. Du kannst eine Side Lane splitpushen und zuverlässig 1v1 jeden schlagen, den der Gegner schickt. Erzwinge Side-Lane-Druck und ignoriere Mid-Teamfights, wenn das online geht.
- **Drei Items + R online (~ Minute 22-26):** Peak-Teamfight-Fenster. R aufs squishigste Ziel, tanze um die vier Vitals, und der AOE-Heal hält dein ganzes Team durch einen zweiten Engage am Leben. Wenn du nicht an die Backline kommst, R aufs HP-stärkste Frontliner — true damage schneidet genauso durch deren Build.

## Häufige Fehler

- **Q on Cooldown für Schaden spammen.** Q ist zuerst ein Positionierungstool, dann Schaden. Wenn du Richtung Gegner Q'st und seine volle Combo frisst, hast du sowohl den Dash als auch den Refund verschwendet. Q **Richtung Vital**, nicht Richtung Champion.
- **W auf Auto-Attacks verschwenden.** W pariert jede Schadensquelle, aber ein parierter Minion-Auto ist verschwendetes Potenzial. Halt W für die größte einzelne Ability des Gegners. Ein sauberer W-Parry auf einen CC ist ein freies Kill-Fenster.
- **Gegen eine Wand ulten.** R platziert vier Vitals auf den Kardinal-Seiten des Ziels. Wenn der Gegner schon an einer Wand klebt, sind zwei Vitals auf der Wand-Seite und du erreichst sie nicht. Zieh das Ziel erst auf offenes Gelände, dann R.
- **Splitpushen ohne Vision.** Fiora schlägt jeden 1v1, verliert aber jedes 1v2. Setz einen ![Control Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2055.png) **Control Ward** im gegnerischen Side-Lane-Busch ab, bevor du shovst — ohne ihn lädt jedes Shoven einen Free-Gank ein, dem du nicht entkommst.
- **Gegen volle Passive traden.** Juggernauts wie Darius, Sett, Renekton gewinnen Raw-Trades, wenn ihre Passive geladen ist. Wenn ihre Leiste voll ist, zieh dich zurück, push die Wave und trade nur, wenn sie sich leert.

## Fortgeschrittener Tipp

Übe das **W-Parry-Timing** auf Point-and-Click-Ultis (Abilities, die einen Gegner automatisch anvisieren, wie Mordekaiser R) statt auf Skillshots (Abilities, die du manuell zielst). Die meisten Spieler versuchen, W auf das Wind-up von Malphite R oder Sion R zu setzen, was ok aber vorhersehbar ist. Die riesigen Plays sind W'en auf **Mordekaiser R** (parier ihn, fast eine Sekunde gestunt, und du läufst frei), **Skarner R** (die Suppression wird gecancelt und er gestunt) und **Warwick R** (frame-perfect, aber ein sauberer beendet den Fight). Setz ein Custom Game auf, sag einem Freund, er soll einen dieser Champions spielen, und drill den Parry, bis du aufhörst, vorzucasten und anfängst zu reagieren. Sobald es Reflex ist, dreht jedes 1v1 mit einer Hard-CC-Ult zu deinen Gunsten, sogar bei Item-Nachteil.
