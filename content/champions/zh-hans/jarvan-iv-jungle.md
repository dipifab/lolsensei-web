---
title: "Jarvan IV Jungle Build & Guide — Patch 16.9"
slug: "jarvan-iv-jungle"
language: "zh-hans"
patch: "16.9"
champion: "jarvan-iv"
role: "jungle"
last_updated: "2026-05-05"
description: "英雄联盟16.9版本Jarvan IV打野完整新手指南：起手装、核心战士出装路线、关键对线英雄分析、强势期节奏与团战胜利条件、初学者最常见的几个错误说明，以及一条用于排位实战的收尾进阶小技巧详细讲解。"
quick_learn:
  champion_dd_id: "JarvanIV"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Fighter / Diver"
  abilities:
    - key: "P"
      name: "Martial Cadence"
      description: "对目标的第一次普攻基于其当前生命值造成额外物理伤害。每个目标每隔几秒刷新一次，融入连招中。"
      dd_spell_id: "JarvanIV_Passive"
    - key: "Q"
      name: "Dragon Strike"
      description: "直线长枪造成伤害并削减护甲。若穿过激活的E旗，Jarvan被拉至旗帜并击飞路径上的敌人。"
      dd_spell_id: "JarvanIVDragonStrike"
    - key: "W"
      name: "Golden Aegis"
      description: "自身护盾（随命中敌方英雄数缩放）和附近敌人减速。在E-Q切入之前按，不要之后。"
      dd_spell_id: "JarvanIVGoldenAegis"
    - key: "E"
      name: "Demacian Standard"
      description: "投掷一面旗帜，落地造成法术伤害并为附近队友提供攻速。是E-Q击飞连招的铺垫工具。"
      dd_spell_id: "JarvanIVDemacianStandard"
    - key: "R"
      name: "Cataclysm"
      description: "跃向敌方英雄，对附近敌人造成伤害并形成不可穿越的墙体竞技场。再按可提前撤墙。"
      dd_spell_id: "JarvanIVCataclysm"
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6610", name: "Sundered Sky" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3071", name: "Black Cleaver" }
    - { dd_id: "6665", name: "Jak'Sho, The Protean" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "对线大量CC或AP重的队伍（3+眩晕/定身或两个AP威胁）：当CC比物理伤害更棘手时换掉Steelcaps"
    - dd_id: "3742"
      name: "Dead Man's Plate"
      against: "对抗风筝阵容（Caitlyn、Senna、Kog'Maw、Jinx）：移速和命中减速帮你R后粘住核心"
    - dd_id: "6664"
      name: "Hollow Radiance"
      against: "对抗治疗叠加阵容（上单Aatrox、下路Yone、辅助Soraka）：灼烧削减治疗，目标间清线也好"
    - dd_id: "3053"
      name: "Sterak's Gage"
      against: "对抗集火阵容（你R进场时2+敌人对你转火）：生命护盾爆发触发，韧性被动缩短CC"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "对抗有两个强物理输出的阵容（如Yasuo + Caitlyn）：将物理伤害转为缓慢流血而非瞬间爆发"
  base_combo: ["E", "Q", "AA", "R"]
  win_condition: "在优先目标（敌方核心或打野）身上命中E-Q击飞，再用R将其困入竞技场让队友跟进。绕着每个目标按冷却循环重复。"
  weakness: "若E或Q落空，你已用掉唯一的硬控和切入。沦为没有爆发的近战战士，容易被有自保的远程核心风筝。"
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
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Conqueror在E-Q-AA-R连招的每次命中都叠层，到击飞时层数已满，提供伤害与回复。Triumph奖励目标处的击杀，Alacrity加快平A以触发Martial Cadence，Coup de Grace收割困在Cataclysm中的低血量目标。"
    secondary_rationale: "Resolve副系：Bone Plating吸收你R进场时敌方转火的第一波爆发，Revitalize提升Golden Aegis护盾值——它是你团战中唯一的主动防御。"
    secondary_alternative: "对抗骚扰重的敌方阵容（Varus、Xerath、Karma骚扰组合）将Resolve换成Inspiration：Magical Footwear（免费鞋子省金币给第一件大件）和Cosmic Insight（更频繁的Flash用于E-Q-Flash小技巧）。"
matchup_draft:
  pick_into:
    - examples: ["lee-sin", "graves", "kha-zix", "viego", "rengar"]
      archetype: "前期游走型打野"
      reason: "Jarvan在3级凭借Q的护甲削减加上E的攻速与他们对换持平，且一旦Sundered Sky在12-14分钟做出，便在发育上超越大多数前期打野。"
    - examples: ["caitlyn", "ezreal", "lulu", "soraka"]
      archetype: "需要保护的不灵活下路"
      reason: "Cataclysm的墙体把依赖站位的核心困在辅助够不到的竞技场里；敌方队伍通常无法及时回应锁链。"
    - examples: ["azir", "aurelion-sol", "anivia"]
      archetype: "站桩型中路发育英雄"
      reason: "视野外的E-Q切入加上R的墙体剥夺了他们技能组所需的空间；他们没有位移在你队友转化前离开竞技场。"
  counterpicks:
    - examples: ["fiddlesticks", "amumu", "zac"]
      archetype: "拥有更长射程CC的范围开团打野"
      reason: "他们在你E-Q范围之外开团，并在你抵达后排前对你连控；如果在跳跃中途被定住，墙体也救不了你。"
    - examples: ["nasus", "vladimir", "mordekaiser"]
      archetype: "自带续航的后期发育英雄"
      reason: "Jarvan的强势期是1-3件装备（约20-25分钟）。之后他衰退，而这些目标只会变得更强并在他单次输出循环中存活。"
    - examples: ["olaf", "tryndamere"]
      archetype: "免控决斗者"
      reason: "Olaf的R和Tryndamere的R无视Cataclysm的锁链：他们以满伤害走出竞技场打你，而你唯一的开团技能正在冷却。"
---

## 概述

Jarvan IV是一名近战fighter / diver——也就是用突进缩短距离、在团战中投入以锁住关键目标的英雄——围绕一个标志性连招构建：扔出一面**E**旗帜，让**Q**穿过旗帜，把自己拉到旗帜处并击飞路径上所有人。6级后再加上**R** Cataclysm，一座墙体竞技场，把单个敌人和他困在一起，让队友完成击杀。他是最容易上手的打野之一（在我们的尺度上难度2/5），因为这套技能组永远要做同一件事：在优先目标身上命中E-Q，开R，赢下战斗。

他的游戏计划：用激活的**E**和Q护甲削减快速清打野营地，然后利用有可用切入角度的线——中路通过三角草丛（中路与边路之间三角形的草丛），上路通过河道草丛——去gank（跳进一条线协助击杀敌人）。每次大目标刷新前后，寻找dive核心的机会（跳上后排高伤害低防御的敌人）。技术体现在**E-Q-Flash**小技巧——放下旗帜，向前Flash，Q穿过实现一次无法反应的击飞——以及决定**何时**释放**R**（每场战斗只有一次，不要浪费在前排坦克身上）。

## 推荐出装

**起手装：** Hailblade + Refillable Potion。标准的junglecam宠物任务路线。Hailblade和Emberknife都会进化为三个伙伴之一；我们要的是AD skirmisher宠物，见下文。

**核心装备（按顺序）：**

1. ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling** — 来自Hailblade的任务升级（一旦经验足够，约3-4分钟自动进化）。是AD skirmisher伙伴：每次打完一个营地后给你一段移速冲刺，转化为全图更快的gank速度。
2. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — 你的第一件大件。第一次命中保底暴击和命中回复与Martial Cadence完美契合：在你击飞目标的瞬间打出暴击，并把你为接近他付出的生命值补回来。
3. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 对大多数敌方队伍的默认鞋子（下路通常是两名物理输出）。如果敌方阵容主要是AP和CC，换成Mercury's Treads。
4. ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — 护甲削减与你Q的被动叠加，再加上生命与技能急速让你的E-Q更快回来。
5. ![Jak'Sho, The Protean](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6665.png) **Jak'Sho, The Protean** — 后期坦克强势期。叠加护甲与魔抗的被动让你从切入者变成可以坐镇整个团战的前排。

**情境装备：**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 对抗大量CC或AP重的队伍。当群控比物理伤害更棘手时换掉Steelcaps。
- ![Dead Man's Plate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Dead Man's Plate** — 对抗风筝阵容（Caitlyn、Senna、Kog'Maw——一边攻击你一边后退以保持近战范围之外的敌人）。移速和命中减速帮你**R**后粘住后排（站在坦克身后的高伤害核心）。
- ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — 对抗治疗叠加阵容（上单Aatrox、下路Yone、辅助Soraka）。灼烧被动削减敌方治疗。
- ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — 当你R进场时2+敌人集火（把伤害转向你）。生命护盾在爆发（1-2秒内的高伤害）下自动触发，韧性被动缩短群控（眩晕、定身、减速）。
- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — 对抗有两个强物理输出的阵容（如Yasuo + Caitlyn）。将受到的物理伤害转为缓慢流血（伤害分摊到接下来几秒，而非瞬间），让你有反应时间而不是被秒。

**鞋子：** 默认Plated Steelcaps。若敌方队伍有3+眩晕/定身或两个AP威胁则用Mercury's Treads。

**技能加点：** 主**Q**（主要伤害和护甲削减），副**E**（更低冷却 = 更多gank尝试和旗帜选项），最后**W**。**R**在6、11、16级各加一点。

**符文：** 主系**Precision**搭配**Conqueror**、**Triumph**、**Legend: Alacrity**、**Coup de Grace**。副系**Resolve**搭配**Bone Plating**和**Revitalize**。属性碎片：Attack Speed、Adaptive Force、Health Scaling。

## 关键对线

- **Lee Sin / Graves：** 前期野区对线持平。追踪他们的第一波刷野；如果他们从红色方开始，用E-Q争夺他们的第二个buff。两人都能在3级与你交战，所以没有线权（一名把敌人推到塔下、可以转线协助你的队友）做后盾时不要入侵。
- **Fiddlesticks / Amumu：** 中期避免与队友抱团。他们的范围开团距离超过你的**E-Q**起手距离——你还在走位放旗帜时他们已经R你。在你的野区入口插眼，不要盲目走草丛（在没有视野的情况下走进草丛，那里可能藏着敌人）。
- **Kha'Zix / Rengar：** 想秒掉一名核心的刺客打野。反gank（在同一条线出现以扭转战斗）而不是清完野：你在3级与他们交易持平，并且当他们扑向你的核心时，你的**R**是保护工具（用来从dive者手中救核心的技能）——把他们用墙体隔开击杀。
- **Olaf：** 他的R让他免控，意味着**Cataclysm的墙体挡不住他**。如果你R他，他会走出竞技场打你。在他用掉大招后把**R**留给他的队友，或者只在你队伍能在他被困期间风筝（一边攻击一边后退保持距离）他时把他选作目标。
- **Sejuani / Maokai：** 更坦克的开团打野。前期1v1你伤害更高，但你们在团战中都想做同一件事（锁住一名核心）。先滚雪球的线获胜（拿下早期击杀演变成金币优势再演变成更多击杀）；在他们做出第一件装备前承诺gank。

## 强势期与胜利条件

- **3级：** **Q**、**E**、**W**各一点后，你拥有完整的E-Q-W gank连招。这是你第一个真正的gank窗口，尤其是中路通过三角草丛。
- **6级：** **Cataclysm**解锁。你河道附近任何没有视野的核心都是dive机会。诀窍：旗帜（E）扔在他们身后一点，R把他们拉向你，Q击飞——没有**Flash**和净化他们无法回应锁链。
- **![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) Sundered Sky做完（约12-14分钟）：** 你Martial Cadence的第一次暴击在E-Q后秒杀脆皮（高伤害低防御的英雄，比如ADC）。这是你应该按冷却gank并强迫龙交易的窗口。
- **三件套强势期（Sundered Sky + 鞋子 + Black Cleaver，约22-25分钟）：** 团战巅峰。你的R + Q单独就足以删掉一名后排核心，并且你有足够生命值在之后承受集火。

## 常见错误

- **为标准"在我所在位置击飞"连招把E扔在自己头上。** gank时奏效，但敌人在远离的战斗中你的Q会把你拉回去。把旗帜扔在敌人*身后*，让Q的拉动把你向前带向他，而不是远离。
- **切入后才按W。** Golden Aegis是一个随施法瞬间命中敌方英雄数缩放的护盾——*在*E-Q*之前*按它，护盾值最大且减速命中你即将落下的人，而不是空气。
- **对前排坦克开大。** Cataclysm只把*一个*敌人和你困在一起。用在核心身上（Caitlyn、Aphelios、Azir），而不是乐意在封闭竞技场里和你打的Sion。
- **gank之前清完整片野区。** 在3-4级凭借E-Q gank，你在节奏上压制大多数打野。如果在第一次gank之前清完野，你就放弃了最大的优势。打2-3个营地然后找角度。
- **过早再按R打破墙体。** 墙体也是保护工具：如果你的队伍在竞技场外打赢战斗，让墙体留着以阻止被困核心加入。只在追击逃跑者时再按R。

## 进阶技巧

练习**E-Q-Flash**连招：扔旗帜，让Q穿过，并在Q的施法动画*中*Flash。击飞应用在你的目的地，所以你能在比对手预期远600单位的范围内击飞他们——用于从他们视野范围之外开团，是游戏中最可靠的开团之一。代价是你消耗Flash，所以把这个小技巧留给确保击杀或抓掉关键守卫的gank。在打排位前先在训练模式里练习十几次；时机窗口很短。
