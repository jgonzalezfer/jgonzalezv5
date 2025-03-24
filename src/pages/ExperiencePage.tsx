import Layout from "../components/Layout";
import { FiChevronRight } from "react-icons/fi";

const ExperiencePage = () => {
  const experiences = [
    {
      id: 1,
      company: "Nanobytes",
      logo: "/company-logos/nanobytes.png",
      role: "Odoo Developer",
      period: "nov. 2024 - actualidad",
      location: "Granada, España",
      description: "Mi camino como programador comienza aquí. Desde desarrollo de módulos hasta bug fixes, en Nanobytes soy parte de lárea de Desarrollo, donde damos soporte técnico a decenas de clientes día a día."
    },
    {
      id: 2,
      company: "Factor Libre",
      logo: "/company-logos/factor-libre.png",
      role: "Project Manager - Odoo",
      period: "jun. 2022 - mar. 2024 (1 año y 10 meses)",
      location: "Madrid, España",
      description: "En Factor Libre continué mi tarea de dar consultoría a las empresas y gestionar los proyectos, esta vez coordinando con distintas áreas de la empresa para que en equipo las implementaciones avancen. Al mismo tiempo fui parte del área de 'Pedidos' donde desarrollábamos mejoras y nuevas funcionalidades para el sector de Compra y Venta de las empresas."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-8">
        <div className="ml-32 max-w-[652px]">
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="flex gap-4">
                <div className="w-12 h-12 flex-shrink-0">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-full h-full rounded-full object-cover bg-gray-100 dark:bg-gray-800"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    {exp.role}
                  </h3>
                  <div className="text-base font-medium text-gray-900 dark:text-gray-100">
                    {exp.company}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {exp.period}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {exp.location}
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </Layout>
  );
};

export default ExperiencePage;
