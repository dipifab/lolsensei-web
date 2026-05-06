---
title: "Darius Top Build & Guide — Patch 16.9"
slug: "darius-top"
language: "fr"
patch: "16.9"
champion: "darius"
role: "top"
last_updated: "2026-04-29"
description: "Guide Darius top lane pour League of Legends Patch 16.9 : build juggernaut, pression des stacks d'Hemorrhage, matchups clés, power spikes, erreurs courantes et astuce finale."
quick_learn:
  champion_dd_id: "Darius"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Juggernaut / Bruiser"
  abilities:
    - key: "P"
      name: "Hemorrhage"
      description: "Les auto-attacks et sorts qui infligent des dégâts appliquent un stack de saignement. À 5 stacks Darius enrage, gagne un gros bonus AD pendant quelques secondes et le bleed tick fort."
      dd_spell_id: "Darius_Passive"
    - key: "Q"
      name: "Decimate"
      description: "Coup de hache chargé en large anneau. Toucher avec la lame extérieure inflige les dégâts complets, applique un stack de bleed et soigne Darius. Le manche intérieur fait demi-dégâts, sans stack."
      dd_spell_id: "DariusCleave"
    - key: "W"
      name: "Crippling Strike"
      description: "Prochaine auto-attack améliorée : dégâts bonus et gros slow. Reset le timer de l'auto : place-la entre deux autos normales pour maximiser les dégâts par seconde."
      dd_spell_id: "DariusNoxianTacticsONH"
    - key: "E"
      name: "Apprehend"
      description: "Passif : armor pen flat. Actif : hook de hache à courte portée qui tire et ralentit les ennemis dans un cône. Seul gap-closer du kit."
      dd_spell_id: "DariusAxeGrabCone"
    - key: "R"
      name: "Noxian Guillotine"
      description: "Saut sur un champion infligeant des true damage qui scalent avec les stacks de bleed déjà posés. Si elle tue, le cooldown se reset et tu peux la relancer sur une autre cible."
      dd_spell_id: "DariusExecute"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap des Plated Steelcaps contre beaucoup de magic damage ou des chaînes de CC (Lissandra, Malphite ult, pull de Sett)"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "contre des frontlines empilant l'armor (Malphite, Rammus, Shen) — chaque Q rogne l'armor pour toute l'équipe"
    - dd_id: "3065"
      name: "Spirit Visage"
      against: "contre des compos AP lourdes quand il faut MR et healing-amp en plus de Death's Dance et R lifesteal"
    - dd_id: "6694"
      name: "Serylda's Grudge"
      against: "contre des squads empilant armor et tenacity (Rammus, Tahm Kench, Malphite) — armor pen et slow à l'impact"
    - dd_id: "3742"
      name: "Dead Man's Plate"
      against: "quand il faut du Move Speed pour rattraper les kiters (Quinn, Vayne top, Gnar) et entrer en portée R"
  base_combo: ["E", "AA", "W", "Q", "AA", "R"]
  win_condition: "Stack Hemorrhage à 5, exploite la fenêtre d'enrage pour le bonus AD, finis avec R en true damage. Convertis les kills early en timing Stridebreaker qui snowball les 1v1 side lane et les dives bot."
  weakness: "Aucune mobility hors du pull court d'E et du saut one-shot R. Les kiters longue portée, tops ranged et champions qui gardent la distance (Quinn, Vayne, Teemo, Gnar) le privent de stacks et de trades."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
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
    - examples: ["sett", "garen", "volibear"]
      archetype: "Bruisers melee courte portée sans gros disengage"
      reason: "Darius gagne les trades prolongés car chaque auto et Q applique un stack de bleed : quand l'adversaire veut désengager, la fenêtre d'enrage à 5 stacks a déjà fait basculer l'échange en sa faveur."
    - examples: ["nasus", "kayle"]
      archetype: "Melee scaling late avec early lane faible"
      reason: "Leurs 6 premiers niveaux sont passifs — Darius peut les chasser de la wave avec E + W à répétition, les tuant avant qu'ils n'atteignent les items qui les rendent dangereux."
    - examples: ["yasuo", "yone"]
      archetype: "Carries melee qui combattent dans la portée Q"
      reason: "Ils doivent entrer en portée Q pour faire des dégâts. Wind Wall bloque les projectiles mais pas un coup melee, donc une Q en bord de lame applique le stack de bleed et lance le snowball."
  counterpicks:
    - examples: ["quinn", "teemo", "vayne"]
      archetype: "Tops ranged ou kiters"
      reason: "Ils restent hors portée d'E et grattent le HP de Darius gratuitement. Sans gap-closer au-delà d'E (hook courte portée) ou R (saut one-shot), il ne pose jamais de stacks et perd la prio de lane."
    - examples: ["fiora", "camille"]
      archetype: "Duellistes true damage avec parry ou shield"
      reason: "Le W de Fiora pare le knock-up et ses Vitals (petites marques qu'elle auto en true damage — dégâts qui ignorent armor et MR) contournent le build HP ; le R de Camille isole Darius de son équipe et le bat en fight prolongé."
    - examples: ["gnar", "kennen"]
      archetype: "Tops ranged avec CC intégré"
      reason: "Ils pokent hors portée Q et ont des stuns ranged : le throw de Gnar méga-form, le W de Kennen. Ils gardent Darius en HP bas sans jamais entrer dans sa fenêtre de trade."
---

## Aperçu

Darius est un **juggernaut** (champion melee lent et immobile qui frappe très fort et tank les dégâts en duel direct) construit autour du stacking de sa passive **Hemorrhage** sur une cible. Chaque auto-attack et chaque Q qui touche avec la **lame extérieure** applique un stack de bleed. À **5 stacks** il enrage pendant quelques secondes et gagne un énorme bonus AD — c'est la fenêtre où il tue ou explose l'adversaire. Son kit lui donne exactement un gap-closer court (**E**, hook de 535 unités) et un saut à long cooldown (**R**, exécution en true damage qui se reset à chaque kill). En dehors de ces deux outils, il marche à Move Speed de base et meurt face à quiconque sait garder ses distances.

Le game plan est simple : **rester collé à la cible jusqu'à ce qu'elle meure**. En lane, touche la Q avec la **lame extérieure** (pas avec le manche intérieur — le manche fait demi-dégâts et zéro stack), pour rogner du HP et te soigner ; prépare l'all-in avec **E** (pull, knock-up, slow) quand l'ennemi a déjà 2-3 stacks, et déclenche avec **W** + chaînes d'auto-attacks. À partir du mid-game, **R** est un bouton de kill : même à 0 stack elle fait beaucoup de **true damage** (dégâts qui ignorent armor et MR — aucune stat défensive ne les réduit), et le cooldown se reset à chaque kill, donc un teamfight propre peut enchaîner 2-3 R d'affilée. C'est l'un des **bruisers** (combattants melee qui mélangent dégâts et survivabilité) les plus forts au moment où Stridebreaker sort.

## Build Recommandé

**Starting items :** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. La passive de regen HP amortit le poke (dégâts à distance bon marché qui rognent le HP sans engager de fight) adverse jusqu'au power spike de niveau 2. Prends ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** uniquement contre une lane melee où tu comptes all-in niveau 1-2 (ex. mirror Darius).

**Core items (dans l'ordre) :**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — premier spike (le moment où ton damage et ta **stickiness** — capacité à rester collé à une cible qui veut fuir — font le plus grand bond). L'actif est un dash court qui slow tout en cône — exactement le second gap-closer (outil pour combler la distance vite) qui manque à Darius. AD, HP et ability haste (stat qui réduit les cooldowns) collent à ce que le kit demande.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots par défaut quand l'ennemi te fait mal surtout en auto-attack. Elles réduisent ce damage en trades prolongés (échanges répétés en lane).
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP plus un **shield lifeline** : quand ton HP descend sous ~30%, un shield automatique s'active. Cette fenêtre est exactement celle où il te faut du temps en plus pour landa la R sur le reset.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — transforme le **burst** AD (gros damage en 1-2 secondes, type combo d'assassin) en saignement lent (damage étalé sur les secondes suivantes au lieu d'arriver d'un coup). À la kill, le bleed restant est nettoyé — synergy parfaite avec les chaînes de reset R.
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — premier ou quatrième item alternatif selon ton start : la première auto-attack sur un champion en fight crit et soigne. Combiné au reset auto de W, ce crit arrive presque à la demande.

**Situational items :**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap depuis ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** quand l'équipe adverse a beaucoup de magic damage ou des chaînes de **CC** (crowd control : stuns, roots, knockbacks — tout ce qui te bloque pour que tu ne puisses plus agir). La tenacity (stat qui raccourcit la durée du CC sur toi) est critique contre les compos qui peuvent te garder loin du carry.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — contre des frontlines empilant l'armor (Malphite, Rammus, Shen). Chaque Q gratte des stacks d'armor sur la cible pour toute l'équipe.
- ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — contre **AP** (Ability Power, la stat derrière les magic damage) lourd. Donne MR (Magic Resistance) plus une passive healing-amp qui boost la heal de Q, le bleed-clean de Death's Dance et les effets lifesteal de R.
- ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — contre des squads tank empilant armor et tenacity. Pénétration d'armor plus une proc (passive qui se déclenche automatiquement à chaque hit) de slow sur chaque sort qui inflige des dégâts — Q, W et R inclus.
- ![Dead Man's Plate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Dead Man's Plate** — quand il te faut la passive de Move Speed empilée pour rattraper les kiters (Quinn, Vayne top, Gnar) et entrer en portée R avant qu'ils ne se repositionnent.

**Boots :** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** sont le standard. Switch à ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** quand l'équipe adverse a trois sources de CC ou plus, ou du magic damage lourd.

**Skill order :** Max **Q** en premier (waveclear, healing, source principale de damage). Max **W** en deuxième (la durée du slow scale par rang, l'auto-reset est ton outil sticky). Mets des points en **E** aux niveaux 1 et 2 pour la passive armor pen mais continue de max W ; **E** se max en dernier car le scaling de l'actif est faible. Prends **R** aux niveaux 6, 11, 16.

**Runes :** Arbre primaire **Precision** avec la keystone (la rune principale de l'arbre) **Conqueror** — passive qui ramp-up un bonus AD tant que tu combats des champions, capped après 5 secondes de combat soutenu. Couple avec **Triumph** (petite heal et gold burst au takedown), **Legend: Bloodline** (life-steal qui stack aux takedowns) et **Last Stand** (damage en plus sous 60% HP). Arbre secondaire **Resolve** avec **Bone Plating** (réduction de damage sur les 3 prochains hits après que tu as pris des dégâts) plus **Overgrowth** (HP scaling avec la mort des minions proches, parfait pour un top laner qui farm 8+ minions par wave). Stat shards : **Adaptive Force** + **Adaptive Force** + **Health Scaling**.

## Matchups clés

- **Garen :** Skill matchup (le meilleur joueur gagne, peu importe le pick). Son **W** (shield de damage reduction de 4 secondes) annule un stack de bleed, mais le silence de sa Q s'esquive en marchant de côté. Touche la Q en bord quand son W est en cooldown ; sous R, tu le bats en trade si tu as au moins un item d'avance.
- **Sett :** Lane favorable. Sa combo Q-W est télégraphée (le wind-up est assez visible pour réagir). Pull-le avec E après qu'il a engagé W, puis stack le bleed avant qu'il ne puisse désengager via recast. Ne tradez pas s'il a Grit (sa barre shield) pleine.
- **Fiora :** Le matchup melee le plus dur. Son **W** est un parry (bouclier bref qui bloque et contre la prochaine ability) — bait-le avec une Q avant d'engager E. Ses Vitals font true damage, donc Death's Dance est obligatoire ; rush ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** seulement si elle prend des kills early.
- **Quinn / Teemo :** Matchup ranged très dur. Ils t'aveuglent (annulent tes auto-attacks pendant un court moment) ou te kite hors portée. **Freeze** la wave près de ta tower (arrête de push et garde la wave de ton côté de la lane) pour leur nier le farm (l'or et l'XP des minions), et appelle ton jungler — Darius ne gagne pas ce 1v1 sans aide.
- **Mordekaiser :** Matchup à parité décidé par le timing de R. Son R t'isole dans un realm 1v1 ; tu le duel à 5 stacks si tu gardes E pour le pull après qu'il a utilisé son propre E pour te root. Achète ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** tôt si son R te tue.

## Power spikes & conditions de victoire

- **Niveau 2 :** Avec Q + E débloquées, Darius a une vraie fenêtre d'all-in (fenêtre où tu peux engager totalement la kill, sans plan B). Pull avec E, Q en bord pour damage et heal, deux auto-attacks, et l'ennemi est déjà à 3 stacks de bleed avant de pouvoir répondre.
- **Niveau 6 :** La première **R** se débloque. Même avec 3 stacks déjà sur l'ennemi, R fait assez de true damage pour tuer depuis ~40% HP. Cherche un all-in niveau 6 dès que ton jungler montre top side.
- **![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) Stridebreaker complet (~ minute 11-13) :** Le dash + slow de l'actif donne à Darius le second gap-closer qui manque à son kit. Force les 1v1 side lane et roam (quitte ta lane pour aider mid ou bot) pour des picks (kills isolées sur des ennemis hors position).
- **Deux items + R online (~ minute 18-22) :** Pic de teamfight. Marche jusqu'à la back line (les carries squishies qui restent derrière leurs tanks pendant un fight), R sur la cible la plus basse en HP, recast sur le squishy suivant. Deux resets de R peuvent fermer un teamfight à eux seuls.

## Erreurs courantes

- **Toucher la Q avec le manche intérieur.** Le manche fait demi-dégâts et applique **zéro stack de bleed**. Recule d'un pas juste avant la fin de l'animation pour que la **lame extérieure** clip la cible — c'est le seul hit de Q qui compte.
- **Utiliser E comme outil de mouvement.** E est ton seul gap-closer fiable ; si tu la grilles pour traverser la wave plus vite, tu n'as plus rien pour ouvrir l'engage pendant les 16-26 prochaines secondes. Garde-la pour démarrer l'all-in.
- **Press R trop tôt.** R fait true damage scalé par stack de bleed. À 0 stack le damage est médiocre ; à 5 stacks c'est du one-shot. Construis au moins 3 stacks avec autos et Q avant de press R, sauf si c'est un finisher sur un ennemi mourant.
- **Chasser les kiters au-delà de la tower T2.** Darius n'a pas d'escape. Sans R ni E up, chaque pas passé la tower est un gank gratuit pour le jungler adverse — et son Move Speed de base bas signifie qu'il ne peut pas désengager proprement.
- **Empiler des items pure tank.** Darius scale en **AD**, pas en HP only. Build Sunfire + Warmog's tue ton damage ; tu arrêtes de one-shot les squishies et tu deviens un minion lent qui marche. Reste sur le core AD-bruiser.

## Conseil avancé

Entraîne le **W animation cancel** : Crippling Strike reset le timer de l'auto-attack, donc tu peux fire un auto, presser W tout de suite, et fire l'auto-W améliorée juste après — deux hits à damage plein dans le temps d'un seul. Le même trick marche à l'envers : cast W *pendant* un wind-up de Q en cours et l'auto améliorée atterrit au moment où Q se résout. En partie réelle, l'usage à plus haut impact se fait dans la fenêtre d'enrage à 5 stacks : AA → W → AA → Q-bord enchaîne quatre hits qui appliquent du bleed en moins de 2 secondes, ce qui suffit à tuer presque n'importe quel squishy depuis 70% HP. Teste-le en custom game sur un target dummy jusqu'à ce que le rythme devienne automatique.
