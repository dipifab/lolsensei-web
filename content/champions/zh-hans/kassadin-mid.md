---
title: "Kassadin Mid Build & Guide — Patch 16.9"
slug: "kassadin-mid"
language: "zh-hans"
patch: "16.9"
champion: "kassadin"
role: "mid"
last_updated: "2026-05-05"
description: "League of Legends 英雄联盟 16.9 版本 Kassadin 卡萨丁中单完整攻略:后期 scaler 出装顺序、关键对线思路、强势期节奏把握、新手常见错误规避以及进阶魔法护盾运用技巧。"
quick_learn:
  champion_dd_id: "Kassadin"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Assassin / Late-game Scaler"
  abilities:
    - key: "P"
      name: "Void Stone"
      description: "被动:Kassadin 受到的法术伤害降低,并忽略单位碰撞(可以直接穿过小兵和英雄)。"
      dd_spell_id: "Kassadin_Passive"
    - key: "Q"
      name: "Null Sphere"
      description: "单体技能:法术伤害 + 打断引导。为 Kassadin 提供 1.5 秒 magic shield — AP 法师消耗的对策。"
      dd_spell_id: "NullLance"
    - key: "W"
      name: "Nether Blade"
      description: "被动:普攻附带额外法术伤害。主动:下次普攻强化,返还已损失的法力(对英雄返还更多)。"
      dd_spell_id: "NetherBlade"
    - key: "E"
      name: "Force Pulse"
      description: "扇形 AOE 减速 + 法术伤害。附近每次施法都会累积充能(自己的或敌人的都算)。需要充能才能释放,作为终结技使用。"
      dd_spell_id: "ForcePulse"
    - key: "R"
      name: "Riftwalk"
      description: "短距离闪现,冷却很低。数秒内每次连续施放会让法力消耗翻倍并附带额外伤害,最多叠 4 层。"
      dd_spell_id: "RiftWalk"
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
    - { dd_id: "6657", name: "Rod of Ages" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3135", name: "Void Staff" }
  situational_items:
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "对线后 11 级超神阵容:AP + ability haste + 移速,连续 Riftwalk 持续追击 squishy 后排"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "对单体魔法控制(Ahri 魅惑、Lissandra R、Twisted Fate 眩晕),会打断你的 Riftwalk 节奏"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "对回血叠加阵容(Soraka mid、Vladimir、Dr. Mundo top):施加 Grievous Wounds,治疗效果减半"
    - dd_id: "4645"
      name: "Shadowflame"
      against: "对带护盾的 squishy carry(Riven、Yasuo 被动):R+Q+E 终结额外爆发"
  base_combo: ["R", "Q", "AA", "E"]
  win_condition: "撑过对线期到 11 级并完成首件装备,然后 snowball(把小优势滚成大优势):R 切 squishy carry,Q+AA+E 秒人,队友 peel 之前 R 撤退。"
  weakness: "对线极其惨烈:基础伤害低、射程短、9 级前没有清线能力。爆发法师和远程消耗会把你压在塔下,在你成型之前就把血量磨空。"
  runes:
    primary_tree: "Inspiration"
    primary_tree_dd_id: 8300
    keystone:
      dd_id: 8369
      name: "First Strike"
      icon_path: "perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png"
    primary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
  primary_rationale: "主系 Inspiration:First Strike 在 R-engage 的后期爆发窗口奖励额外金币和伤害。Magical Footwear 省下 350 金币加速首件,Biscuit Delivery 弥补对线期法力池薄弱,Cosmic Insight 降低召唤师技能冷却,小规模交战 Flash 频率更高。"
  secondary_rationale: "副系 Sorcery:Manaflow Band 必带 — 否则对线期 Q 消耗会让你 9 级前法力枯竭。Transcendence 把 ability haste 推过 40 %,降低 Riftwalk 冷却,团战中能连开 3-4 次 R 而不是 2 次。"
  secondary_alternative: "对线 6 级前完全压制你补刀的远程消耗法师(Xerath、Vel'Koz)时,把 Sorcery 换成 Resolve,带 Second Wind(对消耗的被动回血)和 Overgrowth(生命成长),撑到成型为止。"
matchup_draft:
  pick_into:
    - examples: ["veigar", "annie", "vladimir"]
      archetype: "无位移的低机动法师"
      reason: "11 级后 Riftwalk 冷却 2 秒:闪到他们头上,Q 打断施法,E 减速,在他们打出完整爆发连招前 AA 终结。"
    - examples: ["lux", "syndra"]
      archetype: "靠技能预读起手且无逃生的法师"
      reason: "他们的伤害依赖远程铺垫(Q 束缚、眩晕叠加);Kassadin 后期的 R 能在连招中横移躲技能,然后用一次他们无法反制的闪现贴脸。"
    - examples: ["taliyah", "azir"]
      archetype: "远程区域封锁型法师"
      reason: "6 级前他们压你,但 11 级后 Q 的 magic shield + R 的机动性化解了他们的风筝工具。游戏拖久,他们的 AOE 浪费在一个无法锁定的目标上。"
  counterpicks:
    - examples: ["xerath", "vel-koz", "zoe"]
      archetype: "远程消耗法师"
      reason: "他们在你 Q 射程(650)外消耗,贯穿整个 6 级前阶段。Q 的 magic shield 有用但不回血 — 6 级时你已经只剩半血,无法 all-in。"
    - examples: ["talon", "zed"]
      archetype: "前期 AD 刺客"
      reason: "他们在 14 分钟左右达到 2 件套强势期,而 Kassadin 还在第一件。游走边路惩罚 Kassadin 的慢成型 — 比赛在你的后期到来前结束。"
    - examples: ["pantheon", "yasuo"]
      archetype: "高 all-in 压制力的对线霸主"
      reason: "他们 2-3 级 all-in(Pantheon Q+W 眩晕、Yasuo Q-风墙-击飞)能在你 Q 满级前打空血量。Q 的 magic shield 对物理伤害无效。"
---

## 概述

Kassadin 是一个 AP assassin(贴脸切单的法师,而不是远程消耗类型),为后期打造。他的核心是 **Riftwalk (R)**:一次冷却极短的短距离闪现,在 16 级达到 3 级时成为游戏中最强的位移工具。代价是惩罚性的对线期:射程短(**Q** 650),9 级前无清线,基础伤害在 6 级前几乎输给所有中单的 all-in(双方拼到死的全提交交换)。中路适合他,因为河道是 R 上线后通往 scuttle 和边路最短的通道 — 但你得先撑过 11-13 分钟。

游戏计划很简单:6 级前不送,11 级带一件套到达,然后开始猎杀 squishy carry。技术含量在 **Riftwalk** 的法力管理上(7 秒内每次施放法力翻倍,所以没有 Tear 类装备时一次团战 4 次 R 是不可能的),以及在团战开始前用自己的技能叠 ![Force Pulse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/ForcePulse.png) **Force Pulse (E)** 的层数。

## 推荐出装

**Starting items:** Doran's Ring + 2 Health Potions。Doran's 的法力比 Doran's Shield 的初始血量更重要:你要在能够时用 **Q** 远程补刀。

**Core items(顺序):**

1. ![Rod of Ages](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6657.png) **Rod of Ages** — Kassadin 全游戏最佳的法力 + 血量 + AP 成长装备。10 分钟后 Eternity 被动每升级回一大块血,撑过对线期。首件完成。
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 固定 magic penetration,对 squishy 中单/ADC 几乎永远是正确选择。
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 35 % AP 倍率。Q+E+AA 连招伤害直接翻倍。
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — armor + AP + active stasis。让你 R 进后排,如果对方 peel 就 stasis,结束后 R 撤退。
5. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 对 MR 叠加的 magic penetration。一旦优先目标购买 ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** 或 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** + 一件 MR 装就必出。

**Situational items:**

- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — 对你 11 级后超神的阵容。AP + ability haste + 移速:Riftwalk 连续更快,切入后能粘住 squishy 后排。
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 对会打断 **R** 节奏的单体魔法控制(Ahri 魅惑、Lissandra R、Twisted Fate 眩晕)。
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 对回血堆叠阵容。造成伤害时施加 Grievous Wounds(让受到治疗减半的负面效果)。
- ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 对买护盾的 squishy carry。血量阈值被动(目标低于 ~35 % HP 时触发的被动)正好契合 **R+Q+E** 终结。

**Boots:** 默认 Sorcerer's Shoes。对 AP + 强控阵容(敌方 2 个以上眩晕/束缚)换 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**。

**Skill order:** 先升 **Q**(伤害最高、便宜的法力护盾),再升 **E**(E 升满后 9 级解锁清线),最后升 **W**。**R** 在 6、11、16 级各点一级。

**Runes:** 主系 **Inspiration** 配 **First Strike**、**Magical Footwear**、**Biscuit Delivery**、**Cosmic Insight**。副系 **Sorcery** 配 **Manaflow Band** 和 **Transcendence**。对线远程消耗对位时把 Sorcery 换成 **Resolve**(Second Wind + Overgrowth)。

## 关键对线

- **Xerath / Vel'Koz:** 他们的 Q 射程比你长 200+ 单位。只在最大射程用 **Q** 补刀,吃下消耗,绝不推过河道。在他们技能命中前的半秒释放 ![Q (Null Sphere)](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/NullLance.png) **Null Sphere** 护盾 — magic shield 能挡掉大部分伤害。
- **Zed:** 6 级前避免 all-in。**R** 解锁后,引诱他的 **R** 标记,然后 Riftwalk 闪躲回弹伤害。如果他已经领先(4+ 击杀),第二件买 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** 而不是 Deathcap。
- **Veigar:** 6 级前势均力敌,11 级后碾压。11 级前留在他 **E** 牢笼范围外;一旦你 R 冷却到 2 秒,从侧面 Riftwalk 穿进去抓他(牢笼角是开的,不是完整的墙)。
- **Ahri:** 游走优先权竞赛。她法力低时推线,跟她游走。她的魅惑会在闪现途中打断你的 **R** — 如果她是 carry 威胁,第四件出 ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil**。
- **Yasuo:** 强力的前期对线霸主。不要在兵线里普攻(他的 **E** 会跳到你的兵上免费消耗)。靠后站,让他推,用普攻仇恨把兵线在自家塔附近 freeze。撑到 6 级再开始 R+Q 交换。

## 强势期与胜利条件

- **6 级:** 解锁首次 **Riftwalk**。现在能闪过墙 — 从 Krug 坑、Raptor 墙、龙坑边沿逃 gank。R 1 级伤害低,先别 all-in。
- **![Rod of Ages](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6657.png) Rod of Ages 完成(~ 12-14 分钟):** 第一个重要的血量/法力垫。对线期可以撑住;趁敌方中单技能交完打短交换。
- **11 级:** **R** 第二级把冷却砍到 3.5 秒。真正的 Kassadin 上线 — 能连开 2 次 R 还能活,或 R-Q-E-AA-R 撤退秒掉脆皮。从这里开始强行团战。
- **16 级 + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap(~ 24-28 分钟):** R 冷却 2 秒,再叠 AP 成长。任何没 MR 的脆皮一发秒,一次团战连开 3-4 R。强行打 baron 和 elder dragon 团 — 后期 Kassadin 稳赢。

## 常见错误

- **想赢对线。** Kassadin 设计上就是中路最弱的前期对线者。如果你去搏 3 级 all-in,会死、落后、永远到不了强势期。补刀、吃消耗、活到 11 级 — 这就是胜利条件。
- **小规模交战狂按 Riftwalk。** 7 秒内每次施放法力翻倍。连按 4 次 R 烧掉 600+ 法力 — 团战打到一半没 Q 没 E。第 3 次 R 之前看一眼法力条。
- **为完美扇形憋着 E。** ![Force Pulse](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/ForcePulse.png) **Force Pulse** 靠附近施法充能(自己的和敌方的都算)。团战前在兵线上释放一次 Q 把 E 叠到 ready,然后开打。E 没充能就开战等于扔掉减速终结技。
- **R-engage 没有撤退计划。** Riftwalk 射程短(500)。如果你闪到后排 ADC 而队友没跟,peel 在 R 转好之前就把你吃了。开第一次 R 之前永远先想好第二次 R 的方向(往哪 R 出去?)。
- **在 Rod of Ages 之前买 Deathcap。** Deathcap 3600 金币没血没法力 — 先买它意味着任何团战都在 AP 起作用前就死。Rod of Ages(3700g、+400 血、+400 法力)是让 Deathcap 真正能用的生存装。

## 进阶技巧

把 **Q** 当作敌方技能前摇前的 magic shield 缓冲器,而不只是消耗工具。Null Sphere 的 1.5 秒 magic shield 吸收固定数值的法术伤害 — 在 Veigar **W**、Lissandra **R**、Annie **R+Tibbers** 命中前的半秒释放,你能挡掉他们的大部分爆发。在训练模式对 Veigar 电脑练习时机:护盾必须在 **技能命中的瞬间** 处于激活状态,而不是在他们开始施法之前。这一个技巧就把对线 0/3 的 Kassadin 玩家和对线 0/0 顺利成型的玩家分开了。
