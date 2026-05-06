---
title: "Dr. Mundo Top Build & Guide — Patch 16.9"
slug: "dr-mundo-top"
language: "zh-hans"
patch: "16.9"
champion: "dr-mundo"
role: "top"
last_updated: "2026-05-02"
description: "League of Legends 16.9 版本 Dr. Mundo 蒙多上路完整攻略,涵盖 Heartsteel 堆血 juggernaut 出装、对线期生存运营、关键对位思路、强势期节奏把握与新手常见错误。"
quick_learn:
  champion_dd_id: "DrMundo"
  difficulty: 2
  damage_type: "mixed"
  champion_class: "Tank / Juggernaut"
  abilities:
    - key: "P"
      name: "Goes Where He Pleases"
      description: "敌方对蒙多打出的第一个 hard CC(眩晕、禁锢或击飞等让你无法行动的硬控)只消耗他的 HP 而不生效,并掉落一只药瓶;捡起来回血并重置被动。同时还提供巨量 HP 回复。"
      dd_spell_id: "DrMundo_Passive"
    - key: "Q"
      name: "Infected Bonesaw"
      description: "远程直线技能弹:按目标当前 HP 百分比造成法术伤害并附带减速。消耗 HP,不消耗法力 — 你的资源条就是血条。主要的消耗与清线工具。"
      dd_spell_id: "DrMundoQ"
    - key: "W"
      name: "Heart Zapper"
      description: "对自身的引导,周期性对附近敌人造成法术伤害,并储存你受到的部分伤害。再次施放(或引导结束)释放一段爆发:命中英雄时,按储存伤害的百分比为自己回血。"
      dd_spell_id: "DrMundoW"
    - key: "E"
      name: "Blunt Force Trauma"
      description: "被动:随最大 HP 提升的额外 AD。主动:近战重击,基于已损失 HP 造成额外伤害。若击杀,会把尸体抛飞,沿途敌人也会受到伤害。"
      dd_spell_id: "DrMundoE"
    - key: "R"
      name: "Maximum Dosage"
      description: "对自身施放:即时回复一定百分比已损失 HP,然后在持续时间内获得额外移速与巨量 HP 回复。在团战开始前与濒死前按下,而不是死后才按。"
      dd_spell_id: "DrMundoR"
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
    - { dd_id: "3084", name: "Heartsteel" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3083", name: "Warmog's Armor" }
    - { dd_id: "3065", name: "Spirit Visage" }
    - { dd_id: "6610", name: "Sundered Sky" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "对面 3+ 控制源或 2+ AP 威胁时,从 Plated Steelcaps 换装;韧性可缩短眩晕时长"
    - dd_id: "3075"
      name: "Thornmail"
      against: "对线平 A carry(Vayne, Tryndamere, Master Yi);反伤并附加 Grievous Wounds(治疗减半)"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "对线 2+ 远程法师的 AP 消耗阵容(Brand + Karthus, Ziggs + Xerath);MR + 移速对抗法术伤害"
    - dd_id: "6664"
      name: "Hollow Radiance"
      against: "对线抱团 AP 清线英雄(Karthus, Brand, Anivia);法术灼烧光环惩罚贴近作战"
    - dd_id: "2504"
      name: "Kaenic Rookern"
      against: "对线单体 AP 爆发(Syndra, Veigar, LeBlanc);法术护盾抵挡连招起手"
  base_combo: ["Q", "W", "E", "AA"]
  win_condition: "靠 Q 消耗与 W 续航在线上活下来,做出 Heartsteel 与 Warmog's,然后以满血回复走进敌方后排,坚持不死直到队友清场。"
  weakness: "没有硬控也没有位移。远程上单可以在 975 射程外风筝你的 Q;治疗削弱装会切掉 W 治疗与 R 回复,把坦克变成一只走得慢的小兵。"
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8275, name: "Nimbus Cloak", icon_path: "perk-images/Styles/Sorcery/NimbusCloak/6361.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Health Scaling"
      - "Health Scaling"
    primary_rationale: "Resolve:Grasp 在线上每 4 秒提供免费 HP,与蒙多的血量堆叠正契合。Bone Plating 抵挡 bruiser 爆发,Conditioning 在 12 分后追加 Armor 与 MR,Overgrowth 把击杀的小兵转化为永久 HP。"
    secondary_rationale: "Sorcery 副系:Nimbus Cloak 在使用 Flash 或 Ghost(蒙多常用的开团召唤师技能)后给一段移速爆发,Gathering Storm 每 10 分追加适应之力 — 正好契合蒙多后期 scaling 的胜利条件。"
    secondary_alternative: "对线 Darius、Riven 等前期暴力对位时,Sorcery 换 Inspiration:Biscuit Delivery(12 分前每 2 分免费血药)与 Cosmic Insight(召唤师技能 CD 减少),牺牲 scaling 换线上生存。"
matchup_draft:
  pick_into:
    - examples: ["sett", "aatrox", "mordekaiser"]
      archetype: "无远程消耗的近战 bruiser"
      reason: "蒙多的 Q 是消耗 HP 而非法力的 975 射程减速,他可以在敌方平 A 射程外每波兵线消耗一次。对方必须走过来才能输出,而 W 光环加 Spirit Visage 治疗在任何持久换血中都占优。"
    - examples: ["zed", "talon", "katarina"]
      archetype: "依赖一次爆发窗口的刺客"
      reason: "他们整个伤害模板就是一套连招。蒙多被动吃掉第一个 hard CC,R 即时回复一定百分比已损失 HP,W 还把爆发期间受到的部分伤害还给你 — 他们烧掉所有 CD,而蒙多近乎满血走开。"
    - examples: ["yasuo", "yone", "tryndamere"]
      archetype: "需要贴脸的平 A 近战"
      reason: "Q 减速加 Plated Steelcaps 严重削弱了他们的平 A 节奏。Tryndamere 的 R 能撑过一轮治疗,但带 R 与 Thornmail 的蒙多能熬过无敌窗口,并以反伤打掉他大量 HP。"
  counterpicks:
    - examples: ["vayne", "teemo", "quinn"]
      archetype: "带百分比 HP 或致盲的远程上单"
      reason: "Vayne 的 W(每三下平 A 真实伤害,无视所有防御属性)与 Teemo 的 Q(让平 A 落空的致盲)直接绕过整堆 HP。Quinn 的射程加被动致盲让蒙多永远站在 Q 射程外。"
    - examples: ["fiora"]
      archetype: "真实伤害决斗者"
      reason: "Fiora 的弱点造成真实伤害(同时无视 armor 与 magic resist 的伤害 — 没有任何防御属性能减免)。堆 HP 对真实伤害毫无意义;她在单挑里能在满装状态下把蒙多一击撕开。"
    - examples: ["trundle"]
      archetype: "偷取属性的反坦英雄"
      reason: "Trundle 的 R 在 8 秒内偷走蒙多的 Armor、MR 与移速。E 被动基于额外 AD 的真实伤害失效,唯一的逃命手段(R 移速)也被一并偷走,坦克身份整体瓦解。"
---

## 概述

Dr. Mundo 是一名 **juggernaut 坦克**(行动迟缓、无位移的近战英雄,出几件装备后伤害爆炸,自带巨额 HP 与 HP 回复)。他的核心身份建立在三件事上:通过 **Heartsteel** 堆叠 HP(每对一名英雄打出平 A,装备就累计永久 HP);**R** 的 HP 回复加 Spirit Visage 的治疗增幅;以及每个 CD 都按 **Q** 在 975 射程外切对手的血。最关键的机制是**被动**:敌人对你打出的第一个 hard CC(眩晕、禁锢或击飞等让你无法行动的硬控)会被削弱 — 它只消耗你的 HP 而不会真的控住你,你掉落一只药瓶,捡起来即可回血。也就是说,Sett 或 Malphite 只有一次锁住你的机会,之后的 8-10 秒里你会径直穿过他们整队。

游戏计划只有一句:"绝不死亡。"在线上**冻结兵线**(让兵线就停在自家塔前,迫使敌方上单远离自家塔来收尾兵)然后用 Q 在最大射程外补刀。从 14 分起,**Heartsteel** 加 **Warmog's Armor** 跨过那个阈值:你的 HP 与回复多到敌方需要治疗削弱装才能伤到你。从这里开始,每场团战都从你慢慢走入、吃下第一个眩晕、按 R、然后站在敌方后排(在自家坦克身后输出的脆皮 carry)旁边直到 carry 倒下。这就是"吸收开团":当敌人选择用眩晕或位移技能扑进来开战时,你的工作就是当那个挨眩晕的人。

## 推荐出装

**起始装:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**。Doran's Shield 的 HP 回复被动可以缓冲敌方的 poke(不投入团战、低成本远程消耗你 HP 的行为),在几乎所有蒙多对线中都是正解,包括近战对位 — 游戏计划是"活下去、补刀、scaling",不是"赢一级"。

**核心装(顺序):**

1. ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** — 你的身份装备。每次平 A 英雄都会给 Heartsteel 充能;触发时打出巨量额外伤害,且装备永久累计 HP。HP 堆叠没有上限,这就是为什么 35 分钟的上路蒙多能用一个 E 秒杀脆皮。每局都买,作为第一件装备。
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 当敌方主要伤害源是平 A 时的默认鞋子,在持续战斗中减少打到你身上的伤害。
3. ![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) **Warmog's Armor** — 跨过 HP 阈值(约 3000 额外 HP,Heartsteel 与 Warmog's 配件加在一起就能达到)后,会解锁"脱战 4 秒回满"的被动。这是"边路小规模交战(1-3 人之间的小型遭遇战)能在两波兵之间完全恢复"的分界点。
4. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — 法术抗性加治疗增幅被动,会同时强化 **W** 的爆发回血、**R** 的回复、Soraka 或 Yuumi 等队友的治疗,以及 Doran's Shield 的回血跳动。任何带至少一名 AP 威胁的阵容里都作为第四件装备。
5. ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — 在战斗中对任意英雄打出的第一下平 A 会暴击并回复一大块 HP。与你被动制造的"保命窗口"完美契合,并提供一个小爆发 spike,让你不只是活着,还能威胁拿人头。

**情境装:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 当敌方阵容有 3+ 控制源或 2+ AP 英雄时,从 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** 换装。韧性(缩短眩晕与减速持续时间的属性)是被动"首控免疫"被消耗后唯一真正有用的防御。
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — 对线平 A carry(Vayne, Tryndamere, Master Yi)。反伤并附加 **Grievous Wounds**(把目标治疗减半的减益)。这是阻止 Tryndamere 或发育起来的 Vayne 把 W 光环造成的伤害回血回去的唯一途径。
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — 对线高强度 AP poke 阵容(Brand + Karthus, Ziggs + Xerath, 中路 Vel'Koz)。承受法术伤害时不断叠加法术抗性并附带移速 — 蒙多想要的两样东西全都有。
- ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — 对线抱团 AP 清线英雄(Karthus, Brand, Anivia)。法术灼烧光环对在你身边作战的所有敌人持续造成伤害,并提供 MR。
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — 对线单体 AP 爆发(Syndra, Veigar, LeBlanc)。法术护盾(挡掉下一个朝你飞来的技能的一次性屏障)抵消他们的连招起手,几秒脱战后会自动恢复。

**鞋子:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** 是默认。面对重控连锁或 AP 偏多阵容时换 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**。

**技能加点顺序:** 主升 **Q**(射程、减速、当前 HP 百分比伤害都随等级提升 — 它是你唯一的远程工具)。次升 **E**(主动效果按已损失 HP 强力 scaling 与 bonus AD 挂钩,而 Heartsteel 的堆叠又喂这部分 AD)。**W** 留到最后升级;早期一点足够吃到再施放回血与光环伤害。**R** 在 6、11、16 级各点一级。

**符文:** 主系 **Resolve** 配 **Grasp of the Undying** — 在线上战斗中,每 4 秒下一次平 A 英雄会附加额外法术伤害、回血并提供永久 HP。搭配 **Bone Plating**(受到伤害后接下来 3 次受击伤害减免)、**Conditioning**(12 分后追加 Armor 与 MR)、**Overgrowth**(身边小兵被击杀时按比例堆 HP — 完美契合稳定补刀流派)。副系 **Sorcery** 取 **Nimbus Cloak**(使用 Flash 或 Ghost 后获得移速爆发,这两个都是蒙多常用的召唤师技能)与 **Gathering Storm**(每 10 分追加适应之力)。属性碎片:**Adaptive Force** + **Health Scaling** + **Health Scaling** — 哪里都堆 HP,因为蒙多身上的每一项防御属性都会在同一份 Heartsteel 堆叠上转化为更多有效 HP。

## 关键对线

- **Darius:** 前期艰难。他的出血被动(挨打次数越多,持续伤害叠得越厚)能穿透你的 HP 回复,他的拉拽还能取消你的 Q 前摇。在自家塔前**冻结兵线**,出 ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**,接受补刀损失 — 一旦你做出 ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** 与 Warmog's 配件,过了 14 分每分钟都把他甩开。
- **Sett:** 优势对位。把**被动**留给他的 W(第三下平 A 眩晕)— 用 HP 抵掉,然后退开。在 975 射程用 Q 换血;他对长射程消耗没有解,自身回复也跟不上 Q 的削血。
- **Vayne / Teemo:** 全英雄池里最难的对线。他们站在 Q 射程外,使用**真实伤害**(同时无视 armor 与 magic resist 的伤害 — 没有任何防御属性能减免)或让平 A 落空的致盲。出 ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**,塔下冻线,他们一过河没视野(俗称 overextend)就立刻喊打野。如果 Vayne 已经滚雪球,直接 ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** rush 取代 Spirit Visage。
- **Fiora:** 最难的近战对位。她的 **W** 是格挡(挡掉并反弹下一个技能的短暂护盾 — 在用 Q 或 E 前先用一次平 A 骗出来)。她的弱点造成真实伤害,所以堆 HP 在这里毫无用处。先做 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** 与 ![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) **Heartsteel** 配件,然后等打野来 gank。
- **Mordekaiser:** 对操作的对位。他的 R 把你拉进 7 秒、无逃生手段的 1v1 异界。如果他在你被动还没触发前 R 你,就只能死;如果你 **R** 与被动都在,就能熬过 — 7 秒异界窗口大致等于一次 R 的持续时间。留好 **Flash** 用来在异界中躲开他的 Q 抓取。

## 强势期与胜利条件

- **6 级:** 第一次 **Maximum Dosage**。即便 6 级裸装,R 的即时回复加移速也能把劣势换血变成保命甚至人头。当打野出现在上路且敌方对线者 HP 低于 60% 时,寻找一次 **all-in**(全力扑上去拿人头,没有撤退选项)。
- **![Heartsteel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3084.png) Heartsteel 完成(~ 13-15 分):** 第一个真正的强势期。每次成功在英雄身上触发都会带来死亡也不会消失的永久 HP。装备一成型就推线,隔着敌方小兵平 A 换血以累积堆叠。
- **![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) Warmog's Armor + Heartsteel 堆叠(~ 18-22 分):** 蒙多在边路变得不可击杀的分界点。新的 HP 阈值激活脱战回复;你可以打完一场到 50% HP 的战斗,走到下一波兵就回到满血。
- **三件套 + ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) Spirit Visage(~ 24-28 分):** 团战巅峰窗口。治疗增幅强化每一次回复跳动 — R 从"还行"变成"我根本砍不到他半血"。在这段时间里,每个 Drake 与 Baron 都要打;团队需要你第一个走进去吸收开团。

## 常见错误

- **挨打之后才按 R。** R 的即时回复是按*已损失* HP 的百分比计算,但持续回复的部分如果在 90% HP 时触发就被浪费了。要在投入战斗**之前**就用 R,而不是之后 — 你想带着已经在跳动的回复进战,这样爆发期能被预先缓冲,而不是事后包扎。
- **满血对着满血敌人按 Q。** Q 消耗 HP,造成当前 HP 百分比伤害。在你 100% HP 时朝 100% HP 的敌人按下去,只是用你的 HP 换一点小削血 — 你输了换血。等近战敌人被小兵打掉一些血,或者队友 CC 开了 all-in 之后再用 Q。
- **被动药瓶捡得太晚。** 化学药瓶(被动触发时掉落的绿色小瓶)会在地上停留几秒后消失。如果让它过期,你就浪费了整个被动 — 没有回血,也没有 CD 退还。哪怕在团战中也要立刻走过去捡。
- **没有 Spirit Visage 就堆满坦。** 蒙多每一项防御属性都与治疗增幅复利叠加。没有 Spirit Visage,R 回血更少,W 回血更少,辅助 Soraka 给你的治疗也更少。一个没有治疗增幅的全肉蒙多就是一只走得慢的小兵;有了 Spirit Visage,同样的装备能把他的有效 HP 拉得长得多。
- **脱战时还开着 W 引导。** **Heart Zapper** 在引导期间每秒都在消耗 HP。如果你为了清线开了它然后忘记关,赶到团战时已经只有 70% HP。每次都要在引导结束前再次施放。

## 进阶技巧

练习边路的**被动诱饵**(在地图其他地方打架时,上路或下路单打独斗的 1v1)。当敌方 diver 只有一个 hard CC 可用时 — 比如 Sett 的 W 眩晕或 Renekton 的眩晕 — 故意用看得见的低血量走进他的兵线。他烧掉那个 CC 来扑你,你的被动免费吃下,然后你在自家小兵下用 R-Q-E-AA 反推,而他什么都没有了。诀窍是*看得见*的低血:在 35-40% 暴露在外,挨几下平 A 确认敌人确实在投入,再开始换血。一个被动与 R 都在 CD 外、HP 还有 50%+ 且站在敌方阵地后的蒙多,是游戏里最强的 1v1 威胁之一;诱饵正是用来制造这个场景。
