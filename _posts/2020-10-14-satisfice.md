---
layout: post
title: "Users will satisfice"
date: 2020-10-14 10:00:00 -0700
---
Satisficing is a decision-making strategy where you choose the first option that meets your criteria, rather than reviewing all the options available to you, e.g. ordering from the first restaurant that looks good versus checking out everything that’s open. In software, satisficing is common: tapping on the first link, tab, or action that seems like it’ll accomplish your goal rather than taking the time to learn all the things a product can do.
In fact, satisficing is how most people use software. Most people aren’t going to spend the time to learn everything an app or website can do; they’ll spend the shortest amount of time possible to figure out if the product can help them accomplish their goal, and then move on.
Despite how common satisficing is, designers often have trouble thinking in this mindset. Designers necessarily need to learn the ins-and-outs of the systems they are designing: how each feature works, how it interacts with other features, in what cases it does X instead of Y. But this introduces a curse of knowledge – once you learn a system it’s very difficult to put that knowledge aside and think in a satisficing mindset. 

<!--break-->
A few ways a satisficing mindset conflicts with the systems-design mindset many designers operate in:

- Satisficing means you scan pages quickly, and it’s beneficial if important pages are linked multiple times on a page. From a systems perspective, multiple links to the same page is duplicative.
- Satisficing leads you to look for familiar UI elements, so commodity UI patterns are helpful because you don’t have to learn what elements are for every product. From a systems perspective, working in commodity UI patterns can be limiting – the solution space of patterns is smaller and might not fit your product.
- Satisficing means you’ll sometimes tap random links or buttons just to see what they do, so it’s beneficial if actions don’t carry much consequence or are easily reversible. From a systems perspective, you want links or buttons to carry real, and for users to only take those actions if they mean it. 

A good designer can balance these two mindsets. You need to be able to put yourself in the shoes of someone using your product _while_ holding the whole system in your head. Research is useful here: sitting people down and watching them use your product is a great way to see _just how little_ users care about your beautiful system. They just have a job to do, and hopefully, your product can help them do it.
Over time, your intuition for patterns that are satisficing-friendly improves, and it becomes easier to put yourself in that mindset when you’re critiquing work. It starts to affect your systems design choices: you know that some product decisions will lead to a difficult user experience, and can advocate for satisficing-friendly designs when you and your team are making product decisions.
