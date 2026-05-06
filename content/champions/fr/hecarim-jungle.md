---
title: "Hecarim Jungle Build & Guide — Patch 16.9"
slug: "hecarim-jungle"
language: "fr"
patch: "16.9"
champion: "hecarim"
role: "jungle"
last_updated: "2026-04-29"
description: "Guide Hecarim jungle pour League of Legends Patch 16.9 : clear path, schémas de gank, build bruiser, matchups clés, power spikes, erreurs et une astuce finale."
quick_learn:
  champion_dd_id: "Hecarim"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Warpath"
      description: "Hecarim convertit un pourcentage de son Move Speed bonus en Attack Damage. Chaque objet de vitesse est aussi un objet de dégâts."
      dd_spell_id: "Hecarim_Passive"
    - key: "Q"
      name: "Rampage"
      description: "Taille AoE les ennemis proches en dégâts physiques. Chaque coup empile un buff qui réduit le cooldown et augmente les dégâts. Outil principal de clear et de DPS."
      dd_spell_id: "HecarimRapidSlash"
    - key: "W"
      name: "Spirit of Dread"
      description: "Zone AoE de dégâts magiques qui soigne Hecarim selon les dégâts subis par les ennemis dedans. Sustain au clear et en dive de tour."
      dd_spell_id: "HecarimW"
    - key: "E"
      name: "Devastating Charge"
      description: "Move Speed croissant plus ghost (passe à travers les unités). La prochaine auto-attaque knockback avec dégâts proportionnels à la distance courue. Outil de gank principal."
      dd_spell_id: "HecarimRamp"
    - key: "R"
      name: "Onslaught of Shadows"
      description: "Charge en ligne, dégâts magiques et fear sur les ennemis touchés à la fin. Engage et disengage longue distance pour les teamfights."
      dd_spell_id: "HecarimUlt"
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs gros CC ou dégâts magiques (Lissandra, Syndra, Brand) : swap Plated Steelcaps quand le CC pèse plus que l'armor"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "vs frontline tanks (Ornn, Sion) : l'armor shred des autos et des stacks de Q profite à toute l'équipe"
    - dd_id: "3074"
      name: "Ravenous Hydra"
      against: "vs équipes sans tanks quand il faut wave clear et splitpush (push solo une sidelane pour forcer une réponse)"
    - dd_id: "3161"
      name: "Spear of Shojin"
      against: "vs comps sans burst réel (4-5 fighters/tanks) : plus d'ability haste et d'uptime du R en fights longs"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "vs équipes lourdes en AP (Brand + Karthus + Vladimir) : magic resist et move speed passif qui nourrit Warpath"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "quand on te focus en premier : une seconde vie gratuite te laisse committer plus à fond comme engage"
  base_combo: ["E", "Q", "AA", "R", "W"]
  win_condition: "Exploite le Move Speed croissant de E et Phase Rush pour flank les cibles squishies (carries fragiles type ADC), follow-up avec le fear de R, et cycle Q pendant que W te soigne du burst."
  weakness: "Faible avant le niveau 3 et fragile quand E est en cooldown. Les hard CC type roots (Morgana Q, Lillia R) ou grounds (Cassiopeia W) éteignent ton engage et te laissent sans escape."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8230
      name: "Phase Rush"
      icon_path: "perk-images/Styles/Sorcery/PhaseRush/PhaseRush.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["amumu", "sejuani", "rammus"]
      archetype: "Tank junglers lents sans gank early fort"
      reason: "Hecarim les out-clear et atteint le level 3 avant eux ; il peut invade leur deuxième buff ou counter-gank une lane avant qu'ils n'arrivent. Son scaling sur la vitesse bat le leur sur les stats brutes."
    - examples: ["yuumi", "soraka", "seraphine"]
      archetype: "Enchanters squishy sans peel pour eux-mêmes"
      reason: "E + R permet à Hecarim de rattraper et de fear leur carry depuis hors écran ; dès que le support tombe, l'ADC adverse n'a plus de shields et s'écroule en quelques secondes."
    - examples: ["jhin", "caitlyn", "vayne"]
      archetype: "ADCs immobiles ou avec dash court"
      reason: "Phase Rush plus la charge de E ferment le gap avant qu'ils ne kite ; leur seule sortie (Flash) a un cooldown bien plus long que ton engage."
  counterpicks:
    - examples: ["lillia", "morgana", "cassiopeia"]
      archetype: "Champions avec roots, slows ou grounds qui bloquent le mouvement"
      reason: "Tout le kit d'Hecarim scale avec le Move Speed (Warpath convertit la vitesse bonus en Attack Damage). Une fois rooted ou grounded, il perd à la fois les dégâts et la possibilité de disengage."
    - examples: ["kha-zix", "lee-sin", "elise"]
      archetype: "Junglers forts en early et sur l'invade"
      reason: "Hecarim est faible avant le niveau 3. Ces junglers peuvent invade son deuxième buff, le tuer ou brûler son Flash, et snowball avant qu'il ne s'allume."
    - examples: ["jax", "fiora", "trundle"]
      archetype: "Bruisers duellistes qui punissent le dive en solo"
      reason: "Si Hecarim engage seul (sans follow-up de l'équipe), ils gagnent le 1v1 avec des passifs anti-AD ou des true damage et transforment son commit en kill offerte."
---

## Aperçu

Hecarim est un diver jungler rapide — un fighter qui ferme des distances énormes, knockback l'ennemi dans son équipe, puis colle comme une sangsue grâce à **Devastating Charge (E)** et **Onslaught of Shadows (R)**. Sa passive **Warpath** transforme chaque point de Move Speed bonus en Attack Damage, donc les objets de vitesse sont aussi des objets de dégâts. Le kit est simple à lire mais exigeant sur le timing : tu passeras la majeure partie de la game comme menace mobile qui punit les carries exposés (damage dealers fragiles type ADC et mages).

Le game plan est répétable. Clear vite avec **Rampage (Q)** et **Spirit of Dread (W)** pour atteindre le level 3, puis cherche un gank early sur la lane qui te donne le meilleur angle de charge avec E (les lanes longues et droites sont les meilleures). À partir du mid game, ton job est de flank (entrer dans le fight depuis un côté que personne ne surveille) avec **R**, fear la backline adverse et enchaîner les knockbacks de **E** jusqu'à ce que tout tombe.

## Build Recommandé

**Items de départ :** Mosstomper Seedling (ou Gustwalker Hatchling si tu veux plus de vitesse hors combat) + Refillable Potion. Mosstomper offre un shield à HP plein — parfait pour survivre au premier clear.

**Items core (dans l'ordre) :**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — ton spike d'AD plus une active qui slow (Halting Slash). Le slow on-demand fait la différence entre un gank qui ferme la kill et un dans lequel l'ennemi s'enfuit au Flash.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — armor contre les auto-attaques. Bottes par défaut quand l'équipe adverse a 2+ menaces AD.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP, Tenacity et un gros shield quand tu prends de gros dégâts. C'est l'item qui te permet de committer au fight (entrer à fond sans reculer) et de survivre assez longtemps pour cycler tes abilities.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — convertit les dégâts physiques reçus en saignement étalé (dégâts répartis sur les secondes suivantes au lieu d'être instantanés). Recharge aussi des HP sur takedown, donc tu peux faire all-in (commit total jusqu'à la kill) et ressortir intact.
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — garantit un coup critique sur ton premier auto de chaque fight (parfait avec le knockback de **E**) et te soigne pour un bon paquet de HP. Se marie avec Stridebreaker parce que les deux items veulent que tu places des autos entre les abilities.

**Items situationnels :**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — à la place de Plated Steelcaps quand l'équipe adverse a beaucoup de crowd control ou de dégâts magiques (Lissandra, Syndra, Brand). La tenacity réduit la durée des stuns pour que tu puisses tout de même caster **R**.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — vs frontline tanks (Ornn, Sion). Auto-attaques et stacks de **Q** rongent l'armor pour toute l'équipe.
- ![Ravenous Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3074.png) **Ravenous Hydra** — quand tu veux splitpush une sidelane (push solo pour forcer une réponse) et qu'il te faut plus de wave clear plus de l'omnivamp.
- ![Spear of Shojin](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3161.png) **Spear of Shojin** — vs comps lents sans burst. L'ability haste bonus = plus de fears au **R** et plus de spam de **Q** dans les fights longs.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — vs équipes très AP (Brand + Karthus + Vladimir). Magic resist en stacks et la passive de Move Speed se cumulent avec Warpath : plus de vitesse = plus d'AD.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — quand l'équipe adverse te focus à chaque engage. Te ressuscite pour nettoyer le fight après que ton équipe a déjà brûlé ses abilities.

**Bottes :** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** par défaut ; ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** quand le CC pèse plus que les dégâts auto-attack.

**Skill order :** Maxe **Q** en premier (waveclear, jungle clear, DPS principal), **E** en second (durée de ghost plus longue et cooldown plus bas pour les ganks), **W** en dernier. Mets un point dans **R** aux niveaux 6, 11 et 16.

**Runes :** Primaire **Sorcery** avec **Phase Rush**, **Manaflow Band**, **Transcendence**, **Scorch**. Phase Rush se déclenche après 3 hits d'ability séparés en 4 secondes — facile sur Hecarim avec **E**-auto-**Q** en gank, et le burst de Move Speed devient de l'AD via Warpath. Secondaire **Resolve** avec **Bone Plating** et **Overgrowth**. Prends Conqueror en Precision si l'équipe adverse est pleine de tanks de frontline (tu veux des dégâts croissants en fights longs).

## Matchups clés

- **Lillia :** Son **R** te root depuis l'autre bout de la map. Fais-le brûler en avançant à HP bas, puis commit seulement après qu'elle l'a utilisé. Si elle te touche, ton engage est cuit pour 14+ secondes.
- **Kha'Zix :** Invader fort et assassin. Track-le — si son blue buff manque à 2:30, il est dans ta jungle. Pathing loin de sa route attendue jusqu'au niveau 4, puis groupe-toi avec tes laners pour le reste de l'early.
- **Jarvan IV :** Matchup miroir. Celui qui ulte en premier gagne en général le trade. Garde des wards dans sa jungle pour le repérer et appeler tes laners à reculer ; ne te groupe jamais avec les alliés en zones étroites si son **R** est up.
- **Sejuani :** Tank jungler qui scale. Tu l'out-clear et tu l'out-pressure en early. Force des fights avant la minute 20 ; en late ses stuns et son peel d'équipe battent ton dive solo.
- **Master Yi :** Attention à ton **R**. Yi peut cleanse ton fear avec la chaîne **Q**-**Alpha Strike** en invuln. Garde **R** pour quand son **Q** est en cooldown — attends de la voir l'utiliser sur une wave ou un camp, puis engage dans les 12 secondes suivantes.

## Power spikes & conditions de victoire

- **Niveau 3 (après le premier clear complet) :** première fenêtre de gank. Avec un point en **Q**-**E**-**W** tu peux full-combo une cible qui s'avance trop. Les fights de Crab deviennent réels — tu arrives plus vite que la plupart des junglers.
- **Niveau 6 :** Onslaught of Shadows en ligne. Flanks cross-map et dives de tour deviennent possibles. Si une sidelane a la prio, **R** depuis le brouillard et force le fight.
- **Stridebreaker complet (~ minute 10-12) :** gros flip de tempo. L'active Halting Slash te laisse coller les cibles qui fuient sans brûler **E**. Push direct sur Drake ou Herald après.
- **Sterak's Gage en ligne (~ minute 22-25) :** tu deviens l'engage qui survit aux 2 premières secondes du fight. Cherche des picks (éliminer un ennemi isolé hors du teamfight) sur l'ADC adverse ou le mid laner autour des objectifs.

## Erreurs courantes

- **Spammer Q sans auto-attaques entre les casts.** Warpath te donne de l'AD via la vitesse — laisse les autos entrer dans les espaces. Animation cancel : cast **Q**, hard-clic une auto, cast **Q** à nouveau.
- **Ulter dans la frontline.** **R** est un outil de flank, pas d'engage frontal. Fear le tank adverse le renvoie vers son ADC pour peel. Contourne le fight (utilise vision ou fog), puis **R** direct sur les carries.
- **Engage sans ton équipe à portée de vision.** Tous les dégâts d'Hecarim se résument à "knockback dans l'équipe qui follow-up". Si tes laners ne sont pas à 2 secondes de te rejoindre, la kill ne va à personne et tu meurs dans leur jungle.
- **Build full damage à 1/3.** Quand tu es en retard et que tu ne snowball pas (snowball = avantage croissant qui s'auto-alimente), Sterak's plus Sundered Sky te gardent utile comme engage. Faire Ravenous Hydra second sur une partie perdue te transforme en dive bot 2-shot.
- **Gaspiller le ghost de E sur des minions.** **E** te laisse traverser les unités uniquement pendant sa courte fenêtre. Garde-le pour quand il faut passer une wave ou une ward — ne le brûle pas en cooldown dans la jungle.

## Conseil avancé

Utilise une rotation "fake-flank" autour des objectifs de mid game. Marche en vision dans ta propre jungle pour que l'ennemi te track sur sa minimap, puis recule immédiatement dans le fog of war (les zones sombres que tu ne vois pas) et fais le tour. Quand l'adversaire s'est tourné en pensant que tu es toujours où il t'a vu en dernier, **R** depuis le côté qu'il n'attend pas. L'astuce dépend de la Move Speed brute d'Hecarim : la plupart des junglers ne peuvent pas la jouer parce qu'ils ne couvrent pas la distance à temps. Avec Phase Rush plus Stridebreaker active, toi si.
