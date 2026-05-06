---
title: "Evelynn Jungle Build & Guide — Patch 16.9"
slug: "evelynn-jungle"
language: "zh-hans"
patch: "16.9"
champion: "evelynn"
role: "jungle"
last_updated: "2026-05-02"
description: "League of Legends 英雄联盟 16.9 版本 Evelynn 伊芙琳打野完整攻略:Demon Shade Camouflage 隐身 gank 路径、Lich Bane 核心出装顺序、关键对线打野、版本强势期节奏与新手常见错误规避。"
quick_learn:
  champion_dd_id: "Evelynn"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Assassin / Stealth Jungler"
  abilities:
    - key: "P"
      name: "Demon Shade"
      description: "脱战时 Evelynn 进入 Demon Shade 状态。低血量时回血,6 级起获得 Camouflage — 对眼位与小半径外的敌人隐身。"
      dd_spell_id: "Evelynn_Passive"
    - key: "Q"
      name: "Hate Spike"
      description: "Lasher 触手攻击最近的敌人,然后向周围目标连射最多三轮尖刺。是打野清野的主力技能,也是连招中的主要 DPS 来源。"
      dd_spell_id: "EvelynnQ"
    - key: "W"
      name: "Allure"
      description: "对一名敌人施加诅咒。短暂延迟后,Evelynn 的下一次普攻或技能会附加 charm 魅惑并削减目标魔抗。在 Demon Shade 状态下施放才是最干净的开团 setup。"
      dd_spell_id: "EvelynnW"
    - key: "E"
      name: "Whiplash"
      description: "向目标突进造成魔法伤害并获得短暂移速。在 Demon Shade 状态下变成长距离扑击,附带额外伤害与普攻重置。"
      dd_spell_id: "EvelynnE"
    - key: "R"
      name: "Last Caress"
      description: "短暂 untargetable 不可被选取窗口后,向前方扇形释放巨额魔法伤害,然后向后位移。对 30% 血量以下敌人造成额外伤害 — 你的处决技。"
      dd_spell_id: "EvelynnR"
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
    - { level: 10, key: "E" }
    - { level: 11, key: "R" }
    - { level: 12, key: "E" }
    - { level: 13, key: "E" }
    - { level: 14, key: "W" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "3100", name: "Lich Bane" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3135"
      name: "Void Staff"
      against: "敌方 2 人以上出任意魔抗装时 — 提供随对方魔抗成长的百分比法穿"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对面有惩罚你 R 施法动作的单体控制时 (Veigar 笼子、Lissandra R、Malzahar R)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "敌方阵容堆回复时 (Soraka、Vladimir、Dr. Mundo、Aatrox) — 提供 Grievous Wounds 减半治疗"
  base_combo: ["W", "AA", "E", "Q", "R"]
  win_condition: "6 级后用 W charm 接 R 处决点掉孤立目标。利用 Demon Shade 隐身入侵和 gank 而不触发视野警报。把打野经济优势滚雪球,小规模团战集火脆皮。"
  weakness: "6 级前完全没有 gank 压力 — 没有隐身,没有 charm 距离。被真眼和兵线优先权强力克制。敌方抱团带保护时,根本碰不到 carry。"
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8128
      name: "Dark Harvest"
      icon_path: "perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Domination 主系:Dark Harvest 通过孤立点杀积累层数 — Evelynn 的核心套路。Sudden Impact 在 R 位移和 W charm 后触发提供爆发。Sixth Sense 揭示敌方眼位,保持隐身价值。Ultimate Hunter 缩短 R 冷却。"
    secondary_rationale: "副系选 Sorcery 而非 Inspiration 或 Resolve:Evelynn 需要纯法强成长一套秒掉 carry,而不是工具人属性。Manaflow Band 维持清野期 Q 的法力消耗,Gathering Storm 每 10 分钟提供免费法强,强化后期 W+R 一套秒杀。"
    secondary_alternative: "如果敌方阵容有 4 名以上脆皮且保护薄弱,可把 Sorcery 换成 Precision,搭配 Presence of Mind(参与击杀回蓝)和 Coup de Grace(40% 血量以下 +8% 伤害),让连续处决更稳定。"
matchup_draft:
  pick_into:
    - examples: ["jinx", "twitch", "kog-maw"]
      archetype: "无位移超级 carry"
      reason: "没有突进或闪现的 carry 会被 W charm 接 R 一秒钟内带走:他们没有任何工具能在你的不可被选取扇形落地前离开范围。"
    - examples: ["soraka", "yuumi", "seraphine"]
      archetype: "无逃生的后排奶妈"
      reason: "通过 Demon Shade 隐身切到敌方后排时,这些辅助还来不及交出防御技能就被 W+R 一套秒杀。"
    - examples: ["master-yi", "karthus", "amumu"]
      archetype: "慢速发育型打野"
      reason: "想发育成型的打野:Evelynn 入侵抢野怪,6 级后用隐身 gank,逼对方防守而不是发育。"
  counterpicks:
    - examples: ["lee-sin", "kha-zix", "rengar"]
      archetype: "前期穿甲单挑型打野"
      reason: "Lee Sin 的 Q 和 Rengar 的扑击在 6 级前能拉近距离 — Evelynn 没隐身没 R 时,前期入侵和 1v1 都直接吃亏。"
    - examples: ["lulu", "tahm-kench", "morgana"]
      archetype: "保护 carry 的辅助"
      reason: "Lulu 的 R 让 carry 无敌,Tahm Kench 直接吃掉,Morgana 的 E 提供 Spell Shield:三者都能在 W+R 该秒杀的瞬间打断连招。"
    - examples: ["nautilus", "leona", "thresh"]
      archetype: "视野厚 + 强开团控制的辅助"
      reason: "他们一回家就买真眼,在线上看到 Demon Shade,在你 W charm 出来前就用控制链(Naut Q、Leona E+R)锁住你。"
---

## 概述

Evelynn 是 League 中唯一拥有随等级成长的内建隐身的英雄:从 6 级起 **Demon Shade (P)** 被动让她在脱战时获得 Camouflage,即敌人除非在她身边一个很小的半径内,否则看不到她 — 连真眼(敌方放置用来发现隐身的特殊粉色饰品)在完整距离上也无法发现她。她的整套定位都建立在这个机制上。她是一名魔法伤害刺客,6 级前没有真正的清线能力或对线压制力,但 **Last Caress (R)** 解锁的瞬间她就成为游戏中最可靠的点杀型打野(为在完整团战之外、一次只清除一个孤立敌人而设计的英雄):隐身走到敌方后排(队形后部,通常站着脆皮 carry — 高伤害低防御的英雄),用 **Allure (W)** 对 carry 施加 charm,在任何保护(队友保护 carry 的技能,例如 Janna 的护盾或 Lulu 的大招)反应过来之前用一套连招把她秒杀。

游戏思路简单到残忍:6 级前别死,在没有视野眼(队友放置用来看战争迷雾的小型隐形眼)的低血量兵线找一个 gank 机会,从那以后只要 **R** 转好,每次都猎杀一个孤立目标。技术体现在路径阅读(在哪些路线可以隐身走过而不触发眼位?)和入场时机(如果 carry 身边有 Cleanse 这种保护召唤师技能或 Lulu 这种保护型辅助,就别贸然交 **R** 入场)。如果你把前两次点杀滚成雪球(把早期优势转化为更多人头、金币、装备),敌方就会抱团,你用 ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** 成长(随装备和等级累积变强)到一秒爆射程,从隐身中关掉这局比赛。

## 推荐出装

**起始装备:** ![Emberknife](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1035.png) **Emberknife** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**。近战打野标准起手 — Evelynn 也不例外。

**核心装备(顺序):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — Emberknife 的任务进化(打野宠物吃够野怪后大约第 3-4 分钟自动进化)。AP(Ability Power,法术强度,放大魔法伤害的属性)爆发的搭档:在施法之后的下一次普攻上触发("proc")一次魔法伤害,与之后的 **Lich Bane** 完美衔接。
2. ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** — Evelynn 的标志性强势期。每次施法后下一次普攻附带巨额额外魔法伤害,加上 **W** charm 与 **E** 的普攻重置(让你立刻打出新的一次普攻、忽略攻速间隔的效果),让你能在不到一秒内连续触发两次 **Lich Bane**。
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 固定法穿(扣除目标固定魔抗,使技能伤害更高)。任何针对脆皮的爆发法师都通用。
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 额外法强与法穿;血量阈值被动(目标血量低于一个低阈值,大约 35% 时触发的被动)正好与你 **R** 的处决扇形对齐。
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 后期对全部 AP 的乘法加成。第四或第五件装备就是 Evelynn 进入"满血一秒秒掉 carry"区间的关键。

**情境装备:**

- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 当 2 名以上敌人出任意魔抗装备的瞬间。
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 对面有惩罚你 R 动作的单体控制时(Veigar 笼子、Lissandra R、Malzahar R)。Stasis 金身能覆盖 **R** 后的恢复帧。
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 敌方阵容堆回复时(Soraka、Vladimir、Dr. Mundo、Aatrox)。施加 Grievous Wounds 重伤,治疗效果减半。

**鞋子:** Sorcerer's Shoes 默认。![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** 只在敌方魔抗很低且队伍需要更高 **R** 使用率(更频繁施放)作为收尾时可以接受。

**技能加点:** 优先 **Q** 满级(打野清线和主要 DPS),其次 **E**(机动性和重置伤害成长),最后 **W**(冷却比技能等级更重要)。**R** 在 6、11、16 级各加一点。

**符文:** 主系 **Domination** 带 **Dark Harvest**、**Sudden Impact**、**Sixth Sense**、**Ultimate Hunter**。副系 **Sorcery** 带 **Manaflow Band** 与 **Gathering Storm**。属性碎片:Adaptive Force、Adaptive Force、Health Scaling。当敌方几乎全脆皮且你想要更稳定的处决时,把副系换成 **Precision**(Presence of Mind + Coup de Grace)。

## 关键对线

- **Lee Sin / Rengar(敌方打野):** 6 级前的入侵威胁。3 级不要争 scuttle 河蟹 — 用视野跟踪他们,安全打满野。一旦你到 6,对线翻盘:你隐身走进他们野区,gank 没插眼的兵线。
- **Lulu(敌方辅助):** 对刺客而言游戏中最强的保护。用假入场骗她的 **R**(开始 **W** charm 但她交大招就撤退),等 Lulu 大招进入冷却后再切 carry。
- **Tahm Kench(敌方辅助):** 你 **R** 落地的瞬间他用 **W** 把 carry 吃掉。等他把 **W** 用在别的地方(一波兵线、开团的坦克)再入场。如果他满蓝盯着自家 ADC,换个目标。
- **Karthus(敌方打野):** 发育竞速。他在野区发育上压你,你在点杀上压他。如果 Karthus 满装 16 级你输:他 **R** 没好就强制 gank,阻断他成长,30 分钟前结束比赛。
- **Pyke(敌方辅助):** 对你"低血处决"套路的硬克制。他的 **R** 也在低血时处决,他的游走还把你的打野路径置于视野压力下。比平时更早购买 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass**,用来躲过你入场后的他的处决窗口。

## 强势期与胜利条件

- **6 级(首次解锁 R):** 你的真正比赛从这里开始。Demon Shade 获得隐身,**R** 解锁,任何没有视野眼(队友放置用来看战争迷雾的小型隐形眼)的兵线都是免费击杀。朝着敌方血量最低的兵线走。
- **![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) Lich Bane 完成(约 12-14 分钟):** 从"需要 2 个技能击杀"到"对脆皮一套 W+AA+E+Q+R 直接击杀"的飞跃就在这件装备上。一完成就立刻去找点杀机会。
- **![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) Shadowflame(约 18-20 分钟):** 血量阈值被动与你 **R** 的处决扇形对齐。这件装备之后,任何 60% 血量以下的脆皮都是一套秒。
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap 上线(约 26-30 分钟):** 满血状态下对后排 carry 的全程一套秒射程。Deathcap 一完成就在 Baron 周围强制 5v5 — 你连招落地的瞬间队伍就 5v4 开打。

## 常见错误

- **因为队友插旗就在 6 级前 gank。** 你没有 charm 距离,没有隐身,没有任何能让敌人措手不及的东西。6 级前你应该清野并在等级压制的敌人身上反野。告诉路人:"6 级再 gank"。
- **在 Demon Shade 之外释放 W。** 当你可见时(战斗中或低血),敌人能看到 **W** 施法动画,可以用闪现提前躲掉 charm。永远从隐身走入再 gank,在 1100+ 距离释放 **W**。
- **把 R 当伤害技能而不是处决用。** **R** 对 30% 血量以下敌人造成额外伤害。在满血目标身上交掉浪费这个强势期 — 用 **W+E+Q** 连招开局,等他们跨过处决线再 **R**。
- **盯住人头不顾走位。** **R** 施法后会把你向后位移很长一段距离。如果你按下时身处敌方阵中,会位移到没用的地方。站位要让位移把你拉向己方队伍或战争迷雾(没有插眼的野区),而不是更深入敌方。
- **满血不愿回家。** Demon Shade 脱战时即使满蓝也会慢慢回血。如果你有 1300+ 金币能买伤害组件比如 ![Hextech Alternator](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3145.png) **Hextech Alternator** 或法力组件 ![Lost Chapter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3802.png) **Lost Chapter**,就回家。满血 0 金币转线就是浪费时间。

## 进阶技巧

![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** 双触发连招:**W** charm 落地后,用 **E** 取消普攻动作(Demon Shade 状态下的 Whiplash 自带普攻重置)。顺序为 **W → AA → E → AA → Q → R**。两次普攻分别消耗一次新的 **Lich Bane** 触发,因为 **E** 计入施法并重置普攻计时。对没有魔抗的脆皮,这套连招比大多数低段位 Evelynn 的懒人 **W → R** 起手伤害高出大约 1.5 倍,让你 3 件装备就能从满血秒掉 1800 血量的 carry,而不需要 4 件。
