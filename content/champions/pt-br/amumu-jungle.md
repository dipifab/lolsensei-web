---
title: "Amumu Jungle Build & Guia — Patch 16.9"
slug: "amumu-jungle"
language: "pt-br"
patch: "16.9"
champion: "amumu"
role: "jungle"
last_updated: "2026-04-29"
description: "Guia do Amumu jungle no Patch 16.9: clear path, build AP-tank (magic damage + tank stats), timing dos ganks, matchups principais, setup do R e erros comuns."
quick_learn:
  champion_dd_id: "Amumu"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Engage"
  abilities:
    - key: "P"
      name: "Cursed Touch"
      description: "Basic attacks aplicam Curse no inimigo. Alvos com Curse recebem true damage extra de qualquer magic damage que sofrem — os spells do seu time batem mais forte."
      dd_spell_id: "Amumu_Passive"
    - key: "Q"
      name: "Bandage Toss"
      description: "Skillshot linear de longo alcance que puxa Amumu para o primeiro inimigo atingido e o stuna. Duas cargas — uma para engage, outra para follow-up ou escape."
      dd_spell_id: "BandageToss"
    - key: "W"
      name: "Despair"
      description: "Aura toggle que aplica dano em % HP máximo nos inimigos próximos por segundo e refresha Curse neles. Drena mana enquanto ativa — desligue fora de combate."
      dd_spell_id: "AuraofDespair"
    - key: "E"
      name: "Tantrum"
      description: "Passiva: você recebe menos dano físico. Ativa: AOE de curto alcance. O cooldown cai cada vez que Amumu apanha — spamme em fights longos."
      dd_spell_id: "Tantrum"
    - key: "R"
      name: "Curse of the Sad Mummy"
      description: "Stun AOE enorme que prende todos os inimigos ao redor de Amumu e aplica Curse. É o sentido do kit — toda teamfight começa quando esse spell acerta."
      dd_spell_id: "CurseoftheSadMummy"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "W" }
    - { level: 15, key: "W" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "1103", name: "Mosstomper Seedling" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3068"
      name: "Sunfire Aegis"
      against: "contra times com vários melee bruisers (Sett, Darius, Olaf): a burn aura stacka com W e o armor extra aguenta o foco da frontline"
    - dd_id: "8020"
      name: "Abyssal Mask"
      against: "quando 3+ inimigos fazem magic damage: o shred AOE de magic resist amplifica cada spell do seu time em alvos com Curse"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra burst comps que te focam após o R (Zed, LeBlanc, Syndra): a stasis te mantém vivo enquanto o time fecha o fight"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target que abre fights (Ahri charm, Lissandra R, Morgana Q): o spellshield bloqueia o engage em você"
  base_combo: ["Q", "R", "W", "E"]
  win_condition: "Acerte Q da fog num alvo chave, R para travar todo mundo no raio, e fique em cima da backline com W tickando dano em % HP enquanto Tantrum reseta a cada hit que você toma."
  weakness: "Ferramentas de engage previsíveis e com cooldowns longos. Se Q erra ou R é removido por um Cleanse Summoner, Amumu não tem follow-up — ele é kitado até as duas voltarem, sem contribuir nada por 90+ segundos."
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
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
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
    - examples: ["yasuo", "kennen", "katarina", "miss-fortune"]
      archetype: "Comps de teamfight agrupado com dano AOE"
      reason: "O R do Amumu pega todo mundo num raio fechado. Comps que querem brigar agrupadas (Yasuo + Kennen com ults AOE, Katarina pulando entre alvos, Miss Fortune Bullet Time) tomam o stun juntas e alimentam o próprio AOE pela passive Curse."
    - examples: ["jinx", "kog-maw", "ashe", "vayne"]
      archetype: "Carries imóveis sem escape"
      reason: "Q é um skillshot de 1100 de alcance que puxa Amumu para o primeiro alvo atingido. Carries sem dash ou blink são arrancados de posição no momento que dão um passo para last-hittar a wave."
    - examples: ["brand", "syndra", "ryze", "viktor"]
      archetype: "Aliados AP que snowballam o engage"
      reason: "Cursed Touch transforma magic damage em true damage extra no alvo. Um time AP-heavy converte um Q-R em kills instantâneas porque cada spell que vem depois bate mais forte."
  counterpicks:
    - examples: ["fiora", "tryndamere", "yone"]
      archetype: "Bruisers móveis com parry, imunidade ou dashes"
      reason: "O W da Fiora paira o stun do Q e devolve, o R do Tryndamere ignora o dano que sua W tickka durante a janela unkillable, o terceiro Q do Yone o tira do alcance do Tantrum. Eles sobrevivem ao engage e viram o fight."
    - examples: ["xerath", "nidalee", "varus"]
      archetype: "Artilharia long-range sem comprometimento"
      reason: "Pokeam além dos 1100 de alcance do Q. Amumu tem que andar dentro do dano deles só para ameaçar engage, e um Q errado significa 25-30 segundos livres para eles continuarem pushando lane ou objetivo."
    - examples: ["ezreal", "tristana", "kalista"]
      archetype: "Marksmen com escapes integrados"
      reason: "O E do Ezreal, o W da Tristana e os hop reset da Kalista saem do raio do R do Amumu depois que o Q acerta. Curse vai pro lixo porque o carry se reposiciona antes do time fazer follow-up no stun."
---

## Visão geral

Amumu é o jungler de engage mais simples do jogo: você anda na fog of war (a parte do mapa fora da visão dos aliados), joga **Bandage Toss (Q)**, aperta **Curse of the Sad Mummy (R)** e deixa o time descarregar o dano. O kit dele tem um único trabalho — abrir o fight nos seus termos — e ele faz isso de uma distância maior do que quase qualquer outro engage graças ao pull de 1100 de alcance. A passive **Cursed Touch** multiplica os aliados AP transformando os spells deles em true damage extra em cada alvo com Curse.

O preço: o **R** fica em cooldown de 100-150s e o **Q** é sua única ferramenta de setup. Errar significa passar 90 segundos sendo kitado, então este guia é construído ao redor de escolher *o fight certo* em vez de forçar todo gank. Plano de jogo: clear, chegue no nível 6 e depois converta cada R numa kill ou objective pelos próximos 25-30 minutos.

## Build recomendada

**Itens iniciais:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Hailblade é o starter de jungle: deixa você dar dano nos monstros neutros rápido e aplica um slow curto em campeões inimigos. Refillable Potion é uma poção de cura que recarrega de graça na base, então você economiza gold no chip damage (dano pequeno acumulado) que toma dos camps (os grupos de monstros neutros que você farma na jungle).

**Itens core (na ordem):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — o item mais importante. A passive de burn em % HP máximo dobra com a **W**, derretendo tanks que tentam ficar dentro da sua aura. Compre toda partida.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — botas padrão: dão **tenacity** (uma stat que reduz a duração de stuns e slows que você sofre), muito importante para um campeão de engage que precisa continuar andando depois que o R acerta. Troque para ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** se o time inimigo tiver 3+ ameaças AD e nenhuma cadeia de hard CC.
3. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — omnivamp (você se cura com todo dano que causa) mais uma passive que converte parte do dano em true damage depois de 3 segundos em combate. Combina perfeito com a aura constante da **W**.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de scaling no late game. Com Liandry's + Riftmaker online, Deathcap leva o dano da aura **W** de "incômodo" para "não consigo ficar aqui 2 segundos".

**Itens situacionais:**

- ![Sunfire Aegis](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3068.png) **Sunfire Aegis** — contra times com vários melee bruisers (campeões corpo a corpo que misturam dano e durabilidade, ex. Sett, Darius, Olaf). A aura de fogo soma com a da **W** para AOE dobrado e dá armor extra.
- ![Abyssal Mask](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/8020.png) **Abyssal Mask** — quando 3+ inimigos fazem magic damage. Reduz a magic resist dos inimigos próximos, então cada spell que o time aterrissa em alvos com Curse bate mais forte.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra burst comps que te focam no momento que o R acerta (Zed, LeBlanc, Syndra). A stasis (uma janela de 2.5s em que você não pode receber dano nem agir) te mantém vivo enquanto o time fecha o fight.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra cadeias de CC mágico single-target longas (Ahri charm em all-in, Lissandra R, Morgana Q). O spellshield (uma barreira de uso único que bloqueia o próximo spell direcionado em você) come o engage.

**Botas:** ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** é o padrão. Plated Steelcaps só contra comps AD-heavy sem grandes cadeias de CC.

**Skill order:** Maxe **E** primeiro (velocidade de clear e dano em fights longos), **Q** segundo (gank threat e cooldown de stun mais baixo), **W** por último. Coloque ponto em **R** nos níveis 6, 11 e 16.

**Runas:** Primária **Resolve** com **Aftershock** (te dá armor e magic resist bônus por 2.5 segundos no momento que um stun de Q ou R acerta — a runa de engage do jogo), **Font of Life** (seu CC marca os inimigos e seus aliados se curam quando os atingem), **Conditioning** (resistências extras depois do minuto 12), **Revitalize** (potencializa shields e curas em você). Secundária **Sorcery** com **Manaflow Band** (mana sustain para manter **W** ativa nos clears) e **Transcendence** (ability haste extra — uma stat que reduz o cooldown de todas suas habilidades).

## Matchups principais

- **Lee Sin / Elise:** Junglers de early-game que invadem seu lado fraco. Rastreie eles com **wards** (itens de visão que revelam uma área pequena por ~90 segundos) nos raptors e red buff (camps da sua própria jungle). Evite invades 1v1 antes do nível 3; faça um full clear (matar cada camp uma vez) e vá para o Scuttle (o caranguejo do rio que dá visão ao morrer) para fazer eles perderem tempo te procurando.
- **Master Yi / Karthus:** Junglers de scaling. Force fights e objetivos (Drake no bot side, Rift Herald no top side, Baron depois) antes do minuto 18 — você scala bem, eles scalam melhor. Cada R que você apertar deve mirar no carry deles (o marksman ou burst mage da backline que faz a maior parte do dano), não no tank da frente, para o time inimigo não ter ninguém para peelar.
- **Hecarim / Volibear:** Engage espelhado, clear mais rápido. Não tente outclear; jogue ao redor dos seus laners e procure um gank numa lane com prio (prio = a lane que está pushando para o inimigo, então o laner pode sair por uns segundos sem perder minions) até o minuto 4.
- **Maokai / Sejuani:** Tank junglers com seu próprio engage AOE. Quem aterrissar o R primeiro ganha o teamfight. Guarde **Q** para depois deles commitarem para seu stun encadear no deles (o inimigo fica preso pela duração total dos dois stuns somados).
- **Kha'Zix / Rengar:** Assassinos que burstam sua backline. Body-block pelos seus carries (literalmente fique entre o assassino e seu damage dealer para absorver os hits) em vez de ficar na frente do time inimigo — sua aura de **W** mais o **E** Tantrum punem eles por commitarem em um alvo grudado em você.

## Power spikes e condições de vitória

- **Nível 3:** Com **E**, **W** e **Q** desbloqueadas, sua primeira ameaça de gank (a visita surpresa do jungler para tentar uma kill) é real. Olhe para a lane com o inimigo de HP mais baixo e o follow-up CC mais forte aliado; uma rotação Q-W-AA-E (AA = auto-attack) sob um aliado snowballando (uma vantagem que cresce ao longo do tempo: kill → gold → item → mais kill) geralmente é uma kill.
- **Nível 6:** Primeiro **Curse of the Sad Mummy**. É o maior power swing do jogo para Amumu. Encontre um fight nos 30 segundos depois de chegar ao 6 — ganke uma lane, conteste Scuttle ou monte o primeiro Drake.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment finalizado (~ minuto 12-14):** Sua **W** vira de poke para ameaça real. Brigar por Drake ou Rift Herald com **W** tickando num alvo em disputa ganha o objetivo sem nem apertar **R**.
- **Spike de 3 itens (~ minuto 22-26):** Liandry's + Riftmaker + Deathcap online. O cooldown do R é curto o suficiente para fazer teamfight duas vezes por timer de Baron. Force todo objetivo; este é seu pico.

## Erros comuns

- **Jogar Q no cooldown sem setup.** Um Q nu desperdiça sua única ferramenta de engage. Segure Q até o inimigo já estar slowed, rooted (sem poder se mover) ou enganchado por um aliado — ex. Q da Morgana acerta → seu Q em cima é garantido. Q usado como ferramenta de scout significa que você não tem nada quando o fight de verdade chegar.
- **Apertar R assim que chegar no fight.** R é AOE *centralizada em Amumu*. Se você apertar 200 unidades antes, não stuna ninguém e desperdiça o cooldown de 100-150s. Ande até estar dentro da backline deles, *aí* aperte R.
- **Deixar W ligada fora de combate.** **Despair** drena 8 mana por segundo enquanto ativa, mesmo sem inimigos por perto. Você vai chegar no minuto 8 sem mana para um stun de Q num gank limpo. Desligue no segundo em que o fight ou clear acaba.
- **Ignorar o reset de cooldown do Tantrum.** A passive do **E** corta o próprio cooldown a cada basic attack que você toma. Num fight longo contra inimigos melee você pode apertar **E** a cada 1-2 segundos — fique no alcance de ataque deles e continue spammando.
- **R no tank em vez do carry.** R é uma habilidade de teamfight. Sim, o tank está mais perto, sim, você vai pegar nele — mas o time quer o stun no carry. Guarde **Flash** (o Summoner Spell que todo champion escolhe, te teleporta uma distância curta uma vez a cada ~5 minutos) para flankar (entrar pela lateral ou por trás, não de frente) e engagar na backline, não no tank da frente.

## Dica avançada

Treine o combo **Flash + Q** no target dummy. O truque: lance Q primeiro, *aí* dê Flash no meio do cast na direção do alvo. A animação de pull do Q se reajusta para sua posição pós-Flash, dando um projétil 425 unidades mais curto que é praticamente impossível de dodgear. Isso transforma Q de skillshot de 1100 de alcance num stun garantido à queima-roupa, e é o play que separa Amumu mains de one-tricks: te deixa flankar numa backline pela fog e conectar Q num alvo em movimento que nunca viu o engage chegar.
