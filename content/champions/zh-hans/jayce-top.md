---
title: "Jayce Top Build & Guide — Patch 16.9"
slug: "jayce-top"
language: "zh-hans"
patch: "16.9"
champion: "jayce"
role: "top"
last_updated: "2026-05-04"
description: "League of Legends 英雄联盟 16.9 版本 Jayce 杰斯上单完整攻略:武器形态切换机制、lethality 核心出装顺序、Press the Attack 符文搭配、关键对线应对、强势期节奏把握、新手常见错误规避以及 R-cancel 进阶连招技巧。"
quick_learn:
  champion_dd_id: "Jayce"
  difficulty: 4
  damage_type: "mixed"
  champion_class: "Fighter / Skirmisher"
  abilities:
    - key: "P"
      name: "Hextech Capacitor"
      description: "每次武器切换 (R) 让 Jayce 获得短暂的 Movement Speed 爆发,并能在短时间内无视单位碰撞。"
      dd_spell_id: "Jayce_Passive"
    - key: "Q"
      name: "To the Skies! / Shock Blast"
      description: "Hammer:跳向目标造成物理伤害并减速周围敌人。Cannon:发射远距离 AOE 技能弹 — 主要消耗手段。"
      dd_spell_id: "JayceToTheSkies"
    - key: "W"
      name: "Lightning Field / Hyper Charge"
      description: "Hammer:平A 回蓝被动,主动在身边形成伤害光环。Cannon:接下来 3 次平A 攻速达到上限 — 爆发窗口。"
      dd_spell_id: "JayceStaticField"
    - key: "E"
      name: "Thundering Blow / Acceleration Gate"
      description: "Hammer:近距离击退,造成基于最大生命值百分比的魔法伤害 — 处决与脱身工具。Cannon:放置加速门,加速友军并放大穿过的 Q (Shock Blast)。"
      dd_spell_id: "JayceThunderingBlow"
    - key: "R"
      name: "Mercury Cannon / Mercury Hammer"
      description: "形态切换 (冷却 6 秒)。在 Hammer (开团、续航、击退) 和 Cannon (消耗、AOE 清线) 之间转换。切到 Cannon 后第一次普攻削减目标的 Armor 和 Magic Resist。"
      dd_spell_id: "JayceStanceHtG"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "6697", name: "Hubris" }
    - { dd_id: "6694", name: "Serylda's Grudge" }
  situational_items:
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "对抗强力 AP 威胁 (Vladimir、Rumble、Kennen):魔法护盾抵挡爆发并提供 AD"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "对抗单体硬控开团 (Camille E、Sett W、Malphite R):法术护盾格挡控制技能"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "领先且被集火时:复活被动让你在小规模团战中更敢于全力进攻"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "敌方有 3 个以上 AP/CC 威胁时换下 Plated Steelcaps;韧性减少眩晕和减速时间"
  base_combo: ["Q", "AA", "R", "Q", "AA", "E"]
  win_condition: "6 级前用 Cannon Q 消耗血量,血量低于 50% 时切 Hammer Q 跳跃、W 光环、E 击退全力一搏。把对线优势转化为侧路分推压力。"
  weakness: "蓝耗高:消耗 Q 落空就亏交换。强突进 (Camille E、Malphite R) 会在你切形态前贴脸。后期对抗高魔抗装备体系疲软。"
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Cannon Q + AA + Hammer Q-AA-E 的 3 段交换模式触发 Press the Attack,每次小规模团战 +8% 伤害。Triumph 在多人击杀时回血,Legend: Alacrity 让 W (Hyper Charge) 内攻速达上限,Coup de Grace 收掉 40% 血量以下目标。"
    secondary_rationale: "副系 Sorcery:Manaflow Band 防止长对线 Cannon Q 消耗导致蓝量耗尽。Transcendence 增加技能急速,让武器切换窗口更快回来 — 对线多打一发 Q 就是敌人少一截血。"
    secondary_alternative: "对抗强消耗远程上单 (Vladimir、Kennen、Quinn) 时把 Sorcery 换成 Resolve,搭配 Bone Plating (前 3 次受击减伤) 和 Second Wind (50% 血以下被动回血) 维持对线。"
matchup_draft:
  pick_into:
    - examples: ["nasus", "garen", "sett"]
      archetype: "无远程反制能力的低机动近战战士"
      reason: "他们没有任何手段应对 Cannon Q 射程。前 6 级把他们消耗出兵线,直接断成长 — Nasus 丢 Q 层数,Garen 永远拿不到 Q,Sett 永远填不满 W (Haymaker) 怒气槽。"
    - examples: ["yorick", "tryndamere"]
      archetype: "缺乏对线骚扰手段的慢速成长型"
      reason: "他们的击杀威胁依赖装备。Cannon Q 在他们成型前就抹掉数分钟补刀,真要全力一搏时 Hammer E 击退又能切断这个窗口。"
  counterpicks:
    - examples: ["malphite", "maokai"]
      archetype: "有装备魔抗和开团大招的坦克"
      reason: "他们用装备 (Bramble Vest、Negatron Cloak) 反制 Cannon 消耗,大招 (Malphite R、Maokai R) 能闪现开团越过 Hammer E 击退。对线打长不出击杀 Jayce 就疲软。"
    - examples: ["vladimir", "kennen"]
      archetype: "有续航或同等射程的远程上单成长型"
      reason: "Vladimir 的 Q (Transfusion) 在消耗中回血;Kennen 的 W (Electrical Surge) 比 Cannon Q 射程更远。两者都强迫消耗对线,Jayce 没有近战战士的全力一搏空间就会输掉。"
    - examples: ["camille", "renekton"]
      archetype: "有快速突进和硬控的战士"
      reason: "Camille E (Hookshot) 和 Renekton W (Ruthless Predator) 在 Cannon Q 施法窗口内贴脸,在 Jayce 切到 Hammer E 击退之前就把他控住。他没有位移把对方推开。"
---

## 概述

Jayce 是一名生死系于武器切换 (R) 的远程-近战混合突击战士。在 **Cannon 形态**下,他是一名拥有 AOE 技能弹 Q 和移动速度加速门 (E) (穿过加速门的 Q 会被强化) 的远程消耗专家。在 **Hammer 形态**下,他变成近战战士,拥有跳跃 Q、光环 W,以及一个造成最大生命值百分比魔法伤害的击退 E。R 冷却 6 秒,切到 Cannon 后的第一次普攻削减目标的 Armor 和 Magic Resist — 这是每次全力一搏的开战触发器。

上单 Jayce 想要长对线。用 **Cannon Q + E 加速门** (远距离消耗) 慢慢磨血,撤回安全距离,重复。当敌人血量低于一半时切 Hammer,用 **Q** 跳过去,放 **W** 触发光环伤害和回蓝被动,如果对方还没死就用 **E** 击退收尾。把任何对线优势都转化为分推压力 — 一个人推侧路兵线迫使敌方分人应对。侧路 Cannon Q 射程是游戏里最安全的分推手段之一,Eclipse 加 Hubris 给你足够的爆发 (1-2 秒内打出高伤害) 在 1v1 小规模团战中击败大多数上单。

## 推荐出装

**起始装备:**消耗友好对线选 ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**。对抗远程上单 (Vladimir、Quinn、Kennen) 时换成 ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** 来扛住前期 Cannon Q 交换。

**核心装备 (按顺序):**

1. ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — 第一个强势期。护盾在 1.5 秒内通过两个技能触发,Jayce 切形态时 Cannon Q + Hammer Q 自然满足条件。提供 AD、全能吸血 (所有伤害都吸血) 和技能急速。
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 对抗 AD 上单 (大多数版本环境) 的默认鞋子。
3. ![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) **Hubris** — 致命一击 (一种忽略敌人固定数值护甲的属性) 加上参与击杀 (击杀或助攻) 叠加层数的被动 (Eminence),让一次击杀的伤害雪球到下一次。领先时作为第二件装备非常理想。
4. ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — 致命一击和伤害减速。Cannon Q 命中的减速把逃跑敌人变成 Hammer Q 的捕捉目标。

**情境装备:**

- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — 对抗 AP 威胁 (Vladimir、Rumble、Kennen)。魔法护盾抵挡爆发并提供 AD。
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — 对抗单体硬控开团 (Camille E、Sett W、Malphite R)。法术护盾在脱战时充能,格挡下一个会把你控住的硬控技能 (硬控指会让你无法行动的控制效果)。
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — 领先且被集火时。复活被动让你在小规模团战中更敢全力进攻;一换二之后还能复活去拿第三个人头。
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 敌方阵容有 3 个以上 AP 或 CC 威胁时换下 Plated Steelcaps;韧性被动减少眩晕和减速持续时间。

**鞋子:**Plated Steelcaps 默认。对抗高魔法伤害或连环控制时换 Mercury's Treads。

**技能加点:**先满 **Q** (两种形态的主要伤害来源),再点 **E** (处决用击退,放大消耗用加速门),最后 **W**。**R** 在 6、11、16 级各点一点。

**符文:**主系 **Precision**,搭配 **Press the Attack**、**Triumph**、**Legend: Alacrity**、**Coup de Grace**。副系 **Sorcery** 选 **Manaflow Band** 和 **Transcendence**。对抗强消耗远程上单时换成 **Resolve** 搭 **Bone Plating** + **Second Wind**。

## 关键对线

- **Darius:**6 级前用 Cannon Q 风筝 (一边后撤一边平A,保持在他攻击范围外),绝对不要进入他 Q (Decimate) 的外圈。Hammer E 击退在时机正确时能取消他 W (Crippling Strike) 的重置;一旦把他击退到塔下,他就失去所有击杀威胁。
- **Camille:**6 级后她有 E (Hookshot) 时占优。盯她的 E 冷却:E 没好时冻结兵线 (把兵线停在你的塔前不推过去) 用 Cannon Q 慢慢消耗。E 好时保持 ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** 法术护盾充能。
- **Malphite:**在他做出 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** 加一件护甲装之前对线还能赢,之后 Cannon Q 对他就是挠痒痒。前 12 分钟内赢下对线,否则接受成长劣势;考虑赶团战装备打侧路小规模团战。
- **Fiora:**用 Hammer Q 假动作骗她的 W (Riposte) — 开始跳跃动画然后停下。她的 W 进入冷却后用完整 Hammer 连招全力一搏。如果你的 Q 撞她的 W,白白丢一个 16 秒冷却的技能。
- **Vladimir:**标准英雄池中最难的对线。他的 Q 在你的 Cannon 消耗中回血,W (Sanguine Pool) 闪避 Hammer E 击退。在他出 2 件装备前找打野早抓,之后避免团战去打侧路分推 (一个人推侧路兵线迫使敌方分人应对) 而不是抱团。

## 强势期与胜利条件

- **2 级 (Q + W 或 Q + E):**Cannon Q + AA + 切到 Hammer Q 对大多数脆皮是 35-40% 血量交换。如果敌人上前补一个近战兵,直接放连招然后撤;切形态被动的移速能让你在他反应过来之前撤出。
- **6 级 (第一点 R):**两种形态都解锁满威力。Cannon-to-Hammer 全力一搏现在是 40% 血量的击杀威胁,而不只是消耗交换。
- **![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) Eclipse 完成 (~ 11-13 分钟):**第一个大强势期。护盾 + 全能吸血让你能投入更长的交换;不再需要每个 Cannon-Hammer 循环后都撤退。
- **![Hubris](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6697.png) Hubris 完成 (~ 19-22 分钟):**Eminence 层数 (击杀奖励 AD 被动) 开始雪球 (越打越强:击杀 → AD 加成 → 更多击杀)。强行打一次侧路小规模团战叠 Eminence,然后满状态转大龙小龙。

## 常见错误

- **没铺垫直接放 Cannon Q。**裸 Q 消耗费蓝且容易躲。先朝敌人方向放 **E** (Acceleration Gate);加速门放大穿过的 Q (射程更远、伤害更高),小延迟也强迫敌人在你开火前选定一个移动方向。
- **太早切 Hammer 形态。**如果敌人血量还在 ~50% 以上就切,等于在没有收尾爆发的情况下投入近战缠斗。先用 Cannon 一直磨到血量阈值,再切形态全力一搏。
- **忘记 R-Cannon 第一次普攻的削减效果。**切到 Cannon (R) 时第一下 AA 削减 Armor 和 Magic Resist。把这个触发用在小兵身上等于白扔伤害;永远留给敌方英雄。
- **R 没好就分推。**R 有 6 秒冷却,但是你唯一的逃生工具 — 切形态的速度加成。R 没好时分推遇到 4v1 抓人就是死。评估风险时把 R 当成长冷却的位移看待。
- **长交换中忽视蓝耗。**Hammer W 有平A 回蓝被动;长交换中一直 Cannon 形态会把蓝量耗光。交换中途切 Hammer 平 2-3 下回蓝,再切回 Cannon 收尾。

## 进阶技巧

掌握 Hyper Charge (Cannon W) 末尾的 **R-cancel**。按下 Cannon W 后接下来 3 次普攻攻速达到上限 — 但如果在第三下命中后立刻切 Hammer (R),你会跳过普攻后摇动画,Hammer Q 跳跃提前 0.25 秒发动。这就是抓住闪现逃跑目标和看着他剩 5 血逃掉的差别。带到排位前先在训练模式对木桩练到肌肉记忆。
