---
layout: page
title: Tags
permalink: /tags/
---

{%- assign sorted_tags = site.tags | sort -%}

<ul>
  {%- for tag in sorted_tags -%}
  {%- assign tag_name = tag[0] -%}
  <li>
    <a href="#{{ tag_name | uri_escape }}">{{ tag_name }}</a> ({{ tag[1].size }})
  </li>
  {%- endfor -%}
</ul>

{%- for tag in sorted_tags -%}
{%- assign tag_name = tag[0] -%}
<h2 id="{{ tag_name | uri_escape }}">{{ tag_name }}</h2>
<ul>
  {%- for post in tag[1] -%}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <small>{{ post.date | date: "%Y-%m-%d" }}</small>
  </li>
  {%- endfor -%}
</ul>
{%- endfor -%}
