---
title: "Aphelios Bot Build & Guia — Patch 16.9"
slug: "aphelios-bot"
language: "pt-br"
patch: "16.9"
champion: "aphelios"
role: "bot"
last_updated: "2026-04-29"
description: "Guia Aphelios bot lane do League of Legends Patch 16.9: rotação de armas, build marksman core, matchups principais, power spikes, erros comuns e uma dica avançada."
quick_learn:
  champion_dd_id: "Aphelios"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Marksman / Weapon Swap"
  abilities:
    - key: "P"
      name: "The Hitman and the Seer"
      description: "Aphelios cicla 5 armas Lunari numa ordem fixa que depois muda. Ele segura 2 ao mesmo tempo (main-hand + off-hand); cada arma tem munição finita e força um swap quando acaba."
      dd_spell_id: "Aphelios_Passive"
    - key: "Q"
      name: "Weapon Abilities"
      description: "A ativada muda com a main-hand: tiro de longa distância (Calibrum), sprint AoE com lifesteal (Severum), root em todos os lentos (Gravitum), cone (Infernum), torreta sentinela (Crescendum)."
      dd_spell_id: "ApheliosCalibrumQ"
    - key: "W"
      name: "Phase"
      description: "Troca instantaneamente main-hand e off-hand. Cooldown curto: cada cast vira seu perfil de dano (alcance, lifesteal, AoE, slow, attack speed)."
      dd_spell_id: "ApheliosW"
    - key: "E"
      name: "Weapon Queue System"
      description: "Aphelios não tem uma terceira ability de verdade — esse slot só mostra a próxima arma que Alune vai entregar. Serve para planejar combos com algumas armas de antecedência."
      dd_spell_id: "ApheliosE"
    - key: "R"
      name: "Moonlight Vigil"
      description: "Explosão de luar de longa distância que detona em campeões atingidos. Aplica o efeito único da main-hand atual (mark shots extras de Calibrum, AoE, AoE com lifesteal, etc.)."
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
      against: "contra frontlines tanky (Sion, Ornn, Malphite): armor pen que escala com o HP bônus do inimigo"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contra heal alto (Soraka support, Yuumi, Vladimir, Aatrox): aplica Grievous Wounds e corta a cura pela metade"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "quando você precisa de lifesteal e escudo: substitui The Collector se houver 2+ assassinos te focando"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra burst AP pesado (Syndra, Veigar, comp duplo mago): escudo em HP baixo e Magic Resist"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "contra CC bloqueante (suppression Malzahar, R Skarner, R Mordekaiser): a ativa limpa o CC"
  base_combo: ["Q", "W", "R", "AA"]
  win_condition: "Chega no two-item spike, depois cicla Calibrum + Gravitum nos fights pra travar um alvo chave com a W swap, R e a combo Q-root enquanto o time entra no engage."
  weakness: "Sem dash, sem escape, e a arma errada na hora errada joga um fight fora. Despenca se for punido nos níveis 1-3 antes de stackar ammo e itens."
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
      archetype: "Marksmen de curto alcance que precisam commitar"
      reason: "Calibrum (o rifle) ultrapassa a janela de auto-attack deles: pra trade eles têm que entrar e você pune com o mark shot do Q. Depois a W swap pra Severum cura o chip damage que colocaram em você."
    - examples: ["karthus", "seraphine", "heimerdinger"]
      archetype: "Scalers bot lane sem mobilidade"
      reason: "Gravitum (o canhão) os lentifica a cada auto, então o Q dá root em todos os alvos lentos de uma vez. Com a R nível 6 em follow-up, um alvo imóvel come o burst inteiro antes de terminar um channel."
    - examples: ["jinx", "kog-maw", "twitch"]
      archetype: "Marksmen hyper-scaling com early fraco"
      reason: "Aphelios nível 1-2 com Calibrum vence cada trade contra qualquer um cuja lane phase é só farmar. Aplica pressão antes do 3º item pra eles nunca chegarem no spike de late game."
  counterpicks:
    - examples: ["draven", "lucian", "tristana"]
      archetype: "Marksmen agressivos no early game"
      reason: "As janelas de nível 1-3 deles são brutais: cooldowns curtos e damage base alto punem Aphelios enquanto o Q dele tem 9s de cooldown e a munição é finita. Ele não consegue trade back sem queimar ammo que precisa pra empurrar a wave."
    - examples: ["leona", "nautilus", "pyke"]
      archetype: "Supports de hard-engage"
      reason: "Aphelios tem mobilidade zero (sem dash, sem blink). Uma corrente de CC do support e ele morre antes de conseguir W-swap pra Severum pra curar ou queimar Flash. Pickar contra engage = pickar pra morrer."
    - examples: ["caitlyn", "senna", "jhin"]
      archetype: "Marksmen de poke a longa distância"
      reason: "Eles fazem poke em Aphelios em distâncias que nem Calibrum responde (traps + headshot Caitlyn, Q da fog Senna, W root Jhin). Aphelios não consegue fechar a distância, então sangra HP sem poder revidar."
---

## Visão geral

Aphelios é um marksman com o kit teoricamente mais longo do League: 5 armas diferentes que rotacionam pelas mãos dele, cada uma com seu próprio basic attack e seu próprio **Q**. Você só carrega duas — uma main-hand (que dita seus auto-attacks e o **Q**) e uma off-hand (que dispara periodicamente junto com os ataques da main-hand). Cada arma tem munição finita (um número fixo de tiros): quando acaba, a arma é descartada e Alune entrega a próxima da fila. A maestria está principalmente em saber qual arma vem em seguida e quais duas você quer ativas no momento certo.

O game plan é sobreviver a um early game frágil (sem dash, sem escape, gerenciamento de ammo chato) até chegar a dois itens, então snowball (transformar uma vantagem inicial em uma maior vencendo mais fights) através de skirmishes (pequenos fights de 2-4 jogadores, menores que um teamfight inteiro) usando **Phase (W)** pra trocar pra arma que pune a situação: **Calibrum** (o rifle) pra poke (gastar HP do inimigo de longe com dano à distância) e execute (finalizar alvos já com pouca vida), **Severum** (a foice-pistola) pra sustain (curar e sobreviver em fights longos), **Gravitum** (o canhão) pra lockdown (prender um inimigo com CC tempo suficiente pra matá-lo), **Infernum** (o lança-chamas) pra waveclear e AOE de teamfight (area of effect: dano numa zona, não num único alvo), **Crescendum** (o chakram) pra spikes de DPS (picos de damage per second) em curta distância.

## Build recomendada

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 1 Health Potion. Doran's Blade é o starter padrão pra marksmen: pequeno bônus de Attack Damage (AD), um pouco de HP e lifesteal (você cura uma porcentagem do dano que causa com auto-attacks). Aphelios precisa de cada ponto de AD porque as armas dele consomem munição.

**Core items (em ordem):**

1. ![Yun Tal Wildarrows](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3032.png) **Yun Tal Wildarrows** — primeiro item meta de DPS. Dá crit cedo (chance de um auto-attack causar dano extra) e uma passiva de sangramento nos ataques (dano espalhado nos próximos segundos em vez de tudo no impacto), perfeito pras armas de tiro rápido (Crescendum, Infernum).
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — botas de attack speed (mais autos por segundo). Padrão em quase todo jogo de Aphelios porque todas as armas dele se beneficiam de attack speed extra.
3. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — execute abaixo de 5% HP mais Lethality (um tipo de armor penetration que ignora um pedaço da armadura do alvo, especialmente útil contra alvos squishy — campeões com defesas baixas como ADCs e magos). Combina com os mark shots de Calibrum (os auto-attacks de Calibrum colocam uma "mark" no inimigo: re-atacar o alvo marcado dá dano bônus de qualquer lugar do mapa, inclusive com **R**) que já chunkam (causam um pedaço grande de dano) alvos com pouca vida.
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — multiplicador de crit damage; com dois itens de crit já prontos (Yun Tal + Collector ou Yun Tal + RFC), Infinity Edge desbloqueia 175% de crit damage e seus auto-attacks praticamente dobram em burst (o dano que você solta numa janela de 1-2 segundos).
5. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — alcance extra no auto-attack de Calibrum e no primeiro tiro energizado (RFC carrega um auto "energized" a cada poucos segundos enquanto você se move — esse auto sai de alcance estendido e zappa o alvo). Sinergiza com o kite (andar pra trás enquanto ataca, mantendo distância das ameaças).

**Swaps situacionais:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — substitui Rapid Firecannon quando o inimigo empilha armadura (frontline de Sion, Ornn, Malphite — frontline = os tanks/bruisers que absorvem dano na frente enquanto os carries atiram de trás).
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — mesmo slot do Lord Dominik's, escolhe essa versão quando o time inimigo tem heal alto (Soraka, Yuumi, Aatrox, Vladimir): aplica Grievous Wounds, que corta a cura inimiga pela metade.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — substitui The Collector quando você precisa de sustain numa partida longa ou quando o time inimigo tem dois assassinos mirando sua backline (o escudo de 7 segundos a HP cheio pode te salvar uma vez por fight).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — slot tardio contra comps de burst AP pesado (Syndra + Veigar + Annie). O escudo dispara abaixo do limite de HP — ou seja, quando você cai abaixo de 35% de HP — e absorve dano mágico.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — swap de último slot quando uma única corrente de CC (suppression Malzahar, R Skarner, R Mordekaiser) decide cada teamfight contra você.

**Skill order:** Maxa **Q** primeiro (sobe o dano da ativada de cada arma), **W** segundo (swap mais rápido = mais flexibilidade por segundo), **E** por último. Pega **R** nos níveis 6, 11, 16 como sempre.

**Runes:** Árvore primária **Precision** (construída em torno de auto-attacks): keystone **Lethal Tempo** (attack speed extra ao lutar contra campeões), depois **Presence of Mind** (devolução de mana em takedowns — relevante porque o Q custa ammo), **Legend: Bloodline** (mais lifesteal acumulado com kills), **Coup de Grace** (dano extra contra alvos com pouca vida). Árvore secundária **Resolve** com **Second Wind** e **Overgrowth** contra lanes de poke pesado (Caitlyn, Senna), ou **Inspiration** com **Magical Footwear** e **Cosmic Insight** quando você espera uma lane passiva.

## Matchups principais

- **Draven:** A lane mais difícil do mapa. Ele vence cada trade (uma troca curta de auto-attacks e abilities) nos níveis 1-3 toda vez. Fica atrás do support, faz last-hit só com auto-attack (não queima ammo do Calibrum Q em minions), espera o nível 6 pra empatar o trade com a **R**.
- **Caitlyn:** Guerra de alcance. Os traps + headshot dela fazem poke (gastam seu HP de fora até do alcance do Calibrum) além do seu próprio range. Troca pra **Gravitum** assim que ela chega perto de uma trap; o slow (redução de movement speed) mais o root do seu Q (efeito que prende o inimigo no lugar, sem poder se mover ou dashar) anula a janela de escape dela.
- **Samira:** Ela quer divar você (correr embaixo da sua tower pra te matar apesar dos tiros da tower). Segura **Severum** pro momento em que ela entra no melee (alcance curto de auto-attack) — o Q AoE te cura do chip damage (dano pequeno mas constante que vai gastando seu HP) e o CC do seu support mata ela se ela over-commitar (avançar demais e não conseguir voltar).
- **Jhin:** Ele faz mais poke pré-6, você faz mais DPS pós-6 (o poke à distância dele vence no early, seu dano sustentado vence depois do nível 6). Não trade auto por auto na lane (um "trade" = troca curta de golpes — o W root e o crit do 4º tiro definem a lane); empurra forte no nível 2 (força a wave embaixo da tower dele) e faz recall (volta pra base) na conclusão do primeiro Yun Tal pra voltar à frente.
- **Kalista:** Ela é squishy e de curto alcance. Trade autos com **Calibrum** main + Severum off-hand; a corrente de dashes dela a força pra dentro do seu range, e o mark shot do Q a pune cada vez que ela pula.

## Power spikes e condições de vitória

- **Nível 2:** Com uma ativada de arma extra online, você empata a maioria dos ADCs nos trades. A maioria dos jogos de Aphelios se decide em quem acerta limpo o all-in do nível 2 (um fight de comprometimento total em que você vai pra kill sem opção de recuo).
- **Nível 6 com Calibrum:** A primeira **Moonlight Vigil** com o rifle na main-hand dispara mark shots extras de longa distância. Se a bot lane inimiga está empurrada pra sua tower (a wave deles foi pushada pra perto da sua tower, deixando-os em posição vulnerável), a janela de **R** + Q execute do outro lado da tela é uma kill grátis pra um support atento.
- **![Yun Tal Wildarrows](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3032.png) Yun Tal Wildarrows pronto (~ minuto 12-14):** A lane priority vira (você se torna a lane que pode sair pra ajudar fights em outro lugar sem perder CS ou HP). Pode shovar (empurrar sua wave pra tower inimiga) e contestar dragão, seu DPS em skirmishes spika forte (seu damage per second dá um salto claro nesse item).
- **Spike de 3 itens (Yun Tal + Berserker's + The Collector por volta do minuto 22-25):** Um "spike" é um salto claro de poder ligado a um marco de nível ou item. Aphelios agora é o marksman com o DPS sustentado mais alto do jogo. Força fights de objetivo aqui (objetivos = Dragon, Baron, Rift Herald, towers — alvos neutros que dão buffs de equipe ou pressão de mapa) e fica no alcance máximo do Calibrum enquanto sua frontline segura a linha.

## Erros comuns

- **Auto-atacar minions com a ammo do Q de Calibrum.** Guarda a ammo do Q pros campeões. O Q de Calibrum é uma das suas poucas ameaças de longa distância; queimar ela na wave por fast-push (forçar a wave a crashar na tower inimiga o mais rápido possível) só vale se você for recallar nesse mesmo back, senão o trade que você cede é enorme.
- **Esquecer de trackar a próxima arma na fila.** O slot **E** mostra a próxima arma. Sempre confere antes de commitar: avançar trocando pra **Severum** com **Crescendum** atrás na fila tá ok; fazer o mesmo com **Gravitum** chegando joga fora a janela do all-in (os poucos segundos em que você pode fechar a kill).
- **Ficar parado em teamfights.** Aphelios não tem dash. Se você fica no mesmo ponto dois segundos seguidos, qualquer coisa móvel (Zed, Diana, Camille) te apaga. Strafa (move lateralmente enquanto ataca) entre cada auto-attack — passos curtos, mas movimento constante.
- **Usar a R assim que sai do cooldown.** O valor da Moonlight Vigil depende totalmente de qual arma você tem na main-hand quando casta. **R** com Crescendum num único alvo é desperdício; **R** com Infernum em 4 inimigos agrupados é uma quadra kill.
- **Pickar Aphelios contra hard engage.** Isso é erro de draft, não de gameplay — "engage" é a ferramenta de um campeão pra forçar um fight (ex.: o Q stun da Leona, a R suppression do Malzahar). Se o inimigo tem Leona + Malzahar mid + Hecarim jungle, você não vai usar nenhuma arma. Compensa com setups Severum-friendly (um peeler — support cujo trabalho é te proteger de divers, tipo Lulu ou Janna).

## Dica avançada

Aprende o timing do W-cancel no **Phase**: enfileirar um swap durante um mark shot do Calibrum te deixa atirar o auto follow-up de longa distância com o efeito da nova arma (ex.: troca pra Infernum e o follow-up vira um cone AoE). Isso transforma o mark shot do Calibrum num burst multi-alvo que nenhum outro marksman consegue replicar, e é a maior vantagem mecânica isolada que você tem sobre um Aphelios casual.
