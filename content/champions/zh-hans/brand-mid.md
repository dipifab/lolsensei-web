---
title: "Brand Mid Build & Guide — Patch 16.9"
slug: "brand-mid"
language: "zh-hans"
patch: "16.9"
champion: "brand"
role: "mid"
last_updated: "2026-05-01"
description: "League of Legends 英雄联盟 16.9 版本 Brand 中单完整攻略:起手装、burn-mage 法师燃烧流核心出装顺序、Sorcery 符文与天赋加点细节、关键对线分析、强势期节奏与团战站位思路、新手常见操作失误规避,以及一段翻盘用的进阶 double-blaze 双层 AOE 连招技巧详解。"
quick_learn:
  champion_dd_id: "Brand"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Burst-AOE"
  abilities:
    - key: "P"
      name: "Blaze"
      description: "Brand 的技能会点燃目标 (持续 4 秒,最多 3 层)。当英雄身上叠到 3 层时,blaze 会变得不稳定并以一次小范围 AOE 爆炸触发,对范围内敌人重新施加技能效果。"
      dd_spell_id: "Brand_Passive"
    - key: "Q"
      name: "Sear"
      description: "直线非指向技能,造成法术伤害。如果目标已经处于 ablaze (燃烧) 状态,则改为眩晕 — Brand 主要的起手手段。"
      dd_spell_id: "BrandQ"
    - key: "W"
      name: "Pillar of Flame"
      description: "短前摇之后落下的延迟 AOE 区域。处于 ablaze 状态的目标多承受 25% 伤害。是技能组中单发伤害最高的一招。"
      dd_spell_id: "BrandW"
    - key: "E"
      name: "Conflagration"
      description: "指向性爆炸,会向附近敌人弹射。如果首要目标处于 ablaze 状态,扩散半径翻倍 — 给整条兵线挂上 blaze 最简单的方式。"
      dd_spell_id: "BrandE"
    - key: "R"
      name: "Pyroclasm"
      description: "远距离火球在英雄与小兵之间最多弹跳 5 次,优先 ablaze 目标并在每次命中时减速。当敌方阵型聚集时,团战伤害极高。"
      dd_spell_id: "BrandR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "E" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对位 diver 与刺客 (Zed, Akali, Diana, Fizz) — 金身弥补无位移的弱点"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "对位单体法术 CC (Ahri 魅惑, Lissandra R, Twisted Fate 黄牌)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "对位高回血阵容 (Soraka, Vladimir, Dr. Mundo, 上单 Aatrox)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "只要任何核心目标买了第一件魔抗装就立刻接出"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "在多个目标已经挂上 blaze 层数的聚集团战中开打,这样 R 会在英雄之间弹跳而不是在小兵之间。站在 frontline 之后,从 W 的极限距离开火。"
  weakness: "0 位移、0 逃生。一旦 diver 越过你方前排,你与被秒杀之间只剩 Flash 与 Zhonya's — 所以情境性防御装并非可选项。"
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8229
      name: "Arcane Comet"
      icon_path: "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "主系 Sorcery: Arcane Comet 在每次 W 或 E 命中时自动触发,每次 trade 都额外加一段免费爆发。Manaflow Band 撑住频繁 W 的蓝量,Transcendence 把 ability haste 推过 40%,Scorch 在残血时叠加在 blaze 跳伤之上。"
    secondary_rationale: "副系 Inspiration: Biscuit Delivery 解决 Brand 前 6 级的蓝量问题,Cosmic Insight 提供更高的 Flash 频率 — Flash 是这名英雄唯一能躲掉位移的手段,因为他自身没有任何位移。"
    secondary_alternative: "如果对面有两名以上低魔抗的脆皮 (例如 Caitlyn + Senna + Ezreal),把副系换成 Resolve,带 Second Wind (顶住远程消耗) 与 Revitalize (强化 Brand 燃烧吸血型被动),让你活到能放出 R 的那一刻。"
matchup_draft:
  pick_into:
    - examples: ["veigar", "karthus", "anivia", "ryze"]
      archetype: "无位移的固定型法师"
      reason: "他们的补刀模式逼着站桩施法或叠层:把 W 丢在兵线上,在恢复帧用 Q 打出眩晕,完整的燃烧连招在他们能反应之前就全部命中。"
    - examples: ["malphite", "amumu", "sejuani"]
      archetype: "团队强开型坦克"
      reason: "当他们的 R 把你方阵型抓住时,同一个 R 也把他们自己人扎堆在你方旁边 — Brand 的 R 在每名聚集英雄之间弹跳,把对面的开团变成你的胜利条件。"
    - examples: ["yuumi", "soraka", "senna"]
      archetype: "脆皮且逃生薄弱的后排辅助型"
      reason: "Pyroclasm 优先 ablaze 目标;一发 E 落在前排就把 blaze 扩散开,R 在每名聚集敌人之间跳跃,直到杀死最后排的脆皮。"
  counterpicks:
    - examples: ["zed", "akali", "fizz"]
      archetype: "多段位移的高机动刺客"
      reason: "他们能在你打出眩晕之前就把 Q 跳过去。没有眩晕,Brand 的技能组对自己毫无 peel,他们会在你 R 完成首跳前就把你删掉。"
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "射程更远的炮台型法师"
      reason: "他们的消耗距离超出你的 Q 射程。Brand 没有手段拉近距离,每条兵线都被压血,直到成为对面打野的免费切入目标。"
    - examples: ["yasuo", "yone"]
      archetype: "拥有 Wind Wall 与持续机动的英雄"
      reason: "Wind Wall 能挡掉 Q 与 R 的弹道;之后他们再用位移越过你的 W 区域。烧一格做 Zhonya's 只买到生还,买不到对线 prio。"
---

## 概述

Brand 是一名 **AP burst mage**,整套机制都围绕一个核心 — 被动 **Blaze**。他施放的每一个技能都会点燃目标四秒,最多叠 3 层。叠到 3 层时,blaze 变得不稳定并以一次小范围 AOE 爆炸触发,对溅射范围内任何敌人重新施加他的技能效果。换成游戏语言:每个技能都是下一个技能的起手式,而一旦敌人着火,你的 **Q (Sear)** 就不再是一发伤害技能,而是一次眩晕。这套技能组反复问两个问题 — *目标是否已经 ablaze?* *敌人是否聚集到足够让 R 弹跳?* — 整盘比赛的思路都从这两个答案里出来。

中路思路很直白:用 **W (Pillar of Flame)** 推线,只要对方中单走到你能透过小兵命中他的位置,就找 **W → Q stun** 的窗口;兵线撞进对方塔下后,带着 prio (兵线优先权 — 兵线推过去之后能脱身去支援或入侵的资格) 去支援。从 6 级开始,**R (Pyroclasm)** 是游戏里伤害最高的大招之一,*前提* 是敌人扎堆 — 每场团战只有一次中距离起手机会、没有位移可以重试、放空之后没有逃生手段。站在兵线后面是硬性要求:Brand 没有任何先天机动、没有护盾、没有回复,唯一的防御选项就是出 Zhonya's Hourglass 并把 Flash 提前对准方向。

## 推荐出装

**起始装备:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 个 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**。Doran's Ring 解决 W 频繁施放带来的蓝荒,提供 Brand 早期更看重的 AP 加成而不是平 A 伤害。

**核心装备 (按购买顺序):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — Brand 的标志装。其被动在 blaze 层数之上再加一段百分比血量的灼烧,对坦克与高血阵容造成乘数级伤害。蓝量、ability haste、AP 三项数值全部和这名英雄的需求重合。
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 固定法穿,直接作用在你最想用 R 弹跳删掉的脆皮目标身上。
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 额外爆发,以及一个对低血敌人忽视更多魔抗的被动。和 R 弹跳追打最低血目标的逻辑完美吻合。
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 后期 scaling 乘数装 (额外 AP +40%)。第三件还是第四件出,取决于对面是否已经开始堆魔抗。

**情境装:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 对位 diver 与刺客 (Zed, Akali, Diana, Fizz)。当一串位移连招越过你方前排 (frontline:站在前面替你吸收伤害的坦克与战士,你在他们身后输出) 时,金身是 Brand 唯一的答案。
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 对位带预警的法术 CC (Ahri 魅惑、Lissandra R、Twisted Fate 黄牌)。护盾挡掉那个否则会把你锁住一整波团战的开团技能。
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 对位高回血阵容 (中单 Soraka、Vladimir、Dr. Mundo、上单 Aatrox)。Grievous Wounds 被动把他们的回复砍半,让你的灼烧真正转化成击杀。
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 只要任何核心目标买出第一件魔抗装的瞬间就接出。阻止对面用一件 800 金币的小件软克你整套装备。

**鞋子:** 默认 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**。如果队伍需要在资源点刷新时让 **R** 更频繁地可用,![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** 也可以接受。

**加点顺序:** 主升 **W** (基础伤害最高,主要清线工具),副升 **Q** (眩晕伤害提升,冷却缩短),最后升 **E**。**R** 在 6、11、16 级各点一级。

**符文:** 主系 **Sorcery**,带 **Arcane Comet**、**Manaflow Band**、**Transcendence**、**Scorch**。副系 **Inspiration** 带 **Biscuit Delivery** 与 **Cosmic Insight**。

## 关键对线

- **Yasuo / Yone:** 风墙挡掉你 **Q** 的弹道与 **R** 的起跳段。在他们交完风墙之前憋住 **Q**,把 **W** 留给恢复帧,绝不要拿 **R** 当侧翼切入工具 (一次 "flank" 是从侧面绕进对方后排) — 等队友先开团之后再放,这样弹跳已经在风墙之外移动。
- **Zed / Akali:** 多段位移的强突进威胁 ("gap-closer" 指任何快速拉近距离的 dash、blink、jump)。Liandry's 之后立刻接 Zhonya's Hourglass;线上对他们绝不要主动交 **Flash**,把 **W** 提前丢在自己脚下,等他们跳上来时眩晕反打。
- **Veigar:** 6 级前你能压制的固定型法师。用 **W** 推他到塔下,在他上来补刀时找 **E → Q** 眩晕连招的机会,在他到达 6 级 (笼子翻线点) 之前回城。
- **Anivia:** 6 级前持平,6 级后她 scaling 比你强。不要紧贴兵线 — 她的墙会把你和小兵切开,逼你打一场拉得很长的远端 trade。**R** 一好就去边路 roam;她没有任何机动跟得上你。
- **Twisted Fate:** 比谁先打开节奏的支援竞速。如果他对你交黄牌,在他贴脸之前 **Q** 他 (打断施法的英雄会让卡牌掉地)。否则在河道与三角草丛布眼,盯死他的 **R** 路径;他往边路 ult 时,在地图上点信号通知上下路,然后推自己的兵线,而不是去追。

## 强势期与胜利条件

- **2 级 (W + Q):** 第一个强势点。一级 **W** 加上初始的 **Q**,你已经具备完整的 **W → Q** 眩晕连招。Pillar of Flame 挂一层 blaze;Q 命中 ablaze 目标即眩晕。这一波就是冲 first blood 的窗口。
- **6 级 (R 解锁):** 第一发 **Pyroclasm**。在河道蟹 (Scuttle) 或第一条小龙找团战 — 只要有两名敌人在弹跳距离内,你的 R 每跳能打掉一个脆皮约 50% 的血量。
- **Liandry's Torment 成型 (约 12-14 分钟):** 兵线主动权反转 ("兵线主动权" = 由你还是对方中单决定兵线在哪里碰撞),因为百分比血量灼烧惩罚兵线扎堆。从这一刻起,你应该是推线和 roam 的那一方,而不是被压塔下的那一方。
- **Rabadon's Deathcap 成型 (约 24-28 分钟):** 你的 R 完整弹跳序列能直接秒杀任何没有出魔抗装的脆皮。在这个时间点强行打聚集型资源团 — Baron、Soul Drake、后期资源争夺。

## 常见错误

- **裸放 Q 当消耗。** 没有 ablaze 状态时的 **Q** 只是一发慢速弹道。永远先用 **W** 落地或用 **E** 挂在会扩散到英雄身上的小兵来起手 — 区别是 1 秒眩晕和一次空交。
- **对单个孤立目标交 R。** **R** 在目标之间弹跳,优先 ablaze 状态的目标。如果距离内只有一名敌人,弹跳会在这一个目标身上来回跳,而每一跳衰减都极大。把 **R** 留给聚集团战,或留给并排站立的两名 ablaze 敌人来同时处决。
- **没视野硬推。** Brand 没有逃生手段 (无位移、无闪现、无护盾)。在敌方野区无眼的情况下推过河道是最快被早期 gank 抓死的方式。每次推线之前都在三角草丛放 Stealth Ward 或 Control Ward。
- **靠平 A 蹭被动伤害。** 你的平 A 与 Blaze 不交互。把平 A 间隔的时间用来走到下一个 **W** 落点,而不是去追一个低血小兵。
- **错过不稳定爆炸的时机。** 当英雄身上叠到 3 层 blaze 时,你有两秒爆炸窗口。在爆炸*之前*用 **Q** 把他眩晕,他就会被锁在溅射范围内,blaze 重新施加到周围每个敌人身上。错过这个时机就是单杀和 AOE 团灭的区别。

## 进阶技巧

练习 **double-blaze AOE wipe**。当两个敌人并排站立 (聚集团战或扎堆兵线常见) 时,按这个顺序操作:**W** 落在两人中间地面 → 两人都获得 blaze 第 1 层。**E** 给敌人 A → A 叠到 blaze 第 2 层,扩散到 B 也叠到第 2 层。**Q** 给 A → A 叠到第 3 层,A 被眩晕,不稳定爆炸同时命中 B,把 B 也推到第 3 层。这时 **R** 在两个被眩晕、满层数的目标之间弹跳,把整套连招变成一个 2 换 0 的交换。这套序列就是"还行的 Brand"和能带飞队伍的 Brand 之间的差距。
