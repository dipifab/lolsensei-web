---
title: "Jinx Bot Build & Guide — Patch 16.9"
slug: "jinx-bot"
language: "fr"
patch: "16.9"
champion: "jinx"
role: "bot"
last_updated: "2026-04-29"
description: "Guide Jinx bot lane pour League of Legends Patch 16.9 : starter kit, build hypercarry crit, matchups clés, power spikes, erreurs courantes et astuce finale."
quick_learn:
  champion_dd_id: "Jinx"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Hypercarry"
  abilities:
    - key: "P"
      name: "Get Excited!"
      description: "Quand Jinx aide à tuer un champion, un monstre épique ou détruit une structure, elle gagne un énorme bonus de move speed et d'attack speed pendant quelques secondes."
      dd_spell_id: "Jinx_Passive"
    - key: "Q"
      name: "Switcheroo!"
      description: "Alterne entre Pow-Pow (minigun, stack d'attack speed) et Fishbones (lance-roquettes, dégâts AOE avec plus de portée, coûte du mana). Levier DPS principal."
      dd_spell_id: "JinxQ"
    - key: "W"
      name: "Zap!"
      description: "Skillshot linéaire longue portée qui inflige des dégâts, ralentit et révèle le premier ennemi touché. Sert au poke et au self-peel slow contre les divers."
      dd_spell_id: "JinxW"
    - key: "E"
      name: "Flame Chompers!"
      description: "Lance trois grenades-pièges qui rootent les champions ennemis au contact pendant 1.5s. Self-peel et setup de lockdown, pas du poke."
      dd_spell_id: "JinxE"
    - key: "R"
      name: "Super Mega Death Rocket!"
      description: "Roquette globale qui inflige plus de dégâts au fur et à mesure qu'elle vole et explose en dégâts basés sur les HP manquants. Snipe les runners ou achève à travers la map."
      dd_spell_id: "JinxR"
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
    - { dd_id: "3087", name: "Statikk Shiv" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contre front lines tanky ou comps HP-stack (Sion, Cho'Gath, Dr. Mundo) — armor pen bonus scale avec les HP max ennemis"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contre comps à gros heal (Soraka, Vladimir, Aatrox) — applique Grievous Wounds dès qu'une roquette les touche"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "contre pression d'assassins ou divers (Zed, Samira, Yasuo flank) — move speed et shield seuil HP donnent la seconde pour E"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "contre comps à gros poke ou lanes en stalemate — lifesteal et overheal shield gardent ta HP entre les fights"
  base_combo: ["W", "Q-AA", "E", "R"]
  win_condition: "Arrive vivante à Statikk Shiv et Infinity Edge, puis joue les teamfights depuis la backline avec la Q roquette. Enchaîne les resets de Get Excited! sur les pickoffs pour snowball Baron et Drake."
  weakness: "Move speed de base lent et zéro dash ou blink. Hard counter par les divers et assassins qui atteignent la backline ; perd contre les lanes à pression early (Draven, Lucian, Caitlyn) avant ses deux premiers items."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["jhin", "varus", "ashe", "senna"]
      archetype: "Marksmen immobiles late-scaling"
      reason: "Jinx scale et teamfight mieux que les marksmen statiques : la Q roquette plus Runaan's Hurricane déchire une backline groupée qui n'a pas de dash pour repositionner une fois le fight lancé."
    - examples: ["sion", "cho-gath", "dr-mundo", "ornn"]
      archetype: "Tanks HP-stackers et comps front line"
      reason: "La Q roquette inflige des dégâts physiques AOE qui scale avec l'attack speed, et l'armor pen de Lord Dominik's contre les cibles à gros HP transforme les grosses front lines en cibles idéales au lieu d'un mur."
    - examples: ["leona", "nautilus", "rell"]
      archetype: "Supports engage lockdown"
      reason: "Quand le support catch une cible, Jinx a une fenêtre d'auto-attack assez longue pour placer 3-4 roquettes dans la chaîne de CC et finir avec le R, puisque la cible ne peut pas dash hors de l'AOE."
  counterpicks:
    - examples: ["draven", "lucian", "kalista"]
      archetype: "Marksmen à pression early"
      reason: "Ils out-tradent Jinx aux niveaux 1-6 parce que leurs dégâts auto-attack dépassent les stacks minigun et Jinx n'a aucun dash pour disengage ; ils snowball le gold de lane avant son premier item spike."
    - examples: ["zed", "samira", "yasuo"]
      archetype: "Assassins mobiles et divers"
      reason: "Jinx n'a ni dash, ni blink, ni CC instantané : un seul gap-close passé Flame Chompers la supprime avant que la E n'atterrisse ou que le root expire."
    - examples: ["xerath", "ziggs"]
      archetype: "Mages d'artillerie longue portée"
      reason: "Ils out-poke Jinx au-delà de la portée Q roquette et la chunk à chaque wave. Sans escape ni sustain, elle ne peut pas rester en lane assez longtemps pour atteindre ses item spikes."
---

## Aperçu

Jinx est la marksman hypercarry typique : faible dans les dix premières minutes, terrifiante avec deux items complets, et capable de fermer la game sur un seul reset depuis un kill en teamfight. Sa **Switcheroo! (Q)** lui permet de basculer entre une minigun single-target (qui stacke l'attack speed) et un lance-roquettes AOE (plus longue portée, dégâts physiques en zone, coûte du mana) : elle couvre à la fois le DPS propre sur la backline ennemie et le waveclear plus la pression sur la front line avec le même bouton. Sa passive **Get Excited! (P)** transforme chaque kill, assist ou structure détruite en une grosse fenêtre de move speed et d'attack speed : c'est le moteur qui permet à une Jinx en avance d'entrer dans un teamfight et d'enchaîner trois kills supplémentaires avant que le buff ne tombe.

Le plan de partie est simple à expliquer et exigeant à exécuter : survivre la lane face à l'agression early, atteindre le premier item crit (Statikk Shiv), puis jouer en backline carry — rester en deuxième position la plus reculée, kiter (reculer en attaquant pour garder la distance) avec la Q roquette, poser **Flame Chompers (E)** sous ses propres pieds quand un diver atterrit, et sniper les runners à bas HP avec le **R** à travers la map. Le skill expression se joue dans les swaps de forme de la **Q** en mid-fight (minigun sur le tank qui engage, roquettes sur la backline groupée) et dans les snipes au **R** qui transforment les erreurs de positionnement adverse en kills avant qu'ils n'atteignent leur propre backline.

## Build Recommandé

**Items de départ :** Doran's Blade + 2 Health Potions. Skip le second Doran's même si tu gagnes la lane — le gold rend bien plus dans une composante Sheen pour Statikk Shiv.

**Items core (dans l'ordre) :**

1. ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv** — premier item rush. Le passif Energized proc sur la Q roquette pour un waveclear instantané, et la combinaison attack speed plus crit chance amène la forme roquette à devenir un vrai outil de teamfight vers la minute 10-12.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — bottes d'attack speed. Mercury's Treads uniquement contre 3+ menaces de hard CC empilées dans l'équipe adverse.
3. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — ton plus gros spike de dégâts. Les dégâts crit doublent purement chaque hit AOE de la Q roquette sur la backline ; c'est l'item qui fait passer Jinx de "pénible" à "supprime l'ADC adverse".
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — item hypercarry de teamfight. Les bolts de Runaan's tirent aussi des roquettes quand Jinx est en forme Fishbones, donc tu touches trois cibles d'un coup avec scaling complet crit + attack speed.

**Items situationnels :**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contre front lines tanky ou comps HP-stack (Sion, Cho'Gath, Dr. Mundo). Remplace Runaan's si l'équipe adverse a 3+ tanks.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contre comps à gros heal (Soraka, Vladimir, Aatrox). Applique Grievous Wounds (un debuff qui coupe les soins) dès qu'une roquette les touche.
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — contre pression d'assassins ou divers (Zed, Samira, Yasuo flank). Le passif sous seuil HP (un bouclier qui s'active quand tu tombes bas) plus le move speed donnent la demi-seconde dont tu as besoin pour poser la **E** sous tes pieds.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — contre comps à gros poke ou lanes en stalemate. Lifesteal plus overheal shield t'offrent la sustain pour rester en lane assez longtemps pour atteindre tes spikes.

**Bottes :** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** par défaut. Mercury's Treads uniquement contre du gros CC AP type Brand ou Zyra support.

**Skill order :** Maxe **Q** en premier (DPS et scaling roquette), **W** en second (cooldown de Zap! pour poke et self-peel slow), **E** en dernier (la durée du root est fixe ; seuls les dégâts scalent). Mets un point en **R** aux niveaux 6, 11 et 16.

**Runes :** Arbre primaire **Precision** avec **Lethal Tempo**, **Presence of Mind**, **Legend: Alacrity**, **Coup de Grace**. Secondaire **Sorcery** avec **Manaflow Band** (soutient le coût en mana de la Q roquette) et **Gathering Storm** pour le scaling late-game. Stat shards : Attack Speed / Adaptive Force / Health.

## Matchups clés

- **Draven :** Très défavorable à Jinx aux niveaux 1-6. Sa Spinning Axe out-trade à chaque échange. Ne le combats pas pre-3 ; freeze la wave près de ta tour, atteins le niveau 6 avec Zap! up, et cherche les dives jungle uniquement quand il overextend. Une fois Statikk Shiv en main, le matchup s'inverse : évite sa fenêtre d'all-in et farme safe jusque-là.
- **Caitlyn :** Défavorable. Elle outrange ta minigun et bully la lane avec Q + setups de pièges. Reste derrière les minions, dodge sur le côté hors de sa ligne Q, et ne marche jamais sur les bushes où elle est restée (probablement des pièges). Survis à deux items — son scaling teamfight chute fort face à ta Q roquette AOE.
- **Lucian :** Défavorable, surtout avec un Nami support. Respecte son all-in niveau 3 (double-shot passive + dash Q + speed-up W). Garde la **E** comme self-peel contre son dash ; ne la lance jamais en poke. Atteins ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv** sans mourir et la lane se stabilise.
- **Aphelios :** Égal, légèrement favorable à Jinx après deux items. Track sa rotation d'armes ; quand il est en Severum (rouge, lifesteal) ou Calibrum (vert, marker de portée) tu peux poke à la Q roquette depuis la sécurité de la minigun. Évite les trades quand Infernum (orange, AOE) est chargé — c'est sa fenêtre roquette-vs-roquette et il la gagne.
- **Samira :** Elle veut un all-in melee dès qu'elle a sa W. Garde ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** comme troisième item planifié si elle snowball, pose la **E** au moment où elle dash (ne la brûle pas en poke), et ne combats jamais avec **Flash** en cooldown.

## Power spikes & conditions de victoire

- **Niveau 6 :** Le premier **Super Mega Death Rocket!** débloque la pression de pickoff. Un ennemi à bas HP qui rentre bot-vers-base est un R execute gratuit si tu respectes le scaling sur HP manquants. Ne le gaspille pas en poke — attends les runners sous 30% HP.
- **![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) Statikk Shiv terminé (~ minute 10-12) :** Premier vrai spike. La Q roquette clear maintenant la wave en un cast et l'Energized proc sur chaque stack minigun, ouvrant la participation aux skirmishes autour du Drake.
- **![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge en ligne (~ minute 20-24) :** Le breakpoint hypercarry. Les crits de la Q roquette commencent à one-shot les cibles backline, et chaque pickoff ou kill trigger **Get Excited!** pour une rotation gratuite vers le fight suivant.
- **![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) Runaan's Hurricane en ligne (~ minute 28-32) :** Q roquette à trois cibles avec crit. C'est la fantasy late-game : reste derrière ta front line, tire dans le pack ennemi, et regarde le fight se supprimer en 4 secondes.

## Erreurs courantes

- **Spammer la Q roquette en lane.** La forme roquette draine le mana vite et la forme minigun garde tes stacks d'attack speed hauts. Utilise les roquettes uniquement pour nettoyer les last-hits sur des paquets de trois minions ou pour poke (avantage de portée) ; rebascule en minigun dès la fenêtre de trade fermée.
- **Garder la R pour "le snipe parfait".** **Super Mega Death Rocket!** scale sur les HP manquants, pas sur les HP max. Une R safe à 60% sur un ennemi à 25% HP est un kill garanti ; attendre le tir parfait à travers la map signifie souvent que la cible se heal up à base avant que tu tires.
- **Se positionner à portée maximale en teamfight.** Jinx n'a pas de dash. La portée AA max te place hors du peel de ton équipe (la protection : CC et shields du support). Reste en deuxième position la plus reculée pour qu'un assassin en flank ne te supprime pas avant la réaction de l'équipe.
- **Brûler la E en engage.** **Flame Chompers!** est ton seul self-peel. Une fois en cooldown tu es une glass cannon (un champion à gros dégâts et faibles défenses, comme la plupart des ADCs) sans réponse à un diver. Pose-la sous tes pieds quand un Zed ou une Samira atterrit, jamais en setup de poke.
- **Chase les kills hors de la fenêtre Get Excited!** La passive ne dure que quelques secondes. Si le buff tombe pendant que tu es en territoire ennemi, tu as la move speed de base et zéro escape. Quand le boost se termine, retraite — le fight suivant revient à toi plus vite que tu ne le penses.

## Conseil avancé

Entraîne le **swap de forme Q en mid-AA** pour garder les deux mondes actifs. L'astuce : stack 3 stacks d'attack speed minigun sur une wave, swap aux roquettes juste avant qu'une Q roquette ne last-hit deux minions, tire une roquette, puis re-swap en minigun la même frame pour garder le buff d'attack speed actif. En teamfight ça donne : stacker l'attack speed minigun sur le tank front line, swap aux roquettes au moment où l'équipe commit l'engage, et lâcher 3-4 roquettes dans la backline ennemie sous crit + Runaan's avec l'attack speed déjà chargée. Bien exécuté, ça ajoute environ 40% de DPS supplémentaire dans les trois premières secondes du fight, soit exactement la fenêtre où les carries vivent ou meurent.
