---
title: "Akshan Mid Build & Guia — Patch 16.9"
slug: "akshan-mid"
language: "pt-br"
patch: "16.9"
champion: "akshan"
role: "mid"
last_updated: "2026-04-29"
description: "Guia Akshan mid lane no Patch 16.9 do League of Legends: build core de lethality, runas Press the Attack, matchups da rota, power spikes, erros comuns e dica final de Q ricocheteada."
quick_learn:
  champion_dd_id: "Akshan"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Assassin de lethality"
  abilities:
    - key: "P"
      name: "Dirty Fighting"
      description: "A cada 3 hits, dano bônus e escudo se acertar um campeão. O auto-attack dispara um segundo tiro com dano reduzido, cancelável para ganhar Move Speed."
      dd_spell_id: "Akshan_Passive"
    - key: "Q"
      name: "Avengerang"
      description: "Skillshot bumerangue que causa dano físico na ida e na volta. O alcance estende cada vez que acerta um inimigo, então uma linha limpa pelos minions chega mais longe do que parece."
      dd_spell_id: "AkshanQ"
    - key: "W"
      name: "Going Rogue"
      description: "Passiva: marca como Scoundrel quem mata aliados. Matar um ressuscita os aliados mortos e dá ouro bônus. Ativa: camouflage e Move Speed em direção aos Scoundrels (quebra fora de brush/terreno)."
      dd_spell_id: "AkshanW"
    - key: "E"
      name: "Heroic Swing"
      description: "Gancho no terreno; Akshan gira atirando no inimigo mais próximo, desce a pedido ou no impacto. O cooldown reseta nas takedowns — encadeia um segundo swing."
      dd_spell_id: "AkshanE"
    - key: "R"
      name: "Comeuppance"
      description: "Mira em um campeão e carrega projéteis por ~5 segundos. Reativar dispara todos os projéteis no primeiro alvo atingido; o dano escala com HP perdido — é uma ferramenta de execute."
      dd_spell_id: "AkshanR"
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
    - { dd_id: "3142", name: "Youmuu's Ghostblade" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "6698", name: "Profane Hydra" }
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3814"
      name: "Edge of Night"
      against: "contra CC point-and-click single-target (Lissandra R, Malzahar R, TF carta dourada) — spellshield bloqueia 1 cast a cada 30s"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "contra burst AP pesado (Annie, Veigar, Syndra) — escudo mágico + lifeline contra rotação de delete"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "contra comps que empilham cura (Soraka mid, Vladimir, Aatrox top) — Grievous Wounds em autos e em projéteis do R"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "contra comps com vários assassins (Talon + Zed double AD) — segunda vida para o carry que channela R no aberto"
    - dd_id: "6699"
      name: "Voltaic Cyclosword"
      against: "primeiro item alternativo contra comps squishy que você snowballa com pickoff: o slow energized prende carry que o R erraria"
  base_combo: ["Q", "AA", "E", "AA", "R"]
  win_condition: "Snowball a lane com trades de 3 hits Press the Attack e poke de Q no alcance máximo, depois converta o lead com roams via E a partir do minuto 6 e finalize squishies com R nas brigas de objetivo."
  weakness: "O E só engancha em terreno, então mid aberto deixa Akshan sem reset de swing. CC point-and-click single-target e Wind Wall cancelam o channel do R e o poke do Q."
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8233, name: "Absolute Focus", icon_path: "perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "xerath", "vel-koz"]
      archetype: "Mages de artillery imóveis sem dash"
      reason: "Esses campeões ficam parados para escalar ou pokar; o E do Akshan ao redor da parede do mid fecha a distância e encadeia Q + 3 hits da passiva + R execute antes deles terminarem um cast."
    - examples: ["annie", "lux", "ahri"]
      archetype: "Mages com um único escape telegrafado"
      reason: "O Akshan baita o stun da Annie, o Q da Lux ou o R da Ahri, depois encaixa o E-swing no recovery frame para um trade de 3 hits e a passiva escudada de graça."
    - examples: ["senna", "ziggs"]
      archetype: "Carries de backline com peel próprio fraco"
      reason: "O R do Akshan trava em 2500 de alcance e ignora boa parte do peel; abaixo de 50% HP os projéteis executam pelo kit deles mesmo do outro lado do river."
  counterpicks:
    - examples: ["lissandra", "malzahar", "twisted-fate"]
      archetype: "Mages com CC point-and-click"
      reason: "O stun ou suppress lock-on cancela o channel do R, quebra o swing do E no meio da rotação e revela o camouflage do W — Edge of Night bloqueia 1 cast a cada 30s mas não salva duas vezes."
    - examples: ["yasuo", "yone"]
      archetype: "Champions com Wind Wall"
      reason: "O Wind Wall bloqueia o Q boomerang, cada auto durante o swing do E e cada projétil do R; um único Wind Wall bem cronometrado vira o trade inteiro e deixa eles fazerem all-in sem tomar dano."
    - examples: ["akali", "fizz", "diana"]
      archetype: "Assassins corpo-a-corpo com vários gap-closes"
      reason: "O E do Akshan só engancha em terreno, então ele não consegue swingar contra um assassino fed no aberto. O shroud da Akali quebra o targeting, o E do Fizz pula sobre os autos, o R da Diana o prende no meio do channel."
---

## Visão geral

Akshan é um híbrido marksman/assassin com gancho de reposicionamento, um stealth atrelado a marcas de vingança e um ultimate de execute (uma habilidade que mata automaticamente inimigos abaixo de um limiar de HP) que escala com HP perdido. O kit dele combina com mid lane porque a geometria das paredes ao redor do river e do tri-bush dá ao ![Heroic Swing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/AkshanE.png) **Heroic Swing** terreno consistente para enganchar, e porque ![Avengerang](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/AkshanQ.png) **Avengerang** supera no push a maioria dos mages depois que sobe de nível. É um campeão de baixa mobilidade no aberto, mas alta mobilidade perto de paredes — então a partida toda gira em torno de escolher fights em que o mapa joga a seu favor.

Ele escala com itens de **lethality** — equipamento que converte dano físico em armor penetration bônus, ideal para deletar alvos squishy como mages e ranged carries, mas pouco efetivo contra full tanks. O dano dele é majoritariamente físico (AD), não mágico.

O plano de jogo é simples na forma e exigente no timing: empurre a wave (puxe seus minions contra a torre inimiga) com **Q**, busque um trade de 3 hits (uma troca curta em que você se compromete com alguns hits e recua, sem tentar a kill completa) que ative o escudo da passiva ![Dirty Fighting](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/champion/Akshan.png) **Dirty Fighting**, depois roame (saia da sua lane para ajudar bot ou top) entre os minutos 6 e 12 para converter prio (a liberdade de sair da lane sem perder minions ou torre) em kills que resetam o **E**. O nível técnico aparece em dois pontos: (1) ricochetar o **Q** num tank da frontline (os bruisers/tanks que abrem os fights) até o carry da backline (os squishies que ficam atrás batendo), porque o alcance do bumerangue estende a cada elo da cadeia, e (2) ler o momento certo de channelar o **R** — cedo demais você toma stun no meio do channel, tarde demais o alvo curou acima do limiar de execute.

## Build recomendada

**Itens iniciais:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 1 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Abertura padrão — o AD mais o lifesteal alimenta o escudo da passiva nos trades de 3 hits.

**Itens core (na ordem):**

1. ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — primeiro item de lethality e o ativo de Move Speed transforma roams em side lane em kills. O power spike (momento em que sua força dá um salto nítido) mais forte da build.
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — botas de attack speed: a passiva (a cada 3 hits) proca mais rápido e a rajada do **R** fica mais densa.
3. ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — adiciona AOE de waveclear (um golpe que dana toda a wave de minions de uma vez), um ativo dash que você encadeia depois do **E** e mais lethality. Melhor segundo item de lethality nessa patch.
4. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — a passiva mata qualquer campeão abaixo de 5% HP, perfeitamente alinhada com o scaling de HP perdido do **R**: alvos que o R deixaria com 1 HP morrem mesmo assim.
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — finalizador com armor pen contra o tank inimigo no late. Compre isso, e não um item defensivo, quando o jogo passar de 35 minutos.

**Itens situacionais:**

- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — contra CC point-and-click single-target (CC que trava num alvo sem poder ser desviado: Lissandra R, Malzahar R, Twisted Fate carta dourada). O spellshield (uma barreira de uso único que absorve a próxima magia inimiga em você) bloqueia 1 cast a cada 30 segundos.
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — contra burst AP pesado (dano mágico de uma rotação que pode te apagar em um segundo: Annie, Veigar, Syndra). O escudo mágico + lifeline (buff de cura e ataque que ativa quando você cai abaixo de ~30% HP) te mantém vivo o suficiente para responder com o **R**.
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — contra composições que empilham cura (Soraka mid, Vladimir top, Aatrox top). Aplica Grievous Wounds (debuff que reduz a cura recebida pelo alvo em ~50%) nos auto-attacks e em cada projétil do **R**.
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — contra comps com muitos assassins (Talon + Zed double AD = duas grandes ameaças de burst físico). Uma segunda vida vale mais que qualquer slot de DPS quando você é o carry principal channelando **R** no aberto.
- ![Voltaic Cyclosword](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6699.png) **Voltaic Cyclosword** — primeiro item alternativo contra comps double-mage squishy que você pretende snowballar (acumular um lead de kills que vira mais kills) com pickoff (catar um inimigo isolado por vez fora dos teamfights). O auto energized aplica um slow forte que prende um carry em fuga que o **R** erraria.

**Botas:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** padrão pelo attack speed. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** só contra times com 3+ fontes de hard CC (stuns, roots, knock-ups que te tiram dos botões).

**Skill order:** Maxe **Q** primeiro (waveclear e DPS principal), **E** em segundo (pelo dano por tiro do swing no all-in), **W** por último. Coloque ponto em **R** nos níveis 6, 11 e 16.

**Runas:** árvore primária **Precision** com **Press the Attack** (depois de 3 hits num campeão, o próximo dano é amplificado — perfeito para o proc da passiva), **Presence of Mind** (mana de volta nas takedowns), **Legend: Alacrity** (attack speed extra) e **Coup de Grace** (mais dano em alvos abaixo de 40% HP). Secundária **Sorcery** com **Absolute Focus** + **Gathering Storm**, ou **Inspiration** com **Magical Footwear** (botas grátis no minuto 12) + **Cosmic Insight** se quiser o ouro economizado para um spike de primeiro item mais cedo.

## Matchups principais

- **Yasuo / Yone:** matchup duro. O **W** Wind Wall (parede vertical de vento que bloqueia todos os projéteis não-melee por ~4 segundos) bloqueia o **Q**, os autos durante o swing do **E** e cada projétil do **R**. Segure o **Q** até eles queimarem o Wind Wall em um minion ou no jungler, depois entre. Guarde ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** como swap de terceiro item contra Yasuo (vs o knock-up do **Q** dele — uma habilidade que te lança no ar por um instante e bloqueia seus inputs).
- **Zed:** parelho a levemente favorável na lane. O trade de 3 hits supera o poke Q-W do Zed pré-6, mas o **R** dele o torna untargetable (não selecionável por magias ou autos) por um instante, esquivando do lock-on do seu R. Segure o **E** para o shadow swap e use como counter-jump.
- **Lissandra:** hard counter. O **R** dela é point-and-click e cancela o channel do seu **R** no meio da rotação. Compre ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** antes do segundo item, e nunca jogue **R** na cara dela sem spellshield up.
- **Annie:** cuidado no nível 6. O all-in com stun dela bate o windup do seu **R** se ela te pegar na lane. ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** como terceiro item transforma uma kill em 1 rotação num trade sobrevivível.
- **Veigar:** favorável. A cage dele é lenta o bastante para o **E** sair limpo, e ele não tem escape quando você all-ina depois do nível 6. Guarde o **R** para depois que ele usar a cage do **E** na wave.

## Power spikes e condições de vitória

- **Nível 2:** com **Q** + **E** você tem o primeiro all-in: **Q** na wave para estender o alcance do bumerangue, **E** numa parede lateral, swing pelos autos, **Q** de volta na saída. É o spike de nível 2 mais forte do mid lane nessa patch.
- **Nível 6:** o primeiro **Comeuppance** desbloqueia pressão de execute em side lane. Só com ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade**, uma briga no river sem ward num alvo abaixo de 50% HP é kill garantida.
- **![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) Youmuu's Ghostblade completa (~ minuto 9-11):** o controle de wave inverte. Ative o Ghostblade no cooldown a cada roam — um gank em side lane com **E** + **Q** + trade escudado de 3 hits quase sempre converte num campeão sem MR comprada.
- **![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) The Collector online (~ minuto 22-26):** alvos com 6% HP morrem para a passiva do item mesmo se o seu **R** os tivesse deixado com 1 HP. Force brigas de objetivo aqui e channele **R** assim que um backline aparecer na visão.

## Erros comuns

- **E para o mid aberto.** O **E** só engancha no terreno — se você Heroic Swing em direção a um campeão sem parede na linha, o cast falha ou te engancha na parede errada e te joga no meio do time inimigo. Pré-planeje a parede antes de apertar o botão.
- **Channelar R na frente do time inimigo.** 5 segundos de windup (o tempo que você passa channelando antes de soltar) na linha de visão são 5 segundos de tiro ao alvo para qualquer CC point-and-click. Channele **R** da fog of war (zona escura sem ward que os inimigos não enxergam) ou atrás de uma parede, depois saia para soltar os projéteis no último frame.
- **Cancelar o tiro bônus quando ele deveria sair.** O segundo auto da passiva faz ~50% de dano reduzido, mas conta para o contador de 3 hits. Num trade de kill não cancele — o Move Speed vale menos do que fechar o proc do escudo.
- **Q de poke pelado sem ricochete em minion.** **Q** no alcance máximo sem nada no meio é a pior versão do feitiço. Mande sempre por uma wave ou por um minion com pouco HP para o alcance estender e o trajeto de volta ficar alinhado com o próximo campeão.
- **Going Rogue camouflage no aberto.** O ativo quebra em ~1 segundo se você não estiver em brush ou grudado numa parede. Em lane aberta não faz quase nada — guarde para um flank (entrar num fight pelo lado que o inimigo não está olhando) por tri-bush ou brush do river.

## Dica avançada

Faça a ![Avengerang](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/AkshanQ.png) **Q** ricochetear num tank da frontline para alcançar o carry de trás. Cada campeão atingido pelo bumerangue estende o alcance restante, então uma **Q** que sai no bruiser de frontline no limite da visão segue viagem pelo carry e volta para você, danando o mesmo alvo duas vezes no caminho de volta. Pratique o ângulo em custom contra bots: posicione-se para o bumerangue sair do primeiro campeão no ângulo que você quer para o segundo alvo, e o alcance encadeado vai chegar num backline que se julgava seguro atrás do time.
