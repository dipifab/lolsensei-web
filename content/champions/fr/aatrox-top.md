---
title: "Aatrox Top Build & Guide — Patch 16.9"
slug: "aatrox-top"
language: "fr"
patch: "16.9"
champion: "aatrox"
role: "top"
last_updated: "2026-04-29"
description: "Guide Aatrox top lane pour League of Legends Patch 16.9 : build bruiser, mécanique du Q sur le bord, matchups clés, power spikes, erreurs courantes et astuce finale."
quick_learn:
  champion_dd_id: "Aatrox"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Fighter / Drain Tank"
  abilities:
    - key: "P"
      name: "Deathbringer Stance"
      description: "Périodiquement, sa prochaine auto-attaque inflige des dégâts magiques bonus basés sur les max HP de la cible et soigne Aatrox. Surveille l'indicateur sur son portrait."
      dd_spell_id: "Aatrox_Passive"
    - key: "Q"
      name: "The Darkin Blade"
      description: "Coup de grand-épée en trois cast successifs, chacun de forme différente. Toucher le bord extérieur fait knock-up et inflige 25% de dégâts en plus. Source principale de dégâts d'Aatrox."
      dd_spell_id: "AatroxQ"
    - key: "W"
      name: "Infernal Chains"
      description: "Chaîne projectile qui ralentit la première cible touchée. Si un champion ou un gros monstre ne quitte pas la zone d'impact à temps, il est tiré au centre et subit à nouveau les dégâts."
      dd_spell_id: "AatroxW"
    - key: "E"
      name: "Umbral Dash"
      description: "Passive : soigne une portion des dégâts infligés aux champions (lifesteal). Active : dash court, utilisable pendant le wind-up de la Q pour aligner le bord ou kite."
      dd_spell_id: "AatroxE"
    - key: "R"
      name: "World Ender"
      description: "Forme démoniaque : AD bonus, Move Speed décroissant sur la durée, et self-heal augmenté. Fear sur les minions proches. Chaque takedown prolonge la durée."
      dd_spell_id: "AatroxR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3071", name: "Black Cleaver" }
    - { dd_id: "3053", name: "Sterak's Gage" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap des Plated Steelcaps quand l'adverse a beaucoup d'AP ou des chaînes de CC (ex. Lissandra, Sett, ult Malphite)"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contre du burst AP lourd (Syndra, Vex, Fizz mid qui passe top) : le spell shield bloque un gros coup magique et sauve ton engage"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "contre deux gros AD dealers (Yasuo + Caitlyn) : transforme le burst AD en saignement lent que le lifesteal de la E soigne"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contre du lockdown single-target qui éteint ton engage (Q de Morgana, hook de Blitzcrank, R de Lissandra)"
    - dd_id: "3155"
      name: "Hexdrinker"
      against: "achète ce composant avant de finir Eclipse si tu perds des HP face à un top AP (Vladimir, Rumble) et qu'il te faut de la MR avant le back"
  base_combo: ["W", "AA", "Q1", "E", "Q2", "Q3"]
  win_condition: "Touche le bord de la Q pour le knock-up, enchaîne avec W pour figer la cible et utilise E pour réaligner. Convertis l'avance Eclipse + Black Cleaver en victoires 1v1 en sidelane."
  weakness: "Tous les dégâts dépendent du timing de la Q. Si tu rates le bord, tu perds le trade. Hard CC, kiters longue portée et duelistes à true damage (Fiora, Camille) déchirent sa sustain."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
    primary_rationale: "Precision : Conqueror monte en stacks pendant les fights prolongés, s'aligne au rythme des trois Q d'Aatrox. Triumph soigne sur takedowns, Legend: Alacrity ajoute l'AS pour caser une auto entre Q1 et Q2, Last Stand récompense les fights bas-HP — terrain idéal d'un drain tank."
    secondary_rationale: "Resolve en secondaire : Second Wind rend les phases de poke supportables et Revitalize amplifie le bouclier de Sterak's Gage et le self-heal de la R."
    secondary_alternative: "Si tu attends une lane calme et que tu veux scale, swap Resolve pour Inspiration avec Magical Footwear (bottes gratuites au minute 12) et Cosmic Insight (ability haste en plus)."
matchup_draft:
  pick_into:
    - examples: ["nasus", "yorick"]
      archetype: "Fighters melee immobiles sans outil d'engage"
      reason: "Aatrox gagne les trades avant le niveau 6 avec les Q sur le bord ; sa W les fige assez longtemps pour qu'ils ne puissent ni stack leurs passives en sécurité ni échapper à un all-in."
    - examples: ["ryze", "vladimir"]
      archetype: "Mages courte portée obligés de s'avancer pour faire des dégâts"
      reason: "Ils doivent entrer en distance melee pour leur full output ; Aatrox punit le gap avec le slow de la W puis un Q sur le bord pour le knock-up avant qu'ils ne puissent disengage."
    - examples: ["kayle", "k-sante"]
      archetype: "Lane early faible qui spike late"
      reason: "Aatrox a l'une des meilleures courbes early de la top lane ; il peut les tuer ou leur nier l'XP avant qu'ils n'atteignent les items late-game qui les rendent dangereux."
  counterpicks:
    - examples: ["fiora", "camille"]
      archetype: "Duelistes à true damage avec parry ou shield"
      reason: "La W de Fiora parry le knock-up de la Q et ses Vitals (marques qu'elle pose sur Aatrox et frappe en true damage — des dégâts qui ignorent armor et MR) contournent la build drain tank ; la E de Camille rajoute encore du true damage par-dessus."
    - examples: ["quinn", "teemo"]
      archetype: "Kiters longue portée ou à invisibilité"
      reason: "Ils restent hors du range de la Q et cassent les wind-ups d'Aatrox avec un blind ou un vault (le dash de Quinn qui le repousse) ; il n'a aucun moyen de fermer le gap sans cramer E et Flash à vide."
    - examples: ["malphite", "maokai"]
      archetype: "Tanks avec hard CC instantané (sans skillshot)"
      reason: "Leurs stuns et roots sont point-and-click — aucun projectile à dodge. Ils interrompent les recasts de la Q en pleine animation, et une fois Aatrox lock down il ne peut plus se soigner via le lifesteal de la E."
---

## Aperçu

Aatrox est un fighter melee (champion qui se bat au corps à corps, à courte portée) construit autour d'une **Q** à trois cast à la grand-épée. Chaque cast couvre une forme différente, et toucher le **bord extérieur** du swing — pas la zone interne — fait deux choses en plus : un bref **knock-up** (envoie la cible en l'air pour un instant, l'empêchant d'agir) et 25% de dégâts bonus. Son kit comprend aussi un slow + chain pull (**W** : une chaîne qui ralentit la première cible touchée et la tire au centre si elle ne sort pas de la zone à temps), un **dash** court (**E** : déplacement rapide, utilisable pendant l'animation de la Q pour repositionner) et un ultimate en forme démoniaque (**R** : long cooldown, gros buff). C'est un **drain tank** : pas un vrai tank, mais un fighter qui survit en soignant les dégâts encaissés via le **lifesteal** de la E (un pourcentage des dégâts que tu infliges revient en HP), au lieu d'empiler armor ou HP.

Son game plan est court à décrire et exigeant à exécuter : en lane, avance avec la **W** prête comme outil de lock-down (le slow qui cloue la cible sur place), puis lance la **Q** de manière à ce que le **bord** du swing accroche la cible ralentie. Utilise la **E** pour glisser dans la position correcte pour le deuxième et le troisième cast de Q. À partir du mid-game, cherche les duels 1v1 en sidelane et les skirmishs 2v2 (mini-fights entre deux joueurs par côté, à l'écart du teamfight principal). Aatrox est l'un des **bruisers** (champions qui mêlent dégâts et résistance) les plus forts du jeu une fois sa R disponible et au moins un item en ligne.

## Build Recommandé

**Items de départ :** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. La régénération HP passive de Doran's Shield porte Aatrox à travers les premiers niveaux, là où sa sustain (sa capacité à se soigner pendant un fight) est la plus faible.

**Items core (dans l'ordre d'achat) :**

1. ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — first-item spike (le moment où tes dégâts grimpent le plus). Donne de l'**AD** (Attack Damage, la stat derrière les dégâts de tes auto-attaques et de la Q), de l'**omnivamp** (lifesteal qui marche sur tout type de dégâts, pas uniquement sur les auto-attaques) et de l'**ability haste** (réduit le cooldown de tes sorts). Sa passive se déclenche au deuxième hit, et Q1 + Q2 les enchaînent dans l'ordre.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — bottes par défaut quand l'ennemi te fait surtout mal aux auto-attaques. Elles réduisent ces dégâts dans les trades prolongés (échanges de coups répétés en lane).
3. ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — chaque hit de Q gratte une charge d'**armor** (la stat qui réduit les dégâts physiques) à l'ennemi. Donne aussi des HP pour la survie et de l'ability haste pour plus de rotations de Q par fight.
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP plus un **lifeline shield** : quand tes HP descendent sous un seuil (autour de 30%), un bouclier automatique se déclenche. Cette fenêtre, c'est exactement le moment où il te faut quelques secondes de plus pour que le lifesteal de la E te ramène à flot.

**Items situationnels :**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap depuis ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** quand l'équipe adverse a beaucoup de dégâts magiques ou des chaînes de **CC** (crowd control : stuns, roots, knockbacks — tout ce qui te bloque et t'empêche d'agir). Exemples : root de Lissandra, pull de Sett, ult de Malphite.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contre du burst **AP** lourd (AP = ability power, la stat derrière les dégâts magiques ; burst = gros dégâts livrés en 1-2 secondes). La passive Lifeline bloque un gros coup magique, souvent la différence entre mourir en plein engage (en plein lancement de fight) et survivre assez longtemps pour caser ta R.
- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — contre les compos avec deux gros damage dealers physiques (AD), ex. Yasuo + Caitlyn. Transforme le burst en **bleed** lent (dégâts étalés sur les secondes suivantes au lieu de tomber d'un coup), donnant le temps au lifesteal de la E de les soigner en retour.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contre du hard CC single-target qui éteint ton engage (la Q de Morgana, le hook de Blitzcrank, la R de Lissandra). Embarque un spell shield à usage unique qui absorbe le sort de lockdown : tu peux commit (engager à fond) au lieu de devoir dodge à la portée maximale.
- ![Hexdrinker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3155.png) **Hexdrinker** — composant **MR** early (MR = magic resistance, la stat qui réduit les dégâts magiques). Achète-le avant de finir ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** si un top AP comme Vladimir ou Rumble te gagne la lane.

**Bottes :** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** par défaut. Passe à ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** quand l'équipe adverse a trois sources de CC ou plus, ou beaucoup de dégâts magiques.

**Skill order :** Maxe la **Q** en premier (c'est ton seul outil de dégâts), la **E** en second (le lifesteal scale par rang, donc plus de dashes par fight), la **W** en dernier. Mets un point dans la **R** aux niveaux 6, 11 et 16.

**Runes :** Les runes sont des effets passifs que tu choisis avant la partie depuis un "arbre" d'options, chaque arbre construit autour d'un style différent. Aatrox utilise **Precision** comme arbre primaire (celui construit autour des dégâts soutenus en auto-attaque) avec la keystone (la rune principale de l'arbre) **Conqueror** — une passive qui fait monter tes dégâts au fil du combat — plus **Triumph** (petit heal sur les takedowns), **Legend: Alacrity** (Alacrity = stat qui donne de l'attack speed bonus, aidant Aatrox à auto-attaquer plus vite entre les sorts) et **Last Stand** (plus de dégâts à bas HP). En arbre secondaire, prends **Resolve** (l'arbre de la durabilité) avec **Second Wind** + **Revitalize** pour la sustain HP en lane, ou **Inspiration** avec **Magical Footwear** (bottes gratuites au minute 12) et **Cosmic Insight** (ability haste en plus) si tu attends une lane tranquille.

## Matchups clés

- **Fiora :** Matchup le plus dur. Sa **W** est une parry (un bref bouclier qui bloque et contre un sort) qui annule le knock-up de ta Q. Force la parry — oblige-la à la lâcher sur une Q1 — avant de commit la troisième Q. Évite les trades prolongés : Q1 + E entre-sortie rapide, et ne commit jamais Q3 si sa W n'est pas en cooldown.
- **Darius :** Skill matchup (le joueur qui joue le mieux gagne, peu importent les counters). Reste hors du range du pull de sa **E** quand son bleed a trois charges ou plus sur toi (sa passive te gratte des HP chaque seconde par stack). Touche le bord avec la Q quand sa Q est en cooldown ; sous R, les trades te sont favorables si tu as au moins un item d'avance.
- **Renekton :** Perd la lane avant le niveau 6 si tu respectes le stun de sa W. Avance uniquement quand ta W est prête ; punis ses cooldowns au lieu de trader face à face. Après le 6, ta R tient plus longtemps que la fury (la barre de ressource de Renekton) qu'il crame.
- **Malphite :** Évite de coller à ta minion wave — sa Q est un poke longue portée (dégâts à distance peu coûteux pour gratter tes HP sans s'engager) qui te touche gratuitement. Achète ![Hexdrinker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3155.png) **Hexdrinker** si son poke early lui gagne la lane ; **freeze** la wave près de ta tour (arrête de pousser et garde la wave de ton côté) pour lui nier le farm (l'or et l'XP qui viennent du kill des minions).
- **Quinn :** Très rude. Son sort t'applique un blind (annule tes auto-attaques pendant un instant, y compris l'auto empowered de la passive) et elle te kite hors du range de ta Q (recule en attaquant, te gardant hors du corps à corps). Push fort la wave et roam (quitte ta lane pour aider, en général mid) pour chercher des picks (kills sur des ennemis isolés et mal positionnés) au lieu d'essayer de gagner le 1v1.

## Power spikes & conditions de victoire

- **Niveau 2 :** Avec **Q** + **W** débloquées, Aatrox a une vraie fenêtre d'all-in (un moment où tu peux commit totalement sur la kill, sans plan B). Si l'ennemi se mispositionne, avance avec la W prête et touche-le avec la Q sur le bord après que le slow a accroché.
- **Niveau 6 :** Première R débloquée. Cherche un all-in si l'ennemi est sous 60% HP — le boost AD et le buff de heal transforment même un trade neutre en kill.
- **![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) Eclipse complété (~ minute 11-13) :** Tes dégâts spike fort. Force les duels en sidelane et cherche un roam bot pour un dive 2v3 (entrer sous la tour adverse bot avec ton jungler — le joueur qui farme les camps de jungle pour l'or et l'XP, et qui rotate en lane pour aider — afin de tuer les ennemis en encaissant les coups de tour).
- **Deux items + R disponible (~ minute 18-22) :** Pic teamfight. Utilise le lifeline shield de ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** plus le healing amp de la R (amplification — la R augmente tous les soins que tu reçois) pour dive la backline adverse (les carrys squishy qui se tiennent derrière leurs propres tanks pendant un fight) et reset (rafraîchir) la durée de la R sur les takedowns (kills ou assists).

## Erreurs courantes

- **Lancer Q1 dès le premier contact.** Q1 est le cast le plus petit et le plus lent. Ouvre avec la **W** pour le slow, puis cale le timing de Q1 pour que le **bord** du swing accroche la cible — pas la zone interne. Le bonus du bord, c'est environ 25%.
- **Cramer la E pour le déplacement au lieu d'aligner la Q.** La E est ton outil pour gagner les trades. Garde-la pour glisser dans le range du bord ou pour dodge un sort clé adverse pendant le wind-up de la Q (la brève animation avant que les dégâts de la Q ne tombent vraiment). Ne brûle pas la E juste pour traverser la wave plus vite.
- **Appuyer sur R trop tôt dans un fight.** La R d'Aatrox a un long cooldown et le buff décroît avec le temps. Engage (lance le fight) d'abord avec W + Q, puis active la R quand tu es déjà commit et qu'il te faut l'AD/healing amp — pas comme outil d'engage initial.
- **Ignorer la W sur les minions.** La W traverse un minion pour ralentir le champion derrière. Dans les matchups durs (Fiora, Camille), tire la W depuis derrière ta wave pour que le projectile accroche la cible à travers les corps des minions avant qu'elle ne puisse réagir.
- **Empiler de l'armor au lieu de haste/AD.** Aatrox est un drain tank, pas un vrai tank. Il survit en soignant les dégâts via le lifesteal de la E ; ce soin scale (grandit) avec les dégâts que tu infliges. Construire une build HP-tank pure tue à la fois ton output et ta sustain.

## Conseil avancé

Utilise la **E** pendant l'animation de wind-up de Q1 pour décaler la hitbox de la Q en plein cast : tu peux commencer la Q tournée dans une direction, puis dash à travers un minion ou derrière l'ennemi, et le coup atterrit sur un angle complètement différent. Ça s'appelle le **Q animation cancel**, et ça transforme des Q prévisibles en plays impossibles à lire. Entraîne-le en custom game contre un target dummy (un mannequin-cible immobile) : lance Q1, garde le cast, dash avec la E et regarde où la Q se résout. En partie réelle, l'usage à plus fort impact, c'est de dash **dans** un ennemi qui a essayé de side-step (un mouvement latéral pour dodge) une Q télégraphiée (une Q dont le wind-up était assez visible pour qu'il la lise venir), puis de l'attraper sur le bord du nouvel angle pour le knock-up.
