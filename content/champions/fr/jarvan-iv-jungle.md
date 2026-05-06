---
title: "Jarvan IV Jungle Build & Guide — Patch 16.9"
slug: "jarvan-iv-jungle"
language: "fr"
patch: "16.9"
champion: "jarvan-iv"
role: "jungle"
last_updated: "2026-05-05"
description: "Guide Jarvan IV jungle pour League of Legends Patch 16.9 : starter kit, build core bruiser, matchups clés, power spikes, erreurs courantes et un conseil final."
quick_learn:
  champion_dd_id: "JarvanIV"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Martial Cadence"
      description: "La première auto-attaque sur une cible inflige des dégâts physiques bonus basés sur ses HP actuels. Recharge toutes les quelques secondes par cible : intègre-la aux combos."
      dd_spell_id: "JarvanIV_Passive"
    - key: "Q"
      name: "Dragon Strike"
      description: "Lance en ligne qui blesse et réduit l'armure. Si elle traverse une E flag active, Jarvan est tiré au flag et knock-up les ennemis sur sa trajectoire."
      dd_spell_id: "JarvanIVDragonStrike"
    - key: "W"
      name: "Golden Aegis"
      description: "Bouclier personnel (scale avec les champions ennemis touchés) et slow sur les ennemis proches. Active-le AVANT le E-Q, pas après."
      dd_spell_id: "JarvanIVGoldenAegis"
    - key: "E"
      name: "Demacian Standard"
      description: "Lance un flag qui inflige des dégâts magiques à l'impact et donne de l'attack speed aux alliés proches. C'est le setup du combo E-Q knockup."
      dd_spell_id: "JarvanIVDemacianStandard"
    - key: "R"
      name: "Cataclysm"
      description: "Saute sur un champion ennemi, blesse les proches et crée une arène de murs infranchissables. Réactive R pour faire tomber les murs plus tôt."
      dd_spell_id: "JarvanIVCataclysm"
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
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3071", name: "Black Cleaver" }
    - { dd_id: "6665", name: "Jak'Sho, The Protean" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contre beaucoup de CC ou équipe AP (3+ stuns/roots, ou deux menaces AP) : remplace Steelcaps quand le CC pèse plus que les dégâts physiques"
    - dd_id: "3742"
      name: "Dead Man's Plate"
      against: "contre comps qui kitent (Caitlyn, Senna, Kog'Maw, Jinx) : MS et slow on hit pour rester collé au carry après R"
    - dd_id: "6664"
      name: "Hollow Radiance"
      against: "contre comps qui se soignent beaucoup (Aatrox top, Yone bot, Soraka) : le burn coupe les heals et aide au waveclear entre objectifs"
    - dd_id: "3053"
      name: "Sterak's Gage"
      against: "contre équipes qui te focus (2+ ennemis te tournent dessus quand tu R) : bouclier HP sous burst, tenacity passive raccourcit le CC"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "contre comps avec deux AD dealers forts (ex. Yasuo + Caitlyn) : convertit les dégâts physiques en saignement lent, pas en burst"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Place le knockup E-Q sur une cible prioritaire (carry ou jungler adverse), puis R pour l'enfermer dans ton arène pendant que ton équipe suit. Répète à chaque cooldown autour des objectifs."
  weakness: "Si tu rates E ou Q, tu as dépensé ton seul hard CC et gap-close. Tu deviens un bruiser melee sans burst, facile à kite par les marksmen ranged avec self-peel."
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
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Conqueror stack à chaque coup du combo E-Q-AA-R : au knockup les stacks sont pleins pour dégâts et healing. Triumph récompense les takedowns sur objectifs, Alacrity accélère les autos pour les procs Martial Cadence, Coup de Grace finit les targets bas HP dans Cataclysm."
    secondary_rationale: "Resolve secondaire : Bone Plating absorbe le premier burst quand tu R et que l'équipe ennemie tourne sur toi, Revitalize boost le bouclier de Golden Aegis qui est ta seule défense active mid-fight."
    secondary_alternative: "Contre comps avec gros poke (Varus, Xerath, comps avec Karma) remplace Resolve par Inspiration : Magical Footwear (boots gratuites pour économiser du gold) et Cosmic Insight (Flash plus fréquent pour le trick E-Q-Flash)."
matchup_draft:
  pick_into:
    - examples: ["lee-sin", "graves", "kha-zix", "viego", "rengar"]
      archetype: "Junglers skirmisher early-game"
      reason: "Jarvan trade à égalité au niveau 3 avec Q armor shred + E attack speed et out-scale la majorité des junglers early une fois Sundered Sky online vers la minute 12-14."
    - examples: ["caitlyn", "ezreal", "lulu", "soraka"]
      archetype: "Bot lanes immobiles qui ont besoin de peel"
      reason: "Les murs de Cataclysm enferment un carry positionnel dans une arène où son support ne peut pas atteindre pour le défendre ; l'équipe ennemie ne répond pas au lockdown à temps."
    - examples: ["azir", "aurelion-sol", "anivia"]
      archetype: "Mid-lane scalers stationnaires"
      reason: "Le gap-close E-Q hors vision plus les murs du R leur retirent l'espace dont leur kit a besoin ; ils n'ont pas de dash pour quitter l'arène avant que ton équipe convertisse."
  counterpicks:
    - examples: ["fiddlesticks", "amumu", "zac"]
      archetype: "Junglers engage AOE avec CC à plus longue portée"
      reason: "Ils engagent hors de la portée de ton E-Q et te chain-CC avant que tu n'atteignes la backline ; les murs ne te sauvent pas si tu te fais stun en plein saut."
    - examples: ["nasus", "vladimir", "mordekaiser"]
      archetype: "Late-game scalers avec sustain intégré"
      reason: "Le power spike de Jarvan est aux items 1-3 (vers la minute 20-25). Après il chute, tandis que ces cibles ne font que monter en puissance et survivent à ta seule rotation."
    - examples: ["olaf", "tryndamere"]
      archetype: "Duellistes CC-immune"
      reason: "Les R d'Olaf et Tryndamere ignorent le lockdown de Cataclysm : ils sortent de l'arène en te tapant à plein dégâts pendant que ton seul engage est en cooldown."
---

## Aperçu

Jarvan IV est un fighter / diver melee — c'est-à-dire un champion qui ferme la distance avec un dash et s'engage dans le teamfight pour bloquer une cible clé — construit autour d'un combo signature : lance un flag avec **E**, tire la **Q** à travers le flag, tu es tiré au flag et tu knock-up tous ceux sur la trajectoire. À partir du niveau 6 il ajoute **R** Cataclysm, une arène de murs qui piège un seul ennemi avec lui pendant que son équipe convertit la kill. C'est l'un des junglers les plus faciles à apprendre (difficulté 2/5 sur notre échelle) parce que le kit veut toujours la même chose : placer E-Q sur une cible prioritaire, R, gagner le fight.

Son game plan : clearer les camps de jungle vite avec **E** active et Q armor shred, puis ganker (sauter dans une lane pour aider à tuer l'ennemi) en utilisant les lanes qui ont un angle d'engage exploitable — mid à travers la tri-bush (le buisson à trois angles entre mid et side lane) ou top à travers le river bush. Autour de chaque spawn d'objectif, cherche à diver un carry (sauter sur l'ennemi à gros dégâts et faibles défenses qui se tient en backline). La skill expression est dans le trick **E-Q-Flash** — flag à terre, Flash en avant, Q à travers pour un knockup non réagible — et dans la décision de **quand** lâcher la **R** (tu n'en as qu'une par fight, donc ne la gaspille pas sur le tank de frontline).

## Build Recommandé

**Starting items :** Hailblade + Refillable Potion. Path standard junglecam pet quest. Hailblade comme Emberknife évoluent en l'un des trois companions ; on veut le pet AD skirmisher, voir ci-dessous.

**Core items (dans l'ordre) :**

1. ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** — quest upgrade depuis Hailblade (auto-évolue vers la minute 3-4 quand tu as assez d'XP). C'est le companion AD skirmisher : il te donne un sprint de movement speed après chaque camp, ce qui se traduit par des ganks plus rapides à travers la map.
2. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — ton premier gros item. Le crit garanti au premier coup et le on-hit heal s'enchaînent parfaitement avec Martial Cadence : au moment où tu knock-up la cible tu lui crit dessus et tu te soignes des dégâts pris pour l'atteindre.
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots par défaut contre la plupart des équipes (la bot lane est généralement deux damage dealers physiques). Switch vers Mercury's Treads si la comp ennemie est majoritairement AP et CC.
4. ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — l'armor shred se stack avec la passive de ta Q, plus HP et ability haste pour que ton E-Q revienne plus vite.
5. ![Jak'Sho, The Protean](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6665.png) **Jak'Sho, The Protean** — power spike tank de late-game. La passive qui stack armor et magic resist te transforme de diver en frontline qui tient dans le fight toute la durée.

**Situational items :**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — contre équipes avec beaucoup de CC ou AP. Remplace Steelcaps quand le crowd control est un problème plus gros que les dégâts physiques.
- ![Dead Man's Plate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Dead Man's Plate** — contre comps qui kitent (Caitlyn, Senna, Kog'Maw — ennemis qui marchent en arrière en t'attaquant pour rester hors de portée melee). MS et slow on hit pour rester collé à la backline (les carries à gros dégâts derrière leurs tanks) après le **R**.
- ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — contre comps qui se soignent beaucoup (Aatrox top, Yone bot, Soraka support). La passive burn coupe les heals ennemis.
- ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — quand 2+ ennemis te focus (tournent leurs dégâts sur toi) dès que tu R. Le bouclier HP proc (s'auto-déclenche) sous burst (gros dégâts en 1-2 secondes) et la tenacity passive raccourcit le crowd control (stuns, roots, slows).
- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — contre comps avec deux damage dealers physiques forts (ex. Yasuo + Caitlyn). Convertit les dégâts physiques reçus en saignement lent (dégâts répartis sur les secondes suivantes, pas instantanés) pour que tu aies le temps de réagir au lieu de te faire delete.

**Boots :** Plated Steelcaps par défaut. Mercury's Treads si l'équipe ennemie a 3+ stuns/roots ou deux menaces AP.

**Skill order :** Maxe **Q** en premier (dégâts principaux et armor shred), **E** en second (cooldown plus bas = plus de tentatives de gank et plus d'options de flag), **W** en dernier. Mets un point en **R** aux niveaux 6, 11, 16.

**Runes :** Primary **Precision** avec **Conqueror**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secondary **Resolve** avec **Bone Plating** et **Revitalize**. Stat shards : Attack Speed, Adaptive Force, Health Scaling.

## Matchups clés

- **Lee Sin / Graves :** Matchup à égalité dans la jungle early. Track leur premier clear ; s'ils commencent red-side, conteste leur deuxième buff avec E-Q. Les deux peuvent te battre au niveau 3, donc n'invade pas sans une lane prio (un coéquipier qui a poussé les ennemis sous tour et peut tourner pour t'aider) qui te couvre.
- **Fiddlesticks / Amumu :** Évite d'être groupé avec tes alliés au mid-game. Leur portée d'engage AOE dépasse la distance de ton **E-Q** : ils t'ultent pendant que tu marches encore pour poser le flag. Warde les entrées de ta jungle et ne face-check pas les buissons (entrer dedans à l'aveugle sans vision, où un ennemi pourrait être caché).
- **Kha'Zix / Rengar :** Junglers assassins qui veulent one-shot un carry. Counter-gank (présente-toi dans la même lane pour retourner le fight) au lieu de full-clear : tu trade à égalité avec eux au niveau 3, et ta **R** est un outil de peel (une compétence pour sauver ton carry de quelqu'un qui le dive) quand ils sautent sur ton carry — mure-les loin de la kill.
- **Olaf :** Sa R le rend CC-immune, ce qui veut dire que **les murs de Cataclysm ne l'arrêtent pas**. Si tu lui R, il sort de l'arène en te tapant. Garde la **R** pour ses coéquipiers après qu'il ait brûlé son ult, ou prends-le comme cible seulement si ton équipe peut kite (reculer en attaquant, en gardant la distance) pendant qu'il est enfermé.
- **Sejuani / Maokai :** Junglers engage plus tank que toi. Tu les out-damage en 1v1 early mais vous voulez tous deux le même rôle dans le teamfight (enfermer un carry). La lane qui snowball en première gagne (prend une kill early qui devient une avance gold qui devient plus de kills) ; engage-toi sur les ganks avant qu'ils ne finissent leur premier item.

## Power spikes & conditions de victoire

- **Niveau 3 :** Avec un point en **Q**, **E** et **W** tu as le combo E-Q-W complet pour les ganks. C'est ta première vraie fenêtre de gank, surtout en mid lane à travers la tri-bush.
- **Niveau 6 :** **Cataclysm** se débloque. N'importe quel carry sans ward près de ta river est une opportunité de dive. Le trick : flag (E) juste au-delà, R vers toi, Q pour les knock-up — ils ne peuvent pas répondre au lockdown sans **Flash** et un cleanse.
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky terminé (~ minute 12-14) :** Ton premier crit avec Martial Cadence one-shot les squishies (champions à gros dégâts et faibles défenses, comme l'ADC) après E-Q. C'est la fenêtre où tu dois ganker en cooldown et forcer les trades sur dragon.
- **3-item spike (Sundered Sky + Boots + Black Cleaver, ~ minute 22-25) :** Pic de teamfight. Ton R + Q tout seul efface un carry de backline, et tu as assez d'HP pour survivre au focus juste après.

## Erreurs courantes

- **Lancer la E sur toi pour le combo standard "knockup là où je suis".** Ça marche pour les ganks, mais dans un fight où l'ennemi recule, ta Q te tire en arrière. Lance le flag *au-delà* de l'ennemi pour que le pull de la Q te porte en avant vers lui, pas loin.
- **Appuyer sur W après l'engage.** Golden Aegis est un bouclier qui scale avec le nombre de champions ennemis touchés au cast — active-le *avant* le E-Q pour que la valeur du bouclier soit maximale et que le slow touche les gens sur qui tu vas atterrir, pas le vide.
- **Ulter le tank de la frontline.** Cataclysm enferme *un seul* ennemi avec toi. Utilise-le sur le carry (Caitlyn, Aphelios, Azir), pas sur le Sion qui est ravi de te battre dans une arène fermée.
- **Nettoyer toute la jungle avant de ganker.** Tu out-tempo la majorité des junglers avec des ganks E-Q au niveau 3-4. Si tu fais full-clear avant le premier gank, tu donnes ton plus gros avantage. Tax 2-3 camps puis cherche un angle.
- **Réactiver R pour casser le mur trop tôt.** Les murs sont aussi un outil de peel : si ton équipe gagne le fight hors de l'arène, laisse les murs en place pour empêcher le carry piégé de rejoindre. Ne réactive R que pour poursuivre un fuyard.

## Conseil avancé

Entraîne le combo **E-Q-Flash** : lance le flag, tire la Q à travers, et Flash *pendant* l'animation de la Q. Le knockup s'applique à ta destination, donc tu knock-up des ennemis dans une zone de 600 unités au-delà de ce qu'ils attendaient — utilisé pour engager hors de leur range de vision, c'est l'un des engages les plus fiables du jeu. Le trade-off est que tu dépenses Flash, donc garde le trick pour les ganks qui assurent une kill ou un ward perdu. Entraîne-le dans le Practice Tool une dizaine de fois avant de l'essayer en ranked ; la fenêtre de timing est étroite.
