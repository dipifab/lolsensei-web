---
title: "Elise Jungle Build & Guide — Patch 16.9"
slug: "elise-jungle"
language: "fr"
patch: "16.9"
champion: "elise"
role: "jungle"
last_updated: "2026-05-02"
description: "Guide Elise jungle pour League of Legends Patch 16.9 : trajet de gank en Spider Form, setups de Cocoon, priorités d'items, matchups clés, power spikes et un conseil final."
quick_learn:
  champion_dd_id: "Elise"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Burst Mage / Diver"
  abilities:
    - key: "P"
      name: "Spider Queen"
      description: "Deux formes. Human : chaque ability qui touche stocke un Spiderling dormant. Spider : les AA infligent bonus magic damage et soignent Elise."
      dd_spell_id: "Elise_Passive"
    - key: "Q"
      name: "Neurotoxin / Venomous Bite"
      description: "Human : poke ciblé qui scale sur l'HP actuel de l'ennemi (anti-tank). Spider : bond qui scale sur HP manquant (exécute les low HP)."
      dd_spell_id: "EliseHumanQ"
    - key: "W"
      name: "Volatile Spiderling / Skittering Frenzy"
      description: "Human : envoie un Spiderling qui avance et explose près de l'ennemi (slow + dégâts AOE). Spider : Elise et ses pets gagnent attack speed pour DPS soutenu."
      dd_spell_id: "EliseHumanW"
    - key: "E"
      name: "Cocoon / Rappel"
      description: "Human : skillshot linéaire qui stun le premier ennemi touché. Spider : Rappel — Elise s'élève intargetable puis retombe sur une cible avec bonus damage et heal."
      dd_spell_id: "EliseHumanE"
    - key: "R"
      name: "Spider Form"
      description: "Toggle ultime entre Human (caster à distance, plus de portée) et Spider (skirmisher mêlée, plus de move speed et un essaim de Spiderlings). Free swap au cooldown."
      dd_spell_id: "EliseR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contre magic CC mono-cible (Ahri charm, Lissandra R, Twisted Fate stun) — le spell shield mange une ulti et sauve ta Rappel"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap quand 2+ ennemis prennent un item de Magic Resist ; remplace Rylai's ou Banshee's en late"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contre hard CC lourd (stuns, knock-ups) — boots swap qui ajoute tenacity (réduction de durée du CC)"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "contre comps à heal stack (Soraka, Vladimir, Dr. Mundo) ; sert aussi de Magic Penetration"
  base_combo: ["W", "E", "Q", "R", "Q", "AA"]
  win_condition: "Snowball avec ganks early via E cocoon stuns aux niveaux 3-6, puis pivote sur les dives d'objectif via Rappel quand Liandry's et Rylai's sont online. Pick les backliners squishy en mid game."
  weakness: "Décline en late game quand les frontlines empilent Magic Resist et HP. Pas de disengage fiable en Spider form : un cocoon raté pendant un dive finit en général en Elise morte."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination primary : Electrocute proc à chaque gank car W slow + E stun + Q burst sont trois ability hits distincts (trigger du keystone). Sudden Impact récompense le dash de Rappel, Treasure Hunter ajoute du gold sur takedowns, Ultimate Hunter coupe le cooldown de la R."
    secondary_rationale: "Sorcery secondary : Manaflow Band règle les soucis de mana early (cocoon coûte cher), Transcendence pousse l'Ability Haste au-delà du soft cap 40% et rend du cooldown sur takedowns."
    secondary_alternative: "Contre poke lourd ou counter-jungle (Lee Sin, Graves, Nidalee), swap Sorcery pour Resolve avec Bone Plating (8473, réduction de dégâts après 3 coups encaissés) et Revitalize (8453, amplificateur de heal et shield) pour plus de sustain early."
matchup_draft:
  pick_into:
    - examples: ["lux", "veigar", "karthus", "twisted-fate"]
      archetype: "Laners squishy sans dash ni stealth"
      reason: "Le E cocoon aux niveaux 3-4 atterrit sur des cibles plates sans escape. Rappel (Spider E) confirme le dive même s'ils Flash, parce que tu es intargetable mid-cast."
    - examples: ["master-yi", "kayn", "shyvana"]
      archetype: "Junglers avec une pre-level 6 form faible"
      reason: "Master Yi ne duel pas avant le 6, Kayn est form-locked tant que sa quest n'est pas finie, Shyvana n'a pas de CC fiable. Elise prend Scuttle Crab gratuit et les counter-jungle en déficit de gold."
    - examples: ["draven", "kalista", "samira"]
      archetype: "ADCs agressifs qui s'overextend pour des kills"
      reason: "Leur positionnement avancé t'offre des angles de cocoon. Un gank niveau 3 sur une lane poussée (wave shoved au-delà du river) ferme souvent la kill quand W slow + E stun chainent avec le CC du support."
  counterpicks:
    - examples: ["sejuani", "maokai", "rammus"]
      archetype: "Engagers tanky avec counter-engage hard CC"
      reason: "Leur CC AOE attrape Elise pendant la descente de Rappel ou après le commit du dive. À 2 items, ton magic burst arrête de les fondre et tu n'as pas de disengage en Spider form."
    - examples: ["lee-sin", "xin-zhao", "vi"]
      archetype: "Duellistes early-game forts avec gap-closer"
      reason: "Ils battent Elise en 1v1 niveau 3 si elle manque de mana de cocoon ou rate le timing de Rappel. Évite d'invade leur river : leurs dashs mangent ta seule escape."
    - examples: ["olaf", "garen"]
      archetype: "Divers immunisés au CC (cleanse passif ou ult immunity)"
      reason: "La R d'Olaf et la Q de Garen brisent les chaînes de stun et ignorent ton seul setup. Quand le cocoon n'atterrit plus, l'all-in d'Elise (commit total au trade) s'effondre et elle se fait duel à mort sans escape."
---

## Aperçu

> **Mini-glossaire (à lire une fois) :** **ADC** = Attack Damage Carry, le bot-laner qui inflige des dégâts physiques (Caitlyn, Jinx). **AP** = Ability Power, la stat qui scale les ability magiques. **MR** = Magic Resist, défense magique. **CS** = Creep Score, nombre de minions tués. **CC** = Crowd Control, tout effet qui arrête un champion (stun, slow, knock-up). **Gank** = jungler qui tend une embuscade en lane. **Dive** = aller sous tour pour tuer. **Trade** = bref échange de dégâts en lane. **All-in** = engagement total. **Snowball** = avantage qui croît tout seul (kills → gold → items → kills).

Elise est un burst-mage diver — un champion qui poke à distance puis commit totalement sur la backline ennemie pour fermer une kill. Son kit tourne autour de l'atterrissage du **Cocoon (E)** en Human form pour stun une cible, puis swap en **Spider Form (R)** pour un dive en **Rappel (E)** et de l'execute damage. Elle a la jungle pre-level-6 la plus forte du jeu : niveau 3 elle a déjà ses quatre ability de dégâts et bat presque tous les autres junglers en 1v1. Le prix : une complexité mécanique élevée (timing de form-swap, précision skillshot) et un late game pauvre quand les tanks empilent du Magic Resist.

Game plan : invade les camps du jungle ennemi niveau 3 si le matchup le permet, puis snowball (avantage qui grandit) en gank les lanes avec le plus de kill pressure (ADC squishy, mid laner low HP). Quand **Liandry's Torment** est online vers la minute 11-13, pivote du pathing axé gank vers le contrôle d'objectif — dive sous tour avec Rappel comme "blink" (téléport court instantané), pick les cibles prioritaires et force Drake ou Rift Herald.

## Build Recommandé

**Starting items :** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** (jungle starter ranged) + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**Core items (dans l'ordre) :**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade depuis Hailblade (s'auto-évolue vers la minute 3-4 quand il a mangé assez d'XP). Le companion pour les champions AP burst : ajoute un proc magic damage (effet déclenché) sur ta prochaine AA après un sort, ce qui s'aligne parfaitement avec **Spider Q** en skirmish.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — premier item complet. Ajoute un burn HP (dégâts étalés sur quelques secondes) sur chaque sort, stack avec **Rylai's** plus tard pour un single-target sustained damage imbattable.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plate pour que tes Q et E tapent plus fort sur les cibles squishy (champions à faibles défenses, ADC et mages).
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — chaque ability slow la cible. Énorme synergie avec **W** (déjà un slow) et les bonds de **Spider Q**.
5. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — survival item. L'active te rend intargetable 2.5 secondes après un dive en Rappel, le temps que ton équipe suive avant que tu te fasses tuer.
6. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicateur de scaling late game. À acheter en dernier pour passer 1000+ AP.

**Situational items :**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contre crowd control magique mono-cible (Ahri charm, Lissandra R, Twisted Fate stun).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — quand deux ennemis ou plus prennent un item de Magic Resist.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — boots swap quand l'équipe ennemie a du hard CC lourd (stuns, knock-ups).
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — contre comps à heal stack (Soraka, Vladimir, Dr. Mundo) ; sert aussi de Magic Penetration.

**Boots :** Sorcerer's Shoes par défaut. Passe sur Mercury's Treads si l'équipe ennemie a trois sources ou plus de hard CC.

**Skill order :** Max **Q** en premier (dégâts et execute), **E** en second (cooldown du cocoon — moins de cooldown = plus de stuns), **W** en dernier. Mets un point en **R** aux niveaux 6, 11, 16.

**Runes :** Primary **Domination** avec **Electrocute**, **Sudden Impact**, **Treasure Hunter**, **Ultimate Hunter**. Secondary **Sorcery** avec **Manaflow Band** et **Transcendence**.

## Matchups clés

- **Lee Sin :** Te duel mieux après le niveau 3 si tu greed sur les camps. Track son pathing — s'il est bot side, invade son red ou blue camp top side. Ne jamais face-check la fog (river bushes non wardés) quand il est missing.
- **Graves :** Perd contre Elise pre-6 car son E court (Quickdraw) ne peut pas escape ton cocoon, mais il scale plus fort. Dive sa lane en gank deux fois avant la minute 10 ou il atteindra deux items et te outscalera.
- **Master Yi :** Matchup gratuit early. Invade son deuxième camp (celui qu'il clear en troisième), kill, répète. Une fois Wit's End plus Botrk il gagne les 1v1, donc la win condition c'est terminer la partie avant la minute 25.
- **Sejuani / Maokai :** Hard counter-engage. Garde Rappel pour après qu'ils aient utilisé leur CC AOE, n'engage jamais en premier. En teamfight, flank la backline au lieu d'engage à travers le mur de tanks.
- **Olaf :** Sa R (Ragnarok) cleanse ton cocoon stun mid-flight. Attends qu'il l'utilise sur un dive, puis re-engage dans les 6 secondes suivantes pendant qu'elle est en cooldown.

## Power spikes & conditions de victoire

- **Niveau 3 :** Premier unlock de Spider form et kit complet. Tu as les meilleurs dégâts 1v1 de tous les junglers du jeu sur cette fenêtre — invade ou gank une lane overextended tout de suite.
- **Niveau 6 :** Free **R** swap à la demande. La gank pressure double car tu peux disengage à travers les murs en Spider form (ça donne un petit boost de movement speed).
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment terminé (~ minute 11-13) :** Premier gros spike de scaling. Les dives single-target tuent désormais les ADCs et les mages en deux rotations de sorts. Force Drake ou Rift Herald dès qu'il est terminé.
- **Deux items complétés + Boots (~ minute 16-18) :** Fenêtre de pic. Après ça tu commences à perdre en force relative quand les ennemis montent du Magic Resist ; ton job c'est de convertir ce lead en calls de Baron ou Elder Drake.

## Erreurs courantes

- **Lancer E cocoon comme un outil de poke.** Cocoon est ton seul setup — si tu le rates, pas de follow-up. Attends que la cible soit committed (low HP, Flash utilisé, slowed par ton **W**) avant de cast.
- **Dive en Spider form sans Flash ni R disponible.** Spider form n'a pas d'escape (pas de dash, pas de shield, pas d'intargetable). Si ta **R** est en cooldown, ne commit pas ; recule et attends les 3 secondes qu'elle revienne.
- **Max W en second au lieu de E.** W donne un peu plus de clear speed mais n'ajoute rien à la fiabilité du gank. Les rank-ups de E baissent directement le cooldown du cocoon et augmentent les dégâts de Rappel — c'est ton damage et ton CC.
- **Smite Scuttle Crab tôt au lieu de garder Smite pour les objectifs.** Garde Smite pour les contests Drake et Rift Herald. Les 70 gold et le buff de movement speed du Scuttle ne valent pas perdre un Drake contre un ennemi qui a Smite up.
- **Rester en mêlée en teamfight en Spider form quand tu es en avance.** Une fois la backline tuée, swap retour en Human form pour lancer cocoon et clean. Spider form a une portée d'auto-attack mêlée — y rester en Elise fed (snowballed) ne fait que rendre tes kills à l'ennemi.

## Conseil avancé

Utilise **Rappel (Spider E)** comme blink *défensif* autant qu'offensif. Quand un duelliste commit sur toi, cast Rappel sur un minion low HP ou un minion lointain de ta jungle : Elise devient intargetable pendant le lift (~2 secondes), assez pour esquiver une ulti type Lee Sin R ou Vi Q. Le cooldown est court (10 secondes au rank 5) — la perdre pour survivre sauve souvent plus de kills que ce que tu en mettrais en attaque.
