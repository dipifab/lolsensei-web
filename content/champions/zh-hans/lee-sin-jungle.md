---
title: "Lee Sin Jungle Build & Guide — Patch 16.9"
slug: "lee-sin-jungle"
language: "zh-hans"
patch: "16.9"
champion: "lee-sin"
role: "jungle"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Lee Sin 盲僧打野完整攻略:Skirmisher 核心出装顺序、Conqueror 符文与天赋加点细节、Q1-Q2 标准起手连招、入侵节奏与 gank 路线选择、Eclipse 强势期把握、抓单与 flank 时机、新手常见错误规避,以及进阶 Insec 踢回操作技巧。"
quick_learn:
  champion_dd_id: "LeeSin"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Fighter / Skirmisher Jungle"
  abilities:
    - key: "P"
      name: "Flurry"
      description: "释放技能后,接下来 2 次平A 获得攻速并返还能量。技能 — 平A — 平A 是核心节奏。"
      dd_spell_id: "LeeSin_Passive"
    - key: "Q"
      name: "Sonic Wave / Resonating Strike"
      description: "直线技能。命中后可二段冲刺至目标,造成基于已损失生命的物理伤害。你的主要切入手段。"
      dd_spell_id: "LeeSinQOne"
    - key: "W"
      name: "Safeguard / Iron Will"
      description: "向队友、眼或自己冲刺并获得护盾。二段提供吸血和法术吸血。机动性加续航。"
      dd_spell_id: "LeeSinWOne"
    - key: "E"
      name: "Tempest / Cripple"
      description: "范围伤害并暴露被命中的敌人。二段触发减速。清野工具、反隐与减速来源。"
      dd_spell_id: "LeeSinEOne"
    - key: "R"
      name: "Dragon's Rage"
      description: "回旋踢将目标踢飞,沿途敌人也会受到伤害。抓单收尾与打乱阵型的关键工具。"
      dd_spell_id: "LeeSinR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3084", name: "Heartsteel" }
    - { dd_id: "3071", name: "Black Cleaver" }
  situational_items:
    - dd_id: "6333"
      name: "Death's Dance"
      against: "对面有两名强力 AD 输出 (Yasuo + Caitlyn) 时:把承受的物理伤害转为缓慢流血,而非瞬发"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "对面 AP 爆发 (Diana, Syndra, Lux 中) 时:生命线护盾把秒杀变为可生还交换"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "对面 3+ 硬控 (Leona + Lissandra + Sejuani) 时:韧性缩短眩晕和定身,保住冲刺连段"
    - dd_id: "3053"
      name: "Sterak's Gage"
      against: "需要塔下越塔单杀时:第一次重击后生命线护盾触发"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "后期 flank 保险:R 时机算错时,复活让队伍把交换打回平局"
  base_combo: ["Q1", "AA", "E", "AA", "Q2", "R"]
  win_condition: "用入侵和 gank 拿下前 14 分钟。Eclipse 成型后,争夺每个资源,用 R 把关键敌人踢出位置。后期找侧翼,把脆皮 carry 踢向己方。"
  weakness: "25 分钟后对成长型 carry 严重掉线。Q1 不中或 W 没目标就没有可靠冲刺。硬控连锁会瞬间打断你的开团。"
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
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
---

## 概述

Lee Sin 是一名前期打野 — 一个 Skirmisher,即在两到三人的短促交锋中获胜的英雄。把他想象成一位带着冲刺连段的武术家:用音波命中你,冲刺到你身上,把你踢向他的队伍,而他的平A 在每个技能后都自带攻速加成。整套技能围绕一个核心思路设计:在前 15 分钟成为地图上最强的战士,然后在敌方 carry 成型之前,把这份优势转化为人头、资源和节奏。

他的战术思路非常直接。前 8 分钟做入侵 — 走进敌方野区偷野并找到敌方打野单杀。之后只要 **Q** 可用就去 gank。后期不再硬打 1v1(打不过),而是寻找侧翼:绕到地图侧边,藏在没有视野的草丛里,然后用 **R** 把敌方 carry 踢向己方阵型。如果 **Q1** 命中率不稳定,这一切都无从谈起 — 整套技能链都靠第一发技能起手。

## 推荐出装

**起手装备:** Smite + **Hailblade**,第二次攻击附带范围伤害,清野更快,再加 **Refillable Potion**。只有在你想要更慢但更稳健、更适合单挑的全清节奏时才选 Emberknife。

**核心装备(顺序):**

1. **Eclipse** — 爆发、护盾与全方位吸血。两段命中触发的护盾完美契合你被动的"技能 → 平A → 平A"节奏。打小规模团战最干净的第一件大件。
2. 对面 AD 多就出 **Plated Steelcaps**,对面 3+ 硬控就出 **Mercury's Treads**。默认 Plated。
3. **Heartsteel** — 生命值与蓄力平A,惩罚长时间的拉锯。让你能撑过经典的"两件装备就阵亡"时间点。
4. **Black Cleaver** — 与你 Q-AA-Q 节奏共振的破甲,把队友的物理伤害也变成击杀威胁。

**情境装备:**

- **Death's Dance** — 对面有两名强力 AD 输出(例如 Yasuo + Caitlyn)。把进入的物理伤害摊成缓慢流血,而不是瞬间到账。
- **Maw of Malmortius** — 对面是 AP 爆发线(Diana、Syndra、Lux 中)。
- **Sterak's Gage** — 需要塔下越塔单杀时(走进敌方塔下击杀)。生命线护盾给队友 follow-up 争取一秒。
- **Guardian Angel** — 后期出到 4 件后的 flank 保险。

**鞋子:** 默认 Plated Steelcaps。Boots of Mobility 仅在 gank 节奏强、前期没有硬控威胁的对局中考虑 — 偏门选择,非标准。

**技能加点:** 优先满 **Q**(伤害与切入),其次 **E**(清野与减速覆盖),最后 **W**(辅助效果一级就够用)。**R** 在 6、11、16 级各点一级。

**符文:** 主系 **Precision**,带 **Conqueror**、**Triumph**、**Legend: Alacrity**、**Last Stand**。副系 **Domination**,带 **Sudden Impact** + **Treasure Hunter** 滚雪球(snowball lead 即随时间放大的早期优势:人头 → 金币 → 装备 → 更多人头);如果预计是漫长的成长局,则改副系 **Resolve** 的 **Second Wind** + **Revitalize**。

## 关键对线

- **Vi:** 你骗掉她的 **Q** 蓄力后,她在 6 级前打不过你。**Q1** 命中她、**E** 减速,踢飞后冲刺到辅助身上 — 在她技能 CD 时给己方 carry 拉扯空间。
- **Hecarim:** 3 件装备后他超越你,但 9 分钟前他打不过你。早期持续施压;如果你先 6 级,就不停 gank 上路或中路。第一件装备出来后不要 1v1 他。
- **Master Yi:** 拼操作的对局。当他 **Q** 激活时,你的 **E** 能让他显形,直接打断他的锁定。练到形成肌肉记忆。团战时把 **R** 留给把他踢出己方后排。
- **Kha'Zix:** 6 级前持续入侵。他进化 **R** 后只要你单走就能单杀你 — 12 分钟后没有队友视野绝不要单进敌方野区。
- **Graves:** 镜像节奏对局。两边打野都赢前 6 级。谁 gank 多谁赢。盯着他的 **E** 充能;如果他两层都打掉了,你能单挑赢他。

## 强势期与胜利条件

- **3 级:** 技能解锁完整。gank 套路是 **Q1 → 等队友 CC 或 Flash → Q2 → E 减速 → 平A 重置**。对面没 Flash 的话,60% 血量的脆皮直接死。
- **6 级:** **Dragon's Rage** 解锁踢飞战术。6 级前的 **R** 没有价值 — 6 级前拿下一血是这局最大的杠杆点。
- **Eclipse 成型(约 9 分钟):** 长时间拉锯你能赢。这段时间在 Scuttle、小龙、虚空虫窝处主动开战。
- **后期(约 30 分钟):** Lee 相对成长型 carry(Vayne、Kog'Maw、Master Yi)掉线明显。剩下的胜利条件是 ace-flank:在敌方野区做视野,绕到侧边位置,用 **R** 把敌方 carry 跨地图踢回来,再用 **Q-E-W** 收尾。

## 常见错误

- **团战中 Q1 浪费在残血兵线上。** 你的 **Q** 有两段:技能命中和冲刺。如果用 Q1 去推线清兵,你就把整个技能消耗了 12 秒,失去切入手段。Q1 留给 all-in(全力换命的完整交换,直到有人倒下)。
- **小规模交锋中跳 W 续命。** **W** 的吸血确实存在,但跳到眼上回血就放弃了切入。如果交换可以打赢,把 **W** 留给 Insec(反向踢飞 — 见进阶技巧)或 **R** 之后跳到辅助身上。
- **R 进塔但没有后续。** 把残血 carry 踢回己方只在队伍在范围内、准备开团时才有效。屏幕外单独的一发 **R** 就是 100 金的赌博。
- **1 级自动帮红 buff 引野。** Hailblade 让你能从下路侧无援助全清。给红队引野等于放弃 Scuttle 争夺。告诉下路:只帮第一下平A就走。
- **在没有抓单计划的阵容里选 Lee。** Lee 在队友能利用一次孤立击杀时大放异彩(所谓"pickoff":在团战外消灭一个落单敌人)。如果队伍没有后续 CC,**R** 就只是保护工具 — 把出装调整到 Death's Dance 和 Sterak's,而不是 all-in 装。

## 进阶技巧

"Insec"反向踢飞:走过你的目标,对其身后预先放好的眼使用 **W**,落地瞬间按 **R** — 踢飞从背后发动,把目标送向己方而不是踢走。完整序列是 **Q1 命中 → Q2 冲刺 → 身后放眼 → W 到眼 → R**。在训练模式里反复练,直到不用思考也能踩准时机。W 落地到 R 之间的窗口大约 0.3 秒 — 太慢目标会转身面对你,太快 W 动作会吞掉 R 的施法。当你能在压力下连出来,Lee 在你手里就直接跳两个梯度。
