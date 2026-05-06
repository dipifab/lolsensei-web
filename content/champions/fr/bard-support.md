---
title: "Bard Support Build & Guide — Patch 16.9"
slug: "bard-support"
language: "fr"
patch: "16.9"
champion: "bard"
role: "support"
last_updated: "2026-04-29"
description: "Guide Bard support pour League of Legends Patch 16.9 : style roaming-pickoff, build, matchups clés, power spikes, erreurs courantes et astuce avancée sur le wall-stun."
quick_learn:
  champion_dd_id: "Bard"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Roaming Support / Catcher"
  abilities:
    - key: "P"
      name: "Traveler's Call"
      description: "Les Meeps apparaissent à côté de Bard et ajoutent des dégâts magiques bonus à ses auto-attaques. Les chimes apparaissent sur la map : les ramasser donne XP, mana et move speed hors combat."
      dd_spell_id: "Bard_Passive"
    - key: "Q"
      name: "Cosmic Binding"
      description: "Skillshot linéaire qui ralentit la première cible. Si le projectile touche un second ennemi ou un mur, les deux sont stun. Les wall-stun sont la signature pickoff de Bard."
      dd_spell_id: "BardQ"
    - key: "W"
      name: "Caretaker's Shrine"
      description: "Pose un autel de soin qui se charge sur 10 secondes. Le premier allié qui marche dessus soigne ses HP et gagne un boost bref de move speed. Jusqu'à 3 actifs. Les ennemis le détruisent."
      dd_spell_id: "BardW"
    - key: "E"
      name: "Magical Journey"
      description: "Ouvre un portail à sens unique à travers le terrain proche. Tout champion (allié ou ennemi) peut le prendre. Long cooldown : sert aux ganks, escapes ou flanks surprise."
      dd_spell_id: "BardE"
    - key: "R"
      name: "Tempered Fate"
      description: "AOE longue portée qui met en stasis champions, minions, monstres et tours pendant 2.5 secondes. Sert à bloquer une cible, sauver un allié du coup létal ou geler un tower dive."
      dd_spell_id: "BardR"
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
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "2065", name: "Shurelya's Battlesong" }
    - { dd_id: "6621", name: "Dawncore" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "contre lockdown CC single-target sur ton ADC (Morgana Q, Ashe R, chaîne Leona E sur R)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contre comps de burst AOE (Yone + Malphite, setups teamfight Orianna)"
    - dd_id: "3107"
      name: "Redemption"
      against: "contre comps teamfight groupées : la zone de soin tombe même mort"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contre assassins ou divers lourds (champions qui te sautent dessus pour te tuer vite : Zed, Talon, Diana)"
    - dd_id: "3109"
      name: "Knight's Vow"
      against: "quand ton ADC est la win condition et que la team adverse a plusieurs menaces de dive"
  base_combo: ["AA", "Q", "AA", "R"]
  win_condition: "Roam en continu pour ramasser les chimes et wall-stun les ennemis isolés à la Q. En teamfight, R sur la frontline adverse pour que ton équipe efface la backline avant l'engage."
  weakness: "Squishy, aucun dash. Si la Q manque ou ne wall-stun pas, aucun follow-up CC et ton ADC meurt en 2v2. Puni par les supports CC point-and-click et les bullies agressifs niveau 2."
  runes:
    primary_tree: "Inspiration"
    primary_tree_dd_id: 8300
    keystone:
      dd_id: 8351
      name: "Glacial Augment"
      icon_path: "perk-images/Styles/Inspiration/GlacialAugment/GlacialAugment.png"
    primary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["soraka", "sona", "yuumi", "karma"]
      archetype: "Enchanters immobiles sans dash"
      reason: "La menace du Q-into-wall stun les force à rester très loin derrière les minions. Sans escape, un wall-stun propre devient un kill avant que leur équipe puisse rotate."
    - examples: ["alistar", "nautilus"]
      archetype: "Engagers melee télégraphiés"
      reason: "Le R cancel leur engage de commit. Juste après leur Flash-W sur ton ADC, presse R sur l'engager : il fige en stasis pendant que ton ADC ressort gratuitement."
  counterpicks:
    - examples: ["lulu", "janna", "renata-glasc"]
      archetype: "Enchanters de lockdown avec CC point-and-click"
      reason: "Leur CC est point-and-click (aucun skillshot à esquiver). Ils **peel** trivialement tes tentatives de dive (peel = protéger un allié en interrompant celui qui lui saute dessus), et Bard n'a pas de dash pour disengage quand le trade tourne."
    - examples: ["blitzcrank", "pyke", "thresh"]
      archetype: "Hookers longue portée"
      reason: "Leur hook (range 1100-1150) te touche avant que ta ligne de Q soit propre. Sans dash, après un hook touché la lane joue 1v2 pendant 30 secondes."
    - examples: ["pantheon"]
      archetype: "Bullies agressifs niveau 2"
      reason: "Les lanes d'all-in niveau 2-3 punissent tes stats early faibles. Aucune sustain en dehors de la W qui demande 10 secondes de charge avant de payer."
---

## Aperçu

Bard est un **support roaming** (un support qui quitte la lane en permanence pour influer sur le reste de la map). Son identité se joue **hors** du 2v2 botlane (le combat botlane entre les deux ADC — les carrys de dégâts principaux — et leurs deux supports). Il ramasse des **chimes** lumineux qui apparaissent sur la map : les collecter donne expérience, mana et move speed hors combat gratuits. Il convertit cette mobilité en **pickoffs** — attraper des ennemis isolés loin de leur équipe et les tuer. Sa Q est un slow longue portée qui devient un stun si le projectile touche une seconde cible ou, plus connu encore, un mur derrière la première. Sa R est une bombe de stasis (4 secondes de vol, puis une large AOE) qui fige tout dans sa zone pendant 2.5 secondes : alliés, ennemis, tours et minions inclus.

Plan de jeu : ramasse des chimes en continu, traque les pickoffs au wall-stun dans la **rivière** (la zone neutre centrale qui sépare les deux moitiés de la map) et la jungle, et traite ta botlane comme une des trois lanes que tu patrouilles — pas l'endroit où tu vis. En teamfight tu es le **disengage** (celui qui casse l'engage adverse avec R) et le **catch** (celui qui bloque les cibles isolées) — quasiment jamais la frontline.

## Build Recommandé

**Items de départ :** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions** (consommables qui régénèrent les HP sur quelques secondes). World Atlas est le quest item de support : il génère de l'or sur la durée et se transforme automatiquement en l'une des quatre évolutions au fil des dégâts sur les champions adverses et du **warding** (placer des wards, des objets qui donnent de la vision dans les buissons, pour que ton équipe voie ce qui se passe). Sur Bard il doit toujours devenir Bloodsong.

**Items core (dans l'ordre) :**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — finition du path support. Choix juste car Bard est un support de **poke** (dégâts à distance pour user les HP) et de pickoff, pas un **enchanter** (un support de heal/shield comme Soraka ou Janna). Bloodsong donne de l'AP (Ability Power — la stat qui scale les dégâts magiques) et récompense ceux qui placent des dégâts sur les champions adverses — exactement ce que font tes combos Q + auto-attaque.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — bottes avec **ability haste** (stat qui réduit tous tes cooldowns) plus cooldown réduit sur les **summoner spells** (les deux sorts en haut à droite de la barre : Flash, Ignite, etc.). Ton **Flash** revient plus vite pour les engages, et la **R** tourne plus souvent pour les fights d'objectif (teamfights drake ou Baron — Baron Nashor est le monstre neutre géant dans la rivière top qui donne un buff puissant à toute l'équipe).
3. ![Shurelya's Battlesong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2065.png) **Shurelya's Battlesong** — actif qui donne 4 secondes de move speed à toi et aux alliés proches. Se combine à ton roam déjà rapide pour des **ganks** (courir vers une autre lane pour y tuer un ennemi) impossibles à fuir de bot vers mid.
4. ![Dawncore](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6621.png) **Dawncore** — donne du heal/shield power qui scale en late game (après ~25-30 minutes quand les champions ont 4+ items). Achète quand la partie s'allonge et que les charges de W soignent des chiffres réels.

**Items situationnels :**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — actif qui retire un stun, root (immobilisé mais peut attaquer) ou fear (mouvement incontrôlé) de ton ADC. Achète contre lockdown single-target (Morgana Q, Ashe R, chaîne Leona E sur R).
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — actif qui shield tous les alliés proches pendant 2.5 secondes. Achète contre comps de burst AOE (équipes type Yone + Malphite + Orianna qui one-shot — tuent en un coup — les groupes).
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — heal de zone que tu peux poser sur tes alliés même mort. Se combine aux comps teamfight qui groupent autour des objectifs.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — actif qui te rend invulnérable pendant 2.5 secondes. Achète contre assassins ou **divers** lourds (champions qui te sautent dessus pour te tuer en 1-2 secondes : Zed, Talon, Diana) quand ils te ciblent clairement.
- ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — redirige 12% des dégâts subis par un allié lié vers toi, et soigne cet allié sur tes auto-attaques. Achète quand ton ADC est hyper-fed (8+ kills d'avance, efface les ennemis en 1-2 coups) et que la team adverse a plusieurs menaces de dive.

**Bottes :** Ionian Boots of Lucidity par défaut. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** est l'alternative quand l'équipe adverse a beaucoup de CC (Lulu, Leona, Lissandra) : magic resist plus 30% de tenacity (durée de CC réduite sur toi).

**Skill order :** Maxe **Q** en premier (dégâts principaux et levier du wall-stun), **W** en second (le soin scale avec le rank), **E** en dernier (la réduction de cooldown change peu — un point suffit jusqu'au late). Mets un point dans **R** aux niveaux 6, 11, 16.

**Runes :** Les runes sont des passifs choisis avant la partie (6 picks répartis sur deux arbres : un primaire de 4 runes et un secondaire de 2). Le standard Bard est :

- Primaire **Inspiration** : **Glacial Augment** (quand tu touches une cible ralentie en auto-attaque, une zone supplémentaire de slow apparaît sous elle — combine avec ton slow Q), **Magical Footwear** (bottes gratuites à la minute 12), **Biscuit Delivery** (3 biscuits en early qui rendent HP et mana), **Cosmic Insight** (extra ability haste et summoner spells réduits).
- Secondaire **Resolve** : **Bone Plating** (après 3 coups subis, les 3 suivants dans 1.5s font moins de dégâts) + **Revitalize** (tes heals et shields sont plus forts). À prendre pour la safety en lane.
- Secondaire alternatif **Sorcery** : **Manaflow Band** + **Scorch** pour plus de poke en lane.

## Matchups clés

- **Lulu / Janna :** Hard counters en 2v2. Leur **CC point-and-click** (CC qui ne demande pas de viser, il suffit de cliquer la cible) cancel tes tentatives de dive. La W de Lulu te transforme en petit animal inoffensif (polymorph) ; la Q de Janna te knock up. Reste en retrait, roam mid dès que la **R** est up au niveau 6, et fais confiance à ton ADC pour **farmer** en sécurité (farmer = last-hit les minions pour de l'or et de l'XP).
- **Leona / Nautilus :** **Tanks** (champions de frontline avec beaucoup de HP) d'engage en CC point-and-click. Place-toi toujours derrière ton ADC. S'ils sautent sur ton ADC, ![Tempered Fate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/BardR.png) **R** sur eux pour figer l'engage, puis dégage. Ne **trade** jamais auto-attaques contre eux (un trade est un échange court de coups en lane, pas une tentative de kill complète) : leur chaîne de CC dépasse ta fenêtre de trade.
- **Blitzcrank / Pyke / Thresh :** Supports à hook (leur sort signature est un **skillshot** — une compétence à viser — longue portée qui te tire à eux). Leur portée de hook dépasse ta portée effective de Q. Reste derrière les minions chaque fois que leur hook est up. Après un hook manqué, prends un trade gratuit et **Q** : leur hook est en cooldown 15+ secondes.
- **Pantheon support :** Bully de lane agressif (un champion assez fort pour te chasser de la lane en early). Il **all-in** (commit total au kill, sans repli) au niveau 2 avec stun **W** + lance **Q**. Aucune sustain. Reste très en arrière, ward les deux buissons de rivière (les zones d'herbe haute où les champions sont cachés à la vue), et refuse les trades niveau 2. Récupère post-6 avec des roams en **R** vers mid.
- **Senna :** **Scaler** passive (elle devient plus forte avec le temps, ne s'engage pas en early). Tu ne peux pas l'all-in proprement à cause de ses auto-attaques longue portée. La lane est un farm-trade lent. Gagne le map game par la collecte de chimes et roam mid pour les plays **R**. Ne t'expose jamais trop : son **W** root depuis le **fog of war** (les zones non wardées que ton équipe ne voit pas) est un setup de gank gratuit pour son jungler (le coéquipier qui clear les camps de jungle).

## Power spikes & conditions de victoire

- **Niveau 2 (un point en W) :** Pose un autel dans le buisson de lane pour la sustain entre trades. Combiné à la **Q** niveau 1, tu as une menace de kill si le support adverse se déplace mal.
- **Niveau 6 (R débloquée) :** Le premier **Tempered Fate** débloque des plays qui changent la partie. Stasis sur l'ADC adverse pendant un 2v2, c'est souvent un kill instantané. Roam mid dès que la wave (la ligne de minions) rebondit vers ta tour (quand les minions reviennent naturellement vers ton côté après une push) — ta **R** plus le combo du mid laner gagne contre un mid pas en alerte.
- **![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) Bloodsong fini (~ minute 14-16) :** Ton quest item de support se finalise. Tu commences à faire de vrais dégâts sur les Q et les roams scale.
- **Niveau 11 + ![Shurelya's Battlesong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2065.png) Shurelya's Battlesong en ligne :** Le rank 2 de R (la deuxième fois que tu mets un point dans R) baisse le cooldown à 95 secondes. Avec Shurelya's actif, tu peux rotate (passer entre les lanes) assez vite pour peser sur les deux sidelanes (top et bot) plus les drake fights (teamfights dans la fosse du dragon) toutes les 90 secondes.

## Erreurs courantes

- **Lancer Q en terrain ouvert pour poke.** Sans seconde cible ni mur derrière, **Q** n'est qu'un slow — et un slow à 60 mana et 11 secondes de cooldown est un trade brutal. Vérifie toujours qu'il y a un minion ou un mur sur la ligne derrière la cible. Sinon, ne presse pas Q.
- **Roam avec la wave poussée vers ta tour.** Quand tu pars, la wave (la ligne de minions en combat) s'écrase sous ta tour — les minions meurent sous tour et ton ADC perd 2-3 minions de farm plus les **tower plates** (les plaques d'armure des tours en early ; en casser une donne de l'or). Roam **uniquement** quand la wave est au milieu de la lane ou pousse vers la tour adverse (les minions avancent, donc ton ADC reste safe à sa tour pendant ton absence).
- **R sur ton propre ADC en plein fight.** La stasis sur un allié met en pause tout ce qu'il fait — y compris une chaîne d'auto-attaques qui allait gagner le trade. Utilise **R** sur les ennemis, sur les alliés mourants (pour interrompre le coup létal) et sur les tours (pour annuler un tower dive). Quasi jamais sur un carry en pleine forme.
- **Rester dans ta propre zone de R.** L'AOE est large et le temps de vol est de 4 secondes : tu oublies où tu l'as cast, tu rentres dedans, tu gaspilles l'ult. Cast puis sors.
- **Ignorer les chimes hors lane.** Les chimes c'est de l'XP et du mana. Un Bard qui ramasse les chimes atteint le niveau 6 environ 2 minutes avant un Bard qui reste en lane. Si tu n'as pas 1 niveau d'avance sur le reste de ton équipe à la minute 10, tu joues mal.

## Conseil avancé

Entraîne le **flash-stun** : cast Q, puis active **Flash** (le summoner spell de téléport court universel) en plein vol pour repositionner ton personnage — le projectile de Q, qui suit ton modèle, prend un nouvel angle depuis le nouveau spot. L'astuce, c'est de flash *vers* l'endroit où l'ennemi **dash** (son court mouvement instantané). Tu attrapes ainsi des cibles qui esquiveraient une Q normale. C'est l'astuce à plus haute leverage du kit de Bard (l'ensemble de ses compétences) et souvent la différence entre un Bard qui gagne ses parties et un qui ne les gagne pas.
