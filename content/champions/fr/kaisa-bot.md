---
title: "Kai'Sa ADC Build & Guide — Patch 16.9"
slug: "kaisa-bot"
language: "fr"
patch: "16.9"
champion: "kaisa"
role: "bot"
last_updated: "2026-05-05"
description: "Guide Kai'Sa ADC bot lane patch 16.9 : gestion des stacks de Plasma, build hybrid Kraken avec evolves, matchups clés, power spikes, erreurs courantes et un trick avancé."
quick_learn:
  champion_dd_id: "Kaisa"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hybrid"
  abilities:
    - key: "P"
      name: "Second Skin"
      description: "Les auto-attacks empilent du Plasma sur la cible ; le CC immobilisant des alliés ajoute des stacks bonus. Les items achetés font aussi evolve Q/W/E dès que Kai'Sa franchit des seuils cachés d'AD/AP/Attack Speed."
      dd_spell_id: "Kaisa_Passive"
    - key: "Q"
      name: "Icathian Rain"
      description: "Tire 6 missiles répartis entre les ennemis proches (portée 600). Les hits répétés sur la même cible font des dégâts réduits. Evolve à ~100 bonus AD : 12 missiles au lieu de 6."
      dd_spell_id: "KaisaQ"
    - key: "W"
      name: "Void Seeker"
      description: "Missile linéaire longue portée (3000 unités). Marque le premier ennemi touché de 2 stacks de Plasma et le révèle 4s. Evolve à ~100 AP : 4 stacks et -50% de cooldown si touche un champion."
      dd_spell_id: "KaisaW"
    - key: "E"
      name: "Supercharge"
      description: "Channel d'environ 1.5s avec bonus Move Speed et Ghosted (passe à travers les unités), puis 4s d'Attack Speed boostée. Les auto-attacks réduisent son cooldown. Evolve à 60% bonus Attack Speed : invisibilité brève."
      dd_spell_id: "KaisaE"
    - key: "R"
      name: "Killer Instinct"
      description: "Dash à côté d'un champion ennemi avec 5 stacks de Plasma (ou totalement ruptured par Plasma). Donne un shield à l'arrivée. Sert à finir une cible déjà chip-killed, pas à engage."
      dd_spell_id: "KaisaR"
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
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3124", name: "Guinsoo's Rageblade" }
    - { dd_id: "3031", name: "Infinity Edge" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contre HP/armor stackers (Cho'Gath, Sion, Malphite, Ornn) : armor pen en pourcentage qui ignore une part fixe de l'armure"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contre comps avec healing accumulé (Soraka, Vladimir, Aatrox) : applique Grievous Wounds (divise les soins par deux)"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contre burst AP lourd (Syndra, Veigar, Brand support) : magic resist + shield sous 30% HP"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "contre poke longue portée (Ezreal, Caitlyn, Xerath) : lifesteal qui soigne en plein fight, overheal stocké en shield"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "contre assassins ou divers (Zed, Kha'Zix, Talon) : la Ghost passive te fait passer à travers les unités en kitant"
  base_combo: ["W", "AA", "Q", "E", "AA"]
  win_condition: "Empile du Plasma sur la cible backline avec W et auto-attacks, R-dash dessus dès qu'elle a 5 stacks, finis avec Q et AAs renforcés pendant que la E ouvre la fenêtre d'Attack Speed."
  weakness: "La R exige des stacks de Plasma sur la cible : sans W qui touche ni CC allié, aucun engage. Squishy sans dash avant la R ; un mauvais timing E te fait manger tout le burst avant l'invisibilité."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 9923
      name: "Hail of Blades"
      icon_path: "perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png"
    primary_slots:
      - { dd_id: 8139, name: "Taste of Blood", icon_path: "perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
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
    primary_rationale: "Domination + Hail of Blades : 3 auto-attacks ultra-rapides juste après le dash R chargent les stacks de Plasma et le proc true damage de Kraken Slayer. Taste of Blood pour la sustain en lane, Sixth Sense révèle les wards, Ultimate Hunter baisse le cooldown de R."
    secondary_rationale: "Precision en secondaire : Triumph soigne 12% des HP manquants à chaque takedown (kill ou assist) et transforme la R-into-fight en exit safe. Coup de Grace ajoute 8% de dégâts sous 40% HP."
    secondary_alternative: "Contre une lane de poke lourd (Caitlyn + Lux, Ezreal + Karma) swap Precision pour Resolve avec Second Wind (regen quand un champion te touche) et Overgrowth (HP par minion absorbé) pour la sustain."
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "ashe", "sivir"]
      archetype: "Marksmen immobiles sans dash"
      reason: "Une fois Kai'Sa en portée R avec 5 stacks de Plasma, les ADC immobiles ne peuvent pas échapper au dash + Q burst. Ils doivent survivre au premier all-in (échange total visant la kill) sans aucun outil de reposition."
    - examples: ["senna", "kog-maw"]
      archetype: "Carrys late-game scaler sans escape"
      reason: "La W a 3000 unités de portée et les révèle 4s — Kai'Sa les poke depuis hors de leur threat range, puis R dès que Plasma rupture la cible."
    - examples: ["sona", "soraka", "yuumi"]
      archetype: "Enchanter squishy sans hard CC"
      reason: "Ces supports n'ont ni stun ni knock-up pour peel un dive backline. Kai'Sa pose la R sur l'ADC et le support n'a rien pour interrompre l'all-in une fois l'invisibilité de la E evolved active."
  counterpicks:
    - examples: ["draven", "lucian"]
      archetype: "Bullies de lane avec plus d'auto-attack damage early"
      reason: "Les deux out-trade Kai'Sa aux niveaux 1-3, avant le seuil d'evolve de Q. Les axes renforcées de Draven et le double-shot passive de Lucian gagnent chaque court trade window avant que Kai'Sa ne scale."
    - examples: ["leona", "nautilus", "pyke"]
      archetype: "Supports hard engage avec CC point-and-click"
      reason: "Kai'Sa n'a pas de dash avant la R, et la R exige une cible avec du Plasma. Une E de Leona ou un Q de Nautilus la lock en mid-lane avant qu'elle ne stack le moindre Plasma — la chain CC la tue avant que la E evolved n'active l'invisibilité."
    - examples: ["vayne", "twitch"]
      archetype: "Hyper-scalers late-game qui out-DPS Kai'Sa post-3-items"
      reason: "Le true damage de la W de Vayne et l'Expunge de Twitch montent plus fort que le scaling hybrid de Kai'Sa une fois les deux équipes à 3 items. Kai'Sa doit closer avant la minute 30 ou son damage relatif chute."
---

## Aperçu

Kai'Sa est une marksman hybrid : une championne qui scale à la fois avec l'AD (dégâts d'auto-attack) et l'AP (dégâts d'abilities), au lieu de stacker une seule stat. C'est la seule ADC (attack damage carry : auto-attacker à distance qui devient la source de dégâts principale du late) dont les abilities s'upgrade littéralement toutes seules dès qu'on franchit des seuils d'items cachés : 100 bonus AD evolve la Q, 100 AP evolve la W, 60% bonus Attack Speed evolve la E. L'ordre de build compte plus que pour n'importe quel autre marksman — un mauvais ordre signifie qu'un evolve ne déclenche jamais, et une Kai'Sa sans E evolved (pas d'invisibilité sur le dash) est une demi-championne.

Son game plan est un puzzle de stacks : chaque auto-attack pose du Plasma sur la cible, et dès qu'elle atteint 5 stacks (ou rupture totalement par Plasma) la **R** se déverrouille en dash longue portée par-dessus elle. Le CC du support (Crowd Control : stuns, slows, roots qui bloquent l'ennemi sur place) accélère le compteur gratuitement. En lane elle poke (chip damage longue portée pour rogner les HP sans s'engager) avec **W** à 3000 unités ; en teamfight (combats 5v5 qui décident des objectifs comme Drake ou Baron — monstres neutres qui donnent des buffs d'équipe) elle reste à portée AA max jusqu'à ce qu'une cible backline soit chip-killed, puis dash avec **R** + invisibilité de la **E** evolved pour clean up. Le skill ceiling se loge dans le choix de cible de la **R**.

## Build Recommandé

**Starting items :** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** (un peu d'AD + lifesteal — soigne une part des dégâts infligés) + 1 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**.

**Core items (dans l'ordre) :**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — premier power spike (le moment où un champion devient nettement plus fort dès qu'il complète un item). Donne AD + Attack Speed ; la passive Bring It Down inflige des true damage bonus tous les trois hits, ce qui charge la fenêtre de burst courte juste après la R.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — boots d'attack speed. Te poussent vers le seuil de 60% bonus Attack Speed nécessaire pour evolve la E.
3. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — ajoute deux flèches latérales à chaque auto-attack et plus d'Attack Speed. Les flèches latérales appliquent du Plasma aux ennemis proches, donc en teamfight Kai'Sa stack du Plasma sur toute l'équipe adverse en n'AA-ant qu'une seule cible. Cet item complète l'evolve de E.
4. ![Guinsoo's Rageblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3124.png) **Guinsoo's Rageblade** — donne AD, AP et Attack Speed dans un seul slot. Le moyen le moins cher de franchir le seuil de 100 AP qui evolve la W (cooldown refund + 4 stacks de Plasma par cast). Phantom Hit tous les trois AA ajoute encore plus d'on-hit damage.
5. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — multiplicateur de crit late-game (critical strike : chance qu'un AA inflige ~175% de dégâts). Combiné aux deux projectiles bonus de Runaan's, chaque AA roll 3 chances de crit en même temps.

**Situational items :**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contre HP/armor stackers (Cho'Gath, Sion, Malphite, Ornn). Remplace ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** en 5e item si l'équipe adverse a 2+ tanks.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contre comps avec healing accumulé (Soraka, Vladimir, Aatrox). Applique Grievous Wounds (effet qui divise les soins reçus par deux).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contre burst AP lourd (Syndra, Veigar, Brand support — un burst mage te delete en 1-2 secondes avec un seul combo). Magic resist + shield sous 30% HP achète la seconde de R nécessaire pour escape.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — contre poke lourd. Le lifesteal soigne en plein fight ; en overheal il stocke des HP en shield temporaire.
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — contre assassins ou divers (Zed, Kha'Zix, Talon — champions designés pour dive sur la backline). La Ghost passive te fait passer à travers minions et champions ennemis pendant que tu kit (reculer en attaquant).

**Boots :** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** est la seule option correcte. L'attack speed alimente directement l'evolve de E et le DPS de la Q multi-missile pendant les combos post-R.

**Skill order :** Maxe **Q** en premier (DPS principal, evolve le plus important). Maxe **E** en deuxième (plus de cooldown reduction et fenêtre d'Attack Speed plus longue). Maxe **W** en dernier (utility seulement — longue portée + stacks de Plasma, mais le pire base damage par skill point). Prends **R** aux niveaux 6, 11, 16.

**Runes :** Tree primaire **Domination** (l'arbre du burst-AA) avec **Hail of Blades** (3 auto-attacks ultra-rapides dès que tu commences à AA un champion), **Taste of Blood** (soigne 18-30 HP en endommageant un champion environ toutes les 20s), **Sixth Sense** (un ping wallhack qui révèle une ward ennemie environ toutes les 75s), **Ultimate Hunter** (baisse jusqu'à 25% du cooldown de R quand tu fais des takedowns). Tree secondaire **Precision** avec **Triumph** (soigne sur takedown — kill ou assist) et **Coup de Grace** (+8% de dégâts contre ennemis sous 40% HP).

## Matchups clés

- **Caitlyn :** Te out-range fortement au niveau 1 (650 AA contre 525). Reste derrière ta ligne de minions et n'avance que quand elle pose une trap (elle est animation-locked pendant la pose). Power-farme en sécurité (concentre-toi uniquement sur le gold des minions, sans risques) jusqu'à ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer**, puis cherche les picks cross-map au W dès que tu peux dasher avec R.
- **Draven :** Perd la guerre des AA directe — ses axes Q font bien plus par AA que ton basic. Évite les trades 1-pour-1 ; commit seulement quand ses axes tombent au sol (timer de 2.5s). Garde **W** comme outil de poke jusqu'à ce que ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** soit online.
- **Lucian :** Perd contre Kai'Sa post-6 mais la bully aux niveaux 2-5 avec son double-shot passive. Dodge sa **Q** derrière les minions, garde **E** comme disengage panique (ability qui casse l'all-in adverse). Tiens la priorité de lane en farmant sous tour jusqu'au niveau 6, puis cherche l'all-in à sa prochaine erreur.
- **Vayne :** Kai'Sa gagne la lane early (Vayne est melee tant qu'elle n'a pas 3 items). Push la wave (envoie tes minions vers sa tour) dès que tu peux, harass (chip damage pour rogner ses HP) au **W** à chaque cooldown. Après la minute 25 elle scale plus fort, donc closer la game en mid-game ou ça pench pour elle.
- **Jhin :** Matchup de poke longue portée. Sa **W** est un slow root de 3550 unités qui ignore ton dodge si elle touche un minion d'abord. Reste derrière ta première ligne de minions et ne trade jamais pendant sa reload window — il est au max de sa force avec un mag plein, au plus faible pendant les 2.5s après son 4e tir.

## Power spikes & conditions de victoire

- **Niveau 6 :** la première **R** ouvre les tentatives de pick (éliminer un ennemi isolé hors teamfight) sur les cibles de lane chip-killed. Touche **W** + 2 AA sur l'ADC adverse, puis dash avec **R** dès qu'il avance pour last-hit (auto-attack qui donne le coup final à un minion).
- **![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer (~ minute 12-14) :** la priorité de lane bascule. Tu peux shove (push la wave vite) au Q, puis roam (quitter la lane pour aider les alliés) pour des plays cross-map sur Drake ou des skirmishes mid (petits combats 2-3 joueurs en river ou jungle).
- **Q evolve (~ minute 22-24, après ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer + ![Guinsoo's Rageblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3124.png) Guinsoo's Rageblade) :** Q tire désormais 12 missiles au lieu de 6 — le burst single-target sur champions double presque. Force les teamfights à chaque objectif.
- **E evolve (Berserker's + Runaan's + Guinsoo's complets) :** la E donne désormais une invisibilité brève pendant le channel. C'est la différence entre dasher avec R et mourir instantanément, et dasher avec R et prendre la kill — l'invisibilité te rend untargetable pendant ~0.5s après le dash, juste assez pour dodge le follow-up CC.

## Erreurs courantes

- **Lancer la R sans stacks de Plasma prêts.** La R exige une cible avec 5 stacks de Plasma. Si tu la presses sur une cible à 0-2 stacks, le spell ne fait rien et passe en cooldown plein. Toujours W puis AA d'abord, regarde l'indicateur de Plasma au-dessus de la barre de HP, puis commit la R.
- **Lancer la R à 100% HP dans l'équipe adverse.** La R est un finisher, pas un engage. Le shield de R est petit (~110 + 25% bonus HP) et dure 2s — tu meurs instantanément si la frontline adverse est encore debout. Attends au moins une de ces conditions : cible sous 40% HP, CC ennemi en cooldown, ou ton équipe déjà sur eux.
- **Trop push la wave sans vision.** Kai'Sa n'a pas d'escape intégré tant que la E n'est pas evolved au minute 22+. Si tu push au-delà du mid-river sans que ton support ward les tribush (petits buissons qui bloquent la vision) et la river, le jungler adverse te kill gratuitement.
- **Skipper ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) Berserker's Greaves pour des boots plus tanky.** Les ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** semblent tentantes contre une équipe AD-heavy, mais elles retardent le seuil de 60% Attack Speed qui evolve la E. Pas d'evolve = pas d'invisibilité = ta R est une condamnation à mort.
- **Garder la E pour un engage offensif.** La vraie valeur de la E, c'est la fenêtre brève de Ghost (passe à travers les unités) + Attack Speed pendant un fight. Presse E **après** la R, pas avant — l'invisibilité de la E evolved s'active au début du channel, donc la cast depuis un endroit safe gaspille les frames d'immunité.

## Conseil avancé

Le finisher **flash R** se joue à l'inverse de la façon dont Kai'Sa se joue normalement. Quand un ADC adverse s'enfuit à bas HP dans la fog of war (les zones de la map que tu ne vois pas actuellement) et que ta **R** te dasherait hors position, **Flash** (summoner spell qui te téléporte de 400 unités dans une direction choisie) vers lui d'abord pour entrer en portée R, puis R immédiatement. Ça brûle le Flash mais ça transforme une quasi-fuite en kill garantie en haut elo. Le trick : buffer le cast de R 0.1s après le Flash en maintenant le bouton R — l'input buffer de League déclenche la R pile au moment où le Flash atterrit, donc l'ennemi ne voit jamais le dash arriver.
