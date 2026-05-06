---
title: "Garen Top Build & Guide — Patch 16.9"
slug: "garen-top"
language: "zh-hans"
patch: "16.9"
champion: "garen"
role: "top"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Garen 德玛西亚之力上单完整攻略:起始装备选择、Juggernaut Bruiser 核心出装顺序、对线主流英雄的应对思路、关键等级与时间节点的强势期把握、新手常见错误规避,以及 R 处决优先级在团战中的高阶切入技巧。"
quick_learn:
  champion_dd_id: "Garen"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Juggernaut / Bruiser"
  abilities:
    - key: "P"
      name: "Perseverance"
      description: "脱战数秒不受伤害或技能命中时回复生命。决定打了就退的 hit-and-retreat 节奏。"
      dd_spell_id: "Garen_Passive"
    - key: "Q"
      name: "Decisive Strike"
      description: "瞬间提升移动速度并解除减速。下一次普攻沉默目标 1.5 秒并造成额外伤害。"
      dd_spell_id: "GarenQ"
    - key: "W"
      name: "Courage"
      description: "被动:击杀敌人叠加护甲/魔抗。主动:护盾 + 韧性,之后是减伤残留窗口。"
      dd_spell_id: "GarenW"
    - key: "E"
      name: "Judgment"
      description: "持续 3 秒对周围敌人造成物理伤害的范围旋转。主要的清线和持续 DPS 手段。"
      dd_spell_id: "GarenE"
    - key: "R"
      name: "Demacian Justice"
      description: "依据敌方英雄缺失生命值进行处决。对当前最 kill-fed 的敌人附加真实伤害。"
      dd_spell_id: "GarenR"
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
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3742", name: "Dead Man's Plate" }
    - { dd_id: "3053", name: "Sterak's Gage" }
  situational_items:
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "对线 AP 上单 (Mordekaiser, Rumble, Vladimir) — 魔法护盾被动救下长换血"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "对线双 AD 阵容;化解团战中惩罚脆皮的流血机制"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "对线 3+ AP 威胁;移速被动帮助你跑到团战点"
    - dd_id: "3161"
      name: "Spear of Shojin"
      against: "大幅领先并想要 Q 技能急速循环时的顶级第三件进攻装"
  base_combo: ["W", "Q", "AA", "E", "R"]
  win_condition: "用 Doran's Shield 加被动续航撑过对线期,叠到 Stridebreaker,然后在边路侧翼切入,用 R 在团战中处决最 kill-fed 的敌方核心。"
  weakness: "没有位移没有闪现,没有远程硬控。怕风筝 (Quinn, Vayne) 和远程定身 (Lissandra, Mordekaiser 拉拽)。没 W 层数还过线就会崩。"
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
      - { dd_id: 8242, name: "Unflinching", icon_path: "perk-images/Styles/Sorcery/Unflinching/Unflinching.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
---

## 概述

Garen 是一个近战 Juggernaut,价值来自持续的存在感:被动 **Perseverance** 在脱战时回复生命,**Decisive Strike (Q)** 让他可以解控贴近,**Courage (W)** 提供一段平稳的坦度窗口和被动叠加的抗性层数,**Judgment (E)** 是他的范围伤害和清兵工具,**Demacian Justice (R)** 依据缺失生命值处决脆皮,并对最 kill-fed 的敌人造成真实伤害加成。他是机械操作上最简单的英雄之一,这意味着所有技术天花板都集中在 **map awareness** (地图意识) 和 **wave management** (兵线管理) 上,而不是连招执行。

在上路他想要的是 **W** 主动期间的短换血,以及自己半边线上的整波兵。他从 1 级就强但绝不是无敌;没有位移也没有硬控,所以任何能随意脱战 (Quinn, Vayne) 或远程定身 (Lissandra, Mordekaiser 拉拽) 的对手,都会在你过线时拉爆对线期。

## 推荐出装

**起始装备:**Doran's Shield + 1 个生命药水。Doran's Blade 只在面对必须早期 all-in 卡兵的远程上单时才出。

**核心装备 (按顺序):**

1. **Stridebreaker** —— **Q** 减速、范围主动咬住被风筝目标,AD + HP 都有用。
2. **Plated Steelcaps** —— 大多数上路对手主要靠普攻。只在敌方 3+ 控制英雄时才出 Mercury's Treads。
3. **Dead Man's Plate** —— 与 **Q** 移速加成协同,撞击被动会在你常规 all-in 节奏中触发。
4. **Sterak's Gage** —— 应对爆发窗口的救命稻草,AD 加成让 **R** 处决线比基础阈值更高。

**情境装备:**

- **Maw of Malmortius** —— 对线 AP 上单 (Mordekaiser, Rumble, Vladimir)。
- **Death's Dance** —— 对线双 AD 阵容 (化解处罚脆皮的流血机制)。
- **Force of Nature** —— 对线 3+ AP 威胁;移速被动帮你跑到团战点。
- **Spear of Shojin** —— 大幅领先并想要技能急速循环时的顶级第三件进攻装。

**鞋子:**默认 Plated Steelcaps。Renekton+Lissandra+重控阵容选 Mercury's Treads。

**技能加点:**先主 **E** (DPS 和清线),次主 **Q** (减速 + 工具性),最后主 **W** (被动不靠点数也成长良好)。**R** 在 6、11、16 级点。

**符文:**主系 **Precision** 配 **Conqueror**、**Triumph**、**Legend: Alacrity**、**Last Stand**。副系 **Resolve** 配 **Second Wind** + **Unflinching**,或者轮换地图上想卡鞋子时间时副系 **Inspiration** 配 **Magical Footwear** + **Cosmic Insight**。

## 关键对线

- **Darius:**1 级输,Stridebreaker 后只要躲掉他的 **E** 拉就赢。出 Doran's Shield,围绕 **Q** 等级解控打。
- **Fiora:**只要不被她 vital,6 级前你硬克她。开 **W** 主动换血以否定她的招架价值,然后脱战。
- **Quinn:**操作对线;她用 **Q** 致盲 + **E** 跳跃风筝。带 Teleport,放掉第一波 CS,从第 4 波开始去中路游走。
- **Vayne 上单:**手感最差的对线。1 级出 Plated Steelcaps,带 Doran's Shield + Second Wind,围绕打野打 —— 6 级后你赢不了 1v1 换血。
- **Mordekaiser:**节奏慢,等死亡领域的强势期。短换血,在他的 **W** 进入冷却时打 **Q** + **E**,赶在他第二件装备前出 Maw of Malmortius。

## 强势期与胜利条件

- **2 级:****Q** + **E** 解锁真正的 all-in。如果他们把兵线推到你这边而你的打野在上半区,这就是你的击杀窗口。
- **6 级:****Demacian Justice** 让你能终结之前能走掉的低血敌人。盯住敌方召唤师技能;没有 Flash,任何近战上单都在处决范围内。
- **Stridebreaker 时机 (~ 11 分钟):**兵线控制权倒向你。根据地图状态选择慢推、卡兵或 split push。**Q** + 主动是对抗 gank 的拉近距离保险。
- **后期一波团条件:**有 **R** 对最 kill-fed 敌人的加成和 Sterak's Gage,你成为能单杀核心的侧翼威胁。你的工作是在战争迷雾中预转 **E**,在他们被保护前用 **R** 落地。

## 常见错误

- **W 层数低时还往前压。****Courage** 被动按层提供抗性;如果是 0 层 (例如刚复活),先在小兵身上叠回来再打长换血。
- **用 R 当起手。****R** 是用来处决的,不是用来开团的。开手用就等于让施法时间提示对手脱战,你也丢掉击杀计时。
- **静止兵线上开 E。**3 个小兵 2 下普攻就能清掉,这时旋转只是浪费蓝并让对手看清你的冷却循环。**E** 留给换血。
- **忘记 Q 的沉默。****Q** 沉默 1.5 秒。永远在敌方读条中途用 Q 接近 (Lulu 的变形、Karma 的护盾、Lissandra 的 R) —— 沉默会打断施法。

## 进阶技巧

当一个发育起来的敌方 carry 触发你的 **R** 优先目标时,即使他们的辅助开了护盾,你也可以在团战中 flash-**R** 命中:**R** 的处决伤害对优先目标是真实伤害,而大部分护盾值在你施法解算前已经被全队的爆发消耗完。把 Flash 留给这个操作;由此打出的一波团相当于 2 次小龙团的价值。
