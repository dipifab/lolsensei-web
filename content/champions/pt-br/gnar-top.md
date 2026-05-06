---
title: "Gnar Top Build & Guia — Patch 16.9"
slug: "gnar-top"
language: "pt-br"
patch: "16.9"
champion: "gnar"
role: "top"
last_updated: "2026-05-02"
description: "Guia do Gnar top no Patch 16.9: gestão da Rage Mini/Mega, build bruiser ideal, matchups da rota, power spikes do nível 6, erros comuns e uma dica final."
quick_learn:
  champion_dd_id: "Gnar"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Fighter / Shapeshifter"
  abilities:
    - key: "P"
      name: "Rage Gene"
      description: "Em combate o Gnar gera Rage. No máximo, a próxima habilidade o transforma em Mega Gnar: mais HP, corpo a corpo, novas habilidades, sem R até voltar Mini."
      dd_spell_id: "Gnar_Passive"
    - key: "Q"
      name: "Boomerang Throw / Boulder Toss"
      description: "Mini: bumerangue de longo alcance que lentifica e volta; pegá-lo reduz o cooldown. Mega: pedra curta que para no primeiro alvo e lentifica a área."
      dd_spell_id: "GnarQ"
    - key: "W"
      name: "Hyper / Wallop"
      description: "Mini: cada terceiro ataque/spell causa dano bônus e dá velocidade. Mega: empina e esmaga a área à frente, atordoando inimigos atingidos."
      dd_spell_id: "GnarW"
    - key: "E"
      name: "Hop / Crunch"
      description: "Mini: salto que quica mais longe se cair em uma unidade (minion, ward, monstro, campeão). Mega: pouso pesado que dá dano em área, sem quicar."
      dd_spell_id: "GnarE"
    - key: "R"
      name: "GNAR!"
      description: "Só Mega. Arremessa tudo ao redor numa direção escolhida; alvos que batem no muro são atordoados e tomam dano bônus. Todo o plano em um botão."
      dd_spell_id: "GnarR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "3742", name: "Death's Dance" }
    - { dd_id: "3110", name: "Frozen Heart" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "troca pelos Plated Steelcaps quando o time inimigo tem 2+ fontes de hard CC ou dano mágico pesado (Malphite R, Lissandra, Kennen)"
    - dd_id: "3091"
      name: "Wit's End"
      against: "contra tops AP (Kennen, Vladimir, Rumble): magic resist + dano on-hit mágico para o Mini Gnar Q+AA continuar doendo"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra burst mágico pesado (roams da Syndra, Vex, comp dupla AP): o lifeline shield bloqueia a janela de one-shot"
    - dd_id: "3143"
      name: "Randuin's Omen"
      against: "contra damage dealers de crit (Yasuo, Tryndamere, Caitlyn fed): corta dano crítico recebido"
    - dd_id: "3075"
      name: "Thornmail"
      against: "contra times com duas fontes de cura (Soraka + Aatrox, Yuumi + Mundo): grievous wounds reduz a cura pela metade"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "quando você splitpush sozinho numa side lane após Trinity: dano bônus em torres/minions e buffs de stat em solo"
  base_combo: ["Q", "E", "AA", "W", "R"]
  win_condition: "Acumule Rage na lane com poke do Mini Q, depois transforme em Mega antes de um fight em que você commita. Use o R como engage com wall stun para cortar o time inimigo no meio em teamfight e em objetivos."
  weakness: "Sem dash e shapeshift forçado. Se virar Mega longe do time não tem Hop pra voltar; se ficar Mini num teamfight não tem R. Tops à distância pokeiam Mini Gnar sem resposta."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8446, name: "Demolish", icon_path: "perk-images/Styles/Resolve/Demolish/Demolish.png" }
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve primary: Grasp procca a cada 4 segundos no corpo a corpo — perfeito para o Mega Gnar entrando no frontline. Demolish vira uma wave empurrada em plates grátis, Second Wind cura o poke ranged no Mini Gnar, Overgrowth escala HP até o late."
    secondary_rationale: "Precision secondary: Triumph regenera HP em takedown (gigante depois que uma Mega R em wall stun fecha a kill), Legend: Alacrity dá attack speed pra terceiro Hyper proc do Mini chegar mais rápido em cada trade."
    secondary_alternative: "Contra matchups de poke ranged (Vayne, Quinn, Kennen, Teemo) troque Precision por Sorcery com Nimbus Cloak (move speed após summoner) e Gathering Storm (scaling AD long-game) pra alcançar o Mega range e vencer o late os superando."
matchup_draft:
  pick_into:
    - examples: ["sett", "darius", "garen"]
      archetype: "Juggernauts corpo a corpo sem poke ranged"
      reason: "Mini Gnar Q tem 1100 de alcance e lentifica. Eles não te tocam até você andar em cima, então você acumula Rage seguro e só commita com Mega pronto pra disengage com R no muro."
    - examples: ["aatrox", "renekton"]
      archetype: "Bruisers de curta distância com janelas de all-in finitas"
      reason: "O power budget deles está nas trade windows do early. Mini Gnar dribla o all-in com E nos minions, depois vira o jogo quando Mega fica online com R stun + chain Wallop."
    - examples: ["nasus", "yorick"]
      archetype: "Juggernauts de scaling sem ameaça de kill no early"
      reason: "Você empurra a wave com Mini Q+W e nega o farm deles na torre; eles não punem porque não têm gap-close que vença seu alcance de bumerangue."
  counterpicks:
    - examples: ["vayne", "quinn", "kennen", "teemo"]
      archetype: "Tops ranged que pokeiam o Mini Gnar"
      reason: "Mini Gnar não tem sustain ranged e o único trade safe é Q de alcance máximo. Eles atacam de dentro daquele alcance e empurram ele pra torre sem janela de retorno nenhuma."
    - examples: ["fiora", "camille"]
      archetype: "Anti-tanks com true damage %HP ou hard CC dive"
      reason: "Os vitals da Fiora destroem o HP pool do Mega Gnar mais rápido do que ele consegue revidar; o E hookshot da Camille prende Mini Gnar no muro pra um all-in que ele não tem dash pra escapar."
    - examples: ["malphite", "ornn"]
      archetype: "Tank engagers que cancelam o ângulo da sua R"
      reason: "Eles flash-engage na sua back line antes de você poder transformar e escolher o muro. Quando a iniciação cai, sua R vira peel (empurrar inimigos longe dos carries) em vez do pickoff (kill solo num alvo isolado) game-winning."
---

## Visão geral

Gnar é um fighter de top que se transforma entre duas formas baseado numa barra de Rage que enche ao usar habilidades ou tomar dano. **Mini Gnar** é um poker ranged (poke = dano à distância pra desgastar HP sem se commitar) com um bumerangue longo e um pulo que reseta em unidades; **Mega Gnar** é um bruiser corpo a corpo com stun, dano AOE (area of effect: dano em zona, não em alvo único) e a melhor ulti de cooldown baixo do jogo perto de um muro. Todo o campeão gira em torno do timing da transformação: Mini na lane pra pokar e farmar seguro, Mega quando você commita num fight (commit = ir all-in, sem voltar atrás) onde R consegue prender inimigos contra o terreno.

O plano em uma frase: acumule Rage como Mini, transforme perto do time inimigo, jogue R contra um muro pra atordoar (imobilizar por ~1,5 segundo sem ações permitidas) vários alvos e limpe enquanto seu time segue. Se você ulta em campo aberto, desperdiça a única win condition (a coisa que o campeão precisa fazer bem pra ganhar a partida). Se virar Mega sozinho na lane, arrisca morrer porque o escape do Mini (Hop quica mais longe se cair num minion) some.

## Build recomendada

**Itens iniciais:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. A regeneração de HP do Doran's Shield é feita pro tipo de poke ranged sustentado que cada matchup de Mini Gnar joga em você.

**Itens core (na ordem):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — primeiro item toda partida. Construído a partir de Sheen (componente que adiciona dano bônus no próximo basic attack após cada habilidade); Trinity faz proccar (o gatilho de bônus dispara) em cada Q, seja Mini ou Mega. O move speed deixa Mini Gnar kitar (recuar enquanto continua atacando, mantendo distância) e o attack speed faz o Hyper (passiva do terceiro hit do Mini) chegar mais rápido.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — botas padrão contra damage dealers físicos (a maioria dos matchups de top). Reduz dano de basic attack recebido.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP bônus que cresce com o AD bônus dos outros itens, mais um shield único que ativa por volta de 30% HP. Mantém Mega Gnar vivo o bastante pra cravar a R.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Death's Dance** — converte burst físico recebido em sangramento lento (dano espalhado pelos próximos segundos em vez de instantâneo). Te dá tempo de reagir num fight em que você commitou como Mega.
5. ![Frozen Heart](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3110.png) **Frozen Heart** — armor + slow de attack speed em AOE (o slow atinge todos os inimigos numa zona ao seu redor, não só um). Devasta carries de auto-attack (Vayne, Tristana, Kog'Maw) quando a Mega R já prendeu eles no muro.

**Itens situacionais:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — troca dos Plated Steelcaps contra CC pesado (crowd control: stuns, roots, silences que te impedem de agir) ou comps AP.
- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — contra tops AP (Kennen, Vladimir, Rumble). Adiciona magic resist e on-hit magic damage (um pingo de dano mágico extra em cada basic attack).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contra burst mágico pesado (roams da Syndra, Vex, comp dupla AP). O lifeline shield ativa em HP baixo absorvendo dano mágico, bloqueando a janela de one-shot.
- ![Randuin's Omen](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3143.png) **Randuin's Omen** — contra damage dealers de crit (Yasuo, Tryndamere, Caitlyn fed).
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — contra times empilhando duas fontes de cura. Aplica grievous wounds (debuff que corta a cura inimiga pela metade por alguns segundos).
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — quando você splitpush uma side lane sozinho depois do Trinity Force. Splitpush = empurrar uma side lane sozinho enquanto o time joga em outro lugar, forçando o inimigo a mandar alguém pra te parar.

**Botas:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** padrão. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** quando o time inimigo tem 2+ fontes de hard CC ou dano AP pesado.

**Skill order:** Maximize **W** primeiro (o dano do terceiro hit do Hyper escala mais por nível), depois **Q** (slow mais longo + CD menor pro poke), depois **E** por último. Suba **R** nos níveis 6, 11, 16.

**Runas:** Primary **Resolve** com **Grasp of the Undying**, **Demolish**, **Second Wind**, **Overgrowth**. Secondary **Precision** com **Triumph** e **Legend: Alacrity**.

## Matchups principais

- **Sett:** Lane de graça. Mini Q tem mais alcance que tudo que ele tem; nunca ande pra dentro do W (Haymaker) dele. Quando ele te alcança, Hop num minion da wave pra quicar de volta pra segurança.
- **Aatrox:** Empate pre-6, você outscala (fica mais forte que ele com o passar da partida). Evite o sweet spot do Q dele (o centro brilhante do giro, onde dá dano extra). Quando você tiver Mega R + um muro atrás dele, perde todo all-in (luta total até a morte) que ele começa.
- **Vayne:** Hard counter. Fique atrás, last hit os minions com Q de alcance máximo, aceite que a lane te bullya (não dá pra revidar sem morrer). Roame (sai da sua lane pra ajudar outra) pro mid ou invada o jungle inimigo quando Mega estiver pronto.
- **Camille:** Perde a lane, ganha o late. Evite o alcance do E hookshot dela como Mini (ela te prende no muro e queima seu Flash — Flash é um summoner spell que te teleporta uma curta distância com cooldown de 5 minutos, seu botão de emergência único — e reengaja). Guarde o E pra depois ela dashar, nunca antes.
- **Malphite:** A lane vai bem — Mini Q kita ele pra sempre — mas cuidado no level 6. Ele flash-ulta sua back line (os carries atrás do seu time) em teamfight e mata o ângulo da sua R. Diga ao time pra espalhar pra ulti dele não pegar dois de vocês juntos.

## Power spikes e condições de vitória

- **Level 2:** Com Q + W você vence a maioria dos short trades (trocas curtas de dano na lane, não fights inteiros) contra bruisers corpo a corpo. Anda na wave, Q no inimigo através dos minions, e o terceiro basic attack dispara o dano bônus do Hyper.
- **Level 6:** A primeira Mega R libera um tower dive (entrar embaixo da torre inimiga pra matar apesar dos tiros) num inimigo de HP baixo se você acumular Rage em Mega antes de cruzar.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completa (~ minuto 12-14):** Seu maior power spike (o momento em que você fica visivelmente mais forte e deve buscar fight). Mini Q + auto-attack bate como caminhão; combos Mega Q + W one-shotam squishies (campeões de dano alto e defesa baixa, tipo ADCs e mages) pós-stun.
- **Fight com 3 itens e Mega R (~ minuto 22-26):** Sterak's + Trinity + botas online significa que Mega Gnar atravessa um frontline (tanks e bruisers que abrem o fight pela frente) e segue R na back line (carries que dão dano de trás) pra um stun em 2-3 alvos. Force aqui fights de objetivos agrupados (contests de drake/baron com os dois times empilhados juntos).

## Erros comuns

- **Virar Mega na lane sem fight pronto.** Mega não tem escape (sem Hop dash) e fica Mega ~15 segundos antes de voltar Mini. Se o jungler não está vindo e você não está se commitando num fight, segure Rage em 80-90%, pingue o time pra trás, e deixe a barra cair sozinha.
- **Jogar R em campo aberto.** Sem muro atrás do alvo, GNAR! é só um knockback (empurrão forçado que joga inimigos a uma curta distância) que interrompe os dashes deles e nada mais. Reposicione primeiro, sempre; o meio segundo alinhando o muro vale um stun em vários alvos.
- **Hop pra dentro em vez de pra fora.** Mini E é seu escape, não sua ferramenta de engage na maioria dos matchups. A única hora que E pra dentro é certo é quando Rage está enchendo e você tem um minion claro pra quicar de volta.
- **Spammar W na lane pra "forçar" o dano bônus do Hyper.** O bônus do terceiro hit dispara em cada basic attack E em cada spell. Troque em padrões de duas habilidades + um basic attack, não três basic attacks seguidos que te empurram pra fora de posição.
- **Transformações no meio do fight que você não controla.** Dano recebido também enche Rage. Se você recua em 95% Rage, o próximo basic attack num minion te vira Mega na sua jungle sem inimigo pra R. Ou commita num fight antes, ou recall pra base.

## Dica avançada

Use o Hop pra quicar em **wards e trinkets** quando sua wave acaba. Ward é o pequeno olho mágico que você coloca no mapa pra vision; a amarela básica é o trinket **Stealth Ward** que seu support carrega, e a **Control Ward** é a ward rosa que inimigos colocam pra negar vision. Cada uma conta como unidade onde Mini Gnar pode pousar pro segundo Hop estendido. Coloque uma Stealth Ward antes em direção à entrada do jungle inimigo, depois E em cima pra estender seu alcance em ~400 unidades pra um Q surpresa num inimigo counter-junglando. O mesmo truque te salva de ganks: Hop na sua própria ward dentro do tribush (o conjunto de três bushes perto de cada lane) e o ganker fica sem follow-up.
