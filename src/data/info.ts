
export const personalInfo = {
  nm: "Nicolas Moreno",
  name: "Nicolás Santiago Moreno Monroy",
  title: "Software Engineer & Full-Stack Developer",
  email: "nm5571762@gmail.com",
  phone: "+57 350 232 8517",
  location: "Bucaramanga, Santander, Colombia",
  postalCode: "680001",
  bio: "Desarrollador Full-Stack y estudiante de Ingeniería de Sistemas (UNAB, 8° semestre) con más de 2 años construyendo aplicaciones web y servicios backend en producción. Sólido en Python (Django, Django REST, FastAPI), TypeScript (NestJS, Node.js, Bun) y React/Next.js, con despliegue containerizado sobre Linux e integración de modelos de lenguaje (LLM).\n\nGanador regional de la Hackathon Colombia 5.0 (MinTIC, Bucaramanga). Autor de ghoscli, una CLI de codificación agéntica propia en TypeScript/Bun. He entregado desde plataformas IoT en tiempo real y sistemas de reservas automatizados hasta motores de prospección B2B con IA. Cómodo asumiendo una feature de punta a punta: API, base de datos, frontend y despliegue. Disponible para roles remotos (full o medio tiempo) en timezone de Américas (GMT-5).",
  avatar: "/perfil1.jpg",
  socialLinks: {
    linkedin: "https://linkedin.com/in/nicolas-moreno-dev",
    github: "https://github.com/nicolas2601",
    portfolio: "https://nicolasmoreno.site"
  }
};

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
    type: "Certificación"
  },
  {
    name: "Cloud Foundations",
    issuer: "AWS Academy",
    date: "2025",
    type: "Certificación"
  },
  {
    name: "Data Engineering",
    issuer: "AWS Academy",
    date: "2025",
    type: "Certificación"
  },
  {
    name: "Machine Learning For Natural Language Processing",
    issuer: "AWS Academy",
    date: "2025",
    type: "Certificación"
  },
  {
    name: "Generative AI Foundations",
    issuer: "AWS Academy",
    date: "2025",
    type: "Certificación"
  },
  {
    name: "Introduction to IoT",
    issuer: "Cisco Networking Academy",
    date: "2025",
    type: "Certificación"
  }
];

export const workExperience = [
  {
    position: "Freelance Software Developer",
    company: "Independent Contractor",
    period: "Enero 2024 - Presente",
    location: "Remoto, Bucaramanga, Colombia",
    description: "Diseño y desarrollo de aplicaciones web a medida para clientes PYME en sectores de logística, salud y comercio. Soluciones full-stack con Django, NestJS, React y Next.js con despliegues containerizados en Docker. Plataforma de prospección automatizada con Google Maps, CRM, generación de mensajes con IA y email outreach. Bots inteligentes para WhatsApp y Telegram. Infraestructura self-hosted con Coolify. Automatización de workflows con n8n.",
    type: "Freelance remoto"
  },
  {
    position: "Web Developer",
    company: "Accasoft ERP",
    period: "Junio 2023 - Junio 2024",
    location: "Remoto, Bucaramanga",
    description: "Desarrollo y mantenimiento de módulos web internos para sistema ERP empresarial. Interfaces responsivas cross-browser con HTML5, CSS3, JavaScript y PHP. Gestión de plataformas WordPress CMS. Colaboración en equipos multidisciplinarios con metodología ágil. Optimización de tiempos de carga frontend mediante refactorización de CSS/JS.",
    type: "Trabajo remoto"
  }
];

export const skills = {
  backend: [
    { name: "Django" },
    { name: "NestJS" },
    { name: "Laravel" },
    { name: "Node.js" },
    { name: "Python" },
    { name: "PHP" },
    { name: "Java" }
  ],
  frontend: [
    { name: "React" },
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
    { name: "React Native" }
  ],
  databases: [
    { name: "PostgreSQL" },
    { name: "MySQL" },
    { name: "MongoDB" }
  ],
  automationAndCloud: [
    { name: "n8n" },
    { name: "Docker" },
    { name: "AWS" },
    { name: "Linux" },
    { name: "CI/CD" },
    { name: "Bots (WhatsApp/Telegram)" },
    { name: "MQTT / IoT" }
  ]
};


export const projects = [
  {
    id: 1,
    title: "Plataforma IoT con Dashboard en Tiempo Real",
    description: "Sistema de monitoreo en tiempo real para dispositivos IoT. Backend robusto que ingiere streams de telemetría de sensores y los visualiza al instante con gráficos en vivo y alertas por umbral.",
    image: "/iot.png",
    tech: ["Django", "MQTT", "Next.js", "TimescaleDB", "WebSockets", "Docker"],
    github: "https://github.com/nicolas2601/IOT_Central",
    featured: true,
    metrics: [
      { value: "100+", label: "Dispositivos conectados" },
      { value: "<100ms", label: "Latencia real-time" }
    ]
  },
  {
    id: 2,
    title: "ghoscli — CLI de Codificación Agéntica",
    description: "CLI propia de codificación con IA que corre en la terminal: TUI con Ink, loop de agente sobre API estilo /v1/messages, soporte multi-proveedor de LLM (Anthropic, MiniMax, OpenRouter), modos interactivo y headless, desarrollo guiado por specs y pruebas con bun:test.",
    image: "/Portafolio.jpg",
    tech: ["TypeScript", "Bun", "Ink", "React", "LLM", "TDD"],
    featured: true,
    metrics: [
      { value: "Multi-LLM", label: "Anthropic / MiniMax" },
      { value: "TDD", label: "Suite bun:test" }
    ]
  },
  {
    id: 3,
    title: "Sistema de Reservas Automatizado",
    description: "Plataforma web con bot de WhatsApp para gestión automática de reservas, pagos en línea y panel administrativo. Redujo el tiempo de gestión operativa mediante flujos automatizados con n8n y atención 24/7.",
    image: "/reservas-dashboard.png",
    tech: ["Django REST", "WhatsApp API", "PostgreSQL", "React", "n8n", "Docker"],
    featured: true,
    metrics: [
      { value: "~80%", label: "Menos tiempo manual" },
      { value: "24/7", label: "Bot de atención" }
    ]
  },
  {
    id: 4,
    title: "Traductor de Lengua de Señas Colombiana (IA)",
    description: "Aplicación móvil de inclusión social que usa modelos de IA (Transformers) para traducir Lengua de Señas Colombiana a texto en tiempo real, con ejecución nativa en dispositivo.",
    image: "/lsc-app.png",
    tech: ["React Native", "FastAPI", "Transformers", "Python", "T5"],
    github: "https://github.com/nicolas2601/data-ciencia-lsc",
    featured: true,
    metrics: [
      { value: "Mobile", label: "Ejecución nativa" },
      { value: "Real-time", label: "Traducción de gestos" }
    ]
  }
];
