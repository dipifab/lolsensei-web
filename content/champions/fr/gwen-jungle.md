---
title: "Gwen Jungle Build & Guide — Patch 16.9"
slug: "gwen-jungle"
language: "fr"
patch: "16.9"
champion: "gwen"
role: "jungle"
last_updated: "2026-05-02"
description: "Guide Gwen jungle pour League of Legends Patch 16.9 : clear path, timings Scuttle et Drake, routes de gank, build AP bruiser, matchups, power spikes et erreurs courantes."
quick_learn:
  champion_dd_id: "Gwen"
  difficulty: 2
  damage_type: "magic"
  champion_class: "AP Bruiser / Skirmisher"
  abilities:
    - key: "P"
      name: "A Thousand Cuts"
      description: "Les auto-attacks infligent des dégâts magiques bonus selon le HP max de la cible. Gwen récupère du HP via une partie des dégâts faits aux champions."
      dd_spell_id: "Gwen_Passive"
    - key: "Q"
      name: "Snip Snip!"
      description: "Coup de ciseaux en cône, jusqu'à 6 coupes. Le cône central inflige des true damage et réapplique la passive à chaque coupe — clear de camps et anti-tank."
      dd_spell_id: "GwenQ"
    - key: "W"
      name: "Hallowed Mist"
      description: "Crée une zone de brume pendant 4 secondes. Les ennemis hors zone ne peuvent pas la cibler — seuls ceux qui entrent dans la brume le peuvent. Reset défensif et setup de gank."
      dd_spell_id: "GwenW"
    - key: "E"
      name: "Skip 'n Slash"
      description: "Dash court qui donne attack speed, portée d'attaque et on-hit AP quelques secondes. Cooldown remboursé en partie sur touche champion — gap-closer de gank."
      dd_spell_id: "GwenE"
    - key: "R"
      name: "Needlework"
      description: "Lance une volée d'aiguilles qui ralentit et applique la passive. Recastable jusqu'à 2 fois, chaque volée inflige plus de dégâts que la précédente."
      dd_spell_id: "GwenR"
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs assassins AD / divers (Zed, Khazix, Rengar) — la stasis 2.5s couvre le cooldown du W et brise le burst window"
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "vs comps avec 4+ tank/bruiser — remplace Riftmaker pour brûler le HP max en pourcentage dès la minute 1"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs magic CC single-target (R de Lissandra, suppression de Malzahar, stun de Veigar)"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "vs comps de kite (Vayne, Ezreal) — plus d'ability haste et movement speed pour coller aux carries mobiles"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "Clear minute 3-30, finis Riftmaker vers la minute 16, force des fights d'objectif au niveau 6 avec setup W mist. En teamfight, fais fondre la frontline avec Q true damage on-hit dans la fenêtre 4s de mist."
  weakness: "Cible facile à invade niveaux 1-3 (pas de burst, un seul dash). Hard counter par les junglers agressifs early comme Lee Sin et Elise qui punissent son premier clear lent si invade."
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
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision en primaire : Conqueror stack durant les clears longs et les skirmishes Q + auto, donnant dégâts adaptatifs et heal. Triumph récompense les ganks multi-kill, Legend: Alacrity boost la fenêtre on-hit du E, Last Stand ajoute des dégâts à bas HP."
    secondary_rationale: "Resolve en secondaire : Second Wind régénère les HP entre camps et après invades, Overgrowth scale du HP brut pour le late game où les teamfights de Gwen dans la W mist brillent."
    secondary_alternative: "Vs mids AP avec gros poke, swap Resolve pour Sorcery avec Manaflow Band (sustain mana pour les clears Q) et Transcendence (plus d'ability haste pour plus de refunds E et un R plus rapide)."
matchup_draft:
  pick_into:
    - examples: ["amumu", "sejuani", "skarner", "zac"]
      archetype: "Tank junglers sans gros dégâts single-target"
      reason: "Q applique des true damage en pourcentage du HP max qui ignore l'armor ; les tanks ont d'énormes pools HP qu'elle déchire en 3-4 Q lors d'un 1v1 prolongé dans la W mist."
    - examples: ["master-yi", "shaco"]
      archetype: "Assassins squishy sans disengage"
      reason: "La W mist nie leur target lock pendant un all-in. Ils commit, mangent le cône Q true damage en mist, et n'ont pas de second escape parce qu'ils ont déjà brûlé leur dash."
    - examples: ["kha-zix", "rengar"]
      archetype: "Assassins à burst window"
      reason: "Leur burst arrive en 1.5 seconde, mais la W mist les sort du target range au milieu du saut. Une fois leur burst window whiff, Gwen gagne facilement le trade prolongé."
  counterpicks:
    - examples: ["lee-sin", "elise", "nidalee"]
      archetype: "Junglers invader early"
      reason: "Gwen n'a pas de burst aux niveaux 1-3 et un premier clear lent. Les invader entrent dans ses camps et la tuent avant que la passive ne stack."
    - examples: ["kayn", "viego"]
      archetype: "Outscalers à forte mobilité"
      reason: "Tous deux ont des outils de mobilité (Kayn marche dans les murs, Viego dash on-hit) qui ignorent la portée du W mist ; ils outscale le tempo de Gwen en skirmishes late."
    - examples: ["kindred", "graves"]
      archetype: "Junglers ranged qui kite"
      reason: "Kindred et Graves auto-attaquent depuis hors de la portée de protection du W mist. Gwen doit commit son E pour entrer dans leur range, et ils kite son dash avec leurs propres outils de mouvement."
---

## Aperçu

Gwen est une jungler AP bruiser — un champion melee qui scale sur l'Ability Power (la stat AP), encaisse quelques coups de près et gagne les fights longs au lieu de fondre une cible en deux secondes comme le ferait un assassin. En tant que "skirmisher", son jeu est le duel prolongé : elle déchire tanks et bruisers avec les **true damage** (dégâts qui ignorent à la fois l'armor et la magic resist), récupère du HP en combat grâce à la passive, et reset le cooldown de son dash quand elle touche un champion. Son **W mist** est la signature du kit : une zone de 4 secondes qui la rend non-ciblable pour quiconque est en dehors — un outil de gank et de counter-engage unique.

Le game plan est : termine un premier clear propre, conteste le Scuttle (le crabe de la rivière — le tuer donne de la vision et un petit buff de movement speed), gank une lane à faible mobilité vers le niveau 4-5 avec la W mist, puis snowball — transforme une petite avance early en une bien plus grosse — sur le premier drake à la minute 5-7. Gwen est un champion mid-late : elle est plus faible sur les 3 premières minutes, donc ne te fais pas pin au red buff adverse (le petit camp qui donne l'effet burn aux auto-attacks) sans que ton équipe le sache.

## Build Recommandé

**Starting items :** ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** (le pet jungle AP-friendly — brûle les champions adverses avec des on-hit damage pendant les ganks) plus **Smite** (le summoner spell pris par tous les junglers — un coup rapide à cible unique, utilisé pour clear les monstres plus vite et pour voler les objectifs comme Drake ou Baron).

**Core items (dans l'ordre) :**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade depuis le starter jungle. S'auto-évolue vers la minute 3-4 ; les dégâts on-hit du pet ajoutent des dégâts magiques à tes auto-attacks, alignés avec le scaling AP de Gwen.
2. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — ton item principal. Après 2 secondes en combat, une partie de tes dégâts se convertit en true damage (la passive "Void Corruption") et tu obtiens "omnivamp" (récupère du HP sur une portion de tous tes dégâts — sorts comme autos). Conçu pour les fights longs, exactement ce que veut Gwen.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plate (= ignore une partie de la magic resist adverse). Tes dégâts tapent plus fort sur les squishies (champions à faibles défenses, généralement les carries adverses).
4. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — attack speed plus AP plus une passive qui ajoute des dégâts magiques bonus à chaque auto. Combiné au **E** (la fenêtre on-hit de Skip 'n Slash, où chaque auto applique aussi des dégâts magiques AP) tu deviens une tourelle DPS soutenue dans les fights longs.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicateur AP de late game. Transforme Gwen de "DPS tanky" en vraie carry.

**Situational items :**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — vs assassins AD / divers (Zed, Kha'Zix, Rengar — les divers sont des champions qui sautent sur les carries de la backline). L'actif donne 2.5 secondes de stasis (tu deviens non-ciblable mais tu ne peux pas agir non plus) — assez pour briser leur burst window et reset le cooldown du W.
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — vs équipes avec 4+ tank/bruiser. Remplace Riftmaker comme premier item s'il te faut un burn permanent en pourcentage du HP max dès le début de chaque fight.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — vs magic CC (= "crowd control" : stuns, roots, charms, tout ce qui bloque ton champion) à cible unique. **R** de Lissandra, suppression de Malzahar, stun de Veigar. Le shield bloque entièrement un sort hostile.
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — vs comps de kite (Vayne, Ezreal). Plus d'ability haste et movement speed pour coller aux carries mobiles.

**Boots :** Sorcerer's Shoes par défaut. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** si l'équipe adverse a 3+ menaces AD. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** vs gros CC (3+ stuns ou knockups).

**Skill order :** Maxe **Q** en premier (true damage et scaling AP — ton clear principal des camps), maxe **E** en second (cooldown et dégâts on-hit), garde **W** pour la fin. Prends **R** aux niveaux 6, 11, 16. Commence avec **Q** au niveau 1 pour le premier clear le plus sûr (le cône Q touche tout le pack de petits monstres), prends **E** au 2 pour la mobilité entre camps, puis **W** au 3 pour la sécurité avant le Scuttle.

**Runes :** Primaire **Precision** avec **Conqueror** (un keystone qui stack pendant les fights longs pour donner dégâts adaptatifs et heal — parfait pour le playstyle DPS soutenue de Gwen), **Triumph**, **Legend: Alacrity**, **Last Stand**. Secondaire **Resolve** avec **Second Wind** et **Overgrowth**. Stat shards : Adaptive Force, Adaptive Force, Health Scaling.

## Matchups clés

- **Lee Sin :** Dur early, neutre late. Il invade fort aux niveaux 2-3 quand Gwen n'a pas encore le W. Commence le camp opposé à ton spawn (red buff côté bleu ; blue buff côté rouge) pour rester loin de son path d'invade typique. Après le niveau 6, tu l'outscale dans n'importe quel 1v1 dans la W mist.
- **Master Yi :** Matchup de scaling gratuit. Son Alpha Strike (**Q**, un multi-dash qui le rend brièvement non-ciblable) n'ignore pas la passive de ta W mist — il reste coupé de l'extérieur de la mist. Force des fights au niveau 6 autour du drake ; quand il commit avec Highlander (sa **R** ult, qui donne énormément d'attack speed et de movement speed), drop W et spam-Q pendant le duel.
- **Sejuani :** Matchup difficile. Sa **R** est point-and-click (= pas de visée, le sort se verrouille sur la cible) et te fige pendant ton dash **E**. Attends qu'elle utilise sa **R** sur quelqu'un d'autre, puis commit avec W. Achète ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** plus tôt que d'habitude.
- **Kha'Zix :** Égal-favorable. Il essaiera d'evolve "isolation damage" — dégâts bonus quand sa cible n'a pas d'alliés proches — pour chasser tes carries. La W mist brise son target lock pendant un leap (son Q dash). Quand il commit **R** stealth + Q burst, drop W sur la carry plutôt que sur toi, et les dégâts s'annulent.
- **Kindred :** Mauvais matchup. Elle kite (= recule en attaquant, garde la distance) ton dash avec son **Q** dash, et sa zone d'ult (Lamb's Respite, un cercle qui empêche les alliés de mourir dedans) sauve n'importe quel coéquipier que tu dive (= chase sous tour). Skip sa portée d'invade, prends les objectifs sur ses fenêtres de cooldown **R**, et demande de l'aide au top en skirmishes.

## Power spikes & conditions de victoire

- **Niveau 3 :** Premier **W** débloqué. Maintenant tu peux gank les lanes — drop W sur le laner, dash en E, Q + AA en mist. La mist nie un targeting propre sur toi pendant 4 secondes, la fenêtre de protection de gank la plus longue du jungle.
- **Niveau 6 :** Première **R** débloquée. La volée d'aiguilles applique les dégâts magiques en pourcentage HP de ta passive à chaque champion touché, et le slow chaîne tes auto-attacks. Force un drake fight ou un counter-gank vers la minute 8-9 — ton kit atteint son premier gros spike.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minute 16-18) :** Spike omnivamp + true damage. Maintenant tu peux solo-dive la plupart des squishies et survivre aux ganks 1v2 si W est up.
- **![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth complète (~ minute 24-26) :** Spike DPS. Avec **E** actif tes auto-attacks tirent beaucoup plus vite et appliquent l'on-hit AP — le moment d'entrer dans chaque teamfight près de drake / Baron et de laisser ton équipe te peel.
- **3 items + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ minute 30+) :** Phase carry. Tes auto-attacks arrachent 25%+ de HP par coup sur la frontline adverse. Tout teamfight où ton équipe te protège ("peel" les ennemis loin de toi) finit en victoire.

## Erreurs courantes

- **Premier clear du même côté que le jungler adverse.** Le premier clear de Gwen est lent et ses HP early sont faibles ; un invade au second buff signifie souvent un flash perdu ou une mort. Commence opposé au spawn adverse jusqu'à scout son path.
- **Activer W trop tôt en gank.** La mist est une fenêtre de 4 secondes — si tu la drop avant que le laner ne soit lock dans le fight, l'ennemi sort en marchant et il ne te reste rien. Pose d'abord **E** + auto, puis **W** quand la réaction adverse commence.
- **Q sur le camp depuis hors du cône.** La zone de dégâts du **Q** est le centre du cône (le tick true damage). Place-toi avec le camp dans les 30 degrés internes de l'arc — tu triple ton DPS au premier cast et clear ~3 secondes plus vite.
- **Smite-flip d'objectifs sans R.** Le smite-fight de Gwen est médiocre quand **R** est down. Force des objectifs uniquement quand l'ult est up et avec au moins une volée d'aiguilles réservée pour le jungler adverse.
- **Auto-attacker hors portée du R.** Quand **R** est up, tu as 3 volées au total. Reste à 1000 unités du bord du fight pour pouvoir toujours recast **R** sur une cible bas HP au lieu de courir à la mort.

## Conseil avancé

Utilise la **W** mist pour feinter les skillshots (= sorts à viser manuellement en ligne ou en zone) pendant les ganks : quand un laner adverse avec un stun ou root longue portée (Lissandra **E**, Morgana **Q**, Veigar **E**) s'apprête à réagir à ton dash **E**, drop **W** sur le tracé entre toi et lui dès que tu rentres en range. La mist te rend non-ciblable depuis l'extérieur — ils mangent souvent le cast et tu obtiens 4 secondes de dégâts sans CC. Le truc, c'est de timer **W** sur l'animation de wind-up (les frames de cast avant que le sort ne sorte), pas après qu'il a déjà atterri.
