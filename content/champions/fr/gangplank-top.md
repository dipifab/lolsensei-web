---
title: "Gangplank Top Build & Guide — Patch 16.9"
slug: "gangplank-top"
language: "fr"
patch: "16.9"
champion: "gangplank"
role: "top"
last_updated: "2026-05-03"
description: "Guide Gangplank top lane pour League of Legends Patch 16.9 : starter kit, build crit Trinity Force, matchups clés, power spikes, erreurs et astuce avancée sur les barils chaînés."
quick_learn:
  champion_dd_id: "Gangplank"
  difficulty: 5
  damage_type: "mixed"
  champion_class: "Bruiser / Late-game crit caster"
  abilities:
    - key: "P"
      name: "Trial by Fire"
      description: "Auto-attaque potentialisée périodique qui brûle la cible en true damage sur quelques secondes. Force une fenêtre en mêlée — surveille son timer pour anticiper l'all-in de GP."
      dd_spell_id: "Gangplank_Passive"
    - key: "Q"
      name: "Parrrley"
      description: "Tir à 625 de portée infligeant des dégâts physiques, applique les on-hit (crit, Sheen de Trinity Force) et donne de l'or à la kill. Source principale de poke et détonateur de baril."
      dd_spell_id: "GangplankQWrapper"
    - key: "W"
      name: "Remove Scurvy"
      description: "Cleanse de tous les CC et soin basé sur les HP manquants. Cooldown long, coût en mana élevé — garde-le pour le CC qui décide du trade, pas pour un slow mineur."
      dd_spell_id: "GangplankW"
    - key: "E"
      name: "Powder Keg"
      description: "Pose un baril ; frappe-le pour le faire exploser, infligeant des dégâts physiques AOE et un slow. Deux barils adjacents se chaînent — le combo 3 barils chaînés est le pic de win-condition."
      dd_spell_id: "GangplankE"
    - key: "R"
      name: "Cannon Barrage"
      description: "Ulti globale : cible n'importe quel point de la map pour faire pleuvoir des boulets qui ralentissent et infligent des dégâts magiques. Améliorable en boutique avec le plunder (or bonus que la Q donne sur les unités tuées)."
      dd_spell_id: "GangplankR"
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3508", name: "Essence Reaver" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contre comps qui empilent les soins (Aatrox, Soraka, Vladimir, Dr. Mundo) — grievous wounds coupe les soins"
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contre tanks qui empilent les HP (Cho'Gath, Sion, Ornn) — l'armor pen scale avec l'avantage HP de la cible"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contre burst AP lourd (Kennen R, Vladimir, Rumble) — bouclier magique sous seuil HP qui te sauve du coup final"
    - dd_id: "3053"
      name: "Sterak's Gage"
      against: "contre comps all-in burst (Camille, Wukong R, engage Malphite) — bouclier HP qui déclenche au coup one-shot"
  base_combo: ["E", "E", "Q", "AA", "Q"]
  win_condition: "Survis à la lane jusqu'à Trinity Force, puis chaîne 3 barils en teamfight. Une Q crit sur 3 barils chaînés vise la backline et le fight est plié avant de commencer."
  weakness: "Aucun dash, mobilité innée nulle. Hard counter par les champions anti-auto-attaque (parry de Fiora, E de Jax) et l'engage hard-CC point-and-click impossible à cleanser à temps."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8444, name: "Demolish", icon_path: "perk-images/Styles/Resolve/Demolish/Demolish.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primaire : Grasp sustain les trades Trial by Fire et empile des HP permanents — le pattern que Gangplank cherche en scale. Demolish punit les tours sur roam adverse, Conditioning porte le late-game, Overgrowth gonfle le pool HP de Trinity Force."
    secondary_rationale: "Precision secondaire : Triumph rembourse HP et or sur les takedowns quand tu flank avec R — Gangplank dive souvent la backline, donc le heal sauve le follow-up. Legend: Alacrity monte l'attack speed pour détoner les barils plus vite et améliorer la cadence on-hit de la Q."
    secondary_alternative: "Contre matchups ranged poke (Teemo, Quinn, Vayne top) bascule Precision vers Inspiration avec Biscuit Delivery (HP et mana sustain dont tu manques) et Cosmic Insight (Flash et Teleport plus fréquents)."
matchup_draft:
  pick_into:
    - examples: ["sion", "nasus", "cho-gath"]
      archetype: "Scalers late-game immobiles"
      reason: "La Q de Gangplank atteint 625 unités, bien au-delà de leur portée d'auto-attaque pour farmer. Aucun dash pour combler la distance et punir un baril chaîné ; tu scales plus vite qu'eux dès que Trinity Force est online."
    - examples: ["darius", "garen", "sett"]
      archetype: "Bruisers mêlée sans disengage"
      reason: "Reste hors de leur threat radius grâce à la portée Q et ralentis-les avec les zones de Powder Keg. Quand ils ferment enfin, ils n'ont aucun follow-up pour te garder en mêlée — tu reset le trade et tu pars."
    - examples: ["urgot", "kled"]
      archetype: "Fighters à fenêtre early forte qui retombent"
      reason: "Farme à portée Q aux niveaux 1-3, garde W pour leur ulti niveau 6, puis outscale dès Trinity Force. Aucune réponse late-game à un combo de barils chaînés en teamfight."
  counterpicks:
    - examples: ["fiora", "jax"]
      archetype: "Fighters mobiles qui bloquent les auto-attaques"
      reason: "La W parry de Fiora stun Gangplank et reflète le CC ; le E de Jax esquive chaque auto et Q pendant deux secondes. Les deux cassent le pattern de trade dont Gangplank a besoin pour scale en late game."
    - examples: ["renekton", "olaf"]
      archetype: "Bullies early-window all-in"
      reason: "Le stun de Renekton niveau 2 plus son ulti niveau 6 cassent le plan de scaling de Gangplank avant Trinity Force. La R d'Olaf donne CC immunity, donc le W cleanse n'arrête pas sa course haches en true damage."
    - examples: ["malphite", "kennen"]
      archetype: "Engage hard-CC point-and-click"
      reason: "La R de Malphite est point-and-click sans skillshot à dodger. Le stun W de Kennen et son R AOE chaînent le CC au-delà de la fenêtre de cleanse W de Gangplank — une fois la chaîne lancée, le W n'arrive pas à temps."
---

## Aperçu

Gangplank est un top laner qui scale en late game en payant une lourde taxe en early game contre l'un des plafonds de dégâts crit les plus élevés du rôle. Son kit paraît chargé mais se résume à deux idées. **Parrrley (Q)** est une auto-attaque à distance avec 625 de portée qui applique les effets on-hit (chance de crit, proc du Sheen de Trinity Force, burn en true damage) et les transmet à distance. **Powder Keg (E)** est un baril posé qu'il frappe pour faire exploser ; deux barils adjacents se chaînent, et trois barils chaînent à nouveau. Le pattern signature consiste à empiler 3 barils chaînés et à les faire exploser à la Q sur une équipe ennemie groupée pour un burst instantané — gros dégâts livrés en une seconde.

Le plan de partie demande de la patience. Farme prudemment à portée Q dans la fenêtre bully des niveaux 1-6, complète Trinity Force vers la minute 14-16, et commence à pressuriser les side lanes avec **Cannon Barrage (R)** pour retourner les drakes ou voler des tours depuis l'autre bout de la map. En teamfight, place les barils derrière ta front line (les tanks et bruisers à l'avant de ton équipe), puis avance dans la chaîne uniquement quand tu peux la faire détoner sur la backline adverse (le carry posté derrière son équipe qui inflige les dégâts à distance). Si tu survis à la lane et atteins 3 items, chaque fight où tu connectes une Q crit sur baril chaîné est unilatéral.

## Build Recommandé

**Items de départ :** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** contre les bruisers mêlée — tu veux le lifesteal (dégâts d'auto-attaque qui te soignent) pour les trades (échanges courts où tu balances quelques sorts et tu pars). ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + Health Potion contre les matchups à distance (Teemo, Quinn, Gnar) — la régénération te laisse farmer sous le poke (dégâts à distance qui rongent les HP sans s'engager).

**Items core (dans l'ordre) :**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — Sheen (un bonus passif qui boost la prochaine auto-attaque après un sort) proc à chaque Q pour un boost massif. Attack speed, ability haste (la stat qui réduit le cooldown des sorts), HP — toute la stat-line est le pic de win-condition de Gangplank.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed pour détoner les barils plus vite et améliorer la cadence on-hit de la Q.
3. ![Essence Reaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3508.png) **Essence Reaver** — premier item crit ; rembourse du mana à chaque Q. Résout le problème mana de Gangplank et lance le scaling crit.
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — le pic de dégâts crit. Q crit et détonations de barils one-shot maintenant les cibles squishies (champions à faibles défenses, comme les ADC et les mages burst).
5. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — lifesteal pour le sustain dans les teamfights longs, plus un bouclier HP d'overflow quand tu restes au max de ta vie.

**Items situationnels :**

- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contre les compositions qui empilent les soins (Aatrox, Soraka, Vladimir, Dr. Mundo) ; la passive grievous wounds coupe les soins ennemis, donc tes dégâts restent au lieu d'être régénérés.
- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contre les tanks qui empilent les HP (Cho'Gath, Sion, Ornn). L'armor pen scale avec l'avantage HP de la cible sur toi.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contre le burst AP lourd (Kennen R, Vladimir, Rumble) ; le bouclier magique se déclenche quand tes HP tombent et te sauve du coup final.
- ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — contre les comps all-in burst (Camille E + R, Wukong R, engage Malphite R) ; le bouclier HP proc à l'instant du coup one-shot, te donnant la seconde nécessaire pour cleanser au W et reset.

**Bottes :** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** par défaut. Bascule sur ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** contre des équipes AD-heavy (3+ menaces physiques), ou ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contre les comps AP avec CC lourd où ton W sera souvent en cooldown.

**Skill order :** Maxe **Q** en premier (le scaling par rank de Parrrley est ta source de dégâts principale), **E** en second (cooldown de baril plus court = plus de chaînes), **W** en dernier. Mets un point dans **R** aux niveaux 6, 11 et 16.

**Runes :** Arbre primaire **Resolve** avec **Grasp of the Undying**, **Demolish**, **Conditioning**, **Overgrowth**. Secondaire **Precision** avec **Triumph** et **Legend: Alacrity**, ou **Inspiration** avec **Biscuit Delivery** et **Cosmic Insight** contre les matchups ranged poke.

## Matchups clés

- **Darius :** Hard bully early — sa Q soigne, son W ralentit, son R exécute ; il peut t'éteindre des niveaux 1-6. Farme à portée Q, ne conteste pas les minions en mêlée et garde **W** pour son pull E. Une fois ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** online, tu l'outscale en 1v1 ; jusque-là, la lane est un exercice de survie.
- **Sion :** Lane de farm gratuit. Lui empile cadavres et HP, toi tu empiles barils et crit. Push-le sous tour avec les barils E, prive-le des minions canon pour sa passive. Évite sa Q chargée point-and-click et tu l'outscale chaque game.
- **Fiora :** Pire matchup de lane. Son **W** est un parry — une fenêtre courte pendant laquelle elle absorbe ta prochaine auto-attaque ou ton sort, te stun et reflète tout CC. Même un slow de baril peut se retourner. Ne lance jamais **Q** sur son vital point (le point coloré sur son corps qu'elle doit toucher pour sa passive) — elle riposte (contre-attaque) à l'instant où ton projectile arrive. Farme sous tour, demande l'aide du jungler et accepte un déficit de CS ; tu ne peux pas la 1v1 tant que tu n'as pas 3 items et qu'elle n'est pas en retard.
- **Camille :** Matchup de dive niveau 6 (un dive c'est quand un ennemi rentre sous ta tour, mange quelques tirs et essaie de te tuer quand même). Elle t'enferme dans la cage de son ulti. Son **E** stun ignore le slow du baril et son **R** t'isole. Achète ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** plus tôt que d'habitude (4ème item) et garde Flash pour sa cage R, pas pour les trades de poke.
- **Malphite :** Hard counterpick — son R point-and-click n'a aucun tell de skillshot et ton **W** ne peut pas le cleanser s'il atterrit pendant que tu es en mid-cast. Garde ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** comme build-path d'urgence et ne prends jamais de teamfights sans vision sur son angle.

## Power spikes & conditions de victoire

- **Niveau 6 :** Le premier **Cannon Barrage** débloque la pression globale. Tu peux retourner un fight de drake avec R depuis la base, finir un ennemi qui fuit en mid lane avec la zone de slow, ou zone la bot lane hors d'un objectif — sans quitter ta wave.
- **Niveau 9 (Q max) :** Parrrley atteint son scaling complet par rank. Le coût mana tombe à 30 et les dégâts sautent ; tu peux poke n'importe quel matchup sans parry ni dodge et trade Q pour Q à ton avantage.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force complète (~ minute 14-16) :** Le plus gros pic. Sheen proc toutes les 1.5 secondes sur Q, l'attack speed coupe le temps de détonation des barils en deux et ton pool HP te laisse enfin survivre à une tentative de one-shot. C'est là que la lane bascule du défensif à l'agressif — tu peux engager des trades que tu devais éviter.
- **![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge online (~ minute 26-30) :** Q crit sur un cluster de 3 barils chaînés efface tout squishy en une seconde. Force les fights d'objectif ici et reste au bord de la frontline de ton équipe pour que la chaîne tombe sur les carries adverses.

## Erreurs courantes

- **Gaspiller W comme cleanse de panique au premier CC.** Garde **Remove Scurvy** pour le sort qui décide du trade — E de Camille, stun W de Renekton, stun W de Sett. Le brûler sur un polymorph de Lulu ou un slow mineur te laisse sans défense face à la vraie menace.
- **Empiler des barils avant Q rank 3.** En dessous du rank 3, le cooldown du baril est trop long pour le timing de chaîne, donc le deuxième baril expire souvent avant que le troisième soit prêt. Farme avec des barils isolés jusqu'au niveau 5, puis commence à entraîner les chaînes.
- **Utiliser R égoïstement sans coordonner avec l'équipe.** Cannon Barrage est un outil global d'engage — un sort qui lance un teamfight depuis l'autre bout de la map ; si tu la lâches sur une chasse 1v1 de poke, ton équipe perd le fight 4v5 à la maison. Ping toujours l'intention, synchronise avec le smite du jungler et regarde la minimap avant de lancer.
- **Acheter des items défensifs avant le scaling crit.** ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** paraît rassurant, mais si tu le construis avant ![Essence Reaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3508.png) **Essence Reaver** et ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge**, tu sacrifies le pic de dégâts qui justifie de pick Gangplank. Fais confiance au W cleanse et au pool HP de Trinity Force pour traverser le mid-game.
- **Oublier d'upgrader R avec le plunder.** Chaque Q qui tue une unité donne de l'or ; dépense-le en boutique pour améliorer Cannon Barrage (plus de dégâts, durée plus longue, zone de soin). Une R non upgradée à la minute 30, c'est environ 30% de dégâts perdus sur la même ulti.

## Conseil avancé

Entraîne le **barrel-jump combo** : pose le baril A, pose immédiatement le baril B à la distance maximale de chaîne (juste dans le rayon de link), puis auto-attaque le baril A. La détonation chaînée amorce le baril B ; pendant que B est à mi-chaîne, pose le baril C adjacent à B. Avec l'attack speed de ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** et la Q rank 5, tu peux entretenir un pattern de détonation continue toutes les 3-4 secondes, créant une zone AOE roulante autour de laquelle l'équipe ennemie est obligée de contourner. C'est la différence entre un Gangplank qui efface une backline et un Gangplank qui poke sans effet sur le bord du fight.
