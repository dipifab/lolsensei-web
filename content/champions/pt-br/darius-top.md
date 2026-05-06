---
title: "Darius Top Build & Guia — Patch 16.9"
slug: "darius-top"
language: "pt-br"
patch: "16.9"
champion: "darius"
role: "top"
last_updated: "2026-04-29"
description: "Guia completo do Darius top para League of Legends Patch 16.9: build de juggernaut, pressão de stacks de Hemorrhage, matchups principais, power spikes, erros comuns e dica final."
quick_learn:
  champion_dd_id: "Darius"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Juggernaut / Bruiser"
  abilities:
    - key: "P"
      name: "Hemorrhage"
      description: "Auto-attacks e habilidades de dano aplicam uma stack de sangramento no alvo. Com 5 stacks Darius entra em fúria, ganha muito AD bônus por alguns segundos e o bleed ticka por dano enorme."
      dd_spell_id: "Darius_Passive"
    - key: "Q"
      name: "Decimate"
      description: "Machadada carregada em anel amplo. Acertar com a lâmina externa causa dano cheio, aplica uma stack de bleed e cura o Darius. O cabo interno causa metade do dano e nenhuma stack."
      dd_spell_id: "DariusCleave"
    - key: "W"
      name: "Crippling Strike"
      description: "Próxima auto-attack potencializada: dano bônus e slow pesado. Resetta o timer da auto: encaixe entre duas autos normais para maximizar o dano por segundo."
      dd_spell_id: "DariusNoxianTacticsONH"
    - key: "E"
      name: "Apprehend"
      description: "Passiva: armor penetration flat. Ativa: hook de machado curto que puxa e reduz velocidade dos inimigos em cone. Único gap-closer do kit."
      dd_spell_id: "DariusAxeGrabCone"
    - key: "R"
      name: "Noxian Guillotine"
      description: "Salto em um campeão causando true damage que escala com as stacks de bleed já no alvo. Se matar, o cooldown reseta e você pode relançar em outro alvo."
      dd_spell_id: "DariusExecute"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "swap dos Plated Steelcaps contra muito dano mágico ou correntes de CC (Lissandra, ult de Malphite, pull do Sett)"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "contra frontlines com armor stackada (Malphite, Rammus, Shen) — cada Q reduz armor para o time todo"
    - dd_id: "3065"
      name: "Spirit Visage"
      against: "contra times AP pesados quando precisa de MR e healing-amp em cima de Death's Dance e R lifesteal"
    - dd_id: "6694"
      name: "Serylda's Grudge"
      against: "contra squads com armor e tenacity (Rammus, Tahm Kench, Malphite) — armor pen e slow no impacto"
    - dd_id: "3742"
      name: "Dead Man's Plate"
      against: "quando precisa de Move Speed extra para alcançar kiters (Quinn, Vayne top, Gnar) e entrar em range de R"
  base_combo: ["E", "AA", "W", "Q", "AA", "R"]
  win_condition: "Stacka Hemorrhage até 5, aproveita a janela de fúria para o AD bônus e finaliza com R por true damage. Converte kills early em timing de Stridebreaker que faz snowball em 1v1 side lane e dives bot."
  weakness: "Quase nenhuma mobility fora o pull curto da E e o salto one-shot da R. Kiters de longo alcance, tops ranged e campeões que mantêm distância (Quinn, Vayne, Teemo, Gnar) tiram suas stacks e trades."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
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
matchup_draft:
  pick_into:
    - examples: ["sett", "garen", "volibear"]
      archetype: "Bruisers melee de curto alcance sem disengage forte"
      reason: "Darius vence trades prolongados porque cada auto e Q aplica uma stack de bleed: quando o oponente quer disengage, a janela de fúria a 5 stacks já virou a troca a favor dele."
    - examples: ["nasus", "kayle"]
      archetype: "Melees de scaling tardio com lane early fraca"
      reason: "Os primeiros 6 níveis são passivos — Darius pode usar E + W para tirá-los da wave repetidamente, matando antes que cheguem aos itens que os tornam perigosos."
    - examples: ["yasuo", "yone"]
      archetype: "Carries melee que lutam dentro do range da Q"
      reason: "Eles precisam entrar em range da borda da Q para causar dano. Wind Wall bloqueia projéteis, mas não golpes melee, então uma Q de borda limpa aplica a stack de bleed e começa o snowball."
  counterpicks:
    - examples: ["quinn", "teemo", "vayne"]
      archetype: "Tops ranged ou que kitam"
      reason: "Ficam fora do range da E e arranham o HP do Darius de graça. Sem gap-closer além da E (hook curto) ou R (salto one-shot), ele nunca aplica stacks e perde a prio de lane."
    - examples: ["fiora", "camille"]
      archetype: "Duelistas com true damage, parry ou shield"
      reason: "O W da Fiora dá parry no knock-up da Q e os Vitals dela (marcações pequenas que ela auto-ataca em true damage — dano que ignora armor e MR) furam a build de HP; o R da Camille isola o Darius do time e o supera em fights longos."
    - examples: ["gnar", "kennen"]
      archetype: "Tops ranged com CC integrado"
      reason: "Ambos pokeiam fora do range da Q e têm stuns ranged: o throw do Gnar em mega-form, o W do Kennen. Mantêm o Darius com HP baixo sem nunca entrar na janela de trade dele."
---

## Visão geral

Darius é um **juggernaut** (campeão melee lento e imóvel que bate muito forte e tanka dano em luta direta) construído em torno de stackar a passiva **Hemorrhage** num alvo. Cada auto-attack e cada Q que conecta com a **lâmina externa** aplica uma stack de bleed. Em **5 stacks** ele entra em fúria por alguns segundos e ganha um AD bônus enorme — essa é a janela em que ele mata ou explode o oponente. O kit dele dá exatamente um gap-closer curto (**E**, hook de 535 unidades) e um salto de cooldown longo (**R**, execução em true damage que reseta na kill). Fora dessas duas ferramentas ele anda em Move Speed base e morre contra qualquer um que saiba manter distância.

O game plan é simples: **ficar grudado no alvo até ele morrer**. Na lane, acerte a Q com a **lâmina externa** (não com o cabo interno — o cabo causa metade do dano e zero stack) para arranhar HP e se curar; monte o all-in com **E** (pull, knock-up, slow) quando o inimigo já tiver 2-3 stacks, e detone com **W** + cadeias de auto-attack. Do mid-game em diante, **R** é botão de kill: mesmo a 0 stacks ela causa muito **true damage** (dano que ignora tanto armor quanto MR — não existe stat defensiva que reduza), e o cooldown reseta a cada kill, então um teamfight limpo pode encadear 2 ou 3 R seguidas. Ele é um dos **bruisers** (lutadores melee que misturam dano e sobrevivência) mais fortes no momento em que Stridebreaker fica pronto.

## Build recomendada

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. A passiva de regen de HP amortece o poke (dano à distância barato que arranha seu HP sem se comprometer com fight) inimigo até o power spike de nível 2. Pegue ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** só contra uma lane melee onde você espera all-in nos níveis 1-2 (ex. mirror Darius).

**Core items (na ordem):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — primeiro spike (o momento em que seu dano e sua **stickiness** — capacidade de ficar grudado num alvo que tenta fugir — saltam mais). O ativo é um dash curto que slow tudo num cone — exatamente o segundo gap-closer (ferramenta para fechar a distância rápido) que falta ao Darius. AD, HP e ability haste (stat que reduz cooldowns) batem com o que o kit pede.
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — botas padrão quando o inimigo te machuca principalmente com auto-attacks. Reduzem esse dano em trades prolongados (trocas repetidas de dano na lane).
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP mais um **shield lifeline**: quando seu HP cai abaixo de ~30%, dispara um shield automático. Essa janela é exatamente quando você precisa de tempo extra para landar a R no reset.
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — transforma **burst** AD (dano alto em 1-2 segundos, tipo combo de assassino) num sangramento lento (dano espalhado pelos próximos segundos em vez de tudo de uma vez). Na kill, o bleed restante é limpo — synergy perfeita com cadeias de reset de R.
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — primeiro ou quarto item alternativo dependendo do start: a primeira auto-attack em um campeão num fight critta e cura. Combinado com o reset de auto da W, esse crit chega quase sob comando.

**Situational items:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — swap dos ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** quando o time inimigo tem muito dano mágico ou correntes de **CC** (crowd control: stuns, roots, knockbacks — qualquer coisa que te trava e impede de agir). A tenacity (stat que reduz a duração do CC em você) é crítica contra times que conseguem te manter longe do carry.
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — contra frontlines com armor stackada (Malphite, Rammus, Shen). Cada Q reduz stacks de armor do alvo para o time todo.
- ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — contra **AP** (Ability Power, a stat por trás do dano mágico) pesado. Dá MR (Magic Resistance) mais uma passiva de healing-amp que potencializa a cura da Q, a limpeza de bleed do Death's Dance e os efeitos lifesteal da R.
- ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — contra squads tanks com armor e tenacity. Armor penetration mais uma proc (passiva que dispara automaticamente a cada hit) de slow em toda habilidade de dano — incluindo Q, W e R.
- ![Dead Man's Plate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Dead Man's Plate** — quando você precisa da passiva de Move Speed stackada para alcançar kiters (Quinn, Vayne top, Gnar) e entrar em range de R antes que eles se reposicionem.

**Boots:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** são o padrão. Troque para ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** quando o time inimigo tiver três ou mais fontes de CC ou dano mágico pesado.

**Skill order:** Maxe **Q** primeiro (waveclear, healing, fonte principal de dano). Maxe **W** em segundo (a duração do slow escala por rank, o auto-reset é sua ferramenta sticky). Coloque pontos em **E** nos níveis 1 e 2 pela passiva de armor pen, mas continue maxando W; **E** maxa por último porque o scaling do ativo é pequeno. Pegue **R** nos níveis 6, 11, 16.

**Runes:** Árvore primária **Precision** com a keystone (a runa principal da árvore) **Conqueror** — passiva que ramp-uppa AD bônus enquanto você continua lutando contra campeões, capped após 5 segundos de combate sustentado. Combine com **Triumph** (cura pequena e burst de gold no takedown), **Legend: Bloodline** (life-steal em stacks nos takedowns) e **Last Stand** (mais dano abaixo de 60% HP). Árvore secundária **Resolve** com **Bone Plating** (redução de dano nos próximos 3 hits depois de tomar dano) mais **Overgrowth** (HP scaling com mortes de minions próximos, perfeito para um top laner que farma 8+ minions por wave). Stat shards: **Adaptive Force** + **Adaptive Force** + **Health Scaling**.

## Matchups principais

- **Garen:** Skill matchup (vence quem joga melhor, independentemente do pick). O **W** dele (shield de damage reduction de 4 segundos) anula uma stack de bleed, mas o silence da Q dele é desviável andando de lado. Acerte a Q na borda quando o W dele estiver em cooldown; sob R, você ganha o trade dele se tiver pelo menos um item de vantagem.
- **Sett:** Lane favorável. A combo Q-W dele é telegrafada (o wind-up é visível o suficiente para reagir). Pulle ele com E depois que ele commitar W, depois stacka bleed antes que ele consiga disengage com recast. Não tradde se ele estiver com Grit (a barra de shield dele) cheia.
- **Fiora:** Matchup melee mais difícil. O **W** dela é um parry (shield breve que bloqueia e contra-ataca a próxima habilidade) — baite com uma Q antes de commitar a E. Os Vitals dela causam true damage, então Death's Dance é obrigatório; rushe ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** só se ela pegar kills early.
- **Quinn / Teemo:** Matchup ranged muito duro. Eles te cegam (cancelam suas auto-attacks por um tempo curto) ou te kitam fora de range. **Freeze** a wave perto da sua tower (pare de pushar e mantenha a wave do seu lado da lane) para negar o farm deles (o gold e XP dos minions), e chame seu jungler — Darius não vence esse 1v1 sem ajuda.
- **Mordekaiser:** Matchup parelho decidido pelo timing da R. O R dele te isola num realm 1v1; você o supera a 5 stacks se guardar a E para pullar ele perto depois que ele usar a própria E para te rootar. Compre ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** cedo se o R dele estiver te matando.

## Power spikes e condições de vitória

- **Nível 2:** Com Q + E desbloqueadas, Darius tem uma janela real de all-in (janela em que você pode commitar totalmente à kill, sem fallback). Pulle com E, Q na borda para dano e cura, duas auto-attacks, e o inimigo já está com 3 stacks de bleed antes de poder responder.
- **Nível 6:** Primeira **R** desbloqueia. Mesmo com só 3 stacks já no inimigo, R causa true damage suficiente para matar a partir de ~40% HP. Procure um all-in de nível 6 no momento em que seu jungler aparecer top side.
- **![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) Stridebreaker completo (~ minuto 11-13):** O dash + slow do ativo dá ao Darius o segundo gap-closer que falta ao kit dele. Force 1v1 em side lane e roame (saia da sua lane para ajudar mid ou bot) por picks (kills isoladas em inimigos fora de posição).
- **Dois itens + R online (~ minuto 18-22):** Pico de teamfight. Caminhe até a back line (os carries squishies que ficam atrás dos próprios tanks durante um fight), R no alvo de menor HP, recast no próximo squishy. Dois resets de R conseguem fechar um teamfight sozinhos.

## Erros comuns

- **Acertar a Q com o cabo interno.** O cabo causa metade do dano e aplica **zero stack de bleed**. Dê um passo para trás logo antes do fim da animação para que a **lâmina externa** acerte o alvo — é o único hit de Q que importa.
- **Usar a E como ferramenta de movimento.** A E é seu único gap-closer confiável; se você queimar para atravessar a wave mais rápido, não tem nada para abrir o engage pelos próximos 16-26 segundos. Guarde para iniciar o all-in.
- **Apertar R cedo demais.** R causa true damage escalado por stack de bleed. Em 0 stacks o dano é mediano; em 5 stacks é zona de one-shot. Construa pelo menos 3 stacks com autos e Q antes de apertar R, exceto quando for finisher num inimigo já morrendo.
- **Perseguir kiters além da tower T2.** Darius não tem escape. Sem R ou E prontos, cada passo passando da tower é um gank de graça para o jungler inimigo — e o Move Speed base baixo dele significa que você não consegue disengage limpo.
- **Stackar itens puro tank.** Darius escala com **AD**, não só com HP. Buildar Sunfire + Warmog's mata seu dano; você para de one-shotar squishies e vira um minion lento ambulante. Mantenha o core AD-bruiser.

## Dica avançada

Pratique o **W animation cancel**: Crippling Strike resetta o timer da auto-attack, então você pode disparar uma auto, apertar W na sequência e disparar a auto-W potencializada logo depois — dois hits de dano completo no tempo de um. O mesmo truque funciona ao contrário: caste W *durante* um wind-up de Q em andamento e a auto potencializada chega no momento em que a Q resolve. Em partida real, o uso de maior impacto é dentro da janela de fúria a 5 stacks: AA → W → AA → Q-borda encadeia quatro hits que aplicam bleed em menos de 2 segundos, suficiente para matar quase qualquer squishy a partir de 70% HP. Teste em custom game num target dummy até o ritmo ficar automático.
