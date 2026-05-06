---
title: "Bel'Veth Jungle Build & Guide — Patch 16.9"
slug: "belveth-jungle"
language: "zh-hans"
patch: "16.9"
champion: "belveth"
role: "jungle"
last_updated: "2026-04-29"
description: "League of Legends 16.9 版本 Bel'Veth 打野完整攻略:起始装备、on-hit 核心出装顺序、关键对位思路、强势期节奏把握、新手常见错误规避,以及一条 W 重置 Q 的进阶连招技巧。"
quick_learn:
  champion_dd_id: "Belveth"
  difficulty: 5
  damage_type: "physical"
  champion_class: "Fighter / On-hit Skirmisher"
  abilities:
    - key: "P"
      name: "Death in Lavender"
      description: "击杀 large minion、野怪和参与击杀英雄都会获得永久 attack speed 层数。施放任何技能也会附带短暂的攻速 buff。"
      dd_spell_id: "Belveth_Passive"
    - key: "Q"
      name: "Void Surge"
      description: "短距离 dash,沿途造成伤害。四个方向各有独立冷却,且会随攻速降低。"
      dd_spell_id: "BelvethQ"
    - key: "W"
      name: "Above and Below"
      description: "尾扫,造成 knock-up 和减速。命中英雄会立即重置该方向的 Void Surge 冷却。"
      dd_spell_id: "BelvethW"
    - key: "E"
      name: "Royal Maelstrom"
      description: "持续打击场内体力最低的敌人的引导。引导期间获得 damage reduction 和 lifesteal;再次施放可提前结束。"
      dd_spell_id: "BelvethE"
    - key: "R"
      name: "Endless Banquet"
      description: "被动:对同一目标每隔一次平 A 触发额外 true damage,层数无上限。主动:消耗 Void Coral(英雄或 epic monster 击杀掉落)进入 true form,获得额外 HP、攻击距离和攻速。"
      dd_spell_id: "BelvethR"
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
    - { dd_id: "1102", name: "Gustwalker Hatchling" }
    - { dd_id: "6672", name: "Kraken Slayer" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3302", name: "Terminus" }
    - { dd_id: "3072", name: "Bloodthirster" }
    - { dd_id: "3124", name: "Guinsoo's Rageblade" }
  situational_items:
    - dd_id: "3091"
      name: "Wit's End"
      against: "对位高 AP 阵容 (Karthus, Ahri, Lissandra) — magic resist 加 on-hit magic damage"
    - dd_id: "6610"
      name: "Sundered Sky"
      against: "落后或对位 poke comp — 首次平 A 暴击带回血,夺回节奏"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "对位高回血阵容 (Soraka, Aatrox, Dr. Mundo, Vladimir) — Grievous Wounds on-hit"
    - dd_id: "3181"
      name: "Hullbreaker"
      against: "对面是脱战阵容时单人 splitpush 边路 — 对塔和小兵额外伤害"
    - dd_id: "3156"
      name: "Maw of Malmortius"
      against: "对位单体 AP burst (Veigar, LeBlanc, 中单 Syndra) — 30% HP 以下触发 magic shield"
  base_combo: ["Q", "AA", "W", "AA", "E", "R"]
  win_condition: "用 Q dash 与 R 的叠加 true damage 死咬一名目标直到他倒下。6 级 R 起手后强开,最好接在 Rift Herald 或 Baron 之后,这样 true form 持续时间更长。"
  weakness: "Hard CC (stun、knock-up、suppress) 会打断 Q dash 并把她钉在原地。R 没起或没目标可以咬住时,远程威胁很弱,面对厚 peel 会被压垮。"
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8005
      name: "Press the Attack"
      icon_path: "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
    primary_slots:
      - { dd_id: 9111, name: "Triumph", icon_path: "perk-images/Styles/Precision/Triumph.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Resolve"
    secondary_tree_dd_id: 8400
    secondary_slots:
      - { dd_id: 8444, name: "Second Wind", icon_path: "perk-images/Styles/Resolve/SecondWind/SecondWind.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["amumu", "zac", "skarner"]
      archetype: "无位移的坦克型打野"
      reason: "Bel'Veth 的 on-hit 体系搭配 Terminus,直接撕开他们的 armor 和 magic resist;她绕着他们的 hitbox 用 Q dash 死贴,而对方没有 disengage 手段。"
    - examples: ["karthus", "kindred", "nidalee"]
      archetype: "脆皮远程打野"
      reason: "四方向 Q dash 封死所有 kite (kite = 边撤边输出) 路线:他们一套远程技能还没循环完,她已经贴到 melee 距离。"
    - examples: ["master-yi", "shyvana"]
      archetype: "前期无控的发育型 skirmisher"
      reason: "她在他们 power spike 之前就赢下野区 skirmish (skirmish = 团战之外的 1v1 或 2v2 小规模交战),并把这点优势转化为资源点。"
  counterpicks:
    - examples: ["sejuani", "vi"]
      archetype: "拥有 point-and-click 硬控的打野"
      reason: "Bel'Veth 的 Q dash 不能闪避指向技能。一旦吃到 Sejuani 的 R 或 Vi 的 R,她就被钉死,on-hit 节奏瞬间停摆。"
    - examples: ["rammus"]
      archetype: "反攻速型坦克"
      reason: "Rammus 的尖刺被动和 W steroid 专门惩罚持续平 A:她拼命 DPS 他时反伤就把自己耗死,而他这时正稳稳控住资源点。"
    - examples: ["lee-sin", "xin-zhao", "elise"]
      archetype: "前期 invade 强势的打野"
      reason: "Bel'Veth 的首轮 clear 还行但谈不上压制;他们在 3 级、Q 没满之前就来 invade,杀她一次就开始 snowball (snowball = 早期的小优势随时间滚成大优势)。"
---

## 概述

Bel'Veth 是一名 on-hit 战士(= 主要伤害来自平 A 加上每次平 A 触发的物品效果,而不是技能本身),她把平 A 串联成一连串 dash。**Void Surge (Q)** 有四个方向、各自独立的冷却,而且都会随 attack speed 降低 — 攻速堆得越多(stack = 累积),她的 dash 频率就越高。**Endless Banquet (R)** 有两面:被动是每两次平 A 对同一目标追加 true damage(true damage = 无视 armor 和 magic resist 的伤害);主动是消耗 Void Coral —— 当她对英雄或 Rift Herald、Baron 这种 epic monster 取得 takedown(击杀或助攻)时地上掉落的一块 — 进入 true form,获得额外 HP、attack range 和 attack speed,持续相当一段时间。

她的游戏思路是依靠野区 snowball(snowball = 把早期的小优势滚成更大的优势):清野、找一路 gank(gank = 打野配合线上抓人),6 级开团,吃掉 Void Coral,然后用 true form 状态衔接下一波团战。她不是 scaling 型英雄(scaling = 时间越久越强):一旦前期打不开局面,她就只是一个更弱的 Master Yi。

## 推荐出装

**起始装备:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**。Hailblade 是打野起始装,随着击杀野怪逐步升级,最终成型一件强化 **Smite** 的装备(Smite 是每个打野必带的 summoner spell — 对单体目标的强力一击,既能加快清野,也能从对面手里抢资源点)。

**核心装备 (购买顺序):**

1. ![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) **Kraken Slayer** — 每三次平 A 追加额外物理 on-hit 伤害;非常契合一名比谁都打得快的英雄。
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — 固定攻速,与 Q 的攻速缩 CD 形成乘数关系。
3. ![Terminus](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3302.png) **Terminus** — on-hit 额外伤害,在 armor pen(无视一部分对方 armor)和 magic pen(无视一部分 magic resist)之间循环切换;只要她处于 melee range(= 近到能挥刀的距离),就还会叠加防御 — 而 Bel'Veth 几乎一直待在那个距离。
4. ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — lifesteal(按造成伤害的比例自动回血)加 overheal shield(满血后多余的治疗会转化为护盾叠在 HP 之上)。这就是你引导 **Royal Maelstrom (E)** 时所需的生存力。
5. ![Guinsoo's Rageblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3124.png) **Guinsoo's Rageblade** — 每两次平 A 中的一次会在同一次挥击里触发两次 on-hit,把 Kraken Slayer 和 Terminus 的价值翻倍。

**情境装:**

- ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — 对位 AP 浓度高的阵容(Karthus, Ahri, Lissandra;AP = 主要伤害来自技能而非平 A 的英雄)。提供 magic resist 与 on-hit magic damage,顶替 Bloodthirster。
- ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — 落后或者对位 poke comp(poke = 在团开始前就在远距离消耗你 HP 的阵容)。对每个目标的第一次平 A 必定 crit(crit = 大约造成两倍伤害的暴击)并自带回血,在 skirmish(skirmish = 野区 1v1 或 2v2 的小规模交战,而非完整的 5v5 团)里帮你抢回节奏。
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — 对位高回血阵容(Soraka, Aatrox, Dr. Mundo, Vladimir)。每次平 A 附加 Grievous Wounds(Grievous Wounds = 把目标治疗效果削半的减益)。
- ![Hullbreaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3181.png) **Hullbreaker** — 自己有领先,且对面缺 waveclear(无法快速消化兵线)。它推边路 side lane(远离中路的上路与下路) 的速度比任何东西都快,还附加额外建筑伤害,非常适合 splitpush(splitpush = 当你的队伍在地图另一侧运营时,你独自在边路施压)。
- ![Maw of Malmortius](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3156.png) **Maw of Malmortius** — 对位单体 AP burst(burst = 1-2 秒内集中爆发的伤害,例 Veigar, LeBlanc, Syndra)。低于 30% HP 时护盾自动触发,吸收下一次承受的相当一部分 magic damage。

**鞋子:** 默认 ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves**。![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** 仅在双 AD 阵容下考虑(= 对面有两名强力物理输出 carry,例如 Caitlyn + Master Yi)。

**加点顺序:** 主升 **Q**,副升 **E**,最后 **W**。**Q** 每升一级基础 CD 都会下降 — 一个槽位同时承担伤害与机动性。**R** 在 6、11、16 级各点一级。

**符文:** 符文是开局前选择的被动加成,决定前期数值与伤害风格。主系 **Precision**(以平 A 为核心的天赋树),带 **Press the Attack**(对同一目标平 A 三次后,下一次平 A 或技能造成额外伤害,且该目标在数秒内被所有人造成的伤害都更高)、**Triumph**(参与击杀回少量血)、**Legend: Alacrity**(每次参与击杀获得额外攻速)、**Coup de Grace**(对低血敌人额外伤害)。副系 **Resolve** 带 **Second Wind**(受到伤害后回 HP)+ **Revitalize**(自身受到的治疗与护盾增强),适合长时间野区 skirmish;若局势平稳、想优化经济和技能 CD,则选 **Inspiration** 带 **Magical Footwear**(12 分钟免费鞋)+ **Cosmic Insight**(summoner spell 冷却缩减)。

## 关键对线

- **Lee Sin:** 前期 invade 强势的打野(= 在你出装之前就跑进你的野区想杀你的打野)。在自己 buff 区做眼跟踪他的位置,4 级前避免和他正面 — 这场决斗他每次都赢。
- **Master Yi:** 同为 scaling 的对手。在 20 分钟之前杀掉他,否则你要接受他在后期团战里输出比你更高的事实;早期强行 objective trade(= 趁他在地图另一边时去推 Drake 或 Herald),让他永远到不了四件套。
- **Karthus:** 免费对位。他的 ult(R,即 ultimate — 最强且 CD 最长的技能)能跨地图给你的整队伤害,但他的机动性是零 — 你 Q 上去,他在你一套 rotation(= 你完整一轮技能循环)之内就会倒下。每当他刚跟完一波 gank,就去 counter-jungle(= 偷他的野怪)。
- **Sejuani:** 难打的对位。她的 R 是 point-and-click(= 锁定目标即可生效,无需瞄准),会把你定在原地。**Flash** 没好之前不要 engage(engage = 主动开团),没有队友能 peel(peel = 阻挡威胁、不让它打到你的队友) 你时也别上。
- **Rammus:** 硬克制(= 这个英雄的设计专门针对你的对位)。Rammus 的尖刺被动会反弹你一部分平 A 伤害,他的 W 是防御性 steroid(steroid = 临时倍化某项数值的技能 — 这里是 armor 与反弹值)还会把反伤再翻一倍。避免单挑、给队伍发信号,在 Terminus 没成型前去对面野区另一侧发育。

## 强势期与胜利条件

power spike 是指英雄在某个瞬间相比一分钟前突然强了一大截 — 通常发生在新技能或新装备到位的时刻。

- **3 级:** 第一波满野完成,**Q-W-E** 全部解锁。你能用 W 的 knock-up(= 把敌人短暂打到空中的技能,带极短的 stun)+ Q 撤退去回应大多数 gank,但还无法主动开战 — 专心干净清野和拿一只早期 Scuttle(Scuttle = 河道中立蟹,杀掉提供视野和河道移速 buff)。
- **6 级:** **Endless Banquet (R)** 上线。下一次对英雄或 epic monster(Rift Herald, Drake)的 takedown 之后,你吃掉 Void Coral,进入持续较长的 true form(= 强化变身,让你短时间变成一个迷你 boss)。立刻去强一波团战或者一条龙。
- **![Kraken Slayer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6672.png) Kraken Slayer + ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) Berserker's Greaves (~10-12 分钟):** 第一个真正的 damage spike。此时你可以在对方野区里和大多数打野单挑,也可以直接 dive(dive = 顶着塔伤进塔击杀对面线上选手)残血对位。
- **![Terminus](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3302.png) Terminus 成型 (~16-18 分钟):** 三件套之后,大多数 squishy 目标(squishy = 防御薄弱的英雄,例如 ADC 与多数法师)的 armor 与 magic resist 都不再是问题。和队伍合流去打第二条龙和 Baron 的 timer。
- **Void epic monster (Rift Herald 或 Baron):** 来自 epic monster(epic monster = 远比普通野怪强的中立大型资源点) 的 Void Coral 能让你的 R 主动形态持续时间长得多。10-14 分钟前后跟队伍一起拿 Herald,带着仍在生效的 true form 推两波兵线。

## 常见错误

- **Q 总是按同一个方向。** 四个方向各自独立 CD。原地往前按四下 Q 等于浪费三个方向。前一下、侧一下、后一下 — 输出更高、攻速 stack 也更快。
- **每次都把 E 引导吃满。** **Royal Maelstrom (E)** 是引导技(= Bel'Veth 站定持续输出,过程会被打断)。再次按下可以提前结束。它的真正用处是吸住一次集中输出(例如 Veigar 牢笼里的 W),然后立刻收掉回到平 A 节奏。整段引导满吃,意味着两秒钟你完全没在平 A。
- **附近没 Void Coral 还按 R。** 主动形态持续大约 30-60 秒,具体看 source。没 coral 就是浪费;真正进入常规交战时,你想要的是被动每两次平 A 触发的 true damage。
- **2 级想和对面打野 1v1。** 她清野没问题,但前期单挑只能算一般。如果 Lee Sin 或 Xin Zhao 在 2-3 级 invade,放掉那个野怪向队伍发信号 — 想赢这场单挑不现实,死掉就把 snowball 直接送到对面手里。
- **忽视 Void Coral 的时间窗口。** Void Coral 落地后只有一段很短的可拾取时间。6 分钟杀掉对面却没去吃 coral,等于把杀人的唯一意义直接扔了。回城前(recall = 把你传回基地的引导技)永远先踩过 coral。

## 进阶技巧

把 **Above and Below (W)** 当作 Q 的重置工具来用。技能描述说,**W** 命中英雄会刷新该方向的 **Void Surge (Q)** 冷却 — 因此 1v1 中最优的连招节奏是 **前向 Q → AA → W 命中目标 → 后向 Q 撤离**,身子刚转过来,前向 Q 就已经冷却好了。职业选手用这个 loop 在两秒内串起三段 dash,而游戏里没有任何其他打野能在同一时间窗口里做到这一点。
