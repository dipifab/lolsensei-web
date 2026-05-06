---
title: "Fizz Mid Build & Guide — Patch 16.9"
slug: "fizz-mid"
language: "fr"
patch: "16.9"
champion: "fizz"
role: "mid"
last_updated: "2026-04-29"
description: "Guide Fizz mid pour League of Legends Patch 16.9 : build assassin AP, matchups clés, power spikes, erreurs courantes et une astuce avancée sur le timing du E."
quick_learn:
  champion_dd_id: "Fizz"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Assassin / AP Melee"
  abilities:
    - key: "P"
      name: "Nimble Fighter"
      description: "Traverse les unités (les minions ne le bloquent pas) et subit une réduction fixe de dégâts de chaque source. Aide à désengager en coupant à travers ta propre vague."
      dd_spell_id: "Fizz_Passive"
    - key: "Q"
      name: "Urchin Strike"
      description: "Dash ciblé sur 550 de portée à travers un ennemi. Inflige des dégâts magiques et applique les effets on-hit (passifs d'item déclenchés à chaque auto-attack, comme le spellblade de Lich Bane). Gap-close principal, cooldown court."
      dd_spell_id: "FizzQ"
    - key: "W"
      name: "Seastone Trident"
      description: "Passif : tes auto-attacks font saigner les ennemis pour des dégâts magiques sur 3 secondes. Actif : booste ta prochaine auto pour des dégâts magiques bonus. Tuer une cible avec W actif reset le cooldown à 1 seconde."
      dd_spell_id: "FizzW"
    - key: "E"
      name: "Playful / Trickster"
      description: "Saute sur le trident : 0.75s untargettable, puis frappe au sol pour des dégâts magiques AOE et un slow. Recast pour faire un second dash au lieu du slam (pas de slow, zone réduite). Seule escape et cœur du combo."
      dd_spell_id: "FizzE"
    - key: "R"
      name: "Chum the Waters"
      description: "Skillshot linéaire longue portée (1300). Se colle au premier champion touché, le ralentit, puis un requin éclate et le projette en l'air. Dégâts et slow scalent avec la distance parcourue par le poisson."
      dd_spell_id: "FizzR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
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
    - { dd_id: "3100", name: "Lich Bane" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3152"
      name: "Hextech Rocketbelt"
      against: "premier item alternatif contre comp poke ranged où il faut un dash en plus pour atteindre la back line"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contre lockdown CC lourd (Lissandra R, Rell ult) : la stasis laisse détoner la R fish avant la mort"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contre CC magique single-target (Annie stun, Twisted Fate gold card, Malzahar suppression)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap dès qu'une cible prioritaire achète un item de magic resist"
  base_combo: ["R", "Q", "W", "AA", "E"]
  win_condition: "Trouve des squishy isolés en side lanes après Lich Bane. Lance R fish à portée max, puis Q + W + AA spellblade pour les supprimer. Roame avec la wave côté ennemi."
  weakness: "Squishy melee avec un seul cycle d'engage. Si E ou R sont en cooldown tu n'as pas d'escape ni de second commit ; le CC focalisé clôt le combo avant que la R fish n'atterrisse."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8126, name: "Cheap Shot", icon_path: "perk-images/Styles/Domination/CheapShot/CheapShot.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "anivia", "twisted-fate"]
      archetype: "Mages immobiles sans dash"
      reason: "Le Q de Fizz les dash d'instinct et le E offre 0.75s d'untargettability pour esquiver leur sort clé. Sans dash d'escape ils ne peuvent pas répondre à l'all-in une fois la R fish accrochée."
    - examples: ["lux", "xerath", "ziggs"]
      archetype: "Artillerie longue portée sans mobilité"
      reason: "La R fish atteint 1300 unités : elle punit le positionnement à portée max. Une fois Fizz commit avec Q + E ils n'ont pas de dash pour reset la distance et doivent encaisser toute la burst window."
    - examples: ["annie", "syndra"]
      archetype: "Mages close-range à engage télégraphié"
      reason: "Leur burst exige d'avancer avec un tell lent (stun-buffer d'Annie, setup E de Syndra). Fizz E pendant la cast window le rend untargettable et le combo passe à vide."
  counterpicks:
    - examples: ["malphite", "galio"]
      archetype: "Mids tanky avec hard engage"
      reason: "Leurs résistances coupent le burst de Fizz en deux (le W de Galio réduit ~50% des dégâts magiques, la passive-shield de Malphite bloque le proc du W). Tous deux ont un hard engage à 6 qui punit Fizz quand il commit en premier."
    - examples: ["lissandra", "malzahar"]
      archetype: "Mages avec CC point-and-click"
      reason: "La R de Lissandra est stasis point-and-click (pas de skillshot à esquiver avec E), la R de Malzahar suppress à travers le recast du E. Toutes deux waveclear, donc Fizz ne peut pas les zone en lane."
    - examples: ["pantheon", "talon"]
      archetype: "Bullies de lane early-game"
      reason: "Ils out-trade Fizz aux niveaux 1-3 avant le power spike de niveau 6. Le stun du W de Pantheon et son Q shieldé poke chaque pas en avant ; le Q de Talon a la même portée que celui de Fizz pour un coût en mana inférieur."
---

## Aperçu

Fizz est un assassin AP melee qui vit ou meurt sur le timing de son **Playful / Trickster (E)**. Son kit est courte portée, gros burst (dégâts concentrés sur 1-2 secondes plutôt qu'étalés dans le temps) et glissant : une fenêtre de 0.75 seconde pendant laquelle il ne peut être ciblé, un dash à cooldown bas et une ult-poisson longue portée qui lock un target prioritaire. Le mid lui convient parce que la rivière est courte — il peut engage dès le niveau 6 avec **Q-E** dans **R**, esquiver le counter-CC en plein combo, puis sortir avec le recast du **E**.

Son plan de partie est de survivre en lane jusqu'à son power spike à deux items (Lich Bane + Sorcerer's Shoes), puis de chercher des picks (éliminer un ennemi isolé hors teamfight) sur des cibles squishy (champions à faible HP et sans stats défensives — ils meurent vite sous le burst) en side lanes. Lui-même est squishy, n'a pas de waveclear et son unique escape (**E**) part avec un cooldown de 16 secondes au rang 1 — la perdre sans valeur le punit lourdement. Fizz préfère les cibles uniques à supprimer plutôt que les teamfights 5v5, où le CC focalisé clôt le combo avant que la R fish n'atterrisse.

## Build Recommandé

**Items de départ :** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Prends ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** à la place contre les matchups poke ranged lourd (harass à distance qui grignote l'HP) comme Xerath ou Vel'Koz.

**Items core (dans l'ordre) :**

1. ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** — ton power spike principal (le moment où tes dégâts montent d'un cran et où tu peux commencer à fight depuis une position de force). Synergie avec le pattern Q-AA : chaque **Q** trigger l'effet spellblade sur ton auto suivante, doublant presque ton burst.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — pénétration magique fixe pour les cibles squishy que tu veux supprimer.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst en plus et une HP-threshold passive (effet d'item activé seulement quand la cible est sous ~35% HP) qui s'aligne avec les executes de la R fish.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicateur de scaling late-game. Ton slot le plus AP et l'item qui transforme les squishies en cibles one-shot.

**Items situationnels :**

- ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** — premier item alternatif s'il te faut un gap-close en plus (moyen de couvrir la distance jusqu'à l'ennemi) pour atteindre une back line poke ranged que le **Q** seul ne peut pas combler.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contre lockdown CC lourd (Lissandra R, Rell ult) : la stasis laisse détoner la R fish avant que tu meures.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contre CC magique single-target (Annie stun, Twisted Fate gold card, Malzahar suppression).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — dès qu'une cible prioritaire achète un item de magic resist.

**Bottes :** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** par défaut. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** sont acceptables quand **E** devient ton cooldown le plus important (matchups très combo-dépendants).

**Skill order :** Max **E** en premier (untargettability + scaling de dégâts AOE — AOE signifie *area of effect*, le sort touche tout ce qui se trouve dans une zone), **Q** en second (cooldown reduction = plus de dashes par fight), **W** en dernier. Mets un point en **R** aux niveaux 6, 11, 16.

**Runes :** Arbre primaire **Domination** avec **Electrocute**, **Cheap Shot**, **Sixth Sense**, **Ultimate Hunter**. Secondaire **Sorcery** avec **Manaflow Band** et **Scorch**. Electrocute s'imbrique parfaitement avec la fenêtre à trois coups Q-AA-W : chaque all-in (commit total au combo jusqu'à la kill ou l'escape) la procc.

## Matchups clés

- **Annie :** Engage télégraphié. La passive d'Annie stun le sort suivant après chaque quatre sorts qu'elle lance — tu verras s'accumuler quatre petites marques bleues autour d'elle. Dès que les quatre marques apparaissent, elle prépare un all-in. Saute avec **E** pendant qu'elle lance le stun ; quand tu atterris, son combo principal est gâché et le trade est pour toi.
- **Yasuo / Yone :** Le Wind Wall de Yasuo (un mur qui bloque les sorts ranged qui le traversent) arrête les projectiles, mais **Q**, **E** et **R** de Fizz ne sont pas des projectiles bloquables. Out-trade-les (sors de l'échange en avantage) avec **W** actif sur tes auto-attacks ; leur mur est une mécanique gâchée contre toi.
- **Lissandra :** Hard counter. Sa **W** est un AOE (area of effect — touche tout dans une zone) de root point-blank, et sa **R** est stasis point-and-click (un sort sans skillshot à esquiver : elle te clic, le sort atterrit). Aucun n'est un skillshot (sort non automatique qui vole en ligne ou en zone, esquivable en se déplaçant) que tu peux esquiver avec **E**. Garde **E** pour le cast de sa **W**, jamais d'all-in sans **R** dispo, et cherche des picks en side lanes à la place.
- **Galio :** Stats de tank et un passif de magic damage reduction sur sa **W** qui coupe ton burst complet de moitié. Arrête d'essayer de le tuer en solo ; dépense ta mana à shove la wave (pousser tes minions sous la tour ennemie pour qu'ils ne puissent plus venir à toi librement) et roame (sors de ta lane pour aider les alliés ailleurs sur la map) bot ou top dès que **R** est dispo.
- **Pantheon :** Te punit pré-6. Son stun de **W** et son **Q** shieldé out-trade aux niveaux 1-3. Reste derrière ta wave et ne trade que quand sa **W** est en cooldown. Le matchup s'inverse à 6 quand tu as **R**.

## Power spikes & conditions de victoire

- **Niveau 2 :** Avec **E** + **Q**, tu as un cycle garanti dash + slow + dégâts AOE. Si l'ennemi avance pour last-hit un melee minion, **E** sur lui et déchaîne **Q-AA** pour un trade gagnant (un bref échange de coups dont tu sors en avantage).
- **Niveau 6 :** Le premier **Chum the Waters** débloque les all-ins. Le combo **R-Q-W-AA-E** supprime n'importe quel mid laner squishy même avec seulement les composants de base de Lich Bane achetés. Roame bot lane après avoir shove la wave : les minions poussés côté ennemi, ils perdent plus de temps à défendre que toi à quitter la lane.
- **![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) Lich Bane completion (~ minute 11-13) :** Spike de burst (le moment où tes dégâts font un saut soudain). Ton spellblade Q-AA arrache environ 40% HP à un squishy en un seul cast. C'est la fenêtre où tu dois roamer agressivement pour des picks plutôt que faire du 1v1 en lane.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minute 24-28) :** Ton combo complet one-shot n'importe quel squishy qui n'a pas acheté un seul item de magic resist. Force les fights sur objectifs ici ; deny la vision (tue les wards ennemies pour qu'ils n'aient plus d'yeux sur la map) côté ton équipe pour que l'ennemi ne voie pas ton flank (entrée dans le fight depuis un côté qu'ils ne couvrent pas).

## Erreurs courantes

- **Utiliser E avant leur commit.** **E** est ton unique escape. Si tu sautes sans avoir bait leur CC d'abord, tu manges le sort à l'atterrissage. Attends qu'ils lancent l'ability clé — *puis* saute.
- **R fish de trop courte portée.** Les dégâts et la force du slow scalent avec la distance parcourue avant l'accroche. Lance-la à la portée max de 1300 pour qu'elle touche à dégâts plein et que le slow dure toute la fenêtre de détonation.
- **All-in dans 2+ ennemis.** Fizz a un seul cycle d'engage (commit total à un unique combo). Si une seconde cible apparaît en plein combo, tu n'as pas de seconde R fish, pas de seconde escape, et tu plies sous le CC focalisé. Cherche des cibles isolées en side lanes, pas des 5v5 mid.
- **Oublier W en chase.** Tuer une cible avec **W** actif rembourse de la mana et fait tomber le cooldown à 1 seconde — tu peux enchaîner une autre auto-attack boostée sur une seconde cible instantanément. Active **W** avant le coup fatal dès qu'une cible de follow-up est proche.
- **Max W en premier en lanes normales.** **Q** et **E** portent tes dégâts et le timing du combo ; le bleed de **W** est du DPS soutenu qui compte dans les trades étendus, pas dans les fenêtres de burst. Par défaut : max **E** en premier.

## Conseil avancé

Pratique le **R-Flash combo** (R + Flash). Lance le poisson en avant, puis utilise immédiatement **Flash** dans la même direction : le poisson atterrit bien plus loin que les 1300 unités naturelles, te donnant une catch garantie sur une cible qui se croit hors de portée. Utilise-le pour des picks à travers les murs ou pour ouvrir des fights sur objectifs depuis des angles inattendus. La fenêtre cast-to-Flash est courte — bind **Flash** sur ta seconde touche (D) pour la mémoire musculaire et répète-le dans le practice tool jusqu'à ce que le timing devienne automatique.
