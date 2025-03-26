import Layout from "../components/Layout";
import { aboutData } from "../data/aboutData";
import AboutSection from "../components/AboutSection";

const SkillsPage = () => {


  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6 max-w-8xl mx-auto relative">
          {/* Panel izquierdo con AboutSection - Ahora más ancho */}
          <div className="lg:w-2/7 lg:sticky lg:top-8 lg:self-start">
            <div className="space-y-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4">
              {aboutData.personalInfo.map((info, index) => (
                <div key={index} className="border-b last:border-b-0 border-gray-100 dark:border-gray-700 pb-6">
                  <AboutSection
                    title={info.title}
                    image={info.image}
                    languages={aboutData.skills.languages}
                    link={aboutData.experience.link}
                    linkText={aboutData.experience.linkText}
                    description={info.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout> 
  );
};

export default SkillsPage;
