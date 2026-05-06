---
title: "Fiddlesticks 打野出装与攻略 — Patch 16.9"
slug: "fiddlesticks-jungle"
language: "zh-hans"
patch: "16.9"
champion: "fiddlesticks"
role: "jungle"
last_updated: "2026-05-02"
description: "League of Legends Patch 16.9 Fiddlesticks 打野完整攻略:AP 核心出装、Crowstorm 开团时机、关键对线应对、强势期节奏、新手常见错误,以及一条专业进阶技巧。适合想精通这位高伤害刺客型打野的玩家。"
quick_learn:
  champion_dd_id: "Fiddlesticks"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Mage / Specialist"
  abilities:
    - key: "P"
      name: "A Harmless Scarecrow"
      description: "饰品栏变成假人充能。放置假稻草人提供视野;敌人看见会被短暂 fear,假人随即爆炸。"
      dd_spell_id: "Fiddlesticks_Passive"
    - key: "Q"
      name: "Terrify"
      description: "锁定单个敌人。在 unseen 状态用技能伤害敌人也会自动触发 Terrify,使其朝远离你的方向逃跑 1-2.5 秒。"
      dd_spell_id: "FiddleSticksQ"
    - key: "W"
      name: "Bountiful Harvest"
      description: "持续施法,吸取附近敌人 HP (回血)。结束时造成额外处决伤害。野区清线与续航的核心技能。"
      dd_spell_id: "FiddleSticksW"
    - key: "E"
      name: "Reap"
      description: "宽锥形回旋镖镰刀:命中所有敌人减速,中央直线上的敌人被沉默。来回打两次。"
      dd_spell_id: "FiddleSticksE"
    - key: "R"
      name: "Crowstorm"
      description: "1.5 秒读条后闪现到目标位置,在 Fiddle 周围 5 秒内每秒造成 AOE 伤害。最佳从战争迷雾或墙后施放。"
      dd_spell_id: "FiddleSticksR"
  skill_order:
    - { level: 1, key: "W" }
    - { level: 2, key: "E" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "W" }
    - { level: 5, key: "W" }
    - { level: 6, key: "R" }
    - { level: 7, key: "W" }
    - { level: 8, key: "E" }
    - { level: 9, key: "W" }
    - { level: 10, key: "E" }
    - { level: 11, key: "R" }
    - { level: 12, key: "E" }
    - { level: 13, key: "E" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3157", name: "Zhonya's Hourglass" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "对位打断 R 读条的单体法术 CC (Lissandra R、Veigar E、Twisted Fate 黄牌)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "当 2 名以上敌人出魔抗装 (大约 200+ MR 阈值) 时替换"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "对位高回血阵容 (Aatrox、Soraka、Vladimir、Dr. Mundo) — 施加 Grievous Wounds"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "需要额外 Movement Speed 追击或从迷雾贴入 Crowstorm 范围时"
  base_combo: ["R", "Q", "E", "W"]
  win_condition: "从战争迷雾对资源点附近 2 名以上聚集的敌人放出 Crowstorm。Bountiful Harvest 收掉残血,Reap 的沉默压制反开团。"
  weakness: "1.5 秒 R 读条会被单体硬 CC、位移和 Cleanse/QSS 打断。失去迷雾的突袭性,开团动作被预读,队伍会把你风筝到外围。"
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8128
      name: "Dark Harvest"
      icon_path: "perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png"
    primary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8135, name: "Treasure Hunter", icon_path: "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png" }
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
    primary_rationale: "Dark Harvest 通过 Crowstorm 的 AOE 在聚集团战中快速堆叠。Sudden Impact 在 R 闪现位移时触发,提供额外法穿。Treasure Hunter 加速 Liandry's 成型。Ultimate Hunter 缩短 Crowstorm 冷却,让你在不同资源点之间连续放大。"
    secondary_rationale: "副系 Sorcery:Manaflow Band 解决前期野区 W 频繁释放带来的蓝量问题;Gathering Storm 在后期叠出强势期,与 Rabadon's Deathcap 完美契合。"
    secondary_alternative: "对位单体硬 CC 开团 (Lissandra、Malzahar、Veigar) 时把 Sorcery 换成 Resolve,带 Bone Plating (受到首次伤害后 5 秒减伤) 与 Revitalize (Bountiful Harvest 治疗量 +5%)。"
matchup_draft:
  pick_into:
    - examples: ["udyr", "warwick", "master-yi"]
      archetype: "没有侧翼绕后工具的发育型打野"
      reason: "他们随发育线性变强,但无法惩罚你 1-3 级的入侵。一旦你到 6 级,从迷雾里冒出的 Crowstorm 直接压制他们正面顶上的开团 — 因为他们没有施法前可用的逃命位移。"
    - examples: ["karthus", "ziggs", "xerath"]
      archetype: "抱团型不动炮台阵容"
      reason: "没有位移的后排法师会被一发侧翼 Crowstorm 直接秒掉,因为他们在读条结算前根本来不及位移出 AOE。"
    - examples: ["azir", "orianna", "viktor"]
      archetype: "无位移的控场法师"
      reason: "你的 R 闪现穿过他们的区域控制,在他们布置起手 CC 前先一步落点。从迷雾出现时,他们没有任何脱身工具。"
  counterpicks:
    - examples: ["lee-sin", "elise", "kha-zix"]
      archetype: "前期具备追踪压制的入侵型打野"
      reason: "他们在 2-3 级威胁你的野区,逼你打被动。Fiddle 6 级前没有逃生:被入侵跑不掉,且没铺好假人视野时清线很慢。"
    - examples: ["yasuo", "samira"]
      archetype: "带 Wind Wall / 投射物拦截的 Carry"
      reason: "Wind Wall 挡住你的 Q (单一投射物) 与大半个 Reap。他们在最关键的瞬间废掉你的开团施法,让 Crowstorm 读条变成空交。"
    - examples: ["lissandra", "malzahar", "veigar"]
      archetype: "点射硬 CC 法师"
      reason: "他们不需要操作就能打断你 1.5 秒的 Crowstorm 读条 — Lissandra R、Malzahar R、Veigar E 直接把你的开团变成空交大招与瞬秒。"
---

## 概述

Fiddlesticks 是一个伏击型打野,他的整套技能围绕一个动作设计:从战争迷雾中用 **Crowstorm (R)** 闪现进团战,趁敌方还在抱团时打出 AOE 爆发。出了这个窗口,他就是一个移动慢、没有位移、单挑弱、读条又长的大招法师 — 所以打赢与打输的差距几乎全在 *视野铺设* 与 *开团时机* (你在何时何地按下 R)。

游戏思路:用 **Bountiful Harvest (W)** 快速清野,在河道和敌方野区放置假人提供视野 (并在敌人看到假人时给予短暂 fear),然后在下一个资源点 (Drake 或 Baron) 附近找一个隐蔽的侧翼位置。当 2 个以上敌人聚集在资源点上时,用 **R** 闪入,落 **E** 制造减速 + 沉默,再用 **W** 与 **Q** 收掉逃跑的人。失去突袭性,整套技能就废一半 — Fiddle 是非常二元的英雄:要么布置打出 ace,要么大招直接交废。

## 推荐出装

**起始装备:** ![Emberknife](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1035.png) **Emberknife** (近战打野初始装,使惩戒对野怪造成额外伤害,并启动宠物任务) + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**。

**核心装备 (按购买顺序):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — Emberknife 任务升级 (大约 3-4 分钟野区累积足够 XP 后自动进化)。AP (Ability Power,提升法术伤害的属性) 爆发型同伴:在施放技能后的下一次普攻触发 ("proc") 一次法术伤害,正好与 Liandry's 的灼烧叠加。
2. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — 第一件成装。命中时按敌人最大 HP 百分比造成的灼烧 (随目标最大生命值缩放的伤害) 在每一段 Crowstorm AOE 上对坦克叠加,把大招变成团灭工具。
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 固定法穿。便宜、即时生效,中期前所有 AP 英雄的默认选择。
4. ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — Crowstorm AOE 跳完最后一段时立刻进入金身,躲过开团后立刻被集火的那一波。对面有 diver 或刺客时是必出。
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 后期乘数装 (+35% AP 加成)。AP 单件加成最高,使 Crowstorm 一发秒掉脆皮。

**情境装:**

- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 对位打断 R 读条的单体法术 CC (Lissandra R、Veigar E、Twisted Fate 黄牌)。护盾会替你挡掉一个想打断大招的技能。
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 当 2 名以上敌人出魔抗装时。
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 对位高回血阵容 (Aatrox、Soraka、Vladimir、Dr. Mundo)。施加 Grievous Wounds (减少敌方治疗量 40%)。
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — 需要额外 Movement Speed 追击或从迷雾贴入 R 范围时。

**鞋子:** 默认 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**。如果敌方有 2 个以上硬控且仅靠 Banshee's 不够,改 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**。

**加点顺序:** 主升 **W** (野区清线与续航),副升 **E** (团战减速 + 沉默),最后升 **Q**。**R** 在 6、11、16 级各点一级。

**符文:** 主系 **Domination**,带 **Dark Harvest**、**Sudden Impact**、**Treasure Hunter**、**Ultimate Hunter**。副系 **Sorcery** 带 **Manaflow Band** 与 **Gathering Storm**。对位重单体硬 CC 开团 (Lissandra、Malzahar、Veigar) 时把 Sorcery 换成 **Resolve**,带 **Bone Plating** 与 **Revitalize**。

## 关键对线

- **Lee Sin / Elise:** 前期入侵型打野。1 级别去争自家 buff 那一侧;跨地图开对面的反向 buff,让队友 leash (你的线上队友帮你打野怪几秒,让你少受伤),然后顺到河道蟹。河道里放一个假人侦查 gank,3 分钟前把自家野区入口都插上眼。
- **Karthus:** 比 scaling 的对决。他清得比你快,后期更强。你必须 6 级强行抓一波,或者带视野入侵他的野区;让他到 11 级后,他的全图大招会盖过你拿单一资源点带来的优势。
- **Yasuo bot 或 mid:** 风墙挡住 **Q** 的投射物与 **E** 中央的沉默直线。从侧面角度切入 Crowstorm,他就没办法用墙覆盖整个队伍;从一条不显眼的草丛侧翼绕后。
- **Zac:** 对位的镜像开团坦克,有 E 拉近距离。如果你在他 W 的读条期间命中你的 **E** 沉默,会废掉他的引爆时机;势均力敌的团战里,先放出 **R** + 沉默的一方会赢。
- **Master Yi:** 他用 **Q** 位移与大招 Highlander 突破你 **E** 的沉默 (CC-immune,免疫控制)。把 **Q** 留给 Highlander 之外的窗口去 fear 他;没有 fear,他后期的清场能把你的开团变成 1 换 3。

## 强势期与胜利条件

- **6 级 (第一次 Crowstorm):** 第一个抓人窗口。提前 30 秒在河道迷雾里铺好视野,然后走进去。塔下两人吃稳一发 R + E,基本就是双杀。
- **9 级 (W 满级):** 野区清线达到峰值速度,团战续航暴涨。这里强行打 Drake 团。
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes (约 16-18 分钟):** Crowstorm 的 AOE 现在能切穿坦克。强行打 Baron/Drake 团,寻找跨地图侧翼绕后机会。
- **16 级 + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap (约 28 分钟):** Crowstorm 一发秒掉所有没出魔抗装的脆皮。和队伍抱团强开下一个大资源点。

## 常见错误

- **没视野铺设就交 R。** 一个露在视野里、读条条已经亮起的 Fiddle,对面闪人就是免费一波。永远从草丛里、墙后、或没插眼的野怪营地里施放。一旦读条条暴露,他们走开 1.5 秒,你就白白损失 80 蓝和你唯一的开团技能。
- **队友离很远还自己开团。** Crowstorm 是团队开团技能,不是刺客单切技能。如果你的队友在 2 个屏幕外,你的大招最多打到 1 个敌人,你自己会被反打而死。按 R 之前先看队友位置。
- **不重视假人放置。** 假人提供视野和短暂 fear。不用就是浪费免费的视野,而且对方还不需要付 *任何成本* 去清掉它。每个资源点之前在河道铺一个。
- **用 Q 补野怪。** Q 是你团战中唯一的单体起手 fear。把它留给团战 — W 和 E 完全够清野怪。

## 进阶技巧

**Crowstorm** 的 1.5 秒读条会被任何位移或眩晕中断,但如果你在敌人正好踩入你藏身的草丛那一瞬按下 **R**,短暂的视野中断让他根本来不及在闪现落地前做出反应。在自定义房里练这个时机:藏在草丛里,等敌人贴到你身边,从他的 personal space (个人空间范围) 内按下 R。位移让你在整个 AOE 持续时间里黏在他身上,而一个从迷雾里直怼到脸上的 Fiddle 制造的恐慌,会让对面交出比游戏中任何其他开团都多的 Flash。
