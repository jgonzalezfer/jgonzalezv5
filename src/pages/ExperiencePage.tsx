import Layout from "../components/Layout";
import NavigationBar from "../components/NavigationBar";
import noImage from "../assets/img/imagen_no_disponible.jpg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import loadExperiences, { JobExperience } from "../utils/loadExperiences";

const ExperiencePage = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<null | JobExperience>(null);
  const [experiences, setExperiences] = useState<JobExperience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const loadedExperiences = await loadExperiences();
        setExperiences(loadedExperiences);
      } catch (error) {
        console.error('Error loading experiences:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  const navigationItems = [
    { img: noImage, text: "Desarrollo Web" },
    { img: noImage, text: "WordPress" },
    { img: noImage, text: "E-commerce" },
    { img: noImage, text: "Frontend" },
    { img: noImage, text: "Backend" },
  ];

  const handleItemClick = (item: JobExperience) => {
    setSelectedItem(item);
  };

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <NavigationBar items={navigationItems} />
        
        <div className="flex flex-col md:flex-row mt-8 gap-6">
          <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 transition-all duration-300 ease-in-out ${
            selectedItem ? 'md:w-2/3 hidden md:grid' : 'w-full'
          }`}>
            {experiences.map((item, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-md group cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedItem?.title === item.title ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => handleItemClick(item)}
              >
                <div className="aspect-square">
                  <img 
                    src={noImage} 
                    alt={item.title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-3">
                  <h3 className="relative text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200 pb-1">
                    {item.title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
                  </h3>
                  <p className="text-xs font-medium text-gray-600 mt-1">{item.company}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.range}</p>
                </div>
              </div>
            ))}
          </div>

          {selectedItem && (
            <div className="fixed md:relative inset-0 md:inset-auto w-full md:w-1/3 bg-white shadow-lg md:rounded-lg overflow-y-auto max-h-screen md:max-h-[500px] transition-all duration-300 ease-in-out z-50">
              <div className="sticky top-0 z-10 bg-white">
                <div className="relative h-20 bg-gray-100">
                  <img 
                    src={noImage} 
                    alt={selectedItem.title} 
                    className="w-full h-full object-cover"
                  />
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-lg text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="px-3 py-2 bg-white border-b">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-base font-semibold text-gray-800">{selectedItem.title}</h2>
                      <p className="text-sm text-gray-600">{selectedItem.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">{selectedItem.location}</p>
                      <p className="text-xs text-gray-500">{selectedItem.range}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3 py-2">
                {selectedItem.technologies && (
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {selectedItem.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <div className="text-gray-700 text-sm space-y-2">
                  {selectedItem.description.split('\n\n').map((paragraph, index) => (
                    paragraph.trim() && (
                      <p key={index} className="leading-relaxed">
                        {paragraph.trim()}
                      </p>
                    )
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>     
  );
};

export default ExperiencePage;
