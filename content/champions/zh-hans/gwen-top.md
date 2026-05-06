---
title: "Gwen Top Build & Guide — Patch 16.9"
slug: "gwen-top"
language: "zh-hans"
patch: "16.9"
champion: "gwen"
role: "top"
last_updated: "2026-05-02"
description: "League of Legends 英雄联盟 16.9 版本 Gwen 上单完整攻略:起始装备、AP 战士核心出装顺序、符文与天赋加点、对线主要英雄应对、强势期节奏把握、新手常见错误规避,以及进阶 W 雾区诱骗技能命中等高阶操作技巧。"
quick_learn:
  champion_dd_id: "Gwen"
  difficulty: 2
  damage_type: "magic"
  champion_class: "AP Bruiser / Skirmisher"
  abilities:
    - key: "P"
      name: "A Thousand Cuts"
      description: "普攻造成基于目标最大生命值的额外法术伤害。Gwen 对带此效果的英雄造成伤害时回复一部分生命。"
      dd_spell_id: "Gwen_Passive"
    - key: "Q"
      name: "Snip Snip!"
      description: "扇形剪刀攻击,最多 6 段。中央扇区造成真实伤害,每段都会重新触发被动 — 主要的拆塔克技能。"
      dd_spell_id: "GwenQ"
    - key: "W"
      name: "Hallowed Mist"
      description: "在地面留下 4 秒的雾区。雾外敌人无法选中 Gwen — 只有走进雾内的敌人才能。防御性重置按钮。"
      dd_spell_id: "GwenW"
    - key: "E"
      name: "Skip 'n Slash"
      description: "短距离突进,几秒内提供攻速、攻击距离与触发时 AP 加成。命中英雄时部分冷却返还。"
      dd_spell_id: "GwenE"
    - key: "R"
      name: "Needlework"
      description: "投掷一组针刃造成减速并触发被动。最多再补释 2 次,每一组比上一次伤害更高。"
      dd_spell_id: "GwenR"
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
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对突进与刺客(Camille、Fiora、Rengar)— 2.5 秒金身覆盖 W 冷却并打断敌方爆发窗口"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "对单体魔法控制(Vladimir 大池、Lissandra R、Malzahar 压制)— 护盾完整挡下一个敌方技能"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "对远程消耗对线(Vayne 上、Teemo)— 额外技能急速与移速来缩短距离"
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "对方 4 名以上坦克/战士时 — 替换 Riftmaker,从每场团战第 1 分钟开始持续百分比最大生命燃烧"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "撑过对线期,18 分钟左右合成 Riftmaker 后开始边路分推,逼敌方分两人来阻止你。团战中用 Q 触发的真实伤害融化前排。"
  weakness: "前期弱(爆发低、无远程清线)。被远程上单、Fiora 这类真实伤害后期型、以及锁住 W 启动的指向性强控连锁强力克制。"
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8299, name: "Last Stand", icon_path: "perk-images/Styles/Sorcery/LastStand/LastStand.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision 主系:Conqueror 在 Gwen 长时间 Q + 平 A 对拼中累积层数,提供自适应伤害与回复。Triumph 奖励多杀,Legend: Alacrity 强化 E 触发窗口,Last Stand 在低血量时追加伤害。"
    secondary_rationale: "Resolve 副系:Second Wind 在远程消耗后回复生命(对远程上单尤其关键),Overgrowth 在后期堆叠纯生命值,让 Gwen 在 W 雾区团战中更具威胁。"
    secondary_alternative: "对面无消耗的纯 AP 阵容,可把 Resolve 换成 Sorcery 配 Manaflow Band(Q 频繁释放的法力续航)与 Transcendence(更多技能急速,提高 E 冷却返还频率)。"
matchup_draft:
  pick_into:
    - examples: ["sett", "garen", "darius", "tryndamere"]
      archetype: "无远程消耗的近战慢速战士"
      reason: "Q 施加无视护甲的最大生命百分比真实伤害。W 雾内长时间 1v1 能融化无法风筝或脱离的肉系近战战士。"
    - examples: ["shen", "ornn", "cho-gath"]
      archetype: "依赖抗性堆叠的坦克"
      reason: "Q 真实伤害和 E 触发的 AP 同时无视护甲与魔抗。坦克堆叠的防御属性被她完全绕过。"
    - examples: ["irelia", "jax"]
      archetype: "依赖装备的成长型战士"
      reason: "他们的强势期出现在 25 分钟左右第 2~3 件装备。Gwen 先合成 Riftmaker,在他们成型前就在边路滚雪球。"
  counterpicks:
    - examples: ["fiora", "riven"]
      archetype: "真实伤害或前期强势型后期"
      reason: "Fiora 的命门也造成真实伤害,Q 突进无视 W 雾区距离。Riven 在被动叠层之前的 1~3 级伤害远高于 Gwen。"
    - examples: ["teemo", "vayne", "quinn"]
      archetype: "在普攻距离风筝的远程上单"
      reason: "Gwen 需要近战距离才能触发 E 的 AP 与 Q 真实伤害。远程风筝型直接打断她的进场,不让她干净对拼。"
    - examples: ["malphite", "pantheon"]
      archetype: "指向性硬控开团"
      reason: "他们的连续控制在 W 启动前就把 Gwen 锁住。突进中被晕,雾区落地之前就吃满整套连招。"
---

## 概述

Gwen 是一名 AP 战士 — 一名靠法术强度(Ability Power,即 AP 属性)而非物理攻击成长的近战英雄,在近距离硬抗几下而不是从远处爆发。她也是一名"突袭手(skirmisher)":通过持续单挑获胜,而不是像刺客那样两秒钟内秒杀目标。她的技能组让她能用**真实伤害**(同时无视护甲和魔抗的伤害)融化坦克,通过被动在战斗中回复生命,并用一个冷却部分返还的位移技能重新走位。她的舞台是边路与 1v1 单挑。

游戏计划是:前 10 分钟不送人头活下来,12~14 分钟前后合成第一件大装备,然后开始分推 — 一人推一条边路,迫使敌方派 2 人来阻止你。25 分钟左右出 3 件套就能进团,对敌方前排(站在他们队伍前面的坦克/战士)持续连招普攻(basic attack,简称"AA"),把他们融化掉。

## 推荐出装

**起始装备:**![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**,用于对线远程上单或重消耗(在远处持续磨血的 chip damage)。![Doran's Ring](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1056.png) **Doran's Ring** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**,用于较友好的近战对线,想要早早开始 AP 成长时。

**核心装备(按顺序):**

1. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — 你的大强势点。进入战斗 2 秒后,部分伤害转换为真实伤害("Void Corruption"被动),并获得"全能吸血"(omnivamp,从你造成的任何伤害——技能与普攻——按比例回血)。这个装备和 Gwen 的长时间团战风格契合度比任何其他装备都高。
2. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 固定法术穿透,让你的伤害对脆皮(squishy,防御低的英雄,通常是敌方核心)打得更疼。
3. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — 攻速加 AP 加每次普攻附加额外法术伤害的被动。配合 **E**(Skip 'n Slash 的触发窗口,期间每次普攻同时附加基于 AP 的法术伤害),你在长时间团战中变成持续 DPS 炮台。
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 总 AP 倍率提升。把你从"肉系 DPS"变成真正核心的后期成长装。

**情境装备:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 对突进型英雄(diver,跳到你方后排核心头上击杀的英雄)与刺客(Camille、Fiora、Rengar)。主动效果给你 2.5 秒金身(变得不可被选中,但你也无法行动),足以打断他们的爆发窗口 — 那 1~2 秒他们试图秒掉你的时机。
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 对单体魔法控制("crowd control",简称 CC:晕、定身、魅惑等让你的英雄定在原地的效果)。Vladimir 大池接大招、Lissandra **R**、Malzahar 压制。护盾完整挡下一个敌方技能。
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — 对远程消耗对线(Vayne、Teemo)。额外技能急速(更短冷却)和移速帮你真正贴上去。
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — 敌方 4 个以上坦克/战士时。如果你需要每场团战第 1 分钟就开始的最大生命百分比燃烧,就用它替换 Riftmaker 作为第一件装备。

**鞋子:**默认 Sorcerer's Shoes。![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** 用于敌方有 3 个以上 AD(物理攻击)威胁、含打野时。![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** 用于强 CC 阵容(3 个以上晕或击飞)。

**技能加点顺序:**先满 **Q**(真实伤害与 AP 加成),再满 **E**(冷却与伤害),**W** 留到最后。**R** 在 6、11、16 级。1 级优先 **Q** 用于补刀(last-hit,即击杀小兵的最后一击);2 级取 **E** 拿到位移;3 级取 **W** 拿到保命。

**符文:**主系 **Precision** 配 **Conqueror**(在长时间团战中累层并提供自适应伤害与回复的基石)、**Triumph**、**Legend: Alacrity**、**Last Stand**。副系 **Resolve** 配 **Second Wind** 与 **Overgrowth**。属性碎片:Adaptive Force、Adaptive Force、Health Scaling。

## 关键对线

- **Fiora:**艰难对线。她的 **Q** 也对"命门(Vitals)"造成真实伤害 — 那四个围绕你英雄的发光点,被她的 **Q** 命中时触发真实伤害。她的 **R** 移除任何"净化(cleanse,解除你身上控制效果)"。带 ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**,把 **W** 留给她 **R** 启动那一刻,1~2 级不要平 A 对拼(trade,即双方都进场互打几下再退开的短暂交换);她在纯 1v1 中后期超过大多数近战战士。
- **Camille:**均势偏劣。她的钩索(**E**,远距离将她甩到你身上的钩索)无视你的 **W** 雾区 — 她可以从雾区保护范围之外开团("engage",英雄做出开团决策的瞬间)。把 **W** 留给她钩索落地之后那一刻,只在她的 **W**(强化普攻上的真实伤害锥形)进入冷却时才走出雾区。
- **Sett:**优势。他也是战士但对 **Q** 在长时间对拼中的最大生命百分比真实伤害毫无办法。跳过前期 all-in(1~3 级有人完全压上去拼击杀的团),拉到 ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker**,然后在边路 1v1 他。
- **Darius:**均势。避开他 **E** 拉拽的距离;只在你的 **W** 雾区里向前走。他被动流血层数到 4 时用 **E** 脱离("disengage",从战斗中切出去逃跑)— 他的被动在普攻上施加持续流血,第 5 层是触发额外伤害的强化层。
- **Teemo:**劣势。他的远程普攻在 **W** 之外把你磨爆,**Q** 致盲你的普攻(你的主要伤害来源)。带 ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield**,请打野早点 gank(打野突袭式来支援你拿一血的行动),靠成长打 — 你赢不了对线。

## 强势期与胜利条件

- **6 级:**第一个 **R** 解锁。针刃齐射对每个被命中的英雄施加被动的最大生命百分比法术伤害,减速串联你的普攻(他们减速时你能持续输出)。8~9 分钟联合打野强行开团。
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes(约 18~20 分钟):**全能吸血+真实伤害的强势点。现在你能 1v1 大多数上单,并在边路分推到敌方派两人来挡为止。
- **![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth 完成(约 26~28 分钟):**DPS 强势点。**E** 开启时你的普攻速度大幅提升并附加触发型 AP — 是时候进团而不是只分推了。
- **3 件装备 + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap(约 32 分钟之后):**核心阶段。每次普攻在敌方前排身上削掉 25%以上生命。任何团你方保护住("peel",将敌人从你身上拉开)的战斗都以胜利告终。

## 常见错误

- **W 里待太久。**Hallowed Mist 是 4 秒窗口,不是永久护盾。在敌人投入硬控(晕或定身)的那一刻才激活;预先开 **W** 浪费冷却,让你接下来 18~22 秒毫无保护。
- **用 Q 推线消耗。**你的 **Q** 法力消耗高且锥形距离短(450 单位)。把 **Q** 留给能把英雄打在锥形中央(真实伤害区域)的时机,而不是给小兵造成 chip damage。
- **满血时把 E 向前丢。****E** 既是开团也是逃命按钮。如果在满血时白丢出去,然后敌方打野出现,你就没有第二段位移撤退了。
- **在 R 距离外平 A。****R** 处于可用状态时,你总共能放 3 组针刃。保持在战斗边缘 1000 单位内,这样你总能向低血量目标补 **R**,而不是冲进死亡区。
- **没控制就出 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) Mercury's Treads。**默认鞋是 ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes;只有 3 个以上硬控威胁或敌方有滚雪球的 AP 中单时才换 Mercury's。防御鞋会让你损失约 20%输出。

## 进阶技巧

利用 **W** 雾区诱骗技能命中(skillshot,需要手动瞄准的直线或区域技能,与指向性技能相反):当一名带远程晕或定身的敌人(Lissandra **E**、Sett **W**、Morgana **Q**)正在抬手准备施法时,把 **W** 丢在他施法距离边缘并走进去。雾区让你从外部不可被选中 — 他往往会空放,你白嫖 4 秒不被控制的普攻时间。诀窍是把 **W** 卡在他的抬手帧(skill 释放前的蓄力动画),而不是他已经放出来之后。
