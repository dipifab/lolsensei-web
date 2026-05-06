---
title: "Brand Mid Build & Guide — Patch 16.9"
slug: "brand-mid"
language: "fr"
patch: "16.9"
champion: "brand"
role: "mid"
last_updated: "2026-05-01"
description: "Guide Brand mid lane pour League of Legends Patch 16.9 : starter kit, build burn-mage, matchups clés, power spikes, erreurs courantes et une astuce technique finale."
quick_learn:
  champion_dd_id: "Brand"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Burst-AOE"
  abilities:
    - key: "P"
      name: "Blaze"
      description: "Les sorts de Brand enflamment la cible (dégâts sur 4s, jusqu'à 3 stacks). À 3 stacks sur un champion le blaze détonne en une petite explosion AOE qui réapplique les effets des sorts."
      dd_spell_id: "Brand_Passive"
    - key: "Q"
      name: "Sear"
      description: "Skillshot linéaire à dégâts magiques. Si la cible est déjà ablaze, il la stun au lieu de la blesser — ton outil de setup principal."
      dd_spell_id: "BrandQ"
    - key: "W"
      name: "Pillar of Flame"
      description: "Zone AOE retardée après un bref tell. Les cibles ablaze prennent +25% de dégâts. Sort à plus haut single-target damage du kit."
      dd_spell_id: "BrandW"
    - key: "E"
      name: "Conflagration"
      description: "Explosion ciblée qui rebondit sur les ennemis proches. Si la cible primaire est ablaze, le rayon de propagation double — la façon la plus simple d'appliquer blaze à une wave."
      dd_spell_id: "BrandE"
    - key: "R"
      name: "Pyroclasm"
      description: "Boule de feu longue portée qui rebondit jusqu'à 5 fois entre champions et minions, priorisant les cibles ablaze et les slowant à l'impact. Dégâts énormes en teamfight quand les ennemis sont groupés."
      dd_spell_id: "BrandR"
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
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contre divers et assassins (Zed, Akali, Diana, Fizz) — la stasis couvre ton absence de dash sur leur gap-close"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contre les CC magiques single-target (Ahri charm, Lissandra R, Twisted Fate gold card)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contre les comps qui empilent les soins (Soraka, Vladimir, Dr. Mundo, Aatrox top)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap dès qu'une cible prioritaire achète son premier objet de Résistance Magique"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "Touche les fights groupés avec des stacks de blaze déjà actifs sur plusieurs cibles pour que R rebondisse entre champions plutôt qu'entre minions. Reste derrière la frontline et tire à portée max de W."
  weakness: "Aucun dash, aucune escape. Si un diver passe ta frontline, il ne reste que Flash et Zhonya's entre toi et un one-shot — voilà pourquoi les objets défensifs situationnels ne sont pas optionnels."
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
    primary_rationale: "Sorcery primaire : Arcane Comet auto-proc à chaque hit de W ou E, ajoutant du burst gratuit à chaque trade. Manaflow Band tient le mana pour spam W, Transcendence pousse l'ability haste au-delà de 40%, Scorch s'ajoute aux ticks de blaze à bas HP."
    secondary_rationale: "Inspiration secondaire : Biscuit Delivery règle le problème de mana de Brand sur les 6 premiers niveaux et Cosmic Insight donne plus d'uptime de Flash — Flash est ta seule façon d'éviter un dash, le kit n'en ayant aucun."
    secondary_alternative: "Si l'équipe adverse a 2+ squishys à faibles résistances (ex. Caitlyn + Senna + Ezreal), swap Inspiration pour Resolve avec Second Wind (sustain face au poke) et Revitalize (boost le lifesteal-via-burn de la passive sur takedown), te gardant en vie pour poser R."
matchup_draft:
  pick_into:
    - examples: ["veigar", "karthus", "anivia", "ryze"]
      archetype: "Mages stationnaires sans dash"
      reason: "Leur pattern de farm les oblige à rester immobiles pour cast ou stack : pose W sur la wave, Q sur le frame de recovery pour le stun, et la rotation de blaze complète tombe avant qu'ils ne puissent bouger."
    - examples: ["malphite", "amumu", "sejuani"]
      archetype: "Tanks de group-engage"
      reason: "Quand leur R catch ton équipe, la même R catch leur équipe à côté de la tienne — la R de Brand rebondit entre tous les champions groupés et transforme leur engage en condition de victoire pour toi."
    - examples: ["yuumi", "soraka", "senna"]
      archetype: "Carrys backline squishys avec escape faible"
      reason: "Pyroclasm priorise les cibles ablaze ; un E sur la frontline propage le blaze, et le R saute entre chaque ennemi groupé jusqu'à tuer le squishy au fond."
  counterpicks:
    - examples: ["zed", "akali", "fizz"]
      archetype: "Assassins mobiles avec plusieurs gap-closers"
      reason: "Ils sautent par-dessus ta Q avant que tu ne la places pour le stun. Sans le stun le kit n'a aucun peel pour toi-même, donc ils te suppriment avant que la R ne finisse son premier rebond."
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "Mages d'artillerie à plus longue portée"
      reason: "Leur seuil de poke dépasse la portée de ta Q. Brand n'a aucune mobilité pour combler la distance, donc à chaque wave ils te tiennent bas jusqu'à faire de toi un dive gratuit pour leur jungler."
    - examples: ["yasuo", "yone"]
      archetype: "Champions Wind Wall avec mobilité soutenue"
      reason: "Wind Wall bloque Q et la trajectoire du projectile de R ; ensuite ils dash au-delà de ta zone W. Brûler un slot défensif pour Zhonya's n'achète que la survie, pas la prio de lane."
---

## Aperçu

Brand est un **mage AP de burst** construit autour d'une seule mécanique — la passive **Blaze**. Chaque sort qu'il lance enflamme la cible pendant quatre secondes, jusqu'à 3 stacks. À 3 stacks le blaze devient instable et explose en une petite détonation AOE, réappliquant les effets de ses sorts à tous ceux pris dans le splash. Traduit en gameplay : chaque ability est un setup pour la suivante, et dès qu'un ennemi est en feu, ta **Q (Sear)** cesse d'être un sort de dégâts pour devenir un stun. Le kit pose deux questions en boucle — *la cible est-elle déjà ablaze ?* et *les ennemis sont-ils assez groupés pour que la R rebondisse ?* — et tout le plan de jeu découle de ces deux réponses.

Son plan de jeu en mid est direct : push la wave avec **W (Pillar of Flame)**, cherche les fenêtres **W → Q stun** dès que le laner adverse s'approche d'un minion à travers lequel tu peux le toucher, puis roam avec prio dès que la wave crash sous leur tour. À partir du niveau 6, **R (Pyroclasm)** est l'une des ultimates les plus puissantes du jeu *si* les ennemis sont groupés — tu as un setup à mi-portée par fight, aucun dash pour réessayer, aucune escape si tu rates. Le positionnement derrière la wave est obligatoire : Brand n'a aucune mobilité innée, aucun shield, aucun heal, et sa seule option défensive est d'acheter Zhonya's Hourglass et de pré-viser Flash.

## Build Recommandé

**Items de départ :** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Doran's Ring règle la faim de mana du spam de W et donne le scaling AP qui intéresse Brand plus que les dégâts plats early.

**Items core (dans l'ordre d'achat) :**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — l'objet identitaire de Brand. Sa passive applique un burn en pourcentage des HP par-dessus les stacks de blaze, multipliant les dégâts contre les tanks et les équipes à HP empilés. Mana, ability haste et AP correspondent exactement à ce que veut le kit.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic pen plat sur les squishys que tu veux le plus effacer avec les rebonds de R.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst supplémentaire, plus une passive qui ignore encore plus de Magic Resist sur les ennemis sous le seuil HP. Aligné parfaitement avec les rebonds de R qui chassent la cible la plus basse.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicateur de scaling late-game (40% AP bonus). Achète-le en troisième ou quatrième selon que l'équipe adverse a déjà commencé à empiler la Magic Resist.

**Items situationnels :**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contre divers et assassins (Zed, Akali, Diana, Fizz). La stasis est la seule réponse de Brand quand une chaîne de dash traverse sa frontline (les tanks et bruisers devant qui absorbent les coups pendant que tu tires de l'arrière).
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contre les CC magiques télégraphiés (Ahri charm, Lissandra R, Twisted Fate gold card). Le shield bloque le sort d'engage qui te lockerait sinon pour tout le fight.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contre les comps qui empilent les soins (Soraka mid, Vladimir, Dr. Mundo, Aatrox top). La passive Grievous Wounds coupe leur healing de moitié, donc ton burn se traduit vraiment en cibles mortes.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — dès qu'une cible prioritaire achète son premier objet de Magic Resist. Empêche l'adversaire de soft-counter toute ta build avec un composant à 800 gold.

**Bottes :** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** par défaut. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** sont acceptables si l'équipe a besoin de plus d'uptime de R sur les spawns d'objectif.

**Skill order :** Maxe **W** en premier (les plus hauts dégâts de base et le waveclear principal), **Q** en second (plus de dégâts et cooldown réduit sur le stun), **E** en dernier. Mets un point dans **R** aux niveaux 6, 11 et 16.

**Runes :** Arbre primaire **Sorcery** avec **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondaire **Inspiration** avec **Biscuit Delivery** et **Cosmic Insight**.

## Matchups clés

- **Yasuo / Yone :** Ils bloquent le projectile de **Q** et le début de **R** avec Wind Wall. Garde **Q** tant qu'ils n'ont pas brûlé leur mur, conserve **W** pour le frame de recovery, et n'utilise jamais **R** comme outil de flank (un "flank" c'est entrer dans un fight par un angle latéral, derrière la backline adverse) contre eux — fais-la partir après qu'un allié ait engage, comme ça les rebonds sont déjà en mouvement au-delà du mur.
- **Zed / Akali :** Menaces de dive avec plusieurs gap-closers (un "gap-closer" c'est tout dash, blink ou saut qui couvre du terrain rapidement). Achète Zhonya's Hourglass après Liandry's ; n'utilise jamais **Flash** offensivement en lane contre eux, et pré-pose **W** sous tes pieds pour les stun quand ils te sautent dessus.
- **Veigar :** Mage stationnaire que tu out-pressures pré-6. Push-le sous tour avec **W**, cherche la rotation **E → Q stun** quand il monte last-hit, et recall avant son palier de cage (niveau 6) qui retourne la lane.
- **Anivia :** Égalité pré-6, scale plus fort post-6. Évite de te coller à ta wave — son mur te sépare de tes minions et te force à un trade long depuis la backline. Roam en sidelane dès que ta **R** est up ; elle n'a aucune mobilité pour suivre.
- **Twisted Fate :** Course à la rotation. S'il te lance la gold card, **Q**-le avant qu'il ne ferme la distance (stun un champion qui cast annule la carte). Sinon, track sa **R** avec des wards sur la rivière et le tri-bush ; s'il ult sur sidelane, ping bot/top et push ta wave plutôt que de courir après lui.

## Power spikes & conditions de victoire

- **Niveau 2 (W + Q) :** Premier spike. Avec un point en **W** plus la **Q** de départ, tu as le combo **W → Q stun** complet. Pillar of Flame applique un stack de blaze ; Q sur une cible ablaze stun. Cette fenêtre, c'est quand tu push pour le first blood.
- **Niveau 6 (R débloquée) :** Premier **Pyroclasm** disponible. Cherche un teamfight au Scuttle (crabe de la rivière) ou au premier drake — si deux ennemis sont à portée de rebond, ta R fait à peu près 50% des HP d'un squishy par bounce.
- **Liandry's Torment terminé (~ minute 12-14) :** Le wave control bascule ("wave control" = qui décide où la wave de minions se bat, toi ou le laner adverse) parce que le burn en pourcentage HP punit les concentrations de wave. À partir de là, c'est toi qui push et roam, pas qui tient sous tour.
- **Rabadon's Deathcap en ligne (~ minute 24-28) :** Ta séquence complète de rebonds de R one-shot les squishys qui n'ont rien acheté en Magic Resist. Force les fights d'objectif groupés ici — Baron, Soul Drake, contests de late game.

## Erreurs courantes

- **Lancer Q en poke nu.** **Q** sans ablaze, c'est juste un projectile lent. Setup toujours d'abord avec **W** au sol ou **E** sur un minion qui propagera au champion — la différence c'est un stun de 1 seconde au lieu d'un miss tristement perdu.
- **Ult sur une cible isolée.** **R** rebondit entre cibles en priorisant celles ablaze. Si un seul ennemi est à portée, les rebonds vont et viennent sur cette même cible avec un damage falloff énorme par saut. Garde **R** pour les fights groupés ou pour exécuter deux ennemis ablaze côte à côte.
- **Push sans vision.** Brand n'a aucune escape (pas de dash, pas de blink, pas de shield). Push au-delà de la rivière sans ward dans leur jungle, c'est la façon la plus rapide de feed un gank early. Pose une Stealth Ward ou une Control Ward dans le tri-bush avant chaque shove.
- **Auto-attack pour les "dégâts en plus" de la passive.** Tes auto-attacks n'interagissent pas avec Blaze. Utilise la fenêtre d'auto pour marcher vers le prochain spot de **W**, pas pour chasser un coup de plus sur un minion bas.
- **Rater le timing de la détonation instable.** Quand tu atteins 3 stacks de blaze sur un champion, tu as deux secondes avant qu'elle ne détonne. Le stun avec **Q** *avant* la détonation l'enferme dans le splash et réapplique blaze sur tous les ennemis proches. Rater le timing, c'est la différence entre une kill single-target et un wipe AOE.

## Conseil avancé

Entraîne le **double-blaze AOE wipe**. Quand deux ennemis sont côte à côte (typique des teamfights serrés ou d'une wave empilée), fais ça dans l'ordre : **W** au sol entre eux → tous les deux prennent blaze stack 1. **E** sur l'ennemi A → blaze stack 2 sur A, propagation à B pour stack 2 sur B. **Q** sur A → blaze stack 3 sur A, A est stun et la détonation instable touche aussi B, le passant à stack 3. Maintenant **R** rebondit entre deux cibles stun et full-stack et transforme toute la rotation en un trade 2-pour-0. Cette séquence, c'est ce qui sépare un "Brand correct" d'un Brand qui carry la game.
