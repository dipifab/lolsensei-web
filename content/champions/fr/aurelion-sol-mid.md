---
title: "Aurelion Sol Mid Build & Guide — Patch 16.9"
slug: "aurelion-sol-mid"
language: "fr"
patch: "16.9"
champion: "aurelion-sol"
role: "mid"
last_updated: "2026-04-29"
description: "Guide complet Aurelion Sol mid lane pour League of Legends Patch 16.9 : build avec scaling Stardust, matchups clés, power spikes, erreurs courantes et astuce technique finale."
quick_learn:
  champion_dd_id: "AurelionSol"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Battlemage"
  abilities:
    - key: "P"
      name: "Cosmic Creator"
      description: "Les sorts qui infligent des dégâts collectent du Stardust sur les champions ennemis. Le Stardust agrandit en permanence la zone, la portée et le seuil d'execute de chaque sort — la patience paie en late game."
      dd_spell_id: "AurelionSol_Passive"
    - key: "Q"
      name: "Breath of Light"
      description: "Souffle de dragon canalisé dans un cône frontal. Maintiens le bouton pour continuer à infliger des dégâts ; chaque seconde complète sur un champion déclenche un burst supplémentaire et donne du Stardust. Source principale de DPS."
      dd_spell_id: "AurelionSolQ"
    - key: "W"
      name: "Astral Flight"
      description: "Vol dirigé qui traverse le terrain ; pendant le vol la Q n'a pas de cooldown. Une takedown sous 3s rembourse une partie du CD de W. Le Stardust étend la portée maximale du vol."
      dd_spell_id: "AurelionSolW"
    - key: "E"
      name: "Singularity"
      description: "Pose un trou noir qui aspire les ennemis vers le centre et inflige des dégâts. Le centre exécute (tue instantanément) les cibles sous le seuil de HP. Le Stardust agrandit zone et seuil."
      dd_spell_id: "AurelionSolE"
    - key: "R"
      name: "Falling Star / The Skies Descend"
      description: "Étoile écrasée sur la cible : stun et dégâts. Après 100 Stardust la R suivante devient The Skies Descend — zone plus grande, knock-up au lieu du stun, shockwave AoE."
      dd_spell_id: "AurelionSolR"
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
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contre assassins mobiles (Zed, Fizz, Talon, Akali) — la stasis est le bouton panique quand W est en cooldown"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contre hard CC single-target qui interrompt la Q (Annie R, Lissandra R, gold card de Twisted Fate)"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "contre équipes glissantes : le slow colle les cibles dans le cône de la Q"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap dès qu'une cible prioritaire achète son premier objet de Résistance Magique"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contre comps qui empilent les soins (Soraka mid, Vladimir, Yuumi + bot lane heal-heavy)"
  base_combo: ["E", "Q", "W", "R"]
  win_condition: "Accumule du Stardust dans les fights longs avec Q canalisée et W de poursuite. Une fois Liandry's Torment et Rabadon's Deathcap en ligne, ton burn sustained efface les squishys à travers leur Magic Resist."
  weakness: "La Q est un long channel : tout hard CC qui l'interrompt (Annie R, Lissandra R, stun de Twisted Fate) coupe tes dégâts en deux. Les assassins mobiles ferment la distance avant que W ne soit prêt à fuir."
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
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["veigar", "anivia", "karthus"]
      archetype: "Mages de contrôle immobiles sans dash"
      reason: "Le vol de W d'Aurelion Sol ferme la distance pendant que la Q continue son channel. Les cibles sans dash ni stealth mangent le DPS Q sustained alors que la fenêtre de vol le tient hors de leur portée de cast."
    - examples: ["galio", "sylas"]
      archetype: "Skirmishers melee mid à courte portée"
      reason: "Leur all-in exige le corps à corps. ASol kite avec W et Q hors de portée auto-attack ; s'ils Flash dedans, la E les sort de position et la R stun une fois que le Stardust agrandit la zone."
  counterpicks:
    - examples: ["zed", "fizz", "talon"]
      archetype: "Assassins mobiles avec plusieurs gap-closers"
      reason: "Ils peuvent dash sur Aurelion Sol en plein channel, interrompre la Q et le burst avant que le scaling Stardust ne porte le fight. La W a un cooldown trop long pour servir d'escape fiable."
    - examples: ["yasuo", "yone"]
      archetype: "Champions avec Wind Wall"
      reason: "Leur mur bloque toute la ligne de Q. La source principale de dégâts d'ASol devient inutile en plein trade et ils punissent le channel raté avec un all-in dont il ne peut pas sortir."
---

## Aperçu

Aurelion Sol est un mage à dégâts sustained dont le kit tourne autour de deux idées simples : garde **Breath of Light (Q)** canalisé sur une cible le plus longtemps possible (canalisation = un sort que tu maintiens pendant plusieurs secondes, interruptible par hard crowd control), et utilise **Astral Flight (W)** pour le suivre quand il essaie de fuir. Sa passive **Cosmic Creator** récolte une ressource permanente appelée **Stardust** chaque fois que tu infliges assez longtemps des dégâts à un champion — le Stardust agrandit en permanence la zone, la portée et le seuil d'execute (le seuil de HP en dessous duquel le sort tue instantanément la cible) de ses sorts. Plus la game traîne, plus chaque cast devient gros et menaçant. Il n'a pas de combo de burst instantané : il gagne en restant collé aux ennemis jusqu'à ce que le burn (dégâts qui tickent sur plusieurs secondes au lieu de tomber d'un coup) les achève.

Ton plan de partie en mid est asymétrique. Aux premiers niveaux tu trades sur des fenêtres courtes (un bref échange de dégâts en lane, pas une vraie tentative de kill) : **Q** sur un champion qui s'avance pour last-hit, un ou deux ticks de dégâts, retour. À partir du niveau 6, **W** te permet de traverser le terrain comme un **Flash** gratuit — utilise-le pour suivre les kills mises en place par ton jungler avec un gank (quand le jungler descend en lane pour t'aider à tuer l'ennemi), ou pour te disengage en volant vers ta tour. En late game tu deviens un battlemage de retraite (un mage qui combat à moyenne portée, mélangeant sorts et positionnement plutôt que l'artillerie longue portée) : place-toi au bord du teamfight, derrière la frontline (les tanks et bruisers, les melees costauds qui encaissent pour l'équipe), canalise la **Q** à travers leurs corps jusqu'au carry adverse, lâche **Singularity (E)** pour aspirer les ennemis sur les bords, et finis avec **Falling Star (R)** quand elle stun le carry.

## Build Recommandé

**Items de départ :** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** (l'anneau par défaut comme premier achat pour les mages : un peu d'AP, de HP et de regen mana) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. La regen de mana de Doran's est obligatoire — tu spammes la Q sur chaque wave de minions.

**Items core (dans l'ordre) :**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — brûle un pourcentage du HP max de la cible chaque seconde où ta Q la touche (donc plus elle est tanky, plus ça pique, et plus le channel dure plus le burn grandit). Ton meilleur item solo.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — bottes de magic penetration : chaque cast ignore une partie fixe de la Magic Resist ennemie, ce qui efface les squishys (cibles fragiles, type ADC et mages) plus vite.
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplie ton **AP** (Ability Power, la stat qui scale les dégâts magiques) de 30% en plus. Chaque sort tape plus fort. Achète-le en troisième si tu es devant.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — dégâts magiques bonus sur les ennemis à bas HP (HP-threshold passive : bonus qui ne s'active que sous un certain % de HP). S'aligne pile avec les finishs en **R**.

**Items situationnels :**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contre assassins mobiles (Zed, Fizz, Talon). La stasis est ton bouton panique quand **W** est en cooldown.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contre hard CC single-target (Annie R, Lissandra R, gold card de Twisted Fate). Un seul stun bloqué sauve ton channel.
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — slow tout ce que la **Q** touche, gardant les cibles collées dans le cône.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — magic penetration lourde pensée pour les ennemis qui ont déjà acheté de la Magic Resist. Swap dès qu'une cible prioritaire achète son premier item MR.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — applique Grievous Wounds aux ennemis touchés (un debuff qui coupe leurs soins de moitié). Achète-le contre les compos qui empilent les soins (Soraka mid, Vladimir, Yuumi + bot lane heal-heavy).

**Bottes :** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** par défaut. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** (bottes qui réduisent le cooldown de tes sorts) sont une option si l'équipe a besoin de la **R** plus souvent comme outil d'engage en teamfight.

**Skill order :** Maxe la **Q** en premier (source principale de dégâts), la **E** en second (waveclear et setup AoE), la **W** en dernier. Un point en **R** aux niveaux 6, 11 et 16.

**Runes :** Arbre primaire **Sorcery** avec **Arcane Comet**, **Manaflow Band**, **Transcendence** et **Scorch**. Secondaire **Inspiration** avec **Biscuit Delivery** et **Cosmic Insight**, ou **Resolve** avec **Second Wind** et **Overgrowth** si la lane est un poke longue portée intense (poke = dégâts à faible engagement pour grignoter ton HP).

## Matchups clés

- **Yasuo / Yone :** Leur **Wind Wall** bloque entièrement la ligne de **Q**. Garde la **Q** tant qu'ils n'ont pas brûlé le mur, puis re-engage. Trade uniquement quand le mur est en cooldown.
- **Zed / Talon :** Ils te tuent avant que la **W** ne soit prête. Achète ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** avant ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** ; ne tiens jamais **Flash** et **W** en cooldown au même moment.
- **Veigar :** À égalité pré-6 — il te stun dans sa cage W ; tu le pokes hors de la cage avec la portée de la **Q**. Post-6, il peut t'one-shot avec E-W-Q-R si tu restes immobile — continue à bouger latéralement pendant que tu canalises.
- **Annie :** Son stun se cache dans un compteur passif difficile à lire. Compte ses casts : tous les 4 sorts elle a son stun prêt. Si son indicateur **Pyromania** (l'icône orange de flamme sous son portrait) est allumé, ne reste pas à portée de Tibbers.
- **Twisted Fate :** Course au premier roam (quitter sa lane pour aider les autres). Sa **R** le téléporte de l'autre côté de la map ; ta **W** vole par-dessus le terrain pour le suivre. Garde la wave mid poussée vers la tour adverse dès que possible : s'il part gank bot, tu farm CS gratuitement et tu restes à égalité.

## Power spikes & conditions de victoire

- **Niveau 2 :** Avec **Q** + **W** tu peux poursuivre une erreur jusqu'au mur de la lane — punit ceux qui s'aventurent près du river sans vision.
- **Niveau 6 :** Première **Falling Star** débloque un stun instantané. Monte les ganks avec ton jungler (quand le jungler descend en lane pour t'aider à tuer l'ennemi) : pull en **E** → stun en **R** → kill.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment en ligne (~ minute 11-13) :** Ta **Q** sustained passe de chip damage (petits dégâts lents) à vraie menace. Force les fights aux spawns de Drake (le Dragon dans le river qui donne des buffs à toute l'équipe) dès que Liandry's est en ligne.
- **100 Stardust collectés (~ minute 18-22) :** Ta **R** se transforme en **The Skies Descend** — zone plus grande, knock-up à la place du stun, shockwave AoE. C'est ta condition de victoire en teamfight ; garde-la pour les objectifs au lieu de la cramer sur un pickoff (élimination d'un ennemi isolé hors du teamfight).

## Erreurs courantes

- **Canaliser Q sans voler.** Rester immobile pendant le channel de **Q** te transforme en cible facile. **W** dans la même direction que la cible qui fuit pour que le channel continue sans coût mana supplémentaire pendant que tu restes en sécurité.
- **Utiliser W agressivement sans plan de sortie.** **W** est ton seul escape. Si tu voles sur 3 ennemis sans setup (jungler proche, **R** prête, assez de cooldown reduction pour récupérer **W** vite), tu meurs sans dégâts. Traite la **W** comme un commitment (un all-in : tu pars pour la kill sans porte de sortie facile), pas comme une mobilité gratuite.
- **Greed le Stardust à la place des kills.** Le Stardust scale tes sorts sur le long terme, mais si le carry adverse est one-shot à 30% HP, achève-le. Un carry mort vaut plus que 5 Stardust.
- **Oublier que E aspire vers le centre.** Ta **E** tire les ennemis au milieu de la zone — aspire-les VERS ton équipe, pas vers l'extérieur. Une E mal placée peut sauver le carry adverse en l'éloignant de ta frontline.
- **Push la wave avec Q en lane.** **Q** push trop lentement et brûle le mana. Utilise **E** pour clear les caster minions, puis last-hit les melee aux auto-attacks. Garde **Q** pour les trades et le harass.

## Conseil avancé

La chaîne **Q-W-Q** est la technique qui sépare les joueurs Aurelion Sol. Cast **Q** sur un champion, puis immédiatement **W** dans la même direction qu'il fuit. Comme **W** supprime la limite max du channel de Q pendant le vol, tu continues à infliger des dégâts en continu dans les airs — et la **Q** peut être recast en plein vol pour une seconde instance si la cible originale meurt et qu'une autre est à portée. En pratique cela te permet de t'engager sur une kill de très loin : **W** vole loin (environ une fois et demie la largeur d'un écran) et pendant ce vol ta **Q** continue de toucher tout ce qui est devant toi, donc la zone de menace est la portée de **W** plus la portée de **Q** cumulées. Sur takedown, une partie du cooldown de **W** est remboursée et tu peux re-engage le fight suivant presque immédiatement.
