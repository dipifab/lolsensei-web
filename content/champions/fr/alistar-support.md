---
title: "Alistar Support Build & Guide — Patch 16.9"
slug: "alistar-support"
language: "fr"
patch: "16.9"
champion: "alistar"
role: "support"
last_updated: "2026-04-29"
description: "Guide complet Alistar support pour League of Legends Patch 16.9 : starter kit, build tank-engage, matchups clés, power spikes, erreurs courantes et astuce finale."
quick_learn:
  champion_dd_id: "Alistar"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Tank / Vanguard"
  abilities:
    - key: "P"
      name: "Triumphant Roar"
      description: "Alistar charge son rugissement quand il stun ou déplace un champion ennemi, ou quand des ennemis proches (minions, monstres de jungle, champions) meurent. À pleine charge, le rugissement suivant le soigne lui et les alliés proches."
      dd_spell_id: "Alistar_Passive"
    - key: "Q"
      name: "Pulverize"
      description: "Frappe le sol autour d'Alistar et knock-up tous les ennemis proches pendant 1 seconde. Courte portée — il faut déjà être collé à la cible."
      dd_spell_id: "Pulverize"
    - key: "W"
      name: "Headbutt"
      description: "Alistar dash sur un ennemi, lui inflige des dégâts et le repousse en ligne droite. Outil d'engage signature : enchaîne aussitôt avec Q pour la combo W-Q (tu le pousses dans ton équipe puis tu le knock-up)."
      dd_spell_id: "Headbutt"
    - key: "E"
      name: "Trample"
      description: "Piétine le sol pendant 5 secondes, ignore la collision des minions et inflige des dégâts. Chaque pulse touchant un champion ajoute un stack — à 5 stacks, la prochaine auto-attaque sur un champion stun et inflige des dégâts bonus."
      dd_spell_id: "AlistarE"
    - key: "R"
      name: "Unbreakable Will"
      description: "Nettoie instantanément tout le crowd control sur Alistar et lui donne une grosse réduction de dégâts (physique + magique) pendant la durée. À utiliser avant d'engage dans une équipe pleine de CC, pas une fois le fight commencé."
      dd_spell_id: "FerociousHowl"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "W" }
    - { level: 9, key: "E" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3109", name: "Knight's Vow" }
    - { dd_id: "3877", name: "Bloodsong" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "swap depuis Mercury's vs bot lanes auto-attack heavy (Caitlyn, Draven, Tristana) si le harass early fait plus mal que le CC late"
    - dd_id: "3110"
      name: "Frozen Heart"
      against: "contre carrys empilant l'attack speed (Tristana, Kog'Maw, Master Yi) — ralentit leur vitesse d'attaque dans une large aura"
    - dd_id: "3211"
      name: "Kaenic Rookern"
      against: "contre comps de burst AP (double mage type Syndra mid + Brand support) — bouclier magique passif qui régénère hors combat"
  base_combo: ["W", "Q", "AA", "E"]
  win_condition: "Place la combo W-Q (Headbutt en arrière + Pulverize knock-up) sur un carry squishy pour ouvrir un fight que ton équipe convertit. Pop R avant d'engage si l'équipe a du hard CC, les chaînes rebondissent sur toi."
  weakness: "Portée d'engage courte — il faut être collé à la cible pour landrer la Q. Mana fragile en early et zéro poke à distance ; si la bot adverse joue passive, tu perds la lane et dois roam pour rester pertinent."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8306, name: "Hextech Flashtraption", icon_path: "perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["soraka", "sona", "yuumi", "janna"]
      archetype: "Enchanters squishy sans hard CC"
      reason: "Ils n'ont aucun outil pour stopper la combo flash + W-Q. Une fois le knock-up posé sur eux, ils meurent avant que leur ADC puisse peel — Sona et Yuumi n'ont aucun escape."
    - examples: ["caitlyn", "jhin", "senna"]
      archetype: "ADCs immobiles sans dash"
      reason: "Le W a 650 de portée et est point-and-click : les ADCs sans dash ni blink mangent la combo entière dès qu'ils s'avancent pour last-hit. Une fois engagé, ils ne peuvent plus s'enfuir."
    - examples: ["zyra", "brand", "vel-koz"]
      archetype: "Mage supports avec poke skillshot et zéro escape"
      reason: "Leur poke pêche les cooldowns mais un Trample stacké plus un flash-Q en pleine face les efface : leur avantage de portée ne compte plus une fois la distance fermée."
  counterpicks:
    - examples: ["lulu", "milio", "renata"]
      archetype: "Enchanters de disengage avec peel actif"
      reason: "Le polymorph de Lulu annule ton W en plein dash, le R de Milio nettoie ton knock-up à distance, le E de Renata arrache le carry de ta combo. Ton seul engage est répondu gratuitement."
    - examples: ["xerath", "karma", "morgana"]
      archetype: "Pokers longue portée avec shield ou binding"
      reason: "Ils mangent ton HP gratuitement à 900-plus de portée sans que tu aies de réponse. La Black Shield de Morgana bloque entièrement ta Q knock-up — tu flash dans le vide."
    - examples: ["nautilus", "leona", "rell"]
      archetype: "Autres tank engage supports avec hard CC plus long"
      reason: "Leur premier cast atterrit avant que tu sois en portée de Q : Q hook de Nautilus, dash-stun E de Leona, charge W de Rell sortent tous au-delà de ton W. Tu manges leur engage, eux ne mangent pas le tien."
---

## Aperçu

Alistar est un **vanguard support** (un support de classe tank dont le job est d'ouvrir les fights, pas de soigner les alliés) — il engage en sautant physiquement sur le carry adverse et en le bloquant avec du crowd control. Son kit tourne autour d'une combo signature : **Headbutt (W)** dash sur une cible et la repousse en ligne droite, et recast immédiat de **Pulverize (Q)** sous tes pieds pour la knock-up. La chaîne complète (W puis Q) renvoie l'ennemi **dans ton équipe** puis le suspend en l'air une seconde pleine — assez de temps pour que ton ADC s'avance et déballe des dégâts gratuits. **Trample (E)** lui donne un déplacement **ghosted** (il traverse les minions et autres unités sans collision) et un **proc** de stun (un effet à stacks qui se déclenche à un seuil) sur sa prochaine auto-attaque à 5 stacks. **Unbreakable Will (R)** nettoie tout le crowd control sur lui et donne une grosse damage reduction, c'est ce qui permet à un Alistar à 1 PV de traverser un root de Morgana et de finir le kill quand même.

Game plan : en lane, **bait** (attire l'adversaire à se commit) en restant légèrement avancé ; au moment où l'ADC s'avance pour last-hit, Headbutt le vers ton équipe, Pulverize knock-up, marche dessus avec Trample qui stack, et ton ADC convertit. Mid-game, **roam** (quitte la bot lane pour aider mid ou jungle) en exploitant le déplacement ghosted de Trample plus la flexibilité de tes summoner spells — Alistar passe à travers des murs de minions là où les autres supports se coincent. Late-game, reste en frontline, mange le CC adverse avec **R**, et engage sur le carry dont la mort termine le fight.

## Build Recommandé

**Items de départ :** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (le starter unifié des supports) plus 2 Health Potions. Ne last-hit pas les minions en lane : laisse l'or à ton ADC, World Atlas paye ton or à part via sa quest.

**Items core (dans l'ordre) :**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — starter. Évolue automatiquement à mesure que la quest progresse via ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** et ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**, jusqu'à l'upgrade endgame que tu choisis.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — magic resist plus **tenacity** (stat qui raccourcit la durée du crowd control sur toi). Bottes par défaut pour un engage tank : stuns et slows raccourcis veulent dire que tu n'es pas locked hors de la combo **W-Q** juste après l'avoir lancée.
3. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — active qui shielde tous les alliés proches pendant quelques secondes. Pop-le à l'instant où tu engage, ton équipe absorbe le premier **burst** adverse (les gros dégâts concentrés sur les 1-2 premières secondes du fight).
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — te lie à ton **ADC** (Attack Damage Carry — l'auto-attaqueur de bot lane, principal damage dealer late-game) : une partie des dégâts qu'il prend est redirigée sur toi, et tu le soignes en retour. Choisis toujours le carry dont la vie te sert le plus à étendre.
5. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — l'upgrade endgame engage-focused de ton support item (World Atlas se transforme automatiquement en l'un de ces items une fois la quest finie). Porte une passive **Spellblade** : après le cast d'une compétence — Headbutt W, Q knock-up, R cleanse, même un tick d'E Trample — ta prochaine auto-attaque inflige des dégâts physiques bonus on-hit, et si elle touche un champion, il prend des dégâts amplifiés de toute source pendant 4 secondes. Le pattern est "ability → AA → ability → AA" stacké pendant tout le fight, pas "garde l'AA pour après le CC".

**Items situationnels :**

- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — bottes qui donnent armor et réduisent les dégâts d'auto-attaques. Swap depuis Mercury's Treads quand la bot adverse est auto-attack heavy (Caitlyn, Draven, Tristana) et que leur **harass** (poke et chip damage) en lane fait plus mal que la chaîne de CC adverse.
- ![Frozen Heart](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3110.png) **Frozen Heart** — ralentit la vitesse d'auto-attaque des ennemis proches dans une large aura. À prendre contre des carrys qui empilent l'attack speed (Tristana, Kog'Maw, Master Yi) où ton job devient **peel** (protéger ton propre carry des ennemis qui veulent le tuer) au lieu d'engage.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3211.png) **Kaenic Rookern** — bouclier magique passif qui régénère hors combat. À prendre contre des comps de burst AP (un setup double-mage type Syndra mid + Brand support) — le bouclier mange un ult complet et te laisse survivre à l'engage que tu as ouvert.

**Bottes :** Default ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** pour la tenacity — un stun d'une seconde de Thresh devient une demi-seconde, te laissant la fenêtre pour enchaîner **R** dans ton engage. Swap en ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** avant de les terminer uniquement si la bot adverse te fait plus mal que le CC late-game adverse.

**Skill order :** Maxe **E** (Trample) en premier — c'est ton dégât en lane plus le proc de stun qui te donne un second crowd control après la Q. Maxe **W** en deuxième — cooldown plus bas = plus de fenêtres d'engage. Maxe **Q** en dernier (c'est surtout un finisher ; le rank-up change peu le knock-up, juste les dégâts). Mets un point dans **R** aux niveaux 6, 11, 16.

**Runes :** Primaire **Resolve** (l'arbre rune défensif — durabilité) avec **Aftershock** (armor et magic resist gratuits quelques secondes quand tu CC quelqu'un, déclenché à chaque Q knock-up), **Font of Life** (ton CC marque la cible ; les alliés qui l'attaquent se soignent un peu), **Conditioning** contre les lanes qui scale late ou **Bone Plating** contre les lanes qui essaient de te burst tôt, et **Unflinching** (extra **tenacity**, la stat qui raccourcit le crowd control sur toi, quand tu utilises une summoner spell). Secondaire **Inspiration** (arbre utility) avec **Hextech Flashtraption** (un Flash backup courte portée à long cooldown — gold pour des combos W-Q surprise) et **Cosmic Insight** (cooldowns réduits sur summoner spells et item actives). **Stat shards** (les trois petits boosts en bas de la page rune) : Adaptive Force / Adaptive Force / Health (Adaptive Force = bonus AD ou AP selon ce qu'utilise ton kit).

## Matchups clés

- **Leona :** Mirror **engage** (vous voulez tous les deux ouvrir le fight). Elle a un CC plus long que toi (dash-stun Zenith Blade, R Solar Flare), donc n'engage pas en premier tant qu'elle a ses cooldowns. Attends qu'elle balance E, et ta fenêtre de 10 secondes s'ouvre — flash-Q son ADC pendant qu'elle n'a plus de follow-up.
- **Pyke :** Skill matchup — pas d'edge clair sur le papier, ça se décide à qui joue mieux. Il t'out-poke avec Q et t'out-roam en **stealth** (il devient invisible en traversant les buissons). Garde de la vision profonde dans le river et force-le à fight en lane où R ne reset pas le kill.
- **Lulu :** Hard counter pour ton **all-in** (kill commit total). Son polymorph annule ton W en plein dash. N'engage pas quand son polymorph est up ; track son cooldown et force des fights uniquement dans la fenêtre de 13 secondes où il est down.
- **Soraka :** Pure **enchanter de sustain** (un support healing-focused qui gagne en gardant son ADC en vie, pas en ouvrant les fights) sans outil d'engage. Tu peux flash-Q dessus dès que son Flash est down — elle meurt dans ta combo avant que son ADC réagisse.
- **Senna :** Matchup **poke** longue portée (chip damage à distance pour t'user). Elle te bullie l'HP sous tour. Ne réplique pas, accepte la mauvaise lane, roam mid ou invade avec Mobility Boots — la lane d'Alistar perd, mais son macro game gagne.

## Power spikes & conditions de victoire

- **Niveau 2 (Q + W) :** Premier spike. La combo W-Q complète se débloque dès que tu as les deux abilities. Un ADC adverse qui over-extend (poussé trop loin de sa première **wave** — la rangée de minions entrante) est un kill gratuit si tu engage avec **Flash** encore up.
- **Niveau 6 (R débloque) :** Le potentiel d'engage explose. **Unbreakable Will** te transforme de **diver** one-shot (champion qui plonge dans la backline adverse et meurt juste après) en tank qui traverse le hard CC et re-engage. Tu peux flash-Q une Morgana, manger son root, R pour le cleanse, et Q de nouveau sur son ADC.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari complet (~ minute 14-16) :** Premier item teamfight online. Ton engage drop maintenant un shield gratuit pour l'équipe. Regroupe-toi pour le **Drake** (objectif dragon dans le river bot — le tuer donne à ton équipe des buffs de stats permanents) ou les **Voidgrubs** (petits monstres dans le river top — l'équipe qui les tue gagne des dégâts bonus contre les structures adverses).
- **![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) Bloodsong endgame (~ minute 24-30) :** Le proc Spellblade plus l'amplification de dégâts de 4 secondes sur les champions transforme ta rotation complète en séquence de DPS. Maintenant W → AA → Q → AA n'est plus juste un setup pour ton ADC — ça peut enlever 25-30% d'HP à un **squishy** (champion à faible défense, type ADC ou mage) tout seul.

## Erreurs courantes

- **W-Q dans la mauvaise direction.** Headbutt repousse la cible loin de toi, sur la ligne où tu te tiens. Si tu W d'en bas, tu le balances vers le haut de la lane (loin de ton équipe). W toujours depuis le **flank** (l'angle latéral) pour que ton knockback pousse le carry dans les dégâts de ton équipe, pas dans les leurs.
- **Engage sans follow-up.** Alistar sans son ADC et son équipe derrière n'est qu'un tank sans dégâts. Si ton ADC est rentré en base ou que ton jungler est de l'autre côté de la map, garde ta W. Un solo engage en 4v5, c'est juste donner ton cooldown de R à l'équipe adverse.
- **Cramer R proactivement pour fuir.** **Unbreakable Will** est un outil offensif, pas un bouton d'escape : ça donne damage reduction et CC cleanse, mais zéro movement speed. L'utiliser pour fuir sans équipe autour ne fait que repousser ta mort de 5 secondes. Garde R pour l'engage que tu es sur le point de commit, pas pour le disengage que tu n'aurais jamais dû avoir besoin de faire.
- **Stacker Trample sur les minions.** E ne stack **que** sur les coups portés à des champions ennemis, pas aux minions. Rester sur une wave vide en attendant que le proc de stun arrive ne sert à rien. Le proc ne compte que si tu peux l'enchaîner dans les dégâts de ton équipe.
- **Ne pas utiliser la passive en plein fight.** **Triumphant Roar** charge depuis le CC que tu appliques (Q, R, proc de E) et depuis les **morts d'ennemis proches** — minions, monstres de jungle, ou champions ennemis. Dans un teamfight où minions et creeps de jungle meurent autour de toi, tu peux stacker le heal plusieurs fois. Tape le bouton de la passive entre les actions : 50-100 PV de heal gratuits sur toi et ton ADC font basculer le fight.

## Conseil avancé

Le **flash-W-Q one-shot**. Flash en avant et cast immédiatement **W** sur une cible prioritaire dans le même frame : le dash part de ta nouvelle position flashée, pas de l'endroit où l'ennemi attendait ta hitbox. Puis enchaîne **Q** pendant que tu es encore dans l'animation de dash de W — la Pulverize part à l'instant exact où le knockback de W se termine, avec zéro gap entre les deux crowd controls. Bien fait, la cible ne voit rien à l'écran qu'un knock-up d'une seconde et meurt avant de pouvoir réagir. La drill est muscle memory (le réflexe automatique des doigts) : bind tes spells pour que Flash + W + Q soient sous la même main, et entraîne le rythme dans le **Practice Tool** jusqu'à pouvoir lancer les trois en moins d'une demi-seconde. C'est la mécanique qui transforme Alistar de "tank qui aide" en "tank qui termine les fights".
