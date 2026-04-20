import type { BlogPost } from './types';
import { newEnPosts } from './en-new-posts';

export const enPosts: BlogPost[] = [
  {
    slug: 'how-ai-coaching-helps-you-learn-league',
    title: 'How AI Coaching Helps You Learn League of Legends',
    excerpt:
      'Static guides tell you what to do. AI coaching teaches you why. Discover how personalized, real-time coaching accelerates your League of Legends learning curve.',
    date: '2026-04-01',
    dateModified: '2026-04-20',
    author: 'LoL Sensei Team',
    tags: ['ai-coaching', 'learning', 'guide'],
    readingTime: 10,
    content: `
<p>Every League of Legends player hits the same wall eventually. You watch a guide, copy the recommended build, follow the "correct" rune page, and still lose. The concept of an <strong>AI coach for League of Legends</strong> exists to solve exactly this problem. Static guides cannot adapt to the reality of your game. They assume a vacuum where the enemy team composition, your teammates' picks, and the current patch meta do not matter. But those things always matter, and learning to account for them is how you actually learn League of Legends at a meaningful level.</p>

<h2>The Difference Between Information and Understanding</h2>

<p>A tier list tells you that Jinx is S-tier this patch. But it does not tell you whether Jinx is the right pick when your team already has three squishy champions and the enemy locked in Zed and Vi. A build guide tells you to rush Infinity Edge, but it does not tell you that the enemy Rammus just bought Thornmail at 12 minutes and you need to rethink your damage approach.</p>

<p>This is where AI coaching changes the equation. Instead of giving you a single answer that assumes a perfect scenario, an AI coach reads the actual state of your game and explains what is happening and why certain decisions make sense in that specific context. The distinction matters because League of Legends is a game of decisions, not mechanics alone. Two players with identical mechanical skill will have wildly different results depending on how well they read the game and adapt their choices.</p>

<h2>Personalized Learning at Every Skill Level</h2>

<p>One of the biggest challenges in learning League is that advice designed for Diamond players can actively hurt you in Silver. Concepts like wave management, roam timing, and objective trading have different priorities depending on the level of coordination you can expect from your teammates and opponents.</p>

<p>An AI coach adapts its guidance to where you actually are. If you are still learning the basics of <a href="/en/blog/understanding-champion-select">champion select</a>, it focuses on simple team composition principles — do you have enough damage types, do you have engage, do you have waveclear. As you improve, the coaching deepens into counter-pick nuances, draft phase strategy, and synergy optimization. This scaling is important because a Silver player does not need to hear about jungle tracking patterns — they need to understand why picking a second assassin when the team has no frontline leads to a predictable loss pattern.</p>

<h2>Real-Time Context Changes Everything</h2>

<p>The most valuable coaching happens in the moment. When you are sitting in champion select and need to understand why your teammate's Malphite pick changes your team's win condition from split-pushing to teamfighting, that is when the lesson sticks. When you can see in real-time how the enemy team's composition creates a specific threat pattern and how your item build should respond, you are building intuition — not just following instructions.</p>

<p>This is fundamentally different from watching a 30-minute video after the fact. In-the-moment coaching means you process the lesson while the context is fresh and the decision is real. Over time, you start making these reads yourself because the reasoning was tied to an experience you lived through, not a lecture you passively consumed.</p>

<h2>How AI Coaching Works in Practice</h2>

<p>To make this concrete, imagine you are in champion select for a ranked game. Your team has Malphite top and Lee Sin jungle. You are picking mid. A static tier list might tell you to play whatever has the highest win rate this patch — maybe Ahri or Syndra. But an AI coach reads the draft differently.</p>

<p><strong>Malphite's ultimate, Unstoppable Force, is one of the most powerful engage tools in the game.</strong> It groups enemies together in a small area. Lee Sin provides early game pressure and can kick a priority target back into your team. The AI coach sees this pattern and recognizes that your team's win condition revolves around a teamfight combo: Malphite ults in, grouping two or three enemies, and your team follows up with area-of-effect damage.</p>

<p>In this scenario, the AI recommends Orianna. Why? Because Orianna can place her ball on Malphite before he ults. When Malphite dives into the enemy team, Orianna's Command: Shockwave detonates on top of the grouped enemies, creating a devastating combo that can win a teamfight in two seconds. The AI explains this interaction, tells you why it matters, and helps you understand the broader principle: <strong>pick champions whose abilities amplify your team's existing strengths</strong>.</p>

<p>This reasoning applies far beyond Malphite-Orianna. The same principle drives Yasuo picks with knockup-heavy teams, Miss Fortune picks with Amumu or Leona, and Kog'Maw picks with Lulu support. Once you understand the logic, you start seeing these patterns yourself. That is the difference between AI coaching and a static recommendation.</p>

<p>Now consider a different scenario. The enemy team has already picked Zed mid and Kha'Zix jungle — two AD assassins who want to pick off isolated targets. Your team has Jinx ADC and Lux support. A tier list might recommend you play whatever top lane champion has the highest win rate. An AI coach, however, recognizes the threat pattern: your team's backline is extremely vulnerable to assassination. It recommends Maokai or Nautilus top — champions with targeted crowd control who can peel assassins off your carries. The AI explains that in this game, your job is not to carry through damage but to keep Jinx alive long enough for her to deal sustained damage in teamfights. This shifts your entire understanding of what "winning top lane" means in this specific game.</p>

<p>These two scenarios illustrate a fundamental truth about League of Legends coaching: <strong>the right answer changes every game, and understanding why it changes is more valuable than memorizing any single answer</strong>. AI coaching makes this kind of contextual reasoning accessible to players at every level, not just those who have already played thousands of games.</p>

<h2>The Science of Contextual Learning</h2>

<p>There is a reason why in-the-moment coaching produces faster improvement than post-game VOD reviews. Cognitive science calls it <strong>contextual encoding</strong> — when you learn something while actively engaged in the task, the lesson is encoded alongside the sensory and emotional context of the experience. You remember not just the fact but the situation in which you learned it.</p>

<p>When a coach explains during champion select that your team lacks magic damage and you should consider picking an AP champion, you process that lesson while looking at the actual draft, feeling the pressure of the timer, and making a real decision. Compare that to watching a video where someone explains damage type balance in the abstract. The video version is informative, but it does not create the same neural pathways because you were not making a decision when you heard it.</p>

<p>This also connects to spaced repetition — one of the most effective learning techniques known. Because every game presents a slightly different draft scenario, you encounter damage balance decisions, engage-or-disengage questions, and synergy opportunities repeatedly but in varied contexts. Each repetition reinforces the principle while expanding your ability to apply it flexibly. Over fifty games, you do not just learn the rule — you develop an instinct for it.</p>

<h2>Common Misconceptions About AI Coaching</h2>

<p>Players new to AI coaching often have reasonable concerns. Addressing them honestly matters.</p>

<p><strong>"Will the AI play for me?"</strong> No. An AI coach explains reasoning and presents options — you make every decision. It might tell you that Orianna pairs well with your team's Malphite, but you still choose your champion, still play the lane, still execute the combos. The AI provides analysis. The gameplay is entirely yours.</p>

<p><strong>"Is this cheating?"</strong> No. Riot Games allows third-party tools that do not interact with the game client directly. AI coaching tools that analyze draft and provide recommendations operate in the same category as tier list websites, build guides, and stat-tracking apps. They provide information and analysis — they do not inject inputs into the game or automate gameplay. If you have ever checked stat tracking tools or tier list websites before a game, you have used third-party tools in the same spirit.</p>

<p><strong>"Will I become dependent on it?"</strong> A well-designed AI coach aims to make itself unnecessary over time. Every explanation is teaching you a principle you will internalize. After hearing "your team needs AP damage" in fifteen different drafts, you start checking damage balance automatically. After seeing <a href="/en/blog/why-copying-builds-doesnt-help">why copying builds does not work</a> in specific matchups, you begin adapting your items without prompting. The goal is not dependency — it is accelerated learning that leads to independence.</p>

<h2>Building Game Sense, Not Dependency</h2>

<p>The goal of good coaching is to make itself unnecessary. A well-designed AI coach does not just tell you "pick this champion" or "build this item." It explains the reasoning chain: your team needs magic damage because the enemy is stacking armor, and among your champion pool, Syndra offers both burst and zone control that pairs well with your Jarvan jungle. When you hear that reasoning twenty times in different contexts, you start running the logic yourself.</p>

<p>The capabilities described throughout this article come together into a clear set of things a good AI coach should do for you:</p>

<ul>
  <li><strong>Champion select and draft analysis</strong> — reading your team's composition and the enemy's win condition in real time as picks and bans happen, not after the game is over.</li>
  <li><strong>Build and item reasoning</strong> — explaining why a build path fits the specific matchup instead of handing you a static item list to copy.</li>
  <li><strong>Counter-pick and matchup guidance</strong> — identifying threats in the enemy draft and suggesting champions whose abilities amplify your team's strengths.</li>
  <li><strong>Skill-level adaptation and mental coaching</strong> — scaling explanations to where you actually are so the advice is useful instead of overwhelming, and keeping the focus on long-term learning rather than quick fixes.</li>
</ul>

<p>This is the core philosophy behind LoL Sensei. Every recommendation comes with an explanation. Every explanation builds a small piece of your game knowledge. Over weeks and months, those pieces compound into genuine game sense — the ability to read a draft, understand a matchup, and adapt a build without needing anyone to tell you what to do. If you want to see how this compares to other tools in the space, you can read our <a href="/en/blog/best-lol-ai-coach-2026">comparison of AI coaching tools for 2026</a>.</p>

<h2>Getting Started</h2>

<p>If you have been stuck at the same rank or feel like you are improving slowly despite consuming guides and tier lists, the issue might not be effort — it might be the format. AI coaching offers something static content never can: a personalized teacher that meets you exactly where you are, in the exact game you are playing, right when the decision matters most. The players who climb fastest are not always the most mechanically gifted — they are the ones who develop game sense fastest, and that is what contextual, in-the-moment coaching is designed to accelerate.</p>

<p>Start by paying attention to the decisions you currently make on autopilot. Do you always pick the same champion regardless of your team composition? Do you build the same items every game without checking what the enemy team is doing? Do you ban the same champion out of habit rather than strategic thinking? These are the exact areas where AI coaching creates the most immediate impact — not by replacing your decisions, but by making you aware of the reasoning you are currently skipping. The difference between a Gold player and a Platinum player is rarely mechanics. It is almost always decision-making, and decision-making is exactly what coaching improves. Every game is a chance to learn something new about the way League of Legends works — if you have the right framework to process what you are seeing.</p>
`,
  },
  {
    slug: 'understanding-champion-select',
    title: "Understanding Champion Select: A Beginner's Guide",
    excerpt:
      'Champion select is where games are won and lost before they even start. Learn the fundamentals of team composition, synergy, and smart picking.',
    date: '2026-04-05',
    dateModified: '2026-04-20',
    author: 'LoL Sensei Team',
    tags: ['champion-select', 'beginners', 'guide'],
    readingTime: 10,
    content: `
<p>For many new League of Legends players, champion select feels like a rushed countdown where you scramble to lock in your favorite champion before the timer runs out. But <strong>champion select strategy</strong> is arguably the most important skill in the entire game. Understanding how to draft in LoL — reading your team's needs, identifying the enemy's win condition, and picking a champion that fits the puzzle — sets the foundation for everything that follows. A strong draft does not guarantee a win, but a poor draft can make winning dramatically harder.</p>

<h2>What Is Actually Happening in Champion Select</h2>

<p>Champion select is a negotiation — between you and your teammates, and between your team and the enemy team. Each pick and ban shapes the game's possibilities. When the enemy locks in a heavy engage composition with Malphite and Leona, your team's options shift. When your jungler picks an early-game champion like Lee Sin, your team's clock starts ticking differently than if they picked a scaling jungler like Karthus.</p>

<p>Understanding this dynamic is the first step to improving your draft. You do not need to memorize every matchup. You need to understand the basic questions: what does my team want to do, and does my pick help us do it? If you approach champion select with this mindset, you will make better decisions than the majority of players who simply lock in whatever they feel like playing.</p>

<h2>The Three Pillars of Team Composition</h2>

<p><strong>Damage balance</strong> is the most straightforward concept. If all five members of your team deal physical damage, the enemy can stack armor and neutralize your entire team with a single stat. Having a mix of physical and magic damage forces the enemy into harder itemization choices. Before you lock in, glance at your team's damage types. If three teammates are all AD, consider whether you can fill the AP gap.</p>

<p><strong>Engage and disengage</strong> determine how fights start and end. A team with no way to start fights has to wait for the enemy to make a mistake, which is unreliable. A team with no way to peel — protecting carries from divers — will watch their damage dealers get eliminated first in every fight. Ask yourself: can our team start a fight if we need to, and can we protect our carries?</p>

<p><strong>Win condition clarity</strong> is about knowing how your team wants to win. Some compositions want to group and teamfight. Others want to split-push and create map pressure. Some want to end the game early before the enemy scales. If your composition has no clear plan, you will spend the mid-game wandering the map without direction. When you pick your champion, think about what the team's plan is and whether your pick supports it.</p>

<h2>Synergy Over Individual Strength</h2>

<p>It is tempting to always pick the highest win-rate champion in your role. But a champion's strength depends on the context around it. Yasuo is a powerful champion, but his value increases dramatically when paired with teammates who have knockups — Malphite, Diana, Gragas. Miss Fortune's ultimate becomes far more devastating when combined with crowd control that keeps enemies in one place, like Amumu's Curse of the Sad Mummy or Leona's Solar Flare.</p>

<p>Look at what your teammates have already picked. Are there natural combos? Does your champion pool contain something that amplifies what your team already has? Picking a champion that fits the puzzle is often more valuable than picking the statistically strongest option in isolation. This is a concept that <a href="/en/blog/how-ai-coaching-helps-you-learn-league">AI coaching tools</a> can help you recognize in real-time during draft.</p>

<h2>Common Champion Select Mistakes</h2>

<p>Understanding what not to do in champion select is just as important as knowing what to do. These mistakes are common across every rank, from Iron to Diamond.</p>

<p><strong>First-picking a counter-vulnerable champion</strong> is one of the most frequent errors. Champions like Katarina, Yasuo, and Yone are powerful when they get favorable matchups, but they have long lists of hard counters. First-picking Katarina tells the enemy mid laner exactly what they are facing, allowing them to select Galio, Kassadin, or Diana to shut you down. The earlier you pick in the draft, the safer your champion choice should be.</p>

<p><strong>Ignoring team damage type balance</strong> costs games silently. When your top laner locks Zed, your jungler picks Kha'Zix, and your ADC is Draven, your team is almost entirely physical damage. If you then pick Talon mid, the enemy support can build a single Frozen Heart or Randuin's Omen and drastically reduce your entire team's effectiveness. This is a problem that shows up less in the scoreboard and more in the feeling that your damage "does nothing" in teamfights — the enemy is simply stacking one resistance stat and it works against everyone.</p>

<p><strong>Picking only for lane without considering teamfight role</strong> is a trap that solo queue players fall into constantly. You might win lane with Fiora top, but if your team has no frontline and the enemy has a Jinx who can free-fire in teamfights, your split-push pressure might not be enough. Sometimes the team needs a Malphite or an Ornn more than it needs a lane bully.</p>

<p><strong>Refusing to play supportive champions when the team needs them</strong> is an ego problem disguised as a champion preference. If your team already has two carries and needs a tank or utility champion, insisting on picking a third carry because "I need to carry" often results in a team that cannot function in fights. Flexibility in champion pool wins more games than mechanical mastery of a single carry.</p>

<h2>How Draft Order Affects Your Pick</h2>

<p>The order in which you pick matters more than most players realize. Draft order is a strategic resource, and using it well gives your team a meaningful advantage before the game even starts.</p>

<p><strong>First pick means you should choose safe, low-counterpick champions.</strong> These are champions that perform reasonably well into almost any matchup. Orianna mid is a classic first-pick choice — she has no truly terrible matchups, scales well, and provides utility regardless of the game state. Ezreal bot lane, Nautilus support, and Gragas jungle are other strong first-pick options because they are difficult to counter and flexible in their role within a team composition.</p>

<p><strong>Mid-draft picks should be flexible champions that do not reveal your win condition.</strong> If you pick in the middle of the draft, you have some information about the enemy team but they also have information about yours. Champions that can be played in multiple ways — like Gragas, who can be built full AP or tanky depending on the game — are valuable here because they do not commit your team to a single strategy.</p>

<p><strong>Last pick is for counter matchups and niche picks.</strong> If you are picking last, you know the entire enemy team composition. This is the time to pull out specialists. If the enemy picked Zed mid, last-picking Malzahar shuts him down with point-and-click crowd control. If the enemy has a full melee team, last-picking Vayne or Kog'Maw with a Lulu support creates a nearly unbeatable backline. Last pick is where you gain the most by understanding matchups deeply.</p>

<p>The table below summarizes how draft position changes the archetype of pick you should prioritize, the typical strategy that position unlocks, and the most common mistake players make from that slot. Riot's own pick/ban design notes frame last pick as the slot with the most information leverage and first pick as the slot most exposed to being targeted — the guidance below follows that framing rather than claiming role-level outcome percentages, since Riot does not publish per-role win-rate splits by draft order.</p>

<div class="overflow-x-auto">
  <table>
    <caption>How draft position shapes your pick, strategy, and common mistakes</caption>
    <thead>
      <tr>
        <th scope="col">Draft position</th>
        <th scope="col">Recommended pick archetype</th>
        <th scope="col">Typical strategy &amp; information leverage</th>
        <th scope="col">Common mistake to avoid</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">First pick</th>
        <td>Safe, low-counterpick, flexible (e.g. Orianna mid, Ezreal bot, Nautilus support, Gragas jungle)</td>
        <td>You reveal information with zero information in return, so you lock a champion that performs reasonably into almost any matchup and doesn't commit your team to a single win condition.<!-- source: nexus.leagueoflegends.com/en-us/2017/05/dev-10-bans-arrives/ — Riot /dev: On Launching 10 Bans, 2017-05-26, discusses how pick/ban power shifts with order --></td>
        <td>First-picking a counter-vulnerable champion like Katarina, Yasuo, or Yone — it tells the enemy exactly which counters to reach for.</td>
      </tr>
      <tr>
        <th scope="row">Mid-draft</th>
        <td>Flexible kit that hides win condition (e.g. Gragas played full AP or tanky, other dual-role picks)</td>
        <td>You have partial information on both teams, so flex picks keep the enemy guessing about your role and composition until later rotations.<!-- source: leagueoflegends.com/en-us/news/dev/matchmaking-and-champion-select-fall-2022/ — Riot /dev article on champ select discusses flex picks as a strategic tool for delaying role commitment --></td>
        <td>Over-committing to a single win condition or mirroring the enemy archetype instead of covering a gap in your own composition.</td>
      </tr>
      <tr>
        <th scope="row">Last pick</th>
        <td>Counter matchup or specialist (e.g. Malzahar vs Zed, Vayne or Kog'Maw with Lulu vs full-melee teams)</td>
        <td>You know the full enemy composition, so you use that information to pick a matchup-specific answer or a specialist whose value depends on what the enemy drafted.<!-- source: leagueoflegends.com/en-us/news/fearless-draft-takes-over-2025/ — Riot 2025-03-16, notes that counter-picking and champion-pool depth are the core levers in draft, especially under Fearless rules --></td>
        <td>Ignoring the counter advantage and locking your comfort pick anyway — last pick's edge disappears if you don't react to what the enemy has shown you.</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>Reading the Enemy Draft</h2>

<p>Draft analysis is not just about your team — it is about reading what the enemy wants to do and deciding whether you can counter it or need to outexecute it.</p>

<p><strong>If the enemy drafts Malphite, Leona, and Miss Fortune, their plan is obvious: wombo-combo teamfighting.</strong> Malphite ults to engage and group enemies, Leona follows with Zenith Blade and Solar Flare for extended crowd control, and Miss Fortune channels Bullet Time into the locked-down cluster. Against this composition, you should either pick champions with strong disengage — Janna, Gragas, Alistar — or pick a split-push composition that avoids grouping entirely. Fighting five-versus-five into their strength is exactly what they want.</p>

<p><strong>If the enemy drafts Fiora top and Nidalee jungle, they want to split-push and skirmish.</strong> Fiora is one of the strongest duelists in the game and excels in side lanes. Nidalee is an early-game jungler who wants to invade, get picks, and create small fights. Against this, you want a team that can force five-versus-four fights when Fiora is split-pushing, and champions with hard engage to turn skirmishes into full teamfights where numbers matter more than individual outplay.</p>

<p><strong>If the enemy picks Kog'Maw with Lulu support, they are building around a hyper-carry.</strong> Kog'Maw is weak early but becomes one of the highest sustained-damage champions in the late game. Lulu's shields, speed boosts, and ultimate keep him alive. Your team needs to either end the game before Kog'Maw scales or draft assassins and divers who can reach and kill him despite Lulu's protection — champions like Zed, Nocturne, or Vi.</p>

<p>Learning to identify enemy win conditions from their picks is a skill that <a href="/en/blog/how-to-climb-ranked-lol">separates players who climb in ranked</a> from those who stay stuck at the same rank despite strong mechanics.</p>

<h2>Banning With Purpose</h2>

<p>Many players ban the champion they most recently lost to, regardless of whether that champion is actually a threat in the current meta or against their specific pick. More effective banning considers what your team is vulnerable to. If your team is picking a lot of immobile mages, banning a high-mobility assassin like Zed or Katarina removes a specific threat to your composition.</p>

<p>If you are not sure what to ban, a safe approach is banning champions that are both popular and strong in the current patch — they are likely to appear and likely to create problems. You can also target ban champions that counter your intended pick if you are confident in your champion choice. Understanding <a href="/en/blog/why-copying-builds-doesnt-help">why certain itemization paths exist</a> also helps you evaluate which enemy champions create the most problems for your build path.</p>

<h2>Practice Reading the Draft</h2>

<p>You do not need to become a professional analyst overnight. Start with one question each game: "What does our team want to do, and does my pick help?" Over time, add more layers — checking damage types, looking for synergies, thinking about what the enemy composition wants to accomplish and whether you can disrupt it. Champion select is a skill, and like every skill in League, it improves with deliberate practice. The players who treat draft as an afterthought are leaving wins on the table before minions even spawn.</p>
`,
  },
  {
    slug: 'why-copying-builds-doesnt-help',
    title: "Why Copying Builds Doesn't Make You Better",
    excerpt:
      'Following a build guide is easy. Understanding why each item matters is what separates players who improve from players who plateau.',
    date: '2026-04-08',
    dateModified: '2026-04-20',
    author: 'LoL Sensei Team',
    tags: ['builds', 'learning', 'improvement'],
    readingTime: 10,
    content: `
<p>Open any League of Legends resource and you will find recommended builds for every champion. First item, second item, boots, situational options — the full shopping list is right there. If you want to understand <strong>how to build items in LoL</strong> at a deeper level, you need to move beyond copy-pasting these lists. Millions of players follow static builds every day, and millions of players stay stuck at the same rank, wondering why their items do not seem to work as well as they do in the guides. The reason is simple: builds are answers to questions that change every game, and if you do not understand the questions, the answers will often be wrong.</p>

<h2>Builds Are Answers to Questions You Are Not Asking</h2>

<p>Every item in League exists to solve a problem. Zhonya's Hourglass is not just "a good item for mages." It is the answer to a specific question: "How do I survive the burst window of the enemy assassin while still contributing damage?" When you build it because a guide told you to, without understanding the question it answers, you lose the ability to adapt when the question changes.</p>

<p>What if the enemy team has no burst threat? What if you are so far ahead that investing in pure damage would end the game faster? What if the enemy Zed is 0/5 and the real threat is the fed Kog'Maw? The guide cannot account for your specific game. Only your understanding can.</p>

<h2>Red Flags: When Copying a Build Is Actively Hurting You</h2>

<p>Before we dig into specific scenarios, here is a simple ordered checklist of the recurring signs that your copy-pasted build is actively costing you games. If any of these apply to your last match, the build — not your mechanics — is probably the problem.</p>

<ol>
  <li><strong>You are ignoring the specific matchup.</strong> The recommended first item was balanced against an average enemy, but in your game the enemy is stacking a single resistance (double armor tanks, heavy MR frontlines) and your damage is being neutralized by one stat.</li>
  <li><strong>You are ignoring the enemy team composition.</strong> You are buying damage into heavy healing without Grievous Wounds, or stacking offense into a fed assassin threat without a single defensive component.</li>
  <li><strong>You are using outdated or aggregate-only data.</strong> The build path that wins 53% of games overall flattens every context that makes your game unique — patch changes, team synergy, draft order — and the "highest win-rate" item is often wrong in a meaningful fraction of those games.</li>
  <li><strong>You are ignoring item spikes and recall timings.</strong> You back with odd gold amounts and buy components that do not give passives, instead of waiting a little longer for a completed item or efficient breakpoint. The build guide never tells you about these windows.</li>
  <li><strong>You are not adapting the build to your elo.</strong> Raw damage that dominates in low elo can be less effective in higher elo where coordinated peel rewards utility and cooldown reduction — and vice versa. The "correct" build depends on the level of play around you.</li>
</ol>

<h2>The Problem With Static Recommendations</h2>

<p>Build guides are typically based on aggregate data — what items have the highest win rates across thousands of games. This data is useful as a starting point, but it flattens all the context that makes each game unique. The most-built item path might win 53% of games overall, but it might be the wrong choice in 40% of those games where a different build would have won more decisively or prevented a loss.</p>

<p>Consider this scenario: you are playing Jinx and the recommended first item is Infinity Edge. But the enemy has a Rammus jungle and a Malphite top. Both are building armor early. In this game, building a Lord Dominik's Regards earlier than usual — or even considering an alternative damage approach — could be significantly more effective than blindly following the standard path. Understanding <a href="/en/blog/understanding-champion-select">champion select and team composition</a> is the first step toward recognizing these situations before the game even starts.</p>

<h2>When the Default Build Is Wrong: Real Examples</h2>

<p>Theory is useful, but concrete examples make the concept stick. Here are situations where the highest-win-rate build is actively the wrong choice.</p>

<p><strong>Jinx against Rammus and Malphite — double armor tank compositions.</strong> The standard Jinx build path prioritizes Infinity Edge as a first item for maximum critical strike damage. But when the enemy team has two champions stacking armor from early game, your critical strikes are hitting into 200+ armor by the midgame. In this specific scenario, building Lord Dominik's Regards as a second item — or even rushing it first in extreme cases — gives you far more effective damage than following the standard crit-focused path. The item's armor penetration percentage converts your auto-attacks from tickling tanks to actually threatening them.</p>

<p><strong>Support choosing between Moonstone Renewer and Locket of the Iron Solari.</strong> Many support players default to whatever item has the higher win rate on their champion page. But the correct choice depends entirely on your team composition. If your team has a strong frontline — Ornn top, Sejuani jungle — your carries are relatively safe, and Moonstone Renewer's sustained healing keeps your frontline alive through extended fights. If your team has no frontline and the enemy has burst damage — Zed, Rengar, LeBlanc — Locket's active shield can be the difference between your carry surviving the initial burst or dying before they contribute.</p>

<p><strong>Mid-laner building Morellonomicon against heavy healing compositions.</strong> The standard build for many AP mid laners does not include early Grievous Wounds. But when the enemy team has Soraka support, Aatrox top, and a jungler running Conqueror, the combined healing in teamfights can be overwhelming. Building Oblivion Orb early — even before completing your mythic item — reduces enemy healing by 40% and can swing teamfights that your team would otherwise lose despite having a gold lead. The aggregate build data does not tell you this because Soraka-Aatrox compositions do not appear in every game.</p>

<h2>Learning the "Why" Behind Item Choices</h2>

<p>The players who climb consistently are not the ones with the best build pages bookmarked. They are the ones who understand why items are built. They know that Armor Penetration becomes more valuable as the enemy stacks armor. They understand that Grievous Wounds is a priority when the enemy team has heavy healing. They recognize when a defensive item is worth more than a damage item because staying alive for five extra seconds means two more auto-attacks in a teamfight.</p>

<p>This understanding does not come from memorizing builds. It comes from learning the reasoning process and applying it game after game in different contexts. This is the same principle behind <a href="/en/blog/how-ai-coaching-helps-you-learn-league">AI coaching for League of Legends</a> — teaching the reasoning, not just the answer.</p>

<h2>The Item Spike Concept</h2>

<p><strong>Power spikes in League of Legends are directly tied to item completion, not total gold spent.</strong> This is one of the most important and least understood concepts in item building. A completed item gives a significantly bigger power spike than having components of two different items, even if the total gold spent is the same.</p>

<p>For example, imagine you are playing Kai'Sa and you have 3400 gold. You could buy a completed Kraken Slayer, or you could buy a B.F. Sword (1300g) plus a Pickaxe (875g) plus Berserker's Greaves (1100g). The total gold is similar, but the Kraken Slayer gives you its passive on-hit damage, which dramatically increases your trading and all-in power. The components without the completed item give you raw stats but no passive effect — you are paying for parts without getting the assembled machine.</p>

<p><strong>This affects recall timing decisions directly.</strong> If you have 1100 gold on a recall, you might be able to buy a component. But if you can stay on the map for 200 more gold and buy a more efficient component — or complete an item — the timing advantage in the next fight could be enormous. Strong players track their gold relative to their item breakpoints. They know that backing with 1300 gold for a B.F. Sword is often better than backing with 1000 gold for two Long Swords, even though both contribute to the same final item.</p>

<p>Item spike awareness also affects objective control. If you just completed your first item and the enemy ADC is still 500 gold away from theirs, that is the window to force a Dragon fight. You have a meaningful power advantage that disappears once they complete their item. The build guide does not tell you about these windows — understanding item spikes does.</p>

<h2>Context-Aware Building</h2>

<p>Effective building is a conversation between your champion, your gold, and the game state. Here are the questions strong players ask themselves on every recall:</p>

<p><strong>What is my role in the next fight?</strong> If you are the primary damage dealer, you need damage. If you are the frontline, you need to survive. If you are the utility mage, you might need cooldown reduction more than raw AP.</p>

<p><strong>What is threatening me?</strong> If the enemy assassin is fed, a defensive component might save your life — and a live carry deals infinitely more damage than a dead one. If nobody is threatening you, maximize your output.</p>

<p><strong>What can I actually afford?</strong> Sometimes the "optimal" next item requires 1300 gold and you backed with 800. Buying efficient components that let you fight now is often better than sitting on gold waiting for the perfect purchase.</p>

<h2>Adaptive Building in Different Elo Brackets</h2>

<p>One of the most overlooked aspects of itemization is that <strong>the correct build changes depending on your rank and the level of play around you</strong>. This is not about ego or skill — it is about the reality of how different elos play the game.</p>

<p><strong>In Iron through Silver, raw damage often outperforms utility and defensive items.</strong> Fights in low elo are disorganized. Peel is unreliable — your support may not protect you, and your frontline may not zone for you. In this environment, building maximum damage and relying on your ability to output more damage than the enemy carry is often more effective than building defensively. If nobody is going to peel for you anyway, a Guardian Angel does less than a second damage item because you will revive into the same situation with no one protecting you.</p>

<p><strong>In Gold through Platinum, defensive items start mattering significantly.</strong> Players at this level begin to focus carries in teamfights. Enemy assassins start hitting their combos more reliably. A well-timed Zhonya's Hourglass can bait the enemy Zed's full combo and let your team collapse on him. A Maw of Malmortius on an AD carry can survive the enemy AP burst that would have one-shot you. At this elo, building one defensive item is often the difference between dying first in every fight and surviving long enough to deal your damage.</p>

<p><strong>In Diamond and above, utility and cooldown reduction can be more valuable than raw stats.</strong> Teams at high elo coordinate much better. Your support will peel, your frontline will zone, and fights are decided by ability usage more than stat-checking. In this environment, having your abilities up five seconds sooner — because you built cooldown reduction — can matter more than having 20 extra AD. Items like Cosmic Drive on mages or ability haste-focused builds on supports become proportionally stronger because the players around you create the conditions for utility to shine.</p>

<h2>Building Better Habits</h2>

<p>Next time you play, try this: before buying an item, spend two seconds asking yourself why you are buying it. Not "because the guide says so," but what problem this item solves in this specific game. If you cannot answer, it is a signal to start learning. Over time, these micro-decisions compound into a deeper understanding of League's item system, and your builds will start feeling like natural responses to the game rather than scripts you follow blindly.</p>

<p>The goal is not to abandon build guides entirely. They are useful references. The goal is to graduate from following them to understanding them — and eventually, to making your own informed decisions when the standard path does not fit the game in front of you. If you want to see how understanding builds connects to your <a href="/en/blog/how-to-climb-ranked-lol">ranked climbing strategy</a>, the principles are the same: adapting to the specific game in front of you is always better than following a script.</p>
`,
  },
  ...newEnPosts,
];
