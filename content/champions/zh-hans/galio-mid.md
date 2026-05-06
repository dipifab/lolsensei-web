---
title: "Galio Mid Build & Guide — Patch 16.9"
slug: "galio-mid"
language: "zh-hans"
patch: "16.9"
champion: "galio"
role: "mid"
last_updated: "2026-05-02"
description: "League of Legends 英雄联盟 16.9 版本 Galio 加里奥中单完整攻略:起始装备、AP-坦克核心出装、关键对线、强势期把握、新手常见错误规避以及 W 蓄力时机与 E 越前排选取后排目标等高阶技巧,一站式实战指南。"
quick_learn:
  champion_dd_id: "Galio"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Battlemage / Engage Tank"
  abilities:
    - key: "P"
      name: "Colossal Smash"
      description: "每隔几秒,Galio 的下一次普攻在命中时对小范围造成额外法术伤害。"
      dd_spell_id: "Galio_Passive"
    - key: "Q"
      name: "Winds of War"
      description: "两道风刃在目标点汇聚成龙卷风,持续造成法术伤害。主要清线和消耗工具。"
      dd_spell_id: "GalioQ"
    - key: "W"
      name: "Shield of Durand"
      description: "蓄力一个吸收法术伤害的护盾;释放时嘲讽附近敌人并造成伤害。蓄力很长,绝对不要空放。"
      dd_spell_id: "GalioW"
    - key: "E"
      name: "Justice Punch"
      description: "短暂后撤,然后向前突进,将路径上第一个命中的敌方英雄击飞。主要先手与拉近距离工具。"
      dd_spell_id: "GalioE"
    - key: "R"
      name: "Hero's Entrance"
      description: "标记一名队友;短暂延迟后,Galio 砸落到该队友位置,为范围内队友提供护盾并击飞敌人。"
      dd_spell_id: "GalioR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
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
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
    - { dd_id: "4629", name: "Cosmic Drive" }
  situational_items:
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "对位高血量前排 (Cho'Gath, Sion, Dr. Mundo 等两个以上坦克) — 百分比灼烧在持久战中越打越强"
    - dd_id: "3041"
      name: "Mejai's Soulstealer"
      against: "前期滚雪球时 (12 分钟前 3 杀以上) — 每层廉价法强奖励激进先手"
    - dd_id: "3137"
      name: "Cryptbloom"
      against: "核心目标买魔抗装时立即替换;搭配 Sorcerer's Shoes 形成混合穿透"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对位先手后跟进收割的刺客 (Zed, Talon) — 金身覆盖 R 后冷却的真空期"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "对位单体法术 CC,会打断你 W 蓄力 (Malzahar 压制, Lissandra R, Twisted Fate 黄牌)"
  base_combo: ["E", "AA", "Q", "W"]
  win_condition: "Riftmaker 成型后,从中路用 Hero's Entrance R 翻盘边路交战和 Drake 团战。团战中 E 进后排,落下 W 嘲讽,让前排集火被锁定的目标。"
  weakness: "W 蓄力很长 (1.5 秒),E 有短暂的后撤动作 — 两者都可被打断。机动性强的刺客和 DOT 法术消耗会绕过 W 护盾,因为 W 只吸收爆发,不防持续 tick 伤害。"
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8401, name: "Shield Bash", icon_path: "perk-images/Styles/Resolve/MirrorShell/MirrorShell.png" }
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8242, name: "Unflinching", icon_path: "perk-images/Styles/Sorcery/Unflinching/Unflinching.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "主系 Resolve: Aftershock 在 W 嘲讽或 R 击飞时触发,在被敌方集火时给你一波抗性爆发。Shield Bash 把 W 护盾转换为额外平A伤害,Bone Plating 吸收第一波爆发,Unflinching 提供韧性,让 CC 不会在你先手途中把你锁住。"
    secondary_rationale: "副系 Sorcery: Manaflow Band 撑住线上 Q 风暴消耗的蓝量 (Galio 在 Riftmaker 之前蓝耗很大),Transcendence 推高 Ability Haste 让 Q 与 E 在两次团战之间更快回转。"
    secondary_alternative: "对位高蓝耗持久战 (Cassiopeia, Cho'Gath) 这种血量数值战的对线,把 Sorcery 换成 Inspiration,带 Biscuit Delivery (6 级免费回血回蓝) 加 Cosmic Insight (闪现冷却减免 — R+闪现连招的捕捉潜力更强)。"
matchup_draft:
  pick_into:
    - examples: ["lux", "anivia", "veigar"]
      archetype: "无位移的炮台法师"
      reason: "Galio 的 E 击飞抹平他们赖以为生的射程优势,W 吸收 Lux R、Veigar R 这种长冷却技能的爆发。"
    - examples: ["ahri", "syndra"]
      archetype: "无续航的中距离爆发法师"
      reason: "他的 W 法术护盾砍掉他们大部分连招伤害;一旦爆发进入冷却,他们打不过一个 AP-坦克框架。"
    - examples: ["caitlyn", "ashe", "jhin"]
      archetype: "R 能够到的无位移下路 carry"
      reason: "Hero's Entrance 落在队友身上;无位移 ADC 逃不开击飞,你的下路可以合围拿掉。"
  counterpicks:
    - examples: ["akali", "zed", "fizz"]
      archetype: "多段位移的近距离刺客"
      reason: "Akali 的烟雾打断 W 的目标锁定,Zed/Fizz 的连续位移在 W 蓄力完成前就结束 trade — Galio 最好的 CC 建立在一个慢前摇上,他们能甩开。"
    - examples: ["cassiopeia", "malzahar"]
      archetype: "DOT 法术伤害与点选锁定"
      reason: "W 护盾吸收爆发,不防持续 tick 伤害;Malzahar 的 R 压制会在 Galio W 蓄力时锁住他,直接废掉整个先手工具。"
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall 使用者"
      reason: "Yasuo 的 Wind Wall 完全挡住 Galio 的 Q 风刃,移除他在线上唯一的远程压制工具。"
---

## 概述

Galio 是带坦克属性成长的 AP (ability power, 法术伤害) battlemage — 法强和血量都能让他变强。他的设计目标是打断敌方阵容并吸收他们砸向你 frontline (前排的坦克/战士) 的法术伤害。技能组短而响亮:**Winds of War (Q)** 用于清线与消耗 (远距离磨血),**Shield of Durand (W)** 是一个蓄力嘲讽 (强迫敌人攻击你一段时间) 兼法术护盾,**Justice Punch (E)** 把突进路径上第一个敌人击飞 (短暂浮空,类似一段短控),**Hero's Entrance (R)** 传送到队友头顶并附带击飞和护盾。他玩中路是因为需要中央位置才能威胁每条线的 R 联动。

游戏计划在 6 级前耐心,6 级后爆发。用 Q 推线,把 E 留给反先手或自己 gank 时拉近距离;R 一好,盯紧两边边路 — 上下任何团战都在你的射程内。技术表达体现在 W 蓄力时机 (释放打断关键引导技能 — Katarina R, Karthus R, Master Yi Q) 和 E 瞄准上 (突进只命中路径上的**第一个**英雄,所以你可以从侧路绕草丛挑后排目标)。

## 推荐出装

**起始装:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 个 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**。只有面对会逼你早回家的近战 Q-spammer 时才考虑 ![Corrupting Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2033.png) **Corrupting Potion**。

**核心装 (按顺序):**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — 第一件。提供法强、血量、ability haste (技能冷却缩减) 以及一段 omnivamp (按造成伤害的百分比回血,战斗越久越强),把持久战变成自给自足。Galio 的 W 嘲讽会强迫多个目标攻击他,正好喂养 omnivamp。
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 固定法术穿透 (从敌人魔抗中扣除一个固定数值,让你的法伤打得更疼)。除非敌方有 3+ 个 AD 威胁 (物伤英雄) — 那时换成 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**。
3. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — Q 每个 tick 触发减速。和 Riftmaker 配合让敌人无法脱离嘲讽范围,提供的血量也维持坦克身材。
4. ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — 移速与 ability haste。拉近 R 直接够不到的后排距离,降低 Q/E 冷却,让你在团战之间能再次先手。

**情境装:**

- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — 对位高血量前排 (Cho'Gath, Sion, Dr. Mundo 等两个以上坦克)。每个 Q tick 灼烧目标百分比血量。
- ![Mejai's Soulstealer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3041.png) **Mejai's Soulstealer** — 仅在前期取得击杀领先时 (你正在滚雪球 — 每个击杀让你更强,也更可能拿下下一个)。12 分钟前累积 3 杀以上数学才划算;一旦死一次掉层数,这件就废了。
- ![Cryptbloom](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3137.png) **Cryptbloom** — 一旦敌方核心目标买出 ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil**、![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature**,或战士做出 ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** 这类魔抗装,立刻替换。
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 对位先手后跟进收割的刺客 (Zed, Talon)。金身覆盖 W 与 E 进入冷却的真空期。
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 对位会打断 W 蓄力的单体法术 CC (Malzahar 压制, Lissandra R, Twisted Fate 黄牌)。

**鞋子:** 默认 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**。重 CC 阵容 (多段眩晕、束缚、魅惑) 选 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**;重平A阵容 (双 ADC, Master Yi) 选 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**。

**加点顺序:** 优先满 **Q** (主伤害与清线)。其次 **E** (降低先手冷却)。**W** 最后 — tick 伤害和护盾值随等级提升收益不大,远不如 Q。**R** 在 6、11、16 级各加一点。

**符文:** 主系 **Resolve** 选 **Aftershock**、**Shield Bash**、**Bone Plating**、**Unflinching**。副系 **Sorcery** 选 **Manaflow Band** 与 **Transcendence**。在蓝耗持久战对线把副系换成 **Inspiration** (Biscuit Delivery + Cosmic Insight)。

## 关键对线

- **Akali:** 硬对线。她的烟雾 (W) 让 Galio 的 W 与 E 失去目标锁定。保持 Q 最大射程,把 ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** 放进购物清单,用 R 去支援 — 她在边路做不到你的影响力。
- **Yasuo / Yone:** Wind Wall 完全挡住你的 Q 风刃。他们推出墙之前别放 Q,把 E 留作他们 all-in 时的反先手。早出 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** 撑过他们的平A窗口。
- **Lux:** 优势。直接走过她的 Q 束缚再用 E 突进上去 — 她的冷却太长不足以打持续 trade,W 还会挡掉她 R 的消耗伤害。
- **Cassiopeia:** 困难。她的 DOT 伤害绕过 W 的爆发吸收。6 级前别想 all-in;在塔下用 Q 补刀,等 6 级去支援。
- **Twisted Fate:** 支援节奏赛。他的传送和你的 R 射程相当。推线、在他 ult 进入冷却时给上下路示警,准备反 R 他的支援,而不是先发起自己的。

## 强势期与胜利条件

- **2 级:** Q + W 让你迎来第一波 all-in trade。在敌人踩到 Q 龙卷风时蓄力 W 并走进去 — 嘲讽强迫他对你普攻,Q 的 tick 完成击杀。
- **6 级:** **Hero's Entrance** 解锁边路影响力。强推线、给下路示警,寻找第一波 Drake 团战。
- **Riftmaker 成型 (~12-14 分钟):** Galio 成为真正的团战部件。在这里强开资源点 — R 进 W 进 E 的 omnivamp 让你能扛过敌方第一轮冷却并幸存。
- **三件装强势期 (~22-26 分钟):** 出齐 ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker**、![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** 与 ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** 后,龙卷风减速加 E 击飞能在风筝不掉你的后排上串起 1.5 秒以上的 CC。

## 常见错误

- **没目标就放 W。** 嘲讽只在释放瞬间敌人处于近战范围时触发。要朝着*目标方向*行进时蓄力 W,而不是站在空地或眼位上。
- **队伍没跟进时用 R 强开团。** Hero's Entrance 给一段击飞,但若你落地时队友还在调整位置,敌人就走掉了。等队友 CC (Ashe R, Lulu Q, Pantheon Q) 先命中后,再 R 上去。
- **6 级前忽视清线。** Galio 的 Q 是中路射程最长的 AOE 清线技能之一;不推线就等于让出 R 支援所需要的线权。
- **W 二级满级。** 护盾随等级增加但冷却几乎不掉。E 满级到 13 级时 E 冷却只有 4 秒,直接转化为更多先手机会。
- **对面没坦克还先做 Riftmaker。** 敌方是 4-AD 阵容 (Yasuo + 双 ADC + Talon) 时坦克属性是浪费的。改先做 ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — 灼烧针对脆皮后排。

## 进阶技巧

E 击飞只命中突进路径上的**第一个**敌方英雄 — 用这点挑目标。如果敌方前排正好挡在你和他们 carry 之间,绕侧路草丛或从战争迷雾里包抄,让 E 的直线先擦到 carry,而前排站在错误的方向。R 落地后同样的招数:击飞结束的瞬间从敌方阵型背面 E 进去,他们坦克还没回过神时你已经把后排目标再次击飞。
