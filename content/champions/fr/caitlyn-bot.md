---
title: "Caitlyn Bot Build & Guide — Patch 16.9"
slug: "caitlyn-bot"
language: "fr"
patch: "16.9"
champion: "caitlyn"
role: "bot"
last_updated: "2026-04-29"
description: "Guide Caitlyn bot lane pour League of Legends Patch 16.9 : starter kit, build de lane bully, matchups clés, power spikes, erreurs courantes et une astuce avancée."
quick_learn:
  champion_dd_id: "Caitlyn"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Lane Bully"
  abilities:
    - key: "P"
      name: "Headshot"
      description: "Toutes les N attaques, Caitlyn tire un coup bonus qui scale avec le crit. Portée doublée sur les cibles piégées ou nettées."
      dd_spell_id: "Caitlyn_Passive"
    - key: "Q"
      name: "Piltover Peacemaker"
      description: "Skillshot linéaire longue portée avec channel initial. Touche en ligne ; dégâts réduits sur les cibles suivantes. Main DPS et waveclear."
      dd_spell_id: "CaitlynQ"
    - key: "W"
      name: "Yordle Snap Trap"
      description: "Pose un piège qui, une fois activé, révèle et root le champion ennemi 1.5s et accorde un Headshot empowered."
      dd_spell_id: "CaitlynW"
    - key: "E"
      name: "90 Caliber Net"
      description: "Filet ciblé qui ralentit l'ennemi et propulse Caitlyn en arrière. C'est un escape contre les divers, pas un outil d'engage."
      dd_spell_id: "CaitlynE"
    - key: "R"
      name: "Ace in the Hole"
      description: "Channel + execute global single-target. Les alliés de la cible peuvent body-block la balle : il faut isoler."
      dd_spell_id: "CaitlynR"
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
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contre frontlines tank ou comps HP-stack (Sion, Cho'Gath, Dr. Mundo) : armor pen bonus qui scale avec les HP ennemis"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contre comps à gros heal (Soraka, Vladimir, Aatrox) : applique Grievous Wounds, coupe les soins dès le tag"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "contre pression assassin ou diver (Zed, Samira, Yasuo flank) : movement speed plus passif-bouclier sous seuil HP"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contre hook ou pick comps (Blitzcrank, Thresh, Morgana Q) : le spell shield mange un CC prioritaire avant le burst"
  base_combo: ["W", "Q", "AA"]
  win_condition: "Domine la lane avec la portée du Q et les setups de trap, snowball les Headshot procs avec The Collector et Infinity Edge, puis closes les fights derrière ta frontline en kitant au E et en finissant les low-HP au R."
  weakness: "Aucun escape réel quand E est en cooldown. Hard counter par les divers et assassins (Samira, Yasuo, Zed flank). Si l'early lead ne se convertit pas en pick à midgame, les hyperscalers comme Jinx ou Vayne te dépassent."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8021
      name: "Fleet Footwork"
      icon_path: "perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
---

## Aperçu

Caitlyn est la marksman avec la plus longue portée de base du jeu et l'archétype du **lane bully** (un champion qui domine la lane dès les premières minutes et vit du lead qu'il construit en laning phase). Toute son identité consiste à rendre les 12 premières minutes misérables pour le duo adverse, puis à convertir cette avance en objectifs. Sa **Piltover Peacemaker (Q)** dépasse en portée le basic attack de presque tous les autres ADC, sa **Yordle Snap Trap (W)** transforme les chokepoints en zones de dégâts, et sa passive **Headshot** punit quiconque se positionne mal autour des traps ou du net. En contrepartie, elle a parmi les valeurs d'armor et de HP les plus basses des ADC : le prix de sa dictature en lane, c'est qu'elle fond dès qu'un ennemi la pèche hors de position.

Le game plan est simple à raconter et dur à exécuter : poke (user les HP ennemis à distance sans s'engager) la lane avec la **Q**, pose des traps dans les bushes et le tri-bush pour menacer le combo **W → Headshot empowered**, et convertis le lead du premier recall en or de turret plate. Après **The Collector** et **Infinity Edge**, ton rôle change : tu deviens une back line carry (la carry qui inflige les dégâts depuis l'arrière du teamfight). Tiens-toi en deuxième position la plus en arrière, kite au **E** quand un diver te saute dessus, et utilise **R** comme execute (exécution sous seuil HP) sur les runners low-HP — jamais comme outil de poke.

## Build Recommandé

**Items de départ :** Doran's Blade + 2 Health Potions. Même si tu gagnes la lane, skip le second Doran's : l'or rapporte beaucoup plus sur une component Pickaxe pour The Collector.

**Items core (dans l'ordre) :**

1. **The Collector** — first-item rush. Le passif execute déclenche sous 5% HP et efface exactement le genre de runner low-HP que la **R** veut finir. La lethality est idéale early parce que les ADC ennemis ont encore très peu d'armor.
2. **Berserker's Greaves** — bottes d'attack speed. Mercury's Treads uniquement si l'équipe ennemie a 3+ menaces de hard CC (crowd control : stun, root, knockup).
3. **Infinity Edge** — ton plus gros spike de dégâts. Le passif Headshot scale avec la critical strike chance, et IE transforme chaque Headshot en quasi-one-shot sur les cibles backline.
4. **Rapid Firecannon** — encore plus de portée d'auto-attack (plus de 700 base + RFC + IE fait de toi l'auto-attacker la plus longue du lobby) et un proc Energized qui se synchronise naturellement avec le timing du Headshot.

**Items situationnels :**

- **Lord Dominik's Regards** — contre les frontlines tank ou comps HP-stack (Sion, Cho'Gath, Dr. Mundo). Remplace Rapid Firecannon si l'équipe ennemie a 3+ tanks.
- **Mortal Reminder** — contre les comps à gros heal (Soraka, Vladimir, Aatrox). Applique Grievous Wounds (coupe les soins reçus) dès que tu tag une cible.
- **Phantom Dancer** — contre la pression d'assassin ou diver. Le passif HP-threshold (un bouclier qui se déclenche sous seuil) plus la movement speed te donnent la demi-seconde nécessaire pour faire **E** et fuir.
- **Edge of Night** — contre les hook comps ou pick comps (Blitzcrank, Thresh, Morgana Q). Le spell shield mange un CC prioritaire avant que tu te fasses burst : c'est la différence entre vivre et mourir dans ces matchups.

**Bottes :** Berserker's Greaves par défaut. Mercury's Treads uniquement contre du gros CC AP comme Brand support ou Zyra support.

**Skill order :** Maxe **Q** en premier (waveclear et main DPS), **E** en second (réduit le cooldown de ton seul escape), **W** en dernier (la trap fait plus de dégâts par rang mais le timer ne change pas). Mets un point dans **R** aux niveaux 6, 11 et 16.

**Runes :** Primaire **Precision** avec **Fleet Footwork**, **Presence of Mind**, **Legend: Alacrity**, **Coup de Grace**. Secondaire **Sorcery** avec **Manaflow Band** et **Gathering Storm**, ou bascule sur **Inspiration** avec **Magical Footwear** et **Cosmic Insight** si tu veux de l'or supplémentaire à la complétion des Bottes.

## Matchups clés

- **Draven :** Légèrement défavorable aux niveaux 1-3 parce que le burst (gros pic de dégâts en 1-2 secondes) de sa Spinning Axe te dépasse en trade. Pas de fight pre-3 : freeze la wave (garde la lane gelée près de ta tour) sous tour, atteins le niveau 3 avec les trois abilities, puis trade (échanges courts en lane) seulement quand tu as une **W** posée dans le bush de lane. Punis ses fenêtres de mana vide après Q-Q-Q.
- **Ezreal :** Even, légèrement favor Caitlyn si le support te laisse commit. Tu outranges sa **Q** de loin. Chaque fois qu'il Q un minion, **Q** gratuite à toi en lane. Ne dodge pas **dans** la trajectoire de sa **W**.
- **Jhin :** Matchup even, décidé par la discipline au snipe **R**. Respecte sa quatrième balle (dégâts énormes). Quand sa **W** est down, avance et trade. Utilise ta **E** pour dodge sa **W** root s'il la télégraphe.
- **Vayne :** Très favorable Caitlyn avant le niveau 9, cauchemar après le niveau 11. C'est ta mine d'or : shove la wave fort pre-3 (pousse la lane à fond), force-la hors de la lane avec **Q**, et garde ton jungler informé des opportunités de dive (entrer sous tour pour la tuer malgré les tirs de la tour) au niveau 6. Si elle survit à deux items, la lane est terminée et tu dois passer en mode back line.
- **Samira :** Elle veut un all-in (échange total jusqu'à la kill) au corps à corps dès qu'elle a la W. Pose des traps dans le bush de lane pour fermer son chemin d'engage, garde la **E** comme knockback au moment exact où elle dash dessus (ne la brûle pas en poke), et ne fight jamais contre elle si la Phantom Dancer est sans bouclier.

## Power spikes & conditions de victoire

- **Niveau 2 :** Avec un point en **Q** et un point en **E**, le combo Q-AA-AA chunk 30-40% des HP de l'ADC ennemi s'il avance pour last-hit. Tiens la wave au centre de la lane et cherche cette fenêtre.
- **Niveau 6 :** Premier **Ace in the Hole** débloque la pression de pick (éliminer un ennemi isolé hors teamfight). Lance-la depuis l'intérieur d'un tri-bush pour que le reveal de la balle ne télégraphe pas ta position. Ne la gaspille pas en poke : attends un runner low-HP sans alliés à proximité.
- **The Collector terminé (~ minute 8-10) :** Premier breakpoint d'execute. Presque tous les squishies (champions à faibles défenses) sous 5% HP meurent instantanément au passif, donc une **Q** qui cleave une ligne de minions bas HP jusqu'au champion ennemi devient un kill gratuit.
- **Infinity Edge online (~ minute 18-22) :** Ton plus gros spike de dégâts. Les procs Headshot passent de "ça pique" à "ça delete l'ADC ennemi". Force les fights d'objectif ici — Drake ou Rift Herald — et construis la vision autour de tes zones de win condition.

## Erreurs courantes

- **Spammer Q en waveclear sans gérer le mana.** Caitlyn est mana-hungry early. Q la wave seulement quand elle aligne deux melee minions plus un caster, sinon tu arrives à la fenêtre de trade suivante avec le mana vide.
- **Lancer des W traps en poke.** Les traps sont un setup tool, pas un damage tool. Pose-les dans les chokepoints (bush de lane, tri-bush, entrée de river) où l'ennemi doit forcément passer pour last-hit ou rotate. Une trap nue lancée aux pieds de l'ADC ennemi gaspille une seconde de lane prio (priority — l'ascendant de lane qui te permet de partir sans perdre de ressources).
- **Rester en permanence à portée maximale en teamfight.** La portée max d'AA te place hors de la zone de peel (la protection que tes alliés mettent sur toi). Tiens-toi en deuxième position la plus en arrière, comme ça un assassin qui flank (entre par un côté non couvert) ne te delete pas avant que ton support réagisse.
- **Utiliser la R en poke depuis l'autre bout de la map.** **Ace in the Hole** a un long channel et tout allié proche body-block la balle. Garde-la pour les runners **isolés** low-HP — des cibles sans allié à moins de 350 unités.
- **Brûler la E pour chase un kill.** **90 Caliber Net** est ton seul escape. En cooldown tu es un glass cannon (champion à gros dégâts et faibles défenses, typique des ADC) sans réponse à un diver. Utilise-la pour fuir, pas pour fermer la distance.

## Conseil avancé

Entraîne la séquence **"Trap → Q → Headshot empowered"** dans les chokepoints. Avance jusqu'à un tri-bush ou une entrée de jungle, pose la **W** derrière la ligne ennemie du côté de leur retraite, puis pousse-les avec du poke **Q**. Au moment où ils marchent sur la trap, le root de 1.5s te garantit un follow-up **Q** plus un Headshot empowered — et le tir empowered a une **portée doublée** contre les cibles piégées, ce qui veut dire que tu le tires d'une distance d'où la plupart des ADC ne peuvent même pas auto-attaquer. En pratique, ça transforme un 2v2 de lane en 1.5v2 : l'ADC ennemi doit choisir entre perdre la wave prio (priority — quitter la lane sans gérer ses minions) ou marcher dans un combo garanti. Dans tous les cas, tu gagnes le trade.
