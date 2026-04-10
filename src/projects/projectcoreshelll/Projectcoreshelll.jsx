/**
 * ProjectCoreShelll.jsx — Case Study: O Paradoxo da Malha Global Híbrida
 * Stack: React 18 · CSS (csh-) · GSAP + ScrollTrigger · Lenis
 */

import { useEffect, useRef, useCallback, useState } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './Projectcoreshelll.css'
import CASE_DATA, { CASE_LANGS, STACK } from '../../i18n/projectcoreshelll.js'

gsap.registerPlugin(ScrollTrigger)

// ─────────────────────────────────────────────────────────────────────────────
// NodeGraph — canvas animado do hero
// ─────────────────────────────────────────────────────────────────────────────
function NodeGraph() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const W = (canvas.width = canvas.offsetWidth)
    const H = (canvas.height = canvas.offsetHeight)

    const nodes = Array.from({ length: 28 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: 2 + Math.random() * 2,
    }))

    let raf
    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      nodes.forEach((n) => {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > W) n.vx *= -1
        if (n.y < 0 || n.y > H) n.vy *= -1
      })
      nodes.forEach((a, i) => {
        nodes.slice(i + 1).forEach((b) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0,245,212,${0.15 * (1 - d / 120)})`
            ctx.lineWidth = 0.6
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        })
        ctx.beginPath()
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2)
        ctx.fillStyle = '#00f5d4'
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(raf)
  }, [])

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
}

// ─────────────────────────────────────────────────────────────────────────────
// CountUp — número animado no scroll
// ─────────────────────────────────────────────────────────────────────────────
function CountUp({ to, suffix = '' }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to({ v: 0 }, {
          v: to,
          duration: 1.6,
          ease: 'power2.out',
          onUpdate() { setVal(Math.round(this.targets()[0].v)) },
        })
      },
    })
    return () => trigger.kill()
  }, [to])

  return <span ref={ref}>{val}{suffix}</span>
}

// ─────────────────────────────────────────────────────────────────────────────
// ProjectCoreShelll — componente principal
// ─────────────────────────────────────────────────────────────────────────────
export default function ProjectCoreShelll() {
  // ── Estado de idioma ───────────────────────────────────────────────────────
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-lang') ?? 'PT'
    }
    return 'PT'
  })

  const t = CASE_DATA[lang] ?? CASE_DATA.PT

  const handleLangChange = useCallback((code) => {
    setLang(code)
    localStorage.setItem('portfolio-lang', code)
    ScrollTrigger.refresh()
  }, [])

  // ── Refs ───────────────────────────────────────────────────────────────────
  const rootRef = useRef(null)
  const navRef = useRef(null)
  const heroRef = useRef(null)
  const lenisRef = useRef(null)

  // Hero sub-refs
  const heroTagsRef = useRef(null)
  const heroTitleRef = useRef(null)
  const heroSubRef = useRef(null)
  const heroMetaRef = useRef(null)
  const heroHintRef = useRef(null)

  // ── 1. Lenis ───────────────────────────────────────────────────────────────
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true })
    lenisRef.current = lenis
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)
    return () => {
      lenis.destroy()
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
    }
  }, [])

  // ── 2. Nav reveal on scroll ────────────────────────────────────────────────
  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    const trigger = ScrollTrigger.create({
      start: '200px top',
      onEnter: () => gsap.to(nav, { y: 0, opacity: 1, duration: 0.4 }),
      onLeaveBack: () => gsap.to(nav, { y: -60, opacity: 0, duration: 0.3 }),
    })
    return () => trigger.kill()
  }, [])

  // ── 3. Hero animations ─────────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.3 })
      tl.from(heroTagsRef.current?.children ?? [],
        { opacity: 0, y: -20, stagger: 0.1, duration: 0.6 })
        .from(heroTitleRef.current,
          { opacity: 0, y: 60, duration: 1.1 }, '-=0.3')
        .from(heroSubRef.current,
          { opacity: 0, y: 20, duration: 0.8 }, '-=0.6')
        .from(heroMetaRef.current?.children ?? [],
          { opacity: 0, x: -20, stagger: 0.15, duration: 0.6 }, '-=0.5')
        .from(heroHintRef.current,
          { opacity: 0, duration: 1 }, '-=0.2')

      // parallax canvas
      gsap.to('.csh-hero-canvas', {
        y: 120,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  // ── 4. Scroll reveals ──────────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      // generic reveal-up
      gsap.utils.toArray('.reveal-up').forEach((el) => {
        gsap.from(el, {
          y: 50, opacity: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
        })
      })

      // solution cards slide in alternating sides
      gsap.utils.toArray('.csh-solution-card').forEach((el, i) => {
        gsap.from(el, {
          x: i % 2 === 0 ? -60 : 60, opacity: 0, duration: 0.9, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
        })
      })

      // problem cards scale in
      gsap.from('.csh-problem-card', {
        opacity: 0, scale: 0.92, y: 24, stagger: 0.1, duration: 0.6, ease: 'back.out(1.5)',
        scrollTrigger: { trigger: '.csh-problems-grid', start: 'top 85%', toggleActions: 'play none none none' },
      })

      // stack pills stagger
      gsap.from('.csh-stack-pill', {
        opacity: 0, y: 16, stagger: 0.05, duration: 0.5, ease: 'power2.out',
        scrollTrigger: { trigger: '.csh-stack-wrap', start: 'top 85%', toggleActions: 'play none none none' },
      })

      // learning cards
      gsap.from('.csh-learning-card', {
        opacity: 0, y: 30, stagger: 0.12, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '.csh-learnings-grid', start: 'top 85%', toggleActions: 'play none none none' },
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  // ── scrollTo helper ────────────────────────────────────────────────────────
  const scrollTo = useCallback((id) => {
    lenisRef.current?.scrollTo(`#${id}`, { offset: -80, duration: 1.4 })
  }, [])

  // ── Section IDs matched to nav order ──────────────────────────────────────
  const NAV_IDS = ['contexto', 'problema', 'solucao', 'stack', 'reflexao']

  return (
    <div ref={rootRef} className="csh-root">

      {/* ── NAV ────────────────────────────────────────────────────────────── */}
      <nav ref={navRef} className="csh-nav">
        <p className="csh-nav-logo">
          <a href="/projects">{t.navHome}</a>
        </p>

        <span className="csh-nav-title">{t.navTitle}</span>

        <ul style={{ display: 'flex', gap: '1.6rem', listStyle: 'none' }}>
          {t.nav.map((label, i) => (
            <li key={label} style={{ fontSize: '.72rem', color: 'var(--csh-text2)' }}>
              <a
                href={`#${NAV_IDS[i]}`}
                style={{ textDecoration: 'none', color: 'inherit', transition: 'color .2s' }}
                onClick={(e) => { e.preventDefault(); scrollTo(NAV_IDS[i]) }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--csh-cyan)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '')}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="csh-lang-switcher">
          {CASE_LANGS.map(({ code }) => (
            <button
              key={code}
              className={`csh-lang-btn${lang === code ? ' active' : ''}`}
              onClick={() => handleLangChange(code)}
            >
              {code}
            </button>
          ))}
        </div>
      </nav>

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section ref={heroRef} className="csh-hero csh-scanline">

        {/* animated mesh canvas */}
        <div className="csh-hero-canvas"><NodeGraph /></div>

        {/* dark gradient overlay */}
        <div className="csh-hero-overlay" />

        {/* content */}
        <div className="csh-hero-content">
          <div ref={heroTagsRef} className="csh-hero-tags">
            <span className="csh-tag csh-tag--cyan">{t.hero.caseLabel}</span>
            <span className="csh-tag csh-tag--muted">{t.hero.archLabel}</span>
          </div>

          <h1 ref={heroTitleRef} className="csh-hero-title">
            <span
              className="csh-glitch"
              data-text={t.hero.titleLine1}
              aria-label={t.hero.titleLine1}
            >
              {t.hero.titleLine1}
            </span>
            <br />
            <span className="csh-c-cyan">{t.hero.titleAccent}</span>{' '}
            <span className="csh-c-amber">{t.hero.titleEnd}</span>
          </h1>

          <p ref={heroSubRef} className="csh-hero-sub">
            {t.hero.subtitle}
          </p>

          <div ref={heroMetaRef} className="csh-hero-meta">
            {t.hero.meta.map(({ key, value }) => (
              <span key={key} className="csh-hero-meta-item">
                <span className="csh-hero-meta-key">{key}</span>
                <span className="csh-hero-meta-val">{value}</span>
              </span>
            ))}
          </div>

          <p ref={heroHintRef} className="csh-scroll-hint">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1v12M2 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {t.hero.scrollHint}
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════════ */}
      <div className="csh-stats-bar">
        {t.stats.map((s) => (
          <div key={s.label} className="csh-stat-box reveal-up">
            <p className="csh-stat-value">
              <CountUp to={s.n} suffix={s.sfx} />
            </p>
            <p className="csh-stat-label">{s.label}</p>
          </div>
        ))}
      </div>

      {/* ══════════════════════════════════════════════
          CONTEXTO — OS 3 PROBLEMAS
      ══════════════════════════════════════════════ */}
      <section id="contexto" className="csh-section csh-grid-bg">
        <div className="csh-inner">
          <div className="reveal-up">
            <p className="csh-section-label">{t.context.sectionLabel}</p>
            <h2 className="csh-heading csh-heading--xl">
              {t.context.headingPre}<br />
              <span className="csh-c-amber">{t.context.headingAccent}</span>
            </h2>
          </div>

          <div id="problema" className="csh-problems-grid">
            {t.context.problems.map((p) => (
              <div key={p.id} className="csh-problem-card">
                <span className="csh-problem-id">{p.id}</span>
                <h3 className="csh-problem-title">{p.title}</h3>
                <p className="csh-problem-body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          MOTIVAÇÃO
      ══════════════════════════════════════════════ */}
      <section className="csh-section csh-section--bg2">
        <div className="csh-inner">
          <div className="csh-motivation-grid">

            {/* left: texto */}
            <div className="reveal-up">
              <p className="csh-section-label">{t.motivation.sectionLabel}</p>
              <h2 className="csh-heading csh-heading--lg">
                {t.motivation.headingPre}<br />
                <span className="csh-c-violet">{t.motivation.headingAccent}</span>
              </h2>
              {t.motivation.paragraphs.map((para, i) => (
                <p key={i} className="csh-motivation-para">
                  {i === 1
                    ? para.split('consistência global').map((chunk, j) =>
                      j === 0
                        ? <span key={j}>{chunk}<em>consistência global</em></span>
                        : <span key={j}>{chunk}</span>
                    )
                    : para}
                </p>
              ))}
            </div>

            {/* right: terminal Rust */}
            <div className="reveal-up">
              <div className="csh-terminal">
                <div className="csh-terminal-bar">
                  <div className="csh-terminal-dot" style={{ background: '#ff5f56' }} />
                  <div className="csh-terminal-dot" style={{ background: '#ffbd2e' }} />
                  <div className="csh-terminal-dot" style={{ background: '#27c93f' }} />
                  <span className="csh-terminal-file">{t.motivation.terminalFile}</span>
                </div>
                <div className="csh-terminal-body">
                  <div><span className="t-violet">use</span> <span className="t-cyan">crdt::GCounter</span><span className="t-muted">;</span></div>
                  <div><span className="t-violet">use</span> <span className="t-cyan">web_transport::Session</span><span className="t-muted">;</span></div>
                  <div>&nbsp;</div>
                  <div><span className="t-muted">// Nó de sincronização – sem conflitos</span></div>
                  <div><span className="t-violet">async fn</span> <span className="t-amber">sync_state</span><span className="t-muted">(</span></div>
                  <div>&nbsp;&nbsp;<span className="t-white">session</span><span className="t-muted">: &amp;</span><span className="t-cyan">Session</span><span className="t-muted">,</span></div>
                  <div>&nbsp;&nbsp;<span className="t-white">counter</span><span className="t-muted">: &amp;mut </span><span className="t-cyan">GCounter</span></div>
                  <div><span className="t-muted">{') -> Result<()> {'}</span></div>
                  <div>&nbsp;&nbsp;<span className="t-violet">let</span> <span className="t-white">remote</span> <span className="t-muted">= </span><span className="t-white">session</span><span className="t-muted">.</span><span className="t-amber">recv_crdt</span><span className="t-muted">().</span><span className="t-amber">await</span><span className="t-muted">?;</span></div>
                  <div>&nbsp;&nbsp;<span className="t-white">counter</span><span className="t-muted">.</span><span className="t-amber">merge</span><span className="t-muted">(&amp;</span><span className="t-white">remote</span><span className="t-muted">);</span></div>
                  <div>&nbsp;&nbsp;<span className="t-muted">// estado sempre converge ↑</span></div>
                  <div>&nbsp;&nbsp;<span className="t-cyan">Ok</span><span className="t-muted">(())</span></div>
                  <div><span className="t-muted">{'}'}</span></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          ARQUITETURA — CORE-SHELL
      ══════════════════════════════════════════════ */}
      <section id="solucao" className="csh-section">
        <div className="csh-inner">
          <div className="reveal-up">
            <p className="csh-section-label">{t.arch.sectionLabel}</p>
            <h2 className="csh-heading csh-heading--xl">
              {t.arch.headingPre}<br />
              <span className="csh-c-cyan">{t.arch.headingAccent}</span>
            </h2>
          </div>

          <div className="csh-solutions-list">
            {t.arch.solutions.map((s) => (
              <div
                key={s.layer}
                className="csh-solution-card"
                data-layer={s.layer}
                style={{ borderLeftColor: s.color }}
              >
                <div className="csh-solution-header">
                  <span className="csh-tag" style={{ color: s.color, borderColor: s.color }}>
                    {s.layer}
                  </span>
                  <span className="csh-solution-subtitle">{s.subtitle}</span>
                  <span className="csh-solution-stack">— {s.stack}</span>
                </div>
                <ul className="csh-solution-points">
                  {s.points.map((pt, i) => (
                    <li key={i} className="csh-solution-point">
                      <span className="csh-solution-bullet" style={{ color: s.color }}>▸</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FLUXO DE DADOS
      ══════════════════════════════════════════════ */}
      <section className="csh-section csh-section--bg2 csh-section--center">
        <div className="csh-inner--narrow">
          <div className="reveal-up">
            <p className="csh-section-label">{t.dataflow.sectionLabel}</p>
            <h2 className="csh-heading csh-heading--md">{t.dataflow.heading}</h2>
          </div>

          <div className="reveal-up">
            <div className="csh-terminal">
              <div className="csh-terminal-bar">
                <div className="csh-terminal-dot" style={{ background: '#ff5f56' }} />
                <div className="csh-terminal-dot" style={{ background: '#ffbd2e' }} />
                <div className="csh-terminal-dot" style={{ background: '#27c93f' }} />
                <span className="csh-terminal-file">{t.dataflow.file}</span>
              </div>
              <div className="csh-terminal-body csh-terminal-body--flow">
                {t.dataflow.lines.map((line, i) => (
                  <div key={i}>
                    <span className={`t-${line.color}`}>{line.tag}</span>
                    {'  '}
                    <span className="t-white">{line.text}</span>
                  </div>
                ))}
                <div>&nbsp;</div>
                <div>
                  <span className="t-cyan">{t.dataflow.rttLabel}</span>{' '}
                  <span className="t-amber">{t.dataflow.rttValue}</span>{' '}
                  <span className="t-muted">{t.dataflow.rttComment}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          STACK COMPLETA
      ══════════════════════════════════════════════ */}
      <section id="stack" className="csh-section">
        <div className="csh-inner">
          <div className="reveal-up">
            <p className="csh-section-label">{t.stackSection.sectionLabel}</p>
            <h2 className="csh-heading csh-heading--lg">
              {t.stackSection.headingPre}<br />
              <span className="csh-c-cyan">{t.stackSection.headingAccent}</span>
            </h2>
          </div>

          <div className="csh-stack-wrap">
            {STACK.map((s) => (
              <div key={s.label} className="csh-stack-pill">
                <span className="csh-stack-pill-label">{s.label}</span>
                <span className="csh-stack-pill-desc">{s.desc[lang] ?? s.desc.PT}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          REFLEXÃO / APRENDIZADOS
      ══════════════════════════════════════════════ */}
      <section id="reflexao" className="csh-section csh-section--gradient">
        <div className="csh-inner">
          <div className="reveal-up">
            <p className="csh-section-label">{t.learnings.sectionLabel}</p>
            <h2 className="csh-heading csh-heading--xl">
              {t.learnings.headingPre}<br />
              <span className="csh-c-amber">{t.learnings.headingAccent}</span>
            </h2>
          </div>

          <div className="csh-learnings-grid">
            {t.learnings.items.map((item) => (
              <div key={item.title} className="csh-learning-card">
                <span className="csh-learning-icon">{item.icon}</span>
                <h3 className="csh-learning-title">{item.title}</h3>
                <p className="csh-learning-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CTA — FOOTER
      ══════════════════════════════════════════════ */}
      <section className="csh-section csh-section--border csh-section--center">
        <div className="reveal-up">
          <p className="csh-section-label">{t.cta.sectionLabel}</p>
          <h2 className="csh-heading csh-heading--cta">
            {t.cta.headingPre}<br />
            <span className="csh-c-cyan">{t.cta.headingAccent}</span>
            <span className="csh-c-muted">?</span>
          </h2>
          <p style={{ fontSize: '.75rem', color: 'var(--csh-text2)', marginBottom: '2.5rem', letterSpacing: '.05em' }}>
            {t.cta.subtitle}
          </p>
          <a href="/projects" className="csh-btn">{t.cta.backLabel}</a>
        </div>

        <div className="csh-footer-meta">
          <span>{t.footer.left}</span>
          <span>{t.footer.right}</span>
        </div>
      </section>

    </div>
  )
}
