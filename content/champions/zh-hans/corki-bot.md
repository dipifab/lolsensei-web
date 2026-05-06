---
title: "Corki Bot Build & Guide — Patch 16.9"
slug: "corki-bot"
language: "zh-hans"
patch: "16.9"
champion: "corki"
role: "bot"
last_updated: "2026-05-02"
description: "League of Legends 英雄联盟 16.9 版本 Corki 飞机下路完整攻略:混伤 ADC 出装顺序、符文选择、关键 2v2 对线思路、强势期节奏把握、新手常见错误规避以及 Big One 节奏掌控等进阶技巧。"
quick_learn:
  champion_dd_id: "Corki"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Marksman / Hybrid"
  abilities:
    - key: "P"
      name: "Hextech Munitions"
      description: "普攻额外造成一部分真实伤害。这是无视 armor 与 magic resist 的稳定 DPS 来源,也是堆叠攻速与 on-hit 装备的理由。"
      dd_spell_id: "Corki_Passive"
    - key: "Q"
      name: "Phosphorus Bomb"
      description: "指定区域的法术伤害,短暂揭示命中目标的视野。被压制时用来补刀、查草丛,以及开启所有线上消耗 trade。"
      dd_spell_id: "PhosphorusBomb"
    - key: "W"
      name: "Valkyrie"
      description: "短距 dash 并留下火焰带。Corki 唯一的位移 — 用于逃生、贴脸或闪 skillshot。冷却很长,绝不要拿去清线。"
      dd_spell_id: "CarpetBomb"
    - key: "E"
      name: "Gatling Gun"
      description: "面前的扇形持续输出。造成伤害并削减目标 armor 与 magic resist。在长 fight 中提供稳定 DPS,并为 R 弹幕削软坦克。"
      dd_spell_id: "GGun"
    - key: "R"
      name: "Missile Barrage"
      description: "命中后爆炸的远程导弹,最多储存 7 发,每第三发是带额外爆发的 Big One。Corki 的主力消耗与处决工具。"
      dd_spell_id: "MissileBarrage"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3004", name: "Manamune" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3094", name: "Rapid Firecannon" }
    - { dd_id: "3046", name: "Phantom Dancer" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "对面前排两名以上坦克(Sion、Ornn、Maokai):提供高额护甲穿透,让持续 DPS 也能打穿"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "对面叠回复的阵容(Soraka、Aatrox、Vladimir、Dr. Mundo):施加重伤,把治疗效果减半"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "对面 AP 高爆发威胁(Brand 辅、Veigar、Syndra 中):魔法护盾吃下一整套连招,让你 W 撤"
    - dd_id: "3139"
      name: "Mercurial Scimitar"
      against: "对面有单体定身大招(Malzahar R、Skarner R、Mordekaiser R):主动效果解除会让你团灭的压制"
  base_combo: ["Q", "AA", "R", "AA", "E"]
  win_condition: "靠 R 消耗与 Q 持续伤害撑过 2v2 到两件套,再用 Manamune 叠满后的普攻和后排打出的 R Big Ones 接管后期团战。"
  weakness: "脆皮且只有一段 dash。强势的早期对线(Draven、Lucian + 强开辅助)会在你做出 Trinity Force 之前把你赶出补刀位,挡投射物的技能(Yasuo Wind Wall、Braum E)直接封死消耗。"
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8021
      name: "Fleet Footwork"
      icon_path: "perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Inspiration"
    secondary_tree_dd_id: 8300
    secondary_slots:
      - { dd_id: 8304, name: "Magical Footwear", icon_path: "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png" }
      - { dd_id: 8347, name: "Cosmic Insight", icon_path: "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "主系 Precision: Fleet Footwork 在普攻上稳定触发(Corki 靠真实伤害 passive 频繁普攻),提供回复与移动爆发 — 长 2v2 中需要的线上 sustain。Triumph 与 Coup de Grace 收尾人头,Legend: Alacrity 累积攻速强化持续 DPS。"
    secondary_rationale: "副系 Inspiration: Magical Footwear 推迟买鞋但先拿其他属性,Cosmic Insight 缩短召唤师技能冷却(更频繁的 Flash 与 Heal),这是下路 2v2 中最大的生存撬杆。"
    secondary_alternative: "面对强消耗组合(Caitlyn + Lux、Ezreal + Karma)无法承受 Magical Footwear 的鞋子延迟时,把 Inspiration 换成 Sorcery,带 Manaflow Band(R 频繁释放的蓝量续航)与 Gathering Storm(后期 Q 与 Big One 的免费 AP 加成)。"
matchup_draft:
  pick_into:
    - examples: ["jinx", "twitch", "kog-maw"]
      archetype: "无逃生的近距离 hypercarry"
      reason: "在 Trinity 之前,Corki 用 1225 距离的 R 消耗加 W dash 拉开身位差。他们必须留在补刀范围,Corki 在他们 hyper-carry 强势期之前就把血线磨干。"
    - examples: ["senna", "ezreal"]
      archetype: "静态消耗 ADC"
      reason: "射程相当,但 Corki 拥有位移加即时 Q 区域伤害,而 Senna 与 Ezreal 的消耗都是单发投射物。他可以 W 借中了 Q 的小兵切入,不押冷却就完成回敬。"
    - examples: ["sivir", "ashe"]
      archetype: "无指向逃生的 ADC"
      reason: "Sivir 的 Spell Shield 只挡一个技能 — 吃掉 Q 之后下一发导弹就免费命中。Ashe 没有位移。Corki 用她们无法回应的 W 走位把对线拖入滚雪球。"
  counterpicks:
    - examples: ["draven", "samira"]
      archetype: "致命爆发型早期 ADC"
      reason: "他们在前 6 级压制 Corki 的 trade,并靠对线人头滚雪球。Trinity 前 Corki 单挑不过他们,任何激进使用的 W 都会被他们的 dash 重置套路惩罚。"
    - examples: ["lucian", "tristana"]
      archetype: "多段位移普攻交换型对线"
      reason: "Lucian 的 E 与 Tristana 的 W 可以自由进出 Corki 的普攻范围。Lucian 还在前期靠 passive 平 A 接 Q 的连段超过真实伤害的优势,在出装前正面打赢 Corki。"
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall 投射物拦截(下路非主流)"
      reason: "Wind Wall 吞掉 Q 与整个 R 弹幕。即便这两个英雄在下路非主流,这个对线依然难打,因为 Corki 在 trade 中三分之二的伤害凭空消失。"
---

## 概述

Corki 下路是一名混伤 marksman(混合物理与魔法伤害的远程平 A 核心),把对线打得像 mage-carry:1225 距离用 **Missile Barrage (R)** 远程消耗对方血线("poke"),被压住时用 **Phosphorus Bomb (Q)** 补刀和骚扰(小幅持续伤害的累积),等到 **Trinity Force** 加 **Manamune** 都堆好(完整出装并叠满)之后,凭借 **Hextech Munitions (P)** 让普攻打出一部分真实伤害(无视 armor 与 magic resist 的伤害),正式接管后期团战。下路适合他,因为辅助可以替他换来发育(随装备成型变强的过程)所需的时间,并且能在他唯一的位移 **Valkyrie (W)** 留给真正机会时,挡掉 dive 的人(扑向核心的敌方进场者)。

游戏思路一句话:用 R + Q 在最大射程 trade(短促的伤害交换)把对方 2v2 的血线磨下来,绝不在没有后续计划时浪费 W,然后撑到后期 — 满层 Manamune 加成的普攻配合 R 的 Big One(每第三发更强),可以在 backline(站在战场远处的敌方核心)直接 one-shot(一套带走)脆皮目标。

## 推荐出装

**起始装备:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**。Blade 提供的吸血(造成的部分伤害化为治疗回到自己身上)与平 A passive 配合,在前期 Q + 平 A 的 trade 中,比 Doran's Ring 更适合 ADC 站住身位。

**核心装备 (按购买顺序):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — Sheen(Trinity 的组件)在每个 Q 与每发 R 上 procc(触发额外伤害),同时给到 AD、攻速、ability haste(冷却缩减)与移速。Corki 单件装备最大的强势节点。
2. ![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) **Manamune** — 随着消耗蓝量,慢慢蜕变成更强的形态 Muramana;一旦"stacked"(完成蜕变)后,每次普攻和每个消耗蓝的技能(包括每发 R)都会附加额外伤害。
3. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — 固定攻速与 Trinity、passive 的真实伤害叠加。下路 Corki 的默认鞋子。
4. ![Rapid Firecannon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3094.png) **Rapid Firecannon** — 对敌方目标的第一次普攻("energized auto")造成额外伤害,并且射程比一般普攻更远。其暴击属性也契合 Trinity 的属性结构。
5. ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — 攻速加暴击(普攻造成额外伤害的概率),通过 **Gatling Gun (E)** 与 passive 真实伤害打出持续 DPS。

**情境装备:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — 对面前排两名以上坦克(Sion、Ornn、Maokai):高额护甲穿透,让持续 DPS 打穿。
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — 对面叠回复阵容(Soraka、Aatrox、Vladimir):施加重伤,把治疗效果减半。
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — 对面 AP 高爆发威胁(Brand 辅、Syndra 中):魔法护盾吃下一整套连招,让你能 W 撤。
- ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — 对面单体定身大招(Malzahar R、Skarner R、Mordekaiser R):主动效果解除否则会让你瞬间被秒的压制。

**鞋子:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** 默认。如果敌方有 3 个以上 AD 威胁专门针对你,改 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**。

**技能加点:** 优先升 **Q**(消耗、清线、法伤),其次 **E**(DPS 加 armor 与 magic resist 削减),最后 **W**(辅助性)。**R** 在 6、11、16 级各加一点。

**符文:** 主系 **Precision** 配 **Fleet Footwork**、**Triumph**、**Legend: Alacrity**、**Coup de Grace**。副系 **Inspiration** 配 **Magical Footwear** 与 **Cosmic Insight**,或者强消耗对线时换成 **Sorcery** 带 **Manaflow Band** 与 **Gathering Storm**。

## 关键对线

- **Caitlyn:** 射程压你。站在小兵后面破坏她的陷阱布置,她的 Q 直线弹道在 cast indicator(她施法时地面出现的视觉提示线)出现时侧身躲开,绝不靠近墙边 — Q 会 ricochet(撞墙弹回再次命中)打出额外伤害。残血时把 W 留给逃她的 R 处决。
- **Draven:** 早期最难。1~5 级的 trade 你打不过,他靠对线人头滚雪球(早期优势随时间放大)。让 CS(补刀 = creep score = 金币)以保命,看到他 Spinning Axes 落地的窗口就 ping 打野,飞行中的斧头方向上绝不 trade。
- **Lucian:** 他想用 E dash 上来。他押 dash 的瞬间用 Q 命中,减速加上你辅助的 CC(crowd control = 控制类技能,如眩晕、减速、定身)就能把 trade 翻过来。绝不要在近身平 A trade — 他 passive 的双发普攻会盖过你真实伤害的优势。
- **Jhin + Lulu / Senna + Tahm:** 远程脱战组合(用护盾与 CC 切断你进场的阵型)。你必须赢 6 级 all-in,或者拖到 ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force**。用 Q + 平 A 推线,寻找与打野配合的 R + W gank setup。
- **Samira:** 6 级 all-in 暴君(她大招开下去,这场 fight 你撤不掉)。如果她的 R 在你方阵容中命中过一次,买 ![Mercurial Scimitar](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3139.png) **Mercurial Scimitar** — 主动 cleanse(解除负面)能打断她连段。6 级前你能与她对换,6 级后用 W 脱战,直到 R Big Ones 的输出超过她的 ramp。

## 强势期与胜利条件

- **2 级:** 用 Q + W 或 Q + E,可以在敌方走位错误时打 Q-AA-AA trade("AA" = 普攻),如果对面辅助靠前则用 W 跟进。
- **6 级:** 第一次 **Missile Barrage (R)** 解锁 all-in(完全押注、不留后路的 fight)。手上有 R 储量,加上 Trinity Force 即将到位,Q-AA-R-R-R 加辅助 CC 能秒掉大多数低血量 ADC。
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force 完成 (~ 13~15 分钟):** Sheen 在每个 Q 与每发 R 上触发,把消耗变成击杀威胁。这是 all-in 的时机,如果视野(在地图上插眼)干净也可以打 Drake fight。
- **![Manamune](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3004.png) Manamune 叠满 (~ 18~22 分钟):** Muramana 给所有消耗蓝的动作加伤害,团战伤害大约比叠满前翻倍。这时强行打资源点(Drake、Baron)的团。

## 常见错误

- **R 一好就打到清线上。** R 是有限储量;如果都消耗在小兵上,下一波团战的关键瞬间你就毫无爆发。线上靠 Q + 平 A 推,留 4 发以上给资源点。
- **没有后续 W 就激进位移。** W 是你唯一的逃生。为了一发不够的击杀 dash 进去,是 Corki 死亡的标准模板 — 如果剩下的蓝与冷却不够杀死目标,就别 commit(别全身投入到这场交战)。
- **没有辅助跟进就在近身平 A trade。** passive 的真实伤害近身看似诱人,但 Corki 血量是 squishy(低且脆弱)。敌方辅助硬控在线时,留在 R 距离上。
- **二件做 ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge。** Infinity Edge 需要高暴击率才能起效,而 Corki 前三件(Trinity、Manamune、Berserker's)几乎不给暴击。坚持 Trinity → Manamune → Rapid Firecannon → Phantom Dancer 的顺序;Infinity Edge 只在第 5 或第 6 件考虑。
- **R 还有储量就回城。** 储量在死亡时清零,但回城会保留 — 回家前把剩余导弹打到一波兵或一座塔上,而不是让它们闲置。

## 进阶技巧

追踪并利用 **Big One** 节奏。每第三发 R("Big One")造成的伤害远高于前两发。开团前数一下储量 — 如果下一发是 Big One,留给优先目标;如果刚刚消耗掉,把两发普通导弹打在兵线或塔上,让 Big One 在进场时刚好恢复。盲目按 R 的玩家把 Big One 浪费在小兵身上;追踪计数的玩家在关键时刻一发带走 squishies(低血量核心)。
