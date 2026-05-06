---
title: "Kindred Jungle Build & Guide — Patch 16.9"
slug: "kindred-jungle"
language: "fr"
patch: "16.9"
champion: "kindred"
role: "jungle"
last_updated: "2026-05-05"
description: "Guide Kindred jungle pour League of Legends Patch 16.9 : chasse aux Marks, build on-hit, matchups clés, power spikes, erreurs courantes et astuce avancée."
quick_learn:
  champion_dd_id: "Kindred"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Skirmisher Jungler"
  abilities:
    - key: "P"
      name: "Mark of the Kindred"
      description: "Toutes les 4 minutes, un Mark apparaît sur un ennemi aléatoire (champion ou jungle camp). Le tuer donne un stack permanent : bonus AS, AD et portée d'auto-attaque. Cœur du game plan."
      dd_spell_id: "Kindred_Passive"
    - key: "Q"
      name: "Dance of Arrows"
      description: "Dash court + 3 auto-attaques rapides sur les cibles proches. Reset le timer d'auto. Sert au clear, au repositionnement et à enchaîner les autos en fight."
      dd_spell_id: "KindredQ"
    - key: "W"
      name: "Wolf's Frenzy"
      description: "Wolf attaque une zone ~8s, donne de l'AS et révèle les camps. Lamb gagne des stacks en bougeant et attaquant ; à pleine charge, l'auto la soigne. Toggle clear et sustain."
      dd_spell_id: "KindredW"
    - key: "E"
      name: "Mounting Dread"
      description: "Skillshot qui slow la cible. Après 4 autos sur elle, l'attaque suivante ajoute des dégâts selon les HP manquants. Outil de burst sur champions sous 50% HP."
      dd_spell_id: "KindredE"
    - key: "R"
      name: "Lamb's Respite"
      description: "Crée une zone sacrée : aucune unité dedans (alliés ET ennemis) ne peut descendre sous 1 HP pendant la durée, puis heal en fin de zone. Save tool réactif. Jamais en pré-cast."
      dd_spell_id: "KindredR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
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
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3091", name: "Wit's End" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
  situational_items:
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contre ultis lock-on (Malzahar R, Skarner R, Warwick R) — le spell shield bloque le cast"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "contre chaînes de hard CC (Leona + Lissandra, Sett R + Ashe R) — l'actif cleanse pour repositionner"
    - dd_id: "6676"
      name: "The Collector"
      against: "quand tu mènes et l'équipe adverse n'a pas d'armor — execute sous 5% HP ferme les leads"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contre comps avec sustain (Aatrox, Soraka, Dr. Mundo) — grievous wounds coupe les soins de moitié"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contre 3+ champions hard CC (Leona + Lissandra + Sejuani) — tenacity réduit stuns et roots"
  base_combo: ["E", "Q", "AA", "AA", "AA", "R"]
  win_condition: "Stack les Marks tôt. Chaque Mark complété donne AS + AD + portée permanents — l'avance fait snowball (kills → stats → encore des kills) jusqu'au flanker 3-items qui out-kite tous les brawlers."
  weakness: "Squishy, pas de hard CC, R réactive avec long CD. Junglers à hard CC qui invade level 2-3 (Lee Sin, Xin Zhao, Elise) te tuent avant le moindre Mark ; les tanks à mitigation on-hit ignorent ton DPS."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 9923
      name: "Hail of Blades"
      icon_path: "perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
    primary_rationale: "Domination + Hail of Blades envoie les 3 premiers autos à vitesse max — exactement ceux qu'il faut pour boucler la chaîne de Mounting Dread. Sudden Impact récompense le dash de Q en lethality, Sixth Sense révèle les wards, Treasure Hunter convertit les mark kills en or."
    secondary_rationale: "Precision en secondaire : Triumph rembourse des HP au takedown (tu finis bas après 4 autos), Coup de Grace ajoute 8% de dégâts sous 40% HP — synergie avec le coup HP-manquants du 4e auto."
    secondary_alternative: "Contre comps AP burst (Diana jungle + Syndra mid + Brand support), swap Precision → Resolve avec Second Wind + Revitalize : sustain en jungle et R qui heal davantage en fin de zone."
matchup_draft:
  pick_into:
    - examples: ["karthus", "master-yi", "kayle"]
      archetype: "Junglers et carries late-scaler à early faible"
      reason: "Ils veulent farm jusqu'à 3 items avant de bouger ; toi tu peux mark-hunt dans leur jungle et bully leurs camps tôt. Chaque Mark complété élargit l'écart avant leur spike."
    - examples: ["senna", "aphelios", "kog-maw"]
      archetype: "Marksmen backline squishy sans escape intégré"
      reason: "Gank cross-map : la E slow assez pour enchaîner 4 autos et déclencher le coup HP-manquants de Mounting Dread, et ils n'ont pas de dash pour casser la chaîne."
    - examples: ["maokai", "nasus"]
      archetype: "Tanks lents sans dash"
      reason: "Ils ne ferment pas la distance sur une Kindred qui kite. Tu auto-attaques hors de la portée de leur CC pendant que Wolf's Frenzy les chip passivement."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "Junglers d'invade early avec hard CC et lockdown"
      reason: "Ils rentrent dans tes camps level 2 avec kick, knock-up ou stun et te tuent avant le moindre Mark. Pas de dash qui casse les lock-on, et la R n'est pas encore prête."
    - examples: ["sion", "dr-mundo"]
      archetype: "Juggernaut tanks avec mitigation ou immunité on-hit"
      reason: "Le shield W de Sion et la passive heal de Mundo annulent ton DPS auto-attack — ton seul dégât est on-hit, donc tout ce qui casse ce loop te neutralise."
    - examples: ["zed", "talon"]
      archetype: "Burst assassins qui te delete avant que la R couvre"
      reason: "Tu es squishy sans hard CC ; ils te tuent dans la fenêtre de 0.5s avant le cast de Lamb's Respite. La R ne bloque pas les dégâts, juste la mort — ils attendent et re-engage."
---

## Aperçu

Kindred est un marksman qui chasse en jungle. Lamb tire, Wolf mord, et tout le kit tourne autour d'une mécanique qu'aucun autre champion n'a : **Mark of the Kindred**. Toutes les 4 minutes, un Mark apparaît sur un ennemi aléatoire — un champion ou un jungle camp — et le tuer donne un stack permanent d'attack speed, attack damage et portée bonus d'auto-attaque. Stack 4 marks et ta portée bondit ; stack 8 et tu commences à out-trader des marksmen depuis hors de leur propre portée d'auto.

Ton game plan se divise en deux moitiés. Early game tu es un **mark hunter** : tu lis l'icône du Mark sur la minimap, tu décides s'il vaut le contest (le tien = toujours, le leur = tu échanges de la pression pour le voler) et tu plies ton pathing autour. Mid game tu deviens flanker — Q-dash derrière la backline adverse (les carries qui restent derrière leurs tanks), E sur le carry, chaîne de 4 autos, et Mounting Dread execute sur le coup HP-manquants. Late game tu es un skirmisher hyper-scaling qui out-kite tous les brawlers du jeu (kite = reculer en attaquant, pour que l'ennemi ne te rattrape jamais).

## Build Recommandé

**Starting items :** Smite + ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** pour un clear plus rapide (tu es ranged, tu dois prendre Hailblade — Emberknife est melee-only) plus ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**Core items (dans l'ordre) :**

1. ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** — quest upgrade depuis Hailblade (auto-évolue vers la minute 3-4 quand assez d'XP est accumulé). Companion pour AD skirmisher : court burst de movement-speed à la sortie d'un buisson, parfait pour chase un Mark ou clore un gank depuis le fog.
2. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — un basic attack sur trois inflige du true damage bonus. Le true damage ignore l'armor, donc il perce l'itemisation tank des ennemis que tu ne pourrais pas shred autrement.
3. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — boots d'attack speed flat. Default ; passe à ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** uniquement si l'équipe adverse a 3+ hard CC.
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — ajoute deux flèches supplémentaires à chaque auto. Triple la vitesse de clear en jungle et étale le DPS Wolf-and-Lamb sur 3 cibles en teamfight.
5. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — magic damage on-hit (dégâts magiques ajoutés à chaque basic attack) + magic resist. Double effet : lifeline contre AP burst (Diana, Syndra, Brand) et shred contre backlines à faible magic resist.
6. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — portée bonus sur le tir énergisé, en plus de la portée déjà stack via Marks. Late game tu auto les carries depuis le bord d'écran pendant que leur équipe court après rien.

**Situational items :**

- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contre ultis single-target lock-on (Malzahar, Skarner, Warwick). Le spell shield avale le cast et la chaîne ne part pas.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — contre chaînes de hard CC. L'actif cleanse tous les CC y compris la suppression — tu cliques l'instant où Skarner pull ou Sett ulti atterrit.
- ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — quand tu mènes, execute sous 5% HP. Combine proprement avec le coup HP-manquants de la E, et le cadavre rapporte de l'or bonus.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contre comps à sustain (Aatrox, Soraka, Dr. Mundo). Applique grievous wounds, coupant leurs soins d'environ moitié sur les fights étendus.

**Boots :** Berserker's Greaves par défaut. Mercury's Treads uniquement contre du hard CC lourd.

**Skill order :** Max **Q** d'abord (clear et dégâts par dash), **E** ensuite (plus de burst sur le coup HP-manquants par rank), **W** en dernier (l'AS et le heal scale bien rank 1). **R** à 6, 11, 16.

**Runes :** Primaire **Domination** avec **Hail of Blades** + **Sudden Impact** + **Sixth Sense** + **Treasure Hunter**. Secondaire **Precision** avec **Triumph** + **Coup de Grace**. Hail of Blades est iconique sur Kindred parce qu'elle pousse les 3 premiers autos à vitesse maximale — exactement ceux dont tu as besoin pour lancer la chaîne de Mounting Dread.

## Matchups clés

- **Lee Sin :** Perd le level 1 contre toi, mais au level 2-3 son combo Q-W-Q-kick te delete avant que tu aies la R. Évite son côté jusqu'au level 4, puis cherche un counter-gank quand il commit Q sans W prête. Track le CD de son W — sans, il ne sort plus d'un fight.
- **Karthus :** Pure scaler. Invade sa red side à la minute 3 et vole-lui un buff ; il ne peut pas t'arrêter, et la perte de tempo retarde son spike level 6. Après 3 items il gagne, donc ferme avant la minute 18.
- **Master Yi :** À tuer avant son ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer**. Garde la E pour la fenêtre de sortie de son Q-dash — quand il réapparaît il prend le slow et ton équipe enchaîne le CC. Après son premier item, pas de 1v1.
- **Diana :** Elle veut dive ta backline ; toi la sienne. Garde la **R** pour quand elle pose sa R sur ton carry — la zone sacrée tient le carry au-dessus de 1 HP à travers le burst, puis ton équipe la tue dans la fenêtre de récupération.
- **Xin Zhao :** Knock-up + lock-down te tue en 1.5 seconde. Jamais path à côté de ses camps level 2 ; group avec un laner pour les buffs jusqu'à avoir 2 Marks de portée bonus. Après 3 items tu l'out-kite avec les resets de Q.

## Power spikes & conditions de victoire

- **Level 3 :** Kit complet. Ton pattern de gank est **E sur la cible -> 3 autos avec Q-dash en milieu de chaîne -> 4e auto déclenche le burst HP-manquants**. Sans R, ne commit pas profond sur un gank level 3 — Flash-distance uniquement.
- **Premier Mark stack (~ minute 5) :** AS, AD et portée bonus permanents. Chaque Mark complété ensuite élargit l'écart. Combats pour les Marks même neutres — l'avance stat dépasse un seul trade (un trade = un échange bref de dégâts en skirmish).
- **Level 6 :** **Lamb's Respite** unlock. À partir d'ici tu peux sauver un coéquipier d'une kill garantie. L'astuce est de **ne jamais pré-cast** — tu drop l'instant où tu vois l'ennemi commit le sort de kill, sinon la zone se termine avant que la threat ne se résolve.
- **3 items + bonus de portée 4-Mark (~ minute 22) :** Tu out-range tous les marksmen du jeu. En teamfight tu te poses derrière ta frontline, tu restes immobile, tu auto jusqu'à ce que tout meure. C'est ta falaise de scaling — group avec l'équipe, ne splitpush pas (ne farm pas une side lane seul).

## Erreurs courantes

- **Pré-cast Lamb's Respite.** **R** est réactive, pas proactive (tu la poses APRÈS avoir lu la threat, pas avant). Drop la seconde où l'ulti adverse touche, pas quand ils s'approchent. Une R pré-cast ne sauve personne et te coûte ton seul save tool pour 110 secondes.
- **Ignorer l'icône du Mark.** La minimap montre le Mark via un petit crâne. Les joueurs qui ne le track pas perdent toute l'identité du champion. Ouvre la map toutes les 30 secondes et demande-toi : "ce Mark est à moi à prendre, ou à eux à leur refuser ?"
- **Q-dash dans l'équipe adverse sans sortie.** **Dance of Arrows** a 12 secondes de CD au rank 1. Si tu Q in pour chase une kill et qu'on te CC, tu n'as plus d'escape. Q toujours avec un mur derrière la trajectoire, comme ça la prochaine Q (après CDR) te bounce dehors.
- **Oublier le requis 4-autos de Mounting Dread.** **E** fait peu de dégâts on-cast mais le vrai payoff est le 4e auto sur la cible slowée. Si tu E et ne places que 2 autos, le burst HP-manquants ne sort pas. Commit à la chaîne complète ou ne cast pas E.
- **Garder la R pour le moment parfait qui n'arrive jamais.** Une R "gâchée" qui sauve un allié 3 secondes vaut mieux qu'une R parfaite que tu ne presses jamais à force d'attendre. En cas de doute, drop.

## Conseil avancé

Le **R-bait** sur objectifs. Au Drake ou au Baron avec ton équipe à HP bas, drop **Lamb's Respite** SUR l'objectif et non sur ton équipe. Toute unité dedans ne peut pas descendre sous 1 HP — y compris l'objectif. Ton équipe smite ou termine l'objectif pendant la zone, et tout ennemi qui rentre ne peut pas non plus te tuer, donc soit il abandonne le contest, soit il se fait prendre quand la zone se termine et que ton équipe est full HP grâce au heal de fin de R. Ça transforme un Drake fight 50/50 en objectif + double-kill garanti quand l'équipe adverse ne lit pas le piège.
