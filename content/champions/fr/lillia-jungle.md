---
title: "Lillia Jungle Build & Guide — Patch 16.9"
slug: "lillia-jungle"
language: "fr"
patch: "16.9"
champion: "lillia"
role: "jungle"
last_updated: "2026-05-05"
description: "Guide Lillia jungle pour League of Legends Patch 16.9 : starter kit, build AP burst, matchups jungle clés, power spikes, erreurs courantes et un conseil avancé."
quick_learn:
  champion_dd_id: "Lillia"
  difficulty: 3
  damage_type: "magic"
  champion_class: "AP Skirmisher / Roaming Caster"
  abilities:
    - key: "P"
      name: "Dream-Laden Bough"
      description: "Chaque sort applique un stack de dégâts magiques continus en % PV sur champions et monstres. Les stacks de Dream Dust activent sa R."
      dd_spell_id: "Lillia_Passive"
    - key: "Q"
      name: "Blooming Blows"
      description: "Coup AOE autour de Lillia : dégâts au centre, true damage en plus sur le bord. Stacke Move Speed. Outil principal de clear et DPS en skirmish."
      dd_spell_id: "LilliaQ"
    - key: "W"
      name: "Watch Out! Eep!"
      description: "AOE chargé avec zone de dégâts : le centre tape bien plus fort. Burst single-target. Le tell est long, à coupler avec E pour slow."
      dd_spell_id: "LilliaW"
    - key: "E"
      name: "Swirlseed"
      description: "Skillshot lobé longue portée : dégâts, slow, reveal. S'il rate, la graine roule jusqu'à toucher. Outil de setup, vision ou fuite."
      dd_spell_id: "LilliaE"
    - key: "R"
      name: "Lilting Lullaby"
      description: "Globalement applique Drowsy progressif à tout ennemi déjà marqué de Dream Dust, puis l'endort. Le premier coup le réveille avec bonus damage."
      dd_spell_id: "LilliaR"
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs assassins et dive comp (Zed, Diana, Kha'Zix) — la stasis couvre le gap pendant que DOT et R font le travail"
    - dd_id: "4645"
      name: "Shadowflame"
      against: "vs backline squishy sans Magic Resist — la passive à seuil PV s'aligne avec le wake-up burst de la R"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "vs comps qui kitent — Move Speed et Ability Haste alimentent son skirmish à cycle de sorts"
    - dd_id: "3135"
      name: "Void Staff"
      against: "à swap dès qu'une cible prioritaire achète un item Magic Resist (Mercury's Treads, Force of Nature)"
  base_combo: ["E", "R", "Q", "W", "AA"]
  win_condition: "Stacke Dream Dust sur les cibles prioritaires avec les passages de Q, lance R pour le sleep team-wide, puis enchaîne W centré et Q pour un burst max avant cleanse ou peel."
  weakness: "Early levels mous et une seule mobility (stacks de Q). Invades agressifs en level 2-3, chaînes de hard CC (Lee Sin Q, Vi R) et Mercury's Treads sur les cibles de R cassent son snowball."
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
    primary_rationale: "Inspiration en primaire : First Strike récompense son jeu farm-and-gank avec gold bonus à chaque gank, Magical Footwear donne les bottes gratuites pendant le farm, Biscuit Delivery et Cosmic Insight couvrent le mana early et raccourcissent Smite/Flash."
    secondary_rationale: "Sorcery en secondaire : Manaflow Band cap son mana pour que le spam Q-W-E entre camps ne l'assèche pas, Transcendence pousse l'Ability Haste pour des R plus fréquents dès le deuxième teamfight."
    secondary_alternative: "Contre skirmish 1v1 prolongés (Master Yi, Warwick, Udyr), swap Inspiration pour Precision avec keystone Conqueror et Triumph : le stacking de dégâts adaptatifs et l'HP-on-takedown renversent les longs duels."
matchup_draft:
  pick_into:
    - examples: ["karthus", "amumu", "fiddlesticks"]
      archetype: "Junglers farm-heavy sans invade early"
      reason: "Ils veulent clearer tranquilles jusqu'au level 6. Lillia tient leur vitesse de farm et les bat au scuttle grâce aux stacks de Move Speed de Q et à la pression DOT de la passive."
    - examples: ["sion", "dr-mundo", "cho-gath"]
      archetype: "Top tanks vulnérables au DOT en % PV"
      reason: "Liandry's Torment plus la passive en % PV déchirent vite les gros pools de PV. Sa R sleep transforme leurs menaces à cast lent (Sion R, Mundo Q) en positionnement gratuit pour l'équipe."
    - examples: ["senna", "kog-maw"]
      archetype: "Carries backline immobiles"
      reason: "La E cross-screen prépare le lockdown du gank, puis la R sleep ouvre une fenêtre de pickoff garantie avant qu'ils puissent se positionner derrière leur frontline."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "Invaders agressifs en level 2-3"
      reason: "Les niveaux 1-3 sont son point faible : pas de hard CC et seulement Q en dégâts. Une invade réussie la tue avant le power spike clear plus mobility."
    - examples: ["yasuo", "camille"]
      archetype: "Champions avec dashes ou Wind Wall qui ignorent le slow de W"
      reason: "Son burst single-target W veut la cible figée sur le centre. Dashes répétés et le E hookshot de Camille la laissent taper dans le vide."
    - examples: ["kindred", "graves"]
      archetype: "Junglers AD ranged qui battent le scuttle"
      reason: "Ils la battent au scuttle avec leur portée d'auto-attack alors qu'elle doit entrer dans le hitbox de Q. Perdre scuttle deux fois de suite effondre sa vision de river et ses timings de roam."
---

## Aperçu

Lillia est une jungler AP skirmisher dont tout le kit applique des dégâts magiques continus en % PV via sa passive **Dream-Laden Bough**. Chaque Q, chaque W, chaque E pose une marque de "dream dust" qui continue à infliger des dégâts pendant quelques secondes : c'est pourquoi elle clear les camps plus vite que presque toutes les autres junglers AP, et pourquoi ses duels semblent user l'ennemi même cooldowns en pause. Son game plan est simple : stacke du dust sur autant de champions ennemis que possible, puis appuie **R** pour les endormir tous d'un coup.

Elle veut du tempo, pas du farm lent. Utilise **Q** pour garder le bonus de Move Speed actif entre les camps, **E** pour gank hors de portée des wards, et **W** comme marteau single-target en skirmish une fois la cible slowée. Late game sa R est le setup CC team-wide le plus fiable du pool jungle AP, mais il dépend du fait d'avoir tag les cibles avant — une R "nue" sur une équipe propre est une ulti gâchée.

## Build Recommandé

**Starting items :** Hailblade (1039) + Refillable Potion (2031). Lillia est ranged, donc Hailblade est le bon starter pet.

**Core items (dans l'ordre) :**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade depuis Hailblade ; auto-évolution autour de la minute 3-4 une fois assez d'XP de monstres accumulée. C'est le pet AP-burst : chaque auto-attack après un sort ajoute un proc on-hit magique, parfaitement aligné avec sa DOT passive.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — premier item complet. Le bleed en % PV (dégâts étalés sur quelques secondes, pas burst instantané) se cumule à sa passive : plus l'ennemi a de PV totaux, plus elle le déchire vite.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plate. Bottes par défaut une fois que Magical Footwear t'a livré la paire gratuite vers la minute 12.
4. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — item de combat prolongé : empile l'omnivamp (heal-on-damage) et convertit une partie des dégâts en true damage après 3 secondes en combat. S'accorde avec son horloge DOT.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicateur AP late game ; transforme le chip damage de la passive en vraies fenêtres de one-shot.

**Situational items :**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contre assassins et dive comp (Zed, Diana, Kha'Zix). La stasis couvre le moment juste après le R sur la backline pendant que DOT et équipe finissent la kill.
- ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — vs backline squishy sans Magic Resist. Sa passive à seuil PV (dégâts magiques bonus quand la cible est basse en vie) s'aligne avec le tick de réveil de ta R.
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — vs comps qui kitent. Move Speed et Ability Haste alimentent son skirmish à cycle de sorts, vu que ses dégâts viennent du chain de spells, pas des auto-attacks.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — dès qu'une cible prioritaire achète un item Magic Resist.

**Boots :** Sorcerer's Shoes par défaut. Mercury's Treads est acceptable contre AP burst plus heavy CC (Lissandra + Twisted Fate) ; la tenacity protège la fenêtre de cast de ta R.

**Skill order :** Max **Q** en premier (clear speed et DPS skirmish), **W** en deuxième (burst single-target), **E** en dernier. Point en **R** aux niveaux 6, 11, 16. Niveau 1 en **Q**, niveau 2 en **E** pour les ganks, niveau 3 en **W**.

**Runes :** Primaire **Inspiration** avec **First Strike**, **Magical Footwear**, **Biscuit Delivery**, **Cosmic Insight**. Secondaire **Sorcery** avec **Manaflow Band** et **Transcendence**.

## Matchups clés

- **Lee Sin / Xin Zhao :** Invaders agressifs en level 2-3 (ils entrent dans ta jungle pour te tuer avant que tu aies le kit complet) qui te suppriment avant ton power spike de clear plus mobility. Commence par le camp le plus loin de leur ligne d'invade probable ; demande à tes laners des wards près de ton second buff. Ne conteste pas le scuttle (le crabe de la rivière) avant 6.
- **Karthus :** Course au farm. Il scale mieux late mais tu le bats au tempo dans la fenêtre 6-14. Track son clear, gank ses lanes à chaque cooldown de R. Si tu prends du retard, ne duel pas : joue les trades sur side objective.
- **Amumu :** Vous clearez tous les deux vite mais il n'a pas de skirmish presence avant 6. Prends le scuttle de son côté de la map après le premier clear ; il ne peut pas te punir sans son Q stun prêt.
- **Master Yi :** Territoire counterpick une fois qu'il a 2 items. Build ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** plus tôt que d'habitude ; kite son Q (son alpha strike) en stackant le Move Speed de ta Q passive et en pré-plaçant E derrière toi.
- **Graves :** Perd le scuttle face à lui à PV pleins. Path sur le côté opposé de la map jusqu'à avoir ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** complet ; le bleed en % PV nivelle enfin le trade en auto-attack.

## Power spikes & conditions de victoire

- **Niveau 3 (Q + W + E) :** Kit complet. Premier clear bouclé vers 3:15 avec PV sains — c'est ta première fenêtre de gank avec setup E vers W centré.
- **Niveau 6 (R débloqué) :** Premier **Lilting Lullaby**. Cherche du dust pré-stacké sur un laner low : entre dans la vision, R, attends le ramp de 1.5s, place le combo wake-up. C'est le timing le plus technique du kit (R précoce = ulti gâchée).
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment complet (~ minute 9-11) :** DPS skirmish double. Force ici les fights sur grub ou premier dragon ; sa DOT plus le bleed de l'item déchirent la frontline tank avant qu'elle puisse se repositionner.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker online (~ minute 18-22) :** Pouvoir de combat prolongé. Tu out-sustain les bruisers en 5v5 parce que ton heal scale avec la quantité de dégâts que tu continues d'appliquer, et ton kit applique des dégâts à chaque cooldown.

## Erreurs courantes

- **Caster R sur des ennemis sans Dream Dust.** R n'endort que les cibles qui portent déjà tes stacks de passive. Touche-les d'abord avec Q ou E ; une R "vide" applique seulement un Drowsy bref, pas un sleep complet.
- **Rester immobile pour placer W.** Le centre de W est le burst, mais le windup est long. Couple-le d'abord avec E pour slow : avec E qui touche, le centre de W est quasi garanti même sans Flash.
- **Spam Q dans le fog ennemi.** Q te révèle à chaque cast. Dans la jungle ennemie wardée, spam Q en clearant un camp pose un gros ping rouge sur leur minimap. Entre en silence, puis commit.
- **Ignorer l'upgrade du jungle pet.** Beaucoup de Lillias nouvelles sautent la quest Hailblade en clearant trop efficacement. Surveille la barre du pet — si elle stalle sur "needs more XP", passe par un petit camp en plus avant de back.
- **Chercher des picks en R en solo late game.** R est un outil de setup d'équipe, pas un bouton de gank solo. Si ton équipe est en mid-rotation quand tu R, le sleep timer expire avant qu'ils arrivent. Ping le sort, compte 1, puis commit.

## Conseil avancé

Entraîne un angle "E-flash" pour les setups R en mid river. Avance vers le mid laner ennemi depuis le bush latéral, flash-E sur sa ligne de marche pour que la seed atterrisse derrière lui (tu le forces à marcher dans le slow), puis R pendant la fenêtre de slow. Le slow garantit que les stacks de la passive arrivent avant que la R résolve, donc le sleep est complet et pas un Drowsy partiel. Sauve le cast sur les spawns d'objectifs où l'ennemi est en rotation et le warding est rare.
