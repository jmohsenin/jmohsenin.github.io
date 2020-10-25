---
layout: post
title: "Complexity can’t be removed, only moved around"
description: "It's not that simple to \"make it simple\"."
created: 2020-10-12 10:00:00 -0700
---
A frequent goal in product design is to try and “make it simple”, which often manifests as removing product complexity for the end-user (e.g. removing steps from a flow). This may seem like it’s *removing* complexity, but in practice it’s usually *moving* the complexity to a different place – either onto the system, the organization that runs that system, other users, etc. Moving that complexity can still be the right decision, but it’s important to recognize that it’s not being removed altogether: it’s just somewhere else, with different tradeoffs that might be better or worse depending on the context.

<!--break-->

Some real examples I’ve come across:
- **Moving complexity from the user to the organization**: replacing billing/shipping address fields with an address autocomplete. That typeahead needed to be built, monitored and had various fallbacks designed for when the service went down. This was complexity the engineering team had to permanently manage.
- **Moving complexity from the organization to users**: choosing to make some aspects of content moderation run by user moderators rather than done by employees. Moderators now needed to learn to process a moderation queue and dedicate regular time to moderation.
- **Moving complexity from the organization to the system**: replacing a rotational user-support system (employees would reply to support emails on a rotating basis) with a help center + triaging logic based on the issue. This system needed to built and maintained.

In all these cases, the tradeoff was ‘worth it’ – it was better to have that complexity moved to a different place. But it wasn’t removed.

What about removing a feature entirely? Isn’t that complexity reduction? Not really: users have [Jobs To Be Done](https://hbr.org/2016/09/know-your-customers-jobs-to-be-done), so not having a feature at all usually just pushes that complexity further onto the user:
- They may have to spend time hacking together a solution in your product using other features
- They may have to use another product in addition to yours
- They may have to hold that complexity in their head, or otherwise forget it and potentially cause them harm.

Importantly, complexity isn't the same as friction, and friction definitely can be removed: performance improvements, preloading content, auto-focusing text boxes, etc. all remove friction but don’t remove complexity. I don’t quite know when complexity ends and friction begins; it’s a spectrum in my mind.