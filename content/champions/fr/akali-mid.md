---
title: "Akali Mid Build & Guide — Patch 16.9"
slug: "akali-mid"
language: "fr"
patch: "16.9"
champion: "akali"
role: "mid"
last_updated: "2026-04-29"
description: "Guide Akali mid lane pour League of Legends Patch 16.9 : build assassin AP, matchups clés, power spike au niveau 6, erreurs courantes et astuce finale."
quick_learn:
  champion_dd_id: "Akali"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Assassin / Burst"
  abilities:
    - key: "P"
      name: "Assassin's Mark"
      description: "Toucher un champion avec un sort le marque. Sortir du cercle empower la prochaine auto-attaque avec portée et dégâts bonus."
      dd_spell_id: "Akali_Passive"
    - key: "Q"
      name: "Five Point Strike"
      description: "Cône de kunai qui inflige des dégâts et ralentit. Outil principal de poke et de trade. Coûte de l'énergie, cooldown court — spam on-cooldown en trade."
      dd_spell_id: "AkaliQ"
    - key: "W"
      name: "Twilight Shroud"
      description: "Zone de fumée qui rend Akali invisible au targeting et offre jusqu'à +80 d'énergie max tant qu'active. Agir dedans la révèle. Pose W au milieu du combo, pas seulement pour disengage : le bonus d'énergie offre un Q en plus dans la rotation."
      dd_spell_id: "AkaliW"
    - key: "E"
      name: "Shuriken Flip"
      description: "Saut en arrière, lance un shuriken qui marque le premier ennemi touché. Recast pour dash sur la cible marquée. Marque uniquement un champion, jamais un minion."
      dd_spell_id: "AkaliE"
    - key: "R"
      name: "Perfect Execution"
      description: "Ulti en deux parties. R1 saute et inflige des dégâts ; R2 dash à travers la cible et exécute les ennemis bas HP. L'execute scale avec les HP manquants de la cible."
      dd_spell_id: "AkaliR"
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
    - { dd_id: "3152", name: "Hextech Rocketbelt" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contre le burst single-target élevé (Zed R, Veigar combo, LeBlanc) : la stasis te fait survivre avant le R2"
    - dd_id: "3135"
      name: "Void Staff"
      against: "dès qu'une cible prioritaire achète un objet de Résistance Magique — garde le scaling de tes sorts"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contre les CC magiques single-target qui éteignent ton engage (Ahri charm, Lissandra R, TF stun) — spell shield mange le premier coup"
    - dd_id: "4633"
      name: "Riftmaker"
      against: "dans les fights longs et contre les comps avec beaucoup de bruisers où il faut du heal et de la durabilité au lieu du burst pur"
  base_combo: ["E1", "Q", "AA", "R1", "AA", "E2", "R2"]
  win_condition: "Accroche les cibles squishy isolées avec le dash E1+E2, enchaîne Q + auto-attaque empowered + combo R pour l'execute. Roam les sidelanes dès que R est up."
  weakness: "Waveclear faible et portée courte avant 6 : vulnérable au poke distant et aux ganks jungle. Aucun CC dur et aucun escape si W est down — tu peux être lock et burst avant que ta combo n'aboutisse."
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
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
---

## Aperçu

Akali est une assassin AP burst : une championne construite pour infliger énormément de dégâts en 1-2 secondes (le "burst", pic de dégâts concentré sur quelques secondes) sur une seule cible. Son kit est une chaîne de dashes — **Shuriken Flip (E)**, **Perfect Execution (R)** — montée autour de la fenêtre d'invisibilité de **Twilight Shroud (W)**. Pas de mana, elle utilise de l'énergie : ce sont les cooldowns courts qui comptent, pas la jauge de ressource. Le mid lui va bien parce que la rivière offre des chemins courts pour roam (quitter ta lane pour faire un play ailleurs) vers les sidelanes, et son **R** au niveau 6 transforme tout fight sans vision wards adverses (objets posés qui révèlent une zone) en pickoff (élimination d'un ennemi isolé de son équipe).

Le plan de partie : survivre à une laning phase faible (waveclear médiocre — ses sorts sont lents à clean la wave de minions, et zéro kill threat early) jusqu'au niveau 6, puis convertir le moindre lead en roams et en tower dives. La subtilité du champion réside dans le placement du **E** : la E lance d'abord un shuriken ; seul le premier champion ennemi touché devient la cible du dash. Marque un minion par erreur et tu perds le dash pour toute la rotation d'abilities (le cycle Q + W + E + R chacun lancé une fois).

## Build Recommandé

**Items de départ :** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 Health Potions. Le Doran's Ring donne de l'AP et du mana regen dont Akali n'a pas besoin, mais le bonus damage sur minions corrige sa waveclear early faible. Évite ![Corrupting Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2033.png) **Corrupting Potion** sauf si la lane est un harass auto-attack lourd.

**Items core (dans l'ordre) :**

1. ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** — gap-closer (un actif qui te projette en dash vers l'ennemi) plus burst damage ; combine avec **E** et **R** pour engage (ouvrir le fight) hors de portée.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic pen plat (tes sorts ignorent une part de la Résistance Magique adverse). Upgrade direct de damage pour finir les squishys.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst supplémentaire avec bonus damage quand l'ennemi est sous ~40% HP, parfaitement aligné avec l'execute du **R2**.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicateur late-game sur tout ton AP. Ton plus gros slot AP.

**Items situationnels :**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contre Zed, Veigar, LeBlanc ou tout adversaire dont le burst arrive dans la même fenêtre que le tien. L'actif de stasis te rend invulnérable et figé sur place ~2.5 secondes : tu attends que leur damage passe et tu finis avec **R2**.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — swap dès qu'une cible prioritaire achète un objet de Résistance Magique ; garde ton damage scaling.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contre les CC magiques single-target (Ahri charm, Lissandra R, Twisted Fate stun) ; le spell shield mange leur setup.
- ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — premier item alternatif dans les fights longs contre les comps bourrées de bruisers ; troque le burst contre du sustained damage et du healing.

**Bottes :** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** par défaut. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** acceptables contre du CC lourd (Lissandra, Ahri, Galio).

**Skill order :** Maxe **Q** en premier (damage principal et refund d'énergie, c'est-à-dire l'énergie que tu récupères après usage), **E** en second (cooldown réduit sur le dash), **W** en dernier. Mets un point dans **R** aux niveaux 6, 11, 16.

**Runes :** Les runes sont des bonus passifs choisis avant la partie : un arbre primaire (5 runes) et un secondaire (2 runes). Primaire **Domination** avec **Electrocute** (burst additionnel quand tu touches une cible avec trois sorts de suite), **Sudden Impact** (plus de magic pen après un dash), **Sixth Sense** pour la pression de vision et **Ultimate Hunter** (cooldown réduit sur **R**). Secondaire **Sorcery** avec **Transcendence** (ability haste — tes sorts reviennent plus vite) et **Gathering Storm** (scaling AP late-game). Akali utilise de l'énergie, pas du mana : ne prends pas **Manaflow Band**.

## Matchups clés

- **Galio :** Hard counter avant 6. Sa passive empower ses auto-attaques et son **W** te taunt et bloque ton dive avec **R**. Farme safe jusqu'au niveau 6, ping le jungler et n'engage que quand son **W** est en cooldown.
- **Yasuo :** Son **Wind Wall** bloque **Q** et le shuriken de **E**. Ouvre avec le dash de ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** ou avec **E**, garde **Q** jusqu'à ce que la Wind Wall soit down.
- **Lux :** Tu la surclasses en duel 1v1. Dodge sa **Q** (skillshot linéaire long et lent — un sort non-ciblé qu'on évite en marchant de côté quand elle le lance) avec **E**, puis dive-la au 6. Achète ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** si elle finit son ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** avant toi.
- **Twisted Fate :** Course au roam. Il a le meilleur outil de roam (sa **R** le téléporte à travers la map), donc tu dois push ta wave (envoyer la ligne de minions vers la tour adverse) plus vite qu'il ne quitte sa lane. Track sa **R** avec des vision wards (objets posés qui donnent de la vision dans une zone) sur la rivière et le tri-bush (les trois buissons près de mid).
- **Zed :** Matchup à égalité. Il gagne les short trades avant 6 ; après 6 ta **R** le finit à bas HP. Ne pars pas all-in (engagement total à la kill, sans retraite) tant qu'il n'a pas brûlé ses ombres **W** ; sinon il échappe à ta **R2**.

## Power spikes & conditions de victoire

- **Niveau 3 :** Kit de base complet (Q + W + E). Tu as enfin la combo dash + invisibilité pour trade (un échange court de sorts en lane, pas une tentative de kill) ou disengage (sortir d'un fight). Cherche un trade court pour prendre la prio (priority de lane qui te permet de quitter sans perdre de ressources) avant le premier gank jungle (attaque surprise du jungler adverse).
- **Niveau 6 :** Le premier **R** est le plus gros spike de la partie. Tu débloques un kill threshold sur n'importe quelle cible squishy (champion à gros damage et faibles défenses, comme les ADC). Si la rivière n'est pas warded (couverte par des vision wards adverses), les fights mid-river sont des kills gratuits.
- **![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) Hextech Rocketbelt complet (~ minute 12-14) :** Le damage all-in one-shot maintenant les squishys via l'execute R2 (la R2 les achève quand leurs HP passent sous le seuil). Roam vers les sidelanes dès que ta wave est poussée sous la tour adverse.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minute 24-28) :** Le burst scale énormément. Force des fights autour des objectifs (Drake, Baron, tours) et cherche des picks sur la backline (la ligne arrière de l'équipe, où sont les carrys) en utilisant **W** pour flanquer — entrer par un côté qu'ils ne surveillent pas, généralement à travers du fog of war non warded (zones de la map sans vision).

## Erreurs courantes

- **All-in avant le niveau 6 sans setup jungle.** Le damage de trade pre-6 d'Akali est médiocre — Q + auto-attaque ne tueront pas un adversaire attentif. Farme safe, ping le jungler, engage au 6.
- **Gâcher E1 sur un minion.** Le premier impact du Shuriken Flip marque ce qu'il touche, minion compris. Si ton shuriken atterrit sur un creep, tu perds le dash sur le champion derrière. Angle toujours **E** pour que le champion soit la première chose touchée par le shuriken.
- **Auto-attaquer dans ton W.** Agir (n'importe quel sort ou auto-attaque) te révèle pendant ~0.5s. Rester dans **Twilight Shroud** et poke depuis l'intérieur ne te garde pas invisible — utilise **W** pour dodge un seul skillshot (sort visé qu'on peut esquiver en se déplaçant) ou pour casser la vision avant de te repositionner.
- **Brûler R1 sans plan pour R2.** R1 seule te plante au milieu de l'équipe adverse. Aie toujours une cible R2 prête — soit pour finir, soit comme dash de fuite.
- **Build des items bruiser contre une équipe adverse squishy.** Les items comme ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** échangent du burst contre du sustain. Contre une équipe de carrys fragiles tu veux du burst pur (![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** + ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame**), pas de la durabilité.

## Conseil avancé

Pose **Twilight Shroud (W)** à l'instant exact où **R1** atterrit. Le shroud s'ouvre à tes pieds pile au moment où tu arrives au milieu de l'équipe adverse, brisant leur target lock (forçant les ennemis à te re-cliquer parce que tu deviens non-targetable un instant) pendant la demi-seconde avant qu'ils puissent te resélectionner. Bien utilisé, ça te permet de te repositionner pour l'execute **R2** ou même d'annuler l'all-in si le trade semble perdu — et le sort de peel du support adverse (le sort qui protège leur carry) atterrit souvent dans le vide parce que tu deviens non-targetable au milieu de l'engage.
