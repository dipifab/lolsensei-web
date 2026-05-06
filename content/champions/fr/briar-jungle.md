---
title: "Briar Jungle Build & Guide — Patch 16.9"
slug: "briar-jungle"
language: "fr"
patch: "16.9"
champion: "briar"
role: "jungle"
last_updated: "2026-05-01"
description: "Guide Briar jungle pour League of Legends Patch 16.9 : clear path, build core lifesteal, matchups clés, power spikes, erreurs courantes et un conseil final."
quick_learn:
  champion_dd_id: "Briar"
  difficulty: 1
  damage_type: "mixed"
  champion_class: "Diver / Skirmisher"
  abilities:
    - key: "P"
      name: "Crimson Curse"
      description: "Les autos et sorts appliquent un saignement à stacks qui soigne Briar selon les dégâts infligés. Le soin bonus scale avec les HP manquants. Pas de HP regen de base."
      dd_spell_id: "Briar_Passive"
    - key: "Q"
      name: "Head Rush"
      description: "Saut court qui stun et réduit en % l'Armor et la MR de la cible. Gap closer (réduit la distance) et ouverture de trade (échange court de coups)."
      dd_spell_id: "BriarQ"
    - key: "W"
      name: "Blood Frenzy / Snack Attack"
      description: "Briar saute en avant et s'auto-taunt vers l'ennemi le plus proche (priorité aux champions), gagnant Attack Speed, Move Speed et autos AOE. Re-cast pour un chomp empowered qui scale avec les HP manquants et soigne."
      dd_spell_id: "BriarW"
    - key: "E"
      name: "Chilling Scream"
      description: "Annule Blood Frenzy et channel : damage reduction et soin % HP pendant la charge. Au relâchement, slow ; à pleine charge, knockback et stun sur mur. Le self-cancel du W est la mécanique clé."
      dd_spell_id: "BriarE"
    - key: "R"
      name: "Certain Death"
      description: "Gemstone global qui marque comme proie le premier champion touché. Briar vole dessus, fear les ennemis à l'atterrissage, puis Frenzy empowered avec résistances, lifesteal et Move Speed bonus jusqu'à la mort de la proie."
      dd_spell_id: "BriarR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "E" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "6333"
      name: "Death's Dance"
      against: "contre double-AD (ex. Yasuo + Caitlyn) : convertit le burst en saignement étalé, te laisse reset avec le chomp de W"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contre burst AP (Syndra, Veigar, Lissandra) — le shield magique se déclenche quand un AP threat est en plein combo sur toi"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap depuis Steelcaps si l'adversaire a 3+ CC durs (stuns, roots) : la tenacity évite que le R soit interrompu en plein vol"
    - dd_id: "3065"
      name: "Spirit Visage"
      against: "contre comps AP-heavy à dégâts magiques continus : amplifie de 25% le soin de Crimson Curse et du chomp de W"
  base_combo: ["W", "Q", "AA", "E"]
  win_condition: "Touche le R sur un carry de backline et chevauche la Frenzy empowered jusqu'à la mort de la proie. Sundered Sky et Bloodthirster te tiennent en HP pendant la chase ; le fear disperse leurs peelers."
  weakness: "Pas de range et le self-taunt du W te colle à l'ennemi le plus proche — les adversaires malins bait la Frenzy vers un tank, puis peel hors de range pendant qu'une chaîne de CC te cloue."
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
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
      - { dd_id: 8105, name: "Relentless Hunter", icon_path: "perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Arbre Precision (runes de fight long) : la Frenzy de W dure 5+ secondes, donc les keystones burst gaspillent du dégât tôt. Conqueror stack à chaque coup et pic quand le R atterrit. Triumph soigne sur kill, Alacrity ajoute Attack Speed, Last Stand paie à HP bas."
    secondary_rationale: "Domination secondaire : Treasure Hunter donne du gold extra dès les premiers ganks (gank = attaque surprise depuis la jungle) et Relentless Hunter ajoute Move Speed hors combat pour follow-up R cross-map (tu arrives en side lane une wave plus tôt)."
    secondary_alternative: "Si l'adversaire a 3+ CC d'ability (Lissandra R, Maokai roots, Sejuani Q), swap Domination pour Resolve avec Second Wind (HP regen passif sous 50%) et Revitalize (+10% sur le soin de W et R). Tu sacrifies snowball pour survivre à la chaîne de CC."
matchup_draft:
  pick_into:
    - examples: ["lux", "karthus", "veigar"]
      archetype: "Mages immobiles en mid lane"
      reason: "Le R envoie un skillshot global qui marque le premier champion touché. Les mages backline sans dash sont aspirés dans une chaîne fear + Frenzy dont ils ne peuvent pas se dégager avant que le chunk de dégâts ne tombe."
    - examples: ["amumu", "sejuani", "rammus"]
      archetype: "Tank junglers lents"
      reason: "Le shred d'Armor en % du Q taille leurs résistances, et le W avec Attack Speed plus sustain gagne les fights longs. Ils ne peuvent pas te kite et leur CC est single-cast : une fois en cooldown tu sur-soignes le reste."
    - examples: ["warwick", "shyvana"]
      archetype: "Skirmishers sustain sans escape"
      reason: "1v1 façon mirror dans la jungle. Le chomp de Briar scale sur HP manquants, donc plus le fight traîne plus la math penche pour elle. Le stun du Q interrompt leurs ultis canalisées."
  counterpicks:
    - examples: ["lissandra", "maokai", "kennen"]
      archetype: "CC AOE avec multiples roots"
      reason: "Ils chain CC Briar en pleine Frenzy, et sa seule sortie est le E pour auto-cancel le W — mais le E est un long channel, donc ils la re-CC avant que le soin se finisse. Le R l'engage dans la pire position possible."
    - examples: ["olaf", "morgana"]
      archetype: "Champions CC-immune ou anti-heal"
      reason: "Le R d'Olaf cleanse le knockback et le stun du E ; le E de Morgana bloque avec spell shield le stun du Q et le fear du R, cassant la fenêtre d'engage avant que la Frenzy ne monte."
    - examples: ["nidalee", "gragas"]
      archetype: "Pokers longue portée avec déplacements"
      reason: "Nidalee chunk le clear de Briar avec ses javelins hors range du W ; le R ou le E de Gragas la sortent de la Frenzy en pleine chase, resetant sa rampe de dégâts et la laissant sans sustain."
---

## Aperçu

Briar est une **diver / skirmisher** mêlée (un champion qui saute sur le carry adverse et gagne les 1v1 longs). Elle transforme sa propre perte de contrôle en feature : sa **Blood Frenzy (W)** la met en pilote automatique sur l'ennemi le plus proche avec bonus d'Attack Speed et de Move Speed, et sa passive **Crimson Curse** la soigne via le saignement appliqué par ses propres auto-attacks. Elle n'a pas de HP regen de base, donc le seul moyen de rester en vie est de continuer à frapper — quand elle arrête d'attaquer, elle arrête de se soigner. Son ulti **Certain Death (R)** est un skillshot global (un sort qui traverse toute la map) qui marque une cible comme proie et la bloque dans une chase empowered jusqu'à la mort de la proie, avec fear (effet qui fait fuir les ennemis sans contrôle pendant un court instant) sur tout ce qui l'entoure à l'atterrissage.

Le plan de partie : clear rapide (clear = tuer tous les monstres neutres de ton quart de jungle) des camps avec le W AOE (area of effect = dégâts de zone), chercher des ganks (attaques surprises depuis la jungle vers une lane) dès le niveau 6, où le R peut isoler un carry de backline (le damage dealer fragile placé à l'arrière de l'équipe) loin de ses peelers (alliés qui protègent le carry). De là, snowball (transformer les premières kills en plus de kills) en une machine à chase qui sur-soigne les 1v1 grâce au lifesteal des items et au self-heal stacké. Le mouvement haut niveau, c'est le self-cancel W-vers-E : savoir exactement quand interrompre sa propre Frenzy avec **Chilling Scream (E)** pour se soigner et se repositionner, puis ré-engager au Q.

## Build Recommandé

**Items de départ :** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. La quest du pet se complète seule vers la minute 3-4.

**Items core (dans l'ordre) :**

1. ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** — upgrade du pet depuis Hailblade (auto-évolue vers la minute 3-4 une fois assez d'XP accumulée). Le compagnon Gustwalker donne du Move Speed quand tu touches un champion, ce qui s'ajoute au bonus du W et transforme la transition clear-vers-gank en dives surprises (dive = sauter sur l'ennemi même sous tour pour le tuer).
2. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — premier item légendaire, premier gros power spike (le moment où ton champion devient nettement plus fort). Sa passive transforme ta prochaine auto-attack en coup critique garanti (crit = attaque qui fait double dégâts) et te soigne. Ce soin se cale sur le chomp empowered du W, donnant à Crimson Curse le carburant en HP-manquants dont elle a besoin pour scaler.
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots par défaut contre la majorité des comps. Elles réduisent les dégâts d'auto-attacks (AA = auto-attack), ce qui pèse beaucoup dans les fights longs de Frenzy contre les marksmen (carries physiques à longue portée comme Caitlyn ou Jinx).
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — Attack Damage extra basé sur ton AD de base plus un shield Lifeline (passive à seuil de HP : un shield qui se déclenche automatiquement quand les HP descendent sous 30%). Le shield est le filet de sécurité pour les R commits (engagements totaux au R) qui tournent mal.
5. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — augmente le cap de lifesteal (lifesteal = % des dégâts d'auto-attack converti en soin) et transforme le soin en surplus en shield. Combiné avec Crimson Curse + Sundered Sky, tu sur-soignes n'importe quelle équipe qui n'a pas pris d'anti-heal (items qui réduisent les soins reçus).

**Items situationnels :**

- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — contre des équipes avec deux gros damage dealers physiques (ex. Yasuo + Caitlyn) : convertit le burst que tu prends en saignement étalé sur quelques secondes, te laissant le temps de reset avec le soin du chomp de W.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contre burst AP (Syndra, Veigar, Lissandra). Le shield magique se déclenche pile quand un AP threat est en pleine combo sur toi.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap depuis Steelcaps si l'adversaire a 3+ abilities de hard CC (CC = stuns, roots, fears qui bloquent ton perso). La stat Tenacity de ces boots réduit la durée de ces CC, comme ça ton R commit n'est pas chain-stun en plein vol.
- ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — contre comps AP-heavy à dégâts magiques continus : amplifie de 25% le soin de Crimson Curse et celui du chomp de W, double l'identité de Briar plutôt que la patcher.

**Boots :** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** par défaut. Passe à ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** quand le nombre de CC dépasse celui des threats AA.

**Skill order :** Maximise **W** en premier (DPS, sustain, Move Speed), **Q** en deuxième (gap close + shred Armor/MR en %), **E** en dernier. Mets un point en **R** aux niveaux 6, 11, 16.

**Runes :** Primaire **Precision** avec **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Secondaire **Domination** avec **Treasure Hunter** et **Relentless Hunter**, ou **Resolve** avec **Second Wind** et **Revitalize** si l'équipe adverse enchaîne 3+ CC d'ability sur toi.

## Matchups clés

- **Warwick :** Mirror de sustain dans la jungle (les deux champions se soignent beaucoup en fight). Lui scale avec l'Attack Speed sur ses autos, toi avec le W AOE plus le chomp qui fait des dégâts sur HP manquants. N'ouvre pas à HP plein des deux côtés : laisse-le sortir son Q (qui te fear) en premier, cancel ta propre Frenzy au E pour l'esquiver, puis ré-engage quand son ulti est en cooldown.
- **Lillia :** Elle te kite (t'attaque en reculant) avec les dégâts passifs de son Q et le slow de son W. Garde le E pour quand elle te marche dessus en spam Q : le knockback la colle au mur et la stun. Sans E, elle tourne autour de toi à l'infini.
- **Lee Sin :** Fighter early qui te bat au niveau 3 s'il ouvre Q + Smite (summoner spell du jungler). Évite sa red-side jungle jusqu'au niveau 4 ; après l'arrivée de Sundered Sky, la math tourne en ta faveur et son shield W soigne moins que ton chomp de W.
- **Sejuani :** Tank jungler à hard CC. Le shred d'Armor du Q (réduction en pourcentage de sa stat Armor) la déshabille, mais son R cancel ton R commit en plein vol. Track son cooldown d'ulti — s'il est dispo, n'ouvre pas R sur une cible proche d'elle.
- **Kha'Zix :** Le counterpick classique (un champion choisi exprès pour te neutraliser en draft) pour les skirmishers. Il t'isole et te burst en 2 secondes (burst = gros dégâts en 1-2 secondes). Regroupe-toi avec ton équipe après le 6 et joue avec vision (utilise des wards pour ne pas être surprise) ; ne va pas solo-invade dans son côté de la jungle.

## Power spikes & conditions de victoire

- **Niveau 3 :** Les trois abilities de base online. Première fenêtre de gank raisonnable — Q par-dessus un mur sur une cible, W en Frenzy, Q stun contre le mur.
- **Niveau 6 :** Première **Certain Death**. Les ganks cross-map (R lancé à travers la map sur une side lane) deviennent une vraie menace : même un ennemi qui a déjà utilisé Flash et n'a pas de dash perd le trade une fois le R verrouillé.
- **Sundered Sky terminé (~ minute 10-12) :** Premier spike de duel (le moment où tu gagnes les 1v1 de manière fiable). Tu surpasses la majorité des junglers et la majorité des laners sur lesquels tu R depuis hors de leur vision.
- **Sterak's Gage online (~ minute 22-26) :** Le shield Lifeline transforme les R commits ratés en kills. Combiné avec l'overheal de Bloodthirster, tu deviens à la fois la frontline (le corps tank qui ouvre les fights) et le finisher.

## Erreurs courantes

- **W-Frenzy sur un tank au lieu du carry.** Le self-taunt du W se cale sur l'ennemi le plus proche avec priorité aux champions, mais si Maokai (un tank) est plus proche que Caitlyn (un carry), tu te tapes Maokai. Utilise Q en premier pour sauter par-dessus la frontline (les champions tanky devant l'équipe) ; le Q te place sur la cible prioritaire avant que le pilote automatique du W ne s'enclenche.
- **Tenir le E trop longtemps pour le wall stun.** Le E à pleine charge knockback les ennemis, mais le channel (la période où tu restes immobile à le caster) est long et tu prends des dégâts pendant (réduits, pas bloqués). S'il n'y a pas de mur aligné, relâche entre 50 et 70% de charge pour n'avoir que le slow — le E partiel te sauve, le E plein te tue.
- **Lancer le R sur un groupe de 4 ennemis.** Le R fear les ennemis autour de la proie, mais ils récupèrent après 1.5 seconde. Une fois récupérés, tu es seule au milieu de leur équipe en Frenzy empowered sans alliés pour te peel (peel = protection alliée qui décroche les attaquants). Utilise le R quand la proie est isolée — flanks (un seul ennemi qui s'approche par le côté), rotations, moments de backline isolée — pas sur un engage propre groupé (un fight où l'ennemi est tout serré).
- **Oublier que Crimson Curse a besoin d'HP manquants pour scaler.** Le soin bonus grandit à mesure que tes HP baissent. Ne recall pas en base à HP plein après un gank réussi si un deuxième fight arrive ; rester à 40% HP rend le prochain chomp presque deux fois plus puissant en soin.

## Conseil avancé

Entraîne le **self-cancel du W via E** : quand la Frenzy se cale sur le mauvais ennemi (un tank au lieu du carry, ou t'amène vers du CC), tape E en pleine Frenzy pour reset. La damage reduction pendant le channel du E + le soin en % HP max transforme un engage raté en repositionnement gratuit. Relâche le E sans charge (ou à 30%) à l'instant où la cible prioritaire entre en range du Q, puis Q dessus et re-W pour démarrer une Frenzy propre sur la bonne personne. Le coût total d'animation est environ 1 seconde ; la différence en conversion de kill est une barre de HP entière.
