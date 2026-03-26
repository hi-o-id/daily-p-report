---
layout: page
title: 标签
permalink: /tags/
---

{%- assign tags = site.tags | sort -%}

{%- if tags.size == 0 -%}
暂无标签。
{%- else -%}
<ul class="archive-posts">
{%- for tag in tags -%}
  <li id="{{ tag[0] | uri_escape }}">
    <strong>#{{ tag[0] }}</strong>（{{ tag[1].size }} 篇）
    <ul>
      {%- for post in tag[1] -%}
      <li>
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: site.minima.date_format }}</time>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </li>
      {%- endfor -%}
    </ul>
  </li>
{%- endfor -%}
</ul>
{%- endif -%}
