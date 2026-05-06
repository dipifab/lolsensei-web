---
title: "Ivern Support Build & Guide — Patch 16.9"
slug: "ivern-support"
language: "zh-hans"
patch: "16.9"
champion: "ivern"
role: "support"
last_updated: "2026-05-05"
description: "League of Legends 英雄联盟 16.9 版本 Ivern 艾翁辅助完整攻略:enchanter 核心出装顺序、Sorcery 符文搭配、草丛视野与 Q 跨地图束缚 setup 思路、Daisy 控场与 ADC 保护、对线常见 matchup 应对、新手常见错误规避,以及 W 主动草丛制造无解 Q 角度等进阶技巧。"
quick_learn:
  champion_dd_id: "Ivern"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Enchanter / setup 型辅助"
  abilities:
    - key: "P"
      name: "Friend of the Forest"
      description: "无法攻击野怪,野怪也无法攻击他。在野区营地种下树苗,长成后自动释放怪物——下路也能经过去刷,白嫖经济。"
      dd_spell_id: "Ivern_Passive"
    - key: "Q"
      name: "Rootcaller"
      description: "长直线 skillshot,束缚命中的第一个敌人。队友攻击被束缚目标会自动 dash 过去。再次施放则艾翁本人 dash。"
      dd_spell_id: "IvernQ"
    - key: "W"
      name: "Brushmaker"
      description: "被动:在草丛内,艾翁与附近队友普攻造成额外法术伤害。主动:在任意位置生成一片草丛——视野与伤害区域。"
      dd_spell_id: "IvernW"
    - key: "E"
      name: "Triggerseed"
      description: "为友军套护盾。1.5 秒后护盾爆开,对附近敌人造成法术伤害与减速。若未命中任何敌人,护盾按相同时长自动续。"
      dd_spell_id: "IvernE"
    - key: "R"
      name: "Daisy!"
      description: "召唤坚韧的石头人盟友 Daisy。她对同一目标连续第三次普攻会震波击飞。再次施放可指定她的位置。"
      dd_spell_id: "IvernR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "W" }
    - { level: 15, key: "W" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "3865", name: "World Atlas" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "6616", name: "Staff of Flowing Water" }
    - { dd_id: "3222", name: "Mikael's Blessing" }
  situational_items:
    - dd_id: "3107"
      name: "Redemption"
      against: "对抗后期抱团团战中 AOE 影响超过单体 peel 的局面"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "对抗 AOE 强开阵容 (Amumu R, Wukong R, Yasuo + Malphite wombo)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "对抗针对你的强力单体魔法 CC (Lux Q, Morgana Q, Zoe E sleep, Brand Q stun)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "对抗叠回复阵容 (Soraka, Yuumi, Aatrox, Vladimir 下路)"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "利用侧边草丛打埋伏:预放 W 取视野,从迷雾里发 Q,ADC 自动 dash 到被束缚目标。6 级后带 Daisy 游走中路反复抓人,把地图滚成雪球。"
  weakness: "脆皮,面对多目标硬开毫无 peel。线上 Q miss 就得退到 cooldown——14 秒一级 Q 是所有游走辅助里最长的真空期。"
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
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery 主系:Summon Aery 跟随每个 E 护盾飞向 ADC,Q 束缚也能触发,提供 trade 伤害。Manaflow Band 支撑 E 频繁释放,Transcendence 把 ability haste 推过 40 缩短 Q 冷却,Scorch 在线僵持时锁住 poke 收益。"
    secondary_rationale: "Resolve 副系:Font of Life 在每次 Q 束缚时触发——ADC 攻击被束缚目标时回血,把单一 setup 转化为伤害加续航。Revitalize 强化 Aery 与 E 未命中续盾。"
    secondary_alternative: "如果队伍需要更多游走中路且 Flash 启用率重要,把 Resolve 换为 Inspiration:Magical Footwear (12 分钟免费升级鞋) 与 Cosmic Insight (召唤师技能 haste——更多 Flash 与 Ignite)。"
matchup_draft:
  pick_into:
    - examples: ["thresh", "blitzcrank", "pyke"]
      archetype: "上前丢 skillshot 的 hook 辅助"
      reason: "他们必须走进 Q 距离才能命中 hook——艾翁的 Q + ADC dash 在 hook 还没飞出施法动作前就用保证束缚惩罚前摇。"
    - examples: ["xerath", "vel-koz", "brand"]
      archetype: "无位移的 poke 法师辅助"
      reason: "他们没 dash。从草丛 Q + ADC 跟进直接抹掉;主动 W 给艾翁免费的视野加伤害区域,他们不烧召唤师技能就接不下来。"
    - examples: ["yuumi", "soraka", "milio"]
      archetype: "无硬控的纯 enchanter 辅助"
      reason: "他们靠回血护盾跟着 ADC,但面对 setup 束缚毫无 peel;Q 抓到 carry,Daisy 砸下,enchanter 没办法解掉 1.75 秒束缚。"
  counterpicks:
    - examples: ["leona", "alistar", "rell"]
      archetype: "全力开团坦克"
      reason: "Flash 上前对 ADC 连环 CC,艾翁 Q 还没出手就完事。多段 CC 开团下毫无 peel;一道 E 护盾在双目标 stun 链下瞬间破。"
    - examples: ["lux", "zyra"]
      archetype: "区域控制 / 远程法师辅助"
      reason: "Lux 的 E 区域封锁艾翁的草丛角度并 poke 出 Q 距离外;Zyra 的种子+植物 zoning 不用上前就压制艾翁的 W 被动。"
    - examples: ["morgana", "tahm-kench"]
      archetype: "靠 cleanse 或吞食解 CC 的 anti-CC peel 辅助"
      reason: "Morgana 的 E 法术护盾完全挡住 Q 束缚,setup 全废;Tahm Kench 的 W 在 Daisy 第三下普攻前把 ADC 吞出震波范围。"
---

## 概述

艾翁作为辅助是下路最非典型的选择之一:一个能在任意位置生成草丛、跨地图束缚敌人、6 级召唤坚韧石头人的 enchanter。他的被动让他完全无法普攻野怪,却不妨碍他经过下路一侧野区,在回城重整时往石甲虫或狼营地里种下 **Brushmaker (W)** 树苗——你 ADC 推线的同时白送一份经济。他脆皮、没有逃生技能、1v1 trade 必死——但没有别的辅助能在团战中央立起一道草丛墙、屏蔽视野、把一个 Q 转化成保证人头,这是艾翁独有的能力。

游戏思路:在波次到达之前先在下路河道或三角草预放 W 草丛,从草丛内部射出 Q 让对手永远看不见你的施法动作,ADC 冲向束缚目标的瞬间把 E 套上,6 级以后带着 Daisy 转中路打跨地图抓人。团战不是靠艾翁打伤害赢的——是靠他的 setup 赢的,真正的人头由 carry 完成。

## 推荐出装

**Starting items:** ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** + 2 个 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**。World Atlas 是唯一可行的辅助起手——按任务阶段自动升级为 ![Runic Compass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3866.png) **Runic Compass**,最终成为 ![Bounty of Worlds](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3867.png) **Bounty of Worlds**。

**Core items (顺序):**

1. ![World Atlas](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3865.png) **World Atlas** —— 辅助任务装,通过助攻和小兵处决产出经济。不要补刀;让 ADC 吃兵。
2. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** —— ability haste 让 Q 与 E 几乎一直可用。
3. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** —— 神话装。你的护盾与回血叠出连锁效果,每次连续触发回血量都上升——给一个每 7-11 秒就护盾、减速、再护盾的 enchanter 几乎量身定做。
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** —— E 给 ADC 上盾时,Censer 被动给他 attack speed 与 on-hit 法伤。在 ADC 站在草丛里或附近作战时与 W 草丛加成叠加。
5. ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** —— 第二件护盾触发装。短时间给被护盾的友军额外 ability power 与 ability haste。
6. ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** —— 给 ADC 主动净化。解决任何护盾都救不下来的强力单体 CC 链。

**Situational items:**

- ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** —— 后期抱团战中 AOE 群体回血/伤害比 Mikael 净化更能扭转战局时。
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** —— 对抗 AOE 开团阵容 (Amumu R, Wukong R, Yasuo + Malphite wombo)。一个 E 护不到四个人;Locket 主动可以。
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** —— 对方专门要硬 CC 你时 (Lux Q, Morgana Q, Zoe E sleep)。第一发抛射被吃掉,你能撑到放出 Daisy。
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** —— 对抗叠回复阵容 (Soraka 中, Yuumi 辅, Aatrox 上)。法术伤害让每个技能都附带回血削弱。

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** 默认。![Mobility Boots](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3117.png) **Mobility Boots** 在重游走阵容里可接受,这种阵容里转线速度比团战内冷却更重要。

**Skill order:** 1 级点 **Q** 用于 1 级草丛偷袭束缚,然后优先升 **E** (护盾值随等级提升,减速防越塔),其次 **Q** (冷却越短,束缚越多),**W** 最后升满。**R** 在 6、11、16 级各点一级。

**Runes:** 主系 **Sorcery** 搭配 **Summon Aery**、**Manaflow Band**、**Transcendence**、**Scorch**。副系 **Resolve** 搭配 **Font of Life** 与 **Revitalize**。

## 关键对线

- **Leona / Alistar:** 硬克制。她们 flash 开团对 ADC 连环 CC,你的 Q 还没出手就结束了。站在 W 草丛最大距离,绝不在波次之间走那种 flash 能够到的位置,在她们召唤师技能在的时候提前给 ADC 预盾。
- **Thresh:** 操作对决。两边辅助都想用一个 hook 或束缚 setup 拿一个人头,但艾翁赢了距离战 (Q 1125,Thresh hook 1100)。站在 hook 距离外,从草丛发 Q;若他先 hook,把 E 套在 ADC 身上然后走开。
- **Lux:** 线霸。她用 E-Q 消耗你,而你没有什么能还击——你的 Q 是击杀 setup,不是 poke 工具。她的 Q 在冷却时再 trade;她持续命中束缚的话带 Banshee's Veil。
- **Yuumi:** 白送的击杀。她要发 skillshot 必须脱离,脱离瞬间就是个 600 HP 没有逃生的目标。脱离瞬间 Q,ADC dash 过去,白送一颗——每 14 秒重复。
- **Pyke:** 在草丛里跟他打。你的 W 被动在草丛里强化你和 ADC 的普攻;Pyke 的 Q 前摇可见,而你从 W 草丛里发的 Q 完全隐蔽,所以他每个草丛 trade 都输。

## 强势期与胜利条件

- **2 级 (Q + E):** 第一个 all-in 窗口。1 点 Q 做 setup、E 给冲锋的 ADC 套盾,你和 ADC 一起换敌方 ADC 的 Flash 与一管血。一起打第二波远程兵抢 2 级。
- **6 级 (Daisy! 上线):** 跨地图游走窗口。Daisy 抗塔伤抗得住 4-5 秒,3 下击飞在 ADC 有 Flash 时就是开团。一旦有 Daisy 加上推过去的兵线,马上去中路。
- **![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) Moonstone Renewer 完成 (~13-15 分钟):** 护盾/回血连锁完全发挥。任何持续超过 4 秒的团战中,你的回血输出超越对方辅助——即使对方是 Soraka 或 Sona。
- **三件套强势期 (Moonstone + Boots + Ardent 或 Staff,~22-24 分钟):** 强行打资源团。你的护盾触发让 ADC 比对面打得更猛更快,Daisy R 冷却也随装备完成下降。

## 常见错误

- **抢小兵补刀。** World Atlas 的处决触发即使 ADC 拿到人头也给你经济——别抢 CS。除非在做冰冻控线,否则站在 ADC 后方一排小兵的位置。
- **远距离 Q 打空且没后续。** 1 级 Q 14 秒——一次空 Q 就是 14 秒没有击杀按钮。如果对手在闪避,先走进草丛,从他没预料到的更近角度发出去。
- **团战中临时放 W 草丛而不是预放。** 战斗中放出来的草丛只能算视野工具——价值在于预放:游走前 5 秒在三角草放一片,Drake 团之前在中路河道放一片。战中放草丛是反应式行为,但艾翁的技能组要求你主动。
- **团战中在最大距离丢 Daisy。** Daisy 必须走到目标身边并打满 3 下平 A 才能触发击飞。1500 距离 R 出去就要走 4 秒才打第一下——那时团战已经结束了。R 在敌方阵线后方,而不是"为了打伤害"。
- **想用一个 E 单挑多人 peel。** E 只能护一个人。当 AOE 开团同时打到 ADC、中单和你时,一个护盾远远不够。看到 wombo 阵容就在 draft 时计划 Locket of the Iron Solari。

## 进阶技巧

用 **W 主动草丛**制造敌人无法闪避的 Q 角度。标准套路:在你前方 600 距离放 W 草丛,走进草丛 (如果对方在这片草地没有视野你就对他完全隐形),从草丛内部发 Q——抛射从对手无法预测的位置出来,因为他根本看不到你的施法动作。这等于免迷雾、免预设的 1125 距离免费束缚,也是为什么艾翁与 Caitlyn、Senna 或 Jhin 这种远程 ADC 双人路特别强势:任何想从远处输出的 ADC 都能白嫖一次冲锋,落到一个对手无法预防的保证击杀 setup 上。
