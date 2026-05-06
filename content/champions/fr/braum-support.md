---
title: "Braum Support Build & Guide — Patch 16.9"
slug: "braum-support"
language: "fr"
patch: "16.9"
champion: "braum"
role: "support"
last_updated: "2026-04-29"
description: "Guide Braum support pour League of Legends Patch 16.9 : starter, build path tank-peel, matchups de lane, power spikes, erreurs courantes et une astuce avancée."
quick_learn:
  champion_dd_id: "Braum"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Warden"
  abilities:
    - key: "P"
      name: "Concussive Blows"
      description: "Les auto-attaques de Braum appliquent un stack de Concussive Blows. Après le premier stack, les autos des alliés en rajoutent aussi. À 4 stacks la cible est étourdie et subit des dégâts magiques. La Q applique un stack à distance."
      dd_spell_id: "Braum_Passive"
    - key: "Q"
      name: "Winter's Bite"
      description: "Skillshot linéaire à longue portée qui ralentit et fait des dégâts magiques. Applique un stack de Concussive Blows à distance : c'est l'outil de setup qui te permet de lancer la chaîne du stun sans entrer en portée d'auto-attaque."
      dd_spell_id: "BraumQ"
    - key: "W"
      name: "Stand Behind Me"
      description: "Braum saute sur un allié (champion ou minion). À l'arrivée, les deux gagnent armor et magic resist pendant quelques secondes. C'est le peel signature : tu sautes devant ton ADC pour body-block les dégâts entrants."
      dd_spell_id: "BraumW"
    - key: "E"
      name: "Unbreakable"
      description: "Braum lève son bouclier dans la direction choisie pendant plusieurs secondes : il intercepte chaque projectile venant de ce côté, annule la première basic attack et réduit les dégâts des suivantes depuis cette direction."
      dd_spell_id: "BraumE"
    - key: "R"
      name: "Glacial Fissure"
      description: "Braum frappe le sol : knock-up des ennemis à côté de lui et en ligne devant lui. Une crevasse gelée reste sur la ligne et ralentit ceux qui la traversent. Long cooldown : le bouton principal d'engage ou de peel de l'équipe."
      dd_spell_id: "BraumRWrapper"
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3876", name: "Solstice Sleigh" }
    - { dd_id: "3109", name: "Knight's Vow" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "swap depuis Mercury's vs bot lanes auto-attack heavy (Caitlyn, Draven, Tristana) quand le harass early pèse plus que le CC late"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "vs comps où l'ADC est la carry principale et reste près de toi (Aphelios, Jinx) — le proc de R triggera près du bonded ally"
    - dd_id: "2504"
      name: "Kaenic Rookern"
      against: "vs comps AP burst (double mage type Syndra mid + Brand support) : le shield magique encaisse une ulti et te laisse continuer à peel"
  base_combo: ["Q", "AA", "AA", "R"]
  win_condition: "Land Q sur une carry prioritaire, walk-up pour l'auto qui ferme le stun à 4 stacks, puis peel ton ADC avec W jumps et mur E pendant tout le fight. R quand l'équipe adverse se regroupe dans la zone du knock-up."
  weakness: "Lent et immobile (pas de dash, pas de blink) : le hard CC à distance te coupe de ton ADC. La Q est un skillshot — si tu la rates tu n'as zéro menace de kill, et une R gâchée te ferme du teamfight suivant."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8306, name: "Hextech Flashtraption", icon_path: "perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "jhin", "senna"]
      archetype: "ADCs immobiles sans dash"
      reason: "La Q a 1000 de portée et applique un stack de Concussive Blows à distance. Contre un ADC sans escape, une Q + une auto de ton ADC + ta auto ferment le stun à 4 stacks : aucun moyen de casser la chaîne."
    - examples: ["soraka", "sona", "yuumi"]
      archetype: "Enchanters squishy sans CC dur"
      reason: "Pas d'outil pour stopper ton walk-up. Une fois la Q touchée, pas de peel pour leur ADC, et ta E bloque chaque skillshot de healing-cancel qu'ils tireraient pour les sauver."
    - examples: ["draven", "lucian"]
      archetype: "ADCs agressifs qui s'avancent pour trade"
      reason: "Leur kit les force à entrer en portée Q pour balancer haches ou dash-AA. Chaque pas en avant est un stack gratuit de Concussive Blows : soit ils reculent et perdent la lane prio, soit ils mangent le stun à 4 stacks."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "nautilus"]
      archetype: "Hook supports avec pull ou stun point-and-click"
      reason: "Un hook landé tire Braum hors de la portée W de son ADC. Pendant qu'il se fait burst à l'arrière, l'ADC adverse efface ton carry sans protection."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "Mage supports longue portée qui pokent au-delà de la Q"
      reason: "Ils restent à 1100+ de portée et grignotent ton HP gratis. Braum n'a pas de réponse au-delà de sa Q, et la E n'aide que s'il est déjà proche : ils gagnent la lane à l'usure."
    - examples: ["ashe", "varus"]
      archetype: "ADCs avec self-peel grâce à un slow built-in"
      reason: "Le slow sur leurs auto-attaques garde Braum à distance. Il n'arrive pas en portée W pour body-block, donc son kit de peel est moitié désactivé et la frontline de son équipe s'écroule plus vite."
---

## Aperçu

Braum est un **warden support** (un support de classe tank dont le rôle est de protéger son propre ADC, pas d'ouvrir des fights) — construit pour peel les ennemis loin de sa carry, pas pour dive celle d'en face. Le kit tourne autour d'une seule menace : **Concussive Blows**, la passive qui étourdit toute cible touchée par 4 auto-attaques de Braum ou de ses alliés. L'astuce : **Winter's Bite (Q)** applique un stack à 1000 de portée, donc Braum tire la Q, walk-up, et une de ses autos plus une de son ADC déclenchent le stun sur la carry adverse. **Stand Behind Me (W)** le fait sauter sur n'importe quel allié et donne armor et magic resist à l'arrivée — c'est l'outil de **peel** (protéger ta carry des ennemis qui essaient de la tuer) qui le rend unique. **Unbreakable (E)** est un bouclier directionnel qui **body-block** chaque projectile venant de la direction choisie (auto-attaques ADC, R de Caitlyn, R d'Ezreal, R d'Ashe). **Glacial Fissure (R)** est le knock-up AOE en ligne : long cooldown, utilisé en engage ou en panic peel quand leur **diver** (un champion qui saute dans le backline) tombe sur ta carry.

Game plan : en lane, **poke** (chip damage à distance) avec la Q chaque fois que l'ADC adverse s'avance pour last-hit, puis walk-up pour l'auto qui ferme le stun — ton ADC déverse dans la fenêtre d'1 seconde. Après le niveau 6, **roam** (quitter bot lane pour aider mid ou jungle) avec la R pour préparer des picks : ton **lead** (avantage early) vient de convertir les stuns par Q en objectifs, pas en kills solo. Late-game tiens-toi un pas devant ton ADC, saute en arrière avec W dès qu'il se fait engage, et lâche la E en ligne avec n'importe quel **skillshot** (une compétence à viser) entrant — Braum est le seul support capable d'annuler une ulti de Caitlyn en plein channel.

## Build Recommandé

**Items de départ :** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (le starter unifié des supports) plus 2 Health Potions. Ne last-hit pas les minions en lane : laisse le gold à ton ADC, World Atlas te paye à part via la progression de quest.

**Items core (dans l'ordre) :**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — starter. Évolue automatiquement à mesure que tu accumules le quest progress en passant par ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** et ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**, pour finir sur l'upgrade endgame que tu choisis.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — magic resist plus **tenacity** (une stat qui réduit la durée du crowd control sur toi). Botte par défaut pour un peel tank : des stuns plus courts veulent dire que tu arrives en portée W de ton ADC avant qu'il soit déjà mort.
3. ![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) **Solstice Sleigh** — l'upgrade endgame peel-focused de l'item support. Chaque fois que tu CC un champion (slow Q, stun passive, knock-up R) ça ralentit davantage les ennemis proches et donne à toi et à un allié proche un burst de movement speed : exactement ce qu'il faut pour chase un target bas HP ou kite vers ta carry.
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — te lie à ton **ADC** (Attack Damage Carry — le coéquipier de bot lane qui fait des dégâts en auto-attaque, le main damage dealer late-game de l'équipe) : une portion des dégâts qu'il subit est redirigée sur toi, et tu le soignes en retour. Choisis toujours la carry dont tu dois étendre la vie en priorité.
5. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — active qui shield tous les alliés proches pendant quelques secondes. Lance-le l'instant où l'équipe adverse commit son engage pour que ton équipe absorbe le premier **burst** (les gros dégâts qu'ils balancent dans les 1-2 premières secondes du fight).

**Items situationnels :**

- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — bottes qui donnent armor et réduisent les dégâts d'auto-attaques. Échange contre les Mercury's Treads quand la bot lane adverse est auto-attack heavy (Caitlyn, Draven, Tristana) et que leur **harass** (poke et chip damage pour t'user) te pèse plus que le CC late-game de l'équipe adverse.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — bond-le à ton ADC. Quand tu CC un ennemi (slow Q, knock-up R) la prochaine auto du bonded ally fait des dégâts magiques bonus en aire : parfait quand ta carry reste près de toi (Aphelios, Jinx) et que tu Q la front line pour préparer sa première auto.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — passive shield magique qui se régénère hors combat. Achète-le contre les comps AP burst (un setup double mage type Syndra mid + Brand support) : le shield encaisse une ulti complète et te laisse continuer à peel au lieu de mourir le premier.

**Bottes :** Par défaut ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** pour la tenacity — un root de Morgana de 2 secondes devient 1.2 seconde, te laissant la fenêtre pour W vers ton ADC. Switche en ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** avant de les finir uniquement si la bot lane adverse est auto-attack heavy et te pèse plus que le CC late-game de l'équipe d'en face.

**Skill order :** Maxe **Q** (Winter's Bite) en premier — c'est ton seul dégât à distance, l'applicateur de stacks, et le cooldown descend de 8 à 6 secondes au rank 5 (plus de poke, plus de pression en lane). Maxe **E** (Unbreakable) en second — la durée plus longue du mur de bouclier rend le peel teamfight plus propre. Maxe **W** en dernier (le cooldown du saut baisse mais les resists comptent plus aux premiers ranks, et tu manques rarement de targets W). Prends **R** aux niveaux 6, 11, 16.

**Runes :** Primaire **Resolve** (arbre défensif — durabilité) avec **Aftershock** (armor et MR gratuits pendant quelques secondes quand tu CC quelqu'un, déclenche à chaque stun de passive et à chaque R), **Font of Life** (ton CC marque la cible ; les alliés qui l'attaquent se soignent un peu), **Conditioning** vs lanes qui scalent late ou **Bone Plating** vs lanes early-burst, et **Unflinching** (extra **tenacity**, la stat qui réduit le CC sur toi, quand tu utilises un summoner spell). Secondaire **Inspiration** (arbre utility) avec **Hextech Flashtraption** (Flash de secours courte portée sur long cooldown — angles R surprise) et **Cosmic Insight** (cooldowns réduits sur summoner spells et Locket active). **Stat shards** (les trois petits bonus en bas de la page de runes) : Health / Health / Health — Braum scale avec les HP bruts, et la durabilité early te permet d'avancer pour appliquer les stacks de Q.

## Matchups clés

- **Leona :** Matchup d'**engage** (elle veut ouvrir le fight) contre ton **peel** (tu veux stopper le sien). Elle a du CC à plus longue portée que toi (Zenith Blade dash-stun, Solar Flare R), donc n'essaie pas de body-block early — tiens-toi un pas derrière ton ADC et W loin l'instant où son Zenith Blade part. Quand sa E est en cooldown tu as 10 secondes pour walk-up et Q-stack son ADC gratuitement.
- **Pyke :** Skill matchup — pas d'edge clair sur le papier, c'est celui qui joue mieux qui décide. Il te poke avec la Q et te out-roam en **stealth** (il devient invisible en passant dans les buissons). Garde une vision profonde dans les bushes du river, force des fights en lane où le reset de sa R ne compte pas, et E sur son hook de R pour body-block le pull sur ton ADC.
- **Lulu :** Hard counter à ton **all-in** (commit total à la kill). Son polymorph annule ton auto-attaque en pleine chaîne — tu ne fermes plus le stun à 4 stacks. Ne commit pas avec polymorph up ; track son cooldown (autour de 13 secondes au rank 1) et force des trades uniquement dans la fenêtre où il est down.
- **Soraka :** **Sustain enchanter** pure (un support healing-focused qui gagne en gardant sa carry en vie, pas en ouvrant des fights) sans outil d'engage. Tu l'out-trade : elle n'a aucun moyen d'arrêter ta Q + walk-up, et son healing fait à peu près la moitié de tes dégâts de stun. Force des trades courts dès que sa Q est en cooldown.
- **Senna :** Matchup de **poke** longue portée (chip damage à distance pour t'user). Elle te bully l'HP sous tour avec la Q à travers les minions. Tiens-toi à l'arrière de la wave pour que sa Q se soigne sur tes minions sans te toucher, et trade uniquement quand ton jungler est bot side — Senna sans dash meurt à une seule chaîne Q-stun.

## Power spikes & conditions de victoire

- **Niveau 2 (Q + W) :** Premier spike. La chaîne complète **Q + walk-up auto + auto de ton ADC** se débloque dès que tu as la W comme deuxième compétence, parce que la W te laisse te repositionner hors du counter-damage. Un ADC en over-extend (qui a pushé au-delà de sa première **wave** — la file de minions entrants) perd 30% d'HP à une chaîne de stack.
- **Niveau 6 (R débloquée) :** Engage et peel montent d'un cran. **Glacial Fissure** est un knock-up en ligne que ton ADC convertit en kill ; à l'inverse, c'est le bouton de panic peel quand leur Zed tombe sur ta carry. Tu peux Flash-R sur des angles que leur équipe n'attend pas — flash en avant et cast R instantané, c'est l'outil de pick surprise.
- **![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) Solstice Sleigh complète (~minute 12-14) :** Premier item de teamfight online. Le burst de movement speed sur CC te laisse chase un ennemi bas HP à travers les minions ou kite vers une carry en difficulté. Regroupe-toi avec ton équipe pour le **Drake** (le dragon dans le bot river — les kills donnent des buffs permanents) ou les **Voidgrubs** (petits monstres dans le top river — l'équipe qui les tue gagne des dégâts bonus contre les structures).
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari endgame (~minute 22-26) :** Avec Locket et un uptime plein de E, ton équipe survit à un wombo combo (un team-fight engage enchaîné). Ton job devient de wall avec la E le cône de dégâts de la carry adverse pendant que ton équipe tue la leur en premier.

## Erreurs courantes

- **Lancer la Q sans walk-up.** Une Q-slow seule n'est pas une menace de kill — l'ennemi sort tranquillement de la portée et tu as gâché 8 secondes de cooldown. La Q c'est le **setup** (le mouvement qui prépare la kill, pas la kill elle-même) ; l'instant où ça touche, walk-up pour l'auto. Sans l'auto, les stacks de Concussive Blows tombent après quelques secondes et le reset de lane arrive pour rien.
- **W sur ton ADC alors qu'il est déjà mort.** La W a 650 de portée sur 12 secondes de cooldown au rank 1. Si tu attends que ton carry soit à 20 HP pour sauter, le bonus de resist arrive trop tard. Règle : W vers ton ADC l'**instant même** où tu vois le commit ennemi (Q de Leona qui part, hook de Blitz dans les airs, ombre de Zed qui rentre), pas après qu'il atteigne zéro.
- **Rester devant gratuitement.** La E de Braum protège uniquement la direction qu'il regarde. Si tu es derrière ton ADC, elle ne shield rien. Position par défaut : un pas devant et un pas **vers** la source de dégâts attendue — regarde la Caitlyn, pas ton jungler.
- **Cramer la R sur une seule cible.** **Glacial Fissure** est un knock-up AOE en ligne avec un cooldown de 100-130 secondes. L'utiliser pour ult un seul ennemi à moitié mort en side lane est un **throw** (un cadeau d'avantage) — tu te fermes du teamfight suivant. R uniquement quand 2+ ennemis sont dans la ligne, ou quand ta carry mourra sans le panic peel.
- **Oublier le reset des stacks de passive.** Les stacks de Concussive Blows **tombent** après quelques secondes si aucun nouveau stack n'est appliqué, et une cible fraîchement étourdie ne peut pas recevoir de nouveaux stacks pendant plusieurs secondes de plus. Spammer des autos sur un ADC qui vient d'être stun n'apporte rien — passe au target prioritaire suivant, ou recule pour reset le timer du resist W.

## Conseil avancé

L'angle **flash-R**. La R de Braum a une ligne de 1250 de portée devant lui ; le windup du cast est assez court pour Flash en avant, presser R instantanément, et faire spawn la ligne depuis ta **nouvelle** position flashée — ce qui attrape une carry de backline qui se croyait safe à 1500 de portée. Bind Flash et R à portée de la même main et drill le timing en **Practice Tool** jusqu'à ce que les deux partent en un cinquième de seconde. Garde-le pour un fight où ton équipe est déjà regroupée : un flash-R qui attrape ADC + support adverses se convertit en ace propre, alors que la même R sur un mid-laner isolé est un long cooldown dépensé pour une skirmish.
