import Layout from "../components/Layout";
import { FiUser, FiCode, FiHeart, FiGlobe, FiBriefcase, FiBook, FiFolder } from "react-icons/fi";
import AboutSection from "../components/AboutSection";
import { aboutData } from "../data/aboutData";

const sobremiCvJoelPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          {aboutData.personalInfo.map((info, index) => (
            <div key={index} className="mb-8">
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
    </Layout>
  );
};

export default sobremiCvJoelPage; 