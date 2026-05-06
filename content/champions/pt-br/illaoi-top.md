---
title: "Illaoi Top Build & Guia — Patch 16.9"
slug: "illaoi-top"
language: "pt-br"
patch: "16.9"
champion: "illaoi"
role: "top"
last_updated: "2026-05-04"
description: "Guia da Illaoi top no Patch 16.9: build de juggernaut com Tentáculos, pressão do Test of Spirit, matchups da rota, power spikes, erros comuns e uma dica avançada."
quick_learn:
  champion_dd_id: "Illaoi"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Juggernaut / Bruiser"
  abilities:
    - key: "P"
      name: "Prophet of an Elder God"
      description: "Tentáculos surgem em paredes e terreno impassável próximo. Eles golpeiam inimigos atingidos por W, Vessels criados pelo E e qualquer espírito puxado. Curam Illaoi ao acertar campeões e Vessels."
      dd_spell_id: "Illaoi_Passive"
    - key: "Q"
      name: "Tentacle Smash"
      description: "Golpe linear de um Tentáculo, dano físico. Passiva: amplifica o dano de cada slam de Tentáculo — Q também é o waveclear principal e o botão para ativar Tentáculos."
      dd_spell_id: "IllaoiQ"
    - key: "W"
      name: "Harsh Lesson"
      description: "Auto-attack potencializado: salta no alvo, causa dano físico em % HP máx e ordena que cada Tentáculo próximo slamme. O salto é a única mobility dela."
      dd_spell_id: "IllaoiW"
    - key: "E"
      name: "Test of Spirit"
      description: "Skillshot linear de longo alcance que arranca o espírito do inimigo. Dano no espírito ecoa no campeão real. Se o espírito morre ou o alvo sai do alcance, vira Vessel e os Tentáculos o caçam."
      dd_spell_id: "IllaoiE"
    - key: "R"
      name: "Leap of Faith"
      description: "Slam AOE em volta da Illaoi: dano + um Tentáculo extra por campeão acertado. Por 8s os Tentáculos ficam untargetable e slammam 50% mais rápido, e o CD do W cai pra ~1.5s."
      dd_spell_id: "IllaoiR"
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "3065", name: "Spirit Visage" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap das Plated Steelcaps com 2+ ameaças AP ou CC encadeado (Lissandra, Malphite ult, pull do Sett)"
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "contra kiters que saem do alcance do W (Quinn, Vayne, Gnar) — dash ativa + slow os mantém no raio dos Tentáculos"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "contra frontlines com muito armor (Malphite, Rammus, Shen) — cada Q smash e proc de W tira armor pra equipe toda"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra comps AP-heavy com burst (Vladimir, LeBlanc) — escudo mágico ativa em HP baixo, justo quando os Tentáculos ainda slammam"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "quando o time tá behind 4v5 e precisa splitpushar — resistências extras contra minions e torres pra cercar uma side lane sozinho"
  base_combo: ["E", "Q", "W", "AA", "R"]
  win_condition: "Puxe o espírito com E e mantenha o alvo dentro do raio do máximo de Tentáculos possíveis. Cada Q e cada W tickam no espírito e no alvo — fights longos são a zona de vitória dela."
  weakness: "Sem dash, sem fuga fora do Flash. Tops ranged pokeiam fora do alcance do W, e skirmishers com várias dashes baitam Tentáculos, saem do raio e voltam quando Conqueror já caiu."
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
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision com Conqueror: cada Q, W e slam de Tentáculo stacka a keystone, e a win zone da Illaoi são fights de 5+ segundos. Triumph cura em takedowns, Legend: Alacrity dá Attack Speed pra resets de W, Last Stand premia o HP baixo onde a R aterrissa."
    secondary_rationale: "Resolve secundária: Bone Plating corta os 3 primeiros golpes de um all-in (nos níveis 2-3 Illaoi perde HP sem poder reagir), Overgrowth escala HP via minions até ~3.5% bonus health no minuto 25 — durabilidade pra sobreviver teamfights."
    secondary_alternative: "Se o top é poke ranged pesado (Teemo, Quinn, Jayce, Kennen), mantenha Conqueror mas swappe Resolve pra Inspiration com Triple Tonic (poções extras) e Magical Footwear (Boots grátis no minuto 12) — você perde prio mesmo, Inspiration recupera ouro e HP."
matchup_draft:
  pick_into:
    - examples: ["sett", "garen", "darius", "mordekaiser"]
      archetype: "Juggernauts melee de curto alcance sem dash"
      reason: "Todo o perfil de dano deles tá dentro do alcance do W. Quando você W em cima, cada Tentáculo próximo slamma — e eles não têm dash pra sair do raio antes do Conqueror chegar no cap e o dano disparar."
    - examples: ["nasus", "sion"]
      archetype: "Tank scalers com laning fraco"
      reason: "Os 6 primeiros níveis deles são farmagem passiva. E pra empurrá-los pra fora da wave por chip grátis e empilhar Vessels: Tentáculos os caçam até a wave e o eco do espírito dobra cada Q smash."
    - examples: ["yorick", "volibear"]
      archetype: "Bruisers melee que invocam pets ou buffs pra brigar"
      reason: "Eles avançam pra usar o kit (ghouls do Yorick, AA potencializado do Volibear): uma vez committed estão no alcance do W e o enxame de Tentáculos pune a permanência."
  counterpicks:
    - examples: ["teemo", "vayne", "quinn", "kennen"]
      archetype: "Tops ranged que pokeiam ou kitam"
      reason: "Eles ficam fora do alcance do W (400 unidades) e comem seu HP com autos. Cada passo pra fechar a distância dá um auto de graça pra eles — e você não tem dash pra fechar gap."
    - examples: ["riven", "irelia", "camille"]
      archetype: "Skirmishers com várias dashes"
      reason: "Entram no raio dos Tentáculos, dão burst, depois saem com dash antes do Conqueror chegar no cap. Quando as dashes voltam, seus Tentáculos estão em cooldown — eles ditam o tempo do trade, não você."
    - examples: ["jayce", "gnar"]
      archetype: "Form-shifters ranged-melee"
      reason: "Pokeiam de forma ranged, depois passam pra melee só quando os Tentáculos não estão ativos. Você queima o W tentando engajar e eles cancelam o trade voltando pra ranged."
---

## Visão geral

A Illaoi é uma **juggernaut** (campeã melee lenta e imóvel que bate muito forte e tanka dano em um fight direto) construída em torno da passiva **Prophet of an Elder God**. Ela faz **Tentáculos** spawnarem em cada parede e terreno impassável próximo — braços enormes, untargetable, pendurados nas bordas do mapa que slammam sob comando. Os Tentáculos fazem a maior parte do dano dela; o seu trabalho é forçar o inimigo a ficar dentro do raio o tempo suficiente pra morrer. O kit dela gira em torno de duas ferramentas que dão alvo pros Tentáculos: **W (Harsh Lesson)** é um salto curto que ordena a cada Tentáculo próximo slammar no alvo, e **E (Test of Spirit)** arranca o espírito do inimigo do corpo pra que os Tentáculos surrem ele (com o dano ecoando no campeão real).

O game plan é brutalmente simples. **Acerte E pra marcar o alvo, ande pra frente e use W no campo de Tentáculos mais denso do seu lado do mapa.** Se o inimigo sair do raio, o espírito morre e ele vira **Vessel** — um debuff em que os Tentáculos perseguem ele pela rota inteira. A partir do nível 6, **R (Leap of Faith)** spawna um Tentáculo extra por campeão inimigo acertado e deixa os Tentáculos existentes untargetable por 8 segundos — é a única janela em que ela tem burst real pra deletar um alvo, então guarde a R pra um all-in ou teamfight, nunca pra waveclear.

## Build recomendada

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. A passiva de regen HP amortece o poke inimigo (dano à distância barato que come o HP sem committar a um fight) até a pressão dos Tentáculos no nível 3 entrar online.

**Core items (em ordem):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — primeiro spike de item (o momento em que sua força dá o maior salto). A passiva Spellblade (auto-attack potencializado de graça a cada poucos segundos depois de um cast) alinha perfeitamente com W: cada AA do salto procca Spellblade. Adiciona AD (Attack Damage, a stat por trás do dano físico), HP, ability haste (stat que reduz cooldowns) e Attack Speed — toda stat que o kit precisa.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — botas padrão contra times que machucam você principalmente com auto-attacks. Reduz dano de autos em trades prolongados (trocas de dano vai e vem na rota).
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP mais um **escudo lifeline**: quando o HP cai abaixo de ~30%, um escudo automático dispara. Essa janela é exatamente quando seus Tentáculos ainda estão slammando, então os segundos extras de sobrevivência viram a kill.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — converte **burst** AD recebido (dano alto entregue em 1-2 segundos, tipo combo de assassino) em um **bleed** lento (dano espalhado pelos próximos segundos em vez de imediato). No takedown, o bleed restante é limpo — um reset grátis cada vez que a R encadeia uma kill.
5. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — MR (Magic Resistance) mais uma passiva healing-amp que potencializa as curas de Tentáculo da passiva, o bleed-clean da Death's Dance e o trade em % HP máx do W. O maior multiplicador único de sobrevivência da build.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap das ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** quando o enemy team tem 2+ ameaças AP ou **CC** encadeado (crowd control: stuns, roots, knockbacks — qualquer coisa que te trava e impede de agir). Tenacity (stat que reduz a duração do CC em você) é crítica porque você não tem dash pra escapar.
- ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — contra kiters que saem do seu W de 400 unidades (Quinn, Vayne top, Gnar). A ativa é uma dash curta mais slow AOE — exatamente o segundo gap-closer que o kit não tem. Substitui ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** como primeiro item, não empilhe os dois.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — contra frontlines com muito armor (Malphite, Rammus, Shen). Cada Q smash e proc de W tira stacks de armor do alvo pro time inteiro.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contra comps AP-heavy com **burst** (Vladimir, LeBlanc, Veigar). Escudo mágico ativa automaticamente quando você cai pra HP baixo — exatamente os segundos que você precisa pra manter Tentáculos slammando.
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — quando o time tá behind 4v5 e seu trabalho é **splitpushar** (empurrar uma side lane sozinho pra forçar resposta do adversário). Resistências extras contra minions e torres deixam Illaoi cercar uma side sozinha.

**Botas:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** são o padrão. Troque pra ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** quando o enemy team tem três ou mais fontes de CC ou muito dano mágico.

**Skill order:** Maxe **Q** primeiro (waveclear, amp de dano dos Tentáculos, cooldown mais baixo). Maxe **E** segundo (o cooldown cai 4 segundos no rank máx, o que significa mais pressão de Vessel por minuto). **W** se maxa por último — o dano já é enorme porque escala com HP máx do alvo, então ranks extras adicionam menos. Coloque pontos em **R** nos níveis 6, 11, 16.

**Runas:** Primária **Precision** com a keystone (a runa principal da árvore) **Conqueror** — uma passiva que acumula AD bônus enquanto você continua brigando, capada após 5 segundos de combate sustentado. Combinada com **Triumph** (cura pequena e burst de ouro no takedown), **Legend: Alacrity** (Attack Speed acumulada em takedowns) e **Last Stand** (dano extra abaixo de 60% HP). Secundária **Resolve** com **Bone Plating** (redução de dano nos próximos 3 golpes após receber dano) e **Overgrowth** (HP escalando com mortes de minions próximos, perfeito pra um top que farma 8+ minions por wave). Stat shards: **Adaptive Force** + **Adaptive Force** + **Health Scaling**.

## Matchups principais

- **Sett:** Rota favorável. O combo Q-W-E dele é telegrafado (o wind-up — animação visível antes do cast — é longo o suficiente pra reagir). Guarde E pra arrancar o espírito dele no momento exato em que ele dá W — com a barra de escudo vazia ele não tem disengage, e o enxame de Tentáculos arranca um pedaço grande de HP antes da R dele estar pronta.
- **Darius:** Skill matchup (o melhor jogador vence, independente do pick). Ele te ganha no trade prolongado em 5 stacks se os Tentáculos estão down — baite o pull dele de E, depois W de volta pra um campo de Tentáculos. Nunca trade no meio da rota, só do seu lado onde os Tentáculos cobrem a parede.
- **Fiora:** Matchup melee duro. O **W** dela é um parry (escudo breve que bloqueia e contra-ataca a próxima habilidade) — se ela parry seu E, o espírito não spawna e você desperdiça 14 segundos de cooldown. **Baite** o parry com um animation cancel (comece o cast do E, depois ande pro lado) antes de committar o cast real.
- **Teemo / Quinn:** Matchup ranged muito duro. Ficam fora do alcance do W, cegam seus auto-attacks (cancelam por um tempinho) e comem HP de graça. **Freeze** a wave perto da sua torre (pare de pushar e mantenha a wave do seu lado) pra negar farm (ouro e XP de minions), e chame seu jungler — Illaoi não vence esse 1v1 sem ajuda.
- **Camille:** Matchup melee mais difícil. O E hookshot dela dasha pra dentro e fora do alcance do W livremente, e a R dela te prende numa zona 1v1 longe dos Tentáculos. Guarde E pro momento logo depois da dash in dela: se você puxar o espírito enquanto ela tá committed, a R não a salva. Compre ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** cedo — a maior parte do dano dela é true on-hit (true damage aplicado por cada auto: ignora armor e MR), mas cada ponto de armor ainda ajuda contra o resto do kit.

## Power spikes e condições de vitória

- **Nível 3:** Com Q + E + W desbloqueados, Illaoi tem o combo completo de rota pela primeira vez. E pra marcar, ande pro seu campo de Tentáculos, W pra saltar e ordenar os slams. Daqui em diante a rota é sua a menos que o inimigo seja ranged.
- **Nível 6:** Primeira **R** desbloqueada. Mesmo com só um Tentáculo na parede, R spawna um segundo e deixa todos **untargetable** (nenhum inimigo pode atacar) por 8 segundos. Um 1v1 com R up é uma kill contra qualquer bruiser não-móvel.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completada (~ minuto 13-15):** Dano e **stickiness** (capacidade de ficar grudada num alvo que tenta fugir) dão o maior salto. Force 1v1 em side lane e busque **roamar** (sair da sua rota pra ajudar mid ou bot) por picks (kills isoladas em inimigos fora de posição).
- **Dois itens + R online (~ minuto 18-22):** Pico de teamfight. Ande pela frontline do seu time (tanks/bruisers da primeira linha), R em 3+ inimigos pra spawnar 3+ Tentáculos na hora, e deixe o enxame destruir a backline (carries squishy — campeões de baixa defesa e alto dano que ficam atrás dos tanks num fight) enquanto Conqueror chega no cap nos primeiros 5 segundos.

## Erros comuns

- **Brigar no meio da rota aberta.** Tentáculos só spawnam em paredes e terreno impassável. Se você W num alvo no meio do rio ou em rota aberta, nenhum Tentáculo slamma e o W é só um salto de 400 unidades sem extra. Sempre escolha o fight perto de uma parede — o bush do seu lado da rota, o tri-bush, a entrada da sua jungle.
- **Jogar E numa linha de minions com HP baixo.** E é a sua habilidade mais importante e tem cooldown de 12-16 segundos. Se você lança e o skillshot pega um minion ou erra o campeão, fica sem setup por 14 segundos — e o inimigo sabe. Espere uma linha de visão limpa no campeão antes de apertar E.
- **Apertar R pra waveclear.** R causa dano AOE, mas o valor real são os 8 segundos de Tentáculos untargetable mais o Tentáculo bônus por campeão acertado. Usar na wave desperdiça um cooldown de 70-120 segundos e te deixa com zero teamfight tools quando o jungler inimigo aparece.
- **Andar pra um fight sem checar posições dos Tentáculos.** Se os Tentáculos mais próximos estão expirando (o brilho laranja apaga pouco antes de despawnar), espere 4 segundos pelo novo spawn antes de committar W. Uma Harsh Lesson sem Tentáculos pra slammar é um salto desperdiçado.
- **Empilhar itens puros de tank.** Illaoi escala com **AD** (Attack Damage, a stat por trás do dano físico) — cada slam de Tentáculo é uma porcentagem do AD dela. Ir Sunfire + Warmog's mata seu dano; você para de matar squishies e vira um minion lento. Mantenha o core AD-bruiser.

## Dica avançada

Treine o **E animation cancel**. Test of Spirit tem uma animação de cast longa (~0.5s) durante a qual Illaoi fica travada no lugar — tempo suficiente pra qualquer inimigo atento desviar do skillshot linear. O fix é começar o cast, andar 1-2 passos pra frente pra baitar o dodge numa direção, depois castar na direção *oposta* no último frame. O mesmo truque funciona ao contrário: hover o cursor no inimigo, finja o cast e recaste na trajetória de dodge prevista do espírito. No jogo real o uso de maior impacto é o all-in no nível 3: E-fake, W no espírito quando ele começa a desviar, depois E real na dash reativa dele. Treine no practice tool contra um target dummy até o ritmo ficar automático.
