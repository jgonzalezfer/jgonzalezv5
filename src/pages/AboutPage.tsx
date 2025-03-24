import Layout from "../components/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-4xl p-6">
        <h1 className="mb-6 text-3xl font-semibold text-gray-900 dark:text-white">Sobre joel</h1>
        <div className="space-y-4">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Hola, soy joel. Desarrollador de software con especialización en tecnologías web modernas. Apasionado por crear soluciones innovadoras y experiencias de usuario excepcionales.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Mi objetivo es combinar mi conocimiento técnico con mi creatividad para construir aplicaciones web de alta calidad que resuelvan problemas reales.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Si estás interesado en colaborar en un proyecto o simplemente quieres conectar, no dudes en contactarme a través de mis redes sociales.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
