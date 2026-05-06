---
title: "Kha'Zix Jungle Build & Guide — Patch 16.9"
slug: "kha-zix-jungle"
language: "fr"
patch: "16.9"
champion: "kha-zix"
role: "jungle"
last_updated: "2026-04-29"
description: "Guide Kha'Zix jungle pour League of Legends Patch 16.9 : clear path, sauts sur cibles isolées, choix d'evolution (Q/E/R), build lethality, matchups, power spikes et erreurs."
quick_learn:
  champion_dd_id: "Khazix"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Assassin / Solo-target"
  abilities:
    - key: "P"
      name: "Unseen Threat"
      description: "Hors vision, votre prochaine auto sur un champion inflige des magic damage bonus et un slow. Marque les cibles isolées (aucun allié à 425 unités) pour amplifier la Q."
      dd_spell_id: "Khazix_Passive"
    - key: "Q"
      name: "Taste Their Fear"
      description: "Frappe une cible pour des physical damage ; dégâts massifs si la cible est isolée (aucun allié proche). Outil de duel principal — l'evolution donne du range étendu."
      dd_spell_id: "KhazixQ"
    - key: "W"
      name: "Void Spike"
      description: "Projectile linéaire qui inflige des dégâts et vous soigne dans la zone d'explosion. Seule source de sustain en jungle. L'evolution ajoute slow, vision et triple cône."
      dd_spell_id: "KhazixW"
    - key: "E"
      name: "Leap"
      description: "Dash ciblé qui inflige des dégâts à l'atterrissage. L'evolution ajoute 200 de range et reset le cooldown au takedown — le pattern assassin de reset vit ici."
      dd_spell_id: "KhazixE"
    - key: "R"
      name: "Void Assault"
      description: "Vous devenez invisible brièvement, gagnez du speed bonus et pouvez recast pour re-stealth. Chaque rank fait évoluer une ability (Q/W/E/R) en upgrade permanent."
      dd_spell_id: "KhazixR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "3142", name: "Youmuu's Ghostblade" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3814", name: "Edge of Night" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "6698"
      name: "Profane Hydra"
      against: "contre comps exigeant waveclear et pression en side lane"
    - dd_id: "6692"
      name: "Eclipse"
      against: "contre comps bruiser-lourdes (Sett, Aatrox, Mordekaiser) : shield + heal en trade"
    - dd_id: "3179"
      name: "Umbral Glaive"
      against: "contre setups de vision lourds (supports enchanters, junglers vision-focus)"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap depuis Lucidity contre magic CC lourd (Ahri, Lissandra, Twisted Fate)"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "swap contre double AD (deux menaces physiques type Yasuo + Caitlyn)"
  base_combo: ["E", "Q", "AA", "W"]
  win_condition: "Trouvez des cibles isolées (aucun champion ennemi à 425 unités) et burstez-les avec E + Q + AA. La E évoluée reset au takedown : reset de jump en skirmish et teamfight."
  weakness: "Si l'ennemi reste groupé, vos dégâts Q chutent — l'amplificateur d'isolation dépend du positionnement. Hard CC (Malzahar R, Skarner R) annule le jump et vous n'avez pas d'escape."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "kindred", "graves"]
      archetype: "Carry junglers squishy sans hard CC"
      reason: "Ils marchent seuls dans leur jungle pour power-farmer ; le E + Q isolée de Kha'Zix les supprime avant qu'ils répondent. Sans CC, rien n'arrête le dash-in."
    - examples: ["shyvana", "fiddlesticks", "rammus"]
      archetype: "Junglers à clear lent et faible mobilité"
      reason: "Kha'Zix invade plus vite avec E et arrive sur Scuttle Crab à tempo. Counter-junglez leurs camps arrière après chaque Drake — ils tournent trop lentement pour punir."
    - examples: ["ezreal", "ashe", "kog-maw"]
      archetype: "Backlines ADC immobiles ou peu mobiles"
      reason: "En late, votre E évoluée atterrit sur la back line par-dessus un mur. Sans dash, ils ne se replacent pas pendant la fenêtre d'invisibilité de la R."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "vi"]
      archetype: "Bruiser junglers front-loaded avec CC point-and-click"
      reason: "Leur CC interrompt l'animation du jump et vous lock. Pré-6 ils gagnent le duel dans leur jungle : un invade niveau 3 est une kill gratuite pour eux."
    - examples: ["malzahar", "skarner"]
      archetype: "Champions avec suppression ou lockdown unstoppable"
      reason: "La suppression n'est pas retirée par les Mercury's Treads ; dès qu'ils vous touchent, vous ne pouvez plus R out et la fenêtre d'invisibilité est perdue."
    - examples: ["sett", "tahm-kench"]
      archetype: "Bruisers tanky avec peel intégré pour le carry"
      reason: "Leur W ou grab tire le carry hors de votre fenêtre d'isolation avant que la Q n'atterrisse. Il faut un 1v1 propre et ils retirent cette option."
---

## Aperçu

Kha'Zix est un assassin AD melee (un assassin est un champion à très haut burst conçu pour supprimer une seule cible squishy — squishy = un champion aux défenses faibles, comme les ADC et la plupart des mages) dont tout le kit est calibré pour trouver des cibles **isolées**. Isolé, dans son cas, signifie qu'aucun champion allié n'est à moins de 425 unités de la cible — légèrement moins que la portée d'un Mercury's Treads. Sa passive **Unseen Threat** marque les ennemis isolés ; sa Q **Taste Their Fear** leur inflige des dégâts bonus massifs ; son ult **Void Assault** lui permet d'entrer et sortir de la vision pour préparer ce burst isolé. Pickez-le contre des équipes qui marchent seules — split-pushers, carry junglers, marksmen immobiles en back line.

Son plan de jungle : clear bot-to-top avec **W** pour le sustain (sustain = capacité à se soigner pendant le clear), niveau 3 avec E débloquée, puis on commence à ganker pré-6 avec le pattern assassin de **E** sur la lane → on attend que la cible du gank soit isolée de son support → **Q** pour les dégâts amplifiés → on finit en auto-attack. Après le niveau 6, chaque fight est une chasse : prenez l'**Evolved E** (range étendu et reset au takedown) pour qu'une kill réussie rembourse le dash et permette de sortir avant que l'équipe ne s'écroule sur vous. Les fights Drake et Rift Herald se gagnent en entrant en stealth avec **R**, en supprimant la back line, puis en re-stealth pour partir.

## Build Recommandé

**Items de départ :** ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** + Refillable Potion. Le pet Gustwalker donne du movement speed hors combat, parfait pour arriver vite sur les ganks. Évitez Mosstomper (le pet sustain) — votre **W** soigne déjà assez sur un cycle de clear.

**Items core (dans l'ordre) :**

1. ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — premier item à rusher. Lethality (stat qui donne de l'armor penetration plate contre les cibles peu armurées, en gros des dégâts gratuits sur les squishies) plus l'active de movement speed rendent ganks et skirmishes triviaux.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — bottes d'ability haste pour que votre **R** revienne plus vite. Plus la R est dispo, plus vous avez de fenêtres d'invisibilité par fight.
3. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — passive d'execute : les cibles sous 5% PV meurent instantanément. Termine les kills que votre burst brut laisserait à 50 PV.
4. ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — spell shield qui bloque la première ability ennemie après un court channel. Vous sauve d'un Malzahar R, Lissandra R, ou de tout CC point-and-click qui vous lockerait avant le R out.
5. ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — armor penetration de late qui scale avec l'armor de la cible, plus un slow sur les abilities qui infligent des dégâts : votre Q poursuit.

**Items situationnels :**

- ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — quand l'équipe a besoin de pression en side lane : passive cleave plus active d'execute permettent de split-push (pousser une side lane seul pour forcer l'ennemi à répondre) sans perdre de dégâts en fight.
- ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — contre des comps bruiser-lourdes (bruiser = fighter melee tanky type Sett, Aatrox, Mordekaiser) : le shield + omnivamp (lifesteal qui marche sur tous les types de dégâts) vous garde en vie pendant le trade in-out.
- ![Umbral Glaive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3179.png) **Umbral Glaive** — contre des setups de vision lourds (supports enchanters comme Janna, Lulu) : effacement de wards on-cast plus dégâts bonus aux wards, vous traversez leur réseau de vision invisible.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap depuis Lucidity contre du magic CC lourd. La tenacity (stat qui raccourcit la durée des stuns et slows sur vous) vous laisse le temps de R out avant le re-engage.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — contre des comps double-AD (deux menaces physiques type Yasuo + Caitlyn) : armor plate et réduction des dégâts d'auto-attack.

**Bottes :** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** par défaut. Mercury's Treads ou Plated Steelcaps seulement si le matchup l'exige.

**Skill order :** Maxez **Q** en premier (le scaling sur cibles isolées est votre DPS principal), **W** en second (sustain en jungle et slow sur evolution), **E** en dernier (les rank en plus donnent des dégâts bruts mais ce qui compte c'est la distance du dash et le cooldown, pas le scaling). Mettez **R** aux niveaux 6, 11, 16.

**Choix d'evolution (l'upgrade Q/W/E/R que vous prenez à chaque rank-up de R) :** ordre standard **Q au 6** (range étendu et refund sur takedown isolé — le spike 1v1 le plus propre), **E au 11** (range bonus et reset au takedown pour skirmish), **R au 16** (invisibilité plus longue, second recast). Prenez **W au lieu de Q au 6** uniquement si l'équipe ennemie a plusieurs menaces immobiles groupées (les trois cônes de slow zonent toute l'équipe en fight). Prenez **E avant Q** uniquement si vous devez fuir un jungler à CC lourd (Lee Sin, Vi) — le reset early vous sort des ganks ratés, mais vous abandonnez beaucoup de kill pressure.

**Runes :** Primaire **Domination** avec **Electrocute**, **Sudden Impact**, **Sixth Sense**, **Ultimate Hunter**. Secondaire **Precision** avec **Triumph** et **Coup de Grace** (ou **Sorcery** avec **Sudden Impact** en support si vous voulez du sustain — sustain = soin pendant le fight). Stat shards : Adaptive Force / Adaptive Force / Health.

## Matchups clés

- **Lee Sin :** Évitez les invades niveau 2 et 3. Son Q-Q suivi du shield W bat votre kit avant que la E ne soit en ligne. Clear bot-to-top, hover Scuttle avec vision et laissez vos laners le punir s'il s'over-extend.
- **Graves :** Égal early, à votre avantage après le niveau 6. Ne le duellez jamais en open jungle pré-6 : le blind de sa W annule votre fenêtre d'auto-attack. Attendez une chance d'isolation — gankez sa lane avec **E + Q** et faites-le peeler de son ADC par votre laner.
- **Elise :** Course aux power spikes. Elle gagne les ganks niveau 3 ; vous gagnez le jump isolé niveau 6. Calez son tempo de premier clear et tradez les objectifs — hover Drake avec vision pour qu'elle ne le solo pas.
- **Jarvan IV :** Menace de counter-engage. Son E-Q knock-up interrompt l'animation du jump. Achetez ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** plus tôt que d'habitude ; le spell shield mange sa combo flag-toss.
- **Karthus :** Matchup gratuit. Pas d'escape, il marche seul pour push les vagues. Tracez sa position pré-6 avec vision ; au niveau 6, **R + E + Q** le supprime depuis l'autre côté de sa jungle pendant qu'il channel Requiem.

## Power spikes & conditions de victoire

- **Niveau 3 (Q + W + E) :** Kit complet débloqué. Cherchez un gank isolé — flank une side lane par le river bush, **E** dedans, **Q** sur le laner adverse isolé (le support doit être absent), reset d'auto-attack, **W** pour le slow au recall. Le gank pré-6 de Kha'Zix est l'un des plus forts du jeu quand la cible est seule.
- **Niveau 6 (première Void Assault + première evolution) :** Prenez **Evolved Q** pour le path de burst standard. Power spike fort en skirmish à mid-river — R pour entrer invisible, E sur la cible marquée, Q pour les dégâts amplifiés, AA reset, recast R pour partir. La combo complète supprime un squishy à 1800 PV en deux secondes.
- **![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) Youmuu's Ghostblade complété (~ minute 9-11) :** Spike de burst. L'active de vitesse vous laisse traverser une demi-map pour un flank (entrer en fight depuis un côté que l'ennemi ne voit pas, généralement derrière sa back line). Forcez les fights autour du second Drake.
- **![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) The Collector + Evolved E (~ minute 16-19) :** Fenêtre de reset. Votre E reset maintenant au takedown — un teamfight propre commence par E sur le carry, Q pour la kill, et un second E sur la cible suivante. À ce moment Kha'Zix devient une machine à pick (pick = éliminer un ennemi isolé hors du teamfight) décisifs.

## Erreurs courantes

- **Sauter sur une cible non isolée.** Sans l'amplificateur d'isolation (aucun allié à 425 unités), votre Q tape environ 60% de moins. Attendez que le support s'éloigne ou que votre laner le peele — ne tradez pas au milieu de leur équipe.
- **Prendre Evolved W comme première evolution par défaut.** Evolved W est un outil de zoning de teamfight, pas de duel. Si votre équipe joue sur les picks (éliminer un ennemi isolé hors du teamfight) et skirmishes, Evolved Q est le bon choix dans 90% des cas.
- **Utiliser la R pour les dégâts au lieu du repositionnement.** Votre R est une fenêtre d'invisibilité pour entrer et sortir d'un fight, pas un bouton de dégâts. Gardez le second recast pour partir une fois la cible morte — re-stealth pendant le recall gâche la valeur principale du tool.
- **Greed les camps après un gank raté.** Sans reset de E (avant Evolved E), si le gank rate vous n'avez pas de sortie. Repassez par votre jungle, ne foncez pas en autopilot sur le camp suivant — le jungler ennemi trace votre chemin et counter-gank la lane suivante.
- **Build Eclipse en premier par défaut.** Eclipse transforme Kha'Zix en bruiser ; vous abandonnez le burst lethality qui en fait un assassin. Buildez Eclipse uniquement quand le matchup est bruiser-lourd et que vous ne survivez pas au trade in-out en lethality pure.

## Conseil avancé

Travaillez la combo **R-E-Q-AA-recast-R** sur le practice tool jusqu'à ce que les inputs deviennent automatiques. Le truc, c'est le reset d'auto-attack entre Q et le recast : la Q reset le timer du basic, donc dès que la Q atterrit vous insérez un basic, puis recast immédiatement R pour partir. Bien exécutée, cette combo supprime une cible à 1900 PV en environ 1.8 seconde et vous sortez invisible — un solo pick (pick = tuer un ennemi isolé hors du teamfight) sur l'ADC adverse au setup Baron, c'est un objectif gratuit. Le skill ceiling, c'est le timing de l'AA entre Q et recast R : trop tôt et la Q n'a pas atterri, trop tard et la fenêtre R est fermée.
