import Layout from "../components/Layout";
import ProductGrid from "../components/ProductGrid";
import FilterPanel from "../components/FilterPanel";

const SkillsPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-[1920px] mx-auto">

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Panel de filtros (izquierda) */}
              <div className="lg:w-1/4">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
                  <FilterPanel />
                </div>
              </div>

              {/* Grid de productos (derecha) */}
              <div className="lg:w-3/4">
                <ProductGrid />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout> 
  );
};

export default SkillsPage;
