---
title: "Gangplank Top Build & Guide — Patch 16.9"
slug: "gangplank-top"
language: "zh-hans"
patch: "16.9"
champion: "gangplank"
role: "top"
last_updated: "2026-05-03"
description: "League of Legends 英雄联盟 16.9 版本 Gangplank 上单完整攻略:起始装备配置、Trinity Force 暴击核心出装、关键对线分析、强势期节奏把握、新手常见错误规避以及火药桶连锁的进阶操作技巧。"
quick_learn:
  champion_dd_id: "Gangplank"
  difficulty: 5
  damage_type: "mixed"
  champion_class: "Bruiser / Late-game crit caster"
  abilities:
    - key: "P"
      name: "Trial by Fire"
      description: "周期性强化普攻,对目标造成数秒 true damage 灼烧。强制进入近战窗口——盯住计时器以预判 GP 的 all-in。"
      dd_spell_id: "Gangplank_Passive"
    - key: "Q"
      name: "Parrrley"
      description: "射程 625 的远程射击,造成物理伤害,触发 on-hit(暴击、Trinity Force 的 Sheen),击杀给金币。主要消耗手段与火药桶引爆器。"
      dd_spell_id: "GangplankQWrapper"
    - key: "W"
      name: "Remove Scurvy"
      description: "净化所有 CC,根据缺失生命值回血。冷却长、蓝耗高——留给决定性 CC,而非普通减速。"
      dd_spell_id: "GangplankW"
    - key: "E"
      name: "Powder Keg"
      description: "放置火药桶;攻击它即可引爆,造成范围物理伤害和减速。两个相邻火药桶会连锁——三连锁 combo 即胜势爆发节点。"
      dd_spell_id: "GangplankE"
    - key: "R"
      name: "Cannon Barrage"
      description: "全图大招:指定地图任意位置降下炮弹,造成减速与魔法伤害。可在商店用 plunder(Q 击杀单位获得的额外金币)升级。"
      dd_spell_id: "GangplankR"
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
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3508", name: "Essence Reaver" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3072", name: "Bloodthirster" }
  situational_items:
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "对叠回复阵容(Aatrox、Soraka、Vladimir、Dr. Mundo)——grievous wounds 削减敌方治疗"
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "对堆血坦克(Cho'Gath、Sion、Ornn)——armor pen 随目标对你的血量优势提升"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "对高 AP 爆发(Kennen R、Vladimir、Rumble)——低血时魔法护盾救命"
    - dd_id: "3053"
      name: "Sterak's Gage"
      against: "对 all-in 爆发阵容(Camille、Wukong R、Malphite engage)——一击命中时血量护盾触发"
  base_combo: ["E", "E", "Q", "AA", "Q"]
  win_condition: "撑过对线到 Trinity Force,然后在团战中三连锁火药桶。一发暴击 Q 落到敌方后排的三连桶上,团战在开始前就结束。"
  weakness: "无位移、无原生机动。被反制平攻工具的英雄(Fiora 招架、Jax E)以及无法及时 W 净化的 hard-CC point-and-click 开团硬克。"
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8444, name: "Demolish", icon_path: "perk-images/Styles/Resolve/Demolish/Demolish.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Precision"
    secondary_tree_dd_id: 8000
    secondary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Resolve 主系:Grasp 在 Trial by Fire 近战换血中提供续航并叠永久血量——正是 Gangplank 在发育期想要的节奏。Demolish 在敌方游走时压塔,Conditioning 撑起后期,Overgrowth 扩大 Trinity Force 受益的血池。"
    secondary_rationale: "Precision 副系:Triumph 在你用 R 侧切团战时按击杀返还血量与金币——Gangplank 经常切后排,这份回复能延续接续。Legend: Alacrity 提升攻速,加快火药桶引爆与 Q on-hit 节奏。"
    secondary_alternative: "对远程消耗对线(Teemo、Quinn、Vayne 上单)将 Precision 换成 Inspiration 的 Biscuit Delivery(无其它来源的血量与蓝量续航)和 Cosmic Insight(Flash 与 Teleport 更频繁)。"
matchup_draft:
  pick_into:
    - examples: ["sion", "nasus", "cho-gath"]
      archetype: "无位移的后期发育型"
      reason: "Gangplank 的 Q 射程 625,远在他们普攻补刀范围之外。他们没有位移拉近距离惩罚连锁桶;Trinity Force 上线起你比他们更快进入强势期。"
    - examples: ["darius", "garen", "sett"]
      archetype: "无脱离手段的近战战士"
      reason: "用 Q 射程留在他们的威胁半径之外,用 Powder Keg 区域减速他们。即便他们终于贴上,也没有跟进工具把你留在近身——你可以重置换血然后离开。"
    - examples: ["urgot", "kled"]
      archetype: "前期窗口强但后期下滑的战士"
      reason: "1-3 级在 Q 距离补刀,留 W 给他们 6 级大招,Trinity Force 后吊打。他们没有后期答案应对连锁桶团战 combo。"
  counterpicks:
    - examples: ["fiora", "jax"]
      archetype: "可弹反平攻的机动战士"
      reason: "Fiora 的 W 招架可以晕住 Gangplank 并反弹 CC;Jax 的 E 在两秒内闪避所有平攻和 Q。两者都打断 Gangplank 进入后期所需的换血节奏。"
    - examples: ["renekton", "olaf"]
      archetype: "前期窗口压制 all-in"
      reason: "Renekton 二级晕加六级大招在 Trinity Force 之前打碎 Gangplank 的发育计划。Olaf 的 R 提供 CC immunity,W 净化无法阻止他用 true damage 战斧追杀。"
    - examples: ["malphite", "kennen"]
      archetype: "Hard-CC point-and-click 开团"
      reason: "Malphite 的 R 是无技能弹道可躲的 point-and-click。Kennen 的 W 晕和 R 范围把控制串到超出 Gangplank 的 W 净化窗口——一旦控制链开始,W 来不及解。"
---

## 概述

Gangplank 是一名后期发育型上单,用沉重的前期代价换取角色中最高的暴击伤害上限之一。技能组看似繁杂,实际上可以归结为两个想法。**Parrrley (Q)** 是一发射程 625 的远程平攻,触发 on-hit 效果(暴击概率、Trinity Force 的 Sheen 触发、true damage 灼烧)并将其投送到远处。**Powder Keg (E)** 是他放置后通过攻击引爆的火药桶;两个相邻的桶相互连锁,三个桶再连锁一次。标志性玩法是堆出三个连锁桶,用 Q 在抱团的敌方阵容上引爆形成瞬时爆发——一秒内交付高额伤害。

整局思路要求耐心。在 1-6 级的弱势期沿 Q 距离稳健发育,大约 14-16 分钟做出 Trinity Force,随后用 **Cannon Barrage (R)** 给边路施压,从地图另一头翻盘小龙或偷塔。团战中,把火药桶布置在己方前排(队伍前方的坦克与战士)身后,只有当你能把连锁打到敌方后排(蹲在他们队伍后方远程输出的核心)时才走进去。如果你撑过对线并堆出 3 件装,每场打中连锁 Q 暴击的团战都是单方面的胜势。

## 推荐出装

**起始装备:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion** 用于近战战士对线——你需要吸血(平攻伤害的一部分回血)进行换血(短促交互,你打几个技能就走开)。![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + Health Potion 用于远程对线(Teemo、Quinn、Gnar)——回血让你能在消耗(远程削血而不交战的压力)下补刀。

**核心装备(顺序):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — Sheen(释放技能后下一发平攻附带额外伤害的被动)在每个 Q 上触发,带来巨大的伤害提升。攻速、技能急速(降低技能冷却的属性)、生命——全套属性正是 Gangplank 的胜势节点。
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — 攻速以加快火药桶引爆与 Q on-hit 节奏。
3. ![Essence Reaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3508.png) **Essence Reaver** — 第一件暴击装;每个 Q 返还法力。解决 Gangplank 的蓝量问题并启动暴击发育。
4. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — 暴击伤害节点。Q 暴击与火药桶引爆此时秒杀 squishy 目标(防御薄弱的英雄,如 ADC 与爆发法师)。
5. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — 长团吸血续航,以及满血时溢出的生命护盾。

**情景装备:**

- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — 对叠治疗的阵容(Aatrox、Soraka、Vladimir、Dr. Mundo);grievous wounds 被动削减敌方治疗,你的伤害真的留下来,而不会被回掉。
- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — 对堆血坦克(Cho'Gath、Sion、Ornn)。armor pen 随目标对你的血量优势提升。
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — 对高 AP 爆发威胁(Kennen R、Vladimir、Rumble);魔法护盾在低血时触发,救你于致命一击。
- ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — 对 all-in 爆发阵容(Camille E + R、Wukong R、Malphite R 开团);生命护盾在你受到秒杀打击的瞬间触发,买给你一秒来用 W 净化并重置。

**鞋子:** ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** 为默认。换 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** 应对 AD 偏重(三件以上物理威胁)的队伍,或换 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** 应对 W 经常进冷却的强 CC AP 阵容。

**技能加点:** **Q** 主升(Parrrley 的等级伤害是你的主要伤害源),**E** 副升(更短的桶冷却 = 更多连锁引爆),**W** 最后升。在 6、11、16 级各点一级 **R**。

**符文:** 主系 **Resolve** 配 **Grasp of the Undying**、**Demolish**、**Conditioning**、**Overgrowth**。副系 **Precision** 配 **Triumph** 与 **Legend: Alacrity**,或对远程消耗对线选 **Inspiration** 的 **Biscuit Delivery** 与 **Cosmic Insight**。

## 关键对线

- **Darius:** 前期硬欺压——Q 回血、W 减速、R 处决,1-6 级能直接关掉你。沿 Q 距离补刀,不要在近战争抢小兵,留 **W** 给他的 E 拉拽。 ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** 上线后你 1v1 反吊;之前的对线就是生存训练。
- **Sion:** 免费补刀对线。他叠尸体和血量,你叠桶和暴击。用 E 桶把他推到塔下,扼杀他被动需要的炮兵小兵。躲开他可指向充能 Q,你每局都吊打他。
- **Fiora:** 对线最差。她的 **W** 是招架——一段短窗口,在此期间她吸收你的下一个平攻或技能,晕住你并反弹所有 CC。哪怕一个桶减速也可能反伤。绝不要把 **Q** 投在她的 vital point(她被动需要击中的身体上的彩色标点)上——你的弹道命中的瞬间她会 riposte(反击)。塔下补刀、求打野、接受兵线劣势;3 件装且她落后之前不要 1v1。
- **Camille:** 6 级强切对线(强切是指敌人走进你塔下,吃几下塔伤,仍尝试击杀你)。她把你关在大招笼子里。她的 **E** 晕忽视桶减速,**R** 隔离你。提前买 ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage**(第 4 件)并把 Flash 留给她的 R 笼子,而不是消耗换血。
- **Malphite:** 硬反——他的 R 是无技能弹道征兆的 point-and-click,如果在你正在前摇时落下,**W** 无法净化。把 ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** 当作应急出装,没有他开团角度的视野绝不打团。

## 强势期与胜利条件

- **6 级:** 第一发 **Cannon Barrage** 解锁全图压力。你可以从基地用 R 翻小龙团、用减速区在中路收掉残血敌人,或把下路逼离目标——全部都不离开自己的兵线。
- **9 级(Q 满级):** Parrrley 达到完整等级伤害。蓝耗降至 30,伤害跳升;你可以消耗任何没有招架或闪避手段的对线,并以优势 Q 换 Q。
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force 完成(约 14-16 分钟):** 最大节点。Sheen 在 Q 上每 1.5 秒触发一次,攻速把火药桶引爆时间砍半,血池终于让你撑过秒杀尝试。这是对线由防转攻的转折点——你可以主动发起以前必须躲开的换血。
- **![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge 上线(约 26-30 分钟):** 三连锁桶上一发 Q 暴击一秒删除任何 squishy。此时强行打目标团,站在己方前排边缘,让连锁落到敌方核心身上。

## 常见错误

- **被第一个 CC 打中就慌着 W 净化。** 把 **Remove Scurvy** 留给决定换血的技能——Camille E、Renekton W 晕、Sett W 晕。烧在 Lulu 变形或一个小减速上,会让你面对真正威胁时毫无防备。
- **Q 三级前堆桶。** 三级以下桶冷却对连锁节奏来说太长,第二个桶往往在第三个就绪前就过期。5 级前用单桶补刀,之后再练连锁。
- **不与队伍配合就自私使用 R。** Cannon Barrage 是全图开团工具——一个从地图另一头开启团战的技能;你把它丢在 1v1 消耗追击上,队伍就在主战场打输 4v5。永远先 ping 意图,与打野的惩戒同步,释放前看小地图。
- **暴击发育前买防御装。** ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** 看似稳妥,但如果你在 ![Essence Reaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3508.png) **Essence Reaver** 与 ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** 之前就做,你放弃了 Gangplank 之所以值得选的伤害节点。靠 W 净化与 Trinity Force 的血池度过中期。
- **忘记用 plunder 升级 R。** 每次 Q 击杀单位都会给金币;在商店花掉以升级 Cannon Barrage(更高伤害、更长持续、治疗区)。30 分钟时未升级的 R 大约相当于同一大招损失 30% 伤害。

## 进阶技巧

练习 **barrel-jump combo**:先放桶 A,立刻在最大连锁距离(刚好在连接半径内)放桶 B,然后平攻桶 A。连锁引爆点燃桶 B;在 B 处于连锁中时,把桶 C 放在 B 旁边。配合 ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** 的攻速和 Q 5 级,你可以维持每 3-4 秒一次的连续连锁引爆,形成一个滚动的范围区,迫使敌方绕开。这就是删除后排的 Gangplank 与从侧面无效消耗的 Gangplank 的差别。
