---
title: "Kindred Jungle Build & Guia — Patch 16.9"
slug: "kindred-jungle"
language: "pt-br"
patch: "16.9"
champion: "kindred"
role: "jungle"
last_updated: "2026-05-05"
description: "Guia Kindred jungle para o League of Legends Patch 16.9: caça de Marks, build on-hit, matchups da rota, power spikes, erros comuns e uma dica avançada final."
quick_learn:
  champion_dd_id: "Kindred"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Skirmisher Jungler"
  abilities:
    - key: "P"
      name: "Mark of the Kindred"
      description: "A cada 4 minutos surge um Mark em um inimigo aleatório (champion ou jungle camp). Matar dá um stack permanente: bônus de AS, AD e alcance de auto-attack. É o plano de jogo."
      dd_spell_id: "Kindred_Passive"
    - key: "Q"
      name: "Dance of Arrows"
      description: "Dash curto + 3 auto-attacks rápidos nos alvos próximos. Reseta o timer do auto. Use para clear, reposicionar e encadear autos em fights."
      dd_spell_id: "KindredQ"
    - key: "W"
      name: "Wolf's Frenzy"
      description: "Wolf ataca uma área por ~8s, dá AS e revela camps. Lamb acumula stacks andando e atacando; no máximo carrega um auto que cura. Toggle de clear e sustain."
      dd_spell_id: "KindredW"
    - key: "E"
      name: "Mounting Dread"
      description: "Skillshot que aplica slow no alvo. Após 4 autos nele, o ataque seguinte adiciona dano baseado no HP faltante. Ferramenta de burst em champions abaixo de 50% HP."
      dd_spell_id: "KindredE"
    - key: "R"
      name: "Lamb's Respite"
      description: "Cria uma zona sagrada: nenhuma unidade dentro (aliados E inimigos) pode cair abaixo de 1 HP durante a duração, depois cura no fim. Save tool reativo. Nunca pré-castar."
      dd_spell_id: "KindredR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3091", name: "Wit's End" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
  situational_items:
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contra ultis lock-on (Malzahar R, Skarner R, Warwick R) — o spell shield bloqueia o cast"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "contra cadeias de hard CC (Leona + Lissandra, Sett R + Ashe R) — o ativo cleansa e permite reposicionar"
    - dd_id: "6676"
      name: "The Collector"
      against: "quando você está à frente e o time inimigo não tem armor — execute abaixo de 5% HP fecha leads"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contra comps com cura (Aatrox, Soraka, Dr. Mundo) — grievous wounds corta sustain pela metade"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contra 3+ champions com hard CC (Leona + Lissandra + Sejuani) — tenacity reduz stuns e roots"
  base_combo: ["E", "Q", "AA", "AA", "AA", "R"]
  win_condition: "Acumule Marks cedo. Cada Mark completado dá AS + AD + alcance permanentes — a vantagem snowballa (kills → stats → mais kills) até o flanker de 3 itens que out-kita todo brawler."
  weakness: "Squishy, sem hard CC, R reativa com CD longo. Junglers com hard CC que invadem no level 2-3 (Lee Sin, Xin Zhao, Elise) te matam antes do primeiro Mark; tanks com on-hit mitigation ignoram seu DPS."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 9923
      name: "Hail of Blades"
      icon_path: "perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
    primary_rationale: "Domination + Hail of Blades dispara os 3 primeiros autos no máximo — exatamente o que você precisa para fechar a cadeia de Mounting Dread. Sudden Impact premia o Q-dash com lethality, Sixth Sense revela wards, Treasure Hunter vira mark kills em ouro extra."
    secondary_rationale: "Precision como secundária: Triumph devolve HP em takedowns (você fica baixo após 4 autos), Coup de Grace adiciona 8% de dano abaixo de 40% HP — sinergia com o golpe de HP-faltante do 4° auto."
    secondary_alternative: "Contra comps de AP burst pesado (Diana jungle + Syndra mid + Brand support), troque Precision → Resolve com Second Wind + Revitalize: sustain na sua jungle e R que cura mais no fim."
matchup_draft:
  pick_into:
    - examples: ["karthus", "master-yi", "kayle"]
      archetype: "Junglers e carries late-scaler com early fraco"
      reason: "Eles querem farmar até 3 itens antes de fazer qualquer coisa; você pode mark-huntar na jungle deles e bullyar os camps cedo. Cada Mark completado amplia o gap antes do spike deles."
    - examples: ["senna", "aphelios", "kog-maw"]
      archetype: "Marksmen backline squishy sem escape integrado"
      reason: "Gank cross-map: a E aplica slow o suficiente para encadear 4 autos e disparar o golpe de HP-faltante de Mounting Dread, e eles não têm dash que quebre a cadeia."
    - examples: ["maokai", "nasus"]
      archetype: "Tanks lentos sem dash"
      reason: "Eles não conseguem fechar a distância em uma Kindred kitando. Você auto-attacka fora do alcance do CC deles enquanto Wolf's Frenzy chippa passivamente."
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "Junglers de invade early com hard CC e lockdown"
      reason: "Entram nos seus camps no level 2 com chute, knock-up ou stun e te matam antes do primeiro Mark. Você não tem dash que quebre lock-on e a R ainda não está pronta."
    - examples: ["sion", "dr-mundo"]
      archetype: "Juggernaut tanks com mitigação ou imunidade on-hit"
      reason: "O shield W do Sion e a passive heal do Mundo anulam seu DPS de auto-attack — seu único dano é on-hit, então qualquer coisa que quebre esse loop te neutraliza."
    - examples: ["zed", "talon"]
      archetype: "Burst assassins que te deletam antes da R cobrir"
      reason: "Você é squishy sem hard CC; eles te matam na janela de 0.5s antes do cast de Lamb's Respite. A R não bloqueia o dano, só a morte — eles esperam acabar e re-engajam."
---

## Visão geral

Kindred é um marksman que caça na jungle. Lamb atira, Wolf morde, e o kit inteiro gira em torno de uma mecânica que nenhum outro champion tem: **Mark of the Kindred**. A cada 4 minutos surge um Mark em um inimigo aleatório — um champion ou um jungle camp — e matar dá um stack permanente de attack speed, attack damage e bônus de alcance de auto-attack. Acumule 4 marks e seu alcance dá um salto; acumule 8 e você começa a out-tradear marksmen de fora do alcance de auto deles.

Seu plano de jogo se divide em duas metades. No early game você é um **mark hunter**: lê o ícone do Mark no minimapa, decide se vale contestar (seu = sempre vai, deles = troca pressão para tomar) e dobra seu pathing em volta. No mid game você vira flanker — Q-dash atrás da backline inimiga (os carries que ficam atrás dos tanks), E no carry, cadeia de 4 autos, e Mounting Dread executa no golpe de HP-faltante. No late game você é um skirmisher hyper-scaling que out-kita todo brawler do jogo (kitar = recuar atacando, para o inimigo nunca te alcançar).

## Build recomendada

**Starting items:** Smite + ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** para clear mais rápido (você é ranged, tem que pegar Hailblade — Emberknife é só melee) mais ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**.

**Core items (em ordem):**

1. ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** — quest upgrade do Hailblade (auto-evolui pelo minuto 3-4 quando XP suficiente é acumulado). Companion para AD skirmishers: breve burst de movement-speed saindo do mato, perfeito para chase de Mark ou fechar gank vindo da fog.
2. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — todo terceiro basic attack causa true damage bônus. True damage ignora armor, então fura a itemização tank de inimigos que você não conseguiria shredar de outra forma.
3. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — botas de attack speed flat. Default; só troque para ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** quando o time inimigo tiver 3+ hard CC.
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — adiciona duas flechas extras a cada auto. Triplica a velocidade de clear e em teamfight espalha o DPS Wolf-and-Lamb em 3 alvos.
5. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — magic damage on-hit (dano mágico extra adicionado a cada basic attack) + magic resist. Dois usos: lifeline contra AP burst (Diana, Syndra, Brand) e shred contra backline com magic resist baixa.
6. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — alcance bônus no tiro energizado, em cima do alcance que você já acumulou via Marks. Late game você auto-attacka carries da borda da tela enquanto o time deles persegue nada.

**Situational items:**

- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contra ultis single-target lock-on (Malzahar, Skarner, Warwick). O spell shield come o cast e a cadeia nunca começa.
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — contra cadeias de hard CC. O ativo cleansa todo CC inclusive suppression — você aperta no instante em que Skarner pulla ou Sett ulti aterrissa.
- ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — quando à frente, executa abaixo de 5% HP. Combina limpo com o golpe de HP-faltante da E e o cadáver gera ouro extra.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contra comps com sustain alto (Aatrox, Soraka, Dr. Mundo). Aplica grievous wounds cortando as curas pela metade em fights estendidos.

**Botas:** Berserker's Greaves de default. Mercury's Treads só contra hard CC pesado.

**Skill order:** Maxa **Q** primeiro (clear e dano por dash), **E** segundo (mais burst no golpe de HP-faltante por rank), **W** por último (AS e cura escalam bem em rank 1). **R** em 6, 11, 16.

**Runas:** Primária **Domination** com **Hail of Blades** + **Sudden Impact** + **Sixth Sense** + **Treasure Hunter**. Secundária **Precision** com **Triumph** + **Coup de Grace**. Hail of Blades é icônica em Kindred porque puxa os 3 primeiros autos para velocidade máxima — exatamente os que você precisa para começar a cadeia de Mounting Dread.

## Matchups principais

- **Lee Sin:** Perde o level 1 contra você, mas no level 2-3 o combo Q-W-Q-kick te deleta antes da R subir. Pathe longe do lado dele até o level 4, depois busque counter-gank quando ele commitar Q sem W pronta. Trackeie o CD do W dele — sem isso ele não sai de fight nenhum.
- **Karthus:** Pure scaler. Invade a red side dele no minuto 3 e roube um buff; ele não consegue te parar, e a perda de tempo atrasa o spike de level 6 dele. Depois de 3 itens ele vence, então feche antes do minuto 18.
- **Master Yi:** Tem que morrer antes de ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer**. Guarda a E para a janela de saída do Q-dash dele — quando reaparece ele come o slow e o seu time encadeia CC. Depois do primeiro item dele, nada de 1v1.
- **Diana:** Ela quer divar sua backline; você quer divar a dela. Guarda a **R** para quando ela aterrissar a R no seu carry — a zona sagrada mantém o carry acima de 1 HP atravessando o burst, depois o seu time mata ela na janela de recovery.
- **Xin Zhao:** Knock-up + lock-down te mata em 1.5 segundo. Nunca pathe perto dos camps dele no level 2; agrupa com um laner para os buffs até ter 2 Marks de alcance bônus. Depois de 3 itens você out-kita ele com resets de Q.

## Power spikes e condições de vitória

- **Level 3:** Kit completo. Seu pattern de gank é **E no alvo -> 3 autos com Q-dash no meio -> 4° auto dispara o burst de HP-faltante**. Sem R, não commite fundo num gank de level 3 — só Flash-distance.
- **Primeiro Mark stack (~ minuto 5):** AS, AD e alcance bônus permanentes. Cada Mark completado depois amplia o gap. Lute pelos Marks mesmo neutros — a vantagem stat é maior do que um trade isolado (um trade = uma troca breve de dano em uma skirmish).
- **Level 6:** **Lamb's Respite** liberada. A partir daqui você pode salvar um colega de uma kill garantida. O truque é **nunca pré-castar** — drope no instante em que vê o inimigo commitar a spell de kill, senão a zona acaba antes da threat se resolver.
- **3 itens + bônus de alcance 4-Mark (~ minuto 22):** Você out-rangeia todo marksman do jogo. Em teamfight fica atrás da sua frontline, parado, e auto-attacka até tudo morrer. Esse é seu cliff de scaling — agrupa com o time, não splitpushe (não farme uma side lane sozinho).

## Erros comuns

- **Pré-castar Lamb's Respite.** **R** é reativa, não proativa (você coloca DEPOIS de ler a threat, não antes). Drope no segundo em que a ulti inimiga atinge, não quando eles só se aproximam. R pré-castada não salva ninguém e te tira o único save tool por 110 segundos.
- **Ignorar o ícone do Mark.** O minimapa mostra o Mark como uma caveirinha. Quem não trackeia perde a identidade inteira do champion. Abre o mapa a cada 30 segundos e se pergunte: "esse Mark é meu para pegar ou deles para negar?"
- **Q-dashar no time inimigo sem saída.** **Dance of Arrows** tem 12 segundos de CD em rank 1. Se Q-in pra chase uma kill e te CCarem, você não tem escape. Sempre Q com uma parede atrás da trajetória do dash, assim o próximo Q (depois do CDR) te bouncia para fora.
- **Esquecer o requisito de 4 autos de Mounting Dread.** **E** faz pouco dano on-cast mas o payoff de verdade é o 4° auto no alvo slowado. Se E e só encaixa 2 autos, o burst de HP-faltante não dispara. Commite à cadeia inteira ou não casta E.
- **Guardar a R para o momento perfeito que nunca chega.** Uma R "desperdiçada" que salva um aliado por 3 segundos é melhor do que uma R perfeita que você nunca aperta porque segurou demais. Na dúvida, drope.

## Dica avançada

O **R-bait** em objetivos. No Drake ou Baron com seu time em HP baixo, drope **Lamb's Respite** SOBRE o objetivo em vez de no seu time. Toda unidade dentro não pode cair abaixo de 1 HP — incluindo o objetivo. Seu time smita ou termina o objetivo dentro da zona, e qualquer inimigo que entrar também não consegue te matar, então ou eles desistem do contest ou são pegos quando a zona termina e seu time está full HP por causa da cura final da R. Transforma um Drake fight 50/50 em objetivo + double-kill garantido quando o time inimigo não lê a jogada.
