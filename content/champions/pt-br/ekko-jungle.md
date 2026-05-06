---
title: "Ekko Jungle Build & Guia — Patch 16.9"
slug: "ekko-jungle"
language: "pt-br"
patch: "16.9"
champion: "ekko"
role: "jungle"
last_updated: "2026-04-29"
description: "Guia do Ekko jungle no Patch 16.9: rota de clear, build AP assassin, padrões de gank, power spikes, erros comuns e uma dica final para fechar o pacote."
quick_learn:
  champion_dd_id: "Ekko"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Assassin / AP Burst"
  abilities:
    - key: "P"
      name: "Z-Drive Resonance"
      description: "A cada terceiro acerto (auto ou spell) no mesmo alvo aplica dano mágico bônus e dá um burst curto de move speed se o alvo for um campeão."
      dd_spell_id: "Ekko_Passive"
    - key: "Q"
      name: "Timewinder"
      description: "Skillshot bumerangue: a granada vai, aplica slow nos atingidos, e volta para o Ekko com um segundo tick de dano. Os dois passos batem, posicionamento importa."
      dd_spell_id: "EkkoQ"
    - key: "W"
      name: "Parallel Convergence"
      description: "Passiva: dano mágico bônus em autos contra inimigos com pouco HP. Ativa: cria um círculo atrasado no chão que aplica slow e depois stuna brevemente se Ekko entrar."
      dd_spell_id: "EkkoW"
    - key: "E"
      name: "Phase Dive"
      description: "Dash curto que potencia a próxima auto, teleportando Ekko até o alvo com dano bônus. Principal gap-closer e gatilho do terceiro hit da passiva."
      dd_spell_id: "EkkoE"
    - key: "R"
      name: "Chronobreak"
      description: "Rebobina a posição do Ekko para onde ele estava ~4 segundos atrás, causa dano mágico em área ao chegar e cura com base no dano sofrido nessa janela."
      dd_spell_id: "EkkoR"
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
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3100", name: "Lich Bane" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra burst AD pesado (Zed, Talon, Kha'Zix, Rengar) — a stasis cancela a kill window deles após o R reposicionar"
    - dd_id: "3135"
      name: "Void Staff"
      against: "assim que qualquer alvo prioritário comprar Magic Resist (Maw, Mercury's Treads, Spectre's Cowl)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "contra comps de healing (Soraka, Aatrox, Dr. Mundo, Vladimir) — aplica Grievous Wounds no dano"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "contra carries móveis (Vayne, Ezreal, Tristana) — slow em todo hit, Q + E grudam fácil"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "late vs frontline com MR — magic pen e cura pequena pós-takedown"
  base_combo: ["W", "E", "AA", "Q", "R"]
  win_condition: "Acerte W stun da fog, entre com E e resete fights com R quando estiver baixo. Snowball early-mid ganckando lanes pré-6 e forçando skirmishes em objetivos."
  weakness: "Primeiro clear fraco e alcance curto: um jungler de invade forte pune ele no nível 3. R com cooldown longo — sem ela, Ekko fica sem botão de pânico."
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "kindred", "nidalee"]
      archetype: "Junglers ranged squishy sem CC point-and-click"
      reason: "O setup W + E do Ekko fecha a distância antes deles terminarem uma rotação de kite; o reset do R deixa o all-in seguro mesmo se o time deles rotacionar para ajudar."
    - examples: ["master-yi", "shyvana"]
      archetype: "Skirmishers de scaling com early fraco"
      reason: "Ganks pré-6 no nível 3 com W + E + Q pegam eles farmando camp; uma única kill constrói o gold lead pra assassinar carries até o minuto 14."
    - examples: ["amumu", "zac"]
      archetype: "Tanks de engage sem dash"
      reason: "A mobility do Ekko (E + R rewind) desvia do engage telegrafado deles, e o burst AP bate mais forte em tank com pouca MR. Ele kita eles em quinas e queima os carries deles desde a fog."
  counterpicks:
    - examples: ["lee-sin", "elise", "xin-zhao"]
      archetype: "Junglers de invade early forte"
      reason: "O primeiro clear do Ekko é abaixo da média e o duel no nível 3 é fraco. Eles entram na jungle dele, matam antes de W e E maxados, e snowballam com a bounty."
    - examples: ["nocturne"]
      archetype: "Junglers com pressão global e spell shield"
      reason: "O E do Nocturne é um spell shield que bloqueia o stun do W do Ekko (= a habilidade que monta todo gank). Sem stun o gank falha, e o R do Nocturne supera as ferramentas de counter-gank dele."
    - examples: ["galio", "maokai"]
      archetype: "Tanks que stackam Magic Resist cedo"
      reason: "Junglers que stackam MR cedo amassam o spike de mid-game do Ekko: quando o combo Lich Bane só raspa em vez de matar a frontline, o plano de snowball trava."
---

## Visão geral

Ekko é um assassin AP (= Ability Power, o stat que escala dano mágico) jungler que mata carries squishy num combo rápido W stun → E dash → AA + Q. A passiva **Z-Drive Resonance** premia uma sequência de três hits no mesmo alvo com dano mágico bônus e um burst de move speed: a rotação de dano dele é construída pra encaixar três coisas rápido, não pra spammar habilidades. O **Chronobreak (R)** é a rede de segurança: teleporta ele pra onde estava ~4 segundos atrás e cura conforme o dano sofrido nessa janela, então ele pode mergulhar num fight, correr risco, e desfazer a consequência se sobreviver ao channel.

Plano de jogo: clear limpo dos primeiros camps, gank no nível 3 numa lane com pouca mobility (Lux, Senna, Veigar, mid laners imóveis), forçar Scuttle (= o caranguejo do river — mate ele para vision e um pequeno buff de move speed) do lado em que seu time tem prio (= priority, seu laner está empurrando dentro e pode rotacionar sem perder CS), e snowball (= transformar uma vantagem pequena no early em algo bem maior) em skirmishes (= fights pequenos 1v1 ou 2v2, não um teamfight inteiro) ao redor do segundo drake. Ekko não é um champion scaling (= que fica mais forte com o passar do tempo) — se você chega no minuto 25 sem kills, o ADC inimigo fecha 2 itens e você para de matar qualquer um em um combo.

## Build recomendada

**Itens iniciais:** ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** (o jungle pet AP-friendly — aplica dano on-hit em campeões inimigos durante os ganks) mais **Smite** (a summoner spell que todo jungler leva — ataque de burst rápido em alvo único, usado pra clearar camps mais rápido e roubar objetivos como Drake ou Baron do time inimigo).

**Itens core (na ordem):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — primeiro spike de AP. Dano on-cast bônus e mana sustain fazem a rotação Q + W + E quebrar o alvo antes mesmo da auto da E aterrissar.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration flat (= ignora parte da MR inimiga). Carries squishy têm ~30 MR base, então a pen flat vira dano extra puro.
3. ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** — Spellblade (= a próxima auto depois de uma spell causa dano mágico bônus enorme). O E do Ekko já potencia a próxima auto, então Lich Bane empilha em cima: é o item que transforma o dash do E em one-shot.
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — burst extra (= muito dano em 1-2 segundos). A passiva por threshold de HP (= passiva que ativa abaixo de certo HP) bate com os finalizadores após o reset do R.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de AP no late game e o slot com o teto mais alto da build.

**Itens situacionais:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra AD assassins (Zed, Talon, Kha'Zix, Rengar). A stasis (= Ekko fica invulnerável mas não pode agir por 2.5 segundos) compra tempo pra cooldowns e, junto com o R, te faz sobreviver a qualquer all-in AD.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — assim que um alvo prioritário fechar Magic Resist (Mercury's Treads, Maw of Malmortius, Spectre's Cowl). Magic pen percentual escala com quanta MR o alvo stacka.
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — contra comps de healing (Soraka, Aatrox, Dr. Mundo, Vladimir). Aplica Grievous Wounds (= debuff que corta a cura do alvo pela metade) no dano.
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — contra carries ranged móveis (Vayne, Ezreal, Tristana). Cada hit de spell aplica slow, então Q + E grudam eles no lugar pra kill.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — substituto de Shadowflame no late vs frontlines que stackam MR. Magic pen e uma cura pequena de revive nos takedowns.

**Botas:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** é o padrão. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** é aceitável quando o time precisa de mais uptime de R como ferramenta de re-engage (= sua ult voltando mais rápido te deixa flippar uma segunda teamfight).

**Skill order:** Suba **Q** primeiro (waveclear e poke principal), **E** em segundo (dano do dash), **W** por último. Ponto em **R** nos níveis 6, 11 e 16. Comece com **Q** no nível 1 pro clear mais seguro, depois **E** no 2 e **W** no 3.

**Runas:** Árvore primária **Domination** (a árvore dos assassins — bônus de stats que premia pickoffs em alvos isolados) com **Electrocute** (depois de acertar um campeão com três fontes de dano separadas em 3 segundos, o próximo hit causa burst bônus — a chain W + E + Q proca certinho), **Sudden Impact** (magic pen extra por 4 segundos depois de um dash ou stealth), **Sixth Sense** (revela automaticamente wards inimigas próximas com cooldown longo — pressão de visão pro pathing na jungle), **Ultimate Hunter** (reduz o cooldown do R por takedown único). Secundária **Sorcery** com **Manaflow Band** (devolução de mana em hits de spell, conserta o mana pool pequeno do Ekko) e **Transcendence** (ability haste — suas habilidades voltam mais rápido — que escala o kit todo).

## Matchups principais

- **Lee Sin:** Invade early forte (= um jungler que entra na sua jungle pra te matar antes de você ter itens). Marque ele com vision nos seus buffs (= os camps pequenos que dão bônus de stat temporário, blue e red). Evite lutar antes do nível 4 — o duel early dele é melhor que o seu.
- **Karthus:** Matchup de graça. O R dele dá dano no seu time inteiro pelo mapa, mas ele tem zero mobility — W debaixo dos pés dele, E in, Q + AA e morre numa rotação (= uma sequência completa das suas habilidades). Counter-jungla (= rouba os camps dele) depois de cada gank que ele commitar.
- **Master Yi:** Rival scaling. Mate antes do minuto 20 ou aceite que ele te supera em teamfight tardio. Force fight no spike ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** + ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** e dive a bot lane dele enquanto ele farma camp.
- **Sejuani:** Matchup difícil. O R dela é point-and-click (= não precisa mirar, a habilidade trava no alvo) e te congela durante o dash do E. Espere ela usar em outra pessoa, depois committe. Compre ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** mais cedo que o normal.
- **Rammus:** Evite fights solo. A passiva de espinhos dele reflete parte do dano das suas autos; você causa principalmente dano mágico (bom contra os espinhos do Rammus) mas o W steroid dele (= multiplicador temporário de armor e reflexão) ainda corta sua auto Lich Bane. Farme o lado oposto da jungle e agrupe só com seu time.

## Power spikes e condições de vitória

Um power spike é o momento em que o campeão fica de repente bem mais forte que um minuto antes — geralmente quando uma habilidade nova ou um item entra em jogo.

- **Nível 3:** Primeiro combo **W** + **E** + **Q** desbloqueado. Você finalmente pode ganckar lanes pré-6 (= antes da ult ficar online): solte W na fog (= zona escura fora da visão, atrás de um arbusto ou parede), espere o inimigo pisar pro stun, dash com E, Q na saída. É o pattern de gank pré-6 mais forte do Ekko.
- **Nível 6:** **Chronobreak (R)** online. Agora todo dive (dive = entrar embaixo da torre pra matar um alvo de pouco HP) é recuperável: você toma os tiros da torre, mata o alvo, R de volta pro seguro. Force um fight ou um drake já.
- **![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Echo + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minuto 10-12):** Primeiro spike de dano real. Você raspa squishy só com Q e mata em um combo inimigos abaixo de 60% HP. Procure picks (= matar um inimigo isolado fora de posição) nas side lanes.
- **![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) Lich Bane completo (~ minuto 16-18):** ESSE é O spike. A auto potencializada do E mais Spellblade do Lich Bane tira ~50% HP de um ADC num único dash. Agrupe em volta de drake e Baron — todo inimigo isolado morre num combo.
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap online (~ minuto 24-28):** Até alvos com MR stackada caem no burst completo. Se o ADC inimigo não comprou ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) ou Quicksilver Sash, seu reset de R é kill grátis na backline.

## Erros comuns

- **Ganckar lanes pré-3 sem posicionar W.** Sem stun de W, o gank do Ekko é só um dash E lento — fácil de kitar (kite = recuar atacando, mantendo distância). Sempre plante W na fog 2 segundos antes de andar pra lane: o stun atrasado pega o inimigo quando ele reage ao dash.
- **Apertar R assim que o HP cai.** Chronobreak te leva pra uma posição de 4 segundos atrás. Se você ulta no primeiro auto recebido, volta pro fight do qual queria fugir. Espere — absorva dano durante o channel do R (= o tempo de windup antes de ativar) pra cura final ser maior e o destino ser de fato mais seguro.
- **Spammar Q pra waveclear na jungle.** O custo de mana do Q é alto e o retorno do bumerangue é o tick maior de dano. Ande além do camp pra que o retorno toque o pacote duas vezes; spammar parado desperdiça o segundo hit.
- **Forçar Drake sem prio.** O smite-fight do Ekko (= o momento em que os dois junglers committam Smite num objetivo disputado) é mediano porque o R dele cancela se for interrompido no meio do channel. Se seus laners não têm prio (= lane empurrada, livres pra rotacionar), entregue o drake e farme visão.
- **Ignorar a passiva do terceiro hit em skirmishes.** Z-Drive Resonance dobra o dano do trade quando você sequencia três hits no mesmo alvo. Jogar Q na wave pra poke gasta o stack num minion. Guarde Q pra trades em campeões, não em creeps que você não precisa clearar.

## Dica avançada

Use **Parallel Convergence (W)** como ferramenta de visão preventiva, não só como setup de stun. Castar W coloca o círculo no chão 3.5 segundos antes de ativar, e durante esse windup você vê se alguém atravessa a área — um fog check grátis num chokepoint (= passagem estreita que o inimigo precisa cruzar) ou atrás do Drake pit. Os pros usam esse truque pra scoutar o jungler inimigo atravessando o river, depois ou commitam o gank com stun pronto ou rotacionam sem committar. A habilidade vira ferramenta de pick e ward (= o objeto pequeno que dá visão numa área) ao mesmo tempo.
