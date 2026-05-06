---
title: "Karma Support Build & Guide — Patch 16.9"
slug: "karma-support"
language: "fr"
patch: "16.9"
champion: "karma"
role: "support"
last_updated: "2026-04-29"
description: "Guide Karma support pour League of Legends Patch 16.9 : build enchanter, runes, matchups clés, power spikes, erreurs courantes et un conseil final pour novices."
quick_learn:
  champion_dd_id: "Karma"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Enchanter"
  abilities:
    - key: "P"
      name: "Gathering Fire"
      description: "Toucher un champion ennemi avec un sort ou une auto-attaque réduit le cooldown de Mantra. Reste active dans les trades pour garder la R prête."
      dd_spell_id: "Karma_Passive"
    - key: "Q"
      name: "Inner Flame"
      description: "Skillshot linéaire qui explose au premier impact, inflige des dégâts et ralentit dans une petite zone. Outil principal de poke en lane."
      dd_spell_id: "KarmaQ"
    - key: "W"
      name: "Focused Resolve"
      description: "Tether (lien) sur un ennemi ciblé. S'il ne se brise pas pendant la durée, inflige des dégâts deux fois et root la cible. La portée de rupture compte."
      dd_spell_id: "KarmaSpiritBind"
    - key: "E"
      name: "Inspire"
      description: "Bouclier ciblé sur un allié avec un bref buff de Move Speed. Joue-le sur l'ADC pour le disengage ou pour finir une kill."
      dd_spell_id: "KarmaSolKimShield"
    - key: "R"
      name: "Mantra"
      description: "Empower le prochain Q, W ou E. RQ ajoute une détonation AOE retardée, RW heal Karma et root plus longtemps, RE shield les alliés proches et donne plus de Move Speed."
      dd_spell_id: "KarmaMantra"
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3107", name: "Redemption" }
  situational_items:
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contre les comps avec beaucoup de soins (Soraka, Yuumi, Vladimir, Dr. Mundo) : coupe les heals quand tu Q."
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contre le burst AOE (Yasuo + Malphite, ult d'Orianna) : le shield d'équipe bloque la wombo combo."
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contre les CC magiques single-target (hook de Blitzcrank, Q de Morgana, stun de Twisted Fate)."
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contre les assassins qui te ciblent (Zed, Talon, Akali) : la stasis de 2,5s permet au team de peel."
    - dd_id: "4005"
      name: "Imperial Mandate"
      against: "quand le team a besoin de plus de dégâts depuis ton poke et que ton ADC plus jungler suivent ton slow."
  base_combo: ["W", "RQ", "AA", "E"]
  win_condition: "Bullie la bot lane avec le poke Q dès le niveau 1, prépare les kills avec le root W et la Q empower par Mantra (RQ), puis peel l'ADC avec E et RE en teamfight."
  weakness: "Enchanter squishy sans dash. Les supports hard-engage (Leona, Nautilus, Rell) la lock avant le tether W, et un Q raté c'est de la HP échangée pour rien."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8214
      name: "Summon Aery"
      icon_path: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
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
      - "Ability Haste"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["zyra", "brand", "xerath"]
      archetype: "Mage supports immobiles"
      reason: "La portée de Q de Karma matche la leur et son shield E annule leur poke, donc elle gagne les longs trades en healing l'écart qu'ils ne peuvent pas combler."
    - examples: ["soraka", "sona", "yuumi"]
      archetype: "Enchanters passifs sans hard CC"
      reason: "Ils ne peuvent pas punir un Q raté, donc Karma poke l'ADC sans risque et snowball la lane avant qu'ils touchent leur item spike."
    - examples: ["draven", "kalista"]
      archetype: "ADC lane-bullies qui veulent des supports pokables"
      reason: "Le E de Karma sur son propre ADC absorbe leur burst all-in, puis elle retrade plus fort en Q-RQ parce qu'Aery proc à chaque sort."
  counterpicks:
    - examples: ["leona", "nautilus", "rell"]
      archetype: "Tanks hard-engage avec CC point-and-click"
      reason: "Leurs stuns touchent avant que le tether W de Karma ne lock, donc elle mange l'engage sans pouvoir root et meurt avant que le E ne sauve l'ADC."
    - examples: ["pyke", "thresh", "blitzcrank"]
      archetype: "Hook supports longue portée"
      reason: "Karma n'a pas de dash pour dodge un skillshot linéaire propre ; un hook sur elle au niveau 2-3 ferme la lane parce qu'elle n'a aucun outil d'escape."
    - examples: ["alistar", "rakan"]
      archetype: "Peel-engagers mobiles"
      reason: "Ils blink sur Karma plus vite qu'elle ne peut caster Q ou E, et ils brisent son root avec leurs propres knock-ups avant que le W ne tick."
---

## Aperçu

Karma est un support hybride enchanter-poke : un enchanter est un champion construit autour des soins et des boucliers sur les alliés, et "poke" signifie grignoter les HP ennemis à distance sans s'engager dans un fight complet. Elle poke avec **Inner Flame (Q)**, lock ses cibles avec **Focused Resolve (W)** et protège son ADC (le carry à distance à côté d'elle en bot lane) avec **Inspire (E)**. Son ultime **Mantra (R)** n'est pas un sort séparé mais un empowerment qui ajoute un effet supplémentaire au prochain Q, W ou E. Comme Mantra est disponible dès le niveau 1, Karma est l'un des rares champions qui "a son ulti" dès le premier cast en lane — chaque auto-attaque sur un champion enlève des secondes au cooldown grâce à sa passive **Gathering Fire**.

Le game plan est de gagner la bot lane avec le poke Q on cooldown, chercher un root (un "root" empêche l'ennemi de se déplacer pendant un court instant) avec W quand l'ennemi avance pour last-hit un minion, et shield l'ADC avec E pour absorber l'all-in (un fight engagé jusqu'à la mort). Vers la minute 12, avec ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** et ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** terminés, Karma se transforme en enchanter de teamfight qui shield un carry allié de la frontline (frontline = le tank ou fighter qui ouvre le fight) et zone la back line (back line = les carrys qui infligent des dégâts depuis l'arrière) avec RQ.

## Build Recommandé

**Items de départ :** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (l'item de la quest support) plus 2 Health Potions et une Stealth Ward. Évite les potions de mana : Manaflow Band et Biscuit Delivery couvrent les soucis de mana en early.

**Items principaux (dans l'ordre) :**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — complète en ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** vers la minute 10-12, c'est la récompense de la quest support. Donne du gold income et des charges de ward.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — bottes qui donnent de l'Ability Haste (stat qui réduit le cooldown des sorts), pour avoir Mantra et Q plus souvent.
3. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — quand tu shield un allié avec E, il gagne de l'attack speed (attaque plus vite) et des dégâts magiques on-hit (dégâts bonus à chaque basic attack). Brille avec les ADC qui auto-attaquent (Kai'Sa, Jinx, Twitch).
4. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — heals et shields répétés déclenchent un soin cumulatif sur les alliés à bas HP. Marche avec le E spam et le RE en teamfight.
5. ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — heal de zone avec 5 secondes de delay, à utiliser sur les fights d'objectif (Drake, Baron) pour topup tout le team.

**Items situationnels :**

- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contre les comps avec beaucoup de heal (Soraka mid, Yuumi, Vladimir top). Coupe les soins ennemis quand tu les damages avec Q.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contre le burst AOE (Yasuo + Malphite, R d'Orianna). L'actif donne au team entier un large shield, bloque la wombo combo (un "wombo combo" est un engage CC enchaîné qui efface ton team en 1-2 secondes).
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contre les casters de CC magique single-target qui te one-shot (hook de Blitzcrank, binding de Morgana, gold card de Twisted Fate).
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contre les assassins qui te ciblent spécifiquement (Zed, Talon, Akali). Les 2,5 secondes de stasis ("tu deviens non-ciblable mais tu ne peux ni bouger ni caster") laissent le temps au team de peel pour toi.
- ![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4005.png) **Imperial Mandate** — quand le team a besoin de plus de dégâts et que ton jungler/ADC suit ton slow Q de manière fiable.

**Bottes :** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** sont le default pour l'Ability Haste (tu veux Mantra le plus vite possible). Les Mobility Boots sont acceptables si tu roam beaucoup vers mid lane.

**Skill order :** Max **Q** en premier (poke principal et dégâts AOE), **E** en second (shield plus gros + Move Speed), **W** en dernier. Pose un point en **R** aux niveaux 6, 11, 16 — mais souviens-toi que Mantra est déjà utilisable dès le niveau 1.

**Runes :** Primaire **Sorcery** avec **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. Aery proc sur chaque Q pour des dégâts de poke en plus et sur chaque E pour un petit bonus de shield. Secondaire **Inspiration** avec **Biscuit Delivery** (sustain de mana gratuit en lane) et **Cosmic Insight** (plus d'Ability Haste sur summoners et items).

## Matchups clés

- **Lulu / Janna :** Matchup égal. Toutes les deux sont des enchanters sans hard engage ; la lane se décide sur le duo des ADC. Poke-les au Q quand elles avancent pour ward, mais ne commit pas Mantra en lane — garde-la pour les rotations sur les objectifs.
- **Soraka :** Guerre de poke favorable. Ton slow de Q plus les procs Aery battent le coût HP de son W. Pousse-la hors de la wave entre les niveaux 3-5 en lançant Q on cooldown.
- **Leona / Nautilus :** Lane difficile. Elles engage (lancent le fight) avec du CC point-and-click (crowd control qui lock instantanément sans viser, comme un stun au clic) avant que tu ne tether avec **W**. Garde le E pour le moment où elles engage (le shield absorbe le burst — gros dégâts en 1-2 secondes — et donne du Move Speed pour peel out, c'est-à-dire fuir avec l'ADC), et ne push jamais la wave au-delà de la rivière sans vision.
- **Pyke / Thresh :** La portée du hook matche la portée de ton Q. Reste derrière l'ADC, cache-toi derrière les minions pour casser la ligne de vue sur les hooks, et Q le support — pas l'ADC — quand son hook est en cooldown.
- **Blitzcrank :** Le pull est tout le matchup. Avance uniquement quand tu vois son Q en cooldown ; si tu te fais hook, E immédiatement sur toi-même (le shield + speed boost te donne une chance de regagner la tour).

## Power spikes & conditions de victoire

- **Niveau 1 :** Mantra est déjà up. RQ au niveau 1 est un fort outil d'invade (entrer dans la jungle ennemie pour préparer une kill early) parce que la détonation AOE (dégâts de zone qui touchent tout dans un cercle) inflige de vrais dégâts sur des ennemis groupés (plusieurs cibles collées les unes aux autres).
- **Niveau 6 :** Le second point en R débloque des cooldowns Mantra plus rapides. Avec Manaflow Band stack, tu peux spam des combos Q-RQ-W sur l'all-in de bot lane.
- **Bloodsong + Ionian Boots of Lucidity (~ minute 10-12) :** La fenêtre de roam s'ouvre (roaming = quitter sa lane pour aider une autre lane). Push fort la wave avec un Q, puis va à la rivière de mid lane pour préparer un 3v2 avec ton jungler et ton mid laner.
- **Ardent Censer + Moonstone Renewer (~ minute 24-28) :** Pic de teamfight. Chaque shield E déclenche l'attack speed d'Ardent et le heal cumulatif de Moonstone. Ton ADC outscale n'importe quel matchup avec ces deux items derrière lui.

## Erreurs courantes

- **Gaspiller Mantra en lane sur le poke.** RQ paraît fort, mais brûler Mantra à la minute 4 signifie pas de détonation AOE quand le jungler ennemi gank (attaque-surprise sur ta lane depuis la rivière) à la minute 6. Garde RQ pour le setup après un root W ou pour des ennemis groupés près du drake.
- **Te shield toi-même au E.** E sur soi-même c'est OK comme panic button (un cast d'urgence quand tu vas mourir), mais la valeur du shield et le Move Speed sont gaspillés si ton ADC meurt derrière toi. Default : E sur l'ADC ; tu te E toi-même seulement si l'ADC est déjà en sécurité.
- **Q poke quand un assassin ennemi est missing sur la map.** Karma n'a pas de dash. Si le jungler ennemi n'est pas tracé, n'avance pas à portée de Q — tu vas te faire catch sans escape et tu vas trade ta vie pour rien.
- **Oublier la portée de rupture du tether W.** Ton **W** root seulement si le tether reste unbroken pendant toute la durée. Si tu le lance à max range et que l'ennemi recule d'un pas, le tether snap et zéro payoff. Lance W quand l'ennemi est commit (après qu'il a utilisé son dash ou son escape).
- **Build damage au lieu d'utility.** Karma peut scale en dégâts AP, mais le build enchanter (Ardent Censer, Moonstone Renewer, Redemption) donne au team beaucoup plus de valeur qu'un Rabadon's. Default sur l'utility sauf si tu es massivement en avance.

## Conseil avancé

Utilise **RE** (Mantra qui empower Inspire) sur un allié qui charge en avant — pas sur toi-même. Le E empower shield ta cible plus tous les alliés proches, et donne un Move Speed boost plus large. Pose-le sur l'ADC au moment exact où ton team commit l'engage : le Move Speed AOE permet à tout le team de fermer la distance sur la back line ennemie d'un seul coup, transformant un teamfight normal en collapse forcé. L'astuce c'est de timer le RE avant l'engage, pas après, parce que le buff de Move Speed est le plus utile à l'aller.
