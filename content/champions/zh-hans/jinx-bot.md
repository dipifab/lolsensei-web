---
title: "Jinx Bot Build & Guide — Patch 16.9"
slug: "jinx-bot"
language: "zh-hans"
patch: "16.9"
champion: "jinx"
role: "bot"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Jinx 暴走萝莉下路 ADC 完整攻略:起始装备、超级核心暴击装路线、关键对线分析、强势期节点把握、团战站位与切入时机、新手常见错误,以及双形态切换 mid-AA 提升爆发的进阶操作技巧。"
quick_learn:
  champion_dd_id: "Jinx"
  difficulty: 3
  damage_type: "physical"
  champion_class: "Marksman / Hypercarry"
  abilities:
    - key: "P"
      name: "Get Excited!"
      description: "Jinx 参与击杀英雄、史诗级野怪或摧毁建筑后,数秒内获得大幅移速与攻速加成。"
      dd_spell_id: "Jinx_Passive"
    - key: "Q"
      name: "Switcheroo!"
      description: "切换 Pow-Pow (机枪,叠加攻速) 与 Fishbones (火箭筒,AOE 伤害更远射程,消耗蓝量)。核心 DPS 杠杆。"
      dd_spell_id: "JinxQ"
    - key: "W"
      name: "Zap!"
      description: "远距离直线 skillshot,对命中的第一个敌人造成伤害、减速并提供视野。用作 poke 与对位 diver 的 self-peel 减速。"
      dd_spell_id: "JinxW"
    - key: "E"
      name: "Flame Chompers!"
      description: "投掷三颗陷阱手雷,接触敌方英雄时定身 1.5 秒。self-peel 与 lockdown 起手用,不是消耗技。"
      dd_spell_id: "JinxE"
    - key: "R"
      name: "Super Mega Death Rocket!"
      description: "全图火箭,飞行越远伤害越高,根据失去生命值爆炸。狙杀残血逃跑者,或从地图另一头收尾。"
      dd_spell_id: "JinxR"
  skill_order:
    - { level: 1, key: "Q" }
    - { level: 2, key: "W" }
    - { level: 3, key: "E" }
    - { level: 4, key: "Q" }
    - { level: 5, key: "Q" }
    - { level: 6, key: "R" }
    - { level: 7, key: "Q" }
    - { level: 8, key: "W" }
    - { level: 9, key: "Q" }
    - { level: 10, key: "W" }
    - { level: 11, key: "R" }
    - { level: 12, key: "W" }
    - { level: 13, key: "W" }
    - { level: 14, key: "E" }
    - { level: 15, key: "E" }
    - { level: 16, key: "R" }
    - { level: 17, key: "E" }
    - { level: 18, key: "E" }
  core_items:
    - { dd_id: "3087", name: "Statikk Shiv" }
    - { dd_id: "3006", name: "Berserker's Greaves" }
    - { dd_id: "3031", name: "Infinity Edge" }
    - { dd_id: "3085", name: "Runaan's Hurricane" }
  situational_items:
    - dd_id: "3036"
      name: "Lord Dominik's Regards"
      against: "对位高血量前排或堆血阵容 (Sion, Cho'Gath, Dr. Mundo) — 额外护甲穿透随敌人最大生命值 scaling"
    - dd_id: "3033"
      name: "Mortal Reminder"
      against: "对位高回血阵容 (Soraka, Vladimir, Aatrox) — 火箭一旦命中立即施加 Grievous Wounds"
    - dd_id: "3046"
      name: "Phantom Dancer"
      against: "对位 assassin 或 diver 压力 (Zed, Samira, Yasuo flank) — 移速与低血护盾换来一秒落 E"
    - dd_id: "3072"
      name: "Bloodthirster"
      against: "对位高 poke 阵容或僵持线 — lifesteal 与 overheal 护盾让你在团战间维持满血"
  base_combo: ["W", "Q-AA", "E", "R"]
  win_condition: "活着推进到 Statikk Shiv 与 Infinity Edge,然后从 backline 用 Q 火箭打团。通过 pickoff 触发 Get Excited! 重置,在大龙小龙战中 snowball。"
  weakness: "基础移速慢,且没有任何位移或闪烁。被冲到 backline 的 diver 与 assassin 硬克制;在前两件成型前会被强势对线 marksman (Draven, Lucian, Caitlyn) 压制。"
  runes:
    primary_tree: "Precision"
    primary_tree_dd_id: 8000
    keystone:
      dd_id: 8008
      name: "Lethal Tempo"
      icon_path: "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
    primary_slots:
      - { dd_id: 8009, name: "Presence of Mind", icon_path: "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png" }
      - { dd_id: 9104, name: "Legend: Alacrity", icon_path: "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png" }
      - { dd_id: 8014, name: "Coup de Grace", icon_path: "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8236, name: "Gathering Storm", icon_path: "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png" }
    stat_shards:
      - "Adaptive Force"
      - "Attack Speed"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["jhin", "varus", "ashe", "senna"]
      archetype: "无位移的后期 marksman"
      reason: "Jinx 在发育与团战上都强过静态的 marksman:Q 火箭加上 Runaan's Hurricane 能撕碎一条没有位移、开战后无法重新走位的扎堆 backline。"
    - examples: ["sion", "cho-gath", "dr-mundo", "ornn"]
      archetype: "堆血坦克与前排型阵容"
      reason: "Q 火箭打的是随攻速 scaling 的 AOE 物理伤害,加上 Lord Dominik's 对高血量目标的额外护穿,把厚重的前排从一堵墙变成完美靶子。"
    - examples: ["leona", "nautilus", "rell"]
      archetype: "lockdown 类强开辅助"
      reason: "辅助锁住目标后,Jinx 有足够长的平 A 窗口在 CC 链中打入 3-4 发火箭并以 R 收尾,因为目标无法位移脱出 AOE。"
  counterpicks:
    - examples: ["draven", "lucian", "kalista"]
      archetype: "强势对线 marksman"
      reason: "他们在 1-6 级 out-trade Jinx,平 A 输出超过机枪叠层速度,而 Jinx 没有位移脱身;在第一件装备节点之前他们已经 snowball 了线上经济。"
    - examples: ["zed", "samira", "yasuo"]
      archetype: "高机动 assassin 与 diver"
      reason: "Jinx 没有位移、没有闪烁、没有瞬发 CC:一次绕过 Flame Chompers 的突进通常会在 E 落地或定身结束之前直接秒掉她。"
    - examples: ["xerath", "ziggs"]
      archetype: "射程更远的远程炮台 mage"
      reason: "他们在 Q 火箭射程之外消耗 Jinx,每波兵都会削掉她的血量。没有逃生与续航,她无法在线上撑到自己的装备节点。"
---

## 概述

Jinx 是教科书式的 hypercarry marksman:前十分钟弱势,两件装备成型后令人胆寒,只要在团战里拿到一次重置就能终结比赛。**Switcheroo! (Q)** 让她在单体机枪 (叠加攻速) 与 AOE 火箭筒 (更长射程、AOE 物理伤害、消耗蓝量) 之间切换,因此同一个键既能在敌方 backline 上打干净的 DPS,也能完成清线与对前排的施压。被动 **Get Excited! (P)** 把每一次击杀、助攻或建筑摧毁都转化成一段巨大的移速与攻速窗口 — 这就是发育起来的 Jinx 能直接走进团战、在 buff 落下前再连续拿三个人头的引擎。

游戏思路一句话能说清,但执行很难:在前期顶住对面的压制,推进到第一件暴击装 (Statikk Shiv),然后以 backline carry 的姿态打团 — 站在倒数第二靠后的位置,用 Q 火箭做 kite (一边平 A 一边后退保持距离),diver 落到你头上时把 **Flame Chompers (E)** 砸在自己脚下,残血逃跑的对手用 **R** 跨地图狙杀。技巧体现在两点:团战中实时切换 **Q** 形态 (机枪打开团坦克、火箭洗扎堆 backline),以及把对手的站位失误用 **R** 直接转化为人头,让人头先掉而不是让对方先冲到自家 backline。

## 推荐出装

**起始装备:** Doran's Blade + 2 个 Health Potion。即便线上占优也跳过第二个 Doran's — 那点经济投入到 Statikk Shiv 的 Sheen 组件里收益高得多。

**核心装备 (按购买顺序):**

1. ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv** — 首件冲冲。Energized 被动会在 Q 火箭上触发,实现瞬间清线;攻速加暴击率的组合让火箭形态在 10-12 分钟左右真正成为团战工具。
2. ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves** — 攻速鞋。只有当对面有 3 个以上强 CC 威胁堆叠时才考虑 Mercury's Treads。
3. ![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) **Infinity Edge** — 你最大的伤害节点。暴击伤害直接把每一发 Q 火箭打到 backline 的 AOE 翻倍;就是这件让 Jinx 从"烦人"变成"直接抹掉敌方 ADC"。
4. ![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) **Runaan's Hurricane** — hypercarry 团战核心。Jinx 处于 Fishbones 形态时,Runaan's 发出的副弹也会变成火箭,因此能以完整暴击 + 攻速 scaling 同时命中三个目标。

**情境装:**

- ![Lord Dominik's Regards](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3036.png) **Lord Dominik's Regards** — 对位高血量前排或堆血阵容 (Sion, Cho'Gath, Dr. Mundo)。如果对面有 3 个以上坦克,用它替换 Runaan's。
- ![Mortal Reminder](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3033.png) **Mortal Reminder** — 对位高回血阵容 (Soraka, Vladimir, Aatrox)。火箭命中瞬间施加 Grievous Wounds (削减治疗效果的 debuff)。
- ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** — 对位 assassin 或 diver 压力 (Zed, Samira, Yasuo flank)。低血量阈值的被动 (血量过低时触发的护盾) 加上移速,刚好够你在脚下放下 **E** 的那半秒。
- ![Bloodthirster](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3072.png) **Bloodthirster** — 对位高 poke 阵容或僵持线。lifesteal 加 overheal 护盾给你在线上撑到装备节点的续航。

**鞋子:** 默认 ![Berserker's Greaves](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3006.png) **Berserker's Greaves**。仅在对面有强力 AP CC (例如 Brand 或 Zyra 辅助) 时才换 Mercury's Treads。

**加点顺序:** 主升 **Q** (DPS 与火箭 scaling),副升 **W** (Zap! 冷却用于 poke 与 self-peel 减速),最后升 **E** (定身时间固定,只有伤害 scaling)。**R** 在 6、11、16 级各点一级。

**符文:** 主系 **Precision**,带 **Lethal Tempo**、**Presence of Mind**、**Legend: Alacrity**、**Coup de Grace**。副系 **Sorcery**,带 **Manaflow Band** (撑住 Q 火箭的蓝耗) 与 **Gathering Storm** (后期 scaling)。属性碎片:攻速 / 自适应 / 生命值。

## 关键对线

- **Draven:** 1-6 级对 Jinx 极为不利。他的 Spinning Axe 在每次 trade 都压你一头。3 级前不要交手;在自家塔下 freeze 兵线,等到 6 级且 Zap! 已转好,只在他过线时让打野 dive。Statikk Shiv 成型后局势反转 — 在那之前避开他的 all-in 窗口,安全发育。
- **Caitlyn:** 不利。她的射程超过你的机枪,会用 Q 加陷阱 setup 持续骚扰。藏在小兵后面,横向 dodge 她的 Q 弹道,绝不踏进她待过的草丛 (大概率有陷阱)。撑到两件装 — 她的团战 scaling 在你的 Q 火箭 AOE 面前明显跌幅。
- **Lucian:** 不利,尤其是配 Nami 辅助时。要尊重他在 3 级的 all-in (被动双发 + Q 位移 + W 加速)。把 **E** 当作针对他位移的 self-peel 留着,绝不当成 poke 交。安全推进到 ![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) **Statikk Shiv**,线就稳住了。
- **Aphelios:** 五五开,两件装后略偏 Jinx。盯住他的武器轮换 — 他持 Severum (红色,lifesteal) 或 Calibrum (绿色,射程标记) 时,你可以从机枪安全距离用 Q 火箭 poke。Infernum (橙色,AOE) 装填时不要 trade — 那是他的火箭对火箭窗口,他赢。
- **Samira:** 一旦升出 W 就想打近身 all-in。如果她正在 snowball,把 ![Phantom Dancer](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3046.png) **Phantom Dancer** 列为计划中的第三件;她位移进来的瞬间立即 **E** 落脚 (绝对不要先 poke 交掉),并且 **Flash** CD 时绝不能开战。

## 强势期与胜利条件

- **6 级:** 第一发 **Super Mega Death Rocket!** 解锁 pickoff 压力。下路返回基地的残血敌人就是 R 处决的免费人头 (前提是你尊重失血 scaling)。别拿来 poke,等 30% HP 以下的逃跑目标。
- **![Statikk Shiv](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3087.png) Statikk Shiv 完成 (~12-14 分钟):** 第一个真正的节点。Q 火箭一发清线,Energized 在每层机枪叠加上都触发,小龙周边的小型遭遇战都能参与。
- **![Infinity Edge](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3031.png) Infinity Edge 成型 (~20-24 分钟):** hypercarry 分水岭。Q 火箭暴击开始秒杀 backline 目标,而每一次 pickoff 或击杀都会触发 **Get Excited!**,让你免费切换到下一场团战。
- **![Runaan's Hurricane](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3085.png) Runaan's Hurricane 成型 (~28-32 分钟):** 三目标暴击 Q 火箭。这就是后期幻想画面 — 站在前排身后,把火箭打入敌方人堆,4 秒内整场团战自我消解。

## 常见错误

- **线上滥用 Q 火箭。** 火箭形态蓝耗很快,机枪形态才能维持高攻速叠层。火箭只在三个小兵叠在一起的 last-hit 清理或者距离压制 poke 时使用,trade 窗口一关就立刻切回机枪。
- **为"完美狙杀"留 R。** **Super Mega Death Rocket!** 是按失去生命值 scaling,不是按最大生命值。对一个 25% HP 敌人在 60% 距离稳稳放出去就是确定击杀;一直等跨地图的完美一炮,目标往往已经回基地满血回来了你才打出去。
- **团战自动站到平 A 极限距离。** Jinx 没有位移。平 A 极限距离会把你抛在队友 peel (保护范围 — 辅助的 CC 与护盾) 之外。站在倒数第二靠后,这样侧翼绕后的 assassin 就没法在队友反应前秒掉你。
- **把 E 用来 engage。** **Flame Chompers!** 是你唯一的 self-peel。一旦进 CD 你就是 glass cannon (高伤害低防御的英雄,大多数 ADC 都是) 面对 diver 完全没解。Zed 或 Samira 落到你头上时砸在自己脚下,绝不要当 poke 起手用。
- **在 Get Excited! 窗口外追击。** 被动只有几秒。如果 buff 在你深入敌方时落下,你只有基础移速且零脱身手段。加速一结束就立刻撤 — 下一场团战回到你身边的速度,比你想的更快。

## 进阶技巧

练习 **平 A 间 Q 形态切换**,让两套伤害同时在线。诀窍 — 先在一波兵线上叠满 3 层机枪攻速,在一发 Q 火箭即将 last-hit 两个小兵的瞬间切到火箭、放一发火箭,再在同一帧切回机枪以保留攻速 buff。在团战里,这意味着用机枪在前排坦克身上叠攻速、在队伍 commit engage 的瞬间切到火箭、把 3-4 发火箭以暴击 + Runaan's 全攻速堆好的状态打入敌方 backline。操作到位的话,在团战头三秒能多出大约 40% 的 DPS — 而那正是 carry 决定生死的窗口。
