---
title: "Illaoi Top Build & Guide — Patch 16.9"
slug: "illaoi-top"
language: "fr"
patch: "16.9"
champion: "illaoi"
role: "top"
last_updated: "2026-05-04"
description: "Guide Illaoi top lane pour League of Legends Patch 16.9 : build juggernaut à Tentacules, pression de Test of Spirit, matchups clés, power spikes, erreurs courantes et astuce avancée."
quick_learn:
  champion_dd_id: "Illaoi"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Juggernaut / Bruiser"
  abilities:
    - key: "P"
      name: "Prophet of an Elder God"
      description: "Des Tentacules apparaissent sur les murs et terrains infranchissables proches. Ils frappent les ennemis touchés par W, les Vessels créés par E et tout esprit extrait. Ils soignent Illaoi en touchant champions et Vessels."
      dd_spell_id: "Illaoi_Passive"
    - key: "Q"
      name: "Tentacle Smash"
      description: "Frappe en ligne avec un Tentacule, dégâts physiques. Passive : amplifie chaque slam de Tentacule — Q est aussi son waveclear et le bouton qui déclenche les Tentacules."
      dd_spell_id: "IllaoiQ"
    - key: "W"
      name: "Harsh Lesson"
      description: "Auto-attaque empowered : saute sur la cible, dégâts physiques en % PV max, et ordonne à chaque Tentacule proche de slammer. Le saut est sa seule mobility."
      dd_spell_id: "IllaoiW"
    - key: "E"
      name: "Test of Spirit"
      description: "Skillshot linéaire longue portée qui arrache l'esprit de l'ennemi. Les dégâts sur l'esprit se répercutent sur le champion réel. Si l'esprit meurt ou sort de portée, la cible devient Vessel et les Tentacules la chassent."
      dd_spell_id: "IllaoiE"
    - key: "R"
      name: "Leap of Faith"
      description: "Slam AOE autour d'Illaoi : dégâts + un Tentacule supplémentaire par champion touché. Pendant 8s les Tentacules sont untargetable et slamment 50% plus vite, et le CD du W tombe à ~1.5s."
      dd_spell_id: "IllaoiR"
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "3065", name: "Spirit Visage" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap depuis Plated Steelcaps face à 2+ menaces AP ou CC enchaîné (Lissandra, Malphite ult, pull de Sett)"
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "contre kiters qui sortent de la portée du W (Quinn, Vayne, Gnar) — la dash active + slow les garde dans le rayon des Tentacules"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "contre frontlines avec beaucoup d'armor (Malphite, Rammus, Shen) — chaque Q et proc W gratte de l'armor pour toute l'équipe"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contre comps AP-heavy avec burst (Vladimir, LeBlanc) — bouclier magique à bas PV, pile quand les Tentacules slamment encore"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "quand l'équipe est behind 4v5 et qu'il faut splitpush — résistances bonus contre minions et tours pour assiéger une side lane seul"
  base_combo: ["E", "Q", "W", "AA", "R"]
  win_condition: "Tire l'esprit avec E, garde la cible dans le rayon du maximum de Tentacules. Chaque Q et chaque W tickent sur l'esprit ET le champion — les fights longs sont sa zone de victoire."
  weakness: "Aucune dash, aucune fuite hors Flash. Les tops ranged la pokent hors de portée du W, et les skirmishers multi-dash baitent les Tentacules, sortent du rayon, et reviennent quand Conqueror est tombé."
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
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision avec Conqueror : chaque Q, W et slam de Tentacule stacke la keystone, et la win zone d'Illaoi ce sont les fights de 5+ secondes. Triumph soigne aux takedowns, Legend: Alacrity ajoute de l'Attack Speed pour les resets W, Last Stand récompense les bas PV où R atterrit."
    secondary_rationale: "Resolve secondaire : Bone Plating coupe les 3 premiers coups d'un all-in (aux niveaux 2-3 Illaoi perd des PV sans pouvoir riposter), Overgrowth scale les PV via les minions jusqu'à ~3.5% bonus health à la minute 25 — durabilité pour survivre aux teamfights."
    secondary_alternative: "Si le top est du ranged poke dur (Teemo, Quinn, Jayce, Kennen), garde Conqueror mais swap Resolve vers Inspiration avec Triple Tonic (potions bonus) et Magical Footwear (Boots gratuits min 12) — la prio est perdue de toute façon, Inspiration récupère or et PV."
matchup_draft:
  pick_into:
    - examples: ["sett", "garen", "darius", "mordekaiser"]
      archetype: "Juggernauts melee courte portée sans dash"
      reason: "Tout leur profil de dégâts est dans la portée du W. Une fois que tu W dessus, chaque Tentacule proche slamme — et ils n'ont pas de dash pour sortir avant que Conqueror atteigne son cap et que les dégâts s'envolent."
    - examples: ["nasus", "sion"]
      archetype: "Tank scalers au laning faible"
      reason: "Leurs 6 premiers niveaux sont du farm passif. Le E les pousse hors de la wave pour du chip gratuit et les transforme en Vessels : les Tentacules les chassent jusqu'à la wave et l'écho de l'esprit double chaque Q."
    - examples: ["yorick", "volibear"]
      archetype: "Bruisers melee qui invoquent pets ou buffs pour fight"
      reason: "Ils s'engagent vers l'avant pour utiliser leur kit (les ghouls de Yorick, l'AA empowered de Volibear) : une fois committed ils sont dans la portée du W et l'essaim de Tentacules les punit d'y rester."
  counterpicks:
    - examples: ["teemo", "vayne", "quinn", "kennen"]
      archetype: "Tops ranged qui pokent ou kitent"
      reason: "Ils restent hors de la portée du W (400 unités) et te grattent les PV avec leurs autos. Chaque pas pour combler la distance leur offre un auto gratuit — et tu n'as pas de dash pour fermer le gap."
    - examples: ["riven", "irelia", "camille"]
      archetype: "Skirmishers multi-dash"
      reason: "Ils entrent dans le rayon des Tentacules, burst, puis sortent en dash avant que Conqueror atteigne son cap. Quand leurs dashs reviennent, tes Tentacules sont en cooldown — ils dictent le tempo du trade, pas toi."
    - examples: ["jayce", "gnar"]
      archetype: "Form-shifters ranged-melee"
      reason: "Ils pokent en forme ranged, puis passent en mêlée seulement quand les Tentacules ne sont pas actifs. Tu brûles le W pour engage et ils annulent le trade en repassant ranged."
---

## Aperçu

Illaoi est une **juggernaut** (championne mêlée lente et immobile qui tape très fort et tank les dégâts dans un fight direct) construite autour de sa passive **Prophet of an Elder God**. Des **Tentacules** apparaissent sur chaque mur et terrain infranchissable proche — d'énormes bras untargetable accrochés aux bords de la map qui slamment à la commande. Les Tentacules font la majorité de ses dégâts ; ton job est d'obliger l'ennemi à rester dans leur rayon assez longtemps pour mourir. Son kit tourne autour de deux outils qui donnent aux Tentacules une cible : **W (Harsh Lesson)** est un saut court qui ordonne à chaque Tentacule proche de slammer la cible, et **E (Test of Spirit)** arrache l'esprit de l'ennemi pour que les Tentacules le tabassent (les dégâts se répercutant sur le champion réel).

Son game plan est brutalement simple. **Hit le E pour marquer la cible, marche en avant, W dans le champ de Tentacules le plus dense de ton côté de la map.** Si l'ennemi sort du rayon, l'esprit meurt et il devient **Vessel** — un debuff où les Tentacules le pourchassent dans toute la lane. À partir du niveau 6, **R (Leap of Faith)** crée un Tentacule supplémentaire par champion touché et rend les Tentacules existants untargetable pendant 8 secondes — c'est la seule fenêtre où elle a le burst pour effacer une cible, alors garde le R pour un all-in ou un teamfight, jamais pour le waveclear.

## Build Recommandé

**Starting items :** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. La passive de regen PV amortit le poke ennemi (dégâts à distance peu coûteux qui grattent les PV sans s'engager) jusqu'à l'arrivée de la pression Tentacules au niveau 3.

**Core items (dans l'ordre) :**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — premier spike (le moment où ta puissance fait le plus grand bond). La passive Spellblade (auto-attaque empowered gratuite toutes les quelques secondes après un cast) s'aligne parfaitement avec W : chaque auto du saut proc Spellblade. Apporte AD (Attack Damage, stat derrière les dégâts physiques), PV, ability haste (stat qui réduit les cooldowns) et Attack Speed — tout ce dont le kit a besoin.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots par défaut contre des équipes qui font mal surtout aux auto-attaques. Coupe les dégâts d'autos dans les trades prolongés (échanges de dégâts en lane).
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — PV plus un **bouclier lifeline** : quand tes PV passent sous ~30%, un bouclier automatique se déclenche. Cette fenêtre tombe pile quand tes Tentacules slamment encore, donc les secondes de survie supplémentaires se transforment en kill.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — convertit le **burst** AD reçu (gros dégâts en 1-2 secondes, type combo d'assassin) en **bleed** lent (dégâts étalés sur les secondes suivantes au lieu d'instantanés). Sur takedown le bleed restant est nettoyé — un reset gratuit chaque fois que R enchaîne une kill.
5. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — MR (Magic Resistance) plus une passive qui amplifie les soins reçus : booste le sustain des Tentacules de la passive, le bleed-clean de Death's Dance et le trade en % PV max du W. Le plus gros multiplicateur de survie de la build.

**Situational items :**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap depuis ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** quand l'enemy team a 2+ menaces AP ou **CC** enchaîné (crowd control : stuns, roots, knockbacks — tout ce qui te bloque et t'empêche d'agir). La tenacity (stat qui réduit la durée du CC sur toi) est critique parce que tu n'as pas de dash pour fuir.
- ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — contre kiters qui s'éloignent de ton W de 400 unités (Quinn, Vayne top, Gnar). L'active est une dash courte plus un slow AOE — exactement le second gap-closer qui manque au kit. Remplace ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** comme premier item, ne stack pas les deux.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — contre frontlines à fort armor (Malphite, Rammus, Shen). Chaque Q et proc W gratte des stacks d'armor sur la cible pour toute l'équipe.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contre comps AP-heavy avec **burst** (Vladimir, LeBlanc, Veigar). Le bouclier magique se déclenche automatiquement quand tu passes bas — pile les secondes nécessaires pour que les Tentacules continuent à slammer.
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — quand l'équipe est behind 4v5 et que ton job est de **splitpush** (push une side lane seul pour forcer l'adversaire à répondre). Résistances bonus contre minions et tours permettent à Illaoi d'assiéger une side seule.

**Boots :** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** par défaut. Switch vers ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** quand l'enemy team a trois sources de CC ou plus, ou beaucoup de dégâts magiques.

**Skill order :** Max **Q** en premier (waveclear, amplification de Tentacules, plus bas cooldown). Max **E** en second (le cooldown chute de 4 secondes au rank max, ce qui veut dire plus de pression Vessel par minute). **W** se max en dernier — ses dégâts sont déjà énormes parce qu'ils scalent avec les PV max de la cible, donc les rangs supplémentaires apportent moins. Mets des points en **R** aux niveaux 6, 11, 16.

**Runes :** Primaire **Precision** avec la keystone (la rune principale de l'arbre) **Conqueror** — passive qui accumule de l'AD bonus tant que tu fights, capée après 5 secondes de combat soutenu. À combiner avec **Triumph** (petit soin et burst d'or aux takedowns), **Legend: Alacrity** (Attack Speed accumulée aux takedowns) et **Last Stand** (dégâts bonus sous 60% PV). Secondaire **Resolve** avec **Bone Plating** (réduction de dégâts sur les 3 prochains coups après avoir pris des dégâts) et **Overgrowth** (PV scalant avec les minions qui meurent à proximité, parfait pour un top qui farme 8+ minions par wave). Stat shards : **Adaptive Force** + **Adaptive Force** + **Health Scaling**.

## Matchups clés

- **Sett :** Lane favorable. Son combo Q-W-E est telegraphed (le wind-up — animation visible avant le cast — est assez long pour réagir). Garde le E pour arracher son esprit pile au moment où il W — sa barre de bouclier vidée, il n'a plus de disengage, et l'essaim de Tentacules lui arrache un gros morceau de PV avant que sa R remonte.
- **Darius :** Skill matchup (le meilleur joueur gagne, peu importe le pick). Il te bat sur le trade prolongé à 5 stacks si les Tentacules sont down — bait son pull E, puis W back dans un champ de Tentacules. Jamais de trade au milieu de la lane, uniquement de ton côté où les Tentacules couvrent le mur.
- **Fiora :** Matchup mêlée dur. Son **W** est un parry (bouclier bref qui bloque et contre la prochaine ability) — si elle parre ton E, l'esprit ne sort pas et tu perds 14 secondes de cooldown. **Bait** le parry avec un animation cancel (commence le cast E, puis strafe sur le côté) avant le vrai cast.
- **Teemo / Quinn :** Matchup ranged très dur. Ils restent hors de la portée du W, blind tes auto-attaques (annulées un instant) et te grattent les PV gratuitement. **Freeze** la wave près de ta tour (arrête de push et garde la wave de ton côté de la lane) pour leur denier le farm (or et XP des minions), et appelle ton jungler — Illaoi ne gagne pas ce 1v1 sans aide.
- **Camille :** Le matchup mêlée le plus dur. Son E hookshot la dash dans et hors de la portée du W librement, et sa R t'enferme en 1v1 loin de tes Tentacules. Garde le E pour l'instant juste après sa dash in : si tu pull l'esprit pendant qu'elle est committed, sa R ne la sauve pas. Achète ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** tôt — la majorité de ses dégâts sont true on-hit (true damage appliqués par chaque auto : ignorent armor et MR), mais chaque point d'armor aide tout de même contre le reste du kit.

## Power spikes & conditions de victoire

- **Niveau 3 :** Avec Q + E + W débloqués, Illaoi a son combo de lane complet pour la première fois. E pour marquer, marcher dans ton champ de Tentacules, W pour sauter et ordonner les slams. À partir d'ici la lane t'appartient sauf si l'ennemi est ranged.
- **Niveau 6 :** Premier **R** débloqué. Même avec un seul Tentacule déjà sur le mur, R en spawn un second et les rend tous **untargetable** (aucun ennemi ne peut les attaquer) pendant 8 secondes. Un 1v1 avec R up est une kill contre n'importe quel bruiser non mobile.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force complétée (~ minute 13-15) :** Dégâts et **stickiness** (capacité à rester collée à une cible qui essaie de fuir) font le plus gros bond. Force les 1v1 en side lane et cherche à **roam** (quitter ta lane pour aider mid ou bot) pour des picks (kills isolées sur des ennemis hors position).
- **Deux items + R disponible (~ minute 18-22) :** Pic de teamfight. Marche à travers la frontline (les tanks/bruisers en première ligne de ton équipe), R sur 3+ ennemis pour spawn 3+ Tentacules sur place, et laisse l'essaim shred la backline (les carries squishy — champions à faible défense et gros dégâts qui restent derrière les tanks pendant un fight) pendant que Conqueror atteint son cap dans les 5 premières secondes.

## Erreurs courantes

- **Fight au milieu de la lane.** Les Tentacules apparaissent uniquement sur les murs et le terrain infranchissable. Si tu W sur une cible au milieu de la rivière ou en lane ouverte, aucun Tentacule ne slamme et le W n'est qu'un saut de 400 unités sans extra. Choisis toujours le fight près d'un mur — le bush de ton côté de la lane, le tri-bush, l'entrée de ta jungle.
- **Lancer E sur une ligne de minions à bas PV.** E est ton ability la plus importante avec un cooldown de 12-16 secondes. Si tu la lances et que le skillshot accroche un minion ou rate le champion, tu n'as plus de setup pendant 14 secondes — et l'ennemi le sait. Attends une ligne de vue propre sur le champion avant de presser E.
- **Presser R pour le waveclear.** R fait des dégâts AOE, mais sa vraie valeur ce sont les 8 secondes de Tentacules untargetable plus le Tentacule bonus par champion touché. L'utiliser sur une wave gâche un cooldown de 70-120 secondes et te laisse sans teamfight tools quand le jungler ennemi pop.
- **Walk in fight sans regarder les positions des Tentacules.** Si les Tentacules les plus proches sont sur le point d'expirer (la lueur orange s'éteint juste avant), attends 4 secondes le nouveau spawn avant de committer le W. Une Harsh Lesson sans Tentacules à slammer est un saut gaspillé.
- **Stack des items full tank.** Illaoi scale avec **AD** (Attack Damage, stat derrière les dégâts physiques) — chaque slam de Tentacule est un pourcentage de son AD. Aller Sunfire + Warmog's tue tes dégâts ; tu arrêtes de tuer les squishies et tu deviens un minion lent. Reste sur le core AD-bruiser.

## Conseil avancé

Travaille le **E animation cancel**. Test of Spirit a une cast animation longue (~0.5s) pendant laquelle Illaoi est bloquée — assez de temps pour qu'un ennemi attentif esquive le skillshot linéaire. La parade : commence le cast, marche 1-2 pas en avant pour bait le dodge dans une direction, puis cast dans la direction *opposée* à la dernière frame. Le même trick marche à l'envers : hover le curseur sur l'ennemi, fake le cast, et recast sur la trajectoire de dodge prédite de l'esprit. En partie réelle l'usage le plus impactant est l'all-in niveau 3 : E-fake, W sur l'esprit quand il commence à dodge, puis vrai E sur sa dash réactive. Entraîne-le en practice tool sur un target dummy jusqu'à ce que le rythme soit automatique.
