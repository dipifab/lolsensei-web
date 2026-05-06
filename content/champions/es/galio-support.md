---
title: "Galio Support Build & Guía — Patch 16.9"
slug: "galio-support"
language: "es"
patch: "16.9"
champion: "galio"
role: "support"
last_updated: "2026-05-02"
description: "Guía Galio support para League of Legends Patch 16.9: starter kit, build de tanque engage, matchups clave, power spikes, errores comunes y un consejo avanzado final."
quick_learn:
  champion_dd_id: "Galio"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Vanguard / Engage Support"
  abilities:
    - key: "P"
      name: "Colossal Smash"
      description: "Cada pocos segundos, la siguiente auto-attack de Galio inflige daño mágico extra en una pequeña zona al impactar."
      dd_spell_id: "Galio_Passive"
    - key: "Q"
      name: "Winds of War"
      description: "Dos ráfagas de viento que convergen en un tornado en el punto objetivo, infligiendo daño mágico con el tiempo. Poke a larga distancia desde posición segura."
      dd_spell_id: "GalioQ"
    - key: "W"
      name: "Shield of Durand"
      description: "Carga un escudo que absorbe daño mágico; suelta para provocar (taunt) y dañar enemigos cercanos. Úsala en pleno fight para proteger a tu ADC (peelar al carry de los divers)."
      dd_spell_id: "GalioW"
    - key: "E"
      name: "Justice Punch"
      description: "Da un paso atrás brevemente y luego se lanza hacia delante, lanzando por los aires al primer campeón impactado. Herramienta principal de engage."
      dd_spell_id: "GalioE"
    - key: "R"
      name: "Hero's Entrance"
      description: "Designa a un aliado; tras un retraso, Galio aterriza sobre su posición, escudando aliados y lanzando enemigos por los aires. Engage cross-map."
      dd_spell_id: "GalioR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "E" }
    - { level: 9, key: "Q" }
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
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "3109", name: "Knight's Vow" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "contra CC fuerte single-target sobre tu ADC (Morgana Q, Ashe R, Skarner R) — el activo cleansa y cura"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "con ADC de auto-attack (Jinx, Caitlyn, Tristana) — el slow de W encadena con su ventana DPS"
    - dd_id: "8020"
      name: "Abyssal Mask"
      against: "con comp aliada de daño mágico (AP mid + AP jungle) — el aura debuff amplifica el daño mágico sobre los target que tauntees"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "contra 3+ amenazas AP en el equipo enemigo (mid + jungle + support con daño mágico)"
    - dd_id: "3107"
      name: "Redemption"
      against: "con ADC enchanter o comp de muchas curaciones (Soraka, Sona, Yuumi en tu equipo) — heal grupal extra en objective fights"
  base_combo: ["E", "AA", "W"]
  win_condition: "Usa Hero's Entrance R para engage cross-map en spawns de Drake y Rift Herald. En skirmishes en bot, abre con E knockup, W taunt para peelar al ADC, y luego Knight's Vow redirige el daño desde tu carry."
  weakness: "La carga de W es interrumpible por hooks (Blitzcrank, Thresh) y silencios. Enchanters de disengage (Janna, Lulu) cancelan el follow-up de R. Daño solo limitado: necesita follow-up del ADC para cerrar kills."
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
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primario: Aftershock procca con W o R y da resistencias para sobrevivir tras engagear. Font of Life cura al ADC cuando pega al target inmovilizado, Bone Plating absorbe el primer burst, Revitalize amplifica el escudo de R."
    secondary_rationale: "Inspiration secundario: Biscuit Delivery da HP y maná gratis en lane (Galio gasta mucho con income de support), y Cosmic Insight reduce el cooldown de Flash — vital porque R+Flash es tu catch tool más impactante."
    secondary_alternative: "En lane de poke duro (Brand, Zyra, Xerath support) donde no llegas sano al nivel 6, cambia Inspiration por Sorcery con Manaflow Band (más maná para Q de poke back) y Transcendence (E más rápida para esquivar el follow-up)."
matchup_draft:
  pick_into:
    - examples: ["ashe", "caitlyn", "jhin"]
      archetype: "ADCs inmóviles sin dash"
      reason: "Hero's Entrance aterriza sobre tu aliado con knockup; los carries sin dash no pueden escapar, así que cualquier 2v2 se convierte en kill cuando R está disponible."
    - examples: ["leona", "rakan"]
      archetype: "Tank engage supports sin hook"
      reason: "El knockup de E de Galio interrumpe su windup de engage (Q stun-walk de Leona, carga W de Rakan); luego su escudo W absorbe el daño mágico del follow-up post-engage."
    - examples: ["brand", "zyra"]
      archetype: "Mage supports squishy sin escape"
      reason: "Los mage supports se quedan quietos para soltar skillshots; la E de Galio les llega entre minions y la W tankea el burst que normalmente echaría a un melee engager."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "Hook supports"
      reason: "Un hook que pega a Galio en plena W cancela todo el engage; es un target enorme sin dodge tool propio, y un hook con chain CC le quita tanto la R como la E del fight."
    - examples: ["janna", "lulu", "milio"]
      archetype: "Enchanters de disengage"
      reason: "Sus AOE knock-aside o spells shield-and-cleanse anulan la ventana de aterrizaje de R y el taunt W: cuando Galio cae, el carry ya está fuera de rango."
    - examples: ["xerath", "vel-koz"]
      archetype: "Mage supports de artillería a larga distancia"
      reason: "Pokean fuera del rango de Q de Galio y de la distancia del dash E, así que no puede castigarles en lane; perder HP pre-6 frena su impacto en sidelane con R."
---

## Resumen

Galio support es la herramienta de engage (iniciar el fight) cross-map en una carcasa de tank. Trae hard CC — control que el enemigo no puede cancelar con un cleanse básico — en tres habilidades distintas: **W** taunt (fuerza al objetivo a atacarte), **E** knockup (lanza al aire un instante, como un stun corto), **R** knockup. Tiene un escudo mágico para absorber el burst (mucho daño en 1-2 segundos) de los supports a distancia, y una ulti global que convierte los spawns de Drake y Rift Herald en oportunidades de kill 5v5. Juega support porque su impacto escala con la map awareness, no con el oro — y porque Hero's Entrance es más útil cuando los compañeros necesitan un tank que aterrice encima, no cuando él mismo lo es.

El plan en lane es paciente: usa Q a máxima distancia para chipear al enemigo, guarda E para el momento en que tu ADC (el marksman, el carry que pega auto-attacks para hacer daño) commitea al fight, y carga W solo cuando el enemigo ya está pegándote en melee. Las big plays llegan en nivel 6 — cuando tu jungler dive top (entra bajo torre a buscar kill), tú R; cuando el jungler enemigo aparece bot, R atrás a tu top. La skill expression vive en el timing de W (suelta para interrumpir channels clave — R de Caitlyn, ulti spray de Twitch, Q de Master Yi) y en la selección del target de R (escoge siempre al aliado con más probabilidad de sobrevivir los 2 segundos de channel — nunca R a un Vayne ya con poco HP).

## Build Recomendada

**Items iniciales:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Starter estándar de support; el upgrade de la quest (una misión integrada que se completa farmeando oro con el tiempo) se desbloquea en el minuto 12-14.

**Items core (en orden):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — upgrade de la quest de World Atlas, elegido porque Galio es engage-leaning (inicia fights, no los disengagea). Añade una pasiva de daño on-immobilized que procca (se activa automáticamente) cada vez que tu W o E impacta.
2. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — activo de escudo en área para skirmishes 5v5. Combina con R: aterrizas con R, sueltas Locket al caer, y tu equipo se come el follow-up de burst enemigo con un escudo de 700+ cada uno.
3. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — botas de ability haste. Recortan el cooldown de cada hechizo, así tus tools de engage vuelven antes entre teamfights, y el CDR sobre Summoner Spells acorta Flash para las jugadas R+Flash.
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — vincúlalo al carry con más impacto. Redirige el daño desde él hasta ti y empuja el valor de Aftershock porque ahora eres el target prioritario de focus.

**Items situacionales:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — contra CC fuerte single-target sobre tu ADC (Morgana Q, Ashe R, Skarner R). El activo cleansa el control y cura.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — con ADC de auto-attack (Jinx, Caitlyn, Tristana). El slow de tu W encadena directamente con su ventana DPS.
- ![Abyssal Mask](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/8020.png) **Abyssal Mask** — con comp aliada de daño mágico (AP mid + AP jungle). El aura debuff amplifica el daño mágico de tu equipo sobre los target que tauntees con W.
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — contra 3+ amenazas AP en el equipo enemigo (mid + jungle + support, todos con daño mágico).
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — con ADC enchanter o comp de muchas curaciones (Soraka, Sona, Yuumi en tu equipo).

**Botas:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** por defecto — ability haste y reducción de CD de Flash hacen las combos R+Flash mucho más frecuentes. Cambia a ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contra comps con mucho CC (varios stuns/charms/roots dirigidos a ti durante el aterrizaje de R).

**Skill order:** Maxea **E** primero (cooldown de engage más corto). Maxea **Q** segundo (waveclear y chip damage cuando el ADC está shoveado — bloqueado bajo torre sin minions que farmear). **W** al final. Pon punto en **R** en niveles 6, 11, 16.

**Runas:** Primario **Resolve** con **Aftershock**, **Font of Life**, **Bone Plating**, **Revitalize**. Secundario **Inspiration** con **Biscuit Delivery** y **Cosmic Insight**. Cambia el secundario a **Sorcery** (Manaflow Band + Transcendence) en lanes de poke duro donde no llegas sano al nivel 6.

## Matchups clave

- **Blitzcrank:** Lane dura. Su Q hook entra durante tu carga de W. Quédate detrás de la wave de minions para que no te enganche atravesándolos, nunca cargues W en fog of war, y llama a tu jungler en el minuto 4-5 — Blitz no tiene escape y tu E knockup le encadena CC.
- **Lulu:** Disengage difícil. Su escudo E + W (knock-aside o polymorph) borra tu engage. Usa Q para pokear a máxima distancia pre-6 en vez de ir a engagear con E, y R desde fuera de pantalla para que el polymorph no caiga antes de que llegues.
- **Leona:** Fight parejo. Ambos sois engagers, así que gana el lado que aterriza E primero. Bait su Q sun-strike con tu paso adelante, luego E sobre el frame de recovery.
- **Soraka:** Favorable. Su healing solo importa si se queda en rango. Q a máxima distancia para que tenga que elegir entre curar o esquivar, luego R + E cuando tu jungler aparezca bot para un 3v2 imparable.
- **Pyke:** Fight parejo, pero Galio pierde si Pyke consigue una kill. Trackea sus hooks, nunca dejes a tu ADC con HP mínimo cuando no puedes ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** sobre la spike, y warda profundo el río porque su R es un reset.

## Power spikes y condiciones de victoria

- **Nivel 2:** Q + E desbloquea la primera amenaza de kill. Con follow-up del ADC, camina hacia delante, E al support y Q debajo del ADC — el slow al knockup encadena lo suficiente para dos auto-attacks de daño.
- **Nivel 6:** **Hero's Entrance** desbloquea el cross-map. La primera fight de Drake es tu power spike — empuja la wave fuerte, camina al río de mid y R sobre tu jungler cuando engagee en el dragon pit.
- **Bloodsong completo (~ minuto 12-14):** Tus engages ya hacen daño de verdad. La pasiva on-immobilize añade 30+ de daño mágico por hit en el target que W o E.
- **Locket of the Iron Solari + Knight's Vow online (~ minuto 20-25):** Tu spike de dos items. R-en-Locket sobre el carry cubre 600+ HP efectivos para el equipo, mientras Knight's Vow tankea el focus fire sobre ti y tu ADC sigue haciendo DPS.

## Errores comunes

- **Cargar W cuando tu ADC no tiene follow-up.** El taunt W fuerza al enemigo a atacarte, pero si el ADC está reposicionando o recalleando, te comes el daño gratis sin trade. Sincroniza el release de W con la primera ventana de auto-attack del ADC.
- **Hero's Entrance sobre el target equivocado.** Nunca R a un aliado ya con poco HP — muere durante los 2 segundos de channel y aterrizas sobre un cadáver. Elige al frontline con más HP de tu equipo.
- **Ignorar la wave durante los roams.** Un Galio support que R a mid y regala una wave entera bot es net loss. Empuja primero la wave a la torre enemiga, luego roamea — nunca roamees desde una lane congelada.
- **Engagear sin ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket activo.** En objective fights, R-Locket es tu cooldown más valioso. Guarda el activo hasta que tu equipo commitee el fight, luego suelta los dos en el mismo instante para el máximo escudo sobre varios aliados.
- **Maxear W de segundas.** Como Galio mid, subir rangos de W da reducción de cooldown marginal. Maxea E para la ventana de engage de 4 segundos en nivel 8.

## Consejo avanzado

Combo R+Flash: lanza Hero's Entrance sobre un compañero, luego Flash durante la animación de windup para redirigir tu punto de aterrizaje 400 unidades en cualquier dirección. El equipo enemigo ve el indicador de R sobre tu aliado y se prepara para el knockup obvio, y entonces tu landing flasheado clipa a un target fuera del radio R visible. Requiere práctica para sincronizar el Flash dentro de la ventana de channel — pero un solo R+Flash sobre el carry enemigo, off-vision (el enemigo no te ve porque estás dentro de fog of war), cierra partidas antes de que empiecen.
