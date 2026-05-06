---
title: "Gnar Top Build & Guide — Patch 16.9"
slug: "gnar-top"
language: "fr"
patch: "16.9"
champion: "gnar"
role: "top"
last_updated: "2026-05-02"
description: "Guide Gnar top pour League of Legends Patch 16.9 : gestion de la Rage Mini/Mega, build bruiser, matchups clés, power spikes, erreurs courantes et astuce finale."
quick_learn:
  champion_dd_id: "Gnar"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Fighter / Shapeshifter"
  abilities:
    - key: "P"
      name: "Rage Gene"
      description: "En combat, Gnar accumule de la Rage. Au max, sa prochaine compétence le transforme en Mega Gnar : plus de PV, mêlée, nouvelles compétences, pas de R jusqu'au retour Mini."
      dd_spell_id: "Gnar_Passive"
    - key: "Q"
      name: "Boomerang Throw / Boulder Toss"
      description: "Mini : boomerang longue portée qui ralentit et revient ; le rattraper réduit le cooldown. Mega : rocher court qui s'arrête sur la première cible et ralentit la zone."
      dd_spell_id: "GnarQ"
    - key: "W"
      name: "Hyper / Wallop"
      description: "Mini : tous les trois coups/sorts inflige des dégâts bonus et donne de la vitesse. Mega : se cabre et frappe la zone devant lui, étourdissant les ennemis touchés."
      dd_spell_id: "GnarW"
    - key: "E"
      name: "Hop / Crunch"
      description: "Mini : saut qui rebondit plus loin s'il atterrit sur une unité (sbire, ward, monstre, champion). Mega : atterrissage lourd qui inflige des dégâts de zone, sans rebond."
      dd_spell_id: "GnarE"
    - key: "R"
      name: "GNAR!"
      description: "Mega uniquement. Projette tout autour de lui dans la direction choisie ; les cibles plaquées contre un mur sont étourdies et subissent des dégâts bonus. Tout le plan en un bouton."
      dd_spell_id: "GnarR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "3742", name: "Death's Dance" }
    - { dd_id: "3110", name: "Frozen Heart" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "remplace les Plated Steelcaps si l'équipe ennemie a 2+ sources de hard CC ou des dégâts magiques lourds (Malphite R, Lissandra, Kennen)"
    - dd_id: "3091"
      name: "Wit's End"
      against: "contre les top AP (Kennen, Vladimir, Rumble) : magic resist + dégâts on-hit magiques pour rester pertinent en Mini Gnar Q+AA"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contre le burst magique lourd (roams Syndra, Vex, double comp AP) : le shield lifeline bloque la fenêtre de one-shot"
    - dd_id: "3143"
      name: "Randuin's Omen"
      against: "contre les damage dealers crit (Yasuo, Tryndamere, Caitlyn fed) : réduit les dégâts critiques subis"
    - dd_id: "3075"
      name: "Thornmail"
      against: "contre les compos avec deux soigneurs (Soraka + Aatrox, Yuumi + Mundo) : grievous wounds réduit les soins de moitié"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "quand tu splitpush une side lane seul après Trinity : dégâts bonus tours/sbires + buffs stat en solo"
  base_combo: ["Q", "E", "AA", "W", "R"]
  win_condition: "Accumule la Rage en lane avec le poke Mini Q, puis transforme-toi en Mega avant un fight où tu commits. Utilise R comme engage avec wall stun pour couper l'équipe ennemie en deux en teamfight et sur les objectifs."
  weakness: "Pas de dash et shapeshift forcé. Si tu passes Mega loin de ton équipe, pas de Hop pour revenir ; si tu restes Mini en teamfight, pas de R. Les top à distance pokent Mini Gnar sans réponse."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8446, name: "Demolish", icon_path: "perk-images/Styles/Resolve/Demolish/Demolish.png" }
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primary : Grasp proc toutes les 4 secondes en mêlée — parfait pour Mega Gnar qui entre dans un frontline. Demolish transforme une wave pushée en plates gratuites, Second Wind soigne le poke ranged contre Mini Gnar, Overgrowth scale les PV jusqu'au late."
    secondary_rationale: "Precision secondary : Triumph rend des PV sur takedown (énorme après une Mega R en wall stun qui kill), Legend: Alacrity ajoute de l'attack speed pour que le 3e Hyper proc de Mini arrive plus vite à chaque trade."
    secondary_alternative: "Contre les matchups de poke ranged (Vayne, Quinn, Kennen, Teemo) swap Precision pour Sorcery avec Nimbus Cloak (move speed après summoner) et Gathering Storm (scaling AD long-game) pour atteindre la portée Mega et gagner le late."
matchup_draft:
  pick_into:
    - examples: ["sett", "darius", "garen"]
      archetype: "Juggernauts mêlée sans poke à distance"
      reason: "Mini Gnar Q a 1100 de portée et ralentit. Ils ne peuvent pas te toucher tant que tu ne marches pas sur eux, donc tu accumules la Rage en sécurité et tu commits seulement avec Mega prêt pour disengage avec R sur mur."
    - examples: ["aatrox", "renekton"]
      archetype: "Bruisers courte portée avec fenêtres d'all-in finies"
      reason: "Leur power budget est dans les trade windows early. Mini Gnar évite l'all-in en faisant E sur les sbires, puis renverse la situation quand Mega arrive online avec R stun + chaîne Wallop."
    - examples: ["nasus", "yorick"]
      archetype: "Juggernauts scaling sans menace de kill early"
      reason: "Tu shoves la wave avec Mini Q+W et tu nies leur farm sous tour ; ils ne peuvent pas punir car ils n'ont pas de gap-close qui bat ta portée de boomerang."
  counterpicks:
    - examples: ["vayne", "quinn", "kennen", "teemo"]
      archetype: "Top à distance qui pokent Mini Gnar"
      reason: "Mini Gnar n'a pas de sustain ranged et son seul trade safe est Q à portée max. Eux auto-attaquent depuis cette portée et le poussent sous tour sans aucune fenêtre de retour."
    - examples: ["fiora", "camille"]
      archetype: "Anti-tanks avec true damage %PV ou hard CC dive"
      reason: "Les vitals de Fiora déchirent la pool de PV de Mega Gnar plus vite qu'il ne peut riposter ; le E hookshot de Camille plaque Mini Gnar contre un mur pour un all-in dont il n'a pas de dash pour s'échapper."
    - examples: ["malphite", "ornn"]
      archetype: "Tanks engagers qui annulent ton angle de R"
      reason: "Ils flash-engage ta back line avant que tu ne puisses te transformer et choisir ton mur. Une fois leur initiation lancée, ta R devient peel (pousser les ennemis loin de tes carries) au lieu du pickoff (kill isolé) game-winning qu'elle devrait être."
---

## Aperçu

Gnar est un fighter top qui se transforme entre deux formes selon une barre de Rage qui se remplit en utilisant des compétences ou en subissant des dégâts. **Mini Gnar** est un poker à distance (poke = dégâts à distance pour grignoter les PV sans s'engager) avec un long boomerang et un saut qui se reset sur les unités ; **Mega Gnar** est un bruiser mêlée avec un stun, des dégâts AOE (area of effect : dégâts sur une zone, pas une cible unique) et la meilleure ulti à faible cooldown du jeu près d'un mur. Tout le champion repose sur le timing de la transformation : Mini en lane pour poker et farmer en sécurité, Mega quand tu commits sur un fight (commit = aller all-in, sans reculer) où R peut plaquer les ennemis contre le terrain.

Le plan en une phrase : accumule la Rage en Mini, transforme-toi près de l'équipe ennemie, lance R contre un mur pour stun (immobilisation pendant ~1,5 seconde sans pouvoir agir) plusieurs cibles, puis nettoie pendant que ton équipe suit. Si tu ulti en terrain ouvert, tu gâches ta seule win condition (la chose que le champion doit bien faire pour gagner). Si tu passes Mega seul en lane, tu risques de mourir car l'escape (la fuite) de Mini, le rebond du Hop sur un sbire, disparaît.

## Build Recommandé

**Starting items :** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. La régénération de PV de Doran's Shield est faite pour le poke ranged soutenu que chaque matchup contre Mini Gnar t'envoie.

**Core items (dans l'ordre) :**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — premier item à chaque game. Construit à partir de Sheen (un composant qui ajoute des dégâts bonus à ta prochaine basic attack après chaque sort lancé) ; Trinity fait proc cet effet (le déclenchement bonus damage) sur chaque Q en Mini comme en Mega. Le move speed permet à Mini Gnar de kite (reculer en attaquant pour garder la distance), et l'attack speed accélère l'arrivée de Hyper (la passive du 3e coup de Mini).
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots par défaut contre les damage dealers physiques (la majorité des matchups top). Réduit les dégâts de basic attack subis.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — PV bonus qui scale avec l'AD bonus de tes autres items, plus un shield à usage unique qui se déclenche autour de 30% PV. Garde Mega Gnar vivant assez longtemps pour placer R.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Death's Dance** — convertit le burst physique subi en saignement lent (dégâts étalés sur les secondes suivantes au lieu d'instantanés). Te donne le temps de réagir dans un fight où tu commits en Mega.
5. ![Frozen Heart](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3110.png) **Frozen Heart** — armure + un slow d'attack speed AOE (le slow touche tous les ennemis dans une zone autour de toi, pas un seul). Dévaste les carries auto-attack (Vayne, Tristana, Kog'Maw) une fois que la Mega R les a plaqués contre un mur.

**Situational items :**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — remplace les Plated Steelcaps contre du CC lourd (crowd control : stuns, roots, silences qui t'empêchent d'agir) ou des compos AP.
- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — contre les top AP (Kennen, Vladimir, Rumble). Ajoute de la magic resist plus du on-hit magic damage (un peu de dégâts magiques en plus sur chaque basic attack).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contre le burst magique lourd (roams Syndra, Vex, double comp AP). Le shield lifeline se déclenche quand tu tombes à bas PV et absorbe les dégâts magiques entrants, bloquant la fenêtre de one-shot.
- ![Randuin's Omen](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3143.png) **Randuin's Omen** — contre les damage dealers crit (Yasuo, Tryndamere, Caitlyn fed).
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — contre les équipes qui cumulent deux sources de soins. Applique grievous wounds (un debuff qui réduit les soins ennemis de moitié pendant quelques secondes).
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — quand tu splitpush une side lane seul après Trinity Force. Splitpush = pousser une side lane en solitaire pendant que ton équipe joue ailleurs, forçant l'ennemi à envoyer quelqu'un te bloquer.

**Boots :** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** par défaut. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** quand l'équipe ennemie a 2+ sources de hard CC ou des dégâts AP lourds.

**Skill order :** Max **W** en premier (les dégâts du 3e coup Hyper scalent le plus par niveau), puis **Q** (slow plus long + CD plus bas pour le poke), puis **E** en dernier. Prends **R** aux niveaux 6, 11, 16.

**Runes :** Primary **Resolve** avec **Grasp of the Undying**, **Demolish**, **Second Wind**, **Overgrowth**. Secondary **Precision** avec **Triumph** et **Legend: Alacrity**.

## Matchups clés

- **Sett :** Lane gratuite. Mini Q a plus de portée que tout ce qu'il a ; ne marche jamais dans son W (Haymaker). Quand il t'atteint, fais Hop sur un sbire de la wave pour rebondir en sécurité.
- **Aatrox :** Égal pre-6, tu l'outscale (tu deviens plus fort que lui au fil de la partie). Évite le sweet spot de son Q (le centre lumineux du fendant où il fait des dégâts bonus). Une fois Mega R + un mur derrière lui, il perd chaque all-in (combat total jusqu'à la mort) qu'il lance.
- **Vayne :** Hard counter. Reste en arrière, last-hit les sbires avec Q à portée max, accepte que la lane te bullies (tu ne peux pas riposter sans mourir). Roam (quitte ta lane pour aider une autre) vers mid ou invade la jungle ennemie quand Mega est prêt.
- **Camille :** Lane perdue, late gagné. Évite la portée de son E hookshot en Mini (elle te plaque contre un mur et brûle ton Flash — Flash est un summoner spell qui te téléporte sur une courte distance avec un cooldown de 5 minutes, ton bouton d'urgence à usage unique — puis revient engage). Garde ton E pour après son dash, jamais avant.
- **Malphite :** La lane est ok — Mini Q le kite à l'infini — mais attention au level 6. Il flash-ulti ta back line (tes carries placés derrière ton équipe) en teamfight, ce qui tue ton angle de R. Dis à ton équipe de s'écarter pour que son ulti ne touche pas deux d'entre vous d'un coup.

## Power spikes & conditions de victoire

- **Level 2 :** Avec Q + W tu gagnes la plupart des short trades (brefs échanges de coups en lane, pas des fights complets) contre les bruisers mêlée. Avance sur la wave, Q sur l'ennemi à travers les sbires, puis ta 3e basic attack déclenche les dégâts bonus de Hyper.
- **Level 6 :** La première Mega R débloque un tower dive (aller sous la tour ennemie pour kill malgré les tirs de tour) sur un ennemi low PV si tu accumules la Rage en Mega avant de cross.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force complétée (~ minute 12-14) :** Ton plus gros power spike (le moment où tu deviens nettement plus fort et où il faut chercher le fight). Mini Q + auto-attack tape comme un train ; les combos Mega Q + W one-shot les squishies (champions à hauts dégâts et faible défense, type ADCs et mages) post-stun.
- **Fight Mega R à 3 items (~ minute 22-26) :** Sterak's + Trinity + boots online signifie que Mega Gnar peut traverser un frontline (les tanks et bruisers qui ouvrent le fight devant) et enchaîner R sur la back line (les carries qui font les dégâts derrière) pour un stun sur 2-3 personnes. Force ici les fights pour les objectifs groupés (contests drake/baron où les deux équipes sont massées).

## Erreurs courantes

- **Passer Mega en lane sans fight prêt.** Mega n'a pas d'escape (pas de Hop dash) et reste Mega ~15 secondes avant de revenir Mini. Si ton jungler n'arrive pas et que tu ne commits pas à un fight, garde la Rage à 80-90%, ping ton équipe en arrière, et laisse la barre se vider.
- **Lancer R en terrain ouvert.** Sans mur derrière la cible, GNAR! n'est qu'un knockback (une poussée forcée qui éjecte les ennemis sur une courte distance) qui interrompt leurs dashes et rien d'autre. Repositionne-toi toujours d'abord ; la demi-seconde passée à aligner le mur vaut un stun multi-cible.
- **Hop dedans au lieu de dehors.** Mini E est ton escape, pas ton outil d'engage dans la plupart des matchups. La seule fois où E-in est correct, c'est quand la Rage se remplit et que tu as un sbire clair pour rebondir.
- **Spam de W en lane pour "forcer" le bonus damage de Hyper.** Le bonus du 3e coup se déclenche sur chaque basic attack ET chaque sort. Trade en patterns de deux compétences + une basic attack, pas trois basic attacks d'affilée qui te poussent hors position.
- **Transformations mid-fight non contrôlées.** Les dégâts subis remplissent aussi la Rage. Si tu recules à 95% Rage, la prochaine basic attack sur un sbire te passe Mega dans ta jungle sans ennemi pour R. Soit tu commits au fight avant, soit tu rentres à la base.

## Conseil avancé

Utilise Hop pour rebondir sur les **wards et trinkets** quand ta wave est partie. Une ward est le petit œil magique que tu poses sur la map pour la vision ; la jaune basique est le trinket **Stealth Ward** que ton support porte, et la **Control Ward** est la ward rose que les ennemis posent pour nier la vision. Chacune compte comme une unité sur laquelle Mini Gnar peut atterrir pour le second hop étendu. Pré-place une Stealth Ward vers l'entrée de la jungle ennemie, puis E dessus pour étendre ta portée d'environ 400 unités et surprendre avec un Q un ennemi en counter-jungling. Le même trick te sauve des ganks : Hop sur ta propre ward dans le tribush (le groupe de trois buissons près de chaque lane) et le ganker n'a pas de follow-up.
