---
title: "Gwen Jungle Build & Guide — Patch 16.9"
slug: "gwen-jungle"
language: "zh-hans"
patch: "16.9"
champion: "gwen"
role: "jungle"
last_updated: "2026-05-02"
description: "英雄联盟 16.9 版本 Gwen 关芸打野完整攻略:首次清野路线选择、河蟹与小龙节奏把握、4-5 级抓线时机、AP 战士核心出装顺序、关键对线策略、装备成型强势期、新手常见错误规避以及 W 雾盖技能的进阶骗招技巧一站式整理。"
quick_learn:
  champion_dd_id: "Gwen"
  difficulty: 2
  damage_type: "magic"
  champion_class: "AP Bruiser / Skirmisher"
  abilities:
    - key: "P"
      name: "A Thousand Cuts"
      description: "普攻附带按目标最大生命值的额外魔法伤害。Gwen 对英雄造成的伤害中,会有一部分转化为自身回血。"
      dd_spell_id: "Gwen_Passive"
    - key: "Q"
      name: "Snip Snip!"
      description: "扇形剪刀挥击,最多触发 6 段。中央扇形造成真实伤害(true damage),每一段都重新触发被动 — 主要清野和拆坦工具。"
      dd_spell_id: "GwenQ"
    - key: "W"
      name: "Hallowed Mist"
      description: "释放一片持续 4 秒的迷雾区域。区域外的敌人无法选中 Gwen,只有走进迷雾的敌人才能攻击她。防守重置 + 抓人前摇。"
      dd_spell_id: "GwenW"
    - key: "E"
      name: "Skip 'n Slash"
      description: "短距离冲刺,几秒内提供攻速、攻击距离与命中附带 AP。命中英雄返还部分冷却 — 抓人切入工具。"
      dd_spell_id: "GwenE"
    - key: "R"
      name: "Needlework"
      description: "投出一波减速且触发被动的飞针。最多再施放 2 次,每一波伤害比上一波更高。"
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
    - { dd_id: "1101", name: "Scorchclaw Pup" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3020", name: "Sorcerer's Shoes" }
    - { dd_id: "3115", name: "Nashor's Tooth" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对线 AD 刺客 / 突进者(Zed、Khazix、Rengar)— 2.5 秒金身覆盖 W 冷却,打断爆发窗口"
    - dd_id: "6653"
      name: "Liandry's Torment"
      against: "对手有 4+ 坦克/战士时 — 取代 Riftmaker,从 1 分钟起每场团战都持续按百分比生命灼烧"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "对线单体魔法控制(Lissandra R、Malzahar 压制、Veigar 眩晕)"
    - dd_id: "4629"
      name: "Cosmic Drive"
      against: "对手风筝阵容(Vayne、Ezreal)— 额外技能急速与移速,粘住高机动 carry"
  base_combo: ["E", "Q", "AA", "W", "R"]
  win_condition: "3-30 分稳定清野,16 分钟左右做出 Riftmaker,6 级用 W 雾建立资源博弈。团战中在 4 秒迷雾窗口内用 Q 真实伤害普攻融掉前排。"
  weakness: "1-3 级被反野的脆弱目标(无爆发,只有一段冲刺)。被 Lee Sin、Elise 这类前期激进打野压制,他们能利用她缓慢的首次清野时间反野。"
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
    primary_rationale: "主系 Precision:Conqueror 在长时间清野和 Q + 普攻交手中叠层,提供自适应伤害与回复。Triumph 奖励多杀抓人,Legend: Alacrity 强化 E 的命中窗口,Last Stand 在低血时追加伤害。"
    secondary_rationale: "副系 Resolve:Second Wind 在野区切换和被反野后回血,Overgrowth 为后期 W 雾团战中爆发的 Gwen 累积裸生命值。"
    secondary_alternative: "对线骚扰型 AP 中单时,把 Resolve 换成 Sorcery,搭配 Manaflow Band(Q 清野的蓝量续航)与 Transcendence(更多 E 返还和更短 R 冷却所需的技能急速)。"
matchup_draft:
  pick_into:
    - examples: ["amumu", "sejuani", "skarner", "zac"]
      archetype: "缺乏单体爆发的坦克型打野"
      reason: "Q 施加无视护甲的最大生命值百分比真实伤害;坦克生命池虽大,在 W 雾内的持续 1v1 中也只需 3-4 段 Q 就被切碎。"
    - examples: ["master-yi", "shaco"]
      archetype: "无脱离技能的脆皮刺客"
      reason: "W 雾在他们 all-in 时切断锁定。他们冲进来吃下雾内的 Q 真实伤害扇形,因为冲刺已经用掉,没有第二次脱身手段。"
    - examples: ["kha-zix", "rengar"]
      archetype: "依赖爆发窗口的刺客"
      reason: "他们的爆发连招在 1.5 秒内打完,但 W 雾会让他们在跳跃中途脱离锁定范围。爆发窗口落空后,Gwen 在持续对拼中轻松取胜。"
  counterpicks:
    - examples: ["lee-sin", "elise", "nidalee"]
      archetype: "前期反野型打野"
      reason: "Gwen 在 1-3 级没有爆发,首次清野缓慢。反野型打野直接走进她的野区,在被动叠层之前就把她击杀。"
    - examples: ["kayn", "viego"]
      archetype: "高机动后期型打野"
      reason: "两者都拥有无视 W 雾射程的位移工具(Kayn 穿墙、Viego 命中冲刺);后期遭遇战中,他们的节奏会反超 Gwen。"
    - examples: ["kindred", "graves"]
      archetype: "远程风筝型打野"
      reason: "Kindred 与 Graves 站在 W 雾保护范围之外普攻。Gwen 必须用 E 才能进入他们的射程,而他们用自身位移工具风筝她的冲刺。"
---

## 概述

Gwen 是一名 AP 战士打野 — 一名按法术强度(AP 属性)成长的近战英雄,能在近身硬扛几下,以打长时间的战斗取胜,而不是像刺客那样两秒内秒掉一个目标。作为"缠斗型(skirmisher)",她的玩法是持久对决:用**真实伤害(true damage,同时无视护甲与魔抗的伤害)**切碎坦克和战士,凭借被动在战斗中回血,命中英雄就刷新冲刺冷却。她的 **W 雾**是技能组的招牌:一片 4 秒的区域,让区域外的敌人无法选中她 — 这是打野池里独一无二的抓人和反开团工具。

游戏思路:完成一次干净的首次清野,争夺河蟹 Scuttle(河道里的小型怪物,击杀后提供视野与小幅移速 buff),在 4-5 级用 W 雾抓一条机动性差的线,然后滚雪球 — 把早期的小优势变成更大的优势 — 接管 5-7 分钟的第一条小龙。Gwen 是一名中后期英雄:前 3 分钟最弱,所以在队友不知情时不要被堵在敌方红 buff(那个给普攻附带灼烧效果的小野怪)附近。

## 推荐出装

**起始装备:** ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup**(适合 AP 的打野宠物 — 抓人时通过命中附带伤害灼烧敌方英雄)+ **Smite**(每个打野必带的召唤师技能 — 对单一目标的快速爆发,用于更快地清理野怪并争夺 Drake 或 Baron 等大型资源)。

**核心装备(顺序):**

1. ![Scorchclaw Pup](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1101.png) **Scorchclaw Pup** — 打野起始装备的任务升级。约 3-4 分钟自动进化;宠物的命中附带伤害为普攻添加魔法伤害,与 Gwen 的 AP 加成完美配合。
2. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — 你的核心装备。进入战斗 2 秒后,部分伤害转化为真实伤害("Void Corruption"被动),并获得"全能吸血(omnivamp)"(对任何伤害 — 技能与普攻都包括 — 都按比例回血)。专为长时间战斗打造,正是 Gwen 想要的。
3. ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) **Sorcerer's Shoes** — 固定法术穿透(= 无视一部分敌方魔抗)。对脆皮(squishies,防御薄弱的英雄,通常是敌方 carry)伤害更高。
4. ![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) **Nashor's Tooth** — 攻速 + AP + 每次普攻附加魔法伤害的被动。配合 **E**(Skip 'n Slash 的命中窗口,让每次普攻额外造成 AP 魔法伤害),你在长战中变成持续输出的炮塔。
5. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 后期 AP 倍率装备。把 Gwen 从"肉 DPS"变成真正的 carry。

**情况装备:**

- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 对线 AD 刺客 / 突进者(Zed、Kha'Zix、Rengar — 突进者指那些跳到后排 carry 上的英雄)。主动效果给 2.5 秒金身(无法被选中,但你也无法行动) — 足以打断他们的爆发窗口并重置 W 冷却。
- ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — 对手 4+ 坦克/战士组合时。如果你需要从每场战斗一开始就持续按百分比生命灼烧,把它替代 Riftmaker 作为第一件装备。
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 对线单体魔法控制(=「控制效果」:眩晕、定身、魅惑等任何锁住角色的效果)。Lissandra **R**、Malzahar 压制、Veigar 眩晕。护盾完全格挡一次敌方技能。
- ![Cosmic Drive](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4629.png) **Cosmic Drive** — 对手风筝阵容(Vayne、Ezreal)。额外技能急速与移速,粘住高机动 carry。

**鞋子:** 默认 Sorcerer's Shoes。敌方有 3+ AD 威胁时换 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**。控制爆炸(3+ 眩晕或击飞)时换 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**。

**加点顺序:** 优先满 **Q**(真实伤害与 AP 加成 — 主要清野工具),其次满 **E**(冷却与命中附带伤害),**W** 最后。**R** 在 6、11、16 级。1 级开 **Q** 是最稳的首次清野(Q 扇形覆盖整组小怪),2 级补 **E** 提供野区机动性,3 级开 **W** 在打河蟹前提高生存力。

**符文:** 主系 **Precision** + **Conqueror**(在长战中叠层,提供自适应伤害与回血的基石符文 — 完美契合 Gwen 持续输出的玩法)、**Triumph**、**Legend: Alacrity**、**Last Stand**。副系 **Resolve** + **Second Wind**、**Overgrowth**。属性碎片:Adaptive Force、Adaptive Force、Health Scaling。

## 关键对线

- **Lee Sin:** 前期吃亏,后期持平。他在 2-3 级 Gwen 没 W 时反野很猛。从你出生点对侧的野怪开始(蓝方先做红 buff;红方先做蓝 buff)以远离他的典型反野路径。6 级之后,W 雾内的任何 1v1 你都能凭借后期成长压制他。
- **Master Yi:** 免费成长对线。他的 Alpha Strike(**Q**,一次让他短暂无法被选中的多段冲刺)无法绕过你的 W 雾被动 — 站在雾外的他依然被切断。6 级在小龙附近强开;当他用 Highlander(他的 **R** 大招,提供大量攻速与移速)进场时,放下 W 并在对决中刷 Q。
- **Sejuani:** 困难对线。她的 **R** 是指向型(point-and-click,= 不需要瞄准,技能自动锁定目标),会在你 **E** 冲刺中将你冰冻。等她把 **R** 用在别人身上,再用 W 切入。比平时更早购买 ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass**。
- **Kha'Zix:** 五五开略偏优势。他会进化"孤立伤害(isolation damage)" — 当目标周围没有友方时的额外伤害 — 来猎杀你的 carry。W 雾在跳跃(他的 Q 冲刺)过程中切断他的锁定。当他用 **R** 隐身 + Q 爆发时,把 W 放在 carry 而非自己身上,伤害就会被取消。
- **Kindred:** 弱势对线。她用 **Q** 冲刺风筝(= 边后退边攻击,保持距离)你的冲刺,她的大招区域(Lamb's Respite,一个让范围内队友无法死亡的圆圈)能救下任何被你压塔(= 追到敌方塔下击杀)的目标。避开她的反野范围,在她 **R** 冷却空档拿资源,遭遇战中向上单求助。

## 强势期与胜利条件

- **3 级:** 第一段 **W** 解锁。现在可以抓线 — 把 W 放在线上目标身上,用 E 切入,在雾里 Q + 普攻。雾让你 4 秒内无法被干净地选中,这是打野池里最长的抓人保护窗口。
- **6 级:** 第一段 **R** 解锁。飞针对每个被命中的英雄施加被动的最大生命值百分比魔法伤害,减速衔接你的普攻。8-9 分钟前后强开小龙战或反抓 — 技能组迎来第一个重要爆发期。
- **![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) Riftmaker + ![Sorcerer's Shoes](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3020.png) Sorcerer's Shoes(~ 16-18 分钟):** 全能吸血 + 真实伤害爆发期。现在你可以单杀大部分脆皮,W 在线时还能在 1v2 抓人中存活。
- **![Nashor's Tooth](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3115.png) Nashor's Tooth 完成(~ 24-26 分钟):** DPS 爆发期。**E** 激活时普攻射速大幅提升并附带命中 AP — 此时进入小龙 / Baron 附近的每场团战,让队伍为你做保护(peel)。
- **3 件装备 + ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) Rabadon's Deathcap(~ 30 分钟+):** carry 阶段。普攻每下能切掉敌方前排 25%+ 生命值。任何队友为你"保护"(把敌人从你身上拉开)的团战都将以胜利结束。

## 常见错误

- **从敌方打野所在那一侧开始首次清野。** Gwen 首次清野缓慢,前期生命值低;在第二个 buff 处被反野通常意味着丢闪现或送命。在侦查到对方路径之前,从敌方出生点对侧开始。
- **抓人时太早开 W。** 雾是 4 秒窗口 — 如果在线上目标被锁进战斗之前就放,敌人会直接走出去,你也没东西可用了。先用 **E** + 普攻命中,等敌人开始反应再放 **W**。
- **从扇形外打野怪 Q。** **Q** 的伤害区域是扇形中央(真实伤害判定)。让野怪处于扇形内 30 度的区域内 — 首发 DPS 翻三倍,清野快约 3 秒。
- **没 R 时强抢资源。** **R** 不在时 Gwen 的抢龙博弈很一般。只有在大招在线、并且至少留一波飞针给敌方打野时,才强开资源。
- **超出 R 范围普攻。** **R** 在线时总共能发 3 波。保持距离战场边缘 1000 单位以内,这样总能对低血目标重新施放 **R**,而不是冲进死路。

## 进阶技巧

抓人时用 **W** 雾骗技能(skillshot,= 需要手动直线或区域瞄准的技能):当对方有远程眩晕或定身的英雄(Lissandra **E**、Morgana **Q**、Veigar **E**)正要对你 **E** 冲刺反应时,在你刚进入射程的瞬间把 **W** 放在你与他之间的路径上。雾让你从外部无法被选中 — 他们经常空放技能,你就能获得 4 秒不被控制的输出窗口。诀窍是在前摇动画(技能释放前的蓄力帧)就 timing 好 **W**,而不是等技能已经落地。
