// ─────────────────────────────────────────────────────────────────────────────
// j-seeker-data.js — Conteúdo da página de Case Study do J-Seeker
// Mesmo padrão: CASE_DATA default + CASE_LANGS e STACK named exports.
// ─────────────────────────────────────────────────────────────────────────────

// ── Idiomas disponíveis no seletor ───────────────────────────────────────────
export const CASE_LANGS = [
  { code: 'PT', label: 'PT', flag: '🇧🇷' },
  { code: 'EN', label: 'EN', flag: '🇺🇸' },
  { code: 'ES', label: 'ES', flag: '🇪🇸' },
]

// ─────────────────────────────────────────────────────────────────────────────
// Marquee items
// ─────────────────────────────────────────────────────────────────────────────
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
  { label: 'CONCORRÊNCIA', hot: true },
  { label: '80K DOCS/S', hot: false },
]

// ─────────────────────────────────────────────────────────────────────────────
// Stack — roles traduzidas por idioma.
// ─────────────────────────────────────────────────────────────────────────────
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
  },
  {
    num: '05',
    name: 'Inverted Index',
    icon: '🗂',
    role: {
      PT: 'Estrutura de dados — mapa token→documentos para busca O(1)',
      EN: 'Data structure — token→documents map for O(1) lookup',
      ES: 'Estructura de datos — mapa token→documentos para búsqueda O(1)',
    },
  },
  {
    num: '06',
    name: 'Trie',
    icon: '🌲',
    role: {
      PT: 'Prefixo eficiente — economy de memória no dicionário do índice',
      EN: 'Efficient prefix tree — memory economy in the index dictionary',
      ES: 'Árbol de prefijos eficiente — economía de memoria en el diccionario',
    },
  },
  {
    num: '07',
    name: 'TF-IDF',
    icon: '📊',
    role: {
      PT: 'Relevância — ranking estatístico de resultados sem modelo externo',
      EN: 'Relevance — statistical result ranking without an external model',
      ES: 'Relevancia — ranking estadístico de resultados sin modelo externo',
    },
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// PT — Português
// ─────────────────────────────────────────────────────────────────────────────
const PT = {
  nav: ['motivação', 'arquitetura', 'processo', 'stack', 'conclusão'],

  hero: {
    eyebrow: '// ESTUDO DE CASO · JAVA 21 · CLI · PESSOAL · 2026',
    title: ['J-SEE', 'KER'],
    accentLine: 'KER',
    subtitle:
      'Motor de busca full-text de alta performance capaz de indexar e buscar em sistemas de arquivos massivos com latência sub-10ms. Zero I/O bloqueante. Zero dependências externas.',
    stats: [
      { value: '80k', label: 'docs/s na indexação' },
      { value: '<10ms', label: 'latência de busca' },
      { value: '~1GB/s', label: 'throughput' },
      { value: '0', label: 'deps. externas' },
    ],
    terminal: {
      title: 'j-seeker — zsh',
      prompt: 'j-seeker search "virtual threads concorrência"',
      indexing: 'indexando... 80.421 docs/s  ████████████ 100%',
      resultHeader: '47 resultados em 7ms  ·  TF-IDF ranking',
      results: [
        { score: '0.94', path: './docs/concurrency-model.md' },
        { score: '0.87', path: './src/executor/VirtualPool.java' },
        { score: '0.81', path: './notes/jep-444-analysis.md' },
        { score: '0.76', path: './bench/thread-overhead.txt' },
      ],
      footer: '✓ índice carregado de ~/.jseeker/index.bin — 128ms cold start',
    },
    termLabel: 'Java 21 · Virtual Threads · NIO · Fork/Join · Tries · TF-IDF',
  },

  context: {
    sectionLabel: '01 / Motivação',
    heading: 'O limite que\nvalia a pena testar.',
    paragraphs: [
      'Trabalho com repositórios grandes. Dezenas de milhares de arquivos espalhados por pastas aninhadas, notas, código e logs. As ferramentas existentes ou são lentas demais — grep recursivo — ou exigem setup pesado, como uma instância Elasticsearch rodando localmente.',
      '*Um motor de busca completo não precisa de 500MB de JVM heap e um cluster.* Precisa de estruturas de dados corretas e I/O bem feito.',
      'O J-Seeker nasceu de uma pergunta direta: o quanto consigo extrair do Java moderno — especificamente das Virtual Threads do JEP 444 e da API NIO — sem encostar em nenhuma dependência externa?',
      'A resposta: o suficiente para indexar um sistema de arquivos de 1GB em menos de um segundo e responder qualquer busca full-text em menos de 10ms.',
    ],
    pullQuote: '"Estruturas de dados corretas\nvalem mais que hardware melhor."',
    metrics: [
      { value: '80k', label: 'docs por segundo' },
      { value: '<10ms', label: 'latência p99' },
      { value: '0', label: 'dependências' },
      { value: '~1GB/s', label: 'throughput médio' },
    ],
  },

  arch: {
    sectionLabel: '02 / Pipeline de Busca',
    quote: '"Index once,\nsearch forever."',
    quoteTranslation: 'Indexe uma vez, busque para sempre.',
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
        body: 'O índice é construído uma única vez — ou atualizado incrementalmente via *file watcher* — e serializado em binário compacto. Na busca, nenhum disco é tocado: tudo reside em heap.',
        body2: 'A *Trie* é a peça central: cada caractere ocupa um nó, tokens compartilham prefixos. O dicionário com 500k palavras únicas cabe em menos de *40MB de heap* — contra ~200MB de um HashMap ingênuo.',
      },
      {
        body: 'O TF-IDF calcula relevância sem nenhuma chamada de rede, sem modelo de linguagem, sem GPU. Dois floats por entrada no posting list — *term frequency* e *IDF pré-computado* — e o ranking sai em microssegundos.',
        body2: 'O *bug que virou feature*: ao serializar o índice, descobri que um heap binário de top-K é dramaticamente mais rápido que ordenar o posting list completo. Agora é a peça central do ranking.',
      },
    ],
  },

  process: {
    sectionLabel: '03 / Processo',
    heading: 'Cada decisão técnica,\njustificada.',
    cards: [
      {
        num: 'I',
        phase: 'Fase 01 · Concorrência',
        title: 'Virtual Threads — concorrência sem overhead de OS threads.',
        body: 'Indexar um diretório massivo significa abrir dezenas de milhares de arquivos. Com OS threads clássicas, o custo de context switch e a limitação do pool fazem o throughput colapsar. Virtual Threads (JEP 444) eliminam esse problema: criar mil threads custa menos que criar dez OS threads.',
        challenge: 'Coordenar writes concorrentes no índice compartilhado sem criar contenção no lock principal.',
        decision: 'Cada Virtual Thread acumula um índice parcial (chunk local). O merge acontece uma vez ao final — leitura é lock-free, write é O(chunks).',
        challengeLabel: '⚠ Desafio',
        decisionLabel: '✓ Decisão',
      },
      {
        num: 'II',
        phase: 'Fase 02 · Estruturas de Dados',
        title: 'Trie + Inverted Index — memória é o gargalo real.',
        body: 'Um HashMap<String, List<DocId>> naive funciona — até o momento em que o dicionário explode em heap. Prefixos compartilhados numa Trie comprimida reduzem o espaço do dicionário em até 60%. O posting list de cada folha mantém apenas docId + tf como floats primitivos, sem boxing.',
        challenge: 'Evitar autoboxing e alocações desnecessárias nos hot paths — GC pause destrói a latência p99.',
        decision: 'Primitivos empacotados via long encoding (docId 32-bit + tf 32-bit = um long). Zero objetos no caminho crítico de busca.',
        challengeLabel: '⚠ Desafio',
        decisionLabel: '✓ Decisão',
      },
      {
        num: 'III',
        phase: 'Fase 03 · Paralelismo',
        title: 'Fork/Join Framework — dividir para conquistar o file system.',
        body: 'O trabalho de indexação é naturalmente divisível: cada subdiretório é uma subtarefa independente. O Fork/Join Framework com work-stealing garante que threads ociosas roubem trabalho de filas cheias — sem escrever um scheduler manual.',
        challenge: 'Calibrar o threshold de split para não criar subtarefas pequenas demais (overhead de task creation) nem grandes demais (sem paralelismo real).',
        decision: 'Threshold dinâmico baseado em Runtime.getRuntime().availableProcessors(). Abaixo de 64 arquivos, a tarefa executa sequencialmente no próprio thread.',
        challengeLabel: '⚠ Desafio',
        decisionLabel: '✓ Decisão',
      },
      {
        num: 'IV',
        phase: 'Fase 04 · I/O',
        title: 'java.nio — leitura direta de buffer, zero cópia extra.',
        body: 'FileInputStream copia dados de kernel space para user space para cada leitura. FileChannel + ByteBuffer lê direto no buffer — menos uma cópia por arquivo. Com 80k arquivos/s, essa diferença se acumula em dezenas de milissegundos de throughput real.',
        challenge: 'Gerenciar o ciclo de vida dos ByteBuffers sem vazar memória nativa — off-heap não é coletado pelo GC automaticamente.',
        decision: 'Pool de ByteBuffers por thread via ThreadLocal. Cada Virtual Thread reutiliza o mesmo buffer, limpando-o entre arquivos com buffer.clear() — zero allocations no hot loop.',
        challengeLabel: '⚠ Desafio',
        decisionLabel: '✓ Decisão',
      },
    ],
  },

  stack: {
    sectionLabel: '04 / Stack & Ferramentas',
    heading: 'Cada estrutura\ntem uma razão.',
    sub: '7 componentes. Zero frameworks. Zero dependências externas. Zero compromissos.',
  },

  conclusion: {
    sectionLabel: '05 / Conclusão',
    heading: 'O que aprendi construindo\num motor de busca do zero.',
    paragraphs: [
      'J-Seeker prova que o Java moderno — com Virtual Threads, NIO e Fork/Join — é capaz de performance que antes exigia linguagens de sistemas como C++ ou Rust. O custo é conhecimento profundo das abstrações corretas e disciplina para não acumular alocações no caminho crítico.',
      'A lição mais valiosa: o gargalo nunca estava onde eu esperava. Não foi I/O. Não foi CPU. Foi autoboxing silencioso no posting list. Profiling antes de otimizar não é conselho — é protocolo.',
    ],
    results: [
      'Indexação de ~1GB/s — throughput medido em file system ext4 real',
      'Latência p99 <10ms em corpora de 80k documentos',
      'Footprint de heap ~40MB para dicionário com 500k tokens únicos',
      'Zero dependências externas — build com javac, run com java',
      'Concorrência estruturada via Virtual Threads sem data races',
    ],
    repoLabel: 'Ver repositório ↗',
    backLabel: '← Voltar ao portfólio',
  },

  footer: '// construído com curiosidade, Java 21 e zero dependências',
}

// ─────────────────────────────────────────────────────────────────────────────
// EN — English
// ─────────────────────────────────────────────────────────────────────────────
const EN = {
  nav: ['motivation', 'architecture', 'process', 'stack', 'conclusion'],

  hero: {
    eyebrow: '// CASE STUDY · JAVA 21 · CLI · PERSONAL · 2026',
    title: ['J-SEE', 'KER'],
    accentLine: 'KER',
    subtitle:
      'A high-performance full-text search engine capable of indexing and searching massive file systems with sub-10ms latency. Zero blocking I/O. Zero external dependencies.',
    stats: [
      { value: '80k', label: 'docs/s on indexing' },
      { value: '<10ms', label: 'search latency' },
      { value: '~1GB/s', label: 'throughput' },
      { value: '0', label: 'ext. dependencies' },
    ],
    terminal: {
      title: 'j-seeker — zsh',
      prompt: 'j-seeker search "virtual threads concurrency"',
      indexing: 'indexing... 80,421 docs/s  ████████████ 100%',
      resultHeader: '47 results in 7ms  ·  TF-IDF ranking',
      results: [
        { score: '0.94', path: './docs/concurrency-model.md' },
        { score: '0.87', path: './src/executor/VirtualPool.java' },
        { score: '0.81', path: './notes/jep-444-analysis.md' },
        { score: '0.76', path: './bench/thread-overhead.txt' },
      ],
      footer: '✓ index loaded from ~/.jseeker/index.bin — 128ms cold start',
    },
    termLabel: 'Java 21 · Virtual Threads · NIO · Fork/Join · Tries · TF-IDF',
  },

  context: {
    sectionLabel: '01 / Motivation',
    heading: 'The limit that was\nworth testing.',
    paragraphs: [
      'I work with large repositories. Tens of thousands of files spread across nested folders, notes, code, and logs. Existing tools are either too slow — recursive grep — or require heavy setup, like running a local Elasticsearch instance.',
      '*A complete search engine doesn\'t need 500MB of JVM heap and a cluster.* It needs the right data structures and well-crafted I/O.',
      'J-Seeker was born from a direct question: how much can I extract from modern Java — specifically JEP 444 Virtual Threads and the NIO API — without touching any external dependency?',
      'The answer: enough to index a 1GB file system in under a second and answer any full-text query in under 10ms.',
    ],
    pullQuote: '"The right data structures\noutperform better hardware."',
    metrics: [
      { value: '80k', label: 'documents per second' },
      { value: '<10ms', label: 'p99 latency' },
      { value: '0', label: 'dependencies' },
      { value: '~1GB/s', label: 'average throughput' },
    ],
  },

  arch: {
    sectionLabel: '02 / Search Pipeline',
    quote: '"Index once,\nsearch forever."',
    quoteTranslation: 'Index once, search forever.',
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
        body: 'The index is built once — or updated incrementally via a *file watcher* — and serialized to compact binary format. At search time, no disk is touched: everything lives in heap.',
        body2: 'The *Trie* is the central piece: each character occupies a node, tokens share prefixes. A dictionary with 500k unique words fits in less than *40MB of heap* — versus ~200MB for a naive HashMap.',
      },
      {
        body: 'TF-IDF computes relevance without any network call, language model, or GPU. Two floats per entry in the posting list — *term frequency* and *pre-computed IDF* — and ranking completes in microseconds.',
        body2: 'The *bug that became a feature*: while serializing the index, I discovered that a binary top-K heap is dramatically faster than sorting the full posting list. It is now the central piece of ranking.',
      },
    ],
  },

  process: {
    sectionLabel: '03 / Process',
    heading: 'Every technical decision,\njustified.',
    cards: [
      {
        num: 'I',
        phase: 'Phase 01 · Concurrency',
        title: 'Virtual Threads — concurrency without OS thread overhead.',
        body: 'Indexing a massive directory means opening tens of thousands of files. With classic OS threads, context-switch cost and pool limitations cause throughput to collapse. Virtual Threads (JEP 444) eliminate this: creating a thousand threads costs less than creating ten OS threads.',
        challenge: 'Coordinating concurrent writes to the shared index without creating contention on the main lock.',
        decision: 'Each Virtual Thread accumulates a partial index (local chunk). Merge happens once at the end — reads are lock-free, writes are O(chunks).',
        challengeLabel: '⚠ Challenge',
        decisionLabel: '✓ Decision',
      },
      {
        num: 'II',
        phase: 'Phase 02 · Data Structures',
        title: 'Trie + Inverted Index — memory is the real bottleneck.',
        body: 'A naive HashMap<String, List<DocId>> works — until the dictionary explodes in heap. Shared prefixes in a compressed Trie reduce dictionary space by up to 60%. The posting list for each leaf holds only docId + tf as primitive floats, no boxing.',
        challenge: 'Avoiding autoboxing and unnecessary allocations in hot paths — GC pauses destroy p99 latency.',
        decision: 'Primitives packed via long encoding (docId 32-bit + tf 32-bit = one long). Zero objects on the critical search path.',
        challengeLabel: '⚠ Challenge',
        decisionLabel: '✓ Decision',
      },
      {
        num: 'III',
        phase: 'Phase 03 · Parallelism',
        title: 'Fork/Join Framework — divide and conquer the file system.',
        body: 'Indexing work is naturally divisible: each subdirectory is an independent subtask. The Fork/Join Framework with work-stealing ensures idle threads steal work from full queues — without writing a manual scheduler.',
        challenge: 'Calibrating the split threshold to avoid creating subtasks that are too small (task creation overhead) or too large (no real parallelism).',
        decision: 'Dynamic threshold based on Runtime.getRuntime().availableProcessors(). Below 64 files, the task executes sequentially on its own thread.',
        challengeLabel: '⚠ Challenge',
        decisionLabel: '✓ Decision',
      },
      {
        num: 'IV',
        phase: 'Phase 04 · I/O',
        title: 'java.nio — direct buffer reads, zero extra copy.',
        body: 'FileInputStream copies data from kernel space to user space on every read. FileChannel + ByteBuffer reads directly into the buffer — one fewer copy per file. With 80k files/s, this difference accumulates into dozens of milliseconds of real throughput.',
        challenge: 'Managing the lifecycle of ByteBuffers without leaking native memory — off-heap is not collected by the GC automatically.',
        decision: 'Per-thread ByteBuffer pool via ThreadLocal. Each Virtual Thread reuses the same buffer, resetting it between files with buffer.clear() — zero allocations in the hot loop.',
        challengeLabel: '⚠ Challenge',
        decisionLabel: '✓ Decision',
      },
    ],
  },

  stack: {
    sectionLabel: '04 / Stack & Tools',
    heading: 'Every structure\nhas a reason.',
    sub: '7 components. Zero frameworks. Zero external dependencies. Zero compromises.',
  },

  conclusion: {
    sectionLabel: '05 / Conclusion',
    heading: 'What I learned building\na search engine from scratch.',
    paragraphs: [
      'J-Seeker proves that modern Java — with Virtual Threads, NIO, and Fork/Join — can deliver performance that previously required systems languages like C++ or Rust. The cost is deep knowledge of the right abstractions and discipline to avoid allocations on the critical path.',
      'The most valuable lesson: the bottleneck was never where I expected. Not I/O. Not CPU. It was silent autoboxing in the posting list. Profiling before optimizing is not advice — it\'s protocol.',
    ],
    results: [
      'Indexing at ~1GB/s — throughput measured on a real ext4 file system',
      'p99 latency <10ms on corpora of 80k documents',
      'Heap footprint ~40MB for a dictionary with 500k unique tokens',
      'Zero external dependencies — build with javac, run with java',
      'Structured concurrency via Virtual Threads without data races',
    ],
    repoLabel: 'View repository ↗',
    backLabel: '← Back to portfolio',
  },

  footer: '// built with curiosity, Java 21, and zero dependencies',
}

// ─────────────────────────────────────────────────────────────────────────────
// ES — Español
// ─────────────────────────────────────────────────────────────────────────────
const ES = {
  nav: ['motivación', 'arquitectura', 'proceso', 'stack', 'conclusión'],

  hero: {
    eyebrow: '// CASO DE ESTUDIO · JAVA 21 · CLI · PERSONAL · 2026',
    title: ['J-SEE', 'KER'],
    accentLine: 'KER',
    subtitle:
      'Motor de búsqueda full-text de alto rendimiento capaz de indexar y buscar en sistemas de archivos masivos con latencia sub-10ms. Cero I/O bloqueante. Cero dependencias externas.',
    stats: [
      { value: '80k', label: 'docs/s en indexación' },
      { value: '<10ms', label: 'latencia de búsqueda' },
      { value: '~1GB/s', label: 'throughput' },
      { value: '0', label: 'deps. externas' },
    ],
    terminal: {
      title: 'j-seeker — zsh',
      prompt: 'j-seeker search "virtual threads concurrencia"',
      indexing: 'indexando... 80.421 docs/s  ████████████ 100%',
      resultHeader: '47 resultados en 7ms  ·  TF-IDF ranking',
      results: [
        { score: '0.94', path: './docs/concurrency-model.md' },
        { score: '0.87', path: './src/executor/VirtualPool.java' },
        { score: '0.81', path: './notes/jep-444-analysis.md' },
        { score: '0.76', path: './bench/thread-overhead.txt' },
      ],
      footer: '✓ índice cargado desde ~/.jseeker/index.bin — 128ms cold start',
    },
    termLabel: 'Java 21 · Virtual Threads · NIO · Fork/Join · Tries · TF-IDF',
  },

  context: {
    sectionLabel: '01 / Motivación',
    heading: 'El límite que\nvalía la pena probar.',
    paragraphs: [
      'Trabajo con repositorios grandes. Decenas de miles de archivos distribuidos en carpetas anidadas, notas, código y logs. Las herramientas existentes son demasiado lentas — grep recursivo — o exigen setup pesado, como una instancia de Elasticsearch corriendo localmente.',
      '*Un motor de búsqueda completo no necesita 500MB de JVM heap y un clúster.* Necesita las estructuras de datos correctas y un I/O bien hecho.',
      'J-Seeker nació de una pregunta directa: ¿cuánto puedo extraer del Java moderno — específicamente los Virtual Threads del JEP 444 y la API NIO — sin tocar ninguna dependencia externa?',
      'La respuesta: suficiente para indexar un sistema de archivos de 1GB en menos de un segundo y responder cualquier búsqueda full-text en menos de 10ms.',
    ],
    pullQuote: '"Las estructuras de datos correctas\nvalen más que mejor hardware."',
    metrics: [
      { value: '80k', label: 'documentos por segundo' },
      { value: '<10ms', label: 'latencia p99' },
      { value: '0', label: 'dependencias' },
      { value: '~1GB/s', label: 'throughput promedio' },
    ],
  },

  arch: {
    sectionLabel: '02 / Pipeline de Búsqueda',
    quote: '"Index once,\nsearch forever."',
    quoteTranslation: 'Indexa una vez, busca siempre.',
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
        body: 'El índice se construye una sola vez — o se actualiza incrementalmente via *file watcher* — y se serializa en formato binario compacto. En la búsqueda, ningún disco es accedido: todo reside en heap.',
        body2: 'El *Trie* es la pieza central: cada carácter ocupa un nodo, los tokens comparten prefijos. Un diccionario con 500k palabras únicas cabe en menos de *40MB de heap* — versus ~200MB para un HashMap naive.',
      },
      {
        body: 'TF-IDF calcula relevancia sin ninguna llamada de red, modelo de lenguaje o GPU. Dos floats por entrada en la posting list — *term frequency* e *IDF pre-computado* — y el ranking sale en microsegundos.',
        body2: 'El *bug que se convirtió en feature*: al serializar el índice, descubrí que un heap binario de top-K es dramáticamente más rápido que ordenar la posting list completa. Ahora es la pieza central del ranking.',
      },
    ],
  },

  process: {
    sectionLabel: '03 / Proceso',
    heading: 'Cada decisión técnica,\njustificada.',
    cards: [
      {
        num: 'I',
        phase: 'Fase 01 · Concurrencia',
        title: 'Virtual Threads — concurrencia sin overhead de OS threads.',
        body: 'Indexar un directorio masivo significa abrir decenas de miles de archivos. Con OS threads clásicos, el costo de context-switch y la limitación del pool hacen colapsar el throughput. Los Virtual Threads (JEP 444) eliminan este problema: crear mil threads cuesta menos que crear diez OS threads.',
        challenge: 'Coordinar writes concurrentes en el índice compartido sin crear contención en el lock principal.',
        decision: 'Cada Virtual Thread acumula un índice parcial (chunk local). El merge ocurre una vez al final — la lectura es lock-free, el write es O(chunks).',
        challengeLabel: '⚠ Desafío',
        decisionLabel: '✓ Decisión',
      },
      {
        num: 'II',
        phase: 'Fase 02 · Estructuras de Datos',
        title: 'Trie + Inverted Index — la memoria es el verdadero cuello de botella.',
        body: 'Un HashMap<String, List<DocId>> naive funciona — hasta que el diccionario explota en heap. Los prefijos compartidos en un Trie comprimido reducen el espacio del diccionario hasta un 60%. La posting list de cada hoja mantiene solo docId + tf como floats primitivos, sin boxing.',
        challenge: 'Evitar autoboxing y allocations innecesarias en los hot paths — las pausas del GC destruyen la latencia p99.',
        decision: 'Primitivos empaquetados via long encoding (docId 32-bit + tf 32-bit = un long). Cero objetos en el camino crítico de búsqueda.',
        challengeLabel: '⚠ Desafío',
        decisionLabel: '✓ Decisión',
      },
      {
        num: 'III',
        phase: 'Fase 03 · Paralelismo',
        title: 'Fork/Join Framework — divide y conquista el file system.',
        body: 'El trabajo de indexación es naturalmente divisible: cada subdirectorio es una subtarea independiente. El Fork/Join Framework con work-stealing garantiza que los threads ociosos roben trabajo de las colas llenas — sin escribir un scheduler manual.',
        challenge: 'Calibrar el threshold de split para no crear subtareas demasiado pequeñas (overhead de task creation) ni demasiado grandes (sin paralelismo real).',
        decision: 'Threshold dinámico basado en Runtime.getRuntime().availableProcessors(). Por debajo de 64 archivos, la tarea se ejecuta secuencialmente en su propio thread.',
        challengeLabel: '⚠ Desafío',
        decisionLabel: '✓ Decisión',
      },
      {
        num: 'IV',
        phase: 'Fase 04 · I/O',
        title: 'java.nio — lectura directa de buffer, cero copia extra.',
        body: 'FileInputStream copia datos de kernel space a user space en cada lectura. FileChannel + ByteBuffer lee directamente en el buffer — una copia menos por archivo. Con 80k archivos/s, esta diferencia se acumula en decenas de milisegundos de throughput real.',
        challenge: 'Gestionar el ciclo de vida de los ByteBuffers sin filtrar memoria nativa — el off-heap no es recolectado por el GC automáticamente.',
        decision: 'Pool de ByteBuffers por thread via ThreadLocal. Cada Virtual Thread reutiliza el mismo buffer, limpiándolo entre archivos con buffer.clear() — cero allocations en el hot loop.',
        challengeLabel: '⚠ Desafío',
        decisionLabel: '✓ Decisión',
      },
    ],
  },

  stack: {
    sectionLabel: '04 / Stack & Herramientas',
    heading: 'Cada estructura\ntiene una razón.',
    sub: '7 componentes. Cero frameworks. Cero dependencias externas. Cero compromisos.',
  },

  conclusion: {
    sectionLabel: '05 / Conclusión',
    heading: 'Lo que aprendí construyendo\nun motor de búsqueda desde cero.',
    paragraphs: [
      'J-Seeker demuestra que el Java moderno — con Virtual Threads, NIO y Fork/Join — es capaz de rendimiento que antes requería lenguajes de sistemas como C++ o Rust. El costo es un conocimiento profundo de las abstracciones correctas y disciplina para no acumular allocations en el camino crítico.',
      'La lección más valiosa: el cuello de botella nunca estaba donde lo esperaba. No fue I/O. No fue CPU. Fue el autoboxing silencioso en la posting list. Perfilar antes de optimizar no es un consejo — es protocolo.',
    ],
    results: [
      'Indexación de ~1GB/s — throughput medido en file system ext4 real',
      'Latencia p99 <10ms en corpus de 80k documentos',
      'Footprint de heap ~40MB para diccionario con 500k tokens únicos',
      'Cero dependencias externas — build con javac, run con java',
      'Concurrencia estructurada via Virtual Threads sin data races',
    ],
    repoLabel: 'Ver repositorio ↗',
    backLabel: '← Volver al portafolio',
  },

  footer: '// construido con curiosidad, Java 21 y cero dependencias',
}

// ─────────────────────────────────────────────────────────────────────────────
// Export — mesmo padrão dos outros data files
// ─────────────────────────────────────────────────────────────────────────────
const CASE_DATA = { PT, EN, ES }
export default CASE_DATA
