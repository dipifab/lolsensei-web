---
title: "Dr. Mundo Jungle Build & Guide — Patch 16.9"
slug: "dr-mundo-jungle"
language: "fr"
patch: "16.9"
champion: "dr-mundo"
role: "jungle"
last_updated: "2026-05-02"
description: "Guide Dr. Mundo jungle pour LoL Patch 16.9 : chemin de jungle avec pet Mosstomper, build tank HP-stacking, timings de gank, matchups clés, power spikes et erreurs courantes."
quick_learn:
  champion_dd_id: "DrMundo"
  difficulty: 2
  damage_type: "mixed"
  champion_class: "Tank / Bruiser Jungler"
  abilities:
    - key: "P"
      name: "Goes Where He Pleases"
      description: "Le premier hard CC (stun, root ou knockup qui t'immobilise) est absorbé : Mundo paie en HP au lieu de subir l'effet et drop une fiole ; la ramasser heal et reset le passif. Donne aussi une grosse régen."
      dd_spell_id: "DrMundo_Passive"
    - key: "Q"
      name: "Infected Bonesaw"
      description: "Skillshot linéaire longue portée infligeant des dégâts magiques en pourcentage des HP actuels de la cible et la ralentit. Coûte des HP, pas du mana — ta barre de ressource est ta vie. Outil de gank pré-6 depuis 975 de portée."
      dd_spell_id: "DrMundoQ"
    - key: "W"
      name: "Heart Zapper"
      description: "Channel sur Mundo qui tick des dégâts magiques aux ennemis proches et stocke une partie des dégâts subis. Recast pour une rafale : si elle touche un champion, tu heal un % des dégâts stockés. Activé dans les camps pour le sustain."
      dd_spell_id: "DrMundoW"
    - key: "E"
      name: "Blunt Force Trauma"
      description: "Passif : bonus AD scalant avec les HP max. Actif : coup melee infligeant des dégâts extra basés sur les HP manquants. S'il tue, projette le corps sur les ennemis dans la trajectoire. Ton spike single-target en gank."
      dd_spell_id: "DrMundoE"
    - key: "R"
      name: "Maximum Dosage"
      description: "Self-cast : heal instantané d'un % des HP manquants, puis bonus Move Speed et grosse régen pendant la durée. À presser avant un gank, avant un fight, avant de mourir — jamais après."
      dd_spell_id: "DrMundoR"
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
    - { dd_id: "1103", name: "Mosstomper Seedling" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3084", name: "Heartsteel" }
    - { dd_id: "3065", name: "Spirit Visage" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap depuis Plated Steelcaps face à 3+ sources de CC ou 2+ menaces AP ; la tenacity sauve une fois le premier CC du passif consommé"
    - dd_id: "3083"
      name: "Warmog's Armor"
      against: "5e ou 6e item dans les games qui passent minute 30+ ; le passif HP-regen heal full entre camps sans rentrer base"
    - dd_id: "3075"
      name: "Thornmail"
      against: "face aux carrys auto-attack (Vayne bot, Tryndamere top, Master Yi jungle) ; reflète les dégâts et applique Grievous Wounds on hit"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "face aux comps AP lourdes avec 2+ mages ranged (Karthus + Brand, Lillia + Lux) ; MR + Move Speed contre les magic damage"
    - dd_id: "2504"
      name: "Kaenic Rookern"
      against: "face au burst AP single-target (Syndra mid, Veigar, LeBlanc) ; le spellshield (barrière à usage unique) annule l'opener de combo"
  base_combo: ["Q", "R", "W", "E", "AA"]
  win_condition: "Full clear jusqu'au niveau 4, gank au 6 dès que R unlock, transforme chaque Drake fight à partir de minute 14 en avantage de HP-regen. Au min 25 avec Heartsteel + Warmog's, marche sur la backline et refuse de mourir."
  weakness: "Clear lent pré-3, invades faibles, kité par les comps ranged sans moyen de coller. Les items healing-cut (qui coupent les soins de moitié) éviscèrent son kit ; face au true damage (Fiora, Vayne fed) le mur d'HP fond."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
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
    primary_rationale: "Resolve primaire : Grasp donne des HP gratuits toutes les 4s en combat champion — un gank de 5s stack 2-3 procs. Font of Life marque les cibles slowed par Q pour que ton laner heal, Conditioning scale Armor/MR après minute 12, Overgrowth convertit les camps en HP permanents."
    secondary_rationale: "Sorcery secondaire : Nimbus Cloak donne un burst de Move Speed après Flash ou Ghost (tes Summoners de gap-close), et Gathering Storm ajoute de l'Adaptive toutes les 10 minutes — la win condition de Mundo, c'est le late game, ces runes collent."
    secondary_alternative: "Face aux junglers early-skirmish (Lee Sin, Elise, Xin Zhao), swap Sorcery pour Inspiration avec Magical Footwear (boots upgrade gratuites minute 10-12) et Cosmic Insight (cooldowns Summoners réduits), troquant le scaling pour du tempo invade-survival."
matchup_draft:
  pick_into:
    - examples: ["kha-zix", "rengar", "evelynn"]
      archetype: "Junglers assassin burst"
      reason: "Tout leur damage profile, c'est une combo sur un squishy. Le passif de Mundo bouffe le CC opener, R heal un % des HP manquants, et W refund une partie du burst. Ils crament leurs cooldowns et Mundo repart presque full en marquant leur carry pour le follow-up."
    - examples: ["karthus", "lillia"]
      archetype: "Junglers AP poke et kite sans hard engage"
      reason: "Force of Nature plus Spirit Visage stack du Magic Resist qui grandit pendant qu'ils pokent. Le Move Speed du R de Mundo plus le slow percent-current-HP du Q finissent par coller au gap, et un seul E collapse leurs HP parce qu'ils n'ont pas d'items défensifs."
    - examples: ["yasuo", "yone", "tryndamere"]
      archetype: "Carrys melee auto-attack sur lesquels l'équipe ennemie compte"
      reason: "Le slow du Q plus Plated Steelcaps paralyse leur attack uptime. Le R de Tryndamere achète une rotation, mais un Mundo avec Thornmail + R survit à la fenêtre d'immortalité et le chunk avec les dégâts reflétés."
  counterpicks:
    - examples: ["fiora", "vayne", "kayle"]
      archetype: "Skirmishers true damage"
      reason: "Les Vital de Fiora, le W de Vayne et la R late-game de Kayle infligent du true damage (dégâts qui ignorent armor et magic resist — aucune stat défensive ne les réduit). Stack des HP ne sert à rien contre le true damage ; toute la build s'effondre."
    - examples: ["trundle", "olaf"]
      archetype: "Junglers anti-tank"
      reason: "Le R de Trundle (Subjugate) vole Armor, MR et Move Speed pendant 8 secondes ; le E de Olaf applique Grievous Wounds et son ult le rend CC-immune donc le passif ne procc pas. Les deux sont conçus pour neutraliser les stats tank."
    - examples: ["xerath", "varus", "nidalee"]
      archetype: "Comps de poke soutenu longue portée"
      reason: "Ils restent au-delà des 975 de Q et chip les HP de Mundo à chaque wave. Mundo n'a pas de dash et un seul burst de Move Speed sur R ; il marche dans leurs dégâts juste pour menacer l'engage et perd 30% HP par rotation sans jamais coller."
---

## Aperçu

Dr. Mundo jungle est le tank jungler le plus simple du jeu : clear les camps, atteindre niveau 6, marcher en lane, et refuser de mourir quoi que l'ennemi t'envoie. Son kit a une seule mission — soak l'engage (le moment où un ennemi commit pour démarrer un fight, généralement avec un hard CC ou un dash) — et il le fait avec trois mécaniques. **Goes Where He Pleases (passif)** absorbe le premier hard CC (stun, root ou knockup qui t'immobilise) au coût d'HP, drop une fiole que tu peux ramasser pour heal. **Heart Zapper (W)** stocke les dégâts subis pendant un fight et en refund une partie en heal au recast. **Maximum Dosage (R)** heal instantanément un % des HP manquants et donne une grosse régen pendant la durée. Ensemble, elles font de Mundo le champion avec le plus d'HP effectifs en teamfight, avec le compromis qu'il n'a aucun hard CC propre et doit s'appuyer sur les slows de Q et le follow-up de l'équipe.

Le game plan est un farming tempo-aware. Pré-3, le clear de Mundo est lent et les HP perdus dans les camps sont réels — n'invade pas et évite de te faire invade. Full clear jusqu'au niveau 4, contest le Scuttle (le crabe de la rivière qui donne de la vision quand tué), et cherche le premier gank vers minute 4-5 sur une lane avec priority (priority = la lane qui push vers l'ennemi, pour que le laner puisse partir quelques secondes sans perdre de minions). Au niveau 6, chaque R pressé doit se transformer en kill, en objectif, ou en allié sauvé. À partir de minute 14 avec **Heartsteel** plus **Sundered Sky** en ligne, Mundo gagne chaque Drake fight rien qu'avec ses stats.

## Build Recommandé

**Items de départ :** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Hailblade est le starter melee de jungle : il te permet de damage les neutral monsters (les camps que tu farmes en jungle) plus vite et applique un slow bref sur les champions ennemis quand tu les touches en auto-attack. Refillable Potion est un item de healing qui se recharge gratuitement à la base, donc tu économises de l'or sur le chip damage des clears.

**Items core (dans l'ordre) :**

1. ![Mosstomper Seedling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1103.png) **Mosstomper Seedling** — quest upgrade depuis Hailblade (auto-évolue vers minute 3-4 une fois assez d'XP gagnée sur les camps). Le pet companion tank donne Armor et MR extra quand tu es out-of-combat avec les champions, et de la tenacity (durée de stun réduite sur toi) en fight. Pickup obligatoire pour tout tank jungler — l'icône qu'on voit en premier dans la barre quick-learn dit au lecteur quel starter tu as pris.
2. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — premier gros item. Ton premier auto-attack sur un champion en fight crit et te heal. Le crit-heal s'aligne avec ton pattern de gank : tu rentres, Q-slow, auto-crit-heal, E pour le slam missing-HP. Pair avec la régen de R pour les skirmishs prolongés.
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots par défaut quand le damage principal de l'équipe ennemie est en auto-attack. Réduisent ces dégâts entrants pendant les fights longs.
4. ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** — l'item de scaling late-game. Chaque proc réussi sur un champion donne à Mundo des HP permanents qui ne disparaissent jamais, même si tu meurs. À minute 30 tu bank 8-12 procs et tes HP effectifs doublent comparé à une build flat-tank.
5. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — magic resist plus un passif de healing-amp qui boost le burst-heal de **W**, la régen de **R**, et tout heal allié venant d'un support comme Soraka ou Yuumi. Achète-le quatrième ou cinquième selon que l'équipe ennemie a plus d'AP ou d'AD.

**Items situationnels :**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap depuis ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** quand l'équipe ennemie a 3+ sources de CC ou 2+ champions AP. La tenacity (la stat qui réduit la durée des stuns et slows sur toi) est la seule défense qui compte une fois la première CC-immunité du passif consommée.
- ![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) **Warmog's Armor** — cinquième ou sixième item dans les games au-delà de minute 30. Une fois passé le seuil HP (vers 3000 HP bonus), le passif te heal full out-of-combat en 4 secondes, donc tu heal full entre les camps sans recall.
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — face aux carrys auto-attack (Vayne bot, Tryndamere top, Master Yi jungle). Reflète les dégâts et applique **Grievous Wounds** (le debuff qui coupe le healing de la cible de moitié) on hit, le seul counter à un Tryndamere ou Vayne fed qui se heal ce qu'ils prennent de ton aura W.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — face aux comps AP lourdes (Karthus + Brand, Lillia + Lux). Stack du magic resist au fur et à mesure que tu prends des magic damage et donne du Move Speed, deux choses que Mundo veut.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — face au burst AP single-target (Syndra, Veigar, LeBlanc). Le spellshield (une barrière à usage unique qui bloque la prochaine ability dirigée sur toi) annule l'opener de combo et reset après quelques secondes out-of-combat.

**Bottes :** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** par défaut. Switch sur ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** face à des chain-CC lourds ou des compositions AP-heavy.

**Skill order :** Maxe **Q** en premier (range, slow, dégâts percent-current-HP scalent par rank — ton seul outil ranged et ton setup de gank principal). Maxe **E** en deuxième (l'actif missing-HP scale fort avec le bonus AD, et le bonus AD scale avec les HP max). Maxe **W** en dernier ; un point early suffit pour le sustain du clear. Mets **R** aux niveaux 6, 11, 16.

**Runes :** Primaire **Resolve** avec **Grasp of the Undying** — toutes les 4 secondes en combat champion, ton prochain auto-attack inflige des dégâts magiques bonus, te heal et donne des HP permanents. Pair avec **Font of Life** (ton slow de Q marque les cibles pour que ton laner heal en les frappant — parfait pour les ganks), **Conditioning** (Armor et MR extra après minute 12), et **Overgrowth** (HP scaling avec la mort des minions proches). Secondaire **Sorcery** avec **Nimbus Cloak** (burst de Move Speed après Flash ou Ghost) et **Gathering Storm** (Adaptive scaling toutes les 10 minutes). Stat shards : **Adaptive Force** + **Health Scaling** + **Health Scaling**.

## Matchups clés

- **Lee Sin / Elise / Xin Zhao :** Junglers early-game qui invade ton weak side. Track-les avec des vision wards (items posés qui révèlent une petite zone de la map ~90 secondes) sur tes raptors et red buff (camps de ta jungle). Évite les invades 1v1 pré-3 — ton clear est lent et tu n'as pas de Smite damage pour delete instantanément un attempt 1v1. Fais full clear, contest Scuttle, puis commence à gank.
- **Master Yi / Karthus :** Junglers de scaling. Tu match leur scaling presque item par item, mais ils tapent leur power spike avant toi (Yi sur Blade of the Ruined King, un item d'attack speed lifesteal ; Karthus sur Liandry's Torment, l'item AP de burn damage). Force des fights et objectifs (Drake côté bot, Rift Herald côté top — neutral monsters qui donnent des buffs team-wide et de l'or quand tués) avant minute 18 et gank les lanes constamment (un "gank" est une visite surprise du jungler en lane pour scorer une kill) pour leur nier la fenêtre de farm.
- **Trundle :** Hard counter direct. Son R (Subjugate) vole ton Armor, MR et Move Speed pendant 8 secondes — exactement tes trois meilleures stats. Évite les skirmishs solo ; combat-le seulement avec des coéquipiers en follow-up sous 2 secondes. Build ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** pour appliquer Grievous Wounds sur le lifesteal de son Q.
- **Hecarim / Volibear :** Tanks d'engage en miroir. Celui qui place sa CC en premier gagne le trade. Garde ton **passif** pour après qu'ils aient commit (Hecarim E knockback, Volibear Q knockback). Une fois leur premier CC bouffé gratuitement, tu out-sustain dans le follow-up.
- **Kha'Zix / Rengar :** Junglers assassins focus burst. Ils invade des cibles seules en side jungle. Tank leur premier burst avec passif + R, puis E-les une fois qu'ils sont HP-committed — le scaling missing-HP de ton E one-shot un Rengar à 70% HP depuis 30%.

## Power spikes & conditions de victoire

- **Niveau 4 :** Full clear fait, les trois abilities en ligne. Cherche le premier gank sur la lane la plus proche d'un ennemi coincé en push (la lane avec les HP ennemis les plus bas et le plus de minions côté ennemi de mid). Slow de Q depuis 975 de portée plus W qui tick par-dessus est une kill threat crédible même pré-6.
- **Niveau 6 :** Premier **Maximum Dosage**. Le plus gros power swing de la game de Mundo. Trouve un fight dans les 30 secondes après le 6 — gank une lane, contest le second Scuttle, ou setup le premier Drake. Le heal instantané de R transforme un "gank perdu" en échange garanti.
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky terminé (~ minute 12-14) :** Premier vrai spike de damage et sustain. Combattre pour le Drake ou le Rift Herald avec W qui tick et les procs crit-heal de Sundered Sky sur l'engage gagne l'objectif sans cramer R.
- **![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) Heartsteel + ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) Spirit Visage en ligne (~ minute 22-26) :** Pic de teamfight. Le cooldown de R est assez court pour engage deux fois par timer Baron. Force chaque objectif ; c'est ton pic.

## Erreurs courantes

- **Invade avant niveau 3.** Le clear pré-3 de Mundo est parmi les plus lents et Hailblade a très peu de Smite damage. Un Lee Sin ou Elise que tu rencontres à minute 1:30 avec une ability up te out-trade et te met 2 camps derrière. Reste dans ta jungle jusqu'au niveau 4.
- **Presser R après avoir pris des dégâts.** Le heal instantané de R est un % des HP *manquants*, mais la portion regen-over-time est gâchée si tu trigger à 90% HP. Utilise R **avant** de commit à un gank ou à un fight, pas après — tu veux la régen qui tick quand le burst arrive, pas pour panser après.
- **Gank des lanes sans priority.** Un gank dans une wave freeze (une wave posée près de la tour du laner ennemi) est un free kill pour le laner ennemi : sa tour te zone, ton laner doit marcher loin de la sienne pour follow-up. Gank seulement les lanes qui push vers ton côté ou posées au milieu.
- **Ramasser la fiole du passif trop tard.** La fiole chimique (la petite bouteille verte qui drop quand le passif procc) reste au sol quelques secondes avant de despawn. Si tu la laisses expirer en plein gank, tu as gâché tout le passif — pas de heal, pas de cooldown refund. Marche dessus dès qu'elle drop.
- **Build full tank sans Spirit Visage.** Chaque stat défensive de Mundo se compose avec le healing-amp. Sans Spirit Visage, R heal moins, W heal moins, Soraka alliée heal moins. Spirit Visage est l'item multiplicateur ; le skip pour des HP raw, c'est une moins bonne build au même prix.

## Conseil avancé

Travaille le **flank gank** à travers la jungle ennemie (entrer en lane par un côté ou par-derrière, pas par la rivière — le bush derrière le laner ennemi qu'il ne voit pas sans ward). Sur Mundo c'est uniquement puissant à cause du passif : la première ability CC du laner ennemi se fait bouffer gratuitement au moment où tu apparais derrière lui, ce qui veut dire que même une cible à 100% HP qui Flash vers sa tour court direct dans un projectile Q slow depuis 975 de portée et meurt sur E. Le truc, c'est de timer l'entrée par le bush côté rivière ou côté arrière exactement au moment où le laner ennemi push la wave vers ton côté et est loin de sa tour ; le pattern de gank est invisible jusqu'à ce que tu sortes, et le CC raté scelle la kill avant qu'il ne puisse se relever.
