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
import NotFound from "./pages/NotFound";
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
