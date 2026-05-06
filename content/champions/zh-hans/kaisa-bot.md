---
title: "Kai'Sa ADC Build & Guide — Patch 16.9"
slug: "kaisa-bot"
language: "zh-hans"
patch: "16.9"
champion: "kaisa"
role: "bot"
last_updated: "2026-05-05"
description: "Kai'Sa ADC 下路攻略 16.9 版本:等离子层数运营节奏、混合 Kraken 进化出装路径、5 个关键对线讲解、各阶段 power spike 时间点、5 大常见误区以及高分段 flash R 进阶收割技巧。"
quick_learn:
  champion_dd_id: "Kaisa"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hybrid"
  abilities:
    - key: "P"
      name: "Second Skin"
      description: "auto-attack 在目标身上叠等离子;队友的硬 CC(限制位移类)还会额外叠层。同时,购买装备会在 Kai'Sa 跨过隐藏的 AD/AP/攻速阈值时分别进化 Q/W/E。"
      dd_spell_id: "Kaisa_Passive"
    - key: "Q"
      name: "Icathian Rain"
      description: "发射 6 枚导弹,在附近敌人之间分配(范围 600)。同一目标重复命中时伤害递减。约 100 额外 AD 时进化:6 枚变 12 枚。"
      dd_spell_id: "KaisaQ"
    - key: "W"
      name: "Void Seeker"
      description: "远程直线导弹(3000 单位)。命中第一个敌人附加 2 层等离子并暴露其视野 4 秒。约 100 AP 时进化:命中英雄附加 4 层并返还 50% 冷却。"
      dd_spell_id: "KaisaW"
    - key: "E"
      name: "Supercharge"
      description: "约 1.5 秒引导期间获得移速并 Ghosted(可穿过单位),引导结束后获得 4 秒高攻速。auto-attack 缩减其冷却。60% 额外攻速时进化:短暂 invisibility。"
      dd_spell_id: "KaisaE"
    - key: "R"
      name: "Killer Instinct"
      description: "突进至带有 5 层等离子(或被等离子完全 ruptured)的敌方英雄身边,落地获得护盾。用于收掉已被 chip-killed 的目标,而不是用来开团。"
      dd_spell_id: "KaisaR"
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
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
    - { dd_id: "3124", name: "Guinsoo's Rageblade" }
    - { dd_id: "3031", name: "Infinity Edge" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "对位高 HP/护甲堆叠 (Cho'Gath, Sion, Malphite, Ornn):百分比 armor pen 无视固定比例护甲"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "对位高回血阵容 (Soraka, Vladimir, Aatrox):附加 Grievous Wounds 让敌方治疗减半"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "对位重 AP 爆发 (Syndra, Veigar, Brand 辅助):魔抗 + 30% HP 以下伤害护盾"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "对位长程消耗 (Ezreal, Caitlyn, Xerath):lifesteal 战中回血,溢出治疗转为护盾"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "对位刺客或 diver (Zed, Kha'Zix, Talon):Ghost 被动让你在 kite 时穿过单位"
  base_combo: ["W", "AA", "Q", "E", "AA"]
  win_condition: "用 W 与 auto-attack 在敌方后排目标上堆等离子,5 层时 R 进入,接 Q 与强化 AA 收掉,期间 E 提供攻速窗口。"
  weakness: "R 需要目标身上有等离子层数 — W 没命中或没有队友 CC,就没有先手。R 之前没有位移、身板脆;E 时机错则在 invisibility 之前就被秒。"
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 9923
      name: "Hail of Blades"
      icon_path: "perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png"
    primary_slots:
      - { dd_id: 8139, name: "Taste of Blood", icon_path: "perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "主系 Domination + Hail of Blades:R 进场后立刻 3 次极速 auto-attack,把等离子层数和 Kraken Slayer 真伤前置打满。Taste of Blood 提供线上续航,Sixth Sense 暴露守卫,Ultimate Hunter 缩短 R 的冷却。"
    secondary_rationale: "副系 Precision:Triumph 在 takedown(击杀或助攻)时回 12% 已损 HP,把 R-into-fight 转为安全脱出。Coup de Grace 对 40% HP 以下敌人额外造成 8% 伤害。"
    secondary_alternative: "对位高消耗下路 (Caitlyn + Lux,Ezreal + Karma) 时,把副系换成 Resolve,带 Second Wind(被英雄打受伤时回血)与 Overgrowth(吸收小兵转为额外 HP)以补线上续航。"
matchup_draft:
  pick_into:
    - examples: ["caitlyn", "ashe", "sivir"]
      archetype: "无位移的 immobile 射手"
      reason: "一旦 Kai'Sa 在 5 层等离子时进入 R 的射程,无位移 ADC 没法躲开 dash + Q 爆发。他们必须在没有任何 reposition 工具的情况下熬过第一波 all-in(以击杀为目标的全压交换)。"
    - examples: ["senna", "kog-maw"]
      archetype: "缺乏逃生的后期 scaling carry"
      reason: "W 射程 3000 单位且暴露视野 4 秒 — Kai'Sa 在他们威胁射程之外把他们从兵线上消耗,等离子被 ruptured 的瞬间用 R 进入。"
    - examples: ["sona", "soraka", "yuumi"]
      archetype: "脆皮且无硬 CC 的辅助型 enchanter"
      reason: "这些辅助没有眩晕或击飞来 peel(保护后排,赶走扑入的敌人)。Kai'Sa R 上 ADC 之后,辅助没有任何手段在进化 E 的 invisibility 启动后中断 all-in。"
  counterpicks:
    - examples: ["draven", "lucian"]
      archetype: "前期 auto-attack 伤害更高的对线压制"
      reason: "两人都能在 Q 进化阈值之前的 1-3 级直接压住 Kai'Sa 的换血。Draven 的强化斧头与 Lucian 的双发被动在 Kai'Sa 还没成型前的短窗口里全胜。"
    - examples: ["leona", "nautilus", "pyke"]
      archetype: "拥有点选 CC 的硬开辅助"
      reason: "Kai'Sa 在 R 之前没有位移,而 R 又必须有等离子层数。Leona 的 E 或 Nautilus 的 Q 在她还没叠出一层等离子前就把她在线中锁死,连环 CC 在进化 E 的 invisibility 上线之前就把她带走。"
    - examples: ["vayne", "twitch"]
      archetype: "三件套后 DPS 反超 Kai'Sa 的后期 hyper-scaler"
      reason: "Vayne W 的真伤与 Twitch Expunge 在双方都成型 3 件套后增长得比 Kai'Sa 的混合 scaling 更陡。Kai'Sa 必须在 30 分钟前结束比赛,否则相对伤害下滑。"
---

## 概述

Kai'Sa 是一名 hybrid 射手:她不是只堆一项数值,而是同时按照 AD(auto-attack 伤害)和 AP(技能伤害)成长。她也是唯一一名 ADC(attack damage carry:后期会成长为团队主输出的远程 auto-attacker),其技能会在跨过隐藏的装备阈值时字面意义地"自动升级":100 额外 AD 进化 Q,100 AP 进化 W,60% 额外攻速进化 E。她的出装顺序比任何其他射手都更关键 — 顺序错就意味着某个进化永远不触发,而没有进化 E(没有 dash 上的 invisibility)的 Kai'Sa 只是半个英雄。

她的运营核心是一道叠层的谜题:每一次 auto-attack 都会在目标身上叠等离子,一旦目标累积到 5 层(或被等离子完全 ruptured),**R** 就解锁为飞向该目标的远程突进。辅助的 CC(Crowd Control:把敌人钉在原地的眩晕、减速、束缚)能免费加速这个计数。线上她用 3000 单位射程的 **W** 进行 poke(远程小段消耗,在不投入战斗的前提下慢慢削血);团战(围绕 Drake、Baron 等中立资源 — 击杀后给团队 buff 的中立怪物 — 展开的 5v5)中她保持在最大 AA 距离,直到敌方后排目标被 chip-killed,再用 **R** + 进化 **E** 的 invisibility 进入收割。这个英雄的天花板就在 **R** 的目标选择。

## 推荐出装

**Starting items:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade**(少量 AD + lifesteal — 把所造成伤害的一部分回成血)+ 1 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**。

**Core items(按顺序):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — 第一个 power spike(英雄做出某件装备后明显变强的瞬间)。提供 AD + 攻速;Bring It Down 被动每第三次攻击附加额外真伤,把伤害前置到 R 进场后的短爆发窗口。
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — 攻速鞋。把你推向进化 E 所需的 60% 额外攻速阈值。
3. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — 给每次 auto-attack 附加两支侧翼箭并叠加更多攻速。侧翼箭会给附近敌人附加等离子,因此团战中你只 AA 一个目标也能在敌方全队身上叠等离子。这件装备完成 E 的进化。
4. ![Guinsoo's Rageblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3124.png) **Guinsoo's Rageblade** — 在一格栏位中同时提供 AD、AP 和攻速。是跨过 100 AP 阈值进化 W(冷却返还 + 每次施放附加 4 层等离子)的最便宜方式。每第三次 AA 触发 Phantom Hit 再加一段 on-hit 伤害。
5. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — 后期暴击(critical strike:auto-attack 触发 ~175% 伤害的概率)倍率装。配合 Runaan's 的两支额外箭,每次 AA 同时滚 3 次暴击判定。

**Situational items:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — 对位高 HP/护甲堆叠 (Cho'Gath, Sion, Malphite, Ornn)。如果敌方有 2 名以上坦克,作为第五件替换 ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge**。
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — 对位高回血阵容 (Soraka, Vladimir, Aatrox)。附加 Grievous Wounds(让敌方所受治疗减半的状态)。
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — 对位重 AP 爆发 (Syndra, Veigar, Brand 辅助 — burst mage 一套连招就能在 1-2 秒内把你抹掉)。魔抗 + 30% HP 以下护盾,为你换出第二段 R 的逃生时间。
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — 对位高消耗。lifesteal 在战中回血;溢出治疗会转为临时护盾保留。
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — 对位刺客或 diver (Zed, Kha'Zix, Talon — 专门设计来扑后排的英雄)。Ghost 被动让你在 kite(边攻击边后退)时穿过敌方小兵和英雄。

**Boots:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** 是唯一正确选择。攻速直接驱动 E 的进化以及 R 后多导弹 Q 的 DPS。

**Skill order:** 先满 **Q**(主输出,进化收益最大)。然后满 **E**(更多冷却缩减与更长攻速窗口)。最后满 **W**(只是工具:长射程 + 等离子叠加,但每点技能基础伤害是三技能里最低的)。**R** 在 6、11、16 级各点一次。

**Runes:** 主系 **Domination**(爆发 AA 系)带 **Hail of Blades**(对英雄开始 AA 时立刻 3 次极速攻击)、**Taste of Blood**(每约 20 秒一次,对英雄造成伤害时回 18-30 HP)、**Sixth Sense**(每约 75 秒一次,自动揭示一个敌方守卫)、**Ultimate Hunter**(随你完成 takedown,把 R 的冷却最多缩减 25%)。副系 **Precision** 带 **Triumph**(takedown — 击杀或助攻 — 时回血)与 **Coup de Grace**(对 40% HP 以下敌人造成额外伤害)。

## 关键对线

- **Caitlyn:** 1 级时射程把你压得死死的(650 AA 对 525)。站在自家兵线后,只在她放置陷阱时上前一步(放陷阱时她处于 animation-locked)。安全 power-farm(只专注吃兵线金币、不冒险),直到 ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** 成型;之后只要能 R 进入,就用 W 寻找跨地图 pick。
- **Draven:** 直接的 AA 对拼必输 — 他的 Q 斧头每次 AA 都比你的普攻打得更高。避免 1 换 1;只在他的斧头掉到地面后才 commit(2.5 秒内不接斧头就会消失)。在 ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** 成型之前,**W** 只用作消耗工具。
- **Lucian:** 6 级后输给 Kai'Sa,但在 2-5 级用双发被动压你。利用小兵躲他的 **Q**,把 **E** 留作紧急 disengage(打断对方全压交换的技能)。在 6 级前用塔下补刀维持线权,然后在他下一次失误时寻找 all-in。
- **Vayne:** Kai'Sa 前期赢线(Vayne 在三件套之前几乎是近战)。一有机会就 push 兵线(把己方小兵推向她的塔),每个冷却用 **W** 进行 harass(用小段伤害 chip 削她的 HP)。25 分钟之后她比你成长更快,所以必须在中期结束比赛,否则局势会向她倾斜。
- **Jhin:** 远程 poke 对位。他的 **W** 是 3550 单位的减速束缚;如果先打到小兵就会无视你的闪避。站在自家第一排小兵后面,绝不在他换弹窗口内换血 — 满弹时他最强,第 4 枪后的 2.5 秒最弱。

## 强势期与胜利条件

- **6 级:** 第一段 **R** 解锁对 chip-killed 的线上目标的 pick(在团战外解决一个落单敌人) 尝试。先用 **W** + 2 次 AA 命中敌方 ADC,等他上前 last-hit(给小兵最后一击的 auto-attack)的瞬间用 **R** 突进。
- **![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer 成型(~12-14 分钟):** 线权翻盘。可以用 Q shove(把兵线快速推过去),然后 roam(离开自己路去支援队友)做小龙跨地图配合或中路 skirmish(2-3 人在河道或野区的小冲突)。
- **Q 进化(~22-24 分钟,![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer + ![Guinsoo's Rageblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3124.png) Guinsoo's Rageblade 成型后):** Q 从 6 枚变 12 枚 — 对单一英雄的爆发几乎翻倍。从此以后每个资源点都强行开团。
- **E 进化(Berserker's + Runaan's + Guinsoo's 完成):** E 现在引导期间提供短暂 invisibility。这就是 R 进场被秒和 R 进场拿到人头之间的差别 — invisibility 让你在 dash 后约 0.5 秒不可被选中,足够你躲开后续 CC。

## 常见错误

- **没有等离子层数就放 R。** R 需要目标身上有 5 层等离子。如果对一个 0-2 层的目标按 R,技能不会发动,直接进入完整冷却。永远先 W 再 AA,看清目标 HP 条上方的等离子指示器,再 commit R。
- **满血就 R 进敌方阵中。** R 是 finisher,不是开团技。R 给的护盾很小(~110 + 25% 额外 HP)且只持续 2 秒 — 敌方前排还在的话你会瞬间被秒。至少满足以下任一条件再进:目标 40% HP 以下、敌方关键 CC 在冷却、或己方已经压上敌人。
- **没视野就过推兵线。** Kai'Sa 在 22 分钟之后 E 进化前没有自带逃生。如果你在辅助没有插好 tribush(挡视野的小草丛)与河道时把线推过中路河道,敌方打野会免费拿你人头。
- **为了更肉的鞋子跳过 ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) Berserker's Greaves。** 面对 AD 阵容时 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** 看上去很有诱惑力,但它会拖慢进化 E 所需的 60% 攻速阈值。没进化 = 没 invisibility = R 等于送命。
- **把 E 留给主动开团。** E 的核心价值是战斗中的 Ghost(穿过单位)+ 攻速短窗口。E 要在 R **之后**按,不是之前 — 进化 E 的 invisibility 在引导开始时就生效,所以站在安全位置施放就浪费了那段免选中帧。

## 进阶技巧

**flash R** 收割技巧的方向和 Kai'Sa 的常规打法正好相反。当一个残血的敌方 ADC 正逃向 fog of war(你目前看不到的地图区域),按常规 **R** 反而会让你 dash 出位时,先朝他用 **Flash**(让你向所选方向瞬移 400 单位的召唤师技能)进入 R 射程,然后立刻按 R。这套会消耗 Flash,但在高分段把"差点逃掉"变成"必杀"。诀窍:在 Flash 之后约 0.1 秒之内通过按住 R 键来缓冲 R 的施放 — 联盟的输入缓冲会在 Flash 落地的瞬间触发 R,这样敌人根本看不到突进进来。
