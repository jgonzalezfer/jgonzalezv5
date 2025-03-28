import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import SkillsPage from "./pages/SkillsPage";
import ResumePage from "./pages/ResumePage";
import WhoAmIPage from "./pages/WhoAmIPage";
import SobremiCvJoelPage from "./pages/SobremiCvJoelPage";
import { ThemeProvider } from "./context/ThemeContext";
import ProjectSection from './components/ProjectSection';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre-joel" element={<AboutPage />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/experiencia" element={<ExperiencePage />} />
          <Route path="/estudios" element={<EducationPage />} />
          <Route path="/conocimientos" element={<SkillsPage />} />
          <Route path="/curriculum" element={<ResumePage />} />
          <Route path="/quien-soy" element={<WhoAmIPage />} />
          <Route path="/sobremiCvJoelPage" element={<SobremiCvJoelPage />} />
        </Routes>
      </Router>
      <div className="min-h-screen bg-black p-4">
        <ProjectSection
          title="Gucci G-Flat: Lujo minimalista al alcance de todos"
          description="La colección Gucci G-Flat emerge como un testimonio del arte del diseño contemporáneo, combinando innovación con una rica herencia."
          image="https://example.com/path-to-gucci-image.jpg"
          timestamp="hace 2 horas"
          source={{
            name: "AmericaMalls & Retail",
            icon: "https://example.com/path-to-icon.jpg"
          }}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
