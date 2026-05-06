---
title: "Amumu Jungle Build & Guide — Patch 16.9"
slug: "amumu-jungle"
language: "zh-hans"
patch: "16.9"
champion: "amumu"
role: "jungle"
last_updated: "2026-04-29"
description: "League of Legends 英雄联盟 16.9 版本 Amumu 哭泣的木乃伊打野完整攻略:起始装备与刷野顺序、AP 坦克核心出装(magic damage + tank stats)、抓人时机与线权利用、Resolve/Sorcery 符文搭配、R 起手与优先目标选择、新手常见错误规避,以及 Flash + Q 进阶连招技巧。"
quick_learn:
  champion_dd_id: "Amumu"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Engage"
  abilities:
    - key: "P"
      name: "Cursed Touch"
      description: "basic attack 会给敌人挂上 Curse 标记。被诅咒的目标承受任何 magic damage 时会额外吃一段 true damage — 队友的法术伤害更穿。"
      dd_spell_id: "Amumu_Passive"
    - key: "Q"
      name: "Bandage Toss"
      description: "远距离直线 skillshot,命中后将 Amumu 拉向第一个被击中的敌人并将其 stun。两段使用 — 一段开团,一段衔接或脱身。"
      dd_spell_id: "BandageToss"
    - key: "W"
      name: "Despair"
      description: "切换型光环,每秒对周围敌人造成最大生命值 % 的 magic damage,并不断刷新 Curse。开启时持续消耗蓝量 — 战斗外记得关。"
      dd_spell_id: "AuraofDespair"
    - key: "E"
      name: "Tantrum"
      description: "被动:受到的物理伤害降低。主动:近距离 AOE 爆发。每次受到攻击,主动技的冷却都会缩短,所以在长时间团战里要不断按出去。"
      dd_spell_id: "Tantrum"
    - key: "R"
      name: "Curse of the Sad Mummy"
      description: "范围巨大的 AOE stun,锁住身边所有敌人并附加 Curse。整个英雄技能组的核心 — 每一次团战都从这一发命中开始。"
      dd_spell_id: "CurseoftheSadMummy"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "W" }
    - { level: 3, key: "Q" }
    - { level: 4, key: "E" }
    - { level: 5, key: "E" }
    - { level: 6, key: "R" }
    - { level: 7, key: "E" }
    - { level: 8, key: "Q" }
    - { level: 9, key: "E" }
    - { level: 10, key: "Q" }
    - { level: 11, key: "R" }
    - { level: 12, key: "Q" }
    - { level: 13, key: "Q" }
    - { level: 14, key: "W" }
    - { level: 15, key: "W" }
    - { level: 16, key: "R" }
    - { level: 17, key: "W" }
    - { level: 18, key: "W" }
  core_items:
    - { dd_id: "1103", name: "Mosstomper Seedling" }
    - { dd_id: "6653", name: "Liandry's Torment" }
    - { dd_id: "3111", name: "Mercury's Treads" }
    - { dd_id: "4633", name: "Riftmaker" }
    - { dd_id: "3089", name: "Rabadon's Deathcap" }
  situational_items:
    - dd_id: "3068"
      name: "Sunfire Aegis"
      against: "对面近战 bruiser 多 (Sett, Darius, Olaf):burn aura 与 W 叠加,额外 armor 顶住前排集火"
    - dd_id: "8020"
      name: "Abyssal Mask"
      against: "对面 3 个以上 magic damage:范围魔抗削减让队友每个法术打 Curse 目标都更穿"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "对位 R 后秒你的爆发阵 (Zed, LeBlanc, Syndra):金身让你撑过集火,队友收尾"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "对位单体法术 CC 起手 (Ahri 魅惑、Lissandra R、Morgana Q):spellshield 直接吃掉对你的 engage"
  base_combo: ["Q", "R", "W", "E"]
  win_condition: "从迷雾里 Q 中关键目标,R 锁住范围内所有人,然后蹲在敌方后排上,W 持续 tick 最大生命值伤害,Tantrum 每次挨打都重置冷却。"
  weakness: "起手手段单一且冷却长。Q 没命中、或者 R 被 Cleanse Summoner 解掉就没有后续 — 直到两段技能再转好之前会被风筝 90 秒以上,毫无贡献。"
  runes:
    primary_tree: "Resolve"
    primary_tree_dd_id: 8400
    keystone:
      dd_id: 8439
      name: "Aftershock"
      icon_path: "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
    primary_slots:
      - { dd_id: 8463, name: "Font of Life", icon_path: "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png" }
      - { dd_id: 8429, name: "Conditioning", icon_path: "perk-images/Styles/Resolve/Conditioning/Conditioning.png" }
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    secondary_tree: "Sorcery"
    secondary_tree_dd_id: 8200
    secondary_slots:
      - { dd_id: 8226, name: "Manaflow Band", icon_path: "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png" }
      - { dd_id: 8210, name: "Transcendence", icon_path: "perk-images/Styles/Sorcery/Transcendence/Transcendence.png" }
    stat_shards:
      - "Adaptive Force"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["yasuo", "kennen", "katarina", "miss-fortune"]
      archetype: "群体团战阵容,带 AOE 输出"
      reason: "Amumu 的 R 一次性把扎堆的人都钉住。靠抱团打架的阵容 (Yasuo + Kennen 大招 AOE、跳目标的 Katarina、Miss Fortune Bullet Time) 一起吃一个 stun,然后被 Curse 被动放大他们自己的 AOE 伤害。"
    - examples: ["jinx", "kog-maw", "ashe", "vayne"]
      archetype: "没有自带逃生位移的脆皮 carry"
      reason: "Q 是 1100 距离的 skillshot,把 Amumu 拉到第一个命中的目标身上。没有 dash 或闪烁的 carry 上前一步补刀就被直接拽离站位。"
    - examples: ["brand", "syndra", "ryze", "viktor"]
      archetype: "靠你 engage 起飞的法术队友"
      reason: "Cursed Touch 把 magic damage 转成额外的 true damage。AP 阵容只要一个 Q-R 起手,后续每一段法术都更穿,直接秒人。"
  counterpicks:
    - examples: ["fiora", "tryndamere", "yone"]
      archetype: "带格挡、无敌或位移的高机动 bruiser"
      reason: "Fiora W 格挡 Q 的 stun 还反弹,Tryndamere R 在无敌期间无视你 W 的 dot,Yone 第三段 Q 直接位移出 Tantrum 范围。三个都能撑过 engage 然后翻盘。"
    - examples: ["xerath", "nidalee", "varus"]
      archetype: "不进场的远程炮台"
      reason: "在 Q 的 1100 距离之外就开始 poke。Amumu 想威胁开团必须主动走进他们的伤害里,Q 一旦没命中就是 25-30 秒的真空期,他们继续推线或刷资源。"
    - examples: ["ezreal", "tristana", "kalista"]
      archetype: "自带逃生手段的 marksman"
      reason: "Ezreal E、Tristana W 和 Kalista 的跳跃重置都能在 Q 命中后立刻把 carry 移出 R 范围。Curse 浪费掉了,因为 carry 在队友跟进 stun 之前就重新站好了。"
---

## 概述

Amumu 是游戏里最简单的开团型打野:走进 fog of war (盟友视野之外的迷雾区域),丢出 **Bandage Toss (Q)**,按下 **Curse of the Sad Mummy (R)**,然后让队友尽情倾泻伤害。技能组只有一个使命 — 在你想要的条件下开团 — 而且因为 1100 距离的拉拽,他比几乎所有其他开团英雄都能从更远处完成这件事。被动 **Cursed Touch** 又会放大法术队友的输出:把他们打在带 Curse 目标身上的法术伤害转成额外的真实伤害。

代价是显而易见的。**R** 的冷却高达 100-150 秒,而 **Q** 是你唯一的起手工具。一旦 miss,就要被风筝整整 90 秒,所以这份攻略的重心是 *选对开团时机*,而不是逼着自己每次都去抓人。游戏思路:刷野 → 6 级 → 接下来 25-30 分钟里把每一次 R 都换成一次击杀或资源点。

## 推荐出装

**起始装备:** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**。Hailblade 是打野起始装,能够快速对中立怪造成伤害,并对敌方英雄施加短暂的减速。Refillable Potion 是回家可免费补满的回血药,因此在 camp (你打的中立野怪小组) 之间承受的零碎伤害不需要花钱补血。

**核心装备 (按购买顺序):**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — 你最重要的一件装备。% 最大生命值的灼烧被动会与 **W** 叠加,把站在你光环里的坦克活生生烧化。每局必出。
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — 默认鞋:提供 **tenacity** (一项缩短你身上 stun 与 slow 持续时间的属性),对 R 命中后还得继续走位的开团英雄非常关键。如果敌方有 3 个以上的 AD 威胁且没有连段硬 CC,改穿 ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps**。
3. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — omnivamp (你造成的所有伤害都会回血) 加上一个进入战斗 3 秒后将部分伤害转成 true damage 的被动。和 **W** 持续输出的光环完美契合。
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — 后期 scaling 的乘数件。当 Liandry's 与 Riftmaker 都已成型,Deathcap 让 **W** 光环的伤害从"烦人"直接拉到"我没法在这里待 2 秒"。

**情境装:**

- ![Sunfire Aegis](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3068.png) **Sunfire Aegis** — 对位近战 bruiser (混合输出与抗压的近战型,如 Sett, Darius, Olaf) 较多的阵容。火焰光环与 **W** 叠加形成双重 AOE,并提供额外 armor。
- ![Abyssal Mask](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/8020.png) **Abyssal Mask** — 对面有 3 个以上 magic damage 时。降低周围敌人的魔抗,使队友打在 Curse 目标上的每一段法术伤害都更穿。
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — 对位 R 一落地就秒你的爆发阵容 (Zed, LeBlanc, Syndra)。金身 (一段 2.5 秒不能受伤也不能行动的窗口) 让你撑过集火,由队友收尾。
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — 对位长时间单体法术 CC 链 (Ahri 魅惑接全压、Lissandra R、Morgana Q)。spellshield (吸收下一发指向你法术的一次性护盾) 直接吃掉这次 engage。

**鞋子:** 默认 ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads**。只有面对没有重大 CC 链的 AD-heavy 阵容时才穿 Plated Steelcaps。

**加点顺序:** 主升 **E** (清线速度与长时间团战的输出),副升 **Q** (抓人威胁与降低 stun 冷却),最后 **W**。**R** 在 6、11、16 级各点一级。

**符文:** 主系 **Resolve**,带 **Aftershock** (Q 的 stun 或 R 命中瞬间提供 2.5 秒 armor 与魔抗加成 — 当前游戏代表性的开团符文)、**Font of Life** (你的 CC 给敌人挂标记,队友普攻时自动回血)、**Conditioning** (12 分钟后双抗加成)、**Revitalize** (你身上的护盾与回血量增强)。副系 **Sorcery**,带 **Manaflow Band** (蓝量续航 — 让你能在刷野全程开着 W) 与 **Transcendence** (额外 ability haste — 一项缩短所有技能冷却的属性)。

## 关键对线

- **Lee Sin / Elise:** 早期反野型打野,会朝你弱势侧 invade。在 raptor 与红 buff 上插 **ward** (提供约 90 秒局部视野的视野道具) 跟踪他们。3 级前避免 1v1,先做一个完整刷野 (每个 camp 都打一遍),再去拿 Scuttle (河道里死亡时给视野的螃蟹),让他们浪费时间找你。
- **Master Yi / Karthus:** scaling 型打野。在 18 分钟前主动打架与抢资源 (下半区 Drake、上半区 Rift Herald,稍后 Baron) — 你 scaling 不差,但他们更胜一筹。每一发 R 都应该奔着他们的 carry (后排负责打出大部分团队伤害的 marksman 或爆发法师) 去,而不是站前排的坦克 — 这样敌方就没有需要 peel 的目标。
- **Hecarim / Volibear:** 镜像开团,他们刷野更快。不要硬比刷野速度;围着自家上单和中单玩,4 分钟左右去找有 prio (那条线在往敌方推,因此线上英雄可以离开几秒而不掉兵) 的线抓人。
- **Maokai / Sejuani:** 同样有 AOE 开团的坦克型打野。谁先命中 R 谁就赢团。先压住 **Q**,等他们交完技能再扣下去,这样你的 stun 接在他们的 stun 之后 (敌人会被两段 stun 的总时长完全锁住)。
- **Kha'Zix / Rengar:** 切后排的刺客。优先 body-block (字面意思就是站在刺客和你方核心输出之间替队友吃伤害) 而不是站在前线 — 你的 **W** 光环加上 **E** Tantrum 会狠狠惩罚他们对身边目标的强切。

## 强势期与胜利条件

- **3 级:** 三个基础技能 (**E**、**W**、**Q**) 全部解锁,你的第一次 gank (打野突然现身路上的偷袭) 威胁正式成立。盯住敌方血量最低且我方有最强后续 CC 的那条线;在一个正在 snowball (随时间持续放大的优势 — 击杀 → 经济 → 装备 → 更多击杀) 的队友身边,一套 Q-W-AA-E (AA = 普攻) 通常就是一个人头。
- **6 级:** 第一发 **Curse of the Sad Mummy**。这是 Amumu 在游戏中最大的单次 power swing。到 6 级后的 30 秒内必须找到一个开团点 — 抓人、抢河蟹,或者准备第一条 Drake。
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment 完成 (约 12-14 分钟):** 你的 **W** 从消耗变成真正的威胁。围绕争夺中的目标开 **W**,Drake 或 Rift Herald 不需要按 **R** 也能拿下。
- **三件套节点 (约 22-26 分钟):** Liandry's + Riftmaker + Deathcap 全部成型。R 的冷却已经短到一个 Baron 周期能开两次团。这一阶段强行围绕每一个资源点打架,这是你的巅峰时段。

## 常见错误

- **没起手就把 Q 交出去。** 一发裸 Q 等于浪费唯一的开团手段。把 Q 留到敌人已经被减速、root (无法移动) 或被队友勾住为止 — 比如 Morgana Q 命中之后,你接的 Q 几乎是必中的。把 Q 当侦查用,等真正的团战来时手里就没东西了。
- **一冲到团战就按 R。** R 是 *以 Amumu 自身为中心* 的 AOE。如果在距离差 200 单位时按下,谁也 stun 不到,100-150 秒的冷却也就此白白浪费。先走进对面的后排,*然后*再按 R。
- **战斗外不关 W。** 即使周围一个敌人都没有,**Despair** 仍每秒消耗 8 蓝。这样到 8 分钟,你想趁机抓一波时连 Q 的 stun 都没蓝了。团战或刷野一结束就立刻关掉。
- **忽略 Tantrum 的冷却重置。** **E** 的被动会让它每挨一次普攻就缩短自身冷却。在面对近战的长时间团战里,你可以每隔 1-2 秒就按一次 **E** — 站在他们的攻击距离内,持续按出去。
- **R 在坦克身上而不是 carry。** R 是团战技能。是的,坦克离你近;是的,你能命中他 — 但队友想要的是把 stun 钉在 carry 头上。把 **Flash** (几乎每个英雄都会带的、约每 5 分钟一次短距离瞬移的 Summoner Spell) 留给侧翼绕后 (从侧面或后方进入战场,而不是从正面) 切到敌方后排上 engage,而不是直接 R 前排。

## 进阶技巧

在 target dummy 上练习 **Flash + Q** 连招。诀窍:先按 Q,*然后*在施放过程中朝着目标方向 Flash。Q 的拉拽动画会重新锚定到 Flash 之后的新位置,让发射的弹道直接缩短 425 单位,几乎无法躲避。这把一段 1100 距离的 skillshot 变成了贴脸保中的 stun,也是区分 Amumu 一专与一般打野的招牌操作 — 它让你能借助迷雾从侧面切进对面后排,把 Q 钉在一个根本没察觉到 engage 即将到来的移动目标上。
