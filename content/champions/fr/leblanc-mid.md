---
title: "LeBlanc Mid Build & Guide — Patch 16.9"
slug: "leblanc-mid"
language: "fr"
patch: "16.9"
champion: "leblanc"
role: "mid"
last_updated: "2026-05-05"
description: "Guide LeBlanc mid pour League of Legends Patch 16.9 : build AP burst assassin, combos Sigil double-tap, matchups clés, spike au niveau 6 et erreurs courantes."
quick_learn:
  champion_dd_id: "Leblanc"
  difficulty: 4
  damage_type: "magic"
  champion_class: "AP Assassin / Burst Mage"
  abilities:
    - key: "P"
      name: "Mirror Image"
      description: "Quand LeBlanc passe sous 40% PV, elle devient invisible 1 seconde et fait apparaître un clone qui imite ses mouvements jusqu'à 8s. Outil de bait défensif, pas de dégâts."
      dd_spell_id: "Leblanc_Passive"
    - key: "Q"
      name: "Sigil of Malice"
      description: "Sort single-target qui frappe et marque la cible 3,5s. Une seconde source de dégâts sur la marque détone le sigil pour le vrai burst. Rend du mana et une partie du cooldown si Q tue."
      dd_spell_id: "LeblancQ"
    - key: "W"
      name: "Distortion"
      description: "Dash vers un point et dégâts à l'arrivée. En 4s tu peux relancer pour revenir au point de départ. Engage avec W1, escape avec W2 — savoir retarder sépare un pick propre d'un throw."
      dd_spell_id: "LeblancW"
    - key: "E"
      name: "Ethereal Chains"
      description: "Skillshot qui enchaîne le premier ennemi touché. S'il reste enchaîné 1,5s (sans flash, sans dash, sans minion break) il est rooted et subit des dégâts bonus. Setup principal pour détoner Q."
      dd_spell_id: "LeblancE"
    - key: "R"
      name: "Mimic"
      description: "Relance la dernière capacité de base avec dégâts boostés. Permet double Q pour le burst plein, double W pour engage plus sûr ou double E pour lock. R ne reset pas les CD : ajoute un cast extra."
      dd_spell_id: "LeblancR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
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
    - { dd_id: "4646", name: "Stormsurge" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3135", name: "Void Staff" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contre divers et assassins (Zed, Diana, Talon, Akali) : la stase laisse attendre leur burst puis finir au Mimic-Q"
    - dd_id: "3152"
      name: "Hextech Rocketbelt"
      against: "premier item alternatif si tu veux un dash en plus du W : burst extra et charge qui s'ajoute à W pour engage depuis le fog"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contre magic CC single-target qui tue l'engage (Annie stun, Lissandra R, Ahri charm, TF stun) : le spell shield mange le premier"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "alternative à Void Staff face à des équipes avec 2+ items MR (Mercury's Treads + Banshee's, ou comp anti-AP)"
  base_combo: ["W", "Q", "AA", "E", "R-Q"]
  win_condition: "Snowball mid au poke de Q pré-6, puis convertis le niveau 6 en kill sur un squishy avec W-Q-AA-R-Q. Roam side lanes dès que R est up ; pickoff au W in / W out."
  weakness: "Squishy sans défense hors W de retour. Falloff en late : les scalers avec sustain (Kassadin, Cassiopeia) la dépassent après la minute 25. Lock-la avec hard CC avant le burst et elle meurt instantanément."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
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
    primary_rationale: "Domination primary : Electrocute proc à chaque Q-AA-E (3 hits en 3s) et ajoute du burst gratuit par-dessus la détonation du Sigil. Sudden Impact donne du magic pen après chaque W, et Ultimate Hunter rogne des secondes au R pour que le double Q revienne plus vite entre les roams."
    secondary_rationale: "Sorcery secondary : Manaflow Band règle le mana serré du early pour spam Q sans back, et Transcendence pousse l'ability haste au-delà de 40% pour baisser les CD de W et R sur des trades répétés."
    secondary_alternative: "Contre des lanes qui out-pokent (Xerath, Vel'Koz) swap Sorcery pour Inspiration : Magical Footwear (boots gratuites ~min 12) + Cosmic Insight (haste extra sur Flash pour des combos W-Flash plus serrés)."
matchup_draft:
  pick_into:
    - examples: ["veigar", "annie", "twisted-fate"]
      archetype: "Mages immobiles sans dash fiable"
      reason: "Sans capacité de mouvement ils n'échappent pas à la détonation W-Q-AA, et la cage de Veigar est un cercle que tu contournes au W."
    - examples: ["lux", "syndra"]
      archetype: "Mages artillerie squishy à longs cooldowns"
      reason: "Si tu survis au premier poke de Q, all-in quand leur sort de setup est down — Lux Q et Syndra E sont des fenêtres de 12-13s à punir."
    - examples: ["seraphine", "karma"]
      archetype: "Enchanters mid sans escape dur"
      reason: "Leurs shields retardent mais n'arrêtent pas la deuxième détonation de Q ; W in par-dessus le shield, Q encore avec R, et la kill confirme avant le sustain."
  counterpicks:
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "Mages artillerie longue portée"
      reason: "Leurs sorts touchent à 1100-1500 unités, bien au-delà de ton Q à 700 ; ils te shovent hors range XP et tu ne peux pas all-in derrière leur CC."
    - examples: ["kassadin", "cassiopeia"]
      archetype: "Mids late-scaler qui te dépassent"
      reason: "Survis ton spike 6-9 et ils te passent en dégâts bruts et mobilité ; le R de Kassadin après 11 esquive ta fenêtre W-Q-R, la zone grounded de Cassiopeia coupe le W de retour."
    - examples: ["lissandra", "galio"]
      archetype: "Mid laners au lockdown fiable"
      reason: "Q-W de Lissandra ou W taunt de Galio te clouent sur place pendant le saut ; LeBlanc n'a pas de Cleanse et ses PV fondent dès qu'elle s'arrête."
---

## Aperçu

LeBlanc est une AP burst assassin : un champion conçu pour exploser une seule cible squishy en 1-2 secondes (cette courte fenêtre de gros dégâts s'appelle "burst"). Chaque combat tourne autour de sa passive, **Sigil of Malice (Q)** — Q tape un petit coup et marque la cible, puis toute seconde source de dégâts sur la marque détone le sigil pour le vrai burst. Le rythme classique "double-tap" : Q pour marquer, puis auto-attack ou **E** pour détoner.

Le game plan : poke avec Q en lane (cooldown de 6 secondes, tu la spam), explose un squishy au niveau 6 avec W-Q-AA-R-Q, puis roam (quitter ta lane pour intervenir ailleurs) en side lane dès que R est up. LeBlanc est à son pic du minute 8 au minute 25 ; après ça, mages de scaling et bruisers la rattrapent. Prévois toujours la sortie — **Distortion (W)** sert à engage *et* disengage, mais seulement si tu retardes le recast pour la fuite, pas juste pour confirmer la kill.

## Build Recommandé

**Starting items :** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 Health Potions. L'anneau règle le mana regen pour spammer Q en lane.

**Core items (dans l'ordre) :**

1. ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — spike de burst avec dégâts magiques bonus on-hit et proc de movement speed sur takedown. S'aligne parfaitement avec la combo Q-AA-E : chaque détonation déclenche aussi Stormsurge.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plate (tes sorts ignorent une part de la Magic Resist ennemie). Upgrade direct contre les squishies.
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra quand l'ennemi est sous ~40% PV (passive à seuil de PV : ne s'active qu'une fois la cible passée sous cette ligne). S'empile avec le Mimic Q pour one-shot les ADC.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicateur late-game sur toute ton AP. Ton plus gros slot de dégâts en absolu.
5. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — magic penetration en pourcentage quand les ennemis commencent à acheter de la MR ; garde ton scaling contre les cibles plus tanky.

**Situational items :**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contre divers et assassins (Zed, Diana, Talon, Akali). L'active de stase te rend invulnérable ~2,5s, le temps d'attendre leur burst puis de finir au Mimic Q.
- ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** — premier item alternatif si tu veux un dash en plus ; s'empile avec W pour un engage plus long depuis le fog of war (zones de la map sans vision).
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contre magic CC single-target (Annie stun, Lissandra R, Ahri charm, Twisted Fate stun). Le spell shield bloque la première capacité lancée sur toi.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — alternative à ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** quand ton équipe a plus besoin de l'aura de soin que du burst pur.

**Boots :** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** par défaut. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** sont corrects face à 2+ menaces de hard CC (Annie + Galio, Lissandra + Leona).

**Skill order :** Max **Q** d'abord (poke et dégâts principaux), **W** ensuite (cooldown réduit sur le dash d'engage/escape et plus de dégâts à l'impact), **E** en dernier (la durée du root scale avec le rank, mais le CD pèse moins en burst). Un point en **R** aux niveaux 6, 11, 16.

**Runes :** Les runes sont des bonus passifs choisis avant le match ; tu prends un primary tree (5 runes) et un secondary tree (2 runes). Primary **Domination** avec **Electrocute** comme keystone — proc (l'effet de la rune s'active) quand tu touches une cible avec trois capacités ou auto-attacks en 3 secondes, ce que Q-AA-E couvre sans effort. Ajoute **Sudden Impact** (plus de magic pen après un dash de W), **Sixth Sense** pour la pression de vision en roam, et **Ultimate Hunter** pour réduire le CD de R afin que le double Q revienne plus vite. Secondary **Sorcery** avec **Manaflow Band** (sustain mana pour spam Q) et **Transcendence** (ability haste — tes capacités reviennent plus vite). Stat shards : deux Adaptive Force + Health Scaling.

## Matchups clés

- **Annie :** Pré-6 tu out-trade au poke de Q. Post-6 elle a son stun prêt (sa passive clignote "Pyromania" sur son portrait à 4 charges) et une chaîne avec Tibbers te tue. Achète ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** en troisième item si elle snowball (transforme un petit avantage initial en avantage bien plus gros) early.
- **Twisted Fate :** Course au roam. Il choisit la lane à gank avec **R**, mais perd la lane en direct — Q chaque fois qu'il s'avance pour last-hit et zone-le (contrôle l'espace autour) hors de la wave. Track ses windups de **R** avec des vision wards (objets posables qui donnent vision dans une zone) sur la river.
- **Kassadin :** Hard counter de scaling. Pré-6 tu le poke au Q (il n'a aucune réponse avant le 6) ; après 11 son **R** dash plus vite que ton W de retour et il t'out-trade. Gagne la lane avant minute 14 ou appelle ton jungler deux fois.
- **Xerath :** Il t'out-range. Sa **Q** porte à 1500 unités (ta Q à 700). Reste derrière la wave de minions, esquive sa **Q** sur le côté, et ne commit que quand il est low mana — sa Q coûte 80-100 mana, 5 Q ratées et il est sec.
- **Diana :** Égal pré-6 (tu l'out-poke), losing post-6 si elle land son **R**. Achète ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** après ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** si elle a 2+ kills ; la stase gâche son ulti combo.

## Power spikes & conditions de victoire

- **Niveau 2 (Q + W) :** Premier vrai spike. Q-AA-W2 est un pattern poke-and-leave : dash in au W, Q, auto-attack pour détoner le Sigil, recast W pour fuir. Sers-t'en pour zoner l'adversaire hors de la deuxième wave.
- **Niveau 6 :** Ton premier **R** est le plus gros spike ponctuel du match. Mimic-Q sur une cible marquée ajoute environ 200-250 dégâts au 6 avec un item ; contre un squishy à 65% PV, la combo complète W-Q-AA-R-Q confirme la kill avant qu'il puisse Flash.
- **![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) Stormsurge fini (~ minute 11-13) :** Le seuil de burst monte de 80-100 dégâts par hit. Roam en side lane au W dès que ta wave est poussée sous la tour mid adverse.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minute 23-26) :** Multiplicateur sur tous les autres items AP. Après ça tu one-shot tout squishy à travers Banshee's Veil au W-Q-R-Q-E. Force les fights autour des objectifs (Drake, Baron) et cherche les picks sur la backline (éliminer le carry adverse isolé de son équipe).

## Erreurs courantes

- **W in pour la kill sans garder le W2.** La fenêtre de recast de Distortion est de 4 secondes seulement. Si tu lâches toute la combo en une seconde puis restes plantée 3 secondes au milieu de l'équipe adverse, leur support t'attrape et tu meurs. Prévois toujours : W in, dégâts, W out — le retour fait la différence entre un pick propre et un throw (une mort évitable qui donne du momentum à l'adversaire).
- **Détoner le Sigil avec un autre Q.** Q ne détone pas sa propre marque — seule une *seconde* source de dégâts détone. Les nouvelles LeBlanc cast Q deux fois en attendant de gros chiffres ; il faut Q + auto-attack, ou Q + E, ou Q + R-Q. Le pattern : marquer-puis-détoner, jamais marquer-puis-marquer.
- **Cast R-W en premier réflexe.** Le W mimicé a un range double, mais te place deux fois plus profond dans le danger. Mimic Q sur une cible marquée est presque toujours le bouton kill ; mimic W ne sert qu'aux chases et aux escapes.
- **Push la lane sans roam.** Une fois ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** et **R** en poche, ta valeur est en side lane. Si tu continues à farm mid pendant qu'une side meurt, tu gâches le pick. Push la wave, ping "j'arrive" et passe par **W** dans le fog pour pick le side laner.
- **Build des items bruiser contre une équipe squishy.** LeBlanc n'a pas de sustain de kit — les items qui échangent burst contre durabilité gâchent son toolkit. Reste sur ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** + ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** sauf si l'équipe adverse a 3+ tanks.

## Conseil avancé

Le combo "W-Flash" est l'engage surprise signature de LeBlanc. Cast **W** vers la cible et, pendant la toute petite fenêtre du dash, presse **Flash** — Flash te porte 400 unités au-delà du point d'atterrissage du W, et les dégâts du W s'appliquent à la nouvelle position. Le range total W + Flash bat la plupart des setups counter-CC (stun d'Annie, binding de Lux, taunt de Galio W) parce que tu couvres la distance plus vite qu'ils ne peuvent réagir. Garde **R** pour le second cast : une fois à courte portée, R-Q sur la cible marquée finit la kill avant que leur support ne peel (protège son carry). L'astuce, c'est le buffer : presse Flash tout au début du dash de W, pas à la fin, sinon W s'annule et le burst est gâché.
