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
          <li id="year-{{ year.name }}-month-{{ post_month }}">
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%m-%d" }}</time>
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
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </li>
        {% endfor %}
      </ul>
    {% endfor %}
  </section>
</div>

<style>
  .archives-index {
    max-width: 800px;
  }
  
  .archive-year {
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: #f5f5f5;
    border-radius: 4px;
  }
  
  .archive-year h2 {
    margin-top: 0;
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.5rem;
    font-size: 1.2em;
  }
  
  .archive-year h2 a {
    text-decoration: none;
    color: #333;
  }
  
  .post-count {
    font-size: 0.8em;
    color: #6c757d;
    font-weight: normal;
    margin-left: 0.5rem;
  }
  
  .archive-months {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
  
  .archive-months li {
    margin: 0.5rem 0;
    display: inline-block;
    margin-right: 2rem;
  }
  
  .archive-months a {
    text-decoration: none;
    color: #333;
  }
  
  .archive-months a:hover {
    text-decoration: underline;
  }
  
   .archive-posts {
    list-style: none;
    padding-left: 0;
    margin: 0.8rem 0 0;
  }

  .archive-posts li {
    margin: 0.4rem 0;
  }

  .archive-posts time {
    color: #6c757d;
    margin-right: 0.5rem;
    font-size: 0.9em;
  }
  
  /* 按类别归档样式 */
  .archive-categories {
    margin-bottom: 2rem;
    padding: 1rem;
    background: #f5f5f5;
    border-radius: 4px;
  }
  
  .archive-categories h2 {
    margin-top: 0;
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.5rem;
    font-size: 1.2em;
  }
  
  .category-list {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
  
  .category-list li {
    margin: 0.5rem 0;
    display: inline-block;
    margin-right: 2rem;
  }
  
  .category-list a {
    text-decoration: none;
    color: #333;
  }
  
  .category-list a:hover {
    text-decoration: underline;
  }
</style>
