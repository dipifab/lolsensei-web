---
title: "Graves Jungle Build & Guide — Patch 16.9"
slug: "graves-jungle"
language: "fr"
patch: "16.9"
champion: "graves"
role: "jungle"
last_updated: "2026-04-29"
description: "Guide Graves jungle pour League of Legends Patch 16.9 : starter kit, build lethality, matchups clés, power spikes, erreurs courantes et astuce finale."
quick_learn:
  champion_dd_id: "Graves"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Marksman / Skirmisher Jungle"
  abilities:
    - key: "P"
      name: "New Destiny"
      description: "Mécanique de fusil à pompe avec recharge. Chaque tir lance 4 plombs en cône qui ne traversent pas les minions ; plusieurs plombs sur un non-champion le repoussent."
      dd_spell_id: "Graves_Passive"
    - key: "Q"
      name: "End of the Line"
      description: "Projectile linéaire qui explose après 2s, ou instantanément contre le terrain — rebondit sur les murs. Outil principal de clear et d'angle-shot."
      dd_spell_id: "GravesQLineSpell"
    - key: "W"
      name: "Smoke Screen"
      description: "Lance un nuage de fumée qui bloque la vision et ralentit les ennemis à l'impact. Sert au disengage, à refuser les wards ou à voiler les ganks."
      dd_spell_id: "GravesSmokeGrenade"
    - key: "E"
      name: "Quickdraw"
      description: "Court dash avant avec buff d'armure qui s'empile vers un champion. Les autos baissent le CD et rafraîchissent le buff. 2 charges."
      dd_spell_id: "GravesMove"
    - key: "R"
      name: "Collateral Damage"
      description: "Tir explosif longue portée : touche le premier champion puis explose en cône derrière lui. Burst spike aux niveaux 6/11/16."
      dd_spell_id: "GravesChargeShot"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3142", name: "Youmuu's Ghostblade" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "3814"
      name: "Edge of Night"
      against: "vs hard CC mono-cible (Malzahar R, Skarner R, Warwick R) — le spell shield bloque le lock-on"
    - dd_id: "6676"
      name: "The Collector"
      against: "quand tu es devant et que l'équipe adverse n'empile pas d'armure tôt — l'execute sous 5% PV ferme l'écart"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs gros burst AP (Diana, Syndra, Lux mid) — le bouclier lifeline transforme un one-shot en trade survivable"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "vs deux gros AD dealers (ex. Yasuo + Caitlyn) — le bleed étale les dégâts et évite le one-shot"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "vs 3+ champions hard CC (ex. Leona + Lissandra + Sejuani) — la tenacity réduit stuns et roots"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Snowball lethality via invades et ganks avant la minute 14. Une fois Eclipse posé, conteste chaque objectif — le fusil fond un squishy en deux volées et le E te rend la fenêtre de trade."
  weakness: "Affamé en mana en early. La fenêtre de recharge punit le placement gourmand, et tu fonds sous les chaînes de hard CC car tu n'as aucune safety au-delà du buff d'armure du E."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 9923
      name: "Hail of Blades"
      icon_path: "perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
---

## Aperçu

Graves est un marksman qui vit dans la jungle, pas en bot lane. Ses auto-attacks fusil et le buff d'armure intégré à **Quickdraw (E)** lui permettent d'affronter tanks et bruisers à découvert, tout en bursant les squishies grâce à la lethality. Tout le kit tourne autour du **tempo** : clear rapide, invade dès que c'est up, et échanger ta priority de jungle contre des kills avant que les carries adverses ne scalent.

Le game plan est simple : sur les 8 premières minutes tu es le meilleur duelliste de la map, donc exploite-le. Power-farme un clear propre, regarde la map, et entre dans la lane qui a **Flash** down ou peu de PV. Après Eclipse tu contestes les objectifs ; après trois items tu deviens un skirmisher de teamfight qui efface la backline depuis un flank — mais tu **ne** splitpushes **pas** en late, parce qu'un Graves seul à la minute 30 est à une chaîne de CC de mourir.

## Build Recommandé

**Items de départ :** Smite + **Hailblade** pour un clear plus rapide et des dégâts AOE sur le **R**, avec **Refillable Potion**. Prends Emberknife seulement si l'équipe a besoin de pression de counter-jungle côté red adverse (clear plus lent, plus de sustain).

**Items core (dans l'ordre) :**

1. **Eclipse** — burst+bouclier+omnivamp, le premier item le plus propre pour les junglers skirmishers. Le bouclier proc après deux coups, ce qui colle au rythme du fusil.
2. **Plated Steelcaps** vs équipes AD-lourdes / **Mercury's Treads** vs 3+ hard CC. Par défaut Plated.
3. **Youmuu's Ghostblade** — actif de movement speed plus lethality, ton outil de gap-close et de finition de gank.
4. **Serylda's Grudge** — scaling d'armor pen pour le late quand les ennemis stackent de l'armure ; le slow sur cible blessée te garde à portée.

**Items situationnels :**

- **Edge of Night** — vs ultis mono-cible à lock-on (Malzahar, Skarner, Warwick).
- **The Collector** — quand tu es devant et veux de la pression d'execute sur les squishies.
- **Maw of Malmortius** — vs burst AP lourd (Diana, Syndra, Lux mid).
- **Death's Dance** — vs équipes avec deux gros AD dealers (ex. Yasuo + Caitlyn). Les dégâts encaissés sont étalés en bleed lent au lieu d'arriver d'un coup.
- **Bloodthirster** — late game quand il te faut un cinquième item de dégâts avec bouclier et lifesteal intégrés.

**Bottes :** Plated Steelcaps par défaut. Berserker's Greaves seulement si l'équipe adverse n'a aucune menace de CC et que tu veux spécifiquement du scaling d'attack speed — pick de niche sur Graves.

**Skill order :** Maximise **Q** en premier (clear et dégâts), **E** ensuite (plus de dashes grâce au CD réduit par rang), **W** en dernier (le slow scale très bien dès le rang 1). **R** aux niveaux 6, 11, 16.

**Runes :** Arbre primaire **Domination** avec **Hail of Blades**, **Sudden Impact**, **Sixth Sense**, **Treasure Hunter**. Secondaire **Precision** avec **Triumph** + **Coup de Grace** pour la pression de snowball, ou **Resolve** avec **Second Wind** + **Revitalize** si tu t'attends à du poke dans ta jungle.

## Matchups clés

- **Hecarim :** Il te dépasse après 3 items mais perd les skirmishes pré-6 si tu E-rolles dans un pattern d'autos espacées. Punis-le avant la minute 9, puis recule — ne le duel pas après son premier item.
- **Lee Sin :** Matchup miroir de tempo. Vous gagnez tous les deux les 6 premiers niveaux ; le jungler avec le plus de ganks gagne. Tracke le cooldown de son **Q** et les fenêtres de W-jump ; si son Q est down, ton fusil gagne le trade net.
- **Master Yi :** À tuer avant son niveau 6 + premier item. Le **W** sur lui pendant son **Q** active lui bloque la vision et il perd le lock — entraîne-le en Salle d'Entraînement jusqu'à ce que ce soit un réflexe.
- **Vi :** Tanky et orientée gank. Elle perd les skirmishes longs si tu as des charges de E ; ne te fais pas attraper en l'air par son **Q** — c'est un all-in garanti pour son équipe.
- **Diana :** Snowball énorme post-6. Garde **W** pour le windup de son **R** (ça ne casse pas l'engage, mais le slow à l'impact rallonge son commit et donne du temps à ton équipe pour peeler). Construis **Maw of Malmortius** comme deuxième item de dégâts.

## Power spikes & conditions de victoire

- **Niveau 3 :** Kit complet débloqué. Ton pattern de gank est **E pour rentrer en range -> Q sur le mur derrière eux -> reset auto -> W slow sur la voie de retraite**. Avec les runes Hail of Blades, ça tue n'importe quel squishy à 60% PV sans Flash.
- **Niveau 6 :** **Collateral Damage** débloque l'execute longue portée. Le projectile touche le premier champion puis explose en cône — flashe une cible contre un mur et tu garantis et l'impact direct et les dégâts du cône.
- **Timing Eclipse (~ minute 9) :** Tu gagnes chaque fight contesté sur objectif. Force un fight sur Scuttle, Drake ou Voidgrubs dans cette fenêtre — passé la minute 12, les junglers qui scalent (Hecarim, Master Yi) commencent à matcher ton rythme.
- **3 items (~ minute 22) :** Tu deviens un flanker de teamfight. Ton job est de flanker la backline adverse (la carry squishy, la plus loin de leur tank) et de la burst avant qu'elle ne réagisse. N'engage jamais de face.

## Erreurs courantes

- **Brûler les charges de E pour fuir un clear.** **E** a 2 charges et le cooldown baisse à chaque auto-attack. Cramer les deux charges pour esquiver un seul skillshot te laisse sans gap-close pendant 12 secondes. Garde-en au moins une.
- **Q dans le mur derrière toi par accident.** **End of the Line** explose instantanément contre le terrain. Si tu Q dos à un mur, le projectile explose derrière toi pour zéro dégât. Vérifie toujours ton orientation avant de cast.
- **Smoke Screen sur toi-même pour le sustain.** **W** ne soigne pas. La valeur c'est le slow à l'impact — jette-la sur la voie de retraite de la carry adverse, pas sur toi.
- **R à portée max sans setup.** Le projectile longue portée est esquivable. Utilise **R** à bout portant après un Flash, ou pré-tirée en finisher quand l'ennemi a déjà commit Flash. N'ouvre pas un fight avec sauf s'ils marchent en ligne droite dans la fog.
- **Splitpush à la minute 30.** Graves late n'a aucune escape si un Skarner/Warwick/Malzahar pose son R. Regroupe-toi avec ton équipe après la minute 25 et joue les flancs à distance de teamfight, pas en 1v1 dans une side lane.

## Conseil avancé

La technique du **E-buffer-roll** : pendant que tu es en plein windup de Q ou d'auto-attack, mets en file une entrée **Quickdraw**. Le dash part au moment où le windup se termine, donc tu obtiens les dégâts auto/Q **et** tu te repositionnes dans le même cycle d'animation — tu gardes l'uptime DPS en esquivant ou en chassant. La fenêtre de recovery où tu ne peux pas bouger est d'environ 0,4 seconde sans ce trick ; avec le buffer roll elle est presque nulle. Entraîne-toi sur les mannequins de la Salle d'Entraînement jusqu'à ce que ton rythme de stutter-step soit auto-attack → E → auto-attack sans pauses.
