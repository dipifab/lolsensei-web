---
title: "Karma Support Build & Guia — Patch 16.9"
slug: "karma-support"
language: "pt-br"
patch: "16.9"
champion: "karma"
role: "support"
last_updated: "2026-04-29"
description: "Guia da Karma support para League of Legends Patch 16.9: build de enchanter, runas, matchups-chave, power spikes, erros comuns e uma dica final para iniciantes."
quick_learn:
  champion_dd_id: "Karma"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Enchanter"
  abilities:
    - key: "P"
      name: "Gathering Fire"
      description: "Acertar um campeão inimigo com habilidade ou basic attack reduz o cooldown de Mantra. Fique ativa nos trades para manter a R sempre pronta."
      dd_spell_id: "Karma_Passive"
    - key: "Q"
      name: "Inner Flame"
      description: "Skillshot linear que explode no primeiro impacto, causa dano e aplica slow numa pequena área. Principal ferramenta de poke na lane."
      dd_spell_id: "KarmaQ"
    - key: "W"
      name: "Focused Resolve"
      description: "Tether (vínculo) num inimigo alvo. Se não quebrar dentro da duração, causa dano duas vezes e prende o alvo. A distância de quebra importa."
      dd_spell_id: "KarmaSpiritBind"
    - key: "E"
      name: "Inspire"
      description: "Escudo direcionado num aliado com buff curto de Move Speed. Use no ADC para disengage ou para fechar uma kill."
      dd_spell_id: "KarmaSolKimShield"
    - key: "R"
      name: "Mantra"
      description: "Empodera o próximo Q, W ou E. RQ adiciona uma detonação AOE com delay, RW cura a Karma e prolonga o root, RE escuda aliados próximos e dá mais Move Speed."
      dd_spell_id: "KarmaMantra"
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
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3107", name: "Redemption" }
  situational_items:
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps com muita cura (Soraka, Yuumi, Vladimir, Dr. Mundo): corta heals quando você acerta o Q."
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "contra burst AOE (Yasuo + Malphite, ult da Orianna): o escudo de equipe bloqueia a wombo combo."
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target (gancho do Blitzcrank, Q da Morgana, stun do Twisted Fate)."
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra assassinos focando você (Zed, Talon, Akali): a stasis de 2,5s deixa o time fazer peel."
    - dd_id: "4005"
      name: "Imperial Mandate"
      against: "quando o time precisa de mais dano do seu poke e ADC mais jungler seguem o slow do Q."
  base_combo: ["W", "RQ", "AA", "E"]
  win_condition: "Bullie a bot lane com poke de Q desde o nível 1, prepare kills com root de W e Q empoderado por Mantra (RQ), depois faça peel no ADC com E e RE em teamfights."
  weakness: "Enchanter squishy sem dash. Supports de hard-engage (Leona, Nautilus, Rell) prendem você antes do tether de W, e um Q errado é HP gasta à toa."
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
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Ability Haste"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["zyra", "brand", "xerath"]
      archetype: "Mage supports imóveis"
      reason: "O alcance de Q da Karma bate com o deles e o escudo de E nega o poke, então ela vence trades longos curando a diferença que eles não conseguem fechar."
    - examples: ["soraka", "sona", "yuumi"]
      archetype: "Enchanters passivos sem CC duro"
      reason: "Eles não conseguem punir um Q errado, então a Karma poka o ADC sem risco e snowballa a lane antes deles atingirem o spike de item."
    - examples: ["draven", "kalista"]
      archetype: "ADCs lane-bullies que precisam de supports pokáveis"
      reason: "Karma E no próprio ADC absorve o burst do all-in e depois retrade mais forte com Q-RQ porque a Aery procca em cada habilidade."
  counterpicks:
    - examples: ["leona", "nautilus", "rell"]
      archetype: "Tanks de hard-engage com CC point-and-click"
      reason: "Os stuns deles caem antes do tether de W travar, então a Karma come o engage sem encaixar root e morre antes do E salvar o ADC."
    - examples: ["pyke", "thresh", "blitzcrank"]
      archetype: "Hook supports de longo alcance"
      reason: "Karma não tem dash para desviar de um skillshot linear limpo; um gancho nela no nível 2-3 fecha a lane porque ela não tem ferramenta de fuga."
    - examples: ["alistar", "rakan"]
      archetype: "Peel-engagers móveis"
      reason: "Eles pulam em cima da Karma mais rápido do que ela consegue castar Q ou E, e quebram o root com os próprios knock-ups antes do W tickar."
---

## Visão geral

Karma é um support híbrido enchanter-poke: um enchanter é um campeão construído em torno de curar e escudar aliados, e "poke" significa raspar HP do inimigo de longe sem se comprometer com um fight inteiro. Ela poka com **Inner Flame (Q)**, prende alvos com **Focused Resolve (W)** e protege seu ADC (o carry à distância ao lado dela na bot lane) com **Inspire (E)**. A ultimate dela, **Mantra (R)**, não é uma habilidade separada e sim um empoderamento que adiciona um efeito extra ao próximo Q, W ou E. Como Mantra está disponível desde o nível 1, Karma é uma das poucas campeãs que "tem a ult" já no primeiro cast da lane — cada basic attack num campeão tira segundos do cooldown graças à passiva **Gathering Fire**.

O game plan é vencer a bot lane com poke de Q on cooldown, caçar um root (um "root" impede o inimigo de se mover por alguns segundos) com W quando o adversário avança para last-hittar minion, e escudar o ADC com E para absorver o all-in (o trade total até a morte). Por volta do minuto 12, com ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** e ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** prontos, Karma vira uma enchanter de teamfight que escuda um carry aliado da frontline (frontline = o tank ou fighter que abre o fight) e zoneia a back line (back line = os carries que dão dano de trás) com RQ.

## Build recomendada

**Itens iniciais:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** (item da quest support) mais 2 Health Potions e uma Stealth Ward. Pule as poções de mana: Manaflow Band e Biscuit Delivery cobrem o problema de mana no early.

**Itens principais (em ordem):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** — completa em ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** entre os minutos 10 e 12, é a recompensa da quest support. Dá gold income e cargas de ward.
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — botas que dão Ability Haste (atributo que reduz o cooldown das habilidades), para ter Mantra e Q de volta mais rápido.
3. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — quando você escuda um aliado com E, ele ganha attack speed (ataca mais rápido) e dano mágico on-hit (dano extra em cada basic attack). Brilha com ADCs que batem rápido (Kai'Sa, Jinx, Twitch).
4. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — heals e escudos repetidos disparam uma cura cumulativa em aliados com pouca HP. Combina com E spam e RE em teamfights.
5. ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — cura em área com 5 segundos de delay, usada em fights de objetivo (Drake, Baron) para topar o time inteiro.

**Itens situacionais:**

- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra comps com muita cura (Soraka mid, Yuumi, Vladimir top). Corta a cura inimiga sempre que você dá dano com Q.
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — contra burst AOE (Yasuo + Malphite, R da Orianna). O ativo dá ao time inteiro um escudo amplo e bloqueia a wombo combo (uma "wombo combo" é um engage com CCs encadeados que limpa seu time em 1-2 segundos).
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra casters de CC mágico single-target que te one-shotam (gancho do Blitzcrank, binding da Morgana, gold card do Twisted Fate).
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra assassinos focando especificamente em você (Zed, Talon, Akali). Os 2,5 segundos de stasis ("você fica não-alvejável mas não pode se mover nem castar") dão tempo do time fazer peel.
- ![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4005.png) **Imperial Mandate** — quando o time precisa de mais dano e seu jungler/ADC seguem o slow do seu Q de forma confiável.

**Botas:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** são o default por causa do Ability Haste (você quer Mantra de volta o mais rápido possível). Mobility Boots são aceitáveis se você roma muito para a mid lane.

**Skill order:** Maxe **Q** primeiro (poke principal e dano AOE), **E** em segundo (escudo maior + Move Speed), **W** por último. Coloque um ponto em **R** nos níveis 6, 11, 16 — mas lembre que Mantra já está utilizável desde o nível 1.

**Runas:** Primária **Sorcery** com **Summon Aery**, **Manaflow Band**, **Transcendence**, **Scorch**. A Aery procca em todo Q para dano extra de poke e em todo E para um pequeno bônus de escudo. Secundária **Inspiration** com **Biscuit Delivery** (sustain de mana grátis na lane) e **Cosmic Insight** (mais Ability Haste em summoners e itens).

## Matchups principais

- **Lulu / Janna:** Matchup parelho. As duas são enchanters sem hard engage; a lane se decide no cruzamento dos ADCs. Pokeie elas com Q quando avançarem para wardar, mas não comprometa Mantra na lane — guarde para rotações em objetivos.
- **Soraka:** Guerra de poke favorável. Seu slow de Q mais os procs de Aery vencem o custo de HP da W dela. Empurre-a para fora da wave entre os níveis 3-5 lançando Q on cooldown.
- **Leona / Nautilus:** Lane dura. Elas engagem (abrem o fight) com CC point-and-click (crowd control que trava na hora sem precisar mirar, tipo um stun no clique direito) antes de você conseguir tetherar com **W**. Segure E para o momento que elas engagam (o escudo absorve o burst — dano alto em 1-2 segundos — e dá Move Speed para fazer peel out, ou seja, escapar com o ADC), e nunca pushe a wave para além do rio sem visão.
- **Pyke / Thresh:** O alcance do gancho bate com o alcance do seu Q. Fique atrás do ADC, esconda-se atrás dos minions para quebrar a linha de visão dos ganchos, e Q o support — não o ADC — quando o gancho dele estiver em cooldown.
- **Blitzcrank:** O pull é a lane inteira. Avance só quando ver o Q dele em cooldown; se for puxada, E imediatamente em si mesma (o escudo + speed boost te dá uma chance de voltar para a torre).

## Power spikes e condições de vitória

- **Nível 1:** Mantra já está pronta. RQ no nível 1 é uma ferramenta forte de invade (entrar na jungle inimiga para preparar uma kill no early) porque a detonação AOE (dano em área que atinge tudo dentro de um círculo) causa dano real em inimigos amontoados (vários alvos colados um no outro).
- **Nível 6:** O segundo ponto em R libera cooldowns mais rápidos de Mantra. Com Manaflow Band stackada, você consegue spammar combos Q-RQ-W no all-in da bot lane.
- **Bloodsong + Ionian Boots of Lucidity (~ minuto 10-12):** Janela de roam aberta (roam = sair da própria lane para ajudar outra). Pushe a wave forte com um Q, depois caminhe até o rio da mid lane para montar um 3v2 com seu jungler e mid laner.
- **Ardent Censer + Moonstone Renewer (~ minuto 24-28):** Pico de teamfight. Cada escudo de E ativa o attack speed de Ardent e a cura cumulativa de Moonstone. Seu ADC outscaleia qualquer matchup com esses dois itens atrás dele.

## Erros comuns

- **Gastar Mantra na lane com poke.** RQ parece forte, mas queimar Mantra no minuto 4 significa nenhuma detonação AOE quando o jungler inimigo gankar (ataque-surpresa do rio para a sua lane) no minuto 6. Guarde RQ para setup depois de um root de W ou para inimigos amontoados perto do drake.
- **Escudar a si mesma com E.** E em si mesma vale como panic button (cast de emergência quando você está prestes a morrer), mas o valor do escudo + Move Speed é desperdiçado se o seu ADC morre atrás de você. Default: E no ADC; você só usa E em si quando o ADC já está seguro.
- **Q poke quando um assassino inimigo está missing no mapa.** Karma não tem dash. Se o jungler inimigo não está rastreado, não avance para o alcance do Q — você vai ser pega sem fuga e troca a sua vida à toa.
- **Esquecer o alcance de quebra do W.** Seu **W** só dá root se o tether ficar unbroken por toda a duração. Se você lança em max range e o inimigo dá um passo para trás, o tether quebra e você não recebe nada. Lance W quando o inimigo estiver committed (depois que ele já usou dash ou escape).
- **Buildar damage no lugar de utility.** Karma consegue scalar em dano AP, mas o build enchanter (Ardent Censer, Moonstone Renewer, Redemption) entrega muito mais valor para o time do que um Rabadon's. Default em utility, exceto se você estiver massivamente na frente.

## Dica avançada

Use **RE** (Mantra empoderando Inspire) num aliado avançando — não em si mesma. O E empoderado escuda o alvo mais todos os aliados próximos e dá um Move Speed boost mais largo. Lance no ADC no momento exato em que o time compromete o engage: o Move Speed AOE permite que o time inteiro feche distância na back line inimiga junto, transformando um teamfight normal em um colapso forçado. O truque é cronometrar o RE antes do engage, não depois, porque o buff de Move Speed é mais útil na entrada.
