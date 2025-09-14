import { e as createComponent, m as maybeRenderHead, r as renderTemplate, f as createAstro, h as addAttribute, n as renderHead, k as renderComponent, o as renderSlot, l as renderScript } from './astro/server_MuBBtQ0k.mjs';
/* empty css                         */
import 'clsx';

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="logo-container flex items-center space-x-3" data-astro-cid-bt5hbwbt> <!-- Animated Logo Icon --> <div class="relative w-10 h-10 flex items-center justify-center" data-astro-cid-bt5hbwbt> <!-- Main circle with gradient --> <div class="absolute inset-0 bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 rounded-full animate-pulse-glow" data-astro-cid-bt5hbwbt> <div class="absolute inset-0.5 bg-gray-900 rounded-full flex items-center justify-center" data-astro-cid-bt5hbwbt> <!-- Inner animated elements --> <div class="relative w-full h-full flex items-center justify-center" data-astro-cid-bt5hbwbt> <!-- Rotating rings --> <div class="absolute inset-1 border-2 border-gray-400/30 rounded-full animate-spin-slow" data-astro-cid-bt5hbwbt> <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gray-400 rounded-full" data-astro-cid-bt5hbwbt></div> </div> <div class="absolute inset-2 border border-gray-300/20 rounded-full animate-spin-reverse" data-astro-cid-bt5hbwbt> <div class="absolute bottom-0 right-1/4 transform translate-x-1/2 translate-y-1/2 w-1 h-1 bg-gray-300 rounded-full" data-astro-cid-bt5hbwbt></div> </div> <!-- Central icon --> <div class="relative z-10 text-gray-300 font-bold text-lg animate-float" data-astro-cid-bt5hbwbt>
N
</div> <!-- Pulsing core --> <div class="absolute inset-3 bg-gray-500/20 rounded-full animate-ping" style="animation-duration: 2s;" data-astro-cid-bt5hbwbt></div> </div> </div> </div> <!-- Outer glow effect --> <div class="absolute inset-0 bg-gray-500/20 rounded-full blur-lg animate-glow-pulse" data-astro-cid-bt5hbwbt></div> <!-- Energy particles --> <div class="absolute top-0 left-0 w-1 h-1 bg-gray-400 rounded-full animate-particle-1" data-astro-cid-bt5hbwbt></div> <div class="absolute top-2 right-0 w-0.5 h-0.5 bg-gray-300 rounded-full animate-particle-2" data-astro-cid-bt5hbwbt></div> <div class="absolute bottom-1 left-1 w-0.5 h-0.5 bg-gray-500 rounded-full animate-particle-3" data-astro-cid-bt5hbwbt></div> </div> <!-- Animated text --> <div class="text-xl font-bold text-white relative overflow-hidden group" data-astro-cid-bt5hbwbt> <span class="relative z-10 transition-all duration-300 group-hover:text-gray-300" data-astro-cid-bt5hbwbt>
Nicolas Moreno
</span> <!-- Animated underline --> <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 transition-all duration-500 group-hover:w-full" data-astro-cid-bt5hbwbt></div> <!-- Shimmer effect --> <div class="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" data-astro-cid-bt5hbwbt></div> </div> </div> `;
}, "C:/Users/Usuario/Documents/proyectos Backend/mi-portafolio/src/components/ui/Logo.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Portafolio de Nicolas Moreno - desarrollador backend" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title>${renderHead()}</head> <body class="bg-gray-900 text-white min-h-screen"> <nav class="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex items-center justify-between h-16"> <div class="flex-shrink-0 flex items-center"> <a href="/" class="flex items-center"> ${renderComponent($$result, "Logo", $$Logo, {})} </a> </div> <!-- Menú Desktop --> <div class="hidden md:block"> <div class="ml-10 flex items-baseline space-x-4"> <a href="/" class="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Inicio</a> <a href="/about" class="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Sobre Mí</a> <a href="/projects" class="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Proyectos</a> <a href="/contact" class="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contacto</a> </div> </div> <!-- Botón Hamburger Móvil --> <div class="md:hidden"> <button id="mobile-menu-button" type="button" class="text-gray-400 hover:text-white focus:outline-none focus:text-white transition-colors duration-300" aria-label="Abrir menú de navegación" aria-expanded="false" aria-controls="mobile-menu"> <svg id="hamburger-icon" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> <svg id="close-icon" class="h-6 w-6 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> </div> </div> <!-- Menú Móvil Desplegable --> <div id="mobile-menu" class="md:hidden hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800 transform transition-all duration-300 ease-in-out" role="menu" aria-labelledby="mobile-menu-button"> <div class="px-2 pt-2 pb-3 space-y-1"> <a href="/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-300" role="menuitem">Inicio</a> <a href="/about" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-300" role="menuitem">Sobre Mí</a> <a href="/projects" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-300" role="menuitem">Proyectos</a> <a href="/contact" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-300" role="menuitem">Contacto</a> </div> </div> </nav> <main class="pt-16"> ${renderSlot($$result, $$slots["default"])} </main> <footer> <div class="max-w-7xl sm:px-6 lg:px-8 py-8"> <p class="text-center text-gray-400 text-sm">
© ${(/* @__PURE__ */ new Date()).getFullYear()} Nicolas Moreno. Todos los derechos reservados.
</p> </div> </footer> <!-- Vercel Analytics se inyecta automáticamente por el adaptador --> ${renderScript($$result, "C:/Users/Usuario/Documents/proyectos Backend/mi-portafolio/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "C:/Users/Usuario/Documents/proyectos Backend/mi-portafolio/src/layouts/Layout.astro", void 0);

const personalInfo = {
  nm: "Nicolas Moreno",
  title: "Desarrollador backend - fullstack ",
  email: "nm5571762@gmail.com",
  phone: "+57 350 232 8517",
  location: "Bucaramanga, Santander, Colombia",
  bio: "Desarrollador de software junior con experiencia en desarrollo web, aplicaciones móviles, QA testing y fundamentos de ciberseguridad. Me especializo en tecnologías modernas como Python, JavaScript, Java y C#, además de frameworks como React, Next.js, Nest.js, Laravel y Django. Profesional orientado al aprendizaje constante, comprometido con las mejores prácticas de desarrollo y enfocado en el trabajo en equipo para la creación de proyectos innovadores.",
  avatar: "/perfil1.jpg",
  socialLinks: {
    linkedin: "https://linkedin.com/in/nicolas-moreno-dev",
    github: "https://github.com/nicolas2601"}
};
const education = [
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
const certifications = [
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
const workExperience = [
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
    location: "Remoto, Bucaramanga",
    description: "Participación en desarrollo web, mantenimiento de sistemas, pruebas de calidad y optimización de software.",
    type: "Trabajo remoto"
  }
];
const startup = {
  name: "TIKNO",
  description: "Software Development Company",
  role: "CO-Fundador",
  website: "https://tikno-col.github.io/TIKNO",
  focus: [
    "Desarrollo web y móvil con tecnologías actuales",
    "Sistemas personalizados para empresas",
    "Proyectos innovadores que combinan software de calidad con diseño profesional",
    "Metodologías de mejora continua aplicadas en proyectos colaborativos"
  ],
  description_long: "Startup de desarrollo de software enfocada en crear soluciones tecnológicas modernas, escalables y funcionales para empresas, organizaciones y proyectos digitales."
};
const skills = {
  programmingLanguages: [
    { name: "Python" },
    { name: "JavaScript (ES6+)" },
    { name: "TypeScript" },
    { name: "Java" },
    { name: "C#" },
    { name: "PHP" },
    { name: "Kotlin" }
  ],
  frontend: [
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "Bootstrap" },
    { name: "React" },
    { name: "Next.js" },
    { name: "tailwindcss" }
  ],
  backend: [
    { name: "Node.js" },
    { name: "Nest.js" },
    { name: "Django" },
    { name: "Laravel" },
    { name: "express.js" },
    { name: "springboot" }
  ],
  databases: [
    { name: "MySQL" },
    { name: "PostgreSQL" },
    { name: "NoSQL" }
  ],
  infrastructure: [
    { name: "Docker" },
    { name: "Azure" },
    { name: "Linux" }
  ]};
const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "Medio" }
];
const strengths = [
  "Desarrollo web completo (frontend y backend)",
  "Experiencia con frameworks modernos (React, Next.js, Nest.js, Django, Laravel)",
  "Capacidad para trabajar con bases de datos SQL y NoSQL",
  "Conocimientos en infraestructura y despliegues con Docker y Azure",
  "Manejo de Linux como sistema principal de desarrollo",
  "Experiencia previa en QA testing, debugging y seguridad básica",
  "Enfoque en innovación a través de mi startup TIKNO",
  "Capacidad de trabajo colaborativo y orientación a resultados"
];
const projects = [
  {
    id: 1,
    title: "TIKNO - Software Development Company",
    description: "Startup de desarrollo de software con enfoque en soluciones tecnológicas modernas y escalables",
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
    description: "Desarrollo de una app móvil diseñada para mejorar la salud mental de los usuarios utilizando Kotlin y Android Studio.",
    image: "/mindfulnes 1.jpg",
    tech: ["Kotlin", "Jetpack Compose", "Android Studio", "firebase"],
    github: "https://github.com/nicolas2601/yourJourney",
    featured: true
  },
  {
    id: 4,
    title: "Gestión de Horas Libres Universitarias",
    description: "Sistema desarrollado en Java para la optimización de tiempos y recursos en universidades, permitiendo gestionar eficientemente los espacios y horarios disponibles.",
    image: "/Java_Horas libres.jpg",
    tech: ["Java", "MySQL", "JDBC", "Swing"],
    github: "https://github.com/nicolas2601/HorasLibresUnab",
    featured: true
  },
  {
    id: 5,
    title: "Juego de Precisión tipo 'Aimlabs'",
    description: "Creación de un juego tipo 'Aimlabs' en Python para mejorar la precisión y reflejos, diseñado para jugadores que buscan mejorar su puntería en juegos FPS.",
    image: "/juego python.jpg",
    tech: ["Python", "Pygame", "Game Design", "NumPy", "Matplotlib"],
    github: "https://github.com/nicolas2601/Aimlab-python",
    featured: true
  },
  {
    id: 6,
    title: "Python Mentor",
    description: "Desarrollo de una pagina tipo platzi para aprender los fundamentos de desarrollo en python.",
    image: "/PythonMentor.jpg",
    tech: ["Laravel", "Blade", "propio depurador"],
    github: "https://github.com/nicolas2601/PythonMentor",
    featured: true
  },
  {
    id: 7,
    title: "ERP TIKNO",
    description: "ERP TIKNO es una aplicación web de administración de recursos empresariales que permite a las empresas gestionar sus operaciones de manera eficiente y efectiva. La aplicación ofrece una serie de módulos que abarcan desde la gestión de inventario y compras hasta la gestión de ventas y pagos. Además, la aplicación cuenta con un panel de control que permite a los usuarios monitorear y controlar sus operaciones en tiempo real.",
    image: "/erp.jpg",
    tech: ["Django", "React", "PostgreSQL", "JWT", "tailwindcss"],
    github: "https://github.com/TIKNO-col/APP-WEB",
    featured: true
  },
  {
    id: 8,
    title: "E-commerce TIKNO",
    description: "Plataforma de comercio electrónico completa con gestión de productos, carrito de compras, sistema de pagos y panel de administración.",
    image: "/ecommerce1.jpg",
    tech: ["Django", "React", "PostgreSQL", "JWT", "tailwindcss"],
    github: "https://github.com/nicolas2601/Ecommerce-TIKNO-Project",
    featured: true
  }
];

export { $$Layout as $, startup as a, strengths as b, certifications as c, projects as d, education as e, languages as l, personalInfo as p, skills as s, workExperience as w };
