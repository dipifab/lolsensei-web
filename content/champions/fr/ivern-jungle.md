---
title: "Ivern Jungle Build & Guide — Patch 16.9"
slug: "ivern-jungle"
language: "fr"
patch: "16.9"
champion: "ivern"
role: "jungle"
last_updated: "2026-05-05"
description: "Guide Ivern jungle pour League of Legends Patch 16.9 : clear pacifiste via groves, build enchanteur, setups de root au Q, contrôle avec Daisy, matchups clés."
quick_learn:
  champion_dd_id: "Ivern"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Enchanteur / Jungler de soutien"
  abilities:
    - key: "P"
      name: "Friend of the Forest"
      description: "Ne peut ni attaquer ni être attaqué par les monstres de jungle (sauf épiques comme Drake/Baron). Plante des groves sur les camps qui libèrent les monstres une fois mûrs."
      dd_spell_id: "Ivern_Passive"
    - key: "Q"
      name: "Rootcaller"
      description: "Skillshot linéaire long qui root le premier ennemi touché. Les alliés qui attaquent la cible rootée dashent dessus. Réactive pour dasher toi-même."
      dd_spell_id: "IvernQ"
    - key: "W"
      name: "Brushmaker"
      description: "Passif : dans un buisson, les autos font des dégâts magiques bonus (toi et alliés proches). Actif : crée un buisson n'importe où pour vision et zone de dégâts."
      dd_spell_id: "IvernW"
    - key: "E"
      name: "Triggerseed"
      description: "Bouclier sur un allié (ou Daisy). Après 1.5s le bouclier explose, inflige des dégâts magiques et slow les ennemis proches. Sans cible touchée, le bouclier se renouvelle."
      dd_spell_id: "IvernE"
    - key: "R"
      name: "Daisy!"
      description: "Invoque Daisy, un golem allié tanky. Son troisième auto consécutif sur la même cible déclenche un knockup. Réactive pour la repositionner."
      dd_spell_id: "IvernR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "6616", name: "Staff of Flowing Water" }
    - { dd_id: "3107", name: "Redemption" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "contre CC mono-cible chaîné sur ton ADC (Morgana Q, Ashe R, Lissandra R)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contre comps AOE engage (Amumu R, Yasuo + Malphite, Wukong R)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "quand la menace principale adverse est un CC magique longue distance sur toi"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contre assassins mobiles qui dive la backline (Kha'Zix, Zed, Akali, Talon)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contre comps heal-stacking (Soraka, Yuumi, Aatrox, Vladimir)"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "Crée des picks au Q depuis la fog, bouclie ton meilleur carry au E pendant le fight, et drop Daisy derrière la front line pour que son knockup nettoie les cibles rootées. Spike fort au niveau 6."
  weakness: "Ne peut pas faire 1v1 contre champions : autos faibles, kit sans escape. Recovery lent si ta jungle est invade avant deux groves ; un Q whiff en gank brûle tout le setup."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8214
      name: "Summon Aery"
      icon_path: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery primary : Summon Aery accompagne chaque bouclier E et proc aussi sur Q root pour des dégâts magiques bonus. Manaflow Band soutient le mana pour E continu, Transcendence pousse l'ability haste au-dessus de 40, Scorch ferme les fenêtres de poke en skirmish."
    secondary_rationale: "Resolve secondary : Font of Life se déclenche sur chaque Q root — ton ADC heal en attaquant la cible rootée, transformant un setup en burst plus sustain. Revitalize amplifie les boucliers Aery et le refund de E sans cible touchée."
    secondary_alternative: "S'il faut plus d'uptime de Flash en teamfights longs et que ton ADC apporte déjà du sustain, swap Resolve pour Inspiration avec Biscuit Delivery (mana et HP early) et Cosmic Insight (summoner spell haste, Flash et Smite plus rapides)."
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "vel-koz"]
      archetype: "Carries immobiles sans dash"
      reason: "Un Q depuis la fog les fixe ; le dash auto de l'ADC sur la cible attaquée ferme le gap avant qu'ils puissent flash, surtout quand Daisy arrive pour le follow-up knockup."
    - examples: ["master-yi", "warwick", "shyvana"]
      archetype: "Junglers auto-attack scaling"
      reason: "Le système de groves d'Ivern saute complètement le fight des camps ; pendant que les adversaires moulent des autos sur les monstres, Ivern bouclie déjà les lanes et pose des roots avec son ADC dès le niveau 5."
  counterpicks:
    - examples: ["lee-sin", "graves", "nidalee"]
      archetype: "Invaders early game"
      reason: "Ivern ne peut pas faire de 1v1 : le W a besoin de buisson, le Q n'a pas d'escape. Une invasion pré-3 détruit ses groves et le force à un clear défensif qui snowball le lead XP/or adverse pour toute la partie."
    - examples: ["kha-zix", "rengar"]
      archetype: "Assassins mobiles qui dive le carry"
      reason: "Ils sautent par-dessus le peel d'Ivern et arrivent sur le carry ; le bouclier E se consume vite sous burst, et son seul hard CC est un Q à windup lent que les dashes esquivent avant l'impact."
    - examples: ["amumu", "zac"]
      archetype: "Tanks AOE hard-engage"
      reason: "Leurs chaînes R-Flash attrapent une équipe groupée dans un seul cône ; un seul bouclier E ne couvre pas plusieurs cibles, et le knockup du troisième auto de Daisy arrive trop tard pour sauver la backline."
---

## Aperçu

Ivern est un jungler pacifiste — et ce seul mot change tout dans sa façon de jouer. Sa passive lui interdit purement et simplement d'attaquer les monstres de jungle, donc il n'échange jamais d'autos dans un camp. À la place, il plante une graine **Brushmaker (W)** sur chaque camp, s'en va, et y revient plus tard pour trouver les monstres libérés avec leur or et leur XP complets. Le trade-off : pendant qu'un jungler classique fait son full clear, Ivern bouclie ses alliés, gate la vision sur la rivière avec un buisson actif et traverse la map pour des ganks niveau 3 qui arrivent avant que tout autre jungler ne soit même sur la map.

Son game plan, c'est enchanteur, pas assassin. Tu touches **Rootcaller (Q)** depuis la fog of war (brouillard de guerre), ton ADC dash sur la cible rootée grâce au proc d'auto-attack, tu lui pose **Triggerseed (E)** pendant qu'il engage, et au niveau 6 tu poses **Daisy! (R)** derrière la ligne ennemie pour que son troisième auto consécutif déclenche un knockup garanti. Le kit n'a pas d'escape et les autos tapent peu — si tu fight 1v1 contre un champion, tu perds. Reste dans la fog, reste près d'un coéquipier, et laisse ton équipe porter les dégâts pendant que toi tu portes les setups.

## Build Recommandé

**Starting items :** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Ivern est ranged (475 d'attack range), donc Hailblade est correct par rapport à Emberknife. Smite reste obligatoire : tu en as besoin pour Drake, Baron et Voidgrubs même si tu ne smite jamais un camp normal.

**Core items (dans l'ordre) :**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade depuis Hailblade (auto-évolue vers la minute 3-4 quand l'XP est suffisante). Companion pour AP burst : ajoute un proc de dégâts magiques sur l'auto post-cast, qui s'empile sur le bonus buisson du W.
2. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — mythic. Tes boucliers et heals empilent un effet en chaîne qui ramp le healing à chaque proc consécutif — idéal pour un enchanteur qui bouclie, slow et re-bouclie toutes les 7-11 secondes.
3. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — l'ability haste maintient Q et E quasiment toujours up.
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — quand le E bouclie un allié, le passif du Censer lui donne attack speed et dégâts magiques on-hit. Se cumule avec le bonus buisson du W quand l'ADC fight dans ou près du buisson.
5. ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** — second trigger de bouclier. Donne à l'allié bouclié AP et ability haste extra pendant quelques secondes.
6. ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — heal/dégâts globaux actifs avec cast de 5 secondes : drop sur un fight regroupé pour faire basculer les barres de HP.

**Situational items :**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — quand l'adversaire enchaîne du CC mono-cible long sur ton ADC (Morgana Q, Ashe R, Lissandra R). Le cleanse actif maintient le carry en vie plus longtemps qu'aucun bouclier ne le pourrait.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contre les comps AOE hard-engage (combo Amumu R + Yasuo R, Wukong R). L'actif bouclie plusieurs alliés à la fois, ce qu'un seul E ne peut pas.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — quand un assassin mobile (Kha'Zix, Zed, Akali, Talon) te chasse explicitement. La stasis te fait survivre au dive le temps que Daisy peel.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contre les comps heal-stacking (Soraka, Yuumi, Aatrox, Vladimir). Tes dégâts magiques appliquent la coupure de heal et tu cast assez souvent pour la garder permanente.

**Boots :** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** par défaut. ![Boots of Swiftness](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3009.png) **Boots of Swiftness** sont acceptables quand les slows partout (Twitch, Ashe, Ahri W) s'empilent sur toi ; la perte d'ability haste est réelle, à prendre uniquement quand la mobilité est vraiment le problème.

**Skill order :** Max **E** d'abord (le bouclier scale fort, le slow coupe les dives), **Q** ensuite (cooldown plus bas = plus de roots), **W** en dernier (le passif scale avec les rangs mais tu ne mets des points que quand il ne reste plus rien). Mets **R** aux niveaux 6, 11, 16.

**Runes :** Primary **Sorcery** avec **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Resolve** avec **Font of Life** et **Revitalize**.

## Matchups clés

- **Lee Sin / Graves :** Hard counter. Tous les deux invade ta jungle pré-3 et tu perds chaque 1v1. Démarre près de ta lane la plus forte (où l'allié peut rotate pour fight 2v2) et place des wards dans tes raptors et red side. S'ils invade, retreat et laisse ton laner punir depuis la fog : jamais duel.
- **Master Yi / Warwick :** Easy. Ils moulent des autos sur les camps les premiers niveaux pendant que tu sautes le fight grâce aux groves ; tu arrives sur les gank lanes avec un niveau de plus. Une fois Daisy online, son knockup interrompt le R de Warwick et stoppe Yi en plein Alpha-Strike.
- **Karthus :** Course au spike niveau 6. Lui global dès la min 6, toi tu root et drop Daisy dès la min 6. Le premier kill décide qui scale ; si tu touches un Q early sur lui au Scuttle, ton équipe enroule les 10 minutes suivantes.
- **Kha'Zix :** Évite-le dans la fog. Il isole les cibles squishy pour bonus damage — cette cible, c'est toi. Ward le côté safe de ta jungle, group avec ton équipe pour les obj et ne path jamais seul en fog non wardée après la minute 8.
- **Vi :** Matchup égal décidé par la prio mid lane. Sa chaîne Q-Flash-R bypass ton Q, mais si ton mid laner a la prio elle ne peut pas dive librement. Ward sa route de flank et pre-bouclie l'ADC dès que tu vois l'animation de charge de son Q en vision.

## Power spikes & conditions de victoire

- **Niveau 3-4 (cycle de groves complet) :** Une fois deux camps mûrs et libérés, tu as égalé le clear d'un jungler normal en environ 60% du temps. Utilise le surplus pour walk vers une lane avec ton Q prêt avant que le jungler adverse ne soit niveau 4.
- **Niveau 6 (Daisy! online) :** Le premier **R** débloque le kit. Daisy est un body tanky en fight et son knockup au troisième auto est un outil d'engage garanti. Cherche un pick gratuit sur un side-laner juste après le 6.
- **![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) Moonstone Renewer terminé (~ minute 11-13) :** Les chaînes shield/heal commencent à ramp. Dans tout fight de plus de 4 secondes, ton output de healing dépasse celui de tout enchanteur de la map, sauf Soraka.
- **Power spike 3 items (Moonstone + Boots + Ardent ou Staff, ~ minute 19-21) :** Force les fights pour les objectifs. Ton ADC bouclié tape plus fort et plus vite que celui d'en face, et Daisy R prend une minute pleine de cooldown — tu veux fight chaque fois qu'elle est up.

## Erreurs courantes

- **Smite des camps normaux.** Tu ne peux pas — la passive le désactive. Garde Smite uniquement pour Drake, Baron, Voidgrubs et les rares vols cross-jungle sur le red/blue ennemi quand ils sont sur le point de le prendre. Smite gaspillée sur une animation de grove c'est un throw.
- **Attaquer toi-même la cible rootée.** Quand tu Q quelqu'un, ce n'est pas toi qui dash — c'est l'ADC, automatiquement, en attaquant. Réactive Q seulement si tu veux vraiment dive (rare) ; sinon recule et bouclie l'allié qui engage.
- **Cast W en fight au lieu des lanes.** Le buisson vaut le plus en lane pour la vision permanente et la zone de dégâts sur la wave ; en plein fight ce n'est qu'un outil de vision. Pré-place W en tri-bush avant un gank, pas après.
- **Drop Daisy à max range.** La valeur de Daisy est dans le knockup au troisième auto, qui n'arrive que si elle atteint sa cible. R dans le fight, derrière la ligne ennemie — pas à 1500 unités "pour faire des dégâts".
- **Tenter de peel contre AOE engage avec un seul bouclier E.** Le E bouclie un allié à la fois. Contre Amumu R + Yasuo R qui prennent quatre joueurs, il te faut le Locket of the Iron Solari. Prévois cet item dès que tu vois le draft.

## Conseil avancé

Utilise le **placement actif du buisson W** pour falsifier la fog côté positionnement de l'ADC. Drop un buisson au bord du range d'un ward adverse — ils voient que tu le poses mais ne voient pas qui entre dedans. Fais entrer ton carry dans le buisson, puis tire un Q à travers la lane : les ennemis ne peuvent pas dodge un skillshot tiré derrière un brush wall qu'ils ne traversent pas visuellement. C'est le même trick qui rend les duos Ivern/Caitlyn early une des combinaisons de laning les plus snowball du jeu, et ça scale avec le completion d'items parce que les autos du carry bouclié deviennent des marteaux Ardent-empowered directement depuis le buisson.
