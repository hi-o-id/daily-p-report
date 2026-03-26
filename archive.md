---
layout: page
permalink: /archive/
title: 归档
---

<div class="archives-index">

  <!-- 按类别归档 -->
 <section class="archive-categories">
    <h2>按类别</h2>
    <ul class="category-list">
      {% for category in site.categories %}
        {% assign category_slug = category[0] | slugify %}
        <li>
          <a href="#category-{{ category_slug }}">
            {{ category[0] }}
          </a>
          <span class="post-count">({{ category[1].size }} 篇)</span>
        </li>
      {% endfor %}
    </ul>
  </section>

  {% assign posts_by_year = site.posts | group_by_exp: 'post', 'post.date | date: "%Y"' %}
  
  {% for year in posts_by_year %}
    <section class="archive-year" id="year-{{ year.name }}">
      <h2>
        <a href="#year-{{ year.name }}">
          {{ year.name }} 年
        </a>
        <span class="post-count">({{ year.items | size }} 篇)</span>
      </h2>
      
      {% assign posts_by_month = year.items | group_by_exp: 'post', 'post.date | date: "%m"' %}
      
      <ul class="archive-months">
        {% for month in posts_by_month %}
          <li>
            <a href="#year-{{ year.name }}-month-{{ month.name }}">
              {{ month.name }} 月
            </a>
            <span class="post-count">({{ month.items | size }} 篇)</span>
          </li>
        {% endfor %}
      </ul>
 <ul class="archive-posts">
        {% for post in year.items %}
          {% assign post_month = post.date | date: "%m" %}
          <li id="year-{{ year.name }}-month-{{ post_month }}-{{ forloop.index }}">
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: site.minima.date_format }}</time>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </li>
        {% endfor %}
      </ul>
      
    </section>
  {% endfor %}
    <section class="archive-by-category">
    <h2>分类文章</h2>
    {% for category in site.categories %}
      {% assign category_slug = category[0] | slugify %}
      <h3 id="category-{{ category_slug }}">{{ category[0] }}</h3>
      <ul class="archive-posts">
        {% for post in category[1] %}
          <li>
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: site.minima.date_format }}</time>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </li>
        {% endfor %}
      </ul>
    {% endfor %}
  </section>
</div>
