---
title: "Fiddlesticks Jungle Build & Guia — Patch 16.9"
slug: "fiddlesticks-jungle"
language: "pt-br"
patch: "16.9"
champion: "fiddlesticks"
role: "jungle"
last_updated: "2026-05-02"
description: "Guia de Fiddlesticks jungle para League of Legends Patch 16.9: build AP, engage com Crowstorm, matchups principais, power spikes, erros comuns e uma dica final."
quick_learn:
  champion_dd_id: "Fiddlesticks"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Specialist"
  abilities:
    - key: "P"
      name: "A Harmless Scarecrow"
      description: "O slot de trinket vira cargas de efígie. Coloque espantalhos falsos para vision; quem os vê toma um fear breve e a efígie explode."
      dd_spell_id: "Fiddlesticks_Passive"
    - key: "Q"
      name: "Terrify"
      description: "Mira um único inimigo. Dar dano com spell enquanto está unseen também ativa Terrify automaticamente. Faz o alvo fugir de você por 1-2.5s."
      dd_spell_id: "FiddleSticksQ"
    - key: "W"
      name: "Bountiful Harvest"
      description: "Channel que drena HP de inimigos próximos (cura você). No fim aplica dano bônus de execução. Ferramenta principal de clear e sustain na jungle."
      dd_spell_id: "FiddleSticksW"
    - key: "E"
      name: "Reap"
      description: "Foice em bumerangue num cone amplo: lentifica todos os atingidos e silencia quem está na linha central. Vai e volta, atinge duas vezes."
      dd_spell_id: "FiddleSticksE"
    - key: "R"
      name: "Crowstorm"
      description: "Channel de 1.5s, depois blink ao ponto-alvo com dano AOE por segundo ao redor de Fiddle por 5s. Lance do fog of war ou atrás de paredes."
      dd_spell_id: "FiddleSticksR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "E" }
    - { level: 9, key: "W" }
    - { level: 10, key: "E" }
    - { level: 11, key: "R" }
    - { level: 12, key: "E" }
    - { level: 13, key: "E" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target que interrompe seu R (Lissandra R, Veigar E, Twisted Fate stun)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "swap quando 2+ inimigos compram um item de Magic Resist (limiar ~200+ MR)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps que empilham cura (Aatrox, Soraka, Vladimir, Dr. Mundo) — aplica Grievous Wounds"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "quando você precisa de Movement Speed extra para chase ou entrar no range de Crowstorm vindo do fog"
  base_combo: ["R", "Q", "E", "W"]
  win_condition: "Acerte Crowstorm do fog of war em 2+ inimigos agrupados num objetivo. Bountiful Harvest finaliza os sobreviventes enquanto o silence de Reap impede o counter-engage."
  weakness: "O channel de 1.5s do R é interrompível por CC duro single-target, dashes e Cleanse/QSS. Sem surpresa do fog, o engage telegrafa e o time te kita para fora."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8128
      name: "Dark Harvest"
      icon_path: "perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
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
    primary_rationale: "Dark Harvest stacka rápido em fights agrupados via AOE de Crowstorm. Sudden Impact procca no blink do R para magic pen extra. Treasure Hunter acelera Liandry's. Ultimate Hunter corta o cooldown do Crowstorm para encadear ults entre objetivos."
    secondary_rationale: "Sorcery secundário: Manaflow Band resolve os problemas de mana early-jungle no spam de W; Gathering Storm escala num power spike late que casa com Rabadon's Deathcap."
    secondary_alternative: "Contra engage de CC duro single-target (Lissandra, Malzahar, Veigar) troque Sorcery por Resolve com Bone Plating (5s de redução de dano após o primeiro hit) e Revitalize (+5% no heal de Bountiful Harvest)."
matchup_draft:
  pick_into:
    - examples: ["udyr", "warwick", "master-yi"]
      archetype: "Junglers farmadores sem ferramenta de flank"
      reason: "Eles escalam linearmente com farm mas não conseguem punir sua invade entre níveis 1 e 3. Ao chegar no 6, seu Crowstorm do fog vence os engages face-tank deles porque não têm escape pré-cast."
    - examples: ["karthus", "ziggs", "xerath"]
      archetype: "Times de artilharia imóveis que se agrupam"
      reason: "Magos de backline sem escape são one-shotados por um Crowstorm de flank porque não conseguem dashar para fora da AOE antes do channel tickar."
    - examples: ["azir", "orianna", "viktor"]
      archetype: "Magos de controle sem dash"
      reason: "Seu R blinka além do zone control deles antes que consigam encaixar o setup CC. Se você aparece do fog, eles não têm ferramenta de saída."
  counterpicks:
    - examples: ["lee-sin", "elise", "kha-zix"]
      archetype: "Invaders de early-game com pressão de tracking"
      reason: "Eles ameaçam sua jungle nos níveis 2-3 e te forçam a jogar defensivo. Fiddle não tem escape pré-6: invadido não consegue fugir, e o clear é lento sem setup de vision via efígies."
    - examples: ["yasuo", "samira"]
      archetype: "Carries com Wind Wall / bloqueio de projéteis"
      reason: "Wind Wall bloqueia seu Q (projétil único) e a maior parte de Reap. Eles anulam o cast de engage no pior momento, te deixando canalizando Crowstorm sem follow-up."
    - examples: ["lissandra", "malzahar", "veigar"]
      archetype: "Magos de CC duro point-and-click"
      reason: "Interrompem seu channel de 1.5s do Crowstorm sem skill — Lissandra R, Malzahar R, Veigar E transformam seu engage em ult desperdiçada e morte instantânea."
---

## Visão geral

Fiddlesticks é um jungler de emboscada cujo kit inteiro gira em torno de um único movimento: blinkar para um fight do fog of war com **Crowstorm (R)** e dar burst em AOE no time inimigo enquanto ainda estão agrupados. Fora dessa janela, ele é um mago lento e imóvel, com duelo fraco e ulti de channel longo, então a diferença entre ganhar e perder uma partida está quase toda no *setup de vision* e no *timing do engage* (quando e onde você aperta R).

O plano de jogo: limpe a jungle rápido com **Bountiful Harvest (W)**, coloque efígies no rio e ao redor da jungle inimiga para ter vision (e fears breves em quem as vê), depois procure uma posição de flank escondida perto do próximo objetivo (Drake ou Baron). Quando 2+ inimigos estão agrupados no objetivo, blinke com **R**, solte **E** para slow + silence, depois **W** e **Q** para finalizar quem foge. Sem o fator surpresa o kit rende pouco — Fiddle é binário: ace de setup ou ult desperdiçada.

## Build recomendada

**Itens iniciais:** ![Emberknife](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1035.png) **Emberknife** (o starter de jungler melee que dá um boost de dano ao Smite em monstros e inicia a quest do pet) + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**Itens core (nesta ordem):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade do Emberknife (auto-evolui por volta do minuto 3-4 quando XP suficiente é acumulado dos camps de jungle). Companion para burst de AP (Ability Power, a stat que escala dano mágico): adiciona um efeito de dano mágico que ativa (um "proc") na auto-attack logo após uma spell, alinhando com o burn de Liandry's.
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — primeiro item completo. O burn percentual sobre HP (dano que escala com HP máximo do alvo) acumula com cada tick da AOE de Crowstorm em tanks, transformando sua ulti em ferramenta de teamwipe.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic pen plana. Barato, imediato, default para qualquer AP antes do mid-game.
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — entre em estase no instante em que os ticks de AOE do Crowstorm acabam, te salva do foco que você come logo após o engage. Obrigatório se o inimigo tem um diver ou assassino.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de late-game (+35% AP bônus). Seu maior slot de AP, faz Crowstorm one-shotar squishies.

**Itens situacionais:**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico single-target que interrompe seu R (Lissandra R, Veigar E, Twisted Fate stun). O escudo bloqueia uma habilidade antes de pararem sua ulti.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — quando 2+ inimigos compram qualquer item de Magic Resist.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra comps que empilham cura (Aatrox, Soraka, Vladimir, Dr. Mundo). Aplica Grievous Wounds (corta 40% das curas).
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — quando você precisa de Movement Speed extra para chase ou entrar no range do R vindo do fog.

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** por padrão. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** se 2+ inimigos têm CC duro e Banshee's sozinho não basta.

**Skill order:** Maxe **W** primeiro (clear e sustain na jungle), **E** segundo (slow + silence em fight), **Q** por último. Ponto em **R** nos níveis 6, 11, 16.

**Runas:** Árvore primária **Domination** com **Dark Harvest**, **Sudden Impact**, **Treasure Hunter** e **Ultimate Hunter**. Secundária **Sorcery** com **Manaflow Band** e **Gathering Storm**. Contra engage de CC duro single-target (Lissandra, Malzahar, Veigar) troque Sorcery por **Resolve** com **Bone Plating** e **Revitalize**.

## Matchups principais

- **Lee Sin / Elise:** Junglers de invade early. Não conteste seu próprio buff side no nível 1; vá cross-map e comece pelo buff oposto com leash (seus laners ajudam a iniciar o camp batendo nele por alguns segundos para você tomar menos dano), depois rote para o Scuttle Crab do rio. Solte uma efígie no rio para spotar o gank e warde as entradas da sua jungle até o minuto 3.
- **Karthus:** Corrida de scaling vs scaling. Ele te supera no clear e no late. Você precisa forçar um gank no nível 6 ou invadir a jungle dele com vision; se deixar ele chegar no 11, a ulti global supera suas vitórias de objetivo único.
- **Yasuo bot ou mid:** Wind Wall bloqueia o projétil do **Q** e a linha central de silêncio do **E**. Engage Crowstorm de um ângulo lateral para ele não conseguir cobrir o time com a parede; flanqueie de uma brush de lane não óbvia.
- **Zac:** Tank de engage espelho com E gap-close. O silêncio do seu **E** mata o timing de detonação do W dele se você acertar durante o channel; em teamfight cara ou coroa, vence o time que solta primeiro **R** + silence.
- **Master Yi:** Ele é CC-immune ao silêncio do seu **E** com o dash de **Q** e a ulti Highlander. Guarde o **Q** para fearar ele para fora da janela de Highlander; sem o fear, o cleanup late game dele transforma seu engage em 1-por-3.

## Power spikes e condições de vitória

- **Nível 6 (primeiro Crowstorm):** Sua primeira janela de gank. Monte vision no fog do rio 30s antes, depois entre. Um R + E limpo em 2 inimigos sob torre é double kill garantido.
- **Nível 9 (W maxado):** Seu clear de jungle bate o pico de velocidade e o sustain em fight pula. Force um Drake fight aqui.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minuto 16-18):** A AOE de Crowstorm agora corta tanks. Force fights de Baron/Drake e procure flanks cross-map.
- **Nível 16 + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ minuto 28):** Crowstorm one-shota qualquer squishy que não comprou um item de Magic Resist. Agrupe com o time e force o próximo objetivo grande.

## Erros comuns

- **Usar R sem setup de fog of war.** Um Fiddle visível com a barra de channel à mostra é um dodge grátis para o time inimigo. Sempre lance da brush, atrás de uma parede ou de dentro de um camp de jungle não wardado. Se virem a barra, andam para longe por 1.5s e você queima 80 mana mais sua única ferramenta de engage.
- **Engage solo com o time longe.** Crowstorm é ferramenta de engage de time, não pick de assassino. Se seu time está a 2+ telas, sua ulti pega 1 inimigo e você morre no follow-up. Cheque a posição dos colegas antes de apertar R.
- **Ignorar colocação de efígies.** Efígies dão vision e fears breves. Cargas de trinket não usadas são vision grátis que o inimigo *não* paga para apagar. Solte uma no rio antes de cada objetivo.
- **Usar Q para last-hitar camps de jungle.** Q é seu único setup single-target para fears em fight. Guarde para os fights — W e E limpam camps muito bem.

## Dica avançada

O channel de 1.5s do **Crowstorm** é interrompível por qualquer coisa que te desloque ou stune, mas se você apertar **R** no instante em que um alvo entra numa brush onde você está plantado, o corte breve de vision não dá tempo de reação antes do blink aterrissar. Treine o timing em customs: esconda-se na brush, espere um inimigo andar adjacente, aperte R de dentro do personal space dele. O blink mantém você grudado nele por toda a duração da AOE, e o pânico de um Fiddle face-of-fog custa mais Flashes do que qualquer outro engage do jogo.
