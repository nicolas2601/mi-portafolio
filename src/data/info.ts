
export const personalInfo = {
  nm: "Nicolas Moreno",
  name: "Nicolás Santiago Moreno Monroy",
  title: "Desarrollador Backend & Estudiante de Ingeniería",
  email: "nm5571762@gmail.com",
  phone: "+57 350 232 8517",
  location: "Bucaramanga, Santander, Colombia",
  postalCode: "680001",
  bio: "Soy técnico en sistemas y estudiante de Ingeniería de Sistemas en la Universidad Autónoma de Bucaramanga, actualmente cursando séptimo semestre. Cuento con experiencia en desarrollo de software y desarrollo web, así como en mantenimiento de plataformas existentes. He trabajado desarrollando y manteniendo módulos web internos utilizando HTML5, CSS3 y JavaScript (ES6+), asegurando que las interfaces sean responsivas y compatibles con navegadores modernos. También he realizado mantenimiento en páginas web oficiales utilizando WordPress, trabajando tanto con plugins como con desarrollo directo en PHP. Me considero una persona comprometida, orientada a resultados y con alta capacidad de aprendizaje.",
  avatar: "/perfil1.jpg",
  socialLinks: {
    linkedin: "https://linkedin.com/in/nicolas-moreno-dev",
    github: "https://github.com/nicolas2601",
    portfolio: "https://mi-portafolio-psi-ruby.vercel.app"
  }
};

export const education = [
  {
    degree: "Ingeniería de Sistemas",
    institution: "Universidad Autónoma de Bucaramanga",
    period: "En curso (7° Semestre)",
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
    position: "Programador Web Junior",
    company: "Accasoft ERP",
    period: "Junio 2023 - Junio 2024",
    location: "Remoto, Bucaramanga",
    description: "Participación en desarrollo web, mantenimiento de sistemas, pruebas de calidad y optimización de software. Fortalecimiento de habilidades técnicas y experiencia en entornos reales de trabajo, colaborando en equipo y siguiendo buenas prácticas de desarrollo.",
    type: "Trabajo remoto"
  }
];

export const skills = {
  programmingLanguages: [
    { name: "Python" },
    { name: "JavaScript (ES6+)" },
    { name: "TypeScript" },
    { name: "PHP" },
    { name: "Kotlin" },
    { name: "Java" } // Added based on context though not explicitly in the "list" text, valid for student
  ],
  frameworks: [ // Merged frontend/backend/mobile frameworks for cleaner UI or kept separate? User list mixed them. I will group them nicely.
    { name: "Django" },
    { name: "Laravel" },
    { name: "React" },
    { name: "Next.js" },
    { name: "NestJS" },
    { name: "Tailwind CSS" },
    { name: "React Native" }
  ],
  databases: [
    { name: "MySQL" },
    { name: "PostgreSQL" },
    { name: "MongoDB" }
  ],
  devOpsAndTools: [
    { name: "Docker" },
    { name: "Azure" },
    { name: "Git" },
    { name: "Linux" },
    { name: "CI/CD" }
  ],
  other: [ // Converted to objects to match the component expectation
    { name: "POO" },
    { name: "Microservicios" },
    { name: "APIs REST" },
    { name: "Scrum" },
    { name: "Seguridad App" },
    { name: "Testing" }
  ]
};

export const projects = [
  {
    id: 1,
    title: "TIKNO - Software Solutions",
    description: "Startup de desarrollo de software enfocada en soluciones tecnológicas modernas y escalables.",
    image: "/Tikno.jpg",
    tech: ["React", "Next.js", "Node.js", "TypeScript"],
    github: "https://github.com/tikno-col",
    demo: "https://tikno-col.github.io/TIKNO",
    featured: true
  },
  {
    id: 2,
    title: "Portafolio Personal",
    description: "Sitio web personal showcasing proyectos y habilidades técnicas",
    image: "/Portafolio.jpg",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    github: "https://github.com/nicolas2601/MY_WEB",
    demo: "https://nicolas2601.github.io/MY_WEB/",
    featured: true
  },
  {
    id: 3,
    title: "Aplicacion de Mindfulness",
    description: "App móvil diseñada para mejorar la salud mental de los usuarios utilizando Kotlin y Android Studio.",
    image: "/mindfulnes 1.jpg",
    tech: ["Kotlin", "Jetpack Compose", "Android Studio", "Firebase"],
    github: "https://github.com/nicolas2601/yourJourney",
    featured: true
  },
  {
    id: 4,
    title: "Gestión de Horas Libres Universitarias",
    description: "Sistema para la optimización de tiempos y recursos en universidades.",
    image: "/Java_Horas libres.jpg",
    tech: ["Java", "MySQL", "JDBC", "Swing"],
    github: "https://github.com/nicolas2601/HorasLibresUnab",
    featured: true
  },
  {
    id: 5,
    title: "Juego de Precisión (Aimlabs clone)",
    description: "Juego en Python para mejorar la precisión y reflejos.",
    image: "/juego python.jpg",
    tech: ["Python", "Pygame", "NumPy"],
    github: "https://github.com/nicolas2601/Aimlab-python",
    featured: true
  },
  {
    id: 6,
    title: "Python Mentor",
    description: "Plataforma educativa para aprender fundamentos de Python.",
    image: "/PythonMentor.jpg",
    tech: ["Laravel", "Blade"],
    github: "https://github.com/nicolas2601/PythonMentor",
    featured: true
  },
  {
    id: 7,
    title: "ERP System",
    description: "Aplicación web de administración de recursos empresariales.",
    image: "/erp.jpg",
    tech: ["Django", "React", "PostgreSQL"],
    github: "https://github.com/TIKNO-col/APP-WEB",
    featured: true
  },
  {
    id: 8,
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico completa.",
    image: "/ecommerce1.jpg",
    tech: ["Django", "React", "PostgreSQL"],
    github: "https://github.com/nicolas2601/Ecommerce-TIKNO-Project",
    featured: true
  },
  {
    id: 9,
    title: "Plataforma IOT Central",
    description: "Gestión de dispositivos IoT con protocolos MQTT.",
    image: "/iot.png",
    tech: ["Django", "Next.js", "MQTT", "Docker"],
    github: "https://github.com/nicolas2601/IOT_Central",
    featured: true
  },
  {
    id: 10,
    title: "Traductor LSC (Machine Learning)",
    description: "Aplicación para traducir lenguaje de señas colombiano.",
    image: "/landingpage.jpg", // Placeholder until user fixes image
    tech: ["React Native", "FastAPI", "Transformers"],
    github: "https://github.com/nicolas2601/data-ciencia-lsc",
    featured: true
  }
];
