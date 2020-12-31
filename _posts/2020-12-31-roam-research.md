---
layout: post
title: "How I use Roam Research"
description: "Why a culty note-taking app got me writing so much."
created: 2020-12-31 10:00:00 -0700
---
I stared at screens a lot this year. Roam Research made that time mostly worth it.

Roam is what you make of it. It's ostensibly a note-taking app with an obtuse UI, but its product mechanics – bi-directional linking, easy page creation, embedding – allow for "networked thought" in a way that isn't easy in other apps. Folks who use it religiously often describe it as a 'second brain'. It's extremely flexible: almost any writing process is possible in Roam, and increasingly Roam itself can be modified (e.g. support for custom CSS and JS).

Before using Roam I used note-taking apps sparingly and didn't do any long-form writing or reflection outside of work. I journaled on and off but never developed a habit; I generally didn't think of writing as a tool in my tool belt. Roam changed that. I started using it for journaling, but the use cases grew and grew, and eventually encompassed almost everything I type, save for messaging. Blog posts, grocery lists, recipe notes, book quotes, and more are all in Roam.

<!--break-->
This happened because the product encourages you to write first and organize later. Writing in it versus Notion/Quip/G Docs is akin to the difference between sharing an Instagram story vs a post: the reduced friction means you create so much more. It's helped me work through messy interpersonal issues, connect ideas between different books/movies/games, and improve my pizza game. No other piece of software has changed my thinking habits as much since the iPhone. I'm better off because of the habits Roam helped me create, and I think those will stick regardless of whether Roam the company sticks around.

It also got a ridiculously steep learning curve. I've raved to a lot of friends about it, but they've struggled to get into it given how flexible and unguided it is. Roam didn't click for me until I took a [paid course on it](https://www.effortlessoutput.com/), not something a sane person should do for note-taking software. How you use Roam is downstream of your goals, which are probably different than mine. Roam's flexibility means that even if we have similar goals we could achieve them in wildly different ways. What I wish I had when I was starting out with Roam was a bunch of examples of how other people used it, in grisly detail. So here's how I use Roam. 

*I'm assuming you're familiar with the basics; if you're not, [this guide is a great place to start](https://nesslabs.com/roam-research).*

### Journaling

Roam creates a page for every day called the Daily Note, it's also the logged-in homepage. It's the only part of Roam that is opinionated: even if you leave it blank, Roam will still create a daily note every day. I use it as a log of what I did that day, but keep most long-form writing out of daily notes. I experimented with writing exclusively in Daily Notes, but I found that discouraged me from refactoring older writing as I acquired new info.

I like keeping track of where my time goes, so I structure my daily note as blocks of time:

![My Daily Journaling in Roam](/assets/images/roam-research--1.png)

The only writing I keep in the daily note is journaling. My current method is a morning reflection with three prompt questions:

- What's top of mind?
- Are you happy with how you spent your time yesterday?
- What did you learn yesterday?

I started journaling in second-person perspective after seeing [how Nick Cammarata uses Roam](https://twitter.com/nickcammarata/status/1316431198407651328), and have been surprised how much easier it is for me to be tender than when I write in first-person. These questions are references to blocks in the [[Journal]] page. By doing this, I can read all the entries about that specific question:

![Aggregated Journal Entries](/assets/images/roam-research--2.png)

### Taking Notes

One of the main things I use Roam for is taking notes on stuff I read, watch, or play. I didn't use to do this before using Roam, but it was a natural jump from journaling. As I did it more, I realized it was pulling me towards going deeper on more meaningful media instead of skimming a wide range of junk, a welcome change.

I made these books, podcasts, projects, etc pages in Roam, and used Roam's metadata mechanic (Page Name::) to give them structure. All pages start with "Tags" for describing the page type and linking to related pages, and then different metadata fields based on the type of page it is. Articles have URLs and authors, projects have statuses and outcomes, etc.

![Articles in Roam](/assets/images/roam-research--3.png)

Some metadata types that have been particularly useful for me:

- [[Summary]] is a useful writing prompt for a tweet-length summary of what I've read
- [[Further Reading]] is useful as a place to drop related links – this actually ended up replacing Instapaper entirely for me.
- [[Status]] allows me to aggregate pages by their state, e.g. what projects are active versus completed

Sometimes, a page type needs a dashboard-style page. I use a {{query}} combined with [[Status]] to generate a sectioned dashboard, e.g. for projects I have in-flight:

![Project Dashboard](/assets/images/roam-research--4.png)

*For more on how to use queries, see [this Roamhacks guide](https://roamhacks.com/how-to-query-roam/)*

### Writing

Sometime in 2016-17, I lost the ability to post almost anything publicly. Twitter had become such a PvP zone that I didn't feel comfortable participating, I didn't feel like I was 'good' enough to post on Instagram, and long-form writing felt out of the question. Roam got me over the hump, and I'm slowly getting more comfortable posting publicly again (I'm sorry).

It started as an outgrowth of taking notes, entirely private. I'd write tweet-length summaries of ideas that kept cropping up in what I was consuming or talking about with friends. Those summaries started getting longer, and over time, I accumulated a decent collection of notes, all inter-connected. Linking those notes together to form a draft and then a post was far easier than starting from a blank page.

Mechanically, I did this by making pages for each little idea, e.g. [[Atomized sessions makes ML easier]]. That example is a bit incoherent, but it was the kernel of the idea that eventually lead to [[TikTok strategy piece]]. Similar to a project, each idea had a status as I developed it from a kernel into a longer post. Most of the ideas won't ever get published, which I'm OK with – I'm still squeamish about posting. I use the same {{query}} trick from above to turn all of that into a writing inbox:

![Writing Dashboard](/assets/images/roam-research--5.png)

### Setting Goals

I worked at Quora at a very impressionable age, and like anything you consume at the right age, parts of it are forever engrained in you (for better or worse!). One of the Quora-isms that's stayed with me is rigorous goal setting, which I maintained even when I wasn't working for a good chunk of this year, for some reason. Roam lets me set goals to my heart's content: I have monthly, weekly, and daily goals, and use {{embed}} to link them all together:

- I create pages for each month and for each week. Roam will create the daily pages automatically.
- The goals are nested, so my December goals breakdown into weekly goals, weekly goals into daily goals.
- Mechanically, I write the goals for the child timeframe in the doc for the parent timeframe and embed the block in the child doc. So the [[December 2020]] doc has a "Weeks" section, and a bullet for each week of December, under which I'll write the goals for that week. I'll take that block and embed it in the doc for that week. I'll do the same for daily goals.

This is easier to show than tell:

![Monthly Goals](/assets/images/roam-research--6.png)
![Weekly Goals](/assets/images/roam-research--7.png)
![Daily Goals](/assets/images/roam-research--8.png)

This format works for me because it lets me keep the right level of context at every time frame, e.g. I often adjust my weekly goals throughout the week, and it's much easier to do that in a single doc than in several. What's great about embeds is that they are editable, so I can make adjustments to my daily goals without leaving my daily note.

The month/week docs are templates that also include sections for:

- **Todos**: random tasks that that don't fit into a goal
- **Reflections**: Sunday nights I update my goals and reflect on the week. I often reference morning journal entries here.
- **Reading/Watching/Playing**: I like listing out the media I'm consuming for future reference
- **Meal Plan**: I cook a lot and try put together a meal plan for what I'm going to cook that week

### Managing Projects

Roam is very mediocre at project management. Although Roam does have multi-user support, it's pretty rough and I wouldn't recommend it to use with a team. Roam is good enough for personal project/task tracking. I'll usually write a high-level roadmap for a project in the project doc, and for bottoms-up tasks just put them in the daily note, under the time block for that project

### Caveats Abound

As significant as Roam has been for me, I can't whole-heartedly recommend it. Even putting aside the steep learning curve, Roam still has a lot of issues:

- Mobile support is abysmal, a mobile-web version exists but is very cumbersome
- Reliability/performance isn't great, some users have even lost data
- No API means a lot of extensibility potential isn't realized (an API is in development)

It's also not free ($15/mo), although a number of [free alternatives exist](https://nesslabs.com/roam-research-alternatives). The upshot is that the Roam community is unbelievably passionate. That helps with some of these issues (e.g. lots of great extensions that get around the lack of an API) but also gives me confidence that longer-term some of the bigger issues will get fixed – there's no lack of demand here.

Roam can seem like a lot of work. A lot of the benefits don't kick in till you use it for a while. But if you've got a small habit you'd like to change – like journaling in the new year – give Roam a shot. You may just stick with it, and find your screen time more worthwhile as a result.
