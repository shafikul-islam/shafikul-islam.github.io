---
layout: tldr
title: "TL;DR: Private graph learning for metal AM"
permalink: /research/private-graph-am/
kind: Preprint
short_title: Sharing factory data without giving away secrets
paper_title: Feature-Aware Anisotropic Local Differential Privacy for Utility-Preserving Graph Representation Learning in Metal Additive Manufacturing
authors: Islam, M. S., Bappy, M. M., Tushar, S. R., Arifuzzaman, M.
venue: Major revision at ASME Journal of Computing and Information Science in Engineering (JCISE). arXiv:2604.05077, 2026
status: Under major revision
description: A plain-language, visual summary of privacy-preserving graph learning for porosity detection in metal additive manufacturing.
tldr: >-
  Melt-pool images can detect pores in metal 3D printing, but companies do not want to share raw process data. We add
  privacy noise to each image's features before sharing, putting more noise where it matters least, then let a graph
  neural network compare neighboring spots in the same layer. Most of the accuracy survives, with a formal privacy
  guarantee for every sample.
visual: tldr/graph.html
visual_title: A build layer as a graph
problem: >-
  Pores weaken metal parts and shorten their fatigue life. Detecting them from in-process images works better with more
  data, but sharing thermal images across organizations can reveal process know-how. Many models also look at each
  image alone and ignore where it sits in the layer.
idea: >-
  Protect each sample with <strong>local differential privacy</strong> at the feature level, and allocate the noise
  <strong>unevenly</strong>: less noise on the features that matter for porosity, more on the rest. Then connect nearby
  observations into a <strong>graph</strong> so the model can use spatial context.
steps:
  - title: Encode each image
    text: A CNN turns every melt-pool image into a feature vector (an embedding).
  - title: Rank the features
    text: Grad-CAM estimates how important each feature channel is for detecting pores.
  - title: Add smart noise
    text: Gaussian noise is added per feature, with the privacy budget focused on informative directions instead of spread uniformly.
  - title: Build the graph
    text: Observations in the same build layer are linked to their k nearest neighbors, using both position and learned features.
  - title: Classify with attention
    text: A graph attention network (GATv2) labels each node as porous or not.
results_note: Compared with a non-private model and with uniform noise.
findings:
  - Feature-aware noise keeps much of the non-private model's accuracy while giving explicit, per-sample privacy guarantees.
  - Focusing the privacy budget on informative feature directions works better than adding the same noise everywhere.
  - Graph structure lets the model use layer-wise spatial context that single-image classifiers ignore.
why: >-
  It makes privacy-preserving quality assurance possible when several companies or service providers share additive
  manufacturing data, for example in AM-as-a-service platforms.
links:
  - { label: arXiv, url: "https://arxiv.org/abs/2604.05077" }
  - { label: All publications, url: /publications/ }
---
