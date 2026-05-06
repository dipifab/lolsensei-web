---
title: "Ashe ADC Build & Guide — Patch 16.9"
slug: "ashe-bot"
language: "fr"
patch: "16.9"
champion: "ashe"
role: "bot"
last_updated: "2026-04-29"
description: "Guide Ashe ADC bot lane pour League of Legends Patch 16.9 : setup de kiting avec Frost Shot, build marksman, matchups clés, power spikes, erreurs courantes et astuce finale."
quick_learn:
  champion_dd_id: "Ashe"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Marksman / Utility"
  abilities:
    - key: "P"
      name: "Frost Shot"
      description: "Chaque auto-attaque ralentit la cible. Les crits ne font pas de dégâts bonus mais appliquent un slow plus fort. Base du kiting (reculer en attaquant) d'Ashe."
      dd_spell_id: "Ashe_Passive"
    - key: "Q"
      name: "Ranger's Focus"
      description: "Stack via auto-attaques. À stacks max, active pour gagner de l'attack speed bonus et transformer chaque AA en rafale de flèches à dégâts boostés. Bouton DPS principal."
      dd_spell_id: "AsheQ"
    - key: "W"
      name: "Volley"
      description: "Cône de flèches à 1200 de portée devant. Chaque ennemi ne reçoit qu'une flèche et subit le slow de Frost Shot. Outil principal de poke et de trade en lane."
      dd_spell_id: "Volley"
    - key: "E"
      name: "Hawkshot"
      description: "Envoie un faucon n'importe où sur la map pour 5 secondes de vision (capacité à voir dans la fog of war). 2 charges. Sert au scouting d'objectif, pas aux dégâts."
      dd_spell_id: "AsheSpiritOfTheHawk"
    - key: "R"
      name: "Enchanted Crystal Arrow"
      description: "Skillshot global (compétence non ciblée qui voyage en ligne droite). Stun le premier champion touché ; plus la flèche voyage longtemps, plus le stun dure (jusqu'à ~3.5s)."
      dd_spell_id: "EnchantedCrystalArrow"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
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
    - { dd_id: "3087", name: "Statikk Shiv" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3031", name: "Infinity Edge" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contre stackers de HP/armor (Cho'Gath, Sion, Malphite, Ornn) — % armor pen reconvertit les AA en dégâts réels"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contre comps qui empilent les soins (Soraka, Vladimir, Aatrox) — applique Grievous Wounds (réduit les soins ennemis de 50%)"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "contre assassins ou divers (Zed, Kha'Zix, Talon) — la passive Ghost te fait traverser les unités en kitant"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "contre poke lourd ou burst comp — gros lifesteal heal + buffer d'overshield"
  base_combo: ["W", "AA", "Q", "AA"]
  win_condition: "Étale les slows de Frost Shot en teamfight, kite derrière ta front line avec les AA boostées par Q et finis les targets isolés au R cross-map pour contrôler les objectifs."
  weakness: "La movement speed de base la plus lente de tous les marksmen. Aucun dash, aucun reposition tool — divers et assassins qui rentrent au corps à corps la suppriment si le support ne peut pas peel."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["vayne", "twitch", "kalista"]
      archetype: "Marksmen courte portée sans poke early"
      reason: "Le W d'Ashe a 1200 de portée et applique le slow de Frost Shot ; elle les poke depuis hors de leur 500-550 d'AA et chaque approche devient un trade gagné pour son côté."
    - examples: ["kog-maw", "senna"]
      archetype: "Carrys scaling immobiles"
      reason: "Le R cross-map les supprime aux spawns d'objectif ou pendant les fenêtres de reset à la fountain. Leur kit n'a pas de dash pour échapper à la flèche qui sort de la fog of war."
    - examples: ["ornn", "sejuani"]
      archetype: "Front lines tank lentes sans dive mobile"
      reason: "Ashe slow en continu la front line avec W + auto-attaques, force les fights à durer jusqu'à ce que ses items DPS finissent la back line. Les tanks ne la touchent pas si elle kite avec son support."
  counterpicks:
    - examples: ["caitlyn", "jhin", "varus"]
      archetype: "Marksmen longue portée avec poke"
      reason: "Caitlyn 650 AA, Jhin 4e tir à 750, Varus W stacks à 925 — ils outpokent les 600 d'AA d'Ashe et lui drainent les HP chaque wave sans jamais entrer dans la portée du W."
    - examples: ["lucian", "tristana"]
      archetype: "Marksmen haute mobilité avec dash"
      reason: "Le E de Lucian et le W de Tristana ignorent le slow d'Ashe en se repositionnant instantanément. Ils ferment la distance sans payer la taxe de kiting qui pèse sur tous les autres ADC."
    - examples: ["pyke", "leona", "nautilus"]
      archetype: "Supports d'engage avec burst et hard CC"
      reason: "Ashe n'a ni dash ni shield pour échapper à une chaîne de lock-down. Un Q de Leona ou de Nautilus réussi la sort du trade avant qu'elle puisse W back, et son slow ne sert à rien stunée."
---

## Aperçu

Ashe est le marksman le plus simple de League — un rôle appelé "ADC" (attack damage carry : un champion ranged qui fait des dégâts à l'auto-attaque et devient la source principale de dégâts en late-game). Elle n'a pas de dash, pas de reposition tool, et la movement speed de base la plus lente du rôle. En échange, elle hérite du kit le plus fiable en utility de tous les ADC : chaque auto-attaque ralentit la cible, son **W** poke (inflige du chip damage à distance pour rogner les HP sans s'engager dans un fight) à 1200 unités (environ la moitié de l'écran) avec slow attaché, et son **R** est un skillshot global qui stun et offre à l'équipe des engages gratuits sur les objectifs partout sur la map. Elle est conçue pour **kite** — reculer tout en attaquant pour garder l'ennemi à distance — et pour activer les picks (élimination d'un ennemi isolé hors d'un teamfight) pour le reste de l'équipe.

Son plan en lane consiste à poser **W** sur l'ADC adverse à chaque cooldown pour le slow et lui rogner ses HP, farmer tranquillement à l'auto-attaque, et chercher des plays au niveau 6 avec **R** dès que son support a un CC prêt (Crowd Control : stuns, slows, roots qui bloquent l'ennemi sur place). En teamfight (combats 5v5 qui décident des objectifs comme Drake ou Baron — monstres neutres qui donnent des buffs à l'équipe qui les tue), elle reste à portée maximale d'AA derrière sa front line (les tanks/bruisers qui ouvrent le fight), active **Q** quand elle a 4 stacks (charges de Q qui s'accumulent avec les auto-attaques ; le compteur s'affiche sous son portrait) et enchaîne les slows sur quiconque touche sa front line. La compétence la plus dure à maîtriser sur Ashe, c'est la prédiction du **R** — sniper avec une seconde de temps de vol fait la différence entre un pick gratuit et une ult gaspillée.

## Build Recommandé

**Items de départ :** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** (un peu d'AD + lifesteal — soigne une partie des dégâts infligés) + 1 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**.

**Items core (dans l'ordre d'achat) :**

1. ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv** — power spike au premier item (le moment où un champion devient nettement plus fort après avoir terminé un objet). Les AA fréquentes d'Ashe procent (déclenchent) la passive Energized (effet à stacks qui libère des dégâts magiques bonus sur une AA chargée) très vite.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — bottes d'attack speed. La Q boostée d'Ashe scale avec l'attack speed, donc elles aident à chaque fight à partir de la minute 8.
3. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — ajoute deux flèches latérales à chaque AA. Les flèches latérales appliquent le slow de Frost Shot aux cibles proches, donc Ashe slow toute l'équipe adverse en teamfight juste en frappant le tank de la front line.
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — multiplicateur de crit (critical strike : chance qu'une AA inflige ~175% de dégâts) en late game. À ce stade, la Q boostée passe de "fait mal" à "supprime les squishys en 2 secondes" (squishy : champion avec peu de défenses).

**Items situationnels :**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contre stackers de HP/armor (Cho'Gath, Sion, Malphite, Ornn). La pénétration d'armure en pourcentage ignore une part fixe de l'armor adverse, donc les tanks meurent à la même vitesse que les squishys.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contre comps qui empilent les soins (Soraka, Vladimir, Aatrox). Applique Grievous Wounds (statut qui réduit de moitié les soins reçus par les ennemis).
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — contre assassins ou divers (Zed, Kha'Zix, Talon — champions conçus pour plonger sur la back line). Sa passive Ghost te laisse traverser les minions et les champions adverses pendant que tu kites.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — contre poke lourd (chip damage longue portée des artillery mages) ou contre burst comps. Le lifesteal te soigne en plein fight ; en overheal, il stocke les HP en bouclier.

**Bottes :** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** est le seul choix correct sur Ashe. L'attack speed se traduit directement en DPS de Q boostée.

**Skill order :** Maxe **Q** en premier (plus d'AD bonus par AA boostée + active plus longue). Maxe **W** en second (cooldown qui passe de 18s rank 1 à 4s rank 5 — c'est le spam de poke en lane). Maxe **E** en dernier (utility uniquement). Mets un point dans **R** aux niveaux 6, 11, 16.

**Runes :** Arbre primaire **Precision** (l'arbre qui scale avec les AA) avec **Lethal Tempo** (attack speed supplémentaire en continuant d'auto-attaquer un champion), **Triumph** (soigne sur takedown), **Legend: Alacrity** (plus d'attack speed scaling par stack), **Coup de Grace** (dégâts supplémentaires sous 40% HP). Arbre secondaire **Inspiration** avec **Biscuit Delivery** (biscuits gratuits qui donnent mana et HP en lane) et **Cosmic Insight** (plus d'uptime de **Flash** et **R**).

## Matchups clés

- **Caitlyn :** Le matchup le plus dur. Elle a 650 de portée AA contre tes 600, des traps (W) plus longues et un hook (E) à 1300. Cache-toi derrière les minions quand elle pose ses pièges ; laisse ton support engager sur elle uniquement si elle overextend (avance trop loin de ses minions, sans escape si gankée). Power-farme tranquillement (concentre-toi uniquement sur l'or des minions sans prendre de risque) jusqu'à ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv**, puis cherche les picks cross-map au **R**.
- **Lucian :** Perd contre Ashe au niveau 1 mais inverse au niveau 2 avec le combo Q + E. Garde **W** pour quand il fait double-AA sur toi (place deux auto-attaques d'affilée), puis recule pendant qu'il est bloqué en milieu de combo. Ne tradees jamais après son **E** — son dash le rend insaisissable jusqu'à ce qu'il revienne en cooldown.
- **Vayne :** Pre-6 farm gratuit : 550 de portée et aucun slow. Push la wave (envoie tes minions vers sa tour) côté adverse, harcelle (chip damage continu pour rogner ses HP) au **W** chaque cooldown. Après le 6 son ult lui donne l'invisibilité sur le dash de Q ; ne la chasse pas dans les bushes (zones de terrain qui bloquent la vision).
- **Jhin :** Outpoké à longue portée par son W (skillshot de poke). Reste derrière ta première ligne de minions ; son W le ralentit lui-même s'il touche un minion en premier. Punis-le pendant son rechargement (chargeur de 4 tirs + reload manuel de 2.5 secondes).
- **Draven :** Perd la guerre d'AA frontalement — ses haches Q font bien plus de dégâts par AA que ta basique. Évite les trades 1-pour-1 ; ne commit que quand ses haches ne sont pas dans ses mains. Achète ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** plus tôt que d'habitude s'il prend une avance de 3 kills.

## Power spikes & conditions de victoire

- **Niveau 1 :** Forte avec **W**. Le cône à 1200 de portée est le meilleur outil de trade lvl 1 de tous les ADC (un "trade" est un bref échange de dégâts en lane, pas une tentative de kill complet). Prends un trade gratuit sur l'ADC adverse s'il s'avance pour un cs (creep score : last-hit d'un minion pour récupérer son or).
- **Niveau 6 :** Le premier **R** débloque les kills en lane avec n'importe quel support à CC. Si ton Leona / Nautilus / Pyke a son ult, R + leur engage = kill garantie sur l'ADC adverse s'il n'est pas full HP sous tour.
- **![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) Statikk Shiv terminé (~ minute 11-13) :** Le waveclear (nettoyer la wave adverse avec des dégâts AOE) bascule. Tu peux shove la wave avec W + 2 AA, puis roam (quitter la lane pour aider les alliés) pour des plays cross-map de **R** sur Drake ou des skirmishes mid (petits combats à 2-3 joueurs dans la rivière ou la jungle).
- **![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge en ligne (~ minute 26-30) :** La Q boostée avec les crits dissout la back line en 2-3 secondes. Force un teamfight à chaque objectif à partir de là.

## Erreurs courantes

- **Activer Q à stacks bas.** **Q** ne fait des dégâts que si tu as 4 stacks (visibles sous ton portrait). L'activer plus tôt gaspille 30 mana pour une Q décevante. Auto-attaque 4 fois d'abord, puis appuie sur Q.
- **Lancer R en cooldown en lane.** **R** est l'outil le plus précieux de ton équipe (stun cross-map pour les fights de Drake, setups Baron). La garder pour les fights d'objectif vaut presque toujours plus que la brûler pour un trade en lane. L'exception : une fenêtre de kill létale où R garantit le finish.
- **Rester immobile en auto-attaquant en fight.** Ashe est conçue pour kiter ; rester immobile signifie manger des skillshots que tu esquiverais en bougeant. Bouge d'un pas entre chaque AA pour casser le timing adverse.
- **Push la wave sans vision.** Ashe n'a pas d'escape. Si tu push au-delà du mid-river sans que ton support warde le tribush et la rivière, le jungler adverse te tue gratis. Toujours **W** le bush que tu ne vois pas avant d'avancer.
- **W les minions en cooldown.** **W** coûte 75/70/65/60/55 mana et le slow est le meilleur outil de harass en lane. Garde **W** pour l'ADC adverse, pas pour la wave.

## Conseil avancé

Entraîne le **flash R** — quand un ennemi est sur le point de s'échapper dans la fog of war à bas HP, **Flash** dans la direction où il court, puis lance **R** immédiatement. Le flash te repositionne 400 unités en avant, donc le **R** parcourt 400 unités de moins avant l'impact — mais la durée du stun scale avec la distance parcourue, donc cette technique ne marche que comme finisher sur des cibles near-execute (ennemis déjà assez bas pour mourir au moindre coup supplémentaire). La condition de victoire : l'ennemi pense s'être échappé à 200 HP parce qu'Ashe semble encore à 1500 unités, sans voir le flash + R qui boucle la poursuite.
