---
title: "Kai'Sa ADC Build & Guía — Patch 16.9"
slug: "kaisa-bot"
language: "es"
patch: "16.9"
champion: "kaisa"
role: "bot"
last_updated: "2026-05-05"
description: "Guía Kai'Sa ADC bot lane patch 16.9: gestión de stacks de Plasma, build hybrid Kraken con evolves, matchups clave, power spikes, errores comunes y un truco avanzado."
quick_learn:
  champion_dd_id: "Kaisa"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hybrid"
  abilities:
    - key: "P"
      name: "Second Skin"
      description: "Los auto-attacks acumulan Plasma sobre el objetivo; el CC inmovilizante de los aliados añade stacks extra. Además, los items que compras evolucionan Q/W/E al cruzar umbrales ocultos de AD/AP/Attack Speed."
      dd_spell_id: "Kaisa_Passive"
    - key: "Q"
      name: "Icathian Rain"
      description: "Dispara 6 misiles que se reparten entre los enemigos cercanos (rango 600). Los impactos repetidos sobre el mismo objetivo hacen daño reducido. Evoluciona a ~100 bonus AD: 12 misiles en vez de 6."
      dd_spell_id: "KaisaQ"
    - key: "W"
      name: "Void Seeker"
      description: "Misil lineal de largo alcance (3000 unidades). Marca al primer enemigo golpeado con 2 stacks de Plasma y lo revela 4s. Evoluciona a ~100 AP: 4 stacks y 50% de cooldown refund al impactar campeón."
      dd_spell_id: "KaisaW"
    - key: "E"
      name: "Supercharge"
      description: "Channel de ~1.5s con bonus Move Speed y Ghosted (atraviesa unidades), luego 4s de Attack Speed elevado. Los auto-attacks reducen su cooldown. Evoluciona a 60% bonus Attack Speed: invisibilidad breve."
      dd_spell_id: "KaisaE"
    - key: "R"
      name: "Killer Instinct"
      description: "Dash junto a un campeón enemigo con 5 stacks de Plasma (o totalmente ruptured por Plasma). Da un escudo al llegar. Se usa para rematar un objetivo ya chip-killed, no para engagear."
      dd_spell_id: "KaisaR"
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
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3124", name: "Guinsoo's Rageblade" }
    - { dd_id: "3031", name: "Infinity Edge" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contra HP/armor stackers (Cho'Gath, Sion, Malphite, Ornn): el armor pen porcentual ignora una parte fija de la armadura"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contra comps con healing acumulado (Soraka, Vladimir, Aatrox): aplica Grievous Wounds (corta a la mitad la curación)"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra burst AP fuerte (Syndra, Veigar, Brand support): magic resist + escudo bajo 30% HP"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "contra poke prolongado (Ezreal, Caitlyn, Xerath): el lifesteal cura mid-fight y el overheal queda como escudo"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "contra assassins o divers (Zed, Kha'Zix, Talon): la Ghost passive atraviesa unidades mientras kiteas"
  base_combo: ["W", "AA", "Q", "E", "AA"]
  win_condition: "Apila Plasma con W y auto-attacks sobre el carry de la backline, R-dasha encima cuando llegue a 5 stacks y remata con Q + AAs potenciados mientras la E te da la ventana de Attack Speed."
  weakness: "La R necesita stacks de Plasma sobre el objetivo: sin W acertando o CC aliado no tienes engage. Squishy sin dash antes de la R; si fallas el timing de E comes el burst entero antes de la invisibilidad."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 9923
      name: "Hail of Blades"
      icon_path: "perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png"
    primary_slots:
      - { dd_id: 8139, name: "Taste of Blood", icon_path: "perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
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
    primary_rationale: "Domination + Hail of Blades: 3 auto-attacks ultrarrápidos justo después del dash de R precargan stacks de Plasma y el proc de true damage de Kraken Slayer. Taste of Blood da sustain en lane, Sixth Sense revela wards, Ultimate Hunter baja el cooldown de R."
    secondary_rationale: "Precision como secundario: Triumph cura el 12% del HP que falta en cada takedown (kill o asistencia), convirtiendo la R-into-fight en un escape seguro. Coup de Grace suma 8% de daño bajo 40% HP."
    secondary_alternative: "Contra lanes de poke pesado (Caitlyn + Lux, Ezreal + Karma) cambia Precision por Resolve con Second Wind (regen al recibir daño de campeones) y Overgrowth (HP por minion absorbido) para sustain."
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "ashe", "sivir"]
      archetype: "Marksmen inmóviles sin dash"
      reason: "Cuando Kai'Sa entra a rango de R con 5 stacks de Plasma, los ADC inmóviles no pueden escapar del dash + Q burst. Tienen que sobrevivir al primer all-in (intercambio total apuntando a la kill) sin ninguna herramienta de reposición."
    - examples: ["senna", "kog-maw"]
      archetype: "Carries scaler de late-game sin escape"
      reason: "La W tiene 3000 unidades de rango y los revela durante 4s — Kai'Sa los pokea fuera de la wave desde fuera de su threat range, y luego Rea en cuanto Plasma rupture al objetivo."
    - examples: ["sona", "soraka", "yuumi"]
      archetype: "Enchanters squishy sin hard CC"
      reason: "Estos supports no tienen stun ni knock-up para peelar un dive a la backline. Kai'Sa Rea sobre el ADC y el support no tiene nada para interrumpir el all-in cuando entra la invisibilidad de la E evolved."
  counterpicks:
    - examples: ["draven", "lucian"]
      archetype: "Bullies de lane con más auto-attack damage early"
      reason: "Ambos ganan los trades a Kai'Sa entre niveles 1-3, antes del umbral de evolve de Q. Las axes potenciadas de Draven y el double-shot passive de Lucian ganan cada ventana corta de trade antes de que Kai'Sa escale."
    - examples: ["leona", "nautilus", "pyke"]
      archetype: "Supports de hard engage con CC point-and-click"
      reason: "Kai'Sa no tiene dash antes de R, y la R necesita un objetivo con Plasma. Una E de Leona o Q de Nautilus la fija en mid-lane antes de que apile un solo stack — el chain CC la mata antes de que la invisibilidad de la E evolved entre online."
    - examples: ["vayne", "twitch"]
      archetype: "Hyper-scalers de late-game que superan en DPS a Kai'Sa post-3-items"
      reason: "El true damage de la W de Vayne y el Expunge de Twitch escalan más fuerte que el scaling hybrid de Kai'Sa una vez ambos equipos tienen 3 items. Kai'Sa tiene que cerrar antes del minuto 30 o su daño relativo cae."
---

## Resumen

Kai'Sa es un marksman hybrid: una campeona que escala con AD (daño de auto-attack) y AP (daño de habilidades) a la vez, en lugar de apilar solo una stat. Es la única ADC (attack damage carry: ranged auto-attacker que se vuelve la fuente principal de daño del equipo en late) cuyas habilidades literalmente se mejoran solas al cruzar umbrales ocultos de items: 100 bonus AD evoluciona Q, 100 AP evoluciona W, 60% bonus Attack Speed evoluciona E. El orden de build importa más que en cualquier otro marksman — el orden incorrecto significa que un evolve nunca dispara, y una Kai'Sa sin E evolved (sin invisibilidad en el dash) es media campeona.

Su game plan es un puzzle de stacks: cada auto-attack pone Plasma sobre el objetivo, y cuando este llega a 5 stacks (o se ruptura totalmente por Plasma) la **R** se desbloquea como dash de largo alcance encima de él. El CC del support (Crowd Control: stuns, slows, roots que bloquean al enemigo en su sitio) acelera el conteo gratis. En lane pokea (chip damage a distancia para drenar HP sin comprometerse a una pelea) con **W** a 3000 unidades; en teamfights (peleas 5v5 que deciden objetivos como Drake o Baron — monstruos neutrales que dan buffs de equipo) se queda a max rango AA hasta que un objetivo de la backline está chip-killed, y luego entra con **R** + invisibilidad de la **E** evolved para limpiar. El skill ceiling está en la elección de target de la **R**.

## Build Recomendada

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** (algo de AD + lifesteal — cura una parte del daño hecho) + 1 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**.

**Core items (en orden):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — primer power spike (el momento en que un campeón se vuelve notablemente más fuerte al completar un item). Da AD + Attack Speed; la passive Bring It Down hace true damage extra cada tercer hit, lo que carga daño en la ventana corta de burst justo después de la R.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — boots de attack speed. Te empujan hacia el umbral de 60% bonus Attack Speed que evoluciona la E.
3. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — añade dos flechas laterales a cada auto-attack y más Attack Speed. Las flechas laterales aplican Plasma a los enemigos cercanos, así que en teamfight Kai'Sa apila Plasma sobre todo el equipo enemigo mientras AAea solo a un objetivo. Este item completa el evolve de E.
4. ![Guinsoo's Rageblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3124.png) **Guinsoo's Rageblade** — da AD, AP y Attack Speed en un solo slot. La forma más barata de cruzar el umbral de 100 AP que evoluciona la W (cooldown refund + 4 stacks de Plasma por cast). Phantom Hit cada tercer AA mete más on-hit damage.
5. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — multiplicador de crit de late-game (critical strike: probabilidad de que un AA haga ~175% de daño). Combinado con los dos proyectiles extra de Runaan's, cada AA tira 3 chances de crit a la vez.

**Situational items:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contra HP/armor stackers (Cho'Gath, Sion, Malphite, Ornn). Reemplaza ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** como quinto item si el equipo enemigo tiene 2+ tanks.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contra comps con healing acumulado (Soraka, Vladimir, Aatrox). Aplica Grievous Wounds (efecto que corta a la mitad la curación recibida).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contra burst AP fuerte (Syndra, Veigar, Brand support — un burst mage te borra en 1-2 segundos con un solo combo). Magic resist + escudo bajo 30% HP te compra el segundo R que necesitas para escapar.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — contra poke pesado. El lifesteal cura mid-fight; en overheal almacena HP como escudo temporal.
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — contra assassins o divers (Zed, Kha'Zix, Talon — campeones diseñados para divear sobre la backline). Su Ghost passive te deja atravesar minions y campeones enemigos mientras kiteas (moverse hacia atrás mientras atacas).

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** es la única opción correcta. El attack speed alimenta directamente el evolve de E y el DPS de la Q multi-misil durante los combos post-R.

**Skill order:** Maxea **Q** primero (DPS principal, evolve más importante). Maxea **E** segundo (más cooldown reduction y ventana de Attack Speed más larga). Maxea **W** al final (utility solo — rango largo + stacks de Plasma, pero el peor base damage por skill point). Coge **R** a niveles 6, 11, 16.

**Runes:** Primary tree **Domination** (el árbol del burst-AA) con **Hail of Blades** (3 auto-attacks ultrarrápidos en cuanto empiezas a AAear a un campeón), **Taste of Blood** (cura 18-30 HP al dañar a un campeón cada ~20s), **Sixth Sense** (un ping wallhack que revela una ward enemiga cada ~75s), **Ultimate Hunter** (corta hasta 25% del cooldown de R según haces takedowns). Secondary tree **Precision** con **Triumph** (cura en takedown — kill o asistencia) y **Coup de Grace** (daño extra contra enemigos bajo 40% HP).

## Matchups clave

- **Caitlyn:** Te out-rangea fuerte al nivel 1 (650 AA contra 525). Quédate detrás de tu línea de minions y solo da un step adelante cuando coloque una trap (queda animation-locked al ponerla). Power-farma con seguridad (concéntrate solo en el gold de los minions, sin riesgos) hasta completar ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer**; luego busca picks cross-map con W una vez puedas dashear con R.
- **Draven:** Pierde la guerra de AAs directa — sus axes Q hacen mucho más por AA que tu basic. Evita los trades 1-por-1; comprométete solo cuando sus axes caen al suelo (las pierde con un timer de 2.5s). Guarda **W** como herramienta de poke hasta que ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** esté online.
- **Lucian:** Pierde contra Kai'Sa post-6 pero la bullea entre niveles 2-5 con el double-shot passive. Esquiva su **Q** entre minions, guarda **E** como pánico de disengage (habilidad que rompe el all-in del enemigo). Mantén prioridad en lane farmando bajo torre hasta el nivel 6, luego busca all-in al siguiente error suyo.
- **Vayne:** Kai'Sa gana la lane early (Vayne es melee hasta sus 3 items). Empuja la wave (manda tus minions hacia su torre) cada vez que puedas, harassa (hacer chip damage para drenar HP) con **W** cada cooldown. Después del minuto 25 ella escala más, así que cierra la partida en mid-game o se inclina a su favor.
- **Jhin:** Matchup de poke a larga distancia. Su **W** es un slow root de 3550 unidades que ignora tu dodge si pega a un minion antes. Quédate detrás de tu primera línea de minions y nunca tradees durante su reload window — está más fuerte con el cargador lleno y más débil en los 2.5s tras el cuarto disparo.

## Power spikes y condiciones de victoria

- **Nivel 6:** la primera **R** abre intentos de pick (eliminar a un enemigo solo fuera de teamfight) sobre objetivos de lane chip-killed. Acierta **W** + 2 AAs sobre el ADC enemigo, y luego dasha con **R** en cuanto pise hacia adelante para last-hittear (auto-attack del golpe final a un minion).
- **![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer (~ minuto 12-14):** la prioridad de lane se voltea. Puedes shovear (empujar la wave rápido) con Q y luego roamear (dejar la lane para ayudar a los aliados) para plays cross-map en Drake o skirmishes en mid (peleítas 2-3 jugadores en river o jungla).
- **Q evolve (~ minuto 22-24, después de ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer + ![Guinsoo's Rageblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3124.png) Guinsoo's Rageblade):** Q ahora dispara 12 misiles en lugar de 6 — el burst single-target a campeones casi se duplica. Forza teamfights en cada objetivo.
- **E evolve (Berserker's + Runaan's + Guinsoo's completos):** la E ahora da invisibilidad breve durante el channel. Es la diferencia entre dashear con R y morir al instante, y dashear con R y conseguir la kill — la invisibilidad te hace untargetable durante ~0.5s tras el dash, suficiente para dodgear el follow-up CC.

## Errores comunes

- **Tirar la R sin stacks de Plasma listos.** La R necesita un target con 5 stacks de Plasma. Si la pulsas sobre uno con 0-2 stacks, el spell no hace nada y entra en cooldown completo. Siempre W-y-luego-AAs, mira el indicador de Plasma sobre la barra de HP del objetivo, y luego comprometes la R.
- **Rear al 100% HP dentro del equipo enemigo.** La R es un finisher, no un engage. El escudo de R es pequeño (~110 + 25% bonus HP) y dura 2s — mueres al instante si la front line enemiga sigue en pie. Espera al menos a uno de: target bajo 40% HP, CC enemigo en cooldown, o tu equipo ya encima de él.
- **Sobrepushear la wave sin vision.** Kai'Sa no tiene escape integrado hasta que E evoluciona en el minuto 22+. Si pusheas más allá del mid-river sin que tu support warde tribush (cespedillos pequeños que bloquean la vision) y river, el jungler enemigo te mata gratis.
- **Saltar ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) Berserker's Greaves por boots más tankys.** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** parecen tentadoras contra un equipo AD-pesado, pero retrasan el umbral de 60% Attack Speed que evoluciona la E. Sin evolve = sin invisibilidad = tu R es una sentencia de muerte.
- **Guardar la E para engagear ofensivamente.** El valor principal de E es la breve ventana de Ghost (atraviesa unidades) + Attack Speed durante una pelea. Pulsa E **después** de la R, no antes — la invisibilidad de la E evolved entra al inicio del channel, así que castearla desde un sitio seguro desperdicia los frames de inmunidad.

## Consejo avanzado

El finisher de **flash R** funciona al revés de cómo se juega Kai'Sa normalmente. Cuando un ADC enemigo escapa con poco HP hacia la fog of war (las partes del mapa que ahora mismo no ves) y tu **R** te dashearía fuera de posición, **Flash** (summoner spell que te teletransporta 400 unidades en una dirección elegida) hacia él primero para entrar en rango de R, y luego R inmediatamente. Quema Flash pero convierte una casi-fuga en una kill garantizada en rangos altos. El truco: bufferiza el cast de R 0.1s después del Flash manteniendo pulsado el botón de R — el input buffer de League dispara la R justo cuando Flash aterriza, así el enemigo nunca ve venir el dash.
