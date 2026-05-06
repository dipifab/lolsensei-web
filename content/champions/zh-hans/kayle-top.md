---
title: "Kayle Top Build & Guide — Patch 16.9"
slug: "kayle-top"
language: "zh-hans"
patch: "16.9"
champion: "kayle"
role: "top"
last_updated: "2026-05-05"
description: "League of Legends 英雄联盟 16.9 版本 Kayle 正义天使上单完整攻略:对线生存计划、超强后期 AS+AP 核心出装、关键对线策略、11/16 级强势期节点把握以及新手常见错误一站式总结。"
quick_learn:
  champion_dd_id: "Kayle"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Fighter / Hyper-scaling Carry"
  abilities:
    - key: "P"
      name: "Divine Ascent"
      description: "Kayle 升级时变形 4 次(1、6、11、16 级)。6 级获得 ranged 平 A;16 级时平 A 触发 AOE 火焰波 on-hit。"
      dd_spell_id: "Kayle_Passive"
    - key: "Q"
      name: "Radiant Blast"
      description: "直线 skillshot:对首个目标和身后敌人造成伤害、减速以及 armor + magic resist 削减。是 6 级前唯一的 ranged 工具。"
      dd_spell_id: "KayleQ"
    - key: "W"
      name: "Celestial Blessing"
      description: "为 Kayle 与最近的友军提供治疗与移动速度。6 级前是对线续航,后期是保护与追击工具。"
      dd_spell_id: "KayleW"
    - key: "E"
      name: "Starfire Spellblade"
      description: "被动:平 A 附带额外法术伤害。主动:下次平 A 变为 ranged,并造成基于已损失生命值的额外法伤。6 级后被动会触发 AOE on-hit 波。"
      dd_spell_id: "KayleE"
    - key: "R"
      name: "Divine Judgment"
      description: "选定友军(或自己)进入数秒无敌,然后爆发 AOE 法术伤害。同时是保护工具、开团掩护和收割手段。"
      dd_spell_id: "KayleR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
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
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
  situational_items:
    - dd_id: "6655"
      name: "Luden's Echo"
      against: "对线平静且想在 Nashor's 之上叠加 burst spike 时,作为第二件装备 swap"
    - dd_id: "3091"
      name: "Wit's End"
      against: "对抗高 AP 上单(Rumble、Vladimir、Sylas),其消耗在 11 级前压制你时"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "对抗高治疗阵容(Aatrox 上、Soraka、Dr. Mundo)——平 A 施加 Grievous Wounds"
    - dd_id: "3135"
      name: "Void Staff"
      against: "当两名敌人完成一件 Magic Resist 装备时(Mercury's Treads 不算,只算成品装)"
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "对抗以平 A 取胜的对线(Fiora、Camille、Tryndamere)——若生存是唯一目标则从 Berserker's swap"
  base_combo: ["Q", "AA", "E", "AA"]
  win_condition: "对线生存到 11 级,然后用 Nashor's Tooth + Rabadon's Deathcap 起飞。16 级时在 R 掩护下,从后排用 AOE on-hit 波横扫团战。"
  weakness: "6 级前是缓慢、脆皮的近战平 A 角色,只有一个短手 skillshot。早期 all-in 强势的上单(Darius、Renekton、Riven)会在你强势期到来前击杀你。"
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
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision 主系:Lethal Tempo 在团战中叠加 attack speed,放大 Kayle 6/16 级被动的 AOE 波。Triumph 击杀回血,Legend: Alacrity 提供永久 AS,Last Stand 在低血时强化伤害——正是后期 Kayle 的生存区间。"
    secondary_rationale: "Inspiration 副系:Biscuit Delivery 在 6 级前的生存阶段补给生命与法力,Cosmic Insight 缩短 Flash 与装备主动的冷却,使 Zhonya's Hourglass 在团战中更快回手。"
    secondary_alternative: "对抗高消耗对线(Vladimir、Rumble、Quinn)时,把 Inspiration 换成 Resolve:用 Second Wind(受伤后被动回血)+ Overgrowth(永久生命值成长),撑到 11 级强势期。"
matchup_draft:
  pick_into:
    - examples: ["nasus", "mordekaiser"]
      archetype: "Stat-check tops with no early kill threat"
      reason: "缺乏爆发与硬控连段,无法惩罚你 6 级前的弱势期;一旦你 11 级解锁 ranged 平 A,就能在安全距离上 out-DPS 他们。"
    - examples: ["veigar", "kayn"]
      archetype: "Late-game scalers without strong 1-9 windows"
      reason: "你们的成长曲线一致:任何允许你撑到 16 级的队伍都会输掉比赛,因为 Kayle 的 AOE on-hit 波领先于他们的 wombo 起手。"
    - examples: ["senna", "vayne"]
      archetype: "Carries you can babysit with R"
      reason: "全球大招让你成为全场最强 peeler——他们被切的瞬间放 R,你的 carry 能毫发无损地扛过整套 burst chain。"
  counterpicks:
    - examples: ["darius", "renekton", "riven", "fiora"]
      archetype: "Early-pressure bruisers with all-in level 1-3"
      reason: "他们会在 6 级强势期前击杀你。CC chain 加持续伤害能在 4 秒 all-in 内削掉 Kayle 70%+ 生命值,而你没有 dash 来 disengage。"
    - examples: ["camille", "yone"]
      archetype: "Mobile lane bullies with multiple gap-closers"
      reason: "Camille 的 E 钩锁与 Yone 的 Q3 dash 都无视你想保持的位置,会在你的 Q + 平 A 换血结束前贴上来。"
    - examples: ["olaf", "garen"]
      archetype: "Champions that bypass invulnerability"
      reason: "Olaf 的 R 提供 CC 免疫和 R+斧的真实伤害,Garen 的 R 真实伤害随已损失生命值缩放——两者都能穿透 Zhonya's Hourglass,甚至穿透你 R 的前摇阶段收掉你。"
---

## 概述

Kayle 是一名超强后期 carry,整局比赛中身份不断转变:1 级是缓慢、脆皮的近战平 A 角色,6 级变成 ranged 消耗手,11 级是真正的后期巨兽,16 级则是全队 AOE 收割机器。**Divine Ascent (P)** 就是她的核心 kit——每个里程碑都解锁一段新的 stat block(攻击速度、射程、on-hit 火焰波)。上路是她的天然舞台,因为长长的兵线给了她空间,可以打被动而不流失节奏。

她的游戏计划是生存,而不是侵略。该丢补刀就丢,千万别死,相信出装:![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** 在 11 级把 ranged 被动变成真伤害,![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** 在 16 级让 AOE on-hit 波在 **R** 掩护下,从后排删除整场团战。

## 推荐出装

**Starting items:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + 1 个 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**。盾把对线从「两次换血就死」变成「丢补刀但能活」。即使 Kayle 吃 AP,也不要选 Doran's Ring——6 级前你没有 kit 去用它。

**Core items(顺序):**

1. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves**——攻速鞋喂养你的 on-hit 波。先速攻鞋,再一件件向 Nashor's 推进。
2. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth**——Kayle 最重要的单件装备。在同一个槽位组合两项核心属性(50% 攻速 + 90 AP),并为每次平 A 附加法术伤害。这是把你从「弱势上单」推到「真正 carry」的强势期。
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap**——把所有 AP 加成乘以 30%,而你有大量加成可乘(E 被动、R、16 级后的 AOE 波)。
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass**——金身是你对抗切入英雄、并衔接自身 R 冷却的救命稻草。根据敌方阵容选择第三或第四件出。

**Situational items:**

- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End**——对抗高 AP 上单(Rumble、Vladimir、Sylas)。同时提供攻速、魔抗与 on-hit 法伤,一件装备攻防兼备。
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder**——对抗高治疗阵容(Aatrox 上、Soraka 中、Dr. Mundo)。每次平 A 施加 Grievous Wounds,治疗效果削减 40%。
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff**——只要两名敌人各完成一件 Magic Resist 装备(不算 Mercury's Treads——太便宜;只算成品装)。
- ![Luden's Echo](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Echo**——对线平静、想在 Nashor's 之上叠加 burst spike 时的备选第二件装。
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**——对抗以平 A 取胜的对线(Fiora、Camille、Tryndamere)。如果对线生存是唯一目标,就从 Berserker's swap。

**Boots:** 默认 ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** 喂养攻速成长。AD bully 让对线无法生存时,改 Plated Steelcaps。

**Skill order:** 先升 **E**(6 级前后都是你的伤害工具),再升 **Q**(每级减速更长 + 削减更深),**W** 最后升。**R** 在 6、11、16 级各加一点。前几级 **E-W-Q** 起手以保证对线续航。

**Runes:** 主系 **Precision** + **Lethal Tempo**、**Triumph**、**Legend: Alacrity**、**Last Stand**。副系 **Inspiration** + **Biscuit Delivery** 与 **Cosmic Insight**。Stat shards:Attack Speed、Adaptive Force、Health Scaling。

## 关键对线

- **Darius:** 硬克制。保持最大距离,只为最后一击靠近,6 级前绝不换血。![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** 起手,接受丢 30+ 补刀,提示打野。
- **Garen:** 6 级后简单对线。他无法打断你的 ranged 平 A,所以风筝他(边攻击边后撤以保持距离),用 **Q** 减速 + ranged 平 A。注意他低血量的 **R**——基于已损失生命值的真实伤害,可无视 Zhonya's Hourglass。
- **Mordekaiser:** 6 级前求生存,11 级后开始滚雪球(优势放大:击杀 → 金币 → 装备 → 更多击杀)。他的 **R** 把你与队伍隔离 7 秒;若 11 级前被他抓中,你会死。用 **Flash** 躲他的 **E** 拉拽,如果反复被抓,提前 build **Mercury's Treads**。
- **Camille:** 反向 counterpick。她的 **E** 钩锁会无视你想保持的距离。用 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** 替代 Berserker's,在对线草丛插眼,如果她领先你两级就提示打野。
- **Nasus:** 6 级前势均力敌,11 级后你赢。他的 **W** 衰竭(给你的强减速)在你拥有 ranged 平 A 之前赢得单挑。一旦 Nashor's 成型、你 out-DPS 他的层数曲线,就推线逼他做反应。

## 强势期与胜利条件

- **6 级(R 解锁):** 第一次进入 ranged 平 A 形态,**Divine Judgment** 给你保护工具。别再贴塔——你能在 525 射程外消耗,并用对自己精确施放的 **R** 把对方的 dive 转化为击杀。
- **11 级 + ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth 成型(约 18-22 分钟):** 全场最大强势期。平 A 射程再次提升,被动随攻速与 AP 缩放,兵线掌控易手。开始 group play:与队伍轮转,主动找资源。
- **16 级(完全升华)+ ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap(约 28-32 分钟):** 平 A 触发 AOE 火焰波 on-hit。一次平 A 打前排,身后所有人都吃伤害。从此你应当是队伍中最高的伤害源,无论位置。
- **任何阶段 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) Zhonya's Hourglass + R 连招:** 对自己按 **R** 进入无敌,R 结束瞬间衔接 Zhonya's Hourglass。在团战中约有 5 秒免疫时间,队伍同时 peel——足以翻盘几乎所有 engage。

## 常见错误

- **6 级前尝试平 A 对拼。** Kayle 是基础伤害低的近战。哪怕一次对 Darius 或 Renekton 的失败换血,都会启动你无法挽回的雪球。把 **W** 留作续航,只补刀。
- **为了躲消耗把 R 浪费在自己身上。** **Divine Judgment** 1 级冷却 160 秒——一次中期团战就此消失。把 **R** 留给来袭的 all-in,或在小龙团中保护 ADC。
- **16 级站在前排。** 你的 AOE on-hit 波在坦克身后的后排发挥最大。像 ADC 一样站位——让前排吃伤害,你穿过他们持续输出火焰波。
- **11 级前打野怪。** Kayle 清野慢,且会在强势期前损失血线。留在线上、推线、满蓝再回家——Nashor's 之前别去入侵或抢河蟹。
- **过早卖鞋换第六件装。** 后期可以把鞋换成伤害装(Mejai's Soulstealer、Cryptbloom),但只有当你 5/0 领先且团战必为正面群战时才换。打平就保留鞋。

## 进阶技巧

精通中期团战的 **R-on-self peel pattern**。当敌方切入英雄(Camille、Hecarim、Sett)跳到你的后排时,不要把 **R** 给 ADC——而是给自己,然后走进切入路线,在切入者脚下落下 AOE 爆炸。2.5 秒无敌迫使切入者两难选择:要么承伤拼下去吃爆炸(送一颗人头),要么撤退(你的队伍以势均力敌重置团战)。诀窍在射程:**R** 的施法距离为 900,因此即使你站在 ADC 身后 8 单位,也能选中自己。
