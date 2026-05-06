---
title: "Corki Mid Build & Guide — Patch 16.9"
slug: "corki-mid"
language: "fr"
patch: "16.9"
champion: "corki"
role: "mid"
last_updated: "2026-05-02"
description: "Guide Corki mid pour League of Legends Patch 16.9 : build marksman hybride, runes, matchups clés, power spikes, erreurs courantes et un conseil avancé final."
quick_learn:
  champion_dd_id: "Corki"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hybrid"
  abilities:
    - key: "P"
      name: "Hextech Munitions"
      description: "Une partie des dégâts d'auto-attack passe en true damage. DPS constant qui ignore armor et magic resist — la raison pour laquelle tu empiles attack speed et on-hit."
      dd_spell_id: "Corki_Passive"
    - key: "Q"
      name: "Phosphorus Bomb"
      description: "Bombe en zone qui inflige des dégâts magiques et révèle brièvement les ennemis. Sert pour last-hit quand tu es zone, checker les bushes et ouvrir chaque trade de poke."
      dd_spell_id: "PhosphorusBomb"
    - key: "W"
      name: "Valkyrie"
      description: "Court dash qui laisse une traînée de feu. C'est ta seule mobilité : utilise-la pour fuir, gap-close ou esquiver un skillshot. Ne la gâche pas en waveclear."
      dd_spell_id: "CarpetBomb"
    - key: "E"
      name: "Gatling Gun"
      description: "Cône channelé devant Corki qui inflige des dégâts et réduit armor et magic resist. Ajoute du DPS et ramollit la cible pour les missiles de R qui suivent."
      dd_spell_id: "GGun"
    - key: "R"
      name: "Missile Barrage"
      description: "Missile longue portée qui explose à l'impact. Tu accumules jusqu'à 7 charges ; chaque 3e est une Big One avec burst supplémentaire. Ton poke principal et ton outil d'execute."
      dd_spell_id: "MissileBarrage"
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3004", name: "Manamune" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "3046", name: "Phantom Dancer" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contre assassins multi-dash (Zed, Akali, Talon) : la stasis bloque leur burst, ton équipe ou ta W peut sauver"
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contre frontline avec 2+ tanks (Sion, Ornn, Maokai) : armor pen lourde pour que autos et missiles passent"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contre burst AP lourd (LeBlanc, Veigar, Syndra) : le bouclier magique encaisse une full combo et te laisse W"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contre équipes avec 3+ hard CC (stuns, roots) : change les bottes quand le chain CC pèse plus que la magic pen"
  base_combo: ["Q", "AA", "R", "E", "AA"]
  win_condition: "Scale derrière les minions jusqu'à Trinity Force et Manamune, puis grignote les squishies au poke R à portée max. Cueille les cibles isolées en rotation pendant que ton équipe tient les fenêtres d'objectifs."
  weakness: "Squishy avec un seul dash. Les assassins mobiles à plusieurs gap-closers le roulent dessus avant deux items, et les anti-projectiles (Yasuo Wind Wall, Braum E) annulent son poke."
  runes:
    primary_tree: "Inspiration"
    primary_tree_dd_id: 8300
    keystone:
      dd_id: 8369
      name: "First Strike"
      icon_path: "perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png"
    primary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Inspiration primary : First Strike récompense Corki qui ouvre chaque trade avec Q ou R, en convertissant ce dégât initial en or bonus qui finance la build greedy Trinity + Manamune. Magical Footwear, Biscuit et Cosmic Insight prolongent le sustain early pour scale sans mourir."
    secondary_rationale: "Sorcery secondary : Manaflow Band est obligatoire car les missiles de R coûtent du mana et tu les spam en lane ; Gathering Storm offre du scaling AP gratuit qui gonfle les dégâts magiques de Q et de la Big One missile en late game."
    secondary_alternative: "Contre une lane de poke lourd (Xerath, Vel'Koz, Zoe) où tu ne peux pas te permettre de perdre des HP, swap Sorcery pour Resolve : Second Wind (regen passive sous harass) et Overgrowth (max HP scaling) pour scale plus safe."
matchup_draft:
  pick_into:
    - examples: ["veigar", "anivia", "karthus", "cassiopeia"]
      archetype: "Mages immobiles sans dash"
      reason: "Le R de Corki atteint 1225 unités et son W lui donne le seul avantage de mobilité de la lane. Les cibles sans dash ni stealth mangent du poke R répété et ne peuvent pas punir les fenêtres où W est en cooldown."
    - examples: ["xerath", "vel-koz"]
      archetype: "Mages d'artillerie avec channels longs"
      reason: "Corki égale leur portée avec R et a en plus un dash pour interrompre les channels longs (Xerath R, Vel'Koz R). Ils ne peuvent pas le all-in, et les trades favorisent le côté avec mobilité."
    - examples: ["annie", "syndra"]
      archetype: "Mages de burst à courte portée"
      reason: "Leur kill threat commence dans la portée d'auto-attack, exactement là où le passif true damage de Corki plus Trinity Force les surclasse. Pre-6 tu out-pokes au R, post-6 tu esquives leur stun avec W."
  counterpicks:
    - examples: ["zed", "talon", "akali", "qiyana"]
      archetype: "Assassins mobiles multi-gap-closers"
      reason: "Corki n'a qu'un dash (W) avec long cooldown. Les kits multi-dash entrent dans son cast range avant que W ne revienne et le bursts à travers les HP de Trinity, surtout avant deux items."
    - examples: ["yasuo", "yone"]
      archetype: "Bloqueurs de projectiles Wind Wall"
      reason: "Wind Wall mange Q et toute la barrage de missiles R, retirant deux tiers des dégâts de Corki du trade. Même quand il gagne en HP, le coût en cooldowns du trade est brutal."
    - examples: ["fizz", "kassadin"]
      archetype: "Échappes untargetable / blink"
      reason: "Le E de Fizz et le R de Kassadin esquivent une combo committée et re-engagent ensuite Corki quand son W est down. Il n'a pas de burst de follow-up une fois qu'ils deviennent untargetable."
---

## Aperçu

Corki est un marksman hybride (carry à distance qui mêle dégâts physiques et magiques) qui joue mid lane comme un champion d'artillerie longue portée : il devient plus fort à mesure que ses items arrivent (il "scale"), grignote les HP ennemis de loin avec **Missile Barrage (R)** ("poke" = chip damage hors de leur portée), et finit les cibles squishy low-HP à l'auto-attack une fois **Trinity Force** terminé. Sa **Hextech Munitions (P)** transforme une partie de chaque auto-attack en true damage (dégâts qui ignorent armor et magic resist), donc l'attack speed et les stats on-hit comptent autant que l'AD ou l'AP brut. Il est en mid parce que les ganks bilatéraux du fleuve favorisent le dash de sa **Valkyrie (W)**, et parce que les missiles R peuvent poke les sidelanes depuis le centre de la map.

Game plan en une ligne : empile (accumule) du mana sur Manamune pour le transformer en Muramana, push les waves (tue les minions vite pour pousser la wave) avec **Phosphorus Bomb (Q)** et R, et utilise chaque cooldown window (les secondes où tes spells sont up) pour grignoter les HP du laner adverse afin que ton jungler puisse dive (tuer sous tour). Le skill expression se joue sur l'aim de R — anticipe où la cible va se déplacer et vise là — et sur le timing de la Big One (chaque 3e R est un missile plus fort) pour le moment où l'ennemi est le plus bas. **W** est ton unique dash : mal utilisé, n'importe quel assassin te walka down.

## Build Recommandé

**Items de départ :** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. La blade donne du lifesteal (une partie des dégâts infligés te soigne) qui s'aligne avec le passif d'auto-attack ; évite Doran's Ring sauf si tu fais face à une pure poke lane où le sustain de mana pèse plus que le dueling.

**Items core (dans l'ordre) :**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — Sheen (un composant de Trinity) procc (déclenche un effet de dégât bonus) sur chaque Q et chaque missile R, plus AD, attack speed, ability haste (réduction de cooldown) et movement speed. Le plus gros power spike du champion.
2. ![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) **Manamune** — Manamune se transforme lentement en une version plus forte appelée Muramana au fur et à mesure que tu dépenses du mana ; une fois "stacked" (totalement transformé), il ajoute des dégâts bonus sur chaque auto et chaque ability qui coûte du mana, missile R inclus.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic pen plate (ignore une partie de la magic resist ennemie) qui gonfle les dégâts de Q et R.
4. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — ton premier auto-attack sur un ennemi ("auto energized") inflige des dégâts bonus et porte plus loin que la portée normale. Le crit chance s'aligne avec le profil stats de Trinity.
5. ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — attack speed pour DPS soutenu via **Gatling Gun (E)** et le true damage on-hit du passif.

**Items situationnels :**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contre assassins multi-dash (Zed, Akali, Talon) : la stasis bloque leur fenêtre de burst, ton équipe ou ta W peut te sauver.
- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contre frontline avec 2+ tanks (Sion, Ornn, Maokai) : armor pen lourde pour que autos et missiles R continuent à passer.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contre burst AP lourd (LeBlanc, Veigar, Syndra) : le bouclier magique encaisse une full combo et te laisse W.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — change les Sorcerer's quand l'équipe ennemie a 3+ hard CC (stuns, roots) et que le chain CC pèse plus que la magic pen.

**Bottes :** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** par défaut. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** si la team comp adverse est CC-lourde.

**Skill order :** Maxe **Q** en premier (poke et waveclear), **E** en second (DPS et shred de résistances), **W** en dernier (utility). Point dans **R** aux niveaux 6, 11 et 16.

**Runes :** Primary **Inspiration** avec **First Strike**, **Magical Footwear**, **Biscuit Delivery** et **Cosmic Insight**. Secondary **Sorcery** avec **Manaflow Band** et **Gathering Storm**, ou **Resolve** avec **Second Wind** et **Overgrowth** contre les lanes de poke lourd.

## Matchups clés

- **Yasuo / Yone :** Ils bloquent ta Q et tes missiles R avec Wind Wall. Garde Q jusqu'à ce qu'ils dépensent leurs abilities, retiens R après que Wind Wall soit en cooldown, et ne trade jamais (échange de dégâts) à melee range où ils peuvent E (dash) sur les minions à côté de toi.
- **Akali / Zed :** Diving threats (champions qui peuvent te plonger sous tour pour te tuer). Achète ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** après Trinity Force ; ne dépense jamais W dans un trade si leur chaîne de dashes est encore disponible.
- **Veigar :** Égale sa portée avec R, esquive son W (une cage qui s'étend lentement et te bloque sur place) et évite les auto-trades dans l'anneau de son E (un cercle de stun qui se déclenche quand tu le franchis). Ses stacks de Q scalent à l'infini (plus de kills = plus d'AP permanent), donc termine la lane avant la minute 25.
- **Twisted Fate :** Course au roam (les deux champions essaient de quitter la lane en premier pour aider leurs alliés). Push la wave avec Q avant qu'il ne touche le niveau 6, ping le jungler ennemi quand son R est up, et W loin de la cible de sa gold card au lieu d'encaisser le stun en face.
- **Galio :** Punis-le pre-6 en tuant la wave qu'il ne peut pas matcher en melee (Galio est melee, toi à distance). Post-6 son R est un outil d'engage global — regroupe-toi avec ton équipe seulement quand tu as des missiles en stock pour peel (sortir Galio de tes carries de back-line) à son arrivée.

## Power spikes & conditions de victoire

- **Niveau 2 :** Avec Q + W ou Q + E, tu peux punir un last-hit raté avec un trade Q-AA-AA ("AA" = auto-attack de base) et soit disengager au W, soit follow-up si leur Flash est down.
- **Niveau 6 :** La première **Missile Barrage (R)** débloque la side-lane pressure (l'option de quitter mid pour menacer top ou bot). Avec des stocks R plus W, tu peux roam bot, drop deux missiles plus une Big One sur un trade 1v1 et W back en wave.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force terminé (~ minute 12-14) :** Sheen procc sur chaque Q et chaque missile R, transformant le poke en kill threat. C'est le moment de all-in (commit total à la kill, sans retraite) le laner low-HP avec Q-AA-R-AA.
- **![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) Manamune stacké (~ minute 18-22) :** Muramana ajoute des dégâts bonus sur chaque action coûtant du mana ; les dégâts en teamfight doublent à peu près par rapport au pre-stack. Force des fights d'objectif (Drake, Baron) ici.

## Erreurs courantes

- **Spam R en cooldown pour waveclear.** Les missiles R sont un stock fini ; si tu les vides sur les minions, le prochain teamfight tu auras zéro burst au pire moment. Push les waves au Q + auto-attacks ; garde 4+ missiles pour les objectifs.
- **Utiliser W en agressif sans follow-up.** W est ta seule fuite. Dash dedans pour finir une kill qui demandait un auto de plus, c'est exactement comme ça que Corki meurt — si tu ne peux pas les tuer avec le mana et les cooldowns restants, ne commit pas (n'engage pas totalement).
- **Auto-trade à melee range.** Le true damage du passif au corps à corps est tentant, mais la pool HP de Corki est squishy (faible et fragile, comme un ADC). Reste à R range quand le laner a ses gap-closers up.
- **Acheter ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes contre une équipe CC-lourde.** La magic pen est gâchée si tu passes le fight stun. Sorcerer's seulement quand leur CC est faible ; sinon swap Mercury's Treads.
- **Roam avec les stocks R vides.** Un roam sans 2 missiles est un coin flip. Attends les 8-12 secondes pour les stocks avant de traverser la rivière ; ce délai unique fait la différence entre une kill et donner ta wave pour rien.

## Conseil avancé

Track et exploite le rythme de la **Big One**. Chaque 3e missile R (la "Big One") inflige beaucoup plus de dégâts que les deux réguliers. Avant un teamfight, compte les missiles que tu as en stock — si le prochain est une Big One, garde-la pour la cible prioritaire ; si tu viens de la dépenser, tire les deux missiles filler dans la wave ou sur une tour pour que la Big One recharge prête pour l'engage. Les joueurs qui tirent R aveuglément gâchent les Big Ones sur les minions ; ceux qui tracent le compte one-shot les squishies (carries low-HP) au moment décisif.
