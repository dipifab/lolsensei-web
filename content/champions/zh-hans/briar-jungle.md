---
title: "Briar Jungle Build & Guide — Patch 16.9"
slug: "briar-jungle"
language: "zh-hans"
patch: "16.9"
champion: "briar"
role: "jungle"
last_updated: "2026-05-01"
description: "League of Legends 英雄联盟 16.9 版本 Briar 打野完整攻略:刷野路线、核心吸血出装顺序、关键对位与符文选择、强势期节奏把握、新手常见错误规避,以及一条 W-E 自取消的进阶收尾技巧。"
quick_learn:
  champion_dd_id: "Briar"
  difficulty: 1
  damage_type: "mixed"
  champion_class: "Diver / Skirmisher"
  abilities:
    - key: "P"
      name: "Crimson Curse"
      description: "普攻与技能为敌人挂上层叠流血,Briar 从这部分伤害中获得回复。回复量随自身缺失生命值提升,且没有先天 HP regen。"
      dd_spell_id: "Briar_Passive"
    - key: "Q"
      name: "Head Rush"
      description: "短距跳跃,眩晕目标并按 % 削减 Armor 与 Magic Resist。主要的 gap closer (拉近距离) 与 trade (短交手) 起手。"
      dd_spell_id: "BriarQ"
    - key: "W"
      name: "Blood Frenzy / Snack Attack"
      description: "向前跳跃并自我嘲讽至最近敌人(优先英雄),获得 Attack Speed、Move Speed 与 AOE 普攻。再次施放则啃咬,按缺失生命值结算并回血。"
      dd_spell_id: "BriarW"
    - key: "E"
      name: "Chilling Scream"
      description: "取消 Blood Frenzy 并吟唱:充能时减伤并回 HP。释放减速,满蓄力撞墙击退并眩晕。自取消 W 是核心机制。"
      dd_spell_id: "BriarE"
    - key: "R"
      name: "Certain Death"
      description: "踢出全图宝石,标记首个命中的英雄为 prey。Briar 飞向她,落地恐惧周围敌人,直至 prey 死亡前获得抗性、lifesteal 与 Move Speed 强化的 Frenzy。"
      dd_spell_id: "BriarR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "E" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "6333"
      name: "Death's Dance"
      against: "对位 double-AD 阵容 (例如 Yasuo + Caitlyn):把爆发分摊为持续流血,争取时间用 W 啃咬重置"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "对位 AP 爆发威胁 (Syndra, Veigar, Lissandra) — 法术护盾在 AP 高消耗下触发,防止 R 切入瞬秒"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "若敌方有 3 个以上硬 CC (眩晕、定身) 则换掉 Steelcaps:tenacity 防止 R 切入半空被打断"
    - dd_id: "3065"
      name: "Spirit Visage"
      against: "对位 AP 持续伤害阵容:Crimson Curse 自回复与 W 啃咬回复提升 25%"
  base_combo: ["W", "Q", "AA", "E"]
  win_condition: "把 R 命中后排 carry,利用强化 Frenzy 一直追到 prey 倒下。Sundered Sky 与 Bloodthirster 在追击中持续回血;落地恐惧把保人位打散。"
  weakness: "没有射程,且 W 自我嘲讽锁向最近敌人 — 老练对手会把 Frenzy 骗到坦克身上,然后从 W 范围之外 peel,用 CC 链把你钉死。"
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
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
      - { dd_id: 8105, name: "Relentless Hunter", icon_path: "perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "主系 Precision (持续作战符文):W Frenzy 是 5 秒以上的普攻追击,爆发型基石会浪费早期伤害。Conqueror 每次命中叠层,在 R 落地时达到峰值;Triumph 击杀回血,Alacrity 增加 Attack Speed,Last Stand 在低血量时回报。"
    secondary_rationale: "副系 Domination:Treasure Hunter 让首次 gank (从野区奇袭线上) 提前出金,Relentless Hunter 提供脱战 Move Speed 完成跨地图 R 后续 (比对手早一波兵到达边路战场)。"
    secondary_alternative: "若敌方有 3 个以上技能型 CC (Lissandra R, Maokai E, Sejuani Q),则把 Domination 换为 Resolve 带 Second Wind (50% HP 以下被动回血) 与 Revitalize (W 与 R 自回复 +10%)。用 snowball 换 CC 链下的生存力。"
matchup_draft:
  pick_into:
    - examples: ["lux", "karthus", "veigar"]
      archetype: "无位移的中路 mage"
      reason: "R 是踢出的全图 skillshot,标记首个命中的英雄。无位移的后排 mage 会被拖进 fear + Frenzy 链条,在 chunk 伤害落定前根本脱不开。"
    - examples: ["amumu", "sejuani", "rammus"]
      archetype: "迟缓的坦克打野"
      reason: "Q 的百分比 Armor 削减切穿他们的抗性,W 的 Attack Speed 加持续力赢下长战。他们既不能 kite 你,CC 又是单段:进入冷却后剩下的全靠你回血压过去。"
    - examples: ["warwick", "shyvana"]
      archetype: "无逃生的持续型 skirmisher"
      reason: "野区里的镜像 1v1。Briar 的 W 啃咬按缺失生命值结算,战斗越拖越偏向她。Q 的眩晕能打断他们的吟唱大招。"
  counterpicks:
    - examples: ["lissandra", "maokai", "kennen"]
      archetype: "多段定身的 AOE CC"
      reason: "他们在 Frenzy 中链式 CC 你,而唯一的逃生手段 E (W 自取消) 是长吟唱,回血没结束就被再次 CC。R 还会把她送进最糟的位置。"
    - examples: ["olaf", "morgana"]
      archetype: "免控或反治疗"
      reason: "Olaf R 净化掉 Briar 的 E 击退与眩晕;Morgana E 法术护盾挡掉 Q 眩晕和 R 恐惧,在 Frenzy 起势之前就关上 engage 窗口。"
    - examples: ["nidalee", "gragas"]
      archetype: "带位移的远程 poker"
      reason: "Nidalee 用标枪在 W 范围外消耗 Briar 的清野;Gragas R 或 E 能在追击中把她推出 Frenzy,重置叠层并让她失去续航。"
---

## 概述

Briar 是一名近战 **diver / skirmisher** (跳到敌方 carry 头上、靠长时间 1v1 取胜的英雄)。她把自身失去控制的特性变成机制:**Blood Frenzy (W)** 让她自动锁定最近敌人冲过去,获得 Attack Speed 与 Move Speed 加成;被动 **Crimson Curse** 让她从自身普攻造成的流血中回血。她没有先天 HP regen,所以保命的唯一办法就是不停地打 — 一旦停手,回血也停。她的大招 **Certain Death (R)** 是一个全图 skillshot (横跨整张地图的技能),把目标标记为 prey,把她锁进强化追击直到 prey 倒下,落地时让周围所有敌人陷入 fear (让敌人短暂失控逃跑)。

游戏思路是用 W Frenzy 的范围伤害快速 clear 野区营地,从 6 级开始找 gank (从野区到线上的奇袭),用 R 把后排目标 (站在队伍最后的脆皮 carry) 从 peel 担当 (保护 carry 的队友) 身边拉走。从那里 snowball (把前期人头滚成更多人头),变成靠装备吸血与自回血叠加来碾压 1v1 的追击机器。高水平动作是 W-接 E 自取消 — 准确判断什么时候用 **Chilling Scream (E)** 打断自己的 Frenzy 来回血并重新走位,然后用 Q 重新切入。

## 推荐出装

**起始装备:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**。宠物任务在 3-4 分钟左右自动完成。

**核心装备 (按购买顺序):**

1. ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** — Hailblade 的宠物升级 (XP 攒够后约 3-4 分钟自动进化)。Gustwalker 同伴在对英雄造成伤害时给予 Move Speed,叠加在 W 之上,把刷野到 gank 的衔接变成奇袭 dive (扑脸切入,即便在塔下也要击杀)。
2. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — 第一件 legendary,首个大 power spike (英雄变得明显更强的节点)。被动让下一次普攻成为必中暴击 (crit = 双倍伤害的攻击) 并提供回血。这次回血与强化 W 啃咬完美对接,为 Crimson Curse 提供它需要的缺失生命值燃料。
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 默认鞋子,适配大多数敌方阵容。它们减少普攻 (AA = auto-attack) 伤害,这一点在面对 marksman (Caitlyn 或 Jinx 这类远程物理 carry) 的长时间 Frenzy 战斗中很关键。
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — 基于基础 AD 的额外 Attack Damage 加上 Lifeline 护盾 (HP 阈值被动:HP 低于 30% 时自动触发的护盾)。这层护盾就是失败 R 切入 (R 全押追击) 的兜底。
5. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — 提升 lifesteal 上限 (lifesteal = 把普攻伤害的 % 转化为治疗) 并把溢出回血变为护盾。配合 Crimson Curse + Sundered Sky,你可以把任何没出 anti-heal (减少受治疗的装备) 的队伍回血压垮。

**情境装:**

- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — 对位有两个高强度物理 dealer 的队伍 (例如 Yasuo + Caitlyn):把吃下的爆发摊成几秒的慢出血,给你时间用 W 啃咬回血重置。
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — 对位 AP 爆发 (Syndra, Veigar, Lissandra)。法术护盾正好在 AP 威胁对你打连招时触发。
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 若敌方有 3 个以上硬 CC 技能 (CC = 锁住角色的眩晕、定身、恐惧) 则替换 Steelcaps。这双鞋的 Tenacity 属性会缩短这些 CC 效果的持续时间,这样 R 切入就不会在飞行途中被连环眩晕。
- ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — 对位 AP 持续伤害阵容:Crimson Curse 自回复与 W 啃咬回血提升 25%,把 Briar 的特点放大,而不是去打补丁。

**鞋子:** 默认 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**。当 CC 数量超过 AA 威胁数量时,换 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**。

**加点顺序:** 主升 **W** (DPS、续航、Move Speed),副升 **Q** (拉近距离 + 百分比 Armor/MR 削减),最后升 **E**。**R** 在 6、11、16 级各点一级。

**符文:** 主系 **Precision**,带 **Conqueror**、**Triumph**、**Legend: Alacrity**、**Last Stand**。副系 **Domination** 带 **Treasure Hunter** 与 **Relentless Hunter**;若敌方阵容能对你链式 3 段以上技能 CC,则副系换 **Resolve** 带 **Second Wind** 与 **Revitalize**。

## 关键对线

- **Warwick:** 野区里的续航镜像 (双方在战斗中都回血很多)。他靠 Attack Speed scaling,你靠 W 范围伤害加缺失生命值的啃咬伤害。双方都不要满血开战:先逼出他的 Q (会让你 fear),用 E 取消自己的 Frenzy 来躲掉,等他大招进入冷却再切入。
- **Lillia:** 她用 Q 被动伤害和 W 减速来 kite 你 (边后退边打)。把 E 留给她一边压你一边狂按 Q 的时刻 — 击退会把她撞到墙上眩晕。没有 E,她会一直绕着你转。
- **Lee Sin:** 早期斗士,如果他用 Q + Smite (打野专属 summoner spell) 起手会在 3 级赢你。4 级前别去他的红 buff 半区;Sundered Sky 上线之后局势倒向你,而他的 W 护盾回血远不如你的 W 啃咬。
- **Sejuani:** 带硬 CC 的坦克打野。Q 的 Armor 削减 (按百分比降低她的 Armor 属性) 把她打开,但她的 R 会在飞行中打断你的 R 切入。盯住她的大招冷却 — 她有 R 时,不要对靠近她的目标开 R。
- **Kha'Zix:** skirmisher 的经典 counterpick (BP 时专门挑出来克你的英雄)。他能把你拉开并在 2 秒内 burst 你 (burst = 1-2 秒内的高伤害)。6 级后跟队友抱团,围绕视野走位 (用眼避免被偷),不要单独 invade (进入敌方野区) 他的半区。

## 强势期与胜利条件

- **3 级:** 三个基础技能全部解锁。第一个合理 gank 窗口 — 越墙 Q 接目标、W 进入 Frenzy、Q 把对方撞墙眩晕。
- **6 级:** 第一发 **Certain Death**。跨地图远程 gank (横跨地图把 R 砸到边路) 成为真实威胁:即便已经交过 Flash 且没有位移的敌人,被 R 锁定后这次交手也得输。
- **Sundered Sky 成型 (约 10-12 分钟):** 你的第一个对决 spike (能稳定打赢 1v1 的节点)。能单挑大多数打野以及在视野外被你 R 上去的线上英雄。
- **Sterak's Gage 上线 (约 22-26 分钟):** Lifeline 护盾把失败的 R 切入变成人头。配合 Bloodthirster 的溢出回血,你既是队伍的 frontline (开团的肉身) 也是收割者。

## 常见错误

- **W-Frenzy 锁到坦克而不是 carry。** W 的自我嘲讽锁向最近敌人并优先英雄,但如果 Maokai (坦克) 离你比 Caitlyn (carry) 更近,你就会扑到 Maokai 身上。先用 Q 跨过 frontline (站在队伍前方的肉身英雄);Q 会在 W 自动锁定生效之前把你送到优先目标头上。
- **为了撞墙眩晕憋 E 太久。** 满蓄 E 可以击退敌人,但吟唱 (你站着不动施法的那段时间) 很长,期间你会吃伤害 (只是减伤,不是免疫)。如果没墙对齐,在 50-70% 蓄力时释放,只拿到减速 — 部分 E 救你命,满 E 让你死。
- **对 4 人成团的敌方使用 R。** R 让 prey 周围的敌人 fear,但 1.5 秒后他们会恢复。等他们恢复时,你独自处于他们队伍中央、还在强化 Frenzy 状态、身边没有可以 peel 你 (peel = 队友把粘住你的攻击者打掉) 的人。当 prey 落单时再用 R — flank (单独从侧翼接近的敌人)、转线、后排被孤立的瞬间 — 不要在干净的抱团 engage (敌方完全聚拢的开团) 上交。
- **忘了 Crimson Curse 需要缺失生命值才会 scale。** 额外回血随 HP 降低而增加。gank 成功后如果有第二波战斗将至,别满血回家;保留在 40% HP 会让下一次啃咬回血几乎翻倍。

## 进阶技巧

练习 **W 通过 E 的自取消**:Frenzy 锁错敌人 (锁到坦克而不是 carry,或被引向 CC) 时,在 Frenzy 中按 E 重置。E 吟唱期间的减伤 + 最大 HP % 回血,把砸了的 engage 变成免费的重新走位。在优先目标进入 Q 距离的瞬间,以未蓄力 (或 30% 蓄力) 释放 E,然后 Q 上去再 W,在正确的人身上启动一次干净的 Frenzy。整体动作大约消耗 1 秒;但人头转化的差距是一整条 HP 条。
