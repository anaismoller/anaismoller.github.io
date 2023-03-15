---
layout: page
title: Fink broker
description: empowering transient science in the big data era
img: /assets/img/fink.png
importance: 1
category: work
---

<div class="row justify-content-sm-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        <!-- {% include figure.html path="assets/img/fink-portal.jpg" title="Science portal" class="img-fluid rounded z-depth-1" %} -->
        {% include figure.html path="assets/img/fink-LSST_Fink_2020.jpg" title="LSST Fink" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

[Fink](http://fink-broker.org) is a community and international collaboration. Fink was founded in 2019 by Emille Ishida, Julien Peloton and myself, with the goal of doing big data time-domain astronomy!

Fink broker is our "infrastructure". Fink processes big data streams of transient detections, connects them to other data and filters the most promising transients for a variety of science. We have been selected as community broker to receive all transients detected by the Vera C. Rubin Observatory LSST, the biggest optical survey in the world!

Fink is designed for fast and efficient analysis of big data and uses state-of-the-art technologies as machine-learning and distributed computing to enable broad research. From the million candidates that Rubin will detect every night, Fink will select the most promising for different science cases and communicate them in real-time to follow-up and research teams.

We are currently deployed processing ZTF II public alert stream that you can access in our science portal [http://fink-portal.org](http://fink-portal.org). Our architecture and first science results with ZTF have been published in [Möller, Peloton, Ishida et al. MNRAS 2020](https://arxiv.org/abs/2009.10185). More publications from the Fink Collaboration can be found [here](https://fink-broker.org/papers/).

It is the coolest broker ever, powered by [Apache Spark](https://spark.apache.org).
