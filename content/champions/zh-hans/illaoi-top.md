---
title: "Illaoi Top Build & Guide — Patch 16.9"
slug: "illaoi-top"
language: "zh-hans"
patch: "16.9"
champion: "illaoi"
role: "top"
last_updated: "2026-05-04"
description: "League of Legends 英雄联盟 16.9 版本 Illaoi 上单完整攻略:Juggernaut 触手核心出装顺序、Precision Conqueror 符文、对线期 Test of Spirit 节奏、关键对线、强势期切入时机、新手常见错误规避、以及 E 取消等高阶操作。"
quick_learn:
  champion_dd_id: "Illaoi"
  difficulty: 2
  damage_type: "physical"
  champion_class: "Juggernaut / Bruiser"
  abilities:
    - key: "P"
      name: "Prophet of an Elder God"
      description: "附近的墙体与不可通行地形会生成 Tentacle 触手。会攻击被 W 命中的敌人、E 制造的 Vessel、以及任何被拉出的灵魂。命中英雄和 Vessel 时为 Illaoi 回血。"
      dd_spell_id: "Illaoi_Passive"
    - key: "Q"
      name: "Tentacle Smash"
      description: "触手沿直线砸击,造成物理伤害。被动:增伤所有触手 slam — Q 同时是清线工具与触手触发键。"
      dd_spell_id: "IllaoiQ"
    - key: "W"
      name: "Harsh Lesson"
      description: "强化普攻:跳向目标,造成最大生命百分比物理伤害,并命令所有附近触手 slam。这次跳跃是她唯一的 mobility。"
      dd_spell_id: "IllaoiW"
    - key: "E"
      name: "Test of Spirit"
      description: "远距离直线 skillshot,把敌人的灵魂从身上拉出来。对灵魂造成的伤害会回响到本体。灵魂死亡或目标走出范围,目标变成 Vessel,被触手追猎。"
      dd_spell_id: "IllaoiE"
    - key: "R"
      name: "Leap of Faith"
      description: "Illaoi 周围范围 slam:伤害 + 每命中一名英雄额外生成一个触手。8 秒内触手 untargetable 且 slam 速度提高 50%,W 冷却降至 ~1.5 秒。"
      dd_spell_id: "IllaoiR"
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
    - { dd_id: "3047", name: "Plated Steelcaps" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "6333", name: "Death's Dance" }
    - { dd_id: "3065", name: "Spirit Visage" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "面对 2 个以上 AP 威胁或连锁 CC(Lissandra、Malphite 大、Sett 拉)时,从 Plated Steelcaps 替换"
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "对位风筝型(Quinn、Vayne、Gnar)走出 W 距离 — 主动位移加减速将其留在触手范围内"
    - dd_id: "3071"
      name: "Black Cleaver"
      against: "对面前排堆甲(Malphite、Rammus、Shen)— Q 与 W proc 为全队削甲"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "面对 AP 爆发阵容(Vladimir、LeBlanc)— 低血量自动魔法护盾,正好为触手再砸几下争取时间"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "团队 4v5 落后需要 splitpush 时 — 额外抗性对小兵和塔便于单线攻城"
  base_combo: ["E", "Q", "W", "AA", "R"]
  win_condition: "用 E 拉出灵魂,把目标尽量留在最多触手的范围里。每一次 Q 与 W 都会同时打到灵魂和本体 — 持久战是她的胜利区。"
  weakness: "无位移、无 Flash 之外的逃生手段。远程上单在 W 范围外消耗,多位移战士引诱触手后撤出,等 Conqueror 掉光再切回。"
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
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8451, name: "Overgrowth", icon_path: "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
    primary_rationale: "Precision 配 Conqueror:每一次 Q、W、触手 slam 都叠基石,Illaoi 的胜利区是 5 秒以上的持续交战。Triumph 击杀回血,Legend: Alacrity 提供攻速用于 W 重置,Last Stand 奖励 R 落点的低血段。"
    secondary_rationale: "Resolve 副系:Bone Plating 削掉 all-in 前 3 击(2-3 级 Illaoi 在没有反击杠杆时容易被打掉血),Overgrowth 通过小兵阵亡叠加生命,25 分钟时约提供 3.5% 生命加成 — 团战生存的额外耐久。"
    secondary_alternative: "如果对面是强消耗远程(Teemo、Quinn、Jayce、Kennen),保留 Conqueror 但把 Resolve 换成 Inspiration 的 Triple Tonic(额外药水)+Magical Footwear(12 分钟免费鞋)— 反正线权要丢,Inspiration 帮你回血回钱。"
matchup_draft:
  pick_into:
    - examples: ["sett", "garen", "darius", "mordekaiser"]
      archetype: "无位移的近战短手 Juggernaut"
      reason: "他们整套伤害都在 W 范围内。一旦你 W 上去,附近所有触手 slam — 而他们没位移在 Conqueror 叠满前撤离,伤害就会雪球。"
    - examples: ["nasus", "sion"]
      archetype: "对线弱的坦克成长型"
      reason: "他们前 6 级是被动发育。E 把他们从兵线推开吃免费消耗、堆 Vessel:触手追到兵线,灵魂回响让每一发 Q 翻倍。"
    - examples: ["yorick", "volibear"]
      archetype: "靠召唤物或增益打架的近战战士"
      reason: "他们必须前压才能用技能(Yorick 的食尸鬼、Volibear 强化普攻):一旦投入就在 W 范围内,触手群惩罚他们停留。"
  counterpicks:
    - examples: ["teemo", "vayne", "quinn", "kennen"]
      archetype: "消耗或风筝的远程上单"
      reason: "他们待在 W 的 400 距离外用普攻啃血。每一步靠近都送给他们一发免费普攻 — 而你没位移补距离。"
    - examples: ["riven", "irelia", "camille"]
      archetype: "多位移战士"
      reason: "进触手范围爆发,然后在 Conqueror 叠满前位移撤离。等他们位移转好,你的触手在冷却 — 是他们决定交换节奏,不是你。"
    - examples: ["jayce", "gnar"]
      archetype: "远近形态切换者"
      reason: "远程形态消耗,只在触手没生效时切近战。你烧 W 想开团,他们切回远程取消交换。"
---

## 概述

Illaoi 是一名 **juggernaut**(行动缓慢、无位移的近战英雄,在正面交战中输出极高且能扛伤),核心围绕被动 **Prophet of an Elder God**。她会在附近每一面墙和不可通行地形上生成 **Tentacle 触手** — 巨大的、untargetable 的手臂悬挂在地图边缘,听命挥砸。触手贡献了她大部分伤害;你的工作是逼敌人在挥砸范围内停留足够久而死亡。她的技能围绕两个工具,为触手提供攻击对象:**W (Harsh Lesson)** 是短距离跳跃,命令所有附近触手砸向目标;**E (Test of Spirit)** 把敌人的灵魂从身上拉出,让触手痛揍它(伤害会回响到真身)。

她的游戏计划简单粗暴。**用 E 标记目标,向前走,W 跳进自己半场最密集的触手区。** 如果敌人离开范围,灵魂死亡,他变成 **Vessel** — 一种 debuff 状态,触手在整条线上追猎他。从 6 级起,**R (Leap of Faith)** 每命中一名敌方英雄就额外生成一个触手,并让现有触手 8 秒内 untargetable — 这是她真正具备秒杀单体爆发的唯一窗口,所以 R 留给 all-in 或团战,绝不要用来清线。

## 推荐出装

**起始装备:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**。回血被动可缓冲敌方消耗(不投入交战、低成本远程伤害不断啃血),撑到 3 级触手压力上线。

**核心装备(顺序):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — 第一件装备成型(力量跳跃最大的时刻)。Spellblade 被动(技能后短时间内一次免费的强化普攻)与 W 完美契合:跳跃普攻触发(proc)Spellblade。提供 AD(Attack Damage,物理伤害背后的属性)、生命、技能急速(降低冷却的属性)、攻速 — 全套都是技能组所需。
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 对面靠普攻为主时的默认鞋。在持久 trade(线上你来我往的伤害交换)中削减普攻伤害。
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — 生命加上 **救命护盾**:HP 跌到 ~30% 以下时自动护盾启动。这窗口正是触手还在挥砸的时候,多撑几秒就把交战转化成击杀。
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — 把承受的 **burst** 物理伤害(1-2 秒内的高额爆发,刺客连招那种)转换为缓慢 **bleed**(分摊到接下来几秒,而非瞬间)。击杀时残余的 bleed 一并清空 — R 串杀时每次都送你免费重置。
5. ![Spirit Visage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3065.png) **Spirit Visage** — MR(Magic Resistance)加上增加受到治疗效果的被动:增强被动触手回血、Death's Dance 的 bleed 清除、以及 W 最大生命比例 trade。出装中最大的单点生存乘数。

**对位装备:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 当对方有 2 个以上 AP(Ability Power,法术伤害背后的属性)威胁或连锁 **CC**(crowd control,控场:晕眩、定身、击退 — 任何让你无法行动的效果)时,从 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** 切换。韧性(缩短你身上 CC 持续时间的属性)关键,因为你没位移逃跑。
- ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** — 对位风筝型,从你 400 单位的 W 走开(Quinn、Vayne 上、Gnar)。主动是短位移加范围减速 — 正好补上技能组缺的第二个补位手段。作为第一件替代 ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force**,不要两件叠加。
- ![Black Cleaver](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3071.png) **Black Cleaver** — 对面前排堆甲(Malphite、Rammus、Shen)。每次 Q 与 W proc 都削目标的护甲层数,惠及全队。
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — 对位 AP 爆发阵容(Vladimir、LeBlanc、Veigar)。低血量时魔法护盾自动启动 — 正好是你需要触手再多挥几下的时间。
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — 团队 4v5 落后,你的工作是 **splitpush**(独自带一条边线把敌人拉离重要目标)。对小兵和塔的额外抗性让 Illaoi 单人攻城。

**鞋子:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** 是默认。当对面有 3 个以上 CC 来源或大量法伤时,切到 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**。

**加点顺序:** 优先加 **Q**(清线、触手伤害放大、最低冷却)。其次加 **E**(满级冷却下降 4 秒,意味着每分钟更多 Vessel 压力)。**W** 最后满 — 它的伤害基于目标最大生命已经够强,加点的边际收益小于 Q 或 E。**R** 在 6、11、16 级点。

**符文:** 主系 **Precision** + 基石(系内核心符文)**Conqueror** — 持续与英雄交战时叠加额外 AD,5 秒持续战斗后封顶。搭配 **Triumph**(击杀回血与少量金币)、**Legend: Alacrity**(击杀叠攻速)、**Last Stand**(60% 生命以下额外伤害)。副系 **Resolve** 配 **Bone Plating**(受伤后接下来 3 击伤害减免)+ **Overgrowth**(附近小兵死亡叠加生命,完美契合每波吃 8 个以上小兵的上单)。属性碎片:**Adaptive Force** + **Adaptive Force** + **Health Scaling**。

## 关键对线

- **Sett:** 优势线。他的 Q-W-E 连招 telegraphed(wind-up — 释放前可见的动作 — 长到能反应)。把 E 留到他 W 出手的瞬间拉灵魂 — 护盾条空了他没脱战手段,触手群在他 R 转好之前就咬掉一大块血。
- **Darius:** 实力对决(谁玩得好谁赢,与英雄无关)。触手没起来时他在 5 层叠满后的持久 trade 赢你 — 引诱他的 E 拉(bait),然后用 W 跳回触手区。绝不在线中央 trade,只在自己半场触手覆盖墙体的一侧。
- **Fiora:** 困难近战对线。她的 **W** 是 parry(短暂护盾,格挡并反弹下一个技能)— 如果她格挡了你的 E,灵魂不会出现,你浪费 14 秒冷却。在真正释放前用动作取消(开始 E 释放然后侧向走位)**bait** 她的 parry。
- **Teemo / Quinn:** 非常困难的远程对线。他们待在 W 距离外,致盲你的普攻(短时间取消),免费啃血。在自己塔下 **freeze** 兵线(停止推线、把兵线留在自己半场)否定 farm(小兵的金钱与经验),并叫打野 — Illaoi 没人帮单挑赢不了。
- **Camille:** 最难的近战对线。她的 E 钩索能自由进出 W 范围,大招把你困在远离触手的 1v1 区。把 E 留到她 dash in 之后那一瞬间:她投入时拉灵魂,大招也救不了她。早出 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — 她大部分伤害是真伤 on-hit(每次普攻附带的真实伤害:无视护甲与魔抗),但每点护甲对其余技能仍有用。

## 强势期与胜利条件

- **3 级:** Q + E + W 全部解锁,Illaoi 第一次拥有完整对线连招。E 标记,走进自己触手区,W 跳跃下令砸击。从这里起这条线就是你的,除非对面是远程。
- **6 级:** 第一个 **R** 解锁。哪怕墙上只有一个触手,R 也会再生成一个,并让所有触手 8 秒内 **untargetable**(无人能攻击)。R 在手的 1v1 对任何无机动的战士都是击杀。
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force 成型(~13-15 分钟):** 伤害和 **stickiness**(粘住想逃跑目标的能力)跳跃最大。强行单线 1v1,寻找 **roam**(离线支援中或下)拿 pick(对落单走位失误的敌人单杀)。
- **两件套 + R 转好(~18-22 分钟):** 团战巅峰。穿过自家前排(队伍最前的坦克/战士),对 3+ 敌人 R 当场再生 3+ 触手,让触手群撕碎对面后排(脆皮 carry — 团战站在坦克后面的高输出低防英雄),与此同时 Conqueror 在前 5 秒内叠满。

## 常见错误

- **在开阔的线中央打架。** 触手只在墙体和不可通行地形生成。如果你在河道中央或开阔线上 W 一个目标,没有触手 slam,W 只是一次没附带的 400 单位跳跃。永远在墙边打架 — 自己半场草丛、三角草、自家野区入口。
- **把 E 砸到残血兵线上。** E 是你最重要的技能,冷却 12-16 秒。释放后 skillshot 蹭到小兵或没打到英雄,你 14 秒没有起手 — 对手清楚。等到对英雄有干净视野线再按 E。
- **用 R 清线。** R 有范围伤害,但真正价值是 8 秒 untargetable 触手加上每名英雄额外触手。用在兵线上浪费 70-120 秒冷却,等敌方打野出现你团战工具归零。
- **不查触手位置就走入战斗。** 如果最近的触手即将消失(despawn 前橙色光晕变暗),等 4 秒新一波再 commit W。没触手可砸的 Harsh Lesson 是浪费的跳跃。
- **堆纯坦克装。** Illaoi 依赖 **AD**(Attack Damage,物理伤害背后的属性)成长 — 每一发触手 slam 都是她 AD 的百分比。Sunfire + Warmog's 直接废掉伤害;杀不了脆皮,变成走得慢的小兵。坚持 AD 战士核心。

## 进阶技巧

练习 **E 动作取消**。Test of Spirit 释放动作较长(~0.5 秒),期间 Illaoi 被原地锁住 — 任何注意的敌人都来得及侧闪直线 skillshot。解法是先开始释放、向前走 1-2 步引诱对方往一侧 dodge,然后在最后一帧朝 *相反* 方向释放。反向同理:把光标悬在敌人身上、假动作释放、再向预测的灵魂 dodge 路径补一发。实战中影响最大的是 3 级 all-in:E 假动作,灵魂开始 dodge 时 W 跳到灵魂上,然后在他反应位移路径上真 E。在练习工具里对 target dummy 反复练,直到节奏完全自动化。
