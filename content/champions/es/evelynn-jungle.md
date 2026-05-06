---
title: "Evelynn Jungle Build & Guía — Patch 16.9"
slug: "evelynn-jungle"
language: "es"
patch: "16.9"
champion: "evelynn"
role: "jungle"
last_updated: "2026-05-02"
description: "Guía de Evelynn jungle para League of Legends Patch 16.9: ruta de gank con Demon Shade Camouflage, build core con Lich Bane, matchups clave, power spikes y errores comunes."
quick_learn:
  champion_dd_id: "Evelynn"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Assassin / Stealth Jungler"
  abilities:
    - key: "P"
      name: "Demon Shade"
      description: "Fuera de combate Evelynn entra en Demon Shade. Se cura con poco HP y obtiene Camouflage desde nivel 6 — invisible a wards y a enemigos fuera de un radio corto."
      dd_spell_id: "Evelynn_Passive"
    - key: "Q"
      name: "Hate Spike"
      description: "El Lasher de Evelynn golpea al enemigo más cercano y luego dispara hasta tres ráfagas de spikes a objetivos cercanos. Clear de jungla y DPS principal en combo."
      dd_spell_id: "EvelynnQ"
    - key: "W"
      name: "Allure"
      description: "Maldice a un enemigo. Tras un breve delay, el siguiente ataque o hechizo de Evelynn aplica charm y reduce su resistencia mágica. Lánzala desde Demon Shade para el setup más limpio."
      dd_spell_id: "EvelynnW"
    - key: "E"
      name: "Whiplash"
      description: "Dash sobre el objetivo, daño mágico y un breve move speed. Desde Demon Shade pasa a ser un salto largo con daño bonus y reset del autoataque."
      dd_spell_id: "EvelynnE"
    - key: "R"
      name: "Last Caress"
      description: "Breve ventana untargetable y luego un cono de daño mágico masivo frente a ella antes de un blink hacia atrás. Daño bonus bajo el 30% HP — tu execute."
      dd_spell_id: "EvelynnR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "E" }
    - { level: 11, key: "R" }
    - { level: 12, key: "E" }
    - { level: 13, key: "E" }
    - { level: 14, key: "W" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "3100", name: "Lich Bane" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3135"
      name: "Void Staff"
      against: "cuando 2+ enemigos compran cualquier item de Magic Resist — penetración mágica porcentual que escala con su MR"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra lockdown single-target que castiga la animación de tu R (Veigar cage, Lissandra R, Malzahar R)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps que apilan curaciones (Soraka, Vladimir, Dr. Mundo, Aatrox) — Grievous Wounds, mitad de cura"
  base_combo: ["W", "AA", "E", "Q", "R"]
  win_condition: "Pickoff sobre enemigos aislados post-6 con W charm en R execute. Camouflage de Demon Shade para invadir y gankar sin aviso de visión. Snowball del lead de jungla y caza squishies."
  weakness: "Pre-6 cero presión de gank — sin Camouflage, sin rango de charm. Counter duro de Control Wards y prio de calle. Si los enemigos se agrupan con peel, no llegas a la carry."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8128
      name: "Dark Harvest"
      icon_path: "perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination primaria: Dark Harvest hace snowball con pickoffs aislados — el plan de Evelynn. Sudden Impact procea tras el warp de R y el W charm para más burst. Sixth Sense revela wards y mantiene útil la Camouflage. Ultimate Hunter recorta el CD de la R."
    secondary_rationale: "Sorcery secundario sobre Inspiration o Resolve: Evelynn necesita escalado puro de AP para reventar a la carry, no utility. Manaflow Band sostiene el maná para spam de Q en clear, Gathering Storm da AP gratis cada 10 minutos para el W+R one-shot del late."
    secondary_alternative: "Si el enemy team tiene 4+ squishies y poco peel, cambia Sorcery por Precision con Presence of Mind (refund de maná en takedown) y Coup de Grace (+8% daño bajo 40% HP) para encadenar executes más rápido."
matchup_draft:
  pick_into:
    - examples: ["jinx", "twitch", "kog-maw"]
      archetype: "Hyper-carries inmóviles"
      reason: "Carries sin dash ni blink mueren al instante a W charm en R: no tienen herramienta para salir del cono de tu warp untargetable antes de que aterrice."
    - examples: ["soraka", "yuumi", "seraphine"]
      archetype: "Healers de backline sin escape"
      reason: "Una vez llegas a su backline con la Camouflage de Demon Shade, estas enchanters mueren en un W+R antes de poder lanzar su kit defensivo."
    - examples: ["master-yi", "karthus", "amumu"]
      archetype: "Junglers de farm lento"
      reason: "Junglers que quieren farmear y escalar: Evelynn invade, roba camps y gankea con Camouflage post-6, forzándolos a defender en lugar de escalar."
  counterpicks:
    - examples: ["lee-sin", "kha-zix", "rengar"]
      archetype: "Duelistas early-game con lethality"
      reason: "La Q de Lee Sin y el leap de Rengar cubren distancia antes de nivel 6 — sin Camouflage ni R, Evelynn pierde las invades pre-6 y los 1v1 sin remedio."
    - examples: ["lulu", "tahm-kench", "morgana"]
      archetype: "Enchanters que peelan a la carry"
      reason: "La R de Lulu vuelve invulnerable a la carry, Tahm Kench se la traga, la E de Morgana le da Spell Shield: cada una cancela la combo W+R justo cuando debería matar."
    - examples: ["nautilus", "leona", "thresh"]
      archetype: "Supports con visión y CC de engage"
      reason: "Compran Control Ward al primer back, te ven en Demon Shade en línea, y la cadena de CC (Naut Q, Leona E+R) cae antes de que salga tu W charm."
---

## Resumen

Evelynn es la única campeona en League con un stealth incorporado que escala por nivel: desde nivel 6 su pasiva **Demon Shade (P)** le da Camouflage fuera de combate, lo que significa que los enemigos no la ven a menos que estén dentro de un radio pequeño alrededor de ella — ni siquiera los Control Wards (los trinkets rosa especiales que los enemigos colocan para revelar stealth) la detectan a distancia completa. Toda su identidad se apoya en esto. Es una asesina de daño mágico sin verdadero waveclear ni poder de duelo antes del 6, pero en el momento que se desbloquea **Last Caress (R)** se convierte en el jungla de pickoff (campeón construido para eliminar a un enemigo aislado a la vez, fuera de los teamfights completos) más fiable del juego: caminas invisible hasta la backline enemiga (la parte trasera de la formación donde suelen estar las carries squishies — campeones de mucho daño y poca defensa), aplicas charm a la carry con **Allure (W)** y la borras en una sola combo antes de que cualquier peel (habilidades de aliados que protegen a la carry, como el escudo de Janna o la ult de Lulu) pueda reaccionar.

El plan de partida es brutal en su simplicidad: farmea hasta 6 sin morir, busca un gank en una línea de bajo HP que no tenga wards de visión cerca (ojos invisibles pequeños que los aliados colocan para ver la fog of war), y desde entonces caza un objetivo aislado cada vez que la **R** esté lista. La expresión de skill está en leer el pathing (¿por dónde puedes caminar Camouflaged sin pisar un ward?) y en el timing del commit (no te comprometas con la **R** si la carry tiene una summoner de peel como Cleanse o un peeler como Lulu cerca). Si snowball los primeros dos picks (transformar una ventaja temprana en más kills, más oro, más items), el equipo enemigo se agrupa, tú escalas (ganas poder a medida que se acumulan ítems y niveles) hasta el rango de one-shot con ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap**, y cierras la partida desde la invisibilidad.

## Build Recomendada

**Items iniciales:** ![Emberknife](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1035.png) **Emberknife** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Starter estándar de jungla cuerpo a cuerpo — sin excepción para Evelynn.

**Items core (en orden):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade de Emberknife (auto-evoluciona alrededor del minuto 3-4 cuando la mascota de jungla ha comido suficientes monstruos). El compañero para burst de AP (Ability Power, la stat que escala el daño mágico): añade un efecto de daño mágico que se activa (un "proc") en el autoataque justo después de un hechizo, alineándose perfectamente con **Lich Bane** más tarde.
2. ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** — el spike firma de Evelynn. Cada vez que lanzas un hechizo, tu siguiente ataque básico añade un golpe bonus enorme de daño mágico, y el charm de **W** + el reset del autoataque de **E** (efecto que te deja disparar un nuevo ataque básico al instante, ignorando el delay normal de attack speed) significa que puedes encadenar dos procs de **Lich Bane** en menos de un segundo.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — penetración mágica plana (resta una cantidad fija de la magic resist del objetivo, haciendo que tus hechizos peguen más). Estándar para cualquier AP burster que va a por squishies.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — AP y magic penetration extra; la pasiva con umbral de HP (pasiva que se activa cuando el objetivo está bajo un umbral bajo de HP, alrededor del 35%) se alinea exactamente con el cono de execute de tu **R**.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador late-game sobre todo tu AP. El cuarto o quinto slot es donde Evelynn entra en rango "one-shot a la carry desde HP completo".

**Items situacionales:**

- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — en cuanto 2 o más enemigos compren cualquier item de magic resist.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra lockdown single-target (Veigar cage, Lissandra R, Malzahar R). La stasis cubre los recovery frames después de la **R**.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra comps que apilan curación (Soraka, Vladimir, Dr. Mundo, Aatrox). Aplica Grievous Wounds, dividiendo a la mitad la curación recibida.

**Botas:** Sorcerer's Shoes por defecto. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** son aceptables solo cuando el equipo enemigo tiene muy poca magic resist y tu equipo necesita más uptime de **R** (casts más frecuentes) como finisher de fight.

**Skill order:** Maxea **Q** primero (clear de jungla y DPS principal), **E** segundo (movilidad y escalado de daño con reset), **W** al final (el cooldown importa más que el rank). Pon punto en **R** en niveles 6, 11, 16.

**Runas:** Primaria **Domination** con **Dark Harvest**, **Sudden Impact**, **Sixth Sense**, **Ultimate Hunter**. Secundaria **Sorcery** con **Manaflow Band** y **Gathering Storm**. Stat shards: Adaptive Force, Adaptive Force, Health Scaling. Cambia la secundaria a **Precision** (Presence of Mind + Coup de Grace) cuando el equipo enemigo es casi todo squishy y quieres consistencia en el execute.

## Matchups clave

- **Lee Sin / Rengar (jungla enemigo):** Amenazas de invade pre-6. No contestes scuttle nivel 3 — trackéalos con visión y haz full clear seguro. En cuanto llegas al 6 el matchup se da la vuelta: caminas a su jungla en Camouflage y gankeas las líneas que no han wardado.
- **Lulu (support enemigo):** El peel más duro del juego para una asesina. Quema su **R** con un fake commit (empieza tu **W** charm pero retírate si ulta), luego re-engagea sobre el objetivo cuando la ult de Lulu esté en cooldown.
- **Tahm Kench (support enemigo):** Se traga a la carry con **W** en el instante en que tu **R** aterriza. Espera a que use **W** sobre otra cosa (una oleada de minions, un tank en engage), luego comprométete. Si está full mana mirando a su ADC, busca otro objetivo.
- **Karthus (jungla enemigo):** Carrera de scaling. Él te supera en farm, tú a él en pickoffs. Si Karthus llega a nivel 16 con full items pierdes: fuerza ganks cada minuto que su **R** esté abajo para negar scaling y cierra antes del minuto 30.
- **Pyke (support enemigo):** Hard counter a tu patrón típico de "execute a bajo HP". Su **R** también executa a HP bajo, y sus roams ponen tus pathings de jungla bajo presión de visión. Compra ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** antes de lo habitual para esquivar su ventana de execute después de comprometerte.

## Power spikes y condiciones de victoria

- **Nivel 6 (primer R desbloqueado):** Aquí empieza tu partida real. Demon Shade gana Camouflage, la **R** se desbloquea, y cualquier línea sin wards de visión (los pequeños ojos invisibles que los aliados colocan para ver la fog of war) es kill gratis. Pathea hacia la línea con los enemigos a HP más bajo.
- **![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) Lich Bane completo (~ minuto 12-14):** El salto de "necesita 2 hechizos para matar" a "mata con una combo W+AA+E+Q+R sobre un squishy" sucede en este ítem exacto. Caza pickoffs en cuanto se termina.
- **![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) Shadowflame (~ minuto 18-20):** La pasiva con umbral de HP se alinea con el cono de execute de tu **R**. Después de este ítem, cualquier squishy bajo 60% HP está muerto en una combo.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 26-30):** Rango completo de one-shot sobre carries de backline desde 100% HP. Fuerza un 5v5 alrededor de Baron en cuanto Deathcap se termine — tu equipo empieza el fight 5v4 en el instante en que tu combo aterriza.

## Errores comunes

- **Gankear pre-6 porque tu equipo pingea.** No tienes rango de charm, ni Camouflage, ni nada con qué sorprender al enemigo. Pre-6 farmeas y buscas counter-jungle sobre enemigos a los que superas en nivel. Diles a tus laners: "gank al 6".
- **Lanzar W fuera de Demon Shade.** Cuando eres visible (en combate o a bajo HP), el enemigo ve la animación de **W** y puede pre-flashear el charm. Siempre prepara el gank caminando desde Camouflage, luego **W** a 1100+ de rango.
- **Usar R por daño en vez de como execute.** La **R** hace daño bonus bajo el 30% HP. Quemarla en un objetivo a HP completo desperdicia el spike — abre con la combo **W+E+Q**, luego **R** en el instante en que crucen el umbral de execute.
- **Tunnel vision en la kill.** La **R** te warpea una distancia larga hacia atrás después del cast. Si estás en medio del equipo enemigo cuando la pulsas, te warpeas a ningún lado útil. Posiciónate de modo que el warp te tire hacia tu equipo o hacia fog of war (la zona de jungla sin wards), no más profundo entre los enemigos.
- **Negarte a volver a base con HP completo.** Demon Shade fuera de combate te cura lentamente incluso desde full mana. Si tienes 1300+ de oro para un componente de daño como ![Hextech Alternator](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3145.png) **Hextech Alternator** o un componente de maná como ![Lost Chapter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3802.png) **Lost Chapter**, vuelve a base. Rotar con HP completo y 0 de oro es tiempo perdido.

## Consejo avanzado

La combo de doble proc de ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane**: después de que aterrice el **W** charm, cancela la animación de un autoataque hacia **E** (Whiplash desde Demon Shade tiene un reset de autoataque incorporado). El orden es **W → AA → E → AA → Q → R**. Cada uno de los dos autoataques consume un proc fresco de **Lich Bane** porque **E** cuenta como cast de hechizo y resetea tu timer de autoataque. Sobre un squishy sin magic resist esta combo hace aproximadamente 1.5x el daño de la apertura perezosa **W → R** que usan la mayoría de Evelynns de rango bajo, y te permite borrar a una carry de 1800 HP desde HP completo con 3 ítems en lugar de necesitar 4.
