---
title: "Caitlyn Bot Build & Guide — Patch 16.9"
slug: "caitlyn-bot"
language: "zh-hans"
patch: "16.9"
champion: "caitlyn"
role: "bot"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Caitlyn 下路 ADC 完整攻略:起始装备、lane bully 出装路线、关键对线分析、强势期与团战节奏、新手常见错误规避以及 W trap 起手强化 Headshot 的进阶连招技巧详解。"
quick_learn:
  champion_dd_id: "Caitlyn"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Lane Bully"
  abilities:
    - key: "P"
      name: "Headshot"
      description: "每隔几次平 A,Caitlyn 打出一发追加伤害的强化弹,伤害随暴击率提升。对踩中 trap 或被 net 命中的目标,射程翻倍。"
      dd_spell_id: "Caitlyn_Passive"
    - key: "Q"
      name: "Piltover Peacemaker"
      description: "长距离直线吟唱 skillshot。一线穿透多个目标,后续命中伤害递减。主力 DPS 与清线工具。"
      dd_spell_id: "CaitlynQ"
    - key: "W"
      name: "Yordle Snap Trap"
      description: "放置一个陷阱。触发时显形并定身敌方英雄 1.5 秒,同时获得一发强化 Headshot。"
      dd_spell_id: "CaitlynW"
    - key: "E"
      name: "90 Caliber Net"
      description: "指向技,减速敌人并把 Caitlyn 向后弹开。是逃 diver 的工具,而不是开团技。"
      dd_spell_id: "CaitlynE"
    - key: "R"
      name: "Ace in the Hole"
      description: "全图单体处决吟唱大招。目标周围的友军可以替他挡子弹,所以要等 isolation (孤立) 时机。"
      dd_spell_id: "CaitlynR"
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
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "对位坦克前排或堆血阵容 (Sion, Cho'Gath, Dr. Mundo) — 额外护甲穿透按敌人最大 HP 计算"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "对位高回血阵容 (Soraka, Vladimir, Aatrox) — 上 Grievous Wounds,命中即削弱回血"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "对位刺客或 diver 压力 (Zed, Samira, Yasuo flank) — 移速加被动护盾给你按 E 的窗口"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "对位 hook 或 pick 阵容 (Blitzcrank, Thresh, Morgana Q) — 法术护盾吃掉关键 CC"
  base_combo: ["W", "Q", "AA"]
  win_condition: "用 Q 的射程和 trap 起手压制下路,The Collector 与 Infinity Edge 雪球 Headshot,然后站在 frontline 之后,E 风筝并用 R 收掉残血脱战的目标。"
  weakness: "E 一进 CD 就没有真正的逃生手段。被 diver 与刺客 (Samira, Yasuo, Zed flank) 硬克;若早期优势不能转成中期击杀,会被 Jinx、Vayne 这类 hyperscaler 反超。"
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8021
      name: "Fleet Footwork"
      icon_path: "perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
---

## 概述

Caitlyn 是游戏内射程最长的 marksman,也是教科书级的 **lane bully** (从对线期就开始压制、靠对线优势滚雪球的英雄)。她作为下路 carry 的全部身份,就是把对面双人组前 12 分钟搞得很难受,然后把这份优势换成资源点。她的 **Piltover Peacemaker (Q)** 比线上几乎所有平 A 射程都长,**Yordle Snap Trap (W)** 把 chokepoint 变成伤害区,被动 **Headshot** 惩罚每一个站位失误的人。代价也很真实:她是 ADC 中基础护甲与血量最低之一 — 顺风时主宰对线,被抓出位置就会瞬间融化。

游戏思路一句话能讲清,但执行起来很苛刻:用 **Q** 慢慢消耗兵线,在草丛和下路三角草丛放 **W** 威胁 **W → 强化 Headshot** 连招,把第一次回城的优势转成第一座防御塔的板子金。**The Collector** 与 **Infinity Edge** 之后,角色变成 back line carry (站在后排输出的核心):站倒数第二靠后的位置,有 diver 跳上来就用 **E** 风筝,**R** 只用来处决残血脱战的目标 — 永远不当 poke 用。

## 推荐出装

**起始装备:** Doran's Blade + 2 个 Health Potion。即使对线优势也不要补第二件 Doran's — 那点金币去做 The Collector 的 Pickaxe 部件性价比高得多。

**核心装备 (按购买顺序):**

1. **The Collector** — 一件套急速。处决被动在敌人 5% HP 以下触发,正好抹掉 **R** 想收掉的残血脱战目标。lethality (穿甲) 在前期最理想,因为对面 ADC 的护甲还很少。
2. **Berserker's Greaves** — 攻速鞋。除非对面有 3 个以上硬 CC 威胁,否则不出 Mercury's Treads。
3. **Infinity Edge** — 你最大的伤害节点。Caitlyn 的 Headshot 加成随暴击率提升,IE 把每一发 Headshot 拉到接近秒杀后排脆皮的水平。
4. **Rapid Firecannon** — 额外平 A 射程 (700+ 基础 + RFC + IE 让你成为这局射程最长的平 A 英雄) + Energized 触发,与 Headshot 节奏天然同步。

**情境装:**

- **Lord Dominik's Regards** — 对位坦克前排或堆血阵容 (Sion, Cho'Gath, Dr. Mundo)。如果对面有 3 个以上坦克,替换 Rapid Firecannon。
- **Mortal Reminder** — 对位高回血阵容 (Soraka, Vladimir, Aatrox)。挂 Grievous Wounds (重伤,大幅削弱受到的回血),命中即生效。
- **Phantom Dancer** — 对位刺客或 diver 压力。HP 阈值被动 (低血量时触发的护盾) 加上移速,刚好给你按 **E** 逃出去的半秒。
- **Edge of Night** — 对位 hook 或 pick 阵容 (Blitzcrank, Thresh, Morgana Q)。法术护盾吃掉一个关键 CC,在那种对位上就是生与死的差距。

**鞋子:** 默认 Berserker's Greaves。只有对位强力 AP CC 例如 Brand 或 Zyra 辅助时才换 Mercury's Treads。

**加点顺序:** 主升 **Q** (清线和主力 DPS),副升 **E** (你唯一逃生技的冷却),最后升 **W** (trap 伤害随等级上升,但持续时间不变)。**R** 在 6、11、16 级各点一级。

**符文:** 主系 **Precision** 带 **Fleet Footwork**、**Presence of Mind**、**Legend: Alacrity**、**Coup de Grace**。副系 **Sorcery** 带 **Manaflow Band** 与 **Gathering Storm**;若想在升鞋时多一笔金币,可换副系 **Inspiration** 带 **Magical Footwear** 与 **Cosmic Insight**。

## 关键对线

- **Draven:** 1-3 级略劣势,他的 Spinning Axe 爆发能压你 trade。3 级前不要打;在自家塔附近 freeze (冻住兵线) 兵线,等三技能齐了,且 **W** 已经在线上草丛里再 trade。punish 他 Q-Q-Q 之后蓝量耗尽的窗口。
- **Ezreal:** 五五开,辅助允许压上时偏 Caitlyn 优势。你比他的 **Q** 射程长不少。每次他用 Q 补刀,你就在线上自由 **Q**。绝不要朝他 **W** 路径 dodge。
- **Jhin:** 五五开,**R** 狙杀的纪律决定胜负。尊重他的第四发子弹 (伤害极高)。他的 **W** 进 CD 时,走上去 trade。如果他 **W** 起手明显,用 **E** dodge 掉束缚。
- **Vayne:** 9 级前 Caitlyn 压倒性优势,11 级后变噩梦。她是你的金矿:3 级前 shove (强推) 兵线,用 **Q** poke 把她赶离线,6 级提醒打野做 dive (跳塔击杀)。如果她活到两件套,对线就结束了,你必须切换到 back line 角色。
- **Samira:** 她有 W 之后想要近战 all-in (强开全压)。在线上草丛放 trap 切断她进场路径,她 dash 进来的瞬间用 **E** 当 knockback (击退) 留好 (不要拿去 poke),Phantom Dancer 护盾 CD 中绝不打。

## 强势期与胜利条件

- **2 级:** 一点 **Q** 加一点 **E**,如果对面 ADC 走上来补刀,Q-AA-AA 的起手能掉他 30-40% 血量。把兵线压在线中,蹲这个窗口。
- **6 级:** 第一发 **Ace in the Hole** 解锁 pick 压力。从三角草丛里面释放,这样子弹的视野不会暴露你的位置。不要拿去 poke — 等周围没有友军的残血脱战目标。
- **The Collector 成型 (~ 8-10 分钟):** 第一个处决节点。绝大多数 squishy (脆皮) 在 5% HP 以下被被动直接秒杀,所以一发 **Q** 穿过低血量小兵线打到敌方英雄就是免费人头。
- **Infinity Edge 成型 (~ 18-22 分钟):** 你最大的伤害节点。Headshot 触发从"刺痛"变成"抹掉敌方 ADC"。这里强行打资源点团 — Drake 或 Rift Herald — 在你的胜利条件区域布好视野。

## 常见错误

- **不管蓝量一直 Q 清线。** Caitlyn 前期蓝量很紧。只有当兵线对齐两个近战兵 + 一个远程兵时才 Q,否则下一次 trade 窗口你就空蓝了。
- **把 W trap 当 poke 扔。** trap 是起手工具,不是伤害工具。放在 chokepoint (线上草丛、三角草丛、河道入口),也就是敌人补刀或转线必须经过的地方。直接扔在敌方 ADC 脚下的裸 trap,只是浪费一秒线上 prio。
- **团战自动站到平 A 最大射程。** 平 A 满射程会把你抛在队友 peel (保护) 范围外。站倒数第二靠后,这样侧翼绕后的刺客没法在辅助反应之前秒掉你。
- **R 当作过半张地图的 poke。** **Ace in the Hole** 吟唱长,目标附近任何敌人都能 body-block 子弹。留给**孤立**的残血脱战目标 — 350 单位内没有友军挡子弹的那种。
- **为追击交掉 E。** **90 Caliber Net** 是你唯一的逃生技。一进 CD 你就是 glass cannon (玻璃大炮 — 高输出低防御的英雄,大多数 ADC 都是),对 diver 没有任何答案。用来逃命,不要用来贴近。

## 进阶技巧

在 chokepoint 练习 **"Trap → Q → 强化 Headshot"** 连招。走到三角草丛或者野区入口,把 **W** 放在敌人后撤的方向,然后用 **Q** poke 把他们逼回去。他们一踩中 trap,1.5 秒的束缚就保证你能补一发 **Q** 加一发强化 Headshot — 而强化弹对踩 trap 的目标射程**翻倍**,意味着你可以从大多数 ADC 连平 A 都打不到的距离上发射。实际效果:把 2v2 对线变成 1.5v2 — 敌方 ADC 必须二选一:要么放弃兵线 prio (优先权 — 不丢兵就脱身的能力),要么踩进必中连招里。无论选哪个,你都赢 trade。
