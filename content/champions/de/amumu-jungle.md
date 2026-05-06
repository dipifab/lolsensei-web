---
title: "Amumu Jungle Build & Guide — Patch 16.9"
slug: "amumu-jungle"
language: "de"
patch: "16.9"
champion: "amumu"
role: "jungle"
last_updated: "2026-04-29"
description: "Amumu Jungle Guide für LoL Patch 16.9: Clear-Path, AP-Tank-Build (magic damage + tank stats), Gank-Timing, wichtige Matchups, R-Setups und häufige Fehler."
quick_learn:
  champion_dd_id: "Amumu"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Engage"
  abilities:
    - key: "P"
      name: "Cursed Touch"
      description: "Basic Attacks fluchen Gegner. Cursed Targets fressen bonus true damage von jedem magic damage, der sie trifft — die Spells deines Teams hauen härter rein."
      dd_spell_id: "Amumu_Passive"
    - key: "Q"
      name: "Bandage Toss"
      description: "Linearer Skillshot mit langer Reichweite, der Amumu zum ersten getroffenen Gegner zieht und ihn stunt. Zwei Charges — eine für Engage, eine für Follow-up oder Escape."
      dd_spell_id: "BandageToss"
    - key: "W"
      name: "Despair"
      description: "Toggle-Aura, die jede Sekunde max-HP magic damage auf nahe Gegner tickt und Curse refreshed. Verbraucht Mana solange aktiv — schalte sie außerhalb des Kampfes aus."
      dd_spell_id: "AuraofDespair"
    - key: "E"
      name: "Tantrum"
      description: "Passiv: weniger physical damage. Aktiv: kurzreichweitiger AOE-Burst. Cooldown sinkt jedes Mal wenn Amumu getroffen wird, also spamme sie in langen Fights."
      dd_spell_id: "Tantrum"
    - key: "R"
      name: "Curse of the Sad Mummy"
      description: "Massiver AOE-Stun, der jeden Gegner um Amumu festsetzt und Curse anwendet. Der Sinn des Kits — jeder Teamfight startet, wenn dieser Spell sitzt."
      dd_spell_id: "CurseoftheSadMummy"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "W" }
    - { level: 15, key: "W" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "1103", name: "Mosstomper Seedling" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3068"
      name: "Sunfire Aegis"
      against: "gegen Comps mit vielen melee Bruisern (Sett, Darius, Olaf): die Burn-Aura stackt mit W und das Bonus-Armor hält den Frontline-Fokus aus"
    - dd_id: "8020"
      name: "Abyssal Mask"
      against: "wenn 3+ Gegner magic damage machen: der AOE-MR-Shred verstärkt jeden Spell deines Teams auf cursed Targets"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "gegen Burst-Comps, die dich auf R fokussen (Zed, LeBlanc, Syndra): Stasis lässt das Team nachsetzen, während du den Fokus überlebst"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "gegen Single-Target-Magic-CC, das Fights öffnet (Ahri Charm, Lissandra R, Morgana Q): der Spellshield blockt den Engage auf dich"
  base_combo: ["Q", "R", "W", "E"]
  win_condition: "Lande Q aus dem Nebel auf ein Key-Target, R, um alle in Reichweite festzusetzen, dann steh auf der Backline mit W, das max-HP-Damage tickt, während Tantrum bei jedem Treffer cooldownt."
  weakness: "Vorhersagbare Engage-Tools mit langem Cooldown. Verfehlt Q oder wird R von einem Cleanse Summoner entfernt, hat Amumu kein Follow-up — er wird gekitet bis beide zurück sind und trägt 90+ Sekunden nichts bei."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["yasuo", "kennen", "katarina", "miss-fortune"]
      archetype: "Gruppierte Teamfight-Comps mit AOE-Schaden"
      reason: "Amumus R fängt alle in einem engen Radius. Comps, die geballt fighten wollen (Yasuo + Kennen mit AOE-Ults, Katarina, die zwischen Targets springt, Miss Fortune Bullet Time), fressen den Stun gemeinsam und füttern ihren eigenen AOE über das Curse-Passiv."
    - examples: ["jinx", "kog-maw", "ashe", "vayne"]
      archetype: "Immobile Carries ohne eingebauten Escape"
      reason: "Q ist ein 1100-Reichweite-Skillshot, der Amumu zum ersten getroffenen Target zieht. Carries ohne Dash oder Blink werden aus der Position gerissen, sobald sie einen Schritt nach vorne machen, um die Wave zu last-hitten."
    - examples: ["brand", "syndra", "ryze", "viktor"]
      archetype: "AP-Mitspieler, die deinen Engage snowballen"
      reason: "Cursed Touch verwandelt magic damage in bonus true damage. Ein AP-lastiges Team konvertiert ein Q-R in instant Kills, weil jeder folgende Spell härter zuschlägt."
  counterpicks:
    - examples: ["fiora", "tryndamere", "yone"]
      archetype: "Mobile Bruiser mit Parry, Immunity oder Dashes"
      reason: "Fiora W parriert den Q-Stun und reflektiert ihn, Tryndamere R ignoriert den Damage, den dein W tickt, und Yones Q3 dasht ihn aus Tantrum-Reichweite. Sie überleben den Engage und drehen den Fight."
    - examples: ["xerath", "nidalee", "varus"]
      archetype: "Long-Range-Artillerie ohne Commitment"
      reason: "Sie poken aus über 1100 Q-Range. Amumu muss in ihren Damage laufen, nur um Engage zu drohen, und ein verfehltes Q heißt 25-30 Sekunden frei für sie zum Pushen von Lane oder Objective."
    - examples: ["ezreal", "tristana", "kalista"]
      archetype: "Marksmen mit eingebauten Escapes"
      reason: "Ezreal E, Tristana W und Kalistas Hop-Reset bringen den Carry nach gelandetem Q aus dem R-Radius. Curse wird verschwendet, weil sich der Carry repositioniert, bevor das Team den Stun nachsetzen kann."
---

## Überblick

Amumu ist der einfachste Engage-Jungler im Spiel: lauf in den Fog of War (der unsichtbare Map-Teil außerhalb der eigenen Vision), wirf **Bandage Toss (Q)**, drück **Curse of the Sad Mummy (R)** und lass dein Team den Damage abfeuern. Sein Kit hat einen einzigen Job — den Fight zu deinen Bedingungen starten — und er macht das aus einer längeren Reichweite als fast jeder andere Engage dank des 1100-Range-Pulls. **Cursed Touch (Passiv)** multipliziert dann deine AP-Mitspieler, indem es ihre Spells in bonus true damage auf jedem Cursed Target verwandelt.

Der Trade-off: **R** sitzt auf 100-150s Cooldown und **Q** ist dein einziger Setup-Tool. Verfehlst du sie, verbringst du 90 Sekunden mit Kiting — also dreht sich dieser Guide darum, *den richtigen Fight* zu wählen statt jeden Gank zu erzwingen. Game Plan: Clear, hit Level 6 und übersetze danach jedes R für die nächsten 25-30 Minuten in eine Kill oder ein Objective.

## Empfohlener Build

**Starter-Items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Hailblade ist der Jungle-Starter: damit damaged man neutrale Monster schnell und applied einen kurzen Slow auf gegnerische Champions. Refillable Potion ist eine Heilpotion, die in der Base gratis nachfüllt — du sparst Gold auf den Chip-Damage aus den Camps (die neutralen Monstergruppen, die du in der Jungle farmst).

**Core-Items (in Reihenfolge):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — dein wichtigstes Item. Der %max-HP-Burn-Passive doppelt mit **W** und schmilzt Tanks, die in deiner Aura stehen wollen. Kauf das jede Game.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — Default-Boots: sie geben **Tenacity** (ein Stat, der die Dauer von Stuns und Slows auf dir verkürzt) — wichtig für einen Engage-Champ, der nach gelandetem R weiterlaufen muss. Wechsle auf ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**, wenn das Gegnerteam 3+ AD-Threats und keine harte CC-Chain hat.
3. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — Omnivamp (du heilst von allem Damage, den du machst) plus ein Passiv, das nach 3 Sekunden im Kampf einen Teil deines Damages in true damage konvertiert. Passt perfekt zur dauerhaften **W**-Aura.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — Late-Game-Scaling-Multiplikator. Mit Liandry's + Riftmaker online drückt Deathcap deinen **W**-Aura-Damage von "nervig" zu "ich kann hier keine 2 Sekunden stehen".

**Situative Items:**

- ![Sunfire Aegis](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3068.png) **Sunfire Aegis** — gegen Comps mit vielen melee Bruisern (Nahkampf-Champs, die Damage und Aushalten mischen, z.B. Sett, Darius, Olaf). Die Feueraura stackt mit **W** für doppelten AOE und gibt Bonus-Armor.
- ![Abyssal Mask](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/8020.png) **Abyssal Mask** — wenn 3+ Gegner magic damage machen. Reduziert die magic resist nahegelegener Gegner, sodass jeder Spell, den dein Team auf Cursed Targets landet, härter trifft.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — gegen Burst-Comps, die dich im Moment des R-Treffers fokussieren (Zed, LeBlanc, Syndra). Stasis (ein 2.5s-Fenster, in dem du keinen Damage nimmst und nicht handeln kannst) hält dich am Leben, während dein Team den Fight beendet.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — gegen Single-Target-Magic-CC-Chains mit langer Dauer (Ahri Charm in All-in, Lissandra R, Morgana Q). Der Spellshield (eine einmalige Barriere, die den nächsten auf dich gerichteten Spell blockt) frisst den Engage.

**Boots:** ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** ist Default. Plated Steelcaps nur in AD-lastige Comps ohne große CC-Chain.

**Skill-Order:** Maxe **E** zuerst (Clear-Speed und Damage in langen Fights), **Q** als zweites (Gank-Threat und niedrigerer Stun-Cooldown), **W** zuletzt. Punkt in **R** auf Level 6, 11, 16.

**Runen:** Primär **Resolve** mit **Aftershock** (gibt dir Bonus-Armor und magic resist für 2.5 Sekunden, wenn ein Q-Stun oder R landet — die Engage-Rune des Spiels), **Font of Life** (dein CC markiert Gegner, dein Team heilt sich beim Treffen), **Conditioning** (Bonus-Resistenzen nach Minute 12), **Revitalize** (boostet Shields und Heals auf dir). Sekundär **Sorcery** mit **Manaflow Band** (Mana-Sustain, damit du **W** in Clears toggled lassen kannst) und **Transcendence** (Bonus-Ability-Haste — ein Stat, der alle Spell-Cooldowns senkt).

## Wichtige Matchups

- **Lee Sin / Elise:** Early-Game-Jungler, die deine schwache Seite invaden. Tracke sie mit **Vision Wards** (platzierte Items, die ein kleines Map-Areal ~90 Sekunden enthüllen) auf Raptors und Red Buff (Camps deiner eigenen Jungle). Vermeide 1v1-Invades pre-3; mach einen Full Clear (jedes Camp einmal töten) und geh dann zum Scuttle (der Flusskrabbe, die beim Tod Vision gibt), damit sie Tempo verlieren beim Suchen.
- **Master Yi / Karthus:** Scaling-Jungler. Erzwing Fights und Objectives (Drake auf Bot-Side, Rift Herald auf Top-Side, Baron später) vor Minute 18 — du scalest gut, sie scalen besser. Jedes R sollte den gegnerischen Carry treffen (den Marksman oder Burst-Mage in der Backline, der den meisten Team-Damage macht), nicht den Frontline-Tank — sonst hat das Gegnerteam nichts zum Peelen.
- **Hecarim / Volibear:** Spiegel-Engage, schnellerer Clear. Versuch nicht, sie zu outclearen; spiel um deine Laner und such einen Gank auf einer Lane mit Prio (Prio = die Lane, die zum Gegner pusht, sodass der Laner für ein paar Sekunden weg kann ohne Minions zu verlieren) bis Minute 4.
- **Maokai / Sejuani:** Tank-Jungler mit eigenem AOE-Engage. Wer R zuerst landet, gewinnt den Teamfight. Hebe **Q** auf, bis sie commit haben, damit dein Stun auf ihren chained (der Gegner bleibt für die Gesamtdauer beider Stuns blockiert).
- **Kha'Zix / Rengar:** Assassins, die deine Backline bursten. Body-block für deine Carries (stell dich buchstäblich zwischen den Assassin und deinen Damage Dealer, um die Hits zu schlucken) statt vor dem Gegnerteam zu stehen — deine **W**-Aura plus **E** Tantrum bestrafen sie für den Commit auf ein Target neben dir.

## Power Spikes & Siegbedingungen

- **Level 3:** Mit **E**, **W** und **Q** alle freigeschaltet ist deine erste Gank-Threat (der Überraschungsbesuch des Junglers in einer Lane für eine Kill) real. Schau auf die Lane mit dem niedrigsten Gegner-HP und dem stärksten Follow-up-CC; eine Q-W-AA-E-Rotation (AA = Auto-Attack) unter einem snowballenden Allied (ein Vorteil, der mit der Zeit wächst: Kill → Gold → Item → mehr Kill) ist meistens eine Kill.
- **Level 6:** Erste **Curse of the Sad Mummy**. Das ist der größte Power Swing des Spiels für Amumu. Find einen Fight innerhalb von 30 Sekunden nach dem Hit auf 6 — gank eine Lane, contest Scuttle oder set-up den ersten Drake-Fight.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment fertig (~ Minute 12-14):** Dein **W** wird vom Poke zur echten Threat. Fights um Drake oder Rift Herald mit **W**, das auf ein Contest-Target tickt, gewinnt das Objective ohne **R** zu drücken.
- **3-Item-Spike (~ Minute 22-26):** Liandry's + Riftmaker + Deathcap online. R-Cooldown ist kurz genug, um zweimal pro Baron-Timer zu teamfighten. Erzwing jedes Objective; das ist dein Peak.

## Häufige Fehler

- **Q on-cooldown ohne Setup werfen.** Eine nackte Q verschwendet deinen einzigen Engage-Tool. Halt Q zurück, bis der Gegner schon slowed, rooted (kann sich nicht bewegen) oder von einem Allied gehookt ist — z.B. Morgana Q trifft → deine Q drauf ist garantiert. Q als Scout-Tool heißt: nichts in der Hand, wenn der echte Fight kommt.
- **R drücken, sobald du am Fight ankommst.** R ist AOE *zentriert auf Amumu*. Drückst du sie 200 Units zu kurz, stunst du keinen und verschwendest den 100-150s Cooldown. Lauf rein, bis du in ihrer Backline stehst, *dann* R.
- **W außerhalb des Kampfes toggled lassen.** **Despair** verbraucht 8 Mana pro Sekunde, auch ohne Gegner in der Nähe. Du erreichst Minute 8 ohne Mana für einen Q-Stun auf einen sauberen Gank. Schalte sie aus in der Sekunde, in der Fight oder Clear endet.
- **Tantrums Cooldown-Reset ignorieren.** Das **E**-Passiv senkt seinen eigenen Cooldown jedes Mal, wenn du eine Basic Attack abkriegst. In einem langen Fight gegen Melee-Gegner kannst du **E** alle 1-2 Sekunden drücken — bleib in ihrer Attack-Range und spamme.
- **R auf einen Tank statt auf den Carry.** R ist eine Teamfight-Ability. Ja, der Tank ist näher, ja, du landest sie auf ihm — aber dein Team will den Stun auf dem Carry. Spar **Flash** (der Summoner Spell, den jeder Champion picken kann, der dich einmal alle ~5 Minuten kurze Strecke teleportiert), um um den Fight zu flanken (von der Seite oder hinten reinzukommen, nicht von vorne) und auf der Backline zu engagen, nicht auf dem Front-Tank.

## Fortgeschrittener Tipp

Übe das **Flash + Q**-Combo am Target Dummy. Der Trick: cast Q zuerst, *dann* Flash mitten im Cast in Richtung Target. Die Pull-Animation der Q snappt auf deine Post-Flash-Position, was dir ein um 425 Units kürzeres Projektil gibt, das fast unmöglich zu dodgen ist. Das verwandelt Q von einem 1100-Range-Skillshot in einen Point-Blank-garantierten-Stun und ist der Play, der Amumu-Mains von One-Tricks trennt: er erlaubt dir, durch den Nebel auf eine Backline zu flanken und Q auf ein bewegtes Target zu connecten, das den Engage nie kommen sah.
