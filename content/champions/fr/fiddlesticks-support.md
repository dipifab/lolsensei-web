---
title: "Fiddlesticks Support Build & Guide — Patch 16.9"
slug: "fiddlesticks-support"
language: "fr"
patch: "16.9"
champion: "fiddlesticks"
role: "support"
last_updated: "2026-05-02"
description: "Guide Fiddlesticks support pour League of Legends Patch 16.9 : build AP d'engage, harass en lane, matchups clés, power spikes, erreurs courantes et astuce finale."
quick_learn:
  champion_dd_id: "Fiddlesticks"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Engage Support"
  abilities:
    - key: "P"
      name: "A Harmless Scarecrow"
      description: "Le slot trinket devient des charges d'effigies. Place de faux épouvantails pour la vision ; les ennemis qui en voient un sont brièvement fear et l'effigie explose."
      dd_spell_id: "Fiddlesticks_Passive"
    - key: "Q"
      name: "Terrify"
      description: "Cible un seul ennemi. L'endommager avec un sort en étant unseen le Terrifie aussi. Le fait fuir loin de toi pendant 1-2.5s."
      dd_spell_id: "FiddleSticksQ"
    - key: "W"
      name: "Bountiful Harvest"
      description: "Channel qui drain les HP des ennemis proches (te soigne). En fin de channel inflige des dégâts bonus en execute. Sustain en lane après le premier back."
      dd_spell_id: "FiddleSticksW"
    - key: "E"
      name: "Reap"
      description: "Faux boomerang en large cône : ralentit tous les ennemis touchés et silence ceux sur la ligne centrale. Ton outil principal de harass — touche deux fois."
      dd_spell_id: "FiddleSticksE"
    - key: "R"
      name: "Crowstorm"
      description: "Channel de 1.5s, puis blink au point ciblé avec dégâts AOE par seconde autour de Fiddle pendant 5s. À lancer depuis un buisson de lane sur l'ADC adverse."
      dd_spell_id: "FiddleSticksR"
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
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3504", name: "Imperial Mandate" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contre les comps AOE-burst lourd quand l'équipe a besoin d'un bouclier actif (Yasuo + Malphite, Wukong, Diana)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contre les CC magiques single-target qui interrompent le channel R (Lissandra R, Veigar E, Twisted Fate stun)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contre les comps qui empilent les soins (Soraka, Vladimir, Aatrox) — applique Grievous Wounds"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap dès que 2+ ennemis achètent un objet de Résistance Magique"
  base_combo: ["R", "E", "Q", "W"]
  win_condition: "Pose une vision profonde sur la botlane, planque-toi dans le tri-bush au niveau 6, puis Crowstorm sur l'ADC adverse pour un kill garanti qui snowball ton carry."
  weakness: "Pire lane phase parmi les supports d'engage avant 6 : pas de bouclier, pas de CC point-and-click. Si invade ou poke out, aucun outil de comeback avant l'ult."
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
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Aftershock proc sur Q Terrify (CC immobilisant) pour un spike de 2.5s d'armure et MR qui sauve Fiddle du focus juste après Crowstorm. Font of Life soigne le carry après chaque fear, Bone Plating mange le burst all-in early, Revitalize boost le sustain de Bountiful Harvest."
    secondary_rationale: "Sorcery secondaire : Manaflow Band règle les soucis de mana sur le spam de E en lane ; Transcendence pousse l'ability haste au-delà de 30 dès Sorcerer's Shoes pour des cycles de Crowstorm plus courts."
    secondary_alternative: "Contre les lanes de poke lourd (Lux, Karma, Xerath support) swap Sorcery pour Inspiration avec Biscuit Delivery (5 biscuits gratuits en early pour rester full HP/mana) et Cosmic Insight (Flash et Crowstorm CDR réduit)."
matchup_draft:
  pick_into:
    - examples: ["soraka", "yuumi"]
      archetype: "Enchanters squishys sans hard CC"
      reason: "Leur kit tourne autour de heal et shield — un Crowstorm depuis le tri-bush passe leurs cooldowns et one-shot eux et l'ADC avant que heal ou shield ne soient utilisés deux fois."
    - examples: ["caitlyn", "kog-maw", "ashe"]
      archetype: "ADC immobiles sans dash"
      reason: "Ces ADC ne peuvent pas échapper à un flank depuis un bush ; une fois R + E touchés, aucun outil de mobilité pour reset la distance et ta botlane convertit le kill en tour."
    - examples: ["sona", "seraphine"]
      archetype: "Supports mage backline sans escape"
      reason: "Ils restent loin pour buff — mais tes effigies donnent une vision profonde qui trouve leur position, et ton channel R dans leur hex les one-shot avant qu'ils bougent."
  counterpicks:
    - examples: ["morgana", "milio"]
      archetype: "Enchanters avec Black Shield / spell-shield"
      reason: "Black Shield absorbe Terrify (Q fear) et le premier tick AOE de Crowstorm sur le carry, neutralisant ton cast d'engage et leur offrant 5s pour disengage."
    - examples: ["janna", "lulu"]
      archetype: "Enchanters de disengage / peel"
      reason: "Janna R ou Lulu W te sortent du carry à l'instant où tu atterris. L'AOE de Crowstorm tick mais sans follow-up CC, le fight reset et tu manges du focus pour rien."
    - examples: ["lux", "karma", "xerath"]
      archetype: "Supports artillery longue portée"
      reason: "Ils te poke hors de lane avant 6 au-delà de la portée de ton E. Fiddle n'a ni bouclier ni gap-close, donc ta barre HP tombe à la moitié avant ta première R."
---

## Aperçu

Fiddlesticks support est un pick hide-and-engage : un support AP (Ability Power, scaling magique) dont toute la lane phase est le setup d'un seul moment — appuyer **Crowstorm (R)** depuis l'intérieur d'un buisson de lane au niveau 6 sur l'ADC adverse (le marksman, le carry auto-attack à distance de la botlane), avec ta botlane en follow-up sur le blink. Fiddle n'a pas de bouclier, pas de CC point-and-click, pas d'escape, donc le prix de ce power spike au niveau 6 est la pire lane phase parmi les supports d'engage entre les niveaux 1 et 5.

Le plan de partie : pose des effigies dans le tri-bush bot et la rivière pour menacer les lurk plays, utilise **Reap (E)** pour le harass slow + silence quand un adversaire vient last-hit, et évite de te faire poke out par les matchups longue portée. Une fois **R** disponible, cherche n'importe quel moment où l'ADC adverse est shove past sa tour ou que le support roam — puis blink. En mid-game ton job est de trouver des flanks pour les Drake fights depuis le fog de la rivière ou des entrées de jungle non wardées. Tu es essentiellement un Fiddle jungler qui passe la lane phase à côté d'un ADC.

## Build Recommandé

**Items de départ :** ![Spellthief's Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3850.png) **Spellthief's Edge** (le starter AP support qui quest en Bloodsong) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**.

**Items core (dans l'ordre) :**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — récompense de quest de Spellthief's Edge. Obligatoire : il donne le revenu en or qui te permet d'acheter de vrais items, plus un stack d'AP-on-takedown qui snowball tes dégâts. Ferme la quest entre minute 12-14.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic pen plat (coupe à travers la résistance magique adverse). Pas chers et meilleur choix que ![Mobility Boots](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3117.png) **Mobility Boots** une fois R en ligne.
3. ![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Imperial Mandate** — ton item principal. Le slow de **E** et **R** marque les cibles ; quand un allié frappe la cible marquée, la marque détone pour des dégâts bonus (et partage de l'or avec ton ADC). Synergie pure avec le kit plein de slows de Fiddle.
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — entre en stasis dès que Crowstorm finit de tick. Mandatory si l'adversaire a un diver ou un assassin ; sans, tu meurs immédiatement après chaque engage.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — uniquement si la game traîne et qu'il te reste de l'or après les items support. Le +35% AP bonus rend Crowstorm one-shot sur les squishys.

**Items situationnels :**

- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contre le burst AOE lourd (Yasuo + Malphite, Wukong, Diana). Le bouclier actif sauve l'équipe pendant leur wombo.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contre les CC magiques single-target qui interrompent R (Lissandra R, Veigar E, Twisted Fate stun).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contre les comps qui empilent les soins (Soraka, Vladimir, Aatrox).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — quand 2+ ennemis achètent un objet de Résistance Magique.

**Bottes :** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** par défaut. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** si 2+ ennemis ont du hard CC.

**Skill order :** Maxe **E** en premier (slow + silence est ton seul harass de lane), **W** en second (sustain après le premier back), **Q** en dernier. Mets un point dans **R** aux niveaux 6, 11, 16.

**Runes :** Arbre primaire **Resolve** avec **Aftershock**, **Font of Life**, **Bone Plating**, **Revitalize**. Secondaire **Sorcery** avec **Manaflow Band** et **Transcendence**. Contre les lanes de poke lourd (Lux, Karma, Xerath support) swap Sorcery pour **Inspiration** avec **Biscuit Delivery** et **Cosmic Insight**.

## Matchups clés

- **Lux support :** Q binding longue portée plus poke E. Cache-toi derrière la wave pour que sa **Q** n'ait pas de ligne propre, et ne face-check jamais le tri-bush sans vérifier d'abord avec une effigie. Survis jusqu'au 6, puis Crowstorm sur elle si elle over-extend.
- **Morgana :** Black Shield neutralise le fear de ta **Q** et le premier tick AOE de R sur son ADC. Engage toujours sur l'ADC plutôt que sur Morgana, et force-la à pre-shield avec un faux pas dans le buisson avant de commit.
- **Leona :** Matchup d'engage en miroir, mais Leona a du CC point-and-click et Aftershock qui battent les tiens avant 6. Trade seulement quand elle a utilisé son **E**, et n'engage jamais en premier contre Leona — elle te stun hors du channel R.
- **Janna :** Hard counter à ton engage. Le **R** de Janna à l'atterrissage te sort du carry, annulant tout l'ult. Garde Crowstorm pour quand elle a utilisé son R sur un autre fight, ou quand elle roam.
- **Caitlyn / Senna ADC :** Ta lane de rêve. Manque de mobilité — une fois 6 atteint, Crowstorm depuis le tri-bush les finit à chaque fois. Dis à ton ADC de freeze la wave pour crash à minute 5 pour atteindre le 6 ensemble.

## Power spikes & conditions de victoire

- **Niveau 2 (avec E + W) :** Première fenêtre de trade. Place **E** à travers la wave pour chunk l'ADC adverse ; s'ils shove vers toi, **W** sous tour pour le sustain.
- **Niveau 6 (premier Crowstorm) :** Ton seul vrai spike de lane. Pose un Stealth Ward (le ward blanc gratuit du trinket avec lequel chaque champion commence) dans le tri-bush (le triangle de buissons entre la rivière bot et la botlane) 30s avant, positionne-toi dedans, puis blink sur l'ADC adverse. Un R + E + follow-up de l'ADC propre est un kill garanti.
- **![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) Imperial Mandate en ligne (~ minute 14-16) :** Le proc de dégâts du slow spike. Cherche les flanks cross-map pour les Drake fights — l'or que tu partages avec l'ADC depuis les procs de Mandate accélère tout le bot side.
- **Niveau 11 + ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) Zhonya's Hourglass (~ minute 22) :** Ton second point en R baisse le cooldown et la stasis te couvre post-engage. Force les teamfights sur Drake ou Baron depuis un setup en fog.

## Erreurs courantes

- **Engage sans follow-up de l'ADC.** Un Crowstorm en solo tag les ennemis mais ne kill personne si ton ADC back-recall. Check la map et le mana de l'ADC avant d'appuyer R ; s'il n'a ni ult ni mana, garde l'engage pour une meilleure fenêtre.
- **Rester devant la wave aux niveaux 1-3.** Pas de bouclier ni d'escape avant 6. Reste derrière l'ADC et la ligne de minions ; laisse-le last-hit, planque-toi dans le buisson en attendant un fear d'effigie au tri-bush pour setup le trade.
- **Gaspiller les effigies dans les buissons de lane.** Les effigies valent plus quand elles donnent de la vision que l'adversaire ne paye *pas* pour. Pose-les au tri-bush ou en pixel bush pour le setup d'engage, pas dans les buissons évidents de la botlane qui sont nettoyés au premier sweep du support adverse.
- **Engage sur un Black Shield non consommé (Morgana).** Une Morgana avec Black Shield up transforme ton spike niveau 6 en ult gaspillé. Engage toujours sur l'ADC, pas sur Morgana, et force-la à pre-shield en feignant un walk-in dans le buisson 2 secondes avant de commit.

## Conseil avancé

Le channel de 1.5s de **Crowstorm** est interruptible par tout ce qui te déplace ou stun, mais le channel lui-même ne brise pas le stealth du buisson — ce qui veut dire que tu peux appuyer **R** en étant encore dans le tri-bush, et l'adversaire ne verra la barre du channel qu'une fraction de seconde avant que le blink atterrisse. Entraîne ça en normals : attends que l'ADC adverse over-extend pour un CS, appuie R depuis le tri-bush, blink sur sa face. Le cue audio (le rire iconique de Fiddle) est le seul avertissement qu'ils reçoivent, et le temps qu'ils réagissent l'AOE tick déjà.
