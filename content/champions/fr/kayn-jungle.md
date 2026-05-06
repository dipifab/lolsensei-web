---
title: "Kayn Jungle Build & Guide — Patch 16.9"
slug: "kayn-jungle"
language: "fr"
patch: "16.9"
champion: "kayn"
role: "jungle"
last_updated: "2026-04-29"
description: "Guide Kayn jungle pour League of Legends Patch 16.9 : choix entre Rhaast et Shadow Assassin, jungle clear, gank timing, matchups clés et power spikes."
quick_learn:
  champion_dd_id: "Kayn"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Fighter / Assassin"
  abilities:
    - key: "P"
      name: "The Darkin Scythe"
      description: "Frapper les ennemis remplit des orbs de deux couleurs : rouges contre melee/fighter, bleus contre ranged/mage. Remplir une barre à 100% transforme Kayn au niveau 6 en Rhaast (rouge) ou Shadow Assassin (bleu)."
      dd_spell_id: "Kayn_Passive"
    - key: "Q"
      name: "Reaping Slash"
      description: "Dash court qui frappe les ennemis sur la trajectoire, puis un slash AOE. Mobilité principale et outil de waveclear. Le slash de Rhaast inflige des dégâts % HP max."
      dd_spell_id: "KaynQ"
    - key: "W"
      name: "Blade's Reach"
      description: "Slow linéaire à longue portée. La version Rhaast knock-up les ennemis. La version Shadow Assassin se lance en mouvement et a plus de range."
      dd_spell_id: "KaynW"
    - key: "E"
      name: "Shadow Step"
      description: "Traverse les murs avec bonus de move speed et un petit heal en entrant dans le terrain. Shadow Assassin obtient durée plus longue, slow immunity et cooldown réduit."
      dd_spell_id: "KaynE"
    - key: "R"
      name: "Umbral Trespass"
      description: "Se cache à l'intérieur d'un champion marqué (mark appliqué pendant 3.15s après les dégâts) quelques secondes, puis ressort en burst énorme. Te rend untargetable : utile pour esquiver les CC."
      dd_spell_id: "KaynR"
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
    - { dd_id: "1103", name: "Mosstomper Seedling" }
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
  situational_items:
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "vs comps qui kitent avec plusieurs carries ranged — l'active slow garde Rhaast collé après E + Q"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "vs double AD (Yasuo + Caitlyn) — le bleed étale le burst physique reçu"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs burst magique ability-based (Syndra, Veigar, Annie) — donne MR et un shield sous seuil HP"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "Shadow Assassin vs CC single-target (Morgana Q, Ashe R) — le spellshield bloque le hook avant ton engage"
    - dd_id: "6694"
      name: "Serylda's Grudge"
      against: "Shadow Assassin vs cibles avec armor (Tabi tank, Bramble Vest) — armor pen plus slow on-damage"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "Rhaast vs stack d'armor (Sion, Malphite) — broie l'armor à chaque coup et donne bonus HP"
  base_combo: ["E", "Q", "W", "AA", "R"]
  win_condition: "Survis jusqu'au niveau 6 pour te transformer : Rhaast contre tanks de frontline, Shadow Assassin contre carries squishy. Punis les timings du jungler ennemi et snowball avec des picks de R."
  weakness: "Kayn pre-form (niveaux 1-5) est l'un des junglers les plus faibles : clear lent, pas de sustain, facile à invade. Si tu prends du retard avant la transformation, le scaling s'effondre."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8105, name: "Relentless Hunter", icon_path: "perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["sett", "darius", "garen", "ornn"]
      archetype: "Bruisers melee tanky et juggernauts de frontline"
      reason: "Les dégâts % HP de la Q de Rhaast et le knock-up du W déchirent les cibles HP élevées que les autres assassins peinent à tuer, et tu remplis les orbs rouges naturellement en les fightant en skirmishes."
    - examples: ["jinx", "caitlyn", "ashe", "vayne"]
      archetype: "Carries ranged immobiles (ADCs sans dash)"
      reason: "Le R de Shadow Assassin te fait apparaître dans leur position et les burst à travers la frontline — ils n'ont aucun outil pour esquiver le channel pendant que tu es untargetable."
    - examples: ["lulu", "soraka", "yuumi"]
      archetype: "Supports enchanters squishy"
      reason: "Shadow Assassin les one-shot en 1-2 abilities en passant par un mur avec E, retirant le peel et le disengage de l'équipe avant même le début du fight."
  counterpicks:
    - examples: ["lee-sin", "elise", "graves"]
      archetype: "Junglers early-game forts avec pression d'invade"
      reason: "Ils menacent les trois premiers camps de Kayn avant sa transformation. Un invade réussi au niveau 2-3 plafonne le scaling parce qu'il ne peut pas défendre sa jungle sans un clear fort."
    - examples: ["malphite", "rammus", "maokai"]
      archetype: "Tanks à CC dur point-and-click"
      reason: "Le taunt Q de Rammus ou le R de Malphite chopent Kayn hors de E et le verrouillent hors de sa combo. Même l'untargetability du R de Shadow Assassin ne sauve pas si tu es stun avant de cast."
    - examples: ["xin-zhao", "warwick"]
      archetype: "Junglers avec dueling fort et outils de counter-gank"
      reason: "Ils battent Kayn 1v1 dans sa phase early faible et peuvent l'invade avant la form. S'ils campent ta jungle, tu ne peux pas répondre avant le niveau 6."
---

## Aperçu

Kayn est un jungler melee assassin/fighter avec une mécanique de transformation unique : au niveau 6 il devient soit **Rhaast** (forme rouge, hybrid bruiser qui se soigne sur les dégâts d'abilities et excelle contre les tanks melee), soit **Shadow Assassin** (forme bleue, AD assassin qui supprime les carries squishy — "squishy" signifie champions à hauts dégâts et faible défense, comme les ADC). La forme dépend des "orbs" remplis pendant l'early game — fight les melee/fighters pour remplir les orbs rouges, fight les ranged/mages pour remplir les bleus. La première barre à atteindre 100% verrouille la forme.

Ton game plan se joue en deux temps. **Pre-transformation (niveaux 1-5)** tu es faible : clear avec **Q** + **W** efficacement, évite les skirmishes (petits combats à 2-4 joueurs, pas des teamfights complets) que tu peux perdre, et essaie de power-farm jusqu'au 6. **Post-transformation** tu deviens une vraie menace : Rhaast cherche les fights étendus et dive sur les frontliners, Shadow Assassin cherche les picks de **R** (dive = sauter sur un ennemi sous tour ou en terrain ouvert pour le tuer) sur les carries isolés avant que l'équipe ne se regroupe.

## Build Recommandé

**Starting items :** ![Mosstomper Seedling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1103.png) **Mosstomper Seedling** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Mosstomper donne de la tenacity (résistance au crowd control) sur les fights d'objectifs, ce dont Kayn a besoin dans les deux formes. Prends ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** si tu prévois d'aller Shadow Assassin et veux du move speed pour les picks.

**Core items (dans l'ordre) :**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — premier item Rhaast. AD, attack speed, active slow. Combine bien avec le dash de la **Q** pour rester collé aux carries qui kitent (kite = reculer en attaquant pour garder distance avec les melee).
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — boots par défaut contre toute équipe avec stuns ou roots. Passe à ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** contre lourds dégâts auto-attack (deux AD carries).
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP, AD scaling, shield de sauvetage (HP-threshold passive : shield qui s'active quand ton HP descend sous un seuil). Obligatoire sur Rhaast pour survivre aux fights longs que tu veux engage.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — pilier Rhaast. AD, armor, ability haste, et effet bleed (dégâts étalés sur plusieurs secondes au lieu d'être encaissés d'un coup). Meilleur item contre des compositions à deux damage dealers physiques forts.

**Core path Shadow Assassin** (remplace les items 1, 3, 4 ci-dessus) :

1. ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — premier item de lethality (armor pen flat qui scale à la baisse contre cibles à haut armor) pour Shadow Assassin. AD, lethality, ability haste, plus un active de zone qui aide le clear ET finit les cibles entamées après la sortie de **R**.
2. ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — burst plus un active qui donne du move speed pour les picks à travers la map.
3. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — passive d'execute qui finit les cibles sous 5% HP, parfait après le burst de **R**.

**Situational items :**

- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — vs burst magique ability-based (Syndra, Veigar, Annie). Donne magic resist plus shield de sauvetage sous seuil HP.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — Shadow Assassin vs CC single-target (Morgana Q, Ashe R). Le spellshield (passive qui bloque la prochaine ability ennemie) sauve ton engage.
- ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — Shadow Assassin vs stack d'armor (Tabi tank, Bramble Vest). Armor pen plus slow quand tu les touches.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — Rhaast vs Sion, Malphite, ou toute frontline qui stacke l'armor. Broie l'armor à chaque coup et donne bonus HP.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — vs poke lourd d'une backline magique (Xerath, Vel'Koz). Beaucoup d'HP plus shield magique qui se régénère hors combat.

**Boots :** ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** est l'option par défaut pour la tenacity (durée réduite des stuns et slows). Passe à ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** contre deux AD carries.

**Skill order :** Max **Q** d'abord (reset sur les camps jungle et dégâts principaux). Max **E** ensuite (cooldown réduit pour repositionnement et wall plays). Max **W** en dernier. Mets un point dans **R** aux niveaux 6, 11, 16.

**Runes :** Primaire **Precision** avec **Conqueror** (stack adaptive force sur les fights étendus, idéal pour les dives prolongés de Rhaast), **Triumph**, **Legend Alacrity**, **Coup de Grace**. Secondaire **Domination** avec **Sudden Impact** (extra lethality après entrée de mur en **E** ou dash **Q**) et **Relentless Hunter** (move speed hors combat pour le pathing jungle). Pour un setup Shadow Assassin one-shot, **Hail of Blades** en Domination est l'alternative — il donne un court burst d'attack speed juste après la sortie de **R**.

## Matchups clés

- **Lee Sin / Elise :** Bullies de l'early game. Commence tes camps top side si ton top laner a du CC pour aider (counter-gank), et ward les entrées raptor/red à 1:30. NE conteste PAS le Scuttle Crab du river si ton top n'avance pas avec toi — tu perds le 1v1 avant la form.
- **Sett / Darius (top) :** Cibles de feed gratuit pour Rhaast si tu gank top. Leur kit les force en melee, ce qui remplit tes orbs rouges vite. Attends qu'ils utilisent leur ability principale (W de Sett, pull de Darius) et engage avec **E** à travers le mur + **Q** + **W** knock-up si Rhaast.
- **Vayne / Caitlyn (bot) :** Cibles prioritaires pour Shadow Assassin. Pas de dash pour esquiver le **R**, et ils remplissent les orbs bleus en fightant à distance. Après la form, gank bot lane on cooldown.
- **Malphite / Rammus (counter top jungle) :** Leur CC dur point-and-click te verrouille hors de ta combo. Build ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** tôt et n'engage jamais sans le CC de ton support prêt avant.
- **Yuumi / Lulu (support ennemi) :** Cibles gratuites pour Shadow Assassin en teamfights late-game. **R** sur eux depuis une position de flank dès qu'ils se détachent du carry — pas de peel pour eux-mêmes.

## Power spikes & conditions de victoire

- **Niveau 6 + transformation :** C'est le spike (un "spike" est le moment où ton champion devient bien plus fort grâce à un niveau ou un item). Avant la transformation tu es sous la moyenne ; après, tu es un top-3 jungler. Tempo ta première big play (un gank ou un pick de **R**) à la seconde où tu te transformes, pendant que l'équipe ennemie te croit encore faible.
- **Contrôle du Crab (3:15 et 6:00) :** Le Crab donne XP et vision. En Kayn pre-form tu ne peux pas duel pour ; amène ton top ou mid laner pour contester, ou cède-le proprement et farm les camps au lieu de mourir.
- **Premier Drake fight (6-9 minutes) :** Kayn pre-form est mauvais en brawls 5v5. Si ton équipe peut prendre Drake sans toi, accordez-vous sur un trade de Voidgrubs (les petits vers du river top qui donnent une passive à celui qui les finit) sur le côté opposé et farm ta jungle pendant qu'ils fight.
- **Premier item complété (~ 13-15 minutes) :** ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** pour Rhaast ou ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** pour Shadow Assassin : c'est là que ton conversion rate de gank passe de "demande un setup parfait" à "kill avec juste un flash du laner".
- **Trois items Shadow Assassin (~ 22-25 minutes) :** Avec ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** online, ta combo **R** one-shot tout squishy sous 5% HP. Force des pickoffs (kills sur cibles isolées) avant les fights d'objectifs.

## Erreurs courantes

- **Verrouiller la mauvaise forme pour la team comp.** Ne pick pas Shadow Assassin par défaut chaque partie parce que c'est plus flashy. Regarde l'équipe ennemie : 3+ tanks/bruisers = Rhaast (les dégâts % HP et le sustain comptent). 2+ carries squishy sans dash = Shadow Assassin. Remplir la mauvaise barre est ta faute : fight les ennemis correspondants jusqu'à ce que la bonne barre se verrouille.
- **Gank avant le niveau 6.** Les ganks de Kayn pre-form font presque zéro dégâts. À moins que le laner ennemi soit sous 30% HP ou hard-CC-lock, ton gank gaspille du temps que tu devrais passer à farm. Gank uniquement sur des setups d'overkill (Flash + ulti claire du laner) jusqu'à ta transformation.
- **Utiliser R en défense sans sortie.** **Umbral Trespass** te rend untargetable pendant que tu es à l'intérieur de l'ennemi, mais tu ressors au même endroit où tu as cast. Si tu ult dans un fight 5v5 pour esquiver le CC et que ton équipe ne gagne pas, tu ressors dans la même mort que tu cherchais à éviter. Utilise **R** pour finir le kill ou quand des coéquipiers arrivent, pas comme un Flash de panique.
- **Passer le mur avec E dans l'équipe ennemie.** Les wall walks de **Shadow Step** sont stylés mais le cooldown est long. Engage à travers un mur sans escape derrière te commit totalement. Ne va pas all-in (s'engager dans le fight sans retraite) à travers un mur sauf si **R** est up et que tu as une cible claire.
- **Ignorer les fights d'orb rouge en Rhaast.** Si tu as choisi Rhaast, chaque fight contre une cible melee remplit la barre plus vite. Ne fuis pas un skirmish avec le top laner : dive, remplis la barre, et force la form à 5-6 minutes au lieu de 8.

## Conseil avancé

Utilise **E** offensivement comme outil de vision, pas seulement comme escape. Marcher dans le mur de la jungle ennemie et attendre 1.5 seconde dans le terrain révèle si leur jungler est de l'autre côté sans te commit — Kayn est invisible pour eux pendant qu'il est dans le mur. Si le camp est pris, tu sais que l'ennemi est de ton côté de la map et tu rotates en arrière. Si le camp est up, tu peux traverser le mur pour invade avec combo **Q** + **W** depuis un angle qu'ils n'attendent pas. Ce seul truc convertit Kayn de "scaling jungler" en "information jungler" en mid-game.
