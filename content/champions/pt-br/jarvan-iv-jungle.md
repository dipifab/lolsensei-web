---
title: "Jarvan IV Jungle Build & Guia — Patch 16.9"
slug: "jarvan-iv-jungle"
language: "pt-br"
patch: "16.9"
champion: "jarvan-iv"
role: "jungle"
last_updated: "2026-05-05"
description: "Guia Jarvan IV jungle para League of Legends Patch 16.9: starter kit, build core bruiser, matchups principais, power spikes, erros comuns e uma dica final."
quick_learn:
  champion_dd_id: "JarvanIV"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Martial Cadence"
      description: "O primeiro auto-ataque em um alvo causa dano físico bônus baseado no HP atual dele. Recarrega a cada poucos segundos por alvo: encaixe nos combos."
      dd_spell_id: "JarvanIV_Passive"
    - key: "Q"
      name: "Dragon Strike"
      description: "Lança em linha que causa dano e reduz armadura. Se atravessar uma E flag ativa, Jarvan se puxa até a flag e dá knockup nos inimigos no caminho."
      dd_spell_id: "JarvanIVDragonStrike"
    - key: "W"
      name: "Golden Aegis"
      description: "Escudo pessoal (escala com champions inimigos atingidos) e slow nos inimigos próximos. Aperte ANTES do E-Q, não depois."
      dd_spell_id: "JarvanIVGoldenAegis"
    - key: "E"
      name: "Demacian Standard"
      description: "Joga uma flag que causa dano mágico no impacto e dá attack speed pros aliados próximos. É o setup do combo E-Q knockup."
      dd_spell_id: "JarvanIVDemacianStandard"
    - key: "R"
      name: "Cataclysm"
      description: "Pula em um champion inimigo, causa dano nos próximos e cria uma arena de muros impassáveis. Reuse pra derrubar os muros antes."
      dd_spell_id: "JarvanIVCataclysm"
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3071", name: "Black Cleaver" }
    - { dd_id: "6665", name: "Jak'Sho, The Protean" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contra muito CC ou times AP (3+ stuns/roots ou duas ameaças AP): troque do Steelcaps quando o CC pesa mais que dano físico"
    - dd_id: "3742"
      name: "Dead Man's Plate"
      against: "contra comps que kitam (Caitlyn, Senna, Kog'Maw, Jinx): MS e slow on hit te ajudam a ficar grudado no carry depois do R"
    - dd_id: "6664"
      name: "Hollow Radiance"
      against: "contra comps com muita cura (Aatrox top, Yone bot, Soraka): o burn corta heal e ajuda no waveclear entre objetivos"
    - dd_id: "3053"
      name: "Sterak's Gage"
      against: "contra times que te focam (2+ inimigos viram em você quando entra de R): escudo HP ativa sob burst, tenacity reduz CC"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "contra comps com dois AD dealers fortes (ex. Yasuo + Caitlyn): vira dano físico em sangramento lento, não burst instantâneo"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Acerte o knockup E-Q num alvo prioritário (carry ou jungler inimigo), depois R pra prendê-lo na arena enquanto seu time segue. Repita a cada cooldown nos objetivos."
  weakness: "Se errar E ou Q, gastou seu único hard CC e gap-close. Vira bruiser melee sem burst, fácil de kitar pelos marksmen ranged com self-peel."
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
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Conqueror stacka a cada hit do combo E-Q-AA-R: na hora do knockup os stacks estão cheios pra dano e healing. Triumph premia takedowns nos objetivos, Alacrity acelera os autos pros procs de Martial Cadence, Coup de Grace finaliza alvos low HP presos no Cataclysm."
    secondary_rationale: "Resolve secundária: Bone Plating absorve o primeiro burst quando você entra de R e o time inimigo vira em você, Revitalize aumenta o escudo da Golden Aegis, sua única defesa ativa em mid-fight."
    secondary_alternative: "Contra times com muito poke (Varus, Xerath, comps com Karma) troque Resolve por Inspiration: Magical Footwear (boots de graça pra economizar gold) e Cosmic Insight (Flash mais frequente pro truque E-Q-Flash)."
matchup_draft:
  pick_into:
    - examples: ["lee-sin", "graves", "kha-zix", "viego", "rengar"]
      archetype: "Junglers skirmisher early-game"
      reason: "Jarvan trada igual no nível 3 com Q armor shred + E attack speed e supera em scaling a maioria dos junglers early uma vez online a Sundered Sky por volta do minuto 12-14."
    - examples: ["caitlyn", "ezreal", "lulu", "soraka"]
      archetype: "Bot lanes imóveis que precisam de peel"
      reason: "Os muros do Cataclysm prendem um carry posicional dentro de uma arena onde o support não consegue chegar pra defender; o time inimigo geralmente não responde ao lockdown a tempo."
    - examples: ["azir", "aurelion-sol", "anivia"]
      archetype: "Mid-lane scalers estacionários"
      reason: "O gap-close E-Q de fora de visão mais os muros do R negam o espaço que o kit deles precisa; não têm dash pra sair da arena antes do seu time converter."
  counterpicks:
    - examples: ["fiddlesticks", "amumu", "zac"]
      archetype: "Junglers de engage AOE com CC de maior alcance"
      reason: "Engagam de fora do range do seu E-Q e te chain-CCam antes de chegar na backline; os muros não te salvam se for stunado no meio do salto."
    - examples: ["nasus", "vladimir", "mordekaiser"]
      archetype: "Late-game scalers com sustain integrado"
      reason: "O power spike do Jarvan é nos itens 1-3 (por volta do minuto 20-25). Depois cai, enquanto esses alvos só ficam mais fortes e sobrevivem à sua única rotação."
    - examples: ["olaf", "tryndamere"]
      archetype: "Duelistas CC-immune"
      reason: "Olaf R e Tryndamere R ignoram o lockdown do Cataclysm: saem da arena te batendo a dano cheio enquanto seu único engage está em cooldown."
---

## Visão geral

Jarvan IV é um fighter / diver melee — ou seja, um champion que fecha distância com um dash e se compromete no teamfight pra prender um alvo chave — construído em torno de um combo signature: jogue uma **E** flag, atire a **Q** através da flag, você é puxado pra flag e dá knockup em todo mundo no caminho. A partir do nível 6 ele soma **R** Cataclysm, uma arena de muros que prende um único inimigo com ele enquanto o time converte a kill. É um dos junglers mais fáceis de aprender (dificuldade 2/5 na nossa escala) porque o kit sempre quer a mesma coisa: acertar E-Q num alvo prioritário, R, ganhar a luta.

O game plan dele: clearar os camps da jungle rápido com **E** ativa e Q armor shred, depois gankar (pular numa lane pra ajudar a matar o inimigo) usando lanes que tenham um ângulo de engage utilizável — mid lane pela tri-bush (o arbusto de três cantos entre mid e side lane) ou top lane pelo arbusto do river. Em volta de cada spawn de objetivo, busque divar um carry (pular em cima do inimigo de alto dano e poucas defesas que fica na backline). A skill expression está no truque **E-Q-Flash** — flag no chão, Flash pra frente, Q através pra um knockup que não dá pra reagir — e em decidir **quando** soltar a **R** (você só tem uma por luta, então não desperdice no tank da frontline).

## Build recomendada

**Starting items:** Hailblade + Refillable Potion. Path padrão de junglecam pet quest. Tanto Hailblade quanto Emberknife evoluem em um dos três companions; queremos o pet AD skirmisher, veja abaixo.

**Core items (em ordem):**

1. ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** — quest upgrade do Hailblade (auto-evolui por volta do minuto 3-4 quando você tem XP suficiente). É o companion AD skirmisher: te dá um sprint de movement speed depois de cada camp, o que se traduz em ganks mais rápidos pelo mapa.
2. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — seu primeiro item grande. O crit garantido no primeiro hit e o on-hit heal encaixam perfeitamente com Martial Cadence: no momento em que você dá knockup no alvo, dá crit e cura o dano que tomou pra chegar nele.
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — boots padrão contra a maioria dos times (a bot lane geralmente são dois damage dealers físicos). Troque pra Mercury's Treads se a comp inimiga for principalmente AP e CC.
4. ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — o armor shred stacka com a passive da sua Q, mais HP e ability haste pra que seu E-Q volte mais rápido.
5. ![Jak'Sho, The Protean](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6665.png) **Jak'Sho, The Protean** — power spike tank de late-game. A passive que stacka armor e magic resist te transforma de diver em frontline que fica dentro da luta a duração toda.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — contra times com muito CC ou AP. Troque do Steelcaps quando crowd control é problema maior que dano físico.
- ![Dead Man's Plate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Dead Man's Plate** — contra comps que kitam (Caitlyn, Senna, Kog'Maw — inimigos que andam pra trás te atacando pra ficar fora do range melee). MS e slow on hit te ajudam a ficar grudado na backline (os carries de alto dano atrás dos tanks) depois do **R**.
- ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — contra comps com muita cura (Aatrox top, Yone bot, Soraka support). A passive burn corta os heals inimigos.
- ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — quando 2+ inimigos te focam (viram o dano deles em você) no momento em que você entra de R. O escudo HP ativa (auto-trigger) sob burst (dano alto em 1-2 segundos) e a tenacity passive encurta o crowd control (stuns, roots, slows).
- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — vs comps com dois damage dealers físicos fortes (ex. Yasuo + Caitlyn). Transforma o dano físico recebido em sangramento lento (dano espalhado nos próximos segundos, não instantâneo) pra você ter tempo de reagir em vez de ser deletado.

**Boots:** Plated Steelcaps padrão. Mercury's Treads se o time inimigo tem 3+ stuns/roots ou duas ameaças AP.

**Skill order:** Maxe **Q** primeiro (dano principal e armor shred), **E** segundo (cooldown menor = mais tentativas de gank e mais opções de flag), **W** por último. Coloque ponto na **R** nos níveis 6, 11, 16.

**Runes:** Primary **Precision** com **Conqueror**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**. Secondary **Resolve** com **Bone Plating** e **Revitalize**. Stat shards: Attack Speed, Adaptive Force, Health Scaling.

## Matchups principais

- **Lee Sin / Graves:** Matchup parelho na jungle early. Tracke o primeiro clear deles; se começarem red-side, conteste o segundo buff com E-Q. Os dois conseguem te bater no nível 3, então não invada sem uma lane prio (um companheiro que empurrou os inimigos pra baixo da torre e pode rotar pra te ajudar) te cobrindo.
- **Fiddlesticks / Amumu:** Evite ficar agrupado com os aliados no mid-game. O range de engage AOE deles passa a distância do seu **E-Q** — eles te ultam enquanto você ainda está andando pra soltar o flag. Warde as entradas da sua jungle e não face-checke arbustos (entrar nos arbustos no escuro sem visão, onde um inimigo pode estar escondido).
- **Kha'Zix / Rengar:** Junglers assassinos que querem one-shotar um carry. Counter-ganke (apareça na mesma lane pra virar a luta) em vez de fazer full-clear: você trada igual com eles no nível 3, e sua **R** é uma ferramenta de peel (uma habilidade pra salvar seu carry de quem dive nele) quando pulam no seu carry — mure-os longe da kill.
- **Olaf:** A R dele o deixa CC-immune, o que significa que **os muros do Cataclysm não o param**. Se der R nele, ele sai da arena te batendo. Guarde a **R** pros companheiros dele depois que ele queimar a ult, ou pegue ele como alvo só se o seu time conseguir kitar (recuar atacando, mantendo distância) enquanto ele está preso.
- **Sejuani / Maokai:** Junglers de engage mais tank. Você os out-damaga no 1v1 early mas os dois querem o mesmo papel no teamfight (prender um carry). A lane que snowballa primeiro vence (pega uma kill early que vira vantagem de gold que vira mais kills); se comprometa com os ganks antes deles terminarem o primeiro item.

## Power spikes e condições de vitória

- **Nível 3:** Com um ponto em **Q**, **E** e **W** você tem o combo E-Q-W completo pros ganks. É sua primeira janela real de gank, principalmente mid lane pela tri-bush.
- **Nível 6:** **Cataclysm** desbloqueia. Qualquer carry sem ward perto do seu river é uma chance de dive. O truque: flag (E) logo além, R puxando pra dentro, Q pro knockup — eles não conseguem responder ao lockdown sem **Flash** e cleanse.
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky completa (~ minuto 12-14):** Seu primeiro crit com Martial Cadence one-shota squishies (champions de alto dano e poucas defesas, tipo o ADC) depois do E-Q. É a janela em que você deve gankar em cooldown e forçar trades no dragão.
- **3-item spike (Sundered Sky + Boots + Black Cleaver, ~ minuto 22-25):** Pico de teamfight. Seu R + Q sozinho deleta um carry de backline, e você tem HP suficiente pra sobreviver ao foco depois.

## Erros comuns

- **Jogar o E em cima de você pro combo padrão "knockup onde estou".** Funciona pra ganks, mas numa luta em que o inimigo está se afastando, sua Q te puxa pra trás. Jogue o flag *além* do inimigo pra que o pull da Q te leve pra frente em direção a ele, não pra longe.
- **Apertar W depois do engage.** Golden Aegis é um escudo que escala com o número de champions inimigos atingidos no momento do cast — use *antes* do E-Q pra que o valor do escudo seja máximo e o slow pegue as pessoas em quem você vai cair, não o vazio.
- **Ultar o tank da frontline.** Cataclysm prende *um* inimigo só com você. Use no carry (Caitlyn, Aphelios, Azir), não no Sion que está feliz de te enfrentar numa arena fechada.
- **Limpar a jungle inteira antes de gankar.** Você out-tempa a maioria dos junglers com ganks E-Q no nível 3-4. Se fizer full-clear antes do primeiro gank, abre mão da sua maior vantagem. Taxe 2-3 camps e procure um ângulo.
- **Reusar a R pra quebrar o muro cedo demais.** Os muros também são ferramenta de peel: se seu time está ganhando a luta fora da arena, deixe os muros em pé pra impedir o carry preso de se juntar. Reuse a R só pra perseguir quem foge.

## Dica avançada

Pratique o combo **E-Q-Flash**: jogue o flag, atire a Q através, e Flash *durante* a animação da Q. O knockup se aplica no seu destino, então você dá knockup em inimigos numa área de 600 unidades além do que esperavam — usado pra engagar de fora do range de visão, é um dos engages mais confiáveis do jogo. O trade-off é que você gasta Flash, então guarde o truque pra ganks que garantem uma kill ou um ward perdido. Pratique no Practice Tool umas dez vezes antes de tentar em ranqueada; a janela de timing é curta.
