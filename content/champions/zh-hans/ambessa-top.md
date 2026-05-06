---
title: "Ambessa Top Build & Guide — Patch 16.9"
slug: "ambessa-top"
language: "zh-hans"
patch: "16.9"
champion: "ambessa"
role: "top"
last_updated: "2026-04-29"
description: "League of Legends Patch 16.9 Ambessa 上单完整攻略:起始装备、Eclipse 斩杀型核心出装、关键对线应对策略、强势期节奏掌握、新手常见错误,以及 dash 接平 A 的高阶手法,适合想要上手或精通这位高难度刺客战士的玩家。"
quick_learn:
  champion_dd_id: "Ambessa"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Fighter / Assassin"
  abilities:
    - key: "P"
      name: "Drakehound's Step"
      description: "施放任意技能后会向前短距离 dash。下一次平 A 获得额外射程、伤害与 attack speed,并返还能量。"
      dd_spell_id: "Ambessa_Passive"
    - key: "Q"
      name: "Cunning Sweep / Sundering Slam"
      description: "二段技能。一段是前方扇形劈砍,按目标 max HP 加成。命中敌人后解锁更长的直线下劈作为二段 — 主要伤害来源。"
      dd_spell_id: "AmbessaQ"
    - key: "W"
      name: "Repudiation"
      description: "获得护盾并进入架势,然后砸向地面。架势期间挡下非小兵伤害,砸地伤害提高。trade 用防御工具。"
      dd_spell_id: "AmbessaW"
    - key: "E"
      name: "Lacerate"
      description: "环绕自身的连环 AOE 鞭击:对周围敌人造成伤害和减速。从这个技能触发被动 dash,会在 dash 终点追加一次额外打击。"
      dd_spell_id: "AmbessaE"
    - key: "R"
      name: "Public Execution"
      description: "进入 unstoppable 状态并 blink 到直线上最远的敌方英雄,落地时 suppression,然后砸地造成伤害与 stun。被动:技能附带 armor pen + omnivamp。"
      dd_spell_id: "AmbessaR"
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
    - { dd_id: "6692", name: "Eclipse" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3071", name: "Black Cleaver" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "对面有两个以上 hard CC 或大量 AP 伤害时,从 Plated Steelcaps 替换"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "对位高 AP 上单 (Vladimir, Rumble, Gwen) — 法术护盾 + 残血 AD scaling"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "对位长距离预兆型 hard CC (Malphite R, Ornn R, Sett W) — spell shield 挡 engage"
    - dd_id: "6697"
      name: "Hubris"
      against: "对线已经领先时 — 击杀堆叠 AD,推动 snowball lead"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "后期 R-blink 切对面 carry 时 — 复活让你能全力 commit 并撑过后续集火"
  base_combo: ["Q1", "AA", "E", "AA", "Q2", "AA", "R"]
  win_condition: "用 passive-dash trade 在 2-6 级对线打出优势,接着在 Voidgrubs 与 Drake 周围的 skirmish 持续 snowball。用 R 在敌方 frontline 来不及 peel 之前 suppression 一名孤立的 carry。"
  weakness: "hard CC 链能掐死她的 dash 连招。坦克的属性条让她的 % max HP 伤害变钝。R 把她绑在单一目标上,带 peel 的阵容能在 suppression 结束后把她孤立起来。"
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
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8242, name: "Unflinching", icon_path: "perk-images/Styles/Sorcery/Unflinching/Unflinching.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["darius", "garen", "sett", "illaoi"]
      archetype: "无位移的近战 bruiser"
      reason: "她每次施法后跟着的 passive dash 让她在敌人明显的前摇里(Darius 拉、Garen 沉默、Illaoi E)进进出出。R 的 suppression 直接绕过他们的 tankiness 拿到人头。"
    - examples: ["kennen", "teemo", "quinn"]
      archetype: "脆皮远程上单"
      reason: "被动多段短 dash 弥补了远程上单依赖的距离。一旦贴脸,她的 Q 按 max HP 加成,削血速度比这些英雄的 disengage 还快。"
    - examples: ["nasus", "kayle"]
      archetype: "靠等级或层数的后期发育型"
      reason: "她 2-6 级的强度直接在他们成型(Nasus Q 层数,Kayle 11、16 级)前压死。早期强行拿击杀,剥夺他们需要的 lategame。"
  counterpicks:
    - examples: ["malphite", "ornn", "poppy"]
      archetype: "带 hard CC 与硬属性的坦克"
      reason: "指向型 CC (Malphite R、Poppy W 截 dash、Ornn 易碎接顶飞) 在 R 落地前就打断她的 dash 连招。生 armor 加 HP 也削弱 Q 的 % max HP scaling。"
    - examples: ["jayce", "gnar", "vayne"]
      archetype: "长距离 poker 与 kiter"
      reason: "Jayce E 的击退和 Gnar 大招都能在 dash 施法过程中打断。kiter 始终待在威胁距离之外,逼她从太远 commit dash,然后在技能 cooldown 时被惩罚。"
    - examples: ["olaf", "tryndamere"]
      archetype: "大招克制 suppression 或处决的英雄"
      reason: "Olaf 的 R 施放即清除她的 suppression,等于废掉她最重要的 pickoff 工具。Tryndamere 不死的 R 撑过处决判定帧,然后旋转走出砸地。"
---

## 概述

Ambessa 是一名上单 skirmisher (为短小遭遇战和小规模交火打造的英雄,而不是长时间的 teamfight)。是一名造成物理伤害的 AD 英雄 (AD = attack damage 攻击力;另一种是 AP = ability power 法术强度,法师吃的法术伤害属性)。她使用 **能量** 而不是蓝量作为资源,生死全在她的被动 **Drakehound's Step** 上:每次施放技能都会触发一次短 dash,加上一次射程、伤害、attack speed 都增强的下一次平 A。这一个机制让她成为 chain-trade 专家 — 不论 Q、W 还是 E 都给一次免费的 auto-attack reset (一次立刻打出、不受平 A 计时器限制的普攻),所以一套连招两秒内能打出四到五下。她的整套技能专门惩罚没有 hard interrupt (打断她施法的 stun、击飞、沉默) 就敢和她近战对拼的人。

她的游戏思路很简单:从 2 级开始用 **Q + E** all-in trade (all-in 指彻底 commit 到拿击杀,而不是简单的小消耗) 压制对线,接着在中期围绕 Voidgrubs 与 Drake 的 skirmish 不断 snowball。"snowball" 是指一个微小的早期优势 — 一个击杀,一片 tower plate (前 14 分钟内打掉会奖励金币的塔甲) — 随时间滚成更大的领先。用 **R** 在对面 frontline (前排坦克) 来得及 peel 之前 suppression 掉孤立的对方 carry (队伍主力输出) — "peel" 是用 CC 或自己的身体替队友挡掉扑上来的敌人。后期是她的弱点:对面坦克拼出两件后,Q 的 % max HP 伤害就再也融化不动他们,所以要在 28 分钟前把比赛收掉。

## 推荐出装

**起始装备:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 2 个 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**。AD trade 的默认配置;吸血支撑 dash 连段。

**核心装备 (按购买顺序):**

1. ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — 主要的 skirmisher 第一件。在 1.5 秒内对同一目标命中两次技能,会触发一个护盾 (吸收受到伤害的临时 HP 屏障) 加下一次平 A 的额外伤害。她的 dash 连招每场战斗都能稳定凑齐这两段命中。
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 默认鞋。上单大多数对线都是 AD,平 A 减伤在长 trade 里很关键。
3. ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — armor shred (每次命中削减目标少量护甲,最多叠到 30%) 加 HP 加 AD。她被动强化的平 A 比大多数英雄叠 shred 都快。
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — 生存节点。短时间内吃到大量伤害时,装备给你一个大护盾。R-blink 切到对面 carry、被对面剩下人集火时很顶用。
5. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — 把受到的物理伤害转化成持续 3 秒的缓慢出血 (从瞬时变成均摊),给你时间收掉这次 trade。

**情境装:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 当对方有两个以上的 hard CC 来源,或者法术伤害很高时,替换 Plated Steelcaps。提供魔抗加 tenacity (减少 stun 与减速作用在你身上的持续时间)。
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — 对线 AP 上单 (Vladimir, Rumble, Gwen)。提供一个 "lifeline" 法术护盾 (HP 跌破 30% 时触发一次的护盾) 加残血额外 AD,目的是让你撑得到反打回去拿人头。
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — 对位长距离预兆型 hard CC (Malphite R, Ornn R, Sett W)。提供一次性的 spell shield (挡掉下一个命中你的敌方技能),让对方 engage 落空,你按自己节奏开 R。
- ![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) **Hubris** — 对线已经领先时。每次击杀或助攻在装备上叠 AD,推动 snowball lead — 杀得越多,打得越疼,杀得也越多。
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — 后期最后一件。每 5 分钟提供一次死亡复活。让你 R-blink 切对面 carry 时可以全力 commit,即使站位失误也不至于直接送掉比赛。

**鞋子:** 默认 Plated Steelcaps。对面是 AP/CC 阵容则换 Mercury's Treads。法师系的 Sorcerer's 鞋直接跳过 — 你吃物理 scaling。

**加点顺序:** **Q** 主升 (主要伤害,以及唯一一个吃敌人 max HP 加成的技能),**E** 副升 (清线和铺设第二段 Q 的 AOE 减速),**W** 最后升。**R** 在 6、11、16 级各点一级。

**符文:** 主系 **Precision**:
- **Conqueror** — keystone (该系最核心、最强的一颗符文)。和英雄持续战斗越久,叠的 AD 与回血越多;完美契合她的 chain-trade 套路。
- **Triumph** — 击杀或助攻时小幅回血加金币,残血收掉一次战斗时触发。
- **Legend: Alacrity** — 随击杀堆叠的被动额外 attack speed。
- **Last Stand** — HP 跌破 60% 时获得额外伤害。

副系 **Resolve**:
- **Second Wind** — 受到敌方英雄伤害后启动的 HP 回复。专治线上 poke。
- **Unflinching** — **Flash** 进入 cooldown 后获得额外 tenacity。R 切进对面阵容、被对面连续 CC 时尤其有用。

属性碎片 (符文下方那三个小属性): Adaptive Force (根据你英雄主吃 AD 还是 AP 自动转换 — Ambessa 转成 AD)、Adaptive Force 再来一颗、最后看对线选 Armor 或 HP。

## 关键对线

- **Darius:** 优势。他 Q 外圈才是回血的部分;用 Q1 dash 进去贴里圈,再用 Q2 退出来。他要拿一次完整的击杀,Q + E 必须都命中;你可以用 W 护盾接 Q 的拉拽,trade 打成五五开。强迫他先交 W 出血 (让他白白用掉),等 W 进 cooldown 再开打。
- **Sett:** 优势。他没有 dash,只有一个前砸 (W)。6 级前你的 passive-dash 连招在长 trade 里压制他。6 级后留好 **Flash**,用来躲他 R 的击退 (位移效果),否则会被推进他队伍的控制范围。
- **Malphite:** 劣势。他被动护盾削弱你 2 级 all-in;Q 的减速让他在你 commit 时溜走。第二件接 ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** 挡他 R engage。避免在窄路 choke point 团战,他可以从 fog of war (没有 ward 时你看不见的地图区域) 里 flank — 从侧翼突袭。ward 是你放下的小型魔法眼,用来照亮一片区域。
- **Jayce:** 劣势。他有两种形态;远程形态的 Q + E 连招在你贴近之前就开始 poke (从安全距离消耗你 HP)。起始装拿 ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**,贴着兵线吃补刀的 HP 回复,只在他切近战形态、把 E 浪掉时才找击杀。
- **Camille:** 实力对位。两人的 all-in 都很强;谁先把第一个技能干净地落下来谁赢。你的 Q 按她当前 max HP 加成 — 先逼她交 W 的回血,然后 Q1-平 A-Q2 把她打到 50% 以下。在你塔附近的三角草丛 tri-bush 插一个 ward,这样她的 hookshot — 把她像爪钩一样拉向墙体或敌人的技能 — 就抓不到正在回线的你。

## 强势期与胜利条件

- **2 级 (Q + E):** 第一个大节点。两个技能加被动 dash,一套完整的 Q1-平 A-E-平 A-Q2-平 A 连招在两秒内打出四下平 A 加两次技能 tick。绝大多数上单在近战乱斗里都比不过这个伤害。
- **6 级 (R 解锁):** ![R](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/champion/Ambessa.png) **Public Execution** 解锁 pickoff (在主战场之外干掉一个孤立的敌人)。R 被动还附带 armor penetration (你的伤害无视一部分敌人护甲) 与 omnivamp (按你技能伤害的一定比例回血),帮你在河道附近的 skirmish 里持续输出。
- **![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) Eclipse 成型 (~ 11-13 分钟):** 你最重要的 skirmish 节点。护盾与额外伤害和每一套连招完美对齐,所以 Voidgrubs 周围的 1v1 与 2v2 全面倒向你。
- **两件 + 鞋 (~ 18-22 分钟):** ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** 上线后,集合队伍打 Drake。R-blink 切对面 carry — suppression (一种禁用所有技能与移动、连 **Flash** 都用不了的 CC) 把他锁死 1.5 秒,这个时间足够队友跟上后续。

## 常见错误

- **把 Sundering Slam (Q 二段) 浪在小兵身上。** 强化的二段才是你的伤害节点。如果用 Q1 砸到小兵而不是英雄,你就把这次 reset 浪在了一个反正一下就死的生物上。Q1 留着,直到能打到敌方英雄再放。
- **R-blink 切得太深。** R 会跳到你直线上 **最远** 的敌方英雄,而不是最近的。如果三个对手站在他们 carry 前面,你的 blink 会穿过去把你扔到对方阵容最后面。按 R 之前一定先看站位 — 让 carry 是你和最远点之间的唯一目标。
- **空气里 brace W。** 强化砸地只在架势期间真的挡到非小兵伤害时才触发。在线上对着小兵 brace 等于白白浪 cooldown。W 要被动反应着用 — 看到敌方技能动画起手的瞬间再 brace。
- **死等永远不来的完美 engage。** R 早期 cooldown 100 秒以上。如果 6 级你 R 已经好,而对面对线英雄 "刚交完一轮" — 也就是刚刚把主连招用完、关键技能进 cooldown — 直接进去 R 他。一名死掉的对线英雄等于两波免费补刀加一片额外的 tower plate (前 14 分钟塔身奖励金币的护甲块)。
- **觉得 Q 能秒掉超级坦克就去 1v1。** % max HP 伤害纸面上很恐怖,但 armor 一样起作用。Ornn 或 Cho'Gath 一旦做完 ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** + 坦克装,你就单杀不动了。改和打野一起开。

## 进阶技巧

掌握 **dash-AA weave** (把 dash 和平 A 编织起来)。每次施放技能都会触发被动 dash 与下一次强化平 A,所以一套完整连招的最优顺序是 *技能 → dash → 平 A → 技能 → dash → 平 A*,而不是 *技能 → 技能 → 技能 → 平 A*。在强化平 A 打出来之前就按下第二个技能,会取消那一下平 A 的加成。干净的节奏:**Q1 → 向前 dash → 平 A → E → dash → 平 A → Q2 → dash → 平 A → R**。在 Practice Tool (离线训练模式) 里对着 target dummy (固定的训练假人) 反复练,直到每一下平 A 都稳定打出来;在真实对线中,这能把一次 2 秒 trade 变成七段独立伤害结算 — 这就是拿到人头与对面 50 HP 逃走之间的差别。
