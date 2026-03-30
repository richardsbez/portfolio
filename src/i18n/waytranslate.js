// ─────────────────────────────────────────────────────────────────────────────
// waytranslate-cli-data.js — Conteúdo da página de Case Study (versão CLI)
// Mesmo padrão de waytranslate-data.js: CASE_DATA default + CASE_LANGS e STACK.
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
// Marquee items — técnicos são universais; destaque (hot) é decorativo.
// ─────────────────────────────────────────────────────────────────────────────
export const MARQUEE_ITEMS = [
  { label: 'RUST', hot: false },
  { label: 'LATIM', hot: true },
  { label: 'DOCKER', hot: false },
  { label: 'LIBRETRANSLATE', hot: false },
  { label: 'OFFLINE', hot: true },
  { label: 'CLI', hot: false },
  { label: 'REQWEST', hot: false },
  { label: 'PRIVACIDADE', hot: true },
  { label: 'SERDE', hot: false },
  { label: 'ANYHOW', hot: false },
  { label: 'OPEN SOURCE', hot: true },
  { label: 'SMART FALLBACK', hot: false },
]

// ─────────────────────────────────────────────────────────────────────────────
// Stack — nomes técnicos universais; roles traduzidos por idioma.
// ─────────────────────────────────────────────────────────────────────────────
export const STACK = [
  {
    num: '01',
    name: 'Rust',
    icon: '🦀',
    role: {
      PT: 'Linguagem principal — segurança de memória + binário estático único',
      EN: 'Main language — memory safety + single static binary',
      ES: 'Lenguaje principal — seguridad de memoria + binario estático único',
      DE: 'Hauptsprache — Speichersicherheit + einzelne statische Binärdatei',
      FR: 'Langage principal — sécurité mémoire + binaire statique unique',
      ZH: '核心语言 — 内存安全 + 单一静态二进制文件',
      JA: 'メイン言語 — メモリ安全性 + 単一の静的バイナリ',
    },
  },
  {
    num: '02',
    name: 'Docker',
    icon: '🐳',
    role: {
      PT: 'Container do LibreTranslate — isolamento + reprodutibilidade',
      EN: 'LibreTranslate container — isolation + reproducibility',
      ES: 'Contenedor de LibreTranslate — aislamiento + reproducibilidad',
      DE: 'LibreTranslate-Container — Isolierung + Reproduzierbarkeit',
      FR: 'Conteneur LibreTranslate — isolation + reproductibilité',
      ZH: 'LibreTranslate 容器 — 隔离 + 可复现性',
      JA: 'LibreTranslate コンテナ — 分離 + 再現性',
    },
  },
  {
    num: '03',
    name: 'LibreTranslate',
    icon: '🔒',
    role: {
      PT: 'Motor de tradução — auto-hospedado, open source, sem chave de API',
      EN: 'Translation engine — self-hosted, open source, no API key',
      ES: 'Motor de traducción — auto-hospedado, open source, sin clave de API',
      DE: 'Übersetzungs-Engine — selbstgehostet, Open Source, kein API-Schlüssel',
      FR: 'Moteur de traduction — auto-hébergé, open source, sans clé API',
      ZH: '翻译引擎 — 自托管、开源、无需 API 密钥',
      JA: '翻訳エンジン — セルフホスト、オープンソース、APIキー不要',
    },
  },
  {
    num: '04',
    name: 'reqwest',
    icon: '🌐',
    role: {
      PT: 'HTTP client — chamada JSON à API local com timeout e tratamento de falha',
      EN: 'HTTP client — JSON calls to the local API with timeout and error handling',
      ES: 'Cliente HTTP — llamadas JSON a la API local con timeout y manejo de error',
      DE: 'HTTP-Client — JSON-Aufrufe an die lokale API mit Timeout und Fehlerbehandlung',
      FR: 'Client HTTP — appels JSON à l\'API locale avec timeout et gestion d\'erreurs',
      ZH: 'HTTP 客户端 — 带有超时和错误处理的本地 API JSON 调用',
      JA: 'HTTP クライアント — タイムアウトとエラー処理を備えたローカル API への JSON コール',
    },
  },
  {
    num: '05',
    name: 'serde',
    icon: '📦',
    role: {
      PT: 'Serialização — parse ergonômico do JSON de request e response',
      EN: 'Serialization — ergonomic JSON parsing for request and response',
      ES: 'Serialización — parse ergonómico del JSON de request y response',
      DE: 'Serialisierung — ergonomisches JSON-Parsing für Request und Response',
      FR: 'Sérialisation — parsing JSON ergonomique pour requêtes et réponses',
      ZH: '序列化 — 针对请求和响应的人性化 JSON 解析',
      JA: 'シリアライズ — リクエストとレスポンスの人間工学的な JSON パース',
    },
  },
  {
    num: '06',
    name: 'anyhow',
    icon: '🧯',
    role: {
      PT: 'Tratamento de erros — propagação ergonômica com contexto legível',
      EN: 'Error handling — ergonomic propagation with human-readable context',
      ES: 'Manejo de errores — propagación ergonómica con contexto legible',
      DE: 'Fehlerbehandlung — ergonomische Weitergabe mit lesbarem Kontext',
      FR: 'Gestion d\'erreurs — propagation ergonomique avec contexte lisible',
      ZH: '错误处理 — 具有可读上下文的人性化错误传递',
      JA: 'エラー処理 — 読みやすいコンテキストを持つ人間工学的なエラー伝播',
    },
  },
]
// ─────────────────────────────────────────────────────────────────────────────
// PT — Português
// ─────────────────────────────────────────────────────────────────────────────
const PT = {
  nav: ['contexto', 'latim', 'processo', 'stack', 'conclusão'],

  hero: {
    eyebrow: '// ESTUDO DE CASO · RUST · CLI · 2026',
    title: ['WAYT', 'RANS', 'LATE'],
    accentLine: 'LATE',
    subtitle:
      'Uma CLI em Rust que traduz textos offline usando LibreTranslate via Docker. Com fallback automático para Latim — sem APIs na nuvem, sem vazamento de dados, sem depender de nada externo.',
    stats: [
      { value: '~400', label: 'linhas de Rust' },
      { value: '0', label: 'APIs externas' },
      { value: 'la→pt', label: 'fallback Latim' },
      { value: 'offline', label: 'sem rede' },
    ],
    terminal: {
      title: 'waytranslate — bash',
      lines: [
        { type: 'prompt', text: 'waytranslate' },
        { type: 'dim', text: 'LibreTranslate @ localhost:5000 ✓' },
        { type: 'field', label: 'Texto:', value: 'Cogito, ergo sum' },
        { type: 'langs', from: 'la', to: 'pt' },
      ],
      chainComment: '// fallback auto',
      steps: [
        { n: '1.', label: 'la → en:', value: 'I think, therefore I am' },
        { n: '2.', label: 'en → pt:', value: 'Penso, logo existo', accent: true },
      ],
      footer: '✓ traduzido em 210ms — sem erros 429',
      chainModel: '// modelo la→pt inexistente; encadeando...',
    },
    termLabel: 'Rust · Docker · LibreTranslate · reqwest · serde · anyhow',
  },

  context: {
    sectionLabel: '01 / Contexto',
    heading: 'A coceira que\npedia solução.',
    paragraphs: [
      'Passo a maior parte do dia dentro de terminais e editores. Toda vez que encontrava uma frase em inglês — ou Latim clássico — que não entendia, o fluxo era sempre o mesmo: abrir o browser, navegar até algum serviço de tradução, colar, ler, voltar.',
      '*Seis passos para entender uma única sentença.* Isso quebra o foco por completo.',
      'A solução: uma CLI em Rust que traduz direto no terminal, sem sair do contexto de trabalho. Auto-hospedada via Docker, offline, e com suporte completo ao Latim clássico através de fallback automático — porque o modelo la→pt simplesmente não existe no LibreTranslate.',
      'Resultado: um único comando. Tradução em milissegundos. Foco preservado.',
    ],
    pullQuote: '"Seis passos para entender uma frase.\nAgora são zero."',
    metrics: [
      { value: '6', label: 'passos eliminados' },
      { value: '0', label: 'APIs na nuvem' },
      { value: '2', label: 'saltos Latim→PT' },
      { value: '0', label: 'erros 429' },
    ],
  },

  latin: {
    sectionLabel: '02 / Aprendendo Latim com a Própria Ferramenta',
    quote: '"Lingua mortua,\ncode viva."',
    quoteTranslation: 'Língua morta, código vivo.',
    chain: {
      input: { label: 'Cogito, ergo sum', sub: 'texto latino' },
      detect: { label: 'if la→pt\nnão existe', sub: 'detecção' },
      step1: { label: 'la → en', sub: 'passo 1' },
      mid: { label: 'I think, therefore I am', sub: 'inglês' },
      step2: { label: 'en → pt', sub: 'passo 2' },
      output: { label: 'Penso, logo existo', sub: 'resultado' },
    },
    cols: [
      {
        body: 'Passei semanas lendo textos do *Marco Aurélio*, de *Cícero* e fragmentos de *Virgílio* com o Waytranslate aberto no terminal ao lado. A ferramenta que construí para resolver um problema prático virou o meu dicionário de Latim clássico.',
        body2: 'O Latim não tem tradução direta para o Português no LibreTranslate — o modelo *la→pt* simplesmente não existe. Descobri isso escrevendo o código, e precisei resolver.',
      },
      {
        body: 'A solução foi um *fallback em dois saltos*: a CLI detecta o par de idiomas antes da requisição HTTP e encadeia duas chamadas ao LibreTranslate local — completamente transparente para o usuário.',
        body2: 'Resultado inesperado: ao ver a tradução inglesa intermediária, aprendi nuances que a tradução direta perderia. O *bug virou feature.* O fallback técnico virou uma vantagem pedagógica.',
      },
    ],
  },

  process: {
    sectionLabel: '03 / Processo',
    heading: 'Cada decisão técnica,\njustificada.',
    cards: [
      {
        num: 'I',
        phase: 'Fase 01 · Linguagem',
        title: 'Por que Rust — e não Python ou Go?',
        body: 'Uma CLI que roda frequentemente precisa de startup rápido e footprint mínimo. Rust entrega zero-cost abstractions, sem garbage collector, sem runtime externo — e compila para um binário estático único que o usuário nunca precisa instalar dependências para rodar.',
        challenge: 'Gerenciar async (reqwest + tokio) sem overhead desnecessário numa CLI de uso simples.',
        decision: 'tokio com runtime mínimo. reqwest em modo bloqueante — CLI não precisa de concorrência aqui.',
        challengeLabel: '⚠ Desafio',
        decisionLabel: '✓ Decisão',
      },
      {
        num: 'II',
        phase: 'Fase 02 · Infraestrutura',
        title: 'Docker + LibreTranslate — privacidade não é opcional.',
        body: 'Uma ferramenta que traduz texto tem um contrato implícito de privacidade com o usuário. Enviar texto para uma API remota quebraria esse contrato. LibreTranslate roda localmente na porta 5000 via Docker — isolado, reprodutível, sem chave de API.',
        challenge: 'Garantir que o container estava rodando antes de tentar a requisição — e falhar com mensagem clara se não estivesse.',
        decision: 'reqwest com timeout curto + anyhow para propagação de erro com contexto legível para o usuário.',
        challengeLabel: '⚠ Desafio',
        decisionLabel: '✓ Decisão',
      },
      {
        num: 'III',
        phase: 'Fase 03 · Fallback Automático',
        title: 'la → en → pt: dois saltos, uma solução transparente.',
        body: 'O modelo direto la→pt não existe no LibreTranslate. A solução foi detectar o par de idiomas antes da requisição e encadear duas chamadas HTTP automaticamente — sem input extra do usuário, sem mensagem de erro confusa.',
        challenge: 'Detectar quando o fallback é necessário sem aumentar latência percebida — e sem duplicar a lógica de chamada HTTP.',
        decision: 'Match no par source/target antes da requisição. Duas chamadas síncronas sequenciais — simples, previsível, sem abstração desnecessária.',
        challengeLabel: '⚠ Desafio',
        decisionLabel: '✓ Decisão',
      },
      {
        num: 'IV',
        phase: 'Fase 04 · UX de CLI',
        title: 'Interface mínima. Feedback imediato. Zero fricção.',
        body: 'Uma boa CLI não precisa de documentação. O fluxo: texto de entrada → idioma de origem → idioma de destino → resultado. Cada passo com feedback imediato. A flag --verbose expõe as etapas do fallback para quem quiser inspecionar.',
        challenge: 'Mostrar o progresso do fallback de dois saltos sem poluir a saída padrão do terminal.',
        decision: 'Saída limpa por padrão — só o resultado. Flag --verbose mostra cada etapa. Separação clara entre modos de uso.',
        challengeLabel: '⚠ Desafio',
        decisionLabel: '✓ Decisão',
      },
    ],
  },

  stack: {
    sectionLabel: '04 / Stack & Ferramentas',
    heading: 'Cada dependência\nse justifica.',
    sub: '6 crates. 1 container Docker. Zero APIs de terceiros. Zero rate limit.',
  },

  conclusion: {
    sectionLabel: '05 / Conclusão',
    heading: 'O que aprendi construindo\numa ferramenta para traduzir.',
    paragraphs: [
      'Waytranslate resolve uma incomodidade real e faz isso com exatamente a quantidade certa de código. Construir uma CLI genuinamente útil — sem template, sem tutorial específico — aprofundou meu entendimento do ecossistema Rust e da cultura Unix de ferramentas compostas mais do que qualquer curso.',
      'O resultado mais inesperado foi o Latim. Uma ferramenta construída para resolver um problema prático virou um companheiro de estudo de uma língua clássica. O constraint técnico do fallback se transformou numa vantagem pedagógica. O bug virou feature.',
    ],
    results: [
      'Tradução offline 100% — zero dependência de rede ou APIs externas',
      'Suporte completo ao Latim clássico com fallback automático la → en → pt',
      'Zero texto saindo da máquina — LibreTranslate local via Docker',
      'Zero erros 429 — sem rate limit de APIs de terceiros',
      '~400 linhas de Rust limpo, sem macro magic desnecessária',
    ],
    repoLabel: 'Ver repositório ↗',
    backLabel: '← Voltar ao portfólio',
  },

  footer: '// construído com foco, Rust e um pouco de Latim',
}

// ─────────────────────────────────────────────────────────────────────────────
// EN — English
// ─────────────────────────────────────────────────────────────────────────────
const EN = {
  nav: ['context', 'latin', 'process', 'stack', 'conclusion'],

  hero: {
    eyebrow: '// CASE STUDY · RUST · CLI · 2026',
    title: ['WAYT', 'RANS', 'LATE'],
    accentLine: 'LATE',
    subtitle:
      'A Rust CLI that translates text offline using LibreTranslate via Docker. With automatic Latin fallback — no cloud APIs, no data leakage, no external dependencies.',
    stats: [
      { value: '~400', label: 'lines of Rust' },
      { value: '0', label: 'external APIs' },
      { value: 'la→pt', label: 'Latin fallback' },
      { value: 'offline', label: 'no network' },
    ],
    terminal: {
      title: 'waytranslate — bash',
      lines: [
        { type: 'prompt', text: 'waytranslate' },
        { type: 'dim', text: 'LibreTranslate @ localhost:5000 ✓' },
        { type: 'field', label: 'Text:', value: 'Cogito, ergo sum' },
        { type: 'langs', from: 'la', to: 'pt' },
      ],
      chainComment: '// auto fallback',
      steps: [
        { n: '1.', label: 'la → en:', value: 'I think, therefore I am' },
        { n: '2.', label: 'en → pt:', value: 'Penso, logo existo', accent: true },
      ],
      footer: '✓ translated in 210ms — zero 429 errors',
      chainModel: '// la→pt model missing; chaining...',
    },
    termLabel: 'Rust · Docker · LibreTranslate · reqwest · serde · anyhow',
  },

  context: {
    sectionLabel: '01 / Context',
    heading: 'The itch that\nneeded scratching.',
    paragraphs: [
      'I spend most of my day inside terminals and editors. Every time I came across a sentence in English — or classical Latin — that I didn\'t fully understand, the workflow was always the same: open the browser, navigate to some translation service, paste, read, go back.',
      '*Six steps to understand a single sentence.* It completely breaks focus.',
      'The solution: a Rust CLI that translates right inside the terminal, without leaving the work context. Self-hosted via Docker, offline, with full support for classical Latin through automatic fallback — because the la→pt model simply doesn\'t exist in LibreTranslate.',
      'Result: a single command. Translation in milliseconds. Focus preserved.',
    ],
    pullQuote: '"Six steps to understand a sentence.\nNow it\'s zero."',
    metrics: [
      { value: '6', label: 'steps eliminated' },
      { value: '0', label: 'cloud APIs' },
      { value: '2', label: 'Latin→PT hops' },
      { value: '0', label: '429 errors' },
    ],
  },

  latin: {
    sectionLabel: '02 / Learning Latin With the Tool Itself',
    quote: '"Lingua mortua,\ncode viva."',
    quoteTranslation: 'Dead language, living code.',
    chain: {
      input: { label: 'Cogito, ergo sum', sub: 'latin text' },
      detect: { label: 'if la→pt\ndoes not exist', sub: 'detection' },
      step1: { label: 'la → en', sub: 'step 1' },
      mid: { label: 'I think, therefore I am', sub: 'english' },
      step2: { label: 'en → pt', sub: 'step 2' },
      output: { label: 'Penso, logo existo', sub: 'result' },
    },
    cols: [
      {
        body: 'I spent weeks reading texts by *Marcus Aurelius*, *Cicero*, and fragments of *Virgil* with Waytranslate open in a terminal beside me. The tool I built to solve a practical problem became my classical Latin dictionary.',
        body2: 'Latin has no direct translation to Portuguese in LibreTranslate — the *la→pt* model simply doesn\'t exist. I discovered this while writing the code and had to find a way around it.',
      },
      {
        body: 'The solution was a *two-hop fallback*: the CLI detects the language pair before the HTTP request and chains two calls to the local LibreTranslate — completely transparent to the user.',
        body2: 'Unexpected outcome: seeing the intermediate English translation taught me nuances that a direct translation would have lost. The *bug became a feature.* The technical fallback became a pedagogical advantage.',
      },
    ],
  },

  process: {
    sectionLabel: '03 / Process',
    heading: 'Every technical decision,\njustified.',
    cards: [
      {
        num: 'I',
        phase: 'Phase 01 · Language',
        title: 'Why Rust — and not Python or Go?',
        body: 'A CLI that runs frequently needs fast startup and a minimal footprint. Rust delivers zero-cost abstractions, no garbage collector, no external runtime — and compiles to a single static binary that users never need to install dependencies for.',
        challenge: 'Managing async (reqwest + tokio) without unnecessary overhead in a simple, one-shot CLI.',
        decision: 'Minimal tokio runtime. reqwest in blocking mode — the CLI has no need for concurrency here.',
        challengeLabel: '⚠ Challenge',
        decisionLabel: '✓ Decision',
      },
      {
        num: 'II',
        phase: 'Phase 02 · Infrastructure',
        title: 'Docker + LibreTranslate — privacy is non-negotiable.',
        body: 'A tool that translates text carries an implicit privacy contract with the user. Sending text to a remote API would break that contract. LibreTranslate runs locally on port 5000 via Docker — isolated, reproducible, no API key required.',
        challenge: 'Ensuring the container was running before attempting the request — and failing with a clear message if it wasn\'t.',
        decision: 'reqwest with a short timeout + anyhow for error propagation with human-readable context.',
        challengeLabel: '⚠ Challenge',
        decisionLabel: '✓ Decision',
      },
      {
        num: 'III',
        phase: 'Phase 03 · Automatic Fallback',
        title: 'la → en → pt: two hops, one transparent solution.',
        body: 'The direct la→pt model doesn\'t exist in LibreTranslate. The solution was to detect the language pair before the request and automatically chain two HTTP calls — no extra user input, no confusing error messages.',
        challenge: 'Detecting when the fallback is needed without increasing perceived latency — and without duplicating the HTTP call logic.',
        decision: 'Pattern match on the source/target pair before the request. Two sequential synchronous calls — simple, predictable, no unnecessary abstraction.',
        challengeLabel: '⚠ Challenge',
        decisionLabel: '✓ Decision',
      },
      {
        num: 'IV',
        phase: 'Phase 04 · CLI UX',
        title: 'Minimal interface. Immediate feedback. Zero friction.',
        body: 'A good CLI doesn\'t need documentation. The flow: input text → source language → target language → result. Immediate feedback at every step. The --verbose flag exposes the fallback steps for anyone who wants to inspect them.',
        challenge: 'Showing the two-hop fallback progress without polluting the standard terminal output.',
        decision: 'Clean output by default — just the result. --verbose flag shows each step. Clear separation between usage modes.',
        challengeLabel: '⚠ Challenge',
        decisionLabel: '✓ Decision',
      },
    ],
  },

  stack: {
    sectionLabel: '04 / Stack & Tools',
    heading: 'Every dependency\nearns its place.',
    sub: '6 crates. 1 Docker container. Zero third-party APIs. Zero rate limiting.',
  },

  conclusion: {
    sectionLabel: '05 / Conclusion',
    heading: 'What I learned building\na tool for translation.',
    paragraphs: [
      'Waytranslate solves a real pain point and does so with exactly the right amount of code. Building a genuinely useful CLI from scratch — no template, no specific tutorial — deepened my understanding of the Rust ecosystem and Unix composable tool culture more than any course.',
      'The most unexpected outcome was Latin. A tool built to solve a practical problem became a study companion for a classical language. The technical fallback constraint transformed into a pedagogical advantage. The bug became a feature.',
    ],
    results: [
      '100% offline translation — zero network or external API dependency',
      'Full classical Latin support via automatic la → en → pt fallback',
      'Zero text leaving the machine — local LibreTranslate via Docker',
      'Zero 429 errors — no third-party API rate limiting',
      '~400 lines of clean Rust, no unnecessary macro magic',
    ],
    repoLabel: 'View repository ↗',
    backLabel: '← Back to portfolio',
  },

  footer: '// built with focus, Rust, and a little Latin',
}

// ─────────────────────────────────────────────────────────────────────────────
// ES — Español
// ─────────────────────────────────────────────────────────────────────────────
const ES = {
  nav: ['contexto', 'latín', 'proceso', 'stack', 'conclusión'],

  hero: {
    eyebrow: '// CASO DE ESTUDIO · RUST · CLI · 2026',
    title: ['WAYT', 'RANS', 'LATE'],
    accentLine: 'LATE',
    subtitle:
      'Una CLI en Rust que traduce textos offline usando LibreTranslate vía Docker. Con fallback automático al Latín — sin APIs en la nube, sin fuga de datos, sin depender de nada externo.',
    stats: [
      { value: '~400', label: 'líneas de Rust' },
      { value: '0', label: 'APIs externas' },
      { value: 'la→pt', label: 'fallback Latín' },
      { value: 'offline', label: 'sin red' },
    ],
    terminal: {
      title: 'waytranslate — bash',
      lines: [
        { type: 'prompt', text: 'waytranslate' },
        { type: 'dim', text: 'LibreTranslate @ localhost:5000 ✓' },
        { type: 'field', label: 'Texto:', value: 'Cogito, ergo sum' },
        { type: 'langs', from: 'la', to: 'pt' },
      ],
      chainComment: '// fallback auto',
      steps: [
        { n: '1.', label: 'la → en:', value: 'I think, therefore I am' },
        { n: '2.', label: 'en → pt:', value: 'Penso, logo existo', accent: true },
      ],
      footer: '✓ traducido en 210ms — cero errores 429',
      chainModel: '// modelo la→pt inexistente; encadenando...',
    },
    termLabel: 'Rust · Docker · LibreTranslate · reqwest · serde · anyhow',
  },

  context: {
    sectionLabel: '01 / Contexto',
    heading: 'La incomodidad que\npedía solución.',
    paragraphs: [
      'Paso la mayor parte del día dentro de terminales y editores. Cada vez que encontraba una frase en inglés — o Latín clásico — que no entendía, el flujo era siempre el mismo: abrir el navegador, ir a algún servicio de traducción, pegar, leer, volver.',
      '*Seis pasos para entender una sola oración.* Eso rompe el foco por completo.',
      'La solución: una CLI en Rust que traduce directo en la terminal, sin salir del contexto de trabajo. Auto-hospedada vía Docker, offline, con soporte completo al Latín clásico mediante fallback automático — porque el modelo la→pt simplemente no existe en LibreTranslate.',
      'Resultado: un solo comando. Traducción en milisegundos. Foco preservado.',
    ],
    pullQuote: '"Seis pasos para entender una frase.\nAhora son cero."',
    metrics: [
      { value: '6', label: 'pasos eliminados' },
      { value: '0', label: 'APIs en la nube' },
      { value: '2', label: 'saltos Latín→PT' },
      { value: '0', label: 'errores 429' },
    ],
  },

  latin: {
    sectionLabel: '02 / Aprendiendo Latín con la Propia Herramienta',
    quote: '"Lingua mortua,\ncode viva."',
    quoteTranslation: 'Lengua muerta, código vivo.',
    chain: {
      input: { label: 'Cogito, ergo sum', sub: 'texto latino' },
      detect: { label: 'if la→pt\nno existe', sub: 'detección' },
      step1: { label: 'la → en', sub: 'paso 1' },
      mid: { label: 'I think, therefore I am', sub: 'inglés' },
      step2: { label: 'en → pt', sub: 'paso 2' },
      output: { label: 'Penso, logo existo', sub: 'resultado' },
    },
    cols: [
      {
        body: 'Pasé semanas leyendo textos de *Marco Aurelio*, de *Cicerón* y fragmentos de *Virgilio* con Waytranslate abierto en la terminal al lado. La herramienta que construí para resolver un problema práctico se convirtió en mi diccionario de Latín clásico.',
        body2: 'El Latín no tiene traducción directa al Portugués en LibreTranslate — el modelo *la→pt* simplemente no existe. Lo descubrí escribiendo el código y tuve que encontrar una solución.',
      },
      {
        body: 'La solución fue un *fallback de dos saltos*: la CLI detecta el par de idiomas antes de la solicitud HTTP y encadena dos llamadas al LibreTranslate local — completamente transparente para el usuario.',
        body2: 'Resultado inesperado: al ver la traducción inglesa intermedia, aprendí matices que la traducción directa hubiera perdido. El *bug se convirtió en feature.* El fallback técnico se volvió una ventaja pedagógica.',
      },
    ],
  },

  process: {
    sectionLabel: '03 / Proceso',
    heading: 'Cada decisión técnica,\njustificada.',
    cards: [
      {
        num: 'I',
        phase: 'Fase 01 · Lenguaje',
        title: '¿Por qué Rust — y no Python o Go?',
        body: 'Una CLI que se ejecuta frecuentemente necesita inicio rápido y footprint mínimo. Rust ofrece abstracciones de costo cero, sin garbage collector, sin runtime externo — y compila a un binario estático único que el usuario nunca necesita instalar.',
        challenge: 'Gestionar async (reqwest + tokio) sin overhead innecesario en una CLI de uso simple.',
        decision: 'Runtime mínimo de tokio. reqwest en modo bloqueante — la CLI no necesita concurrencia aquí.',
        challengeLabel: '⚠ Desafío',
        decisionLabel: '✓ Decisión',
      },
      {
        num: 'II',
        phase: 'Fase 02 · Infraestructura',
        title: 'Docker + LibreTranslate — la privacidad no es opcional.',
        body: 'Una herramienta que traduce texto tiene un contrato implícito de privacidad con el usuario. Enviar texto a una API remota rompería ese contrato. LibreTranslate corre localmente en el puerto 5000 vía Docker — aislado, reproducible, sin clave de API.',
        challenge: 'Garantizar que el contenedor estuviera corriendo antes de intentar la solicitud — y fallar con mensaje claro si no lo estaba.',
        decision: 'reqwest con timeout corto + anyhow para propagación de error con contexto legible para el usuario.',
        challengeLabel: '⚠ Desafío',
        decisionLabel: '✓ Decisión',
      },
      {
        num: 'III',
        phase: 'Fase 03 · Fallback Automático',
        title: 'la → en → pt: dos saltos, una solución transparente.',
        body: 'El modelo directo la→pt no existe en LibreTranslate. La solución fue detectar el par de idiomas antes de la solicitud y encadenar dos llamadas HTTP automáticamente — sin input extra del usuario, sin mensajes de error confusos.',
        challenge: 'Detectar cuándo el fallback es necesario sin aumentar la latencia percibida — y sin duplicar la lógica de la llamada HTTP.',
        decision: 'Match en el par source/target antes de la solicitud. Dos llamadas síncronas secuenciales — simple, predecible, sin abstracción innecesaria.',
        challengeLabel: '⚠ Desafío',
        decisionLabel: '✓ Decisión',
      },
      {
        num: 'IV',
        phase: 'Fase 04 · UX de CLI',
        title: 'Interfaz mínima. Feedback inmediato. Cero fricción.',
        body: 'Una buena CLI no necesita documentación. El flujo: texto de entrada → idioma de origen → idioma de destino → resultado. Feedback inmediato en cada paso. El flag --verbose expone las etapas del fallback para quien quiera inspeccionarlas.',
        challenge: 'Mostrar el progreso del fallback de dos saltos sin contaminar la salida estándar de la terminal.',
        decision: 'Salida limpia por defecto — solo el resultado. El flag --verbose muestra cada etapa. Separación clara entre modos de uso.',
        challengeLabel: '⚠ Desafío',
        decisionLabel: '✓ Decisión',
      },
    ],
  },

  stack: {
    sectionLabel: '04 / Stack & Herramientas',
    heading: 'Cada dependencia\nse justifica.',
    sub: '6 crates. 1 contenedor Docker. Cero APIs de terceros. Cero rate limit.',
  },

  conclusion: {
    sectionLabel: '05 / Conclusión',
    heading: 'Lo que aprendí construyendo\nuna herramienta para traducir.',
    paragraphs: [
      'Waytranslate resuelve una incomodidad real y lo hace con exactamente la cantidad correcta de código. Construir una CLI genuinamente útil — sin plantilla, sin tutorial específico — profundizó mi comprensión del ecosistema Rust y la cultura Unix de herramientas componibles más que cualquier curso.',
      'El resultado más inesperado fue el Latín. Una herramienta construida para resolver un problema práctico se convirtió en un compañero de estudio de una lengua clásica. El constraint técnico del fallback se transformó en una ventaja pedagógica. El bug se convirtió en feature.',
    ],
    results: [
      'Traducción offline 100% — cero dependencia de red o APIs externas',
      'Soporte completo al Latín clásico con fallback automático la → en → pt',
      'Cero texto saliendo del equipo — LibreTranslate local vía Docker',
      'Cero errores 429 — sin rate limit de APIs de terceros',
      '~400 líneas de Rust limpio, sin macro magic innecesaria',
    ],
    repoLabel: 'Ver repositorio ↗',
    backLabel: '← Volver al portafolio',
  },

  footer: '// construido con enfoque, Rust y un poco de Latín',
}

// ─────────────────────────────────────────────────────────────────────────────
// DE — Deutsch
// ─────────────────────────────────────────────────────────────────────────────
//
const DE = {
  nav: ['kontext', 'latein', 'prozess', 'stack', 'fazit'],

  hero: {
    eyebrow: '// FALLSTUDIE · RUST · CLI · 2026',
    title: ['WAYT', 'RANS', 'LATE'],
    accentLine: 'LATE',
    subtitle:
      'Eine Rust-CLI, die Texte offline mit LibreTranslate via Docker übersetzt. Mit automatischem Latein-Fallback — keine Cloud-APIs, kein Datenleck, keine externen Abhängigkeiten.',
    stats: [
      { value: '~400', label: 'Zeilen Rust' },
      { value: '0', label: 'externe APIs' },
      { value: 'la→de', label: 'Latein Fallback' },
      { value: 'offline', label: 'kein Netz' },
    ],
    terminal: {
      title: 'waytranslate — bash',
      lines: [
        { type: 'prompt', text: 'waytranslate' },
        { type: 'dim', text: 'LibreTranslate @ localhost:5000 ✓' },
        { type: 'field', label: 'Text:', value: 'Cogito, ergo sum' },
        { type: 'langs', from: 'la', to: 'de' },
      ],
      chainComment: '// Auto-Fallback',
      steps: [
        { n: '1.', label: 'la → en:', value: 'I think, therefore I am' },
        { n: '2.', label: 'en → de:', value: 'Ich denke, also bin ich', accent: true },
      ],
      footer: '✓ übersetzt in 210ms — keine 429 Fehler',
      chainModel: '// la→de Modell fehlt; Verkettung läuft...',
    },
    termLabel: 'Rust · Docker · LibreTranslate · reqwest · serde · anyhow',
  },

  context: {
    sectionLabel: '01 / Kontext',
    heading: 'Ein Problem,\ndas nach einer Lösung verlangte.',
    paragraphs: [
      'Ich verbringe den Großteil meines Tages in Terminals und Editoren. Jedes Mal, wenn ich auf einen Satz stieß, den ich nicht verstand, war der Ablauf derselbe: Browser öffnen, Übersetzungsdienst suchen, einfügen, lesen, zurückkehren.',
      '*Sechs Schritte für einen einzigen Satz.* Das zerstört den Fokus komplett.',
      'Die Lösung: Eine Rust-CLI, die direkt im Terminal übersetzt. Self-hosted via Docker, offline und mit vollem Support für klassisches Latein durch automatischen Fallback — da das la→de Modell in LibreTranslate schlicht nicht existiert.',
      'Ergebnis: Ein einziger Befehl. Übersetzung in Millisekunden. Fokus bewahrt.',
    ],
    pullQuote: '"Sechs Schritte für einen Satz.\nJetzt sind es null."',
    metrics: [
      { value: '6', label: 'Schritte eliminiert' },
      { value: '0', label: 'Cloud-APIs' },
      { value: '2', label: 'Sprünge Latein→DE' },
      { value: '0', label: '429 Fehler' },
    ],
  },

  latin: {
    sectionLabel: '02 / Latein lernen mit dem eigenen Tool',
    quote: '"Lingua mortua,\ncode viva."',
    quoteTranslation: 'Tote Sprache, lebendiger Code.',
    chain: {
      input: { label: 'Cogito, ergo sum', sub: 'lateinischer Text' },
      detect: { label: 'falls la→de\nnicht existiert', sub: 'Erkennung' },
      step1: { label: 'la → en', sub: 'Schritt 1' },
      mid: { label: 'I think, therefore I am', sub: 'Englisch' },
      step2: { label: 'en → de', sub: 'Schritt 2' },
      output: { label: 'Ich denke, also bin ich', sub: 'Ergebnis' },
    },
    cols: [
      {
        body: 'Ich verbrachte Wochen damit, Texte von Marc Aurel und Cicero zu lesen, während Waytranslate im Terminal daneben offen war. Das Tool, das ich für ein praktisches Problem baute, wurde zu meinem Wörterbuch für klassisches Latein.',
        body2: 'Latein hat in LibreTranslate keine direkte Übersetzung ins Deutsche. Dieses la→de Modell existiert einfach nicht. Das merkte ich erst beim Coden und musste es lösen.',
      },
      {
        body: 'Die Lösung war ein *Zwei-Sprung-Fallback*: Die CLI erkennt das Sprachpaar vor dem HTTP-Request und verkettet zwei Aufrufe an das lokale LibreTranslate — völlig transparent für den Nutzer.',
        body2: 'Unerwartetes Ergebnis: Durch die englische Zwischenübersetzung lernte ich Nuancen, die eine direkte Übersetzung verloren hätte. Der *Bug wurde zum Feature.* Der technische Fallback zum pädagogischen Vorteil.',
      },
    ],
  },

  process: {
    sectionLabel: '03 / Prozess',
    heading: 'Jede technische Entscheidung\nist begründet.',
    cards: [
      {
        num: 'I',
        phase: 'Phase 01 · Sprache',
        title: 'Warum Rust — und nicht Python oder Go?',
        body: 'Eine oft genutzte CLI braucht einen schnellen Start und minimalen Footprint. Rust bietet Zero-Cost Abstractions, keinen Garbage Collector, keine externe Runtime — und kompiliert zu einer einzigen statischen Binärdatei.',
        challenge: 'Async-Management (reqwest + tokio) ohne unnötigen Overhead in einer einfachen CLI.',
        decision: 'Tokio mit minimaler Runtime. reqwest im blockierenden Modus — eine CLI braucht hier keine Konkurrenz.',
        challengeLabel: '⚠ Herausforderung',
        decisionLabel: '✓ Entscheidung',
      },
      {
        num: 'II',
        phase: 'Phase 02 · Infrastruktur',
        title: 'Docker + LibreTranslate — Privatsphäre ist Pflicht.',
        body: 'Ein Übersetzungstool hat einen impliziten Vertrag mit dem Nutzer. Texte an eine Remote-API zu senden, würde diesen brechen. LibreTranslate läuft lokal auf Port 5000 via Docker — isoliert und ohne API-Key.',
        challenge: 'Sicherstellen, dass der Container läuft, bevor der Request erfolgt — und klare Fehlermeldungen liefern.',
        decision: 'reqwest mit kurzem Timeout + anyhow für lesbare Fehlerfortpflanzung.',
        challengeLabel: '⚠ Herausforderung',
        decisionLabel: '✓ Entscheidung',
      },
      {
        num: 'III',
        phase: 'Phase 03 · Automatischer Fallback',
        title: 'la → en → de: zwei Sprünge, eine transparente Lösung.',
        body: 'Das direkte la→de Modell fehlt. Die Lösung: Sprachpaar-Erkennung vor dem Request und automatische Verkettung zweier HTTP-Aufrufe — ohne zusätzlichen User-Input.',
        challenge: 'Fallback erkennen, ohne die Latenz spürbar zu erhöhen oder die HTTP-Logik zu verdoppeln.',
        decision: 'Match des Sprachpaars vor dem Request. Zwei sequentielle synchrone Aufrufe — einfach und vorhersehbar.',
        challengeLabel: '⚠ Herausforderung',
        decisionLabel: '✓ Entscheidung',
      },
      {
        num: 'IV',
        phase: 'Phase 04 · CLI UX',
        title: 'Minimale Schnittstelle. Sofortiges Feedback. Null Reibung.',
        body: 'Eine gute CLI braucht keine Doku. Der Flow: Input → Quellsprache → Zielsprache → Ergebnis. Das Flag --verbose macht die Fallback-Schritte bei Bedarf sichtbar.',
        challenge: 'Fortschritt des Zwei-Sprung-Fallbacks zeigen, ohne die Standardausgabe zu überladen.',
        decision: 'Clean Output standardmäßig — nur das Ergebnis. --verbose für Details. Klare Trennung der Modi.',
        challengeLabel: '⚠ Herausforderung',
        decisionLabel: '✓ Entscheidung',
      },
    ],
  },

  stack: {
    sectionLabel: '04 / Stack & Tools',
    heading: 'Jede Abhängigkeit\nist gerechtfertigt.',
    sub: '6 Crates. 1 Docker-Container. Null Drittanbieter-APIs. Null Rate-Limits.',
  },

  conclusion: {
    sectionLabel: '05 / Fazit',
    heading: 'Was ich beim Bau eines\nÜbersetzungstools gelernt habe.',
    paragraphs: [
      'Waytranslate löst ein echtes Ärgernis mit genau der richtigen Menge Code. Eine nützliche CLI ohne Vorlage zu bauen, hat mein Verständnis von Rust und der Unix-Philosophie vertieft.',
      'Das unerwartetste Ergebnis war das Latein. Ein technischer Constraint wurde zum Lernvorteil. Aus dem Bug wurde ein Feature.',
    ],
    results: [
      '100% Offline-Übersetzung — keine Cloud-Abhängigkeit',
      'Voller Latein-Support mit Fallback la → en → de',
      'Keine Daten verlassen den Rechner — lokales LibreTranslate',
      'Null 429 Fehler — keine Rate-Limits von Drittanbietern',
      '~400 Zeilen sauberer Rust-Code, keine unnötige Makro-Magie',
    ],
    repoLabel: 'Repository ansehen ↗',
    backLabel: '← Zurück zum Portfolio',
  },

  footer: '// gebaut mit Fokus, Rust und ein wenig Latein',
};



// ─────────────────────────────────────────────────────────────────────────────
// FR — Français
// ─────────────────────────────────────────────────────────────────────────────
const FR = {
  nav: ['contexte', 'latin', 'processus', 'stack', 'conclusion'],

  hero: {
    eyebrow: '// ÉTUDE DE CAS · RUST · CLI · 2026',
    title: ['WAYT', 'RANS', 'LATE'],
    accentLine: 'LATE',
    subtitle:
      'Un CLI en Rust qui traduit des textes hors ligne via Docker. Avec fallback automatique pour le Latin — pas d\'API cloud, pas de fuite de données, aucune dépendance externe.',
    stats: [
      { value: '~400', label: 'lignes de Rust' },
      { value: '0', label: 'APIs externes' },
      { value: 'la→fr', label: 'fallback Latin' },
      { value: 'offline', label: 'sans réseau' },
    ],
    terminal: {
      title: 'waytranslate — bash',
      lines: [
        { type: 'prompt', text: 'waytranslate' },
        { type: 'dim', text: 'LibreTranslate @ localhost:5000 ✓' },
        { type: 'field', label: 'Texte :', value: 'Cogito, ergo sum' },
        { type: 'langs', from: 'la', to: 'fr' },
      ],
      chainComment: '// fallback auto',
      steps: [
        { n: '1.', label: 'la → en :', value: 'I think, therefore I am' },
        { n: '2.', label: 'en → fr :', value: 'Je pense, donc je suis', accent: true },
      ],
      footer: '✓ traduit en 210ms — sans erreur 429',
      chainModel: '// modèle la→fr inexistant ; enchaînement...',
    },
    termLabel: 'Rust · Docker · LibreTranslate · reqwest · serde · anyhow',
  },

  context: {
    sectionLabel: '01 / Contexte',
    heading: 'Un problème qui\nexigeait une solution.',
    paragraphs: [
      'Je passe la majeure partie de ma journée dans des terminaux et des éditeurs. Chaque fois que je rencontrais une phrase que je ne comprenais pas, le flux était le même : ouvrir le navigateur, chercher un traducteur, coller, lire, revenir.',
      '*Six étapes pour comprendre une seule phrase.* Cela brise complètement la concentration.',
      'La solution : un CLI en Rust qui traduit directement dans le terminal. Auto-hébergé via Docker, hors ligne, et avec support du latin classique via un fallback automatique — car le modèle la→fr n\'existe pas dans LibreTranslate.',
      'Résultat : une seule commande. Traduction en millisecondes. Focus préservé.',
    ],
    pullQuote: '"Six étapes pour une phrase.\nMaintenant, c\'est zéro."',
    metrics: [
      { value: '6', label: 'étapes éliminées' },
      { value: '0', label: 'APIs cloud' },
      { value: '2', label: 'sauts Latin→FR' },
      { value: '0', label: 'erreurs 429' },
    ],
  },

  latin: {
    sectionLabel: '02 / Apprendre le latin avec son propre outil',
    quote: '"Lingua mortua,\ncode viva."',
    quoteTranslation: 'Langue morte, code vivant.',
    chain: {
      input: { label: 'Cogito, ergo sum', sub: 'texte latin' },
      detect: { label: 'si la→fr\nn\'existe pas', sub: 'détection' },
      step1: { label: 'la → en', sub: 'étape 1' },
      mid: { label: 'I think, therefore I am', sub: 'anglais' },
      step2: { label: 'en → fr', sub: 'étape 2' },
      output: { label: 'Je pense, donc je suis', sub: 'résultat' },
    },
    cols: [
      {
        body: 'J\'ai passé des semaines à lire Marc Aurèle et Cicéron avec Waytranslate ouvert dans un coin. L\'outil que j\'ai construit pour résoudre un problème pratique est devenu mon dictionnaire de latin classique.',
        body2: 'Le latin n\'a pas de traduction directe vers le français dans LibreTranslate. Ce modèle la→fr n\'existe tout simplement pas. Je l\'ai découvert en codant.',
      },
      {
        body: 'La solution a été un *fallback en deux sauts* : le CLI détecte la paire de langues avant la requête et enchaîne deux appels à LibreTranslate local — de manière transparente pour l\'utilisateur.',
        body2: 'Résultat inattendu : en voyant la traduction anglaise intermédiaire, j\'ai appris des nuances qu\'une traduction directe perdrait. Le *bug est devenu une feature.*',
      },
    ],
  },

  process: {
    sectionLabel: '03 / Processus',
    heading: 'Chaque décision technique,\njustifiée.',
    cards: [
      {
        num: 'I',
        phase: 'Phase 01 · Langage',
        title: 'Pourquoi Rust — et non Python ou Go ?',
        body: 'Un CLI fréquent nécessite un démarrage rapide. Rust offre des abstractions à coût nul, pas de garbage collector, pas de runtime externe — et compile en un binaire statique unique.',
        challenge: 'Gérer l\'async (reqwest + tokio) sans overhead inutile.',
        decision: 'Tokio avec runtime minimal. reqwest en mode bloquant.',
        challengeLabel: '⚠ Défi',
        decisionLabel: '✓ Décision',
      },
      {
        num: 'II',
        phase: 'Phase 02 · Infrastructure',
        title: 'Docker + LibreTranslate — la vie privée n\'est pas optionnelle.',
        body: 'Envoyer du texte à une API distante brise le contrat de confidentialité. LibreTranslate tourne localement sur le port 5000 via Docker — isolé et sans clé API.',
        challenge: 'Garantir que le conteneur tourne avant la requête.',
        decision: 'reqwest avec timeout court + anyhow pour la propagation d\'erreurs lisibles.',
        challengeLabel: '⚠ Défi',
        decisionLabel: '✓ Décision',
      },
      {
        num: 'III',
        phase: 'Phase 03 · Fallback Automatique',
        title: 'la → en → fr : deux sauts, une solution transparente.',
        body: 'Le modèle direct la→fr est manquant. La solution : détection de la paire avant la requête et enchaînement automatique de deux appels HTTP.',
        challenge: 'Détecter le besoin de fallback sans augmenter la latence perçue.',
        decision: 'Match sur la paire source/target. Deux appels synchrones séquentiels — simple et prévisible.',
        challengeLabel: '⚠ Défi',
        decisionLabel: '✓ Décision',
      },
      {
        num: 'IV',
        phase: 'Phase 04 · UX de CLI',
        title: 'Interface minimale. Feedback immédiat. Zéro friction.',
        body: 'Un bon CLI n\'a pas besoin de doc. Flux : texte → source → cible → résultat. Le flag --verbose expose les étapes du fallback.',
        challenge: 'Afficher la progression du fallback sans polluer la sortie standard.',
        decision: 'Sortie propre par défaut. Flag --verbose pour les détails.',
        challengeLabel: '⚠ Défi',
        decisionLabel: '✓ Décision',
      },
    ],
  },

  stack: {
    sectionLabel: '04 / Stack & Outils',
    heading: 'Chaque dépendance\nse justifie.',
    sub: '6 crates. 1 conteneur Docker. Zéro API tierce. Zéro rate limit.',
  },

  conclusion: {
    sectionLabel: '05 / Conclusion',
    heading: 'Ce que j\'ai appris en construisant\nun outil de traduction.',
    paragraphs: [
      'Waytranslate résout un vrai problème avec la juste quantité de code. Construire un CLI utile a approfondi ma compréhension de Rust et de la philosophie Unix.',
      'Le résultat le plus inattendu a été le latin. Une contrainte technique est devenue un avantage pédagogique. Le bug est devenu une feature.',
    ],
    results: [
      'Traduction 100% hors ligne — zéro dépendance cloud',
      'Support complet du latin avec fallback automatique la → en → fr',
      'Zéro donnée sortant de la machine — LibreTranslate local',
      'Zéro erreur 429 — pas de rate limit',
      '~400 lignes de Rust propre, sans magie de macros inutile',
    ],
    repoLabel: 'Voir le repo ↗',
    backLabel: '← Retour au portfolio',
  },

  footer: '// construit avec focus, Rust et un peu de latin',
};


// ─────────────────────────────────────────────────────────────────────────────
// ZH — 简体中文
// ────────────────────────────────────────────────────────────────────────────-
const ZH = {
  nav: ['背景', '拉丁语', '流程', '技术栈', '结论'],

  hero: {
    eyebrow: '// 案例研究 · RUST · CLI · 2026',
    title: ['WAYT', 'RANS', 'LATE'],
    accentLine: 'LATE',
    subtitle:
      '一个使用 Rust 编写的命令行工具，通过 Docker 调用 LibreTranslate 实现离线翻译。支持拉丁语自动回退机制 — 无需云端 API，无数据泄露，不依赖外部环境。',
    stats: [
      { value: '~400', label: '行 Rust 代码' },
      { value: '0', label: '外部 API' },
      { value: 'la→zh', label: '拉丁语回退' },
      { value: 'offline', label: '完全离线' },
    ],
    terminal: {
      title: 'waytranslate — bash',
      lines: [
        { type: 'prompt', text: 'waytranslate' },
        { type: 'dim', text: 'LibreTranslate @ localhost:5000 ✓' },
        { type: 'field', label: '文本:', value: 'Cogito, ergo sum' },
        { type: 'langs', from: 'la', to: 'zh' },
      ],
      chainComment: '// 自动回退',
      steps: [
        { n: '1.', label: 'la → en:', value: 'I think, therefore I am' },
        { n: '2.', label: 'en → zh:', value: '我思故我在', accent: true },
      ],
      footer: '✓ 翻译耗时 210ms — 无 429 错误',
      chainModel: '// 缺失 la→zh 模型；正在链式翻译...',
    },
    termLabel: 'Rust · Docker · LibreTranslate · reqwest · serde · anyhow',
  },

  context: {
    sectionLabel: '01 / 项目背景',
    heading: '一个亟待解决的\n效率痛点。',
    paragraphs: [
      '我大部分时间都在终端和编辑器中度过。每当我遇到不理解的英文或拉丁文句子时，流程总是：打开浏览器，导航到翻译服务，粘贴，阅读，最后返回工作区。',
      '*仅仅理解一个句子就需要六个步骤。* 这彻底打断了我的心流。',
      '解决方案：一个直接在终端翻译的 Rust CLI。通过 Docker 私有化部署，支持离线运行。针对 LibreTranslate 缺失 la→zh 模型的问题，实现了自动回退机制。',
      '结果：一条命令，毫秒级响应。专注力得以延续。',
    ],
    pullQuote: '"理解一个句子曾经需要六步。\n现在是零步。"',
    metrics: [
      { value: '6', label: '消除的步骤' },
      { value: '0', label: '云端 API' },
      { value: '2', label: '拉丁语跳转' },
      { value: '0', label: '429 错误' },
    ],
  },

  latin: {
    sectionLabel: '02 / 用自己的工具学习拉丁语',
    quote: '"Lingua mortua,\ncode viva."',
    quoteTranslation: '语言已死，代码永生。',
    chain: {
      input: { label: 'Cogito, ergo sum', sub: '拉丁语原文' },
      detect: { label: '若 la→zh\n不存在', sub: '自动检测' },
      step1: { label: 'la → en', sub: '步骤 1' },
      mid: { label: 'I think, therefore I am', sub: '英文中间层' },
      step2: { label: 'en → zh', sub: '步骤 2' },
      output: { label: '我思故我在', sub: '最终结果' },
    },
    cols: [
      {
        body: '我花了几周时间阅读马可·奥勒留和西塞罗的著作，终端一侧始终运行着 Waytranslate。这个为了解决实际效率问题而开发的工具，意外成了我的古典拉丁语词典。',
        body2: '在 LibreTranslate 中，拉丁语无法直接翻译成中文。la→zh 模型根本不存在。我在写代码时发现了这点，并决定解决它。',
      },
      {
        body: '解决方案是 *双跳回退机制*：CLI 在发起请求前检测语言对，并自动链接两次本地 API 调用。这对用户来说是完全透明的。',
        body2: '意外收获：通过观察英文中间翻译，我学到了直接翻译可能会丢失的细微差别。*Bug 变成了特性。* 这种技术回退转化为了学习优势。',
      },
    ],
  },

  process: {
    sectionLabel: '03 / 开发流程',
    heading: '每一个技术决策\n皆有据可依。',
    cards: [
      {
        num: 'I',
        phase: '阶段 01 · 语言选型',
        title: '为什么选择 Rust 而非 Python 或 Go？',
        body: '高频使用的 CLI 需要极快的启动速度和极小的内存占用。Rust 提供零成本抽象，无垃圾回收，无外部运行时，并能编译成单一静态二进制文件。',
        challenge: '在简单的 CLI 中处理异步（reqwest + tokio）而不引入冗余开销。',
        decision: '使用 tokio 最小运行时。reqwest 设为阻塞模式 — 此场景下无需并发。',
        challengeLabel: '⚠ 挑战',
        decisionLabel: '✓ 决策',
      },
      {
        num: 'II',
        phase: '阶段 02 · 基础设施',
        title: 'Docker + LibreTranslate — 隐私并非选项。',
        body: '翻译工具与用户之间存在隐式的隐私契约。将文本发送到远程 API 会破坏这种信任。LibreTranslate 通过 Docker 在本地 5000 端口运行 — 隔离、可复现、无需 API 密钥。',
        challenge: '确保在发起请求前容器已就绪，若未运行则提供清晰的错误提示。',
        decision: 'reqwest 设置短超时 + 使用 anyhow 进行人性化的错误传播。',
        challengeLabel: '⚠ 挑战',
        decisionLabel: '✓ 决策',
      },
      {
        num: 'III',
        phase: '阶段 03 · 自动回退机制',
        title: 'la → en → zh：双跳翻译，透明方案。',
        body: '由于 la→zh 模型缺失，方案是在请求前检测目标语言并自动串联两次 HTTP 调用。用户感知不到复杂性，也不会看到混乱的错误信息。',
        challenge: '检测回退需求时需避免增加感知延迟，且不重复 HTTP 调用逻辑。',
        decision: '请求前匹配源/目标语言对。使用两次顺序同步调用 — 简单、可预测。',
        challengeLabel: '⚠ 挑战',
        decisionLabel: '✓ 决策',
      },
      {
        num: 'IV',
        phase: '阶段 04 · CLI 交互体验',
        title: '极简界面。即时反馈。零摩擦感。',
        body: '好的 CLI 不需要文档。流程：输入文本 → 源语言 → 目标语言 → 结果。每个步骤都有反馈。--verbose 标志可展示回退细节。',
        challenge: '在不污染标准输出的前提下，展示双跳翻译的进度。',
        decision: '默认纯净输出。--verbose 展示每个阶段。清晰分离使用模式。',
        challengeLabel: '⚠ 挑战',
        decisionLabel: '✓ 决策',
      },
    ],
  },

  stack: {
    sectionLabel: '04 / 技术栈与工具',
    heading: '每一项依赖\n都有其必要性。',
    sub: '6 个 Crates。1 个 Docker 容器。零第三方 API。零频率限制。',
  },

  conclusion: {
    sectionLabel: '05 / 结论',
    heading: '构建翻译工具后的\n感悟与收获。',
    paragraphs: [
      'Waytranslate 用恰到好处的代码解决了一个真实的烦恼。不依赖教程、独立构建一个真正实用的 CLI，让我对 Rust 生态和 Unix 工具文化的理解远超任何课程。',
      '最意外的收获是拉丁语。原本的技术限制演变成了学习优势。Bug 终成特性。',
    ],
    results: [
      '100% 离线翻译 — 零云端依赖',
      '完善的拉丁语支持，自动实现 la → en → zh 回退',
      '数据不出本地 — Docker 运行本地服务',
      '零 429 错误 — 无需面对第三方 API 的频率限制',
      '~400 行简洁 Rust 代码，无过度宏魔法',
    ],
    repoLabel: '查看仓库 ↗',
    backLabel: '← 返回作品集',
  },

  footer: '// 始于专注，基于 Rust，辅以少量拉丁语',
};



// ─────────────────────────────────────────────────────────────────────────────
// JA — 日本語
// ─────────────────────────────────────────────────────────────────────────────

const JA = {
  nav: ['背景', 'ラテン語', 'プロセス', 'スタック', '結論'],

  hero: {
    eyebrow: '// ケーススタディ · RUST · CLI · 2026',
    title: ['WAYT', 'RANS', 'LATE'],
    accentLine: 'LATE',
    subtitle:
      'Docker上のLibreTranslateを使用し、オフラインで翻訳を行うRust製CLI。ラテン語の自動フォールバック機能を搭載 — クラウドAPI不要、データ流出なし。',
    stats: [
      { value: '~400', label: 'Rust行数' },
      { value: '0', label: '外部API' },
      { value: 'la→ja', label: 'ラテン語対応' },
      { value: 'offline', label: '完全オフライン' },
    ],
    terminal: {
      title: 'waytranslate — bash',
      lines: [
        { type: 'prompt', text: 'waytranslate' },
        { type: 'dim', text: 'LibreTranslate @ localhost:5000 ✓' },
        { type: 'field', label: 'テキスト:', value: 'Cogito, ergo sum' },
        { type: 'langs', from: 'la', to: 'ja' },
      ],
      chainComment: '// 自動フォールバック',
      steps: [
        { n: '1.', label: 'la → en:', value: 'I think, therefore I am' },
        { n: '2.', label: 'en → ja:', value: '我思う、ゆえに我あり', accent: true },
      ],
      footer: '✓ 210msで翻訳完了 — 429エラーなし',
      chainModel: '// la→jaモデル不在。連鎖翻訳中...',
    },
    termLabel: 'Rust · Docker · LibreTranslate · reqwest · serde · anyhow',
  },

  context: {
    sectionLabel: '01 / プロジェクトの背景',
    heading: '解決を求める\n日常のわずらわしさ。',
    paragraphs: [
      '私は一日の大半をターミナルとエディタの中で過ごします。理解できない英文やラテン語に出会うたび、ブラウザを開き、翻訳サービスへ移動し、貼り付けて読み、また戻る。',
      '*たった一つの文を理解するのに6つのステップ。* これでは集中力が完全に途切れてしまいます。',
      '解決策：ターミナルから直接翻訳できるRust製CLI。Dockerによるセルフホスト、オフライン対応。LibreTranslateには存在しないla→jaモデルを補う自動フォールバック機能を実装。',
      '結果：コマンド一つ。数ミリ秒での翻訳。集中力の維持。',
    ],
    pullQuote: '"理解まで6ステップ必要だった。\n今はゼロ。"',
    metrics: [
      { value: '6', label: '削減ステップ' },
      { value: '0', label: 'クラウドAPI' },
      { value: '2', label: 'ラテン語変換' },
      { value: '0', label: '429エラー' },
    ],
  },

  latin: {
    sectionLabel: '02 / 自作ツールでラテン語を学ぶ',
    quote: '"Lingua mortua,\ncode viva."',
    quoteTranslation: '死せる言語、生けるコード。',
    chain: {
      input: { label: 'Cogito, ergo sum', sub: 'ラテン語原文' },
      detect: { label: 'la→jaが\nない場合', sub: '自動検知' },
      step1: { label: 'la → en', sub: 'ステップ1' },
      mid: { label: 'I think, therefore I am', sub: '英語' },
      step2: { label: 'en → ja', sub: 'ステップ2' },
      output: { label: '我思う、ゆえに我あり', sub: '結果' },
    },
    cols: [
      {
        body: 'マルクス・アウレリウスやキケロの著作を読みながら、ターミナルの片隅でWaytranslateを動かし続けました。実用的な問題を解決するために作ったツールが、いつの間にか古典ラテン語の辞書になっていました。',
        body2: 'LibreTranslateにおいて、ラテン語から日本語への直接翻訳モデル（la→ja）は存在しません。コードを書きながらその事実に気づき、解決策が必要になりました。',
      },
      {
        body: '解決策は *2段階フォールバック* です。CLIがリクエスト前に言語ペアを検知し、ローカルのAPI呼び出しを自動で連鎖させます。ユーザー側からは完全に透過的です。',
        body2: '予期せぬ副産物：中間の英語翻訳を見ることで、直接翻訳では失われがちなニュアンスを学ぶことができました。*バグが機能に変わった* 瞬間です。',
      },
    ],
  },

  process: {
    sectionLabel: '03 / プロセス',
    heading: 'すべての技術選定には\n理由がある。',
    cards: [
      {
        num: 'I',
        phase: 'フェーズ01 · 言語選定',
        title: 'なぜPythonやGoではなくRustなのか？',
        body: '頻繁に起動するCLIには、高速な起動と最小限のフットプリントが必要です。Rustはゼロコスト抽象化、GCなし、外部ランタイムなしを実現し、単一の静的バイナリとして配布可能です。',
        challenge: 'シンプルなCLIにおいて、不要なオーバーヘッドなしにasyncを管理すること。',
        decision: '最小構成のtokioを採用。reqwestはブロッキングモードで使用 — このCLIに並行処理は不要でした。',
        challengeLabel: '⚠ 課題',
        decisionLabel: '✓ 決定',
      },
      {
        num: 'II',
        phase: 'フェーズ02 · インフラ',
        title: 'Docker + LibreTranslate — プライバシーは妥協不可。',
        body: '翻訳ツールはユーザーとの間に暗黙のプライバシー契約を結んでいます。外部APIへの送信はその契約に反します。Docker上でローカル動作させることで、隔離と再現性を確保。',
        challenge: 'リクエスト前にコンテナが起動しているか確認し、異常時に明快なエラーを出すこと。',
        decision: 'reqwestのタイムアウト設定とanyhowによる、ユーザーに分かりやすいエラー伝播。',
        challengeLabel: '⚠ 課題',
        decisionLabel: '✓ 決定',
      },
      {
        num: 'III',
        phase: 'フェーズ03 · 自動フォールバック',
        title: 'la → en → ja：2ステップ、透明な解決策。',
        body: 'la→jaモデルがない問題を、リクエスト前の検知とHTTP呼び出しの自動連鎖で解決。ユーザーに追加の入力を強いることも、混乱させることもありません。',
        challenge: '遅延を感じさせることなく、かつコードを重複させずにフォールバックを実装すること。',
        decision: 'リクエスト前に言語ペアを照合。2つの同期呼び出しを順次実行するシンプルで予測可能な設計。',
        challengeLabel: '⚠ 課題',
        decisionLabel: '✓ 決定',
      },
      {
        num: 'IV',
        phase: 'フェーズ04 · CLIのUX',
        title: '最小限のUI。即時のフィードバック。ゼロ摩擦。',
        body: '優れたCLIに説明書は不要。テキスト入力から結果まで、各ステップで即座にフィードバックを返します。--verboseフラグで連鎖の過程を確認することも可能です。',
        challenge: '標準出力を汚さずに、2段階フォールバックの進捗を表示すること。',
        decision: 'デフォルトはクリーンな出力。詳細確認用に--verboseフラグを用意し、モードを明確に分離。',
        challengeLabel: '⚠ 課題',
        decisionLabel: '✓ 決定',
      },
    ],
  },

  stack: {
    sectionLabel: '04 / スタックとツール',
    heading: 'すべての依存関係は\n正当化される。',
    sub: '6つのCrate、1つのDockerコンテナ。外部APIゼロ、レートリミットゼロ。',
  },

  conclusion: {
    sectionLabel: '05 / 結論',
    heading: '翻訳ツールを構築して\n得られた学び。',
    paragraphs: [
      'Waytranslateは日常の不便を、適切な量のコードで解決しました。テンプレートに頼らず実用的なCLIを作ることで、RustエコシステムとUnix哲学への理解が深まりました。',
      '最も意外な結果はラテン語でした。技術的な制約が学習上の利点に転じ、バグが機能へと昇華されました。',
    ],
    results: [
      '100% オフライン翻訳 — クラウド依存度ゼロ',
      '自動フォールバック la → en → ja によるラテン語対応',
      'データがマシン外に出ない — ローカルDocker環境',
      '429エラーなし — 外部APIのレートリミットを回避',
      '不要なマクロを排した約400行のクリーンなRustコード',
    ],
    repoLabel: 'リポジトリを見る ↗',
    backLabel: '← ポートフォリオに戻る',
  },

  footer: '// 集中力、Rust、そして少しのラテン語で構築',
};

// ─────────────────────────────────────────────────────────────────────────────
// Export — mesmo padrão de waytranslate-data.js
// ─────────────────────────────────────────────────────────────────────────────
//

const CASE_DATA = { PT, EN, ES, DE, FR, ZH, JA }
export default CASE_DATA
