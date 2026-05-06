---
title: "Ambessa Top Build & Guide — Patch 16.9"
slug: "ambessa-top"
language: "fr"
patch: "16.9"
champion: "ambessa"
role: "top"
last_updated: "2026-04-29"
description: "Guide Ambessa top lane pour League of Legends Patch 16.9 : starter kit, build Eclipse skirmisher, matchups clés, power spikes, erreurs courantes et astuce avancée."
quick_learn:
  champion_dd_id: "Ambessa"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Fighter / Assassin"
  abilities:
    - key: "P"
      name: "Drakehound's Step"
      description: "Après chaque ability cast, elle dash sur une courte distance. Sa prochaine basic attack gagne en portée, dégâts et attack speed, et rembourse de l'énergie."
      dd_spell_id: "Ambessa_Passive"
    - key: "Q"
      name: "Cunning Sweep / Sundering Slam"
      description: "Compétence à deux casts. Le premier frappe un arc frontal et scale avec le max HP de la cible. Toucher un ennemi débloque un slam plus long en second cast — dégâts principaux."
      dd_spell_id: "AmbessaQ"
    - key: "W"
      name: "Repudiation"
      description: "Gagne un bouclier et se met en garde, puis frappe le sol. Si elle bloque des dégâts non-minion pendant la garde, le slam est empowered. Outil défensif de trade."
      dd_spell_id: "AmbessaW"
    - key: "E"
      name: "Lacerate"
      description: "Fouet en chaîne AOE autour d'elle : inflige dégâts et slow aux ennemis proches. Déclencher le dash de la passive depuis cette compétence ajoute un second strike en fin de dash."
      dd_spell_id: "AmbessaE"
    - key: "R"
      name: "Public Execution"
      description: "Devient unstoppable et blink sur le champion ennemi le plus loin en ligne, le supprime à l'arrivée, puis le frappe pour dégâts et stun. Passive : armor pen + omnivamp sur les abilities."
      dd_spell_id: "AmbessaR"
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
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3071", name: "Black Cleaver" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap depuis Plated Steelcaps si l'équipe ennemie a 2+ sources de hard CC ou beaucoup de dégâts AP"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contre tops AP lourds (Vladimir, Rumble, Gwen) — magic shield + AD scaling à bas HP"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contre hard CC longue portée télégraphié (Malphite R, Ornn R, Sett W) — le spell shield bloque l'engage"
    - dd_id: "6697"
      name: "Hubris"
      against: "quand tu es déjà en avance en lane — les kills empilent l'AD, alimentant un snowball lead"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "late game quand tu R-blink sur le carry ennemi — le revive te laisse t'engager à fond et survivre au follow-up"
  base_combo: ["Q1", "AA", "E", "AA", "Q2", "AA", "R"]
  win_condition: "Gagne les lanes 2-6 avec des trades passive-dash, puis snowball dans les skirmishes autour des Voidgrubs et du Drake. Utilise R pour supprimer un carry isolé avant que la frontline adverse ne puisse peel."
  weakness: "Les chaînes de hard CC tuent ses combos de dash. Les statlines tank atténuent ses dégâts % max HP. Sa R l'engage sur une seule cible, donc une comp avec peel peut l'isoler après la fin de la suppression."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8242, name: "Unflinching", icon_path: "perk-images/Styles/Sorcery/Unflinching/Unflinching.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["darius", "garen", "sett", "illaoi"]
      archetype: "Bruisers melee immobiles sans dash"
      reason: "Ses passive-dashes après chaque ability cast lui permettent d'entrer et sortir des windups télégraphiés (pull de Darius, silence de Garen, E d'Illaoi). La suppression de R contourne leur tankiness pour la kill."
    - examples: ["kennen", "teemo", "quinn"]
      archetype: "Top laners ranged squishys"
      reason: "Les multiples short dashes de la passive comblent le gap dont les ranged tops dépendent. En melee sa Q scale avec le max HP de la cible et les chunkent plus vite qu'ils ne peuvent disengage."
    - examples: ["nasus", "kayle"]
      archetype: "Scalers late-game qui ont besoin de niveaux ou de stacks"
      reason: "Son power level 2-6 les bully avant leur spike (stacks de Q de Nasus, niveaux 11 et 16 de Kayle). Force des kills early pour leur refuser le lategame dont ils ont besoin."
  counterpicks:
    - examples: ["malphite", "ornn", "poppy"]
      archetype: "Tanks avec hard CC et stat checks"
      reason: "Le CC point-and-click (R de Malphite, W de Poppy qui stop les dashes, brittle + knock-up d'Ornn) interrompt ses combos de dash avant l'arrivée du R. L'armor + HP brut atténue aussi le scaling % max HP de Q."
    - examples: ["jayce", "gnar", "vayne"]
      archetype: "Pokers et kiters longue portée"
      reason: "Le E de Jayce (knockback) et le mega R de Gnar interrompent son dash en plein cast. Les kiters restent hors de son threat range, la forçant à engager des dashes de trop loin et à se faire punir avec ses abilities en cooldown."
    - examples: ["olaf", "tryndamere"]
      archetype: "Champions dont l'ultimate annule la suppression ou l'exécution"
      reason: "La R d'Olaf nettoie sa suppression au cast, neutralisant son outil principal de pickoff. La R undying de Tryndamere survit à la frame d'exécution et lui permet de spin hors du slam."
---

## Aperçu

Ambessa est une skirmisher top lane (un champion fait pour les escarmouches courtes et les petits combats, pas les longs teamfights). C'est un champion AD à dégâts physiques (AD = attack damage ; l'alternative est AP = ability power, la stat de dégâts magiques des mages). Elle utilise l'**énergie** comme ressource au lieu du mana, et vit ou meurt avec sa passive, **Drakehound's Step** : chaque ability cast déclenche un court dash plus une basic attack empowered avec bonus de portée, dégâts et attack speed. Cette unique mécanique en fait une spécialiste du chain-trade — chaque Q, W ou E lui offre un auto-attack reset gratuit (une basic attack qui part instantanément, en ignorant le timer normal d'attack speed), donc un combo complet pose quatre ou cinq coups en deux secondes. Son kit punit quiconque essaie de la combattre en melee sans hard interrupt (un stun, knock-up ou silence qui la coupe en plein cast).

Son game plan est simple : bully la lane dès le niveau 2 avec des all-ins **Q + E** (un "all-in" est un engagement total jusqu'à la kill, pas un échange court), puis snowball dans les skirmishes mid-game autour des Voidgrubs et du Drake. "Snowball" signifie une petite avance early — une kill, une tower plate (un morceau d'armure de tour récompensé en gold qui se brise dans les 14 premières minutes) — qui s'amplifie au fil du temps. Utilise **R** pour supprimer un carry adverse isolé (le main damage dealer de l'équipe) avant que sa frontline (les tanks devant) ne puisse peel — "peel" signifie utiliser le CC ou son propre corps pour protéger un allié de l'ennemi qui lui saute dessus. Le lategame est sa faiblesse : une fois que les tanks adverses ont fini deux items, ses dégâts % max HP sur Q ne les fondent plus, donc ferme la game avant la minute 28.

## Build Recommandé

**Items de départ :** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Default pour les trades AD ; le lifesteal sustain tes dash chains.

**Items core (dans l'ordre) :**

1. ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — premier item skirmisher principal. Après deux hits d'ability sur la même cible en 1.5 seconde, il déclenche un bouclier (une barrière HP temporaire qui absorbe les dégâts entrants) plus un gros bonus de dégâts sur la prochaine attaque. Ses combos de dash atteignent ce seuil à chaque combat.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — bottes par défaut. La plupart des matchups top sont AD ; la réduction de dégâts d'auto-attack compte dans les trades prolongés.
3. ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — armor shred (chaque hit retire un peu d'armor à la cible, jusqu'à 30% empilés) plus HP plus AD. Ses auto-attacks empowered de la passive empilent le shred plus vite que la moyenne.
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — spike de survie. Quand tu prends de gros dégâts en peu de temps, l'item te donne un large bouclier. Utile quand tu R-blink sur le carry adverse et que le reste de leur équipe te focus.
5. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — convertit les dégâts physiques entrants en saignement lent (dégâts étalés sur 3 secondes au lieu d'instantanés), te donnant le temps de finir le trade.

**Items situationnels :**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — remplacent Plated Steelcaps quand l'équipe adverse a deux sources ou plus de hard CC, ou de gros dégâts AP (magique). Donnent magic resist plus tenacity (réduit la durée des stuns et slows sur toi).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contre tops AP (Vladimir, Rumble, Gwen). Donne un bouclier "lifeline" contre les dégâts magiques (un bouclier qui pop une seule fois quand tu passes sous 30% HP) plus de l'AD à bas HP — fait pour te garder vivant assez longtemps pour leur rendre la kill.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contre hard CC longue portée télégraphié (Malphite R, Ornn R, Sett W). Donne un spell shield à usage unique (bloque la prochaine ability adverse qui te touche), donc l'engage adverse rate et tu R sur tes propres conditions.
- ![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) **Hubris** — quand tu es déjà en avance en lane. Chaque kill ou assist empile de l'AD bonus sur l'item, alimentant un snowball lead — plus tu fais de kills, plus tu tapes fort, plus tu fais de kills.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — dernier item lategame. Te donne un revive à usage unique sur la mort, toutes les 5 minutes. Te laisse t'engager à fond quand tu R-blink sur le carry adverse, sans throw la game si tu te misposition.

**Bottes :** Plated Steelcaps par défaut. Mercury's Treads contre AP/CC. Skip les bottes type Sorcerer's de mage — tu scale physique.

**Skill order :** Maxe **Q** en premier (dégâts principaux et la seule ability qui scale avec le max HP adverse), **E** en second (waveclear et le slow AOE qui setup le second strike de Q), **W** en dernier. Mets un point dans **R** aux niveaux 6, 11 et 16.

**Runes :** Arbre primaire **Precision** :
- **Conqueror** — keystone (la rune principale, la plus puissante de l'arbre). Empile AD bonus et healing plus tu restes longtemps en combat contre des champions ; parfait pour son kit chain-trade.
- **Triumph** — petit heal et burst de gold sur takedown, déclenché quand tu finis un combat à bas HP.
- **Legend: Alacrity** — bonus passif d'attack speed qui monte avec les takedowns.
- **Last Stand** — dégâts en plus quand tu passes sous 60% HP.

Arbre secondaire **Resolve** :
- **Second Wind** — régénération HP qui se déclenche après avoir subi des dégâts d'un champion. Contre le poke en lane.
- **Unflinching** — tenacity en plus quand **Flash** est en cooldown. Utile quand tu R dans l'équipe adverse et qu'ils essaient de t'enchaîner du CC.

Stat shards (les trois petits bonus de stats sous les runes) : Adaptive Force (donne AD ou AP selon ce que ton champion build — pour Ambessa ça se convertit en AD), encore Adaptive Force, puis Armor ou HP selon le matchup.

## Matchups clés

- **Darius :** Favorable. Le bord extérieur de sa Q est la partie qui le heal ; rentre dedans en dashant en avant avec ta Q1, puis Q2 pour ressortir. Il doit toucher Q + E pour s'engager dans une vraie tentative de kill ; tu peux utiliser W pour bouclier le grip de sa Q et trade à égalité. Force-le à utiliser le bleed de sa W d'abord (force-le à la gaspiller), puis engage quand elle est en cooldown.
- **Sett :** Favorable. Il n'a pas de dash, juste un slam frontal (W). Pre-6, tes combos passive-dash le battent dans les échanges prolongés. Après le 6, garde **Flash** pour esquiver le knockback (le déplacement) de sa R qui te pousserait dans la zone de son équipe.
- **Malphite :** Défavorable. Son bouclier passif atténue ton all-in niveau 2 ; le slow de sa Q lui permet de fuir quand tu t'engages. Build ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** en deuxième item pour bloquer son R engage. Évite les teamfights aux choke points où il peut flank — attaquer par surprise depuis un angle latéral — depuis le fog of war (les zones de la map que tu ne vois pas car il n'y a pas de ward). Une ward est un petit œil magique que tu poses pour révéler une zone.
- **Jayce :** Défavorable. Il a deux formes ; en forme ranged son combo Q + E te poke (te grignote des HP à distance sûre) avant que tu puisses fermer le gap. Prends ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** comme starter, colle ta wave pour la régénération HP des last-hits, et cherche la kill seulement quand il passe en forme melee et gaspille son E.
- **Camille :** Skill matchup. Vous avez tous les deux des all-ins forts ; celui qui pose son premier cast proprement gagne. Ta Q scale avec son max HP actuel — force-la à utiliser le heal de sa W d'abord, puis Q1-auto-Q2 pour la passer sous 50%. Pose une ward dans le tri-bush (le buisson à trois entrées près de ta tour) pour que son hookshot — l'ability de grappin qui la tire vers un mur ou un ennemi — ne te chope pas en revenant en lane.

## Power spikes & conditions de victoire

- **Niveau 2 (Q + E) :** Ton premier gros spike. Avec les deux abilities et le dash passif, un combo complet Q1-auto-E-auto-Q2-auto inflige quatre basic attacks plus deux ticks d'ability en deux secondes. La plupart des top laners ne peuvent pas matcher ces dégâts dans une mêlée melee.
- **Niveau 6 (R débloquée) :** ![R](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/champion/Ambessa.png) **Public Execution** débloque les pickoffs — éliminer un ennemi isolé en dehors du combat principal. La passive de R ajoute aussi de l'armor penetration (tes dégâts ignorent une partie de l'armor adverse) et de l'omnivamp (un petit heal proportionnel aux dégâts que tu fais avec tes abilities). Te sustain dans les skirmishes du river.
- **![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) Eclipse fini (~ minute 11-13) :** Ton plus gros spike de skirmish. Le bouclier et le bonus damage s'alignent avec chaque combo complet, donc les 1v1 et 2v2 autour des Voidgrubs basculent en ta faveur.
- **2 items + bottes (~ minute 18-22) :** Avec ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** online, regroupe-toi avec ton équipe pour les fights de Drake. R-blink sur le carry adverse — la suppression (un CC qui désactive toutes les abilities et le mouvement, même **Flash**) le bloque pendant 1.5 seconde, ce qui suffit à ton équipe pour follow-up.

## Erreurs courantes

- **Gaspiller Sundering Slam (le second cast de Q) sur un minion.** Le second cast empowered, c'est ton damage spike. Si tu touches un minion avec Q1 au lieu d'un champion, tu as cramé le reset sur une créature qui meurt en un coup de toute façon. Garde Q1 jusqu'à pouvoir la lander sur un champion ennemi.
- **R-blinker trop profond dans l'équipe adverse.** R va sur le champion ennemi **le plus loin** sur ta ligne, pas le plus proche. Si trois ennemis sont devant leur carry, ton blink les traverse et te dépose derrière toute l'équipe. Vérifie toujours le positioning avant d'appuyer sur R — aligne le carry comme seule cible entre toi et le point le plus loin.
- **Brace W dans le vide.** Le slam empowered ne se déclenche que si tu bloques effectivement des dégâts non-minion pendant la garde. Brace en lane contre les minions gaspille le cooldown pour rien. Utilise W de manière réactive — quand tu vois une animation d'ability ennemie démarrer, c'est là que tu brace.
- **Garder R pour l'engage parfait qui ne vient jamais.** R a 100+ secondes de cooldown en early. Si tu l'as up au niveau 6 et que le laner adverse vient juste de cramer son combo principal (ses key abilities sont en cooldown), engage et R-le. Un laner mort = deux waves de farm gratuit et une tower plate en plus (ces morceaux d'armor de tour qui rapportent du gold dans les 14 premières minutes).
- **1v1 contre des hyper-tanks en pensant que ta Q va les delete.** Les dégâts % max HP font peur sur le papier mais l'armor s'applique quand même. Une fois qu'un Ornn ou un Cho'Gath a fini ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** + items tank, tu ne peux pas les solo-kill. Regroupe-toi avec ton jungler à la place.

## Conseil avancé

Maîtrise le **dash-AA weave** (intercaler le dash avec la basic attack). Chaque ability cast déclenche ton dash passif et une AA empowered, donc la séquence optimale dans un combo complet est *cast → dash → AA → cast → dash → AA*, pas *cast → cast → cast → AA*. Appuyer sur la seconde ability avant que l'AA empowered ne parte annule le bonus sur cet auto. Rythme propre : **Q1 → dash en avant → AA → E → dash → AA → Q2 → dash → AA → R**. Entraîne-toi dans la Practice Tool (le mode entraînement hors-ligne) contre un target dummy (un mannequin d'entraînement fixe) jusqu'à ce que chaque AA registre ; en lane réelle ça transforme un trade de 2 secondes en sept instances de dégâts séparées — la différence entre une kill et un ennemi qui s'échappe à 50 HP.
