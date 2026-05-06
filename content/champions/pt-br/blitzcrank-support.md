---
title: "Blitzcrank Support Build & Guia — Patch 16.9"
slug: "blitzcrank-support"
language: "pt-br"
patch: "16.9"
champion: "blitzcrank"
role: "support"
last_updated: "2026-04-29"
description: "Guia de Blitzcrank support no Patch 16.9: timings de hook, setups de wards, build de engage tank, matchups principais, power spikes e erros comuns."
quick_learn:
  champion_dd_id: "Blitzcrank"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Tank / Engage"
  abilities:
    - key: "P"
      name: "Mana Barrier"
      description: "Quando o HP fica baixo, você ganha um escudo proporcional à mana atual. Vale entrar em fight com a barra de mana cheia."
      dd_spell_id: "Blitzcrank_Passive"
    - key: "Q"
      name: "Rocket Grab"
      description: "Skillshot linear longo: puxa em sua direção o primeiro inimigo atingido (um \"hook\" — um agarrão que arrasta o alvo). Cooldown longo: hook errado = 16-20 segundos sem engage."
      dd_spell_id: "RocketGrab"
    - key: "W"
      name: "Overdrive"
      description: "Self-buff: muito move speed e attack speed, depois um slow no final. Usa para fechar o gap antes do Q ou para perseguir depois do knock-up do E."
      dd_spell_id: "Overdrive"
    - key: "E"
      name: "Power Fist"
      description: "Carrega o próximo basic attack para aplicar um knock-up curto. Range de corpo a corpo: o Blitz precisa estar colado no alvo."
      dd_spell_id: "PowerFist"
    - key: "R"
      name: "Static Field"
      description: "Ativo: dano e silence (bloqueio breve de todas as spells) nos inimigos em volta. Passivo: uma carga aplica dano elétrico extra no próximo basic attack."
      dd_spell_id: "StaticField"
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3876", name: "Solstice Sleigh" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3190", name: "Locket of the Iron Solari" }
    - { dd_id: "3050", name: "Zeke's Convergence" }
    - { dd_id: "3109", name: "Knight's Vow" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "contra muito crowd control ou burst AP (Lux, Morgana, Ahri) — magic resist e tenacity (recupera mais rápido do CC)"
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "contra hard CC no seu carry (Morgana Q, Ashe R, Leona engage) — o ativo limpa um stun do ADC"
    - dd_id: "3107"
      name: "Redemption"
      against: "contra comps de poke (Xerath, Caitlyn, Senna) — heal de área em teamfight recupera o HP perdido"
    - dd_id: "3158"
      name: "Ionian Boots of Lucidity"
      against: "quando quer mais hooks por fight — Ability Haste corta segundos do Q: hook errado dói menos"
  base_combo: ["Q", "W", "AA", "E", "R", "AA"]
  win_condition: "Acerte uma Rocket Grab num priority target (ADC inimigo ou backline mage) e finalize com a chain W-AA-E-R antes do time deles fazer peel (proteger o carry do dano que vem)."
  weakness: "Se o Q erra, você fica 16-20 segundos quase sem engage. Lanes com disengage (Janna, Lulu) ou com corpos que bloqueiam o hook (minions, tanks na frente) apagam o kit."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Ability Haste"
      - "Health Scaling"
      - "Health"
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "jinx", "ezreal"]
      archetype: "ADCs de posicionamento estático sem dash"
      reason: "O range de auto-attack obriga eles a parar numa linha previsível atrás dos minions; um hook traçado pelo arco do minion canhão chega limpo porque eles não têm escape instantâneo."
    - examples: ["soraka", "yuumi"]
      archetype: "Enchanters squishies com HP base baixo"
      reason: "Tirar o enchanter da posição apaga a lane: o carry deles fica sem peel e a combo Q-W-E-R num alvo de 500 HP fecha o trade."
    - examples: ["xerath", "vel-koz", "zyra"]
      archetype: "Mage supports estacionários"
      reason: "Eles castam de longe pra fazer poke; um hook em max range no frame de cast pega antes deles flasharem e o time ganha um 4v5 grátis em volta."
  counterpicks:
    - examples: ["thresh", "nautilus", "leona"]
      archetype: "Tanks engage que ganham a corrida do hook"
      reason: "Se eles hookam ou avançam primeiro, sua animação de Q é interrompida e o aliado come a chain de CC — lane hook-vs-hook pune quem telegrafa o cast."
    - examples: ["janna", "lulu", "morgana"]
      archetype: "Disengage e imunidade a CC"
      reason: "Janna Q tornado tira você do range do E; Lulu W slowa ou polymorpha o engage; Morgana Black Shield bloqueia o hook inteiro."
    - examples: ["alistar", "tahm-kench"]
      archetype: "Bruisers com self-peel"
      reason: "Depois de um hook bom eles podem headbuttar ou engolir o próprio ADC pra longe; o pull não fecha a kill, e o cooldown longo do Q vira janela de punish."
---

## Visão geral

Blitzcrank é um support tank-engage cuja gameplay gira inteira em torno de acertar uma habilidade: **Rocket Grab (Q)**. O hook (um agarrão que puxa o inimigo até você) abre cada fight desse kit. Acertando, a bot lane vira 2v1 por dois segundos; errando, você tem 16-20 segundos de cooldown quase sem engage. Ele escala com cooldown reduction (chamado de "Ability Haste") e build tank, porque o trabalho dele é andar pra frente, hookar, knock-uppar e sobreviver tempo suficiente pro ADC limpar.

Plano de jogo numa frase: warde os bushes, olhe os pés do ADC inimigo, jogue o **Q** quando ele pisar numa trajetória previsível, depois encadeie **W** (self-buff de move speed) → auto-attack → **E** (knock-up) → **R** (silence em área). Fora de fight, o trabalho é vision: coloque wards no river e no tri-bush pro seu jungler e mid laner saberem quando o inimigo está missing.

## Build recomendada

**Itens iniciais:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions** + trinket ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) **Stealth Ward**. Compre um ![Control Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2055.png) **Control Ward** em todo back a partir do segundo back.

**Itens core (na ordem):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — starter de support. Dá gold passivo e atualiza automático para ![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) **Solstice Sleigh** assim que passa do limite de gold (lá pelo minuto 12-15).
2. ![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) **Solstice Sleigh** — o upgrade warden do starter. Health, Ability Haste, e uma aura que slowa o inimigo que você imobiliza: encaixa perfeito com o knock-up do **E**.
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — botas de armor contra bot lanes pesadas em auto-attack (a maioria dos ADCs); troque para ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contra muito crowd control.
4. ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — ativo de escudo em área. Depois de hookar e o time entrar, você dispara o Locket enquanto o burst inimigo está no meio do cast: absorve o spike e transforma um fight 50/50 em fight limpo.
5. ![Zeke's Convergence](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3050.png) **Zeke's Convergence** — vincula a passiva ao seu ADC. Depois do **R** detonar, o ADC ganha buff de dano em cada hit por alguns segundos.
6. ![Knight's Vow](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3109.png) **Knight's Vow** — item de peel late game (peel = proteger o carry do dano que vem): redireciona parte do dano que o ADC toma pra você. Combina com sua stack tank e te deixa correr pra backline pra body-blockar (ficar no caminho pra absorver hits direcionados a um aliado).

**Itens situacionais:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — contra hard CC no seu carry (Morgana Q, Ashe R, Leona engage). O ativo limpa um stun do ADC no meio do fight.
- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — contra comps de poke (Xerath, Caitlyn, Senna): o heal de área em teamfight recupera o HP que você sangrou tentando andar pra frente.
- ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — quando quer mais hooks por fight; Ability Haste corta segundos do **Q** pra hook errado doer menos.

**Botas:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** é o padrão contra a maioria das bot lanes. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contra burst AP ou stuns; ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** se você confia nos seus hooks e quer eles voltando mais rápido.

**Skill order:** Maxe **Q** primeiro (o hook é o kit), **E** segundo (o knock-up escala com o rank), **W** por último. Coloque ponto em **R** nos níveis 6, 11 e 16.

**Runas:** Primária **Resolve** com **Aftershock**, **Font of Life**, **Bone Plating**, **Overgrowth**. Aftershock dá um burst de armor e magic resist logo depois de imobilizar alguém — dispara exato no pull do **Q**, então no momento em que você vira alvo, tanka o dano de retorno. Secundária **Inspiration** com **Biscuit Delivery** e **Cosmic Insight**. Alternativa: **Inspiration** primária com **Glacial Augment** se você prefere uma lane de poke-and-slow (menos comum mas viável contra enchanters imóveis).

## Matchups principais

- **Caitlyn / Janna:** Caitlyn coloca armadilhas nos bushes que você passaria pra hookar. Compre um ![Control Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2055.png) **Control Ward** pro bush da lane e cheque antes de entrar; o tornado da Q da Janna cancela a animação do seu **Q**, então espere ela usar na wave antes de jogar o seu.
- **Thresh / Nautilus:** Lane hook-vs-hook. Quem hooka primeiro normalmente perde, porque o segundo hook é resposta grátis. Use os minions como body-block: fique atrás do canhão, force eles a entrar, e puna no cooldown.
- **Lulu / Yuumi:** Escalam com o ADC e não têm engage. Você tem prio na lane: jogue hooks seguros, mas o mais importante é roamar pro mid lá pelo nível 4-6 com o **W** ativo. Um hook cross-map num mid laner empurrando longe demais é a jogada de maior valor que o Blitz tem.
- **Morgana / Lux:** As duas conseguem parar seu hook com root de longa distância. O E da Morgana (Black Shield) come o seu **Q** inteiro. Force ela a usar primeiro na wave fingindo um hook — sidestep, depois entre quando o shield dela está em cooldown.
- **Ezreal / Senna:** Eles fazem poke sem entrar. O plano de lane não é "hookar o ADC a cada 16 segundos" — é "negar vision pro seu jungler ter como gankar". Ponha ![Stealth Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3340.png) **Stealth Wards** na entrada do river e pingue gank quando o Ezreal flashar uma wave.

## Power spikes e condições de vitória

- **Nível 2 (Q + W):** Primeiro power spike de hook. Com o **W** ativo você persegue o pull mais alguns passos antes do slow final entrar — isso costuma virar um hook em kill em vez de um trade no 50% de HP.
- **Nível 6 (R disponível):** Seu all-in vira kill garantida na maioria dos ADCs. A combo é **Q** → **W** → auto-attack → **E** knock-up → **R** silence e dano. O silence impede o support inimigo de **Flash**-disengage você do carry.
- **![Solstice Sleigh](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3876.png) Solstice Sleigh completo (~ minuto 12-15):** O upgrade warden do starter libera a versão teamfight do kit: cada imobilização que você acerta slowa o alvo pro seu ADC.
- **![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) Locket of the Iron Solari completo (~ minuto 22-26):** Agora você consegue engage num 5-stack mid game sem que a backline seja apagada. É o spike que você começa a buscar jogadas com ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** em volta dos objetivos.

## Erros comuns

- **Jogar Q no cooldown sem setup.** Hook sem follow-up é desperdiçado: se você puxa um alvo que o time não consegue alcançar, você acabou de dar 16-20 segundos grátis pro inimigo. Jogue **Q** só quando o ADC está no range pra entrar no all-in (a chain de dano completa até a kill, sem voltar atrás).
- **Telegrafar a animação do hook.** O Blitz levanta o braço com uma animação de cast bem visível antes do **Q** sair. Inimigos decentes fazem sidestep no wind-up. Jogue **Q** de dentro de um bush, da fog of war (as áreas escuras não reveladas do mapa onde o inimigo não te vê) ou enquanto o inimigo está preso na animação de uma habilidade dele pra ele não conseguir reagir.
- **Hookar o alvo errado.** Puxar o tank ou bruiser inimigo é quase sempre ruim — dá um engage grátis pro time inimigo em cima de você. Procure sempre o alvo squishy primeiro (campeão de muito dano e pouca defesa, tipo ADC ou mage) antes de soltar o **Q**.
- **Esquecer o custo de mana da passiva.** Seu escudo (passiva **Mana Barrier**) escala com a mana atual, então voltar com pouca mana é um -30% de defesa pro próximo fight. Volte quando o **Q** está em cooldown e a mana está abaixo de 40%, não na hora que você quiser.
- **Usar o R só por dano.** **Static Field** é mais útil como silence (bloqueio breve dos casts inimigos) do que como dano. Guarde pra quando o support inimigo está no meio do channel de uma habilidade chave — esse interrupt vale mais do que o burst em inimigos com 200 HP.

## Dica avançada

O setup de hook mais forte do jogo é o **bush-fog hook**. Entre no bush da lane atrás da sua wave, onde o inimigo não te vê. Espere a wave empurrar pro ADC inimigo avançar pra fazer last-hit (matar um minion pra ganhar gold) no canhão. Jogue o **Q** pela parede do bush: eles não têm animação pra ler, não têm tempo de fazer sidestep, e a mão atravessa o bush antes deles perceberem que você castou. Combine com o **W** ativo pra fechar o gap antes do flash do support deles voltar. Esse padrão sozinho é responsável pela maioria das kills de lane que o Blitzcrank pega acima do limiar do bronze.
