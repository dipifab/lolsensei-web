---
title: "Heimerdinger Mid Build & Guide — Patch 16.9"
slug: "heimerdinger-mid"
language: "zh-hans"
patch: "16.9"
champion: "heimerdinger"
role: "mid"
last_updated: "2026-05-02"
description: "League of Legends Patch 16.9 Heimerdinger 中单完整攻略：最佳出装路径、符文页推荐、炮塔布置技巧、关键对线应对、强势期节奏掌握、新手常见错误,以及统治中路所需的高阶进阶技巧。"
quick_learn:
  champion_dd_id: "Heimerdinger"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Artillery"
  abilities:
    - key: "P"
      name: "Hextech Affinity"
      description: "Gain bonus Move Speed while near allied towers or your own deployed turrets."
      dd_spell_id: "Heimerdinger_Passive"
    - key: "Q"
      name: "H-28 G Evolution Turret"
      description: "Deploy a turret (max 3 active). Turrets build charge; at max charge fire a beam. Charges reset on Q cast. Range 350."
      dd_spell_id: "HeimerdingerQ"
    - key: "W"
      name: "Hextech Micro-Rockets"
      description: "Long-range rocket barrage (1325 range) converging on cursor. Extra hits deal reduced damage. Each rocket hitting a champion grants nearby turrets 20% charge."
      dd_spell_id: "HeimerdingerW"
    - key: "E"
      name: "CH-2 Electron Storm Grenade"
      description: "Lob a grenade (970 range): slows enemies in the area, stuns enemies in the center. Fully charges nearby turrets on hit."
      dd_spell_id: "HeimerdingerE"
    - key: "R"
      name: "UPGRADE!!!"
      description: "Empowers next non-ultimate ability. R+Q: 8s mega-turret with AOE splash and slow. R+W: 4 rocket waves. R+E: larger stun zone with knockup in center."
      dd_spell_id: "HeimerdingerR"
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
    - { dd_id: "6655", name: "Luden's Echo" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3118", name: "Malignance" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对刺客与突进者 (Zed, Akali, Diana) — 金身为炮塔争取反击时间"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "对高治疗阵容 (Vladimir, Soraka mid, Sylas)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "当任何高优先目标购买魔抗装备时"
  base_combo: ["Q", "Q", "Q", "E", "W", "R+Q"]
  win_condition: "搭建炮塔阵地，用 E 控制，用 W 削血。6 级用 R+Q 巨型炮塔逼对手离开，建立无法移动的死亡区域。"
  weakness: "毫无机动性，且炮塔放置距离极短（350）。机动刺客在炮塔开火前就贴身；炮塔会被群体清线技能秒掉。"
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
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Arcane Comet 通过 E（减速锁定目标）和 W 触发，为炮塔 DPS 增加爆发。Manaflow Band 防止重置炮塔时蓝量耗尽。Transcendence 缩短 E 与 W 冷却。Gathering Storm 在长局中持续放大法强。"
    secondary_rationale: "Biscuit Delivery 撑过前期高蓝耗阶段，Cosmic Insight 全局降低冷却（含 UPGRADE!!!），让 R+Q 巨型炮塔在中期循环更频繁，奠定中期优势。"
    secondary_alternative: "面对高消耗对线 (Xerath, Vel'Koz)，将 Inspiration 换成 Resolve，搭配 Second Wind（受伤后回血）和 Bone Plating（减少多段连招的爆发），以延长对线生存时间。"
matchup_draft:
  pick_into:
    - examples: ["syndra", "veigar", "anivia"]
      archetype: "无位移的爆发法师"
      reason: "他们无法走进三炮塔阵地而不持续掉血。他们的爆发需要拉近距离，而 E 的眩晕加炮塔光束会在他们反击之前惩罚这一步。"
    - examples: ["annie", "malphite", "galio"]
      archetype: "必须走进炮塔范围的近战法师或坦克"
      reason: "他们的开团是近战或短距离。三座炮塔让进场致命——满充能光束在开团动画结束之前就会命中。"
  counterpicks:
    - examples: ["xerath", "vel-koz", "ziggs"]
      archetype: "在炮塔射程外消耗的远程炮台法师"
      reason: "炮塔只覆盖 Heimerdinger 周围一圈。炮台法师在 1000+ 距离稳坐塔阵之外，把他磨到没血而从不踏入他的区域。"
    - examples: ["zed", "akali", "katarina"]
      archetype: "炮塔反应前就贴身的机动刺客"
      reason: "炮塔的攻击周期偏慢。三段位移的刺客冲进塔阵，在第一束光打出之前就杀掉 Heimerdinger；冷却过短，无法救他。"
    - examples: ["twisted-fate", "ryze"]
      archetype: "完全跳过塔阵的全图游走者"
      reason: "Heimerdinger 无法游走——挪炮塔要重投三个 Q。对手在边路捞免费人头，而 Heimerdinger 守着一座永远没人来打的塔阵。"
---

## 概述

Heimerdinger 是依靠把对线变得不可居住来取胜的区域控制法师。他的 **H-28 G Evolution Turret (Q)** ——同时最多三座——形成一个持续伤害区域，惩罚任何踏入近战或施法距离的敌人。满充能时每座炮塔会发射强力光束；**CH-2 Electron Storm Grenade (E)** 在该区域眩晕或减速敌人，**Hextech Micro-Rockets (W)** 在 1325 距离上持续削减目标。结果是一名实力完全取决于站位的英雄：塔阵铺好时，他在正面交换中几乎无法被击杀；塔阵不在时，他是全游戏最脆弱的英雄之一。

他的 **UPGRADE!!! (R)** 完全改变了局势。按下 **R+Q** 会布置一座强化巨型炮塔——造成范围溅射伤害、附带减速，并且持续 8 秒，期间再放 **Q** 也不会受影响。把它当作一台自主的区域封锁机器。中路的游戏计划是一直搭建并保持塔阵直到 6 级，然后用 **R+Q** 把对手从一塔逼走，进而 snowball（早期累积的优势会逐步放大成更大的领先）进入中期。

## 推荐出装

**起始装备：** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) Doran's Ring + 2 Health Potions。蓝量至关重要：每座炮塔 20 蓝，并且你会频繁重新放置。

**核心装备（顺序）：**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** — 第一件装备的爆发节点、补充重置炮塔所需的蓝量，以及让 W 消耗有意义的 magic penetration（魔法穿透：忽略敌人部分魔抗的能力）。
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 固定魔法穿透，惩罚踏进炮塔范围的脆皮目标。
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 当敌人血量低于阈值时放大爆发，正好衔接 R+E 转 W 的连招。
4. ![Malignance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3118.png) **Malignance** — 降低 **UPGRADE!!!** 冷却，并在大招期间提升法强；更频繁的巨型炮塔循环定义中期。
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 后期法强乘数；每束炮塔光束、每发火箭都会单独成为威胁。

**情境装备：**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 对刺客与突进者 (Zed, Akali, Diana)。金身（短暂进入冻结无敌状态）让炮塔吸收他们的爆发，你则等待他们冷却结束。
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 对高治疗阵容 (Vladimir, Sylas)。通过炮塔命中施加 Grievous Wounds（一种使治疗降低 40% 的减益效果）。
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 一旦高优先目标（高优先目标 = 击杀后对你方威胁最大的敌方英雄，通常是吃了发育的核心）购买魔抗装备就上；如果敌方全队叠魔抗，可以替代 Rabadon's。

**鞋子：** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes 是默认。![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) Ionian Boots of Lucidity 在你需要更多冷却缩减以更快循环 **UPGRADE!!!** 时可以接受。

**技能加点：** 优先点 **Q**（主要伤害与炮塔威力来源），其次 **W**（消耗与炮塔充能），最后 **E**。**R** 在 6、11、16 级点出。

**符文：** 主系 **Sorcery**，搭配 **Arcane Comet**、**Manaflow Band**、**Transcendence**、**Gathering Storm**。副系 **Inspiration**，搭配 **Biscuit Delivery** 与 **Cosmic Insight**。

## 关键对线

- **Syndra：** 她远程扔球，但施法需要固定位置。在你的一塔下放三座炮塔，把兵线维持在 slow-pushed（让小兵在线路中央堆积，使下一波兵线更大），用 **E** 打断她拾取魔球。6 级在争夺地形上用 **R+Q** 赢下 all-in（全力承诺击杀对手的交战）。
- **Zed：** 池中最难的对线。他会在炮塔开火前位移穿过。尊重他的 3 级与 6 级强势期；第二件装备买 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) Zhonya's Hourglass。当他开 **Death Mark (R)** 时，立刻金身——炮塔将获得三秒开火窗口。
- **Orianna：** 消耗均衡的对线。团战中她可以用 **Command: Shockwave (R)** 把你的炮塔推开。对线时把炮塔放在她必须靠近的兵线一侧。当她的球在附近时，避免在塔阵周围扎堆。
- **Twisted Fate：** 他会忽视你的塔阵去游走。在他离开前把兵线推到他的塔下，在河道插眼，如果他传送回线就找机会打 **R+E**（击飞）接 **W**。你阻止不了他的 macro game（地图层面的整体策略），但可以惩罚他的基地塔。
- **Viktor：** 必须站定才能输出的无位移法师。三炮塔的塔阵会逼出他的 **Death Ray (E)**，你就可以从塔阵后方用 **W** 消耗。6 级后，**R+Q** 巨型炮塔会把他完全赶离兵线或逼掉闪现。

## 强势期与胜利条件

- **1 级：** 在第一只炮车兵到来前，把两座炮塔放进兵线里。走入普攻距离的对手会承受惊人的 DPS（Damage Per Second——炮塔每秒持续输出的伤害）并被迫退线——你不花一点蓝消耗就拿到 first push（兵线优势：你的小兵推向对方塔，使你能离线去争夺龙或支援中路）。
- **6 级：** **UPGRADE!!!** 解锁。**R+Q** 巨型炮塔持续 8 秒，且不会被 CC（眩晕、减速等任何控制）影响，把 Heimerdinger 的整片区域变成死亡陷阱。立即逼出一次团战或塔交换。
- **Luden's Echo 完成（约 11-13 分钟）：** W 消耗现在能对脆皮造成有效伤害，并触发暴击（crit：随机触发的强化攻击，造成 175% 伤害）。配合 E + W 通过塔阵确认击杀。
- **Malignance 上线（约 18-20 分钟）：** 在高 CDR（cooldown reduction——缩短技能间隔的属性）下，**UPGRADE!!!** 冷却降至接近 60 秒。每场轮转团战都能放下一座巨型炮塔，几乎每次资源刷新（objective spawns = Baron Nashor 或 Drake 在地图上出现的时刻，通常每 5-6 分钟一次）都能用上。

## 常见错误

- **把炮塔排成直线。** 摆成三角形，或者放在敌人接近你必经之路上。一字排开的三座炮塔只在敌人正面前进时齐射——三角形从多个角度开火，远难闪避。
- **在开阔地用 R+Q。** 巨型炮塔是区域工具，不是单杀工具。把它丢在 chokepoint（狭窄通道，比如 baron pit、dragon pit 或二塔旁的草丛），逼对手必须穿过其伤害半径。
- **炮塔还有充能时就重新放 Q。** 新的 Q 会放下一座零充能炮塔，并重置所有炮塔的充能。等最老的炮塔打完那一束光束再替换它——否则你白白扔掉一发满充能光束。
- **忘记被动的移速。** **Hextech Affinity** 在你自己的炮塔附近给你额外移速。把塔阵当成 kite（边输出边后撤）的踏板：被 gank 时往塔阵里走，而不是往外跑。

## 进阶技巧

掌握 **R+E** 击飞接 **W** 跟手连招。当 UPGRADE!!! 可用时，先放 **R**，立刻丢 **E**：它会落成更大的区域，中心位置的敌人不再是普通眩晕，而是被 knockup（抛入空中，短暂无法行动）。空中时间与眩晕相近，但击飞能打断引导（比如 Katarina 的大招或 Zed 的回城），并且更大的范围会捕住本来能闪过普通 E 眩晕的逃跑目标。趁他们在空中，把整套 **W** 火箭弹齐射打出去——五发火箭全部汇聚在受控目标身上，在他们落地之前命中，在敌人无法做出任何防御反应之前打出近乎最大伤害。
