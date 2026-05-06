---
title: "Bel'Veth Jungle Build & Guia — Patch 16.9"
slug: "belveth-jungle"
language: "pt-br"
patch: "16.9"
champion: "belveth"
role: "jungle"
last_updated: "2026-04-29"
description: "Guia da Bel'Veth jungle para League of Legends Patch 16.9: starter kit, build core on-hit, matchups principais, power spikes, erros comuns e uma dica final."
quick_learn:
  champion_dd_id: "Belveth"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Fighter / Skirmisher on-hit"
  abilities:
    - key: "P"
      name: "Death in Lavender"
      description: "Cargas permanentes de attack speed vindas de large minions, monstros da jungle e takedowns em champions. Conjurar qualquer habilidade dá também um buff curto de attack speed."
      dd_spell_id: "Belveth_Passive"
    - key: "Q"
      name: "Void Surge"
      description: "Dash curto que causa dano em quem atravessa. Cada uma das quatro direções tem o próprio cooldown que reduz com attack speed."
      dd_spell_id: "BelvethQ"
    - key: "W"
      name: "Above and Below"
      description: "Cauda no chão que aplica knock-up e slow. Acertar um champion reseta na hora o Void Surge naquela direção."
      dd_spell_id: "BelvethW"
    - key: "E"
      name: "Royal Maelstrom"
      description: "Channel de ataques no inimigo de menor HP. Concede damage reduction e lifesteal durante o canal; recaste para encerrar antes."
      dd_spell_id: "BelvethE"
    - key: "R"
      name: "Endless Banquet"
      description: "Passiva: cada segundo auto no mesmo alvo aplica true damage que stacka pra sempre. Ativa: consome um Void Coral (de takedown em champion ou epic monster) para entrar em true form com HP, range e attack speed extra."
      dd_spell_id: "BelvethR"
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3302", name: "Terminus" }
    - { dd_id: "3072", name: "Bloodthirster" }
    - { dd_id: "3124", name: "Guinsoo's Rageblade" }
  situational_items:
    - dd_id: "3091"
      name: "Wit's End"
      against: "contra comps AP pesadas (Karthus, Ahri, Lissandra) — magic resist e on-hit magic damage"
    - dd_id: "6610"
      name: "Sundered Sky"
      against: "quando está atrás ou contra poke comps — primeiro auto crita e cura, recupera tempo"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contra comps de muita cura (Soraka, Aatrox, Dr. Mundo, Vladimir) — Grievous Wounds on-hit"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "quando vai splitpushar uma side lane sozinha contra disengage comps — dano extra a torres e minions"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra burst AP single-target (Veigar, LeBlanc, Syndra mid) — magic shield abaixo de 30% HP"
  base_combo: ["Q", "AA", "W", "AA", "E", "R"]
  win_condition: "Cole num único alvo com os Q dashes e o true damage acumulado da R até derrubar. Force fights no nível 6 com R online, melhor depois de um Rift Herald ou Baron pra true form mais longa."
  weakness: "Hard CC (stuns, knock-ups, suppress) cancela os Q dashes e a deixa parada. Sem R ativa ou sem alvo onde se prender, tem ameaça ranged fraca e desaba contra muito peel."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["amumu", "zac", "skarner"]
      archetype: "Tank junglers sem dash"
      reason: "O pattern on-hit da Bel'Veth com Terminus rasga armor e magic resist; ela cola com os Q dashes em volta da hitbox e eles não têm como dar disengage."
    - examples: ["karthus", "kindred", "nidalee"]
      archetype: "Junglers ranged squishies"
      reason: "Os quatro Q dash fecham qualquer tentativa de kite (kite = recuar continuando a atacar): ela chega no melee antes deles completarem uma rotation à distância."
    - examples: ["master-yi", "shyvana"]
      archetype: "Skirmishers scaling sem CC inicial"
      reason: "Vence as skirmishes iniciais na jungle (skirmish = briga 1v1 ou 2v2 fora do teamfight) antes do power spike deles, e converte a vantagem em objetivos."
  counterpicks:
    - examples: ["sejuani", "vi"]
      archetype: "Junglers com hard CC point-and-click"
      reason: "O Q dash da Bel'Veth não esquiva habilidades targeted. Comeu uma R de Sejuani ou de Vi, ela trava no lugar e o pattern on-hit congela."
    - examples: ["rammus"]
      archetype: "Tanks anti-attack-speed"
      reason: "A passiva de espinhos do Rammus e o W steroid punem os autos contínuos dela: ela se machuca tentando dar DPS nele enquanto ele controla os objetivos."
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "Junglers fortes early com invade"
      reason: "O primeiro clear da Bel'Veth é ok, mas não bullyiza ninguém; eles invadem ela no nível 3 antes dela ter Q maxada, matam uma vez e snowballam (snowball = pequena vantagem inicial que cresce com o tempo)."
---

## Visão geral

Bel'Veth é uma fighter on-hit (= o dano principal vem dos auto-attacks e dos efeitos de itens que disparam a cada golpe, não das habilidades) que transforma os autos em um fluxo contínuo de dashes. O **Void Surge (Q)** dela tem quatro cooldowns direcionais e todos descem com attack speed: quanto mais attack speed acumula (= stacka), mais dasha. O **Endless Banquet (R)** tem duas faces: uma passiva que adiciona true damage a cada dois basic attacks no mesmo alvo (true damage = dano que ignora armor e magic resist), e uma forma ativa que consome um Void Coral — um pedaço que fica no chão depois de um takedown (kill ou assistência) em um champion ou em um epic monster como Rift Herald ou Baron — para ganhar HP, attack range e attack speed extras por um bom tempo.

O game plan dela é snowballar pela jungle (snowball = transformar uma pequena vantagem inicial em uma muito maior). Limpe camps, faça gank em uma lane (gank = emboscada com a ajuda do jungler), force um fight no nível 6, coma o Void Coral e encadeie o próximo fight com a true form ativa. Não é um champion scaling (scaling = ficar mais forte conforme o jogo se alonga): se o early game empaca, ela vira uma Master Yi pior.

## Build recomendada

**Itens iniciais:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Hailblade é o jungle starter: conforme você mata os monstros da jungle, ele evolui para um upgrade que potencializa o **Smite** (o summoner spell que todo jungler pega — um golpe único forte sobre um alvo, usado tanto para limpar camps mais rápido quanto para roubar objetivos do time inimigo).

**Itens core (na ordem):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — a cada três basic attacks aplica dano físico bônus on-hit; perfeito pra uma champion que ataca mais rápido do que qualquer outra no jogo.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed flat que se compõe com a redução de cooldown da Q.
3. ![Terminus](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3302.png) **Terminus** — dano bônus on-hit que alterna entre armor pen (ignora parte da armor inimiga) e magic pen (ignora parte da magic resist); também dá defesas que stackam enquanto ela está em melee range (= perto o suficiente pra acertar uma machadada), o que para Bel'Veth é o tempo todo.
4. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — lifesteal (te cura por uma porcentagem do dano que você causa) e overheal shield (a cura excedente vira um shield temporário em cima do HP). A sobrevida que você precisa pra channelar **Royal Maelstrom (E)** sem morrer.
5. ![Guinsoo's Rageblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3124.png) **Guinsoo's Rageblade** — converte cada dois auto-attacks em dois on-hits num único swing, dobrando o valor de Kraken Slayer e Terminus.

**Itens situacionais:**

- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — contra composições AP pesadas (Karthus, Ahri, Lissandra; AP = champions cujo dano vem principalmente das habilidades, não dos auto-attacks). Dá magic resist e on-hit magic damage, substitui Bloodthirster.
- ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — quando está atrás ou contra poke comps (poke = inimigos que cortam HP à distância antes do fight começar). O primeiro auto em cada alvo é um crítico (crit = um golpe que faz mais ou menos o dobro de dano) e te cura, devolve tempo nas skirmishes (skirmish = briga pequena 1v1 ou 2v2 na jungle, não um teamfight 5v5 inteiro).
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contra comps que empilham cura (Soraka, Aatrox, Dr. Mundo, Vladimir). Aplica Grievous Wounds em cada auto (Grievous Wounds = um debuff que corta a cura do alvo pela metade).
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — quando você tem vantagem e o time inimigo tem waveclear fraco (não tem jeito fácil de matar wave de minions). Empurra side lanes (as lanes top e bot, longe do centro) mais rápido do que qualquer outra coisa e dá dano extra a torres, perfeito pra splitpush (splitpush = pressionar uma side lane sozinha enquanto seu time joga do outro lado do mapa).
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contra burst AP single-target (burst = muito dano concentrado em 1-2 segundos; ex. Veigar, LeBlanc, Syndra). O shield ativa automaticamente abaixo de 30% HP e absorve uma boa fatia do próximo magic damage que você levar.

**Botas:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** é o padrão. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** só contra double-AD comps (= o time inimigo tem dois carries fortes de dano físico, ex. Caitlyn + Master Yi).

**Skill order:** Maxe **Q** primeiro, depois **E**, depois **W**. Cada rank de **Q** abaixa o cooldown base — é o seu dano e a sua mobilidade num slot só. **R** nos níveis 6, 11, 16.

**Runas:** Runas são bônus passivos que você escolhe antes da partida; elas modelam suas stats de early game e o seu estilo de dano. Primária **Precision** (a árvore focada em auto-attacks) com **Press the Attack** (depois de três basic attacks no mesmo alvo, o próximo auto ou habilidade aplica dano bônus e o alvo passa a tomar mais dano de todo mundo por alguns segundos), **Triumph** (te cura um pouco quando faz takedown), **Legend: Alacrity** (attack speed extra por takedown), **Coup de Grace** (mais dano em alvos com HP baixo). Secundária **Resolve** com **Second Wind** (regenera HP depois de tomar dano) + **Revitalize** (curas em você são mais fortes) para skirmishes longas, ou **Inspiration** com **Magical Footwear** (botas grátis no minuto 12) + **Cosmic Insight** (cooldowns reduzidos nos summoner spells) se a partida está calma e você quer otimizar ouro e timers.

## Matchups principais

- **Lee Sin:** Jungler forte early com invade (= um jungler que entra na sua jungle pra te matar antes de você ter itens). Trackeie ele com vision nos seus buffs e evite brigar antes do nível 4 — esse duelo ele ganha sempre.
- **Master Yi:** Rival scaling. Mate ele antes do minuto 20 ou aceite que ele vai te dominar no teamfight tardio; force objective trades early (= push de Drake ou Herald enquanto ele está ocupado do outro lado do mapa) para que ele nunca chegue a quatro itens.
- **Karthus:** Matchup de graça. A ult dele (R, também chamada ultimate — a habilidade mais forte e de cooldown mais longo) faz dano em todo o seu time pelo mapa, mas ele tem zero mobilidade — Q em cima dele e ele morre numa rotation (= uma sequência completa das suas habilidades). Faça counter-jungle (= roube os camps dele) depois de cada gank que ele finaliza.
- **Sejuani:** Matchup duro. A R dela é point-and-click (= trava no alvo sem precisar mirar) e te prende no lugar. Nunca dê engage (engage = começar o fight) sem **Flash** disponível, e nunca sem o time em posição de te peelar (peel = um aliado que para a ameaça antes dela te alcançar).
- **Rammus:** Hard counter (= construído especificamente pra quebrar seu matchup). A passiva de espinhos do Rammus reflete parte do dano dos seus auto-attacks; o W dele é um steroid defensivo (steroid = uma habilidade que multiplica temporariamente uma stat — aqui armor e quantidade de dano refletido) que dobra a reflexão. Evite skirmishes solo, pingue o time e farme o lado oposto da jungle até fechar Terminus.

## Power spikes e condições de vitória

Um power spike é um momento em que o champion fica de repente muito mais forte do que estava um minuto antes — geralmente quando uma habilidade nova ou um item novo entra em jogo.

- **Nível 3:** Primeiro full clear feito, **Q-W-E** todas desbloqueadas. Você consegue responder à maioria dos ganks com o knock-up da W (= a habilidade joga os inimigos por um instante no ar, com um stun curto) e uma Q de saída, mas ainda não pode forçar fights — foque num clear limpo e num Scuttle early (Scuttle = o caranguejo neutro do river: você mata para vision e um pequeno buff de movement no rio).
- **Nível 6:** **Endless Banquet (R)** entra online. Depois do próximo takedown em champion ou epic monster (Rift Herald, Drake), você come o Void Coral e ganha uma true form longa (= uma transformação buffada que te transforma em mini-boss temporário). Force um fight ou um dragão imediatamente.
- **![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer + ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) Berserker's Greaves (~ minuto 10-12):** Primeiro damage spike de verdade. Agora dá pra duelar a maioria dos junglers na jungle deles e fazer dive num laner com HP baixo (dive = entrar embaixo da torre inimiga para matar mesmo assim, comendo os tiros da torre no caminho).
- **![Terminus](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3302.png) Terminus completo (~ minuto 16-18):** Com três itens você deixa de se preocupar com armor ou magic resist em alvos squishy (squishy = champions com poucas defesas, tipo ADCs e a maioria dos mages). Agrupe com o time pro segundo dragão e o timer de Baron.
- **Void epic monster (Rift Herald ou Baron):** A forma ativa da R dura muito mais com Void Coral vindo de epic monster (epic monster = um objetivo neutro grande, muito mais forte que um camp normal). Tente pegar Herald com o time perto do minuto 10-14 pra empurrar duas waves com a true form ainda ativa.

## Erros comuns

- **Spammar Q sempre na mesma direção.** Cada uma das quatro direções tem o próprio cooldown. Ficar parada e apertar Q pra frente quatro vezes desperdiça três direções. Frente, lado, trás — você causa mais dano e acumula mais attack speed ao mesmo tempo.
- **Segurar E até a duração inteira sempre.** **Royal Maelstrom (E)** é uma habilidade em channel (= Bel'Veth fica parada e continua atacando, vulnerável a interrupções) que pode ser fechada antes apertando de novo. Use pra absorver uma rotation única de dano (ex. a W de Veigar em cage) e feche o channel na hora pra voltar a dar autos. Segurar a duração inteira significa zero auto-attacks por dois segundos.
- **Apertar R sem Void Coral por perto.** A forma ativa dura mais ou menos 30-60 segundos dependendo da source. Sem coral, é desperdício; o true damage passivo a cada segundo auto é o que você quer nos fights regulares.
- **Tentar 1v1 contra o jungler inimigo no nível 2.** O clear dela é razoável mas o duelo early é mediano. Se um Lee Sin ou Xin Zhao te invade no nível 2-3, deixe o camp e pingue o time — ganhar o duelo não é realista e morrer entrega o snowball pra eles.
- **Ignorar o tempo do Void Coral.** Quando um coral droppa, você tem uma janela curta pra consumir. Mata um inimigo no minuto 6, ignora o coral, e desperdiça o único motivo pelo qual matou. Sempre passe por cima do coral antes do recall (recall = a habilidade canalizada que te teleporta para a base).

## Dica avançada

Use **Above and Below (W)** como reset da Q. A descrição diz que acertar um champion com **W** reseta o cooldown do **Void Surge (Q)** naquela direção — então o pattern ótimo num 1v1 é **Q pra frente → AA → W no alvo → Q pra trás em segurança** com uma Q pra frente nova e pronta no instante em que você se vira. Os pros usam esse loop pra encadear três dashes em dois segundos, mais do que qualquer outro jungler tem disponível no jogo.
