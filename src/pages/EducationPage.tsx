import Layout from "../components/Layout";

const EducationPage = () => {
  const education = [
    {
      id: 1,
      degree: "Máster en Desarrollo Web Avanzado",
      institution: "Universidad Tecnológica de Madrid",
      period: "2016 - 2017",
      description: "Especialización en desarrollo web frontend y backend. Proyectos destacados en React, Node.js y sistemas distribuidos."
    },
    {
      id: 2,
      degree: "Grado en Ingeniería Informática",
      institution: "Universidad de Barcelona",
      period: "2012 - 2016",
      description: "Formación en fundamentos de la informática, algoritmos, estructuras de datos y desarrollo de software."
    },
    {
      id: 3,
      degree: "Curso de Especialización en UX/UI",
      institution: "Escuela de Diseño Digital",
      period: "2015",
      description: "Formación especializada en diseño de interfaces de usuario y experiencia de usuario para aplicaciones web y móviles."
    }
  ];

  return (
    <Layout>
      <div className="mx-auto max-w-4xl p-6">
        <h1 className="mb-6 text-3xl font-semibold text-gray-900 dark:text-white">Estudios</h1>
        <div className="space-y-8">
          {education.map((edu) => (
            <div key={edu.id} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-colors dark:border-gray-700 dark:bg-gray-800">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">{edu.degree}</h2>
              <div className="mb-2 flex items-center">
                <span className="font-medium text-green-600 dark:text-green-400">{edu.institution}</span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default EducationPage;
