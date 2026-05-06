---
title: "Aurora Mid Build & Guide — Patch 16.9"
slug: "aurora-mid"
language: "fr"
patch: "16.9"
champion: "aurora"
role: "mid"
last_updated: "2026-04-29"
description: "Guide Aurora mid lane pour League of Legends Patch 16.9 : starter kit, build burst-mage core, matchups clés, power spikes, erreurs courantes et une astuce avancée."
quick_learn:
  champion_dd_id: "Aurora"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Assassin"
  abilities:
    - key: "P"
      name: "Spirit Abjuration"
      description: "Toucher des ennemis libère des esprits qui suivent Aurora et la soignent au contact. Sustain régulier en lane et en teamfight."
      dd_spell_id: "Aurora_Passive"
    - key: "Q"
      name: "Twofold Hex"
      description: "Skillshot linéaire qui maudit les cibles touchées. La relance ramène la malédiction vers Aurora pour un second coup basé sur les HP manquants."
      dd_spell_id: "AuroraQ"
    - key: "W"
      name: "Across the Veil"
      description: "Dash au lancement ; à l'atterrissage Aurora devient invisible et gagne du movement speed. Reset sur takedown. Outil principal de mobilité."
      dd_spell_id: "AuroraW"
    - key: "E"
      name: "The Weirding"
      description: "Explosion magique AOE qui slow les ennemis. Aurora saute en arrière après le cast, offrant un disengage propre des trades courts."
      dd_spell_id: "AuroraE"
    - key: "R"
      name: "Between Worlds"
      description: "Saut, puis création d'une zone slow qu'Aurora peut traverser en téléportation. Les ennemis qui entrent ou sortent subissent un slow renforcé."
      dd_spell_id: "AuroraR"
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
    - { dd_id: "4646", name: "Stormsurge" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contre les assassins mobiles (Zed, Fizz, Akali) — la stasis couvre la fenêtre où W est en cooldown"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contre le CC magique single-target (Annie stun, Lissandra R, Twisted Fate gold card)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "dès qu'une cible prioritaire achète un objet de Résistance Magique (au-dessus de 60 MR)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contre les comps qui empilent les soins (Soraka, Vladimir, Dr. Mundo, Yuumi)"
  base_combo: ["E", "Q", "W", "Q", "AA"]
  win_condition: "Punis les erreurs de positionnement avec le W jump-in plus le burst de la Q recast une fois Stormsurge et Shadowflame en ligne. Utilise les resets de W sur takedown pour cycler en teamfight."
  weakness: "Du hard CC avant W lui ferme toutes les portes de fuite. Les mages d'artillerie longue portée la pokent hors de sa fenêtre de step-up avant qu'elle ne puisse engage."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8126, name: "Cheap Shot", icon_path: "perk-images/Styles/Domination/CheapShot/CheapShot.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "anivia", "cassiopeia"]
      archetype: "Mages immobiles sans escape"
      reason: "Ces mids n'ont ni dash ni stealth : Aurora peut W in une fois la Q posée, finir la curse-recast sous leur nez et ressortir avec W grâce au reset sur takedown."
    - examples: ["yone", "sett", "pantheon"]
      archetype: "Mids melee à courte portée"
      reason: "Aurora les out-range avec le poke Q et utilise le saut arrière de E pour refuser les trades ; ils doivent commit des gap-closers qu'Aurora punit avec la Q recast en entrée."
    - examples: ["veigar", "ziggs"]
      archetype: "Mages burst immobiles à cast lent"
      reason: "Leur kill window exige qu'Aurora reste immobile pour un projectile lent ou une cage. L'invisibilité de W casse la lecture du cast et la laisse sidestep le setup."
  counterpicks:
    - examples: ["xerath", "vel-koz", "lux"]
      archetype: "Mages d'artillerie longue portée"
      reason: "Ils pokent Aurora hors de la portée de Q à chaque vague. Sans shield natif, chaque step-up pour poser E ou Q lui coûte des HP que sa passive seule ne récupère pas."
    - examples: ["zed", "fizz", "akali"]
      archetype: "Assassins mobiles avec plusieurs gap-closers"
      reason: "Ils la burst pendant le cooldown de W. Même avec Zhonya's, une chaîne de dashes plus l'ulti la supprime avant qu'elle puisse stasis ou resync W."
    - examples: ["yasuo"]
      archetype: "Champions avec block de projectiles"
      reason: "Le Wind Wall de Yasuo annule à la fois la Q sortante et le pull-back de la recast, supprimant environ la moitié des dégâts en lane d'Aurora avec une seule habilité."
---

## Aperçu

Aurora est une mage de dégâts magiques au profil **burst** — elle concentre presque tous ses dégâts dans une fenêtre de 1-2 secondes — avec des outils d'assassin greffés : **Across the Veil (W)** est un dash plus une stealth courte, et **Between Worlds (R)** est à la fois un saut d'engage (façon de lancer un fight en sautant en premier) et une zone de repositioning. Son kit récompense la lecture de l'adversaire : pose **Twofold Hex (Q)** à distance, avance pour aligner la recast, puis saute avec **W** quand le pull-back de la malédiction est aligné. Sa passive la soigne chaque fois que les esprits exorcisés par ses sorts l'atteignent, ce qui lui donne un **sustain** en lane (capacité à récupérer des HP pendant la phase de lane sans rentrer à la base) que la plupart des mids **squishys** — champions fragiles à gros dégâts, comme Lux ou Ahri — n'ont pas.

Son game plan est de gagner des **trades** courts (échanges brefs où deux champions s'échangent quelques coups) avec **Q** plus auto-attacks tout en cherchant la fenêtre d'**all-in** — le moment où elle s'engage à finir la kill — dès que **W** revient. **W** a aussi un reset sur **takedown** (le cooldown se rembourse à chaque kill ou assist), donc une kill propre en lane lui offre un second saut pour s'échapper, et en teamfight ça lui permet d'enchaîner du premier squishy abattu à la cible suivante sur la **back line** (les carries placés derrière les tanks).

## Build Recommandé

**Items de départ :** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** (un peu d'AP — Ability Power, la stat qui boost les dégâts magiques — plus du mana regen) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. La passive d'Aurora la soigne déjà ; Doran's Ring couvre le mana early dont elle a besoin pour spammer **Q** en **poke** (dégâts à distance pour grignoter les HP de l'adversaire sans s'engager).

**Items core (dans l'ordre) :**

1. ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — premier **spike** d'Aurora (moment où un champion devient nettement plus fort, en général en finissant un objet). Quand elle blesse un champion déjà bas HP, la passive de Stormsurge **proc** (le proc, c'est l'activation d'un effet bonus) et ajoute des dégâts plus du movement speed, exactement ce qu'il faut pour enchaîner W in plus Q recast.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — **magic penetration** plate (réduit la Magic Resist adverse, donc tes sorts tapent plus fort), surtout précieuse contre les cibles squishys.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — la passive de seuil HP (dégâts magiques bonus quand la cible est sous ~35% HP) colle pile au burst de la Q recast, qui inflige plus de dégâts sur des cibles à HP manquants.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — objet de **scaling** late game (multiplie l'AP de tous les autres objets de la build, donc devient de plus en plus fort à mesure que tu accumules de l'AP). Avec Deathcap online, la Q recast peut one-shot un squishy en une seule combo avant qu'il réagisse.

**Items situationnels :**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contre les assassins mobiles (Zed, Fizz, Akali). L'active offre la **stasis** (2,5 secondes où tu es intouchable mais ne peux ni bouger ni cast). Sers-t'en dans la fenêtre où **W** est en cooldown.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — magic resist plus un bouclier passif qui bloque la prochaine compétence ennemie. Achète-le contre du **CC** magique single-target (CC pour crowd control : stuns, roots, slows qui te coupent de ton kit) qui interrompt l'engage — Annie stun, Lissandra R, Twisted Fate gold card.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — magic penetration en pourcentage. Achète-le dès qu'une cible prioritaire monte sa Magic Resist (au-dessus de 60 MR).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — applique des Grievous Wounds, qui coupent les soins ennemis. Achète-le contre les comps qui empilent les soins (Soraka mid, Vladimir, Dr. Mundo top, Yuumi).

**Bottes :** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** par défaut. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** sont acceptables si l'équipe a besoin de plus d'uptime sur **R** pour engage.

**Skill order :** Mets le max de points dans **Q** d'abord (c'est ses dégâts principaux et le déclencheur du burst de la recast), puis dans **E** (clear de wave et le saut arrière donne un **disengage** gratuit — le disengage, c'est la façon de sortir d'un fight déjà en cours), **W** en dernier. Un point dans **R** aux niveaux 6, 11 et 16.

**Runes :** Primaire **Domination** avec **Electrocute**, **Cheap Shot**, **Sixth Sense** et **Ultimate Hunter**. Secondaire **Sorcery** avec **Manaflow Band** et **Transcendence**. Electrocute proc après trois coups rapides sur la même cible — exactement ce que fait Aurora dans chaque trade court avec Q-auto-Q-recast — et Ultimate Hunter raccourcit le cooldown de **R** pour un second engage en teamfight.

## Matchups clés

- **Yasuo :** le Wind Wall (W de Yasuo, un mur de vent qui bloque tous les projectiles qui le traversent) avale les deux moitiés de **Q** (le projectile sortant et le pull-back de la recast). Garde **Q** jusqu'à ce qu'il pose son Wind Wall sur une wave, puis avance et trade avec auto-attacks et **E** pendant que son Wind Wall est en cooldown.
- **Zed :** assassin mobile. Garde **W** en défensif pour quand sa **R** atterrit ; ne la brûle pas en offensif en lane. Achète ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** en deuxième item si son jungler a aussi du hard engage.
- **Anivia :** immobile et vulnérable à un W all-in dès que son mur tombe. Marche agressivement sur les placements de mur juste après qu'elle le pose ; le mur a un long cooldown et elle n'a rien d'autre pour te menacer en mêlée.
- **Lux :** matchup égal voire légèrement favorable. Sa Q te out-range, mais tu gagnes les échanges courts grâce à **W** plus auto-attacks. Sidestep son **E** pendant qu'elle la pose (elle telegraphe le cast — il y a une animation visible avant que le sort atterrisse), puis avance.
- **Twisted Fate :** course au premier **roam** (le roam, c'est quitter sa lane pour faire des plays ailleurs sur la map). S'il te pose la gold card, **W** sur le côté avant que la carte n'atterrisse — le dash casse le lock-on. Track sa **R** avec des **wards** (totems qui donnent la vision d'une zone pendant quelques minutes — sweep les entrées de river et le tri-bush, le buisson au croisement river-mid) ; s'il ulti, ping mid-mia (le classique "missing in action" qui prévient l'équipe que ton laner vient de partir) et roam à ton tour.

## Power spikes & conditions de victoire

- **Niveau 2 :** avec un point en **W** tu as soudain de la mobilité — la première fenêtre d'all-in s'ouvre si l'adversaire est sous ~70% HP. Avance, **Q**, auto-attack, puis **W** derrière lui et **Q** recast.
- **Niveau 6 :** la première **R** débloque le repositioning cross-zone qui te permet de t'engager en 1v1 même sous tour ennemie, parce que **R** te donne une route de fuite intégrée à travers la zone.
- **![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) Stormsurge fini (~minute 12-14) :** premier spike d'assassinat. Aurora peut désormais solo-kill un squishy à HP plein avec la combo complète, et le reset de **W** sur takedown rend une seconde kill dans le même teamfight réaliste.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~minute 24-28) :** la Q recast sur HP manquants commence à one-shot toute cible qui n'a pas acheté d'objet de Magic Resist. Force des fights autour des objectifs (drake, baron, herald, voidgrub) dès que c'est en ligne.

## Erreurs courantes

- **Brûler W à l'entrée au lieu de la garder pour le reset.** **W** se reset sur takedown. Si tu commits **W** pour engage, finis la kill dans la même fenêtre pour que le reset te donne la sortie. Si la kill n'est pas garantie, garde **W** et utilise le saut arrière de **E** pour disengage à la place.
- **Oublier de relancer la Q.** **Twofold Hex** s'auto-recast à la fin de la durée, mais la recast manuelle te laisse choisir l'angle du pull-back. Faire deux pas en avant avant la recast traîne le second coup à travers plus d'ennemis pour des dégâts **AOE** (area-of-effect — dégâts qui touchent plusieurs ennemis dans une zone, pas une seule cible).
- **Rester dans ta propre zone de R après la fin du slow.** **Between Worlds** te ferme visuellement dans une zone marquée ; une fois le slow d'entrée/sortie épuisé, la zone n'est plus qu'un panneau qui dit "effondrez-vous ici". Saute hors du périmètre dès que la kill est sécurisée.
- **Empiler de l'AP sans magic penetration.** Acheter ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** avant ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** ou ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** te coûte des dégâts contre n'importe qui avec ne serait-ce que de la MR de base. Penetration d'abord, AP brut ensuite.
- **Utiliser R pour engage quand l'équipe ne suit pas.** **R** est un commitment à long cooldown — la cramer pour rien parce que ton équipe nettoyait une side wave est le **throw** le plus courant (jeter une partie gagnée d'un commit imprudent). Ping l'engage trois secondes avant de cast pour que l'équipe ait le temps de se tourner dans la bonne direction.

## Conseil avancé

Utilise la frontière du realm-hop de **R** comme outil de **kite** — kiter, c'est faire des dégâts en reculant pour empêcher l'ennemi de combler la distance — et pas seulement comme engage. Cast **R** derrière un ennemi en fuite pour que la zone slow lui ferme la ligne d'évasion, puis saute à travers pour lui couper l'angle. Le slow à l'entrée et à la sortie fait que la seule route sûre pour quitter la zone est le chemin long — d'habitude assez long pour que tu poses une **Q** plus une auto-attack et finisses la kill.
