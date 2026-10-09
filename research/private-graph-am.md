---
layout: tldr
title: "Summary: Feature-aware local differential privacy for graph learning in metal AM"
permalink: /research/private-graph-am/
kind: Preprint
short_title: Privacy-preserving graph learning for porosity detection
paper_title: Feature-Aware Anisotropic Local Differential Privacy for Utility-Preserving Graph Representation Learning in Metal Additive Manufacturing
authors: Islam, M. S., Bappy, M. M., Tushar, S. R., Arifuzzaman, M.
venue: Major revision at ASME Journal of Computing and Information Science in Engineering (JCISE). arXiv:2604.05077, 2026
status: Under major revision
description: Research summary of feature-aware anisotropic local differential privacy for graph-based porosity detection in metal additive manufacturing.
method_image: /assets/images/research/gnn_methods.png
method_caption: "Graph attention network that classifies each node of the layer-wise melt-pool graph as porous or non-porous."
tldr: >-
  In-process melt-pool data improve porosity detection, but sharing it across organizations exposes process know-how. We
  apply local differential privacy at the embedding level and allocate noise anisotropically, guided by Grad-CAM channel
  importance, before building a layer-wise graph for a GATv2 classifier. The approach retains much of the non-private
  utility while providing an explicit per-sample privacy guarantee.
visual: tldr/graph.html
visual_title: a build layer as a graph
problem: >-
  Porosity reduces fatigue life and structural integrity in laser-based additive manufacturing. Data-driven detectors
  benefit from pooled in-process data, yet thermal and optical frames can reveal proprietary process information. In
  addition, many models classify melt-pool observations independently and ignore their spatial context within a layer.
idea: >-
  Privatize each observation <strong>locally, before it is shared</strong>, and make the noise <strong>feature-aware and
  anisotropic</strong>: the privacy budget is concentrated on informative directions instead of being spread uniformly.
  A <strong>graph attention network</strong> then exploits neighborhood structure among observations in the same layer.
steps:
  - title: Embedding
    text: A CNN encodes each melt-pool frame into a feature vector.
  - title: Channel importance
    text: Grad-CAM estimates how strongly each embedding channel contributes to porosity prediction.
  - title: Anisotropic local DP
    text: Gaussian noise is allocated per coordinate according to channel importance, giving a per-sample privacy guarantee.
  - title: Graph construction
    text: Observations within a build layer are linked by k-nearest neighbors in a hybrid space of coordinates and features.
  - title: Node classification
    text: A node-level GATv2 classifies each observation as porous or sound.
results_note: Compared against a non-private baseline and a uniform local DP baseline.
findings:
  - Feature-aware local DP retains much of the non-private model's utility while offering explicit per-sample privacy.
  - Concentrating the privacy budget on informative directions outperforms uniform noise allocation at comparable privacy.
  - The graph formulation captures layer-wise spatial context that independent image classifiers do not use.
why: >-
  The method supports privacy-preserving quality assurance in multi-stakeholder settings, such as AM-as-a-service
  platforms, where participants benefit from shared models but cannot share raw process data.
links:
  - { label: arXiv, url: "https://arxiv.org/abs/2604.05077" }
  - { label: All publications, url: /publications/ }
---
