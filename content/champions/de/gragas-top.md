---
title: "Gragas Top Build & Guide — Patch 16.9"
slug: "gragas-top"
language: "de"
patch: "16.9"
champion: "gragas"
role: "top"
last_updated: "2026-05-02"
description: "Gragas Top Lane Guide für League of Legends Patch 16.9: Starter-Items, AP-Bruiser-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein Schlusstipp."
quick_learn:
  champion_dd_id: "Gragas"
  difficulty: 2
  damage_type: "magic"
  champion_class: "AP Bruiser / Skirmisher"
  abilities:
    - key: "P"
      name: "Happy Hour"
      description: "Jeder Skill heilt Gragas ein wenig (interner Cooldown 5 Sekunden). Gratis-Sustain in der Lane, mit dem er Poke-Matchups langfristig gewinnt."
      dd_spell_id: "Gragas_Passive"
    - key: "Q"
      name: "Barrel Roll"
      description: "Rollt ein Fass zu einem Punkt. Recast zum Zünden, sonst explodiert es nach 4 Sekunden. Schaden und Slow skalieren mit Ladezeit — vor dem Detonieren auf Maximum warten."
      dd_spell_id: "GragasQ"
    - key: "W"
      name: "Drunken Rage"
      description: "1-Sekunden-Channel: 30% Damage Reduction für 3 Sekunden plus Bonus-Magieschaden auf den nächsten Auto-Attack. Wichtigstes Trade-Tool in der Lane."
      dd_spell_id: "GragasW"
    - key: "E"
      name: "Body Slam"
      description: "Dash, der am ersten Gegner stoppt, AOE-Schaden macht und 1 Sekunde stunnt. Gap-Close, Escape und einziger Hard-CC — niemals zum Wave-Clearen verwenden."
      dd_spell_id: "GragasE"
    - key: "R"
      name: "Explosive Cask"
      description: "Wirft ein Fass, das Gegner vom Mittelpunkt wegschleudert. In der Top Lane, um den Laner in den Gank deines Junglers zu schmeißen oder einen Tower-Dive zu peelen."
      dd_spell_id: "GragasR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "4629", name: "Cosmic Drive" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "gegen AD-Assassinen oder Split-Push-Duellisten (Camille, Fiora): Stasis verwehrt das Execute-Fenster nach ihrem Dash"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "gegen Single-Target Magie-CC (Lissandra R, Malzahar Suppression): Spell Shield blockt das Lockdown"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "gegen AD-lastige Lanes (Renekton + Kha'Zix, Aatrox + Lee Sin): physische Schadensreduktion schlägt Tenacity"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "gegen Heal-Stacking-Comps (Aatrox, Vladimir, Dr. Mundo): Magic Pen plus Healing-Reduction-Zone auf der R"
  base_combo: ["W", "AA", "Q", "E"]
  win_condition: "Out-sustain Melee-Bruiser in der Lane mit Happy Hour und der W-Damage-Reduction; erreiche Riftmaker um Minute 13, dann suche einen R-Flip in den Gank des Junglers, um einen Turm oder einen Drake-Fight zu snowballen."
  weakness: "Long-Range-Artillerie und Ranged-Top-Laner (Vayne, Quinn, Teemo, Kennen) chippen dich außerhalb der Q-Range. Ohne E hast du weder Engage noch Escape — E für Harass zu gönnen heißt die Lane wegzuwerfen."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8446, name: "Demolish", icon_path: "perk-images/Styles/Resolve/Demolish/Demolish.png" }
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
    primary_rationale: "Resolve statt Sorcery: Gragas tradet melee und braucht HP, nicht Burst. Aftershock proct beim Body-Slam-Stun und gibt Resistenzen. Demolish wandelt einen Back in eine Tower-Plate um, Conditioning und Revitalize skalieren ins Late."
    secondary_rationale: "Sorcery sekundär: Manaflow Band hält das Mana fürs Q-Poke-Spam durch die gesamte Laning Phase, und Transcendence schiebt den Ability Haste über den Cosmic-Drive-Spike für kürzere E- und R-Cooldowns in der Side Lane."
    secondary_alternative: "Gegen Ranged-Top-Laner (Vayne, Teemo, Quinn), wo Sustain wichtiger ist als Schaden, swappe Sorcery zu Inspiration mit Biscuit Delivery (Gratis-Tränke) und Time Warp Tonic (Trank-Sustain plus Movement Speed) für eine Heal-Build."
matchup_draft:
  pick_into:
    - examples: ["darius", "garen", "sett"]
      archetype: "Melee-Bruiser ohne Dash"
      reason: "Sie müssen vorlaufen, um zu last-hitten; Gragas' Q-W-AA-Poke chippt sie aus der All-In-Range, und die W-Damage-Reduction schwächt ihren Pre-6-Commit gegen Gragas' Counter-Trade."
    - examples: ["kennen", "vladimir"]
      archetype: "Squishy AP-Top-Laner"
      reason: "Drunken Rages flache Damage Reduction schluckt Kennens Stun-Burst-Combo und Vladimirs Q-Poke. Gragas kann mit E-AA-Q kontern, während ihre Ressourcen im Trade-Fenster gebunden sind."
    - examples: ["mordekaiser", "ryze"]
      archetype: "Channel-Mages mit Skill-Shots"
      reason: "Body Slam unterbricht Mordekaisers Q-Wind-Up und Ryzes Combo-Channel, dann läuft Gragas mit der W-Damage-Reduction raus. Beide verlieren Lane-Priorität, sobald ihr Cast-Cycle gebrochen ist."
  counterpicks:
    - examples: ["vayne", "quinn", "teemo"]
      archetype: "Ranged-Top-Laner"
      reason: "Sie auto-attacken Gragas außerhalb der Q-Range und laufen vom E-Commit weg. Ohne Mittel zum wiederholten Gap-Close wird Gragas vor Level 3 auf halbe HP gechippt und zum Backen gezwungen."
    - examples: ["fiora", "camille"]
      archetype: "Bruiser mit True Damage und Execute-Druck"
      reason: "Fioras Vitals machen True Damage, der Gragas' Resistenzen ignoriert; Camilles R isoliert ihn für ein prozentuales True-Damage-Execute. Gragas' Tank-Stats helfen 1v1 gegen keinen von beiden."
    - examples: ["malphite", "ornn"]
      archetype: "Hard-Engage-Tank-Top-Laner"
      reason: "Ihre CC-Kette hält länger als das Aftershock-Fenster. Sie matchen Gragas' Engage mit dem eigenen und überskalieren ihn ins Late dank eingebauter Resistenz-Steroids."
---

## Überblick

Gragas Top ist ein AP Bruiser (ein Fighter, der AP für Schaden baut, aber genug HP stackt, um Front-Line-Dives zu überleben), der die Lane durch Poke (Chip-Schaden aus sicherer Distanz) und Sustain (passive HP-Regen im Kampf) gewinnt und dann um **Explosive Cask (R)** in eine Teamfight-Engage-Rolle übergeht. **Happy Hour (P)** gibt ihm passive Heilung bei jedem Skill, sodass ein Q → W → AA (Auto-Attack) Trade-Pattern den gegnerischen Laner aussaugt, ohne Gragas auszubluten. **Drunken Rage (W)** ist ein 30%-Damage-Reduction-Fenster — sein am meisten unterschätztes Tool, weil es ihm erlaubt, den All-In (vollen Schaden-Commit) des Gegners zu absorbieren und mit einem Gratis-**E**-Stun zu countern.

Game Plan: Bullye Melee-Lanes mit Q-Poke bis Level 6, dann suche **R**-Flips, die den gegnerischen Laner in den Gank deines Junglers oder unter deinen Turm werfen. Von dort scale (wachse mit Items und Levels) mit **Riftmaker** und **Cosmic Drive**, group bei Minute 25 und spiele die Rolle des primären Engages (der Champion, der den Kampf eröffnet). Vermeide Ranged-Matchups — wenn du in einem fest hängst, spiele passiv, farme unter dem Turm mit Q und ruf den Jungler.

## Empfohlener Build

**Start-Items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Standard-Sustain-Start, der dir Q-Poke aus Ranged-Matchups lange genug abnimmt, um Riftmaker zu erreichen.

**Core-Items (in Reihenfolge):**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — anhaltendes AP-Burn-Item mit Omnivamp (Lifesteal, der auf alle Schadensarten wirkt, nicht nur auf Auto-Attacks). Gragas' lange Trades machen daraus den stärksten Single-Item-Spike seines Kits.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — Tenacity reduziert Stun-Dauer. Standard-Schuhe in der Top Lane, weil die meisten Matchups mindestens eine CC-Bedrohung mitbringen (Renekton-Stun, Camille-Root, Sett-Stun).
3. ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — Ability Haste plus Movement-Speed-Steroid nach Schaden an einem Champion. Lässt dich um den Kampf weben, um einen zweiten **E**-Stun zu landen, bevor der erste Cooldown durch ist.
4. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — Ability Haste plus prozentualer Max-HP-Magieschaden-Burn, der mit Kampfdauer rampt. Viertes Item gegen jedes Team mit zwei oder mehr Frontlinern.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — Late-Game-Multiplikator. Fünftes Item, sobald das Team gruppiert ist und du auf Teamfight-Burst statt Splitpush gehst.

**Situative Items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — gegen AD-Assassinen (Zed, Talon-Flank) oder Split-Push-Duellisten (Camille, Fiora). Aktiv direkt nach **R** drücken, um deren Execute-Fenster zu verwehren.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — gegen Single-Target Magie-CC (**R** von Lissandra, Malzahar-Suppression). Der Spell Shield blockt das Lockdown, das sonst deinen **R**-Flip canceln würde.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — gegen AD-lastige Lanes (Renekton + AD-Jungler). Ersetzt Mercury's Treads, wenn keine größere CC-Bedrohung da ist.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — gegen Heal-Stacking-Comps. Der R-Active legt eine Healing-Reduction-Zone an deinen Knockback gekoppelt.
**Schuhe:** ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** sind Standard. Wechsle zu ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** in AD-lastigen Spielen oder ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**, wenn die Lane One-Shot-freundlich ist und du auf eine Damage-First-Build wechseln willst.

**Skill Order:** Maxe **E** zuerst (dein Stun und Hauptschaden), **Q** als Zweites (Poke und Waveclear), **W** zuletzt. Punkte in **R** auf Level 6, 11, 16.

**Runen:** Primär **Resolve** mit **Aftershock**, **Demolish**, **Conditioning**, **Revitalize**. Sekundär **Sorcery** mit **Manaflow Band** und **Transcendence**. Stat Shards: Adaptive Force, Adaptive Force, Health Scaling.

## Wichtige Matchups

- **Darius:** Lauf nur zum Last-Hit vor, wenn **W** up ist; poke ihn vor jeder Minion-Wave mit Q. Sein All-In ist pre-6 brutal — lass ihn niemals E-Q in dich ketten, während du Aftershock-Bait stehst.
- **Renekton:** Vermeide Level-1-2-Trades, wo sein Fury-Stun den HP-Vorteil snowballt. Match ihn auf Level 3 mit **W-E**-Counter-Engage; sobald er den W-Stun committed, schluckt deine Damage Reduction den Burst und ihr tradet gleich.
- **Vayne:** Hard Counterpick (ein Champion, der speziell gewählt wird, um deinen in der Lane zu schlagen). Spiele unter dem Turm mit Q-Poke, frage den Jungler früh nach Ganks (Level 3-4) und plane den ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** Rush, um ihre verstärkten Auto-Attacks nach dem Dash zu mitigieren (ihr Q lässt sie tumblen und den Armbrustschuss nachladen).
- **Camille:** Vermeide Sidelane-1v1s, nachdem sie ihr erstes Core-Item fertig hat (Minute 11-13); ihr R isoliert dich (schneidet dich von deinen Mitspielern in einer Wand ab) für ein prozentuales Execute. Group mit dem Team und erzwinge Teamfights, in denen ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** ihr R-Damage-Fenster verwehrt.
- **Malphite:** Pre-6 ausgeglichen, post-6 hart skalierend, weil seine **R** deine matcht und sein Rüstungs-Stack deinen AP wegsteckt. Roame mid mit **R**-Flips, wenn sein Ult down ist — das ist dein einziges Fenster, das Matchup zu kippen.

## Power Spikes & Siegbedingungen

- **Level 3 (E unlocked):** Erstes All-In-Fenster. Mit **W**-Damage-Reduction up und **E**-Stun bereit kannst du jeden Melee-Gegner bestrafen, der zu weit zum Last-Hitten vorläuft.
- **Level 6 (erstes Explosive Cask):** Power Spike. Set up einen **R**-Flip in den Jungler-Gank — werfe den gegnerischen Top von seiner Turmlinie auf deine River-Seite für einen Free Kill.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker fertig (~ Minute 13-15):** Lane-flippender Spike. Anhaltender Burn plus Omnivamp wandelt ausgedehnte Trades in HP-Gewinn; erzwinge ein 1v1, wenn du nicht in einem Counter-Matchup steckst.
- **3 Items + Schuhe (~ Minute 24-28):** Teamfight-Peak. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** plus ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** plus ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** machen Gragas zur fast unkillbaren Engage-Bedrohung. Group mit dem Team für Objective-Fights.

## Häufige Fehler

- **E zum Wave-Clear nutzen.** **E** ist Gap-Close, Escape und einziger Stun. Wenn du Body Slam in einen Minion zum Pushen jagst, hat der gegnerische Laner ein gratis 14-Sekunden-Fenster, um dich zu all-innen. Nutze **Q** zum Pushen; **E** nur für Engages und Escapes.
- **R als Eröffnungsschaden werfen.** **R** zerstreut das gegnerische Team. Wenn du sie ohne Platzierungsplan castest, schmeißt du den Laner weg von deinem Follow-up. Visualisiere immer, wo das Ziel landen soll, bevor du **R** drückst — werfe es in dein Team oder deinen Turm, niemals in die gegnerische Frontline.
- **Traden ohne W bereit.** Jeder faire Gragas-Trade beginnt mit **W**. Ohne das 30%-Damage-Reduction-Fenster gewinnt jeder Melee-Bruiser den Trade. Wenn **W** auf Cooldown ist, last-hitte und disengage.
- **Force-Gank solo mit R.** Solo-**R**-Flips ins gegnerische Team ohne Follow-up sind Throws. Das Fass repositioniert das Ziel, aber Gragas allein kann keinen vollen Carry töten — es ist ein Enabler fürs Team, kein Duell-Finisher.
- **W statt E maxen.** **W** gibt Gragas weder Stun, Gap-Close noch Clear-Speed — **E** macht alle drei. Maxe **E** in jedem Spiel zuerst.

## Fortgeschrittener Tipp

Übe den **R-Flash-Combo**: Caste **R** auf die Füße des gegnerischen Laners, dann **Flash** mitten im Cast, um den Fass-Mittelpunkt neben dein Team oder deinen Turm zu repositionieren. Das Fass detoniert von der geflashten Position, sodass ein Ziel auf der eigenen Turmlinie unter deinen Turm geflippt werden kann für einen Free Kill. Das ist die Gragas-Mechanik mit dem höchsten Skill Ceiling und verdient eigene Practice-Tool-Reps, bevor du sie in Solo Queue Ranked versuchst.
