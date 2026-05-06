---
title: "Draven Bot Build & Guia — Patch 16.9"
slug: "draven-bot"
language: "pt-br"
patch: "16.9"
champion: "draven"
role: "bot"
last_updated: "2026-04-29"
description: "Guia Draven bot lane para League of Legends Patch 16.9: catch dos machados, build de snowball, matchups principais, power spikes, erros comuns e uma dica avançada."
quick_learn:
  champion_dd_id: "Draven"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Marksman / Snowball"
  abilities:
    - key: "P"
      name: "League of Draven"
      description: "Pegar uma Spinning Axe ou matar uma unidade acumula stacks de Adoration. Takedowns em champion convertem os stacks em ouro bônus — o motor de snowball do Draven."
      dd_spell_id: "Draven_Passive"
    - key: "Q"
      name: "Spinning Axe"
      description: "Carrega o próximo basic com dano físico bônus. O machado quica para cima depois do golpe: pegá-lo recarrega outro Q, até dois empilhados ao mesmo tempo."
      dd_spell_id: "DravenSpinning"
    - key: "W"
      name: "Blood Rush"
      description: "Buff curto de Move Speed e Attack Speed. Pegar uma Spinning Axe reseta o cooldown — sua mobilidade escala com a qualidade dos catches."
      dd_spell_id: "DravenFury"
    - key: "E"
      name: "Stand Aside"
      description: "Machado linear que empurra inimigos para o lado e os lentifica. Principal ferramenta de peel e disengage; também reposiciona alvos para o follow-up do support."
      dd_spell_id: "DravenDoubleShot"
    - key: "R"
      name: "Whirling Death"
      description: "Dois machados gigantes lançados pelo mapa, retornáveis no recast. O dano cai por inimigo atingido mas executa alvos abaixo de um limiar de HP ligado a Adoration."
      dd_spell_id: "DravenRCast"
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
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3072", name: "Bloodthirster" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contra comps com muita cura (Soraka, Yuumi, Aatrox, Vladimir) — aplica Grievous Wounds e corta a cura pela metade"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra burst AP pesado (Syndra mid + comps de dois mages) — escudo abaixo de 50% HP e Magic Resist"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "contra dive de assassins (Zed, Talon, Rengar) — a revive deixa você cobrar os stacks de Adoration antes de morrer de novo"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contra CC single-target de lockdown (Morgana Q, Lux Q, Ashe R) — o spell shield bloqueia o primeiro hard CC"
  base_combo: ["Q", "AA", "W", "AA"]
  win_condition: "Acumule Adoration nos catches e last-hits, depois cobre na primeira kill para um spike de 600+ ouro. Transforme a vantagem em items mais rápidos e snowballe cada skirmish antes do ADC inimigo escalar."
  weakness: "Sem dash, sem escape, e o pattern de catch te prende em arcos previsíveis. Hard CC nos níveis 1-3 te mata antes do reset do W, e perder Adoration arruína sua curva de ouro."
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
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["aphelios", "kog-maw", "twitch"]
      archetype: "Marksmen hyper-scaling com early fraco"
      reason: "O nível 1-3 deles é só farmar; o Q do Draven dá dano bônus enorme em cada catch e o W reseta no catch, então ele pode correr atrás antes deles chegarem em dois itens."
    - examples: ["jinx", "sivir", "ashe"]
      archetype: "Marksmen imóveis sem dash"
      reason: "O E do Draven empurra e lentifica, o W dá burst de Move Speed: esses ADCs não conseguem disengar quando ele avança. Perdem todo all-in pre-6."
    - examples: ["soraka", "yuumi", "karma"]
      archetype: "Supports enchanters que heal-tradam na lane"
      reason: "O dano do Q do Draven empilha rápido demais para lanes de poke-and-heal. Dois machados pegos em sequência atravessam um ciclo de cura da Soraka, e o snowball converte cada kill em 200+ ouro de vantagem."
  counterpicks:
    - examples: ["caitlyn", "ezreal", "varus"]
      archetype: "Marksmen de poke a longa distância"
      reason: "Pokeiam fora dos 550 de attack range do Draven enquanto ele está preso nos arcos de catch. Cada minuto sem engagar é um minuto em que os stacks de Adoration somem no nada."
    - examples: ["leona", "nautilus", "blitzcrank"]
      archetype: "Supports de hard-engage com CC"
      reason: "Draven não tem dash nem imunidade. Uma cadeia de CC no nível 2 deleta ele enquanto os machados quicam inúteis na lane. Pre-6 ele literalmente não consegue revidar."
    - examples: ["thresh", "morgana", "rakan"]
      archetype: "Supports de lockdown / pick"
      reason: "Um único hook do Thresh ou Q da Morgana para o Draven no meio do catch. Sem catch, os resets do Q caem, a velocidade do W some, e ele vira um ADC parado sem escape."
---

## Visão geral

Draven é um marksman snowball construído ao redor de uma única mecânica: pegar os próprios machados giratórios. Cada basic attack enquanto **Spinning Axe (Q)** está carregada sai como um machado que quica no ar — se Draven andar embaixo do ponto de queda, ele pega, dá um golpe bônus enorme e recarrega outro Q. Pode segurar até dois Spinning Axes empilhados ao mesmo tempo. A passive **League of Draven** transforma esses catches em ouro: cada catch e cada minion morto acumula stacks de Adoration, e o primeiro takedown em champion após um certo limiar de stacks os converte em um bônus de ouro (geralmente 100-500 ouro extras por kill).

O plano de jogo é brutal e direto: bullar a bot lane desde o nível 1, forçar uma kill antes do minuto 8, cobrar o spike de Adoration e power-farmar até um snowball lead (uma vantagem inicial que se compõe: kill → ouro → item → mais kills). O skill expression vive no posicionamento dos catches (prever onde o machado cai sem se expor a skillshots) e no uptime do **Blood Rush (W)** — cada catch reseta o W, então um Draven fluido fica permanentemente mais rápido que um Draven que erra dois machados em sequência.

## Build recomendada

**Itens iniciais:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 1 Health Potion. Doran's Blade é o starter padrão de marksman: pequeno bônus de Attack Damage (AD), um pouco de HP e lifesteal (você se cura por uma porcentagem do dano causado nos basic attacks). Draven precisa de cada ponto de AD porque o Q escala com o dano do basic-attack, e o pattern de catch é brutal no seu HP se você não recuperar via lifesteal.

**Itens core (em ordem):**

1. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — primeiro item de snowball. Lethality (um tipo de penetração de armadura que ignora uma parte da armadura do alvo, especialmente útil contra alvos squishy — campeões com pouca defesa como ADCs e mages) mais uma execução abaixo de 5% HP transforma cada basic Q-carregado em ameaça de kill. Casa com Adoration: mais kills significa mais stacks, e mais stacks significa spikes de ouro maiores por takedown.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — botas de attack speed (mais basics por segundo). Default no Draven porque mais basics significa mais chances de catch por segundo, e o W reseta em cada catch.
3. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — multiplicador de dano crítico. Depois de dois itens crit (The Collector conta como uma pseudo-fonte crit pelo scaling de AD, IE é o segundo), Infinity Edge desbloqueia 175% de dano crítico. O dano de Spinning Axe escala com o seu AD, e um catch crítico nesse ponto dá one-shot na maioria dos alvos squishy.
4. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — lifesteal (você se cura por uma porcentagem do dano causado nos basic attacks) mais um escudo a partir do HP cheio. Draven morre para assassins porque não tem escape; o escudo te dá um fight extra por teamfight.
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — slot final de penetração de armadura que escala com o HP bônus do inimigo (mais eficaz contra tanks maiores). Substitua por Mortal Reminder se o time inimigo tiver muita cura.

**Trocas situacionais:**

- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — mesmo slot do Lord Dominik's, escolha esta versão quando o time inimigo tem muita cura (Soraka, Yuumi, Aatrox, Vladimir): aplica Grievous Wounds, que corta a cura inimiga pela metade.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — slot late contra comps de burst AP (Syndra + Veigar + Annie). O escudo ativa abaixo do limiar de HP — ou seja, quando você cai abaixo de 50% HP — e absorve dano mágico.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — slot final contra dive de assassins (Zed, Talon, Rengar). A revive te dá 4 segundos para fugir ou terminar a cobrança de Adoration, e a stat de armor reduz o dano do dive em ~20%.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — substitui Bloodthirster contra CC single-target de lockdown (Morgana Q binding, Lux Q root, Ashe R stun). O spell shield bloqueia o primeiro hard CC a cada 40 segundos — o tempo ganho você gasta soltando basics em vez de ficar acorrentado.

**Skill order:** Maxe **Q** primeiro (dano bruto do machado, o eixo do seu snowball), **W** em segundo (mais Move Speed e Attack Speed para o flow de catch), **E** por último (utility — um ponto no nível 3 basta até o late game). Ponto em **R** nos níveis 6, 11, 16 como sempre.

**Runas:** Árvore primária **Precision** (construída em torno de basic attacks): **Conqueror** como keystone (empilha nos basics e converte parte do dano em cura nos fights longos — perfeita para o pattern de all-in do Draven), depois **Triumph** (cura e ouro bônus em takedowns — casa com a cobrança de Adoration), **Legend: Alacrity** (mais attack speed por takedown empilhado), **Coup de Grace** (dano extra em alvos com pouco HP). Árvore secundária **Domination** com **Sudden Impact** (Lethality extra após um dash ou buff — Draven pega via W) e **Treasure Hunter** (ouro extra por takedown único — combina com a identidade snowball).

## Matchups principais

- **Caitlyn:** A lane mais difícil do board. O attack range de 650 dela supera em poke (chip do seu HP de fora do seu próprio range) os 550 do Draven em cada trade. Avance só quando ela estiver animation-locked num last-hit, e nunca pise em uma trap para pegar um machado — deixe o machado cair se ele aterrissar numa trap.
- **Aphelios:** Lane grátis pre-6. O Q do Aphelios tem 9 segundos de cooldown e as armas dele acabam munição; o Q do Draven é permanente. Pushe forte o nível 2 (force a wave a crashar primeiro do lado dele), engage na arma mais fraca dele (Severum ou Crescendum — ambas main-hand de melee range) e queime o Flash dele antes do minuto 5.
- **Lucian:** ADC early-game tier espelho. Ele te supera em trade numa janela de 1 segundo com o combo Q-AA-AA da passive; você o supera em uma janela de 4 segundos com Qs empilhados. Recuse short trades (não engage), commite em extended trades (um "trade" = uma troca rápida de golpes; "extended trade" = um fight prolongado de 3+ segundos onde os Qs empilhados do Draven superam o burst do Lucian).
- **Jhin:** Ele te poke pre-6 (o dano à distância dele chip seu HP de longe nos níveis iniciais) mas perde em all-in (um fight de comprometimento total onde você vai pra kill sem opção de fallback) no reload do 4º tiro. Acompanhe o contador de tiros dele; engage em "0/4" ou logo depois dele desperdiçar um tiro num minion. O W root dele é 1 segundo de basics grátis num Draven que não tem dash pra desviar.
- **Samira:** Ela quer empilhar o rank S da passive para a **R** na lane. Não trade com ela depois que ela atingir S: afaste-se, recall (volte para a base) e re-engage só com HP cheio. A **R** dela supera em DPS no melee range, mas um E do Draven (Stand Aside) joga ela para fora do range do channel e reseta o fight.

## Power spikes e condições de vitória

- **Nível 2:** O Q do Draven dá dano bônus enorme já no rank 1. Com um ponto em **W** para Move Speed e Attack Speed, o all-in no nível 2 é um dos mais fortes do jogo — a maioria das partidas de Draven se decide em quem aterrissa o trade do nível 2.
- **Nível 6 com primeira kill:** Whirling Death **R** vira botão de kill em HP baixo — executa (mata instantaneamente) qualquer alvo abaixo de um limiar de HP ligado aos seus stacks de Adoration. Se você passou 6 níveis pegando machados, o limiar é alto o bastante para finalizar um inimigo em fuga do outro lado do mapa.
- **![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) The Collector completo (~ minuto 11-13):** Spike do primeiro item (um salto de power claro ligado a um milestone de nível ou item). Lethality mais a execução em 5% HP significa que cada basic Q-carregado ameaça kill em um alvo já chip-damaged. Force um fight nesse timing — uma cobrança de Adoration aqui costuma financiar o segundo item 3 minutos antes.
- **Spike de 3 itens (Collector + Berserker's + Infinity Edge por volta do minuto 22-24):** O burst do Draven (o dano que você solta numa janela de 1-2 segundos) se torna o mais alto de qualquer marksman. Jogue ao redor de objetivos (Dragon, Baron, Rift Herald — alvos neutros que dão buffs de time ou pressão de mapa) nesse ponto e procure picks (eliminar um inimigo isolado fora do teamfight) em alvos isolados nas side lanes.

## Erros comuns

- **Pegar machados em posições perigosas.** Um Draven que anda 400 unidades para dentro da wave para pegar um Q é um Draven que come uma trap de Caitlyn ou um engage de Leona. Se o machado cai num lugar ruim, **deixe cair** — perder um Q tudo bem, perder uma kill por overextension (passar do limite seguro pra perseguir uma jogada) não.
- **Acumular stacks de Adoration sem cobrar.** Os stacks decaem se você não cobrá-los em ~30 segundos depois de uma tentativa de takedown. Se chegar em 100+ stacks, force um fight ou pegue uma Scuttle skirmish (pequenos fights de 2-4 jogadores no rio pelo Scuttle Crab) — ficar farmando em cima dos stacks é jogar ouro fora.
- **Usar R por dano em vez de execução.** O dano do Whirling Death cai bruscamente por inimigo atingido. Jogá-lo numa wave é desperdício; lançá-lo como segundo machado (o recast de retorno) num alvo em fuga com HP baixo é uma jogada de 1500 ouro. Trate o R como um rifle de sniper, não uma ferramenta de waveclear.
- **Ficar parado em team fights.** Draven não tem dash. Dois segundos no mesmo lugar contra qualquer ameaça móvel (Zed, Diana, Camille) e você morre. Strafe (mova-se de lado enquanto ataca) entre cada basic — passos curtos, mas movimento constante. O arco do catch te empurra para frente; a velocidade do W te deixa resetar a posição logo depois.
- **Ignorar Stand Aside (E) como peel.** O E do Draven empurra inimigos para o lado e os lentifica. Em team fights não é só poke — é o disengage (uma habilidade que quebra um fight committado, desfazendo o all-in do inimigo) que te compra 1.5 segundos de basics grátis enquanto uma Camille ou um Hecarim se recuperam do knockback.

## Dica avançada

Treine o truque **W-into-fountain-axe-bounce** nas side lanes: jogue um Q vazio contra uma parede ou cobertura fina, depois ande com W imediatamente pela zona de quique. Como o Move Speed do Blood Rush decai rápido, castá-lo durante o arco do machado te leva a uma posição de catch que você não alcançaria sem, e aí você pega o machado para resetar o cooldown do W para a próxima jogada. Essa única mecânica é o que separa um Draven casual que erra um machado a cada três de um Draven fluido que pega cada Q que lança.
