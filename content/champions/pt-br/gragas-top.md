---
title: "Gragas Top Build & Guia — Patch 16.9"
slug: "gragas-top"
language: "pt-br"
patch: "16.9"
champion: "gragas"
role: "top"
last_updated: "2026-05-02"
description: "Guia do Gragas top lane no Patch 16.9: starter kit, build de AP bruiser, matchups principais, power spikes do early ao late, erros comuns e uma dica final."
quick_learn:
  champion_dd_id: "Gragas"
  difficulty: 2
  damage_type: "magic"
  champion_class: "AP Bruiser / Skirmisher"
  abilities:
    - key: "P"
      name: "Happy Hour"
      description: "Conjurar qualquer habilidade cura o Gragas um pouco (cooldown interno de 5 segundos). Sustain de graça na lane que faz ele vencer matchups de poke no longo prazo."
      dd_spell_id: "Gragas_Passive"
    - key: "Q"
      name: "Barrel Roll"
      description: "Rola um barril até um ponto. Recaste para detonar, ou ele explode em 4 segundos. Dano e slow escalam com tempo de carga — espere a carga máxima antes de detonar."
      dd_spell_id: "GragasQ"
    - key: "W"
      name: "Drunken Rage"
      description: "Channel de 1 segundo: 30% de damage reduction por 3 segundos e bônus de dano mágico no próximo basic attack. Ferramenta principal de trade na lane."
      dd_spell_id: "GragasW"
    - key: "E"
      name: "Body Slam"
      description: "Dash que para no primeiro inimigo, causa dano AOE e atordoa por 1 segundo. É seu gap-close, escape e único hard CC — nunca use para limpar wave."
      dd_spell_id: "GragasE"
    - key: "R"
      name: "Explosive Cask"
      description: "Joga um barril que empurra os inimigos para longe do centro. Em top, é usado para jogar o laner adversário no gank do seu jungler ou peelar tower-dive."
      dd_spell_id: "GragasR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "4629", name: "Cosmic Drive" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contra assassinos AD ou duelistas split-push (Camille, Fiora): a stasis nega o execute deles depois do dash"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contra CC mágico single-target (Lissandra R, suppression do Malzahar): o spell shield bloqueia o lockdown"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "contra lanes AD-heavy (Renekton + Kha'Zix, Aatrox + Lee Sin): redução de dano físico vale mais que tenacity"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "contra comps que empilham cura (Aatrox, Vladimir, Dr. Mundo): magic pen e zona de healing-reduction na R"
  base_combo: ["W", "AA", "Q", "E"]
  win_condition: "Out-sustain bruisers melee na lane com Happy Hour e damage reduction da W; chegue na Riftmaker pelo minuto 13, depois procure um flip de R no gank do jungler para snowballar uma torre ou um Drake."
  weakness: "Artillery de longo alcance e top laners ranged (Vayne, Quinn, Teemo, Kennen) chippam você fora do range da Q. Sem E disponível não há engage nem escape — gastar E em harass é throwar a lane."
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8446, name: "Demolish", icon_path: "perk-images/Styles/Resolve/Demolish/Demolish.png" }
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
    primary_rationale: "Resolve primária no lugar de Sorcery: Gragas trade em melee e precisa de HP, não de burst. Aftershock proca no stun do Body Slam dando resistências. Demolish vira um back forçado em placa de torre, Conditioning e Revitalize escalam pro late."
    secondary_rationale: "Sorcery secundária: Manaflow Band sustenta o mana pra spammar poke de Q por toda a fase de lanes, e Transcendence empurra o Ability Haste além do spike de Cosmic Drive pra cooldowns mais curtos em E e R nas side lanes do mid-game."
    secondary_alternative: "Contra top laners ranged (Vayne, Teemo, Quinn) onde sustain conta mais que dano, swap Sorcery pra Inspiration com Biscuit Delivery (poções grátis) e Time Warp Tonic (sustain de poção mais Movement Speed) para uma build de healing."
matchup_draft:
  pick_into:
    - examples: ["darius", "garen", "sett"]
      archetype: "Bruisers melee sem dash"
      reason: "Eles têm que andar pra frente pra last-hittar; o poke Q-W-AA do Gragas chippa eles fora do range de all-in, e a damage reduction da W enfraquece o commit pré-6 deles contra o counter-trade."
    - examples: ["kennen", "vladimir"]
      archetype: "Top laners AP squishies"
      reason: "A damage reduction flat do Drunken Rage absorve o combo stun-burst do Kennen e o poke Q do Vladimir. Gragas pode responder com E-AA-Q enquanto os recursos deles estão gastos no trade."
    - examples: ["mordekaiser", "ryze"]
      archetype: "Mages de skill-shot e channel"
      reason: "Body Slam interrompe o wind-up do Q de Mordekaiser e o channel do combo do Ryze, depois Gragas sai com a damage reduction da W. Ambos perdem prioridade de lane assim que o cast cycle quebra."
  counterpicks:
    - examples: ["vayne", "quinn", "teemo"]
      archetype: "Top laners ranged"
      reason: "Eles auto-attackam o Gragas fora do range da Q e andam pra trás do commit do E. Sem como fechar gap repetidamente, Gragas é chippado a metade do HP antes do nível 3 e forçado a basear."
    - examples: ["fiora", "camille"]
      archetype: "Bruisers com true damage e pressão de execute"
      reason: "Os vital da Fiora dão true damage que ignora as resistências do Gragas; a R da Camille isola ele para um execute true-damage percentual. Os stats tanky do Gragas não viram survival 1v1 contra nenhum dos dois."
    - examples: ["malphite", "ornn"]
      archetype: "Top laners tank de hard-engage"
      reason: "O CC deles encadeia mais que a janela do Aftershock. Igualam o engage do Gragas com o deles e ganham o scaling pro late game graças aos esteroides de resistência embutidos."
---

## Visão geral

Gragas top é um AP bruiser (um fighter que sobe AP pro dano mas stacka HP suficiente pra sobreviver aos dives da frontline) que vence a lane por poke (chip damage à distância segura) e sustain (regen passivo de HP em lutas), depois transita para um papel de engage em teamfight em torno do **Explosive Cask (R)**. **Happy Hour (P)** dá cura passiva toda vez que você usa uma habilidade, então um pattern de trade Q → W → AA (basic attack) sangra o laner adversário sem sangrar o Gragas. **Drunken Rage (W)** é uma janela de 30% de damage reduction — sua ferramenta mais subestimada, porque permite absorver o all-in (commit total ao dano) inimigo e counter-tradar com um stun de **E** de graça.

Plano de jogo: domine lanes melee com poke de Q até o nível 6, depois procure flips de **R** que joguem o laner adversário pro gank do seu jungler ou pra dentro da sua torre. Daí você scala (cresce com itens e níveis) com **Riftmaker** e **Cosmic Drive**, agrupa pelo minuto 25 e atua como engage primário do time (o campeão que começa a luta). Evite matchups ranged — se cair em um, jogue passivo, farme sob torre com Q e chame o jungler.

## Build recomendada

**Itens iniciais:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**. Starter padrão de sustain que deixa você tankar o poke de Q dos matchups ranged tempo o bastante pra chegar em Riftmaker.

**Itens core (em ordem):**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — item AP de burn sustentado com omnivamp (life-steal que funciona em todo dano, não só basic attacks). Os trades alongados do Gragas viram esse item no spike single-item mais forte do kit dele.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — tenacity reduz duração de stuns. Botas padrão na top lane porque a maioria dos matchups traz pelo menos uma ameaça de CC (stun do Renekton, root da Camille, stun do Sett).
3. ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — Ability Haste mais um esteroide de Movement Speed depois de causar dano em campeão. Permite girar em volta da luta pra encaixar um segundo stun de **E** antes do primeiro cooldown acabar.
4. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — Ability Haste mais burn mágico percentual de max HP que rampa quanto mais dura a luta. Quarto item contra qualquer time com dois ou mais frontliners.
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicador de late game. Quinto item quando o time agrupa e você está commitando pro burst de teamfight em vez de splitpush.

**Itens situacionais:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contra assassinos AD (Zed, flank do Talon) ou duelistas split-push (Camille, Fiora). Use o ativo logo depois do **R** pra negar a janela de execute.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contra CC mágico single-target (**R** da Lissandra, suppression do Malzahar). O spell shield bloqueia o lockdown que cancelaria seu flip de **R**.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — contra lanes AD-heavy (Renekton + jungler AD). Substitui Mercury's Treads quando não tem ameaça de CC importante.
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — contra comps que empilham cura. O R-active aplica uma zona de healing-reduction conectada ao knockback.
**Botas:** ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** padrão. Troque pra ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** em jogos AD-heavy, ou ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** se a lane é one-shot e você quer migrar pra build damage-first.

**Skill order:** Maxe **E** primeiro (seu stun e dano principal), **Q** segundo (poke e waveclear), **W** por último. Ponto em **R** nos níveis 6, 11, 16.

**Runas:** Primária **Resolve** com **Aftershock**, **Demolish**, **Conditioning**, **Revitalize**. Secundária **Sorcery** com **Manaflow Band** e **Transcendence**. Stat shards: Adaptive Force, Adaptive Force, Health Scaling.

## Matchups principais

- **Darius:** Avance pra last-hittar só quando **W** estiver up; pokeie de Q antes de cada wave de minions. O all-in dele é brutal pré-6 — nunca deixe ele encadear E-Q em você numa posição de Aftershock-bait.
- **Renekton:** Evite trades de nível 1-2 onde o fury-stun dele snowballa vantagem de HP. Iguale no nível 3 com o counter-engage **W-E**; assim que ele commitar o stun da W, sua damage reduction absorve o burst e vocês tradam parelho.
- **Vayne:** Hard counterpick (um campeão escolhido especificamente pra ganhar do seu na lane). Jogue sob torre com poke de Q, peça ganks cedo pro jungler (nível 3-4) e planeje o rush de ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** pra mitigar os basic attacks empoderados depois do dash dela (a Q dela permite tumble e recarregar o tiro da besta).
- **Camille:** Evite 1v1 em sidelane depois que ela completa o primeiro item core (pelo minuto 11-13); a R dela isola você (corta de seus aliados dentro de uma parede) pra um execute percentual. Agrupe com o time e force teamfights onde ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** nega a janela de dano da R dela.
- **Malphite:** Parelho pré-6, hard scaling pós-6 porque a **R** dele iguala a sua e o stack de armadura ignora seu AP. Roame mid com flips de **R** quando o ult dele estiver down — é a sua única janela pra virar o matchup.

## Power spikes e condições de vitória

- **Nível 3 (E desbloqueada):** Primeira janela de all-in. Com **W** up e o stun de **E** pronto, dá pra punir qualquer melee adversário que andar demais pra last-hittar.
- **Nível 6 (primeira Explosive Cask):** Power spike. Monte um flip de **R** no gank do jungler — empurre o top adversário da linha de torre dele pra dentro do seu lado do river pra uma kill grátis.
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker completo (~ minuto 13-15):** Spike que vira a lane. Burn sustentado mais omnivamp transformam trades alongados em HP ganho; force um 1v1 se não estiver em counter matchup.
- **3 itens + botas (~ minuto 24-28):** Pico de teamfight. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** mais ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** mais ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** fazem do Gragas uma ameaça de engage quase imatável. Agrupe com o time pra brigas de objetivo.

## Erros comuns

- **Usar E pra limpar wave.** **E** é seu gap-close, escape e único stun. Se você Body Slam num minion pra pushar, o laner adversário tem 14 segundos grátis pra all-innar você. Use **Q** pra pushar wave; **E** só pra engage e escape.
- **Soltar R como dano de abertura.** **R** espalha o time adversário. Se você usa sem plano de posicionamento, joga o laner pra longe do follow-up do seu time. Sempre visualize onde o alvo deve aterrissar antes de apertar **R** — empurre pro seu time ou sua torre, nunca pra frontline adversária.
- **Tradar sem W pronta.** Todo trade honesto do Gragas começa com **W**. Sem a janela de 30% de damage reduction, qualquer bruiser melee ganha o trade. Se **W** estiver em cooldown, last-hitte e disengage.
- **Force-gankar sozinho com R.** Flips de **R** solo dentro do time adversário sem follow-up são throws. O barril reposiciona o alvo, mas o Gragas sozinho não mata um carry com HP cheio — é um enabler pro time, não um finisher de duelo.
- **Maxar W em vez de E.** **W** não dá pro Gragas o stun, o gap-close nem a velocidade de clear — **E** faz as três coisas. Maxe **E** primeiro toda partida.

## Dica avançada

Treine o combo **R-Flash**: lance **R** nos pés do laner adversário, depois **Flash** no meio do cast pra reposicionar o centro do barril perto do seu time ou torre. O barril detona da posição flashada, então um alvo plantado na linha de torre dele pode ser flippado pra debaixo da sua torre pra uma kill grátis. É a mecânica do Gragas com o maior skill ceiling e merece reps dedicados em practice tool antes de tentar em solo queue ranqueada.
