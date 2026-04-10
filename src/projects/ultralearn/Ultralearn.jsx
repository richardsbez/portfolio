/**
 * CaseStudy.jsx — Componente principal da página de Estudo de Caso
 * * Stack: React 18 · Tailwind CSS · GSAP + ScrollTrigger · Lenis
 */

import { useEffect, useRef, useCallback, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

import './Ultralearn.css'
// Importações de dados (certifique-se de que os caminhos e arquivos .js existam)
import CASE_DATA, { CASE_LANGS, STACK } from '../../i18n/ultralearn.js'

// Registrar o plugin ScrollTrigger no GSAP uma única vez
gsap.registerPlugin(ScrollTrigger)

// ─────────────────────────────────────────────────────────────────────────────
// Ícone de seta (inline SVG)
// ─────────────────────────────────────────────────────────────────────────────
const ArrowUpRight = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2 10L10 2M10 2H4M10 2V8" />
  </svg>
)

// ─────────────────────────────────────────────────────────────────────────────
// CaseStudy — componente principal
// ─────────────────────────────────────────────────────────────────────────────
export default function Ultralearn() {
  // ── Estado de idioma ───────────────────────────────────────────────────────
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-lang') ?? 'PT'
    }
    return 'PT'
  })

  // t = objeto de tradução do idioma atual
  const t = CASE_DATA[lang] ?? CASE_DATA.PT

  const handleLangChange = useCallback((code) => {
    setLang(code)
    localStorage.setItem('portfolio-lang', code)
    // Refresca o ScrollTrigger pois o conteúdo pode mudar de tamanho
    ScrollTrigger.refresh()
  }, [])

  const { hero, context, timeline, conclusion } = t
  const stack = STACK

  // ── Refs para elementos animados ────────────────────────────────────────────
  const rootRef = useRef(null)
  const progressRef = useRef(null)
  const cursorRef = useRef(null)
  const cursorRingRef = useRef(null)
  const navRef = useRef(null)

  // Hero Refs
  const heroEyebrowRef = useRef(null)
  const heroTitleRef = useRef(null)
  const heroSubRef = useRef(null)
  const heroTagsRef = useRef(null)
  const heroLineRef = useRef(null)

  const lenisRef = useRef(null)

  // ── 1. LENIS — Smooth Scroll ─────────────────────────────────────────────────
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



  // ── 3. Progress bar de leitura ───────────────────────────────────────────────
  useEffect(() => {
    const bar = progressRef.current
    if (!bar) return

    const trigger = ScrollTrigger.create({
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        gsap.set(bar, { scaleX: self.progress })
      },
    })

    return () => trigger.kill()
  }, [])

  // ── 4. Navbar Background ─────────────────────────────────────────────────────
  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    const trigger = ScrollTrigger.create({
      start: '80px top',
      onEnter: () => nav.classList.add('scrolled'),
      onLeaveBack: () => nav.classList.remove('scrolled'),
    })

    return () => trigger.kill()
  }, [])

  // ── 5. Hero Animations ───────────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        delay: 0.3,
      })

      tl.from(heroEyebrowRef.current, {
        opacity: 0,
        y: 12,
        duration: 0.7,
      })
        .from(heroTitleRef.current, {
          opacity: 0,
          y: 60,
          duration: 1.1,
        }, '-=0.4')
        .from(heroSubRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
        }, '-=0.6')
        .from(heroTagsRef.current?.children ?? [], {
          opacity: 0,
          y: 12,
          stagger: 0.08,
          duration: 0.5,
        }, '-=0.5')
        .from(heroLineRef.current, {
          scaleY: 0,
          transformOrigin: 'top center',
          duration: 1.2,
          ease: 'power2.inOut',
        }, '-=1')
    }, rootRef)

    return () => ctx.revert()
  }, [])

  // ── 6. Context Section Animations ───────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cs-context-heading', {
        scrollTrigger: {
          trigger: '.cs-context-heading',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: 'power3.out',
      })

      gsap.from('.cs-context-para', {
        scrollTrigger: {
          trigger: '.cs-context-para',
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.7,
        ease: 'power2.out',
      })

      gsap.from('.cs-metric-card', {
        scrollTrigger: {
          trigger: '.cs-metrics-grid',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        scale: 0.88,
        y: 24,
        stagger: 0.1,
        duration: 0.6,
        ease: 'back.out(1.5)',
      })

      document.querySelectorAll('.cs-metric-value').forEach((el) => {
        const target = parseInt(el.textContent ?? '0', 10)
        if (isNaN(target)) return
        gsap.from({ val: 0 }, {
          val: target,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          onUpdate: function () {
            el.textContent = Math.round(this.targets()[0].val).toString()
          },
        })
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  // ── 7. Timeline reveal ───────────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.cs-timeline-item').forEach((item) => {
        gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        })
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  // ── 8. Stack Cards Stagger ───────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.cs-stack-card', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: {
          each: 0.07,
          from: 'start',
          grid: 'auto',
        },
        scrollTrigger: {
          trigger: '.cs-stack-grid',
          start: 'top 82%',
          toggleActions: 'play none none reverse',
        },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  // ── 9. Conclusion reveal ─────────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.cs-result-item', {
        opacity: 1,
        x: 0,
        duration: 0.55,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.cs-results-list',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.from('.cs-cta-buttons', {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.cs-cta-buttons',
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  const scrollTo = useCallback((id) => {
    lenisRef.current?.scrollTo(`#${id}`, { offset: -80, duration: 1.4 })
  }, [])

  return (
    <div ref={rootRef} className="cs-root min-h-screen">
      <div ref={cursorRef} className="cs-cursor" />
      <div ref={cursorRingRef} className="cs-cursor-ring" />
      <div ref={progressRef} className="cs-progress-bar w-full" />

      <nav ref={navRef} className="cs-nav">
        <p className="cs-nav-logo">
          <a href="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>
            {t.navHome}
          </a>
        </p>
        <ul className="cs-nav-links">
          {t.nav.map((label, i) => {
            const ids = ['contexto', 'processo', 'stack', 'conclusao']
            return (
              <li key={label}>
                <a href={`#${ids[i]}`} onClick={(e) => { e.preventDefault(); scrollTo(ids[i]) }}>
                  {label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="cs-lang-switcher">
          {CASE_LANGS.map(({ code, flag }) => (
            <button
              key={code}
              className={`cs-lang-btn${lang === code ? ' active' : ''}`}
              onClick={() => handleLangChange(code)}
              title={code}
            >
              {code}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="cs-hero">
        <div ref={heroLineRef} className="cs-hero-line" />
        <p className="cs-hero-scroll-hint">scroll</p>
        <div className="cs-hero-fade" />
        <p ref={heroEyebrowRef} className="cs-hero-eyebrow">
          {hero.label} <span className="cs-blink">_</span>
        </p>
        <h1 ref={heroTitleRef} className="cs-hero-title" data-text={hero.title}>
          Ultra<em>Learn</em>
        </h1>
        <p ref={heroSubRef} className="cs-hero-sub">
          {hero.subtitle}
        </p>
        <div ref={heroTagsRef} className="cs-hero-tags">
          {hero.tags.map((tag) => (
            <span key={tag} className="cs-tag">{tag}</span>
          ))}
        </div>
      </section>

      {/* Context Section */}
      <section id="contexto" className="cs-section">
        <p className="cs-section-label">{context.sectionLabel}</p>
        <h2 className="cs-heading cs-context-heading">{context.heading}</h2>
        <div className="mb-14 max-w-2xl">
          {context.paragraphs.map((p, i) => (
            <p
              key={i}
              className="cs-body cs-context-para"
              dangerouslySetInnerHTML={{ __html: p.replace(/\*(.*?)\*/g, '<em>$1</em>') }}
            />
          ))}
        </div>
        <div className="cs-metrics-grid grid grid-cols-2 md:grid-cols-4 gap-px border border-[var(--border)]">
          {context.metrics.map((m) => (
            <div key={m.label} className="cs-metric-card">
              <p className="cs-metric-value">{m.value}</p>
              <p className="cs-metric-label">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section id="processo" className="cs-section-wide">
        <div className="max-w-[1100px] mx-auto px-10">
          <p className="cs-section-label">02 / Processo</p>
          <h2 className="cs-heading mb-16">{t.processHeading}</h2>
          <div className="cs-timeline">
            {timeline.map((item, i) => (
              <div key={i} className="cs-timeline-item">
                <div className="cs-timeline-dot" />
                <p className="cs-timeline-phase">{item.phase}</p>
                <h3 className="cs-timeline-title">{item.title}</h3>
                <p className="cs-body cs-timeline-body">{item.body}</p>
                <div className="cs-box challenge">
                  <p className="cs-box-label">{t.challengeLabel}</p>
                  <p style={{ color: 'var(--text-muted)' }}>{item.challenge}</p>
                </div>
                <div className="cs-box decision">
                  <p className="cs-box-label">{t.decisionLabel}</p>
                  <p style={{ color: 'var(--text-muted)' }}>{item.decision}</p>
                </div>
                <span className="cs-timeline-tag">{item.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section id="stack" className="cs-section">
        <p className="cs-section-label">03 / Stack & Tools</p>
        <h2 className="cs-heading mb-12">{t.stackHeading}</h2>
        <div className="cs-stack-grid grid grid-cols-2 md:grid-cols-4 gap-px border border-[var(--border)]">
          {stack.map((item) => (
            <div key={item.name} className="cs-stack-card">
              <span className="cs-stack-icon">{item.icon}</span>
              <div>
                <p className="cs-stack-name">{item.name}</p>
                <p className="cs-stack-role">
                  {item.role[lang] ?? item.role['PT']}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion Section */}
      <section id="conclusao" className="cs-section">
        <p className="cs-section-label">{conclusion.sectionLabel}</p>
        <h2 className="cs-heading">{conclusion.heading}</h2>
        <div className="mb-12 max-w-2xl">
          {conclusion.paragraphs.map((p, i) => (
            <p key={i} className="cs-body" style={{ marginTop: i > 0 ? '1.25rem' : 0 }}>
              {p}
            </p>
          ))}
        </div>
        <div className="cs-results-list mb-14 max-w-xl">
          {conclusion.results.map((r, i) => (
            <div key={i} className="cs-result-item">{r}</div>
          ))}
        </div>
        <div className="cs-cta-buttons flex flex-wrap gap-4">
          {conclusion.links.repo && (
            <a href={conclusion.links.repo} target="_blank" rel="noopener noreferrer" className="cs-btn cs-btn-primary">
              {t.repoLabel} <ArrowUpRight />
            </a>
          )}
          {conclusion.links.live && (
            <a href={conclusion.links.live} target="_blank" rel="noopener noreferrer" className="cs-btn cs-btn-ghost">
              {t.liveLabel} <ArrowUpRight />
            </a>
          )}
          <a href="/projects" className="cs-btn cs-btn-ghost">{t.backLabel}</a>
        </div>
      </section>

      <footer className="cs-footer">
        <span>// {t.footer}</span>
        <span>MIT © </span>
      </footer>
    </div>
  )
}
