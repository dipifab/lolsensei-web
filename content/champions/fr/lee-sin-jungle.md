---
title: "Lee Sin Jungle Build & Guide — Patch 16.9"
slug: "lee-sin-jungle"
language: "fr"
patch: "16.9"
champion: "lee-sin"
role: "jungle"
last_updated: "2026-04-29"
description: "Guide Lee Sin jungle pour League of Legends Patch 16.9 : starter kit, build skirmisher, matchups clés, power spikes, erreurs courantes et une astuce finale."
quick_learn:
  champion_dd_id: "LeeSin"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Fighter / Skirmisher Jungle"
  abilities:
    - key: "P"
      name: "Flurry"
      description: "Après un sort, les 2 auto-attacks suivantes gagnent attack speed et rendent de l'énergie. Rythme sort — auto — auto."
      dd_spell_id: "LeeSin_Passive"
    - key: "Q"
      name: "Sonic Wave / Resonating Strike"
      description: "Skillshot linéaire. S'il touche, la recast dash sur la cible avec dégâts physiques sur HP manquants. Ton gap close principal."
      dd_spell_id: "LeeSinQOne"
    - key: "W"
      name: "Safeguard / Iron Will"
      description: "Dash sur un allié, une ward ou toi-même avec un shield. La recast donne lifesteal et spell vamp. Mobilité plus sustain."
      dd_spell_id: "LeeSinWOne"
    - key: "E"
      name: "Tempest / Cripple"
      description: "Dégâts AOE qui révèlent les ennemis. La recast les ralentit. Outil de clear, anti-stealth et source de slow."
      dd_spell_id: "LeeSinEOne"
    - key: "R"
      name: "Dragon's Rage"
      description: "Coup de pied qui repousse la cible et blesse les ennemis derrière. Outil de pickoff et de disruption."
      dd_spell_id: "LeeSinR"
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
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3084", name: "Heartsteel" }
    - { dd_id: "3071", name: "Black Cleaver" }
  situational_items:
    - dd_id: "6333"
      name: "Death's Dance"
      against: "contre deux AD dealers forts (Yasuo + Caitlyn) : convertit les dégâts physiques en saignement lent, pas instantané"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contre burst AP (Diana, Syndra, Lux mid) : le lifeline shield transforme un one-shot en trade survivable"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contre 3+ champions à CC dur (Leona + Lissandra + Sejuani) : la tenacity raccourcit stuns et roots"
    - dd_id: "3053"
      name: "Sterak's Gage"
      against: "quand tu dois dive (entrer sous tour ennemie pour tuer) : le lifeline shield s'active après le premier gros coup"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "assurance flank en late game : si tu rates un timing de R, la résurrection équilibre le trade"
  base_combo: ["Q1", "AA", "E", "AA", "Q2", "R"]
  win_condition: "Gagne les 14 premières minutes par invades et ganks. Eclipse fini, conteste chaque objectif et R pour sortir un ennemi clé de position. Late game, cherche un flank et kicke une carry squishy."
  weakness: "Décroche fort après la minute 25 face aux carries qui scale. Pas de dash fiable si Q1 manque ou si W n'a rien. Les chaînes de CC dur ferment ton engage instantanément."
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
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
---

## Aperçu

Lee Sin est un jungler d'early game — un skirmisher, c'est-à-dire un champion qui gagne les combats courts entre deux ou trois joueurs. Imagine un artiste martial avec une chaîne de dashes : il te touche avec une onde sonore, te saute dessus, te kicke vers son équipe, et ses auto-attacks portent un bonus d'attack speed intégré après chaque sort. Tout le kit tourne autour d'une seule idée : être le combattant le plus fort de la map pendant les 15 premières minutes, puis convertir cette avance en kills, objectifs et tempo avant que les carries adverses ne scale.

Son game plan est direct. Dans les 8 premières minutes tu fais de l'invade — tu entres dans la jungle ennemie pour voler des camps et chasser le jungler adverse. Ensuite, tu gank les lanes dès que ta **Q** est prête. En late game, tu arrêtes les 1v1 (tu les perds) et tu cherches des flanks : tu contournes la map, tu te caches dans un buisson non warded, puis tu **R** la carry ennemie vers ton équipe. Si tu ne touches pas la **Q1** régulièrement, rien de tout cela ne fonctionne — le reste du kit s'enchaîne sur le premier skillshot.

## Build Recommandé

**Items de départ :** Smite + **Hailblade** pour un premier clear plus rapide avec dégâts AOE au second hit, plus **Refillable Potion**. Prends Emberknife uniquement si tu veux un sustain max sur un full clear plus lent avec plus de solo dueling.

**Items core (dans l'ordre) :**

1. **Eclipse** — burst, shield et omnivamp. Le shield à deux coups colle parfaitement avec ton rythme Cast → AA → AA de la passive. Le premier item le plus propre pour skirmisher.
2. **Plated Steelcaps** vs ennemis AD-heavy / **Mercury's Treads** vs 3+ champions à CC dur. Plated par défaut.
3. **Heartsteel** — HP et auto-attack chargée qui punit les skirmishes prolongés. Te permet de brawler au-delà du timer "je meurs à 2 items".
4. **Black Cleaver** — armor shred qui scale avec ton rythme Q-AA-Q. Convertit aussi les dégâts physiques de ton équipe en menace de kill.

**Items situationnels :**

- **Death's Dance** — contre les équipes avec deux AD dealers forts (ex. Yasuo + Caitlyn). Étale les dégâts physiques entrants en saignement lent au lieu d'arriver d'un coup.
- **Maw of Malmortius** — contre les lanes AP burst (Diana, Syndra, Lux mid).
- **Sterak's Gage** — quand tu dois dive (entrer sous tour ennemie pour tuer). Le lifeline shield t'achète la seconde dont ton équipe a besoin pour follow-up.
- **Guardian Angel** — assurance flank en late game après 4 items.

**Bottes :** Plated Steelcaps par défaut. Boots of Mobility uniquement sur des maps gank-heavy sans menaces de CC early — niche, pas standard.

**Skill order :** Max **Q** en premier (dégâts et gap close), **E** en second (clear et uptime de slow), **W** en dernier (l'utility scale très bien à rank 1). **R** aux niveaux 6, 11, 16.

**Runes :** Primaire **Precision** avec **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Secondaire **Domination** avec **Sudden Impact** + **Treasure Hunter** pour un snowball lead (avantage précoce qui grossit avec le temps : kill → gold → item → plus de kills), ou **Resolve** avec **Second Wind** + **Revitalize** si tu attends une partie longue et de scaling.

## Matchups clés

- **Vi :** Elle perd les skirmishes pre-6 si tu baites sa **Q** chargée. Atterris ta **Q1** sur elle, **E** pour slow, puis dash sur le support après le kick — peel pour ta carry pendant qu'elle est en cooldown.
- **Hecarim :** Il te dépasse passé 3 items mais perd les fights pre-9 minutes. Mets-lui la pression tôt ; si tu atteins le niveau 6 avant lui, gank top ou mid sans relâche. Pas de 1v1 après son premier item.
- **Master Yi :** Matchup de skill. Ton **E** le révèle pendant que sa **Q** est active, brisant son target lock. Entraîne ça jusqu'au réflexe. Garde **R** pour le kicker hors de ta back line en team fight.
- **Kha'Zix :** Invade jusqu'au niveau 6. Après son **R** évolué, il peut te solo-kill si tu es seul — ne marche jamais dans la jungle ennemie seul après la minute 12 sans couverture d'équipe.
- **Graves :** Matchup miroir sur le tempo. Les deux junglers gagnent les 6 premiers niveaux. Celui qui gank le plus gagne. Suis ses charges de **E** ; s'il a brûlé les deux, tu le duel.

## Power spikes & conditions de victoire

- **Niveau 3 :** Kit complet débloqué. Ton pattern de gank est **Q1 → attendre CC allié ou Flash → Q2 → E slow → reset auto**. Sans Flash adverse, ça tue n'importe quel squishy à 60% HP.
- **Niveau 6 :** **Dragon's Rage** débloque le kick play. Pre-6, la **R** ne vaut rien — un first blood pre-6 est ton plus haut levier de la partie.
- **Timing Eclipse (~ minute 9) :** Tu gagnes les skirmishes prolongés. Force des fights sur Scuttle, Drake et Voidgrubs dans cette fenêtre.
- **Late game (~ minute 30) :** Lee décroche face aux carries qui scale (Vayne, Kog'Maw, Master Yi). Ta condition de victoire restante est l'ace-flank : prends de la vision dans la jungle ennemie, trouve une position latérale, **R** leur carry à travers la map, follow-up avec **Q-E-W**.

## Erreurs courantes

- **Gâcher Q1 sur un minion low-HP en plein fight.** Ta **Q** a deux parties : le skillshot et le dash. Si tu lances Q1 sur un minion pour le finir, tu as brûlé toute l'abilité pour 12 secondes et tu n'as plus de gap close. Garde Q1 pour l'all-in (engagement total au trade jusqu'à la kill).
- **W-jumping en plein skirmish pour le sustain.** Le lifesteal de **W** est réel, mais si tu W sur une ward pour heal, tu sacrifies ton gap close. Si le trade est gagnable, garde **W** pour un Insec (le truc du kick inversé — voir astuce avancée) ou pour sauter sur le support après la **R**.
- **R-into-tower sans follow-up.** Kicker une carry low-HP vers ton équipe ne marche que si l'équipe est à portée et prête à s'engager. **R** seul, hors écran, c'est un coin flip à 100g.
- **Auto-leash le red side au niveau 1.** Avec Hailblade tu fais full-clear depuis bot side sans aide. Le leash sacrifie la course au Scuttle. Dis à la bot lane : leash juste le premier attack-and-go, puis pars.
- **Pick Lee dans une comp sans plan de pickoff.** Lee brille quand son équipe capitalise sur une seule kill isolée (un "pickoff" : éliminer un ennemi hors du teamfight). Si ton équipe n'a pas de CC de follow-up, la **R** n'est qu'un outil de peel — adapte la build vers Death's Dance et Sterak's au lieu d'items d'all-in.

## Conseil avancé

L'"Insec", le kick inversé : marche au-delà de ta cible, **W** sur une ward que tu as posée derrière elle, puis **R** dès que tu atterris — le kick part de derrière et l'envoie vers ton équipe au lieu de l'éloigner. La séquence complète est **Q1 hit → Q2 dash → ward derrière → W sur la ward → R**. Entraîne ça en Practice Tool jusqu'à toucher le timing sans réfléchir. La fenêtre entre l'atterrissage du W et le R fait environ 0.3 seconde — trop lent et la cible se retourne, trop vite et l'animation du W mange le cast du R. Quand tu peux la chaîner sous pression, Lee saute deux tiers entre tes mains.
