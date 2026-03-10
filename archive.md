---
layout: page
permalink: /archive/
title: 归档
---

<div class="archives-index">
  <h2 class="page-heading">归档</h2>

  <!-- 按类别归档 -->
  <section class="archive-categories">
    <h2>按类别</h2>
    <ul class="category-list">
      {% for category in site.categories %}
        <li>
          <a href="{{ '/category/' | append: category[0] | slugify | relative_url }}">
            {{ category[0] }}
          </a>
          <span class="post-count">({{ category[1].size }} 篇)</span>
        </li>
      {% endfor %}
    </ul>
  </section>

  {% assign posts_by_year = site.posts | group_by_exp: 'post', 'post.date | date: "%Y"' %}
  
  {% for year in posts_by_year %}
    <section class="archive-year">
      <h2>
        <a href="{{ '/archive/' | append: year.name | relative_url }}">
          {{ year.name }} 年
        </a>
        <span class="post-count">({{ year.items | size }} 篇)</span>
      </h2>
      
      {% assign posts_by_month = year.items | group_by_exp: 'post', 'post.date | date: "%m"' %}
      
      <ul class="archive-months">
        {% for month in posts_by_month %}
          <li>
            <a href="{{ '/archive/' | append: year.name | append: '/' | append: month.name | relative_url }}">
              {{ month.name }} 月
            </a>
            <span class="post-count">({{ month.items | size }} 篇)</span>
          </li>
        {% endfor %}
      </ul>
    </section>
  {% endfor %}
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
