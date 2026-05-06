---
title: "Kassadin Mid Build & Guide — Patch 16.9"
slug: "kassadin-mid"
language: "fr"
patch: "16.9"
champion: "kassadin"
role: "mid"
last_updated: "2026-05-05"
description: "Guide Kassadin mid lane pour League of Legends Patch 16.9 : build de late-game scaler, matchups clés, power spikes, erreurs courantes et une astuce technique finale."
quick_learn:
  champion_dd_id: "Kassadin"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Assassin / Late-game Scaler"
  abilities:
    - key: "P"
      name: "Void Stone"
      description: "Passif : Kassadin subit moins de dégâts magiques et ignore la collision (il traverse minions et champions)."
      dd_spell_id: "Kassadin_Passive"
    - key: "Q"
      name: "Null Sphere"
      description: "Skillshot mono-cible : dégâts magiques + interrompt les canalisations. Donne à Kassadin un magic shield de 1.5s — anti-poke vs mages AP."
      dd_spell_id: "NullLance"
    - key: "W"
      name: "Nether Blade"
      description: "Passif : dégâts magiques bonus sur les autos. Actif : prochain auto amélioré qui rend du mana manquant (plus sur champions)."
      dd_spell_id: "NetherBlade"
    - key: "E"
      name: "Force Pulse"
      description: "Cône AOE avec slow + dégâts magiques. Se charge avec les sorts lancés à proximité (les vôtres ou ennemis). Charge requise : utilisez-le en finisher."
      dd_spell_id: "ForcePulse"
    - key: "R"
      name: "Riftwalk"
      description: "Blink court à cooldown bas. Chaque cast en quelques secondes double le coût en mana et ajoute des dégâts bonus, jusqu'à 4 stacks."
      dd_spell_id: "RiftWalk"
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
    - { dd_id: "6657", name: "Rod of Ages" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3135", name: "Void Staff" }
  situational_items:
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "vs comps que vous out-scalez post-11 : AP + ability haste + vitesse pour enchaîner Riftwalks sur la backline squishy"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs CC magique mono-cible (Ahri charm, Lissandra R, Twisted Fate stun) qui ferme votre fenêtre de Riftwalk"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "vs comps avec heal (Soraka mid, Vladimir, Dr. Mundo top) : applique Grievous Wounds, divise les soins par deux"
    - dd_id: "4645"
      name: "Shadowflame"
      against: "vs carries squishy avec boucliers (Riven, Yasuo passive) : burst extra pour finir avec R+Q+E"
  base_combo: ["R", "Q", "AA", "E"]
  win_condition: "Survivre à la lane jusqu'au niveau 11 avec un item complet, puis snowball (transformer les petites avances en grosses) : R sur les carries squishy, Q+AA+E pour les delete, R out avant le peel."
  weakness: "Lane phase brutale : peu de dégâts de base, range courte, pas de waveclear avant le 9. Mages burst et poke à distance vous shovent sous tour et chippent vos PV avant le scaling."
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
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
  primary_rationale: "Inspiration primary : First Strike récompense les fenêtres burst late-game avec gold et dégâts bonus sur le R-engage. Magical Footwear économise 350 gold, Biscuit Delivery comble le pool mana faible en lane, Cosmic Insight réduit les CD summoners pour plus de Flash en skirmish."
  secondary_rationale: "Sorcery secondary : Manaflow Band est obligatoire — sans elle, le spam de Q en lane vous vide avant le niveau 9. Transcendence pousse l'ability haste au-delà de 40 %, baissant le CD de Riftwalk pour enchaîner 3-4 R en teamfight au lieu de 2."
  secondary_alternative: "Si vous affrontez du poke mage qui vous nie tout farm pré-6 (Xerath, Vel'Koz), swap Sorcery vers Resolve avec Second Wind (regen PV passif vs poke) et Overgrowth (HP scaling) pour survivre assez longtemps et scaler."
matchup_draft:
  pick_into:
    - examples: ["veigar", "annie", "vladimir"]
      archetype: "Mages immobiles sans dash"
      reason: "Après le niveau 11, le CD de Riftwalk est de 2s : vous blinkez sur eux, Q sur le cast, E pour slow, AA-execute avant qu'ils ne placent leur burst combo complet."
    - examples: ["lux", "syndra"]
      archetype: "Mages skillshot setup sans escape"
      reason: "Leurs dégâts dépendent d'un setup longue portée (Q root, stack de stun) ; le R late de Kassadin esquive le skillshot mid-combo et ferme le gap avec un blink qu'ils ne peuvent pas punir."
    - examples: ["taliyah", "azir"]
      archetype: "Mages d'area-denial longue portée"
      reason: "Pré-6 ils vous bullient, mais post-11 le magic shield du Q + la mobilité du R neutralisent leurs outils de kiting. Quand la partie traîne, leur AOE est gâchée sur une cible insaisissable."
  counterpicks:
    - examples: ["xerath", "vel-koz", "zoe"]
      archetype: "Mages de poke longue portée"
      reason: "Ils pokent hors de la portée de votre Q (650) sur toute la fenêtre pré-6. Le magic shield du Q aide mais ne rend pas de PV — au niveau 6 vous êtes déjà à mi-barre et ne pouvez pas all-in."
    - examples: ["talon", "zed"]
      archetype: "Assassins AD early-game"
      reason: "Ils atteignent leur powerspike 2-items vers la minute 14 alors que Kassadin est encore au premier item. Les roams en side punissent son scaling lent : la partie finit avant que son late game arrive."
    - examples: ["pantheon", "yasuo"]
      archetype: "Lane bullies à pression all-in"
      reason: "Leur all-in niveau 2-3 (Pantheon Q+W stun, Yasuo Q-windwall-knockup) shred les PV de Kassadin avant qu'il n'ait Q max rank. Le magic shield du Q est inutile contre des dégâts physiques."
---

## Aperçu

Kassadin est un AP assassin (un mage qui ferme le gap et delete une seule cible au lieu de poker de loin) construit pour le late game. Son kit tourne autour de **Riftwalk (R)** : un blink court avec un cooldown très bas qui devient le meilleur outil de repositionnement du jeu une fois au rank 3 au niveau 16. Le prix à payer est une lane phase punitive : range courte (650 sur **Q**), pas de waveclear avant le 9, et des dégâts de base qui perdent tout all-in (échange total jusqu'à la kill) pré-6 contre la majorité des mid laners. La mid lane lui convient car la rivière est le chemin le plus court vers le scuttle et les side lanes une fois le **R** disponible — mais il faut d'abord survivre 11-13 minutes.

Le game plan est simple : ne pas feed pré-6, atteindre le niveau 11 avec un item complet, puis chasser les carries squishy. La skill expression réside dans la gestion du mana de **Riftwalk** (chaque cast en 7 secondes double le coût, donc 4 R en fight sans item à base de Tear est impossible) et dans le stack de ![Force Pulse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/ForcePulse.png) **Force Pulse (E)** avec vos sorts avant le début du fight.

## Build Recommandé

**Starting items :** Doran's Ring + 2 Health Potions. Le mana du Doran's compte plus que les PV du Doran's Shield : vous spammez **Q** en lane pour last-hit à distance quand vous le pouvez.

**Core items (dans l'ordre) :**

1. ![Rod of Ages](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6657.png) **Rod of Ages** — meilleur scaler mana + PV + AP du jeu pour Kassadin. Le passif Eternity, à partir de la minute 10, vous heal une bonne portion à chaque level-up et tient en lane phase. Premier item complété.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plate, les bottes presque toujours bonnes contre les cibles squishy mid/ADC.
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicateur AP de 35 %. Votre combo Q+E+AA double en dégâts avec ça.
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — armor + AP + active stasis. Permet de R sur la backline et stasis si le peel arrive, puis R out à la fin de la stasis.
5. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — magic penetration vs MR stack. Obligatoire dès qu'une cible prioritaire achète ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** ou ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** + un item MR.

**Situational items :**

- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — vs comps que vous out-scalez post-11. AP + ability haste + vitesse de déplacement : vous enchaînez Riftwalks plus vite et collez à la backline squishy une fois dedans.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — vs CC magique mono-cible qui ferme la fenêtre de votre **R** (Ahri charm, Lissandra R, Twisted Fate stun).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — vs comps avec heal lourd. Applique Grievous Wounds (un debuff qui divise les soins par deux) sur dégâts.
- ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — vs carries squishy qui achètent des boucliers. Le passif HP-threshold (un passif qui s'active quand la cible est sous ~35 % PV) s'aligne sur votre execute **R+Q+E**.

**Boots :** Sorcerer's Shoes par défaut. Switch sur ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** vs comps AP + CC lourd (2+ stuns / roots dans l'équipe ennemie).

**Skill order :** Maxez **Q** en premier (meilleurs dégâts et le shield mana-cheap), **E** en deuxième (la waveclear se débloque au niveau 9 avec E max), **W** en dernier. Un point dans **R** aux niveaux 6, 11, 16.

**Runes :** Primaire **Inspiration** avec **First Strike**, **Magical Footwear**, **Biscuit Delivery**, **Cosmic Insight**. Secondaire **Sorcery** avec **Manaflow Band** et **Transcendence**. Swap Sorcery vers **Resolve** (Second Wind + Overgrowth) sur les matchups de poke longue portée.

## Matchups clés

- **Xerath / Vel'Koz :** Leur range de Q dépasse la vôtre de 200+ unités. Last-hit uniquement avec **Q** au max range, mangez le poke, ne push jamais au-delà de la rivière. Utilisez le shield de ![Q (Null Sphere)](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/NullLance.png) **Null Sphere** une demi-seconde avant l'impact de leurs sorts — le magic shield bloque la majeure partie des dégâts.
- **Zed :** Évitez les all-ins pré-6. Une fois **R** débloquée, baitez sa marque de **R**, puis Riftwalk pour esquiver les dégâts snap-back. Achetez ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** en item 2 au lieu du Deathcap s'il est fed (4+ kills déjà).
- **Veigar :** Égalité pré-6, brutal post-11. Restez hors de la range de sa **E** cage jusqu'au niveau 11 ; une fois le R à 2s de CD, dive-le avec un Riftwalk latéral (la cage a des coins ouverts, pas des murs pleins).
- **Ahri :** Course à la priorité de roam. Push la wave quand elle est short en mana, suivez ses roams. Son Charm cancel votre **R** mid-blink — achetez ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** en 4ᵉ item si elle est la threat carry.
- **Yasuo :** Bully early très dur. Ne pas auto-attaquer dans la wave (sa **E** dash sur vos minions pour du poke gratuit). Restez en arrière, laissez-le push, freeze la wave près de votre tour avec des auto-attack pulls. Survivez au niveau 6 puis commencez à trade R+Q.

## Power spikes & conditions de victoire

- **Niveau 6 :** **Riftwalk** se débloque. Vous pouvez maintenant blinker au-dessus des murs — fuyez les ganks par le pit des Krugs, le mur des Raptors, la lèvre du pit du drake. Les dégâts du R rank 1 sont faibles, pas d'all-in encore.
- **![Rod of Ages](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6657.png) Rod of Ages complété (~ minute 12-14) :** Premier coussin PV/mana significatif. La lane phase devient survivable ; cherchez des trades courts quand le mid ennemi est en cooldown.
- **Niveau 11 :** Le second rank de **R** baisse le CD à 3.5 secondes. C'est ici que Kassadin est vraiment online — vous enchaînez 2 R et survivez, ou R-Q-E-AA-R out sur un squishy. Forcez les teamfights à partir d'ici.
- **Niveau 16 + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ minute 24-28) :** R à 2s de CD, AP scaling par-dessus. Vous one-shot tout squishy sans MR et enchaînez 3-4 R en un seul fight. Forcez les fights baron et elder dragon — le late-game Kassadin les gagne.

## Erreurs courantes

- **Essayer de gagner la lane.** Kassadin est le pire laner early du mid by design. Si vous tentez des all-ins niveau 3, vous mourez, prenez du retard et n'atteignez jamais votre spike. Last-hit, mangez le poke, atteignez le niveau 11 vivant — c'est ça la win condition.
- **Spammer Riftwalk en skirmish.** Chaque cast en 7 secondes double le coût en mana. 4 R d'affilée brûlent 600+ mana — vous finirez le fight sans Q ni E. Surveillez votre barre de mana avant le 3ᵉ R.
- **Garder le E pour le cône parfait.** ![Force Pulse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/ForcePulse.png) **Force Pulse** se charge avec les sorts lancés à proximité (les vôtres et les ennemis comptent). Lancez Q sur une wave une fois avant le fight pour stack E à ready, puis engagez. Entrer en fight sans E chargé, c'est gâcher le finisher de slow.
- **R-engage sans plan de sortie.** Riftwalk est à courte portée (500). Si vous blinkez sur l'ADC backline et que votre équipe ne suit pas, le peel vous mange avant que le R ne refresh. Cherchez toujours la direction du second R (où R out ?) avant le premier.
- **Acheter Deathcap avant Rod of Ages.** Le Deathcap coûte 3600 gold sans PV ni mana — l'acheter en premier signifie mourir dans tout teamfight avant que l'AP ne compte. Rod of Ages (3700g, +400 PV, +400 mana) est l'item de survie qui rend le Deathcap utilisable.

## Conseil avancé

Utilisez **Q** comme buffer de magic shield avant les wind-ups ennemis, pas seulement pour le poke. Le magic shield de 1.5 seconde de Null Sphere absorbe une portion fixe de dégâts magiques — castez-le dans la demi-seconde avant qu'un **W** de Veigar, un **R** de Lissandra ou un **R+Tibbers** d'Annie n'atterrisse, et vous niez l'essentiel de leur burst. Entraînez le timing en Practice Tool contre un Veigar bot : le shield doit être actif **au moment où le sort touche**, pas avant le cast. Cette seule technique sépare les Kassadin qui perdent leur lane 0/3 de ceux qui la perdent 0/0 et scalent.
