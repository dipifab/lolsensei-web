---
title: "Ahri Mid Build & Guide — Patch 16.9"
slug: "ahri-mid"
language: "fr"
patch: "16.9"
champion: "ahri"
role: "mid"
last_updated: "2026-04-29"
description: "Guide Ahri mid lane pour League of Legends Patch 16.9 : starter kit, build mage/assassin, matchups clés, power spikes, erreurs courantes et astuce technique."
quick_learn:
  champion_dd_id: "Ahri"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Assassin"
  abilities:
    - key: "P"
      name: "Essence Theft"
      description: "Se soigne après avoir tué 9 minions ou monstres de jungle ; soin plus important sur un takedown de champion. Sustain en lane qui scale avec le farm."
      dd_spell_id: "Ahri_Passive"
    - key: "Q"
      name: "Orb of Deception"
      description: "Skillshot linéaire qui projette un orbe et le rappelle. Dégâts magiques à l'aller, dégâts true au retour. Outil principal de waveclear et de poke."
      dd_spell_id: "AhriQ"
    - key: "W"
      name: "Fox-Fire"
      description: "Libère 3 fox-fires qui se ciblent automatiquement sur les ennemis proches ; le premier coup fait dégâts pleins, les autres réduits. Donne aussi un bref boost de Move Speed."
      dd_spell_id: "AhriW"
    - key: "E"
      name: "Charm"
      description: "Skillshot qui charme le premier ennemi touché — il marche sans défense vers Ahri en subissant des dégâts. Outil de setup, jamais de poke à froid."
      dd_spell_id: "AhriE"
    - key: "R"
      name: "Spirit Rush"
      description: "Jusqu'à trois dashes courts dans une fenêtre réduite, chacun tirant des projectiles auto-ciblés. Les takedowns de champion étendent la fenêtre de recast. Mobilité plus execute."
      dd_spell_id: "AhriR"
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
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contre divers et assassins (Zed, Diana, Talon, Fizz) — la stasis te fait survivre après avoir committé R en teamfight"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contre les CC magiques single-target (Lissandra R, Twisted Fate stun, Morgana Q)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap dès qu'une cible prioritaire achète un objet de Résistance Magique (Mercury's Treads + item MR)"
    - dd_id: "4646"
      name: "Stormsurge"
      against: "premier item alternatif si l'équipe adverse a 4+ cibles squishy à one-shot — pick ceiling plus haut, dégâts soutenus inférieurs"
  base_combo: ["E", "R", "W", "Q", "AA"]
  win_condition: "Charme une cible squishy, dash dedans avec R, vide W et la Q de retour pour les dégâts true, puis sors avec les dashes restants de R. Transforme chaque pickoff en prochain dragon ou roam."
  weakness: "Pas de burst sans Charm. Si E rate, tu gaspilles tout le combo ; si R est en cooldown tu n'as plus d'escape et n'importe quel hard CC t'efface."
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
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "annie", "viktor"]
      archetype: "Mages immobiles sans dash"
      reason: "Le E (Charm) d'Ahri est un skillshot longue portée qui bloque la cible. Ceux qui n'ont ni dash ni stealth se font charmer sur une ligne propre et mangent tout le combo R + Q + W avant de pouvoir sortir du range."
    - examples: ["caitlyn", "senna", "ziggs"]
      archetype: "Carrys backline sans escape"
      reason: "Spirit Rush donne à Ahri trois dashes qui se reset sur les takedowns — elle peut plonger derrière la frontline, effacer un carry immobile et ressortir avant que le peel n'arrive."
    - examples: ["malzahar", "vladimir"]
      archetype: "Mages à dégâts soutenus sans burst"
      reason: "Le burst d'Ahri sur un combo R complet les efface en moins d'une seconde, avant que leurs dégâts soutenus ou leurs soins n'aient le temps de stack en un trade significatif."
  counterpicks:
    - examples: ["yasuo", "yone"]
      archetype: "Champions avec Wind Wall"
      reason: "Leur Wind Wall bloque Charm et l'orbe de Q. Ahri perd à la fois son outil de setup et son poke principal — elle doit entrer dans le mur pour toucher quoi que ce soit, exactement là où ils la veulent."
    - examples: ["fizz", "kassadin"]
      archetype: "Assassins mobiles avec mitigation magique"
      reason: "Fizz esquive les bolts de la R avec son E et sa passive réduit le burst magique ; Kassadin a un bouclier contre les dégâts magiques plus un blink. Ahri vide tout son combo et ils survivent avec un fil de HP, puis la tuent dans la frame de recovery."
    - examples: ["lissandra", "galio"]
      archetype: "Mages anti-assassin avec hard CC"
      reason: "Leur hard CC attrape Ahri en plein milieu de R : un seul root ou taunt pendant la fenêtre de dash annule à la fois les dégâts et l'escape, transformant une tentative de pickoff en kill gratuite pour eux."
---

## Aperçu

Ahri est un mage-assassin mid : elle poke à distance comme un mage (poke = harceler à distance pour grignoter les HP), mais **Spirit Rush (R)** lui permet de plonger sur une seule cible squishy (un champion fragile, type ADC ou mage), de la tuer et de ressortir en dash — un pattern appelé **pickoff** (éliminer un ennemi isolé, pas un teamfight complet). Son kit (l'ensemble des sorts du champion) tourne autour de **Charm (E)**, le skillshot qui bloque la cible en place : chaque autre sort est conçu pour s'enchaîner sur ce seul coup. La **R** a une particularité : chaque takedown sur un champion réinitialise un dash, donc un pick réussi permet d'en enchaîner un second dans le même fight.

Son plan de partie c'est patience, puis commit (engagement total dans un combo sans marche arrière). **Farme** avec **Q** (tue les minions pour les golds et l'expérience), pose des wards (sentinelles de vision) sur la rivière, et attend que l'ennemi se retrouve dans une position prévisible avant de tirer **E**. Une fois que **Charm** atterrit, le reste du combo est mécanique : tire la cible avec l'orbe de retour de **Q**, vide **W** pour les dégâts auto-ciblés, et utilise **R** soit pour fermer la distance soit pour t'enfuir. À partir du niveau 6 elle devient l'un des meilleurs champions de **roam** du jeu (quitter sa propre lane pour aller aider top ou bot) — chaque spawn de drake est une occasion de basculer la map.

## Build Recommandé

**Items de départ :** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Doran's Ring est le starter standard du mage : petit bonus d'AP (Ability Power, la stat qui scale les dégâts magiques), HP en plus, et régénération de mana pour spammer **Q** en early lane.

**Items core (dans l'ordre) :**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — spike de burst sur le premier hit de chaque sort et le sustain mana (régénération de mana pour ne pas tomber à sec) dont tu as besoin pour spammer **Q** à chaque cooldown. Objectif gold avant la minute 12.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plate (tes dégâts ignorent une quantité fixe de la Résistance Magique adverse).
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst supplémentaire avec une passive seuil de HP : elle s'active quand la cible passe sous environ 35% HP, parfaitement alignée sur l'execute de la **R** (achever un ennemi déjà à bas HP).
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicateur late-game. Augmente l'AP total de 35%, ce qui double quasiment les dégâts que chaque item précédent ajoute au combo.

**Items situationnels :**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contre les divers (champions qui plongent au corps à corps pour tuer une cible et ressortir) et les assassins (Zed, Diana, Talon, Fizz). L'actif te transforme en statue dorée intouchable (stasis) pendant 2.5 secondes, et te fait survivre après avoir committé **R** en profondeur dans un teamfight.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contre les CC magiques single-target (CC = crowd control : stuns, roots, ou tout ce qui te bloque en place). Le bouclier absorbe le premier sort qui t'immobiliserait.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — dès qu'une cible prioritaire de l'équipe adverse achète de la Résistance Magique (typiquement Mercury's Treads plus un item MR).
- ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — premier item alternatif quand l'équipe adverse a quatre cibles squishy ou plus à one-shot. Échange des dégâts soutenus contre un plafond plus haut sur le single-pick.

**Bottes :** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** par défaut. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** uniquement si la composition adverse a plusieurs chaînes de hard CC dirigées vers toi (hard CC = stun, root, knock-up, taunt — le type de CC qui te retire complètement le contrôle du champion).

**Skill order :** Maxe **Q** en premier (waveclear — nettoyer les vagues de minions vite — et DPS principal, damage per second), **W** en second (dégâts en fight), **E** en dernier — ses dégâts de base sont anecdotiques, seule la durée du charm scale vraiment. Mets un point dans **R** aux niveaux 6, 11 et 16.

**Runes :** Arbre primaire **Sorcery** avec **Arcane Comet** (un projectile magique différé qui se déclenche sur chaque hit de sort), **Manaflow Band** (plus de mana max, scale sur les hits de sort), **Transcendence** (ability haste — réduction de cooldown sur tous les sorts), **Scorch** (petit bonus de dégâts brûlure sur ton premier sort, toutes les 10 secondes — excellent pour le harass early lane : grignoter les HP adverses). Secondaire **Inspiration** avec **Magical Footwear** (bottes gratuites qui arrivent vers la minute 12) et **Cosmic Insight** (ability haste supplémentaire, y compris sur **Flash**, le summoner spell de téléportation courte distance que tu lies à F ou D).

## Matchups clés

- **Yasuo / Yone :** Tous les deux peuvent Wind Wall ta **Q** et ton **E** en plein vol (Wind Wall est un mur qu'ils posent et qui bloque tous les projectiles qui le traversent). Garde **E** tant qu'ils n'ont pas brûlé un sort, et farme à portée maximale avec **W** — ses trois fox-fires se ciblent automatiquement et passent par-dessus le Wind Wall, c'est ton seul outil de dégâts sûr face au mur.
- **Zed :** Une lane à pile ou face qui se décide sur les items. Avant le niveau 6, n'avance que quand sa **Q** est visiblement en cooldown. À partir du 6, garde **R** pour dasher hors de son ulti — committer **R** offensivement et ne plus avoir d'escape quand son ulti atterrit, c'est la façon la plus rapide de jeter la lane.
- **Galio :** Il te punit si tu te regroupes — son **W** taunt les cibles proches de ses alliés. Push la wave avec **Q** et roam en sidelane, où son ulti ne le suit pas aussi vite que tes trois dashes.
- **Twisted Fate :** Course à la rotation. Il a une pression globale avec sa **R**, tu as la mobilité à trois dashes — menace équivalente. Push chaque wave avec **Q** dès que son ulti est up, et ward les deux entrées de la rivière pour pouvoir répondre avec ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** s'il essaie de te gank (le jungler adverse arrive en lane pour te tuer).
- **Cassiopeia :** Elle outscale (devient plus forte sur la durée) dans les trades prolongés parce que son **W** annule les dashes de ta **R** (tu ne peux pas dasher à travers sa zone de grounding). Trade uniquement en bursts courts (un trade = bref échange de sorts et d'auto-attaques, pas un combat à mort), et ne committe jamais **R** offensivement quand son **W** est up.

## Power spikes & conditions de victoire

- **Niveau 2 :** Avec **Q + E** débloqués, tu as les outils pour une kill en lane si l'ennemi avance trop. Garde **E**, avance comme si tu allais last-hit (donner le coup final à un minion pour récupérer ses golds), puis claque le charm dès qu'il entre dans ta portée d'auto-attaque.
- **Niveau 6 :** Le premier **Spirit Rush** débloque le potentiel de pickoff. Le combo **E → R → W → Q** efface n'importe quel squishy qui n'a pas acheté un seul item défensif.
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion terminé (~ minute 12-14) :** Le contrôle de la wave bascule — tu peux shove (pousser une wave à fond jusqu'à la tour adverse) et roam à chaque cooldown. C'est le moment où ta win condition s'active : roam, charm, kill, dash dehors. Chaque pickoff réussi enclenche un **snowball** (avantage qui grossit avec le temps) — le gold d'une kill finance un item qui rend le pick suivant plus facile.
- **Spike trois items (~ minute 24) :** Avec tes trois items core en ligne, ton combo **R** complet efface n'importe quel champion de backline (les carrys — ADC, mage — qui se tiennent derrière les tanks) sous 70% HP. Force les fights d'objectif à ce moment (combats 5v5 pour le drake, le Baron, ou les tours).

## Erreurs courantes

- **Lancer E en poke sans setup.** **Charm** nu a un projectile lent et un long cooldown — la plupart des adversaires mid l'esquivent à la réaction. Utilise une wave ou un minion comme couverture et vise le couloir qu'ils sont obligés de prendre pour last-hit un minion.
- **Utiliser R pour engage (lancer le fight) au lieu de finish.** **Spirit Rush** est ton seul outil d'escape. Si tu dash dedans sans une cible que tu es sûr de tuer, tu offres ta fenêtre de dash et tu meurs quand leur équipe te tombe dessus (leurs alliés convergent sur toi parce que tu es maintenant coincée hors de position).
- **Spammer Q en poke et finir OOM.** OOM signifie out of mana — sans mana tu ne peux plus caster de sorts, donc tu deviens un auto-attaqueur inutile pendant 30 secondes. **Orb of Deception** coûte beaucoup de mana par cast : garde-le pour le waveclear et les trades sécurisés.
- **Oublier que R se reset sur takedown.** Quand tu sécurises une kill pendant **Spirit Rush**, la fenêtre de recast s'étend. Les joueurs qui intègrent ça enchaînent un pick dans un second pick dans le même teamfight au lieu de dasher dehors immédiatement après la première kill.

## Conseil avancé

Entraîne le **combo Q-back** : lance **Q** devant ta cible, puis utilise immédiatement **R** pour la traverser en dash. L'orbe sur son trajet de retour passe maintenant par l'ennemi à bout portant, infligeant la part de dégâts true (les true damage ignorent toutes les résistances adverses — même un tank les prend à pleine valeur) pendant que tu es déjà au corps à corps avec **W** qui tire en boucle. Une seule séquence **Q + R + W** jouée comme ça place trois instances de dégâts en moins d'une seconde — bien plus de burst que ce que le combo manuel **E → R → W → Q** suggère, et ça marche même quand **Charm** est encore en cooldown.
