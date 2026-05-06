---
title: "Irelia Top Build & Guide — Patch 16.9"
slug: "irelia-top"
language: "zh-hans"
patch: "16.9"
champion: "irelia"
role: "top"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Irelia 刀锋舞者上单完整攻略:核心装备 Trinity Force 出装顺序、Conqueror 主系符文搭配、E-Q-W-R 标准连招、对线期消耗与压制思路、强势期节奏把握、团战切入与目标选择、新手常见错误规避,以及 R-Flash 改向、Q reset 连段等高阶操作技巧。"
quick_learn:
  champion_dd_id: "Irelia"
  difficulty: 5
  damage_type: "mixed"
  champion_class: "Fighter / Skirmisher"
  abilities:
    - key: "P"
      name: "Ionian Fervor"
      description: "技能命中敌人会叠加 Attack Speed 层数 (最多 4 层)。满层时 Irelia 还会触发额外的 on-hit 法术伤害。"
      dd_spell_id: "Irelia_Passive"
    - key: "Q"
      name: "Bladesurge"
      description: "突进至目标造成伤害并回血。目标死亡或带 Mark 时立即重置冷却 — 这就是所谓的 Q reset (在小兵之间连续突进)。"
      dd_spell_id: "IreliaQ"
    - key: "W"
      name: "Defiant Dance"
      description: "蓄力斩击的 channel,蓄力越久伤害越高,期间承受的物理与法术伤害都会减免 (channel = 持续按住蓄力)。"
      dd_spell_id: "IreliaW"
    - key: "E"
      name: "Flawless Duet"
      description: "放置一柄刀刃,再次施放放第二柄。两刀相向飞出,眩晕并对中间所有目标挂上 Mark。最主要的起手工具。"
      dd_spell_id: "IreliaE"
    - key: "R"
      name: "Vanguard's Edge"
      description: "远距离的刀刃齐射,命中的敌方英雄被挂上 Mark,并在第一名命中目标周围生成减速并造成伤害的墙。Engage 与 zoning 大招。"
      dd_spell_id: "IreliaR"
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "对位高法术伤害或连锁 CC (Lissandra, Ryze, Malphite — tenacity 缩短 stun 与 slow 的持续时间)"
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "对位 kiter 与远程上单 (Vayne, Gnar, Kennen) — 主动 dash + slow 帮你贴住高机动目标"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "对位堆护甲的肉 (Malphite, Ornn, Sion) — armor shred 放大 Q 的多次命中与队友的 follow-up"
    - dd_id: "3074"
      name: "Ravenous Hydra"
      against: "对位分推 (splitpush) 阵容,需要清线与 1v1 续航 (AOE 吸血 = 范围溅射 + 回血)"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "用 E 命中眩晕,通过兵线 Q-reset 贴住目标,在被动满层时与对手 trade。把线上的 snowball (滚雪球,把早期优势放大成更大的优势) 带到中期的小规模团战。"
  weakness: "没命中 E 就没有可靠的 engage。远程消耗与 disengage 让你够不到前排。没有 Trinity Force 或 Stridebreaker 的话很容易被 kite。"
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
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["malphite", "ornn", "sion"]
      archetype: "缺乏远程消耗的迟缓肉盾"
      reason: "他们没有手段从 E 的眩晕脱身,也没法应对兵线之间的 Q reset;只要 Conqueror 开始叠层,你在每个等级都能 out-trade。"
    - examples: ["nasus", "garen", "darius"]
      archetype: "无位移的近战 juggernaut"
      reason: "E + Q 给你贴脸距离,W 的减伤覆盖对方爆发窗口;他们既不能 kite 你也躲不过眩晕。"
    - examples: ["azir", "ryze"]
      archetype: "被 flex 到上路的中距离法师"
      reason: "近距离的脆皮 (HP 低、防御薄) 又没有位移;Trinity Force 一成型,你用满层被动一波就能秒掉。"
  counterpicks:
    - examples: ["vayne", "kennen", "gnar"]
      archetype: "远程或 kite 型上单"
      reason: "他们在 E 距离外平 A 你,用自己的 dash 或变身 kite 掉 Q,惩罚每一次靠近。你必须出 Stridebreaker 才能 engage。"
    - examples: ["fiora", "camille", "jax"]
      archetype: "带指向反制或真伤的对线决斗者"
      reason: "Fiora 能 paryy E 或 R,Camille 的 E 钩爪穿透你的位移直接眩晕,Jax 的 E 眩晕加上长时间 trade 中以攻速为基础的被动还反过来 outscale 你。"
    - examples: ["malzahar", "renekton"]
      archetype: "带反 skirmisher 工具的 lane bully"
      reason: "Malzahar 的压制 (指向沉默 + 锁定) 直接打断 Q reset 链条;Renekton 怒气强化的 W 在你 W 蓄力时穿透眩晕,在你 scale 起来之前就结束 trade。"
---

## 概述

Irelia 是一名近战 skirmisher (依靠多次短促 trade 累积优势的 fighter,而不是一次性大爆发)。她的成败完全系于 **Bladesurge (Q)** 的位移。Q 的基础冷却很长,但只要击杀小兵或打到带有 Mark 减益的目标 (Irelia 技能在敌人身上留下的小图标),冷却就会**立即重置**。一次小规模团战可以连续四到五段位移。被动 **Ionian Fervor** 在每次技能命中时叠加 Attack Speed,最多 4 层 (每个技能命中加 1 层),第 5 层还会附加额外伤害与 crowd-control 减免。

上路的游戏思路一句话能说清楚,但执行很苛刻。用 **Flawless Duet (E)** 命中眩晕 (需要一点 setup 时间),再用 **Q** 跟进眩晕目标,**W** 减免回敬伤害,然后通过兵线 Q-reset 来 disengage 或追击。6 级后,**Vanguard's Edge (R)** 把对线小规模交火变成击杀 — 同时提供区域控制和第二个 Mark,让你额外白嫖一次 Q reset。中期则借 Q reset 在兵线之间穿梭去打 pickoff (在团战之外击杀落单的敌人) 并向资源点转线。

## 推荐出装

**起始装备:** Doran's Blade + 1 个 Health Potion。只有在远程消耗对线 (Kennen, Quinn, Vayne) 需要回血时才选 Doran's Shield。

**核心装备 (按顺序):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — 你的主要节点。Sheen 被动 (即技能后下次普攻触发的内置效果,行话叫 "proc") 与每次 Q 位移都完美 combo;Ability Haste 缩短 Q 冷却;Attack Speed 配合被动叠层。
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 对位 AD 重压的默认鞋子。如果对线是近战或 AD 远程,Trinity 之后接出。
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — 给你 HP、AD scaling,以及低血护盾,让 dive 窗口能稳活下来。
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — 把承受的物理伤害转成几秒钟的缓慢出血 (伤害分摊到时间里,不是瞬间承受)。对位带两名强力物理输出 (例如 Yasuo + Caitlyn) 的阵容很合适:你能撑过爆发窗口,有空 Q 走脱身。
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — 对英雄首次普攻必暴击,还附带回血。和 Sheen + Q reset 的循环天衣无缝。

**情境装:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 对位高法术伤害或连锁 crowd control (Lissandra, Ryze, Malphite)。Tenacity 缩短 stun 与 slow 的持续时间。
- ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — 对位 kiter 与远程上单 (Vayne, Gnar, Kennen) 的备选 mythic。主动 dash + slow 提供一段不依赖 Q 的位移。
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — 对位堆护甲的肉 (Malphite, Ornn, Sion)。Armor shred 放大 Q 的多次命中与队伍 follow-up。
- ![Ravenous Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3074.png) **Ravenous Hydra** — 当你需要 splitpush (单独带边路兵线,逼对方分人来应对)。AOE 溅射加吸血让 1v1 与清线都变得轻松。

**鞋子:** 默认 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**。当对方有 2 个以上连锁 CC 来源时,换成 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**。

**加点顺序:** 主升 **Q** (冷却越短 = 越多 reset、越多伤害),副升 **E** (眩晕起手),最后升 **W**。**R** 在 6、11、16 级各点一级。

**符文:** 主系 **Precision** 配 **Conqueror**、**Triumph**、**Legend: Alacrity**、**Last Stand**。副系 **Resolve** 配 **Bone Plating** 与 **Revitalize**。对位短 trade 决胜的爆发型对线 (例如初期的 Pantheon、Renekton) 时,把 Conqueror 换成 **Press the Attack** — 它奖励 4 秒内 3 次普攻打出伤害爆发,而不是靠长时间作战慢慢叠层。

## 关键对线

- **Renekton:** 典型的 lane bully。3 级前稳着走,躲掉 W 眩晕,在塔下补刀。6 级 R 一交,主动权立刻转手 — **W** 能吃下他的连招后再 trade。
- **Fiora:** 用 **Riposte (W)** 同时反 paryy 你的 E 眩晕和 R 的 Mark。先丢一柄 E 假动作骗出她的 paryy,等 W 进 cooldown 才用 Q commit。
- **Malphite:** 6 级前白送对线 — 躲 E 的减速,通过兵线 Q-reset 去消耗他。6 级后他能 flash-R 强开你的队伍 — 推图必须靠队友抱团,没有眼别 extend (没有支援就压过河道)。
- **Vayne:** 除非她失误,否则就是硬克制。她用 **Tumble (Q)** kite 掉你的 Q (一边攻击一边后退保持距离),用 **Silver Bolts (W)** 啃 HP。先出 Stridebreaker,把兵线 freeze 在塔边 (把兵线压在自家塔附近,让她无法安全补刀),并在 6 级前叫打野 gank。
- **Camille:** 大致五五开。她的 **Hookshot (E)** 能穿透你的位移眩晕你 — 把 **Flawless Duet** 留到她钩出来的中段眩晕她。谁先放下 setup CC 谁就赢这次 trade。

## 强势期与胜利条件

- **3 级:** 三个基础技能全部到位。能完整打出 E 眩晕 + Q + 平 A + W 的一段满层被动 trade。
- **6 级:** **Vanguard's Edge (R)** 解锁 all-in (押上一切去拿人头) 窗口。R 的 Mark 让你白嫖一次穿过墙壁的 Q reset;打野到位后立刻把 R 砸到残血目标上。
- **Trinity Force 成型 (~14-16 分钟):** Sheen 触发让你每次 Q 的伤害陡增。兵线主动权易手:你能把线推过去,然后用 Q reset 穿过边路兵线去支援资源点。
- **三件装 (Sterak's 完成,~24-28 分钟):** 你成为团战 skirmisher:用 Q reset 切到对方 backline (站在坦克身后的脆皮 carry),靠 Sterak's 护盾 + W 撑住爆发,再用 R 的牢笼收尾。

## 常见错误

- **没起手就乱 Q。** 对没有 Mark 的目标裸 Q,长冷却只换来一次位移。永远先命中 **E** 眩晕,或者先把 Q 接到残血小兵上,让 reset 循环不断。
- **眩晕期间 W 蓄太久。** **Defiant Dance** 是 channel 技 — 蓄力时不能移动也不能攻击。在减伤窗口走完后,如果敌人 disengage,立刻 tap-cancel 取消;没有人在范围里,就别死等最大充能 release。
- **强行穿过反制开团。** Fiora 的 **W**、Sivir 的法术护盾、Olaf R 都能白吃你的 E 眩晕。先骗这些技能,再 commit 你的控制。
- **Trinity 之前就 splitpush。** 没有 Trinity,对塔与兵线的伤害都不行,白白把节奏让出去。先把兵线压在塔附近,等 Trinity 一成型再去推边路。
- **队伍抱团时大招只罩一个目标。** 单独把 **R** 的笼子套到一个脆皮上是浪费,他们的肉能用身体挡走。把 R 瞄准 choke (jungle 中的狭窄走廊),让笼子同时罩住 2-3 个敌人,把对方 backline 隔离在团战之外。

## 进阶技巧

练习 **R-flash** 连招:朝一个方向施放 **Vanguard's Edge**,然后立刻朝另一个方向 **Flash** 来改变刀刃齐射的方向。刀刃会跟随 Irelia 的位置,所以与施法线垂直的一次 flash,能把以为自己在 R 射程外安全的英雄套进笼子。当队友需要在小龙坑或大龙坑附近 pickoff (击杀落单敌人) 一名逃跑的 carry 时,把它当作 engage 工具用。
