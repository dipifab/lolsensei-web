---
title: "Aatrox Top Build & Guia — Patch 16.9"
slug: "aatrox-top"
language: "pt-br"
patch: "16.9"
champion: "aatrox"
role: "top"
last_updated: "2026-04-29"
description: "Guia do Aatrox top no Patch 16.9: build de bruiser, mecânica do Q na borda, matchups principais, power spikes, erros comuns e dica final."
quick_learn:
  champion_dd_id: "Aatrox"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Fighter / Drain Tank"
  abilities:
    - key: "P"
      name: "Deathbringer Stance"
      description: "Periodicamente, o próximo basic attack do Aatrox causa dano mágico bônus baseado no HP máximo do alvo e cura o Aatrox. Acompanhe o indicador no portrait."
      dd_spell_id: "Aatrox_Passive"
    - key: "Q"
      name: "The Darkin Blade"
      description: "Golpe com espadão em três casts em sequência, cada um com um formato diferente. Acertar a borda externa aplica knock-up breve e causa 25% de dano bônus. Principal fonte de dano do Aatrox."
      dd_spell_id: "AatroxQ"
    - key: "W"
      name: "Infernal Chains"
      description: "Projétil em forma de corrente que aplica slow no primeiro alvo. Se um champion ou large monster não sair da zona de impacto a tempo, é puxado de volta e leva dano novamente."
      dd_spell_id: "AatroxW"
    - key: "E"
      name: "Umbral Dash"
      description: "Passive: cura uma porção do dano causado em champions (lifesteal). Active: dash curto, usável durante o windup do Q para alinhar a borda ou para kite."
      dd_spell_id: "AatroxE"
    - key: "R"
      name: "World Ender"
      description: "Forma demoníaca: AD bônus, Move Speed que decai ao longo do tempo e self-healing aumentado. Causa fear nos minions inimigos próximos. Cada takedown estende a duração."
      dd_spell_id: "AatroxR"
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
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3071", name: "Black Cleaver" }
    - { dd_id: "3053", name: "Sterak's Gage" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "troque pelos Plated Steelcaps quando o time inimigo tem muito dano mágico ou cadeias de CC (ex.: Lissandra, Sett, ult de Malphite)"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra burst AP pesado (Syndra, Vex, Fizz mid que vai pro top): o spell shield bloqueia um grande golpe mágico e salva seu engage"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "contra times com dois fortes damage dealers físicos (Yasuo + Caitlyn): converte burst AD em sangramento lento, e o E lifesteal cura de volta"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contra lockdown single-target que apaga seu engage (Q da Morgana, hook do Blitzcrank, R da Lissandra)"
    - dd_id: "3155"
      name: "Hexdrinker"
      against: "compre como componente antes de finalizar Eclipse se está perdendo HP contra um top AP (Vladimir, Rumble) e precisa de MR antes do back"
  base_combo: ["W", "AA", "Q1", "E", "Q2", "Q3"]
  win_condition: "Acerte a borda do Q para knock-up, prenda com W e use E para realinhar. Converta a vantagem de Eclipse + Black Cleaver em vitórias 1v1 nas side lanes."
  weakness: "Todo o dano depende do timing do Q. Errou a borda, perdeu o trade. Hard CC, kiters de longo alcance e duelistas com true damage (Fiora, Camille) destroem o sustain dele."
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
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
    primary_rationale: "Precision como árvore primária: Conqueror cresce em cada trade prolongado, casando com a janela de Q + auto + Q do Aatrox. Triumph dá cura nos takedowns, Legend: Alacrity acelera as autos entre Qs e Last Stand recompensa lutar no vermelho, onde o E lifesteal mais cura."
    secondary_rationale: "Resolve como secundária: Second Wind regenera HP enquanto você é poked na lane e Revitalize amplifica tanto o E lifesteal quanto o R healing buff, mantendo Aatrox vivo nos trades longos."
    secondary_alternative: "Se a lane é tranquila e você quer escalar mais, troque Resolve por Inspiration com Magical Footwear (botas grátis no minuto 12) e Cosmic Insight (ability haste extra para mais Qs por luta)."
matchup_draft:
  pick_into:
    - examples: ["nasus", "yorick"]
      archetype: "Fighters melee imóveis sem ferramentas de engage"
      reason: "Aatrox vence trades antes do nível 6 com Qs na borda; a W os prende tempo suficiente para que não consigam empilhar suas passives em segurança nem escapar do all-in."
    - examples: ["ryze", "vladimir"]
      archetype: "Mages de curto alcance que precisam entrar para causar dano"
      reason: "Eles precisam chegar à distância melee para o output completo; Aatrox pune o gap com slow da W e knock-up de Q na borda antes que consigam fazer disengage."
    - examples: ["kayle", "k-sante"]
      archetype: "Champions fracos no early que escalam tarde"
      reason: "Aatrox tem uma das melhores curvas de laning early; consegue matar ou negar XP antes que cheguem aos itens late-game que os tornam ameaçadores."
  counterpicks:
    - examples: ["fiora", "camille"]
      archetype: "Duelistas de true damage com parry ou shield"
      reason: "O W da Fiora dá parry no knock-up do Q e os Vitals dela (marcas que ela coloca no Aatrox e ataca com auto causando true damage — dano que ignora armor e MR) ignoram a build drain tank; o E da Camille adiciona ainda mais true damage por cima."
    - examples: ["quinn", "teemo"]
      archetype: "Kiters de longo alcance ou baseados em invisibilidade"
      reason: "Eles ficam fora do range do Q e quebram os wind-ups do Aatrox com blind ou vault (o dash do E da Quinn, que empurra você para trás); ele não tem como fechar o gap sem queimar E e Flash juntos."
    - examples: ["malphite", "maokai"]
      archetype: "Tanks com hard CC instantâneo (sem mira)"
      reason: "As stuns e roots deles são point-and-click — nenhum projétil para desviar. Interrompem os recasts do Q no meio da animação e, uma vez que o Aatrox está locked down, ele não consegue mais curar via E lifesteal."
---

## Visão geral

Aatrox é um melee fighter (champion corpo a corpo que luta a curta distância) construído em volta de um **Q** com espadão de três casts. Cada cast cobre um formato diferente, e acertar a **borda externa** do golpe — não a zona interna — faz duas coisas extras: aplica um **knock-up** breve (joga o alvo no ar por um instante, impedindo-o de agir) e causa 25% de dano bônus. O kit também tem um slow + chain pull (**W**: uma corrente que aplica slow no primeiro inimigo atingido e o puxa de volta ao centro se ele não sair da zona de impacto a tempo), um dash curto (**E**: avanço rápido, ativável durante a animação do Q para reposicionar) e um ultimate em forma demoníaca (**R**: cooldown longo, buff grande). Ele é um **drain tank**: não um tank de verdade, mas um fighter que sobrevive curando o dano recebido pelo **lifesteal** (uma porcentagem do dano causado que volta como HP) do E, em vez de empilhar armor ou HP.

O game plan é simples de descrever e exigente de executar: na lane, aproxime-se com a **W** pronta como lock-down (o slow que prende o inimigo no lugar), depois solte o **Q** de modo que a **borda** do golpe pegue o alvo lentificado. Use o **E** para deslizar para a posição certa para o segundo e o terceiro Q. Do mid game em diante, busque duelos 1v1 nas side lanes e skirmishes 2v2 (mini-lutas entre dois jogadores de cada lado, longe do teamfight principal). Aatrox é um dos **bruisers** (champions que misturam dano e durabilidade) mais fortes do jogo assim que tem a R disponível e pelo menos um item finalizado.

## Build recomendada

**Itens iniciais:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. A regeneração passiva de HP do Doran's Shield carrega o Aatrox pelos primeiros leveis, quando o sustain dele (a capacidade de se curar durante uma luta) está mais fraco.

**Itens core (na ordem de compra):**

1. ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — first-item spike (o momento em que seu dano sobe mais). Dá **AD** (Attack Damage, a stat por trás do dano de basic attack e do Q), **omnivamp** (lifesteal que funciona em todo tipo de dano causado, não só nos basic attacks) e **ability haste** (que reduz o cooldown das habilidades). O passivo dispara no segundo hit, e Q1 + Q2 entregam isso em sequência.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — botas padrão quando o inimigo te machuca principalmente com basic attacks. Reduzem esse dano em trades prolongados (trocas vai-e-vem de dano na lane).
3. ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — cada hit do Q tira uma stack de **armor** (a stat que reduz dano físico) do inimigo. Também dá HP para sobrevivência e ability haste para mais rotações de Q por luta.
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP mais um **lifeline shield**: quando seu HP cai abaixo de um limite (em torno de 30%), um shield automático dispara. Essa janela é exatamente quando você precisa de tempo extra para o E lifesteal te trazer de volta à segurança.

**Itens situacionais:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — troque pelos ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** quando o time inimigo tem muito dano mágico ou cadeias de **CC** (crowd control: stuns, roots, knockbacks — qualquer coisa que te trave para que você não consiga agir). Exemplos: o root da Lissandra, o pull do Sett, o ultimate do Malphite.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contra burst **AP** pesado (AP = ability power, a stat por trás do dano mágico; burst = dano alto entregue em 1-2 segundos). O passivo Lifeline bloqueia um grande golpe mágico, frequentemente a diferença entre morrer no meio do engage (no início da luta) e sobreviver tempo suficiente para soltar a R.
- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — contra times com dois fortes damage dealers físicos (AD), por exemplo Yasuo + Caitlyn. Converte burst em **bleed** lento (dano espalhado pelos próximos segundos, em vez de chegar tudo de uma vez), dando tempo para o E lifesteal curar de volta.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contra hard CC single-target que apaga seu engage (o Q da Morgana, o hook do Blitzcrank, a R da Lissandra). Tem um spell shield de uso único que absorve a habilidade de lockdown, então você pode commitar de verdade (ir com tudo) em vez de ter que desviar à distância máxima.
- ![Hexdrinker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3155.png) **Hexdrinker** — componente de **MR** (Magic Resistance, a stat que reduz dano mágico) early. Compre antes de finalizar ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** se um top AP como Vladimir ou Rumble está vencendo a lane.

**Botas:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** é o padrão. Troque para ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** quando o time inimigo tem três ou mais fontes de CC ou muito dano mágico.

**Skill order:** Maxe o **Q** primeiro (é seu único dano), o **E** em segundo (o lifesteal cresce a cada rank, então mais dashes por luta), o **W** por último. Pegue a **R** nos níveis 6, 11 e 16.

**Runas:** runas são efeitos passivos que você escolhe antes da partida a partir de uma "árvore" de opções, cada uma construída em torno de um estilo diferente. Aatrox usa **Precision** como árvore primária (a construída em torno de dano sustentado vindo de basic attacks) com a keystone (a runa central da árvore) **Conqueror** — um passivo que aumenta seu dano enquanto você continua lutando — mais **Triumph** (uma cura pequena nos takedowns), **Legend: Alacrity** (Alacrity = stat que dá attack speed bônus, ajudando o Aatrox a auto-atacar mais rápido entre as habilidades) e **Last Stand** (mais dano quando está com pouco HP). Como árvore secundária, pegue **Resolve** (a árvore da durabilidade) com **Second Wind** + **Revitalize** para sustain de HP na lane, ou **Inspiration** com **Magical Footwear** (botas grátis no minuto 12) e **Cosmic Insight** (ability haste extra) se espera uma lane tranquila.

## Matchups principais

- **Fiora:** o matchup mais difícil. O **W** dela é uma parry (um shield breve que bloqueia e contra-ataca uma habilidade) que cancela o knock-up do seu Q. Force a parry — obrigue ela a usá-la num Q1 — antes de commitar o terceiro Q. Evite trades longos: faça Q1 + E entra-sai rápido, e nunca commite Q3 a menos que o W dela esteja em cooldown.
- **Darius:** skill matchup (matchup em que vence quem joga melhor, independente de counter pick). Fique fora do range do **E** dele quando o bleed dele tiver três ou mais stacks em você (o passivo dele tira HP a cada segundo por stack). Acerte o Q na borda quando o Q dele estiver em cooldown; sob R, os trades te favorecem se você tiver pelo menos um item de vantagem.
- **Renekton:** perde a lane antes do nível 6 se você respeitar a stun do W dele. Avance só com a sua W pronta; pune os cooldowns dele em vez de trocar de cara a cara. Depois do 6, sua R sustenta melhor do que a fury (a barra de recurso dele) que ele queima.
- **Malphite:** evite ficar em cima da sua minion wave — o Q dele é um poke de longo alcance (dano à distância de baixo custo para chipar seu HP sem se comprometer) que te acerta de graça. Compre ![Hexdrinker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3155.png) **Hexdrinker** se o poke early dele está vencendo a lane; faça **freeze** na wave perto da sua tower (pare de empurrar e mantenha a wave do seu lado da lane) para negar farm dele (o ouro e o XP de matar minions).
- **Quinn:** muito difícil. A habilidade dela aplica blind em você (cancela seus basic attacks por um instante, incluindo o auto empoderado da passive) e ela te kita para fora do range do Q (se move para trás enquanto ataca, te mantendo fora do corpo a corpo). Empurre a wave forte e faça roam (saia da sua lane para ajudar o mid) para buscar picks (kills isoladas em inimigos mal posicionados) em vez de tentar vencer o 1v1.

## Power spikes e condições de vitória

- **Nível 2:** com **Q** + **W** desbloqueados, Aatrox tem uma janela real de all-in (uma janela em que você pode commitar totalmente na kill, sem plano de fuga). Se o inimigo se mal posiciona, avance com a W pronta e acerte o Q na borda depois que o slow conectar.
- **Nível 6:** sua primeira R desbloqueia. Busque um all-in se o inimigo está abaixo de 60% HP — o boost de AD e o healing buff transformam até trades neutros em kills.
- **![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) Eclipse finalizado (~ minuto 11-13):** seu dano dá um spike forte. Force duelos nas side lanes e considere dar roam para o bot para um dive 2v3 (entrar embaixo da tower do bot inimigo com seu jungler — o jogador que farma os campos da jungle e rotaciona para as lanes — para matar os inimigos atravessando os tiros da tower).
- **Dois itens + R online (~ minuto 18-22):** janela de pico em teamfight. Use o lifeline shield de ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** mais o healing amp da R (amplification — a R aumenta toda cura que você recebe) para mergulhar na back line inimiga (os carries squishy — alto dano, pouca defesa — que ficam atrás dos próprios tanks durante a luta) e resetar (renovar) a duração da R nos takedowns (kills ou assists).

## Erros comuns

- **Lançar o Q1 logo no contato.** Q1 é o cast menor e mais lento. Abra com o **W** para o slow, depois cronometra o Q1 para que a **borda** do golpe pegue o alvo — não a zona interna. O bônus por borda é cerca de 25%.
- **Queimar o E para movimento em vez de para alinhar o Q.** O E é sua ferramenta para vencer trades. Guarde-o para deslizar para o range da borda ou para desviar de uma habilidade-chave inimiga durante o wind-up do Q (a animação breve antes do dano do Q realmente conectar). Não estoure o E só para atravessar a wave mais rápido.
- **Apertar a R cedo demais na luta.** A R do Aatrox tem cooldown longo e o buff decai com o tempo. Faça engage (comece a luta) primeiro com W + Q, depois ative a R quando estiver commitado e precisar do AD/healing amp — não como ferramenta de engage inicial.
- **Ignorar a W em minions.** A W passa através de um minion para aplicar slow no champion atrás. Em matchups duros (Fiora, Camille), atire a W de trás da sua wave para que o projétil pegue o alvo através dos corpos dos minions antes que ele consiga reagir.
- **Empilhar armor em vez de haste/AD.** Aatrox é drain tank, não tank de verdade. Ele sobrevive curando o dano via E lifesteal; essa cura escala (cresce) com o dano que você causa. Construir só itens de HP-tank mata seu output e seu sustain juntos.

## Dica avançada

Use o **E** durante a animação de wind-up do Q1 para deslocar a hitbox do Q no meio do cast: você pode começar o Q virado para uma direção, depois fazer dash através de um minion ou para trás do inimigo e o golpe acerta num ângulo completamente diferente. Isso se chama **Q animation cancel**, e transforma Qs previsíveis em jogadas impossíveis de reagir. Treine numa partida custom contra um target dummy (boneco-alvo parado): cast Q1, segure o cast, dasha com o E e veja onde o Q resolve. Em jogo de verdade, o uso de maior impacto é dashar **para dentro** de um inimigo que tentou fazer side-step (movimento lateral para desviar) num Q telegrafado (um Q em que o wind-up foi visível o bastante para ser lido), pegando-o na borda do novo ângulo para o knock-up.
