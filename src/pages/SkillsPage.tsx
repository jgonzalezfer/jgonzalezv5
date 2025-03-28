import Layout from "../components/Layout";
import ProductGrid from "../data/ProductGrid";

const SkillsPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Relojes G-Shock
            </h1>
            <ProductGrid />
          </div>
        </div>
      </div>
    </Layout> 
  );
};

export default SkillsPage;
