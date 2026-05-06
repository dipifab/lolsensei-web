---
title: "Kayle Top Build & Guía — Patch 16.9"
slug: "kayle-top"
language: "es"
patch: "16.9"
champion: "kayle"
role: "top"
last_updated: "2026-05-05"
description: "Guía de Kayle top para League of Legends Patch 16.9: plan de supervivencia en línea, build hyper-scaling AS+AP, matchups clave, power spikes nivel 11 y 16 y errores comunes."
quick_learn:
  champion_dd_id: "Kayle"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Fighter / Hyper-scaling Carry"
  abilities:
    - key: "P"
      name: "Divine Ascent"
      description: "Kayle se transforma 4 veces al subir de nivel (1, 6, 11, 16). Al 6 obtiene auto-attacks ranged; al 16 sus auto-attacks lanzan ondas AOE de fuego on-hit."
      dd_spell_id: "Kayle_Passive"
    - key: "Q"
      name: "Radiant Blast"
      description: "Skillshot lineal: daño, slow y shred de armor + magic resist al primer enemigo y a los de detrás. Tu única herramienta ranged pre-6."
      dd_spell_id: "KayleQ"
    - key: "W"
      name: "Celestial Blessing"
      description: "Heal y movement speed sobre Kayle y el aliado más cercano. Sustain en línea pre-6, peel y chase tool más tarde."
      dd_spell_id: "KayleW"
    - key: "E"
      name: "Starfire Spellblade"
      description: "Pasiva: daño mágico extra en autos. Activa: la siguiente auto se vuelve ranged y hace daño mágico extra sobre HP perdido. Post-6 la pasiva añade ondas AOE on-hit."
      dd_spell_id: "KayleE"
    - key: "R"
      name: "Divine Judgment"
      description: "Da a un aliado (o a sí misma) unos segundos de invulnerabilidad y luego explota en daño mágico AOE. Save tool, cobertura para engage y finisher."
      dd_spell_id: "KayleR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
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
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
  situational_items:
    - dd_id: "6655"
      name: "Luden's Echo"
      against: "swap como segundo item si la línea es tranquila y quieres un burst spike sobre Nashor's"
    - dd_id: "3091"
      name: "Wit's End"
      against: "contra top laners AP fuertes (Rumble, Vladimir, Sylas) si su poke te cierra antes del 11"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contra comps con mucho heal (Aatrox top, Soraka, Dr. Mundo) — aplica Grievous Wounds en cada auto"
    - dd_id: "3135"
      name: "Void Staff"
      against: "en cuanto dos enemigos terminen un item de Magic Resist (Mercury's Treads no cuentan, solo items completos)"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "contra líneas que ganan con auto-attacks (Fiora, Camille, Tryndamere) — swap desde Berserker's si sobrevivir es lo único"
  base_combo: ["Q", "AA", "E", "AA"]
  win_condition: "Sobrevive a la línea hasta el nivel 11, luego escala con Nashor's Tooth + Rabadon's Deathcap. Al 16 tus ondas AOE on-hit ganan teamfights desde la back line bajo cobertura de R."
  weakness: "Pre-nivel 6 eres una melee lenta y squishy con un solo skillshot a corto rango. Top laners con all-in temprano fuerte (Darius, Renekton, Riven) te matan antes de tus power spikes."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision primary: Lethal Tempo acumula attack speed en pelea y escala las ondas AOE de la pasiva (post-6 y post-16). Triumph cura en takedowns, Legend: Alacrity da AS permanente, Last Stand sube daño a HP bajos — donde Kayle vive late."
    secondary_rationale: "Inspiration secondary: Biscuit Delivery te recupera HP y maná en la fase de supervivencia pre-6, Cosmic Insight reduce el cooldown de Flash y de items activos para que Zhonya's vuelva antes en teamfight."
    secondary_alternative: "Contra líneas de poke fuerte (Vladimir, Rumble, Quinn) cambia Inspiration por Resolve con Second Wind (regen pasivo tras recibir daño) y Overgrowth (HP scaling permanente) para aguantar hasta el power spike de nivel 11."
matchup_draft:
  pick_into:
    - examples: ["nasus", "mordekaiser"]
      archetype: "Stat-check tops with no early kill threat"
      reason: "Sin burst ni cadenas de hard-CC no pueden castigar tu pre-6 débil, y al llegar al 11 con autos ranged les ganas DPS desde distancia segura."
    - examples: ["veigar", "kayn"]
      archetype: "Late-game scalers without strong 1-9 windows"
      reason: "Escaláis a la par: cualquier equipo que te deje llegar al 16 entrega la partida, porque las ondas AOE on-hit de Kayle llegan antes que su wombo."
    - examples: ["senna", "vayne"]
      archetype: "Carries you can babysit with R"
      reason: "Ulti global te hace el mejor peeler de la partida — suelta R en cuanto los diveen y tu carry sobrevive una cadena de burst entera intacto."
  counterpicks:
    - examples: ["darius", "renekton", "riven", "fiora"]
      archetype: "Early-pressure bruisers with all-in level 1-3"
      reason: "Te matan antes del power spike de nivel 6. Su CC chain más sustained damage corta el 70%+ de HP a Kayle en un all-in de 4 segundos, y tú no tienes dash para disengage."
    - examples: ["camille", "yone"]
      archetype: "Mobile lane bullies with multiple gap-closers"
      reason: "El E hookshot de Camille y el dash de Q3 de Yone ignoran la posición que intentas mantener; cierran la distancia antes de que tu trade Q + auto se complete."
    - examples: ["olaf", "garen"]
      archetype: "Champions that bypass invulnerability"
      reason: "La R de Olaf le da CC immunity y true damage en R+axe, la R de Garen hace true damage que escala con HP perdido — ambos te rematan a través de Zhonya's Hourglass e incluso del front-end de tu R."
---

## Resumen

Kayle es una hyper-scaling carry que cambia de identidad a lo largo de la partida: una melee lenta y squishy a nivel 1, una poker ranged al 6, un monstruo de late game al 11 y una bola de demolición AOE de equipo al 16. Su **Divine Ascent (P)** es el kit — cada hito desbloquea un stat block nuevo (attack speed, range, ondas de fuego on-hit). La top lane es su casa natural porque la línea larga le da espacio para jugar pasiva sin sangrar tempo.

Su game plan es supervivencia, no agresión. Pierde CS si hace falta, no mueras nunca y confía en la build: ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** al nivel 11 convierte la pasiva ranged en daño real, y ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** al 16 hace que las ondas AOE on-hit borren teamfights enteros desde la back line bajo cobertura de **R**.

## Build Recomendada

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + 1 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. El escudo cambia la línea de "muero a dos trades" a "pierdo CS pero vivo". Salta Doran's Ring aunque Kayle escale con AP — pre-6 no tienes el kit para usarlo.

**Core items (en orden):**

1. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — las botas de attack speed alimentan tus ondas on-hit. Rushea botas primero, luego pieza por pieza hacia Nashor's.
2. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — el item más importante del juego para Kayle. Combina los dos stats que quiere en el mismo slot (50% attack speed + 90 AP) y añade magic damage en cada auto. Es el spike que te lleva de "top laner débil" a "carry de verdad".
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplica todo tu AP scaling por 30%, y tienes mucho que multiplicar (E pasiva, R, ondas AOE post-16).
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — la stasis es tu salvavidas contra divers y para empalmar el cooldown de tu R. Cómpralo tercero o cuarto según la comp enemiga.

**Situational items:**

- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — contra top laners AP fuertes (Rumble, Vladimir, Sylas). Añade attack speed más magic resist más magic damage on-hit, así que es defensivo y ofensivo a la vez.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contra comps con mucho heal (Aatrox top, Soraka mid, Dr. Mundo). Aplica Grievous Wounds en cada auto, lo que reduce el heal en un 40%.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — en el momento en que dos enemigos terminen un item de Magic Resist (no Mercury's Treads — son demasiado baratas; solo items completos).
- ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — segundo item alternativo cuando la línea está tranquila y quieres un burst spike sobre Nashor's.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — contra líneas que ganan con auto-attacks (Fiora, Camille, Tryndamere). Cambia desde Berserker's si sobrevivir es el único objetivo.

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** por defecto, por el scaling de attack speed. Plated Steelcaps cuando un AD bully hace la línea imposible.

**Skill order:** Maxea **E** primero (es tu herramienta de daño antes y después del 6), **Q** segunda (slow más largo + mejor shred por rank), **W** la última. Punto en **R** a niveles 6, 11, 16. Apertura **E-W-Q** para sustain temprano.

**Runes:** Primary **Precision** con **Lethal Tempo**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Secondary **Inspiration** con **Biscuit Delivery** y **Cosmic Insight**. Stat shards: Attack Speed, Adaptive Force, Health Scaling.

## Matchups clave

- **Darius:** Hard counter. Distancia máxima, entras solo a last-hit, nunca a tradear pre-6. ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** start, asume perder 30+ CS, pinguea al jungla.
- **Garen:** Línea fácil post-6. No puede interrumpir tu auto ranged con nada, así que kitéalo (camina hacia atrás mientras disparas para mantener distancia) con **Q** slow + auto ranged. Cuidado con su **R** a HP bajo — hace true damage que escala con HP perdido e ignora Zhonya's Hourglass.
- **Mordekaiser:** Supervivencia pre-6, snowball (ventaja creciente: kill → oro → item → más kills) post-11. Su **R** te aísla del equipo 7 segundos; si te pesca antes del 11, mueres. Usa **Flash** para esquivar el pull de **E** y prebuilda **Mercury's Treads** si te coge varias veces.
- **Camille:** Counterpick. Su **E** hookshot ignora el spacing que intentas mantener. Compra ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** en vez de Berserker's, wardea la brush de línea y pinguea al jungla si va dos niveles arriba.
- **Nasus:** Pares pre-6, ganas post-11. Su **W** wither (un slow muy fuerte sobre ti) le gana el duelo antes de que tengas autos ranged. En cuanto Nashor's esté online y le ganes DPS a su rampa de stacks, pushea waves y oblígale a reaccionar.

## Power spikes y condiciones de victoria

- **Nivel 6 (R desbloqueada):** Tu primera forma con autos ranged se activa, y **Divine Judgment** te da un save tool. Deja de abrazar la torre — pokeas a 525 de rango y conviertes los dives en kills con una **R** bien medida sobre ti misma.
- **Nivel 11 + ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth completo (~ minuto 18-22):** El spike más grande de la partida. El rango de auto-attack vuelve a subir, la pasiva escala con attack speed y AP, y el wave control se vuelve a tu favor. Empieza el group play: rota con el equipo, busca objetivos.
- **Nivel 16 (full ascension) + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ minuto 28-32):** Tus auto-attacks lanzan ondas AOE de fuego on-hit. Una auto al frontline daña a todos los de detrás. Desde aquí debes ser la mayor fuente de daño de tu equipo, sea cual sea el rol.
- **Siempre con ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) Zhonya's Hourglass + R combo:** Pulsa **R** sobre ti para invulnerabilidad, luego encadena Zhonya's Hourglass cuando la R termine. Son unos 5 segundos de inmunidad en teamfight mientras tu equipo peelea — suficiente para voltear casi cualquier engage.

## Errores comunes

- **Intentar tradear auto-por-auto pre-6.** Kayle es melee con base damage bajo en early. Un solo trade malo contra Darius o Renekton arranca un snowball que ya no recuperas. Reserva **W** para sustain, last-hit y nada más.
- **Gastar R sobre ti misma para sobrevivir al poke.** **Divine Judgment** tiene 160 segundos de cooldown a rank 1 — el teamfight de mid-game entero perdido. Guarda **R** para all-ins entrantes o para proteger a tu ADC en peleas de drake.
- **Quedarte en frontline a nivel 16.** Tus ondas AOE on-hit rinden mejor desde la back line, detrás de tu tank. Posiciónate como un ADC — deja que el frontline reciba mientras tú disparas ondas a través de ellos.
- **Coger camps de jungla antes del nivel 11.** Kayle clarea lento y se debilita HP antes del power spike. Quédate en línea, pushea waves, recall a mana lleno — nada de invades ni peleas de scuttle pre-Nashor's.
- **Vender botas para el sexto item demasiado pronto.** En late puedes cambiar botas por un item de daño (Mejai's Soulstealer, Cryptbloom), pero solo si vas 5/0 arriba y los fights son group fights asegurados. Si estás par, mantén botas.

## Consejo avanzado

Domina el **R-on-self peel pattern** en teamfights de mid-game. Cuando el diver enemigo (Camille, Hecarim, Sett) salta sobre tu back line, no pulses **R** sobre tu ADC — púlsala sobre ti misma, camina hacia la línea del dive y suelta la explosión AOE bajo los pies del diver. Los 2.5 segundos de invulnerabilidad obligan al diver a comprometerse y comerse la explosión (kill gratis) o retirarse (tu equipo resetea el fight en par). El truco es el rango: **R** tiene 900 de cast range, así que puedes targetearte aunque estés 8 unidades detrás de tu ADC.
