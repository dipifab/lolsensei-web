---
title: "Cho'Gath Top Build & Guide — Patch 16.9"
slug: "chogath-top"
language: "zh-hans"
patch: "16.9"
champion: "chogath"
role: "top"
last_updated: "2026-05-02"
description: "League of Legends 英雄联盟 16.9 版本 Cho'Gath 大虫子上单完整攻略:核心堆血 tank-mage 出装顺序、Resolve 主系 Grasp 符文搭配选择、关键对线思路、强势期节奏把握、对线常见错误规避、以及高阶吟唱取消骗 Wind Wall 与格挡帧的进阶技巧。"
quick_learn:
  champion_dd_id: "Chogath"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Battlemage"
  abilities:
    - key: "P"
      name: "Carnivore"
      description: "击杀任意单位回复 HP 与蓝量,击杀英雄回复量大幅提升。每次 last-hit (补到刀) 都自动获得线上 sustain (战斗间隙的血蓝回复)。"
      dd_spell_id: "Chogath_Passive"
    - key: "Q"
      name: "Rupture"
      description: "950 距离的直线 skillshot (非指向技能,可被预判躲避):击飞、减速、造成法术伤害。安全距离的 poke (远程消耗) 与 engage (开团) 工具 — 前摇较长,需要预判敌人走位。"
      dd_spell_id: "Rupture"
    - key: "W"
      name: "Feral Scream"
      description: "300 距离的前方扇形:法术伤害,沉默 (无法施放技能) 约 2.2 秒。Q 击飞落地后衔接,可锁住 melee 目标。"
      dd_spell_id: "FeralScream"
    - key: "E"
      name: "Vorpal Spikes"
      description: "开关型 on-hit (下次普攻附带额外效果)。接下来 3 次普攻造成基于目标最大 HP 的法术伤害并减速。对位 tank 的主要 DPS 来源,也是 waveclear (清理兵线) 工具。"
      dd_spell_id: "VorpalSpikes"
    - key: "R"
      name: "Feast"
      description: "单体真实伤害 (无视护甲与魔抗) execute (HP 阈值以下直接处决)。击杀后获得永久层数:更多最大 HP,模型变大。小兵层数上限 6,英雄层数无上限。"
      dd_spell_id: "Feast"
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
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3065", name: "Spirit Visage" }
    - { dd_id: "3116", name: "Rylai's Crystal Scepter" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "对位高法伤或多段 CC 链 (Malphite R, Sylas, Lissandra) — 首次回城前从 Plated Steelcaps 替换"
    - dd_id: "4401"
      name: "Force of Nature"
      against: "对面有 2 个以上 AP 威胁 (AP 上单 + Diana/Ekko 类 AP 打野) — 叠魔抗,加移速追击 kiter"
    - dd_id: "3075"
      name: "Thornmail"
      against: "对位带回复的平 A carry (Vayne + Soraka, Master Yi + lifesteal) — 触发 Grievous Wounds (回复 -50%)"
    - dd_id: "3083"
      name: "Warmog's Armor"
      against: "Feast 5+ 层时的第 6 件 — 此时 Warmog's Heart 血量阈值毫无压力,回血让你跳过回城"
    - dd_id: "6664"
      name: "Hollow Radiance"
      against: "对位堆兵线的法师 (Heimerdinger, Malzahar) 与抱团的 AP 阵容 — 光环清小怪并消耗前排"
  base_combo: ["Q", "AA", "E", "AA", "W", "R"]
  win_condition: "靠 cannon 与英雄击杀堆 Feast 把血量撑起来。5+ 层 + Riftmaker + Spirit Visage 后,以第二前排身份切入,吸收 focus (你成为目标),用 Q 击飞接 W 沉默锁住 carry (主要输出位)。"
  weakness: "无位移、除 Flash 外无逃生手段。950 射程的 Q 会被 ranged 上单 kite (站在你射程外平 A) 风筝。叠层之前对 ignite + 减疗易爆 — 一旦输线就会 snowball,因为 Feast 需要发育。"
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8437
      name: "Grasp of the Undying"
      icon_path: "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
    primary_slots:
      - { dd_id: 8446, name: "Demolish", icon_path: "perk-images/Styles/Resolve/Demolish/Demolish.png" }
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Health Scaling"
      - "Health"
    primary_rationale: "主系 Resolve:Grasp 在近战每 4 秒触发 (proc = 被动激活),回血并叠永久 HP — 完美匹配 Cho'Gath 的 HP+AP 曲线。Demolish 即使输了也能把塔啃下来,Second Wind 回 poke 的伤害,Overgrowth 每 8 个小兵叠一次最大 HP。"
    secondary_rationale: "副系 Sorcery:Manaflow Band 撑住长线对线中 Q 消耗与 E 清线的蓝量,Transcendence 提升 ability haste (减少 CD),让 Q 几乎每波兵都能转好,寻找击飞机会。"
    secondary_alternative: "对位远程消耗或 AP 爆发上单 (Vladimir, Teemo, Kennen) 时,把 Sorcery 换成 Inspiration:Biscuit Delivery (6 级前免费回血回蓝) 与 Time Warp Tonic (用药剂触发瞬时回复以保住线权)。"
matchup_draft:
  pick_into:
    - examples: ["darius", "garen", "sett", "volibear"]
      archetype: "前摇慢的 melee bruiser (近身肉搏型)"
      reason: "Q 的击飞能打断他们的开团动作 (Darius 拉、Garen E 旋转、Sett W 蓄力)。Carnivore 加上 Riftmaker 的 omnivamp (类似 lifesteal 的全伤吸血) 让你在 trade 中胜出;到 Feast 阈值后,R 在 30% HP 直接收人头。"
    - examples: ["riven", "camille", "irelia"]
      archetype: "高机动 melee diver (突进切后排)"
      reason: "Q 在他们 dash 半路把人击飞,直接打断连招。W 紧跟着沉默,封掉第二段位移。等他们残血撤退时 R 收人头 — 没有 Flash 与精准 read 就无法 all-in (强行打全压)。"
    - examples: ["vladimir", "swain", "rumble"]
      archetype: "无硬控 (晕眩/定身) 的近战法师"
      reason: "他们没有瞬间 lockdown 来打断你的 Q 前摇。你在安全距离 outrange 他们的消耗,而 W 沉默在 all-in 时直接关掉他们对技能依赖的输出。"
  counterpicks:
    - examples: ["vayne", "quinn", "teemo", "kennen"]
      archetype: "带消耗与 disengage (脱身手段) 的远程上单"
      reason: "他们站在 Q 的 950 射程外,你一上前他们就走,6 级前就能把你磨到半血。你既无位移逼近,也没 Carnivore 之外的 sustain,每个兵线节奏都失去 prio (兵线主动权)。"
    - examples: ["fiora", "jax", "tryndamere"]
      archetype: "持续输出的高机动 melee duelist"
      reason: "Fiora 用 W parry (格挡) 你的沉默,Jax E 闪掉 Q 击飞,Tryndamere 只要先开 ult 就免疫 R。他们的持续伤害打穿 Cho 的慢前摇 Q;等你 Feast 起来已经太晚了。"
    - examples: ["gnar", "kayle"]
      archetype: "后期 scaler (前期弱,30 分钟变怪物)"
      reason: "Gnar 小形态在 Q 射程外平 A,Kayle 后期变成真伤平 A 在团战秒杀你。即使 Cho 叠满 Feast,二人都赢 long game — 30 分钟时他们的输出已经超过你的血量池。"
---

## 概述

Cho'Gath 是 tank 与法师的混合体:出 HP 与 ability power 双属性的装备,通过大招 **Feast** 永久叠最大 HP。技能组合用一个远程击飞 (**Q**) 配合近战沉默 (**W**),让他能在线上打断 melee bruiser 的开团动作,在团战里锁住敌方 carry。受装备影响最大的伤害来自 **Vorpal Spikes (E)**,它附加基于目标最大 HP 的法术伤害 — 对 tank 与发育起来的 bruiser 更致命,反而打 squishy 没那么疼。

游戏思路简单但极考验耐心:躲在小兵后面安全发育,寻找 **Q** 击飞做开团或反 gank 的起手,**绝不**放过用 **R** 收掉残血小兵的机会 (英雄层数永久,每个用 R 收掉的 cannon 都是整局 +120 最大 HP)。叠到 5+ 层加两件 HP+AP 装时,你就成了敌方必须先针对再处理你方 carry 的第二前排 — 这就是赢团的方式。

## 推荐出装

**起始装备:** Doran's Shield + Health Potion。Doran's Shield 提供 80 HP 与受击后回复,与 Carnivore 的补刀回血形成叠加。

**核心装备 (按购买顺序):**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — 第一件成品。HP + AP + omnivamp (你造成的所有伤害都按比例回血,技能与平 A 都算)。3 秒持续战斗后伤害 ramp 转化为真伤 — 完美匹配长时间 trade。
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 对位 AD 上单时的默认鞋。减少平 A 伤害 12%。
3. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — 第二件输出装。HP + AP + 持续燃烧被动,按目标最大 HP 百分比造成法术伤害。Q 减速与 W 沉默把敌人留在范围内,自然衔接燃烧跳。
4. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — HP + 魔抗 + 25% 治疗与护盾增幅。放大 Carnivore 回血、Riftmaker omnivamp、以及任何队友给你的护盾。
5. ![Rylai's Crystal Scepter](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3116.png) **Rylai's Crystal Scepter** — HP + AP + 命中英雄的所有技能附带减速。叠加 Q 的减速,确保被 W 沉默的目标在沉默结束前无法 kite 走。

**情境装:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 高法伤或多段 CC 链。首次回城前从 Plated Steelcaps 替换。
- ![Force of Nature](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4401.png) **Force of Nature** — 对面有 2 个以上 AP 威胁。叠魔抗并加移速追 kiter。
- ![Thornmail](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3075.png) **Thornmail** — 对位平 A carry + 回血组合 (Vayne + Soraka, Master Yi + Aatrox)。每次受击附加 Grievous Wounds (回复减 50%)。
- ![Warmog's Armor](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3083.png) **Warmog's Armor** — Feast 5+ 层后第 6 件。此时 Warmog's Heart 阈值毫无压力,回血让你跳过回城,满血支援。
- ![Hollow Radiance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6664.png) **Hollow Radiance** — 对位堆小兵的法师 (Heimerdinger, Malzahar) 与抱团 AP 阵容。光环被动清小兵堆,持续消耗敌方前排。

**鞋子:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** 默认对位 AD 上单,![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** 对位 AP 上单或多 CC。

**加点顺序:** 主升 **Q** (减速、击飞、主要 trade 工具),副升 **E** (清线与切 tank 的 on-hit),最后升 **W** (沉默很强但每级伤害成长很小)。**R** 在 6、11、16 级各点一级。

**符文:** 主系 **Resolve** 带 **Grasp of the Undying**、**Demolish**、**Second Wind**、**Overgrowth**。副系 **Sorcery** 带 **Manaflow Band** 与 **Transcendence**。对位远程消耗上单时,把 Sorcery 换成 **Inspiration**:**Biscuit Delivery** 与 **Time Warp Tonic**。

## 关键对线

- **Darius:** 6 级前尊重他的 W 被动 (5 层流血)。在他衔接拉之前 Q 命中,然后走开。6 级后 Feast 在约 30% HP 处决 — 这就是开团的阈值。
- **Sett:** 在他 W 蓄力帧 (橙色拳头) 上 Q。如果你被 W 命中,接受 trade 并用 W 沉默掉他的 E 抓人。鞋出 Plated,首件 Riftmaker — 他大招属于 Mercury's Treads 等级威胁,如果他发育起来就考虑魔抗鞋。
- **Teemo:** Counterpick。带 Doran's Shield + Second Wind,用 E 清线把兵线推到塔下,叫打野来 gank。如果他线上 snowball,首件出 ![Hexdrinker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3155.png) **Hexdrinker** (后续接 Maw of Malmortius)。
- **Fiora:** 五五开偏弱。她会 parry 你的 W 沉默 — 千万别裸交 W。用 Q 打断她的 dash trade,W 留到她交完 Riposte。
- **Malphite:** 五五开,他比你 scaling 弱。他没回血,Q 消耗蓝耗高;在他蓝量低时用 Q+W trade。注意他 6 级后的 **R**:能打断你的 **R** 吟唱。

## 强势期与胜利条件

- **2 级:** 一级 Q + E 就足以做激进 trade:Q 击飞,贴上去用 3 次 E 平 A,在他不能动的时间窗口内打满。命中 Q 后能拿下免费的 35-40% HP 优势。
- **6 级:** 第一发 Feast 解锁处决威慑。CD 80 秒,射程 175 (近战 + 一步)。只要你打野能给残血敌人挂任何 CC,你就上去 R 拿一层永久。
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker 成型 (~13-15 分钟):** trade 数学反转。omnivamp 加 Carnivore 回血意味着你能站撸完 melee bruiser 一整套连招也不需要回城。
- **Feast 5+ 层 (~20-25 分钟):** 你成了第二前排。Riftmaker + Spirit Visage + 5 层下你大约有 3800-4200 effective HP。切入对方后排,吃下 burst,在 carry 身上衔接 Q-W。

## 常见错误

- **为了金币放过 cannon 上的 Feast。** 一个 cannon 层数永远是 +120 最大 HP。即使你"亏"了 60 金币,HP 收益远远大于这点钱。只要击杀范围内没英雄,永远 R 掉 cannon。
- **Q 当 poke 用却没有 follow-up。** Q 有 0.65 秒前摇;对移动目标要预判约半个英雄身位。如果不能用 W 或平 A 衔接,把 Q 留给开团或反 gank。
- **没拉开距离就上前补刀。** Cho'Gath 基础移速 125 且无位移。如果你站在远程兵线位置,会被高机动 bruiser all-in (全压突进)。从兵线后排补刀。
- **战斗中关掉 E。** Vorpal Spikes 是开关型:只要有蓝就持续保持,战斗间隙也开着。开团前就开,这样头三发普攻已经带 on-hit。
- **R 偷满血英雄。** 满血 Feast 满级约 600 真伤。有意义但你放弃了 80 秒 CD 与永久叠层的小兵机会。R 留给处决或紧急反 gank。

## 进阶技巧

用 **Q** 取消平 A 前摇来骗 Yasuo 或 Yone 的 Wind Wall:开始 A,看到墙起来,在他们走到的位置上 Q。Q 是地面裂开的 skillshot,能从墙底下穿过去 (墙挡飞行物,不挡地面效果)。大多数远程英雄分不清是平 A 取消还是憋着没放的技能,所以你能在自以为免疫的目标头上拿到一次免费击飞。同样的把戏对 Braum 的 **E** (Unbreakable) 与 Pantheon 的 **W** (Shield Vault 格挡帧) 也成立。
