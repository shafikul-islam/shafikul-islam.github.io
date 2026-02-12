---
layout: default
title: Research
permalink: /research/
nav: true
nav_order: 10
---

<section class="research-hero">
  <div class="research-hero-inner">
    <div class="research-hero-text">
      <h1 class="research-hero-title">Research overview</h1>
      <p class="research-hero-lead">
        My work targets <strong>closed-loop cyber-physical intelligence</strong> in additive manufacturing: learning models that are coupled with sensing, dynamics,
        uncertainty quantification, and actionable control policies. The long-term goal is reliable, human-centered autonomy in production systems.
      </p>
      <div class="research-hero-badges">
        <span class="badge-pill badge-teal">Closed-loop CPS</span>
        <span class="badge-pill badge-green">Additive Manufacturing</span>
        <span class="badge-pill badge-purple">Physics-informed AI</span>
        <span class="badge-pill badge-amber">Human-centered Manufacturing</span>
      </div>
    </div>
    <div class="research-hero-media">
      <img src="{{ site.baseurl }}/assets/images/research-overview-collage.png" alt="Research overview collage spanning machine learning, cyber-physical systems, and additive manufacturing">
    </div>
  </div>
</section>

<section class="research-section">
  <div class="section-head">
    <h2 class="section-title">Research directions</h2>
    <p class="section-subtitle">Three pillars that guide my work from foundational models to deployment.</p>
  </div>

  <div class="direction-grid">
    <article class="direction-card">
      <div class="direction-head">
        <span class="direction-icon">🧭</span>
        <h3>Digital twins for monitoring and control</h3>
      </div>
      <p>
        A digital twin is most useful when it supports (i) <strong>state estimation</strong>, (ii) <strong>prediction</strong>,
        and (iii) <strong>decision support</strong> under uncertainty. My focus is to build twins that remain valid across geometry
        and operating regimes by combining representation learning with physics-aware constraints and uncertainty estimates.
      </p>
      <div class="direction-tags">
        <span class="tag-chip chip-teal">Digital Twin</span>
        <span class="tag-chip chip-blue">State Estimation</span>
        <span class="tag-chip chip-amber">Decision Support</span>
      </div>
    </article>

    <article class="direction-card">
      <div class="direction-head">
        <span class="direction-icon">🧪</span>
        <h3>Physics-informed and uncertainty-aware learning</h3>
      </div>
      <p>
        Data scarcity and domain shift are structural constraints in manufacturing. I use physics-informed losses/priors together with
        uncertainty estimation to obtain models that (a) generalize, (b) expose confidence, and (c) enable risk-bounded actions.
      </p>
      <div class="direction-tags">
        <span class="tag-chip chip-purple">Physics-informed</span>
        <span class="tag-chip chip-rose">Uncertainty</span>
        <span class="tag-chip chip-green">Robustness</span>
      </div>
    </article>

    <article class="direction-card">
      <div class="direction-head">
        <span class="direction-icon">🧑‍🏭</span>
        <h3>Human-facing and edge AI (Physical AI)</h3>
      </div>
      <p>
        For deployment, models must run at the edge and communicate decisions in a form that engineers can audit.
        I am interested in <strong>human–AI collaboration</strong> for CPS, where model outputs are paired with explanations,
        failure modes, and recommended actions rather than only predictions.
      </p>
      <div class="direction-tags">
        <span class="tag-chip chip-teal">Edge AI</span>
        <span class="tag-chip chip-amber">Human-AI</span>
        <span class="tag-chip chip-blue">Auditability</span>
      </div>
    </article>
  </div>
</section>

<section class="research-section">
  <div class="section-head">
    <h2 class="section-title">Representative projects</h2>
    <p class="section-subtitle">A snapshot of ongoing and recent projects across AM, CPS, and AI.</p>
  </div>

  <div class="project-grid">
    <article class="project-card">
      <div class="project-head">
        <span class="project-icon">🛰️</span>
        <h3>Physics-Informed ML for WAAM defect detection</h3>
      </div>
      <p>
        Multimodal in-situ sensing (IR, optical, electrical) for layer-wise melt-pool characterization, with physics-guided learning for
        porosity/anomaly detection and downstream validation.
      </p>
      <div class="project-tags">
        <span class="tag-chip chip-teal">WAAM</span>
        <span class="tag-chip chip-blue">In-situ Sensing</span>
        <span class="tag-chip chip-purple">Physics-informed ML</span>
      </div>
    </article>

    <article class="project-card">
      <div class="project-head">
        <span class="project-icon">🧩</span>
        <h3>Geometry-invariant melt-pool control</h3>
      </div>
      <p>
        Learning representations that are stable across toolpaths and part geometry, enabling transferable monitoring and control policies.
      </p>
      <div class="project-tags">
        <span class="tag-chip chip-amber">CPS</span>
        <span class="tag-chip chip-teal">Control</span>
        <span class="tag-chip chip-rose">Uncertainty</span>
      </div>
    </article>

    <article class="project-card">
      <div class="project-head">
        <span class="project-icon">🧠</span>
        <h3>ArcAssist: multimodal edge AI co-pilot</h3>
      </div>
      <p>
        A human-facing interface that summarizes process state, model confidence, and recommended interventions for operators,
        aiming for reliable decision support in the loop.
      </p>
      <div class="project-tags">
        <span class="tag-chip chip-teal">Edge AI</span>
        <span class="tag-chip chip-amber">Human-AI</span>
        <span class="tag-chip chip-blue">Digital Twin</span>
      </div>
    </article>

    <article class="project-card">
      <div class="project-head">
        <span class="project-icon">🧱</span>
        <h3>Fatigue modeling linked to process signatures</h3>
      </div>
      <p>
        Physics-guided sequence modeling that connects defect signatures to structural performance, supporting quality assurance beyond classification.
      </p>
      <div class="project-tags">
        <span class="tag-chip chip-green">Reliability</span>
        <span class="tag-chip chip-purple">Sequence Models</span>
        <span class="tag-chip chip-amber">Physics-guided</span>
      </div>
    </article>
  </div>
</section>
