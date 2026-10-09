// "Designing a world robots can work in": a 24 s loop rendered from a single
// timeline position t. render(t) is a pure function of t, so scene dots can jump
// anywhere and reduced motion can show one static frame.
(function () {
  "use strict";
  var root = document.getElementById("robotability");
  if (!root) return;
  var svg = root.querySelector("svg");
  var NS = "http://www.w3.org/2000/svg";
  var $ = function (id) { return document.getElementById(id); };

  var LOOP = 24;
  var SCENES = [0, 4, 10, 15, 20];
  var CAPTIONS = [
    "Same robot. Same AI. Hostile environment.",
    "Change the environment, not the robot.",
    "Test thousands of cell designs in simulation.",
    "Validate on the real robot. Feed results back.",
    "Make factories adapt to robots, not only robots adapt to factories."
  ];

  // ---------- math helpers ----------
  function clamp(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }
  function seg(t, a, b) { return clamp((t - a) / (b - a)); }
  function ease(x) { return x < .5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2; }
  function lerp(a, b, k) { return a + (b - a) * k; }
  function lerpP(p, q, k) { return [lerp(p[0], q[0], k), lerp(p[1], q[1], k)]; }
  function set(el, attrs) { for (var k in attrs) el.setAttribute(k, attrs[k]); }

  // ---------- robot geometry ----------
  var S = [100, 200], L1 = 120, L2 = 120, GRIP = 26;
  var HOME = [160, 150];
  function ik(tip) {
    var wx = tip[0], wy = tip[1] - GRIP;
    var dx = wx - S[0], dy = wy - S[1];
    var d = Math.min(Math.hypot(dx, dy), L1 + L2 - 0.01);
    var a = Math.atan2(dy, dx);
    var b = Math.acos((L1 * L1 + d * d - L2 * L2) / (2 * L1 * d));
    var t1 = a - b; // elbow up (y grows downward)
    return { elbow: [S[0] + L1 * Math.cos(t1), S[1] + L1 * Math.sin(t1)], wrist: [wx, wy] };
  }

  // Waypoint path: list of [time, point]; linear between eased segments.
  function path(t, pts) {
    if (t <= pts[0][0]) return pts[0][1];
    for (var i = 1; i < pts.length; i++) {
      if (t <= pts[i][0]) return lerpP(pts[i - 1][1], pts[i][1], ease(seg(t, pts[i - 1][0], pts[i][0])));
    }
    return pts[pts.length - 1][1];
  }

  // ---------- environment fixes (scene 2) ----------
  function fix(t, k) {
    if (t < 4) return 0;
    return ease(seg(t, 4.4 + 0.8 * k, 5.0 + 0.8 * k));
  }

  // ---------- ghost cells (scene 3) ----------
  var ghosts = [];
  function buildGhosts() {
    var g = $("rb-ghosts");
    while (g.firstChild) g.removeChild(g.firstChild);
    ghosts = [];
    var small = window.matchMedia("(max-width: 700px)").matches;
    var cols = small ? 5 : 8, rows = small ? 2 : 5;
    var seed = 3;
    function rnd() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        var x = 478 + c * (310 / cols), y = 24 + r * (270 / rows);
        var w = 310 / cols - 6, h = 270 / rows - 8;
        var cell = document.createElementNS(NS, "g");
        var box = document.createElementNS(NS, "rect");
        set(box, { x: x, y: y, width: w, height: h, rx: 4, "class": "rb-ghost" });
        var fx = document.createElementNS(NS, "rect");
        set(fx, { x: x + 4 + rnd() * (w - 16), y: y + h - 9, width: 10, height: 5, "class": "rb-ghost-fix" });
        var cam = document.createElementNS(NS, "circle");
        set(cam, { cx: x + 4 + rnd() * (w - 8), cy: y + 4 + rnd() * (h / 2), r: 2, "class": "rb-ghost-fix" });
        cell.appendChild(box); cell.appendChild(fx); cell.appendChild(cam);
        g.appendChild(cell);
        ghosts.push({ el: cell, rate: 4 + rnd() * 7, phase: rnd() * 6.28, keep: rnd() < 0.12 });
      }
    }
  }

  // ---------- render one frame ----------
  var partPos = [175, 243], partRot = 70;
  function render(t) {
    var f = [0, 1, 2, 3, 4, 5].map(function (k) { return fix(t, k); });
    var scene = t >= 20 ? 4 : t >= 15 ? 3 : t >= 10 ? 2 : t >= 4 ? 1 : 0;

    // lighting
    $("rb-light").setAttribute("opacity", lerp(0.05, 0.42, f[0]));
    $("rb-dim").setAttribute("opacity", lerp(0.26, 0, f[0]));
    // camera pose
    $("rb-cam").setAttribute("transform", "translate(0 " + lerp(70, 0, f[1]).toFixed(1) + ") rotate(" + lerp(-55, 0, f[1]).toFixed(1) + " 397 122)");
    $("rb-fov").setAttribute("opacity", f[1] * 0.9);
    // clutter
    $("rb-clutter").setAttribute("opacity", 1 - f[2]);
    // presentation nest
    var nestH = 12 * f[3];
    set($("rb-nest"), { y: 250 - nestH, height: nestH });
    // fixture chamfer and layout
    $("rb-pocket-sharp").setAttribute("opacity", 1 - f[4]);
    $("rb-pocket-chamfer").setAttribute("opacity", f[4]);
    var shift = -70 * f[5];
    $("rb-fixture").setAttribute("transform", "translate(" + shift.toFixed(1) + " 0)");
    var pocketX = 325 + shift;

    // gauge
    $("rb-gauge").setAttribute("opacity", t >= 4 ? 1 : 0);
    var fill = 160 * (f[0] + f[1] + f[2] + f[3] + f[4] + f[5]) / 6;
    set($("rb-gauge-fill"), { y: 230 - fill, height: fill });

    // scene 2 labels
    for (var k = 0; k < 6; k++) {
      var show = t >= 4 && t < 10 ? f[k] * (1 - seg(t, 9.5, 10)) : 0;
      $("rb-lab-" + k).setAttribute("opacity", show);
    }

    // ----- arm and part -----
    var tip = HOME, grip = 0, attached = false, flash = 0, seat = 0;
    var lyingStart = [175, 243], lyingRot = 70;
    var nestTop = 250 - nestH;
    if (scene === 0) {
      var aboveP = [175, 200], pick = [175, 222], lift = [175, 190], abovePk = [325, 196], hit = [325, 210];
      tip = path(t, [[0.3, HOME], [1.2, aboveP], [1.6, pick], [1.9, pick], [2.3, lift], [2.9, abovePk], [3.25, hit], [3.4, hit], [4, HOME]]);
      grip = t >= 1.6 && t < 3.3 ? 1 : 0;
      if (t < 1.6) { partPos = lyingStart; partRot = lyingRot; }
      else if (t < 3.3) { attached = true; partRot = lerp(70, 0, seg(t, 1.6, 1.9)); }
      else {
        // bounce off the sharp pocket edge and fall onto the table
        var k2 = seg(t, 3.3, 3.95);
        var x = lerp(325, 298, k2), y = 222 - 46 * Math.sin(Math.PI * Math.min(k2 * 1.15, 1)) + (k2 > .85 ? (k2 - .85) / .15 * 21 : 0);
        partPos = [x, Math.min(y, 243)]; partRot = lerp(0, -95, k2);
        flash = 1 - seg(t, 3.3, 3.9);
      }
    } else if (scene === 1 || scene === 2) {
      // part returns to its start and the nest stands it upright
      var back = seg(t, 4, 4.4);
      var upright = f[3];
      var restY = lerp(243, nestTop - 10, upright);
      partPos = t < 4.4 ? lerpP([298, 243], lyingStart, ease(back)) : [175, restY];
      partRot = t < 4.4 ? lerp(-95, 70, ease(back)) : lerp(70, 0, upright);
    } else {
      var t4 = t - 15;
      var pickUp = [175, nestTop - 20], aboveN = [175, 196], liftN = [175, 186], aboveK = [pocketX, 190], seated = [pocketX, 224 - 2];
      if (scene === 3) {
        tip = path(t4, [[0.8, HOME], [1.6, aboveN], [2.0, pickUp], [2.2, pickUp], [2.6, liftN], [3.3, aboveK], [3.8, seated], [3.95, seated], [4.6, HOME]]);
        grip = t4 >= 2.0 && t4 < 3.85 ? 1 : 0;
        if (t4 < 2.0) { partPos = [175, nestTop - 10]; partRot = 0; }
        else if (t4 < 3.85) attached = true;
        else { partPos = [pocketX, 234]; partRot = 0; }
        seat = seg(t4, 3.8, 4.0);
      } else {
        partPos = [pocketX, 234]; partRot = 0; seat = 1;
      }
    }

    var arm = ik(tip);
    set($("rb-l1"), { x1: S[0], y1: S[1], x2: arm.elbow[0].toFixed(1), y2: arm.elbow[1].toFixed(1) });
    set($("rb-l2"), { x1: arm.elbow[0].toFixed(1), y1: arm.elbow[1].toFixed(1), x2: arm.wrist[0].toFixed(1), y2: arm.wrist[1].toFixed(1) });
    set($("rb-j2"), { cx: arm.elbow[0].toFixed(1), cy: arm.elbow[1].toFixed(1) });
    $("rb-wrist").setAttribute("transform", "translate(" + arm.wrist[0].toFixed(1) + " " + arm.wrist[1].toFixed(1) + ")");
    var open = grip ? 0 : 3;
    $("rb-finger-l").setAttribute("transform", "translate(" + (-open) + " 0)");
    $("rb-finger-r").setAttribute("transform", "translate(" + open + " 0)");
    if (attached) { partPos = [tip[0], tip[1] + 10]; partRot = scene === 0 ? partRot : 0; }
    $("rb-part").setAttribute("transform", "translate(" + partPos[0].toFixed(1) + " " + partPos[1].toFixed(1) + ") rotate(" + partRot.toFixed(1) + ")");
    $("rb-flash").setAttribute("opacity", flash);
    $("rb-seat").setAttribute("class", seat > 0.5 ? "rb-seat on" : "rb-seat");

    // ----- digital twin and ghosts (scene 3+) -----
    var twinIn = ease(seg(t, 10, 11.2));
    $("rb-twin").setAttribute("opacity", twinIn);
    $("rb-twin").setAttribute("transform", "translate(" + lerp(-330, 0, twinIn).toFixed(1) + " 0)");
    var ghostOn = t >= 11 && t < 15.2;
    ghosts.forEach(function (g) {
      var o = 0;
      if (ghostOn) {
        var flick = 0.12 + 0.4 * Math.abs(Math.sin(t * g.rate + g.phase));
        var conv = seg(t, 13.4, 14.4);
        o = (g.keep ? lerp(flick, 0.9, conv) : lerp(flick, 0, conv)) * seg(t, 11, 11.4) * (1 - seg(t, 14.6, 15.2));
      }
      g.el.setAttribute("opacity", o.toFixed(2));
    });
    $("rb-twin").style.opacity = ghostOn && t < 14.4 ? 0.35 + 0.65 * seg(t, 13.4, 14.4) : "";
    $("rb-gold").setAttribute("opacity", ease(seg(t, 14.4, 14.9)));

    // ----- arrows -----
    var down = $("rb-arrow-down");
    var dl = 380;
    down.style.strokeDasharray = dl;
    down.style.strokeDashoffset = (dl * (1 - ease(seg(t, 15, 15.8)))).toFixed(1);
    down.setAttribute("opacity", t >= 15 ? 1 : 0);
    $("rb-arrow-back-g").setAttribute("opacity", ease(seg(t, 19, 19.6)));

    // ----- closing frame -----
    $("rb-loop").setAttribute("opacity", ease(seg(t, 20.3, 21.2)));
    $("rb-fade").setAttribute("opacity", Math.max(seg(t, 23.4, 24), 1 - seg(t, 0, 0.4)) * (t < 0.4 || t > 23.4 ? 1 : 0));

    // caption and dots
    if (scene !== lastScene) {
      lastScene = scene;
      $("rb-caption").textContent = CAPTIONS[scene];
      $("rb-caption").classList.toggle("is-final", scene === 4);
      dots.forEach(function (d, i) { d.setAttribute("aria-current", i === scene ? "step" : "false"); });
    }
  }

  // ---------- playback ----------
  var dots = Array.prototype.slice.call(root.querySelectorAll(".rb-dots button"));
  var lastScene = -1, t = 0, playing = true, visible = false, last = null;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var playBtn = $("rb-play");

  function setPlaying(p) {
    playing = p;
    root.classList.toggle("is-paused", !p);
    playBtn.setAttribute("aria-label", p ? "Pause animation" : "Play animation");
  }
  function frame(now) {
    if (playing && visible) {
      if (last !== null) t = (t + Math.min((now - last) / 1000, 0.1)) % LOOP;
      last = now;
      render(t);
    } else {
      last = null;
    }
    requestAnimationFrame(frame);
  }

  buildGhosts();
  if (reduce) {
    t = 22; setPlaying(false); render(t);
  } else {
    // Start just after the fade-in; "#rb=12" in the URL starts at another time (handy for checking scenes).
    var m = /rb=([\d.]+)/.exec(location.hash);
    t = m ? parseFloat(m[1]) : 0.45;
    render(t);
    if (/still/.test(location.hash)) setPlaying(false);
    requestAnimationFrame(frame);
  }

  playBtn.addEventListener("click", function () { setPlaying(!playing); if (!reduce && playing) last = null; });
  dots.forEach(function (d, i) {
    d.addEventListener("click", function () {
      t = reduce ? SCENES[i] + (i === 0 ? 3.6 : i === 1 ? 5.6 : i === 2 ? 4.6 : i === 3 ? 4.5 : 2) : SCENES[i] + 0.01;
      if (i === 0 && !reduce) t = 0.41;
      render(t);
    });
  });

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) { visible = entries[0].isIntersecting; }, { threshold: 0.15 }).observe(root);
  } else {
    visible = true;
  }
})();
