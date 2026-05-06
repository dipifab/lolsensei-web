---
title: "Gragas Top Build & Guide — Patch 16.9"
slug: "gragas-top"
language: "fr"
patch: "16.9"
champion: "gragas"
role: "top"
last_updated: "2026-05-02"
description: "Guide complet Gragas top lane pour League of Legends Patch 16.9 : starter kit, build AP bruiser, matchups clés, power spikes, erreurs courantes et un conseil final."
quick_learn:
  champion_dd_id: "Gragas"
  difficulty: 2
  damage_type: "magic"
  champion_class: "AP Bruiser / Skirmisher"
  abilities:
    - key: "P"
      name: "Happy Hour"
      description: "Lancer une compétence soigne Gragas (cooldown interne 5 secondes). Sustain gratuit en lane qui lui permet de gagner les matchups de poke sur la durée."
      dd_spell_id: "Gragas_Passive"
    - key: "Q"
      name: "Barrel Roll"
      description: "Roule un tonneau jusqu'à un point. Relance pour détoner, sinon explose à 4 secondes. Dégâts et slow montent avec la charge — attends le max avant de détoner pour le poke."
      dd_spell_id: "GragasQ"
    - key: "W"
      name: "Drunken Rage"
      description: "Channel d'1 seconde : 30% de damage reduction pendant 3 secondes et la prochaine auto-attack inflige des dégâts magiques bonus. Outil principal de trade en lane."
      dd_spell_id: "GragasW"
    - key: "E"
      name: "Body Slam"
      description: "Dash qui s'arrête au premier ennemi touché, dégâts AOE et stun d'1 seconde. C'est ton gap-close, ton escape et ton seul hard CC — ne le gaspille jamais sur une wave."
      dd_spell_id: "GragasE"
    - key: "R"
      name: "Explosive Cask"
      description: "Lance un tonneau qui repousse les ennemis hors du centre d'impact. En top, sert à projeter le laner adverse dans le gank du jungler ou à peeler un tower-dive."
      dd_spell_id: "GragasR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
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
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "4629", name: "Cosmic Drive" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contre assassins AD ou duellistes split-push (Camille, Fiora) : la stasis annule leur execute après le dash"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contre CC magique single-target (Lissandra R, suppression Malzahar) : le spell shield bloque le lockdown"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "contre lanes AD-heavy (Renekton + Kha'Zix, Aatrox + Lee Sin) : la réduction de dégâts physiques bat la tenacity"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "contre comps qui empilent les heals (Aatrox, Vladimir, Dr. Mundo) : magic pen et zone de healing-reduction sur la R"
  base_combo: ["W", "AA", "Q", "E"]
  win_condition: "Out-sustain les bruisers melee en lane avec Happy Hour et la damage reduction de W ; atteins Riftmaker vers la minute 13, puis cherche un flip R dans le gank du jungler pour snowball une tour ou un Drake."
  weakness: "Artillerie longue portée et top laners ranged (Vayne, Quinn, Teemo, Kennen) te poke hors du range Q. Sans E disponible, plus d'engage ni d'escape — gaspiller E en harass équivaut à throw la lane."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8446, name: "Demolish", icon_path: "perk-images/Styles/Resolve/Demolish/Demolish.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve plutôt que Sorcery : Gragas trade en melee et a besoin de HP, pas de burst max. Aftershock proc sur le stun Body Slam et donne des résistances. Demolish convertit un back en plate de tour, Conditioning et Revitalize scale en late."
    secondary_rationale: "Sorcery secondaire : Manaflow Band sustain le mana pour spam Q tout au long de la lane, et Transcendence pousse l'Ability Haste au-delà du spike Cosmic Drive pour des cooldowns E et R plus courts en side lane mid-game."
    secondary_alternative: "Contre top laners ranged (Vayne, Teemo, Quinn) où le sustain compte plus que les dégâts, swap Sorcery en Inspiration avec Biscuit Delivery (potions gratuites) et Time Warp Tonic (sustain potion + Movement Speed) pour une build healing."
matchup_draft:
  pick_into:
    - examples: ["darius", "garen", "sett"]
      archetype: "Bruisers melee sans dash"
      reason: "Ils doivent avancer pour last-hit ; le poke Q-W-AA de Gragas les chip hors de leur fenêtre d'all-in, et la damage reduction de W affaiblit leur commit pré-6 face au counter-trade de Gragas."
    - examples: ["kennen", "vladimir"]
      archetype: "Top laners AP squishies"
      reason: "La damage reduction flat de Drunken Rage absorbe le combo stun-burst de Kennen et le poke Q de Vladimir. Gragas peut répondre en E-AA-Q pendant que leurs ressources sont engagées dans le trade."
    - examples: ["mordekaiser", "ryze"]
      archetype: "Mages skill-shot et channel"
      reason: "Body Slam interrompt le wind-up du Q de Mordekaiser et le combo channel de Ryze, puis Gragas sort avec la damage reduction W. Tous deux perdent la priorité de lane dès que leur cycle de cast est cassé."
  counterpicks:
    - examples: ["vayne", "quinn", "teemo"]
      archetype: "Top laners ranged"
      reason: "Ils auto-attack Gragas hors du range Q et s'éloignent du commit E. Sans moyen de close gap répétitif, Gragas est chip à mi-HP avant le niveau 3 et forcé de back."
    - examples: ["fiora", "camille"]
      archetype: "Bruisers à true damage et pression d'execute"
      reason: "Les vital de Fiora infligent du true damage qui ignore les résistances de Gragas ; la R de Camille l'isole pour un execute true-damage en pourcentage. Les stats tank de Gragas ne tiennent pas en 1v1 face à l'un ou l'autre."
    - examples: ["malphite", "ornn"]
      archetype: "Top laners tank hard-engage"
      reason: "Leur CC s'enchaîne plus longtemps que la fenêtre d'Aftershock. Ils égalisent l'engage de Gragas avec le leur et le dépassent en scaling vers le late grâce aux steroids de résistance intégrés."
---

## Aperçu

Gragas top est un AP bruiser (un fighter qui build de l'AP pour les dégâts mais empile assez de HP pour survivre aux dives front-line) qui gagne la lane par le poke (chip damage à distance sûre) et le sustain (régen passive de HP en combat), puis transitionne vers un rôle d'engage en teamfight autour de **Explosive Cask (R)**. **Happy Hour (P)** lui rend des HP à chaque sort lancé, donc un pattern de trade Q → W → AA (auto-attack) saigne le laner adverse sans saigner Gragas. **Drunken Rage (W)** est une fenêtre de 30% de damage reduction — son outil le plus sous-estimé, parce qu'il lui permet d'absorber l'all-in (commit total au damage) adverse et de counter-trader avec un stun gratuit de **E**.

Plan de partie : domine les lanes melee avec le poke Q jusqu'au niveau 6, puis cherche des flips de **R** qui projettent le laner adverse dans le gank du jungler ou sous ta tour. À partir de là, scale (monte en puissance avec items et niveaux) avec **Riftmaker** et **Cosmic Drive**, group à la minute 25 et joue l'engage primaire de l'équipe (le champion qui lance le combat). Évite les matchups ranged — si tu y es coincé, joue passif, farme sous tour avec Q et appelle ton jungler.

## Build Recommandé

**Items de départ :** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Starter sustain standard qui te permet de tank le poke Q des matchups ranged assez longtemps pour atteindre Riftmaker.

**Items core (dans l'ordre) :**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — item AP burn soutenu avec omnivamp (life-steal qui marche sur tous les types de dégâts, pas que les basic attacks). Les trades prolongés de Gragas en font le plus gros spike single-item de son arsenal.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — la tenacity réduit la durée des stuns. Bottes par défaut en top lane parce que la majorité des matchups ramène au moins un CC (stun Renekton, root Camille, stun Sett).
3. ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — Ability Haste plus un steroid de Movement Speed après avoir touché un champion. Te laisse tourner autour du combat pour placer un second stun **E** avant la fin du premier cooldown.
4. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — Ability Haste plus burn magique en pourcentage de max HP qui ramp avec la durée du combat. Quatrième item contre toute équipe avec deux frontliners ou plus.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicateur de late game. Cinquième item quand l'équipe est groupée et que tu vises le burst de teamfight plutôt que le splitpush.

**Items situationnels :**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contre assassins AD (Zed, flank Talon) ou duellistes split-push (Camille, Fiora). Active la stasis juste après **R** pour annuler la fenêtre d'execute.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contre CC magique single-target (**R** de Lissandra, suppression Malzahar). Le spell shield bloque le lockdown qui annulerait sinon ton flip **R**.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — contre lanes AD-heavy (Renekton + jungler AD). Remplacent Mercury's Treads quand il n'y a pas de menace CC majeure.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — contre comps qui empilent les heals. Le R-active dépose une zone de healing-reduction liée au knockback.
**Bottes :** ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** par défaut. Swap en ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** en games AD-heavy, ou ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** si la lane est one-shot et que tu veux passer en build damage-first.

**Skill order :** Max **E** en premier (ton stun et ton main damage), **Q** en second (poke et waveclear), **W** en dernier. Point en **R** aux niveaux 6, 11, 16.

**Runes :** Primaire **Resolve** avec **Aftershock**, **Demolish**, **Conditioning**, **Revitalize**. Secondaire **Sorcery** avec **Manaflow Band** et **Transcendence**. Stat shards : Adaptive Force, Adaptive Force, Health Scaling.

## Matchups clés

- **Darius :** Avance pour last-hit uniquement quand **W** est up ; pokele au Q avant chaque wave. Son all-in est brutal pré-6 — ne le laisse jamais enchaîner E-Q sur toi en position d'Aftershock-bait.
- **Renekton :** Évite les trades niveau 1-2 où son fury-stun snowball l'avantage HP. Égalise au niveau 3 avec le counter-engage **W-E** ; dès qu'il commit son stun W, ta damage reduction absorbe le burst et vous tradez à égalité.
- **Vayne :** Hard counterpick (un champion choisi spécifiquement pour battre le tien en lane). Joue sous tour avec poke Q, demande des ganks tôt au jungler (niveau 3-4), et planifie le rush de ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** pour mitiger ses auto-attacks empoderées après son dash (son Q lui permet de tumble et de recharger son tir d'arbalète).
- **Camille :** Évite les 1v1 en sidelane après son premier item core (vers la minute 11-13) ; sa R t'isole (te coupe de tes alliés dans un mur) pour un execute en pourcentage de HP. Group avec l'équipe et force les teamfights où ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** annule la fenêtre de damage de sa R.
- **Malphite :** Égal pré-6, hard scaling post-6 parce que sa **R** match la tienne et son stack d'armure absorbe ton AP. Roam mid avec des flips **R** quand son ult est down — c'est ta seule fenêtre pour basculer le matchup.

## Power spikes & conditions de victoire

- **Niveau 3 (E débloqué) :** Première fenêtre d'all-in. Avec **W** up et le stun **E** prêt, tu peux punir tout melee adverse qui avance trop pour last-hit.
- **Niveau 6 (premier Explosive Cask) :** Power spike. Mets en place un flip **R** dans le gank du jungler — projette le top adverse depuis sa ligne de tour vers le côté river pour un kill gratuit.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker complet (~ minute 13-15) :** Spike qui retourne la lane. Burn soutenu plus omnivamp transforment les trades prolongés en HP gagnés ; force un 1v1 si tu n'es pas en counter matchup.
- **3 items + bottes (~ minute 24-28) :** Pic de teamfight. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** plus ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** plus ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** font de Gragas une menace d'engage quasi-immortelle. Group avec l'équipe pour les objectifs.

## Erreurs courantes

- **Utiliser E pour clear les waves.** **E** est ton gap-close, ton escape et ton seul stun. Si tu Body Slam un minion pour push, le laner adverse a 14 secondes gratuites pour t'all-in. Utilise **Q** pour push les waves ; **E** uniquement pour engage et escape.
- **Lancer R comme dégâts d'ouverture.** **R** disperse l'équipe adverse. Si tu la lances sans plan de placement, tu projettes le laner loin de ton follow-up. Visualise toujours où la cible doit atterrir avant de presser **R** — projette dans ton équipe ou ta tour, jamais dans la frontline adverse.
- **Trader sans W prêt.** Tout trade honnête de Gragas commence par **W**. Sans la fenêtre de 30% damage reduction, tout bruiser melee te bat au trade. Si **W** est en cooldown, last-hit et disengage.
- **Force-gank seul avec R.** Les flips **R** solo dans l'équipe adverse sans follow-up sont des throws. Le tonneau repositionne la cible, mais Gragas seul ne peut pas tuer un carry à HP plein — c'est un enabler pour ton équipe, pas un finisher de duel.
- **Max W au lieu de E.** **W** ne donne ni le stun, ni le gap-close, ni la clear speed à Gragas — **E** fait les trois. Max **E** en premier à chaque game.

## Conseil avancé

Entraîne le combo **R-Flash** : lance **R** aux pieds du laner adverse, puis **Flash** pendant le cast pour repositionner le centre du tonneau vers ton équipe ou ta tour. Le tonneau détone depuis la position Flashée, donc une cible plantée sur sa propre ligne de tour peut être flippée sous ta tour pour un kill gratuit. C'est la mécanique Gragas avec le plus haut skill ceiling et elle mérite des reps dédiés en practice tool avant d'être tentée en solo queue ranked.
