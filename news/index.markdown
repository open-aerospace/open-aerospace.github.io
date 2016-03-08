---
layout: news
title: Open Aerospace News
description: Updates and news about the Open Aerospace organization
---

# News

--------------------------------------------------------------------------------

{% for post in site.posts %}
{% assign d = post.date | date: "%-d"  %}
<div class="columns">
  <div class="column is-2">
  {{ post.date | date: "%B %Y" }}
  </div>
  <div class="column is-8">
   <a href="{{ post.url }}">{{ post.title }}</a>
  </div>
</div>
<div class="columns">
  <div class="column is-8 is-offset-2">
    {{ post.excerpt | markdownify }}
  </div>
</div>
{% endfor %}
