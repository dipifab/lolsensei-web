---
title: "Hwei Mid Build & Guide — Patch 16.9"
slug: "hwei-mid"
language: "zh-hans"
patch: "16.9"
champion: "hwei"
role: "mid"
last_updated: "2026-05-05"
description: "League of Legends 英雄联盟 16.9 版本 Hwei 中单完整攻略:法师爆发出装顺序、Sorcery 符文搭配、对线关键节点、强势期把握、新手常见错误规避,以及 WE 强化爆发的进阶连招技巧。"
quick_learn:
  champion_dd_id: "Hwei"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Artillery"
  abilities:
    - key: "P"
      name: "Signature of the Visionary"
      description: "对敌方英雄造成伤害会挂上印记,使用另一种伤害技能完成印记,经过短暂延迟后引爆造成范围法术伤害。"
      dd_spell_id: "Hwei_Passive"
    - key: "Q"
      name: "Subject: Disaster"
      description: "开启 3 个伤害子技能。QQ 火球 (% 最大 HP),QW 延迟落雷 (对孤立 / 被控目标额外伤害),QE 减速熔岩之路。"
      dd_spell_id: "HweiQ"
    - key: "W"
      name: "Subject: Serenity"
      description: "开启 3 个 utility 子技能。WQ 队友加速线,WW 持续护盾池,WE 三层强化:接下来 3 次释放附带额外伤害并返还法力。"
      dd_spell_id: "HweiW"
    - key: "E"
      name: "Subject: Torment"
      description: "开启 3 个控制子技能。EQ 恐惧扇形,EW 固定之眼发射追踪定身,EE 延迟之颚拖拽并减速。"
      dd_spell_id: "HweiE"
    - key: "R"
      name: "Spiraling Despair"
      description: "远距离投射物,粘附第一个命中的敌方英雄,展开减速区域后爆炸造成大量法术伤害。"
      dd_spell_id: "HweiR"
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
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3135", name: "Void Staff" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对位多段位移 assassin (Zed, Akali, Talon) — 没有位移时用金身换时间"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "对位单体法术 CC (Ahri 魅惑, Lissandra R, Twisted Fate 黄牌),否则会被锁住打断施法"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "对位高回血阵容 (Soraka, Vladimir, Dr. Mundo):重创切断恢复"
    - dd_id: "3158"
      name: "Ionian Boots of Lucidity"
      against: "队伍更需要 R 的频率而不是固定法穿时的备选鞋"
  base_combo: ["E", "EW", "Q", "QW", "AA"]
  win_condition: "在资源点团战中,把被动印记触发与 QW Severing Bolt 同时打在被定身或减速的目标上,然后从极限距离覆盖 R 把敌人锁进队友的后续技能里。"
  weakness: "没有位移、没有逃生技。每个子技能都有施法前摇,只要 all-in 类型 (assassin、diver) 在你完成控制链之前贴近,基本上就死。"
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8229
      name: "Arcane Comet"
      icon_path: "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
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
    primary_rationale: "主系 Sorcery: EW 定身或 QE 减速保证后续 Q 必触发 Arcane Comet,白送 poke。Manaflow Band 撑住 Hwei 巨大的法力消耗,Transcendence 削减 9 个子技能的 CD,Scorch 收掉低血残线。"
    secondary_rationale: "副系 Inspiration: Biscuit Delivery 弥补 Hwei 糟糕的前期蓝量,Cosmic Insight 减少召唤师技能 CD,让团战中 Flash 更频繁可用。"
    secondary_alternative: "对位强 poke 炮台 (Xerath, Vel'Koz),把 Inspiration 换成 Resolve,带 Second Wind (poke 下回血) 与 Overgrowth (后期额外 HP),活过你打不还手的换血。"
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "viktor", "anivia"]
      archetype: "Immobile mages without dash"
      reason: "Hwei 的 EW 之眼会锁定无位移目标,发出追踪定身,接一发必中的 QW 打出大量伤害。没有位移就走不出施法窗口。"
    - examples: ["sett", "darius", "garen"]
      archetype: "Slow melee bruisers in lane"
      reason: "Hwei 在每个等级都有手长优势,QE 熔岩持续减速。他们不交 Flash 就够不到他的施法位置。"
    - examples: ["annie", "sylas"]
      archetype: "Telegraphed all-in mages"
      reason: "他们的 engage 必须近身且前摇明显。Hwei 从战争迷雾中预放 EW,在对方起手时定住,再走开重置 trade。"
  counterpicks:
    - examples: ["zed", "akali", "fizz", "kassadin"]
      archetype: "Mobile assassins with multiple gap-closers"
      reason: "他们的位移与闪现击败 Hwei 的施法前摇。他刚开 E 选好正确子技能时,assassin 已经贴脸,爆发蓄好。"
    - examples: ["xerath", "vel-koz"]
      archetype: "Longer-range artillery mages"
      reason: "他们在 Q 距离之外就能 poke Hwei,逼他在压力下施法。Hwei 没逃生也无法拉近距离,每条兵线都在掉血。"
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall and dash-heavy duelists"
      reason: "Wind Wall 挡掉 Hwei 所有子技能投射物 (Q, EW, R)。他们用位移越过减速,在被动印记完成前结束 trade。"
---

## 概述

Hwei 是游戏里技能池最深的远程炮台型法师:Q、W、E 各自打开三个子技能菜单,加上大招 R 共九次按键空间。他在中路扮演的角色与 control mage 相同 (压制对手农兵、远距离 poke 血、用控制技锁住、收掉残血),但用纯粹的简单换来了适应性 — 每条兵线你都要在伤害、utility、控制中选一个最适合当前情况的方向。Hwei 又脆又没位移,所以站在 frontline (吸收伤害的前排坦克或战士) 后面是必须的。

他的游戏思路分两层。先用一个伤害子技能挂上被动 **Signature of the Visionary** 的印记,再用另一种伤害技能完成印记,触发额外的范围法术伤害。在线上最干净的起手是 EW (追踪定身之眼) 接 QW (Severing Bolt — 对被定身或被控制的目标造成巨大额外伤害)。出了线,kit 重心转向控制:WQ 给队友加速,WW 提供持续护盾池,EE 之颚把扎堆的敌方队伍拉进自己的范围伤害里。

## 推荐出装

**起始装备:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 个 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**。蓝量续航是关键:Hwei 的子技能烧蓝极快,Doran's Ring 的回蓝是最便宜的留线方式,用它撑到合成第一件 ![Lost Chapter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3802.png) **Lost Chapter** 走 Luden's Companion 的合成路。

**核心装 (按顺序):**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — 爆发节点、子技能轮转所需的回蓝、削减所有子技能 CD 的 ability haste。
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 固定法穿。每一次被动印记的爆炸都吃法穿,而你的目标通常是脆皮。
3. ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 百分比法穿。任何一个核心目标一出魔抗装就立刻把它当第三件买出来 — Hwei 极度依赖 AP 乘算,伤害必须打进。
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 你 AP 最高的一格。+35% AP 乘数同时放大每个子技能与被动爆炸。
5. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 血线触发的被动 (装备被动效果,敌人血量低于阈值时触发,这里是 35%) 与 R 的爆炸伤害叠加,提供额外爆发。

**情境装备:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 对位多段位移 assassin (Zed, Akali, Talon)。Hwei 没位移,金身刚好替你买下那段不够的时间。
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 对位单体法术 CC (Ahri 魅惑, Lissandra R, Twisted Fate 黄牌)。护盾挡掉本来会打断你子技能施法的那次锁定。
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 对位高回血阵容 (中单 Soraka, Vladimir, 上单 Dr. Mundo)。重创切断他们赖以生存的恢复。
- ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** — 当队伍更需要 R 的频率而不是穿透时,可作为 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** 的替代。

**鞋子:** 默认 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**。如果队伍把 R 当作收割工具更需要它频繁可用,换 ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity**。

**技能加点:** **Q** 优先满 (伤害子技能,大部分人头从这里来),**E** 第二满 (控制子技能),**W** 最后。**R** 在 6、11、16 级各加一点。

**符文:** 主系 **Sorcery**:**Arcane Comet**、**Manaflow Band**、**Transcendence**、**Scorch**。副系 **Inspiration**:**Biscuit Delivery** 与 **Cosmic Insight**。对位强 poke 时把副系换成 **Resolve** (Second Wind + Overgrowth)。

## 关键对线

- **Yasuo / Yone:** Wind Wall 挡掉 Hwei 所有子技能的投射物 (Q, EW, R)。等他们交完技能再放 E 和 W;风墙在场时绝对不要面对面甩 QQ 火球。
- **Zed / Akali:** 塔下强杀威胁 (即使吃塔伤害也要跳过来杀你的英雄)。他们的速度盖过 Hwei 的施法前摇。在 ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** 之后第二件直接出 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass**。补刀前从战争迷雾里预放 EW,绝不要面对面走过去。
- **Orianna:** 线上五五开,但越往团战越往她的方向倾斜。线上你能用 QQ + 被动印记 poke 她,但她的 R Shockwave 在团战中赢扎堆的局。后期站位要刻意离队伍远一点,免得她一个 R 同时把你和 carry 都吸进去。
- **Twisted Fate:** roam 优先权之争。他有金牌定身和全图大招;在河道和三角草丛插眼盯住他的 ulti。如果他对你抽到金牌,在他贴近前先用 EW 定住他。
- **Veigar:** 线上五五偏优。他的 E 笼子是唯一真正的威胁 (踩进去就被定身)。poke 时站在笼子半径之外;如果他不小心吃到自己的定身,QW Severing Bolt 能狠狠惩罚他。

## 强势期与胜利条件

- **2 级:** 一点 Q (Disaster) 加上初始 E,你已经有一个伤害子技能加一个控制子技能。如果对面打野不在附近,EW 定身接 QW Severing Bolt 是真正的 all-in 窗口 (一次打到底的 commit,而不是简单换血)。
- **6 级:** 第一次 **Spiraling Despair** 解锁了资源点控制。R 粘附第一个命中的英雄并展开减速区域,正好为自家打野的 Scuttle Crab 团做铺垫。
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion 完成 (~ 13-15 分钟):** 兵线控制权翻转。靠 Luden's 的回蓝,你能用 QQ + QE 一轮推完任意一波兵,腾出时间去 roam 或下路 dive。
- **三件套节点 (![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) Void Staff 出装,~ 27-30 分钟):** 带被动印记的连招伤害穿透敌方第一件魔抗装。前排还在的时间里,主动开资源点团。

## 常见错误

- **CD 一好就甩 Q,没有铺垫。** 永远先用 E (控制子技能) 起手,或者打已经被队友减速 / 定身的目标。在中立位置裸甩的 QQ 火球,任何带位移的英雄看到都能反应躲掉,白白浪费蓝。
- **压力下选错子技能。** 一旦按下菜单键,子技能就锁定了 — 没有取消。把 Hwei 带进排位之前,先在自定义或匹配里练熟该选哪个收尾:孤立目标用 QW、清线用 QE、对低血敌人剐血用 QQ。
- **忘了被动印记需要两个不同的技能。** 连续两次 QQ 不会触发被动。印记只有在不同子技能的第二次伤害命中时才会触发 — 通常是 QQ 接 QW,或者 EW 定身接 QW Severing Bolt。
- **把 R 当伤害收尾用,而不是 setup 工具。** Spiraling Despair 的核心价值是给队友做铺垫的减速区域,不是爆炸伤害本身。先把它丢出去把敌人锁进队伍连招里,再叠上自己的子技能。
- **团战站在最远施法距离没人保护。** Hwei 没位移。最大投射距离会让你脱离队伍的保护范围,一个侧翼 assassin 就能把你秒掉。要站在第二远的位置,这样辅助的保护技能 (你的辅助保护你免受 diver 突袭的技能,即 peel) 才来得及救你。

## 进阶技巧

用 WE Stirring Lights 把空闲时间转化成爆发 (1-2 秒内集中的高伤害)。进团之前先放出来:它会给你接下来 3 次技能或平 A 加上强化层数,每一次都附带额外法术伤害并返还法力。最佳顺序是 WE → EW 之眼 → QW Severing Bolt → 对被定住的目标平 A:每次施法消耗一层,法力返还让你立刻能用 R 切到第二个目标,而不会 OOM (out-of-mana,团战中蓝条耗光)。
