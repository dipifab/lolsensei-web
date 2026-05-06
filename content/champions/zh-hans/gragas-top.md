---
title: "Gragas Top Build & Guide — Patch 16.9"
slug: "gragas-top"
language: "zh-hans"
patch: "16.9"
champion: "gragas"
role: "top"
last_updated: "2026-05-02"
description: "League of Legends 英雄联盟 16.9 版本 Gragas 酒桶上单完整攻略:起手装备、AP 战士核心出装、关键对线应对、强势期节奏把握、新手常见错误以及 R-Flash 闪现进阶连招技巧。"
quick_learn:
  champion_dd_id: "Gragas"
  difficulty: 2
  damage_type: "magic"
  champion_class: "AP Bruiser / Skirmisher"
  abilities:
    - key: "P"
      name: "Happy Hour"
      description: "每次施放技能都会少量回血(内部冷却 5 秒)。线上免费 sustain,让他在长期 poke 对线中占据优势。"
      dd_spell_id: "Gragas_Passive"
    - key: "Q"
      name: "Barrel Roll"
      description: "向指定地点滚酒桶。再次施放引爆,或 4 秒后自动爆炸。伤害与减速随蓄力时间增加 — 等满蓄力再引爆做 poke 交换。"
      dd_spell_id: "GragasQ"
    - key: "W"
      name: "Drunken Rage"
      description: "1 秒蓄力:获得 3 秒 30% damage reduction,下一次普攻附带额外法术伤害。线上交换的核心工具。"
      dd_spell_id: "GragasW"
    - key: "E"
      name: "Body Slam"
      description: "撞到第一个敌人停下,造成 AOE 伤害并眩晕 1 秒。是切入、逃生和唯一硬控 — 绝不可用于清线。"
      dd_spell_id: "GragasE"
    - key: "R"
      name: "Explosive Cask"
      description: "扔出酒桶把敌人从中心炸开。上路用来把对线英雄掀进打野 gank 圈,或在塔下 dive 时 peel 队友。"
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
      against: "对位 AD 刺客或分推决斗者(Camille、Fiora):dash 后用金身否决他们的 execute 窗口"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "对位单体法术控制(Lissandra R、Malzahar 压制):法术护盾挡住关键 lockdown"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "对位 AD 阵容(Renekton + Kha'Zix、Aatrox + Lee Sin):物理减伤价值高于韧性"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "对位高回复阵容(Aatrox、Vladimir、Dr. Mundo):法穿加 R 上的减疗区域"
  base_combo: ["W", "AA", "Q", "E"]
  win_condition: "用 Happy Hour 与 W 减伤压过线上近战战士;13 分钟左右做出 Riftmaker 后,在打野 gank 时 R 把敌人掀进圈,滚雪球拿下塔或翻盘小龙团。"
  weakness: "远程炮台与远程上单(Vayne、Quinn、Teemo、Kennen)在 Q 距离外不断消耗。E 不在线时既无切入也无逃生 — 拿 E 去骚扰等于自杀线。"
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
    primary_rationale: "主系 Resolve 而非 Sorcery:Gragas 是近战交换流,需要的是血量而非 burst。Aftershock 在 Body Slam 命中眩晕时触发,提供抗性。Demolish 把强制回家变成塔皮,Conditioning 与 Revitalize 提供后期收益。"
    secondary_rationale: "副系 Sorcery:Manaflow Band 让 Q poke 在整个对线期不缺蓝,Transcendence 把 Ability Haste 推过 Cosmic Drive 的强势期阈值,在中期边路缩短 E 与 R 的冷却。"
    secondary_alternative: "对位远程上单(Vayne、Teemo、Quinn)线上回复比伤害更重要时,把副系换成 Inspiration,带 Biscuit Delivery(免费药水)与 Time Warp Tonic(药水回复加移速),走治疗续航流。"
matchup_draft:
  pick_into:
    - examples: ["darius", "garen", "sett"]
      archetype: "无位移近战战士"
      reason: "他们必须走上前补刀,Gragas 的 Q-W-AA poke 把他们消耗到 all-in 距离之外,W 减伤又削弱他们 6 级前的开战 commit,Gragas 反交换占优。"
    - examples: ["kennen", "vladimir"]
      archetype: "脆皮 AP 上单"
      reason: "Drunken Rage 的固定减伤吸收 Kennen 的眩晕爆发连招与 Vladimir 的 Q 消耗。对手资源压在交换窗口里时,Gragas 用 E-AA-Q 反击。"
    - examples: ["mordekaiser", "ryze"]
      archetype: "技能枪与读条法师"
      reason: "Body Slam 打断 Mordekaiser 的 Q 蓄力与 Ryze 的连招读条,然后 Gragas 靠 W 减伤撤出。一旦施法循环被打断,两者都失去线权。"
  counterpicks:
    - examples: ["vayne", "quinn", "teemo"]
      archetype: "远程上单"
      reason: "他们在 Q 距离外平 A 并躲开 E commit。没有持续切入手段,Gragas 在 3 级前就被打到半血,被迫回家。"
    - examples: ["fiora", "camille"]
      archetype: "带真实伤害与 execute 压制的战士"
      reason: "Fiora 的弱点点燃造成无视抗性的真伤;Camille 的 R 把 Gragas 隔离做百分比真伤 execute。Gragas 的坦度对二者 1v1 都没用。"
    - examples: ["malphite", "ornn"]
      archetype: "硬开团坦克上单"
      reason: "他们的控制链长度超过 Aftershock 窗口。可以用自己的开团对冲 Gragas 的开团,后期靠自带抗性加成在 scaling 上反超。"
---

## 概述

Gragas 上单是 AP 战士(走 AP 出伤害,但堆够血量扛住前排被开团)流派,通过 poke(在安全距离消耗对方)与 sustain(战斗中被动回血)赢下对线,然后过渡到围绕 **Explosive Cask (R)** 的团战开团角色。**Happy Hour (P)** 让他每次释放技能都会被动回血,所以 Q → W → AA(普攻)的交换节奏只放对方的血,自己却不掉。**Drunken Rage (W)** 是 30% damage reduction 窗口,是他最被低估的工具,因为它能让他吸收对方的 all-in(全力出伤),再用免费的 **E** 眩晕反打交换。

游戏思路:6 级前用 Q poke 压制近战线,6 级后寻找 **R** 翻飞机会,把对方上单掀进打野 gank 圈或自家塔下。之后凭 **Riftmaker** 与 **Cosmic Drive** 滚雪球(随装备等级变强),25 分钟左右合团,担任队伍的主开团位(开启战斗的英雄)。避开远程对线 — 万一被锁定,就保守打,塔下 Q 补刀,让打野来抓。

## 推荐出装

**起手装备:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + 2 个 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**。标准回复起手,能扛住远程对位的 Q poke 直到做出 Riftmaker。

**核心装备(按顺序):**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — 持续 burn AP 装备,带 omnivamp(对所有伤害都生效的吸血,不仅限于普攻)。Gragas 拉长的交换让它成为他单件最强的 spike。
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 韧性减少眩晕时长。上路默认鞋,因为绝大多数对位至少带一个控制威胁(Renekton 眩晕、Camille 束缚、Sett 眩晕)。
3. ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — Ability Haste 加上对英雄造成伤害后的 Movement Speed 加成。让你绕着战斗走,在第一个 **E** 冷却结束前再打中第二个眩晕。
4. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — Ability Haste 加上按最大生命百分比的法术 burn,战斗越长收益越高。面对两个或更多前排的队伍出第四件。
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 后期乘数。队伍合团并选择团战 burst 而非分推时,作为第五件出。

**情境装备:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 对位 AD 刺客(Zed、Talon 侧翼)或分推决斗者(Camille、Fiora)。**R** 后立刻按主动金身,封掉对方的 execute 窗口。
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 对位单体法术控制(Lissandra **R**、Malzahar 压制)。法术护盾挡住会打断你 **R** 翻飞的关键 lockdown。
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 对位 AD 阵容(Renekton + AD 打野)。没有重大控制威胁时替代 Mercury's Treads。
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — 对位高回复阵容。R 主动效果会沿击退路径铺一片减疗区。
**鞋子:** ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** 默认。AD 阵容游戏换 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**;若线上偏向秒杀打法、想转伤害优先,可换 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**。

**技能加点:** **E** 主升(眩晕与主要伤害),**Q** 副升(poke 与清线),**W** 最后升。**R** 在 6、11、16 级各加一点。

**符文:** 主系 **Resolve** 配 **Aftershock**、**Demolish**、**Conditioning**、**Revitalize**。副系 **Sorcery** 配 **Manaflow Band** 与 **Transcendence**。Stat shards:Adaptive Force、Adaptive Force、Health Scaling。

## 关键对线

- **Darius:** 只在 **W** 可用时上前补刀;每波兵之前用 Q 消耗他。他 6 级前的 all-in 极其凶狠 — 千万不要在 Aftershock-bait 站位下被他 E-Q 连招命中。
- **Renekton:** 1-2 级他的怒气眩晕能滚雪球血量优势,所以避免交换。3 级用 **W-E** 反开做对等;一旦他放出 W 眩晕 commit,你的减伤能吃掉爆发,双方平手。
- **Vayne:** 硬克制(专门挑出来在线上压制你的英雄)。塔下用 Q poke,提早(3-4 级)请打野来 gank,并规划 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** 急速合成,削弱她翻滚后的强化普攻(她的 Q 让她翻滚并装填弩箭)。
- **Camille:** 她做出第一件核心装备(11-13 分钟左右)后,避免边路 1v1;她的 R 用墙把你与队友隔开做百分比 execute。和队伍合团强制团战,用 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** 否决她 R 的输出窗口。
- **Malphite:** 6 级前持平,6 级后被硬 scaling — 他的 **R** 与你互对冲,叠护甲又化掉你的 AP。他大招在冷却时去中路用 **R** 翻人,这是你扭转对线的唯一窗口。

## 强势期与胜利条件

- **3 级(E 解锁):** 第一个 all-in 窗口。**W** 减伤已开、**E** 眩晕就绪,可以惩罚任何走得太前补刀的近战敌人。
- **6 级(首个 Explosive Cask):** 强势期。配合打野 gank 设置 **R** 翻飞 — 把敌方上单从他的塔线翻到河道你这一侧,免费拿一杀。
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker 完成(约 13-15 分钟):** 翻线 spike。持续 burn 加 omnivamp 把拖长的交换变成净回血;不在被克制对位时主动 1v1。
- **3 件 + 鞋子(约 24-28 分钟):** 团战巅峰。![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** + ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** + ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** 让 Gragas 几乎不死的开团威胁。和队伍合团打资源团。

## 常见错误

- **用 E 清线。** **E** 是切入、逃生与唯一眩晕。撞兵推线后,对线英雄就有 14 秒的免费 all-in 窗口。推线靠 **Q**,**E** 只用于开团与逃生。
- **把 R 当成开团伤害乱扔。** **R** 把敌方阵型炸散。如果没有落点规划就放,等于把对方上单炸离我方的 follow-up。按 **R** 之前一定要想好目标会被掀到哪里 — 掀向我方阵营或我方塔,绝不掀向对方前排。
- **W 不在线时硬交换。** 任何正经的 Gragas 交换都从 **W** 起手。没有 30% damage reduction 窗口,任何近战战士都打不过。**W** 在冷却时只补刀并脱战。
- **单 R 强行抓人。** 没有队友 follow-up 时单独把 **R** 飞进敌阵就是送。酒桶能位移目标,但 Gragas 一个人杀不掉满血 carry — 它是开团辅助,不是单挑结尾。
- **W 主升而非 E 主升。** **W** 既不给眩晕,也不给切入,也不给清线速度 — **E** 三样都给。每局都先主升 **E**。

## 进阶技巧

练好 **R-Flash 闪现连招**:**R** 落到敌方对线英雄脚下,然后在施法瞬间 **Flash** 把酒桶中心位移到我方队伍或塔旁。酒桶从闪现后的位置爆开,所以站在自家塔线的目标可以被掀到我方塔下,免费拿一血。这是 Gragas 操作上限最高的机制,在排位单双之前最好先在练习模式刷足练习量。
