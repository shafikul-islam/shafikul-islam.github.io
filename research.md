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
        My PhD research centers on <strong>Physical AI for controllable and certifiable metal additive manufacturing</strong>.
        I connect in-situ monitoring, process dynamics, uncertainty-aware learning, digital twins, and optimal control
        to support reliable process adjustments and quality assurance in WAAM, DED, and LPBF.
      </p>
      <div class="research-hero-badges">
        <span class="badge-pill badge-teal">Physical AI</span>
        <span class="badge-pill badge-green">Metal AM</span>
        <span class="badge-pill badge-purple">Physics-informed AI</span>
        <span class="badge-pill badge-amber">Optimal Control</span>
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
    <p class="section-subtitle">Three directions connecting process observation, control, and robotic manufacturing.</p>
  </div>

  <div class="direction-grid">
    <article class="direction-card">
      <div class="direction-head">
        <span class="direction-icon">🧭</span>
        <h3>Digital twins for monitoring and control</h3>
      </div>
      <p>
        A digital twin is most useful when it supports (i) <strong>state estimation</strong>, (ii) <strong>prediction</strong>,
        and (iii) <strong>process control</strong> under uncertainty. I study reduced-order process models and
        representation learning to connect in-situ measurements with layer-wise prediction and parameter adjustment,
        including linear-quadratic regulation and model predictive control.
      </p>
      <div class="direction-tags">
        <span class="tag-chip chip-teal">Digital Twin</span>
        <span class="tag-chip chip-blue">State Estimation</span>
        <span class="tag-chip chip-amber">Optimal Control</span>
      </div>
    </article>

    <article class="direction-card">
      <div class="direction-head">
        <span class="direction-icon">🧪</span>
        <h3>In-situ monitoring and uncertainty-aware learning</h3>
      </div>
      <p>
        Multimodal process measurements provide evidence of melt-pool behaviour and defect formation.
        I combine physics-guided learning with uncertainty estimation to study state changes, domain shift,
        and the reliability of predictions used for control and quality assurance.
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
        <h3>Robotics and manufacturing environment design</h3>
      </div>
      <p>
        I study how workspace layout and other manufacturing environment variables affect robot task performance.
        My direction combines physical experiments with digital-twin simulation in <strong>NVIDIA Omniverse</strong>
        to evaluate task success and explore robot–environment co-design.
      </p>
      <div class="direction-tags">
        <span class="tag-chip chip-teal">Robotics</span>
        <span class="tag-chip chip-amber">Simulation</span>
        <span class="tag-chip chip-blue">Co-design</span>
      </div>
    </article>
  </div>
</section>

<section class="research-section">
  <div class="section-head">
    <h2 class="section-title">Representative projects</h2>
    <p class="section-subtitle">Ongoing work and research directions in metal AM control and robotic manufacturing.</p>
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
        Investigating uncertainty-aware representations and process models for monitoring and control across toolpaths
        and part geometries. Related LPBF work uses reduced-order thermal states to compare LQR and MPC for layer-wise correction.
      </p>
      <div class="project-tags">
        <span class="tag-chip chip-amber">Metal AM</span>
        <span class="tag-chip chip-teal">Control</span>
        <span class="tag-chip chip-rose">Uncertainty</span>
      </div>
    </article>

    <article class="project-card">
      <div class="project-head">
        <span class="project-icon">🧠</span>
        <h3>Robot–environment co-design</h3>
      </div>
      <p>
        A research direction examining how manufacturing environments can be designed to improve robot task success.
        Planned physical trials and simulation studies vary environment parameters to support performance assessment and co-design.
      </p>
      <div class="project-tags">
        <span class="tag-chip chip-teal">Robotics</span>
        <span class="tag-chip chip-amber">Environment Design</span>
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
