---
title: "Akshan Mid Build & Guide — Patch 16.9"
slug: "akshan-mid"
language: "fr"
patch: "16.9"
champion: "akshan"
role: "mid"
last_updated: "2026-04-29"
description: "Guide Akshan mid lane pour League of Legends Patch 16.9 : build core lethality, runes Press the Attack, matchups clés, power spikes, erreurs courantes et un conseil final."
quick_learn:
  champion_dd_id: "Akshan"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Assassin lethality"
  abilities:
    - key: "P"
      name: "Dirty Fighting"
      description: "Tous les 3 coups, dégâts bonus et bouclier si la cible est un champion. L'auto-attaque tire un second coup à dégâts réduits, annulable pour gagner du Move Speed."
      dd_spell_id: "Akshan_Passive"
    - key: "Q"
      name: "Avengerang"
      description: "Skillshot boomerang qui inflige des dégâts physiques à l'aller et au retour. La portée s'étend à chaque ennemi touché — une ligne propre à travers les minions porte plus loin qu'on ne croit."
      dd_spell_id: "AkshanQ"
    - key: "W"
      name: "Going Rogue"
      description: "Passif : marque comme Scoundrels les ennemis qui tuent un allié. En tuer un ressuscite les morts et donne de l'or bonus. Actif : camouflage et Move Speed vers les Scoundrels (cassé hors brush/terrain)."
      dd_spell_id: "AkshanW"
    - key: "E"
      name: "Heroic Swing"
      description: "Grappin sur le terrain ; Akshan tournoie en tirant sur la cible la plus proche, descend à la demande ou à l'impact. Le cooldown reset sur takedown — enchaîne un second swing."
      dd_spell_id: "AkshanE"
    - key: "R"
      name: "Comeuppance"
      description: "Verrouille un champion et charge des balles pendant ~5 secondes. Recast tire toutes les balles sur la première cible touchée ; les dégâts scalent avec les HP manquants — c'est un outil d'execute."
      dd_spell_id: "AkshanR"
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
    - { dd_id: "3142", name: "Youmuu's Ghostblade" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "6698", name: "Profane Hydra" }
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contre CC point-and-click single-target (Lissandra R, Malzahar R, TF carte jaune) — spellshield bloque 1 cast / 30s"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contre gros burst AP (Annie, Veigar, Syndra) — bouclier magique + lifeline contre une rotation de delete"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contre comps qui empilent les soins (Soraka mid, Vladimir, Aatrox top) — Grievous Wounds sur autos et balles R"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "contre comps lourdes en assassins (Talon + Zed double AD) — seconde vie pour le carry qui channel R à découvert"
    - dd_id: "6699"
      name: "Voltaic Cyclosword"
      against: "premier item alternatif contre comps squishy à pickoff : le slow energized colle un carry que ta R raterait"
  base_combo: ["Q", "AA", "E", "AA", "R"]
  win_condition: "Snowball la lane avec des trades 3 coups Press the Attack et du poke Q à portée max, puis convertis le lead en roam via E à partir de la minute 6 et finis les squishys au R sur les fights d'objectif."
  weakness: "Sa E ne s'accroche qu'au terrain : à découvert il n'a aucun reset de swing. CC point-and-click single-target et Wind Wall annulent le channel de R et le poke de Q."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8233, name: "Absolute Focus", icon_path: "perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "xerath", "vel-koz"]
      archetype: "Mages d'artillerie immobiles sans dash"
      reason: "Ces champions restent immobiles pour scale ou poke ; la E d'Akshan autour du mur de mid ferme la distance et enchaîne Q + 3-hit passif + R execute avant qu'ils finissent un cast."
    - examples: ["annie", "lux", "ahri"]
      archetype: "Mages avec un seul escape télégraphié"
      reason: "Akshan baite le stun d'Annie, le Q de Lux ou la R d'Ahri, puis E-swing dans la frame de recovery pour un trade 3-hit gratuit avec le bouclier passif."
    - examples: ["senna", "ziggs"]
      archetype: "Carries backline au peel personnel faible"
      reason: "La R d'Akshan lock à 2500 de portée et ignore l'essentiel du peel ; sous 50% HP les balles execute à travers leur kit, même de l'autre côté du river."
  counterpicks:
    - examples: ["lissandra", "malzahar", "twisted-fate"]
      archetype: "Mages à CC point-and-click"
      reason: "Leur stun ou suppress lock-on annule le channel de R, casse le swing de E en pleine rotation et révèle le camouflage de W — Edge of Night bloque 1 cast / 30s mais ne sauve pas deux fois."
    - examples: ["yasuo", "yone"]
      archetype: "Champions avec Wind Wall"
      reason: "Wind Wall bloque la Q boomerang, chaque auto pendant le swing de E et chaque balle de R ; un seul Wind Wall bien posé renverse le trade et leur permet de all-in sans rien encaisser."
    - examples: ["akali", "fizz", "diana"]
      archetype: "Assassins corps-à-corps multi-dash"
      reason: "La E d'Akshan ne s'accroche qu'au terrain, donc impossible de swing à travers un assassin fed à découvert. Le shroud d'Akali casse son targeting, le E de Fizz saute par-dessus ses autos, la R de Diana le chain en plein channel."
---

## Aperçu

Akshan est un hybride marksman/assassin avec un grappin de repositionnement, un stealth lié à des marques de vengeance et un ultimate d'execute (une attaque qui tue automatiquement les ennemis sous un seuil de HP) qui scale avec les HP manquants. Son kit prend tout son sens en mid lane parce que la géométrie des murs autour du river et du tri-bush donne à ![Heroic Swing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/AkshanE.png) **Heroic Swing** un terrain constant où s'accrocher, et parce que ![Avengerang](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/AkshanQ.png) **Avengerang** dépasse en push la plupart des mages une fois leveled. Il a peu de mobilité à découvert mais beaucoup près des murs — toute la partie devient un choix de fights où la map joue pour toi.

Il scale avec des items de **lethality** — équipement qui transforme les dégâts physiques en pénétration d'armure bonus, idéal pour effacer les cibles squishy comme les mages et les ranged carries, mais peu efficace contre les full tanks. Ses dégâts sont essentiellement physiques (AD), pas magiques.

Son plan de partie est simple à décrire et exigeant à exécuter : push la wave (envoyer tes minions sur la tour adverse) avec **Q**, cherche un trade 3 coups (un échange court où tu engages quelques coups puis recules, pas une tentative de kill complète) qui déclenche le bouclier de la passive ![Dirty Fighting](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/champion/Akshan.png) **Dirty Fighting**, puis roam (quitter ta lane pour aider bot ou top) entre les minutes 6 et 12 pour convertir la prio (la liberté de quitter la lane sans perdre minions ni tour) en kills qui reset **E**. Le skill expression se joue à deux endroits : (1) faire ricocher la **Q** sur un tank de la frontline (les bruisers/tanks qui ouvrent les fights) jusqu'à un carry de la backline (les squishys qui frappent depuis l'arrière) — la portée du boomerang s'allonge à chaque cible enchaînée — et (2) lire le bon moment pour channeler **R** : trop tôt tu manges un stun en plein channel, trop tard la cible a heal au-dessus du seuil d'execute.

## Build Recommandé

**Items de départ :** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 1 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Ouverture par défaut — l'AD plus le lifesteal alimente le bouclier de la passive sur les trades 3 coups.

**Items core (dans l'ordre d'achat) :**

1. ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — premier item de lethality, et l'actif Move Speed transforme tes roams sidelane en kills. Le power spike (le moment où ta puissance fait un saut net) le plus important du build.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — bottes attack speed : la passive (tous les 3 coups) proc plus vite et la rafale de **R** se resserre.
3. ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — ajoute du waveclear AOE (un coup qui touche toute la wave), un actif dash que tu chain après la **E** et plus de lethality. Meilleur deuxième item lethality cette patch.
4. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — sa passive tue tout champion sous 5% HP, parfaitement aligné avec le scaling missing-HP de **R** : les cibles que ta R laisserait à 1 HP meurent quand même.
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — finisher armor pen contre le tank adverse en late. Achète-le plutôt qu'un item défensif quand la partie passe les 35 minutes.

**Items situationnels :**

- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contre les CC point-and-click single-target (CC qui se lock sur une cible sans pouvoir être dodge : Lissandra R, Malzahar R, Twisted Fate carte jaune). Le spellshield (une barrière à usage unique qui absorbe le prochain sort ennemi sur toi) bloque 1 cast par 30 secondes.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contre gros burst AP (dégâts magiques en une rotation qui peuvent te delete en une seconde : Annie, Veigar, Syndra). Le bouclier magique + lifeline (un buff de heal et d'attaque qui s'active quand tu passes sous ~30% HP) te garde en vie assez pour répondre à la **R**.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contre les comps qui empilent les soins (Soraka mid, Vladimir top, Aatrox top). Applique Grievous Wounds (un debuff qui réduit les soins reçus de la cible d'environ 50%) sur autos et sur chaque balle de **R**.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — contre les comps lourdes en assassins (Talon + Zed double AD = deux gros bursts physiques). Une seconde vie vaut plus qu'un slot DPS quand tu es le carry principal qui channel **R** à découvert.
- ![Voltaic Cyclosword](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6699.png) **Voltaic Cyclosword** — premier item alternatif contre des comps double-mage squishy que tu comptes snowball (construire un lead de kills qui s'accumule en plus de kills) avec du pickoff (capturer un ennemi isolé à la fois hors teamfight). L'auto energized applique un slow puissant qui colle un carry en fuite que la **R** raterait sinon.

**Bottes :** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** par défaut pour l'attack speed. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** uniquement contre une équipe avec 3+ sources de hard CC (stuns, roots, knock-ups qui te bloquent les inputs).

**Skill order :** Maxe **Q** d'abord (waveclear et DPS principal), **E** ensuite (pour les dégâts par tir du swing en all-in), **W** en dernier. Un point en **R** aux niveaux 6, 11 et 16.

**Runes :** Arbre primaire **Precision** avec **Press the Attack** (après 3 coups sur un champion, le coup suivant est amplifié — parfait pour le proc passif), **Presence of Mind** (refund de mana sur takedown), **Legend: Alacrity** (attack speed bonus), **Coup de Grace** (plus de dégâts sous 40% HP). Secondaire **Sorcery** avec **Absolute Focus** + **Gathering Storm**, ou **Inspiration** avec **Magical Footwear** (bottes gratuites à la minute 12) + **Cosmic Insight** si tu veux investir l'or économisé dans un spike de premier item plus tôt.

## Matchups clés

- **Yasuo / Yone :** Matchup difficile. Leur **W** Wind Wall (un mur vertical de vent qui bloque tous les projectiles non-melee entrants pendant ~4 secondes) bloque la **Q**, les autos pendant le swing de **E** et chaque balle de **R**. Garde la **Q** tant qu'ils n'ont pas brûlé Wind Wall sur un minion ou ton jungler, puis engage. Garde ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** comme troisième item swap contre Yasuo (vs son knock-up de **Q** — un sort qui te projette en l'air un instant et bloque tes inputs).
- **Zed :** Égal à favorable en lane. Ton trade 3 coups dépasse le poke Q-W de Zed pré-6, mais sa **R** le rend untargetable (impossible à sélectionner par sorts ou autos) un instant, et dodge le lock-on de ta R. Garde **E** pour son shadow swap et utilise-la en counter-jump.
- **Lissandra :** Hard counter. Sa **R** est point-and-click et annule le channel de ta **R** en pleine rotation. Achète ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** avant le second item, et ne lance jamais **R** dans sa face sans spellshield up.
- **Annie :** Attention au niveau 6. Son all-in stun bat le windup de ta **R** si elle te catch en lane. ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** en troisième transforme un kill une rotation en trade survivable.
- **Veigar :** Favorable. Sa cage est assez lente pour que **E** sorte proprement, et il n'a pas d'escape quand tu all-in après le niveau 6. Garde **R** pour quand il a posé sa **E** cage sur une wave.

## Power spikes & conditions de victoire

- **Niveau 2 :** Avec **Q** + **E** tu as ton premier all-in : **Q** sur la wave pour étendre la portée du boomerang, **E** sur un mur latéral, swing pour les autos, **Q** retour à la sortie. C'est le spike de niveau 2 le plus fort de la mid lane cette patch.
- **Niveau 6 :** Le premier **Comeuppance** débloque la pression d'execute en sidelane. Avec ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** seule, un fight river sans ward sur une cible sous 50% HP est un kill garanti.
- **![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) Youmuu's Ghostblade complet (~ minute 9-11) :** Le contrôle de wave bascule. Active le Ghostblade off cooldown sur chaque roam — un gank sidelane avec **E** + **Q** + trade boucliér 3-hit convertit presque toujours sur un champion qui n'a pas acheté de MR.
- **![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) The Collector en ligne (~ minute 22-26) :** Les cibles à 6% HP meurent à la passive de l'item même si ta **R** les aurait laissées à 1 HP. Force les fights d'objectif ici et channel **R** dès qu'un backline apparaît en vision.

## Erreurs courantes

- **E vers le mid à découvert.** Ta **E** ne s'accroche qu'au terrain — si tu Heroic Swing vers un champion sans mur dans l'axe, le cast échoue ou t'accroche au mauvais mur et te dépose au milieu de leur équipe. Pré-planifie toujours le mur avant d'appuyer.
- **Channel R devant l'équipe ennemie.** 5 secondes de windup (le temps que tu passes à channeler avant le release) en ligne de vue, c'est 5 secondes de tir au pigeon pour n'importe quel CC point-and-click. Channel **R** depuis la fog of war (la zone sombre de la map non-wardée que les ennemis ne peuvent pas voir) ou derrière un mur, puis sors pour relâcher les balles à la dernière frame.
- **Annuler le tir bonus quand il faut le laisser partir.** Le second auto de la passive fait ~50% de dégâts réduits mais compte quand même pour le compteur de 3 coups. Sur un trade kill, n'annule pas — le Move Speed vaut moins que finir le proc bouclier.
- **Q poke nue sans bounce minion.** Une **Q** à portée max sans rien dans l'axe est la pire version du sort. Envoie-la toujours à travers une wave ou un minion à bas HP pour que la portée s'allonge et que la trajectoire retour reste alignée sur le champion suivant.
- **Going Rogue camouflage à découvert.** L'actif se brise en ~1 seconde si tu n'es pas dans un brush ou collé à un mur. Utilisé en lane ouverte, il ne fait presque rien — réserve-le pour un flank (entrer dans un fight par un côté que l'ennemi ne surveille pas) via tri-bush ou river brush.

## Conseil avancé

Fais ricocher l'![Avengerang](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/AkshanQ.png) **Q** sur un tank de la frontline pour atteindre le carry derrière. Chaque champion touché par le boomerang étend sa portée restante, donc une **Q** qui part sur le bruiser de frontline en limite de vision continue à voyager à travers le carry et te revient, infligeant deux fois des dégâts à la même cible sur le retour. Entraîne l'angle en custom contre des bots : positionne-toi pour que le boomerang sorte du premier champion à l'angle voulu pour la seconde cible, et la portée enchaînée atteindra une backline qui se croyait à l'abri derrière son équipe.
