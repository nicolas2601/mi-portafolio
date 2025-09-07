// src/data/info.ts - Información profesional completa
export const personalInfo = {
  nm:"Nicolas Moreno",
  name: "Nicolás Santiago Moreno Monroy",
  title: "Desarrollador backend",
  email: "nm5571762@gmail.com",
  phone: "+57 350 232 8517",
  location: "Bucaramanga, Santander, Colombia",
  postalCode: "680001",
  bio: "Desarrollador de software junior con experiencia en desarrollo web, aplicaciones móviles, QA testing y fundamentos de ciberseguridad. Me especializo en tecnologías modernas como Python, JavaScript, Java y C#, además de frameworks como React, Next.js, Nest.js, Laravel y Django. Profesional orientado al aprendizaje constante, comprometido con las mejores prácticas de desarrollo y enfocado en el trabajo en equipo para la creación de proyectos innovadores.",
  avatar: "/assets/perfil.jpg",
  socialLinks: {
    linkedin: "https://linkedin.com/in/nicolas-moreno-dev",
    github: "https://github.com/nicolas2601",
    portfolio: "https://nicolas2601.github.io/MY_WEB",
    startup: "https://tikno-col.github.io/TIKNO"
  }
};

export const education = [
  {
    degree: "Ingeniería de Sistemas",
    institution: "Universidad Autónoma de Bucaramanga",
    period: "En curso",
    expectedGraduation: "2027",
    status: "En progreso"
  },
  {
    degree: "Bachiller Técnico en Sistemas",
    institution: "Instituto Técnico Dámaso Zapata",
    period: "2010 to 2022",
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
    name: "Cloud fundations",
    issuer: "AWS academy",
    data: "Septiembre 2025",
    type: "Certificación"
  }
];

export const workExperience = [
  {
    position: "Desarrollador Full-Stack",
    company: "LOGOTEXO",
    period: "Mayo 2025 - Julio 2025",
    location: "Remoto, Bucaramanga",
    description: "Desarrollo y mantenimiento de aplicaciones full-stack, contribución a proyectos escalables y colaboración en entornos distribuidos.",
    type: "Trabajo remoto"
  },
  {
    position: "Programador Web Junior",
    company: "Accasoft ERP",
    period: "Junio 2023 - Junio 2024",
    description: "Participación en desarrollo web, mantenimiento de sistemas, pruebas de calidad y optimización de software.",
    type: "Trabajo remoto"
  }
];

export const startup = {
  name: "TIKNO",
  description: "Software Development Company",
  role: "Fundador",
  website: "https://tikno-col.github.io/TIKNO",
  focus: [
    "Desarrollo web y móvil con tecnologías actuales",
    "Sistemas personalizados para empresas",
    "Proyectos innovadores que combinan software de calidad con diseño profesional",
    "Metodologías de mejora continua aplicadas en proyectos colaborativos"
  ],
  description_long: "Startup de desarrollo de software enfocada en crear soluciones tecnológicas modernas, escalables y funcionales para empresas, organizaciones y proyectos digitales."
};

export const skills = {
  programmingLanguages: [
    { name: "Python"},
    { name: "JavaScript (ES6+)"},
    { name: "TypeScript"},
    { name: "Java"},
    { name: "C#"},
    { name: "PHP"},
    { name: "Kotlin"}
  ],
  frontend: [
    { name: "HTML5"},
    { name: "CSS3"},
    { name: "Bootstrap"},
    { name: "React"},
    { name: "Next.js"},
    { name: "tailwindcss"}
  ],
  backend: [
    { name: "Node.js"},
    { name: "Nest.js"},
    { name: "Django"},
    { name: "Laravel"},
    {name: "express.js"},
    {name: "springboot"},
  ],
  databases: [
    { name: "MySQL"},
    { name: "PostgreSQL"},
    { name: "NoSQL"}
  ],
  infrastructure: [
    { name: "Docker"},
    { name: "Azure"},
    { name: "Linux"}
  ],
  other: [
    "Testing manual de aplicaciones web",
    "Depuración y debugging de código",
    "Verificación de funcionalidades",
    "Implementación de seguridad básica en aplicaciones web",
    "Administración y optimización de bases de datos",
    "Trabajo colaborativo en estrategias digitales"
  ]
};

export const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "Medio" }
];

export const strengths = [
  "Desarrollo web completo (frontend y backend)",
  "Experiencia con frameworks modernos (React, Next.js, Nest.js, Django, Laravel)",
  "Capacidad para trabajar con bases de datos SQL y NoSQL",
  "Conocimientos en infraestructura y despliegues con Docker y Azure",
  "Manejo de Linux como sistema principal de desarrollo",
  "Experiencia previa en QA testing, debugging y seguridad básica",
  "Enfoque en innovación a través de mi startup TIKNO",
  "Capacidad de trabajo colaborativo y orientación a resultados"
];

export const projects = [
  {
    id: 1,
    title: "TIKNO - Software Development Company",
    description: "Startup de desarrollo de software con enfoque en soluciones tecnológicas modernas y escalables",
    image: "/tikno-project.jpg",
    tech: ["React", "Next.js", "Node.js", "TypeScript"],
    github: "https://github.com/tikno-col",
    demo: "https://tikno-col.github.io/TIKNO",
    featured: true
  },
  {
    id: 2,
    title: "Portafolio Personal",
    description: "Sitio web personal showcasing proyectos y habilidades técnicas",
    image: "/portfolio-project.jpg",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    github: "https://github.com/nicolas2601/MY_WEB",
    demo: "https://nicolas2601.github.io/MY_WEB",
    featured: true
  }
];