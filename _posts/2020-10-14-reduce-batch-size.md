---
layout: post
title: "The surprising impact of reducing batch size"
description: Shipping smaller chunks of work has more benefits than you probably realize.
created: 2020-10-14 10:00:00 -0700
updated: 2020-10-25 10:00:00 -0700
---

"Ship fast" is among the oldest and most common pieces of software wisdom, getting repackaged over the years into Agile, the Lean Startup Method, or _move fast and break things_. It's advice so trite that doesn't even seem worth discussing, but I've been continually surprised at just how impactful it can be, specifically when you focus on reducing batch size.

A batch of work is a unit of work that gets shipped to customers. It could be a single copy tweak or a whole new feature; what matters is the end-to-end time from idea to production. Reducing it just means including fewer changes in that batch, _not_ cutting out key parts of the product development process like UI polish, code quality, or QA. 

At first blush, large batches might not seem like a problem. If you're going the process is the same, what’s the difference between shipping feature X and Y together versus just feature X? I felt that way when I started working at Quora and was confused when I saw so much emphasis put into reducing batch size. But I was mistaken: there are a shocking number of benefits to reducing batch size, and I now think it's one of the most important principles for shipping high-quality software quickly. 

What makes small batches so impactful? The best explanation I've found comes from [The Principles of Product Development Flow](https://www.amazon.com/Principles-Product-Development-Flow-Generation/dp/1935401009), a dense but great read on effective product development practices:

<!--break-->

### Why reduce batch size?
- **Smaller batches mean end-users get some benefit sooner**: shipping some UI polish in one week means your users will enjoy a more polished product sooner than if you had shipped that polish as part of a redesign that took one month.
- **Smaller batches mean you get feedback sooner**: faster feedback leads to better products. Smaller batches lead you to be informed sooner which helps your future batches.
- **Smaller batches make reprioritization easier**: it is easier to re-prioritize work in-between batches than in the middle of a batch (sunk cost fallacy, switching costs). Smaller batches mean more instances between batches. Your prioritization decisions also get better because you get feedback sooner.
- **Smaller batches reduce variations in flow**: all processes have limits on the amount of flow they can support, and large batches frequently blow past that limit, causing slowdown. A restaurant might be able to handle a dozen customers throughout the day, but a 100-person group will overwhelm the kitchen.
- **Smaller batches reduce overhead**: less management is needed for smaller batches. If a new feature has 10 open bugs, a new bug report needs to be checked for duplication 10 times. If a new feature has 100 open bugs, it needs to be checked 100 times.
- **Smaller batches are easier to cancel**: often priorities change, conflict with each other, or are sometimes flat-out wrong. Smaller batches are easier to cancel because there is less a sunk cost and a lower chance that priorities have changed since the batch started.

That’s not all! There’s second-order benefits of smaller batches that bring even more benefits:
- **Smaller batches reduce process friction**: smaller batches will hit friction in shipping processes (e.g. “how many people need to get sign off on a copy change?") much more frequently than larger batches, so fixing that friction will become a higher priority. 
- **Smaller batches encourage more urgency**: a designer solely responsible for a tweak to the site header due three days from now is going to feel a lot more urgency than if they were part of a team of five responsible for a site navigation refresh due in three months.
- **Smaller batches encourage more experimentation**: because the risks of small batches are lower, experimenting with potentially risky changes becomes easier.
- **Smaller batches are more fun**: a lot of people derive joy out of shipping work, and smaller batches mean more of those moments.

Smaller batches aren't always easy to get right. The temptation to cut corners like UI polish is strong; it can be difficult to hold a high-quality bar when you're releasing every single week. Not all batches are independent of each other; X might not be beneficial to users until Y and Z are shipped too. A decent chunk of my Quora tenure was dedicated to navigating these tradeoffs, and I got it wrong pretty frequently – something I'd like to expand on in a subsequent post. 

But when you able to ship smaller batches consistently the impact is felt. Having an idea for an improvement in the morning and shipping it to users by the end of the day is a very satisfying way to work, and watching a product grow and take shape through constant iteration provides a lot of fuel for long-term motivation.


### References
  - The core idea comes from [Principles of Product Development Flow](https://www.amazon.com/Principles-Product-Development-Flow-Generation/dp/1935401009) by Donald G. Reinertsen
  - Reducing work-in-progress is a separate but similarly important method for speeding up product development, [Will Larson has a good post explaining why](https://lethain.com/limiting-wip/).
