---
title: "Ivern Jungle Build & Guia — Patch 16.9"
slug: "ivern-jungle"
language: "pt-br"
patch: "16.9"
champion: "ivern"
role: "jungle"
last_updated: "2026-05-05"
description: "Guia do Ivern jungle no Patch 16.9: clear pacifista via groves, build de enchanter, setups de root com Q, controle de fight com Daisy, matchups e erros comuns."
quick_learn:
  champion_dd_id: "Ivern"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Enchanter / Jungler de utility"
  abilities:
    - key: "P"
      name: "Friend of the Forest"
      description: "Não pode atacar nem ser atacado por monstros de jungle (só épicos como Drake/Baron). Planta groves nos camps que se libertam sozinhos quando crescem."
      dd_spell_id: "Ivern_Passive"
    - key: "Q"
      name: "Rootcaller"
      description: "Skillshot linear longo que enraíza o primeiro inimigo atingido. Aliados que atacam o alvo enraizado dasham até ele. Recast para você dashar."
      dd_spell_id: "IvernQ"
    - key: "W"
      name: "Brushmaker"
      description: "Passiva: dentro do mato, autos causam dano mágico bônus (você e aliados próximos). Ativa: cria um mato em qualquer lugar para visão e zona de dano."
      dd_spell_id: "IvernW"
    - key: "E"
      name: "Triggerseed"
      description: "Escudo num aliado (ou na Daisy). Após 1.5s o escudo explode, causa dano mágico e slow nos inimigos próximos. Se não atinge ninguém, o escudo se renova."
      dd_spell_id: "IvernE"
    - key: "R"
      name: "Daisy!"
      description: "Invoca a Daisy, um golem aliado tanque. O terceiro auto consecutivo dela no mesmo alvo lança um knockup. Recast para reposicionar ela."
      dd_spell_id: "IvernR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
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
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "6616", name: "Staff of Flowing Water" }
    - { dd_id: "3107", name: "Redemption" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "contra CC pesado single-target encadeado no seu ADC (Morgana Q, Ashe R, Lissandra R)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contra comps de AOE engage (Amumu R, Yasuo + Malphite, Wukong R)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "quando a ameaça principal do oponente é um CC mágico de longo alcance em você"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra assassinos móveis que dive sua backline (Kha'Zix, Zed, Akali, Talon)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps heal-stacking (Soraka, Yuumi, Aatrox, Vladimir)"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "Crie picks com Q da fog, escude o carry mais forte com E no meio do fight e jogue a Daisy atrás da front line para que o knockup do terceiro auto limpe os alvos enraizados. Spike forte no nível 6."
  weakness: "Não dá pra fazer 1v1 contra champions: autos fracos, kit sem escape. Recovery muito lento se invadem sua jungle antes de dois groves; um Q errado num gank queima todo o setup."
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8214
      name: "Summon Aery"
      icon_path: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery primary: Summon Aery viaja em todo escudo de E e proca também no Q root pra dano mágico extra. Manaflow Band sustenta mana pra E em loop, Transcendence empurra ability haste acima de 40 pra Q mais rápido, Scorch fecha janelas de poke em skirmish."
    secondary_rationale: "Resolve secondary: Font of Life dispara em todo Q root — seu ADC se cura ao atacar o alvo enraizado, transformando um setup em burst mais sustain. Revitalize amplifica os escudos de Aery e o refund de E sem inimigos atingidos."
    secondary_alternative: "Se você precisa de mais uptime de Flash em teamfights longos e seu ADC já traz sustain, troque Resolve por Inspiration com Biscuit Delivery (mana e HP early) e Cosmic Insight (summoner spell haste, Flash e Smite mais rápidos)."
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "vel-koz"]
      archetype: "Carries imóveis sem dash"
      reason: "Um Q da fog prende eles no lugar; o dash automático do ADC no alvo atacado fecha o gap antes que possam dar flash, principalmente quando a Daisy entra pro follow-up de knockup."
    - examples: ["master-yi", "warwick", "shyvana"]
      archetype: "Junglers de auto-attack scaling"
      reason: "O sistema de groves do Ivern pula totalmente o fight de camps; enquanto os oponentes moem autos nos monstros, o Ivern já está escudando lanes e montando roots com o ADC no nível 5."
  counterpicks:
    - examples: ["lee-sin", "graves", "nidalee"]
      archetype: "Invasores de early game"
      reason: "Ivern não consegue 1v1: W precisa de mato, Q não tem escape. Uma invasão pré-3 destrói os groves dele e força um clear defensivo que faz o lead de XP/ouro inimigo snowballar a partida toda."
    - examples: ["kha-zix", "rengar"]
      archetype: "Assassinos móveis que dive o carry"
      reason: "Eles pulam por cima do peel do Ivern direto no carry; o escudo E queima rápido sob burst, e o único hard CC dele é um Q de windup lento que dashes esquivam antes de pousar."
    - examples: ["amumu", "zac"]
      archetype: "Tanques de AOE hard-engage"
      reason: "Os R-Flash deles pegam um time agrupado num cone só; um único E shield não cobre vários alvos, e o knockup do terceiro auto da Daisy chega tarde demais pra salvar a backline."
---

## Visão geral

Ivern é um jungler pacifista — e essa única palavra muda tudo no jeito que você joga ele. A passiva proíbe ele de atacar monstros de jungle, então ele nunca troca autos num camp. No lugar disso, ele planta uma semente de **Brushmaker (W)** em cada camp, vai embora e volta depois pra encontrar os monstros liberados sozinhos com ouro e XP completos. O trade-off: enquanto um jungler normal está fazendo full clear, o Ivern está escudando aliados, controlando a visão do rio com mato ativo e correndo cross-map pra ganks de nível 3 que chegam antes de qualquer outro jungler estar sequer no mapa.

O game plan é enchanter, não assassino. Acerte **Rootcaller (Q)** da fog of war (névoa de guerra), seu ADC dasha no alvo enraizado pelo proc do auto-attack, você joga **Triggerseed (E)** nele enquanto engaja, e no nível 6 você manda **Daisy! (R)** atrás da linha inimiga pra que o terceiro auto consecutivo dela dispare um knockup garantido. O kit não tem escape e os autos batem fraco — se você briga 1v1 contra um champion, perde. Fica na fog, fica perto de um companheiro, e deixa o time carregar o dano enquanto você carrega os setups.

## Build recomendada

**Starting items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Ivern é ranged (475 de attack range), então Hailblade está certo no lugar de Emberknife. Smite continua obrigatório — você precisa pra Drake, Baron e Voidgrubs mesmo nunca smitando um camp comum.

**Core items (em ordem):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — quest upgrade do Hailblade (auto-evolui pelo minuto 3-4 quando junta XP suficiente). Companion pra AP burst: adiciona um proc de dano mágico no auto pós-cast, que se empilha em cima do bônus de mato do W.
2. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — mythic. Seus escudos e curas acumulam um efeito em cadeia que aumenta o healing a cada proc consecutivo — ideal pra um enchanter que escuda, slowa e re-escuda a cada 7-11 segundos.
3. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — o ability haste deixa Q e E quase sempre disponíveis.
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — quando o E escuda um aliado, a passiva do Censer dá attack speed e dano mágico on-hit pra ele. Soma com o bônus de mato do W quando o ADC luta dentro ou perto do mato.
5. ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** — segundo trigger de escudo. Dá ao aliado escudado AP e ability haste extras por alguns segundos.
6. ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — heal/dano global ativo com cast de 5 segundos: jogue num fight aglomerado pra virar as barras de HP.

**Situational items:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — quando o oponente encadeia CC longo single-target no seu ADC (Morgana Q, Ashe R, Lissandra R). O cleanse ativo mantém o carry vivo mais tempo do que qualquer escudo aguenta.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contra comps de AOE hard-engage (combo Amumu R + Yasuo R, Wukong R). O ativo escuda vários aliados ao mesmo tempo, o que um único E não consegue.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — quando um assassino móvel (Kha'Zix, Zed, Akali, Talon) caça você explicitamente. A stasis te mantém vivo o tempo da Daisy peelar.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra comps heal-stacking (Soraka, Yuumi, Aatrox, Vladimir). Seu dano mágico aplica o corte de cura, e você casta com frequência suficiente pra manter ele permanentemente ativo.

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** como padrão. ![Boots of Swiftness](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3009.png) **Boots of Swiftness** são aceitáveis quando slows por todo lado (Twitch, Ashe, Ahri W) se acumulam em cima de você; a perda de ability haste é real, só pegue quando mobilidade for o problema real.

**Skill order:** Maxe **E** primeiro (o escudo escala mais forte, o slow corta dives), **Q** em segundo (cooldown mais baixo = mais roots), **W** por último (a passiva escala com rank mas você só põe pontos quando não sobra mais nada). Suba **R** nos níveis 6, 11, 16.

**Runes:** Primary **Sorcery** com **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. Secondary **Resolve** com **Font of Life** e **Revitalize**.

## Matchups principais

- **Lee Sin / Graves:** Hard counter. Os dois invadem sua jungle pré-3 e você perde todo 1v1. Comece perto da sua lane mais forte (onde o aliado pode rotar pra fightar 2v2) e ponha wards nos raptors e na red side. Se invadirem, retreat e deixa o laner punir da fog: nunca dueliar.
- **Master Yi / Warwick:** Easy. Eles moem autos nos camps nos primeiros níveis enquanto você pula o fight pelos groves; chega nas gank lanes um nível à frente. Quando a Daisy fica online, o knockup dela interrompe o R do Warwick e para o Yi no meio do Alpha-Strike.
- **Karthus:** Corrida pelo spike de nível 6. Ele globaliza do min 6, você root e Daisy do min 6. A primeira kill decide quem escala; se você acerta um Q early nele no Scuttle, seu time atropela os 10 minutos seguintes.
- **Kha'Zix:** Evite ele na fog. Ele isola alvos squishy pra bonus damage — esse alvo é você. Warde o lado seguro da sua jungle, agrupe com o time pros objetivos e nunca pathe sozinho em fog não wardada depois do minuto 8.
- **Vi:** Matchup parelho decidido pela prio do mid lane. A cadeia Q-Flash-R dela bypassa seu Q, mas se sua mid laner tem prio ela não pode divar livre. Warde a rota de flank dela e pre-escude o ADC no instante em que você vê a animação de carga do Q em visão.

## Power spikes e condições de vitória

- **Nível 3-4 (ciclo de groves completo):** Quando dois camps estão crescidos e libertados, você empatou o clear de um jungler normal em cerca de 60% do tempo. Use o excedente pra andar até uma lane com Q pronto antes do jungler inimigo estar no nível 4.
- **Nível 6 (Daisy! online):** O primeiro **R** destrava o kit. Daisy é um corpo tanque nos fights e o knockup do terceiro auto dela é uma ferramenta de engage garantida. Procure um pick free num side-laner logo após bater o 6.
- **![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) Moonstone Renewer pronto (~ minuto 11-13):** As cadeias de escudo/cura começam a rampar. Em qualquer fight que dura mais de 4 segundos, seu output de healing passa o de qualquer enchanter do mapa, fora a Soraka.
- **Power spike de 3 itens (Moonstone + Boots + Ardent ou Staff, ~ minuto 19-21):** Force os fights de objetivos. Seu ADC escudado bate mais forte e mais rápido que o do time inimigo, e Daisy R tem um minuto cheio de cooldown — você quer fightar toda vez que ela estiver up.

## Erros comuns

- **Smitar camps comuns.** Não dá — a passiva desativa. Guarde Smite só pra Drake, Baron, Voidgrubs e o roubo cross-jungle raro no red/blue inimigo quando estão prestes a pegar. Smite gasto numa animação de grove é throw.
- **Atacar você mesmo o alvo enraizado.** Quando você Q alguém, não é você que dasha — é o ADC, automaticamente, ao atacar. Recaste Q só se você quer mesmo divar (raro); senão, dê um passo atrás e escude o aliado entrando.
- **Castar W mato em fights e não nas lanes.** O mato vale mais nas lanes pra visão permanente e zona de dano sobre a wave; em meio fight é apenas ferramenta de visão. Pré-coloque W no tri-bush antes de um gank, não depois.
- **Soltar Daisy a max range.** O valor da Daisy está no knockup do terceiro auto, que só acontece se ela alcança o alvo. R dentro do fight, atrás da linha inimiga — não a 1500 unidades "pra dar dano".
- **Tentar peelar contra AOE engage com um único E shield.** O E escuda um aliado por vez. Contra Amumu R + Yasuo R pegando quatro pessoas, você precisa do Locket of the Iron Solari. Planeje esse item no momento em que vê o draft.

## Dica avançada

Use o **placement ativo do mato W** pra forjar fog do ponto de vista do ADC. Solte um mato na borda do range de um ward inimigo — eles veem você plantar mas não veem quem entra dentro. Rotacione seu carry pra dentro do mato, depois solte um Q atravessando a lane: inimigos não conseguem dodgear um skillshot disparado por trás de uma brush wall que eles não atravessam visualmente. É o mesmo truque que faz das duplas Ivern/Caitlyn early uma das combinações de laning com mais snowball do jogo, e escala com o completion de itens porque os autos do carry escudado viram martelos Ardent-empowered direto de dentro do mato.
