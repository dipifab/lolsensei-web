---
title: "Ezreal Bot Build & Guide — Patch 16.9"
slug: "ezreal-bot"
language: "zh-hans"
patch: "16.9"
champion: "ezreal"
role: "bot"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Ezreal 探险家下路完整攻略:初始装与 AD 核心出装顺序、Precision 符文与天赋加点细节、Q-W-Q 标准起手连招、对线期消耗与压制思路、强势期节奏把握、团战站位与风筝时机、新手常见错误规避以及进阶 W 黏附引爆等高阶操作技巧。"
quick_learn:
  champion_dd_id: "Ezreal"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Skirmisher"
  abilities:
    - key: "P"
      name: "Rising Spell Force"
      description: "技能命中敌人会叠加一层 attack speed(最多 5 层)。Ezreal 普攻 DPS 的核心引擎。"
      dd_spell_id: "Ezreal_Passive"
    - key: "Q"
      name: "Mystic Shot"
      description: "远距离直线技能,造成物理伤害。命中可缩减所有冷却并触发 on-hit 效果——你最主要的消耗与 DPS 按键。"
      dd_spell_id: "EzrealMysticShot"
    - key: "W"
      name: "Essence Flux"
      description: "黏附在英雄或目标上的法术之球。下一次普攻或技能引爆它,造成额外伤害并返还法力。"
      dd_spell_id: "EzrealEssenceFlux"
    - key: "E"
      name: "Arcane Shift"
      description: "短距离闪现 + 自动射弹。冷却很长——你唯一的逃生技,前期不要拿来打输出。"
      dd_spell_id: "EzrealArcaneShift"
    - key: "R"
      name: "Trueshot Barrage"
      description: "全图直线光束,对第一个非小兵目标造成高额伤害。用于狙杀(团战外切割孤立敌人)、收割或紧急清线。"
      dd_spell_id: "EzrealTrueshotBarrage"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "6675", name: "Navori Flickerblade" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "对面有需净化的单体硬控(Malzahar R, Skarner R, Warwick R)——主动解锁后继续风筝"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "对面有可预判的投射型控制(Morgana Q, Ashe R, Blitzcrank Q)——法术护盾挡一个敌方技能,保住站位"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "对面消耗型组合(Caitlyn, Varus, Xerath 辅助)——需要吸血续航与护盾承受换血"
    - dd_id: "3091"
      name: "Wit's End"
      against: "对面强 AP 爆发(LeBlanc 中单, Syndra, Brand 辅助)——魔抗加每次 Q 与普攻附加 on-hit 法伤"
  base_combo: ["W", "Q", "AA", "E", "AA"]
  win_condition: "每次 Q 冷却好就命中以叠满 attack speed 被动,用普攻加 Q 在最远射程风筝,把下路滚雪球到 25-30 分钟三件套强势期,DPS 压制对方 ADC。"
  weakness: "脆皮且除 E 外无逃生(冷却很长)。对硬开团与远程控制极为脆弱;对线期 Q 打不中就掉队,被动 6 秒内没命中就消散。"
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 8005, name: "Press the Attack", icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png" }
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["draven", "kalista", "samira"]
      archetype: "短距离超侵略型 ADC"
      reason: "Ezreal 的 Q 远超他们的普攻射程(1150 对约 525-550)。在安全距离把他们消耗出兵线;他们必须 all-in(打到见血的全押对拼)才能赢线,而你的 E 是反扑塔下的应急按键。"
    - examples: ["sivir", "varus", "kog-maw"]
      archetype: "无位移的不灵活 ADC"
      reason: "Ezreal 可以侧步躲掉慢速 Q(Sivir Boomerang, Varus Q),同时打中自己的 Q。他们追不上你的步进,惩罚不了你较慢的清线节奏。"
    - examples: ["aphelios", "kai-sa"]
      archetype: "对线弱的成长型 ADC"
      reason: "Ezreal 在 2-6 级的强势期比他们更强。Q 消耗逼他们离兵线,核心装备做出来时已经落后,后期成长优势失去。"
  counterpicks:
    - examples: ["miss-fortune", "jhin"]
      archetype: "6 级前前期爆发型 ADC"
      reason: "他们 1-3 级的换血套路(Jhin 普攻重置, MF Double Up)在 Ezreal 叠满被动前压制伤害。逼你提早回城,丢失 Manaflow Band 的节奏。"
    - examples: ["caitlyn", "xerath", "ziggs"]
      archetype: "更远射程的炮台型(消耗组合)"
      reason: "他们的 Q 或陷阱射程超过 Ezreal 的 1150。他必须进入对方威胁区才能反击,导致对线期持续掉血,却没法反 all-in。"
    - examples: ["leona", "nautilus", "thresh"]
      archetype: "硬开团坦克辅助"
      reason: "他们点选式的开团(Leona E, Naut Q, Thresh Q 钩)直接绕过 Ezreal 的核心优势——安全距离消耗。一旦被锁定,E 通常不足以脱离后续连招。"
---

## 概述

Ezreal 是一名远射程 AD 核心,牺牲纯粹的普攻 DPS 换来安全性与技能型消耗。他的技能组核心在于把 **Mystic Shot (Q)** 在每个冷却时打中——每次命中返还部分冷却,叠加被动 **Rising Spell Force** 的 attack speed(最多 5 层,约 +50% AS 的强势期),并触发 Kraken Slayer 等 on-hit 装备效果。**Arcane Shift (E)** 让他拥有传统 ADC 中最优秀的逃生工具,但代价是脆弱的对线续航和比 Jinx、Aphelios 等 ADC 更慢的成长曲线。

战术思路是耐心:用 **Q** 在最远射程(1150 单位,比任何其他 ADC 普攻更远)消耗,敌人退后时用 **W**-**Q** 组合推线,用 **R** 漫游中路在地图各处完成狙杀(在团战之外切掉孤立的敌人)。技术含量在于 **Q** 的预判(沿着目标的移动方向预瞄——他们补刀时会自我减速所以更易命中)与 **E** 的克制(不要为打输出闪进去;留着躲必然到来的开团)。

## 推荐出装

**初始装:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**。Doran's 给你用 **Q** 换血又不掉血的 AD 与吸血。

**核心装(按顺序):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — 第一件 DPS 强势期。每三下普攻造成真实伤害(无视护甲与魔抗的伤害),**Q** 也算 on-hit 触发。无条件第一件成品。
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed 鞋子,与被动层数相乘。第一件 Kraken 部件后入手。
3. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — 蓄力满时把普攻射程延长约 150 单位,与 **Q** 射程对齐。让你在最远射程风筝(攻击同时后退保持距离)而不必上前。
4. ![Navori Flickerblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6675.png) **Navori Flickerblade** — 普攻缩减非大招冷却。配合 **Q** 自身的冷却返还,每约 2 秒能扔一次 **Q**。
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — 对付后期堆护甲的前排坦克的破甲装。

**情境装:**

- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — 对面有需净化的单体硬控(Malzahar R, Skarner R, Warwick R)。主动技能解锁后你继续风筝。
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — 对面有可预判的投射型控制(Morgana Q, Ashe R, Blitzcrank Q)。法术护盾挡一个敌方技能,保住你的站位。
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — 对面消耗型组合(Caitlyn, Varus, Xerath 辅助)。吸血让你扛过骚扰,过量治疗护盾给你 HP 缓冲。
- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — 对面强 AP 爆发威胁(LeBlanc 中单, Syndra, Brand 辅助)。魔抗加每次普攻和 **Q** 的额外法术 on-hit 伤害。

**鞋子:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** 是默认。需要更多 **R** 在线时间做跨图狙杀时,![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** 也可接受。

**加点顺序:** 主升 **Q**(伤害与 DPS 引擎),副升 **W**(对粘连目标的额外爆发),最后升 **E**(伤害永远不够升满——它就是闪现)。在 6、11、16 级各点一级 **R**。

**符文:** 主系 **Precision** 配 **Lethal Tempo**(对面更脆时也可换 **Press the Attack**)、**Presence of Mind**(法力续航)、**Legend: Bloodline**(吸血成长)、**Coup de Grace**。副系 **Sorcery** 配 **Manaflow Band**(必带——没它 Ezreal 法力开销极其惩罚)与 **Transcendence**。

## 关键对线

- **Caitlyn:** 她的普攻射程(650 对你的 550 近战)超过你的 **Q**,而且陷阱把你挤出兵线。站在小兵后面,绝不踩陷阱,用 **Q** 补刀。她用 **Net (E)** 逃离兵线时找机会 all-in——她的冷却空了。
- **Draven:** 他想要短距离换血(短促的攻击交换)。用 **Q** 推线,落后时冻线(只补刀不杀死兵线让其留在你塔下),并尽早叫野区 gank。避开他的旋转斧——如果他有 2 把斧头在转,不要平 A。
- **Lucian:** 换血节奏的镜像对决。把 **E** 留到他用 **Dash (E)** 进攻时——那时他 committed(完全投入,无法回头),你可以把他诱到塔下,或用你的 **Q** 爆发跟进。
- **Jhin:** 他的第 4 发普攻是巨额暴击;数他的子弹(平 A 计数:1、2、3,然后第 4 发前后撤)。他换弹动作很长,趁机上前打中 **Q**。
- **Sivir:** 6 级前对等。她的 **Spell Shield (E)** 挡你的 **Q**——先用 **W** 法球(便宜又快)骗盾,再在空窗期打 **Q**。

## 强势期与胜利条件

- **2 级:** 第一个换血窗口。**Q** + **W** 由 **Q** 引爆,大块伤害几乎能赢任何短换血。
- **6 级:** 第一个 **Trueshot Barrage** 解锁漫游和收割压力(用 R 终结跨图逃跑的低血敌人)。对方中单残血回城就 **R** 一发;全图射程把站位失误变成击杀。
- ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer 完成(约 12-14 分钟):** DPS 大约翻倍。此时强行 2v2 强杀——每三下普攻造成真实伤害,对方辅助的装备无法克制。
- **三件套强势期(约 25-30 分钟):** ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** + ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** + ![Navori Flickerblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6675.png) **Navori Flickerblade** 让你在更安全距离用 DPS 压制大多数 ADC。此时推 Baron 与小龙团。

## 常见错误

- **为完美一击留 Q。** 被动层数(命中时的 AS 增益)在 6 秒无技能命中后消散。把 **Q** 扔到小兵刷新层数和返还冷却——就算英雄打不中,打到小兵也值这点法力。
- **对线期 E 用于进攻。** **Arcane Shift** 冷却 14-26 秒;一旦闪进去,辅助开团你就什么都没了。在 ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** 完成且有击杀领先前,只用于逃生。
- **团战中站在 R 最远射程。** **Q** 射程 1150;站在 1500+ 去打 **R** 狙杀,会让你脱离辅助的 peel(辅助为你提供的反先手保护)范围。站在第二远的位置,被绕后才不会被秒。
- **法力枯竭还在用 Q 消耗。** 法力低于 30% 时,推线后回城。没法力的成长型 Ezreal 毫无作用,因为他每个技能(包括逃生用的 E)至少要 28 法力。
- **大目标战中忽视 W。** **Essence Flux** 能黏在小龙和 Baron 上。**W** 黏上后用 **Q** 引爆,在惩戒争夺时多打约 250 额外伤害——决定偷龙的免费一波伤害。

## 进阶技巧

练习对英雄的 **W**-黏附连招:有视野时透过战争迷雾把 **W** 扔在低血敌人身上,立刻 **Q** 引爆。引爆会返还 **W** 的法力开销外加额外法力,所以命中时这套连招几乎免费。团战中,把 **W** 黏在敌方 ADC 身上,你队友的每次普攻都会引爆它,让 50 法力的法球在 4 秒内由多个来源累积成约 400 伤害的一波。关键是在开团 *之前* 扔 **W**,而不是开团途中——0.25 秒的飞行速度太慢,抓不住已经在移动的目标。
