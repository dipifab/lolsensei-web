---
title: "Garen Top Build & Guide — Patch 16.9"
slug: "garen-top"
language: "fr"
patch: "16.9"
champion: "garen"
role: "top"
last_updated: "2026-04-29"
description: "Guide complet Garen top lane pour League of Legends Patch 16.9 : starter kit, build juggernaut bruiser, matchups clés, power spikes, erreurs courantes et astuce technique."
quick_learn:
  champion_dd_id: "Garen"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Juggernaut / Bruiser"
  abilities:
    - key: "P"
      name: "Perseverance"
      description: "Régénère des PV hors combat si tu ne subis ni dégâts ni sorts pendant quelques secondes. Définit le pattern hit-and-retreat."
      dd_spell_id: "Garen_Passive"
    - key: "Q"
      name: "Decisive Strike"
      description: "Burst de movement speed et cleanse des slows. La prochaine auto silence la cible 1,5s et inflige des dégâts bonus."
      dd_spell_id: "GarenQ"
    - key: "W"
      name: "Courage"
      description: "Passif : stacks d'armor/MR en tuant des ennemis. Actif : shield + tenacity, puis fenêtre de mitigation résiduelle."
      dd_spell_id: "GarenW"
    - key: "E"
      name: "Judgment"
      description: "Spin AOE qui inflige des dégâts physiques aux ennemis proches pendant 3s. Outil principal de waveclear et de DPS soutenu."
      dd_spell_id: "GarenE"
    - key: "R"
      name: "Demacian Justice"
      description: "Exécute un champion ennemi selon ses PV manquants. Bonus de true damage contre l'ennemi le plus kill-fed."
      dd_spell_id: "GarenR"
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
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3742", name: "Dead Man's Plate" }
    - { dd_id: "3053", name: "Sterak's Gage" }
  situational_items:
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contre top AP (Mordekaiser, Rumble, Vladimir) — le shield magique sauve les trades longs"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "contre comps double-AD ; gère le bleed qui punit les glass cannons en teamfight"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "contre 3+ menaces AP ; le passif de movement speed t'amène aux fights"
    - dd_id: "3161"
      name: "Spear of Shojin"
      against: "3e item offensif top-tier si tu es très en avance et veux le cycle d'ability haste sur Q"
  base_combo: ["W", "Q", "AA", "E", "R"]
  win_condition: "Survis à la lane phase avec Doran's Shield + sustain du passif, scale jusqu'à Stridebreaker, puis flank en side lane et utilise R pour exécuter les carries kill-fed adverses en teamfight."
  weakness: "Pas de dash ni blink, pas de CC dur à distance. Vulnérable au kite (Quinn, Vayne) et aux roots longue portée (Lissandra, pull de Mordekaiser). Tombe en lane si tu overextends sans stacks de W."
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
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8242, name: "Unflinching", icon_path: "perk-images/Styles/Sorcery/Unflinching/Unflinching.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
---

## Aperçu

Garen est un juggernaut mêlée dont la valeur vient d'une présence prolongée : le passif **Perseverance** régénère des PV hors combat, **Decisive Strike (Q)** lui permet de combler la distance avec un cleanse, **Courage (W)** offre une fenêtre plate de tankiness plus un passif de stacks de résistances, **Judgment (E)** est ses dégâts AOE et son waveclear, et **Demacian Justice (R)** exécute les squishies selon leurs PV manquants avec un scaling true damage contre l'ennemi le plus kill-fed. C'est l'un des champions les plus simples à exécuter mécaniquement, ce qui veut dire que tout le skill ceiling est dans la **map awareness** (lecture de map) et le **wave management** — pas dans l'exécution du combo.

En top lane il veut des trades courts pendant l'actif de **W** et des waves entières de son côté de la lane. Il est fort dès le niveau 1 mais pas immortel ; il n'a ni dash ni CC dur, donc tout matchup capable de disengage à volonté (Quinn, Vayne) ou de le root à distance (Lissandra, pull de Mordekaiser) dépassera sa lane phase si tu overextends.

## Build Recommandé

**Items de départ :** Doran's Shield + 1 Health Potion. Doran's Blade uniquement contre des tops à distance où tu dois all-in tôt pour nier les CS.

**Items core (dans l'ordre) :**

1. **Stridebreaker** — slow sur **Q**, actif AOE pour rester collé aux cibles qui kitent, AD + HP utiles tous les deux.
2. **Plated Steelcaps** — la plupart des top lanes sont auto-attack-heavy. Mercury's Treads uniquement contre 3+ champions à CC dans l'équipe ennemie.
3. **Dead Man's Plate** — synergie avec le bonus de movement speed de **Q**, le passif d'impact proc dans ton pattern d'all-in habituel.
4. **Sterak's Gage** — bouée de sauvetage face aux fenêtres de burst, scaling AD qui fait que **R** exécute plus tard que son seuil de base ne le suggère.

**Items situationnels :**

- **Maw of Malmortius** — contre top AP (Mordekaiser, Rumble, Vladimir).
- **Death's Dance** — contre comps double-AD (gère le bleed qui punit les glass cannons).
- **Force of Nature** — contre 3+ menaces AP ; le passif de movement speed aide à atteindre les fights.
- **Spear of Shojin** — 3e item offensif top-tier si tu es très en avance et veux le cycle d'ability haste.

**Bottes :** Plated Steelcaps par défaut. Mercury's Treads contre Renekton+Lissandra+CC lourd.

**Skill order :** Maxe **E** en premier (DPS et waveclear), **Q** en second (slow + utility), **W** en dernier (le passif scale très bien sans points). Prends **R** au 6, 11, 16.

**Runes :** Primaire **Precision** avec **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Secondaire **Resolve** avec **Second Wind** + **Unflinching**, ou **Inspiration** avec **Magical Footwear** + **Cosmic Insight** pour le timing des bottes sur les maps en rotation.

## Matchups clés

- **Darius :** Tu perds le niveau 1, tu gagnes après Stridebreaker si tu évites son pull **E**. Achète Doran's Shield, joue autour du niveau de **Q** pour le cleanse.
- **Fiora :** Hard counter pour elle jusqu'au 6 si tu ne te fais pas vital. Trade avec **W** active pour nier la value de sa parry, puis disengage.
- **Quinn :** Skill matchup ; elle kite avec **Q** blind + **E** vault. Prends Teleport, abandonne les CS de la première wave et roam mid à partir de la wave 4.
- **Vayne top :** Ton matchup le plus pénible. Build Plated Steelcaps niveau 1, prends Doran's Shield + Second Wind, et joue pour le jungler — tu ne peux pas gagner les trades 1v1 après le 6 sur ce matchup.
- **Mordekaiser :** Lane lente vers le spike du death realm. Trade court, place **Q** + **E** quand son **W** est en cooldown, et arrive à Maw of Malmortius avant son deuxième item.

## Power spikes & conditions de victoire

- **Niveau 2 :** **Q** + **E** débloque un vrai all-in. S'ils push la wave vers toi et que ton jungler est en top side, c'est ta kill window.
- **Niveau 6 :** **Demacian Justice** te permet d'achever des cibles low HP qui s'en allaient avant. Track les summoners ennemis ; sans Flash, tout top mêlée est à portée d'exécution.
- **Stridebreaker timing (~ 11 minutes) :** Le wave control bascule en ta faveur. Slow shove, freeze ou split push selon l'état de la map. **Q** + actif est ton assurance gap-close contre les ganks.
- **Condition d'ace late game :** Avec le scaling de **R** contre l'ennemi le plus kill-fed et Sterak's Gage, tu deviens une menace de flank qui solo-kill les carries. Ton job est de charger **E** en fog et **R** avant qu'on ne les peel.

## Erreurs courantes

- **Avancer avec peu de stacks de W.** Le passif de **Courage** donne des résistances par stack ; si tu as 0 stack (p. ex. tu viens de respawn), évite les trades longs jusqu'à recharge sur les minions.
- **Utiliser R en ouverture.** **R** sert à exécuter, pas au setup. Si tu ouvres avec, le cast time avertit l'ennemi de disengage et tu perds le timer de kill.
- **E sur une wave statique.** Spin sur 3 minions quand tu les drop en 2 autos brûle ta mana et révèle ta rotation de cooldowns à la lane. Garde **E** pour les trades.
- **Oublier le silence du Q.** **Q** silence pendant 1,5 seconde. Q-engage toujours sur un champion en mid-cast (polymorph de Lulu, shield de Karma, R de Lissandra) — le silence interrompt le cast.

## Conseil avancé

Quand une carry ennemie fed déclenche la priorité cible de ton **R**, tu peux flash-**R** en plein teamfight même si leur support pop un shield : les dégâts d'execute de **R** sont du true damage sur la cible prioritaire, et la plupart des budgets de shield sont déjà consommés par le burst de l'équipe avant que ton cast résolve. Garde Flash pour ce play ; l'ace qu'il génère vaut 2 fights de drake.
