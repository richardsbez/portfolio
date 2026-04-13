import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import { t, setLanguage, PROJECT_LANGS } from "../i18n/projects.js";

// ════════════════════════════════════════════
//  ALGORITMO DE GERAÇÃO DE TEMAS
//  — Nenhum tema precisa ser escrito manualmente.
//  — Cada projeto recebe um tema determinístico
//    baseado em seu id + nome.
// ════════════════════════════════════════════

/** Hash djb2 — rápido, determinístico, boa distribuição */
function hashStr(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) {
    h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

/** Helpers para montar cores HSL/HSLA */
const hsl = (h, s, l) => `hsl(${h},${s}%,${l}%)`;
const hsla = (h, s, l, a) => `hsla(${h},${s}%,${l}%,${a})`;

/**
 * generateTheme(project) → objeto com todas as CSS custom properties.
 *
 * Algoritmo:
 *  1. Matiz base   = seed × 137.508° mod 360  (ângulo dourado → distribuição uniforme)
 *  2. Matiz accent = base + 150° + delta       (contraste alto, harmonioso)
 *  3. Matiz detalhe = accent + 30° + delta
 *  4. Escuro vs claro → seed % 10 < 6  (60% escuros)
 *  5. Saturação e luminosidade derivadas do seed (variedade sutil)
 *  6. Fonte → 3 opções, escolhida por seed % 3
 */
function generateTheme(project) {
  const seed = hashStr(project.name + project.id);

  const hueBase = Math.round((seed * 137.508) % 360);
  const hueAccent = Math.round((hueBase + 150 + (seed % 70)) % 360);
  const hueDetail = Math.round((hueAccent + 30 + (seed % 40)) % 360);

  const fonts = [
    "'Barlow Condensed', sans-serif",
    "'Orbitron', 'Barlow Condensed', sans-serif",
    "'IBM Plex Mono', monospace",
  ];
  const fontHero = fonts[seed % fonts.length];

  const isDark = (seed % 10) < 6;
  const c = (h, s, l, a) => (a !== undefined ? hsla(h, s, l, a) : hsl(h, s, l));

  if (isDark) {
    const bgS = 18 + (seed % 22);
    const bgL = 4 + (seed % 9);
    const accS = 65 + (seed % 22);
    const accL = 55 + (seed % 20);

    return {
      "--p": c(hueBase, bgS, bgL),
      "--ink": c(hueBase, 10, 88 + (seed % 10)),
      "--fog": c(hueBase, 12, 46 + (seed % 20)),
      "--rule": c(hueAccent, 50, 65, 0.12),
      "--ember": c(hueAccent, accS, accL),
      "--font-hero": fontHero,
      "--tag-bg": c(hueAccent, accS, accL, 0.12),
      "--tag-border": c(hueAccent, accS, accL, 0.30),
      "--tag-color": c(hueAccent, accS, accL),
      "--detail-bg": c(hueDetail, 70, 62, 0.07),
      "--detail-border": c(hueDetail, 70, 62, 0.22),
      "--detail-color": c(hueDetail, 75, 65),
      "--badge-bg": c(hueBase, 10, 88, 0.05),
      "--badge-border": c(hueBase, 10, 88, 0.15),
      "--badge-color": c(hueBase, 10, 90),
      "--row-hover-bg": c(hueAccent, accS, accL, 0.04),
      "--name-hover": c(hueAccent, accS, accL),
      "--expand-active": c(hueDetail, 75, 65),
      "--glow-hero": c(hueAccent, accS, accL, 0.20),
      "--glow-accent": c(hueAccent, accS, accL, 0.35),
    };
  } else {
    const bgS = 14 + (seed % 18);
    const bgL = 93 + (seed % 5);
    const accS = 60 + (seed % 22);
    const accL = 36 + (seed % 18);

    return {
      "--p": c(hueBase, bgS, bgL),
      "--ink": c(hueBase, 30, 8 + (seed % 12)),
      "--fog": c(hueBase, 16, 42 + (seed % 22)),
      "--rule": c(hueBase, 30, 10, 0.10),
      "--ember": c(hueAccent, accS, accL),
      "--font-hero": fontHero,
      "--tag-bg": c(hueAccent, accS, accL, 0.10),
      "--tag-border": c(hueAccent, accS, accL, 0.28),
      "--tag-color": c(hueAccent, accS, accL),
      "--detail-bg": c(hueDetail, 65, 45, 0.07),
      "--detail-border": c(hueDetail, 65, 45, 0.22),
      "--detail-color": c(hueDetail, 65, 42),
      "--badge-bg": c(hueBase, 30, 10, 0.05),
      "--badge-border": c(hueBase, 30, 10, 0.15),
      "--badge-color": c(hueBase, 30, 10),
      "--row-hover-bg": c(hueAccent, accS, accL, 0.03),
      "--name-hover": c(hueAccent, accS, accL),
      "--expand-active": c(hueDetail, 65, 42),
      "--glow-hero": "none",
      "--glow-accent": "none",
    };
  }
}

/** Rótulo do badge gerado automaticamente */
function getThemeLabel(project) {
  const descriptor = (project.stack?.[0] ?? project.type ?? "custom")
    .toLowerCase()
    .split(" ")[0];
  return `${project.name.toLowerCase()} / ${descriptor}`;
}

/** Todas as props que o algoritmo pode injetar */
const THEME_VARS = [
  "--p", "--ink", "--fog", "--rule", "--ember", "--font-hero",
  "--tag-bg", "--tag-border", "--tag-color",
  "--detail-bg", "--detail-border", "--detail-color",
  "--badge-bg", "--badge-border", "--badge-color",
  "--row-hover-bg", "--name-hover", "--expand-active",
  "--glow-hero", "--glow-accent",
];

// ════════════════════════════════════════════
//  DADOS DOS PROJETOS
//  Adicione um novo objeto aqui — o tema é gerado automaticamente.
// ════════════════════════════════════════════
const PROJECTS = [
  {
    id: "01",
    name: "ayrCore tech",
    metrics: ["Perf. 100 Lighthouse", "GSAP + Lenis", "Firebase realtime"],
    type: "ambos",
    year: "",
    stack: ["React", "Node.js", "TypeScript", "gsap", "Lenis", "Tailwind CSS", "Firebase"],
    descKey: "ayrcore_desc",
    url: "https://www.ayrcoretech.com/en-US",
    status: "ativo",
    details: {
      motivationKey: "ayrcore_motivation",
      processKey: "ayrcore_process",
      roleKey: "ayrcore_role",
      highlightKeys: ["ayrcore_h1", "ayrcore_h2", "ayrcore_h3"],
    },
  },
  {
    id: "02",
    name: "UltraLearn",
    metrics: ["100% offline", "Markdown + YAML", "Spaced repetition"],
    type: "pessoal",
    year: "",
    stack: ["Electron", "React", "TypeScript", "Markdown", "YAML"],
    descKey: "ultralearn_desc",
    url: "/projects/ultralearn",
    status: "ativo",
    details: {
      motivationKey: "ultralearn_motivation",
      processKey: "ultralearn_process",
      roleKey: "ultralearn_role",
      highlightKeys: ["ultralearn_h1", "ultralearn_h2", "ultralearn_h3"],
    },
  },
  {
    id: "03",
    name: "Core-Shell Mesh",
    metrics: ["Latência sub-50ms", "100k+ pontos a 60FPS", "Convergência CRDT"],
    type: "ambos",
    year: "",
    stack: ["Rust", "Wasm", "WebTransport", "CRDTs", "WebGL"],
    descKey: "coreshell_desc",
    url: "/projects/projectcoreshelll",
    status: "concluído",
    details: {
      motivationKey: "coreshell_motivation",
      processKey: "coreshell_process",
      roleKey: "coreshell_role",
      highlightKeys: ["coreshell_h1", "coreshell_h2", "coreshell_h3"],
    },
  },
  {
    id: "04",
    name: "Waytranslate",
    metrics: ["~40 idiomas", "Async Rust", "Self-hosted"],
    type: "pessoal",
    year: "",
    stack: ["Rust", "Docker", "Reqwest", "LibreTranslate"],
    descKey: "waytranslate_desc",
    url: "/projects/waytranslate",
    status: "concluído",
    details: {
      motivationKey: "waytranslate_motivation",
      processKey: "waytranslate_process",
      roleKey: "waytranslate_role",
      highlightKeys: ["waytranslate_h1", "waytranslate_h2", "waytranslate_h3"],
    },
  },
  {
    id: "05",
    name: "J-Seeker",
    metrics: ["80k docs/s", "Zero I/O bloqueante", "Java 21 Virtual Threads"],
    type: "ambos",
    year: "",
    stack: ["Java 21", "Virtual Threads", "NIO", "Data Structures"],
    descKey: "jseeker_desc",
    url: "/projects/jseeker/",
    status: "concluído",
    details: {
      motivationKey: "jseeker_motivation",
      processKey: "jseeker_process",
      roleKey: "jseeker_role",
      highlightKeys: ["jseeker_h1", "jseeker_h2", "jseeker_h3"],
    },
  },
  {
    id: "06",
    name: "SulExpress",
    metrics: ["REST + JWT", "< 50 ms p95", "CRUD completo"],
    type: "ambos",
    year: "",
    stack: ["Python", "FastAPI", "PostgreSQL", "JavaScript"],
    descKey: "sulexpress_desc",
    url: "#",
    status: "concluído",
    details: {
      motivationKey: "sulexpress_motivation",
      processKey: "sulexpress_process",
      roleKey: "sulexpress_role",
      highlightKeys: ["sulexpress_h1", "sulexpress_h2"],
    },
  },
  {
    id: "07",
    name: "GammaIndex",
    metrics: [".NET 8", "Azure Cloud", "Relatórios PDF"],
    type: "profissional",
    year: "",
    stack: ["C#", ".NET", "Azure"],
    descKey: "gammaindex_desc",
    url: "#",
    status: "concluído",
    details: {
      motivationKey: "gammaindex_motivation",
      processKey: "gammaindex_process",
      roleKey: "gammaindex_role",
      highlightKeys: ["gammaindex_h1", "gammaindex_h2", "gammaindex_h3"],
    },
  },
];

// ════════════════════════════════════════════
//  Labels estáticos de tipo e status
// ════════════════════════════════════════════
const TYPE_LABEL = {
  pessoal: { labelKey: "tag_personal", cls: "tag--fog" },
  profissional: { labelKey: "tag_professional", cls: "tag--ink" },
  ambos: { labelKey: "tag_hybrid", cls: "tag--ember" },
};

const STATUS_LABEL = {
  ativo: { labelKey: "status_ativo", cls: "st--ativo" },
  "em pausa": { labelKey: "status_pausa", cls: "st--pausa" },
  concluído: { labelKey: "status_done", cls: "st--done" },
};

// ════════════════════════════════════════════
//  COMPONENTES
// ════════════════════════════════════════════

/** Row individual de projeto com acessibilidade e sem bug no <a> */
function ProjectRow({ p, isOpen, onToggle }) {
  const typeInfo = TYPE_LABEL[p.type] ?? { labelKey: p.type, cls: "tag--fog" };
  const statusInfo = STATUS_LABEL[p.status] ?? { labelKey: p.status, cls: "st--done" };

  /** Acessibilidade: abre/fecha com Enter ou Espaço */
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onToggle();
      }
    },
    [onToggle]
  );

  return (
    <li
      className={`proj-row${isOpen ? " active" : ""}`}
      onClick={onToggle}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-expanded={isOpen}
      aria-label={`${p.name} — ${isOpen ? t("collapse_label") : t("expand_label")}`}
    >
      <div className="proj-row-accent" aria-hidden="true" />

      <div className="proj-row-inner">
        <span className="proj-num" aria-hidden="true">{p.id}</span>

        <div className="proj-body">
          <div className="proj-body-top">
            <div className="proj-name-wrap">
              <h2 className="proj-name">{p.name}</h2>
              <span className={`tag ${typeInfo.cls}`}>{t(typeInfo.labelKey)}</span>
              <span className={`proj-status ${statusInfo.cls}`}>{t(statusInfo.labelKey)}</span>
            </div>

            <div className="proj-body-right">
              {/* ✅ Bug corrigido: <a> estava com atributos fora da tag */}
              {p.url !== "#" && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-ext-link"
                  onClick={(e) => e.stopPropagation()}
                  title={t("visit_project")}
                  aria-label={`${t("visit_project")} ${p.name}`}
                >
                  ↗
                </a>
              )}
              {p.year && <span className="proj-year">{p.year}</span>}
              <span
                className="proj-expand-icon"
                aria-hidden="true"
              >
                +
              </span>
            </div>
          </div>

          <p className="proj-desc">{t(p.descKey)}</p>

          {/* Métricas: renderiza somente se o projeto as tiver */}
          {p.metrics?.length > 0 && (
            <div className="proj-metrics" aria-label="Métricas">
              {p.metrics.map((m, i) => (
                <span key={i} className="proj-metric">
                  <span className="proj-metric-val">{m}</span>
                </span>
              ))}
            </div>
          )}

          <div className="proj-stack" aria-label="Stack tecnológico">
            {p.stack.map((s, i) => (
              <span key={i} className="proj-stack-item">{s}</span>
            ))}
          </div>
          {p.url !== "#" && (
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-inline-link"
              onClick={(e) => e.stopPropagation()}
            >
              {t("visit_project")} ↗
            </a>
          )}
        </div>
      </div>

      {/* Painel de detalhes — animado via CSS grid-template-rows */}
      <div
        className={`proj-details${isOpen ? " open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="proj-details-inner">
          <div className="proj-details-content">
            <div className="proj-detail-block">
              <span className="proj-detail-label">{t("detail_motivation")}</span>
              <p className="proj-detail-text">{t(p.details.motivationKey)}</p>
            </div>
            <div className="proj-detail-block">
              <span className="proj-detail-label">{t("detail_process")}</span>
              <p className="proj-detail-text">{t(p.details.processKey)}</p>
            </div>
            <div className="proj-detail-block">
              <span className="proj-detail-label">{t("detail_role")}</span>
              <span className="proj-role-badge">{t(p.details.roleKey)}</span>
            </div>
            <div className="proj-detail-block">
              <span className="proj-detail-label">{t("detail_highlights")}</span>
              <div className="proj-highlights">
                {p.details.highlightKeys.map((hk, i) => (
                  <span key={i} className="proj-highlight">{t(hk)}</span>
                ))}
              </div>
              {/*
              {p.url !== "#" && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-detail-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  {t("visit_project")}
                </a>
              )}*/}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

/** Badge de tema — aparece ao trocar o projeto ativo */
function ThemeBadge({ label, visible }) {
  return (
    <div
      className={`theme-badge${visible ? " visible" : ""}`}
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="theme-badge-dot" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}

// ════════════════════════════════════════════
//  PAGE
// ════════════════════════════════════════════
export default function Projects() {
  const listRef = useRef(null);
  const pageRef = useRef(null);
  const badgeTimerRef = useRef(null);

  const [openId, setOpenId] = useState(null);
  const [badge, setBadge] = useState({ visible: false, label: "" });
  const [lang, setLang] = useState("pt");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /** Pré-computa todos os temas uma única vez */
  const themes = useMemo(
    () => Object.fromEntries(PROJECTS.map((p) => [p.id, generateTheme(p)])),
    []
  );

  const handleLangChange = useCallback((code) => {
    setLanguage(code);
    setLang(code);
  }, []);

  /**
   * Aplica as CSS vars geradas diretamente no .proj-page via inline style.
   * Sobrescreve os defaults sem tocar no <body>.
   */
  const applyTheme = useCallback(
    (project) => {
      const el = pageRef.current;
      if (!el) return;

      // Limpa vars anteriores
      THEME_VARS.forEach((v) => el.style.removeProperty(v));

      if (!project) {
        setBadge({ visible: false, label: "" });
        return;
      }

      // Usa o tema pré-computado
      const theme = themes[project.id] ?? generateTheme(project);
      Object.entries(theme).forEach(([k, v]) => el.style.setProperty(k, v));

      const label = getThemeLabel(project);
      setBadge({ visible: true, label });

      clearTimeout(badgeTimerRef.current);
      badgeTimerRef.current = setTimeout(
        () => setBadge((b) => ({ ...b, visible: false })),
        3000
      );
    },
    [themes]
  );

  /** Limpa vars e timers ao desmontar */
  useEffect(() => {
    return () => {
      if (pageRef.current) {
        THEME_VARS.forEach((v) => pageRef.current.style.removeProperty(v));
      }
      clearTimeout(badgeTimerRef.current);
    };
  }, []);

  /** Animação de entrada escalonada via IntersectionObserver */
  useEffect(() => {
    const items = listRef.current?.querySelectorAll(".proj-row");
    if (!items?.length) return;

    // Respeita prefers-reduced-motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    items.forEach((el, i) => {
      if (prefersReduced) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      el.style.transition = `
        opacity   .7s cubic-bezier(.16,1,.3,1) ${i * 0.08 + 0.2}s,
        transform .7s cubic-bezier(.16,1,.3,1) ${i * 0.08 + 0.2}s
      `;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = "1";
            e.target.style.transform = "translateY(0)";
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleToggle = useCallback(
    (p) => {
      setOpenId((prev) => {
        const next = prev === p.id ? null : p.id;
        applyTheme(next ? p : null);
        return next;
      });
    },
    [applyTheme]
  );

  return (
    <div className="proj-page" ref={pageRef}>
      <header className="proj-header">
        <Link to="/" className="proj-back" aria-label={t("back_label")}>
          <span className="proj-back-arrow" aria-hidden="true">←</span>
          <span>{t("back_label")}</span>
        </Link>

        {/* Seletor de idioma */}
        <nav className="cv-lang-switcher" aria-label="Seletor de idioma">
          {PROJECT_LANGS.map(({ code, label }) => (
            <button
              key={code}
              className={`cv-lang-btn${lang === code ? " cv-lang-btn--active" : ""}`}
              onClick={(e) => { e.stopPropagation(); handleLangChange(code); }}
              aria-pressed={lang === code}
              aria-label={`Idioma: ${label}`}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="proj-header-right" aria-hidden="true">
          <span className="proj-header-tag">{t("header_tag")}</span>
          <span className="proj-header-count">{t("header_count", { count: PROJECTS.length })}</span>
        </div>
      </header>

      <section className="proj-hero" aria-labelledby="proj-hero-title">
        <div className="proj-hero-inner">
          <span className="proj-hero-eyebrow">{t("hero_eyebrow")}</span>
          <h1 className="proj-hero-title" id="proj-hero-title">{t("hero_title")}</h1>
          <p className="proj-hero-sub">
            {t("hero_sub").split("\n").map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </p>
        </div>
        <div className="proj-hero-rule" aria-hidden="true" />
      </section>

      {/* Legenda dos tipos de projeto */}
      <div className="proj-legend" role="legend" aria-label="Legenda">
        <span className="proj-legend-item">
          <span className="tag tag--ember" aria-hidden="true">{t("tag_hybrid")}</span>
          {t("legend_hybrid")}
        </span>
        <span className="proj-legend-item">
          <span className="tag tag--fog" aria-hidden="true">{t("tag_personal")}</span>
          {t("legend_personal")}
        </span>
        <span className="proj-legend-item">
          <span className="tag tag--ink" aria-hidden="true">{t("tag_professional")}</span>
          {t("legend_professional")}
        </span>
      </div>

      <ul className="proj-list" ref={listRef} aria-label={t("header_count", { count: PROJECTS.length })}>
        {PROJECTS.map((p) => (
          <ProjectRow
            key={p.id}
            p={p}
            isOpen={openId === p.id}
            onToggle={() => handleToggle(p)}
          />
        ))}
      </ul>

      <footer className="proj-foot">
        <span className="proj-foot-l">{t("footer_left")}</span>
        <Link to="/" className="proj-foot-r">{t("footer_right")}</Link>
      </footer>

      <ThemeBadge label={badge.label} visible={badge.visible} />
    </div>
  );
}
