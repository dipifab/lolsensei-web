---
title: "Galio Mid Build & Guide — Patch 16.9"
slug: "galio-mid"
language: "fr"
patch: "16.9"
champion: "galio"
role: "mid"
last_updated: "2026-05-02"
description: "Guide Galio mid lane pour League of Legends Patch 16.9 : starter kit, build AP-tank, matchups clés, power spikes, erreurs courantes et un conseil avancé final."
quick_learn:
  champion_dd_id: "Galio"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Battlemage / Engage Tank"
  abilities:
    - key: "P"
      name: "Colossal Smash"
      description: "Toutes les quelques secondes, la prochaine attaque de base de Galio inflige des dégâts magiques bonus dans une petite zone à l'impact."
      dd_spell_id: "Galio_Passive"
    - key: "Q"
      name: "Winds of War"
      description: "Deux rafales convergent en tornade au point ciblé, infligeant des dégâts magiques sur la durée. Outil principal de waveclear et de poke."
      dd_spell_id: "GalioQ"
    - key: "W"
      name: "Shield of Durand"
      description: "Charge un bouclier qui absorbe les dégâts magiques ; relâche pour taunt et damage les ennemis proches. Charge longue — ne tire jamais à vide."
      dd_spell_id: "GalioW"
    - key: "E"
      name: "Justice Punch"
      description: "Recule brièvement puis dash en avant, projetant en l'air le premier champion ennemi touché. Engage et gap-close principal."
      dd_spell_id: "GalioE"
    - key: "R"
      name: "Hero's Entrance"
      description: "Désigne un allié ; après un délai, Galio s'écrase sur sa position, bouclant les alliés dans la zone et projetant les ennemis en l'air."
      dd_spell_id: "GalioR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
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
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "4629", name: "Cosmic Drive" }
  situational_items:
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "contre front lines à beaucoup de PV (deux tanks ou plus type Cho'Gath, Sion, Dr. Mundo) — burn % qui monte en combat long"
    - dd_id: "3041"
      name: "Mejai's Soulstealer"
      against: "quand tu snowball tôt (3+ kills avant la minute 12) — AP bon marché par stack qui récompense les engages agressifs"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "swap dès qu'une cible prioritaire achète un item de MR ; couple avec Sorcerer's Shoes pour pen mixte"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contre assassins avec follow-up après ton engage (Zed, Talon) — la stasis couvre la fenêtre de cooldown post-R"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contre CC magique single-target qui te bloque en charge W (Malzahar suppress, Lissandra R, Twisted Fate stun)"
  base_combo: ["E", "AA", "Q", "W"]
  win_condition: "Utilise Hero's Entrance R depuis le mid pour retourner les side lanes et skirmishes Drake une fois Riftmaker fini. En teamfight, E sur la back line, lâche W, et laisse ta front line collapser sur les cibles lockées."
  weakness: "W a une charge longue (1.5s) et E une animation de pas en arrière — toutes deux interrompables. Les assassins mobiles et le poke DOT bypassent le bouclier W, qui absorbe le burst, pas les ticks constants."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8401, name: "Shield Bash", icon_path: "perk-images/Styles/Resolve/MirrorShell/MirrorShell.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8242, name: "Unflinching", icon_path: "perk-images/Styles/Sorcery/Unflinching/Unflinching.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve : Aftershock proc sur W ou knockup R, pic de résistances quand tu es focus. Shield Bash convertit W en damage bonus on-attack, Bone Plating absorbe le premier burst, Unflinching ajoute tenacity pour ne pas être lock par le CC."
    secondary_rationale: "Sorcery secondaire : Manaflow Band garde la mana pour spam Q en lane (Galio est gourmand en mana avant Riftmaker), et Transcendence pousse l'Ability Haste pour que Q et E reviennent plus vite entre les fights."
    secondary_alternative: "Dans les matchups de mana-war (Cassiopeia, Cho'Gath) où la lane est une stat-war PV, swap Sorcery pour Inspiration avec Biscuit Delivery (PV et mana gratuits au niveau 6) plus Cosmic Insight (réduction CD Flash — meilleur catch potential avec combo R+Flash)."
matchup_draft:
  pick_into:
    - examples: ["lux", "anivia", "veigar"]
      archetype: "Mages d'artillerie immobiles"
      reason: "Le knockup E de Galio ferme la distance sur laquelle leur range repose, et W absorbe le burst de leurs sorts à long cooldown comme Lux R ou Veigar R."
    - examples: ["ahri", "syndra"]
      archetype: "Burst mages mid-range sans sustain"
      reason: "Son bouclier magique W coupe l'essentiel de leur combo damage ; quand leur burst est en cooldown ils ne peuvent pas duel un frame AP-tank."
    - examples: ["caitlyn", "ashe", "jhin"]
      archetype: "Carries bot immobiles atteignables avec R"
      reason: "Hero's Entrance atterrit sur un allié ; les ADC sans dash n'échappent pas au knockup et ton bot collapse pour la kill."
  counterpicks:
    - examples: ["akali", "zed", "fizz"]
      archetype: "Assassins courte portée à dashes multiples"
      reason: "Le shroud d'Akali casse le target lock de W, et les chaînes de dash de Zed/Fizz finissent le trade avant que W ne sorte de charge — le meilleur CC de Galio est sur un tell lent qu'ils dépassent."
    - examples: ["cassiopeia", "malzahar"]
      archetype: "Damage magique DOT et lockdown point-and-click"
      reason: "Le bouclier W absorbe le burst, pas les dégâts constants par tick ; la R de Malzahar suppress Galio en charge W et annule tout l'outil d'engage."
    - examples: ["yasuo", "yone"]
      archetype: "Utilisateurs de Wind Wall"
      reason: "Le Wind Wall de Yasuo bloque entièrement les rafales Q de Galio, supprimant son seul outil de pression à distance en lane."
---

## Aperçu

Galio est un battlemage AP (ability power, dégâts magiques) avec un scaling tank — il devient plus fort à la fois avec l'AP et avec les PV. Il est construit autour de l'interruption de l'équipe ennemie et de l'absorption des dégâts magiques qu'ils balancent sur ta front line (les tanks/bruisers devant). Son kit est court mais bruyant : **Winds of War (Q)** pour le waveclear et le poke (chip damage à distance), **Shield of Durand (W)** pour un taunt chargé (force l'ennemi à t'attaquer un instant) qui sert aussi de bouclier magique, **Justice Punch (E)** pour knockup (projection brève en l'air, comme un court stun) le premier ennemi traversé par le dash, et **Hero's Entrance (R)** pour téléporter sur un allié avec combo knockup-bouclier. Il joue mid parce qu'il a besoin de la position centrale pour menacer des rotations R sur chaque lane.

Le plan de jeu est patient jusqu'au niveau 6, puis explosif. Push la wave avec Q, garde E pour un counter-engage ou le gap-close sur ton propre gank, et une fois R disponible, surveille les side lanes — chaque fight bot ou top est dans ton range. La skill expression réside dans le timing de charge W (relâche pour interrompre un channel clé — Katarina R, Karthus R, Master Yi Q) et dans la visée du E (le dash ne touche que le **premier** champion sur son chemin, donc tu peux pick une cible de back line en marchant par une side lane).

## Build Recommandé

**Items de départ :** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Prends ![Corrupting Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2033.png) **Corrupting Potion** seulement face à un Q-spammer melee qui te force à back tôt par manque de mana.

**Items core (dans l'ordre) :**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — premier slot. Donne AP, PV, ability haste (réduction de cooldown sur chaque sort) et une rampe d'omnivamp (te soigne d'un pourcentage des dégâts infligés, qui monte plus le combat dure) qui transforme les longs fights en self-sustain. Le taunt W de Galio force plusieurs cibles à l'attaquer, ce qui alimente l'omnivamp.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — pénétration magique fixe (un montant retiré à la résistance magique de l'ennemi, donc tes sorts tapent plus fort). Achète-les sauf si l'équipe ennemie a 3+ menaces AD (champions à dégâts physiques) ; dans ce cas swap sur ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**.
3. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — slow sur chaque tick de Q. Combine avec Riftmaker pour que l'équipe ennemie ne puisse pas disengage de ton range de taunt, et les PV qu'il donne te gardent tank-shaped.
4. ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — movement speed et ability haste. Ferme la distance avec les cibles back-line que ta R ne touche pas directement, et baisse le cooldown de Q/E pour re-engage entre teamfights.

**Items situationnels :**

- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — contre front lines à PV empilés (deux tanks ou plus type Cho'Gath, Sion, Dr. Mundo). Brûle un pourcentage de leurs PV par tick de Q.
- ![Mejai's Soulstealer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3041.png) **Mejai's Soulstealer** — uniquement avec une avance de kills tôt (tu snowball — chaque kill te rend plus fort et plus susceptible d'avoir le suivant). Trois kills ou plus avant la minute 12 fait que les maths fonctionnent ; si tu meurs une fois et perds tes stacks, l'item est gâché.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — swap dès qu'une cible prioritaire achète un item de Magic Resist comme ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil**, ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature**, ou ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** sur un fighter.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contre assassins avec follow-up de kill-pressure après ton engage (Zed, Talon). La stasis couvre la fenêtre de cooldown quand W et E sont down.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contre CC magique single-target qui interrompt ton W mid-charge (Malzahar suppression, Lissandra R, Twisted Fate stun).

**Bottes :** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** par défaut. Prends ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contre les comps à beaucoup de CC (multiples stuns, roots, charms), ou ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** contre les compositions auto-attack lourdes (deux AD carries, Master Yi).

**Skill order :** Max **Q** en premier (damage principal et waveclear). Max **E** en second (cooldown plus bas sur l'engage). Max **W** en dernier — ses dégâts par tick et la valeur du bouclier scalent peu comparé au rank-up de Q. Point dans **R** aux niveaux 6, 11, 16.

**Runes :** Primaire **Resolve** avec **Aftershock**, **Shield Bash**, **Bone Plating**, **Unflinching**. Secondaire **Sorcery** avec **Manaflow Band** et **Transcendence**. Swap secondaire vers **Inspiration** (Biscuit Delivery + Cosmic Insight) dans les lanes mana-war.

## Matchups clés

- **Akali :** Lane dure. Son shroud (W) fait perdre le target lock de W et E à Galio. Reste à max range Q, garde ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** sur ta liste de courses, et utilise R pour roam — elle ne peut pas égaler ton impact en side lanes.
- **Yasuo / Yone :** Wind Wall bloque entièrement tes rafales Q. Garde Q jusqu'à ce qu'ils push leur mur, hold E pour counter-engage quand ils all-in. Build ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** tôt pour survivre à la fenêtre auto-attack.
- **Lux :** Favorable. Tu marches à travers son binding Q et dash sur elle avec E — ses cooldowns sont trop longs pour des trades soutenus, et W bouclie le poke de sa R.
- **Cassiopeia :** Difficile. Ses dégâts DOT bypassent l'absorption burst de W. N'essaie pas l'all-in pré-6 ; farm sous tour avec Q et cherche à roam au niveau 6.
- **Twisted Fate :** Course aux roams. Il égale le range de ta R avec son propre teleport. Push la wave, ping bot/top quand son ult sort de cooldown, et sois prêt à counter-R sa rotation plutôt que d'initier la tienne.

## Power spikes & conditions de victoire

- **Niveau 2 :** Avec Q + W tu as ton premier trade all-in. Charge W au moment où l'ennemi marche sur ton tornado Q et marche dans lui — le taunt force l'auto-attack sur toi pendant que les ticks Q finissent.
- **Niveau 6 :** **Hero's Entrance** débloque l'impact en side lane. Push la wave fort, ping ton bot lane, et cherche le premier dragon fight.
- **Riftmaker complété (~ minute 12-14) :** Galio devient une vraie pièce de teamfight. Force les fights d'objectif ici — ton omnivamp de R-en-W-en-E te permet d'absorber la première vague de cooldowns ennemis et de survivre.
- **Spike trois items (~ minute 22-26) :** Avec ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker**, ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** et ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter**, ton slow tornado plus le knockup E enchaînent 1.5+ secondes de CC sur une back line qui ne peut pas te kite.

## Erreurs courantes

- **Tirer W sans cible.** Le taunt ne se déclenche que si un champion est en melee range au release. Charge W en marchant *vers* une cible, pas sur une ward vide.
- **Utiliser R pour le first engage quand l'équipe n'a pas de follow-up.** Hero's Entrance donne un knockup, mais si ton équipe est en repositionnement quand tu atterris, l'ennemi s'en va. Attends qu'un CC allié (Ashe R, Lulu Q, Pantheon Q) atterrisse en premier, puis R sur lui.
- **Ignorer le waveclear pré-6.** La Q de Galio est l'un des outils de waveclear AOE les plus longs en mid ; ne pas push signifie céder la prio dont tu as besoin pour utiliser R sur des roams.
- **Max W en second.** La valeur du bouclier scale avec le rank mais le cooldown ne baisse que marginalement. Max E te donne un E à 4 secondes de cooldown au niveau 13, ce qui se traduit directement en plus de fenêtres d'engage.
- **Riftmaker en premier contre une comp sans tank.** Si l'ennemi est 4-AD (Yasuo + 2 ADC + Talon), les stats tank sont gâchées. Achète ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** en premier — le burn pressure leur back line squishy.

## Conseil avancé

Le knockup E ne touche que le **premier** champion ennemi sur le chemin du dash — utilise ça pour pick une cible. Si la front line ennemie est entre toi et leur carry, contourne par les bushes latéraux (ou flank depuis la fog) pour que la ligne de E clip le carry en premier alors que la front line est du mauvais côté de toi. Le même truc fonctionne après l'atterrissage de ta R : si le knockup finit et que tu E immédiatement depuis l'arrière de la formation ennemie, tu re-knock la cible back-line pendant que leur tank récupère encore.
