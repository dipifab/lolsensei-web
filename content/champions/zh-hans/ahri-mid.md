---
title: "Ahri Mid Build & Guide — Patch 16.9"
slug: "ahri-mid"
language: "zh-hans"
patch: "16.9"
champion: "ahri"
role: "mid"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Ahri 九尾妖狐中单完整攻略:法师刺客出装顺序、Sorcery 符文加点细节、起手连招与 Charm 命中思路、对线消耗与压制节奏、强势期切入与 pickoff 时机、新手常见错误规避以及 Q-back 进阶连招技巧。"
quick_learn:
  champion_dd_id: "Ahri"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Mage / Assassin"
  abilities:
    - key: "P"
      name: "Essence Theft"
      description: "击杀 9 个小兵或野怪后回血;参与击杀英雄时回血量更高。随发育线性增长的对线 sustain (续航)。"
      dd_spell_id: "Ahri_Passive"
    - key: "Q"
      name: "Orb of Deception"
      description: "直线非指向技能,抛出灵球后再回收。去程造成法术伤害,回程造成 true damage (真实伤害)。主要清线与 poke 工具。"
      dd_spell_id: "AhriQ"
    - key: "W"
      name: "Fox-Fire"
      description: "释放 3 团狐火自动锁定附近敌人;首次命中造成完整伤害,后续命中削减。同时给 Ahri 提供短暂的 Move Speed 加成。"
      dd_spell_id: "AhriW"
    - key: "E"
      name: "Charm"
      description: "非指向飞吻,魅惑命中的第一名敌人 — 让其无害地走向 Ahri 并承受伤害。Setup (起手) 工具,绝不要当作裸 poke 来用。"
      dd_spell_id: "AhriE"
    - key: "R"
      name: "Spirit Rush"
      description: "短时间内最多三段位移,每段都射出自动锁定的弹幕。参与击杀英雄延长读条窗口。机动性加上收割能力。"
      dd_spell_id: "AhriR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "E" }
    - { level: 3, key: "W" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "6655", name: "Luden's Companion" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对位 diver 与刺客 (Zed, Diana, Talon, Fizz) — 金身让你切入 R 后还能保命撤出团战"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "对位单体法术 CC (Lissandra R, Twisted Fate 黄牌, Morgana Q)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "只要任何核心目标买了魔抗装就立刻替换 (Mercury's Treads + 魔抗件)"
    - dd_id: "4646"
      name: "Stormsurge"
      against: "敌方阵容有 4 个以上脆皮想要秒杀时的替代首件 — 单体爆发上限更高,但持续伤害更弱"
  base_combo: ["E", "R", "W", "Q", "AA"]
  win_condition: "Charm 一名脆皮目标,用 R 切入,打出 W 配合回程的 Q true damage,再用剩余的 R 段数撤出。把每次 pickoff 滚成下一条龙或下一次 roam。"
  weakness: "没有 Charm 就没有爆发。E 空了一整套连招就泡汤;R 进 CD 时没有 escape,任何硬控都能秒掉你。"
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
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "annie", "viktor"]
      archetype: "无位移的脆皮法师"
      reason: "Ahri 的 E (Charm) 是远距离的非指向束缚。没有位移、没有隐身的目标会被一条干净的弹道钉住,在脱离射程之前就吃下完整的 R + Q + W 连招。"
    - examples: ["caitlyn", "senna", "ziggs"]
      archetype: "缺乏 escape 的后排发育型"
      reason: "Spirit Rush 给 Ahri 三段可以靠击杀刷新的位移 — 她能越过前排,秒掉一个没有位移的 carry,在 peel 赶到之前就 dash 撤出。"
    - examples: ["malzahar", "vladimir"]
      archetype: "缺乏爆发的持续伤害法师"
      reason: "Ahri 一套完整的 R 连招爆发能在一秒内秒掉他们,他们的持续伤害和回血还来不及堆叠成一次有意义的 trade。"
  counterpicks:
    - examples: ["yasuo", "yone"]
      archetype: "拥有 Wind Wall 的英雄"
      reason: "他们的 Wind Wall 能挡住 Charm 和 Q 的灵球。Ahri 同时失去 setup 工具和主要 poke 手段 — 必须走进风墙里面才打得到东西,而那正是他们想要的位置。"
    - examples: ["fizz", "kassadin"]
      archetype: "带魔法减伤的高机动刺客"
      reason: "Fizz 的 E 能闪掉 Ahri R 的弹幕,被动还削减魔法爆发;Kassadin 有魔法护盾加上瞬移。Ahri 交完整套连招他们靠一丝血幸存,然后在 recovery (硬直) 帧反杀她。"
    - examples: ["lissandra", "galio"]
      archetype: "带硬控的反刺客法师"
      reason: "他们的硬控会在 R 中途接住 Ahri:位移窗口里一个 root 或嘲讽就能同时切断她的输出和 escape,让一次 pickoff 尝试变成对方的免费人头。"
---

## 概述

Ahri 是一名中单的法师 - 刺客:她像 mage 一样在远距离 poke,但 **Spirit Rush (R)** 让她可以切入战场,秒掉一个脆皮目标 (低血量、低防御的英雄,比如 ADC 或法师),再 dash 撤出 — 这种打法叫 **pickoff** (单点击杀,而不是完整的 teamfight)。她的 kit (整套技能) 围绕 **Charm (E)** 展开,这是一个能把敌人定身的非指向飞吻。她的其他每一个技能都是为衔接这一发命中而设计的。**R** 有一个特殊机制:每次参与击杀英雄都会刷新一段位移读条,所以一次成功的 pick 可以让她在同一场战斗里再衔接一次。

她的游戏思路是耐心,然后 commit (全压一套连招、没有回头路)。用 **Q** **farma** (击杀小兵换取 gold 与经验),在河道插好视野 ward (眼位),等敌人走到一个可以预判的位置再扔 **E**。一旦 **Charm** 命中,剩下的连招就是机械动作:用回程的 **Q** 灵球把目标拉过来,放出 **W** 打自动锁定的伤害,**R** 用来拉近距离或者撤退。6 级之后她是游戏里最强的 **roaming** (脱离自己的 lane 去支援 top 或 bot) 英雄之一 — 每一次小龙刷新都是一个翻盘地图节奏的机会。

## 推荐出装

**起始装备:** ![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + 2 个 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**。Doran's Ring 是 mage 的标准起始件:少量 AP (Ability Power,法术强度,加成法术伤害的属性)、额外 HP,加上蓝量回复让你能不断 spam **Q**。

**核心装备 (按购买顺序):**

1. ![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) **Luden's Companion** — 首次技能命中的爆发节点,以及让你按 CD 频繁放 **Q** 所需的 mana sustain (蓝量回复,避免你打到一半空蓝)。12 分钟前要拿到。
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 固定法术穿透 (你的伤害无视敌人一定数值的 Magic Resist)。
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 额外爆发,带血量阈值的被动:目标低于约 35% HP 时激活,正好与 **R** 的收割衔接 (击杀残血敌人)。
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 后期乘数装。把你的总 AP 提高 35%,几乎让前面每件装备贡献给连招的伤害都翻倍。

**情境装:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 对位 diver (突进进场秒掉单体目标然后撤出的英雄) 与刺客 (Zed, Diana, Talon, Fizz)。主动技能让你变成无法被选中的金色雕像 (stasis,金身) 持续 2.5 秒,在你 commit **R** 切入团战深处之后还能保命。
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 对位单体法术 CC (crowd control,控制效果:晕眩、定身,或任何让你动不了的技能)。护盾会挡掉第一个会控住你的技能。
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 只要敌方任何一个核心目标买了魔抗 (通常是 Mercury's Treads 加一件魔抗装) 就立刻接出。
- ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — 当敌方阵容有 4 个以上脆皮目标想要 one-shot (一套秒杀) 时的替代首件。用持续输出换取更高的单点爆发上限。

**鞋子:** 默认 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes**。只有当敌方阵容有多条针对你的硬控连招时才换 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** (硬控 = 晕眩、定身、击飞、嘲讽 — 完全夺走英雄操作权的那种 CC)。

**加点顺序:** 主升 **Q** (waveclear — 快速清掉一波小兵 — 与主要 DPS,damage per second,每秒伤害),副升 **W** (团战伤害),最后升 **E** — 它的基础伤害不重要,只有 charm 的持续时间值得加。**R** 在 6、11、16 级各点一级。

**符文:** 主系 **Sorcery** 带 **Arcane Comet** (每次技能命中触发的延迟法术弹幕)、**Manaflow Band** (最大蓝量提升,随技能命中成长)、**Transcendence** (ability haste — 所有技能冷却缩减)、**Scorch** (每 10 秒第一次技能命中附带少量燃烧伤害 — 对线 harass 神器:慢慢消耗敌人 HP 的小额伤害)。副系 **Inspiration** 带 **Magical Footwear** (大约 12 分钟自动获得免费鞋子) 和 **Cosmic Insight** (额外 ability haste,包括 **Flash** — 你绑在 F 或 D 键的短距离闪现召唤师技能)。

## 关键对线

- **Yasuo / Yone:** 两人都能用 Wind Wall 拦下飞行中的 **Q** 和 **E** (Wind Wall 是他们放置的墙形屏障,挡住所有穿过它的弹道)。憋住 **E** 等他们交完一个技能,在最大射程外用 **W** farm — 三团 fox-fires 自动锁定,可以无视 Wind Wall,是面对风墙时唯一安全的伤害手段。
- **Zed:** 五五开的对线,胜负全看装备。6 级前只在他的 **Q** 明显进 CD 时才上前。6 级后留 **R** 用来 dash 出他的大招 — 把 **R** 用来主动进攻、然后他大招砸下来时没有 escape,这是输掉这条线最快的方式。
- **Galio:** 他专门惩罚抱团 — 他的 **W** 嘲讽他队友附近的目标。用 **Q** 把兵线推过去,然后去 side lane roam,他用大招追不上你的三段位移那么快。
- **Twisted Fate:** roam 优先权之争。他用 **R** 提供全图压力,你有三段位移机动性 — 威胁等价。他大招亮起来的瞬间用 **Q** 把每一波线推过去,在河道两个入口都插眼,这样如果他想 gank 你 (敌方打野进你的线杀你),你能用 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** 应对。
- **Cassiopeia:** 在持续 trade 里 outscale (后期成长更快) 你,因为她的 **W** 会禁掉你 **R** 的位移 (你不能 dash 穿过她的禁飞区域)。只打短促的 trade (trade = 短暂的技能与平 A 交换,而不是生死战),她的 **W** 在场时绝不主动 commit **R**。

## 强势期与胜利条件

- **2 级:** 解锁 **Q + E** 后,如果敌人走得太靠前,你已经具备一波线杀的工具。憋住 **E**,装作上前补刀 (last-hit,给小兵最后一击拿 gold) 接近,在他们进入你的平 A 范围时甩出 charm。
- **6 级:** 第一次 **Spirit Rush** 解锁 pickoff 潜力。**E → R → W → Q** 连招能秒掉任何还没出一件防御装的脆皮英雄。
- **![Luden's Companion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6655.png) Luden's Companion 成型 (约 12-14 分钟):** 兵线主动权反转 — 你可以 shove (把一波线快速推到对方塔下) 并按 CD roam。这时你的胜利条件激活:roam、charm、击杀、dash 撤出。每一次成功的 pickoff 都会 snowball (滚雪球) 到下一次 — 一个人头的 gold 撑起一件装备,让下一次 pick 更轻松。
- **三件核心成型 (约 24 分钟):** 三件核心装备到位后,你完整的 **R** 连招能秒掉任何低于 70% HP 的后排英雄 (carry — ADC、mage — 站在自家坦克之后的输出位)。在这个时间点强开资源点团战 (5v5 抢龙、Baron 或塔)。

## 常见错误

- **没有 setup 就甩 E 当 poke。** 裸 **Charm** 弹道慢、CD 长 — 大部分中单对手会反应躲掉。用一波兵或一个小兵作掩护,瞄向他们必须经过去补刀的路径。
- **用 R engage (开团) 而不是收尾。** **Spirit Rush** 是你唯一的 escape。如果你切入时没有一个保证能死的目标,你就交出了位移窗口,然后他们整队压上来时被秒 (他们的队友轮转过来收掉你,因为你已经卡死在错误位置上)。
- **狂 spam Q 当 poke 然后 OOM。** OOM 就是 out of mana (空蓝):没有蓝量你放不出技能,30 秒内变成一个废物只能平 A。**Orb of Deception** 单次施放消耗很高:把它留给清线和稳赢的 trade。
- **忘了 R 击杀重置。** 当你在 **Spirit Rush** 期间拿下一个人头时,读条窗口会延长。把这一点内化到肌肉记忆的玩家可以在同一场团战里把一次 pick 接到第二次 pick,而不是首杀后立刻 dash 撤出。

## 进阶技巧

练习 **Q-back 连招**:把 **Q** 扔到目标前方,然后立刻用 **R** 穿过他们。回程的灵球此时会以贴脸距离穿过敌人,打出 true damage 部分 (true damage 无视所有敌人的抗性 — 哪怕是坦克也吃完整伤害),与此同时你已经在近身位置上 **W** 自动开火。这样打出的一发 **Q + R + W** 会在不到一秒内叠加三段伤害 — 比教科书顺序 **E → R → W → Q** 提示的爆发要高得多,而且哪怕 **Charm** 还在 CD 里也能用。
