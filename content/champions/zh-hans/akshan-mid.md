---
title: "Akshan Mid Build & Guide — Patch 16.9"
slug: "akshan-mid"
language: "zh-hans"
patch: "16.9"
champion: "akshan"
role: "mid"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Akshan 中单完整攻略:lethality 核心出装顺序、Press the Attack 符文与天赋细节、3 击 trade 起手节奏、关键对线分析与应对、强势期把握、新手常见失误规避、以及 Q 弹道穿插命中后排的进阶技巧。"
quick_learn:
  champion_dd_id: "Akshan"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Lethality 刺客"
  abilities:
    - key: "P"
      name: "Dirty Fighting"
      description: "每 3 次攻击造成额外伤害,命中英雄时给予护盾。普攻会再射出一发降低伤害的子弹,可以取消以换取 Move Speed。"
      dd_spell_id: "Akshan_Passive"
    - key: "Q"
      name: "Avengerang"
      description: "直线回旋镖 skillshot,去程与回程都造成物理伤害。每命中一名敌人射程就增加,所以一条干净穿过小兵的弹道飞得比想象远。"
      dd_spell_id: "AkshanQ"
    - key: "W"
      name: "Going Rogue"
      description: "被动:把杀掉队友的敌人标记为 Scoundrel。击杀一个 Scoundrel 复活已死队友并提供金币。主动:朝 Scoundrel 方向获得伪装与 Move Speed (离开草丛/墙体即破)。"
      dd_spell_id: "AkshanW"
    - key: "E"
      name: "Heroic Swing"
      description: "对地形发射钩绳,Akshan 绕着摆荡并射击最近敌人,可主动落地或撞地结束。参与击杀刷新冷却 — 可衔接第二次 swing。"
      dd_spell_id: "AkshanE"
    - key: "R"
      name: "Comeuppance"
      description: "锁定一名英雄并蓄能约 5 秒。再次施放将所有子弹一次性射向首个命中目标;伤害随其失去生命值缩放,是处决工具。"
      dd_spell_id: "AkshanR"
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
    - { dd_id: "3142", name: "Youmuu's Ghostblade" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "6698", name: "Profane Hydra" }
    - { dd_id: "6676", name: "The Collector" }
    - { dd_id: "3036", name: "Lord Dominik's Regards" }
  situational_items:
    - dd_id: "3814"
      name: "Edge of Night"
      against: "对位单体 point-and-click CC (Lissandra R, Malzahar R, TF 黄牌) — spellshield 每 30 秒挡 1 个技能"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "对位高 AP 爆发 (Annie, Veigar, Syndra) — 法术护盾 + lifeline 抗住一套秒杀"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "对位高回血阵容 (Soraka mid, Vladimir, Aatrox top) — 普攻与 R 子弹附加 Grievous Wounds"
    - dd_id: "3026"
      name: "Guardian Angel"
      against: "对位多刺客阵容 (Talon + Zed double AD) — 给暴露 R 吟唱的核心多一条命"
    - dd_id: "6699"
      name: "Voltaic Cyclosword"
      against: "靠单点抓人滚雪球的脆皮阵容备选 1 件:energized 减速能粘住 R 否则甩飞的逃跑核心"
  base_combo: ["Q", "AA", "E", "AA", "R"]
  win_condition: "用 Press the Attack 3 击 trade 与 Q 远距离消耗滚雪球,从 6 分钟开始用 E 转线把领先转成更多人头,在资源点团战用 R 处决脆皮。"
  weakness: "E 只挂地形,中路开阔位置就没有 swing 重置。单体 point-and-click CC 与 Wind Wall 都能直接打断 R 吟唱与 Q 消耗。"
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8233, name: "Absolute Focus", icon_path: "perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["karthus", "veigar", "xerath", "vel-koz"]
      archetype: "无位移的炮台型 immobile mage"
      reason: "这些英雄要么站着发育,要么靠远距离 poke;Akshan 借中路墙体的 E 突进直接拉近距离,在他们结束施法前接 Q + 3 击被动 + R 处决。"
    - examples: ["annie", "lux", "ahri"]
      archetype: "只有一个明显逃生技的 mage"
      reason: "Akshan 骗 Annie 的眩晕、Lux 的 Q 或 Ahri 的 R,然后在他们后摇帧 E swing 进去,稳吃一次 3 击 trade 与免费的被动护盾。"
    - examples: ["senna", "ziggs"]
      archetype: "自保薄弱的后排发育型"
      reason: "Akshan 的 R 在 2500 距离锁定且无视大部分 peel;目标低于 50% HP 后,即使从河道另一边,子弹也能穿过他们的技能直接处决。"
  counterpicks:
    - examples: ["lissandra", "malzahar", "twisted-fate"]
      archetype: "拥有 point-and-click CC 的 mage"
      reason: "锁定眩晕或压制能直接打断 R 吟唱、在 swing 中段废掉 E、并掀开 W 的伪装 — Edge of Night 每 30 秒挡 1 个,但救不了第二次。"
    - examples: ["yasuo", "yone"]
      archetype: "Wind Wall 持有者"
      reason: "风墙能挡 Q 回旋镖、E swing 期间的所有普攻、以及 R 的每一发子弹;一面合时机的风墙就能彻底翻转 trade,让他们零伤打你 all-in。"
    - examples: ["akali", "fizz", "diana"]
      archetype: "多段位移的近战刺客"
      reason: "Akshan 的 E 只能挂地形,在开阔地穿不过一个发育起来的刺客。Akali 的烟幕打断锁定,Fizz 的 E 跳过普攻,Diana 的 R 直接拽断吟唱。"
---

## 概述

Akshan 是一名 marksman/刺客 混合型英雄,带有钩绳重定位、依赖复仇标记的隐身,以及一个按失去生命值缩放的处决大招(在敌人 HP 阈值之下自动击杀的攻击)。他在中路非常合适,因为河道与三角草丛附近的墙体几何为 ![Heroic Swing](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/AkshanE.png) **Heroic Swing** 提供稳定的可挂载地形;加上 ![Avengerang](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/AkshanQ.png) **Avengerang** 在升级后推线优势超过大多数 mage。开阔地他机动性很差,但贴墙时机动性极高 — 因此整局比赛的核心,就是去打那些地图站在你这边的团。

他依赖 **lethality** 装备 scaling — 这类装备把物理伤害转换成额外护甲穿透,适合秒掉脆皮(像 mage 与 ranged carry),但对纯肉几乎无效。他的伤害几乎都是物理 (AD),不是法术。

他的游戏思路结构简单但对时机要求高:用 **Q** 推线(把己方小兵推到敌方塔下),寻找一次能触发被动 ![Dirty Fighting](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/champion/Akshan.png) **Dirty Fighting** 护盾的 3 击 trade(短暂的伤害交换,而不是真的击杀全压),然后从 6 到 12 分钟之间转线(离开本路去支援上下路),把 prio (能放心离线的优先权)转换成击杀刷新 **E** 的连环节奏。技巧体现在两点:(1) 把 **Q** 弹在前排坦克(开团的 bruiser 或 tank)上以延伸射程命中后排核心(站在后面输出的脆皮),回旋镖每多打一次都会延长剩余射程;(2) 判断 **R** 吟唱时机 — 太早会在吟唱中被眩晕,太晚目标已经治疗到处决线之上。

## 推荐出装

**起始装备:** ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** + 1 个 ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**。默认开局 — AD 加 lifesteal 在 3 击 trade 中喂饱被动护盾。

**核心装备 (购买顺序):**

1. ![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) **Youmuu's Ghostblade** — 1 件 lethality 加上 Move Speed 主动,把边路转线变成击杀。整套装备里最大的 power spike(实力陡增的瞬间)。
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — attack speed 鞋子:被动(每 3 击)触发更快,**R** 子弹间隔更紧。
3. ![Profane Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6698.png) **Profane Hydra** — 增加 AOE 清线(一刀打整波小兵),一个可在 **E** 后衔接的主动突进,以及更多 lethality。本版本 lethality 体系最佳 2 件。
4. ![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) **The Collector** — 被动可处决任何 5% HP 以下的英雄,与 **R** 的失去生命值缩放完美对接:那些 R 本会留 1 HP 的目标会直接死掉。
5. ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — 后期对穿敌方前排坦克的护甲穿透收尾装。比赛进入 35 分钟以上时买它,不要买防御装。

**情境装:**

- ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** — 对位单体 point-and-click CC (无法躲避的锁定型控制:Lissandra R、Malzahar R、Twisted Fate 黄牌)。spellshield (一次性吸收下一个敌方技能的护盾) 每 30 秒挡 1 次。
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — 对位高 AP 爆发 (一套法术伤害秒杀:Annie、Veigar、Syndra)。法术护盾 + lifeline (生命掉到 ~30% HP 触发的回血与攻击 buff) 让你撑到打回 **R**。
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — 对位高回血阵容 (Soraka mid、Vladimir top、Aatrox top)。普攻与每发 **R** 子弹施加 Grievous Wounds (将目标受到的治疗减少约 50% 的 debuff)。
- ![Guardian Angel](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3026.png) **Guardian Angel** — 对位多刺客阵容 (Talon + Zed double AD = 两个高物理爆发威胁)。当你是要在开阔地吟唱 **R** 的核心 carry 时,第二条命比任何 DPS 槽位更值。
- ![Voltaic Cyclosword](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6699.png) **Voltaic Cyclosword** — 对位双法师脆皮阵容时的 1 件备选,适合靠单点抓人 (在团战外一个一个抓孤立目标) 滚雪球 (积累的击杀领先继续滚成更多击杀)。energized 普攻附加强减速,粘住 **R** 否则会甩飞的逃跑 carry。

**鞋子:** 默认 ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** 拿 attack speed。仅当对方有 3+ hard CC (眩晕、定身、击飞这种锁住你按键的强控) 时才换 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**。

**加点顺序:** 主升 **Q** (清线与主要 DPS),副升 **E** (all-in 时 swing 单发伤害),最后 **W**。**R** 在 6、11、16 级各点一级。

**符文:** 主系 **Precision**,带 **Press the Attack** (对英雄第 3 击后下一段伤害放大 — 与被动触发完美契合)、**Presence of Mind** (击杀返蓝)、**Legend: Alacrity** (额外攻速)、**Coup de Grace** (对 40% HP 以下敌人增伤)。副系 **Sorcery** 带 **Absolute Focus** + **Gathering Storm**;若想用省下的钱提早做出 1 件,改副系 **Inspiration** 带 **Magical Footwear** (12 分钟免费鞋子) + **Cosmic Insight**。

## 关键对线

- **Yasuo / Yone:** 难打的对线。他们的 **W** Wind Wall (一面竖直风墙,持续约 4 秒,挡掉所有非近战来袭投射物) 能挡 **Q**、**E** swing 期间的全部普攻、以及 **R** 的每一发子弹。在他们对小兵或自家打野交了 Wind Wall 之前憋住 **Q**,然后再 commit。![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night** 留作对位 Yasuo 的 3 件替换 (针对他 **Q** 的击飞 — 一个把你短暂抛起、屏蔽输入的技能)。
- **Zed:** 对线五五开偏优势。6 级前你的 3 击 trade 强过他的 Q-W 消耗,但他的 **R** 让他短暂 untargetable (无法被技能或普攻选中),会让你 R 的锁定被甩开。**E** 留给反制他的影子换位与回跳。
- **Lissandra:** 硬克制。她的 **R** 是 point-and-click,会直接打断你 **R** 的吟唱。在 2 件之前先做出 ![Edge of Night](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3814.png) **Edge of Night**;没 spellshield 的时候,绝不在她面前按 **R**。
- **Annie:** 6 级要小心。她的眩晕 all-in 在线上 catch 到你时,会赢过你 **R** 的前摇时间。3 件 ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** 把一套秒变成可以撑住的 trade。
- **Veigar:** 优势。他的笼子前摇足够慢,**E** swing 能干净穿出去,且 6 级后你 all-in 时他没有逃生技。等他对兵线交完 **E** 笼子再用 **R**。

## 强势期与胜利条件

- **2 级:** 有了 **Q** + **E** 就有了第一次 all-in:**Q** 穿兵线延伸回旋镖距离,**E** 挂边墙,绕墙打两下普攻,出来时 **Q** 回程。这是本版本中路最强的 2 级 spike。
- **6 级:** 第一发 **Comeuppance** 解锁边路处决压力。仅有 ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade** 的情况下,在没视野的河道里抓到一个 50% HP 以下的目标就是稳人头。
- **![Youmuu's Ghostblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3142.png) Youmuu's Ghostblade 成型 (~9-11 分钟):** 兵线主动权反转。每次转线都按 CD 开 Ghostblade — 用 **E** + **Q** + 3 击护盾 trade 打边路 gank,对没出魔抗的英雄几乎稳进。
- **![The Collector](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6676.png) The Collector 成型 (~22-26 分钟):** 6% HP 以下的目标即使你的 **R** 把他留在 1 HP,也会被装备被动直接处决。在这个节点强开资源点,后排一进视野立刻吟唱 **R**。

## 常见错误

- **在开阔的中路按 E。** **E** 只能挂地形 — 朝一个英雄按 Heroic Swing 但路径上没墙时,要么直接施放失败,要么挂在错的墙上,把你甩进对面五人之中。按键之前一定先想好要挂哪面墙。
- **在敌方五人面前吟唱 R。** 在视野里的 5 秒前摇 (你 channelling、还没释放的那段时间) 等于送给所有 point-and-click CC 一段 5 秒的活靶时间。从战争迷雾 (没有眼、敌人无法看见的黑色区域) 或墙体后面吟唱 **R**,然后在最后一帧走出来释放子弹。
- **该让附加普攻打出去时把它取消了。** 被动的第二发普攻虽然只打 ~50% 伤害,但仍然计入 3 击计数。在以击杀为目标的 trade 里别取消 — Move Speed 远不如完成被动护盾来得重要。
- **没小兵弹道的裸 Q 消耗。** 中间什么都没有的最远距离 **Q** 是这个技能最差的形态。永远让 **Q** 穿过一波兵线或一只残血小兵,这样射程会延长,回程也才能正好对上下一名敌方英雄。
- **在开阔地按 Going Rogue 伪装。** 主动如果不在草丛里、不贴墙,大约 1 秒就会破。开阔线上几乎没意义 — 留给从三角草丛或河道草丛切入的 flank (从对方没看的侧翼进团)。

## 进阶技巧

把 ![Avengerang](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/spell/AkshanQ.png) **Q** 弹在前排坦克身上去打到后排 carry。每命中一名英雄,回旋镖剩余射程都会延长,所以从视野边缘的前排 bruiser 出发的一发 **Q**,会继续穿过 carry 再回到你身上,在回程路径上对同一目标再造成一次伤害。先在自定义房间里对人机练角度:站好位,让回旋镖从第一名英雄出来时正好走向第二目标想要的角度 — 延伸出来的射程,会够到那个还以为自己藏在团队后面很安全的后排。
