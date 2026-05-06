---
title: "Kennen Top Build & Guide — Patch 16.9"
slug: "kennen-top"
language: "fr"
patch: "16.9"
champion: "kennen"
role: "top"
last_updated: "2026-05-05"
description: "Guide Kennen top lane pour League of Legends Patch 16.9 : starter, build AP bruiser, matchups clés, power spikes, erreurs courantes et un conseil avancé."
quick_learn:
  champion_dd_id: "Kennen"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Teamfight Engager"
  abilities:
    - key: "P"
      name: "Mark of the Storm"
      description: "Chaque sort de Kennen pose un stack de Mark sur la cible. À 3 stacks, elle est stun. C'est le moteur du kit : chaque combo vise le triple stack."
      dd_spell_id: "Kennen_Passive"
    - key: "Q"
      name: "Thundering Shuriken"
      description: "Skillshot linéaire qui inflige des dégâts magiques et applique 1 stack de Mark. Le poke à distance et le premier stack facile sur la cible."
      dd_spell_id: "KennenShurikenHurlMissile1"
    - key: "W"
      name: "Electrical Surge"
      description: "Passive on-hit (effet au coup) : toutes les 5 autos, dégâts magiques bonus et 1 Mark. Active : détone un burst magique sur tout ennemi proche déjà marqué."
      dd_spell_id: "KennenBringTheLight"
    - key: "E"
      name: "Lightning Rush"
      description: "Dash court à travers les unités, applique 1 Mark et rend de l'energy à l'impact. À la fin, Kennen gagne de l'attack speed quelques secondes. Outil de mobilité et de repositionnement."
      dd_spell_id: "KennenLightningRush"
    - key: "R"
      name: "Slicing Maelstrom"
      description: "Channel AOE autour de Kennen. Chaque tick inflige des dégâts magiques et applique 1 Mark aux ennemis dedans. Sur des ennemis groupés, stun toute l'équipe en 2 secondes."
      dd_spell_id: "KennenShurikenStorm"
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
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "4633"
      name: "Riftmaker"
      against: "contre fights longs et bruisers top (Sett, Darius, Mordekaiser) : sustain en fight et true damage"
    - dd_id: "4645"
      name: "Shadowflame"
      against: "contre back line squishy sans Magic Resist : pénétration magique extra sous 35% HP synchronisée avec R"
    - dd_id: "3135"
      name: "Void Staff"
      against: "dès qu'une priority target adverse achète un item de Magic Resist"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contre ennemis avec gros healing (Vladimir top, Dr. Mundo, Yorick)"
  base_combo: ["Q", "E", "R", "W", "AA"]
  win_condition: "Lancer Flash + R dans la back line (la ligne des ADC et mages adverses) en teamfight pour triple-stacker la passive sur plusieurs cibles. Stun AOE + W detonate gagne le fight."
  weakness: "Aucun CC point-and-click hors R, et la R est un channel auquel il faut s'engager : stuns instantanés ou knock-up (Pantheon W, Camille E2) cancellent l'ulti avant que les stacks ne tombent."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8139, name: "Taste of Blood", icon_path: "perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination primary : Electrocute proc avec Q + W detonate + auto, burst à chaque triple stack. Taste of Blood donne du sustain en lane, Sixth Sense révèle les wards adverses en side lane (clé pour le flank), Ultimate Hunter raccourcit le cooldown de R."
    secondary_rationale: "Resolve secondary : Kennen veut plonger en mêlée avec la R, donc Second Wind régénère vos HP sous le poke en lane et Bone Plating absorbe les trois premiers coups quand vous engagez un all-in (échange total jusqu'à la kill)."
    secondary_alternative: "Contre poke ranged dur (Vladimir, Lillia top), swap Resolve vers Sorcery avec Nimbus Cloak (movement speed extra après un summoner spell, pour lancer R plus vite) et Transcendence pour ability haste."
matchup_draft:
  pick_into:
    - examples: ["garen", "sett", "darius"]
      archetype: "Bruisers melee sans gap-closer"
      reason: "L'auto-attack range de Kennen (~550) dépasse leur vitesse de marche. Le poke Q et le repositionnement E permettent de farm hors threat range jusqu'au power spike de niveau 6."
    - examples: ["tryndamere", "yorick"]
      archetype: "Splitpushers sans CC fiable"
      reason: "Ils n'ont aucun moyen de vous lock pour empêcher le channel de la R. Une fois Kennen sur 1-2 items, chaque teamfight où il flank c'est un stun à 3 stacks sur plusieurs ennemis : aucun split solo en side lane n'égale cet impact."
    - examples: ["udyr", "olaf"]
      archetype: "Juggernauts à courte portée"
      reason: "Vous les kitez avec le dash E et la passive on-hit W. Leur stickiness dépend de rester collés à chaque pas, et votre range plus le refresh du dash les tient hors de portée de leurs autos."
  counterpicks:
    - examples: ["pantheon", "camille"]
      archetype: "Bruisers à CC point-and-click"
      reason: "Le stun de Pantheon W (cible unique, instantané) ou le root du second cast de Camille E cancel votre R en plein channel : vous perdez le stun AOE avant qu'un seul stack ne tombe, transformant l'engage en ulti gâchée."
    - examples: ["vladimir", "lillia"]
      archetype: "Top laners ranged à sustain"
      reason: "Ils dépassent la portée de votre Q sur les 6 premiers niveaux et se soignent du poke. Sans gap-closer, Kennen perd chaque trade court et tombe en retard de CS dès la minute 8."
    - examples: ["sion", "galio"]
      archetype: "Tanks avec Magic Resist et passives de cleanse"
      reason: "La passive de mort de Sion et le shield magic damage du W de Galio neutralisent vos fenêtres de burst. Trois stacks de Mark stun toujours, mais le W detonate fait moitié dégâts dès qu'ils stack MR."
---

## Aperçu

Kennen est un yordle ranged AP qui joue top en flank engager dans les teamfights (le joueur qui contourne le combat pour entrer par un côté que les ennemis ne surveillent pas). Tout le kit tourne autour d'une mécanique : la passive **Mark of the Storm (P)** stack trois fois et stun. Chaque sort — **Q**, **W** active, dash de **E**, chaque tick de **R** — pose 1 stack, donc un engage propre stun toute l'équipe ennemie en 2 secondes. Il a une lane phase correcte grâce à un auto-attack range de ~550 qui dépasse la plupart des bruisers, mais son identité s'active au niveau 6 : c'est LE flank engager top qui retourne les teamfights mid-late.

Son game plan est simple à décrire et exigeant à exécuter : farm en sécurité avec le poke de **Q** (dégâts à distance pour user les HP sans s'engager au fight) et la passive on-hit de **W** (effet qui se déclenche toutes les quelques autos), tenir la prio sur les objectifs, puis **Flash + R** dans la back line (la ligne des carries squishy — gros dégâts, peu de HP comme les ADC et mages — placée derrière les tanks). La skill expression vit en deux endroits : la gestion de l'energy (Kennen brûle l'energy vite et sans elle ne peut pas cast) et le choix du bon angle de teamfight pour que le channel de **R** ne soit pas interrompu par un stun point-and-click (un stun que l'ennemi applique en cliquant sur vous, sans viser).

## Build Recommandé

**Starting items :** Doran's Shield + 2 Health Potions. Doran's Ring est acceptable si la lane n'a aucun auto-attack harass et que vous voulez plus de régénération d'energy.

**Core items (in order) :**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — le burn (dégâts étalés sur les secondes suivantes, pas instantanés) scale avec la nature multi-cible de **R**. Chaque tick sur chaque ennemi proc le burn, faisant fondre les pools HP des tanks.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — pénétration magique flat pour les squishies de la back line que vous voulez stun et supprimer.
3. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — vous offre une stasis après **Flash + R**, l'équipe ennemie crame ses cooldowns sur une cible figée pendant que vos stacks de stun finissent d'atterrir.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicateur AP late game. Le burst de **R** qu'il produit one-shot les squishies qui n'ont pas acheté de Magic Resist.

**Situational items :**

- ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — remplace Liandry's contre les top laners bruiser (Sett, Darius, Mordekaiser). Le sustain en fight (soin/regen pendant le combat) plus la conversion en true damage permet de survivre à la deuxième vague inévitable de melees sur vous.
- ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — contre back line squishy sans Magic Resist. La passive HP-threshold (pénétration magique extra sous 35% HP) s'aligne avec les finishers de **R**.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — dès qu'une priority target adverse achète un item de Magic Resist.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contre ennemis avec gros healing (Vladimir top, Dr. Mundo, Yorick).

**Boots :** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** par défaut. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** est acceptable contre 2+ menaces magiques avec hard CC.

**Skill order :** Max **Q** en premier (plus gros base damage, cooldown le plus bas — votre poke principal et premier stack à chaque combo), **W** en deuxième (plus de burst en fight), **E** en dernier. Mettez un point en **R** aux niveaux 6, 11, 16.

**Runes :** Primary **Domination** avec **Electrocute**, **Taste of Blood**, **Sixth Sense**, **Ultimate Hunter**. Secondary **Resolve** avec **Second Wind** et **Bone Plating** pour la durabilité en lane.

## Matchups clés

- **Garen :** Vous le dépassez en range d'auto. Pokez avec **Q**, ne le laissez jamais vous toucher avec **E** (la spinning), et utilisez le dash de **E** à travers lui quand il engage la **Q** silence. Lane gagnable à partir du niveau 3.
- **Sett :** Restez hors de la portée de sa barre de charge **W** — chaque auto encaissée la remplit. Tradez seulement quand sa **W** est vide ; dashez à travers lui pour casser son facing s'il vous touche avec sa **E** stun.
- **Pantheon :** Matchup le plus dur. Sa **W** est point-and-click et cancellera votre **R** à chaque fight. Achetez ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** avant le second item, et n'engagez pas avec **R** tant que sa **W** n'est pas en cooldown.
- **Vladimir :** Lane longue, vous perdez du CS. Prenez Doran's Shield + Second Wind, gardez la **Q** comme punish quand il entre en pool, et appelez la pression jungle avant le 6 car vous ne gagnez pas un trade prolongé.
- **Mordekaiser :** Matchup égal qui se joue sur la **R** : son death realm cancel le peel de votre équipe, mais vous apportez du stun AOE. Si sa **R** est up, n'engagez pas ; si elle est down, vous pouvez placer la vôtre dans sa back line.

## Power spikes & conditions de victoire

- **Niveau 6 :** Premier **Slicing Maelstrom**. Combiné au **Flash**, c'est le moment où Kennen devient un champion qui décide les parties — Flash + R sur une équipe groupée stun tout le monde dans le rayon.
- **Niveau 9 (Q maxed) :** **Thundering Shuriken** a 4 secondes de cooldown au rank 5. La lane phase et le farm en side lane deviennent triviaux ; vous pouvez même poke les tours en sécurité avec **Q**.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minute 14-16) :** Premier spike de teamfight. Groupez avec votre équipe pour tout fight de drake ; votre **R** à 2 items supprime supports et ADC squishy.
- **Trois items + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ minute 24-28) :** Seuil de burst franchi. La combo **R** + **W** detonate one-shot toute back line qui n'a pas build de Magic Resist. Forcez Baron et les fights d'objectifs late.

## Erreurs courantes

- **Engager R sans Flash up.** Kennen n'a aucun gap-closer vers la back line. Sans **Flash + R**, vous ne touchez que la front line (les tanks et bruisers qui ouvrent le fight) — et stun leur tank ne vous donne rien pendant que leurs carries vous kitent (reculer en attaquant, vous gardant hors de portée d'auto) jusqu'à votre mort.
- **Brûler toute votre energy en lane.** Kennen n'a pas de mana, mais il a de l'energy qui régénère lentement. Spammez **Q** sur la wave et quand le jungler adverse arrive vous serez vide. Gardez toujours ~50 energy pour le dash de **E** en fuite.
- **Max W en premier.** Le dégât actif de la **W** est plus gros que celui de la **Q**, mais la **Q** a 4 secondes de cooldown au rank 5 contre 6 pour la **W**. **Q** maxée en premier veut dire plus de stacks par minute et plus de poke continu ; la **W** reste rank 1 jusqu'au niveau 8.
- **Auto-cancel votre R en sortant du cercle.** La **R** est un channel ancré sur votre champion. Si vous sortez de la portée du teamfight, les ticks arrêtent de toucher les ennemis. Restez au centre du fight, pas au bord — Zhonya's existe exactement pour ça.
- **Oublier la passive on-hit de la W.** Toutes les 5 autos déclenchent dégâts magiques bonus plus 1 Mark gratuit. Dans un trade 1v1, intercalez 2 autos entre **Q** et **E** pour bait l'adversaire dans un stun qu'il n'attendait pas.

## Conseil avancé

Le flank le plus fort de Kennen est ce que les pros appellent le "blind ult" : depuis la fog of war (zone non visible), Flash directement dans le plus gros cluster ennemi et **R** avant qu'ils ne voient votre modèle. Leur fenêtre de réaction est l'indice audio de la **R** plus le rendu de votre personnage — environ 0,4 seconde — plus court que le temps nécessaire pour sortir de la portée du channel. Pour préparer ça, votre équipe doit déjà être en fight (ou faire semblant), donc les ennemis regardent en avant et vous les contournez par la jungle unwarded. Entraînez-vous sur les fights de drake à la minute 14-16 : traversez la rivière, cachez-vous dans le camp de raptors adverse, attendez que la front line engage votre équipe, puis Flash + R dans la back line. Une seule exécution propre gagne un objectif 4v5 en infériorité numérique.
