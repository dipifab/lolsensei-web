---
title: "Kayn Jungle Build & Guide — Patch 16.9"
slug: "kayn-jungle"
language: "zh-hans"
patch: "16.9"
champion: "kayn"
role: "jungle"
last_updated: "2026-04-29"
description: "League of Legends 16.9 版本 Kayn 凯隐打野完整攻略:Rhaast 与 Shadow Assassin 形态选择标准、打野清野路线、gank 时机、关键对线匹配、强势期节奏与新手常见错误规避。"
quick_learn:
  champion_dd_id: "Kayn"
  difficulty: 4
  damage_type: "physical"
  champion_class: "Fighter / Assassin"
  abilities:
    - key: "P"
      name: "The Darkin Scythe"
      description: "对敌人造成伤害会积攒两种颜色的 orb:打 melee/fighter 攒红色,打 ranged/mage 攒蓝色。任一条满 100% 后,Kayn 在 6 级变身为 Rhaast(红)或 Shadow Assassin(蓝)。"
      dd_spell_id: "Kayn_Passive"
    - key: "Q"
      name: "Reaping Slash"
      description: "短距离 dash 命中路径上的敌人,随后是一段小范围 AOE 斩击。主要的位移与清线工具。Rhaast 形态斩击造成最大 HP 百分比伤害。"
      dd_spell_id: "KaynQ"
    - key: "W"
      name: "Blade's Reach"
      description: "长距离直线减速。Rhaast 形态会击飞(knock-up),Shadow Assassin 形态可以在移动中释放,且距离更远。"
      dd_spell_id: "KaynW"
    - key: "E"
      name: "Shadow Step"
      description: "穿墙并获得移速加成,首次进入墙体时小幅 heal。Shadow Assassin 形态持续时间更长,免疫减速,冷却也更短。"
      dd_spell_id: "KaynE"
    - key: "R"
      name: "Umbral Trespass"
      description: "钻入被标记的敌方英雄(对其造成伤害后标记保留 3.15 秒)体内数秒,然后爆发跳出造成大量伤害。期间 untargetable,可用来躲 CC。"
      dd_spell_id: "KaynR"
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
    - { dd_id: "1103", name: "Mosstomper Seedling" }
    - { dd_id: "6631", name: "Stridebreaker" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
  situational_items:
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "对方多个远程 carry 风筝阵容 — 主动减速让 Rhaast 在 E + Q 后能粘住目标"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "对方双 AD(Yasuo + Caitlyn) — 流血效果把物理 burst 摊到几秒内"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "对方技能型法术 burst(Syndra, Veigar, Annie) — 提供 MR 与低血量护盾"
    - dd_id: "3814"
      name: "Edge of Night"
      against: "Shadow Assassin 对单体 CC(Morgana Q, Ashe R) — spellshield 在你 engage 前挡掉钩子"
    - dd_id: "6694"
      name: "Serylda's Grudge"
      against: "Shadow Assassin 对堆 armor 目标(Tabi tank, Bramble Vest) — armor pen 加伤害减速"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "Rhaast 对堆 armor(Sion, Malphite) — 每次攻击削 armor 并提供额外 HP"
  base_combo: ["E", "Q", "W", "AA", "R"]
  win_condition: "活到 6 级完成变身:Rhaast 应对前排坦克,Shadow Assassin 处理后排脆皮 carry。惩罚敌方打野的节奏点,用 R 抓人 snowball。"
  weakness: "变身前的 Kayn(1-5 级)是版本最弱打野之一:清野慢、没 sustain、容易被反野。如果变身前落后,后期 scaling 会崩塌,几乎无法贡献。"
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Domination"
    secondary_tree_dd_id: 8100
    secondary_slots:
      - { dd_id: 8143, name: "Sudden Impact", icon_path: "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png" }
      - { dd_id: 8105, name: "Relentless Hunter", icon_path: "perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["sett", "darius", "garen", "ornn"]
      archetype: "肉度高的近战 bruiser 与前排 juggernaut"
      reason: "Rhaast 的 max-HP 百分比 Q 伤害和 W 击飞能撕开其他刺客啃不动的高血量前排,而你和他们打 skirmish 时也能自然地积攒红色 orb。"
    - examples: ["jinx", "caitlyn", "ashe", "vayne"]
      archetype: "缺位移的远程 carry(没 dash 的 ADC)"
      reason: "Shadow Assassin 的 R 让你直接出现在他们身边,穿过前排 burst 死他们 — 没有逃命技能能在 untargetable 引导期间躲掉。"
    - examples: ["lulu", "soraka", "yuumi"]
      archetype: "脆皮强化型 enchanter support"
      reason: "Shadow Assassin 利用 E 穿墙,能在 1-2 个技能内秒杀,在团战开打前就抹掉团队的 peel 和 disengage 手段。"
  counterpicks:
    - examples: ["lee-sin", "elise", "graves"]
      archetype: "前期强势、有反野压制力的打野"
      reason: "他们能威胁 Kayn 变身前的前三个野怪营。2-3 级反野成功后,Kayn 因清野弱无法守住自家野区,整个 scaling 也被压死。"
    - examples: ["malphite", "rammus", "maokai"]
      archetype: "硬 CC 指向型坦克"
      reason: "Rammus 的 Q 嘲讽或 Malphite 的 R 能在 E 之外抓住 Kayn,让连招打不出来。即便 Shadow Assassin 的 R 能 untargetable,在释放前被晕也救不了。"
    - examples: ["xin-zhao", "warwick"]
      archetype: "1v1 强势且有反 gank 工具的打野"
      reason: "他们在 Kayn 弱势的前期能 1v1 打赢,变身前还能反野压制。被蹲野的话,Kayn 必须等到 6 级变身才能反击。"
---

## 概述

Kayn 是一名拥有独特变身机制的近战 assassin/fighter 打野:6 级时他会变身为 **Rhaast**(红色形态,hybrid bruiser,靠技能伤害恢复生命,擅长对付近战坦克)或 **Shadow Assassin**(蓝色形态,AD assassin,专门蒸发脆皮 carry — "脆皮"指那些高伤害低防御的英雄,比如 ADC)。变身的形态取决于前期攒满了哪种 "orb" — 打近战/fighter 攒红色,打远程/法师攒蓝色。哪条进度先到 100%,就锁定哪个形态。

游戏计划分两阶段。**变身前(1-5 级)** 你很弱:用 **Q** + **W** 高效清野,避开打不赢的 skirmish(2-4 人之间的小规模战斗,而非完整团战),尽量 power-farm 到 6 级。**变身后** 你成为真正的威胁:Rhaast 寻找持续的拉锯战,扎进前排;Shadow Assassin 在敌方集合前找机会用 **R** 抓人(dive = 跳到塔下或开阔地带的敌人身上击杀他)收掉孤立的 carry。

## 推荐出装

**Starting items:** ![Mosstomper Seedling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1103.png) **Mosstomper Seedling** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**。Mosstomper 在打目标资源时提供 tenacity(对 crowd control 的抗性),这正是 Kayn 两种形态都需要的。如果你已经决定走 Shadow Assassin 路线、想要更多移速来抓人,就改选 ![Gustwalker Hatchling](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1102.png) **Gustwalker Hatchling**。

**Core items(出装顺序):**

1. ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — Rhaast 第一件。AD、attack speed,主动减速。和 **Q** 的 dash 配合很好,能粘住放风筝的 carry(kite = 一边攻击一边后退,与近战保持距离)。
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 默认对带 stun 或 root 阵容的鞋子。如果对面 AA 伤害爆炸(双 AD carry),换成 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**。
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — HP、AD scaling、救命护盾(HP-threshold passive:HP 跌破阈值时触发的护盾)。Rhaast 必出,用来扛住你想开起来的长拉锯战。
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — Rhaast 的核心。AD、armor、ability haste,以及流血效果(把伤害分摊到几秒内承受,不是瞬间吃满)。对面有两个强物理输出时是最好的选择。

**Shadow Assassin 核心路线**(替代上述第 1、3、4 件):

1. ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — Shadow Assassin 的第一件 lethality(固定护甲穿透,对高 armor 目标效果递减)装。AD、lethality、ability haste,加一个范围主动既帮清野又能在 **R** 出来后补刀残血目标。
2. ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — burst 加上能给跨地图抓人提供移速的主动。
3. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — 5% HP 以下的处决被动,**R** burst 之后完美收尾。

**Situational items:**

- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — 对技能型法术 burst(Syndra, Veigar, Annie)。提供 magic resist 和低血量救命护盾。
- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — Shadow Assassin 对单体 CC(Morgana Q, Ashe R)。spellshield(挡下下一个敌方技能的被动)能保住你的 engage。
- ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** — Shadow Assassin 对堆 armor 阵容(Tabi tank, Bramble Vest)。armor pen 加上对受伤目标的减速。
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — Rhaast 对 Sion、Malphite 或任何堆 armor 的前排。每次攻击削 armor 并提供额外 HP。
- ![Kaenic Rookern](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2504.png) **Kaenic Rookern** — 对法术后排(Xerath, Vel'Koz)的高频 poke。大量 HP 加上脱战会回复的 magic 护盾。

**Boots:** ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** 是默认选择,提供 tenacity(降低 stun 与 slow 的持续时间)。对面双 AD carry 时换 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**。

**Skill order:** 优先升 **Q**(打野怪触发刷新且是主要伤害来源)。次升 **E**(冷却降低,便于走位与穿墙打法)。最后升 **W**。**R** 在 6、11、16 级各点一级。

**Runes:** 主系 **Precision** 配 **Conqueror**(战斗时间越长 adaptive force 叠层越多,Rhaast 拉锯时收益最大)、**Triumph**、**Legend Alacrity**、**Coup de Grace**。副系 **Domination** 配 **Sudden Impact** 和 **Relentless Hunter**。要走 Shadow Assassin 秒杀流时,Domination 的 **Hail of Blades** 是替代选择。

## 关键对线

- **Lee Sin / Elise:** 前期 bully。如果你的上单有 CC 能配合(counter-gank),就从上半野区开始,1:30 在 raptor/red 入口插眼。如果上单没跟上,绝对不要争河道 Scuttle Crab — 变身前 1v1 你打不过。
- **Sett / Darius(上路):** gank 上路时 Rhaast 的免费送菜对象。他们的技能组迫使他们贴近近战距离,能让你的红色 orb 涨得很快。等他们用掉关键技能(Sett W、Darius 拉钩)之后,Rhaast 用 **E** 穿墙 + **Q** + **W** 击飞 engage。
- **Vayne / Caitlyn(下路):** Shadow Assassin 的优先目标。他们没有 dash 来躲 **R**,而且远程作战会让你攒蓝色 orb。变身后,只要 R 一好就 gank 下路。
- **Malphite / Rammus(上半野区针对):** 他们的硬 CC 指向技能能直接锁死你的连招。早出 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**,辅助的 CC 没起手前绝对不开团。
- **Yuumi / Lulu(对方辅助):** 后期团战 Shadow Assassin 的免费目标。他们一离开 carry,你就从侧翼 **R** 上去 — 他们没有自保。

## 强势期与胜利条件

- **6 级 + 形态变身:** 这是最关键的 spike("spike"指英雄因升级或装备而显著变强的瞬间)。变身前你低于平均水平;变身后你是版本前三打野。在敌方还以为你弱的那一秒,马上做出第一波大动作(gank 或 **R** 抓人)。
- **河道 Crab 控制(3:15 与 6:00):** Crab 提供经验和视野。变身前的 Kayn 不能单挑 Crab;带上路或中路一起打,或者干脆放掉去刷野怪,不要送命。
- **首条 Drake 团战(6-9 分钟):** 变身前的 Kayn 在 5v5 混战里很差。如果队伍能不靠你拿下 Drake,就和他们约定在另一侧打 Voidgrubs(上路河道里的小虫子,谁打掉最后一击就给那一方一个被动)交换,自己刷野等他们打完。
- **第一件成型(~13-15 分钟):** Rhaast 出 ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker**、Shadow Assassin 出 ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** 之后,你的 gank 转化率从"需要完美起手"变成"线上一个 flash 就能击杀"。
- **Shadow Assassin 三件套(~22-25 分钟):** ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** 一成型,**R** 连招就能秒掉任何 5% HP 以下的脆皮。在大资源团之前强行制造 pickoff(对孤立目标的击杀)。

## 常见错误

- **锁了不适合阵容的形态。** 不要每把都因为 Shadow Assassin 帅就自动选它。看对方阵容:3+ 坦克/bruiser = Rhaast(max-HP 伤害和 sustain 才有用)。2+ 没 dash 的脆皮 carry = Shadow Assassin。攒错 orb 是你的责任 — 主动找匹配的敌方目标对线,直到正确的进度条锁定。
- **6 级前 gank。** 变身前 Kayn 的 gank 几乎打不出伤害。除非线上敌人血量低于 30% 或被硬 CC 控住,gank 只是浪费你本该用来 farm 的时间。变身前只在压倒性起手(线上明确有 Flash + 大招)的情况下 gank。
- **没退路就用 R 防御。** **Umbral Trespass** 让你在敌人体内 untargetable,但出来时还是回到你释放时的位置。如果你为了躲 CC 跳进 5v5 团战而队友打不赢,跳出来就是同样的死亡。**R** 应该在能终结击杀或队友正赶来时使用,不是当慌乱中的 Flash。
- **用 E 穿墙冲进敌方阵中。** **Shadow Step** 穿墙花哨但冷却很长。穿墙 engage 而身后没有退路意味着完全 commit。除非 **R** 已就绪且有明确目标,否则不要穿墙 all-in(没有撤退选项地全力开团)。
- **Rhaast 形态忽视红色 orb 战斗。** 如果你决定走 Rhaast,每次和近战目标的战斗都让进度条更快。不要从上路 skirmish 里逃跑:扎进去,涨进度条,在 5-6 分钟而不是 8 分钟前完成变身。

## 进阶技巧

把 **E** 当成进攻性视野工具,不只是逃命用。走进对方野区的墙体里、在地形中等 1.5 秒可以在不暴露的情况下确认对方打野是否在墙的另一侧 — Kayn 在墙体内对他们隐形。如果野怪没了,说明敌方在你这一侧,你就回防。如果野怪还在,你可以从对方意想不到的角度穿墙过去用 **Q** + **W** 连招反野。这一招能把 Kayn 从中期"成长型打野"变成"信息型打野"。
