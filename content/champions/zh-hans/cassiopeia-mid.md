---
title: "Cassiopeia Mid Build & Guide — Patch 16.9"
slug: "cassiopeia-mid"
language: "zh-hans"
patch: "16.9"
champion: "cassiopeia"
role: "mid"
last_updated: "2026-05-01"
description: "League of Legends 英雄联盟 16.9 版本 Cassiopeia 卡西奥佩娅中单完整攻略:起始装备、battlemage 核心出装顺序、Sorcery 符文配置与思路、关键对线应对、6 级 R 与 Liandry's Torment 强势期节奏、新手常见错误规避,以及 Miasma 脚下落地等进阶操作技巧。"
quick_learn:
  champion_dd_id: "Cassiopeia"
  difficulty: 5
  damage_type: "magic"
  champion_class: "Mage / Battlemage"
  abilities:
    - key: "P"
      name: "Serpentine Grace"
      description: "被动:放大 Cassiopeia 从装备、符文以及自己 Q 获得的所有额外 Move Speed。鞋子在她身上的收益比大多数 mage 更高。"
      dd_spell_id: "Cassiopeia_Passive"
    - key: "Q"
      name: "Noxious Blast"
      description: "指定地面 AOE,短暂延迟后引爆并施加 Poison。命中敌方英雄会获得一段 Move Speed 用于追击或 kite (风筝)。"
      dd_spell_id: "CassiopeiaQ"
    - key: "W"
      name: "Miasma"
      description: "毒云墙,内部敌人减速并被 grounded (定身):无法使用 dash、blink、位移技能。她最核心的反机动工具。"
      dd_spell_id: "CassiopeiaW"
    - key: "E"
      name: "Twin Fang"
      description: "0.75 秒极低冷却技能。对处于 Poison 的目标造成额外伤害并治疗自身。takedown 返还蓝量。主输出按键 — 永不停手。"
      dd_spell_id: "CassiopeiaE"
    - key: "R"
      name: "Petrifying Gaze"
      description: "正面宽锥形。面朝她的敌人被 stun 约 1.5 秒;背向她的只受到减速。要打满定身就必须正脸命中。"
      dd_spell_id: "CassiopeiaR"
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
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
    - { dd_id: "4645", name: "Shadowflame" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对位 burst 刺客 (Zed, Talon, Akali):2.5 秒金身换来 E 冷却恢复与队友 peel 时间"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "对位会打断 E 的单体法术 CC (Ahri 魅惑, Lissandra R, Twisted Fate 黄牌)"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "对位高回血阵容 (中单 Soraka, Vladimir, 上单 Dr. Mundo):Grievous Wounds 削减 lifesteal 与 regen"
    - dd_id: "3135"
      name: "Void Staff"
      against: "只要核心目标买了魔抗装就立刻替换 Shadowflame 槽位"
    - dd_id: "3116"
      name: "Rylai's Crystal Scepter"
      against: "对位强行近身的 melee 阵容:每次 E 都刷新减速,叠加 W 的 ground 给 backline 提供 peel"
  base_combo: ["Q", "W", "E", "E", "E"]
  win_condition: "用 W 锁住 dash,对中毒目标狂刷 E (cd 0.75s) 累积 Liandry's Torment 伤害。6 级正脸 R 把 lane prio 转化为人头,然后作为接近前排的 battlemage 后期站住脚。"
  weakness: "射程 700,无 dash、无 blink、无逃生。远程 artillery mage 在你射程外消耗;6 级前带 hard CC 的 gank 直接终结这条线。E 落空就掉光蓝。"
  runes:
    primary_tree: "Sorcery"
    primary_tree_dd_id: 8200
    keystone:
      dd_id: 8230
      name: "Stormraider's Surge"
      icon_path: "perk-images/Styles/Sorcery/PhaseRush/StormraidersSurgeRuneIcon2.png"
    primary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8345, name: "Biscuit Delivery", icon_path: "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Sorcery 优于 Domination/Precision:Stormraider's 提供她技能组缺失的 Move Speed 爆发 (3 段快速触发)。Manaflow 撑住 40 蓝的 E 狂刷,Transcendence 提升 Ability Haste (技能冷却更快),Gathering Storm 在后期完全压过 Electrocute 的爆发。"
    secondary_rationale: "副系 Inspiration:Liandry's Torment 成型前的艰苦对线期,Biscuit Delivery 帮你撑蓝撑血,Cosmic Insight 让团战中的 Flash 与装备主动效果更频繁回到手上。"
    secondary_alternative: "对位强 poke 或 burst (Xerath, Syndra, Zed) 时,把 Inspiration 换成 Resolve:Second Wind (远程消耗回血) 加 Bone Plating (吃下 all-in 前 3 段连击)。"
matchup_draft:
  pick_into:
    - examples: ["yasuo", "yone", "akali", "irelia", "zed"]
      archetype: "依赖 dash 的中单"
      reason: "Miasma 把他们锁在云里:踩进去的瞬间,所有 dash、blink、位移技能全部失效。她直接抹掉对方逃命的关键工具,他们的技能组当场塌陷。"
    - examples: ["karthus", "veigar", "anivia"]
      archetype: "无逃生手段的脆皮法师"
      reason: "Cassiopeia 在长 trade 里碾压必须站桩施法的对手:E (cd 0.75s) 对中毒目标的伤害高过他们整套技能,而且他们躲不开扔在脚下的 W。"
    - examples: ["renekton", "sett"]
      archetype: "必须贴脸输出的 melee 战士"
      reason: "没有长 dash,他们必须穿过 W 与 Q 的毒走完 700 距离才能碰到她。Twin Fang 每次 trade 都把她奶满。"
  counterpicks:
    - examples: ["xerath", "vel-koz", "ziggs", "lux"]
      archetype: "射程更远的炮台型法师"
      reason: "在 Cassiopeia 850 的 Q 距离之外稳稳消耗。她没有位移拉近距离,每条兵线都在掉血。她的 power curve 需要的发育在线上根本拿不到。"
    - examples: ["twisted-fate", "galio", "ryze"]
      archetype: "全图 / 跨地图支援者"
      reason: "Cassiopeia 被钉在中路 (没有快速 roam)。对手用大招翻边路与小龙;1v1 你赢了对线,但 macro (地图上别处的资源对换) 输了。"
    - examples: ["lissandra", "syndra"]
      archetype: "带 chain-lock CC 的爆发法师"
      reason: "他们能在 W 把人 ground 之前就把 Cassiopeia 钉住,然后一套秒。Lissandra 的 R 是即点即中 — Banshee's Veil 有用,但救不下打野跟进的 6 秒控制链。"
---

## 概述

Cassiopeia 是一名 battlemage (中距离作战的法师,而不是站在最远端) ,射程约 700 单位 — 刚好在普攻距离之外。在长 trade (对线伤害交换) 里,她几乎能压过任何需要 dash 才能贴近她的英雄。她的 **Twin Fang (E)** 冷却 0.75 秒,是所有中单里最低的 — 一旦 **Noxious Blast (Q)** 给目标挂上 poison,她就变成一道既治疗自己又持续输出的伤害流。**Miasma (W)** 是她的招牌:云内的敌人会被 *grounded* (定身) ,只要还在里面,dash、blink 与所有位移技能都失灵。把她拿来对位高机动刺客 (技能组围绕进进出出 dash 设计的英雄,比如 Yasuo、Akali、Zed) ,等于直接抢走他们吃饭的工具。

她的游戏思路一句话能讲清,但执行很慢:用 **Q** 给兵线 (一排小兵) 上毒,反复点 **E** 清线兼消耗,在 dash 型对手 engage (强行开团) 的瞬间扔下 **W**,6 级时正脸瞄准 **R** — 这个锥形会 stun 面对她的人,只对其他人减速。她没有 dash、没有 blink、没有任何相当于位移的工具,所以站位是每一次操作的代价。前进多踏一步,整个技能组就会在一次 CC chain (连续的 stun 与 root 接力) 里崩盘。**CC** = "crowd control",任何打断你的效果:stun、root、减速、沉默。

## 推荐出装

**起始装备:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 个 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**。Cassiopeia 极度吃蓝 (每次 E 都消耗蓝且释放频繁),Doran's 的回蓝正是 E 狂刷需要的。

**核心装备 (按购买顺序):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — 第一件成型装。burn 被动 (伤害不是一次结算,而是命中后几秒内分摊) 会在每个被你 E 命中的中毒目标身上叠加,在 Cassiopeia 身上几乎等于每次 cast 都触发。
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 固定法术穿透 (装备无视敌人一部分 Magic Resist,让你的技能伤害更高)。被动 Serpentine Grace 还会放大鞋子的 Move Speed。
3. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 全游戏最大的 AP (Ability Power,法术伤害的成长属性) 乘数。在长团战里你 E 要打 30+ 次,每一次都因此暴涨。
4. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 法穿,在敌人血量低于 35% 时收益更高 (HP-threshold passive: 在目标血量跌过某个百分比后启动的装备效果) 。正好和收割 back line carry (脆皮输出,比如 ADC 与法师,你方需要先击杀的目标) 的节奏对齐。

**情境装:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 对位 burst 刺客 (Zed, Talon, Akali — 1-2 秒打出大量爆发的英雄) 。2.5 秒金身主动效果 (无敌但无法移动或施法) 给 **E** 留出冷却归位时间,也给队友提供 peel (把敌人挡在你身边之外) 的窗口。
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 对位会打断 E 的单体法术 CC (Ahri 的魅惑、Lissandra 的 R、Twisted Fate 的黄牌 stun)。
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 对位高回血阵容 (中单 Soraka, Vladimir, 上单 Dr. Mundo):施加 Grievous Wounds (一种把敌方治疗削减约一半的减益效果) ,压制 lifesteal (从造成的伤害中吸取生命) 和 regen。
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 一旦优先目标 (你方最需要击杀的敌人,通常是对面的核心 carry) 出了魔抗装,立即替换 Shadowflame 槽位。
- ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — 对位强行近身的 melee 阵容。每次 E 命中刷新一段减速,叠加 W 的 ground 一起为后排提供 peel (保护)。

**鞋子:** 默认 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**。如果想拉长 **W** 的 uptime 持续锁住对方 dash,可以选 ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** (提供 Ability Haste、缩短技能冷却的鞋子) 。

**加点顺序:** 主升 **E** (主输出按键) ,副升 **Q** (poison 与 Move Speed) ,**W** 最后。**R** 在 6、11、16 级各加一点。

**符文:** 主系 **Sorcery**,基石 **Stormraider's Surge** (基石就是符文树最顶部、影响力最大的一颗;"proc" 一颗符文意思是触发它的效果 — Stormraider's 在 3 次快速技能命中后触发) ,搭配 **Manaflow Band**、**Transcendence**、**Gathering Storm**。副系 **Inspiration** 带 **Biscuit Delivery** 与 **Cosmic Insight**;面对强 poke (远程持续蹭血) 时,改副系 **Resolve** 带 **Second Wind** 与 **Bone Plating**。

## 关键对线

- **Yasuo / Yone:** 技能组都是 dash。第三段 Q 是带挑飞的 dash — 他们第一次跳到你脸上时,把 **W** 扔在脚下。他们卡在近身、没了位移,**E** 狂刷直接赢。**R** 留给他们的大招,这样会被正脸吃下 stun。
- **Zed:** Threat champion (重大威胁) 。他打出领先就把 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** 提到第二件成型。他放大招的瞬间 (标记你并传送到一个分身) ,马上把 **W** 扔在自己脚下;如果他落到你背后,他换分身的传送会被 W 的 ground 锁住,逃不掉。
- **Xerath:** 困难对线。他在你 **Q** 距离之外消耗 (从你打不到的距离一直蹭血) 。塔下放掉一些 CS (creep score:击杀小兵获得的金币) ,6 级找下路 roam (离线去帮队友) 的机会 — 在线上硬刚他只是白白掉血。
- **Akali:** 6 级前你靠 E 狂刷中毒目标稳赢长 trade。6 级后她的 smoke shroud (W) 会把人藏起来,直接断掉你 E 的目标。两侧布眼,**R** 没好别推过头。
- **Twisted Fate:** 你能赢线,但赢不了地图。他用黄牌 stun 你、大招到下路,游戏变成你影响不到的 cross-map fight (远离你所在位置发生的击杀) 。一有机会就推线,他大招好一次就给下路打一次警告信号。

## 强势期与胜利条件

- **2 级:** 一点 **Q** 加一点 **E**,你已经有了第一个"先毒再点"的循环。当对方兵线 (一排小兵) 比你大时,往前走逼一次 trade。
- **6 级:** **Petrifying Gaze (R)** 解锁。近距离正脸的 **R** stun 约 1.5 秒,足够接完整套 **Q-W-E-E-E**。在兵线回弹 (兵线停止前进、开始往你这边推回来的瞬间) 时强行开团。
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment 成型 (~第 11-13 分钟):** 你的 E 狂刷在普通命中之上叠加一层燃烧 (持续伤害) 。推线速度直接翻倍,逼住对面中单的 roam 时机窗口。
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap 成型 (~第 24-28 分钟):** 每次 E 的伤害大幅 scaling (从这件装备拿到极大收益) 。在资源点 (Drake、Baron、防御塔) 周围的中路团战里站住核心位 — 后期 Cassiopeia 比其他法师站得更靠前,几乎像第二条前排。

## 常见错误

- **目标没中毒就放 E。** **Twin Fang** 对干净目标只是普通法术伤害,只有对中毒目标才打额外伤害。永远先 **Q** (或 W),再狂刷 E — 不能反过来。
- **为完美 engage 攒着 W。** **Miasma** 也是防御。Yasuo 一放 W (挡飞行物的风墙) 或 Akali 开大,就把 **W** 扔在自己脚下。哪怕队友跟不上,ground 也能直接掐断他们的位移技能。
- **R 乱开。** **Petrifying Gaze** 只 stun 面对你的敌人。从侧面或背后开,只能减速,白浪费冷却。先走到团战正面,再转身放 R。
- **没有视野就推过河。** Cassiopeia 没有逃生。河道草丛里没有 ward (放在地图上提供视野的饰品) 时,对方打野带 hard CC (长时间 stun 或 root,与 slow 这种 soft CC 相对) 来一次伏击 (称作 *gank*) ,这条线就结束了。
- **前 5 分钟不管蓝量。** 每次 E 不论等级都消耗固定 40 蓝。Manaflow Band 没起来前在小兵身上反复点会让你两波兵就空蓝,在 all-in (对方押上一切来杀你) 面前毫无还手之力。

## 进阶技巧

练习把 **W (Miasma)** 在被 dash 命中的那一瞬间扔在 *自己脚下*,而不是面前。云一落地,ground 立刻生效 — 当 Yasuo、Yone 或 Akali 从近身切进来时,他们正好站在云生成的位置,瞬间失去第二段 dash。大多数 Cassiopeia 玩家还在像消耗技一样把 W 扔在身前,完全错过这个能当场封死大部分刺客 all-in 的防御性用法。
