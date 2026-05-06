---
title: "Karthus Jungle Build & Guide — Patch 16.9"
slug: "karthus-jungle"
language: "fr"
patch: "16.9"
champion: "karthus"
role: "jungle"
last_updated: "2026-05-05"
description: "Guide Karthus jungle League of Legends Patch 16.9 : smite path, clear avec Defile, R globale, matchups clés, power spikes, erreurs courantes et astuce avancée."
quick_learn:
  champion_dd_id: "Karthus"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Apex Jungler"
  abilities:
    - key: "P"
      name: "Death Defied"
      description: "À sa mort, Karthus entre en forme spirituelle pendant 7 secondes et continue de lancer Q/W/E sans coût de mana. Il peut conclure un fight depuis la tombe."
      dd_spell_id: "Karthus_Passive"
    - key: "Q"
      name: "Lay Waste"
      description: "Explosion de zone ciblée avec un court délai. Inflige le double de dégâts si elle touche un seul ennemi. Skill expression : prédire le mouvement et isoler la cible."
      dd_spell_id: "KarthusLayWasteA1"
    - key: "W"
      name: "Wall of Pain"
      description: "Mur large qui réduit la magic resist et ralentit les ennemis qui le traversent. Outil de chase, lock pour gank ou peel sur les divers qui entrent dans la back line."
      dd_spell_id: "KarthusWallOfPain"
    - key: "E"
      name: "Defile"
      description: "Toggle qui crée une aura de dégâts magiques par seconde autour de Karthus tout en drainant son mana. C'est le moteur du clear et de la DPS en teamfight : laisse-le actif sur chaque camp."
      dd_spell_id: "KarthusDefile"
    - key: "R"
      name: "Requiem"
      description: "Ultime globale avec channel de 3 secondes qui inflige de lourds dégâts magiques à tous les champions ennemis sur la map. Snipe cross-map et cleanup post-mortem."
      dd_spell_id: "KarthusFallenOne"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
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
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "4628", name: "Horizon Focus" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contre junglers d'invade early (Lee Sin, Xin Zhao, Elise) — la stasis couvre l'absence totale de mobilité"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap dès qu'une priority target achète son premier item de magic resist (Mercury's Treads compte)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contre engages de magic CC mono-cible (Ahri R, Lissandra R, Nautilus hook)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contre comps qui empilent le healing (Soraka, Vladimir, Yuumi, Dr. Mundo)"
  base_combo: ["W", "E", "Q", "R"]
  win_condition: "Atteins le niveau 6, full-clear plus vite que le jungler ennemi et utilise R pour finir les targets à HP bas cross-map. Avec deux items, Defile seule fait fondre la back line en 5v5."
  weakness: "Pas de dash, pas d'escape, zéro dueling early. Counter-jungled ou invade avant le niveau 6 te mettent à la traîne pour la partie. Assassins mobiles et junglers à CC lourd cassent le clear pré-Liandry's."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9105, name: "Legend: Haste", icon_path: "perk-images/Styles/Precision/LegendHaste/LegendHaste.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision primary : Conqueror stack vite sur Defile (la toggle aura qui tick des dégâts par seconde), transformant les longs skirmishes en AP bonus et heal. Triumph rend des HP sur les takedowns. Legend: Haste raccourcit R. Last Stand récompense la spirit form à HP bas."
    secondary_rationale: "Sorcery secondary : Manaflow Band règle la mana starvation early causée par Defile qui draine le mana chaque seconde. Transcendence pousse l'ability haste au-delà du cap des 40% pour que Q revienne plus vite entre les waves et que R tourne plus souvent."
    secondary_alternative: "Contre junglers ennemis d'invade lourd (Lee Sin + roams Pyke, Elise + supports CC early), swap Sorcery pour Resolve avec Second Wind (HP regen après dégâts subis, aide à survivre à l'invade niveau 3) et Overgrowth (HP bonus qui scale avec les monsters tués)."
matchup_draft:
  pick_into:
    - examples: ["nasus", "veigar", "kassadin", "kayle"]
      archetype: "Late-game scalers à présence early faible"
      reason: "Ils ont besoin de 25+ minutes pour arriver online ; Karthus gagne déjà les skirmishes au niveau 6 et utilise R pour nier leurs Baron solo. Out-tempo : force les drakes et termine avant qu'ils n'atteignent leur power spike."
    - examples: ["fiddlesticks", "amumu", "sejuani"]
      archetype: "Junglers farm-heavy lents sans invade niveau 3"
      reason: "Ils full-clear à la même vitesse que Karthus, mais Karthus a la R globale qui transforme leur gank en échange 2-for-1 : même s'ils tuent ton laner, R nettoie le leur cross-map avant qu'ils ne recall."
    - examples: ["yuumi", "soraka", "senna"]
      archetype: "Backline scalers sans mobilité"
      reason: "La R cross-map transforme leurs erreurs de positionnement en kills sur les objective spawns. Ils contribuent de loin mais ne peuvent pas dodge un snipe global locké sur un flash ou un ulti manquant."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "Junglers early-game d'invade à CC dur"
      reason: "Ils entrent dans la jungle de Karthus au niveau 2-3 avant que Defile ne scale en mana. Karthus n'a pas d'escape, pas de dash, et sa Q est trop lente pour le sauver d'une chaîne Lee Sin Q + W ou d'un rappel Elise. Un mauvais invade ruine la partie."
    - examples: ["kha-zix", "rengar", "shaco"]
      archetype: "Assassins stealth ou burst depuis la jungle"
      reason: "Ils ouvrent avec de l'isolation damage sur une cible aux défenses zéro ; même Zhonya's Hourglass ne fait que retarder l'inévitable en 1v1. Karthus meurt avant de pouvoir stack Conqueror ou trade de manière significative."
    - examples: ["nocturne", "warwick"]
      archetype: "Vision-deny gankers et tracker junglers"
      reason: "Le R de Nocturne coupe la vision du team, Karthus ne voit pas l'engage sur sa back line ; le blood tracking de Warwick transforme une R cross-map en dive sur une cible en channel. Karthus a besoin de vision pour channel R en sécurité, ces deux la lui retirent."
---

## Aperçu

Karthus jungle est l'archétype de l'**apex jungler** : un champion avec l'un des plafonds les plus hauts du jeu et l'un des planchers les plus bas. Le kit tourne autour de deux idées. **Defile (E)** est une toggle aura qui tick des dégâts magiques par seconde autour de Karthus tout en drainant le mana, et c'est le moteur du clear : une fois le problème de mana résolu, il full-clear plus vite que presque tout autre champion. **Requiem (R)** est une ultime globale qui touche chaque champion ennemi sur la map et transforme les erreurs de positionnement ailleurs en kills — ce qu'un jungler peut faire de plus précieux au bon moment.

Le game plan est rigide. Full-clear des trois premiers camps (red → krugs ou blue → gromp selon le side) avec **E** toggled on, recall pour les composants de **Liandry's Torment**, et à partir du niveau 6 tu cherches des targets R cross-map en skirmishant (un "skirmish" est un combat bref entre 1-3 joueurs par camp, généralement autour d'un camp ou d'un objectif de rivière) autour du drake et des grubs (les petits monsters neutres du void pit qui donnent du gold et un buff d'équipe). Sans escape ni dash, ward sur les entrées de ta propre jungle à 1:30 n'est pas optionnel. Le payoff c'est le post-6 : Karthus est l'un des rares champions plus dangereux mort que vivant, parce que **Death Defied** le maintient en cast pendant 7 secondes après ses HP à zéro.

## Build Recommandé

**Starting items :** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** (default pour junglers ranged — donne le smite-pet qui accélère le clear et apporte du gold) + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**Core items (dans l'ordre) :**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade depuis Hailblade (auto-évolue vers la minute 3-4 une fois suffisamment d'XP jungle accumulée). Companion default pour junglers AP burst : ajoute un proc de dégâts magiques sur la prochaine auto après un cast d'ability (un "proc" est un effet passif qui se déclenche à une condition — ici, lancer n'importe quelle ability arme la prochaine auto). S'aligne avec le dégât de Q sur les cibles isolées.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — premier item complet. Le burn pourcentage HP punit les pools HP des objectives (drake, baron, herald) et stack par-dessus chaque tick de Defile. C'est l'item qui inverse ta vitesse de clear et te permet de contester les drakes dès la minute 8.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration, le power spike le moins cher entre les core items.
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — le slow sur chaque hit de spell comble le plus gros défaut de Karthus (pas de chase, pas d'escape). Te permet de coller les targets kited pour que Defile stack Conqueror, et transforme le post-mortem en cleanup garanti.
5. ![Horizon Focus](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4628.png) **Horizon Focus** — révèle les ennemis touchés par des abilities longue portée et ajoute un amplificateur de dégâts. Synergise avec Q et Wall of Pain à long range, et la reveal aide à lock les R globales à travers le fog of war (la zone non révélée hors de la vision de ton équipe).
6. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — slot de scaling late game. À acheter en dernier sauf si tu mènes de 4+ kills, auquel cas anticipe-le pour snowball ("snowball" = avantage précoce qui grossit : kill → gold → item → plus de kills).

**Situational items :**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contre divers early (Lee Sin, Xin Zhao, Hecarim, Diana). La stasis est la seule réponse de Karthus quand une chaîne de dashes traverse ta front line (les tanks et bruisers devant qui absorbent les coups à ta place). Permet aussi de cast R en stasis.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — dès qu'une priority target achète son premier item de magic resist. Les ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** (les boots magic resist) comptent comme ce premier item MR.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contre engages de magic CC télégraphiés (Ahri R, Lissandra R, Nautilus hook). Le shield bloque la première ability pour que tu ne sois pas one-shot avant de cast R.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contre compositions qui empilent le healing (Soraka, Vladimir, Yuumi, Dr. Mundo). Le Grievous Wounds réduit le healing ennemi de moitié pour que les dégâts de Defile prennent vraiment.

**Boots :** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** sont le default. Swap pour ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** si l'équipe ennemie a 3+ menaces de hard CC à dégâts magiques.

**Skill order :** Max **Q** en premier (ton burst single-target et waveclear, la seule ability qui scale fort avec le rank), **E** en deuxième (augmente les dégâts par seconde de Defile et soutient le drain de mana), **W** en dernier. Mets un point en **R** aux niveaux 6, 11 et 16.

**Runes :** Primary **Precision** avec **Conqueror**, **Triumph**, **Legend: Haste**, **Last Stand**. Secondary **Sorcery** avec **Manaflow Band** et **Transcendence**.

## Matchups clés

- **Lee Sin :** Tu perds chaque 1v1 avant le niveau 6. Sa chaîne Q + W saute le délai de ta Q. Évite les skirmishes solo pré-6, full-clear à la place, et ward les deux entrées de ta jungle à 1:30.
- **Master Yi :** Counter net en 1v1 dès qu'il atteint Wit's End. Force le fight 5v5 dans les rivières étroites (drake pit, baron pit) où son W-cleanse ne peut pas le sauver d'une séquence Defile + R prolongée. Achète Zhonya's Hourglass en deuxième item s'il prend du rythme.
- **Karthus mirror :** Décidée par le tempo de farm et la discipline R. Celui qui full-clear un camp d'avance au niveau 6 gagne la première R race. Ne gaspille pas R sauf pour sécuriser une kill ou un smite — une R gâchée met le Karthus mirror une minute en avance sur le contrôle des objectives.
- **Hecarim :** Matchup à égalité. Il te bat en chase mais se groupe pour Defile en teamfight. Wall of Pain sur sa trajectoire de charge le ralentit hors de son propre engage, et le post-mortem fait cleanup s'il te tue quand même.
- **Sejuani / Amumu :** Favorable. Ils engagent en groupant l'équipe ennemie en stack — exactement la forme que veut Defile. Engage sur leur engage : s'ils ult dans ton équipe, tu rentres avec E toggled et regardes chaque ennemi enflammé fondre.

## Power spikes & conditions de victoire

- **Niveau 6 (R débloquée) :** Premier power spike global. **Requiem** transforme tout ennemi à HP bas cross-map en kill. À partir d'ici, ping le mid laner ennemi avant le recall et ult sur son channel de recall — kill gratuite à risque zéro.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment online (~ minute 9-11) :** La vitesse de clear s'inverse et la DPS sur les objectives (DPS = damage per second, ici contre les pools HP de drake/baron/grub) double. À partir d'ici, c'est toi qui dois initier les drake fights, pas réagir.
- **Deux items + boots (~ minute 18-22) :** Defile seule tick pour des dégâts sérieux ; dans tout fight groupé Conqueror stack vite et ta R lock le cleanup. C'est ta fenêtre de skirmish la plus forte.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minute 26-30) :** R one-shot les squishies qui n'ont pas acheté un seul item de magic resist. Force les objective fights groupés — Baron, Soul Drake, Atakhan ("Atakhan" = un boss neutre late-game qui spawn vers la minute 14 ; traite le spawn comme un 5v5 forcé).

## Erreurs courantes

- **Paniquer avec Death Defied.** La plupart des novices crament les 7 secondes post-mortem à fuir leur cadavre. Le bon play est d'engager dans un fight à HP bas en sachant que tu vas mourir : ta mort démarre ta rotation de dégâts, elle ne la termine pas. Q-Q-Q-E en spirit form fait souvent plus de dégâts que tu n'en aurais fait vivant.
- **Lancer Q au hasard.** Lay Waste fait double dégâts sur un seul ennemi isolé. Si tu tires Q dans une wave avec trois minions plus le laner, les dégâts cap à la valeur basse. Sors le laner avec W ou attends qu'une cible isolée soit exposée, puis Q sur le point prédit.
- **Cast R pour le kill steal.** Ult au milieu du teamfight est gaspillé : chaque ennemi est déjà dans Defile. Garde R pour un snipe cross-map (utiliser R comme finisher longue portée et faible risque sur un ennemi manquant à HP bas après un fight) ou un cleanup post-mortem. R c'est "after-the-fight", pas "during-the-fight".
- **Sauter la vision dans ta propre jungle.** Place des Stealth Wards sur tri-bush et pixel brush à 1:30. Karthus n'a pas d'escape ; un invade que tu ne vois pas venir est une kill gratuite donnée à un jungler mobile.
- **Smite-greed les objectives sans R.** Drake et grub ont des HP qui scale ; pas ton smite. Si tu contestes un drake sans R off cooldown contre un jungler qui l'a, tu perds la smite war et le drake.

## Conseil avancé

Entraîne le **suicide engage**. Quand ton équipe commit un 5v5 que tu ne peux pas gagner de front, marche avec Karthus dans la back line ennemie avec Defile toggled, en t'attendant à mourir. À l'instant où tes HP touchent zéro, Death Defied t'offre 7 secondes de cast gratuit sans coût mana — et la front line ennemie arrête d'attaquer ton cadavre puisqu'il n'y a plus rien à frapper. Cette fenêtre de spirit form est celle où tu Q-spam l'ennemi à HP le plus bas que tu peux atteindre et finis avec R quiconque s'enfuit. Bien fait, un Karthus qui meurt en premier transforme un fight imperdable en ace.
