---
title: "Ashe ADC Build & Guia — Patch 16.9"
slug: "ashe-bot"
language: "pt-br"
patch: "16.9"
champion: "ashe"
role: "bot"
last_updated: "2026-04-29"
description: "Guia da Ashe ADC bot lane no League of Legends Patch 16.9: setup de kiting com Frost Shot, build marksman, matchups principais, power spikes, erros comuns e dica final."
quick_learn:
  champion_dd_id: "Ashe"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Marksman / Utility"
  abilities:
    - key: "P"
      name: "Frost Shot"
      description: "Cada auto-attack aplica slow no alvo. Crits não dão dano bônus, mas aplicam um slow mais forte. Base do kiting (andar para trás enquanto ataca) da Ashe."
      dd_spell_id: "Ashe_Passive"
    - key: "Q"
      name: "Ranger's Focus"
      description: "Acumula stacks com auto-attacks. Em stacks máximos, ative para ganhar attack speed bônus e transformar cada AA em uma rajada de flechas com dano potencializado. Botão DPS principal."
      dd_spell_id: "AsheQ"
    - key: "W"
      name: "Volley"
      description: "Cone de flechas com 1200 de alcance à frente. Cada inimigo é atingido por apenas uma flecha e leva o slow de Frost Shot. Principal ferramenta de poke e trade na lane."
      dd_spell_id: "Volley"
    - key: "E"
      name: "Hawkshot"
      description: "Manda um falcão para qualquer ponto do mapa por 5 segundos de vision (capacidade de enxergar na fog of war). 2 cargas. Use para scoutar objetivos, não para dano."
      dd_spell_id: "AsheSpiritOfTheHawk"
    - key: "R"
      name: "Enchanted Crystal Arrow"
      description: "Skillshot global (habilidade não direcionada que viaja em linha reta). Stuna o primeiro champion atingido; quanto mais a flecha viaja, maior o stun (até ~3.5s)."
      dd_spell_id: "EnchantedCrystalArrow"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "E" }
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
    - { dd_id: "3087", name: "Statikk Shiv" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3031", name: "Infinity Edge" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contra stackers de HP/armor (Cho'Gath, Sion, Malphite, Ornn) — % armor pen reconverte AA em dano real"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contra comps que empilham cura (Soraka, Vladimir, Aatrox) — aplica Grievous Wounds (corta a cura inimiga pela metade)"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "contra assassins ou divers (Zed, Kha'Zix, Talon) — a passiva Ghost te faz atravessar unidades durante o kite"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "contra poke pesado ou burst — grande lifesteal heal + buffer de overshield"
  base_combo: ["W", "AA", "Q", "AA"]
  win_condition: "Espalhe slows de Frost Shot nas teamfights, kite atrás da sua front line com AAs potencializadas pelo Q e finalize alvos isolados com R cross-map para controlar objetivos."
  weakness: "A movement speed base de auto-attack mais lenta entre todos os marksmen. Sem dash, sem reposition tool — divers e assassins que entram em melee a deletam se o support não conseguir peelar."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["vayne", "twitch", "kalista"]
      archetype: "Marksmen de curto alcance sem poke early"
      reason: "O W da Ashe tem 1200 de alcance e aplica slow de Frost Shot; ela poke esses alvos de fora dos 500-550 de AA deles e cada aproximação vira um trade ganho do lado dela."
    - examples: ["kog-maw", "senna"]
      archetype: "Carries imóveis de scaling"
      reason: "O R cross-map deleta esses alvos nos spawns de objetivo ou nas janelas de reset na fountain. O kit deles não tem dash para escapar da flecha que sai da fog of war."
    - examples: ["ornn", "sejuani"]
      archetype: "Front lines tank lentas sem dive móvel"
      reason: "Ashe slowa a front line sem parar com W + autos, forçando os fights a durarem até os items DPS dela finalizarem a back line. Os tanks não a alcançam se ela kitar com o support."
  counterpicks:
    - examples: ["caitlyn", "jhin", "varus"]
      archetype: "Marksmen de longo alcance com poke"
      reason: "Caitlyn 650 AA, Jhin 4° tiro a 750, Varus W stacka a 925 — eles superam o poke do 600 de AA da Ashe e drenam HP a cada wave sem nunca entrar no alcance do W."
    - examples: ["lucian", "tristana"]
      archetype: "Marksmen de alta mobilidade com dashes"
      reason: "O E do Lucian e o W da Tristana ignoram o slow da Ashe se reposicionando na hora. Eles fecham a distância sem pagar o preço de kiting que pesa em todo outro ADC."
    - examples: ["pyke", "leona", "nautilus"]
      archetype: "Supports de engage com burst e CC duro"
      reason: "Ashe não tem dash nem shield para escapar de uma corrente de lock-down. Um Q de Leona ou Nautilus bem encaixado a tira do trade antes dela conseguir devolver W, e o slow não serve quando ela está stunada."
---

## Visão geral

A Ashe é a marksman mais simples de League — um papel chamado "ADC" (attack damage carry: um champion ranged que dá dano com auto-attack e vira a principal fonte de dano no late-game). Ela não tem dash, não tem reposition tool e tem a movement speed base mais lenta de todos os marksmen do papel. O que ela ganha em troca é o kit mais confiável em utility entre os ADC: cada auto-attack aplica slow, o **W** dela faz poke (chip damage à distância para drenar HP sem se comprometer com um fight) de 1200 unidades (cerca de meia tela) com slow embutido, e o **R** é um skillshot global que stuna e dá engages grátis para o time em qualquer objetivo do mapa. Ela foi construída para fazer **kite** — andar para trás enquanto ataca para manter os inimigos à distância — e para habilitar picks (eliminar um inimigo isolado fora de teamfight) para o resto do time.

O plano de jogo na lane é simples: encaixe **W** no ADC inimigo a cada cooldown para slowar e drenar HP, farme tranquilo com auto-attacks e procure plays de nível 6 com **R** assim que o seu support tiver um CC pronto (Crowd Control: stuns, slows, roots que travam o inimigo no lugar). Em teamfights (brigas 5v5 que decidem objetivos como Drake ou Baron — monstros neutros que dão buff ao time que mata), ela fica no alcance máximo de AA atrás da sua front line (os tanks/bruisers que abrem o fight), ativa **Q** quando tem 4 stacks (cargas de Q que se acumulam pelas auto-attacks; o contador aparece embaixo do portrait) e encadeia slows em quem encostar na sua front line. A skill mais difícil de aprender na Ashe é a predição do **R** — snipar com 1 segundo de tempo de voo é a diferença entre um pick grátis e uma ult jogada fora.

## Build recomendada

**Itens iniciais:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** (um pouco de AD + lifesteal — cura uma fração do dano causado) + 1 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**.

**Itens core (na ordem):**

1. ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv** — power spike de primeiro item (o momento em que um champion fica visivelmente mais forte depois de fechar um item). As AA frequentes da Ashe procam (ativam) a passiva Energized (efeito em stack que solta dano mágico bônus em uma AA carregada) muito rápido.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — botas de attack speed. O Q potencializado da Ashe escala com attack speed, então elas ajudam em todo fight a partir do minuto 8.
3. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — adiciona duas flechas laterais a cada AA. As flechas laterais aplicam slow de Frost Shot em alvos próximos, então em teamfight a Ashe slowa o time inteiro do inimigo só batendo no tank da front line.
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — multiplicador late de crit (critical strike: chance de uma AA dar ~175% de dano). Aqui o Q potencializado passa de "doe bem" para "deleta squishy em 2 segundos" (squishy: champion com defesas baixas).

**Itens situacionais:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contra stackers de HP/armor (Cho'Gath, Sion, Malphite, Ornn). A penetração de armadura percentual ignora uma fração fixa da armor inimiga, então tanks morrem na mesma velocidade que squishies.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contra comps que empilham cura (Soraka, Vladimir, Aatrox). Aplica Grievous Wounds (status que reduz pela metade a cura recebida pelos inimigos).
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — contra assassins ou divers (Zed, Kha'Zix, Talon — champions feitos para mergulhar na back line). A passiva Ghost te faz atravessar minions e champions inimigos enquanto kita.
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — contra poke pesado (chip damage de longo alcance vindo de mages de artillery) ou contra burst comps. Lifesteal cura no meio do fight; em overheal acumula HP como escudo.

**Botas:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** é a única escolha correta na Ashe. O attack speed converte direto em DPS de Q potencializado.

**Skill order:** Maxe **Q** primeiro (mais AD bônus por AA potencializada + ativo mais longo). Maxe **W** em segundo (cooldown cai de 18s rank 1 para 4s rank 5 — esse é o spam de poke na lane). Maxe **E** por último (apenas utility). Coloque ponto em **R** nos níveis 6, 11, 16.

**Runas:** árvore primária **Precision** (a árvore que escala com AA) com **Lethal Tempo** (attack speed extra continuando a auto-atacar um champion), **Triumph** (cura em takedown), **Legend: Alacrity** (mais attack speed escalando por stack), **Coup de Grace** (dano extra em inimigos abaixo de 40% HP). Árvore secundária **Inspiration** com **Biscuit Delivery** (biscoitos grátis que dão mana e HP na lane) e **Cosmic Insight** (mais uptime de **Flash** e **R**).

## Matchups principais

- **Caitlyn:** o matchup mais difícil. Ela tem 650 de alcance AA contra os seus 600, traps (W) mais longas e um hook (E) de 1300. Esconda-se atrás dos minions quando ela coloca trapinhas; deixe seu support engage nela só se ela overextender (avança longe demais dos próprios minions, sem escape se for gankada). Power-farme em segurança (foque em recolher ouro de minion sem riscos) até ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv** ficar online, e depois procure picks cross-map com **R**.
- **Lucian:** perde para a Ashe no nível 1, mas vira no nível 2 com o combo Q + E. Guarde o **W** para quando ele faz double-AA em você (encaixa duas auto-attacks seguidas) e ande para fora enquanto ele está preso no meio do combo. Nunca tradeie depois do **E** dele — o dash o deixa imune até voltar de cooldown.
- **Vayne:** pre-6 farm grátis: ela tem 550 de alcance e nada de slow. Empurre a wave (mande seus minions na direção da torre dela), faça harass (chip damage continuado para drenar HP) com **W** a cada cooldown. Depois do 6 a ult dela dá invisibilidade no dash do Q; não persiga ela nos bushes (mato que bloqueia visão).
- **Jhin:** te poke de longe com o W (skillshot de poke). Fique atrás da primeira linha de minions; o W dele slowa o próprio Jhin se acerta um minion antes. Pune ele durante a recarga (pente de 4 tiros + reload manual de 2.5 segundos).
- **Draven:** perde a guerra de AA — os machados do Q dele dão muito mais dano por AA que o seu básico. Evite trades 1-por-1; só commit quando os machados não estão na mão dele. Compre ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** mais cedo do que o usual se ele abre 3 kills de vantagem.

## Power spikes e condições de vitória

- **Nível 1:** forte com **W**. O cone de 1200 é a melhor ferramenta de trade lvl 1 entre todos os ADC (um "trade" é uma troca rápida de dano na lane, não uma tentativa de kill). Pegue um trade grátis no ADC inimigo se ele encostar para um cs (creep score: dar o último hit num minion para pegar o ouro).
- **Nível 6:** o primeiro **R** desbloqueia kills na lane com qualquer support de CC. Se seu Leona / Nautilus / Pyke tem ult, R + o engage deles = kill garantida no ADC inimigo se ele não estiver com HP cheio embaixo da torre.
- **![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) Statikk Shiv finalizado (~ minuto 11-13):** o waveclear (limpar a wave inimiga com dano AOE) inverte. Você empurra a wave com W + 2 AAs e depois roama (sai da lane para ajudar aliados) para plays cross-map de **R** no Drake ou em skirmishes mid (brigas pequenas entre 2-3 jogadores no river ou na jungle).
- **![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge online (~ minuto 26-30):** o Q potencializado com crits derrete a back line em 2-3 segundos. Force teamfight em todo objetivo a partir desse ponto.

## Erros comuns

- **Ativar Q em stacks baixos.** **Q** só dá dano se você tem 4 stacks (visíveis abaixo do portrait). Ativar antes desperdiça 30 mana num Q sem graça. Auto-ataque 4 vezes primeiro, depois aperta Q.
- **Jogar R no cooldown na lane.** **R** é a ferramenta mais valiosa do seu time (stun cross-map para fights de Drake, setups de Baron). Guardar para fights de objetivo quase sempre vale mais do que queimar num trade na lane. A exceção: uma janela letal de kill onde R garante o finish.
- **Ficar parada auto-atacando num fight.** Ashe foi construída para kitar; ficar parada significa comer skillshots que você desviaria mexendo. Ande um passo entre AAs para desencaixar o timing inimigo.
- **Empurrar wave sem vision.** Ashe não tem escape. Se você empurra além do mid-river sem o seu support wardar tribush e river, o jungler inimigo te mata grátis. Sempre **W** no bush que você não vê antes de andar pra frente.
- **W em minion no cooldown.** **W** custa 75/70/65/60/55 de mana e o slow é o melhor harass na lane. Guarde **W** para o ADC inimigo, não para a wave.

## Dica avançada

Treine o **flash R** — quando um inimigo está prestes a fugir para a fog of war com pouca HP, **Flash** na direção em que ele corre e atire **R** logo em seguida. O flash te reposiciona 400 unidades à frente, então o **R** percorre 400 unidades a menos antes de impactar — mas a duração do stun escala com a distância percorrida, então isso só funciona como finalizador em alvos near-execute (inimigos já baixos o bastante para morrer com qualquer hit extra). A condição de vitória: o inimigo acha que escapou com 200 HP porque a Ashe ainda parece estar a 1500 unidades, sem ver o flash + R que fecha a perseguição.
