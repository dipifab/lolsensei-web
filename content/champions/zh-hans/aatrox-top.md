---
title: "Aatrox Top Build & Guide — Patch 16.9"
slug: "aatrox-top"
language: "zh-hans"
patch: "16.9"
champion: "aatrox"
role: "top"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Aatrox 暗裔剑魔上单完整攻略:bruiser 战边出装路线、Q 剑刃外缘命中机制详解、关键对线思路、强势期与节奏把握、新手常见错误规避,以及 Q 取消后摇等进阶操作技巧。"
quick_learn:
  champion_dd_id: "Aatrox"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Fighter / Drain Tank"
  abilities:
    - key: "P"
      name: "Deathbringer Stance"
      description: "周期性触发:下一次普攻造成基于目标最大生命值的额外法术伤害,并为 Aatrox 回血。注意头像旁的指示器。"
      dd_spell_id: "Aatrox_Passive"
    - key: "Q"
      name: "The Darkin Blade"
      description: "三段式巨剑挥砍,每段形状不同。命中外缘 (edge) 会短暂将敌人击飞,并造成 25% 额外伤害。Aatrox 的主要伤害来源。"
      dd_spell_id: "AatroxQ"
    - key: "W"
      name: "Infernal Chains"
      description: "锁链直线技能,减速首个命中目标。如果英雄或大型野怪未及时离开冲击区域,将被拉回中心并再次受到伤害。"
      dd_spell_id: "AatroxW"
    - key: "E"
      name: "Umbral Dash"
      description: "被动:对英雄造成的伤害按比例回血 (lifesteal 吸血)。主动:短距离 dash,可在 Q 起手期间使用以校准外缘命中或风筝走位。"
      dd_spell_id: "AatroxE"
    - key: "R"
      name: "World Ender"
      description: "恶魔形态:获得额外 AD、随时间衰减的移速、以及增强的自我治疗。对附近敌方小兵造成恐惧。每次助攻或击杀延长持续时间。"
      dd_spell_id: "AatroxR"
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
    - { dd_id: "3071", name: "Black Cleaver" }
    - { dd_id: "3053", name: "Sterak's Gage" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "对面有大量法术伤害或连环 CC 时把 Plated Steelcaps 换成它 (例如 Lissandra、Sett、Malphite 大招)"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "对位高 AP 爆发时 (Syndra、Vex、从中路游走上路的 Fizz):魔法护盾能挡掉一发关键爆发,救下你的开团"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "对面有两名强力 AD 输出时 (Yasuo + Caitlyn):把爆发 AD 转成持续流血,让 E 的吸血有时间把血量补回来"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "对面有秒杀你开团的单体硬控时 (Morgana Q、Blitzcrank 钩子、Lissandra R)"
    - dd_id: "3155"
      name: "Hexdrinker"
      against: "如果上路对位是 AP (Vladimir、Rumble) 在压你血量,优先做这件 MR 组件再回家,而不是先做完 Eclipse"
  base_combo: ["W", "AA", "Q1", "E", "Q2", "Q3"]
  win_condition: "用 Q 外缘打出击飞,W 锁住目标,E 重置位置。把 Eclipse + Black Cleaver 的装备领先转化为 side lane 1v1 (边路单挑) 胜利。"
  weakness: "所有伤害都依赖 Q 的时机。Miss 掉外缘就输掉这次 trade。硬控、远距离 kiter (拉扯型) 和真实伤害决斗者 (Fiora、Camille) 会把他的吸血续航撕成碎片。"
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
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
    primary_rationale: "主系 Precision: Conqueror 在 Q 多段命中里稳定叠满,提供持续 trade 的伤害与吸血加成。Triumph 在击杀返血,Legend: Alacrity 撑住技能间隙的 AA (普攻),Last Stand 在残血时奖励豪赌全压。"
    secondary_rationale: "副系 Resolve: Second Wind + Revitalize 解决线上掉血续航问题,让你在弱势对线里也能熬到第一件装备。"
    secondary_alternative: "如果对线轻松且预期被打野频繁照顾,可把副系换成 Inspiration,带 Magical Footwear (12 分钟免费鞋) 与 Cosmic Insight (额外 ability haste 技能急速)。"
matchup_draft:
  pick_into:
    - examples: ["nasus", "yorick"]
      archetype: "无开团手段的近战慢速战士"
      reason: "Aatrox 在 6 级前用 Q 外缘命中赢下 trade;W 的锁链能压住他们足够久,使他们既不能安全叠被动也无法逃脱 all-in (强开全压)。"
    - examples: ["ryze", "vladimir"]
      archetype: "必须近身才能输出的短手法师"
      reason: "他们必须走进近战距离才能打出完整伤害;Aatrox 用 W 减速 + Q 外缘击飞惩罚这个空隙,他们还没脱身就吃下伤害。"
    - examples: ["kayle", "k-sante"]
      archetype: "前期弱、后期强的 scaling 大后期"
      reason: "Aatrox 是游戏里前期对线曲线最强的英雄之一;他能在对面拿到那些后期成型的关键装备前击杀或压制经验。"
  counterpicks:
    - examples: ["fiora", "camille"]
      archetype: "带格挡或护盾的真实伤害决斗者"
      reason: "Fiora 的 W 能格挡 Q 的击飞,而她的 Vitals (在 Aatrox 身上的命门标记,普攻命中即触发真实伤害——伤害无视护甲与魔抗) 直接绕开 drain tank 的吸血出装;Camille 的 E 又叠上一层真实伤害。"
    - examples: ["quinn", "teemo"]
      archetype: "远程或隐身风筝型"
      reason: "他们能在 Q 范围外消耗,用致盲或位移 (例如 Quinn E 的击退 dash) 打断 Aatrox 的起手前摇;他没有任何贴脸手段,除非烧掉 E 和 Flash。"
    - examples: ["malphite", "maokai"]
      archetype: "带瞬发硬控的坦克 (无需瞄准)"
      reason: "他们的眩晕和缠绕都是点选生效的 — 没有弹道可以躲。这些控制能在 Q 动画中途打断后续段数,而 Aatrox 一旦被控住,就无法靠 E 的吸血把血量补回来。"
---

## 概述

Aatrox 是一名近战 fighter (战士,贴身作战的英雄),整套技能围绕一个三段式巨剑 **Q** 设计。每段覆盖不同形状,而命中挥砍的**外缘** (edge) — 不是内圈 — 会带来两个额外效果:短暂**击飞** (把目标抛到空中片刻让其无法行动),并造成 25% 额外伤害。他的技能组还包括减速 + 锁链拉回 (**W**),一段短距离 **dash** (**E**:瞬间位移,可在 Q 动画期间使用来重新走位),以及一个恶魔形态大招 (**R**:长 CD 强力增益)。他是一名 **drain tank** (吸血坦克):不是传统坦克,而是靠 E 的**吸血** (lifesteal,将造成的伤害按比例转化回血量) 把伤害补回来生存,而不是堆叠护甲或 HP。

他的游戏思路一句话能讲清,但执行很难:在线上,带着 **W** 准备好作为锁定手段 (减速钉住敌人的工具) 上前,然后挥出 **Q**,让剑刃的**外缘**正好砍到被减速的目标。用 **E** 滑到合适的位置打出第二、第三段 Q。从中期开始,寻找 side lane 1v1 (边路单挑) 和 2v2 skirmish (双方各两人的小规模遭遇战,远离主战场)。一旦 R 可用且至少出了一件装备,Aatrox 就是游戏里最强的 **bruiser** (战边,兼顾伤害与坚韧度的英雄) 之一。

## 推荐出装

**起始装备:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**。Doran's Shield 的回血被动能撑住 Aatrox 在前期续航最弱的几级。

**核心装备 (按购买顺序):**

1. ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse** — 第一件爆发节点 (装备成型时伤害跳升最大的时刻)。提供 **AD** (Attack Damage,攻击力,普攻和 Q 伤害的核心属性)、**omnivamp** (全能吸血,所有伤害类型都能回血,不只是普攻),以及 **ability haste** (技能急速,降低技能 CD)。被动在第二段命中时触发,而 Q1 + Q2 正好按顺序送到。
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 对面伤害主要来自普攻时的默认鞋子。在线上拉锯式 trade (来回交换伤害的对拼) 里能减少受到的普攻伤害。
3. ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — Q 每次命中都会削减一层敌方**护甲** (armor,降低物理伤害的属性)。同时提供 HP 增加生存、ability haste 让你每场团战转更多轮 Q。
4. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP 加上一个**生命线护盾** (lifeline shield):血量低于阈值 (大约 30%) 时自动触发护盾。这个窗口正是你需要额外时间让 E 的吸血把血量补回安全线的时刻。

**情境装:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 当对面有大量法术伤害或连环 **CC** (crowd control 控制效果:眩晕、缠绕、击退 — 任何让你无法行动的技能) 时,从 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** 切换过来。例如:Lissandra 的缠绕、Sett 的拉、Malphite 的大招。
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — 对位高 **AP** 爆发时 (AP = ability power 法术强度,法术伤害的核心属性;burst 爆发 = 1-2 秒内打出的高伤害)。Lifeline 被动能挡掉一发关键魔法伤害,通常就是 engage (开团切入) 中途死掉与活到放出 R 之间的差别。
- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — 对面有两名强力物理 (AD) 输出时 (例如 Yasuo + Caitlyn)。它把爆发转成缓慢的**流血** (bleed,把伤害平摊到接下来几秒,而不是一下打满),给 E 的吸血时间把血量补回来。
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — 对面有秒杀你开团的单体硬控时 (Morgana 的 Q、Blitzcrank 的钩子、Lissandra 的 R)。它带一个一次性魔法护盾,能吸收锁定技能,让你能 commit (全力扑上去) 而不是在最远距离干瞪眼。
- ![Hexdrinker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3155.png) **Hexdrinker** — 前期 **MR** (Magic Resistance 魔抗,降低法术伤害的属性) 组件。如果对位是 Vladimir、Rumble 这种 AP 上单在赢线,先做这件再去做完 ![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) **Eclipse**。

**鞋子:** 默认 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**。当对面有三个或以上 CC 来源、或大量法术伤害时,换 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**。

**加点顺序:** 主升 **Q** (它是你唯一的伤害技能),副升 **E** (吸血百分比每级提升,意味着每场战斗能 dash 更多次),最后升 **W**。**R** 在 6、11、16 级各点一级。

**符文:** 符文是开局前从"树状选项"里挑选的被动效果,每个系都围绕一种风格构建。Aatrox 用 **Precision** 当主系 (围绕普攻持续输出构建的那一系),keystone (主系核心符文) 选 **Conqueror** — 一个会随着持续战斗叠加伤害的被动 — 再加 **Triumph** (击杀或助攻时小额回血)、**Legend: Alacrity** (Alacrity = 提供额外攻击速度的属性,帮助 Aatrox 在技能间隙更快地 AA)、**Last Stand** (残血时伤害提升)。副系选 **Resolve** (坚韧系) 带 **Second Wind** + **Revitalize** 提升线上 HP 续航,或者如果预期对线轻松,改 **Inspiration** 带 **Magical Footwear** (12 分钟免费鞋) 和 **Cosmic Insight** (额外技能急速)。

## 关键对线

- **Fiora:** 最难的对线。她的 **W** 是 parry (短暂的格挡盾,挡下并反击一个技能) 能取消你的 Q 击飞。先**钓**她交 parry — 逼她格挡 Q1 — 再决定上不上 Q3。避免持久 trade:打快速的 Q1 + E 进出,W 没在 CD 之前绝不交 Q3。
- **Darius:** Skill matchup (技术对决,谁玩得好谁赢,与版本强弱无关)。当他叠了三层或以上的流血 debuff 时 (他被动每秒按层数掉你血),离开他 E 的拉拽距离。趁他 Q 在 CD 时用 Q 外缘打他;开 R 之后,只要装备领先一件,trade 就归你。
- **Renekton:** 6 级前如果你尊重他 W 的眩晕,他会输线。只在你 W 准备好时上前;惩罚他的 CD 空挡,而不是面对面对拼。6 级后,你的 R 续航比他烧的 fury (狂怒,他的资源条) 更可靠。
- **Malphite:** 别贴着自己的兵线站位 — 他的 Q 是远距离 **poke** (低成本远程消耗,不用全压就能磨你血) 能白嫖你血量。如果他的前期消耗在压你,买 ![Hexdrinker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3155.png) **Hexdrinker**;**freeze** (冻线,停止推线把兵线维持在己方一侧) 在自家塔附近以阻止他吃 farm (击杀小兵的金钱与经验)。
- **Quinn:** 非常难打。她的技能能给你致敏 (短时间内取消你的普攻,包括被动的强化 AA),并用 kite (一边后撤一边攻击,把你拉在近战范围外) 把你拖死。把兵线快速推过去去 roam (离开自己的线去帮其他线,通常是中路) 找 pick (击杀走位失误的孤立敌人),不要试图赢这个 1v1。

## 强势期与胜利条件

- **2 级:** 解锁 **Q** + **W**,Aatrox 拥有真正的 all-in 窗口 (能全力扑上去拼击杀,不留退路的时机)。如果敌人走位失误,带 W 准备好上前,在减速命中后用 Q 外缘砸下去。
- **6 级:** 第一发 R 解锁。如果对面血量低于 60%,寻找 all-in 机会 — AD 加成和治疗增益能把中性的 trade 变成击杀。
- **![Eclipse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6692.png) Eclipse 成型 (约 11-13 分钟):** 你的伤害大幅跳升。强行边路单挑,寻找下路 roam 做 2v3 dive (跟自家打野——专门刷野并轮转支援各线的位置——一起突击对面下路塔下击杀,即使要承受塔伤)。
- **两件装备 + R 可用 (约 18-22 分钟):** 团战巅峰窗口。利用 ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** 的生命线护盾加上 R 的治疗增益 (amplification — R 增加你受到的所有治疗效果) 切对面 back line (后排,即站在自家坦克身后的脆皮 carry 输出位),并在拿到 takedown (击杀或助攻) 时刷新 R 的持续时间。

## 常见错误

- **接触瞬间立刻丢 Q1。** Q1 是范围最小、前摇最长的一段。先用 **W** 的减速开局,再算好 Q1 的时机让**外缘**正好砍到目标 — 不是内圈。外缘的额外伤害大约是 25%。
- **把 E 当成位移技能用,而不是为 Q 校准。** E 是你赢下 trade 的关键工具。把它留下来滑进外缘命中距离,或者在 Q 起手期间 (动画播放完才真正打出伤害的那一段) 闪避对面关键技能。别只为了快速跨过兵线就丢 E。
- **战斗刚开始就按 R。** Aatrox 的 R CD 很长,而且增益效果会随时间衰减。先用 W + Q 开战,再在你已经 commit (全力投入) 且需要 AD 和治疗增益时激活 R — 不要把它当作初始 engage 工具。
- **忽视用 W 穿小兵。** W 能穿过一个小兵减速后面的英雄。在难打的对线 (Fiora、Camille) 里,从自家兵线后面发射 W,让弹道穿过小兵躯体在对方反应过来之前命中。
- **堆护甲而不是急速/AD。** Aatrox 是 drain tank,不是真正的坦克。他靠 E 的吸血把伤害回血;那个治疗量随**你造成的伤害**增长。出纯 HP 坦克装会同时杀掉你的输出和续航。

## 进阶技巧

在 Q1 起手动画期间使用 **E** 来在施法中途偏移 Q 的判定盒:你可以朝一个方向开始 Q,然后 dash 穿过小兵或绕到敌人背后,让挥砍最终落在完全不同的角度上。这叫 **Q animation cancel** (Q 动画取消),把可预测的 Q 变成无法反应的操作。在自定义房间对着 target dummy (训练假人,一个静止的练习目标) 练:开 Q1,憋住施法,E dash,看 Q 在新位置结算。在实战里影响最大的用法是,当敌人试图 side-step (横向走位躲开) 一个被读出前摇的 Q 时,dash **进入**他的位置,在新角度的外缘抓到他打出击飞。
