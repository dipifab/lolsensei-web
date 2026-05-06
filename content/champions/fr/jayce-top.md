---
title: "Jayce Top Build & Guide — Patch 16.9"
slug: "jayce-top"
language: "fr"
patch: "16.9"
champion: "jayce"
role: "top"
last_updated: "2026-05-04"
description: "Guide Jayce top pour League of Legends Patch 16.9 : mécaniques de weapon-swap, build lethality, matchups clés, power spikes, erreurs courantes et astuce avancée."
quick_learn:
  champion_dd_id: "Jayce"
  difficulty: 4
  damage_type: "mixed"
  champion_class: "Fighter / Skirmisher"
  abilities:
    - key: "P"
      name: "Hextech Capacitor"
      description: "Chaque weapon swap (R) donne à Jayce un court burst de Movement Speed et lui permet d'ignorer brièvement la collision avec les unités."
      dd_spell_id: "Jayce_Passive"
    - key: "Q"
      name: "To the Skies! / Shock Blast"
      description: "Hammer : saut sur la cible, dégâts physiques et ralentit les ennemis proches. Cannon : skillshot AOE longue portée — outil principal de poke."
      dd_spell_id: "JayceToTheSkies"
    - key: "W"
      name: "Lightning Field / Hyper Charge"
      description: "Hammer : passive qui rend du mana sur les autos, active une aura de dégâts. Cannon : Attack Speed max sur les 3 prochaines attaques — fenêtre de burst."
      dd_spell_id: "JayceStaticField"
    - key: "E"
      name: "Thundering Blow / Acceleration Gate"
      description: "Hammer : knockback courte portée infligeant des dégâts magiques en % HP max — outil d'execute et de disengage. Cannon : pose un gate qui accélère les alliés et amplifie une Q (Shock Blast) tirée à travers."
      dd_spell_id: "JayceThunderingBlow"
    - key: "R"
      name: "Mercury Cannon / Mercury Hammer"
      description: "Stance swap (cooldown 6s). Alterne entre Hammer (engage, sustain, knockback) et Cannon (poke, AOE waveclear). La première attaque après le passage en Cannon réduit l'Armor et la Magic Resist de la cible."
      dd_spell_id: "JayceStanceHtG"
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
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6697", name: "Hubris" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contre fortes menaces AP (Vladimir, Rumble, Kennen) : bouclier magique sauve du burst et donne de l'AD"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contre CC dur single-target d'engage (Camille E, Sett W, Malphite R) : le spellshield bloque le lockdown"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "quand tu es devant et focus : la résurrection permet de committer plus dans les skirmish"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap depuis Plated Steelcaps si l'ennemi a 3+ menaces AP/CC ; tenacity réduit stuns et slows"
  base_combo: ["Q", "AA", "R", "Q", "AA", "E"]
  win_condition: "Utilise Cannon Q pour faire baisser les HP avant le niveau 6, puis all-in avec Hammer Q saut, W aura, E knockback sous 50%. Convertis l'avance de lane en pression de splitpush."
  weakness: "Mana hungry : une Q de poke ratée gâche le trade. Gap-closers durs (Camille E, Malphite R) ferment la distance avant le swap. Décline en late vs builds MR lourd."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Press the Attack proc par le pattern de trade Cannon Q + AA + Hammer Q-AA-E donne +8% de dégâts par skirmish. Triumph rend des HP en multi-takedown, Legend: Alacrity met l'AS au cap dans W (Hyper Charge), Coup de Grace ferme les kills sous 40% HP."
    secondary_rationale: "Sorcery secondaire : Manaflow Band évite la panne de mana sur le spam Cannon Q en lanes longues. Transcendence donne de l'Ability Haste pour que le weapon swap revienne plus vite — chaque Q en plus en lane, c'est des HP en moins pour l'ennemi."
    secondary_alternative: "Contre tops ranged à fort poke (Vladimir, Kennen, Quinn), swap Sorcery vers Resolve avec Bone Plating (réduit les 3 premiers coups reçus) et Second Wind (regen passif HP sous 50%) pour tenir la phase de lane."
matchup_draft:
  pick_into:
    - examples: ["nasus", "garen", "sett"]
      archetype: "Bruisers melee immobiles sans réponse à distance"
      reason: "Aucun moyen d'interagir avec la portée de Cannon Q. Pokes-les hors de la wave les 6 premiers niveaux : Nasus perd ses stacks de Q, Garen n'arrive jamais à Q, Sett ne remplit jamais sa barre de W (Haymaker)."
    - examples: ["yorick", "tryndamere"]
      archetype: "Scalers lents sans outils de harass en lane"
      reason: "Leur kill threat dépend des items. Cannon Q retire des minutes de farm avant leur power spike, et Hammer E knockback nie la fenêtre d'all-in quand ils tentent enfin de committer."
  counterpicks:
    - examples: ["malphite", "maokai"]
      archetype: "Tanks avec MR par item et ult d'engage"
      reason: "Ils itemize contre le poke Cannon (Bramble Vest, Negatron Cloak) et leur ult (Malphite R, Maokai R) flash-engage par-dessus le Hammer E knockback. Jayce décline si la lane traîne sans kill."
    - examples: ["vladimir", "kennen"]
      archetype: "Tops ranged avec sustain ou portée équivalente"
      reason: "La Q de Vladimir (Transfusion) heal le poke ; la W de Kennen (Electrical Surge) dépasse la portée de Cannon Q. Tous deux forcent une lane de poke que Jayce perd sans l'option d'all-in qu'il aurait contre un melee bruiser."
    - examples: ["camille", "renekton"]
      archetype: "Bruisers à CC dur et gap-close rapide"
      reason: "Camille E (Hookshot) et Renekton W (Ruthless Predator) ferment la distance dans la cast window de Cannon Q et lockdown Jayce avant qu'il puisse swap en Hammer E. Pas de dash pour les peel."
---

## Aperçu

Jayce est un skirmisher hybride ranged-melee qui vit ou meurt sur son weapon swap (R). En **Cannon stance**, c'est un spécialiste du poke longue portée avec une skillshot AOE Q et un movement-speed gate (E) qui amplifie la Q tirée à travers. En **Hammer stance**, il devient un melee bruiser avec leap-Q, aura W et un knockback (E) infligeant des dégâts magiques en % HP max. La R a 6 secondes de cooldown, et la première attaque après le passage en Cannon réduit l'Armor et la Magic Resist de la cible — le trigger d'entrée de chaque all-in.

En top lane, Jayce veut une lane longue. Érode les HP avec **Cannon Q + E gate** (poke à distance), recule à portée sûre, recommence. Quand l'ennemi est sous la moitié HP, swap en Hammer, saute avec **Q**, droppe **W** pour les dégâts d'aura et la passive mana-on-hit, finis avec **E** knockback s'il survit. Convertis chaque avance de lane en pression de splitpush — pousser une side lane seul pour forcer l'ennemi à répondre. La portée Cannon Q en side est l'un des splits les plus sûrs du jeu, et Eclipse + Hubris donnent le burst (gros dégâts en 1-2 secondes) pour gagner les skirmish 1v1 contre la plupart des top-laners.

## Build Recommandé

**Starting items :** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** dans les matchups poke-friendly. Switch sur ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** contre un top ranged (Vladimir, Quinn, Kennen) pour survivre aux premiers échanges Cannon Q.

**Core items (dans l'ordre) :**

1. ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — premier spike. Le bouclier proc avec deux abilités en 1.5s, condition que Jayce remplit naturellement avec Cannon Q + Hammer Q sur le swap. Donne AD, omnivamp (life-leech sur tous les dégâts) et Ability Haste.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots par défaut contre un top AD (la majorité du méta).
3. ![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) **Hubris** — lethality (stat qui ignore une part fixe de l'armure ennemie) plus une passive (Eminence) qui empile des stacks à chaque takedown (kill ou assist) et fait croître les dégâts d'une kill aux suivantes. Idéal en deuxième item quand tu es devant.
4. ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — lethality et slow on damage. Le slow sur Cannon Q transforme les ennemis en fuite en cibles à catch pour Hammer Q.

**Situational items :**

- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contre menaces AP (Vladimir, Rumble, Kennen). Le bouclier magique sauve quand le burst arrive et ajoute de l'AD.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contre CC dur single-target d'engage (Camille E, Sett W, Malphite R). Le spellshield se charge hors combat et bloque la prochaine abilité de lockdown (CC dur qui t'immobilise).
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — quand tu es devant et focus. La résurrection permet de committer plus dans les skirmish ; si tu échanges une vie pour deux, tu reviens en prendre une troisième.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap depuis Plated Steelcaps si l'équipe ennemie a 3+ menaces AP ou CC ; la tenacity passive réduit la durée des stuns et slows.

**Boots :** Plated Steelcaps par défaut. Mercury's Treads contre dégâts magiques lourds ou chain CC.

**Skill order :** Maxe **Q** en premier (la source principale de dégâts dans les deux stances), **E** ensuite (knockback pour execute, gate pour amplifier le poke), **W** en dernier. Mets un point en **R** aux niveaux 6, 11, 16.

**Runes :** Primaire **Precision** avec **Press the Attack**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secondaire **Sorcery** avec **Manaflow Band** et **Transcendence**. Contre tops ranged à fort poke, swap pour **Resolve** avec **Bone Plating** + **Second Wind**.

## Matchups clés

- **Darius :** Pré-6, kite-le (recule en attaquant, hors de sa portée) avec Cannon Q et n'entre jamais dans le ring extérieur de sa Q (Decimate). Le Hammer E knockback annule le reset de sa W (Crippling Strike) avec le bon timing ; une fois repoussé sous tour, il perd tout kill threat.
- **Camille :** Gagne post-6 quand sa E (Hookshot) est up. Track le cooldown de sa E : quand elle est down, freeze la wave (tiens la ligne de minions devant ta tour sans pousser) et chip ses HP avec Cannon Q. Quand elle est up, garde ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** chargé.
- **Malphite :** Lane gagnable jusqu'à ce qu'il complète ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** plus un item armure, après ça la Cannon Q le chatouille. Gagne la lane dans les 12 premières minutes ou accepte un scaling loss ; envisage de rusher des items de teamfight pour les skirmish en side.
- **Fiora :** Bait sa W (Riposte) en feintant Hammer Q — démarre l'animation du saut, puis arrête. Quand sa W est en cooldown, all-in avec la combo Hammer complète. Si tu Q dans sa W, tu perds une abilité avec 16s de cooldown pour rien.
- **Vladimir :** Le matchup le plus dur du pool standard. Sa Q heal à travers ton poke Cannon et sa W (Sanguine Pool) esquive le Hammer E knockback. Demande des ganks tôt au jungler avant qu'il ait 2 items, puis évite les teamfights et splitpush en side (pousser une side lane seul pour forcer l'ennemi à répondre) au lieu de te regrouper.

## Power spikes & conditions de victoire

- **Niveau 2 (Q + W ou Q + E) :** Cannon Q + AA + swap en Hammer Q est un trade de 35-40% HP sur la plupart des squishies. Si l'ennemi avance pour last-hit un melee minion, balance la combo et back off ; le Move Speed passif sur le swap te sort avant qu'il puisse répondre.
- **Niveau 6 (premier rank de R) :** Les deux stances unlock à plein. L'all-in Cannon-to-Hammer devient un kill threat à 40% HP au lieu d'un chunk trade.
- **![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) Eclipse complétée (~ minute 11-13) :** Premier gros spike. Bouclier + omnivamp permettent de committer dans des trades plus longs ; tu n'as plus à te disengager après un seul cycle Cannon-Hammer.
- **![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) Hubris online (~ minute 19-22) :** Les stacks d'Eminence (la passive d'AD bonus sur takedown) commencent à snowball (avantage croissant : kill → AD bonus → plus de kills). Force une skirmish en side pour stacker Eminence, puis rote sur les objectifs à dégâts pleins.

## Erreurs courantes

- **Lancer Cannon Q sans setup.** La Q nue coûte cher en mana et est facile à esquiver. Droppe d'abord la **E** (Acceleration Gate) vers l'ennemi ; le gate amplifie la Q qui le traverse (portée plus longue, plus de dégâts), et le léger délai force l'ennemi à committer à une direction de mouvement avant que tu tires.
- **Swap en Hammer trop tôt.** Si tu swap avant que l'ennemi soit sous ~50% HP, tu commits à un fight melee sans le burst pour finir. Reste Cannon jusqu'à atteindre le seuil de chip damage, puis swap et all-in.
- **Oublier le shred R-Cannon sur la première attaque.** Quand tu swap en Cannon (R), ton premier AA réduit Armor et Magic Resist. Brûler ce proc sur un minion, c'est jeter des dégâts gratuits ; garde-le toujours pour un champion.
- **Splitpush sans R disponible.** La R a 6 secondes de cooldown mais c'est ton seul outil d'escape — le speed boost sur swap. Splitpush dans un gank 4v1 avec R en cooldown, c'est mourir. Traite la R comme un dash à long cooldown quand tu évalues le risque.
- **Ignorer les coûts de mana en trades étendus.** La Hammer W a une passive qui rend du mana sur les autos ; si tu restes Cannon en trade long, ton pool se vide. Swap en Hammer pour 2-3 autos en milieu de trade pour recharger, puis swap pour finir en Cannon.

## Conseil avancé

Maîtrise le **R-cancel** à la fin de Hyper Charge (Cannon W). Quand tu presses Cannon W, tu obtiens Attack Speed max sur 3 attaques — mais si tu swap en Hammer (R) immédiatement après que la troisième attaque touche, tu skip l'animation d'auto-recovery et démarres ton saut Hammer Q un quart de seconde plus tôt. C'est la différence entre rattraper une cible en Flash et la voir s'échapper avec 5 HP. Entraîne-toi en Practice Tool sur un target dummy jusqu'à ce que le timing devienne mémoire musculaire avant de l'amener en ranked.
