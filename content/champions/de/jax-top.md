---
title: "Jax Top Build & Guide — Patch 16.9"
slug: "jax-top"
language: "de"
patch: "16.9"
champion: "jax"
role: "top"
last_updated: "2026-04-29"
description: "Jax Top Lane Guide für League of Legends Patch 16.9: Scaling-Bruiser-Build, Counter-Strike-Timing, wichtige Matchups, Power Spikes, häufige Fehler und ein abschließender Tipp."
quick_learn:
  champion_dd_id: "Jax"
  difficulty: 3
  damage_type: "mixed"
  champion_class: "Fighter / Duelist"
  abilities:
    - key: "P"
      name: "Relentless Assault"
      description: "Aufeinanderfolgende Auto-Attacks erhöhen Jax' Attack Speed schrittweise. Stacks resetten, sobald du aufhörst zu schlagen. Bleib dran, sobald du committet hast."
      dd_spell_id: "Jax_Passive"
    - key: "Q"
      name: "Leap Strike"
      description: "Gezielter Dash auf Einheit oder Ward. Trifft das Ziel einen Gegner, gibt's physischen Schaden. Wards für extra Mobility nutzen — einzige Flucht und einziger Gap-Closer."
      dd_spell_id: "JaxQ"
    - key: "W"
      name: "Empower"
      description: "Lädt die nächste Auto-Attack oder Leap Strike mit magischem Bonusschaden und kurzem Slow. Geringe Kosten, kurze Cooldown — bei jedem kurzen Trade einsetzen."
      dd_spell_id: "JaxW"
    - key: "E"
      name: "Counter Strike"
      description: "Defensive Stance: weicht bis zu 2 Sekunden allen eingehenden Auto-Attacks aus und reduziert AOE-Schaden. Recast oder auslaufen lassen stunt nahe Gegner. Kernskill."
      dd_spell_id: "JaxE"
    - key: "R"
      name: "Grandmaster's Might"
      description: "Passiv: Jede dritte Auto-Attack macht magischen Bonusschaden. Aktiv: AOE-Burst plus Armor und Magic Resist für mehrere Sekunden. Immer vor dem Fight aktivieren."
      dd_spell_id: "JaxR"
  skill_order:
    - { level: 1, key: "E" }
    - { level: 2, key: "Q" }
    - { level: 3, key: "W" }
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
    - { dd_id: "3153", name: "Blade of The Ruined King" }
    - { dd_id: "3078", name: "Trinity Force" }
    - { dd_id: "3053", name: "Sterak's Gage" }
    - { dd_id: "3091", name: "Wit's End" }
  situational_items:
    - dd_id: "3047"
      name: "Plated Steelcaps"
      against: "gegen Auto-Attack-lastige Gegner (Tryndamere, Yasuo, Kayle) — feste AA-Schadensreduktion"
    - dd_id: "3111"
      name: "Mercury's Treads"
      against: "gegen schweres CC oder AP-Schaden (Malphite R, Renekton Stun, Rumble)"
    - dd_id: "6610"
      name: "Sundered Sky"
      against: "Alternative Core gegen Poke-Lanes — garantierter Crit + Heal auf erstem Auto gegen Champion"
    - dd_id: "6333"
      name: "Death's Dance"
      against: "gegen zwei starke AD-Dealer (Yasuo + Caitlyn): Burst wird zum langsamen Bluten (verzögerter Schaden)"
  base_combo: ["E", "Q", "W", "AA", "R"]
  win_condition: "Erreiche zwei Items, dann duell jeden in einer Side Lane. Counter-Strike-Stun beim Engage, Empower auf erstem Auto, Relentless Assault stacken — splitpush, um Antwort zu erzwingen."
  weakness: "Pre-6 keine echte All-in-Window; Ranged Tops poken dich aus der Wave. Counter Strike auf Cooldown oder verfehlt = keine Defensivschicht und keine Kill-Drohung."
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
      - { dd_id: 8453, name: "Revitalize", icon_path: "perk-images/Styles/Resolve/Revitalize/Revitalize.png" }
    stat_shards:
      - "Attack Speed"
      - "Adaptive Force"
      - "Health Scaling"
matchup_draft:
  pick_into:
    - examples: ["ornn", "sion", "cho-gath"]
      archetype: "Langsame Melee-Tanks ohne Dash"
      reason: "Counter Strike stunt sie direkt vor dir und sie haben keinen Disengage; Jax stackt Relentless Assault frei, während sie kassieren, und gewinnt jeden ausgedehnten Trade ab Level 6."
    - examples: ["nasus", "garen", "darius"]
      archetype: "Kurze-Reichweite-Melee-Scaler ohne AA Cancel"
      reason: "Ihr Schaden hängt an Auto-Attacks oder kurzen Spells — Counter Strike weicht den Autos aus, der AOE-Stun beim Release neutralisiert ihren Windup."
    - examples: ["yasuo", "tryndamere", "irelia"]
      archetype: "Auto-Attack-abhängige Duellisten"
      reason: "Counter Strike frisst ihre Hauptschadensquelle 2 Sekunden lang. Mit Plated Steelcaps kippt das Matchup weiter — sie können gegen deine Stance keinen ebenen Trade fahren."
  counterpicks:
    - examples: ["teemo", "vayne", "kennen", "gnar"]
      archetype: "Ranged Tops mit Kite-Tools"
      reason: "Sie poken außerhalb der 700er-Reichweite von Leap Strike und laufen weg, sobald Counter Strike up ist. Jax hat pre-6 keinen Sustain — die Lane blutet, ohne je in All-in-Reichweite zu kommen."
    - examples: ["fiora", "camille"]
      archetype: "True-Damage-Duellisten mit Cleanse / Dash-Ketten"
      reason: "Fioras Riposte pariert den Counter-Strike-Stun; Camilles E-Hookshot lässt sie auf eigenem Timer committen und disengagen. Beide gewinnen das post-6-1v1 bei Item-Parität."
    - examples: ["malphite", "rumble"]
      archetype: "Hard-Counter-Mages gegen Melee-Bruiser (in Führung)"
      reason: "Malphite gegen Jax kippt mit seinen Items: pre-Frostfire Gauntlet verliert er, post-zweites Item schließen sein Armor-Stacking und das R-Lock-on Jax' All-in-Window."
---

## Überblick

Jax ist ein Melee-Fighter und Duellist, dessen ganze Identität "scale zum 1v1-Gott" lautet. Pre-6 hat er keinen Kill-Druck: seine Trades hängen daran, **Counter Strike (E)** zu landen, um die Auto-Attacks des Gegners zu dodgen, dann mit **Empower (W)** plus stackenden **Relentless Assault (Passiv)** Auto-Attacks zurückzuschlagen. Ab Level 6 verwandelt **Grandmaster's Might (R)** ihn in einen burstigen Bruiser, der fast jeden Melee-Top in der Side Lane solokillen kann — aber nur, wenn er heil bei zwei Items ankommt.

Der Matchplan ist geduldig und lane-aware. Last-hit safe bis Level 6, suche eine All-in-Window (ein Full-Commit-Fight, in dem du nicht abbrichst, bis jemand stirbt), wenn **Q-E-W-R** bereit ist, und wechsle in den Splitpush (eine Side Lane allein pushen, um eine Antwort des Gegners zu erzwingen), sobald **Blade of The Ruined King** online ist. In Teamfights bist du ein Flanker, der via **Leap Strike** auf einer Sekunden vorher gesetzten Ward ankommt — keine Frontline, die von vorne reinläuft.

## Empfohlener Build

**Startitems:** ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** + ![Health Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2003.png) **Health Potion**. Der Schild-Regen auf erlittenen Schaden ist die billigste Antwort auf frühen Poke. Doran's Blade nur, wenn du in einem Melee-Matchup aktiv auf Level-2-All-in spielst.

**Core Items (in Reihenfolge):**

1. ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** — dein erster Power Spike. Der On-Hit-Schaden skaliert mit gegnerischen HP, perfekt gegen Bruiser/Tank-Tops, und der aktive Slow lässt dich an Gegnern kleben, die kiten wollen (rückwärts laufen während sie schlagen, um Distanz zu halten).
2. ![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) **Trinity Force** — das zweite Item, das Jax zum Duellisten macht. Sheen-Procs (Bonusschaden auf der Auto nach einem Spell) ketten an **Q** und **W**, und das Movement Speed on-hit lässt dich durch Wände jagen.
3. ![Sterak's Gage](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3053.png) **Sterak's Gage** — Survival-Schicht. Der Schild zündet, sobald du unter ~40% HP fällst (HP-threshold passive — Passiv, das aktiviert, wenn deine HP eine niedrige Schwelle überschreiten), und gibt dir die Sekunden, die du brauchst, um **Relentless Assault** zu stacken und einen Fight zu drehen.
4. ![Wit's End](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3091.png) **Wit's End** — viertes Item gegen AP-Schaden; Magic Resist plus On-Hit-Magieschaden, der mit deiner ohnehin hohen Attack Speed skaliert.

**Situative Items:**

- ![Sundered Sky](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6610.png) **Sundered Sky** — alternative Core gegen Poke-lastige Lanes; der garantierte Crit und das Heal auf der ersten Auto gegen einen Champion geben dir Sustain (In-Fight-Regeneration), die Jax sonst fehlt.
- ![Death's Dance](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6333.png) **Death's Dance** — gegen zwei starke physische Damage Dealer (z.B. Yasuo + Caitlyn). Verwandelt physischen Burst in langsames Bluten (Schaden über mehrere Sekunden statt sofort), damit du Relentless Assault stacken kannst, bevor du stirbst.
- ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** — Schuhe gegen Auto-Attack-lastige Lanes (Tryndamere, Kayle, Vayne).
- ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — Schuhe gegen schweres CC oder AP-Burst (Malphite R, Rumble, Renekton Stun).

**Schuhe:** Default sind **Plated Steelcaps** gegen Auto-Attack-Tops; swap auf **Mercury's Treads**, wenn das Gegnerteam 2+ Hard-CC-Quellen oder starken AP-Schaden hat.

**Skill Order:** Maxe **E** (Counter Strike) zuerst — die Dodge-Window skaliert mit Rang und der Cooldown sinkt von 17 auf 9 Sekunden. **Q** (Leap Strike) zweitens für Waveclear und Gap-Close, **W** zuletzt. Punkt in **R** auf Levels 6, 11, 16.

**Runen:** Primärer Baum **Precision** mit **Conqueror**, **Triumph**, **Legend: Alacrity**, **Last Stand**. Conqueror stackt schnell auf Jax, weil die Kettenangriffe von Relentless Assault einzeln zählen. Sekundär **Resolve** mit **Bone Plating** und **Revitalize** für Überleben in frühen Trades.

## Wichtige Matchups

- **Darius:** Pre-6 ausgeglichen, scaled auf vorteilhaft. Halt **Counter Strike** für den äußeren Ring seiner **Q** (der heilende Ring der Axt). Trifft er die Heal-Zone, verlierst du den Trade; verfehlt er, stunst du ihn und ziehst mit einer **W**-empowerten Bonus-Auto ab.
- **Camille:** Ungünstige Lane. Ihr **E**-Hookshot dodget dein Stun-Timing und ihr **W**-Lifesteal sustaint durch Relentless Assault. Freeze die Wave nahe deinem Turm (Wave auf deiner Seite halten, um ihr Last-Hits zu nehmen) und warte auf Jungle-Hilfe.
- **Malphite:** Early ausgeglichen, post-6 ungünstig, sobald er Frostfire / Sunfire trifft. Versuch ein All-in auf Level 3, bevor er zwei Items hat; sobald er Armor stackt, zählt dein Magieschaden aus **W** und **R** mehr als deine physischen Autos.
- **Teemo:** Ungünstig, klassischer Ranged-Top-Counter. Kauf ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** als erstes Item, starte mit ![Doran's Shield](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1054.png) **Doran's Shield** und farme unter dem Turm, bis ![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) **Blade of The Ruined King** online ist. Kills nur suchen, wenn der gegnerische Jungler bot ist.
- **Renekton:** Ungünstig Levels 1-5, ab 6 ausgeglichen. Er out-traded dich mit **Q**-Sustain und **W**-Stun, bevor du den **R**-Spike erreichst. Spiel passiv, drop **E**, wenn er **W** committet, und freeze (Wave auf deiner Seite halten, um Last-Hits zu nehmen) die Wave nahe Turm.

## Power Spikes & Siegbedingungen

- **Level 3:** Erstes kurzes Trade-Window. Mit **E + W + Q** freigeschaltet kannst du zwei gegnerische Autos mit **E** dodgen, mit **Empower + Q** zurückschlagen und positiv rausgehen. Verlängere nicht über 3 Autos hinaus — dein Stun ist auf Cooldown.
- **Level 6:** **Grandmaster's Might** schaltet frei. Das Armor-+-MR-Aktiv macht enge All-ins vorteilhaft. Cast **R** immer vor dem Commit, nie als Finisher.
- **![Blade of The Ruined King](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3153.png) Blade of The Ruined King fertig (~ Minute 11-13):** Erster Duell-Spike. Du kannst splitpushen (eine Side Lane allein pushen, um eine Antwort des Gegners zu erzwingen) und jeden Melee-Top, der dich 1v1 fordert, ohne Jungle-Hilfe killen.
- **![Trinity Force](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3078.png) Trinity Force online (~ Minute 19-22):** Zwei-Item-Spike. Sheen-Procs gehen durch jeden Spell und du hast endlich den Burst, um Squishies im Flank one-zu-shotten.

## Häufige Fehler

- **Counter Strike auf Cooldown für Waveclear werfen.** **E** ist deine einzige Defensivschicht — sie auf Minions zu verbrennen, lässt dich offen für einen Gank ohne Flucht und ohne Stun. Nur einsetzen, wenn du traden willst oder ein Gank ansteht.
- **Den Recast für den Stun vergessen.** **Counter Strike** hat ZWEI Casts: erster geht in die Dodge-Stance, zweiter löst den AOE-Stun aus. Neue Jax-Spieler lassen ihn auto-auslaufen; der manuelle Recast lässt dich den Stun auf den exakten Frame des gegnerischen Commits timen.
- **Pre-6 gegen Bruiser all-innen.** Jax hat keinen Kill-Druck vor der **R**. Auf Level 4 gegen Darius oder Renekton zu fighten endet mit First Blood verschenkt. Stack passive XP, freeze, wenn du verlierst, und warte auf **R**.
- **Splitpush ohne TP und ohne Vision.** Sobald **Blade of The Ruined King** online ist, willst du splitpushen, aber wenn das Gegnerteam zu viert rotiert und du kein Teleport (Summoner Spell, der dich zur Basis oder zu einem Verbündeten warpt) up hast, verliert dein Team das 4v4. Check immer die Recall-Timer deines Teams, bevor du dich auf eine Side Lane committest.
- **Leap Strike auf den Gegner beim Fliehen.** **Q** kann Wards und Minions targeten. Wenn du fliehst, Q auf den hinteren Minion oder deine Trinket-Ward, nie auf den verfolgenden Gegner — das teleportiert dich zurück zu ihm.

## Fortgeschrittener Tipp

Nutze **Counter Strike** mid-Dash, um den Stun auf den Commit-Frame des Gegners zu timen, statt ihn auto-auslaufen zu lassen. Der Trick: cast **E**, lauf zum Gegner, warte, bis er seinen Schlüssel-Skillshot oder Dash wirft (Renekton **W**, Darius **W**, Camille **E**), dann recast **E** in dem Moment, in dem er in der Animation feststeckt. Der Stun erwischt ihn mid-Cast und gibt dir eine garantierte 2-Sekunden-Window, um Relentless Assault unbeantwortet zu stacken. Übe das im Practice Tool gegen einen Target Dummy mit Auto-Attacks an — du spürst den Rhythmus innerhalb von zehn Wiederholungen.
