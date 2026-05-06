---
title: "Irelia Top Build & Guide — Patch 16.9"
slug: "irelia-top"
language: "fr"
patch: "16.9"
champion: "irelia"
role: "top"
last_updated: "2026-04-29"
description: "Guide Irelia top lane pour League of Legends Patch 16.9 : starter kit, build core Trinity Force, matchups clés, power spikes, erreurs courantes et un conseil final."
quick_learn:
  champion_dd_id: "Irelia"
  difficulty: 5
  damage_type: "mixed"
  champion_class: "Fighter / Skirmisher"
  abilities:
    - key: "P"
      name: "Ionian Fervor"
      description: "Toucher un ennemi avec un sort donne des stacks d'Attack Speed (max 4). À pleins stacks, Irelia inflige aussi des dégâts magiques bonus on-hit."
      dd_spell_id: "Irelia_Passive"
    - key: "Q"
      name: "Bladesurge"
      description: "Dash qui frappe une cible et soigne. Le cooldown reset si la cible meurt ou est Marked — c'est le Q reset (chaîne les dashs minion à minion)."
      dd_spell_id: "IreliaQ"
    - key: "W"
      name: "Defiant Dance"
      description: "Channel d'un coup chargé qui monte en dégâts et réduit les dégâts physiques et magiques reçus pendant la charge (channel = maintenir pour charger)."
      dd_spell_id: "IreliaW"
    - key: "E"
      name: "Flawless Duet"
      description: "Pose une lame, recast pour la deuxième. Elles volent l'une vers l'autre, stunnent et appliquent Mark sur tout au milieu. Outil principal de setup."
      dd_spell_id: "IreliaE"
    - key: "R"
      name: "Vanguard's Edge"
      description: "Volée de lames longue portée qui applique Mark aux champions touchés, puis forme un mur autour du premier champion qui ralentit et inflige des dégâts. Engage et zoning."
      dd_spell_id: "IreliaR"
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
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contre les gros dégâts magiques ou le CC chaîné (Lissandra, Ryze, Malphite — la tenacity réduit stuns et slows)"
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "contre les kiters et tops ranged (Vayne, Gnar, Kennen) — dash + slow au cast aident à stick sur cibles mobiles"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "contre tanks qui empilent l'armor (Malphite, Ornn, Sion) — l'armor shred amplifie les Q répétées et le follow-up"
    - dd_id: "3074"
      name: "Ravenous Hydra"
      against: "contre comps splitpush où il faut waveclear et sustain 1v1 (lifesteal en AOE = cleave de zone + soin)"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "Pose la E pour le stun, Q-reset à travers la wave pour stick sur la cible, puis trade avec les stacks de passive actifs. Snowball la lane (transforme une avance early en avance plus large) vers les skirmishes mid-game."
  weakness: "Sans E touchée, aucun engage fiable. Le poke longue portée et le disengage t'éteignent avant que tu n'atteignes la front line. Sans Trinity Force ou Stridebreaker, tu te fais kite proprement."
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
    - examples: ["malphite", "ornn", "sion"]
      archetype: "Tanks lents et immobiles sans poke ranged"
      reason: "Ils n'ont aucun disengage contre le stun de la E ni de réponse aux Q resets à travers la wave ; tu les out-trade à chaque niveau dès que Conqueror commence à stack."
    - examples: ["nasus", "garen", "darius"]
      archetype: "Juggernauts melee sans dash"
      reason: "E + Q te donnent le gap-close et la réduction de dégâts du W couvre leur fenêtre de burst ; ils ne peuvent ni te kite ni échapper au stun."
    - examples: ["azir", "ryze"]
      archetype: "Mages mid-range flex top"
      reason: "Squishys courte portée (HP bas, défenses basses) sans dash : one-shot dès que Trinity Force est terminée et que tu leur passes les stacks pleins de passive."
  counterpicks:
    - examples: ["vayne", "kennen", "gnar"]
      archetype: "Tops ranged ou kiters"
      reason: "Ils t'auto-attack hors de portée de E, kite ta Q avec leur propre dash ou transformation, et punissent chaque approche. Tu as besoin de Stridebreaker juste pour engage."
    - examples: ["fiora", "camille", "jax"]
      archetype: "Duelists avec counter point-and-click ou true damage"
      reason: "Fiora pare la E ou la R, le E hookshot de Camille stun à travers ton dash, le E de Jax stun et outscale ta passive AS sur trade prolongé."
    - examples: ["malzahar", "renekton"]
      archetype: "Lane bullies avec outils anti-skirmisher"
      reason: "Le suppress de Malzahar (silence point-and-click + lockdown) annule tes Q resets ; le W empowered de Renekton stun à travers ton W en charge et clôt le trade avant que tu ne scale."
---

## Aperçu

Irelia est une skirmisher melee (un fighter qui gagne par échanges courts répétés au lieu d'un seul gros burst). Elle vit ou meurt sur les dashs de **Bladesurge (Q)**. La Q a un long cooldown de base mais **reset** (cooldown restauré instantanément) à chaque fois qu'elle tue un minion ou touche une cible avec le debuff Mark (une petite icône que les sorts d'Irelia appliquent aux ennemis). Une seule skirmish peut chaîner quatre ou cinq dashs d'affilée. Sa passive **Ionian Fervor** stack l'Attack Speed jusqu'à quatre fois quand elle touche des sorts (chaque sort ajoute un stack, jusqu'à quatre), et le cinquième stack ajoute des dégâts bonus et de la réduction de crowd-control.

Le game plan en top lane est simple à décrire et exigeant à exécuter. Utilise **Flawless Duet (E)** pour poser le stun (ça demande une petite fenêtre de setup), enchaîne **Q** sur la cible stun, **W** pour mitiger les dégâts en retour, et Q-reset à travers la wave pour disengage ou poursuivre. Après le niveau 6, **Vanguard's Edge (R)** transforme les skirmishes de lane en kills en ajoutant du zone control et un second Mark pour des Q resets gratuits. En mid-game, tu roam à travers la wave avec les Q resets pour chercher des pickoffs (éliminer un ennemi isolé hors du teamfight) et rotate sur les objectifs.

## Build Recommandé

**Items de départ :** Doran's Blade + 1 Health Potion. Prends Doran's Shield uniquement contre les lanes de harass ranged (Kennen, Quinn, Vayne) où tu as besoin de la regen.

**Items core (dans l'ordre) :**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — ton spike principal. La passive Sheen (effet intégré qui se déclenche, en jargon "proc", sur la prochaine basic attack après un sort) combo avec chaque Q dash ; l'Ability Haste baisse le cooldown de la Q ; l'Attack Speed complète le stack de la passive.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — bottes par défaut contre les équipes AD lourdes. Achète après Trinity si la lane est melee ou AD ranged.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP, scaling AD, et un shield à bas HP qui rend tes fenêtres de dive survivables.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — convertit les dégâts physiques reçus en saignement étalé sur quelques secondes (dégâts répartis dans le temps, pas instantanés). Achète contre des équipes avec deux gros physical damage dealers (ex. Yasuo + Caitlyn) : tu survis à la fenêtre de burst assez longtemps pour Q-out.
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — crit garanti sur la première basic attack contre un champion, plus heal. S'imbrique parfaitement avec le cycle Sheen + Q reset.

**Items situationnels :**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — contre les gros dégâts magiques ou le CC chaîné (Lissandra, Ryze, Malphite). La tenacity réduit la durée des stuns et slows.
- ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — mythic alternatif contre les kiters et tops ranged (Vayne, Gnar, Kennen). L'active dash + slow te donne un gap-closer hors-Q.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — contre les tanks qui empilent l'armor (Malphite, Ornn, Sion). L'armor shred amplifie les Q répétées et le follow-up de l'équipe.
- ![Ravenous Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3074.png) **Ravenous Hydra** — quand tu splitpush (push une side lane seul pour forcer une réponse). AOE cleave plus lifesteal rendent triviaux les 1v1 et le waveclear.

**Bottes :** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** par défaut. Switch sur ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** quand l'équipe adverse a 2+ sources de CC chaîné.

**Skill order :** Maxe **Q** en premier (cooldown plus court = plus de resets, plus de dégâts), **E** en second (setup du stun), **W** en dernier. R aux niveaux 6, 11, 16.

**Runes :** Arbre primaire **Precision** avec **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Secondaire **Resolve** avec **Bone Plating** et **Revitalize**. Prends **Press the Attack** au lieu de Conqueror contre les lanes de burst où les trades courts gagnent la lane (ex. Pantheon, Renekton early) : Press the Attack récompense 3 hits en 4 secondes par un spike de dégâts au lieu de stack sur un long fight.

## Matchups clés

- **Renekton :** Lane bully. Reste safe pré-3, dodge son W stun et farme sous tour. Le power swing arrive au niveau 6 avec la R ; ne trade qu'après que **W** puisse absorber son combo.
- **Fiora :** Elle pare ton E stun et le Mark de la R avec sa **Riposte (W)**. Bait la parry en flick une seule lame de E en feinte, puis commit Q seulement quand son W est en cooldown.
- **Malphite :** Lane gratuite pré-6 : dodge son E slow et Q-reset à travers la wave pour le harass. Après 6, il peut flash-R sur ton équipe — group avec les alliés sur les objectifs et n'extend pas (push au-delà de la rivière sans backup) sans vision wards.
- **Vayne :** Hard counter sauf si elle misplay. Elle te kite (recule en attaquant pour garder la distance) la Q avec **Tumble (Q)** et te grignote les HP avec **Silver Bolts (W)**. Build Stridebreaker en premier, freeze la wave près de la tour (garde la wave immobile près de ta tour pour qu'elle ne last-hit pas en sécurité), et call les ganks du jungle avant le niveau 6.
- **Camille :** À peu près égal. Son **Hookshot (E)** stun à travers ton dash ; garde **Flawless Duet** pour la stun en plein hookshot. Celui qui pose son setup CC en premier gagne le trade.

## Power spikes & conditions de victoire

- **Niveau 3 :** Les trois abilities de base online. Tu peux poser E stun + Q + auto-attack + W pour une fenêtre complète de trade en stackant la passive.
- **Niveau 6 :** **Vanguard's Edge (R)** débloque une fenêtre d'all-in (commit total au kill). Le Mark de la R te donne un Q reset gratuit à travers la cage ; ult une cible bas HP quand ton jungler se montre.
- **Trinity Force terminée (~ minute 14-16) :** Tes dégâts par Q grimpent grâce aux procs de Sheen. Le contrôle de wave bascule : tu peux shove et roam vers les objectifs avec des Q resets à travers la wave latérale.
- **3 items (Sterak's online, ~ minute 24-28) :** Tu deviens une skirmisher de teamfight : dive la back line (les carries squishys derrière leurs tanks) via les Q resets, survis leur burst avec le shield Sterak's + W, et nettoie avec la cage de la R.

## Erreurs courantes

- **Spam Q sans setup.** Q nue sur une cible sans Mark mange le long cooldown de base pour un seul dash. Pose toujours d'abord le **E** stun, ou chaîne Q sur un minion bas HP pour garder le cycle de reset vivant.
- **Garder W trop longtemps pendant un stun.** **Defiant Dance** est un channel : tu ne peux ni bouger ni attaquer pendant la charge. Tap-cancel après la fenêtre de réduction de dégâts si l'ennemi disengage — ne reste pas à channeler le release max si personne n'est à portée.
- **Engage à travers une parry.** Fiora **W**, Sivir spell shield, Olaf R : tous mangent ton E stun gratuitement. Bait ces abilities d'abord, puis commit ton CC.
- **Splitpush pré-Trinity.** Sans Trinity, tes dégâts sur tours et waves sont faibles ; tu cèdes du tempo pour rien. Garde la wave près de la tour jusqu'à ce que Trinity soit online, puis push la side lane.
- **Ult une seule cible avec l'équipe groupée.** **R** en cage sur un seul squishy est gâchée si leur tank peut body-block. Vise R pour clip 2-3 ennemis à travers un choke (un couloir étroit de jungle) et laisse la cage zone la back line hors du fight.

## Conseil avancé

Travaille le combo **R-flash** : cast **Vanguard's Edge** dans une direction, puis **Flash** immédiatement dans une autre pour rediriger la volée de lames. Les lames suivent la position d'Irelia, donc un flash perpendiculaire à la ligne de cast te permet de cage un champion qui se croyait safe hors de portée de R. Utilise-le comme outil d'engage quand ton équipe a besoin d'un pickoff (éliminer un ennemi isolé) sur un carry en fuite près du pit du dragon ou du baron.
