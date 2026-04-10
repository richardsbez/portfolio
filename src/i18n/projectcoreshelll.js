/**
 * coreShelll.js — Traduções PT / EN para a página de case study
 * "O Paradoxo da Malha Global Híbrida"
 *
 * Importação no componente:
 *   import CASE_DATA, { CASE_LANGS, STACK } from '../../i18n/coreShelll.js'
 */

// ─────────────────────────────────────────────────────────────────────────────
// Idiomas disponíveis
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

// ─────────────────────────────────────────────────────────────────────────────
// Stack — label fixo, desc bilíngue
// ─────────────────────────────────────────────────────────────────────────────
export const STACK = [
  {
    label: 'Rust',
    desc: {
      PT: 'Backend core e compilação para Wasm',
      EN: 'Backend core and compilation to Wasm',
      ES: 'Core del backend y compilación a Wasm',
      DE: 'Backend-Core und Kompilierung nach Wasm',
      FR: 'Cœur du backend et compilation vers Wasm',
      ZH: '后端核心与 Wasm 编译',
      JA: 'バックエンドコアおよび Wasm へのコンパイル',
    },
  },
  {
    label: 'WebTransport',
    desc: {
      PT: 'HTTP/3 sobre QUIC, streams UDP-like',
      EN: 'HTTP/3 over QUIC, UDP-like streams',
      ES: 'HTTP/3 sobre QUIC, streams tipo UDP',
      DE: 'HTTP/3 über QUIC, UDP-ähnliche Streams',
      FR: 'HTTP/3 sur QUIC, flux de type UDP',
      ZH: '基于 QUIC 的 HTTP/3，类 UDP 流',
      JA: 'QUIC 上の HTTP/3、UDP ライクなストリーム',
    },
  },
  {
    label: 'CRDTs',
    desc: {
      PT: 'Convergência matemática sem conflitos',
      EN: 'Conflict-free mathematical convergence',
      ES: 'Convergencia matemática sin conflictos',
      DE: 'Konfliktfreie mathematische Konvergenz',
      FR: 'Convergence mathématique sans conflit',
      ZH: '无冲突的数学收敛',
      JA: '衝突のない数学的収束',
    },
  },
  {
    label: 'WebAssembly',
    desc: {
      PT: 'Cálculo em velocidade nativa no browser',
      EN: 'Near-native speed computation in the browser',
      ES: 'Cálculo a velocidad nativa en el navegador',
      DE: 'Berechnung in nativer Geschwindigkeit im Browser',
      FR: 'Calcul à vitesse native dans le navigateur',
      ZH: '浏览器中的原生级速度计算',
      JA: 'ブラウザでのネイティブ速度に近い計算',
    },
  },
  {
    label: 'SharedArrayBuffer',
    desc: {
      PT: 'Memória compartilhada entre threads',
      EN: 'Shared memory across threads',
      ES: 'Memoria compartida entre hilos',
      DE: 'Gemeinsamer Speicher über Threads hinweg',
      FR: 'Mémoire partagée entre les threads',
      ZH: '跨线程共享内存',
      JA: 'スレッド間共有メモリ',
    },
  },
  {
    label: 'Web Workers',
    desc: {
      PT: 'Multithreading real no frontend',
      EN: 'Real multithreading in the frontend',
      ES: 'Multihilo real en el frontend',
      DE: 'Echtes Multithreading im Frontend',
      FR: 'Véritable multithreading dans le frontend',
      ZH: '前端真正的多线程',
      JA: 'フロントエンドでの真のマルチスレッド',
    },
  },
  {
    label: 'WebGL / Canvas 2D',
    desc: {
      PT: 'Renderização de 100k+ pontos',
      EN: 'Rendering 100k+ data points',
      ES: 'Renderizado de más de 100k puntos',
      DE: 'Rendering von über 100k Datenpunkten',
      FR: 'Rendu de plus de 100k points de données',
      ZH: '10万级以上数据点渲染',
      JA: '10万以上のデータポイントの描画',
    },
  },
  {
    label: 'SQLite (Wasm)',
    desc: {
      PT: 'Persistência local via IndexedDB',
      EN: 'Local persistence via IndexedDB',
      ES: 'Persistencia local a través de IndexedDB',
      DE: 'Lokale Persistenz über IndexedDB',
      FR: 'Persistance locale via IndexedDB',
      ZH: '通过 IndexedDB 实现本地持久化',
      JA: 'IndexedDB によるローカル永続化',
    },
  },
  {
    label: 'Edge Computing',
    desc: {
      PT: 'Cloudflare Workers para baixo RTT',
      EN: 'Cloudflare Workers for low RTT',
      ES: 'Cloudflare Workers para un RTT bajo',
      DE: 'Cloudflare Workers für niedrige RTT',
      FR: 'Cloudflare Workers pour un RTT faible',
      ZH: '低环回时间 (RTT) 的 Cloudflare Workers',
      JA: '低 RTT を実現する Cloudflare Workers',
    },
  },
]
// ─────────────────────────────────────────────────────────────────────────────
// Dados por idioma
// ─────────────────────────────────────────────────────────────────────────────
const CASE_DATA = {

  // ───────────────────────────────────────────────────────────────
  PT: {
    // ── Nav ──────────────────────────────────────────────────────
    navHome: 'Voltar',
    navTitle: 'CORE-SHELL ARCHITECTURE',
    nav: ['Contexto', 'Problema', 'Solução', 'Stack', 'Reflexão'],

    // ── Hero ─────────────────────────────────────────────────────
    hero: {
      caseLabel: 'Freelancer',
      archLabel: 'Arquitetura de Software',
      titleLine1: 'O Paradoxo da',
      titleAccent: 'Malha Global',
      titleEnd: 'Híbrida',
      subtitle:
        'Como redesenhamos as regras do que um browser pode fazer — ' +
        'transformando o frontend em um nó de computação distribuída capaz de ' +
        'processar análises financeiras em tempo real, com consistência matemática ' +
        'e latência sub-50ms em escala global.',
      meta: [
        { key: 'Tecnologia', value: 'Rust · Wasm · CRDT' },
        { key: 'Camada', value: 'Frontend + Backend' },
        { key: 'Protocolo', value: 'WebTransport / HTTP3' },
      ],
      scrollHint: 'scroll para explorar',
    },

    // ── Stats bar ────────────────────────────────────────────────
    stats: [
      { n: 50, sfx: 'ms', label: 'Latência máxima entre nós' },
      { n: 100, sfx: 'k+', label: 'Pontos renderizados em tempo real' },
      { n: 60, sfx: ' FPS', label: 'UI thread estável sob carga' },
      { n: 0, sfx: ' conflitos', label: 'Merges via CRDTs matemáticos' },
    ],

    // ── Contexto / Problemas ─────────────────────────────────────
    context: {
      sectionLabel: '// Contexto',
      headingPre: 'Três restrições que',
      headingAccent: 'não deveriam coexistir',
      problems: [
        {
          id: '01',
          title: 'Processamento Distribuído no Cliente',
          body: 'O backend não escala para trilhões de cálculos simultâneos. ' +
            'A solução: transformar cada browser em um nó de processamento ' +
            'sem expor modelos proprietários.',
        },
        {
          id: '02',
          title: 'CoFreelancernsistência Zero-Latency',
          body: 'Mudanças feitas em Tóquio precisam aparecer em Nova York em ' +
            'menos de 50ms — ignorando as limitações físicas da velocidade ' +
            'da luz em cabos transoceânicos.',
        },
        {
          id: '03',
          title: 'Persistência Reativa e Offline',
          body: 'O sistema deve continuar processando offline, resolvendo ' +
            'automaticamente conflitos de estado (branching) ao reconectar.',
        },
      ],
    },

    // ── Motivação ────────────────────────────────────────────────
    motivation: {
      sectionLabel: '// Motivação',
      headingPre: 'Por que eu quis',
      headingAccent: 'resolver esse problema',
      paragraphs: [
        'A maioria das plataformas financeiras em tempo real sofre do mesmo mal: ' +
        'arquiteturas "cliente burro / servidor inteligente" que criam um único ponto ' +
        'de falha, gargalos de processamento e latência inevitável por distância física.',
        'O que me fascinava era a contradição: como garantir consistência global num ' +
        'sistema onde a velocidade da luz é um limite real? A resposta não estava em ' +
        'infra — estava em mudar o paradigma de sincronização.',
        'CRDTs me permitiram abandonar a ideia de "quem tem a verdade" e substituí-la ' +
        'por "todas as versões convergem matematicamente". Isso muda tudo.',
      ],
      terminalFile: 'core_shell_arch.rs',
    },

    // ── Arquitetura / Soluções ───────────────────────────────────
    arch: {
      sectionLabel: '// Arquitetura',
      headingPre: 'Core-Shell:',
      headingAccent: 'três camadas que se retroalimentam',
      solutions: [
        {
          layer: 'BACKEND',
          subtitle: 'O Orquestrador de Agentes',
          stack: 'Rust + WebTransport',
          color: '#00f5d4',
          points: [
            'WebTransport (HTTP/3) elimina overhead de handshake e habilita fluxos UDP-like',
            'CRDTs garantem convergência matemática — sem deadlocks, sem conflitos de merge',
            'Múltiplos usuários editam o mesmo dataset; o estado final sempre converge',
          ],
        },
        {
          layer: 'FRONTEND',
          subtitle: 'O Engine de Execução',
          stack: 'Wasm + SharedArrayBuffer',
          color: '#f5a623',
          points: [
            'Motor de cálculo compilado de Rust/C++ para Wasm — velocidade quase nativa',
            'Web Workers + SharedArrayBuffer mantêm a UI a 60 FPS estáveis',
            'Canvas 2D / WebGL renderiza 100.000+ pontos sem travar o DOM',
          ],
        },
        {
          layer: 'SYNC',
          subtitle: 'A Mágica da Sincronização',
          stack: 'Local-First + Edge',
          color: '#e040fb',
          points: [
            'SQLite via Wasm: toda ação é gravada localmente antes de propagar',
            'Edge Computing (Cloudflare Workers) valida mutações no ponto mais próximo',
            'Optimistic UI: o frontend prevê a resposta do servidor e ajusta suavemente',
          ],
        },
      ],
    },

    // ── Fluxo de Dados ───────────────────────────────────────────
    dataflow: {
      sectionLabel: '// Fluxo de Dados',
      heading: 'Como um write percorre a malha',
      file: 'data_flow.log',
      lines: [
        { color: 'cyan', tag: '[USER-ACTION]', text: 'Usuário A altera parâmetro de risco (Tóquio)' },
        { color: 'amber', tag: '  └─ [LOCAL]', text: 'Gravado em SQLite/IndexedDB instantaneamente' },
        { color: 'amber', tag: '  └─ [OPTIMISTIC]', text: 'UI renderiza previsão sem esperar confirmação' },
        { color: 'violet', tag: '  └─ [EDGE]', text: 'Mutação validada no CF Worker mais próximo' },
        { color: 'violet', tag: '  └─ [CRDT-MERGE]', text: 'Estado mesclado matematicamente no orquestrador' },
        { color: 'cyan', tag: '  └─ [BROADCAST]', text: 'WebTransport stream para todos os nós conectados' },
        { color: 'cyan', tag: '  └─ [WASM-CALC]', text: 'Worker processa delta em Wasm (off main thread)' },
        { color: 'amber', tag: '  └─ [RENDER]', text: 'WebGL/Canvas atualiza Usuário B (Nova York)' },
      ],
      rttLabel: '  ✓  RTT total',
      rttValue: '< 50ms',
      rttComment: '// convergência garantida por CRDT',
    },

    // ── Stack section ────────────────────────────────────────────
    stackSection: {
      sectionLabel: '// Stack Completa',
      headingPre: 'Cada tecnologia escolhida',
      headingAccent: 'tem uma razão de ser',
    },

    // ── Reflexão / Aprendizados ──────────────────────────────────
    learnings: {
      sectionLabel: '// Reflexão',
      headingPre: 'O que esse projeto',
      headingAccent: 'mudou na minha forma de pensar',
      items: [
        {
          icon: '⚡',
          title: 'Frontend não é só UI',
          body: 'Transformar o browser em nó de computação quebrou minha noção de ' +
            'onde a lógica deve viver. A fronteira entre cliente e servidor é ' +
            'uma escolha de design, não uma lei.',
        },
        {
          icon: '∞',
          title: 'Convergência > Consistência',
          body: 'Parar de lutar por consistência imediata e aceitar convergência ' +
            'matemática (CRDTs) simplificou o problema de forma radical. ' +
            'Às vezes o melhor lock é nenhum lock.',
        },
        {
          icon: '⬡',
          title: 'Latência é topologia',
          body: 'Reduzir latência não é só hardware. Mover a validação para a borda ' +
            '(edge) e fazer predição local muda a percepção do usuário antes ' +
            'mesmo de o pacote chegar.',
        },
      ],
    },

    // ── CTA ──────────────────────────────────────────────────────
    cta: {
      sectionLabel: '// Próximo passo',
      headingPre: 'Quer conversar sobre',
      headingAccent: 'arquiteturas impossíveis',
      subtitle: 'me encontre no portfolio ou manda uma mensagem direta',
      backLabel: '← Voltar ao Portfolio',
    },

    // ── Footer ───────────────────────────────────────────────────
    footer: {
      left: 'CORE-SHELL ARCHITECTURE — CASE STUDY',
      right: 'RUST · WASM · CRDT · WEBTRANSPORT',
    },
  },

  // ───────────────────────────────────────────────────────────────
  EN: {
    // ── Nav ──────────────────────────────────────────────────────
    navHome: 'Back',
    navTitle: 'CORE-SHELL ARCHITECTURE',
    nav: ['Context', 'Problem', 'Solution', 'Stack', 'Reflection'],

    // ── Hero ─────────────────────────────────────────────────────
    hero: {
      caseLabel: 'Freelancer',
      archLabel: 'Software Architecture',
      titleLine1: 'The Paradox of the',
      titleAccent: 'Global Hybrid',
      titleEnd: 'Mesh',
      subtitle:
        'How we rewrote the rules of what a browser can do — turning the frontend ' +
        'into a distributed computation node capable of processing real-time financial ' +
        'analytics with mathematical consistency and sub-50ms latency at global scale.',
      meta: [
        { key: 'Technology', value: 'Rust · Wasm · CRDT' },
        { key: 'Layer', value: 'Frontend + Backend' },
        { key: 'Protocol', value: 'WebTransport / HTTP3' },
      ],
      scrollHint: 'scroll to explore',
    },

    // ── Stats bar ────────────────────────────────────────────────
    stats: [
      { n: 50, sfx: 'ms', label: 'Max latency between nodes' },
      { n: 100, sfx: 'k+', label: 'Data points rendered in real time' },
      { n: 60, sfx: ' FPS', label: 'Stable UI thread under full load' },
      { n: 0, sfx: ' conflicts', label: 'Merges via mathematical CRDTs' },
    ],

    // ── Context / Problems ───────────────────────────────────────
    context: {
      sectionLabel: '// Context',
      headingPre: 'Three constraints that',
      headingAccent: "shouldn't coexist",
      problems: [
        {
          id: '01',
          title: 'Distributed Client-Side Processing',
          body: "The backend can't scale to trillions of simultaneous calculations. " +
            'The fix: turn every browser into a processing node without ' +
            'exposing proprietary models.',
        },
        {
          id: '02',
          title: 'Zero-Latency Consistency',
          body: 'Changes made in Tokyo need to appear in New York in under 50ms — ' +
            'ignoring the physical limits of light speed over trans-oceanic cables.',
        },
        {
          id: '03',
          title: 'Reactive & Offline Persistence',
          body: 'The system must keep processing offline, automatically resolving ' +
            'state conflicts (branching) when the network reconnects.',
        },
      ],
    },

    // ── Motivation ───────────────────────────────────────────────
    motivation: {
      sectionLabel: '// Motivation',
      headingPre: 'Why I wanted to',
      headingAccent: 'solve this problem',
      paragraphs: [
        'Most real-time financial platforms share the same flaw: "dumb client / smart server" ' +
        'architectures that create a single point of failure, processing bottlenecks, and ' +
        'unavoidable latency from physical distance.',
        'What fascinated me was the contradiction: how do you guarantee global consistency ' +
        'in a system where the speed of light is a real limit? The answer wasn\'t in infra ' +
        '— it was in changing the synchronisation paradigm.',
        'CRDTs let me drop the question of "who holds the truth" and replace it with ' +
        '"all versions converge mathematically." That changes everything.',
      ],
      terminalFile: 'core_shell_arch.rs',
    },

    // ── Architecture / Solutions ─────────────────────────────────
    arch: {
      sectionLabel: '// Architecture',
      headingPre: 'Core-Shell:',
      headingAccent: 'three self-reinforcing layers',
      solutions: [
        {
          layer: 'BACKEND',
          subtitle: 'The Agent Orchestrator',
          stack: 'Rust + WebTransport',
          color: '#00f5d4',
          points: [
            'WebTransport (HTTP/3) eliminates handshake overhead and enables UDP-like streams',
            'CRDTs guarantee mathematical convergence — no deadlocks, no merge conflicts',
            'Multiple users edit the same dataset; the final state always converges',
          ],
        },
        {
          layer: 'FRONTEND',
          subtitle: 'The Execution Engine',
          stack: 'Wasm + SharedArrayBuffer',
          color: '#f5a623',
          points: [
            'Calculation engine compiled from Rust/C++ to Wasm — near-native speed',
            'Web Workers + SharedArrayBuffer keep the UI at a stable 60 FPS',
            'Canvas 2D / WebGL renders 100,000+ data points without freezing the DOM',
          ],
        },
        {
          layer: 'SYNC',
          subtitle: 'The Sync Magic',
          stack: 'Local-First + Edge',
          color: '#e040fb',
          points: [
            'SQLite via Wasm: every action is written locally before propagating',
            'Edge Computing (Cloudflare Workers) validates mutations at the nearest PoP',
            'Optimistic UI: the frontend predicts the server response and adjusts smoothly',
          ],
        },
      ],
    },

    // ── Data Flow ────────────────────────────────────────────────
    dataflow: {
      sectionLabel: '// Data Flow',
      heading: 'How a write traverses the mesh',
      file: 'data_flow.log',
      lines: [
        { color: 'cyan', tag: '[USER-ACTION]', text: 'User A changes risk parameter (Tokyo)' },
        { color: 'amber', tag: '  └─ [LOCAL]', text: 'Written to SQLite/IndexedDB instantly' },
        { color: 'amber', tag: '  └─ [OPTIMISTIC]', text: 'UI renders prediction without waiting for confirm' },
        { color: 'violet', tag: '  └─ [EDGE]', text: 'Mutation validated at nearest CF Worker' },
        { color: 'violet', tag: '  └─ [CRDT-MERGE]', text: 'State merged mathematically in the orchestrator' },
        { color: 'cyan', tag: '  └─ [BROADCAST]', text: 'WebTransport stream to all connected nodes' },
        { color: 'cyan', tag: '  └─ [WASM-CALC]', text: 'Worker processes delta in Wasm (off main thread)' },
        { color: 'amber', tag: '  └─ [RENDER]', text: 'WebGL/Canvas updates User B (New York)' },
      ],
      rttLabel: '  ✓  Total RTT',
      rttValue: '< 50ms',
      rttComment: '// convergence guaranteed by CRDT',
    },

    // ── Stack section ────────────────────────────────────────────
    stackSection: {
      sectionLabel: '// Full Stack',
      headingPre: 'Every technology chosen',
      headingAccent: 'has a reason to exist',
    },

    // ── Reflection / Learnings ───────────────────────────────────
    learnings: {
      sectionLabel: '// Reflection',
      headingPre: 'What this project',
      headingAccent: 'changed in how I think',
      items: [
        {
          icon: '⚡',
          title: 'Frontend is not just UI',
          body: 'Turning the browser into a computation node broke my assumption about ' +
            'where logic should live. The boundary between client and server is a ' +
            'design choice, not a law.',
        },
        {
          icon: '∞',
          title: 'Convergence > Consistency',
          body: 'Stopping the fight for immediate consistency and accepting mathematical ' +
            'convergence (CRDTs) simplified the problem radically. ' +
            'Sometimes the best lock is no lock at all.',
        },
        {
          icon: '⬡',
          title: 'Latency is topology',
          body: 'Reducing latency is not just hardware. Moving validation to the edge ' +
            'and doing local prediction changes the user\'s perception before the ' +
            'packet even arrives.',
        },
      ],
    },

    // ── CTA ──────────────────────────────────────────────────────
    cta: {
      sectionLabel: '// Next step',
      headingPre: 'Want to talk about',
      headingAccent: 'impossible architectures',
      subtitle: 'find me at my portfolio or drop a direct message',
      backLabel: '← Back to Portfolio',
    },

    // ── Footer ───────────────────────────────────────────────────
    footer: {
      left: 'CORE-SHELL ARCHITECTURE — CASE STUDY',
      right: 'RUST · WASM · CRDT · WEBTRANSPORT',
    },
  },

  // ───────────────────────────────────────────────────────────────
  ES: {
    // ── Nav ──────────────────────────────────────────────────────
    navHome: 'Volver',
    navTitle: 'CORE-SHELL ARCHITECTURE',
    nav: ['Contexto', 'Problema', 'Solución', 'Stack', 'Reflexión'],

    // ── Hero ─────────────────────────────────────────────────────
    hero: {
      caseLabel: 'Freelancer',
      archLabel: 'Arquitectura de Software',
      titleLine1: 'El Paradoja de la',
      titleAccent: 'Malla Global',
      titleEnd: 'Híbrida',
      subtitle:
        'Cómo rediseñamos las reglas de lo que un navegador puede hacer — ' +
        'transformando el frontend en un nodo de computación distribuida capaz de ' +
        'procesar análisis financieros en tiempo real, con consistencia matemática ' +
        'y latencia sub-50ms a escala global.',
      meta: [
        { key: 'Tecnología', value: 'Rust · Wasm · CRDT' },
        { key: 'Capa', value: 'Frontend + Backend' },
        { key: 'Protocolo', value: 'WebTransport / HTTP3' },
      ],
      scrollHint: 'scroll para explorar',
    },

    // ── Stats bar ────────────────────────────────────────────────
    stats: [
      { n: 50, sfx: 'ms', label: 'Latencia máxima entre nodos' },
      { n: 100, sfx: 'k+', label: 'Puntos renderizados en tiempo real' },
      { n: 60, sfx: ' FPS', label: 'UI thread estable bajo carga' },
      { n: 0, sfx: ' conflictos', label: 'Merges vía CRDTs matemáticos' },
    ],

    // ── Contexto / Problemas ─────────────────────────────────────
    context: {
      sectionLabel: '// Contexto',
      headingPre: 'Tres restricciones que',
      headingAccent: 'no deberían coexistir',
      problems: [
        {
          id: '01',
          title: 'Procesamiento Distribuido en el Cliente',
          body: 'El backend no escala para billones de cálculos simultáneos. ' +
            'La solución: transformar cada navegador en un nodo de procesamiento ' +
            'sin exponer modelos propietarios.',
        },
        {
          id: '02',
          title: 'Consistencia Zero-Latency',
          body: 'Los cambios realizados en Tokio deben aparecer en Nueva York en ' +
            'menos de 50ms — ignorando las limitaciones físicas de la velocidad ' +
            'de la luz en cables transoceánicos.',
        },
        {
          id: '03',
          title: 'Persistencia Reactiva y Offline',
          body: 'El sistema debe seguir procesando offline, resolviendo ' +
            'automáticamente conflictos de estado (branching) al reconectar.',
        },
      ],
    },

    // ── Motivação ────────────────────────────────────────────────
    motivation: {
      sectionLabel: '// Motivación',
      headingPre: 'Por qué quise',
      headingAccent: 'resolver este problema',
      paragraphs: [
        'La mayoría de las plataformas financieras en tiempo real sufren del mismo mal: ' +
        'arquitecturas "cliente tonto / servidor inteligente" que crean un único punto ' +
        'de falla, cuellos de botella de procesamiento y latencia inevitable por distancia física.',
        'Lo que me fascinaba era la contradicción: ¿cómo garantizar consistencia global en un ' +
        'sistema donde la velocidad de la luz es un límite real? La respuesta no estaba en ' +
        'infra — estaba en cambiar el paradigma de sincronización.',
        'Los CRDTs me permitieron abandonar la idea de "¿quién tiene la verdad?" y sustituirla ' +
        'por "todas las versiones convergen matemáticamente". Esto lo cambia todo.',
      ],
      terminalFile: 'core_shell_arch.rs',
    },

    // ── Arquitetura / Soluções ───────────────────────────────────
    arch: {
      sectionLabel: '// Arquitectura',
      headingPre: 'Core-Shell:',
      headingAccent: 'tres capas que se retroalimentan',
      solutions: [
        {
          layer: 'BACKEND',
          subtitle: 'El Orquestador de Agentes',
          stack: 'Rust + WebTransport',
          color: '#00f5d4',
          points: [
            'WebTransport (HTTP/3) elimina el overhead de handshake y habilita flujos tipo UDP',
            'Los CRDTs garantizan convergencia matemática — sin deadlocks ni conflictos de merge',
            'Múltiples usuarios editan el mismo dataset; el estado final siempre converge',
          ],
        },
        {
          layer: 'FRONTEND',
          subtitle: 'El Motor de Ejecución',
          stack: 'Wasm + SharedArrayBuffer',
          color: '#f5a623',
          points: [
            'Motor de cálculo compilado de Rust/C++ a Wasm — velocidad casi nativa',
            'Web Workers + SharedArrayBuffer mantienen la UI a 60 FPS estables',
            'Canvas 2D / WebGL renderiza más de 100,000 puntos sin bloquear el DOM',
          ],
        },
        {
          layer: 'SYNC',
          subtitle: 'La Magia de la Sincronización',
          stack: 'Local-First + Edge',
          color: '#e040fb',
          points: [
            'SQLite vía Wasm: cada acción se graba localmente antes de propagarse',
            'Edge Computing (Cloudflare Workers) valida mutaciones en el punto más cercano',
            'Optimistic UI: el frontend predice la respuesta del servidor y ajusta suavemente',
          ],
        },
      ],
    },

    // ── Fluxo de Dados ───────────────────────────────────────────
    dataflow: {
      sectionLabel: '// Flujo de Datos',
      heading: 'Cómo un "write" recorre la malla',
      file: 'data_flow.log',
      lines: [
        { color: 'cyan', tag: '[USER-ACTION]', text: 'Usuario A cambia parámetro de riesgo (Tokio)' },
        { color: 'amber', tag: '  └─ [LOCAL]', text: 'Grabado en SQLite/IndexedDB instantáneamente' },
        { color: 'amber', tag: '  └─ [OPTIMISTIC]', text: 'La UI renderiza la predicción sin esperar confirmación' },
        { color: 'violet', tag: '  └─ [EDGE]', text: 'Mutación validada en el CF Worker más cercano' },
        { color: 'violet', tag: '  └─ [CRDT-MERGE]', text: 'Estado fusionado matemáticamente en el orquestador' },
        { color: 'cyan', tag: '  └─ [BROADCAST]', text: 'WebTransport stream a todos los nodos conectados' },
        { color: 'cyan', tag: '  └─ [WASM-CALC]', text: 'El Worker procesa el delta en Wasm (fuera del main thread)' },
        { color: 'amber', tag: '  └─ [RENDER]', text: 'WebGL/Canvas actualiza al Usuario B (Nueva York)' },
      ],
      rttLabel: '  ✓  RTT total',
      rttValue: '< 50ms',
      rttComment: '// convergencia garantizada por CRDT',
    },

    // ── Stack section ────────────────────────────────────────────
    stackSection: {
      sectionLabel: '// Stack Completo',
      headingPre: 'Cada tecnología elegida',
      headingAccent: 'tiene una razón de ser',
    },

    // ── Reflexão / Aprendizados ──────────────────────────────────
    learnings: {
      sectionLabel: '// Reflexión',
      headingPre: 'Lo que este proyecto',
      headingAccent: 'cambió en mi forma de pensar',
      items: [
        {
          icon: '⚡',
          title: 'El Frontend no es solo UI',
          body: 'Transformar el navegador en un nodo de computación rompió mi noción de ' +
            'dónde debe vivir la lógica. La frontera entre cliente y servidor es ' +
            'una elección de diseño, no una ley.',
        },
        {
          icon: '∞',
          title: 'Convergencia > Consistencia',
          body: 'Dejar de luchar por la consistencia inmediata y aceptar la convergencia ' +
            'matemática (CRDTs) simplificó el problema de forma radical. ' +
            'A veces, el mejor bloqueo es no tener bloqueos.',
        },
        {
          icon: '⬡',
          title: 'La latencia es topología',
          body: 'Reducir la latencia no es solo hardware. Mover la validación al borde ' +
            '(edge) y hacer predicción local cambia la percepción del usuario antes ' +
            'siquiera de que llegue el paquete.',
        },
      ],
    },

    // ── CTA ──────────────────────────────────────────────────────
    cta: {
      sectionLabel: '// Siguiente paso',
      headingPre: '¿Quieres hablar sobre',
      headingAccent: 'arquitecturas imposibles?',
      subtitle: 'encuéntrame en mi portafolio o envía un mensaje directo',
      backLabel: '← Volver al Portafolio',
    },

    // ── Footer ───────────────────────────────────────────────────
    footer: {
      left: 'CORE-SHELL ARCHITECTURE — CASE STUDY',
      right: 'RUST · WASM · CRDT · WEBTRANSPORT',
    },
  },



  // ───────────────────────────────────────────────────────────────
  DE: {
    // ── Nav ──────────────────────────────────────────────────────
    navHome: 'Zurück',
    navTitle: 'CORE-SHELL ARCHITECTURE',
    nav: ['Kontext', 'Problem', 'Lösung', 'Stack', 'Reflexion'],

    // ── Hero ─────────────────────────────────────────────────────
    hero: {
      caseLabel: 'Freelancer',
      archLabel: 'Software-Architektur',
      titleLine1: 'Das Paradoxon der',
      titleAccent: 'Hybriden Globalen Masche',
      titleEnd: '',
      subtitle:
        'Wie wir die Regeln dessen, was ein Browser leisten kann, neu definiert haben – ' +
        'indem wir das Frontend in einen verteilten Rechenknoten verwandelt haben, der ' +
        'Finanzanalysen in Echtzeit mit mathematischer Konsistenz und einer ' +
        'Latenz von unter 50ms auf globaler Ebene verarbeitet.',
      meta: [
        { key: 'Technologie', value: 'Rust · Wasm · CRDT' },
        { key: 'Layer', value: 'Frontend + Backend' },
        { key: 'Protokoll', value: 'WebTransport / HTTP3' },
      ],
      scrollHint: 'Scrollen zum Erkunden',
    },

    // ── Stats bar ────────────────────────────────────────────────
    stats: [
      { n: 50, sfx: 'ms', label: 'Max. Latenz zwischen Knoten' },
      { n: 100, sfx: 'k+', label: 'Echtzeit-gerenderte Punkte' },
      { n: 60, sfx: ' FPS', label: 'Stabiler UI-Thread unter Last' },
      { n: 0, sfx: ' Konflikte', label: 'Merges über math. CRDTs' },
    ],

    // ── Contexto / Problemas ─────────────────────────────────────
    context: {
      sectionLabel: '// Kontext',
      headingPre: 'Drei Einschränkungen, die',
      headingAccent: 'nicht koexistieren sollten',
      problems: [
        {
          id: '01',
          title: 'Verteilte Client-seitige Verarbeitung',
          body: 'Das Backend skaliert nicht für Billionen gleichzeitiger Berechnungen. ' +
            'Die Lösung: Jeden Browser in einen Rechenknoten verwandeln, ' +
            'ohne proprietäre Modelle preiszugeben.',
        },
        {
          id: '02',
          title: 'Zero-Latency Konsistenz',
          body: 'Änderungen in Tokio müssen in New York in weniger als 50ms erscheinen – ' +
            'unter Ignorierung der physikalischen Grenzen der Lichtgeschwindigkeit ' +
            'in transozeanischen Kabeln.',
        },
        {
          id: '03',
          title: 'Reaktive & Offline-Persistenz',
          body: 'Das System muss offline weiterarbeiten und beim Wiederverbinden ' +
            'Statuskonflikte (Branching) automatisch lösen.',
        },
      ],
    },

    // ── Motivação ────────────────────────────────────────────────
    motivation: {
      sectionLabel: '// Motivation',
      headingPre: 'Warum ich dieses',
      headingAccent: 'Problem lösen wollte',
      paragraphs: [
        'Die meisten Echtzeit-Finanzplattformen leiden unter demselben Mangel: ' +
        '"Dumb Client / Smart Server"-Architekturen, die Single Points of Failure, ' +
        'Verarbeitungsengpässe und unvermeidbare Latenz durch physische Distanz erzeugen.',
        'Was mich faszinierte, war der Widerspruch: Wie garantiert man globale Konsistenz ' +
        'in einem System, in dem die Lichtgeschwindigkeit ein reales Limit ist? Die Antwort ' +
        'lag nicht in der Infrastruktur, sondern im Wechsel des Synchronisationsparadigmas.',
        'CRDTs ermöglichten es mir, die Idee von "wer hat recht" aufzugeben und durch ' +
        '"alle Versionen konvergieren mathematisch" zu ersetzen. Das ändert alles.',
      ],
      terminalFile: 'core_shell_arch.rs',
    },

    // ── Arquitetura / Soluções ───────────────────────────────────
    arch: {
      sectionLabel: '// Architektur',
      headingPre: 'Core-Shell:',
      headingAccent: 'Drei Schichten im Feedback-Loop',
      solutions: [
        {
          layer: 'BACKEND',
          subtitle: 'Der Agenten-Orchestrator',
          stack: 'Rust + WebTransport',
          color: '#00f5d4',
          points: [
            'WebTransport (HTTP/3) eliminiert Handshake-Overhead und ermöglicht UDP-ähnliche Streams',
            'CRDTs garantieren mathematische Konvergenz – keine Deadlocks, keine Merge-Konflikte',
            'Mehrere Nutzer bearbeiten denselben Datensatz; der Endzustand konvergiert immer',
          ],
        },
        {
          layer: 'FRONTEND',
          subtitle: 'Die Execution Engine',
          stack: 'Wasm + SharedArrayBuffer',
          color: '#f5a623',
          points: [
            'Berechnungs-Engine von Rust/C++ nach Wasm kompiliert – nahezu native Geschwindigkeit',
            'Web Workers + SharedArrayBuffer halten die UI bei stabilen 60 FPS',
            'Canvas 2D / WebGL rendert 100.000+ Punkte, ohne das DOM zu blockieren',
          ],
        },
        {
          layer: 'SYNC',
          subtitle: 'Die Magie der Synchronisation',
          stack: 'Local-First + Edge',
          color: '#e040fb',
          points: [
            'SQLite via Wasm: Jede Aktion wird lokal gespeichert, bevor sie propagiert wird',
            'Edge Computing (Cloudflare Workers) validiert Mutationen am nächsten Punkt',
            'Optimistic UI: Das Frontend sagt die Serverantwort voraus und passt sie sanft an',
          ],
        },
      ],
    },

    // ── Fluxo de Dados ───────────────────────────────────────────
    dataflow: {
      sectionLabel: '// Datenfluss',
      heading: 'Weg eines Schreibvorgangs durch das Mesh',
      file: 'data_flow.log',
      lines: [
        { color: 'cyan', tag: '[USER-ACTION]', text: 'Nutzer A ändert Risikoparameter (Tokio)' },
        { color: 'amber', tag: '  └─ [LOCAL]', text: 'Sofort in SQLite/IndexedDB gespeichert' },
        { color: 'amber', tag: '  └─ [OPTIMISTIC]', text: 'UI rendert Vorhersage ohne Bestätigung' },
        { color: 'violet', tag: '  └─ [EDGE]', text: 'Mutation im nächsten CF Worker validiert' },
        { color: 'violet', tag: '  └─ [CRDT-MERGE]', text: 'Status mathematisch im Orchestrator gemergt' },
        { color: 'cyan', tag: '  └─ [BROADCAST]', text: 'WebTransport-Stream an alle Knoten' },
        { color: 'cyan', tag: '  └─ [WASM-CALC]', text: 'Worker verarbeitet Delta in Wasm (off-thread)' },
        { color: 'amber', tag: '  └─ [RENDER]', text: 'WebGL/Canvas aktualisiert Nutzer B (New York)' },
      ],
      rttLabel: '  ✓  Gesamt-RTT',
      rttValue: '< 50ms',
      rttComment: '// Konvergenz durch CRDT garantiert',
    },

    // ── Stack section ────────────────────────────────────────────
    stackSection: {
      sectionLabel: '// Kompletter Stack',
      headingPre: 'Jede gewählte Technologie',
      headingAccent: 'hat ihren Grund',
    },

    // ── Reflexão / Aprendizados ──────────────────────────────────
    learnings: {
      sectionLabel: '// Reflexion',
      headingPre: 'Was dieses Projekt',
      headingAccent: 'in meinem Denken verändert hat',
      items: [
        {
          icon: '⚡',
          title: 'Frontend ist nicht nur UI',
          body: 'Den Browser in einen Rechenknoten zu verwandeln, hat meine Vorstellung davon ' +
            'gesprengt, wo Logik leben sollte. Die Grenze zwischen Client und Server ist ' +
            'eine Designentscheidung, kein Gesetz.',
        },
        {
          icon: '∞',
          title: 'Konvergenz > Konsistenz',
          body: 'Das Streben nach sofortiger Konsistenz aufzugeben und mathematische Konvergenz ' +
            '(CRDTs) zu akzeptieren, hat das Problem radikal vereinfacht. ' +
            'Manchmal ist der beste Lock gar kein Lock.',
        },
        {
          icon: '⬡',
          title: 'Latenz ist Topologie',
          body: 'Latenzreduzierung ist nicht nur Hardware. Die Validierung an den Rand (Edge) ' +
            'zu verlagern und lokale Vorhersagen zu treffen, ändert die Wahrnehmung des Nutzers, ' +
            'noch bevor das Paket ankommt.',
        },
      ],
    },

    // ── CTA ──────────────────────────────────────────────────────
    cta: {
      sectionLabel: '// Nächster Schritt',
      headingPre: 'Lust auf ein Gespräch über',
      headingAccent: 'unmögliche Architekturen?',
      subtitle: 'Besuch mein Portfolio oder schreib mir direkt',
      backLabel: '← Zurück zum Portfolio',
    },

    // ── Footer ───────────────────────────────────────────────────
    footer: {
      left: 'CORE-SHELL ARCHITECTURE — CASE STUDY',
      right: 'RUST · WASM · CRDT · WEBTRANSPORT',
    },
  },


  // ───────────────────────────────────────────────────────────────
  FR: {
    // ── Nav ──────────────────────────────────────────────────────
    navHome: 'Retour',
    navTitle: 'CORE-SHELL ARCHITECTURE',
    nav: ['Contexte', 'Problème', 'Solution', 'Stack', 'Réflexion'],

    // ── Hero ─────────────────────────────────────────────────────
    hero: {
      caseLabel: 'Freelancer',
      archLabel: 'Architecture Logicielle',
      titleLine1: 'Le Paradoxe du',
      titleAccent: 'Maillage Global',
      titleEnd: 'Hybride',
      subtitle:
        'Comment nous avons redéfini les limites du navigateur — ' +
        'en transformant le frontend en un nœud de calcul distribué capable de ' +
        'traiter des analyses financières en temps réel, avec une cohérence ' +
        'mathématique et une latence inférieure à 50ms à l\'échelle mondiale.',
      meta: [
        { key: 'Technologie', value: 'Rust · Wasm · CRDT' },
        { key: 'Couche', value: 'Frontend + Backend' },
        { key: 'Protocole', value: 'WebTransport / HTTP3' },
      ],
      scrollHint: 'scrollez pour explorer',
    },

    // ── Stats bar ────────────────────────────────────────────────
    stats: [
      { n: 50, sfx: 'ms', label: 'Latence max entre nœuds' },
      { n: 100, sfx: 'k+', label: 'Points rendus en temps réel' },
      { n: 60, sfx: ' FPS', label: 'UI thread stable sous charge' },
      { n: 0, sfx: ' conflits', label: 'Fusions via CRDT mathématiques' },
    ],

    // ── Contexto / Problemas ─────────────────────────────────────
    context: {
      sectionLabel: '// Contexte',
      headingPre: 'Trois contraintes qui',
      headingAccent: 'ne devraient pas coexister',
      problems: [
        {
          id: '01',
          title: 'Calcul Distribué côté Client',
          body: 'Le backend ne peut pas gérer des trillions de calculs simultanés. ' +
            'La solution : transformer chaque navigateur en nœud de traitement ' +
            'sans exposer les modèles propriétaires.',
        },
        {
          id: '02',
          title: 'Cohérence Zero-Latency',
          body: 'Les modifications à Tokyo doivent apparaître à New York en moins ' +
            'de 50ms — en ignorant les limites physiques de la vitesse de la ' +
            'lumière dans les câbles transocéaniques.',
        },
        {
          id: '03',
          title: 'Persistance Réactive et Offline',
          body: 'Le système doit continuer à fonctionner hors ligne, résolvant ' +
            'automatiquement les conflits d\'état (branching) lors de la reconnexion.',
        },
      ],
    },

    // ── Motivação ────────────────────────────────────────────────
    motivation: {
      sectionLabel: '// Motivation',
      headingPre: 'Pourquoi j\'ai voulu',
      headingAccent: 'résoudre ce problème',
      paragraphs: [
        'La plupart des plateformes financières souffrent du même mal : ' +
        'des architectures "client passif / serveur intelligent" créant un point ' +
        'unique de défaillance et une latence inévitable due à la distance physique.',
        'Ce qui me fascinait était la contradiction : comment garantir la cohérence globale ' +
        'quand la vitesse de la lumière est une limite réelle ? La réponse n\'était pas ' +
        'dans l\'infra, mais dans le changement de paradigme de synchronisation.',
        'Les CRDT m\'ont permis d\'abandonner l\'idée de "qui détient la vérité" pour ' +
        '"toutes les versions convergent mathématiquement". Cela change tout.',
      ],
      terminalFile: 'core_shell_arch.rs',
    },

    // ── Arquitetura / Soluções ───────────────────────────────────
    arch: {
      sectionLabel: '// Architecture',
      headingPre: 'Core-Shell :',
      headingAccent: 'trois couches en boucle rétroactive',
      solutions: [
        {
          layer: 'BACKEND',
          subtitle: 'L\'Orchestrateur d\'Agents',
          stack: 'Rust + WebTransport',
          color: '#00f5d4',
          points: [
            'WebTransport (HTTP/3) élimine le handshake overhead et permet des flux type UDP',
            'Les CRDT garantissent la convergence mathématique — sans deadlocks ni conflits',
            'Plusieurs utilisateurs éditent le même dataset ; l\'état final converge toujours',
          ],
        },
        {
          layer: 'FRONTEND',
          subtitle: 'Le Moteur d\'Exécution',
          stack: 'Wasm + SharedArrayBuffer',
          color: '#f5a623',
          points: [
            'Moteur de calcul compilé de Rust/C++ vers Wasm — vitesse quasi native',
            'Web Workers + SharedArrayBuffer maintiennent l\'UI à 60 FPS stables',
            'Canvas 2D / WebGL affiche 100 000+ points sans bloquer le DOM',
          ],
        },
        {
          layer: 'SYNC',
          subtitle: 'La Magie de la Synchronisation',
          stack: 'Local-First + Edge',
          color: '#e040fb',
          points: [
            'SQLite via Wasm : chaque action est enregistrée localement avant propagation',
            'Edge Computing (Cloudflare Workers) valide les mutations au point le plus proche',
            'Optimistic UI : le frontend prédit la réponse du serveur pour une fluidité totale',
          ],
        },
      ],
    },

    // ── Fluxo de Dados ───────────────────────────────────────────
    dataflow: {
      sectionLabel: '// Flux de Données',
      heading: 'Trajet d\'une écriture dans le maillage',
      file: 'data_flow.log',
      lines: [
        { color: 'cyan', tag: '[USER-ACTION]', text: 'L\'utilisateur A modifie un paramètre (Tokyo)' },
        { color: 'amber', tag: '  └─ [LOCAL]', text: 'Enregistré instantanément dans SQLite/IndexedDB' },
        { color: 'amber', tag: '  └─ [OPTIMISTIC]', text: 'L\'UI affiche la prédiction sans attendre' },
        { color: 'violet', tag: '  └─ [EDGE]', text: 'Mutation validée sur le CF Worker le plus proche' },
        { color: 'violet', tag: '  └─ [CRDT-MERGE]', text: 'État fusionné mathématiquement dans l\'orchestrateur' },
        { color: 'cyan', tag: '  └─ [BROADCAST]', text: 'Stream WebTransport vers tous les nœuds' },
        { color: 'cyan', tag: '  └─ [WASM-CALC]', text: 'Le Worker traite le delta en Wasm (hors thread principal)' },
        { color: 'amber', tag: '  └─ [RENDER]', text: 'WebGL/Canvas met à jour l\'utilisateur B (New York)' },
      ],
      rttLabel: '  ✓  RTT total',
      rttValue: '< 50ms',
      rttComment: '// convergence garantie par CRDT',
    },

    // ── Stack section ────────────────────────────────────────────
    stackSection: {
      sectionLabel: '// Stack Complète',
      headingPre: 'Chaque technologie choisie',
      headingAccent: 'a une raison d\'être',
    },

    // ── Reflexão / Aprendizados ──────────────────────────────────
    learnings: {
      sectionLabel: '// Réflexion',
      headingPre: 'Ce que ce projet a',
      headingAccent: 'changé dans ma vision des choses',
      items: [
        {
          icon: '⚡',
          title: 'Le Frontend n\'est pas que de l\'UI',
          body: 'Transformer le navigateur en nœud de calcul a brisé ma conception de ' +
            'l\'emplacement de la logique. La frontière client/serveur est un choix ' +
            'de design, pas une loi physique.',
        },
        {
          icon: '∞',
          title: 'Convergence > Cohérence',
          body: 'Arrêter de lutter pour une cohérence immédiate et accepter la convergence ' +
            'mathématique (CRDT) a radicalement simplifié le problème. ' +
            'Parfois, le meilleur verrou est l\'absence de verrou.',
        },
        {
          icon: '⬡',
          title: 'La latence est une topologie',
          body: 'Réduire la latence n\'est pas qu\'une affaire de hardware. Déplacer la ' +
            'validation vers l\'Edge et utiliser la prédiction locale change la ' +
            'perception de l\'utilisateur avant même l\'arrivée des paquets.',
        },
      ],
    },

    // ── CTA ──────────────────────────────────────────────────────
    cta: {
      sectionLabel: '// Étape suivante',
      headingPre: 'Envie de discuter',
      headingAccent: 'd\'architectures impossibles ?',
      subtitle: 'Retrouvez-moi sur mon portfolio ou envoyez-moi un message direct',
      backLabel: '← Retour au Portfolio',
    },

    // ── Footer ───────────────────────────────────────────────────
    footer: {
      left: 'CORE-SHELL ARCHITECTURE — CASE STUDY',
      right: 'RUST · WASM · CRDT · WEBTRANSPORT',
    },
  },


  // ───────────────────────────────────────────────────────────────
  ZH: {
    // ── Nav ──────────────────────────────────────────────────────
    navHome: '返回',
    navTitle: 'CORE-SHELL ARCHITECTURE',
    nav: ['背景', '问题', '解决方案', '技术栈', '反思'],

    // ── Hero ─────────────────────────────────────────────────────
    hero: {
      caseLabel: '自由职业者',
      archLabel: '软件架构',
      titleLine1: '混合',
      titleAccent: '全球网格',
      titleEnd: '的悖论',
      subtitle:
        '我们如何重新定义浏览器的功能边界 —— ' +
        '将前端转变为分布式计算节点，在全规模下实现 ' +
        '具备数学一致性和低于 50ms 延迟的实时金融分析处理。',
      meta: [
        { key: '核心技术', value: 'Rust · Wasm · CRDT' },
        { key: '架构层', value: '前端 + 后端' },
        { key: '协议', value: 'WebTransport / HTTP3' },
      ],
      scrollHint: '向下滚动探索',
    },

    // ── Stats bar ────────────────────────────────────────────────
    stats: [
      { n: 50, sfx: 'ms', label: '节点间最大延迟' },
      { n: 100, sfx: 'k+', label: '实时渲染点数量' },
      { n: 60, sfx: ' FPS', label: '高负载下稳定的 UI 线程' },
      { n: 0, sfx: ' 冲突', label: '通过数学 CRDT 实现合并' },
    ],

    // ── Contexto / Problemas ─────────────────────────────────────
    context: {
      sectionLabel: '// 背景',
      headingPre: '不该共存的',
      headingAccent: '三项约束',
      problems: [
        {
          id: '01',
          title: '客户端分布式计算',
          body: '后端无法扩展以支持数万亿次的并发计算。' +
            '解决方案：在不暴露专用模型的前提下，将每个浏览器转变为计算节点。',
        },
        {
          id: '02',
          title: '零延迟一致性',
          body: '东京发生的更改必须在 50ms 内同步到纽约 —— ' +
            '无视跨洋光缆中光速的物理限制。',
        },
        {
          id: '03',
          title: '响应式离线持久化',
          body: '系统必须支持离线处理，并在重新连接时自动解决状态冲突（分支合并）。',
        },
      ],
    },

    // ── Motivação ────────────────────────────────────────────────
    motivation: {
      sectionLabel: '// 动机',
      headingPre: '我为何想要',
      headingAccent: '解决这个问题',
      paragraphs: [
        '大多数实时金融平台都面临同样的困境：“瘦客户端/胖服务器”架构导致的单点故障、' +
        '处理瓶颈以及由物理距离带来的不可避免的延迟。',
        '令我着迷的是其中的矛盾：在光速是真实极限的系统中，如何保证全球一致性？' +
        '答案不在于基础架构，而在于改变同步范式。',
        'CRDT 让我放弃了“谁拥有真理”的想法，转而采用“所有版本在数学上最终收敛”。这改变了一切。',
      ],
      terminalFile: 'core_shell_arch.rs',
    },

    // ── Arquitetura / Soluções ───────────────────────────────────
    arch: {
      sectionLabel: '// 架构',
      headingPre: '核壳架构 (Core-Shell):',
      headingAccent: '互补的三个层面',
      solutions: [
        {
          layer: '后端',
          subtitle: '代理编排器',
          stack: 'Rust + WebTransport',
          color: '#00f5d4',
          points: [
            'WebTransport (HTTP/3) 消除握手开销，实现类 UDP 流',
            'CRDT 确保数学收敛 —— 无死锁，无合并冲突',
            '多用户同时编辑同一数据集；最终状态始终一致',
          ],
        },
        {
          layer: '前端',
          subtitle: '执行引擎',
          stack: 'Wasm + SharedArrayBuffer',
          color: '#f5a623',
          points: [
            '从 Rust/C++ 编译至 Wasm 的计算引擎 —— 接近原生的速度',
            'Web Workers + SharedArrayBuffer 保持 UI 稳定在 60 FPS',
            'Canvas 2D / WebGL 渲染超过 10 万个点而不阻塞 DOM',
          ],
        },
        {
          layer: '同步',
          subtitle: '同步的魔力',
          stack: '本地优先 + 边缘计算',
          color: '#e040fb',
          points: [
            '基于 Wasm 的 SQLite：所有操作在传播前先本地落地',
            '边缘计算 (Cloudflare Workers) 在最近点验证变更',
            '乐观 UI (Optimistic UI)：前端预测服务器响应并平滑调整',
          ],
        },
      ],
    },

    // ── Fluxo de Dados ───────────────────────────────────────────
    dataflow: {
      sectionLabel: '// 数据流',
      heading: '写入操作如何在网格中传播',
      file: 'data_flow.log',
      lines: [
        { color: 'cyan', tag: '[用户行为]', text: '用户 A 修改风险参数 (东京)' },
        { color: 'amber', tag: '  └─ [本地]', text: '立即写入 SQLite/IndexedDB' },
        { color: 'amber', tag: '  └─ [乐观渲染]', text: 'UI 无需确认直接渲染预测结果' },
        { color: 'violet', tag: '  └─ [边缘]', text: '在最近的 CF Worker 验证变更' },
        { color: 'violet', tag: '  └─ [CRDT 合并]', text: '状态在编排器中进行数学合并' },
        { color: 'cyan', tag: '  └─ [广播]', text: '通过 WebTransport 流推送至所有节点' },
        { color: 'cyan', tag: '  └─ [WASM 计算]', text: 'Worker 在 Wasm 中处理增量 (非主线程)' },
        { color: 'amber', tag: '  └─ [渲染]', text: 'WebGL/Canvas 更新用户 B 的视图 (纽约)' },
      ],
      rttLabel: '  ✓  总环回时间 (RTT)',
      rttValue: '< 50ms',
      rttComment: '// 由 CRDT 保证最终收敛',
    },

    // ── Stack section ────────────────────────────────────────────
    stackSection: {
      sectionLabel: '// 完整技术栈',
      headingPre: '每项技术的选择',
      headingAccent: '皆有其深意',
    },

    // ── Reflexão / Aprendizados ──────────────────────────────────
    learnings: {
      sectionLabel: '// 反思',
      headingPre: '这个项目如何',
      headingAccent: '重塑了我的思维方式',
      items: [
        {
          icon: '⚡',
          title: '前端不仅是 UI',
          body: '将浏览器转变为计算节点打破了我对逻辑驻留地的固有认知。' +
            '客户端与服务器的边界是设计选择，而非定律。',
        },
        {
          icon: '∞',
          title: '收敛胜过一致',
          body: '放弃对即时一致性的执着，接受数学收敛 (CRDT)，从根本上简化了问题。' +
            '有时，最好的锁就是没有锁。',
        },
        {
          icon: '⬡',
          title: '延迟即拓扑',
          body: '降低延迟不仅关乎硬件。将验证移至边缘并进行本地预测，' +
            '在数据包到达前就已改变了用户的感知。',
        },
      ],
    },

    // ── CTA ──────────────────────────────────────────────────────
    cta: {
      sectionLabel: '// 下一步',
      headingPre: '想聊聊关于',
      headingAccent: '“不可能”的架构吗？',
      subtitle: '在作品集找到我或直接发送私信',
      backLabel: '← 返回作品集',
    },

    // ── Footer ───────────────────────────────────────────────────
    footer: {
      left: 'CORE-SHELL ARCHITECTURE — CASE STUDY',
      right: 'RUST · WASM · CRDT · WEBTRANSPORT',
    },
  },


  // ───────────────────────────────────────────────────────────────
  JA: {
    // ── Nav ──────────────────────────────────────────────────────
    navHome: '戻る',
    navTitle: 'CORE-SHELL ARCHITECTURE',
    nav: ['コンテキスト', '課題', '解決策', 'スタック', '考察'],

    // ── Hero ─────────────────────────────────────────────────────
    hero: {
      caseLabel: 'フリーランス',
      archLabel: 'ソフトウェアアーキテクチャ',
      titleLine1: 'ハイブリッド',
      titleAccent: 'グローバルメッシュ',
      titleEnd: 'の逆説',
      subtitle:
        'ブラウザができることのルールをいかに再定義したか — ' +
        'フロントエンドを分散計算ノードへと変貌させ、数学的な整合性を保ちながら、 ' +
        'グローバル規模で 50ms 未満のレイテンシでリアルタイム財務分析を実現しました。',
      meta: [
        { key: '技術', value: 'Rust · Wasm · CRDT' },
        { key: 'レイヤー', value: 'Frontend + Backend' },
        { key: 'プロトコル', value: 'WebTransport / HTTP3' },
      ],
      scrollHint: 'スクロールして探索',
    },

    // ── Stats bar ────────────────────────────────────────────────
    stats: [
      { n: 50, sfx: 'ms', label: 'ノード間最大レイテンシ' },
      { n: 100, sfx: 'k+', label: 'リアルタイム描画点数' },
      { n: 60, sfx: ' FPS', label: '高負荷下で安定したUIスレッド' },
      { n: 0, sfx: ' 衝突', label: '数学的CRDTによるマージ' },
    ],

    // ── Contexto / Problemas ─────────────────────────────────────
    context: {
      sectionLabel: '// コンテキスト',
      headingPre: '共存するはずのない',
      headingAccent: '3つの制約',
      problems: [
        {
          id: '01',
          title: 'クライアントサイド分散処理',
          body: 'バックエンドは数兆規模の同時計算には耐えられません。' +
            '解決策：独自モデルを露出させずに、各ブラウザを計算ノード化すること。',
        },
        {
          id: '02',
          title: 'ゼロレイテンシの整合性',
          body: '東京での変更を 50ms 未満でニューヨークに反映させる必要がありました。' +
            '海底ケーブルを通る光速の物理的限界を無視して。',
        },
        {
          id: '03',
          title: 'リアクティブ & オフライン永続化',
          body: 'オフラインでも処理を継続し、再接続時に状態の競合（ブランチ）を' +
            '自動的に解決するシステムが求められました。',
        },
      ],
    },

    // ── Motivação ────────────────────────────────────────────────
    motivation: {
      sectionLabel: '// 動機',
      headingPre: 'なぜこの問題を',
      headingAccent: '解決したかったのか',
      paragraphs: [
        '多くのリアルタイム財務プラットフォームは、「シンクライアント／ファットサーバ」' +
        '構成による単一障害点、処理のボトルネック、物理的距離による遅延という共通の課題を抱えています。',
        '私が魅了されたのはその矛盾でした。光速が限界であるシステムで、いかにして世界規模の' +
        '整合性を保証するか？ 答えはインフラではなく、同期のパラダイムシフトにありました。',
        'CRDTによって「誰が正しいか」という考えを捨て、「すべてのバージョンが数学的に収束する」' +
        'という考えに置き換えることができました。これがすべてを変えました。',
      ],
      terminalFile: 'core_shell_arch.rs',
    },

    // ── Arquitetura / Soluções ───────────────────────────────────
    arch: {
      sectionLabel: '// アーキテクチャ',
      headingPre: 'Core-Shell:',
      headingAccent: '相互にフィードバックする3層構造',
      solutions: [
        {
          layer: 'BACKEND',
          subtitle: 'エージェント・オーケストレーター',
          stack: 'Rust + WebTransport',
          color: '#00f5d4',
          points: [
            'WebTransport (HTTP/3) がハンドシェイクのオーバーヘッドを排除し、UDP的なストリームを実現',
            'CRDTが数学的な収束を保証 — デッドロックやマージ衝突なし',
            '複数ユーザーが同一データセットを編集しても、最終状態は常に一致',
          ],
        },
        {
          layer: 'FRONTEND',
          subtitle: '実行エンジン',
          stack: 'Wasm + SharedArrayBuffer',
          color: '#f5a623',
          points: [
            'Rust/C++からWasmへコンパイルされた計算エンジン — ネイティブに近い速度',
            'Web Workers + SharedArrayBuffer により UI を 60 FPS で安定維持',
            'Canvas 2D / WebGL で DOM を止めずに 10万点以上を描画',
          ],
        },
        {
          layer: 'SYNC',
          subtitle: '同期の魔法',
          stack: 'Local-First + Edge',
          color: '#e040fb',
          points: [
            'Wasm経由のSQLite：すべての操作は伝播前にローカルで記録',
            'Edge Computing (Cloudflare Workers) が最寄りの拠点で変更を検証',
            'Optimistic UI：フロントエンドがサーバーの応答を予測し、滑らかに調整',
          ],
        },
      ],
    },

    // ── Fluxo de Dados ───────────────────────────────────────────
    dataflow: {
      sectionLabel: '// データフロー',
      heading: '書き込みがメッシュを伝わる仕組み',
      file: 'data_flow.log',
      lines: [
        { color: 'cyan', tag: '[ユーザー操作]', text: 'ユーザーAがリスクパラメータを変更（東京）' },
        { color: 'amber', tag: '  └─ [ローカル]', text: 'SQLite/IndexedDBに即時記録' },
        { color: 'amber', tag: '  └─ [楽観的UI]', text: '確認を待たずに予測結果をUIに描画' },
        { color: 'violet', tag: '  └─ [エッジ]', text: '最寄りの CF Worker でバリデーション' },
        { color: 'violet', tag: '  └─ [CRDTマージ]', text: 'オーケストレーターで数学的に状態を統合' },
        { color: 'cyan', tag: '  └─ [ブロードキャスト]', text: 'WebTransportで全接続ノードへ配信' },
        { color: 'cyan', tag: '  └─ [WASM計算]', text: 'WorkerがWasmで差分を処理（メインスレッド外）' },
        { color: 'amber', tag: '  └─ [描画]', text: 'WebGL/CanvasがユーザーBの画面を更新（NY）' },
      ],
      rttLabel: '  ✓  トータル RTT',
      rttValue: '< 50ms',
      rttComment: '// CRDTによる収束保証',
    },

    // ── Stack section ────────────────────────────────────────────
    stackSection: {
      sectionLabel: '// 全スタック',
      headingPre: '選ばれたすべての技術には',
      headingAccent: '理由がある',
    },

    // ── Reflexão / Aprendizados ──────────────────────────────────
    learnings: {
      sectionLabel: '// 考察',
      headingPre: 'このプロジェクトが',
      headingAccent: '私の考え方をどう変えたか',
      items: [
        {
          icon: '⚡',
          title: 'フロントエンドはUIだけではない',
          body: 'ブラウザを計算ノードに変えることで、ロジックがどこにあるべきかという' +
            '概念が壊れました。クライアントとサーバーの境界は設計上の選択であり、' +
            '絶対的な法則ではありません。',
        },
        {
          icon: '∞',
          title: '整合性より収束',
          body: '即時の整合性を求めるのをやめ、数学的な収束（CRDT）を受け入れることで、' +
            '問題は劇的に単純化されました。時には、最良のロックは「ロックしないこと」です。',
        },
        {
          icon: '⬡',
          title: 'レイテンシはトポロジー',
          body: '遅延の解消はハードウェアだけではありません。バリデーションをエッジに移動し、' +
            'ローカルで予測を行うことで、パケットが届く前にユーザーの知覚を変えることができます。',
        },
      ],
    },

    // ── CTA ──────────────────────────────────────────────────────
    cta: {
      sectionLabel: '// 次のステップ',
      headingPre: '「不可能なアーキテクチャ」',
      headingAccent: 'について話しませんか？',
      subtitle: 'ポートフォリオを見るか、ダイレクトメッセージを送ってください',
      backLabel: '← ポートフォリオに戻る',
    },

    // ── Footer ───────────────────────────────────────────────────
    footer: {
      left: 'CORE-SHELL ARCHITECTURE — CASE STUDY',
      right: 'RUST · WASM · CRDT · WEBTRANSPORT',
    },
  }

  // ───────────────────────────────────────────────────────────────
}

export default CASE_DATA
