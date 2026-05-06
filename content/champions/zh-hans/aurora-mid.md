---
title: "Aurora Mid Build & Guide — Patch 16.9"
slug: "aurora-mid"
language: "zh-hans"
patch: "16.9"
champion: "aurora"
role: "mid"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Aurora 中单完整攻略:起手装与符文配置、burst-mage 核心出装顺序、关键对线思路、强势期节奏、常见错误规避,以及最后一条进阶 R 用法技巧。"
quick_learn:
  champion_dd_id: "Aurora"
  difficulty: 3
  damage_type: "magic"
  champion_class: "Mage / Assassin"
  abilities:
    - key: "P"
      name: "Spirit Abjuration"
      description: "技能命中敌人会释放灵魂,灵魂跟随 Aurora,接触时为她回血。线上和团战中都能稳定提供 sustain。"
      dd_spell_id: "Aurora_Passive"
    - key: "Q"
      name: "Twofold Hex"
      description: "直线 skillshot,命中敌人附加诅咒。再次施放将诅咒拉回 Aurora,造成基于已损失生命值的二段伤害。"
      dd_spell_id: "AuroraQ"
    - key: "W"
      name: "Across the Veil"
      description: "施放时位移,落地后进入隐身并获得 movement speed。参与击杀时刷新冷却。Aurora 的核心机动技。"
      dd_spell_id: "AuroraW"
    - key: "E"
      name: "The Weirding"
      description: "范围法术爆发,减速命中的敌人。施放后 Aurora 向后跳一段距离,在短交火中提供安全的 disengage。"
      dd_spell_id: "AuroraE"
    - key: "R"
      name: "Between Worlds"
      description: "先位移,然后生成一片减速区域,Aurora 可在区域两侧传送往返。进入或离开区域的敌人受到更强减速。"
      dd_spell_id: "AuroraR"
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
    - { dd_id: "4646", name: "Stormsurge" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "4645", name: "Shadowflame" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对位机动型刺客 (Zed, Fizz, Akali) — 金身覆盖 W 冷却的空窗"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "对位单体法术 CC (Annie stun, Lissandra R, Twisted Fate gold card)"
    - dd_id: "3135"
      name: "Void Staff"
      against: "只要核心目标出魔抗装 (60 MR 以上) 就立刻替换"
    - dd_id: "3165"
      name: "Morellonomicon"
      against: "对位高回血阵容 (Soraka, Vladimir, Dr. Mundo, Yuumi)"
  base_combo: ["E", "Q", "W", "Q", "AA"]
  win_condition: "Stormsurge 与 Shadowflame 成型后,用 W jump-in 接 Q 再施放的爆发惩罚走位失误。利用参与击杀刷新的 W 在团战中连环切入。"
  weakness: "W 之前吃到硬控就锁死所有逃生手段。远程 artillery 法师在她还没法 engage 之前就把她从 step-up 区间外消耗掉。"
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
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "anivia", "cassiopeia"]
      archetype: "没有逃生位移的非机动法师"
      reason: "这些中单既无 dash 也无 stealth:Q 命中后 Aurora 可以 W 切入,直接在他们鼻子底下完成诅咒再施放,再借参与击杀刷新的 W 撤退。"
    - examples: ["yone", "sett", "pantheon"]
      archetype: "近程 melee 中单"
      reason: "Aurora 用 Q 消耗 out-range 他们,再用 E 的后跳拒绝 trade;他们必须强行 commit gap-closer,而 Aurora 在他们切入路上用 Q 再施放惩罚。"
    - examples: ["veigar", "ziggs"]
      archetype: "施法时间长且无位移的爆发法师"
      reason: "他们的击杀套路要求 Aurora 站在原地等慢速投射物或法笼。W 的隐身打断对手的施法读位,让她从套路侧面绕开。"
  counterpicks:
    - examples: ["xerath", "vel-koz", "lux"]
      archetype: "远程 artillery 法师"
      reason: "他们每一波兵都能在 Q 射程外消耗 Aurora。她没有自带护盾,每一次为了用 E 或 Q 而向前一步,都会损失被动单独无法回满的血量。"
    - examples: ["zed", "fizz", "akali"]
      archetype: "拥有多段 gap-closer 的机动刺客"
      reason: "他们在 W 冷却的空窗里把 Aurora 秒掉。即便有 Zhonya's,连续位移加大招也能在她金身或 W 重整之前直接抹掉她。"
    - examples: ["yasuo"]
      archetype: "拥有投射物屏障的英雄"
      reason: "Yasuo 的 Wind Wall 同时挡掉 Q 的去程与再施放的拉回,一个技能就能抹掉 Aurora 在线上大约一半的伤害。"
---

## 概述

Aurora 是一名魔法伤害的 **burst** 法师 — 把绝大部分伤害集中在 1-2 秒的窗口里 — 同时挂载了刺客工具:**Across the Veil (W)** 是位移加短时隐身,**Between Worlds (R)** 既是先手切入跳跃(通过先跳进去开团的方式),也是一个可重新站位的区域。她的技能组奖励读对方:远距离命中 **Twofold Hex (Q)**,向前走两步对齐再施放角度,然后在拉回与目标连成一线时用 **W** 切入。被动让她每次靠近因技能驱出的灵魂时都能回血,这给她在线上提供 **sustain**(在对线阶段不回家就能回血的能力),而大多数 **squishy**(血少伤害高的脆皮英雄,例如 Lux 或 Ahri)中单是没有的。

她的 game plan 是用 **Q** 加普攻赢得短 **trade**(两个英雄互打几下的小冲突),同时等待 **all-in** 窗口 — 决定一波拿掉对手的瞬间 — 也就是 **W** 再次冷却好的时刻。**W** 还带 **takedown** 刷新(每次击杀或助攻退还冷却),所以线上一波干净击杀就给她第二次跳跃用于撤退;团战中则能从倒下的第一个脆皮连到 **back line**(站在坦克身后的输出)的下一个目标。

## 推荐出装

**起手装:**![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring**(少量 AP — Ability Power,提升法术伤害的属性 — 加蓝量回复)+ 2 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potions**。Aurora 的被动已经能回血,Doran's Ring 主要补足前期持续 **poke**(隔一段距离消耗对手血量,而不真正交火)所需的蓝量。

**核心装(按顺序):**

1. ![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) **Stormsurge** — Aurora 的第一个 **spike**(英雄变得明显更强的时刻,通常是某件装备完成时)。当她对一个已经残血的英雄造成伤害时,Stormsurge 的被动 **proc**(proc 就是某个附带效果触发的术语)并附加额外伤害和 movement speed,刚好对应 W 切入接 Q 再施放的连段。
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 固定 **magic penetration**(削减对手 Magic Resist,让你的法术造成更高伤害),对脆皮目标尤其有用。
3. ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** — 血量阈值的被动(目标低于约 35% HP 时附加额外法术伤害)恰好对应 Aurora 的 Q 再施放对残血目标的额外伤害。
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 后期 **scaling** 装备(它会乘算装备里所有其他来源的 AP,因此 AP 越多它越强)。Deathcap 成型后,Q 再施放可以在对手反应过来之前一套秒掉脆皮。

**情境装:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 对位机动型刺客 (Zed, Fizz, Akali)。主动给予 **stasis**(2.5 秒内不会受到伤害,但同样不能移动或施法)。在 **W** 冷却的窗口里使用。
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 魔抗加被动护盾,挡住下一次敌方技能。对位会打断切入的单体法术 **CC**(crowd control 的缩写,涵盖晕、定身、减速等让你失去操控的效果)时考虑出装 — Annie stun, Lissandra R, Twisted Fate gold card。
- ![Void Staff](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3135.png) **Void Staff** — 百分比魔抗穿透。任何核心目标开始堆魔抗时就买(60 MR 以上)。
- ![Morellonomicon](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3165.png) **Morellonomicon** — 附加 Grievous Wounds,削减敌方治疗量。对位堆叠回血的阵容(中单 Soraka, Vladimir, 上单 Dr. Mundo, Yuumi)时购入。

**鞋子:**![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** 为默认。当队伍需要更频繁的 **R** 开团节奏时,![Ionian Boots of Lucidity](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3158.png) **Ionian Boots of Lucidity** 也可接受。

**加点:**主升 **Q**(主要伤害来源,也是再施放爆发的扳机);其次 **E**(清线和后跳带来的免费 **disengage** — disengage 是从已经开打的交火里抽身的方式);**W** 最后。**R** 在 6, 11, 16 级各点一级。

**符文:**主系 **Domination**,带 **Electrocute**、**Cheap Shot**、**Sixth Sense**、**Ultimate Hunter**。副系 **Sorcery**,带 **Manaflow Band** 和 **Transcendence**。Electrocute 在同一个目标上快速命中三次后触发,正好是 Aurora 在每次短 trade 里 Q-平A-Q-再施放做的事;Ultimate Hunter 缩短 **R** 的冷却,留出第二次团战切入。

## 关键对线

- **Yasuo:**Wind Wall(Yasuo 的 W,挡掉所有横穿的投射物的风墙)会吃掉 **Q** 的两段(发出的弹道和再施放的拉回)。把 **Q** 留到他对兵线交了 Wind Wall,再趁他冷却时上前用平A 与 **E** 打 trade。
- **Zed:**机动型刺客。**W** 留作防守用,等他的 **R** 落地;线上别拿来开伤。如果敌方打野也带硬开,![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** 直接当二件装出。
- **Anivia:**没有位移,墙壁交了之后非常吃 W 的 all-in。她放完墙立刻踩上去打;墙的冷却很长,而近距离她也没有别的手段威胁你。
- **Lux:**对线中等偏优势。她的 Q 射程比你远,但靠 **W** 加平A 打短交换你能赢。她放 **E** 时侧身躲开(她有明显的施法预兆 — 落地之前能看见施法动作),然后再上前。
- **Twisted Fate:**比谁先 **roam**(roam 就是离开自己中路去地图别的地方制造机会)。如果他指你出黄牌,在牌落地之前 **W** 横向位移 — 位移会断锁定。用 **wards**(给某个区域提供几分钟视野的眼位 — 河道入口和 tri-bush,即中路与河道交叉的草丛)追踪他的 **R**;他大招消失就 ping mid-mia(标准的"missing in action"信号,提醒队友你的中单刚刚不见了),然后你也跟着 roam。

## 强势期与胜利条件

- **2 级:**点出 **W** 之后突然有了机动性 — 如果对手低于约 70% HP,就开了第一个 all-in 窗口。上前 **Q**、平A,然后 **W** 到他背后,**Q** 再施放。
- **6 级:**第一个 **R** 解锁了跨区域的重新站位,即便在敌方塔下她也敢打 1v1,因为 **R** 自带一条横穿区域的撤退路线。
- **![Stormsurge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4646.png) Stormsurge 成型(约 12-14 分钟):**Aurora 的第一个刺杀 spike。她现在能用整套连招单杀满血脆皮,参与击杀刷新的 **W** 让同一波团战里第二次击杀变得现实。
- **![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap 成型(约 24-28 分钟):**针对已损失血量的 Q 再施放开始秒掉所有还没出魔抗装的目标。这个时机起就强行围绕资源点(drake, baron, herald, voidgrub)开战。

## 常见错误

- **W 用在切入而不是留给刷新。****W** 在参与击杀时刷新。如果你用 **W** 切入开战,就要在同一个窗口里完成击杀,这样刷新才能给你撤退路。如果击杀没把握,把 **W** 留住,改用 **E** 的后跳来 disengage。
- **忘记 Q 再施放。****Twofold Hex** 在持续时间结束时会自动再施放,但手动再施放可以让你选择拉回的角度。再施放前向前走两步,可以让第二段穿过更多敌人,造成 **AOE**(area-of-effect — 一片区域内打到多个敌人,而不是只对一个目标)伤害。
- **减速消失之后还站在自己的 R 区域里。****Between Worlds** 把你视觉上锁在一片标记的区域中;一旦进出减速过期,这块区域就只是一个写着"在这里集体倒下"的牌子。击杀确定的瞬间就跳出边界。
- **不出 magic penetration 一直叠 AP。**在 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** 或 ![Shadowflame](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4645.png) **Shadowflame** 之前就出 ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap**,即便对手只是基础魔抗你也会损失伤害。先穿透,后裸 AP。
- **队伍跟不上时硬开 R。****R** 是一笔长冷却的承诺 — 因为队伍正在清边路兵线却独自交掉,是最常见的 **throw**(throw 就是用一次冲动的承诺把已经赢的局面打丢)。施放前 3 秒提前 ping 一下,让队友有时间转头到对的方向。

## 进阶技巧

把 **R** 的传送边界当作 **kite** 工具(kite 指一边后撤一边输出,让对手追不上)而不仅仅是开战工具。在逃跑的敌人身后施放 **R**,让减速区域封住他的撤退路线,然后跨过区域切断他的角度。进出减速意味着唯一安全的离开路线就是绕远路 — 通常这条远路的时间足够你打出一发 **Q** 加一记平A 完成击杀。
