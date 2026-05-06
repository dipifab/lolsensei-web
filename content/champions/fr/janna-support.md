---
title: "Janna Support Build & Guide — Patch 16.9"
slug: "janna-support"
language: "fr"
patch: "16.9"
champion: "janna"
role: "support"
last_updated: "2026-04-29"
description: "Guide Janna support pour League of Legends Patch 16.9 : build enchanter, matchups de peel, power spikes, erreurs courantes et un conseil avancé de disengage."
quick_learn:
  champion_dd_id: "Janna"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Enchanter / Disengage"
  abilities:
    - key: "P"
      name: "Tailwind"
      description: "Les alliés qui se déplacent vers Janna gagnent du Move Speed bonus. Janna convertit aussi une partie de son Move Speed bonus en dégâts magiques supplémentaires sur ses auto-attacks."
      dd_spell_id: "Janna_Passive"
    - key: "Q"
      name: "Howling Gale"
      description: "Charge une tornade puis relâche-la pour qu'elle file devant elle et envoie les ennemis en l'air. Plus tu charges, plus la portée, les dégâts et le knock-up sont longs."
      dd_spell_id: "HowlingGale"
    - key: "W"
      name: "Zephyr"
      description: "Passive : Move Speed bonus et tu traverses les unités. Active : dégâts magiques et slow sur un ennemi (consomme le bonus passif)."
      dd_spell_id: "SowTheWind"
    - key: "E"
      name: "Eye of the Storm"
      description: "Bouclier ciblé sur un champion allié ou une tourelle, qui donne aussi de l'Attack Damage bonus pendant sa durée."
      dd_spell_id: "EyeOfTheStorm"
    - key: "R"
      name: "Monsoon"
      description: "Channel qui repousse tous les ennemis proches, puis soigne les alliés autour pour le reste de la durée. Disengage et récupération en un seul bouton."
      dd_spell_id: "ReapTheWhirlwind"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "3222", name: "Mikael's Blessing" }
  situational_items:
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "vs burst AOE lourd (Yone R, Kennen R, Orianna R) — bouclier instantané sur toute l'équipe"
    - dd_id: "3107"
      name: "Redemption"
      against: "quand l'équipe a besoin de heal de groupe en fight long ou pour contester Drake et Baron"
    - dd_id: "6616"
      name: "Staff of Flowing Water"
      against: "vs AP carries scalant avec Ability Haste (Hwei, AP Ezreal) — AP bonus pour l'allié bouclé"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "vs comp d'engage avec un AD carry net (Aphelios, Kai'Sa) — le lien combine avec ta R"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "Garde l'AD carry vivant après la phase de skirmish, empile du peel via Move Speed et utilise la R pour briser les engages ennemis sur les objectifs."
  weakness: "Peu de dégâts en solo et portée courte sur E. Si l'ennemi t'inflige du hard CC avant ta R, tu ne peux peel personne, pas même toi."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8214
      name: "Summon Aery"
      icon_path: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8233, name: "Absolute Focus", icon_path: "perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["leona", "rakan", "nautilus", "rell"]
      archetype: "Supports hard engage"
      reason: "La R de Janna annule le dive en plein vol : dès qu'ils sautent sur ton AD carry, le channel les repousse et casse la tentative d'engage."
    - examples: ["jhin", "caitlyn", "ashe"]
      archetype: "AD carries immobiles avec auto-attacks fortes"
      reason: "Tailwind plus E shield plus Ardent Censer transforment un marksman statique en forteresse de peel : elle booste leurs dégâts et Move Speed sans qu'ils aient à se repositionner."
    - examples: ["zac", "hecarim", "warwick"]
      archetype: "Junglers diver voyants"
      reason: "Leur gank est un seul saut télégraphié — la Q de Janna les knock-up en plein dash et la R les renvoie d'où ils viennent."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "Supports hook longue distance"
      reason: "Janna n'a pas de gap-closer ni de hard CC au level 1 : un hook touché avant le 6 supprime l'AD carry avant que la R soit prête à disengage."
    - examples: ["xerath", "brand", "vel-koz"]
      archetype: "Mage supports longue distance"
      reason: "Ils pokent depuis hors de la portée 800 du E shield : elle peut bouclier le coup mais ne peut pas répondre — l'attrition d'HP gagne la lane."
    - examples: ["soraka", "yuumi", "milio"]
      archetype: "Enchanters de sustain qui out-healent le poke"
      reason: "Le seul outil de dégâts en lane de Janna est la Q, télégraphiée par une longue charge — ces enchanters out-healent le trade et la battent en valeur de teamfight."
---

## Aperçu

Janna est une enchanter support dont tout le kit tourne autour d'un seul verbe : **peel** (protéger un coéquipier, généralement l'AD carry — le marksman de la bot lane qui scale avec les items — de quiconque l'attaque). Sa passive **Tailwind** ajoute du Move Speed bonus à chaque allié qui marche vers elle, **Howling Gale (Q)** envoie en l'air quiconque tente de diver la back line (le carry ranged squishy posté à l'arrière en teamfight), **Zephyr (W)** grignote et slow la menace la plus proche, **Eye of the Storm (E)** est un bouclier avec un buff d'Attack Damage intégré pour l'allié ciblé, et **Monsoon (R)** est l'un des outils de disengage les plus propres du jeu (une compétence qui casse la tentative d'engage adverse — quand ils sautent dedans, tu les pousses dehors).

Son game plan est calme et mécanique : l'AD carry ne meurt jamais. Place-toi entre les menaces et ton carry, lance le bouclier dès qu'il est prêt, charge la **Q** derrière un mur pour que la tornade sorte à taille maximale, et garde la **R** comme "panic button" pour quand l'équipe ennemie commit tout sur ta back line. Avec Janna tu ne veux presque jamais engage — ton boulot, c'est de gagner les fights en refusant de les perdre.

## Build Recommandé

**Starting items :** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (le starter support qui évolue et donne plus de gold) plus 2 Health Potions. Saute les starters de dégâts : Janna ne snowball pas sur les kills de lane, elle scale sur l'utility de teamfight.

**Core items (dans l'ordre) :**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — évolue en Bounty of Worlds puis en un legendary support. Empile gold et charges de ward automatiquement.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — l'Ability Haste te permet de spammer **E** shield et **W** slow avec des cooldowns plus courts ; bottes par défaut des enchanters.
3. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — passive de heal-on-shield qui monte en puissance dans les fights longs. Combinée avec ton spam de **E**, l'AD carry ne prend quasiment plus de dégâts nets.
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — donne du dégât on-hit et de l'Attack Speed à l'allié bouclé. Meilleur item du jeu à côté d'un AD carry orienté auto-attack.
5. ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — nettoie le hard CC d'un allié. Obligatoire si l'ennemi a un stun single-target ou un hook sur ton carry.

**Situational items :**

- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — vs burst AOE lourd (dégâts en zone, type Yone R ou Kennen R). L'active donne un bouclier instantané à toute l'équipe.
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — quand les fights traînent (Drake, Baron, teamfights longs). Heal AOE retardé que tu peux poser depuis l'autre bout de la map.
- ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** — vs AP carries scalant avec Ability Haste (Hwei, AP Ezreal). Buff l'allié bouclé avec de l'Ability Power supplémentaire.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — vs comps d'engage où ton AD carry a besoin d'un slow garanti sur sa cible pendant ta **R**.

**Bottes :** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** sont la valeur par défaut. Boots of Swiftness peuvent les remplacer face à une comp avec plein de slows à fuir.

**Skill order :** Max **E** en premier (la valeur du bouclier et le buff Attack Damage scalent par niveau), **Q** en deuxième (plus de knock-up et de dégâts), **W** en dernier. Prends **R** aux niveaux 6, 11, 16. Démarre **W** au level 1 pour le Move Speed bonus en allant en lane, puis prends **E** au 2 pour bouclier le premier all-in.

**Runes :** Arbre primaire **Sorcery** avec **Summon Aery** (colle un petit dégât et une valeur de bouclier sur tes spells), **Manaflow Band** (sustain de mana pour bouclier et **W** chaque wave), **Absolute Focus** (AP bonus au-dessus de 70 % HP, facile sur Janna qui reste safe), **Scorch** (plus de poke avec la **Q**). Secondaire **Resolve** avec **Font of Life** (tu slow une cible avec **W** → tous les alliés qui la frappent se soignent) et **Overgrowth** (HP scalants permanents). Stat shards : Ability Haste, Adaptive Force, Health Scaling.

## Matchups clés

- **Leona / Rakan :** Supports hard engage. Garde la **R** pour le moment où ils commit sur ton AD carry ; ne la crame jamais pour chercher une Q. Charge la **Q** derrière un mur pour qu'ils ne voient pas le windup.
- **Blitzcrank / Thresh :** Supports hook. Reste derrière les minions à chaque fois que tu traverses la river. Le hook touche une fois et l'AD carry est mort — tu ne peux pas **R**-er hors d'un stun de 1.75 seconde.
- **Xerath / Brand :** Mage supports hors de portée du **E** shield. Colle-toi à la wave, n'échange pas d'auto-attacks, et fais-toi hard-side la lane par ton jungler. Achète ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** plus tôt que d'habitude.
- **Soraka :** Miroir de sustain. Tu la bats en boucliers au prix de moins de heal brut. Force un all-in au level 2 : **W** dans la face, **E** sur l'AD carry, repousse-la de la wave avant son spike de **R**.
- **Pyke :** Menace de roam. Track-le avec de la vision dans le tri-bush et l'entrée de la river ; s'il quitte la bot lane, ping mid immédiatement. La **R** de Janna stoppe son ult d'execute seulement s'il commit en mêlée — sur un hook longue distance, il est insaisissable.

## Power spikes & conditions de victoire

- **Level 2 :** Avec **W** au 1 et **E** au 2, tu peux shield-engage un trade court (un échange bref de dégâts en lane, pas un all-in complet). La plupart des lanes perdent ce trade parce que leur spike de niveau 2 (le moment où un champion gagne un boost de puissance soudain) est plus faible que le tien.
- **Level 6 :** **Monsoon** se débloque. Toute tentative de 2v2 ennemie devient gagnable — ils engage, tu channel, ils finissent renvoyés sous ta tour.
- **Moonstone Renewer + Ardent Censer (~ minute 16-20) :** C'est le spike teamfight où tu cesses d'être un support de lane pour devenir un multiplicateur d'équipe. Les HP effectifs de ton AD carry doublent presque si tu shield-spam pendant un fight.
- **Trois legendaries online (~ minute 25) :** Avec Mikael's en plus, tu nettoies la seule capacité de CC qui supprimerait ton carry. À partir de là, chaque fight d'objectif est un 5v4 si l'ennemi commit du hard CC.

## Erreurs courantes

- **Lancer Q sans la charger en lane.** Une tornade de 0.5 seconde ne fait quasi rien. Charge la **Q** sur les 3 secondes pleines derrière un mur ou dans le fog of war (le bush non wardé près de la river bot), puis relâche-la quand l'ennemi marche dans une wave.
- **Cramer la R pour une kill.** La **R** de Janna est le meilleur disengage de ton équipe. Chaque fois que tu l'utilises pour finir une kill que l'AD carry aurait conclue, tu laisses l'équipe sans panic button pour les 100+ secondes suivantes.
- **Te bouclier toi-même.** ![Eye of the Storm](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **E** te cible aussi, mais le bonus Attack Damage est gâché sur Janna. Par défaut, bouclier l'AD carry ; auto-bouclier seulement si un skillshot (un projectile dirigé qu'on peut esquiver) est verrouillé sur toi et que ton carry est en sécurité.
- **Rester trop en arrière en fight.** Ton **E** a une portée courte de 800 unités. Si tu peeks depuis l'arrière de ton équipe, tu ne peux bouclier personne. Reste à portée de bouclier de l'AD carry, en deuxième ligne — plus près que ton instinct te le dit.
- **Auto-attaque les minions pour faire des dégâts.** Tailwind ne se déclenche que sur les hits aux champions. Push la wave avec des autos donne à l'ennemi une fenêtre de trade gratuite sans aucun bénéfice de dégâts pour toi.

## Conseil avancé

Entraîne-toi au **Q-Flash**. Commence à charger **Howling Gale** derrière un mur, puis Flash en avant et relâche la tornade dans le même mouvement : le knock-up touche une cible qui n'a jamais vu le windup. Cette seule action transforme Janna d'enchanter défensive en disengage one-shot sur un ennemi fed (un champion en avance en kills et gold) qui a push trop loin. Le coût est ton **Flash** pour les 5 prochaines minutes — ne le dépense que si la kill, ou la survie de ton AD carry, est verrouillée.
