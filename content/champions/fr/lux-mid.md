---
title: "Lux Mid Build & Guide — Patch 16.9"
slug: "lux-mid"
language: "fr"
patch: "16.9"
champion: "lux"
role: "mid"
last_updated: "2026-04-29"
description: "Guide complet Lux mid lane pour League of Legends Patch 16.9 : build mage optimal, matchups clés, power spikes, erreurs courantes et astuce technique finale."
quick_learn:
  champion_dd_id: "Lux"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Burst"
  abilities:
    - key: "P"
      name: "Illumination"
      description: "Les sorts marquent les ennemis. La prochaine auto-attaque de Lux fait détoner la marque pour des dégâts magiques bonus."
      dd_spell_id: "Lux_Passive"
    - key: "Q"
      name: "Light Binding"
      description: "Skillshot linéaire qui root jusqu'à deux ennemis. Long cooldown — sert au setup, pas au poke."
      dd_spell_id: "LuxLightBinding"
    - key: "W"
      name: "Prismatic Barrier"
      description: "Bouclier à l'aller et au retour sur Lux et les alliés traversés. Relance pour le rappeler plus tôt."
      dd_spell_id: "LuxPrismaticWave"
    - key: "E"
      name: "Lucent Singularity"
      description: "Zone ciblée qui ralentit et inflige des dégâts dans le temps. Relance pour détoner. Outil principal de waveclear."
      dd_spell_id: "LuxLightStrikeKugel"
    - key: "R"
      name: "Final Spark"
      description: "Rayon linéaire à très longue portée infligeant de gros dégâts magiques. Consomme les marques d'Illumination touchées."
      dd_spell_id: "LuxR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
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
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contre divers et assassins (Zed, Diana, Talon, Akali) — la stasis sauve l'enchaînement après ta R"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contre les CC magiques single-target (Ahri charm, Lissandra R, Twisted Fate stun)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contre les comps qui empilent les soins (Soraka mid, Vladimir, Dr. Mundo top)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap dès qu'une cible prioritaire achète un objet de Résistance Magique"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Snipe les cibles squishy à la R depuis la portée max pendant les fights d'objectif une fois Luden's Echo et Shadowflame en ligne. Contrôle l'espace avec E et reste derrière ta frontline."
  weakness: "Aucun dash, aucune mobilité native. Hard counter par les divers et assassins ; si ta frontline saute, ton positionnement s'effondre avec elle."
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
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery primaire : Arcane Comet exploite le combo E puis Q pour garantir le proc et ajouter du burst à chaque trade. Manaflow Band tient le mana pour spammer E en lane, Transcendence pousse le CDR au-delà de 40%, Scorch achève le poke à bas HP."
    secondary_rationale: "Inspiration secondaire : Biscuit Delivery et Cosmic Insight pour la sustain en early et un Flash plus fréquent en teamfight."
    secondary_alternative: "Si l'équipe adverse a 2+ squishys à faible résistance, swap Inspiration pour Precision avec Presence of Mind (mana refund sur takedown) et Coup de Grace (+8% de dégâts sous 40% HP)."
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "viktor", "anivia"]
      archetype: "Mages immobiles sans dash"
      reason: "La Q de Lux est un root longue portée : ceux qui n'ont ni dash ni stealth se font binder sur une ligne propre et mangent tout le combo E + R avant de pouvoir répondre."
    - examples: ["senna", "ziggs"]
      archetype: "Carrys backline avec escape faible"
      reason: "La R cross-map transforme une erreur de positionnement en kill. Ils contribuent de loin mais ne peuvent pas dodge un snipe à portée maximale sur les spawns d'objectif."
    - examples: ["annie", "sylas"]
      archetype: "Mages all-in télégraphiés"
      reason: "Leur engage demande de la portée courte et un tell lent — Lux W-shield le burst, Q sur la frame de recovery, et walk back pour reset le trade."
  counterpicks:
    - examples: ["zed", "akali", "fizz"]
      archetype: "Assassins mobiles avec plusieurs gap-closers"
      reason: "Ils entrent dans la cast window de la R de Lux avant qu'elle finisse le channel ; Zhonya's aide mais ne sauve rien si la chaîne de dash touche avant l'activation de la stasis."
    - examples: ["xerath", "vel-koz"]
      archetype: "Mages d'artillerie à plus longue portée"
      reason: "Ils outpoke Lux au-delà de sa portée de Q. Elle n'a aucun moyen de réduire la distance, donc chaque échange de wave lui coûte des HP sans option d'all-in en retour."
    - examples: ["twisted-fate", "galio", "ryze"]
      archetype: "Roamers globaux / cross-map"
      reason: "Lux clear ses waves et reste en lane ; l'adversaire utilise son ult pour basculer les sidelanes et les drakes. Lux perd la macro même quand elle gagne son matchup en 1v1."
---

## Aperçu

Lux est un mage d'artillerie longue portée qui excelle dans le zoning (contrôler une zone pour empêcher l'ennemi d'y avancer), le poke (harasser à distance) et le finish des fights depuis la backline (l'arrière de la formation). Son kit tourne autour de **Light Binding (Q)** comme outil de setup, puis enchaîne **Lucent Singularity (E)** et **Final Spark (R)** pour le burst (un pic de dégâts concentrés sur quelques secondes). Elle n'a pas de dash et sa mobilité de base est nulle : le prix à payer, c'est de rester derrière les minions et derrière ta frontline (les tanks et bruisers qui absorbent l'engage adverse). Le mid lui va bien parce que la rivière offre des ganks bilatéraux auxquels elle peut répondre avec **Q** ou avec un snipe au **R** à travers la map.

Son plan de partie est simple à décrire et exigeant à exécuter : pose **Q** quand l'ennemi marche sur ton **E** (le slow chaîne le binding en root garanti), push la wave avec **E** quand le risque est faible, et cherche à roam (rotation hors lane) en sidelane dès que **R** est up. Le skill expression (la marge entre un bon et un excellent joueur) se joue sur le placement de **E** — anticiper où l'ennemi doit marcher pour last-hit — et sur les snipes de **R** dans le brouillard quand tes wards le permettent.

## Build Recommandé

**Items de départ :** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 Health Potions. Évite Corrupting Potion sauf si la lane est un harcèlement auto-attack lourd contre toi.

**Items core (dans l'ordre d'achat) :**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — spike de burst, sustain mana pour spammer E.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic pen plat pour effacer les cibles squishy (peu de défenses, fragiles).
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst supplémentaire, le passif sous seuil de HP s'aligne pile avec un finish à la **R**.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicateur late-game, ton plus gros slot AP.

**Items situationnels :**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contre les gros CC magiques single-target (Ahri charm, Lissandra R, Twisted Fate stun).
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contre les divers (champions qui plongent au corps à corps) et les assassins (Zed, Diana, Talon, Akali).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contre les compos qui empilent les soins (Soraka mid, Vladimir, Dr. Mundo top).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — dès qu'une cible prioritaire achète un objet de Résistance Magique.

**Bottes :** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** par défaut. Ionian Boots of Lucidity sont acceptables si l'équipe a besoin de plus d'uptime sur **R** comme outil de finish.

**Skill order :** Maxe **E** en premier (waveclear et DPS principal), **Q** en second (utility binding), **W** en dernier. Mets un point dans **R** aux niveaux 6, 11 et 16.

**Runes :** Arbre primaire **Sorcery** avec **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondaire **Inspiration** avec **Biscuit Delivery** et **Cosmic Insight**, ou **Precision** avec **Presence of Mind** et **Coup de Grace** si l'équipe adverse a plusieurs squishys à faible résistance.

## Matchups clés

- **Yasuo / Yone :** Ils peuvent Wind Wall ta **Q** et ton **E**. Garde **Q** tant qu'ils n'ont pas brûlé leurs sorts, et utilise **E** pour clear les waves uniquement à distance de sécurité.
- **Diana / Akali :** Menaces de dive (engage au corps à corps qui plonge sur toi). Achète ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** après ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** ; n'utilise jamais **Flash** offensivement contre elles en lane.
- **Orianna :** Matchup à égalité, décidé en teamfight. Vos portées se valent ; ne te laisse pas attirer dans des trades auto-attack parce qu'elle scale (monte en puissance) mieux que toi à équipement équivalent.
- **Twisted Fate :** Course à la rotation. S'il te lance la carte jaune, **Q**-le avant qu'il ne te rejoigne ; sinon track sa **R** avec des wards sur la rivière et le tri-bush.
- **Galio :** Évite de stack avec un allié pré-6 (sa **W** punit les cibles groupées). Punis-le quand il auto les minions au corps à corps ; il n'a pas la portée de waveclear pour te dépasser en push.

## Power spikes & conditions de victoire

- **Niveau 2 :** Avec un point en **E** plus la **Q** de départ, tu as les outils pour zone l'ennemi sur une wave en slow-push.
- **Niveau 6 :** Le premier **Final Spark** débloque les rotations et la pression de snipe. Si tu as le combo **Q-E-R** automatisé, un fight mid-river sans wards adverses est un kill gratuit.
- **Luden's Echo terminé (~ minute 12-14) :** Le contrôle de la wave bascule. Tu peux shove (pousser fort la wave) et roam pendant qu'elle se replie côté ennemi, ce qui libère le pathing du jungler vers leur botside.
- **Rabadon's Deathcap en ligne (~ minute 24-28) :** Ta **R** one-shot les squishys qui n'ont pas acheté un seul objet de Résistance Magique. Force les fights d'objectif à ce moment précis.

## Erreurs courantes

- **Lancer Q en harass sans setup.** Pose d'abord **E** sous leurs pieds pour les ralentir, puis **Q** sur le couloir qu'ils sont obligés de traverser. Une **Q** nue de poke, c'est du mana gaspillé.
- **Garder E pour des waves vides.** Push la wave dès que **E** est up et que tu as le mana ; le trade que tu concèdes est bien plus petit que la prio (priorité de mouvement) que tu gagnes pour roam et contester le Scuttle.
- **Se positionner automatiquement à portée maximale en teamfight.** À la portée max de **R**, tu sors de la zone de peel (protection) de tes alliés. Reste à la deuxième position la plus en arrière pour qu'un flank ne t'efface pas.
- **Q en cooldown quand tu split-push.** Garde **Q** pour fuir les ganks ; en sidelane tu n'as personne pour follow-up, donc le binding est un bouton panique, pas du carburant à poke.

## Conseil avancé

Entraîne le W-cancel : relance **Prismatic Barrier** au moment exact où le bouclier atteint son pic à l'aller. Le bouclier de retour arrive à valeur maximale et tu fais simultanément du peel et du shield-bomb sur un allié. En teamfight, ça donne environ deux fois la valeur de bouclier effective comparé à laisser **W** parcourir tout son trajet sans interruption.
