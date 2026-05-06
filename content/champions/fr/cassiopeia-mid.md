---
title: "Cassiopeia Mid Build & Guide — Patch 16.9"
slug: "cassiopeia-mid"
language: "fr"
patch: "16.9"
champion: "cassiopeia"
role: "mid"
last_updated: "2026-05-01"
description: "Guide Cassiopeia mid lane pour League of Legends Patch 16.9 : kit de départ, build mage, matchups clés, power spikes, erreurs courantes et astuce finale."
quick_learn:
  champion_dd_id: "Cassiopeia"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Battlemage"
  abilities:
    - key: "P"
      name: "Serpentine Grace"
      description: "Passif qui amplifie tout le bonus de Move Speed reçu par Cassiopeia depuis les items, runes et sa Q. Les bottes scalent plus fort sur elle que sur les autres mages."
      dd_spell_id: "Cassiopeia_Passive"
    - key: "Q"
      name: "Noxious Blast"
      description: "AOE ciblée au sol qui détone après un court délai et applique Poison. Toucher un champion donne un burst de Move Speed pour chase ou kite."
      dd_spell_id: "CassiopeiaQ"
    - key: "W"
      name: "Miasma"
      description: "Mur de nuages toxiques qui ralentit et applique ground aux ennemis dedans. Les grounded perdent dashes, blinks et sorts de mouvement — outil anti-mobility principal."
      dd_spell_id: "CassiopeiaW"
    - key: "E"
      name: "Twin Fang"
      description: "Sort à très court cooldown (0.75s) qui inflige des dégâts bonus aux cibles Poisoned et soigne Cassiopeia. Refund mana sur takedown. Bouton DPS principal."
      dd_spell_id: "CassiopeiaE"
    - key: "R"
      name: "Petrifying Gaze"
      description: "Cône frontal : les ennemis qui la regardent sont stun ~1.5s ; ceux qui regardent ailleurs ne sont que ralentis. Vise pile en face pour le lock complet."
      dd_spell_id: "CassiopeiaR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
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
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contre les burst assassins (Zed, Talon, Akali) : la stasis 2.5s laisse revenir la E et donne le temps au peel"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contre les CC magiques single-target qui coupent la E (Ahri charm, Lissandra R, Twisted Fate gold card)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contre les compos avec soins empilés (Soraka mid, Vladimir, Dr. Mundo top) : Grievous Wounds cap lifesteal/regen"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap dans le slot Shadowflame dès qu'une cible prioritaire achète un objet de Résistance Magique"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "contre les compos melee qui te marchent dessus : chaque E refresh un slow, peel pour la backline en plus du ground W"
  base_combo: ["Q", "W", "E", "E", "E"]
  win_condition: "Empile les dégâts Liandry's sur les cibles empoisonnées via le E spam (cd 0.75s) pendant que W bloque les dashes. Pose R pile en face niveau 6 pour convertir la prio en kills, puis scale en battlemage frontline."
  weakness: "Portée 700 sans dash, sans blink, sans escape. Les mages d'artillerie la dépassent au poke ; les ganks pré-6 avec hard CC ferment la lane avant qu'elle scale. Sans mana si la E rate."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8230
      name: "Stormraider's Surge"
      icon_path: "perk-images/Styles/Sorcery/PhaseRush/StormraidersSurgeRuneIcon2.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery bat Domination/Precision : Stormraider's donne le burst de Move Speed (3 procs rapides) que le kit n'a pas. Manaflow alimente la E à 40 mana, Transcendence pousse l'Ability Haste, Gathering Storm scale au-delà du burst d'Electrocute en late."
    secondary_rationale: "Inspiration en secondaire : Biscuit Delivery couvre mana et HP dans la laning phase rude avant Liandry's, Cosmic Insight raccourcit les cooldowns de Flash et des actives d'item en teamfight."
    secondary_alternative: "Contre du gros poke ou burst (Xerath, Syndra, Zed), swap Inspiration pour Resolve avec Second Wind (regen contre harass ranged) et Bone Plating (encaisse les 3 premiers coups d'un combo all-in)."
matchup_draft:
  pick_into:
    - examples: ["yasuo", "yone", "akali", "irelia", "zed"]
      archetype: "Mid laners basés sur le dash"
      reason: "Miasma les ground dans le nuage : dès qu'ils mettent un pied dedans, dashes, blinks et sorts de mouvement sont coupés. Leur kit s'effondre face à un champion qui leur enlève leur principal outil de fuite."
    - examples: ["karthus", "veigar", "anivia"]
      archetype: "Mages immobiles sans escape"
      reason: "Cassiopeia gagne les trades longs contre quiconque doit rester immobile pour caster : la E (cd 0.75s) inflige plus de dégâts sur cibles empoisonnées que leurs rotations complètes, et ils ne peuvent pas dodge la W posée sur eux."
    - examples: ["renekton", "sett"]
      archetype: "Bruisers melee qui doivent te coller"
      reason: "Sans dash long, ils doivent marcher 700 unités à travers W et la Q poison pour te toucher. Twin Fang te remet à full HP à chaque trade."
  counterpicks:
    - examples: ["xerath", "vel-koz", "ziggs", "lux"]
      archetype: "Mages d'artillerie longue portée"
      reason: "Ils outpoke Cassiopeia au-delà des 850 de portée Q. Sans dash, elle ne peut pas réduire la distance, donc chaque wave lui coûte des HP. Sa courbe de power exige du farm de lane qu'elle ne peut pas prendre en sécurité."
    - examples: ["twisted-fate", "galio", "ryze"]
      archetype: "Roamers globaux / cross-map"
      reason: "Cassiopeia est ancrée à mid (pas de roam rapide). L'adversaire utilise son ult pour basculer les sidelanes et drakes ; elle gagne son 1v1 mais perd la macro (les échanges d'objectif qui se jouent ailleurs sur la map)."
    - examples: ["lissandra", "syndra"]
      archetype: "Mages burst avec CC chain-lock"
      reason: "Ils lock Cassiopeia avant que la W ne les ground, puis lui sortent la full combo. La R de Lissandra est point-and-click — Banshee's aide mais ne sauve pas d'une chaîne de stun de 6s avec follow-up jungle."
---

## Aperçu

Cassiopeia est une battlemage (mage qui combat à mi-distance, pas du fond) à environ 700 unités de portée — juste au-delà des basic auto-attack. Elle gagne les trades longs (échanges de dégâts en lane) contre presque tous ceux qui ont besoin d'un dash pour l'atteindre. Sa **Twin Fang (E)** a un cooldown de 0.75 seconde — le plus court de tous les mid laners — donc dès que **Noxious Blast (Q)** empoisonne une cible, elle devient un flux de dégâts continu qui la soigne aussi. **Miasma (W)** est sa signature : les ennemis dans le nuage sont *grounded*, donc dashes, blinks et sorts de mouvement cessent de fonctionner tant qu'ils n'en sortent pas. Pick-la contre des assassins mobiles (kits construits autour du dash, type Yasuo, Akali, Zed) et tu leur prends leurs outils.

Son game plan est court à décrire et lent à exécuter : empoisonne la wave (la ligne de minions) avec **Q**, spam **E** pour clear et harass, pose **W** dès qu'un adversaire à dash engage (s'engage dans le fight), puis vise **R** pile en face niveau 6 — le cône stun ceux qui te regardent et ralentit seulement les autres. Elle n'a pas de dash, pas de blink, aucun équivalent de mouvement dans sa barre, donc le positionnement est le prix de chaque play. Un pas de trop en avant et le kit s'effondre dans une seule chaîne de CC (suite de stuns et roots enchaînés). **CC** = "crowd control", tout effet qui t'interrompt : stun, root, slow, silence.

## Build Recommandé

**Items de départ :** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Cassiopeia est mana-hungry (chaque E coûte du mana et elle en cast beaucoup) et le mana regen de Doran's est exactement ce dont le E spam a besoin.

**Items core (dans l'ordre d'achat) :**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — premier item complet. Le passif burn (dégâts répartis dans les secondes après chaque coup, au lieu de tout d'un coup) s'empile sur chaque cible empoisonnée que ta E touche, ce qui sur Cassiopeia veut dire presque chaque cast.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic pen plate (l'item ignore une part de la Résistance Magique adverse, donc tes sorts tapent plus fort). Le passif Serpentine Grace amplifie aussi le Move Speed des bottes.
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — le plus gros multiplicateur d'AP (Ability Power, la stat qui scale les dégâts magiques) du jeu. Boost les dégâts par cast de la E que tu lances 30+ fois en teamfight long.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — magic pen qui scale plus fort quand l'ennemi passe sous 35% HP (passif à seuil de HP : effet qui s'active sous un % de vie). S'aligne avec finir les backline carries (les damage dealers squishys, comme ADC et mages, que ton équipe doit tuer en priorité).

**Items situationnels :**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contre les burst assassins (Zed, Talon, Akali — champions qui infligent énormément de dégâts en 1-2 secondes). La stasis active 2.5s (tu deviens invulnérable mais ne peux plus bouger ni cast) laisse à la **E** le temps de revenir et à tes alliés celui de peel (bloquer les ennemis loin de toi).
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contre les CC magiques single-target qui te coupent la E (charm d'Ahri, R de Lissandra, gold card de Twisted Fate).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contre les compos qui empilent les soins (Soraka mid, Vladimir, Dr. Mundo top) : applique Grievous Wounds (debuff qui coupe les soins adverses environ de moitié), cap lifesteal (HP récupérés sur les dégâts infligés) et regen.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — swap dans le slot Shadowflame dès qu'une cible prioritaire (l'ennemi que ton équipe doit tuer en premier — souvent leur carry principal) achète un objet de Résistance Magique.
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — contre les compos melee qui essaient de te marcher dessus. Chaque E refresh un slow sur la cible, peel (protection) pour ta backline en plus du ground de W.

**Bottes :** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** par défaut. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** (bottes qui donnent de l'Ability Haste, ce qui réduit les cooldowns) sont acceptables si tu veux plus d'uptime sur **W** pour garder les dashes adverses bloqués pour l'équipe.

**Skill order :** Maxe **E** en premier (bouton DPS principal), **Q** en second (poison et Move Speed), **W** en dernier. Mets un point dans **R** aux niveaux 6, 11 et 16.

**Runes :** Arbre primaire **Sorcery** avec keystone **Stormraider's Surge** (un keystone est la rune principale en haut de l'arbre ; "proc" veut dire déclencher l'effet de la rune — Stormraider's proc après 3 hits de sort rapprochés), **Manaflow Band**, **Transcendence**, **Gathering Storm**. Secondaire **Inspiration** avec **Biscuit Delivery** et **Cosmic Insight**, ou **Resolve** avec **Second Wind** et **Bone Plating** contre du gros poke (chip damage longue portée qui érode tes HP).

## Matchups clés

- **Yasuo / Yone :** Kit plein de dashes. Leur troisième Q est un dash avec knock-up — la première fois qu'ils te sautent dessus, pose **W** sous tes pieds. Ils restent collés sans mouvement, le **E** spam gagne. Garde **R** pour leur ult, qu'ils prennent pile en face avec stun.
- **Zed :** Threat champion. Achète ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** en deuxième item complet s'il prend l'ascendant. Pose **W** sous toi à l'instant où il cast son ult (il te marque et téléporte sur un shadow clone) ; s'il atterrit derrière toi, le téléport du swap est *grounded* par W et il ne peut plus s'enfuir.
- **Xerath :** Matchup dur. Il poke au-delà de la portée de ta **Q** (te chip les HP depuis une distance où tu ne peux pas riposter). Cède du CS (creep score : l'or des minions tués) sous tour et cherche un roam (quitter la lane pour aider un allié) côté bot niveau 6 — le combattre en lane ne fait que te coûter des HP pour rien.
- **Akali :** Avant le 6 tu gagnes les trades longs avec E spam sur cibles empoisonnées. Après le 6 son smoke shroud (W) la cache et casse la cible de la E. Ward les flancs et ne push pas trop loin sans **R** prête.
- **Twisted Fate :** Tu peux gagner la lane, pas la map. Il te stun avec sa gold card, ult sur botlane et transforme la game en cross-map fight (un kill loin de l'endroit où tu es) sur lequel tu n'as aucun impact. Push la wave dès qu'elle revient et ping ta botlane chaque fois que sa **R** revient du cooldown.

## Power spikes & conditions de victoire

- **Niveau 2 :** Avec **Q** plus un point en **E**, tu as ta première boucle empoisonne-puis-tape. Avance quand leur wave (ligne de minions) est plus grosse que la tienne et force un trade.
- **Niveau 6 :** **Petrifying Gaze (R)** se débloque. Une **R** frontale courte distance stun ~1.5 seconde, largement assez pour enchaîner le combo plein **Q-W-E-E-E**. Force un fight sur le rebond de wave (le moment où la ligne de minions cesse d'avancer et revient vers toi).
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment terminé (~ minute 11-13) :** Ton E spam applique maintenant un burn (dégâts dans le temps) en plus des dégâts du coup. Tu shove les waves deux fois plus vite et tu pressures les fenêtres de roam du mid laner adverse.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap en ligne (~ minute 24-28) :** Les dégâts par cast de la E scalent énormément (gagnent beaucoup de power avec cet item). Cherche à ancrer les teamfights mid autour des objectifs (Drake, Baron, tours) — Cassiopeia en late combat plus en avant que les autres mages, presque comme une seconde frontline.

## Erreurs courantes

- **Cast E sans poison sur la cible.** **Twin Fang** inflige des dégâts magiques normaux sur cible nette et des dégâts bonus seulement sur cible empoisonnée. Toujours **Q** (ou W) d'abord, puis E spam — jamais l'inverse.
- **Garder W pour l'engage parfait.** **Miasma** est aussi défensive. Dès que Yasuo cast W (le wind wall qui bloque les projectiles) ou qu'Akali ult, pose **W** sous toi. Le ground annule leurs sorts de mouvement même si ton équipe n'est pas prête à follow-up.
- **Viser R à l'aveugle.** **Petrifying Gaze** ne stun que les ennemis qui te regardent. De côté ou de dos, tu ne fais que les ralentir et tu gaspilles le cooldown. Avance devant le fight, puis tourne-toi et tape R.
- **Push au-delà de la rivière sans vision.** Cassiopeia n'a aucun escape. Sans un ward (objet de vision posé sur la map) dans le bush rivière, un seul gank du jungler adverse (une *embuscade*) avec hard CC (longs stuns ou roots, par opposition au soft CC qui n'est qu'un slow) ferme ta lane.
- **Ignorer le mana dans les 5 premières minutes.** Chaque E coûte 40 mana flat, peu importe le rang. La cast en boucle sur les minions avant Manaflow Band te vide la barre en deux waves et te laisse sans défense face à un all-in (engagement total pour te tuer).

## Conseil avancé

Entraîne-toi à poser **W (Miasma)** *sous tes propres pieds* à l'instant où un dash te touche, pas devant toi. Le ground s'applique dès que le nuage atterrit — si Yasuo, Yone ou Akali engagent en melee, ils sont pile sur le nuage qui apparaît et perdent immédiatement l'accès à leur deuxième dash. La plupart des Cassiopeia continuent de cast W devant elles comme un sort de poke, et ratent l'usage défensif qui arrête sur place la majorité des all-in d'assassin.
