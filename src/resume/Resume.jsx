import { useState, useEffect } from "react";
import { RESUME, RESUME_LANGS } from "../i18n/resume.js";
import "./resume.css";
import { useNavigate } from "react-router-dom";

export default function Resume() {
  const [lang, setLang] = useState("PT");
  const navigate = useNavigate();
  const r = RESUME[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrint = () => window.print();

  return (
    <>
      {/* ── Barra de controles — NÃO aparece no print ── */}
      {/* Mantém a classe cv-toolbar que usa var(--cv-font-mono) no CSS */}
      <div className="cv-toolbar no-print" role="toolbar" aria-label="Controles do currículo">
        <div className="cv-toolbar-inner">
          <button className="cv-back-btn" onClick={() => navigate("/")}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.2"
              strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            {r.backLabel}
          </button>

          <span className="cv-toolbar-logo">RSB</span>

          <div className="cv-toolbar-right">
            <div className="cv-lang-switcher" role="group" aria-label="Idioma">
              {RESUME_LANGS.map(({ code, label }) => (
                <button
                  key={code}
                  className={`cv-lang-btn${lang === code ? " cv-lang-btn--active" : ""}`}
                  onClick={() => setLang(code)}
                  aria-pressed={lang === code}
                  style={{ color: lang === code ? '#fff' : 'rgba(255,255,255,0.5)' }}
                >
                  {label}
                </button>
              ))}
            </div>

            <button className="cv-download-btn" onClick={handlePrint}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {r.downloadLabel}
            </button>
          </div>
        </div>
      </div>

      {/* ── Folha do currículo — Agora com Open Sans via CSS ── */}
      <main className="cv-sheet">

        {/* CABEÇALHO */}
        <div className="cv-header">
          <div className="cv-header-left">
            {/* O estilo 'italic' foi removido aqui para um look mais corporativo/limpo */}
            <h1 className="cv-name" style={{ fontStyle: 'normal' }}>{r.name}</h1>
          </div>
          <div className="cv-header-right">
            <p className="cv-contact-line"><strong>Contato:</strong> {r.contact.phone}</p>
            <p className="cv-contact-line"><strong>Email:</strong> {r.contact.email}</p>
            <p className="cv-contact-line">
              <strong>Startup:</strong>{" "}
              <a href={`https://${r.contact.startup}`} target="_blank" rel="noopener noreferrer">
                {r.contact.startup}
              </a>
            </p>
            <p className="cv-contact-line">
              <strong>GitHub:</strong>{" "}
              <a href={r.contact.github} target="_blank" rel="noopener noreferrer">
                {r.contact.github.replace("https://", "")}
              </a>
            </p>
          </div>
        </div>

        <div className="cv-body">
          {/* COLUNA ESQUERDA */}
          <div className="cv-col cv-col-left">
            <section className="cv-section">
              <h2 className="cv-section-title">{r.sections.summary}</h2>
              <div className="cv-rule" />
              <p className="cv-summary">{r.summary}</p>
            </section>

            <section className="cv-section">
              <h2 className="cv-section-title">{r.sections.experience}</h2>
              <div className="cv-rule" />
              {r.experience.map((exp, i) => (
                <div key={i} className="cv-exp">
                  {/* Removemos o 'italic' das funções para passar mais autoridade */}
                  <p className="cv-exp-role" style={{ fontStyle: 'normal' }}>{exp.role}</p>
                  {exp.company && (
                    <p className="cv-exp-meta">
                      <strong>{exp.company}</strong>
                      {exp.period && <> • {exp.period}</>}
                    </p>
                  )}
                  <ul className="cv-exp-list">
                    {exp.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </div>

          {/* COLUNA DIREITA */}
          <div className="cv-col cv-col-right">
            <section className="cv-section">
              <h2 className="cv-section-title">{r.sections.skills}</h2>
              <div className="cv-rule" />

              <h3 className="cv-sub-title" style={{ fontStyle: 'normal' }}>{r.sections.tech}</h3>
              <div className="cv-tech-list">
                {r.tech.rows.map((row, i) => (
                  <p key={i} className="cv-tech-row">
                    <strong style={{ fontStyle: 'normal' }}>{row.label}</strong> {row.value}
                  </p>
                ))}
              </div>

              <h3 className="cv-sub-title" style={{ marginTop: "1.1rem", fontStyle: 'normal' }}>
                {r.sections.other}
              </h3>
              <div className="cv-other-list">
                {r.other.map((item, i) => (
                  <p key={i} className="cv-other-row">
                    <strong style={{ fontStyle: 'normal' }}>{item.label}</strong> {item.value}
                  </p>
                ))}
              </div>

              <h3 className="cv-sub-title" style={{ marginTop: "1.1rem", fontStyle: 'normal' }}>
                {r.sections.languages}
              </h3>
              <ul className="cv-lang-list">
                {r.languages.map((l, i) => <li key={i} style={{ fontStyle: 'normal' }}>{l}</li>)}
              </ul>
            </section>

            <section className="cv-section">
              <h2 className="cv-section-title">{r.sections.education}</h2>
              <div className="cv-rule" />
              {r.education.map((edu, i) => (
                <div key={i} className="cv-edu">
                  <p className="cv-edu-inst" style={{ fontStyle: 'normal' }}>{edu.institution}</p>
                  {edu.degree && <p className="cv-edu-degree">{edu.degree}</p>}
                </div>
              ))}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
