---
layout: page
title: projects
permalink: /projects/
description: Some of the research projects I am currently working on
nav: true
display_categories: [work]
horizontal: false
---

Science collaborations:
-
- [Deeper Wider Faster program](https://www.swinburne.edu.au/research/centres-groups-clinics/centre-for-astrophysics-supercomputing/our-research/data-intensive-astronomy-software-instrumentation/deeper-wider-faster-program/): the world’s largest collaboration for transient astronomy with 70 telescopes across all continents and in space stufying the fastest astrophysical transients.

- The [Dark Energy Survey (DES)](http://www.darkenergysurvey.org) an international effort to reveal the nature of the mysterious dark energy that is acclerating the expansion of our Universe.
- The Australian counterpart [OzDES](http://www.mso.anu.edu.au/ozdes/index.html) obtaining spectra with the AAT of supernovae, host-galaxies and AGNs.
- The spectroscopic ESO large programme [ePessto+](http://www.pessto.org) studying extreme and exotic transients.
- I led the photometric [SkyMapper Transient Survey](http://www.mso.anu.edu.au/skymapper/smt/) until 2019 searching for supernovae and optical coutnerparts to gravitational waves and fast radio bursts.

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
