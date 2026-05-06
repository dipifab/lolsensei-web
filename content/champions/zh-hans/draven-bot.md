---
title: "Draven Bot Build & Guide — Patch 16.9"
slug: "draven-bot"
language: "zh-hans"
patch: "16.9"
champion: "draven"
role: "bot"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Draven 荣耀行刑官下路完整攻略:旋斧接斧基本功、滚雪球出装路径、关键对线、强势期节奏、新手常见错误规避以及一条进阶 W 接斧位移技巧。"
quick_learn:
  champion_dd_id: "Draven"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Marksman / Snowball"
  abilities:
    - key: "P"
      name: "League of Draven"
      description: "接住 Spinning Axe 或击杀单位会累积 Adoration 层数。对英雄的 takedown 把层数转化为额外金币 — Draven 的 snowball 引擎。"
      dd_spell_id: "Draven_Passive"
    - key: "Q"
      name: "Spinning Axe"
      description: "为下一次普攻附加额外物理伤害。命中后斧头会向上反弹:接住可再装填一发,最多同时叠两把。"
      dd_spell_id: "DravenSpinning"
    - key: "W"
      name: "Blood Rush"
      description: "短时 Move Speed 与 Attack Speed 增益。接住 Spinning Axe 会刷新冷却 — 接得越好,机动性越强。"
      dd_spell_id: "DravenFury"
    - key: "E"
      name: "Stand Aside"
      description: "直线斧把敌人推到侧面并造成减速。主要的 peel 与 disengage 工具,也用来调整目标位置方便辅助衔接。"
      dd_spell_id: "DravenDoubleShot"
    - key: "R"
      name: "Whirling Death"
      description: "向地图远处投掷两把巨斧,可重施回收。每多命中一名敌人伤害衰减,但对生命值低于 Adoration 阈值的目标直接处决。"
      dd_spell_id: "DravenRCast"
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
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3072", name: "Bloodthirster" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "对位高回血阵容 (Soraka, Yuumi, Aatrox, Vladimir) — 施加 Grievous Wounds,治疗减半"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "对位高爆发 AP 阵容 (Syndra mid + 双法师组合) — 低于 50% HP 触发护盾,提供魔抗"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "对位刺客 dive (Zed, Talon, Rengar) — 复活让你在再次倒下前结算 Adoration 层数"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "对位单体锁定型 CC (Morgana Q, Lux Q, Ashe R) — 法术护盾挡住第一段硬控"
  base_combo: ["Q", "AA", "W", "AA"]
  win_condition: "用接斧和补刀堆叠 Adoration,首次击杀结算 600+ 金币爆点。把领先转化为更早成型的装备,在敌方 ADC 成型之前 snowball 每一次小规模交战。"
  weakness: "没有 dash 也没有 escape,接斧路径把走位锁在可预测的弧线上。1-3 级硬 CC 在 W 刷新前就能秒掉你,Adoration 节奏一断,经济曲线立刻崩盘。"
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
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["aphelios", "kog-maw", "twitch"]
      archetype: "前期弱后期强的 hyper-scaling 射手"
      reason: "他们的 1-3 级只能 farming;Draven 的 Q 每次接斧都附带巨额额外伤害,而 W 在接斧时刷新,所以他能在他们成型两件装备之前直接追死。"
    - examples: ["jinx", "sivir", "ashe"]
      archetype: "没有位移的 immobile 射手"
      reason: "Draven 的 E 推开并减速,W 提供瞬时 Move Speed 爆发:这些 ADC 在他贴上来时根本无法 disengage。所有 6 级前的 all-in 都会输。"
    - examples: ["soraka", "yuumi", "karma"]
      archetype: "线上 heal-trade 的辅助型 enchanter"
      reason: "Draven 的 Q 伤害堆叠速度对 poke-and-heal 路线太快。连续接住两把斧子就能打穿一轮 Soraka 的回血,而 snowball 把每一个击杀转成 200+ 金币领先。"
  counterpicks:
    - examples: ["caitlyn", "ezreal", "varus"]
      archetype: "远射程 poke 类射手"
      reason: "他们能在 Draven 受困于接斧弧线时,从他 550 攻击距离之外发起 poke 消耗。Draven 每无法 engage 一分钟,他的 Adoration 层数就消散在虚空里。"
    - examples: ["leona", "nautilus", "blitzcrank"]
      archetype: "硬开团 CC 辅助"
      reason: "Draven 没有 dash 也没有免控。2 级一套 CC 链就能把他抹掉,而他的斧子还在线上无意义地反弹。6 级前他几乎无法还手。"
    - examples: ["thresh", "morgana", "rakan"]
      archetype: "锁定 / pick 型辅助"
      reason: "一记 Thresh 的 hook 或 Morgana 的 Q 就能把 Draven 钉死在接斧途中。接不到斧,Q 的重置链断,W 的速度掉,他就变成一个没有 escape 的呆站 ADC。"
---

## 概述

Draven 是一名围绕单一机制打造的滚雪球射手 — 接住自己抛出的旋转斧。**Spinning Axe (Q)** 装填后,他的每一次普攻都会以斧头形式飞出并向空中弹起 — 如果 Draven 走到斧头的落点下方,就能接住它,造成一记巨额额外伤害,并重新装填一发 Q。同时最多可持有两把 Spinning Axe。被动 **League of Draven** 把这些接斧转化为金币:每一次接斧、每一次小兵击杀都会累积 Adoration 层数,达到一定阈值后,首次对英雄的 takedown 会把它们结算成额外金币(通常每次击杀多 100-500 金币)。

游戏思路简单粗暴:从 1 级开始压制下路、在 8 分钟之前强行打出一血、结算 Adoration 爆点,然后转化为 snowball 领先(滚雪球式优势:击杀 → 金币 → 装备 → 更多击杀)。技术体现在两个地方:接斧站位(预判斧头落点同时不暴露在 skillshot 范围里)以及 **Blood Rush (W)** 的覆盖率 — 每次接斧都重置 W,所以一个连贯的 Draven 永远比一个连续漏两把斧的 Draven 更快。

## 推荐出装

**起始装备:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 1 个 Health Potion。Doran's Blade 是射手标准起手:少量 Attack Damage (AD) 加成、一点 HP 和 lifesteal(普攻造成伤害的一定百分比转化为治疗)。Draven 需要每一点 AD,因为 Q 的伤害基于普攻数值,而接斧 trade 的节奏没有 lifesteal 的话很伤血。

**核心装备(顺序):**

1. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — 第一件 snowball 神装。Lethality(一种忽视目标部分护甲的护甲穿透形式,对脆皮 — 防御较低的英雄如 ADC 与法师 — 尤其有效)加 5% HP 以下处决,让每一发 Q 装填的普攻都构成击杀威胁。与 Adoration 完美契合:击杀越多,层数越多;层数越多,每次 takedown 的金币爆点越大。
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — 攻速鞋(每秒普攻次数提升)。Draven 的 default 鞋,因为更多普攻意味着每秒更多接斧机会,而 W 在每次接斧时都会刷新。
3. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — 暴击伤害倍率提升。两件暴击系装备(The Collector 在 AD 缩放上算作准暴击源 1,IE 是第 2)之后,Infinity Edge 解锁 175% 暴击伤害。Spinning Axe 伤害随 AD 缩放,这个时间点的接斧暴击足以一发秒杀大多数脆皮目标。
4. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — lifesteal(普攻造成伤害的一定百分比转化为治疗)加满血时启动的护盾。Draven 因为没 escape,死于刺客手下;护盾在每场团战里多送你一次回合。
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — 末件护甲穿透,效果随敌人额外 HP 缩放(对方坦度越高效果越强)。如果对面阵容有强力回血,改出 Mortal Reminder。

**情境换装:**

- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — 与 Lord Dominik's 同槽位,对位强回血阵容(Soraka, Yuumi, Aatrox, Vladimir)时换这件:施加 Grievous Wounds,把敌方治疗减半。
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — 后期槽位,对位高 AP 爆发(Syndra + Veigar + Annie)。护盾在 HP 阈值以下触发 — 即低于 50% HP — 吸收魔法伤害。
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — 末件,对位刺客 dive(Zed, Talon, Rengar)。复活给你 4 秒时间逃跑或完成 Adoration 结算,armor 属性把 dive 伤害减少约 20%。
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — 对位单体锁定型 CC(Morgana Q binding, Lux Q root, Ashe R stun)时替换 Bloodthirster。法术护盾每 40 秒挡住第一段硬控 — 你把省下的时间用在普攻而不是被锁住。

**技能加点:** **Q** 主升(斧头的纯伤害,你滚雪球的核心轴),**W** 副升(更多 Move Speed 与 Attack Speed,维持接斧节奏),**E** 最后(纯辅助 — 3 级一点用到后期足够)。**R** 在 6、11、16 级照常点。

**符文:** 主系 **Precision**(围绕普攻构建):核心 **Conqueror**(普攻命中累计层数,长 fight 中把部分伤害转化为治疗 — 完美契合 Draven 的 all-in 节奏),接 **Triumph**(takedown 时回血与额外金币 — 与 Adoration 结算契合),**Legend: Alacrity**(每个累计 takedown 提升攻速),**Coup de Grace**(对低 HP 目标额外伤害)。副系 **Domination**:**Sudden Impact**(使用 dash 或 buff 后获得额外 Lethality — Draven 通过 W 触发)和 **Treasure Hunter**(每个独立 takedown 多得金币 — 契合滚雪球身份)。

## 关键对线

- **Caitlyn:** 全板上最难的一条线。她 650 的攻击距离在每一次 trade 中都对 Draven 的 550 形成 out-poke(在你自己射程外消耗你血量)。只在她对补刀 animation-locked 时才上前一步,绝不为接一把斧子走过陷阱 — 斧头落在陷阱上就直接放弃。
- **Aphelios:** 6 级前的免费线。Aphelios 的 Q 有 9 秒冷却,武器还会用尽弹药;Draven 的 Q 是永久存在的。2 级强 push(逼对方先 wave crash),在他最弱的武器(Severum 或 Crescendum — 都是近战手持)上 engage,5 分钟前烧掉他的 Flash。
- **Lucian:** 镜像分级的初期 ADC。他用 Q-AA-AA 被动连招在 1 秒窗口里 out-trade 你;你用叠斧在 4 秒窗口里 out-trade 他。拒绝 short trade(完全不开打),坚持 extended trade("trade" = 一次短促的对换;"extended trade" = Draven 叠斧伤害超过 Lucian 爆发的 3 秒以上的持续 fight)。
- **Jhin:** 6 级前他 poke 你(他的远程伤害在初期等级里从远处消耗你的 HP),但在第 4 发 reload 时 all-in(以击杀为目标、没有 fallback 选项的全力交战)会输给你。盯住他的射击计数;在 "0/4" 或他刚把一发浪费在小兵之后开打。他的 W root 对没有 dash 闪避的 Draven 等于 1 秒免费输出。
- **Samira:** 她希望在线上把被动叠到 S 级以释放 **R**。她到达 S 后就别和她 trade:走开、recall(回基地)、满血再 re-engage。她的 **R** 在近战范围 out-DPS 你,但 Draven 的 E(Stand Aside)会把她推出引导范围,重置 fight。

## 强势期与胜利条件

- **2 级:** Draven 的 Q 即使 1 级也提供巨额额外伤害。配合一点 **W** 的 Move Speed 与 Attack Speed,2 级 all-in 是游戏里最强的开战之一 — 大多数 Draven 局都由谁拿下 2 级 trade 决定。
- **6 级 + 首杀:** Whirling Death **R** 变成低血处决按钮 — 对生命值低于与 Adoration 层数挂钩的阈值的任何目标进行处决(瞬间击杀)。如果你接斧已经接了 6 级,这个阈值高到足以从地图另一头收掉一个逃跑的敌人。
- **![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) The Collector 成型(约 11-13 分钟):** 首件爆点(与等级或装备里程碑挂钩的清晰 power 跃升)。Lethality + 5% HP 处决意味着每发 Q 装填的普攻都对 chip-damaged 目标构成击杀威胁。在这个时间强开一波 — 这里的 Adoration 结算往往让你提前 3 分钟成型第二件装备。
- **三件爆点(Collector + Berserker's + Infinity Edge,约 22-24 分钟):** Draven 的 burst(你在 1-2 秒窗口里打出的伤害)成为所有射手中最高的。这个阶段围绕目标(Dragon, Baron, Rift Herald — 提供团队 buff 或地图压力的中立目标)运营,在边路寻找 pick(在团战之外消灭一个孤立的敌人)。

## 常见错误

- **在危险位置接斧。** 一个为了接 Q 走进 wave 400 单位深处的 Draven,就是一个吃 Caitlyn 陷阱或 Leona 开团的 Draven。如果斧头落在差的地方,**直接放掉** — 丢一发 Q 没事,因 overextension(为追一个 play 越过安全线)丢一条命就有事了。
- **囤 Adoration 不结算。** 层数会在没有 takedown 尝试的 ~30 秒后衰减。如果叠到 100+ 层,要么强开一波,要么去抢一次 Scuttle skirmish(在河道为 Scuttle 河蟹爆发的 2-4 人小型交战) — 抱着层数继续 farm 等于白送金币。
- **把 R 当伤害技能而非处决技。** Whirling Death 的伤害每多命中一名敌人就大幅衰减。穿过 wave 投出去等于浪费;把它作为第二段斧头(回程重施)甩在低血逃跑的目标身上,是一次 1500 金币的操作。把 R 当狙击枪用,不是清线工具。
- **团战里站桩。** Draven 没有 dash。在任何高机动威胁(Zed, Diana, Camille)面前同一个位置站 2 秒就死。每次普攻之间 strafe(攻击的同时横向移动) — 步幅小,但持续移动。接斧弧线把你向前推,W 的速度让你在接完斧立即重新调整位置。
- **忽视 Stand Aside (E) 的 peel 价值。** Draven 的 E 把敌人推到侧面并减速。在团战里它不止是 poke — 它是 disengage(打断对方已 commit 的 fight、瓦解敌方 all-in 决心的技能),在 Camille 或 Hecarim 从击退中恢复期间,给你买下 1.5 秒免费普攻时间。

## 进阶技巧

在边路练 **W-into-fountain-axe-bounce** 技巧:对一面墙或薄掩体扔出空 Q,然后立刻用 W 走过反弹区域。因为 Blood Rush 的 Move Speed 衰减很快,在斧头飞行过程中开启它能让你到达没有 W 就够不到的接斧位置,然后接住斧子重置 W 冷却,准备下一次操作。这一个机制就把一个三斧漏一斧的休闲 Draven 与一个每发 Q 都接住的连贯 Draven 区分开来。
