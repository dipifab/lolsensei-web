---
title: "Corki Bot Build & Guide — Patch 16.9"
slug: "corki-bot"
language: "fr"
patch: "16.9"
champion: "corki"
role: "bot"
last_updated: "2026-05-02"
description: "Guide complet Corki bot lane pour League of Legends Patch 16.9 : build ADC hybride, runes, matchups 2v2 clés, power spikes, erreurs courantes, astuce avancée."
quick_learn:
  champion_dd_id: "Corki"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hybrid"
  abilities:
    - key: "P"
      name: "Hextech Munitions"
      description: "Une partie des dégâts d'auto-attaque devient des true damage. DPS constant qui ignore armor et magic resist — la raison de stacker attack speed et items on-hit."
      dd_spell_id: "Corki_Passive"
    - key: "Q"
      name: "Phosphorus Bomb"
      description: "Bombe de zone ciblée qui inflige des dégâts magiques et révèle brièvement les ennemis. Sert au last-hit quand tu es zoné, au check des bushes et à ouvrir chaque trade."
      dd_spell_id: "PhosphorusBomb"
    - key: "W"
      name: "Valkyrie"
      description: "Court dash laissant une traînée de feu. Ta seule mobilité : sert à fuir, gap-close ou dodge un skillshot. Long cooldown — ne le gaspille pas en waveclear."
      dd_spell_id: "CarpetBomb"
    - key: "E"
      name: "Gatling Gun"
      description: "Cône channelé devant Corki : inflige des dégâts et réduit armor et magic resist des ennemis touchés. Ajoute du DPS soutenu et ramollit les tanks pour les missiles de R."
      dd_spell_id: "GGun"
    - key: "R"
      name: "Missile Barrage"
      description: "Missile longue portée qui explose à l'impact. Tu accumules jusqu'à 7 charges ; un sur trois est une Big One avec burst en plus. Ton poke principal et ton execute."
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
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "3046", name: "Phantom Dancer" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contre une frontline avec 2+ tanks (Sion, Ornn, Maokai) : grosse armor pen pour que le DPS soutenu continue de couper"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contre les comps qui empilent les soins (Soraka, Aatrox, Vladimir, Dr. Mundo) : grievous wounds qui coupent le heal de moitié"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contre du gros burst AP (Brand support, Veigar, Syndra mid) : le bouclier magique encaisse une full combo et te laisse W out"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "contre les ults single-target qui te lock (Malzahar R, Skarner R, Mordekaiser R) : l'active cleanse la suppression"
  base_combo: ["Q", "AA", "R", "AA", "E"]
  win_condition: "Survis au 2v2 jusqu'à deux items avec poke R et sustain de Q, puis carry les teamfights late avec autos Manamune-stacked et Big Ones de R depuis la backline."
  weakness: "Squishy avec un seul dash. Lanes early agressives (Draven, Lucian + engage support) le shove off CS avant Trinity, et les anti-projectiles (Yasuo Wind Wall, Braum E) annulent le poke."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8021
      name: "Fleet Footwork"
      icon_path: "perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision primaire : Fleet Footwork proc sur les autos (que Corki spamme grâce au true damage du passive) et donne heal plus burst de mouvement — la sustain en lane indispensable au 2v2 long. Triumph et Coup de Grace finissent les kills, Legend: Alacrity ajoute de l'attack speed."
    secondary_rationale: "Inspiration secondaire : Magical Footwear retarde l'achat des bottes mais offre des stats ailleurs avant ; Cosmic Insight réduit le cooldown des summoner spells (Flash et Heal plus fréquents), le levier de survie le plus gros en 2v2 bot."
    secondary_alternative: "Contre une lane de gros poke (Caitlyn + Lux, Ezreal + Karma) où tu ne peux pas te permettre le délai de bottes de Magical Footwear, swap Inspiration pour Sorcery avec Manaflow Band (mana sur le spam de R) et Gathering Storm (AP late gratuit)."
matchup_draft:
  pick_into:
    - examples: ["jinx", "twitch", "kog-maw"]
      archetype: "Hypercarrys courte portée sans escape"
      reason: "Corki les out-range pré-Trinity avec son poke R à 1225 unités et un W qu'ils n'ont pas. Ils doivent rester en portée de last-hit, et Corki les saigne avant leur power spike d'hyper-carry."
    - examples: ["senna", "ezreal"]
      archetype: "ADCs de poke statique"
      reason: "Portée égale, mais Corki a un dash plus une Q de zone instantanée tandis que Senna et Ezreal pokent avec un seul projectile. Il peut W sur un minion qui a mangé une Q et trade back sans cramer ses cooldowns."
    - examples: ["sivir", "ashe"]
      archetype: "ADCs sans escape point-and-click"
      reason: "Le Spell Shield de Sivir ne bloque qu'une ability — il mange Q et le missile suivant rentre gratuit. Ashe n'a pas de dash. Corki snowball le matchup avec un repositioning W auquel ils ne peuvent pas répondre."
  counterpicks:
    - examples: ["draven", "samira"]
      archetype: "ADCs de lethality-burst early-game"
      reason: "Ils out-trade Corki sur les 6 premiers niveaux et snowball sur les kills de lane. Corki ne peut pas les duel pré-Trinity, et chaque W agressive est punie par leurs patterns de dash-reset."
    - examples: ["lucian", "tristana"]
      archetype: "Lanes multi-dash avec auto-trade"
      reason: "Le E de Lucian et le W de Tristana entrent et sortent de la portée auto de Corki librement. Lucian out-scale aussi le true damage du passive avec sa chaîne auto-Q en early, le battant à plat avant les items."
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall projectile blockers (off-meta bot)"
      reason: "Wind Wall mange la Q et tout le barrage R. Même quand ces champs sont off-meta en bot, le matchup est rude parce que deux tiers des dégâts de Corki dans un trade disparaissent."
---

## Aperçu

Corki bot est un marksman hybride (carry à distance qui mélange dégâts physiques et magiques) qui joue la lane comme un mage-carry : il chip les HP adverses de loin ("poke") avec **Missile Barrage (R)** à 1225 unités, last-hit les minions et harcèle (petits dégâts répétés) avec **Phosphorus Bomb (Q)**, et une fois **Trinity Force** plus **Manamune** complets (fully built) il carry les teamfights late avec des auto-attaques qui infligent une partie en true damage (dégâts qui ignorent armor et magic resist) grâce à **Hextech Munitions (P)**. Le rôle lui va bien parce qu'un support peut lui acheter le temps early dont il a besoin pour scale (gagner en puissance au fil des items) et peel les divers (protéger le carry des champions qui plongent sur lui) pendant qu'il garde son unique dash, **Valkyrie (W)**, pour les vraies opportunités.

Plan de partie en une phrase : trade (échanges courts de dégâts) avec R + Q à portée max pour grignoter le 2v2 adverse, jamais cramer W sans follow-up planifié, et atteindre un late game où les autos boostés par Manamune plus les Big Ones de R (un missile de R sur trois est plus puissant) one-shot (tuer en une combo) les squishys de la backline (les carrys adverses qui restent à l'arrière du fight).

## Build Recommandé

**Items de départ :** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. La blade donne du lifesteal (une partie des dégâts infligés te soigne) qui s'allie avec le passive on-hit et tient mieux les trades early Q + auto que Doran's Ring pour un ADC.

**Items core (dans l'ordre d'achat) :**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — Sheen (un composant de Trinity) proc (déclenche un effet de dégâts bonus) sur chaque Q et chaque missile de R, plus AD, attack speed, ability haste (réduction de cooldown) et movement speed. Le plus gros power spike du champion.
2. ![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) **Manamune** — Manamune se transforme lentement en une version plus forte appelée Muramana à mesure que tu dépenses du mana ; une fois "stacked" (entièrement transformé) il ajoute des dégâts bonus sur chaque auto et chaque ability qui coûte du mana, missiles de R compris.
3. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed plate qui se cumule avec Trinity et le true damage on-hit du passive. Bottes par défaut sur Corki bot.
4. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — ta première auto sur un ennemi ("auto energized") inflige des dégâts bonus et porte plus loin que ta portée normale. Le crit chance s'aligne avec le profil stat de Trinity.
5. ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — attack speed plus crit (chance que les autos infligent des dégâts bonus) pour du DPS soutenu via **Gatling Gun (E)** et le true damage on-hit du passive.

**Items situationnels :**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contre une frontline avec 2+ tanks (Sion, Ornn, Maokai) : grosse armor pen pour que le DPS soutenu continue de couper.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contre les comps qui empilent les soins (Soraka, Aatrox, Vladimir) : applique grievous wounds et coupe le heal de moitié.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contre du gros burst AP (Brand support, Syndra mid) : le bouclier magique encaisse une full combo et te laisse W out.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — contre les ults single-target qui te lock (Malzahar R, Skarner R, Mordekaiser R) : l'active cleanse la suppression qui te delete sinon.

**Bottes :** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** par défaut. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** si l'équipe adverse a 3+ menaces AD qui te ciblent en fight.

**Skill order :** Maxe **Q** en premier (poke, waveclear, dégâts magiques), **E** en second (DPS plus shred d'armor et magic resist), **W** en dernier (utility). Mets un point dans **R** aux niveaux 6, 11 et 16.

**Runes :** Primaire **Precision** avec **Fleet Footwork**, **Triumph**, **Legend: Alacrity** et **Coup de Grace**. Secondaire **Inspiration** avec **Magical Footwear** et **Cosmic Insight**, ou **Sorcery** avec **Manaflow Band** et **Gathering Storm** contre les lanes de gros poke.

## Matchups clés

- **Caitlyn :** Elle t'out-range. Reste derrière les minions pour annuler ses setups de pièges, dodge sa Q linéaire en side-stepping (latéralement) sur le cast indicator (la ligne visuelle au sol quand elle cast), et n'approche jamais d'un mur où sa Q ricochet (rebondit et touche une seconde fois) pour des dégâts bonus. Garde W pour fuir son R d'execute quand tu es low.
- **Draven :** Early le plus dur. Il out-trade en niveaux 1-5 et snowball (l'avance early grandit) sur les kills de lane. Concède du CS (last-hits = creep score = gold) pour rester en vie, ping les fenêtres de gank quand ses Spinning Axes tombent, et ne trade jamais dans une hache en vol.
- **Lucian :** Il veut t'entrer dessus avec son E (dash). Q-le quand il s'engage dans le dash, le slow plus le CC (crowd control = stuns, slows, roots) du support retournent le trade. Ne jamais auto-trade au corps à corps ; le double-shot du passive burst au-delà de l'avantage du true damage.
- **Jhin + Lulu / Senna + Tahm :** Lanes de disengage à longue portée (compositions conçues pour casser ton engage avec boucliers et CC). Tu dois gagner l'all-in au level 6 ou stall jusqu'à ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force**. Push la wave avec Q + autos et cherche un setup de gank R + W avec ton jungler.
- **Samira :** Oppresseur d'all-in au level 6 (son ult force un fight d'où tu ne peux pas te retirer). Achète ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** si son R touche une fois ton équipe — le cleanse actif (retire un debuff) brise sa chaîne. Pré-6 tu peux la matcher en trade ; post-6, disengage avec W jusqu'à ce que tes Big Ones de R dépassent son ramp de dégâts.

## Power spikes & conditions de victoire

- **Niveau 2 :** Avec Q + W ou Q + E, tu peux punir un mauvais positionnement adverse avec un trade Q-AA-AA ("AA" = auto-attaque de base) et un follow-up W si le support adverse s'est avancé.
- **Niveau 6 :** Le premier **Missile Barrage (R)** débloque l'all-in (un fight engagé à fond, sans retraite). Avec des stocks de R plus Trinity Force qui arrive, une combo Q-AA-R-R-R plus le CC du support tue la majorité des ADCs à low HP.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force terminé (~ minute 13-15) :** Sheen proc sur chaque Q et chaque missile de R, transformant le poke en kill threat. C'est le moment de all-in ou de prendre un Drake fight si la vision (wards qui révèlent la map) est propre.
- **![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) Manamune stacked (~ minute 18-22) :** Muramana ajoute des dégâts bonus sur chaque action qui coûte du mana ; les dégâts en teamfight doublent à peu près par rapport au pré-stack. Force des fights d'objectif (Drake, Baron) ici.

## Erreurs courantes

- **Spammer R off cooldown pour le waveclear.** Les missiles de R sont un stock fini ; si tu les vides sur les minions, le prochain teamfight tu n'as plus de burst au pire moment. Push avec Q + autos ; garde 4+ missiles pour les objectifs.
- **Utiliser W agressivement sans follow-up.** W est ta seule fuite. Dash dedans pour finir un kill qui demandait un auto de plus, c'est comme ça que Corki meurt — si tu ne peux pas tuer avec ton mana et tes cooldowns restants, ne commit pas (n'engage pas à fond).
- **Auto-trade au corps à corps sans follow-up du support.** Le true damage du passive de près est tentant, mais la pool HP de Corki est squishy (faible et fragile). Reste à portée de R quand le support adverse a son hard CC up.
- **Rusher ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge en 2e item.** Infinity Edge a besoin d'un crit chance élevé pour fonctionner, et les trois premiers items de Corki (Trinity, Manamune, Berserker's) en donnent très peu. Garde l'ordre Trinity → Manamune → Rapid Firecannon → Phantom Dancer ; Infinity Edge en 5e ou 6e item seulement.
- **Recall avec des stocks de R pleins.** Les stocks reset à la mort mais persistent au recall — décharge les missiles restants sur une wave ou une tour avant de back plutôt que les laisser inutilisés.

## Conseil avancé

Track et exploite le rythme de la **Big One**. Un missile de R sur trois (la "Big One") inflige bien plus de dégâts que les deux autres. Avant un teamfight, compte les missiles que tu as en stock — si le suivant est une Big One, garde-la pour la cible prioritaire ; si tu viens de la cramer, tire les deux missiles fillers sur la wave ou une tour pour que la Big One recharge prête pour l'engage. Ceux qui tirent R à l'aveugle gaspillent les Big Ones sur les minions ; ceux qui suivent le compte one-shot les squishys (carrys low HP) au moment décisif.
