---
title: "Jayce Mid Build & Guide — Patch 16.9"
slug: "jayce-mid"
language: "fr"
patch: "16.9"
champion: "jayce"
role: "mid"
last_updated: "2026-05-04"
description: "Guide Jayce mid lane pour League of Legends Patch 16.9 : rush Manamune, combos weapon-swap, matchups clés, power spikes, erreurs courantes et astuce avancée."
quick_learn:
  champion_dd_id: "Jayce"
  difficulty: 4
  damage_type: "mixed"
  champion_class: "Lane Bully / Skirmisher"
  abilities:
    - key: "P"
      name: "Hextech Capacitor"
      description: "Chaque weapon swap (R) donne à Jayce un court burst de Movement Speed et lui permet d'ignorer brièvement la collision des unités."
      dd_spell_id: "Jayce_Passive"
    - key: "Q"
      name: "To the Skies! / Shock Blast"
      description: "Hammer : saute sur la cible, inflige des dégâts physiques et ralentit les ennemis proches. Cannon : tire un skillshot AOE longue portée — outil principal de poke en mid."
      dd_spell_id: "JayceToTheSkies"
    - key: "W"
      name: "Lightning Field / Hyper Charge"
      description: "Hammer : passive de mana sur auto, active une aura de dégâts autour de Jayce. Cannon : Attack Speed max sur les 3 prochaines attaques — fenêtre de burst auto sur les all-ins."
      dd_spell_id: "JayceStaticField"
    - key: "E"
      name: "Thundering Blow / Acceleration Gate"
      description: "Hammer : knockback courte portée infligeant des dégâts magiques en % de PV max. Cannon : pose un gate qui accélère les alliés et amplifie une Q (Shock Blast) qui le traverse — le setup standard en mid."
      dd_spell_id: "JayceThunderingBlow"
    - key: "R"
      name: "Mercury Cannon / Mercury Hammer"
      description: "Stance swap (cooldown 6s). Alterne entre Hammer mêlée (engage, sustain, knockback) et Cannon distance (poke, AOE waveclear). La première attaque après passage en Cannon réduit Armor et Magic Resist."
      dd_spell_id: "JayceStanceHtG"
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
    - { dd_id: "3004", name: "Manamune" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6697", name: "Hubris" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contre mid-laners AP (Annie, Veigar, Syndra) : le bouclier magique bloque le burst et ajoute de l'AD"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contre CC dur single-target (Ahri charm, Lissandra R, Sylas E) : le spellshield bloque le lockdown"
    - dd_id: "6698"
      name: "Profane Hydra"
      against: "contre comps 5v5 groupées avec frontline empilée : l'AOE traverse le front jusqu'à la backline"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap des Plated Steelcaps si l'équipe ennemie a 3+ menaces AP/CC ; la tenacity réduit stun et slow"
  base_combo: ["E", "Q", "R", "Q", "AA", "E"]
  win_condition: "Empile Tear (Manamune) avec le poke Cannon Q, atteins le spike Muramana à la minute 14, puis snipe les cibles peu défendues avec E-gate Q. Roam les sidelanes dès que R est rank 2 pour convertir l'avance."
  weakness: "Mana hungry pré-Manamune : un Q raté gâche presque tout le trade. Les assassins mobiles ferment la portée du Cannon Q dans la cast window. Décline en late vs Magic Resist empilée sur les équipes AP-heavy."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Le trade 3 hits de Jayce (Cannon Q + AA + Hammer Q-AA-E) proc Press the Attack pour +8% de dégâts et transforme le poke Cannon en kill threat dès la minute 6. Triumph rend des PV en takedown ; Legend: Alacrity cap l'AS dans W (Hyper Charge) ; Coup de Grace +8% sous 40% HP."
    secondary_rationale: "Manaflow Band stack vite sur le poke Cannon Q pour +50 mana permanents par stack. Transcendence niveau 5 ajoute de l'Ability Haste, qui s'additionne avec Manamune pour une fenêtre de weapon-swap R plus courte."
    secondary_alternative: "Contre comps d'assassins (Zed mid + Kha'Zix jungle), swap Sorcery pour Resolve avec Bone Plating (réduction sur les 3 premiers hits) et Second Wind (regen passive sous 50% HP). Sacrifie le scaling early pour survivre au burst pré-Edge of Night."
matchup_draft:
  pick_into:
    - examples: ["veigar", "anivia", "annie"]
      archetype: "Mages mid-lane immobiles sans dash"
      reason: "Ils ne peuvent pas interagir avec la portée du Cannon Q pré-6. Veigar a besoin de E (Event Horizon) pour setup son Q, mais le gate de Jayce amplifie ton Q avant qu'il finisse sa combo. À 50% HP, swap Hammer et one-shot à travers le cast time de leurs spells."
    - examples: ["akali", "yone"]
      archetype: "Skirmishers mêlée sans poke à distance"
      reason: "Cannon Q outrange la E d'Akali (Shuriken Flip) et la Q de Yone ; les deux doivent commit en mêlée pour faire des dégâts. Le knockback Hammer E nie leurs chaînes de dash, et le shred Cannon-stance ouvre l'armor pour les follow-up gank kills."
  counterpicks:
    - examples: ["zed", "fizz"]
      archetype: "Assassins mobiles avec plusieurs gap-closers"
      reason: "Zed W (Living Shadow) et Fizz E (Playful/Trickster) ferment la portée Cannon Q dans la cast window. Une fois en portée Hammer avec R prête, ils burst Jayce avant qu'il finisse une combo Hammer Q-W-E. Edge of Night aide mais ne sauve pas si le gap-close arrive avant."
    - examples: ["xerath", "vel-koz"]
      archetype: "Mages d'artillerie longue portée"
      reason: "Ils outrangent Cannon Q. La Q de Xerath (Arcanopulse) et la Q de Vel'Koz (Plasma Fission) frappent à des distances que Jayce ne peut pas égaler sans marcher dans leur full combo. Chaque wave-fight saigne les PV de Jayce sans fenêtre d'all-in retour."
    - examples: ["twisted-fate", "galio"]
      archetype: "Roamers globaux / cross-map"
      reason: "Jayce roam lentement sans synergie de stance. La R de Twisted Fate (Destiny) flip une sidelane en 8 secondes ; la R de Galio (Hero's Entrance) atterrit là où Jayce ne peut pas suivre. Le 1v1 mid peut être égal, mais la macro saigne des objectifs ailleurs."
---

## Aperçu

Jayce mid est le **lane bully** canonique — un champion qui domine le mid-laner adverse avec un poke soutenu avant qu'il puisse scale. C'est un hybride ranged-melee qui gagne early avec une skillshot AOE (area-of-effect, dégâts de zone) longue portée Q en **Cannon stance** et finit ses cibles avec une combo leap-Q + knockback-E en **Hammer stance**. Le toggle R a un cooldown de 6 secondes, et la première attaque après passage en Cannon réduit Armor et Magic Resist — le déclencheur de tout all-in (engagement total dans un trade jusqu'à la mort d'un champion).

Le plan de jeu en mid se divise en trois phases. Pré-6, tu empiles le poke Cannon Q sur la wave (le projectile traverse les minions) ; l'objectif est de saigner l'ennemi de 100% à 50% HP sans gaspiller de mana. Au 6, l'all-in Cannon-to-Hammer devient kill threat : pose **E** (Acceleration Gate) vers lui, tire **Q** (Shock Blast) à travers pour les dégâts amplifiés, swap Hammer avec **R**, saute avec **Q**, pose **W** pour l'aura, et knockback avec **E** vers ta tour. Post-Manamune (~minute 14), ton Cannon Q one-shot les waves squishies et tu commences à roam les sidelanes pour traduire l'avance early en tempo global.

## Build Recommandé

**Starting items :** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Évite les starts greedy comme ![Tear of the Goddess](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3070.png) **Tear of the Goddess** (précurseur de Manamune) : il te faut l'AD et le lifesteal de Doran's Blade pour survivre aux trois premières minutes contre un mid-laner qui égale ta portée.

**Core items (dans l'ordre) :**

1. ![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) **Manamune** — premier item rush. Stack sur le poke Cannon Q en wave. L'Awakening en ![Muramana](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3042.png) **Muramana** au stack max ajoute des dégâts bonus sur chaque Q, AA et tick d'aura W — le plus gros spike AD du build de Jayce.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots contre une lane AD (Yasuo, Zed, Akshan). Switch en ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contre AP/CC empilé.
3. ![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) **Hubris** — lethality (statistique qui ignore une part fixe de l'armor adverse) plus une passive de stacks par takedown (Eminence). Combiné à Muramana, ton scaling AD devient brutal sur chaque roam.
4. ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — lethality et slow on damage. Le slow sur impact Cannon Q convertit les Flash en cibles à catch pour Hammer-Q.

**Situational items :**

- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contre mid-laners AP (Annie, Veigar, Syndra). Le bouclier magique bloque le burst et ajoute de l'AD.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contre CC dur single-target (Ahri charm, Lissandra R, Sylas E). Le spellshield se charge hors combat et bloque la prochaine ability qui te lock down.
- ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — contre compositions 5v5 groupées avec **frontline** (tanks/bruisers qui ouvrent le fight) empilée. L'AOE active traverse le front jusqu'à la **back line** (carries qui font des dégâts depuis l'arrière) et rembourse son cooldown sur takedown.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap depuis Plated Steelcaps quand l'équipe ennemie a 3+ menaces AP ou CC.

**Boots :** Plated Steelcaps par défaut. Mercury's Treads contre du magic damage lourd ou du chain CC.

**Skill order :** Max **Q** d'abord (dégâts principaux dans les deux stances), **E** ensuite (knockback pour execute, gate pour amplifier le poke), **W** en dernier. Mets **R** aux niveaux 6, 11, 16. Note : prends **E** au niveau 2 (pas W) pour la kill pressure avec la combo Acceleration Gate + Cannon Q.

**Runes :** Primaire **Precision** avec **Press the Attack**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secondaire **Sorcery** avec **Manaflow Band** et **Transcendence**. Contre comps d'assassins, swap secondaire en **Resolve** avec **Bone Plating** + **Second Wind**.

## Matchups clés

- **Yasuo / Yone :** Ils Wind Wall ton Cannon Q. Positionne-toi pour que ton Q arrive d'un angle de flanc qui les force à regarder loin de leur wave ; ils ne peuvent pas wall ce qu'ils ne voient pas à temps. Garde Q pour quand leur mur est en cooldown, puis chain E-gate-Q.
- **Zed :** Garde ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** chargé en permanence après la minute 12 ; bloque sa R (Death Mark) finisher. Pré-6 tu le poke. Post-6 la lane bascule : ne traverse pas la wave quand sa R est up.
- **Ahri :** Matchup égal, décidé par le timing du Q. Sa E (Charm) se télégraphie de loin — sidestep derrière un minion avant de tirer ton Cannon Q. Une fois charm raté, la lane est à toi pour 9 secondes.
- **Annie / Veigar :** Matchup de poke gratuit pré-6. Pas de mobilité ; ta combo Cannon Q + E les saigne off-creep. Surveille leur cooldown de stun (passive Annie, E Veigar) avant l'all-in : leur stun annule l'animation de knockback Hammer Q.
- **Twisted Fate :** Tu le pokes pré-6 mais perds la macro game (le jeu stratégique de map au-delà de ta lane). Quand sa R remonte, ping mid mia (missing in action — l'ennemi a quitté la lane) et back tôt ; la lane priority que tu as vaut moins que sa gold card cross-map.

## Power spikes & conditions de victoire

- **Niveau 2 (Q + E) :** Cannon Q + Acceleration Gate + AA est un trade de 30% HP sur la plupart des squishies. Le placement du gate sert aussi de route d'évasion — pose-le derrière toi vers ta tour si l'ennemi commit.
- **Niveau 6 (première R) :** Les deux stances unlock à pleine puissance. L'all-in Cannon-to-Hammer devient kill threat à 45% HP au lieu d'un chunk trade.
- **![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) Manamune complété + stacking (~ minute 12-14) :** Une fois Awaken en Muramana, chaque Q frappe ~15% plus fort et tes AA spike. C'est là que Jayce mid spike le plus fort et doit chercher à roam les sidelanes.
- **![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) Hubris + stacks de takedown (~ minute 19-22) :** Les stacks d'Eminence se cumulent avec Muramana pour des nombres AD absurdes. Force un fight ou push pour un inhibitor.

## Erreurs courantes

- **Tirer Cannon Q sans Acceleration Gate.** Le Q nu coûte cher en mana et est facile à dodge. Pose **E** (Acceleration Gate) vers l'ennemi d'abord ; le gate amplifie le Q qui le traverse (plus de portée, plus de dégâts, plus grosse AOE) et le léger délai force l'ennemi à commit une direction de mouvement avant que tu tires.
- **Stacker Manamune trop lentement.** Cannon Q doit toucher un champion ou tuer une wave pour compter en stacks ; les Q ratés ne stack pas. Plan ton wave poke pour que chaque Q touche au moins trois minions et accélère la Tear.
- **Cramer le shred R-Cannon sur un minion.** Quand tu swap Hammer en Cannon (R), la première AA réduit Armor et Magic Resist. Toucher un minion mêlée gâche le trigger ; garde-le pour un champion adverse à chaque fois.
- **Roam sans awareness du cooldown R.** R a un swap cooldown de 6 secondes qui sert aussi de seul outil de mobility (burst passif de Move Speed sur swap). Roam avec R hors cooldown pour pouvoir disengage d'un counter-roam ; arriver à un fight sans R, c'est commit sans sortie.
- **Oublier le sustain mana de Hammer W.** Sur les longs sièges Cannon poke, swap Hammer pour 2-3 autos pour refill mana via la passive W (Mana on hit). Sauter ça vide la pool et force un back précoce.

## Conseil avancé

Travaille le **timing-flip gate-Q** sur cibles en mouvement. La plupart des Jayces posent l'Acceleration Gate là où l'ennemi se trouve, puis tirent Q à travers. Les pros posent le gate là où l'ennemi *sera* dans 0.5 seconde (cast time du gate plus animation Q) — généralement vers la wave, vu que l'ennemi doit marcher pour last-hit. Le Q amplifié atterrit sur la position prédite, pas la passée. Entraîne ça au Practice Tool en mettant un target dummy en mode Move et apprends la lead distance jusqu'à ce que ce soit muscle memory.
