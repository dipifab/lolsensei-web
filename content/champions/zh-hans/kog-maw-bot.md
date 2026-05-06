---
title: "Kog'Maw Bot Build & Guide — Patch 16.9"
slug: "kog-maw-bot"
language: "zh-hans"
patch: "16.9"
champion: "kog-maw"
role: "bot"
last_updated: "2026-05-05"
description: "League of Legends 英雄联盟 16.9 版本 Kog'Maw 大嘴下路完整攻略:on-hit 超后期核心装备顺序、Precision 符文加点细节、与 Caitlyn、Draven、Lucian 等关键对线思路、强势期节奏把握、团战站位时机选择、新手常见错误规避,以及 W 平 A 缓冲等高阶操作技巧。"
quick_learn:
  champion_dd_id: "KogMaw"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hyper-carry on-hit"
  abilities:
    - key: "P"
      name: "Icathian Surprise"
      description: "死亡时 Kog'Maw 化作行走的炸弹持续 4 秒,然后爆炸造成 true damage。一种最后一口气的威胁,绝不是 A 计划。"
      dd_spell_id: "KogMaw_Passive"
    - key: "Q"
      name: "Caustic Spittle"
      description: "直线投射物:造成法术伤害并在数秒内削减目标的 Armor 与 Magic Resist。被动:永久攻速加成。"
      dd_spell_id: "KogMawQ"
    - key: "W"
      name: "Bio-Arcane Barrage"
      description: "约 6 秒自我增益:延长平 A 距离,每次平 A 附加目标最大生命值百分比的法术伤害。每场团战的核心。"
      dd_spell_id: "KogMawBioArcaneBarrage"
    - key: "E"
      name: "Void Ooze"
      description: "直线技能:造成伤害并留下减速痕迹。脱战工具,也是 W 平 A 的衔接铺垫。"
      dd_spell_id: "KogMawVoidOoze"
    - key: "R"
      name: "Living Artillery"
      description: "落地范围 AOE 远程炮击。冷却短,法力消耗随每次释放递增。消耗、清线、对 40% HP 以下目标的跨地图收割。"
      dd_spell_id: "KogMawLivingArtillery"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "W" }
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
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3091", name: "Wit's End" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3153", name: "Blade of The Ruined King" }
  situational_items:
    - dd_id: "3094"
      name: "Rapid Firecannon"
      against: "对消耗强势的下路:延长第一发平 A 距离,从对方消耗范围外打 W 平 A"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "对单体硬控,会让你打不出 W (Ashe R、Morgana Q、Malzahar R)"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "对突进强势阵容 (Malphite + Yasuo、Hecarim):复活把一次走位失误变成两次团战贡献"
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "对 3000+ HP 的前排 (Sion 上、Cho'Gath、双坦):护甲穿透 + W 最大生命百分比融化超级坦克"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "对叠回复阵容 (Soraka、Aatrox、Dr. Mundo):Grievous Wounds 将治疗减半 5 秒"
  base_combo: ["E", "AA", "W", "AA"]
  win_condition: "在前排掩护下挺过中期,25 分钟左右达到三件 on-hit 装备的强势期,在大龙、亚塔坎、远古龙等团战中用 W 窗口融掉敌方阵容。"
  weakness: "无位移,基础平 A 距离仅 500。如果辅助走位失误,钩子英雄、刺客与突进战士能在 W 重置前秒掉 Kog'Maw。"
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision + Lethal Tempo:W 期间叠层突破 2.5 攻速上限,每个 W 窗口变成撕碎坦克的爆发。Triumph 击杀回血,Legend: Alacrity 永久攻速加成,Coup de Grace 对 40% HP 以下目标 +8% 伤害——正是 R 收割的对象。"
    secondary_rationale: "Sorcery 副系:Transcendence 提升技能急速,让 W 与 R 在持久战中更快冷却,Scorch 给 1-5 级 R 消耗加额外伤害,缓解一个无位移英雄艰难的对线期。"
    secondary_alternative: "面对钩子或爆发辅助 (Blitzcrank、Thresh、Pyke),把 Sorcery 换成 Resolve,搭配 Bone Plating(被攻击后前 3 次伤害有上限)与 Overgrowth(最大生命加成)——损失部分发育,换取活到第一件装备。"
matchup_draft:
  pick_into:
    - examples: ["sion", "tahm-kench", "cho-gath"]
      archetype: "堆血量的坦克与战士"
      reason: "Bio-Arcane Barrage 每次平 A 都造成最大生命百分比的法术伤害:他们叠的血越多,你删除得越快。无位移坦克在 W 窗口内毫无反制手段。"
    - examples: ["veigar", "senna", "varus"]
      archetype: "无位移的后排发育型"
      reason: "Living Artillery (R) 极远距离打击地面目标。需要原地不动施法的后排会被屏幕外消耗,且没有逃生工具反击。"
    - examples: ["malphite", "amumu"]
      archetype: "原地起手的前排开团手"
      reason: "他们 R 命中后,你方有 2-3 秒的自由开火时间——刚好够对锁住的前排打满一个完整的 W 周期再让他们恢复。"
  counterpicks:
    - examples: ["blitzcrank", "thresh", "pyke"]
      archetype: "带单体硬控的钩子辅助"
      reason: "Kog'Maw 没有位移、闪避,E 上也没有闪现。线上一次钩子等于一次死亡:唯一的逃生手段就是 5 分钟冷却的 Flash。"
    - examples: ["caitlyn", "ezreal"]
      archetype: "远程消耗下路"
      reason: "他们的平 A 距离超过没有 W 时 Kog'Maw 的 500 基础距离:线上随便消耗,逼你进入法力枯竭的前期。"
    - examples: ["zed", "kha-zix", "rengar"]
      archetype: "游走刺客"
      reason: "这些英雄通过位移、跳跃或隐身重置直达后排。一旦在 W 窗口里穿过你的前排,除了 Guardian Angel,任何防御装都救不回来。"
---

## 概述

Kog'Maw 是围绕一个短暂而决定性的窗口——**Bio-Arcane Barrage (W)** 增益——构建的超后期 marksman。约六秒内你成为地图上平 A 距离最远的英雄,每次平 A 都造成目标最大生命值百分比的法术伤害,Wit's End 与 Blade of The Ruined King 这类 on-hit 装备把这个窗口变成擦除坦克的风暴。脱离 W,你的平 A 基础距离只有 500——以 marksman 的标准很短——没有位移,没有闪避。成为后期怪物的代价,就是在前十五分钟成为侵略性 lane bully 最爱的猎物。

游戏思路很直接:在辅助型(Lulu、Janna、Yuumi、Soraka)的掩护下挺过对线、耐心补刀,25 分钟左右成型三件 on-hit,所有团战都站在前排身后,让 W 窗口不被打断。**Living Artillery (R)** 缓解前期痛苦:从安全距离免费消耗与清线;但连续释放法力消耗会快速暴涨,所以把它留给收割人头或控线节奏,而不是单纯骚扰。

## 推荐出装

**Starting items:** Doran's Blade + Health Potion。面对消耗强势的对线 (Caitlyn、Varus) 时 Doran's Shield 也可以接受,但加速 on-hit 成型默认就是 Doran's Blade。

**Core items (in order):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — 第一件:攻速与第三次平 A 触发的真实伤害,与 W on-hit 窗口天然契合。
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — 攻速加成;靠攻速上限吃饭的超后期英雄唯一合理的鞋子。
3. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — on-hit 法术伤害 + Magic Resist;对 AP 重型阵容最强的单件装备,也放大 W 的法术伤害。
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — 副弹对两个额外目标触发 on-hit:把 W 变成 AOE 清线与 AOE 团战压力。
5. ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** — 当前生命百分比 on-hit 伤害、吸血与减速主动;若需要护盾而非吸血,把它换成 ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster**。

**Situational items:**

- ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — 对消耗强势下路 (Caitlyn、Varus)。蓄能首发平 A 延长 W 平 A 的有效距离,让你从对方消耗范围外打。
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — 对会锁死 W 的单体硬控 (Ashe R 大箭、Morgana Q 禁锢、Malzahar R 压制)。主动一键解控。
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — 对突进阵容 (Malphite + Yasuo、Hecarim)。复活把一次走位失误变成两次团战贡献——这正是站桩 AOE 输出最需要的。
- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — 对堆 3000+ HP 前排。护甲穿透加上 W 的最大生命百分比法术穿透,比任何纯攻速装更快融化超级坦克。
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — 对回复堆叠阵容 (Soraka、Aatrox、Dr. Mundo)。Grievous Wounds 将其回复减半 5 秒;若没有,W 的伤害被回得比你打的快。

**Boots:** Berserker's Greaves 是唯一选择。Mercury's Treads 在 Kog'Maw 上是错误的——损失的攻速比换来的韧性贵得多。

**Skill order:** **W** 优先升满(整个英雄机制的核心),**Q** 第二(Armor、Magic Resist 削减加被动攻速),**E** 最后(纯辅助)。**R** 在 6、11、16 级各点一点。

**Runes:** 主系 **Precision**:**Lethal Tempo**、**Triumph**、**Legend: Alacrity**、**Coup de Grace**。副系 **Sorcery**:**Transcendence** + **Scorch**;面对钩子或爆发辅助则换成 **Resolve** + **Bone Plating** + **Overgrowth**。

## 关键对线

- **Caitlyn / Varus:** 远程消耗下路。带 ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**,躲在兵线后,塔下补刀到 6 级。让辅助插河道与三角草视野;一旦 ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** 成型,他们的压制就会下降。
- **Draven:** 6 级前任何 all-in(打到一方阵亡的完整交换)都会被他压制。线权与他持平,空地绝不互拼平 A,他冲过来时用 **E** 减速。他的斧头机制迫使他往前站位——6 级后用 **R** 消耗惩罚。
- **Lucian:** 别打平 A 交换(他的被动双发会赢短交换)。只在补刀时上前,8 分钟后用 W 窗口比他的 **E** 位移多出 100+ 单位距离。
- **Jhin / Senna:** 安全对线。两人都没位移,且想远距离站位,但只要你成型一件装备,谁都顶不住 W 的最大生命百分比爆发。辅助 CC 就位、W 在线时主动找 all-in。
- **Ezreal:** 操作对线。他靠 **Q** 消耗,但每次施法都会卡住自己。借他 **Q** 抬手时上前补刀,**E** 留给他放 **E** 位移时挂上减速;若他队伍在大招后有后续控制,![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** 很好用。

## 强势期与胜利条件

- **3 级:** 每个技能各点一级时,你拥有完整消耗组合(**E** 减速 → **W** 平 A → **Q** 削抗)。如果辅助有 CC,这是第一个可信的 all-in 窗口。
- **6 级:** 第一发 **Living Artillery** 解锁全线消耗与 1300+ 单位的远程补刀收割。被推线时也能从河道对面清兵。
- **![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer + ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) Berserker's Greaves 成型(~ 14-16 分钟):** 第一个真正的团战强势期。第三发真实伤害触发与 W 的最大生命百分比叠加,瞬间威胁所有进入射程的脆皮。
- **三件 on-hit 成型(~ 25-28 分钟):** ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** + ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** + ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** 齐了之后,W 窗口能在六秒内删光对面整队的血条。在这里强行 Baron、Atakhan、远古龙——这是你的队伍要围绕的时间点。

## 常见错误

- **逢冷却就交 W 换血。** 线上每浪费一次 W,下场团战就少一次 W。把它留给认定的 all-in、河蟹遭遇战与目标团,消耗交给 **R**。
- **R 一直放到没蓝。** 短时间内每次 Living Artillery 比上一次更耗蓝。6 秒内连放 3 次,每发要付 100+ 法力。除非锁定击杀,连续不要超过 2 次。
- **团战站在 W 最大射程边缘。** 最大射程会让你脱离辅助保护范围。站在前排身后一个平 A 距离,而不是顶在前排尖端——刺客(指能在 1-2 秒内秒掉一个目标的任何英雄)看到你的帽子露出来就会盯死你。
- **没有辅助型辅助就选 Kog'Maw。** Lulu、Janna、Yuumi、Soraka 不是偏好,是契约。和钩子或开团辅助搭配,你既挺不过对线期,也发育不到那场永远到不了的团战。
- **忘了 Q 的削抗。** 对坦克 W 之前先打中 **Q**,可以削减他的 Armor 与 Magic Resist 数秒。在射程内永远先用 **Q** 开 all-in;后续 on-hit 伤害落下来就像对面少买了一件防御装。

## 进阶技巧

把 **Bio-Arcane Barrage (W)** 的激活与你最后一刀的平 A 缓冲在同一次输入。在平 A 略前一刻按下 W 能取消 Kog'Maw 缓慢的前摇,使 W 窗口提前 0.1-0.2 秒开启——在六秒增益中相当于多打一次平 A。在团战中,这就是对前排打 4 下 W 平 A 与在第一波突进打到你之前打 5 下的差距;这是练习模式里对着木桩反复打、价值/努力比最高的单一技巧。
