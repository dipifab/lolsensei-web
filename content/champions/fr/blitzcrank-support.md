---
title: "Blitzcrank Support Build & Guide — Patch 16.9"
slug: "blitzcrank-support"
language: "fr"
patch: "16.9"
champion: "blitzcrank"
role: "support"
last_updated: "2026-04-29"
description: "Guide Blitzcrank support pour le Patch 16.9 : timings de hook, setups de wards, build engage tank, matchups clés, power spikes et erreurs courantes."
quick_learn:
  champion_dd_id: "Blitzcrank"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Tank / Engage"
  abilities:
    - key: "P"
      name: "Mana Barrier"
      description: "Quand tu passes à bas HP, tu reçois un bouclier proportionnel au mana actuel. Mieux vaut entrer en fight avec la barre de mana pleine."
      dd_spell_id: "Blitzcrank_Passive"
    - key: "Q"
      name: "Rocket Grab"
      description: "Skillshot linéaire longue portée : tire vers toi le premier ennemi touché (un \"hook\" — un grappin qui ramène la cible). Long cooldown : hook raté = 16-20 secondes sans engage."
      dd_spell_id: "RocketGrab"
    - key: "W"
      name: "Overdrive"
      description: "Self-buff : gros bonus de move speed et d'attack speed, puis un slow à la fin. Sert à closer le gap avant la Q ou à chase après le knock-up de la E."
      dd_spell_id: "Overdrive"
    - key: "E"
      name: "Power Fist"
      description: "Charge ta prochaine basic attack pour appliquer un knock-up bref. Range corps à corps : Blitz doit déjà être collé à la cible."
      dd_spell_id: "PowerFist"
    - key: "R"
      name: "Static Field"
      description: "Active : dégâts et silence (blocage bref de tous les sorts) sur les ennemis autour. Passive : une charge ajoute des dégâts magiques sur la prochaine basic attack."
      dd_spell_id: "StaticField"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3876", name: "Solstice Sleigh" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3050", name: "Zeke's Convergence" }
    - { dd_id: "3109", name: "Knight's Vow" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contre beaucoup de crowd control ou du burst AP (Lux, Morgana, Ahri) — magic resist plus tenacity (récup CC plus rapide)"
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "contre du hard CC sur ton carry (Morgana Q, Ashe R, Leona engage) — l'actif cleanse un stun sur l'ADC"
    - dd_id: "3107"
      name: "Redemption"
      against: "contre les comps poke (Xerath, Caitlyn, Senna) — heal de zone en teamfight rend les HP perdus"
    - dd_id: "3158"
      name: "Ionian Boots of Lucidity"
      against: "quand tu veux plus de hooks par fight — Ability Haste réduit la Q : un hook raté coûte moins"
  base_combo: ["Q", "W", "AA", "E", "R", "AA"]
  win_condition: "Hook une priority target (ADC adverse ou backline mage) avec Rocket Grab et finis-la avec la chain W-AA-E-R avant que son équipe peel (protéger le carry des dégâts entrants)."
  weakness: "Si la Q rate, tu as 16-20 secondes presque sans engage. Les lanes avec disengage (Janna, Lulu) ou avec corps qui bloquent le hook (minions, tanks devant) éteignent le kit."
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
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Ability Haste"
      - "Health Scaling"
      - "Health"
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "jinx", "ezreal"]
      archetype: "ADCs à positionnement statique sans dash"
      reason: "Leur range d'auto-attack les force à se poser derrière les minions sur une ligne prévisible ; un hook tracé sur l'arc du minion canon passe propre car ils n'ont aucun escape instantané."
    - examples: ["soraka", "yuumi"]
      archetype: "Enchanters squishys avec base HP faible"
      reason: "Sortir l'enchanter de sa position détruit la lane : leur carry n'a plus de peel, et la combo Q-W-E-R sur une cible à 500 HP termine le trade."
    - examples: ["xerath", "vel-koz", "zyra"]
      archetype: "Mage supports stationnaires"
      reason: "Ils castent à très longue portée pour poke. Un hook à max range sur la frame de cast les attrape avant qu'ils ne flashent et ton équipe gagne un 4v5 gratuit autour d'eux."
  counterpicks:
    - examples: ["thresh", "nautilus", "leona"]
      archetype: "Tanks engage qui gagnent la course au hook"
      reason: "S'ils hookent ou chargent en premier, ton animation de Q est interrompue et ton coéquipier mange la chain CC : en lane hook-vs-hook, celui qui télégraphie son cast perd."
    - examples: ["janna", "lulu", "morgana"]
      archetype: "Disengage et immunité au CC"
      reason: "Janna Q tornado te sort du range de E ; Lulu W slow ou polymorph pendant l'engage ; Morgana Black Shield bloque le hook entièrement."
    - examples: ["alistar", "tahm-kench"]
      archetype: "Bruisers self-peel"
      reason: "Après un hook réussi, ils peuvent headbutt ou avaler leur propre ADC : le pull ne ferme pas la kill, et le long cooldown de Q devient une fenêtre de punish."
---

## Aperçu

Blitzcrank est un support tank-engage dont le gameplay tourne entièrement autour d'une seule ability : **Rocket Grab (Q)**. Le hook (un grappin qui ramène un ennemi vers toi) ouvre chaque fight avec ce kit. Si tu le land, la bot lane devient un 2v1 pendant deux secondes ; si tu le rates, tu as 16-20 secondes de cooldown presque sans engage. Il scale avec la cooldown reduction (appelée "Ability Haste") et avec une build tank parce que son boulot est d'avancer, hooker, knock-up et encaisser assez longtemps pour que son ADC nettoie.

Le game plan en une phrase : ward les bushes, regarde les pieds de l'ADC adverse, lance la **Q** quand il marche sur une trajectoire prévisible, puis enchaîne **W** (self-buff de move speed) → auto-attack → **E** (knock-up) → **R** (silence de zone). Hors fight, ton job c'est la vision : pose des wards dans la rivière et le tri-bush pour que ton jungler et ton mid laner sachent quand l'ennemi est missing.

## Build Recommandé

**Items de départ :** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions** + trinket ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) **Stealth Ward**. Achète un ![Control Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2055.png) **Control Ward** à chaque back à partir du second.

**Items core (dans l'ordre d'achat) :**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — starter support. Donne du gold passif et upgrade automatiquement en ![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) **Solstice Sleigh** une fois le seuil de gold atteint (vers minute 12-15).
2. ![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) **Solstice Sleigh** — l'upgrade warden du starter. Health, Ability Haste, et une aura qui slow l'ennemi que tu immobilises : ça s'aligne pile avec le knock-up de la **E**.
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — bottes armor contre les bot lanes orientées auto-attack (la majorité des ADCs) ; swap en ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contre beaucoup de crowd control.
4. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — actif de bouclier de zone. Après avoir hooké et que ton équipe commit, déclenche Locket pendant que le burst adverse est à mi-cast : ça absorbe le spike et transforme un fight 50/50 en fight propre.
5. ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — lie la passive à ton ADC. Après que ta **R** détone, ton ADC reçoit un buff de dégâts sur chaque hit pendant quelques secondes.
6. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — item de peel late game (peel = protéger le carry des dégâts entrants) : redirige une partie des dégâts pris par ton ADC sur toi. Se combine avec ta stack tank et te permet de courir dans la backline pour body-block (te placer sur la trajectoire pour absorber des coups visant un allié).

**Items situationnels :**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — contre du hard CC sur ton carry (Morgana Q, Ashe R, Leona engage). L'actif cleanse un stun sur ton ADC en plein fight.
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — contre les comps poke (Xerath, Caitlyn, Senna) : le heal de zone en teamfight rend les HP perdus à essayer d'avancer.
- ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — quand tu veux plus de hooks par fight ; Ability Haste réduit la **Q** pour qu'un hook raté fasse moins mal.

**Bottes :** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** sont la default contre la majorité des bot lanes. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contre du burst AP ou des stuns ; ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** si tu fais confiance à tes hooks et que tu veux les relancer plus vite.

**Skill order :** Maxe **Q** en premier (le hook est le kit), **E** en second (le knock-up scale avec le rank), **W** en dernier. Mets un point dans **R** aux niveaux 6, 11, 16.

**Runes :** Primaire **Resolve** avec **Aftershock**, **Font of Life**, **Bone Plating**, **Overgrowth**. Aftershock te donne un burst d'armor et de magic resist juste après avoir immobilisé un ennemi : ça déclenche pile sur le pull de la **Q**, donc à l'instant exact où tu deviens une cible, tu tank les dégâts en retour. Secondaire **Inspiration** avec **Biscuit Delivery** et **Cosmic Insight**. Alternative : **Inspiration** primaire avec **Glacial Augment** si tu préfères une lane poke-and-slow (moins commun mais viable contre les enchanters immobiles).

## Matchups clés

- **Caitlyn / Janna :** Caitlyn pose des trappes dans les bushes que tu dois traverser pour hooker. Achète un ![Control Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2055.png) **Control Ward** pour le bush de lane et check-le avant d'entrer ; le tornado de la Q de Janna interrompt l'animation de ta **Q**, donc attends qu'elle l'utilise sur une wave avant de lancer la tienne.
- **Thresh / Nautilus :** Lane hook-vs-hook. Celui qui hooke en premier perd souvent, parce que le second hook est une réponse gratuite. Utilise les minions comme body-block : place-toi derrière le minion canon, force-les à commit et punis sur leur cooldown.
- **Lulu / Yuumi :** Elles scalent avec leur ADC et n'ont pas d'engage. Tu as la prio en lane : lance des hooks safes, mais surtout roam en mid vers le niveau 4-6 avec la **W** active. Un hook cross-map sur un mid laner qui push trop loin est la plus grosse value play du jeu pour Blitz.
- **Morgana / Lux :** Les deux peuvent stopper ton hook avec un root longue portée. La E de Morgana (Black Shield) avale ta **Q** entière. Force-la à l'utiliser sur la wave d'abord en faussant un hook : sidestep, puis commit quand son shield est en cooldown.
- **Ezreal / Senna :** Ils poke sans commit en avant. Le plan de lane n'est pas "hook l'ADC toutes les 16 secondes" — c'est "leur denier la vision pour que ton jungler puisse gank". Pose des ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) **Stealth Wards** à l'entrée de la rivière et ping un gank quand Ezreal flashe une wave.

## Power spikes & conditions de victoire

- **Niveau 2 (Q + W) :** Premier power spike de hook. Avec **W** up, tu peux chase le pull quelques pas de plus avant que le slow ne kicke — ça transforme souvent un hook en kill au lieu d'un trade à 50% HP.
- **Niveau 6 (R débloquée) :** Ton all-in devient une kill garantie sur la majorité des ADCs. La combo c'est **Q** → **W** → auto-attack → **E** knock-up → **R** silence et damage. Le silence empêche le support adverse de te **Flash**-disengage du carry.
- **![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) Solstice Sleigh terminé (~ minute 12-15) :** L'upgrade warden de ton starter débloque la version teamfight du kit : chaque immobilisation que tu landes slow la cible pour ton ADC.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari terminé (~ minute 22-26) :** Maintenant tu peux engage sur un 5-stack mid game sans que la backline se fasse burst. C'est le spike où tu commences à chercher des plays ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** sur les objectifs.

## Erreurs courantes

- **Lancer Q en cooldown sans setup.** Un hook sans follow-up est gâché : si tu pull une cible que ton équipe ne peut pas atteindre, tu viens d'offrir 16-20 secondes gratuites à l'adversaire. Lance **Q** seulement quand ton ADC est à portée pour commit l'all-in (la chain de dégâts entière jusqu'à la kill, sans recul).
- **Télégraphier l'animation du hook.** Blitz lève le bras avec une animation de cast claire avant que la **Q** ne parte. Les adversaires corrects sidestep sur le wind-up. Lance **Q** depuis l'intérieur d'un bush, depuis le fog of war (les zones sombres non révélées de la map où l'ennemi ne te voit pas), ou pendant que l'ennemi est bloqué dans l'animation d'une de ses propres abilities pour qu'il ne puisse pas réagir.
- **Hooker la mauvaise cible.** Pull le tank ou le bruiser adverse est presque toujours mauvais : ça donne à leur équipe un engage gratuit sur toi. Cherche toujours la cible squishy (champion à gros dégâts et faible défense, comme un ADC ou un mage) avant de commit ta **Q**.
- **Oublier le coût mana de la passive.** Ton bouclier (passive **Mana Barrier**) scale avec le mana actuel, donc back avec peu de mana, c'est un -30% de défense sur le prochain fight. Back quand **Q** est en cooldown et que ton mana est sous 40%, pas quand tu en as envie.
- **Utiliser R uniquement pour les dégâts.** **Static Field** est plus utile en silence (un blocage bref des sorts adverses) qu'en damage. Garde-la pour quand le support adverse est à mi-channel d'une ability clé : cet interrupt vaut plus que le burst sur des ennemis à 200 HP.

## Conseil avancé

Le setup de hook le plus fort du jeu est le **bush-fog hook**. Marche dans le bush de lane derrière ta wave, là où l'adversaire ne te voit pas. Attends que la wave push pour que l'ADC adverse avance last-hit (kill un minion pour gold) sur le minion canon. Lance la **Q** à travers le mur du bush : ils n'ont pas d'animation à lire, pas le temps de sidestep, et ta main traverse le bush avant qu'ils ne réalisent que tu as cast. Combine avec **W** active pour fermer le gap avant que le flash de leur support remonte. Ce seul pattern est responsable de la majorité des kills de lane que Blitzcrank prend au-dessus du seuil bronze.
