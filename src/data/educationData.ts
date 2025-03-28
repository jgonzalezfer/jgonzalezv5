export interface EducationItem {
    title: string;
    image: string;
    institution: string;
    period: string;
    link: string;
    linkText: string;
    description: string;
}

export const educationData: EducationItem[] = [
    {
        title: "Ingeniería en Informática",
        image: "/path/to/your/image.jpg",
        institution: "Universidad Ejemplo",
        period: "2018 - 2022",
        link: "/education/computer-engineering",
        linkText: "Ver más detalles",
        description: "Especialización en desarrollo de software y sistemas distribuidos"
    },
    {
        title: "Ingeniería en Informática",
        image: "/path/to/your/image.jpg",
        institution: "Universidad Ejemplo",
        period: "2018 - 2022",
        link: "/education/computer-engineering",
        linkText: "Ver más detalles",
        description: "Especialización en desarrollo de software y sistemas distribuidos"
    },
    {
        title: "Ingeniería en Informática",
        image: "/path/to/your/image.jpg",
        institution: "Universidad Ejemplo",
        period: "2018 - 2022",
        link: "/education/computer-engineering",
        linkText: "Ver más detalles",
        description: "Especialización en desarrollo de software y sistemas distribuidos"
    },
    // Puedes añadir más elementos de educación aquí
]; 