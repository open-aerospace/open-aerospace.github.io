---
layout: frontpage
title: Open Source Aerospace
description: Open Source Aerospace Engineering, modeling rocket flights with open-source tools and methods.
---


Simulating Rockets
==================


The Problem
-----------

Building and flying ["High Power Rockets"][hpr] is a popular hobby world-wide. Many people enjoy the challenge of building something that will withstand the heat a pressure of launching many kilometers into the air. And even if it's just for fun there is a lot to learn about serious aerospace engineering. Increasingly universities have student groups building more and more advanced rockets.

A very important part of building a large—one or more meters tall, flights in the multiple kilometer range—rocket is trying to **optimize** the whole system. In the process of designing the rocket there are dozens, if not hundreds, of trade-offs to make. In a perfect world you could balance each decision for factors like cost, complexity, and mission outcome. This is hard!


Projects:
---------

{% for category in site.data.projects.categories %}

### {{ category.category }}

 {% for project in category.list %}
#### [{{ project.name }}]({{ project.location }})

{% for badge in project.badges %}![]({{ badge }}) {% endfor %}

{{ project.description }}

<{{ project.location }}>

 {% endfor %}

{% endfor %}

[hpr]: http://www.nar.org/high-power-rocketry-info/ "What is High Power Rocketry?"
