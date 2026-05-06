---
title: "Gwen Jungle Build & Guia — Patch 16.9"
slug: "gwen-jungle"
language: "pt-br"
patch: "16.9"
champion: "gwen"
role: "jungle"
last_updated: "2026-05-02"
description: "Guia da Gwen jungle no Patch 16.9: clear path, timings de Scuttle e Drake, rotas de gank, build AP bruiser, matchups, power spikes e erros comuns para novatos."
quick_learn:
  champion_dd_id: "Gwen"
  difficulty: 2
  damage_type: "magic"
  champion_class: "AP Bruiser / Skirmisher"
  abilities:
    - key: "P"
      name: "A Thousand Cuts"
      description: "Auto-attacks causam dano mágico extra com base no HP máximo do alvo. Gwen recupera HP por uma parte do dano causado em campeões."
      dd_spell_id: "Gwen_Passive"
    - key: "Q"
      name: "Snip Snip!"
      description: "Tesourada em cone com até 6 cortes. O cone central causa true damage e reaplica a passiva a cada corte — clear de camps e anti-tank."
      dd_spell_id: "GwenQ"
    - key: "W"
      name: "Hallowed Mist"
      description: "Cria uma zona de névoa por 4 segundos. Inimigos de fora não podem mirar nela — só quem entra na névoa consegue. Reset defensivo e setup de gank."
      dd_spell_id: "GwenW"
    - key: "E"
      name: "Skip 'n Slash"
      description: "Dash curto que dá attack speed, alcance de ataque e on-hit AP por alguns segundos. Cooldown reembolsado em parte ao acertar campeão — gap-closer de gank."
      dd_spell_id: "GwenE"
    - key: "R"
      name: "Needlework"
      description: "Lança uma salva de agulhas que lentifica e aplica a passiva. Pode ser relançada até 2 vezes, cada salva causa mais dano que a anterior."
      dd_spell_id: "GwenR"
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "vs assassinos AD / divers (Zed, Khazix, Rengar) — stasis 2.5s cobre o cooldown do W e quebra o burst window"
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "vs comps com 4+ tank/bruiser — substitui Riftmaker para burn percentual do HP máx desde o minuto 1"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "vs magic CC single-target (R da Lissandra, suppression do Malzahar, stun do Veigar)"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "vs comps de kite (Vayne, Ezreal) — mais ability haste e movement speed para colar nas carries móveis"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "Clear minuto 3-30, finaliza Riftmaker por volta do minuto 16, força fights de objetivo no nível 6 com setup do W mist. Em teamfights, derrete a frontline com Q true damage on-hit nos 4 segundos do mist."
  weakness: "Alvo fácil de invade nos níveis 1-3 (sem burst, único dash). Hard counter por junglers agressivos early como Lee Sin e Elise que punem o primeiro clear lento se invadem."
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
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision como primária: Conqueror stacka durante clears longos e skirmishes Q + auto, dando dano adaptativo e healing. Triumph premia ganks multi-kill, Legend: Alacrity potencia a janela on-hit do E, Last Stand soma dano com pouco HP."
    secondary_rationale: "Resolve como secundária: Second Wind regenera HP entre camps e após invades, Overgrowth escala HP bruto pro late game onde os teamfights da Gwen dentro do W mist brilham."
    secondary_alternative: "Contra mids AP com muito poke, troque Resolve por Sorcery com Manaflow Band (sustain de mana pros clears do Q) e Transcendence (mais ability haste pra mais refunds do E e R mais rápida)."
matchup_draft:
  pick_into:
    - examples: ["amumu", "sejuani", "skarner", "zac"]
      archetype: "Tank junglers sem dano single-target alto"
      reason: "Q aplica true damage percentual do HP máx que ignora armor; tanks têm pools de HP enormes que ela rasga em 3-4 Q durante um 1v1 prolongado dentro do W mist."
    - examples: ["master-yi", "shaco"]
      archetype: "Assassinos squishy sem disengage"
      reason: "O W mist nega o target lock deles num all-in. Eles commitam, comem o cone do Q true damage no mist, e não têm um segundo escape porque já gastaram o dash."
    - examples: ["kha-zix", "rengar"]
      archetype: "Assassinos com burst window"
      reason: "O burst combo deles chega em 1.5 segundos, mas o W mist os tira do target range no meio do salto. Uma vez whiffado o burst window, Gwen ganha o trade prolongado fácil."
  counterpicks:
    - examples: ["lee-sin", "elise", "nidalee"]
      archetype: "Junglers invader de early"
      reason: "Gwen não tem burst nos níveis 1-3 e tem clear inicial lento. Os invader entram nos camps dela e a matam antes da passiva entrar em stack."
    - examples: ["kayn", "viego"]
      archetype: "Outscalers de alta mobilidade"
      reason: "Os dois têm tools de mobilidade (Kayn anda em paredes, Viego dash on-hit) que ignoram o range do W mist; eles outscalam o tempo da Gwen em skirmishes late."
    - examples: ["kindred", "graves"]
      archetype: "Junglers ranged que kitam"
      reason: "Kindred e Graves auto-atacam de fora do range de proteção do W mist. Gwen precisa commitar E pra entrar no range deles, e eles kitam o dash dela com seus próprios tools de movimento."
---

## Visão geral

Gwen é uma jungler AP bruiser — uma campeã melee que escala em Ability Power (a stat AP), aguenta alguns golpes em corpo a corpo e ganha os fights longos em vez de derreter um alvo em dois segundos como um assassino faria. Como "skirmisher", o jogo dela é o duelo prolongado: rasga tanks e bruisers com **true damage** (dano que ignora tanto armor quanto magic resist), recupera HP durante o fight pela passiva, e reseta o cooldown do dash sempre que acerta um campeão. O **W mist** é a assinatura do kit: uma zona de 4 segundos que a deixa não-alvejável por quem está fora — uma ferramenta de gank e counter-engage única.

O game plan é: completa um primeiro clear limpo, contesta o Scuttle (o caranguejo do rio — ao matar dá visão e um pequeno buff de movement speed), gankka uma lane de baixa mobilidade por volta do nível 4-5 com o W mist, e depois snowballa — transforma uma pequena vantagem early numa muito maior — no primeiro drake do minuto 5-7. Gwen é uma campeã mid-late: é mais fraca nos primeiros 3 minutos, então não se deixa pegar no red buff inimigo (o camp pequeno que dá efeito burn nas auto-attacks) sem o time saber.

## Build recomendada

**Starting items:** ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** (o pet jungle AP-friendly — queima campeões inimigos com on-hit damage durante os ganks) mais **Smite** (a summoner spell que todo jungler pega — um golpe rápido em alvo único, usada pra clearar monstros mais rápido e roubar objetivos como Drake ou Baron).

**Core items (na ordem):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — upgrade da quest do starter de jungle. Auto-evolui por volta do minuto 3-4; o dano on-hit do pet adiciona dano mágico nas suas auto-attacks, alinhado com o scaling AP da Gwen.
2. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — seu item principal. Após 2 segundos em combate, parte do seu dano vira true damage (a passiva "Void Corruption") e você ganha "omnivamp" (recupera HP por uma porção de qualquer dano que causa — habilidades e autos juntos). Construído pra fights longos, exatamente o que a Gwen quer.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plana (= ignora parte da magic resist inimiga). Seu dano bate mais forte em squishies (campeões com defesas baixas, geralmente as carries inimigas).
4. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — attack speed mais AP mais uma passiva que adiciona dano mágico bonus em cada auto-attack. Combinada com o **E** (a janela on-hit do Skip 'n Slash, onde cada auto também aplica dano mágico AP) você vira uma torre DPS sustentada em fights longos.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de AP de late game. Transforma a Gwen de "DPS tanky" em carry de verdade.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — vs assassinos AD / divers (Zed, Kha'Zix, Rengar — divers são campeões que pulam em cima das carries da sua backline). O ativo dá 2.5 segundos de stasis (você fica não-alvejável mas também não pode agir) — tempo suficiente pra quebrar o burst window deles e resetar o cooldown do W.
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — vs times com 4+ tank/bruiser. Substitui Riftmaker como primeiro item se você precisa de burn percentual permanente do HP máx desde o início de cada fight.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — vs magic CC (= "crowd control": stuns, roots, charms, qualquer coisa que trave seu campeão) single-target. **R** da Lissandra, suppression do Malzahar, stun do Veigar. O escudo bloqueia uma habilidade hostil completamente.
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — vs comps de kite (Vayne, Ezreal). Ability haste extra mais movement speed pra colar nas carries móveis.

**Boots:** Sorcerer's Shoes por padrão. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** se o time inimigo tem 3+ ameaças AD. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** vs muito CC (3+ stuns ou knockups).

**Skill order:** Maxe **Q** primeiro (true damage e scaling AP — seu clear principal de camps), maxe **E** depois (cooldown e dano on-hit), deixe **W** por último. Pegue **R** nos níveis 6, 11, 16. Comece com **Q** no nível 1 para o primeiro clear mais seguro (o cone do Q acerta o pacote inteiro de monstros pequenos), pegue **E** no 2 pra mobilidade entre camps, depois **W** no 3 pra segurança antes do Scuttle.

**Runes:** Primária **Precision** com **Conqueror** (uma keystone que stacka em fights longos pra dar dano adaptativo e healing — perfeita pro playstyle de DPS sustentada da Gwen), **Triumph**, **Legend: Alacrity**, **Last Stand**. Secundária **Resolve** com **Second Wind** e **Overgrowth**. Stat shards: Adaptive Force, Adaptive Force, Health Scaling.

## Matchups principais

- **Lee Sin:** Difícil early, neutro late. Ele invade pesado nos níveis 2-3 quando a Gwen ainda não tem W. Comece o camp oposto ao seu spawn (red buff se lado azul; blue buff se lado vermelho) pra ficar longe do path de invade típico dele. Depois do nível 6 você o outscala em qualquer 1v1 dentro do W mist.
- **Master Yi:** Matchup de scaling free. O Alpha Strike dele (**Q**, um multi-dash que o deixa brevemente não-alvejável) não ignora a passiva do seu W mist — ele continua cortado fora do mist. Force fights no nível 6 perto do drake; quando ele commita com Highlander (a **R** ult dele, que dá muito attack speed e movement speed), drope W e Q-spam ele no duelo.
- **Sejuani:** Matchup duro. A **R** dela é point-and-click (= sem mira, a habilidade trava no alvo automaticamente) e te congela durante o dash do **E**. Espere ela usar a **R** em outro alguém, depois commita com W. Compre ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** mais cedo que o normal.
- **Kha'Zix:** Igual-favorável. Ele vai tentar evoluir "isolation damage" — dano bônus quando o alvo dele não tem aliados perto — pra caçar suas carries. O W mist quebra o target lock dele durante um leap (o dash do Q). Quando ele commita **R** stealth + Q burst, drope W na carry em vez de em você, e o dano é cancelado.
- **Kindred:** Matchup ruim. Ela kita (= recua atacando, mantendo distância) seu dash com o **Q** dela, e a ult zone dela (Lamb's Respite, um círculo que impede aliados de morrer dentro) salva qualquer companheiro que você tenta divar (= perseguir embaixo de torre). Pule o range de invade dela, pegue objetivos nas janelas de cooldown da **R** dela, e peça ajuda do top em skirmishes.

## Power spikes e condições de vitória

- **Nível 3:** Primeiro **W** desbloqueado. Agora você pode gankar lanes — drope W no laner, dash com E, Q + AA no mist. O mist nega target limpo em você por 4 segundos, a maior janela de proteção de gank do jungle.
- **Nível 6:** Primeira **R** desbloqueada. A salva de agulhas aplica o dano mágico percentual do HP da passiva em cada campeão acertado, e o slow encadeia suas auto-attacks. Force um drake fight ou counter-gank por volta do minuto 8-9 — o kit atinge o primeiro spike grande.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minuto 16-18):** Spike de omnivamp + true damage. Agora você pode solo-divar a maior parte dos squishies e sobreviver a ganks 1v2 se o W estiver up.
- **![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth completa (~ minuto 24-26):** Spike de DPS. Com **E** ativo suas auto-attacks atiram bem mais rápido e aplicam on-hit AP — a hora de entrar em todo teamfight perto do drake / Baron e deixar o time peelar pra você.
- **3 itens + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ minuto 30+):** Fase carry. Suas auto-attacks rasgam 25%+ de HP por golpe na frontline inimiga. Todo teamfight em que o time te protege ("peela" inimigos pra longe) acaba em vitória.

## Erros comuns

- **Primeiro clear no mesmo lado do jungler inimigo.** O primeiro clear da Gwen é lento e o HP early baixo; um invade no segundo buff geralmente significa um flash perdido ou uma morte. Comece oposto ao spawn inimigo até scoutar o path dele.
- **Ativar W muito cedo num gank.** O mist é uma janela de 4 segundos — se você drope antes do laner estar travado no fight, o inimigo sai andando e não te sobra nada. Pouse primeiro **E** + auto, depois **W** quando começa a reação inimiga.
- **Q no camp de fora do cone.** A zona de dano do **Q** é o centro do cone (o tick de true damage). Posicione-se com o camp nos 30 graus internos do arco — você triplica seu DPS no primeiro cast e clear ~3 segundos mais rápido.
- **Smite-flipar objetivos sem R.** O smite-fight da Gwen é mediano quando **R** está down. Force objetivos só com a ult up e pelo menos uma salva de agulhas reservada pro jungler inimigo.
- **Auto-atacar fora do range do R.** Quando **R** está up você tem 3 salvas no total. Fique a 1000 unidades do limite do fight pra sempre poder relançar **R** num alvo de HP baixo em vez de correr pra morte.

## Dica avançada

Use o **W** mist pra fintar skillshots (= habilidades que você mira manualmente em linha ou área) durante os ganks: quando um laner inimigo com stun ou root de longo alcance (Lissandra **E**, Morgana **Q**, Veigar **E**) está prestes a reagir ao seu dash de **E**, drope **W** no caminho entre você e ele logo ao entrar no range. O mist te deixa não-alvejável de fora — eles geralmente comem o cast e você ganha 4 segundos de dano sem CC. O truque é cronometrar **W** na animação de wind-up (os frames de cast antes da habilidade sair), não depois que ela já caiu.
