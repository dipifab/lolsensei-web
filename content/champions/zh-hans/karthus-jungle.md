---
title: "Karthus Jungle Build & Guide — Patch 16.9"
slug: "karthus-jungle"
language: "zh-hans"
patch: "16.9"
champion: "karthus"
role: "jungle"
last_updated: "2026-05-05"
description: "英雄联盟 16.9 版本 Karthus 卡尔萨斯打野完整攻略:开局 smite 路线、Defile 持续刷野、6 级全图 R 抢人头、关键对位克制思路、强势期节奏掌控、新手常见错误规避以及利用死亡被动的自杀式开团等进阶操作技巧。"
quick_learn:
  champion_dd_id: "Karthus"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Apex Jungler"
  abilities:
    - key: "P"
      name: "Death Defied"
      description: "卡尔萨斯死亡后会进入 7 秒灵魂形态,继续无消耗施放 Q/W/E。让他能在死后继续打完团战。"
      dd_spell_id: "Karthus_Passive"
    - key: "Q"
      name: "Lay Waste"
      description: "短延迟的指向性范围爆炸技能。只命中一个敌人时造成双倍伤害。Skill expression:预判走位并将单体目标隔离开。"
      dd_spell_id: "KarthusLayWasteA1"
    - key: "W"
      name: "Wall of Pain"
      description: "宽阔的墙体,削减穿越者的魔法抗性并施加减速。可作追击工具、gank 控锁,或对扑入后排的 diver 进行 peel 保护。"
      dd_spell_id: "KarthusWallOfPain"
    - key: "E"
      name: "Defile"
      description: "切换型光环,在卡尔萨斯周围每秒造成魔法伤害,同时持续消耗法力。是他刷野与团战 DPS 的真正引擎,每个野怪营地都要保持开启。"
      dd_spell_id: "KarthusDefile"
    - key: "R"
      name: "Requiem"
      description: "全图大招,3 秒读条后对地图上每名敌方英雄造成大量魔法伤害。跨地图狙杀工具与死后清场利器。"
      dd_spell_id: "KarthusFallenOne"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
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
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "4628", name: "Horizon Focus" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对线前期入侵型打野(Lee Sin、Xin Zhao、Elise)——金身弥补零位移弱点"
    - dd_id: "3135"
      name: "Void Staff"
      against: "敌方核心目标购买第一件魔抗装时换上(Mercury's Treads 也算)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "对手有单体魔法控制起手(Ahri R、Lissandra R、Nautilus hook)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "对手是堆叠治疗的阵容(Soraka、Vladimir、Yuumi、Dr. Mundo)"
  base_combo: ["W", "E", "Q", "R"]
  win_condition: "升到 6 级,刷野速度比对面打野更快,用 R 在跨地图收掉残血目标。两件装备后,光是 Defile 就能在任何 5v5 团战中融化对面的后排。"
  weakness: "没有位移、没有逃生、前期单挑极弱。6 级前被反野或入侵就会被持续压制。机动型刺客和强控打野能在 Liandry's 成型前击垮你的刷野节奏。"
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9105, name: "Legend: Haste", icon_path: "perk-images/Styles/Precision/LegendHaste/LegendHaste.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision 主系:Conqueror 在 Defile(每秒结算的切换光环)上叠层很快,把长时间小规模交战转化为额外 AP 与回血。Triumph 在击杀参与时回复生命。Legend: Haste 缩短 R 冷却。Last Stand 奖励残血灵魂形态时段。"
    secondary_rationale: "Sorcery 副系:Manaflow Band 解决 Defile 每秒抽法力造成的前期蓝量问题。Transcendence 把技能急速推过 40% 上限,使 Q 在两波兵之间更快回转,R 也能更频繁地循环使用。"
    secondary_alternative: "面对入侵能力极强的敌方打野(Lee Sin + Pyke 漫游、Elise + 强控辅助)时,把 Sorcery 换成 Resolve,带 Second Wind(受伤后回血,有助于挺过 3 级入侵)和 Overgrowth(随击杀野怪累积额外生命)。"
matchup_draft:
  pick_into:
    - examples: ["nasus", "veigar", "kassadin", "kayle"]
      archetype: "前期存在感弱的后期发育型英雄"
      reason: "他们需要 25+ 分钟才能成型;Karthus 在 6 级就已经赢小规模交战,并能用 R 阻断他们的单刷大龙。用节奏压制——逼龙、在他们抵达强势期前结束比赛。"
    - examples: ["fiddlesticks", "amumu", "sejuani"]
      archetype: "无 3 级入侵的慢发育农场型打野"
      reason: "他们的全清速度和 Karthus 持平,但 Karthus 拥有全图 R,能把对面的 gank 变成 2 换 1:即便对面打野杀掉了你的队友,R 也能在对方打野回程之前收掉他们的线上英雄。"
    - examples: ["yuumi", "soraka", "senna"]
      archetype: "无位移的后排发育型英雄"
      reason: "全图 R 把他们的走位失误转化为资源点刷新时的击杀。他们能远程提供输出,却躲不开锁定在缺闪现或缺大招目标上的全图狙杀。"
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "拥有硬控的前期入侵型打野"
      reason: "他们会在 2-3 级,Defile 蓝量曲线还没起来时就闯进 Karthus 的野区。Karthus 没有逃生、没有位移,Q 的延迟也救不了他被 Lee Sin Q + W 连招或 Elise 的蜘蛛降落抓住。一次入侵失败就足以毁掉整局。"
    - examples: ["kha-zix", "rengar", "shaco"]
      archetype: "潜行或爆发型刺客打野"
      reason: "他们对一个零防御目标用孤立伤害开打;即便 Zhonya's Hourglass 也只是在 1v1 中拖延必死结局。Karthus 还没来得及叠 Conqueror 或进行有意义的换血就已倒下。"
    - examples: ["nocturne", "warwick"]
      archetype: "切视野型 ganker 与追踪型打野"
      reason: "Nocturne 的 R 切断了团队视野,使 Karthus 看不到对手对自家后排的开团;Warwick 的血迹追踪把跨地图 R 的读条变成被强行抓死。Karthus 需要视野才能安全读条 R,而这两位正好剥夺它。"
---

## 概述

Karthus 打野是教科书般的**顶尖打野(apex jungler)**:个人上限属于游戏中最高的几个英雄之一,但下限同样属于最低的几个之一。他的技能组围绕两个核心思想构建。**Defile (E)** 是一个切换型光环,在卡尔萨斯周围每秒结算魔法伤害并消耗法力,是他刷野的引擎:法力问题一旦解决,他刷野速度几乎是全场最快。**Requiem (R)** 是一个能命中地图上所有敌方英雄的全图大招,把任何位置的走位失误变成击杀——这是打野在合适时机能做的最有价值的事。

游戏计划即使按打野标准来看也很僵硬。开局全清前三个营地(根据红蓝方决定 红 → krugs 或 蓝 → gromp),全程开启 **E** 进行刷野,回城购买 **Liandry's Torment** 的合成件,从 6 级开始一边在小龙和 grub(虚空峡谷小坑里给金币和团队增益的小型中立野怪)周围打小规模交战(skirmish 指每方 1-3 名玩家围绕一个野怪营地或河道资源点的短暂交火),一边寻找跨地图的 R 目标。Karthus 既无逃生也无位移,所以 1 分 30 秒在自己野区入口插眼并不是可选项——一波你没看见的入侵就是白送给机动打野的人头。回报在 6 级之后:Karthus 是少数死后真的比活着更可怕的英雄之一,因为他的被动 **Death Defied** 能让他在血量归零之后再施法 7 秒。

## 推荐出装

**起始装备:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade**(远程打野默认起手——提供加快刷野并产出金币的 smite 宠物)+ ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**。

**核心装备(按顺序):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** —— Hailblade 的任务进化(累积足够野区经验后,大约第 3-4 分钟自动进化)。AP 爆发型打野的默认伙伴:在施法后下一次普攻附带额外的魔法伤害触发(proc 是由特定条件触发的被动效果——这里指施放任意技能后给下次普攻附魔)。与 Q 在孤立目标上的伤害相辅相成。
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** —— 第一件成型装。基于百分比生命的灼烧针对资源点(小龙、大龙、峡谷先锋)的高血量池极为有效,并叠加在每一次 Defile 跳伤之上。这件装备能扭转你的刷野速度,并让你从第 8 分钟起就有资格争夺小龙。
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** —— 固定法术穿透,核心装备之间最廉价的强势期。
4. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** —— 每次技能命中触发的减速能补上 Karthus 最大的短板(无追击、无逃生)。让你能粘住正在风筝你的目标,使 Defile 持续叠 Conqueror,并把死后被动变成稳定的清场工具。
5. ![Horizon Focus](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4628.png) **Horizon Focus** —— 标记被远距离技能命中的敌人,并附带一个伤害放大效果。与远距离的 Q 和 Wall of Pain 完美契合,标记能帮助你穿过战争迷雾(fog of war 指你方视野外未被显示的区域)锁定全图 R 目标。
6. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** —— 后期成长格。除非你已经领先 4+ 个人头,否则放在最后买;领先时则提前出以滚雪球(snowball 指早期优势不断扩大:击杀 → 金币 → 装备 → 更多击杀)。

**情境装备:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** —— 对前期 diver(Lee Sin、Xin Zhao、Hecarim、Diana)。一旦突进连招越过你方前排(那些站在前面通常替你承伤的坦克和战士),金身就是 Karthus 唯一的答案。也允许你在金身中安全读条 R。
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** —— 任何核心目标买下第一件魔抗装的瞬间换上。![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**(魔抗鞋)算作那第一件 MR 装备。
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** —— 对手有可预读的魔法控制起手(Ahri R、Lissandra R、Nautilus hook)。护盾挡掉第一个技能,避免你在 R 落地前被秒杀。
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** —— 对手是堆叠治疗的阵容(Soraka、Vladimir、Yuumi、Dr. Mundo)。重伤效果将敌方治疗减半,Defile 的伤害才能真正生效。

**鞋子:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** 是默认。当对方有 3+ 个魔法伤害的硬控威胁时,换 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**。

**技能加点:** 优先升 **Q**(单体爆发与清线,且是唯一随等级强力成长的技能),其次 **E**(提高 Defile 的每秒伤害并支持法力消耗),**W** 最后升满。**R** 在 6、11、16 级各点一级。

**符文:** 主系 **Precision** 配 **Conqueror**、**Triumph**、**Legend: Haste**、**Last Stand**。副系 **Sorcery** 配 **Manaflow Band** 与 **Transcendence**。

## 关键对线

- **Lee Sin:** 6 级前每场 1v1 都会输。他的 Q + W 连招直接跳过你的 Q 延迟。6 级前避免单独小规模交战,改为全清,并在 1 分 30 秒在自家野区两个入口插眼。
- **Master Yi:** Wit's End 成型后他在 1v1 中是绝对克制。把战斗带到狭窄的河道(小龙坑、大龙坑)打 5v5,他的 W 净化救不了他被持续 Defile + R 消磨。如果他成型很快,把 Zhonya's Hourglass 提前到第二件。
- **Karthus 镜像:** 由发育节奏与 R 的克制力决定。谁在 6 级时领先一个营地刷野,谁就能赢得第一波 R 比拼。除非能锁定击杀或 smite,否则别浪费 R——一次浪费的 R 会让镜像 Karthus 在资源点控制上多领先整整一分钟。
- **Hecarim:** 势均力敌的对位。他在追击上压你,但团战时会聚集进 Defile 范围。在他冲锋的路径上 W 能减速他,把他从自己的开团中拽出来,即便他杀了你,你的死后被动也能完成清场。
- **Sejuani / Amumu:** 优势局。他们靠把敌人聚成一团来开团——正是 Defile 想要的形状。借开团回开团:对方大招套到你方时,你开 E 走进去,看着每个被点燃的敌人融化。

## 强势期与胜利条件

- **6 级 (R 解锁):** 第一个全图强势期。**Requiem** 把全图任何残血敌人变成击杀。从这一刻起,在敌方中单回城前 ping 他,然后在他的回城读条上压 R——零风险白嫖击杀。
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment 成型 (~ 9-11 分钟):** 刷野速度反转,资源点 DPS(DPS = damage per second,这里指对小龙/大龙/grub 血量池的每秒伤害)翻倍。从这一刻起,你应该是发起小龙战的一方,而不是反应的一方。
- **两件装备 + 鞋子 (~ 18-22 分钟):** 仅靠 Defile 就能跳出可观伤害;在任何抱团战斗中 Conqueror 叠层很快,R 锁定清场。这是你最强的小规模交战窗口。
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap 成型 (~ 26-30 分钟):** 没出过任何魔抗装的脆皮会被 R 一发秒。强行打抱团资源点战——大龙、灵魂小龙、Atakhan(Atakhan 是大约 14 分钟出现的后期中立 BOSS,把它的刷新当作强制 5v5 团战)。

## 常见错误

- **Death Defied 时慌乱。** 大多数新手把死后 7 秒花在远离自己尸体上。正确的玩法是带着即将死亡的觉悟去开一场残血战:你的死亡是伤害循环的开始,不是结束。灵魂形态的 Q-Q-Q-E 通常比你活着时打出更多伤害。
- **乱放 Q。** Lay Waste 在击中单个孤立目标时造成双倍伤害。如果你把 Q 砸进有三只小兵加一名线上英雄的兵线,伤害会被压在低值。用 W 把目标拽出来,或等到一个单独目标暴露时再 Q 在预判点。
- **抢人头放 R。** 在团战中央放大就是浪费:每个敌人都已在 Defile 范围内。把 R 留给跨地图狙杀(把 R 当作团战后对残血走脱敌人的远程低风险终结技)或死后清场。R 是"团战之后",不是"团战之中"。
- **跳过自家野区视野。** 1 分 30 秒在三角草和像素草各放 Stealth Ward。Karthus 没有逃生;一波你没看见的入侵就是白送给机动打野的人头。
- **没 R 还贪 smite。** 小龙和 grub 的血量随时间成长,你的 smite 不会。在 R 没冷却好的情况下与对面打野争夺,你会输掉 smite 比拼也输掉资源点。

## 进阶技巧

练习**自杀式开团**。当你的队伍承诺一场你正面赢不下的 5v5 时,开着 Defile 走进对方后排,做好赴死的准备。血量归零的瞬间,Death Defied 给你 7 秒的免费无消耗施法时间——而对方前排会停止攻击你的尸体,因为已经没有可打的目标了。在这段灵魂形态窗口中,对你能触及的最低血量敌人疯狂 Q 输出,逃跑者用 R 收尾。做得对,先死的 Karthus 能把不可能赢的团战变成 ace。
