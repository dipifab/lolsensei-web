---
title: "Dr. Mundo Top Build & Guide — Patch 16.9"
slug: "dr-mundo-top"
language: "fr"
patch: "16.9"
champion: "dr-mundo"
role: "top"
last_updated: "2026-05-02"
description: "Guide Dr. Mundo top pour League of Legends Patch 16.9 : build juggernaut HP-stacking avec Heartsteel, survie en lane, matchups clés, power spikes et erreurs courantes."
quick_learn:
  champion_dd_id: "DrMundo"
  difficulty: 2
  damage_type: "mixed"
  champion_class: "Tank / Juggernaut"
  abilities:
    - key: "P"
      name: "Goes Where He Pleases"
      description: "Le premier hard CC (un stun, root ou knockup qui t'immobilise) ne coûte que des HP à Mundo et fait tomber une fiole ; ramasse-la pour te soigner et reset le passif. Donne aussi une grosse régén HP."
      dd_spell_id: "DrMundo_Passive"
    - key: "Q"
      name: "Infected Bonesaw"
      description: "Skillshot linéaire longue portée : dégâts magiques en pourcentage des HP actuels de la cible plus slow. Coûte des HP, pas de mana — ta barre de ressource, c'est ta vie. Outil principal de poke et waveclear."
      dd_spell_id: "DrMundoQ"
    - key: "W"
      name: "Heart Zapper"
      description: "Channel sur soi qui tick des dégâts magiques aux ennemis proches et stocke une partie des dégâts subis. Recast (ou fin du channel) libère un burst : si ça touche un champion, tu te soignes d'un pourcentage des dégâts stockés."
      dd_spell_id: "DrMundoW"
    - key: "E"
      name: "Blunt Force Trauma"
      description: "Passif : bonus AD qui scale avec les HP max. Actif : frappe melee infligeant des dégâts extra basés sur tes HP manquants. Si elle tue, le corps est projeté et touche les ennemis sur sa trajectoire."
      dd_spell_id: "DrMundoE"
    - key: "R"
      name: "Maximum Dosage"
      description: "Self-cast : soin instantané d'un pourcentage des HP manquants, puis bonus Move Speed et énorme régén HP pendant la durée. Active-la avant les fights et avant de mourir, jamais après."
      dd_spell_id: "DrMundoR"
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
    - { dd_id: "3084", name: "Heartsteel" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3083", name: "Warmog's Armor" }
    - { dd_id: "3065", name: "Spirit Visage" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap depuis Plated Steelcaps contre 3+ sources de CC ou 2+ menaces AP ; tenacity réduit la durée des stuns"
    - dd_id: "3075"
      name: "Thornmail"
      against: "contre carries auto-attack (Vayne, Tryndamere, Master Yi) ; reflète les dégâts et applique Grievous Wounds (-50% heal) on hit"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "contre comps poke AP lourdes avec 2+ mages ranged (Brand + Karthus, Ziggs + Xerath) ; MR + Move Speed contre magic damage"
    - dd_id: "6664"
      name: "Hollow Radiance"
      against: "contre AP wave-clearers groupés (Karthus, Brand, Anivia) ; l'aura de magic burn punit ceux qui combattent près de toi"
    - dd_id: "2504"
      name: "Kaenic Rookern"
      against: "contre burst AP single-target (Syndra, Veigar, LeBlanc) ; le spellshield bloque l'ouverture de leur combo"
  base_combo: ["Q", "W", "E", "AA"]
  win_condition: "Survis à la lane avec le poke Q et le sustain W, atteins Heartsteel et Warmog's, puis avance dans la back line ennemie à régén max et refuse de mourir assez longtemps pour que ton équipe nettoie."
  weakness: "Aucun hard CC, aucun dash. Les tops ranged kitent ta Q hors des 975 de portée ; les items de healing-cut coupent W et R, transformant le tank en minion qui marche lentement."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8275, name: "Nimbus Cloak", icon_path: "perk-images/Styles/Sorcery/NimbusCloak/6361.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Health Scaling"
      - "Health Scaling"
    primary_rationale: "Resolve : Grasp donne des HP gratuits toutes les 4s en lane combat et scale avec la pile de HP de Mundo. Bone Plating mange le burst des bruisers, Conditioning ajoute Armor et MR après la 12e min, Overgrowth convertit les minions en HP permanents."
    secondary_rationale: "Sorcery secondary : Nimbus Cloak donne un burst de Move Speed après Flash ou Ghost (tes Summoners d'engage), et Gathering Storm ajoute de l'Adaptive toutes les 10 min — exactement le scaling tardif que veut la win condition de Mundo."
    secondary_alternative: "Contre lane bullies early (Darius, Riven), swap Sorcery vers Inspiration avec Biscuit Delivery (Health Potions gratuites toutes les 2 min pré-12) et Cosmic Insight (cooldowns Summoners réduits), troc scaling contre survie."
matchup_draft:
  pick_into:
    - examples: ["sett", "aatrox", "mordekaiser"]
      archetype: "Bruisers melee sans poke ranged"
      reason: "La Q de Mundo est un slow de 975 de portée qui coûte des HP, pas de mana, donc il chip chaque wave hors de leur portée d'auto-attack. Ils doivent marcher jusqu'à lui pour faire des dégâts, et l'aura W plus le healing de Spirit Visage gagnent chaque trade prolongé."
    - examples: ["zed", "talon", "katarina"]
      archetype: "Assassins basés sur une seule fenêtre de burst"
      reason: "Tout leur profil de dégâts tient dans une combo. Le passif de Mundo mange leur premier hard CC, sa R soigne instantanément un pourcentage des HP manquants, et la W rembourse une partie des dégâts subis pendant le burst — ils brûlent leurs cooldowns et Mundo repart presque full."
    - examples: ["yasuo", "yone", "tryndamere"]
      archetype: "Auto-attackers melee qui doivent stick"
      reason: "Le slow de Q plus Plated Steelcaps cripple leur attack uptime. La R de Tryndamere lui donne une rotation de heal, mais un Mundo avec R et Thornmail tient au-delà de la fenêtre d'immortalité et le chunk avec le damage reflect."
  counterpicks:
    - examples: ["vayne", "teemo", "quinn"]
      archetype: "Tops ranged avec percent-HP ou blind"
      reason: "La W de Vayne (true damage tous les 3 autos, ignore toutes les défensives) et la Q de Teemo (un blind qui annule ses auto-attacks) bypass la pile de HP entière. Quinn avec sa portée plus son blind passif tient Mundo en permanence hors de la portée Q."
    - examples: ["fiora"]
      archetype: "Duellistes true damage"
      reason: "Les Vitals de Fiora infligent des true damage (dégâts qui ignorent armor et magic resist — aucune défensive ne les réduit). Stack des HP ne sert à rien contre du true damage ; elle le détruit en un seul duel même full build."
    - examples: ["trundle"]
      archetype: "Champions anti-tank qui volent les stats"
      reason: "La R de Trundle vole l'Armor, la MR et le Move Speed de Mundo pendant 8 secondes. Le true damage du passif E (basé sur le bonus AD par HP) s'éteint et sa seule escape (le speed boost de R) est aussi volée. Tout le profil tank est neutralisé."
---

## Aperçu

Dr. Mundo est un **juggernaut tank** (un champion melee lent, immobile, qui frappe fort une fois quelques items en poche, avec d'énormes HP et régén HP). Son identité tient sur trois choses : stack des HP via **Heartsteel** (chaque champion touché en auto-attack ajoute des HP permanents à l'item), régén HP de la **R** plus le healing-amp de Spirit Visage, et appuyer sur **Q** à chaque cooldown pour chip l'ennemi à 975 de portée. Le **passif** est la mécanique la plus importante à comprendre : le premier hard CC (un stun, root ou knockup qui t'immobilise) reçu est réduit — il coûte des HP au lieu de te lock, et tu fais tomber une fiole que tu peux ramasser pour te soigner. Concrètement un Sett ou un Malphite n'a qu'une seule chance de te lock, et après tu marches à travers leur équipe pendant les 8 à 10 secondes qui suivent.

Le game plan, c'est "ne jamais mourir". En lane, **freeze la wave** (laisse-la juste devant ta tour pour que le laner ennemi doive marcher loin de la sienne pour last-hit) et farme Q à portée max. À partir de la 14e minute, **Heartsteel** plus **Warmog's Armor** dépassent le seuil où tu as tellement de HP et de régén que l'équipe ennemie a besoin d'items healing-cut juste pour te faire mal. À partir de là, chaque fight commence par toi qui avances lentement, mange le premier stun, lance R, et reste sur la back line (les carries squishy qui font des dégâts derrière les tanks de leur équipe) jusqu'à la mort du carry. C'est ça "absorber l'engage" : quand l'ennemi commit l'engage avec un stun ou un dash, ton boulot, c'est d'être celui qui se prend le stun.

## Build Recommandé

**Starting items :** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Le passif HP-regen de Doran's Shield amortit le poke ennemi (dégâts ranged peu coûteux qui chip ta vie sans commit dans un fight) et c'est le bon choix dans presque tous les matchups Mundo, melee inclus — le game plan est "reste vivant, farm, scale", pas "gagne le niveau 1".

**Core items (dans l'ordre) :**

1. ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** — ton item identitaire. Chaque auto-attack sur un champion charge Heartsteel ; au proc tu fais des dégâts bonus massifs et l'item gagne des HP permanents qui s'accumulent. Pas de plafond sur la pile de HP, raison pour laquelle un Mundo top one-shot les squishy à la 35e minute avec une seule E. Achète-le chaque game, premier item.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots par défaut quand la source principale de dégâts ennemis est de l'auto-attack. Réduit ces dégâts pendant les fights prolongés.
3. ![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) **Warmog's Armor** — débloque le passif "out-of-combat heal to full en 4 secondes" une fois le seuil HP franchi (autour de 3000 HP bonus, atteint par Heartsteel + composants Warmog's). C'est le breakpoint où les skirmishes en side lane (petits fights 1-3 joueurs) se soignent complètement entre deux waves.
4. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — magic resist plus un passif healing-amp qui boost le burst-heal de **W**, la régén de **R**, les heals des supports type Soraka ou Yuumi et les ticks de Doran's Shield. Achète-le en 4e contre toute équipe avec au moins une menace AP.
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — ton premier auto-attack sur un champion en fight crit et te soigne d'une grosse part de HP. Se combine parfaitement avec la fenêtre lifeline créée par ton passif et donne un petit spike de burst pour menacer des kills, pas seulement de la survie.

**Situational items :**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap depuis ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** quand l'équipe ennemie a 3+ sources de CC ou 2+ champions AP. La tenacity (statistique qui réduit la durée des stuns et slows) est la seule défense qui compte une fois le premier-CC du passif consommé.
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — contre carries auto-attack (Vayne, Tryndamere, Master Yi). Reflète les dégâts et applique **Grievous Wounds** (un debuff qui coupe le healing de la cible de moitié) on hit, le seul moyen de ralentir un Tryndamere ou une Vayne fed dans son healing.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — contre comps poke AP lourdes (Brand + Karthus, Ziggs + Xerath, Vel'Koz mid). Stack de la magic resist quand tu prends du magic damage et donne du Move Speed, deux choses que Mundo veut.
- ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — contre AP wave-clearers groupés (Karthus, Brand, Anivia). L'aura de magic burn tick des dégâts sur quiconque combat près de toi et donne de la MR.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — contre burst AP single-target (Syndra, Veigar, LeBlanc). Le spellshield (barrière à usage unique qui bloque la prochaine ability dirigée sur toi) annule l'opener de leur combo et se reset après quelques secondes hors combat.

**Boots :** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** est le défaut. Switch vers ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contre les chaînes de CC lourdes ou les compositions AP-heavy.

**Skill order :** Max **Q** en premier (portée, slow, dégâts percent-current-HP scalent par rang — c'est ton seul outil ranged). Max **E** en second (l'actif missing-HP scale dur avec le bonus AD, et les stacks Heartsteel l'alimentent). Max **W** en dernier ; un point early suffit pour le heal-on-recast et l'aura. Prends **R** aux niveaux 6, 11, 16.

**Runes :** Primary **Resolve** avec **Grasp of the Undying** — toutes les 4 secondes en lane combat, ton prochain auto-attack sur un champion inflige des dégâts magiques bonus, te soigne et te donne des HP permanents. À combiner avec **Bone Plating** (réduction de dégâts sur les 3 prochains hits après avoir pris des dégâts), **Conditioning** (Armor et MR extra après la 12e min) et **Overgrowth** (HP scaling avec la mort des minions proches — parfait pour un farmer de lane). Secondary **Sorcery** avec **Nimbus Cloak** (burst de Move Speed après Flash ou Ghost, deux Summoners habituels sur Mundo) et **Gathering Storm** (Adaptive scaling toutes les 10 min). Stat shards : **Adaptive Force** + **Health Scaling** + **Health Scaling** — des HP partout, parce que chaque stat défensive sur Mundo se traduit par plus d'HP effectifs sur le même stack Heartsteel.

## Matchups clés

- **Darius :** Matchup early difficile. Son saignement Hemorrhage (un stack damage-over-time qui monte plus il te touche) tick à travers ta régén HP et son pull annule le wind-up de ta Q. **Freeze la wave** près de ta tour, prends ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** et accepte de perdre des CS — une fois que tu as ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** plus les composants Warmog's, tu l'out-scale chaque minute après la 14e.
- **Sett :** Matchup favorable. Garde ton **passif** pour sa W (le 3e auto-attack stun) — tu le manges en HP et tu repars. Trade en Q à 975 de portée ; il n'a pas de réponse au poke à longue portée et son self-heal ne suit pas le chip de ta Q.
- **Vayne / Teemo :** La lane la plus dure possible. Ils restent hors portée Q et utilisent du **true damage** (dégâts qui ignorent armor et magic resist — aucune défensive ne les réduit) ou un blind qui annule tes auto-attacks. Prends ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, freeze sous tour, et appelle ton jungler dès qu'ils overextendent (push au-delà de la river sans vision). Achète ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** rush au lieu de Spirit Visage si Vayne snowball.
- **Fiora :** Matchup melee le plus dur. Sa **W** est un parry (un bouclier bref qui bloque et contre la prochaine ability — bait-le avec un auto-attack avant de commit Q ou E). Ses Vitals infligent du true damage, donc stack des HP ne sert à rien ici. Rush ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** plus les composants ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** et joue pour les ganks du jungler.
- **Mordekaiser :** Skill matchup. Sa R t'isole dans un realm 1v1 pendant 7 secondes, sans escape. S'il te R avant que ton passif ne déclenche, tu es stuck et tu meurs. Si tu as **R** prête et passif up, tu survis — la fenêtre de 7s du realm correspond grosso modo à la durée d'une R. Garde **Flash** pour te reposition hors de sa Q grab pendant le realm.

## Power spikes & conditions de victoire

- **Niveau 6 :** Première **Maximum Dosage**. Même au niveau 6 sans items, le heal instantané de R plus le Move Speed transforment un trade perdant en survie ou kill. Cherche un **all-in** (commit total à la kill, sans fallback) dès que ton jungler montre top side et que le laner ennemi est sous 60% HP.
- **![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) Heartsteel complet (~ minute 13-15) :** Le premier vrai spike. Chaque proc réussi sur un champion en lane te donne des HP permanents qui ne disparaissent jamais, même à la mort. Push la wave dès Heartsteel online et trade des autos à travers les minions ennemis pour bank des stacks.
- **![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) Warmog's Armor + stacks Heartsteel (~ minute 18-22) :** Le breakpoint où Mundo devient unkillable en side lane. La régén out-of-combat s'enclenche au nouveau seuil HP ; tu peux prendre un fight à 50% HP, marcher jusqu'à la wave suivante, et arriver full HP.
- **3-item spike avec ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) Spirit Visage (~ minute 24-28) :** Pic de teamfight. Le healing-amp boost chaque tick de régén — la R passe de "correcte" à "impossible de descendre ce mec sous la moitié de ses HP". Force chaque Drake et Baron ici ; l'équipe a besoin que tu rentres en premier pour absorber l'engage.

## Erreurs courantes

- **Activer R après avoir pris des dégâts.** Le heal instantané de R est un pourcentage des HP *manquants*, mais la régén-over-time est gâchée si tu la trigger à 90% HP. Utilise R **avant** de commit dans un fight, pas après — tu veux entrer dans le fight avec la régén déjà active, pour que la fenêtre de burst soit bufferée, pas pansée a posteriori.
- **Lancer Q full HP sur un ennemi en pleine forme.** La Q coûte des HP et inflige des dégâts percent-current-HP. Lui balancer dessus à 100% HP quand toi-même tu es à 100% HP, c'est juste échanger ta vie contre un petit chip — tu perds le trade. Utilise Q après qu'un ennemi melee ait perdu des HP sur les minions ou après un CC allié qui ouvre l'all-in.
- **Ramasser la fiole du passif trop tard.** La fiole chimique (le flacon vert qui tombe au proc du passif) reste au sol quelques secondes avant de disparaître. Si tu la laisses expirer, tu as gâché tout le passif — pas de heal, pas de reset cooldown. Marche dessus à la seconde où elle tombe, même en plein fight.
- **Build full tank sans Spirit Visage.** Chaque stat défensive sur Mundo se compose avec le healing-amp. Sans Spirit Visage, R heal moins, W heal moins, Soraka alliée heal moins. Un Mundo full-tank sans healing-amp est un minion qui marche lentement ; avec Spirit Visage, les mêmes items étirent ses HP effectifs bien plus loin.
- **Rester avec W toggle hors combat.** **Heart Zapper** drain des HP chaque seconde pendant le channel. Si tu l'enclenches pour le clear et tu oublies, tu arrives au fight déjà à 70% HP. Recast avant la fin du channel, à chaque fois.

## Conseil avancé

Travaille le **passive bait** dans les skirmishes en side lane (combats 1v1 en top ou bot pendant que le reste de la map combat ailleurs). Quand le diver ennemi n'a qu'un seul hard CC dispo — disons la W stun de Sett ou le stun de Renekton — avance dans sa lane visiblement low HP. Il brûle son CC pour commit, ton passif le mange gratuitement, et tu lui sors R-Q-E-AA sous tes propres minions pendant qu'il n'a plus rien. Le truc, c'est *visiblement* low HP : reste à découvert à 35-40%, prends quelques autos pour confirmer que l'ennemi commit, puis fonce dans le trade. Un Mundo avec passif et R off cooldown et 50%+ HP derrière les lignes ennemies est une des plus grosses menaces 1v1 du jeu ; le bait est ce qui crée le scénario.
