---
layout: page
title: projects
permalink: /projects/
description: Some of the research projects I am currently working on
nav: true
display_categories: [work]
horizontal: false
---

I am part of many collaborations studying transients in our Universe such as: 
- [Deeper Wider Faster program](https://www.swinburne.edu.au/research/centres-groups-clinics/centre-for-astrophysics-supercomputing/our-research/data-intensive-astronomy-software-instrumentation/deeper-wider-faster-program/)
- Vera C. Rubin Observatory: [Dark Energy Science Collaboration (DESC LSST)](http://lsst-desc.org), [Transients and Variable Star Collaboration (TVS LSST)](https://lsst-tvssc.github.io) and [Informatics and Statistics Science Collaboration for LSST](https://issc.science.lsst.org).
- The [Dark Energy Survey (DES)](http://www.darkenergysurvey.org) and its spectroscopic counterpart [OzDES](http://www.mso.anu.edu.au/ozdes/index.html)
- The spectroscopic ESO large programme [ePessto+](http://www.pessto.org). 
- I lead the photometric [SkyMapper Transient Survey](http://www.mso.anu.edu.au/skymapper/smt/) until 2019.

<div class="projects">
  {% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
    {% for category in page.display_categories %}
      <h2 class="category">{{ category }}</h2>
      {% assign categorized_projects = site.projects | where: "category", category %}
      {% assign sorted_projects = categorized_projects | sort: "importance" %}
      <!-- Generate cards for each project -->
      {% if page.horizontal %}
        <div class="container">
          <div class="row row-cols-2">
          {% for project in sorted_projects %}
            {% include projects_horizontal.html %}
          {% endfor %}
          </div>
        </div>
      {% else %}
        <div class="grid">
          {% for project in sorted_projects %}
            {% include projects.html %}
          {% endfor %}
        </div>
      {% endif %}
    {% endfor %}

  {% else %}
  <!-- Display projects without categories -->
    {% assign sorted_projects = site.projects | sort: "importance" %}
    <!-- Generate cards for each project -->
    {% if page.horizontal %}
      <div class="container">
        <div class="row row-cols-2">
        {% for project in sorted_projects %}
          {% include projects_horizontal.html %}
        {% endfor %}
        </div>
      </div>
    {% else %}
      <div class="grid">
        {% for project in sorted_projects %}
          {% include projects.html %}
        {% endfor %}
      </div>
    {% endif %}

  {% endif %}

</div>
