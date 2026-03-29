import { Component, createRef } from "react";

/* ─────────────────────────────────────────────
   Só keyframes e pseudo-elementos aqui —
   tudo que CSS inline não consegue fazer
───────────────────────────────────────────── */
const KEYFRAMES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=IBM+Plex+Mono:wght@300;400;500;700&display=swap');

  @keyframes lsCurtain {
    to { clip-path: inset(0 0 100% 0); }
  }
  @keyframes lsRot    { to { transform: rotate( 360deg); } }
  @keyframes lsRotR   { to { transform: rotate(-360deg); } }
  @keyframes lsPulse  { 0%,100%{opacity:.04} 50%{opacity:.13} }
  @keyframes lbIn     { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:none} }
  @keyframes gA {
    0%,89%,100%{transform:none;opacity:0}
    90%{transform:translateX(-4px) skewX(-1.5deg);opacity:1}
    95%{transform:translateX(2px);opacity:1}
    98%{transform:none;opacity:0}
  }
  @keyframes gB {
    0%,85%,100%{transform:none;opacity:0}
    86%{transform:translateX(5px);opacity:1}
    91%{transform:translateX(-2px);opacity:1}
    94%{transform:none;opacity:0}
  }

  .ls-tri  { animation: lsRot  22s linear infinite; transform-origin: 720px 450px; }
  .ls-sq   { animation: lsRotR 30s linear infinite; transform-origin: 720px 450px; }
  .ls-ring { animation: lsPulse 6s ease-in-out infinite; }

  .ls-num::before, .ls-num::after {
    content: attr(data-n);
    position: absolute; inset: 0; pointer-events: none;
  }
  .ls-num::before {
    color: rgba(0,200,255,.17);
    clip-path: polygon(0 20%,100% 20%,100% 38%,0 38%);
    animation: gA 5s ease-in-out infinite;
  }
  .ls-num::after {
    color: rgba(229,67,10,.28);
    clip-path: polygon(0 62%,100% 62%,100% 80%,0 80%);
    animation: gB 7s ease-in-out infinite;
  }

  .ls-label-anim { animation: lbIn .24s ease both; }

  .ls-exit {
    animation: lsCurtain .85s cubic-bezier(.76,0,.24,1) forwards;
  }
`;

const PHASES = [
  { at: 0, label: "INITIALIZING" },
  { at: 18, label: "LOADING ASSETS" },
  { at: 36, label: "RENDERING SCENE" },
  { at: 55, label: "COMPILING SHADERS" },
  { at: 72, label: "MAPPING DATA" },
  { at: 89, label: "FINAL TOUCHES" },
  { at: 100, label: "READY" },
];

const REVERSED_PHASES = [...PHASES].reverse();

const CHARS = "01アイウエオ#@!><:/|=+-~";
const CHARS_LEN = CHARS.length; // Cache do length
const DURATION = 2800;

/* ─── Canvas de streams — class component ─── */
class StreamCanvas extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
    this._interval = null;
    this._onResize = null;
  }

  componentDidMount() {
    const cv = this.ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d", { alpha: true }); // Otimização interna do browser

    // Variáveis pré-calculadas para evitar recálculo a cada 200ms
    let cvWidth = 0;
    let cvHeight = 0;
    let positions = [];
    const MX = 48, MY = 80, COLS = 18, ROWS = 10;

    const fit = () => {
      cvWidth = cv.offsetWidth;
      cvHeight = cv.offsetHeight;
      cv.width = cvWidth;
      cv.height = cvHeight;

      // OTIMIZAÇÃO 3: Definir fonte e cor apenas no resize, não a cada loop de renderização
      ctx.fillStyle = "rgba(229,67,10,.18)";
      ctx.font = "9px 'IBM Plex Mono', monospace";

      positions = [
        { ox: MX, oy: MY, dir: 1 },
        { ox: cvWidth - MX, oy: MY, dir: -1 },
        { ox: MX, oy: cvHeight - MY, dir: 1 },
        { ox: cvWidth - MX, oy: cvHeight - MY, dir: -1 },
      ];
    };

    fit();
    this._onResize = fit;
    window.addEventListener("resize", this._onResize, { passive: true });

    const draw = () => {
      if (!cvWidth || !cvHeight) return;
      ctx.clearRect(0, 0, cvWidth, cvHeight);

      for (let i = 0; i < positions.length; i++) {
        const { ox, oy, dir } = positions[i];
        for (let r = 0; r < ROWS; r++) {
          for (let c = 0; c < COLS; c++) {
            if (Math.random() > .5) {
              // OTIMIZAÇÃO 4: Uso de Bitwise (| 0) no lugar de Math.floor() para mais velocidade
              const ch = CHARS[(Math.random() * CHARS_LEN) | 0];
              ctx.fillText(ch, ox + dir * c * 8, oy + r * 12);
            }
          }
        }
      }
    };

    draw();
    this._interval = setInterval(draw, 200);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
    window.removeEventListener("resize", this._onResize);
  }

  render() {
    return (
      <canvas
        ref={this.ref}
        style={{
          position: "absolute", inset: 0, zIndex: 2,
          pointerEvents: "none", width: "100%", height: "100%",
        }}
      />
    );
  }
}
/* ─── LoadingScreen ─── */
export default class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { label: "INITIALIZING", exiting: false };
    this._raf = null;
    this._start = null;
    this._prevLabel = "INITIALIZING";
    this._prevV = -1; // Rastreia o valor anterior da porcentagem
    this.fillRef = createRef();
    this.numRef = createRef();
    this.pctRef = createRef();
  }

  componentDidMount() {
    this._start = performance.now();
    this._raf = requestAnimationFrame(this._tick);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this._raf);
  }

  _tick = (now) => {
    const t = Math.min(1, (now - this._start) / DURATION);
    const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    const v = Math.floor(eased * 100);

    // OTIMIZAÇÃO 2: Só atualiza o DOM e calcula strings SE a porcentagem mudou
    if (v !== this._prevV) {
      this._prevV = v;
      const padded = String(v).padStart(3, "0");

      if (this.fillRef.current) this.fillRef.current.style.width = `${v}%`;
      if (this.pctRef.current) this.pctRef.current.textContent = `${padded}%`;
      if (this.numRef.current) {
        this.numRef.current.textContent = padded;
        this.numRef.current.dataset.n = padded;
      }

      /* Usando o array pre-calculado para evitar GC (Garbage Collection) */
      const ph = (REVERSED_PHASES.find(p => v >= p.at) || PHASES[0]).label;

      if (ph !== this._prevLabel) {
        this._prevLabel = ph;
        this.setState({ label: ph });
      }
    }

    if (t < 1) {
      this._raf = requestAnimationFrame(this._tick);
    } else {
      setTimeout(() => {
        this.setState({ exiting: true });
        setTimeout(this.props.onDone, 880);
      }, 340);
    }
  };

  render() {
    const { label, exiting } = this.state;

    /* ─── styles inline ─── */
    const s = {
      root: {
        position: "fixed", inset: 0, zIndex: 9999,
        background: "#0F0E0C",
        display: "flex", flexDirection: "column",
        fontFamily: "'IBM Plex Mono', monospace",
        overflow: "hidden",
        clipPath: "inset(0 0 0% 0)",
      },
      scan: {
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1,
        background: "repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(0,0,0,.05) 3px, rgba(0,0,0,.05) 4px)",
      },
      geo: {
        position: "absolute", inset: 0, zIndex: 0,
        width: "100%", height: "100%", pointerEvents: "none",
      },
      corners: {
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2,
      },
      corner: (top, right, bottom, left) => ({
        position: "absolute",
        width: 20, height: 20,
        top, right, bottom, left,
        borderStyle: "solid",
        borderColor: "rgba(229,67,10,.3)",
        borderWidth: `${top !== undefined ? 1 : 0}px ${right !== undefined ? 1 : 0}px ${bottom !== undefined ? 1 : 0}px ${left !== undefined ? 1 : 0}px`,
      }),
      topbar: {
        position: "relative", zIndex: 5, flexShrink: 0,
        padding: "1.4rem 2.8rem",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        borderBottom: "1px solid rgba(255,255,255,.04)",
      },
      eyebrow: {
        fontSize: ".54rem", letterSpacing: ".26em",
        textTransform: "uppercase", color: "rgba(154,148,136,.4)",
      },
      id: {
        fontSize: ".54rem", letterSpacing: ".2em",
        textTransform: "uppercase", color: "rgba(229,67,10,.38)",
      },
      center: {
        flex: 1, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        position: "relative", zIndex: 5, gap: "1.4rem",
      },
      num: {
        fontFamily: "'DM Serif Display', serif",
        fontStyle: "italic",
        fontSize: "clamp(7rem, 20vw, 15rem)",
        lineHeight: 1, letterSpacing: "-.04em",
        color: "#E5430A", userSelect: "none",
        position: "relative",
      },
      label: {
        fontSize: ".56rem", letterSpacing: ".32em",
        textTransform: "uppercase", color: "rgba(154,148,136,.5)",
        minHeight: "1em",
      },
      bottom: {
        position: "relative", zIndex: 5, flexShrink: 0,
        padding: "1.1rem 2.8rem 1.6rem",
        borderTop: "1px solid rgba(255,255,255,.04)",
        display: "flex", flexDirection: "column", gap: ".65rem",
      },
      track: {
        width: "100%", height: 1,
        background: "rgba(255,255,255,.07)",
        position: "relative",
      },
      fill: {
        position: "absolute", left: 0, top: 0, height: "100%", width: "0%",
        background: "#E5430A",
        transition: "width .18s cubic-bezier(.16,1,.3,1)",
      },
      fillDot: {
        position: "absolute", right: -3, top: -3,
        width: 7, height: 7, borderRadius: "50%",
        background: "#E5430A",
      },
      meta: {
        display: "flex", justifyContent: "space-between", alignItems: "center",
      },
      metaL: {
        fontSize: ".48rem", letterSpacing: ".2em",
        textTransform: "uppercase", color: "rgba(154,148,136,.28)",
      },
      metaR: {
        fontSize: ".48rem", letterSpacing: ".2em",
        color: "rgba(229,67,10,.42)",
      },
    };

    return (
      <>
        <style>{KEYFRAMES}</style>

        <div
          style={s.root}
          className={exiting ? "ls-exit" : ""}
        >
          <div style={s.scan} />

          {/* geo SVG */}
          <svg
            style={s.geo}
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g className="ls-ring">
              <circle cx="720" cy="450" r="390" fill="none" stroke="rgba(255,255,255,.04)" strokeWidth=".7" />
              <circle cx="720" cy="450" r="285" fill="none" stroke="rgba(255,255,255,.04)" strokeWidth=".6" />
              <circle cx="720" cy="450" r="185" fill="none" stroke="rgba(229,67,10,.05)" strokeWidth=".6" />
            </g>
            <g className="ls-tri">
              <polygon points="720,140 988,595 452,595" fill="none" stroke="rgba(229,67,10,.09)" strokeWidth=".9" />
              <polygon points="720,760 452,305 988,305" fill="none" stroke="rgba(229,67,10,.06)" strokeWidth=".9" />
            </g>
            <g className="ls-sq">
              <rect x="510" y="240" width="420" height="420"
                fill="none" stroke="rgba(255,255,255,.05)" strokeWidth=".5"
                transform="rotate(45 720 450)" />
              <rect x="572" y="302" width="296" height="296"
                fill="none" stroke="rgba(229,67,10,.07)" strokeWidth=".5" />
            </g>
            <line x1="720" y1="0" x2="720" y2="900" stroke="rgba(229,67,10,.04)" strokeWidth=".8" />
            <line x1="0" y1="450" x2="1440" y2="450" stroke="rgba(229,67,10,.04)" strokeWidth=".8" />
            <line x1="0" y1="0" x2="1440" y2="900" stroke="rgba(229,67,10,.025)" strokeWidth=".6" />
            <line x1="0" y1="900" x2="1440" y2="0" stroke="rgba(255,255,255,.02)" strokeWidth=".6" />
          </svg>

          {/* corner brackets */}
          <div style={s.corners} aria-hidden="true">
            <div style={s.corner("1.4rem", undefined, undefined, "1.4rem")} />
            <div style={s.corner("1.4rem", "1.4rem", undefined, undefined)} />
            <div style={s.corner(undefined, undefined, "1.4rem", "1.4rem")} />
            <div style={s.corner(undefined, "1.4rem", "1.4rem", undefined)} />
          </div>

          <StreamCanvas />

          {/* top bar */}
          <header style={s.topbar}>
            <span style={s.eyebrow}>001 / loading</span>
            <span style={s.id}>RSB</span>
          </header>

          {/* center */}
          <main style={s.center}>
            <div
              ref={this.numRef}
              style={s.num}
              className="ls-num"
              data-n="000"
            >
              000
            </div>
            <p
              key={label}
              style={s.label}
              className="ls-label-anim"
            >
              {label}
            </p>
          </main>

          {/* progress */}
          <footer style={s.bottom}>
            <div style={s.track}>
              <div ref={this.fillRef} style={s.fill}>
                <div style={s.fillDot} />
              </div>
            </div>
            <div style={s.meta}>
              <span style={s.metaL}>Richard S. Bezerra</span>
              <span ref={this.pctRef} style={s.metaR}>000%</span>
            </div>
          </footer>

        </div>
      </>
    );
  }
}
