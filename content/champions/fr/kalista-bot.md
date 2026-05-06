---
title: "Kalista Bot Build & Guide — Patch 16.9"
slug: "kalista-bot"
language: "fr"
patch: "16.9"
champion: "kalista"
role: "bot"
last_updated: "2026-05-05"
description: "Guide Kalista bot lane pour League of Legends Patch 16.9 : build on-hit, mécanique Soulbound avec le support, matchups clés, power spikes, erreurs courantes et astuce finale."
quick_learn:
  champion_dd_id: "Kalista"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Marksman / On-hit Skirmisher"
  abilities:
    - key: "P"
      name: "Martial Poise"
      description: "Chaque auto-attaque et chaque Pierce déclenchent un petit hop pendant le wind-up. Un clic de mouvement avant le tir fixe la direction du saut."
      dd_spell_id: "Kalista_Passive"
    - key: "Q"
      name: "Pierce"
      description: "Skillshot linéaire. Si elle tue la première cible, la lance continue et transfère tous les stacks de Rend à l'ennemi suivant touché."
      dd_spell_id: "KalistaMysticShot"
    - key: "W"
      name: "Sentinel"
      description: "Passive Soulbound : lie Kalista à un allié. Quand tous les deux frappent la même cible, dégâts magiques bonus basés sur les PV max."
      dd_spell_id: "KalistaW"
    - key: "E"
      name: "Rend"
      description: "Chaque auto-attaque et chaque Pierce plantent une lance dans la cible. L'activation les arrache : dégâts proportionnels au stack, slow en zone."
      dd_spell_id: "KalistaExpungeWrapper"
    - key: "R"
      name: "Fate's Call"
      description: "Met le Soulbound en stasis et le ramène sur Kalista. L'allié peut relancer pour partir en dash avec knockback qui s'arrête au premier champion touché."
      dd_spell_id: "KalistaRx"
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
    - { dd_id: "3091", name: "Wit's End" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3153", name: "Blade of The Ruined King" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contre tanks/bruisers à 2500+ PV (Sion, Ornn, Cho'Gath) : armor pen scale avec leur avantage PV sur toi"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contre comps avec heal stack (Soraka support, Aatrox, Dr. Mundo) : Grievous Wounds coupe les soins de moitié"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "contre burst/assassin comps (Zed, Talon, Kha'Zix) : la seconde vie laisse le Soulbound enchaîner après ton R"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contre hard CC single-target (flèche Ashe, Q Morgana, hook Blitzcrank) : bloque un sort, ton hop reset survit"
  base_combo: ["Q", "AA", "E", "AA", "R"]
  win_condition: "Stack Rend à 6+ sur la cible prioritaire en teamfight, puis Q reset sur une seconde cible. Avec Wit's End et Blade of The Ruined King en ligne, tu bats les autres marksmen en combats prolongés."
  weakness: "Tu scales avec ton support : un Soulbound qui ne fixe pas les cibles te laisse sans engage. Les hook supports (Blitzcrank, Thresh) attrapent ton partenaire hors de portée du hop et le fight finit avant ton R."
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
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8139, name: "Taste of Blood", icon_path: "perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png" }
      - { dd_id: 8105, name: "Relentless Hunter", icon_path: "perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision avec Press the Attack : trois hops sur la même cible procent PtA pour +12% de dégâts bonus pendant que Rend stack vite. Triumph récompense le skirmish constant, Legend: Alacrity nourrit la courbe on-hit, Coup de Grace finit sous 40% PV."
    secondary_rationale: "Domination secondaire : Taste of Blood donne du sustain après chaque trade court (les hop windows te laissent partir propre), Relentless Hunter stack sur les takedowns et ajoute la vitesse hors combat pour roam mid avec ton Soulbound."
    secondary_alternative: "Contre les lanes de gros poke (Caitlyn + Lux, Varus + Brand), swap Domination pour Resolve avec Bone Plating (-30/-60 sur les 3 premiers coups) et Second Wind (regen PV qui monte sous 50% PV) pour tenir les niveaux 1-6."
matchup_draft:
  pick_into:
    - examples: ["aphelios", "kog-maw", "sivir"]
      archetype: "ADC late-game immobiles sans dash"
      reason: "Leur seule sécurité, c'est le placement. Kalista hop à chaque auto, donc elle trade en mêlée sans jamais s'arrêter — pas de réponse à part Flash, et tu stack Rend plus vite qu'ils ne resettent le trade."
    - examples: ["jinx", "varus", "ashe"]
      archetype: "Marksmen statiques dépendants du lockdown du support"
      reason: "Si leur support engage en premier, ton R de repositionnement et l'on-hit magique de Wit's End battent leur courbe d'AS. Ils ne peuvent pas kite un champion qui ferme 350 unités à chaque auto."
    - examples: ["caitlyn"]
      archetype: "ADC artillerie longue portée en lane phase"
      reason: "Caitlyn te poke aux niveaux 1-3, mais son combo trap-and-net est un seul dash en cooldown long : avec bottes et Wit's End, tu la marches au niveau 6."
  counterpicks:
    - examples: ["draven", "samira", "lucian"]
      archetype: "Marksmen lane-bully avec gros all-in niveaux 1-3"
      reason: "Leur dégât early dépasse ton hop spacing (la distance de sécurité que tu gardes en sautant à chaque auto) avant que tu aies l'AS pour stack Press the Attack. Une Q ratée au lvl 2 et ils prennent un kill avant que ton support réagisse."
    - examples: ["blitzcrank", "thresh", "nautilus"]
      archetype: "Hook supports pickés contre ton Soulbound"
      reason: "S'ils hook ton support, le lien Soulbound n'a plus aucune valeur : tu ne peux pas le R hors de la ligne du grab, et l'engage se passe à 800+ unités hors de ta hop window."
    - examples: ["tristana", "vayne"]
      archetype: "Hypercarries mobiles avec self-peel"
      reason: "Tristana W sort de ton dive, Vayne tumble cancel le timer du stack de Press the Attack. Toutes les deux scale en items qui battent ton core on-hit en 1v1 après la 25e minute."
---

## Aperçu

Kalista est une marksman skirmisher on-hit ("on-hit" = items dont les effets se déclenchent à chaque auto-attaque, pas via les sorts ; "skirmisher" = champion qui gagne en trades courts et répétés, pas en un seul gros all-in) définie par **Martial Poise (P)** : chaque auto-attaque et chaque **Pierce (Q)** lui offrent un petit hop pendant le wind-up. Ce saut transforme les autos en mobilité : elle marche sur les ennemis qui restent statiques et désengage des menaces mêlée sans jamais arrêter de tirer. Le prix à payer, c'est un early game fragile (AD de base bas, aucun shield) et l'un des skill floors les plus hauts parmi les marksmen : le hop se commande au clic de mouvement frame par frame.

Son game plan tourne autour des stacks de **Rend (E)**. Chaque auto plante une lance dans la cible ; l'activation les arrache pour des dégâts qui montent en flèche. Stack 6-8 lances sur un tank, puis E pour effacer le squishy (champion à gros dégâts mais peu de défenses, typique des ADC) à côté, et tu as terminé le teamfight. La mécanique Soulbound de **Sentinel (W)** la lie pour toute la partie à un allié (en général le support), et **Fate's Call (R)** catapulte cet allié en dash avec knockback. Avec un engage support comme Thresh ou Leona, le R de Kalista transforme un flank Soulbound en pick garanti (éliminer un ennemi isolé hors du teamfight). Avec un poke support, elle scale moins bien et son R devient un panic disengage plutôt qu'un outil d'engage.

## Build Recommandé

**Items de départ :** Doran's Blade + 1 Health Potion. Saute Doran's Shield même contre les lanes ranged — Kalista a besoin de l'AD supplémentaire pour convertir son hop spacing en kill threat.

**Items core (dans l'ordre) :**

1. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — premier item : ton spike d'attack speed (AS), c'est-à-dire le premier grand bond en vitesse d'attaque. Ajoute des dégâts magiques à chaque auto, scale parfaitement avec la fréquence des hops, et le magic resist compte contre les combos AP support + AP mid.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed bonus pour les stacks de Press the Attack et l'application rapide de Rend.
3. ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** — inflige des dégâts égaux à un pourcentage des PV max actuels de la cible à chaque auto, plus un active qui slow. Termine l'échange en mêlée et reste le meilleur deuxième item contre n'importe quelle frontline (les tanks/bruisers qui ouvrent les teamfights).
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — les bolts appliquent Rend sur deux cibles supplémentaires. C'est ce qui transforme le E de Kalista en spike AOE de teamfight (area of effect : dégâts qui touchent plusieurs cibles à la fois).
5. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — cinquième item : AD plus le shield de lifesteal pour les fights longs en late.

**Items situationnels :**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contre les tanks à 2500+ PV (Sion, Ornn, Cho'Gath) ; l'armor pen scale avec leur avantage PV sur toi.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contre les comps qui empilent les soins (Soraka support, Aatrox, Dr. Mundo). Grievous Wounds coupe les heals de moitié.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — contre les burst/assassin comps (Zed, Talon, Kha'Zix) ; la seconde vie laisse le temps au Soulbound de suivre après le R.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contre le hard CC single-target (CC = crowd control : stuns, roots, knock-ups qui te clouent sur place). Bloque une flèche d'Ashe ou un hook de Blitzcrank, ton hop reset survit.

**Bottes :** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** par défaut. Switch sur ![Boots of Swiftness](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3009.png) **Boots of Swiftness** si l'équipe ennemie a 4+ slows que tu ne peux pas dodge avec le hop.

**Skill order :** Max **Q** en premier (ton dégât principal + la mécanique de transfert Rend), **E** en deuxième, **W** en dernier. Un point en **R** aux niveaux 6, 11, 16. Démarre **Q** au niveau 1 pour avoir un poke fiable sur les fights d'invade.

**Runes :** Primaire **Precision** avec **Press the Attack**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secondaire **Domination** avec **Taste of Blood** et **Relentless Hunter**. Contre les lanes de gros poke (Caitlyn + Lux, Varus + Brand), swap Domination pour Resolve avec **Bone Plating** et **Second Wind** pour survivre aux niveaux 1-6.

## Matchups clés

- **Aphelios :** Kalista gagne post-6 si elle tient son hop spacing. Les damage spikes d'Aphelios varient selon l'arme, donc step-up uniquement quand son off-hand est Severum (lifesteal) ou Crescendum (turret) — les deux sont courte portée et tu le marches.
- **Caitlyn :** Lane perdante niveaux 1-5 : ses traps et ses 650 d'auto-range punissent ton besoin de marcher en avant pour stack Rend. Prends **Bone Plating** secondaire, demande au support de tank une trap, puis cherche le niveau 6 avec **R** + gank jungle.
- **Draven :** Lane bully. Évite les trades quand son **Spinning Axe** est up ; son auto-reset enchaîne ton hop en kill garantie si tu restes statique. Stack un Rend par auto sur minion, garde E pour quand il te touche en Q, puis re-engage quand sa hache est down.
- **Jinx :** Égale avant 6, tu scales mieux après 6. Le hop de Kalista counter le slow du **W** de Jinx parce que le dash part avant l'impact du projectile. Après le niveau 9, tu all-in chaque wave que Jinx est forcée de clear.
- **Vayne :** Matchup de scaling perdant après la 25e minute. Tue-la dans les deux premiers items — Wit's End en ligne avant son Kraken Slayer est la seule fenêtre où Kalista gagne en 1v1 net.

## Power spikes & conditions de victoire

- **Niveau 2 :** Avec **Q** plus un point en **E**, tu as un trade pattern fiable : AA, AA, E pour des dégâts stack. La plupart des lanes perdent cet échange.
- **Niveau 6 :** Le premier **Fate's Call** débloque le flank Soulbound (entrer dans le fight par un côté que les ennemis ne regardent pas) : place ton support dans un side-bush, R-le sur le support adverse, et enchaîne avec ton Rend stack.
- **![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) Wit's End complété (~minute 11-13) :** Ta courbe d'AS décolle. Tu marches la plupart des marksmen aux niveaux 6-9 et tu deviens le leader DPS auto-attaque côté bot.
- **![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) Blade of The Ruined King en ligne (~minute 18-21) :** Le % PV max on-hit shred les frontlines. Force un drake ou un Rift Herald ici — ton E stack sur le tank efface l'ADC ennemi à côté.

## Erreurs courantes

- **Cast Rend à 1-2 stacks pour du chip damage.** Rend scale fort avec le nombre de stacks : spam E tôt vide la pile avant le seuil de kill. Garde E jusqu'à 5+ stacks sur la cible prioritaire, ou jusqu'à conclure le kill (E rembourse son CD sur kill, donc un cast finisher reset le cycle).
- **Oublier que le hop est une commande de mouvement.** Les nouveaux Kalista auto-attaquent et restent statiques. Le hop ne se déclenche que si tu cliques une direction de mouvement pendant le frame du wind-up. Entraîne-toi en alternant clic et attaque en custom games avant la lane.
- **Utiliser R en engage offensif avec un poke support (Karma, Lulu).** Leurs kits n'ont aucun follow-up CC après le knockback. Garde R en panic save : stasis ton support pour dodge une flèche d'Ashe ou un hook de Blitzcrank, puis désengage.
- **Skip Wit's End contre des comps full AD.** Même là, Wit's End reste ton spike d'AS le plus rapide et les dégâts magiques s'appliquent indépendamment de l'armor. Achète-le en premier ; les items de pénétration AD vont en slot 4 ou 5.
- **Rester en fight avec 0 hop dispo.** Le hop est sur chaque auto, mais s'il n'y a aucun ennemi à portée d'attaque, tu marches. Surveille quand tu n'as plus de cibles attaquables et dégage — Kalista sans hop, c'est un marksman à 580 MS sans dash, mobilité plus basse que Caitlyn.

## Conseil avancé

Entraîne le **Q reset sur les minions pour fuir en jungle**. Quand tu fais un wall jump près du river ou du tri-bush, queue une **Q (Pierce)** sur la wave de minions derrière le mur : si la lance tue le minion, elle continue et te laisse hop le mur dans le même frame. L'astuce te fait fuir un gank qui a coupé ta ligne de river, parce que le frame du hop compte comme du mouvement et bypasse la hitbox du mur. Bind un quick-cast **Q** pour gagner sur le temps de réaction.
