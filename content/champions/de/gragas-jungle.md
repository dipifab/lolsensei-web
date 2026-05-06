---
title: "Gragas Jungle Build & Guide — Patch 16.9"
slug: "gragas-jungle"
language: "de"
patch: "16.9"
champion: "gragas"
role: "jungle"
last_updated: "2026-05-02"
description: "Gragas Jungle Guide für League of Legends Patch 16.9: Clear Path, Gank-Routen, AP-Bruiser-Build, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Gragas"
  difficulty: 2
  damage_type: "magic"
  champion_class: "AP Bruiser / Engage"
  abilities:
    - key: "P"
      name: "Happy Hour"
      description: "Jeder Skill-Cast heilt Gragas um einen kleinen Betrag (interner Cooldown 5 Sekunden). Hält ihn durchs Jungle-Clear, ohne dass er früh zurück zur Base muss."
      dd_spell_id: "Gragas_Passive"
    - key: "Q"
      name: "Barrel Roll"
      description: "Rollt ein Fass an einen Zielpunkt. Recast zündet, sonst explodiert es nach 4 Sekunden selbst. Schaden und Slow skalieren mit der Ladezeit — auf Maximum warten, bevor du zündest."
      dd_spell_id: "GragasQ"
    - key: "W"
      name: "Drunken Rage"
      description: "1 Sekunde Channel, dann 30% Damage Reduction für 3 Sekunden plus bonus magischer Schaden auf den nächsten Auto-Attack. Vor E nutzen, um den Camp-Aggro abzufangen."
      dd_spell_id: "GragasW"
    - key: "E"
      name: "Body Slam"
      description: "Dash, der am ersten getroffenen Gegner stoppt, AOE-Schaden macht und ihn 1 Sekunde stunt. Dein einziger Gap-Closer, dein einziges Hard CC und dein wichtigstes Engage-Tool."
      dd_spell_id: "GragasE"
    - key: "R"
      name: "Explosive Cask"
      description: "Wirft ein Fass, das Gegner vom Einschlagspunkt wegschleudert. Zum Peelen von Allies, Pickoffs auf isolierte Ziele, oder um einen Carry in deine Frontline zu flippen."
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4629", name: "Cosmic Drive" }
    - { dd_id: "6653", name: "Liandry's Torment" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "gegen Assassinen oder Dive-Comps (Zed, Talon, Kha'Zix): Stasis nach R gibt deinem Team Zeit zum Cleanen"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "gegen Single-Target-Magic-CC (Ahri Charm, Lissandra R, Morgana Q): der Spell Shield frisst den Lockdown, der dein R cancelt"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "gegen Teams mit 3+ Hard CC (Leona, Sejuani, Lissandra): Tenacity kürzt Stuns und schützt das W"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "gegen gestapelte Magic Resist oder Healing-Comps (Soraka, Vladimir, Dr. Mundo): Magic Pen plus Healing-Reduction-Zone beim R"
    - dd_id: "3089"
      name: "Rabadon's Deathcap"
      against: "in Snowball-Spielen mit 3+ Items Vorsprung, wenn du Squishys mit Q-E one-shotten willst statt zu engagen"
  base_combo: ["W", "E", "Q", "AA", "R"]
  win_condition: "Nutze R, um gegnerische Carrys (ADC, Mid Mage) bei Objective-Fights in deine Frontline zu flippen; W vor E zum Schaden absorbieren, dann Q in den Fight-Pile werfen, um Riftmakers AP-Burn zu verstärken."
  weakness: "E ist dein einziger Gap-Closer und dein einziger Stun. Verfehlst du oder verbrennst es kurz vor einem Invade beim Camp-Clear, hast du 12+ Sekunden weder Engage noch Escape."
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
      - { dd_id: 8275, name: "Nimbus Cloak", icon_path: "perk-images/Styles/Sorcery/NimbusCloak/6361.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primär statt Schadensbäume: Gragas dived rein und muss die CC-Kette auf ihm überleben. Aftershock proct, sobald Body Slam stunt, und gibt Resistenzen unter Druck. Font of Life, Conditioning, Revitalize halten ihn im Late tanky."
    secondary_rationale: "Sorcery sekundär: Nimbus Cloak gibt einen Movement-Speed-Burst nach Smite oder Flash, sodass du Body Slam aus schwierigen Winkeln chainen kannst, und Transcendence bringt Ability Haste plus einen Auto-Attack-Reset on Takedown, der zu Gragas' langen Skirmishes passt."
    secondary_alternative: "Hat das Gegnerteam 4+ AD-Threats (Zed mid, Tryndamere top, Vayne bot), swap Sorcery zu Precision mit Triumph (Heal on Takedown) und Legend: Tenacity (extra Tenacity, stackt mit Mercury's Treads)."
matchup_draft:
  pick_into:
    - examples: ["master-yi", "kindred", "graves"]
      archetype: "Squishy Carry-Jungler ohne Hard CC"
      reason: "Body Slams Stun bricht ihr Kite-Pattern: Master Yi kann nicht mit Alpha Strike raus, Kindred kann den Auto-Attack-Reset-Tanz nicht spielen, Graves kann sich nicht reposition. R kickt sie dann beim Follow-up-Engage von deinem Carry weg."
    - examples: ["karthus", "amumu", "warwick"]
      archetype: "Jungler mit langem Channel-Ult"
      reason: "Explosive Cask unterbricht Karthus R, Amumu R und Warwick R. Ein einziger Knockback im Mid-Fight cancelt ihren Teamfight-Payload komplett, und Gragas muss nur das Cask-Center nahe am channelnden Ziel platzieren."
    - examples: ["fiddlesticks", "shaco"]
      archetype: "Stealth-basierte Ganker"
      reason: "Ws Damage Reduction frisst ihren Burst-Opener (Fiddlesticks Fear plus Drain, Shaco Backstab), während Body Slam sie aus dem Channel stunt. Ihr Engage braucht uncontested Cast Time — Gragas nimmt ihnen genau das."
  counterpicks:
    - examples: ["lee-sin", "viego", "vi"]
      archetype: "Mobile Skirmisher mit mehreren Gap-Closern"
      reason: "Sie überbrücken Distanz schneller als Gragas' einzelner Body-Slam-Dash und starten den Fight, bevor du W in E machen kannst. Viego, der deinen Frontliner mid-fight possesst, verwandelt deinen Engage zudem in ein 1v2."
    - examples: ["kayn"]
      archetype: "Anti-Tank-Bruiser mit True Damage"
      reason: "Kayn (Rhaast) macht prozentualen Max-HP-True-Damage, der Gragas' Resistenzen und das Damage Reduction von W ignoriert. Ein Late-Game-Tank-Gragas verliert ein 1v1 im River selbst mit voll gestackten Resistenzen."
    - examples: ["nidalee", "elise"]
      archetype: "Long-Range-Poke-Jungler"
      reason: "Nidalees Speere und Elises Spider-Form zerlegen Gragas außerhalb der Body-Slam-Range. Er kann die Distanz nicht schließen, ohne E zu committen — und sobald E weg ist, walken beide Jungler aus dem Trade."
---

## Überblick

Gragas ist ein tanky AP-Bruiser-Jungler (ein Fighter, der AP für Schaden baut, aber genug HP und Resistenzen mitnimmt, um in der Frontline zu überleben), dessen ganzer Game Plan auf einem großen Move basiert: einen gegnerischen Carry (den High-Damage-Champion, um den das Gegnerteam spielt) mit **Explosive Cask (R)** in dein Team zu werfen. Sein **Body Slam (E)** ist der einzige Gap-Closer (Skill, der Distanz schnell schließt) und das einzige Hard CC, also ist gutes Gragas-Spiel geduldig — clear die Camps, spar **E** für den Gank oder den Engage und commit erst voll, wenn **R** up ist. Er hat natürlichen Sustain (passive HP-Regen während der Fights) durch **Happy Hour (P)**, mit dem er ohne Backen clearen kann, und **Drunken Rage (W)** gibt ihm ein Fenster mit 30% Damage Reduction, das den ersten dicken Schadensschub jedes kurzen Skirmishes abfängt.

Deine Win Condition ist der erste Pickoff auf Level 6 — einen isolierten Gegner mit **R** aus der Position kicken für einen Free Kill. Von da an spielt das Team um den nächsten **R**-Cooldown: lauf zum gegnerischen Jungler, wenn er in deinem River steht, oder set up einen Fight am Drake (ein neutrales Monster, das dem Team einen permanenten Stat-Buff gibt), wo ein **R**-Flip den gegnerischen ADC (den Bot-Lane-Marksman, deinen wichtigsten Damage Dealer im Late Game) tötet, bevor der Fight überhaupt startet. Wenn **R** nicht ready ist, mach keinen Fight auf — du bist ein Enabler (ein Champion, der Fights für das Team kreiert), kein 1v1-Duellist.

## Empfohlener Build

**Starter-Items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Standard Ranged-Smite-Jungle-Starter — Gragas' Auto-Attacks zählen für die Starter-Wahl als Ranged.

**Core-Items (in Reihenfolge):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — Quest-Upgrade von Hailblade (auto-evolved um Minute 3-4, sobald genug XP gesammelt). Der AP-Burst-Pet-Companion: jeder Auto-Attack nach einem Cast macht bonus magischen Schaden plus einen Slow, der mit **Q** stackt.
2. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — sustained AP-Burn-Item. Gibt Omnivamp (Life-Steal, das auf alle Schadensarten wirkt, nicht nur Auto-Attacks) und ramped Schaden in langen Fights, perfekt für Gragas' ausgedehnte Engages.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flache Magic Penetration. Nimm stattdessen ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**, wenn das Gegnerteam 3+ Hard-CC-Skills hat.
4. ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — Ability Haste plus Movement Speed nach einem Champion-Hit. Die Mobility lässt dich rund um den Fight reposition und einen zweiten **E**-Stun setzen, sobald der Cooldown wiederkommt.
5. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — Ability Haste plus prozentualer Max-HP-Magic-Burn, der mit Fight-Dauer ramped. Bestraft tanky gegnerische Frontliner (Sejuani, Ornn), wo flat AP an Effizienz verliert.

**Situative Items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — gegen Assassinen oder Dive-Comps. Aktiv direkt nach **R** zünden, um den Follow-up-Burst zu überleben.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — gegen Single-Target-Magic-CC (Ahri Charm, Lissandra **R**). Der Spell Shield frisst den Lockdown-Skill, der sonst dein **R** canceln würde.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — gegen Healing-Stack-Comps (Soraka, Vladimir, Dr. Mundo). Der R-Aktiv legt eine Healing-Reduction-Zone, die mit deinem Knockback zusammenpasst.
- ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — nur, wenn du 3+ Items vorne bist und vom Engage- in den One-Shot-Modus wechseln willst.

**Boots:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** als Default. Wechsle auf ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** gegen schweres Crowd Control (CC), oder ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**, wenn 4+ Gegner physischen Schaden machen.

**Skill Order:** Maxe **E** zuerst (dein Stun und Hauptschaden), **Q** als Zweites (Waveclear und Range-Poke), **W** zuletzt. Punkt in **R** auf Level 6, 11, 16.

**Runen:** Primärer Baum **Resolve** mit **Aftershock**, **Font of Life**, **Conditioning**, **Revitalize**. Sekundär **Sorcery** mit **Nimbus Cloak** und **Transcendence**. Stat Shards: Ability Haste, Adaptive Force, Health Scaling.

## Wichtige Matchups

- **Lee Sin / Viego:** Mobile Skirmisher (Jungler, gebaut für kurze, wiederholte Fights), die dich vor Level 6 outfighten. Contest nicht den ersten Scuttle Crab (der River-Krebs, der dem Killer Vision und einen Movement-Speed-Buff gibt); clear die Camps voll und versuch zu scalen (durch Items und Level stärker werden) bis **R** auf Level 6, wo ein guter Cask-Flip das Matchup sofort ausgleicht.
- **Master Yi / Kindred:** Squishy (wenig HP, keine Resistenzen) Carry-Jungler. Track ihr Pathing auf der Minimap; ist Yi bot side und du top, lauf mit vollem HP runter und such einen Mid-Lane-Gank auf Level 6 — dein **E**-Stun shutdownt seinen Alpha-Strike-Reset-Cycle (untargettable Dash).
- **Karthus:** Scaled in einen Teamfight-Ult-Schrecken. Dein Job ist es, seinen Channel mit **R** zu unterbrechen — track seinen Level-6-Spawn und ping mid, dass du den Ult jedes Mal cancelst, wenn er up ist.
- **Sejuani / Amumu:** Front-to-Back-Tanks. Versuch nicht, sie solo zu out-engagen; lass sie zuerst committen, dann **R** ihren Carry weg von der Wand, die sie aufgebaut haben. Dein **E**-Stun chained mit ihrem CC für einen garantierten Kill auf den, den sie gepinnt haben.
- **Nidalee:** Long-Range-Poke (Chip-Damage außerhalb der gegnerischen Reichweite) bestraft dein Engage-Wind-up. Kauf ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** früh; bewege dich durchs Fog of War (die nicht aufgedeckten grauen Map-Bereiche) in deiner Jungle und face-tanke nie ihre Speere im Lane-River beim Ganken.

## Power Spikes & Siegbedingungen

- **Level 3 (E freigeschaltet):** Erstes Gank-Fenster. Lauf in eine Lane, in der der Gegner **Flash** down hat, **W** vor dem Vision-Eintritt, dann **E** durch eine Wand für den Surprise-Stun. Set up deinen Laner für den Follow-up.
- **Level 6 (erste Explosive Cask):** Power Spike. Mit einer einzigen **R** kannst du einen overextended Laner in deine Tower oder in den Gank deines Junglers schleudern. Erzwing einen guten Fight, bevor du backst.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker fertig (~ Minute 13-15):** Erster großer Fighting-Spike. Sustained AP-Burn plus Omnivamp heißt, du kannst in Skirmishes lange traden; erzwing hier einen Drake-Fight.
- **3 Items + Boots (~ Minute 25-28):** Teamfight-Peak. Aftershock plus ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** plus ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** plus ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** machen dich zum verlässlichsten Engager auf der Map. Group mit dem Team und such Objective-Fights.

## Häufige Fehler

- **E zum Camp-Clear nutzen, wenn ein Invade kommt.** **E** hat 14 Sekunden Cooldown auf Rang 1. Body-Slamst du in einen Krug und der gegnerische Jungler kommt 3 Sekunden später rein, hast du weder Escape noch Stun. Spar **E**, wenn die Minimap den gegnerischen Jungler nahe an deiner Jungle-Grenze zeigt.
- **R als Opening-Schaden raushauen.** **R** ist ein Knockback, kein Damage-Spell. Wirfst du ihn ohne Plan zur Zielplatzierung, verteilst du das Gegnerteam von deinem Follow-up weg. Visualisier immer, wo der gegnerische Carry landen wird, bevor du **R** drückst — schleuder ihn in dein Team, nicht weg.
- **W statt E maxen.** **W** gibt Gragas weder Stun noch Gap-Closer noch Clear Speed — **E** macht alle drei. Maxe **E** zuerst, jede Game.
- **Vor Level 3 ganken.** Ohne **E** hat Gragas keine Möglichkeit, ein Ziel zu fangen, das nicht schon in deiner Tower steht. Skip Pre-3-Ganks; clear mit Two-Camp-Tempo und gank mit dem **W-E**-Combo auf Level 3.
- **Kayn nach seiner Transformation solo dueln.** Kayn-Rhaast macht True Damage, der deine Tank-Stats ignoriert. Vermeide 1v1s in seiner Jungle im Late Game; group mit dem Team für Objectives.

## Fortgeschrittener Tipp

Übe den **R-Flash-Combo**: cast **R** auf die Füße des gegnerischen Carrys, dann **Flash** mid-cast, um den Cask-Punkt neben dein Team zu reposition. Das Cask zündet trotzdem von der geflashten Position aus, also wird ein Carry, der eigentlich in Safe Range stand, in deine Frontline geschleudert, bevor er merkt, dass sich der Winkel geändert hat. Es ist die wertvollste einzelne Gragas-Mechanik im aktuellen Solo Queue und 30 Minuten Practice Tool wert, bevor du sie in Ranked versuchst.
