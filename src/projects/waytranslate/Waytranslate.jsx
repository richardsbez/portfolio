/**
 * WaytranslateCLI.jsx — Componente principal do Estudo de Caso (versão CLI)
 * Stack: React 18 · Tailwind CSS · GSAP + ScrollTrigger · Lenis
 *
 * Converte o HTML estático waytranslate (CLI/Docker) para React,
 * seguindo o mesmo padrão arquitetural de WaytranslateCaseStudy.jsx.
 */

import { useEffect, useRef, useCallback, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

import './Waytranslate.css'
import CASE_DATA, { CASE_LANGS, MARQUEE_ITEMS, STACK } from '../../i18n/waytranslate.js'

gsap.registerPlugin(ScrollTrigger)

// ─────────────────────────────────────────────────────────────────────────────
// Helpers inline
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Renderiza um parágrafo com marcação simples *negrito*.
 */
function RichPara({ text, className }) {
  const html = text.replace(
    /\*(.*?)\*/g,
    '<em style="color:var(--wtc-ink);font-style:normal;font-weight:600">$1</em>'
  )
  return <p className={className} dangerouslySetInnerHTML={{ __html: html }} />
}

function LatinRichPara({ text }) {
  const html = text.replace(
    /\*(.*?)\*/g,
    '<em style="color:rgba(240,233,223,.82);font-style:normal;font-weight:600">$1</em>'
  )
  return (
    <p
      className="wtc-latin-col-body"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Sub-componente: Terminal Widget
// ─────────────────────────────────────────────────────────────────────────────
function TerminalWidget({ terminal }) {
  return (
    <div className="wtc-term">
      {/* Traffic lights */}
      <div className="wtc-term-bar">
        <div className="wtc-td wtc-td-r" />
        <div className="wtc-td wtc-td-y" />
        <div className="wtc-td wtc-td-g" />
        <span className="wtc-term-title">{terminal.title}</span>
      </div>

      <div className="wtc-term-body">
        {/* Prompt line */}
        <div>
          <span className="wtc-tp">❯ </span>
          <span className="wtc-ti">{terminal.lines[0].text}</span>
        </div>

        {/* Status line */}
        <div style={{ color: 'rgba(240,233,223,.18)', marginBottom: '.5rem' }}>
          {terminal.lines[1].text}
        </div>

        {/* Input fields */}
        <div>
          <span className="wtc-tp">{terminal.lines[2].label} </span>
          <span className="wtc-tr">{terminal.lines[2].value}</span>
        </div>
        <div>
          <span className="wtc-tp">De: </span>
          <span className="wtc-ti">{terminal.lines[3].from}</span>
          <span className="wtc-tp">{'  '}Para: </span>
          <span className="wtc-ti">{terminal.lines[3].to}</span>
        </div>

        <br />

        {/* Fallback chain box */}
        <div className="wtc-chain-box">
          <span className="wtc-cn">LA</span>
          <span className="wtc-cs">──→</span>
          <span className="wtc-cn">EN</span>
          <span className="wtc-cs">──→</span>
          <span className="wtc-cn">PT</span>
          <span style={{ marginLeft: 'auto', fontSize: '.6rem', color: 'rgba(78,216,112,.4)' }}>
            {terminal.chainComment}
          </span>
        </div>

        {/* Chain model comment */}
        <div className="wtc-tc">{terminal.chainModel}</div>

        {/* Steps */}
        {terminal.steps.map((step) => (
          <div key={step.n}>
            <span className="wtc-td-text">{step.n} </span>
            <span className="wtc-ti">{step.label} </span>
            {step.accent
              ? <span className="wtc-tr">{step.value}</span>
              : <span style={{ color: 'rgba(240,233,223,.55)' }}>{step.value}</span>
            }
          </div>
        ))}

        <br />

        {/* Footer */}
        <div>
          <span className="wtc-ts">✓ </span>
          <span style={{ color: 'rgba(240,233,223,.38)' }}>{terminal.footer}</span>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Sub-componente: Fallback Chain Diagram
// ─────────────────────────────────────────────────────────────────────────────
function ChainDiagram({ chain }) {
  return (
    <div className="wtc-chain-diag wtc-rv">
      <div className="wtc-c-step">
        <div className="wtc-c-box la">{chain.input.label}</div>
        <span className="wtc-c-lbl">{chain.input.sub}</span>
      </div>

      <div className="wtc-c-arr">→</div>

      <div className="wtc-c-step">
        <div className="wtc-c-box" style={{ fontSize: '.65rem', padding: '.6rem .9rem' }}>
          {chain.detect.label}
        </div>
        <span className="wtc-c-lbl">{chain.detect.sub}</span>
      </div>

      <div className="wtc-c-arr grn">→</div>

      <div className="wtc-c-step">
        <div className="wtc-c-box">{chain.step1.label}</div>
        <span className="wtc-c-lbl">{chain.step1.sub}</span>
      </div>

      <div className="wtc-c-arr grn">→</div>

      <div className="wtc-c-step">
        <div className="wtc-c-box" style={{ color: 'rgba(240,233,223,.6)' }}>
          {chain.mid.label}
        </div>
        <span className="wtc-c-lbl">{chain.mid.sub}</span>
      </div>

      <div className="wtc-c-arr grn">→</div>

      <div className="wtc-c-step">
        <div className="wtc-c-box">{chain.step2.label}</div>
        <span className="wtc-c-lbl">{chain.step2.sub}</span>
      </div>

      <div className="wtc-c-arr grn">→</div>

      <div className="wtc-c-step">
        <div className="wtc-c-box pt">{chain.output.label}</div>
        <span className="wtc-c-lbl">{chain.output.sub}</span>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// WaytranslateCLI — componente principal
// ─────────────────────────────────────────────────────────────────────────────
export default function WaytranslateCLI() {
  // ── Estado de idioma ───────────────────────────────────────────────────────
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-lang') ?? 'PT'
    }
    return 'PT'
  })

  // ── Estado do menu mobile ──────────────────────────────────────────────────
  const [menuOpen, setMenuOpen] = useState(false)

  const t = CASE_DATA[lang] ?? CASE_DATA.PT

  const handleLangChange = useCallback((code) => {
    setLang(code)
    localStorage.setItem('portfolio-lang', code)
    ScrollTrigger.refresh()
    setMenuOpen(false)
  }, [])

  // Fecha o menu ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Bloqueia scroll do body quando menu está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // ── Refs ───────────────────────────────────────────────────────────────────
  const rootRef = useRef(null)
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const progressRef = useRef(null)
  const navRef = useRef(null)
  const heroTopRef = useRef(null)
  const heroStatsRef = useRef(null)
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

  // ── 5. Hero entrance animation ─────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.25 })
        .from('.wtc-hero-eyebrow', { opacity: 0, y: 10, duration: 0.6 })
        .from('.wtc-hero-title', { opacity: 0, y: 70, duration: 1.1 }, '-=0.35')
        .from('.wtc-hero-sub', { opacity: 0, y: 22, duration: 0.8 }, '-=0.55')
        .from('.wtc-hero-stats > div', { opacity: 0, y: 20, stagger: 0.1, duration: 0.5 }, '-=0.4')
        .from('.wtc-hero-r', { opacity: 0, x: 28, duration: 0.9, ease: 'power2.out' }, '-=0.7')
    }, rootRef)
    return () => ctx.revert()
  }, [])

  // ── 6. Scroll reveals (IntersectionObserver) ───────────────────────────────
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('vis') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.wtc-rv, .wtc-rv-l').forEach((el, i) => {
      el.style.transitionDelay = `${(i % 6) * 0.07}s`
      io.observe(el)
    })
    return () => io.disconnect()
  }, [lang])

  // ── 7. Stack hover intent ──────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.wtc-s-item', {
        opacity: 0, y: 18, stagger: 0.07, duration: 0.55, ease: 'power2.out',
        scrollTrigger: { trigger: '.wtc-stack-list', start: 'top 85%', toggleActions: 'play none none reverse' },
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  // ── 8. Result items stagger ────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.wtc-r-item', {
        opacity: 0, x: -18, stagger: 0.1, duration: 0.55, ease: 'power2.out',
        scrollTrigger: { trigger: '.wtc-res-list', start: 'top 88%', toggleActions: 'play none none reverse' },
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  // ── Smooth scroll to section ───────────────────────────────────────────────
  const scrollTo = useCallback((id) => {
    setMenuOpen(false)
    lenisRef.current?.scrollTo(`#${id}`, { offset: -70, duration: 1.4 })
  }, [])

  // Nav section IDs — order matches t.nav array
  const NAV_IDS = ['contexto', 'latim', 'processo', 'stack', 'conclusao']

  // ── RENDER ─────────────────────────────────────────────────────────────────
  return (
    <div ref={rootRef} className="wtc-root">
      {/* Custom cursor */}
      <div ref={cursorRef} className="wtc-cursor" />
      <div ref={ringRef} className="wtc-cursor-ring" />

      {/* Reading progress bar */}
      <div ref={progressRef} className="wtc-progress" />

      {/* ════════════════════════════════════════
          NAV
      ════════════════════════════════════════ */}
      <nav ref={navRef} className={`wtc-nav${menuOpen ? ' scrolled' : ''}`}>
        <p className="wtc-nav-logo">
          <a href="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>
            {t.navHome}
          </a>
        </p>

        {/* Links desktop */}
        <ul className="wtc-nav-links">
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

        {/* Lang switcher desktop */}
        <div className="wtc-lang-row">
          {CASE_LANGS.map(({ code, flag }) => (
            <button
              key={code}
              className={`wtc-lang-btn${lang === code ? ' active' : ''}`}
              onClick={() => handleLangChange(code)}
              title={code}
            >
              {code}
            </button>
          ))}
        </div>

        {/* Hamburger — visível apenas em ≤900px via CSS */}
        <button
          className={`wtc-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* ════════════════════════════════════════
          MOBILE MENU OVERLAY
      ════════════════════════════════════════ */}
      <div className={`wtc-mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        {t.nav.map((label, i) => (
          <a
            key={label}
            href={`#${NAV_IDS[i]}`}
            onClick={(e) => { e.preventDefault(); scrollTo(NAV_IDS[i]) }}
          >
            {label}
          </a>
        ))}

        {/* Lang switcher dentro do menu mobile */}
        <div className="wtc-mobile-lang-row">
          {CASE_LANGS.map(({ code }) => (
            <button
              key={code}
              className={`wtc-lang-btn${lang === code ? ' active' : ''}`}
              onClick={() => handleLangChange(code)}
              title={code}
            >
              {code}
            </button>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="wtc-hero">

        {/* Left — parchment */}
        <div className="wtc-hero-l">
          <div ref={heroTopRef}>
            <p className="wtc-hero-eyebrow">{t.hero.eyebrow}</p>

            <h1 className="wtc-hero-title">
              {t.hero.title.map((line) =>
                line === t.hero.accentLine
                  ? <span key={line}>{line.slice(0, -4)}<span className="accent">{line.slice(-4)}</span><br /></span>
                  : <span key={line}>{line}<br /></span>
              )}
            </h1>

            <p className="wtc-hero-sub">{t.hero.subtitle}</p>
          </div>

          <div ref={heroStatsRef} className="wtc-hero-stats">
            {t.hero.stats.map((s) => (
              <div key={s.label}>
                <p className={`wtc-stat-value${/[a-zA-Z→]/.test(s.value) ? ' small' : ''}`}>
                  {s.value}
                </p>
                <p className="wtc-stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — dark terminal panel (visível em desktop e mobile via CSS) */}
        <div className="wtc-hero-r">
          <TerminalWidget terminal={t.hero.terminal} />
          <p className="wtc-term-label">{t.hero.termLabel}</p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          MARQUEE
      ════════════════════════════════════════ */}
      <div className="wtc-mq-wrap">
        <div className="wtc-mq-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className={`wtc-mq-item${item.hot ? ' hot' : ''}`}>
              {item.label}
            </span>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════
          CONTEXT
      ════════════════════════════════════════ */}
      <section className="wtc-sec" id="contexto">
        <p className="wtc-sec-label">{t.context.sectionLabel}</p>

        <h2 className="wtc-heading wtc-rv">{t.context.heading}</h2>

        <div className="wtc-ctx-grid">
          <div className="wtc-rv">
            <RichPara text={t.context.paragraphs[0]} className="wtc-body" />
            <RichPara text={t.context.paragraphs[1]} className="wtc-body" style={{ marginTop: '.75rem' }} />
          </div>
          <div className="wtc-rv">
            <RichPara text={t.context.paragraphs[2]} className="wtc-body" />
            <RichPara text={t.context.paragraphs[3]} className="wtc-body" style={{ marginTop: '.75rem' }} />
          </div>
        </div>

        <blockquote className="wtc-pull-q wtc-rv">{t.context.pullQuote}</blockquote>

        <div className="wtc-metrics wtc-rv">
          {t.context.metrics.map((m) => (
            <div key={m.label} className="wtc-metric-card">
              <p className="wtc-metric-val">{m.value}</p>
              <p className="wtc-metric-lbl">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          LATIN SECTION
      ════════════════════════════════════════ */}
      <section className="wtc-latin-sec" id="latim">
        <div className="wtc-latin-inner">
          <p className="wtc-l-sec-label">{t.latin.sectionLabel}</p>

          <blockquote className="wtc-latin-quote wtc-rv-l">{t.latin.quote}</blockquote>
          <p className="wtc-latin-xlat">{t.latin.quoteTranslation}</p>

          <ChainDiagram chain={t.latin.chain} />

          <div className="wtc-latin-cols">
            {t.latin.cols.map((col, i) => (
              <div key={i} className="wtc-rv">
                <LatinRichPara text={col.body} />
                <LatinRichPara text={col.body2} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PROCESS
      ════════════════════════════════════════ */}
      <div className="wtc-proc-wrap" id="processo">
        <div className="wtc-proc-inner">
          <p className="wtc-sec-label">{t.process.sectionLabel}</p>
          <h2 className="wtc-heading wtc-rv">{t.process.heading}</h2>

          <div className="wtc-proc-grid">
            {t.process.cards.map((card) => (
              <div key={card.num} className="wtc-proc-card wtc-rv">
                <div className="wtc-proc-num">{card.num}</div>
                <p className="wtc-proc-phase">{card.phase}</p>
                <h3 className="wtc-proc-title">{card.title}</h3>
                <p className="wtc-proc-body">{card.body}</p>

                <div className="wtc-pbox ch">
                  <p className="wtc-pbox-label">{card.challengeLabel}</p>
                  <p className="wtc-pbox-text">{card.challenge}</p>
                </div>

                <div className="wtc-pbox dc">
                  <p className="wtc-pbox-label">{card.decisionLabel}</p>
                  <p className="wtc-pbox-text">{card.decision}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
          STACK
      ════════════════════════════════════════ */}
      <section className="wtc-stack-sec" id="stack">
        <div className="wtc-stack-inner">
          <p className="wtc-stack-sec-label">{t.stack.sectionLabel}</p>
          <h2 className="wtc-stack-heading wtc-rv">{t.stack.heading}</h2>
          <p className="wtc-stack-sub">{t.stack.sub}</p>

          <div className="wtc-stack-list">
            {STACK.map((item) => (
              <div key={item.name} className="wtc-s-item">
                <span className="wtc-s-num">{item.num}</span>
                <span className="wtc-s-name">{item.name}</span>
                <span className="wtc-s-role">{item.role[lang] ?? item.role['PT']}</span>
                <span className="wtc-s-icon">{item.icon}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CONCLUSION
      ════════════════════════════════════════ */}
      <section className="wtc-sec" id="conclusao">
        <p className="wtc-sec-label">{t.conclusion.sectionLabel}</p>
        <h2 className="wtc-heading wtc-rv">{t.conclusion.heading}</h2>

        <div style={{ maxWidth: '620px' }}>
          {t.conclusion.paragraphs.map((p, i) => (
            <p key={i} className="wtc-body wtc-rv">{p}</p>
          ))}
        </div>

        <div className="wtc-res-list">
          {t.conclusion.results.map((r, i) => (
            <div key={i} className="wtc-r-item">
              <span className="wtc-r-chk">✓</span>
              {r}
            </div>
          ))}
        </div>

        <div className="wtc-cta-row wtc-rv">
          <a
            href="https://github.com/richardsbez/waytranslate"
            target="_blank"
            rel="noopener noreferrer"
            className="wtc-btn wtc-btn-primary"
          >
            {t.conclusion.repoLabel}
          </a>
          <a href="/projects" className="wtc-btn wtc-btn-ghost">
            {t.conclusion.backLabel}
          </a>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════ */}
      <footer className="wtc-footer">
        <span>{t.footer}</span>
        <span>MIT © 2026</span>
      </footer>
    </div>
  )
}
