---
title: "Kayle Top Build & Guia — Patch 16.9"
slug: "kayle-top"
language: "pt-br"
patch: "16.9"
champion: "kayle"
role: "top"
last_updated: "2026-05-05"
description: "Guia da Kayle top para League of Legends Patch 16.9: plano de sobrevivência na rota, build hyper-scaling AS+AP, matchups principais, power spikes nível 11 e 16 e erros comuns."
quick_learn:
  champion_dd_id: "Kayle"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Fighter / Hyper-scaling Carry"
  abilities:
    - key: "P"
      name: "Divine Ascent"
      description: "Kayle se transforma 4 vezes ao subir de nível (1, 6, 11, 16). No 6 ganha auto-attacks ranged; no 16 suas autos disparam ondas AOE de fogo on-hit."
      dd_spell_id: "Kayle_Passive"
    - key: "Q"
      name: "Radiant Blast"
      description: "Skillshot linear: dano, slow e shred de armor + magic resist no primeiro inimigo atingido e nos atrás. Sua única ferramenta ranged pré-6."
      dd_spell_id: "KayleQ"
    - key: "W"
      name: "Celestial Blessing"
      description: "Heal e movement speed na Kayle e no aliado mais próximo. Sustain na rota pré-6, peel e chase tool depois."
      dd_spell_id: "KayleW"
    - key: "E"
      name: "Starfire Spellblade"
      description: "Passiva: dano mágico bônus nas autos. Ativa: a próxima auto vira ranged e causa dano mágico bônus em HP perdido. Pós-6 a passiva adiciona ondas AOE on-hit."
      dd_spell_id: "KayleE"
    - key: "R"
      name: "Divine Judgment"
      description: "Mira um aliado (ou ela mesma) com alguns segundos de invulnerabilidade, depois explode em dano mágico AOE. Save tool, cobertura de engage e finisher."
      dd_spell_id: "KayleR"
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
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
  situational_items:
    - dd_id: "6655"
      name: "Luden's Echo"
      against: "swap como 2º item se a rota está calma e você quer um burst spike por cima de Nashor's"
    - dd_id: "3091"
      name: "Wit's End"
      against: "contra top laners AP pesados (Rumble, Vladimir, Sylas) quando o poke fecha você antes do nível 11"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contra comps que stackam heal (Aatrox top, Soraka, Dr. Mundo) — aplica Grievous Wounds nas autos"
    - dd_id: "3135"
      name: "Void Staff"
      against: "assim que dois inimigos terminarem um item de Magic Resist (Mercury's Treads não conta, só itens completos)"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "contra rotas que vencem com auto-attack (Fiora, Camille, Tryndamere) — swap dos Berserker's se sobreviver é o único objetivo"
  base_combo: ["Q", "AA", "E", "AA"]
  win_condition: "Sobreviva à rota até o nível 11, depois escale com Nashor's Tooth + Rabadon's Deathcap. No 16 suas ondas AOE on-hit limpam teamfights da back line sob cobertura da R."
  weakness: "Pré-nível 6 você é uma melee lenta e squishy com um único skillshot de curto alcance. Top laners com all-in early forte (Darius, Renekton, Riven) matam você antes dos seus power spikes."
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
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision primary: Lethal Tempo acumula attack speed em luta e escala as ondas AOE da passiva (pós-6 e pós-16). Triumph cura em takedowns, Legend: Alacrity dá AS permanente, Last Stand pump dano com HP baixo — onde Kayle vive no late."
    secondary_rationale: "Inspiration secondary: Biscuit Delivery devolve HP e mana na fase de sobrevivência pré-6, Cosmic Insight reduz cooldown de Flash e itens ativos pra Zhonya's Hourglass voltar mais rápido em teamfight."
    secondary_alternative: "Contra rotas de poke pesado (Vladimir, Rumble, Quinn) troque Inspiration por Resolve com Second Wind (regen passiva após dano) e Overgrowth (HP scaling permanente) pra ficar na rota até o power spike de nível 11."
matchup_draft:
  pick_into:
    - examples: ["nasus", "mordekaiser"]
      archetype: "Stat-check tops with no early kill threat"
      reason: "Sem burst nem cadeias de hard-CC, eles não punem seu pré-6 fraco, e quando você bate no nível 11 com autos ranged out-DPSa eles de uma distância segura."
    - examples: ["veigar", "kayn"]
      archetype: "Late-game scalers without strong 1-9 windows"
      reason: "Vocês escalam no mesmo ritmo: qualquer time que deixa você chegar no 16 entrega o jogo, porque as ondas AOE on-hit da Kayle chegam antes do wombo deles."
    - examples: ["senna", "vayne"]
      archetype: "Carries you can babysit with R"
      reason: "Ulti global te faz o melhor peeler do jogo — solta R no segundo em que dive no carry e ele sobrevive a uma cadeia de burst inteira sem um arranhão."
  counterpicks:
    - examples: ["darius", "renekton", "riven", "fiora"]
      archetype: "Early-pressure bruisers with all-in level 1-3"
      reason: "Eles te matam antes do power spike de nível 6. CC chain mais sustained damage cortam 70%+ HP da Kayle num all-in de 4 segundos, e você não tem dash pra disengage."
    - examples: ["camille", "yone"]
      archetype: "Mobile lane bullies with multiple gap-closers"
      reason: "O E hookshot da Camille e o dash Q3 do Yone ignoram a posição que você tenta segurar; fecham a distância antes do trade Q + auto se concluir."
    - examples: ["olaf", "garen"]
      archetype: "Champions that bypass invulnerability"
      reason: "A R do Olaf dá CC immunity e true damage no R+axe, a R do Garen faz true damage escalando em HP perdido — ambos te finalizam através de Zhonya's Hourglass e até do front-end da sua R."
---

## Visão geral

Kayle é uma hyper-scaling carry que muda de identidade ao longo da partida: uma melee lenta e squishy no nível 1, uma poker ranged no 6, um monstro de late game de verdade no 11 e uma bola de demolição AOE de time inteiro no 16. A **Divine Ascent (P)** é o kit dela — cada marco desbloqueia um stat block novo (attack speed, range, ondas de fogo on-hit). A top lane é a casa natural dela porque a rota longa dá espaço pra jogar passiva sem sangrar tempo.

O game plan é sobrevivência, não agressão. Perca CS se for preciso, nunca morra e confie na build: ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** no nível 11 transforma a passiva ranged em dano de verdade, e ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** no 16 faz com que as ondas AOE on-hit deletem teamfights inteiros da back line sob cobertura da **R**.

## Build recomendada

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + 1 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. O escudo transforma a rota de "morro em dois trades" pra "perco CS, mas vivo". Pula Doran's Ring mesmo Kayle escalando com AP — pré-6 você não tem o kit pra usar.

**Core items (em ordem):**

1. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — botas de attack speed alimentam suas ondas on-hit. Rusha botas primeiro, depois monta peça por peça pra Nashor's.
2. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — o item mais importante pra Kayle. Combina os dois stats que ela quer no mesmo slot (50% attack speed + 90 AP) e adiciona magic damage em todo hit. É o spike que te tira de "top laner fraca" pra "carry de verdade".
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplica todo seu AP scaling por 30%, e você tem muita coisa pra multiplicar (E passiva, R, ondas AOE pós-16).
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — a stasis é seu salva-vidas contra divers e contra o timing do cooldown da sua R. Compre como terceiro ou quarto, dependendo da comp inimiga.

**Situational items:**

- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — contra top laners AP pesados (Rumble, Vladimir, Sylas). Adiciona attack speed mais magic resist mais magic damage on-hit, então funciona como defensivo e ofensivo ao mesmo tempo.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contra comps que stackam heal (Aatrox top, Soraka mid, Dr. Mundo). Aplica Grievous Wounds em cada auto, o que reduz a eficácia do heal em 40%.
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — assim que dois inimigos terminarem um item de Magic Resist (não Mercury's Treads — barata demais; só itens completos).
- ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — segundo item alternativo quando a rota está calma e você quer um burst spike por cima de Nashor's.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — contra rotas que vencem com auto-attack (Fiora, Camille, Tryndamere). Swap dos Berserker's se sobreviver é o único objetivo.

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** padrão pelo scaling de attack speed. Plated Steelcaps quando um AD bully torna a rota impossível.

**Skill order:** Maxe **E** primeiro (sua ferramenta de dano antes e depois do 6), **Q** segundo (slow mais longo + shred melhor por rank), **W** por último. Ponto em **R** nos níveis 6, 11, 16. Abertura **E-W-Q** pra sustain early na rota.

**Runes:** Primary **Precision** com **Lethal Tempo**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Secondary **Inspiration** com **Biscuit Delivery** e **Cosmic Insight**. Stat shards: Attack Speed, Adaptive Force, Health Scaling.

## Matchups principais

- **Darius:** Hard counter. Distância máxima, você só entra pra last-hit, nunca pra trade pré-6. ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** start, aceite perder 30+ CS, ping pro jungler.
- **Garen:** Rota fácil pós-6. Ele não consegue interromper sua auto ranged com nada, então kita ele (anda pra trás enquanto atira pra manter distância) com **Q** slow + auto ranged. Cuidado com a **R** dele em HP baixo — true damage escalando em HP perdido, ignora Zhonya's Hourglass.
- **Mordekaiser:** Sobrevivência pré-6, snowball (vantagem crescente: kill → ouro → item → mais kills) pós-11. A **R** dele te isola do time por 7 segundos; se ele te pegar antes do nível 11, você morre. Use **Flash** pra desviar do pull do **E**, e pré-builda **Mercury's Treads** se ele te pegar várias vezes.
- **Camille:** Counterpick. O **E** hookshot dela ignora o spacing que você tenta segurar. Compre ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** em vez de Berserker's, warde a brush da rota e ping pro jungler se ela tiver dois níveis de vantagem.
- **Nasus:** Empate pré-6, você ganha pós-11. O **W** wither dele (um slow muito pesado em você) ganha o duelo antes de você ter autos ranged. Quando Nashor's estiver online e você out-DPSar a rampa de stacks dele, push waves e force ele a reagir.

## Power spikes e condições de vitória

- **Nível 6 (R desbloqueada):** Sua primeira forma com auto-attacks ranged ativa, e **Divine Judgment** te dá um save tool. Para de abraçar a torre — você poka de 525 de range e converte dives em kills com uma **R** bem timada em você mesma.
- **Nível 11 + ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth completo (~ minuto 18-22):** O maior spike do jogo. Range de auto-attack sobe de novo, a passiva escala com attack speed e AP, e o wave control vira. Começa o group play: rota com o time, busca objetivos.
- **Nível 16 (full ascension) + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (~ minuto 28-32):** Suas auto-attacks disparam ondas AOE de fogo on-hit. Uma auto na frontline causa dano em todos atrás. Daqui em diante você deve ser a maior fonte de dano do seu time, não importa a função.
- **A qualquer momento com ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) Zhonya's Hourglass + R combo:** Aperta **R** em você pra ganhar invulnerabilidade, depois encadeia Zhonya's Hourglass quando R acabar. São uns 5 segundos de imunidade em teamfight enquanto seu time peela — o suficiente pra virar a maioria dos engages.

## Erros comuns

- **Tentar tradar auto-por-auto pré-6.** Kayle é melee com base damage baixo no early. Até um trade ruim contra Darius ou Renekton começa um snowball que você não desfaz. Segura o **W** pra sustain, só last-hit.
- **Gastar R em si mesma pra sobreviver ao poke.** **Divine Judgment** tem 160 segundos de cooldown no rank 1 — é o teamfight inteiro de mid-game perdido. Guarda **R** pra all-ins chegando ou pra proteger seu ADC em fight de drake.
- **Ficar na frontline no nível 16.** Suas ondas AOE on-hit funcionam melhor da back line, atrás do tank. Posiciona como um ADC — deixa a frontline absorver os hits enquanto você atira ondas através deles.
- **Pegar camps de jungle antes do nível 11.** Kayle clera devagar e enfraquece HP antes do power spike. Fica na rota, push waves, recall com mana cheia — sem invade nem fight de scuttle pré-Nashor's.
- **Vender botas pro 6º item cedo demais.** No late dá pra trocar botas por um item de dano (Mejai's Soulstealer, Cryptbloom), mas só quando você está 5/0 na frente e os fights são group fights garantidos. Se está empatado, mantém as botas.

## Dica avançada

Domine o **R-on-self peel pattern** nos teamfights de mid-game. Quando o diver inimigo (Camille, Hecarim, Sett) pula na sua back line, não aperta **R** no seu ADC — aperta em você mesma, anda pra dentro da linha do dive e solta a explosão AOE embaixo dos pés do diver. Os 2,5 segundos de invulnerabilidade forçam o diver a ou commitar e comer a explosão (kill grátis) ou recuar (seu time reseta o fight em empate). O truque é o range: **R** tem 900 de cast range, então você pode mirar em si mesma mesmo estando 8 unidades atrás do seu ADC.
