---
title: "Amumu Jungle Build & Guide — Patch 16.9"
slug: "amumu-jungle"
language: "fr"
patch: "16.9"
champion: "amumu"
role: "jungle"
last_updated: "2026-04-29"
description: "Guide Amumu jungle pour LoL Patch 16.9 : clear path, build AP-tank (magic damage + tank stats), timing des ganks, matchups clés, setups de R et erreurs courantes."
quick_learn:
  champion_dd_id: "Amumu"
  difficulty: 2
  damage_type: "magic"
  champion_class: "Tank / Engage"
  abilities:
    - key: "P"
      name: "Cursed Touch"
      description: "Les basic attacks appliquent Curse aux ennemis. Les cibles sous Curse subissent du true damage bonus depuis tout magic damage reçu — les sorts de ton équipe frappent plus fort."
      dd_spell_id: "Amumu_Passive"
    - key: "Q"
      name: "Bandage Toss"
      description: "Skillshot linéaire longue portée qui tire Amumu sur le premier ennemi touché et le stun. Deux charges — une pour engage, une pour follow-up ou escape."
      dd_spell_id: "BandageToss"
    - key: "W"
      name: "Despair"
      description: "Aura toggle qui inflige des dégâts en % HP max aux ennemis proches chaque seconde et refresh Curse sur eux. Consomme du mana en active — coupe-la hors combat."
      dd_spell_id: "AuraofDespair"
    - key: "E"
      name: "Tantrum"
      description: "Passif : tu encaisses moins de dégâts physiques. Active : AOE courte portée. Le cooldown baisse chaque fois qu'Amumu est touché — spamme-la dans les fights longs."
      dd_spell_id: "Tantrum"
    - key: "R"
      name: "Curse of the Sad Mummy"
      description: "Énorme stun AOE qui bloque tous les ennemis autour d'Amumu et applique Curse. Le sens même du kit — chaque teamfight commence quand celle-ci touche."
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
      against: "contre comps avec beaucoup de melee bruisers (Sett, Darius, Olaf) : la burn aura stack avec W et l'armor bonus tient le focus frontline"
    - dd_id: "8020"
      name: "Abyssal Mask"
      against: "quand 3+ ennemis font du magic damage : le shred AOE de magic resist amplifie chaque sort sur les cibles sous Curse"
    - dd_id: "3157"
      name: "Zhonya's Hourglass"
      against: "contre burst comps qui te focus après ta R (Zed, LeBlanc, Syndra) : la stasis te garde en vie pendant que ton équipe finit le fight"
    - dd_id: "3102"
      name: "Banshee's Veil"
      against: "contre CC magique single-target qui ouvre les fights (Ahri charm, Lissandra R, Morgana Q) : le spellshield mange l'engage sur toi"
  base_combo: ["Q", "R", "W", "E"]
  win_condition: "Lance Q depuis le brouillard sur une cible clé, R pour bloquer tout le monde dans le rayon, puis reste sur la backline avec W qui tick du dégât % HP pendant que Tantrum reset à chaque coup encaissé."
  weakness: "Outils d'engage prévisibles avec long cooldown. Si Q rate ou si R est virée par un Cleanse Summoner, Amumu n'a aucun follow-up — il se fait kite jusqu'au retour des deux, sans rien apporter pendant 90+ secondes."
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
      archetype: "Comps de teamfight groupé avec dégâts AOE"
      reason: "La R d'Amumu attrape tout le monde sur un rayon serré. Les comps qui veulent fight regroupées (Yasuo + Kennen avec ults AOE, Katarina qui saute entre les cibles, Miss Fortune Bullet Time) prennent le stun ensemble et alimentent leur propre AOE via le passif Curse."
    - examples: ["jinx", "kog-maw", "ashe", "vayne"]
      archetype: "Carries immobiles sans escape natif"
      reason: "Q est un skillshot de 1100 de portée qui tire Amumu sur la première cible touchée. Les carries sans dash ni blink se font arracher de leur position au moment où ils avancent pour last-hit la wave."
    - examples: ["brand", "syndra", "ryze", "viktor"]
      archetype: "Coéquipiers AP qui snowball ton engage"
      reason: "Cursed Touch transforme le magic damage sur la cible en true damage bonus. Une équipe AP-heavy convertit un Q-R en kills instantanées parce que chaque sort qui suit frappe plus fort."
  counterpicks:
    - examples: ["fiora", "tryndamere", "yone"]
      archetype: "Bruisers mobiles avec parry, immunité ou dashes"
      reason: "La W de Fiora pare le stun de Q et le renvoie, la R de Tryndamere ignore les dégâts que ton W tick pendant la fenêtre unkillable, le Q3 de Yone le sort de la portée de Tantrum. Ils survivent à l'engage et retournent le fight."
    - examples: ["xerath", "nidalee", "varus"]
      archetype: "Artillerie longue portée sans engagement"
      reason: "Ils pokent au-delà des 1100 de portée de Q. Amumu doit marcher dans leurs dégâts juste pour menacer un engage, et un Q raté = 25-30 secondes libres pour eux pour continuer à push lane ou objective."
    - examples: ["ezreal", "tristana", "kalista"]
      archetype: "Marksmen avec escapes intégrés"
      reason: "Le E d'Ezreal, le W de Tristana et les hop reset de Kalista sortent tous du rayon de la R d'Amumu après que le Q a touché. Curse est gâché parce que le carry se repositionne avant que l'équipe puisse follow-up le stun."
---

## Aperçu

Amumu est le jungler d'engage le plus simple du jeu : tu marches dans le brouillard de guerre (la partie de map sans vision en dehors de la zone alliée), tu lances **Bandage Toss (Q)**, tu appuies sur **Curse of the Sad Mummy (R)** et tu laisses ton équipe lâcher tout le dégât. Son kit a un seul boulot — ouvrir le fight à tes conditions — et il le fait depuis une portée plus longue que presque tout autre engage grâce au pull de 1100 de range. Le passif **Cursed Touch** multiplie ensuite tes coéquipiers AP en transformant leurs sorts en true damage bonus sur chaque cible sous Curse.

Le prix à payer : **R** est sur 100-150s de cooldown et **Q** est ton seul outil de setup. Si tu rates, tu passes 90 secondes à te faire kite, donc ce guide est construit autour du choix du *bon fight* plutôt que de forcer chaque gank. Game plan : clear, atteindre le niveau 6, puis transformer chaque R en kill ou objective pendant les 25-30 minutes suivantes.

## Build Recommandé

**Items de départ :** ![Hailblade](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/1039.png) **Hailblade** + ![Refillable Potion](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/2031.png) **Refillable Potion**. Hailblade est le starter jungler : il te permet de damage les monstres neutres rapidement et applique un slow bref sur les champions ennemis. Refillable Potion est une potion de soin qui se recharge gratuitement à la base — tu économises de l'or sur les chip damage des camps (les groupes de monstres neutres que tu farm dans la jungle).

**Items core (dans l'ordre) :**

1. ![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) **Liandry's Torment** — l'item le plus important. Le burn passif en %HP max double avec **W** et fait fondre les tanks qui essaient de rester dans ton aura. Achète-le chaque game.
2. ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** — bottes par défaut : elles donnent de la **tenacity** (un stat qui réduit la durée des stuns et slows reçus), crucial pour un engage qui doit continuer à marcher après un R. Swap pour ![Plated Steelcaps](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3047.png) **Plated Steelcaps** si l'équipe ennemie a 3+ menaces AD et aucune chaîne de hard CC.
3. ![Riftmaker](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/4633.png) **Riftmaker** — omnivamp (tu te soignes sur tout le dégât que tu fais) plus un passif qui convertit une partie du dégât en true damage après 3 secondes en combat. Se marie parfaitement avec l'aura soutenue de **W**.
4. ![Rabadon's Deathcap](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3089.png) **Rabadon's Deathcap** — multiplicateur de scaling late-game. Avec Liandry's + Riftmaker en ligne, Deathcap pousse le dégât de l'aura **W** de "ennuyeux" à "je peux pas rester ici 2 secondes".

**Items situationnels :**

- ![Sunfire Aegis](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3068.png) **Sunfire Aegis** — contre comps avec beaucoup de melee bruisers (champions corps-à-corps qui mêlent dégât et durée, ex. Sett, Darius, Olaf). L'aura de feu s'ajoute à celle de **W** pour AOE doublé et donne de l'armor bonus.
- ![Abyssal Mask](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/8020.png) **Abyssal Mask** — quand 3+ ennemis font du magic damage. Réduit la magic resist des ennemis proches, donc chaque sort que ton équipe place sur les cibles sous Curse frappe plus fort.
- ![Zhonya's Hourglass](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3157.png) **Zhonya's Hourglass** — contre burst comps qui te focus dès que ta R touche (Zed, LeBlanc, Syndra). La stasis (une fenêtre de 2.5s pendant laquelle tu ne peux ni subir de dégât ni agir) te garde en vie pendant que ton équipe finit le fight.
- ![Banshee's Veil](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3102.png) **Banshee's Veil** — contre les chaînes de CC magique single-target longue durée (Ahri charm en all-in, Lissandra R, Morgana Q). Le spellshield (une barrière à usage unique qui bloque le prochain sort dirigé sur toi) mange l'engage.

**Bottes :** ![Mercury's Treads](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/3111.png) **Mercury's Treads** par défaut. Plated Steelcaps uniquement contre comps AD-heavy sans chaîne de CC majeure.

**Skill order :** Maxe **E** en premier (vitesse de clear et dégât en fight long), **Q** en second (gank threat et stun plus fréquent), **W** en dernier. Mets un point dans **R** aux niveaux 6, 11 et 16.

**Runes :** Primaire **Resolve** avec **Aftershock** (te donne armor et magic resist bonus pendant 2.5 secondes au moment où ton stun de Q ou ta R touche — la rune d'engage du jeu), **Font of Life** (ton CC marque les ennemis et tes alliés se soignent en les touchant), **Conditioning** (résistances bonus après la minute 12), **Revitalize** (boost les shields et soins reçus). Secondaire **Sorcery** avec **Manaflow Band** (mana sustain pour garder **W** active pendant les clears) et **Transcendence** (ability haste bonus — un stat qui réduit le cooldown de tous tes sorts).

## Matchups clés

- **Lee Sin / Elise :** Junglers early-game qui invade ton côté faible. Track-les avec des **wards** (objets de vision qui révèlent une zone pendant ~90 secondes) sur tes raptors et red buff (camps de ta propre jungle). Évite les invades 1v1 pré-3 ; fais un full clear (tuer chaque camp une fois), puis va sur le Scuttle (le crabe de la rivière qui donne de la vision en mourant) pour qu'ils perdent du tempo à te chercher.
- **Master Yi / Karthus :** Junglers de scaling. Force fights et objectives (Drake côté bot, Rift Herald côté top, Baron plus tard) avant la minute 18 — tu scales bien, eux scalent mieux. Chaque R doit viser leur carry (le marksman ou burst mage qui fait l'essentiel des dégâts depuis la backline), pas leur tank de devant, pour que l'équipe ennemie n'ait rien à peel.
- **Hecarim / Volibear :** Engage miroir, clear plus rapide. N'essaie pas de les outclear ; joue autour de tes laners et cherche un gank sur une lane avec prio (prio = la lane qui push vers l'ennemi, donc le laner peut partir quelques secondes sans perdre de minions) vers la minute 4.
- **Maokai / Sejuani :** Tank junglers avec leur propre engage AOE. Celui qui touche sa R en premier gagne le teamfight. Garde **Q** pour après leur commit pour que ton stun chaîne sur le leur (l'ennemi reste bloqué pendant la durée totale des deux stuns additionnés).
- **Kha'Zix / Rengar :** Assassins qui burst ta backline. Body-block pour tes carries (place-toi littéralement entre l'assassin et ton damage dealer pour absorber les coups) au lieu de te tenir devant l'équipe ennemie — ton aura **W** plus le **E** Tantrum les punissent quand ils commit sur une cible à côté de toi.

## Power spikes & conditions de victoire

- **Niveau 3 :** Avec **E**, **W** et **Q** débloqués, ta première menace de gank (la visite surprise du jungler dans une lane pour faire une kill) est réelle. Cherche la lane avec l'ennemi le plus bas en HP et le follow-up CC le plus fort allié ; une rotation Q-W-AA-E (AA = auto-attack) sous un allié qui snowball (un avantage qui grandit dans le temps : kill → gold → item → encore kill) est généralement une kill.
- **Niveau 6 :** Premier **Curse of the Sad Mummy**. C'est le plus gros power swing du jeu pour Amumu. Trouve un fight dans les 30 secondes après avoir hit 6 — gank une lane, contest le Scuttle ou pose le premier Drake.
- **![Liandry's Torment](https://ddragon.leagueoflegends.com/cdn/16.9.1/img/item/6653.png) Liandry's Torment terminé (~ minute 12-14) :** Ton **W** passe de poke à vraie menace. Fight pour Drake ou Rift Herald avec **W** qui tick sur la cible contestée gagne l'objective sans même appuyer sur **R**.
- **Spike 3 items (~ minute 22-26) :** Liandry's + Riftmaker + Deathcap en ligne. Le cooldown de R est court à un point que tu peux teamfight deux fois par timer Baron. Force chaque objective ; c'est ton pic.

## Erreurs courantes

- **Lancer Q en cooldown sans setup.** Une Q nue gâche ton seul outil d'engage. Garde Q tant que l'ennemi n'est pas déjà slowed, root (immobilisé) ou hook par un allié — ex. Q de Morgana qui touche → ta Q derrière est garantie. Q utilisée en outil de scouting = rien dans les mains quand le vrai fight arrive.
- **Appuyer R dès que tu arrives au fight.** R est AOE *centrée sur Amumu*. Si tu l'appuies 200 unités trop tôt, tu stunes personne et gâches le cooldown 100-150s. Marche jusqu'à être dans leur backline, *puis* R.
- **Laisser W active hors combat.** **Despair** consomme 8 mana par seconde quand active, même sans ennemis proches. Tu arriveras à minute 8 sans mana pour un stun de Q sur un gank propre. Coupe-la dès que le fight ou le clear se finit.
- **Ignorer le reset de cooldown de Tantrum.** Le passif de **E** baisse son propre cooldown chaque fois que tu prends une basic attack. Dans un fight long contre des melee, tu peux appuyer **E** toutes les 1-2 secondes — reste dans leur portée d'attaque et continue à spammer.
- **R sur un tank au lieu du carry.** R est une ability de teamfight. Oui le tank est plus proche, oui tu vas le toucher — mais ton équipe veut le stun sur le carry. Garde **Flash** (le Summoner Spell que chaque champion prend, qui te téléporte sur courte distance une fois toutes les ~5 minutes) pour flank autour du fight (entrer par un côté ou par derrière, pas de face) et engage sur la backline, pas sur le tank de devant.

## Conseil avancé

Entraîne le combo **Flash + Q** sur un target dummy. Le truc : cast Q en premier, *puis* Flash en plein cast vers la direction de la cible. L'animation de pull de Q se réaccroche à ta position post-Flash, donnant un projectile 425 unités plus court qui est presque impossible à dodge. Ça transforme Q de skillshot 1100 de portée en stun garanti à bout portant, et c'est le play qui sépare les Amumu mains des one-tricks : ça te permet de flank dans une backline à travers le brouillard et de connecter Q sur une cible mobile qui n'a jamais vu l'engage venir.
