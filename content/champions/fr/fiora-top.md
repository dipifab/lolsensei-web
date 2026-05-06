---
title: "Fiora Top Build & Guide — Patch 16.9"
slug: "fiora-top"
language: "fr"
patch: "16.9"
champion: "fiora"
role: "top"
last_updated: "2026-04-29"
description: "Guide Fiora top pour League of Legends Patch 16.9 : build duelliste, gestion des Vitals, timing du parry, matchups clés, power spikes et erreurs courantes."
quick_learn:
  champion_dd_id: "Fiora"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Skirmisher / Duelist"
  abilities:
    - key: "P"
      name: "Duelist's Dance"
      description: "Un point faible lumineux (un Vital) apparaît autour de chaque champion ennemi proche. Le toucher inflige du true damage, soigne Fiora et lui donne du Move Speed pendant quelques secondes."
      dd_spell_id: "Fiora_Passive"
    - key: "Q"
      name: "Lunge"
      description: "Dash court directionnel qui transperce l'ennemi le plus proche et reset le timer d'auto-attack. Toucher rembourse la majorité du cooldown : enchaîner les Q est sa mobilité principale."
      dd_spell_id: "FioraQ"
    - key: "W"
      name: "Riposte"
      description: "Parry : bloque tout dégât et disable entrants pendant un instant, puis riposte dans une direction. Slow le premier ennemi touché, ou le stun si tu as paré un effet de CC."
      dd_spell_id: "FioraW"
    - key: "E"
      name: "Bladework"
      description: "Empower ses deux prochaines auto-attacks. La première slow la cible, la seconde crit toujours. Les deux donnent un bonus d'attack speed durant la fenêtre."
      dd_spell_id: "FioraE"
    - key: "R"
      name: "Grand Challenge"
      description: "Révèle les quatre Vitals autour du champion ciblé. Tous les toucher (ou tuer la cible après au moins un Vital) soigne Fiora et les alliés proches en grosse AOE."
      dd_spell_id: "FioraR"
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "3074", name: "Ravenous Hydra" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap des Plated Steelcaps face à beaucoup de magic damage ou de chaînes de CC (Lissandra, Ryze, pull de Sett)"
    - dd_id: "6610"
      name: "Sundered Sky"
      against: "contre des bruisers tankier (Mundo, Sion, Ornn) — crit + heal au premier hit aide contre les HP-stackers"
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "contre tops mobiles (Camille, Irelia, Renekton) — dash + slow pour stick quand la Q seule ne suffit pas"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contre du burst AP fort (Mordekaiser, Vladimir, Rumble) — bouclier magique et MR pour le splitpush 1v1"
    - dd_id: "6694"
      name: "Serylda's Grudge"
      against: "contre frontlines blindées (Malphite, Rammus, Shen) — armor pen + slow pour garder les Vitals en range"
  base_combo: ["Q", "AA", "E", "AA", "AA"]
  win_condition: "Gère les Vitals pour te heal et snowball early, atteins Trinity Force, puis splitpush une side lane jusqu'à ce qu'ils envoient deux. En teamfight, R sur le squishy pour le heal AOE qui gagne les fights longs."
  weakness: "Squishy avant le niveau 6 et très item-dependent. Les chaînes de hard CC et le poke ranged (Teemo, Quinn, Gnar) la tiennent loin des Vitals ; sans reset de Q, elle n'a aucune mobilité."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
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
    - examples: ["sett", "darius", "garen"]
      archetype: "Juggernauts lents qui dépendent d'une seule grosse capacité"
      reason: "Le W de Fiora pare la wind-up unique et télégraphée qui les définit (la pull E de Darius, le slam W de Sett, la Q silence de Garen). Wind-up gâchée, elle tourne autour et free-hit les Vitals tout le trade."
    - examples: ["dr-mundo", "sion", "shen"]
      archetype: "Tanks HP-stackers qui ne peuvent pas stopper ses Vitals"
      reason: "Les Vitals infligent un pourcentage du HP max de la cible en true damage (dégâts qui ignorent armor et MR). Plus ils stackent du HP, plus son R les démolit dans les fights longs."
    - examples: ["nasus", "kayle"]
      archetype: "Mêlées scaling late avec laning early faible"
      reason: "Elle les bully hors de la wave dès le niveau 2 avec les resets de Q, les tue ou les pousse sous tour avant qu'ils n'atteignent les items qui les rendent dangereux."
  counterpicks:
    - examples: ["teemo", "quinn", "gnar"]
      archetype: "Tops ranged qui kite hors du range Q"
      reason: "Fiora n'a aucune réponse au poke ranged avant le niveau 6. Ils restent à portée d'auto-attack, l'aveuglent ou dash, et elle ne peut atteindre aucun Vital pour se heal."
    - examples: ["jax", "irelia", "camille"]
      archetype: "Skirmishers à mobilité on-demand"
      reason: "Leurs dashes ignorent son jeu de positionnement. Le E de Jax stun pendant la fenêtre de parry, les resets Q d'Irelia la repositionnent chaque seconde, le R de Camille la coince en 1v1."
    - examples: ["malphite", "poppy", "tahm-kench"]
      archetype: "Tanks à hard CC point-and-click"
      reason: "Leur CC est fiable et imparable une fois posé sur toi. Un R de Malphite ou un stop-charge de Poppy annule la fenêtre de R de Fiora et son équipe joue à 4v5 entretemps."
---

## Aperçu

Fiora est une **skirmisher** — une duelliste mêlée qui gagne les fights prolongés en 1v1 au lieu de burst en 1-2 secondes comme un assassin. Son kit tourne autour de sa passive **Duelist's Dance** : un point faible lumineux appelé **Vital** apparaît autour de chaque champion ennemi proche, tournant de côté toutes les quelques secondes. Toucher le Vital inflige du **true damage** (dégâts qui ignorent armor et MR), la soigne et donne du Move Speed. Son Q **Lunge** est un dash court à cooldown bas qui se rembourse presque entièrement à l'impact, donc enchaîner les Q autour de l'adversaire pour atteindre le prochain Vital est la boucle mécanique centrale. Son W **Riposte** est un **parry** — un bouclier bref qui bloque la prochaine instance de dégâts ou de CC et riposte d'un coup d'estoc, stunnant la cible si elle a paré un effet de CC.

Le game plan est simple à décrire mais mécanique : en lane, gère les Vitals pour te heal et grignoter l'adversaire, cherche un all-in au niveau 2 ou 6 (un fight où tu commit totalement à la kill), puis **splitpush** (push une side lane seul·e pour forcer l'ennemi à envoyer quelqu'un te stopper) dès la sortie de **Trinity Force**. Autour de son R **Grand Challenge**, Fiora devient l'un des meilleurs champions 1v1 du jeu : ult sur une cible isolée, touche les quatre Vitals, et le heal AOE final peut renverser un teamfight à elle seule. Elle est squishy et item-dependent durant les 6 premiers niveaux, donc la lane early se joue sur les Vitals, pas sur les kills.

## Build Recommandé

**Starting items :** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. La passive de regen HP amortit le poke (dégâts ranged à bas coût qui grignotent ton HP sans commit dans un fight) jusqu'à ton spike Q-E niveau 2. Prends ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** uniquement contre une lane mêlée où tu prévois un all-in early (ex. mirror Fiora, Garen).

**Core items (dans l'ordre) :**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — premier spike (le plus gros bond en dégâts et en **stickiness**, ta capacité à rester collée à une cible qui essaie de fuir). Le proc Spellblade on-hit déclenche chaque Q pour de gros dégâts bonus, et la passive Move Speed après chaque ability stack la chase aux Vitals. AD, attack speed, ability haste (stat qui réduit les cooldowns) et HP collent à ce que le kit demande.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots par défaut quand l'ennemi te fait surtout mal en auto-attack.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP plus un **bouclier lifeline** : quand ton HP descend sous ~30%, un bouclier automatique se déclenche. Cette fenêtre, c'est exactement quand tu as besoin de temps en plus pour finir les deux derniers Vitals sur la cible de ton R.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — transforme le **burst** AD (gros dégâts en 1-2 secondes) en saignement lent (dégâts étalés sur les secondes suivantes). Sur kill, le bleed restant est nettoyé — un reset propre pour les dives en splitpush.
5. ![Ravenous Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3074.png) **Ravenous Hydra** — cleave AOE sur les auto-attacks plus omnivamp (lifesteal qui marche sur tout dégât que tu infliges, pas que les autos). Double ta waveclear pour splitpush une side lane sans perdre trop de temps.

**Situational items :**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap des ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** face à beaucoup de dégâts magiques ou de chaînes de **CC** (crowd control : stuns, roots, knockbacks — tout ce qui te bloque). La tenacity (stat qui réduit la durée du CC) garde les fenêtres de parry W utilisables en teamfight.
- ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — premier item alternatif contre des lanes de bruisers tankier (Mundo, Sion, Ornn). Chaque premier auto sur un champion en fight crit et soigne — sustain extra contre les HP-stackers.
- ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — contre des tops mobiles (Camille, Irelia, Renekton). Le dash + slow actif donne un second gap-closer (outil pour fermer la distance avec un ennemi) quand les resets de Q ne suffisent pas.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contre du burst **AP** (Ability Power, la stat derrière les dégâts magiques) fort (Mordekaiser, Vladimir, Rumble). Bouclier magique lifeline + MR rend le splitpush 1v1 jouable.
- ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — contre des frontlines qui stack l'armor (Malphite, Rammus, Shen). Armor pen plus une proc (passive qui se déclenche automatiquement à chaque coup qui inflige des dégâts) de slow garde les tanks pinned assez longtemps pour clear les quatre Vitals.

**Boots :** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** sont la norme. Switch vers ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** quand l'équipe ennemie a trois sources de CC ou plus, ou de gros dégâts magiques.

**Skill order :** Max **Q** en premier (le cooldown baisse à chaque rank, les resets deviennent quasi instantanés). Max **E** en second (plus de dégâts sur le crit empower, slow plus long pour set up les Vitals). **W** se max en dernier. Prends **R** aux niveaux 6, 11, 16.

**Runes :** Arbre primaire **Precision** avec keystone (la rune principale de l'arbre) **Conqueror** — ramp d'AD bonus tant que tu continues à fight, capé après ~5 secondes. Combine avec **Triumph** (heal et or sur takedown), **Legend: Bloodline** (lifesteal qui stack sur les takedowns), et **Coup de Grace** (dégâts bonus sous 40% HP — parfait pour finir les Vitals). Arbre secondaire **Resolve** avec **Bone Plating** (réduction de dégâts sur les 3 prochains hits après avoir pris des dégâts) plus **Revitalize** (boost le team-heal de ton R). Stat shards : **Adaptive Force** + **Adaptive Force** + **Health Scaling**.

## Matchups clés

- **Darius :** Skill matchup. Sa Q sur le bord externe applique une stack de bleed et te out-trade raw, mais tout son kit est télégraphié : **W** (parry) sur sa pull E et le trade se renverse. Si tu pares la pull, il est stun presque une seconde — Q in, deux Vitals, sors. Ne trade jamais quand sa passive est à 4-5 stacks.
- **Camille :** Matchup dur. Son hookshot E stun à travers ta W si elle land le second cast, et sa R t'isole 1v1. Garde le **W** pour sa R, pas pour sa Q. Achète ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** au lieu de Trinity si elle snowball early.
- **Teemo :** Lane brutale. Il t'aveugle (annule tes auto-attacks pendant un court instant) on cooldown et poke hors range Q. **Freeze** la wave près de ta tour (arrête de push et garde la wave de ton côté) pour lui nier le farm (or et XP des minions), et appelle ton jungle.
- **Garen :** Favorable. Q-W pour bait son **W** (son bouclier de damage reduction), puis marche sur le côté pour le Vital. Le silence de sa Q est un wind-up pur — pare-le on reaction. Évite l'all-in sous sa R sauf si tu es 1-2 items devant.
- **Jax :** Matchup égal que Fiora gagne après un item. Pare son **E** (le wind-up de stun de 2 secondes) et la lane est à toi. Sans ce parry, son E + counter-strike te out-trade parce qu'il stun à travers tout hit que tu land pendant le channel.

## Power spikes & conditions de victoire

- **Niveau 2 :** Avec Q + E débloqués, tu as une vraie fenêtre d'all-in. Q in pour un Vital, E pour slow + crit auto, marche sur le côté pour le prochain Vital. La plupart des lanes perdent un tiers de leur HP sur un seul trade niveau 2.
- **Niveau 6 :** Première **R** débloquée. Même à zéro item, R isole une cible et le heal AOE te garde en vie longtemps après la kill. Force un 1v1 dès que ton jungle apparaît top side.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force fini (~ minute 11-13) :** Dégâts et stickiness font le plus gros bond ici. Tu peux splitpush une side lane et battre 1v1 n'importe qui qu'ils envoient. Force la pression en side lane et ignore les teamfights mid quand ça sort.
- **Trois items + R online (~ minute 22-26) :** Pic de teamfight. R sur la cible la plus squishy, danse autour pour les quatre Vitals, et le heal AOE garde toute ton équipe en vie sur un second engage. Si tu n'atteins pas la back line, R sur le frontliner avec le plus d'HP — le true damage coupe à travers son build pareil.

## Erreurs courantes

- **Spam Q on cooldown pour les dégâts.** La Q est un outil de positionnement d'abord, de dégâts ensuite. Si tu Q vers l'ennemi et bouffes sa combo entière, tu as gâché et le dash et le rembours. Q **vers un Vital**, pas vers le champion.
- **Gâcher W sur des auto-attacks.** La W pare n'importe quelle source de dégâts, mais une auto de minion parée est du potentiel gâché. Garde la W pour la plus grosse ability unique de l'ennemi. Un parry propre sur un CC = une fenêtre de kill gratuite.
- **Ult contre un mur.** La R place quatre Vitals sur les côtés cardinaux de la cible. Si l'ennemi est déjà collé à un mur, deux Vitals sont du côté mur et tu ne peux pas les atteindre. Tire la cible en terrain ouvert d'abord, puis R.
- **Splitpush sans vision.** Fiora bat 1v1 n'importe qui mais perd 1v2 à chaque fois. Pose un ![Control Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2055.png) **Control Ward** dans le bush de side-lane ennemi avant de shove — sans, chaque shove invite un gank gratuit auquel tu ne peux pas échapper.
- **Trade contre une passive pleine.** Les juggernauts comme Darius, Sett, Renekton gagnent les trades raw quand leur passive est chargée. Si leur barre est pleine, recule, push la wave, et trade seulement quand elle se vide.

## Conseil avancé

Entraîne le **timing de parry W** sur les ultis point-and-click (abilities qui ciblent automatiquement, comme la R de Mordekaiser) au lieu des skillshots (abilities à viser à la main). La plupart des joueurs essaient de W sur le wind-up de la R de Malphite ou de Sion, ce qui est ok mais prévisible. Les énormes plays sont parer la **R de Mordekaiser** (parée, il est stun presque une seconde et tu marches libre), la **R de Skarner** (la suppression est annulée et il est stun), et la **R de Warwick** (frame-perfect, mais une propre finit le fight). Lance un custom game, demande à un ami de jouer un de ces champions, et drill le parry jusqu'à ce que tu arrêtes de pre-cast et commences à réagir. Une fois en réflexe, chaque 1v1 contre une ulti hard-CC bascule en ta faveur même avec un désavantage d'items.
