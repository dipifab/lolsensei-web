---
title: "Ambessa Top Build & Guia — Patch 16.9"
slug: "ambessa-top"
language: "pt-br"
patch: "16.9"
champion: "ambessa"
role: "top"
last_updated: "2026-04-29"
description: "Guia da Ambessa top no Patch 16.9: starter kit, build Eclipse skirmisher, matchups principais, power spikes, erros comuns e uma técnica avançada de combo."
quick_learn:
  champion_dd_id: "Ambessa"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Fighter / Assassin"
  abilities:
    - key: "P"
      name: "Drakehound's Step"
      description: "Depois de qualquer ability cast, ela dá um dash curto. O próximo basic attack ganha alcance, dano e attack speed bônus, e devolve energia."
      dd_spell_id: "Ambessa_Passive"
    - key: "Q"
      name: "Cunning Sweep / Sundering Slam"
      description: "Habilidade de dois casts. O primeiro acerta um arco frontal e escala com o max HP do alvo. Acertar libera um slam frontal mais longo como segundo cast — fonte principal de dano."
      dd_spell_id: "AmbessaQ"
    - key: "W"
      name: "Repudiation"
      description: "Ganha um escudo e fica em postura defensiva (brace), depois bate no chão. Se bloquear dano não-minion durante a postura, o slam é potencializado. Ferramenta defensiva de trade."
      dd_spell_id: "AmbessaW"
    - key: "E"
      name: "Lacerate"
      description: "Chicote AOE em cadeia ao redor: causa dano e slow nos inimigos próximos. Ativar o dash da passiva por essa ability adiciona um segundo strike no fim do dash."
      dd_spell_id: "AmbessaE"
    - key: "R"
      name: "Public Execution"
      description: "Fica unstoppable e dá blink até o campeão inimigo mais distante em linha, suprimindo na chegada e batendo no chão para dano e stun. Passiva: armor pen + omnivamp nas habilidades."
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
      against: "troque Plated Steelcaps quando o time inimigo tem 2+ fontes de hard CC ou dano AP pesado"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra tops AP pesados (Vladimir, Rumble, Gwen) — magic shield + AD scaling em HP baixo"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contra hard CC telegrafado de longo alcance (Malphite R, Ornn R, Sett W) — o spell shield bloqueia o engage"
    - dd_id: "6697"
      name: "Hubris"
      against: "quando você já está na frente na lane — kills empilham AD e alimentam o snowball lead"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "late game quando você dá R-blink no carry inimigo — o revive deixa você se comprometer e sobreviver ao follow-up"
  base_combo: ["Q1", "AA", "E", "AA", "Q2", "AA", "R"]
  win_condition: "Ganhe as lanes 2-6 com trades de passive-dash, depois snowball nas skirmishes em volta de Voidgrubs e Drake. Use R para suprimir um carry isolado antes que a frontline inimiga consiga fazer peel."
  weakness: "Cadeias de hard CC desligam os combos de dash. Statlines tank atenuam o dano % max HP. R compromete em um único alvo, então uma comp com peel consegue isolá-la depois que a suppression acaba."
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
      archetype: "Bruisers melee imóveis sem dash"
      reason: "Os passive-dashes depois de cada ability cast deixam ela entrar e sair dos windups telegrafados (pull do Darius, silêncio do Garen, E da Illaoi). A suppression do R fura a tankiness deles para a kill."
    - examples: ["kennen", "teemo", "quinn"]
      archetype: "Top laners ranged squishies"
      reason: "Os múltiplos dashes curtos da passive fecham o gap em que os ranged tops dependem. No melee o Q dela escala com o max HP do alvo e tira pedaço mais rápido do que o disengage deles aguenta."
    - examples: ["nasus", "kayle"]
      archetype: "Scalers de late-game que precisam de níveis ou stacks"
      reason: "O power level 2-6 dela bullica eles antes do power spike (stacks de Q do Nasus, níveis 11 e 16 da Kayle). Force kills no early para negar o lategame que precisam."
  counterpicks:
    - examples: ["malphite", "ornn", "poppy"]
      archetype: "Tanks com hard CC e stat checks"
      reason: "CC point-and-click (R do Malphite, W da Poppy que para dashes, brittle + knock-up do Ornn) interrompe os combos de dash dela antes do R aterrissar. Armor mais HP raw também atenua o scaling % max HP do Q."
    - examples: ["jayce", "gnar", "vayne"]
      archetype: "Pokers e kiters de longo alcance"
      reason: "O E do Jayce (knockback) e o mega R do Gnar interrompem o dash dela no meio do cast. Os kiters ficam fora do threat range, forçando ela a comprometer dashes de longe demais e ser punida com habilidades em cooldown."
    - examples: ["olaf", "tryndamere"]
      archetype: "Campeões cujos ultimates derrotam suppression ou execução"
      reason: "O R do Olaf limpa a suppression dela na ativação, neutralizando a principal ferramenta de pickoff. O R undying do Tryndamere sobrevive ao frame de execute e deixa ele rodar para fora do slam."
---

## Visão geral

Ambessa é uma skirmisher do top lane (uma campeã feita para escaramuças curtas e brigas pequenas, não teamfights longos). É uma campeã AD que causa dano físico (AD = attack damage; a alternativa é AP = ability power, a stat de dano mágico dos magos). Usa **energia** como recurso em vez de mana, e vive ou morre pela passiva, **Drakehound's Step**: cada ability cast aciona um dash curto mais um basic attack potencializado com alcance, dano e attack speed bônus. Essa única mecânica transforma ela em uma especialista em chain-trade — cada Q, W ou E concede um auto-attack reset gratuito (um basic attack que dispara na hora, ignorando o timer normal de attack speed), então um combo completo coloca quatro ou cinco hits em dois segundos. O kit pune quem tenta encarar ela no melee sem um hard interrupt (um stun, knock-up ou silence que para ela no meio do cast).

O plano de jogo é simples: bullica a lane do nível 2 com all-ins de **Q + E** (um "all-in" é um compromisso total para a kill, não uma troca curta), depois snowball nas skirmishes do mid-game em volta dos Voidgrubs e Drake. "Snowball" significa uma pequena vantagem inicial — uma kill, uma tower plate (um pedaço da armadura da torre que dá ouro quando quebra nos primeiros 14 minutos) — que cresce com o tempo. Use **R** para suprimir um carry inimigo isolado (o principal damage dealer do time) antes que a frontline (os tanks da frente) consiga fazer peel — "peel" significa usar CC ou o próprio corpo para proteger um aliado do inimigo que está em cima dele. O lategame é a fraqueza dela: depois que os tanks inimigos terminam dois itens, o dano % max HP do Q para de derretê-los, então feche a partida antes do minuto 28.

## Build recomendada

**Itens iniciais:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Padrão para trades AD; o lifesteal sustenta os dash chains.

**Itens core (na ordem):**

1. ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — primeiro item skirmisher principal. Depois de dois hits de habilidade no mesmo alvo em 1.5 segundos, dispara um escudo (uma barreira temporária de HP que absorve dano recebido) mais um pedaço de bonus damage no próximo ataque. Os combos de dash dela atingem esse limite em todo combate.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — botas padrão. A maioria dos matchups de top é AD; a redução de dano de auto-attack importa em trades prolongados.
3. ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — armor shred (cada hit retira um pouco da armor do alvo, empilhando até 30%) mais HP mais AD. Os auto-attacks potencializados pela passiva acumulam o shred mais rápido que a maioria dos campeões.
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — spike de sobrevivência. Quando você toma muito dano em pouco tempo, o item te dá um escudo grande. Útil quando você dá R-blink no carry inimigo e o resto do time foca em você.
5. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — converte o dano físico recebido em sangramento lento (dano espalhado pelos próximos 3 segundos em vez de instantâneo), te dando tempo para fechar o trade.

**Itens situacionais:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — substituem as Plated Steelcaps quando o time inimigo tem duas ou mais fontes de hard CC, ou dano AP (mágico) pesado. Dão magic resist mais tenacity (reduz a duração de stuns e slows em você).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contra tops AP (Vladimir, Rumble, Gwen). Dá um escudo "lifeline" contra dano mágico (um escudo que dispara uma vez quando você cai abaixo de 30% HP) mais AD a HP baixo — feito para te manter vivo o suficiente para devolver a kill.
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contra hard CC telegrafado de longo alcance (Malphite R, Ornn R, Sett W). Dá um spell shield de uso único (bloqueia a próxima ability inimiga que te acertar), então o engage adversário erra e você joga R nos seus termos.
- ![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) **Hubris** — quando você já está na frente na lane. Cada kill ou assist empilha AD bônus no item, alimentando o snowball lead — quanto mais kills, mais forte você bate, e mais kills você consegue.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — último item de lategame. Dá um revive de uso único na morte a cada 5 minutos. Permite se comprometer totalmente quando dá R-blink no carry inimigo, sem jogar a partida fora se misposicionar.

**Botas:** Plated Steelcaps por padrão. Mercury's Treads contra AP/CC. Pule botas tipo Sorcerer's de mago — você escala físico.

**Skill order:** Maxe **Q** primeiro (dano principal e a única ability que escala com max HP inimigo), **E** segundo (waveclear e o slow AOE que prepara o segundo strike de Q), **W** por último. Coloque ponto em **R** nos níveis 6, 11 e 16.

**Runas:** Árvore primária **Precision**:
- **Conqueror** — keystone (a runa principal e mais forte da árvore). Empilha AD bônus e healing quanto mais tempo você fica em luta contra campeões; perfeita para o kit de chain-trade.
- **Triumph** — pequeno heal e burst de ouro em takedown, dispara quando você fecha uma luta com pouco HP.
- **Legend: Alacrity** — attack speed bônus passivo que cresce com takedowns.
- **Last Stand** — dano extra quando você cai abaixo de 60% HP.

Árvore secundária **Resolve**:
- **Second Wind** — regeneração de HP que aciona depois de tomar dano de campeão. Conta o poke na lane.
- **Unflinching** — tenacity extra quando **Flash** está em cooldown. Útil quando você entra com R no time inimigo e tentam te acorrentar com CC.

Stat shards (os três pequenos bônus de stats embaixo das runas): Adaptive Force (dá AD ou AP dependendo do que seu campeão constrói — para Ambessa converte em AD), Adaptive Force de novo, e por fim Armor ou HP dependendo do matchup.

## Matchups principais

- **Darius:** Favorável. O anel externo do Q dele é a parte que cura; entre dentro dando dash para frente com seu Q1, depois Q2 para sair. Ele precisa acertar Q + E para comprometer um kill completo; você pode usar W para escudar o grip do Q e fazer um trade parejo. Force ele a usar primeiro o bleed do W (force a desperdiçar), depois engage quando estiver em cooldown.
- **Sett:** Favorável. Ele não tem dash, só um slam frontal (W). Pré-6, seus combos de passive-dash vencem ele em trocas prolongadas. Depois do 6, guarde **Flash** para desviar do knockback (deslocamento) do R dele que te empurraria para a zona do time dele.
- **Malphite:** Desfavorável. O escudo passivo dele atenua seu all-in no nível 2; o slow do Q deixa ele fugir quando você compromete. Construa ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** como segundo item para bloquear o R engage dele. Evite teamfights em choke points onde ele pode flankear — atacar de surpresa por um ângulo lateral — pela fog of war (as partes do mapa que você não vê porque não tem ward ali). Uma ward é um pequeno olho mágico que você coloca para iluminar uma zona.
- **Jayce:** Desfavorável. Ele tem duas formas; na forma ranged o combo Q + E te poka (consome HP de distância segura) antes que você feche o gap. Pegue ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** como starter, fique grudado na sua wave para a regeneração HP dos last-hits, e procure kills só quando ele troca para forma melee e desperdiça o E.
- **Camille:** Skill matchup. Os dois têm all-ins fortes; quem aterrissa o primeiro cast limpo vence. Seu Q escala com o max HP atual dela — force ela a usar primeiro o heal do W, depois Q1-auto-Q2 para colocá-la abaixo de 50%. Coloque uma ward no tri-bush (o mato de três entradas perto da sua torre), assim o hookshot dela — a habilidade gancho que a puxa para uma parede ou inimigo — não te pega voltando para a lane.

## Power spikes e condições de vitória

- **Nível 2 (Q + E):** Seu primeiro grande spike. Com as duas habilidades e o dash passivo, um combo completo Q1-auto-E-auto-Q2-auto entrega quatro basic attacks mais dois ticks de habilidade em dois segundos. A maioria dos top laners não consegue igualar esse dano em um scrap melee.
- **Nível 6 (R desbloqueado):** ![R](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/champion/Ambessa.png) **Public Execution** desbloqueia pickoffs — eliminar um inimigo isolado fora do combate principal. A passiva do R adiciona ainda armor penetration (seu dano ignora parte da armor do inimigo) e omnivamp (um pequeno heal proporcional ao dano que você causa com habilidades). Te sustenta nas skirmishes do river.
- **![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) Eclipse completado (~ minuto 11-13):** Seu maior spike de skirmish. O escudo e o bonus damage se alinham com cada combo completo, então 1v1s e 2v2s em volta dos Voidgrubs viram ao seu favor.
- **2 itens + botas (~ minuto 18-22):** Com ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** online, agrupe-se com seu time para os fights de Drake. Dê R-blink no carry inimigo — a suppression (um CC que desativa toda habilidade e movimento, até **Flash**) prende ele por 1.5 segundos, suficiente para o seu time fazer follow-up.

## Erros comuns

- **Desperdiçar Sundering Slam (o segundo cast do Q) em um minion.** O segundo cast potencializado é seu damage spike. Se você acertar um minion com o Q1 em vez de um campeão, queimou o reset numa criatura que morre em um hit de qualquer jeito. Segure o Q1 até conseguir acertá-lo num campeão inimigo.
- **Dar R-blink fundo demais no time inimigo.** O R vai no campeão inimigo **mais distante** na sua linha, não no mais próximo. Se três inimigos estão na frente do carry deles, seu blink passa por todos e te coloca atrás do time inteiro. Sempre verifique o positioning antes de apertar R — alinhe o carry como único alvo entre você e o ponto mais distante.
- **Fazer brace W no vazio.** O slam potencializado só dispara se você bloquear de verdade dano não-minion durante a postura. Ficar em brace na lane contra minions desperdiça o cooldown à toa. Use W reativo — quando você vê uma animação de habilidade inimiga começar, é nesse momento que você usa o brace.
- **Segurar o R esperando o engage perfeito que nunca vem.** R tem 100+ segundos de cooldown no early. Se você está com ele pronto no nível 6 e o laner inimigo está "uma rotação baixo" — ou seja, acabou de usar o combo principal e as habilidades chave estão em cooldown — entra e usa R nele. Um laner morto são duas waves de farm grátis e uma tower plate extra (aquelas peças de armadura da torre que dão ouro nos primeiros 14 minutos).
- **Fazer 1v1 contra hyper-tanks esperando que o Q os apague.** O dano % max HP parece assustador no papel mas a armor ainda se aplica. Uma vez que um Ornn ou um Cho'Gath fecha ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** + itens de tank, você não consegue solo-killar. Agrupe-se com seu jungler em vez disso.

## Dica avançada

Domine o **dash-AA weave** (intercalar o dash com o basic attack). Cada ability cast dispara seu dash passivo e uma AA potencializada, então a sequência ótima em um combo completo é *cast → dash → AA → cast → dash → AA*, não *cast → cast → cast → AA*. Apertar a segunda habilidade antes da AA potencializada disparar cancela o bônus daquele auto. Ritmo limpo: **Q1 → dash para frente → AA → E → dash → AA → Q2 → dash → AA → R**. Treine na Practice Tool (o modo offline de treinamento) contra um target dummy (um boneco fixo de prática) até cada AA registrar; em uma lane real, isso transforma um trade de 2 segundos em sete instâncias de dano separadas — a diferença entre uma kill e o inimigo escapando com 50 HP.
