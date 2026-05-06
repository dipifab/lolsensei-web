---
title: "Ambessa Top Build & Guía — Patch 16.9"
slug: "ambessa-top"
language: "es"
patch: "16.9"
champion: "ambessa"
role: "top"
last_updated: "2026-04-29"
description: "Guía de Ambessa top para League of Legends Patch 16.9: starter kit, build Eclipse skirmisher, matchups clave, power spikes, errores comunes y un consejo avanzado."
quick_learn:
  champion_dd_id: "Ambessa"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Fighter / Assassin"
  abilities:
    - key: "P"
      name: "Drakehound's Step"
      description: "Tras cualquier ability cast, hace un dash corto. La siguiente basic attack gana rango, daño y attack speed extra, y devuelve energía."
      dd_spell_id: "Ambessa_Passive"
    - key: "Q"
      name: "Cunning Sweep / Sundering Slam"
      description: "Habilidad de dos casteos. El primero golpea un arco frontal y escala con el max HP del rival. Si impacta, desbloquea un slam frontal más largo como segundo cast — daño principal."
      dd_spell_id: "AmbessaQ"
    - key: "W"
      name: "Repudiation"
      description: "Gana un escudo y se cubre, luego golpea el suelo. Si bloquea daño no-minion durante la pose, el slam se potencia. Herramienta defensiva de trade."
      dd_spell_id: "AmbessaW"
    - key: "E"
      name: "Lacerate"
      description: "Látigo AOE en cadena alrededor: daña y ralentiza a los enemigos cercanos. Activar el dash de la pasiva desde esta ability añade un segundo strike al final del dash."
      dd_spell_id: "AmbessaE"
    - key: "R"
      name: "Public Execution"
      description: "Se vuelve unstoppable y blink al campeón enemigo más lejano en línea, suprimiéndolo al llegar, luego lo golpea para daño y stun. Pasiva: armor pen + omnivamp en abilities."
      dd_spell_id: "AmbessaR"
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
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3071", name: "Black Cleaver" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "cambia las Plated Steelcaps si el equipo rival tiene 2+ fuentes de hard CC o mucho daño AP"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra tops AP fuertes (Vladimir, Rumble, Gwen) — magic shield + AD scaling a HP bajo"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contra hard CC telegrafiado de larga distancia (Malphite R, Ornn R, Sett W) — el spell shield bloquea el engage"
    - dd_id: "6697"
      name: "Hubris"
      against: "cuando ya vas por delante en lane — las kills apilan AD, alimentando el snowball lead"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "late game cuando haces R-blink al carry rival — la revive te deja comprometerte y sobrevivir al follow-up"
  base_combo: ["Q1", "AA", "E", "AA", "Q2", "AA", "R"]
  win_condition: "Gana las lanes 2-6 con trades de passive-dash, luego snowball en skirmishes alrededor de Voidgrubs y Drake. Usa R para suprimir un carry aislado antes de que el frontline rival pueda hacer peel."
  weakness: "Las cadenas de hard CC apagan sus combos de dash. Las statlines tank atenúan su daño % max HP. R la compromete contra un objetivo, así que una comp con peel puede aislarla cuando termina la suppression."
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
matchup_draft:
  pick_into:
    - examples: ["darius", "garen", "sett", "illaoi"]
      archetype: "Bruisers melee inmóviles sin dash"
      reason: "Sus passive-dashes tras cada ability cast le permiten entrar y salir de los windups telegrafiados (agarre de Darius, silencio de Garen, E de Illaoi). La suppression de R bypassa su tankiness para la kill."
    - examples: ["kennen", "teemo", "quinn"]
      archetype: "Top laners ranged squishy"
      reason: "Los dashes cortos múltiples del passive cierran el gap del que dependen los ranged tops. En melee su Q escala con el max HP del objetivo y los chunkea más rápido que su disengage."
    - examples: ["nasus", "kayle"]
      archetype: "Scalers late-game que necesitan niveles o stacks"
      reason: "Su poder de niveles 2-6 los machaca antes de su spike (stacks de Q de Nasus, niveles 11 y 16 de Kayle). Fuerza kills early para negarles el lategame que necesitan."
  counterpicks:
    - examples: ["malphite", "ornn", "poppy"]
      archetype: "Tanks con hard CC y stat checks"
      reason: "El CC point-and-click (R de Malphite, W de Poppy que detiene dashes, brittle + knock-up de Ornn) interrumpe sus combos de dash antes de que la R aterrice. Armor más HP raw también atenúan el % max HP scaling de Q."
    - examples: ["jayce", "gnar", "vayne"]
      archetype: "Pokers y kiters de larga distancia"
      reason: "La E de Jayce (knockback) y la mega R de Gnar interrumpen su dash a mitad de cast. Los kiters se quedan fuera de su threat range, forzándola a comprometer dashes desde lejos y castigándola con habilidades en cooldown."
    - examples: ["olaf", "tryndamere"]
      archetype: "Campeones cuyos ultimates anulan suppression o ejecución"
      reason: "La R de Olaf limpia su suppression al castear, neutralizando su tool principal de pickoff. La R undying de Tryndamere sobrevive al frame de execute y le permite girar fuera del slam."
---

## Resumen

Ambessa es una skirmisher de top lane (un campeón pensado para escaramuzas cortas y peleas pequeñas, no para teamfights largos). Es un campeón AD de daño físico (AD = attack damage; la alternativa es AP = ability power, la stat de daño mágico de los magos). Usa **energía** como recurso en vez de mana, y vive o muere con su pasiva, **Drakehound's Step**: cada ability cast dispara un dash corto más una basic attack potenciada con rango, daño y attack speed extra. Esa única mecánica la convierte en una especialista del chain-trade — cada Q, W o E le concede un auto-attack reset gratis (una basic attack que sale al instante, ignorando el timer normal de attack speed), de modo que un combo completo aterriza cuatro o cinco golpes en dos segundos. Su kit castiga a quien intente pelearle en melee sin un hard interrupt (un stun, knock-up o silence que la corte a mitad de cast).

Su plan de partida es simple: machaca la lane desde el nivel 2 con all-ins de **Q + E** (un "all-in" es comprometerse a la kill, no un trade breve), y luego snowball en skirmishes de mid-game alrededor de Voidgrubs y Drake. "Snowball" significa una pequeña ventaja temprana — una kill, una tower plate (un pedazo de armadura de torre que da gold cuando se rompe en los primeros 14 minutos) — que se va amplificando con el tiempo. Usa **R** para suprimir a un carry rival aislado (el damage dealer principal del equipo) antes de que su frontline (los tanks que están delante) pueda hacer peel — "peel" significa usar CC o tu propio cuerpo para proteger a un aliado del enemigo que le está saltando encima. El lategame es su debilidad: una vez que los tanks rivales terminan dos items, su daño % max HP en Q deja de fundirlos, así que cierra la partida antes del minuto 28.

## Build Recomendada

**Items iniciales:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Default para trades AD; el lifesteal sostiene tus dash chains.

**Items core (en orden):**

1. ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — primer item skirmisher principal. Tras dos hits de ability sobre el mismo objetivo en 1.5 segundos, activa un escudo (una barrera temporal de HP que absorbe daño entrante) más un chunk de bonus damage en el siguiente ataque. Sus combos de dash llegan a esa cifra en cada pelea.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — botas por defecto. La mayoría de matchups en top son AD; la reducción de daño de auto-attack importa en trades extendidos.
3. ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — armor shred (cada hit retira un poco de armor del objetivo, hasta 30% acumulado) más HP más AD. Sus auto-attacks potenciadas por la pasiva apilan el shred más rápido que la mayoría.
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — spike de supervivencia. Cuando recibes daño fuerte en un burst corto, el item te da un escudo grande. Útil cuando haces R-blink al carry rival y el resto de su equipo te focusea.
5. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — convierte el daño físico entrante en un sangrado lento (daño repartido a lo largo de 3 segundos en vez de instantáneo), dándote tiempo para cerrar el trade.

**Items situacionales:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — sustituyen las Plated Steelcaps cuando el equipo rival tiene dos o más fuentes de hard CC, o mucho daño AP (mágico). Dan magic resist más tenacity (que reduce la duración de stuns y slows sobre ti).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contra tops AP (Vladimir, Rumble, Gwen). Da un escudo "lifeline" contra daño mágico (un escudo que salta una sola vez cuando bajas del 30% HP) más más AD a HP bajo, pensado para mantenerte vivo lo suficiente para devolverles la kill.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contra hard CC telegrafiado de larga distancia (Malphite R, Ornn R, Sett W). Te da un spell shield de un uso (bloquea la siguiente ability rival que te impacte), así su engage falla y tú lanzas la R en tus términos.
- ![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) **Hubris** — cuando ya vas por delante en lane. Cada kill o assist apila AD bonus en el item, alimentando un snowball lead — cuantas más kills consigues, más fuerte pegas, lo que te lleva a más kills.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — último item del lategame. Te da un revive de un solo uso al morir cada 5 minutos. Te permite comprometerte del todo cuando haces R-blink al carry rival, sin tirar la partida si te misposicionas.

**Botas:** Plated Steelcaps por defecto. Mercury's Treads contra AP/CC. Salta las botas tipo Sorcerer's de mago — tú escalas físico.

**Skill order:** Sube **Q** primero al máximo (daño principal y la única ability que escala con el max HP rival), **E** segundo (waveclear y el slow AOE que prepara el segundo strike de Q), **W** al final. Pon punto en **R** en niveles 6, 11 y 16.

**Runas:** Árbol primario **Precision**:
- **Conqueror** — keystone (la runa principal, la más potente del árbol). Apila AD bonus y healing cuanto más tiempo permanezcas en pelea contra campeones; perfecto para su kit de chain-trade.
- **Triumph** — pequeña heal y burst de gold por takedown, se activa cuando cierras una pelea a HP bajo.
- **Legend: Alacrity** — attack speed pasivo bonus que crece con las takedowns.
- **Last Stand** — daño extra cuando bajas del 60% HP.

Árbol secundario **Resolve**:
- **Second Wind** — regeneración de HP que se activa tras recibir daño rival. Contrarresta el poke en lane.
- **Unflinching** — tenacity extra una vez que **Flash** está en cooldown. Útil cuando entras con R al equipo rival y te intentan encadenar CC.

Stat shards (los tres bonus statísticos pequeños debajo de las runas): Adaptive Force (da AD o AP según lo que tu campeón ya construya — para Ambessa se convierte en AD), Adaptive Force otra vez, y luego Armor o HP según el matchup.

## Matchups clave

- **Darius:** Favorable. El borde exterior de su Q es la parte que lo cura; métete dentro haciendo dash hacia delante con tu Q1, luego Q2 hacia atrás. Él necesita acertar Q + E para comprometer una kill completa; tú puedes usar W para escudar el grip de su Q y hacer un trade parejo. Oblígalo a quemar primero el bleed de su W (fuérzalo a gastarla), y entra cuando esté en cooldown.
- **Sett:** Favorable. No tiene dash, solo un slam frontal (W). Pre-6, tus combos de passive-dash le ganan en intercambios largos. Después del 6, guarda **Flash** para esquivar el knockback (el desplazamiento) de su R que de otro modo te empujaría hacia su equipo.
- **Malphite:** Desfavorable. Su escudo pasivo atenúa tu all-in del nivel 2; el slow de su Q le permite huir cuando te comprometes. Construye ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** como segundo item para bloquear su R engage. Evita teamfights en choke points donde puede flankear — atacar por sorpresa desde un ángulo lateral — desde la fog of war (las zonas del mapa que no ves porque no hay ward). Una ward es un pequeño ojo mágico que colocas para iluminar una zona.
- **Jayce:** Desfavorable. Tiene dos formas; en forma ranged el combo Q + E te pokea (te quita HP desde distancia segura) antes de que puedas cerrar el gap. Coge ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** como starter, pégate a tu wave por la regeneración de HP de los last-hits, y busca kills solo cuando él pase a forma melee y queme su E.
- **Camille:** Skill matchup. Los dos tenéis all-ins fuertes; gana el que aterriza limpio el primer cast. Tu Q escala con su max HP actual — oblígala a usar primero el heal de su W, luego Q1-auto-Q2 para bajarla del 50%. Coloca una ward en el tri-bush (el arbusto de tres entradas cerca de tu torre), así su hookshot — la ability de gancho que la lanza hacia un muro o un enemigo — no te pilla volviendo a lane.

## Power spikes y condiciones de victoria

- **Nivel 2 (Q + E):** Tu primer spike grande. Con ambas habilidades y el dash pasivo, un combo completo Q1-auto-E-auto-Q2-auto suelta cuatro basic attacks más dos ticks de ability en dos segundos. La mayoría de top laners no pueden igualar este daño en un scrap melee.
- **Nivel 6 (R desbloqueada):** ![R](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/champion/Ambessa.png) **Public Execution** desbloquea pickoffs — eliminar a un rival aislado fuera de la pelea principal. La pasiva de R añade además armor penetration (tu daño ignora una parte de su armor) y omnivamp (una pequeña heal proporcional al daño que haces con habilidades). Te sostiene en skirmishes del río.
- **![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) Eclipse completado (~ minuto 11-13):** Tu mayor spike de skirmish. El escudo y el bonus damage se alinean con cada combo completo, así que los 1v1 y 2v2 alrededor de Voidgrubs giran a tu favor.
- **2 items + boots (~ minuto 18-22):** Con ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** online, agrúpate con tu equipo para fights de Drake. Haz R-blink al carry rival — la suppression (un CC que desactiva todas las habilidades y movimiento, incluso **Flash**) lo bloquea 1.5 segundos, suficiente para que tu equipo haga follow-up.

## Errores comunes

- **Quemar Sundering Slam (el segundo cast de Q) en un minion.** El segundo cast potenciado es tu damage spike. Si pegas a un minion con la Q1 en vez de a un campeón, has gastado el reset en una criatura que muere de un golpe igualmente. Aguanta la Q1 hasta que puedas garantizar el contacto con un campeón rival.
- **Hacer R-blink demasiado profundo en el equipo rival.** R va al campeón enemigo **más lejano** en tu línea, no al más cercano. Si tres rivales están delante de su carry, tu blink pasará a través de ellos y te dejará detrás de todo el equipo. Comprueba siempre el positioning antes de pulsar R — alinea al carry como único objetivo entre tú y el punto más lejano.
- **Cubrirse con W en el vacío.** El slam potenciado solo se activa si bloqueas daño no-minion durante la pose. Cubrirte en lane contra minions desperdicia el cooldown a cambio de nada. Usa W reactiva — cuando ves que arranca la animación de una ability rival, en ese momento te cubres.
- **Guardar la R para el engage perfecto que nunca llega.** R tiene 100+ segundos de cooldown en early. Si la tienes lista en el nivel 6 y el laner rival ha gastado su combo principal (sus key abilities están en cooldown), entra y úsale la R. Un laner muerto son dos waves de farm gratis y una tower plate extra (las piezas de armor de la torre que dan gold en los primeros 14 minutos).
- **Hacer 1v1 a hyper-tanks pensando que tu Q los va a borrar.** El daño % max HP da miedo en papel pero la armor sigue aplicándose. Una vez que un Ornn o un Cho'Gath termina ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** + items tank, no los matas en solitario. Agrúpate con tu jungler.

## Consejo avanzado

Domina el **dash-AA weave** (intercalar el dash con la basic attack). Cada ability cast dispara tu dash pasivo y una AA potenciada, así que la secuencia óptima en un combo completo es *cast → dash → AA → cast → dash → AA*, no *cast → cast → cast → AA*. Si pulsas la segunda ability antes de que dispare la AA potenciada, cancelas el bonus de ese auto. Ritmo limpio: **Q1 → dash hacia delante → AA → E → dash → AA → Q2 → dash → AA → R**. Practica en la Practice Tool (la modalidad offline de entrenamiento) contra un target dummy (un muñeco fijo de práctica) hasta que cada AA registre; en una lane real esto convierte un trade de 2 segundos en siete instancias de daño separadas — la diferencia entre una kill y un rival escapando con 50 HP.
