---
title: "Camille Top Build & Guide — Patch 16.9"
slug: "camille-top"
language: "zh-hans"
patch: "16.9"
champion: "camille"
role: "top"
last_updated: "2026-05-01"
description: "League of Legends 英雄联盟 16.9 版本 Camille 卡蜜尔上单完整攻略:起始装、Fighter 核心出装顺序、Precision 符文、关键对线、强势期与分推节奏、常见错误规避,以及 Flash → E 等进阶连招技巧。"
quick_learn:
  champion_dd_id: "Camille"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Adaptive Defenses"
      description: "对英雄的每次普攻会获得一层护盾,数值为 Camille 最大 HP 的一定百分比,并匹配目标的伤害类型(物理或法术)。"
      dd_spell_id: "Camille_Passive"
    - key: "Q"
      name: "Precision Protocol"
      description: "强化下一次普攻,附带额外伤害与移速。数秒内再次施放打出第二段;两段之间停留得越久,额外伤害越高,并附加 true damage。"
      dd_spell_id: "CamilleQ"
    - key: "W"
      name: "Tactical Sweep"
      description: "短暂延迟后释放扇形冲击波。外圈减速敌人、造成额外伤害,并按 Camille 的损失血量回复生命。"
      dd_spell_id: "CamilleW"
    - key: "E"
      name: "Hookshot"
      description: "向墙体冲刺并反弹,落地时挑飞英雄。主要的 engage 与 disengage 工具——施法距离内必须有墙。"
      dd_spell_id: "CamilleE"
    - key: "R"
      name: "The Hextech Ultimatum"
      description: "突进到指定英雄,将其困在圆形竞技场内。盟友与目标都不能进出;期间对目标普攻附加额外法术伤害。"
      dd_spell_id: "CamilleR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
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
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
  situational_items:
    - dd_id: "3078"
      name: "Trinity Force"
      against: "对位 duelist (Fiora, Jax, Irelia) 时作为首件替换:Spellblade 重置让 Q1-AA-Q2 的 trade 节奏比 Stridebreaker 更稳"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "对位高法术爆发 (Vladimir, Rumble, Cassiopeia):50% HP 以下的法术护盾能让你撑过第一轮 CD"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "对面前排叠护甲 (Plated Steelcaps + Randuin's 等多件护甲装):armor shred 同时放大队友的物理伤害"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "领先并选择 splitpush 边路 (单线施压逼对面回防):增加塔伤,无队友时获得额外属性"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "对位强 AP 或对面有 3 件以上 hard CC (会打断 E 飞行与 W 蓄力的 stun, root, taunt) 时换鞋"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "对面有发育起来的 AD 刺客 (Zed, Talon, Kha'Zix) 滚雪球:复活让你即使中途倒下也能完成 R 连招"
  base_combo: ["E", "Q1", "AA", "W", "Q2", "R"]
  win_condition: "从墙边用 E engage,把核心 carry 锁进 R,然后在 peel 到位前用 Q1-AA-W-Q2 burst 干掉。边路用 Q 重置和 W 回血赢下 1v1。"
  weakness: "无墙的开阔地段直接废掉 E。R 冷却很长,空窗期她只是一个皮厚的 auto-attacker。Hard CC 会打断 E 的飞行与 W 的蓄力。"
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
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "主系 Precision: Conqueror 在 W 减速、Q1、AA、Q2 上叠层很快,完美奖励 Camille 用 R 强制的长 fight。Triumph 在击杀时返还 HP,Legend: Alacrity 加快 Q 重置和 R 普攻节奏,Coup de Grace 与 40% HP 以下的 Q2 延迟 true damage 完美对齐。"
    secondary_rationale: "副系 Resolve: Bone Plating 缓和 Darius / Renekton / Pantheon 的早期 all-in,Overgrowth 提升被动护盾计算所依据的 HP 池。"
    secondary_alternative: "对位远程 poke 上单 (Quinn, Teemo, Vayne, Gnar) 时把 Resolve 换成 Inspiration,带 Magical Footwear (12 分钟左右免费鞋子) 与 Cosmic Insight (Flash 与 R 冷却更短,贴着 CD 开团)。"
matchup_draft:
  pick_into:
    - examples: ["garen", "darius", "nasus"]
      archetype: "无位移的近战 bruiser"
      reason: "E + R 把他们锁在近战范围内,毫无回应手段。Q 重置和 W 减速让 Camille 在 R 圈内 kite (一边攻击一边后撤),熬过对方的层数或技能 CD。"
    - examples: ["vladimir", "rumble"]
      archetype: "走上路的脆皮法师"
      reason: "R 一旦命中,他们无法血池、位移或离开竞技场。Q2 的 true damage 直接穿透他们的护盾与回复打掉血条。"
    - examples: ["sion", "chogath"]
      archetype: "后期成型的坦克"
      reason: "Q2 的 true damage 与 Sundered Sky 的爆发能 chunk 巨大的血池。R 阻止他们在边路 fight 中跑回队伍接受 peel。"
  counterpicks:
    - examples: ["quinn", "teemo", "vayne", "gnar"]
      archetype: "带 kite 工具的远程上单"
      reason: "他们 poke (远距离消耗) 而不交身,Camille 没有远程回应。E 需要墙,而他们直接走开就行。"
    - examples: ["malphite", "poppy", "maokai"]
      archetype: "硬 CC 前排坦克"
      reason: "他们的 crowd control 会打断 E 的飞行、W 的蓄力与 R 的锁定突进。先吃 stun 的 all-in (打到死的全力 fight) Camille 全输。"
    - examples: ["renekton", "riven", "pantheon"]
      archetype: "早期 all-in 强力的近战"
      reason: "他们 burst (在 1-2 秒内打满伤害) 比 Camille 摆出 E + W 还快,3 级前的 trade pattern 直接把她碾压。"
---

## 概述

Camille 是一名近战 fighter / diver (会跳进对方 backline 击杀核心目标的英雄):她从墙边 dash 锁定单个 carry (后排高输出目标 — 通常是 ADC,即下路 marksman,或中单),并把团战变成自己 **R** 圈内的 1v1。她的技能组奖励长 trade (双方互拼伤害的拉锯):**Q** 是带两段的强化普攻 (= AA),第二段附加延迟 true damage (无视护甲与魔抗的伤害);**W** 的外圈命中英雄会回血;她的被动护盾每次 AA 都减少对应类型 (物理或法术) 的来袭伤害。她以物理伤害 (AD = Attack Damage) 为主,但 **R** 提供额外法术伤害 (AP = Ability Power 加成),所以 damage_type 是 mixed。

一句话游戏思路:等 **R**,走到边路或河道草丛,从墙边 dash 到核心目标身上,用 **Q1 → AA → W (外圈) → Q2** burst 掉他,同时 fight 的其余部分被锁在竞技场外。**R** 没好时,贴着小兵安全 farm,避开没墙可以挂 **E** 的开阔地。

## 推荐出装

**起始装备:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**。只在远程 poke 对线 (Quinn, Teemo, Vayne) 中替换为 ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** (更多 HP 与减伤,无 AD)。

**核心装备 (按购买顺序):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — 首件起手。主动突进 + 减速可以衔接 **W** 外圈,并补足 Camille 原本缺失的清线能力。
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 对位 AD 阵容 (大量物理伤害英雄) 与 AD 打野。普攻减伤至关重要,因为 Camille 的多数威胁是物理 bruiser (中距离、高 HP、持续输出的战士)。
3. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — 爆发节点。对英雄的第一次普攻必爆并回血;与 **Q1** 完美衔接,作为每次 all-in (打到死的全力 fight) 的起手。
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — 生存节点。Tenacity (减少 stun, 减速等 crowd control = CC 的持续时间) 加低血触发的护盾 — Camille 经常 dive 对方后排 (跳进对方 peel = 保护核心 carry 的人群中)。
5. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — 反 burst (压缩在 1-2 秒内的伤害)。流血机制 (受击伤害分摊到几秒) 让你有时间反应,而不是被一波带走。

**情境装:**

- ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — 对位 duelist (Fiora, Jax, Irelia) 时换为首件。Spellblade (一种被动:施法后下次普攻附加伤害并重置 AA 计时) 让 **Q1 → AA → Q2** 的 trade 比 Stridebreaker 更稳。
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — 对位高法术爆发 (Vladimir, Rumble, Cassiopeia, AP Kayle)。
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — 对面叠护甲时 (多名英雄出 Plated Steelcaps、Randuin's 等护甲装;"stack" = 在多件装备上累积同种属性)。Armor shred = 每次命中减一段目标护甲并持续数秒,队友物理伤害也跟着提高。
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — 领先并 splitpush (单人推边路逼对方回防) 时。Tower shred = 对塔额外伤害;无队友在身边时还附加属性。
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 对位强 AP 或 3 件以上 hard CC 时的换鞋选择。
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — 对面 AD 刺客 (Zed, Talon, Kha'Zix) 滚雪球 (前期优势随击杀放大) 时。

**鞋子:** 默认 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**。强 AP / CC 时换为 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**。

**加点顺序:** 主升 **Q** (每级伤害提升,CD = 冷却时间缩短),副升 **E**,**W** 最后。**R** 在 6, 11, 16 级各点一级。1-3 级:**W → E → Q** — 先 sustain,再 engage,最后伤害 steroid。下文的 "Q reset" = **Q1 → AA → Q2 → AA**:每次 Q 重置 AA 计时,马上接出一次额外普攻。

**符文:** 主系 **Precision** 带 **Conqueror**, **Triumph**, **Legend: Alacrity**, **Coup de Grace**。副系 **Resolve** 带 **Bone Plating** 与 **Overgrowth**。Stat shards (符文页底部三个小属性):Attack Speed, Adaptive Force, Health Scaling。

## 关键对线

- **Darius:** 早期吃 HP 抗 (硬接伤害,保持 CS 持平)。3 级前的直线 trade 你打不过他 — 等 3 级 **Q** 上手再打。![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** 成型后用 **W** 减速 + **Q** 重置和他周旋 (他的 Hemorrhage 被动会在你身上叠最多 5 层流血;在 Darius 身上送人头会刷新他的大招层数,千万别送)。
- **Fiora:** 镜像 duelist 对位。直线 trade,别让她绕到你侧面打到垂直 Vital (Fiora 的被动会标记你某一侧 — 命中那一侧会造成 true damage 并回血)。6 级时她的 **R** 与你的 **R** 互相抵消 — 谁先 engage 由站位决定。
- **Renekton:** 3 级前他赢线,2 级 (W + Q) 又是他的强势点。**E** 留给他的 all-in。如果 6 级他没滚雪球,权力就翻转:你的 **R** 把他拉到他无法堆 Fury (他的 rage 资源) 的距离外。
- **Jax:** 6 级后糟糕的对位。他的 E 反制你的 **Q2** 与 **W** 蓄力 (windup = 技能落下前的短延迟,期间可被打断)。先做 ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker**,他的反制没 CD 时绝不在近战 **E** 他。
- **Quinn / Teemo:** 远程上单。早期对线惨败。起 ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** 而不是 ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade**,freeze 兵线 (让对面小兵多于你方,使兵线停在自己塔附近),没 **Q + E** 绝不推线。等 gank (打野来上路打 2v1) 来啃对方的塔皮 (前 14 分钟外塔上的 5 块奖励金币)。

## 强势期与胜利条件

- **2 级 (W + E):** 第一次 all-in 窗口。**W** 减速 → **AA** → **E** 击飞 (落地时短暂控空) 完成被动触发两次的完整 trade。
- **6 级 (R):** 你的 engage 在一轮 CD 内不可阻挡。从墙边 **E** 接 **R** 把任何人锁在近战;开打前先告诉打野,让他能进入圈内。
- **![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) Stridebreaker 成型 (~13-14 分):** 解锁清线。trade pattern 变得稳定:主动减速 → **W** 外圈 → **Q1** → **AA** → **Q2** chunk 走对面约一半的血。
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky 成型 (~20-24 分):** 首击回血让你能更激进地 commit 边路 skirmish (1v1 或 2v2 小规模交战)。从这个节点开始为资源点 splitpush。

## 常见错误

- **在线上把 E 浪费在 poke (远程消耗) 上。** **E** 是对方打野来 gank 时你唯一的逃命手段。把它留给 engage commit 或反 gank,而不是为了 50 点消耗。没有 **E**,没有 Flash 的 Camille 在任何 2 人 dive (在你塔下协同击杀) 中都会死。
- **站在 W 锥形的内圈。** **W** 内圈伤害很差,没有减速 / 回血 — 全部收益都在外圈。施法中途调整位置,让敌人在外环,而不是贴着你。
- **没 R 时面对有 hard CC 的目标 engage。** **R** 是你的 "no Flash escape" 工具 — 一旦锁定,目标无法 Flash 出圈。没 **R** 的 Camille dive 进有 peel (盟友准备保护核心) 的队伍,只会在 stun chains (CC 一个接一个,毫无反应窗口) 中倒下。
- **Q1 → Q2 紧贴施放。** **Q1** 与 **Q2** 之间等得越久 (最长 ~2 秒),**Q2** 的额外伤害与 true damage 比例就越高。在中间塞一个 **AA** + **W** — 这才是你 burst (压缩在 1-2 秒内的伤害) 的主要来源。

## 进阶技巧

练习 **Flash → E** 改向:如果范围内没有可用的墙,在 **E** 飞行途中使用 **Flash** (D 或 F 键、约 400 单位的短距闪现 summoner spell) 瞬移到一面墙上,改变 dash 方向。这把 Camille 从 "需要墙" 变成 "随处 engage",代价只是一个召唤师技能。这套连招在资源坑 (Drake 与 Baron 周围的封闭竞技场) 与中路河道、墙体 600+ 单位之外的开阔交战中最有用 — Flash 填补距离,让你照样把 **E** 击飞 (短暂控空) 砸在核心目标头上。
