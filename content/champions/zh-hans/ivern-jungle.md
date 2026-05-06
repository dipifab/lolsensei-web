---
title: "Ivern Jungle Build & Guide — Patch 16.9"
slug: "ivern-jungle"
language: "zh-hans"
patch: "16.9"
champion: "ivern"
role: "jungle"
last_updated: "2026-05-05"
description: "League of Legends 英雄联盟 16.9 版本 Ivern 绿茵之子打野完整攻略:和平主义 grove 清野思路、enchanter 核心出装顺序、Sorcery 符文配置、Q 技能从迷雾发起 root 套路、6 级 Daisy 团战节奏、关键对线分析、新手常见错误以及 W 草丛进阶视野技巧全收录。"
quick_learn:
  champion_dd_id: "Ivern"
  difficulty: 4
  damage_type: "magic"
  champion_class: "Enchanter / 工具型打野"
  abilities:
    - key: "P"
      name: "Friend of the Forest"
      description: "无法攻击野怪也不会被野怪攻击(Drake/Baron 等史诗野怪除外)。在野怪营地种下 grove,长成后野怪会自动解放。"
      dd_spell_id: "Ivern_Passive"
    - key: "Q"
      name: "Rootcaller"
      description: "长直线技能,定身第一个命中的敌人。攻击被定身目标的友军会自动突进过去。再次施放可让自己突进。"
      dd_spell_id: "IvernQ"
    - key: "W"
      name: "Brushmaker"
      description: "被动:草丛中你和附近友军的普攻附带额外法术伤害。主动:在任意位置生成一片草丛,提供视野和伤害区域。"
      dd_spell_id: "IvernW"
    - key: "E"
      name: "Triggerseed"
      description: "为友军(或 Daisy)套上护盾。1.5 秒后护盾爆开,造成法伤并减速附近敌人。若没命中任何人,护盾会自动续杯。"
      dd_spell_id: "IvernE"
    - key: "R"
      name: "Daisy!"
      description: "召唤坦度型石巨人 Daisy。她对同一目标连续第三次普攻会发出击飞冲击波。再次施放可指挥她位置。"
      dd_spell_id: "IvernR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "6617", name: "Moonstone Renewer" }
    - { dd_id: "3158", name: "Ionian Boots of Lucidity" }
    - { dd_id: "3504", name: "Ardent Censer" }
    - { dd_id: "6616", name: "Staff of Flowing Water" }
    - { dd_id: "3107", name: "Redemption" }
  situational_items:
    - dd_id: "3222"
      name: "Mikael's Blessing"
      against: "对方对你方 ADC 链式叠加重型单体 CC 时(Morgana Q、Ashe R、Lissandra R)"
    - dd_id: "3190"
      name: "Locket of the Iron Solari"
      against: "对手为 AOE 强开团阵容(Amumu R、Yasuo + Malphite、Wukong R)"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "对方主要威胁是针对你的远程法术 CC"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对线机动型刺客切后排时(Kha'Zix、Zed、Akali、Talon)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "对方堆叠回复阵容(Soraka、Yuumi、Aatrox、Vladimir)"
  base_combo: ["W", "Q", "E", "R"]
  win_condition: "迷雾中用 Q 制造抓人,团战核心位用 E 套盾,把 Daisy 丢到敌方前排后面让她第三下普攻击飞清理被定身目标。6 级强势爆发期。"
  weakness: "无法和英雄 1v1:普攻弱、技能组没位移。两个 grove 种好前被入侵恢复极慢;gank 中 Q 落空整套套路就废了。"
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
    primary_rationale: "Sorcery 主系:Summon Aery 跟随每次 E 护盾,Q root 命中也会触发额外法伤。Manaflow Band 维持 E 高频施放的蓝量,Transcendence 把 ability haste 推过 40 缩短 Q 冷却,Scorch 在线上小规模交火中收尾消耗。"
    secondary_rationale: "Resolve 副系:Font of Life 在每次 Q root 触发 — ADC 攻击被定身目标时获得回血,把单次套路变成爆发加续航。Revitalize 同时强化 Aery 护盾和 E 没命中敌人时的护盾返还。"
    secondary_alternative: "如果长时间团战需要更高 Flash 利用率而 ADC 自带续航,可把 Resolve 换成 Inspiration,带 Biscuit Delivery(早期蓝/血量)与 Cosmic Insight(召唤师技能加速,Flash 与 Smite 更频繁)。"
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "vel-koz"]
      archetype: "无位移的输出位"
      reason: "迷雾中一发 Q 把他们钉在原地;ADC 自动突进闭合距离的速度比对方闪现还快,尤其 Daisy 进场补击飞后几乎是确定点击。"
    - examples: ["master-yi", "warwick", "shyvana"]
      archetype: "依赖普攻成长的打野"
      reason: "Ivern 的 grove 机制完全跳过野怪战斗;对手还在用普攻打野怪时,Ivern 已经在帮线上套盾,5 级和 ADC 联手开 root。"
  counterpicks:
    - examples: ["lee-sin", "graves", "nidalee"]
      archetype: "前期入侵型打野"
      reason: "Ivern 无法 1v1:W 需要草丛,Q 没位移逃命。3 级前被入侵会清掉 grove,逼出防御性清野,导致对方经验金币领先滚雪球到比赛结束。"
    - examples: ["kha-zix", "rengar"]
      archetype: "切后排的机动刺客"
      reason: "他们越过 Ivern 的保护直接落在核心位身上;E 护盾在爆发面前消耗很快,而唯一的硬控 Q 前摇长,位移可在落地前躲掉。"
    - examples: ["amumu", "zac"]
      archetype: "AOE 强开团坦克"
      reason: "他们的 R-Flash 连招能在一个锥形里抓住挤在一起的全队;一个 E 护盾无法覆盖多个目标,Daisy 第三下击飞抵达时已经救不了后排。"
---

## 概述

Ivern 是和平主义打野 — 仅仅这一个词就改变了他全部的玩法。被动直接禁止他攻击野怪,所以他从不在野怪营地里和怪物互相普攻。取而代之,他在每个野怪营地种一颗 **Brushmaker (W)** 种子,转身离开,稍后回来时野怪已经自动解放,完整经济和经验照常入手。代价显而易见:别的打野在做完整清野时,Ivern 已经在为友军套盾、用主动草丛卡河道视野,并且穿越地图发起 3 级 gank,而那时其他打野甚至都还没出现在地图上。

他的思路是 enchanter,不是刺客。从战争迷雾(fog of war)里命中 **Rootcaller (Q)**,你方 ADC 借助普攻自动突进效果冲到被定身目标身上,你顺势把 **Triggerseed (E)** 套到他身上,6 级时把 **Daisy! (R)** 砸到敌方阵线后方,让她的第三次连续普攻打出确定击飞。技能组没有逃生位移、普攻也很弱 — 想 1v1 单挑英雄就一定输。留在迷雾里,留在队友身边,让队友扛伤害,你只负责制造套路。

## 推荐出装

**Starting items:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**。Ivern 是远程英雄(攻击距离 475),所以选 Hailblade 而不是 Emberknife 是正确的。Smite 仍然是必备的 — 即使你永远不能对普通野怪用 Smite,Drake、Baron 和 Voidgrubs 都需要它。

**Core items(按顺序):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — Hailblade 的任务升级品(经验积累足够后大约 3-4 分钟自动进化)。法系爆发用 companion:技能后下一次普攻附带法伤触发,叠加在 W 草丛加成之上。
2. ![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) **Moonstone Renewer** — mythic。你的护盾和治疗会叠加链式效果,每次连续触发治疗量增加 — 完美匹配每 7-11 秒套盾、减速、再套盾的 enchanter 节奏。
3. ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — ability haste 让 Q 和 E 几乎常驻可用。
4. ![Ardent Censer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3504.png) **Ardent Censer** — E 给友军套盾时,Censer 被动赋予该友军攻速和命中附加法伤。当 ADC 在草丛里或附近作战时,与 W 草丛加成叠加。
5. ![Staff of Flowing Water](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6616.png) **Staff of Flowing Water** — 第二个护盾触发装。给被套盾的友军几秒额外的法术强度和 ability haste。
6. ![Redemption](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3107.png) **Redemption** — 5 秒读条的全图主动治疗/伤害:扔到挤在一起的团战上,能瞬间扭转血条。

**Situational items:**

- ![Mikael's Blessing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3222.png) **Mikael's Blessing** — 对方对你方 ADC 链式叠长 CC 时(Morgana Q、Ashe R、Lissandra R)。主动 cleanse 让核心存活时间超过任何护盾能撑的极限。
- ![Locket of the Iron Solari](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3190.png) **Locket of the Iron Solari** — 面对 AOE 强开团阵容时(Amumu R + Yasuo R 连招、Wukong R)。主动同时给多名友军护盾,这是单个 E 做不到的。
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 当机动型刺客(Kha'Zix、Zed、Akali、Talon)明确针对你时。金身让你在切入下存活足够长时间,等 Daisy 来 peel。
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 面对堆叠回复阵容时(Soraka、Yuumi、Aatrox、Vladimir)。你的法伤施加重伤减疗,而你施法频率足够高,可以一直挂着。

**Boots:** ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** 默认。![Boots of Swiftness](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3009.png) **Boots of Swiftness** 在敌方四处叠减速(Twitch、Ashe、Ahri W)时可接受;但 ability haste 损失是真实的,只有在机动性确实是问题时才选。

**Skill order:** **E** 主升(护盾数值成长最猛、减速封锁切入),**Q** 副升(冷却越短 root 越多),**W** 最后(被动随等级成长但只在没别的可点时再点)。**R** 在 6、11、16 级。

**Runes:** Primary **Sorcery** 配 **Summon Aery**、**Manaflow Band**、**Transcendence**、**Scorch**。Secondary **Resolve** 配 **Font of Life** 与 **Revitalize**。

## 关键对线

- **Lee Sin / Graves:** 硬克制。两人 3 级前都会入侵你的野区,而你 1v1 必输。开局选靠近最强一路(队友能转过来 2v2 的位置),raptor 和红区放眼。被入侵就撤退,让线上从迷雾里惩罚 — 永远不要单挑。
- **Master Yi / Warwick:** Easy。前几级他们在野怪营地用普攻磨进度,而你借 grove 跳过野怪战斗,gank 时高一级到线上。Daisy 上线后,她的击飞能打断 Warwick R,也能在 Yi Alpha-Strike 中段把他截停。
- **Karthus:** 6 级强势期赛跑。他从 6 分钟开始全图,你也是从 6 分钟开始 root 加 Daisy。第一次击杀决定谁滚起来 — 你在 Scuttle 命中早期 Q,接下来 10 分钟都是你方滚雪球。
- **Kha'Zix:** 迷雾中避免他。他对孤立的脆皮目标打额外伤害 — 那个目标就是你。野区安全侧放眼,刷大龙小龙时和队友抱团,8 分钟后绝不要在没视野的迷雾里独自走位。
- **Vi:** 由中路优先权决定的对等对位。她 Q-Flash-R 连招能绕过你的 Q,但只要中路有线权她就不能随意切入。封她的迂回路线,看到视野里她 Q 蓄力动画的瞬间就给 ADC 提前套盾。

## 强势期与胜利条件

- **3-4 级(完整 grove 周期):** 两个 grove 长成解放后,你已经用约 60% 的时间追平了普通打野的清野进度。把多出来的时间花在带 Q 走到一路上,赶在敌方打野 4 级前抵达。
- **6 级(Daisy! 上线):** 第一个 **R** 解锁完整技能组。Daisy 是团战中坦度的身体,她第三下击飞是确定开团工具。刚到 6 就立刻去找一路边路位的免费击杀。
- **![Moonstone Renewer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6617.png) Moonstone Renewer 完工(~ 11-13 分钟):** 护盾/治疗链路开始上量。任何持续 4 秒以上的团战中,你的治疗输出超过地图上除 Soraka 外的任何 enchanter。
- **三件套强势期(Moonstone + Boots + Ardent 或 Staff,~ 19-21 分钟):** 强行打目标团战。你方被套盾的 ADC 比对面打得更狠更快,Daisy R 的冷却整整一分钟 — 她每次好了你都该开团。

## 常见错误

- **对普通野怪用 Smite。** 不行 — 被动会禁用。Smite 只留给 Drake、Baron、Voidgrubs,以及对方红/蓝即将被收掉时的少见跨野偷取。把 Smite 浪费在 grove 动画上就是 throw。
- **自己去打被定身的目标。** 你 Q 命中某人时,突进的不是你 — 是 ADC,在他攻击的瞬间自动触发。只有在你真想切入时(很少)才再次施放 Q;否则后撤一步,给冲入的友军套盾。
- **在团战里放 W 草丛却不放在线上。** 草丛的最大价值在线上 — 长期视野和兵线上的伤害区域;团战中央它顶多是个视野工具。gank 前在三角草预放 W,而不是 gank 后才放。
- **把 Daisy 扔到最大射程。** Daisy 的价值在第三下普攻击飞,这只在她真正接触目标时才发生。R 在团战中、敌方阵线后方 — 不是隔 1500 距离"为了多点伤害"。
- **试图用一个 E 护盾应对 AOE 开团。** E 一次只能套一个友军。面对 Amumu R + Yasuo R 抓四人的局面,你需要 Locket of the Iron Solari。看到对方阵容那一刻就规划这件装备。

## 进阶技巧

利用 **W 草丛主动放置** 在 ADC 走位视角里制造假迷雾。在敌方眼位边缘放一片草丛 — 他们能看见你放下,但看不见谁走进去。把核心位转进草丛,然后从那里横穿一路射出 Q:敌人无法躲开从他们看不穿的 brush wall 后方射出的技能。这正是早期 Ivern/Caitlyn 双人组合成为游戏中滚雪球能力最强的对线组合之一的诀窍,而且随着装备完成度提升而强化 — 被套盾的 ADC 在草丛里普攻就成了 Ardent-empowered 的大锤。
