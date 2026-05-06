---
title: "Aphelios Bot Build & Guía — Patch 16.9"
slug: "aphelios-bot"
language: "es"
patch: "16.9"
champion: "aphelios"
role: "bot"
last_updated: "2026-04-29"
description: "Guía Aphelios bot lane para League of Legends Patch 16.9: rotación de armas, build marksman core, matchups clave, power spikes, errores y un consejo final."
quick_learn:
  champion_dd_id: "Aphelios"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Marksman / Weapon Swap"
  abilities:
    - key: "P"
      name: "The Hitman and the Seer"
      description: "Aphelios cicla 5 armas Lunari en un orden fijo que después se desplaza. Lleva 2 a la vez (main-hand + off-hand); cada una tiene munición finita y al agotarse fuerza un cambio."
      dd_spell_id: "Aphelios_Passive"
    - key: "Q"
      name: "Weapon Abilities"
      description: "La activada cambia con la main-hand: tiro a larga distancia (Calibrum), sprint AoE con lifesteal (Severum), root sobre todos los ralentizados (Gravitum), cono (Infernum), torreta (Crescendum)."
      dd_spell_id: "ApheliosCalibrumQ"
    - key: "W"
      name: "Phase"
      description: "Intercambia al instante main-hand y off-hand. Cooldown corto: cada cast cambia tu perfil de daño (rango, lifesteal, AoE, slow, attack speed)."
      dd_spell_id: "ApheliosW"
    - key: "E"
      name: "Weapon Queue System"
      description: "Aphelios no tiene una verdadera tercera ability — este slot solo muestra la próxima arma que Alune le pasará. Sirve para planear combos con varias armas de antelación."
      dd_spell_id: "ApheliosE"
    - key: "R"
      name: "Moonlight Vigil"
      description: "Explosión de luz lunar a larga distancia que detona sobre los campeones. Aplica el efecto único de la main-hand actual (mark shots extra de Calibrum, AoE, lifesteal AoE, etc.)."
      dd_spell_id: "ApheliosR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "E" }
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
    - { dd_id: "3032", name: "Yun Tal Wildarrows" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contra frontlines tanky (Sion, Ornn, Malphite): armor pen que escala con HP bonus enemigo"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contra heal alto (Soraka support, Yuumi, Vladimir, Aatrox): aplica Grievous Wounds y reduce las curas a la mitad"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "cuando necesitas lifesteal y escudo: reemplaza The Collector si hay 2+ assassins encima"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra burst AP fuerte (Syndra, Veigar, comp doble mago): escudo a HP bajos y Magic Resist"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "contra CC bloqueante (suppression Malzahar, R Skarner, R Mordekaiser): la activa limpia el CC"
  base_combo: ["Q", "W", "R", "AA"]
  win_condition: "Llega al two-item spike, luego cicla Calibrum + Gravitum en los fights para bloquear un target clave con la W swap, R y la combo Q-root mientras tu equipo entra al engage."
  weakness: "Sin dash, sin escape, y el arma equivocada en el momento equivocado tira un fight. Cae a pico si lo punishean en niveles 1-3 antes de stackear ammo e ítems."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["samira", "kalista", "yasuo"]
      archetype: "Marksmen de corto alcance que deben comprometerse"
      reason: "Calibrum (el rifle) supera el rango de auto-attack de ellos: para tradear tienen que entrar y los castigas con el mark shot de la Q. Después la W swap a Severum cura el chip damage que te metieron."
    - examples: ["karthus", "seraphine", "heimerdinger"]
      archetype: "Scalers bot lane sin movilidad"
      reason: "Gravitum (el cañón) los ralentiza con cada auto, luego la Q rootea a todos los targets ralentizados a la vez. Con la R nivel 6 de follow-up, un target inmóvil se come todo el burst antes de terminar un channel."
    - examples: ["jinx", "kog-maw", "twitch"]
      archetype: "Marksmen hyper-scaling con early débil"
      reason: "El nivel 1-2 de Aphelios con Calibrum supera a cualquiera cuya lane phase sea solo farmear. Aplica presión antes del 3er ítem para que nunca lleguen a su pico de late game."
  counterpicks:
    - examples: ["draven", "lucian", "tristana"]
      archetype: "Marksmen agresivos de early game"
      reason: "Sus ventanas en niveles 1-3 son brutales: cooldowns cortos y daño base alto castigan a Aphelios mientras su Q tiene 9s de cooldown y la munición es finita. No puede tradear de vuelta sin gastar ammo que necesita para empujar la ola."
    - examples: ["leona", "nautilus", "pyke"]
      archetype: "Supports de hard-engage"
      reason: "Aphelios tiene cero movilidad (sin dash, sin blink). Una cadena de CC del support y muere antes de poder W-swap a Severum para curarse o gastar Flash. Pickearlo contra engage = pickearlo para morir."
    - examples: ["caitlyn", "senna", "jhin"]
      archetype: "Marksmen de poke a larga distancia"
      reason: "Hacen poke a Aphelios desde distancias en las que ni Calibrum responde (traps + headshot Caitlyn, Q desde fog Senna, W root Jhin). Aphelios no puede cerrar la distancia, así que sangra HP sin poder responder."
---

## Resumen

Aphelios es un marksman con el kit teórico más largo de League: 5 armas distintas que rotan por sus manos, cada una con su propio basic attack y su propia **Q**. Solo llevas dos a la vez — una main-hand (que dicta tus auto-attacks y la **Q**) y una off-hand (que dispara periódicamente junto a la main-hand). Cada arma tiene munición finita (un número fijo de tiros): cuando se agota, el arma se descarta y Alune le pasa la siguiente de la cola. La maestría está casi toda en saber qué arma viene después y qué dos quieres activas en el momento adecuado.

El game plan es sobrevivir a un early game frágil (sin dash, sin escape, gestión de ammo delicada) hasta llegar a dos ítems, después snowball (transformar una pequeña ventaja inicial en otra más grande ganando más fights) en las skirmishes (peleas pequeñas de 2-4 jugadores, más reducidas que un teamfight completo) usando **Phase (W)** para swappear al arma que castigue la situación: **Calibrum** (el rifle) para poke (chipear los HP del enemigo desde lejos con daño a distancia) y execute (rematar targets que ya están a baja vida), **Severum** (la pistola-guadaña) para sustain (curarse y aguantar en peleas largas), **Gravitum** (el cañón) para lockdown (clavar a un enemigo con CC el tiempo suficiente para matarlo), **Infernum** (el lanzallamas) para waveclear y AOE de teamfight (area of effect: daño en una zona, no en un solo target), **Crescendum** (el chakram) para spikes de DPS (picos de damage per second) a corto rango.

## Build Recomendada

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 1 Health Potion. Doran's Blade es el starter estándar para marksmen: pequeño bonus de Attack Damage (AD), algo de HP y lifesteal (curas un porcentaje del daño que infliges con auto-attacks). Aphelios necesita cada punto de AD porque sus armas consumen munición.

**Core items (en orden):**

1. ![Yun Tal Wildarrows](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3032.png) **Yun Tal Wildarrows** — primer ítem meta de DPS. Te da crit temprano (probabilidad de que un auto-attack haga daño extra) y un pasivo de sangrado en los ataques (daño repartido en los siguientes segundos en vez de todo de golpe), perfecto para las armas de fuego rápido (Crescendum, Infernum).
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — botas de attack speed (más autos por segundo). Default en casi cualquier partida de Aphelios porque todas sus armas se benefician del attack speed extra.
3. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — execute por debajo del 5% HP más Lethality (un tipo de armor penetration que ignora un trozo de la armadura del target, especialmente útil contra targets squishy — campeones con pocas defensas como ADC y magos). Combina con los mark shots de Calibrum (los auto-attacks de Calibrum colocan una "mark" sobre el enemigo: re-atacar el target marcado mete daño bonus desde cualquier punto del mapa, incluida la **R**) que ya chunkean (clavan un buen pedazo de daño) targets a baja vida.
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — multiplicador de crit damage; con dos ítems de crit ya hechos (Yun Tal + Collector o Yun Tal + RFC), Infinity Edge desbloquea el 175% de crit damage y tus auto-attacks casi doblan el burst (el daño que sueltas en una ventana de 1-2 segundos).
5. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — rango extra en el auto-attack de Calibrum y en el primer disparo energizado (RFC carga un auto "energized" cada pocos segundos mientras te mueves — ese auto sale a rango extendido y zappea al target). Sinergiza con el kiting (moverte hacia atrás mientras atacas, manteniendo la distancia con las amenazas).

**Swaps situacionales:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — reemplaza Rapid Firecannon cuando el enemigo apila armadura (frontline de Sion, Ornn, Malphite — frontline = los tanks/bruisers que absorben daño delante mientras los carries disparan desde detrás).
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — mismo slot que Lord Dominik's, esta versión cuando el equipo enemigo tiene heal alto (Soraka, Yuumi, Aatrox, Vladimir): aplica Grievous Wounds, que reduce el heal enemigo a la mitad.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — reemplaza The Collector cuando necesitas sustain en partida larga o cuando el equipo enemigo tiene dos assassins apuntando a tu backline (el escudo de 7 segundos a HP llenos puede salvarte una vez por fight).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — slot tardío contra comps de burst AP fuerte (Syndra + Veigar + Annie). El escudo se activa bajo umbral de HP — es decir, cuando bajas del 35% HP — y absorbe daño mágico.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — swap de último slot cuando una sola cadena de CC (suppression de Malzahar, R de Skarner, R de Mordekaiser) decide cada teamfight contra ti.

**Skill order:** Maxea **Q** primero (sube el daño de la activada de cada arma), **W** segundo (swap más rápido = más flexibilidad por segundo), **E** al final. Sube **R** en niveles 6, 11, 16 como siempre.

**Runes:** Árbol primario **Precision** (construido en torno a auto-attacks): keystone **Lethal Tempo** (attack speed extra al pelear con campeones), después **Presence of Mind** (devolución de mana en takedowns — relevante porque la Q cuesta ammo), **Legend: Bloodline** (más lifesteal apilado con kills), **Coup de Grace** (daño extra a targets a baja vida). Árbol secundario **Resolve** con **Second Wind** y **Overgrowth** contra lanes de poke fuerte (Caitlyn, Senna), o **Inspiration** con **Magical Footwear** y **Cosmic Insight** cuando esperas una lane pasiva.

## Matchups clave

- **Draven:** la lane más dura del mapa. Te gana cada trade (un breve intercambio de auto-attacks y abilities) en niveles 1-3 todas y cada una de las veces. Quédate detrás de tu support, last-hit solo con auto-attacks (no quemes ammo de Calibrum Q en minions), espera al nivel 6 para igualar el trade con la **R**.
- **Caitlyn:** guerra de rango. Sus traps + headshot le permiten poke (chipear tus HP desde fuera incluso del rango de Calibrum) más allá de tu propio rango. Swap a **Gravitum** en cuanto se acerque a una trap; el slow (reducción de movement speed) más el root de tu Q (efecto que clava al enemigo en su sitio, sin poder moverse ni dashear) anula su escape.
- **Samira:** quiere divearte (correr bajo tu torre para matarte a pesar de los disparos de la torre). Aguanta **Severum** para el momento en que entre en melee (rango corto de auto-attack) — la Q AoE te cura del chip damage (daño pequeño pero constante que va comiendo HP) y el CC del support la mata si se compromete demasiado (avanza demasiado y no puede retroceder).
- **Jhin:** te hace más poke pre-6, tú haces más DPS post-6 (su poke a distancia gana en niveles tempranos, tu daño sostenido gana después del nivel 6). No tradees auto por auto en lane (un "trade" = breve intercambio de golpes — su W root y crit del 4º disparo definen la lane); empuja fuerte el nivel 2 (force la wave bajo su torre) y haz recall (vuelve a base) sobre el primer Yun Tal completado para volver con ventaja.
- **Kalista:** es squishy y de corto rango. Tradea autos con **Calibrum** main + Severum off-hand; su cadena de dashes la mete dentro de tu rango y el mark shot de la Q la castiga cada vez que salta.

## Power spikes y condiciones de victoria

- **Nivel 2:** con una activada de arma extra online, igualas a la mayoría de ADCs en trades. La mayoría de partidas de Aphelios se deciden por quién aterriza limpio el all-in del nivel 2 (un fight de compromiso total en el que vas a por la kill sin opción de retirada).
- **Nivel 6 con Calibrum:** la primera **Moonlight Vigil** con el rifle en main-hand dispara mark shots extra a larga distancia. Si la bot lane enemiga está empujada hacia tu torre (su wave se ha pusheado cerca de tu torre, dejándolos en posición vulnerable), la ventana de **R** + Q execute desde toda la pantalla es kill regalada para un support atento.
- **![Yun Tal Wildarrows](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3032.png) Yun Tal Wildarrows completado (~ minuto 12-14):** la lane priority se invierte (te conviertes en la lane que puede irse a ayudar fights en otro lado sin perder CS ni HP). Puedes shovear (empujar tu wave a la torre enemiga) y disputar drake, tu DPS en skirmishes spikea fuerte (tu damage per second salta en un escalón claro con este ítem).
- **Spike de 3 ítems (Yun Tal + Berserker's + The Collector hacia el minuto 22-25):** un "spike" es un salto de poder claro atado a un milestone de nivel o ítem. Aphelios es ahora el marksman con DPS sostenido más alto del juego. Fuerza fights por objetivos aquí (objetivos = Dragon, Baron, Rift Herald, towers — targets neutrales que dan buffs de equipo o presión de mapa) y mantente al rango máximo de Calibrum mientras tu frontline aguanta la línea.

## Errores comunes

- **Auto-atacar minions con ammo de la Q de Calibrum.** Guarda el ammo de la Q para campeones. La Q de Calibrum es una de tus pocas amenazas a larga distancia; quemarla en una wave para fast-push (forzar a que la wave crashee la torre enemiga lo antes posible) solo vale si vas a recallar en ese mismo back, si no, el trade que cedes es enorme.
- **Olvidar trackear el arma siguiente en cola.** El slot **E** muestra la próxima arma. Comprueba siempre antes de comprometerte: avanzar mientras swappeas a **Severum** con **Crescendum** detrás está bien; hacer lo mismo con **Gravitum** en cola tira la ventana del all-in (los pocos segundos en los que puedes cerrar la kill).
- **Quedarte quieto en teamfights.** Aphelios no tiene dash. Si te quedas en el mismo punto dos segundos seguidos, cualquier cosa móvil (Zed, Diana, Camille) te borra. Strafea (muévete lateralmente mientras atacas) entre cada auto-attack — pasos cortos, pero movimiento constante.
- **Usar la R en cuanto sale del cooldown.** El valor de Moonlight Vigil depende totalmente de qué arma tengas en main-hand al castearla. **R** con Crescendum sobre un solo target está desperdiciada; **R** con Infernum contra 4 enemigos agrupados es una quadra kill.
- **Pickear Aphelios contra hard engage.** Esto es un error de draft, no de gameplay — "engage" es la herramienta de un campeón para forzar un fight (p. ej. la Q stun de Leona, la R suppression de Malzahar). Si el enemigo lleva Leona + Malzahar mid + Hecarim jungle, no llegas a usar ninguna arma. Compensa con setups Severum-friendly (un peeler — support cuyo trabajo es protegerte de divers, tipo Lulu o Janna).

## Consejo avanzado

Aprende el timing del W-cancel sobre **Phase**: encolar un swap durante un mark shot de Calibrum te deja disparar el auto follow-up a larga distancia con el efecto de la nueva arma (p. ej. swap a Infernum y el follow-up se vuelve un cono AoE). Esto convierte el mark shot de Calibrum en un burst multi-target que ningún otro marksman puede replicar, y es la mayor ventaja mecánica que tienes sobre un Aphelios casual.
