import Layout from "../components/Layout";
import { aboutData } from "../data/aboutData";
import AboutSection from "../components/AboutSection";
import NavigationBar from "../components/NavigationBar";
import noImage from "../assets/img/imagen_no_disponible.jpg";
import { useNavigate } from "react-router-dom";

const ExperiencePage = () => {
  const navigate = useNavigate();

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
    { img: noImage, title: "Data", subtitle: "Data", path: "/experience/data" },
    { img: noImage, title: "Python", subtitle: "Python", path: "/experience/python" },
    { img: noImage, title: "Websites", subtitle: "Websites", path: "/experience/websites" },
    { img: noImage, title: "Librerías", subtitle: "Librerías", path: "/experience/libraries" },
    { img: noImage, title: "Screen scraping", subtitle: "Screen scraping", path: "/experience/screen-scraping" },
    { img: noImage, title: "Extraer", subtitle: "Extraer", path: "/experience/extract" },
    { img: noImage, title: "Scraping tool", subtitle: "Scraping tool", path: "/experience/scraping-tool" },
    { img: noImage, title: "Html", subtitle: "Html", path: "/experience/html" },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <NavigationBar items={navigationItems} />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-8">
          {experienceItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white group cursor-pointer"
              onClick={() => navigate(item.path)}
            >
              <div className="aspect-square">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-2">
                <h3 className="relative text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200 pb-1">
                  {item.title}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
                </h3>
                <p className="text-xs font-light text-gray-400 mt-0.5">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>     
  );
};

export default ExperiencePage;
