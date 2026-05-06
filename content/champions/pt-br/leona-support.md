---
title: "Leona Support Build & Guia — Patch 16.9"
slug: "leona-support"
language: "pt-br"
patch: "16.9"
champion: "leona"
role: "support"
last_updated: "2026-04-29"
description: "Guia da Leona support para League of Legends Patch 16.9: starter kit, build tank-engage, matchups principais, power spikes, erros comuns de engage e dica final."
quick_learn:
  champion_dd_id: "Leona"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Vanguard"
  abilities:
    - key: "P"
      name: "Sunlight"
      description: "As habilidades da Leona marcam os inimigos atingidos com o debuff Sunlight por 1,5 s. O próximo aliado que causar dano consome a marca para dano mágico bônus. Dano extra grátis a cada engage que o ADC segue."
      dd_spell_id: "Leona_Passive"
    - key: "Q"
      name: "Shield of Daybreak"
      description: "O próximo basic attack da Leona atordoa brevemente e causa dano mágico bônus. Auto-targeted (não precisa mirar) mas em melee range: você precisa estar grudada no inimigo. Segundo crowd control confiável depois de E ou R."
      dd_spell_id: "LeonaShieldOfDaybreak"
    - key: "W"
      name: "Eclipse"
      description: "Damage reduction mais armadura e resistência mágica bônus por alguns segundos. Ao expirar causa dano AOE (em área, atinge todos os inimigos próximos); se acerta, as resistências duram mais. Ative antes do engage."
      dd_spell_id: "LeonaSolarBarrier"
    - key: "E"
      name: "Zenith Blade"
      description: "Leona projeta uma espada em linha: o último campeão atingido fica brevemente rootado (preso) e Leona dasha em cima. Skillshot (habilidade de mira, voa em linha, dá pra desviar). Engage principal, abre a chain E em Q."
      dd_spell_id: "LeonaZenithBlade"
    - key: "R"
      name: "Solar Flare"
      description: "AOE atrasada de longo alcance: inimigos no centro são atordoados, nas bordas ficam lentos. Cast delay longo: serve pra abrir um fight de longe, lockar um alvo fugindo, ou setupar um teamfight fora do alcance da E."
      dd_spell_id: "LeonaSolarFlare"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "W" }
    - { level: 9, key: "E" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3109", name: "Knight's Vow" }
    - { dd_id: "3877", name: "Bloodsong" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "swap das Mercury's vs bot lanes pesadas em auto-attack (Caitlyn, Draven, Tristana) quando o harass dói mais que o CC"
    - dd_id: "3050"
      name: "Zeke's Convergence"
      against: "vs comps com melee carry (Yasuo, Yone, Master Yi) em quem você ulta de forma confiável: o R adiciona dano mágico bônus aos ataques dele"
    - dd_id: "3211"
      name: "Kaenic Rookern"
      against: "vs comps de burst AP (mago duplo tipo Syndra mid + Brand support): escudo mágico passivo que regenera fora de combate"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Acerta E vinda do fog (brush sem ward), pousa no ADC inimigo, encadeia Q stun e AA com a marca Sunlight pronta: o ADC dobra dano no proc e o carry morre antes do support reagir."
  weakness: "A E é um skillshot lento, fácil de desviar em terreno plano. Zero poke à distância: se a bot lane inimiga fica fora do alcance da E, você perde a lane e tem que roamar. Mana frágil no early."
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
    - examples: ["soraka", "sona", "yuumi", "janna"]
      archetype: "Enchanters squishy sem hard CC próprio"
      reason: "Não têm ferramentas pra interromper o dash da E. Assim que a E pousa no ADC inimigo, ele morre no stun da Q antes do enchanter conseguir escudar ou peelar. Yuumi nem desconecta a tempo."
    - examples: ["caitlyn", "jhin", "senna"]
      archetype: "ADCs imóveis sem dash"
      reason: "A E tem 875 de alcance e dasha no último campeão atingido: ADCs sem blink levam a chain E em Q sempre que avançam pra last-hittar. Quando você commita, eles não fogem."
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "Mage supports estacionários sem escape"
      reason: "O poke deles custa posicionamento: um Flash mais E os engata, e a W come o counter-burst. Eles precisam ficar parados pra castar skillshots longos: é exatamente quando a E acerta limpa."
  counterpicks:
    - examples: ["morgana", "milio", "lulu"]
      archetype: "Bloqueadores de hard CC e enchanters de disengage"
      reason: "O Black Shield da Morgana bloqueia o root da E inteiro: você flasha pra dentro à toa. O R do Milio limpa a chain de stun à distância. O polymorph da Lulu cancela o dash no meio do cast. Seu único engage é respondido de graça."
    - examples: ["nami", "lux", "zyra"]
      archetype: "Pokers de longo alcance com sustain ou roots"
      reason: "Eles drenam seu HP grátis a 800-plus de alcance enquanto você não tem resposta. O Q da Lux te binda no meio do engage e a bolha da Nami interrompe o dash; você come poke sem nunca chegar no alcance."
    - examples: ["thresh", "blitzcrank", "pyke"]
      archetype: "Hook supports que te tiram de posição"
      reason: "O hook deles acerta antes da sua E (Q do Thresh ~1100 vs E 875). Você come o pull, fica focado sozinho no time deles, e seu ADC fica exposto sem ferramenta de engage pra seguir."
---

## Visão geral

Leona é um **vanguard support** (um support classe tank cujo trabalho é abrir os fights, não curar os aliados) — ela corre em cima do carry inimigo, prende ele numa cadeia de crowd control, e deixa os companheiros fecharem o kill. O kit dela empilha dois crowd controls num único alvo: **Zenith Blade (E)** é um skillshot dash de longo alcance que rooti o último campeão atingido, **Shield of Daybreak (Q)** é um stun na próxima auto-attack, e a passiva **Sunlight** marca cada alvo que ela atinge pra que o próximo aliado a bater cause dano mágico bônus. **Eclipse (W)** é a camada defensiva que ela ativa *antes* do engage: damage reduction mais armadura e magic resist que duram mais se acertar algum inimigo ao expirar. **Solar Flare (R)** é um stun AOE atrasado usável de mais longe que a E — pra engagar do fog of war ou lockar um kill em fuga.

Game plan: na lane, fique na borda do brush até o ADC inimigo se aproximar pra last-hittar, então acerte a E vinda do fog (brush sem ward) pra ele não conseguir desviar, encadeie Q e deixe seu ADC converter. No mid-game, **roame** (saia da bot lane pra ajudar mid ou jungle) usando R pra picks cross-lane. No late-game, abra o fight no alvo prioritário — geralmente o ADC inimigo ou o mago do mid — e fique vivo o bastante pra **peelar** (proteger o seu próprio carry).

## Build recomendada

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (o starter unificado dos supports) mais 2 Health Potions. Não last-hitte minions: deixe o ouro pro ADC. World Atlas paga seu ouro à parte através da quest progression.

**Core items (em ordem):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — starter. Evolui automaticamente conforme você acumula quest progress passando por ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass** e ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**, até o upgrade endgame que você escolher.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — magic resist mais **tenacity** (atributo que reduz a duração do crowd control em você). Um stun mais curto significa que você ainda consegue castar a Q depois que o support inimigo tenta interromper.
3. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — armadura, magic resist e um ativo que escuda todos os aliados próximos. Use no instante em que dá E pra que o time absorva o primeiro **burst** (dano alto nos primeiros 1-2 segundos).
4. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — te liga ao **ADC** (Attack Damage Carry — o bot lane que ataca de auto-attack): uma parte do dano que ele recebe é redirecionada pra você, e você cura ele em troca.
5. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — o upgrade endgame engage-focused do support item. Carrega uma passiva **Spellblade**: depois de qualquer habilidade, o próximo basic attack causa dano bônus e amplifica o dano no alvo por 4 segundos. Padrão: "habilidade → AA → habilidade → AA".

**Situational items:**

- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — botas de armadura que reduzem dano de auto-attack. Troque das Mercury's quando a bot lane inimiga é pesada em auto-attack (Caitlyn, Draven, Tristana) e o **harass** (poke e chip damage) dela dói mais que o CC late.
- ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — te liga a um aliado escolhido; quando você ulta, esse aliado ganha dano mágico bônus nos ataques. Pegue contra comps com melee carry (Yasuo, Yone, Master Yi) em quem você ulta de forma confiável.
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3211.png) **Kaenic Rookern** — escudo mágico passivo que regenera fora de combate. Pegue contra comps de burst AP (mago duplo tipo Syndra + Brand) — o escudo come uma ulti inteira.

**Boots:** Por padrão ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** pela tenacity — um hook do Thresh de 1,25s vira 0,85s, suficiente pra ainda castar a Q. Troque pra ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** só contra bot lanes AA-heavy.

**Skill order:** Maxe **E** (Zenith Blade) primeiro — cooldown menor significa mais janelas de engage, e a E é sua única ferramenta à distância. Maxe **W** em segundo pra mais damage reduction. Maxe **Q** por último (subir o rank quase não muda o stun, é mais dano). Pegue **R** nos níveis 6, 11, 16.

**Runes:** Primary **Resolve** (a árvore de runas defensivas — durabilidade) com **Aftershock** (armadura e magic resist grátis quando você aplica crowd control, dispara em todo Q stun e E root), **Font of Life** (seu CC marca o alvo; aliados que atacarem se curam), **Conditioning** vs lanes de scaling late ou **Bone Plating** vs burst early, **Unflinching** (extra **tenacity** quando você usa um summoner spell). Secondary **Inspiration** com **Hextech Flashtraption** (Flash de backup em cooldown longo) e **Cosmic Insight** (cooldowns reduzidos em summoners e ativos de item). **Stat shards**: Adaptive Force / Adaptive Force / Health.

## Matchups principais

- **Nautilus:** Mirror **engage**. O Q hook dele supera sua E (~1100 vs 875), então não avance enquanto o hook estiver up. Desvie, depois flash-E no ADC dele enquanto não tiver follow-up.
- **Pyke:** Skill matchup. Ele te poka com a Q e te supera no roam pela **stealth** (invisível atravessando brush). Mantenha vision profunda no rio e force fights na lane onde a R dele não reseta no kill.
- **Morgana:** Hard counter contra seu **all-in** (commit total ao kill). Black Shield bloqueia o root da E inteiro — você flasha pra dentro à toa. Trackeie o cooldown de 18 segundos e force fights só na janela em que ela está down.
- **Soraka:** **Enchanter de sustain** pura (support de cura que vence mantendo o ADC vivo, não abrindo fights). Flash-E em cima dela toda vez que o Flash dela está down — ela morre na sua combo antes do ADC reagir.
- **Caitlyn:** Matchup de **poke** de longo alcance (chip damage à distância). Ela bullya seu HP debaixo da torre. Não revide, aceite a lane ruim, roame mid ou invada com Mobility Boots — Leona perde a lane mas ganha o macro.

## Power spikes e condições de vitória

- **Nível 2 (E + W):** Primeiro spike. A chain completa E em Q desbloqueia no nível 3, mas com E mais W você já consegue **tradar** forte (uma troca curta de dano, não um kill commit completo). Um ADC inimigo que se sobre-extende (passa da primeira **wave** — a fileira de minions chegando) é kill grátis se você acerta a E com **Flash** up.
- **Nível 6 (R desbloqueada):** O potencial de engage explode. **Solar Flare** te permite abrir fights do fog of war: caste do brush do rio sem se mostrar. R também serve como **peel** (proteger seu carry) — solte em cima de quem está divando seu ADC.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari completion (~ minuto 14-16):** Primeiro item de teamfight. Seu engage solta um escudo de time grátis. Agrupe pra **Drake** (objetivo dragão no rio inferior — kills dão buffs de status permanentes) ou **Voidgrubs** (monstrinhos no rio superior — o time que mata ganha dano bônus em estruturas).
- **![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) Bloodsong endgame (~ minuto 24-30):** O proc Spellblade mais 4 segundos de damage amp em campeões viram sua rotação em dano de verdade. E → AA → Q → AA tira pessoalmente 20-25% de HP de um **squishy** (campeão de pouca defesa, tipo ADC ou mago).

## Erros comuns

- **E em terreno aberto.** Zenith Blade é um projétil lento, fácil de desviar em lane plana. Caste E de dentro de um brush ou de um ângulo sem ward — o projétil atravessa o meio segundo de visão que o inimigo precisa pra reagir. Em terreno aberto, só caste E quando o alvo já está CCado por outra fonte.
- **Engage sem follow-up.** A E da Leona te commita pra frente e você não consegue voltar. Se seu ADC está na base ou o jungler está do outro lado do mapa, segure a E. Um engage solo em 4v5 só te entrega e queima o cooldown da R por nada.
- **W castada depois do engage em vez de antes.** Eclipse dá damage reduction no *instante* em que você casta, não quando explode. Aperte W primeiro, *depois* E. Se você dá E e só então percebe que precisava das resistências, o bônus da W frequentemente expira antes de você chegar no alvo.
- **R reativa em curto alcance.** Solar Flare tem cast delay longo e travel time — em melee range até um alvo parado escorrega da zona central de stun. Guarde a R pra abrir fight do fog of war ou fechar um runner low-HP.
- **Esquecer da passiva Sunlight.** Cada habilidade que você acerta marca o alvo por 1,5 segundos; o primeiro aliado a atacar consome a marca pra dano bônus. Time sua Q pra que seu ADC já esteja no alcance de auto-attack — a chain deve soar como "Q stun, ADC AA, Sunlight estala, alvo morto".

## Dica avançada

A **combo R-Flash-E do fog of war**. Fique invisível no brush enemy-side do rio no nível 6. Caste **R** no ADC inimigo enquanto ele farma — ele vê o indicador no chão mas não a fonte. No instante em que ele começa a se mover pra desviar, **Flash** pra frente, **E** durante o flash (o dash se estende da posição flashada), e **Q** ao chegar. Bem feito, o alvo come stun da R, root da E, depois stun da Q — três crowd controls em dois segundos sem counter-play. Pratique o timing no **Practice Tool** até R-Flash-E-Q virar uma sequência fluida em meio segundo.
