---
title: "Kha'Zix Jungle Build & Guide — Patch 16.9"
slug: "kha-zix-jungle"
language: "zh-hans"
patch: "16.9"
champion: "kha-zix"
role: "jungle"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Kha'Zix 打野完整攻略:打野动线、孤立目标突进、Q/E/R evolution 选择、穿甲流出装、关键对线、强势期、新手常见错误规避。"
quick_learn:
  champion_dd_id: "Khazix"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Assassin / Solo-target"
  abilities:
    - key: "P"
      name: "Unseen Threat"
      description: "脱离视野后,下一次对英雄的普攻附带额外 magic damage 与减速。标记孤立目标(425 距离内无友军英雄)以放大 Q 伤害。"
      dd_spell_id: "Khazix_Passive"
    - key: "Q"
      name: "Taste Their Fear"
      description: "对目标造成 physical damage;对孤立目标(附近无友军英雄)伤害大幅提升。主要单挑工具,evolution 后射程显著扩展。"
      dd_spell_id: "KhazixQ"
    - key: "W"
      name: "Void Spike"
      description: "直线尖刺,命中造成伤害并在爆炸范围内回血。打野唯一的 sustain 来源。Evolution 增加减速、命中视野与三向锥形。"
      dd_spell_id: "KhazixW"
    - key: "E"
      name: "Leap"
      description: "指向性突进,落地造成伤害。Evolution 增加 200 射程,并在 takedown 时重置冷却 — 刺客 reset 套路就在这。"
      dd_spell_id: "KhazixE"
    - key: "R"
      name: "Void Assault"
      description: "短暂隐身并获得移速加成,可再次施放重新进入隐身。每级解锁一项技能(Q/W/E/R)永久 evolve 升级。"
      dd_spell_id: "KhazixR"
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
    - { dd_id: "3142", name: "Youmuu's Ghostblade" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3814", name: "Edge of Night" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "6698"
      name: "Profane Hydra"
      against: "需要清线和边路压制力的阵容"
    - dd_id: "6692"
      name: "Eclipse"
      against: "对方多战士阵容(Sett, Aatrox, Mordekaiser):护盾 + 治疗扛过 in-out 换血"
    - dd_id: "3179"
      name: "Umbral Glaive"
      against: "对方视野体系强(辅助型辅助、视野型打野):释放即破眼"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "面对强法术 CC(Ahri, Lissandra, Twisted Fate)时换下 Lucidity"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "对方双 AD(两个物理威胁,如 Yasuo + Caitlyn)时切换"
  base_combo: ["E", "Q", "AA", "W"]
  win_condition: "找到孤立目标(425 距离内无敌方英雄),用 E + Q + AA 秒杀。Evolved E 在 takedown 时重置,小规模和团战中可连跳。"
  weakness: "敌方抱团时 Q 伤害骤降 — 孤立加成完全依赖站位。Hard CC(Malzahar R、Skarner R)会打断 jump,而 Kha'Zix 没有逃生位移。"
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
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "kindred", "graves"]
      archetype: "无强 CC 的脆皮 carry 型打野"
      reason: "他们独自打野发育;Kha'Zix 的 E + 孤立 Q 在他们反应前秒杀。没有 CC 就没法阻止 dash-in。"
    - examples: ["shyvana", "fiddlesticks", "rammus"]
      archetype: "清野慢、机动性低的打野"
      reason: "Kha'Zix 用 E 入侵更快,准时到河蟹。每条小龙后反野他们的后排营地 — 转线慢,无法惩罚。"
    - examples: ["ezreal", "ashe", "kog-maw"]
      archetype: "无位移或位移少的后排 ADC"
      reason: "后期 evolved E 可越墙落到后排。没有位移,他们在 R 隐身窗口期内无法重新走位。"
  counterpicks:
    - examples: ["lee-sin", "xin-zhao", "vi"]
      archetype: "前期强势、带指向性 CC 的战士打野"
      reason: "他们的 CC 打断 jump 动作并将你定身。6 级前他们在自家野区赢单挑:3 级入侵就是送他们一血。"
    - examples: ["malzahar", "skarner"]
      archetype: "拥有 suppression 或不可阻挡定身的英雄"
      reason: "Suppression 无法被 Mercury's Treads 解除;一被锁住就无法 R out,隐身窗口直接浪费。"
    - examples: ["sett", "tahm-kench"]
      archetype: "带保护技能的坦克型战士"
      reason: "他们的 W 或拉人在 Q 命中前就把 carry 拽出孤立窗口。你需要干净的 1v1 jump,他们刚好剥夺这个选项。"
---

## 概述

Kha'Zix 是近战 AD 刺客(刺客 = 设计用来秒杀单一脆皮目标的超高爆发英雄;脆皮 = 防御薄弱的英雄,如 ADC 与大多数法师),整套技能围绕寻找**孤立**目标展开。在他这里,孤立指目标 425 距离内没有任何友方英雄 — 略小于 Mercury's Treads 测距的范围。被动 **Unseen Threat** 标记孤立的敌人;Q **Taste Their Fear** 对他们造成额外巨量伤害;大招 **Void Assault** 让他进出视野来铺垫这次孤立爆发。优先针对独自走动的阵容 — 分推手、carry 型打野、缺乏机动的后排射手。

打野思路:用 **W** 提供 sustain(sustain = 清野中维持血量的能力)从下半野区清到上半,3 级解锁 E,然后在 6 级前按刺客套路 gank: **E** 进线 → 等 gank 目标脱离辅助保护 → **Q** 触发增伤 → 平 A 收尾。6 级后每场战斗都是狩猎:选 **Evolved E**(射程扩展且 takedown 重置),一次成功的击杀就退还 dash,让你在敌队聚拢前撤出。Drake 与 Rift Herald 团靠 **R** 进隐身、抹掉后排再隐身撤离来赢。

## 推荐出装

**起始装备:** ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** + Refillable Potion。Gustwalker 宠物提供脱战移速,适合快速到 gank 路线。跳过 Mosstomper(回血宠物)— 一个清野循环里 **W** 的回血已经够用。

**核心装备(顺序):**

1. ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — 优先合成的第一件。穿甲(对低甲目标提供固定护甲穿透,对脆皮基本等同免费伤害)加上主动移速,gank 与小规模交战变得轻松。
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — 技能急速鞋,**R** 转得更快。R 越频繁,每场战斗的隐身窗口就越多。
3. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — 处决被动:5% 血量以下立即斩杀。可以收掉爆发原本会留 50 HP 的人头。
4. ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — 技能盾,短读条后挡下敌方第一个技能。挡住 Malzahar R、Lissandra R,以及任何会在 R out 前定身你的指向性 CC。
5. ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — 后期穿甲,随目标护甲缩放,伤害技能附带减速,Q 可以追杀。

**情景装备:**

- ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — 队伍需要边路压制时:范围被动加主动处决,可以分推(独自推一条边路逼对方应对)又不丢团战伤害。
- ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — 对方多战士阵容(战士 = Sett, Aatrox, Mordekaiser 这类坦克型近战 fighter):护盾 + omnivamp(对所有伤害类型生效的吸血)让你在 in-out 换血中存活。
- ![Umbral Glaive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3179.png) **Umbral Glaive** — 对方视野体系强(辅助型辅助如 Janna、Lulu):施放技能即排眼,加上对眼额外伤害,你能隐形穿越他们的视野网。
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 法术 CC 重时换下 Lucidity。韧性(缩短你身上眩晕和减速持续时间的属性)让你在他们重新开团前 R out。
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 对方双 AD(两个物理威胁,如 Yasuo + Caitlyn):固定护甲 + 普攻减伤。

**鞋子:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** 为默认。Mercury's Treads 或 Plated Steelcaps 仅在对线需要时换。

**加点顺序:** 主升 **Q**(孤立伤害成长是主要 DPS),次升 **W**(打野 sustain 与 evolution 减速),最后升 **E**(多一级只是基础伤害,真正重要的是 dash 距离与冷却,而不是数值成长)。**R** 在 6、11、16 级各点一次。

**Evolution 选择(每次 R 升级时挑的 Q/W/E/R 升级):**标准顺序 **6 级 Q**(射程扩展 + 孤立 takedown 退还冷却 — 最干净的 1v1 强势期),**11 级 E**(小规模交战的额外射程与 takedown 重置),**16 级 R**(更长隐身、二段重施放)。仅在敌方多个无位移目标抱团时,**6 级选 W 而非 Q**(三向锥形减速能控制全队)。仅当需要躲避强 CC 打野(Lee Sin、Vi)时,**先点 E 而非 Q** — 早期重置可以让 gank 失败后撤出,但牺牲大量击杀压力。

**符文:** 主系 **Domination**:**Electrocute**、**Sudden Impact**、**Sixth Sense**、**Ultimate Hunter**。副系 **Precision**:**Triumph** 与 **Coup de Grace**(若想要 sustain 则换 **Sorcery** + **Sudden Impact** 辅助 — sustain = 战斗中的回血)。属性碎片:Adaptive Force / Adaptive Force / Health。

## 关键对线

- **Lee Sin:** 避免 2、3 级入侵。他的 Q-Q 接 W 护盾在 E 上线前就压过你的连招。从下半野区清到上,带视野蹲河蟹,让队友抓他过线。
- **Graves:** 早期持平,6 级后你优势。绝不在野区开阔地与他 6 级前对拼:他的 W 致盲打断你的平 A 窗口。等孤立机会 — 用 **E + Q** gank 他线,让队友把他从 ADC 旁边剥离。
- **Elise:** 强势期赛跑。她赢 3 级 gank,你赢 6 级孤立突进。匹配她的首轮清野节奏并交易资源 — 带眼蹲 Drake 不让她单刷。
- **Jarvan IV:** 反开威胁。他的 E-Q 击飞会打断你的 jump 动作。比平时更早出 ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night**;技能盾吃掉旗子连招。
- **Karthus:** 白嫖对线。无位移,独自走线推兵。6 级前用视野追踪位置;6 级时 **R + E + Q** 在他读 Requiem 的瞬间从野区另一边把他抹掉。

## 强势期与胜利条件

- **3 级(Q + W + E):** 完整连招解锁。寻找孤立 gank — 通过河道草丛侧翼一条边路,**E** 进入,**Q** 命中孤立的对线英雄(辅助必须不在),平 A 重置,**W** 在回身时上减速。当目标独自一人时,Kha'Zix 6 级前的 gank 是游戏中最强之一。
- **6 级(首个 Void Assault + 首次 evolution):** 选 **Evolved Q** 走标准爆发路线。河道中段小规模交战强势期 — R 进隐身,E 上标记目标,Q 增伤,平 A 重置,再施放 R 撤离。完整连招两秒内秒杀 1800 HP 脆皮。
- **![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) Youmuu's Ghostblade 完成(约 9-11 分钟):** 爆发强势期。主动移速可以横穿半张地图侧翼包抄(从敌方看不到的方向进战,通常在后排背后)。在第二条小龙附近强开。
- **![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) The Collector + Evolved E(约 16-19 分钟):** 重置窗口期。E 在 takedown 时刷新 — 干净的团战开始于 E 上 carry,Q 收掉,再 E 跳到下一个目标。这时 Kha'Zix 成为决定性的 pick(pick = 在团战外击杀被孤立的敌人)机器。

## 常见错误

- **跳到非孤立目标上。**没有孤立加成(425 距离内无友军),Q 伤害大约低 60%。等辅助拉开或队友把对方剥离 — 不要在敌队中心换血。
- **默认把 Evolved W 当首次 evolution。** Evolved W 是团战控场工具,不是单挑工具。如果队伍打 pick(团战外击杀被孤立的敌人)和小规模交战,90% 情况下 Evolved Q 才是正确首选。
- **用 R 打伤害而不是用来重新走位。** R 是进出战斗的隐身窗口,不是伤害按钮。把第二段重施放留给目标死亡后撤离 — 在回程时再隐身只是浪费这件道具的核心价值。
- **gank 失败后还贪营地。**没有 E 重置(Evolved E 之前)时,gank 失败你就没有撤退手段。走自家野区回家,别自动驾驶冲下个营地 — 对方打野会跟踪你的路线反 gank 下一条线。
- **默认首件出 Eclipse。** Eclipse 把 Kha'Zix 变成战士,你放弃了让他成为刺客的穿甲爆发。只有当对线全是战士、纯穿甲扛不住 in-out 换血时才出 Eclipse。

## 进阶技巧

在练习模式里反复练 **R-E-Q-AA-recast-R**,直到指令变成肌肉记忆。诀窍是 Q 与重施放之间的平 A 重置:Q 会重置普攻计时,因此 Q 命中的瞬间插入一次平 A,然后立刻重施放 R 撤离。干净执行下,这套连招约 1.8 秒内秒掉 1900 HP 目标,而你以隐身状态退场 — 在大龙布控期单杀对方 ADC 一次 pick(pick = 在团战外击杀被孤立的敌人),就是一条免费资源。技术上限在于 Q 与 R 重施放之间平 A 的时机:太早 Q 还没命中,太晚 R 窗口已经关闭。
