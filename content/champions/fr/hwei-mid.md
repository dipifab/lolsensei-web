---
title: "Hwei Mid Build & Guide — Patch 16.9"
slug: "hwei-mid"
language: "fr"
patch: "16.9"
champion: "hwei"
role: "mid"
last_updated: "2026-05-05"
description: "Guide Hwei mid lane pour League of Legends Patch 16.9 : starter kit, build mage burst, matchups clés, power spikes, erreurs courantes et astuce avancée."
quick_learn:
  champion_dd_id: "Hwei"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Artillery"
  abilities:
    - key: "P"
      name: "Signature of the Visionary"
      description: "Toucher un champion le marque. Un second sort de dégâts différent complète la signature et déclenche une AOE magique après un court délai."
      dd_spell_id: "Hwei_Passive"
    - key: "Q"
      name: "Subject: Disaster"
      description: "Ouvre 3 sous-sorts de dégâts. QQ boule de feu (% PV max), QW éclair retardé (bonus sur cible isolée/immobilisée), QE chemin de mares de lave qui ralentissent."
      dd_spell_id: "HweiQ"
    - key: "W"
      name: "Subject: Serenity"
      description: "Ouvre 3 sous-sorts utility. WQ ligne de Move Speed alliée, WW pool bouclier dans le temps, WE 3 charges qui boostent les prochains cast avec dégâts bonus et mana refund."
      dd_spell_id: "HweiW"
    - key: "E"
      name: "Subject: Torment"
      description: "Ouvre 3 sous-sorts de CC. EQ cône de peur, EW oeil fixe qui tire un root à tête chercheuse, EE mâchoires retardées qui tirent et ralentissent."
      dd_spell_id: "HweiE"
    - key: "R"
      name: "Spiraling Despair"
      description: "Projectile longue portée qui s'accroche au premier champion touché, déploie une zone de slow puis explose pour gros dégâts magiques."
      dd_spell_id: "HweiR"
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
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3135", name: "Void Staff" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contre assassins multi-dash (Zed, Akali, Talon) — la stasis achète le temps qui manque sans dash"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contre CC magique single-target (Ahri charm, Lissandra R, Twisted Fate stun) qui te lock avant le cast"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contre comps qui empilent les soins (Soraka, Vladimir, Dr. Mundo) : Grievous Wounds coupe la regen"
    - dd_id: "3158"
      name: "Ionian Boots of Lucidity"
      against: "boots alternatives quand la team a besoin de plus d'uptime R que de magic pen flat"
  base_combo: ["E", "EW", "Q", "QW", "AA"]
  win_condition: "Combine le proc passif avec QW Severing Bolt sur une cible rooted ou slowed lors des fights d'objectif, puis ajoute R à portée max pour donner du follow-up à la team."
  weakness: "Aucun dash, aucune escape. Chaque sous-sort a un cast time : tout all-in qui ferme la distance (assassin, diver) avant ta séquence de CC te tue."
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
    primary_rationale: "Sorcery primaire : tout root EW ou slow QE garantit un proc d'Arcane Comet sur le Q suivant, ajoutant du poke gratuit. Manaflow Band tient le mana énorme de Hwei, Transcendence taille les CD des neuf sous-sorts, Scorch finit les kills."
    secondary_rationale: "Inspiration secondaire : Biscuit Delivery compense le mana early catastrophique, Cosmic Insight réduit les CD des summoners pour avoir Flash plus souvent en teamfight."
    secondary_alternative: "Contre artillery à gros poke (Xerath, Vel'Koz), passe en Resolve avec Second Wind (regen vs poke) et Overgrowth (HP late) pour survivre aux trades sans réponse."
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "viktor", "anivia"]
      archetype: "Immobile mages without dash"
      reason: "L'oeil EW de Hwei se verrouille et tire un root à tête chercheuse sur les cibles sans mobilité, puis enchaîne un QW garanti pour gros dégâts. Sans dash ils ne sortent pas du cast window."
    - examples: ["sett", "darius", "garen"]
      archetype: "Slow melee bruisers in lane"
      reason: "Hwei les outranges à chaque niveau et les garde slowed avec les mares QE. Ils n'atteignent pas sa position de cast sans cramer Flash."
    - examples: ["annie", "sylas"]
      archetype: "Telegraphed all-in mages"
      reason: "Leur engage demande courte distance et un tell lent. Hwei pré-cast EW depuis le fog, root sur l'engage et recule pour reset le trade."
  counterpicks:
    - examples: ["zed", "akali", "fizz", "kassadin"]
      archetype: "Mobile assassins with multiple gap-closers"
      reason: "Leurs dashs et blinks battent les cast times de Hwei. Quand il ouvre E et choisit la bonne sous-spell, l'assassin est déjà dans sa hitbox avec full burst prêt."
    - examples: ["xerath", "vel-koz"]
      archetype: "Longer-range artillery mages"
      reason: "Ils poke Hwei au-delà de son range Q et le forcent à cast sous pression. Hwei n'a ni escape ni moyen de fermer la distance, donc chaque wave saigne ses HP."
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall and dash-heavy duelists"
      reason: "Wind Wall bloque tous les projectiles de sous-sorts (Q, EW, R). Ils dashent par-dessus ses slows et finissent le trade avant qu'il complète la signature passive."
---

## Aperçu

Hwei est un mage artillery longue portée avec le kit le plus profond du jeu : chacun de ses Q, W et E ouvre un menu de trois sous-sorts, soit neuf appuis d'abilities plus la R. Il joue le même rôle qu'un control mage en mid lane (zone les ennemis loin du farm, poke leur HP à distance, lock-down avec CC, snipe les retardataires) mais échange la simplicité brute contre l'adaptabilité — chaque wave tu choisis entre dégâts, utility et CC selon la situation. Hwei est fragile et immobile : se positionner derrière la frontline (tank ou bruiser de ta team qui absorbe les coups) est obligatoire.

Son game plan est en couches : marque une cible avec une sous-spell de dégâts pour amorcer la passive **Signature of the Visionary**, puis complète la signature avec un second cast de dégâts pour ajouter une AOE magique bonus. L'opener le plus propre en lane est EW (l'oeil à tête chercheuse qui root) suivi de QW (Severing Bolt, qui gagne d'énormes dégâts bonus contre rooted ou immobilisé). Hors lane le kit bascule vers le contrôle : WQ pour Move Speed alliée, WW pour une pool bouclier, EE jaws pour tirer une équipe regroupée dans ton AOE.

## Build Recommandé

**Starter items :** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Le sustain de mana est critique : les sous-sorts de Hwei brûlent du mana vite, et la regen de Doran's Ring est la façon la moins chère de tenir en lane jusqu'au premier ![Lost Chapter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3802.png) **Lost Chapter** sur la route de Luden's Companion.

**Core items (en ordre) :**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — burst spike, mana sustain pour la rotation constante, et ability haste qui réduit les CD.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat. Chaque explosion de signature passive en bénéficie, et tu vises typiquement des cibles squishy.
3. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — pen magique en pourcentage. Achète en troisième dès qu'un ennemi prioritaire prend une pièce de Magic Resist — Hwei scale énormément avec l'AP multiplié, le dégât doit passer.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — ton slot d'AP le plus haut. Le multiplicateur +35% AP amplifie chaque sous-sort et l'explosion passive également.
5. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra avec la passive HP-threshold (passive d'item qui s'active quand l'ennemi est sous un seuil de PV, ici 35%) qui s'aligne avec les dégâts d'explosion de la R.

**Situational items :**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contre assassins multi-dash (Zed, Akali, Talon). La stasis achète les secondes que Hwei n'a pas car il n'a pas de dash.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contre CC magique single-target (Ahri charm, Lissandra R, Twisted Fate stun). Le bouclier bloque le lock qui interromprait ton cast de sous-sort.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contre comps qui empilent les soins (Soraka mid, Vladimir, Dr. Mundo top). Le Grievous Wounds coupe la regen sur laquelle ils s'appuient.
- ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — alternative à ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** quand l'équipe a plus besoin de R uptime que de pen.

**Boots :** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** par défaut. Bascule sur ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** si la team a besoin de plus d'uptime R en finisher.

**Skill order :** Maxe **Q** en premier (les sous-spells de dégâts, d'où viennent les kills), **E** en second (sous-spells de CC), **W** en dernier. Un point en **R** aux niveaux 6, 11, 16.

**Runes :** Primary **Sorcery** avec **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Inspiration** avec **Biscuit Delivery** et **Cosmic Insight**. Swap secondary en **Resolve** (Second Wind + Overgrowth) contre matchups de gros poke.

## Matchups clés

- **Yasuo / Yone :** Wind Wall bloque tous les projectiles de sous-sorts (Q, EW, R). Garde E et W jusqu'à ce qu'ils dépensent les abilities ; ne face-cast jamais une QQ boule de feu avec le mur up.
- **Zed / Akali :** Menaces de dive (champions qui sautent sur toi sous tour pour te tuer malgré les tirs de tour). Battent les cast times de Hwei. Achète ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** en deuxième item après ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion**. Pré-cast EW depuis le fog avant d'aller last-hit, jamais face-up.
- **Orianna :** Matchup égal qui scale vers elle en teamfight. Tu la pokes en lane avec QQ + procs passifs mais elle gagne les fights regroupés avec sa R Shockwave ; en positioning late, écarte-toi de la team pour que sa R ne te prenne pas avec le carry.
- **Twisted Fate :** Course de priority sur les roams. Il a gold-card stun et R globale ; track son ulti avec des vision wards sur river et tri-bush. S'il pose la gold card sur toi, EW pour le root avant qu'il ferme la distance.
- **Veigar :** Égal-favorable en lane. Sa cage E est la seule vraie menace (entrer = stun). Reste hors du rayon de cage en pokant ; QW Severing Bolt le punit fort s'il mange son propre root par erreur.

## Power spikes & conditions de victoire

- **Niveau 2 :** Avec un point en Q (Disaster) plus ta E de départ, tu as une sous-spell de dégâts plus une de CC. EW root puis QW Severing Bolt est une vraie fenêtre d'all-in (un commit total au fight, pas un trade rapide) si leur jungler n'est pas proche.
- **Niveau 6 :** La première **Spiraling Despair** débloque le contrôle d'objectifs. La R s'accroche au premier champion touché et déploie une zone de slow, parfaite pour setup ton jungler sur les fights de Scuttle Crab.
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion complété (~ minute 13-15) :** Le wave control bascule. Avec le mana sustain de Luden's tu peux shove n'importe quelle wave avec QQ + QE en une rotation, libérant les roams et dives bot.
- **Spike 3 items (![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) Void Staff online, ~ minute 27-30) :** Les dégâts de combo avec proc passif passent à travers le premier item de MR ennemi. Force les fights d'objectif tant que ta frontline est vivante.

## Erreurs courantes

- **Spammer Q à CD sans setup.** Ouvre toujours avec E (sous-spell de CC) ou tape une cible déjà slowed/rooted par un allié. Une QQ nue depuis position neutre est dodge à la réaction par n'importe qui avec un dash et gaspille du mana.
- **Choisir la mauvaise sous-spell sous pression.** Les sous-spells sont validées dès que tu appuies sur la touche menu — pas de cancel. Entraîne le bon finisher en custom ou normal avant de jouer Hwei en ranked : QW pour cibles isolées, QE pour waveclear, QQ pour chip damage sur HP bas.
- **Oublier que la signature passive demande deux abilities différentes.** Deux QQ d'affilée ne déclenchent pas la passive. La signature ne s'amorce que quand un second sort de dégâts d'une sous-spell différente touche — typiquement QQ puis QW, ou EW root puis QW Severing Bolt.
- **Utiliser la R en damage finisher au lieu d'outil de setup.** La valeur principale de Spiraling Despair est la zone de slow pour le follow-up, pas les dégâts d'explosion. Cast-la d'abord pour ancrer l'ennemi à la combo de la team, puis empile tes sous-spells dessus.
- **Rester à portée max en teamfight sans peel.** Hwei n'a pas de dash. Le range max de projectile te met hors de la protection de la team, et un assassin de flank te delete. Place-toi à la deuxième position la plus reculée pour qu'un peeler (la spell de ton support qui te protège des divers) puisse intervenir.

## Conseil avancé

Utilise WE Stirring Lights pour convertir le dead time en burst (gros dégâts concentrés en 1-2 secondes). Pré-cast-la avant d'entrer en teamfight : elle pose trois charges empowered sur tes trois prochaines abilities ou auto-attacks, chacune ajoute des dégâts magiques bonus et refund du mana. La séquence optimale est WE → EW oeil → QW Severing Bolt → auto-attack sur la cible rootée : chaque cast de la chaîne consomme une charge, et le mana refund te permet d'enchaîner R sur une seconde cible sans aller OOM (out-of-mana, à court de mana en plein fight).
