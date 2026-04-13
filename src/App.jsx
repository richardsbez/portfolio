import { useState, useEffect, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import * as THREE from "three";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from 'lenis'
import Resume from "./resume/Resume.jsx";
import Projects from "./projects/Projects.jsx";
import Ultralearn from './projects/ultralearn/Ultralearn.jsx';
import Waytrasnslate from './projects/waytranslate/Waytranslate.jsx';
import JSeeker from './projects/jseeker/JSeeker.jsx';
import Projectcoreshelll from './projects/projectcoreshelll/Projectcoreshelll.jsx';

import "./App.css";
import DATA, { LANGS, SKILLS } from "./i18n/index.js";
import Row from "./components/Row.jsx";

gsap.registerPlugin(ScrollTrigger);

/* ── HELPERS ── */
const isTouch = () =>
  typeof window !== "undefined" &&
  (window.matchMedia("(hover: none) and (pointer: coarse)").matches ||
    "ontouchstart" in window);

const isMobile = () =>
  typeof window !== "undefined" && window.innerWidth <= 960;

/* ── CUSTOM CURSOR ── */
function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Don't run on touch-only devices
    if (isTouch()) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let rafId;
    let moved = false;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      moved = true;
      dot.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
    };

    const lerp = () => {
      rafId = requestAnimationFrame(lerp);
      if (!moved) return;
      const dx = mx - rx;
      const dy = my - ry;
      if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) { moved = false; return; }
      rx += dx * 0.1;
      ry += dy * 0.1;
      ring.style.transform = `translate(${rx - 20}px, ${ry - 20}px)`;
    };

    const onEnter = () => ring.classList.add("cursor-ring--hover");
    const onLeave = () => ring.classList.remove("cursor-ring--hover");

    document.addEventListener("mousemove", onMove, { passive: true });
    rafId = requestAnimationFrame(lerp);

    const attachTo = (el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    };
    document.querySelectorAll("a, button, [data-cursor]").forEach(attachTo);

    const mo = new MutationObserver(() => {
      document.querySelectorAll("a, button, [data-cursor]").forEach(attachTo);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      mo.disconnect();
    };
  }, []);

  // Hide on touch devices
  if (isTouch()) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}

/* ── TICKER ── */
function Ticker({ items, dark = false, speed = 22 }) {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div className={`ticker${dark ? " ticker--dark" : ""}`}>
      <div className="ticker-track" style={{ "--ticker-duration": `${speed}s` }}>
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">
            {item}<span className="ticker-sep">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── HALF SCENE ── */
function HalfScene({ isRight = false }) {
  const boxRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    const SIZE = box.clientWidth || 480;
    let renderer, raf, isVisible = true;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, stencil: true });
    renderer.setSize(SIZE, SIZE);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    renderer.localClippingEnabled = true;
    box.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    cam.position.z = 7.0;

    const clipPlane = new THREE.Plane(
      isRight ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(-1, 0, 0),
      0
    );

    const knotGeom = new THREE.TorusKnotGeometry(1.2, 0.38, 120, 20, 2, 3);
    const ringGeom = new THREE.TorusGeometry(1.65, 0.007, 8, 64);

    const group = new THREE.Group();
    scene.add(group);

    const mBack = new THREE.MeshBasicMaterial({
      side: THREE.BackSide,
      clippingPlanes: [clipPlane],
      depthWrite: false, colorWrite: false,
      stencilWrite: true,
      stencilFunc: THREE.AlwaysStencilFunc,
      stencilFail: THREE.KeepStencilOp,
      stencilZFail: THREE.KeepStencilOp,
      stencilZPass: THREE.IncrementWrapStencilOp,
    });
    const meshBack = new THREE.Mesh(knotGeom, mBack);
    meshBack.renderOrder = 0;
    group.add(meshBack);

    const mFront = new THREE.MeshBasicMaterial({
      side: THREE.FrontSide,
      clippingPlanes: [clipPlane],
      depthWrite: false, colorWrite: false,
      stencilWrite: true,
      stencilFunc: THREE.AlwaysStencilFunc,
      stencilFail: THREE.KeepStencilOp,
      stencilZFail: THREE.KeepStencilOp,
      stencilZPass: THREE.DecrementWrapStencilOp,
    });
    const meshFront = new THREE.Mesh(knotGeom, mFront);
    meshFront.renderOrder = 0;
    group.add(meshFront);

    const wire = new THREE.Mesh(knotGeom, new THREE.MeshBasicMaterial({
      color: 0x18150F, wireframe: true, clippingPlanes: [clipPlane],
    }));
    wire.renderOrder = 2;
    group.add(wire);

    const capGeom = new THREE.PlaneGeometry(10, 10);
    capGeom.rotateY(Math.PI / 2);
    const cap = new THREE.Mesh(capGeom, new THREE.MeshBasicMaterial({
      color: 0xE5430A, depthWrite: false,
      stencilWrite: true, stencilRef: 0,
      stencilFunc: THREE.NotEqualStencilFunc,
      stencilFail: THREE.ZeroStencilOp,
      stencilZFail: THREE.ZeroStencilOp,
      stencilZPass: THREE.ZeroStencilOp,
    }));
    cap.renderOrder = 1;
    scene.add(cap);

    const ring = new THREE.Mesh(ringGeom, new THREE.MeshBasicMaterial({
      color: 0xE5430A, clippingPlanes: [clipPlane],
    }));
    ring.renderOrder = 2;
    scene.add(ring);

    const pts = [];
    for (let i = 0; i < 120; i++) {
      const θ = Math.random() * Math.PI * 2;
      const φ = Math.acos(2 * Math.random() - 1);
      const r = 2.1 + Math.random() * 1.2;
      pts.push(r * Math.sin(φ) * Math.cos(θ), r * Math.sin(φ) * Math.sin(θ), r * Math.cos(φ));
    }
    const pg = new THREE.BufferGeometry();
    pg.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
    scene.add(new THREE.Points(pg, new THREE.PointsMaterial({
      color: 0x9A9488, size: 0.02, clippingPlanes: [clipPlane],
    })));

    const tick = () => {
      if (!isVisible) { raf = requestAnimationFrame(tick); return; }
      raf = requestAnimationFrame(tick);
      const t = performance.now() * 0.001;
      group.rotation.x = t * 0.3;
      group.rotation.y = t * 0.5;
      ring.rotation.z = t * 0.4;
      renderer.render(scene, cam);
    };
    raf = requestAnimationFrame(tick);

    const io = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting; },
      { threshold: 0 }
    );
    io.observe(box);

    // Handle resize (e.g. orientation change)
    const onResize = () => {
      const sz = box.clientWidth;
      if (sz && sz !== renderer.domElement.width) {
        renderer.setSize(sz, sz);
        cam.updateProjectionMatrix();
      }
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", onResize);
      knotGeom.dispose();
      ringGeom.dispose();
      capGeom.dispose();
      renderer.dispose();
      if (box.contains(renderer.domElement)) box.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={boxRef} className={`half-scene-box${isRight ? " half-scene-box--right" : ""}`} />
  );
}

/* ── SCRAMBLE NAME ── */
const _SC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const rsc = () => _SC[Math.floor(Math.random() * _SC.length)];

const TARGET_1 = "RICHARD S.";
const TARGET_2 = "BEZERRA";

function renderScramble(target, resolved) {
  return target.split("").map((c, i) => {
    if (c === " ") return " ";
    if (resolved[i]) return c;
    return c === "." ? (Math.random() < 0.3 ? "." : rsc()) : rsc();
  }).join("");
}

function ScrambleName() {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const rafRef = useRef(null);

  const runScramble = () => {
    cancelAnimationFrame(rafRef.current);
    const res1 = new Array(TARGET_1.length).fill(false);
    const res2 = new Array(TARGET_2.length).fill(false);
    let ptr = 0;
    const total = TARGET_1.length + TARGET_2.length;
    let lastResolve = performance.now();
    const INTERVAL = 90;

    const loop = (now) => {
      if (now - lastResolve > INTERVAL && ptr < total) {
        lastResolve = now;
        if (ptr < TARGET_1.length) res1[ptr] = true;
        else res2[ptr - TARGET_1.length] = true;
        ptr++;
      }
      if (ptr >= total) {
        if (line1Ref.current) line1Ref.current.textContent = TARGET_1;
        if (line2Ref.current) line2Ref.current.textContent = TARGET_2;
        return;
      }
      if (line1Ref.current) line1Ref.current.textContent = renderScramble(TARGET_1, res1);
      if (line2Ref.current) line2Ref.current.textContent = renderScramble(TARGET_2, res2);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
  };

  useEffect(() => {
    runScramble();
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="sn-wrap" onMouseEnter={runScramble}>
      <span ref={line1Ref} className="sn-line sn-l1">{TARGET_1}</span>
      <span ref={line2Ref} className="sn-line sn-l2">{TARGET_2}</span>
      <div className="sn-rule" />
      <span className="sn-sub">
        <span className="sn-sub-dot" />
        FULL-STACK DEV · BRASIL · 2025
        <span className="sn-sub-dot" />
      </span>
    </div>
  );
}

/* ── HOME ── */
function Home({ lang, setLang }) {
  const t = DATA[lang];

  const s2Ref = useRef(null);
  const hOuter = useRef(null);
  const mantraRef = useRef(null);

  const s1PinRef = useRef(null);
  const leftHalfRef = useRef(null);
  const rightHalfRef = useRef(null);
  const heroNameRef = useRef(null);

  const lenisRef = useRef(null);
  const tickerFnRef = useRef(null);
  const navigate = useNavigate();

  const mantraRevealedRef = useRef(false);

  useEffect(() => {
    const mobile = isMobile();

    const lenis = new Lenis({
      duration: 1.35,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisRef.current = lenis;

    const tickerFn = (time) => lenis.raf(time * 1000);
    tickerFnRef.current = tickerFn;
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    /* ── S1 — PIN + SPLIT (desktop only) ── */
    const s1El = s1PinRef.current;
    if (!mobile && s1El && leftHalfRef.current && rightHalfRef.current && heroNameRef.current) {
      gsap.set(heroNameRef.current, { opacity: 0, y: 0 });

      const splitTl = gsap.timeline({
        scrollTrigger: {
          trigger: s1El,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 1.4,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      splitTl
        .to(leftHalfRef.current, { x: "-54vw", ease: "power2.inOut" }, 0)
        .to(rightHalfRef.current, { x: "54vw", ease: "power2.inOut" }, 0)
        .to(heroNameRef.current, { opacity: 1, duration: 0.7, ease: "power2.out" }, 0.2);
    } else if (mobile && heroNameRef.current) {
      // On mobile: show name immediately, no pin
      gsap.set(heroNameRef.current, { opacity: 1 });
    }

    /* ── S2 — reveal rows ── */
    if (s2Ref.current) {
      const dc = s2Ref.current;
      const tlR = dc.querySelectorAll(".q-tl .s2-row");
      const trR = dc.querySelectorAll(".q-tr .s2-row");
      const blR = dc.querySelectorAll(".q-bl .s2-row");
      const brR = dc.querySelectorAll(".q-br .s2-row");
      const brT = dc.querySelectorAll(".q-br .s2-tag");
      const bc = dc.querySelector(".s2-bc");
      const dot = dc.querySelector(".s2-dot");

      gsap.set([...tlR, ...trR, ...blR, ...brR, ...brT, bc, dot], { opacity: 0 });
      gsap.set([...tlR, ...blR], { x: -18 });
      gsap.set([...trR, ...brR], { x: 18 });
      gsap.set(brT, { y: 12 });

      const revealEls = [...tlR, ...trR, ...blR, ...brR, ...brT];
      const io2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, { opacity: 1, x: 0, y: 0, duration: 0.6, ease: "power2.out" });
            io2.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      if (bc) { gsap.set(bc, { opacity: 0 }); io2.observe(bc); }
      if (dot) { gsap.set(dot, { opacity: 0 }); io2.observe(dot); }
      revealEls.forEach(el => io2.observe(el));
    }

    /* ── Horizontal panels — DESKTOP only ── */
    const outerEl = hOuter.current;
    const trackEl = outerEl?.querySelector(".h-track");

    const revealMantra = () => {
      mantraRevealedRef.current = true;
      if (!mantraRef.current) return;
      const rows = mantraRef.current.querySelectorAll(".m-row");
      rows.forEach((el, i) => {
        if (el.dataset.animated) return;
        el.dataset.animated = "1";
        gsap.to(el, { opacity: 1, y: 0, duration: 0.85, ease: "power3.out", delay: i * 0.1 });
      });
    };

    if (!mobile && outerEl && trackEl) {
      requestAnimationFrame(() => ScrollTrigger.refresh());

      gsap.to(trackEl, {
        x: () => -window.innerWidth,
        ease: "none",
        scrollTrigger: {
          trigger: outerEl,
          start: "top top",
          end: () => `+=${window.innerWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (self.progress >= 0.4) revealMantra();
          },
        },
      });
    }

    /* ── S3 slide-in from right — mobile/tablet only ── */
    if (mobile && outerEl) {
      const s3El = outerEl.querySelector(".s3");
      if (s3El) {
        gsap.set(s3El, { x: "100vw" });
        let s3Animated = false;

        const checkS3 = () => {
          if (s3Animated) return;
          const rect = s3El.getBoundingClientRect();
          // rect.top usa a posição de layout (translateX não afeta o top)
          if (rect.top <= window.innerHeight * 0.88) {
            s3Animated = true;
            gsap.to(s3El, { x: 0, duration: 1.1, ease: "power3.out" });
            lenis.off("scroll", checkS3);
          }
        };

        lenis.on("scroll", checkS3);
      }
    }
    /* ── Manifesto rows initial state ── */
    if (mantraRef.current) {
      const rows = Array.from(mantraRef.current.querySelectorAll(".m-row"));

      if (mobile) {
        // Mobile: reveal with IntersectionObserver instead of horizontal scroll trigger
        gsap.set(rows, { opacity: 0, y: 30 });
        const mio = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              gsap.to(entry.target, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
              mio.unobserve(entry.target);
            }
          });
        }, { threshold: 0.15 });
        rows.forEach(r => mio.observe(r));
      } else if (mantraRevealedRef.current) {
        gsap.set(rows, { opacity: 1, y: 0 });
      } else {
        gsap.set(rows, { opacity: 0, y: 40 });
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            ScrollTrigger.refresh();
            const hST = ScrollTrigger.getAll().find(s => s.trigger === outerEl);
            if (hST && hST.progress >= 0.4) revealMantra();
          });
        });
      }
    }

    /* ── Handle resize: rebuild ScrollTrigger on orientation change ── */
    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 250);
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
      if (tickerFnRef.current) {
        gsap.ticker.remove(tickerFnRef.current);
        tickerFnRef.current = null;
      }
      lenis.destroy();
      ScrollTrigger.getAll().forEach(s => s.kill());
    };
  }, []);

  const cleanupAndNavigate = (href) => {
    if (tickerFnRef.current) {
      gsap.ticker.remove(tickerFnRef.current);
      tickerFnRef.current = null;
    }
    if (lenisRef.current) {
      lenisRef.current.destroy();
      lenisRef.current = null;
    }
    ScrollTrigger.getAll().forEach(s => s.kill());
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener");
    } else {
      navigate(href);
    }
  };

  const goToProjects = () => cleanupAndNavigate("/projects");
  const handleNav = (href) => cleanupAndNavigate(href);

  return (
    <>
      {/* ── NAV ── */}
      <nav className="nav anim-1">
        <div className="nav-inner">
          <span className="nav-logo">RSB</span>
          <div className="nav-right">
            <div className="nav-dot-wrap">
              <span className="nav-dot" />
              <span className="nav-status">{t.status}</span>
            </div>
            <div className="lang-switcher">
              {LANGS.map(({ code, label }) => (
                <button
                  key={code}
                  className={`btn-lang${lang === code ? " btn-lang--active" : ""}`}
                  onClick={() => setLang(code)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* ── S1 — HERO COM SPLIT 3D ── */}
      <section className="s1" ref={s1PinRef}>

        <div className="s1-grid" aria-hidden="true">
          <div className="s1-grid-h s1-grid-h1" />
          <div className="s1-grid-h s1-grid-h2" />
          <div className="s1-grid-v" />
        </div>

        <div className="s1-topbar anim-1">
          <span className="s1-topbar-tag">001 / HERO</span>
          <span className="s1-topbar-coords">23°33′S · 46°38′W · BRASIL</span>
        </div>

        <div className="s1-split-wrapper">

          <div className="s1-hero-name" ref={heroNameRef}>
            <ScrambleName />
          </div>

          <div className="s1-split-scene">
            <div className="split-half split-half--left" ref={leftHalfRef}>
              <HalfScene isRight={false} />
            </div>
            <div className="split-crack-3d" aria-hidden="true">
              <div className="split-crack-3d__face split-crack-3d__face--left" />
              <div className="split-crack-3d__face split-crack-3d__face--right" />
              <div className="split-crack-3d__core" />
            </div>
            <div className="split-half split-half--right" ref={rightHalfRef}>
              <HalfScene isRight={true} />
            </div>
          </div>

          <span className="s1-eyebrow-float anim-1">portfólio · richard s. bezerra</span>

        </div>

        <div className="s1-footer anim-3">
          <p className="s1-sub">{t.sub}</p>
          <div className="s1-footer-right">
            <div className="scroll-hint">
              <span className="scroll-line" />
              <span>scroll</span>
            </div>
            <span className="s1-year">© 2025</span>
          </div>
        </div>

        <div className="s1-accent-line" aria-hidden="true" />
        <div className="s1-crosshair" aria-hidden="true">
          <div className="s1-crosshair-dot" />
        </div>

      </section>

      {/* ── TICKER ── */}
      <Ticker items={t.ticker} speed={24} />

      {/* ── HORIZONTAL PANELS: S2 + S3 ── */}
      <div ref={hOuter} className="h-outer">
        <div className="h-track">

          {/* ── PANEL S2 ── */}
          <div ref={s2Ref} className="s2 h-panel">
            <div className="s2-vline" />
            <button className="s2-proj-link" onClick={goToProjects}>
              {t.projects}
            </button>
            <div className="s2-hline" />
            <p className="s2-bc">{t.bc}</p>
            <div className="s2-grid">
              <div className="s2-quad top q-tl">
                <p className="s2-ql">{t.prof.ey}</p>
                {t.prof.rows.map((r, i) => (
                  <Row
                    key={i}
                    r={r}
                    valueClass={`s2-v${r.em ? " em" : ""}`}
                    onNavigate={r.href && !r.href.startsWith("http") ? () => handleNav(r.href) : undefined}
                  />
                ))}
              </div>
              <div className="s2-quad top q-tr">
                <p className="s2-ql">{t.pes.ey}</p>
                {t.pes.rows.map((r, i) => (
                  <Row key={i} r={r} valueClass="s2-v" />
                ))}
              </div>
              <div className="s2-quad q-bl">
                <p className="s2-ql">{t.cont.ey}</p>
                {t.cont.rows.map((r, i) => (
                  <Row key={i} r={r} valueClass="s2-v" />
                ))}
              </div>
              <div className="s2-quad q-br">
                <p className="s2-ql">{t.con.ey}</p>
                <div className="s2-tags-wrap">
                  {SKILLS.map((skill, i) => (
                    <span key={i} className="s2-tag">
                      {skill.icon ? (
                        <img
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}.svg`}
                          alt={skill.name}
                          className="s2-tag-icon"
                          onError={e => { e.currentTarget.style.display = "none"; }}
                        />
                      ) : (
                        <span className="s2-tag-dot" />
                      )}
                      {skill.name}
                    </span>
                  ))}
                </div>
                <div className="s2-dot"><div className="s2-dot-inner" /></div>
              </div>
            </div>
          </div>

          {/* ── PANEL S3 ── */}
          <section className="s3 h-panel">
            <div className="s3-transit">
              <span className="s3-eyebrow">003 / manifesto</span>
              <div className="s3-transit-rule" />
              <span className="s3-year">RSB</span>
            </div>
            <div ref={mantraRef}>
              {t.mantra.map((line, i) => {
                const isLast = i === t.mantra.length - 1;
                const tags = ["medo", "fascínio", "senna"];
                return (
                  <div key={i} className={`m-row${isLast ? " m-last" : ""}`}>
                    <div className="m-num">
                      <span className="m-num-text">0{i + 1}</span>
                    </div>
                    <div className="m-body">
                      <span className="m-text">{line}</span>
                      {!isLast && <span className="m-tag">{tags[i]}</span>}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="s3-strip">
              <div className="s3-strip-l">
                <span className="s3-strip-dot" />
                <span className="s3-strip-txt">{t.status}</span>
              </div>
              <span className="s3-strip-r">Richard S. Bezerra</span>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}

/* ── APP ── */
export default function App() {
  const [lang, setLang] = useState("PT");

  return (
    <>
      <Cursor />
      <div className="grain" aria-hidden="true" />
      <Routes>
        <Route path="/" element={<Home lang={lang} setLang={setLang} />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/ultralearn" element={<Ultralearn />} />
        <Route path="/projects/waytranslate" element={<Waytrasnslate />} />
        <Route path="/projects/jseeker" element={<JSeeker />} />
        <Route path="/projects/projectcoreshelll" element={<Projectcoreshelll />} />
      </Routes>
    </>
  );
}
