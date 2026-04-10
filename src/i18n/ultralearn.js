// ─────────────────────────────────────────────────────────────────────────────
// CaseStudyData.js — Conteúdo da página de Case Study em múltiplos idiomas
// Mesmo padrão do arquivo de traduções do portfólio.
// Para adicionar um novo idioma: copie um bloco, altere o código e exporte.
// ─────────────────────────────────────────────────────────────────────────────

// ── Idiomas disponíveis no seletor ───────────────────────────────────────────
export const CASE_LANGS = [
  { code: 'PT', label: 'PT', flag: '🇧🇷' },
  { code: 'EN', label: 'EN', flag: '🇺🇸' },
  { code: 'ES', label: 'ES', flag: '🇪🇸' },
  { code: 'DE', label: 'DE', flag: '🇩🇪' },
  { code: 'FR', label: 'FR', flag: '🇫🇷' },
  { code: 'ZH', label: 'ZH', flag: '🇨🇳' },
  { code: 'JA', label: 'JA', flag: '🇯🇵' },
]

// ─────────────────────────────────────────────────────────────────────────────
// Stack & Ferramentas — sem tradução (nomes técnicos são universais)
// Edite esta lista única para todos os idiomas.
// ─────────────────────────────────────────────────────────────────────────────
export const STACK = [
  {
    name: "Electron 28",
    role: {
      PT: "Shell nativo + IPC + file system",
      EN: "Native shell + IPC + file system",
      ES: "Shell nativo + IPC + sistema de archivos",
      DE: "Native Shell + IPC + Dateisystem",
      FR: "Shell natif + IPC + système de fichiers",
      ZH: "原生 Shell + IPC + 文件系统",
      JA: "ネイティブシェル + IPC + ファイルシステム",
    },
    icon: "⬡",
  },
  {
    name: "React 18",
    role: {
      PT: "UI declarativa + hooks",
      EN: "Declarative UI + hooks",
      ES: "UI declarativa + hooks",
      DE: "Deklarative UI + Hooks",
      FR: "UI déclarative + hooks",
      ZH: "声明式 UI + Hooks",
      JA: "宣言的 UI + Hooks",
    },
    icon: "⚛",
  },
  {
    name: "TypeScript 5",
    role: {
      PT: "Type safety fim-a-fio",
      EN: "End-to-end type safety",
      ES: "Tipado estricto de extremo a extremo",
      DE: "End-to-End Typsicherheit",
      FR: "Sécurité de typage de bout en bout",
      ZH: "端到端类型安全",
      JA: "エンドツーエンドの型安全性",
    },
    icon: "TS",
  },
  {
    name: "electron-vite",
    role: {
      PT: "Bundler + HMR no renderer",
      EN: "Bundler + HMR in renderer",
      ES: "Bundler + HMR en el renderer",
      DE: "Bundler + HMR im Renderer",
      FR: "Bundler + HMR dans le renderer",
      ZH: "构建工具 + 渲染进程 HMR",
      JA: "バンドラー + レンダラー内 HMR",
    },
    icon: "⚡",
  },
  {
    name: "js-yaml",
    role: {
      PT: "Serialização YAML front-matter",
      EN: "YAML front-matter serialization",
      ES: "Serialización YAML front-matter",
      DE: "YAML Front-Matter Serialisierung",
      FR: "Sérialisation YAML front-matter",
      ZH: "YAML Front-matter 序列化",
      JA: "YAML Front-matter シリアライズ",
    },
    icon: "◈",
  },
  {
    name: "CSS Variables",
    role: {
      PT: "Design tokens, zero CSS-in-JS",
      EN: "Design tokens, zero CSS-in-JS",
      ES: "Tokens de diseño, cero CSS-in-JS",
      DE: "Design-Tokens, null CSS-in-JS",
      FR: "Design tokens, zéro CSS-in-JS",
      ZH: "设计令牌，零 CSS-in-JS",
      JA: "デザイントークン、CSS-in-JS 不要",
    },
    icon: "◻",
  },
  {
    name: "Web Workers",
    role: {
      PT: "Serialização off-thread",
      EN: "Off-thread serialization",
      ES: "Serialización fuera del hilo principal",
      DE: "Off-Thread Serialisierung",
      FR: "Sérialisation hors thread",
      ZH: "主线程外序列化",
      JA: "メインスレッド外シリアライズ",
    },
    icon: "⟳",
  },
  {
    name: "SVG + HTML",
    role: {
      PT: "Canvas do roadmap personalizado",
      EN: "Custom roadmap canvas",
      ES: "Canvas de roadmap personalizado",
      DE: "Benutzerdefiniertes Roadmap-Canvas",
      FR: "Canvas de roadmap personnalisé",
      ZH: "自定义路线图画布",
      JA: "カスタムロードマップ Canvas",
    },
    icon: "△",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PT — Português
// ─────────────────────────────────────────────────────────────────────────────
const PT = {
  hero: {
    label: "// estudo_de_caso ",
    title: "UltraLearn",
    subtitle: "Um tracker de estudos desktop construído em torno dos 9 princípios do método Ultralearning de Scott Young.",
    tags: ["Electron", "React", "TypeScript", "Canvas Customizado"],
  },
  navHome: 'Voltar',


  context: {
    sectionLabel: "01 / Contexto",
    heading: "O problema com apps de estudo genéricos.",
    paragraphs: [
      "Depois de terminar o livro *Ultralearning* de Scott H. Young, percebi que os apps de estudo existentes — Notion, Obsidian, Anki — não refletiam a estrutura mental do método. Cada um resolve uma peça do puzzle, mas nenhum trata os 9 princípios como unidade coesa.",
      "Queria um lugar único onde eu pudesse ver *simultaneamente* o progresso nos princípios de Metalearning, Foco, Prática Direta e Retenção para cada assunto estudado — não uma coleção de páginas soltas.",
      "O objetivo inicial era simples: um tracker offline, sem servidor, que salvasse os dados em Markdown puro para ser legível em qualquer editor.",
    ],
    metrics: [
      { value: "9", label: "princípios mapeados" },
      { value: "4", label: "idiomas suportados" },
      { value: "5", label: "tipos de nó no canvas" },
      { value: "0", label: "dependências de servidor" },
    ],
  },

  timeline: [
    {
      phase: "Fase 01",
      title: "Electron como shell — por quê não uma web app?",
      body: "A decisão de usar Electron foi intencional. O requisito de salvar arquivos `.ul.md` diretamente no sistema de arquivos do usuário — sem nuvem, sem login — exige acesso nativo ao FS. Uma PWA simplesmente não tem esse nível de acesso. O custo (bundle pesado) era aceitável dado que o público-alvo é desenvolvedor.",
      challenge: "Configurar o processo main/preload/renderer com electron-vite sem vazar APIs Node no renderer.",
      decision: "Context bridge mínimo: apenas as operações de arquivo necessárias expostas via `window.api`, mantendo a surface de ataque pequena.",
      tag: "Arquitetura",
    },
    {
      phase: "Fase 02",
      title: "Canvas customizado — por que não usar React Flow?",
      body: "A primeira versão usava React Flow. O problema surgiu quando precisei de comportamentos muito específicos: snap-to-grid com feedback visual, conexões Bezier 4-direcionais e undo/redo granular por canvas. Adaptar React Flow para isso gerou mais código de override do que código de feature.",
      challenge: "Re-implementar pan/zoom + multi-select + history stack do zero sem perder semanas.",
      decision: "SVG + HTML puro com um reducer de 60 estados de undo. A ausência de uma biblioteca de canvas eliminou 40 KB de bundle e deu controle total sobre o comportamento.",
      tag: "Canvas",
    },
    {
      phase: "Fase 03",
      title: "Salvamento — debounce + flush síncrono",
      body: "Auto-save com debounce de 300ms é trivial, mas o problema real surgiu ao fechar a janela no meio de uma edição e ao trocar de idioma. Em ambos os casos, o debounce pendente seria cancelado sem salvar.",
      challenge: "Garantir zero perda de dados no `beforeunload` sem bloquear o processo renderer.",
      decision: "Um `ref` guarda o payload pendente. No `beforeunload`, o IPC síncrono `writeFileSync` faz o flush. O worker de serialização roda async no caso feliz; o caminho síncrono é só para emergências.",
      tag: "Data Safety",
    },
    {
      phase: "Fase 04",
      title: "i18n com lazy loading e sem perda de estado",
      body: "Suportar 4 idiomas com um único contexto React foi direto. O desafio foi fazer a troca ser instantânea sem um reload de página — que causaria perda de estado — mas garantindo que o bundle inicial não carregasse todos os pacotes de tradução.",
      challenge: "Lazy load do pacote de idioma selecionado + flush do estado antes do reload quando necessário.",
      decision: "Imports dinâmicos por idioma. Se há dados não salvos, o `flushSave()` é chamado primeiro. O reload acontece só depois que o IPC confirma a escrita.",
      tag: "i18n",
    },
  ],

  conclusion: {
    sectionLabel: "05 / Conclusão",
    heading: "O que aprendi construindo uma ferramenta para aprender.",
    paragraphs: [
      "Reinventar o canvas em vez de adaptar uma biblioteca custou mais tempo no início, mas devolveu controle total e eliminou complexidade acidental. Às vezes a abstração certa é a que você escreve.",
      "O padrão debounce + flush síncrono é simples, mas exige pensar no *caminho infeliz* antes de ele acontecer. Data safety raramente falha no caminho feliz.",
    ],
    results: [
      "Canvas com undo/redo de 60 estados sem library externa",
      "Arquivos .ul.md 100% compatíveis com Obsidian",
      "Boot screen terminal que inicializa os 9 princípios",
      "Zero dependência de servidor ou nuvem",
    ],
    links: {
      repo: "https://github.com/richardsbez/ultralearning",
      live: "",
    },
  },

  nav: ["contexto", "processo", "stack", "conclusão"],
  footer: "feito com foco e curiosidade",
  processHeading: "Como foi feito, passo a passo.",
  stackHeading: "Cada escolha tem um porquê.",
  backLabel: "← Voltar ao portfólio",
  repoLabel: "Ver repositório",
  liveLabel: "Demo ao vivo",
  challengeLabel: "⚠ Desafio",
  decisionLabel: "✓ Decisão",
};

// ─────────────────────────────────────────────────────────────────────────────
// EN — English
// ─────────────────────────────────────────────────────────────────────────────
const EN = {
  hero: {
    label: "// case_study ",
    title: "UltraLearn",
    subtitle: "A desktop study tracker built around the 9 principles of Scott Young's Ultralearning method.",
    tags: ["Electron", "React", "TypeScript", "Custom Canvas"],
  },
  navHome: 'Back',

  context: {
    sectionLabel: "01 / Context",
    heading: "The problem with generic study apps.",
    paragraphs: [
      "After finishing Scott H. Young's *Ultralearning*, I realized existing study apps — Notion, Obsidian, Anki — don't reflect the mental structure of the method. Each one solves a piece of the puzzle, but none treats the 9 principles as a cohesive unit.",
      "I wanted a single place where I could *simultaneously* see progress across Metalearning, Focus, Direct Practice, and Retention for each subject I was studying — not a collection of loose pages.",
      "The initial goal was simple: an offline tracker, no server, that saved data as plain Markdown so it would be readable in any editor.",
    ],
    metrics: [
      { value: "9", label: "principles mapped" },
      { value: "4", label: "supported languages" },
      { value: "5", label: "canvas node types" },
      { value: "0", label: "server dependencies" },
    ],
  },

  timeline: [
    {
      phase: "Phase 01",
      title: "Electron as shell — why not a web app?",
      body: "The decision to use Electron was intentional. The requirement of saving `.ul.md` files directly to the user's file system — no cloud, no login — demands native FS access. A PWA simply doesn't have that level of access. The cost (heavy bundle) was acceptable given the target audience is developers.",
      challenge: "Setting up the main/preload/renderer process with electron-vite without leaking Node APIs into the renderer.",
      decision: "Minimal context bridge: only the necessary file operations exposed via `window.api`, keeping the attack surface small.",
      tag: "Architecture",
    },
    {
      phase: "Phase 02",
      title: "Custom canvas — why not React Flow?",
      body: "The first version used React Flow. Issues arose when I needed very specific behaviors: snap-to-grid with visual feedback, 4-directional Bezier connections, and granular per-canvas undo/redo. Adapting React Flow produced more override code than feature code.",
      challenge: "Re-implementing pan/zoom + multi-select + history stack from scratch without losing weeks.",
      decision: "Pure SVG + HTML with a 60-state undo reducer. No canvas library removed 40 KB from the bundle and gave full control over behavior.",
      tag: "Canvas",
    },
    {
      phase: "Phase 03",
      title: "Saving — debounce + synchronous flush",
      body: "Auto-save with 300ms debounce is trivial, but the real problem came at two moments: when the user closes the window mid-edit, and when switching languages (which reloads the app). In both cases, the pending debounce would be cancelled without saving.",
      challenge: "Guaranteeing zero data loss on `beforeunload` without blocking the renderer process.",
      decision: "A `ref` holds the pending payload. On `beforeunload`, synchronous IPC `writeFileSync` flushes it. The serialization worker runs async in the happy path; the sync path is only for emergencies.",
      tag: "Data Safety",
    },
    {
      phase: "Phase 04",
      title: "i18n with lazy loading and no state loss",
      body: "Supporting 4 languages with a single React context was straightforward. The challenge was making language switching instant without a page reload — which would lose unsaved state — while ensuring the initial bundle didn't load all translation packages.",
      challenge: "Lazy loading the selected language package + flushing state before reload when necessary.",
      decision: "Dynamic imports per language. If there's unsaved data, `flushSave()` is called first. The reload only happens after the IPC confirms the write.",
      tag: "i18n",
    },
  ],

  conclusion: {
    sectionLabel: "05 / Conclusion",
    heading: "What I learned building a tool for learning.",
    paragraphs: [
      "Reinventing the canvas instead of adapting a library cost more time up front, but returned full control and eliminated accidental complexity. Sometimes the right abstraction is the one you write yourself.",
      "The debounce + synchronous flush pattern is simple, but it demands thinking about the *unhappy path* before it happens. Data safety rarely fails on the happy path.",
    ],
    results: [
      "Canvas with 60-state undo/redo without an external library",
      ".ul.md files 100% compatible with Obsidian",
      "Terminal boot screen initializing all 9 principles",
      "Zero server or cloud dependencies",
    ],
    links: {
      repo: "https://github.com/richardsbez/ultralearning",
      live: "",
    },
  },

  nav: ["context", "process", "stack", "conclusion"],
  footer: "built with focus and curiosity",
  processHeading: "How it was built, step by step.",
  stackHeading: "Every choice has a reason.",
  backLabel: "← Back to portfolio",
  repoLabel: "View repository",
  liveLabel: "Live demo",
  challengeLabel: "⚠ Challenge",
  decisionLabel: "✓ Decision",
};

// ─────────────────────────────────────────────────────────────────────────────
// ES — Español
// ─────────────────────────────────────────────────────────────────────────────
const ES = {
  hero: {
    label: "// caso_de_estudio ",
    title: "UltraLearn",
    subtitle: "Un tracker de estudios desktop construido en torno a los 9 principios del método Ultralearning de Scott Young.",
    tags: ["Electron", "React", "TypeScript", "Canvas Personalizado"],
  },
  navHome: 'Volver',

  context: {
    sectionLabel: "01 / Contexto",
    heading: "El problema con las apps de estudio genéricas.",
    paragraphs: [
      "Después de terminar *Ultralearning* de Scott H. Young, me di cuenta de que las apps existentes — Notion, Obsidian, Anki — no reflejan la estructura mental del método. Cada una resuelve una pieza del rompecabezas, pero ninguna trata los 9 principios como una unidad cohesiva.",
      "Quería un lugar único donde pudiera ver *simultáneamente* el progreso en Metalearning, Foco, Práctica Directa y Retención para cada materia — no una colección de páginas sueltas.",
      "El objetivo inicial era simple: un tracker offline, sin servidor, que guardara los datos en Markdown puro para ser legible en cualquier editor.",
    ],
    metrics: [
      { value: "9", label: "principios mapeados" },
      { value: "4", label: "idiomas soportados" },
      { value: "5", label: "tipos de nodo en el canvas" },
      { value: "0", label: "dependencias de servidor" },
    ],
  },

  timeline: [
    {
      phase: "Fase 01",
      title: "Electron como shell — ¿por qué no una web app?",
      body: "La decisión de usar Electron fue intencional. El requisito de guardar archivos `.ul.md` directamente en el sistema de archivos del usuario — sin nube, sin login — exige acceso nativo al FS. Una PWA simplemente no tiene ese nivel de acceso.",
      challenge: "Configurar el proceso main/preload/renderer con electron-vite sin filtrar APIs de Node al renderer.",
      decision: "Context bridge mínimo: solo las operaciones de archivo necesarias expuestas via `window.api`, manteniendo la superficie de ataque pequeña.",
      tag: "Arquitectura",
    },
    {
      phase: "Fase 02",
      title: "Canvas personalizado — ¿por qué no React Flow?",
      body: "La primera versión usaba React Flow. Los problemas surgieron al necesitar comportamientos muy específicos: snap-to-grid con feedback visual, conexiones Bezier 4-direccionales y undo/redo granular por canvas. Adaptar React Flow generó más código de override que código de feature.",
      challenge: "Re-implementar pan/zoom + multi-select + historial desde cero sin perder semanas.",
      decision: "SVG + HTML puro con un reducer de 60 estados de undo. Sin biblioteca de canvas se eliminaron 40 KB del bundle y se obtuvo control total sobre el comportamiento.",
      tag: "Canvas",
    },
    {
      phase: "Fase 03",
      title: "Guardado — debounce + flush síncrono",
      body: "El auto-save con debounce de 300ms es trivial, pero el problema real surgió al cerrar la ventana a mitad de una edición y al cambiar de idioma. En ambos casos, el debounce pendiente se cancelaría sin guardar.",
      challenge: "Garantizar cero pérdida de datos en `beforeunload` sin bloquear el proceso renderer.",
      decision: "Un `ref` guarda el payload pendiente. En `beforeunload`, el IPC síncrono `writeFileSync` hace el flush. El worker de serialización corre async en el caso feliz.",
      tag: "Data Safety",
    },
    {
      phase: "Fase 04",
      title: "i18n con lazy loading y sin pérdida de estado",
      body: "Soportar 4 idiomas con un único contexto React fue directo. El reto fue hacer el cambio instantáneo sin un reload de página — que causaría pérdida de estado — garantizando que el bundle inicial no cargara todos los paquetes de traducción.",
      challenge: "Lazy load del paquete de idioma seleccionado + flush del estado antes del reload cuando sea necesario.",
      decision: "Imports dinámicos por idioma. Si hay datos sin guardar, se llama a `flushSave()` primero. El reload ocurre solo después de que el IPC confirma la escritura.",
      tag: "i18n",
    },
  ],

  conclusion: {
    sectionLabel: "05 / Conclusión",
    heading: "Lo que aprendí construyendo una herramienta para aprender.",
    paragraphs: [
      "Reinventar el canvas en vez de adaptar una biblioteca costó más tiempo al inicio, pero devolvió control total y eliminó complejidad accidental. A veces la abstracción correcta es la que uno mismo escribe.",
      "El patrón debounce + flush síncrono es simple, pero exige pensar en el *camino infeliz* antes de que ocurra. La seguridad de datos rara vez falla en el camino feliz.",
    ],
    results: [
      "Canvas con undo/redo de 60 estados sin biblioteca externa",
      "Archivos .ul.md 100% compatibles con Obsidian",
      "Boot screen terminal que inicializa los 9 principios",
      "Cero dependencias de servidor o nube",
    ],
    links: {
      repo: "https://github.com/richardsbez/ultralearning",
      live: "",
    },
  },

  nav: ["contexto", "proceso", "stack", "conclusión"],
  footer: "construido con enfoque y curiosidad",
  processHeading: "Cómo fue hecho, paso a paso.",
  stackHeading: "Cada elección tiene un porqué.",
  backLabel: "← Volver al portafolio",
  repoLabel: "Ver repositorio",
  liveLabel: "Demo en vivo",
  challengeLabel: "⚠ Desafío",
  decisionLabel: "✓ Decisión",
};

// ─────────────────────────────────────────────────────────────────────────────
// DE — Deutsch
// ─────────────────────────────────────────────────────────────────────────────
//
const DE = {
  hero: {
    label: "// fallstudie ",
    title: "UltraLearn",
    subtitle: "Ein Desktop-Studien-Tracker, basierend auf den 9 Prinzipien der Ultralearning-Methode von Scott Young.",
    tags: ["Electron", "React", "TypeScript", "Custom Canvas"],
  },
  navHome: 'Zurück',

  context: {
    sectionLabel: "01 / Kontext",
    heading: "Das Problem mit generischen Studien-Apps.",
    paragraphs: [
      "Nachdem ich Scott H. Youngs Buch *Ultralearning* gelesen hatte, wurde mir klar, dass bestehende Apps wie Notion, Obsidian oder Anki nicht die mentale Struktur der Methode widerspiegeln. Jede löst ein Puzzleteil, aber keine behandelt die 9 Prinzipien als kohärente Einheit.",
      "Ich wollte einen Ort, an dem ich *gleichzeitig* den Fortschritt in Metalearning, Fokus, Direktheit und Retention für jedes Thema sehen kann — keine lose Sammlung von Seiten.",
      "Das Ziel war einfach: ein Offline-Tracker ohne Server, der Daten in reinem Markdown speichert, damit sie in jedem Editor lesbar bleiben.",
    ],
    metrics: [
      { value: "9", label: "Prinzipien kartiert" },
      { value: "4", label: "Sprachen unterstützt" },
      { value: "5", label: "Knotentypen im Canvas" },
      { value: "0", label: "Server-Abhängigkeiten" },
    ],
  },

  timeline: [
    {
      phase: "Phase 01",
      title: "Electron als Shell — warum keine Web-App?",
      body: "Die Entscheidung für Electron war bewusst. Die Anforderung, `.ul.md`-Dateien direkt im Dateisystem des Nutzers zu speichern — ohne Cloud, ohne Login — erfordert nativen FS-Zugriff. Eine PWA hat diesen Zugriff nicht. Die Kosten (schweres Bundle) waren akzeptabel, da die Zielgruppe Entwickler sind.",
      challenge: "Konfiguration des Main/Preload/Renderer-Prozesses mit electron-vite, ohne Node-APIs im Renderer freizugeben.",
      decision: "Minimalistische Context Bridge: Nur notwendige Dateioperationen via `window.api` freigeben, um die Angriffsfläche klein zu halten.",
      tag: "Architektur",
    },
    {
      phase: "Phase 02",
      title: "Custom Canvas — warum nicht React Flow?",
      body: "Die erste Version nutzte React Flow. Das Problem entstand bei spezifischen Anforderungen: Snap-to-Grid mit visuellem Feedback, 4-direktionale Bezier-Verbindungen und granulares Undo/Redo pro Canvas. React Flow dafür anzupassen, erzeugte mehr Override-Code als Feature-Code.",
      challenge: "Implementierung von Pan/Zoom + Multi-Select + History-Stack von Grund auf in kurzer Zeit.",
      decision: "SVG + reines HTML mit einem Reducer für 60 Undo-States. Der Verzicht auf eine Bibliothek sparte 40 KB im Bundle und gab volle Kontrolle.",
      tag: "Canvas",
    },
    {
      phase: "Phase 03",
      title: "Speicherung — Debounce + synchroner Flush",
      body: "Auto-Save mit 300ms Debounce ist trivial, aber das Problem war das Schließen des Fensters während der Bearbeitung. In diesem Fall würde der ausstehende Debounce ohne Speichern abgebrochen.",
      challenge: "Garantie für null Datenverlust bei `beforeunload`, ohne den Renderer-Prozess zu blockieren.",
      decision: "Ein `ref` hält das ausstehende Payload. Bei `beforeunload` erzwingt der synchrone IPC-Befehl `writeFileSync` den Flush. Der Sychron-Pfad ist nur für Notfälle.",
      tag: "Datensicherheit",
    },
    {
      phase: "Phase 04",
      title: "i18n mit Lazy Loading ohne Statusverlust",
      body: "4 Sprachen mit einem React-Kontext zu unterstützen war einfach. Die Herausforderung war der sofortige Wechsel ohne Seiten-Reload, um den Status nicht zu verlieren, während das Initial-Bundle klein bleibt.",
      challenge: "Lazy Load des Sprachpakets + Status-Flush vor dem Reload, falls nötig.",
      decision: "Dynamische Imports pro Sprache. Wenn ungespeicherte Daten vorhanden sind, wird erst `flushSave()` aufgerufen. Der Reload erfolgt erst nach IPC-Bestätigung.",
      tag: "i18n",
    },
  ],

  conclusion: {
    sectionLabel: "05 / Fazit",
    heading: "Was ich beim Bau eines Lern-Tools gelernt habe.",
    paragraphs: [
      "Das Canvas selbst zu bauen, statt eine Bibliothek anzupassen, kostete anfangs Zeit, brachte aber die volle Kontrolle zurück. Manchmal ist die beste Abstraktion die, die man selbst schreibt.",
      "Das Debounce + synchroner Flush Muster ist einfach, erfordert aber, an den Fehlerfall zu denken, bevor er eintritt. Datensicherheit zeigt sich erst in Ausnahmesituationen.",
    ],
    results: [
      "Canvas mit 60 Undo-States ohne externe Library",
      "100% Obsidian-kompatible .ul.md Dateien",
      "Terminal-Boot-Screen zur Initialisierung der Prinzipien",
      "Völlig unabhängig von Server oder Cloud",
    ],
    links: {
      repo: "https://github.com/richardsbez/ultralearning",
      live: "",
    },
  },

  nav: ["kontext", "prozess", "stack", "fazit"],
  footer: "mit fokus und neugier gemacht",
  processHeading: "Schritt für Schritt: Die Entstehung.",
  stackHeading: "Jede Entscheidung hat einen Grund.",
  backLabel: "← Zurück zum Portfolio",
  repoLabel: "Repository ansehen",
  liveLabel: "Live-Demo",
  challengeLabel: "⚠ Herausforderung",
  decisionLabel: "✓ Entscheidung",
};

// ─────────────────────────────────────────────────────────────────────────────
// FR — Français
// ─────────────────────────────────────────────────────────────────────────────
//
const FR = {
  hero: {
    label: "// étude_de_cas ",
    title: "UltraLearn",
    subtitle: "Un tracker d'études desktop conçu autour des 9 principes de la méthode Ultralearning de Scott Young.",
    tags: ["Electron", "React", "TypeScript", "Canvas Personnalisé"],
  },
  navHome: 'Retour',

  context: {
    sectionLabel: "01 / Contexte",
    heading: "Le problème des apps d'étude génériques.",
    paragraphs: [
      "Après avoir lu *Ultralearning* de Scott H. Young, j'ai réalisé que les apps existantes — Notion, Obsidian, Anki — ne reflétaient pas la structure mentale de la méthode. Chacune résout une pièce du puzzle, mais aucune ne traite les 9 principes comme une unité cohérente.",
      "Je voulais un endroit unique où je pourrais voir *simultanément* la progression du Métapprentissage, de la Focalisation et de la Rétention pour chaque sujet — pas une collection de pages éparses.",
      "L'objectif initial était simple : un tracker hors ligne, sans serveur, sauvegardant les données en Markdown pur pour être lisible dans n'importe quel éditeur.",
    ],
    metrics: [
      { value: "9", label: "principes cartographiés" },
      { value: "4", label: "langues supportées" },
      { value: "5", label: "types de nœuds canvas" },
      { value: "0", label: "dépendance serveur" },
    ],
  },

  timeline: [
    {
      phase: "Phase 01",
      title: "Electron comme shell — pourquoi pas une web app ?",
      body: "La décision d'utiliser Electron était intentionnelle. Sauvegarder des fichiers `.ul.md` directement sur le système de l'utilisateur exige un accès FS natif. Une PWA n'a pas ce niveau d'accès. Le coût (bundle lourd) était acceptable car la cible est composée de développeurs.",
      challenge: "Configurer le processus main/preload/renderer avec electron-vite sans exposer les APIs Node au renderer.",
      decision: "Context bridge minimal : seules les opérations de fichiers nécessaires sont exposées via `window.api`.",
      tag: "Architecture",
    },
    {
      phase: "Phase 02",
      title: "Canvas sur mesure — pourquoi pas React Flow ?",
      body: "La première version utilisait React Flow. Le problème est apparu pour des besoins spécifiques : snap-to-grid visuel, connexions Bezier 4-directions et undo/redo granulaire par canvas. Adapter React Flow générait plus de code d'override que de fonctionnalités.",
      challenge: "Ré-implémenter pan/zoom + multi-select + history stack de zéro rapidement.",
      decision: "SVG + HTML pur avec un reducer de 60 états d'annulation. L'absence de bibliothèque a éliminé 40 Ko du bundle et offert un contrôle total.",
      tag: "Canvas",
    },
    {
      phase: "Phase 03",
      title: "Sauvegarde — debounce + flush synchrone",
      body: "L'auto-save avec debounce de 300ms est trivial, mais le vrai problème surgit à la fermeture de la fenêtre : le debounce en cours serait annulé sans sauvegarder.",
      challenge: "Garantir zéro perte de données lors du `beforeunload` sans bloquer le renderer.",
      decision: "Un `ref` stocke le payload en attente. Au `beforeunload`, l'IPC synchrone `writeFileSync` force l'écriture. Le chemin synchrone n'est que pour les urgences.",
      tag: "Sécurité des données",
    },
    {
      phase: "Phase 04",
      title: "i18n avec lazy loading sans perte d'état",
      body: "Supporter 4 langues avec un contexte React était simple. Le défi était de rendre le changement instantané sans rechargement de page — ce qui causerait une perte d'état.",
      challenge: "Lazy load du pack de langue + flush de l'état avant le rechargement si nécessaire.",
      decision: "Imports dynamiques par langue. S'il y a des données non sauvées, `flushSave()` est appelé d'abord. Le rechargement n'a lieu qu'après confirmation IPC.",
      tag: "i18n",
    },
  ],

  conclusion: {
    sectionLabel: "05 / Conclusion",
    heading: "Ce que j'ai appris en construisant un outil pour apprendre.",
    paragraphs: [
      "Réinventer le canvas au lieu d'adapter une bibliothèque a coûté plus de temps au début, mais a redonné un contrôle total. Parfois, la bonne abstraction est celle que l'on écrit soi-même.",
      "Le pattern debounce + flush synchrone est simple, mais exige de penser au pire scénario avant qu'il n'arrive.",
    ],
    results: [
      "Canvas avec undo/redo de 60 états sans librairie externe",
      "Fichiers .ul.md 100% compatibles avec Obsidian",
      "Écran de boot terminal initialisant les 9 principes",
      "Zéro dépendance serveur ou cloud",
    ],
    links: {
      repo: "https://github.com/richardsbez/ultralearning",
      live: "",
    },
  },

  nav: ["contexte", "processus", "stack", "conclusion"],
  footer: "fait avec focus et curiosité",
  processHeading: "Étapes de fabrication, pas à pas.",
  stackHeading: "Chaque choix a sa raison d'être.",
  backLabel: "← Retour au portfolio",
  repoLabel: "Voir le dépôt",
  liveLabel: "Démo en direct",
  challengeLabel: "⚠ Défi",
  decisionLabel: "✓ Décision",
};

// ─────────────────────────────────────────────────────────────────────────────
// ZH — 简体中文
// ─────────────────────────────────────────────────────────────────────────────

const ZH = {
  hero: {
    label: "// 案例研究",
    title: "UltraLearn",
    subtitle: "一款围绕 Scott Young 的《超级学习》九大原则构建的桌面端学习追踪工具。",
    tags: ["Electron", "React", "TypeScript", "自定义 Canvas"],
  },
  navHome: '返回',

  context: {
    sectionLabel: "01 / 项目背景",
    heading: "通用学习类 App 的局限性。",
    paragraphs: [
      "在读完 Scott H. Young 的《超级学习》(Ultralearning) 后，我意识到现有的学习工具（如 Notion、Obsidian、Anki）无法反映该方法的思维结构。它们各自解决了部分问题，但没有一个能将九大原则视为一个凝聚的整体。",
      "我想要一个统一的地方，能够*同时*看到每个学习主题在元学习、专注、直接练习和记忆保持方面的进展，而不是零散的页面集合。",
      "最初的目标很简单：一个离线的、无服务器的追踪器，以纯 Markdown 格式保存数据，确保在任何编辑器中都具有可读性。",
    ],
    metrics: [
      { value: "9", label: "映射原则" },
      { value: "4", label: "支持语言" },
      { value: "5", label: "画布节点类型" },
      { value: "0", label: "服务器依赖" },
    ],
  },

  timeline: [
    {
      phase: "阶段 01",
      title: "以 Electron 为壳 — 为什么不是 Web App？",
      body: "使用 Electron 是刻意的决定。直接在用户文件系统中保存 `.ul.md` 文件（无云端、无登录）需要原生文件系统 (FS) 访问权限。PWA 无法达到这种访问级别。尽管 Bundle 较重，但考虑到目标受众是开发者，这是可以接受的代价。",
      challenge: "使用 electron-vite 配置主进程/预加载/渲染进程，同时防止渲染进程泄露 Node API。",
      decision: "最小化上下文隔离桥 (Context Bridge)：仅通过 `window.api` 暴露必要的文件操作，保持较小的攻击面。",
      tag: "架构",
    },
    {
      phase: "阶段 02",
      title: "自定义画布 — 为什么不使用 React Flow？",
      body: "第一版使用了 React Flow。但当我需要非常特定的行为时遇到了瓶颈：带有视觉反馈的网格对齐、四向贝塞尔曲线连接以及针对画布的细粒度撤销/重做。适配 React Flow 产生的覆盖代码甚至超过了功能代码本身。",
      challenge: "从零开始重新实现平移/缩放 + 多选 + 历史记录栈，且不耗费数周时间。",
      decision: "采用 SVG + 纯 HTML，结合一个支持 60 步撤销状态的 Reducer。弃用库文件减少了 40 KB 的体积并实现了完全控制。",
      tag: "画布",
    },
    {
      phase: "阶段 03",
      title: "数据保存 — 防抖 + 同步刷新",
      body: "带有 300ms 防抖的自动保存很简单，但真实挑战在于编辑中途关闭窗口。在这种情况下，挂起的防抖请求会被取消而导致无法保存。",
      challenge: "确保在 `beforeunload` 时零数据丢失，且不阻塞渲染进程。",
      decision: "使用 `ref` 保存挂起的 Payload。在 `beforeunload` 时，通过 IPC 同步指令 `writeFileSync` 进行强制写入。同步路径仅用于紧急情况。",
      tag: "数据安全",
    },
    {
      phase: "阶段 04",
      title: "支持懒加载且不丢失状态的 i18n",
      body: "用单个 React Context 支持 4 种语言很直接。挑战在于如何在不刷新页面的情况下实现即时切换（刷新会导致状态丢失），同时确保初始 Bundle 不会加载所有语言包。",
      challenge: "语言包懒加载 + 必要时在重载前刷新保存状态。",
      decision: "按语言进行动态导入。若有未保存数据，先调用 `flushSave()`。仅在 IPC 确认写入后再执行语言更新。",
      tag: "i18n",
    },
  ],

  conclusion: {
    sectionLabel: "05 / 结论",
    heading: "在构建学习工具的过程中学到了什么。",
    paragraphs: [
      "从头开发画布而非适配现有库虽然初期耗时较多，但换来了完全的控制权并消除了意外的复杂性。有时候，最好的抽象就是你自己写的那个。",
      "“防抖 + 同步刷新”模式虽然简单，但需要你在问题发生前就考虑到“异常路径”。数据安全很少在正常流程中出问题。",
    ],
    results: [
      "实现 60 步撤销/重做的原生画布（无外部库）",
      "100% 兼容 Obsidian 的 .ul.md 文件",
      "初始化九大原则的终端风格启动屏幕",
      "零服务器或云端依赖",
    ],
    links: {
      repo: "https://github.com/richardsbez/ultralearning",
      live: "",
    },
  },

  nav: ["背景", "流程", "技术栈", "结论"],
  footer: "始于专注与好奇心",
  processHeading: "开发步骤全记录。",
  stackHeading: "每个选择背后都有理由。",
  backLabel: "← 返回作品集",
  repoLabel: "查看仓库",
  liveLabel: "在线演示",
  challengeLabel: "⚠ 挑战",
  decisionLabel: "✓ 决策",
};
// ─────────────────────────────────────────────────────────────────────────────
// JA — 日本語
// ─────────────────────────────────────────────────────────────────────────────
//
const JA = {
  hero: {
    label: "// ケーススタディ",
    title: "UltraLearn",
    subtitle: "スコット・ヤングの「ウルトララーニング」9つの原則に基づいたデスクトップ学習トラッカー。",
    tags: ["Electron", "React", "TypeScript", "カスタムCanvas"],
  },
  navHome: '戻る',

  context: {
    sectionLabel: "01 / 背景",
    heading: "汎用学習アプリの課題。",
    paragraphs: [
      "スコット・H・ヤングの『ウルトララーニング』を読んだ後、NotionやObsidian、Ankiなどの既存アプリがこのメソッドの思考構造を反映していないことに気づきました。それぞれがパズルの一片を解決してはいますが、9つの原則を統合された単位として扱うものはありませんでした。",
      "バラバラのページ集ではなく、各学習テーマにおける「メタ学習」「集中」「直接学習」「保持」の進捗を*同時*に確認できる唯一の場所が必要でした。",
      "最初の手法はシンプルでした。サーバーなしのオフライン型トラッカーで、データを純粋なMarkdownで保存し、どのエディタでも閲覧可能にすることです。",
    ],
    metrics: [
      { value: "9", label: "マッピングされた原則" },
      { value: "4", label: "対応言語" },
      { value: "5", label: "Canvasノードタイプ" },
      { value: "0", label: "サーバー依存" },
    ],
  },

  timeline: [
    {
      phase: "フェーズ 01",
      title: "シェルとしてのElectron — なぜWebアプリではないのか？",
      body: "Electronの採用は意図的です。クラウドやログインなしで、ユーザーのファイルシステムに直接 `.ul.md` ファイルを保存するには、ネイティブなFSアクセスが必要です。PWAではこのレベルのアクセスは不可能です。対象ユーザーが開発者であることを考慮し、重いバンドルサイズは許容しました。",
      challenge: "electron-viteを使用し、メイン/プリロード/レンダラープロセスを構成しながら、Node APIがレンダラーに漏洩しないようにすること。",
      decision: "最小限のコンテキストブリッジ：`window.api` を介して必要なファイル操作のみを公開し、攻撃対象領域を最小限に抑える。",
      tag: "アーキテクチャ",
    },
    {
      phase: "フェーズ 02",
      title: "カスタムCanvas — なぜReact Flowを使わないのか？",
      body: "初期バージョンではReact Flowを使用していました。しかし、視覚的フィードバック付きのスナップ機能や、4方向ベジェ曲線、Canvasごとの細かなUndo/Redoなど、非常に特定の挙動が必要になった際、既存ライブラリの調整に機能実装以上の工数がかかるようになりました。",
      challenge: "パン/ズーム、複数選択、履歴スタックをゼロから短期間で再実装すること。",
      decision: "SVG + 純粋なHTMLと、60段階のUndoを管理するReducer。ライブラリを排除したことでバンドルサイズを40KB削減し、完全な制御を可能にしました。",
      tag: "Canvas",
    },
    {
      phase: "フェーズ 03",
      title: "保存処理 — デバウンス + 同期フラッシュ",
      body: "300msのデバウンスによる自動保存は容易ですが、編集途中にウィンドウを閉じた際に、保留中の保存がキャンセルされることが課題でした。",
      challenge: "レンダラープロセスをブロックせずに、`beforeunload` 時のデータ損失をゼロにすること。",
      decision: "`ref` で保留中のペイロードを保持。`beforeunload` 時に同期IPCの `writeFileSync` でフラッシュを実行。同期パスは緊急時のみ使用します。",
      tag: "データ安全性",
    },
    {
      phase: "フェーズ 04",
      title: "遅延読み込みと状態維持を両立したi18n",
      body: "React Contextでの4言語対応は標準的ですが、状態損失を防ぐためにページリロードなしで瞬時に言語を切り替え、かつ初期バンドルを軽量に保つことが挑戦でした。",
      challenge: "言語パックの遅延読み込み + 必要に応じたリロード前の状態保存（フラッシュ）。",
      decision: "言語ごとのダイナミックインポート。未保存データがある場合は先に `flushSave()` を実行。IPCによる書き込み確認後にリロードを行います。",
      tag: "i18n",
    },
  ],

  conclusion: {
    sectionLabel: "05 / 結論",
    heading: "学習のためのツールを構築して学んだこと。",
    paragraphs: [
      "ライブラリを調整する代わりにCanvasを再発明することは、初期コストは高いものの、完全な制御と不要な複雑さの排除につながりました。時には「自分自身で書くこと」が最適な抽象化になります。",
      "「デバウンス + 同期フラッシュ」のパターンはシンプルですが、問題が起こる前に「異常系パス」を考慮しておくことの重要性を再認識しました。",
    ],
    results: [
      "外部ライブラリなしで60段階のUndo/Redoが可能なCanvas",
      "Obsidianと100%互換性のある .ul.md ファイル",
      "9つの原則を初期化するターミナル風起動画面",
      "サーバーやクラウドへの依存ゼロ",
    ],
    links: {
      repo: "https://github.com/richardsbez/ultralearning",
      live: "",
    },
  },

  nav: ["背景", "プロセス", "スタック", "結論"],
  footer: "集中と好奇心を持って作成",
  processHeading: "制作ステップの記録。",
  stackHeading: "すべての選択には理由がある。",
  backLabel: "← ポートフォリオに戻る",
  repoLabel: "リポジトリを見る",
  liveLabel: "ライブデモ",
  challengeLabel: "⚠ 課題",
  decisionLabel: "✓ 決定",
};

// ─────────────────────────────────────────────────────────────────────────────
// Export — mesmo padrão do DATA do portfólio
// ─────────────────────────────────────────────────────────────────────────────
const CASE_DATA = { PT, EN, ES, DE, FR, ZH, JA }

export default CASE_DATA;
