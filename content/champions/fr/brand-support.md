---
title: "Brand Support Build & Guide — Patch 16.9"
slug: "brand-support"
language: "fr"
patch: "16.9"
champion: "brand"
role: "support"
last_updated: "2026-05-01"
description: "Guide Brand support pour League of Legends Patch 16.9 : pression agressive en lane, build de poke, matchups clés, power spikes, erreurs courantes et un conseil final."
quick_learn:
  champion_dd_id: "Brand"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Poke Support"
  abilities:
    - key: "P"
      name: "Blaze"
      description: "Les sorts de Brand mettent la cible en feu (dégâts dans le temps sur 4s, jusqu'à 3 stacks). À 3 stacks le blaze détone en petite explosion AOE qui réapplique les effets des sorts."
      dd_spell_id: "Brand_Passive"
    - key: "Q"
      name: "Sear"
      description: "Skillshot linéaire à dégâts magiques. Si la cible est déjà ablaze, elle est stun — ton setup de kill pour l'AD carry."
      dd_spell_id: "BrandQ"
    - key: "W"
      name: "Pillar of Flame"
      description: "Zone AOE retardée après un court tell. Les cibles ablaze prennent +25% de dégâts. Le poke le plus violent du kit."
      dd_spell_id: "BrandW"
    - key: "E"
      name: "Conflagration"
      description: "Explosion ciblée qui rebondit sur les ennemis proches. Si la cible principale est ablaze, le rayon de propagation double — applique blaze à deux ennemis en un cast."
      dd_spell_id: "BrandE"
    - key: "R"
      name: "Pyroclasm"
      description: "Boule de feu longue portée qui rebondit jusqu'à 5 fois entre ennemis, en priorisant les cibles ablaze. Gagne les teamfights quand l'ADC et le support adverses sont collés."
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
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "contre les hard CC sur ton ADC (chaîne de stun Leona, Q de Morgana, hook de Pyke)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contre les comps avec gros AOE engage (Malphite, Yasuo, Wukong, Kennen)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contre les comps qui empilent les soins (Soraka, Yuumi peel, équipe avec Aatrox ou Vladimir)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap dès qu'une cible prioritaire termine son premier objet de Résistance Magique"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "Pression 2v2 avec le poke W avant niveau 3, puis cherche les setups E + Q stun pour ton ADC. Post-6, les rebonds de R entre ADC et support adverses collés transforment la lane en snowball."
  weakness: "Aucun shield, aucun heal, aucun peel pour l'ADC. Si le support adverse engage en premier, Brand ne peut pas protéger sa carry — il peut seulement tuer l'engager plus vite que l'engager ne tue la carry."
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
    primary_rationale: "Sorcery primaire : Arcane Comet auto-proc à chaque hit de W ou E, ajoutant du poke gratuit à chaque cooldown. Manaflow Band tient le mana pour spam W en 2v2, Transcendence pousse l'ability haste au-delà de 40%, Scorch finit les ennemis bas-HP sous tour."
    secondary_rationale: "Inspiration secondaire : Biscuit Delivery règle la faim de mana de Brand sur les 6 premiers niveaux et Cosmic Insight donne plus d'uptime sur Flash — Flash est ton seul moyen de dodge un engage, le kit n'a aucune escape native."
    secondary_alternative: "Contre les hookers lourds (Blitzcrank, Thresh, Pyke) où il faut survivre au premier hook pour gagner la lane, swap Inspiration vers Resolve avec Bone Plating (réduit les dégâts back-to-back du combo de hook) et Revitalize (booste ton seul outil défensif, le shield de Mikael's)."
matchup_draft:
  pick_into:
    - examples: ["yuumi", "soraka", "janna"]
      archetype: "Enchanters squishys à HP faibles"
      reason: "Le W de Brand outpoke leur portée de heal et la rotation E + Q les tue avant que la carry ne puisse les peel. Yuumi perd son corps en une seule rotation complète ; Soraka ne peut pas heal à travers les ticks de blaze."
    - examples: ["zilean", "karma", "lulu"]
      archetype: "Supports utility sans engage"
      reason: "Brand gagne la phase de lane par la force — ils ne peuvent pas punir le spam de W parce que leur kit sert à shield la carry, pas à trade. Après le niveau 6 leur CC est single-target alors que ta R touche les deux d'un coup."
    - examples: ["caitlyn", "ezreal", "varus"]
      archetype: "ADC longue portée sans escape"
      reason: "Ces ADCs restent à portée max pour last-hit ; un E sur leur support spread blaze sur eux, ta Q pose le stun et l'AD carry derrière toi prend le kill avant qu'ils puissent flash."
  counterpicks:
    - examples: ["leona", "nautilus", "rell"]
      archetype: "Supports tank hard-engage"
      reason: "Ils engagent hors portée du W de Brand avec une chaîne flash-stun. Il n'a aucun peel pour lui ni pour sa carry — dès que Leona stun, le kit n'a pas de réponse à part mourir ou cramer Flash + Zhonya's ensemble."
    - examples: ["rakan", "alistar"]
      archetype: "Supports engage mobiles"
      reason: "Rakan dash à travers tes skillshots et arrache ton ADC de sa position ; la chaîne headbutt-pulverize d'Alistar saute le stun de la Q. Brand ne réagit pas assez vite à l'un comme à l'autre."
    - examples: ["pantheon", "blitzcrank"]
      archetype: "Supports all-in qui matchent le burst de Brand"
      reason: "La Q de Pantheon et le hook de Blitzcrank ont des portées effectives proches de la Q de Brand. Le premier qui pose son setup gagne le trade, et tous les deux ont une survie intégrée (block d'Aegis, hook-and-leave) que Brand n'a pas."
---

## Aperçu

Brand support est le caster support le plus agressif du jeu. Il n'apporte aucun des outils qu'un support traditionnel apporte — pas de shield, pas de heal, pas de peel pour la carry ("peel" = sorts qui protègent un allié en repoussant ou stun les attaquants), pas d'engage qui se termine sur un cooldown de survie tank. Ce qu'il apporte à la place, c'est une **threat de kill plate dès la minute 1**. Chaque sort met le feu à l'ennemi (passive **Blaze**), et dès qu'un ennemi brûle, ta **Q (Sear)** cesse d'être un sort de dégâts pour devenir un stun. Le plan de lane : pokes-les avec **W (Pillar of Flame)** jusqu'à ce que deux stacks de blaze tiennent, **E** pour spread blaze sur les deux cibles, et **Q** le stun pour que ton ADC s'avance et finisse le kill.

Le prix, c'est la fragilité. Brand n'a pas d'escape, pas de sustain natif, et aucun outil pour protéger son AD carry. Si le support adverse engage en premier — stun Leona, hook Nautilus, dash Rakan — ta seule vraie réponse est *tuer l'engager plus vite qu'il ne tue ta carry*, ce qui ne marche que quand tu es devant. Le pick est binaire : soit tu stomp la lane et tu snowball (un snowball est une avance précoce qui grossit : kill → gold → item → plus de kills), soit tu meurs early et tu nourris deux ennemis. Il n'y a presque pas d'entre-deux, et c'est pour ça que ce guide insiste autant sur le spike niveau 2 et sur les rebonds de **R** en teamfight comme les deux moments à exécuter sans faute.

## Build Recommandé

**Items de départ :** ![Spellthief's Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3850.png) **Spellthief's Edge** (le starter support AP qui quest vers Bloodsong) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**.

**Items core (dans l'ordre) :**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — la quest reward du support depuis Spellthief's Edge. Obligatoire : il donne le revenu en gold qui te permet d'acheter de vrais items, plus un stack d'AP-on-takedown qui snowball ton damage.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — l'item de dégâts identitaire de Brand. Burn en pourcentage de HP qui s'empile sur tes ticks de blaze, punissant les tanks et les équipes avec HP empilés.
3. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — bottes d'ability haste, prioritaires sur Sorcerer's Shoes ici parce qu'en support tu cast plus de sorts et farm moins de minions. Plus de R par teamfight.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst supplémentaire et passive qui ignore encore plus de magic resist sur les ennemis sous le seuil HP. S'aligne avec les rebonds de R qui chassent la cible bas-HP.

**Items situationnels :**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — contre les hard CC sur ton ADC (chaîne de stun Leona, Q de Morgana, hook de Pyke). Cleanse le CC sur ta carry, c'est ce qui se rapproche le plus du peel chez Brand.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contre les comps avec gros AOE engage (R Malphite, wombo Yasuo — un "wombo" c'est quand plusieurs ultimes s'enchaînent pour catch toute ton équipe d'un coup, R Kennen). Le shield actif est un bouton "sauver le teamfight".
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contre les comps qui empilent les soins (Soraka, Yuumi peel, équipe avec Aatrox ou Vladimir). La passive Grievous Wounds coupe leur heal de moitié.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — dès qu'une cible prioritaire termine son premier item de magic resist. Empêche un seul composant à 800 gold de soft-counter ta build.

**Bottes :** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** par défaut. Swap ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** si l'équipe adverse a 3+ menaces de hard CC à dégâts magiques.

**Skill order :** Maxe **W** en premier (dégâts de base les plus élevés et poke principal en 2v2), **Q** en second (plus de dégâts sur le stun), **E** en dernier. Mets un point dans **R** aux niveaux 6, 11 et 16.

**Runes :** Arbre primaire **Sorcery** avec **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondaire **Inspiration** avec **Biscuit Delivery** et **Cosmic Insight**.

## Matchups clés

- **Leona / Nautilus / Rell :** Supports tank hard-engage. Reste hors portée de leur flash-engage tant que tu n'as pas ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing**. Pré-place **W** sur toi-même quand ils s'avancent, prêt à **Q** le stun à l'instant où ils engage.
- **Blitzcrank / Thresh / Pyke :** Hookers. Reste toujours derrière un minion — leur hook est un skillshot single-target que la wave bloque. Punis les hooks loupés avec **W → Q** pour du poke gratuit ; n'auto-attack jamais à découvert quand leur hook est up.
- **Yuumi :** Lane gratuite. Yuumi n'a pas de corps quand elle n'est pas accrochée. Time **W** pour qu'il atterrisse au moment où elle se détache pour last-hit ou proc son auto empowered. Une Yuumi détachée prise par **W → Q** est un kill avant que sa carry ne puisse la shield.
- **Soraka :** Out-pression-la en empilant le poke jusqu'à ce que son mana soit à sec. Soraka heal son ADC à 5% de ses propres HP — chaque tick de blaze sur l'ADC efface 30 secondes de son heal.
- **Lulu :** Polymorph et shield rendent les bursts 1v1 peu fiables. Poke à portée max de **W**, ne commit jamais au stun-into-all-in (un "all-in" c'est l'engagement total sur le kill — pas de sortie, tu vas jusqu'à ce que l'un meure) sauf si ta jungle arrive ; si Lulu polymorph ton ADC en plein trade, le trade est perdu.

## Power spikes & conditions de victoire

- **Niveau 2 (W + Q) :** Premier spike. Avec un point en **W** et la **Q** que tu as au départ, le combo **W → Q** stun est online. Cette fenêtre concentre 90% des kills de Brand support — push la wave pour atteindre niveau 2 en premier, puis pose le combo sur le support adverse.
- **Niveau 6 (R débloqué) :** Première **Pyroclasm** disponible. Si la bot lane adverse est collée (presque toujours — les supports stack derrière leur ADC), une seule **R** fait environ 50% des HP d'un squishy par rebond.
- **Bloodsong + Liandry's Torment online (~ minute 14-16) :** Les dégâts basculent. À partir de là tu out-damage tous les enchanters supports et tu menaces le kill sur un ADC nourri. Force les fights groupés sur drake.
- **R + Shadowflame online (~ minute 22-26) :** Deux ennemis groupés mangent toute la séquence de rebonds et meurent. C'est là que Brand gagne les teamfights depuis l'arrière — choisis des angles où la carry et le support adverses sont à portée de rebond l'un de l'autre.

## Erreurs courantes

- **Auto-attack la wave pour les last-hits.** En support, tu ne prends pas les last-hits — c'est le gold du farm de l'AD carry qui finance la lane. Reste en retrait, poke avec **W**, et n'auto-attack un minion que si ta carry est morte ou en recall.
- **Lancer Q en poke nu.** **Q** sans ablaze, c'est un projectile lent qui rate sur les ennemis qui side-step. Pose **W** au sol d'abord, ou **E** sur un minion qui propage blaze — ensuite Q pour le stun.
- **Te placer devant ton ADC.** Brand n'a aucun peel pour lui-même ni pour personne. Si tu es devant, l'engage te touche, tu meurs, ton ADC est sans support. Reste à la même profondeur ou un pas derrière, avec un minion entre toi et le hook.
- **Ulti un seul ennemi.** **R** rebondit entre les cibles en priorisant les ablaze, mais avec une grosse perte de dégâts par saut sur une seule cible. Garde **R** pour les fights où deux ou trois ennemis sont à portée de rebond — ne l'utilise jamais comme finisher sur une cible isolée qui fuit.
- **Pré-placer W sur la position actuelle de l'ennemi.** Pillar of Flame a un délai avant d'atterrir. Cast là où l'ennemi *sera* dans 0.6 seconde — typiquement le couloir qu'il doit traverser pour rejoindre le prochain minion ou échapper à ton stun. La poser sur sa position actuelle, c'est un miss garanti contre n'importe quel adversaire mi-attentif.

## Conseil avancé

Entraîne le **double-spread setup**. Quand le support et l'ADC adverses sont collés (typique quand ils push la wave ou quand le support écran l'ADC), fais dans l'ordre : **W** entre eux deux → ils prennent tous les deux blaze stack 1. **E** sur le support adverse → blaze stack 2 sur le support, propagé sur l'ADC pour stack 2 sur l'ADC. Les deux cibles sont maintenant à 2 stacks — tu n'as plus besoin de **Q** pour préparer le stun, tu en as besoin comme *finisher*. Q sur le support : stack 3 atterrit, le support est stun, la détonation instable touche aussi l'ADC et le passe à stack 3. **R** rebondit alors entre deux cibles stun à blaze max, les deux meurent et tu ne trade rien en retour. C'est la rotation qui transforme un "Brand support correct" en un Brand qui gagne sa lane à chaque partie.
