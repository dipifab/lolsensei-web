---
title: "Ezreal Bot Build & Guide — Patch 16.9"
slug: "ezreal-bot"
language: "fr"
patch: "16.9"
champion: "ezreal"
role: "bot"
last_updated: "2026-04-29"
description: "Guide Ezreal bot lane pour League of Legends Patch 16.9 : starter kit, build AD core, matchups clés, power spikes, erreurs courantes et un conseil avancé final."
quick_learn:
  champion_dd_id: "Ezreal"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Skirmisher"
  abilities:
    - key: "P"
      name: "Rising Spell Force"
      description: "Chaque sort qui touche un ennemi accumule un stack d'attack speed (max 5). C'est le moteur du DPS auto-attack d'Ezreal."
      dd_spell_id: "Ezreal_Passive"
    - key: "Q"
      name: "Mystic Shot"
      description: "Skillshot linéaire à longue portée, dégâts physiques. Réduit les cooldowns au touché et applique les effets on-hit — ton bouton principal de poke et DPS."
      dd_spell_id: "EzrealMysticShot"
    - key: "W"
      name: "Essence Flux"
      description: "Orbe magique qui colle à un champion ou objectif. Détone au prochain auto ou sort pour des dégâts bonus et un remboursement de mana."
      dd_spell_id: "EzrealEssenceFlux"
    - key: "E"
      name: "Arcane Shift"
      description: "Blink court + bolt automatique. Cooldown long — c'est ta seule échappatoire, ne la gâche pas pour faire des dégâts en early."
      dd_spell_id: "EzrealArcaneShift"
    - key: "R"
      name: "Trueshot Barrage"
      description: "Rayon global linéaire qui inflige de gros dégâts à la première cible non-minion. Pour pickoffs (éliminer un ennemi isolé hors teamfight), execute ou waveclear d'urgence."
      dd_spell_id: "EzrealTrueshotBarrage"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "6675", name: "Navori Flickerblade" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "contre hard CC single-target à purger (Malzahar R, Skarner R, Warwick R) — l'actif retire le lock-down et tu continues à kiter"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contre CC à projectile télégraphié (Morgana Q, Ashe R, Blitzcrank Q) — le spell shield bloque un sort hostile et sauve ton positionnement"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "contre lanes de poke (Caitlyn, Varus, Xerath support) où il te faut sustain de lifesteal et un bouclier pour survivre aux trades"
    - dd_id: "3091"
      name: "Wit's End"
      against: "contre burst AP lourd (LeBlanc mid, Syndra, Brand support) — magic resist et dégâts magiques on-hit bonus sur chaque Q"
  base_combo: ["W", "Q", "AA", "E", "AA"]
  win_condition: "Stacke la passive d'attack speed en plaçant Q à chaque cooldown, kite à max range avec auto-attacks plus Q, et snowball la bot lane jusqu'au spike 3 items au minute 25-30 où tu surclasses le carry adverse en DPS."
  weakness: "Fragile et sans échappatoire hors E (cooldown long). Vulnérable aux engages forts et CC longue portée ; un Q raté en lane te fait perdre du tempo car les stacks décaient après 6 secondes sans toucher."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 8005, name: "Press the Attack", icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png" }
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["draven", "kalista", "samira"]
      archetype: "Marksmen hyper-agressifs courte portée"
      reason: "La Q d'Ezreal dépasse leur portée d'auto-attack (1150 contre ~525-550). Poke-les hors de la wave depuis une distance sûre ; ils doivent all-in (échange total jusqu'au kill) pour gagner et ta E est un panic button contre leur dive."
    - examples: ["sivir", "varus", "kog-maw"]
      archetype: "Marksmen immobiles sans dash"
      reason: "Ezreal peut sidestepper une Q lente (Sivir Boomerang, Varus Q) tout en plaçant la sienne. Ils ne peuvent pas punir son waveclear lent car ils ne ferment pas la distance quand il step up."
    - examples: ["aphelios", "kai-sa"]
      archetype: "Marksmen scaling au laning faible"
      reason: "Le spike d'Ezreal entre niveau 2 et 6 est plus fort que le leur. Le poke Q les pousse hors de la wave, ils arrivent aux core items en retard et perdent leur scaling late."
  counterpicks:
    - examples: ["miss-fortune", "jhin"]
      archetype: "Marksmen burst pre-6 frontloaded"
      reason: "Leur pattern de trade aux niveaux 1-3 (auto reset Jhin, Double Up MF) bat Ezreal en dégâts avant qu'il ne stack sa passive. Ils te forcent à back tôt et à perdre du tempo sur Manaflow Band."
    - examples: ["caitlyn", "xerath", "ziggs"]
      archetype: "Artillerie longue portée (poke lane)"
      reason: "Leur portée Q ou de trap dépasse les 1150 d'Ezreal. Il ne peut pas répondre sans entrer dans leur zone de menace, donc la lane saigne ses HP sans lui laisser l'all-in en retour."
    - examples: ["leona", "nautilus", "thresh"]
      archetype: "Tank supports hard engage"
      reason: "Leur engage point-and-click (Leona E, Naut Q, Thresh Q hook) contourne le point fort d'Ezreal, le poke à distance sûre. Une fois locked, sa E ne suffit souvent pas à fuir le follow-up."
---

## Aperçu

Ezreal est un AD carry longue portée qui troque le DPS auto-attack pur contre la sécurité et le poke à skillshot. Son kit tourne autour de placer **Mystic Shot (Q)** à chaque cooldown — chaque touche rembourse une partie de ses cooldowns, accumule la passive **Rising Spell Force** pour de l'attack speed (jusqu'à 5 stacks, environ +50% AS au max) et applique les effets on-hit comme les dégâts bonus de Kraken Slayer. Il a la meilleure échappatoire de tous les ADC traditionnels avec **Arcane Shift (E)**, mais le prix est un sustain en lane fragile et une courbe de scaling plus lente que des ADC comme Jinx ou Aphelios.

Le game plan est patient : poke avec **Q** depuis max range (1150 unités, plus loin que toute auto-attack ADC), pousse les waves avec des combos **W**-**Q** quand l'ennemi step back, et roam mid avec **R** pour des pickoffs à travers la map. La skill expression réside dans la prediction de **Q** (anticipe le vecteur de mouvement de la cible — plus facile à toucher pendant le last-hit car ils se ralentissent eux-mêmes pour attaquer un minion) et dans la discipline de **E** (ne blink pas pour faire des dégâts ; garde-la pour fuir l'engage qui finira par arriver).

## Build Recommandé

**Starting items :** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Doran's donne l'AD et le lifesteal nécessaires pour trade avec **Q** sans tomber en HP.

**Core items (dans l'ordre) :**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — premier spike DPS. Chaque 3e auto inflige des dégâts true (dégâts qui ignorent armor et magic resist), et **Q** compte comme application on-hit. C'est ton premier achat inconditionnel.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — bottes d'attack speed qui se cumulent avec les stacks de la passive. Achète après le premier composant de Kraken.
3. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — étend ta portée d'auto-attack d'environ 150 unités quand énergisée, alignant la portée de ta **Q**. Te permet de kiter (reculer en attaquant, en gardant la distance) depuis max range sans step forward.
4. ![Navori Flickerblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6675.png) **Navori Flickerblade** — les basic attacks réduisent les cooldowns non-ulti. Combiné au refund propre de **Q**, tu lances une **Q** toutes les ~2 secondes.
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — armor penetration pour le late game quand les tanks frontline ont stacké de l'armor.

**Situational items :**

- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — contre hard CC single-target à purger (Malzahar R, Skarner R, Warwick R). L'actif retire le lock-down et tu continues à kiter.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contre CC à projectile télégraphié (Morgana Q, Ashe R, Blitzcrank Q). Le spell shield bloque un sort hostile et sauve ton positionnement.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — contre lanes de poke (Caitlyn, Varus, Xerath support). Le lifesteal te fait survivre au harass et l'overheal shield te donne un buffer d'HP.
- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — contre burst AP lourd (LeBlanc mid, Syndra, Brand support). Magic resist et dégâts on-hit magiques bonus sur chaque auto et chaque **Q**.

**Boots :** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** est la default. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** est acceptable s'il te faut plus d'uptime de **R** pour des snipes cross-map.

**Skill order :** Maxe **Q** en premier (ton moteur de dégâts et DPS), **W** en second (burst extra sur cibles stuck), **E** en dernier (ne fait jamais assez de dégâts pour valoir le max — ça reste un blink). Mets un point dans **R** aux niveaux 6, 11, 16.

**Runes :** Primaire **Precision** avec **Lethal Tempo** (ou **Press the Attack** dans les lanes plus squishy), **Presence of Mind** (sustain mana), **Legend: Bloodline** (lifesteal scaling), **Coup de Grace**. Secondaire **Sorcery** avec **Manaflow Band** (essentiel — les coûts mana d'Ezreal sont punitifs sans elle) et **Transcendence**.

## Matchups clés

- **Caitlyn :** Elle dépasse ta portée de **Q** avec son auto-attack (650 vs tes 550 melee, mais ses traps te zone hors de la wave). Reste derrière les minions, ne marche jamais sur une trap, et farme avec **Q**. Cherche l'all-in quand elle utilise **Net (E)** pour fuir une wave — son cooldown est up.
- **Draven :** Il veut des trades (échanges courts de coups) à courte portée. Utilise **Q** pour pousser la wave, freeze-la (last-hitter les minions sans tuer la wave pour qu'elle reste sous ta tour) si tu es derrière, et appelle des ganks jungle tôt. Évite ses Spinning Axes — s'il a 2 haches en rotation, ne le auto-attack pas.
- **Lucian :** Mirror match pour le tempo de trade. Garde la **E** pour quand il utilise **Dash (E)** offensivement — c'est là qu'il est committed (totalement engagé, plus de retour en arrière), et tu peux soit le baiter sous tour soit suivre avec ton burst de **Q**.
- **Jhin :** Sa 4e auto fait un crit énorme ; compte ses munitions (1, 2, 3, puis back avant la 4). Punis-le pendant la longue animation de reload en step up et plaçant **Q**.
- **Sivir :** Matchup neutre jusqu'au niveau 6. Son **Spell Shield (E)** bloque ta **Q** — bait-le d'abord avec un orbe **W** (pas cher et rapide), puis tire **Q** pendant la fenêtre down.

## Power spikes & conditions de victoire

- **Niveau 2 :** Première fenêtre de trade. Avec **Q** + **W** détonée par **Q**, tu fais un chunk de dégâts qui gagne presque tout trade court.
- **Niveau 6 :** Le premier **Trueshot Barrage** débloque les roams et l'execute pressure (utilisation de R pour finir les ennemis low-HP qui fuient à travers la map). **R** sur le mid laner adverse s'il back low ; la portée globale transforme les erreurs de positioning en kills.
- ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer complété (~ minute 12-14) :** Ton DPS double quasiment. Force un dive 2v2 à ce moment — chaque 3e auto fait des dégâts true que le support adverse ne peut pas itemiser contre.
- **Spike 3 items (~ minute 25-30) :** ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** + ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** + ![Navori Flickerblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6675.png) **Navori Flickerblade** est le moment où tu surclasses la plupart des carries en DPS depuis une distance plus sûre. Pousse pour Baron et les fights de drake ici.

## Erreurs courantes

- **Garder la Q pour le tir parfait.** Les stacks de la passive (le buff AS au touché) décaient après 6 secondes sans hit. Lance **Q** sur les minions pour rafraîchir les stacks et refund le cooldown — même une **Q** ratée sur le champion qui touche un minion vaut le mana.
- **Utiliser E offensivement en lane.** **Arcane Shift** a un cooldown de 14-26 secondes ; une fois blink in, tu n'as plus rien si le support engage. Garde-la pour les fuites uniquement jusqu'à ce que tu aies ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** et un lead de kills.
- **Rester à max range de R en teamfight.** Ta portée de **Q** est 1150 ; rester à 1500+ pour placer des snipes **R** te met hors du peel du support (la protection que ton support te donne contre les dives entrants). Tiens-toi à la deuxième position la plus éloignée pour qu'un flank ne te delete pas.
- **Poke avec Q en mana-starved.** Si tu es sous 30% mana, pousse la wave et back. Un Ezreal scaling sans mana est inutile car chaque action de son kit (E pour fuir incluse) coûte au moins 28 mana.
- **Ignorer W sur les objectifs.** **Essence Flux** colle aux drakes et au Baron. Place **W** puis **Q** la déton et inflige ~250 dégâts bonus sur le contest du smite — un chunk de dégâts gratuit qui gagne le steal.

## Conseil avancé

Entraîne-toi à la combo **W**-stick sur les champions : lance **W** sur un ennemi low-HP à travers la fog of war (si tu as vision), puis immédiatement **Q** pour la déton. La détonation rembourse le coût mana de **W** plus du mana en bonus, donc la combo est essentiellement gratuite si elle entre. En teamfight, sticker **W** sur le carry adverse fait que chaque basic attack de ton équipe la déton, transformant un orbe à 50 mana en un chunk d'environ 400 dégâts sur 4 secondes réparti sur plusieurs sources. La clé est de lancer **W** *avant* que l'engage ne démarre, pas pendant — sa vitesse de voyage de 0.25s est trop lente pour attraper une cible déjà en mouvement.
