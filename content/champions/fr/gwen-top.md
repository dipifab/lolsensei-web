---
title: "Gwen Top Build & Guide — Patch 16.9"
slug: "gwen-top"
language: "fr"
patch: "16.9"
champion: "gwen"
role: "top"
last_updated: "2026-05-02"
description: "Guide Gwen top lane pour League of Legends Patch 16.9 : starter, build core AP bruiser, matchups clés, power spikes, erreurs courantes et conseil avancé."
quick_learn:
  champion_dd_id: "Gwen"
  difficulty: 2
  damage_type: "magic"
  champion_class: "AP Bruiser / Skirmisher"
  abilities:
    - key: "P"
      name: "A Thousand Cuts"
      description: "Les auto-attacks infligent des dégâts magiques bonus basés sur le HP max de la cible. Gwen soigne une partie des dégâts faits aux champions."
      dd_spell_id: "Gwen_Passive"
    - key: "Q"
      name: "Snip Snip!"
      description: "Coup de ciseaux en cône jusqu'à 6 entailles. Le cône central inflige des true damage et réapplique la passive à chaque entaille — anti-tank."
      dd_spell_id: "GwenQ"
    - key: "W"
      name: "Hallowed Mist"
      description: "Pose une zone de brume de 4 secondes. Les ennemis hors zone ne peuvent pas la cibler — seuls ceux qui entrent dans la brume peuvent. Reset défensif."
      dd_spell_id: "GwenW"
    - key: "E"
      name: "Skip 'n Slash"
      description: "Dash court qui donne attack speed, range d'attaque et on-hit AP pendant quelques secondes. Cooldown remboursé en partie sur champion touché."
      dd_spell_id: "GwenE"
    - key: "R"
      name: "Needlework"
      description: "Lance une volée d'aiguilles qui ralentit et applique la passive. Jusqu'à 2 relances de plus, chaque volée fait plus de dégâts que la précédente."
      dd_spell_id: "GwenR"
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
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contre divers et assassins (Camille, Fiora, Rengar) — la stase de 2.5s couvre le cooldown de W et casse leur burst window"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contre magic CC mono-cible (pool de Vladimir, R de Lissandra, suppression de Malzahar) — le shield bloque une compétence"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "contre matchups de poke ranged (Vayne top, Teemo) — plus d'ability haste et de movement speed pour combler la distance"
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "contre 4+ tank/bruiser adverses — remplace Riftmaker pour un burn pourcentage HP max dès la minute 1 de chaque fight"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "Survis à l'early lane, complète Riftmaker vers la minute 18, puis splitpush en side lane pour forcer 2 ennemis à te stopper. En teamfight, fond la frontline avec le true damage on-hit du Q."
  weakness: "Early faible (peu de burst, pas de waveclear ranged). Hard counter par les top ranged, les outscalers true damage comme Fiora, et les chaînes de CC point-and-click qui bloquent l'activation de W."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision en primaire : Conqueror stack pendant les trades longs Q + auto, donne dégâts adaptatifs et heal. Triumph récompense les multikills, Legend: Alacrity boost la fenêtre on-hit de E, Last Stand ajoute des dégâts à bas HP."
    secondary_rationale: "Resolve en secondaire : Second Wind régénère HP après le harass ranged (clé contre top à distance), Overgrowth scale en HP brut au late game où les fights de Gwen dans la W mist brillent."
    secondary_alternative: "Contre matchups heavy AP sans poke, swap Resolve en Sorcery avec Manaflow Band (sustain mana pour spam Q) et Transcendence (plus d'ability haste pour plus de refunds de E)."
matchup_draft:
  pick_into:
    - examples: ["sett", "garen", "darius", "tryndamere"]
      archetype: "Bruisers melee lents sans poke ranged"
      reason: "Le Q applique des true damage en pourcentage du HP max et ignore l'armor. Un 1v1 long dans la W mist fond les fighters melee tanky qui ne peuvent ni kite ni disengage."
    - examples: ["shen", "ornn", "cho-gath"]
      archetype: "Tanks qui scalent sur les résistances"
      reason: "Les true damage du Q et l'on-hit AP du E ignorent à la fois l'armor et la magic resist. Les tanks empilent des défenses qu'elle bypasse complètement."
    - examples: ["irelia", "jax"]
      archetype: "Fighters dépendants des items"
      reason: "Leurs power spikes arrivent à l'item 2-3 vers la minute 25. Gwen complète Riftmaker avant et snowball la side lane avant qu'ils n'atteignent leur core."
  counterpicks:
    - examples: ["fiora", "riven"]
      archetype: "Outscalers true damage ou early-game forts"
      reason: "Les Vitals de Fiora font aussi des true damage et ses dashes de Q ignorent le range de la W mist. Riven outdamage Gwen aux niveaux 1-3 avant que la passive ne stack."
    - examples: ["teemo", "vayne", "quinn"]
      archetype: "Tops ranged qui kite depuis le range d'auto"
      reason: "Gwen a besoin de range melee pour appliquer l'on-hit AP et les true damage du Q. Les kiters ranged annulent son engage et empêchent tout trade propre."
    - examples: ["malphite", "pantheon"]
      archetype: "Engages point-and-click avec stun"
      reason: "Leurs chaînes de CC bloquent Gwen avant qu'elle n'active W. Stun en plein dash, elle mange la combo ennemie complète avant que la mist ne tombe."
---

## Aperçu

Gwen est un AP bruiser — un champion melee qui scale sur l'Ability Power (la stat AP) plutôt que sur l'Attack Damage et qui encaisse quelques coups au corps à corps au lieu de burst depuis le range. C'est aussi une "skirmisher" : elle gagne les duels prolongés, elle ne tue pas une cible en deux secondes comme le ferait un assassin. Son kit lui permet de fondre les tanks avec des **true damage** (dégâts qui ignorent l'armor et la magic resist), de se heal pendant les fights via sa passive, et de se repositionner avec un dash dont le cooldown est partiellement remboursé. Elle vit en side lane et dans les duels 1v1.

Le game plan : survis aux 10 premières minutes sans donner de kill, complète ton premier gros item vers la minute 12-14, puis splitpush — pousse une side lane en solo pour forcer l'équipe adverse à envoyer 2 joueurs te stopper. Vers la minute 25 avec 3 items, tu peux entrer en teamfight et enchaîner des auto-attacks (basic attacks, "AA") sur la frontline ennemie (les tanks/bruisers devant leur équipe) jusqu'à ce qu'elle fonde.

## Build Recommandé

**Starting items :** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** dans les matchups contre top ranged ou avec gros poke (chip damage continu à distance). ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion** dans les matchups melee plus tranquilles, quand tu veux scale en AP dès le début.

**Core items (dans l'ordre) :**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — ton gros spike. Après 2 secondes en combat, une partie de tes dégâts se convertit en true damage (la passive "Void Corruption") et tu gagnes l'"omnivamp" (tu heal une portion de tout dégât que tu fais — sorts et auto-attacks confondus). Ça colle au playstyle de fights longs de Gwen mieux que n'importe quel autre item.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plate qui fait passer plus de dégâts contre les squishies (champions à faible défense, typiquement les carries adverses).
3. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — attack speed plus AP plus une passive qui ajoute des dégâts magiques bonus à chaque auto-attack. Combiné au **E** (la fenêtre on-hit de Skip 'n Slash, où chaque auto-attack applique aussi des dégâts magiques basés sur l'AP) tu deviens une tourelle DPS sur les fights longs.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplie ton AP total. L'item de scaling late game qui te transforme de "DPS tanky" en vraie carry.

**Situational items :**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contre divers (champions qui sautent sur ta backline pour tuer tes carries) et assassins (Camille, Fiora, Rengar). L'actif te donne 2.5 secondes de stase (intargetable mais tu ne peux rien faire non plus), assez pour casser leur burst window — les 1-2 secondes où ils essaient de te delete.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contre magic CC mono-cible ("crowd control" : stuns, roots, charms — tout ce qui bloque ton champion sur place). Pool de Vladimir suivi de l'ult, **R** de Lissandra, suppression de Malzahar. Le shield bloque entièrement une compétence ennemie.
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — contre matchups de poke ranged (Vayne, Teemo). Plus d'ability haste (cooldowns plus rapides) et de movement speed pour vraiment les rejoindre.
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — contre 4+ tanks/bruisers dans l'équipe adverse. Remplace Riftmaker en premier item si tu as besoin du burn en pourcentage du HP max dès la minute 1 de chaque fight.

**Boots :** Sorcerer's Shoes par défaut. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** si l'équipe adverse a 3+ menaces AD (Attack Damage) jungler inclus. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contre les compositions à gros CC (3+ stuns ou knockups).

**Skill order :** Max **Q** en premier (true damage et scaling AP), max **E** en second (cooldown et dégâts), garde **W** pour la fin. **R** aux niveaux 6, 11, 16. Priorité niveau 1 : **Q** pour les last-hits (tuer les minions) ; niveau 2 prends **E** pour le dash ; niveau 3 prends **W** pour la sécurité.

**Runes :** Primaire **Precision** avec **Conqueror** (un keystone qui stack pendant les fights longs et donne dégâts adaptatifs + heal), **Triumph**, **Legend: Alacrity**, **Last Stand**. Secondaire **Resolve** avec **Second Wind** et **Overgrowth**. Stat shards : Adaptive Force, Adaptive Force, Health Scaling.

## Matchups clés

- **Fiora :** Matchup difficile. Son **Q** fait aussi des true damage sur ses "Vitals" — les quatre points lumineux autour de ton champion qui, touchés par son **Q**, déclenchent des true damage. Son **R** retire tout effet cleanse (un buff qui casse le crowd control sur toi). Prends ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, garde **W** pour le moment où sa **R** s'active, et ne trade pas d'auto-attacks aux niveaux 1-2 (un "trade" = un échange court de coups où vous entrez tous les deux, vous touchez et reculez) ; elle outscale la plupart des bruisers melee en 1v1 pur.
- **Camille :** Égal à défavorable. Son hookshot (**E**, un grappin longue distance qui la propulse sur toi) bypasse ta **W** mist — elle peut engage de l'extérieur du range de protection de la brume ("engage" = le moment où un champion s'engage pour démarrer un fight). Garde **W** pour le moment juste après qu'elle pose son hookshot, et sors uniquement quand sa **W** (cône true damage sur son auto empowered) est en cooldown.
- **Sett :** Favorable. C'est aussi un bruiser mais il n'a aucune réponse au true damage en pourcentage HP max de ton **Q** sur les trades longs. Saute l'all-in tôt (le fight des niveaux 1-3 où quelqu'un s'engage à fond pour la kill), scale jusqu'à ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker**, puis 1v1 en side lane.
- **Darius :** Égal. Évite le range de son **E** pull ; avance uniquement dans ta **W** mist. Utilise **E** pour disengage (= sortir du fight pour fuir) quand ses stacks de passive bleed atteignent 4 — sa passive applique un saignement damage-over-time à ses auto-attacks, et le 5e stack est celui empowered qui déclenche ses dégâts bonus.
- **Teemo :** Défavorable. Ses auto-attacks ranged te poke hors **W**, et son **Q** aveugle tes auto-attacks (la source principale de tes dégâts). Prends ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, demande à ton jungler un gank early (une visite surprise du jungler pour t'aider à boucler une kill), et joue pour scale — tu ne gagnes pas la lane.

## Power spikes & conditions de victoire

- **Niveau 6 :** La première **R** se débloque. La volée d'aiguilles applique les dégâts magiques en pourcentage HP de ta passive sur chaque champion touché, et le slow enchaîne tes auto-attacks (tu continues à les frapper pendant qu'ils sont ralentis). Force un fight avec l'aide du jungler vers la minute 8-9.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minute 18-20) :** Le spike omnivamp + true damage. Maintenant tu peux 1v1 la plupart des top laners et splitpush une side lane jusqu'à ce qu'ils envoient deux joueurs te stopper.
- **![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth complet (~ minute 26-28) :** Spike DPS. Avec **E** actif tes auto-attacks tirent beaucoup plus vite et appliquent l'on-hit AP — le moment d'entrer en teamfight au lieu de juste splitpush.
- **3 items + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ minute 32+) :** Phase carry. Tes auto-attacks arrachent 25%+ de HP par coup sur la frontline ennemie. Tout teamfight où ton équipe te protège ("peel" les ennemis loin de toi) finit en victoire.

## Erreurs courantes

- **Rester dans la W trop longtemps.** Hallowed Mist est une fenêtre de 4 secondes, pas un shield permanent. Active-la au moment précis où l'ennemi s'engage avec un CC dur (un stun ou un root) ; activer **W** en avance brûle le cooldown et te laisse exposée pour les 18-22 prochaines secondes.
- **Q sur la wave pour poke.** Le coût mana de ton **Q** est élevé et le cône a un range court (450 unités). Garde **Q** pour les moments où tu peux toucher un champion au centre du cône (la zone true damage), pas pour du chip damage sur les wagons de minions.
- **Lancer le E en avant à HP plein.** Ton **E** est à la fois engage et bouton panique. Si tu le claques en avant à HP plein et que le jungler ennemi pop ensuite, tu n'as pas de second dash pour t'enfuir.
- **Auto-attack hors range de la R.** Quand **R** est up, tu peux tirer 3 volées d'aiguilles au total. Reste à 1000 unités du bord du fight pour pouvoir toujours recast **R** sur une cible à bas HP au lieu de courir vers la mort.
- **Acheter ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) Mercury's Treads sans CC.** Boot par défaut : ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes ; passe aux Mercury's seulement avec 3+ menaces hard CC ou un mid AP fed. Les boots défensives te coûtent ~20% de ton output de dégâts.

## Conseil avancé

Utilise la **W** mist pour faire feinter les skillshots (= compétences à viser manuellement en ligne ou en zone, l'opposé de point-and-click) : quand un ennemi avec un stun ou un root longue distance (Lissandra **E**, Sett **W**, Morgana **Q**) commence l'animation de cast, pose **W** sur le bord de son range de lancer et marche dedans. La brume te rend intargetable depuis l'extérieur — souvent ils mangent le cast et tu obtiens 4 secondes gratuites d'auto-attacks sans CC. L'astuce c'est de timer **W** sur leur frame de wind-up (l'animation avant que le sort ne parte), pas après qu'ils se sont déjà engagés.
