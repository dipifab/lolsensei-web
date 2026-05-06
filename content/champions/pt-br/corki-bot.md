---
title: "Corki Bot Build & Guia — Patch 16.9"
slug: "corki-bot"
language: "pt-br"
patch: "16.9"
champion: "corki"
role: "bot"
last_updated: "2026-05-02"
description: "Guia completo de Corki bot lane no Patch 16.9: build de ADC híbrido, runes, matchups 2v2 importantes, power spikes, erros comuns e dica avançada."
quick_learn:
  champion_dd_id: "Corki"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hybrid"
  abilities:
    - key: "P"
      name: "Hextech Munitions"
      description: "Basic attacks aplicam parte do dano como true damage bônus. Fonte de DPS constante que ignora armor e magic resist — motivo para empilhar attack speed e itens on-hit."
      dd_spell_id: "Corki_Passive"
    - key: "Q"
      name: "Phosphorus Bomb"
      description: "Dano mágico em área alvo que revela inimigos atingidos por instantes. Use para last-hit quando zonado, checar bushes e abrir todos os trades de poke na lane."
      dd_spell_id: "PhosphorusBomb"
    - key: "W"
      name: "Valkyrie"
      description: "Dash curto que deixa um rastro de fogo. Sua única mobilidade — escape, gap-close ou desviar de skillshot. Cooldown longo, não gaste em waveclear."
      dd_spell_id: "CarpetBomb"
    - key: "E"
      name: "Gatling Gun"
      description: "Cone canalizado à frente que causa dano e reduz armor e magic resist. Adiciona DPS em fights longos e amolece tanks para os mísseis de R."
      dd_spell_id: "GGun"
    - key: "R"
      name: "Missile Barrage"
      description: "Míssil de longo alcance que explode no impacto. Acumula até 7 mísseis; cada terceiro é um Big One com burst extra. Principal poke e ferramenta de execute."
      dd_spell_id: "MissileBarrage"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3004", name: "Manamune" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "3046", name: "Phantom Dancer" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "vs front line com 2+ tanks (Sion, Ornn, Maokai): adiciona armor pen pesada para o DPS sustentado furar a defesa"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "vs comps que empilham healing (Soraka, Aatrox, Vladimir, Dr. Mundo): aplica grievous wounds e corta a cura pela metade"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "vs burst AP forte (Brand support, Veigar, Syndra mid): o escudo mágico absorve uma combo inteira e te deixa sair de W"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "vs ultis single-target que travam (Malzahar R, Skarner R, Mordekaiser R): o active limpa a suppression que te deletaria"
  base_combo: ["Q", "AA", "R", "AA", "E"]
  win_condition: "Sobreviva ao 2v2 até dois itens com poke de R e sustain de Q, depois carregue as teamfights late com autos Manamune-stacked e Big Ones de R lá da backline."
  weakness: "Squishy com um único dash. Lanes early agressivas (Draven, Lucian + engage support) o expulsam do CS antes da Trinity Force, e bloqueadores de projétil (Yasuo Wind Wall, Braum E) anulam o poke."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8021
      name: "Fleet Footwork"
      icon_path: "perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision primária: Fleet Footwork procca nos autos (que Corki spamma graças ao true damage da passive), dando heal e burst de movimento — sustain in-lane para um 2v2 longo. Triumph e Coup de Grace fecham kills, Legend: Alacrity dá attack speed para DPS sustentado."
    secondary_rationale: "Inspiration secundária: Magical Footwear atrasa as boots mas dá stats em outro lugar antes; Cosmic Insight reduz cooldown de summoners (Flash e Heal mais frequentes), que é a maior alavanca de sobrevivência no 2v2 bot."
    secondary_alternative: "Em lanes de poke pesado (Caitlyn + Lux, Ezreal + Karma) onde não dá para esperar o atraso das boots de Magical Footwear, troque Inspiration por Sorcery com Manaflow Band (sustain de mana no spam de R) e Gathering Storm (AP scaling grátis no late nos Q e nos Big One)."
matchup_draft:
  pick_into:
    - examples: ["jinx", "twitch", "kog-maw"]
      archetype: "Hypercarries de curto alcance sem escape"
      reason: "Corki os out-ranga pré-Trinity com poke de R a 1225 unidades e um dash W que eles não têm. Precisam ficar no last-hit range, e Corki os derrete antes do power spike de hyper-carry deles."
    - examples: ["senna", "ezreal"]
      archetype: "ADCs de poke estático"
      reason: "Range igual, mas Corki tem dash e uma Q em área instantânea, enquanto Senna e Ezreal pokeam com projétil único. Ele pode dar W em um minion que comeu uma Q e devolver o trade sem comprometer cooldowns."
    - examples: ["sivir", "ashe"]
      archetype: "ADCs sem escape point-and-click"
      reason: "Sivir Spell Shield bloqueia uma habilidade só — ela come a Q e o próximo míssil entra de graça. Ashe não tem dash. Corki snowballa o matchup com reposicionamento de W que elas não respondem."
  counterpicks:
    - examples: ["draven", "samira"]
      archetype: "ADCs de lethality-burst no early game"
      reason: "Out-tradam Corki nos primeiros 6 níveis e snowballam em cima de kills de lane. Corki não duela antes de Trinity, e qualquer W usado agressivo é punido pelos padrões de dash-reset deles."
    - examples: ["lucian", "tristana"]
      archetype: "Lanes multi-dash de auto-trade"
      reason: "O E do Lucian e o W da Tristana entram e saem do auto range do Corki à vontade. Lucian também escala melhor que o true damage da passive na chain auto-Q dos primeiros níveis, batendo Corki direto pré-itens."
    - examples: ["yasuo", "yone"]
      archetype: "Bloqueadores de projétil com Wind Wall (off-meta bot)"
      reason: "Wind Wall come a Q e o R missile barrage inteiro. Mesmo quando esses champions são off-meta no bot, o matchup é áspero porque dois terços do dano do Corki em um trade somem."
---

## Visão geral

Corki bot é um marksman híbrido (carry de auto-attack à distância que mistura dano físico e mágico) que joga a lane como uma mage-carry: chipa o HP inimigo de longe ("poke") com **Missile Barrage (R)** a 1225 unidades, last-hita minions e harassa (dano pequeno e repetido) com **Phosphorus Bomb (Q)**, e quando **Trinity Force** mais **Manamune** estão completos (build pronta) carrega as teamfights late com autos que aplicam parte do dano como true damage (dano que ignora armor e magic resist) graças a **Hextech Munitions (P)**. A rota combina porque o support compra para ele o tempo inicial de scaling (ganhar força conforme os itens chegam) e peela divers (protege o carry de quem tenta alcançá-lo) enquanto ele compromete seu único dash, **Valkyrie (W)**, só em oportunidades reais.

Plano de jogo em uma frase: trade (troque rajadas curtas de dano) com R + Q no alcance máximo para chipar o 2v2 adversário, nunca gaste W sem um plano de follow-up, e escale para um late em que autos potencializados pela Manamune mais os Big Ones de R (cada terceiro míssil é mais forte) one-shotam (matam em uma combo só) alvos squishy na backline (os carries inimigos posicionados longe do fight).

## Build recomendada

**Itens iniciais:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. A blade dá lifesteal (parte do dano causado vira cura) que combina com a passive de auto-attack e aguenta os trades early de Q + auto melhor do que Doran's Ring para um ADC.

**Itens core (na ordem):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — o Sheen (componente da Trinity) procca (dispara um efeito de dano extra) em todo Q e em todo míssil de R, mais AD, attack speed, ability haste (redução de cooldown) e movement speed. O maior power spike único do champion.
2. ![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) **Manamune** — a Manamune se transforma aos poucos numa versão mais forte chamada Muramana conforme você gasta mana; uma vez "stacked" (totalmente transformada) adiciona dano bônus em todo auto-attack e em toda habilidade que custa mana, incluindo cada míssil de R.
3. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed flat que se soma à Trinity e ao true damage on-hit da passive. Boot padrão para Corki bot.
4. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — seu primeiro auto em um inimigo ("auto energized") causa dano bônus e alcança mais longe que o normal. O crit chance casa com o perfil de stats da Trinity.
5. ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — attack speed mais crit (chance de autos causarem dano extra) para DPS sustentado via **Gatling Gun (E)** e o true damage on-hit da passive.

**Itens situacionais:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — vs front line com 2+ tanks (Sion, Ornn, Maokai): armor pen pesada para o DPS sustentado furar.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — vs comps que empilham healing (Soraka, Aatrox, Vladimir): aplica grievous wounds e corta a cura pela metade.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — vs burst AP pesado (Brand support, Syndra mid): o escudo mágico absorve uma combo inteira e te deixa sair de W.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — vs ultis single-target que travam (Malzahar R, Skarner R, Mordekaiser R): o active limpa a suppression que te deletaria.

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** é o padrão. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** se o time inimigo tem 3+ ameaças AD focadas em você.

**Skill order:** Maxe **Q** primeiro (poke, waveclear, dano mágico), **E** em segundo (DPS mais shred de armor e magic resist), **W** por último (utility). Coloque ponto em **R** nos níveis 6, 11, 16.

**Runes:** Primária **Precision** com **Fleet Footwork**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secundária **Inspiration** com **Magical Footwear** e **Cosmic Insight**, ou **Sorcery** com **Manaflow Band** e **Gathering Storm** em lanes de poke pesado.

## Matchups principais

- **Caitlyn:** Te out-ranga. Fique atrás dos minions para negar setups de armadilha dela, desvie do Q linear side-steppando (andando de lado) no cast indicator (a linha visual no chão quando ela conjura), e nunca chegue perto de um muro onde a Q ricocheteia (bate e atinge de novo) por dano bônus. Guarde o W para fugir do R execute dela quando estiver low.
- **Draven:** Early game mais difícil. Ele te out-trada nos níveis 1-5 e snowballa (vantagem inicial vira bola de neve) em cima de kills de lane. Conceda CS (last-hits = creep score = ouro) para ficar vivo, pingue janelas de gank do jungler quando os Spinning Axes caírem dele, e nunca trade dentro de um machado em rota.
- **Lucian:** Ele quer dar dash de E em cima de você. Q nele quando ele commita o dash, assim o slow mais o CC (crowd control = stuns, slows, roots) do seu support viram o trade. Nunca auto-trade em melee range; o double-shot da passive dele bursta além da sua vantagem de true damage.
- **Jhin + Lulu / Senna + Tahm:** Lanes de disengage de longa distância (composições feitas para quebrar seu engage com escudos e CC). Você precisa vencer o all-in do nível 6 ou stallar até a ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force**. Empurre a wave com Q + autos e procure setup de gank R + W com seu jungler.
- **Samira:** Opressora de all-in no nível 6 (a ulti dela força um fight do qual você não retira). Compre ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** se a R dela acertar uma vez no seu time — o cleanse ativo (remove um debuff) quebra a chain. Pré-6 dá para empatar trades; pós-6 disengage de W até seus Big Ones de R passarem o ramp dela.

## Power spikes e condições de vitória

- **Nível 2:** Com Q + W ou Q + E, dá para punir um posicionamento ruim do inimigo com um trade Q-AA-AA ("AA" = auto-attack básico) e follow-up de W se o support adversário estiver commitado pra frente.
- **Nível 6:** A primeira **Missile Barrage (R)** desbloqueia o all-in (um fight em que você se compromete totalmente, sem retirada). Com stocks de R mais a Trinity Force chegando, uma combo Q-AA-R-R-R mais CC do support mata a maioria dos ADCs em low HP.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completa (~ minuto 13-15):** Sheen procca em todo Q e todo míssil de R, virando poke em ameaça de kill. É o momento de all-in ou de tomar fight de Drake se a vision (wards revelando a mapa) estiver limpa.
- **![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) Manamune stacked (~ minuto 18-22):** Muramana adiciona dano bônus em toda ação que gasta mana; o dano em teamfight basicamente dobra comparado ao pré-stack. Force fights de objetivo (Drake, Baron) aqui.

## Erros comuns

- **Spammar R em cooldown para waveclear.** Os mísseis de R são um stock finito; se você esvazia em minions, na próxima teamfight tem zero burst no pior momento. Empurre wave com Q + autos; guarde 4+ mísseis para objetivos.
- **Usar W agressivo sem follow-up.** W é seu único escape. Dashar para fechar uma kill que precisava de mais um auto é como Corki morre — se não dá para matar com a mana e os cooldowns que sobraram, não commita (não engage de vez).
- **Auto-trade em melee range sem follow-up do support.** O true damage da passive parece tentador no curto, mas a pool de HP do Corki é squishy (baixa e frágil). Fique em R range quando o support adversário tem hard CC up.
- **Rushar ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge como 2º item.** Infinity Edge precisa de crit chance alto para funcionar, e os três primeiros itens do Corki (Trinity, Manamune, Berserker's) dão pouquíssimo crit. Mantenha a ordem Trinity → Manamune → Rapid Firecannon → Phantom Dancer; só considere Infinity Edge como 5º ou 6º item.
- **Recall com stocks de R cheios.** Os stocks resetam na morte mas persistem no recall — atire os mísseis restantes numa wave ou torre antes de voltar à base, em vez de deixá-los parados.

## Dica avançada

Acompanhe e exploite o ritmo do **Big One**. Cada terceiro míssil de R (o "Big One") causa muito mais dano que os dois normais. Antes de uma teamfight, conte os mísseis em stock — se o próximo for um Big One, guarde para o alvo prioritário; se acabou de gastar, atire os dois mísseis filler na wave ou numa torre para que o Big One recarregue pronto para o engage. Quem dispara R no escuro desperdiça Big Ones em minions; quem rastreia a contagem one-shota squishies (carries de HP baixo) na hora certa.
