---
title: "Katarina Mid Build & Guide — Patch 16.9"
slug: "katarina-mid"
language: "fr"
patch: "16.9"
champion: "katarina"
role: "mid"
last_updated: "2026-05-05"
description: "Guide Katarina mid lane pour League of Legends Patch 16.9 : starter kit, build core AP assassin, matchups clés, power spikes, erreurs courantes et un conseil final."
quick_learn:
  champion_dd_id: "Katarina"
  difficulty: 4
  damage_type: "magic"
  champion_class: "AP Assassin / Snowball Resetter"
  abilities:
    - key: "P"
      name: "Voracity"
      description: "Quand un champion ennemi récemment endommagé meurt (kill ou assist), tous les cooldowns restants de Katarina chutent radicalement. Ramasser un Dagger déclenche un slash AOE."
      dd_spell_id: "Katarina_Passive"
    - key: "Q"
      name: "Bouncing Blade"
      description: "Dagger ciblé qui rebondit sur les ennemis proches puis tombe derrière la première cible. Le Dagger au sol est le pivot de tout le combo."
      dd_spell_id: "KatarinaQ"
    - key: "W"
      name: "Preparation"
      description: "Lance un Dagger au-dessus de Katarina qui atterrit un instant plus tard, plus une courte rafale de Move Speed. C'est le Dagger sur lequel tu blinkes."
      dd_spell_id: "KatarinaW"
    - key: "E"
      name: "Shunpo"
      description: "Blink sur un champion, minion, ward ou Dagger. Ramasser un Dagger réduit le cooldown de Shunpo. Fonctionne aussi sur les wards ennemis visibles."
      dd_spell_id: "KatarinaEWrapper"
    - key: "R"
      name: "Death Lotus"
      description: "Channel qui lance des couteaux aux 3 champions ennemis les plus proches, applique Grievous Wounds. Annulé par tout hard CC. À utiliser post-engage, jamais pre-engage."
      dd_spell_id: "KatarinaR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "W" }
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
    - { dd_id: "3152", name: "Hextech Rocketbelt" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4646", name: "Stormsurge" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3135", name: "Void Staff" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contre les hard-engage (Malphite R, Zac, Amumu) — la stasis annule l'engage qui couperait ta R"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contre les CC magiques single-target qui cancellent la R (stun Annie, Lissandra R, gold card Twisted Fate)"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contre les compos chargées en CC (2+ stuns/roots) — remplace Sorcerer's Shoes quand tu manges trop de CC pour channel R"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contre les compos qui empilent les soins (Soraka, Vladimir, Dr. Mundo) — Grievous Wounds cap le sustain"
  base_combo: ["W", "E", "Q", "AA", "R"]
  win_condition: "Choppe une kill ou un assist en laning phase, puis snowball : chaque takedown reset le kit complet via Voracity, donc une seule kill en lane devient souvent un double sur la wave d'après."
  weakness: "Le hard CC interrompt la R et transforme le channel en temps perdu. Sans takedown pour reset les cooldowns elle redevient un melee à courte portée avec un seul blink — les mages longue portée la punissent gratuitement."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8140, name: "Grisly Mementos", icon_path: "perk-images/Styles/Domination/GrislyMementos/GrislyMementos.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination primaire : Electrocute proc sur chaque chaîne W-E-Q (3 hits distincts en 3 secondes) pour du burst gratuit. Sudden Impact se déclenche juste après chaque Shunpo (le blink). Ultimate Hunter rogne Death Lotus à chaque takedown — Voracity fait le reste."
    secondary_rationale: "Precision secondaire : Triumph soigne 12% des HP manquants sur takedown, donc tu chaînes une seconde kill sur le kit reseté. Coup de Grace ajoute +8% de dégâts sous 40% HP — exactement la fenêtre où la R clôt un fight."
    secondary_alternative: "Si l'équipe adverse a beaucoup de poke magique (Xerath, Vel'Koz, Ziggs), swap Precision pour Resolve avec Second Wind (regen vs poke) et Overgrowth (HP scaling extra) pour survivre à la lane jusqu'au premier takedown."
matchup_draft:
  pick_into:
    - examples: ["veigar", "twisted-fate", "anivia"]
      archetype: "Mages immobiles sans dash"
      reason: "Ils ne peuvent pas sortir de la burst window W-E-Q de Katarina. Une fois leur setup dépensé (cage de Veigar, gold card de TF, E d'Anivia) ils n'ont aucune réponse à un Shunpo all-in."
    - examples: ["lux", "orianna"]
      archetype: "Mages mid-range sans escape"
      reason: "Les deux vivent du positionnement derrière les minions. Katarina blink sur un Dagger au-delà de la wave, les supprime avec W-E-Q-AA, et reset sur la kill vers la cible suivante."
    - examples: ["karthus"]
      archetype: "Scaler farm-heavy sans sustain ni hard CC"
      reason: "Karthus a besoin de fenêtres de farm tranquilles. La pression de reset de Katarina le force à griller son Flash et à perdre le scaling late qui est sa seule win condition."
  counterpicks:
    - examples: ["annie", "lissandra"]
      archetype: "Mages avec hard CC point-and-click"
      reason: "Leur stun est instantané et impossible à dodge : il cancelle Death Lotus en plein channel et transforme Katarina en sac de frappe immobile pendant que toute l'équipe ennemie lui tombe dessus."
    - examples: ["xerath", "vel-koz"]
      archetype: "Mages d'artillerie longue portée"
      reason: "Ils poke Katarina hors de sa portée de Q (625) pendant les 5 premiers niveaux. Elle arrive level 6 déjà à 40% HP, sans reset Voracity disponible, et meurt à une seule rotation de skillshots."
    - examples: ["diana", "pantheon"]
      archetype: "Burst all-in midlaners avec engage point-and-click"
      reason: "Le combo Q-R de Diana et le stun W de Pantheon touchent avant même que Katarina puisse drop son propre Dagger de W. Elle perd la trade race et les power spikes d'items."
---

## Aperçu

Katarina est une assassin AP melee construite autour de sa passive **Voracity** : chaque takedown (kill ou assist) réduit drastiquement tous ses cooldowns restants. Cette mécanique unique est l'identité entière du champion — une seule kill en lane lui refresh le kit complet, donc un takedown devient souvent un double sur la wave suivante. La mid lane lui convient parce qu'elle a besoin de rotations courtes pour enchaîner les resets à travers la map.

Son game plan est simple à décrire et exigeant à exécuter. Drop un Dagger avec **W** ou utilise celui qui tombe derrière **Q**, blink dessus avec **E** pour les dégâts AOE, puis enchaîne avec des auto-attacks et lance la **R** quand l'adversaire est à bas HP. Le skill expression se joue à deux endroits : l'ordre de cast **W-E-Q** (tu dois drop le Dagger avant le blink, pas après) et **quand** channel la **R** — pre-engage tu te fais cancel par n'importe quel stun, post-engage tu nettoies un teamfight avec des chaînes de reset.

## Build Recommandé

**Items de départ :** Doran's Ring + 2 Health Potions. Skip Doran's Shield même contre des matchups ranged — l'AP et le mana regen te font gagner plus de trades que ce que les HP te sauveraient.

**Items core (dans l'ordre) :**

1. ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** — premier item spike. Donne un second dash court (active) en plus de Shunpo, donc tu engage sur une cible qui a déjà brûlé son escape. AP et HP pour survivre au counter-engage.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic pen plate. Bottes par défaut ; swap pour Mercury's Treads contre beaucoup de CC.
3. ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — burst spike qui s'aligne pile avec la chaîne W-E-Q. Le passif sous seuil de HP (s'active quand tu fais passer un ennemi sous un seuil bas de HP) te donne le burst supplémentaire pour finir des cibles sans devoir channel R.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicateur late-game. Ton plus gros slot AP ; le +30% AP transforme Katarina de "snowball assassin" à "one-shot n'importe quel squishy".
5. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — magic pen bonus qui scale avec les HP manquants de la cible. Stack à merveille avec Stormsurge et la R pour finir les cibles low HP en cours de fight.
6. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — achète-le dès qu'une cible prioritaire termine un objet de Magic Resist.

**Items situationnels :**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contre les hard-engage (Malphite R, Zac, Amumu). La stasis annule l'engage qui interromprait sinon ton channel de R.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contre les CC magiques single-target qui cancellent la R (stun Annie, Lissandra R, gold card Twisted Fate). Le shield mange un sort et le channel survit.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — remplace Sorcerer's Shoes quand l'équipe adverse a 2+ stuns ou roots qui cancellent Death Lotus.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contre les compos qui empilent les soins (Soraka mid, Vladimir, Dr. Mundo top). Cap le sustain ennemi pour qu'une kill reste une kill.

**Bottes :** Sorcerer's Shoes par défaut. Mercury's Treads est le swap quand l'équipe adverse a du hard CC ; Ionian Boots of Lucidity est rarement correct parce que Voracity te donne déjà les cooldowns gratuits.

**Skill order :** Maxe **Q** en premier (waveclear et dégâts principaux), **W** en deuxième (le dagger qui ancre chaque combo), **E** en dernier. Point dans **R** aux niveaux 6, 11, 16.

**Runes :** Primaire **Domination** avec **Electrocute**, **Sudden Impact**, **Grisly Mementos**, **Ultimate Hunter**. Secondaire **Precision** avec **Triumph** et **Coup de Grace**. La keystone (la rune principale en haut de la page) proc naturellement sur la chaîne W-E-Q parce que tu touches la cible avec 3 instances de dégâts séparées.

## Matchups clés

- **Annie :** Le matchup le plus dur. Son stun est point-and-click et cancelle Death Lotus instantanément. Achète ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** en deuxième item si la lane se passe mal. Pre-6, reste à l'arrière de la wave et farme avec **Q** ; ne blink jamais tant que son stun n'est pas en cooldown.
- **Lux :** Matchup favorable une fois level 6 atteint. Pre-6 sa **Q** te dépasse en portée, donc joue derrière les minions et dodge. Après le 6, blink sur un dagger en sidewave et burst-la — elle n'a aucun dash pour fuir.
- **Zed :** Skill matchup. Il a le même pattern d'all-in avec plus de disengage (sa **R** le rend untargetable 0.5s, cassant ton channel). Garde ta **R** jusqu'à ce qu'il use la sienne ; si tu survis à son combo, tu reset sur la kill.
- **Twisted Fate :** Counter-pick net. Pre-6 tu le bats en push ; après le 6, quand il essaie de roam, tu blink sur un dagger sur la wave et tu le supprime parce qu'il n'a aucun item défensif. Track sa **R** avec des wards en mid.
- **Diana :** Hard counter contre toi. Son combo **Q-R** te proc avant même que ta **W** ait drop le dagger. Achète ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** en troisième item ; ne blink jamais sur elle sous tour sans.

## Power spikes & conditions de victoire

- **Niveau 2 :** Avec **Q** et **E** tu peux déjà trade. Drop **Q**, marche dans la portée du rebond, blink **E** sur le dagger qui tombe pour les dégâts AOE, puis ressors. Poke gratuit si tu le fais à chaque cooldown.
- **Niveau 6 :** Première **Death Lotus**. Avec Voracity, une kill ou un assist refresh le channel et double tes dégâts en skirmish — les fights pre-6 duraient 4 secondes ; post-6, un takedown peut étendre un fight à 10s de resets cycliques.
- **![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) Hextech Rocketbelt fini (~ minute 11-13) :** Premier gros item spike. Le dash actif te donne un second outil de mobilité, donc tu engage sur une cible qui a déjà brûlé son escape (Flash, **E** de Lux, **E** de Yasuo). La pression de roam bascule ici.
- **![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) Stormsurge online (~ minute 18-22) :** Ton combo W-E-Q-AA one-shot maintenant n'importe quel squishy sous 70% HP sans R. C'est le timing où tu forces les fights d'objectif et où tu cherches des picks sur les sidelanes.

## Erreurs courantes

- **Channel R en pre-engage.** Le hard CC interrompt Death Lotus et gâche le cooldown. Utilise **R** post-engage : après l'engage du tank de ton équipe, après que le frontline ennemi a brûlé son CC, tu channel depuis une position safe pour nettoyer. Pre-engager avec **R** est réservé à finir une cible low HP qui n'a aucun moyen de t'interrompre.
- **Blink E en premier puis drop W après.** L'ordre de cast est **W → E → Q**. Le dagger doit être au sol (ou sur le point d'atterrir) quand tu blink, sinon tu ne le ramasses pas et tu perds à la fois les dégâts AOE du proc passif et la cooldown reduction sur Shunpo.
- **Greed le reset sur une cible que tu ne peux pas finir.** Si l'ennemi est à 35% HP mais que son coéquipier est juste à côté, la kill ne triggera pas Voracity à temps et tu meurs au follow-up. Disengage avec le Move Speed de **W**, attends les cooldowns à l'ancienne.
- **Gâcher Shunpo sur des minions pour le waveclear.** Tu as besoin de **E** comme outil défensif d'escape. Push les waves avec **Q** et auto-attacks ; ne blink sur un minion que si tu commit à un fight ou si tu fuis.
- **Pick Katarina contre du double CC point-and-click.** Si l'équipe adverse a Annie + Leona, ta **R** ne se résout jamais. Soit tu dodge en champ-select, soit tu acceptes de jouer sur leurs cooldowns : ne blink que quand ils ont brûlé leurs stuns sur quelqu'un d'autre.

## Conseil avancé

Utilise **E** sur les wards ennemis pour fuir les ganks. Le blink fonctionne sur n'importe quel ward visible — y compris les trinkets ennemis et les pinks posés de ton côté de la rivière. Repère un Stealth Ward dans le tri-bush avant qu'un gank n'arrive et tu as un outil d'escape gratuit qui n'apparaît pas sur la map ennemie : la plupart des adversaires posent les wards en avant sans réaliser qu'ils te donnent une sortie. La situation miroir est aussi vraie : si tu repères un ward ennemi près de ta tour pendant ton retour à la base, repositionne le départ de ton prochain gank pour l'éviter.
