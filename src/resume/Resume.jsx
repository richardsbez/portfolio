import { useState } from "react";

import { RESUME, RESUME_LANGS } from "../i18n/resume.js";
import "./resume.css";
import { useNavigate } from "react-router-dom";

export default function Resume() {
  const [lang, setLang] = useState("PT");
  const navigate = useNavigate();
  const r = RESUME[lang];

  const handlePrint = () => window.print();

  return (
    <>
      {/* ── Barra de controles — NÃO aparece no print ── */}
      <div className="cv-toolbar no-print">
        <div className="cv-toolbar-inner">
          {/* ← botão voltar */}
          <button className="cv-back-btn" onClick={() => navigate("/")}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.2"
              strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            {r.backLabel}
          </button>
          <span className="cv-toolbar-logo">RSB / currículo</span>
          <div className="cv-toolbar-right">
            <div className="cv-lang-switcher">
              {RESUME_LANGS.map(({ code, label }) => (
                <button
                  key={code}
                  className={`cv-lang-btn${lang === code ? " cv-lang-btn--active" : ""}`}
                  onClick={() => setLang(code)}
                  style={{ color: lang === code ? '#fff' : 'rgba(255,255,255,0.5)' }}
                >
                  {label}
                </button>
              ))}
            </div>
            <button className="cv-download-btn" onClick={handlePrint}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {r.downloadLabel}
            </button>
          </div>
        </div>
      </div>

      {/* ── Folha do currículo ── */}
      <div className="cv-sheet">

        {/* CABEÇALHO */}
        <div className="cv-header">
          <div className="cv-header-left">
            <h1 className="cv-name">{r.name}</h1>
          </div>
          <div className="cv-header-right">
            <p className="cv-contact-line">Contato: {r.contact.phone}</p>
            <p className="cv-contact-line">Email: {r.contact.email}</p>
            <p className="cv-contact-line">
              Fundador da Startup:{" "}
              <a href={`https://${r.contact.startup}`} target="_blank" rel="noopener noreferrer">
                {r.contact.startup}
              </a>
            </p>
            <p className="cv-contact-line">
              GitHub:{" "}
              <a href={r.contact.github} target="_blank" rel="noopener noreferrer">
                {r.contact.github}
              </a>
            </p>
          </div>
        </div>

        {/* CORPO — duas colunas */}
        <div className="cv-body">

          {/* COLUNA ESQUERDA */}
          <div className="cv-col cv-col-left">

            {/* Resumo */}
            <section className="cv-section">
              <h2 className="cv-section-title">{r.sections.summary}</h2>
              <div className="cv-rule" />
              <p className="cv-summary">{r.summary}</p>
            </section>

            {/* Experiência */}
            <section className="cv-section">
              <h2 className="cv-section-title">{r.sections.experience}</h2>
              <div className="cv-rule" />
              {r.experience.map((exp, i) => (
                <div key={i} className="cv-exp">
                  <p className="cv-exp-role">{exp.role}</p>
                  {exp.company && (
                    <p className="cv-exp-meta">
                      {exp.company}
                      {exp.period && <> | {exp.period}</>}
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

            {/* Habilidades */}
            <section className="cv-section">
              <h2 className="cv-section-title">{r.sections.skills}</h2>
              <div className="cv-rule" />

              {/* Tecnologias */}
              <h3 className="cv-sub-title">{r.sections.tech}</h3>
              <div className="cv-tech-list">
                {r.tech.rows.map((row, i) => (
                  <p key={i} className="cv-tech-row">
                    <strong>{row.label}</strong> {row.value}
                  </p>
                ))}
              </div>

              {/* Competências Técnicas */}
              <h3 className="cv-sub-title" style={{ marginTop: "1.1rem" }}>{r.sections.other}</h3>
              <div className="cv-other-list">
                {r.other.map((item, i) => (
                  <p key={i} className="cv-other-row">
                    <strong>{item.label}</strong> {item.value}
                  </p>
                ))}
              </div>

              {/* Línguas */}
              <h3 className="cv-sub-title" style={{ marginTop: "1.1rem" }}>{r.sections.languages}</h3>
              <ul className="cv-lang-list">
                {r.languages.map((l, i) => <li key={i}>{l}</li>)}
              </ul>
            </section>

            {/* Educação */}
            <section className="cv-section">
              <h2 className="cv-section-title">{r.sections.education}</h2>
              <div className="cv-rule" />
              {r.education.map((edu, i) => (
                <div key={i} className="cv-edu">
                  <p className="cv-edu-inst">{edu.institution}</p>
                  {edu.degree && <p className="cv-edu-degree">{edu.degree}</p>}
                </div>
              ))}
            </section>

          </div>
        </div>
      </div>
    </>
  );
}
