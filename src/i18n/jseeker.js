// ─────────────────────────────────────────────────────────────────────────────
// jseeker.js — i18n data for J-Seeker Case Study
// ─────────────────────────────────────────────────────────────────────────────

export const CASE_LANGS = [
  { code: 'PT', flag: '🇧🇷' },
  { code: 'EN', flag: '🇺🇸' },
  { code: 'ES', flag: '🇪🇸' },
  { code: 'DE', flag: '🇩🇪' },
  { code: 'FR', flag: '🇫🇷' },
  { code: 'ZH', flag: '🇨🇳' },
  { code: 'JA', flag: '🇯🇵' },
]

export const MARQUEE_ITEMS = [
  { label: 'JAVA 21', hot: false },
  { label: 'VIRTUAL THREADS', hot: true },
  { label: 'NIO', hot: false },
  { label: 'INVERTED INDEX', hot: true },
  { label: 'FORK/JOIN', hot: false },
  { label: 'TRIES', hot: false },
  { label: 'TF-IDF', hot: true },
  { label: 'ZERO DEPS', hot: false },
  { label: 'SUB-10MS', hot: true },
  { label: 'FULL-TEXT SEARCH', hot: false },
  { label: '80K DOCS/S', hot: true },
  { label: 'ZERO FRAMEWORKS', hot: false },
]

export const STACK = [
  {
    num: '01',
    name: 'Java 21',
    icon: '☕',
    role: {
      PT: 'Linguagem principal — LTS com Virtual Threads e records',
      EN: 'Main language — LTS with Virtual Threads and records',
      ES: 'Lenguaje principal — LTS con Virtual Threads y records',
    },
    tag: 'LANG',
  },
  {
    num: '02',
    name: 'Virtual Threads',
    icon: '🧵',
    role: {
      PT: 'Concorrência — milhares de threads sem overhead de OS threads',
      EN: 'Concurrency — thousands of threads without OS thread overhead',
      ES: 'Concurrencia — miles de hilos sin overhead de OS threads',
    },
    tag: 'CONCURRENCY',
  },
  {
    num: '03',
    name: 'java.nio',
    icon: '⚡',
    role: {
      PT: 'I/O não-bloqueante — leitura direta de buffers sem bloqueio',
      EN: 'Non-blocking I/O — direct buffer reads without blocking',
      ES: 'I/O no bloqueante — lectura directa de buffers sin bloqueo',
    },
    tag: 'I/O',
  },
  {
    num: '04',
    name: 'Fork/Join Framework',
    icon: '🔀',
    role: {
      PT: 'Paralelismo — indexação dividida em subtarefas com work-stealing',
      EN: 'Parallelism — indexing split into subtasks with work-stealing',
      ES: 'Paralelismo — indexación dividida en subtareas con work-stealing',
    },
    tag: 'PARALLEL',
  },
  {
    num: '05',
    name: 'Inverted Index',
    icon: '🗂',
    role: {
      PT: 'Estrutura central — mapa token→documentos para busca O(1)',
      EN: 'Core structure — token→documents map for O(1) lookup',
      ES: 'Estructura central — mapa token→documentos para búsqueda O(1)',
    },
    tag: 'DATA',
  },
  {
    num: '06',
    name: 'Trie',
    icon: '🌲',
    role: {
      PT: 'Dicionário comprimido — prefixos compartilhados, 60% menos memória',
      EN: 'Compressed dictionary — shared prefixes, 60% less memory',
      ES: 'Diccionario comprimido — prefijos compartidos, 60% menos memoria',
    },
    tag: 'DATA',
  },
  {
    num: '07',
    name: 'TF-IDF',
    icon: '📊',
    role: {
      PT: 'Relevância — ranking estatístico sem modelo externo nem GPU',
      EN: 'Relevance — statistical ranking without external model or GPU',
      ES: 'Relevancia — ranking estadístico sin modelo externo ni GPU',
    },
    tag: 'ALGO',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// PT
// ─────────────────────────────────────────────────────────────────────────────
const PT = {
  nav: ['motivação', 'arquitetura', 'processo', 'stack', 'conclusão'],
  backLink: '← portfólio',
  navHome: 'Voltar',

  hero: {
    label: 'Freelancer · JAVA 21 · CLI ',
    title: ['J-SEE', 'KER'],
    kicker: 'Motor de busca full-text de alta performance.\nZero dependências. Zero I/O bloqueante.',
    stats: [
      { value: '80k', label: 'docs/s' },
      { value: '<10ms', label: 'latência p99' },
      { value: '~1GB/s', label: 'throughput' },
      { value: '0', label: 'deps. externas' },
    ],
    terminal: {
      prompt: '❯ j-seeker search "virtual threads concorrência"',
      lines: [
        { type: 'dim', text: 'carregando índice... ~/.jseeker/index.bin' },
        { type: 'progress', text: 'indexando 80.421 docs/s ░░░░░░░░░░░ 100%' },
        { type: 'green', text: '47 resultados · 7ms · TF-IDF' },
      ],
      results: [
        { score: '0.94', path: './docs/concurrency-model.md' },
        { score: '0.87', path: './src/executor/VirtualPool.java' },
        { score: '0.81', path: './notes/jep-444-analysis.md' },
        { score: '0.76', path: './bench/thread-overhead.txt' },
      ],
      footer: '128ms cold start  ·  heap 40MB  ·  0 dependências',
    },
  },

  context: {
    index: '01',
    label: 'MOTIVAÇÃO',
    heading: 'O limite que\nvalia a pena\ntestar.',
    body: [
      'Repositórios grandes. Dezenas de milhares de arquivos. As ferramentas existentes ou são lentas demais — grep recursivo — ou exigem setup pesado como uma instância Elasticsearch local.',
      'A pergunta era direta: quanto se consegue extrair do Java moderno — Virtual Threads (JEP 444) e NIO — sem tocar nenhuma dependência externa?',
    ],
    quote: 'Estruturas de dados corretas valem mais que hardware melhor.',
    metrics: [
      { value: '80k', label: 'docs por segundo' },
      { value: '<10ms', label: 'latência p99' },
      { value: '0', label: 'dependências' },
      { value: '1GB/s', label: 'throughput médio' },
    ],
  },

  arch: {
    index: '02',
    label: 'ARQUITETURA',
    heading: 'Pipeline de\nbusca.',
    pipeline: [
      { label: 'Query', sub: 'entrada' },
      { label: 'Tokenizer', sub: 'normalização' },
      { label: 'Trie Lookup', sub: 'O(k)' },
      { label: 'TF-IDF', sub: 'scoring' },
      { label: 'Top-K Heap', sub: 'ranking' },
      { label: 'Results', sub: 'saída' },
    ],
    cols: [
      {
        title: 'Índice em memória',
        body: 'O índice é construído uma vez e serializado em binário compacto. Na busca, zero acesso a disco. Tudo em heap. A Trie com 500k palavras ocupa menos de 40MB — contra ~200MB de um HashMap naïve.',
      },
      {
        title: 'TF-IDF sem GPU',
        body: 'Dois floats por entrada no posting list — term frequency e IDF pré-computado. O bug que virou feature: heap binário de top-K é dramaticamente mais rápido que ordenar a lista completa.',
      },
    ],
  },

  process: {
    index: '03',
    label: 'PROCESSO',
    heading: 'Cada decisão\ntécnica,\njustificada.',
    cards: [
      {
        num: 'I',
        tag: 'CONCORRÊNCIA',
        title: 'Virtual Threads sem overhead de OS threads.',
        body: 'Indexar um diretório massivo significa abrir dezenas de milhares de arquivos. Com OS threads clássicas, o custo de context switch colapsa o throughput. Virtual Threads (JEP 444) eliminam isso.',
        challenge: 'Coordenar writes concorrentes no índice sem criar contenção no lock principal.',
        decision: 'Cada Virtual Thread acumula um índice parcial. O merge acontece uma única vez ao final — leitura lock-free, write O(chunks).',
        challengeLabel: 'DESAFIO',
        decisionLabel: 'DECISÃO',
      },
      {
        num: 'II',
        tag: 'DADOS',
        title: 'Trie + Inverted Index — memória é o gargalo.',
        body: 'Um HashMap<String, List<DocId>> naïve funciona até o dicionário explodir em heap. Trie comprimida reduz o espaço em até 60%. Sem boxing — primitivos empacotados via long encoding.',
        challenge: 'Evitar autoboxing nos hot paths — GC pause destrói a latência p99.',
        decision: 'docId 32-bit + tf 32-bit = um long. Zero objetos no caminho crítico de busca.',
        challengeLabel: 'DESAFIO',
        decisionLabel: 'DECISÃO',
      },
      {
        num: 'III',
        tag: 'PARALELISMO',
        title: 'Fork/Join — dividir para conquistar o file system.',
        body: 'O trabalho de indexação é naturalmente divisível. Fork/Join com work-stealing garante que threads ociosas roubem trabalho de filas cheias — sem scheduler manual.',
        challenge: 'Calibrar o threshold de split para evitar granularidade excessiva ou insuficiente.',
        decision: 'Threshold dinâmico via availableProcessors(). Abaixo de 64 arquivos, execução sequencial no próprio thread.',
        challengeLabel: 'DESAFIO',
        decisionLabel: 'DECISÃO',
      },
      {
        num: 'IV',
        tag: 'I/O',
        title: 'java.nio — leitura direta, zero cópia extra.',
        body: 'FileInputStream copia kernel→user space a cada leitura. FileChannel + ByteBuffer lê direto no buffer. Com 80k arquivos/s, isso acumula dezenas de ms de throughput.',
        challenge: 'Gerenciar ciclo de vida dos ByteBuffers sem vazar memória nativa (off-heap não é coletado pelo GC).',
        decision: 'Pool de ByteBuffers por thread via ThreadLocal. Cada Virtual Thread reutiliza o mesmo buffer com buffer.clear() — zero allocations no hot loop.',
        challengeLabel: 'DESAFIO',
        decisionLabel: 'DECISÃO',
      },
    ],
  },

  stack: {
    index: '04',
    label: 'STACK',
    heading: 'Cada estrutura\ntem uma razão.',
    sub: '7 componentes · zero frameworks · zero compromissos',
  },

  conclusion: {
    index: '05',
    label: 'CONCLUSÃO',
    heading: 'O que aprendi\nconstruindo do\nzero.',
    body: [
      'J-Seeker prova que o Java moderno pode entregar performance que antes exigia C++ ou Rust. O custo é conhecimento profundo das abstrações certas e disciplina para não acumular alocações no caminho crítico.',
      'O gargalo nunca estava onde eu esperava. Não foi I/O. Não foi CPU. Foi autoboxing silencioso no posting list. Profiling antes de otimizar não é conselho — é protocolo.',
    ],
    results: [
      'Indexação de ~1GB/s em file system ext4 real',
      'Latência p99 <10ms em corpora de 80k documentos',
      'Heap footprint ~40MB para 500k tokens únicos',
      'Zero dependências — build javac, run java',
      'Concorrência estruturada sem data races',
    ],
    repoLabel: 'Ver repositório ↗',
    backLabel: '← Voltar ao portfólio',
  },

  footer: '// J-Seeker · Java 21 · zero dependências · MIT © ',
}

// ─────────────────────────────────────────────────────────────────────────────
// EN
// ─────────────────────────────────────────────────────────────────────────────
const EN = {
  nav: ['motivation', 'architecture', 'process', 'stack', 'conclusion'],
  backLink: '← portfolio',
  navHome: 'Back',

  hero: {
    label: 'Freelancer · JAVA 21 · CLI ',
    title: ['J-SEE', 'KER'],
    kicker: 'High-performance full-text search engine.\nZero dependencies. Zero blocking I/O.',
    stats: [
      { value: '80k', label: 'docs/s' },
      { value: '<10ms', label: 'p99 latency' },
      { value: '~1GB/s', label: 'throughput' },
      { value: '0', label: 'ext. deps' },
    ],
    terminal: {
      prompt: '❯ j-seeker search "virtual threads concurrency"',
      lines: [
        { type: 'dim', text: 'loading index... ~/.jseeker/index.bin' },
        { type: 'progress', text: 'indexing 80,421 docs/s ░░░░░░░░░░░ 100%' },
        { type: 'green', text: '47 results · 7ms · TF-IDF' },
      ],
      results: [
        { score: '0.94', path: './docs/concurrency-model.md' },
        { score: '0.87', path: './src/executor/VirtualPool.java' },
        { score: '0.81', path: './notes/jep-444-analysis.md' },
        { score: '0.76', path: './bench/thread-overhead.txt' },
      ],
      footer: '128ms cold start  ·  heap 40MB  ·  0 dependencies',
    },
  },

  context: {
    index: '01',
    label: 'MOTIVATION',
    heading: 'The limit that\nwas worth\ntesting.',
    body: [
      'Large repositories. Tens of thousands of files. Existing tools are either too slow — recursive grep — or require heavy setup like a local Elasticsearch instance.',
      'The question was direct: how much can you extract from modern Java — Virtual Threads (JEP 444) and NIO — without touching any external dependency?',
    ],
    quote: 'The right data structures outperform better hardware.',
    metrics: [
      { value: '80k', label: 'docs per second' },
      { value: '<10ms', label: 'p99 latency' },
      { value: '0', label: 'dependencies' },
      { value: '1GB/s', label: 'avg throughput' },
    ],
  },

  arch: {
    index: '02',
    label: 'ARCHITECTURE',
    heading: 'Search\npipeline.',
    pipeline: [
      { label: 'Query', sub: 'input' },
      { label: 'Tokenizer', sub: 'normalize' },
      { label: 'Trie Lookup', sub: 'O(k)' },
      { label: 'TF-IDF', sub: 'scoring' },
      { label: 'Top-K Heap', sub: 'ranking' },
      { label: 'Results', sub: 'output' },
    ],
    cols: [
      {
        title: 'In-memory index',
        body: 'The index is built once and serialized to compact binary. At search time, zero disk access. Everything in heap. A Trie with 500k words uses less than 40MB — vs ~200MB for a naïve HashMap.',
      },
      {
        title: 'TF-IDF without GPU',
        body: 'Two floats per posting list entry — term frequency and pre-computed IDF. The bug that became a feature: a binary top-K heap is dramatically faster than sorting the full list.',
      },
    ],
  },

  process: {
    index: '03',
    label: 'PROCESS',
    heading: 'Every technical\ndecision,\njustified.',
    cards: [
      {
        num: 'I',
        tag: 'CONCURRENCY',
        title: 'Virtual Threads without OS thread overhead.',
        body: 'Indexing a massive directory means opening tens of thousands of files. With classic OS threads, context-switch cost collapses throughput. Virtual Threads (JEP 444) eliminate this.',
        challenge: 'Coordinating concurrent writes to the shared index without contention on the main lock.',
        decision: 'Each Virtual Thread accumulates a partial index. Merge happens once at the end — lock-free reads, O(chunks) writes.',
        challengeLabel: 'CHALLENGE',
        decisionLabel: 'DECISION',
      },
      {
        num: 'II',
        tag: 'DATA',
        title: 'Trie + Inverted Index — memory is the bottleneck.',
        body: 'A naïve HashMap<String, List<DocId>> works until the dictionary explodes in heap. A compressed Trie reduces space by up to 60%. No boxing — primitives packed via long encoding.',
        challenge: 'Avoid autoboxing in hot paths — GC pauses destroy p99 latency.',
        decision: 'docId 32-bit + tf 32-bit = one long. Zero objects on the critical search path.',
        challengeLabel: 'CHALLENGE',
        decisionLabel: 'DECISION',
      },
      {
        num: 'III',
        tag: 'PARALLELISM',
        title: 'Fork/Join — divide and conquer the file system.',
        body: 'Indexing work is naturally divisible. Fork/Join with work-stealing ensures idle threads steal from full queues — no manual scheduler.',
        challenge: 'Calibrate the split threshold to avoid excessive or insufficient granularity.',
        decision: 'Dynamic threshold via availableProcessors(). Below 64 files, sequential execution on its own thread.',
        challengeLabel: 'CHALLENGE',
        decisionLabel: 'DECISION',
      },
      {
        num: 'IV',
        tag: 'I/O',
        title: 'java.nio — direct buffer reads, zero extra copy.',
        body: 'FileInputStream copies kernel→user space on every read. FileChannel + ByteBuffer reads directly into the buffer. At 80k files/s, this accumulates dozens of ms of throughput.',
        challenge: 'Manage ByteBuffer lifecycle without leaking native memory (off-heap is not GC-collected).',
        decision: 'Per-thread ByteBuffer pool via ThreadLocal. Each Virtual Thread reuses the same buffer with buffer.clear() — zero allocations in the hot loop.',
        challengeLabel: 'CHALLENGE',
        decisionLabel: 'DECISION',
      },
    ],
  },

  stack: {
    index: '04',
    label: 'STACK',
    heading: 'Every structure\nhas a reason.',
    sub: '7 components · zero frameworks · zero compromises',
  },

  conclusion: {
    index: '05',
    label: 'CONCLUSION',
    heading: 'What I learned\nbuilding from\nscratch.',
    body: [
      'J-Seeker proves modern Java can deliver performance that previously required C++ or Rust. The cost is deep knowledge of the right abstractions and discipline to avoid allocations on the critical path.',
      'The bottleneck was never where I expected. Not I/O. Not CPU. Silent autoboxing in the posting list. Profiling before optimizing is not advice — it\'s protocol.',
    ],
    results: [
      'Indexing at ~1GB/s on a real ext4 file system',
      'p99 latency <10ms on corpora of 80k documents',
      'Heap footprint ~40MB for 500k unique tokens',
      'Zero dependencies — build javac, run java',
      'Structured concurrency without data races',
    ],
    repoLabel: 'View repository ↗',
    backLabel: '← Back to portfolio',
  },

  footer: '// J-Seeker · Java 21 · zero dependencies · MIT © ',
}

// ─────────────────────────────────────────────────────────────────────────────
// ES
// ─────────────────────────────────────────────────────────────────────────────
const ES = {
  nav: ['motivación', 'arquitectura', 'proceso', 'stack', 'conclusión'],
  backLink: '← portafolio',
  navHome: 'Volver',


  hero: {
    label: 'Freelancer · JAVA 21 · CLI ',
    title: ['J-SEE', 'KER'],
    kicker: 'Motor de búsqueda full-text de alto rendimiento.\nCero dependencias. Cero I/O bloqueante.',
    stats: [
      { value: '80k', label: 'docs/s' },
      { value: '<10ms', label: 'latencia p99' },
      { value: '~1GB/s', label: 'throughput' },
      { value: '0', label: 'deps. externas' },
    ],
    terminal: {
      prompt: '❯ j-seeker search "virtual threads concurrencia"',
      lines: [
        { type: 'dim', text: 'cargando índice... ~/.jseeker/index.bin' },
        { type: 'progress', text: 'indexando 80.421 docs/s ░░░░░░░░░░░ 100%' },
        { type: 'green', text: '47 resultados · 7ms · TF-IDF' },
      ],
      results: [
        { score: '0.94', path: './docs/concurrency-model.md' },
        { score: '0.87', path: './src/executor/VirtualPool.java' },
        { score: '0.81', path: './notes/jep-444-analysis.md' },
        { score: '0.76', path: './bench/thread-overhead.txt' },
      ],
      footer: '128ms cold start  ·  heap 40MB  ·  0 dependencias',
    },
  },

  context: {
    index: '01',
    label: 'MOTIVACIÓN',
    heading: 'El límite que\nvalía la pena\nprobar.',
    body: [
      'Repositorios grandes. Decenas de miles de archivos. Las herramientas existentes son demasiado lentas — grep recursivo — o requieren setup pesado como una instancia local de Elasticsearch.',
      'La pregunta era directa: ¿cuánto se puede extraer del Java moderno — Virtual Threads (JEP 444) y NIO — sin tocar ninguna dependencia externa?',
    ],
    quote: 'Las estructuras de datos correctas valen más que mejor hardware.',
    metrics: [
      { value: '80k', label: 'docs por segundo' },
      { value: '<10ms', label: 'latencia p99' },
      { value: '0', label: 'dependencias' },
      { value: '1GB/s', label: 'throughput promedio' },
    ],
  },

  arch: {
    index: '02',
    label: 'ARQUITECTURA',
    heading: 'Pipeline de\nbúsqueda.',
    pipeline: [
      { label: 'Query', sub: 'entrada' },
      { label: 'Tokenizer', sub: 'normalizar' },
      { label: 'Trie Lookup', sub: 'O(k)' },
      { label: 'TF-IDF', sub: 'scoring' },
      { label: 'Top-K Heap', sub: 'ranking' },
      { label: 'Results', sub: 'salida' },
    ],
    cols: [
      {
        title: 'Índice en memoria',
        body: 'El índice se construye una vez y se serializa en binario compacto. En la búsqueda, cero acceso a disco. Todo en heap. Un Trie con 500k palabras usa menos de 40MB — vs ~200MB para un HashMap naïve.',
      },
      {
        title: 'TF-IDF sin GPU',
        body: 'Dos floats por entrada en la posting list — term frequency e IDF pre-computado. El bug que se convirtió en feature: un heap binario de top-K es dramáticamente más rápido que ordenar la lista completa.',
      },
    ],
  },

  process: {
    index: '03',
    label: 'PROCESO',
    heading: 'Cada decisión\ntécnica,\njustificada.',
    cards: [
      {
        num: 'I',
        tag: 'CONCURRENCIA',
        title: 'Virtual Threads sin overhead de OS threads.',
        body: 'Indexar un directorio masivo significa abrir decenas de miles de archivos. Con OS threads clásicos, el costo de context-switch colapsa el throughput. Los Virtual Threads (JEP 444) eliminan esto.',
        challenge: 'Coordinar writes concurrentes en el índice sin contención en el lock principal.',
        decision: 'Cada Virtual Thread acumula un índice parcial. El merge ocurre una vez al final — lecturas lock-free, writes O(chunks).',
        challengeLabel: 'DESAFÍO',
        decisionLabel: 'DECISIÓN',
      },
      {
        num: 'II',
        tag: 'DATOS',
        title: 'Trie + Inverted Index — la memoria es el cuello de botella.',
        body: 'Un HashMap<String, List<DocId>> naïve funciona hasta que el diccionario explota en heap. Un Trie comprimido reduce el espacio hasta un 60%. Sin boxing — primitivos empaquetados via long encoding.',
        challenge: 'Evitar autoboxing en los hot paths — las pausas del GC destruyen la latencia p99.',
        decision: 'docId 32-bit + tf 32-bit = un long. Cero objetos en el camino crítico de búsqueda.',
        challengeLabel: 'DESAFÍO',
        decisionLabel: 'DECISIÓN',
      },
      {
        num: 'III',
        tag: 'PARALELISMO',
        title: 'Fork/Join — divide y conquista el file system.',
        body: 'El trabajo de indexación es naturalmente divisible. Fork/Join con work-stealing garantiza que los threads ociosos roben de colas llenas — sin scheduler manual.',
        challenge: 'Calibrar el threshold de split para evitar granularidad excesiva o insuficiente.',
        decision: 'Threshold dinámico via availableProcessors(). Por debajo de 64 archivos, ejecución secuencial en su propio thread.',
        challengeLabel: 'DESAFÍO',
        decisionLabel: 'DECISIÓN',
      },
      {
        num: 'IV',
        tag: 'I/O',
        title: 'java.nio — lectura directa de buffer, cero copia extra.',
        body: 'FileInputStream copia kernel→user space en cada lectura. FileChannel + ByteBuffer lee directamente en el buffer. A 80k archivos/s, esto acumula decenas de ms de throughput.',
        challenge: 'Gestionar el ciclo de vida de ByteBuffers sin filtrar memoria nativa (el off-heap no lo recolecta el GC).',
        decision: 'Pool de ByteBuffers por thread via ThreadLocal. Cada Virtual Thread reutiliza el mismo buffer con buffer.clear() — cero allocations en el hot loop.',
        challengeLabel: 'DESAFÍO',
        decisionLabel: 'DECISIÓN',
      },
    ],
  },

  stack: {
    index: '04',
    label: 'STACK',
    heading: 'Cada estructura\ntiene una razón.',
    sub: '7 componentes · cero frameworks · cero compromisos',
  },

  conclusion: {
    index: '05',
    label: 'CONCLUSIÓN',
    heading: 'Lo que aprendí\nconstruyendo\ndesde cero.',
    body: [
      'J-Seeker demuestra que el Java moderno puede entregar rendimiento que antes requería C++ o Rust. El costo es conocimiento profundo de las abstracciones correctas y disciplina para no acumular allocations en el camino crítico.',
      'El cuello de botella nunca estaba donde lo esperaba. No fue I/O. No fue CPU. Fue el autoboxing silencioso en la posting list. Perfilar antes de optimizar no es un consejo — es protocolo.',
    ],
    results: [
      'Indexación de ~1GB/s en file system ext4 real',
      'Latencia p99 <10ms en corpus de 80k documentos',
      'Heap footprint ~40MB para 500k tokens únicos',
      'Cero dependencias — build javac, run java',
      'Concurrencia estructurada sin data races',
    ],
    repoLabel: 'Ver repositorio ↗',
    backLabel: '← Volver al portafolio',
  },

  footer: '// J-Seeker · Java 21 · cero dependencias · MIT © ',
}

// ─────────────────────────────────────────────────────────────────────────────
// DE
// ─────────────────────────────────────────────────────────────────────────────
const DE = {
  nav: ['Motivation', 'Architektur', 'Prozess', 'Stack', 'Fazit'],
  backLink: '← Portfolio',
  navHome: 'Zurück',

  hero: {
    label: 'Freelancer · JAVA 21 · CLI ',
    title: ['J-SEE', 'KER'],
    kicker: 'Hochleistungs-Volltext-Suchmaschine.\nNull Abhängigkeiten. Null blockierendes I/O.',
    stats: [
      { value: '80k', label: 'docs/s' },
      { value: '<10ms', label: 'p99 Latenz' },
      { value: '~1GB/s', label: 'Durchsatz' },
      { value: '0', label: 'ext. Abhängigk.' },
    ],
    terminal: {
      prompt: '❯ j-seeker search "virtual threads concurrency"',
      lines: [
        { type: 'dim', text: 'Index wird geladen... ~/.jseeker/index.bin' },
        { type: 'progress', text: 'Indizierung 80.421 docs/s ░░░░░░░░░░░ 100%' },
        { type: 'green', text: '47 Ergebnisse · 7ms · TF-IDF' },
      ],
      results: [
        { score: '0.94', path: './docs/concurrency-model.md' },
        { score: '0.87', path: './src/executor/VirtualPool.java' },
        { score: '0.81', path: './notes/jep-444-analysis.md' },
        { score: '0.76', path: './bench/thread-overhead.txt' },
      ],
      footer: '128ms Kaltstart · Heap 40MB · 0 Abhängigkeiten',
    },
  },

  context: {
    index: '01',
    label: 'MOTIVATION',
    heading: 'Die Grenze, die\nes wert war,\nzu testen.',
    body: [
      'Große Repositories. Zehntausende Dateien. Bestehende Tools sind entweder zu langsam — wie rekursives grep — oder erfordern ein schwerfälliges Setup wie eine lokale Elasticsearch-Instanz.',
      'Die Frage war direkt: Wie viel lässt sich aus modernem Java — Virtual Threads (JEP 444) und NIO — herausholen, ohne eine einzige externe Abhängigkeit zu berühren?',
    ],
    quote: 'Die richtigen Datenstrukturen sind mehr wert als bessere Hardware.',
    metrics: [
      { value: '80k', label: 'Dokumente pro Sekunde' },
      { value: '<10ms', label: 'p99 Latenz' },
      { value: '0', label: 'Abhängigkeiten' },
      { value: '1GB/s', label: 'Durchschn. Durchsatz' },
    ],
  },

  arch: {
    index: '02',
    label: 'ARCHITEKTUR',
    heading: 'Such-\nPipeline.',
    pipeline: [
      { label: 'Query', sub: 'Input' },
      { label: 'Tokenizer', sub: 'Normalisierung' },
      { label: 'Trie Lookup', sub: 'O(k)' },
      { label: 'TF-IDF', sub: 'Scoring' },
      { label: 'Top-K Heap', sub: 'Ranking' },
      { label: 'Results', sub: 'Output' },
    ],
    cols: [
      {
        title: 'In-Memory Index',
        body: 'Der Index wird einmal aufgebaut und als kompakte Binärdatei serialisiert. Bei der Suche gibt es keinen Festplattenzugriff. Alles im Heap. Die Trie mit 500k Wörtern belegt weniger als 40MB — im Vergleich zu ~200MB bei einer naiven HashMap.',
      },
      {
        title: 'TF-IDF ohne GPU',
        body: 'Zwei Floats pro Eintrag in der Posting-Liste — Termfrequenz und vorausberechnetes IDF. Der Bug, der zum Feature wurde: Ein binärer Top-K-Heap ist dramatisch schneller als das Sortieren der vollständigen Liste.',
      },
    ],
  },

  process: {
    index: '03',
    label: 'PROZESS',
    heading: 'Jede technische\nEntscheidung,\ngerechtfertigt.',
    cards: [
      {
        num: 'I',
        tag: 'CONCURRENCY',
        title: 'Virtual Threads ohne OS-Thread-Overhead.',
        body: 'Die Indizierung eines massiven Verzeichnisses bedeutet das Öffnen von zehntausenden Dateien. Bei klassischen OS-Threads bricht der Durchsatz durch die Kosten des Context-Switchings ein. Virtual Threads (JEP 444) eliminieren dies.',
        challenge: 'Koordinierung paralleler Schreibvorgänge im Index ohne Contentions im Haupt-Lock.',
        decision: 'Jeder Virtual Thread sammelt einen Teilindex. Der Merge erfolgt einmal am Ende — lock-free beim Lesen, O(chunks) beim Schreiben.',
        challengeLabel: 'HERAUSFORDERUNG',
        decisionLabel: 'ENTSCHEIDUNG',
      },
      {
        num: 'II',
        tag: 'DATEN',
        title: 'Trie + Inverted Index — Speicher ist der Flaschenhals.',
        body: 'Eine naive HashMap<String, List<DocId>> funktioniert, bis das Wörterbuch im Heap explodiert. Eine komprimierte Trie reduziert den Platzbedarf um bis zu 60%. Kein Boxing — Primitive werden via Long-Encoding verpackt.',
        challenge: 'Vermeidung von Autoboxing in Hot-Paths — GC-Pausen zerstören die p99-Latenz.',
        decision: 'docId 32-bit + tf 32-bit = ein Long. Null Objekte im kritischen Suchpfad.',
        challengeLabel: 'HERAUSFORDERUNG',
        decisionLabel: 'ENTSCHEIDUNG',
      },
      {
        num: 'III',
        tag: 'PARALLELISMUS',
        title: 'Fork/Join — Divide & Conquer für das Dateisystem.',
        body: 'Die Indizierungsarbeit ist natürlich teilbar. Fork/Join mit Work-Stealing garantiert, dass im Leerlauf befindliche Threads Arbeit aus vollen Warteschlangen stehlen — ohne manuellen Scheduler.',
        challenge: 'Kalibrierung des Split-Thresholds, um zu feine oder zu grobe Granularität zu vermeiden.',
        decision: 'Dynamischer Schwellenwert via availableProcessors(). Unter 64 Dateien erfolgt die sequentielle Ausführung im selben Thread.',
        challengeLabel: 'HERAUSFORDERUNG',
        decisionLabel: 'ENTSCHEIDUNG',
      },
      {
        num: 'IV',
        tag: 'I/O',
        title: 'java.nio — Direktes Lesen, null extra Kopien.',
        body: 'FileInputStream kopiert bei jedem Lesevorgang von Kernel- zu User-Space. FileChannel + ByteBuffer liest direkt in den Buffer. Bei 80k Dateien/s summiert sich das auf zig Millisekunden Durchsatz.',
        challenge: 'Verwaltung des Lebenszyklus von ByteBuffern ohne Speicherlecks im nativen Speicher (Off-Heap wird nicht vom GC erfasst).',
        decision: 'ByteBuffer-Pool pro Thread via ThreadLocal. Jedes Virtual Thread nutzt denselben Buffer mit buffer.clear() — null Allokationen im Hot-Loop.',
        challengeLabel: 'HERAUSFORDERUNG',
        decisionLabel: 'ENTSCHEIDUNG',
      },
    ],
  },

  stack: {
    index: '04',
    label: 'STACK',
    heading: 'Jede Struktur\nhat einen Grund.',
    sub: '7 Komponenten · null Frameworks · null Kompromisse',
  },

  conclusion: {
    index: '05',
    label: 'FAZIT',
    heading: 'Was ich beim\nBau von Grund\nauf lernte.',
    body: [
      'J-Seeker beweist, dass modernes Java eine Performance liefern kann, die früher C++ oder Rust erforderte. Der Preis ist tiefes Wissen über die richtigen Abstraktionen und Disziplin, um Allokationen im kritischen Pfad zu vermeiden.',
      'Der Flaschenhals lag nie dort, wo ich ihn erwartete. Es war nicht das I/O. Es war nicht die CPU. Es war stilles Autoboxing in der Posting-Liste. Profiling vor der Optimierung ist kein Rat — es ist ein Protokoll.',
    ],
    results: [
      'Indizierung von ~1GB/s auf echtem ext4 Dateisystem',
      'p99 Latenz <10ms in Korpora von 80k Dokumenten',
      'Heap-Fußabdruck ~40MB für 500k eindeutige Tokens',
      'Null Abhängigkeiten — build javac, run java',
      'Strukturierte Nebenläufigkeit ohne Data Races',
    ],
    repoLabel: 'Repository ansehen ↗',
    backLabel: '← Zurück zum Portfolio',
  },

  footer: '// J-Seeker · Java 21 · null Abhängigkeiten · MIT © ',
}

// ─────────────────────────────────────────────────────────────────────────────
// FR
// ─────────────────────────────────────────────────────────────────────────────
const FR = {
  nav: ['motivation', 'architecture', 'processus', 'stack', 'conclusion'],
  backLink: '← portfolio',
  navHome: 'Retour',

  hero: {
    label: 'Freelancer · JAVA 21 · CLI ',
    title: ['J-SEE', 'KER'],
    kicker: 'Moteur de recherche full-text haute performance.\nZéro dépendance. Zéro E/S bloquante.',
    stats: [
      { value: '80k', label: 'docs/s' },
      { value: '<10ms', label: 'latence p99' },
      { value: '~1Go/s', label: 'débit' },
      { value: '0', label: 'déps. externes' },
    ],
    terminal: {
      prompt: '❯ j-seeker search "virtual threads concurrence"',
      lines: [
        { type: 'dim', text: 'chargement de l\'index... ~/.jseeker/index.bin' },
        { type: 'progress', text: 'indexation 80 421 docs/s ░░░░░░░░░░░ 100%' },
        { type: 'green', text: '47 résultats · 7ms · TF-IDF' },
      ],
      results: [
        { score: '0.94', path: './docs/concurrency-model.md' },
        { score: '0.87', path: './src/executor/VirtualPool.java' },
        { score: '0.81', path: './notes/jep-444-analysis.md' },
        { score: '0.76', path: './bench/thread-overhead.txt' },
      ],
      footer: '128ms cold start · heap 40Mo · 0 dépendances',
    },
  },

  context: {
    index: '01',
    label: 'MOTIVATION',
    heading: 'La limite qui\nvallait la peine\nd\'être testée.',
    body: [
      'Grands dépôts. Des dizaines de milliers de fichiers. Les outils existants sont soit trop lents — comme un grep récursif — soit exigent une configuration lourde comme une instance Elasticsearch locale.',
      'La question était directe : combien peut-on extraire du Java moderne — Virtual Threads (JEP 444) et NIO — sans toucher aucune dépendance externe ?',
    ],
    quote: 'De bonnes structures de données valent mieux qu\'un meilleur matériel.',
    metrics: [
      { value: '80k', label: 'docs par seconde' },
      { value: '<10ms', label: 'latence p99' },
      { value: '0', label: 'dépendances' },
      { value: '1Go/s', label: 'débit moyen' },
    ],
  },

  arch: {
    index: '02',
    label: 'ARCHITECTURE',
    heading: 'Pipeline de\nrecherche.',
    pipeline: [
      { label: 'Query', sub: 'entrée' },
      { label: 'Tokenizer', sub: 'normalisation' },
      { label: 'Trie Lookup', sub: 'O(k)' },
      { label: 'TF-IDF', sub: 'scoring' },
      { label: 'Top-K Heap', sub: 'ranking' },
      { label: 'Results', sub: 'sortie' },
    ],
    cols: [
      {
        title: 'Index en mémoire',
        body: 'L\'index est construit une seule fois et sérialisé en binaire compact. Lors de la recherche, zéro accès disque. Tout est en heap. Le Trie avec 500k mots occupe moins de 40Mo — contre ~200Mo pour une HashMap naïve.',
      },
      {
        title: 'TF-IDF sans GPU',
        body: 'Deux floats par entrée dans la posting list — fréquence du terme et IDF pré-calculé. Le bug devenu feature : le heap binaire top-K est radicalement plus rapide que le tri de la liste complète.',
      },
    ],
  },

  process: {
    index: '03',
    label: 'PROCESSUS',
    heading: 'Chaque décision\ntechnique,\njustifiée.',
    cards: [
      {
        num: 'I',
        tag: 'CONCURRENCE',
        title: 'Virtual Threads sans l\'overhead des threads OS.',
        body: 'Indexer un répertoire massif implique d\'ouvrir des dizaines de milliers de fichiers. Avec les threads OS classiques, le coût du changement de contexte effondre le débit. Les Virtual Threads (JEP 444) éliminent ce problème.',
        challenge: 'Coordonner les écritures concurrentes dans l\'index sans créer de contention sur le lock principal.',
        decision: 'Chaque Virtual Thread accumule un index partiel. La fusion se fait une seule fois à la fin — lecture lock-free, écriture O(chunks).',
        challengeLabel: 'DÉFI',
        decisionLabel: 'DÉCISION',
      },
      {
        num: 'II',
        tag: 'DONNÉES',
        title: 'Trie + Inverted Index — la mémoire est le goulot d\'étranglement.',
        body: 'Une HashMap<String, List<DocId>> naïve fonctionne jusqu\'à ce que le dictionnaire explose en heap. Un Trie compressé réduit l\'espace jusqu\'à 60%. Sans boxing — primitifs emballés via long encoding.',
        challenge: 'Éviter l\'autoboxing dans les chemins critiques — les pauses GC détruisent la latence p99.',
        decision: 'docId 32-bit + tf 32-bit = un long. Zéro objet dans le chemin critique de recherche.',
        challengeLabel: 'DÉFI',
        decisionLabel: 'DÉCISION',
      },
      {
        num: 'III',
        tag: 'PARALLÉLISME',
        title: 'Fork/Join — diviser pour conquérir le système de fichiers.',
        body: 'Le travail d\'indexation est naturellement divisible. Fork/Join avec work-stealing garantit que les threads oisifs volent du travail aux files pleines — sans scheduler manuel.',
        challenge: 'Calibrer le seuil de division pour éviter une granularité excessive ou insuffisante.',
        decision: 'Seuil dynamique via availableProcessors(). En dessous de 64 fichiers, exécution séquentielle sur le thread actuel.',
        challengeLabel: 'DÉFI',
        decisionLabel: 'DÉCISION',
      },
      {
        num: 'IV',
        tag: 'E/S',
        title: 'java.nio — lecture directe, zéro copie supplémentaire.',
        body: 'FileInputStream copie de l\'espace noyau vers l\'espace utilisateur à chaque lecture. FileChannel + ByteBuffer lit directement dans le buffer. Avec 80k fichiers/s, cela économise des dizaines de ms de débit.',
        challenge: 'Gérer le cycle de vie des ByteBuffers sans fuite de mémoire native (le off-heap n\'est pas collecté par le GC).',
        decision: 'Pool de ByteBuffers par thread via ThreadLocal. Chaque Virtual Thread réutilise le même buffer avec buffer.clear() — zéro allocation dans la boucle critique.',
        challengeLabel: 'DÉFI',
        decisionLabel: 'DÉCISION',
      },
    ],
  },

  stack: {
    index: '04',
    label: 'STACK',
    heading: 'Chaque structure\na une raison.',
    sub: '7 composants · zéro framework · zéro compromis',
  },

  conclusion: {
    index: '05',
    label: 'CONCLUSION',
    heading: 'Ce que j\'ai appris\nen construisant\nà partir de zéro.',
    body: [
      'J-Seeker prouve que le Java moderne peut offrir des performances qui exigeaient auparavant du C++ ou du Rust. Le prix est une connaissance approfondie des bonnes abstractions et une discipline pour ne pas accumuler d\'allocations sur le chemin critique.',
      'Le goulot d\'étranglement n\'était jamais là où je l\'attendais. Ce n\'était pas les E/S. Ce n\'était pas le CPU. C\'était l\'autoboxing silencieux dans la posting list. Le profilage avant l\'optimisation n\'est pas un conseil — c\'est un protocole.',
    ],
    results: [
      'Indexation de ~1Go/s sur un système de fichiers ext4 réel',
      'Latence p99 <10ms sur des corpus de 80k documents',
      'Empreinte heap ~40Mo pour 500k tokens uniques',
      'Zéro dépendance — build javac, run java',
      'Concurrence structurée sans data races',
    ],
    repoLabel: 'Voir le dépôt ↗',
    backLabel: '← Retour au portfolio',
  },

  footer: '// J-Seeker · Java 21 · zéro dépendance · MIT © ',
}

// ─────────────────────────────────────────────────────────────────────────────
// ZH
// ─────────────────────────────────────────────────────────────────────────────
const ZH = {
  nav: ['动机', '架构', '流程', '技术栈', '总结'],
  backLink: '← 作品集',
  navHome: '返回',

  hero: {
    label: 'Freelancer · JAVA 21 · CLI ',
    title: ['J-SEE', 'KER'],
    kicker: '高性能全文本搜索引擎。\n零依赖。零阻塞 I/O。',
    stats: [
      { value: '80k', label: '文档/秒' },
      { value: '<10ms', label: 'p99 延迟' },
      { value: '~1GB/s', label: '吞吐量' },
      { value: '0', label: '外部依赖' },
    ],
    terminal: {
      prompt: '❯ j-seeker search "虚拟线程 并发"',
      lines: [
        { type: 'dim', text: '正在加载索引... ~/.jseeker/index.bin' },
        { type: 'progress', text: '正在索引 80,421 文档/秒 ░░░░░░░░░░░ 100%' },
        { type: 'green', text: '47 个结果 · 7ms · TF-IDF' },
      ],
      results: [
        { score: '0.94', path: './docs/concurrency-model.md' },
        { score: '0.87', path: './src/executor/VirtualPool.java' },
        { score: '0.81', path: './notes/jep-444-analysis.md' },
        { score: '0.76', path: './bench/thread-overhead.txt' },
      ],
      footer: '128ms 冷启动 · 堆内存 40MB · 0 外部依赖',
    },
  },

  context: {
    index: '01',
    label: '动机',
    heading: '值得测试的\n极限。',
    body: [
      '大型代码库。数万个文件。现有的工具要么太慢（如递归 grep），要么需要繁重的配置（如本地 Elasticsearch 实例）。',
      '问题很直接：在不触及任何外部依赖的情况下，能从现代 Java（虚拟线程 JEP 444 和 NIO）中挤出多少性能？',
    ],
    quote: '正确的数据结构比更好的硬件更重要。',
    metrics: [
      { value: '80k', label: '文档/秒' },
      { value: '<10ms', label: 'p99 延迟' },
      { value: '0', label: '外部依赖' },
      { value: '1GB/s', label: '平均吞吐量' },
    ],
  },

  arch: {
    index: '02',
    label: '架构',
    heading: '搜索\n流水线。',
    pipeline: [
      { label: 'Query', sub: '输入' },
      { label: 'Tokenizer', sub: '标准化' },
      { label: 'Trie Lookup', sub: 'O(k)' },
      { label: 'TF-IDF', sub: '评分' },
      { label: 'Top-K Heap', sub: '排序' },
      { label: 'Results', sub: '输出' },
    ],
    cols: [
      {
        title: '内存索引',
        body: '索引一次构建并序列化为紧凑的二进制文件。搜索时零磁盘访问。全部驻留堆内存。包含 50 万个词条的 Trie 占用不到 40MB，而原始 HashMap 则需约 200MB。',
      },
      {
        title: '无 GPU 的 TF-IDF',
        body: '倒排列表中的每个条目使用两个 float：词频和预计算的 IDF。将“缺陷”转为特性：Top-K 二叉堆比对整个列表排序快得多。',
      },
    ],
  },

  process: {
    index: '03',
    label: '流程',
    heading: '每一个技术决策\n都有据可查。',
    cards: [
      {
        num: 'I',
        tag: '并发',
        title: '无操作系统线程开销的虚拟线程。',
        body: '索引海量目录意味着打开数万个文件。使用传统操作系统线程时，上下文切换成本会导致吞吐量崩溃。虚拟线程（JEP 444）消除了这一点。',
        challenge: '在不产生主锁竞争的情况下协调索引的并发写入。',
        decision: '每个虚拟线程累积局部索引。最后进行一次合并——读取无锁，写入复杂度为 O(chunks)。',
        challengeLabel: '挑战',
        decisionLabel: '决策',
      },
      {
        num: 'II',
        tag: '数据',
        title: 'Trie + 倒排索引——内存是瓶颈。',
        body: '在字典爆炸之前，原始的 HashMap<String, List<DocId>> 尚可运行。压缩 Trie 可减少高达 60% 的空间。通过 long 编码包装原始类型，实现零装箱。',
        challenge: '避免热点路径中的自动装箱——GC 停顿会破坏 p99 延迟。',
        decision: '32 位 docId + 32 位 tf = 一个 long。搜索关键路径零对象分配。',
        challengeLabel: '挑战',
        decisionLabel: '决策',
      },
      {
        num: 'III',
        tag: '并行',
        title: 'Fork/Join——分而治之文件系统。',
        body: '索引工作天生可分割。带有工作窃取算法的 Fork/Join 确保空闲线程从繁忙队列中分担任务，无需手动调度。',
        challenge: '校准拆分阈值，避免粒度过细或不足。',
        decision: '通过 availableProcessors() 实现动态阈值。少于 64 个文件时，在当前线程顺序执行。',
        challengeLabel: '挑战',
        decisionLabel: '决策',
      },
      {
        num: 'IV',
        tag: 'I/O',
        title: 'java.nio——直接读取，零额外复制。',
        body: 'FileInputStream 每次读取都会在内核空间与用户空间之间复制。FileChannel + ByteBuffer 直接读取到缓冲区。在每秒 8 万个文件的情况下，这能节省数十毫秒的吞吐时间。',
        challenge: '管理 ByteBuffer 生命周期，避免原生内存泄漏（堆外内存不受 GC 管理）。',
        decision: '通过 ThreadLocal 为每个线程建立 ByteBuffer 池。每个虚拟线程通过 buffer.clear() 重用相同缓冲区——热循环零分配。',
        challengeLabel: '挑战',
        decisionLabel: '决策',
      },
    ],
  },

  stack: {
    index: '04',
    label: '技术栈',
    heading: '每种结构\n皆有深意。',
    sub: '7 个组件 · 零框架 · 零妥协',
  },

  conclusion: {
    index: '05',
    label: '总结',
    heading: '从零构建\n所得所悟。',
    body: [
      'J-Seeker 证明了现代 Java 可以交付以前需要 C++ 或 Rust 才能达到的性能。代价是对正确抽象的深入理解，以及在关键路径上避免内存分配的纪律。',
      '瓶颈从未出现在我预料的地方。不是 I/O，不是 CPU。而是倒排列表中隐蔽的自动装箱。优化前先做性能分析（Profiling）不是建议，而是协议。',
    ],
    results: [
      '在真实 ext4 文件系统上实现约 1GB/s 的索引速度',
      '在 8 万份文档的语料库中 p99 延迟 <10ms',
      '50 万个唯一标记的堆内存占用约 40MB',
      '零依赖——javac 编译，java 运行',
      '无数据竞争的结构化并发',
    ],
    repoLabel: '查看仓库 ↗',
    backLabel: '← 返回作品集',
  },

  footer: '// J-Seeker · Java 21 · 零依赖 · MIT © ',
}

// ─────────────────────────────────────────────────────────────────────────────
// JA
// ─────────────────────────────────────────────────────────────────────────────
const JA = {
  nav: ['動機', 'アーキテクチャ', 'プロセス', 'スタック', '結論'],
  backLink: '← ポートフォリオ',
  navHome: '戻る',

  hero: {
    label: 'Freelancer · JAVA 21 · CLI ',
    title: ['J-SEE', 'KER'],
    kicker: '高性能全文検索エンジン。\n依存関係ゼロ。非ブロッキング I/O。',
    stats: [
      { value: '80k', label: 'docs/s' },
      { value: '<10ms', label: 'p99 レイテンシ' },
      { value: '~1GB/s', label: 'スループット' },
      { value: '0', label: '外部依存' },
    ],
    terminal: {
      prompt: '❯ j-seeker search "virtual threads 並行処理"',
      lines: [
        { type: 'dim', text: 'インデックスを読み込み中... ~/.jseeker/index.bin' },
        { type: 'progress', text: 'インデックス作成中 80,421 docs/s ░░░░░░░░░░░ 100%' },
        { type: 'green', text: '47 件の結果 · 7ms · TF-IDF' },
      ],
      results: [
        { score: '0.94', path: './docs/concurrency-model.md' },
        { score: '0.87', path: './src/executor/VirtualPool.java' },
        { score: '0.81', path: './notes/jep-444-analysis.md' },
        { score: '0.76', path: './bench/thread-overhead.txt' },
      ],
      footer: '128ms コールドスタート · heap 40MB · 0 依存関係',
    },
  },

  context: {
    index: '01',
    label: '動機',
    heading: '試す価値のある\n限界点。',
    body: [
      '巨大なリポジトリ。数万のファイル。既存のツールは再帰的な grep のように遅すぎるか、ローカルの Elasticsearch インスタンスのような重いセットアップを必要とします。',
      '問いは明快でした。外部依存関係を一切使わずに、モダン Java（仮想スレッド JEP 444 と NIO）からどこまでパフォーマンスを引き出せるか？',
    ],
    quote: '正しいデータ構造は、より優れたハードウェアに勝る。',
    metrics: [
      { value: '80k', label: 'ドキュメント/秒' },
      { value: '<10ms', label: 'p99 レイテンシ' },
      { value: '0', label: '依存関係' },
      { value: '1GB/s', label: '平均スループット' },
    ],
  },

  arch: {
    index: '02',
    label: 'アーキテクチャ',
    heading: '検索\nパイプライン。',
    pipeline: [
      { label: 'Query', sub: '入力' },
      { label: 'Tokenizer', sub: '正規化' },
      { label: 'Trie Lookup', sub: 'O(k)' },
      { label: 'TF-IDF', sub: 'スコアリング' },
      { label: 'Top-K Heap', sub: 'ランキング' },
      { label: 'Results', sub: '出力' },
    ],
    cols: [
      {
        title: 'インメモリ・インデックス',
        body: 'インデックスは一度構築され、コンパクトなバイナリとしてシリアライズされます。検索時のディスクアクセスはゼロ。すべて Heap 上。50万語の Trie は、素朴な HashMap が約 200MB 使うのに対し、40MB 未満に収まります。',
      },
      {
        title: 'GPU なしの TF-IDF',
        body: 'ポスティングリストの各エントリに 2 つの float（単語頻度と事前計算された IDF）。バグを機能に変えた例：Top-K バイナリヒープは、リスト全体をソートするよりも劇的に高速です。',
      },
    ],
  },

  process: {
    index: '03',
    label: 'プロセス',
    heading: 'すべての技術的\n判断に理由を。',
    cards: [
      {
        num: 'I',
        tag: '並行処理',
        title: 'OS スレッドのオーバーヘッドがない仮想スレッド。',
        body: '大規模ディレクトリのインデックス作成は、数万のファイルを開くことを意味します。従来の OS スレッドでは、コンテキストスイッチのコストでスループットが崩壊します。仮想スレッド (JEP 444) はこれを解消します。',
        challenge: 'メインロックの競合を発生させずに、インデックスへの並行書き込みを調整する。',
        decision: '各仮想スレッドが部分インデックスを蓄積。マージは最後に一度だけ実行。読み取りはロックフリー、書き込みは O(chunks)。',
        challengeLabel: '課題',
        decisionLabel: '決定',
      },
      {
        num: 'II',
        tag: 'データ',
        title: 'Trie + 転置インデックス — メモリがボトルネック。',
        body: 'HashMap<String, List<DocId>> は辞書が爆発するまでしか機能しません。圧縮 Trie はスペースを最大 60% 削減します。ボクシングなし — long エンコーディング経由でプリミティブをパック。',
        challenge: 'ホットパスでのオートボクシングを避ける — GC 休止は p99 レイテンシを破壊します。',
        decision: '32-bit docId + 32-bit tf = 1 つの long。検索のクリティカルパスでオブジェクト生成ゼロ。',
        challengeLabel: '課題',
        decisionLabel: '決定',
      },
      {
        num: 'III',
        tag: '並列処理',
        title: 'Fork/Join — ファイルシステムを分割統治。',
        body: 'インデックス作成は本質的に分割可能です。ワークスティーリングを備えた Fork/Join は、アイドル状態のスレッドがビジーなキューからタスクを奪うことを保証します。',
        challenge: '粒度が細かすぎたり不足したりしないよう、分割しきい値を調整する。',
        decision: 'availableProcessors() による動的なしきい値。64 ファイル未満は自スレッドで逐次実行。',
        challengeLabel: '課題',
        decisionLabel: '決定',
      },
      {
        num: 'IV',
        tag: 'I/O',
        title: 'java.nio — 直接読み込み、余計なコピーなし。',
        body: 'FileInputStream は読み込みごとにカーネルからユーザー空間へコピーします。FileChannel + ByteBuffer はバッファへ直接読み込みます。秒間 8 万ファイルでは、これが数十ミリ秒の差になります。',
        challenge: 'ネイティブメモリリークなしに ByteBuffer のライフサイクルを管理する（オフヒープは GC 対象外）。',
        decision: 'ThreadLocal によるスレッドごとの ByteBuffer プール。各仮想スレッドは buffer.clear() で同じバッファを再利用し、ホットループでのアロケーションをゼロに。',
        challengeLabel: '課題',
        decisionLabel: '決定',
      },
    ],
  },

  stack: {
    index: '04',
    label: 'スタック',
    heading: 'すべての構造に\n理由がある。',
    sub: '7 コンポーネント · フレームワーク・ゼロ · 妥協ゼロ',
  },

  conclusion: {
    index: '05',
    label: '結論',
    heading: 'ゼロから構築して\n学んだこと。',
    body: [
      'J-Seeker は、モダン Java がかつて C++ や Rust を必要としたパフォーマンスを実現できることを証明しています。その代償は、正しい抽象化への深い理解と、クリティカルパスでアロケーションを蓄積させない規律です。',
      'ボトルネックは予想外の場所にありました。I/O でも CPU でもなく、ポスティングリストでの静かなオートボクシングでした。最適化前のプロファイリングは助言ではなく、プロトコルです。',
    ],
    results: [
      '実 ext4 ファイルシステムで約 1GB/s のインデックス作成',
      '8万ドキュメントのコーパスで p99 レイテンシ <10ms',
      '50万ユニークトークンで Heap フットプリント約 40MB',
      '依存関係ゼロ — javac build, java run',
      'データ競合のない構造化された並行性',
    ],
    repoLabel: 'リポジトリを見る ↗',
    backLabel: '← ポートフォリオに戻る',
  },

  footer: '// J-Seeker · Java 21 · 依存関係ゼロ · MIT © ',
}





const CASE_DATA = { PT, EN, ES, DE, FR, ZH, JA }
export default CASE_DATA
