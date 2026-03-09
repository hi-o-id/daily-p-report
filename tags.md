---
layout: page
title: Tags
---

<ul>
{% for tag in site.tags %}
<li>
  <a href="/tag/{{ tag[0] | slugify }}/">
    {{ tag[0] }} ({{ tag[1].size }})
  </a>
</li>
{% endfor %}
</ul>
