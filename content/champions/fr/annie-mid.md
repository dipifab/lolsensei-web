---
title: "Annie Mid Build & Guide — Patch 16.9"
slug: "annie-mid"
language: "fr"
patch: "16.9"
champion: "annie"
role: "mid"
last_updated: "2026-04-29"
description: "Guide Annie mid lane pour League of Legends Patch 16.9 : setup du stun de Pyromania, build burst, matchups clés, power spikes, erreurs courantes et un conseil final."
quick_learn:
  champion_dd_id: "Annie"
  difficulty: 1
  damage_type: "magic"
  champion_class: "Mage / Burst"
  abilities:
    - key: "P"
      name: "Pyromania"
      description: "Tous les 4 sorts lancés chargent Pyromania : le prochain sort de dégâts stun la cible. Annie commence et respawn avec le stun prêt — charge le compteur sur les minions avant les all-in."
      dd_spell_id: "Annie_Passive"
    - key: "Q"
      name: "Disintegrate"
      description: "Boule de feu point-and-click à 625 de portée. Rembourse le mana et reset 50% du cooldown si elle tue la cible — outil de poke et de last-hit le moins cher du kit."
      dd_spell_id: "AnnieQ"
    - key: "W"
      name: "Incinerate"
      description: "Cône de feu à 600 de portée. Outil principal de waveclear (nettoie toute la ligne de caster minions en un cast) et sort avec les plus gros dégâts de base au rang 5."
      dd_spell_id: "AnnieW"
    - key: "E"
      name: "Molten Shield"
      description: "Bouclier ciblé + movement speed décroissant sur Annie ou un allié. Renvoie des dégâts magiques au prochain attaquant. Compte comme un sort lancé — sert à recharger Pyromania avant l'engage."
      dd_spell_id: "AnnieE"
    - key: "R"
      name: "Summon: Tibbers"
      description: "Dégâts AOE point-blank à 600 de portée qui invoquent Tibbers, un ours qui auto-attack et brûle les ennemis proches. Le cast lui-même est un sort, donc une R avec 4 stacks de Pyromania stun tous les ennemis touchés."
      dd_spell_id: "AnnieR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
      against: "contre les assassins mobiles et divers (Zed, Diana, Talon, Akali) — la stasis te sauve après ton R + Flash"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "contre les compos de kite sans CC dur — le slow sur R + W bloque les cibles dans l'aura de Tibbers"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contre les CC magiques single-target (Lissandra R, Twisted Fate stun, Ahri charm)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap dès qu'une cible prioritaire termine un objet de Résistance Magique"
  base_combo: ["Q", "W", "E", "AA", "R"]
  win_condition: "Empile Pyromania à 4 sur les minions, avance avec Flash + R pour un stun AOE point-blank sur les ennemis groupés et burst la backline squishy avec Luden's Companion + Shadowflame."
  weakness: "Mobilité de base nulle, portée des sorts 600-625. Out-pokée par les artillery mages, contournée par les assassins qui dash hors de la portée de R avant que le stun n'arrive."
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
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["veigar", "cassiopeia", "anivia", "karthus"]
      archetype: "Mages immobiles sans dash"
      reason: "La R d'Annie est un stun AOE point-blank à 600 + Tibbers DPS. Les mages sans dash ni stealth mangent tout le combo sur l'all-in niveau 6 et n'ont pas le temps de répondre."
    - examples: ["diana", "katarina"]
      archetype: "Burst melee avec tell visible"
      reason: "Annie pré-stack Pyromania pendant le waveclear : au moment où ils s'engagent au gap-close, le stun Flash + R interrompt leur combo avant que les dégâts n'arrivent."
    - examples: ["fizz", "kassadin"]
      archetype: "Mages melee faibles avant 6"
      reason: "Ils doivent entrer dans la portée de Q pour farmer pre-6 : Annie les poke librement, tient le niveau 2 avec Pyromania chargé et les force au back sans counter-engage."
  counterpicks:
    - examples: ["xerath", "vel-koz", "lux"]
      archetype: "Artillery mages longue portée"
      reason: "Ils pokent Annie à 850-1400 de portée pendant qu'elle est à 625. Pas de dash, pas de bouclier contre le poke à distance, elle saigne des HP chaque wave sans option d'all-in en retour."
    - examples: ["zed", "akali", "yasuo"]
      archetype: "Assassins mobiles post-6"
      reason: "Leurs dashes ou windows de stealth sortent du rayon de 600 de la R avant que le stun n'arrive. La shroud d'Akali et le Wind Wall de Yasuo mangent directement ses sorts principaux."
    - examples: ["twisted-fate", "galio"]
      archetype: "Roamers globaux / cross-map"
      reason: "Annie n'a aucune portée de roam — elle clear les waves et reste en mid. Leur ult bascule les sidelanes et les drakes, donc Annie perd la macro même en gagnant son 1v1."
---

## Aperçu

Annie est le burst mage le plus simple du jeu (un champion qui inflige beaucoup de dégâts magiques concentrés sur 1-2 secondes, puis attend ses cooldowns) et l'un des plus forts pour punir une erreur autour du niveau 6. Son kit a l'air minuscule sur le papier — une Q point-and-click, un W en cône, un bouclier sur soi ou un allié, et une ult qui invoque un ours — mais sa passive **Pyromania** lie le tout : chaque 4e sort lancé charge un stun garanti sur la prochaine cible touchée. Cette seule mécanique transforme un champion accessible aux débutants en menace à stun garanti, capable d'effacer une backline squishy (les carrys placés à l'arrière de leur équipe en fight) en un seul bouton dès que Tibbers est sorti.

Son plan de partie est identique en lane et en teamfight : charge **Pyromania** à 4 stacks sur les minions, avance à 600 de portée et déclenche le compteur sur la cible la plus précieuse avec **R** (Tibbers), puis **W** et **Q**. Deux choix séparent une bonne Annie d'une excellente : savoir **quand garder le compteur prêt** (ne pas le brûler sur un minion juste avant de t'engager — entrer pleinement — dans un fight) et **comment placer la R** (Flash + R est l'un des outils d'engage — abilities qui ouvrent un teamfight — les plus fiables du jeu sur une équipe groupée).

## Build Recommandé

**Items de départ :** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** (donne du mana supplémentaire pour qu'Annie puisse spammer Q et W tôt) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions** (rendent du HP au cours du temps en lane). L'anneau alimente les premiers trades ; les potions font tenir face au poke (chip damage à distance du mage adverse).

**Items core (dans l'ordre d'achat) :**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — spike de burst au premier item (un "power spike" est le moment où un champion devient nettement plus fort grâce à un level-up ou à la complétion d'un item). Le combo d'Annie est court, donc le bonus de dégâts au premier hit s'aligne parfaitement avec **R + W** sur une cible stunée.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — bottes magic penetration plate. Tes kills viennent des cibles squishy à faible Magic Resist, et la pen plate scale mieux que la pourcentuelle à ce stade.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst supplémentaire avec une passive à seuil de HP (dégâts magiques bonus quand l'ennemi est sous ~35% HP). Finisher pas cher qui transforme ton R + W de "presque létal" en one-shot.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicateur late-game (+30% AP total, où AP / Ability Power est la stat qui scale tous les sorts d'Annie). Quand il sort, le combo R efface les ennemis groupés, pas seulement les squishys isolés.

**Items situationnels :**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contre les assassins mobiles et divers (Zed, Diana, Talon, Akali). Après l'engage R + Flash, active la stasis (l'active qui te rend invulnérable 2.5 secondes) : tu survis pendant que ton équipe enchaîne.
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — contre les compos de kite sans CC dur (équipes qui reculent en attaquant pour garder la distance). Le slow sur R + W cloue les cibles dans l'aura brûlante de Tibbers.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contre les CC magiques single-target (Lissandra R, Twisted Fate stun, Ahri charm). Le shield bloque le sort d'engage pour que tu gardes ton **Flash** offensivement.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — ajoute-le dès qu'une cible prioritaire termine un objet de Résistance Magique.

**Bottes :** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** par défaut. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** sont une alternative quand l'équipe a besoin de plus d'uptime sur **R** comme outil pour ouvrir les teamfights.

**Skill order :** Maxe **Q** en premier (cooldown le plus bas, mana refund au kill, ton outil principal de trade — court échange de dégâts en lane). Maxe **W** en second (waveclear, le fait de nettoyer la wave de minions ; W a le base damage le plus haut au rang 5). Maxe **E** en dernier (utility, scale peu avec le rang). Mets un point en **R** aux niveaux 6, 11 et 16.

**Runes :** Arbre primaire **Sorcery** (l'arbre de dégâts magiques) avec **Arcane Comet** (projectile de dégâts magiques bonus quand tu touches un champion), **Manaflow Band** (ton mana max augmente quand tu touches avec un sort), **Transcendence** (cooldown reduction aux niveaux 5, 8, 11), **Scorch** (dégâts de brûlure bonus sur le prochain sort toutes les ~10 secondes). Arbre secondaire **Inspiration** avec **Biscuit Delivery** (biscuits gratuits qui rendent du mana et des HP en lane) et **Cosmic Insight** (plus d'uptime sur **Flash** et **R** en mid game).

## Matchups clés

- **Yasuo / Yone :** Ils Wind Wall ta **Q** et ton **W** (le mur qui bloque les projectiles). Bait le Wind Wall avec une **Q** à stacks bas (1-2 charges, stun pas prêt), puis avance à stacks pleins quand le Wind Wall est en cooldown — son downtime est long, ils ne peuvent pas couvrir à la fois ta **Q** et ton engage.
- **Lux :** Te dépasse en portée à 1100 avec sa **Q**. Ne la chase pas ; clear les waves à distance sûre avec **W**, cherche à roam (quitter la lane pour aider tes alliés ailleurs) dès que tu termines ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion**, et laisse ton jungler punir son absence d'escape sur un counter-gank.
- **Veigar :** Favorable. Il doit stacker sa **Q** sur les minions pour de l'AP et n'a pas de dash ; pré-stack Pyromania, avance niveau 6 avec **Flash + R** et tu le stun hors de sa cage de **E** avant qu'il ne te bloque.
- **Twisted Fate :** Course au roam (quitter la lane pour aider une autre lane). Push les waves avec **W** en cooldown. Quand sa **R** est up, ping mid mia (missing in action : signale au team qu'il a disparu) et tourne (déplace-toi avec la wave) vers la sidelane qu'il vise avec ta propre ult prête — un fight 2v2 à Pyromania pleine = kill garantie.
- **Diana :** Pre-6 elle est en verre (peu de défenses, meurt vite) ; harasse-la avec **Q** point-and-click chaque fois qu'elle s'avance pour last-hit. À 6, garde Pyromania à stacks pleins : quand elle te **R** dessus, ton **R + W** la stun avant qu'elle ne recast son second saut.

## Power spikes & conditions de victoire

- **Niveau 2 :** Avec **Q** + **W** sur la barre plus Pyromania prêt, tu as un all-in court (engagement total où ni l'un ni l'autre ne peut désengager) qui bat la plupart des mages ranged qui n'attendent pas le stun niveau 2. Si l'ennemi avance pour un cs (creep score : last-hit un minion pour le gold) juste après le level-up, avance et trade.
- **Niveau 6 + Flash :** La première **R** avec **Flash** est ton plus gros power spike sur fight individuel de la partie. Un fight sur wave groupée est un double kill gratuit si le jungler adverse est à l'autre bout de la map.
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion fini (~ minute 11-13) :** Le seuil de burst bascule. Ton combo **R + W + Q** sur un squishy stuné est désormais létal sans follow-up de l'équipe.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minute 24-28) :** L'aura de Tibbers + l'AOE du cast deviennent un nuke de teamfight (un cast qui efface plusieurs cibles d'un coup) ; force des fights d'objectif ici et cherche **Flash + R** sur 3+ cibles groupées.

## Erreurs courantes

- **Brûler le 4e stack de Pyromania sur un minion juste avant un all-in.** Vérifie toujours le compteur de stacks sous ton portrait avant d'entrer en trade range. S'il est à 3 et que tu cast **W** pour clear, tu viens de donner ton stun garanti à un caster minion.
- **Caster R sans Pyromania prêt.** **R** sans le stun fait des dégâts mais laisse la cible sortir de l'aura de Tibbers. Si Pyromania n'est pas chargé, recharge-le en castant **E** sur toi-même avant de t'engager.
- **Rester à portée maximale de R pendant le cast.** **R** fait 600 de portée, comme l'auto-attack d'Annie. Utilise **Flash** pour couvrir les 200-400 dernières unités vers une équipe groupée plutôt que de cast depuis le bord — au bord, seul l'ennemi le plus proche est stuné et les autres s'enfuient.
- **Skip ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes pour un autre item AP.** Le burst d'Annie ne tue que quand la MR est basse ; rusher plus d'AP sans magic penetration plate laisse les squishys à 50 HP au lieu de 0 et transforme les kills garanties en chasses.
- **Spammer Q sans regarder le mana.** **Q** ne rembourse son mana **qu'au kill**. Si tu Q un minion à 200 HP et qu'il ne meurt pas, tu as payé 60-80 mana pour rien. Utilise **Q** sur des minions proches de l'execute ou sur des champions, pas comme poke quand ils sont full HP avec un creep en plus.

## Conseil avancé

Entraîne le **Flash + R animation cancel** (un trick qui utilise **Flash** pendant la frame de cast au lieu d'attendre qu'elle finisse) : à l'instant où tu appuies sur **R**, appuie sur **Flash** dans la même direction (l'input se buffer pendant le cast). Le cast point de **R** est assez court pour que **Flash** te repositionne sur la cible avant que l'AOE ne résolve — ça te permet de stuner une backline placée à 800 de portée comme si tu partais à 600. La plupart des novices apprennent le combo comme "appuie sur **R**, puis réagis à où ça atterrit" ; l'animation cancel le transforme en un gap-close (un téléport bref qui ferme la distance) de 700 unités quasi impossible à dodge.
