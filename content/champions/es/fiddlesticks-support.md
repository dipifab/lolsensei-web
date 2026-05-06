---
title: "Fiddlesticks Support Build & Guía — Patch 16.9"
slug: "fiddlesticks-support"
language: "es"
patch: "16.9"
champion: "fiddlesticks"
role: "support"
last_updated: "2026-05-02"
description: "Guía de Fiddlesticks support para League of Legends Patch 16.9: build AP de engage, harass en lane, matchups clave, power spikes, errores comunes y consejo final."
quick_learn:
  champion_dd_id: "Fiddlesticks"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Engage Support"
  abilities:
    - key: "P"
      name: "A Harmless Scarecrow"
      description: "El slot del trinket pasa a cargas de efigie. Coloca falsos espantapájaros para vision; los enemigos que los vean se asustan brevemente y la efigie explota."
      dd_spell_id: "Fiddlesticks_Passive"
    - key: "Q"
      name: "Terrify"
      description: "Targetea un enemigo. Dañar a un enemigo con una spell mientras estás unseen lo Terrifica también. Lo hace huir lejos de ti durante 1-2.5s."
      dd_spell_id: "FiddleSticksQ"
    - key: "W"
      name: "Bountiful Harvest"
      description: "Channel que drena HP de los enemigos cercanos (te cura). Al final del channel inflige daño bonus de ejecución. Sustain en lane tras el primer back."
      dd_spell_id: "FiddleSticksW"
    - key: "E"
      name: "Reap"
      description: "Guadaña bumerán en cono amplio: ralentiza a todos los enemigos golpeados y silencia a los de la línea central. Tu principal harass de lane — golpea dos veces."
      dd_spell_id: "FiddleSticksE"
    - key: "R"
      name: "Crowstorm"
      description: "Channel de 1.5s, luego blink al punto objetivo con daño AOE por segundo alrededor de Fiddle durante 5s. Mejor lanzada desde una brush sobre el ADC enemigo."
      dd_spell_id: "FiddleSticksR"
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
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3504", name: "Imperial Mandate" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contra comps de AOE-burst pesado cuando el equipo necesita escudo activo (Yasuo + Malphite, Wukong, Diana)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target que interrumpe el channel de R (Lissandra R, Veigar E, Twisted Fate stun)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps que apilan curación (Soraka, Vladimir, Aatrox) — aplica Grievous Wounds"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap cuando 2+ enemigos compren cualquier item de Magic Resist"
  base_combo: ["R", "E", "Q", "W"]
  win_condition: "Coloca vision profunda en bot, escóndete en el tri-brush a nivel 6, luego Crowstorm sobre el ADC enemigo para una kill garantizada que hace snowball a tu carry."
  weakness: "La peor lane phase entre los supports de engage pre-6: sin escudo, sin CC point-and-click. Si te invaden o te pokean fuera, no tienes herramienta de comeback hasta la ulti."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Aftershock procea con Q Terrify (CC inmovilizante) por un spike de 2.5s de armor y MR que salva a Fiddle del focus tras Crowstorm. Font of Life cura al carry tras cada fear, Bone Plating come el burst del all-in early, Revitalize potencia el sustain de Bountiful Harvest."
    secondary_rationale: "Sorcery secundaria: Manaflow Band arregla los problemas de maná durante el spam de E en lane; Transcendence empuja el ability haste por encima de 30 al completar Sorcerer's Shoes para ciclos de Crowstorm más cortos."
    secondary_alternative: "Contra lanes de poke pesado (Lux, Karma, Xerath support) cambia Sorcery por Inspiration con Biscuit Delivery (5 galletas gratis en early para mantenerte full) y Cosmic Insight (Flash y Crowstorm con cooldowns reducidos)."
matchup_draft:
  pick_into:
    - examples: ["soraka", "yuumi"]
      archetype: "Enchanters squishies sin CC duro"
      reason: "Su kit gira en torno a healing y shielding — un Crowstorm desde el tri-brush supera sus cooldowns y one-shotea tanto a ellos como al ADC antes de que heal o shield se usen dos veces."
    - examples: ["caitlyn", "kog-maw", "ashe"]
      archetype: "ADCs inmóviles sin dash"
      reason: "Estos ADCs no pueden escapar a un flank desde brush; una vez que R + E impactan, no tienen herramienta de mobility para resetear distancia y tu bot convierte la kill en torre."
    - examples: ["sona", "seraphine"]
      archetype: "Supports mage de retaguardia sin escape"
      reason: "Se quedan atrás para encantar — pero tus efigies dan vision profunda que encuentra su posición, y el channel de R desde dentro de su hex las one-shotea antes de que se muevan."
  counterpicks:
    - examples: ["morgana", "milio"]
      archetype: "Enchanters con Black Shield / spell-shield"
      reason: "Black Shield absorbe Terrify (Q fear) y el primer tick AOE de Crowstorm sobre el carry, neutralizando tu cast de engage y dándoles 5s de ventana para disengage."
    - examples: ["janna", "lulu"]
      archetype: "Enchanters de disengage / peel"
      reason: "Janna R o Lulu W te sacan del carry el instante en que aterrizas. El AOE de Crowstorm sigue tickeando pero sin follow-up CC, el fight se resetea y comes focus damage para nada."
    - examples: ["lux", "karma", "xerath"]
      archetype: "Supports de artillería a larga distancia"
      reason: "Te pokean fuera de lane antes del 6 más allá del rango de tu E. Fiddle no tiene escudo ni forma de cerrar el gap, así que tu HP cae a la mitad antes de que la primera R esté online."
---

## Resumen

Fiddlesticks support es un pick de hide-and-engage: un support AP (Ability Power, escalado de daño mágico) cuya entera lane phase es el setup de un único momento — pulsar **Crowstorm (R)** desde dentro de una brush a nivel 6 sobre el ADC enemigo (el marksman, el carry de auto-attack a distancia del bot lane), con tu bot lane respaldando el blink. Fiddle no tiene escudo, ni CC point-and-click, ni escape, así que el precio por ese power spike a nivel 6 es la peor lane phase entre los supports de engage entre los niveles 1 y 5.

El plan de juego: coloca efigies en el tri-brush bot y en el river para amenazar lurk plays, usa **Reap (E)** para harass de slow + silence cuando un enemigo se acerca a last-hittear, y evita que te pokeen fuera en matchups de larga distancia. Una vez que **R** está up, busca cualquier momento en que el ADC enemigo se sobre-extienda más allá de su torre o el support esté roameando — entonces blinkea. A mid game tu trabajo es encontrar flanks para los Drake fights desde la fog del river o desde entradas de jungla sin ward. Eres en esencia un Fiddle jungler que pasa la lane phase al lado de un ADC.

## Build Recomendada

**Items iniciales:** ![Spellthief's Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3850.png) **Spellthief's Edge** (el starter AP de support que questea a Bloodsong) + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**.

**Items core (en orden):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — la recompensa de quest de Spellthief's Edge. Obligatorio: te da el income de oro que te permite comprar items reales, más un stack de AP-on-takedown que hace snowball tu daño. Cierra la quest hacia el minuto 12-14.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — penetración mágica plana (corta a través de la magic resist enemiga). Baratos y la elección correcta sobre ![Mobility Boots](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3117.png) **Mobility Boots** una vez que R esté online.
3. ![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Imperial Mandate** — tu item principal. El slow de **E** y **R** marca a los objetivos; cuando un aliado golpea al objetivo marcado, la marca detona por daño bonus (y comparte oro con tu ADC). Sinergia pura con el kit lleno de slows de Fiddle.
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — entra en stasis el instante en que Crowstorm acaba de tickear. Mandatorio si el rival tiene un diver o un assassin; sin él, mueres inmediatamente tras cada engage.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — solo si la partida se alarga y te queda oro tras los items de support. El +35% AP bonus hace que Crowstorm one-shotee a los squishies.

**Items situacionales:**

- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contra burst AOE pesado (Yasuo + Malphite, Wukong, Diana). El escudo activo salva al equipo durante su wombo.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico single-target que interrumpe R (Lissandra R, Veigar E, Twisted Fate stun).
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra comps que apilan curación (Soraka, Vladimir, Aatrox).
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — cuando 2+ enemigos compran cualquier item de Magic Resist.

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** por defecto. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** si 2+ enemigos tienen CC duro.

**Skill order:** Maxea **E** primero (slow + silence es tu único harass de lane), **W** segundo (sustain tras el primer back), **Q** al final. Punto en **R** a niveles 6, 11, 16.

**Runas:** Árbol primario **Resolve** con **Aftershock**, **Font of Life**, **Bone Plating**, **Revitalize**. Secundario **Sorcery** con **Manaflow Band** y **Transcendence**. Contra lanes de poke pesado (Lux, Karma, Xerath support) cambia Sorcery por **Inspiration** con **Biscuit Delivery** y **Cosmic Insight**.

## Matchups clave

- **Lux support:** Q binding a larga distancia más poke con E. Escóndete detrás de la wave para que su **Q** no tenga línea limpia, y nunca face-checkees el tri-brush sin antes comprobar con una efigie. Sobrevive al 6, luego Crowstorm sobre ella si se sobre-extiende.
- **Morgana:** Black Shield neutraliza el fear de tu **Q** y el primer tick AOE de R sobre su ADC. Engagea siempre al ADC en lugar de a Morgana, y fuérzala a pre-shieldear con un paso falso a la brush antes de comprometerte.
- **Leona:** Matchup de engage espejo, pero Leona tiene CC point-and-click y Aftershock que vencen al tuyo pre-6. Hace trade solo cuando ha gastado su **E**, y nunca engagees primero contra Leona — te stunea fuera del channel de R.
- **Janna:** Hard counter a tu engage. La **R** de Janna al aterrizar te saca del carry, deshaciendo todo el ult. Guarda Crowstorm para cuando ella ya haya gastado su R en otro fight, o cuando esté roameando.
- **Parejas ADC Caitlyn / Senna:** Tu lane de ensueño. Carecen de mobility — una vez que llegas al 6, Crowstorm desde el tri-brush las acaba cada vez. Dile a tu ADC que prepare la wave para que crashee al minuto 5 de modo que ambos lleguéis al 6 juntos.

## Power spikes y condiciones de victoria

- **Nivel 2 (con E + W):** Primera ventana de trade. Acierta **E** a través de la wave para chunkear al ADC enemigo; si shovan hacia ti, **W** bajo torre para sustain.
- **Nivel 6 (primera Crowstorm):** Tu único spike real de lane. Coloca un Stealth Ward (el ward blanco gratis de trinket con el que cada champion empieza) en el tri-brush (el triángulo de arbustos entre el river bot y la lane bot) 30s antes, posiciónate dentro, luego blinkea sobre el ADC enemigo. Un R + E + follow-up del ADC limpio es kill garantizada.
- **![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) Imperial Mandate online (~ minuto 14-16):** El proc de daño del slow spikea. Busca flanks cross-map para los Drake fights — el oro que tú y tu ADC compartís de los procs de Mandate acelera todo el bot side.
- **Nivel 11 + ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) Zhonya's Hourglass (~ minuto 22):** Tu segundo punto en R baja el cooldown y la stasis te cubre post-engage. Fuerza teamfights en Drake o Baron desde setup en la fog.

## Errores comunes

- **Engagear sin follow-up del ADC.** Un Crowstorm en solitario taggea a los enemigos pero no mata a nadie si tu ADC está back-recallando. Comprueba el mapa y el maná del ADC antes de pulsar R; si no tiene ult ni maná, guarda el engage para una mejor ventana.
- **Estar delante de la wave a nivel 1-3.** No tienes escudo ni escape pre-6. Quédate detrás del ADC y de la línea de minions; déjale last-hittear, tú escóndete en brush esperando un fear de efigie en el tri-brush para preparar el trade.
- **Malgastar efigies en las brush de lane.** Las efigies valen más cuando dan vision que el enemigo *no* está pagando por limpiar. Colócalas en el tri-brush o en la pixel brush para setup de engage, no en las brush obvias del bot lane que se limpian con el primer sweep del support enemigo.
- **Engagear contra un Black Shield no consumido (Morgana).** Una Morgana con Black Shield up convierte tu spike a nivel 6 en ult desperdiciada. Engagea siempre al ADC, no a Morgana, y fuérzala a pre-shieldear fingiendo un walk-in a la brush 2 segundos antes de comprometerte.

## Consejo avanzado

El channel de 1.5s de **Crowstorm** es interrumpible por cualquier cosa que te desplace o stunee, pero el channel en sí no rompe el stealth de la brush — significa que puedes pulsar **R** mientras sigues dentro del tri-brush, y el enemigo solo verá la barra de channel durante una fracción de segundo antes de que el blink aterrice. Practícalo en normales: espera a que el ADC enemigo se sobre-extienda por un CS, pulsa R desde dentro del tri-brush, blinkea sobre su cara. La señal de audio (la icónica risa de Fiddle) es el único aviso que reciben, y para cuando reaccionan el AOE ya está tickeando.
