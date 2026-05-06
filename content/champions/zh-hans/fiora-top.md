---
title: "Fiora Top Build & Guide — Patch 16.9"
slug: "fiora-top"
language: "zh-hans"
patch: "16.9"
champion: "fiora"
role: "top"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Fiora 上单完整攻略:决斗者出装思路、Vital 管理与 parry 时机把握、核心对线对策、强势期节奏运用,以及对线常见错误规避一页全收录。"
quick_learn:
  champion_dd_id: "Fiora"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Skirmisher / Duelist"
  abilities:
    - key: "P"
      name: "Duelist's Dance"
      description: "每个附近敌方英雄身上会出现一个发光的弱点(Vital)。命中造成 true damage,治疗 Fiora 并赋予短暂的 Move Speed。"
      dd_spell_id: "Fiora_Passive"
    - key: "Q"
      name: "Lunge"
      description: "短距离方向性突进,刺击最近的敌人并重置普攻计时器。命中可返还大部分冷却,因此连续 Q 是她的主要机动手段。"
      dd_spell_id: "FioraQ"
    - key: "W"
      name: "Riposte"
      description: "Parry:瞬间格挡所有来袭伤害与 disable,然后向指定方向刺击。减速第一个命中的敌人;如果格挡了 CC 效果则将其眩晕。"
      dd_spell_id: "FioraW"
    - key: "E"
      name: "Bladework"
      description: "强化她接下来的两次普攻。第一下减速目标,第二下必定暴击。两次都在窗口期内提供 attack speed 加成。"
      dd_spell_id: "FioraE"
    - key: "R"
      name: "Grand Challenge"
      description: "显示目标英雄身上全部四个 Vital。全部命中(或在至少命中一个 Vital 后击杀目标)将以大范围 AOE 治疗 Fiora 与附近队友。"
      dd_spell_id: "FioraR"
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
    - { dd_id: "3074", name: "Ravenous Hydra" }
  situational_items:
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "对方法术伤害多或 CC 链严重时从 Plated Steelcaps 切换 (Lissandra、Ryze、Sett 拉拽)"
    - dd_id: "6610"
      name: "Sundered Sky"
      against: "对面坦克型战士时 (Mundo、Sion、Ornn) — 首击暴击+治疗压制堆血量的对手"
    - dd_id: "6631"
      name: "Stridebreaker"
      against: "对位机动性强的上单时 (Camille、Irelia、Renekton) — 仅靠 Q 不够时用突进+减速贴身"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "对面 AP 爆发强时 (Mordekaiser、Vladimir、Rumble) — 法盾+魔抗保住 1v1 splitpush 窗口"
    - dd_id: "6694"
      name: "Serylda's Grudge"
      against: "对面前排堆甲时 (Malphite、Rammus、Shen) — 护甲穿透+减速,把目标留在 Vital 范围内"
  base_combo: ["Q", "AA", "E", "AA", "AA"]
  win_condition: "前期靠管理 Vital 自愈滚雪球,做出 Trinity Force 后开始边路 splitpush,逼对方分两人来抓。团战中 R 最脆的目标,AOE 治疗赢下持续战。"
  weakness: "前 6 级很脆且非常依赖装备。硬 CC 链和远程消耗(Teemo、Quinn、Gnar)会把她逼离 Vital;若 Q 无法重置她毫无机动可言。"
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8010
      name: "Conqueror"
      icon_path: "perk-images/Styles/Precision/Conqueror/Conqueror.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9103, name: "Legend: Bloodline", icon_path: "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8473, name: "Bone Plating", icon_path: "perk-images/Styles/Resolve/BonePlating/BonePlating.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["sett", "darius", "garen"]
      archetype: "依赖单一大招的慢速重型战士"
      reason: "Fiora 的 W 正好格挡定义他们的那一下提示明显的前摇(Darius 的 E 拉拽、Sett 的 W 砸落、Garen 的 Q 沉默)。前摇被废后,她绕场自由打 Vital 整场对拼。"
    - examples: ["dr-mundo", "sion", "shen"]
      archetype: "无法阻止 Vital 的堆血量坦克"
      reason: "Vital 按目标最大生命百分比造成 true damage(无视护甲与魔抗的伤害)。他们血量越高,持续战中她的 R 切得越多。"
    - examples: ["nasus", "kayle"]
      archetype: "前期对线弱、后期成型的近战"
      reason: "她从 2 级开始用 Q 重置把对方逼离兵线,在他们做出关键装备前反复击杀或推回塔下。"
  counterpicks:
    - examples: ["teemo", "quinn", "gnar"]
      archetype: "在 Q 范围外风筝的远程上单"
      reason: "Fiora 在 6 级前对远程消耗毫无办法。他们站在普攻距离致盲她或突进离开,而她碰不到 Vital 来恢复。"
    - examples: ["jax", "irelia", "camille"]
      archetype: "拥有自带机动的近战刺客"
      reason: "他们的突进无视她的走位博弈。Jax 的 E 在 parry 窗口里也能眩晕,Irelia 的 Q 重置每秒重新定位,Camille 的 R 把 Fiora 关在 1v1 里耗光资源。"
    - examples: ["malphite", "poppy", "tahm-kench"]
      archetype: "拥有点选式硬 CC 锁人能力的坦克"
      reason: "他们的 CC 一旦施加在你身上就稳定且无法 parry。Malphite 的 R 或 Poppy 的停止冲锋直接打断 Fiora 的 R 窗口,期间队伍只能 4v5。"
---

## 概述

Fiora 是 **skirmisher** —— 一名在 1v1 持续战中获胜的近战决斗者,而不是像刺客那样在 1-2 秒内爆发。她的技能组围绕被动 **Duelist's Dance** 展开:每个附近敌方英雄身上会出现一个名为 **Vital** 的发光弱点,每隔几秒旋转到新方向。命中 Vital 造成 **true damage**(无视护甲与魔抗的伤害),治疗她,并赋予 Move Speed。Q **Lunge** 是低冷却的短距离突进,命中后冷却几乎全额返还,因此围绕对手连续 Q 来够到下一个 Vital 是核心机械循环。W **Riposte** 是 **parry** —— 短暂的护盾,格挡下一次伤害或 CC 实例并反刺,如果格挡的是 CC 效果,会将目标眩晕。

游戏思路描述简单但操作繁多:对线时管理 Vital 自愈并消耗对手,寻找 2 级或 6 级的全力一搏(完全 commit 击杀的对拼),Trinity Force 一成型就开始 **splitpush**(独自推进边路逼对方分人来阻止你)。开 R **Grand Challenge** 后,Fiora 成为游戏中最强的 1v1 英雄之一:对孤立目标开大,打满四个 Vital,结尾的 AOE 治疗能凭一己之力翻盘团战。前 6 级她身板脆且依赖装备,所以前期对线重在 Vital 管理而非击杀。

## 推荐出装

**起始装备:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**。生命回复被动可缓冲对面消耗(不 commit 团战、低成本远程蹭血),撑到 2 级 Q-E 强势期。仅在预期早期全力一搏的近战对线(例如镜像 Fiora、Garen)选 ![Doran's Blade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1055.png) **Doran's Blade**。

**核心装备(顺序):**

1. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** —— 首件强势期(伤害与 **stickiness**(保持贴身追击逃跑目标的能力)的最大跃迁)。on-hit Spellblade 在每次 Q 时触发巨额额外伤害,每次施法后的 Move Speed 被动叠加 Vital 追击。AD、attack speed、ability haste(降低技能冷却的属性)与 HP 全部契合技能组需求。
2. ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** —— 对方主要靠普攻输出时的默认鞋子。
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** —— HP 加 **lifeline 护盾**:HP 跌至 ~30% 以下时自动触发护盾。这正是你需要额外时间打完 R 目标最后两个 Vital 的窗口。
4. ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** —— 把 **burst** AD(1-2 秒内集中输出的高伤害)转化为缓慢出血(分摊到接下来几秒的伤害)。击杀时剩余出血被清除 —— splitpush 越塔的干净重置。
5. ![Ravenous Hydra](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3074.png) **Ravenous Hydra** —— 普攻 AOE 横扫加 omnivamp(对你造成的任何伤害都生效的吸血,而不只是普攻)。清线翻倍,可在不浪费太多时间的前提下 splitpush 边路。

**情境装备:**

- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** —— 当对方法术伤害高或 **CC**(crowd control:眩晕、定身、击退等任何锁住你的效果)链严重时从 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** 切换。tenacity(降低自身受 CC 时长的属性)在团战中保持 W parry 窗口可用。
- ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** —— 对位坦克型战士对线(Mundo、Sion、Ornn)时的首件替代。战斗中对英雄的每次首击必定暴击并治疗 —— 抗堆血量对手的额外续航。
- ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** —— 对位机动性强的上单(Camille、Irelia、Renekton)。突进+减速主动给你第二个 gap-closer(用于拉近与敌人距离的工具),仅靠 Q 重置不够留人时使用。
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** —— 对面 **AP**(Ability Power,法术伤害背后的属性)爆发强(Mordekaiser、Vladimir、Rumble)时。lifeline 法盾+魔抗让 1v1 splitpush 仍可打。
- ![Serylda's Grudge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6694.png) **Serylda's Grudge** —— 对面前排堆护甲(Malphite、Rammus、Shen)时。护甲穿透加上一次减速触发(在每次造成伤害的命中时自动触发的被动)将坦克钉住足够久,够你打完四个 Vital。

**鞋子:** ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** 是默认。当对面有三个或以上 CC 来源,或法术伤害极重时切换 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**。

**技能加点:** 优先满 **Q**(每级冷却下降,重置接近瞬发)。然后满 **E**(强化暴击伤害提升,更长的减速便于布局 Vital)。**W** 最后满。**R** 在 6、11、16 级各点一次。

**符文:** 主系 **Precision** 配基石符文(系内核心符文)**Conqueror** —— 持续战斗叠加额外 AD,~5 秒后封顶。搭配 **Triumph**(参与击杀回血+回金)、**Legend: Bloodline**(参与击杀叠加吸血)、**Coup de Grace**(40% HP 以下额外伤害 —— 完美收尾 Vital)。副系 **Resolve** 选 **Bone Plating**(受到伤害后下 3 次伤害减免)加 **Revitalize**(增强 R 团队治疗)。属性碎片:**Adaptive Force** + **Adaptive Force** + **Health Scaling**。

## 关键对线

- **Darius:** 操作对决。他 Q 外圈刀刃叠加出血层数、raw 对拼比你强,但整套技能都有提示:对他的 E 拉拽 **W**(parry),对拼立刻翻盘。挡下拉拽他被眩晕近 1 秒 —— Q 进、两 Vital、退出。被动 4-5 层时绝不对拼。
- **Camille:** 困难对线。她 E 钩锁第二段命中可穿透你的 W 眩晕,R 把你锁在 1v1。**W** 留给她的 R 而不是 Q。如果她早期滚雪球,先做 ![Stridebreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6631.png) **Stridebreaker** 而非 Trinity。
- **Teemo:** 残酷对线。他冷却好就致盲你(短时间取消你的普攻)并在 Q 范围外消耗。在己方塔附近 **freeze** 兵线(停止推线、把兵线留在己方一侧)拒绝他 farm(从小兵获得的金币与经验),并叫打野来抓。
- **Garen:** 优势。Q-W 骗他的 **W**(伤害减免护盾),然后向侧面走打 Vital。他 Q 沉默是直线前摇 —— 反应即可 parry。除非装备领先 1-2 件,否则别在他 R 状态下全力一搏。
- **Jax:** 一件装备后 Fiora 取胜的均势对线。挡下他的 **E**(2 秒眩晕前摇)线就是你的。没有这次 parry,他的 E + 反击会因为穿透你 channel 中的所有命中眩晕你而对拼胜出。

## 强势期与胜利条件

- **2 级:** Q + E 都解锁后有真正的全力一搏窗口。Q 进打一个 Vital,E 减速+暴击普攻,侧移到下一个 Vital。多数对线在一次 2 级对拼中会失去三分之一血量。
- **6 级:** 第一次 **R** 解锁。即使零件装备,R 也能孤立目标,AOE 治疗在击杀后让你长时间存活。打野出现在上路一侧时立刻强开 1v1。
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force 完成(~ 11-13 分钟):** 伤害与 stickiness 在此跃升最大。可以稳定边路 splitpush 并 1v1 击败任何来阻止你的人。这件装备成型后强行制造边路压力、忽略中路团战。
- **三件装备 + R 在身(~ 22-26 分钟):** 团战巅峰窗口。R 切最脆目标,绕场打满四个 Vital,AOE 治疗带全队撑过第二波 engage。够不到后排时 R 血量最高的前排 —— true damage 同样能切穿他们的装备。

## 常见错误

- **冷却好就 Q 输出。** Q 首先是走位工具,其次才是伤害。如果朝敌人 Q 然后吃下他的整套连招,你既浪费了突进也浪费了返还。Q **朝向 Vital**,不是朝向英雄。
- **W 浪费在普攻上。** W 能格挡任何伤害源,但格挡兵线普攻就是浪费潜力。把 W 留给敌人最大的单一技能。干净 parry 一个 CC 等于一个免费击杀窗口。
- **对着墙开 R。** R 会在目标的东南西北放置四个 Vital。如果敌人已经贴墙,有两个 Vital 卡在墙这一侧打不到。先把目标拉到开阔地形再 R。
- **没视野就 splitpush。** Fiora 1v1 谁都能赢,但 1v2 每次都输。推线前先在敌方边路草丛放一个 ![Control Ward](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2055.png) **Control Ward** —— 没有视野,每次推线都是逃不掉的免费 gank。
- **对着满层被动对拼。** Darius、Sett、Renekton 这种重型战士被动充满时 raw 对拼比你强。他们能量条满时撤退、推线,等条空再对拼。

## 进阶技巧

把 **W parry 时机**练在点选式大招(自动锁定敌人的技能,例如 Mordekaiser 的 R)上,而不是技能枪法(需要手动瞄准的技能)。多数玩家试图在 Malphite R 或 Sion R 的前摇上 W,可以但太可预测。真正的大操作是 W 住 **Mordekaiser 的 R**(parry 让他眩晕近 1 秒,你从容走出),**Skarner 的 R**(压制被取消并把他眩晕),以及 **Warwick 的 R**(帧级精度,但干净一次足以结束战斗)。开自定义房间,让朋友选这几个英雄之一,反复练习 parry 直到从预读改为反应。一旦形成反射,即使装备落后,所有带硬 CC 大招的 1v1 都会朝你这边翻盘。
