---
title: "Corki Mid Build & Guide — Patch 16.9"
slug: "corki-mid"
language: "zh-hans"
patch: "16.9"
champion: "corki"
role: "mid"
last_updated: "2026-05-02"
description: "League of Legends 英雄联盟 16.9 版本 Corki 库奇中单完整攻略:混合伤害 marksman 出装顺序、Inspiration 符文搭配、关键对线思路、强势期节奏把握、对线常见错误规避,以及 Big One 大火箭节奏管理等高阶操作技巧。"
quick_learn:
  champion_dd_id: "Corki"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hybrid"
  abilities:
    - key: "P"
      name: "Hextech Munitions"
      description: "普攻一部分伤害转为 true damage (真实伤害)。无视护甲与魔抗的稳定 DPS — 这就是堆攻速与 on-hit 装备的理由。"
      dd_spell_id: "Corki_Passive"
    - key: "Q"
      name: "Phosphorus Bomb"
      description: "指定区域法术伤害,短暂揭示命中目标。被压制时用于补刀、检查草丛、起手 poke 消耗的开场技。"
      dd_spell_id: "PhosphorusBomb"
    - key: "W"
      name: "Valkyrie"
      description: "短距离 dash 留下火痕。Corki 唯一的位移 — 用于逃跑、贴身、躲技能。冷却长,不要浪费在清线上。"
      dd_spell_id: "CarpetBomb"
    - key: "E"
      name: "Gatling Gun"
      description: "Corki 身前的扇形持续技,造成伤害并削减敌人护甲与魔抗。提供持续 DPS,为 R 火箭后续输出软化目标。"
      dd_spell_id: "GGun"
    - key: "R"
      name: "Missile Barrage"
      description: "远距离火箭命中后爆炸。最多储存 7 发,每第三发是 Big One,带额外爆发。Corki 主要的 poke 与处决工具。"
      dd_spell_id: "MissileBarrage"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3004", name: "Manamune" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "3046", name: "Phantom Dancer" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对位多段位移刺客 (Zed, Akali, Talon) — 金身能拖住爆发连招,给 W 与队友 peel 时间"
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "对位 2 个以上肉前排 (Sion, Ornn, Maokai) — 高额护甲穿透让平 A 与 R 火箭打穿肉装"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "对位高 AP 爆发 (LeBlanc, Veigar, Syndra) — 魔法护盾吸掉一套连招,给你 W 走人的时间"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "对位 3 个以上硬控 (晕、定身) — 控制链威胁高于法穿时换鞋"
  base_combo: ["Q", "AA", "R", "E", "AA"]
  win_condition: "在小兵后安全发育,出到 Trinity Force 与 Manamune,然后用极限距离的 R 消耗脆皮。在团队拉开 objective 窗口时,挑掉走位失误的孤立目标。"
  weakness: "脆皮且只有 W 一个位移。多段突进刺客在两件套之前就能把你打穿,投射物屏障 (Yasuo Wind Wall, Braum E) 直接关掉 poke。"
  runes:
    primary_tree: "Inspiration"
    primary_tree_dd_id: 8300
    keystone:
      dd_id: 8369
      name: "First Strike"
      icon_path: "perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png"
    primary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "主系 Inspiration: First Strike 奖励 Corki 用 Q 或 R 起手开 trade,把先手伤害换成额外金币,资助贪婪的 Trinity + Manamune 出装。Magical Footwear、Biscuit Delivery、Cosmic Insight 拉长前期 sustain,让你安全发育。"
    secondary_rationale: "副系 Sorcery: Manaflow Band 必带,因为 R 火箭吃蓝且线上你会反复消耗。Gathering Storm 提供免费 AP scaling,加成 Q 的法术伤害与后期 Big One 火箭的爆发。"
    secondary_alternative: "面对高强度 poke 阵容 (Xerath, Vel'Koz, Zoe) 不能掉血时,把 Sorcery 换成 Resolve,带 Second Wind (被消耗时被动回血) 与 Overgrowth (最大 HP scaling) 安全发育。"
matchup_draft:
  pick_into:
    - examples: ["veigar", "anivia", "karthus", "cassiopeia"]
      archetype: "无位移的脆皮法师"
      reason: "Corki 的 R 射程 1225 单位,W 是这条线唯一的机动力优势。没有位移或隐身的目标会被反复 R 消耗,且无法在 W 冷却的窗口里反打。"
    - examples: ["xerath", "vel-koz"]
      archetype: "有长引导的炮台法师"
      reason: "Corki 用 R 抹平射程差,同时用 dash 打断长引导 (Xerath R, Vel'Koz R)。他们打不出 all-in,trade 永远偏向有机动力的一方。"
    - examples: ["annie", "syndra"]
      archetype: "近距离爆发法师"
      reason: "他们的击杀阈值起在普攻距离内,正好是 Corki 真伤被动 + Trinity Force 滚雪球的位置。6 级前 R 远程压制,6 级后 W 闪掉晕控。"
  counterpicks:
    - examples: ["zed", "talon", "akali", "qiyana"]
      archetype: "多段位移高机动刺客"
      reason: "Corki 只有 W 一个位移且冷却长。多段突进套件能在 W 转好之前贴脸,在两件套前就用爆发打穿 Trinity 血条。"
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall 投射物屏障"
      reason: "Wind Wall 吃掉 Q 与整套 R 火箭,把 Corki 三分之二的伤害从 trade 中抽走。即使血量赢了,冷却代价也极其惨烈。"
    - examples: ["fizz", "kassadin"]
      archetype: "无敌帧 / 闪现型逃生"
      reason: "Fizz E 与 Kassadin R 能躲掉 Corki 已经交出的连招,然后在他 W 没好的时候反打。一旦他们进入无敌帧,Corki 没有后续爆发。"
---

## 概述

Corki 是混合 marksman (远程平 A 输出位,混合物理与法术伤害),中单玩法是远程 artillery (远程炮台) 思路:随着装备成型逐渐变强 (即 "scaling"),用 **Missile Barrage (R)** 在敌人射程外消耗 ("poke" — 远距离掉血),**Trinity Force** 出来后用平 A 收掉低血脆皮目标。**Hextech Munitions (P)** 让每次平 A 的一部分变成 true damage (真实伤害,无视护甲与魔抗),所以攻速与 on-hit 属性和纯 AD 或 AP 同样重要。中路适合他,因为河道双向都能 gank (突袭),W (位移) 正好可以接;同时 R 火箭能从地图中央 poke 到边路。

游戏思路一句话:在 Manamune 上叠 (累积) 蓝量升级成 Muramana,用 **Phosphorus Bomb (Q)** 与 R 推线 (快速清兵把兵线推过去),每个冷却窗口 (技能转好的几秒) 都用来削对面线上英雄的血,让你打野能 dive (在塔下击杀)。技术差距体现在 R 的预瞄上 — 要 lead (预判敌人的走位再瞄那个点),并把 Big One (每第三发 R 是更强的火箭) 的时机卡在敌人血量最低的瞬间。**W** 是你唯一的位移:乱用一次,任何刺客都能把你 walk down (一路追死)。

## 推荐出装

**起始装备:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**。多兰剑给的 lifesteal (吸血,造成伤害的一部分回血给你) 与平 A 被动契合;只有面对纯 poke 线 (蓝量续航比单挑更重要时) 才考虑 Doran's Ring。

**核心装备 (按购买顺序):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — Sheen (三相组件) 在每个 Q 与每发 R 火箭上 proc (触发额外伤害效果),并提供 AD、攻速、ability haste (冷却缩减) 与移速。这是英雄最大的单件爆发节点。
2. ![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) **Manamune** — Manamune 会随着你消耗蓝量缓慢转化为强化版的 Muramana;一旦 "stacked" (完全成型),就会在每一次平 A 与每一个耗蓝技能上加额外伤害,包括每发 R 火箭。
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 固定法穿 (无视一部分敌人魔抗),增强 Q 与 R 的伤害。
4. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — 对敌人的第一次平 A ("energized auto") 造成额外伤害,且射程超出常规。暴击率契合 Trinity 的属性配置。
5. ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — 攻速支撑 **Gatling Gun (E)** 的持续 DPS 与被动 on-hit 真伤的滚动。

**情境装:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 对位多段位移刺客 (Zed, Akali, Talon):金身拖住爆发窗口,给 W 与队友 peel 时间。
- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — 对位 2 个以上肉前排 (Sion, Ornn, Maokai):高额护甲穿透让平 A 与 R 火箭打穿。
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — 对位高 AP 爆发 (LeBlanc, Veigar, Syndra):魔法护盾吸掉一套连招,让你 W 走人。
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 当对面有 3 个以上硬控 (晕、定身) 且控制链威胁高于法穿时,把 Sorcerer's 换成它。

**鞋子:** 默认 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**。对面控制装多就上 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**。

**加点顺序:** 主升 **Q** (poke 与清线),副升 **E** (DPS 与减抗),最后升 **W** (功能性)。**R** 在 6、11、16 级各点一级。

**符文:** 主系 **Inspiration**,带 **First Strike**、**Magical Footwear**、**Biscuit Delivery**、**Cosmic Insight**。副系 **Sorcery** 带 **Manaflow Band** 与 **Gathering Storm**;面对强消耗对线则副系换成 **Resolve**,带 **Second Wind** 与 **Overgrowth**。

## 关键对线

- **Yasuo / Yone:** 风墙吃掉你的 Q 与 R 火箭。Q 留到他们交完技能再放,R 等风墙交了再丢,绝不要在他们能 E (位移) 到旁边小兵的近战距离内 trade (互拼伤害)。
- **Akali / Zed:** Diving threat (能跳塔击杀的英雄)。Trinity Force 之后立刻接 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass**;只要他们的位移连招还在,就别交 W trade。
- **Veigar:** 用 R 抹平射程,躲他的 W (慢慢张开把你定在原地的笼子陷阱),并避免在他 E 圈 (穿过会触发的眩晕环) 内打 auto-trade。他的 Q 叠加无上限 (击杀越多 AP 越高),所以 25 分钟前必须结束对线。
- **Twisted Fate:** 抢支援节奏。在他到 6 级前用 Q 推线;他 R 可用时给打野标点;吃黄牌时直接 W 走,不要硬抗晕。
- **Galio:** 6 级前对他施压 — 他是近战,你是远程,补刀差会拉得很大。6 级后他的 R 是全图开团工具 — 只在你 R 火箭存满、能 peel (把他从后排敌脸上撕下来) 他落地的瞬间再抱团。

## 强势期与胜利条件

- **2 级:** Q + W 或 Q + E 组合下,你可以用 Q-AA-AA trade ("AA" = 普攻) 惩罚对面错过的补刀,然后视情况 W 脱身或闪现已交出后追打。
- **6 级:** 第一发 **Missile Barrage (R)** 解锁边路压力 (离开中路威胁上路或下路)。R 储存加 W 让你能下河蟹支援下路,丢两发火箭加 Big One 拿下 1v1 trade,然后 W 回兵线。
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force 成型 (~12-14 分钟):** Sheen 在每个 Q 与每发 R 上 proc,把 poke 变成击杀阈值。这就是 Q-AA-R-AA all-in (完全压上去打,不留后路) 低血对面的时机。
- **![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) Manamune stacked (~18-22 分钟):** Muramana 让所有耗蓝行为加额外伤害,团战伤害比未成型时大约翻一倍。这是强开 objective 团战 (Drake, Baron) 的时机。

## 常见错误

- **R 一好就清线乱丢。** R 的库存有限;空在小兵上,下一次团战最关键的时刻你会零爆发。线用 Q 加平 A 推,留 4 发以上给资源点。
- **W 没有跟手就主动用。** W 是你唯一的逃生键。为了一刀就能解决的人头 dash 进去,正是 Corki 经典死法 — 算清剩下的蓝量与冷却,杀不掉就别 commit (别完全压上去)。
- **近战 auto-trade。** 真伤被动近距离看着诱人,但 Corki 血条本身就是脆皮 (像 ADC 一样低且脆)。对线英雄位移没交时,守在 R 距离上。
- **对位 CC 多的阵容买 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes。** 整局团战被晕的话,法穿就是浪费。只有对面 CC 数量低时才默认 Sorcerer's,否则换 Mercury's Treads。
- **空 R 储备就 roam。** 没有 2 发火箭的 roam 是抛硬币。过河前等那 8-12 秒把库存攒起来;那一点延迟就是拿一个人头与白白送掉兵线的差别。

## 进阶技巧

追踪并利用 **Big One** 节奏。每第三发 R 火箭 ("Big One") 比普通两发伤害高得多。团战前数一下你储存了多少发 — 如果下一发就是 Big One,留给优先目标;如果你刚把 Big One 丢出去,就把两发普通火箭打到兵线或塔上,让 Big One 在开团时正好准备好。盲射 R 的玩家把 Big One 浪费在小兵上;追踪计数的玩家会在关键瞬间秒掉 squishy (低血核心)。
