---
title: "Darius Top Build & Guide — Patch 16.9"
slug: "darius-top"
language: "zh-hans"
patch: "16.9"
champion: "darius"
role: "top"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Darius 诺手上单完整攻略:战士核心出装顺序、Conqueror 符文与天赋加点、Hemorrhage 出血叠层压制思路、关键对线应对、强势期节奏、新手常见错误规避,以及进阶 W 平 A 取消等高阶操作技巧。"
quick_learn:
  champion_dd_id: "Darius"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Juggernaut / Bruiser"
  abilities:
    - key: "P"
      name: "Hemorrhage"
      description: "普攻和伤害技能为目标叠加一层出血。叠到 5 层时,Darius 进入狂怒状态,短时间内获得大量额外 AD,出血每跳造成巨额伤害。"
      dd_spell_id: "Darius_Passive"
    - key: "Q"
      name: "Decimate"
      description: "前摇蓄力的环形大斧。用外刃命中敌人造成完整伤害、叠加一层出血并为自己回血。内柄则只造成一半伤害,且不叠出血。"
      dd_spell_id: "DariusCleave"
    - key: "W"
      name: "Crippling Strike"
      description: "强化下一次普攻:额外伤害加沉重减速。它会重置普攻计时器,夹在两次普攻之间使用以最大化每秒伤害。"
      dd_spell_id: "DariusNoxianTacticsONH"
    - key: "E"
      name: "Apprehend"
      description: "被动:固定护甲穿透。主动:近距离斧钩,扇形拉拽并减速锥形范围内的敌人。也是 Darius 套件里唯一的近身手段。"
      dd_spell_id: "DariusAxeGrabCone"
    - key: "R"
      name: "Noxian Guillotine"
      description: "跃向英雄,造成随目标已有出血层数提升的真实伤害。若击杀,冷却重置,可重新对新目标释放。"
      dd_spell_id: "DariusExecute"
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
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "敌方法伤多或连锁 CC 时,从 Plated Steelcaps 切换(Lissandra、Malphite 大、Sett 拉)"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "对面前排叠护甲(Malphite、Rammus、Shen)— 每次 Q 都为全队削护甲"
    - dd_id: "3065"
      name: "Spirit Visage"
      against: "敌方 AP 强度高,需要在 Death's Dance 与 R 吸血之上再加 MR 和回血增幅时"
    - dd_id: "6694"
      name: "Serylda's Grudge"
      against: "对面叠护甲与韧性(Rammus、Tahm Kench、Malphite)— 护穿加受伤减速"
    - dd_id: "3742"
      name: "Dead Man's Plate"
      against: "需要额外移速去贴脸风筝型(Quinn、Vayne 上、Gnar)并进入 R 范围时"
  base_combo: ["E", "AA", "W", "Q", "AA", "R"]
  win_condition: "把 Hemorrhage 叠到 5 层,利用狂怒窗口的额外 AD,用 R 真伤收尾。把对线人头转化为 Stridebreaker 时机,在边路 1v1 滚雪球并下路抓人。"
  weakness: "除了 E 的短拉和 R 的一次性跳跃,几乎没有机动。远程风筝型、远程上单、能保持距离的英雄(Quinn、Vayne、Teemo、Gnar)让他既无层数也无交换。"
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["sett", "garen", "volibear"]
      archetype: "缺乏强脱手的近距离近战战士"
      reason: "Darius 在长时间交换中获胜:每次普攻和 Q 都叠出血,等对面想脱手时,5 层狂怒窗口已经把交换扭向他这边。"
    - examples: ["nasus", "kayle"]
      archetype: "前期弱、后期成长型近战"
      reason: "他们前 6 级很被动 — Darius 可以用 E + W 反复把他们逼出兵线,在他们成型成大装备之前击杀。"
    - examples: ["yasuo", "yone"]
      archetype: "在 Q 范围内打架的近战核心"
      reason: "他们必须进 Q 边缘范围才能输出。Wind Wall 挡投射物但挡不住近战挥砍,干净的 Q 外刃依然叠出血并启动滚雪球。"
  counterpicks:
    - examples: ["quinn", "teemo", "vayne"]
      archetype: "远程或风筝型上单"
      reason: "他们站在 E 范围外白嫖血量。除了 E(短钩)和 R(一次性跳跃)外没有近身手段,他根本叠不到层数,失去线权。"
    - examples: ["fiora", "camille"]
      archetype: "带格挡或护盾的真伤决斗者"
      reason: "Fiora 的 W 格挡 Q 的击飞,她的弱点(她普攻造成真实伤害的小标记 — 无视护甲与魔抗的伤害)绕过血装;Camille 的 R 把 Darius 与队友隔离,长战中赢过他。"
    - examples: ["gnar", "kennen"]
      archetype: "自带 CC 的远程上单"
      reason: "两人都在 Q 范围外消耗,且都有远程晕:Gnar 的大形态投掷、Kennen 的 W 晕。他们让 Darius 一直流血,却从不进入他的交换窗口。"
---

## 概述

Darius 是一名**重型战士**(慢、无机动、近战却打得极硬、能正面扛伤的英雄),围绕在目标身上叠加被动 **Hemorrhage** 来运作。每次普攻以及 Q 的**外刃**命中,都会叠加一层出血。叠到**5 层**时进入狂怒,短时间内获得巨额额外 AD —— 这就是他击杀或秒掉对手的窗口。他的技能组里只有一个短近身手段(**E**,535 单位拉拽)和一个长冷却的跳跃(**R**,击杀重置的真伤处决)。除了这两件工具,他靠基础移速走路,遇到任何会保持距离的英雄都会送命。

游戏思路很简单:**贴住目标直到他死**。对线时用 Q 的**外刃**(不是内柄 —— 内柄只造成一半伤害且不叠出血)磨血并回血;当对手已经有 2-3 层出血时用 **E**(拉拽、击飞、减速)开启全 in,接 **W** + 普攻连招引爆。中期之后,**R** 就是击杀键:即使 0 层也能造成大量**真实伤害**(无视护甲和魔抗的伤害 —— 没有任何防御属性能减少它),并且每次击杀冷却重置,所以一次干净的团战切入可以连续 R 两到三次。Stridebreaker 出装那一刻起,他是当下最强的**斗士**(混合输出与生存力的近战战士)之一。

## 推荐出装

**起始装备:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**。回血被动能在 2 级强势期到来之前缓冲对手的消耗(不进入正面战斗就用低成本远程伤害磨你血量)。只有当线路是近战且你确定 1-2 级要全 in 时(比如同 Darius),才选 ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade**。

**核心装(顺序):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** —— 第一件强势期(伤害与**贴身能力**(咬住想跑的目标的能力)同时跳得最猛的瞬间)。主动是一个短冲刺,锥形范围内全部减速 —— 正好补上 Darius 缺的第二个近身手段(快速贴脸的工具)。AD、HP 与技能急速(降低技能冷却的属性)全都对路。
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** —— 当对面主要靠普攻打你时的默认鞋。它能在拉锯式交换(对线中反复来回交换伤害)中减少这部分伤害。
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** —— 血量加上**救命护盾**:当 HP 跌破 ~30% 时,自动触发护盾。这正是你需要多拖一秒、命中 R 触发重置的窗口。
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** —— 把**爆发**型 AD(像刺客连招那样 1-2 秒内打出的高伤害)转成缓慢**出血**(把伤害分摊到接下来几秒,而不是一次性砸下来)。击杀时残余出血会被清空 —— 与 R 重置链完美契合。
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** —— 视开局而定可作首件或第四件的备选:在战斗中对英雄的第一次普攻必定暴击并回血。配合 W 的普攻重置,这次暴击几乎可以按需触发。

**情景装:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** —— 当对方法伤多或连锁 **CC**(控制效果:晕、定身、击飞 —— 任何让你无法行动的状态)时,从 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** 切换。韧性(降低你身上 CC 持续时间的属性)在能把你从 C 位身边拉开的阵容里至关重要。
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** —— 对面前排叠护甲(Malphite、Rammus、Shen)。每次 Q 命中都为全队削掉目标的护甲层数。
- ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** —— 对面 **AP**(法术强度,法术伤害背后的属性)强度高时。提供 MR(魔法抗性)以及一个回血增幅被动,放大 Q 的回血、Death's Dance 的出血清除以及 R 的吸血效果。
- ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** —— 对面叠护甲与韧性的坦克阵。护甲穿透加上一个减速触发(每次命中自动触发的被动),作用于每个伤害技能 —— 包括 Q、W 和 R。
- ![Dead Man's Plate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3742.png) **Dead Man's Plate** —— 当你需要叠移速被动来贴脸风筝型(Quinn、Vayne 上、Gnar),并在他们重新走位前进入 R 范围时。

**鞋子:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** 是默认。当对方有三个或以上的 CC 来源、或法伤极高时切换到 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**。

**技能加点:** **Q** 优先(清线、回血、主要伤害源)。**W** 第二优先(减速时长随等级提升,平 A 重置是你的贴身工具)。1、2 级各点一级 **E** 拿到护穿被动,但继续主升 W;**E** 最后升,因为主动效果加成有限。**R** 在 6、11、16 级各加一点。

**符文:** 主系**精密**,基石(主系核心符文)选 **Conqueror** —— 持续与英雄战斗时叠加额外 AD,持续战斗 5 秒后达到上限。搭配 **Triumph**(参与击杀获得小回血和金币爆发)、**Legend: Bloodline**(参与击杀叠加吸血)、**Last Stand**(60% HP 以下额外伤害)。副系**坚决**搭 **Bone Plating**(受到伤害后接下来 3 次受击有伤害减免)和 **Overgrowth**(附近小兵死亡叠 HP,完美匹配每波吃 8 个以上小兵的上单)。属性碎片:**Adaptive Force** + **Adaptive Force** + **Health Scaling**。

## 关键对线

- **Garen:** 操作对决(谁玩得好谁赢,与英雄无关)。他的 **W**(4 秒减伤护盾)能抵消一层出血,但 Q 的沉默可以侧步躲掉。Q 外刃在他 W 进 CD 时打;开 R 后,只要你装备领先一件就能赢交换。
- **Sett:** 优势线。他的 Q-W 连招前摇明显(动作够大,你来得及反应)。在他交完 W 后用 E 拉过来,趁他没法用重置脱手前叠出血。他血怒条(护盾条)满的时候不要交换。
- **Fiora:** 最难的近战对线。她的 **W** 是**格挡**(短暂护盾,可挡掉并反制下一个技能)—— 在交 E 之前用 Q 骗它出来。她的弱点造成真伤,所以 Death's Dance 必出;只有当她拿到前期人头时才优先 ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage**。
- **Quinn / Teemo:** 极难的远程对线。他们会致盲你(短时间内取消你的普攻)或风筝你出范围。**冻线**(停止推线,把兵线留在自己一侧)在自家塔附近,断他们的发育(从小兵处获得的金币和经验),并叫野;Darius 不可能单挑赢。
- **Mordekaiser:** 对等对线,胜负取决于 R 时机。他的 R 把你拉进 1v1 异界。如果你留 E 在他用自己 E 定身你之后再拉近,5 层时能赢决斗。如果他的 R 一直收掉你,早做 ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage**。

## 强势期与胜利条件

- **2 级:** 解锁 Q + E,Darius 拥有真正的全 in 窗口(能完全押注击杀、没有保底的窗口)。E 拉、Q 边缘打伤害和回血、两次普攻,对手还没反应已经 3 层出血。
- **6 级:** 解锁第一次 **R**。哪怕只叠了 3 层,R 也能从 ~40% 血量收人头。野显形上半区时立刻找 6 级全 in。
- **![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) Stridebreaker 成型(约 11-13 分钟):** 主动冲刺加减速给 Darius 补上技能组里缺的第二个近身手段。强行边路 1v1,游走(离开自己路去支援中或下)抓人(在对位失位的人头上单点)。
- **两件装备 + R 在线(约 18-22 分钟):** 团战巅峰窗口。直接走进后排(团战中站在自家坦克身后的脆皮 C 位),R 最低 HP 目标,再 R 下一个脆皮。两次 R 重置就能单独终结一场团。

## 常见错误

- **Q 用内柄打。** 内柄只造成一半伤害,**完全不叠出血**。在挥砍动画结束前一瞬退一步,让**外刃**擦到目标 —— 那才是唯一有意义的 Q 命中。
- **把 E 当位移工具。** E 是你唯一可靠的近身手段,如果你为了过兵线快一点而烧掉它,接下来 16-26 秒你就没有进场手段了。留着开全 in。
- **太早按 R。** R 的真伤随出血层数提升。0 层时一般,5 层时是秒杀级别。除非是收残血,否则用普攻和 Q 至少叠到 3 层再按 R。
- **追风筝型超过二塔。** Darius 没逃跑技能。R 和 E 都没有时,每往塔外多走一步都是送给对面打野的免费 gank —— 而他低基础移速意味着脱手不可能干净。
- **纯堆肉装。** Darius 吃 **AD**,不是单纯堆血。出 Sunfire + Warmog's 会直接砸掉伤害;你不再秒脆皮,反而变成一只走得很慢的小兵。坚持 AD 战士核心。

## 进阶技巧

练习 **W 平 A 取消**:Crippling Strike 会重置普攻计时器,所以你可以打一次普攻、立即按 W、紧接着打出强化 W 普攻 —— 一次普攻的时间里完成两次满伤命中。同样的技巧反过来也行:在 Q 前摇*中*施放 W,强化普攻会在 Q 解算的瞬间落下。实战里影响最大的用法是 5 层狂怒窗口:AA → W → AA → Q 外刃在不到 2 秒内连出四次叠出血的命中,足以从 70% HP 收掉几乎任何脆皮。在自定义房对训练假人练到节奏自动化为止。
