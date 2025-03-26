import Layout from "../components/Layout";
import { aboutData } from "../data/aboutData";
import AboutSection from "../components/AboutSection";
import NavigationBar from "../components/NavigationBar";
import noImage from "../assets/img/imagen_no_disponible.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ExperiencePage = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<null | any>(null);

  const navigationItems = [
    { img: noImage, text: "Data" },
    { img: noImage, text: "Python" },
    { img: noImage, text: "Websites" },
    { img: noImage, text: "Librerías" },
    { img: noImage, text: "Screen scraping" },
    { img: noImage, text: "Extraer" },
    { img: noImage, text: "Scraping tool" },
    { img: noImage, text: "Html" },
  ];

  const experienceItems = [
    { 
      img: noImage, 
      title: "Data", 
      subtitle: "Data", 
      path: "/experience/data",
      description: "Análisis y procesamiento de datos utilizando diferentes herramientas y técnicas."
    },
    { 
      img: noImage, 
      title: "Python", 
      subtitle: "Python", 
      path: "/experience/python",
      description: "Desarrollo de aplicaciones y scripts en Python para automatización y análisis de datos."
    },
    { img: noImage, title: "Websites", subtitle: "Websites", path: "/experience/websites" },
    { img: noImage, title: "Librerías", subtitle: "Librerías", path: "/experience/libraries" },
    { img: noImage, title: "Screen scraping", subtitle: "Screen scraping", path: "/experience/screen-scraping" },
    { img: noImage, title: "Extraer", subtitle: "Extraer", path: "/experience/extract" },
    { img: noImage, title: "Scraping tool", subtitle: "Scraping tool", path: "/experience/scraping-tool" },
    { img: noImage, title: "Html", subtitle: "Html", path: "/experience/html" },
    { img: noImage, title: "Html", subtitle: "Html", path: "/experience/html" },
    { img: noImage, title: "Html", subtitle: "Html", path: "/experience/html" },

  ];

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <NavigationBar items={navigationItems} />
        
        <div className="flex flex-col md:flex-row mt-8 gap-6">
          <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 transition-all duration-300 ease-in-out ${
            selectedItem ? 'md:w-2/3 hidden md:grid' : 'w-full'
          }`}>
            {experienceItems.map((item, index) => (
              <div 
                key={index} 
                className={`bg-white group cursor-pointer transition-all duration-300 ${
                  selectedItem?.title === item.title ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => handleItemClick(item)}
              >
                <div className="aspect-square">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2">
                  <h3 className="relative text-xs font-light text-gray-600 group-hover:text-blue-600 transition-colors duration-200 pb-1">
                    {item.title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
                  </h3>
                  <p className="text-sm font-light font-medium text-black mt-0.5">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {selectedItem && (
            <div className="fixed md:relative inset-0 md:inset-auto w-full md:w-1/3 bg-white shadow-lg md:rounded-lg overflow-hidden transition-all duration-300 ease-in-out z-50">
              <div className="relative">
                <img 
                  src={selectedItem.img} 
                  alt={selectedItem.title} 
                  className="w-full h-48 md:h-48 object-cover"
                />
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold">{selectedItem.title}</h2>
                <p className="text-gray-600 mt-2">{selectedItem.subtitle}</p>
                {selectedItem.description && (
                  <div className="mt-6 text-gray-700">
                    <p>{selectedItem.description}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>     
  );
};

export default ExperiencePage;
