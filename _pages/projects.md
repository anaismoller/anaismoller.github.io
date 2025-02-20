---
layout: page
title: projects
permalink: /projects/
description: 
nav: true
display_categories: [work]
horizontal: false
---

## Students
Interested in doing a project PhD, Honours and internship project? Please look at the [Swinburne CAS webpage](https://astronomy.swin.edu.au/study/phdprojects.html) and send me an email to <a href="mailto:amoller@swin.edu.au">amoller@swin.edu.au</a>.

* Lukas Steinwender: PhD candidate at Swinburne (Supervisor) current
* Olivia Vidal-Velázquez: PhD candidate at Swinburne (Supervisor) current
* Tallulah Waterson: PhD candidate at Swinburne (Co-supervisor) current
* Renee Key: PhD candidate at Swinburne (Co-supervisor) current
* Mark Suhr: PhD candidate at Swinburne (Co-supervisor) current
* Natasha Van Bemmel: PhD candidate at Swinburne (Co-supervisor) current
* James Freeburn: PhD candidate at Swinburne (Co-supervisor) current
* Natalyia Ramos: Master LPC (Supervisor) -> PhD at IAC Spain
* Fiona Panther: PhD ANU (Co-supervisor) -> Postdoc UWA
* Bonnie Zhang: PhD ANU (Co-supervisor) -> Google USA
* Patrick Armstrong: Undergraduate internship (Co-supervisor) -> PhD at ANU

## Collaborations

<div class="projects">
{%- if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_projects = site.projects | where: "category", category -%}
  {%- assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
  {% endfor %}

{%- else -%}
<!-- Display projects without categories -->
  {%- assign sorted_projects = site.projects | sort: "importance" -%}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
{%- endif -%}
</div>
