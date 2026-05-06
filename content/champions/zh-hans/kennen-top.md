---
title: "Kennen Top Build & Guide — Patch 16.9"
slug: "kennen-top"
language: "zh-hans"
patch: "16.9"
champion: "kennen"
role: "top"
last_updated: "2026-05-05"
description: "League of Legends Patch 16.9 版本下的肯能上路完整指南：起手装、AP 战士出装路线、关键对线、强势期节奏、常见错误，以及最后一个面向团战 flank 的进阶 Flash + R 技巧，帮助新手入门。"
quick_learn:
  champion_dd_id: "Kennen"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Teamfight Engager"
  abilities:
    - key: "P"
      name: "Mark of the Storm"
      description: "肯能的每个技能都会在目标身上叠加一层 Mark。三层即可眩晕。这是整套技能的引擎——每套连招都瞄准三层叠加。"
      dd_spell_id: "Kennen_Passive"
    - key: "Q"
      name: "Thundering Shuriken"
      description: "直线技能，造成法术伤害并附加 1 层 Mark。远程消耗手段，也是在目标身上轻松叠上第一层的工具。"
      dd_spell_id: "KennenShurikenHurlMissile1"
    - key: "W"
      name: "Electrical Surge"
      description: "被动 on-hit（命中触发）：每 5 次普攻造成额外法术伤害并附加 1 层 Mark。主动：对所有附近已带 Mark 的敌人引爆一次法术爆发。"
      dd_spell_id: "KennenBringTheLight"
    - key: "E"
      name: "Lightning Rush"
      description: "穿过单位的短距离冲刺，附加 1 层 Mark 并在命中时返还 energy。结束后肯能获得数秒攻击速度。位移与走位工具。"
      dd_spell_id: "KennenLightningRush"
    - key: "R"
      name: "Slicing Maelstrom"
      description: "围绕肯能的引导型 AOE。每跳造成法术伤害并对范围内敌人附加 1 层 Mark。敌人扎堆时可在 2 秒内眩晕全队。"
      dd_spell_id: "KennenShurikenStorm"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "4633"
      name: "Riftmaker"
      against: "对线长时间交战和上路战士（Sett、Darius、Mordekaiser）：战斗中 sustain 加 true damage 转化"
    - dd_id: "4645"
      name: "Shadowflame"
      against: "对手后排脆皮无 Magic Resist：35% HP 以下额外法穿正好衔接 R 收尾"
    - dd_id: "3135"
      name: "Void Staff"
      against: "敌方任一优先目标购买 Magic Resist 装备时立刻切换"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "对手堆叠回血（Vladimir 上路、Dr. Mundo、Yorick）"
  base_combo: ["Q", "E", "R", "W", "AA"]
  win_condition: "团战时用 Flash + R 切入敌方后排（敌方 ADC 与法师所在的一排），同时给多个目标叠满三层被动。AOE 眩晕加 W 引爆决定胜负。"
  weakness: "除 R 之外没有可靠的硬控，而 R 是必须 commit 的引导技能——即点眩晕或浮空（Pantheon W、Camille E2）会在叠层落地前直接打断大招。"
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8139, name: "Taste of Blood", icon_path: "perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination 主系：Electrocute 通过 Q + W 引爆 + 普攻触发，每次三层叠加都加一份爆发。Taste of Blood 提供线上 sustain，Sixth Sense 在副路标记敌方眼位（flank 关键），Ultimate Hunter 缩短 R 冷却。"
    secondary_rationale: "Resolve 副系：肯能要带着 R 扎进近战，Second Wind 在线上吃消耗时回血，Bone Plating 在你 commit all-in（追到击杀的全程交换）时吸收前三次伤害。"
    secondary_alternative: "对抗强力远程消耗（Vladimir、Lillia 上路）时，将 Resolve 换为 Sorcery，搭配 Nimbus Cloak（用过召唤师技能后的额外移速，更快放出 R）和 Transcendence 提供技能急速。"
matchup_draft:
  pick_into:
    - examples: ["garen", "sett", "darius"]
      archetype: "无突进的近战战士"
      reason: "肯能的普攻射程（约 550）超过他们的步行速度。Q 消耗加 E 走位让你在威胁范围外稳定 farm，直到 6 级强势期。"
    - examples: ["tryndamere", "yorick"]
      archetype: "缺乏可靠硬控的分推手"
      reason: "他们没有任何 lock 手段阻止你的 R 引导。一旦肯能凑齐 1-2 件装备，每次 flank 团战都是对多名敌人的三层眩晕——副路单人分推无法匹敌这种地图影响力。"
    - examples: ["udyr", "olaf"]
      archetype: "短手巨像"
      reason: "用 E 冲刺与 W on-hit 被动放风筝。他们的粘人依赖每一步都贴在你身上，而你的射程加上冲刺刷新让他们留在普攻范围之外。"
  counterpicks:
    - examples: ["pantheon", "camille"]
      archetype: "拥有即点硬控的战士"
      reason: "Pantheon W 的眩晕（单体即点）或 Camille E 二段的束缚会在 R 引导途中将其打断——一层都没落地前就丢掉 AOE 眩晕，整次切入直接变成大招浪费。"
    - examples: ["vladimir", "lillia"]
      archetype: "带 sustain 的远程上单"
      reason: "前 6 级他们的射程超过你的 Q，并能从消耗中回血。没有突进的肯能在每次短交换中都吃亏，到 8 分钟左右就会落后补刀。"
    - examples: ["sion", "galio"]
      archetype: "带魔抗与 cleanse 类被动的坦克"
      reason: "Sion 的死亡被动与 Galio W 的法术伤害护盾会化解你的爆发窗口。Mark 三层依然眩晕，但他们一旦堆出 MR，W 引爆就只造成一半伤害。"
---

## 概述

肯能是一个远程 AP 约德尔，在团战中作为 flank engager 走上路（绕到战场侧翼、从敌方未注意的方向切入的位置）。整套技能围绕一个机制：被动 **Mark of the Storm (P)** 叠满三层就眩晕。每个技能——**Q**、**W** 主动、**E** 冲刺、**R** 的每跳——都附加一层，因此一次干净的团战切入可以在 2 秒内眩晕整支敌队。凭借约 550 的普攻射程压制大多数战士，他在线上表现尚可，但真正的身份在 6 级解锁：他就是那个翻盘中后期团战的上路 flank engager。

他的战术蓝图描述简单、执行严苛：用 **Q** 消耗（在不投入正面交锋的前提下削减敌人 HP 的远程骚扰）和 **W** on-hit 被动（每隔几次普攻触发的额外效果）安全 farm，为目标守住主动权，然后 **Flash + R** 切进敌方后排（站在坦克后方的脆皮 carry 行列——高伤害低 HP 的 ADC 与法师）。技术深度集中在两点：energy 管理（肯能消耗 energy 极快，没有就无法施法）以及选择正确的团战切入角度，让 **R** 的引导不被即点眩晕（不需瞄准、点击你即可生效的眩晕）打断。

## 推荐出装

**Starting items：**Doran's Shield + 2 Health Potions。如果对线没有任何普攻骚扰、想要早期 energy 回复，Doran's Ring 可以接受。

**Core items (in order)：**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** —— burn（不会即时生效、而是分摊到随后数秒的伤害）随 **R** 的多目标特性放大。每个敌人每跳都会触发 burn，融化坦克的 HP 池。
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** —— 固定法穿，针对你最想眩晕和秒掉的脆皮后排。
3. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** —— 在 **Flash + R** 之后给你一段时停，敌方就会把冷却砸在一个被冰冻的目标上，而你的眩晕叠层在此期间继续落定。
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** —— 后期 AP 倍增器。它带来的 **R** 爆发足以一发秒掉没买魔抗的脆皮。

**Situational items：**

- ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** —— 对位上路战士（Sett、Darius、Mordekaiser）时替代 Liandry's。战斗中 sustain（团战内的回血/回复）加上 true damage 转换，让你在第二波必然贴上来的近战中存活。
- ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** —— 对手后排脆皮且无魔抗时。HP 阈值被动（35% HP 以下额外法穿）正好衔接 **R** 的收尾。
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** —— 任一优先目标购买魔抗装备时立刻切。
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** —— 对手堆叠回血（Vladimir 上路、Dr. Mundo、Yorick）。

**Boots：**默认 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**。面对 2 个以上带硬控的法术威胁时可以考虑 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**。

**技能加点：**先满 **Q**（基础伤害最高、冷却最短——你的主消耗与每套连招的第一层叠加），再 **W**（团战内爆发更高），最后 **E**。**R** 在 6、11、16 级各点一级。

**符文：**主系 **Domination**，搭配 **Electrocute**、**Taste of Blood**、**Sixth Sense**、**Ultimate Hunter**。副系 **Resolve**，**Second Wind** 加 **Bone Plating** 提供线上耐久。

## 关键对线

- **Garen：**普攻射程压制他。用 **Q** 消耗，绝对不要被他的 **E**（旋转）打到，他交 **Q** 沉默时用 **E** 冲刺穿过他。3 级起这条线就可以打赢。
- **Sett：**待在他的 **W** 蓄力条之外——你每挨一次普攻都会帮他充满。只有在他 **W** 空槽时才交换；如果被他 **E** 眩晕，用 **E** 冲刺穿过他打断他的朝向。
- **Pantheon：**最难的对线。他的 **W** 即点，会在每次团战打断你的 **R**。第二件装之前先做出 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass**，他的 **W** 不进冷却就不要用 **R** 切入。
- **Vladimir：**长线对局，你会落后补刀。带 Doran's Shield + Second Wind，把 **Q** 留作他进 pool 时的 punish，6 级前喊打野压力，因为长交换打不过。
- **Mordekaiser：**势均力敌、由 **R** 决胜的对线：他的死亡领域会切断你方的 peel，但你带来 AOE 眩晕。他的 **R** 还在就别切入；冷却时则可以把你的 **R** 砸进他的后排。

## 强势期与胜利条件

- **6 级：**第一发 **Slicing Maelstrom**。配合 **Flash**，正是肯能开始决定比赛的时刻——Flash + R 切进扎堆的敌队就能眩晕半径内所有人。
- **9 级（Q 满级）：****Thundering Shuriken** 5 级冷却 4 秒。线期与副路 farm 变得轻松，你可以用安全的 **Q** 消耗去拆塔。
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes（约第 14-16 分钟）：**第一个团战装爆点。和队伍一起守每一波小龙；两件装时的 **R** 直接抹掉脆皮辅助和 ADC。
- **三件装 + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap（约第 24-28 分钟）：**爆发阈值翻盘。**R** + **W** 引爆连招可以一发秒掉任何没出魔抗的后排。强行打 Baron 与后期目标团。

## 常见错误

- **没有 Flash 就用 R 切入。**肯能没有任何能切到后排的位移。没有 **Flash + R**，你只能咬到前排（开团的坦克与战士）——眩晕住对面坦克并不能赢，与此同时他们的 carry 会用风筝（边攻边后撤、把你卡在普攻范围外）打死你。
- **在线上把 energy 烧光。**肯能没有蓝条，但有缓慢回复的 energy。在兵线上狂按 **Q**，等敌方打野来到你已经空槽。永远留 ~50 energy 给逃跑用的 **E** 冲刺。
- **先满 W。****W** 主动伤害高于 **Q**，但 **Q** 5 级冷却 4 秒，**W** 是 6 秒。先满 **Q** 意味着每分钟更多叠层与持续消耗；**W** 在 8 级前停留在 1 级即可。
- **走出范围自我打断 R。****R** 是绑定在角色身上的引导技能。一旦走出团战范围，每跳就不再命中敌人。站在战场中央而不是边缘——Zhonya's 正是为此存在。
- **忽视 W 的 on-hit 被动。**第 5 次普攻触发额外法术伤害和一层免费的 Mark。1v1 交换中，把 2 次普攻穿插在 **Q** 与 **E** 之间，引诱对手吃下意料之外的眩晕。

## 进阶技巧

肯能最强的 flank 是高端玩家口中的 "blind ult"：从战争迷雾（视野盲区）出发，直接 Flash 进敌方最大的扎堆，并在他们看到你的模型之前先放出 **R**。他们的反应窗口是 **R** 的音效提示加上你的角色渲染——大约 0.4 秒——比走出引导半径所需的时间还短。要铺垫这一招，你方必须已经在一场团战中（或假装如此），让敌人面朝前方，而你绕到没有视野的野区进入。可以在第 14-16 分钟的小龙团里练习：穿过河道，藏在敌方的猛禽营地，等前排和你方咬上，再 Flash + R 切进后排。一次干净的执行就能在 4v5 兵力劣势下抢下一个目标。
