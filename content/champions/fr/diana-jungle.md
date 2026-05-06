---
title: "Diana Jungle Build & Guide — Patch 16.9"
slug: "diana-jungle"
language: "fr"
patch: "16.9"
champion: "diana"
role: "jungle"
last_updated: "2026-04-29"
description: "Guide Diana jungle pour League of Legends Patch 16.9 : clear initial, timings Scuttle et Drake, routes de gank, build AP burst, matchups clés, power spikes et erreurs courantes."
quick_learn:
  champion_dd_id: "Diana"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Moonsilver Blade"
      description: "Toutes les trois basic attacks frappent en cône les ennemis proches pour des dégâts magiques bonus. Lancer un sort donne de l'attack speed 5 secondes : moteur du clear jungle."
      dd_spell_id: "Diana_Passive"
    - key: "Q"
      name: "Crescent Strike"
      description: "Skillshot en arc qui marque la cible avec Moonlight 3 secondes. La marque débloque le reset de E et sert de setup pour les ganks."
      dd_spell_id: "DianaQ"
    - key: "W"
      name: "Pale Cascade"
      description: "Trois orbes qui infligent des dégâts magiques au contact et donnent un bouclier. Excellent pour les duels et clear les camps sans perdre de HP."
      dd_spell_id: "DianaOrbs"
    - key: "E"
      name: "Lunar Rush"
      description: "Dash ciblé infligeant des dégâts magiques. Le cooldown se reset sur une cible marquée par Q : moteur de ton gap-close."
      dd_spell_id: "DianaTeleport"
    - key: "R"
      name: "Moonfall"
      description: "Tire vers soi et ralentit les ennemis proches, puis explose sur Diana pour des dégâts magiques de zone. Seul CC du kit (CC = crowd control, contrôle) : courte portée."
      dd_spell_id: "DianaR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "W" }
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contre tanks hard-engage (Malphite, Sejuani, Leona) : la stasis dodge leur CC chain après ta R"
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "contre comps avec deux frontlines à gros HP ou plus (Cho'Gath, Ornn) : burn scale sur HP"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap dès qu'une cible prioritaire achète de la Magic Resist (Mercury's Treads, Spirit Visage)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contre comps qui empilent les soins (Soraka, Vladimir, Dr. Mundo, Aatrox)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contre CC magique single-target (Ahri charm, Lissandra R, Twisted Fate stun)"
  base_combo: ["Q", "E", "R", "W", "AA"]
  win_condition: "Lance Q depuis le fog, dash sur la cible marquée avec E, R pour la séparer de son équipe, puis W et basic-attack reset avec le follow-up de ton équipe. Force les fights niveau 6 sur les objectifs."
  weakness: "Portée effective courte (E à 825 unités seulement). Champions avec disengage fort (R de Janna) ou peel te détachent du carry ; sans Q mark, pas de second dash pour fuir."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["graves", "kindred", "kha-zix"]
      archetype: "Squishy carry junglers without hard CC"
      reason: "Diana gagne les duels longs dans leur jungle : Pale Cascade shield une rotation de dégâts, puis Lunar Rush reset sur la Q mark pour un re-engage qu'ils ne peuvent pas kite."
    - examples: ["nidalee", "elise", "shaco"]
      archetype: "Early-game gank-focused junglers"
      reason: "Leur power dip arrive niveau 6 alors que la R de Diana ouvre la pression mid-game. Match leur tempo de first-clear et trade des objectifs jusqu'à ce que Luden's Echo retourne la game."
    - examples: ["amumu", "warwick"]
      archetype: "Slow-clearing low-mobility junglers"
      reason: "Diana clear plus vite avec ses passive resets et arrive avant au Scuttle Crab. Counter-jungle les camps de derrière après chaque Drake : ils ne peuvent pas roter à temps."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "vi"]
      archetype: "Front-loaded burst junglers with hard CC"
      reason: "Ils invade niveau 3 avant que Diana ait sa E et cassent son clear. Leur CC bypass le shield de Pale Cascade : un 1v1 dans leur jungle pre-6 est une kill gratis pour eux."
    - examples: ["jarvan-iv", "sejuani", "rammus"]
      archetype: "Tank junglers with built-in disengage or knock-up"
      reason: "La R de Diana ne marche qu'à melee range : ces tools de counter-engage la sortent de la pull window avant que Moonfall finisse le channel et gâchent son seul CC."
    - examples: ["udyr", "olaf"]
      archetype: "Sustained-damage bruisers with cleanse or unstoppable"
      reason: "Ils marchent à travers Moonfall (R d'Olaf cleanse le CC, R d'Udyr ignore le pull) et out-DPS Diana une fois le shield tombé : elle n'a pas de seconde escape."
---

## Aperçu

Diana est une diver à dégâts magiques : assassin melee avec shield intégré, dash gratuit sur cible marquée et l'un des engages à un bouton les plus forts du jeu (un engage = l'action qui ouvre le fight). En jungle, elle troque les ganks early contre un clear rapide et snowball au niveau 6 — snowball est l'avance précoce qui grandit dans le temps (kill → gold → item → plus de kills). Quand **Lunar Rush (E)** peut chaîner une kill en un second dash, elle devient le pick "appuie R, supprime le carry" par excellence. (Une diver est un melee qui saute sur la back line de l'équipe adverse.)

Son game plan en tant que jungler : pousser le premier clear avec **Pale Cascade (W)** et l'on-hit de **Moonsilver Blade (P)**, prendre le **Scuttle Crab** (le crabe de la rivière qui donne de la vision et un petit speed shrine) vers 3:30, puis ganker les lanes avec vision setup. Après le niveau 6, chaque teamfight près d'un Drake ou du Rift Herald est une win condition : **Moonfall (R)** tire les priority targets et ton équipe finit le travail.

## Build Recommandé

**Starting items :** ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** + Refillable Potion. Le pet Gustwalker donne du movement speed hors combat, parfait pour le mid game gank-heavy de Diana. Skip Mosstomper (pet sustain) : ta **W** shield déjà un cycle de clear.

**Core items (in order) :**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — premier spike de burst (burst = dégâts élevés en 1-2 secondes), AP et ability haste. Les bolts shred les cibles squishy dès que tu E sur elles.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plate. Boots par défaut dans 95% des games.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst supplémentaire, le passif HP-threshold (passif qui s'active sous un seuil de HP, ici 35%) s'aligne parfaitement sur ton finisher R-into-E.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicateur de scaling late-game. Ton plus gros slot d'AP en un seul item.

**Situational items :**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contre tanks hard-engage (Malphite, Sejuani, Leona). Active la stasis (tu deviens invulnérable mais ne peux ni bouger ni agir 2.5 secondes) juste après ta R : le follow-up CC ennemi tombe dans le vide.
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — quand l'équipe adverse a deux frontlines à gros HP ou plus (Cho'Gath, Ornn) : le burn scale sur leur pool de HP et tick pendant que tu te repositionnes.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — dès qu'une cible prioritaire achète de la Magic Resist (Mercury's Treads, Spirit Visage).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contre comps qui empilent les soins (Soraka, Vladimir, Dr. Mundo, Aatrox).
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contre CC magique single-target (crowd control : stuns, roots, charms) comme l'Ahri charm ou la R de Lissandra.

**Boots :** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** par défaut. Swap pour ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** contre comps AD-lourdes avec deux AD threats, ou Mercury's Treads contre beaucoup de CC magique.

**Skill order :** Max **Q** en premier (waveclear, dégâts Q supplémentaires, fenêtre Moonlight plus longue). Max **W** en second (valeur du shield et clear speed). **E** en dernier — elle gagne en portée par rang mais ce qui compte c'est le reset de cooldown sur Moonlight, pas le scaling brut. Prends **R** aux niveaux 6, 11, 16.

**Runes :** Primaire **Domination** avec **Electrocute**, **Sudden Impact**, **Sixth Sense**, **Ultimate Hunter**. Secondaire **Sorcery** avec **Manaflow Band** et **Transcendence**. Stat shards : Adaptive Force / Adaptive Force / Magic Resist (ou Health contre beaucoup de poke).

## Matchups clés

- **Lee Sin :** Évite les invades niveau 2 — son follow-up Q-Q bat ton W shield. Ward ton blue buff top-side et clear bot-to-top pour le rejoindre au Scuttle avec les passive procs prêts.
- **Graves :** Tu l'out-duel après le niveau 6. Engage depuis le fog (la partie non-wardée de la jungle, fog of war) avec **Q** pour que la portée de son dash ne dodge pas la mark ; une fois Moonlight sur lui, **E** est un gap-close garanti (gap-close = compétence qui réduit la distance avec l'ennemi).
- **Elise :** Course aux power spikes. Elle gagne les ganks niveau 3, tu gagnes le fight niveau 6. Match son tempo de first-clear, hover Drake avec vision pour qu'elle ne le solo pas.
- **Jarvan IV :** Matchup difficile. Son knock-up E-Q cancel le channel de ta **R**. Attends qu'il commit sa combo en premier, puis E sur lui pour le trade. Achète ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** plus tôt que d'habitude.
- **Kha'Zix :** Matchup égal qui tourne en ta faveur à l'item 2. Il te burst en melee range ; bait l'isolation jump à HP bas, **W**-shield sa Q, puis E-R reset. Ne traverse jamais ta jungle sans ward control ou tu manges un isolated jump gratis.

## Power spikes & conditions de victoire

- **Niveau 3 (Q + W + E) :** Kit complet. Le premier clear finit autour de 3:15 — rush Scuttle Crab avant le jungler adverse. La vision de la rivière plus le shrine 50 HP setup le reste de ta map.
- **Niveau 6 (première Moonfall) :** Power de skirmish mid-river (un skirmish est un petit fight 2v2 ou 3v3, pas un teamfight complet). Q depuis un brush, E sur la cible marquée, R pour tirer leurs deux carries ensemble — tes laners burst le reste. L'effet pull niveau 6 le plus fort du pool jungler.
- **![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Echo completion (~ minute 9-11) :** Spike de burst. Une combo Q-E propre sur une cible squishy (champion à faibles défenses, comme les ADC et la plupart des mages) supprime 60-70% de ses HP avant que son équipe ne réagisse. Force les fights sur le second Drake.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minute 22-25) :** Seuil de one-shot contre n'importe quelle squishy sans item de Magic Resist. Cherche les picks (éliminer un ennemi isolé hors du teamfight) sur le setup vision Baron ou Elder Dragon.

## Erreurs courantes

- **Marcher dans des wards à l'approche du gank.** Le seul stealth tool de Diana, c'est le fog. Passe par la rivière ou par ta jungle, et fais clear la ward du bush par ton laner avant de commit.
- **Lancer R sur la front line.** Ta R tire tout le monde dans un rayon de 475 — tirer le tank vers ton équipe est exactement ce qu'ils voulaient. Attends que l'engage se développe, puis R sur la back line (back line = les carries qui font des dégâts depuis une position safe).
- **Utiliser E en cooldown sans Q mark.** Sans Moonlight, **E** a 14 secondes de cooldown et une portée courte. Toujours Q d'abord : le reset sur cible marquée est ce qui rend Diana mobile.
- **Greed le troisième camp au premier clear.** Si le jungler adverse est plus rapide (Graves, Shyvana, Karthus), tu perds la course à l'invade niveau 3. Cross-map check les laners adverses : si mid est missing, le full-clear est un piège.
- **Over-commit un gank sans sortie.** Diana n'a pas d'escape intégrée après E. Si la lane n'a ni slow ni follow-up CC, ton engage devient un 1v3 dès que les summoners ennemis remontent.

## Conseil avancé

Entraîne la combo **Q-Flash-E-R** comme starter de teamfight. Avec ta Q en vol, Flash en avant au moment de l'impact : la cible marquée apparaît à côté de toi, **E** chain immédiatement sur le reset Moonlight, et ta **R** attrape toute leur back line agglutinée sur le carry. La combo gagne des fights que tu n'avais aucun droit de gagner — mais elle demande la muscle memory pour Flash en pleine animation de Q, pas après l'atterrissage du projectile. Drill-la dans le practice tool sur un dummy immobile jusqu'à ce que l'ordre des inputs devienne automatique.
