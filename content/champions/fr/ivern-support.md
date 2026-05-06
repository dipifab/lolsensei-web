---
title: "Ivern Support Build & Guide — Patch 16.9"
slug: "ivern-support"
language: "fr"
patch: "16.9"
champion: "ivern"
role: "support"
last_updated: "2026-05-05"
description: "Guide Ivern support pour League of Legends Patch 16.9 : build enchanter, vision via brush, setups de root au Q, peel de Daisy et matchups clés en bot."
quick_learn:
  champion_dd_id: "Ivern"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Enchanter / Support de setup"
  abilities:
    - key: "P"
      name: "Friend of the Forest"
      description: "Ne peut pas attaquer les monstres de jungle, et ils ne l'attaquent pas. Plante des semis qui libèrent seuls les camps — or gratuit même depuis bot."
      dd_spell_id: "Ivern_Passive"
    - key: "Q"
      name: "Rootcaller"
      description: "Skillshot linéaire long qui root le premier ennemi touché. Les alliés qui attaquent la cible root dashent vers elle. Recast pour dasher toi-même."
      dd_spell_id: "IvernQ"
    - key: "W"
      name: "Brushmaker"
      description: "Passif : dans un brush, les autos infligent des dégâts magiques bonus (Ivern et alliés proches). Actif : crée un brush n'importe où — vision et zone de dégâts."
      dd_spell_id: "IvernW"
    - key: "E"
      name: "Triggerseed"
      description: "Bouclier sur un allié. Après 1.5s le bouclier explose, dégâts magiques et slow aux ennemis proches. Aucun ennemi touché : le bouclier se renouvelle."
      dd_spell_id: "IvernE"
    - key: "R"
      name: "Daisy!"
      description: "Invoque Daisy, un golem allié tanky. Son troisième auto consécutif sur la même cible déclenche un knockup en onde. Recast pour la repositionner."
      dd_spell_id: "IvernR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "W" }
    - { level: 15, key: "W" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "6616", name: "Staff of Flowing Water" }
    - { dd_id: "3222", name: "Mikael's Blessing" }
  situational_items:
    - dd_id: "3107"
      name: "Redemption"
      against: "contre teamfights tardifs groupés où l'AOE pèse plus que le peel single-target"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contre comps d'AOE engage (Amumu R, Wukong R, Yasuo + Malphite wombo)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contre CC magique single-target lourd sur toi (Lux Q, Morgana Q, Zoe E sleep, Brand Q stun)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contre comps de heal-stacking (Soraka, Yuumi, Aatrox, Vladimir bot lane)"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "Utilise les brush latéraux pour l'embuscade : pré-place W pour la vision, tire Q depuis la fog, ton ADC dash sur la cible root. Après 6, roam mid avec Daisy et snowball la map."
  weakness: "Squishy, aucun peel contre hard engage multi-cibles. Un Q raté en lane te force à backer jusqu'au cooldown — les 14s de Q rank 1 sont la plus longue fenêtre morte de tout support roamer."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8214
      name: "Summon Aery"
      icon_path: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery primary : Summon Aery monte sur chaque E vers ton ADC et proc aussi sur le Q root. Manaflow Band paie le spam de E, Transcendence pousse l'haste au-delà de 40 pour des Q plus fréquents, Scorch ferme la fenêtre de poke en lane statique."
    secondary_rationale: "Resolve secondary : Font of Life se déclenche sur chaque Q root — ton ADC heal en attaquant la cible root, transformant un setup en dégâts plus sustain. Revitalize amplifie Aery et le refund de E quand aucun ennemi n'est touché."
    secondary_alternative: "Si ton équipe a besoin de plus de roams mid et que l'uptime de Flash compte, swap Resolve pour Inspiration avec Magical Footwear (boots upgradées gratuites à la 12e min) et Cosmic Insight (haste de summoner — plus de Flash et Ignite)."
matchup_draft:
  pick_into:
    - examples: ["thresh", "blitzcrank", "pyke"]
      archetype: "Hook supports qui avancent pour lancer leurs skillshots"
      reason: "Ils doivent avancer dans le range du Q pour placer leur hook — le Q d'Ivern + dash de l'ADC punit le windup avec un root garanti avant même que le hook sorte du cast."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "Mages support immobiles de poke"
      reason: "Pas de dash. Q depuis brush + follow-up de l'ADC les efface ; le W actif donne à Ivern une zone vision-et-dégâts gratuite qu'ils ne peuvent égaler sans brûler des summoners."
    - examples: ["yuumi", "soraka", "milio"]
      archetype: "Enchanters purs sans lockdown"
      reason: "Ils suivent l'ADC avec heal et shield mais n'ont aucun peel contre un setup root ; le Q chope le carry, le slam de Daisy suit, et l'enchanter ne peut pas annuler un root de 1.75s."
  counterpicks:
    - examples: ["leona", "alistar", "rell"]
      archetype: "Tanks engagers all-in"
      reason: "Ils flash et enchaînent le CC sur l'ADC avant qu'Ivern ne place le Q. Pas de peel contre l'engage multi-CC ; un seul shield E casse instantanément sous une stun chain à 2 cibles."
    - examples: ["lux", "zyra"]
      archetype: "Mages support de zone control / longue portée"
      reason: "Le E de Lux coupe les angles de brush d'Ivern et out-poke le range du Q ; le seed-and-plant de Zyra zone mieux que la passive W sans jamais avancer."
    - examples: ["morgana", "tahm-kench"]
      archetype: "Supports de peel anti-CC avec cleanse ou eat"
      reason: "Le E de Morgana spell-shield le root du Q entièrement, annulant tout le setup ; le W de Tahm Kench mange l'ADC hors du rayon du slam de Daisy avant le troisième auto."
---

## Aperçu

Ivern en support est l'un des picks les plus inhabituels de la bot lane : un enchanter capable de générer du brush où il veut, root un champion à travers la map et invoquer un golem tanky au niveau 6. Sa passive l'empêche d'auto les monstres de jungle, mais ne l'empêche pas de passer dans la jungle bot side aux resets pour planter des semis de **Brushmaker (W)** sur les Krugs ou les Wolves — c'est de l'or gratuit pendant que ton ADC push la wave. Il est squishy, n'a aucune escape et meurt en trade 1v1 — mais aucun autre support ne peut créer un mur de brush en plein fight, nier la vision et convertir un seul Q en kill garanti comme Ivern.

Son game plan : pré-place le W brush dans le river bot ou dans le tri-brush avant que la wave n'arrive, tire le Q depuis l'intérieur de ce brush pour que l'ennemi ne voie jamais le cast, drop le E sur ton ADC dès qu'il dash sur la cible root, et après le niveau 6 rotate mid avec Daisy pour des picks cross-map. Les fights ne se gagnent pas avec les dégâts d'Ivern — ils se gagnent avec ses setups, le carry faisant la kill réelle.

## Build Recommandé

**Starting items :** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. World Atlas est le seul starter support viable — auto-upgrade par étapes de quest jusqu'à ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** puis ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**.

**Core items (dans l'ordre) :**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — quest item support, or via assists et minion executes. Ne last-hit pas les minions ; laisse l'ADC farmer.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — l'ability haste rend Q et E quasi permanents.
3. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — mythic. Tes shields et heals déclenchent un effet en chaîne qui scale le healing à chaque proc consécutif — idéal pour un enchanter qui shield, slow et re-shield toutes les 7-11 secondes.
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — quand E shield l'ADC, la passive du Censer lui donne attack speed et on-hit magic damage. Se cumule avec le bonus de brush de W quand l'ADC fight dans ou près du brush.
5. ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** — second item shield-trigger. Donne à l'allié shield AP et ability haste extra pendant quelques secondes.
6. ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — cleanse actif sur l'ADC. Résout les chaînes de CC single-target lourdes qu'aucun shield ne peut couvrir.

**Situational items :**

- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — vs fights tardifs groupés où le heal/dégâts AOE team-wide pèse plus qu'un cleanse Mikael's.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — vs comps d'AOE engage (Amumu R, Wukong R, Yasuo + Malphite wombo). Un E ne peel pas quatre personnes ; l'actif du Locket si.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — quand ils vont te hard-CC spécifiquement (Lux Q, Morgana Q, Zoe E sleep). Le premier projectile est mangé et tu vis assez pour cast Daisy.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — vs comps heal-stacking (Soraka mid, Yuumi support, Aatrox top). Tes dégâts magiques appliquent le heal-cut sur chaque sort.

**Boots :** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** par défaut. ![Mobility Boots](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3117.png) **Mobility Boots** acceptables dans les comps de gros roam où la vitesse de rotation compte plus que les cooldowns en fight.

**Skill order :** Prends **Q** au niveau 1 pour les cheese-invade en brush level 1, puis maxe **E** d'abord (le shield scale, le slow coupe les dives), **Q** ensuite (CD plus bas = plus de roots), **W** en dernier. Point dans **R** aux niveaux 6, 11, 16.

**Runes :** Primary **Sorcery** avec **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Resolve** avec **Font of Life** et **Revitalize**.

## Matchups clés

- **Leona / Alistar :** Hard counter. Leur flash-engage enchaîne le CC sur l'ADC avant que ton Q ne sorte. Reste à max range du W brush, ne pathe jamais entre les waves là où leur flash arrive, et pré-shield ton ADC quand leurs summoners sont up.
- **Thresh :** Skill matchup. Les deux supports veulent setup un seul hook/root pour une kill, mais Ivern gagne la guerre du range (Q à 1125 unités, hook de Thresh à 1100). Reste hors du range du hook, tire Q depuis brush ; s'il hook en premier, drop E sur l'ADC et marche-toi.
- **Lux :** Bully de lane. Elle te poke E-Q alors que tu n'as rien à renvoyer — ton Q est un setup de kill, pas un outil de poke. Trade uniquement quand son Q est en cooldown ; prends Banshee's Veil si elle continue à placer le binding.
- **Yuumi :** Pick gratuit. Elle doit se détacher pour lancer ses skillshots, et à ce moment-là c'est une cible 600 HP sans escape. Q sur le détach, ADC dash, kill gratuite — répète toutes les 14s.
- **Pyke :** Fight-le dans le brush. Ta passive W boost les autos à toi et à l'ADC en brush ; Pyke perd tous les trades en brush parce que le windup de son Q est visible alors que ton Q depuis le W-placé est totalement caché.

## Power spikes & conditions de victoire

- **Niveau 2 (Q + E) :** Première fenêtre d'all-in. Avec un point dans Q pour le setup et E pour shield le dash, toi et l'ADC échangez un Flash garanti contre la barre HP de l'ADC ennemi. Push le niveau 2 en hit ensemble les casters de la deuxième wave.
- **Niveau 6 (Daisy! online) :** Fenêtre de roam cross-map. Daisy est assez tanky pour tank l'aggro tour 4-5 secondes, et son troisième auto knockup est de l'engage quand ton ADC a Flash. Roam mid dès que tu as Daisy et une wave shovée.
- **![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) Moonstone Renewer terminé (~ minute 13-15) :** Les chaînes shield/heal scale. Dans tout fight de plus de 4 secondes, ton output de healing dépasse celui du support ennemi même si c'est Soraka ou Sona.
- **Powerspike 3 items (Moonstone + Boots + Ardent ou Staff, ~ minute 22-24) :** Force les fights pour les objectifs. Ton ADC tape plus fort et plus vite que le leur grâce à tes shield triggers, et le cooldown de Daisy R baisse avec les items.

## Erreurs courantes

- **Last-hit les minions.** Le proc d'execute de World Atlas te donne l'or même si l'ADC fait la kill — ne lui vole pas le CS. Place-toi une rangée de minions derrière l'ADC sauf si tu setup un freeze.
- **Whiff Q à long range sans follow-up.** Q est 14s au rank 1 — un cast raté = 14 secondes sans bouton kill. Si l'ennemi dodge, marche d'abord dans un brush, puis tire depuis un angle plus serré qu'il n'attend pas.
- **Cast W brush en fight au lieu de pré-placer.** Un brush créé en fight n'est presque qu'un outil de vision — la valeur est dans le pré-placement : drop-en un en tri-brush 5 secondes avant un roam, ou en mid-river avant une call sur Drake. Brush en fight est réactif quand le kit te veut proactif.
- **Drop Daisy à max range en teamfight.** Daisy doit atteindre une cible et placer trois autos consécutifs pour le knockup. R à 1500 unités = elle marche 4 secondes avant le premier auto — à ce moment le fight est fini. R derrière la ligne ennemie, pas "pour faire des dégâts".
- **Essayer de peel un-vs-plusieurs avec juste E.** E shield une cible. Contre un AOE engage qui frappe ADC + mid laner + toi, un shield ne suffit pas. Planifie Locket of the Iron Solari dès la draft quand tu vois la wombo comp.

## Conseil avancé

Utilise le **W brush actif** pour fabriquer des angles de Q que l'ennemi ne peut pas dodge. Pattern standard : place le W brush 600 unités devant toi, marche dans le brush (tu deviens invisible à l'ennemi s'il n'a pas de vision dans le patch), tire Q depuis l'intérieur du brush — le projectile part d'une position que l'ennemi ne pouvait pas prédire parce qu'il ne voit pas le cast. C'est fonctionnellement un root gratuit à 1125 de range sans besoin de fog, et c'est pour ça qu'Ivern excelle en duo avec Caitlyn, Senna ou Jhin : tout ADC qui veut attaquer de loin reçoit un dash gratuit sur un setup de kill garanti que l'ennemi ne peut pas préparer.
