---
layout: home
title: "NY.S의 연구 블로그"
author_profile: true
excerpt: "PX4 · ROS2 · Gazebo · AI 시뮬레이션 기록"
classes: wide
---

최근 글이 아래에 목록으로 표시됩니다.

{% assign ordered = site.posts | sort: "order" %}
> 시리즈 순서대로 보기

{% for post in ordered %}
- [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
