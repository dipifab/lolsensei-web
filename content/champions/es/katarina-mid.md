---
title: "Katarina Mid Build & Guía — Patch 16.9"
slug: "katarina-mid"
language: "es"
patch: "16.9"
champion: "katarina"
role: "mid"
last_updated: "2026-05-05"
description: "Guía de Katarina mid para League of Legends Patch 16.9: starter kit, build core de assassin AP, matchups clave, power spikes, errores comunes y un consejo final."
quick_learn:
  champion_dd_id: "Katarina"
  difficulty: 4
  damage_type: "magic"
  champion_class: "AP Assassin / Snowball Resetter"
  abilities:
    - key: "P"
      name: "Voracity"
      description: "Cuando muere un campeón enemigo al que Katarina ha dañado (kill o assist), sus cooldowns restantes bajan en picado. Recoger un Dagger lanza un golpe AOE."
      dd_spell_id: "Katarina_Passive"
    - key: "Q"
      name: "Bouncing Blade"
      description: "Dagger dirigido que rebota a enemigos cercanos y luego cae detrás del primer objetivo. El Dagger en el suelo es el pivote de todo el combo."
      dd_spell_id: "KatarinaQ"
    - key: "W"
      name: "Preparation"
      description: "Lanza un Dagger sobre Katarina que aterriza un instante después, más una ráfaga breve de Move Speed. Es el Dagger sobre el que blinkeas."
      dd_spell_id: "KatarinaW"
    - key: "E"
      name: "Shunpo"
      description: "Blink a un campeón, minion, ward o Dagger. Recoger un Dagger reduce el cooldown de Shunpo. Funciona también sobre wards enemigos visibles."
      dd_spell_id: "KatarinaEWrapper"
    - key: "R"
      name: "Death Lotus"
      description: "Channel que lanza cuchillos a los 3 campeones más cercanos, aplicando Grievous Wounds. Cualquier hard CC la cancela. Se usa post-engage, nunca pre-engage."
      dd_spell_id: "KatarinaR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "W" }
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
    - { dd_id: "3152", name: "Hextech Rocketbelt" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4646", name: "Stormsurge" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3135", name: "Void Staff" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra hard-engage (Malphite R, Zac, Amumu) — la stasis anula el engage que te interrumpiría la R"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target que cancela R (stun de Annie, R de Lissandra, gold card de Twisted Fate)"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contra comps con mucho CC (2+ stuns/roots) — sustituye Sorcerer's Shoes cuando comes demasiado CC para channelar R"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps que apilan curación (Soraka, Vladimir, Dr. Mundo) — Grievous Wounds capa el sustain"
  base_combo: ["W", "E", "Q", "AA", "R"]
  win_condition: "Consigue una kill o assist en la laning phase y haz snowball: cada takedown resetea el kit completo vía Voracity, así que una kill en lane se convierte a menudo en doble kill en la siguiente wave."
  weakness: "El hard CC interrumpe la R y convierte el channel en tiempo perdido. Sin un takedown que resetee cooldowns es un melee de corto alcance con un solo blink: los magos a larga distancia la castigan gratis."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8140, name: "Grisly Mementos", icon_path: "perk-images/Styles/Domination/GrislyMementos/GrislyMementos.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination primaria: Electrocute proca en cada cadena W-E-Q (3 hits distintos en 3 segundos) para burst gratis. Sudden Impact se activa justo después de cada Shunpo (el blink). Ultimate Hunter recorta segundos a Death Lotus en cada takedown — y Voracity hace el resto."
    secondary_rationale: "Precision secundaria: Triumph cura el 12% de HP que falta en cada takedown, así encadenas una segunda kill sobre el kit reseteado. Coup de Grace añade +8% de daño bajo el 40% de HP — la ventana exacta donde la R cierra peleas."
    secondary_alternative: "Si el equipo rival lleva mucho poke mágico (Xerath, Vel'Koz, Ziggs), cambia Precision por Resolve con Second Wind (regen vs poke) y Overgrowth (HP scaling extra) para sobrevivir la laning hasta el primer takedown."
matchup_draft:
  pick_into:
    - examples: ["veigar", "twisted-fate", "anivia"]
      archetype: "Magos inmóviles sin dash"
      reason: "No pueden salir de la burst window W-E-Q de Katarina. Una vez gastada su habilidad de setup (jaula de Veigar, gold card de TF, E de Anivia) no tienen respuesta a un Shunpo all-in."
    - examples: ["lux", "orianna"]
      archetype: "Magos a media distancia sin escape"
      reason: "Ambos viven del posicionamiento detrás de los minions. Katarina blinkea a un Dagger más allá de la wave, las elimina con W-E-Q-AA y resetea sobre la kill al siguiente target."
    - examples: ["karthus"]
      archetype: "Scaler farm-heavy sin sustain ni hard CC"
      reason: "Karthus necesita ventanas de farm tranquilas. La presión de reset de Katarina lo obliga a quemar Flash y a perder el scaling tardío que es su única win condition."
  counterpicks:
    - examples: ["annie", "lissandra"]
      archetype: "Magos con hard CC point-and-click"
      reason: "Su stun es instantáneo y no se esquiva: cancela Death Lotus a mitad de channel y convierte a Katarina en un saco quieto mientras todo el equipo enemigo le cae encima."
    - examples: ["xerath", "vel-koz"]
      archetype: "Magos de artillería a larga distancia"
      reason: "Pokean a Katarina fuera del rango de su Q (625) los primeros 5 niveles. Llega al level 6 ya al 40% de HP, sin reset disponible, y muere a una sola rotación de skillshots."
    - examples: ["diana", "pantheon"]
      archetype: "Burst all-in midlaners con engage point-and-click"
      reason: "El combo Q-R de Diana y el stun W de Pantheon impactan antes de que Katarina pueda dejar caer su propio Dagger de W. Pierde la trade race y los power spikes de items."
---

## Resumen

Katarina es una assassin AP melee construida en torno a su pasiva **Voracity**: cada takedown (kill o assist) reduce drásticamente todos los cooldowns restantes de sus habilidades. Esa única mecánica es la identidad entera del campeón — una kill en lane le refresca el kit completo, así que un takedown a menudo se convierte en doble en la siguiente wave. La mid lane le encaja porque necesita rotaciones cortas para encadenar resets a través del mapa.

Su game plan se cuenta sencillo y se ejecuta duro. Suelta un Dagger con **W** o usa el que cae detrás de **Q**, blinkea sobre él con **E** para el daño AOE, luego empieza a tirar auto-attacks y suelta la **R** cuando el rival quede a baja vida. La skill expression se reparte en dos puntos: el orden de cast **W-E-Q** (debes soltar el Dagger antes del blink, no después) y **cuándo** channelar la **R** — pre-engage te cancela cualquier stun, post-engage limpias una pelea con cadenas de reset.

## Build Recomendada

**Items iniciales:** Doran's Ring + 2 Health Potions. Salta Doran's Shield incluso en matchups ranged: el AP y la regen de maná te ganan más trades de los que la HP te ahorra.

**Items core (en orden):**

1. ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** — primer item spike. Añade un segundo dash corto (active) sobre Shunpo, así engaganchas a un target que ya quemó su escape. AP y HP para sobrevivir al counter-engage.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plana. Botas por defecto; cambia a Mercury's Treads contra mucho CC.
3. ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — burst spike que se alinea perfectamente con la cadena W-E-Q. La pasiva por umbral de HP (se activa cuando bajas al enemigo de un cierto HP) te da el burst extra para cerrar targets sin necesitar la R.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de scaling late-game. Tu slot con más AP; el +30% AP convierte a Katarina de "snowball assassin" en "one-shot a cualquier squishy".
5. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — magic penetration extra que escala con los HP que le faltan al objetivo. Encaja de maravilla con Stormsurge y la R para rematar targets a baja vida durante una pelea.
6. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — cómpralo en cuanto cualquier target prioritario complete un item de Magic Resist.

**Items situacionales:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra hard-engage (Malphite R, Zac, Amumu). La stasis cancela el engage que de otro modo te interrumpiría el channel de R.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico single-target que cancela la R (stun de Annie, R de Lissandra, gold card de Twisted Fate). El escudo come una habilidad y el channel sobrevive.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — sustituye Sorcerer's Shoes cuando el equipo rival lleva 2+ stuns o roots que cancelan Death Lotus.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra comps que apilan curación (Soraka mid, Vladimir, Dr. Mundo top). Capa el sustain enemigo para que una kill se quede en kill.

**Botas:** Sorcerer's Shoes por defecto. Mercury's Treads es el swap cuando el equipo rival tiene hard CC; Ionian Boots of Lucidity rara vez es correcto porque Voracity ya te regala los cooldowns.

**Skill order:** Maxea **Q** primero (waveclear y daño principal), **W** en segundo lugar (el dagger que ancla cada combo), **E** al final. Punto en **R** a niveles 6, 11 y 16.

**Runas:** Primaria **Domination** con **Electrocute**, **Sudden Impact**, **Grisly Mementos**, **Ultimate Hunter**. Secundaria **Precision** con **Triumph** y **Coup de Grace**. La keystone (la runa principal en lo alto de la página) proca de forma natural en la cadena W-E-Q porque tocas al objetivo con 3 instancias de daño separadas.

## Matchups clave

- **Annie:** El matchup más duro. Su stun es point-and-click y cancela Death Lotus al instante. Compra ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** como segundo item si la lane va mal. Pre-6 quédate detrás de la wave y farma con **Q**; nunca blinkees dentro hasta que tenga el stun en cooldown.
- **Lux:** Matchup favorable una vez llegues al level 6. Pre-6 su **Q** te supera en rango, así que juega detrás de los minions y esquiva. Después del 6, blinkea a un dagger en sidewave y fúndela — no tiene dash para escapar.
- **Zed:** Skill matchup. Tiene el mismo patrón de all-in con más disengage (su **R** lo hace untargetable durante 0.5s, rompiendo tu channel). Aguanta la **R** hasta que él use la suya; si sobrevives a su combo, reseteas sobre la kill.
- **Twisted Fate:** Counter-pick claro. Pre-6 lo superas en push; después del 6, cuando intente roamear, blinkea a un dagger sobre la wave y bórralo porque no tiene item defensivo. Vigila su **R** con wards en mid.
- **Diana:** Hard counter. Su combo **Q-R** te proca antes de que la **W** haya dejado caer el dagger. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** como tercer item; nunca blinkees sobre ella bajo torre sin él.

## Power spikes y condiciones de victoria

- **Nivel 2:** Con **Q** y **E** ya puedes tradar. Suelta **Q**, camina hasta el rango del rebote, blinkea **E** sobre el dagger que cae para el daño AOE y sal andando. Poke gratis si lo haces a cooldown.
- **Nivel 6:** Primera **Death Lotus**. Con Voracity, una kill o assist resetea el channel y duplica tu daño en escaramuzas — las peleas pre-6 duraban 4 segundos; post-6, un takedown puede extender una pelea a 10s de resets cíclicos.
- **![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) Hextech Rocketbelt completado (~minuto 11-13):** Primer item spike importante. El active dash te da una segunda herramienta de movilidad, así engaganchas a un target que ya quemó su escape (Flash, **E** de Lux, **E** de Yasuo). La presión de roam se dispara aquí.
- **![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) Stormsurge online (~minuto 18-22):** Tu combo W-E-Q-AA ahora one-shotea a cualquier squishy bajo el 70% de HP sin R. Este es el timing en el que fuerzas peleas por objetivo y buscas picks en las side lanes.

## Errores comunes

- **Channelar la R pre-engage.** El hard CC interrumpe Death Lotus y desperdicia el cooldown. Usa la **R** post-engage: después de que el tank de tu equipo engage, después de que el frontline rival haya quemado su CC, channeleas desde una posición segura para limpiar. Pre-engaging con **R** queda reservado para rematar a un target a baja vida que no tiene forma de interrumpirte.
- **Blinkear E primero y soltar W después.** El orden de cast es **W → E → Q**. El dagger debe estar en el suelo (o a punto de aterrizar) cuando blinkees, si no, no lo recoges y pierdes tanto el daño AOE de la pasiva como la reducción de cooldown sobre Shunpo.
- **Ser codicioso con el reset sobre un target que no puedes rematar.** Si el rival está al 35% de HP pero su compañero le está al lado, la kill no triggerea Voracity a tiempo y mueres al follow-up. Disengaga con el Move Speed de **W**, espera los cooldowns a la antigua.
- **Gastar Shunpo en minions para waveclear.** Necesitas la **E** como herramienta defensiva de escape. Empuja waves con **Q** y auto-attacks; solo blinkees a un minion si te comprometes a un fight o estás escapando.
- **Pickear Katarina contra doble CC point-and-click.** Si el equipo rival lleva Annie + Leona, tu **R** no se resuelve nunca. O dodgeas en champ-select o aceptas jugar alrededor de sus cooldowns: blinkea solo cuando hayan quemado los stuns en otro.

## Consejo avanzado

Usa la **E** sobre wards enemigos para escapar de ganks. El blink funciona sobre cualquier ward visible — incluyendo trinkets enemigos y pinks colocados en tu lado del río. Detecta un Stealth Ward en el tri-bush antes de que llegue un gank y tienes una herramienta de escape gratuita que no aparece en el mapa enemigo: la mayoría de rivales colocan wards hacia adelante sin darse cuenta de que te están dando una salida. La jugada espejo también funciona: si ves un ward enemigo cerca de tu torre mientras vuelves a base, reposiciona el inicio del próximo gank para evitarlo.
