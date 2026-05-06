---
title: "Heimerdinger Top Build & Guide — Patch 16.9"
slug: "heimerdinger-top"
language: "zh-hans"
patch: "16.9"
champion: "heimerdinger"
role: "top"
last_updated: "2026-05-02"
description: "League of Legends 英雄联盟 16.9 版本 Heimerdinger 大发明家上单完整攻略:三炮台围墙出装顺序、Sorcery 系符文、UPGRADE 终极强化连招、对位近战 juggernaut 的强势期与压制思路、分推胜利条件、新手常见错误、以及 R+Q 巨型炮台高阶摆放技巧。"
quick_learn:
  champion_dd_id: "Heimerdinger"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Artillery"
  abilities:
    - key: "P"
      name: "Hextech Affinity"
      description: "靠近友方塔或自己部署的 turret 时获得额外移速。鼓励待在 turret nest 内作战的被动奖励。"
      dd_spell_id: "Heimerdinger_Passive"
    - key: "Q"
      name: "H-28 G Evolution Turret"
      description: "部署一座 turret(同时最多 3 座)。turret 会蓄力,蓄满时发射更强的光束。每次施放 Q 都会重置蓄力。射程 350,冷却 1 秒,法力 20。"
      dd_spell_id: "HeimerdingerQ"
    - key: "W"
      name: "Hextech Micro-Rockets"
      description: "向光标方向发射的远程(1325)火箭弹齐射。额外命中伤害递减。每枚命中英雄的火箭为附近 turret 增加 20% 蓄力。"
      dd_spell_id: "HeimerdingerW"
    - key: "E"
      name: "CH-2 Electron Storm Grenade"
      description: "投掷手雷(射程 970),爆炸范围内减速,中心区域眩晕。命中 turret 可使其充满蓄力。冷却固定 11 秒,法力 85。"
      dd_spell_id: "HeimerdingerE"
    - key: "R"
      name: "UPGRADE!!!"
      description: "强化下一个非大招技能。R+Q:巨型炮台(8 秒,免疫 CC,AOE 溅射 + 减速)。R+W:4 波火箭弹。R+E:更大眩晕区域 + 中心击飞。冷却 100-70 秒。"
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
    - { dd_id: "4629", name: "Cosmic Drive" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对位能突破 turret nest 的 diver 与 bruiser (Irelia, Camille, Fiora)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "对位高 sustain 上单 (Darius 被动, Nasus, Dr. Mundo) — 切断 HP 回复"
    - dd_id: "3118"
      name: "Malignance"
      against: "对位坦克阵容,R+Q 巨型炮台覆盖时间是关键 — 缩短大招冷却"
    - dd_id: "3135"
      name: "Void Staff"
      against: "敌人开始堆魔抗时 (Mercury's, Force of Nature, Spirit Visage)"
  base_combo: ["Q", "Q", "Q", "E", "W", "R+Q"]
  win_condition: "用三座 turret 围墙在线上饿死近战上单,再用 UPGRADE+Q 巨型炮台锚定 baron 与 dragon 团战。只在 nest 内接受 1v1。"
  weakness: "拥有多段位移的高机动 bruiser 与 diver 能在 turret nest 造成伤害前就将其击溃。除 Flash 与被动移速外没有任何逃生手段。"
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
    primary_rationale: "Arcane Comet 通过 E(减速钉死目标)与 W 多段命中稳定触发。Scorch 优于 Gathering Storm:Heimer 上单胜负在线上决定,Scorch 在 1-6 级对位 juggernaut 时提供实质伤害。Transcendence 缩短 E 与 W 冷却,维持 turret 持续覆盖。"
    secondary_rationale: "Biscuit Delivery 覆盖前期反复布置 Q 的法力消耗,并提供面对普攻骚扰时的 HP 续航。Cosmic Insight 缩短 Flash 与 UPGRADE 的冷却,放大巨型炮台的开窗时机。"
    secondary_alternative: "对位以 AD 为主的上单(Darius, Renekton, Garen)时,把副系换成 Resolve,带 Conditioning(12 分钟后 armor 与 MR)与 Overgrowth(HP scaling)。代价是前期 sustain 减少,但 all-in 中的生存能力提升。"
matchup_draft:
  pick_into:
    - examples: ["nasus", "malphite", "cho-gath"]
      archetype: "必须穿过 turret 覆盖区的不动或低速 juggernaut"
      reason: "他们没有 dash 或闪现来绕开 turret nest。每踏入射程一步,都会同时承受 turret 光束与 W 火箭,在能打出有意义 trade 之前 HP 就被消耗殆尽。"
    - examples: ["mordekaiser", "darius", "garen"]
      archetype: "engage 距离短、无法安全贴脸的近战 juggernaut"
      reason: "他们的 engage 必须在三座 turret 同时开火的射程内贴近。进场区域的 E 眩晕加 W 齐射会在他们抵达 Heimerdinger 之前就打断 commit。"
  counterpicks:
    - examples: ["irelia", "camille", "fiora"]
      archetype: "拥有多段位移、能击溃 turret nest 的高机动 diver"
      reason: "他们用 dash 穿过 turret 区域,在小兵身上重置位移,在 Heimerdinger 重新站位之前就贴脸。Zhonya's Hourglass 必出 — 用金身耗光他们的位移窗口,迫使他们脱战。"
    - examples: ["jayce", "quinn"]
      archetype: "在 970 射程外消耗的远程上单"
      reason: "他们在 E 与 W 都打不到的距离把 Heimerdinger 从兵线 zoning 出去,他每次想布置 turret 或补刀都得白白吃下 poke。"
---

## 概述

Heimerdinger 上单是一名能把近战重组对线变成持久消耗战的 lane bully。他在上路的定位与中路不同:这里的目标不是 roam,而是建立一个无法穿越的 **turret nest** —— 一片由三座 H-28 G Evolution Turret 共同覆盖的区域,迫使任何近战英雄要么承受持续魔法伤害,要么放弃 wave control(兵线控制:决定小兵线推向你这边还是推向对手那边)。被动 **Hextech Affinity**(在友方建筑与自己 turret 附近获得移速加成)奖励他留在 nest 内作战,而不是 kite 着远离。kite 这个词指的是一边后退一边输出、与追击者保持距离的走位。

他的游戏计划是把 turret 部署在敌方塔前,用 **W**(Hextech Micro-Rockets)与 **E**(CH-2 Electron Storm Grenade)消耗,把对手压在 all-in 阈值(all-in 阈值:对手已经没有足够 HP 能在一场全力 commit 中打赢你的血量)以下,再在 6 级用 UPGRADE+Q 巨型炮台彻底锁住这条路。分推压力(splitpush:你独自推一条边路,逼对手跨地图回应,从而为队友争取拿目标的时间)是宏观胜利条件:边路的 Heimerdinger turret nest 危险到对手必须派两人才能拆除,这段时间正好留给团队去拿资源。

## 推荐出装

**起手装:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) Doran's Ring + 2 Health Potions。法力支撑前期反复摆放 Q —— 每座 turret 消耗 20 法力,被打掉后必须立刻补上一座。

**核心装(顺序):**

1. ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo** —— 爆发节点与法力续航。被动会从 turret 对英雄的攻击触发,加强 W 的 poke trade(poke trade:不开团的远距离短促交火,慢慢消耗 HP)。
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** —— 固定法术穿透,切开前期 armor rune(armor rune:有些玩家在第三个 shard 槽点的防御符文,用来在前期削减物理伤害)。
3. ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** —— AP 加上由技能伤害触发的移速。让你能在线上 kite 着重新摆放 turret,同时不丢失 W 的射程。
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** —— 额外爆发,尤其适合用满蓄 turret 光束或一波 W 收掉 40% HP 以下的目标。
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** —— 后期 AP 倍率增益。四件成型后,turret 光束与 W 火箭的伤害足以支持你在两人防守下仍然分推一条边路。

**情境装:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** —— 对位高机动 diver(diver:用 dash 穿过 turret 区域贴近击杀的英雄 —— Irelia, Camille, Fiora)必出。金身浪费他们的位移窗口,你无敌期间巨型炮台仍持续输出。
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** —— 对位高 sustain 上单(Darius 被动, Nasus, Dr. Mundo)。turret 与 W 命中附带的 Grievous Wounds(将受到的治疗减半的减益)切断他们的回血循环。
- ![Malignance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3118.png) **Malignance** —— 对位坦克阵容,UPGRADE+Q 巨型炮台是你团战的主力工具时。降低 R 冷却,让巨型炮台在两个目标之间能再就绪一次。
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** —— 当任何 priority target(优先击杀目标,通常是对面核心)出魔抗装(Mercury's Treads, Force of Nature, Spirit Visage)时替换上场。

**鞋:** Sorcerer's Shoes 是默认。如果优势明显、想更频繁地放出 UPGRADE,换成 ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) Ionian Boots of Lucidity。

**技能加点:** 优先满 Q,提高 turret 伤害与蓄力速度。其次满 W,提升火箭齐射的伤害。E 最后满 —— 它主要是工具(眩晕 + 充电),并非主输出。R 在 6、11、16 级各点一级。

**符文:** 主系 **Sorcery**:**Arcane Comet**、**Manaflow Band**、**Transcendence**、**Scorch**。副系 **Inspiration**:**Biscuit Delivery**、**Cosmic Insight**。对位以 AD 为主的上单时,把 Inspiration 换成 **Resolve**,带 **Conditioning** 与 **Overgrowth**。

## 关键对线

- **Nasus:** 走发育路线、没有 dash 的 juggernaut。1 级把三座 turret 沿对角线摆在他与兵线之间。他不踏过光束就无法回 trade。每次他在压力下补刀就用 E 眩晕,W 跟进巩固。注意他 6 级强化 W(降低你的攻速,但部署的 turret 不受影响 —— 该减速对建筑无效)。
- **Darius:** 3 级 Apprehend(E,拉拽)上线时最危险。不要在没有小兵挡住拉拽角度时贴在自己 turret 旁。他逼近时向后 kite,用 E 中心眩晕打断他的拉拽,立即接 W。他的被动 Hemorrhage(出血)会在你通过移动断开接触时停止,所以这里 kite 比站桩 trade 更有效。
- **Irelia:** 难打的对线。她可以在小兵身上重置位移(Ionian Fervor E),只要规划好路径,即使你有三座 turret 她也能贴上来。把 Zhonya's Hourglass 留作第三件。6 级时在她进场过程中用 E 眩晕,立刻 UPGRADE+Q 放下巨型炮台;炮台的 AOE(area of effect —— 命中一片区域而非单一目标的伤害)减速会把她钉在完整光束伤害的范围内。
- **Garen:** 对线直接。没有远程消耗也没有 dash;唯一的逃命手段是 Perseverance(被动 HP 回复)。在 turret 光束与 W 火箭之间不断错开节奏,封掉他的回复窗口。他来补刀时丢 E 中心眩晕,接 W 完成完整爆发。Judgment(E 旋转)是圆形伤害:他开转时不要贴近,保持 W 距离。
- **Jayce:** 远程形态(Shock Blast)射程 1050,你的 W 是 1325,但实战中他会切回近战形态打强化普攻。他切近战 commit 那一刻就是你的窗口:三炮台区域接 E 眩晕再 W。如果他整条线都保持远程形态,就把 turret 摆得离自家塔近一点,集中精力对推他的兵线 —— 不要追到开阔区域。

## 强势期与胜利条件

- **1 级:** 三座 turret 要到 3 级才齐,但即便 1 级只有一座,对手第一次接近兵线时也会被磨血。把 Q 摆在经验范围边界附近,逼他必须进入 turret 射程才能补到刀。
- **6 级 (UPGRADE+Q):** 巨型炮台是 8 秒免疫 CC 的 AOE 输出,任何近战都不能视而不见。把它扔在线中央,创造出一片对手不付出完整光束 + 减速代价就无法穿过的区域。这是你最强的分推工具。
- **Cosmic Drive 成型(约 14-16 分钟):** 三件成型(Luden's + 鞋 + Cosmic Drive)后,turret 伤害开始能打动甚至坦克的血条。Cosmic Drive 提供的移速让你能在 kite 中替换被打掉的 turret,而不丢失团战站位。
- **Rabadon's Deathcap 成型(约 24-28 分钟):** 后期 Heimerdinger 的 turret 伤害已经接近一名集火 carry 的水平。提前在大龙或小龙坑入口摆好巨型炮台,逼出团战,价值最大化。

## 常见错误

- **没有时刻保持三座 turret。** 一座被打掉或时间到期,立刻补上。两座 turret 的输出比三座少 33% 的范围伤害,而且会留下空隙让对手穿过。把 Q 绑到顺手的快捷键,只要走到空槽位 350 范围内就自动补刀位。
- **对位近战 juggernaut 时用 UPGRADE+E (R+E) 而不是 UPGRADE+Q (R+Q)。** R+E 的击飞看起来很炫,但 R+Q 巨型炮台对那些跑不出半径的低速目标在 8 秒内造成的总伤害高得多。R+E 留给清野区兵线或惩罚突进过深的法师 —— 不是对位近战上单的主力。
- **对手 all-in 时站在 turret 射程内不动。** turret 提供掩护但不提供无敌。如果对手满血带着主动 gap-close 强 commit(没有逃生计划地强行 all-in),正确做法是边后撤边让 turret 输出;不要原地等 stun proc(turret 的眩晕在敌人受击瞬间触发的那一下)。
- **对位多 dash 阵容时跳过 Zhonya's Hourglass。** 对位 Irelia、Camille、Fiora 时 Zhonya's 不是情境装,而是核心。当对线需要时,把它放在第三件,而不是 Shadowflame 之后。
- **为了在敌方野区放 turret 而站位过深。** 一座放在敌方河道或 tribrush(tribrush:大龙或小龙坑附近河道里三个草丛组成的草丛群 —— 经典的抓人卡点)的 turret 是强力视野,但前提是你有移速优势能从一记紧迫(in a pinch:正处于即时危险、需要立刻解决方案)中脱身。先安全地建立 nest,等 Cosmic Drive 出来再向资源点方向延伸覆盖。

## 进阶技巧

使用 UPGRADE+Q(巨型炮台)时,摆放角度决定 AOE 覆盖。不要把巨型炮台直接砸在对手身上,而是落在他当前位置的正后方一步、沿着他的撤退路线。当他从初始落点后撤时,他是走入光束射程而不是走出。配合进场过程中的 E 眩晕,这迫使对手在能离开该区域之前吸收两到三个完整光束周期(每个约 1.5 秒)—— 在被减速目标的移动速度下,这几乎就是巨型炮台 8 秒持续时间的全部。
