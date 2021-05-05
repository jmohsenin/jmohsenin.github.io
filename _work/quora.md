---
layout: post
title: "Quora"
date: 2021-04-06 10:00:00 -0700
description: "Q&A knowledge-sharing product"
thumb: "/assets/images/quora-thumb.png"
---

Quora is a Q&A knowledge-sharing product. You've probably read a Quora digest or came across it when you're Googling something.

My time at Quora fell into three chapters:

- 2017-2020 I was the design manager on direct engagement
- 2016-2017 I led product for the writer experience
- 2013-2015 I was IC designer on a lot of growth and mobile projects

## Direct engagement (2017-2020)

During this time I managed a fantastic team of designers working to make Quora a product you wanted to use every day. This work started as a few skunkworks projects that eventually constituted a major pivot for the company, leading to the biggest product changes in Quora's 10+ year history. Highlights include:

- Building Spaces, a communities product that became the heart of new experience we were trying to create
- A full redesign of the feed and new content types that expanded the variety of knowledge that could be created and shared on Quora
- A redesign of notifications experience that supported a literal 100x increase in scale

My role began as the product lead for the feed piece and evolved to co-leading the overall effort and managing design. My day-to-day spanned strategy setting, coaching designers, running projects myself, providing feedback in critique, eval'ing ML models, and fixing CSS bugs. The designers I managed ran key projects and went on to be leads themselves.

When I left, the sum of this work was a major driver of Quora's growth and the company's focus.

For some of the work my team did, check out: [Kristin Au's notifications work](http://www.kristinau.com/notifs/), [Emmad Mazhari's feed work](https://emmadmazhari.com), and [Elaine Zhou's work on spaces](http://www.elainexzhou.com).

## Writer experience & scaling quality  (2015-2017)

Since the start, Quora focused on motivating writers to contribute high-quality answers for any question. Doing this at all is nontrivial, and becomes increasingly difficult at scale as new problems emerge.

I designed and lead a variety of projects during this period. These were some of the richest design problems I've ever faced: navigating the complex (and often competing) incentives between different types of writers, activating new writers in the first place, and solving the pain points and edge cases of the most prolific writers, just to name a few. It was also a great opportunity to just talk and get to know a whole bunch of writers, who came from all walks of life.

### Credentials

A major part of making content on Quora high-quality is representing credibility and expertise effectively. A crucial component to making this work is the credential or bio. I lead a rearchitecture of that product that generated much higher quality credentials, making the experience better for both readers (who rely on credentials as a credibility signal) and writers (who got more feedback as a result of better representing their expertise). An absolute iceberg of a project, where 90%+ of the work wasn't directly user facing.

<figure>
  <img src="/assets/images/quora-1.png" class="breakout" />
  <figcaption><strong>Credentials</strong> helped writers represent their expertise and readers trust what they read</figcaption>
</figure>

### Most Viewed Writers

Recognition is really important to writers. Quora had an annual Top Writer program to recognize the most prolific writers on the platform, but as we grew and grew there was just an enormous number of writers to recognize as well. I built a topic-based leaderboard called Most Viewed Writers to recognize writers from all walks of life: 

<figure>
  <img src="/assets/images/quora-2.png" class="breakout" />
  <figcaption><strong>Most Viewed Writers</strong> created incentives for writers to contribute to niche topics rather than just compete for overall attention</figcaption>
</figure>

### Quality of life improvements

Mixed in with big complex systems design projects were a lot of small quality of life improvements to make the writing experience on Quora more pleasurable. Two of my favorites: a full-screen editor on desktop and a photo-search built right into the editor: 

<figure>
  <img src="/assets/images/quora-3.png" class="breakout" />
  <figcaption><strong>Editor improvements</strong> made the writing experience on Quora more pleasant</figcaption>
</figure>

## Growth & Mobile (2013-2015)

In my first couple years I was a mercenary, hopping around to different teams for growth and mobile projects. Working on growth was a really useful period for me – it was the clearest and fastest feedback loop that I have had experienced with design work. I ran dozens and dozens of A/B tests across UI, product mechanics, and performance, and learned a ton about what 'works' and what doesn't. Working on mobile was really fun during this period of crazy growth and maturation of the mobile market, and learning to operate on a service team was a great learning experience.

Some of my favorite projects from this time:

### iPad app

I designed Quora's first iPad app that was a huge hit with the community and got featured by Apple:

<figure>
  <img src="/assets/images/quora-4.png" class="breakout" />
  <figcaption><strong>Quora’s iPad app</strong> was featured by Apple</figcaption>
</figure>

### Request Answers

Request answers is a way for people to request answers from specific writers. It was a major source of answers, but was clunky experience-wise. Over three weeks I made three changes that lead to a massive surge in usage:

- Renaming the feature "Request Answers" after user research revealed that "Ask" felt demanding and impolite in some cultures.
- Moving the contents of A2A from a modal into an inline drawer and polishing the UI.
- Tweaking the mechanics of when the drawer opened up on page-load to better match the predicted intent of the viewer.

These tweaks lead to a massive increase in total requests sent, one of the biggest gains ever. Probably my most impactful two weeks from a metrics perspective.

<figure>
  <img src="/assets/images/quora-5.png" class="breakout" />
  <figcaption><strong>Request Answers</strong> led to a massive increase in answers written</figcaption>
</figure>

### Mweb hacks
Quora's mobile apps were build as hybrid native/webview experiences, which required more than a few hacks to perform well. One I'm particularly proud of is figuring out retina borders. Back when iOS 7 came out retina borders were all the rage, but there was no easy way to do these in web views – they always came out as 1px (2 retina pixels). After a lot of CSS hacking I figured out a way to do it with `transform`:

```css
.border-bottom {
	&:after {
		content: "";
		transform: scale(0.5);
		border-bottom: 1px solid var(--color-border);
	}
}
```
