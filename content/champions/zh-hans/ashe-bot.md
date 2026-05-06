---
title: "Ashe ADC Build & Guide — Patch 16.9"
slug: "ashe-bot"
language: "zh-hans"
patch: "16.9"
champion: "ashe"
role: "bot"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Ashe ADC 下路完整攻略:Frost Shot 风筝起手思路、marksman 核心出装顺序、关键对线应对、强势期节奏、新手常见错误,以及一条进阶 flash R 终结技巧。"
quick_learn:
  champion_dd_id: "Ashe"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Marksman / Utility"
  abilities:
    - key: "P"
      name: "Frost Shot"
      description: "每次普攻为目标挂上减速。暴击不打额外伤害,而是改为施加更强的 slow。这是 Ashe 风筝(边后退边攻击)的基础。"
      dd_spell_id: "Ashe_Passive"
    - key: "Q"
      name: "Ranger's Focus"
      description: "用普攻积累层数。满层后激活获得额外攻速,每次 AA 变成多箭齐发并造成强化伤害。主 DPS 按键。"
      dd_spell_id: "AsheQ"
    - key: "W"
      name: "Volley"
      description: "正前方 1200 射程的箭锥。每个敌人只会被一支箭命中,并附带 Frost Shot 减速。线上消耗与 trade 的核心工具。"
      dd_spell_id: "Volley"
    - key: "E"
      name: "Hawkshot"
      description: "派出一只鹰飞向地图任意一点,提供 5 秒 vision (透过战争迷雾的视野)。2 次充能。用于侦查资源点,不是输出技能。"
      dd_spell_id: "AsheSpiritOfTheHawk"
    - key: "R"
      name: "Enchanted Crystal Arrow"
      description: "全图 skillshot (非指向技能,直线飞行)。眩晕第一个命中的英雄;飞行越远,眩晕越久 (最高 ~3.5 秒)。"
      dd_spell_id: "EnchantedCrystalArrow"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "3087", name: "Statikk Shiv" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3031", name: "Infinity Edge" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "对位堆 HP/armor 的英雄 (Cho'Gath, Sion, Malphite, Ornn) — 百分比护甲穿透让 AA 重新打出真伤"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "对位高回血阵容 (Soraka, Vladimir, Aatrox) — 施加 Grievous Wounds (将敌方治疗效果减半)"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "对位刺客或 diver (Zed, Kha'Zix, Talon) — Ghost 被动让你在风筝时穿过单位"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "对位强 poke 或 burst 阵容 — 大量 lifesteal 回血 + 过量护盾缓冲"
  base_combo: ["W", "AA", "Q", "AA"]
  win_condition: "团战中持续叠 Frost Shot 减速,在 frontline 后用 Q 强化 AA 风筝,并用跨地图 R 收掉落单目标,白嫖资源点控制权。"
  weakness: "全 marksman 中普攻基础移速最慢。没有位移、没有走位技 — 一旦 diver 或刺客贴到近身,如果 support 无法 peel,Ashe 会被秒。"
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
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["vayne", "twitch", "kalista"]
      archetype: "无早期消耗的短手 marksman"
      reason: "Ashe 的 W 射程 1200 并附带 Frost Shot 减速;在对方 500-550 普攻范围之外白嫖消耗,每一次靠近都是 Ashe 这边赢的 trade。"
    - examples: ["kog-maw", "senna"]
      archetype: "没有逃生的发育型 carry"
      reason: "跨地图的 R 在资源点刷新或泉水回程窗口直接收掉他们。技能组里没有位移,无法躲开从战争迷雾里出来的箭。"
    - examples: ["ornn", "sejuani"]
      archetype: "缺少机动突进的慢速坦克前排"
      reason: "Ashe 用 W + 普攻持续减速前排,把团战拖到 DPS 装收掉对方后排为止。她和 support 一起风筝时,坦克根本贴不上来。"
  counterpicks:
    - examples: ["caitlyn", "jhin", "varus"]
      archetype: "射程更远且有 poke 的 marksman"
      reason: "Caitlyn 普攻 650,Jhin 第四发 750,Varus W 在 925 叠层 — 都从 Ashe 的 600 普攻外日常消耗,每一波都让她掉血,而自己根本不进入 W 范围。"
    - examples: ["lucian", "tristana"]
      archetype: "高机动带位移的 marksman"
      reason: "Lucian 的 E 与 Tristana 的 W 通过瞬间位移直接无视 Ashe 的减速。他们能拉近距离,而不必像别的 ADC 一样付风筝税。"
    - examples: ["pyke", "leona", "nautilus"]
      archetype: "硬控强先手 burst engage 辅助"
      reason: "Ashe 没有位移也没有护盾来挣脱被锁定。Leona Q 或 Nautilus Q 命中后,她还来不及 W 反打就被强行带走 — 被晕住时减速一点用都没有。"
---

## 概述

Ashe 是 League 里最简单的 marksman — 一个被称为 "ADC" 的角色 (attack damage carry:用普攻输出的远程英雄,后期会成为团队主要伤害源)。她没有位移、没有走位技,基础普攻移速是所有 marksman 中最慢的。作为补偿,她拥有所有 ADC 中最稳定的 utility 技能组:每次普攻都附带减速;**W** 是 1200 单位 (大约半屏宽) 的远程 poke (在不开战的前提下用远距离消耗削减敌人的血量),自带减速;**R** 是一个全图 skillshot 眩晕,让队伍可以在地图任何资源点周围获得免费先手。她被设计来 **kite** (一边后退一边攻击,把敌人保持在远处) 并为队伍打开 pick (在团战之外把单独行动的敌人解决掉) 节奏。

线上的思路是这样的:每个冷却用 **W** 命中对面 ADC 来挂减速并削血,普攻安心补刀,辅助有 CC (Crowd Control:眩晕、减速、束缚等让敌人原地无法行动的效果) 时就在 6 级配合 **R** 找节奏。在团战 (5v5 围绕 Drake、Baron 这类资源点的决战 — 中立怪物,击杀者获得团队 buff) 里,她要站在自己 frontline (前排坦克和战士,负责开团) 后方的最大普攻射程,等 4 层 Q 起来 (普攻积累的 Q 充能,头像下方有计数) 再激活 **Q**,然后对踩进前排范围的敌人持续叠减速。Ashe 最难掌握的是 **R** 的预判 — 1 秒左右的飞行时间决定的是免费收人头还是空交大招。

## 推荐出装

**起始装备:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** (少量 AD + lifesteal — 把造成的部分伤害转化为治疗) + 1 瓶 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**。

**核心装备 (按购买顺序):**

1. ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv** — 第一件 power spike (一件装备完成后英雄明显变强的瞬间)。Ashe 频繁的 AA 极快触发 Energized 被动 (一种叠层效果,在充能完成的 AA 上释放额外法术伤害)。
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — 攻速鞋。Ashe 的强化 Q 与攻速直接挂钩,从第 8 分钟起每场交战都会受益。
3. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — 给每次 AA 加两支侧箭。侧箭也对附近敌人施加 Frost Shot 减速,所以 Ashe 在团战中只要打前排坦克,就能让对面整队都被减速。
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — 后期暴击 (critical strike:AA 有几率打出 ~175% 伤害) 的关键乘数件。从这一刻起,Ashe 的强化 Q 从"打得比较疼"变成"两秒之内消掉脆皮 (squishy:防御薄的英雄)"。

**情境装:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — 对位堆 HP/armor 的英雄 (Cho'Gath, Sion, Malphite, Ornn)。百分比护甲穿透无视一定比例的护甲,让坦克和脆皮死亡速度趋同。
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — 对位堆治疗的阵容 (Soraka, Vladimir, Aatrox)。施加 Grievous Wounds (一种状态,将敌人的治疗效果减半)。
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — 对位刺客或 diver (Zed, Kha'Zix, Talon — 专门为切后排设计的英雄)。Ghost 被动让你在风筝时直接穿过敌方小兵和英雄。
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — 对位强 poke (远程消耗法师的远距离消耗) 或爆发阵容。lifesteal 在团战中即时回血;过量治疗会变成护盾。

**鞋子:** Ashe 的鞋只有一个正确选择 — ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves**。攻速直接转化为强化 Q 的 DPS。

**加点顺序:** 主升 **Q** (强化 AA 多加 AD,主动持续时间也更长)。副升 **W** (冷却从 1 级 18 秒降到 5 级 4 秒 — 这就是线上消耗的来源)。最后升 **E** (纯功能性)。**R** 在 6、11、16 级各点一级。

**符文:** 主系 **Precision** (与 AA 协同的天赋树),带 **Lethal Tempo** (持续普攻同一英雄时获得额外攻速)、**Triumph** (击杀参与回血)、**Legend: Alacrity** (按层数叠加攻速)、**Coup de Grace** (对 40% HP 以下敌人造成额外伤害)。副系 **Inspiration**,带 **Biscuit Delivery** (线上免费回蓝回血的饼干) 与 **Cosmic Insight** (提升 **Flash** 和 **R** 的可用频率)。

## 关键对线

- **Caitlyn:** 最难的对线。普攻 650 高于你的 600,W 陷阱距离更远,E 钩子还有 1300 射程。她下陷阱时躲在小兵后面;只有当她 overextend (走得太靠前,远离自己小兵线,被 gank 时无路可逃) 时,才让 support 切上去。在 ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv** 之前以 power-farm (只专注于安全补兵刷钱,不冒任何风险) 为主,出装后再去找跨地图 **R** 节奏。
- **Lucian:** 一级输给 Ashe,二级 Q + E 起来后翻盘。把 **W** 留给他朝你 double-AA (连续两记普攻) 的时候;在他被普攻动作卡住时立刻拉开。**E** 交出来之后绝对不要 trade — 位移在冷却之前他没法被你抓住。
- **Vayne:** 6 级前白嫖补刀:她射程 550,且没有任何减速。把兵线推 (push:把己方小兵推向她的塔下) 过去,每个冷却用 **W** 进行 harass (持续 chip 伤害削血)。6 级之后她的大招在 Q 突进时附带隐身,不要追进草丛 (bush:遮蔽视野的地形小区域)。
- **Jhin:** 远距离会被他的 W (远程消耗 skillshot) 不断打到。站在己方第一波小兵后面;他的 W 如果先碰到小兵,他自己也会被减速。在他装弹时 (4 发弹匣 + 2.5 秒手动 reload) 抓机会反打。
- **Draven:** 平 A 对拼直接输 — Q 斧的单次普攻伤害远高于你的基础 AA。避免 1 换 1 的 trade,只在斧子不在他手上的瞬间 commit。如果他打出 3 杀的领先,提前出 ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer**。

## 强势期与胜利条件

- **1 级:** **W** 强势。1200 射程的箭锥是所有 ADC 1 级最强的 trade 工具 ("trade" 指线上短暂的伤害交换,不是想要击杀)。如果对面 ADC 上前补 cs (creep score:把小兵补到死收到金钱),白嫖一次 trade。
- **6 级:** 第一发 **R** 让任何带 CC 的辅助都能在线上抓人。如果你的 Leona / Nautilus / Pyke 大招在身,R + 他们的先手 = 只要敌方 ADC 不是塔下满血,就是稳稳的人头。
- **![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) Statikk Shiv 完成 (~ 11-13 分钟):** 清线节奏反转。可以 W + 2 个 AA 把兵线推过去,然后 roam (离开己方路线去支援队友) 配合跨地图 **R** 在 Drake 或中路 skirmish (河道与野区里 2-3 人的小规模交战) 制造击杀。
- **![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge 成型 (~ 26-30 分钟):** 强化 Q + 暴击在 2-3 秒内蒸发对方后排。从这一刻起,围绕每一个资源点强行开团。

## 常见错误

- **低层数激活 Q。** **Q** 必须在 4 层时才造成伤害 (头像下能看到层数)。提前激活就是浪费 30 蓝换一次平庸的 Q。先打满 4 次普攻,再按 Q。
- **线上 R 一好就丢。** **R** 是全队最值钱的资源 (跨地图眩晕用于 Drake 团战、Baron 起手)。把它留给资源点几乎永远比拿它换一次线上 trade 更值。例外:R 能保证终结的击杀窗口。
- **团战里站着不动 A 人。** Ashe 是为风筝设计的;站着不动等于在白送 skillshot,本来移动一步就能躲掉。每次 AA 之间走一小步,打乱敌人 skillshot 的节奏。
- **没有 vision 就过度推线。** Ashe 没有逃生技能。如果 support 没有把三角草和河道做眼,你又把兵线推过中路河道,对面打野能白嫖你的人头。看不见的草丛永远先 **W** 一发再前进。
- **W 一好就 A 兵。** **W** 消耗 75/70/65/60/55 蓝,自带的减速是线上最强的 harass 工具。把 **W** 留给敌方 ADC,而不是兵线。

## 进阶技巧

练习 **flash R** — 当一个低血敌人即将逃进战争迷雾时,先按 **Flash** 朝他逃跑的方向一闪,然后立刻发射 **R**。flash 把你向前推 400 单位,所以 **R** 比正常少飞 400 单位就命中 — 但眩晕时长是按飞行距离计算的,所以这一手只能用在 near-execute 目标 (已经低到任何一击都能死) 身上,作为终结技。胜利条件是:对面以为自己 200 HP 安全脱身,因为 Ashe 看上去还在 1500 单位之外,但根本没看到那一手 flash + R 把追击直接结束。
