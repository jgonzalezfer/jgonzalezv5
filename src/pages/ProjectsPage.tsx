import Layout from "../components/Layout";
import ProjectSection from "../components/ProjectSection";
import { projectsData } from "../data/projectData";

const ProjectsPage = () => {
  return (
    <Layout>  
      <div className="container px-4 py-8">
        <div className="max-w-2xl">
          <div className="grid grid-cols-1 gap-6">
            {projectsData.map((project, index) => (
              <ProjectSection
                key={index}
                title={project.title}
                image={project.image}
                description={project.description}
                timestamp={project.timestamp}
                source={project.source}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout> 
  );
};

export default ProjectsPage;
