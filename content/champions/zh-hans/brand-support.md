---
title: "Brand Support Build & Guide — Patch 16.9"
slug: "brand-support"
language: "zh-hans"
patch: "16.9"
champion: "brand"
role: "support"
last_updated: "2026-05-01"
description: "League of Legends 英雄联盟 16.9 版本 Brand 辅助完整攻略:法师 poke 核心出装与购买顺序、Sorcery 符文加点细节、对线期 W → Q 起手压制、强势期节奏把握、团战 R 弹射时机、新手常见错误规避以及 double-spread 高阶连招。"
quick_learn:
  champion_dd_id: "Brand"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Poke Support"
  abilities:
    - key: "P"
      name: "Blaze"
      description: "Brand 的技能会点燃目标(持续 4 秒,最多 3 层)。3 层时引爆,造成小范围 AOE 并重新触发技能效果。"
      dd_spell_id: "Brand_Passive"
    - key: "Q"
      name: "Sear"
      description: "直线非指向技能,造成法术伤害。若目标已被 ablaze (点燃),则将其眩晕 — 你为 ADC 创造的击杀起手式。"
      dd_spell_id: "BrandQ"
    - key: "W"
      name: "Pillar of Flame"
      description: "短暂前摇后落下的延迟 AOE。已 ablaze 的目标受到 +25% 伤害。整套技能里 poke 伤害最高的一招。"
      dd_spell_id: "BrandW"
    - key: "E"
      name: "Conflagration"
      description: "指向爆炸,弹到附近敌人。若主目标已 ablaze,扩散范围翻倍 — 一次施法即可点燃两个敌人。"
      dd_spell_id: "BrandE"
    - key: "R"
      name: "Pyroclasm"
      description: "超远距离火球,在敌人之间最多弹射 5 次,优先选择 ablaze 目标。当对面 ADC 与辅助站在一起时直接赢下团战。"
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
    - { dd_id: "3877", name: "Bloodsong" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "对位会对你 ADC 释放 hard CC 的对手 (Leona 连控、Morgana Q、Pyke 钩子)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "对位强 AOE 强开阵容 (Malphite, Yasuo, Wukong, Kennen)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "对位高回血阵容 (Soraka, Yuumi peel, 队伍带 Aatrox 或 Vladimir)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "只要任何核心目标做出第一件魔抗装就立刻替换"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "3 级前用 W poke 压制 2v2,之后为 ADC 找 E + Q 眩晕起手。6 级后对方 ADC 与辅助贴在一起时,R 的弹射会让兵线直接 snowball。"
  weakness: "没有护盾、没有治疗、没有给 ADC 的 peel。如果对面辅助先开,Brand 救不了自家 C 位 — 只能拼速度,先把对方先开人击杀。"
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
    primary_rationale: "主系 Sorcery: Arcane Comet 在 W 或 E 命中时几乎稳定触发,每个 CD 都加一段免费 poke。Manaflow Band 撑住 2v2 W 频繁释放的蓝量,Transcendence 把 CDR 推过 40%,Scorch 在塔下收掉残血。"
    secondary_rationale: "副系 Inspiration: Biscuit Delivery 解决 Brand 前 6 级的蓝量饥渴,Cosmic Insight 让 Flash 更频繁可用 — Flash 是你躲开强开的唯一手段,这套技能没有自带位移。"
    secondary_alternative: "对位强力钩手辅助 (Blitzcrank, Thresh, Pyke) 时,需要扛住第一记钩子才能赢线,把副系换成 Resolve,带 Bone Plating (减少钩子连招的连续伤害) 与 Revitalize (增强 Mikael's 护盾)。"
matchup_draft:
  pick_into:
    - examples: ["yuumi", "soraka", "janna"]
      archetype: "低血量的脆皮 enchanter"
      reason: "Brand 的 W poke 距离超过她们的治疗射程,E + Q 连招在队友 peel 之前就能解决目标。Yuumi 一套完整连招就能丢本体;Soraka 跟不住 blaze 的持续跳伤。"
    - examples: ["zilean", "karma", "lulu"]
      archetype: "无强开的功能型辅助"
      reason: "Brand 用强度硬吃对线 — 她们的技能用来护 C 而不是对拼,惩罚不了你 W 频繁施放。6 级后她们的 CC 是单体,而你的 R 一发同时打到两个人。"
    - examples: ["caitlyn", "ezreal", "varus"]
      archetype: "无逃生手段的远射程 ADC"
      reason: "这些 ADC 站在最大射程补刀;一发 E 砸到对面辅助身上就把 blaze 扩散过去,Q 命中眩晕,身后的 AD 在他们交 Flash 前就拿到人头。"
  counterpicks:
    - examples: ["leona", "nautilus", "rell"]
      archetype: "强开型坦克辅助"
      reason: "她们能在 Brand W 射程外用 Flash + 眩晕连招进场。Brand 既不能 peel 自己也不能 peel C — Leona 一旦定身,这套技能除了死掉或同时交 Flash + Zhonya's 就没有其他答案。"
    - examples: ["rakan", "alistar"]
      archetype: "高机动强开辅助"
      reason: "Rakan 用位移穿过你所有非指向技能并把 ADC 拉走;Alistar 的撞飞 + 踩地连招快过 Q 的眩晕。Brand 来不及反应任何一个。"
    - examples: ["pantheon", "blitzcrank"]
      archetype: "与 Brand 爆发对等的 all-in 辅助"
      reason: "Pantheon 的 Q 与 Blitzcrank 的钩子有效射程都接近 Brand 的 Q。谁先命中起手谁就赢下 trade,而他们都自带生存机制 (Aegis 格挡、钩完即走) 而 Brand 没有。"
---

## 概述

Brand 辅助是游戏里最具攻击性的法师辅助。他没有传统辅助提供的任何东西 — 没有护盾、没有治疗、没有给 C 位的 peel ("peel" = 通过推开或控制攻击者来保护队友的技能)、也没有以坦克生存技收尾的强开手段。他带来的是 **从第 1 分钟起的恒定击杀威胁**。每个技能都让敌人燃烧 (被动 **Blaze**),敌人一旦被点燃,你的 **Q (Sear)** 就不再是伤害技能,而是一个眩晕。对线计划是:用 **W (Pillar of Flame)** poke 把两层 blaze 持续挂在对方身上,**E** 把火焰扩散到两个目标,**Q** 命中眩晕,让 ADC 走上来收尾。

代价是脆。Brand 没有逃生、没有自带续航、也没有任何工具去保护自家 AD 位。如果对面辅助先开 — Leona 眩晕、Nautilus 钩子、Rakan 位移 — 你唯一的真正答案就是 *比对方杀掉你 C 位更快地杀掉发动者*,而这只在你领先时才行得通。这是一个二元选择:要么你压爆兵线并 snowball (snowball 是滚雪球式的早期优势:击杀 → 经济 → 装备 → 更多击杀),要么早早死亡喂出两个肥仔。中间几乎没有过渡地带,因此本攻略集中讲解你必须打好的两个时机 — 2 级强势期与团战中 **R** 的弹射。

## 推荐出装

**起始装备:** ![Spellthief's Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3850.png) **Spellthief's Edge** (AP 辅助起始装,任务进度通向 Bloodsong) + 2 个 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**。

**核心装备 (按购买顺序):**

1. ![Bloodsong](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3877.png) **Bloodsong** — Spellthief's Edge 完成的辅助任务奖励。必出:提供让你买真正装备的金币收入,加上参与击杀叠 AP 的被动,让伤害 snowball。
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — Brand 的标志性伤害装。百分比血量灼烧叠加在 blaze 跳伤上,惩罚坦克和高血量阵容。
3. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — ability haste 鞋子,在这里优先于 Sorcerer's Shoes,因为辅助释放技能更频繁、补刀更少。每场团战的 R uptime 更高。
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 额外爆发,以及对低血量阈值敌人触发额外法穿的被动。正好与追击残血的 R 弹射衔接。

**情境装:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — 对位会对你 ADC 释放 hard CC 的对手 (Leona 连控、Morgana Q、Pyke 钩子)。给 C 位解控是 Brand 最接近 peel 的操作。
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — 对位强 AOE 强开阵容 (Malphite R, Yasuo wombo — "wombo" 是多个大招连环触发,一次抓住对方整队 — Kennen R)。主动护盾就是团战救命按钮。
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 对位高回血阵容 (Soraka, Yuumi peel, 队伍带 Aatrox 或 Vladimir)。Grievous Wounds 被动减半治疗效果。
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 任何核心目标做出第一件魔抗装就立刻接出。一件 800 金的小件就能 soft-counter 你整套出装,这是阻止它的方法。

**鞋子:** 默认 ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity**。如果对面有 3+ 个法术 hard CC 威胁,换成 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**。

**加点顺序:** 主升 **W** (基础伤害最高、2v2 的主力 poke),副升 **Q** (增强眩晕伤害),最后升 **E**。**R** 在 6、11、16 级各加一点。

**符文:** 主系 **Sorcery** 带 **Arcane Comet**、**Manaflow Band**、**Transcendence**、**Scorch**。副系 **Inspiration** 带 **Biscuit Delivery** 与 **Cosmic Insight**。

## 关键对线

- **Leona / Nautilus / Rell:** 强开型坦克辅助。在拿到 ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** 之前,站在她们的 Flash 强开射程外。她们走近时,把 **W** 预放在自己脚下,准备她们一开就 **Q** 一记眩晕。
- **Blitzcrank / Thresh / Pyke:** 钩子系。永远站在小兵后面 — 钩子是单体非指向技能,会被兵线挡住。空钩了就用 **W → Q** 免费 poke 惩罚;只要他们钩子可用,就绝不要离开掩体去普攻。
- **Yuumi:** 免费对线。Yuumi 不附身时没有本体。把 **W** 时机算准她为补刀或触发强化普攻而下来的瞬间。一个被 **W → Q** 抓住的脱离 Yuumi 就是一个 C 位还来不及护盾的人头。
- **Soraka:** 用 poke 累积压力直到她蓝条空掉。Soraka 用自己 5% 血量给 ADC 治疗 — 在 ADC 身上每跳一次 blaze,就抹掉她 30 秒的治疗量。
- **Lulu:** 变形与护盾让 1v1 爆发不靠谱。从 **W** 极限距离 poke,除非自家打野在路上,否则绝不 commit 到眩晕接 all-in ("all-in" 是为击杀的完全 commit — 没有出口,直到一方死亡)。如果 Lulu 在 trade 中变形了你的 ADC,这个 trade 就输了。

## 强势期与胜利条件

- **2 级 (W + Q):** 第一个强势期。一级 **W** 加上初始的 **Q**,**W → Q** 眩晕连招就能用了。Brand 辅助 90% 的人头都发生在这个窗口 — 推线先到 2 级,然后把连招砸在对方辅助身上。
- **6 级 (R 解锁):** 第一发 **Pyroclasm** 上线。如果对面下路站一起 (基本上是必然 — 辅助会站在 ADC 身后),一发 **R** 每次弹射约打掉脆皮一半的血。
- **Bloodsong + Liandry's Torment 成型 (~14-16 分钟):** 伤害逆转。从这里开始你的伤害高于任何 enchanter 辅助,并对发育起来的 ADC 形成击杀威胁。在小龙强制开抱团团战。
- **R + Shadowflame 成型 (~22-26 分钟):** 两个聚在一起的敌人会吃下整段弹射并双双倒下。这是 Brand 在后排赢下团战的时刻 — 选择对方 C 位与辅助互相处于弹射距离的角度。

## 常见错误

- **为补刀去 A 兵线。** 作为辅助,不要拿补刀 — AD 位的补兵金币是用来养线的。站后面用 **W** poke 对手,只在 C 位死了或回家时才平 A 小兵。
- **裸 Q 消耗。** 没有 ablaze 的 **Q** 是慢速弹道,被侧步走位的敌人轻松躲掉。先用 **W** 落地铺路,或用 **E** 砸到能扩散 blaze 的小兵 — 然后再 Q 眩晕。
- **站在 ADC 前面。** Brand 既不能 peel 自己,也不能 peel 任何人。站前面就意味着强开打到你身上,你死了,你的 ADC 就没有辅助。站在与 ADC 同深度或退后一步,中间隔一个小兵。
- **只对一个敌人开大。** **R** 在敌人之间弹射,优先 ablaze 目标,但单体多次跳伤的递减很大。把 **R** 留给两到三个敌人在弹射距离内的团战 — 永远不要把它当作收尾技用在落单逃跑的目标上。
- **把 W 放在敌人当前的位置。** Pillar of Flame 落地前有延迟。把它砸到敌人 0.6 秒后 *将要* 在的位置 — 通常是他们必须经过去补下一个小兵或逃出眩晕的点。砸到他们当下站的位置,对任何一个略微注意的对手都是必空。

## 进阶技巧

练习 **double-spread setup** 双扩散起手。当对方辅助与 ADC 站在一起时 (推线时,或辅助挡在 ADC 前掩护时常见),按顺序操作:**W** 砸在两人之间 → 双方都拿到 blaze 第 1 层。**E** 砸到对面辅助 → 辅助第 2 层 blaze,扩散到 ADC 让他也到第 2 层。现在两人都在 2 层 — 你的 **Q** 不再是用来 *设置* 眩晕的,而是 *收尾* 用的。Q 砸辅助:第 3 层触发,辅助被眩晕,不稳定爆炸同样命中 ADC 把他也推到第 3 层。**R** 此时在两个被眩晕的、blaze 满层的目标之间弹射,两人双双倒下,你毫发无伤。这就是把"还行的 Brand 辅助"变成每场都赢线的 Brand 的连招。
