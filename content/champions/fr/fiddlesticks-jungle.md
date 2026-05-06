---
title: "Fiddlesticks Jungle Build & Guide — Patch 16.9"
slug: "fiddlesticks-jungle"
language: "fr"
patch: "16.9"
champion: "fiddlesticks"
role: "jungle"
last_updated: "2026-05-02"
description: "Guide Fiddlesticks jungle pour League of Legends Patch 16.9 : build AP, engage Crowstorm, matchups clés, power spikes, erreurs courantes et une astuce finale."
quick_learn:
  champion_dd_id: "Fiddlesticks"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Specialist"
  abilities:
    - key: "P"
      name: "A Harmless Scarecrow"
      description: "Le slot trinket devient des charges d'effigie. Pose de faux épouvantails pour la vision ; les ennemis qui les voient subissent un fear bref et l'effigie explose."
      dd_spell_id: "Fiddlesticks_Passive"
    - key: "Q"
      name: "Terrify"
      description: "Cible un seul ennemi. Lui infliger des dégâts par sort en étant unseen le Terrify aussi. Le fait fuir loin de toi pendant 1-2.5s."
      dd_spell_id: "FiddleSticksQ"
    - key: "W"
      name: "Bountiful Harvest"
      description: "Channel qui draine les HP des ennemis proches (te soigne). En fin de channel, dégâts bonus d'exécution. Outil principal de clear et sustain en jungle."
      dd_spell_id: "FiddleSticksW"
    - key: "E"
      name: "Reap"
      description: "Faux boomerang en cône large : ralentit tous les ennemis touchés et silence ceux dans la ligne centrale. Aller-retour, frappe deux fois."
      dd_spell_id: "FiddleSticksE"
    - key: "R"
      name: "Crowstorm"
      description: "Channel de 1.5s, puis blink à la zone ciblée avec dégâts AOE par seconde autour de Fiddle pendant 5s. À lancer depuis le fog of war ou derrière un mur."
      dd_spell_id: "FiddleSticksR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "E" }
    - { level: 9, key: "W" }
    - { level: 10, key: "E" }
    - { level: 11, key: "R" }
    - { level: 12, key: "E" }
    - { level: 13, key: "E" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contre CC magique single-target qui interrompt ta R (Lissandra R, Veigar E, Twisted Fate stun)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap quand 2+ ennemis montent un item de Magic Resist (seuil ~200+ MR)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contre comps qui empilent les soins (Aatrox, Soraka, Vladimir, Dr. Mundo) — applique Grievous Wounds"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "quand il faut du Movement Speed extra pour chase ou rentrer dans le range de Crowstorm depuis le fog"
  base_combo: ["R", "Q", "E", "W"]
  win_condition: "Lance Crowstorm depuis le fog of war sur 2+ ennemis groupés sur un objectif. Bountiful Harvest finit les survivants pendant que le silence de Reap empêche le counter-engage."
  weakness: "Le channel de 1.5s du R est interrompu par CC dur single-target, dashes et Cleanse/QSS. Sans surprise depuis le fog, l'engage se télégraphe et l'équipe te kite hors de portée."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8128
      name: "Dark Harvest"
      icon_path: "perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Dark Harvest stack vite sur les fights groupés via l'AOE de Crowstorm. Sudden Impact proc sur le blink de R pour de la magic pen extra. Treasure Hunter accélère Liandry's. Ultimate Hunter coupe le cooldown de Crowstorm pour enchaîner les ults entre objectifs."
    secondary_rationale: "Sorcery secondaire : Manaflow Band règle les soucis de mana early-jungle pendant le spam de W ; Gathering Storm scale en un power spike late qui s'aligne avec Rabadon's Deathcap."
    secondary_alternative: "Contre engage CC dur single-target (Lissandra, Malzahar, Veigar) swap Sorcery pour Resolve avec Bone Plating (réduction de dégâts 5s après le premier coup) et Revitalize (+5% au heal de Bountiful Harvest)."
matchup_draft:
  pick_into:
    - examples: ["udyr", "warwick", "master-yi"]
      archetype: "Junglers farmeurs sans outil de flank"
      reason: "Ils scalent linéairement avec le farm mais ne peuvent pas punir ton invade niveaux 1-3. Au niveau 6, ton Crowstorm depuis le fog bat leurs engage face-tank parce qu'ils n'ont pas d'escape pré-cast."
    - examples: ["karthus", "ziggs", "xerath"]
      archetype: "Équipes artillery immobiles qui se groupent"
      reason: "Les mages de backline sans escape se font one-shot par un Crowstorm de flank parce qu'ils ne peuvent pas dash hors de l'AOE avant que le channel ne ticke."
    - examples: ["azir", "orianna", "viktor"]
      archetype: "Mages de control sans dash"
      reason: "Ta R blink au-delà de leur zone control avant qu'ils ne posent leur setup CC. Si tu apparais depuis le fog, ils n'ont pas d'outil de sortie."
  counterpicks:
    - examples: ["lee-sin", "elise", "kha-zix"]
      archetype: "Invaders early-game avec pression de tracking"
      reason: "Ils menacent ta jungle niveau 2-3 et te forcent à jouer défensif. Fiddle n'a pas d'escape pré-6 : invadé il ne peut pas fuir, et son clear est lent sans setup de vision via effigies."
    - examples: ["yasuo", "samira"]
      archetype: "Carries Wind Wall / blocage de projectiles"
      reason: "Wind Wall bloque ta Q (projectile unique) et la majeure partie de Reap. Ils annulent ton cast d'engage au pire moment, te laissant channeler Crowstorm sans follow-up."
    - examples: ["lissandra", "malzahar", "veigar"]
      archetype: "Mages CC dur point-and-click"
      reason: "Ils interrompent ton channel de 1.5s sans skill — Lissandra R, Malzahar R, Veigar E transforment ton engage en ult gaspillé et mort instantanée."
---

## Aperçu

Fiddlesticks est un jungler d'embuscade dont tout le kit tourne autour d'un seul mouvement : blink dans un fight depuis le fog of war avec **Crowstorm (R)** et burst en AOE l'équipe ennemie pendant qu'elle est encore groupée. Hors de cette fenêtre, c'est un mage lent, immobile, au duel faible et à l'ulti à long channel, donc l'écart entre une partie gagnée et une perdue se joue presque entièrement sur le *setup de vision* et le *timing d'engage* (quand et où tu appuies sur R).

Le plan de partie : clear la jungle vite avec **Bountiful Harvest (W)**, pose des effigies en rivière et autour de la jungle ennemie pour avoir de la vision (et de brefs fears sur ceux qui les voient), puis cherche une position de flank cachée près du prochain objectif (Drake ou Baron). Quand 2+ ennemis sont agglutinés sur l'objectif, blink avec **R**, lâche **E** pour le slow + silence, puis **W** et **Q** pour finir ceux qui fuient. Sans le facteur surprise le kit ne donne rien — Fiddle est binaire : ace de setup ou ult gaspillé.

## Build Recommandé

**Items de départ :** ![Emberknife](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1035.png) **Emberknife** (le starter de jungler melee qui donne un boost de dégâts à Smite sur les monstres et lance la quest du pet) + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**Items core (dans l'ordre) :**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade depuis Emberknife (auto-évolue vers la minute 3-4 une fois assez d'XP accumulée sur les camps de jungle). Compagnon pour le burst AP (Ability Power, la stat qui scale les dégâts magiques) : ajoute un effet de dégâts magiques qui se déclenche (un "proc") sur l'auto-attack juste après un sort, en ligne avec le burn de Liandry's.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — premier item complet. Le burn pourcentuel sur HP (dégâts qui scalent avec la vie max de la cible) s'empile avec chaque tick d'AOE de Crowstorm sur les tanks, transformant ton ulti en outil de teamwipe.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic pen plat. Bon marché, immédiat, le défaut pour tout AP avant le mid-game.
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — entre en stase pile à la fin des ticks d'AOE de Crowstorm, te sauve du focus que tu manges juste après l'engage. Obligatoire si l'ennemi a un diver ou un assassin.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicateur late-game (+35% AP bonus). Ton plus gros slot AP, fait one-shot Crowstorm sur les squishys.

**Items situationnels :**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contre CC magique single-target qui interrompt le channel de R (Lissandra R, Veigar E, Twisted Fate stun). Le bouclier bloque une habilité avant qu'ils ne stoppent ton ult.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — quand 2+ ennemis achètent un item de Magic Resist.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contre comps qui empilent les soins (Aatrox, Soraka, Vladimir, Dr. Mundo). Applique Grievous Wounds (coupe 40% des soins).
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — quand il faut du Movement Speed extra pour chase ou rentrer dans le range de R depuis le fog.

**Bottes :** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** par défaut. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** si 2+ ennemis ont du CC dur et que Banshee's seule ne suffit pas.

**Skill order :** Maxe **W** en premier (clear et sustain en jungle), **E** en second (slow + silence en fight), **Q** en dernier. Mets un point dans **R** aux niveaux 6, 11, 16.

**Runes :** Arbre primaire **Domination** avec **Dark Harvest**, **Sudden Impact**, **Treasure Hunter** et **Ultimate Hunter**. Secondaire **Sorcery** avec **Manaflow Band** et **Gathering Storm**. Contre engage CC dur single-target (Lissandra, Malzahar, Veigar) swap Sorcery pour **Resolve** avec **Bone Plating** et **Revitalize**.

## Matchups clés

- **Lee Sin / Elise :** Junglers d'invade early. Ne conteste pas ton propre buff side au niveau 1 ; cross-map et start le buff opposé avec un leash (tes laners aident à entamer le camp en le frappant quelques secondes pour que tu prennes moins de dégâts), puis path vers la Scuttle Crab en rivière. Pose une effigie en rivière pour spotter le gank et ward les entrées de ta jungle avant la minute 3.
- **Karthus :** Course scaling vs scaling. Il te bat en clear et en late. Tu dois forcer un gank niveau 6 ou invade sa jungle avec vision ; si tu le laisses atteindre 11, son ulti globale dépasse tes victoires sur objectif unique.
- **Yasuo bot ou mid :** Wind Wall bloque le projectile de ta **Q** et la ligne centrale de silence de ton **E**. Engage Crowstorm depuis un angle latéral pour qu'il ne puisse pas couvrir l'équipe avec le mur ; flank depuis un brush de lane non évident.
- **Zac :** Tank d'engage miroir avec E gap-close. Le silence de ton **E** coupe le timing de détonation de son W si tu l'atteins pendant son channel ; dans un teamfight à pile ou face, l'équipe qui pose la **R** + silence en premier gagne.
- **Master Yi :** Il est CC-immune au silence de ton **E** via le dash de **Q** et l'ulti Highlander. Garde **Q** pour le fear hors de la fenêtre de Highlander ; sans le fear, son cleanup late game transforme ton engage en 1-pour-3.

## Power spikes & conditions de victoire

- **Niveau 6 (premier Crowstorm) :** Ta première fenêtre de gank. Mets en place la vision dans le fog de rivière 30s avant, puis entre. Un R + E propre sur 2 ennemis sous tour, c'est un double kill garanti.
- **Niveau 9 (W maxée) :** Ton clear de jungle atteint son pic de vitesse et ton sustain en fight explose. Force un Drake fight ici.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minute 16-18) :** L'AOE de Crowstorm coupe à travers les tanks. Force des fights Baron/Drake et cherche des flanks cross-map.
- **Niveau 16 + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ minute 28) :** Crowstorm one-shot tout squishy qui n'a pas monté un item de Magic Resist. Groupe avec l'équipe et force le prochain objectif majeur.

## Erreurs courantes

- **Utiliser R sans setup de fog of war.** Un Fiddle visible avec la barre de channel à l'écran, c'est un dodge gratuit pour l'équipe ennemie. Lance toujours depuis un brush, derrière un mur, ou depuis l'intérieur d'un camp de jungle non wardé. S'ils voient la barre, ils s'écartent 1.5s et tu gaspilles 80 mana plus ton seul outil d'engage.
- **Engager en solo avec l'équipe loin derrière.** Crowstorm est un outil d'engage d'équipe, pas un pick d'assassin. Si ton équipe est à 2+ écrans, ton ulti touche 1 ennemi et tu meurs dans le follow-up. Vérifie la position des coéquipiers avant d'appuyer sur R.
- **Ignorer le placement des effigies.** Les effigies donnent vision et brefs fears. Des charges de trinket inutilisées, c'est de la vision gratuite que l'ennemi ne paie *pas* pour éteindre. Pose-en une en rivière avant chaque objectif.
- **Utiliser Q pour last-hit les camps de jungle.** Q est ton seul setup single-target pour les fears en fight. Garde-la pour les fights — W et E clear les camps très bien.

## Conseil avancé

Le channel de 1.5s de **Crowstorm** est interrompu par tout ce qui te déplace ou te stun, mais si tu appuies **R** au moment exact où une cible entre dans un brush où tu es planqué, la brève coupure de vision ne lui laisse pas le temps de réagir avant que le blink n'atterrisse. Entraîne le timing en custom : cache-toi dans un brush, attends qu'un ennemi marche à côté, appuie sur R depuis l'intérieur de son personal space. Le blink te garde collé à lui pendant toute la durée de l'AOE, et la panique d'un Fiddle face-of-fog lui coûte plus de Flashes que n'importe quel autre engage du jeu.
