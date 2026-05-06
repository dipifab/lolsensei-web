---
title: "Lux Mid Build & Guide — Patch 16.9"
slug: "lux-mid"
language: "zh-hans"
patch: "16.9"
champion: "lux"
role: "mid"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Lux 光辉女郎中单完整攻略:法师核心出装顺序、Sorcery 符文与天赋加点细节、Q-E-R 标准起手连招、对线期消耗与压制思路、强势期节奏把握、团战站位与切入时机选择、新手常见错误规避,以及进阶 W 双护盾、Q 拐弯命中等高阶操作技巧。"
quick_learn:
  champion_dd_id: "Lux"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Burst"
  abilities:
    - key: "P"
      name: "Illumination"
      description: "技能命中后会给敌人挂上标记。Lux 下一次普攻引爆标记,造成额外法术伤害。"
      dd_spell_id: "Lux_Passive"
    - key: "Q"
      name: "Light Binding"
      description: "直线非指向技能,最多束缚命中的两名敌人。冷却很长,作为先手起手式,而不是消耗技。"
      dd_spell_id: "LuxLightBinding"
    - key: "W"
      name: "Prismatic Barrier"
      description: "去程与回程都会为 Lux 与穿过的队友提供护盾。再次施放可提前召回。"
      dd_spell_id: "LuxPrismaticWave"
    - key: "E"
      name: "Lucent Singularity"
      description: "指定区域的法球,持续减速并造成伤害。再次施放可引爆。主要清线工具。"
      dd_spell_id: "LuxLightStrikeKugel"
    - key: "R"
      name: "Final Spark"
      description: "超远距离直线光束,造成大量法术伤害,并引爆所有 Illumination 标记。"
      dd_spell_id: "LuxR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "W" }
    - { level: 15, key: "W" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对位 diver 与刺客 (Zed, Diana, Talon, Akali) — 金身能保住 R 的后续衔接"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "对位单体法术 CC (Ahri 魅惑, Lissandra R, Twisted Fate 黄牌)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "对位高回血阵容 (中单 Soraka, Vladimir, 上单 Dr. Mundo)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "只要任何核心目标出了魔抗装就立刻替换"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "Luden's Echo 与 Shadowflame 成型后,在团战与资源点用 R 从极限距离狙杀脆皮。用 E 控制空间,始终站在 frontline (前排) 之后。"
  weakness: "没有位移、没有先天机动性。被 diver 和刺客硬克制;一旦前排被破,你的站位会随之崩溃。"
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8229
      name: "Arcane Comet"
      icon_path: "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "主系 Sorcery: Arcane Comet 通过 E 接 Q 稳定触发,每次 trade 都加一段爆发。Manaflow Band 撑住线上 E 频繁消耗的蓝量,Transcendence 把 CDR 推过 40%,Scorch 在残血时收掉 poke。"
    secondary_rationale: "副系 Inspiration: Biscuit Delivery 与 Cosmic Insight 提供前期续航,并让团战中的 Flash 更频繁可用。"
    secondary_alternative: "如果对面有两名以上低魔抗的脆皮,可把副系换成 Precision,带 Presence of Mind (击杀返蓝) 与 Coup de Grace (对 40% HP 以下敌人 +8% 伤害)。"
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "viktor", "anivia"]
      archetype: "无位移的脆皮法师"
      reason: "Lux 的 Q 是远程束缚:没有位移、没有隐身的目标会被一条干净的弹道钉住,完整吃下 E + R 连招而无法反应。"
    - examples: ["senna", "ziggs"]
      archetype: "逃生薄弱的后排发育型"
      reason: "跨地图的 R 把站位失误直接变成人头。他们靠远距离输出,但躲不掉资源点刷新时的极限距离狙杀。"
    - examples: ["annie", "sylas"]
      archetype: "起手明显的爆发法师"
      reason: "他们的 all-in (强开全压) 必须近身且有明显前摇 — Lux 用 W 挡掉爆发,在恢复帧补 Q,然后走开重置 trade。"
  counterpicks:
    - examples: ["zed", "akali", "fizz"]
      archetype: "多段位移的高机动刺客"
      reason: "他们能在 Lux R 完成吟唱前就进入她身边的施法距离;Zhonya's Hourglass 能救命,但如果位移连招在金身生效前就命中,依旧救不回来。"
    - examples: ["xerath", "vel-koz"]
      archetype: "射程更远的炮台型法师"
      reason: "在 Q 距离之外就能 poke (远程消耗) 到 Lux。她没有手段拉近距离,每一次兵线对换都在掉血,却不能反打 all-in。"
    - examples: ["twisted-fate", "galio", "ryze"]
      archetype: "全图 / 跨线支援型"
      reason: "Lux 清完线就只能留在中路;对手用大招翻转边路与小龙资源。即使 1v1 对线赢了,Lux 仍会输掉宏观节奏。"
---

## 概述

Lux 是一名远程炮台型法师,擅长在 backline (后排) 控制区域、远距离消耗、并以一发光束收掉团战。她的连招围绕命中 **Light Binding (Q)** 起手,然后用 **Lucent Singularity (E)** 衔接 **Final Spark (R)** 打出最大伤害。她的基础机动很弱,且没有位移技能,因此必须站在小兵和前排之后 — 这就是远程伤害的代价。中路适合她,因为河道两侧的 gank (绕后抓人) 都能用 **Q** 反制,或用一发跨地图的 **R** 完成狙杀。

她的游戏思路一句话能讲清,但很难执行到位:在敌人踩进你的 **E** 范围时再补 **Q** (减速会把束缚锁成必中的 root — 定身),安全时用 **E** 推线,**R** 好了就去边路找机会。技巧体现在 **E** 的预判落点 (敌人补刀时必须站的位置) 与 **R** 的视野狙杀 (透过战争迷雾,前提是有眼)。

## 推荐出装

**起始装备:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 个 Health Potion。除非对面是高强度普攻骚扰阵容,否则不要选 Corrupting Potion。

**核心装备 (按购买顺序):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — 爆发节点,同时支撑线上频繁 E 的蓝量。
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 固定法穿,直接提升击杀脆皮的效率。
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 额外爆发,血量阈值的被动正好和 **R** 的收尾衔接。
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 后期 scaling (随时间变强) 的乘数装,你最高的 AP 单件。

**情境装:**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 对位单体法术 CC (Ahri 魅惑、Lissandra R、Twisted Fate 黄牌)。
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 对位 diver (突进型杀手) 与刺客 (Zed, Diana, Talon, Akali)。
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 对位高回血阵容 (中单 Soraka, Vladimir, 上单 Dr. Mundo)。
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 只要任何核心目标买了一件魔抗装就立刻接出。

**鞋子:** 默认 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**。如果队伍需要更频繁的 **R** 收尾,可以考虑 Ionian Boots of Lucidity。

**加点顺序:** 主升 **E** (清线与主要 DPS),副升 **Q** (功能性束缚),最后升 **W**。**R** 在 6、11、16 级各点一级。

**符文:** 主系 **Sorcery**,带 **Arcane Comet**、**Manaflow Band**、**Transcendence**、**Scorch**。副系 **Inspiration** 带 **Biscuit Delivery** 与 **Cosmic Insight**;若对面有多个低魔抗脆皮,改副系 **Precision** 带 **Presence of Mind** 与 **Coup de Grace**。

## 关键对线

- **Yasuo / Yone:** 风墙能挡掉你的 **Q** 与 **E**。先憋 **Q** 等他们交完技能,**E** 只在安全距离上用来清线。
- **Diana / Akali:** 典型的 dive (强突进) 威胁。Luden's Echo 之后立刻接 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass**;在线上对她们绝不交 **Flash** 主动追击。
- **Orianna:** 五五开,胜负在团战。射程相当;不要被勾进普攻 trade (互拼消耗),她在同样的装备节点比你 scaling 更强。
- **Twisted Fate:** 拼支援节奏。如果他朝你扔黄牌,在他贴上来之前 **Q** 出去;否则用河道与三角草丛的眼盯住他的 **R**。
- **Galio:** 6 级前别和队友抱团 (他的 **W** 专吃聚集目标)。他平 A 小兵时是惩罚窗口;他没有清线射程,推线推不过你。

## 强势期与胜利条件

- **2 级:** 一级 **E** 加上初始的 **Q**,已经具备从慢推线压制对手的工具。
- **6 级:** 第一发 **Final Spark** 解锁支援与狙杀。如果 **Q-E-R** 连招肌肉记忆已经成型,中路河道无视野的遭遇战就是一个免费人头。
- **Luden's Echo 成型 (约 12-14 分钟):** 兵线主动权反转。你可以把线推过去并带着兵线节奏去支援,同时让自家打野顺着对面下半区入侵。
- **Rabadon's Deathcap 成型 (约 24-28 分钟):** 此时你的 **R** 能直接秒杀没出魔抗装的脆皮。围绕资源点开团。

## 常见错误

- **没起手就直接 Q 消耗。** 先把 **E** 落到他们脚下减速,再 **Q** 他们必须经过的方向。裸 **Q** poke 就是空交蓝量。
- **守着 E 不推空兵线。** 蓝量够就该按 CD 推线;让出的一点 trade 远小于你拿到的兵线 prio (优先权,可以脱身去支援或拿河道蟹)。
- **团战自动站到 R 极限距离。** **R** 满射程会把你抛在队友的 peel (保护) 范围之外。站在倒数第二靠后的位置,这样侧翼绕后才不会瞬间被秒。
- **分推时把 Q 当消耗。** 边路要把 **Q** 留给逃命的反 gank;那边没人接你的 follow-up,束缚是逃生按钮,不是消耗资源。

## 进阶技巧

练习 **W** 的回拉技巧:在 **Prismatic Barrier** 飞到去程顶点的瞬间再点一次 **W** — 回程护盾会以最大值返回到队友身上,等于同时完成 peel 与瞬间护盾爆发。在团战里,这样操作的有效护盾值大约是让 **W** 自然飞完全程的两倍。
