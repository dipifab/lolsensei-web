---
title: "Bel'Veth Jungle Build & Guide — Patch 16.9"
slug: "belveth-jungle"
language: "fr"
patch: "16.9"
champion: "belveth"
role: "jungle"
last_updated: "2026-04-29"
description: "Guide complet Bel'Veth jungle pour League of Legends Patch 16.9 : starter kit, build core on-hit, matchups clés, power spikes, erreurs courantes et astuce finale."
quick_learn:
  champion_dd_id: "Belveth"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Fighter / Skirmisher on-hit"
  abilities:
    - key: "P"
      name: "Death in Lavender"
      description: "Charges permanentes d'attack speed sur les large minions, monstres de jungle et takedowns sur champions. Lancer une compétence donne aussi un court buff d'attack speed."
      dd_spell_id: "Belveth_Passive"
    - key: "Q"
      name: "Void Surge"
      description: "Dash court qui inflige des dégâts sur son passage. Chacune des quatre directions a son propre cooldown qui baisse avec l'attack speed."
      dd_spell_id: "BelvethQ"
    - key: "W"
      name: "Above and Below"
      description: "Coup de queue qui knock up et slow. Toucher un champion réinitialise immédiatement le Void Surge dans cette direction."
      dd_spell_id: "BelvethW"
    - key: "E"
      name: "Royal Maelstrom"
      description: "Channel de coups sur l'ennemi avec le moins d'HP. Donne damage reduction et lifesteal pendant le canal ; relance pour interrompre."
      dd_spell_id: "BelvethE"
    - key: "R"
      name: "Endless Banquet"
      description: "Passive : chaque seconde auto sur la même cible inflige du true damage bonus, stack à l'infini. Active : consomme un Void Coral (champion ou epic monster takedown) pour entrer en true form avec HP, range et attack speed bonus."
      dd_spell_id: "BelvethR"
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3302", name: "Terminus" }
    - { dd_id: "3072", name: "Bloodthirster" }
    - { dd_id: "3124", name: "Guinsoo's Rageblade" }
  situational_items:
    - dd_id: "3091"
      name: "Wit's End"
      against: "contre les comps AP lourdes (Karthus, Ahri, Lissandra) — magic resist et on-hit magic damage"
    - dd_id: "6610"
      name: "Sundered Sky"
      against: "quand tu es behind ou contre des poke comps — premier auto crit et heal, tempo récupéré"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contre les comps qui empilent les soins (Soraka, Aatrox, Dr. Mundo, Vladimir) — Grievous Wounds on-hit"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "quand tu split-push une side lane seul contre des disengage comps — dégâts bonus aux tours et minions"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contre le burst AP single-target (Veigar, LeBlanc, Syndra mid) — magic shield sous 30% HP"
  base_combo: ["Q", "AA", "W", "AA", "E", "R"]
  win_condition: "Colle à une seule cible avec les Q dashes et le true damage stacké de la R jusqu'à la faire tomber. Force les fights niveau 6 R online, idéalement après un Rift Herald ou Baron pour la true form longue."
  weakness: "Le hard CC (stuns, knock-ups, suppress) annule les Q dashes et la cloue sur place. Sans R active ou sans cible où s'engager, sa menace à distance est faible et elle s'effondre face à beaucoup de peel."
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
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["amumu", "zac", "skarner"]
      archetype: "Tank junglers sans dash"
      reason: "Le pattern on-hit de Bel'Veth avec Terminus déchire leur armor et magic resist ; elle reste collée avec les Q dashes autour de leur hitbox et ils n'ont aucun moyen de disengage."
    - examples: ["karthus", "kindred", "nidalee"]
      archetype: "Junglers ranged squishys"
      reason: "Les quatre Q dash directionnels ferment toute tentative de kite (kite = reculer en attaquant) : elle arrive en melee avant qu'ils ne finissent une rotation à distance."
    - examples: ["master-yi", "shyvana"]
      archetype: "Skirmishers scaling sans CC précoce"
      reason: "Elle gagne les skirmish précoces en jungle (skirmish = combat 1v1 ou 2v2 hors teamfight) avant leur power spike, puis convertit l'avance en objectifs."
  counterpicks:
    - examples: ["sejuani", "vi"]
      archetype: "Junglers à hard CC point-and-click"
      reason: "Le Q dash de Bel'Veth ne dodge pas les abilities targeted. Une fois qu'elle mange une R de Sejuani ou de Vi, elle est clouée et son pattern on-hit s'arrête net."
    - examples: ["rammus"]
      archetype: "Tanks anti-attack-speed"
      reason: "La passive épines de Rammus et son W steroid punissent ses auto-attaques continues : elle se blesse en essayant de le DPS pendant qu'il contrôle les objectifs."
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "Junglers forts en early avec invade"
      reason: "Le premier clear de Bel'Veth est correct sans bullir personne ; ils l'invadent niveau 3 avant qu'elle ait Q maxée, la tuent une fois et snowball (snowball = petite avance early qui grossit dans le temps)."
---

## Aperçu

Bel'Veth est une fighter on-hit (= ses dégâts principaux viennent des auto-attaques et des effets d'items qui se déclenchent à chaque coup, pas de ses sorts) qui transforme ses auto-attaques en flux continu de dashes. Son **Void Surge (Q)** a quatre cooldowns directionnels qui scalent tous avec l'attack speed : plus elle accumule (= stack) d'attack speed, plus elle dash souvent. Son **Endless Banquet (R)** a deux faces : une passive qui ajoute du true damage toutes les deux auto-attaques sur la même cible (true damage = dégâts qui ignorent armor et magic resist), et une forme active qui consomme un Void Coral — un morceau qui tombe au sol quand elle décroche un takedown (kill ou assist) sur un champion ou un epic monster comme Rift Herald ou Baron — pour gagner HP, attack range et attack speed bonus pendant un long moment.

Son game plan est de snowball à travers la jungle (snowball = transformer une petite avance early en une beaucoup plus grosse). Clear les camps, gank une lane (gank = embuscade sur un laner avec l'aide du jungler), force un fight au niveau 6, mange le Void Coral, puis enchaîne le fight suivant avec la true form active. Ce n'est pas un champion scaling (scaling = devenir plus fort avec le temps qui passe) : si l'early stagne, elle devient un Master Yi en pire.

## Build Recommandé

**Items de départ :** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Hailblade est le jungle starter : en tuant les monstres de jungle, il évolue vers un upgrade qui boost le **Smite** (le summoner spell que tout jungler prend — un coup unique très puissant sur une cible, utilisé à la fois pour clear plus vite et pour voler les objectifs à l'équipe adverse).

**Items core (dans l'ordre) :**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — toutes les trois auto-attaques ajoutent des dégâts physiques bonus on-hit ; parfait pour une championne qui attaque plus vite que n'importe qui d'autre.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed flat qui se compose avec la réduction de cooldown de sa Q.
3. ![Terminus](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3302.png) **Terminus** — dégâts bonus on-hit qui alternent entre armor pen (ignore une partie de l'armor adverse) et magic pen (ignore une partie de la magic resist) ; donne aussi des défenses qui s'empilent tant qu'elle est en melee range (= assez près pour frapper à l'épée), ce qui pour Bel'Veth est tout le temps.
4. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — lifesteal (tu te soignes d'un pourcentage des dégâts infligés) et un overheal shield (les soins en surplus se transforment en shield temporaire au-dessus des HP). La survie dont tu as besoin pour channel **Royal Maelstrom (E)** sans mourir.
5. ![Guinsoo's Rageblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3124.png) **Guinsoo's Rageblade** — convertit une auto-attaque sur deux en deux on-hits dans le même swing, doublant la valeur de Kraken Slayer et Terminus.

**Items situationnels :**

- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — face aux comps AP lourdes (Karthus, Ahri, Lissandra ; AP = champions dont les dégâts viennent surtout des sorts, pas des auto-attaques). Donne magic resist et on-hit magic damage, remplace Bloodthirster.
- ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — quand tu es behind ou face à des poke comps (poke = ennemis qui te grattent les HP à distance avant même que le fight commence). Le premier auto sur chaque cible critique (crit = un coup qui inflige environ le double de dégâts) et te soigne, te redonne du tempo dans les skirmish (skirmish = petit combat 1v1 ou 2v2 en jungle, pas un teamfight 5v5 complet).
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — face aux comps qui empilent les soins (Soraka, Aatrox, Dr. Mundo, Vladimir). Applique Grievous Wounds à chaque auto (Grievous Wounds = un debuff qui divise par deux les soins de la cible).
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — quand tu as une avance et que l'équipe adverse a un waveclear faible (= aucun moyen simple de tuer les vagues de minions). Pousse les side lanes (les lanes top et bot, à l'écart du centre) plus vite que n'importe quoi et donne des dégâts bonus aux tours, parfait pour le split-push (split-push = mettre la pression sur une side lane seul pendant que ton équipe joue de l'autre côté de la map).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — face au burst AP single-target (burst = beaucoup de dégâts concentrés en 1-2 secondes ; ex. Veigar, LeBlanc, Syndra). Le shield s'active automatiquement sous 30% HP et absorbe une grosse partie du prochain magic damage encaissé.

**Bottes :** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** par défaut. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** uniquement face aux double-AD comps (= l'équipe adverse a deux gros carrys de dégâts physiques, ex. Caitlyn + Master Yi).

**Skill order :** Maxe **Q** en premier, puis **E**, puis **W**. Chaque rank de **Q** baisse son cooldown de base — c'est ton damage et ta mobilité dans un seul slot. **R** aux niveaux 6, 11, 16.

**Runes :** Les runes sont des bonus passifs choisis avant la partie ; elles façonnent tes stats d'early game et ton style de dégâts. Primaire **Precision** (l'arbre centré sur les auto-attaques) avec **Press the Attack** (après trois auto-attaques sur la même cible, le coup ou le sort suivant inflige des dégâts bonus et la cible prend plus de dégâts de tout le monde pendant quelques secondes), **Triumph** (te soigne un peu au takedown), **Legend: Alacrity** (attack speed bonus par takedown), **Coup de Grace** (plus de dégâts sur les cibles à bas HP). Secondaire **Resolve** avec **Second Wind** (régénère des HP après avoir pris des dégâts) + **Revitalize** (les soins reçus sont plus forts) pour les skirmish prolongées en jungle, ou **Inspiration** avec **Magical Footwear** (bottes gratuites à la minute 12) + **Cosmic Insight** (cooldowns réduits sur les summoner spells) si la partie est calme et que tu veux optimiser l'or et les timers.

## Matchups clés

- **Lee Sin :** Jungler fort en early avec invade (= un jungler qui rentre dans ta jungle pour te tuer avant que tu aies des items). Track-le avec de la vision sur tes buffs, et évite de combattre avant le niveau 4 — il gagne ce duel à chaque fois.
- **Master Yi :** Rival scaling. Tue-le avant la minute 20 ou accepte qu'il te dépasse en dégâts en teamfight tardif ; force les objective trades early (= push un Drake ou un Herald pendant qu'il est occupé de l'autre côté de la map) pour qu'il n'atteigne jamais quatre items.
- **Karthus :** Matchup gratuit. Sa R (aussi appelée ultimate — la dernière compétence et la plus forte) inflige des dégâts à toute ton équipe à travers la map, mais il a zéro mobilité — Q sur lui et il meurt en une rotation (= une séquence complète de tes sorts). Counter-jungle-le (= vole-lui les camps) après chaque gank qu'il valide.
- **Sejuani :** Matchup difficile. Sa R est point-and-click (= elle se verrouille sur la cible sans visée nécessaire) et te bloque sur place. Ne fais jamais d'engage (engage = lancer le fight) sans **Flash** prêt, et jamais sans ton équipe en position de te peel (peel = un allié qui stoppe la menace avant qu'elle t'atteigne).
- **Rammus :** Hard counter (= construit spécifiquement pour casser ton matchup). Sa passive épines reflète une partie des dégâts de tes auto-attaques ; sa W est un steroid défensif (steroid = une compétence qui multiplie temporairement une stat — ici son armor et le montant de dégâts reflétés) qui double la réflexion. Évite les skirmish solo, ping ton équipe et farm le côté opposé de la jungle jusqu'à finir Terminus.

## Power spikes & conditions de victoire

Un power spike est un moment où le champion devient soudainement bien plus fort qu'une minute avant — généralement quand un nouveau sort ou un nouvel item arrive en ligne.

- **Niveau 3 :** Premier full clear bouclé, **Q-W-E** débloquées. Tu peux répondre à la plupart des ganks avec le knock-up de la W (= le sort projette les ennemis brièvement en l'air, avec un court stun) et un Q de fuite, mais tu ne peux pas encore forcer de fight — focalise-toi sur un clear propre et un Scuttle early (le crabe neutre du river : tu le tues pour la vision et un petit buff de movement-speed dans la rivière).
- **Niveau 6 :** **Endless Banquet (R)** entre en ligne. Après ton prochain takedown sur champion ou epic monster (Rift Herald, Drake), tu manges le Void Coral et passes en true form longue (= une transformation buffée qui fait de toi un mini-boss temporaire). Force un fight ou un dragon immédiatement.
- **![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer + ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) Berserker's Greaves (~ minute 10-12) :** Premier vrai damage spike. Tu peux duel la plupart des junglers dans leur propre jungle et dive un laner à bas HP (dive = entrer sous la tour ennemie pour le tuer quand même, en mangeant les coups de tour au passage).
- **![Terminus](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3302.png) Terminus terminé (~ minute 16-18) :** À trois items, tu cesses de te soucier de l'armor ou de la magic resist sur la majorité des cibles squishy (squishy = champions à faibles défenses, type ADC et la plupart des mages). Regroupe avec l'équipe pour le second drake et le timer de Baron.
- **Void epic monster (Rift Herald ou Baron) :** La forme active de ta R dure beaucoup plus longtemps avec un Void Coral d'epic monster (epic monster = un gros objectif neutre, bien plus fort qu'un camp de jungle normal). Essaie de prendre Herald avec l'équipe vers la minute 10-14 pour push deux waves avec la true form encore active.

## Erreurs courantes

- **Spammer Q toujours dans la même direction.** Chacune des quatre directions a son propre cooldown. Rester immobile et appuyer Q en avant quatre fois gaspille trois directions. Avant, latéral, arrière — tu fais plus de dégâts et tu accumules plus d'attack speed en même temps.
- **Tenir E toute la durée à chaque fois.** **Royal Maelstrom (E)** est un channel (= une compétence où Bel'Veth reste immobile et continue de cogner, vulnérable aux interruptions) qu'on peut couper en la relançant. Utilise-la pour absorber une rotation unique de dégâts (ex. un W de Veigar en cage) et coupe le channel tout de suite pour reprendre les auto-attaques. La tenir entièrement, c'est zéro auto-attaque pendant deux secondes.
- **Appuyer R sans Void Coral à proximité.** La forme active dure environ 30-60 secondes selon la source. Sans coral, la forme est gaspillée ; le true damage passif toutes les deux auto est ce que tu veux dans les fights normaux.
- **Tenter le 1v1 avec le jungler adverse au niveau 2.** Son clear est correct mais son duel early est médiocre. Si un Lee Sin ou Xin Zhao t'invade niveau 2-3, laisse le camp et ping ton équipe — gagner le duel n'est pas réaliste et mourir leur offre le snowball.
- **Ignorer le tempo sur le Void Coral.** Quand un coral tombe, tu as une fenêtre courte pour le consommer. Tuer un ennemi à la minute 6, ignorer le coral, c'est gaspiller la seule raison pour laquelle tu l'as tué. Marche toujours sur le coral avant le recall (recall = la compétence canalisée qui te téléporte à la base).

## Conseil avancé

Utilise **Above and Below (W)** comme reset de Q. La description dit que toucher un champion avec **W** rafraîchit le cooldown de **Void Surge (Q)** dans cette direction — donc le pattern optimal en 1v1 est **Q en avant → AA → W sur la cible → Q en arrière en sécurité** avec un Q en avant de nouveau prêt à l'instant où tu te retournes. Les pros utilisent ce loop pour enchaîner trois dashes en deux secondes, plus que ce dont dispose n'importe quel autre jungler du jeu.
