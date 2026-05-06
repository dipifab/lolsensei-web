---
title: "Galio Support Build & Guide — Patch 16.9"
slug: "galio-support"
language: "fr"
patch: "16.9"
champion: "galio"
role: "support"
last_updated: "2026-05-02"
description: "Guide Galio support pour League of Legends Patch 16.9 : starter kit, build engage-tank, matchups clés, power spikes, erreurs courantes et une astuce technique finale."
quick_learn:
  champion_dd_id: "Galio"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Vanguard / Engage Support"
  abilities:
    - key: "P"
      name: "Colossal Smash"
      description: "Toutes les quelques secondes, la prochaine auto-attack de Galio inflige des dégâts magiques bonus dans une petite zone à l'impact."
      dd_spell_id: "Galio_Passive"
    - key: "Q"
      name: "Winds of War"
      description: "Deux rafales de vent qui convergent en tornade au point ciblé, infligeant des dégâts magiques sur la durée. Poke longue portée depuis une position sûre."
      dd_spell_id: "GalioQ"
    - key: "W"
      name: "Shield of Durand"
      description: "Charge un bouclier qui absorbe les dégâts magiques ; relâche pour taunt et infliger des dégâts autour. Utilise-la en plein fight pour peel ton ADC (protéger le carry des divers)."
      dd_spell_id: "GalioW"
    - key: "E"
      name: "Justice Punch"
      description: "Recule brièvement puis dash devant, lançant en l'air le premier champion touché. Outil d'engage principal."
      dd_spell_id: "GalioE"
    - key: "R"
      name: "Hero's Entrance"
      description: "Désigne un allié ; après un délai, Galio s'écrase sur sa position, bouclant les alliés et envoyant les ennemis en l'air. Engage cross-map."
      dd_spell_id: "GalioR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "E" }
    - { level: 9, key: "Q" }
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
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "3109", name: "Knight's Vow" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "contre CC single-target lourd sur ton ADC (Morgana Q, Ashe R, Skarner R) — l'actif cleanse et soigne"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "avec ADC auto-attack (Jinx, Caitlyn, Tristana) — le slow de W enchaîne dans leur fenêtre DPS"
    - dd_id: "8020"
      name: "Abyssal Mask"
      against: "avec compo alliée à dégâts magiques (AP mid + AP jungle) — l'aura amplifie les dégâts magiques sur les cibles tauntées"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "contre 3+ menaces AP côté ennemi (mid + jungle + support à dégâts magiques)"
    - dd_id: "3107"
      name: "Redemption"
      against: "avec ADC enchanter ou compo très heal (Soraka, Sona, Yuumi déjà dans l'équipe) — heal de groupe en objective fight"
  base_combo: ["E", "AA", "W"]
  win_condition: "Utilise Hero's Entrance R pour engage cross-map sur les spawns de Drake et Rift Herald. En skirmish bot, ouvre par E knockup, W taunt pour peel l'ADC, puis Knight's Vow redirige les dégâts loin de ton carry."
  weakness: "Charge W interruptible par les hooks (Blitzcrank, Thresh) et les silences. Enchanters disengage (Janna, Lulu) annulent le follow-up de R. Dégâts solo limités : il faut l'ADC pour conclure les kills."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primaire : Aftershock proc sur taunt W ou knockup R et donne les résistances pour survivre après l'engage. Font of Life soigne l'ADC qui frappe la cible immobilisée, Bone Plating absorbe le premier burst, Revitalize amplifie le bouclier de R."
    secondary_rationale: "Inspiration secondaire : Biscuit Delivery donne HP et mana gratuits en lane (Galio est mana-hungry sur un revenu de support), et Cosmic Insight réduit le cooldown de Flash — vital car R+Flash est ton catch tool le plus impactant."
    secondary_alternative: "Contre une lane de poke lourd (Brand, Zyra, Xerath support) où tu n'atteins pas le niveau 6 sainement, swap Inspiration pour Sorcery avec Manaflow Band (plus de mana pour le poke Q en retour) et Transcendence (E plus rapide pour esquiver le poke)."
matchup_draft:
  pick_into:
    - examples: ["ashe", "caitlyn", "jhin"]
      archetype: "ADC immobiles sans dash"
      reason: "Hero's Entrance atterrit sur ton allié avec knockup ; les carries sans dash ne peuvent pas s'échapper, donc tout 2v2 devient une kill dès que R est up."
    - examples: ["leona", "rakan"]
      archetype: "Tank engage supports sans hook"
      reason: "Le knockup E de Galio interrompt leur windup d'engage (Q stun-walk de Leona, charge W de Rakan) ; le bouclier W absorbe ensuite les dégâts magiques de leur follow-up post-engage."
    - examples: ["brand", "zyra"]
      archetype: "Mage supports squishy sans escape"
      reason: "Les mage supports restent immobiles pour placer leurs skillshots ; le E de Galio les atteint à travers les minions et le W tank le burst qui chasserait normalement un melee engager."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "Hook supports"
      reason: "Un hook qui tombe sur Galio en plein W annule tout l'engage ; c'est une grosse cible sans dodge tool intégré, et un hook avec chain CC retire la R et le E du fight."
    - examples: ["janna", "lulu", "milio"]
      archetype: "Enchanters de disengage"
      reason: "Leur AOE knock-aside ou leurs sorts shield-and-cleanse annulent la fenêtre d'atterrissage de R et le taunt W — quand Galio tombe, le carry est déjà disengage hors de portée."
    - examples: ["xerath", "vel-koz"]
      archetype: "Mage supports artillerie longue portée"
      reason: "Ils poke hors de la portée du Q de Galio et de la distance du dash E, donc impossible de les punir en lane ; le manque de HP pré-6 freine son impact en sidelane avec R."
---

## Aperçu

Galio support est l'outil d'engage (lancement de fight) cross-map dans une coque de tank. Il apporte du hard CC — du contrôle que l'ennemi ne peut pas annuler avec un cleanse de base — sur trois sorts différents : **W** taunt (force la cible à t'attaquer), **E** knockup (envol bref, comme un stun court), **R** knockup. Il a un bouclier magique pour encaisser le burst (gros dégâts en 1-2 secondes) des supports à distance, et un ulti global qui transforme les spawns de Drake et Rift Herald en opportunités de kill 5v5. Il joue support parce que son impact scale avec la map awareness, pas avec l'or — et parce que Hero's Entrance est plus utile quand les coéquipiers ont besoin d'un tank qui leur tombe dessus, pas quand il est lui-même ce tank.

Le plan de jeu en lane est patient : utilise Q à portée maximale pour chip l'ennemi, garde E pour le moment où ton ADC (le marksman, le carry qui auto-attack pour faire des dégâts) commit le fight, et ne charge W que lorsque l'ennemi est déjà collé en mêlée à toi. Les big plays arrivent au niveau 6 — quand ton jungler dive top (passe sous tour pour une kill), tu R ; quand le jungler ennemi montre bot, tu R en arrière sur ton top. La skill expression vit dans le timing du W (relâche pour interrompre les channels clés — R de Caitlyn, ulti spray de Twitch, Q de Master Yi) et dans le choix de la cible R (prends toujours l'allié avec le plus de chances de survivre les 2 secondes de channel — jamais R sur un Vayne déjà low HP).

## Build Recommandé

**Items de départ :** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Starter standard de support ; l'upgrade de la quête (une mission intégrée qui se complète en farmant de l'or au fil du temps) se débloque vers la minute 12-14.

**Items core (dans l'ordre) :**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — upgrade de la quête World Atlas, choisi parce que Galio est engage-leaning (il lance les fights, ne disengage pas). Ajoute une passive de dégâts on-immobilized qui proc (se déclenche automatiquement) à chaque W ou E qui touche.
2. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — actif bouclier de zone pour les skirmishes 5v5. Combine avec R : tu atterris avec R, drop Locket à l'impact, et ton équipe encaisse le burst de follow-up ennemi avec un bouclier de 700+ chacun.
3. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — bottes d'ability haste. Coupe le cooldown de chaque sort, donc tes outils d'engage reviennent plus vite entre les teamfights, et le CDR sur Summoner Spells raccourcit Flash pour les combos R+Flash.
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — bind sur le carry à plus haut impact. Redirige les dégâts depuis lui sur toi et booste la valeur d'Aftershock puisque tu deviens le focus prioritaire.

**Items situationnels :**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — contre CC single-target lourd sur ton ADC (Morgana Q, Ashe R, Skarner R). L'actif cleanse le contrôle et soigne.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — avec ADC auto-attack (Jinx, Caitlyn, Tristana). Le slow de ton W enchaîne directement dans leur fenêtre DPS.
- ![Abyssal Mask](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/8020.png) **Abyssal Mask** — avec compo alliée à dégâts magiques (AP mid + AP jungle). L'aura amplifie les dégâts magiques de ton équipe sur les cibles que tu taunt avec W.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — contre 3+ menaces AP côté ennemi (mid + jungle + support tous à dégâts magiques).
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — avec ADC enchanter ou compo très heal (Soraka, Sona, Yuumi déjà dans l'équipe).

**Bottes :** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** par défaut — ability haste plus réduction de CD Flash rendent les combos R+Flash dispo plus souvent. Switch sur ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contre les compos avec beaucoup de CC (plusieurs stuns/charms/roots dirigés sur toi pendant l'atterrissage R).

**Skill order :** Max **E** en premier (cooldown d'engage plus court). Max **Q** en second (waveclear et chip damage quand l'ADC est shoved — coincé sous sa tour sans minion à farm). **W** en dernier. Un point dans **R** aux niveaux 6, 11, 16.

**Runes :** Primaire **Resolve** avec **Aftershock**, **Font of Life**, **Bone Plating**, **Revitalize**. Secondaire **Inspiration** avec **Biscuit Delivery** et **Cosmic Insight**. Swap secondaire pour **Sorcery** (Manaflow Band + Transcendence) dans les lanes de poke lourd où tu n'atteins pas le niveau 6 sainement.

## Matchups clés

- **Blitzcrank :** Lane difficile. Son Q hook tombe pendant ta charge W. Reste derrière ta wave de minions pour qu'il ne hook pas à travers, ne charge jamais W en fog of war, et appelle ton jungler vers la minute 4-5 — Blitz n'a pas d'escape et ton E knockup le chain-lock.
- **Lulu :** Disengage difficile. Son bouclier E + W (knock-aside ou polymorph) annule ton engage. Utilise Q pour poke à portée max pré-6 plutôt que de partir en E engage, et R hors écran pour que le polymorph ne tombe pas avant ton arrivée.
- **Leona :** Fight équilibré. Vous êtes tous les deux engagers, donc le côté qui place E en premier gagne le trade. Bait son Q sun-strike avec ton pas en avant, puis E pendant le frame de recovery.
- **Soraka :** Favorable. Son healing ne compte que si elle reste à portée. Q à distance max pour qu'elle doive choisir entre soigner et esquiver, puis R + E quand ton jungler montre bot pour un 3v2 imparable.
- **Pyke :** Fight équilibré, mais Galio perd si Pyke prend une kill. Track ses hooks, ne laisse jamais ton ADC à HP minimum quand tu ne peux pas ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** sur la spike, et ward le river en profondeur car son R est un reset.

## Power spikes & conditions de victoire

- **Niveau 2 :** Q + E débloque la première menace de kill. Avec follow-up de l'ADC, avance, E sur le support et Q sous l'ADC — le slow dans le knockup enchaîne assez longtemps pour deux auto-attacks de dégâts.
- **Niveau 6 :** **Hero's Entrance** débloque l'impact cross-map. Le premier fight de Drake est ton power spike — push fort la wave, marche au river de mid et R sur ton jungler quand il engage sur le dragon pit.
- **Bloodsong terminé (~ minute 12-14) :** Tes engages font maintenant de vrais dégâts. La passive on-immobilize ajoute 30+ dégâts magiques par hit sur la cible W ou E.
- **Locket of the Iron Solari + Knight's Vow online (~ minute 20-25) :** Ton spike à deux items. R-into-Locket sur le carry couvre 600+ HP effectifs pour l'équipe, pendant que Knight's Vow tank le focus fire sur toi et que ton ADC continue de DPS.

## Erreurs courantes

- **Charger W quand ton ADC n'a pas de follow-up.** Le taunt W force l'ennemi à t'attaquer, mais si l'ADC repositionne ou recall, tu encaisses les dégâts gratuitement sans trade. Synchronise le release de W avec la première fenêtre d'auto-attack de l'ADC.
- **Hero's Entrance sur la mauvaise cible.** Jamais R sur un allié déjà low HP — il meurt pendant les 2 secondes de channel et tu atterris sur un cadavre. Choisis le frontline avec le plus de HP dans ton équipe.
- **Ignorer la wave pendant les roams.** Un Galio support qui R sur mid en cédant une wave bot complète est une net loss. Push d'abord la wave à la tour ennemie, puis roam — jamais roam depuis une lane gelée.
- **Engager sans ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket actif.** En objective fight, R-Locket est ton cooldown le plus précieux. Garde l'actif jusqu'à ce que ton équipe commit le fight, puis drop les deux dans le même instant pour la valeur de bouclier maximale sur plusieurs alliés.
- **Max W en second.** Comme Galio mid, le rank-up de W donne une réduction de cooldown marginale. Max E pour la fenêtre d'engage de 4 secondes au niveau 8.

## Conseil avancé

Combo R+Flash : lance Hero's Entrance sur un coéquipier, puis Flash pendant l'animation de windup pour rediriger ton point d'atterrissage de 400 unités dans n'importe quelle direction. L'équipe ennemie voit l'indicateur R sur ton allié et anticipe le knockup évident, et ton landing flashé clip une cible hors du rayon R visible. Demande de la pratique pour timer le Flash dans la fenêtre du channel — mais un seul R+Flash sur le carry ennemi, off-vision (l'ennemi ne te voit pas car tu es dans la fog of war), termine les parties avant qu'elles commencent.
