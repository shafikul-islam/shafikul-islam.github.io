---
layout: tldr
title: "Summary: Vision transformers for real-time FDM surface defect detection"
permalink: /research/vit-fdm/
kind: Journal article
short_title: Global self-attention for surface defect detection in FDM
paper_title: "Beyond local receptive fields: Vision transformers for real-time surface defect detection in FDM"
authors: Islam, M. S., Bappy, M. M., Tushar, S. R., et al.
venue: The International Journal of Advanced Manufacturing Technology, 2026
description: Research summary of vision transformers for real-time surface defect detection in fused deposition modeling.
method_image: /assets/images/research/fdm_methodology.png
method_caption: "Methodology: depth-map label mapping, patch tokenization, ViT fine-tuning, post-hoc explainability (attention maps, Grad-CAM, t-SNE/UMAP), and comparison with ResNet-50, YOLOv5, and a shallow MLP."
tldr: >-
  Surface anomalies in fused deposition modeling are often subtle and spatially distributed, which limits CNNs with local
  receptive fields. We present an optimized vision transformer that operates on depth maps from 2D laser scanning and uses
  global self-attention to model long-range dependencies across the surface. It achieves a macro-F1 of 0.877 and a
  support-weighted mAUC of 0.972 while sustaining real-time inference.
visual: tldr/vit.html
visual_title: global self-attention over surface patches
problem: >-
  Conventional defect detectors in FDM struggle with anomalies that extend across the printed surface, because their
  localized receptive fields and strong inductive biases emphasize nearby pixels over global structure.
idea: >-
  Replace local convolution with a <strong>vision transformer</strong>. Splitting the surface into patches and applying
  <strong>global self-attention</strong> lets every region inform every other region. <strong>Depth maps</strong> from
  laser scanning provide a direct, high-fidelity description of surface topology.
steps:
  - title: Laser scanning
    text: A 2D laser profiler measures the printed surface.
  - title: Depth-map construction
    text: Scan lines are assembled into a high-resolution surface topology representation.
  - title: Patch embedding
    text: The depth map is partitioned into patches and embedded as tokens.
  - title: Global self-attention
    text: Transformer layers model long-range dependencies between all patches.
  - title: Defect classification
    text: The model predicts the defect class in real time, with explainability analysis of the attention.
stats:
  - { value: "0.877", unit: "", label: Macro-F1 }
  - { value: "0.972", unit: "", label: Support-weighted mAUC }
findings:
  - The optimized ViT classified key FDM surface defect types accurately while sustaining real-time inference.
  - Global self-attention captured spatially distributed anomalies that are difficult for local receptive fields.
why: >-
  Reliable real-time surface inspection allows a printer, or the robot operating it, to intervene during a build rather
  than discover defects after hours of fabrication, which reduces scrap and inspection cost.
links:
  - { label: DOI, url: "https://doi.org/10.1007/s00170-026-17846-8" }
  - { label: All publications, url: /publications/ }
---
