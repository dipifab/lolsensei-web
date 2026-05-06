---
title: "Gragas Jungle Build & Guide — Patch 16.9"
slug: "gragas-jungle"
language: "zh-hans"
patch: "16.9"
champion: "gragas"
role: "jungle"
last_updated: "2026-05-02"
description: "League of Legends 英雄联盟 16.9 版本 Gragas 酒桶打野完整攻略:刷野路径与 gank 时机选择、AP 战士核心装与情境装、关键对位的应对思路、6 级 R 强势期节奏、新手常见错误规避,以及 R 闪等高阶连招技巧。"
quick_learn:
  champion_dd_id: "Gragas"
  difficulty: 2
  damage_type: "magic"
  champion_class: "AP Bruiser / Engage"
  abilities:
    - key: "P"
      name: "Happy Hour"
      description: "施放任何技能都会回复 Gragas 少量生命值 (内部冷却 5 秒)。让他在野区刷野时无需提前回城。"
      dd_spell_id: "Gragas_Passive"
    - key: "Q"
      name: "Barrel Roll"
      description: "把酒桶滚向指定位置。再次施放可引爆,或 4 秒后自动爆炸。伤害与减速随充能时间提升 — 等到峰值再引爆。"
      dd_spell_id: "GragasQ"
    - key: "W"
      name: "Drunken Rage"
      description: "引导 1 秒,获得 30% 减伤持续 3 秒,并强化下一次平 A 造成额外法术伤害。在 E 之前先开,用来吃野怪仇恨。"
      dd_spell_id: "GragasW"
    - key: "E"
      name: "Body Slam"
      description: "突进,撞到第一个敌人就停止,造成范围伤害并 stun 1 秒。是你唯一的 gap-close、唯一的硬控,以及最重要的开团工具。"
      dd_spell_id: "GragasE"
    - key: "R"
      name: "Explosive Cask"
      description: "扔出酒桶,把敌人从落点中心向外推开。用来 peel 队友、抓落单目标 pickoff,或者把敌方 carry 抛进我方前排里。"
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4629", name: "Cosmic Drive" }
    - { dd_id: "6653", name: "Liandry's Torment" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对位刺客或强 dive 阵容 (Zed, Talon, Kha'Zix):R 后的金身让队友有时间清场"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "对位单体法术 CC (Ahri 魅惑, Lissandra R, Morgana Q):护盾吃掉会打断 R 的控制"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "对位 3+ 硬控阵容 (Leona, Sejuani, Lissandra):韧性缩短 stun 时间,保住 W 的减伤"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "对位高魔抗或高回血阵容 (Soraka, Vladimir, Dr. Mundo):法穿 + R 触发的减疗区域"
    - dd_id: "3089"
      name: "Rabadon's Deathcap"
      against: "顺风局领先 3+ 件装时,改用 Q-E 秒掉脆皮,而不是继续打开团角色"
  base_combo: ["W", "E", "Q", "AA", "R"]
  win_condition: "在资源点团战时用 R 把敌方 carry (ADC、中单法师) 抛进我方前排;先 W 再 E 进场吃伤害,再用 Q 砸进堆叠点放大 Riftmaker 的持续 AP 燃烧。"
  weakness: "E 是唯一的 gap-close 与唯一的硬控。如果 miss 或在反野前用来刷野,你会有 12+ 秒既无法开团也无法逃跑。"
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
      - { dd_id: 8275, name: "Nimbus Cloak", icon_path: "perk-images/Styles/Sorcery/NimbusCloak/6361.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Ability Haste"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "主系选 Resolve 而不是输出系:Gragas 是冲进去开团的角色,要扛住敌方对他甩出来的整套 CC。Body Slam 命中 stun 时 Aftershock 触发,在被夹击的瞬间提供抗性。Font of Life、Conditioning、Revitalize 让他后期保持肉度。"
    secondary_rationale: "副系 Sorcery:Nimbus Cloak 在 Smite 或 Flash 后给一段移速爆发,让你能从奇怪的角度衔接 Body Slam;Transcendence 提供 Ability Haste 加击杀后平 A 重置,正好契合 Gragas 拉得长的 skirmish。"
    secondary_alternative: "如果对面有 4+ 个 AD 威胁 (Zed mid、Tryndamere top、Vayne bot),把副系换成 Precision,带 Triumph (击杀回血) 与 Legend: Tenacity (额外韧性,与 Mercury's Treads 叠加)。"
matchup_draft:
  pick_into:
    - examples: ["master-yi", "kindred", "graves"]
      archetype: "无硬控的脆皮发育型打野"
      reason: "Body Slam 的 stun 打断他们的风筝节奏:Master Yi 不能用 Alpha Strike 跳出,Kindred 跳不了平 A 重置的舞步,Graves 也无法重新走位。后续开团时用 R 把他们从我方 carry 身上推开。"
    - examples: ["karthus", "amumu", "warwick"]
      archetype: "长引导大招打野"
      reason: "Explosive Cask 能直接打断 Karthus、Amumu 与 Warwick 的 R。一次团战中击飞就能把他们整套团战收益作废,Gragas 只要把酒桶中心扔到正在引导的目标附近即可。"
    - examples: ["fiddlesticks", "shaco"]
      archetype: "依赖隐身的 ganker"
      reason: "W 的减伤吃下他们的开场爆发 (Fiddlesticks 的恐惧 + 吸血,Shaco 的背刺),同时 Body Slam 在他们施法中途 stun。他们的开团需要不被打断的施法时间 — Gragas 正好把这点夺走。"
  counterpicks:
    - examples: ["lee-sin", "viego", "vi"]
      archetype: "拥有多段 gap-close 的高机动 skirmisher"
      reason: "他们位移速度比 Gragas 单段 Body Slam 更快,在你 W 接 E 之前就把架打起来。而且 Viego 团战中夺取你方前排,会让你的开团瞬间变成 1v2。"
    - examples: ["kayn"]
      archetype: "带真伤的反坦克战士"
      reason: "Kayn (Rhaast) 造成最大生命值百分比真实伤害,无视 Gragas 的抗性以及 W 的减伤。后期堆肉的 Gragas 即使抗性拉满,在河道 1v1 也打不过他。"
    - examples: ["nidalee", "elise"]
      archetype: "远程消耗型打野"
      reason: "Nidalee 的标枪和 Elise 的蜘蛛形态可以从 Body Slam 射程外消耗 Gragas。他必须交 E 才能拉近距离 — 一旦交了 E,这两个打野就直接走开,不和你换。"
---

## 概述

Gragas 是一名肉度十足的 AP 战士打野 (一种通过出 AP 打输出,但同时撑出足够 HP 与抗性以扛在前排的战士)。他整盘的思路围绕一个大招展开:用 **Explosive Cask (R)** 把敌方 carry (敌方阵容的核心高输出英雄) 抛进自家队伍里。他的 **Body Slam (E)** 是唯一的 gap-close (能快速拉近距离的技能) 与唯一的硬控,所以会玩 Gragas 的人都在等 — 把野刷干净,把 **E** 留给 gank 或开团,**R** 起来后才彻底投入。**Happy Hour (P)** 提供天然续航 (战斗中被动回血),让他能不回城就把野区刷完;**Drunken Rage (W)** 给他一个 30% 减伤窗口,正好吃掉短时间小规模战斗里的第一波爆发。

胜利条件是 6 级时的第一次 pickoff — 用 **R** 把落单的敌人甩出位,送一个免费人头。从这一刻起,整支队伍围绕下一个 **R** 冷却节奏走:对面打野进你河道时上去糊脸,或在小龙 (一种击杀后给团队永久属性 buff 的中立野怪) 处建立团战,凭一次漂亮的 **R** flip 在团战开始前就抹掉敌方 ADC (下路远程射手,后期主要伤害源)。**R** 没起来就别开团 — 你是 enabler (替团队制造开战机会的角色),不是 1v1 的对决型选手。

## 推荐出装

**起始装:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**。标准远程惩戒打野起始装 — Gragas 的平 A 在起始装判定中算远程。

**核心装 (购买顺序):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — Hailblade 的任务进化件 (积累足够经验后约 3-4 分钟自动升级)。AP 爆发型宠物伙伴:每次施法后下一次平 A 加上额外法术伤害以及与 **Q** 叠加的减速。
2. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — 持续 AP 燃烧装。提供 omnivamp (对所有伤害类型都生效的吸血,而不只是平 A) 与战斗时间越长伤害越高的 ramp,完美契合 Gragas 拉得长的开团节奏。
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 固定法穿。如果对方有 3+ 个硬控技能,改成 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**。
4. ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — Ability Haste 加上对英雄造成伤害后的移速。机动性让你能在团战中绕场重新走位,在 cooldown 一回来就接出第二段 **E** stun。
5. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — Ability Haste 加上随战斗时间增长的最大生命百分比法术燃烧。在固定 AP 数值开始效率衰减时,惩罚对方的肉前排 (Sejuani、Ornn)。

**情境装:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 对位刺客或强 dive 阵容。**R** 之后立刻开主动来扛后续爆发。
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 对位单体法术 CC (Ahri 魅惑, Lissandra **R**)。护盾吃掉那个本来会打断你 **R** 的控制。
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — 对位高回血阵容 (Soraka, Vladimir, Dr. Mundo)。R 主动留下一片减疗区域,正好和你的击飞配合。
- ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 只有领先 3+ 件装,且要从开团位转成秒杀位时才出。

**鞋子:** 默认 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**。强 crowd control (CC) 阵容换成 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**;对面 4+ 名英雄打物理伤害换成 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**。

**加点顺序:** 主升 **E** (你的 stun 与主输出),副升 **Q** (清线与远程消耗),最后升 **W**。**R** 在 6、11、16 级各点一级。

**符文:** 主系 **Resolve** 带 **Aftershock**、**Font of Life**、**Conditioning**、**Revitalize**。副系 **Sorcery** 带 **Nimbus Cloak** 与 **Transcendence**。Stat shards: Ability Haste, Adaptive Force, Health Scaling。

## 关键对线

- **Lee Sin / Viego:** 高机动 skirmisher (打短时间反复对拼的打野)。6 级前他们能反过来打你。别强争第一只 Scuttle Crab (河道里的小螃蟹,击杀者获得视野与移速 buff),把野刷干净,围绕 6 级 **R** 慢慢 scaling (随等级与装备变强)。一次到位的酒桶 flip 立刻拉平对位。
- **Master Yi / Kindred:** 脆皮 (低 HP、无抗性) 发育打野。在小地图上跟着他们的动线;如果 Yi 在下半区你在上半区,满血走下来,6 级在中路找个 gank — 你的 **E** stun 会破坏他 Alpha Strike (无法选中的位移) 重置链。
- **Karthus:** 后期会变成团战大招的威胁。你的任务是用 **R** 打断他的引导 — 注意他 6 级出现的时间点,告诉中单你每次都打断他的大招。
- **Sejuani / Amumu:** 前压后排型坦克。别想自己一个人比开团速度;让他们先入场,然后用 **R** 把他们的 carry 从他们筑起的墙里抽出来。你的 **E** stun 与他们的 CC 串接,被锁住的人基本必死。
- **Nidalee:** 远程消耗 (从对手射程外丢出的 chip damage) 会惩罚你的开团准备时间。早出 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**;在自家野区里穿过战争迷雾 (地图上灰色未点亮的区域),gank 路上别在线上河道硬吃她的标枪。

## 强势期与胜利条件

- **3 级 (E 解锁):** 第一个 gank 窗口。走进对面没 **Flash** 的线,先在没视野时开 **W**,再用 **E** 翻墙打出突袭 stun。给搭档准备好后续。
- **6 级 (第一发 Explosive Cask):** 强势期。一发 **R** 就能把站太前的对线英雄抛进你方塔下或自家打野的 gank 包围里。回城前强行打一波好架。
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker 成型 (~13-15 分):** 第一波重要战斗节点。持续 AP 燃烧加 omnivamp 让你能在 skirmish 里拉长对拼;此时强开一波小龙团战。
- **3 件装 + 鞋 (~25-28 分):** 团战巅峰。Aftershock 加 ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** 加 ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** 加 ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** 让你成为地图上最稳定的开团英雄。和队友抱团,围绕资源点开团。

## 常见错误

- **反野要来时却用 E 刷野怪。** 1 级的 **E** 冷却 14 秒。如果你 Body Slam 一组 Krug,3 秒后对面打野进来,你既没逃生也没 stun。当小地图显示对方打野靠近你的野区边界时,把 **E** 留着。
- **R 当作起手伤害扔。** **R** 是击飞,不是伤害技能。没有目标落点规划就乱扔,会把对方阵容从你的后续攻势里散开。按下 **R** 之前先想清楚敌方 carry 会落到哪里 — 把他往你方阵容里甩,而不是甩出去。
- **主升 W 而不是 E。** **W** 不能给 Gragas stun、不能给 gap-close、也不能给清野速度 — **E** 三件全包。每一局都先升 **E**。
- **3 级前去 gank。** 没有 **E**,Gragas 抓不住任何不主动塔下扑你的目标。3 级前的 gank 直接跳过;用两组野的节奏刷野,3 级再用 **W-E** 连招开 gank。
- **Kayn 变身后单挑他。** Kayn-Rhaast 的真实伤害无视你的肉装属性。后期别在他的野区 1v1;围绕资源点和队友抱团。

## 进阶技巧

练好 **R 闪** 连招:在敌方 carry 脚下施放 **R**,然后在施法过程中按 **Flash** 把酒桶的着力点平移到自家队伍旁边。酒桶仍然从闪现后的位置爆开,所以一个本来站在安全距离的 carry 还没反应过来,就已经被砸进我方前排里。这是当前版本单人排位中价值最高的单一 Gragas 技巧,值得在排位实战之前花 30 分钟在练习模式里反复练熟。
