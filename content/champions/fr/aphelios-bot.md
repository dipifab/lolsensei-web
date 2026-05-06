---
title: "Aphelios Bot Build & Guide — Patch 16.9"
slug: "aphelios-bot"
language: "fr"
patch: "16.9"
champion: "aphelios"
role: "bot"
last_updated: "2026-04-29"
description: "Guide Aphelios bot lane League of Legends Patch 16.9 : rotation des armes, build marksman core, matchups clés, power spikes, erreurs typiques et astuce technique."
quick_learn:
  champion_dd_id: "Aphelios"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Marksman / Weapon Swap"
  abilities:
    - key: "P"
      name: "The Hitman and the Seer"
      description: "Aphelios fait tourner 5 armes Lunari dans un ordre fixe puis variable. Il en porte 2 à la fois (main-hand + off-hand) ; chaque arme a des munitions limitées et force un swap quand elle est vide."
      dd_spell_id: "Aphelios_Passive"
    - key: "Q"
      name: "Weapon Abilities"
      description: "L'activée change avec la main-hand : tir longue distance (Calibrum), sprint AoE avec lifesteal (Severum), root sur tous les ralentis (Gravitum), cône (Infernum), tourelle sentinelle (Crescendum)."
      dd_spell_id: "ApheliosCalibrumQ"
    - key: "W"
      name: "Phase"
      description: "Échange instantanément main-hand et off-hand. Cooldown court : chaque cast retourne ton profil de dégâts (range, lifesteal, AoE, slow, attack speed)."
      dd_spell_id: "ApheliosW"
    - key: "E"
      name: "Weapon Queue System"
      description: "Aphelios n'a pas de vraie troisième ability — ce slot affiche seulement la prochaine arme qu'Alune va lui passer. Sert à planifier les combos avec quelques armes d'avance."
      dd_spell_id: "ApheliosE"
    - key: "R"
      name: "Moonlight Vigil"
      description: "Explosion de clair de lune longue portée qui détone sur les champions touchés. Applique l'effet unique de la main-hand actuelle (mark shots Calibrum extra, AoE, lifesteal AoE, etc.)."
      dd_spell_id: "ApheliosR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "E" }
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
    - { dd_id: "3032", name: "Yun Tal Wildarrows" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contre frontlines tanky (Sion, Ornn, Malphite) : armor pen qui scale sur les HP bonus ennemis"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contre heal lourd (Soraka support, Yuumi, Vladimir, Aatrox) : applique Grievous Wounds, divise le heal par deux"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "quand il faut lifesteal et bouclier : remplace The Collector si 2+ assassins te ciblent"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contre burst AP fort (Syndra, Veigar, comp double mage) : bouclier à HP bas et Magic Resist"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "contre CC bloquant (suppression Malzahar, R Skarner, R Mordekaiser) : l'active nettoie le CC"
  base_combo: ["Q", "W", "R", "AA"]
  win_condition: "Atteins le two-item spike, puis cycle Calibrum + Gravitum dans les fights pour bloquer un target clé avec la W swap, R et la combo Q-root pendant que ton équipe commit l'engage."
  weakness: "Pas de dash, pas d'escape, et la mauvaise arme au mauvais moment gâche un fight. Décroche fort s'il est puni aux niveaux 1-3 avant de stack ammo et items."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["samira", "kalista", "yasuo"]
      archetype: "Marksmen courte portée obligés de commit"
      reason: "Calibrum (le fusil) dépasse leur fenêtre d'auto-attack : pour trade ils doivent rentrer et tu les punis avec le mark shot du Q. Ensuite la W swap vers Severum heal le chip damage qu'ils t'ont mis."
    - examples: ["karthus", "seraphine", "heimerdinger"]
      archetype: "Scalers bot lane immobiles"
      reason: "Gravitum (le canon) les ralentit à chaque auto, puis le Q root tous les targets ralentis d'un coup. Avec la R niveau 6 en follow-up, une cible immobile mange tout le burst avant de finir un channel."
    - examples: ["jinx", "kog-maw", "twitch"]
      archetype: "Marksmen hyper-scaling à early faible"
      reason: "Aphelios niveau 1-2 avec Calibrum gagne chaque trade contre quelqu'un dont la lane phase n'est que farm. Mets de la pression avant leurs 3 items pour qu'ils n'atteignent jamais leur pic late game."
  counterpicks:
    - examples: ["draven", "lucian", "tristana"]
      archetype: "Marksmen agressifs early-game"
      reason: "Leurs fenêtres niveau 1-3 sont brutales : cooldowns courts et damage base élevé punissent Aphelios alors que son Q a 9s de cooldown et que les munitions sont finies. Il ne peut pas trade back sans cramer l'ammo qu'il faut pour push la wave."
    - examples: ["leona", "nautilus", "pyke"]
      archetype: "Supports hard-engage"
      reason: "Aphelios a zéro mobilité (pas de dash, pas de blink). Une chaîne de CC du support et il meurt avant de pouvoir W-swap vers Severum pour heal ou cramer Flash. Le pick contre engage = le pick pour mourir."
    - examples: ["caitlyn", "senna", "jhin"]
      archetype: "Marksmen poke longue portée"
      reason: "Ils poke Aphelios à des distances où même Calibrum ne répond pas (traps + headshot Caitlyn, Q depuis la fog Senna, W root Jhin). Aphelios ne peut pas combler la distance, donc il saigne en HP sans pouvoir riposter."
---

## Aperçu

Aphelios est un marksman avec le kit théorique le plus long de League : 5 armes différentes qui tournent dans ses mains, chacune avec son propre basic attack et son propre **Q**. Tu n'en portes jamais que deux — une main-hand (qui dicte tes auto-attacks et ton **Q**) et une off-hand (qui tire périodiquement avec la main-hand). Chaque arme a des munitions finies (un nombre fixe de tirs) : quand elles s'épuisent, l'arme est jetée et Alune lui passe la suivante dans la queue. La maîtrise tient surtout à savoir quelle arme arrive ensuite et quelles deux tu veux actives au bon moment.

Le game plan, c'est de survivre à un early game fragile (pas de dash, pas d'escape, gestion d'ammo capricieuse) jusqu'à atteindre deux items, puis de snowball (transformer une avance précoce en avance plus grosse en gagnant plus de fights) à travers les skirmishes (petits fights de 2-4 joueurs, plus petits qu'un teamfight complet) en utilisant **Phase (W)** pour swap vers l'arme qui punit la situation : **Calibrum** (le fusil) pour le poke (grignoter les HP de l'ennemi de loin avec des dégâts à distance) et l'execute (achever les targets déjà à bas HP), **Severum** (le pistolet-faux) pour le sustain (se heal et survivre dans les fights longs), **Gravitum** (le canon) pour le lockdown (immobiliser un ennemi avec du CC assez longtemps pour le tuer), **Infernum** (le lance-flammes) pour le waveclear et l'AOE de teamfight (area of effect : dégâts sur une zone, pas sur une seule cible), **Crescendum** (le chakram) pour les spikes de DPS (pics de damage per second) au corps-à-corps.

## Build Recommandé

**Starting items :** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 1 Health Potion. Doran's Blade est le starter standard pour marksmen : petit boost d'Attack Damage (AD), un peu de HP et du lifesteal (tu te heal d'un pourcentage des dégâts infligés par auto-attacks). Aphelios a besoin de chaque point d'AD parce que ses armes consomment des munitions.

**Core items (dans l'ordre) :**

1. ![Yun Tal Wildarrows](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3032.png) **Yun Tal Wildarrows** — premier item meta DPS. Il donne du crit tôt (chance qu'un auto-attack inflige des dégâts bonus) et un passif de saignement sur les attaques (dégâts étalés sur les secondes suivantes au lieu d'être tous au coup), parfait pour les armes à tir rapide (Crescendum, Infernum).
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — bottes d'attack speed (plus d'autos par seconde). Default sur quasi toutes les games Aphelios parce que toutes ses armes profitent de l'attack speed bonus.
3. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — execute sous 5% HP plus Lethality (un type d'armor penetration qui ignore une partie de l'armure de la cible, surtout efficace contre les targets squishy — champions à faibles défenses comme ADC et mages). S'accorde avec les mark shots de Calibrum (les auto-attacks de Calibrum posent une "mark" sur l'ennemi : ré-attaquer la cible marquée inflige des dégâts bonus depuis n'importe où sur la map, **R** comprise) qui chunk déjà (infligent une grosse part de dégâts) les targets à bas HP.
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — multiplicateur de crit damage ; avec deux items crit déjà finis (Yun Tal + Collector ou Yun Tal + RFC), Infinity Edge débloque 175% de crit damage et tes auto-attacks doublent presque en burst (les dégâts sortis dans une fenêtre de 1-2 secondes).
5. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — range bonus sur l'auto-attack de Calibrum et sur le premier tir energized (RFC charge un auto "energized" toutes les quelques secondes en mouvement — cet auto part à range étendue et zappe la cible). Synergise avec le kite (reculer en attaquant, garder la distance avec les menaces).

**Swaps situationnels :**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — remplace Rapid Firecannon quand l'ennemi stack de l'armure (frontline Sion, Ornn, Malphite — frontline = les tanks/bruisers qui encaissent les dégâts devant pendant que les carries tirent par derrière).
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — même slot que Lord Dominik's, prends cette version quand l'équipe ennemie a du heal lourd (Soraka, Yuumi, Aatrox, Vladimir) : applique Grievous Wounds, qui divise le heal ennemi par deux.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — remplace The Collector quand il faut du sustain en game longue ou que l'équipe ennemie a deux assassins ciblant ta backline (le bouclier de 7 secondes à HP plein peut te sauver une fois par fight).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — slot tardif contre comps de burst AP lourd (Syndra + Veigar + Annie). Le bouclier déclenche sous seuil HP — c'est-à-dire quand tu passes sous 35% HP — et absorbe les dégâts magiques.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — swap de slot final quand une seule chaîne de CC (suppression Malzahar, R Skarner, R Mordekaiser) décide chaque teamfight contre toi.

**Skill order :** Maxe **Q** en premier (augmente les dégâts de l'activée de chaque arme), **W** en deuxième (swap plus rapide = plus de flexibilité par seconde), **E** en dernier. Mets **R** aux niveaux 6, 11, 16 comme d'habitude.

**Runes :** Arbre primaire **Precision** (construit autour des auto-attacks) : keystone **Lethal Tempo** (attack speed bonus en combat contre les champions), puis **Presence of Mind** (refund de mana sur takedowns — pertinent parce que le Q coûte de l'ammo), **Legend: Bloodline** (plus de lifesteal qui scale avec les kills), **Coup de Grace** (dégâts bonus aux targets à bas HP). Arbre secondaire **Resolve** avec **Second Wind** et **Overgrowth** contre les lanes de poke lourd (Caitlyn, Senna), ou **Inspiration** avec **Magical Footwear** et **Cosmic Insight** quand tu attends une lane passive.

## Matchups clés

- **Draven :** la lane la plus dure de la map. Il gagne chaque trade (un bref échange d'auto-attacks et d'abilities) niveaux 1-3 à chaque fois. Reste derrière ton support, last-hit uniquement à l'auto-attack (ne crame pas l'ammo Calibrum Q sur les minions), attends le niveau 6 pour égaliser le trade avec la **R**.
- **Caitlyn :** guerre de range. Ses traps + headshot la laissent poke (grignoter tes HP même hors range Calibrum). Swap vers **Gravitum** dès qu'elle s'approche d'une trap ; le slow (réduction de movement speed) plus le root du Q (effet qui bloque l'ennemi sur place, sans pouvoir bouger ni dash) annule sa fenêtre d'escape.
- **Samira :** elle veut te dive (foncer sous ta tour pour te tuer malgré les tirs de la tour). Garde **Severum** pour l'instant où elle entre en melee (range corps-à-corps d'auto-attack) — le Q AoE te heal du chip damage (dégâts petits mais constants qui rongent les HP) et le CC de ton support la tue si elle over-commit (avance trop loin et ne peut plus reculer).
- **Jhin :** lui poke plus pre-6, toi tu DPS plus post-6 (son poke à distance gagne early, tes dégâts soutenus gagnent après le niveau 6). Ne trade pas auto pour auto en lane (un "trade" = bref échange de coups — son W root et son crit du 4e tir définissent la lane) ; push le niveau 2 fort (force la wave sous sa tour) et recall (retourne à la base) sur la complétion du premier Yun Tal pour revenir devant.
- **Kalista :** elle est squishy et courte portée. Trade en autos avec **Calibrum** main + Severum off-hand ; sa chaîne de dashs la met dans ton range, et le mark shot du Q la punit chaque fois qu'elle saute.

## Power spikes & conditions de victoire

- **Niveau 2 :** avec une activée d'arme en plus, tu égalises les trades contre la plupart des ADCs. La majorité des games Aphelios se décident sur qui pose proprement l'all-in du niveau 2 (un fight engagé à fond pour la kill, sans plan de repli).
- **Niveau 6 avec Calibrum :** la première **Moonlight Vigil** avec le fusil en main-hand tire des mark shots extra à longue distance. Si la bot lane ennemie est shove sous ta tour (leur wave a été pushée près de ta tour, les laissant en position vulnérable), la fenêtre **R** + Q execute depuis l'autre bout de l'écran est une kill offerte pour un support attentif.
- **![Yun Tal Wildarrows](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3032.png) Yun Tal Wildarrows fini (~ minute 12-14) :** la lane priority bascule (tu deviens la lane qui peut partir aider les fights ailleurs sans perdre de CS ni de HP). Tu peux shove (push ta wave vers la tour ennemie) et contester drake, ton DPS en skirmish spike fort (ton damage per second saute d'un cran net à cet item).
- **Spike 3 items (Yun Tal + Berserker's + The Collector vers minute 22-25) :** un "spike" est un saut de puissance net lié à un palier de niveau ou d'item. Aphelios est maintenant le marksman avec le DPS soutenu le plus haut du jeu. Force les fights d'objectifs ici (objectifs = Dragon, Baron, Rift Herald, towers — cibles neutres qui donnent des buffs d'équipe ou de la pression de map) et reste à range max Calibrum pendant que ta frontline tient la ligne.

## Erreurs courantes

- **Auto-attack les minions avec l'ammo du Q de Calibrum.** Garde l'ammo du Q pour les champions. Le Q de Calibrum est une de tes rares menaces longue portée ; le cramer sur une wave pour fast-push (forcer la wave à crash la tour ennemie le plus vite possible) ne vaut le coup que si tu recall sur le même back, sinon le trade que tu cèdes est énorme.
- **Oublier de tracker l'arme suivante en queue.** Le slot **E** affiche la prochaine arme. Vérifie toujours avant de commit : avancer en swappant vers **Severum** quand **Crescendum** est en queue derrière, c'est bon ; faire pareil avec **Gravitum** en attente, ça gâche la fenêtre d'all-in (les quelques secondes pendant lesquelles tu peux finir la kill).
- **Rester immobile en teamfight.** Aphelios n'a pas de dash. Si tu restes au même endroit deux secondes d'affilée, n'importe quoi de mobile (Zed, Diana, Camille) te delete. Strafe (bouge latéralement en attaquant) entre chaque auto-attack — petits pas, mais mouvement constant.
- **Utiliser la R dès qu'elle sort de cooldown.** La valeur de Moonlight Vigil dépend entièrement de l'arme en main-hand au moment du cast. **R** avec Crescendum sur une seule cible, c'est gâché ; **R** avec Infernum sur 4 ennemis groupés, c'est une quadra kill.
- **Picker Aphelios contre du hard engage.** C'est une erreur de draft, pas de gameplay — "engage" c'est l'outil d'un champion pour forcer un fight (ex. le Q stun de Leona, la R suppression de Malzahar). Si l'ennemi a Leona + Malzahar mid + Hecarim jungle, tu n'utiliseras aucune arme. Compense avec un setup Severum-friendly (un peeler — support dont le job est de te protéger des divers, type Lulu ou Janna).

## Conseil avancé

Apprends le timing du W-cancel sur **Phase** : mettre un swap en queue pendant un mark shot Calibrum te laisse tirer l'auto follow-up longue portée avec l'effet de la nouvelle arme (ex. swap vers Infernum et le follow-up devient un cône AoE). Ça transforme le mark shot Calibrum en burst multi-cible qu'aucun autre marksman ne peut répliquer, et c'est le plus gros avantage mécanique unique que tu as sur un Aphelios casual.
