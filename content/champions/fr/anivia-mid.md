---
title: "Anivia Mid Build & Guide — Patch 16.9"
slug: "anivia-mid"
language: "fr"
patch: "16.9"
champion: "anivia"
role: "mid"
last_updated: "2026-04-29"
description: "Guide complet Anivia mid lane pour League of Legends Patch 16.9 : starter kit, build control mage, matchups clés, power spikes, erreurs courantes et astuce finale."
quick_learn:
  champion_dd_id: "Anivia"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Control"
  abilities:
    - key: "P"
      name: "Rebirth"
      description: "Sur dégâts létaux, Anivia se transforme en œuf immobile pendant quelques secondes. Si l'œuf survit, elle revit à HP pleins. Long cooldown — ne le bait pas deux fois dans le même fight."
      dd_spell_id: "Anivia_Passive"
    - key: "Q"
      name: "Flash Frost"
      description: "Skillshot linéaire longue portée : une sphère de glace ralentit les ennemis sur sa trajectoire ; en bout de course elle explose et stun. Relance pour la déclencher plus tôt."
      dd_spell_id: "FlashFrost"
    - key: "W"
      name: "Crystallize"
      description: "Invoque un mur de glace infranchissable pendant quelques secondes. Bloque tout mouvement (le tien aussi) et les dashes qui le traversent."
      dd_spell_id: "Crystallize"
    - key: "E"
      name: "Frostbite"
      description: "Explosion ciblée à courte portée. Inflige le double de dégâts si la cible est Chilled par Q ou par une R fully formed."
      dd_spell_id: "Frostbite"
    - key: "R"
      name: "Glacial Storm"
      description: "Toggle au sol : tempête de glace qui ralentit et tick des dégâts magiques. Une fois pleinement formée, applique Chill, donc E fait double dégâts dans la zone."
      dd_spell_id: "GlacialStorm"
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
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contre divers et assassins (Zed, Akali, Diana) — la stasis couvre le gap jusqu'au retour de R"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contre les CC magiques single-target (Ahri charm, Lissandra R, Twisted Fate stun) qui interrompent la R"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contre les comps qui empilent les soins (Soraka, Vladimir, Aatrox) — R applique grievous wounds en zone"
    - dd_id: "3135"
      name: "Void Staff"
      against: "dès qu'une cible prioritaire termine son premier objet de Résistance Magique"
  base_combo: ["Q", "E", "R", "E"]
  win_condition: "Land Q à portée max pour Chill, E pour les dégâts doublés, puis pose R sous leurs pieds : tout ralenti mange une autre E empowered. Wall le reste de leur équipe pour que la kill ne soit pas interrompue."
  weakness: "Lente, pas de dash, base armor faible, mana hungry early. Q ratée, le trade est mort ; les divers t'atteignent avant la R fully formed. Wind Wall et silences ruinent tout le kit."
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
    - examples: ["veigar", "viktor", "lux"]
      archetype: "Immobile mages without escape"
      reason: "Les Q + W d'Anivia piègent les mages immobiles : ils ne peuvent pas dodge le chill enchaîné en E doublée, et n'ont aucun moyen de contourner le mur quand elle coupe leur wave."
    - examples: ["garen", "sett", "mordekaiser"]
      archetype: "Melee bruisers without ranged engage"
      reason: "Crystallize bloque toute ligne d'engage melee ; avec E pour shove et R pour clear la wave, elle farm en sécurité tandis qu'ils ne l'atteignent pas sans cramer leur Flash."
    - examples: ["malphite", "wukong", "kennen"]
      archetype: "Single-engage 5-man wombo comps"
      reason: "Crystallize coupe l'équipe adverse en deux sur l'engage ; si le mur passe entre l'initiateur et le follow-up, le wombo tombe sur une ou deux cibles, pas cinq."
  counterpicks:
    - examples: ["zed", "akali", "fizz", "leblanc", "talon"]
      archetype: "Mobile assassins with multiple gap-closers"
      reason: "Ils entrent dans la portée de E pendant ses cast windows ; sans dash et avec un seul œuf, une chaîne de dash la burst avant que R ne soit fully formed."
    - examples: ["yasuo"]
      archetype: "Projectile-blocking duelists"
      reason: "Wind Wall bloque la Q net (le chill ne touche jamais) et sa principale menace de dégâts s'effondre ; sans chill, la E est divisée par deux et la lane devient un melee fight qu'elle ne peut pas gagner."
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "Long-range artillery mages"
      reason: "Ils outrange la Q d'Anivia à toutes les phases de lane et la pokent depuis hors de son threat range ; aucune mobilité pour gap-close ou punir leurs cooldowns."
---

## Aperçu

Anivia est une control mage longue portée avec deux barres de vie, une ulti AOE lente mais dévastatrice, et le seul mur infranchissable du jeu. Son kit punit les erreurs de positionnement : **Flash Frost (Q)** applique **Chill** (un statut de slow nommé autour duquel tourne tout le reste du kit), **Frostbite (E)** double ses dégâts sur cible Chilled, et **Glacial Storm (R)** garde tout le monde slowed dans la zone. Elle échange la mobilité pour de l'utility — pas de dash, mais **Rebirth (P)** lui offre une seconde vie chaque fois que l'œuf survit.

Son plan en mid est simple à décrire et brutal à exécuter : shove (pousser la vague de minions sur la tour adverse) la wave avec **R** + **E**, frappe la rivière ou la jungle d'un combo **Q-E** à travers le brouillard dès qu'un ennemi y entre, et utilise **Crystallize (W)** pour briser les engages (engage = le moment où démarre un teamfight) ou sauver des alliés des dives (champions qui sautent sur toi pour te burst — burst = gros dégâts concentrés en 1-2 secondes). À tous les rangs elle gagne aussi des parties en tenant des lanes que personne d'autre ne peut tenir — une **R** fully formed (à pleine taille) est un mur de dégâts magiques constants.

## Build Recommandé

**Items de départ :** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Anivia est mana hungry early et a besoin de l'AP et du mana regen pour balancer deux **Q** par wave sans assécher sa barre.

**Items core (dans l'ordre) :**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — burst spike (boost de tes dégâts concentrés) plus mana sustain. Te permet de cast **Q-E** sans surveiller la barre.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plate (coupe une quantité fixe de la MR ennemie) pour amplifier le double-hit de **E** sur les squishys (champions à faibles défenses, typiquement ADCs et mages).
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplie ton AP, le scaling (combien le champion devient fort par item et par level) déjà solide passe en zone one-shot.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst supplémentaire plus une HP-threshold passive (passif déclenché quand la cible passe sous ~35% HP) qui s'aligne avec les finishes de **E**.

**Items situationnels :**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contre divers et assassins (Zed, Akali, Diana). La stasis (un bref freeze invulnérable) achète du temps en attendant que **Glacial Storm** revienne.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contre du gros CC magique single-target (Ahri charm, Lissandra R, Twisted Fate stun) qui interromprait le toggle de ta **R**.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contre les compos qui empilent les soins (Soraka, Vladimir, Aatrox). Les ticks constants de **R** appliquent grievous wounds (debuff qui réduit les soins reçus) sur une zone large.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — achète-le dès qu'une cible prioritaire (l'ennemi que tu veux le plus tuer — généralement leur carry) termine son premier objet de Magic Resist (MR — la stat défensive qui réduit les dégâts magiques reçus). Les dégâts d'Anivia s'effondrent face à de la MR si tu traînes.

**Bottes :** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** par défaut. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** ne sont acceptables que si ton équipe a faim d'uptime sur la **R** (à quelle fréquence elle est de nouveau dispo) en skirmishes (petites bagarres 2v2 ou 3v3 hors du teamfight principal).

**Skill order :** Maxe **E** en premier — c'est ton vrai bouton de dégâts, double sur cibles Chilled. Maxe **Q** en second (slow + stun plus longs), **W** en dernier. Mets un point dans **R** aux niveaux 6, 11, 16. Prends **W** au niveau 3 même si tu la maxes en dernier : un seul rank du mur sauve déjà ta vie ou casse un engage.

**Runes :** Primaire **Sorcery** avec **Arcane Comet** (un projectile gratuit de dégâts qui tombe quand tu touches un ennemi avec une ability), **Manaflow Band** (mana gratuit à chaque skillshot qui touche), **Transcendence** (cooldown reduction), **Scorch** (un burn supplémentaire sur ta première ability). Secondaire **Inspiration** avec **Biscuit Delivery** (potions gratis en lane) et **Cosmic Insight** (cooldown reduction sur les summoner spells comme **Flash**). Comet est la rune la plus rentable en dégâts pour Anivia : chaque **E** Chilled la déclenche à l'impact.

## Matchups clés

- **Yasuo :** Il peut Wind Wall (une ability qui bloque les projectiles pendant quelques secondes) ta **Q** et même le projectile de la **E**. Garde les deux jusqu'à ce qu'il ait gaspillé Wind Wall sur des minions. Pose la **W** verticalement entre lui et ses minions quand il tente l'all-in (un combat total jusqu'à la mort) — il perd la fenêtre de Wind Wall à cause du mur et du chill.
- **Zed / Akali :** Menaces de dive. Achète ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** après ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** s'ils sont devant. Pose la **R** sous tes propres pieds quand ils entrent — ils doivent se battre dans ta tempête pour avoir la kill.
- **Veigar :** Matchup à égalité, basculé par celui qui roam (quitte sa lane pour aider une autre) en premier. Tu clear la wave mieux que lui pre-6 grâce à **R** ; punis-le en shovant et en aidant la bot lane pendant qu'il farm encore sous tour.
- **Xerath / Vel'Koz :** Ils outpoke ta portée. Reste derrière les minions, last-hit (last-hit = le coup final sur un minion qui rapporte de l'or) avec **E**, ne push jamais au-delà de la moitié de la wave sauf si ton jungler est mid-side (positionné dans la jungle proche de la mid lane).
- **Annie :** Une mage all-in télégraphiée — son stun a un tell (animation visible juste avant le cast qui prévient pour dodge) lent et évident. Pre-6, pose **W** sur la trajectoire d'atterrissage de Tibbers pour casser sa combo stun-et-summon. Ta passive œuf te sauve d'un full burst ; elle utilisera son ult de toute façon et te donnera un counter-engage gratuit.

## Power spikes & conditions de victoire

- **Niveau 2 :** Avec **Q** + **E** tu peux déjà chill-and-double-tap un adversaire qui s'avance trop pour un minion. Menace ça à chaque wave ; c'est le trade (échange rapide de coups et abilities, pas une vraie tentative de kill) sur lequel Anivia est construite.
- **Niveau 6 :** Première **Glacial Storm**. Tu passes d'une des mages les plus faibles au level 5 à l'un des kits les plus forts en waveclear (capacité à clear les vagues de minions vite) et zoning (forcer l'ennemi à sortir d'une zone en menaçant des dégâts) au level 6. Shove la wave instantanément et cherche un roam.
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion fini (~ minute 12-14) :** Une combo **Q-E** complète plus le proc de Luden's (le passif de l'item qui se déclenche automatiquement au cast) one-shot la plupart des ADC et autres mages sans item de MR. Force des fights d'objectif sur cette fenêtre.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minute 26-30) :** Le late game d'Anivia décolle. Avec **R** qui tick (petits dégâts répétés à chaque fraction de seconde) et une **E** Chilled, même les tanks perdent des morceaux de HP par seconde. Regroupe-toi avec l'équipe et laisse la frontline (rôle des tanks/bruisers qui restent devant et absorbent les dégâts) faire son boulot pour toi.

## Erreurs courantes

- **Lancer Q sans follow-up de E.** **Q** seule, c'est du poke (chip damage à distance pour gratter l'ennemi sans s'engager) correct ; **Q** puis **E** avec le bonus chill-doublé est une vraie menace de kill. N'utilise pas **Q** uniquement en harass (poke pur pour embêter et gratter du HP) quand **E** est off cooldown.
- **Te wall hors de ta propre lane.** **W** est infranchissable des *deux* côtés. Pose-la parallèle à la wave pour peel un gank (peel = utiliser une ability pour protéger un allié de qui lui saute dessus ; gank = embuscade du jungler depuis le brouillard), jamais perpendiculaire en travers de ta route de fuite.
- **Couper R trop tôt.** **R** ne consomme plus de mana une fois activée — garde-la active pendant les fights, ne panique pas en l'éteignant dès que ta barre baisse. Le slow seul vaut déjà le mana.
- **Roulette à œuf.** Ta passive Rebirth a un long cooldown. Ne "fais pas confiance à l'œuf" en tower-divant (aller sous leur tour pour les tuer) à HP bas sauf si tu as fait les calculs : il suffit de quelques coups pour tuer l'œuf, et l'un de ces coups peut être la tour elle-même.
- **Ignorer W comme outil de peel.** La plupart des Anivia ne pensent à **W** que comme outil de chase. Contre les pick comps (compositions qui gagnent en attrapant un joueur hors position), une **W** entre ta back line (tes carries qui font des dégâts depuis l'arrière) et un ult de Malphite est l'une des plays défensives les plus fortes du mid.

## Conseil avancé

Utilise la détonation recast de **Q** comme *outil de vision*. La sphère de glace a un large rayon visuel en vol et à la détonation : lance-la à travers le fog of war (la zone obscure de la map hors de la vision de ton équipe) sur une trajectoire probable de l'ennemi — par exemple, en mid-river avant un drake fight (le combat d'équipe pour le dragon, monstre objectif dans la rivière côté bot qui donne un buff à l'équipe qui le tue) — et relance dès le premier contact. Tu offres à ton équipe une demi-seconde de vision et un stun d'un seul bouton. Les top Anivia remplacent un ward (une sentinelle posée qui révèle une petite zone de la map pendant un certain temps) par fight avec une **Q** détonée dans le brouillard : moins cher, plus rapide, et ça stun l'engage.
