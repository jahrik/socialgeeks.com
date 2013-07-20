---
layout: page
title: SocialGeeks Inc.
---

Read [Jekyll Quick Start](http://jekyllbootstrap.com/usage/jekyll-quick-start.html)

Complete usage and documentation available at: [Jekyll Bootstrap](http://jekyllbootstrap.com)

## Events

<ul class="posts">
  {% for post in site.posts %}
  	{% if post.category == "event" %}
    	<li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.category }}</a></li>
    {% endif %}
  {% endfor %}
</ul>

## Posts

<ul class="posts">
  {% for post in site.posts %}
  	{% if post.category == "blog" %}
    	<li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
	{% endif %}
  {% endfor %}
</ul>



