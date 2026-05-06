---
title: "Gragas Jungle Build & Guide — Patch 16.9"
slug: "gragas-jungle"
language: "fr"
patch: "16.9"
champion: "gragas"
role: "jungle"
last_updated: "2026-05-02"
description: "Guide Gragas jungle pour League of Legends Patch 16.9 : clear path, routes de gank, build AP bruiser, matchups clés, power spikes, erreurs courantes et un conseil final."
quick_learn:
  champion_dd_id: "Gragas"
  difficulty: 2
  damage_type: "magic"
  champion_class: "AP Bruiser / Engage"
  abilities:
    - key: "P"
      name: "Happy Hour"
      description: "Lancer n'importe quelle compétence soigne Gragas d'une petite quantité (cooldown interne de 5 secondes). Lui assure le sustain pendant le clear de jungle sans devoir back tôt."
      dd_spell_id: "Gragas_Passive"
    - key: "Q"
      name: "Barrel Roll"
      description: "Roule un tonneau jusqu'à un point. Recast pour détoner, sinon explose seul après 4 secondes. Dégâts et slow scalent avec la charge — attends le pic avant de détoner."
      dd_spell_id: "GragasQ"
    - key: "W"
      name: "Drunken Rage"
      description: "Channel d'1 seconde qui donne 30% damage reduction pendant 3 secondes et booste la prochaine auto-attaque de dégâts magiques bonus. À lancer avant E pour absorber l'aggro du camp."
      dd_spell_id: "GragasW"
    - key: "E"
      name: "Body Slam"
      description: "Dash qui s'arrête sur le premier ennemi touché, inflige des dégâts AOE et le stun 1 seconde. C'est ton seul gap-close, ton seul hard CC et ton outil principal d'engage."
      dd_spell_id: "GragasE"
    - key: "R"
      name: "Explosive Cask"
      description: "Lance un tonneau qui repousse les ennemis loin du centre d'impact. Sert à peel les alliés, pickoff les cibles isolées, ou flip un carry dans la frontline de ton équipe."
      dd_spell_id: "GragasR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "W" }
    - { level: 15, key: "W" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4629", name: "Cosmic Drive" }
    - { dd_id: "6653", name: "Liandry's Torment" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contre assassins ou dive comps (Zed, Talon, Kha'Zix) : la stasis après ton R laisse à ton équipe le temps de cleaner"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contre CC magique single-target (Ahri charm, Lissandra R, Morgana Q) : le spell shield mange le lockdown qui annule ton R"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contre équipes avec 3+ hard CC (Leona, Sejuani, Lissandra) : la tenacity réduit les stuns et protège le W"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "contre Magic Resist empilée ou comps de soin (Soraka, Vladimir, Dr. Mundo) : magic pen plus zone healing-reduction au cast R"
    - dd_id: "3089"
      name: "Rabadon's Deathcap"
      against: "en partie snowballée avec 3+ items d'avance pour one-shot les squishys au combo Q-E plutôt qu'engage"
  base_combo: ["W", "E", "Q", "AA", "R"]
  win_condition: "Utilise R pour flip les carrys ennemis (ADC, mid mage) dans la frontline de ton équipe sur les fights d'objectif ; W avant E pour absorber les dégâts entrants, puis Q dans la mêlée pour amplifier l'AP burn de Riftmaker."
  weakness: "E est ton seul gap-close et ton seul stun. Si tu le rates ou le brûles sur un camp juste avant un invade, tu te retrouves sans engage ni escape pendant 12+ secondes."
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
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8275, name: "Nimbus Cloak", icon_path: "perk-images/Styles/Sorcery/NimbusCloak/6361.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primaire au lieu des arbres de dégâts : Gragas dive pour engage et doit survivre à la chaîne de CC qui lui tombe dessus. Aftershock proc quand Body Slam stun, donnant des résistances sous pression. Font of Life, Conditioning, Revitalize gardent Gragas tanky en late."
    secondary_rationale: "Sorcery secondaire : Nimbus Cloak donne un burst de Movement Speed après Smite ou Flash pour enchaîner Body Slam depuis des angles tordus, et Transcendence apporte de l'Ability Haste plus un reset d'auto-attack on takedown qui colle aux skirmishes prolongés de Gragas."
    secondary_alternative: "Si l'équipe adverse a 4+ menaces AD (Zed mid, Tryndamere top, Vayne bot), swap Sorcery pour Precision avec Triumph (heal sur takedown) et Legend: Tenacity (tenacity bonus qui stack avec Mercury's Treads)."
matchup_draft:
  pick_into:
    - examples: ["master-yi", "kindred", "graves"]
      archetype: "Carrys jungle squishy sans hard CC"
      reason: "Le stun de Body Slam casse leur pattern de kite : Master Yi ne peut pas sortir avec Alpha Strike, Kindred ne peut pas danser le reset d'auto-attack, Graves ne peut pas se reposition. R les éjecte ensuite du carry de ton équipe sur l'engage de follow-up."
    - examples: ["karthus", "amumu", "warwick"]
      archetype: "Junglers à ult de channel long"
      reason: "Explosive Cask interrompt le R de Karthus, d'Amumu et de Warwick. Un seul knockback en mid-fight annule complètement leur payload de teamfight, et Gragas a juste à placer le centre du tonneau près de la cible qui channel."
    - examples: ["fiddlesticks", "shaco"]
      archetype: "Gankers basés sur le stealth"
      reason: "Le damage reduction de W absorbe leur burst d'ouverture (fear+drain de Fiddlesticks, backstab de Shaco) pendant que Body Slam les stun en plein cast. Leur engage exige un cast time non contesté — Gragas leur retire ça."
  counterpicks:
    - examples: ["lee-sin", "viego", "vi"]
      archetype: "Skirmishers mobiles avec plusieurs gap-closers"
      reason: "Ils couvrent la distance plus vite que le seul Body Slam de Gragas et lancent le fight avant que tu ne fasses W puis E. En plus, Viego possédant ton frontliner en mid-fight transforme ton engage en 1v2."
    - examples: ["kayn"]
      archetype: "Bruisers anti-tank à true damage"
      reason: "Kayn (Rhaast) inflige des true damage en pourcentage HP max qui ignorent les résistances de Gragas et le damage reduction du W. Un Gragas tank en late perd le 1v1 en rivière même avec full résistances."
    - examples: ["nidalee", "elise"]
      archetype: "Junglers de poke à longue portée"
      reason: "Les javelots de Nidalee et la spider-form d'Elise rongent Gragas hors de portée de Body Slam. Il n'a aucun moyen de réduire la distance sans cramer E — une fois dépensé, les deux junglers walk away du trade."
---

## Aperçu

Gragas est un jungler AP bruiser tanky (un fighter qui build AP pour les dégâts mais avec assez de HP et de résistances pour tenir en première ligne) dont tout le plan de partie tourne autour d'une grande action : balancer un carry adverse (le champion à gros dégâts autour duquel l'équipe ennemie joue) dans ton équipe avec **Explosive Cask (R)**. Son **Body Slam (E)** est le seul gap-close (compétence pour réduire la distance rapidement) et le seul hard CC, donc le bon Gragas est patient — clear les camps, garde **E** pour le gank ou l'engage, puis commit à fond seulement quand **R** est up. Il a du sustain naturel (régen passive de HP en fight) grâce à **Happy Hour (P)** qui lui permet de clear sans back, et **Drunken Rage (W)** lui offre une fenêtre de 30% damage reduction qui absorbe le premier gros morceau de dégâts dans tout skirmish court.

Ta condition de victoire, c'est le premier pickoff au level 6 — sortir un ennemi isolé de sa position avec **R** pour un kill gratuit. À partir de là, l'équipe joue autour du prochain cooldown de **R** : marche sur le jungler adverse quand il est dans ta rivière, ou pose un fight sur un Drake (monstre neutre qui donne à l'équipe un buff permanent) où un seul flip de **R** kill l'ADC adverse (le marksman de bot lane, le main damage dealer en late) avant même que le fight ne commence. Si **R** n'est pas prête, ne lance pas de fight — tu es un enabler (un champion qui crée les fights pour l'équipe), pas un duelliste 1v1.

## Build Recommandé

**Items de départ :** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Starter ranged-Smite standard — les auto-attacks de Gragas comptent comme ranged pour le choix du starter.

**Items core (dans l'ordre) :**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade depuis Hailblade (auto-évolue vers la minute 3-4 dès que tu as accumulé assez d'XP). Le pet companion AP-burst : chaque auto-attack post-cast ajoute des dégâts magiques bonus et un slow qui stack avec **Q**.
2. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — item d'AP burn soutenu. Donne de l'omnivamp (life-steal qui marche sur tous les types de dégâts, pas juste les auto-attacks) et ramp en dégâts sur les fights longs, parfait pour les engages prolongés de Gragas.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plat. Prends ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** à la place si l'équipe adverse a 3+ hard CC.
4. ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — Ability Haste plus Movement Speed après avoir touché un champion. La mobilité te permet de te reposition autour du fight pour caler un deuxième stun **E** dès que le cooldown revient.
5. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — Ability Haste plus un burn magique en pourcentage de HP max qui ramp avec la durée du fight. Punit les frontliners ennemis tanky (Sejuani, Ornn) là où l'AP plat commence à perdre en efficacité.

**Items situationnels :**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contre les assassins ou les dive comps. Active l'actif juste après **R** pour survivre au follow-up burst.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contre les CC magiques single-target (Ahri charm, Lissandra **R**). Le spell shield mange l'ability de lockdown qui annulerait ton **R**.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — contre les comps qui empilent les soins (Soraka, Vladimir, Dr. Mundo). L'actif R pose une zone de healing-reduction qui s'aligne avec ton knockback.
- ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — uniquement quand tu as 3+ items d'avance et que tu veux passer du rôle d'engage à celui de one-shot.

**Bottes :** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** par défaut. Swap pour ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contre crowd control (CC) lourd, ou ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** quand 4+ ennemis font des dégâts physiques.

**Skill order :** Maxe **E** en premier (ton stun et ton dégât principal), **Q** en deuxième (waveclear et poke à distance), **W** en dernier. Mets un point dans **R** aux niveaux 6, 11, 16.

**Runes :** Arbre primaire **Resolve** avec **Aftershock**, **Font of Life**, **Conditioning**, **Revitalize**. Secondaire **Sorcery** avec **Nimbus Cloak** et **Transcendence**. Stat shards : Ability Haste, Adaptive Force, Health Scaling.

## Matchups clés

- **Lee Sin / Viego :** Skirmishers mobiles (junglers conçus pour les fights courts et répétés) qui te battent en fight pré-6. Ne conteste pas le premier Scuttle Crab (le crabe de rivière qui donne de la vision et un buff de Movement Speed à celui qui le tue) ; clear les camps full et cherche à scale (monter en puissance avec items et niveaux) jusqu'à **R** au level 6, où un bon flip de cask égalise le matchup instantanément.
- **Master Yi / Kindred :** Carrys jungle squishy (peu de HP, pas de résistances). Track leur pathing sur la minimap ; si Yi est bot side et toi top, descend HP plein et cherche un gank mid level 6 — ton stun **E** coupe le reset cycle de l'Alpha Strike (dash untargettable).
- **Karthus :** Il scale en menace de teamfight ult. Ton job, c'est d'interrompre son channel avec **R** — track son spawn level 6 et ping mid que tu cancel l'ult à chaque fois qu'elle est up.
- **Sejuani / Amumu :** Tanks front-to-back. N'essaie pas de les out-engage en solo ; laisse-les commit en premier, puis **R** leur carry hors du mur qu'ils créent. Ton stun **E** chain avec leur CC pour un kill garanti sur celui qu'ils ont bloqué.
- **Nidalee :** Le poke longue portée (chip damage hors de portée de l'ennemi) punit ton wind-up d'engage. Achète ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** tôt ; passe par le fog of war (les zones grises non révélées de la map) dans ta jungle et ne face-tank jamais ses javelots dans la rivière de lane en gankant.

## Power spikes & conditions de victoire

- **Niveau 3 (E débloqué) :** Première fenêtre de gank. Marche dans une lane où l'ennemi a **Flash** down, **W** avant d'entrer en vision, puis **E** à travers un mur pour le stun surprise. Set up ton laner pour le follow-up.
- **Niveau 6 (première Explosive Cask) :** Power spike. Avec un seul **R** tu peux balancer un laner adverse over-extended dans ta tour ou dans le gank de ton jungler. Force un bon fight avant de back.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker terminé (~ minute 13-15) :** Premier gros spike de fight. AP burn soutenu plus omnivamp signifie que tu peux trade long en skirmish ; force un fight de Drake ici.
- **3 items + bottes (~ minute 25-28) :** Pic de teamfight. Aftershock plus ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** plus ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** plus ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** font de toi l'engager le plus fiable de la map. Group avec l'équipe et cherche les fights d'objectif.

## Erreurs courantes

- **Utiliser E pour clear un camp pendant qu'un invade arrive.** **E** a 14 secondes de cooldown au rang 1. Si tu Body Slam un Krug et que le jungler adverse rentre 3 secondes plus tard, tu n'as ni escape ni stun. Garde **E** quand la minimap montre le jungler adverse près de la frontière de ta jungle.
- **Lancer R en dégâts d'ouverture.** **R** est un knockback, pas un sort de dégâts. Si tu le lances sans plan de placement, tu disperses l'équipe adverse loin de ton follow-up. Visualise toujours où le carry ennemi va atterrir avant de presser **R** — balance-le dans ton équipe, pas loin.
- **Maxer W au lieu de E.** **W** ne donne à Gragas ni son stun, ni son gap-close, ni sa clear speed — **E** fait les trois. Maxe **E** en premier, à chaque partie.
- **Gank avant le niveau 3.** Sans **E**, Gragas n'a aucun moyen de catch une cible qui ne tower-dive pas déjà. Saute les ganks pré-3 ; clear avec un tempo deux camps et gank avec le combo **W-E** au level 3.
- **Duel solo Kayn après sa transformation.** Kayn-Rhaast inflige des true damage qui ignorent tes stats tank. Évite les 1v1 dans sa jungle en late game ; group avec l'équipe pour les objectifs à la place.

## Conseil avancé

Entraîne le combo **R-Flash** : lance **R** aux pieds du carry adverse, puis **Flash** en plein cast pour repositionner le point d'impact du tonneau juste à côté de ton équipe. Le tonneau détone toujours depuis la position post-Flash, donc un carry posé à distance safe se retrouve balancé dans la frontline de ton équipe avant qu'il réalise que l'angle a changé. C'est la mécanique la plus rentable de Gragas en solo queue patché et elle vaut 30 minutes de practice tool avant de la tenter en ranked.
