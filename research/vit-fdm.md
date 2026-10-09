---
layout: tldr
title: "TL;DR: Vision transformers for FDM defects"
permalink: /research/vit-fdm/
kind: Journal article
short_title: Seeing the whole surface at once
paper_title: "Beyond local receptive fields: Vision transformers for real-time surface defect detection in FDM"
authors: Islam, M. S., Bappy, M. M., Tushar, S. R., et al.
venue: The International Journal of Advanced Manufacturing Technology, 2026
description: A plain-language, visual summary of vision transformers for real-time surface defect detection in fused deposition modeling.
tldr: >-
  Defects on 3D-printed surfaces are often subtle and spread out. Convolutional networks look at small local windows,
  so they can miss them. A vision transformer compares every part of the surface with every other part at once. Using
  depth maps from a laser scanner, it reaches a macro-F1 of 0.877 and a support-weighted mAUC of 0.972 while running in
  real time.
visual: tldr/vit.html
visual_title: Global self-attention over surface patches
problem: >-
  In fused deposition modeling (FDM), surface anomalies can be small and distributed across the part. CNN-based
  detectors have local receptive fields and strong built-in assumptions, so long-range patterns are hard for them to
  capture.
idea: >-
  Use a <strong>vision transformer (ViT)</strong>. It splits the surface into patches and uses <strong>global
  self-attention</strong>, so every patch can relate to every other patch. We feed it <strong>depth maps</strong> from 2D
  laser scanning, which describe the true surface shape.
steps:
  - title: Scan the surface
    text: A 2D laser scanner measures the printed surface.
  - title: Build a depth map
    text: Scans become a high-fidelity map of surface topology.
  - title: Cut into patches
    text: The depth map is split into small patches, like tiles.
  - title: Attend globally
    text: The transformer lets each patch attend to all others, linking spread-out defect patterns.
  - title: Classify the defect
    text: The model outputs the defect type, fast enough for real-time use.
stats:
  - { value: "0.877", unit: "", label: Macro-F1 }
  - { value: "0.972", unit: "", label: Support-weighted mAUC }
findings:
  - The optimized ViT classified key surface defect types accurately while sustaining real-time inference.
  - Global self-attention captured long-range, distributed anomalies that local filters struggle with.
why: >-
  Real-time surface inspection lets a printer, or the robot running it, stop or adjust a build early instead of
  finding defects after hours of printing.
links:
  - { label: DOI, url: "https://doi.org/10.1007/s00170-026-17846-8" }
  - { label: All publications, url: /publications/ }
---
