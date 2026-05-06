---
title: "Leona Support Build & Guide — Patch 16.9"
slug: "leona-support"
language: "fr"
patch: "16.9"
champion: "leona"
role: "support"
last_updated: "2026-04-29"
description: "Guide Leona support pour League of Legends Patch 16.9 : starter kit, build tank-engage, matchups clés, power spikes, erreurs courantes et un conseil final."
quick_learn:
  champion_dd_id: "Leona"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Vanguard"
  abilities:
    - key: "P"
      name: "Sunlight"
      description: "Les sorts de Leona appliquent le debuff Sunlight pendant 1,5 s. Le prochain allié qui touche la cible consomme la marque pour des dégâts magiques bonus. Burst gratuit sur chaque engage suivi par ton ADC."
      dd_spell_id: "Leona_Passive"
    - key: "Q"
      name: "Shield of Daybreak"
      description: "La prochaine auto-attaque de Leona stun brièvement et inflige des dégâts magiques bonus. Auto-targeted (pas besoin de viser) mais en melee range : il faut être collée. Second crowd control fiable après E ou R."
      dd_spell_id: "LeonaShieldOfDaybreak"
    - key: "W"
      name: "Eclipse"
      description: "Damage reduction plus armure et résistance magique pendant quelques secondes. À l'expiration, dégâts AOE (zone, touche tous les ennemis proches) ; si elle touche, les résistances durent plus longtemps. Active avant l'engage."
      dd_spell_id: "LeonaSolarBarrier"
    - key: "E"
      name: "Zenith Blade"
      description: "Leona projette une épée en ligne : le dernier champion touché est root (immobilisé) brièvement et Leona dash dessus. Skillshot (capacité à viser, vole en ligne, peut être dodge). Engage principal, ouvre la chaîne E vers Q."
      dd_spell_id: "LeonaZenithBlade"
    - key: "R"
      name: "Solar Flare"
      description: "AOE retardée à longue portée : ennemis au centre stun, sur les bords ralentis. Long cast delay : sert à ouvrir un fight de loin, à lock une cible qui fuit, ou à set up un teamfight hors portée de E."
      dd_spell_id: "LeonaSolarFlare"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
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
      against: "swap depuis Mercury's vs bot lanes auto-attack heavy (Caitlyn, Draven, Tristana) quand le harass fait plus mal que le CC"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "vs comps avec melee carry (Yasuo, Yone, Master Yi) sur lequel tu ult fiablement : ta R ajoute des dégâts magiques bonus à ses attaques"
    - dd_id: "3211"
      name: "Kaenic Rookern"
      against: "vs comps de burst AP (double mage type Syndra mid + Brand support) : bouclier magique passif qui régénère hors combat"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Place E depuis un fog (brush non wardé), atterris sur l'ADC adverse, enchaîne Q stun et AA avec la marque Sunlight prête : ton ADC double les dégâts sur le proc et le carry meurt avant que le support réagisse."
  weakness: "E est un skillshot lent, facile à sidestep en terrain plat. Aucun poke à distance : si la bot lane reste hors de portée de E, tu perds la lane et tu dois roam. Mana fragile en early."
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
      archetype: "Enchanters squishy sans hard CC propre"
      reason: "Ils n'ont pas d'outil pour interrompre ton dash de E. Dès que la E touche leur ADC, il meurt dans le stun de Q avant que l'enchanter shield ou peel. Yuumi n'a même pas le temps de se détacher."
    - examples: ["caitlyn", "jhin", "senna"]
      archetype: "ADCs immobiles sans dash"
      reason: "E a 875 de portée et dash sur le dernier champion touché : les ADCs sans blink mangent toute la chaîne E vers Q dès qu'ils s'avancent pour last-hit. Une fois engagée, ils ne peuvent plus fuir."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "Mages support stationnaires sans escape"
      reason: "Leur poke leur coûte le positionnement : un Flash plus E les accroche, et W mange leur counter-burst. Ils doivent rester immobiles pour caster leurs longs skillshots — c'est exactement quand E touche propre."
  counterpicks:
    - examples: ["morgana", "milio", "lulu"]
      archetype: "Bloqueurs de hard CC et enchanters de disengage"
      reason: "Le Black Shield de Morgana bloque le root de E entièrement : tu flash dedans pour rien. La R de Milio nettoie ta chaîne de stun à longue portée. Le polymorph de Lulu cancel ton dash en plein cast. Ton seul engage est répondu gratuitement."
    - examples: ["nami", "lux", "zyra"]
      archetype: "Pokers longue portée avec sustain ou roots"
      reason: "Ils chip ton HP gratuit à plus de 800 de portée alors que tu n'as pas de réponse. La Q de Lux te bind en plein engage, la bulle de Nami interrompt ton dash ; tu manges le poke sans jamais entrer en portée."
    - examples: ["thresh", "blitzcrank", "pyke"]
      archetype: "Hook supports qui te tirent hors de position"
      reason: "Leur hook touche avant ta E (Q de Thresh ~1100 vs E 875). Tu manges le pull, tu te fais focus seule chez eux, et ton ADC reste exposé sans outil d'engage à suivre."
---

## Aperçu

Leona est un **vanguard support** (un support de classe tank dont le job est d'ouvrir les fights, pas de soigner les alliés) — elle court sur le carry adverse, l'enchaîne en crowd control, et laisse ses coéquipiers conclure le kill. Son kit empile deux crowd controls sur la même cible : **Zenith Blade (E)** est un skillshot dash longue portée qui root le dernier champion touché, **Shield of Daybreak (Q)** est un stun sur la prochaine auto-attaque, et sa passive **Sunlight** marque chaque cible qu'elle touche pour que le prochain allié à frapper inflige des dégâts magiques bonus. **Eclipse (W)** est la couche défensive qu'elle pop *avant* l'engage : damage reduction plus armure et résistance magique qui durent plus longtemps si elle touche un ennemi à l'expiration. **Solar Flare (R)** est un stun AOE retardé utilisable à plus longue portée que E — pour engage depuis le fog of war ou lock un kill qui fuit.

Game plan : en lane, reste au bord du brush jusqu'à ce que l'ADC adverse s'avance pour last-hit, puis place E depuis le fog (brush non wardé) pour qu'il ne puisse pas sidestep, enchaîne Q et laisse ton ADC convertir. En mid-game, **roam** (quitte la bot lane pour aider mid ou jungle) en utilisant R pour des picks cross-lane. En late-game, ouvre le fight sur la cible prioritaire — ADC adverse ou mage mid — et reste en vie assez longtemps pour **peel** (protéger ton propre carry).

## Build Recommandé

**Starting items :** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (le starter unifié des supports) plus 2 Health Potions. Ne last-hit pas les minions : laisse l'or à ton ADC. World Atlas te paie l'or à part via sa quest progression.

**Core items (dans l'ordre) :**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — starter. Évolue automatiquement en accumulant la quest progress via ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** et ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**, jusqu'à l'upgrade endgame de ton choix.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — résistance magique plus **tenacity** (stat qui réduit la durée du crowd control sur toi). Un stun plus court signifie que tu places quand même ton Q après que le support adverse essaie d'interrompre.
3. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — armure, résistance magique et un actif qui shield tous les alliés proches. Pop-le l'instant où tu fais E pour que ton équipe absorbe le premier **burst** (gros dégâts dans les 1-2 premières secondes).
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — te lie à ton **ADC** (Attack Damage Carry — le bot lane qui tape en auto-attaque) : une portion des dégâts qu'il subit te sont redirigés, et tu lui rends de la vie en retour.
5. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — l'upgrade endgame engage-focused de ton support item. Porte une passive **Spellblade** : après n'importe quelle capacité, ta prochaine auto-attaque inflige des dégâts bonus et amplifie les dégâts subis par la cible pendant 4 secondes. Pattern : "capacité → AA → capacité → AA".

**Situational items :**

- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — bottes d'armure qui réduisent les dégâts d'auto-attaque. Swap depuis Mercury's quand la bot lane adverse est auto-attack heavy (Caitlyn, Draven, Tristana) et que leur **harass** (poke et chip damage) fait plus mal que le CC late.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — te lie à un allié choisi ; quand tu ult, cet allié gagne des dégâts magiques bonus sur ses attaques. À prendre avec un melee carry (Yasuo, Yone, Master Yi) sur lequel tu ult de manière fiable.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3211.png) **Kaenic Rookern** — bouclier magique passif qui régénère hors combat. À prendre vs comps de burst AP (double mage type Syndra + Brand) — le bouclier mange une ult entière.

**Boots :** Par défaut ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** pour la tenacity — un hook de Thresh de 1,25s passe à 0,85s, assez pour caster Q quand même. Switch sur ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** uniquement contre des bot lanes AA-heavy.

**Skill order :** Max **E** (Zenith Blade) en premier — cooldown plus bas signifie plus de fenêtres d'engage, et E est ton seul outil à distance. Max **W** en deuxième pour plus de damage reduction. Max **Q** en dernier (la montée de rank change peu le stun, surtout les dégâts). Prends **R** aux niveaux 6, 11, 16.

**Runes :** Primary **Resolve** (l'arbre de runes défensives — durabilité) avec **Aftershock** (armure et résistance magique gratuites quand tu CC quelqu'un, déclenche sur chaque Q stun et E root), **Font of Life** (ton CC marque la cible ; les alliés qui l'attaquent se soignent), **Conditioning** vs lanes qui scale en late ou **Bone Plating** vs burst early, **Unflinching** (extra **tenacity** quand tu utilises un summoner spell). Secondary **Inspiration** avec **Hextech Flashtraption** (Flash de secours sur long cooldown) et **Cosmic Insight** (cooldowns réduits sur summoners et actifs items). **Stat shards** : Adaptive Force / Adaptive Force / Health.

## Matchups clés

- **Nautilus :** Mirror **engage**. Son Q hook surclasse ta E (~1100 vs 875), donc n'avance pas tant que son hook est up. Dodge-le, puis flash-E sur son ADC quand il n'a plus de follow-up.
- **Pyke :** Skill matchup. Il te poke avec son Q et te surclasse en roam grâce à sa **stealth** (invisible en traversant les brushes). Garde de la vision profonde dans la rivière et force les fights en lane où sa R ne reset pas sur le kill.
- **Morgana :** Hard counter contre ton **all-in** (commit total au kill). Black Shield bloque ton root de E entièrement : tu flash dedans pour rien. Track son cooldown de 18 secondes et force des fights uniquement quand il est down.
- **Soraka :** Pure **enchanter de sustain** (support cure qui gagne en gardant son ADC en vie, pas en ouvrant les fights). Flash-E sur elle dès que son Flash est down — elle meurt dans ta combo avant que son ADC réagisse.
- **Caitlyn :** Matchup de **poke** longue portée (chip damage à distance). Elle te bully le HP sous tour. Ne riposte pas, accepte la mauvaise lane, roam mid ou invade avec Mobility Boots — Leona perd la lane mais gagne le macro.

## Power spikes & conditions de victoire

- **Niveau 2 (E + W) :** Premier spike. La chaîne complète E vers Q se débloque au niveau 3, mais avec E plus W tu peux déjà **trade** fort (un échange bref de dégâts, pas un kill commit complet). Un ADC adverse qui over-extend (passé sa première **wave** — la rangée de minions arrivants) est un kill gratuit si tu place E avec **Flash** up.
- **Niveau 6 (R débloquée) :** Le potentiel d'engage explose. **Solar Flare** te permet d'ouvrir des fights depuis le fog of war : cast-le depuis le brush de la rivière sans te montrer. R sert aussi de **peel** (protéger ton carry) — drop-le sur quelqu'un qui dive ton ADC.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari completion (~ minute 14-16) :** Premier item de teamfight. Ton engage drop un shield d'équipe gratuit. Regroupez-vous pour le **Drake** (objectif dragon dans la rivière du bas — les kills donnent des buffs de stats permanents) ou les **Voidgrubs** (petits monstres dans la rivière du haut — l'équipe qui les tue gagne des dégâts bonus aux structures).
- **![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) Bloodsong endgame (~ minute 24-30) :** Le proc Spellblade plus 4 secondes de damage amp sur les champions transforment ta rotation en vrais dégâts. E → AA → Q → AA enlève à toi seule 20-25% du HP d'un **squishy** (champion peu défensif comme un ADC ou un mage).

## Erreurs courantes

- **E depuis terrain découvert.** Zenith Blade est un projectile lent, facile à sidestep en lane plate. Cast E depuis l'intérieur d'un brush ou depuis un angle non wardé — le projectile traverse la demi-seconde de vision dont l'adversaire a besoin pour réagir. En terrain découvert, ne cast E que si la cible est déjà CC par une autre source.
- **Engage sans follow-up.** La E de Leona te commit en avant et tu ne peux pas reculer. Si ton ADC est en base ou que ton jungler est de l'autre côté de la map, garde ton E. Un engage solo en 4v5 te fait juste mourir et brûle ton cooldown de R pour rien.
- **W casté après l'engage au lieu d'avant.** Eclipse donne la damage reduction à l'*instant* où tu la cast, pas quand l'explosion part. Pop W d'abord, *ensuite* E. Si tu fais E et que tu réalises seulement après que tu avais besoin des résistances, le bonus de W expire souvent avant que tu touches la cible.
- **R réactive à courte portée.** Solar Flare a un long cast delay et travel time — en melee range, même une cible immobile glisse hors de la zone de stun centrale. Garde R pour ouvrir un fight depuis le fog of war, ou finir un runner low-HP.
- **Oublier la passive Sunlight.** Chaque sort que tu landes marque la cible pendant 1,5 seconde ; le premier allié qui frappe consomme la marque pour des dégâts bonus. Time ton Q pour que ton ADC soit déjà en portée d'auto-attaque — la chaîne doit sonner comme "Q stun, ADC AA, Sunlight pop, cible morte".

## Conseil avancé

La **combo R-Flash-E depuis le fog of war**. Reste invisible dans le brush enemy-side de la rivière au niveau 6. Cast **R** sur l'ADC adverse pendant qu'il farm — il voit l'indicateur au sol mais pas la source. À l'instant où il commence à bouger pour dodge, **Flash** en avant, **E** pendant le flash (le dash s'étend depuis ta position flashée), et **Q** en arrivant. Bien fait, la cible mange le stun de R, le root de E, puis le stun de Q — trois crowd controls en deux secondes sans counter-play. Pratique le timing en **Practice Tool** jusqu'à ce que R-Flash-E-Q soit une séquence fluide en moins d'une demi-seconde.
