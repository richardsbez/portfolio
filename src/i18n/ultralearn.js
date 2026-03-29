// ─────────────────────────────────────────────────────────────────────────────
// CaseStudyData.js — Conteúdo da página de Case Study em múltiplos idiomas
// Mesmo padrão do arquivo de traduções do portfólio.
// Para adicionar um novo idioma: copie um bloco, altere o código e exporte.
// ─────────────────────────────────────────────────────────────────────────────

// ── Idiomas disponíveis no seletor ───────────────────────────────────────────
export const CASE_LANGS = [
  { code: "PT", label: "PT", flag: "🇧🇷" },
  { code: "EN", label: "EN", flag: "🇺🇸" },
  { code: "ES", label: "ES", flag: "🇪🇸" },
];

// ─────────────────────────────────────────────────────────────────────────────
// Stack & Ferramentas — sem tradução (nomes técnicos são universais)
// Edite esta lista única para todos os idiomas.
// ─────────────────────────────────────────────────────────────────────────────
export const STACK = [
  { name: "Electron 28", role: { PT: "Shell nativo + IPC + file system", EN: "Native shell + IPC + file system", ES: "Shell nativo + IPC + sistema de archivos" }, icon: "⬡" },
  { name: "React 18", role: { PT: "UI declarativa + hooks", EN: "Declarative UI + hooks", ES: "UI declarativa + hooks" }, icon: "⚛" },
  { name: "TypeScript 5", role: { PT: "Type safety fim-a-fio", EN: "End-to-end type safety", ES: "Tipado estricto de extremo a extremo" }, icon: "TS" },
  { name: "electron-vite", role: { PT: "Bundler + HMR no renderer", EN: "Bundler + HMR in renderer", ES: "Bundler + HMR en el renderer" }, icon: "⚡" },
  { name: "js-yaml", role: { PT: "Serialização YAML front-matter", EN: "YAML front-matter serialization", ES: "Serialización YAML front-matter" }, icon: "◈" },
  { name: "CSS Variables", role: { PT: "Design tokens, zero CSS-in-JS", EN: "Design tokens, zero CSS-in-JS", ES: "Tokens de diseño, cero CSS-in-JS" }, icon: "◻" },
  { name: "Web Workers", role: { PT: "Serialização off-thread", EN: "Off-thread serialization", ES: "Serialización fuera del hilo principal" }, icon: "⟳" },
  { name: "SVG + HTML", role: { PT: "Canvas do roadmap personalizado", EN: "Custom roadmap canvas", ES: "Canvas de roadmap personalizado" }, icon: "△" },
];

// ─────────────────────────────────────────────────────────────────────────────
// PT — Português
// ─────────────────────────────────────────────────────────────────────────────
const PT = {
  hero: {
    label: "// estudo_de_caso — 2025",
    title: "UltraLearn",
    subtitle: "Um tracker de estudos desktop construído em torno dos 9 princípios do método Ultralearning de Scott Young.",
    tags: ["Electron", "React", "TypeScript", "Canvas Customizado"],
  },

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
      repo: "https://github.com/richardsbez/ultralearn",
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
    label: "// case_study — 2025",
    title: "UltraLearn",
    subtitle: "A desktop study tracker built around the 9 principles of Scott Young's Ultralearning method.",
    tags: ["Electron", "React", "TypeScript", "Custom Canvas"],
  },

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
      repo: "https://github.com/richardsbez/ultralearn",
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
    label: "// caso_de_estudio — 2025",
    title: "UltraLearn",
    subtitle: "Un tracker de estudios desktop construido en torno a los 9 principios del método Ultralearning de Scott Young.",
    tags: ["Electron", "React", "TypeScript", "Canvas Personalizado"],
  },

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
      repo: "https://github.com/richardsbez/ultralearn",
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
// Export — mesmo padrão do DATA do portfólio
// ─────────────────────────────────────────────────────────────────────────────
const CASE_DATA = { PT, EN, ES };

export default CASE_DATA;
