---
title: "Jax Top Build & Guide — Patch 16.9"
slug: "jax-top"
language: "fr"
patch: "16.9"
champion: "jax"
role: "top"
last_updated: "2026-04-29"
description: "Guide Jax top lane pour League of Legends Patch 16.9 : build bruiser scaling, timing de Counter Strike, matchups clés, power spikes, erreurs courantes et astuce finale."
quick_learn:
  champion_dd_id: "Jax"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Fighter / Duelist"
  abilities:
    - key: "P"
      name: "Relentless Assault"
      description: "Les auto-attaques consécutives augmentent l'Attack Speed de Jax. Les stacks reset si tu arrêtes d'attaquer. Continue de frapper une fois committé."
      dd_spell_id: "Jax_Passive"
    - key: "Q"
      name: "Leap Strike"
      description: "Dash ciblé sur une unité ou une ward. Si la cible est ennemie, inflige des dégâts physiques. Les wards te donnent de la mobility extra : seule fuite et seul gap-closer."
      dd_spell_id: "JaxQ"
    - key: "W"
      name: "Empower"
      description: "Charge la prochaine auto-attaque ou Leap Strike avec des dégâts magiques bonus et un bref slow. Coût bas et cooldown court : utilise-la à chaque trade court."
      dd_spell_id: "JaxW"
    - key: "E"
      name: "Counter Strike"
      description: "Stance défensive : esquive toutes les auto-attaques entrantes pendant 2 secondes max et réduit les dégâts AOE. Relance ou laisse expirer pour stun les ennemis proches."
      dd_spell_id: "JaxE"
    - key: "R"
      name: "Grandmaster's Might"
      description: "Passif : chaque troisième auto-attaque inflige des dégâts magiques bonus. Actif : burst AOE plus Armor et Magic Resist quelques secondes. À activer avant chaque fight."
      dd_spell_id: "JaxR"
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
    - { dd_id: "3153", name: "Blade of The Ruined King" }
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "3091", name: "Wit's End" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "contre adversaires auto-attack lourds (Tryndamere, Yasuo, Kayle) — réduction fixe des dégâts AA"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contre CC lourd ou dégâts AP (Malphite R, Renekton stun, Rumble)"
    - dd_id: "6610"
      name: "Sundered Sky"
      against: "core alternatif vs lanes de poke — crit garanti et heal sur la première auto contre un champion"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "contre deux gros AD dealers (Yasuo + Caitlyn) : transforme le burst en saignement lent (dégâts différés)"
  base_combo: ["E", "Q", "W", "AA", "R"]
  win_condition: "Atteins deux items et duel n'importe qui en side lane. Stun avec Counter Strike sur l'engage, Empower sur la première auto, laisse stack Relentless Assault — splitpush pour forcer la réponse."
  weakness: "Pré-6, pas de vraie fenêtre d'all-in ; les tops ranged te poke hors de la wave. Si Counter Strike est en cooldown ou raté, plus de couche défensive ni de menace de kill."
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
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["ornn", "sion", "cho-gath"]
      archetype: "Tanks melee lents sans dash"
      reason: "Counter Strike les stun en pleine face et ils n'ont aucun moyen de disengage ; Jax stack Relentless Assault librement pendant qu'ils encaissent, gagnant tout trade prolongé après le niveau 6."
    - examples: ["nasus", "garen", "darius"]
      archetype: "Scalers melee courte portée sans AA cancel"
      reason: "Leurs dégâts sont liés aux auto-attaques ou à des sorts courte portée — Counter Strike esquive les autos et le stun AOE en sortie neutralise leur windup."
    - examples: ["yasuo", "tryndamere", "irelia"]
      archetype: "Duellistes dépendants des auto-attaques"
      reason: "Counter Strike mange leur source principale de dégâts pendant 2 secondes. Avec Plated Steelcaps le matchup penche encore plus — ils ne peuvent pas équilibrer un trade contre ta stance."
  counterpicks:
    - examples: ["teemo", "vayne", "kennen", "gnar"]
      archetype: "Tops ranged avec outils de kite"
      reason: "Ils poke hors de la portée de 700 du Leap Strike et reculent dès que Counter Strike revient. Jax n'a pas de sustain pré-6 donc la lane saigne sans jamais arriver en portée d'all-in."
    - examples: ["fiora", "camille"]
      archetype: "Duellistes avec true damage et cleanse / chaînes de dash"
      reason: "Le Riposte de Fiora pare le stun de Counter Strike ; le E hookshot de Camille la laisse committer et disengage à son timer. Tous deux gagnent le 1v1 post-6 à parité d'items."
    - examples: ["malphite", "rumble"]
      archetype: "Hard counter mages contre bruisers melee (en avance)"
      reason: "Malphite vs Jax bascule sur ses items : pré-Frostfire Gauntlet il perd, post-deuxième item son stack d'armor et le R lock-on ferment la fenêtre d'all-in de Jax."
---

## Aperçu

Jax est un fighter melee et duelliste dont toute l'identité tient en "scale jusqu'à devenir un dieu en 1v1". Pré-6, aucune pression de kill : ses trades dépendent de toucher **Counter Strike (E)** pour esquiver les auto-attaques ennemies, puis répondre avec **Empower (W)** en empilant des autos de **Relentless Assault (Passif)**. À partir du niveau 6, **Grandmaster's Might (R)** le transforme en bruiser bursty capable de solo-kill presque tout top melee en side lane — mais seulement s'il atteint deux items intact.

Le plan de jeu est patient et lane-aware. Last-hit en sécurité jusqu'au 6, cherche une fenêtre d'all-in (un fight avec full commit où tu ne recules plus tant que personne ne meurt) quand **Q-E-W-R** est aligné, puis enchaîne sur le splitpush (pousser une side lane seul pour forcer une réponse adverse) dès que **Blade of The Ruined King** est online. En teamfight tu es un flanker qui arrive via **Leap Strike** sur une ward posée quelques secondes plus tôt — pas une frontline qui rentre de face.

## Build Recommandé

**Items de départ :** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Le regen du shield sur dégâts subis est la réponse la moins chère au poke early. Évite Doran's Blade sauf matchup melee où tu veux activement all-in niveau 2.

**Items core (dans l'ordre) :**

1. ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** — ton premier power spike. Les dégâts on-hit scalent avec les HP de l'ennemi, parfait pour les tops bruisers/tanks, et l'actif slow te laisse coller à ceux qui essaient de te kite (reculer en attaquant pour garder la distance).
2. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — le second item qui transforme Jax en duelliste. Les procs de Sheen (dégâts extra sur l'auto après un sort) s'enchaînent sur **Q** et **W**, et le movement speed on-hit te laisse poursuivre à travers les murs.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — couche de survie. Le shield se déclenche quand tu passes sous ~40% HP (HP-threshold passive — passif qui s'active quand tes HP passent un seuil bas), te donnant les secondes nécessaires pour stack **Relentless Assault** et retourner un fight.
4. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — quatrième item contre dégâts AP ; Magic Resist plus dégâts magiques on-hit qui scalent avec ton attack speed déjà élevé.

**Items situationnels :**

- ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — core alternatif contre des lanes de poke lourd ; le crit garanti et le heal sur la première auto contre un champion donnent à Jax la sustain (régénération en fight) qu'il n'a pas autrement.
- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — contre deux gros AD dealers (ex. Yasuo + Caitlyn). Transforme le burst physique en saignement lent (dégâts étalés sur les secondes suivantes au lieu d'instantanés) pour que tu stack Relentless Assault avant de mourir.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — bottes contre lanes auto-attack lourdes (Tryndamere, Kayle, Vayne).
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — bottes contre CC lourd ou burst AP (Malphite R, Rumble, Renekton stun).

**Bottes :** Par défaut **Plated Steelcaps** contre tops auto-attack ; swap sur **Mercury's Treads** si l'équipe adverse a 2+ sources de hard CC ou de gros dégâts AP.

**Skill order :** Max **E** (Counter Strike) en premier — la fenêtre de dodge scale avec le rank et le cooldown passe de 17 à 9 secondes. **Q** (Leap Strike) en deuxième pour le waveclear et le gap-close, **W** en dernier. Point en **R** aux niveaux 6, 11, 16.

**Runes :** Arbre primaire **Precision** avec **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Conqueror stack vite sur Jax car les auto-attaques chaînées de Relentless Assault comptent individuellement. Secondaire **Resolve** avec **Bone Plating** et **Revitalize** pour survivre aux trades early.

## Matchups clés

- **Darius :** Égal pré-6, scale en favorable. Garde **Counter Strike** pour l'anneau extérieur de sa **Q** (l'anneau qui le soigne). S'il touche la zone de heal tu perds le trade ; s'il rate tu le stun et repars avec une auto bonus boostée par **W**.
- **Camille :** Lane défavorable. Son **E** hookshot esquive le timing de ton stun et son **W** lifesteal sustain à travers Relentless Assault. Freeze la wave près de ta tour (garder la wave de ton côté pour lui nier les last-hits) et attends l'aide du jungler.
- **Malphite :** Égal early, défavorable post-6 s'il touche Frostfire / Sunfire. Tente un all-in niveau 3 avant qu'il ait deux items ; une fois qu'il stack Armor tes dégâts magiques de **W** et **R** comptent plus que tes autos physiques.
- **Teemo :** Défavorable, counter ranged top classique. Achète ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** premier item, pars sur ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, et farme sous tour jusqu'à ce que ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** soit online. Cherche des kills uniquement quand le jungler ennemi est bot.
- **Renekton :** Défavorable niveaux 1-5, égal à partir du 6. Il t'out-trade avec la sustain de sa **Q** et le stun de sa **W** avant que tu touches le spike de **R**. Joue passif, drop **E** quand il committe **W**, et freeze (garder la wave de ton côté pour nier les last-hits) la wave près de la tour.

## Power spikes & conditions de victoire

- **Niveau 3 :** Première fenêtre de trade court. Avec **E + W + Q** débloqués, tu esquives deux autos ennemies avec **E**, ripostes avec **Empower + Q** et ressors gagnant. Ne dépasse pas 3 autos — ton stun part en cooldown.
- **Niveau 6 :** **Grandmaster's Might** se débloque. L'actif Armor + MR rend favorables les all-in rapprochés. Cast toujours **R** avant de committer, jamais comme finisher.
- **![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) Blade of The Ruined King complet (~ minute 11-13) :** Premier spike de duel. Tu peux splitpush (pousser une side lane seul pour forcer la réponse adverse) et tuer tout top melee qui te défie en 1v1 sans aide jungler.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force online (~ minute 19-22) :** Spike à deux items. Les procs de Sheen passent sur chaque sort et tu as enfin le burst pour one-shot les squishys en flank.

## Erreurs courantes

- **Lancer Counter Strike en cooldown pour le waveclear.** **E** est ta seule couche défensive — la cramer sur des minions te laisse à découvert sur un gank, sans fuite ni stun. Utilise-la seulement pour trade ou quand un gank arrive.
- **Oublier de relancer la E pour le stun.** **Counter Strike** a DEUX casts : le premier entre en stance de dodge, le second relâche le stun AOE. Les Jax débutants la laissent expirer ; le recast manuel te laisse timer le stun sur la frame exacte du commit ennemi.
- **All-in pré-6 contre des bruisers.** Jax n'a aucune pression de kill avant la **R**. Vouloir fight Darius ou Renekton niveau 4, c'est offrir le first blood. Stack l'XP passif, freeze si tu perds, attends la **R**.
- **Splitpush sans TP et sans vision.** Dès que **Blade of The Ruined King** est online tu veux splitpush, mais si l'équipe adverse rotate à 4 et que tu n'as pas Teleport (summoner spell qui te warp à la base ou à un allié) up, ton équipe perd le 4v4. Vérifie toujours les recall timers de ton équipe avant de t'engager en side.
- **Leap Strike sur l'ennemi quand tu fuis.** **Q** peut cibler wards et minions. Si tu fuis, Q sur le minion du fond ou sur ta trinket ward, jamais sur le poursuivant — ça te téléporte direct sur lui.

## Conseil avancé

Utilise **Counter Strike** en plein dash pour timer le stun sur la frame de commit ennemi au lieu de le laisser expirer. L'astuce : cast **E**, marche vers l'ennemi, attends qu'il lance son skillshot clé ou un dash (Renekton **W**, Darius **W**, Camille **E**), puis relance **E** pile quand il est bloqué en animation. Le stun le chope en plein cast et te donne une fenêtre garantie de 2 secondes pour stack Relentless Assault sans réplique. Entraîne-le en Practice Tool contre un target dummy avec auto-attaques on — tu sentiras le rythme en dix répétitions.
