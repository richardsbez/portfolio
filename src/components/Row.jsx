import { useState } from "react";

export default function Row({ r, valueClass }) {
  const [copied, setCopied] = useState(false);

  const isExternal = r.href && r.href.startsWith("http");
  const isCopyable = !!r.copy;


  const handleCopy = () => {
    const text = r.copy;

    // tenta clipboard moderno, cai no execCommand se falhar
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      }).catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  };

  const fallbackCopy = (text) => {
    const el = document.createElement("textarea");
    el.value = text;
    el.style.position = "fixed";
    el.style.opacity = "0";
    document.body.appendChild(el);
    el.focus();
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const value = r.href ? (
    <a
      href={r.href}
      className={`${valueClass} s2-link`}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {r.v}
    </a>
  ) : (
    <span className={valueClass}>{r.v}</span>
  );


  return (
    <div className={`s2-row${r.href ? " s2-row--link" : ""}`}>
      <span className="s2-k">{r.k}</span>
      <div className="s2-val-wrap">
        {value}
        {isCopyable && (
          <button
            className={`s2-copy-btn${copied ? " s2-copy-btn--done" : ""}`}
            onClick={handleCopy}
            aria-label={copied ? "Copiado" : "Copiar"}
          >
            {copied ? (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            )}
            <span className="s2-copy-label">{copied ? "✓" : "copy"}</span>
          </button>
        )}
      </div>
    </div>
  );

}
