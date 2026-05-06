---
title: "Hwei Support Build & Guide — Patch 16.9"
slug: "hwei-support"
language: "zh-hans"
patch: "16.9"
champion: "hwei"
role: "support"
last_updated: "2026-05-05"
description: "League of Legends 16.9 版本 Hwei 辅助新手向攻略：picker 法师起手装与核心出装顺序、下路关键对线与反制思路、强势期时间窗、新手最常踩的几个坑，以及一条 EW + EE 伪连招的进阶提示。"
quick_learn:
  champion_dd_id: "Hwei"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Catcher"
  abilities:
    - key: "P"
      name: "Signature of the Visionary"
      description: "造成伤害的技能会在敌方英雄身上留下印记。第二个伤害技能完成签名后，会留下一个短暂延迟后引爆造成范围魔法伤害的标记。"
      dd_spell_id: "Hwei_Passive"
    - key: "Q"
      name: "Subject: Disaster (QQ/QW/QE)"
      description: "三种伤害子技能。QQ 快速火球，QW 超远距离延迟雷击（对孤立或处于 CC 的目标额外伤害），QE 带减速区域的熔岩路径。"
      dd_spell_id: "HweiQ"
    - key: "W"
      name: "Subject: Serenity (WQ/WW/WE)"
      description: "三种 utility 子技能。WQ 给予盟友 Move Speed 的直线，WW 持续给予护盾的池子，WE 三个法球强化接下来 3 个技能/普攻并附加伤害与法力。"
      dd_spell_id: "HweiW"
    - key: "E"
      name: "Subject: Torment (EQ/EW/EE)"
      description: "三种 CC 子技能。EQ 击退技能弹道，EW 放置在地的眼睛，敌人进入时发射追踪定身，EE 把敌人拖向中央的颚状区域。"
      dd_spell_id: "HweiE"
    - key: "R"
      name: "Spiraling Despair"
      description: "超远距离技能弹道。粘住第一个被命中的敌方英雄并扩大范围，对周围敌人层叠减速；几秒后引爆造成范围魔法伤害。"
      dd_spell_id: "HweiR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "W" }
    - { level: 9, key: "E" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "Q" }
    - { level: 15, key: "Q" }
    - { level: 16, key: "R" }
    - { level: 17, key: "Q" }
    - { level: 18, key: "Q" }
  core_items:
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "4005", name: "Imperial Mandate" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "6620", name: "Echoes of Helia" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "对位针对你 ADC 的硬控（Leona 晕眩、Morgana 定身、Nautilus 钩子）：解除锁链"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "对位重型范围开团（Kennen、Wukong、Malphite、Yasuo）：全队护盾覆盖强制团战"
    - dd_id: "6617"
      name: "Moonstone Renewer"
      against: "对位骚扰加脱战的阵容，长团战中持续奶满全队"
    - dd_id: "3107"
      name: "Redemption"
      against: "对位攻城和五五开大龙小龙团（drake pit、Baron pit），预读释放治疗"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对位突进后排的刺客（Zed、Akali、Talon）：金身让 ADC 走位你存活"
  base_combo: ["EW", "QW", "P", "R"]
  win_condition: "用 EW 命中定身或 EE 拖拽，跟上 QW 或 QQ 引爆被动签名，然后对锁定目标释放 Spiraling Despair。在对线期结束前通过反复抓单滚下路雪球。"
  weakness: "每个技能都是技能弹道，E 落空就既无后续又无逃生。Hwei 没有任何位移、机动性极低：敌方辅助单次开团就能抓他出位置。"
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8214
      name: "Summon Aery"
      icon_path: "perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery 主系：Aery 在 Q 上骚扰、在 WW 上额外护盾。Manaflow Band 撑起三连技的法力消耗，Transcendence 叠 ability haste 让 EW 每波兵线都能用，Scorch 收掉残血敌人。"
    secondary_rationale: "Inspiration 副系：Biscuit Delivery 弥补线上薄弱的续航，Cosmic Insight 减少 Flash 与主动装备（Mikael、Locket）冷却：团战中保人窗口更频繁。"
    secondary_alternative: "对位扎进后排的全开团阵容（Leona、Rakan、Nautilus），把 Inspiration 换成 Resolve，搭配 Bone Plating（前两次受到伤害减 30~60）和 Revitalize（护盾与治疗 +10%）：少冷却减免，多硬生存。"
matchup_draft:
  pick_into:
    - examples: ["lulu", "soraka", "yuumi", "janna"]
      archetype: "没有硬控的辅助辅助"
      reason: "她们没法惩罚你 EW 的长延迟视野+定身组合。你射程压制她们的骚扰，QW 延迟雷击会在她们上前给 ADC 加盾时命中。"
    - examples: ["jhin", "caitlyn", "ashe"]
      archetype: "没有位移的不动 ADC"
      reason: "EW 定身和 EE 拖拽干净命中，因为他们没有位移技能打断你的引导。被印记附上后，被动签名加 R 锁定击杀。"
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "没有逃生的技能弹道法师辅助"
      reason: "你用 QQ 和 QW 匹配他们的骚扰射程，但你拥有他们没有的硬控。长线对拼你赢，因为你能把一个落地的 E 转化为击杀，而他们只能慢慢磨血。"
  counterpicks:
    - examples: ["leona", "nautilus", "thresh"]
      archetype: "钩锁与硬控开团辅助"
      reason: "他们的指向性或钩子开团在你的 EW 引导结束之前就到了。Hwei 一旦被锁就没有位移逃跑，而 E 落空就毫无应对手段。"
    - examples: ["pyke", "rell"]
      archetype: "游走与突进开团"
      reason: "他们能拉近 Hwei 释放技能弹道所需的距离。Pyke 隐身让 EW 失效（你看不到他要把眼睛放哪），Rell 的 W 跳跃直接跳过 QE 的减速区。"
    - examples: ["alistar", "rakan"]
      archetype: "带位移和击飞的坦克"
      reason: "位移加范围击飞会在施法中打断你的技能序列。Hwei 锁定一个目标需要按三次键——Alistar 一套 W-Q 就抹掉那扇窗。"
---

## 概述

Hwei 辅助是一名超远距离 picker 法师，把不动的下路转化为轻松击杀。技能组建立在三组子技能树上：伤害在 **Q (Subject: Disaster)**，utility 在 **W (Subject: Serenity)**，控制在 **E (Subject: Torment)**。辅助位的招牌工具是 **EW (Gaze of the Abyss)** —— 一个延迟追踪定身，能锁住第一个踏进视野眼睛的敌人 —— 以及 **EE (Crushing Maw)** —— 把敌人向中央拖拽并在出区时减速的颚状区域。两者都能为 **被动 (Signature of the Visionary)** 铺路，在第二次技能命中时引爆造成范围魔法伤害。Hwei 的射程是法师级（多数技能在 900~1100 单位左右），所以下路打的是骚扰距离，不是近身距离。

游戏思路是"命中一次 E，赢下这次对拼"。在波次接战之前把 **EW** 放在敌方 ADC 必经路径前方，用 **QQ** 或 **QW** 引动被动，再把 **R (Spiraling Despair)** 接到锁定目标上让减速层叠累积，自家 ADC 上前完成击杀。硬性条件是站位：每个技能都是远程的技能弹道，又没有位移，单一个敌方开团抓你出射程就是死刑判决。站在你 ADC 后面，不是旁边。

## 推荐出装

**起手装：** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas**（新的辅助任务装备，中期成长为 Bloodsong / Solstice Sleigh / Dream-Maker）加 2 个 Health Potions。饰品槽带 Stealth Ward。

**核心装备（按顺序）：**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** —— 任务辅助装备，待在 ADC 身边时持续来钱。约 12~14 分钟自动升级为成品辅助装。
2. ![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4005.png) **Imperial Mandate** —— picker 玩法的引擎：技能组里的每一个减速或定身都会引动一个 Mandate 印记，由你的 ADC 引爆触发额外魔法伤害。Hwei 在 QE、EE 和 R 上都有减速，所以每团触发几乎稳定。
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** —— 固定法穿，让 QQ 和被动签名穿透敌方脆皮后排。
4. ![Echoes of Helia](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6620.png) **Echoes of Helia** —— 每一次被引动并引爆的被动都触发 Helia 层数：奶你的 ADC 并灼烧目标。与 Mandate 配套，每个被锁敌人都吃双份。
5. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** —— 额外爆发，再加目标低于 35% HP 时的法穿尖峰（恰好是技能终结残血敌人的瞬间）。和 R 在被打残目标身上的爆炸完美对齐。

**情境装备：**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** —— 对位针对 ADC 的硬控（Leona、Morgana、Nautilus）。解除敌人用来秒掉你 carry 的锁链。
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** —— 对位重型范围开团（Kennen、Wukong、Malphite、Yasuo）。全队护盾覆盖你后排射程无法回避的强制团。
- ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** —— 当敌方阵容是骚扰加脱战，你花更少时间命中 E、更多时间在长团里给队友补血时，用它替换 Imperial Mandate 作为成品辅助装。
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** —— 对位突进后排的刺客（Zed、Akali、Talon）。金身换出时间让 ADC 走位，自己也熬过这次开团。

**鞋子：** ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** 默认。如果队伍指望你在长团中链接 CC，换 ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** —— ability haste 让 EW 每次开团都能用上。

**加点顺序：** **E** 先满（主控制源：EW 定身、EE 拖、EQ 击退），**W** 第二（护盾、MS 与三球强化），**Q** 最后（吃 AP 但因为装备格留给辅助装而不是纯 AP，冷却减免价值降低）。**R** 在 6、11、16 级各点一级。

**符文：** 主系 **Sorcery** 配 **Summon Aery**、**Manaflow Band**、**Transcendence**、**Scorch**。副系 **Inspiration** 配 **Biscuit Delivery** 和 **Cosmic Insight**。当敌方下路有硬开团（Leona、Rakan、Nautilus）时，把 Inspiration 换成 **Resolve** 配 **Bone Plating** 和 **Revitalize** —— 当对方的第一个技能就决定胜负时，硬生存比主动装备冷却更重要。

## 关键对线

- **Leona / Nautilus：** 开团威胁。站在他们的钩子/Q 射程外，绝不要在线上把 **Flash** 用在进攻。把 **EW** 留作他们走向你 ADC 时的保人定身，而非骚扰起手。如果他们闪现进来，你的 **EE** 拖拽能把他们从 carry 身边拉走。
- **Lulu：** 五五开。她用护盾和减速反制你的 **EW**，但你射程压她的骚扰。等她给 ADC 上 **W** 进入射程时，反过来定身她 —— 被护盾的 Lulu 被定住等于你 ADC 的击杀确认。
- **Soraka：** Hwei 优势。她基础移速低、毫无位移，**EW** 几乎每次命中。先推线，再用 **EW + R** 组合每个冷却轮一次砸到她身上 —— 她无解。
- **Pyke：** 难打的对位。他的隐身夺走你 **EW** 锁定他所需的视野；屏幕上看不到他，眼睛就什么都做不了。买 Pink Ward（Stealth Ward 后期换 Oracle Lens）保持草丛照亮。把 **EE** 留作他钩子命中时的保人拖拽，而不是骚扰工具。
- **Xerath / Vel'Koz：** 远程法师辅助互镜。他们的骚扰射程匹配你，但你有他们没有的硬控：一次落地的 **EW** 直接赢下对线，因为他们被定身后无法躲掉 **QW** 延迟雷击。6 级前他们的 **R** 还没成长起来时，激进对拼。

## 强势期与胜利条件

- **2 级：** **E** 一点配 **W** 一点，你既有控制又有护盾池。一次成功的 **EW** 加 ADC 的爆发，足以击杀超线的敌方辅助。
- **6 级：** 第一个 **Spiraling Despair** 解锁所有击杀套路。R 粘住第一个被命中的英雄并减速周围区域，与 **EE** 拖拽组合后造出 3~4 秒"无法行走"区域。
- **![Imperial Mandate](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4005.png) Imperial Mandate 完成（约 12~14 分钟）：** 下路雪球点。每一次被动引动加 Mandate 引爆都能在一次轮换里清掉敌方 ADC 的血条。这时和中路集合打一波 drake fight。
- **![Echoes of Helia](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6620.png) Echoes of Helia 上线（约 18~22 分钟）：** 在小规模交战开始 2 换 0，因为 Helia 给 ADC 的回血超过敌人的伤害，灼烧又延伸了你的有效射程。这是在敌方为 Baron 集结前，在河道附近强行抓单的窗口。

## 常见错误

- **没铺垫就丢 Q。** 长距离裸 **QW** 骚扰看着诱人，但雷击对移动目标只有衰减伤害。先命中 **EW** 定身，再接 **QW** 让孤立/被定身目标吃额外伤害 —— 数字直接翻三倍。
- **把 EW 当骚扰技能用。** EW 是你的击杀套路。每团留给一个明确的瞬间使用，胜场比拿来打消耗多得多。冷却长到经不起一次失误。
- **站在 ADC 旁边。** Hwei 没有位移。如果敌方辅助开团到 ADC 身上而你也在近身距离，两个一起死。位置往后 200~300 单位：被锁的是其中一人时，另一人还有空间保人或脱身。
- **忘记 W 树。** 很多 Hwei 玩家把他打成纯 picker 法师，无视 **WW** 护盾和 **WE** 法球。团战中段，给 ADC 普攻挂一个 **WE** 强化，往往比自己再丢一个伤害技能更值钱。技能组要两半一起用。
- **走进没有视野的边路。** 这套技能组需要视野去命中 EW 和跨图大招。每次游走前在 tri-bush 和河道插眼 —— 没视野，离开线一步你的射程优势就消失。

## 进阶技巧

**EW + EE 伪连招** 是 Hwei 技能组里价值最高的套路，几乎不见于基础攻略。把 **EW**（眼睛）放在敌人为补刀必走的路径上，它会先在地上躺几秒钟才锁定。然后释放 **EE**（颚状拖拽），把他们拖过眼睛的锁定半径 —— 即便他们试图躲掉 **EE**，进入瞬间眼睛会自动射出追踪定身。拖拽变得无法躲避，定身保证生效，**R** 加上被动从满血秒掉一名脆皮。窗口紧（两次施法间约 1 秒），但一团内成功两次就能终结比赛。
