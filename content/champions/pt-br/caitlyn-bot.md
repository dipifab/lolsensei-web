---
title: "Caitlyn Bot Build & Guia — Patch 16.9"
slug: "caitlyn-bot"
language: "pt-br"
patch: "16.9"
champion: "caitlyn"
role: "bot"
last_updated: "2026-04-29"
description: "Guia completo da Caitlyn bot lane no Patch 16.9: starter kit, build de lane bully, matchups da rota, power spikes, erros comuns e uma dica avançada."
quick_learn:
  champion_dd_id: "Caitlyn"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Lane Bully"
  abilities:
    - key: "P"
      name: "Headshot"
      description: "A cada N ataques Caitlyn dispara um tiro bônus que escala com chance de crítico. Alcance dobrado contra alvos presos em trap ou nettados."
      dd_spell_id: "Caitlyn_Passive"
    - key: "Q"
      name: "Piltover Peacemaker"
      description: "Skillshot linear de longo alcance com channel inicial. Acerta em fila; dano reduzido nos alvos seguintes. Principal DPS e waveclear."
      dd_spell_id: "CaitlynQ"
    - key: "W"
      name: "Yordle Snap Trap"
      description: "Coloca uma trap. Quando ativada, revela e prende o campeão inimigo por 1.5s e concede um Headshot empoderado."
      dd_spell_id: "CaitlynW"
    - key: "E"
      name: "90 Caliber Net"
      description: "Rede direcionada que aplica slow no inimigo e empurra a Caitlyn para trás. É um escape contra divers, não uma ferramenta de engage."
      dd_spell_id: "CaitlynE"
    - key: "R"
      name: "Ace in the Hole"
      description: "Channel + execute global single-target. Aliados do alvo conseguem body-blockar a bala — você precisa de isolamento."
      dd_spell_id: "CaitlynR"
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
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contra frontlines tanks ou comps com HP-stack (Sion, Cho'Gath, Dr. Mundo): armor pen bônus escala com HP do inimigo"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contra comps de cura pesada (Soraka, Vladimir, Aatrox): aplica Grievous Wounds e corta a cura assim que tagga"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "contra pressão de assassins ou divers (Zed, Samira, Yasuo flank): movement speed mais passive shield abaixo do HP"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contra hook ou pick comps (Blitzcrank, Thresh, Morgana Q): spell shield come um CC prioritário antes do burst"
  base_combo: ["W", "Q", "AA"]
  win_condition: "Domine a bot lane com o alcance do Q e setups de trap, snowballe Headshot procs com The Collector e Infinity Edge, feche fights atrás da frontline kitando com E e finalize com R nos low-HP."
  weakness: "Sem escape real quando o E está em cooldown. Hard counter de divers e assassins (Samira, Yasuo, Zed flank). Se a vantagem do early não vira pick em midgame, hyperscalers como Jinx ou Vayne te ultrapassam."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8021
      name: "Fleet Footwork"
      icon_path: "perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
---

## Visão geral

Caitlyn é a marksman com maior alcance base do jogo e o arquétipo do **lane bully** (um campeão que domina a lane desde os primeiros minutos, vivendo do lead que constrói na laning phase). Toda a identidade dela está em transformar os primeiros 12 minutos num inferno para o duo inimigo e depois converter essa vantagem em objetivo. A **Piltover Peacemaker (Q)** tem mais alcance que o basic attack de praticamente qualquer outro ADC, a **Yordle Snap Trap (W)** transforma chokepoints em zonas de dano, e a passiva **Headshot** pune quem se posiciona mal perto das traps ou do net. Em troca, ela tem um dos menores valores de armor e HP entre os ADCs: o preço da ditadura de lane é que ela derrete no instante em que o inimigo a pega fora de posição.

O game plan é simples de descrever e exigente de executar: poke (desgastar HP do inimigo a distância sem se comprometer) a lane com o **Q**, posicione traps nos bushes e no tri-bush para ameaçar o combo **W → Headshot empoderado**, e converta o lead do primeiro recall em ouro de turret plate. Depois de **The Collector** e **Infinity Edge** o seu papel muda: você vira back line carry (a carry que entrega dano da retaguarda do teamfight). Fique na segunda posição mais atrás, kite com **E** quando um diver pular em cima, e use **R** como execute (execução abaixo do limite de HP) nos runners low-HP — nunca como ferramenta de poke.

## Build recomendada

**Itens iniciais:** Doran's Blade + 2 Health Potions. Mesmo que esteja vencendo a lane, pule a segunda Doran's: o ouro rende muito mais numa component Pickaxe pra The Collector.

**Itens core (na ordem):**

1. **The Collector** — first-item rush. A passiva execute dispara abaixo de 5% HP e apaga exatamente o tipo de runner low-HP que o **R** quer finalizar. Lethality é ideal no early porque os ADCs inimigos ainda têm pouquíssimo armor.
2. **Berserker's Greaves** — botas de attack speed. Mercury's Treads só se o time inimigo tem 3+ ameaças de hard CC (crowd control: stun, root, knockup).
3. **Infinity Edge** — seu maior spike de dano. A Headshot escala com critical strike chance, e IE transforma cada Headshot num quase one-shot em alvos de backline.
4. **Rapid Firecannon** — alcance extra de auto-attack (mais de 700 base + RFC + IE faz de você o auto-attacker mais longo do lobby) e um proc Energized que casa naturalmente com o timing do Headshot.

**Itens situacionais:**

- **Lord Dominik's Regards** — contra frontlines tank ou comps HP-stack (Sion, Cho'Gath, Dr. Mundo). Substitui Rapid Firecannon se o time inimigo tem 3+ tanks.
- **Mortal Reminder** — contra comps de cura pesada (Soraka, Vladimir, Aatrox). Aplica Grievous Wounds (corta a cura recebida) assim que você tagga o alvo.
- **Phantom Dancer** — contra pressão de assassin ou diver. A passiva HP-threshold (escudo que dispara abaixo do limite de HP) mais a movement speed te dão o meio segundo necessário pro **E** e fugir.
- **Edge of Night** — contra hook ou pick comps (Blitzcrank, Thresh, Morgana Q). O spell shield come um CC prioritário antes de você ser bursted: é a diferença entre viver e morrer nesses matchups.

**Botas:** Berserker's Greaves por padrão. Mercury's Treads só contra CC AP pesado tipo Brand support ou Zyra support.

**Skill order:** Maxe **Q** primeiro (waveclear e principal fonte de dano), **E** em segundo (reduz o cooldown do seu único escape), **W** por último (a trap dá mais dano por rank, mas o timer não muda). Coloque ponto em **R** nos níveis 6, 11 e 16.

**Runas:** Primária **Precision** com **Fleet Footwork**, **Presence of Mind**, **Legend: Alacrity** e **Coup de Grace**. Secundária **Sorcery** com **Manaflow Band** e **Gathering Storm**, ou troque para **Inspiration** com **Magical Footwear** e **Cosmic Insight** se quiser ouro extra na evolução das botas.

## Matchups principais

- **Draven:** Levemente desfavorável nos níveis 1-3 porque o burst (dano alto concentrado em 1-2 segundos) da Spinning Axe ganha de você no trade. Não fight pre-3: freeze a wave (mantenha a leva congelada perto da sua torre) sob torre, chegue ao nível 3 com as três habilidades, e trade (troca curta de golpes/habilidades em lane) só quando tiver uma **W** plantada no bush. Pune as janelas em que ele fica sem mana depois do Q-Q-Q.
- **Ezreal:** Even, levemente a favor da Caitlyn se o support deixar você committar. Você outranges o **Q** dele de longe. Toda vez que ele dá Q em minion, **Q** livre sua na lane. Não dodgeie **dentro** da trajetória do **W** dele.
- **Jhin:** Matchup even, decidido pela disciplina no snipe de **R**. Respeite a quarta bala (dano enorme). Quando o **W** dele estiver em cooldown, ande pra frente e trade. Use seu **E** pra dodgear o **W** root se ele telegrafar.
- **Vayne:** Muito favorável pra Caitlyn antes do nível 9, pesadelo depois do nível 11. É a sua mina de ouro: shove a wave forte pre-3 (empurre forte), force ela pra fora da lane com **Q** poke, e mantenha o jungler avisado pra dives (entrar sob torre pra matar mesmo levando os tiros) no nível 6. Se ela sobreviver até dois itens, a lane acabou e você precisa migrar pra modo back line.
- **Samira:** Ela quer um all-in (troca total até a kill) corpo a corpo no instante em que tem o W. Plante traps no bush da lane pra fechar o caminho de engage, segure o **E** como knockback no segundo exato em que ela dasha em cima (não queime em poke), e nunca fight contra ela sem o shield da Phantom Dancer ativo.

## Power spikes e condições de vitória

- **Nível 2:** Com um ponto em **Q** e um em **E**, o combo Q-AA-AA chunk 30-40% do HP do ADC inimigo se ele andar pra fazer last-hit. Mantenha a wave no centro da lane e busque essa janela.
- **Nível 6:** O primeiro **Ace in the Hole** desbloqueia pressão de pick (eliminar um inimigo isolado fora do teamfight). Lance de dentro de um tri-bush para que o reveal da bala não telegrafe sua posição. Não desperdice em poke: espere um runner low-HP sem aliados por perto.
- **The Collector finalizado (~ minuto 8-10):** Primeiro breakpoint de execute. Quase todo squishy (campeão com pouca defesa) abaixo de 5% HP morre instantaneamente pela passiva, então um **Q** que cleava uma fileira de minions com pouco HP até o campeão inimigo vira kill grátis.
- **Infinity Edge online (~ minuto 18-22):** Seu maior spike de dano. Os procs de Headshot saem do "incomoda" pro "deleta o ADC inimigo". Force fights de objetivo aqui — Drake ou Rift Herald — e construa vision em torno das suas zonas de win condition.

## Erros comuns

- **Spammar Q pra waveclear sem gerenciar mana.** Caitlyn é mana-hungry no early. Q a wave só quando tiver dois melee minions mais um caster alinhados, senão chega no próximo trade com mana zero.
- **Jogar W trap como poke.** Trap é setup tool, não damage tool. Plante em chokepoints (bush da lane, tri-bush, entrada do river) onde o inimigo tem que passar pra last-hittar ou rotar. Uma trap solta no pé do ADC inimigo desperdiça um segundo de lane prio (priority — ascendência na lane que permite sair sem perder recurso).
- **Ficar sempre no alcance máximo nas teamfights.** Distância máxima de AA te coloca fora do peel (a proteção que os aliados aplicam em você) do time. Fique na segunda posição mais atrás, pra que um assassin que faz flank (entra por uma lateral descoberta) não delete você antes do support reagir.
- **Usar R como poke do outro lado do mapa.** **Ace in the Hole** tem channel longo e qualquer aliado próximo body-blocka a bala. Guarde pra runner **isolado** low-HP — alvo sem aliado a menos de 350 unidades.
- **Queimar o E pra perseguir kill.** **90 Caliber Net** é seu único escape. Em cooldown você é um glass cannon (campeão de muito dano e pouca defesa, padrão dos ADCs) sem resposta a um diver. Use pra fugir, não pra fechar distância.

## Dica avançada

Treine a sequência **"Trap → Q → Headshot empoderado"** em chokepoints. Ande até um tri-bush ou entrada de jungle, plante o **W** atrás da linha inimiga no lado por onde eles recuariam, e empurre com poke de **Q**. No segundo em que pisarem na trap, o root de 1.5s te garante um follow-up de **Q** mais um Headshot empoderado — e o tiro empoderado tem **alcance dobrado** contra alvos presos, ou seja, você atira de uma distância em que a maioria dos ADCs nem consegue dar auto-attack. Na prática, isso transforma um 2v2 de lane num 1.5v2: o ADC inimigo escolhe entre perder wave prio (deixar a lane sem fechar minion) ou pisar num combo garantido. Em qualquer caso, você ganha o trade.
