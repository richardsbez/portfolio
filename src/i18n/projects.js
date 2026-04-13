// ════════════════════════════════════════════
//  TRADUÇÕES — Projects.jsx
//  Idiomas: pt, en, es, de, fr, zh, ja
//
//  API pública:
//    t(key, vars?)     → string traduzida
//    setLanguage(code) → muda o idioma ativo
//    getCurrentLang()  → retorna o idioma atual
//    PROJECT_LANGS     → array de { code, label }
//    hasKey(key, code?)→ verifica se uma chave existe
// ════════════════════════════════════════════

/** @type {Record<string, Record<string, string>>} */
export const translations = {

  // ── Português (padrão) ──────────────────────────────────────────
  pt: {
    // Header
    back_label: "RSB",
    header_tag: "003 / projetos",
    header_count: "{{count}} projetos",

    // Hero
    hero_eyebrow: "portfólio",
    hero_title: "projetos",
    hero_sub: "Pessoais, profissionais ou os dois ao mesmo tempo —\ntudo que construo com intenção vive aqui.",

    // Legend
    legend_hybrid: "projetos híbridos",
    legend_personal: "iniciativa própria",
    legend_professional: "contexto de trabalho",
    tag_hybrid: "pessoal + prof",
    tag_personal: "pessoal",
    tag_professional: "profissional",

    // Status
    status_ativo: "● ativo",
    status_pausa: "◐ em pausa",
    status_done: "○ concluído",

    // Row / detalhes
    expand_label: "expandir",
    collapse_label: "fechar",
    detail_motivation: "motivação",
    detail_process: "processo",
    detail_role: "papel",
    detail_highlights: "destaques",
    visit_project: "visitar projeto →",

    // Footer
    footer_left: "Richard S. Bezerra",
    footer_right: "← voltar ao início",

    // ── J-Seeker ──
    jseeker_desc: "Motor de busca full-text de alta performance capaz de indexar e buscar em sistemas de arquivos massivos com latência sub-10ms.",
    jseeker_motivation: "Explorar os limites de I/O e concorrência no Java moderno, criando uma alternativa leve para busca local sem a sobrecarga de um Lucene completo.",
    jseeker_process: "Implementação de Inverted Index via Tries para economia de memória, uso do Fork/Join Framework para indexação paralela e java.nio para leitura direta de buffers.",
    jseeker_role: "Engenheiro de Software (Solo)",
    jseeker_h1: "Processamento de ~1GB/s na indexação",
    jseeker_h2: "Busca instantânea com TF-IDF",
    jseeker_h3: "Zero dependências externas",

    // ── UltraLearn ──
    ultralearn_desc: "Hub de produtividade focado em aprendizado acelerado, integrando os 9 princípios de Scott Young com persistência local em Markdown.",
    ultralearn_motivation: "Sistematizar o processo de aquisição de hard skills. Precisava de algo que unisse o poder visual do Obsidian com a metodologia rigorosa de Ultralearning.",
    ultralearn_process: "Arquitetura baseada em arquivos locais para garantir soberania de dados. UI construída com SVG para o canvas interativo e suporte nativo a múltiplos idiomas.",
    ultralearn_role: "Fullstack Developer",
    ultralearn_h1: "Canvas visual interativo customizado",
    ultralearn_h2: "Compatibilidade total com Obsidian",
    ultralearn_h3: "Sistema de auto-save resiliente",

    // ── Waytranslate ──
    waytranslate_desc: "Ferramenta CLI para tradução offline de alta performance. Privacidade total e zero latência de rede externa.",
    waytranslate_motivation: "Eliminar a dependência de APIs pagas e o rastreamento de dados em traduções técnicas, utilizando o poder do Rust e containers locais.",
    waytranslate_process: "Desenvolvimento de uma CLI robusta em Rust com lógica de fallback inteligente integrada ao LibreTranslate via Docker.",
    waytranslate_role: "Systems Engineer",
    waytranslate_h1: "Execução 100% offline",
    waytranslate_h2: "Lógica de fallback multilingue",
    waytranslate_h3: "Sem limites de requisição (Rate Limit)",

    // ── ayrCore tech ──
    ayrcore_desc: "Startup de tecnologia focada em soluções de infraestrutura e desenvolvimento.",
    ayrcore_motivation: "Percebemos que pequenas equipes desperdiçavam horas com setup de infra. Queríamos abstrair essa complexidade e entregar DX de alto nível sem custo de grande empresa.",
    ayrcore_process: "MVP em 3 semanas, testando com 5 times reais. Cada sprint guiado por feedback direto. Arquitetura de microserviços desde o início para escalar sem reescrever.",
    ayrcore_role: "Tech Lead & Co-founder",
    ayrcore_h1: "Redução de 40% no tempo de setup",
    ayrcore_h2: "3k+ deploys/mês",
    ayrcore_h3: "Latência < 80ms p95",

    // ── SulExpress ──
    sulexpress_desc: "E-commerce de alta escalabilidade focado em performance de API.",
    sulexpress_motivation: "Exploração pessoal para entender como construir APIs robustas com Python moderno, sem frameworks pesados.",
    sulexpress_process: "Desenvolvimento incremental ao longo de 4 meses. Foco em testes unitários e documentação automática via OpenAPI.",
    sulexpress_role: "Desenvolvedor Solo",
    sulexpress_h1: "100% de cobertura de testes",
    sulexpress_h2: "Documentação automática OpenAPI",

    // ── GammaIndex ──
    gammaindex_desc: "Sistema interno desenvolvido para otimizar processos corporativos e automação de planilhas.",
    gammaindex_motivation: "O processo legado envolvia planilhas manuais e retrabalho constante. A solução técnica ficou inteiramente com o time de engenharia.",
    gammaindex_process: "Mapeamento de processos em 2 semanas, sprints de 2 semanas. Integração com sistemas legados via SOAP e REST. Deploy via Azure DevOps CI/CD.",
    gammaindex_role: "Engenheiro Sênior",
    gammaindex_h1: "Redução de 65% no retrabalho",
    gammaindex_h2: "Integração com 3 sistemas legados",
    gammaindex_h3: "200+ usuários",

    // ── Core-Shell Mesh ──
    coreshell_desc: "Plataforma de análise financeira preditiva em tempo real baseada em arquitetura Local-First, utilizando WebAssembly no cliente e CRDTs no backend para convergência de estado.",
    coreshell_motivation: "Resolver o 'Paradoxo da Malha Global Híbrida': permitir processamento distribuído massivo no frontend sem expor modelos de IA, mantendo consistência de estado global com latência sub-50ms.",
    coreshell_process: "Substituição do modelo cliente-servidor tradicional por um orquestrador Rust (HTTP/3 WebTransport) integrado a um engine frontend em Wasm. Uso de SharedArrayBuffer para multithreading e Edge Computing para replicação.",
    coreshell_role: "Engenheiro de Software / Arquiteto de Soluções",
    coreshell_h1: "Sincronização stateful sem conflitos (Zero-Latency) usando CRDTs",
    coreshell_h2: "Processamento multithread no browser com Wasm e Web Workers",
    coreshell_h3: "Renderização customizada via Canvas/WebGL para +100.000 pontos a 60FPS",
  },

  // ── English ─────────────────────────────────────────────────────
  en: {
    back_label: "RSB",
    header_tag: "003 / projects",
    header_count: "{{count}} projects",

    hero_eyebrow: "portfolio",
    hero_title: "projects",
    hero_sub: "Personal, professional, or both at once —\neverything I build with intention lives here.",

    legend_hybrid: "hybrid projects",
    legend_personal: "personal initiative",
    legend_professional: "work context",
    tag_hybrid: "personal + prof",
    tag_personal: "personal",
    tag_professional: "professional",

    status_ativo: "● active",
    status_pausa: "◐ on hold",
    status_done: "○ completed",

    expand_label: "expand",
    collapse_label: "close",
    detail_motivation: "motivation",
    detail_process: "process",
    detail_role: "role",
    detail_highlights: "highlights",
    visit_project: "visit project →",

    footer_left: "Richard S. Bezerra",
    footer_right: "← back to home",

    jseeker_desc: "High-performance full-text search engine capable of indexing and searching massive file systems with sub-10ms latency.",
    jseeker_motivation: "Push the limits of I/O and concurrency in modern Java, creating a lightweight alternative for local search without the overhead of a full Lucene stack.",
    jseeker_process: "Inverted Index implementation via Tries for memory efficiency, Fork/Join Framework for parallel indexing, and java.nio for direct buffer reads.",
    jseeker_role: "Software Engineer (Solo)",
    jseeker_h1: "~1GB/s indexing throughput",
    jseeker_h2: "Instant search with TF-IDF",
    jseeker_h3: "Zero external dependencies",

    ultralearn_desc: "Productivity hub focused on accelerated learning, integrating Scott Young's 9 principles with local Markdown persistence.",
    ultralearn_motivation: "Systematize the hard-skill acquisition process. Needed something that combined Obsidian's visual power with Ultralearning's rigorous methodology.",
    ultralearn_process: "Local-file-based architecture to ensure data sovereignty. UI built with SVG for the interactive canvas and native multi-language support.",
    ultralearn_role: "Fullstack Developer",
    ultralearn_h1: "Custom interactive visual canvas",
    ultralearn_h2: "Full Obsidian compatibility",
    ultralearn_h3: "Resilient auto-save system",

    waytranslate_desc: "High-performance offline CLI translation tool. Total privacy and zero external network latency.",
    waytranslate_motivation: "Eliminate dependency on paid APIs and data tracking in technical translations, leveraging the power of Rust and local containers.",
    waytranslate_process: "Built a robust Rust CLI with intelligent fallback logic integrated with LibreTranslate via Docker.",
    waytranslate_role: "Systems Engineer",
    waytranslate_h1: "100% offline execution",
    waytranslate_h2: "Multilingual fallback logic",
    waytranslate_h3: "No rate limits",

    ayrcore_desc: "Technology startup focused on infrastructure and development solutions.",
    ayrcore_motivation: "We noticed small teams wasting hours on infra setup. We wanted to abstract that complexity and deliver high-level DX without enterprise costs.",
    ayrcore_process: "MVP in 3 weeks, tested with 5 real teams. Every sprint driven by direct feedback. Microservices architecture from day one to scale without rewrites.",
    ayrcore_role: "Tech Lead & Co-founder",
    ayrcore_h1: "40% reduction in setup time",
    ayrcore_h2: "3k+ deploys/month",
    ayrcore_h3: "Latency < 80ms p95",

    sulexpress_desc: "Highly scalable e-commerce platform focused on API performance.",
    sulexpress_motivation: "Personal exploration to understand how to build robust APIs with modern Python, without heavy frameworks.",
    sulexpress_process: "Incremental development over 4 months. Focus on unit tests and automatic documentation via OpenAPI.",
    sulexpress_role: "Solo Developer",
    sulexpress_h1: "100% test coverage",
    sulexpress_h2: "Automatic OpenAPI documentation",

    gammaindex_desc: "Internal system built to optimize corporate processes and spreadsheet automation.",
    gammaindex_motivation: "The legacy process involved manual spreadsheets and constant rework. The technical solution rested entirely with the engineering team.",
    gammaindex_process: "Process mapping over 2 weeks, 2-week sprints. Integration with legacy systems via SOAP and REST. Deployment via Azure DevOps CI/CD.",
    gammaindex_role: "Senior Engineer",
    gammaindex_h1: "65% reduction in rework",
    gammaindex_h2: "Integration with 3 legacy systems",
    gammaindex_h3: "200+ users",

    coreshell_desc: "Real-time predictive financial analysis platform based on a Local-First architecture, using WebAssembly on the client and CRDTs on the backend for state convergence.",
    coreshell_motivation: "Solving the 'Hybrid Global Mesh Paradox': enabling massive distributed processing on the frontend without exposing AI models, maintaining global state consistency with sub-50ms latency.",
    coreshell_process: "Replacing the traditional client-server model with a Rust orchestrator (HTTP/3 WebTransport) integrated with a Wasm frontend engine. Using SharedArrayBuffer for multithreading and Edge Computing for replication.",
    coreshell_role: "Software Engineer / Solutions Architect",
    coreshell_h1: "Conflict-free stateful synchronization (Zero-Latency) using CRDTs",
    coreshell_h2: "Multithreaded in-browser processing with Wasm and Web Workers",
    coreshell_h3: "Custom rendering via Canvas/WebGL for 100,000+ points at 60FPS",
  },

  // ── Español ──────────────────────────────────────────────────────
  es: {
    back_label: "RSB",
    header_tag: "003 / proyectos",
    header_count: "{{count}} proyectos",

    hero_eyebrow: "portafolio",
    hero_title: "proyectos",
    hero_sub: "Personales, profesionales o ambos a la vez —\ntodo lo que construyo con intención vive aquí.",

    legend_hybrid: "proyectos híbridos",
    legend_personal: "iniciativa propia",
    legend_professional: "contexto laboral",
    tag_hybrid: "personal + prof",
    tag_personal: "personal",
    tag_professional: "profesional",

    status_ativo: "● activo",
    status_pausa: "◐ en pausa",
    status_done: "○ completado",

    expand_label: "expandir",
    collapse_label: "cerrar",
    detail_motivation: "motivación",
    detail_process: "proceso",
    detail_role: "rol",
    detail_highlights: "destacados",
    visit_project: "visitar proyecto →",

    footer_left: "Richard S. Bezerra",
    footer_right: "← volver al inicio",

    jseeker_desc: "Motor de búsqueda full-text de alto rendimiento capaz de indexar y buscar en sistemas de archivos masivos con latencia inferior a 10ms.",
    jseeker_motivation: "Explorar los límites de I/O y concurrencia en Java moderno, creando una alternativa ligera para búsqueda local sin la sobrecarga de un Lucene completo.",
    jseeker_process: "Implementación de Índice Invertido mediante Tries para ahorro de memoria, uso del Fork/Join Framework para indexación paralela y java.nio para lectura directa de buffers.",
    jseeker_role: "Ingeniero de Software (Solo)",
    jseeker_h1: "Procesamiento de ~1GB/s en indexación",
    jseeker_h2: "Búsqueda instantánea con TF-IDF",
    jseeker_h3: "Cero dependencias externas",

    ultralearn_desc: "Hub de productividad enfocado en aprendizaje acelerado, integrando los 9 principios de Scott Young con persistencia local en Markdown.",
    ultralearn_motivation: "Sistematizar el proceso de adquisición de habilidades técnicas. Necesitaba algo que combinara el poder visual de Obsidian con la metodología rigurosa de Ultralearning.",
    ultralearn_process: "Arquitectura basada en archivos locales para garantir soberanía de datos. UI construida con SVG para el canvas interactivo y soporte nativo a múltiples idiomas.",
    ultralearn_role: "Fullstack Developer",
    ultralearn_h1: "Canvas visual interactivo personalizado",
    ultralearn_h2: "Compatibilidad total con Obsidian",
    ultralearn_h3: "Sistema de auto-guardado resiliente",

    waytranslate_desc: "Herramienta CLI para traducción offline de alto rendimiento. Privacidad total y cero latencia de red externa.",
    waytranslate_motivation: "Eliminar la dependencia de APIs de pago y el rastreo de datos en traducciones técnicas, aprovechando el poder de Rust y los contenedores locales.",
    waytranslate_process: "Desarrollo de una CLI robusta en Rust con lógica de fallback inteligente integrada con LibreTranslate vía Docker.",
    waytranslate_role: "Systems Engineer",
    waytranslate_h1: "Ejecución 100% offline",
    waytranslate_h2: "Lógica de fallback multilingüe",
    waytranslate_h3: "Sin límites de solicitudes (Rate Limit)",

    ayrcore_desc: "Startup de tecnología enfocada en soluciones de infraestructura y desarrollo.",
    ayrcore_motivation: "Notamos que los equipos pequeños desperdiciaban horas en configuración de infraestructura. Queríamos abstraer esa complejidad y ofrecer DX de alto nivel sin costos empresariales.",
    ayrcore_process: "MVP en 3 semanas, probado con 5 equipos reales. Cada sprint guiado por feedback directo. Arquitectura de microservicios desde el inicio para escalar sin reescribir.",
    ayrcore_role: "Tech Lead & Co-founder",
    ayrcore_h1: "Reducción del 40% en tiempo de configuración",
    ayrcore_h2: "3k+ despliegues/mes",
    ayrcore_h3: "Latencia < 80ms p95",

    sulexpress_desc: "E-commerce de alta escalabilidad enfocado en el rendimiento de la API.",
    sulexpress_motivation: "Exploración personal para entender cómo construir APIs robustas con Python moderno, sin frameworks pesados.",
    sulexpress_process: "Desarrollo incremental a lo largo de 4 meses. Enfoque en pruebas unitarias y documentación automática vía OpenAPI.",
    sulexpress_role: "Desarrollador Solo",
    sulexpress_h1: "100% de cobertura de pruebas",
    sulexpress_h2: "Documentación automática OpenAPI",

    gammaindex_desc: "Sistema interno desarrollado para optimizar procesos corporativos y automatización de hojas de cálculo.",
    gammaindex_motivation: "El proceso legado involucraba hojas de cálculo manuales y retrabajo constante. La solución técnica recayó íntegramente en el equipo de ingeniería.",
    gammaindex_process: "Mapeo de procesos en 2 semanas, sprints de 2 semanas. Integración con sistemas legados vía SOAP y REST. Despliegue vía Azure DevOps CI/CD.",
    gammaindex_role: "Ingeniero Senior",
    gammaindex_h1: "Reducción del 65% en el retrabajo",
    gammaindex_h2: "Integración con 3 sistemas legados",
    gammaindex_h3: "200+ usuarios",

    coreshell_desc: "Plataforma de análisis financiero predictivo en tiempo real basada en arquitectura Local-First, utilizando WebAssembly en el cliente y CRDTs en el backend para la convergencia de estados.",
    coreshell_motivation: "Resolver el 'Paradoja de la Malla Global Híbrida': permitir el procesamiento distribuido masivo en el frontend sin exponer modelos de IA, manteniendo la consistencia del estado global con una latencia inferior a 50ms.",
    coreshell_process: "Sustitución del modelo cliente-servidor tradicional por un orquestador Rust (HTTP/3 WebTransport) integrado con un motor frontend en Wasm. Uso de SharedArrayBuffer para multihilo y Edge Computing para la replicación.",
    coreshell_role: "Ingeniero de Software / Arquitecto de Soluciones",
    coreshell_h1: "Sincronización de estado sin conflictos (Zero-Latency) mediante CRDTs",
    coreshell_h2: "Procesamiento multihilo en el navegador con Wasm y Web Workers",
    coreshell_h3: "Renderizado personalizado mediante Canvas/WebGL para más de 100,000 puntos a 60FPS",
  },

  // ── Deutsch ──────────────────────────────────────────────────────
  de: {
    back_label: "RSB",
    header_tag: "003 / Projekte",
    header_count: "{{count}} Projekte",

    hero_eyebrow: "Arbeitsportfolio",
    hero_title: "Projekte",
    hero_sub: "Persönlich, beruflich oder beides zugleich —\nalles, was ich mit Absicht baue, lebt hier.",

    legend_hybrid: "hybride Projekte",
    legend_personal: "eigene Initiative",
    legend_professional: "beruflicher Kontext",
    tag_hybrid: "persönlich + beruf.",
    tag_personal: "persönlich",
    tag_professional: "beruflich",

    status_ativo: "● aktiv",
    status_pausa: "◐ pausiert",
    status_done: "○ abgeschlossen",

    expand_label: "erweitern",
    collapse_label: "schließen",
    detail_motivation: "Motivation",
    detail_process: "Prozess",
    detail_role: "Rolle",
    detail_highlights: "Highlights",
    visit_project: "Projekt besuchen →",

    footer_left: "Richard S. Bezerra",
    footer_right: "← zurück zum Start",

    jseeker_desc: "Hochleistungs-Volltextsuchmaschine, die in der Lage ist, massive Dateisysteme mit einer Latenz unter 10ms zu indizieren und zu durchsuchen.",
    jseeker_motivation: "Die Grenzen von I/O und Parallelität im modernen Java ausreizen und eine leichtgewichtige Alternative zur lokalen Suche ohne den Overhead eines vollständigen Lucene-Stacks schaffen.",
    jseeker_process: "Invertierter Index via Tries für Speichereffizienz, Fork/Join Framework für parallele Indizierung und java.nio für direktes Buffer-Lesen.",
    jseeker_role: "Software Engineer (Solo)",
    jseeker_h1: "~1 GB/s Indizierungsdurchsatz",
    jseeker_h2: "Sofortsuche mit TF-IDF",
    jseeker_h3: "Keine externen Abhängigkeiten",

    ultralearn_desc: "Produktivitäts-Hub für beschleunigtes Lernen, der Scott Youngs 9 Prinzipien mit lokaler Markdown-Persistenz verbindet.",
    ultralearn_motivation: "Den Erwerb von Hard Skills systematisieren. Ich brauchte etwas, das Obsidians visuelle Stärke mit der strengen Ultralearning-Methodik vereint.",
    ultralearn_process: "Dateibasierte Architektur zur Gewährleistung der Datensouveränität. UI mit SVG für das interaktive Canvas und native Mehrsprachunterstützung.",
    ultralearn_role: "Fullstack Developer",
    ultralearn_h1: "Eigenes interaktives visuelles Canvas",
    ultralearn_h2: "Vollständige Obsidian-Kompatibilität",
    ultralearn_h3: "Robustes Auto-Save-System",

    waytranslate_desc: "Hochleistungs-CLI-Tool für Offline-Übersetzungen. Vollständige Privatsphäre und keine externe Netzwerklatenz.",
    waytranslate_motivation: "Abhängigkeit von bezahlten APIs und Datenverfolgung bei technischen Übersetzungen eliminieren, unter Nutzung der Leistung von Rust und lokalen Containern.",
    waytranslate_process: "Entwicklung einer robusten Rust-CLI mit intelligenter Fallback-Logik, integriert mit LibreTranslate via Docker.",
    waytranslate_role: "Systems Engineer",
    waytranslate_h1: "100% Offline-Ausführung",
    waytranslate_h2: "Mehrsprachige Fallback-Logik",
    waytranslate_h3: "Keine Anfragelimits (Rate Limit)",

    ayrcore_desc: "Technologie-Startup mit Fokus auf Infrastruktur- und Entwicklungslösungen.",
    ayrcore_motivation: "Wir bemerkten, dass kleine Teams Stunden mit Infra-Setup verschwendeten. Wir wollten diese Komplexität abstrahieren und erstklassige DX ohne Unternehmenskosten bieten.",
    ayrcore_process: "MVP in 3 Wochen, getestet mit 5 echten Teams. Jeder Sprint durch direktes Feedback gesteuert. Microservices-Architektur von Anfang an, um ohne Neuentwicklung zu skalieren.",
    ayrcore_role: "Tech Lead & Co-founder",
    ayrcore_h1: "40% Reduzierung der Setup-Zeit",
    ayrcore_h2: "3k+ Deployments/Monat",
    ayrcore_h3: "Latenz < 80ms p95",

    sulexpress_desc: "Hochskalierbarer E-Commerce mit Fokus auf API-Performance.",
    sulexpress_motivation: "Persönliche Erkundung, um zu verstehen, wie man mit modernem Python robuste APIs ohne schwere Frameworks baut.",
    sulexpress_process: "Inkrementelle Entwicklung über 4 Monate. Fokus auf Unit-Tests und automatische Dokumentation via OpenAPI.",
    sulexpress_role: "Solo-Entwickler",
    sulexpress_h1: "100% Testabdeckung",
    sulexpress_h2: "Automatische OpenAPI-Dokumentation",

    gammaindex_desc: "Internes System zur Optimierung von Unternehmensprozessen und Tabellenautomatisierung.",
    gammaindex_motivation: "Der Legacy-Prozess umfasste manuelle Tabellen und ständige Nacharbeit. Die technische Lösung lag vollständig beim Engineering-Team.",
    gammaindex_process: "Prozessmapping in 2 Wochen, 2-Wochen-Sprints. Integration mit Legacy-Systemen via SOAP und REST. Deployment via Azure DevOps CI/CD.",
    gammaindex_role: "Senior Engineer",
    gammaindex_h1: "65% weniger Nacharbeit",
    gammaindex_h2: "Integration mit 3 Legacy-Systemen",
    gammaindex_h3: "200+ Nutzer",

    coreshell_desc: "Echtzeit-Plattform für prädiktive Finanzanalysen basierend auf einer Local-First-Architektur, unter Verwendung von WebAssembly auf dem Client und CRDTs im Backend zur Statuskonvergenz.",
    coreshell_motivation: "Lösung des 'Hybrid Global Mesh Paradoxon': Massiv verteilte Verarbeitung im Frontend ermöglichen, ohne KI-Modelle offenzulegen, bei gleichzeitiger globaler Statuskonsistenz mit einer Latenz von unter 50ms.",
    coreshell_process: "Ersetzung des traditionellen Client-Server-Modells durch einen Rust-Orchestrator (HTTP/3 WebTransport), der in eine Wasm-Frontend-Engine integriert ist. Nutzung von SharedArrayBuffer für Multithreading und Edge Computing für die Replikation.",
    coreshell_role: "Softwareentwickler / Lösungsarchitekt",
    coreshell_h1: "Konfliktfreie Stateful-Synchronisation (Zero-Latency) mittels CRDTs",
    coreshell_h2: "Multithreaded-Verarbeitung im Browser mit Wasm und Web Workers",
    coreshell_h3: "Benutzerdefiniertes Rendering über Canvas/WebGL für über 100.000 Punkte bei 60 FPS",
  },

  // ── Français ─────────────────────────────────────────────────────
  fr: {
    back_label: "RSB",
    header_tag: "003 / projets",
    header_count: "{{count}} projets",

    hero_eyebrow: "portfolio",
    hero_title: "projets",
    hero_sub: "Personnels, professionnels ou les deux à la fois —\ntout ce que je construis avec intention vit ici.",

    legend_hybrid: "projets hybrides",
    legend_personal: "initiative personnelle",
    legend_professional: "contexte professionnel",
    tag_hybrid: "perso + prof",
    tag_personal: "personnel",
    tag_professional: "professionnel",

    status_ativo: "● actif",
    status_pausa: "◐ en pause",
    status_done: "○ terminé",

    expand_label: "développer",
    collapse_label: "fermer",
    detail_motivation: "motivation",
    detail_process: "processus",
    detail_role: "rôle",
    detail_highlights: "points forts",
    visit_project: "visiter le projet →",

    footer_left: "Richard S. Bezerra",
    footer_right: "← retour à l'accueil",

    jseeker_desc: "Moteur de recherche full-text haute performance capable d'indexer et de rechercher dans des systèmes de fichiers massifs avec une latence inférieure à 10ms.",
    jseeker_motivation: "Explorer les limites d'I/O et de concurrence dans le Java moderne, en créant une alternative légère pour la recherche locale sans la surcharge d'un Lucene complet.",
    jseeker_process: "Implémentation d'un Index Inversé via des Tries pour l'économie mémoire, utilisation du Fork/Join Framework pour l'indexation parallèle et java.nio pour la lecture directe de buffers.",
    jseeker_role: "Ingénieur Logiciel (Solo)",
    jseeker_h1: "Débit d'indexation ~1 Go/s",
    jseeker_h2: "Recherche instantanée avec TF-IDF",
    jseeker_h3: "Zéro dépendance externe",

    ultralearn_desc: "Hub de productivité axé sur l'apprentissage accéléré, intégrant les 9 principes de Scott Young avec une persistance locale en Markdown.",
    ultralearn_motivation: "Systématiser le processus d'acquisition de compétences techniques. J'avais besoin de quelque chose qui unisse la puissance visuelle d'Obsidian avec la méthodologie rigoureuse de l'Ultralearning.",
    ultralearn_process: "Architecture basée sur des fichiers locaux pour garantir la souveraineté des données. UI construite en SVG pour le canvas interactif et support natif multi-langues.",
    ultralearn_role: "Fullstack Developer",
    ultralearn_h1: "Canvas visuel interactif personnalisé",
    ultralearn_h2: "Compatibilité totale avec Obsidian",
    ultralearn_h3: "Système d'auto-sauvegarde résilient",

    waytranslate_desc: "Outil CLI haute performance pour la traduction hors ligne. Confidentialité totale et zéro latence réseau externe.",
    waytranslate_motivation: "Éliminer la dépendance aux APIs payantes et le suivi des données dans les traductions techniques, en exploitant la puissance de Rust et des conteneurs locaux.",
    waytranslate_process: "Développement d'une CLI robuste en Rust avec une logique de fallback intelligente intégrée à LibreTranslate via Docker.",
    waytranslate_role: "Systems Engineer",
    waytranslate_h1: "Exécution 100% hors ligne",
    waytranslate_h2: "Logique de fallback multilingue",
    waytranslate_h3: "Sans limite de requêtes (Rate Limit)",

    ayrcore_desc: "Startup technologique axée sur les solutions d'infrastructure et de développement.",
    ayrcore_motivation: "Nous avons constaté que les petites équipes perdaient des heures en configuration d'infra. Nous voulions abstraire cette complexité et offrir une DX de haut niveau sans les coûts d'une grande entreprise.",
    ayrcore_process: "MVP en 3 semaines, testé avec 5 vraies équipes. Chaque sprint guidé par des retours directs. Architecture microservices dès le début pour scaler sans réécriture.",
    ayrcore_role: "Tech Lead & Co-founder",
    ayrcore_h1: "Réduction de 40% du temps de configuration",
    ayrcore_h2: "3k+ déploiements/mois",
    ayrcore_h3: "Latence < 80ms p95",

    sulexpress_desc: "E-commerce hautement évolutif axé sur la performance des API.",
    sulexpress_motivation: "Exploration personnelle pour comprendre comment construire des APIs robustes avec le Python moderne, sans frameworks lourds.",
    sulexpress_process: "Développement incrémental sur 4 mois. Accent sur les tests unitaires et la documentation automatique via OpenAPI.",
    sulexpress_role: "Développeur Solo",
    sulexpress_h1: "100% de couverture de tests",
    sulexpress_h2: "Documentation automatique OpenAPI",

    gammaindex_desc: "Système interne développé pour optimiser les processus d'entreprise et l'automatisation de tableurs.",
    gammaindex_motivation: "Le processus legacy impliquait des tableurs manuels et des retouches constantes. La solution technique reposait entièrement sur l'équipe d'ingénierie.",
    gammaindex_process: "Cartographie des processus en 2 semaines, sprints de 2 semaines. Intégration avec des systèmes legacy via SOAP et REST. Déploiement via Azure DevOps CI/CD.",
    gammaindex_role: "Ingénieur Senior",
    gammaindex_h1: "Réduction de 65% des retouches",
    gammaindex_h2: "Intégration avec 3 systèmes legacy",
    gammaindex_h3: "200+ utilisateurs",

    coreshell_desc: "Plateforme d'analyse financière prédictive en temps réel basée sur une architecture Local-First, utilisant WebAssembly sur le client et les CRDT sur le backend para la convergence d'état.",
    coreshell_motivation: "Résoudre le 'Paradoxe du Maillage Global Hybride' : permettre un traitement distribué massif sur le frontend sans exposer les modèles d'IA, tout en maintenant la cohérence de l'état global avec une latence inférieure à 50ms.",
    coreshell_process: "Remplacement du modèle client-serveur traditionnel par un orchestrateur Rust (HTTP/3 WebTransport) intégré à un moteur frontend en Wasm. Utilisation de SharedArrayBuffer pour le multithreading et de l'Edge Computing pour la réplication.",
    coreshell_role: "Ingénieur Logiciel / Architecte de Solutions",
    coreshell_h1: "Synchronisation d'état sans conflit (Zero-Latency) via les CRDT",
    coreshell_h2: "Traitement multithread dans le navigateur avec Wasm et Web Workers",
    coreshell_h3: "Rendu personnalisé via Canvas/WebGL pour plus de 100 000 points à 60FPS",
  },

  // ── 中文 (Mandarin Simplificado) ─────────────────────────────────
  zh: {
    back_label: "RSB",
    header_tag: "003 / 项目",
    header_count: "{{count}} 个项目",

    hero_eyebrow: "作品集",
    hero_title: "项目",
    hero_sub: "个人、职业或两者兼而有之——\n所有我用心构建的作品都在这里。",

    legend_hybrid: "混合项目",
    legend_personal: "个人发起",
    legend_professional: "职业背景",
    tag_hybrid: "个人 + 职业",
    tag_personal: "个人",
    tag_professional: "职业",

    status_ativo: "● 进行中",
    status_pausa: "◐ 暂停",
    status_done: "○ 已完成",

    expand_label: "展开",
    collapse_label: "关闭",
    detail_motivation: "动机",
    detail_process: "过程",
    detail_role: "角色",
    detail_highlights: "亮点",
    visit_project: "访问项目 →",

    footer_left: "Richard S. Bezerra",
    footer_right: "← 返回首页",

    jseeker_desc: "高性能全文搜索引擎，能够以低于10ms的延迟对海量文件系统进行索引和搜索。",
    jseeker_motivation: "探索现代Java中I/O与并发的极限，创建一个轻量级的本地搜索替代方案，无需完整Lucene的开销。",
    jseeker_process: "通过Tries实现倒排索引以节省内存，使用Fork/Join框架进行并行索引，并使用java.nio进行直接缓冲区读取。",
    jseeker_role: "软件工程师（独立开发）",
    jseeker_h1: "索引吞吐量约1GB/s",
    jseeker_h2: "基于TF-IDF的即时搜索",
    jseeker_h3: "零外部依赖",

    ultralearn_desc: "专注于加速学习的生产力中心，将Scott Young的9个原则与本地Markdown持久化相结合。",
    ultralearn_motivation: "系统化硬技能的习得过程。需要一款融合Obsidian视觉魅力与Ultralearning严格方法论的工具。",
    ultralearn_process: "基于本地文件的架构以确保数据主权。UI使用SVG构建交互式画布，并原生支持多语言。",
    ultralearn_role: "全栈开发者",
    ultralearn_h1: "自定义交互式可视化画布",
    ultralearn_h2: "与Obsidian完全兼容",
    ultralearn_h3: "弹性自动保存系统",

    waytranslate_desc: "高性能离线CLI翻译工具。完全隐私，零外部网络延迟。",
    waytranslate_motivation: "消除对付费API的依赖以及技术翻译中的数据追踪，充分利用Rust和本地容器的能力。",
    waytranslate_process: "使用Rust开发了一个健壮的CLI，内置智能回退逻辑，通过Docker集成LibreTranslate。",
    waytranslate_role: "系统工程师",
    waytranslate_h1: "100%离线运行",
    waytranslate_h2: "多语言回退逻辑",
    waytranslate_h3: "无请求频率限制",

    ayrcore_desc: "专注于基础设施和开发解决方案的科技初创公司。",
    ayrcore_motivation: "我们注意到小团队在基础设施配置上浪费了大量时间。我们希望抽象这种复杂性，以低廉成本提供高水准的开发者体验。",
    ayrcore_process: "3周内完成MVP，与5个真实团队测试。每个冲刺由直接反馈驱动。从一开始就采用微服务架构，无需重写即可扩展。",
    ayrcore_role: "技术负责人 & 联合创始人",
    ayrcore_h1: "配置时间减少40%",
    ayrcore_h2: "每月3000+次部署",
    ayrcore_h3: "延迟 < 80ms p95",

    sulexpress_desc: "专注于API性能的高可扩展性电子商务平台。",
    sulexpress_motivation: "个人探索，旨在理解如何使用现代Python在不依赖重型框架的情况下构建健壮的API。",
    sulexpress_process: "历经4个月的增量开发。专注于单元测试和通过OpenAPI自动生成文档。",
    sulexpress_role: "独立开发者",
    sulexpress_h1: "100%测试覆盖率",
    sulexpress_h2: "OpenAPI自动文档",

    gammaindex_desc: "为优化企业流程和电子表格自动化而开发的内部系统。",
    gammaindex_motivation: "遗留流程涉及手动电子表格和不断的返工。技术解决方案完全由工程团队负责。",
    gammaindex_process: "2周流程映射，2周冲刺。通过SOAP和REST与遗留系统集成。通过Azure DevOps CI/CD部署。",
    gammaindex_role: "高级工程师",
    gammaindex_h1: "返工减少65%",
    gammaindex_h2: "与3个遗留系统集成",
    gammaindex_h3: "200+用户",

    coreshell_desc: "基于本地优先 (Local-First) 架构的实时预测性金融分析平台，客户端使用 WebAssembly，后端使用 CRDT 实现状态收敛。",
    coreshell_motivation: "解决“混合全球网格悖论”：在不暴露 AI 模型的情况下实现前端大规模分布式处理，同时保持低于 50ms 延迟的全球状态一致性。",
    coreshell_process: "将传统客户端-服务器模型替换为集成 Wasm 前端引擎的 Rust 编排器 (HTTP/3 WebTransport)。使用 SharedArrayBuffer 实现多线程，并利用边缘计算进行复制。",
    coreshell_role: "软件工程师 / 解决方案架构师",
    coreshell_h1: "使用 CRDT 实现无冲突的有状态同步（零延迟）",
    coreshell_h2: "在浏览器中通过 Wasm 和 Web Workers 进行多线程处理",
    coreshell_h3: "通过 Canvas/WebGL 实现 10万+ 数据点在 60FPS 下的自定义渲染",
  },

  // ── 日本語 ────────────────────────────────────────────────────────
  ja: {
    back_label: "RSB",
    header_tag: "003 / プロジェクト",
    header_count: "{{count}} 件のプロジェクト",

    hero_eyebrow: "作品集",
    hero_title: "プロジェクト",
    hero_sub: "個人、プロフェッショナル、あるいはその両方——\n意図を持って作ったものはすべてここにあります。",

    legend_hybrid: "ハイブリッドプロジェクト",
    legend_personal: "個人の取り組み",
    legend_professional: "業務上の文脈",
    tag_hybrid: "個人 + 業務",
    tag_personal: "個人",
    tag_professional: "業務",

    status_ativo: "● アクティブ",
    status_pausa: "◐ 一時停止",
    status_done: "○ 完了",

    expand_label: "展開",
    collapse_label: "閉じる",
    detail_motivation: "モチベーション",
    detail_process: "プロセス",
    detail_role: "役割",
    detail_highlights: "ハイライト",
    visit_project: "プロジェクトを見る →",

    footer_left: "Richard S. Bezerra",
    footer_right: "← ホームに戻る",

    jseeker_desc: "10ms以下のレイテンシで大規模なファイルシステムのインデックス作成と検索が可能な高性能フルテキスト検索エンジン。",
    jseeker_motivation: "モダンJavaにおけるI/Oと並行処理の限界を探り、完全なLuceneのオーバーヘッドなしにローカル検索の軽量な代替手段を作成する。",
    jseeker_process: "メモリ効率のためのTriesによる転置インデックスの実装、並列インデックス作成のためのFork/Joinフレームワークの使用、直接バッファ読み取りのためのjava.nioの活用。",
    jseeker_role: "ソフトウェアエンジニア（ソロ）",
    jseeker_h1: "インデックス処理速度 約1GB/s",
    jseeker_h2: "TF-IDFによるインスタント検索",
    jseeker_h3: "外部依存ゼロ",

    ultralearn_desc: "Scott Youngの9原則とローカルMarkdown永続化を統合した、加速学習に特化した生産性ハブ。",
    ultralearn_motivation: "ハードスキルの習得プロセスを体系化する。Obsidianのビジュアルパワーと厳格なUltralearning方法論を組み合わせたものが必要だった。",
    ultralearn_process: "データ主権を確保するためのローカルファイルベースのアーキテクチャ。インタラクティブキャンバス用のSVGで構築されたUIとネイティブ多言語サポート。",
    ultralearn_role: "フルスタック開発者",
    ultralearn_h1: "カスタムインタラクティブビジュアルキャンバス",
    ultralearn_h2: "Obsidianとの完全な互換性",
    ultralearn_h3: "耐障害性の高い自動保存システム",

    waytranslate_desc: "高性能なオフラインCLI翻訳ツール。完全なプライバシーと外部ネットワークレイテンシゼロ。",
    waytranslate_motivation: "技術翻訳における有料APIへの依存とデータ追跡を排除し、RustとローカルコンテナのパワーをActivity活用する。",
    waytranslate_process: "Docker経由でLibreTranslateと統合されたインテリジェントなフォールバックロジックを備えた堅牢なRust CLIを開発。",
    waytranslate_role: "システムエンジニア",
    waytranslate_h1: "100%オフライン実行",
    waytranslate_h2: "多言語フォールバックロジック",
    waytranslate_h3: "レート制限なし",

    ayrcore_desc: "インフラストラクチャと開発ソリューションに特化したテクノロジースタートアップ。",
    ayrcore_motivation: "小さなチームがインフラのセットアップに何時間も費やしているのに気づいた。その複雑さを抽象化し、大企業コストなしに高水準のDXを提供したかった。",
    ayrcore_process: "3週間でMVP、5つの実際のチームでテスト。各スプリントは直接のフィードバックで推進。最初からマイクロサービスアーキテクチャを採用し、書き直しなしにスケール。",
    ayrcore_role: "テックリード & 共同創業者",
    ayrcore_h1: "セットアップ時間40%削減",
    ayrcore_h2: "月間3,000件以上のデプロイ",
    ayrcore_h3: "レイテンシ < 80ms p95",

    sulexpress_desc: "APIパフォーマンスに特化した高スケーラブルなEコマースプラットフォーム。",
    sulexpress_motivation: "重いフレームワークなしにモダンPythonで堅牢なAPIを構築する方法を理解するための個人的な探求。",
    sulexpress_process: "4ヶ月にわたるインクリメンタルな開発。ユニットテストとOpenAPIによる自動ドキュメント生成に注力。",
    sulexpress_role: "ソロ開発者",
    sulexpress_h1: "テストカバレッジ100%",
    sulexpress_h2: "OpenAPI自動ドキュメント",

    gammaindex_desc: "企業プロセスの最適化とスプレッドシート自動化のために開発された内部システム。",
    gammaindex_motivation: "レガシープロセスには手動のスプレッドシートと絶え間ない手直しが伴っていた。技術的な解決策はエンジニアリングチームに全面的に委ねられた。",
    gammaindex_process: "2週間のプロセスマッピング、2週間のスプリント。SOAPとRESTによるレガシーシステムとの統合。Azure DevOps CI/CDによるデプロイ。",
    gammaindex_role: "シニアエンジニア",
    gammaindex_h1: "手直しを65%削減",
    gammaindex_h2: "3つのレガシーシステムとの統合",
    gammaindex_h3: "200人以上のユーザー",

    coreshell_desc: "Local-Firstアーキテクチャに基づくリアルタイム予測財務分析プラットフォーム。クライアント側にWebAssembly、バックエンドにCRDTを採用し、状態の収束を実現。",
    coreshell_motivation: "「ハイブリッド・グローバル・メッシュの逆説」の解決：AIモデルを露出させることなく、フロントエンドでの大規模な分散処理を可能にし、50ms未満のレイテンシでグローバルな状態整合性を維持。",
    coreshell_process: "従来のクライアント・サーバモデルを、Wasmフロントエンドエンジンと統合されたRustオーケストレーター（HTTP/3 WebTransport）に置き換え。マルチスレッド用のSharedArrayBufferと、レプリケーション用のエッジコンピューティングを活用。",
    coreshell_role: "ソフトウェアエンジニア / ソリューションアーキテクト",
    coreshell_h1: "CRDTを使用した衝突のないステートフル同期（ゼロレイテンシ）",
    coreshell_h2: "WasmとWeb Workersによるブラウザ内マルチスレッド処理",
    coreshell_h3: "Canvas/WebGLによる10万点以上の60FPSカスタムレンダリング",
  },

  visit_casestudy: "ver estudo de caso →",
};

// ════════════════════════════════════════════
//  ENGINE DE TRADUÇÃO
//  Estado mínimo em módulo + forçar re-render via setLang() no componente.
//  Para apps maiores: migrar para React Context ou i18next.
// ════════════════════════════════════════════

/** Idioma ativo (módulo-level — simples e suficiente para SPA pequena) */
let _currentLang = "pt";

/**
 * Muda o idioma ativo globalmente.
 * O componente deve chamar um setState() local para forçar o re-render.
 * @param {string} lang - Código do idioma (ex: "pt", "en")
 */
export function setLanguage(lang) {
  if (translations[lang]) {
    _currentLang = lang;
  } else {
    console.warn(`[i18n] Idioma "${lang}" não encontrado. Mantendo "${_currentLang}".`);
  }
}

/** Retorna o código do idioma atualmente ativo */
export function getCurrentLang() {
  return _currentLang;
}

/**
 * Retorna a string traduzida para uma chave, com suporte a interpolação.
 * Fallback em cascata: idioma atual → pt → a própria chave.
 *
 * @param {string} key   - Chave de tradução (ex: "hero_title")
 * @param {Record<string, string|number>} vars - Variáveis para interpolação (ex: { count: 6 })
 * @returns {string}
 */
export function t(key, vars = {}) {
  const dict = translations[_currentLang];
  const fallback = translations["pt"];

  let str = dict?.[key] ?? fallback?.[key] ?? key;

  // Interpolação simples: substitui {{varName}} pelos valores em vars
  for (const [k, v] of Object.entries(vars)) {
    str = str.replaceAll(`{{${k}}}`, String(v));
  }

  return str;
}

/**
 * Verifica se uma chave existe no dicionário.
 * Útil para guards em tempo de desenvolvimento.
 *
 * @param {string} key
 * @param {string} [lang] - Idioma a verificar (padrão: atual)
 * @returns {boolean}
 */
export function hasKey(key, lang = _currentLang) {
  return key in (translations[lang] ?? {});
}

/** Lista de idiomas disponíveis para o seletor de idioma */
export const PROJECT_LANGS = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "de", label: "DE" },
  { code: "fr", label: "FR" },
  { code: "zh", label: "ZH" },
  { code: "ja", label: "JA" },
];
