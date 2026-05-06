---
title: "Camille Top Build & Guide — Patch 16.9"
slug: "camille-top"
language: "fr"
patch: "16.9"
champion: "camille"
role: "top"
last_updated: "2026-05-01"
description: "Guide Camille top lane pour League of Legends Patch 16.9 : starter, build fighter, matchups clés, power spikes, erreurs courantes et une astuce avancée finale."
quick_learn:
  champion_dd_id: "Camille"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Adaptive Defenses"
      description: "Les auto-attaques sur les champions génèrent un bouclier égal à un pourcentage des HP max de Camille, calibré sur le type de dégâts de la cible (physique ou magique)."
      dd_spell_id: "Camille_Passive"
    - key: "Q"
      name: "Precision Protocol"
      description: "Auto-attaque empowered avec dégâts bonus et move speed. Se relance en quelques secondes pour un second coup ; attendre entre les deux casts augmente les dégâts et ajoute du true damage."
      dd_spell_id: "CamilleQ"
    - key: "W"
      name: "Tactical Sweep"
      description: "Cône frontal après un bref delay. La moitié extérieure ralentit, inflige des dégâts bonus et soigne Camille selon ses HP manquants."
      dd_spell_id: "CamilleW"
    - key: "E"
      name: "Hookshot"
      description: "Se propulse vers un mur puis rebondit en knockant les champions à l'atterrissage. Outil principal d'engage et de disengage — il faut un mur à portée."
      dd_spell_id: "CamilleE"
    - key: "R"
      name: "The Hextech Ultimatum"
      description: "Saute sur un champion cible et l'enferme dans une arène circulaire. Alliés et cible ne peuvent ni entrer ni sortir ; les auto-attaques sur la cible infligent des dégâts magiques bonus."
      dd_spell_id: "CamilleR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
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
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
  situational_items:
    - dd_id: "3078"
      name: "Trinity Force"
      against: "premier item face aux duelists (Fiora, Jax, Irelia) : le reset Spellblade soutient Q1-AA-Q2 mieux que Stridebreaker"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contre gros burst magique (Vladimir, Rumble, Cassiopeia) : le bouclier magique sous 50% HP te sauve la première rotation"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "contre une équipe qui empile l'armure (frontline avec Plated Steelcaps + Randuin's) : l'armor shred amplifie aussi les dégâts du team"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "quand tu es devant et tu splitpush en sidelane (push solo pour forcer une réponse) : tower shred et HP bonus en isolement"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap bottes contre AP lourd ou 3+ sources de hard CC (stun, root, taunt qui coupent le E en vol et le windup du W)"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "contre un AD assassin qui snowball (Zed, Talon, Kha'Zix) : la seconde vie te laisse finir la combo R même si tu meurs"
  base_combo: ["E", "Q1", "AA", "W", "Q2", "R"]
  win_condition: "Engage depuis un mur avec E, enferme le carry prioritaire dans R, puis burst avec Q1-AA-W-Q2 avant l'arrivée du peel. En sidelane, gagne les 1v1 avec les Q resets et le W heal."
  weakness: "Les lanes ouvertes sans murs annulent E. Le long cooldown de R laisse de grandes fenêtres où elle n'est qu'un auto-attacker robuste. Le hard CC coupe E en vol et le windup du W."
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
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision primaire : Conqueror stack vite sur W-Q1-AA-Q2 et récompense les longs fights que Camille force avec R. Triumph rend des HP sur takedown, Legend: Alacrity accélère les Q resets et autos de R, Coup de Grace s'aligne avec le true damage retardé du Q2 sous 40% HP."
    secondary_rationale: "Resolve secondaire : Bone Plating amortit les all-in early de Darius / Renekton / Pantheon, Overgrowth scale le pool HP sur lequel le bouclier passif est calculé."
    secondary_alternative: "Contre top ranged poke (Quinn, Teemo, Vayne, Gnar) swap Resolve pour Inspiration avec Magical Footwear (bottes gratuites vers la minute 12) et Cosmic Insight (plus de Flash et d'uptime R pour committer chaque fenêtre de cooldown)."
matchup_draft:
  pick_into:
    - examples: ["garen", "darius", "nasus"]
      archetype: "Bruisers melee immobiles"
      reason: "E + R les enferment au corps à corps sans réponse. Les Q resets et le slow du W permettent à Camille de kite (reculer en attaquant) dans le ring de R en attendant que leurs stacks ou cooldowns expirent."
    - examples: ["vladimir", "rumble"]
      archetype: "Mages squishy joués top"
      reason: "Une fois R posée, ils ne peuvent ni pool, ni dash, ni sortir de l'arène. Le true damage du Q2 les chunk au-delà de leur shield et de leur heal sustain."
    - examples: ["sion", "chogath"]
      archetype: "Tanks au scaling tardif"
      reason: "Le true damage du Q2 et le burst de Sundered Sky chunk d'énormes pools HP. R les empêche de retourner près du team pour le peel pendant un fight en sidelane."
  counterpicks:
    - examples: ["quinn", "teemo", "vayne", "gnar"]
      archetype: "Tops ranged avec outils de kite"
      reason: "Ils poke (chip damage à distance) sans committer alors que Camille n'a aucune réponse à distance. E cherche un mur qu'ils peuvent simplement quitter en marchant."
    - examples: ["malphite", "poppy", "maokai"]
      archetype: "Tanks frontline à hard CC"
      reason: "Leur crowd control coupe E en vol, le windup du W et le dash de lock-on de R. Camille perd chaque all-in (commit total jusqu'au kill) où le stun atterrit en premier."
    - examples: ["renekton", "riven", "pantheon"]
      archetype: "Melee à fort all-in early"
      reason: "Ils burst (concentrent les dégâts sur 1-2 secondes) plus vite que Camille ne pose E + W et battent son trade pattern avant le niveau 3."
---

## Aperçu

Camille est un fighter / diver melee (champion qui plonge sur la backline pour tuer une cible prioritaire) : elle dash depuis les murs pour verrouiller un seul carry (la cible à hauts dégâts de la backline — généralement l'ADC, le marksman de bot lane, ou le mid-laner) et transforme le fight en 1v1 dans le ring de sa **R**. Son kit récompense les trades prolongés (échanges de dégâts dans la durée) parce que la **Q** est une auto-attaque empowered à deux casts (notée aussi **AA**) avec un true damage retardé (dégâts qui ignorent armure et résistance magique), la **W** soigne quand sa moitié extérieure touche un champion, et son passif génère un bouclier qui réduit les dégâts entrants du type correspondant (physique ou magique) à chaque AA. Ses dégâts sont majoritairement physiques (AD = Attack Damage) mais la **R** ajoute des dégâts magiques bonus (scale en AP = Ability Power), d'où le damage_type mixed.

Son plan de partie en une phrase : attends la **R**, marche en sidelane ou dans le bush de la rivière, dash depuis un mur sur le priority target, et burst avec **Q1 → AA → W (moitié extérieure) → Q2** pendant que le reste du fight reste hors de l'arène. Hors cooldown, elle farm tranquillement derrière les minions et évite les lanes ouvertes où sa **E** n'a pas de mur à accrocher.

## Build Recommandé

**Items de départ :** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Remplace Doran's Blade par ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** (plus de HP et blocage des dégâts entrants, pas d'AD) uniquement face aux matchups ranged poke (Quinn, Teemo, Vayne).

**Items core (dans l'ordre d'achat) :**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — rush premier item. L'active dash + slow s'enchaîne avec la moitié extérieure du **W** et offre la waveclear que le kit de base de Camille n'a pas.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — face aux lanes AD-heavy (beaucoup de champions à dégâts physiques) et jungle AD. La réduction des dégâts d'auto-attaque est critique car la plupart des menaces pour Camille sont des bruisers physiques (fighters mid-range avec gros HP et dégâts soutenus).
3. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — burst spike. La première auto sur un champion crit et soigne ; s'aligne avec **Q1** pour ouvrir chaque all-in (commit total jusqu'au kill).
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — spike de survie. Tenacity (durée réduite des stuns, slows et autres crowd control = CC) plus un bouclier déclenché à bas HP — Camille dive souvent la backline (saute sur les ennemis qui peel = protègent leur carry).
5. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — anti-burst (paquets de dégâts compressés en 1-2 secondes). Le bleed (dégâts post-hit étalés sur plusieurs secondes) te donne le temps de réagir au lieu de te faire one-shot.

**Items situationnels :**

- ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — swap en premier item face aux duelists (Fiora, Jax, Irelia). Spellblade (passif : après un cast, ta prochaine auto-attaque inflige des dégâts bonus et reset le timer d'AA) te permet de soutenir un trade **Q1 → AA → Q2** mieux que Stridebreaker.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contre gros burst magique (Vladimir, Rumble, Cassiopeia, Kayle AP).
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — contre une équipe qui empile l'armure (plusieurs champions achètent des items d'armure comme Plated Steelcaps et Randuin's ; "stack" = accumuler la même stat sur plusieurs items). Armor shred = chaque coup retire un morceau d'armure de la cible pour quelques secondes, donc les dégâts physiques de ton équipe tapent plus.
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — quand tu es devant et tu splitpush (push une sidelane en solo pour forcer l'ennemi à répondre). Tower shred = dégâts bonus aux tours ; l'item donne aussi des stats majorées sans alliés à proximité.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap de bottes contre AP lourd ou 3+ sources de hard CC.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — contre un AD assassin qui snowball (Zed, Talon, Kha'Zix) — l'avance qui grossit kill après kill.

**Bottes :** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** par défaut. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contre AP lourd / CC.

**Skill order :** Maxe **Q** en premier (chaque niveau = plus de dégâts, CD = cooldown plus court), **E** en second, **W** en dernier. **R** aux niveaux 6, 11, 16. Niveaux 1-3 : **W → E → Q** — sustain, puis engage, puis steroid de dégâts. "Q reset" plus bas = **Q1 → AA → Q2 → AA** : chaque cast de Q reset le timer d'AA, donc tu déclenches une auto bonus juste après.

**Runes :** Primaire **Precision** avec **Conqueror**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secondaire **Resolve** avec **Bone Plating** et **Overgrowth**. Stat shards (les trois petits bonus en bas de la page de runes) : Attack Speed, Adaptive Force, Health Scaling.

## Matchups clés

- **Darius :** Tank les HP early (encaisse les dégâts et reste à parité de CS). Il t'outduel (gagne le 1v1) en trade direct pré-3 — attends le niveau 3 avec **Q** prête. Une fois ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** en ligne, danse avec le slow du **W** + les **Q** resets (sa passive Hemorrhage stack du bleed sur toi jusqu'à 5 ; le tuer reset les stacks de son ult, donc ne lui donne pas la kill).
- **Fiora :** Mirror duelist. Trade en ligne droite pour qu'elle ne tourne pas autour de toi pour son Vital perpendiculaire (sa passive marque un de tes côtés — la frapper sur ce côté inflige du true damage et la soigne). Au niveau 6, sa **R** et la tienne s'annulent — le positionnement décide qui engage en premier.
- **Renekton :** Perd la lane pré-3 et reperd à son spike niveau 2 (W + Q). Garde **E** pour son all-in. À 6, le rapport de force bascule s'il n'a pas snowball : ta **R** le traîne hors de la portée où il génère sa Fury (sa rage resource).
- **Jax :** Mauvais matchup post-6. Son E counter-strike ton **Q2** et le windup du **W** (le bref delay avant l'atterrissage de l'ability, pendant lequel elle peut être annulée). Achète ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** en premier, jamais de **E** au corps à corps tant que son counter strike n'est pas en cooldown.
- **Quinn / Teemo :** Tops ranged. Tu perds la lane brutalement en early. Pars sur ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** au lieu de ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade**, freeze la wave (laisse les minions ennemis être plus nombreux pour que la wave reste collée à ta tour) et ne push jamais sans **Q + E** disponibles. Attends les ganks (le jungler arrive en lane pour faire un 2v1) pour grignoter les plates adverses (les 5 morceaux d'or bonus collés aux tours extérieures les 14 premières minutes).

## Power spikes & conditions de victoire

- **Niveau 2 (W + E) :** Première fenêtre d'all-in. Slow du **W** → **AA** → knock-up (bref stun aérien à l'atterrissage) du **E** monte un trade complet avec la passive active deux fois.
- **Niveau 6 (R) :** Ton engage devient incontestable pour une rotation de cooldown. Combine **E** depuis un mur avec **R** pour verrouiller n'importe qui en mêlée ; préviens ton jungler avant le fight pour qu'il rejoigne dans le ring.
- **![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) Stridebreaker terminé (~ minute 13-14) :** Waveclear débloquée. Ton trade pattern devient régulier : active slow → moitié extérieure **W** → **Q1** → **AA** → **Q2** chunk environ la moitié de leur barre HP.
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky terminé (~ minute 20-24) :** Le heal-on-first-hit te laisse committer beaucoup plus agressivement dans les skirmishes en sidelane (petits fights 1v1 ou 2v2). C'est le spike où tu commences à splitpush pour les objectifs.

## Erreurs courantes

- **Gâcher le E pour poke (chip damage à distance) en lane.** Le **E** est ton seul escape si le jungler ennemi gank. Lance-le pour les commits d'engage ou pour sortir d'un gank, pas pour 50 de chip damage. Sans **E**, une Camille sans Flash meurt à n'importe quel 2-man dive (tentative de kill coordonnée sous ta tour).
- **Rester devant le cône du W.** La moitié intérieure fait peu de dégâts et aucun slow / heal — tout le payoff est dans la moitié extérieure. Reposition-toi pendant le cast pour que l'ennemi soit dans le ring extérieur, pas collé à toi.
- **Engage sans R quand la cible a son hard CC up.** **R** est ton outil "no Flash escape" — une fois locked, la cible ne peut pas Flash hors du ring. Une Camille sans **R** qui dive sur une équipe peel-ready (alliés prêts à protéger leur carry) crève dans des chaînes de stun (un CC après l'autre sans intervalle pour réagir).
- **Enchaîner Q1 → Q2 sans pause.** Plus tu attends entre **Q1** et **Q2** (jusqu'à ~2 secondes), plus le bonus damage et la portion de true damage du **Q2** sont gros. Glisse une **AA** + **W** entre les deux — c'est de là que vient la majorité de ton burst (dégâts concentrés sur 1-2 secondes).

## Conseil avancé

Entraîne le redirect **Flash → E** : si aucun mur utile n'est à portée, utilise **Flash** (le sort d'invocateur sur D ou F qui te téléporte de ~400 unités) au milieu du **E** pour atterrir sur un mur et rediriger le dash. Ça transforme Camille de "il lui faut des murs" à "engage partout" pour le prix d'un sort d'invocateur. Le combo est le plus utile dans les pits d'objectif (les arènes murées autour de Drake et Baron) et les fights ouverts à la rivière où les seuls murs sont à 600+ unités — Flash comble le trou pour que tu poses quand même le knock-up (bref stun aérien) du **E** sur le priority target.
