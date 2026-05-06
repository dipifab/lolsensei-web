---
title: "Heimerdinger Mid Build & Guide — Patch 16.9"
slug: "heimerdinger-mid"
language: "fr"
patch: "16.9"
champion: "heimerdinger"
role: "mid"
last_updated: "2026-05-02"
description: "Guide Heimerdinger mid Patch 16.9 : build optimal, page de runes, placement des tourelles, matchups clés, power spikes et conseils avancés pour dominer la lane."
quick_learn:
  champion_dd_id: "Heimerdinger"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Artillery"
  abilities:
    - key: "P"
      name: "Hextech Affinity"
      description: "Gain bonus Move Speed while near allied towers or your own deployed turrets."
      dd_spell_id: "Heimerdinger_Passive"
    - key: "Q"
      name: "H-28 G Evolution Turret"
      description: "Deploy a turret (max 3 active). Turrets build charge; at max charge fire a beam. Charges reset on Q cast. Range 350."
      dd_spell_id: "HeimerdingerQ"
    - key: "W"
      name: "Hextech Micro-Rockets"
      description: "Long-range rocket barrage (1325 range) converging on cursor. Extra hits deal reduced damage. Each rocket hitting a champion grants nearby turrets 20% charge."
      dd_spell_id: "HeimerdingerW"
    - key: "E"
      name: "CH-2 Electron Storm Grenade"
      description: "Lob a grenade (970 range): slows enemies in the area, stuns enemies in the center. Fully charges nearby turrets on hit."
      dd_spell_id: "HeimerdingerE"
    - key: "R"
      name: "UPGRADE!!!"
      description: "Empowers next non-ultimate ability. R+Q: 8s mega-turret with AOE splash and slow. R+W: 4 rocket waves. R+E: larger stun zone with knockup in center."
      dd_spell_id: "HeimerdingerR"
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
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3118", name: "Malignance" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contre assassins et divers (Zed, Akali, Diana) — la stase laisse aux tourelles le temps de répondre"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contre comps avec beaucoup de healing (Vladimir, Soraka mid, Sylas)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "dès qu'une cible prioritaire achète un objet de Magic Resist"
  base_combo: ["Q", "Q", "Q", "E", "W", "R+Q"]
  win_condition: "Monte le nid de tourelles, stun avec E, dégrade avec W. Au niveau 6 chasse l'adversaire avec la méga-tourelle R+Q — une zone de mort inamovible."
  weakness: "Aucune mobilité et portée de pose très courte (350). Les assassins mobiles entrent avant que les tourelles tirent ; les tourelles meurent instantanément aux AOE waveclear."
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
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Arcane Comet proc sur E (le slow ancre la cible) et sur W, ajoutant du burst au DPS des tourelles. Manaflow Band évite la panne de mana en reposant des tourelles. Transcendence raccourcit E et W. Gathering Storm scale l'AP en partie longue."
    secondary_rationale: "Biscuit Delivery soutient les premiers niveaux gourmands en mana et Cosmic Insight réduit tous les cooldowns, dont UPGRADE!!! — des rotations R+Q plus fréquentes définissent le mid game."
    secondary_alternative: "Contre des lanes à fort poke (Xerath, Vel'Koz) remplace Inspiration par Resolve avec Second Wind (régen HP après dégâts) et Bone Plating (réduit le burst des combos multi-coups) pour tenir plus longtemps."
matchup_draft:
  pick_into:
    - examples: ["syndra", "veigar", "anivia"]
      archetype: "Mages immobiles sans dash"
      reason: "Ils ne peuvent pas avancer dans un nid de trois tourelles sans subir un DPS continu. Leur burst exige de se rapprocher, et le stun de E plus le rayon de tourelle punissent l'avancée avant qu'ils ripostent."
    - examples: ["annie", "malphite", "galio"]
      archetype: "Mages corps à corps ou tanks obligés d'entrer dans la zone des tourelles"
      reason: "Leur engage est à courte portée. Trois tourelles posées rendent l'entrée létale — un rayon chargé les frappe avant que l'animation d'engage soit terminée."
  counterpicks:
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "Mages artillery longue portée qui poke hors de portée des tourelles"
      reason: "Les tourelles ne couvrent qu'un rayon autour de Heimerdinger. Les mages artillery restent à 1000+ de portée, hors du nid, et le grignotent à zéro sans jamais entrer dans sa zone."
    - examples: ["zed", "akali", "katarina"]
      archetype: "Assassins mobiles qui ferment la distance avant que les tourelles répondent"
      reason: "Les tourelles ont un cycle d'attaque lent. Un assassin à triple dash entre dans le nid et tue Heimerdinger avant le premier rayon ; le cooldown est trop court pour le sauver."
    - examples: ["twisted-fate", "ryze"]
      archetype: "Roamers globaux qui contournent totalement le nid"
      reason: "Heimerdinger ne peut pas roam — déplacer les tourelles demande trois Q. L'adversaire prend des kills gratuits en side lanes pendant que Heimerdinger optimise un nid jamais combattu."
---

## Aperçu

Heimerdinger est un mage de zone control qui gagne sa lane en la rendant invivable pour l'adversaire. Ses **H-28 G Evolution Turret (Q)** — jusqu'à trois actives à la fois — créent un champ de dégâts persistant qui punit tout ennemi entrant en portée corps à corps ou de cast. À pleine charge, chaque tourelle tire un rayon puissant ; la **CH-2 Electron Storm Grenade (E)** stun ou ralentit les ennemis dans la zone, et les **Hextech Micro-Rockets (W)** entament les cibles jusqu'à 1325 de portée. Le résultat est un champion dont la force tient entièrement au positionnement : avec son nid de tourelles en place il est presque intuable en échange direct ; sans, il fait partie des plus vulnérables du jeu.

Son **UPGRADE!!! (R)** change complètement la donne. Appuyer sur **R+Q** pose une méga-tourelle améliorée — elle inflige des dégâts AOE en splash, applique un slow et dure 8 secondes, peu importe les **Q** suivants. Vois-la comme une machine autonome de déni de zone. Le plan en mid : monter et conserver le nid jusqu'au niveau 6, puis utiliser **R+Q** pour chasser l'adversaire de sa tourelle tier-1 et snowball (construire un avantage précoce qui s'amplifie progressivement) vers le mid game.

## Build Recommandé

**Items de départ :** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) Doran's Ring + 2 Health Potions. Le mana est critique : chaque tourelle coûte 20 de mana et tu en reposeras sans cesse.

**Core items (dans l'ordre) :**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — spike de burst sur le premier item, regen mana pour reposer les tourelles, et magic penetration (la capacité d'ignorer une partie de la résistance magique ennemie) qui rend le poke W pertinent.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — pénétration magique flat pour punir les squishy entrant en portée.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — amplifie le burst sous un seuil de HP, ce qui s'aligne avec les follow-ups R+E en W.
4. ![Malignance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3118.png) **Malignance** — réduit le cooldown de **UPGRADE!!!** et booste l'AP pendant l'ulti ; les rotations plus fréquentes de méga-tourelle définissent le mid game.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicateur d'AP late game ; chaque rayon et chaque roquette devient une menace à part entière.

**Items situationnels :**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contre assassins et divers (Zed, Akali, Diana). La stase (un bref état d'invincibilité figée) laisse aux tourelles trois secondes pour absorber le burst pendant que tu attends la fin de leurs cooldowns.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contre les comps avec beaucoup de heal (Vladimir, Sylas). Applique Grievous Wounds (un debuff qui réduit les soins de 40%) via les tirs de tourelles.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — dès qu'une cible prioritaire (l'ennemi dont la mort menace le plus ton équipe, typiquement le carry alimenté) achète un objet de Magic Resist ; remplace Rabadon's si toute l'équipe ennemie stack du MR.

**Boots :** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes par défaut. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) Ionian Boots of Lucidity acceptables si tu veux plus de cooldown reduction pour cycler **UPGRADE!!!** plus vite.

**Skill order :** Max **Q** d'abord (source de dégâts principale et puissance de tourelle), **W** ensuite (poke et charge), **E** en dernier. Mets **R** aux niveaux 6, 11, 16.

**Runes :** Primaire **Sorcery** avec **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Gathering Storm**. Secondaire **Inspiration** avec **Biscuit Delivery** et **Cosmic Insight**.

## Matchups clés

- **Syndra :** Elle lance ses sphères à distance mais doit cast depuis une position fixe. Pose trois tourelles sous ta tier-1, garde la wave slow-pushed (laisse les minions s'empiler au centre de la lane pour que la prochaine vague arrive plus grosse) et utilise **E** pour interrompre la collecte de sphères. Au niveau 6 tu gagnes l'all-in (s'engager pleinement dans un combat en visant le kill) avec **R+Q** sur le terrain disputé.
- **Zed :** Le matchup le plus dur du pool. Il dash à travers tes tourelles avant qu'elles ne tirent. Respecte son power level 3 et level 6 ; achète ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) Zhonya's Hourglass en deuxième item. Quand il use **Death Mark (R)**, déclenche la stase immédiatement — les tourelles auront trois secondes pour tirer.
- **Orianna :** Matchup de poke équilibré. Elle peut repousser tes tourelles avec **Command: Shockwave (R)** en teamfight. En lane, place les tourelles du côté de la wave d'où elle doit s'approcher. Évite de te grouper près de ton nid quand sa balle est à proximité.
- **Twisted Fate :** Il ignore ton nid et roam. Pousse la wave sous sa tourelle avant qu'il parte, ward la rivière, et cherche un **R+E** (knockup) en **W** s'il téléporte de retour. Tu ne peux pas stopper son macro game (la stratégie d'ensemble sur la map), mais tu peux punir sa tourelle de base.
- **Viktor :** Mage immobile qui doit rester immobile pour faire des dégâts. Un nid de trois tourelles fait gaspiller son **Death Ray (E)** pendant que tu poke avec **W** derrière le cluster. Après le 6, la méga-tourelle **R+Q** le chasse de la wave ou brûle son Flash.

## Power spikes & conditions de victoire

- **Niveau 1 :** Pose deux tourelles dans la wave de minions avant l'arrivée du premier cannon. Les adversaires entrant à portée d'auto-attack subissent un DPS (Damage Per Second — dégâts soutenus par seconde des tourelles) étonnant et reculent — tu obtiens le first push (avantage de wave : tes minions poussent vers leur tour, te laissant libre de contester un Drake ou aider mid) sans dépenser un mana en poke.
- **Niveau 6 :** **UPGRADE!!!** débloqué. La méga-tourelle **R+Q** dure 8 secondes et résiste au CC (toute forme de stun, slow ou crowd control) ; elle transforme toute la zone Heimerdinger en piège mortel. Force un combat ou un trade de tour tout de suite.
- **Luden's Echo terminé (vers la minute 11-13) :** Le poke de W crit (coup critique : frappe amplifiée aléatoire infligeant 175% de dégâts) maintenant les squishy pour des dégâts significatifs. Combine avec E + W pour confirmer les kills à travers le nid.
- **Malignance online (vers la minute 18-20) :** Le cooldown d'**UPGRADE!!!** descend près de 60s avec une CDR élevée (cooldown reduction — la stat qui réduit le délai entre les sorts). Tu peux poser une méga-tourelle à chaque combat de rotation, soit quasiment chaque spawn d'objectif (objective spawns = apparition de Baron Nashor ou Drake sur la map, généralement toutes les 5-6 minutes).

## Erreurs courantes

- **Poser les tourelles en ligne droite.** Mets-les en triangle ou sur le chemin que l'ennemi doit emprunter pour t'approcher. Une ligne de trois tourelles ne tire que si l'ennemi avance droit — un triangle tire depuis plusieurs angles et est bien plus dur à esquiver.
- **Utiliser R+Q en terrain ouvert.** La méga-tourelle est un outil de zone, pas un outil de kill solo. Pose-la dans un chokepoint (un passage étroit comme le baron pit, le dragon pit ou le bush près de la tour tier-2) pour forcer l'ennemi à traverser son rayon de dégâts.
- **Recast Q pendant que les tourelles ont encore de la charge.** Une nouvelle Q pose une tourelle à charge zéro et reset les charges de TOUTES les tourelles. Attends que la plus vieille ait tiré son rayon avant de la remplacer — sinon tu jettes un tir chargé à la poubelle.
- **Oublier la vitesse du Passif.** **Hextech Affinity** te donne un bonus de move speed près de tes tourelles. Sers-toi du nid comme tapis de kite (reculer tout en infligeant des dégâts) : cours vers ton cluster pour fuir un gank, pas l'inverse.

## Conseil avancé

Maîtrise la combo **R+E** knockup en **W** follow-up. Quand UPGRADE!!! est dispo, cast **R** puis lance **E** immédiatement : elle atterrit comme une zone plus grande et les ennemis du centre subissent un knockup (projetés en l'air, brièvement incapables d'agir) au lieu d'un simple stun. La durée d'envol est proche d'un stun, mais le knockup interrompt les channels (comme l'ulti de Katarina ou le recall de Zed), et la zone élargie attrape les cibles fuyantes qui auraient esquivé le stun normal de E. Pendant qu'ils sont en l'air, lance la barrage **W** complet — les cinq roquettes convergent et frappent la cible CC avant qu'elle retombe, infligeant des dégâts quasi maximaux avant toute action défensive.
