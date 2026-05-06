---
title: "Katarina Mid Build & Guide — Patch 16.9"
slug: "katarina-mid"
language: "zh-hans"
patch: "16.9"
champion: "katarina"
role: "mid"
last_updated: "2026-05-05"
description: "League of Legends 英雄联盟 16.9 版本 Katarina 中单完整攻略:起手装、AP 刺客核心出装顺序、符文加点、关键对线对策、装备节点强势期、新手常见错误规避,以及借敌方眼位反 gank 的进阶技巧。"
quick_learn:
  champion_dd_id: "Katarina"
  difficulty: 4
  damage_type: "magic"
  champion_class: "AP Assassin / Snowball Resetter"
  abilities:
    - key: "P"
      name: "Voracity"
      description: "Katarina 击杀或助攻刚刚被她伤害过的敌方英雄时,所有剩余技能冷却大幅缩短。捡起 Dagger 时触发一次 AOE 斩击。"
      dd_spell_id: "Katarina_Passive"
    - key: "Q"
      name: "Bouncing Blade"
      description: "指向性 Dagger,在附近敌人之间弹射,最后落在第一目标身后。地面上的 Dagger 是整套连招的轴心。"
      dd_spell_id: "KatarinaQ"
    - key: "W"
      name: "Preparation"
      description: "向 Katarina 头顶抛出一把 Dagger,稍后落地,同时获得短暂 Move Speed。这就是你点 E 闪过去的 Dagger。"
      dd_spell_id: "KatarinaW"
    - key: "E"
      name: "Shunpo"
      description: "瞬移到英雄、小兵、眼位或 Dagger 上。捡起 Dagger 会缩短 Shunpo 冷却。可见的敌方眼位也是合法目标。"
      dd_spell_id: "KatarinaEWrapper"
    - key: "R"
      name: "Death Lotus"
      description: "对最近的 3 名敌方英雄持续掷刀的引导技,附加 Grievous Wounds。任意硬控都会打断。后手清场用,绝不开团用。"
      dd_spell_id: "KatarinaR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "W" }
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
    - { dd_id: "3152", name: "Hextech Rocketbelt" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4646", name: "Stormsurge" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3135", name: "Void Staff" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对位强开 (Malphite R, Zac, Amumu) — 金身能挡掉打断 R 引导的强开"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "对位单体法术 CC (Annie 击晕, Lissandra R, Twisted Fate 黄牌) 会打断 R"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "对位 CC 多的阵容 (2+ 击晕/定身) — 替换 Sorcerer's Shoes,避免 R 反复被打断"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "对位高回复阵容 (Soraka, Vladimir, Dr. Mundo) — Grievous Wounds 压制治疗"
  base_combo: ["W", "E", "Q", "AA", "R"]
  win_condition: "线上拿下一个击杀或助攻就开始 snowball:每次击杀都会通过 Voracity 重置全部技能,所以一次单杀往往会在下一波兵线变成 double。"
  weakness: "硬控打断 R,等于把整段引导浪费掉。没有击杀重置冷却时,她就只是个射程短、只有一次位移的近战 — 远程法师能白嫖她。"
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8140, name: "Grisly Mementos", icon_path: "perk-images/Styles/Domination/GrislyMementos/GrislyMementos.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "主系 Domination:Electrocute 在 W-E-Q 一轮内 (3 秒内 3 段独立伤害) 稳定触发,白嫖一段 burst。Sudden Impact 在每次 Shunpo (闪现) 后立即触发。Ultimate Hunter 让 Death Lotus 每次击杀都减冷却,剩下的交给 Voracity。"
    secondary_rationale: "副系 Precision:Triumph 在击杀时回复 12% 缺失生命,让你能在重置好的技能上连下第二个人头。Coup de Grace 对 40% 以下的敌人 +8% 伤害 — 正是 R 收尾团战的窗口。"
    secondary_alternative: "如果对面有较强的法术 poke (Xerath, Vel'Koz, Ziggs),把副系换成 Resolve,带 Second Wind (对消耗的回复) 与 Overgrowth (额外生命成长),撑过对线期到第一次击杀。"
matchup_draft:
  pick_into:
    - examples: ["veigar", "twisted-fate", "anivia"]
      archetype: "无位移的脆皮法师"
      reason: "他们逃不出 Katarina 的 W-E-Q burst window。一旦起手技 (Veigar 笼子、TF 黄牌、Anivia E) 进入冷却,就没有任何手段应对一发 Shunpo 突进。"
    - examples: ["lux", "orianna"]
      archetype: "无逃生的中距离法师"
      reason: "她们都依赖躲在小兵后面的站位。Katarina 闪到兵线后方的 Dagger 上,用 W-E-Q-AA 删掉对手,再借击杀重置去找下一个目标。"
    - examples: ["karthus"]
      archetype: "缺少恢复或硬控的发育型 scaler"
      reason: "Karthus 需要安静的发育时间。Katarina 的重置压力会逼他交闪、放弃他唯一的胜利条件 — 后期成长。"
  counterpicks:
    - examples: ["annie", "lissandra"]
      archetype: "瞬发硬控的法师"
      reason: "他们的击晕瞬发且无法躲避:在引导途中切断 Death Lotus,把 Katarina 钉在原地任由对面集火。"
    - examples: ["xerath", "vel-koz"]
      archetype: "射程更远的炮台法师"
      reason: "前 5 级在 Q 射程 (625) 之外单方面消耗 Katarina。她到 6 级时就只剩 40% 血量、没有 Voracity 重置可用,一波技能连招就秒。"
    - examples: ["diana", "pantheon"]
      archetype: "带瞬发开团的爆发 all-in 中单"
      reason: "Diana 的 Q-R 连招和 Pantheon 的 W 击晕,都比 Katarina 自己的 W Dagger 落地还快。她在 trade race 上输,装备节点也被甩开。"
---

## 概述

Katarina 是一名近战 AP 刺客,核心机制围绕被动 **Voracity**:每次击杀或助攻都会大幅削减她剩余所有技能的冷却。这一条机制就是她整个英雄的身份 — 一波线上击杀重置她的全部技能,所以一次击杀经常会在下一波兵线变成 double。中路适合她,因为整张地图的反应链需要短距离的支援轮转。

她的思路一句能讲清,但执行起来很硬。用 **W** 丢一个 Dagger,或者利用 **Q** 弹射后落下的 Dagger,然后用 **E** 闪到上面打 AOE 伤害,再衔接平 A,在对手残血时开 **R**。技术差距体现在两个点:施法顺序 **W-E-Q** (先丢 Dagger 再 E,顺序反了就废)和 **R** 的时机 — 开团前按会被任意控制打断,开完团后按则可以靠重置链清场。

## 推荐出装

**起始装备:** Doran's Ring + 2 个 Health Potion。即使对线远程也跳过 Doran's Shield — AP 和蓝量回复在 trade 中赢回来的,远多于额外生命能挽救的。

**核心装备 (按购买顺序):**

1. ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** — 第一个装备节点。在 Shunpo 之外多一个短距离冲刺 (主动),让你能切到已经交了逃生技的目标身上。AP 和生命也帮你扛住对手的反打。
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 固定法穿。默认鞋;CC 多时换 Mercury's Treads。
3. ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — 与 W-E-Q 完美对齐的爆发节点。生命阈值的被动 (把敌人打到一定血量以下就会触发) 给你足够伤害,不开 R 也能斩杀目标。
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 后期的 scaling 乘数装。AP 最高的单件;30% AP 让 Katarina 从"snowball assassin"升级到"一发秒任何脆皮"。
5. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 随目标缺失生命增加的额外法穿。和 Stormsurge、R 配合得极好,在团战中收掉残血敌人的最佳件。
6. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 一旦任何核心目标合成一件魔抗装就立刻接出。

**情境装:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 对位强开 (Malphite R, Zac, Amumu)。金身打掉那些会切断你 R 引导的强开。
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 对位会打断 R 的单体法术 CC (Annie 击晕, Lissandra R, Twisted Fate 黄牌)。护盾吃掉一个技能,引导就能撑下去。
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 当对面有 2+ 个能切断 Death Lotus 的击晕或定身时,替换 Sorcerer's Shoes。
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 对位高回复阵容 (中单 Soraka, Vladimir, 上单 Dr. Mundo)。压制对面治疗,让一次击杀真的能算到账上。

**鞋子:** Sorcerer's Shoes 默认。对面有硬控时换 Mercury's Treads;Ionian Boots of Lucidity 几乎不对,因为 Voracity 已经替你解决了冷却。

**加点顺序:** 主升 **Q** (清线和主要伤害),副升 **W** (每套连招的轴心 dagger),**E** 最后。**R** 在 6、11、16 级各点一级。

**符文:** 主系 **Domination** 带 **Electrocute**、**Sudden Impact**、**Grisly Mementos**、**Ultimate Hunter**。副系 **Precision** 带 **Triumph** 与 **Coup de Grace**。基石符文 (页面顶部那枚主符文) 在 W-E-Q 中天然触发,因为你打了 3 段独立伤害。

## 关键对线

- **Annie:** 最艰难的对线。她的击晕瞬发,直接打断 Death Lotus。如果线上劣势,把 ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** 提到第二件。6 级前在兵线后面用 **Q** 补刀,她击晕没冷却之前不要瞬移进去。
- **Lux:** 6 级之后是优势对线。6 级前她的 **Q** 比你射程长,要躲在小兵后面规避。6 级后从边路兵线 dagger 闪过去秒她 — 她没有位移可逃。
- **Zed:** 操作对线。同样的爆发模板但脱离手段更多 (他的 **R** 让自己 0.5 秒不可选中,会打断你的引导)。把 **R** 留到他先按 R;只要扛过他的爆发,你就靠击杀重置反杀。
- **Twisted Fate:** 明确的 counter pick。6 级前你推线压他;6 级后他想去支援时,你从兵线 dagger 闪过去秒他 — 他没有任何防御件。在中路放眼 (ward) 来跟踪他的 **R**。
- **Diana:** 你的硬克。她的 **Q-R** 连招会在你 **W** 的 dagger 落地之前触发。把 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** 当作第三件;塔下没出金身之前不要往她身上闪。

## 强势期与胜利条件

- **2 级:** 有了 **Q** 和 **E** 就可以打 trade。先丢 **Q**,走到弹射范围里,再用 **E** 闪到落下的 dagger 上吃 AOE,然后撤。冷却好就反复打,白嫖 poke。
- **6 级:** 第一发 **Death Lotus**。靠 Voracity,一次击杀或助攻就重置引导,小规模交战里伤害翻倍 — 6 级前的对刚 4 秒结束,6 级后一次击杀可以把 10 秒的循环重置全打出来。
- **![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) Hextech Rocketbelt 成型 (~ 11-13 分钟):** 第一个大装备节点。主动冲刺给你第二段位移,可以切到已经交完逃生技 (Flash, Lux 的 **E**, Yasuo 的 **E**) 的目标身上。支援压力从这里反转。
- **![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) Stormsurge 上线 (~ 18-22 分钟):** W-E-Q-AA 现在不开 R 也能秒杀任何 70% 以下的脆皮。这是强行打资源点和找边路单点的窗口。

## 常见错误

- **R 被强开前提前引导。** 硬控会打断 Death Lotus,白白浪费冷却。**R** 应该在开团之后用:等己方坦克先开,等对面前排交完控,再从安全位置引导清场。前置 **R** 只用于斩杀那些没法打断你的残血目标。
- **先 E 闪过去再丢 W。** 施法顺序是 **W → E → Q**。闪过去时 dagger 必须已经在地上 (或正要落地),否则你捡不到,丢的不仅是被动的 AOE 伤害,还有 Shunpo 的冷却缩减。
- **想在带不掉的目标上贪重置。** 如果敌人 35% 血但他队友就在旁边,这次击杀触发 Voracity 时已经晚了,你会死在跟手伤害下。用 **W** 的 Move Speed 撤,慢慢等正常冷却。
- **用 Shunpo 推线消耗小兵。** **E** 是逃生用的防御位移。线上靠 **Q** + 平 A 推,只有在打团或逃命时才闪到小兵上。
- **对面有双瞬发 CC 时还选 Katarina。** 如果对面有 Annie + Leona,你的 **R** 永远引导不完。要么 ban/dodge,要么接受围着他们冷却打 — 等他们把击晕用在别人身上才闪进去。

## 进阶技巧

用 **E** 跳到敌方眼位逃 gank。瞬移可以作用于任何可见的眼位 — 包括对面的饰品和插在你方河道里的真眼。如果你提前在三角草丛瞄到一只 Stealth Ward,就等于多了一个不会出现在对面小地图上的逃生工具:大多数对手把眼往前插的时候,根本没意识到自己给了你一条退路。反过来同样适用:回城时如果在自家塔附近发现敌方眼位,下一次 gank 的起手位置就要绕开它。
