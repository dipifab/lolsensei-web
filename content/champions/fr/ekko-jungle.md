---
title: "Ekko Jungle Build & Guide — Patch 16.9"
slug: "ekko-jungle"
language: "fr"
patch: "16.9"
champion: "ekko"
role: "jungle"
last_updated: "2026-04-29"
description: "Guide Ekko jungle pour League of Legends Patch 16.9 : clear path, build AP assassin, patterns de gank, power spikes, erreurs courantes et un conseil final."
quick_learn:
  champion_dd_id: "Ekko"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Assassin / AP Burst"
  abilities:
    - key: "P"
      name: "Z-Drive Resonance"
      description: "Tous les trois coups (auto ou sort) sur la même cible infligent des dégâts magiques bonus et donnent à Ekko un bref burst de move speed si la cible est un champion."
      dd_spell_id: "Ekko_Passive"
    - key: "Q"
      name: "Timewinder"
      description: "Skillshot boomerang : une grenade part, ralentit les ennemis touchés, puis revient sur Ekko avec un second tick de dégâts. Les deux passages frappent — le placement compte."
      dd_spell_id: "EkkoQ"
    - key: "W"
      name: "Parallel Convergence"
      description: "Passif : dégâts magiques bonus sur les autos contre les ennemis à bas HP. Actif : pose un cercle retardé qui ralentit puis stun brièvement si Ekko entre dedans."
      dd_spell_id: "EkkoW"
    - key: "E"
      name: "Phase Dive"
      description: "Dash court qui empower la prochaine auto en téléportant Ekko sur la cible avec dégâts bonus. Gap-closer principal et trigger du troisième hit passif."
      dd_spell_id: "EkkoE"
    - key: "R"
      name: "Chronobreak"
      description: "Rembobine la position d'Ekko à là où il était ~4 secondes plus tôt, inflige des dégâts magiques en zone à l'arrivée et soigne selon les dégâts subis sur cette fenêtre."
      dd_spell_id: "EkkoR"
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3100", name: "Lich Bane" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contre burst AD lourd (Zed, Talon, Kha'Zix, Rengar) — la stasis annule leur kill window après le repositionnement R"
    - dd_id: "3135"
      name: "Void Staff"
      against: "dès qu'une cible prioritaire achète de la MR (Maw, Mercury's Treads, Spectre's Cowl)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contre comps qui empilent les soins (Soraka, Aatrox, Dr. Mundo, Vladimir) — applique Grievous Wounds"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "contre carrys mobiles (Vayne, Ezreal, Tristana) — slow sur chaque hit, Q + E collent facile"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "late vs frontline qui empile MR — magic pen et petite heal post-takedown"
  base_combo: ["W", "E", "AA", "Q", "R"]
  win_condition: "Pose le W stun depuis le fog, entre avec E, et reset les fights avec R quand bas. Snowball early-mid en gank pre-6 et en forçant skirmishes sur objectifs."
  weakness: "Premier clear faible et range courte : un jungler invade fort le punit au niveau 3. R sur cooldown long — une fois down, Ekko n'a plus de panic button."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "kindred", "nidalee"]
      archetype: "Junglers ranged squishys sans CC point-and-click"
      reason: "Le setup W + E d'Ekko ferme la distance avant qu'ils ne finissent une rotation de kite ; le reset R rend l'all-in safe même si leur équipe rotate pour aider."
    - examples: ["master-yi", "shyvana"]
      archetype: "Skirmishers scaling au early faible"
      reason: "Les ganks pre-6 au niveau 3 avec W + E + Q les chopent pendant qu'ils farment leurs camps ; une seule kill construit le gold lead pour assassiner les carrys avant la minute 14."
    - examples: ["amumu", "zac"]
      archetype: "Tanks d'engage sans dash"
      reason: "La mobility d'Ekko (E + R rewind) dodge leur engage télégraphié, et son burst AP tape le plus fort sur les tanks low-MR. Il les kite dans les angles et burst leurs carrys depuis le fog."
  counterpicks:
    - examples: ["lee-sin", "elise", "xin-zhao"]
      archetype: "Junglers invade early forts"
      reason: "Le premier clear d'Ekko est sous la moyenne et son duel niveau 3 est faible. Ils marchent dans sa jungle, le tuent avant que W et E soient max, et snowball avec la bounty."
    - examples: ["nocturne"]
      archetype: "Junglers à pression globale et spell shield"
      reason: "Le E de Nocturne est un spell shield qui bloque le stun du W d'Ekko (= la spell qui setup chaque gank). Sans stun le gank rate, et le R de Nocturne dépasse les outils de counter-gank d'Ekko."
    - examples: ["galio", "maokai"]
      archetype: "Tanks qui empilent Magic Resist tôt"
      reason: "Les junglers qui stack MR tôt aplatissent le mid-game spike d'Ekko : quand le combo Lich Bane chip au lieu de one-shot la frontline, son plan snowball cale."
---

## Aperçu

Ekko est un assassin AP (= Ability Power, la stat qui scale les dégâts magiques) jungler qui one-shot les carrys squishy avec un combo rapide W stun → E dash → AA + Q. Sa passive **Z-Drive Resonance** récompense la séquence de trois coups sur la même cible avec des dégâts magiques bonus et un burst de move speed : sa rotation de dégâts est construite pour caler trois choses vite, pas pour spam des sorts. Son **Chronobreak (R)** est le filet de sécurité : il le téléporte à la position qu'il avait ~4 secondes avant et soigne selon les dégâts subis sur cette fenêtre, donc il peut plonger dans un fight, prendre des risques, et annuler la conséquence s'il survit au channel.

Game plan : clear propre des premiers camps, gank niveau 3 sur une lane peu mobile (Lux, Senna, Veigar, mid laners immobiles), force Scuttle (= le crabe de la rivière, donne de la vision et un petit buff de move speed) du côté où ton équipe a la prio (= priority, ton laner push et peut rotate sans perdre de CS), et snowball (= transformer une petite avance early en avantage bien plus gros) en skirmishes (= petits fights 1v1 ou 2v2, pas un teamfight complet) autour du second drake. Ekko n'est pas un champion scaling (= qui devient plus fort au fil des minutes) : si tu arrives à la minute 25 sans kill, l'ADC adverse termine 2 items et tu arrêtes de one-shot qui que ce soit.

## Build Recommandé

**Items de départ :** ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** (le jungle pet AP-friendly — applique des dégâts on-hit aux champions ennemis pendant les ganks) plus **Smite** (la summoner spell que prend tout jungler — une attaque de burst rapide sur cible unique, utilisée à la fois pour clear plus vite et pour voler les objectifs comme Drake ou Baron à l'équipe adverse).

**Items core (dans l'ordre) :**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — premier spike AP. Dégâts on-cast bonus et mana sustain : la rotation Q + W + E entame la cible avant même que l'auto du E arrive.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plate (= ignore une partie de la MR ennemie). Les carrys squishy ont ~30 MR de base, donc la pen plate se transforme en dégâts bonus pur.
3. ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** — Spellblade (= la prochaine auto après une spell inflige de gros dégâts magiques bonus). Le E d'Ekko empower déjà la prochaine auto, donc Lich Bane se stack par-dessus : c'est l'item qui transforme le dash E en one-shot.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst supplémentaire (= beaucoup de dégâts en 1-2 secondes). Sa passive HP-threshold (= passive qui s'active sous un certain HP) s'aligne avec les finishers après le reset R.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicateur AP late-game et le slot au plafond le plus haut.

**Items situationnels :**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contre les AD assassins (Zed, Talon, Kha'Zix, Rengar). La stasis (= Ekko devient invulnérable mais immobile pendant 2.5 secondes) achète du temps pour les cooldowns et, couplée au R, te fait survivre à n'importe quel all-in AD.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — dès qu'une cible prioritaire build de la MR (Mercury's Treads, Maw of Malmortius, Spectre's Cowl). Le magic pen percentuel scale avec la quantité de MR empilée.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contre les comps avec heal (Soraka, Aatrox, Dr. Mundo, Vladimir). Applique Grievous Wounds (= debuff qui coupe le heal de la cible en deux) sur les dégâts.
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — contre les carrys mobiles ranged (Vayne, Ezreal, Tristana). Chaque hit de spell applique un slow, donc Q + E les collent en place pour la kill.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — remplace Shadowflame en late-game contre les frontlines qui stack MR. Magic pen et un petit heal revive sur les takedowns.

**Bottes :** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** par défaut. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** sont acceptables si l'équipe a besoin de plus d'uptime de R comme outil de re-engage (= ton ult qui revient plus vite te permet de flip un second teamfight).

**Skill order :** Maxe **Q** en premier (waveclear et poke principal), **E** en second (dégâts du dash), **W** en dernier. Point dans **R** aux niveaux 6, 11, 16. Commence avec **Q** au niveau 1 pour le clear le plus safe, puis **E** au 2 et **W** au 3.

**Runes :** Arbre primaire **Domination** (l'arbre des assassins — bonus de stats qui récompensent les pickoffs sur cibles isolées) avec **Electrocute** (après avoir touché un champion avec trois sources de dégâts séparées en 3 secondes, le prochain hit inflige un burst bonus — le chain W + E + Q le proc parfaitement), **Sudden Impact** (magic pen extra pendant 4 secondes après un dash ou un stealth), **Sixth Sense** (révèle automatiquement les wards ennemies proches sur un long cooldown — pression de vision pour le pathing en jungle), **Ultimate Hunter** (réduit le cooldown du R par takedown unique). Arbre secondaire **Sorcery** avec **Manaflow Band** (refund mana sur les hits de spell, corrige la petite mana pool d'Ekko) et **Transcendence** (ability haste — tes spells reviennent plus vite — qui scale tout le kit).

## Matchups clés

- **Lee Sin :** Invade early fort (= un jungler qui marche dans ta jungle pour te tuer avant que tu aies des items). Garde de la vision sur tes buffs (= les petits camps qui donnent un bonus stat temporaire, blue et red). Évite de fight avant le niveau 4 — son duel early bat le tien.
- **Karthus :** Matchup gratuit. Son R fait des dégâts à toute ton équipe à travers la map, mais il a zéro mobility — W sous ses pieds, E in, Q + AA et il meurt en une rotation (= une séquence complète d'abilities). Counter-jungle (= vole ses camps) après chaque gank qu'il commit.
- **Master Yi :** Rival scaling. Tue-le avant la minute 20 ou accepte qu'il te dépasse en teamfight tardif. Force le fight sur le spike ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** + ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** et dive sa bot lane pendant qu'il farm les camps.
- **Sejuani :** Matchup difficile. Son R est point-and-click (= pas besoin de viser, le sort se locke sur la cible) et te freeze pendant ton dash E. Attends qu'elle l'utilise sur quelqu'un d'autre, puis commit. Achète ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** plus tôt que d'habitude.
- **Rammus :** Évite les fights solo. Sa passive d'épines reflète une partie des dégâts de tes autos ; tu fais surtout des dégâts magiques (bon contre les épines) mais son W steroid (= un multiplicateur temporaire d'armor et de réflexion) bloque toujours ton auto Lich Bane. Farm le côté opposé de la jungle et regroupe-toi avec ton équipe uniquement.

## Power spikes & conditions de victoire

Un power spike est le moment où le champion devient soudainement bien plus fort qu'une minute avant — généralement quand une nouvelle ability ou un item entre en jeu.

- **Niveau 3 :** Premier combo **W** + **E** + **Q** débloqué. Tu peux enfin gank les lanes pre-6 (= avant que ton ult soit online) — pose W dans le fog (= zone sombre hors vision, derrière un buisson ou un mur), attends que l'ennemi marche dessus pour le stun, dash avec E, Q en sortie. C'est le pattern de gank pre-6 le plus fort d'Ekko.
- **Niveau 6 :** **Chronobreak (R)** online. Maintenant chaque dive (dive = marcher sous tour pour tuer une cible low-HP) est récupérable : tu prends des coups de tour, tu tues la cible, R back en safety. Force un fight ou un drake immédiatement.
- **![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Echo + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minute 10-12) :** Premier vrai spike de dégâts. Tu chunk les squishys avec Q seulement et tu one-shot les ennemis sous 60% HP avec le combo complet. Cherche des picks (= tuer un ennemi isolé hors position) sur les side lanes.
- **![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) Lich Bane completion (~ minute 16-18) :** C'est LE spike. L'auto empowered du E plus le Spellblade de Lich Bane font ~50% des HP d'un ADC en un seul dash. Regroupe sur drake et Baron — chaque ennemi isolé meurt en un combo.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minute 24-28) :** Même les cibles qui stack MR cèdent au burst plein. Si l'ADC adverse n'a pas acheté ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) ou Quicksilver Sash, ton reset R est une kill gratuite sur la backline.

## Erreurs courantes

- **Gank les lanes pre-3 sans placement de W.** Sans le stun de W, le gank d'Ekko est juste un dash E lent — facile à kite (kite = reculer en attaquant, garder la distance). Pose toujours W dans le fog 2 secondes avant de marcher : le stun retardé chope l'ennemi quand il réagit au dash.
- **Appuyer sur R dès que les HP baissent.** Chronobreak te rewind à une position d'il y a 4 secondes. Si tu ult au premier auto reçu, tu R dans le fight que tu voulais fuir. Attends — encaisse des dégâts pendant le channel R (= le windup avant l'activation) pour que le heal final soit plus gros et la destination soit vraiment plus safe.
- **Spam Q pour le waveclear en jungle.** Le coût mana du Q est élevé et le retour du boomerang est le plus gros tick de dégâts. Marche au-delà du camp pour que le retour touche le pack deux fois ; un Q spam stationnaire gâche le second hit.
- **Forcer Drake sans prio.** Le smite-fight d'Ekko (= le moment où les deux junglers commit Smite sur un objectif contesté) est médiocre parce que son R cancel s'il est interrompu en plein channel. Si tes laners n'ont pas la prio (= lane push, libres de rotate), donne le drake et farm de la vision.
- **Ignorer la passive du troisième hit en skirmish.** Z-Drive Resonance double les dégâts du trade quand tu enchaînes trois hits sur la même cible. Tirer Q sur la wave en poke gaspille le stack sur un minion. Garde Q pour les trades sur champions, pas sur les creeps que tu n'as pas besoin de clear.

## Conseil avancé

Utilise **Parallel Convergence (W)** comme outil de vision préventif, pas seulement comme setup de stun. Cast W pose le cercle au sol 3.5 secondes avant l'activation, et pendant ce windup tu vois si quelqu'un traverse la zone — un fog check gratuit sur un chokepoint (= passage étroit que l'ennemi doit traverser) ou derrière le Drake pit. Les pros utilisent ce trick pour scout le jungler ennemi qui traverse la rivière, puis soit commit le gank avec stun prêt, soit rotate sans commit. L'ability devient à la fois un outil de pick et une ward (= le petit objet qui donne de la vision dans une zone).
