---
title: "Draven Bot Build & Guide — Patch 16.9"
slug: "draven-bot"
language: "fr"
patch: "16.9"
champion: "draven"
role: "bot"
last_updated: "2026-04-29"
description: "Guide Draven bot lane pour League of Legends Patch 16.9 : catch des haches, build snowball, matchups clés, power spikes, erreurs courantes et une astuce technique finale."
quick_learn:
  champion_dd_id: "Draven"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Marksman / Snowball"
  abilities:
    - key: "P"
      name: "League of Draven"
      description: "Attraper une Spinning Axe ou tuer une unité accumule des stacks d'Adoration. Les takedowns sur champion convertissent les stacks en or bonus — le moteur de snowball de Draven."
      dd_spell_id: "Draven_Passive"
    - key: "Q"
      name: "Spinning Axe"
      description: "Charge la prochaine auto avec des dégâts physiques bonus. La hache rebondit vers le haut : l'attraper recharge une autre Q, jusqu'à deux en stock."
      dd_spell_id: "DravenSpinning"
    - key: "W"
      name: "Blood Rush"
      description: "Bref buff de Move Speed et Attack Speed. Attraper une Spinning Axe reset le cooldown — ta mobilité scale avec la qualité de tes catches."
      dd_spell_id: "DravenFury"
    - key: "E"
      name: "Stand Aside"
      description: "Hache linéaire qui pousse les ennemis sur le côté et les ralentit. Outil principal de peel et de disengage ; repositionne aussi les cibles pour le follow-up du support."
      dd_spell_id: "DravenDoubleShot"
    - key: "R"
      name: "Whirling Death"
      description: "Deux haches géantes lancées à travers la map, rappelables en relançant. Les dégâts chutent par ennemi touché mais exécutent les cibles sous un seuil HP lié aux stacks d'Adoration."
      dd_spell_id: "DravenRCast"
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
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3072", name: "Bloodthirster" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contre les comps à gros heal (Soraka, Yuumi, Aatrox, Vladimir) — applique Grievous Wounds et coupe les soins de moitié"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contre le burst AP lourd (Syndra mid + double-mage) — bouclier sous 50% HP et Magic Resist"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "contre les dives d'assassins (Zed, Talon, Rengar) — la revive permet d'encaisser les stacks d'Adoration avant de remourir"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contre le CC single-target de lockdown (Morgana Q, Lux Q, Ashe R) — le spell shield bloque le premier hard CC"
  base_combo: ["Q", "AA", "W", "AA"]
  win_condition: "Stack Adoration via les catches et les last-hits, puis encaisse sur la première kill pour un spike de 600+ or. Transforme l'avance en items plus rapides et snowball chaque skirmish avant que l'ADC adverse ne scale."
  weakness: "Pas de dash, pas d'escape, et le pattern d'axe-catch te bloque dans des arcs prévisibles. Le hard CC niveau 1-3 te tue avant le reset de W, et perdre Adoration ruine ta courbe d'or."
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
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["aphelios", "kog-maw", "twitch"]
      archetype: "Marksmen hyper-scaling avec early faible"
      reason: "Leur niveau 1-3 c'est juste du farm ; la Q de Draven inflige un énorme bonus à chaque catch et la W reset au catch, donc il peut les courser avant qu'ils n'atteignent deux items."
    - examples: ["jinx", "sivir", "ashe"]
      archetype: "Marksmen immobiles sans dash"
      reason: "La E de Draven pousse et ralentit, la W lui donne un burst de Move Speed : ces ADCs ne peuvent pas disengager quand il avance. Ils perdent tous les all-in pre-6."
    - examples: ["soraka", "yuumi", "karma"]
      archetype: "Supports enchanters qui heal-tradent en lane"
      reason: "Les dégâts de la Q de Draven stackent trop vite pour les lanes de poke-and-heal. Deux haches catchées d'affilée traversent un cycle de soins de Soraka, et son snowball convertit chaque kill en 200+ or d'avance."
  counterpicks:
    - examples: ["caitlyn", "ezreal", "varus"]
      archetype: "Marksmen poke longue portée"
      reason: "Ils pokent au-delà des 550 d'attack range de Draven pendant qu'il est coincé dans ses arcs de catch. Chaque minute où Draven ne peut pas engager, ses stacks d'Adoration s'effondrent dans le vide."
    - examples: ["leona", "nautilus", "blitzcrank"]
      archetype: "Supports de hard-engage avec CC"
      reason: "Draven n'a ni dash ni immunité. Une chaîne de CC niveau 2 le delete pendant que ses haches rebondissent dans le vide. Pre-6 il ne peut littéralement rien rendre."
    - examples: ["thresh", "morgana", "rakan"]
      archetype: "Supports de lockdown / pick"
      reason: "Un seul hook de Thresh ou un Q de Morgana stoppe Draven en plein axe-catch. Sans le catch, les resets de Q sautent, la vitesse de W tombe, et il devient un ADC immobile sans escape."
---

## Aperçu

Draven est un marksman snowball construit autour d'une seule mécanique : attraper ses propres haches tournoyantes. Chaque auto-attaque pendant que **Spinning Axe (Q)** est chargée part comme une hache qui rebondit en l'air — si Draven marche sous le point d'atterrissage, il l'attrape, inflige un énorme coup bonus et recharge une autre Q. Il peut tenir jusqu'à deux Spinning Axes en stock simultanément. Sa passive **League of Draven** transforme ces catches en or : chaque catch et chaque minion tué accumule des stacks d'Adoration, et le premier takedown sur un champion après un seuil de stacks les encaisse en or bonus (souvent 100-500 or supplémentaires par kill).

Le plan de jeu est brutal et direct : bully la bot lane dès le niveau 1, force une kill avant la minute 8, encaisse le spike d'Adoration, puis power-farm vers un snowball lead (un avantage précoce qui se compose : kill → or → item → plus de kills). Le skill expression réside dans le positionnement du catch (anticiper où la hache atterrit sans s'exposer aux skillshots) et dans l'uptime de **Blood Rush (W)** — chaque catch reset la W, donc un Draven fluide est en permanence plus rapide qu'un Draven qui rate deux haches d'affilée.

## Build Recommandé

**Items de départ :** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 1 Health Potion. Doran's Blade est le starter marksman standard : petit bonus d'Attack Damage (AD), un peu d'HP et du lifesteal (tu soignes un pourcentage des dégâts infligés en auto-attaque). Draven a besoin de chaque point d'AD car sa Q scale sur les dégâts de basic-attack, et le pattern de catch est brutal sur ton HP si tu ne récupères pas via le lifesteal.

**Items core (dans l'ordre) :**

1. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — premier item snowball. La Lethality (un type de pénétration d'armure qui ignore une partie de l'armure de la cible, particulièrement utile contre les cibles squishy — champions à faibles défenses comme les ADCs et mages) plus une exécution sous 5% HP transforme chaque auto Q-chargée en menace de kill. S'accorde avec Adoration : plus de kills = plus de stacks, plus de stacks = spikes d'or plus gros par takedown.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — bottes d'attack speed (plus d'autos par seconde). Default sur Draven car plus d'autos = plus d'opportunités de catch par seconde, et la W reset à chaque catch.
3. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — multiplicateur de dégâts critiques. Après deux items crit (The Collector compte comme une pseudo-source crit pour le scaling AD, IE est la deuxième), Infinity Edge débloque 175% de dégâts crits. Les dégâts de Spinning Axe scalent avec ton AD, et un catch crit à ce stade one-shot la plupart des cibles squishy.
4. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — lifesteal (tu soignes un pourcentage des dégâts infligés en auto-attaque) plus un bouclier à full HP. Draven meurt face aux assassins parce qu'il n'a pas d'escape ; le bouclier t'offre un fight extra par teamfight.
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — slot final de pénétration d'armure qui scale avec l'HP bonus de l'adversaire (plus efficace face à un gros tank). Remplace par Mortal Reminder si l'équipe adverse a beaucoup de heal.

**Swaps situationnels :**

- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — même slot que Lord Dominik's, prends cette version quand l'équipe adverse a beaucoup de heal (Soraka, Yuumi, Aatrox, Vladimir) : applique Grievous Wounds, qui coupe le heal ennemi de moitié.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — slot late contre les comps de burst AP (Syndra + Veigar + Annie). Le bouclier se déclenche sous le seuil HP — c'est-à-dire quand tu passes sous 50% HP — et absorbe les dégâts magiques.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — slot final contre les dives d'assassins (Zed, Talon, Rengar). La revive te donne 4 secondes pour fuir ou pour finir l'encaissement d'Adoration, et la stat d'armor réduit les dégâts du dive d'environ 20%.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — remplace Bloodthirster contre le CC single-target de lockdown (Morgana Q binding, Lux Q root, Ashe R stun). Le spell shield bloque le premier hard CC toutes les 40 secondes — tu utilises le temps gagné pour placer des autos au lieu d'être chained.

**Skill order :** Max **Q** en premier (dégâts bruts de la hache, ton axe de snowball), **W** en deuxième (plus de Move Speed et Attack Speed pour le flow de catch), **E** en dernier (utility — un point niveau 3 suffit jusqu'au late game). Mets **R** aux niveaux 6, 11, 16 comme d'habitude.

**Runes :** Arbre primaire **Precision** (construit autour des auto-attaques) : **Conqueror** comme keystone (stack sur les autos et convertit une part des dégâts en soins dans les fights longs — parfait pour le pattern d'all-in de Draven), puis **Triumph** (heal et or bonus sur takedown — s'accorde avec l'encaissement d'Adoration), **Legend: Alacrity** (plus d'attack speed par takedown stacké), **Coup de Grace** (dégâts extra sur cibles bas HP). Arbre secondaire **Domination** avec **Sudden Impact** (Lethality extra après un dash ou un buff — Draven la prend via la W) et **Treasure Hunter** (or extra par takedown unique — colle à l'identité snowball).

## Matchups clés

- **Caitlyn :** La lane la plus dure du board. Ses 650 d'attack range out-pokent (chip ton HP depuis hors de ta propre portée) les 550 de Draven sur chaque trade. Avance uniquement quand elle est animation-locked sur un last-hit, et ne marche jamais à travers une trap pour catch une hache — laisse tomber la hache si elle atterrit sur une trap.
- **Aphelios :** Lane gratuite pre-6. La Q d'Aphelios a 9 secondes de cooldown et ses armes ont des munitions limitées ; celle de Draven est permanente. Push fort le niveau 2 (force la wave à crash en premier de son côté), engage sur son arme la plus faible (Severum ou Crescendum — toutes deux des main-hands de mêlée), et brûle son Flash avant la minute 5.
- **Lucian :** ADC early-game tier miroir. Il te bat en trade dans une fenêtre d'1 seconde avec son combo Q-AA-AA passif ; tu le bats en trade dans une fenêtre de 4 secondes avec les Qs stackées. Refuse les short trades (n'engage pas du tout), commit aux extended trades (un "trade" = un bref échange de coups, "extended trade" = un combat soutenu de 3+ secondes où les Qs stackées de Draven dépassent en dégâts le burst de Lucian).
- **Jhin :** Il te poke pre-6 (ses dégâts à distance chip ton HP de loin dans les premiers niveaux) mais perd en all-in (un combat à engagement total où tu vas pour la kill sans option de repli) sur le reload de son 4ème tir. Suis son compteur de tirs ; engage à "0/4" ou juste après qu'il a gaspillé un tir sur un minion. Son W root c'est 1 seconde de coups gratuits sur un Draven qui n'a pas de dash pour esquiver.
- **Samira :** Elle veut stack le rank S de sa passive pour la **R** en lane. Ne trade pas avec elle une fois qu'elle est S : éloigne-toi, recall (retourne à la base) et ré-engage uniquement à full HP. Sa **R** te bat en DPS à mêlée, mais une E de Draven (Stand Aside) la sort de la portée du channel et reset le fight.

## Power spikes & conditions de victoire

- **Niveau 2 :** La Q de Draven inflige un énorme bonus de dégâts même au rank 1. Avec un point en **W** pour le Move Speed et l'Attack Speed, l'all-in niveau 2 est l'un des plus forts du jeu — la plupart des games de Draven se décident sur qui place le trade niveau 2.
- **Niveau 6 avec première kill :** Whirling Death **R** devient un kill button sur les bas HP — il exécute (tue instantanément) toute cible sous un seuil HP lié à tes stacks d'Adoration. Si tu as catché des haches pendant 6 niveaux, le seuil est assez haut pour finir un ennemi en fuite à travers la map.
- **![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) The Collector terminé (~ minute 11-13) :** Spike du premier item (un saut clair de power lié à un milestone de niveau ou d'item). Lethality plus l'exécution à 5% HP signifie que chaque auto Q-chargée menace une kill sur une cible chip-damaged. Force un fight à ce timing — un encaissement d'Adoration ici finance souvent ton deuxième item 3 minutes en avance.
- **Spike 3 items (Collector + Berserker's + Infinity Edge vers la minute 22-24) :** Le burst de Draven (les dégâts que tu sors dans une fenêtre de 1-2 secondes) devient le plus haut de tous les marksmen. Joue autour des objectifs (Dragon, Baron, Rift Herald — cibles neutres qui donnent des buffs d'équipe ou de la pression de map) à ce moment et cherche les picks (éliminer un ennemi isolé hors du teamfight) sur des cibles isolées dans les side lanes.

## Erreurs courantes

- **Catcher des haches dans des positions dangereuses.** Un Draven qui marche 400 unités dans la wave pour catch une Q est un Draven qui mange une trap de Caitlyn ou un engage de Leona. Si la hache tombe au mauvais endroit, **laisse-la tomber** — perdre une Q c'est ok, perdre une kill par overextension (faire un pas hors de la zone safe pour chase une play) ne l'est pas.
- **Hoarder les stacks d'Adoration.** Les stacks décroissent si tu ne les encaisses pas dans les ~30 secondes suivant une tentative de takedown. Si tu atteins 100+ stacks, force un fight ou prends une Scuttle skirmish (petits combats de 2-4 joueurs sur la rivière pour le crabe Scuttle) — rester à farm avec des stacks c'est jeter de l'or gratuit.
- **Utiliser R pour les dégâts au lieu de l'exécution.** Les dégâts de Whirling Death chutent fortement par ennemi touché. La balancer à travers une wave c'est gaspillé ; la lancer en deuxième hache (le recast retour) sur une cible bas HP en fuite c'est une play à 1500 or. Traite la R comme un fusil de sniper, pas un outil de waveclear.
- **Rester immobile en team fights.** Draven n'a pas de dash. Deux secondes au même endroit face à n'importe quelle menace mobile (Zed, Diana, Camille) et tu es mort. Strafe (bouge sur le côté en attaquant) entre chaque auto-attaque — petits pas, mais en mouvement constant. L'arc de catch te pousse vers l'avant ; la vitesse de W te laisse reset la position juste après.
- **Ignorer Stand Aside (E) comme peel.** La E de Draven pousse les ennemis sur le côté et les ralentit. En team fights ce n'est pas juste du poke — c'est le disengage (une compétence qui casse un combat engagé, brisant l'all-in adverse) qui t'achète 1.5 secondes d'autos gratuits pendant qu'une Camille ou un Hecarim récupèrent du knockback.

## Conseil avancé

Entraîne le trick **W-into-fountain-axe-bounce** sur les side lanes : lance une Q vide contre un mur ou un couvert fin, puis marche immédiatement avec la W à travers la zone de rebond. Comme le Move Speed de Blood Rush décroît vite, la cast pendant l'arc de la hache te permet d'atteindre une position de catch que tu n'atteindrais pas sans, puis tu catches la hache pour reset le cooldown de W pour la play suivante. Cette seule mécanique sépare un Draven casual qui rate une hache sur trois d'un Draven fluide qui catch chaque Q qu'il lance.
