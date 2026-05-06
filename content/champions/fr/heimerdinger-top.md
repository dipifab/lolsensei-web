---
title: "Heimerdinger Top Build & Guide — Patch 16.9"
slug: "heimerdinger-top"
language: "fr"
patch: "16.9"
champion: "heimerdinger"
role: "top"
last_updated: "2026-05-02"
description: "Guide Heimerdinger top lane Patch 16.9 : build mur de tourelles, combos UPGRADE, power spikes contre juggernauts melee et win conditions en splitpush."
quick_learn:
  champion_dd_id: "Heimerdinger"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Artillery"
  abilities:
    - key: "P"
      name: "Hextech Affinity"
      description: "Gagne de la vitesse de déplacement bonus près des tours alliées ou des tourelles déployées par Heimerdinger. Récompense passive pour rester dans le turret nest."
      dd_spell_id: "Heimerdinger_Passive"
    - key: "Q"
      name: "H-28 G Evolution Turret"
      description: "Déploie une tourelle (max 3 actives). Les tourelles chargent et tirent un rayon plus puissant à charge max. Les charges se reset à chaque cast de Q. Portée 350, cooldown 1s, 20 mana."
      dd_spell_id: "HeimerdingerQ"
    - key: "W"
      name: "Hextech Micro-Rockets"
      description: "Salve longue portée (1325) de roquettes qui convergent vers le curseur. Les hits supplémentaires font moins de dégâts. Chaque roquette qui touche un champion donne 20% de charge aux tourelles proches."
      dd_spell_id: "HeimerdingerW"
    - key: "E"
      name: "CH-2 Electron Storm Grenade"
      description: "Lance une grenade (970) qui ralentit dans la zone et stun au centre. Toucher une tourelle la charge à fond. Cooldown fixe 11s, 85 mana."
      dd_spell_id: "HeimerdingerE"
    - key: "R"
      name: "UPGRADE!!!"
      description: "Améliore le prochain sort non-ult. R+Q : méga-tourelle (8s, immune au CC, splash AOE + slow). R+W : 4 vagues de roquettes. R+E : zone de stun élargie + knockup central. Cooldown 100-70s."
      dd_spell_id: "HeimerdingerR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
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
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4629", name: "Cosmic Drive" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contre divers et bruisers qui percent le turret nest (Irelia, Camille, Fiora)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contre tops à sustain (passive Darius, Nasus, Dr. Mundo) — coupe la regen HP"
    - dd_id: "3118"
      name: "Malignance"
      against: "contre comps tanky où la méga-tourelle R+Q est essentielle — réduit le cooldown de l'ult"
    - dd_id: "3135"
      name: "Void Staff"
      against: "quand l'ennemi achète de la Magic Resist (Mercury's, Force of Nature, Spirit Visage)"
  base_combo: ["Q", "Q", "Q", "E", "W", "R+Q"]
  win_condition: "Étouffe les tops melee avec un mur de trois tourelles, puis utilise la méga-tourelle UPGRADE+Q pour ancrer les fights baron et dragon. Accepte le 1v1 uniquement dans le nest."
  weakness: "Les bruisers et divers mobiles avec plusieurs dash brisent le turret nest avant qu'il ne fasse mal. Aucune escape hors Flash et le bonus de vitesse passif."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8229
      name: "Arcane Comet"
      icon_path: "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Arcane Comet proc sur E (le slow épingle la cible) et sur W multi-hit. Scorch plutôt que Gathering Storm : Heimer top se joue en lane, et Scorch ajoute du vrai dégât niveaux 1-6 vs juggernauts. Transcendence raccourcit E et W pour un uptime continu."
    secondary_rationale: "Biscuit Delivery couvre le coût mana des Q répétés en début de partie et donne du sustain HP face au harass auto. Cosmic Insight réduit les cooldowns de Flash et UPGRADE, multipliant les fenêtres de méga-tourelle."
    secondary_alternative: "Contre un top AD lourd (Darius, Renekton, Garen), swap Inspiration pour Resolve secondaire avec Conditioning (armor et MR après la min 12) et Overgrowth (HP scaling). Trade-off : moins de sustain early, plus de survie sur les all-ins."
matchup_draft:
  pick_into:
    - examples: ["nasus", "malphite", "cho-gath"]
      archetype: "Juggernauts immobiles ou lents qui doivent traverser la couverture des tourelles"
      reason: "Aucun dash ni blink pour contourner le setup du turret nest. Chaque pas dans la portée déclenche les rayons et les roquettes W, brûlant leurs HP avant tout trade significatif."
    - examples: ["mordekaiser", "darius", "garen"]
      archetype: "Juggernauts melee à engage court qui ne peuvent pas fermer la distance en sécurité"
      reason: "Leur engage exige d'arriver au corps à corps face à trois tourelles qui tirent en simultané. Le stun de E dans la zone d'approche puis la salve de W stoppent le commit avant qu'il n'atteigne Heimerdinger."
  counterpicks:
    - examples: ["irelia", "camille", "fiora"]
      archetype: "Divers mobiles avec plusieurs dash qui démontent le turret nest"
      reason: "Ils dash à travers la zone, reset sur les minions et atteignent Heimerdinger avant qu'il ne repositionne. Zhonya's Hourglass est obligatoire — la stasis fait gaspiller leurs fenêtres de dash et les force à disengage."
    - examples: ["jayce", "quinn"]
      archetype: "Top laners longue portée qui pokent au-delà des 970"
      reason: "Ils zonent Heimerdinger de la wave depuis une distance où E et W ne portent pas de manière fiable, le condamnant à manger du poke gratuit à chaque pose de tourelle ou last-hit."
---

## Aperçu

Heimerdinger top est un lane bully qui transforme les matchups face aux melee en guerre d'usure prolongée. Son identité top diffère du mid : ici, l'objectif n'est pas de roam mais de bâtir un **turret nest** infranchissable — une zone couverte par les trois H-28 G Evolution Turret qui force tout champion melee à choisir entre encaisser des dégâts magiques continus ou abandonner le contrôle de wave (wave control : décider si la ligne de minions pousse vers toi ou vers l'ennemi). La passive **Hextech Affinity** (vitesse de déplacement bonus près des structures alliées et de ses propres tourelles) le récompense pour combattre dans le nest plutôt que de kite à l'extérieur. Le terme kite désigne le mouvement de recul tout en infligeant des dégâts, pour maintenir la distance face à un poursuivant.

Le game plan : poser les tourelles devant la tour adverse, poke avec **W** (Hextech Micro-Rockets) et **E** (CH-2 Electron Storm Grenade) pour maintenir l'adversaire sous le seuil d'all-in (all-in : combat total sans option de désengagement), puis déployer la méga-tourelle UPGRADE+Q au level 6 pour verrouiller la lane. La pression splitpush (splitpush : pousser une side lane en solo pour forcer la réponse adverse, libérant des objectifs au reste de l'équipe) est la win condition macro : un turret nest dans une side lane est dangereux au point de forcer deux adversaires à le démanteler, donnant à l'équipe le temps de prendre des objectifs.

## Build Recommandé

**Starting items :** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) Doran's Ring + 2 Health Potions. Le mana soutient les Q répétés en début de partie, où chaque tourelle coûte 20 mana et doit être remplacée immédiatement après destruction.

**Core items (dans l'ordre) :**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — spike de burst et sustain mana. La passive ricoche depuis les attaques de tourelles sur les champions et renforce les trades de poke avec W (poke trades : échanges brefs à longue portée qui rongent les HP sans ouvrir un fight).
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — pénétration magique fixe pour couper à travers les armor runes early (armor runes : runes défensives prises sur le troisième shard pour réduire les dégâts physiques en début de partie).
3. ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — AP plus bonus de vitesse de déplacement qui s'active en infligeant des dégâts par sort. Permet de kite dans la lane pour repositionner les tourelles sans perdre la portée de W.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst supplémentaire, particulièrement fort pour finir un adversaire sous 40% HP avec un rayon chargé ou une volée de W.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicateur d'AP en late game. Avec quatre items en place, les rayons et les roquettes W scalent jusqu'à un dégât qui justifie de splitter une side lane même contre deux défenseurs.

**Situational items :**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — obligatoire face aux divers mobiles (divers : champions qui dash à travers la zone des tourelles pour tuer à courte portée — Irelia, Camille, Fiora). La stasis gaspille leur fenêtre de dash et laisse la méga-tourelle continuer à infliger des dégâts pendant que tu es invulnérable.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contre les tops à sustain (passive Darius, Nasus, Dr. Mundo). Grievous Wounds (debuff qui réduit de moitié les soins reçus) appliqué par les tourelles et W coupe leur boucle de regen HP.
- ![Malignance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3118.png) **Malignance** — contre les compositions tanky où la méga-tourelle UPGRADE+Q est ton outil principal de teamfight. Réduit le cooldown de R pour recharger entre objectifs.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — à intégrer dès qu'une priority target achète un objet de Magic Resist (Mercury's Treads, Force of Nature, Spirit Visage).

**Bottes :** Sorcerer's Shoes par défaut. Switch sur ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) Ionian Boots of Lucidity si tu es en avance et veux plus de casts d'UPGRADE.

**Skill order :** Max Q en premier pour les dégâts et la vitesse de recharge des tourelles. Max W ensuite pour scaler la salve de roquettes. Max E en dernier — c'est avant tout de l'utility (stun + charge), pas une source primaire de dégâts. Prends R aux levels 6, 11, 16.

**Runes :** Primaire **Sorcery** avec **Arcane Comet**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondaire **Inspiration** avec **Biscuit Delivery** et **Cosmic Insight**. Contre un top AD lourd, swap Inspiration pour **Resolve** avec **Conditioning** et **Overgrowth**.

## Matchups clés

- **Nasus :** Juggernaut farm-oriented sans dash. Pose les trois tourelles en ligne diagonale entre lui et la wave au level 1. Il ne peut pas trade sans traverser les rayons. Utilise E pour le stun à chaque last-hit sous pression, puis W pour renforcer. Respecte son W empowered au level 6 (réduit ton attack speed, mais les tourelles déployées ne sont pas affectées — le slow ne s'applique pas aux structures).
- **Darius :** Dangereux au level 3 quand son Apprehend (E, le pull) est en ligne. Ne reste pas collé aux tourelles sans minions pour bloquer l'angle de pull. Kite en arrière pendant son approche, centre le stun de E pour interrompre le pull, puis W immédiatement. Sa passive Hemorrhage (saignement) s'arrête quand tu coupes le contact en bougeant — kite est plus efficace que rester pour trade.
- **Irelia :** Matchup difficile. Elle reset son dash (Ionian Fervor E) sur les minions et peut t'atteindre même à travers trois tourelles si elle planifie le chemin. Garde Zhonya's Hourglass en troisième item. Au level 6, utilise E pour la stun en approche puis enchaîne UPGRADE+Q pour poser la méga-tourelle ; le slow AOE (area of effect — dégâts qui frappent une zone, pas une cible unique) la cloue pour le full rayon.
- **Garen :** Matchup direct. Pas de poke à distance ni de dash ; sa seule escape est Perseverance (regen HP passive). Coupe sa fenêtre de regen en alternant constamment poke entre rayons de tourelles et roquettes W. Quand il vient last-hit, drop E pour le stun central et enchaîne W pour le cycle de burst complet. Son Judgment (E spin) inflige des dégâts en cercle, alors ne reste pas collé quand il l'active — tiens la portée de W.
- **Jayce :** Sa forme ranged (Shock Blast) outranges ton W (1050 contre 1325), mais il passera en melee pour les autos empowered. Quand il commit en forme melee, c'est ta fenêtre : zone à trois tourelles plus stun E suivi de W. S'il reste en ranged toute la lane, garde les tourelles plus près de ta tour et concentre-toi sur matcher sa push — ne le chase pas en lane ouverte.

## Power spikes & conditions de victoire

- **Level 1 :** Les trois tourelles sont en place au level 3, mais même une seule au level 1 entame l'adversaire à sa première approche de wave. Pose Q près de la limite de la portée d'expérience pour qu'il doive entrer dans la portée pour last-hit.
- **Level 6 (UPGRADE+Q) :** La méga-tourelle, c'est 8 secondes de dégâts AOE immune au CC qu'aucun melee ne peut ignorer. Drop-la au centre de lane pour créer une zone que l'adversaire ne peut pas traverser sans subir un cycle complet de rayon + slow. C'est ton meilleur outil de splitpush.
- **Cosmic Drive complété (vers la min 14-16) :** Avec trois items (Luden's + Bottes + Cosmic Drive), les dégâts de tourelles commencent à entamer même les tanks. La vitesse de Cosmic Drive te permet de kite et remplacer les tourelles tombées sans perdre le positionnement.
- **Rabadon's Deathcap online (vers la min 24-28) :** En late game, les tourelles d'Heimerdinger infligent des dégâts comparables à un carry concentré. Force un fight baron ou dragon avec une méga-tourelle pré-posée à l'entrée du pit pour le valeur maximum.

## Erreurs courantes

- **Ne pas maintenir trois tourelles en permanence.** Si une tourelle est détruite ou expire, remplace-la tout de suite. Un setup à deux tourelles fait 33% de dégâts de zone en moins et laisse passer l'adversaire. Bind Q sur une touche rapide et refresh dès que tu passes à 350 d'un slot mort.
- **Utiliser UPGRADE+E (R+E) au lieu de UPGRADE+Q (R+Q) face aux juggernauts melee.** Le knockup de R+E est impressionnant, mais la méga-tourelle R+Q inflige bien plus de dégâts totaux sur 8 secondes face aux cibles lentes qui ne peuvent pas s'échapper. Garde R+E pour clear des waves de jungle ou punir les mages qui sur-extendent — pas comme outil principal contre les tops melee.
- **Rester immobile dans la portée des tourelles pendant l'all-in adverse.** Les tourelles offrent de la couverture, pas de l'invulnérabilité. Si l'adversaire commit (part en all-in sans plan de fuite) avec full HP et un gap-close actif, reculer pendant que les tourelles font les dégâts est correct ; ne reste pas planté à attendre les procs de stun (le moment où le stun de la tourelle se déclenche sur un hit ennemi).
- **Skipper Zhonya's Hourglass dans les matchups dash-heavy.** Contre Irelia, Camille ou Fiora, Zhonya's n'est pas un achat situationnel — c'est core. Construis-le en troisième item, avant Shadowflame, dès que le matchup l'exige.
- **Sur-extend pour poser des tourelles dans la jungle adverse.** Une tourelle dans la river adverse ou le tribrush (tribrush : le cluster de trois bushes près du pit Dragon ou Baron — un point de gank classique) c'est de la grosse vision, mais seulement si tu as l'avantage de vitesse pour fuir un pinch (in a pinch : quand tu es en danger immédiat et qu'il faut une solution instantanée). Établis ton nest en sécurité d'abord, puis étends la couverture vers les objectifs une fois Cosmic Drive en main.

## Conseil avancé

Avec UPGRADE+Q (méga-tourelle), l'angle de placement détermine la couverture AOE. Drop la méga-tourelle non pas sur l'adversaire mais un pas derrière sa position actuelle, sur son axe de retraite. En reculant de la zone d'impact initiale, il marche dans la portée du rayon au lieu d'en sortir. Combiné au stun de E à l'approche, ça force l'adversaire à absorber deux à trois cycles complets de rayon (chacun environ 1.5 seconde) avant de pouvoir partir — soit presque la totalité des 8 secondes de la méga-tourelle à la vitesse d'une cible ralentie.
