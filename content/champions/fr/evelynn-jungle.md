---
title: "Evelynn Jungle Build & Guide — Patch 16.9"
slug: "evelynn-jungle"
language: "fr"
patch: "16.9"
champion: "evelynn"
role: "jungle"
last_updated: "2026-05-02"
description: "Guide Evelynn jungle pour League of Legends Patch 16.9 : route de gank avec Demon Shade Camouflage, build core Lich Bane, matchups clés, power spikes et erreurs courantes."
quick_learn:
  champion_dd_id: "Evelynn"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Assassin / Stealth Jungler"
  abilities:
    - key: "P"
      name: "Demon Shade"
      description: "Hors combat, Evelynn entre en Demon Shade. Soins à bas HP et Camouflage à partir du niveau 6 — invisible aux wards et aux ennemis hors d'un petit rayon."
      dd_spell_id: "Evelynn_Passive"
    - key: "Q"
      name: "Hate Spike"
      description: "Le Lasher d'Evelynn frappe l'ennemi le plus proche, puis tire jusqu'à trois salves de spikes sur les cibles autour. Clear de jungle et DPS principal en combo."
      dd_spell_id: "EvelynnQ"
    - key: "W"
      name: "Allure"
      description: "Maudit un ennemi. Après un court délai, le prochain coup ou sort d'Evelynn applique un charm et réduit la résistance magique. Lance-le depuis Demon Shade pour le setup le plus propre."
      dd_spell_id: "EvelynnW"
    - key: "E"
      name: "Whiplash"
      description: "Dash sur la cible, dégâts magiques et un bref move speed. Depuis Demon Shade, devient un long bond avec dégâts bonus et reset d'autoattack."
      dd_spell_id: "EvelynnE"
    - key: "R"
      name: "Last Caress"
      description: "Brève fenêtre untargetable, puis cône de gros dégâts magiques devant elle avant un blink en arrière. Dégâts bonus sous 30% HP — ton execute."
      dd_spell_id: "EvelynnR"
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
    - { level: 10, key: "E" }
    - { level: 11, key: "R" }
    - { level: 12, key: "E" }
    - { level: 13, key: "E" }
    - { level: 14, key: "W" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "3100", name: "Lich Bane" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3135"
      name: "Void Staff"
      against: "dès que 2+ ennemis achètent un item de Magic Resist — pénétration magique en pourcentage qui scale avec leur MR"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contre lockdown single-target qui punit l'animation de ta R (Veigar cage, Lissandra R, Malzahar R)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contre comps qui empilent les soins (Soraka, Vladimir, Dr. Mundo, Aatrox) — Grievous Wounds, soins divisés par deux"
  base_combo: ["W", "AA", "E", "Q", "R"]
  win_condition: "Pickoff sur ennemis isolés post-6 avec W charm en R execute. Camouflage de Demon Shade pour invade et gank sans avertissement de vision. Snowball le lead jungle, cible les squishies."
  weakness: "Pré-6 zéro pression de gank — pas de Camouflage, pas de portée de charm. Counter dur des Control Wards et de la lane prio. Si les ennemis groupent avec peel, tu n'atteins pas la carry."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8128
      name: "Dark Harvest"
      icon_path: "perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination primaire : Dark Harvest snowball sur les pickoffs isolés — le plan d'Evelynn. Sudden Impact proc après le warp R et le W charm pour plus de burst. Sixth Sense révèle les wards et garde la Camouflage utile. Ultimate Hunter coupe le CD de la R."
    secondary_rationale: "Sorcery secondaire plutôt qu'Inspiration ou Resolve : Evelynn a besoin de scaling AP pur pour one-shot la carry, pas d'utility. Manaflow Band tient le mana pour spam de Q en clear, Gathering Storm donne de l'AP gratuit toutes les 10 minutes pour le W+R late."
    secondary_alternative: "Si l'enemy team a 4+ squishies et peu de peel, échange Sorcery contre Precision avec Presence of Mind (refund mana au takedown) et Coup de Grace (+8% sous 40% HP) pour enchaîner les executes."
matchup_draft:
  pick_into:
    - examples: ["jinx", "twitch", "kog-maw"]
      archetype: "Hyper-carries immobiles"
      reason: "Carries sans dash ni blink meurent instantanément à un W charm en R : aucun outil pour quitter le cône de ton warp untargetable avant qu'il atterrisse."
    - examples: ["soraka", "yuumi", "seraphine"]
      archetype: "Healers de backline sans escape"
      reason: "Une fois en backline via la Camouflage de Demon Shade, ces enchanters meurent en un W+R avant d'avoir cast leur kit défensif."
    - examples: ["master-yi", "karthus", "amumu"]
      archetype: "Junglers de farm lent"
      reason: "Junglers qui veulent farmer et scale : Evelynn invade, vole les camps et gank avec Camouflage post-6, les forçant à défendre au lieu de scale."
  counterpicks:
    - examples: ["lee-sin", "kha-zix", "rengar"]
      archetype: "Duellistes early-game lethality"
      reason: "Le Q de Lee Sin et le saut de Rengar couvrent la distance avant le niveau 6 — sans Camouflage ni R, Evelynn perd les invades pré-6 et les 1v1 sans appel."
    - examples: ["lulu", "tahm-kench", "morgana"]
      archetype: "Enchanters qui peelent la carry"
      reason: "La R de Lulu rend la carry invulnérable, Tahm Kench la mange, le E de Morgana donne un Spell Shield : chacune annule la combo W+R pile au moment où elle devrait tuer."
    - examples: ["nautilus", "leona", "thresh"]
      archetype: "Supports vision lourde + CC d'engage"
      reason: "Ils achètent un Control Ward au premier back, te voient en Demon Shade en lane, et la chaîne de CC (Naut Q, Leona E+R) tombe avant que ton W charm ne sorte."
---

## Aperçu

Evelynn est la seule championne de League avec un stealth intégré qui scale par niveau : à partir du niveau 6, sa passive **Demon Shade (P)** lui donne le Camouflage hors combat, c'est-à-dire que les ennemis ne la voient pas tant qu'ils ne sont pas dans un petit rayon autour d'elle — même les Control Wards (les trinkets roses spéciaux que les ennemis posent pour révéler le stealth) ne la détectent pas à pleine distance. Toute son identité repose là-dessus. C'est une assassine à dégâts magiques sans véritable waveclear ni puissance de duel avant le 6, mais à l'instant où **Last Caress (R)** est débloqué, elle devient le jungler pickoff (champion construit pour éliminer un ennemi isolé à la fois, hors des teamfights complets) le plus fiable du jeu : tu marches invisible jusqu'à la backline ennemie (l'arrière de la formation où se tiennent les carries squishies — champions à gros dégâts et faibles défenses), tu charm la carry avec **Allure (W)**, et tu la supprimes en une combo avant que n'importe quel peel (capacités d'alliés qui protègent la carry, comme le shield de Janna ou l'ult de Lulu) ne puisse réagir.

Le plan de partie est brutal de simplicité : farme jusqu'au 6 sans mourir, cherche un gank sur une lane à bas HP qui n'a pas de wards de vision proches (petits yeux invisibles posés par les alliés pour voir le fog of war), et à partir de là chasse une cible isolée chaque fois que **R** est dispo. L'expression du skill est dans la lecture du pathing (où peux-tu marcher Camouflaged sans trigger un ward ?) et dans le timing du commit (ne te commit pas avec **R** si la carry a un summoner de peel comme Cleanse ou un peeler comme Lulu à proximité). Si tu snowball les deux premiers picks (transformer une avance early en plus de kills, plus d'or, plus d'items), l'enemy team se groupe, tu scale (gagnes en puissance avec items et niveaux) jusqu'au range one-shot avec ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap**, et tu ferme la game depuis l'invisibilité.

## Build Recommandé

**Items de départ :** ![Emberknife](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1035.png) **Emberknife** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Starter standard de jungler corps-à-corps — pas d'exception pour Evelynn.

**Items core (dans l'ordre) :**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade depuis Emberknife (auto-évolue vers la minute 3-4 quand le pet de jungle a mangé assez de monstres). Le compagnon pour le burst d'AP (Ability Power, la stat qui scale les dégâts magiques) : ajoute un effet de dégâts magiques qui s'active (un "proc") sur l'autoattack juste après un sort, parfaitement aligné avec **Lich Bane** plus tard.
2. ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** — le spike signature d'Evelynn. Chaque fois que tu lances un sort, ton prochain basic attack ajoute un énorme bonus de dégâts magiques, et le charm de **W** + le reset d'autoattack de **E** (effet qui te laisse tirer un nouveau basic attack immédiatement, en ignorant le délai normal d'attack speed) te permettent d'enchaîner deux procs de **Lich Bane** en moins d'une seconde.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — pénétration magique fixe (retire une quantité fixe de la magic resist de la cible, faisant taper plus fort tes sorts). Standard pour tout AP burster qui cible les squishies.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — AP et magic penetration en plus ; la passive à seuil de HP (passive qui s'active quand la cible est sous un seuil bas, autour de 35%) s'aligne pile avec le cône d'execute de ta **R**.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicateur late-game sur tout ton AP. Le quatrième ou cinquième slot c'est là qu'Evelynn passe en range "one-shot la carry depuis HP plein".

**Items situationnels :**

- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — dès que 2 ennemis ou plus achètent un item de magic resist.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contre lockdown single-target (Veigar cage, Lissandra R, Malzahar R). La stasis couvre les recovery frames après la **R**.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contre comps empilant les soins (Soraka, Vladimir, Dr. Mundo, Aatrox). Applique Grievous Wounds, divise par deux les soins reçus.

**Bottes :** Sorcerer's Shoes par défaut. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** acceptables uniquement quand l'enemy team a très peu de magic resist et que ton équipe a besoin de plus d'uptime de **R** (casts plus fréquents) comme finisher de fight.

**Skill order :** Max **Q** en premier (clear jungle et DPS principal), **E** en deuxième (mobilité et scaling de dégâts sur le reset), **W** en dernier (le cooldown compte plus que le rank). Un point en **R** aux niveaux 6, 11, 16.

**Runes :** Primaire **Domination** avec **Dark Harvest**, **Sudden Impact**, **Sixth Sense**, **Ultimate Hunter**. Secondaire **Sorcery** avec **Manaflow Band** et **Gathering Storm**. Stat shards : Adaptive Force, Adaptive Force, Health Scaling. Bascule la secondaire en **Precision** (Presence of Mind + Coup de Grace) quand l'enemy team est presque entièrement squishy et que tu veux la consistance d'execute.

## Matchups clés

- **Lee Sin / Rengar (jungle ennemi) :** Menaces d'invade pré-6. Ne conteste pas le scuttle niveau 3 — track-les avec la vision et fais ton full clear en sécurité. Une fois au 6 le matchup s'inverse : tu marches dans leur jungle en Camouflage et tu gank les lanes non wardées.
- **Lulu (support ennemi) :** Le peel le plus dur du jeu pour une assassine. Brûle sa **R** avec un fake commit (commence ton **W** charm mais recule si elle ult), puis re-engage sur la cible quand l'ult de Lulu est en cooldown.
- **Tahm Kench (support ennemi) :** Il mange la carry avec **W** à l'instant où ta **R** atterrit. Attends qu'il utilise **W** sur autre chose (une wave de minions, un tank en engage), puis commit. S'il est full mana et regarde son ADC, cherche une autre cible.
- **Karthus (jungle ennemi) :** Course au scaling. Il te bat au farm, tu le bats aux pickoffs. Si Karthus atteint le niveau 16 avec full items tu perds : force des ganks chaque fois que sa **R** est down pour denier le scaling et ferme la game avant la minute 30.
- **Pyke (support ennemi) :** Hard counter à ton pattern "execute à bas HP". Sa **R** execute aussi à bas HP, et ses roams mettent ton pathing jungle sous pression de vision. Achète ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** plus tôt que d'habitude pour esquiver sa fenêtre d'execute après ton commit.

## Power spikes & conditions de victoire

- **Niveau 6 (premier R débloqué) :** Ta vraie game commence ici. Demon Shade gagne le Camouflage, **R** se débloque, et toute lane sans wards de vision (les petits yeux invisibles que les alliés posent pour voir le fog of war) est un free kill. Path vers la lane avec les ennemis au plus bas HP.
- **![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) Lich Bane fini (~ minute 12-14) :** Le saut de "il faut 2 sorts pour tuer" à "tue avec une combo W+AA+E+Q+R sur un squishy" arrive pile sur cet item. Chasse les pickoffs dès qu'il finit.
- **![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) Shadowflame (~ minute 18-20) :** La passive à seuil de HP s'aligne avec le cône d'execute de ta **R**. Après cet item, tout squishy sous 60% HP est mort en une combo.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minute 26-30) :** Range complet d'one-shot sur les carries de backline depuis 100% HP. Force un 5v5 autour de Baron dès que Deathcap finit — ton équipe commence le fight 5v4 à l'instant où ta combo atterrit.

## Erreurs courantes

- **Gank pré-6 parce que ton équipe ping.** Tu n'as pas de portée de charm, pas de Camouflage, et rien pour surprendre l'ennemi. Pré-6 tu farmes et tu cherches du counter-jungle sur les ennemis que tu surclasses en niveau. Dis à tes laners : "je gank au 6".
- **Cast W hors de Demon Shade.** Quand tu es visible (en combat ou à bas HP), l'ennemi voit l'animation du **W** et peut pre-flash le charm. Toujours préparer le gank en arrivant en Camouflage, puis **W** à 1100+ de range.
- **Utiliser R pour les dégâts au lieu de l'execute.** La **R** fait des dégâts bonus sous 30% HP. La brûler sur une cible full HP gâche le spike — ouvre avec la combo **W+E+Q**, puis **R** à l'instant où ils passent sous le seuil d'execute.
- **Tunnel vision sur la kill.** La **R** te warp sur une longue distance vers l'arrière après le cast. Si tu es au milieu de l'enemy team quand tu la presses, tu warp dans rien d'utile. Positionne-toi pour que le warp te tire vers ton équipe ou vers le fog of war (la zone de jungle non wardée), pas plus profond chez les ennemis.
- **Refuser de back à HP plein.** Demon Shade hors combat te soigne lentement même à full mana. Si tu as 1300+ d'or pour un composant de dégâts comme ![Hextech Alternator](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3145.png) **Hextech Alternator** ou un composant de mana comme ![Lost Chapter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3802.png) **Lost Chapter**, back. Tourner avec full HP et 0 or, c'est du temps perdu.

## Conseil avancé

La combo double-proc de ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** : après que le **W** charm atterrit, animation-cancel un autoattack vers **E** (Whiplash depuis Demon Shade a un reset d'autoattack intégré). L'ordre c'est **W → AA → E → AA → Q → R**. Chacun des deux autoattacks consomme un proc frais de **Lich Bane** parce que **E** compte comme un cast de sort et reset ton timer d'autoattack. Sur un squishy sans magic resist, cette combo fait à peu près 1.5x les dégâts de l'ouverture paresseuse **W → R** que la plupart des Evelynn de bas rank utilisent, et te permet de supprimer une carry à 1800 HP depuis HP plein avec 3 items au lieu d'en avoir besoin de 4.
