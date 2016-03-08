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
  <div class="column is-2 is-offset-1">
  {{ post.date | date: "%B" }}
    {% case d %}
      {% when '1' or '21' or '31' %}{{ d }}<sup>st</sup>
      {% when '2' or '22' %}{{ d }}<sup>nd</sup>
      {% when '3' or '23' %}{{ d }}<sup>rd</sup>
      {% else %}{{ d }}<sup>th</sup>
    {% endcase %},
  {{ post.date | date: "%Y" }}
  </div>
  <div class="column is-8">
   <a href="{{ post.url }}">{{ post.title }}</a>
  </div>
</div>
<div class="columns">
  <div class="column is-8 is-offset-3">
    {{ post.excerpt | markdownify }}
  </div>
</div>
{% endfor %}
