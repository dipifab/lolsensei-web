---
title: "Gragas Jungle Build & Guia — Patch 16.9"
slug: "gragas-jungle"
language: "pt-br"
patch: "16.9"
champion: "gragas"
role: "jungle"
last_updated: "2026-05-02"
description: "Guia do Gragas jungle para League of Legends Patch 16.9: clear path, rotas de gank, build AP bruiser, matchups principais, power spikes, erros comuns e uma dica final."
quick_learn:
  champion_dd_id: "Gragas"
  difficulty: 2
  damage_type: "magic"
  champion_class: "AP Bruiser / Engage"
  abilities:
    - key: "P"
      name: "Happy Hour"
      description: "Cada habilidade lançada cura o Gragas em uma quantia pequena (cooldown interno de 5 segundos). Sustenta ele durante o clear da jungle sem precisar basear cedo."
      dd_spell_id: "Gragas_Passive"
    - key: "Q"
      name: "Barrel Roll"
      description: "Rola um barril até um ponto. Recaste para detonar, ou ele explode sozinho após 4 segundos. Dano e slow escalam com o tempo de carga — espere o pico antes de detonar."
      dd_spell_id: "GragasQ"
    - key: "W"
      name: "Drunken Rage"
      description: "Channel de 1 segundo que dá 30% damage reduction por 3 segundos e potencializa a próxima auto-attack com dano mágico bônus. Use antes do E para absorver o aggro do camp."
      dd_spell_id: "GragasW"
    - key: "E"
      name: "Body Slam"
      description: "Dash que para no primeiro inimigo atingido, causando dano AOE e stunando por 1 segundo. É o seu único gap-close, único hard CC e a principal ferramenta de engage."
      dd_spell_id: "GragasE"
    - key: "R"
      name: "Explosive Cask"
      description: "Lança um barril que empurra os inimigos para longe do centro do impacto. Use para peelar aliados, fazer pickoff em alvos isolados, ou jogar um carry na frontline do seu time."
      dd_spell_id: "GragasR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4629", name: "Cosmic Drive" }
    - { dd_id: "6653", name: "Liandry's Torment" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra assassins ou dive comps (Zed, Talon, Kha'Zix): a stasis após o R dá tempo do seu time limpar o fight"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target (Ahri charm, Lissandra R, Morgana Q): o spell shield come a lockdown que cancelaria seu R"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contra times com 3+ hard CC (Leona, Sejuani, Lissandra): a tenacity reduz stuns e protege o W"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "contra Magic Resist empilhada ou comps de cura (Soraka, Vladimir, Dr. Mundo): magic pen e zona de healing-reduction no R"
    - dd_id: "3089"
      name: "Rabadon's Deathcap"
      against: "em jogos snowball com 3+ itens de vantagem para one-shotar squishies com Q-E em vez de fazer engage"
  base_combo: ["W", "E", "Q", "AA", "R"]
  win_condition: "Use R para jogar carries inimigos (ADC, mid mage) na frontline do seu time nas brigas de objetivo; W antes do E para absorver dano, depois encadeie Q na mistura para amplificar o AP burn do Riftmaker."
  weakness: "E é o seu único gap-close e único stun. Se errar ou usar pra clearar camp logo antes de um invade, fica sem engage e sem escape por 12+ segundos."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8275, name: "Nimbus Cloak", icon_path: "perk-images/Styles/Sorcery/NimbusCloak/6361.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primária em vez das árvores de dano: Gragas mergulha pra engage e precisa sobreviver à cadeia de CC em cima. Aftershock proca quando o Body Slam stuna, dando resistências sob pressão. Font of Life, Conditioning e Revitalize mantêm ele tanky no late."
    secondary_rationale: "Sorcery secundária: Nimbus Cloak dá um burst de Movement Speed após Smite ou Flash, então você encadeia Body Slam de ângulos difíceis, e Transcendence traz Ability Haste mais reset de auto-attack on takedown que combina com os skirmishes prolongados do Gragas."
    secondary_alternative: "Se o time inimigo tem 4+ ameaças AD (Zed mid, Tryndamere top, Vayne bot), troque Sorcery secundária por Precision com Triumph (heal em takedown) e Legend: Tenacity (tenacity extra que stacka com Mercury's Treads)."
matchup_draft:
  pick_into:
    - examples: ["master-yi", "kindred", "graves"]
      archetype: "Carries de jungle squishy sem hard CC"
      reason: "O stun do Body Slam quebra o pattern de kite deles: Master Yi não sai com Alpha Strike, Kindred não dança o reset de auto-attack, Graves não consegue se reposicionar. Depois R os tira de cima do seu carry no engage de follow-up."
    - examples: ["karthus", "amumu", "warwick"]
      archetype: "Junglers com ult de channel longo"
      reason: "Explosive Cask interrompe o R do Karthus, do Amumu e do Warwick. Um único knockback no meio do fight cancela todo o payload de teamfight deles, e o Gragas só precisa pousar o centro do barril perto do alvo que está channelando."
    - examples: ["fiddlesticks", "shaco"]
      archetype: "Gankers baseados em stealth"
      reason: "O damage reduction do W absorve o burst de abertura (fear+drain de Fiddlesticks, backstab de Shaco) enquanto o Body Slam stuna eles em pleno cast. O engage deles depende de cast time não contestado — Gragas tira isso."
  counterpicks:
    - examples: ["lee-sin", "viego", "vi"]
      archetype: "Skirmishers móveis com vários gap-closers"
      reason: "Cobrem distância mais rápido que o único Body Slam do Gragas e começam o fight antes de você fazer W em E. Além disso, Viego possuindo seu frontliner no meio do fight transforma seu engage em um 1v2."
    - examples: ["kayn"]
      archetype: "Bruisers anti-tank com true damage"
      reason: "Kayn (Rhaast) causa true damage percentual sobre HP máximo que ignora as resistências do Gragas e o damage reduction do W. Um Gragas tank no late perde 1v1 no river mesmo com resistências cheias."
    - examples: ["nidalee", "elise"]
      archetype: "Junglers de poke a longo alcance"
      reason: "As lanças da Nidalee e a spider-form da Elise corroem o Gragas fora do alcance do Body Slam. Ele não tem como fechar a distância sem gastar E — uma vez gasto, os dois junglers saem do trade andando."
---

## Visão geral

Gragas é um jungler AP bruiser tanky (um fighter que monta AP para o dano mas com HP e resistências suficientes pra sobreviver na frontline) cujo plano de jogo gira em torno de uma jogada grande: jogar um carry inimigo (o champion de dano alto em torno do qual o time inimigo joga) dentro do seu time com **Explosive Cask (R)**. O **Body Slam (E)** é o único gap-close (habilidade pra fechar distância rápido) e o único hard CC, então o bom Gragas joga com paciência — limpe os camps, guarde **E** pro gank ou pro engage, e só comprometa de verdade quando **R** estiver disponível. Ele tem sustain natural (regeneração passiva de HP em luta) graças ao **Happy Hour (P)** que permite clearar sem basear, e **Drunken Rage (W)** abre uma janela de 30% damage reduction que absorve o primeiro burst em qualquer skirmish curto.

Sua condição de vitória é o primeiro pickoff no nível 6 — tirar um inimigo isolado da posição com **R** pra uma kill grátis. A partir daí o time joga em torno do próximo cooldown de **R**: ande até o jungler inimigo quando ele entrar no seu river, ou monte uma briga de Drake (monstro neutro que dá ao time um buff permanente) onde um flip bom de **R** mata o ADC inimigo (o marksman da bot lane, principal damage dealer no late) antes mesmo da luta começar. Se **R** não estiver pronta, não comece luta — você é um enabler (champion que cria oportunidades de fight pro time), não um duelista 1v1.

## Build recomendada

**Itens iniciais:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Starter padrão de ranged-Smite — as auto-attacks do Gragas contam como ranged pra escolha do starter.

**Itens core (na ordem):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade do Hailblade (auto-evolui por volta do minuto 3-4 quando você junta XP suficiente). O companion de AP-burst: cada auto-attack pós-cast soma dano mágico bônus e um slow que stacka com o **Q**.
2. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — item de AP burn sustentado. Dá omnivamp (life-steal que funciona em todo tipo de dano, não só auto-attacks) e ramp de dano em fights longos, perfeito pros engages prolongados do Gragas.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plana. Pegue ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** se o time inimigo tiver 3+ habilidades de hard CC.
4. ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — Ability Haste mais Movement Speed depois de causar dano em champion. A mobilidade deixa você se reposicionar no fight pra acertar um segundo stun de **E** quando o cooldown voltar.
5. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — Ability Haste mais um burn mágico percentual sobre HP máximo que ramp quanto mais o fight dura. Pune frontliners inimigos tanky (Sejuani, Ornn) onde AP plano começa a perder eficiência.

**Itens situacionais:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra assassins ou dive comps. Ative o ativo logo após o **R** pra sobreviver ao burst de follow-up.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico single-target (Ahri charm, Lissandra **R**). O spell shield come a habilidade de lockdown que cancelaria seu **R**.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — contra comps que empilham cura (Soraka, Vladimir, Dr. Mundo). O ativo do R abre uma zona de healing-reduction que combina com seu knockback.
- ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — só quando você está 3+ itens à frente e quer trocar de engage pra one-shot.

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** por padrão. Troque por ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contra crowd control (CC) pesado, ou ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** quando 4+ inimigos causam dano físico.

**Skill order:** Maxe **E** primeiro (seu stun e principal fonte de dano), **Q** em segundo (waveclear e poke à distância), **W** por último. Coloque ponto em **R** nos níveis 6, 11 e 16.

**Runas:** árvore primária **Resolve** com **Aftershock**, **Font of Life**, **Conditioning**, **Revitalize**. Secundária **Sorcery** com **Nimbus Cloak** e **Transcendence**. Stat shards: Ability Haste, Adaptive Force, Health Scaling.

## Matchups principais

- **Lee Sin / Viego:** Skirmishers móveis (junglers feitos pra fights curtos e repetidos) que ganham de você em luta antes do nível 6. Não conteste o primeiro Scuttle Crab (o caranguejo do river que dá vision e buff de Movement Speed pra quem matar); limpe camps cheios e busque scaling (crescer com itens e níveis) até o **R** no nível 6, onde um bom flip de cask iguala o matchup na hora.
- **Master Yi / Kindred:** Carries de jungle squishy (pouca HP, sem resistências). Acompanhe o pathing deles no minimap; se Yi está bot side e você top, desça com HP cheio e procure um gank na mid lane no nível 6 — seu stun de **E** quebra o reset cycle do Alpha Strike (dash intargetável).
- **Karthus:** Ele escala em ameaça de teamfight ult. Seu trabalho é interromper o channel dele com **R** — acompanhe o spawn do nível 6 dele e avise mid que você cancela a ult toda vez que estiver disponível.
- **Sejuani / Amumu:** Tanks front-to-back. Não tente out-engagear sozinho; deixe eles comprometerem primeiro, depois **R** o carry deles pra fora da parede que criaram. Seu stun de **E** encadeia com o CC deles pra uma kill garantida em quem foi pinado.
- **Nidalee:** O poke a longo alcance (chip damage de fora do alcance inimigo) pune o seu wind-up de engage. Compre ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** cedo; passe pela fog of war (as zonas cinzas da mapa sem visão) na sua jungle e nunca face-tanke as lanças dela no river de lane enquanto está gankando.

## Power spikes e condições de vitória

- **Nível 3 (E desbloqueado):** Primeira janela de gank. Entre numa lane que tenha **Flash** down no oponente, **W** antes de entrar em vision, depois **E** atravessando uma parede pro stun surpresa. Prepare seu laner pro follow-up.
- **Nível 6 (primeira Explosive Cask):** Power spike. Com um único **R** você joga um laner inimigo over-extended dentro da sua torre ou no gank do seu jungler. Force uma boa luta antes de basear.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker completo (~ minuto 13-15):** Primeiro spike grande de luta. AP burn sustentado e omnivamp significam que você troca de forma estendida nos skirmishes; force um Drake fight aqui.
- **3 itens + botas (~ minuto 25-28):** Pico de teamfight. Aftershock mais ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** mais ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** mais ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** te tornam o engager mais confiável da mapa. Agrupe com o time e procure brigas de objetivo.

## Erros comuns

- **Usar E pra clearar camp quando vem invade.** **E** tem 14 segundos de cooldown no rank 1. Se você Body Slam num Krug e o jungler inimigo entra 3 segundos depois, fica sem escape e sem stun. Guarde **E** quando o minimap mostrar o jungler inimigo perto da borda da sua jungle.
- **Jogar R como dano de abertura.** **R** é knockback, não spell de dano. Se você lança sem plano de posicionamento, espalha o time inimigo pra longe do seu follow-up. Sempre visualize onde o carry inimigo vai cair antes de apertar **R** — jogue ele dentro do seu time, não pra longe.
- **Maxar W em vez de E.** **W** não dá stun, gap-close nem clear speed pro Gragas — **E** faz as três. Maxe **E** primeiro toda partida.
- **Gankar antes do nível 3.** Sem **E**, Gragas não tem como pegar um alvo que não esteja já tower-divando você. Pule ganks pré-3; clear com tempo de dois camps e ganke com o combo **W-E** no nível 3.
- **Duelar Kayn solo após a transformação.** Kayn-Rhaast causa true damage que ignora suas stats tank. Evite 1v1s na jungle dele no late game; agrupe com o time pros objetivos.

## Dica avançada

Treine o combo **R-Flash**: lance **R** nos pés do carry inimigo, depois **Flash** no meio do cast pra reposicionar o ponto do barril ao lado do seu time. O barril ainda detona da posição flashada, então um carry parado em distância segura é jogado na frontline do seu time antes mesmo de perceber que o ângulo mudou. É a mecânica de Gragas mais valiosa no solo queue patcheado e vale 30 minutos de practice tool antes de tentar no ranked.
