/**
 * JSeeker.jsx — Componente principal do Estudo de Caso J-Seeker
 * Stack: React 18 · Tailwind CSS · GSAP + ScrollTrigger · Lenis
 *
 * Mesmo padrão arquitetural de WaytranslateCLI.jsx.
 * Acento: laranja-âmbar (#C46B00) em vez do vermelho do WayTranslate.
 */

import { useEffect, useRef, useCallback, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

import './JSeeker.css'
import CASE_DATA, { CASE_LANGS, MARQUEE_ITEMS, STACK } from '../../i18n/jseeker.js'

gsap.registerPlugin(ScrollTrigger)

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

/** Parágrafo com marcação *negrito* — fundo claro */
function RichPara({ text, className }) {
  const html = text.replace(
    /\*(.*?)\*/g,
    '<em style="color:var(--jsk-ink);font-style:normal;font-weight:600">$1</em>'
  )
  return <p className={className} dangerouslySetInnerHTML={{ __html: html }} />
}

/** Parágrafo com marcação *negrito* — fundo escuro (seção arquitetura) */
function ArchRichPara({ text }) {
  const html = text.replace(
    /\*(.*?)\*/g,
    '<em style="color:rgba(242,235,224,.82);font-style:normal;font-weight:600">$1</em>'
  )
  return <p className="jsk-arch-col-body" dangerouslySetInnerHTML={{ __html: html }} />
}

// ─────────────────────────────────────────────────────────────────────────────
// Sub-componente: Terminal Widget de busca
// ─────────────────────────────────────────────────────────────────────────────
function SearchTerminal({ terminal }) {
  return (
    <div className="jsk-term">
      {/* Traffic lights */}
      <div className="jsk-term-bar">
        <div className="jsk-td jsk-td-r" />
        <div className="jsk-td jsk-td-y" />
        <div className="jsk-td jsk-td-g" />
        <span className="jsk-term-title">{terminal.title}</span>
      </div>

      <div className="jsk-term-body">
        {/* Command prompt */}
        <div style={{ marginBottom: '.5rem' }}>
          <span className="jsk-tp">❯ </span>
          <span className="jsk-ti">{terminal.prompt}</span>
        </div>

        {/* Indexing progress */}
        <div className="jsk-tc" style={{ marginBottom: '.25rem' }}>{terminal.indexing}</div>
        <div className="jsk-progress-bar-inline" />

        {/* Result header */}
        <div className="jsk-result-header">
          <span className="jsk-tg">{terminal.resultHeader}</span>
        </div>

        {/* Search results */}
        {terminal.results.map((r, i) => (
          <div key={i} className="jsk-score-row">
            <span className="jsk-score-badge">{r.score}</span>
            <span className="jsk-score-path">{r.path}</span>
          </div>
        ))}

        <div style={{ marginTop: '1rem', borderTop: '1px solid rgba(255,255,255,.05)', paddingTop: '.75rem' }}>
          <span className="jsk-tg">✓ </span>
          <span className="jsk-dim">{terminal.footer}</span>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Sub-componente: Pipeline Diagram
// ─────────────────────────────────────────────────────────────────────────────
function PipelineDiagram({ pipeline }) {
  const getBoxClass = (i) => {
    if (i === 0) return 'jsk-pipe-box first'
    if (i === pipeline.length - 1) return 'jsk-pipe-box last'
    if (i === 1 || i === 3) return 'jsk-pipe-box mid'
    return 'jsk-pipe-box'
  }

  return (
    <div className="jsk-pipeline jsk-rv">
      {pipeline.map((step, i) => (
        <div key={step.label} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <div className="jsk-pipe-step">
            <div className={getBoxClass(i)}>{step.label}</div>
            <span className="jsk-pipe-lbl">{step.sub}</span>
          </div>
          {i < pipeline.length - 1 && (
            <div className="jsk-pipe-arr">→</div>
          )}
        </div>
      ))}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// JSeeker — componente principal
// ─────────────────────────────────────────────────────────────────────────────
export default function JSeeker() {
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
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const progressRef = useRef(null)
  const navRef = useRef(null)
  const lenisRef = useRef(null)

  // ── 1. Lenis smooth scroll ─────────────────────────────────────────────────
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })
    lenisRef.current = lenis
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)
    return () => {
      lenis.destroy()
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
    }
  }, [])



  // ── 3. Progress bar ────────────────────────────────────────────────────────
  useEffect(() => {
    const bar = progressRef.current
    if (!bar) return
    const st = ScrollTrigger.create({
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => gsap.set(bar, { scaleX: self.progress }),
    })
    return () => st.kill()
  }, [])

  // ── 4. Navbar scroll ──────────────────────────────────────────────────────
  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    const st = ScrollTrigger.create({
      start: '60px top',
      onEnter: () => nav.classList.add('scrolled'),
      onLeaveBack: () => nav.classList.remove('scrolled'),
    })
    return () => st.kill()
  }, [])

  // ── 5. Hero entrance ──────────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.25 })
        .from('.jsk-badge', { opacity: 0, y: -8, duration: 0.5 })
        .from('.jsk-hero-eyebrow', { opacity: 0, y: 10, duration: 0.6 }, '-=0.3')
        .from('.jsk-hero-title', { opacity: 0, y: 70, duration: 1.1 }, '-=0.35')
        .from('.jsk-hero-sub', { opacity: 0, y: 22, duration: 0.8 }, '-=0.55')
        .from('.jsk-hero-stats > div', { opacity: 0, y: 20, stagger: 0.1, duration: 0.5 }, '-=0.4')
        .from('.jsk-hero-r', { opacity: 0, x: 28, duration: 0.9, ease: 'power2.out' }, '-=0.7')
    }, rootRef)
    return () => ctx.revert()
  }, [])

  // ── 6. Scroll reveals ─────────────────────────────────────────────────────
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('vis') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.jsk-rv, .jsk-rv-l').forEach((el, i) => {
      el.style.transitionDelay = `${(i % 6) * 0.07}s`
      io.observe(el)
    })
    return () => io.disconnect()
  }, [lang])

  // ── 7. Stack list reveal ──────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.jsk-s-item', {
        opacity: 0, y: 18, stagger: 0.07, duration: 0.55, ease: 'power2.out',
        scrollTrigger: { trigger: '.jsk-stack-list', start: 'top 85%', toggleActions: 'play none none reverse' },
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  // ── 8. Result items ───────────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.jsk-r-item', {
        opacity: 0, x: -18, stagger: 0.1, duration: 0.55, ease: 'power2.out',
        scrollTrigger: { trigger: '.jsk-res-list', start: 'top 88%', toggleActions: 'play none none reverse' },
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  // ── 9. Metric counter animation ───────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.jsk-metric-card', {
        opacity: 0, scale: 0.9, y: 20, stagger: 0.1, duration: 0.6, ease: 'back.out(1.4)',
        scrollTrigger: { trigger: '.jsk-metrics', start: 'top 85%', toggleActions: 'play none none reverse' },
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  const scrollTo = useCallback((id) => {
    lenisRef.current?.scrollTo(`#${id}`, { offset: -70, duration: 1.4 })
  }, [])

  const NAV_IDS = ['motivacao', 'arquitetura', 'processo', 'stack', 'conclusao']

  // ── RENDER ─────────────────────────────────────────────────────────────────
  return (
    <div ref={rootRef} className="jsk-root">
      <div ref={cursorRef} className="jsk-cursor" />
      <div ref={ringRef} className="jsk-cursor-ring" />
      <div ref={progressRef} className="jsk-progress" />

      {/* ════════════════════════════════════════
          NAV
      ════════════════════════════════════════ */}
      <nav ref={navRef} className="jsk-nav">
        <a className="jsk-nav-logo" href="/">
          portfolio<span>.</span>dev
        </a>

        <ul className="jsk-nav-links">
          {t.nav.map((label, i) => (
            <li key={label}>
              <a
                href={`#${NAV_IDS[i]}`}
                onClick={(e) => { e.preventDefault(); scrollTo(NAV_IDS[i]) }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="jsk-lang-row">
          {CASE_LANGS.map(({ code, flag }) => (
            <button
              key={code}
              className={`jsk-lang-btn${lang === code ? ' active' : ''}`}
              onClick={() => handleLangChange(code)}
              title={code}
            >
              {flag} {code}
            </button>
          ))}
        </div>
      </nav>

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="jsk-hero">

        {/* Left — parchment */}
        <div className="jsk-hero-l">
          <div>
            {/* Badge pessoal + profissional */}
            <div className="jsk-badge">pessoal + prof</div>

            <p className="jsk-hero-eyebrow">{t.hero.eyebrow}</p>

            <h1 className="jsk-hero-title">
              {t.hero.title.map((line, i) =>
                line === t.hero.accentLine
                  ? <span key={i}>{line.slice(0, -3)}<span className="accent">{line.slice(-3)}</span><br /></span>
                  : <span key={i}>{line}<br /></span>
              )}
            </h1>

            <p className="jsk-hero-sub">{t.hero.subtitle}</p>
          </div>

          <div className="jsk-hero-stats">
            {t.hero.stats.map((s) => (
              <div key={s.label}>
                <p className={`jsk-stat-value${/[a-zA-Z~<]/.test(s.value) ? ' small' : ''}`}>
                  {s.value}
                </p>
                <p className="jsk-stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — dark terminal panel */}
        <div className="jsk-hero-r">
          <SearchTerminal terminal={t.hero.terminal} />
          <p className="jsk-term-label">{t.hero.termLabel}</p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          MARQUEE
      ════════════════════════════════════════ */}
      <div className="jsk-mq-wrap">
        <div className="jsk-mq-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className={`jsk-mq-item${item.hot ? ' hot' : ''}`}>
              {item.label}
            </span>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════
          CONTEXT / MOTIVAÇÃO
      ════════════════════════════════════════ */}
      <section className="jsk-sec" id="motivacao">
        <p className="jsk-sec-label">{t.context.sectionLabel}</p>
        <h2 className="jsk-heading jsk-rv">{t.context.heading}</h2>

        <div className="jsk-ctx-grid">
          <div className="jsk-rv">
            <RichPara text={t.context.paragraphs[0]} className="jsk-body" />
            <RichPara text={t.context.paragraphs[1]} className="jsk-body" />
          </div>
          <div className="jsk-rv">
            <RichPara text={t.context.paragraphs[2]} className="jsk-body" />
            <RichPara text={t.context.paragraphs[3]} className="jsk-body" />
          </div>
        </div>

        <blockquote className="jsk-pull-q jsk-rv">{t.context.pullQuote}</blockquote>

        <div className="jsk-metrics jsk-rv">
          {t.context.metrics.map((m) => (
            <div key={m.label} className="jsk-metric-card">
              <p className={`jsk-metric-val${/[a-zA-Z~<]/.test(m.value) ? ' small' : ''}`}>
                {m.value}
              </p>
              <p className="jsk-metric-lbl">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          ARCHITECTURE — dark section
      ════════════════════════════════════════ */}
      <section className="jsk-arch-sec" id="arquitetura">
        <div className="jsk-arch-inner">
          <p className="jsk-a-sec-label">{t.arch.sectionLabel}</p>

          <blockquote className="jsk-arch-quote jsk-rv-l">{t.arch.quote}</blockquote>
          <p className="jsk-arch-xlat">{t.arch.quoteTranslation}</p>

          <PipelineDiagram pipeline={t.arch.pipeline} />

          <div className="jsk-arch-cols">
            {t.arch.cols.map((col, i) => (
              <div key={i} className="jsk-rv">
                <ArchRichPara text={col.body} />
                <ArchRichPara text={col.body2} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PROCESS
      ════════════════════════════════════════ */}
      <div className="jsk-proc-wrap" id="processo">
        <div className="jsk-proc-inner">
          <p className="jsk-sec-label">{t.process.sectionLabel}</p>
          <h2 className="jsk-heading jsk-rv">{t.process.heading}</h2>

          <div className="jsk-proc-grid">
            {t.process.cards.map((card) => (
              <div key={card.num} className="jsk-proc-card jsk-rv">
                <div className="jsk-proc-num">{card.num}</div>
                <p className="jsk-proc-phase">{card.phase}</p>
                <h3 className="jsk-proc-title">{card.title}</h3>
                <p className="jsk-proc-body">{card.body}</p>

                <div className="jsk-pbox ch">
                  <p className="jsk-pbox-label">{card.challengeLabel}</p>
                  <p className="jsk-pbox-text">{card.challenge}</p>
                </div>

                <div className="jsk-pbox dc">
                  <p className="jsk-pbox-label">{card.decisionLabel}</p>
                  <p className="jsk-pbox-text">{card.decision}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
          STACK
      ════════════════════════════════════════ */}
      <section className="jsk-stack-sec" id="stack">
        <div className="jsk-stack-inner">
          <p className="jsk-stack-sec-label">{t.stack.sectionLabel}</p>
          <h2 className="jsk-stack-heading jsk-rv">{t.stack.heading}</h2>
          <p className="jsk-stack-sub">{t.stack.sub}</p>

          <div className="jsk-stack-list">
            {STACK.map((item) => (
              <div key={item.name} className="jsk-s-item">
                <span className="jsk-s-num">{item.num}</span>
                <span className="jsk-s-name">{item.name}</span>
                <span className="jsk-s-role">{item.role[lang] ?? item.role['PT']}</span>
                <span className="jsk-s-icon">{item.icon}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CONCLUSION
      ════════════════════════════════════════ */}
      <section className="jsk-sec" id="conclusao">
        <p className="jsk-sec-label">{t.conclusion.sectionLabel}</p>
        <h2 className="jsk-heading jsk-rv">{t.conclusion.heading}</h2>

        <div style={{ maxWidth: '620px' }}>
          {t.conclusion.paragraphs.map((p, i) => (
            <p key={i} className="jsk-body jsk-rv">{p}</p>
          ))}
        </div>

        <div className="jsk-res-list">
          {t.conclusion.results.map((r, i) => (
            <div key={i} className="jsk-r-item">
              <span className="jsk-r-chk">✓</span>
              {r}
            </div>
          ))}
        </div>

        <div className="jsk-cta-row jsk-rv">
          <a
            href="https://github.com/richardsbez"
            target="_blank"
            rel="noopener noreferrer"
            className="jsk-btn jsk-btn-primary"
          >
            {t.conclusion.repoLabel}
          </a>
          <a href="/projects" className="jsk-btn jsk-btn-ghost">
            {t.conclusion.backLabel}
          </a>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════ */}
      <footer className="jsk-footer">
        <span>{t.footer}</span>
        <span>MIT © 2026</span>
      </footer>
    </div>
  )
}
