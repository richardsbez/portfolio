// ── Currículo — layout idêntico ao LaTeX/PDF ──

export const RESUME = {
  PT: {
    name: "Richard Santos Bezerra",
    contact: {
      phone: "(13) 99785-2155",
      email: "richardsbezerra24@gmail.com",
      site: "richardsbeze.vercel.app",
    },
    sections: {
      experience: "EXPERIÊNCIA",
      projects: "PROJETOS",
      education: "EDUCAÇÃO",
      skills: "SKILLS",
    },
    experience: [
      {
        company: "ayrCore",
        period: "Set. 2025 – Atual",
        role: "Fundador",
        location: "São Paulo, SP",
        items: [
          "Desenvolvimento de sites modernos com foco em UI/UX, utilizando tendências e técnicas atuais do mercado.",
          "Treinamento de I.A para automação de processos e tarefas empresariais.",
          "Desenvolvimento de softwares e apps modernos, eficientes e personalizados para diferentes necessidades.",
          "Testes de cibersegurança, incluindo pentest, criptografia e análise de vulnerabilidades.",
        ],
      },
      {
        company: "Multisei",
        period: "Maio. 2025 – Set. 2025",
        role: "T.I",
        location: "Santos, SP",
        items: [
          "Configuração e administração de servidores Linux e Windows, Windows Server (AD, DHCP e DNS) e virtualização.",
          "Infraestrutura de redes estruturadas e provisionamento de ativos L2/L3, incluindo switches e roteadores.",
          "Troubleshooting de hardware e software, deploy e hardening de ambientes Windows/Linux, além de suporte técnico a sistemas e aplicações.",
        ],
      },
      {
        company: "ByteForge",
        period: "Out 2024 – Jan. 2025",
        role: "Desenvolvedor Full-Stack",
        location: "São Paulo, SP",
        items: [
          "Desenvolvimento, integração e manutenção de APIs para sistemas e aplicações.",
          "Otimizei processos internos, eliminando etapas desnecessárias e aumentando a eficiência.",
          "Modernizei códigos legados, aplicando boas práticas e migrando JavaScript puro para React.",
        ],
      },
    ],
    projects: [
      {
        name: "Projeto open source Lerna",
        date: "Mar. 2024",
        items: ["Correção e resolução de bugs no projeto Lerna."],
      },
      {
        name: "Ultralearning",
        date: "Fev. 2026",
        items: [
          "Desenvolvi app desktop para gestão de estudos baseado nos princípios de Ultralearning (Scott Young).",
          "Projetei sistema local-first compatível com Obsidian via front-matter YAML para portabilidade.",
        ],
      },
      {
        name: "Waytranslate",
        date: "2026",
        items: [
          "Desenvolvi uma ferramenta CLI em Rust para tradução offline utilizando Docker e a API do LibreTranslate.",
          "Implementei tradução via bridge (Inglês) para garantir suporte a idiomas sem modelos diretos.",
        ],
      },
    ],
    education: [
      {
        institution: "Universidade São Judas Tadeu (USJT)",
        period: "Jan. 2025 – Jun. 2029 (Previsão)",
        degree: "bacharelado em Engenharia de Computação",
        location: "Santos, SP",
      },
    ],
    skills: [
      { label: "Languages", value: " C#, Java, JavaScript, TypeScript, Python, COBOL" },
      { label: "Frontend", value: " React, Next.js, Angular, Sass, Bootstrap, Bulma, TailwindCSS" },
      { label: "Backend", value: " .NET / .NET Core, Spring Boot, Node.js" },
      { label: "Databases", value: " MySQL, SQL Server, Oracle, PL/SQL, MongoDB" },
      { label: "DevOps & Cloud", value: " Azure (Pipelines, Application Insights), Docker, Kubernetes" },
      { label: "Tools", value: " Git, GitHub" },
      { label: "Infrastructure", value: " Windows/Linux, Active Directory, DNS, DHCP, Virtualization, Hardware/Software troubleshooting" },
    ],
    downloadLabel: "Baixar PDF",
    backLabel: "← início",
  },

  EN: {
    name: "Richard Santos Bezerra",
    contact: {
      phone: "(13) 99785-2155",
      email: "richardsbezerra24@gmail.com",
      site: "richardsbeze.vercel.app",
    },
    sections: {
      experience: "EXPERIENCE",
      projects: "PROJECTS",
      education: "EDUCATION",
      skills: "SKILLS",
    },
    experience: [
      {
        company: "ayrCore",
        period: "Sep. 2025 – Present",
        role: "Founder",
        location: "São Paulo, SP",
        items: [
          "Development of modern websites focused on UI/UX, using current market trends and techniques.",
          "AI training for process automation and business tasks.",
          "Development of modern, efficient and customised software and apps for different needs.",
          "Cybersecurity testing, including pentesting, encryption and vulnerability analysis.",
        ],
      },
      {
        company: "Multisei",
        period: "May 2025 – Sep. 2025",
        role: "IT",
        location: "Santos, SP",
        items: [
          "Configuration and administration of Linux and Windows servers, Windows Server (AD, DHCP and DNS) and virtualisation.",
          "Structured network infrastructure and L2/L3 asset provisioning, including switches and routers.",
          "Hardware and software troubleshooting, deployment and hardening of Windows/Linux environments, plus technical support.",
        ],
      },
      {
        company: "ByteForge",
        period: "Oct. 2024 – Jan. 2025",
        role: "Full-Stack Developer",
        location: "São Paulo, SP",
        items: [
          "Development, integration and maintenance of APIs for systems and applications.",
          "Optimised internal processes, eliminating unnecessary steps and increasing efficiency.",
          "Modernised legacy code, applying best practices and migrating plain JavaScript to React.",
        ],
      },
    ],
    projects: [
      {
        name: "Open Source Project – Lerna",
        date: "Mar. 2024",
        items: ["Bug fixing and resolution in the Lerna project."],
      },
      {
        name: "Ultralearning",
        date: "Feb. 2026",
        items: [
          "Built a desktop app for study management based on Ultralearning principles (Scott Young).",
          "Designed a local-first system compatible with Obsidian via front-matter YAML for portability.",
        ],
      },
      {
        name: "Waytranslate",
        date: "2026",
        items: [
          "Built a CLI tool in Rust for offline translation using Docker and the LibreTranslate API.",
          "Implemented bridge translation (via English) to ensure support for languages without direct models.",
        ],
      },
    ],
    education: [
      {
        institution: "São Judas Tadeu University (USJT)",
        period: "Jan. 2025 – Jun. 2029 (Expected)",
        degree: "Bachelor's in Computer Engineering",
        location: "Santos, SP",
      },
    ],
    skills: [
      { label: "Languages", value: " C#, Java, JavaScript, TypeScript, Python, COBOL" },
      { label: "Frontend", value: " React, Next.js, Angular, Sass, Bootstrap, Bulma, TailwindCSS" },
      { label: "Backend", value: " .NET / .NET Core, Spring Boot, Node.js" },
      { label: "Databases", value: " MySQL, SQL Server, Oracle, PL/SQL, MongoDB" },
      { label: "DevOps & Cloud", value: " Azure (Pipelines, Application Insights), Docker, Kubernetes" },
      { label: "Tools", value: " Git, GitHub" },
      { label: "Infrastructure", value: " Windows/Linux, Active Directory, DNS, DHCP, Virtualization, Hardware/Software troubleshooting" },
    ],
    downloadLabel: "Download PDF",
    backLabel: "← Home",
  },

  ES: {
    name: "Richard Santos Bezerra",
    contact: {
      phone: "(13) 99785-2155",
      email: "richardsbezerra24@gmail.com",
      site: "richardsbeze.vercel.app",
    },
    sections: {
      experience: "EXPERIENCIA",
      projects: "PROYECTOS",
      education: "EDUCACIÓN",
      skills: "SKILLS",
    },
    experience: [
      {
        company: "ayrCore",
        period: "Sep. 2025 – Actual",
        role: "Fundador",
        location: "São Paulo, SP",
        items: [
          "Desarrollo de sitios web modernos centrados en UI/UX, utilizando tendencias y técnicas actuales del mercado.",
          "Entrenamiento de I.A para automatización de procesos y tareas empresariales.",
          "Desarrollo de software y aplicaciones modernas, eficientes y personalizadas para diferentes necesidades.",
          "Pruebas de ciberseguridad, incluyendo pentest, cifrado y análisis de vulnerabilidades.",
        ],
      },
      {
        company: "Multisei",
        period: "May. 2025 – Sep. 2025",
        role: "T.I",
        location: "Santos, SP",
        items: [
          "Configuración y administración de servidores Linux y Windows, Windows Server (AD, DHCP y DNS) y virtualización.",
          "Infraestructura de redes estructuradas y aprovisionamiento de activos L2/L3, incluyendo switches y routers.",
          "Troubleshooting de hardware y software, deploy y hardening de entornos Windows/Linux, además de soporte técnico.",
        ],
      },
      {
        company: "ByteForge",
        period: "Oct. 2024 – Ene. 2025",
        role: "Desarrollador Full-Stack",
        location: "São Paulo, SP",
        items: [
          "Desarrollo, integración y mantenimiento de APIs para sistemas y aplicaciones.",
          "Optimicé procesos internos, eliminando pasos innecesarios y aumentando la eficiencia.",
          "Modernicé código heredado, aplicando buenas prácticas y migrando JavaScript puro a React.",
        ],
      },
    ],
    projects: [
      {
        name: "Proyecto open source Lerna",
        date: "Mar. 2024",
        items: ["Corrección y resolución de bugs en el proyecto Lerna."],
      },
      {
        name: "Ultralearning",
        date: "Feb. 2026",
        items: [
          "Desarrollé una app de escritorio para gestión de estudios basada en los principios de Ultralearning (Scott Young).",
          "Diseñé un sistema local-first compatible con Obsidian vía front-matter YAML para portabilidad.",
        ],
      },
      {
        name: "Waytranslate",
        date: "2026",
        items: [
          "Desarrollé una herramienta CLI en Rust para traducción offline usando Docker y la API de LibreTranslate.",
          "Implementé traducción vía bridge (Inglés) para garantizar soporte a idiomas sin modelos directos.",
        ],
      },
    ],
    education: [
      {
        institution: "Universidad São Judas Tadeu (USJT)",
        period: "Ene. 2025 – Jun. 2029 (Previsto)",
        degree: "Ingeniería en Computación",
        location: "Santos, SP",
      },
    ],
    skills: [
      { label: "Languages", value: " C#, Java, JavaScript, TypeScript, Python, COBOL" },
      { label: "Frontend", value: " React, Next.js, Angular, Sass, Bootstrap, Bulma, TailwindCSS" },
      { label: "Backend", value: " .NET / .NET Core, Spring Boot, Node.js" },
      { label: "Databases", value: " MySQL, SQL Server, Oracle, PL/SQL, MongoDB" },
      { label: "DevOps & Cloud", value: " Azure (Pipelines, Application Insights), Docker, Kubernetes" },
      { label: "Tools", value: " Git, GitHub" },
      { label: "Infrastructure", value: " Windows/Linux, Active Directory, DNS, DHCP, Virtualización, Troubleshooting hardware/software" },
    ],
    downloadLabel: "Descargar PDF",
    backLabel: "← Inicio",
  },

  DE: {
    name: "Richard Santos Bezerra",
    contact: {
      phone: "(13) 99785-2155",
      email: "richardsbezerra24@gmail.com",
      site: "richardsbeze.vercel.app",
    },
    sections: {
      experience: "BERUFSERFAHRUNG",
      projects: "PROJEKTE",
      education: "AUSBILDUNG",
      skills: "SKILLS",
    },
    experience: [
      {
        company: "ayrCore",
        period: "Sep. 2025 – heute",
        role: "Gründer",
        location: "São Paulo, SP",
        items: [
          "Entwicklung moderner Websites mit Fokus auf UI/UX unter Einsatz aktueller Markttrends.",
          "KI-Training zur Automatisierung von Geschäftsprozessen und -aufgaben.",
          "Entwicklung moderner, effizienter und individuell angepasster Software und Anwendungen.",
          "Cybersicherheitstests, einschließlich Pentesting, Verschlüsselung und Schwachstellenanalyse.",
        ],
      },
      {
        company: "Multisei",
        period: "Mai 2025 – Sep. 2025",
        role: "IT",
        location: "Santos, SP",
        items: [
          "Konfiguration und Administration von Linux- und Windows-Servern, Windows Server (AD, DHCP und DNS) und Virtualisierung.",
          "Strukturierte Netzwerkinfrastruktur und L2/L3-Asset-Bereitstellung, einschließlich Switches und Router.",
          "Hardware-/Software-Troubleshooting, Deployment und Hardening von Windows/Linux-Umgebungen sowie technischer Support.",
        ],
      },
      {
        company: "ByteForge",
        period: "Okt. 2024 – Jan. 2025",
        role: "Full-Stack-Entwickler",
        location: "São Paulo, SP",
        items: [
          "Entwicklung, Integration und Wartung von APIs für Systeme und Anwendungen.",
          "Interne Prozesse optimiert, unnötige Schritte eliminiert und Effizienz gesteigert.",
          "Legacy-Code modernisiert, Best Practices angewendet und JavaScript zu React migriert.",
        ],
      },
    ],
    projects: [
      {
        name: "Open-Source-Projekt Lerna",
        date: "Mär. 2024",
        items: ["Fehlerbehebung im Lerna-Projekt."],
      },
      {
        name: "Ultralearning",
        date: "Feb. 2026",
        items: [
          "Desktop-App zur Lernverwaltung basierend auf Ultralearning-Prinzipien (Scott Young) entwickelt.",
          "Local-First-System kompatibel mit Obsidian über front-matter YAML für Portabilität entworfen.",
        ],
      },
      {
        name: "Waytranslate",
        date: "2026",
        items: [
          "CLI-Tool in Rust für Offline-Übersetzung mit Docker und der LibreTranslate-API entwickelt.",
          "Bridge-Übersetzung (via Englisch) implementiert, um Sprachen ohne direkte Modelle zu unterstützen.",
        ],
      },
    ],
    education: [
      {
        institution: "São Judas Tadeu Universität (USJT)",
        period: "Jan. 2025 – Jun. 2029 (Voraussichtlich)",
        degree: "Informatik-Ingenieurwesen",
        location: "Santos, SP",
      },
    ],
    skills: [
      { label: "Languages", value: " C#, Java, JavaScript, TypeScript, Python, COBOL" },
      { label: "Frontend", value: " React, Next.js, Angular, Sass, Bootstrap, Bulma, TailwindCSS" },
      { label: "Backend", value: " .NET / .NET Core, Spring Boot, Node.js" },
      { label: "Databases", value: " MySQL, SQL Server, Oracle, PL/SQL, MongoDB" },
      { label: "DevOps & Cloud", value: " Azure (Pipelines, Application Insights), Docker, Kubernetes" },
      { label: "Tools", value: " Git, GitHub" },
      { label: "Infrastructure", value: " Windows/Linux, Active Directory, DNS, DHCP, Virtualisierung, Hardware-/Software-Troubleshooting" },
    ],
    downloadLabel: "PDF herunterladen",
    backLabel: "← Startseite",
  },

  FR: {
    name: "Richard Santos Bezerra",
    contact: {
      phone: "(13) 99785-2155",
      email: "richardsbezerra24@gmail.com",
      site: "richardsbeze.vercel.app",
    },
    sections: {
      experience: "EXPÉRIENCE",
      projects: "PROJETS",
      education: "FORMATION",
      skills: "SKILLS",
    },
    experience: [
      {
        company: "ayrCore",
        period: "Sep. 2025 – présent",
        role: "Fondateur",
        location: "São Paulo, SP",
        items: [
          "Développement de sites web modernes axés sur l'UI/UX, en utilisant les tendances actuelles du marché.",
          "Entraînement d'I.A pour l'automatisation des processus et tâches d'entreprise.",
          "Développement de logiciels et applications modernes, efficaces et personnalisés.",
          "Tests de cybersécurité, incluant pentesting, chiffrement et analyse de vulnérabilités.",
        ],
      },
      {
        company: "Multisei",
        period: "Mai 2025 – Sep. 2025",
        role: "IT",
        location: "Santos, SP",
        items: [
          "Configuration et administration de serveurs Linux et Windows, Windows Server (AD, DHCP et DNS) et virtualisation.",
          "Infrastructure réseau structurée et approvisionnement d'actifs L2/L3, y compris switches et routeurs.",
          "Troubleshooting matériel et logiciel, déploiement et durcissement d'environnements Windows/Linux.",
        ],
      },
      {
        company: "ByteForge",
        period: "Oct. 2024 – Jan. 2025",
        role: "Développeur Full-Stack",
        location: "São Paulo, SP",
        items: [
          "Développement, intégration et maintenance d'APIs pour systèmes et applications.",
          "Optimisation des processus internes, suppression des étapes inutiles et augmentation de l'efficacité.",
          "Modernisation du code hérité, application des bonnes pratiques et migration vers React.",
        ],
      },
    ],
    projects: [
      {
        name: "Projet open source Lerna",
        date: "Mar. 2024",
        items: ["Correction et résolution de bugs dans le projet Lerna."],
      },
      {
        name: "Ultralearning",
        date: "Fév. 2026",
        items: [
          "Développé une application desktop de gestion des études basée sur les principes de l'Ultralearning (Scott Young).",
          "Conçu un système local-first compatible avec Obsidian via front-matter YAML pour la portabilité.",
        ],
      },
      {
        name: "Waytranslate",
        date: "2026",
        items: [
          "Développé un outil CLI en Rust pour la traduction hors ligne via Docker et l'API LibreTranslate.",
          "Implémenté une traduction par bridge (via l'anglais) pour assurer le support des langues sans modèles directs.",
        ],
      },
    ],
    education: [
      {
        institution: "Université São Judas Tadeu (USJT)",
        period: "Jan. 2025 – Jun. 2029 (Prévu)",
        degree: "Génie Informatique",
        location: "Santos, SP",
      },
    ],
    skills: [
      { label: "Languages", value: " C#, Java, JavaScript, TypeScript, Python, COBOL" },
      { label: "Frontend", value: " React, Next.js, Angular, Sass, Bootstrap, Bulma, TailwindCSS" },
      { label: "Backend", value: " .NET / .NET Core, Spring Boot, Node.js" },
      { label: "Databases", value: " MySQL, SQL Server, Oracle, PL/SQL, MongoDB" },
      { label: "DevOps & Cloud", value: " Azure (Pipelines, Application Insights), Docker, Kubernetes" },
      { label: "Tools", value: " Git, GitHub" },
      { label: "Infrastructure", value: " Windows/Linux, Active Directory, DNS, DHCP, Virtualisation, Troubleshooting matériel/logiciel" },
    ],
    downloadLabel: "Télécharger PDF",
    backLabel: "← Accueil",
  },

  ZH: {
    name: "Richard Santos Bezerra",
    contact: {
      phone: "(13) 99785-2155",
      email: "richardsbezerra24@gmail.com",
      site: "richardsbeze.vercel.app",
    },
    sections: {
      experience: "工作经历",
      projects: "项目经历",
      education: "教育背景",
      skills: "技能",
    },
    experience: [
      {
        company: "ayrCore",
        period: "2025年9月 – 至今",
        role: "创始人",
        location: "圣保罗",
        items: [
          "开发注重UI/UX的现代网站，运用当前市场趋势和技术。",
          "训练AI以实现企业流程和任务的自动化。",
          "为不同需求开发现代、高效、定制化的软件和应用程序。",
          "进行网络安全测试，包括渗透测试、加密和漏洞分析。",
        ],
      },
      {
        company: "Multisei",
        period: "2025年5月 – 2025年9月",
        role: "IT",
        location: "桑托斯",
        items: [
          "配置和管理Linux和Windows服务器、Windows Server（AD、DHCP和DNS）及虚拟化环境。",
          "结构化网络基础架构和L2/L3资产配置，包括交换机和路由器。",
          "硬件/软件故障排查，部署和加固Windows/Linux环境，以及技术支持。",
        ],
      },
      {
        company: "ByteForge",
        period: "2024年10月 – 2025年1月",
        role: "全栈开发工程师",
        location: "圣保罗",
        items: [
          "为系统和应用程序开发、集成和维护API。",
          "优化内部流程，消除不必要的步骤，提高效率。",
          "将遗留代码现代化，应用最佳实践，将纯JavaScript迁移到React。",
        ],
      },
    ],
    projects: [
      {
        name: "开源项目 Lerna",
        date: "2024年3月",
        items: ["在Lerna项目中进行错误修复和解决。"],
      },
      {
        name: "Ultralearning",
        date: "2026年2月",
        items: [
          "基于超学习原则（Scott Young）开发桌面学习管理应用。",
          "设计与Obsidian兼容的本地优先系统，通过front-matter YAML实现可移植性。",
        ],
      },
      {
        name: "Waytranslate",
        date: "2026",
        items: [
          "使用Docker和LibreTranslate API用Rust开发离线翻译CLI工具。",
          "通过英语桥接翻译，确保支持没有直接模型的语言。",
        ],
      },
    ],
    education: [
      {
        institution: "圣犹达塔德乌大学（USJT）",
        period: "2025年1月 – 2029年6月（预计）",
        degree: "计算机工程",
        location: "桑托斯",
      },
    ],
    skills: [
      { label: "Languages", value: " C#, Java, JavaScript, TypeScript, Python, COBOL" },
      { label: "Frontend", value: " React, Next.js, Angular, Sass, Bootstrap, Bulma, TailwindCSS" },
      { label: "Backend", value: " .NET / .NET Core, Spring Boot, Node.js" },
      { label: "Databases", value: " MySQL, SQL Server, Oracle, PL/SQL, MongoDB" },
      { label: "DevOps & Cloud", value: " Azure (Pipelines, Application Insights), Docker, Kubernetes" },
      { label: "Tools", value: " Git, GitHub" },
      { label: "Infrastructure", value: " Windows/Linux, Active Directory, DNS, DHCP, 虚拟化, 硬件/软件故障排查" },
    ],
    downloadLabel: "下载 PDF",
    backLabel: "← 首页",
  },

  JA: {
    name: "Richard Santos Bezerra",
    contact: {
      phone: "(13) 99785-2155",
      email: "richardsbezerra24@gmail.com",
      site: "richardsbeze.vercel.app",
    },
    sections: {
      experience: "職務経歴",
      projects: "プロジェクト",
      education: "学歴",
      skills: "スキル",
    },
    experience: [
      {
        company: "ayrCore",
        period: "2025年9月 – 現在",
        role: "創業者",
        location: "サンパウロ",
        items: [
          "現在の市場トレンドと技術を活用したUI/UX重視のモダンなWebサイト開発。",
          "ビジネスプロセスとタスク自動化のためのAIトレーニング。",
          "さまざまなニーズに対応したモダン・効率的・カスタマイズされたソフトウェアおよびアプリ開発。",
          "ペンテスト、暗号化、脆弱性分析を含むサイバーセキュリティテスト。",
        ],
      },
      {
        company: "Multisei",
        period: "2025年5月 – 2025年9月",
        role: "IT",
        location: "サントス",
        items: [
          "LinuxおよびWindowsサーバー、Windows Server（AD、DHCP、DNS）および仮想化の設定・管理。",
          "スイッチやルーターを含むL2/L3資産プロビジョニングと構造化ネットワークインフラ。",
          "ハードウェア/ソフトウェアトラブルシューティング、Windows/Linux環境のデプロイとハードニング。",
        ],
      },
      {
        company: "ByteForge",
        period: "2024年10月 – 2025年1月",
        role: "フルスタック開発者",
        location: "サンパウロ",
        items: [
          "システムおよびアプリケーション向けAPIの開発、統合、保守。",
          "内部プロセスを最適化し、不要な手順を排除して効率を向上。",
          "レガシーコードをモダン化し、ベストプラクティスを適用してReactに移行。",
        ],
      },
    ],
    projects: [
      {
        name: "オープンソース – Lerna",
        date: "2024年3月",
        items: ["Lernaプロジェクトのバグ修正と解決。"],
      },
      {
        name: "Ultralearning",
        date: "2026年2月",
        items: [
          "アルトララーニングの原則（Scott Young）に基づいた学習管理デスクトップアプリを開発。",
          "front-matter YAMLを通じてObsidianと互換性のあるローカルファーストシステムを設計。",
        ],
      },
      {
        name: "Waytranslate",
        date: "2026",
        items: [
          "DockerとLibreTranslate APIを使用してRustでオフライン翻訳CLIツールを開発。",
          "英語経由のブリッジ翻訳を実装し、直接モデルのない言語をサポート。",
        ],
      },
    ],
    education: [
      {
        institution: "サンジュダスタデウ大学（USJT）",
        period: "2025年1月 – 2029年6月（予定）",
        degree: "コンピュータ工学",
        location: "サントス",
      },
    ],
    skills: [
      { label: "Languages", value: " C#, Java, JavaScript, TypeScript, Python, COBOL" },
      { label: "Frontend", value: " React, Next.js, Angular, Sass, Bootstrap, Bulma, TailwindCSS" },
      { label: "Backend", value: " .NET / .NET Core, Spring Boot, Node.js" },
      { label: "Databases", value: " MySQL, SQL Server, Oracle, PL/SQL, MongoDB" },
      { label: "DevOps & Cloud", value: " Azure (Pipelines, Application Insights), Docker, Kubernetes" },
      { label: "Tools", value: " Git, GitHub" },
      { label: "Infrastructure", value: " Windows/Linux, Active Directory, DNS, DHCP, 仮想化, ハードウェア/ソフトウェアトラブルシューティング" },
    ],
    downloadLabel: "PDFをダウンロード",
    backLabel: "← ホーム",
  },
};

export const RESUME_LANGS = [
  { code: "PT", label: "PT" },
  { code: "EN", label: "EN" },
  { code: "ES", label: "ES" },
  { code: "DE", label: "DE" },
  { code: "FR", label: "FR" },
  { code: "ZH", label: "ZH" },
  { code: "JA", label: "JA" },
];
