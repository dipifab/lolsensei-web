---
title: "K'Sante Top Build & Guide — Patch 16.9"
slug: "k-sante-top"
language: "zh-hans"
patch: "16.9"
champion: "k-sante"
role: "top"
last_updated: "2026-05-04"
description: "League of Legends 英雄联盟 16.9 版本 K'Sante 上单完整攻略:起手装、坦克-战士核心出装顺序、Resolve 主系符文与天赋加点、关键对线压制思路、强势期节奏把握、新手常见错误规避,以及 W 半蓄力取消等高阶操作技巧。"
quick_learn:
  champion_dd_id: "KSante"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Tank / Skirmisher"
  abilities:
    - key: "P"
      name: "Dauntless Instinct"
      description: "技能会给目标挂上标记。K'Sante 下一次普攻造成额外伤害。在 All Out 形态下,所有攻击与技能都附带额外伤害。"
      dd_spell_id: "KSante_Passive"
    - key: "Q"
      name: "Ntofo Strikes"
      description: "短距离直线打击,造成伤害并减速。每次命中累积一层 stack:2 层时下一次施放变为冲击波,会拉拽并眩晕目标。冷却很短,是可以频繁使用的消耗工具。"
      dd_spell_id: "KSanteQ"
    - key: "W"
      name: "Path Maker"
      description: "蓄力(unstoppable + 强力减伤),然后向前冲刺击退并眩晕命中的敌人。在 All Out 下造成额外真实伤害,但失去击退和眩晕。"
      dd_spell_id: "KSanteW"
    - key: "E"
      name: "Footwork"
      description: "短冲刺 + 自身护盾。指向友军时冲刺距离增加,友军同样获得护盾。在 All Out 下冷却减少,冲刺速度提升。"
      dd_spell_id: "KSanteE"
    - key: "R"
      name: "All Out"
      description: "推开一名敌方英雄:撞墙时承受额外伤害。K'Sante 随后冲到目标背后并变身 — 获得攻速、护甲穿透与全能吸血,但失去最大生命与额外抗性。"
      dd_spell_id: "KSanteR"
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
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6664", name: "Hollow Radiance" }
    - { dd_id: "6665", name: "Jak'Sho, The Protean" }
  situational_items:
    - dd_id: "3075"
      name: "Thornmail"
      against: "对位平 A 自带回血的 AD (Aatrox, Trundle, Nilah, Yi) — 给攻击者挂上 grievous wounds (减疗 40%)"
    - dd_id: "3065"
      name: "Spirit Visage"
      against: "对位上单/打野 AP 爆发 (Mordekaiser, Vladimir, Diana) — 魔抗 + 受治疗与护盾 +25%"
    - dd_id: "3110"
      name: "Frozen Heart"
      against: "对位极高攻速 carry (Vayne, Kog'Maw, Yi) — 光环让附近敌人攻速 -20%,DPS 直接崩盘"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "敌方有 2 个以上强 CC 或 AP 上单时,从 Plated Steelcaps 换 — 提供魔抗 + 韧性"
  base_combo: ["W", "Q", "AA", "Q", "R"]
  win_condition: "团战中担任 front line:用 W 打断对方开团,把 R 留给关键 carry,把对方撞墙拽离队伍。在 All Out 形态下,用攻速与护甲穿透爆发收掉残血后排。"
  weakness: "射程短(W 仅 600,除 E 外没有真正的 gap-closer)。远程 kiter 在线上消耗他无解。R All Out 是长 commitment:变身团战输了就有 80-120 秒没有 win condition。"
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8401, name: "Shield Bash", icon_path: "perk-images/Styles/Resolve/MirrorShell/MirrorShell.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "主系 Resolve:Grasp of the Undying 每次触发都白送生命成长,完美契合发育型坦克。Shield Bash 把 E 护盾转化为下一次普攻的额外伤害 — 与被动触发直接联动。Conditioning + Overgrowth 锁死后期坦度。"
    secondary_rationale: "副系 Sorcery:K'Sante 极度缺蓝又缺技能急速。Manaflow Band 撑住线上 Q 频繁消耗的蓝量;Transcendence 提供技能急速并在 takedown 时返还冷却 — 是衔接 R 的关键。"
    secondary_alternative: "对位强消耗或后期阵容 (Vayne, Teemo, Jayce) 时,把 Sorcery 换成 Inspiration:Biscuit Delivery (前期免费血量+蓝量饼干) + Cosmic Insight (Flash 与召唤师技能冷却减少)。"
matchup_draft:
  pick_into:
    - examples: ["garen", "darius", "sett", "mordekaiser"]
      archetype: "没有位移、机动性差的近战 bruiser"
      reason: "K'Sante 的 W 在他们出招中途就把人眩晕,R 撞墙惩罚了他们没有逃生手段;Q 二段眩晕能在他们关键技能(Darius 拉、Garen E 旋转)结束前直接打断。"
    - examples: ["renekton", "riven", "camille"]
      archetype: "依赖连招、只有一次切入窗口的 diver"
      reason: "Q 眩晕加 W 的 40%+ 减伤直接吃掉他们的 all-in:位移与爆发都用完之后,K'Sante 用 R 翻盘并在 All Out 形态收掉他们。"
  counterpicks:
    - examples: ["vayne", "teemo", "quinn", "jayce", "gnar"]
      archetype: "用 kite 风筝他的远程上单"
      reason: "K'Sante 的 W 只有 600 射程,E 只有 525。远程对手在 W 射程外用普攻消耗,他一蓄力对方就走开 — 最后只剩长冷却的大招。"
    - examples: ["fiora", "olaf", "trundle"]
      archetype: "专门吃坦克的克制型"
      reason: "Fiora 的 Vital Strikes 造成无视护盾与抗性的真实伤害;Olaf 的 R 解控 W 的眩晕,trade 中变得 unstoppable;Trundle 的 R 偷走 K'Sante 的额外抗性,而那正好是他在 All Out 形态最脆弱的时刻。"
---

## 概述

K'Sante 是坦克-战士混合体:基础形态下是厚实的 bruiser,大招 **All Out** 开启后变成单挑型 skirmisher。整套技能围绕两个阶段设计。基础形态用 **W (Path Maker)** 蓄力的减伤吸收伤害,用 **Q (Ntofo Strikes)** 的眩晕和 **W** 的击退控场,用 **E (Footwork)** 给自己或队友套盾。当 **R** 让他变身时,他用全部防御换来攻速、护甲穿透与全能吸血(omnivamp = 对任意类型伤害都生效的吸血)— 几秒内化身为输出向的决斗者。

游戏思路是耐心打前期对线 — 用 **Q** 触发的普攻进行 short trade(只交换 1-2 个技能、不打算追击的短时消耗;proc = 满足条件时触发的效果,这里是 **Q** 留下的标记被你下一次普攻引爆)— 然后通过 push wave(把小兵线推向对方塔)和等 Sundered Sky 提供续航后的 **W** 蓄力开团来 snowball(滚雪球:击杀 → 金币 → 装备 → 更多击杀,优势越滚越大)。中期成为团队 frontline(扛伤的坦克/bruiser,先开团让 carry — 团队的主输出 — 在后排打输出)。后期 **R** 是斩首工具:挑一个关键目标,撞墙后变身、在 All Out 形态结果他。

## 推荐出装

**起手装:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**。盾在近战交换中提供续航,残血回血被动也契合 K'Sante 的坦克定位。

**核心装备(顺序):**

1. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — 第一个大型 spike。每隔几秒下一次普攻必暴击,并按已损失生命值的 ~10% 回血。这个触发与 **Q** 被动标记(技能附加的额外伤害 debuff,下一次普攻引爆)的节奏完美吻合。
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 护甲 + 对敌方普攻固定减伤。对线 AD 上单的默认鞋子。
3. ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — 提供燃烧周围敌人的光环 (AOE = 范围伤害,不是单体)。帮助清线,并在团战中给多个目标挂标记,使 **Q** 被动触发更频繁。
4. ![Jak'Sho, The Protean](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6665.png) **Jak'Sho, The Protean** — 你的发育型坦克装。战斗中持续叠加额外护甲与魔抗,并附带小范围反击伤害。后期坦度上限。

**情景装备:**

- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — 对位以普攻为主、自带强力回血的 AD 阵容 (Aatrox, Trundle, Nilah, Master Yi)。被打时给敌人挂 grievous wounds (减疗 40%)。
- ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — 对位上单或打野 AP 威胁 (Mordekaiser, Vladimir, Diana)。提供魔抗与受治疗/护盾 +25% — 让 Sundered Sky 的回血与 **R** 的全能吸血翻倍。
- ![Frozen Heart](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3110.png) **Frozen Heart** — 对位极高攻速 carry (Vayne, Kog'Maw, Master Yi)。光环让附近敌人攻速 -20%,你扛着普攻时直接拆掉他们的 DPS。
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 当敌方有 2 名以上强控英雄 (Leona, Lissandra, Maokai) 或 AP 上单时,从 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** 换鞋。提供魔抗 + 韧性 (从眩晕/减速中恢复更快)。

**鞋子:** 默认对线 AD 上单出 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**,对线 AP 或重控阵容出 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**。

**加点顺序:** 优先主 **Q** (冷却最短,主输出与 2 段眩晕),其次 **E** (更厚护盾 + 更短冷却便于开团),最后 **W** (基础伤害每级提升最少 — 价值在工具性,不在每级伤害)。**R** 在 6、11、16 级点。

**符文:** 主系 **Resolve** 带 **Grasp of the Undying** + **Shield Bash** + **Conditioning** + **Overgrowth**。副系 **Sorcery** 带 **Manaflow Band** + **Transcendence**。属性碎片:Adaptive Force / Adaptive Force / Health Scaling。

## 关键对线

- **Vayne / Teemo:** 远程消耗梦魇 (poke = 远距离磨血但不开团的伤害)。出 ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**,把副系换成 Inspiration 带 **Biscuit Delivery** (线上免费的血量/蓝量饼干) 续航,并且不要尝试 W 蓄力 — 对方会走出范围。塔下补刀直到 ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** 成型,并叫打野 gank (gank = 打野从侧面路径来线上突袭对手)。
- **Darius:** 优势。Q 二段眩晕(累积 2 层后第二段 Q 会拉拽并眩晕)截断他的拉,W 减伤吸收 Darius Q 外圈的流血(Darius 的 Q 在外圈造成最高伤害,被动每次普攻命中都会叠加流血)。1-3 级别站在他的 Q 外圈里;4 级开始可以 short trade 然后撤离。
- **Mordekaiser:** 五五开偏优势。蓄力中的 **W** 让你 unstoppable (免疫眩晕、减速等控制),所以可以在他 **R** 监狱里使用打破对你的效果。监狱外别浪费 **W** — 留着。
- **Fiora:** 硬克制。她的 Vital Strikes 造成真实伤害(无视护甲、魔抗、护盾)。你的护盾与抗性对她主输出毫无作用。打得很被动,放弃 CS (creep score = 小兵补刀) 换安全,早些叫打野 gank。
- **Renekton:** 操作型对线 (谁玩得更好谁赢,而非依赖技能克制)。他的 2-3 级 power spike 极其凶猛 (power spike = 英雄变得明显更强的时刻,这里是因为关键技能解锁) — 3 级前不要打。等三个技能齐全且 ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** 在合成时,对线翻盘:Q 眩晕打断他的 W (他的眩晕技),然后你 all-in (一次完整投入直到击杀的 trade,中途没有撤退选项)。

## 强势期与胜利条件

- **2 级 → 3 级:** 3 级时拥有 Q + W + E,Q 二段眩晕也已生效。这是你的第一个 short-trade 窗口:用 **W** 蓄力把对手赶离兵线,然后 Q 两段眩晕 → **E** 撤离。
- **6 级 (第一个 R):** All Out 解锁击杀威胁。寻找打野 gank 机会:**R** 把对手撞向你方的墙(撞墙额外伤害且固定住对方),变身,在 All Out 形态收掉。
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky 完成 (~ 11-13 分):** 续航直接翻三倍。可以打赢 extended trade,被 gank 也能留在线上。打 solo kill 或布置 tower dive (顶着对方塔伤进塔击杀;**W** 减伤能在突塔时吸收塔的攻击,所以可行)。
- **3 件套团战 (~ 22-26 分):** 凑齐 ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** + ![Jak'Sho, The Protean](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6665.png) **Jak'Sho, The Protean** 后,你成为团队首要开团工具(进场扎入并锁死目标的英雄)。寻找靠墙的对方 carry 用 **R** 抓人 (一次 "pick" = 把脱离队伍的孤立目标解决)。

## 常见错误

- **打不过还按 R。** All Out 是用防御换输出。已经残血又寡不敌众时,变身后几秒就死。**R** 是 "win condition" 工具,不是恐慌按钮 — 是用在你能孤立目标并击杀的时候,而不是想逃跑时。
- **远程对手面前蓄力 W。** 对方看见前摇 (蓄力期间的慢动画,会预告 dash) 直接走开。**W** 应该用作 counter-engage (对方先 commit,你在他动画中蓄力突进) 或从战争迷雾 (地图上敌人看不见你的黑暗区域) 中突袭 — 永远不要当作开场消耗用。
- **跳过 Q 的层数。** 每次 **Q** 命中累积一层 stack (技能上累积的计数):2 层时下一次施放是拉拽并眩晕的冲击波。1 层就把 **Q** 打出去只为伤害,让 stack 过期,等于浪费你最强的 CC (crowd-control:眩晕、减速、击退)。永远规划好第二段。
- **坦克独自带线 splitpush。** Splitpush = 单人推一条边路逼对方派人来挡。K'Sante 是没有全图大招的团战英雄 — 他的技能组需要队友跟上 **R** 撞墙的后续。除非有明显人数优势,否则跟队伍一起做资源点。
- **忘了 All Out 会降低最大生命。** 变身时,当前生命与最大生命按一定百分比下降。变身前满血就按比例进入新 (更低) 的最大生命;但如果已经残血变身,百分比下降可能直接致死。按 R 之前一定看血条。

## 进阶技巧

W 半蓄力取消:在 **Path Maker** 蓄力期间可以随时释放 — 短时蓄力伤害更低、击退/眩晕更短,但整个蓄力期间都保持 unstoppable。用 **半蓄力 W** 来躲对方关键技能(Lissandra 的 **R**、Malphite 的 **R**、ADC 的连续普攻),不必把整段蓄力时间投进去,然后按你自己的节奏重新进入 trade。冷却与蓄力时长无关 — 提前取消没有惩罚。职业选手用这个技巧扛过开团;排位玩家几乎总是满蓄力直接走进 punish (因暴露过度被对方反打)。
