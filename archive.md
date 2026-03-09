---
layout: page
title: 归档
permalink: /archive/
---

<div class="archives-index">
  <h1 class="page-heading"> 文章归档</h1>

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
    margin-bottom: 2rem;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 8px;
  }
  
  .archive-year h2 {
    margin-top: 0;
    border-bottom: 2px solid #dee2e6;
    padding-bottom: 0.5rem;
  }
  
  .archive-year h2 a {
    text-decoration: none;
    color: #495057;
  }
  
  .post-count {
    font-size: 0.8em;
    color: #6c757d;
    font-weight: normal;
    margin-left: 0.5rem;
  }
  
  .archive-months {
    list-style: none;
    padding-left: 1.5rem;
  }
  
  .archive-months li {
    margin: 0.5rem 0;
  }
  
  .archive-months a {
    text-decoration: none;
    color: #007bff;
  }
  
  .archive-months a:hover {
    text-decoration: underline;
  }
</style>
