---
title: "Fizz Mid Build & Guide — Patch 16.9"
slug: "fizz-mid"
language: "zh-hans"
patch: "16.9"
champion: "fizz"
role: "mid"
last_updated: "2026-04-29"
description: "League of Legends 16.9 版本 Fizz 中单完整攻略:AP 刺客的核心出装路线与起始装备选择、Domination 主系符文搭配细节、关键对线英雄应对思路、Lich Bane 与 6 级强势期把握、新手常见操作错误规避方法,以及 R-Flash 高阶连招训练要点等内容,全部整合在一个页面里的实战入门指南。"
quick_learn:
  champion_dd_id: "Fizz"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Assassin / AP Melee"
  abilities:
    - key: "P"
      name: "Nimble Fighter"
      description: "可穿过单位 (小兵不阻挡),并对所有伤害来源都有一段固定减伤。能切过自家兵线脱身,辅助 disengage。"
      dd_spell_id: "Fizz_Passive"
    - key: "Q"
      name: "Urchin Strike"
      description: "550 距离的指向位移,穿过敌人造成法术伤害,并触发 on-hit 效果 (每次普攻触发的装备被动,如 Lich Bane 的法穗)。主要切入手段,冷却很短。"
      dd_spell_id: "FizzQ"
    - key: "W"
      name: "Seastone Trident"
      description: "被动:你的普攻让敌人在 3 秒内持续掉法术伤害。主动:强化下一次普攻造成额外法术伤害。在 W 激活状态下击杀目标,冷却会重置为 1 秒。"
      dd_spell_id: "FizzW"
    - key: "E"
      name: "Playful / Trickster"
      description: "跳上三叉戟:0.75 秒 untargettable (无法被锁定),随后落地造成 AOE 法术伤害与减速。再施放可改成第二段位移而非落地 (无减速、范围更小)。唯一逃生与连招核心。"
      dd_spell_id: "FizzE"
    - key: "R"
      name: "Chum the Waters"
      description: "1300 远程直线非指向技能。粘住第一个命中的英雄并减速,随后鲨鱼喷出将其顶飞。伤害与减速强度随鱼飞行距离递增。"
      dd_spell_id: "FizzR"
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
    - { dd_id: "3100", name: "Lich Bane" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3152"
      name: "Hextech Rocketbelt"
      against: "对位远程 poke 阵容时的备选首件,需要额外位移才能切到后排时换它"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对抗强力 CC 锁链 (Lissandra R, Rell ult) 时,金身能让 R fish 撑到爆裂"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "对位单体法术 CC (Annie 晕、Twisted Fate 黄牌、Malzahar 压制)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "只要任何核心目标买了一件魔抗装就立刻接出"
  base_combo: ["R", "Q", "W", "AA", "E"]
  win_condition: "Lich Bane 成型后到边路找孤立的脆皮。极限距离丢出 R fish,然后 Q + W + AA spellblade 直接秒掉。带兵线推到对方半区再 roam。"
  weakness: "只有一次 engage 周期的脆皮近战。E 或 R 进 CD 就既无逃生也无二段切入;集中 CC 会在 R fish 落地前就打断连招。"
  runes:
    primary_tree: "Domination"
    primary_tree_dd_id: 8100
    keystone:
      dd_id: 8112
      name: "Electrocute"
      icon_path: "perk-images/Styles/Domination/Electrocute/Electrocute.png"
    primary_slots:
      - { dd_id: 8126, name: "Cheap Shot", icon_path: "perk-images/Styles/Domination/CheapShot/CheapShot.png" }
      - { dd_id: 8137, name: "Sixth Sense", icon_path: "perk-images/Styles/Domination/SixthSense/SixthSense.png" }
      - { dd_id: 8106, name: "Ultimate Hunter", icon_path: "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8237, name: "Scorch", icon_path: "perk-images/Styles/Sorcery/Scorch/Scorch.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "anivia", "twisted-fate"]
      archetype: "无位移的脆皮法师"
      reason: "Fizz 的 Q 直接位移穿过他们,E 提供 0.75 秒 untargettability 来躲核心技能。没有逃生位移就接不住 R fish 粘人后的 all-in。"
    - examples: ["lux", "xerath", "ziggs"]
      archetype: "无机动力的远程炮台"
      reason: "R fish 1300 距离专治极限站位。Fizz Q + E 切入后,他们没有位移重置距离,只能硬吃整段爆发窗口。"
    - examples: ["annie", "syndra"]
      archetype: "起手明显的近距离爆发法师"
      reason: "他们的爆发要求贴近且前摇明显 (Annie 晕缓冲、Syndra E 起手)。Fizz 在施法窗口里 E 入水变 untargettable,连招直接打空。"
  counterpicks:
    - examples: ["malphite", "galio"]
      archetype: "拥有强开的坦克型中单"
      reason: "他们的抗性把 Fizz 爆发砍掉一半 (Galio W 减约 50% 法伤,Malphite 被动护盾挡掉 W 触发)。两人 6 级都有强开,Fizz 先手反而被惩罚。"
    - examples: ["lissandra", "malzahar"]
      archetype: "指向型 CC 法师"
      reason: "Lissandra R 是指向金身,没有 skillshot 可以靠 E 躲掉;Malzahar R 的压制能穿透 E 再施放。两人都能稳定清线,Fizz 在线上压不住他们。"
    - examples: ["pantheon", "talon"]
      archetype: "前期对线霸主"
      reason: "在 6 级强势期之前,1-3 级他们就能压过 Fizz。Pantheon W 晕和盾化 Q 惩罚每一步前压;Talon Q 的射程和 Fizz Q 持平,蓝耗却更低。"
---

## 概述

Fizz 是一名近战 AP 刺客,他能否打赢就取决于 **Playful / Trickster (E)** 的时机。他的技能组短手、高爆发 (伤害集中在 1-2 秒内,而不是平摊在长时间里)、且滑溜:0.75 秒无法被锁定的窗口,一段低冷却位移,加上一发能锁住核心目标的远程鱼鱼大招。中路适合他,因为河道短 — 6 级起就能用 **Q-E** 接 **R** 切入,在连招中途躲掉敌人的反 CC,然后再用 **E** 第二段脱身。

游戏思路是在线上熬到双件核心 (Lich Bane + Sorcerer's Shoes) 节点,然后到边路找 pick (在团战外切掉孤立的敌人) 收掉脆皮 (HP 低、没有防御属性的英雄,在爆发下死得很快)。Fizz 自己也很脆,没有清线,而且唯一的逃生 **E** 在 1 级冷却就有 16 秒 — 空交一次代价极大。所以 Fizz 喜欢一个一个秒,而不是 5v5 团战 — 团战里集中 CC 会在 R fish 落地前就把连招打断。

## 推荐出装

**起始装备:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 个 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**。对位 Xerath、Vel'Koz 这种远程 poke (远距离消耗 HP) 重的对手时,改 ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**。

**核心装备 (按购买顺序):**

1. ![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) **Lich Bane** — 主要爆发节点 (你伤害量级跳上一档、能正面起冲突的时机)。和 Q-AA 的节奏天生契合:每一次 **Q** 都会给下一次普攻挂上法穗,几乎让爆发翻倍。
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 固定法穿,直接提升你击杀脆皮的效率。
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 额外爆发,加上残血阈值被动 (敌人血量低于 ~35% 才生效的装备效果),正好和 R fish 的收尾衔接。
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 后期 scaling (随时间变强) 乘数装,你最高 AP 的单件,把脆皮变成一波带走的目标。

**情境装:**

- ![Hextech Rocketbelt](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3152.png) **Hextech Rocketbelt** — 备选首件,适合需要额外 gap-close (拉近敌我距离的手段) 才能切到对方远程后排、单靠 **Q** 切不进去的局面。
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 对抗强力 CC 锁链 (Lissandra R, Rell ult) 时,金身能让 R fish 撑到爆裂再死。
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 对位单体法术 CC (Annie 晕、Twisted Fate 黄牌、Malzahar 压制)。
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 只要任何核心目标买了一件魔抗装就立刻接出。

**鞋子:** 默认 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**。在 **E** 成为最关键冷却的连招重度依赖局,可以考虑 ![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity**。

**加点顺序:** 主升 **E** (untargettability 和 AOE 伤害成长 — AOE 是 *area of effect*,技能在一片区域内全部命中),副升 **Q** (冷却缩减 = 每场战斗多几段位移),最后升 **W**。**R** 在 6、11、16 级各点一级。

**符文:** 主系 **Domination**,带 **Electrocute**、**Cheap Shot**、**Sixth Sense**、**Ultimate Hunter**。副系 **Sorcery** 带 **Manaflow Band** 与 **Scorch**。Electrocute 完美契合 Q-AA-W 三段命中窗口:每次 all-in (全力打到击杀或脱身的连招) 都能稳定触发。

## 关键对线

- **Annie:** 起手明显。Annie 被动每施放四个技能就给下一个加晕,你能看到她身边累计四个小蓝标。四标一满就是她准备 all-in 的瞬间。在她交晕的那一刻 **E** 跳起,落地时她的核心连招已经空交,trade 直接归你。
- **Yasuo / Yone:** Yasuo 的风墙 (能挡住穿过它的远程技能) 拦投射物,但 Fizz 的 **Q**、**E**、**R** 都不是可被挡的投射物。开 **W** 用普攻 out-trade (打完 trade 后净赚出场),他们的风墙对你就是浪费的机制。
- **Lissandra:** 硬克制。她的 **W** 是一段贴脸 AOE (area of effect — 一片区域全部命中) 定身,**R** 是指向金身 (没有 skillshot 可以躲:她点你,技能就生效)。两个都不是 **E** 能躲的 skillshot (非自动锁定、按直线或区域飞行、可以靠走位躲开的技能)。**E** 留给她 **W** 起手,没 **R** 绝不 all-in,改去边路找 pick。
- **Galio:** 坦克属性,加上 **W** 的法伤减免被动直接砍半你的爆发。别再想着单杀他;把蓝量砸去推线 (把己方小兵推到对面塔下,他们就不能自由走过来) 然后在 **R** 好的瞬间 roam (离开己方分路去地图其他地方支援队友) 下路或上路。
- **Pantheon:** 6 级前压你。**W** 晕和盾化 **Q** 在 1-3 级直接 out-trade。站在自家兵线后,只在他 **W** 进 CD 时才出去 trade。一旦你 6 级有 **R**,这条对线就反转。

## 强势期与胜利条件

- **2 级:** **E** + **Q** 给你一个稳定的位移 + 减速 + AOE 伤害循环。如果敌人上前补刀 (打最后一刀拿钱) 一个近战兵,**E** 直接踩在他身上接 **Q-AA**,赢下这一波 trade (短时间的伤害交换,你净赚出场)。
- **6 级:** 第一次 **Chum the Waters** 解锁所有 all-in。**R-Q-W-AA-E** 连招在只买了 Lich Bane 配件时就能秒掉任何脆皮中单。把兵线推过去之后到下路 roam:小兵推到对面半区,他们花在防线的时间比你离开线的时间更多。
- **![Lich Bane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3100.png) Lich Bane 成型 (约 11-13 分钟):** 爆发节点 (伤害陡然跳上一档的时机)。一次 Q-AA 法穗就能砍掉脆皮约 40% HP。这段时间应该激进 roam 找 pick,而不是留在线上 1v1。
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap 成型 (约 24-28 分钟):** 满连招能秒掉任何还没买魔抗装的脆皮。在这个时机强行围绕资源点开团;在己方半区做 vision deny (毁掉敌方守卫,让他们看不到地图),让对方看不到你 flank (从他们没覆盖的侧翼切进团战) 的方向。

## 常见错误

- **在敌人交技能前先 E。** **E** 是你唯一的逃生。如果不先 bait 出对方 CC 就跳,落地就吃满。等他们交关键技能 — *然后再* 跳。
- **R fish 距离太近。** 鱼的伤害和减速强度随粘人前飞行距离增加。从 1300 极限距离开火,才会满伤害命中,减速也覆盖整个引爆窗口。
- **2+ 个敌人堆中 all-in。** Fizz 的 engage 周期只有一次 (一段连招里全部押上)。连招到一半再来一个目标,你既没有第二条 R fish,也没有第二段逃生,直接被集中 CC 收掉。去边路找孤立目标,别在中路 5v5。
- **追击中忘了开 W。** 在 **W** 激活下击杀会返还法力并把冷却压到 1 秒 — 你能立刻对第二个目标接一发强化普攻。只要附近还有跟进目标,就在击杀前一刻先开 **W**。
- **常规对线就主升 W。** **Q** 和 **E** 才是你伤害与连招节奏的承担者;**W** 流血是长 trade 里有用的持续 DPS,在爆发窗口里没意义。默认主升 **E**。

## 进阶技巧

练 **R-Flash 连招** (R + Flash)。先把鱼丢出去,紧接着同方向 **Flash**:鱼的落点会远超 1300 自然射程,把自以为出圈的目标直接钉住。可以用来跨墙 pick,也可以从对方意料之外的角度强开资源点团战。施放到 Flash 的窗口很短 — 把 **Flash** 绑到第二个键 (D) 形成肌肉记忆,在训练模式里反复练到时机自然出手为止。
