import { useState, useEffect, useRef } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import * as THREE from "three";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Resume from "./resume/Resume.jsx";
import Projects from "./projects/Projects.jsx";
import Ultralearn from './projects/ultralearn/Ultralearn.jsx';

import "./App.css";
import DATA, { LANGS, SKILLS } from "./i18n/index.js";
import Row from "./components/Row.jsx";

gsap.registerPlugin(ScrollTrigger);

const PAPER_HEX = 0xF4EFE6;

/* ── CUSTOM CURSOR ── */
function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let rafId;

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
    };

    const lerp = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      ring.style.transform = `translate(${rx - 20}px, ${ry - 20}px)`;
      rafId = requestAnimationFrame(lerp);
    };

    const onEnter = () => ring.classList.add("cursor-ring--hover");
    const onLeave = () => ring.classList.remove("cursor-ring--hover");

    document.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(lerp);

    const attachListeners = () => {
      document.querySelectorAll("a, button, [data-cursor]").forEach(el => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    attachListeners();

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

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

/* ── THREE.JS SCENE ── */
function Scene3D() {
  const boxRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    let renderer, raf;

    const id = requestAnimationFrame(() => {
      const W = box.clientWidth || 600;
      const H = box.clientHeight || 600;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(W, H);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      box.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const cam = new THREE.PerspectiveCamera(42, W / H, 0.1, 100);
      cam.position.z = 7.0;

      const knot = new THREE.Mesh(
        new THREE.TorusKnotGeometry(1.2, 0.38, 128, 16, 2, 3),
        new THREE.MeshBasicMaterial({ color: 0x18150F, wireframe: true })
      );
      scene.add(knot);

      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(1.65, 0.007, 8, 80),
        new THREE.MeshBasicMaterial({ color: 0xE5430A })
      );
      scene.add(ring);

      const pts = [];
      for (let i = 0; i < 200; i++) {
        const θ = Math.random() * Math.PI * 2;
        const φ = Math.acos(2 * Math.random() - 1);
        const r = 2.1 + Math.random() * 1.2;
        pts.push(r * Math.sin(φ) * Math.cos(θ), r * Math.sin(φ) * Math.sin(θ), r * Math.cos(φ));
      }
      const pg = new THREE.BufferGeometry();
      pg.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
      scene.add(new THREE.Points(pg, new THREE.PointsMaterial({ color: 0x9A9488, size: 0.02 })));

      const tick = () => {
        raf = requestAnimationFrame(tick);
        knot.rotation.x += 0.003; knot.rotation.y += 0.005;
        ring.rotation.z += 0.004;
        renderer.render(scene, cam);
      };
      tick();
    });

    return () => {
      cancelAnimationFrame(id);
      cancelAnimationFrame(raf);
      if (renderer && box.contains(renderer.domElement)) {
        renderer.dispose();
        box.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={boxRef} style={{ width: "100%", height: "100%" }} />;
}

/* ── MATRIX NAME ── */
const _MC = "アイウエオカキクケコサシスセソタチツテト0123456789RICHADSBEZERAXYZ@#$%&=+~?!";
const rmc = () => _MC[Math.floor(Math.random() * _MC.length)];

function sampleText(line, font, fontSize, threshold = 80) {
  const CELL = 11;
  const tmp = document.createElement("canvas");
  const ctx = tmp.getContext("2d");
  ctx.font = font;
  const tw = Math.ceil(ctx.measureText(line).width);
  const W = tw + CELL * 4;
  const H = Math.ceil(fontSize * 1.4);
  tmp.width = W; tmp.height = H;
  ctx.font = font;
  ctx.textBaseline = "top";
  ctx.fillStyle = "#fff";
  ctx.fillText(line, CELL, 0);
  const { data } = ctx.getImageData(0, 0, W, H);
  const pts = [];
  for (let y = 0; y < H; y += CELL)
    for (let x = 0; x < W; x += CELL) {
      const cx = Math.min(x + (CELL >> 1), W - 1);
      const cy = Math.min(y + (CELL >> 1), H - 1);
      if (data[(cy * W + cx) * 4 + 3] > threshold) pts.push({ x, y });
    }
  return { pts, W, H, CELL };
}

function MatrixName() {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const stateRef = useRef({ hovered: false, particles: [], raf: null });

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const st = stateRef.current;
    const CELL = 11;
    const INK = "#18150F";
    const EMB = "#E5430A";
    const FOG = "#9A9488";

    const init = () => {
      const vw = window.innerWidth;
      const fs = Math.max(61, Math.min(104, vw * 0.07));
      const font = `900 ${fs}px "Barlow Condensed", sans-serif`;
      const LINE_H = Math.ceil(fs * 1.08);

      const { pts: pts1, W: W1, H: H1 } = sampleText("Richard S.", font, fs);
      const { pts: pts2, W: W2, H: H2 } = sampleText("Bezerra", font, fs);

      const CW = Math.max(W1, W2) + CELL;
      const CH = H1 + LINE_H + H2 + CELL;

      canvas.width = CW; canvas.height = CH;
      canvas.style.width = CW + "px"; canvas.style.height = CH + "px";
      wrap.style.width = CW + "px"; wrap.style.height = CH + "px";

      st.particles = [];
      const add = (pts, offY) => pts.forEach(p => st.particles.push({
        tx: p.x, ty: p.y + offY, x: p.x, y: p.y + offY,
        vx: 0, vy: 0, char: rmc(),
        timer: Math.random() * 200, nextSwap: 60 + Math.random() * 180,
        alpha: 0.72 + Math.random() * 0.28,
      }));
      add(pts1, 0); add(pts2, LINE_H);
    };

    const loop = () => {
      const ctx = canvas.getContext("2d");
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      const tick = () => {
        st.raf = requestAnimationFrame(tick);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = `${CELL - 1}px "IBM Plex Mono", monospace`;

        for (const p of st.particles) {
          p.timer += 16;
          if (p.timer > p.nextSwap) {
            p.timer = 0; p.nextSwap = 55 + Math.random() * 180;
            p.char = rmc(); p.alpha = 0.6 + Math.random() * 0.4;
          }
          if (st.hovered) {
            const dx = p.x - cx, dy = p.y - cy;
            const len = Math.hypot(dx, dy) || 1;
            p.vx += (dx / len) * 1.4; p.vy += (dy / len) * 1.4;
            p.vx *= 0.88; p.vy *= 0.88;
          } else {
            p.vx += (p.tx - p.x) * 0.12; p.vy += (p.ty - p.y) * 0.12;
            p.vx *= 0.68; p.vy *= 0.68;
          }
          p.x += p.vx; p.y += p.vy;

          const r = Math.random();
          ctx.fillStyle = r < 0.025 ? EMB : r < 0.07 ? FOG : INK;
          ctx.globalAlpha = st.hovered ? 0.2 + Math.random() * 0.8 : p.alpha;
          ctx.fillText(p.char, p.x, p.y + CELL);
        }
        ctx.globalAlpha = 1;
      };
      tick();
    };

    const fontSpec = `900 80px "Barlow Condensed"`;
    document.fonts.load(fontSpec).then(() => {
      requestAnimationFrame(() => { init(); loop(); });
    });

    const onEnter = () => { st.hovered = true; };
    const onLeave = () => { st.hovered = false; };
    const onResize = () => {
      cancelAnimationFrame(st.raf);
      document.fonts.load(fontSpec).then(() =>
        requestAnimationFrame(() => { init(); loop(); })
      );
    };

    wrap.addEventListener("mouseenter", onEnter);
    wrap.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(st.raf);
      wrap.removeEventListener("mouseenter", onEnter);
      wrap.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div ref={wrapRef} className="mx-wrap">
      <canvas ref={canvasRef} className="mx-canvas" />
    </div>
  );
}

/* ── HOME ── */
function Home({ lang, setLang }) {
  const t = DATA[lang];
  const s2Ref = useRef(null); // agora aponta pro h-track
  const hOuter = useRef(null); // wrapper pinado
  const mantraRef = useRef(null);
  const navigate = useNavigate();
  const lenisRef = useRef(null);   // ← NOVO




  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.35,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisRef.current = lenis;
    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // ── S2 reveal (IntersectionObserver, sem pin) ──
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
      }, { threshold: 0.15 });

      if (bc) { gsap.set(bc, { opacity: 0 }); io2.observe(bc); }
      if (dot) { gsap.set(dot, { opacity: 0 }); io2.observe(dot); }
      revealEls.forEach(el => io2.observe(el));
    }

    // ── Horizontal panel: S2 → S3 ──
    const outerEl = hOuter.current;
    const trackEl = outerEl?.querySelector(".h-track");

    if (outerEl && trackEl) {
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
        },
      });
    }

    // ── S3 manifesto reveal ──
    const rows = mantraRef.current
      ? Array.from(mantraRef.current.querySelectorAll(".m-row"))
      : [];

    rows.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
      el.style.transition = `opacity .85s cubic-bezier(.16,1,.3,1) ${i * 0.1}s,
                            transform .85s cubic-bezier(.16,1,.3,1) ${i * 0.1}s`;
    });

    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    rows.forEach(el => io.observe(el));

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(s => s.kill());
      io.disconnect();
    };
  }, [lang]);

  const tickerItems = t.ticker;

  const goToProjects = () => {
    if (lenisRef.current) lenisRef.current.destroy();
    ScrollTrigger.getAll().forEach(s => s.kill());
    navigate("/projects");
  };

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

      {/* ── S1 — EDITORIAL HERO ── */}
      <section className="s1">

        {/* Grid editorial de fundo */}
        <div className="s1-grid" aria-hidden="true">
          <div className="s1-grid-h s1-grid-h1" />
          <div className="s1-grid-h s1-grid-h2" />
          <div className="s1-grid-v" />
        </div>

        {/* 3D scene */}
        <div className="s1-canvas-bg" aria-hidden="true">
          <Scene3D />
        </div>

        {/* Barra superior editorial */}
        <div className="s1-topbar anim-1">
          <span className="s1-topbar-tag">001 / HERO</span>
          <span className="s1-topbar-coords">23°33′S · 46°38′W · BRASIL</span>
        </div>

        {/* Centro — nome dominante */}
        <div className="s1-center">
          <span className="eyebrow anim-1">portfólio · richard s. bezerra</span>
          <div className="s1-name-wrap anim-2">
            <MatrixName />
          </div>
        </div>

        {/* Rodapé da seção */}
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


        {/* Linha de acento vertical esquerda */}
        <div className="s1-accent-line" aria-hidden="true" />

        {/* Ponto de interseção central */}
        <div className="s1-crosshair" aria-hidden="true">
          <div className="s1-crosshair-dot" />
        </div>

      </section>

      {/* ── TICKER ── */}
      <Ticker items={tickerItems} speed={24} />

      {/* ── HORIZONTAL PANELS: S2 + S3 ── */}
      <div ref={hOuter} className="h-outer">
        <div className="h-track">

          {/* ── PANEL S2 ── */}
          <div ref={s2Ref} className="s2 h-panel">
            <div className="s2-vline" />
            <button
              className="s2-proj-link"
              onClick={goToProjects}
            >
              {t.projects}
            </button>
            <div className="s2-hline" />
            <p className="s2-bc">{t.bc}</p>
            <div className="s2-grid">
              <div className="s2-quad top q-tl">
                <p className="s2-ql">{t.prof.ey}</p>
                {t.prof.rows.map((r, i) => (
                  <Row key={i} r={r} valueClass={`s2-v${r.em ? " em" : ""}`} />
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
              <span className="s3-year">RSB — 2025</span>
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
      </div>   </>
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
      </Routes>
    </>
  );
}
