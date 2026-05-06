---
title: "Diana Jungle Build & Guide — Patch 16.9"
slug: "diana-jungle"
language: "zh-hans"
patch: "16.9"
champion: "diana"
role: "jungle"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Diana 月之女祭司打野完整攻略:开荒路线、Scuttle 与小龙时间点、gank 路线选择、AP burst 出装顺序、Sorcery 副系符文搭配、关键对位拆解、强势期节奏把握、新手常见错误规避,以及 Q-Flash-E-R 进阶连招训练。"
quick_learn:
  champion_dd_id: "Diana"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Moonsilver Blade"
      description: "每第三次 basic attack 对周围敌人扇形造成额外法术伤害。施放任意技能可获得 5 秒 attack speed — 打野清野的核心引擎。"
      dd_spell_id: "Diana_Passive"
    - key: "Q"
      name: "Crescent Strike"
      description: "弧形 skillshot,为命中目标附加 3 秒 Moonlight 标记。标记可解锁 E 技能的重置,是 gank 的开手工具。"
      dd_spell_id: "DianaQ"
    - key: "W"
      name: "Pale Cascade"
      description: "三颗环绕法球接触敌人造成法术伤害,并提供护盾。极适合单挑与无伤刷野。"
      dd_spell_id: "DianaOrbs"
    - key: "E"
      name: "Lunar Rush"
      description: "指向性突进造成法术伤害。对带 Q 标记的目标使用时冷却立刻重置 — 你的 gap-close 引擎。"
      dd_spell_id: "DianaTeleport"
    - key: "R"
      name: "Moonfall"
      description: "拉拽并减速周围敌人,随后在 Diana 身上爆炸造成范围法术伤害。技能组里唯一的 CC (CC = crowd control,控制效果):射程很短。"
      dd_spell_id: "DianaR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对位 hard-engage 坦克 (Malphite, Sejuani, Leona) — R 之后金身躲掉敌方 CC chain"
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "对位两名以上高 HP frontline 阵容 (Cho'Gath, Ornn):burn 随生命值放大"
    - dd_id: "3135"
      name: "Void Staff"
      against: "只要核心目标购入魔抗装 (Mercury's Treads, Spirit Visage) 立刻替换"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "对位高回血阵容 (Soraka, Vladimir, Dr. Mundo, Aatrox)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "对位单体法术 CC (Ahri 魅惑, Lissandra R, Twisted Fate 黄牌)"
  base_combo: ["Q", "E", "R", "W", "AA"]
  win_condition: "从 fog 里命中 Q,用 E 突进到带标记的目标,R 把他从队伍里拽出来,然后 W 加平 A 重置,配合队友 follow-up 收掉。6 级开始绕着资源点强行打架。"
  weakness: "有效射程很短 (E 仅 825 单位)。强 disengage (Janna R) 或 peel 会把你和 carry 隔开;没有 Q 标记就没有第二段 dash 用来逃走。"
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
matchup_draft:
  pick_into:
    - examples: ["graves", "kindred", "kha-zix"]
      archetype: "Squishy carry junglers without hard CC"
      reason: "Diana 在他们的野区赢下持续单挑:Pale Cascade 抗掉一轮输出后,Lunar Rush 在 Q 标记上重置,做出对方风筝不掉的二次进场。"
    - examples: ["nidalee", "elise", "shaco"]
      archetype: "Early-game gank-focused junglers"
      reason: "他们的强势期在 6 级骤降,而 Diana 的 R 此时打开中期压力。跟住他们的开荒节奏,资源点对换,直到 Luden's Echo 出来翻盘。"
    - examples: ["amumu", "warwick"]
      archetype: "Slow-clearing low-mobility junglers"
      reason: "Diana 靠被动重置清得更快,先到 Scuttle Crab。每次小龙刷新后反野他们的后排野怪 — 他们来不及支援。"
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "vi"]
      archetype: "Front-loaded burst junglers with hard CC"
      reason: "他们 3 级就来 invade,而此时 Diana 还没 E,直接打断她的开荒。他们的 CC 能无视 Pale Cascade 的护盾:6 级前在他们野区的 1v1 等于送人头。"
    - examples: ["jarvan-iv", "sejuani", "rammus"]
      archetype: "Tank junglers with built-in disengage or knock-up"
      reason: "Diana 的 R 只在近战距离生效 — 这些 counter-engage 工具在 Moonfall 吟唱完成前就把她推出 pull window,浪费掉她唯一的 CC。"
    - examples: ["udyr", "olaf"]
      archetype: "Sustained-damage bruisers with cleanse or unstoppable"
      reason: "他们直接走过 Moonfall (Olaf R 净化 CC,Udyr R 无视拉拽),护盾破掉后 DPS 还压过 Diana — 而她没有第二段 escape。"
---

## 概述

Diana 是一名法术伤害的 diver:近战刺客,自带护盾,对带标记目标有免费 dash,拥有游戏里最强的一键 engage 之一 (engage = 开团动作)。打野阶段她用快速清野换掉早期 gank,在 6 级开始 snowball — snowball 是早期优势随时间滚大的过程 (击杀 → 经济 → 装备 → 更多击杀)。一旦 **Lunar Rush (E)** 能把一次击杀串成第二段 dash,她就成为"按 R 删 carry"的终极 pick。(diver 是跳进敌方 back line 的近战英雄。)

她作为打野的整体思路:用 **Pale Cascade (W)** 与 **Moonsilver Blade (P)** 的 on-hit 强势打完第一轮,在 3:30 左右拿下 **Scuttle Crab** (河道蟹,提供视野和小型 speed shrine),然后配合视野去 gank 各路。6 级之后,任何小龙或 Rift Herald 附近的团战都是 win condition — **Moonfall (R)** 把核心目标拽进来,队友收尾。

## 推荐出装

**起始装备:** ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** + Refillable Potion。Gustwalker 宠物提供脱战 movement speed,完美匹配 Diana 偏 gank 的中期。跳过 Mosstomper(续航宠物)— 你的 **W** 已经能扛掉一轮清野的伤害。

**Core items (in order):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — 第一件 burst 装备 (burst = 1-2 秒内打出的高额伤害),提供 AP 与技能急速。E 一进场,bolt 就把脆皮撕开。
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 固定法术穿透。95% 局的默认鞋子。
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 额外 burst,血线被动 (在敌方 HP 低于阈值时触发,这里是 35%) 与你 R-into-E 的收割衔接得严丝合缝。
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 后期成长系数倍增。单件最高 AP 槽位。

**情境装备:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 对位 hard-engage 坦克 (Malphite, Sejuani, Leona)。R 之后立刻开金身 (你 2.5 秒无敌但不能移动或行动),敌方后续 CC 全部打空。
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — 当对面有两名以上高 HP frontline (Cho'Gath, Ornn):burn 随他们生命池放大,你重新走位时还在持续掉血。
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 任何核心目标购入魔抗装 (Mercury's Treads, Spirit Visage) 时立刻替换。
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 对位高回血阵容 (Soraka, Vladimir, Dr. Mundo, Aatrox)。
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 对位单体法术 CC (crowd control:眩晕、束缚、魅惑) 例如 Ahri 的 charm 或 Lissandra 的 R。

**鞋子:** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** 是默认。对位双 AD 威胁的高 AD 阵容换 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**,法术 CC 多就上 Mercury's Treads。

**加点顺序:** 先主 **Q** (清线、Q 伤害提升、Moonlight 标记窗口更长)。然后主 **W** (护盾值与清野速度)。**E** 最后 — 等级提升只加射程,真正重要的是 Moonlight 上的冷却重置,而不是数值成长。**R** 在 6、11、16 级各点一次。

**符文:** 主系 **Domination** 带 **Electrocute**、**Sudden Impact**、**Sixth Sense**、**Ultimate Hunter**。副系 **Sorcery** 带 **Manaflow Band** 与 **Transcendence**。Stat shards: Adaptive Force / Adaptive Force / Magic Resist (高消耗时换 Health)。

## 关键对线

- **Lee Sin:** 避开 2 级 invade — 他的 Q-Q follow-up 打穿你的 W 护盾。在上路 blue buff 插眼,从下到上反向开荒,这样在 Scuttle 处碰面时被动层数已经准备好。
- **Graves:** 6 级之后单挑稳赢。从 fog (野区里没有眼的部分,fog of war) 里用 **Q** 起手,他的 dash 距离躲不掉 mark;Moonlight 一上身,**E** 就是稳进的 gap-close (gap-close = 拉近与敌人距离的技能)。
- **Elise:** 强势期赛跑。她赢 3 级 gank,你赢 6 级团战。跟住她的开荒节奏,带视野守在小龙附近,别让她单刷。
- **Jarvan IV:** 硬对位。他的 E-Q 击飞会打断你的 **R** 吟唱。让他先 commit 自己的连招,然后再 E 进去对换。比平时更早出 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass**。
- **Kha'Zix:** 平势对位,二件套之后转向你这边。他在近战范围 burst 你;用低血量 bait 他的隔离跳,**W** 抗住他的 Q,然后 E-R 重置。没有视野控制就别穿越自家野区,否则就是免费送一次孤立跳。

## 强势期与胜利条件

- **3 级 (Q + W + E):** 技能组成型。第一轮清野约 3:15 结束 — 抢在敌方打野之前去 Scuttle Crab。河道视野加 50 HP 神坛奠定后续地图节奏。
- **6 级 (首个 Moonfall):** 中部河道 skirmish 强势 (skirmish = 通常 2v2 或 3v3 的小型交战,不是完整团战)。从草丛 Q,E 上带标记的目标,R 把他们的两个 carry 一起拽到一起 — 你的队友 burst 收掉。打野池里 6 级 pull 效果最强。
- **![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Echo 成型 (~ 9-11 分钟):** burst 强势期。一套干净的 Q-E 在 squishy 目标 (防御薄弱的英雄,例如 ADC 与大多数法师) 身上能在对方反应前抹掉 60-70% HP。围绕第二条小龙强行打架。
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap 成型 (~ 22-25 分钟):** 对没有魔抗装的脆皮已经达到秒杀阈值。在 Baron 或 Elder Dragon 的视野布置中找 picks (在团战外抓掉孤立的敌人)。

## 常见错误

- **gank 路上踩进眼里。** Diana 唯一的潜行手段就是 fog。从河道或绕回自家野区接近,让线上的队友先清掉草丛里的眼,你再 commit。
- **R 拽到前排。** R 的拉拽半径是 475 — 把坦克拽到自家队伍里正是对方想要的画面。等团战展开,再把 R 留给后排 (back line = 在安全位置输出的 carry)。
- **没有 Q 标记就空放 E。** 没有 Moonlight 时,**E** 冷却 14 秒、射程也短。永远先 Q:在带标记目标上重置,才让 Diana 显得机动。
- **第一轮开荒贪第三个野怪。** 如果对面打野更快 (Graves, Shyvana, Karthus),3 级 invade 赛跑你会输。跨地图盯住对方线上英雄 — 中单 missing,贪满清野就是陷阱。
- **没有退路就硬开 gank。** Diana 在 E 之后没有自带的 escape。如果队友没有减速或 follow-up CC,等对面闪现回来,你的 engage 就变成 1v3。

## 进阶技巧

把 **Q-Flash-E-R** 这套连招练成开团起手式。在你的 Q 飞行途中、命中瞬间往前 Flash:带标记的目标会出现在你身边,**E** 立刻通过 Moonlight 的重置接上,而你的 **R** 把他们整条挤在 carry 旁边的后排都收进来。这套组合能赢下你本不该赢的团战 — 但它需要肌肉记忆来在 Q 动画中途按 Flash,而不是在投射物落地之后。在练习模式里对着不动的木桩反复练,直到输入顺序变得自动化。
