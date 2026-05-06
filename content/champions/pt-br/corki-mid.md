---
title: "Corki Mid Build & Guia — Patch 16.9"
slug: "corki-mid"
language: "pt-br"
patch: "16.9"
champion: "corki"
role: "mid"
last_updated: "2026-05-02"
description: "Guia do Corki mid no Patch 16.9 do League of Legends: build híbrida de marksman, runas, matchups da rota, power spikes, erros comuns e uma dica avançada."
quick_learn:
  champion_dd_id: "Corki"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hybrid"
  abilities:
    - key: "P"
      name: "Hextech Munitions"
      description: "Parte do dano dos auto-attacks vira true damage. DPS constante que ignora armor e magic resist — o motivo de você empilhar attack speed e on-hit."
      dd_spell_id: "Corki_Passive"
    - key: "Q"
      name: "Phosphorus Bomb"
      description: "Bomba em área que causa dano mágico e revela inimigos brevemente. Serve para last-hit quando zonado, checar bushes e abrir todo trade de poke."
      dd_spell_id: "PhosphorusBomb"
    - key: "W"
      name: "Valkyrie"
      description: "Dash curto que deixa rastro de fogo. Sua única mobilidade: use para fugir, fechar gap ou desviar de skillshot. Não desperdice em waveclear."
      dd_spell_id: "CarpetBomb"
    - key: "E"
      name: "Gatling Gun"
      description: "Cone canalizado à frente do Corki que causa dano e reduz armor e magic resist. Adiciona DPS e amolece os alvos para os mísseis da R."
      dd_spell_id: "GGun"
    - key: "R"
      name: "Missile Barrage"
      description: "Míssil de longo alcance que explode no impacto. Acumula até 7 cargas; cada terceira é uma Big One com burst extra. Seu poke principal e ferramenta de execute."
      dd_spell_id: "MissileBarrage"
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3004", name: "Manamune" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "3046", name: "Phantom Dancer" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra assassins com vários dashes (Zed, Akali, Talon): a stasis trava o burst e dá tempo para W ou peel do time"
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "contra frontline com 2+ tanks (Sion, Ornn, Maokai): armor pen pesada para autos e mísseis seguirem cortando"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra burst AP forte (LeBlanc, Veigar, Syndra): o escudo mágico absorve uma full combo e te deixa dar W"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contra times com 3+ hard CC (stuns, roots): troque botas quando chain CC pesa mais que magic penetration"
  base_combo: ["Q", "AA", "R", "E", "AA"]
  win_condition: "Escale atrás dos minions até Trinity Force e Manamune, depois rói os squishies com poke de R no alcance máximo. Pegue alvos isolados durante rotações enquanto o time segura janelas de objetivo."
  weakness: "Squishy com apenas um dash. Assassins móveis com vários gap-closers passam por cima antes de dois itens, e bloqueadores de projéteis (Yasuo Wind Wall, Braum E) anulam o poke."
  runes:
    primary_tree: "Inspiration"
    primary_tree_dd_id: 8300
    keystone:
      dd_id: 8369
      name: "First Strike"
      icon_path: "perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png"
    primary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Inspiration primary: First Strike recompensa o Corki por abrir todo trade com Q ou R, transformando o dano inicial em ouro extra que financia a build greedy Trinity + Manamune. Magical Footwear, Biscuit e Cosmic Insight prolongam o sustain early para escalar sem morrer."
    secondary_rationale: "Sorcery secondary: Manaflow Band é obrigatória porque os mísseis da R custam mana e você os spamma na lane; Gathering Storm dá AP de graça que turbina o dano mágico do Q e da Big One missile no late game."
    secondary_alternative: "Contra lanes de poke pesado (Xerath, Vel'Koz, Zoe) onde você não pode ficar atrás em HP, troque Sorcery por Resolve com Second Wind (regen passiva sob harass) e Overgrowth (max HP scaling) para escalar mais seguro."
matchup_draft:
  pick_into:
    - examples: ["veigar", "anivia", "karthus", "cassiopeia"]
      archetype: "Mages imóveis sem dash"
      reason: "O R do Corki alcança 1225 unidades e o W dá a única vantagem de mobilidade da rota. Alvos sem dash ou stealth comem poke de R repetido e não conseguem punir as janelas em que o W está em cooldown."
    - examples: ["xerath", "vel-koz"]
      archetype: "Artillery mages com channels longos"
      reason: "O Corki iguala o alcance deles com a R e ainda tem dash para interromper channels longos (Xerath R, Vel'Koz R). Eles não conseguem dar all-in nele, e os trades favorecem o lado com mobilidade."
    - examples: ["annie", "syndra"]
      archetype: "Mages de burst de curto alcance"
      reason: "O kill threat deles começa dentro do alcance de auto-attack, exatamente onde a passive de true damage do Corki mais Trinity Force os supera. Pre-6 você out-poka com R, post-6 desvia do stun com W."
  counterpicks:
    - examples: ["zed", "talon", "akali", "qiyana"]
      archetype: "Assassins móveis com vários gap-closers"
      reason: "Corki tem só um dash (W) com cooldown longo. Kits multi-dash entram no cast range dele antes do W voltar e o bursta pelo HP de Trinity, especialmente antes de dois itens."
    - examples: ["yasuo", "yone"]
      archetype: "Bloqueadores de projétil Wind Wall"
      reason: "Wind Wall come o Q e toda a barragem de mísseis R, removendo dois terços do dano do Corki do trade. Mesmo quando ele ganha em HP, o custo do trade em cooldowns é brutal."
    - examples: ["fizz", "kassadin"]
      archetype: "Untargetable / escapes baseados em blink"
      reason: "Fizz E e Kassadin R desviam de uma combo committada e re-engagam o Corki quando o W dele está down. Ele não tem follow-up de burst quando viram untargetable."
---

## Visão geral

Corki é um marksman híbrido (carry à distância que mistura dano físico e mágico) que joga mid lane como um champion de artillery de longo alcance: ele fica mais forte conforme os itens vão chegando (ele "escala"), rói o HP inimigo de longe com **Missile Barrage (R)** ("poke" = dano picado fora do alcance deles), e finaliza alvos squishy de pouco HP com auto-attacks assim que **Trinity Force** está pronto. A **Hextech Munitions (P)** transforma uma parte de cada auto-attack em true damage (dano que ignora armor e magic resist), então attack speed e stats on-hit pesam tanto quanto AD ou AP puro. Ele fica em mid porque os ganks bilaterais do river (ataques surpresa do jungler) favorecem o dash da **Valkyrie (W)**, e porque os mísseis de R conseguem pokar as side lanes desde o centro do mapa.

Plano de jogo numa frase: empilhe (acumule) mana no Manamune para virar Muramana, empurre as waves (mate minions rápido para empurrar a leva pra frente) com **Phosphorus Bomb (Q)** e R, e em cada cooldown window (os segundos em que suas habilidades estão prontas) rói o HP do laner inimigo para o seu jungler poder dar dive (matar embaixo da torre dele). A skill expression mora no aim da R — leia o alvo (preveja para onde ele vai se mover e mire ali) — e no timing da Big One (cada terceira R é um míssil mais forte) para o momento em que o inimigo está mais baixo. **W** é seu único dash: usar errado e qualquer assassin te walka down.

## Build recomendada

**Itens iniciais:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. A blade dá lifesteal (uma parte do dano causado te cura) que combina com a passive de auto-attack; pule Doran's Ring a menos que esteja em pure poke lane onde mana sustain pesa mais que dueling.

**Itens core (na ordem):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — Sheen (componente do Trinity) procca (dispara um efeito de dano extra) em cada Q e cada míssil de R, mais AD, attack speed, ability haste (redução de cooldown) e movement speed. O maior power spike do champion.
2. ![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) **Manamune** — Manamune se transforma aos poucos em uma versão mais forte chamada Muramana conforme você gasta mana; depois de "stacked" (totalmente transformado) adiciona dano bônus em cada auto-attack e cada habilidade que custa mana, incluindo cada míssil de R.
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plana (ignora parte da magic resist inimiga) que turbina dano de Q e R.
4. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — seu primeiro auto-attack em um inimigo ("auto energized") causa dano bônus e alcança mais longe que o normal. O crit chance encaixa no perfil de stats do Trinity.
5. ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — attack speed para DPS sustentado via **Gatling Gun (E)** e o true damage on-hit da passive.

**Itens situacionais:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra assassins com vários dashes (Zed, Akali, Talon): a stasis trava a janela de burst para o time ou seu W te salvar.
- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — contra frontline com 2+ tanks (Sion, Ornn, Maokai): armor pen pesada para autos e mísseis de R seguirem cortando.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contra burst AP pesado (LeBlanc, Veigar, Syndra): o escudo mágico absorve uma full combo e te deixa sair de W.
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — troque das Sorcerer's quando o time inimigo tem 3+ hard CC (stuns, roots) e chain CC pesa mais que magic penetration.

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** é o default. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** se a team comp for CC-pesada.

**Skill order:** Maxe **Q** primeiro (poke e waveclear), **E** em segundo (DPS e shred de resists), **W** por último (utility). Ponto em **R** nos níveis 6, 11 e 16.

**Runas:** Primary **Inspiration** com **First Strike**, **Magical Footwear**, **Biscuit Delivery** e **Cosmic Insight**. Secondary **Sorcery** com **Manaflow Band** e **Gathering Storm**, ou **Resolve** com **Second Wind** e **Overgrowth** contra lanes de poke pesado.

## Matchups principais

- **Yasuo / Yone:** Eles bloqueiam seu Q e mísseis de R com Wind Wall. Segure o Q até eles gastarem habilidades, segure R até o Wind Wall ir para cooldown, e nunca trade (troque dano) em melee range onde eles podem dar E (dash) nos minions ao seu lado.
- **Akali / Zed:** Diving threats (champions que pulam em você embaixo da torre para te matar). Compre ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** depois de Trinity Force; nunca gaste W num trade se a corrente de dashes deles ainda está disponível.
- **Veigar:** Empate o alcance com R, desvie do W dele (uma jaula que se expande devagar e te prende no lugar), e evite auto-trades dentro do anel do E (um anel de stun que ativa quando você o atravessa). Os stacks de Q dele escalam infinitamente (mais kills = mais AP permanente), então feche a lane antes do minuto 25.
- **Twisted Fate:** Corrida de roams (os dois champions tentam sair da lane primeiro para ajudar os companheiros). Empurre a wave com Q antes dele bater nível 6, pingue o jungler inimigo quando o R dele estiver up, e dê W para longe do alvo da gold card em vez de tankar o stun na cara.
- **Galio:** Puna ele pre-6 matando a wave que ele não consegue acompanhar de melee (Galio é melee, você é ranged). Post-6 o R dele é uma ferramenta de engage global — se agrupe com o time só quando você tem mísseis de R em estoque para peelar (tirar ele dos seus carries de back-line) na chegada dele.

## Power spikes e condições de vitória

- **Nível 2:** Com Q + W ou Q + E, dá para punir um last-hit perdido com um trade Q-AA-AA ("AA" = auto-attack básico) e ou desengagear com W ou dar follow-up se o Flash deles está down.
- **Nível 6:** A primeira **Missile Barrage (R)** desbloqueia side-lane pressure (a opção de sair da mid e ameaçar top ou bot). Com estoques de R mais W, dá para roamar pro bot, dropar dois mísseis e uma Big One num trade 1v1 e voltar para a wave de W.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force completo (~ minuto 12-14):** Sheen procca em cada Q e cada míssil de R, transformando poke em kill threat. Esse é o momento de all-inar (committar a kill total, sem retirada) o laner low-HP com Q-AA-R-AA.
- **![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) Manamune stackada (~ minuto 18-22):** Muramana adiciona dano bônus em cada ação que custa mana; o dano em teamfight praticamente dobra em comparação ao pre-stack. Force fights de objetivo (Drake, Baron) aqui.

## Erros comuns

- **Spammar R off cooldown para waveclear.** Os mísseis de R são estoque finito; se você os esvazia em minions, no próximo teamfight tem zero burst no pior momento. Empurre waves com Q + auto-attacks; guarde 4+ mísseis para os objetivos.
- **Usar W agressiva sem follow-up.** O W é sua única fuga. Dashar para fechar uma kill que precisava de mais um auto é exatamente como o Corki morre — se você não consegue matar com o mana e os cooldowns restantes, não committe (não engaje totalmente).
- **Auto-tradar em melee range.** O true damage da passive de perto parece tentador, mas a pool de HP do Corki é squishy (baixa e frágil, igual de ADC). Fique no alcance da R quando o laner tem gap-closers up.
- **Comprar ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes contra time CC-pesado.** Magic penetration é desperdício se você passa o fight stunado. Sorcerer's só quando o CC deles é baixo; senão troque para Mercury's Treads.
- **Roamar com estoque de R vazio.** Roam sem 2 mísseis é cara ou coroa. Espere os 8-12 segundos pelos estoques antes de cruzar river; esse delay sozinho é a diferença entre uma kill e dar a wave de graça.

## Dica avançada

Acompanhe e explore o ritmo da **Big One**. Cada terceiro míssil de R (a "Big One") causa muito mais dano que os dois regulares. Antes de um teamfight, conte os mísseis em estoque — se o próximo for uma Big One, guarde para o alvo prioritário; se acabou de gastar, atire os dois mísseis filler na wave ou numa torre para a Big One recarregar pronta para o engage. Quem atira R no chute desperdiça Big Ones em minions; quem acompanha a contagem one-shota os squishies (carries low-HP) na hora que importa.
