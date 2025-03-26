export interface AboutData {
  personalInfo: {
    name: string;
    title: string;
    description: string;
    image: string;
    section: string;
    birthDate?: string;
    birthPlace?: string;
    titles?: string[];
    softSkills?: string[];
    languages?: string[];
    interests?: string[];
    favoriteQuote?: string;
  }[];
  skills: {
    languages: string[];
    technologies: string[];
    tools: string[];
  };
  experience: {
    years: number;
    description: string;
    link: string;
    linkText: string;
  };
  sections: {
    presentation: {
      title: string;
      description: string;
    };
    specialization: {
      title: string;
      description: string;
    };
    passions: {
      title: string;
      description: string;
    };
    vision: {
      title: string;
      description: string;
    };
  };
  experiences: {
    title: string;
    company: string;
    period: string;
    description: string;
    technologies: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
    description: string;
  }[];
  projects: {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    linkText?: string;
  }[];
}

export const aboutData: AboutData = {
  personalInfo: [
    {
      name: "Joel González",
      title: "Desarrollador de Software",
      description: "¡Hola! Soy Joel González, un desarrollador de software apasionado por crear soluciones innovadoras y experiencias digitales excepcionales.",
      image: "/src/assets/img/imagen no disponible.jpg",
      section: "presentacion",
      birthDate: "02 de abril de 1992 (32 años)",
      birthPlace: "Rosario, Santa Fe, Argentina",
      titles: ["Analista de Sistemas", "Analista Programador", "Programador FullStack"],
      softSkills: ["Comunicación efectiva", "trabajo en equipo", "resolución de problemas", "adaptabilidad y flexibilidad"],
      languages: ["Español (nativo)", "Inglés (intermedio)"],
      interests: ["Programación", "tecnología", "series", "películas", "fútbol", "pádel", "viajes"],
      favoriteQuote: "Hazlo, y si te da miedo, hazlo con miedo."
    },
    {
      name: "Joel González",
      title: "Experto en Odoo",
      description: "Con más de 10 años de experiencia en el desarrollo de módulos y soluciones personalizadas para Odoo, he ayudado a empresas a optimizar sus procesos empresariales.",
      image: "/src/assets/img/odoo-experience.jpg",
      section: "odoo"
    },
    {
      name: "Joel González",
      title: "Desarrollador Full Stack",
      description: "Especializado en el desarrollo de aplicaciones web modernas utilizando React, Node.js y tecnologías cloud.",
      image: "/src/assets/img/fullstack.jpg",
      section: "fullstack"
    }
  ],
  skills: {
    languages: ["Python", "XML", "JavaScript", "TypeScript"],
    technologies: ["React", "Node.js", "Odoo", "Next.js"],
    tools: ["Git", "Docker", "VS Code", "PostgreSQL"]
  },
  experience: {
    years: 10,
    description: "Con más de 10 años de experiencia en el ERP Odoo, tuve la oportunidad de haber trabajado mucho con este sistema y poder conocerlo a fondo para desarrollar mejoras y soluciones de todo tipo.",
    link: "https://www.javierdiez.netlify.app",
    linkText: "Odoo modules"
  },
  sections: {
    presentation: {
      title: "Presentación",
      description: "¡Hola! Soy Joel González, un desarrollador de software apasionado por crear soluciones innovadoras y experiencias digitales excepcionales. Con más de 5 años de experiencia en el desarrollo web, me especializo en crear aplicaciones modernas y escalables."
    },
    specialization: {
      title: "Especialización",
      description: "Mi enfoque principal se centra en el desarrollo web moderno, utilizando tecnologías como React, Node.js y bases de datos modernas. Me apasiona crear código limpio y mantenible que resuelva problemas reales."
    },
    passions: {
      title: "Pasiones",
      description: "Me apasiona la tecnología y el aprendizaje continuo. Me encanta explorar nuevas tecnologías y compartir conocimientos con la comunidad de desarrolladores. También disfruto de la resolución de problemas complejos y la creación de experiencias de usuario intuitivas."
    },
    vision: {
      title: "Visión",
      description: "Mi objetivo es contribuir al desarrollo de tecnologías que hagan del mundo un lugar mejor. Creo en la importancia de crear software que no solo sea funcional, sino también accesible, sostenible y que tenga un impacto positivo en la sociedad."
    }
  },
  experiences: [
    {
      title: "Desarrollador Senior Odoo",
      company: "Empresa Actual",
      period: "2020 - Presente",
      description: "Liderando el desarrollo de módulos personalizados para Odoo, implementando nuevas funcionalidades y mejorando la eficiencia de los procesos empresariales.",
      technologies: ["Python", "Odoo", "PostgreSQL", "XML"]
    },
    {
      title: "Desarrollador Full Stack",
      company: "Empresa Anterior",
      period: "2018 - 2020",
      description: "Desarrollo de aplicaciones web completas utilizando React y Node.js, implementando arquitecturas modernas y mejores prácticas.",
      technologies: ["React", "Node.js", "TypeScript", "MongoDB"]
    }
  ],
  education: [
    {
      degree: "Ingeniería en Informática",
      institution: "Universidad XYZ",
      period: "2015 - 2019",
      description: "Formación completa en desarrollo de software y tecnologías de la información."
    },
    {
      degree: "Certificación en Desarrollo Web",
      institution: "Instituto ABC",
      period: "2013 - 2015",
      description: "Especialización en tecnologías web modernas y desarrollo frontend."
    }
  ],
  projects: [
    {
      title: "Sistema de Gestión Empresarial",
      description: "Desarrollo de un sistema completo de gestión empresarial basado en Odoo con módulos personalizados.",
      technologies: ["Python", "Odoo", "PostgreSQL"],
      link: "https://ejemplo.com/proyecto1",
      linkText: "Ver Proyecto"
    },
    {
      title: "Aplicación Web de E-commerce",
      description: "Creación de una plataforma de comercio electrónico moderna con React y Node.js.",
      technologies: ["React", "Node.js", "MongoDB"]
    }
  ]
}; 