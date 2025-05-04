import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "es";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    // Navbar
    "nav.about": "About Me",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "nav.backend": "Backend",

    // Hero
    "hero.intro": "Hi, I'm",
    "hero.position": "Frontend Engineer",
    "hero.description": "I build responsive, user-friendly web applications with modern technologies focused on clean code and exceptional user experiences.",
    "hero.contact": "Get in Touch",
    "hero.work": "View My Work",
    "hero.scroll": "Scroll Down",

    // About
    "about.title": "About Me",
    "about.intro": "I'm a ",
    "about.profession": "Computer and System Engineer",
    "about.specialized": " specialized in Fullstack development with a primary focus on creating exceptional frontend experiences.",
    "about.growth": "Growth-oriented and collaborative, I bring strong experience in projects focused on data insights and user-friendly dashboard visualizations. My technical expertise includes web development with a focus on framework architectures, UX/UI design, and web services.",
    "about.driven": "I'm driven by continuous learning and thrive in dynamic work environments where I can achieve both professional and personal growth while delivering high-quality solutions.",
    "about.education": "Education",
    "about.university": "Universidad del Norte",
    "about.degree": "Bachelor's Degree in Computer Science",
    "about.period": "January 2017 - March 2023",
    "about.coursework": "Relevant Coursework",

    // Experience
    "experience.title": "Professional Experience",
    "experience.instructor.title": "Bootcamp Instructor",
    "experience.instructor.company": "Talento TECH",
    "experience.instructor.period": "February 2024 - September 2024",
    "experience.instructor.location": "Barranquilla, Colombia",
    "experience.instructor.resp1": "Delivered theoretical and practical instruction in Python programming to demonstrate frontend-focused applications powered by AI.",
    "experience.instructor.resp2": "Designed and taught a study plan covering core concepts, best practices in UI/UX design, responsive layout, and accessibility to create seamless and professional user interfaces.",
    "experience.instructor.resp3": "Guided students in real-world AI projects and promoted problem-solving through hands-on exercises and code reviews.",
    "experience.cisco.title": "IT Consultant Engineer",
    "experience.cisco.company": "Cisco Technologies",
    "experience.cisco.period": "February 2023 - August 2023",
    "experience.cisco.location": "Barranquilla, Colombia",
    "experience.cisco.resp1": "Technical Consultant Engineer with strong experience in Cisco Wireless technologies, implementing responsive web interfaces for Cisco's Customer On-Premises network management dashboards using React.js, optimizing user interaction with complex wireless systems including WLCs.",
    "experience.cisco.resp2": "Proficient in networking solutions such as mesh networks, web authentication, RADIUS, TACACS, and SSL for secure connectivity.",
    "experience.cisco.resp3": "Transformed real-time monitoring interfaces for wireless network, with a proven track record in diagnosing and resolving performance, using WebSockets, React hooks and Tailwind CSS on mid-size Organizations.",

    // Projects
    "projects.title": "Featured Projects",
    "projects.monkeypox.title": "Monkeypox Data Analysis App",
    "projects.monkeypox.description": "A comprehensive data analysis application focused on epidemiological insights from monkeypox case data.",
    "projects.monkeypox.date": "December 2022",
    "projects.monkeypox.features": "Key Features:",
    "projects.monkeypox.highlight1": "Analyzed monkeypox case data from Kaggle using Python libraries to extract epidemiological insights.",
    "projects.monkeypox.highlight2": "Performed data cleaning, exploratory analysis, and created user-friendly dashboard visualizations to highlight trends.",
    "projects.monkeypox.highlight3": "Trained a linear regression model with Scikit-Learn to explore predictive patterns.",
    "projects.monkeypox.highlight4": "Connected the React frontend with a Python backend enabling real-time updates and data-driven user interactions.",
    "projects.technologies": "Technologies:",
    "projects.view": "View Project",

    // Skills
    "skills.title": "Technical Skills",
    "skills.languages": "Languages",
    "skills.frameworks": "Frameworks/Libraries",
    "skills.tools": "Developer Tools",
    "skills.expertise": "Areas of Expertise",

    // Contact
    "contact.title": "Get In Touch",
    "contact.description": "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.name": "Name",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.yourname": "Your name",
    "contact.youremail": "Your email",
    "contact.send": "Send Message",

    // Footer
    "footer.rights": "All rights reserved."
  },
  es: {
    // Navbar
    "nav.about": "Sobre Mí",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.skills": "Habilidades",
    "nav.contact": "Contacto",
    "nav.backend": "Backend", // Add this new translation
    
    // Hero
    "hero.intro": "Hola, soy",
    "hero.position": "Ingeniero Frontend",
    "hero.description": "Construyo aplicaciones web responsivas y fáciles de usar con tecnologías modernas enfocadas en código limpio y experiencias de usuario excepcionales.",
    "hero.contact": "Contáctame",
    "hero.work": "Ver Mi Trabajo",
    "hero.scroll": "Desplázate Abajo",

    // About
    "about.title": "Sobre Mí",
    "about.intro": "Soy un ",
    "about.profession": "Ingeniero de Sistemas y Computación",
    "about.specialized": " especializado en desarrollo Fullstack con enfoque principal en crear experiencias frontend excepcionales.",
    "about.growth": "Orientado al crecimiento y colaborativo, aporto una sólida experiencia en proyectos centrados en análisis de datos y visualizaciones de tableros intuitivos. Mi experiencia técnica incluye desarrollo web con enfoque en arquitecturas de frameworks, diseño UX/UI y servicios web.",
    "about.driven": "Me impulsa el aprendizaje continuo y prospero en entornos de trabajo dinámicos donde puedo lograr crecimiento profesional y personal mientras entrego soluciones de alta calidad.",
    "about.education": "Educación",
    "about.university": "Universidad del Norte",
    "about.degree": "Licenciatura en Ciencias de la Computación",
    "about.period": "Enero 2017 - Marzo 2023",
    "about.coursework": "Cursos Relevantes",

    // Experience
    "experience.title": "Experiencia Profesional",
    "experience.instructor.title": "Instructor de Bootcamp",
    "experience.instructor.company": "Talento TECH",
    "experience.instructor.period": "Febrero 2024 - Septiembre 2024",
    "experience.instructor.location": "Barranquilla, Colombia",
    "experience.instructor.resp1": "Impartí instrucción teórica y práctica en programación Python para demostrar aplicaciones frontend impulsadas por IA.",
    "experience.instructor.resp2": "Diseñé y enseñé un plan de estudio que abarca conceptos básicos, mejores prácticas en diseño UI/UX, diseño responsivo y accesibilidad para crear interfaces de usuario profesionales.",
    "experience.instructor.resp3": "Guié a los estudiantes en proyectos de IA del mundo real y promoví la resolución de problemas a través de ejercicios prácticos y revisiones de código.",
    "experience.cisco.title": "Ingeniero Consultor IT",
    "experience.cisco.company": "Cisco Technologies",
    "experience.cisco.period": "Febrero 2023 - Agosto 2023",
    "experience.cisco.location": "Barranquilla, Colombia",
    "experience.cisco.resp1": "Ingeniero Consultor Técnico con fuerte experiencia en tecnologías inalámbricas Cisco, implementando interfaces web responsivas para los tableros de gestión de red en las instalaciones del cliente de Cisco usando React.js, optimizando la interacción del usuario con sistemas inalámbricos complejos incluyendo WLCs.",
    "experience.cisco.resp2": "Competente en soluciones de redes como redes mesh, autenticación web, RADIUS, TACACS y SSL para conectividad segura.",
    "experience.cisco.resp3": "Transformé interfaces de monitoreo en tiempo real para redes inalámbricas, con un historial probado en diagnóstico y resolución de rendimiento, usando WebSockets, React hooks y Tailwind CSS en organizaciones de tamaño medio.",

    // Projects
    "projects.title": "Proyectos Destacados",
    "projects.monkeypox.title": "Aplicación de Análisis de Datos de Monkeypox",
    "projects.monkeypox.description": "Una aplicación integral de análisis de datos enfocada en obtener información epidemiológica de datos de casos de viruela del mono.",
    "projects.monkeypox.date": "Diciembre 2022",
    "projects.monkeypox.features": "Características Principales:",
    "projects.monkeypox.highlight1": "Análisis de datos de casos de viruela del mono de Kaggle utilizando bibliotecas de Python para extraer información epidemiológica.",
    "projects.monkeypox.highlight2": "Realicé limpieza de datos, análisis exploratorio y creé visualizaciones de tableros fáciles de usar para destacar tendencias.",
    "projects.monkeypox.highlight3": "Entrené un modelo de regresión lineal con Scikit-Learn para explorar patrones predictivos.",
    "projects.monkeypox.highlight4": "Conecté el frontend de React con un backend de Python permitiendo actualizaciones en tiempo real e interacciones basadas en datos.",
    "projects.technologies": "Tecnologías:",
    "projects.view": "Ver Proyecto",

    // Skills
    "skills.title": "Habilidades Técnicas",
    "skills.languages": "Lenguajes",
    "skills.frameworks": "Frameworks/Librerías",
    "skills.tools": "Herramientas de Desarrollo",
    "skills.expertise": "Áreas de Experiencia",

    // Contact
    "contact.title": "Ponte en Contacto",
    "contact.description": "Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tus visiones.",
    "contact.phone": "Teléfono",
    "contact.email": "Correo",
    "contact.name": "Nombre",
    "contact.subject": "Asunto",
    "contact.message": "Mensaje",
    "contact.yourname": "Tu nombre",
    "contact.youremail": "Tu correo",
    "contact.send": "Enviar Mensaje",

    // Footer
    "footer.rights": "Todos los derechos reservados."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
