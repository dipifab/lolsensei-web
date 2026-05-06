---
title: "Jhin Bot Build & Guide — Patch 16.9"
slug: "jhin-bot"
language: "fr"
patch: "16.9"
champion: "jhin"
role: "bot"
last_updated: "2026-04-29"
description: "Guide complet Jhin bot lane pour League of Legends Patch 16.9 : starter kit, build lethality-crit, matchups clés, power spikes, erreurs courantes et astuce avancée."
quick_learn:
  champion_dd_id: "Jhin"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / ADC"
  abilities:
    - key: "P"
      name: "Whisper"
      description: "Le revolver de Jhin ne tire que 4 balles avant de devoir recharger. La 4ème crit toujours et inflige des dégâts d'exécution sur les ennemis à bas HP. Les crits donnent aussi un court burst de Move Speed."
      dd_spell_id: "Jhin_Passive"
    - key: "Q"
      name: "Dancing Grenade"
      description: "Tir ciblé qui rebondit jusqu'à 4 fois. Chaque kill rend le rebond suivant plus puissant. Poke fiable et waveclear."
      dd_spell_id: "JhinQ"
    - key: "W"
      name: "Deadly Flourish"
      description: "Skillshot linéaire à très longue portée. Root si la cible a été frappée récemment par toi ou un allié. À utiliser après une auto-attaque ou un engage du support."
      dd_spell_id: "JhinW"
    - key: "E"
      name: "Captive Audience"
      description: "Piège lotus invisible qui s'arme après un court délai. Slow au contact, puis explose pour des dégâts. Sert à zoner, couvrir les flancs et confirmer les root de W."
      dd_spell_id: "JhinE"
    - key: "R"
      name: "Curtain Call"
      description: "Ulti channellée : 4 tirs très longue portée qui s'arrêtent sur les champions, les slow et infligent plus de dégâts à mesure que leurs HP baissent. Le 4ème crit."
      dd_spell_id: "JhinR"
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
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3142"
      name: "Youmuu's Ghostblade"
      against: "contre une backline adverse squishy (sans tanks) : la lethality amplifie le burst W-root et le Move Speed actif aide aux roams"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contre les comps qui empilent les soins (Soraka, Aatrox, Vladimir, Dr. Mundo) : Grievous Wounds coupe leurs heals de moitié pendant ta R"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contre le hard CC single-target qui annule ta R (Blitzcrank hook, Morgana Q, Ashe R) : le spell shield t'offre le cast"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "quand tu es en avance et qu'il te faut lifesteal + un shield pour tenir les longs fights sans peeler (allié qui protège le carry)"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "contre les divers en all-in (Diana, Kha'Zix, Master Yi) : le Move Speed en combat et le ghosting sur minions aident à kite"
  base_combo: ["AA", "AA", "AA", "Q", "AA"]
  win_condition: "Place le crit du 4ème tir sur chaque trade et enchaîne les W-roots avec ton support pour clouer les cibles à longue portée. Positionne-toi pour garder les lignes de R propres en fight d'objectif."
  weakness: "Attack speed bloquée et aucun dash. Hard counter par les divers mobiles et les tanks d'engage ; si ton support est tiré loin, tu n'as aucune escape hors Flash."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8021
      name: "Fleet Footwork"
      icon_path: "perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8233, name: "Absolute Focus", icon_path: "perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "varus", "ashe"]
      archetype: "Marksmen immobiles à longue portée"
      reason: "Ils partagent avec Jhin le manque de dash mais ont des fenêtres de burst plus courtes. Une fois que Jhin enchaîne le pattern du 4ème tir avec un follow-up support, il gagne les trades directs dès le level 6."
    - examples: ["sivir", "kalista"]
      archetype: "Marksmen reset/mobilité qui vivent en courte portée"
      reason: "Leur kit veut rester proche ; Jhin peut les W-root depuis hors de leur portée d'auto-attaque et enchaîner avec E (le piège lotus) pour conclure avant qu'ils ne reset."
    - examples: ["soraka", "yuumi"]
      archetype: "Enchanters pure-heal sur la bot lane"
      reason: "Le W-root + R execute de Jhin punit vite les heal-bots à bas HP. Avec Mortal Reminder online (Grievous Wounds coupe les soins de moitié) leur plan s'effondre."
  counterpicks:
    - examples: ["draven", "lucian", "samira"]
      archetype: "Lane bullies agressifs au level 1-3"
      reason: "Ils burst Jhin pendant ses fenêtres de reload (après chaque cycle de 4 tirs le revolver doit recharger). Jhin n'a aucune mobilité pour disengage et son W root demande un setup qu'il ne peut pas créer seul au level 1."
    - examples: ["kai-sa", "tristana"]
      archetype: "Hypercarrys mobiles avec escape intégré"
      reason: "Leurs dashes intégrés (Kai'Sa E reposition, Tristana W jump) dodge les W-roots et coupent les cast windows de R. Ils scale dans un 1v1 que Jhin ne peut pas kite."
    - examples: ["alistar", "leona", "nautilus"]
      archetype: "Tank supports hard-engage"
      reason: "Ils placent du CC point-and-click sur Jhin pendant ses frames de reload ; il n'a pas de dash pour se peel et son W demande qu'ils soient déjà touchés pour root."
---

## Aperçu

Jhin est un marksman longue portée qui joue comme un sniper plutôt qu'un carry de DPS soutenu (damage-per-second, dégâts continus dans le temps). Son revolver **Whisper (Passive)** ne tire que 4 balles entre deux reloads, mais la 4ème crit toujours et exécute les cibles à bas HP — donc chaque trade (un échange bref de coups en lane, pas une tentative complète de kill) se construit autour du timing de cette 4ème balle sur un champion blessé. Il n'a pas de dash et son attack speed est bloquée, donc le positionnement et le setup comptent plus que l'APM mécanique.

Son game plan : poke avec **Q** et auto-attaques jusqu'à ce que le support engage, puis chaîne les **W**-roots dans un crit du 4ème tir. Après le level 6, **R** transforme les picks (éliminer un ennemi isolé hors du teamfight) et les sièges d'objectifs en kills hors de portée de l'équipe adverse. Si ta front line te peel (te protège des divers), tu outscale la plupart des duos bot lane vers la minute 25.

## Build Recommandé

**Items de départ :** Doran's Blade + 1 Health Potion. Évite Doran's Shield sauf si la lane est un matchup auto-attaque lourd type Draven ou Lucian, où l'HP supplémentaire vaut plus que le bonus de dégâts.

**Items core (dans l'ordre) :**

1. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — premier spike de burst. L'execute en dessous de 5% HP synergise avec le 4ème tir execute de Jhin et son R ; tu finis des kills que ton équipe raterait autrement.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — les bottes d'attack speed sont le choix standard pour les marksmen ; l'attack speed bloquée de Jhin scale en dégâts par tir, donc l'AS se transforme en dégâts purs.
3. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — le tir energized ajoute du poke longue portée (colle à l'identité de Jhin) et le bonus de range te permet de toucher des champions avant qu'ils n'entrent dans leur propre portée d'attaque.
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — le 4ème tir de Jhin est un crit garanti, donc le multiplicateur de dégâts crit d'IE en fait un bouton one-shot sur les squishys.
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — armor penetration pour le late game quand la front line adverse achète des items défensifs.

**Items situationnels :**

- ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — premier item alternatif quand l'équipe adverse n'a pas de tanks. La lethality (armor pen plate) fait que le burst W-root supprime les squishys en 1-2 tirs sur les skirmishes early, et le Move Speed actif aide à se repositionner pour les cast windows de R.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — remplace Lord Dominik's contre les comps qui empilent les soins (Soraka, Aatrox, Vladimir). Grievous Wounds coupe les heals de moitié pendant la fenêtre d'execute de R.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — à acheter en 3ème ou 4ème contre du hard CC single-target qui annule le channel de ta R (Blitzcrank hook, Morgana Q, Ashe R). Le spell shield bloque une compétence et te laisse finir le cast.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — quand tu es en avance et qu'il te faut lifesteal plus un shield pour survivre aux longs fights sans peeler dédié.
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — contre les divers en all-in (Diana, Kha'Zix, Master Yi). Le Move Speed en combat et le ghosting sur les minions aident à kite (reculer tout en attaquant) jusqu'à ce que ton équipe te peel.

**Bottes :** Berserker's Greaves par défaut. Boots of Swiftness ne deviennent corrects que quand l'équipe adverse empile des slows que tu ne peux pas éviter (composition type Ashe + Nautilus + Anivia).

**Skill order :** Maximise **Q** en premier (DPS principal et waveclear), **W** ensuite (fiabilité du root et dégâts de base), **E** en dernier (utility, un point suffit pour le slow). Mets un point en **R** aux niveaux 6, 11 et 16.

**Runes :** Primaire **Precision** avec **Fleet Footwork** (mouvement + sustain en lane), **Presence of Mind** (refund de mana sur l'ulti), **Legend: Bloodline** (lifesteal scaling), **Coup de Grace** (dégâts bonus contre cibles à bas HP — colle au 4ème tir execute de Jhin). Secondaire **Sorcery** avec **Absolute Focus** et **Gathering Storm** pour le scaling tardif.

## Matchups clés

- **Caitlyn :** Elle te out-range en auto-attaque mais perd tous les all-in (un engagement total visant la kill, pas juste un trade rapide) une fois que tu as 4 stacks de passive. Reste derrière les minions, Q-poke quand elle rate ses traps et W-root la si ton support la touche en premier.
- **Draven :** Lane bully. Évite les trades d'auto-attaque au level 1-3 ; il gagne les échanges de DPS directs. Attends le poke Q quand il est occupé à stacker ses haches ; s'il sur-engage, ton crit du 4ème tir le punit fort.
- **Lucian :** Il burst pendant tes fenêtres de reload. Surveille ton compteur de 4 tirs (l'icône du revolver montre les tirs restants) et n'initie jamais un trade avec le tir 3 ou 4 — recharge d'abord, engage ensuite.
- **Sivir :** Son spell shield bloque ton W-root. Force le shield avec Q d'abord, puis lance W quand il est en cooldown. Après le 6, sa R lui permet de te chase, alors fight uniquement quand ton support a du CC pour follow-up.
- **Soraka / Yuumi :** Supports pure-heal. Achète Mortal Reminder en 3ème ou 4ème item ; sans Grievous Wounds (le debuff qui coupe les soins de moitié) tu ne les tues pas peu importe combien de tirs tombent.

## Power spikes & conditions de victoire

- **Level 2-3 :** Avec **Q** et **W**, tu as le pattern d'all-in level 2 le plus fort de la lane : engage support → AA → Q → W root pour le crit du 4ème tir. Force un fight la première fois que tu atteins level 2 avant l'adversaire.
- **Level 6 :** **Curtain Call** se débloque. Tu peux finir des kills initiées par ta jungle au river ou pick un ennemi à bas HP à un écran de distance pendant un recall. Aie toujours R prête avant le début des fights d'objectifs.
- **Complétion de The Collector (~ minute 11-13) :** Spike de premier item. Le 5% d'execute te laisse fermer des kills initiées par ton support. C'est la fenêtre où snowballer la lane (transformer une avance early en avance d'items, qui devient une avance de kills) est le plus facile.
- **Infinity Edge online (~ minute 28-32) :** Spike de trois items. Ton 4ème tir one-shot la plupart des champions non-tank. Force les teamfights sur les objectifs maintenant — Jhin late avec IE + Rapid Firecannon touche les backlines (les carrys derrière les tanks) hors de portée de leur R.

## Erreurs courantes

- **Auto-attaquer quand le tir 4 est chargé sur un tank.** Le 4ème tir execute est gâché sur les frontliners full HP. Garde le 4ème tir pour une cible squishy qui s'avance, ou last-hit un minion pour rafraîchir le cycle avant de re-engage.
- **Avancer pendant le reload.** Après le 4ème tir, tu dois recharger avant la prochaine auto-attaque. Recule pendant cette fenêtre — beaucoup de morts de Jhin arrivent dans la demi-seconde où l'ennemi réalise que tu ne peux pas tirer.
- **Lancer W à l'aveugle pour poke.** W ne root que si la cible a été récemment touchée par toi ou un allié (dans les ~4 secondes). Place une auto-attaque ou attends l'engage du support d'abord ; sinon W n'est qu'une ligne de dégâts lente qu'ils peuvent esquiver.
- **Channeller R sans vision.** Jhin est immobilisé pendant Curtain Call. Sans wards qui couvrent les flancs, un assassin contourne et te tue en plein channel. Pose E (le piège lotus) sur le flanc avant de presser R.
- **Sauter le placement de E sur les objectifs.** Les pièges lotus couvrent les entrées de la fosse Drake et Baron à coût zéro. Place-les à chaque cooldown — ils révèlent les flancs, slow l'engage et confirment les W-roots.

## Conseil avancé

Utilise **E** (Captive Audience) comme confirm pour les root **W**. Le piège lotus s'arme de façon invisible et slow les ennemis qui marchent dessus ; si tu prédis où le support adverse va marcher pour ward, drop **E** là 2 secondes en avance, puis lance **W** au moment où le slow du piège se déclenche — le slow rend le W-skillshot longue portée à 3000 impossible à dodge depuis n'importe quel point de la map. Les Jhin expérimentés réussissent au moins un W-root à 3000 de portée par fight avec cette technique.
