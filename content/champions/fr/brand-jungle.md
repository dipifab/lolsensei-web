---
title: "Brand Jungle Build & Guide — Patch 16.9"
slug: "brand-jungle"
language: "fr"
patch: "16.9"
champion: "brand"
role: "jungle"
last_updated: "2026-05-01"
description: "Guide Brand jungle pour League of Legends Patch 16.9 : route de smite, clear burn-mage, windows de gank, matchups clés, power spikes, erreurs courantes et astuce finale."
quick_learn:
  champion_dd_id: "Brand"
  difficulty: 3
  damage_type: "magic"
  champion_class: "AP Jungler / Skirmisher"
  abilities:
    - key: "P"
      name: "Blaze"
      description: "Les sorts de Brand mettent les cibles en feu (dégâts pendant 4s, jusqu'à 3 stacks). À 3 stacks le blaze détone en petite explosion AOE qui réapplique les effets de sorts."
      dd_spell_id: "Brand_Passive"
    - key: "Q"
      name: "Sear"
      description: "Skillshot linéaire qui inflige des dégâts magiques. Si la cible est déjà ablaze, elle est stun — ton lock de gank et ton setup de stun en skirmish."
      dd_spell_id: "BrandQ"
    - key: "W"
      name: "Pillar of Flame"
      description: "Zone AOE retardée après un court tell. Les cibles ablaze prennent +25% de dégâts. Outil principal de clear en jungle."
      dd_spell_id: "BrandW"
    - key: "E"
      name: "Conflagration"
      description: "Explosion ciblée qui rebondit sur les ennemis proches. Si la cible primaire est ablaze, le rayon de propagation double — les rebonds entre camps accélèrent ta clear."
      dd_spell_id: "BrandE"
    - key: "R"
      name: "Pyroclasm"
      description: "Boule de feu longue portée qui rebondit jusqu'à 5 fois entre ennemis, en priorisant les ablaze. Dégâts massifs en skirmish autour de la pit du drake et des grubs."
      dd_spell_id: "BrandR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "W" }
    - { level: 9, key: "E" }
    - { level: 10, key: "E" }
    - { level: 11, key: "R" }
    - { level: 12, key: "E" }
    - { level: 13, key: "E" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contre divers early-game (Lee Sin, Xin Zhao, Hecarim, Diana) — la stasis couvre ta zéro mobilité pendant leur gap-close"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "quand tu es devant et que l'adversaire n'a pas de Résistance Magique — le move-speed par cast permet de kite en skirmish"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap dès qu'une cible prioritaire achète son premier item de Résistance Magique (Mercury's Treads compte)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contre les CC magiques single-target d'engage (Ahri R, Lissandra R, Nautilus hook)"
  base_combo: ["E", "W", "Q", "R"]
  win_condition: "Skirmish autour des pits d'objectif avec R qui rebondit entre ennemis groupés. Gank après avoir push une wave avec E (la propagation prépare un Q stun gratuit). Power-spike : minutes 8-18."
  weakness: "Clear la plus lente parmi les options AP avant Liandry's, aucun escape, aucune sustain de jungle innée. Faible aux invades early de junglers mobiles et aux junglers qui matchent l'AOE avec du hard CC."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8229
      name: "Arcane Comet"
      icon_path: "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery primaire : Arcane Comet proc à chaque hit de W ou E, ajoutant du burst gratuit par-dessus le blaze. Manaflow Band est obligatoire — Brand jungle meurt de faim mana en early. Transcendence pousse l'ability haste au-delà de 40%, Scorch finit camps et ganks à bas HP."
    secondary_rationale: "Resolve secondaire : Second Wind te sustain entre camps sans potions (Brand n'a pas de sustain innée comme Fiddlesticks ou Warwick). Overgrowth donne des HP bonus qui scalent avec les monstres tués — counter direct à ta fragilité sans défenses."
    secondary_alternative: "Contre comps qui invade lourd en early (Lee Sin + Pyke roam, Elise + Galio), swap Resolve pour Inspiration avec Biscuit Delivery (sustain mana sur tes clears les plus faibles) et Cosmic Insight (plus d'uptime de Smite autour des drakes)."
matchup_draft:
  pick_into:
    - examples: ["sejuani", "amumu", "malphite"]
      archetype: "Tanks de group-engage sans escape"
      reason: "Quand leur R atterrit, le même tas d'ennemis est dans ton W. R rebondit entre chaque champion groupé et ta réponse à leur engage est un teamwipe au lieu d'un 5v5."
    - examples: ["hecarim", "skarner", "volibear"]
      archetype: "Bruisers obligés de commit en avant"
      reason: "Ils plongent dans ton équipe pour faire des dégâts et n'ont pas de disengage ; le E de Brand allume le blaze, le Q stun à l'instant où ils t'atteignent, et le R lock la deuxième cible avant qu'ils puissent reculer."
    - examples: ["fiddlesticks", "evelynn"]
      archetype: "Junglers dépendants de channel ou stealth"
      reason: "Brand interrompt le channel fear/ult de Fiddlesticks avec le stun Q sur ablaze et révèle la position pre-channel d'Eve avec des prefires de W ; les deux dépendent de setups longs que Brand casse en une rotation."
  counterpicks:
    - examples: ["lee-sin", "elise", "graves"]
      archetype: "Skirmishers early-game avec mobilité"
      reason: "Ils invade Brand au niveau 3 avant que Liandry's soit en ligne. Brand n'a pas d'escape : la chaîne Q + W de Lee Sin, le rappel d'Elise et le dash de Graves sautent par-dessus le skillshot Q, et sa clear est trop lente pour rembourser le fight."
    - examples: ["kha-zix", "master-yi", "kindred"]
      archetype: "Junglers assassins mobiles"
      reason: "Ils blink/dash par-dessus le projectile de Q donc Brand ne peut pas land le stun, puis le burst en melee où il n'a pas de peel pour lui-même. Même Zhonya's ne fait que retarder l'inévitable en 1v1."
    - examples: ["nocturne", "shaco"]
      archetype: "Junglers qui nient la vision au gank"
      reason: "Ils bypassent les wards sur lesquelles Brand compte (pas de counter-vision innée, pas de flash-engage). Le R de Nocturne coupe la vision de ton équipe ; le Q de Shaco passe stealth à travers les wards. Brand ne peut pas pre-aim sa Q s'il ne voit pas l'ennemi venir."
---

## Aperçu

Brand jungle est un **AP skirmisher** construit autour des fights d'objectif et des ganks post-6 plutôt que des clears rapides ou des solo invades. Le kit est identique au Brand mid — mets les cibles en feu, stun les ablaze avec **Q**, fais rebondir **R** entre ennemis groupés — mais le rôle est différent. En tant que jungler tu échanges la priorité de lane (l'avantage que les laners ont quand ils push leur wave en premier) contre le contrôle de la rivière : chaque fight de drake, chaque spawn de grub (un "grub" est un des petits monstres neutres dans la pit du void qui donne de l'or et un bonus à l'équipe qui le tue), chaque skirmish de Scuttle (Scuttle = le crabe neutre dans la rivière qui donne de la vision et un petit buff) est une chance pour **R** de rebondir entre trois ou quatre ennemis groupés et de transformer un fight équilibré en teamwipe.

Son plan de partie est rigide pour les standards de la jungle. Clear les trois premiers camps full-clear (red → krugs ou blue → gromp selon le side), gank une lane au niveau 3 uniquement si elle a une window propre de **W → Q stun**, recall pour les composants de **Liandry's Torment**, et à partir de la minute 8 camp le prochain objectif. Brand n'a pas d'escape, pas de power de duel early, et la clear single-target la plus lente de tous les junglers AP — les invades vont finir ta partie si tu ne ward pas tes entrées de jungle. La récompense est le spike post-6 : **Pyroclasm** dans un fight groupé en rivière est l'une des ultimates aux plus gros dégâts du jeu, et le kit pose à l'équipe adverse une question à laquelle elle doit répondre avec un disengage qu'elle n'a souvent pas.

## Build Recommandé

**Items de départ :** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** (default pour les junglers ranged — donne le pet de smite qui boost la clear de camps et octroie de l'or) + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**Items core (dans l'ordre) :**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — upgrade quest depuis Hailblade (auto-évolue vers la minute 3-4 une fois suffisamment d'XP de jungle accumulée). Companion default pour les junglers AP burst : proc supplémentaire de dégâts magiques sur la prochaine auto-attack après un cast, ce qui s'aligne parfaitement avec le blaze de Brand.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — premier item complet. Le burn en pourcentage des HP punit les pools de HP des objectifs (drake, baron, herald) et s'empile sur chaque tick de blaze.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic pen plate, le power spike le moins cher entre les items core.
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — le slow sur chaque hit de sort ferme la plus grosse faiblesse de Brand (pas de chase, pas d'escape). Te permet de marcher sur les ennemis qui kite et de gank sans Flash.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — slot de scaling late. Achète-le en cinquième sauf si tu es 4+ kills devant, auquel cas rush-le plus tôt pour snowball ("snowball" = avantage early qui grossit : kill → gold → item → plus de kills).

**Items situationnels :**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contre les divers early-game (Lee Sin, Xin Zhao, Hecarim). La stasis est la seule réponse que Brand a quand une chaîne de dash traverse sa frontline (les tanks et bruisers devant qui absorbent normalement les coups à ta place).
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — quand tu es devant et que l'adversaire n'a pas commencé à build de la Résistance Magique. Le passif de move-speed après chaque cast permet à Brand de kite en skirmish ("kite" = reculer en attaquant, en gardant la distance).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — dès qu'une cible prioritaire achète son premier item de Résistance Magique. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** (les bottes de Résistance Magique) comptent comme ce premier item MR.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contre les engages de CC magique télégraphiés (Ahri R, Lissandra R, Nautilus hook).

**Bottes :** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** par défaut. Swap pour ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** si l'équipe adverse a 3+ menaces de hard CC avec des dégâts magiques.

**Skill order :** Maxe **W** en premier (les plus gros dégâts de base et l'outil principal de clear), **E** en second (boost de clear-speed entre camps et propagation en gank), **Q** en dernier. Mets un point dans **R** aux niveaux 6, 11 et 16.

**Runes :** Arbre primaire **Sorcery** avec **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondaire **Resolve** avec **Second Wind** et **Overgrowth** pour la sustain en jungle.

## Matchups clés

- **Lee Sin :** Tu perds chaque 1v1 avant le niveau 6. Sa chaîne Q + W saute par-dessus ton skillshot Q. Évite les skirmishes en solo pré-6, full-clear à la place, et ward les deux entrées de ta jungle à la minute 1:30.
- **Hecarim :** Matchup égal. Il te dépasse en kite mais se groupe pour les rebonds de R en teamfight. Garde Q pour le moment où il commit en avant — si tu stun un Hecarim en charge, tout son timer d'engage est gaspillé.
- **Karthus :** Tu out-gank, il out-scale. Force des fights pré-16 autour du drake. Une fois Defile en ligne (sa passive à rang max qui pulse autour de lui — la forme de dégâts AOE avec laquelle il tue depuis grey-screen) tu ne peux pas marcher dans son équipe sans Banshee's Veil.
- **Sejuani :** Tu te régales. R rebondit entre chaque champion qu'elle tire dans un tas avec son ulti ; engage sur son engage. Pré-6 elle te bat encore en 1v1 — ne l'invade pas, regroupe-toi avec mid pour les fights de grubs.
- **Master Yi :** Counter direct en 1v1. Force le fight 5v5 dans les rivières étroites (drake pit, baron pit) où sa W-cleanse ne le sauve pas des chaînes de rebonds de R. Achète Zhonya's Hourglass en deuxième item s'il fait Wit's End.

## Power spikes & conditions de victoire

- **Niveau 3 (W + E + Q) :** Premier power de gank. Avec un point dans chaque ability le combo **E → W → Q stun** est en ligne. Si le laner adverse overextend sans Flash, tu as un setup de kill.
- **Niveau 6 (R débloqué) :** Premier spike d'objectif. **Pyroclasm** dans un skirmish de Scuttle (fight du crabe de rivière) fait environ 50% des HP d'un squishy par rebond. Combats chaque Scuttle quand R est up.
- **Liandry's Torment en ligne (~ minute 9-12) :** La vitesse de clear bascule et le DPS (DPS = damage per second, ici contre les pools de HP de drake/baron/grub) sur les objectifs double. À partir de ce moment c'est toi qui dois initier les fights de drake, pas réagir.
- **Rabadon's Deathcap en ligne (~ minute 24-30) :** La séquence complète de rebonds de R one-shot les squishys. Force les fights d'objectif groupés — Baron, Soul Drake, Atakhan ("Atakhan" = un boss neutre de pit late-game qui spawn vers la minute 14 ; si tu ne le connais pas, traite le spawn comme un 5v5 forcé).

## Erreurs courantes

- **Essayer de clear comme un fast-clear jungler.** Brand n'a ni sustain innée ni attack speed. Ne fais pas la course à Lee Sin sur le Scuttle pré-6 — full-clear, atteins le niveau 6, puis commence à gank et skirmisher.
- **Q nue en poke en jungle.** **Q** sans ablaze est un projectile lent qui rate sur les junglers qui dash. Ouvre toujours avec **W** sur le spot où ils vont atterrir ou avec **E** sur un minion qui propagera le blaze.
- **Ult sur un ennemi isolé.** Les rebonds de **R** sont gaspillés sur une seule cible — les sauts vont et reviennent sur le même champion avec damage falloff. Garde **R** pour les fights groupés, pas pour un chase 1v1.
- **Sauter la vision dans ta propre jungle.** Place des Stealth Wards sur le tri-bush et le pixel brush à la minute 1:30. Brand n'a pas d'escape ; un invade que tu ne vois pas venir est une kill offerte à un jungler mobile.
- **Smite-greed des objectifs sans R.** Les HP du drake et des grubs scalent ; les dégâts de ton smite, non. Si tu contestes un drake sans R off cooldown et que le jungler adverse l'a, tu perds la guerre de smite et le drake.

## Conseil avancé

Entraîne le **gank invisible avec W**. Approche une lane par le côté rivière caché par le fog of war ("fog of war" = la zone non révélée hors de la vision de ton équipe). Cast **W** sur le spot où le laner adverse va *faire le prochain pas* (prédis sa trajectoire en fonction de la wave) — Pillar of Flame a un délai avant de tomber, et le cast en lui-même ne casse ni le stealth ni la vision. Dès que le W tombe et applique blaze, lance **Q** dans la window de stun. Bien fait, l'adversaire ne voit jamais un champion sur sa minimap : il voit une W apparaître à ses pieds, est root, et meurt avant que son coéquipier puisse ping. Cette séquence est ce qui transforme un "Brand jungle correct" en un Brand qui carry la partie.
