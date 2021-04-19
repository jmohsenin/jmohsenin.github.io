---
layout: post
title: "Castle"
description: "Debunking the myth that Snapchat's hard-to-discover UX was a key part of their success."
video: "/assets/images/castle-1.mp4"
---

Castle is a new app for making interactive cards on mobile. Cards can be tiny games, little scenes, or animations. The vibe is similar to the golden age of Flash: people making weird little stuff and sharing it with each other.

I've worked with Castle on a variety of projects, mostly around the consumption-side of the app.

## Feed

The feed is the main way cards are consumed on Castle. Previously, the feed was a grid of card screenshots that you tapped on to play:

<figure>
  <img src="/assets/images/castle-2.png" class="breakout" />
  <figcaption>Old Castle feed design.</figcaption>
</figure>

This wasn't a great way to consume Castle cards. Cards are full of motion, but you wouldn't know by looking at a static screenshot. Also, because cards can be interacted with in a multitude of ways, it's not obvious what you're going to do with a card just by looking at a screenshot.

<figure>
    <video autoplay loop muted class="breakout">
      <source src="/assets/images/castle-3.mp4" type="video/mp4">
    </video>
  <figcaption>Cards can be swiped, tapped, or dragged anywhere.</figcaption>
</figure>

My goal was to find a feed paradigm that better fit the unique nature of Castle's content. Castle's feed had two jobs: to help people find cards they want to play, and to provide a good card play experience.

At first, I tried to combine them to allow people to start playing directly from feed load, without needing to choose first. I prototyped a few feeds along these lines, but none worked: because any part of a Castle card could be interactive, navigation couldn't be overlayed over the card without hampering the play experience. The remaining space wasn't sufficient to provide adequate navigation, and shrinking the card to provide that space hampered the play experience too much. 

With direct play from feed off the table, the challenge became finding a navigation experience that also provided a good preview of the play experience. Video felt like a natural medium for previewing decks, and when I recorded a few test videos it felt really promising. I paired that with a TikTok-style feed for navigation, and the result felt great:

<figure>
    <video autoplay loop muted>
      <source src="/assets/images/castle-4.mp4" type="video/mp4">
    </video>
  <figcaption>The feed design I came up with.</figcaption>
</figure>

To source the videos, we turned to creators, adding functionality in the editor to allow them to record short snippets. It was a fun challenge to dial in the format: recording on-device was challenging performance-wise, so we were quite limited how long we could record. We found a sweet spot in a boomerang format: 2 seconds of gameplay, recorded at 12 fps, played back at 2x speed. 

<figure>
    <video autoplay loop muted class="breakout">
      <source src="/assets/images/castle-5.mp4" type="video/mp4">
    </video>
  <figcaption>On the play screen, I used the card's primary color as a background color for the whole screen, to make it feel more unique to the card.</figcaption>
</figure>

Creators really liked this feature and the majority of Castle decks soon had video previews. In addition to a better feed experience, these previews had other benefits: they served as a trailer, showing off parts of cards that most players wouldn't get to on their first play, and made Castle content a lot more enticing on external networks.

## Spring Party & Explore

To celebrate launching in the App Store, Castle was planning on having a spring party. We decided to go all out and do a lot of spring-specific app theming to get the community excited. 

Around the same time, I was planning on adding an explore tab to fill out some missing functionality like user search. I decided to design + build a Spring party tab that would later become an explore tab. It started as countdown to a party, then became a place to feature all the cards people were making for the party, before finally becoming a long-term explore tab:

<figure>
  <img src="/assets/images/castle-6.png" class="breakout" />
  <figcaption>Spring party logo by <a href="http://davidcole.me">David Cole</a>, Tab icon by <a href="http://joro.tv">Joro Chen</a></figcaption>
</figure>

## Create Screen

A recent focus for Castle has been making it easier for new creators to get started. I took a pass on the create screen, to make it more obvious how to change visibility permissions, set a video preview, and see play stats.

<figure>
  <img src="/assets/images/castle-7.png" class="breakout" />
  <figcaption>New create flow.</figcaption>
</figure>
