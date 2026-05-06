---
title: "LeBlanc Mid Build & Guide — Patch 16.9"
slug: "leblanc-mid"
language: "zh-hans"
patch: "16.9"
champion: "leblanc"
role: "mid"
last_updated: "2026-05-05"
description: "英雄联盟 16.9 版本 LeBlanc 光辉女郎中单完整攻略:AP 爆发刺客核心出装顺序、Sigil 双标记连招体系、Domination 符文配置思路、关键对线压制方法、6 级与大件强势期节奏把握、roam 时机选择、对线期与团战期常见错误规避以及 W-Flash 高阶操作技巧详细说明。"
quick_learn:
  champion_dd_id: "Leblanc"
  difficulty: 4
  damage_type: "magic"
  champion_class: "AP Assassin / Burst Mage"
  abilities:
    - key: "P"
      name: "Mirror Image"
      description: "LeBlanc 生命值低于 40% 时进入 1 秒隐身,并产生一个最长 8 秒模仿其动作的分身。这是防御性的 bait 工具,本身不造成伤害。"
      dd_spell_id: "Leblanc_Passive"
    - key: "Q"
      name: "Sigil of Malice"
      description: "单体技能,命中后给敌人挂 3.5 秒标记。再用一次技能或普攻引爆标记,造成额外大量伤害。Q 击杀目标会返还法力和部分冷却。"
      dd_spell_id: "LeblancQ"
    - key: "W"
      name: "Distortion"
      description: "突进至指定位置并造成伤害。4 秒内可再次施放回到起点。W1 进场,W2 撤离 — 控制住二段时机,这是干净 pick 与 throw 的分界。"
      dd_spell_id: "LeblancW"
    - key: "E"
      name: "Ethereal Chains"
      description: "锁链型非指向技能,束缚命中的第一个敌人。若其在 1.5 秒内未通过 flash、dash 或 minion break 解开,则被定身并受额外伤害。Q 引爆的主要 setup。"
      dd_spell_id: "LeblancE"
    - key: "R"
      name: "Mimic"
      description: "以强化伤害再次施放最近一次基础技能。可双 Q 完成完整爆发、双 W 安全切入或双 E 控住目标。R 不会重置基础冷却,只是多给一次施放。"
      dd_spell_id: "LeblancR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
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
    - { dd_id: "4646", name: "Stormsurge" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3135", name: "Void Staff" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对位 diver 与 assassin (Zed、Diana、Talon、Akali) — 金身渡过他们爆发后用 Mimic-Q 收尾"
    - dd_id: "3152"
      name: "Hextech Rocketbelt"
      against: "想在 W 之外多一个突进时的备选首件 — 额外爆发与可叠加 W 的冲刺,适合从战争迷雾切入"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "对位单体 magic CC 终结 engage 的英雄 (Annie 晕、Lissandra R、Ahri 魅惑、TF 晕):魔法盾吃掉第一发"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "对面出 2+ 件 MR 装时替代 Void Staff (Mercury's Treads + Banshee's,或任何反 AP 阵容)"
  base_combo: ["W", "Q", "AA", "E", "R-Q"]
  win_condition: "6 级前用 Q 消耗 snowball 中路,6 级后用 W-Q-AA-R-Q 单杀脆皮。R 一好就去 roam 边路,用 W in / W out 抓落单。"
  weakness: "除 W 二段外没有防御手段的脆皮。后期 falloff 明显:有续航的 scaler(Kassadin、Cassiopeia)25 分钟后超越她。爆发前被硬控锁住即秒死。"
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination 主系:Electrocute 在每次 Q-AA-E(3 秒内 3 段)触发,在 Sigil 引爆之上叠加额外爆发。Sudden Impact 在 W 突进后给法术穿透,Ultimate Hunter 削减 R 冷却,roam 之间双 Q 回得更快。"
    secondary_rationale: "Sorcery 副系:Manaflow Band 解决 LeBlanc 早期蓝量紧张的问题,可以放心 spam Q 而不必回家;Transcendence 把技能急速推过 40%,降低 W 与 R 的冷却以反复打短交换。"
    secondary_alternative: "对位以 poke 压制你的英雄(Xerath、Vel'Koz)时把 Sorcery 换成 Inspiration:Magical Footwear(约 12 分钟免费鞋)+ Cosmic Insight(Flash 急速,让 W-Flash 衔接更紧)。"
matchup_draft:
  pick_into:
    - examples: ["veigar", "annie", "twisted-fate"]
      archetype: "缺乏可靠位移的低机动法师"
      reason: "没有位移技能就躲不开 W-Q-AA 的引爆,而 Veigar 的笼子是个圆圈,W 直接绕过。"
    - examples: ["lux", "syndra"]
      archetype: "脆皮远程消耗法师,冷却较长"
      reason: "扛过第一波 Q 消耗后,趁他们的 setup 技能进入冷却时全包夹 — Lux Q 与 Syndra E 都是 12-13 秒的惩罚窗口。"
    - examples: ["seraphine", "karma"]
      archetype: "缺乏硬位移的辅助型中单"
      reason: "护盾只能延迟,无法阻止 Q 的二次引爆;W 越过护盾切入,R 再放一次 Q,在续航起作用前就锁定击杀。"
  counterpicks:
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "远距离炮台法师"
      reason: "他们的技能能打到 1100-1500 单位,远超你 700 的 Q 距离;能把你推出经验范围,而你也无法在他们的 CC 之外强行 all-in。"
    - examples: ["kassadin", "cassiopeia"]
      archetype: "后期超越你的 late-scaler"
      reason: "撑过你 6-9 级的强势期后,他们在纯伤害与机动性上反超你;Kassadin 11 级后 R 比你的 W 二段快,Cassiopeia 的禁飞区直接关掉 W 二段。"
    - examples: ["lissandra", "galio"]
      archetype: "拥有可靠定身的中单"
      reason: "Lissandra Q-W 或 Galio W 嘲讽会在你跳进去时把你钉住;LeBlanc 没有 Cleanse 一类工具,一停下血量瞬间融化。"
---

## 概述

LeBlanc 是一个 AP 爆发刺客:这个英雄被设计来在 1-2 秒内秒掉一个脆皮目标(这种短暂的高伤害窗口叫"burst")。每场交战都围绕她的核心机制 **Sigil of Malice (Q)** 展开 — Q 命中后造成一次小伤害并标记目标,任何第二段伤害打在标记上就会引爆 sigil,造成真正的爆发。经典的"双标记"节奏是:Q 上标记,然后用普攻或 **E** 引爆。

战术思路:对线期用 Q 消耗(冷却 6 秒,可以反复使用),6 级用 W-Q-AA-R-Q 秒杀脆皮(易死的薄血英雄,通常是 ADC),R 一好就去 roam(离开自己线路到别的线路打配合)边路。LeBlanc 的强势期是 8 分钟到 25 分钟;之后,带成长的法师与战士会逐步追上来。一定要规划撤退路线 — **Distortion (W)** 既能切入又能撤离,但前提是把二段留给跑路,而不是只用来确认击杀。

## 推荐出装

**Starting items:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 Health Potions。多兰戒解决对线 Q 消耗的蓝量回复。

**Core items (按顺序):**

1. ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — 爆发节点,带 on-hit 额外法术伤害,击杀或助攻触发移速。与 Q-AA-E 连招完美契合:每次引爆都会触发 Stormsurge。
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 固定法术穿透(让你的法术伤害无视敌人一部分魔抗)。直接提升对脆皮的输出。
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 敌人在 ~40% 生命以下时额外爆发(基于血量阈值的被动:必须低于这条线才会触发)。叠加 Mimic Q 可秒杀 ADC。
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 后期对你全部 AP 的乘算加成。单件爆发收益最高的位置。
5. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 对面开始堆 MR 时的百分比法术穿透;对越来越肉的目标维持伤害成长。

**Situational items:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 对位 diver 与 assassin(Zed、Diana、Talon、Akali)。金身约 2.5 秒无敌,扛过他们的爆发期再用 Mimic Q 收尾。
- ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** — 想要除了 W 之外再多一个突进的备选首件;与 W 叠加可从 fog of war(地图上没有视野的区域)远距离切入。
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 对位单体 magic CC(Annie 晕、Lissandra R、Ahri 魅惑、Twisted Fate 晕)。魔法盾会挡掉对方对你施放的第一个技能。
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — 当队伍更需要治疗光环而不是纯爆发时,代替 ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff**。

**Boots:** 默认 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**。当对面有 2+ 个硬控威胁(Annie + Galio,Lissandra + Leona)时,选 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**。

**Skill order:** 先满 **Q**(主消耗与主伤害),其次 **W**(降低突进/撤离冷却,提升落地伤害),最后 **E**(等级越高束缚时间越长,但冷却在爆发中影响有限)。**R** 在 6、11、16 级各点一级。

**Runes:** 符文是开局前选择的被动加成;选一条主系(5 个符文)和一条副系(2 个符文)。主系 **Domination**,基石选 **Electrocute** — 3 秒内对同一目标命中 3 次技能或普攻就会触发(符文效果生效),Q-AA-E 不费力地满足条件。再选 **Sudden Impact**(W 突进后额外法术穿透)、**Sixth Sense**(roam 时的视野压制)、**Ultimate Hunter**(降低 R 冷却,双 Q 更快回来)。副系 **Sorcery** 搭配 **Manaflow Band**(Q 消耗的蓝量续航)与 **Transcendence**(技能急速 — 技能转得更快)。Stat shards:两个 Adaptive Force + Health Scaling。

## 关键对线

- **Annie:** 6 级前你用 Q 消耗压制。6 级后她随时挂着大晕(被动叠到 4 层时头像上会闪烁"Pyromania"),小熊一套秒杀你。如果她早期 snowball(把一点小优势滚成大优势),第三件出 ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil**。
- **Twisted Fate:** roam 速度对决。他用 **R** 选边路抓人,但对线本身打不过 — 每次他贴近补刀就用 Q 招呼,把他 zone(控制周围空间)出兵线。在河道用真眼(可放置、给指定区域视野的物品)盯他的 **R** 起手。
- **Kassadin:** 成长上的硬克制。6 级前用 Q 消耗他(他到 6 级才有反制手段);11 级后他的 **R** 比你的 W 二段更快,正面交换会输。要么 14 分钟前打死对线,要么呼叫打野两次。
- **Xerath:** 射程压制你。**Q** 能打到 1500 单位(你的 Q 是 700)。躲在自己兵线后面,横向走位躲他的 **Q**,只在他没蓝时切入 — 他的 Q 80-100 蓝,空 5 个 Q 就空管了。
- **Diana:** 6 级前持平(你 poke 占优),6 级后只要她接到 **R** 就输。如果她已经拿了 2+ 击杀,![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** 之后直接 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass**,金身把她的大招连招废掉。

## 强势期与胜利条件

- **2 级 (Q + W):** 第一个真正的强势节点。Q-AA-W2 是经典的 poke-and-leave 套路:W 切入,Q 上标记,普攻引爆 Sigil,W 二段撤离。用它把对手从第二波兵线赶走。
- **6 级:** 第一个 **R** 是全场最大的单点强势。在标记目标上 Mimic-Q 在 6 级单件下增加约 200-250 伤害;65% 血量的脆皮被 W-Q-AA-R-Q 完整连招打中,没等闪现就死了。
- **![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) Stormsurge 完成 (~ 第 11-13 分钟):** 爆发阈值每次技能命中再涨 80-100 伤害。把中路兵线推到对方一塔下后立刻用 W 去 roam 边路。
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap 上线 (~ 第 23-26 分钟):** 对其它 AP 装的乘算加成。从这之后,W-Q-R-Q-E 隔着 Banshee's Veil 都能秒任何脆皮。围绕大龙小龙(Drake、Baron)开团,寻找后排 pick(把对方核心从队友身边切下来杀掉)的机会。

## 常见错误

- **W 切入击杀却不留 W2。** Distortion 二段窗口只有 4 秒。如果你 1 秒内把整套连招打光,然后在敌阵中间站着 3 秒,对面辅助一抓就死。永远规划:W 切入,打输出,W 撤离 — 二段是干净 pick 与 throw(本可避免却送掉的死亡,会给敌方滚雪球的势头)的分界。
- **想用第二个 Q 引爆 Sigil。** Q 不会引爆自己的标记 — 只有*第二个*独立伤害源才会引爆。新手 LeBlanc 常常连放两次 Q 期待大数字,但其实需要 Q + 普攻、Q + E 或 Q + R-Q。规则永远是先标记后引爆,不是连续两次标记。
- **下意识 R-W。** 模仿的 W 突进距离翻倍,但也意味着你深入危险距离翻倍。在标记目标上 Mimic Q 几乎永远是击杀键;Mimic W 只用于追击或撤退。
- **闷头推线不 roam。** 拿到 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** 与 **R** 之后,你的价值在边路。如果边路已经在掉血还死守中路 farm,就是浪费英雄。先把兵线推过去,打"我去支援"信号,然后从 fog of war 用 **W** 切下边路对手。
- **对面阵容是脆皮还出战士装。** LeBlanc 没有自带续航 — 用爆发换坦度的装备会浪费技能组。除非对面有 3+ 坦克,否则坚持 ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** + ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap**。

## 进阶技巧

"W-Flash" 连招是 LeBlanc 的招牌奇袭 engage。朝目标方向施放 **W**,在极短的突进窗口内立刻按 **Flash** — Flash 把你拖到 W 落点之外再 400 单位,W 的伤害会在新位置生效。W + Flash 的总距离比大多数反 CC 起手(Annie 晕、Lux Q 束缚、Galio W 嘲讽)更快,因为还没等他们反应你就已经贴脸。**R** 留给第二段:贴脸之后对标记目标 R-Q,辅助来不及 peel(保护自家核心)就已经收掉人头。关键是 buffer 时机:Flash 必须在 W 突进刚开始的瞬间按,而不是末尾,否则 W 会被打断,爆发就废了。
