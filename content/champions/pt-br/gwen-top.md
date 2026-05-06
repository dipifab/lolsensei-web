---
title: "Gwen Top Build & Guia — Patch 16.9"
slug: "gwen-top"
language: "pt-br"
patch: "16.9"
champion: "gwen"
role: "top"
last_updated: "2026-05-02"
description: "Guia da Gwen top no Patch 16.9: starter, build core de AP bruiser, matchups principais, power spikes, erros comuns e uma dica avançada para dominar a rota."
quick_learn:
  champion_dd_id: "Gwen"
  difficulty: 2
  damage_type: "magic"
  champion_class: "AP Bruiser / Skirmisher"
  abilities:
    - key: "P"
      name: "A Thousand Cuts"
      description: "As auto-attacks causam dano mágico extra baseado no HP máximo do alvo. Gwen recupera HP de parte do dano causado em campeões."
      dd_spell_id: "Gwen_Passive"
    - key: "Q"
      name: "Snip Snip!"
      description: "Cone de tesourada com até 6 cortes. O cone central causa true damage e reaplica a passiva a cada corte — habilidade anti-tank."
      dd_spell_id: "GwenQ"
    - key: "W"
      name: "Hallowed Mist"
      description: "Cria uma zona de névoa de 4 segundos. Inimigos fora dela não podem te alvejar — só quem entra na névoa pode. Reset defensivo."
      dd_spell_id: "GwenW"
    - key: "E"
      name: "Skip 'n Slash"
      description: "Dash curto que dá attack speed, alcance de auto e on-hit AP por alguns segundos. Cooldown reembolsado em parte se acerta um campeão."
      dd_spell_id: "GwenE"
    - key: "R"
      name: "Needlework"
      description: "Lança uma rajada de agulhas que reduz velocidade e aplica a passiva. Até 2 relançamentos, cada rajada faz mais dano que a anterior."
      dd_spell_id: "GwenR"
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
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra divers e assassinos (Camille, Fiora, Rengar) — a stasis de 2.5s cobre o cooldown do W e quebra o burst window deles"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra magic CC single-target (pool da Vladimir, R da Lissandra, suppression do Malzahar) — escudo bloqueia uma habilidade"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "contra matchups de poke ranged (Vayne top, Teemo) — mais ability haste e movement speed para fechar a distância"
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "contra times com 4+ tank/bruiser — substitui Riftmaker pelo burn percentual de HP máximo desde o minuto 1"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "Sobreviva à early lane, complete Riftmaker por volta do minuto 18, depois splitpush na side lane forçando 2 inimigos a te parar. Em teamfight, derreta a frontline com o true damage on-hit do Q."
  weakness: "Early fraco (pouco burst, sem waveclear ranged). Hard counter por tops ranged, outscalers de true damage como Fiora e cadeias de CC point-and-click que travam a ativação do W."
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
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision como primária: Conqueror stacka durante os trades longos de Q + auto, dando dano adaptativo e healing. Triumph premia multikills, Legend: Alacrity potencializa a janela on-hit do E, Last Stand adiciona dano com HP baixo."
    secondary_rationale: "Resolve como secundária: Second Wind regenera HP após o harass ranged (chave contra tops à distância), Overgrowth escala HP bruto no late game onde os fights da Gwen dentro da W mist brilham."
    secondary_alternative: "Contra matchups heavy AP sem poke, troque Resolve por Sorcery com Manaflow Band (sustain de mana para spammar Q) e Transcendence (mais ability haste para mais reembolsos do E)."
matchup_draft:
  pick_into:
    - examples: ["sett", "garen", "darius", "tryndamere"]
      archetype: "Bruisers melee lentos sem poke ranged"
      reason: "Q aplica true damage percentual do HP máximo e ignora a armor. Um 1v1 longo dentro da W mist derrete fighters melee tanky que não conseguem kitar nem fazer disengage."
    - examples: ["shen", "ornn", "cho-gath"]
      archetype: "Tanks que escalam em resistências"
      reason: "O true damage do Q e o on-hit AP do E ignoram tanto armor quanto magic resist. Os tanks acumulam defesas que ela contorna por completo."
    - examples: ["irelia", "jax"]
      archetype: "Fighters dependentes de itens"
      reason: "Os power spikes deles chegam no item 2-3 por volta do minuto 25. Gwen completa Riftmaker antes e snowballa a side lane antes deles atingirem o core."
  counterpicks:
    - examples: ["fiora", "riven"]
      archetype: "Outscalers de true damage ou early forte"
      reason: "Os Vitals da Fiora também causam true damage e os dashes do Q dela ignoram o range da W mist. Riven outdamaga a Gwen nos níveis 1-3 antes da passiva entrar em stack."
    - examples: ["teemo", "vayne", "quinn"]
      archetype: "Tops ranged que kitam do alcance da auto"
      reason: "Gwen precisa de range melee para aplicar o on-hit AP e o true damage do Q. Os kiters ranged interrompem o engage e impedem qualquer trade limpo."
    - examples: ["malphite", "pantheon"]
      archetype: "Engage point-and-click com stun"
      reason: "As cadeias de CC deles travam Gwen antes que ela ative o W. Stunada no meio do dash, ela come a combo inimiga inteira antes da mist cair."
---

## Visão geral

Gwen é uma AP bruiser — uma campeã melee que escala com Ability Power (a stat AP) em vez de Attack Damage e que aguenta alguns golpes no corpo a corpo em vez de bursar do range. Ela também é uma "skirmisher": ganha duelos prolongados, não mata o alvo em dois segundos como um assassino faria. O kit dela permite derreter tanks com **true damage** (dano que ignora tanto armor quanto magic resist), recuperar HP em pleno fight pela passiva e se reposicionar com um dash de cooldown reembolsado em parte. Ela vive em side lanes e duelos 1v1.

O game plan é: sobreviva aos primeiros 10 minutos sem entregar kills, complete o primeiro item importante por volta do minuto 12-14 e comece a splitpushar — empurrar uma side lane sozinha para forçar o time inimigo a mandar 2 jogadores te parar. Por volta do minuto 25 com 3 itens você pode entrar em teamfights e encadear auto-attacks (basic attacks, "AA") na frontline inimiga (os tanks/bruisers na frente do time deles) até derretê-la.

## Build recomendada

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** em matchups contra tops ranged ou de muito poke (chip damage contínuo à distância). ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion** em matchups melee mais tranquilos, quando você quer começar a escalar AP cedo.

**Core items (em ordem):**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — seu spike grande. Após 2 segundos em combat, parte do seu dano se converte em true damage (a passiva "Void Corruption") e você ganha "omnivamp" (recupera HP de uma porção de qualquer dano que você cause — habilidades e auto-attacks juntas). Combina com o playstyle de fights longos da Gwen melhor do que qualquer outro item.
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — magic penetration plana que faz seu dano pegar mais forte contra squishies (campeões com pouca defesa, geralmente as carries inimigas).
3. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — attack speed mais AP mais uma passiva que adiciona dano mágico bônus a cada auto-attack. Combinado com **E** (a janela on-hit do Skip 'n Slash, em que cada auto-attack também aplica dano mágico baseado em AP) você vira uma torre de DPS sustentado em fights longos.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplica seu AP total. O item de scaling de late game que te transforma de "DPS tanky" em carry de verdade.

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra divers (campeões que pulam na backline para matar suas carries) e assassinos (Camille, Fiora, Rengar). O ativo te dá 2.5 segundos de stasis (você fica intocável mas também não pode agir), suficiente para quebrar o burst window deles — aqueles 1-2 segundos em que tentam te deletar.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra magic CC ("crowd control": stuns, roots, charms — qualquer coisa que prenda seu campeão no lugar) single-target. Pool da Vladimir seguido do ult, **R** da Lissandra, suppression do Malzahar. O escudo bloqueia uma habilidade inimiga inteira.
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — contra matchups de poke ranged (Vayne, Teemo). Mais ability haste (cooldowns mais rápidos) e movement speed te ajudam a alcançá-los de fato.
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — contra 4+ tanks/bruisers no time inimigo. Substitui Riftmaker como primeiro item se você precisar de burn percentual do HP máximo desde o minuto 1 de cada fight.

**Boots:** Sorcerer's Shoes é o default. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** se o time inimigo tiver 3+ ameaças AD (Attack Damage) incluindo o jungler. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** contra composições com muito CC (3+ stuns ou knockups).

**Skill order:** Maxe **Q** primeiro (true damage e scaling de AP), maxe **E** em segundo (cooldown e dano), deixe **W** por último. **R** nos níveis 6, 11, 16. Prioridade nível 1: **Q** para os last-hits (matar minions); nível 2 pegue **E** para o dash; nível 3 pegue **W** para segurança.

**Runes:** Primária **Precision** com **Conqueror** (um keystone que stacka durante fights longos para dar dano adaptativo e healing), **Triumph**, **Legend: Alacrity**, **Last Stand**. Secundária **Resolve** com **Second Wind** e **Overgrowth**. Stat shards: Adaptive Force, Adaptive Force, Health Scaling.

## Matchups principais

- **Fiora:** Matchup difícil. O **Q** dela também causa true damage nos "Vitals" — os quatro pontos brilhantes ao redor do seu campeão que, atingidos pelo **Q** dela, disparam true damage. O **R** dela remove qualquer cleanse (um buff que quebra crowd control em você). Pegue ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, guarde **W** para o momento em que o **R** dela ativa, e não trade auto-attacks no nível 1-2 (um "trade" = uma troca curta de golpes em que vocês dois entram, se acertam e voltam); ela outscala a maioria dos bruisers melee no 1v1 puro.
- **Camille:** Igual ou ruim. O hookshot dela (**E**, um gancho de longo alcance que a balança até você) ignora sua **W** mist — ela consegue dar engage de fora do range de proteção da névoa ("engage" = o momento em que um campeão se compromete em iniciar um fight). Guarde **W** para o momento depois que ela aterrissa o hookshot, e só saia quando o **W** dela (cone de true damage na auto empoderada) estiver em cooldown.
- **Sett:** Favorável. Ele também é bruiser mas não tem resposta para o true damage percentual de HP do seu **Q** em trades longos. Pule o all-in inicial (o fight nos níveis 1-3 em que alguém se compromete totalmente com a kill), escale até ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** e depois 1v1 nele na side lane.
- **Darius:** Igual. Evite o range do **E** pull dele; ande para frente apenas dentro da sua **W** mist. Use **E** para disengage (= sair do fight para escapar) quando os stacks de passive bleed dele atingirem 4 — a passiva dele aplica um sangramento damage-over-time nas auto-attacks, e o quinto stack é o empoderado que ativa o dano bônus.
- **Teemo:** Ruim. As auto-attacks ranged dele te detonam fora do **W**, e o **Q** dele cega suas auto-attacks (a fonte principal do seu dano). Pegue ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**, peça ao seu jungler um gank cedo (uma visita surpresa do jungler para ajudar você a fechar uma kill), e jogue para escalar — você não ganha a lane.

## Power spikes e condições de vitória

- **Nível 6:** Primeira **R** desbloqueada. A rajada de agulhas aplica o dano mágico percentual de HP da sua passiva em cada campeão atingido, e o slow encadeia suas auto-attacks (você continua batendo enquanto eles estão lentos). Force um fight com ajuda do jungler por volta do minuto 8-9.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (~ minuto 18-20):** O spike de omnivamp + true damage. Agora você consegue 1v1 a maioria dos top laners e splitpushar uma side lane até eles mandarem dois jogadores te parar.
- **![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth completo (~ minuto 26-28):** Spike de DPS. Com **E** ativo suas auto-attacks disparam muito mais rápido e aplicam on-hit AP — o momento de entrar em teamfights em vez de só splitpushar.
- **3 itens + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ minuto 32+):** Fase carry. Suas auto-attacks arrancam 25%+ de HP por golpe na frontline inimiga. Qualquer teamfight em que seu time te proteja ("peelar" inimigos para longe de você) termina em vitória.

## Erros comuns

- **Ficar dentro do W tempo demais.** Hallowed Mist é uma janela de 4 segundos, não um escudo permanente. Ative no momento exato em que o inimigo se compromete com um CC duro (um stun ou root); ativar **W** preventivamente queima o cooldown e te deixa exposta pelos próximos 18-22 segundos.
- **Q na wave para pokar.** O custo de mana do seu **Q** é alto e o cone tem range curto (450 unidades). Guarde **Q** para os momentos em que você consegue acertar um campeão no centro do cone (a zona true damage), não para chip damage em ondas de minions.
- **Jogar E para frente com HP cheio.** Seu **E** é tanto engage quanto botão de pânico. Se você desperdiça para frente com HP cheio e depois o jungler inimigo aparece, você não tem um segundo dash para escapar.
- **Auto-atacar fora do range da R.** Quando **R** está disponível, você pode disparar 3 rajadas de agulhas no total. Fique a 1000 unidades da borda do fight para sempre poder relançar **R** em um alvo de HP baixo em vez de correr para a morte.
- **Comprar ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) Mercury's Treads sem CC.** Bota padrão é ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes; só troque para Mercury's se houver 3+ ameaças hard CC ou um mid AP fed. Botas defensivas custam ~20% do seu output de dano.

## Dica avançada

Use a **W** mist para fintar skillshots (= habilidades que você precisa mirar manualmente como linha ou área, o oposto de point-and-click): quando um inimigo com um stun ou root de longo alcance (Lissandra **E**, Sett **W**, Morgana **Q**) está carregando a animação de cast, jogue **W** na borda do range de lançamento dele e atravesse. A névoa te deixa intocável de fora — eles geralmente comem o cast e você ganha 4 segundos grátis de auto-attacks sem CC. O truque é cronometrar **W** no frame de wind-up (a animação antes da magia sair), não depois deles já terem se comprometido.
