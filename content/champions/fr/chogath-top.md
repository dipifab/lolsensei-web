---
title: "Cho'Gath Top Build & Guide — Patch 16.9"
slug: "chogath-top"
language: "fr"
patch: "16.9"
champion: "chogath"
role: "top"
last_updated: "2026-05-02"
description: "Guide Cho'Gath top lane pour League of Legends Patch 16.9 : build tank-mage qui stack les HP, runes Grasp, matchups clés, power spikes, erreurs courantes et astuce finale."
quick_learn:
  champion_dd_id: "Chogath"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Battlemage"
  abilities:
    - key: "P"
      name: "Carnivore"
      description: "Tuer une unité rend des HP et du mana. Les takedowns sur champions rendent bien plus. Sustain gratuit (regen HP/mana entre les fights) sur chaque last-hit (le coup qui tue le minion)."
      dd_spell_id: "Chogath_Passive"
    - key: "Q"
      name: "Rupture"
      description: "Skillshot (compétence visée linéaire) à 950 de portée : envoie les ennemis en l'air, les ralentit et inflige des dégâts magiques. Poke (dégâts à distance en sécurité) et engage (ouvrir le fight) — tell lent, anticipe la cible."
      dd_spell_id: "Rupture"
    - key: "W"
      name: "Feral Scream"
      description: "Cône frontal (portée 300) : dégâts magiques et silence (bloque les casts d'abilities) pendant ~2,2s. Enchaîne après un knockup Q sur les cibles melee."
      dd_spell_id: "FeralScream"
    - key: "E"
      name: "Vorpal Spikes"
      description: "Toggle on-hit (les prochains autos gagnent un effet bonus). Les 3 prochains autos infligent des dégâts magiques scalant sur les HP max de la cible et la ralentissent. DPS principal contre tanks et waveclear (nettoyer la vague)."
      dd_spell_id: "VorpalSpikes"
    - key: "R"
      name: "Feast"
      description: "Execute (achève sous un seuil HP) en true damage single-target (ignore armor et magic resist). Sur un kill, Cho'Gath gagne un stack permanent : plus de HP max et un modèle plus gros. Cap à 6 stacks de minion, sans cap sur champions."
      dd_spell_id: "Feast"
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
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3065", name: "Spirit Visage" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contre dégâts magiques lourds ou chaînes CC répétées (Malphite R, Sylas, Lissandra) — swap depuis Plated Steelcaps avant le premier back"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "contre 2+ menaces AP (top AP + jungler AP type Diana/Ekko) — stack de MR et movement speed pour rattraper ceux qui kitent"
    - dd_id: "3075"
      name: "Thornmail"
      against: "contre carrys auto-attack avec sustain (Vayne + Soraka, Master Yi + lifesteal) — applique Grievous Wounds (50% de réduction de soins)"
    - dd_id: "3083"
      name: "Warmog's Armor"
      against: "en sixième item à 5+ stacks de Feast — le seuil HP de Warmog's Heart est trivial, la regen permet de skip les backs"
    - dd_id: "6664"
      name: "Hollow Radiance"
      against: "contre mages à stack de minions (Heimerdinger, Malzahar) et team AP groupée — l'aura clear les stacks et chunk la frontline"
  base_combo: ["Q", "AA", "E", "AA", "W", "R"]
  win_condition: "Stack Feast sur cannons et kills pour gonfler les HP. À 5+ stacks + Riftmaker + Spirit Visage tu entres en second tank, absorbes le focus, puis enchaînes Q knockup et W silence sur leur carry."
  weakness: "Aucun dash, aucun escape hors Flash. Les tops ranged kitent (frappent hors de ta portée) la Q de 950. Vulnérable à ignite + heal reduction avant de stacker — perdre la lane snowball car Feast veut du farm."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8446, name: "Demolish", icon_path: "perk-images/Styles/Resolve/Demolish/Demolish.png" }
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Health Scaling"
      - "Health"
    primary_rationale: "Resolve : Grasp se déclenche toutes les 4s en melee (proc = activation passive), heal et stack des HP permanents — colle à la courbe HP+AP. Demolish prend la tour même en lane perdue, Second Wind regen les dégâts de poke, Overgrowth stack des HP toutes les 8 minions."
    secondary_rationale: "Sorcery secondaire : Manaflow Band soutient le mana pour Q poke et E waveclear sur les longues lanes, Transcendence monte l'ability haste (cooldowns plus bas) pour que la Q soit up presque chaque wave et cherche un knockup."
    secondary_alternative: "Contre tops ranged à poke ou burst AP (Vladimir, Teemo, Kennen) swap Sorcery pour Inspiration avec Biscuit Delivery (sustain HP+mana gratuit pré-6) et Time Warp Tonic (heal instantané sur potion pour rester en lane)."
matchup_draft:
  pick_into:
    - examples: ["darius", "garen", "sett", "volibear"]
      archetype: "Bruisers melee à windup lent (combattants HP+dégâts)"
      reason: "Le knockup de Q interrompt leurs animations de commit (pull de Darius, E spin de Garen, cast W de Sett). Carnivore plus l'omnivamp de Riftmaker (sustain type lifesteal sur chaque cast) gagne le trade ; au seuil de Feast, R les delete à 30% HP."
    - examples: ["riven", "camille", "irelia"]
      archetype: "Divers melee mobiles (qui te sautent dessus vite)"
      reason: "Q les knock en plein dash, casse leur combo. W silence juste après, bloque le second dash. R les exécute quand ils retreat low — ils ne peuvent pas all-in (engagement complet) sans Flash et une read propre."
    - examples: ["vladimir", "swain", "rumble"]
      archetype: "Mages melee sans hard CC (stuns/roots)"
      reason: "Ils n'ont aucun lockdown instantané pour interrompre le windup de Q. Tu les out-range au poke depuis une distance sûre, et le silence W éteint leurs kits ability-reliant pendant l'all-in."
  counterpicks:
    - examples: ["vayne", "quinn", "teemo", "kennen"]
      archetype: "Tops ranged avec poke et disengage (outils de fuite)"
      reason: "Ils restent au-delà des 950 de Q, reculent quand tu avances et te chunkent à mi-HP avant le 6. Aucun dash pour fermer la distance, aucun sustain hors Carnivore : tu perds la prio (contrôle de wave) à chaque cycle."
    - examples: ["fiora", "jax", "tryndamere"]
      archetype: "Duellistes melee mobiles à dégâts continus"
      reason: "Fiora parry (bloque) le silence W, Jax E dodge le knockup Q, Tryndamere ignore R tant qu'il ult avant. Leurs dégâts continus battent le windup lent de Q ; tu arrives au scaling Feast trop tard pour compter."
    - examples: ["gnar", "kayle"]
      archetype: "Late-game scalers (faibles tôt, monstres minute 30)"
      reason: "Le mini Gnar attaque la Q hors portée, Kayle ramp à des autos en true damage qui te delete en teamfight. Les deux gagnent le long game même si Cho stack Feast — leurs dégâts dépassent ta HP pool minute 30."
---

## Aperçu

Cho'Gath est un hybride tank-mage : il achète des items qui donnent à la fois des HP et de l'ability power, et il stack des HP max permanents avec son ultime **Feast**. Son kit combine un knockup longue portée (**Q**) avec un silence melee (**W**), ce qui lui permet d'interrompre les abilities d'engage des bruisers melee en lane et de lockdown les carrys ennemis en teamfight. Les dégâts qui scalent le plus avec sa build viennent de **Vorpal Spikes (E)**, qui ajoute des dégâts magiques basés sur les HP max de la cible — il fait donc plus mal aux tanks et bruisers fed qu'aux squishys.

Le plan de partie est simple à décrire et exigeant en patience : farm en sécurité derrière les minions, cherche les knockups **Q** pour setup les trades ou peel les ganks, et **ne renonce jamais** à l'occasion de **R** un minion low-HP (chaque stack sur champion est permanent, chaque cannon tué au R vaut +120 HP max pour le reste de la partie). Une fois à 5+ stacks plus deux items HP+AP, tu deviens un second tank que l'équipe adverse doit forcer avant tes carrys — c'est ça qui gagne les teamfights.

## Build Recommandé

**Items de départ :** Doran's Shield + Health Potion. Doran's Shield donne 80 HP et une regen post-dégâts qui synergise avec le heal de last-hit de Carnivore.

**Items core (dans l'ordre) :**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — premier item complet. HP + AP + omnivamp (te heal pour un pourcentage de tous les dégâts infligés, abilities ou autos). Le ramp de dégâts se convertit en true damage après 3 secondes de combat — parfait pour les trades étendus.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — bottes par défaut contre un top AD. Réduisent les dégâts d'auto-attack de 12%.
3. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — second item de dégâts. HP + AP + un passif burn qui inflige des dégâts magiques en pourcentage des HP max sur la durée. Stack naturellement avec le slow de Q et le silence de W qui gardent les ennemis à portée pour encaisser les ticks.
4. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — HP + magic resist + 25% d'amplification heal et shield. Multiplie le heal de Carnivore, l'omnivamp de Riftmaker et tous les shields alliés que tu reçois.
5. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — HP + AP + un slow sur chaque ability qui touche un champion. Stack par-dessus le slow de Q et empêche les cibles silencées par W de kite avant la fin du silence.

**Items situationnels :**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — contre dégâts magiques lourds ou chaînes CC répétées. Swap depuis Plated Steelcaps avant le premier back.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — contre les compos avec 2+ menaces AP. Stack du magic resist et ajoute du movement speed pour rattraper ceux qui kitent.
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — contre les carrys auto-attack plus une compo de heal (Vayne + Soraka, Master Yi + Aatrox). Applique Grievous Wounds (50% de réduction de soins) sur chaque coup encaissé.
- ![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) **Warmog's Armor** — sixième item dès que tu as 5+ stacks de Feast. Le seuil HP du passif Warmog's Heart est trivial quand tu stack ; la regen te permet de skip les backs et de roam à HP plein.
- ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — contre les mages à stack de minions (Heimerdinger, Malzahar) et les teams AP groupées. Le passif d'aura clear les vagues stackées et chunk la frontline ennemie.

**Bottes :** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** par défaut contre top AD, ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contre top AP ou CC lourd.

**Skill order :** Maxe **Q** en premier (slow, knockup, principal outil de trade), **E** en second (waveclear et on-hit qui shred les tanks), **W** en dernier (le silence est énorme mais les dégâts par rank sont faibles). Un point dans **R** aux niveaux 6, 11, 16.

**Runes :** Primaire **Resolve** avec **Grasp of the Undying**, **Demolish**, **Second Wind**, **Overgrowth**. Secondaire **Sorcery** avec **Manaflow Band** et **Transcendence**. Contre top ranged à poke, swap Sorcery pour **Inspiration** avec **Biscuit Delivery** et **Time Warp Tonic**.

## Matchups clés

- **Darius :** Pré-6 respecte sa passive W (5-stack bleed). Q-le avant qu'il connecte son pull, puis recule. Après le 6, Feast l'exécute à ~30% HP — c'est le seuil pour committer.
- **Sett :** Q sur la frame de wind-up de son W (le poing orange). S'il pose son W sur toi, accepte le trade et W-silence-le pour bloquer son E grab. Bottes Plated, Riftmaker en premier — son ult est niveau Mercury's Treads, considère les Merc's s'il est fed.
- **Teemo :** Counterpick. Prends Doran's Shield + Second Wind, push la wave sous tour avec E waveclear, et demande des ganks au jungler. Achète ![Hexdrinker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3155.png) **Hexdrinker** en premier item s'il snowball sa lane (build vers Maw of Malmortius après).
- **Fiora :** Matchup neutre-perdant. Elle parry ton silence W — ne lance jamais W à nu. Utilise Q pour interrompre ses dash trades, garde W pour après qu'elle a brûlé Riposte.
- **Malphite :** Matchup neutre, il scale moins bien que toi. Pas de sustain et sa Q poke coûte cher en mana ; trade avec Q+W quand son mana est bas. Attention à son **R** post-6 : il interrompt le cast de ton **R**.

## Power spikes & conditions de victoire

- **Niveau 2 :** Avec Q + E tu peux trade agressivement : Q pour le knockup, puis tu rentres et brûles 3 autos E pendant qu'ils ne peuvent pas bouger. Swing gratuit de 35-40% HP si tu touches Q.
- **Niveau 6 :** Le premier Feast débloque la pression d'execute. Cooldown 80 secondes, portée 175 (melee + un pas). Si ton jungler pose n'importe quel CC sur un ennemi low-HP, tu rentres et fais R pour un stack permanent.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker terminé (~ minute 13-15) :** La math du trade s'inverse. L'omnivamp plus le heal Carnivore te permet de tenir et fight les bruisers melee à travers leur combo complet sans back.
- **5+ stacks de Feast (~ minute 20-25) :** Tu deviens un second tank. Avec Riftmaker + Spirit Visage + 5 stacks tu es à 3800-4200 HP effectifs. Tu rentres dans la backline ennemie, encaisses le burst et enchaînes Q-W sur leur carry.

## Erreurs courantes

- **Skip Feast sur les cannon minions pour le gold.** Un stack de cannon vaut +120 HP max pour toujours. Même si tu "perds" 60 gold de minion, les HP scale plus que le gold ne le pourra jamais. Toujours R le cannon si aucun champion n'est en portée d'execute.
- **Utiliser Q en poke sans follow-up.** Q a un wind-up de 0,65s ; contre une cible mobile il faut anticiper d'environ une demi-longueur de champion. Si tu ne peux pas suivre avec W ou un auto, garde Q pour engage ou peel.
- **Avancer pour last-hit sans spacing.** Cho'Gath a 125 de movement speed de base et aucun dash. Si tu te plantes sur les caster minions de la wave, tu te fais all-in (engage total) par les bruisers mobiles. Last-hit depuis l'arrière de la wave.
- **Lâcher E en plein fight.** Vorpal Spikes est un toggle : il reste actif entre les fights tant que tu as du mana. Active-le avant le début du fight pour que les 3 premiers autos aient déjà l'on-hit prêt.
- **R-snipe un champion full HP.** Feast à HP plein fait ~600 true damage au rank max. C'est conséquent mais tu sacrifies le cooldown de 80 secondes et la chance d'un stack permanent sur un minion. Garde R pour les executes ou le panic peel.

## Conseil avancé

Annule le wind-up de ton auto-attack avec **Q** pour bait le Wind Wall de Yasuo ou Yone : démarre l'auto, vois le mur sortir, puis cast Q sur le point où ils se déplacent. La Q est une rupture du sol qui passe sous le mur (le mur bloque les projectiles, pas les effets de sol). La plupart des champions ranged ne distinguent pas un auto-cancel d'une ability retenue, donc tu obtiens un knockup gratuit sur une cible qui se croyait immunisée. Le même tour fonctionne contre **E** de Braum (Unbreakable) et **W** de Pantheon (frame de blocage de Shield Vault).
