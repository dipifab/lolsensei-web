---
title: "Azir Mid Build & Guide — Patch 16.9"
slug: "azir-mid"
language: "fr"
patch: "16.9"
champion: "azir"
role: "mid"
last_updated: "2026-04-29"
description: "Guide Azir mid lane pour League of Legends Patch 16.9 : starter kit, build battle mage, matchups clés, power spikes, erreurs courantes et une astuce avancée."
quick_learn:
  champion_dd_id: "Azir"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Specialist"
  abilities:
    - key: "P"
      name: "Shurima's Legacy"
      description: "Une fois par tourelle alliée tombée, Azir peut ressusciter un Disc of the Sun temporaire : une tourelle qui frappe fort et contrôle l'espace autour des décombres."
      dd_spell_id: "Azir_Passive"
    - key: "Q"
      name: "Conquering Sands"
      description: "Envoie tous les Sand Soldier actifs vers un point, infligeant des dégâts magiques et un slow en ligne. Outil principal de poke et de repositionnement."
      dd_spell_id: "AzirQWrapper"
    - key: "W"
      name: "Arise!"
      description: "Invoque un Sand Soldier (à charges). Les soldats étendent les auto-attacks d'Azir : quand il fait une AA près d'un soldat, le soldat poignarde en ligne pour des dégâts magiques."
      dd_spell_id: "AzirW"
    - key: "E"
      name: "Shifting Sands"
      description: "Bouclier + dash vers un soldat existant. S'arrête au contact d'un champion et rembourse une charge de soldat. Ton seul escape et ton seul gap-close."
      dd_spell_id: "AzirEWrapper"
    - key: "R"
      name: "Emperor's Divide"
      description: "Mur de soldats qui avance, knockback sur les ennemis et laisse une ligne bloquante pendant plusieurs secondes. L'outil du fameux 'Shuffle'."
      dd_spell_id: "AzirR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
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
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contre divers et assassins (Zed, Diana, Talon, Akali) — la stasis couvre le cooldown de ta E quand tu te fais attraper"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contre CC magique single-target lourd (Ahri charm, Lissandra R, Twisted Fate stun, Syndra E)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap dès qu'une cible prioritaire achète un item de Magic Resist — tes soldier autos passent à travers la MR"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contre comps qui empilent les heals (Soraka, Vladimir, Dr. Mundo) — l'anti-heal s'applique sur chaque coup de soldat"
  base_combo: ["W", "Q", "AA", "E", "R"]
  win_condition: "Atteindre Nashor's Tooth + Sorcerer's Shoes online (~ minute 18-20), puis contrôler les fights d'objectif avec les auto-attacks étendues par les soldats et faire Shuffle (R + Flash) sur les carries adverses."
  weakness: "Champion mécaniquement exigeant et faible avant le niveau 6. Sans E disponible aucun escape ; le chip damage à distance et les Wind Wall (Yasuo, Yone) annulent les soldats de Q et la R."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8229
      name: "Arcane Comet"
      icon_path: "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
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
matchup_draft:
  pick_into:
    - examples: ["veigar", "karthus", "anivia"]
      archetype: "Mages immobiles sans dash"
      reason: "Le range des soldats d'Azir dépasse leur range de cast, et ils n'ont pas de dash pour esquiver le poke soldier-Q ni pour interrompre la séquence d'auto-attacks boostée par la W."
    - examples: ["annie", "syndra"]
      archetype: "Mages d'all-in lent et télégraphié à courte portée"
      reason: "Azir tient la distance pendant leurs fenêtres de commit (le moment où ils avancent pour attaquer) : à chaque approche, les soldier autos les grignotent, et la R Shuffle retourne l'all-in s'ils Flash dedans."
    - examples: ["malzahar", "kassadin"]
      archetype: "Mages late-game faibles dans les petits fights early"
      reason: "Azir farm safe avec W dès le niveau 1 et tient leur potentiel late sans donner d'exp gratuite — à la minute 14 il est online avant qu'ils n'atteignent leur propre spike."
  counterpicks:
    - examples: ["yasuo", "yone"]
      archetype: "Champions avec Wind Wall"
      reason: "Wind Wall mange chaque ligne de soldats de la Q et le follow-up du mur de la R. Avec son poke principal neutralisé, Azir reste un mage corps-à-corps sans outils melee."
    - examples: ["zed", "talon", "leblanc"]
      archetype: "Assassins early-game burst avec plusieurs dashes"
      reason: "Ils all-in pre-6 quand Azir n'a pas sa E ; même avec Zhonya's, les kits multi-dash le rejoignent avant que sa R ait le temps de partir."
    - examples: ["xerath", "vel-koz"]
      archetype: "Mages d'artillerie longue portée"
      reason: "Ils grignotent ses HP au-delà du range des soldats d'Azir (740). Il n'a pas de sustain pre-6 pour tenir et arrive à son premier item avec peu de HP."
---

## Aperçu

Azir est un battle mage qui combat à longue portée à travers ses **Sand Soldiers** — petites unités spectrales qu'il invoque avec **W (Arise!)** et qui servent de postes d'auto-attack à distance. Quand Azir attaque un ennemi près d'un soldat, c'est le soldat qui poignarde en ligne pour infliger des dégâts magiques. Il a le skill ceiling le plus haut de cette liste (Riot le note 9/10 en difficulté), et ses premiers niveaux sont franchement faibles. Tant qu'il n'a pas placé son premier soldat et construit la muscle memory **W → Q**, il perd nettement ses trades (un bref échange de dégâts en lane, pas un fight complet) face à la plupart des laners.

Son game plan en une phrase : farmer en sécurité avec **W** jusqu'à ce que ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** soit online vers la minute 18, puis utiliser **R (Emperor's Divide)** — le fameux "Shuffle" — pour envoyer les carries ennemis (les champions à hauts dégâts de leur équipe) dans ton équipe pendant les fights d'objectifs (les teamfights autour des grands objectifs de la map : Drake, le dragon à la rivière bot ; Atakhan, un nouveau boss de mid-game ; ou Baron Nashor en late). La skill expression vit en trois endroits : le placement des soldats (où tu te tiens vs où les soldats projettent ton range d'auto-attack), la combo "Shuffle" **E + Flash + R**, et savoir quand dépenser ton seul escape (**E**) ou le garder pour un counter-engage (le moment où tu retournes une attaque adverse contre eux).

## Build Recommandé

**Items de départ :** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potions](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Saute la ![Corrupting Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2033.png) **Corrupting Potion** : tu dépenses du mana sur **W** (peu) et **Q** (moyen), le mana regen de Doran's gère le reste.

**Items core (dans l'ordre) :**

1. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — premier item à chaque partie. L'attack speed accélère tes auto-attacks étendues par soldats (basic attacks, aussi AA — le range d'auto d'Azir ne compte que si un soldat est proche), et le magic damage on-hit (dégâts supplémentaires appliqués sur chaque basic attack) s'ajoute à chaque coup de soldat. C'est le spike (le moment où un champion devient nettement plus fort) qui te fait passer de passif à menaçant.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plate (une valeur fixe, pas un pourcentage, de Magic Resist ennemie ignorée). Boots par défaut pour tout mid mage qui veut delete les targets squishy (champions à faibles défenses, comme les ADC et autres mages).
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplie tout ton scaling AP (Ability Power, la stat qui augmente les dégâts magiques). Après cet item, chaque auto de soldat et chaque **Q** tape beaucoup plus fort ; c'est ton vrai damage spike pour les teamfights de late game.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst supplémentaire (dégâts élevés concentrés sur une à deux secondes), avec une passive HP-threshold (une passive qui s'active quand l'ennemi est sous environ 35% HP) qui s'aligne sur le follow-up kill après un Shuffle.

**Items situationnels :**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contre divers et assassins (Zed, Diana, Talon, Akali). Un "diver" est un champion qui saute sur ton carry de back-line pour le delete malgré le risque. La stasis (quelques secondes pendant lesquelles tu ne peux ni subir de dégâts ni bouger) achète le temps qu'il faut pour que ta **E** revienne quand tu te fais attraper.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contre CC magique single-target lourd (CC = crowd control : stuns, charms, snares — tout ce qui prend le contrôle de ton personnage). Exemples : Ahri charm, Lissandra R, Twisted Fate stun, Syndra E.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — swap dès qu'une cible prioritaire achète un item de MR (Magic Resist, la stat qui réduit les dégâts magiques subis). Les soldier autos et la **Q** retraversent la MR.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contre comps qui empilent les heals (Soraka, Vladimir, Dr. Mundo). L'anti-heal (une passive qui coupe de moitié les soins ennemis pendant quelques secondes) s'applique sur chaque coup de soldat.

**Boots :** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** par défaut. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** sont acceptables quand l'équipe a besoin de ta **R** plus souvent off cooldown (moins d'attente entre les casts) pour les fights d'objectifs.

**Skill order :** Max **Q** d'abord (les dégâts et le slow des soldats scalent par rang, et le cooldown passe de 14s rang 1 à 6s rang 5), **W** ensuite (plus de charges et durée plus longue des soldats), **E** en dernier. Prends **R** aux niveaux 6, 11, 16. Démarre **W** au niveau 1 — sans soldat tu ne peux pas farmer la wave à distance.

**Runes :** Primaire **Sorcery** (l'arbre de runes magic damage) avec **Arcane Comet** (un petit projectile qui ajoute des dégâts quand tu touches avec un slow ou un root), **Manaflow Band** (mana supplémentaire à chaque fois que tu touches un champion avec une compétence), **Transcendence** (cooldown reduction au niveau 5), **Scorch** (petit burn sur ta première compétence qui touche, toutes les quelques secondes). Secondaire **Inspiration** avec **Biscuit Delivery** (potions gratuites en lane) et **Cosmic Insight** (plus d'uptime sur les summoner spells). Bascule la secondaire en **Precision** avec **Presence of Mind** (mana refund sur les takedowns) et **Coup de Grace** (plus de dégâts aux cibles à bas HP) quand l'équipe adverse aligne plusieurs squishies à faibles résistances.

## Matchups clés

- **Yasuo / Yone :** Leur **Wind Wall** bloque chaque projectile de ton kit — les coups de soldats de **Q** et la vague de **R**. Garde la **Q** tant qu'ils n'ont pas claqué leur Wind Wall sur autre chose ; si tu réussis à les bait (les forcer à cramer le mur sur une attaque sans valeur) avec un seul coup de soldat, les 24 secondes de trades qui suivent sont gratuites.
- **Zed :** Menace de dive (il s'engage sous ta tour pour te tuer malgré les coups de tour) à partir du niveau 6. Achète ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** en deuxième item. Garde la **E** — ne l'utilise jamais offensivement avant qu'il n'ait engagé son ult ; s'il ult et que tu as **E** + Zhonya's, tu survis au burst.
- **Veigar :** Égal à favorable. Pas de dash. Le poke soldier-Q (chip damage à distance safe) le sort de la XP range à chaque fois qu'il avance pour last-hit ; respecte juste sa **E (Event Horizon)** en gardant ton dash de **E** pour briser la cage.
- **Twisted Fate :** Course à la prio pour les roams. "Roam" signifie quitter ta lane pour aider une autre lane ; "priority" signifie avoir un avantage de wave-control qui te permet de partir sans perdre de minions. Push la wave en cooldown avec **W** + **Q**. Quand il atteint le niveau 6 et commence à roam avec son ult, ping ton équipe et force des tower trades (tu prends sa tour pendant qu'il tue ton bot lane) sur son côté plutôt que de le poursuivre ; Azir punit les side waves avec le Shuffle de **R** sous tour mieux que la plupart des mids.
- **Akali :** Diver avec gap-close. Place tes soldats dans les bushes par lesquels elle aime flank (entrer dans un fight par un côté non couvert). Dans la zone stealth de sa **W (Twilight Shroud)** tu ne peux pas la cibler — pré-place **W** pour que les soldats l'attaquent à vue dès qu'elle sort.

## Power spikes & conditions de victoire

- **Niveau 4 :** Trois points en **Q** débloquent un vrai damage spike. Le poke soldier-Q menace désormais des kills sérieuses si l'adversaire revient en range deux fois d'affilée.
- **Niveau 6 :** La première **R** débloque la combo "Shuffle" : **Flash + R** retourne la frontline ennemie (les tanks à l'avant du fight) en arrière dans ton équipe. Utilise-la la première fois dans une skirmish (un petit fight, plus petit qu'un teamfight 5v5) 2v2 sur la rivière pour qu'un raté ne ruine pas la lane.
- **![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minute 18-20) :** Tu deviens la menace DPS (damage per second, dégâts par seconde) de mid-game que ton équipe attendait. Force un fight sur Atakhan ou Drake (Atakhan est un boss de mid-map ; Drake est le dragon à la rivière bot) — tes soldier autos surclassent la plupart des mages à ce stade.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minute 28-32) :** Chaque soldier auto écrase les squishies. À partir de là Azir est l'un des hard carries les plus puissants du jeu, mais seulement s'il reste à portée maximale de soldats et que sa frontline (les tanks/bruisers devant lui) tient.

## Erreurs courantes

- **Marcher en auto range pour last-hit avant que la W soit prête.** Les basic attacks d'Azir sans soldat à proximité sont courtes et faibles. Invoque toujours un soldat sous le minion que tu veux avant d'avancer ; c'est le soldat qui farm pour toi, pas ta basic attack.
- **Garder R pour le Shuffle parfait qui ne vient jamais.** Même une **R** médiocre qui repousse un ennemi et crée un mur vaut mieux que pas de **R** du tout. Utilise-la en peel (pour protéger ton carry des divers) quand aucune opportunité d'engage (l'action d'initier un fight en sautant dedans) ne se présente.
- **Utiliser E offensivement sans plan de sortie.** **E** est ton seul escape. Si tu dash dedans, tes soldats expirent, ton dash part en cooldown et tu restes planté comme un glass cannon (un champion à hauts dégâts et zéro défense) à portée melee. **E** offensive uniquement quand tu peux garantir la kill ou enchaîner une **R** immédiate.
- **Oublier que les tourelles de Shurima's Legacy existent.** Quand une tourelle extérieure alliée tombe, tu peux ressusciter une puissante tourelle Disc-of-the-Sun sur les décombres. Sers-t'en pour le contrôle d'objectif autour d'Atakhan ou pour défendre sous ton inhibitor (la structure entre la deuxième tour et le Nexus). La plupart des Azir ne pressent jamais la passive.
- **Spam Q comme poke sans setup W.** **Q** projette des dégâts *le long de la ligne de chaque soldat actif*. Sans soldats debout, **Q** ne fait rien. Place **W** d'abord, *puis* **Q** pour envoyer le soldat où tu veux.

## Conseil avancé

Entraîne le Shuffle **E + Flash + R** dans Practice Tool (le mode d'entraînement offline du client) jusqu'à pouvoir l'exécuter en moins de 0,4 seconde. L'ordre compte : **E** te verrouille sur la trajectoire du soldat, **Flash** te repositionne en plein dash pour que le mur de **R** parte du nouveau point, et **R** charge dans la direction où ton personnage regarde *au moment du cast*. Bien fait, ça transforme un assassin isolé ou un carry qui marche dans ton fog of war (la partie de la map sans wards — sentinelles qui donnent vision — que tu ne vois pas) en kill garantie, peu importe sa position de départ.
