---
layout: page
permalink: /publications/
title: publications
description: My publications, in reverse chronological order
years: [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014]
nav: true
# nav_order: 1
---
For the automatically updated list please use
[ORCID publication list](https://orcid.org/0000-0001-8211-8608)

<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
