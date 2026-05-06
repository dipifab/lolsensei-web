---
title: "K'Sante Top Build & Guide — Patch 16.9"
slug: "k-sante-top"
language: "fr"
patch: "16.9"
champion: "k-sante"
role: "top"
last_updated: "2026-05-04"
description: "Guide K'Sante top lane pour League of Legends Patch 16.9 : starter kit, build tank-skirmisher, matchups clés, power spikes, erreurs courantes et astuce technique finale."
quick_learn:
  champion_dd_id: "KSante"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Tank / Skirmisher"
  abilities:
    - key: "P"
      name: "Dauntless Instinct"
      description: "Les sorts marquent la cible. La prochaine auto-attaque de K'Sante inflige des dégâts bonus. En forme All Out, toutes les attaques et compétences infligent des dégâts supplémentaires."
      dd_spell_id: "KSante_Passive"
    - key: "Q"
      name: "Ntofo Strikes"
      description: "Frappe linéaire courte qui inflige des dégâts et ralentit. Chaque hit donne un stack : à 2 stacks le prochain cast est une shockwave qui attire et stun. CD bas, outil de trade spammable."
      dd_spell_id: "KSanteQ"
    - key: "W"
      name: "Path Maker"
      description: "Charge (unstoppable + grosse réduction de dégâts) puis dash en avant qui knockback et stun les ennemis touchés. En All Out inflige des true damage bonus mais perd le knockback et le stun."
      dd_spell_id: "KSanteW"
    - key: "E"
      name: "Footwork"
      description: "Dash court + bouclier perso. Ciblé sur un allié, la portée du dash augmente et l'allié est aussi protégé. En All Out le CD est réduit et la vitesse du dash augmentée."
      dd_spell_id: "KSanteE"
    - key: "R"
      name: "All Out"
      description: "Repousse un champion ennemi : s'il touche un mur il subit des dégâts bonus. K'Sante dash derrière lui et se transforme — gagne attack speed, armor pen et omnivamp, mais perd HP max et résistances bonus."
      dd_spell_id: "KSanteR"
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
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6664", name: "Hollow Radiance" }
    - { dd_id: "6665", name: "Jak'Sho, The Protean" }
  situational_items:
    - dd_id: "3075"
      name: "Thornmail"
      against: "contre AD qui auto-attaque et heal (Aatrox, Trundle, Nilah, Yi) — applique grievous wounds (40% de soins réduits)"
    - dd_id: "3065"
      name: "Spirit Visage"
      against: "contre burst AP top/jungle (Mordekaiser, Vladimir, Diana) — magic resist + 25% bonus aux soins/boucliers"
    - dd_id: "3110"
      name: "Frozen Heart"
      against: "contre carries hyper attack speed (Vayne, Kog'Maw, Yi) — aura -20% AS détruit leur DPS"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap depuis Plated Steelcaps si l'équipe adverse a 2+ menaces CC lourd ou un AP top — magic resist + tenacity"
  base_combo: ["W", "Q", "AA", "Q", "R"]
  win_condition: "Sois la front line en teamfight : charge W pour interrompre les engages, garde R pour un carry clé à wall-slammer hors de son équipe. En forme All Out, finis les backline bas HP avec le burst AS + armor pen."
  weakness: "Range courte (W fait 600, pas de vrai gap-closer au-delà de E). Les kiters ranged le pokent hors lane. Le R All Out est un long commitment : perdre le fight transformé le laisse sans win condition pendant 80-120s."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8401, name: "Shield Bash", icon_path: "perk-images/Styles/Resolve/MirrorShell/MirrorShell.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primaire : Grasp donne du HP scaling gratuit à chaque proc, parfait pour un tank qui scale. Shield Bash transforme le bouclier de E en dégâts bonus à la prochaine AA — synergie directe avec la passive. Conditioning + Overgrowth verrouillent la tankiness late."
    secondary_rationale: "Sorcery secondaire : K'Sante a faim de mana et d'ability haste. Manaflow Band tient le mana pour spam Q en lane ; Transcendence ajoute de l'ability haste et refund le cooldown sur takedown — clé pour enchaîner les R."
    secondary_alternative: "Contre matchups de poke lourd ou de scaling (Vayne, Teemo, Jayce), swap Sorcery vers Inspiration avec Biscuit Delivery (HP+mana biscuits gratis early) + Cosmic Insight (Flash et summoners cooldown réduit)."
matchup_draft:
  pick_into:
    - examples: ["garen", "darius", "sett", "mordekaiser"]
      archetype: "Bruisers melee immobiles sans dash"
      reason: "Le W de K'Sante les stun en pleine tentative et son R wall slam punit leur absence d'escape ; le stun 2-stacks de Q interrompt leurs wind-ups clés (pull Darius, E spin Garen) avant la fin du sort."
    - examples: ["renekton", "riven", "camille"]
      archetype: "Divers dépendants d'un combo avec une seule fenêtre de commit"
      reason: "Le stun Q et la 40%+ damage reduction de W mangent leur all-in : une fois leurs dashes et leur burst dépensés, K'Sante inverse avec R et les finit en forme All Out."
  counterpicks:
    - examples: ["vayne", "teemo", "quinn", "jayce", "gnar"]
      archetype: "Top laners ranged qui le kitent"
      reason: "Le W de K'Sante n'a que 600 de range et E seulement 525. Les adversaires ranged le pokent hors lane à l'auto depuis hors de portée du W, puis s'éloignent quand il essaie de charger — le laissant avec rien d'autre qu'une ulti à long cooldown."
    - examples: ["fiora", "olaf", "trundle"]
      archetype: "Spécialistes anti-tank"
      reason: "Les Vital Strikes de Fiora infligent des true damage qui ignorent ses boucliers et résistances ; le R d'Olaf cleanse le stun de W et le rend unstoppable en trade ; le R de Trundle vole les résistances bonus de K'Sante exactement quand il est le plus vulnérable en forme All Out."
---

## Aperçu

K'Sante est un hybride tank-skirmisher : un bruiser lourd en forme de base qui devient un duelist skirmisher quand son ulti **All Out** s'active. Tout le kit est construit autour de deux phases. En forme de base il absorbe les dégâts avec la réduction du charge-up de **W (Path Maker)**, contrôle les fights avec le stun de **Q (Ntofo Strikes)** et le knockback de **W**, et se protège lui-même ou un allié avec **E (Footwork)**. Quand **R** le transforme, il troque toute cette durabilité contre attack speed, armor penetration et omnivamp (lifesteal qui fonctionne sur n'importe quel type de dégâts) — devenant un duelist damage-dealer pendant quelques secondes.

Le plan de partie est de jouer l'early lane patiemment — short trades (échanges courts de 1-2 abilities, pas un commitment à la kill) avec des auto-attaques procc par **Q** (proc = un effet qui se déclenche quand une condition est remplie ; ici, la marque **Q** détonée par ta prochaine AA) — puis snowballer (construire un avantage croissant : kills → gold → items → encore plus de kills) en push la wave (la vague de minions vers la tour ennemie) et en cherchant des engages avec le charge **W** une fois que tu as le sustain de Sundered Sky. À mid-game tu deviens la frontline de l'équipe (le tank/bruiser qui ouvre le fight en absorbant les dégâts pour que les carries — les principaux damage dealers de ton équipe — les infligent depuis l'arrière). À late-game ton **R** est un outil de target removal : choisis un ennemi clé, slamme-le contre un mur, transforme-toi et finis-le en forme All Out.

## Build Recommandé

**Items de départ :** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Le bouclier donne du sustain dans les trades melee et une petite passive heal-on-low-HP qui colle au profil tank de K'Sante.

**Items core (dans l'ordre) :**

1. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — ton premier gros spike. Toutes les quelques secondes, ta prochaine auto-attaque crit et te heal de ~10% de tes HP manquants. Le proc s'aligne parfaitement avec la marque passive de **Q** (un debuff de dégâts bonus appliqué par les sorts et déclenché par la prochaine AA).
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — armor + une réduction fixe sur les auto-attaques ennemies. Bottes par défaut contre un top laner AD.
3. ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — ajoute une aura qui brûle les ennemis autour de toi (AOE = dégâts sur une zone, pas sur une cible unique). Aide à clear les waves et tag plusieurs cibles en teamfight pour que tes procs **Q** touchent plus souvent.
4. ![Jak'Sho, The Protean](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6665.png) **Jak'Sho, The Protean** — ton item de scaling tank. Stack armor et magic resist bonus dans le temps pendant les fights, plus une petite frappe AOE de retour. Plafond de tankiness late-game.

**Items situationnels :**

- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — contre les compos avec champions AD auto-attack-heavy qui se heal beaucoup (Aatrox, Trundle, Nilah, Master Yi). Applique grievous wounds (40% de soins réduits) sur l'ennemi quand il te touche.
- ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — contre les menaces AP top ou jungle (Mordekaiser, Vladimir, Diana). Donne magic resist et un 25% bonus à tous les soins/boucliers reçus — multiplie le heal Sundered Sky et l'omnivamp de ton **R**.
- ![Frozen Heart](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3110.png) **Frozen Heart** — contre les carries hyper attack-speed (Vayne, Kog'Maw, Master Yi). L'aura coupe 20% d'attack speed aux ennemis proches, neutralisant leur DPS pendant que tu encaisses leurs AAs.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap depuis ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** quand l'équipe adverse a 2+ champions de crowd-control lourd (Leona, Lissandra, Maokai) ou un top laner AP. Donne magic resist + tenacity (récupération plus rapide des stuns/slows).

**Bottes :** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** par défaut contre AD top, ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contre AP ou CC lourd.

**Skill order :** Max **Q** d'abord (cooldown le plus bas, dégâts principaux et stun à 2 stacks), **E** ensuite (plus de bouclier + cooldown plus rapide pour les engages), **W** en dernier (les dégâts de base scale le moins par niveau — la valeur est dans l'utility, pas dans les dégâts par rank). Point dans **R** aux niveaux 6, 11, 16.

**Runes :** Arbre primaire **Resolve** avec **Grasp of the Undying** + **Shield Bash** + **Conditioning** + **Overgrowth**. Secondaire **Sorcery** avec **Manaflow Band** + **Transcendence**. Stat shards : Adaptive Force / Adaptive Force / Health Scaling.

## Matchups clés

- **Vayne / Teemo :** Cauchemars de poke ranged (poke = dégâts à distance pour grignoter les HP sans s'engager dans un fight). Prends ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, swap les runes secondaires en Inspiration pour le sustain de **Biscuit Delivery** (HP+mana biscuits gratis en lane), et n'essaie pas le W-charge — ils sortent du range. Farm sous tour jusqu'à ce que ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** soit online et appelle un gank du jungler (un gank = ton jungler arrive en lane par un sentier latéral pour surprendre l'ennemi).
- **Darius :** Favorable. Le stun Q 2-stacks (le second cast de Q, après accumulation de 2 stacks, attire et stun) coupe son pull, la damage reduction de W absorbe le bleed (saignement) de l'anneau extérieur de sa Q (la Q de Darius tape le plus fort sur le bord extérieur du cercle, et sa passive accumule du saignement à chaque AA qu'il pose sur toi). Ne combats pas dans le ring extérieur de sa Q aux niveaux 1-3 ; à partir du niveau 4 tu peux short-trader et marcher.
- **Mordekaiser :** Égal ou légèrement favorable. Ta **W** durant le charge-up te rend unstoppable (immune aux stuns, slows et autres CC), donc tu peux l'utiliser dans sa **R** prison pour briser l'effet sur toi. Ne brûle pas **W** sur lui hors de la prison — garde-la.
- **Fiora :** Hard counter. Ses Vital Strikes infligent des true damage (dégâts qui ignorent armor, magic resist et boucliers). Tes boucliers et résistances ne font rien contre sa source de dégâts principale. Joue très passif, lâche du CS (creep score = kills de minions) pour la sécurité, et demande un gank au jungler tôt.
- **Renekton :** Skill matchup (décidé plus par qui joue mieux que par le kit). Son power spike aux niveaux 2-3 est brutal (un power spike = un moment où le champion devient nettement plus fort, ici grâce au déblocage d'abilities clés) — ne combats pas avant le niveau 3. Une fois que tu as toutes les trois abilities et ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** en construction, tu inverses le matchup : le stun Q interrompt sa W (son sort de stun), puis tu vas all-in (un trade en full commitment jusqu'à la kill, sans option de back-off en milieu de fight).

## Power spikes & conditions de victoire

- **Niveau 2 → Niveau 3 :** Au niveau 3 tu as Q + W + E et le stun Q 2-stacks online. C'est ta première fenêtre de short-trade : ouvre avec le charge **W** pour les écarter de la wave, puis **Q** deux fois pour le stun → **E** pour sortir.
- **Niveau 6 (première R) :** All Out déverrouille la kill threat. Cherche un gank du jungler : **R** l'ennemi vers ton mur (le wall slam inflige des dégâts bonus et les bloque), transforme-toi et finis en forme All Out.
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky complet (~ minute 11-13) :** Ton sustain triple. Tu peux maintenant gagner les extended trades et rester en lane à travers les tentatives de gank. Pousse pour une solo kill ou monte un tower dive (passer sous la tour ennemie pour tuer malgré les tirs de tour — ça marche parce que la damage reduction de **W** absorbe les hits de tour pendant le dive).
- **Teamfight à 3 items (~ minute 22-26) :** Avec ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** + ![Jak'Sho, The Protean](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6665.png) **Jak'Sho, The Protean** tu deviens l'outil d'engage primaire de l'équipe (le champion qui ouvre le fight en sautant et en lockant une cible). Cherche des picks **R** (un "pick" = éliminer un ennemi isolé hors position) sur les carries adverses près des murs.

## Erreurs courantes

- **Presser R quand tu es déjà en train de perdre le fight.** All Out troque la durabilité contre les dégâts. Si tu es déjà bas HP et en infériorité numérique, tu meurs en forme transformée en quelques secondes. **R** est un outil de "win condition", pas un bouton panique — utilise-le quand tu peux isoler une cible et la finir, pas quand tu essaies de fuir.
- **Charger W devant un adversaire ranged.** Ils voient le wind-up (l'animation lente de charge qui télégraphie le dash) et marchent. Utilise **W** comme counter-engage (ils s'engagent en premier, tu charges en pleine animation) ou depuis la fog of war (la zone sombre de la map où l'ennemi ne te voit pas) pour les surprendre — jamais en opening poke.
- **Sauter les stacks de Q.** Chaque hit **Q** donne un stack (une charge qui s'accumule sur l'ability) : à 2 stacks le prochain cast est une shockwave qui attire et stun. Lancer **Q** à 1 stack pour les dégâts et laisser le stack expirer gâche ton CC le plus fort (CC = crowd-control : stuns, slows, knockbacks). Planifie toujours le second cast.
- **Faire du splitpush solo en tank.** Splitpush = pousser une side lane seul pour forcer l'adversaire à envoyer quelqu'un t'arrêter. K'Sante est un champion de teamfight sans ulti globale pour basculer d'autres lanes — son kit a besoin d'alliés pour follow-up le wall slam de **R**. Regroupe-toi avec l'équipe pour les objectifs à moins d'avoir un avantage numérique clair.
- **Oublier qu'All Out fait baisser ton HP max.** Quand tu te transformes, ton HP courant et max baissent d'un pourcentage. Si tu étais à 100% HP avant le transform, tu seras au nouveau (plus bas) max avec HP courant proportionnel — mais si tu te transformes déjà bas, le drop pourcentage peut te tuer net. Vérifie la HP bar avant de presser R.

## Conseil avancé

Le W-cancel : pendant la charge de **Path Maker**, tu peux lâcher le cast à tout moment — les charges courtes infligent moins de dégâts et un knockback/stun plus court, mais tu restes unstoppable pendant la durée du charge. Utilise une **W mi-chargée** pour esquiver une ability ennemie clé (la **R** de Lissandra, la **R** de Malphite, l'enchaînement d'AA d'un ADC) sans engager le temps de charge complet, puis ré-engage à tes conditions. Le cooldown est identique quelle que soit la longueur du charge — pas de pénalité pour annuler tôt. Les pros utilisent ça pour survivre aux engages d'ouverture ; les joueurs ranked full-charge presque toujours et marchent droit dans le punish (la contre-attaque que tu encaisses pour t'être trop exposé).
