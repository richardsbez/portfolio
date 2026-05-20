import { useState, useEffect } from "react";
import { RESUME, RESUME_LANGS } from "../i18n/resume.js";
import "./resume.css";
import { useNavigate } from "react-router-dom";

export default function Resume() {
  const [lang, setLang] = useState("PT");
  const navigate = useNavigate();
  const r = RESUME[lang];

  useEffect(() => { window.scrollTo(0, 0); }, []);
  const handlePrint = () => window.print();

  return (
    <>
      {/* ── Toolbar (no-print) ── */}
      <div className="cv-toolbar no-print" role="toolbar">
        <div className="cv-toolbar-inner">

          {/* mobile: row1 wrapper */}
          <div className="cv-toolbar-row1">
            <button className="cv-back-btn" onClick={() => navigate("/")}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              {r.backLabel}
            </button>

            <button className="cv-download-btn" onClick={handlePrint}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {r.downloadLabel}
            </button>
          </div>

          <span className="cv-toolbar-logo">RSB</span>

          <div className="cv-toolbar-right">
            <div className="cv-lang-switcher" role="group">
              {RESUME_LANGS.map(({ code, label }) => (
                <button
                  key={code}
                  className={`cv-lang-btn${lang === code ? " cv-lang-btn--active" : ""}`}
                  onClick={() => setLang(code)}
                  aria-pressed={lang === code}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* desktop download */}
            <button className="cv-download-btn cv-download-desktop" onClick={handlePrint}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {r.downloadLabel}
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════ CV SHEET ══════════════ */}
      <main className="cv-sheet">

        {/* ── HEADER — centered, name huge, contact monospaced ── */}
        <header className="cv-header">
          <h1 className="cv-name">{r.name}</h1>
          <p className="cv-contact">
            <span>{r.contact.phone}</span>
            <span className="cv-sep">|</span>
            <a href={`mailto:${r.contact.email}`}>{r.contact.email}</a>
            <span className="cv-sep">|</span>
            <a href={`https://${r.contact.site}`} target="_blank" rel="noopener noreferrer">
              {r.contact.site}
            </a>
          </p>
        </header>

        {/* ── EXPERIÊNCIA ── */}
        <section className="cv-section">
          <h2 className="cv-section-title">{r.sections.experience}</h2>
          <hr className="cv-rule" />

          {r.experience.map((exp, i) => (
            <div key={i} className="cv-entry">
              {/* row 1: bold company | grey date */}
              <div className="cv-entry-row1">
                <span className="cv-entry-company">{exp.company}</span>
                <span className="cv-entry-period">{exp.period}</span>
              </div>
              {/* row 2: italic role | grey location */}
              <div className="cv-entry-row2">
                <span className="cv-entry-role">{exp.role}</span>
                <span className="cv-entry-location">{exp.location}</span>
              </div>
              <ul className="cv-list">
                {exp.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            </div>
          ))}
        </section>

        {/* ── PROJETOS ── */}
        <section className="cv-section">
          <h2 className="cv-section-title">{r.sections.projects}</h2>
          <hr className="cv-rule" />

          {r.projects.map((proj, i) => (
            <div key={i} className="cv-entry">
              {/* \resumeProjectHeading: bold name | grey date */}
              <div className="cv-proj-heading">
                <span className="cv-proj-name">{proj.name}</span>
                {proj.date && <span className="cv-proj-date">{proj.date}</span>}
              </div>
              <ul className="cv-list">
                {proj.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            </div>
          ))}
        </section>

        {/* ── EDUCAÇÃO ── */}
        <section className="cv-section">
          <h2 className="cv-section-title">{r.sections.education}</h2>
          <hr className="cv-rule" />

          {r.education.map((edu, i) => (
            <div key={i} className="cv-entry">
              <div className="cv-entry-row1">
                <span className="cv-entry-company">{edu.institution}</span>
                <span className="cv-entry-period">{edu.period}</span>
              </div>
              <div className="cv-entry-row2">
                <span className="cv-entry-role">{edu.degree}</span>
                <span className="cv-entry-location">{edu.location}</span>
              </div>
            </div>
          ))}
        </section>

        {/* ── SKILLS ── */}
        <section className="cv-section">
          <h2 className="cv-section-title">{r.sections.skills}</h2>
          <hr className="cv-rule" />

          {/* LaTeX: \textbf{Label} {: Value} — no bullets, just lines */}
          <ul className="cv-skills">
            {r.skills.map((s, i) => (
              <li key={i} className="cv-skill-row">
                <span className="cv-skill-label">{s.label}</span>
                <span className="cv-skill-colon">:</span>
                {s.value}
              </li>
            ))}
          </ul>
        </section>

      </main>
    </>
  );
}
