import Layout from "../components/Layout";
import { aboutData } from "../data/aboutData";
import AboutSection from "../components/AboutSection";
import EducationSection from "../components/EducationSection";
import { useEffect, useState } from "react";
import loadEducation from "../utils/loadEducation";
import type { Education } from "../utils/loadEducation";
import imagenNoDisponible from "../assets/img/imagen_no_disponible.jpg";

const EducationPage = () => {
  const [education, setEducation] = useState<Education[]>([]);

  useEffect(() => {
    const fetchEducation = async () => {
      const educationData = await loadEducation();
      setEducation(educationData);
    };

    fetchEducation();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6 max-w-8xl mx-auto relative">
          {/* Panel derecho con EducationSection */}
          <div className="lg:w-2/7 lg:sticky lg:top-8 lg:self-start">
            <div className="space-y-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4">
              {education.map((edu, index) => (
                <div key={index} className="border-b last:border-b-0 border-gray-100 dark:border-gray-700 pb-6">
                  <EducationSection
                    title={edu.title}
                    image={edu.image || imagenNoDisponible}
                    institution={edu.institution}
                    period={edu.period}
                    links={edu.links}
                    linkText={edu.linkText}
                    description={edu.description}
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

export default EducationPage;
