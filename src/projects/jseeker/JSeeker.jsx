/**
 * JSeeker.jsx — Raw Engineering Manifesto redesign
 * Stack: React 18 · Tailwind CSS · GSAP + ScrollTrigger · Lenis
 * Aesthetic: Ink black · Lime electric · Bebas Neue · IBM Plex Mono
 */

import { useEffect, useRef, useCallback, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

import './JSeeker.css'
import CASE_DATA, { CASE_LANGS, MARQUEE_ITEMS, STACK } from '../../i18n/jseeker.js'

gsap.registerPlugin(ScrollTrigger)

// ─────────────────────────────────────────────────────────────────────────────
// Terminal sub-component
// ─────────────────────────────────────────────────────────────────────────────
function Terminal({ terminal }) {
  return (
    <div className="jsk-term">
      <div className="jsk-term-bar">
        <div className="jsk-td jsk-td-r" />
        <div className="jsk-td jsk-td-y" />
        <div className="jsk-td jsk-td-g" />
        <span className="jsk-term-title">j-seeker — zsh</span>
      </div>

      <div className="jsk-term-body">
        <span className="jsk-t-prompt">{terminal.prompt}</span>

        {terminal.lines.map((line, i) => {
          if (line.type === 'dim') return <span key={i} className="jsk-t-dim">{line.text}</span>
          if (line.type === 'progress') return <span key={i} className="jsk-t-prog">{line.text}</span>
          if (line.type === 'green') return <span key={i} className="jsk-t-green">{line.text}</span>
          return <span key={i}>{line.text}</span>
        })}

        <div className="jsk-term-sep" />

        {terminal.results.map((r, i) => (
          <div key={i} className="jsk-score-row">
            <span className="jsk-score-badge">{r.score}</span>
            <span className="jsk-score-path">{r.path}</span>
          </div>
        ))}

        <div className="jsk-term-footer">{terminal.footer}</div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Pipeline sub-component
// ─────────────────────────────────────────────────────────────────────────────
function Pipeline({ pipeline }) {
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
            <span className="jsk-pipe-sub">{step.sub}</span>
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
// JSeeker main component
// ─────────────────────────────────────────────────────────────────────────────
export default function JSeeker() {
  // ── Language state ─────────────────────────────────────────────────────────
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
  const progressRef = useRef(null)
  const navRef = useRef(null)
  const lenisRef = useRef(null)

  // ── Lenis smooth scroll ────────────────────────────────────────────────────
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
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

  // ── Progress bar ───────────────────────────────────────────────────────────
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

  // ── Navbar scroll ──────────────────────────────────────────────────────────
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

  // ── Hero entrance ──────────────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.2 })
        .from('.jsk-hero-label', { opacity: 0, y: -10, duration: 0.5 })
        .from('.jsk-hero-title', { opacity: 0, y: 80, duration: 1.2, ease: 'power4.out' }, '-=0.2')
        .from('.jsk-hero-kicker', { opacity: 0, y: 20, duration: 0.7 }, '-=0.6')
        .from('.jsk-hero-stats > div', { opacity: 0, y: 16, stagger: 0.1, duration: 0.5 }, '-=0.4')
        .from('.jsk-hero-term-wrap', { opacity: 0, x: 30, duration: 0.9, ease: 'power2.out' }, '-=0.8')
    }, rootRef)
    return () => ctx.revert()
  }, [])

  // ── Scroll reveals ─────────────────────────────────────────────────────────
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('vis') }),
      { threshold: 0.08, rootMargin: '0px 0px -36px 0px' }
    )
    document.querySelectorAll('.jsk-rv, .jsk-rv-x').forEach((el, i) => {
      el.style.transitionDelay = `${(i % 7) * 0.065}s`
      io.observe(el)
    })
    return () => io.disconnect()
  }, [lang])

  // ── Stack stagger ──────────────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.jsk-s-item', {
        opacity: 0, x: -16, stagger: 0.06, duration: 0.5, ease: 'power2.out',
        scrollTrigger: { trigger: '.jsk-stack-list', start: 'top 88%', toggleActions: 'play none none reverse' },
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  // ── Conclusion results stagger ─────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.jsk-r-item', {
        opacity: 0, x: -16, stagger: 0.09, duration: 0.5, ease: 'power2.out',
        scrollTrigger: { trigger: '.jsk-res-list', start: 'top 90%', toggleActions: 'play none none reverse' },
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  // ── Metric cards ───────────────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.jsk-metric-card', {
        opacity: 0, scale: 0.92, y: 16, stagger: 0.09, duration: 0.55, ease: 'back.out(1.5)',
        scrollTrigger: { trigger: '.jsk-metrics-grid', start: 'top 88%', toggleActions: 'play none none reverse' },
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  const scrollTo = useCallback((id) => {
    lenisRef.current?.scrollTo(`#${id}`, { offset: -60, duration: 1.3 })
  }, [])

  const NAV_IDS = ['motivacao', 'arquitetura', 'processo', 'stack', 'conclusao']

  // ── RENDER ─────────────────────────────────────────────────────────────────
  return (
    <div ref={rootRef} className="jsk-root">
      <div ref={progressRef} className="jsk-progress" />

      {/* ════════════════════ NAV ════════════════════ */}
      <nav ref={navRef} className="jsk-nav">
        <p className="jsk-nav-logo">
          <a href="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>
            {t.navHome}
          </a>
        </p>

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
              {code}
            </button>
          ))}
        </div>
      </nav>

      {/* ════════════════════ HERO ════════════════════ */}
      <section className="jsk-hero">
        <div className="jsk-hero-inner">
          <div>
            <p className="jsk-hero-label">{t.hero.label}</p>
            <h1 className="jsk-hero-title">
              {t.hero.title.map((line, i) => (
                <span key={i}>
                  {line === t.hero.accentLine
                    ? <><span style={{ color: 'var(--lime)' }}>{line}</span><br /></>
                    : <>{line}<br /></>
                  }
                </span>
              ))}
            </h1>
            <p className="jsk-hero-kicker">{t.hero.kicker}</p>
          </div>

          <div className="jsk-hero-term-wrap">
            <Terminal terminal={t.hero.terminal} />
          </div>
        </div>

        <div className="jsk-hero-stats">
          {t.hero.stats.map((s) => (
            <div key={s.label}>
              <p className="jsk-hero-stat-val">{s.value}</p>
              <p className="jsk-hero-stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════ MARQUEE ════════════════════ */}
      <div className="jsk-mq-wrap">
        <div className="jsk-mq-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className={`jsk-mq-item${item.hot ? ' hot' : ''}`}>
              {item.label}
            </span>
          ))}
        </div>
      </div>

      {/* ════════════════════ CONTEXT / MOTIVAÇÃO ════════════════════ */}
      <section className="jsk-section" id="motivacao">
        <p className="jsk-section-label">{t.context.label}</p>
        <h2 className="jsk-heading jsk-rv">{t.context.heading}</h2>

        <div className="jsk-ctx-layout">
          <div>
            <p className="jsk-pull-q jsk-rv-x">{t.context.quote}</p>
            <div className="jsk-metrics-grid jsk-rv">
              {t.context.metrics.map((m) => (
                <div key={m.label} className="jsk-metric-card">
                  <p className={`jsk-metric-val${/[a-zA-Z~<]/.test(m.value) ? ' sm' : ''}`}>
                    {m.value}
                  </p>
                  <p className="jsk-metric-lbl">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            {t.context.body.map((p, i) => (
              <p key={i} className="jsk-body-text jsk-rv">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ ARCHITECTURE ════════════════════ */}
      <section className="jsk-arch-sec" id="arquitetura">
        <div className="jsk-section">
          <p className="jsk-section-label">{t.arch.label}</p>
          <h2 className="jsk-heading jsk-rv">{t.arch.heading}</h2>

          <div className="jsk-arch-layout">
            <div>
              {t.arch.cols.map((col, i) => (
                <div key={i} className="jsk-rv">
                  <p className="jsk-arch-card-title">{col.title}</p>
                  <p className="jsk-arch-body">{col.body}</p>
                </div>
              ))}
            </div>

            <div>
              <Pipeline pipeline={t.arch.pipeline} />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ PROCESS ════════════════════ */}
      <section className="jsk-section" id="processo">
        <p className="jsk-section-label">{t.process.label}</p>
        <h2 className="jsk-heading jsk-rv">{t.process.heading}</h2>

        <div className="jsk-proc-grid">
          {t.process.cards.map((card) => (
            <div key={card.num} className="jsk-proc-card jsk-rv">
              <span className="jsk-proc-num-bg">{card.num}</span>

              <div className="jsk-proc-tag">{card.tag}</div>
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
      </section>

      {/* ════════════════════ STACK ════════════════════ */}
      <section className="jsk-stack-sec" id="stack">
        <div className="jsk-section">
          <p className="jsk-section-label">{t.stack.label}</p>
          <h2 className="jsk-heading jsk-rv">{t.stack.heading}</h2>
          <p className="jsk-stack-sub">{t.stack.sub}</p>

          <div className="jsk-stack-list">
            {STACK.map((item) => (
              <div key={item.name} className="jsk-s-item">
                <span className="jsk-s-num">{item.num}</span>
                <span className="jsk-s-name">{item.name}</span>
                <span className="jsk-s-role">{item.role[lang] ?? item.role['PT']}</span>
                <span className="jsk-s-tag">{item.tag}</span>
                <span className="jsk-s-icon">{item.icon}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ CONCLUSION ════════════════════ */}
      <section className="jsk-section" id="conclusao">
        <p className="jsk-section-label">{t.conclusion.label}</p>
        <h2 className="jsk-heading jsk-rv">{t.conclusion.heading}</h2>

        <div className="jsk-concl-layout">
          <div>
            {t.conclusion.body.map((p, i) => (
              <p key={i} className="jsk-body-text jsk-rv">{p}</p>
            ))}

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
          </div>

          <div className="jsk-res-list">
            {t.conclusion.results.map((r, i) => (
              <div key={i} className="jsk-r-item">
                <span className="jsk-r-chk">✓</span>
                {r}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ FOOTER ════════════════════ */}
      <footer className="jsk-footer">
        <span>{t.footer}</span>
        <span>MIT © 2026</span>
      </footer>
    </div>
  )
}
