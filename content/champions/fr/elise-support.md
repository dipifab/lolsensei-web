---
title: "Elise Support Build & Guide — Patch 16.9"
slug: "elise-support"
language: "fr"
patch: "16.9"
champion: "elise"
role: "support"
last_updated: "2026-05-02"
description: "Guide Elise support pour League of Legends Patch 16.9 : angles d'engage en Cocoon, build path via Bloodsong, matchups clés, power spikes et un conseil final."
quick_learn:
  champion_dd_id: "Elise"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Burst Mage / Engage"
  abilities:
    - key: "P"
      name: "Spider Queen"
      description: "Deux formes. Human : chaque ability qui touche stocke un Spiderling dormant. Spider : les AA infligent des dégâts magiques bonus et soignent Elise."
      dd_spell_id: "Elise_Passive"
    - key: "Q"
      name: "Neurotoxin / Venomous Bite"
      description: "Human : poke ciblé qui scale sur les HP actuels (anti-tank). Spider : bond qui scale sur les HP manquants (exécute les cibles à bas HP)."
      dd_spell_id: "EliseHumanQ"
    - key: "W"
      name: "Volatile Spiderling / Skittering Frenzy"
      description: "Human : envoie un Spiderling qui avance et explose près des ennemis (slow + dégâts AOE). Spider : Elise et ses pets gagnent attack speed pour DPS soutenu."
      dd_spell_id: "EliseHumanW"
    - key: "E"
      name: "Cocoon / Rappel"
      description: "Human : skillshot linéaire qui stun le premier ennemi touché. Ton outil d'engage. Spider : Rappel — élévation courte intargetable, puis chute avec bonus damage."
      dd_spell_id: "EliseHumanE"
    - key: "R"
      name: "Spider Form"
      description: "Toggle ultime alternant Human (caster à distance) et Spider (skirmisher melee avec movement speed et essaim de Spiderlings). Switch gratuit sans cooldown."
      dd_spell_id: "EliseR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "E" }
    - { level: 9, key: "Q" }
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
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
  situational_items:
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contre CC magique single-target (Ahri charm, Lissandra R) — le spell shield bloque un engage et te laisse re-cocooner"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contre hard CC lourd (stuns, knock-ups) — bottes avec tenacity (réduit la durée des CC)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contre comps avec burst AOE (Yasuo + Malphite, wombo Orianna) — l'active shield toute l'équipe"
    - dd_id: "3041"
      name: "Mejai's Soulstealer"
      against: "à acheter avec 10+ kills/assists d'avance et zéro mort — convertit le snowball en pure AP"
  base_combo: ["E", "W", "Q", "R", "Q"]
  win_condition: "Engage avec E cocoon depuis le fog of war pour ouvrir l'all-in de l'ADC. Reste pertinente en late en stunant le carry adverse dans la fenêtre d'Aftershock et de Liandry's Torment."
  weakness: "Tout repose sur landing le cocoon : un skillshot manqué te laisse en melee range sans escape. Outranged par les hook supports qui te grab avant que tu cast."
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
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primaire : Aftershock se déclenche sur le stun de cocoon avec armor + MR plus une onde AOE retardée — la fenêtre de survie après l'engage en melee. Font of Life soigne l'ADC à chaque cocoon, Bone Plating amortit les all-ins early, Revitalize amplifie heal/shield."
    secondary_rationale: "Sorcery secondaire : Manaflow Band stabilise le mana en lane (cocoon coûte 50-90 mana par cast), Transcendence pousse l'Ability Haste au-delà de 40% pour que cocoon revienne plus vite en fight prolongé."
    secondary_alternative: "Contre lanes de poke ou all-in lourd (Lucian + Nami, Draven + Thresh), swap Sorcery pour Inspiration avec Magical Footwear (8304, bottes gratuites minute 10) et Cosmic Insight (8347, réduit le CD des summoner spells); l'uptime Flash en plus te sauve des engages ratés."
matchup_draft:
  pick_into:
    - examples: ["soraka", "lulu", "karma"]
      archetype: "Enchanter supports squishy sans tenacity"
      reason: "Le long stun du cocoon ignore leur kit d'utility. Pas d'escape de type Flash, et le burn de Liandry's Torment (dégâts étalés sur quelques secondes) punit leurs shields et heals."
    - examples: ["senna", "caitlyn", "ashe"]
      archetype: "Carrys ranged immobiles sans dash"
      reason: "Cocoon depuis un buisson les chope plantés. Une fois stun, au niveau 3 W (slow) + Q (anti-HP) + le burst de l'ADC kill avant que Flash ne réponde."
    - examples: ["draven", "samira"]
      archetype: "Carrys agressifs qui avancent pour les kills"
      reason: "Leur pression de kill les force à dépasser l'équilibre de wave (la safe lane line). Cocoon punit le pas en avant, Aftershock retourne leur all-in (commit total) en ta faveur."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "Hook supports qui outrangent cocoon"
      reason: "Le hook de Blitzcrank (~1100) dépasse la cast range de E (1075). Ils engagent en premier sur toi, supprimant ton outil d'engage et te laissant melee en Spider form sans escape."
    - examples: ["sivir", "morgana"]
      archetype: "Spell shields qui bloquent cocoon"
      reason: "Une seule charge de Spell Shield mange tout ton stun. Sans cocoon pas de setup, et le follow-up de l'équipe stalle jusqu'au retour du cooldown."
    - examples: ["leona", "nautilus", "rell"]
      archetype: "Engage supports tanky avec CC point-and-click"
      reason: "Leur engage est ciblé (pas de skillshot à dodge). Ils restent collés à ton ADC plus longtemps que tu ne peux les tenir, et ton magic damage ne les tue pas à travers leur armor."
---

## Aperçu

> **Mini-glossaire (à lire une fois) :** **ADC** = Attack Damage Carry, le bot-laner qui inflige des dégâts physiques (Caitlyn, Jinx). **AP** = Ability Power, la stat qui scale les sorts magiques. **MR** = Magic Resist, défense contre la magie. **CS** = Creep Score, nombre de minions tués. **CC** = Crowd Control, tout effet qui stoppe un champion (stun, slow). **Engage** = lancer le fight. **Disengage** = rompre le fight. **Trade** = bref échange de dégâts. **All-in** = commit total. **Peel** = protéger ton carry. **Kite** = reculer en attaquant.

Elise support est un hybride engage-mage : elle pose **Cocoon (E)** depuis un buisson ou le fog of war (zone de la map non wardée) pour root le carry adverse, puis commit avec **Spider Form (R)** pour le follow-up damage et le disengage intargetable via **Rappel**. Elle troque la sécurité de l'enchanter contre de la kill pressure pure — chaque cocoon réussi entre niveaux 3 et 6 doit produire un kill ou un Flash brûlé. Sa weakness est l'envers de sa force : sans cocoon posé, pas d'engage et pas de heals pour se rabattre.

Le game plan est de bully bot lane les 6 premiers niveaux, fermer Bloodsong et **Sorcerer's Shoes** entre la minute 12-14, puis roam mid avec le boost de movement speed de **Spider Form**. En late game, le job change : elle devient une flank assassin qui attend que le carry adverse sorte de position, lance cocoon depuis un angle latéral et laisse l'équipe finir.

## Build Recommandé

**Items de départ :** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (item de support quest : te donne du gold support tant que tu ne fais pas toi-même les last-hits) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**.

**Items core (dans l'ordre) :**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — upgrade final de la support quest (World Atlas → Runic Compass → Bounty of Worlds → Bloodsong). La variante AP : chaque quatrième AA contre un champion inflige des dégâts magiques bonus. Synergie naturelle avec les autos rapides de Spider form en dive.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plat. Crucial parce qu'en support tu as moins de gold que le mid laner, donc la pen est plus efficiente que le pure AP en early.
3. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — premier gros AP item. Le burn HP-based (dégâts qui scalent sur les HP max de la cible, étalés sur quelques secondes) punit les frontlines tanky qui essaient d'absorber ton cocoon stun.
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — chaque ability slow. Transforme **W** en outil de chase et stack avec le cocoon stun pour la fiabilité du follow-up.
5. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — item de survie. Après l'engage en melee range, l'active te donne 2.5 secondes de stasis (impossible de bouger, prendre des dégâts ou être ciblée), le temps que l'équipe nettoie.

**Items situationnels :**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contre CC magique single-target (Ahri charm, Lissandra R).
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — boots swap quand l'équipe adverse a du hard CC lourd.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contre comps avec AOE burst (combo Yasuo + Malphite, wombo Orianna).
- ![Mejai's Soulstealer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3041.png) **Mejai's Soulstealer** — uniquement avec 10+ kills/assists d'avance et zéro mort. Le risque de perdre les stacks est réel ; ne le prends pas si tu es en retard.

**Bottes :** Sorcerer's Shoes par défaut. Mercury's Treads si l'équipe adverse a trois sources ou plus de hard CC (stuns, knock-ups).

**Skill order :** Maxe **E** en premier (le stun de cocoon est ton job), **Q** en second (damage), **W** en dernier. Mets un point dans **R** aux niveaux 6, 11, 16.

**Runes :** Primaire **Resolve** avec **Aftershock**, **Font of Life**, **Bone Plating**, **Revitalize**. Secondaire **Sorcery** avec **Manaflow Band** et **Transcendence**.

## Matchups clés

- **Blitzcrank :** Pire matchup de lane. Sa Q outrange ta E d'environ 25 unités. Reste derrière ton ADC, ne fais jamais un pas en avant pour lancer cocoon — il te hook au moment où tu commit.
- **Thresh :** Hook duel survivable mais rarement gagnable. Attends qu'il lance et rate sa Q, puis avance pour landing cocoon dans la recovery window. Évite d'entrer dans l'arc de la lantern quand il engage sur ton ADC.
- **Soraka :** Lane gratuite. Son silence est à courte portée et son heal est interruptible par cocoon. Engage au niveau 3 mana plein ; le trade brûle sa barre de HP plus vite qu'elle ne la heal.
- **Leona :** Gagne l'all-in mais perd la guerre de poke. Reste à max range de cocoon, lance E pour interrompre l'animation de sa **W** (Eclipse), puis recule. Ne commit pas sans landing cocoon en premier.
- **Sivir :** Sa **E** (Spell Shield) bloque entièrement le cocoon. Bait le shield en lançant la **W** spiderling d'abord ; une fois qu'elle shield la W, ton cocoon arrive propre pendant tout le cooldown du shield (~12 secondes).

## Power spikes & conditions de victoire

- **Niveau 2 :** Avec **E** + **Q**, tu as un setup d'all-in. Force le niveau 2 contre les supports melee et engage sur le premier cocoon qui land.
- **Niveau 6 :** Premier **Spider Form (R)**. Le potentiel de disengage et re-engage double ; tu peux dive un ennemi à bas HP sous tour avec Rappel comme outil de re-positioning.
- ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minute 13-15) :** Roam window. Va mid pour un 3v2 si ta wave est poussée sous la tour adverse. Le snipe mid avec **Cocoon (E)** + finition **Spider Q** kill quasi tous les mid laners squishy.
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment online (~ minute 18-20) :** Prête pour les teamfights. Ton job devient flanker la backline depuis les buissons latéraux ; landing cocoon sur l'ADC adverse, **Aftershock** se déclenche sur le stun, l'équipe nettoie.

## Erreurs courantes

- **Lancer E cocoon en poke.** Même règle qu'Elise jungle : cocoon c'est de l'engage, pas du harass. Attends que le carry avance ; un cocoon raté te laisse 12 secondes sans défense.
- **Auto les minions en lane.** Les items support punissent le CS minion — les last-hits annulent le gold income du World Atlas et affament ton ADC. Utilise **W** sur la wave seulement quand la wave suivante revient.
- **Engager sans follow-up de l'ADC.** Glance la barre de mana et les cooldowns de l'ADC avant de tirer le cocoon. Sans mana ou sans **Flash**, n'engage pas ; tu vas trade 1 pour 1 au mieux.
- **Oublier d'acheter des ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) wards à chaque retour.** En tant que support, c'est toi qui poses la vision sur la map. Les wards dans les buissons de la river contrôlent les angles d'engage de ton jungler. Utilise ![Oracle Lens](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3364.png) Oracle Lens pour sweep les wards adverses cachés avant les objectifs.
- **Dive avec R sans escape disponible.** Spider form n'a pas d'escape intégré. Si **Flash** et **Rappel** sont down, ne commit pas à un dive sous tour ; l'ADC adverse va te kite (reculer en attaquant) jusqu'à ce que la tour te tue.

## Conseil avancé

Prépare les angles de cocoon avec la vision avant le début du fight. Une ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) **Stealth Ward** posée dans le buisson latéral te donne un engage angle gratuit : entre dans le buisson depuis le fog, lance cocoon pendant que l'ADC adverse avance pour last-hit, puis **Spider R** + Rappel drop. Toute la séquence est invisible côté ennemi jusqu'au landing du cocoon. C'est la jouée la plus impactante qu'Elise support peut faire, et la plupart des joueurs en bas elo l'ignorent parce qu'ils engagent direct depuis lane au lieu d'angles préparés.
