import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Página no encontrada</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Lo sentimos, la página que buscas no existe.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound; 