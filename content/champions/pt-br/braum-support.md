---
title: "Braum Support Build & Guia — Patch 16.9"
slug: "braum-support"
language: "pt-br"
patch: "16.9"
champion: "braum"
role: "support"
last_updated: "2026-04-29"
description: "Guia completo do Braum support no Patch 16.9: starter kit, build path tank-peel, matchups da rota, power spikes, erros comuns e uma dica avançada de fechamento."
quick_learn:
  champion_dd_id: "Braum"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Warden"
  abilities:
    - key: "P"
      name: "Concussive Blows"
      description: "Os basic attacks do Braum aplicam uma stack de Concussive Blows. Após a primeira stack, as autos dos aliados também acumulam. Com 4 stacks o alvo é atordoado e sofre dano mágico. A Q aplica uma stack à distância."
      dd_spell_id: "Braum_Passive"
    - key: "Q"
      name: "Winter's Bite"
      description: "Skillshot linear de longo alcance que aplica slow e dano mágico. Aplica uma stack de Concussive Blows à distância: é a ferramenta de setup que permite iniciar a corrente do stun sem entrar em range de auto-attack."
      dd_spell_id: "BraumQ"
    - key: "W"
      name: "Stand Behind Me"
      description: "Braum salta para um aliado (champion ou minion). Ao chegar, os dois ganham armor e magic resist por alguns segundos. É o peel signature: pular na frente do seu ADC para body-blockar dano."
      dd_spell_id: "BraumW"
    - key: "E"
      name: "Unbreakable"
      description: "Braum levanta o escudo na direção escolhida por alguns segundos: intercepta todos os projéteis vindos daquele lado, anula o primeiro basic attack inteiro e reduz o dano dos seguintes da mesma direção."
      dd_spell_id: "BraumE"
    - key: "R"
      name: "Glacial Fissure"
      description: "Braum bate no chão: knock-up nos inimigos próximos e em uma linha à frente. Uma fissura gelada permanece na linha e aplica slow em quem atravessar. Cooldown longo: o botão principal de engage ou peel do time."
      dd_spell_id: "BraumRWrapper"
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3876", name: "Solstice Sleigh" }
    - { dd_id: "3109", name: "Knight's Vow" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "troque pelos Mercury's vs bot lane auto-attack heavy (Caitlyn, Draven, Tristana) quando o harass early pesa mais que o CC late"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "vs comps em que o ADC é o carry principal e fica perto (Aphelios, Jinx) — o proc da R triggera ao lado do bonded ally"
    - dd_id: "2504"
      name: "Kaenic Rookern"
      against: "vs comps de AP burst (mago duplo tipo Syndra mid + Brand support): a passiva de escudo mágico segura uma ult inteira"
  base_combo: ["Q", "AA", "AA", "R"]
  win_condition: "Acerte a Q em uma carry prioritária, walk-up para a auto que fecha o stun de 4 stacks, depois peel o ADC com W jumps e o muro da E pelo fight todo. R quando o time inimigo agrupa na zona do knock-up."
  weakness: "Lento e imóvel (sem dash, sem blink): hard CC à distância te corta do ADC. A Q é skillshot — se errar, sem pressão na rota, e uma R desperdiçada te tira do próximo teamfight."
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
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8306, name: "Hextech Flashtraption", icon_path: "perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "jhin", "senna"]
      archetype: "ADCs imóveis sem dash"
      reason: "A Q tem 1000 de range e aplica uma stack de Concussive Blows à distância. Contra um ADC sem fuga, uma Q + uma auto do seu ADC + a sua auto fecham o stun de 4 stacks: não há como quebrar a corrente."
    - examples: ["soraka", "sona", "yuumi"]
      archetype: "Enchanters squishy sem CC duro"
      reason: "Não têm ferramentas para parar o seu walk-up. Quando a Q acerta, eles ficam sem peel para o ADC, e a sua E bloqueia qualquer skillshot de healing-cancel que tentariam jogar para salvá-lo."
    - examples: ["draven", "lucian"]
      archetype: "ADCs agressivos que avançam para trocar"
      reason: "O kit deles obriga a entrar em range da Q para jogar machados ou dash-AA. Cada passo é uma stack de Concussive Blows grátis: ou recuam e perdem prio de rota, ou comem o stun de 4 stacks."
  counterpicks:
    - examples: ["blitzcrank", "thresh", "nautilus"]
      archetype: "Hook supports com pull ou stun point-and-click"
      reason: "Um hook que acerta tira o Braum do range de W para o ADC. Enquanto Braum apanha no fundo, o ADC inimigo deleta o seu carry sem proteção."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "Mage supports de longo alcance que pokeiam além da Q"
      reason: "Ficam a 1100+ de range e raspam HP de graça. Braum não tem resposta além da Q, e a E só ajuda se já estiver perto: ganham a rota por desgaste."
    - examples: ["ashe", "varus"]
      archetype: "ADCs com self-peel via slow built-in"
      reason: "O slow nas autos mantém Braum à distância. Ele não chega ao range da W para body-blockar, então o kit de peel fica pela metade e a frontline do time desmorona antes."
---

## Visão geral

Braum é um **warden support** (um support da classe tank cujo trabalho é proteger o próprio ADC, não abrir fights) — feito para peelar inimigos para longe da carry, não para divar a deles. O kit gira em torno de uma única ameaça: **Concussive Blows**, a passiva que atordoa qualquer alvo atingido por 4 basic attacks de Braum ou aliados. O truque: **Winter's Bite (Q)** aplica uma stack a 1000 de range, então Braum joga a Q primeiro, faz walk-up, e uma auto dele + uma do ADC disparam o stun na carry inimiga. **Stand Behind Me (W)** salta para qualquer aliado e dá armor e magic resist aos dois ao chegar — a ferramenta de **peel** (proteger o seu carry de quem está tentando matá-lo) que o torna único. **Unbreakable (E)** é um escudo direcional que faz **body-block** em todos os projéteis vindos da direção escolhida (autos do ADC, R da Caitlyn, R do Ezreal, R da Ashe). **Glacial Fissure (R)** é o knock-up AOE em linha: cooldown longo, usado como engage ou panic peel quando o **diver** deles (um champion que pula no backline inimigo) cai em cima do seu carry.

Game plan: na rota, **poke** (chip damage à distância) com a Q toda vez que o ADC inimigo avançar para last-hit, depois walk-up para a auto que dispara o stun — o seu ADC despeja na janela de 1 segundo. Depois do nível 6, **roam** (sair da bot lane para ajudar mid ou jungle) com a R para montar picks: o seu **lead** (vantagem early) vem de transformar stuns da Q em objetivos, não em kills solo. Late-game, fique um passo na frente do ADC, pule de volta com W no instante em que ele for engageado, e jogue E na linha de qualquer **skillshot** (uma habilidade que precisa ser mirada) que vier — Braum é o único support que cancela uma ult de Caitlyn no meio do channel.

## Build recomendada

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (o starter unificado dos supports) mais 2 Health Potions. Não last-hite minions na rota: deixe o gold para o ADC, o World Atlas paga você separado pelo progresso da quest.

**Core items (na ordem):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — starter. Evolui automaticamente conforme você acumula progresso de quest passando por ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** e ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**, terminando no upgrade endgame que você escolher.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — magic resist mais **tenacity** (uma stat que reduz a duração do crowd control em você). Bota padrão para um peel tank: stuns mais curtos significam que você chega ao range de W do ADC antes de ele já estar morto.
3. ![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) **Solstice Sleigh** — o upgrade endgame focado em peel do seu item de support. Toda vez que você aplica CC em um champion (slow da Q, stun da passiva, knock-up da R), aumenta o slow em inimigos próximos e dá a você e a um aliado próximo um burst de movement speed — exatamente o que precisa para perseguir um alvo de baixo HP ou kitar de volta para o seu carry.
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — te liga ao seu **ADC** (Attack Damage Carry — o companheiro de bot lane que dá dano com auto-attack, o main damage dealer late-game do time): parte do dano que ele recebe é redirecionada para você, e você o cura em troca. Sempre escolha a carry cuja vida você mais precisa estender.
5. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — active que escuda todos os aliados próximos por alguns segundos. Use no instante em que o time inimigo commitar o engage para que sua equipe absorva o primeiro **burst** (o dano alto concentrado nos primeiros 1-2 segundos de fight).

**Situational items:**

- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — bota que dá armor e reduz dano de basic attacks. Troque pelos Mercury's quando a bot lane inimiga é auto-attack heavy (Caitlyn, Draven, Tristana) e o **harass** (poke e chip damage para te desgastar) deles pesa mais que o CC late do time inimigo.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — bonde no ADC. Quando você aplica crowd control em um inimigo (slow da Q, knock-up da R), o próximo basic attack do bonded ally causa dano mágico bônus em área — perfeito quando o seu carry fica perto de você (Aphelios, Jinx) e você Q-a a front line para preparar a primeira auto dele.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — passiva de escudo mágico que regenera fora de combat. Compre contra comps de AP burst (um setup mago duplo tipo Syndra mid + Brand support) — o escudo segura uma ult inteira e te deixa continuar peelando em vez de morrer primeiro.

**Boots:** Padrão ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** pela tenacity — um root de Morgana de 2 segundos vira 1.2 segundos, te dando a janela para fazer W de volta no ADC. Troque para ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** antes de finalizá-las só se a bot lane inimiga é auto-attack heavy e está te machucando mais do que o CC late do time inimigo vai.

**Skill order:** Maxe **Q** (Winter's Bite) primeiro — é o seu único dano à distância, o aplicador de stacks, e o cooldown cai de 8 para 6 segundos no rank 5 (mais poke, mais pressão na rota). Maxe **E** (Unbreakable) por segundo — duração maior do escudo deixa o peel de teamfight mais limpo. Maxe **W** por último (o cooldown do salto cai mas as resists importam mais nos primeiros ranks, e raramente faltam alvos de W). Pegue **R** nos níveis 6, 11, 16.

**Runes:** Primária **Resolve** (árvore defensiva — durabilidade) com **Aftershock** (armor e MR de graça por alguns segundos quando você aplica CC, dispara em todo stun de passiva e em toda R), **Font of Life** (seu CC marca o alvo; aliados atacando-o se curam um pouco), **Conditioning** vs rotas que escalam late ou **Bone Plating** vs rotas de burst early, e **Unflinching** (extra **tenacity**, a stat que reduz CC em você, ao usar uma summoner spell). Secundária **Inspiration** (árvore de utility) com **Hextech Flashtraption** (Flash de curto alcance de backup em cooldown longo — ângulos de R surpresa) e **Cosmic Insight** (cooldowns reduzidos em summoner spells e no active do Locket). **Stat shards** (os três pequenos boosts de stat no fim da rune page): Health / Health / Health — Braum escala com HP bruto, e a durabilidade early te deixa avançar para aplicar stacks da Q.

## Matchups principais

- **Leona:** Matchup de **engage** (ela quer abrir o fight) contra o seu **peel** (você quer parar o dela). Ela tem CC de range maior que o seu (Zenith Blade dash-stun, Solar Flare R), então não tente body-blockar early — fique um passo atrás do seu ADC e W para fora no instante em que o Zenith Blade dela voar. Quando a E dela está em cooldown, você tem uma janela de 10 segundos para fazer walk-up e Q-stackar o ADC dela de graça.
- **Pyke:** Skill matchup — sem vantagem clara no papel, decidido por quem joga melhor. Ele te poka com a Q e te roameia melhor em **stealth** (fica invisível ao passar nos arbustos). Mantenha visão profunda nos bushes do rio, force fights na rota onde o reset da R dele não importa, e jogue E no hook da R dele para body-blockar o pull no seu ADC.
- **Lulu:** Hard counter para o seu **all-in** (commit total para a kill). O polymorph dela cancela a sua auto no meio da corrente — você não fecha mais o stun de 4 stacks. Não commit com o polymorph disponível; trackeie o cooldown (cerca de 13 segundos no rank 1) e force trades só na janela em que ele está down.
- **Soraka:** **Sustain enchanter** pura (uma support focada em cura que ganha mantendo o ADC vivo, não abrindo fights) sem ferramenta de engage própria. Você out-trada ela: ela não tem como parar a sua Q + walk-up, e a cura dela é cerca de metade do seu dano de stun. Force trades curtos sempre que a Q dela estiver em cooldown.
- **Senna:** Matchup de **poke** de longo alcance (chip damage à distância para te desgastar). Ela bullia o seu HP debaixo da torre com o Q-através-de-minion. Fique no fundo da wave para que a Q dela cure dos seus minions mas não te toque, e troque só quando o seu jungler estiver bot side — Senna sem dash morre para uma única corrente de Q-stun.

## Power spikes e condições de vitória

- **Nível 2 (Q + W):** Primeiro spike. A corrente completa **Q + walk-up auto + auto do ADC** desbloqueia no momento em que você tem W como segunda habilidade, porque a W te deixa reposicionar fora do dano de retorno. Um ADC inimigo em over-extend (que pushou longe demais da primeira **wave** — a fileira de minions chegando) perde 30% do HP em uma corrente de stack.
- **Nível 6 (R desbloqueada):** Engage e peel sobem um nível. **Glacial Fissure** é um knock-up em linha longa que o seu ADC converte em kill; alternativamente é o botão de panic peel quando o Zed deles pula no seu carry. Você pode Flash-R em ângulos que o time deles não espera — flash para frente e cast R instantâneo é a ferramenta de pick surpresa.
- **![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) Solstice Sleigh completion (~ minuto 12-14):** Primeiro item de teamfight online. O burst de movement speed no CC te deixa perseguir um inimigo de baixo HP através de minions ou kitar de volta para uma carry em apuros. Agrupe com o time para **Drake** (o dragão no rio bot — kills dão buffs permanentes) ou **Voidgrubs** (monstros pequenos no rio top — quem matar ganha dano bônus contra estruturas).
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari endgame (~ minuto 22-26):** Com Locket e uptime cheio da E, o seu time sobrevive a um wombo combo (um team-fight engage encadeado). O seu trabalho vira E-walling o cone de dano da carry inimiga enquanto o seu time mata a deles primeiro.

## Erros comuns

- **Jogar Q sem walk-up.** Uma Q-slow sozinha não é ameaça de kill — o inimigo passeia para fora do range e você desperdiçou 8 segundos de cooldown. A Q é o **setup** (a jogada que prepara a kill, não a kill em si); no instante em que acerta, faça walk-up para a auto. Sem a auto, as stacks de Concussive Blows somem em alguns segundos e o reset da rota chega à toa.
- **W no ADC depois que ele já morreu.** A W tem 650 de range no salto, em 12 segundos de cooldown no rank 1. Se você esperar até o seu carry estar com 20 HP para pular, o bônus de resist chega tarde demais. A regra: W para o ADC no **mesmo instante** em que vê o commit inimigo (Q da Leona voando, hook do Blitz no ar, sombra do Zed pulando), não depois que ele zera.
- **Ficar na frente de graça.** A E do Braum protege só a direção que você encara. Se você está atrás do ADC, ela não escuda nada. A posição padrão é um passo à frente e um passo **na direção** da fonte de dano esperada do time inimigo — encare a Caitlyn, não o seu jungler.
- **Queimar a R em um único alvo.** **Glacial Fissure** é um knock-up AOE em linha com cooldown de 100-130 segundos. Usá-la para ultar um único laner em side lane que já está quase morto é um **throw** (regalo de vantagem) — você acabou de se trancar fora do próximo teamfight. R só quando 2+ inimigos estão na linha, ou quando o seu carry vai morrer sem o panic peel.
- **Esquecer o reset das stacks da passiva.** As stacks de Concussive Blows **somem** depois de alguns segundos se nenhuma nova for aplicada, e quando um alvo é atordoado o mesmo alvo não pode receber novas stacks por mais alguns segundos. Spammar autos em um ADC recém-stunado não adiciona nada — avance para o próximo alvo prioritário, ou recue e resete o timer de resist da W.

## Dica avançada

O ângulo do **flash-R**. A R do Braum tem uma linha de 1250 de range na frente dele; o windup do cast é curto o suficiente para Flashar para frente, apertar R instantaneamente, e fazer a linha spawnar da sua **nova** posição flashada — pegando uma carry de back-line que se achava segura a 1500 de range. Bind Flash e R dentro do alcance da mesma mão e treine o timing em **Practice Tool** até as duas saírem dentro de um quinto de segundo. Guarde para um fight em que o seu time já agrupou: um flash-R que pega ADC + support inimigos vira um ace limpo, enquanto a mesma R em um único mid-laner isolado é um cooldown longo gasto em um skirmish.
