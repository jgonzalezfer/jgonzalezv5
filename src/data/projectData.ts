export interface Project {
    title: string;
    image: string;
    description: string;
    timestamp: string;
    source: {
        name: string;
        icon?: string;
    };
}

export const projectsData: Project[] = [
    {
        title: "Portfolio Personal",
        image: "/img/projects/portfolio.jpg",
        description: "Portfolio personal desarrollado con React y TypeScript, utilizando Tailwind CSS para el diseño. Incluye modo oscuro y diseño responsive.",
        timestamp: "Actualizado recientemente",
        source: {
            name: "Proyecto Personal",
            icon: "/img/icons/personal.png"
        }
    },
    {
        title: "Sistema de Gestión",
        image: "/img/projects/management-system.jpg",
        description: "Sistema de gestión empresarial con autenticación de usuarios, gestión de inventario y reportes.",
        timestamp: "En desarrollo",
        source: {
            name: "Proyecto Empresarial",
            icon: "/img/icons/business.png"
        }
    },
    {
        title: "Aplicación de Tareas",
        image: "/img/projects/todo-app.jpg",
        description: "Aplicación de gestión de tareas con sincronización en tiempo real usando Firebase.",
        timestamp: "Completado",
        source: {
            name: "Proyecto Web",
            icon: "/img/icons/web.png"
        }
    },
    {
        title: "Plataforma de E-learning",
        image: "/img/projects/e-learning.jpg",
        description: "Plataforma de aprendizaje en línea con cursos, evaluaciones y seguimiento de progreso.",
        timestamp: "Planificado",
        source: {
            name: "Proyecto Educativo",
            icon: "/img/icons/education.png"
        }
    }
]; 