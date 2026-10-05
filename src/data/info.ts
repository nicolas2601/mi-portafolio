
export const personalInfo = {
  nm: "Nicolas Moreno",
  name: "Nicolás Santiago Moreno Monroy",
  title: "Software Engineer & Full-Stack Developer",
  email: "nm5571762@gmail.com",
  phone: "+57 350 232 8517",
  location: "Bucaramanga, Santander, Colombia",
  postalCode: "680001",
  bio: "Desarrollador full-stack y estudiante de Ingeniería de Sistemas (UNAB, 8° semestre) con más de 2 años construyendo y operando software en producción para clientes PYME: APIs en Python y TypeScript, automatización con n8n y agentes LLM con guardrails y evaluación.\n\nPrimer puesto regional y finalista nacional en la Hackathon Colombia 5.0 (MinTIC, 2026). Autor de herramientas para agentes de IA publicadas en npm y con 3 pull requests aceptados en n8n y umami. Mi tesis aplica aprendizaje autosupervisado a imágenes médicas, con asesoría de KAUST.\n\nDisponible para roles remotos (full o medio tiempo) en timezone de Américas (GMT-5). Inglés B1: lectura técnica fluida y escritura diaria.",
  avatar: "/perfil1.jpg",
  socialLinks: {
    linkedin: "https://linkedin.com/in/nicolas-moreno-dev",
    github: "https://github.com/nicolas2601",
    portfolio: "https://nicolasmoreno.site"
  }
};

export const achievements = [
  {
    title: "Primer puesto regional y finalista nacional",
    context: "Hackathon Colombia 5.0 · MinTIC · 2026",
    detail: "Equipo Syntax Error: GobIA Auditor, un orquestador de agentes que audita contratos públicos de SECOP II."
  },
  {
    title: "3 pull requests aceptados en open source",
    context: "n8n y umami",
    detail: "Fix del nodo de Jira, enlaces con basePath y cálculo de duración de replays, cada uno con pruebas."
  },
  {
    title: "Paquetes publicados en npm",
    context: "@nicolas2601/omnicoder",
    detail: "Plugin para opencode con enrutador de skills (BM25), guardia de seguridad y failover de proveedores."
  }
];

export const education = [
  {
    degree: "Ingeniería de Sistemas",
    institution: "Universidad Autónoma de Bucaramanga",
    period: "En curso (8° Semestre)",
    expectedGraduation: "2027",
    status: "En progreso"
  },
  {
    degree: "Bachiller Técnico en Sistemas",
    institution: "Instituto Técnico Dámaso Zapata",
    period: "2022",
    location: "Bucaramanga",
    status: "Completado"
  }
];

export const certifications = [
  {
    name: "Programming Essentials in Python",
    issuer: "Cisco Networking Academy",
    date: "Noviembre 2023",
    type: "Curso"
  },
  {
    name: "Cloud Foundations",
    issuer: "AWS Academy",
    date: "2025",
    type: "Curso académico"
  },
  {
    name: "Data Engineering",
    issuer: "AWS Academy",
    date: "2025",
    type: "Curso académico"
  },
  {
    name: "Machine Learning For Natural Language Processing",
    issuer: "AWS Academy",
    date: "2025",
    type: "Curso académico"
  },
  {
    name: "Generative AI Foundations",
    issuer: "AWS Academy",
    date: "2025",
    type: "Curso académico"
  },
  {
    name: "Introduction to IoT",
    issuer: "Cisco Networking Academy",
    date: "2025",
    type: "Curso"
  }
];

export const workExperience = [
  {
    position: "Freelance Software Developer",
    company: "Clientes PYME",
    period: "Enero 2024 - Presente",
    location: "Remoto, Bucaramanga, Colombia",
    description: "Construyo y opero software en producción para clientes PYME en logística, salud, turismo y comercio. Un agente LLM de reservas por WhatsApp (el código calcula disponibilidad y precio, el modelo solo redacta y guardrails deterministas validan cada respuesta) con un harness de 30 casos de evaluación. APIs REST con Django, FastAPI y NestJS con autenticación JWT/OAuth. Despliegues en Docker sobre Linux con Nginx, systemd y CI/CD en GitHub Actions. Infraestructura self-hosted con Coolify y automatización con n8n.",
    type: "Freelance remoto"
  }
];

export const skills = {
  backend: [
    { name: "Django" },
    { name: "FastAPI" },
    { name: "NestJS" },
    { name: "Laravel" },
    { name: "Node.js" },
    { name: "Python" },
    { name: "Go" },
    { name: "PHP" },
    { name: "Java" }
  ],
  frontend: [
    { name: "React" },
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
    { name: "Astro" },
    { name: "React Native" }
  ],
  databases: [
    { name: "PostgreSQL" },
    { name: "MySQL" },
    { name: "MongoDB" },
    { name: "Redis" },
    { name: "TimescaleDB" }
  ],
  automationAndCloud: [
    { name: "n8n" },
    { name: "Docker" },
    { name: "AWS" },
    { name: "Linux" },
    { name: "CI/CD" },
    { name: "Nginx" },
    { name: "Bots (WhatsApp/Telegram)" },
    { name: "MQTT / IoT" }
  ],
  ai: [
    { name: "LLM (Claude, Gemini, MiniMax)" },
    { name: "Agentes y MCP" },
    { name: "Evals" },
    { name: "Claude Code / opencode" },
    { name: "PyTorch" },
    { name: "Aprendizaje autosupervisado" }
  ]
};


export const projectCategories = [
  "Todos",
  "IA & Agentes",
  "Open Source",
  "Backend & IoT",
  "Seguridad",
  "Mobile & ML",
  "Dev Tools",
];

export const projects = [
  {
    id: 1,
    title: "GobIA Auditor — Swarm de Agentes IA",
    description: "Orquestador de IA construido en la Hackathon Colombia 5.0 (MinTIC): un swarm de agentes sobre MiniMax M2.7 audita contratos públicos del SECOP II y detecta riesgos de transparencia y posibles irregularidades. Primer puesto regional y finalista nacional.",
    tech: ["TypeScript", "AI Agents", "MiniMax M2.7", "Next.js", "REST API"],
    github: "https://github.com/nicolas2601/orquestador-minimax",
    category: "IA & Agentes",
    featured: true,
    metrics: [
      { value: "1.er puesto", label: "Regional · Hackathon Colombia 5.0" },
      { value: "SECOP II", label: "Auditoría multi-agente" }
    ]
  },
  {
    id: 2,
    title: "Agente de Reservas por WhatsApp",
    description: "Agente LLM de reservas en producción para un hospedaje. El código calcula disponibilidad y precio, el modelo solo redacta, y guardrails deterministas validan cada respuesta antes de enviarla. Incluye alertas cuando el flujo falla y rollback de modelo en un paso.",
    image: "/reservas-dashboard.png",
    tech: ["n8n", "WhatsApp Cloud API", "Gemini", "PostgreSQL", "Docker"],
    category: "IA & Agentes",
    featured: true,
    metrics: [
      { value: "24/7", label: "Atención automática" },
      { value: "30 casos", label: "Harness de evaluación" }
    ]
  },
  {
    id: 3,
    title: "Plataforma IoT con Dashboard en Tiempo Real",
    description: "Sistema de monitoreo en tiempo real inspirado en Azure IoT Central. Backend que ingiere streams de telemetría de sensores por MQTT y los visualiza al instante con gráficos en vivo y alertas por umbral.",
    image: "/iot.png",
    tech: ["Django", "MQTT", "Next.js", "TimescaleDB", "WebSockets", "Docker"],
    github: "https://github.com/nicolas2601/IOT_Central",
    category: "Backend & IoT",
    featured: true,
    metrics: [
      { value: "MQTT", label: "Ingesta de telemetría" },
      { value: "Real-time", label: "Dashboard con alertas" }
    ]
  },
  {
    id: 4,
    title: "Tesis: Aprendizaje Autosupervisado en Imágenes Médicas",
    description: "Detección de lesiones de piel con aprendizaje autosupervisado (SimSiam, DINOv2) sobre HAM10000, ISIC 2019, ISIC 2020 y PAD-UFES-20. Entrenamiento distribuido DDP en 2 GPUs en el clúster de la universidad y evaluación con backbone congelado. Asesoría de KAUST.",
    tech: ["PyTorch", "DINOv2", "SimSiam", "DDP", "TensorBoard", "Python"],
    category: "Mobile & ML",
    featured: true,
    metrics: [
      { value: "2 GPUs", label: "Entrenamiento DDP" },
      { value: "KAUST", label: "Asesoría de tesis" }
    ]
  },
  {
    id: 5,
    title: "n8n — Fix del nodo de Jira Cloud",
    description: "Pull request aceptado en n8n: el nodo de Jira Software enviaba `expand` en un formato que Jira Cloud rechaza en las búsquedas. Lo corregí para enviarlo como cadena separada por comas, con pruebas.",
    tech: ["TypeScript", "n8n", "Jira API"],
    github: "https://github.com/n8n-io/n8n/pull/37527",
    category: "Open Source",
    featured: true,
    metrics: [
      { value: "Merged", label: "n8n-io/n8n #37527" },
      { value: "Con pruebas", label: "Fix verificado" }
    ]
  },
  {
    id: 6,
    title: "umami — basePath y duración de replays",
    description: "Dos pull requests aceptados en umami: el enlace de \"Manage teams\" ignoraba el basePath configurado, y la duración de los replays se calculaba mal. Ahora se calcula sobre el span completo de la grabación.",
    tech: ["TypeScript", "Next.js", "umami"],
    github: "https://github.com/umami-software/umami/pull/4503",
    category: "Open Source",
    featured: false,
    metrics: [
      { value: "2 PRs", label: "Merged en umami" },
      { value: "#4502 · #4503", label: "basePath y replays" }
    ]
  },
  {
    id: 7,
    title: "AVÍSAME — SaaS para Restaurantes",
    description: "El comensal pide atención escaneando un QR. API en NestJS, panel web en Next.js y app móvil en React Native y Expo compilada y firmada para Android, con tipos de TypeScript compartidos. Desplegado en un VPS y en fase de pruebas.",
    tech: ["NestJS", "Prisma", "Next.js", "Expo", "PostgreSQL"],
    github: "https://github.com/nicolas2601/avisame-v3",
    category: "Backend & IoT",
    featured: false,
    metrics: [
      { value: "En pruebas", label: "Sin clientes en producción" },
      { value: "3 apps", label: "API, panel web y móvil" }
    ]
  },
  {
    id: 8,
    title: "ghoscli — CLI de Codificación Agéntica",
    description: "CLI propia de codificación con IA que corre en la terminal: TUI con Ink, loop de agente sobre API estilo /v1/messages, soporte multi-proveedor de LLM (Anthropic, MiniMax, OpenRouter), modos interactivo y headless y desarrollo guiado por specs.",
    tech: ["TypeScript", "Bun", "Ink", "React", "LLM", "TDD"],
    category: "Dev Tools",
    featured: false,
    metrics: [
      { value: "Multi-LLM", label: "Anthropic / MiniMax" },
      { value: "TDD", label: "Suite bun:test" }
    ]
  },
  {
    id: 9,
    title: "OmniCoder — Plugin para opencode",
    description: "Plugin para opencode publicado en npm: enrutador de skills con ranking BM25, guardia de seguridad, presupuesto de tokens, carga de memoria y failover entre proveedores de LLM.",
    tech: ["TypeScript", "Bun", "npm", "opencode", "BM25"],
    github: "https://github.com/nicolas2601/omnicoder",
    category: "Dev Tools",
    featured: false,
    metrics: [
      { value: "npm", label: "@nicolas2601/omnicoder" },
      { value: "MIT", label: "Licencia abierta" }
    ]
  },
  {
    id: 10,
    title: "router-skills — Provisioner de Agent Skills",
    description: "Herramienta cross-platform (Linux, macOS y Windows) que hace que Claude Code y opencode elijan la skill correcta antes de llamar al modelo, con ranking BM25 e instaladores endurecidos.",
    tech: ["Node.js", "Python", "Bash", "BM25", "AI Tooling"],
    github: "https://github.com/nicolas2601/router-skills",
    category: "Dev Tools",
    featured: false,
    metrics: [
      { value: "3 OS", label: "Linux, macOS y Windows" },
      { value: "BM25", label: "Ranking de skills" }
    ]
  },
  {
    id: 11,
    title: "PromptLab — Optimizador de Prompts Multimodal",
    description: "Convierte ideas sueltas, notas de voz o imágenes de referencia en prompts listos para producción. Transcripción con Whisper, modelo de visión para imágenes, respuestas en streaming y ejecución de prueba contra el modelo real.",
    tech: ["Next.js", "Vercel AI SDK", "Groq", "Whisper", "TypeScript"],
    github: "https://github.com/nicolas2601/prompt-lab",
    category: "IA & Agentes",
    featured: false,
    metrics: [
      { value: "Streaming", label: "Respuestas en vivo" },
      { value: "Voz + imagen", label: "Entrada multimodal" }
    ]
  },
  {
    id: 12,
    title: "API de Órdenes en Go (GraphQL)",
    description: "Prueba técnica resuelta con Clean Architecture: GraphQL, JWT, descuento de stock transaccional, DataLoader contra N+1 y pruebas de integración con testcontainers. Entregada en pull requests pequeños, uno por feature, con CI.",
    tech: ["Go", "GraphQL", "PostgreSQL", "JWT", "testcontainers"],
    github: "https://github.com/nicolas2601/go-graphql-orders-api",
    category: "Backend & IoT",
    featured: false,
    metrics: [
      { value: "Clean Arch", label: "Dominio desacoplado" },
      { value: "CI", label: "GitHub Actions" }
    ]
  },
  {
    id: 13,
    title: "Traductor de Lengua de Señas Colombiana (IA)",
    description: "Aplicación móvil de inclusión social que usa modelos de IA (Transformers) para traducir Lengua de Señas Colombiana a texto en tiempo real, con ejecución nativa en dispositivo.",
    image: "/lsc-app.png",
    tech: ["React Native", "FastAPI", "Transformers", "Python", "T5"],
    github: "https://github.com/nicolas2601/data-ciencia-lsc",
    category: "Mobile & ML",
    featured: false,
    metrics: [
      { value: "Mobile", label: "Ejecución nativa" },
      { value: "Real-time", label: "Traducción de gestos" }
    ]
  },
  {
    id: 14,
    title: "CyberRisk 27001 — Auditoría de Seguridad",
    description: "Evaluación de riesgos de ciberseguridad con ejercicios de Red Team, metodología MAGERIT e ISO/IEC 27001:2022. Incluye laboratorios prácticos de explotación y plan de tratamiento de riesgos.",
    tech: ["Red Team", "ISO 27001", "MAGERIT", "Pentesting", "OWASP"],
    github: "https://github.com/nicolas2601/hackathon-cyberrisk-27001",
    category: "Seguridad",
    featured: false,
    metrics: [
      { value: "4 labs", label: "Explotación práctica" },
      { value: "ISO 27001", label: "Gestión de riesgo" }
    ]
  },
  {
    id: 15,
    title: "SQL Injection Lab — Demo OWASP",
    description: "Dos aplicaciones Flask gemelas (una vulnerable, una blindada) que demuestran de forma didáctica inyección SQL, XSS, SSTI y otras fallas del OWASP Top 10, con sus mitigaciones y pruebas E2E con Playwright.",
    tech: ["Python", "Flask", "Docker", "Playwright", "OWASP"],
    github: "https://github.com/nicolas2601/sql-injection-demo",
    category: "Seguridad",
    featured: false,
    metrics: [
      { value: "9 vulns", label: "Demostradas + fix" },
      { value: "18 E2E", label: "Pruebas con Playwright" }
    ]
  },
  {
    id: 16,
    title: "Generador de Marcas de Ganado con IA",
    description: "Herramienta web para un cliente real que genera sellos de marcado de ganado con IA generativa (Gemini), partiendo de 29 figuras oficiales registradas. Embebible en WordPress.",
    tech: ["Preact", "Hono", "Gemini AI", "TypeScript", "Vercel"],
    github: "https://github.com/nicolas2601/marca-ganado-generator",
    category: "IA & Agentes",
    featured: false,
    metrics: [
      { value: "Cliente real", label: "Producto entregado" },
      { value: "29 figuras", label: "Catálogo oficial" }
    ]
  }
];
