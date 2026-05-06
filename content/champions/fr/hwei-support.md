---
title: "Hwei Support Build & Guide — Patch 16.9"
slug: "hwei-support"
language: "fr"
patch: "16.9"
champion: "hwei"
role: "support"
last_updated: "2026-05-05"
description: "Guide Hwei support pour League of Legends Patch 16.9 : kit de pick-mage, build principale, matchups clés en bot lane, power spikes et erreurs courantes."
quick_learn:
  champion_dd_id: "Hwei"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Catcher"
  abilities:
    - key: "P"
      name: "Signature of the Visionary"
      description: "Les sorts qui infligent des dégâts marquent les champions ennemis. Un second sort de dégâts complète la signature et laisse une marque qui explose après un court délai en dégâts magiques de zone."
      dd_spell_id: "Hwei_Passive"
    - key: "Q"
      name: "Subject: Disaster (QQ/QW/QE)"
      description: "Trois sous-sorts de dégâts. QQ boule de feu rapide, QW éclair retardé à très longue portée (dégâts bonus sur cible isolée ou sous CC), QE traînée de lave avec zone de slow."
      dd_spell_id: "HweiQ"
    - key: "W"
      name: "Subject: Serenity (WQ/WW/WE)"
      description: "Trois sous-sorts d'utility. WQ ligne de Move Speed pour les alliés, WW pool qui donne du shield dans le temps, WE trois orbes qui boostent les 3 prochains sorts/autos avec dégâts bonus et mana."
      dd_spell_id: "HweiW"
    - key: "E"
      name: "Subject: Torment (EQ/EW/EE)"
      description: "Trois sous-sorts de CC. EQ skillshot de fuite, EW œil au sol qui tire un root à tête chercheuse quand un ennemi entre, EE mâchoire qui drague les ennemis vers le centre."
      dd_spell_id: "HweiE"
    - key: "R"
      name: "Spiraling Despair"
      description: "Skillshot à très longue portée. Colle au premier champion ennemi touché et s'étend, ralentissant la zone par stacks ; explose après quelques secondes en dégâts magiques de zone."
      dd_spell_id: "HweiR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "W" }
    - { level: 9, key: "E" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "4005", name: "Imperial Mandate" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "6620", name: "Echoes of Helia" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "contre hard CC sur ton ADC (Leona stun, Morgana root, Nautilus hook) : nettoie le lockdown qui suit"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contre engage AOE lourd (Kennen, Wukong, Malphite, Yasuo) : shield d'équipe pour le fight forcé"
    - dd_id: "6617"
      name: "Moonstone Renewer"
      against: "contre comps poke-and-disengage où tu gardes ton équipe au plein HP sur les fights longs"
    - dd_id: "3107"
      name: "Redemption"
      against: "contre comps de siège et 5v5 sur objectifs (drake pit, Baron pit) où tu pré-castes la heal"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contre assassins qui plongent la backline (Zed, Akali, Talon) : le stasis te garde en vie"
  base_combo: ["EW", "QW", "P", "R"]
  win_condition: "Pose le root EW ou le drag EE, enchaîne QW ou QQ pour détoner la signature de la passive, puis ulta Spiraling Despair sur la cible bloquée. Snowball la bot lane par picks répétés avant la fin de la lane phase."
  weakness: "Chaque sort est un skillshot, donc une E ratée te laisse sans follow-up et sans échappatoire. Hwei n'a aucun dash et une mobilité très faible : un seul engage du support ennemi le prend hors position."
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
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery primary : Aery sert de poke sur Q et de shield bonus sur WW. Manaflow Band tient le coût mana des combos triples, Transcendence empile l'ability haste pour avoir EW chaque wave, Scorch ferme les kills à bas HP."
    secondary_rationale: "Inspiration secondary : Biscuit Delivery couvre la sustain faible en lane, Cosmic Insight réduit le cooldown de Flash et des active items (Mikael, Locket) : plus de fenêtres de peel en teamfight."
    secondary_alternative: "Contre comps full-engage qui plongent la backline (Leona, Rakan, Nautilus), swap Inspiration pour Resolve avec Bone Plating (-30/-60 dégâts sur le burst initial) et Revitalize (+10% sur tes shields et heals) : moins de CD reduction, plus de survie pure."
matchup_draft:
  pick_into:
    - examples: ["lulu", "soraka", "yuumi", "janna"]
      archetype: "Enchanter supports sans hard CC"
      reason: "Ils ne peuvent pas punir ton setup EW (vision + root retardé). Tu out-range leur poke et la QW retardée les attrape quand ils s'avancent pour shield leur ADC."
    - examples: ["jhin", "caitlyn", "ashe"]
      archetype: "ADCs immobiles sans dash"
      reason: "EW root et EE drag connectent proprement parce qu'ils n'ont pas de gap-closer pour interrompre le channel. Une fois primés, la signature de la passive plus la R ferment la kill."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "Mage supports skillshot sans escape"
      reason: "Tu matches leur range de poke avec QQ et QW, mais tu as du hard CC qui leur manque. En lane longue tu gagnes parce que tu convertis une E posée en kill, alors qu'eux ne font qu'éroder les HP."
  counterpicks:
    - examples: ["leona", "nautilus", "thresh"]
      archetype: "Supports engage hook et lockdown"
      reason: "Leur engage point-and-click ou hook touche avant que tu finisses le channel sur EW. Une fois lock, Hwei n'a pas de dash pour fuir, et une E ratée le laisse sans réponse."
    - examples: ["pyke", "rell"]
      archetype: "Engage avec roam et gap-close"
      reason: "Ils ferment la distance dont Hwei a besoin pour ses skillshots. La stealth de Pyke rend EW inutile (tu ne le vois pas pour placer l'œil) ; le saut W de Rell saute la zone slow de QE."
    - examples: ["alistar", "rakan"]
      archetype: "Tanks dash et knockup"
      reason: "Leur dash plus knockup AOE interrompt la séquence de sorts en plein cast. Hwei a besoin de trois pressions de touche pour bloquer une cible — un seul W-Q d'Alistar efface cette fenêtre."
---

## Aperçu

Hwei support est un pick mage à très longue portée qui transforme les bot lanes immobiles en kills faciles. Le kit est construit sur trois arbres de sous-sorts : dégâts sur **Q (Subject: Disaster)**, utility sur **W (Subject: Serenity)** et crowd control sur **E (Subject: Torment)**. Les outils phares en support sont **EW (Gaze of the Abyss)** — un root retardé à tête chercheuse qui bloque le premier ennemi qui entre dans un œil de vision — et **EE (Crushing Maw)** — une mâchoire qui drague les ennemis vers le centre et les ralentit à la sortie. L'un comme l'autre prépare la **passive (Signature of the Visionary)**, qui explose en dégâts magiques de zone au second sort. La portée de Hwei est de mage (autour de 900-1100 unités sur la plupart des casts), donc la lane se joue à distance de poke, pas au corps à corps.

Le game plan est "pose une E, gagne le trade." Place **EW** devant la trajectoire prévue de l'ADC ennemi avant un wave fight, prime la passive avec **QQ** ou **QW**, puis enchaîne la **R (Spiraling Despair)** sur la cible bloquée pour que le slow s'accumule pendant que ton propre ADC entre conclure. Le prérequis dur est le positionnement : chaque sort est un skillshot à distance sans dash, donc un seul engage ennemi qui te prend hors range est une condamnation à mort. Reste derrière ton ADC, pas à côté.

## Build Recommandé

**Starting items :** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (le nouveau support quest item qui évolue en Bloodsong / Solstice Sleigh / Dream-Maker en milieu de game) plus 2 Health Potions. Stealth Ward sur le slot trinket.

**Core items (en ordre) :**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — quest support item, gold income tant que tu restes près de l'ADC. Auto-upgrade en finished support item vers la minute 12-14.
2. ![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4005.png) **Imperial Mandate** — le moteur du pick play : chaque slow ou root de ton kit prime une marque Mandate que ton ADC détone pour des dégâts magiques bonus. Hwei a slow sur QE, EE et R, donc le proc est essentiellement garanti à chaque fight.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — flat magic penetration : QQ et la signature de la passive perforent la backline squishy ennemie.
4. ![Echoes of Helia](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6620.png) **Echoes of Helia** — chaque passive primée et détonée déclenche un stack Helia : heal ton ADC et burn la cible. Combiné à Mandate, double-dipping sur chaque ennemi bloqué.
5. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra plus un spike de magic-penetration en dessous de 35% HP (le moment où un sort achève un ennemi à bas HP). S'aligne avec les explosions de R sur cibles entamées.

**Situational items :**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — contre hard CC sur ton ADC (Leona, Morgana, Nautilus). Nettoie le lockdown que l'ennemi utilise pour one-shot ton carry.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contre engage AOE lourd (Kennen, Wukong, Malphite, Yasuo). Le shield d'équipe couvre le fight forcé que ta range de backline ne peut pas éviter.
- ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — remplace Imperial Mandate comme finished support item si l'équipe ennemie est poke-and-disengage et que tu passes moins de temps à poser E et plus à garder ton équipe au plein HP sur les fights longs.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contre assassins qui plongent la backline (Zed, Akali, Talon). Le stasis achète du temps pour que ton ADC repositionne pendant que tu survis à l'engage.

**Boots :** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** par défaut. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** si l'équipe te demande d'enchaîner du CC sur les fights longs — l'ability haste garde EW prête à chaque rotation.

**Skill order :** Maxe **E** en premier (la source primaire de lockdown : EW root, EE drag, EQ fuite), **W** en deuxième (shield, MS, empower trois orbes), **Q** en dernier (elle scale avec l'AP mais la cooldown reduction compte moins quand le slot du build est de support items, pas d'AP brut). Point en **R** aux niveaux 6, 11, 16.

**Runes :** Primary **Sorcery** avec **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Inspiration** avec **Biscuit Delivery** et **Cosmic Insight**. Swap Inspiration pour **Resolve** avec **Bone Plating** et **Revitalize** quand le bot ennemi a du hard engage (Leona, Rakan, Nautilus) — la survie compte plus que le cooldown des active items quand leur première ability décide le trade.

## Matchups clés

- **Leona / Nautilus :** Menaces d'engage. Reste hors de leur range de hook/Q ; ne jamais utiliser **Flash** offensivement en lane. Garde **EW** comme root de peel s'ils marchent sur ton ADC, pas comme setup de poke. S'ils flash en avant, ta **EE** drag peut les tirer loin de ton carry.
- **Lulu :** Matchup égal. Elle shield et désengage ta **EW**, mais tu out-range son poke. Attends qu'elle **W** son ADC en avant dans la range, puis root-la elle à la place — Lulu shield sur un root est un kill-confirm pour ton ADC.
- **Soraka :** Favorable pour Hwei. Sa MS de base basse et son absence de mobilité font que **EW** touche presque chaque cast. Push la wave d'abord, puis joue la combo **EW + R** sur elle à chaque cooldown — elle n'a aucune réponse.
- **Pyke :** Matchup dur. Sa stealth supprime la vision dont **EW** a besoin pour le bloquer ; si tu ne le vois pas à l'écran, l'œil ne fait rien. Achète Pink Ward (Stealth Ward, puis Oracle Lens) et garde les bushes éclairés. Garde **EE** comme pull de peel quand son hook touche, pas comme outil de poke.
- **Xerath / Vel'Koz :** Miroir mage support à longue portée. Leur poke matche ta range, mais tu as du hard CC qui leur manque : une **EW** posée gagne la lane parce qu'ils ne peuvent pas dodge **QW** retardée en étant root. Trade agressif avant le 6, avant que leur **R** ne scale.

## Power spikes & conditions de victoire

- **Niveau 2 :** Avec un point en **E** et un en **W**, tu as le lockdown plus une pool de shield. Une **EW** réussie plus le spike de ton ADC suffit à tuer le support ennemi s'il overextend.
- **Niveau 6 :** La première **Spiraling Despair** débloque tous les kill setups. La R colle au premier champion touché et ralentit la zone autour : combine avec **EE** drag et tu crées une zone "non-marchable" pendant 3-4 secondes.
- **![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4005.png) Imperial Mandate completion (~ minute 12-14) :** point de snowball de la bot lane. Chaque passive primée plus détonation Mandate efface la barre HP de l'ADC ennemi en une rotation. Regroupe avec le mid pour un drake fight ici.
- **![Echoes of Helia](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6620.png) Echoes of Helia online (~ minute 18-22) :** tu commences à faire 2-pour-0 dans les skirmishes parce que la heal Helia sur l'ADC dépasse les dégâts ennemis et le burn étend ta range. C'est la fenêtre pour forcer des picks autour du river avant que l'équipe ennemie ne se regroupe pour Baron.

## Erreurs courantes

- **Tirer Q sans setup.** Un poke **QW** nu à longue portée est tentant, mais l'éclair n'inflige que des dégâts réduits sur cible mobile. Pose d'abord le **EW** root, puis enchaîne **QW** pour les dégâts bonus sur cible isolée/root — les chiffres triplent.
- **Utiliser EW comme sort de poke.** EW est ton kill setup. La garder pour un moment défini par fight gagne plus de games que la spammer pour du chip damage. Le cooldown est trop long pour se permettre une E ratée.
- **Rester à côté de l'ADC.** Hwei n'a pas de dash. Si le support ennemi engage sur l'ADC et que tu es à melee aussi, vous mourez tous les deux. Positionne-toi derrière de 200-300 unités : ainsi un engage qui bloque l'un laisse à l'autre l'espace pour peel ou fuir.
- **Oublier l'arbre W.** Beaucoup de Hweis jouent pur pick-mage et ignorent les shields **WW** et les orbes **WE**. À mi-fight, un empower **WE** sur les autos de ton ADC vaut plus qu'un troisième sort de dégâts depuis ton kit. Utilise les deux moitiés du kit.
- **Marcher en side lane sans vision.** Le kit a besoin de vision pour poser EW et pour ulta cross-map. Place des wards en tri-bush et river avant chaque roam — sans vision, l'avantage de range disparaît à l'instant où tu sors de lane.

## Conseil avancé

La **pseudo-combo EW + EE** est le setup le plus rentable du kit de Hwei et apparaît à peine dans les guides de base. Pose **EW** (l'œil) sur le chemin que l'ennemi doit emprunter pour last-hit ; il reste au sol plusieurs secondes avant de bloquer. Puis cast **EE** (la mâchoire qui drague) pour les tirer à travers le rayon de lock-on de l'œil — l'œil tire automatiquement le root à tête chercheuse au moment où ils entrent, même s'ils ont essayé de dodge **EE**. Le drag devient impossible à éviter, le root est garanti, et ta **R** plus la passive ferment la kill depuis HP plein sur un squishy. La fenêtre est étroite (environ 1 seconde entre les casts), mais posée deux fois en un fight ça termine la game.
