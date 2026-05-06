---
title: "Annie Mid Build & Guide — Patch 16.9"
slug: "annie-mid"
language: "zh-hans"
patch: "16.9"
champion: "annie"
role: "mid"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Annie 安妮中单实战攻略:Pyromania 眩晕起手节奏、爆发出装顺序、关键对线思路、强势期切入时机、新手常见错误规避,以及收尾的进阶 R 闪连招技巧详解。"
quick_learn:
  champion_dd_id: "Annie"
  difficulty: 1
  damage_type: "magic"
  champion_class: "Mage / Burst"
  abilities:
    - key: "P"
      name: "Pyromania"
      description: "每施放 4 个技能就会为 Pyromania 充能,下一个伤害技能将眩晕目标。Annie 出生与复活时眩晕已就绪 — all-in 之前先用兵线充能计数。"
      dd_spell_id: "Annie_Passive"
    - key: "Q"
      name: "Disintegrate"
      description: "射程 625 的指向型火球。击杀目标返还法力并刷新 50% 冷却 — 全套技能里最廉价的消耗与补刀工具。"
      dd_spell_id: "AnnieQ"
    - key: "W"
      name: "Incinerate"
      description: "射程 600 的扇形火焰。主要清线工具(一发清掉整列法师小兵),也是 5 级时基础伤害最高的技能。"
      dd_spell_id: "AnnieW"
    - key: "E"
      name: "Molten Shield"
      description: "对自己或队友施放的护盾,附带递减的移速加成,并对下一个攻击者反弹魔法伤害。计入技能施放次数 — 用来在 engage 前补足 Pyromania 充能。"
      dd_spell_id: "AnnieE"
    - key: "R"
      name: "Summon: Tibbers"
      description: "射程 600 的近身 AOE 伤害,同时召唤 Tibbers,一只会自动攻击并灼烧周围敌人的熊。施放本身算一次技能,所以 4 层 Pyromania 的 R 会眩晕所有命中目标。"
      dd_spell_id: "AnnieR"
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
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对位机动型刺客与 diver (Zed, Diana, Talon, Akali) — 金身让你在 R + Flash 强开后还能存活"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "对位无硬控的风筝阵容 — R + W 的减速把目标焊死在 Tibbers 火焰光环里"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "对位单体法术 CC (Lissandra R, Twisted Fate stun, Ahri charm)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "只要任何核心目标买了魔抗装就立刻替换"
  base_combo: ["Q", "W", "E", "AA", "R"]
  win_condition: "在兵线上把 Pyromania 叠到 4 层,Flash + R 切入对扎堆敌人放出近身 AOE 眩晕,再用 Luden's Companion + Shadowflame 秒掉后排脆皮。"
  weakness: "基础机动为零,技能射程 600-625。被 artillery mage 单方面消耗,被多段位移的刺客在眩晕生效前直接穿过 R 范围。"
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
matchup_draft:
  pick_into:
    - examples: ["veigar", "cassiopeia", "anivia", "karthus"]
      archetype: "无位移的法师"
      reason: "Annie 的 R 是射程 600 的近身 AOE 眩晕,加上 Tibbers 持续输出。没有位移、没有隐身的法师在 6 级 all-in 中会吃下整套连招,完全来不及反应。"
    - examples: ["diana", "katarina"]
      archetype: "前摇明显的近战 burst"
      reason: "Annie 在清线时就提前叠满 Pyromania:对手一旦下决心 gap-close,Flash + R 的眩晕就在伤害落地之前打断他们的连招。"
    - examples: ["fizz", "kassadin"]
      archetype: "6 级前疲软的近战法师"
      reason: "他们在 6 级前必须走进 Q 射程才能补刀:Annie 自由消耗,带着满层 Pyromania 抢 2 级,在没有反开手段的情况下逼对方回家。"
  counterpicks:
    - examples: ["xerath", "vel-koz", "lux"]
      archetype: "远程炮台型法师"
      reason: "他们在 850-1400 的射程消耗 Annie,而 Annie 只有 625。她没有位移、没有护盾应对远程 poke,每一波兵线都在掉血,且没有反打 all-in 的选项。"
    - examples: ["zed", "akali", "yasuo"]
      archetype: "6 级后高机动刺客"
      reason: "他们的位移或隐身窗口让他们在眩晕生效前离开 R 的 600 半径。Akali 的烟雾和 Yasuo 的风墙能直接吃掉她的核心技能。"
    - examples: ["twisted-fate", "galio"]
      archetype: "全图 / 跨地图支援型"
      reason: "Annie 没有支援射程 — 她只能清线留在中路。对手的大招能翻转边路与小龙节奏,所以 Annie 即便赢了 1v1 对线,也会输掉宏观节奏。"
---

## 概述

Annie 是游戏里最简单的 burst mage(把大量法术伤害集中在 1-2 秒内打出,然后等技能冷却的英雄),也是 6 级前后惩罚失误最狠的英雄之一。她的技能组在纸面上看起来很小 — 一个指向型 Q,一个扇形 W,一个给自己或队友的护盾,以及一个召唤熊的大招 — 但她的被动 **Pyromania** 把这一切串了起来:每施放 4 个技能就为下一次命中提供必中眩晕。这一项机制把她从一个新手友好的英雄变成必中眩晕的威胁,Tibbers 出来后只要按一个键就能抹掉对面的后排脆皮(团战中站在己方阵型最后方的核心 carry)。

无论是对线还是团战,Annie 的思路完全一致:在小兵身上把 **Pyromania** 叠到 4 层,走到 600 射程内,用 **R**(Tibbers)对最有价值的目标触发计数器,然后接 **W** 与 **Q**。区分一个普通 Annie 与顶级 Annie 的两个判断点:**何时保留计数器**(不要在 commit — 全力投入 — 一场战斗前用在小兵上),以及**如何把 R 砸下去**(Flash + R 是游戏里在团战里对扎堆的敌人最稳定的 engage — 开启团战的技能 — 之一)。

## 推荐出装

**起始装备:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring**(提供额外法力,让 Annie 早期能持续放 Q 和 W)+ 2 个 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**(对线时缓慢回血)。戒指支撑她的开局换血;药水帮她抵御 poke(对面法师的远程消耗伤害)。

**核心装备(按购买顺序):**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — 第一件装备的爆发节点(所谓 "power spike" 指英雄因升级或装备完成而明显变强的瞬间)。Annie 的连招很短,首次命中的额外伤害刚好与 **R + W** 砸到被眩晕目标的瞬间重合。
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 固定法术穿透鞋子。她的击杀来自魔抗低的脆皮目标,这个阶段固定法穿比百分比法穿收益更高。
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 带血量阈值被动的额外爆发(敌人在约 35% HP 以下时提供额外法术伤害)。性价比极高的收尾装,把 R + W 从"差点秒掉"提升到"真的一发秒"。
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 后期乘数装(+30% 总 AP,其中 AP / Ability Power 是 scaling Annie 所有技能的属性)。这件成型后,R 连招不再只能秒单一脆皮,而是直接抹掉一片扎堆的敌人。

**情境装:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 对位机动型刺客与 diver (Zed, Diana, Talon, Akali)。R + Flash 强开后立刻开金身(让你 2.5 秒无敌的主动技):你存活,队友跟进。
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — 对位无硬控的风筝阵容(边攻击边后撤维持距离的队伍)。R + W 的减速把目标焊死在 Tibbers 的火焰光环里。
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 对位单体法术 CC (Lissandra R, Twisted Fate stun, Ahri charm)。护盾顶掉先手 CC 技能,你就能把 **Flash** 留作进攻用途。
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 只要任何核心目标做出了一件魔抗装就立刻接出。

**鞋子:** 默认 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**。如果队伍需要更频繁的 **R** 来开团,![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** 是替代选择。

**加点顺序:** 主升 **Q**(冷却最低、击杀返蓝、主要 trade — 对线短回合伤害交换 — 工具),副升 **W**(清线 — 处理对面小兵波;5 级时基础伤害最高),最后升 **E**(辅助型,等级提升收益小)。**R** 在 6、11、16 级各点一级。

**符文:** 主系 **Sorcery**(法术伤害树),带 **Arcane Comet**(命中英雄时多打一发法术飞弹)、**Manaflow Band**(每次命中技能增加最大法力)、**Transcendence**(5、8、11 级提供冷却缩减)、**Scorch**(每约 10 秒下一次技能附带额外灼烧)。副系 **Inspiration** 带 **Biscuit Delivery**(对线免费回蓝回血饼干)与 **Cosmic Insight**(中期 **Flash** 与 **R** 冷却更短)。

## 关键对线

- **Yasuo / Yone:** 风墙挡你的 **Q** 与 **W**(他们的墙能挡掉投射物)。先用低层 **Q** (1-2 层 Pyromania,眩晕未就绪) 骗出风墙,等风墙进入冷却再用满层切入 — 它的真空期很长,他们没法同时挡你的 **Q** 和切入。
- **Lux:** 她的 **Q** 1100 射程压你 625。不要追;用 **W** 在安全距离清线,![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** 一成型就去 roam(离开本路支援其他位置),让你打野利用她没有逃生技的弱点反 gank 收掉。
- **Veigar:** 优势对线。他必须靠小兵叠 **Q** 来涨 AP,而且没有位移;预先叠好 Pyromania,6 级用 **Flash + R** 切入,在他用 **E** 把你笼住之前先眩晕他。
- **Twisted Fate:** 谁先 roam(去其他路帮队友)谁赢的对位。**W** 一冷却就推线。他的 **R** 一好,立刻在中路打 mia(missing in action:提示队友他消失了)信号,带着自己的大招跟着兵线 rotate(随兵线移动) 到他要去的边路 — Pyromania 满层的 2v2 是稳吃的人头。
- **Diana:** 6 级前她是脆皮(防御低、死得快);她每次过来补刀时,用指向 **Q** 消耗。6 级保持 Pyromania 满层:她 **R** 跳到你脸上时,你的 **R + W** 在她还没来得及二段跳之前就把她打住。

## 强势期与胜利条件

- **2 级:** **Q** + **W** 都在,加上 Pyromania 已就绪,你拥有一段短促 all-in (双方都没法 disengage 的全力交手),能击败大多数没料到 2 级眩晕的远程法师。如果两人同时升 2 级后对面靠近补 cs(creep score:补刀小兵换金币),走上去硬换。
- **6 级 + Flash:** 第一次 **R** 配 **Flash** 是你整局最大的单点爆发节点。如果对面打野在地图另一端,扎堆的兵线遭遇战就是免费双杀。
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion 完成 (~ 11-13 分钟):** 爆发阈值翻盘。**R + W + Q** 命中被眩晕的脆皮,无需队友跟进就能直接秒。
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap 成型 (~ 24-28 分钟):** Tibbers 光环 + 施放本身的 AOE 变成团战核弹(一次施放抹掉多个目标);此时强行围资源开团,寻找 **Flash + R** 命中 3+ 个扎堆目标的机会。

## 常见错误

- **all-in 前把 Pyromania 第 4 层用在小兵上。** 走进 trade 距离前,永远先看头像下的层数计数。如果是 3 层却放了 **W** 清线,你的必中眩晕就送给了一只法师小兵。
- **Pyromania 没就绪就放 R。** 没有眩晕的 **R** 虽然有伤害,但目标会直接走出 Tibbers 光环。如果 Pyromania 没充满,先对自己放 **E** 补一格再 commit。
- **施放 R 时站在最大射程边缘。** **R** 射程 600,和 Annie 平 A 一样近。用 **Flash** 走完最后 200-400 距离切到扎堆人群里,而不是从边缘释放 — 站边缘只眩晕最近一个,其他人会走出去。
- **跳过 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes 直接堆 AP。** Annie 的爆发只在魔抗低的时候能秒人;不出固定法穿就乱堆 AP,只会让脆皮残血 50 而不是 0,把稳定击杀变成追击。
- **不看蓝量乱按 Q。** **Q** 只在**击杀时**才返还法力。如果对一个 200 HP 的小兵放 Q 但没杀掉,你白白花了 60-80 蓝量。**Q** 用在残血小兵或英雄身上,不要在他们满血、且自己和敌人之间还隔着一个小兵时拿来 poke。

## 进阶技巧

练习 **Flash + R 取消后摇**(在施放帧期间使用 **Flash**,而不是等待施放结束的小技巧):按下 **R** 的瞬间,朝同一方向按 **Flash**(输入会在施放过程中被 buffer)。**R** 的施法点很短,**Flash** 会在 AOE 结算前把你重新定位到目标身上 — 让你能像从 600 起手一样,直接眩晕 800 距离上的后排。大多数新手把这个连招理解为"按 **R**,再根据落点反应";用了取消后摇,这就变成一个 700 单位的 gap-close(瞬间拉近距离的短距传送),几乎无法躲开。
